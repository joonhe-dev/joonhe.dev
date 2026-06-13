import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { formatDateLong } from "@/lib/date";
import { generateSeoMeta } from "@/lib/seo";
import { posts, type PostMeta } from "@/lib/posts";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { RelatedPosts } from "@/components/blog/related-posts";
import { ReadingTime } from "@/components/blog/reading-time";
import { AuthorBio } from "@/components/blog/author-bio";
import fs from "fs";
import path from "path";

// 从 MDX 文件读取文章元数据
const postsMeta: PostMeta[] = posts;

// 读取 MDX 内容，去掉 frontmatter
function readMdxContent(slug: string): string | null {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "content",
      "blog",
      `${slug}.mdx`,
    );
    const raw = fs.readFileSync(filePath, "utf-8");

    // 去掉 frontmatter (--- 之间的内容)
    const content = raw.replace(/^---[\s\S]*?---\n*/, "").trim();
    return content;
  } catch {
    return null;
  }
}

// HTML 转义，防止 XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 解析内联格式（先转义 HTML，再处理 Markdown 语法）
function renderInline(text: string): string {
  return escapeHtml(text)
    // **bold**
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // *italic*（避免匹配已处理的 **bold**）
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    // `code`
    .replace(/`(.+?)`/g, "<code class='rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-pink-600 dark:bg-zinc-800 dark:text-pink-400'>$1</code>")
    // [text](url) — 只允许 http/https 链接
    .replace(
      /\[(.+?)\]\((https?:\/\/.+?)\)/g,
      "<a href='$2' class='text-indigo-500 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-600' target='_blank' rel='noopener noreferrer'>$1</a>",
    );
}

// 渲染 Markdown 内容为 React 元素
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLang = "";
  let inTable = false;
  let tableBuffer: string[] = [];

  const flushCodeBlock = (key: number) => {
    if (codeBuffer.length > 0) {
      elements.push(
        <pre
          key={key}
          className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800"
        >
          <code>{codeBuffer.join("\n")}</code>
        </pre>,
      );
      codeBuffer = [];
    }
  };

  const flushTable = (key: number) => {
    if (tableBuffer.length >= 2) {
      // 过滤掉表格分隔符行（|---|---|）
      const dataRows = tableBuffer.filter(
        (row) => !/^\|[\s\-:|]+\|$/.test(row),
      );
      elements.push(
        <div key={key} className="my-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            {dataRows.map((row, ri) => {
              const cells = row
                .split("|")
                .filter((c) => c.trim())
                .map((c) => c.trim());
              const isHeader = ri === 0;
              const tag = isHeader ? "th" : "td";
              return (
                <tr key={ri}>
                  {cells.map((cell, ci) =>
                    React.createElement(
                      tag,
                      {
                        key: ci,
                        className: `border border-zinc-300 px-4 py-2 text-left dark:border-zinc-700 ${
                          isHeader
                            ? "bg-zinc-100 font-semibold dark:bg-zinc-800"
                            : ""
                        }`,
                        dangerouslySetInnerHTML: {
                          __html: renderInline(cell),
                        },
                      },
                    ),
                  )}
                </tr>
              );
            })}
          </table>
        </div>,
      );
    }
    tableBuffer = [];
  };

  let keyCounter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // 代码块
    if (trimmed.startsWith("```")) {
      if (inCodeBlock) {
        flushCodeBlock(keyCounter++);
        inCodeBlock = false;
        codeLang = "";
      } else {
        inCodeBlock = true;
        codeLang = trimmed.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // 表格
    if (trimmed.startsWith("|")) {
      tableBuffer.push(trimmed);
      inTable = true;
      continue;
    } else if (inTable) {
      flushTable(keyCounter++);
      inTable = false;
    }

    // 空行
    if (trimmed === "") {
      elements.push(<div key={keyCounter++} className="h-3" />);
      continue;
    }

    // 水平线 --- / *** / ___
    if (/^[-*_]{3,}$/.test(trimmed)) {
      elements.push(
        <hr
          key={keyCounter++}
          className="my-8 border-t border-zinc-200 dark:border-zinc-700"
        />,
      );
      continue;
    }

    // 块引用 > text
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = [trimmed.slice(2)];
      while (
        i + 1 < lines.length &&
        lines[i + 1].trim().startsWith("> ")
      ) {
        i++;
        quoteLines.push(lines[i].trim().slice(2));
      }
      elements.push(
        <blockquote
          key={keyCounter++}
          className="my-4 border-l-4 border-indigo-300 pl-4 italic text-zinc-600 dark:border-indigo-700 dark:text-zinc-400"
        >
          {quoteLines.map((line, idx) => (
            <p
              key={idx}
              className="my-1"
              dangerouslySetInnerHTML={{ __html: renderInline(line) }}
            />
          ))}
        </blockquote>,
      );
      continue;
    }

    // H2
    if (trimmed.startsWith("## ") && !trimmed.startsWith("###")) {
      const headingText = trimmed.slice(3);
      const id = headingText
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fff]+/g, "-")
        .replace(/(^-|-$)/g, "");
      elements.push(
        <h2
          id={id}
          key={keyCounter++}
          className="mt-10 mb-4 scroll-mt-24 text-2xl font-semibold tracking-tight"
          dangerouslySetInnerHTML={{
            __html: renderInline(headingText),
          }}
        />,
      );
      continue;
    }

    // H3 (with id for TOC)
    if (trimmed.startsWith("### ")) {
      const headingText = trimmed.slice(4);
      const id = headingText
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fff]+/g, "-")
        .replace(/(^-|-$)/g, "");
      elements.push(
        <h3
          id={id}
          key={keyCounter++}
          className="mt-6 mb-3 scroll-mt-24 text-xl font-semibold tracking-tight"
          dangerouslySetInnerHTML={{
            __html: renderInline(headingText),
          }}
        />,
      );
      continue;
    }

    // H4
    if (trimmed.startsWith("#### ")) {
      elements.push(
        <h4
          key={keyCounter++}
          className="mt-4 mb-2 text-lg font-semibold"
          dangerouslySetInnerHTML={{
            __html: renderInline(trimmed.slice(5)),
          }}
        />,
      );
      continue;
    }

    // 复选框列表 - [ ] / - [x]
    if (/^- \[[ x]\]/.test(trimmed)) {
      const items: { checked: boolean; text: string }[] = [];
      const match = trimmed.match(/^- \[([ x])\] (.+)$/);
      if (match) {
        items.push({ checked: match[1] === "x", text: match[2] });
        while (
          i + 1 < lines.length &&
          /^- \[[ x]\]/.test(lines[i + 1].trim())
        ) {
          i++;
          const m = lines[i].trim().match(/^- \[([ x])\] (.+)$/);
          if (m) items.push({ checked: m[1] === "x", text: m[2] });
        }
      }
      elements.push(
        <ul key={keyCounter++} className="my-2 ml-6 space-y-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
              <span className="mt-0.5 flex-shrink-0">
                {item.checked ? (
                  <svg className="h-4 w-4 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4 text-zinc-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="14" height="14" rx="2" />
                  </svg>
                )}
              </span>
              <span dangerouslySetInnerHTML={{ __html: renderInline(item.text) }} />
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    // 无序列表
    if (trimmed.startsWith("- ")) {
      const items: string[] = [trimmed.slice(2)];
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith("- ")) {
        i++;
        items.push(lines[i].trim().slice(2));
      }
      elements.push(
        <ul key={keyCounter++} className="my-2 ml-6 list-disc space-y-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="text-zinc-600 dark:text-zinc-400"
              dangerouslySetInnerHTML={{ __html: renderInline(item) }}
            />
          ))}
        </ul>,
      );
      continue;
    }

    // 有序列表
    if (/^\d+\. /.test(trimmed)) {
      const items: string[] = [trimmed.replace(/^\d+\. /, "")];
      while (i + 1 < lines.length && /^\d+\. /.test(lines[i + 1].trim())) {
        i++;
        items.push(lines[i].trim().replace(/^\d+\. /, ""));
      }
      elements.push(
        <ol key={keyCounter++} className="my-2 ml-6 list-decimal space-y-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="text-zinc-600 dark:text-zinc-400"
              dangerouslySetInnerHTML={{ __html: renderInline(item) }}
            />
          ))}
        </ol>,
      );
      continue;
    }

    // 普通段落
    elements.push(
      <p
        key={keyCounter++}
        className="my-2 leading-relaxed text-zinc-600 dark:text-zinc-400"
        dangerouslySetInnerHTML={{ __html: renderInline(trimmed) }}
      />,
    );
  }

  // 刷新剩余的代码块/表格
  if (inCodeBlock) flushCodeBlock(keyCounter++);
  if (inTable) flushTable(keyCounter++);

  return elements;
}

export function generateStaticParams() {
  return postsMeta.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postsMeta.find((p) => p.slug === slug);
  if (!post) return {};
  return generateSeoMeta({
    title: post.title,
    description: post.excerpt,
    slug: `blog/${post.slug}`,
    keywords: post.tags,
    publishedTime: post.date,
    tags: post.tags,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postsMeta.find((p) => p.slug === slug);
  if (!post) notFound();

  // Read MDX content for rendering
  const content = readMdxContent(post.slug);
  if (!content) notFound();

  // Find previous and next posts
  const currentIndex = postsMeta.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? postsMeta[currentIndex - 1] : null;
  const nextPost =
    currentIndex < postsMeta.length - 1
      ? postsMeta[currentIndex + 1]
      : null;

  return (
    <div className="relative">
      {/* Desktop: Two-column layout with TOC sidebar */}
      <div className="lg:flex lg:gap-10">
        {/* Main content */}
        <article className="min-w-0 flex-1 max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            ← 返回博客
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <time dateTime={post.date}>{formatDateLong(post.date)}</time>
              <span aria-hidden="true">·</span>
              <ReadingTime content={content} />
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {post.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${encodeURIComponent(tag)}`}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 transition-colors hover:bg-indigo-100 hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-indigo-900 dark:hover:text-indigo-400"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </header>

          <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-500">
            {renderContent(content)}
          </div>

          {/* Author Bio */}
          <AuthorBio />

          {/* Related Posts */}
          <RelatedPosts
            currentSlug={post.slug}
            tags={post.tags}
            allPosts={postsMeta}
          />

          {/* Previous / Next navigation */}
          <nav className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <div className="flex items-center justify-between gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex-1 rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    ← 上一篇
                  </span>
                  <p className="mt-1 text-sm font-medium text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-100">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex-1 rounded-lg border border-zinc-200 p-4 text-right transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    下一篇 →
                  </span>
                  <p className="mt-1 text-sm font-medium text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-100">
                    {nextPost.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </nav>
        </article>

        {/* Desktop TOC sidebar */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <TableOfContents content={content} />
        </aside>
      </div>
    </div>
  );
}

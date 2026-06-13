import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { formatDateLong } from "@/lib/date";
import {
  generateSeoMeta,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import fs from "fs";
import path from "path";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

// 从 MDX 文件读取文章元数据
const postsMeta: PostMeta[] = [
  {
    slug: "ai-web-development-workflow",
    title: "AI 辅助 Web 开发实战：从 Prompt 到生产的最佳工作流",
    excerpt:
      "每天用 AI 写代码，但你真的用对了吗？本文分享我在 Web 开发中使用 AI 的真实工作流，从 Prompt 技巧到代码审查，从原型设计到生产部署。",
    date: "2026-06-12",
    tags: ["AI 编程", "Web 开发", "工作流", "最佳实践", "效率"],
  },
  {
    slug: "ai-prompt-engineering-web-dev",
    title: "Web 开发者 AI Prompt 工程指南：让 AI 写出你想要的代码",
    excerpt:
      "同样的 AI，为什么有人能写出高质量代码，有人只能得到垃圾？关键在于 Prompt 工程。本文总结 Web 开发场景下的 AI Prompt 实战技巧。",
    date: "2026-06-12",
    tags: ["Prompt 工程", "AI 编程", "Web 开发", "效率", "技巧"],
  },
  {
    slug: "ai-tools-remote-developer",
    title: "远程开发者 AI 工具箱：2026 年必备的 10 个 AI 工具",
    excerpt:
      "作为远程工作者，AI 工具就是你的生产力倍增器。本文精选 10 个经过实战检验的 AI 工具，涵盖代码生成、调试、文档、设计全流程。",
    date: "2026-06-12",
    tags: ["远程工作", "AI 工具", "开发者工具", "效率", "开源"],
  },
  {
    slug: "ai-assisted-programming-evolution",
    title: "AI 辅助编程：从「复制粘贴」到「结对编程」的进化",
    excerpt:
      "AI 代码助手不是搜索引擎的替代品，而是一个永远在线、永不疲倦的结对编程伙伴。问题是——你真的知道怎么和它配合吗？",
    date: "2026-06-12",
    tags: ["AI 编程", "开发实践", "LLM", "效率"],
  },
  {
    slug: "ai-code-review-practical-guide",
    title: "用 AI 做 Code Review：一个开源维护者的实战经验",
    excerpt:
      "作为开源项目的维护者，我每天要 review 大量 PR。AI Code Review 帮我节省了 60% 的时间，但也踩了不少坑。",
    date: "2026-06-12",
    tags: ["Code Review", "开源", "最佳实践"],
  },
  {
    slug: "open-source-ai-toolchain-guide",
    title: "开源 AI 工具链搭建指南：从模型选择到生产部署",
    excerpt:
      "不想被闭源 API 绑定？这篇文章教你用纯开源工具搭建一套完整的 AI 开发工具链，从本地模型到 CI/CD 全流程覆盖。",
    date: "2026-06-12",
    tags: ["开源", "工具链", "LLM", "部署"],
  },
];

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

// 解析内联格式
function renderInline(text: string): string {
  return text
    // **bold**
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // `code`
    .replace(/`(.+?)`/g, "<code class='rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-pink-600 dark:bg-zinc-800 dark:text-pink-400'>$1</code>")
    // [text](url)
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      "<a href='$2' class='text-indigo-500 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-600'>$1</a>",
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
      elements.push(
        <div key={key} className="my-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            {tableBuffer.map((row, ri) => {
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

    // H2
    if (trimmed.startsWith("## ") && !trimmed.startsWith("###")) {
      elements.push(
        <h2
          key={keyCounter++}
          className="mt-10 mb-4 text-2xl font-semibold tracking-tight"
          dangerouslySetInnerHTML={{
            __html: renderInline(trimmed.slice(3)),
          }}
        />,
      );
      continue;
    }

    // H3
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3
          key={keyCounter++}
          className="mt-6 mb-3 text-xl font-semibold tracking-tight"
          dangerouslySetInnerHTML={{
            __html: renderInline(trimmed.slice(4)),
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
      while (
        i + 1 < lines.length &&
        /^\d+\. /.test(lines[i + 1].trim())
      ) {
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
    image: `${siteConfig.url}/og-image.png`,
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

  // 从 MDX 文件读取内容
  const content = readMdxContent(post.slug);
  if (!content) notFound();

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  return (
    <article className="max-w-3xl">
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Link
        href="/blog"
        className="mb-8 inline-flex text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← 返回博客
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>{formatDateLong(post.date)}</time>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-500">
        {renderContent(content)}
      </div>
    </article>
  );
}

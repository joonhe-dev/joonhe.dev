import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/date";
import { generateSeoMeta } from "@/lib/seo";
import {
  posts,
  getTotalPages,
  getPostsByPage,
  type PostMeta,
} from "@/lib/posts";

interface Props {
  params: { page: string };
}

export function generateStaticParams() {
  const totalPages = getTotalPages();
  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const pageNum = parseInt(params.page, 10);
  const totalPages = getTotalPages();

  if (isNaN(pageNum) || pageNum < 1 || pageNum > totalPages) {
    return {};
  }

  return generateSeoMeta({
    title:
      pageNum === 1
        ? "AI 编程与 Web 开发博客"
        : `第 ${pageNum} 页 - AI 编程与 Web 开发博客`,
    description: `全栈开发者 Joonhe 的博客。分享 AI 辅助编程实战经验、Web 开发最佳实践、开源项目心得。${
      pageNum > 1 ? `第 ${pageNum} 页` : ""
    }`,
    slug: pageNum === 1 ? "blog" : `blog/page/${pageNum}`,
    keywords: ["AI 编程", "Web 开发", "前端开发", "全栈开发"],
  });
}

export default function BlogPagePage({ params }: Props) {
  const pageNum = parseInt(params.page, 10);
  const totalPages = getTotalPages();

  if (isNaN(pageNum) || pageNum < 1 || pageNum > totalPages) {
    notFound();
  }

  const pagePosts = getPostsByPage(pageNum);

  return (
    <div>
      {/* SEO H1 */}
      <h1 className="text-3xl font-bold tracking-tight">
        AI 编程与 Web 开发博客
        {pageNum > 1 && (
          <span className="text-lg font-normal text-zinc-500">
            {" "}
            — 第 {pageNum} 页
          </span>
        )}
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        全栈开发者 Joonhe 的博客。分享 AI 辅助编程实战经验、Web 开发最佳实践、开源项目心得。
      </p>

      {/* Post list */}
      <div className="mt-8 space-y-8">
        {pagePosts.map((post: PostMeta) => (
          <article
            key={post.slug}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-100">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>

      {/* Pagination navigation */}
      <nav
        className="mt-10 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800"
        aria-label="Blog pagination"
      >
        <div>
          {pageNum > 1 ? (
            <Link
              href={
                pageNum === 2
                  ? "/blog"
                  : `/blog/page/${pageNum - 1}`
              }
              className="inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              上一页
            </Link>
          ) : (
            <span className="text-sm text-zinc-300 dark:text-zinc-600">
              上一页
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={p === 1 ? "/blog" : `/blog/page/${p}`}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm transition-colors ${
                p === pageNum
                  ? "bg-indigo-100 font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {p}
            </Link>
          ))}
        </div>

        <div>
          {pageNum < totalPages ? (
            <Link
              href={`/blog/page/${pageNum + 1}`}
              className="inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              下一页
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ) : (
            <span className="text-sm text-zinc-300 dark:text-zinc-600">
              下一页
            </span>
          )}
        </div>
      </nav>

      {/* SEO: rel=canonical for page 1 is /blog */}
      {pageNum > 1 && (
        <link rel="canonical" href={`/blog/page/${pageNum}`} />
      )}
    </div>
  );
}

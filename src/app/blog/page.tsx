import type { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import { generateSeoMeta } from "@/lib/seo";
import { posts, type PostMeta } from "@/lib/posts";

export const metadata: Metadata = generateSeoMeta({
  title: "Blog - AI 编程与 Web 开发",
  description:
    "全栈开发者 Joonhe 的博客。分享 AI 辅助编程实战经验、Web 开发最佳实践、开源项目心得、远程工作者效率工具。",
  slug: "blog",
  keywords: [
    "AI 编程",
    "Web 开发",
    "前端开发",
    "全栈开发",
    "AI 工具",
    "远程工作",
    "开源",
  ],
});

export default function BlogPage() {
  return (
    <div>
      {/* H1 标题 - SEO 核心 */}
      <h1 className="text-3xl font-bold tracking-tight">
        AI 编程与 Web 开发博客
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        全栈开发者 Joonhe 的博客。分享 AI 辅助编程实战经验、Web 开发最佳实践、开源项目心得。
      </p>

      {/* 文章列表 */}
      <div className="mt-8 space-y-8">
        {posts.map((post: PostMeta) => (
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
    </div>
  );
}

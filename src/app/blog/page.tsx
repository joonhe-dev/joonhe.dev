import type { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Blog",
  description: "全栈实战经验 & 独立开发生存指南",
};

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

// 静态文章列表（后续可改为从文件系统读取）
const posts: PostMeta[] = [
  {
    slug: "ai-assisted-programming-evolution",
    title: "AI 辅助编程：从「复制粘贴」到「结对编程」的进化",
    excerpt:
      "AI 代码助手不是搜索引擎的替代品，而是一个永远在线、永不疲倦的结对编程伙伴。问题是——你真的知道怎么和它配合吗？",
    date: "2026-06-12",
    tags: ["AI", "开发实践", "LLM", "效率"],
  },
  {
    slug: "ai-code-review-practical-guide",
    title: "用 AI 做 Code Review：一个开源维护者的实战经验",
    excerpt:
      "作为开源项目的维护者，我每天要 review 大量 PR。AI Code Review 帮我节省了 60% 的时间，但也踩了不少坑。",
    date: "2026-06-12",
    tags: ["AI", "Code Review", "开源", "最佳实践"],
  },
  {
    slug: "open-source-ai-toolchain-guide",
    title: "开源 AI 工具链搭建指南：从模型选择到生产部署",
    excerpt:
      "不想被闭源 API 绑定？这篇文章教你用纯开源工具搭建一套完整的 AI 开发工具链，从本地模型到 CI/CD 全流程覆盖。",
    date: "2026-06-12",
    tags: ["AI", "开源", "工具链", "LLM", "部署"],
  },
];

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        全栈实战经验 & 独立开发生存指南
      </p>

      <div className="mt-8 space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <div className="flex gap-1.5">
                  {post.tags.map((tag) => (
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

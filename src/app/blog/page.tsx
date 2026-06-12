import type { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import { generateSeoMeta } from "@/lib/seo";

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

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const posts: PostMeta[] = [
  {
    slug: "ai-web-development-workflow",
    title: "AI 辅助 Web 开发实战：从 Prompt 到生产的最佳工作流",
    excerpt:
      "每天用 AI 写代码，但你真的用对了吗？本文分享我在 Web 开发中使用 AI 的真实工作流，从 Prompt 技巧到代码审查，从原型设计到生产部署。",
    date: "2026-06-12",
    tags: ["AI 编程", "Web 开发", "工作流"],
  },
  {
    slug: "ai-prompt-engineering-web-dev",
    title: "Web 开发者 AI Prompt 工程指南：让 AI 写出你想要的代码",
    excerpt:
      "同样的 AI，为什么有人能写出高质量代码，有人只能得到垃圾？关键在于 Prompt 工程。本文总结 Web 开发场景下的 AI Prompt 实战技巧。",
    date: "2026-06-12",
    tags: ["Prompt 工程", "AI 编程", "技巧"],
  },
  {
    slug: "ai-tools-remote-developer",
    title: "远程开发者 AI 工具箱：2026 年必备的 10 个 AI 工具",
    excerpt:
      "作为远程工作者，AI 工具就是你的生产力倍增器。本文精选 10 个经过实战检验的 AI 工具，涵盖代码生成、调试、文档、设计全流程。",
    date: "2026-06-12",
    tags: ["远程工作", "AI 工具", "效率"],
  },
  {
    slug: "ai-assisted-programming-evolution",
    title: "AI 辅助编程：从「复制粘贴」到「结对编程」的进化",
    excerpt:
      "AI 代码助手不是搜索引擎的替代品，而是一个永远在线、永不疲倦的结对编程伙伴。问题是——你真的知道怎么和它配合吗？",
    date: "2026-06-12",
    tags: ["AI 编程", "开发实践", "LLM"],
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
    tags: ["开源", "工具链", "LLM"],
  },
];

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
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <div className="flex flex-wrap gap-1.5">
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

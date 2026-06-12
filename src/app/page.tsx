import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      {/* SEO: H1 标题包含核心关键词 */}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m{" "}
        <span className="text-indigo-500">{siteConfig.author}</span>
      </h1>
      <p className="mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
        Full-Stack Developer · Indie Maker · Building in Public
      </p>
      <p className="mt-2 max-w-xl text-sm text-zinc-500 dark:text-zinc-500">
        分享 AI 辅助编程、Web 开发最佳实践、开源项目经验与远程工作者效率工具
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/blog"
          className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          AI 编程博客 →
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          开源项目
        </Link>
      </div>

      {/* 最新文章推荐 - SEO 友好 */}
      <section className="mt-16 w-full">
        <h2 className="text-left text-xl font-semibold">最新文章</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          <Link
            href="/blog/ai-web-development-workflow"
            className="group rounded-xl border border-zinc-200 p-5 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <div className="text-2xl">🛠️</div>
            <h3 className="mt-3 font-semibold group-hover:text-indigo-500">
              AI 辅助 Web 开发实战
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              从 Prompt 到生产的最佳工作流
            </p>
          </Link>
          <Link
            href="/blog/ai-prompt-engineering-web-dev"
            className="group rounded-xl border border-zinc-200 p-5 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <div className="text-2xl">💡</div>
            <h3 className="mt-3 font-semibold group-hover:text-indigo-500">
              Web 开发者 Prompt 工程指南
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              让 AI 写出你想要的代码
            </p>
          </Link>
          <Link
            href="/blog/ai-tools-remote-developer"
            className="group rounded-xl border border-zinc-200 p-5 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <div className="text-2xl">🚀</div>
            <h3 className="mt-3 font-semibold group-hover:text-indigo-500">
              远程开发者 AI 工具箱
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              2026 年必备的 10 个 AI 工具
            </p>
          </Link>
        </div>
      </section>

      {/* 分类导航 - SEO 内部链接 */}
      <section className="mt-12 w-full">
        <h2 className="text-left text-xl font-semibold">热门话题</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { label: "AI 编程", href: "/blog" },
            { label: "Web 开发", href: "/blog" },
            { label: "远程工作", href: "/blog/ai-tools-remote-developer" },
            { label: "开源项目", href: "/projects" },
            { label: "Prompt 工程", href: "/blog/ai-prompt-engineering-web-dev" },
            { label: "Code Review", href: "/blog/ai-code-review-practical-guide" },
          ].map((tag) => (
            <Link
              key={tag.label}
              href={tag.href}
              className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

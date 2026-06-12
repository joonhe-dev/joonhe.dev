import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m <span className="text-indigo-500">{siteConfig.author}</span>
      </h1>
      <p className="mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
        Full-Stack Developer · Indie Maker · Building in Public
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/blog"
          className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Read Blog
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          View Projects
        </Link>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 p-6 text-left dark:border-zinc-800">
          <div className="text-2xl">📝</div>
          <h3 className="mt-3 font-semibold">Tech Blog</h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            全栈实战经验 & 独立开发生存指南
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 p-6 text-left dark:border-zinc-800">
          <div className="text-2xl">🚀</div>
          <h3 className="mt-3 font-semibold">Side Projects</h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Building in Public，公开构建过程
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 p-6 text-left dark:border-zinc-800">
          <div className="text-2xl">🤖</div>
          <h3 className="mt-3 font-semibold">Dev Tools</h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            开发者效率工具，让开发更简单
          </p>
        </div>
      </div>
    </div>
  );
}

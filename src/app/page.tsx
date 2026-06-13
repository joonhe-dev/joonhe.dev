import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m{" "}
        <span className="text-indigo-500">{siteConfig.author}</span>
      </h1>
      <p className="mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
        Full-Stack Developer · Indie Maker · Building in Public
      </p>
      <p className="mt-2 max-w-xl text-sm text-zinc-500 dark:text-zinc-500">
        Sharing AI-assisted programming, web development best practices, open-source project experience, and productivity tools for remote workers
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/blog"
          className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          AI Dev Blog →
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Open Source
        </Link>
      </div>

      <section className="mt-16 w-full">
        <h2 className="text-left text-xl font-semibold">Latest Posts</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          <Link
            href="/blog/ai-web-development-workflow"
            className="group rounded-xl border border-zinc-200 p-5 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <div className="text-2xl">🛠️</div>
            <h3 className="mt-3 font-semibold group-hover:text-indigo-500">
              AI-Assisted Web Development
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              The best workflow from prompt to production
            </p>
          </Link>
          <Link
            href="/blog/ai-prompt-engineering-web-dev"
            className="group rounded-xl border border-zinc-200 p-5 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <div className="text-2xl">💡</div>
            <h3 className="mt-3 font-semibold group-hover:text-indigo-500">
              Prompt Engineering for Web Devs
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Making AI write the code you want
            </p>
          </Link>
          <Link
            href="/blog/ai-tools-remote-developer"
            className="group rounded-xl border border-zinc-200 p-5 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <div className="text-2xl">🚀</div>
            <h3 className="mt-3 font-semibold group-hover:text-indigo-500">
              Remote Dev AI Toolkit
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              10 essential AI tools for 2026
            </p>
          </Link>
        </div>
      </section>

      <section className="mt-12 w-full">
        <h2 className="text-left text-xl font-semibold">Popular Topics</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { label: "AI Programming", href: "/blog" },
            { label: "Web Development", href: "/blog" },
            { label: "Remote Work", href: "/blog/ai-tools-remote-developer" },
            { label: "Open Source", href: "/projects" },
            { label: "Prompt Engineering", href: "/blog/ai-prompt-engineering-web-dev" },
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

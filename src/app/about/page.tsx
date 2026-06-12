import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { generateSeoMeta } from "@/lib/seo";

export const metadata: Metadata = generateSeoMeta({
  title: "About - 关于 Joonhe",
  description:
    "8 年全栈开发经验的全栈开发者与独立创作者。从大厂到独立开发者，公开构建过程、分享 AI 辅助编程与 Web 开发实战经验。",
  slug: "about",
  keywords: ["全栈开发者", "独立开发者", "AI 编程", "开源", "远程工作"],
});

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
        <p>
          8 年全栈开发经验，从大厂到独立开发者。现在一边写代码，一边把踩过的坑、做出来的东西、赚到的钱（和亏掉的）都公开分享。
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Tech Stack
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">
              Frontend:
            </strong>{" "}
            React, Next.js, TailwindCSS
          </li>
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">
              Backend:
            </strong>{" "}
            Node.js, FastAPI, Redis
          </li>
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">
              Database:
            </strong>{" "}
            MySQL, PostgreSQL
          </li>
          <li>
            <strong className="text-zinc-900 dark:text-zinc-100">Tools:</strong>{" "}
            Docker, AWS, Vercel, Supabase
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Philosophy
        </h2>
        <p>
          Build in Public — 不藏着掖着，公开构建过程、数据、决策逻辑。
        </p>
      </div>
    </div>
  );
}

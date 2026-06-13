import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { generateSeoMeta } from "@/lib/seo";

export const metadata: Metadata = generateSeoMeta({
  title: "About - Joonhe",
  description:
    "Full-stack developer with 8 years of experience. From big tech to indie maker — building in public, sharing AI-assisted programming and web development insights.",
  slug: "about",
  keywords: ["full-stack developer", "indie maker", "AI programming", "open source", "remote work"],
});

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
        <p>
          Full-stack developer with 8 years of experience, from big tech to indie maker. Now I write code, share my learnings, the things I&apos;ve built, and the money I&apos;ve made (and lost) — all out in the open.
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
          Build in Public — no hiding, no gatekeeping. Process, data, and decision-making — all out in the open.
        </p>
      </div>
    </div>
  );
}

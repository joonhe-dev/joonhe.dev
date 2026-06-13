import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { generateSeoMeta } from "@/lib/seo";

export const metadata: Metadata = generateSeoMeta({
  title: "About - Joonhe",
  description:
    "Full-stack developer and indie maker building TypeScript-powered tools in public. Focused on AI-assisted programming, developer experience, and shipping fast.",
  slug: "about",
  keywords: ["full-stack developer", "indie maker", "TypeScript", "open source", "build in public"],
});

const techStack = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "Python", level: "proficient" },
      { name: "SQL", level: "proficient" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TailwindCSS", level: "expert" },
      { name: "HTML/CSS", level: "expert" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "expert" },
      { name: "FastAPI", level: "proficient" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Redis", level: "proficient" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: "proficient" },
      { name: "AWS", level: "proficient" },
      { name: "Vercel", level: "expert" },
      { name: "GitHub Actions", level: "proficient" },
    ],
  },
];

const levelBadge: Record<string, { label: string; className: string }> = {
  expert: {
    label: "Expert",
    className: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  proficient: {
    label: "Proficient",
    className: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  },
};

const principles = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Ship First, Perfect Later",
    description: "Done beats perfect. Get it working, get it shipped, then iterate. Premature optimization is the root of all evil.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.732-3.558" />
      </svg>
    ),
    title: "Build in Public",
    description: "No hiding, no gatekeeping. Process, data, and decision-making — all out in the open. The best way to learn is to share.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Type-Safe Everything",
    description: "If it compiles, it works. TypeScript strict mode everywhere — from CLI tools to API contracts to database schemas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    title: "Open Source by Default",
    description: "Code should be open unless there's a reason not to. I learn from reading source code, and I want others to learn from mine.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      {/* Header */}
      <div className="flex items-start gap-5">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-2xl font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
          J
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Joonhe</h1>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
            Full-Stack Developer · Indie Maker · Building in Public
          </p>
          <div className="mt-3 flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X (Twitter)
            </a>
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="mt-10 space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          I&apos;m a full-stack developer building products and tools in public. I write code, share what I learn, and ship things — all out in the open.
        </p>
        <p>
          My sweet spot is the TypeScript ecosystem end-to-end: from Next.js frontends to Node.js APIs, from CLI tools to deployment pipelines. I care about developer experience, type safety, and shipping fast without cutting corners.
        </p>
        <p>
          These days I&apos;m focused on <strong className="text-zinc-900 dark:text-zinc-100">AI-assisted programming workflows</strong> — not the hype, but the practical stuff: how to prompt effectively, how to review AI-generated code, and how to build tools that make developers more productive.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Tech Stack</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      {item.name}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${levelBadge[item.level].className}`}
                    >
                      {levelBadge[item.level].label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy / Principles */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Principles</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <div className="flex items-center gap-2.5 text-indigo-500">
                {p.icon}
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {p.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Currently */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What I&apos;m Working On</h2>
        <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
            <span>
              <strong className="text-zinc-900 dark:text-zinc-100">devhammer</strong> — A local-first CLI toolset for TS full-stack developers. 5 modules, one dependency, zero config.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
            <span>
              <strong className="text-zinc-900 dark:text-zinc-100">This blog</strong> — Writing about AI-assisted programming, TypeScript patterns, and indie hacking. Built with Next.js 16, deployed on Vercel.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span>
              <strong className="text-zinc-900 dark:text-zinc-100">Exploring</strong> — Local-first architecture, LLM agents, and the intersection of AI tooling with developer workflows.
            </span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Get in Touch</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          I&apos;m always open to interesting conversations about TypeScript, open source, indie hacking, or AI tooling. Find me on the links above, or just reply to any of my posts on X.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Read the Blog →
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            View Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

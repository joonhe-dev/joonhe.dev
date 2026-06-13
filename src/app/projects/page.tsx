import type { Metadata } from "next";
import { generateSeoMeta } from "@/lib/seo";

export const metadata: Metadata = generateSeoMeta({
  title: "Projects - Open Source & Indie Projects",
  description:
    "Joonhe's open-source projects and indie dev portfolio. CLI tools, web applications, and developer utilities — all built in public with TypeScript.",
  slug: "projects",
  keywords: ["open source projects", "indie dev", "developer tools", "TypeScript CLI", "npm package", "web apps"],
});

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
  status: "active" | "beta" | "archived";
  highlights: string[];
  stars?: string;
  npm?: string;
}

const projects: Project[] = [
  {
    title: "devhammer",
    description:
      "A local-first CLI toolset for TypeScript full-stack developers. One install, five tools — config generator, API tester, project scaffolder, performance profiler, and env manager. Zero bloat: single runtime dependency, <100ms startup, <2MB footprint.",
    techStack: ["TypeScript", "Node.js", "Commander.js", "tsup", "Vitest"],
    github: "https://github.com/joonhe-dev/devhammer",
    npm: "devhammer",
    status: "active",
    stars: "Open Source",
    highlights: [
      "5 integrated modules: config / api / scaffold / profile / env",
      "Smart defaults — auto-detects framework, package manager, TS version",
      "TypeScript strict mode, 100% type coverage",
      "Spec-driven development with multi-agent parallel workflows",
    ],
  },
  {
    title: "joonhe.dev",
    description:
      "This blog — a performance-first personal site built with Next.js 16 (App Router), React 19, and TypeScript 5. Features custom markdown rendering, full SEO stack (JSON-LD, Open Graph, RSS), and static generation with ISR. Lighthouse 95+ across all metrics.",
    techStack: ["Next.js 16", "React 19", "TypeScript 5", "TailwindCSS", "Vercel"],
    github: "https://github.com/joonhe-dev/joonhe.dev",
    demo: "https://joonhe.dev",
    status: "active",
    highlights: [
      "App Router with async params and streaming SSR",
      "Custom markdown renderer with XSS protection",
      "SEO: JSON-LD schemas, Open Graph, RSS feed, sitemap",
      "Static generation with generateStaticParams",
    ],
  },
  {
    title: "AI Code Review Bot",
    description:
      "LLM-powered automated code review tool integrated with GitHub Webhooks. Reviews PRs for code quality, security vulnerabilities, and best practices. Supports custom review rules, multiple AI model backends, and incremental analysis for large diffs.",
    techStack: ["TypeScript", "Node.js", "OpenAI API", "GitHub API", "Docker"],
    github: "https://github.com/joonhe-dev/ai-code-review-bot",
    status: "beta",
    highlights: [
      "Webhook-driven: reviews PRs automatically on open/update",
      "Custom rule engine with configurable severity levels",
      "Supports OpenAI, Anthropic, and local LLM backends",
      "Incremental diff analysis for large PRs",
    ],
  },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  active: {
    label: "Active",
    className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  beta: {
    label: "Beta",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  archived: {
    label: "Archived",
    className: "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Open-source tools and indie projects. All built in public with TypeScript.
      </p>

      <div className="mt-10 space-y-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-zinc-200 p-6 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h2>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusConfig[project.status].className}`}
                >
                  {statusConfig[project.status].label}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project.npm && (
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    npm: {project.npm}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-5 flex items-center gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Source Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Philosophy section */}
      <section className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">How I Build</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-3 text-sm text-zinc-600 dark:text-zinc-400">
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">TypeScript First</p>
            <p className="mt-1">Strict mode everywhere. If it compiles, it works. Type safety from CLI to API to UI.</p>
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Spec-Driven</p>
            <p className="mt-1">Write the spec before the code. Define the contract, then implement. Tests are not optional.</p>
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Ship & Iterate</p>
            <p className="mt-1">Release early, gather feedback, improve. Open source by default — code should be visible.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

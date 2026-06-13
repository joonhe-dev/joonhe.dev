import type { Metadata } from "next";
import { generateSeoMeta } from "@/lib/seo";

export const metadata: Metadata = generateSeoMeta({
  title: "Projects - Open Source & Indie Projects",
  description:
    "Joonhe's open-source projects and indie dev portfolio. Covering AI tools, web applications, developer utilities, and more — all built in public.",
  slug: "projects",
  keywords: ["open source projects", "indie dev", "AI tools", "web apps", "developer tools"],
});

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  status: "active" | "archived";
}

const projects: Project[] = [
  {
    title: "AI Code Review Bot",
    description:
      "An LLM-powered automated code review tool integrated with GitHub Webhooks. Reviews PRs for code quality, security vulnerabilities, and best practices. Supports custom review rules and multiple AI model backends.",
    techStack: ["TypeScript", "Node.js", "OpenAI API", "GitHub API", "Docker"],
    github: "https://github.com/joonhe-dev/ai-code-review-bot",
    status: "active",
  },
  {
    title: "DevToolkit",
    description:
      "A collection of everyday tools for full-stack developers — JSON formatter, regex tester, Base64 encoder/decoder, timestamp converter, color picker, and more. Pure frontend, no backend required, PWA-enabled for offline use.",
    techStack: ["React", "Next.js", "TailwindCSS", "PWA"],
    github: "https://github.com/joonhe-dev/devtoolkit",
    status: "active",
  },
  {
    title: "Remote Work Hub",
    description:
      "A curated resource hub for remote workers. Aggregates global remote job opportunities, timezone conversion tools, remote collaboration best practices, and remote team management insights.",
    techStack: ["Next.js", "MDX", "Supabase", "Vercel"],
    github: "https://github.com/joonhe-dev/remote-work-hub",
    status: "active",
  },
  {
    title: "Prompt Library",
    description:
      "A curated collection of AI prompt engineering templates for web development scenarios. Supports category browsing, search, and community contributions to help developers write better AI prompts.",
    techStack: ["TypeScript", "React", "PostgreSQL", "Redis"],
    github: "https://github.com/joonhe-dev/prompt-library",
    status: "active",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Open-source projects and indie dev portfolio. All built in public.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-zinc-200 p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-100">
                {project.title}
              </h2>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${
                  project.status === "active"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                }`}
              >
                {project.status === "active" ? "Active" : "Archived"}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { generateSeoMeta } from "@/lib/seo";

export const metadata: Metadata = generateSeoMeta({
  title: "Projects - 开源与独立项目",
  description:
    "Joonhe 的开源项目与独立开发作品集。涵盖 AI 工具、Web 应用、开发者工具等多个领域，所有项目均公开构建过程。",
  slug: "projects",
  keywords: ["开源项目", "独立开发", "AI 工具", "Web 应用", "开发者工具"],
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
      "基于 LLM 的自动化 Code Review 工具，集成 GitHub Webhook，自动审查 PR 中的代码质量、安全漏洞和最佳实践。支持自定义审查规则和多种 AI 模型后端。",
    techStack: ["TypeScript", "Node.js", "OpenAI API", "GitHub API", "Docker"],
    github: "https://github.com/joonhe-dev/ai-code-review-bot",
    status: "active",
  },
  {
    title: "DevToolkit",
    description:
      "全栈开发者日常工具集合，包括 JSON 格式化、正则测试、Base64 编解码、时间戳转换、颜色选择器等。纯前端实现，无后端依赖，支持 PWA 离线使用。",
    techStack: ["React", "Next.js", "TailwindCSS", "PWA"],
    github: "https://github.com/joonhe-dev/devtoolkit",
    status: "active",
  },
  {
    title: "Remote Work Hub",
    description:
      "远程工作者效率资源聚合站。收录全球远程工作机会、时区转换工具、远程协作最佳实践、以及远程团队管理经验分享。",
    techStack: ["Next.js", "MDX", "Supabase", "Vercel"],
    github: "https://github.com/joonhe-dev/remote-work-hub",
    status: "active",
  },
  {
    title: "Prompt Library",
    description:
      "AI Prompt 工程模板库，收录 Web 开发各场景下的高质量 Prompt 模板。支持分类浏览、搜索和社区贡献，帮助开发者写出更好的 AI Prompt。",
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
        开源项目与独立开发作品集。所有项目均公开构建过程。
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

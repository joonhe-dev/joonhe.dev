import type { Metadata } from "next";
import { generateSeoMeta } from "@/lib/seo";

export const metadata: Metadata = generateSeoMeta({
  title: "Projects - 开源与独立项目",
  description:
    "Joonhe 的开源项目与独立开发作品集。涵盖 AI 工具、Web 应用、开发者工具等多个领域，所有项目均公开构建过程。",
  slug: "projects",
  keywords: ["开源项目", "独立开发", "AI 工具", "Web 应用", "开发者工具"],
});

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">我的项目作品集</p>
      <div className="mt-8">
        <p className="text-sm text-zinc-400">Coming soon...</p>
      </div>
    </div>
  );
}

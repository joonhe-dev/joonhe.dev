import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "我的项目作品集",
};

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

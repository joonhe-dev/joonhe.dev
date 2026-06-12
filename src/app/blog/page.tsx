import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "全栈实战经验 & 独立开发生存指南",
};

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        全栈实战经验 & 独立开发生存指南
      </p>
      <div className="mt-8">
        <p className="text-sm text-zinc-400">Coming soon...</p>
      </div>
    </div>
  );
}

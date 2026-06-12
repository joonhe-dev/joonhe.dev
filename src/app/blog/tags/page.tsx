import type { Metadata } from "next";
import Link from "next/link";
import { generateSeoMeta } from "@/lib/seo";
import { getAllTags } from "@/lib/posts";

export const metadata: Metadata = generateSeoMeta({
  title: "所有标签 - AI 编程与 Web 开发",
  description: "浏览博客所有标签，快速找到感兴趣的主题。",
  slug: "blog/tags",
  keywords: ["标签", "AI 编程", "Web 开发", "博客分类"],
});

export default function TagsPage() {
  const tags = getAllTags();
  // Sort by count descending, then alphabetically
  const sortedTags = Array.from(tags.entries()).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });

  // Find max count for sizing
  const maxCount = sortedTags[0]?.[1] || 1;

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">所有标签</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        共 {tags.size} 个标签，点击标签查看相关文章
      </p>

      {/* Tag cloud */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {sortedTags.map(([tag, count]) => {
          // Size based on frequency: min 0.8rem, max 2rem
          const ratio = count / maxCount;
          const size = 0.8 + ratio * 1.2;
          const opacity = 0.5 + ratio * 0.5;

          return (
            <Link
              key={tag}
              href={`/blog/tags/${encodeURIComponent(tag)}`}
              className="inline-block rounded-full bg-zinc-100 px-4 py-2 text-zinc-700 transition-all hover:bg-indigo-100 hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-indigo-900 dark:hover:text-indigo-400"
              style={{
                fontSize: `${size}rem`,
                opacity,
              }}
            >
              {tag}
              <span className="ml-1.5 text-xs text-zinc-400 dark:text-zinc-500">
                ({count})
              </span>
            </Link>
          );
        })}
      </div>

      {/* List view */}
      <div className="mt-12">
        <h2 className="mb-4 text-lg font-semibold">按数量排序</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedTags.map(([tag, count]) => (
            <Link
              key={tag}
              href={`/blog/tags/${encodeURIComponent(tag)}`}
              className="flex items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {tag}
              </span>
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                {count} 篇
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

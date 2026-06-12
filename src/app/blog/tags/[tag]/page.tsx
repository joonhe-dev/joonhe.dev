import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/date";
import { generateSeoMeta } from "@/lib/seo";
import { posts, type PostMeta, getAllTags } from "@/lib/posts";

interface Props {
  params: { tag: string };
}

export function generateStaticParams() {
  const tags = getAllTags();
  return Array.from(tags.keys()).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tag = decodeURIComponent(params.tag);
  return generateSeoMeta({
    title: `标签: ${tag} - AI 编程与 Web 开发`,
    description: `浏览标签「${tag}」下的所有文章。`,
    slug: `blog/tags/${encodeURIComponent(tag)}`,
    keywords: [tag, "AI 编程", "Web 开发"],
  });
}

export default function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (tagPosts.length === 0) notFound();

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        <Link
          href="/blog"
          className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          博客
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/blog/tags"
          className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          标签
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900 dark:text-zinc-100">{tag}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight">
        标签: <span className="text-indigo-500">{tag}</span>
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        共 {tagPosts.length} 篇文章
      </p>

      <div className="mt-8 space-y-6">
        {tagPosts.map((post: PostMeta) => (
          <article
            key={post.slug}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h2 className="mt-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-100">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags.map((t: string) => (
                  <span
                    key={t}
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      t === tag
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

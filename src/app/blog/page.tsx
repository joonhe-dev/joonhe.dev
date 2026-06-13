import type { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import { generateSeoMeta } from "@/lib/seo";
import { posts, type PostMeta } from "@/lib/posts";

export const metadata: Metadata = generateSeoMeta({
  title: "Blog - AI Programming & Web Development",
  description:
    "Full-stack developer Joonhe's blog. Sharing AI-assisted programming insights, web development best practices, open-source project experience, and productivity tools for remote workers.",
  slug: "blog",
  keywords: [
    "AI Programming",
    "Web Development",
    "Frontend Development",
    "Full-Stack Development",
    "AI Tools",
    "Remote Work",
    "Open Source",
  ],
});

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">
        AI Programming & Web Development Blog
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Full-stack developer Joonhe&apos;s blog. Sharing AI-assisted programming insights, web development best practices, and open-source project experience.
      </p>

      <div className="mt-8 space-y-8">
        {posts.map((post: PostMeta) => (
          <article
            key={post.slug}
            className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-100">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { formatDate } from "@/lib/date";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

interface RelatedPostsProps {
  currentSlug: string;
  tags: string[];
  allPosts: PostMeta[];
}

export function RelatedPosts({
  currentSlug,
  tags,
  allPosts,
}: RelatedPostsProps) {
  // Find posts that share at least one tag, excluding current post
  const related = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((t) => tags.includes(t));
      return { ...post, relevance: sharedTags.length };
    })
    .filter((post) => post.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
      <h2 className="mb-6 text-xl font-semibold tracking-tight">
        Related Posts
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <time
              dateTime={post.date}
              className="text-xs text-zinc-500 dark:text-zinc-400"
            >
              {formatDate(post.date)}
            </time>
            <h3 className="mt-1.5 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-100">
              {post.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

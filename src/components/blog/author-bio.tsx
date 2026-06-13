import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function AuthorBio() {
  return (
    <section className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start gap-4">
        {/* Avatar placeholder */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400">
          {siteConfig.author.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {siteConfig.author}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Full-stack developer and indie maker. Focused on AI-assisted programming, web development best practices, and open-source project experience.
            Passionate about solving real problems with technology, pursuing clean and efficient code.
          </p>
          <div className="mt-3 flex items-center gap-4">
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
            >
              X (Twitter)
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
            >
              GitHub
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-500 transition-colors hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
            >
              About me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

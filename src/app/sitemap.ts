import { MetadataRoute } from "next";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const baseUrl = "https://joonhe.dev";
const blogDir = join(process.cwd(), "src/content/blog");

interface BlogPostMeta {
  slug: string;
  lastModified: Date;
}

function getBlogPosts(): BlogPostMeta[] {
  try {
    const files = readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
    return files.map((file) => {
      const filePath = join(blogDir, file);
      const stat = statSync(filePath);
      const slug = file.replace(/\.mdx$/, "");
      return {
        slug,
        lastModified: stat.mtime,
      };
    });
  } catch {
    // Fallback: if directory doesn't exist or can't be read
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // 从 content/blog 目录动态读取文章列表
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPosts];
}

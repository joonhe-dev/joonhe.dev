import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  publishedTime?: string;
  tags?: string[];
  image?: string;
}

/**
 * 统一的 SEO metadata 生成器
 * 所有页面都通过这个函数生成 metadata，确保一致性
 */
export function generateSeoMeta({
  title,
  description,
  slug,
  keywords,
  publishedTime,
  tags,
  image,
}: SeoProps): Metadata {
  const url = `${siteConfig.url}/${slug}`;
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : undefined;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: publishedTime ? "article" : "website",
      ...(publishedTime && {
        article: {
          publishedTime,
          tags,
          authors: [siteConfig.url],
        },
      }),
      images,
    },
    twitter: {
      title,
      description,
      images,
    },
  };
}

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

/**
 * 生成 Article / BlogPosting JSON-LD
 */
export function generateArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
}): Record<string, unknown> {
  const {
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    authorName = siteConfig.author,
    authorUrl = siteConfig.links.github,
    publisherName = siteConfig.name,
    publisherLogo = `${siteConfig.url}/og-image.png`,
  } = params;

  return {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    headline,
    description,
    url,
    ...(image && { image }),
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * 生成 BreadcrumbList JSON-LD
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * 生成 Person JSON-LD
 */
export function generatePersonSchema(params: {
  name?: string;
  url?: string;
  sameAs?: string[];
  jobTitle?: string;
  description?: string;
  image?: string;
}): Record<string, unknown> {
  const {
    name = siteConfig.author,
    url = siteConfig.url,
    sameAs = Object.values(siteConfig.links),
    jobTitle = "Full-Stack Developer & Indie Maker",
    description = "全栈开发者，独立创作者。分享 AI 辅助编程、Web 开发最佳实践、开源项目经验。",
    image,
  } = params;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    sameAs,
    jobTitle,
    description,
    ...(image && { image }),
  };
}

/**
 * 生成 FAQPage JSON-LD
 */
export function generateFaqSchema(
  questions: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/**
 * 生成 WebSite JSON-LD
 */
export function generateWebsiteSchema(params?: {
  name?: string;
  url?: string;
  description?: string;
  searchAction?: string;
}): Record<string, unknown> {
  const {
    name = siteConfig.name,
    url = siteConfig.url,
    description = siteConfig.description,
    searchAction,
  } = params ?? {};

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
  };

  if (searchAction) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${searchAction}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    };
  }

  return schema;
}

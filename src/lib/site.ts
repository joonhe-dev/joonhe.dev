import type { Metadata } from "next";

export const siteConfig = {
  name: "Joonhe.dev",
  title: "Joonhe.dev - Full-Stack Developer & Indie Maker",
  description:
    "全栈开发者 Joonhe 的个人网站。分享 AI 辅助编程、Web 开发最佳实践、开源项目经验、独立开发者生存指南。",
  url: "https://joonhe.dev",
  author: "Joonhe",
  locale: "zh_CN",
  links: {
    twitter: "https://twitter.com/joonhe_dev",
    github: "https://github.com/joonhe-dev",
  },
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI 编程",
    "Web 开发",
    "全栈开发",
    "独立开发者",
    "开源",
    "AI Code Review",
    "Next.js",
    "TypeScript",
    "React",
    "前端开发",
    "开发者博客",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@joonhe_dev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: siteConfig.author, url: siteConfig.links.github }],
  alternates: {
    canonical: siteConfig.url,
  },
};



import type { Metadata } from "next";

const siteConfig = {
  name: "Joonhe.dev",
  description: "Full-Stack Developer · Indie Maker · Building in Public",
  url: "https://joonhe.dev",
  author: "Joonhe",
  links: {
    twitter: "https://twitter.com/joonhe_dev",
    github: "https://github.com/joonhe-dev",
  },
};

export const baseMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@joonhe_dev",
  },
  authors: [{ name: siteConfig.author }],
};

export { siteConfig };

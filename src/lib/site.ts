import type { Metadata } from "next";

export const siteConfig = {
  name: "Joonhe.dev",
  title: "Joonhe.dev - Full-Stack Developer & Indie Maker",
  description:
    "Full-stack developer & indie maker. Sharing AI-assisted programming, web development best practices, open-source project experience, and the indie hacker survival guide.",
  url: "https://joonhe.dev",
  author: "Joonhe",
  locale: "en_US",
  links: {
    twitter: "https://twitter.com/joonhe_dev",
    github: "https://github.com/joonhe-dev",
    rss: "https://joonhe.dev/feed.xml",
  },
  social: {
    twitter: "https://twitter.com/joonhe_dev",
    github: "https://github.com/joonhe-dev",
    linkedin: "https://linkedin.com/in/joonhe-dev",
    email: "mailto:hello@joonhe.dev",
  },
  verification: {
    google: "", // TODO: Replace with Google Search Console verification code
    bing: "", // TODO: Replace with Bing Webmaster verification code
  },
  categories: [
    {
      id: "ai-programming",
      name: "AI Programming",
      description: "Practical experience and tips for AI-assisted programming",
    },
    {
      id: "web-development",
      name: "Web Development",
      description: "Web development best practices and technical insights",
    },
    {
      id: "open-source",
      name: "Open Source",
      description: "Open-source project experience and toolchain setup",
    },
    {
      id: "remote-work",
      name: "Remote Work",
      description: "Productivity tools and insights for remote workers",
    },
  ],
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI Programming",
    "Web Development",
    "Full-Stack Development",
    "Indie Maker",
    "Open Source",
    "AI Code Review",
    "Next.js",
    "TypeScript",
    "React",
    "Frontend Development",
    "Developer Blog",
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

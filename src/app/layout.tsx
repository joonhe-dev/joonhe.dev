import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { baseMetadata } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = baseMetadata;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joonhe",
  url: "https://joonhe.dev",
  sameAs: [
    "https://twitter.com/joonhe_dev",
    "https://github.com/joonhe-dev",
  ],
  jobTitle: "Full-Stack Developer & Indie Maker",
  description:
    "全栈开发者，独立创作者。分享 AI 辅助编程、Web 开发最佳实践、开源项目经验。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* RSS feed link */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Joonhe.dev Blog RSS"
          href="/feed.xml"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Header />
        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

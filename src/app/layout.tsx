import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { baseMetadata, siteConfig } from "@/lib/site";
import { generatePersonSchema, generateWebsiteSchema } from "@/lib/seo";
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

const jsonLdSchemas = [
  generateWebsiteSchema({
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }),
  generatePersonSchema({}),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Search Console 验证 */}
        {siteConfig.verification.google && (
          <meta
            name="google-site-verification"
            content={siteConfig.verification.google}
          />
        )}
        {/* Bing Webmaster 验证 */}
        {siteConfig.verification.bing && (
          <meta name="msvalidate.01" content={siteConfig.verification.bing} />
        )}

        {/* Preconnect 到第三方域名 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />

        {/* JSON-LD 结构化数据 */}
        {jsonLdSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

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

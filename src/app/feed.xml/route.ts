import { NextResponse } from "next/server";

const posts = [
  {
    title: "AI 辅助 Web 开发实战：从 Prompt 到生产的最佳工作流",
    slug: "ai-web-development-workflow",
    date: "2026-06-12",
    description:
      "每天用 AI 写代码，但你真的用对了吗？本文分享我在 Web 开发中使用 AI 的真实工作流，从 Prompt 技巧到代码审查，从原型设计到生产部署。",
  },
  {
    title: "Web 开发者 AI Prompt 工程指南：让 AI 写出你想要的代码",
    slug: "ai-prompt-engineering-web-dev",
    date: "2026-06-12",
    description:
      "同样的 AI，为什么有人能写出高质量代码，有人只能得到垃圾？关键在于 Prompt 工程。本文总结 Web 开发场景下的 AI Prompt 实战技巧。",
  },
  {
    title: "远程开发者 AI 工具箱：2026 年必备的 10 个 AI 工具",
    slug: "ai-tools-remote-developer",
    date: "2026-06-12",
    description:
      "作为远程工作者，AI 工具就是你的生产力倍增器。本文精选 10 个经过实战检验的 AI 工具，涵盖代码生成、调试、文档、设计全流程。",
  },
  {
    title: "AI 辅助编程：从「复制粘贴」到「结对编程」的进化",
    slug: "ai-assisted-programming-evolution",
    date: "2026-06-12",
    description:
      "AI 代码助手不是搜索引擎的替代品，而是一个永远在线、永不疲倦的结对编程伙伴。问题是——你真的知道怎么和它配合吗？",
  },
  {
    title: "用 AI 做 Code Review：一个开源维护者的实战经验",
    slug: "ai-code-review-practical-guide",
    date: "2026-06-12",
    description:
      "作为开源项目的维护者，我每天要 review 大量 PR。AI Code Review 帮我节省了 60% 的时间，但也踩了不少坑。",
  },
  {
    title: "开源 AI 工具链搭建指南：从模型选择到生产部署",
    slug: "open-source-ai-toolchain-guide",
    date: "2026-06-12",
    description:
      "不想被闭源 API 绑定？这篇文章教你用纯开源工具搭建一套完整的 AI 开发工具链，从本地模型到 CI/CD 全流程覆盖。",
  },
];

export async function GET() {
  const baseUrl = "https://joonhe.dev";

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`,
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Joonhe.dev Blog</title>
    <link>${baseUrl}</link>
    <description>全栈开发者 Joonhe 的博客：AI 编程、Web 开发、开源项目、远程工作</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

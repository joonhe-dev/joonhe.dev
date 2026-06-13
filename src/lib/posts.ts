export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export const posts: PostMeta[] = [
  {
    slug: "ai-web-development-workflow",
    title: "AI-Assisted Web Development: The Best Workflow from Prompt to Production",
    excerpt:
      "Using AI to write code every day, but are you doing it right? This article shares my real workflow for web development with AI — from prompt techniques to code review, prototyping to production deployment.",
    date: "2026-06-12",
    tags: ["AI Programming", "Web Development", "Workflow", "Best Practices", "Productivity"],
  },
  {
    slug: "ai-prompt-engineering-web-dev",
    title: "AI Prompt Engineering Guide for Web Developers: Making AI Write the Code You Want",
    excerpt:
      "Same AI, different results — why do some developers get high-quality code while others get garbage? The key is prompt engineering. This article summarizes practical AI prompt techniques for web development.",
    date: "2026-06-12",
    tags: ["Prompt Engineering", "AI Programming", "Web Development", "Productivity", "Tips"],
  },
  {
    slug: "ai-tools-remote-developer",
    title: "The Remote Developer's AI Toolkit: 10 Essential AI Tools for 2026",
    excerpt:
      "As a remote worker, AI tools are your productivity multiplier. This article curates 10 battle-tested AI tools covering code generation, debugging, documentation, and design across the entire workflow.",
    date: "2026-06-12",
    tags: ["Remote Work", "AI Tools", "Developer Tools", "Productivity", "Open Source"],
  },
  {
    slug: "ai-assisted-programming-evolution",
    title: "AI-Assisted Programming: From Copy-Paste to Pair Programming",
    excerpt:
      "AI code assistants aren't search engine replacements — they're always-on, never-tired pair programming partners. The question is: do you really know how to work with one?",
    date: "2026-06-12",
    tags: ["AI Programming", "Dev Practices", "LLM", "Productivity"],
  },
  {
    slug: "ai-code-review-practical-guide",
    title: "AI-Powered Code Review: Lessons from an Open-Source Maintainer",
    excerpt:
      "As a maintainer of several open-source projects, I review dozens of PRs every day. AI Code Review has saved me 60% of my time — but I've also hit plenty of pitfalls along the way.",
    date: "2026-06-12",
    tags: ["Code Review", "Open Source", "Best Practices"],
  },
  {
    slug: "open-source-ai-toolchain-guide",
    title: "Building an Open-Source AI Toolchain: From Model Selection to Production Deployment",
    excerpt:
      "Don't want to be locked into closed-source APIs? This guide walks you through setting up a complete AI development toolchain using purely open-source tools — from local models to CI/CD.",
    date: "2026-06-12",
    tags: ["Open Source", "Toolchain", "LLM", "Deployment"],
  },
  {
    slug: "one-person-tech-stack",
    title: "The Solo Founder's Guide to Choosing a Tech Stack",
    excerpt:
      "When you're a one-person company, the right tech stack is leverage — the wrong one is a straightjacket. This article shares core principles, specific recommendations, and real cost estimates for solo SaaS builders.",
    date: "2026-06-13",
    tags: ["Tech Stack", "Indie Dev", "SaaS", "Cost Optimization", "Full-Stack"],
  },
  {
    slug: "llm-app-development-practical",
    title: "Building LLM Applications in Practice: From Prompts to RAG to Agents",
    excerpt:
      "LLM app development has three layers: Prompt Engineering, RAG Architecture, and Agent Mode. This article uses TypeScript code examples to walk you through building a production-grade LLM application from scratch.",
    date: "2026-06-17",
    tags: ["LLM", "RAG", "Agent", "AI Applications", "Prompt Engineering", "TypeScript"],
  },
  {
    slug: "open-source-from-zero-to-thousand",
    title: "Growing an Open-Source Project from 0 to 1,000 Stars",
    excerpt:
      "Open source isn't just about writing code. This article shares the full journey of growing a project from zero to 1,000 Stars — covering positioning, documentation strategy, community building, and launch tactics.",
    date: "2026-06-21",
    tags: ["Open Source", "Community Building", "GitHub", "Developer Relations"],
  },
  {
    slug: "keyboard-remapping-ctrl-win-swap",
    title: "Ctrl 与 Win 键互换实战：跨平台开发者的键盘一致性指南",
    excerpt:
      "在 macOS 和 Windows 之间切换，最痛苦的莫过于 Ctrl 和 Win 键的位置差异。本文从虚拟键码原理出发，详解 PowerToys Keyboard Manager 的配置方法，帮你找回统一的肌肉记忆。",
    date: "2026-06-14",
    tags: ["开发实践", "效率", "Windows", "键盘映射"],
  },
  {
    slug: "powertoys-developer-productivity-toolbox",
    title: "PowerToys 深度指南：Windows 开发者的效率工具箱",
    excerpt:
      "大多数人装了 PowerToys 只用了 Keyboard Manager。但这个微软官方工具箱里藏着至少 6 个让开发者效率翻倍的模块——FancyZones 分屏、Run 快捷启动、AlwaysOnTop 置顶、Color Picker 取色……本文带你逐一解锁。",
    date: "2026-06-16",
    tags: ["开发者工具", "效率", "Windows", "PowerToys"],
  },
  {
    slug: "cross-platform-keyboard-consistency",
    title: "跨平台键盘一致性策略：让肌肉记忆不再分裂",
    excerpt:
      "在 macOS、Windows、Linux 三个系统间切换，键盘是最小却最持久的摩擦点。本文提出「固件层 + 系统层 + 应用层」三层一致性架构，帮你从硬件到软件实现全链路键位统一。",
    date: "2026-06-18",
    tags: ["开发实践", "效率", "跨平台", "键盘映射"],
  },
];

/** Get all unique tags with post counts */
export function getAllTags(): Map<string, number> {
  const tagMap = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return tagMap;
}

/** Get posts per page */
export const POSTS_PER_PAGE = 8;

/** Get total pages */
export function getTotalPages(): number {
  return Math.ceil(posts.length / POSTS_PER_PAGE);
}

/** Get posts for a specific page */
export function getPostsByPage(page: number): PostMeta[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}

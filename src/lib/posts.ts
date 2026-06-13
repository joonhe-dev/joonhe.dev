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
    title: "Ctrl and Win Key Swap: A Cross-Platform Developer's Guide to Keyboard Consistency",
    excerpt:
      "Switching between macOS and Windows? The biggest pain is the Ctrl and Win key position mismatch. This article walks through virtual key code fundamentals and PowerToys Keyboard Manager configuration to restore your muscle memory.",
    date: "2026-06-14",
    tags: ["Dev Practices", "Productivity", "Windows", "Keyboard Remapping"],
  },
  {
    slug: "powertoys-developer-productivity-toolbox",
    title: "PowerToys Deep Dive: The Windows Developer's Productivity Toolbox",
    excerpt:
      "Most people install PowerToys and only use Keyboard Manager. But Microsoft's official toolkit hides at least 6 modules that double developer productivity — FancyZones window tiling, Run launcher, AlwaysOnTop, Color Picker, and more. Let's unlock them one by one.",
    date: "2026-06-16",
    tags: ["Developer Tools", "Productivity", "Windows", "PowerToys"],
  },
  {
    slug: "cross-platform-keyboard-consistency",
    title: "Cross-Platform Keyboard Consistency: Stop Splitting Your Muscle Memory",
    excerpt:
      "Switching between macOS, Windows, and Linux? Keyboard layout is the smallest yet most persistent friction point. This article proposes a three-layer consistency architecture — firmware, OS, and application — to unify your keybindings from hardware to software.",
    date: "2026-06-18",
    tags: ["Dev Practices", "Productivity", "Cross-Platform", "Keyboard Remapping"],
  },
  {
    slug: "ai-trust-and-control",
    title: "AI 写代码越来越厉害，但谁来理解系统？",
    excerpt:
      "当 AI 能搞定大部分代码实现，项目初期跑得飞快。但随着业务膨胀、if else 堆积、数据流复杂化，人对系统的掌控力开始下降。AI 时代最危险的问题，或许不是 AI 能不能写代码，而是什么东西必须由人来负责。",
    date: "2026-06-13",
    tags: ["AI 编程", "软件工程", "架构", "技术管理", "思考"],
  },
  {
    slug: "npm-v12-lifecycle-scripts-change",
    title: "npm install 默认不再执行脚本：JavaScript 生态 15 年来最大的安全变革",
    excerpt:
      "npm v12 将于今年 7 月发布，默认禁止生命周期脚本执行。这意味着 '安装依赖 = 下载代码 + 执行代码' 这个持续了 15 年的危险设计，终于被终结了。",
    date: "2026-06-13",
    tags: ["npm", "JavaScript", "安全", "前端", "开源"],
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

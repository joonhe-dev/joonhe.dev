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
    title: "AI 辅助 Web 开发实战：从 Prompt 到生产的最佳工作流",
    excerpt:
      "每天用 AI 写代码，但你真的用对了吗？本文分享我在 Web 开发中使用 AI 的真实工作流，从 Prompt 技巧到代码审查，从原型设计到生产部署。",
    date: "2026-06-12",
    tags: ["AI 编程", "Web 开发", "工作流", "最佳实践", "效率"],
  },
  {
    slug: "ai-prompt-engineering-web-dev",
    title: "Web 开发者 AI Prompt 工程指南：让 AI 写出你想要的代码",
    excerpt:
      "同样的 AI，为什么有人能写出高质量代码，有人只能得到垃圾？关键在于 Prompt 工程。本文总结 Web 开发场景下的 AI Prompt 实战技巧。",
    date: "2026-06-12",
    tags: ["Prompt 工程", "AI 编程", "Web 开发", "效率", "技巧"],
  },
  {
    slug: "ai-tools-remote-developer",
    title: "远程开发者 AI 工具箱：2026 年必备的 10 个 AI 工具",
    excerpt:
      "作为远程工作者，AI 工具就是你的生产力倍增器。本文精选 10 个经过实战检验的 AI 工具，涵盖代码生成、调试、文档、设计全流程。",
    date: "2026-06-12",
    tags: ["远程工作", "AI 工具", "开发者工具", "效率", "开源"],
  },
  {
    slug: "ai-assisted-programming-evolution",
    title: "AI 辅助编程：从「复制粘贴」到「结对编程」的进化",
    excerpt:
      "AI 代码助手不是搜索引擎的替代品，而是一个永远在线、永不疲倦的结对编程伙伴。问题是——你真的知道怎么和它配合吗？",
    date: "2026-06-12",
    tags: ["AI 编程", "开发实践", "LLM", "效率"],
  },
  {
    slug: "ai-code-review-practical-guide",
    title: "用 AI 做 Code Review：一个开源维护者的实战经验",
    excerpt:
      "作为开源项目的维护者，我每天要 review 大量 PR。AI Code Review 帮我节省了 60% 的时间，但也踩了不少坑。",
    date: "2026-06-12",
    tags: ["Code Review", "开源", "最佳实践"],
  },
  {
    slug: "open-source-ai-toolchain-guide",
    title: "开源 AI 工具链搭建指南：从模型选择到生产部署",
    excerpt:
      "不想被闭源 API 绑定？这篇文章教你用纯开源工具搭建一套完整的 AI 开发工具链，从本地模型到 CI/CD 全流程覆盖。",
    date: "2026-06-12",
    tags: ["开源", "工具链", "LLM", "部署"],
  },
  {
    slug: "one-person-tech-stack",
    title: "一人公司的技术栈选型指南",
    excerpt:
      "一人公司如何用最低成本搭建技术栈？本文从实战角度出发，分享独立开发者从 MVP 到规模化各阶段的技术选型策略与成本优化方案。",
    date: "2026-06-13",
    tags: ["一人公司", "技术栈", "独立开发", "SaaS", "成本优化"],
  },
  {
    slug: "llm-app-development-practical",
    title: "LLM 应用开发实战：从 Prompt 到 RAG 到 Agent",
    excerpt:
      "LLM 应用开发的三个层次：Prompt 工程、RAG 架构、Agent 模式。本文用 TypeScript 代码示例，带你从零搭建一套生产级 LLM 应用。",
    date: "2026-06-17",
    tags: ["LLM", "RAG", "Agent", "AI 应用", "Prompt 工程"],
  },
  {
    slug: "open-source-from-zero-to-thousand",
    title: "开源项目从 0 到 1000 Star 的运营心得",
    excerpt:
      "做开源不只是写代码。本文分享一个开源项目从零到 1000 Star 的真实经历，涵盖项目定位、文档策略、社区运营、发布推广全流程。",
    date: "2026-06-21",
    tags: ["开源", "社区运营", "GitHub", "开发者关系"],
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

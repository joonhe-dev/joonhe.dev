import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDateLong } from "@/lib/date";
import { generateSeoMeta } from "@/lib/seo";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
}

const posts: PostMeta[] = [
  {
    slug: "ai-web-development-workflow",
    title: "AI 辅助 Web 开发实战：从 Prompt 到生产的最佳工作流",
    excerpt:
      "每天用 AI 写代码，但你真的用对了吗？本文分享我在 Web 开发中使用 AI 的真实工作流，从 Prompt 技巧到代码审查，从原型设计到生产部署。",
    date: "2026-06-12",
    tags: ["AI 编程", "Web 开发", "工作流", "最佳实践", "效率"],
    content: `
## 引言：AI 时代的 Web 开发，到底变了什么？

2024-2026 年，Web 开发的效率发生了质变。不是因为你写得快了 20%，而是因为 AI 帮你省掉了 80% 的重复劳动。

但我也看到很多开发者用 AI 的方式是错的——把 AI 当搜索引擎，问一句答一句，代码复制粘贴就跑。结果呢？代码质量参差不齐，出了问题不知道怎么修，修了又引入新 bug。

这篇文章不讲虚的，直接分享我每天在用的 AI Web 开发工作流。

## 一、AI 辅助 Web 开发：我的完整工作流

### 1.1 需求分析阶段：用 AI 做方案调研

在写任何代码之前，先用 AI 做技术选型和方案对比。

实战案例：我需要为一个 SaaS 项目选择前端状态管理方案。

我的 Prompt：
"我正在开发一个多租户 SaaS 管理后台，技术栈 Next.js 16 + TypeScript + Tailwind。需要管理用户会话、租户配置、实时通知等全局状态。请帮我对比 Zustand、Jotai、Redux Toolkit 在这个场景下的优劣势，重点考虑：TypeScript 类型推导、SSR 兼容性、学习曲线、包体积。"

AI 给出的对比帮我直接排除了 Redux Toolkit（太重），选择了 Zustand（轻量 + 类型安全 + SSR 友好）。省了我至少半天调研时间。

### 1.2 原型开发阶段：AI 生成骨架代码

有了方案后，让 AI 生成初始代码骨架。

关键技巧：不要一次性让 AI 生成整个页面。按模块拆分，每个模块给足上下文。

错误做法："帮我写一个完整的电商后台"
正确做法："帮我写一个 ProductTable 组件，接收 Product[] 数据，支持排序、筛选、分页。UI 用 Tailwind，类型定义如下：..."

### 1.3 迭代优化阶段：让 AI 做 Code Review

代码写完后，让 AI 做第一轮 review，检查类型安全、潜在性能问题、错误处理是否完善。

### 1.4 测试阶段：AI 生成测试用例

让 AI 基于组件生成 Jest 测试用例，覆盖正常渲染、空数据、加载状态、错误状态、边界值。

## 二、Web 开发中 AI Prompt 的黄金法则

1. **给 AI 一个角色** — "你是一个资深前端工程师..."
2. **提供完整上下文** — 项目、技术栈、当前文件、问题
3. **要求多个方案** — 让 AI 给出方案对比
4. **迭代追问** — 不要接受第一个答案

## 三、实战案例：用 AI 开发搜索组件

从需求描述到最终代码，整个流程 30 分钟（纯手写至少 2 小时）。关键步骤：需求描述 → AI 生成第一版 → 人工 review → 追问竞态条件处理 → AI 补充 AbortController → 最终代码。

## 四、AI 辅助 Web 开发的常见陷阱

- AI 可能用不存在的 API — 永远验证
- AI 不理解你的项目架构 — 提供上下文
- AI 不自动考虑安全 — 人工审查

## 五、总结

效率提升 = (AI 生成速度 × 迭代次数) - (人工审查时间 + 修复 AI 错误的时间)

核心结论：AI 帮你加速，但不能替代你的判断。迭代追问是 AI 编程的核心技能。
`,
  },
  {
    slug: "ai-prompt-engineering-web-dev",
    title: "Web 开发者 AI Prompt 工程指南：让 AI 写出你想要的代码",
    excerpt:
      "同样的 AI，为什么有人能写出高质量代码，有人只能得到垃圾？关键在于 Prompt 工程。本文总结 Web 开发场景下的 AI Prompt 实战技巧。",
    date: "2026-06-12",
    tags: ["Prompt 工程", "AI 编程", "Web 开发", "效率", "技巧"],
    content: `
## 引言：Prompt 工程是 2026 年开发者的必修课

2026 年，不会写 Prompt 的开发者，就像 2016 年不会用 Google 的开发者。同样的 AI，不同的人用，产出天差地别。区别在哪？Prompt 工程。

## 一、Web 开发 Prompt 的 4C 框架

- **Context** — 项目上下文（技术栈、已有代码、约束条件）
- **Command** — 明确指令（要做什么、输出格式）
- **Constraint** — 约束条件（性能要求、兼容性、安全要求）
- **Check** — 检查要求（让 AI 自我检查、指出风险）

## 二、Web 开发场景 Prompt 模板库

### 组件开发模板
包含需求描述、技术栈、接口定义、功能要求、状态覆盖、代码风格。

### API 开发模板
包含请求/响应定义、业务逻辑、安全要求、错误处理。

### Bug 修复模板
包含 Bug 描述、复现步骤、代码片段、已尝试的排查、环境信息。

## 三、高级 Prompt 技巧

1. **Chain of Thought 思维链** — 让 AI 一步步推理，准确率提升 30-50%
2. **Few-Shot 少样本学习** — 给 AI 输出示例
3. **Negative Prompt 反向约束** — 告诉 AI 不要做什么
4. **角色扮演** — 设定专家角色提升回答质量

## 四、常见 Web 开发场景 Prompt 示例

- 生成 API 路由
- 调试性能问题
- 代码重构

## 五、总结

好的输出 = 清晰的上下文 + 明确的指令 + 合理的约束 + 迭代的追问

记住三点：给 AI 当产品经理、分步迭代、永远验证。
`,
  },
  {
    slug: "ai-tools-remote-developer",
    title: "远程开发者 AI 工具箱：2026 年必备的 10 个 AI 工具",
    excerpt:
      "作为远程工作者，AI 工具就是你的生产力倍增器。本文精选 10 个经过实战检验的 AI 工具，涵盖代码生成、调试、文档、设计全流程。",
    date: "2026-06-12",
    tags: ["远程工作", "AI 工具", "开发者工具", "效率", "开源"],
    content: `
## 引言：远程工作者的 AI 工具观

作为远程开发者，你的时间就是你的钱。没有人会在你卡住的时候走过来帮你。所以，远程开发者比办公室开发者更需要 AI 工具。

## 一、代码生成与辅助

### Cursor — AI-first IDE
不是 VS Code 插件，而是原生 AI IDE。Tab 补全准确率极高，支持跨文件上下文理解。

### Claude / ChatGPT — 通用 AI 助手
上下文窗口大（Claude 200K），适合方案设计、技术选型、大型代码库 review。

## 二、调试与排错

### Warp — AI 终端
原生 AI 终端，自然语言转命令，内置 AI 错误分析。

### Sentry + AI — 错误监控
自动分析错误堆栈，给出修复建议。

## 三、文档与知识管理

### Notion AI — 文档助手
技术方案文档、API 文档自动生成。

### Obsidian + Copilot — 个人知识库
本地存储，隐私安全，双向链接知识图谱。

## 四、设计与原型

### v0.dev — AI 生成 UI
自然语言描述直接生成 React/Tailwind 代码，可用于生产。

## 五、部署与运维

### Vercel AI — 部署助手
自动检测框架，优化构建配置。

### GitHub Copilot for PR — AI 代码审查
自动生成 PR 描述，AI 代码审查。

## 六、远程开发者的 AI 工具链组合

零成本入门：Cursor（免费版）+ ChatGPT（免费版）+ Warp（免费）
效率优先：Cursor Pro（$20）+ Claude Pro（$20）+ Warp（免费）
全栈覆盖：Cursor Pro + Claude Pro + Notion AI + v0.dev

## 七、远程工作者的 AI 使用原则

1. AI 是你的初级工程师 — 帮你做脏活，决策和审核你来
2. 建立自己的 Prompt 库 — 常用模板保存下来复用
3. 定期更新工具链 — 每季度 review 一次
4. 注意数据安全 — 不要在 AI 工具中粘贴密钥和密码

## 八、总结

远程开发者 = 技术能力 × AI 工具链 × 自律

从零成本方案开始，用一个月。如果觉得值，逐步升级。
`,
  },
  {
    slug: "ai-assisted-programming-evolution",
    title: "AI 辅助编程：从「复制粘贴」到「结对编程」的进化",
    excerpt:
      "AI 代码助手不是搜索引擎的替代品，而是一个永远在线、永不疲倦的结对编程伙伴。问题是——你真的知道怎么和它配合吗？",
    date: "2026-06-12",
    tags: ["AI 编程", "开发实践", "LLM", "效率"],
    content: `
## 一个尴尬的事实

过去两年，我见过太多开发者使用 AI 代码助手的方式是这样的：遇到问题 → 打开 ChatGPT → 粘贴代码 → 复制答案 → 跑不通 → 回到第一步。这不是 AI 辅助编程，这是高级版 Stack Overflow。

真正的 AI 辅助编程，是人和 AI 形成一种认知协作关系。AI 处理它擅长的（模式匹配、代码生成），人处理自己擅长的（架构决策、价值判断）。

## 误区一：把 AI 当搜索引擎用

错误做法：直接让 AI 写代码，复制粘贴完事。
正确做法：描述需求背景、约束条件、你的思路，和 AI 讨论方案后再生成代码。

## 误区二：不给 AI 上下文

AI 友好的 Prompt 模板：背景 → 当前状态 → 目标 → 约束 → 你的思路。

## 误区三：盲目信任 AI 生成的代码

每次使用 AI 代码后检查：编译通过？边界情况？安全性？性能？可维护性？测试？

## 误区四：不会追问

好的 AI 协作是迭代过程。让 AI 自己 critique 自己的方案，往往能发现盲点。

## 总结

AI 不会取代开发者，但会用 AI 的开发者会取代不会用的。
`,
  },
  {
    slug: "ai-code-review-practical-guide",
    title: "用 AI 做 Code Review：一个开源维护者的实战经验",
    excerpt:
      "作为开源项目的维护者，我每天要 review 大量 PR。AI Code Review 帮我节省了 60% 的时间，但也踩了不少坑。",
    date: "2026-06-12",
    tags: ["Code Review", "开源", "最佳实践"],
    content: `
## 背景

我维护的几个开源项目，平均每天收到 10-15 个 PR。半年前开始用 AI 做代码审查辅助，形成了一套成熟的工作流。

## AI Code Review 擅长什么

1. 规范性检查 — 代码风格、命名规范、commit 规范
2. 常见 Bug 模式 — 未处理的异步错误、内存泄漏、类型断言滥用
3. 测试覆盖率分析
4. 文档与代码一致性

## AI Code Review 的局限性

架构决策、业务逻辑正确性、团队政治、代码品味 — 这些需要人的判断。

## 我的 AI Code Review 工作流

AI 初筛（自动）→ 人做深度 review → AI 复查

## 开源项目中的实践

设置 AI review bot 规则：自动通过（文档/测试/小更新）、人工 review（新功能/核心逻辑/DB schema）、自动打回（敏感信息/二进制文件/无测试变更）。

## 总结

AI review 是帮你发现问题，不是帮你判断问题。最终的责任在你手上。
`,
  },
  {
    slug: "open-source-ai-toolchain-guide",
    title: "开源 AI 工具链搭建指南：从模型选择到生产部署",
    excerpt:
      "不想被闭源 API 绑定？这篇文章教你用纯开源工具搭建一套完整的 AI 开发工具链，从本地模型到 CI/CD 全流程覆盖。",
    date: "2026-06-12",
    tags: ["开源", "工具链", "LLM", "部署"],
    content: `
## 为什么需要开源 AI 工具链？

2025-2026 年，开源模型追上闭源（Llama 4、DeepSeek V3、Qwen 3），推理成本断崖式下降。你不再需要依赖闭源 API。

## 第一层：本地模型运行

Ollama（最简单）、llama.cpp（性能最优）、Open WebUI（类 ChatGPT 界面）

## 第二层：AI 辅助开发工具

Continue.dev — 开源 AI 代码助手，支持本地模型

## 第三层：AI 应用的部署与运维

vLLM（模型服务化）、GPTCache（缓存加速）、LangFuse（监控）

## 开源 vs 闭源的决策框架

选择开源：数据隐私、定制模型、长期成本、离线环境
选择闭源：快速原型、多模态、小团队

## 推荐方案

个人：Ollama + Continue.dev + Open WebUI（零成本）
中型团队：vLLM + Continue.dev + AI Review Bot
企业级：vLLM + LangFuse + GPTCache + RAG

## 写在最后

开源 AI 工具链在 2026 年已经足够成熟。从 Ollama + Continue.dev 开始，零成本体验一周。
`,
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return generateSeoMeta({
    title: post.title,
    description: post.excerpt,
    slug: `blog/${post.slug}`,
    keywords: post.tags,
    publishedTime: post.date,
    tags: post.tags,
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl">
      <Link
        href="/blog"
        className="mb-8 inline-flex text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← 返回博客
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>{formatDateLong(post.date)}</time>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-500">
        {post.content.split("\n").map((line, i) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={i} className="mt-10 mb-4 text-2xl font-semibold">
                {line.replace("## ", "")}
              </h2>
            );
          }
          if (line.startsWith("### ")) {
            return (
              <h3 key={i} className="mt-6 mb-3 text-xl font-semibold">
                {line.replace("### ", "")}
              </h3>
            );
          }
          if (line.startsWith("- **") && line.endsWith("**")) {
            return (
              <p key={i} className="my-1 text-zinc-600 dark:text-zinc-400">
                {line}
              </p>
            );
          }
          if (line.startsWith("- ")) {
            return (
              <li
                key={i}
                className="ml-6 list-disc text-zinc-600 dark:text-zinc-400"
              >
                {line.replace("- ", "")}
              </li>
            );
          }
          if (
            line.startsWith("1. ") ||
            line.startsWith("2. ") ||
            line.startsWith("3. ") ||
            line.startsWith("4. ")
          ) {
            return (
              <li
                key={i}
                className="ml-6 list-decimal text-zinc-600 dark:text-zinc-400"
              >
                {line.replace(/^\d+\. /, "")}
              </li>
            );
          }
          if (line.startsWith("| ")) {
            return null;
          }
          if (line.startsWith("```")) {
            return null;
          }
          if (line.trim() === "") {
            return <div key={i} className="h-3" />;
          }
          return (
            <p key={i} className="my-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {line}
            </p>
          );
        })}
      </div>
    </article>
  );
}

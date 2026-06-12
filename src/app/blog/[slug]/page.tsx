import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDateLong } from "@/lib/date";

// 文章元数据
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
    slug: "ai-assisted-programming-evolution",
    title: "AI 辅助编程：从「复制粘贴」到「结对编程」的进化",
    excerpt:
      "AI 代码助手不是搜索引擎的替代品，而是一个永远在线、永不疲倦的结对编程伙伴。问题是——你真的知道怎么和它配合吗？",
    date: "2026-06-12",
    tags: ["AI", "开发实践", "LLM", "效率"],
    content: `
## 一个尴尬的事实

过去两年，我见过太多开发者使用 AI 代码助手的方式是这样的：

1. 遇到问题 → 打开 ChatGPT
2. 粘贴一大段代码 → "帮我看看哪里错了"
3. 拿到答案 → 复制粘贴回去
4. 跑不通 → 回到步骤 1

这不是 AI 辅助编程，这是**高级版 Stack Overflow**。

真正的 AI 辅助编程，是人和 AI 形成一种**认知协作**关系。AI 处理它擅长的（模式匹配、代码生成、信息检索），人处理自己擅长的（架构决策、边界判断、价值判断）。

## 误区一：把 AI 当搜索引擎用

### ❌ 错误做法

你：帮我写一个 React 自定义 hook 来处理表单验证

AI：给你一个 useForm hook...

你：复制粘贴，完事

### ✅ 正确做法

你：我需要一个表单验证方案，要求：
1. 支持动态字段（用户可添加/删除字段）
2. 异步校验（检查用户名是否已被注册）
3. 错误信息要支持 i18n
4. 性能要求：大表单（50+字段）不能卡顿

我目前的思路是用 React Hook Form + Zod，但对动态字段部分的类型推导不太确定。你能帮我分析一下几种方案的 trade-off 吗？

AI 会给出方案对比，然后你选择后再生成代码。

**关键区别**：你不是在"要代码"，而是在**讨论方案**。AI 知道上下文后，生成的代码质量完全不同。

## 误区二：不给 AI 上下文

AI 没有"读心术"。你给的信息越少，它猜得越离谱。

### AI 友好的 Prompt 模板

- **背景**：项目/模块的简要描述
- **当前状态**：已有的代码结构、关键接口
- **目标**：要解决什么问题
- **约束**：性能要求、兼容性、已有技术栈
- **我的思路**：你初步的想法，让 AI 在这个基础上优化

**真实案例**：我之前写一个文件上传组件，第一次 prompt 只说了"帮我写个文件上传"，AI 给了一个基础的 input[type=file]。第二次我补充了"需要支持分片上传、断点续传、秒传验证、并发控制"，AI 给出的方案直接可用，节省了我至少半天调研时间。

## 误区三：盲目信任 AI 生成的代码

这是最危险的。AI 生成的代码看起来**非常自信**，但可能：

- 🐛 用了不存在的 API
- 🔒 有安全漏洞（SQL 注入、XSS）
- ⚡ 性能极差（O(n³) 的算法）
- 📦 引入了不必要的依赖

### 我的 Code Review 清单

每次使用 AI 生成的代码，我都会过一遍：

- [ ] **编译/类型检查** — TypeScript 编译通过了？
- [ ] **边界情况** — 空值、异常输入、并发场景？
- [ ] **安全性** — 用户输入有 sanitize 吗？
- [ ] **性能** — 有没有不必要的循环、重复请求？
- [ ] **可维护性** — 别人看得懂吗？有注释吗？
- [ ] **测试** — 现有测试还能过吗？

## 误区四：不会"追问"

AI 第一次给出的方案往往不是最好的。**好的 AI 协作是一个迭代过程**。

### 追问技巧

- "这个方案在数据量大的时候性能怎么样？"
- "有没有更简洁的实现方式？"
- "如果换成 Web Worker 处理，会有什么 trade-off？"
- "这个实现的边界情况是什么？"
- "能帮我生成对应的单元测试吗？"

我经常让 AI 自己 critique 自己的方案——"请指出这个实现可能存在的问题"，往往能发现不少盲点。

## 总结

AI 辅助编程的核心不是"让 AI 写代码"，而是**让 AI 帮你思考得更快、更全面**。

- 把它当**结对编程伙伴**，而不是代码生成器
- 给足上下文，**不要让它猜**
- **永远 review** AI 生成的代码
- **迭代追问**，不要接受第一个答案

最后送大家一句话：**AI 不会取代开发者，但会用 AI 的开发者会取代不会用的。**
`,
  },
  {
    slug: "ai-code-review-practical-guide",
    title: "用 AI 做 Code Review：一个开源维护者的实战经验",
    excerpt:
      "作为开源项目的维护者，我每天要 review 大量 PR。AI Code Review 帮我节省了 60% 的时间，但也踩了不少坑。",
    date: "2026-06-12",
    tags: ["AI", "Code Review", "开源", "最佳实践"],
    content: `
## 背景

我维护的几个开源项目，平均每天收到 10-15 个 PR。靠人工一个个 review，一天的时间就搭进去了。

半年前我开始尝试用 AI 做代码审查的辅助，到现在已经形成了一套相对成熟的工作流。

这篇文章分享我的实战经验——**哪些 AI 能做好，哪些必须人来做**。

## AI Code Review 擅长什么

### 1. 规范性检查

AI 对代码规范极其敏感，而且**不会累**。把项目的 ESLint/Prettier 配置、命名规范、commit 规范都告诉 AI，让它做第一道把关。

### 2. 常见 Bug 模式

AI 对已知的 bug 模式识别能力很强：

- 未处理的异步错误
- 内存泄漏（未清理的监听器、定时器）
- 类型断言滥用（as any、as unknown as X）
- 重复代码（DRY 原则违反）
- 不安全的用户输入处理

### 3. 测试覆盖率分析

AI review 时能自动发现：新增函数没有对应测试、修改了返回格式但现有测试没有覆盖新字段。

### 4. 文档与代码的一致性

AI 能发现"注释说的和代码做的不一样"的问题——这是人类 review 时最容易忽略的。

## AI Code Review 的局限性

- ❌ **架构决策** — AI 很难判断模块划分、组合 vs 继承这类问题
- ❌ **业务逻辑正确性** — AI 不知道你的业务规则
- ❌ **团队政治和代码所有权** — 需要人的判断
- ❌ **审美和品味** — 什么时候该抽象、什么时候该直白

## 我的 AI Code Review 工作流

### 第一步：AI 初筛（自动）

当 PR 提交时，AI 自动做第一轮 review，检查代码风格、安全漏洞、测试覆盖、API 文档等。

### 第二步：人做深度 review

AI 标记出问题后，只 review AI 标记的部分 + 关键逻辑，而不是通读整个 diff。大概节省 60% 的 review 时间。

### 第三步：AI 复查

Review 完后，让 AI 再检查一遍："请对比原始 PR 和我的 review 意见，检查我有没有遗漏重要问题，以及我的 review 意见是否合理。"

这一步经常能发现漏掉的问题，或者让某些过于苛刻的 review 意见变得合理。

## 开源项目中的实践

对于开源项目，我设置了一个 AI review bot，规则如下：

**自动通过的 PR（AI 直接 approve）：**
- 只修改了文档/注释
- 只修改了测试用例
- 依赖版本更新（patch 级别）

**需要人工 review 的 PR：**
- 新增功能/API
- 修改了核心逻辑
- 修改了数据库 schema
- 修改了构建配置

**自动打回的 PR：**
- 包含敏感信息（密钥、token）
- 二进制文件变更
- 大幅修改了 lock 文件
- 没有测试的代码变更

## 总结

AI Code Review 不是要取代人类 reviewer，而是**让人类 reviewer 把精力花在最有价值的地方**。

- ✅ AI 做规范性检查、常见 bug 检测、测试覆盖分析
- ❌ 架构决策、业务逻辑、代码品味留给人类
- 🔄 形成"AI 初筛 → 人深度 review → AI 复查"的闭环

**记住**：AI review 是帮你**发现**问题，不是帮你**判断**问题。最终的责任还是在你手上。
`,
  },
  {
    slug: "open-source-ai-toolchain-guide",
    title: "开源 AI 工具链搭建指南：从模型选择到生产部署",
    excerpt:
      "不想被闭源 API 绑定？这篇文章教你用纯开源工具搭建一套完整的 AI 开发工具链，从本地模型到 CI/CD 全流程覆盖。",
    date: "2026-06-12",
    tags: ["AI", "开源", "工具链", "LLM", "部署"],
    content: `
## 为什么需要开源 AI 工具链？

2025-2026 年，AI 领域发生了两件大事：

1. **开源模型追上闭源** — Llama 4、DeepSeek V3、Qwen 3 等开源模型在多项基准上已经接近或超越 GPT-4 级别
2. **推理成本断崖式下降** — 本地运行 70B 模型已经可以在消费级硬件上实现

这意味着：**你不再需要依赖闭源 API 来做 AI 开发**。

## 第一层：本地模型运行

### 硬件选型建议

| 场景 | 推荐配置 | 可运行模型 |
|------|---------|-----------|
| 代码补全 | 16GB RAM + 无 GPU | Qwen 2.5 Coder 7B (GGUF) |
| 代码审查 | 32GB RAM + RTX 3060+ | DeepSeek Coder 33B |
| 全功能助手 | 64GB RAM + RTX 4090 | Llama 4 70B (量化) |
| 企业级部署 | A100/H100 | DeepSeek V3 全量 |

### 推荐工具

**Ollama** — 最简单的本地模型运行方式：
\`\`\`bash
ollama pull deepseek-coder:33b
ollama run deepseek-coder:33b
\`\`\`

**llama.cpp** — 性能最优的推理引擎：
\`\`\`bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp && make -j
./main -m deepseek-coder-33b.Q4_K_M.gguf -p "Write a React hook"
\`\`\`

**Open WebUI** — 类 ChatGPT 的本地界面：
\`\`\`bash
docker run -d -p 3000:8080 \\
  -v open-webui:/app/backend/data \\
  ghcr.io/open-webui/open-webui:main
\`\`\`

## 第二层：AI 辅助开发工具

### 代码补全 — Continue.dev

Continue 是目前最好的开源 AI 代码助手，支持 VS Code 和 JetBrains。

配置要点：
- 用 7B 模型做行内补全（速度快）
- 用 33B+ 模型做对话和代码生成（质量高）
- 开启 codebase indexing 让 AI 理解你的项目上下文

### 代码审查 — 自建 AI Review Bot

通过 GitHub Actions 集成 AI review，在 PR 提交时自动检查命名规范、错误处理、测试覆盖等。

## 第三层：AI 应用的部署与运维

### 模型服务化 — vLLM

vLLM 是目前最高效的开源模型推理引擎，兼容 OpenAI API 格式：

\`\`\`bash
docker run --gpus all -p 8000:8000 \\
  vllm/vllm-openai:latest \\
  --model deepseek-ai/deepseek-coder-33b-instruct
\`\`\`

### 缓存与加速 — GPTCache

相似问题自动命中缓存，可节省 80% 的推理成本。

### 监控与可观测性 — LangFuse

自部署 LangFuse 追踪每次 LLM 调用，分析延迟、成本和效果。

## 开源 vs 闭源的决策框架

**选择开源 AI 的场景：**
- 数据隐私要求高（金融、医疗、法律）
- 需要定制模型行为（fine-tuning）
- 长期成本敏感（API 费用随用量线性增长）
- 离线/内网环境部署

**选择闭源 API 的场景：**
- 快速原型验证（几天内出 MVP）
- 需要多模态能力（GPT-4V、Claude Vision）
- 小团队无运维能力
- 对延迟不敏感

## 我的推荐方案

\`\`\`
个人开发者 / 小团队：
  Ollama (本地) + Continue.dev (IDE) + Open WebUI (聊天)
  → 零成本，完全离线

中型团队：
  vLLM (服务化) + Continue.dev + 自建 AI Review Bot
  → 月成本 ~$200 (GPU 租赁)

企业级：
  vLLM + LangFuse + GPTCache + 自建 RAG 系统
  → 需要专职 MLOps 团队
\`\`\`

## 写在最后

开源 AI 工具链在 2026 年已经足够成熟，**完全可以用纯开源方案搭建一套可用的 AI 开发环境**。

但要注意：开源不等于免费。你需要投入时间学习配置、调优、运维。如果你的时间比 GPU 租金更贵，闭源 API 可能更划算。

**我的建议**：从 Ollama + Continue.dev 开始，零成本体验一周。如果觉得值，再逐步升级到更复杂的方案。
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
  return {
    title: post.title,
    description: post.excerpt,
  };
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
        ← Back to Blog
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>{formatDateLong(post.date)}</time>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
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
              <li key={i} className="ml-6 list-disc text-zinc-600 dark:text-zinc-400">
                {line.replace("- ", "")}
              </li>
            );
          }
          if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ")) {
            return (
              <li key={i} className="ml-6 list-decimal text-zinc-600 dark:text-zinc-400">
                {line.replace(/^\d+\. /, "")}
              </li>
            );
          }
          if (line.startsWith("| ")) {
            return null; // skip tables for now
          }
          if (line.startsWith("```")) {
            return null; // skip code fences
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

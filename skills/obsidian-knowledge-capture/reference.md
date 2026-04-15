# Obsidian LLM Wiki — 参考模板

## `raw/` 存档文件模板

```markdown
---
title: "文章标题或自拟标题"
date: YYYY-MM-DD
source: "https://..." 
# 或 source: "pasted" / "user-provided"
ingested_at: "YYYY-MM-DDTHH:MM:SS"
excerpt: false
---

# 正文（或节选）

（此处为抓取或用户提供的正文，尽量保持完整以便回溯。）

## Source metadata

- 抓取/录入方式：
- 公开 URL（若有）：
- 备注（节选原因、与 URL 差异等）：
```

## `wiki/` 来源摘要页模板（链向 raw）

使用 **Obsidian 维基链** 链到 raw 笔记标题（推荐与 `raw` 文件 `title` 一致），避免硬编码绝对路径。

```markdown
---
title: "摘要 · 文章短标题"
date: YYYY-MM-DD
tags: [wiki/source]
sources:
  - "[[RAW 笔记标题]]"
---

# 摘要 · xxx

## 一句话

## 要点（3–8 条）

-

## 关键术语

- **术语**：→ [[概念页]]

## 与既有笔记的关联

- [[相关主题]]
- 与 [[某旧结论]] 的关系：一致 / 补充 / 冲突（见下）

## 冲突与修订（若无则删）

- 旧说法：
- 新依据（[[RAW 笔记标题]]）：
- 新结论：

## 行动项

- [ ]
```

## `wiki/index.md` 增量片段

在合适分类下追加（保持全文件可读性；大量时可分卷）。

```markdown
## Sources（来源摘要）

| 页面 | 摘要 |
|------|------|
| [[摘要 · 某文]] | 一句话 |

## Concepts（概念）

| 页面 | 说明 |
|------|------|
| [[某概念]] | 一句话 |
```

## `wiki/log.md` 条目模板

```markdown
## [YYYY-MM-DD] ingest | 文章短标题或 slug

- 类型：url | paste | url+paste
- raw：`raw/2026-04-15-example-slug.md`
- wiki：新建 [[摘要 · Example]]、更新 [[某概念]]
- 备注：
```

## `wiki/log.md` — Lint 记录

```markdown
## [YYYY-MM-DD] lint | optional-scope

- orphans：
- stale：
- missing-links：
- suggested-actions：
```

## 原子概念页（简短）

```markdown
---
title: "概念名"
date: YYYY-MM-DD
tags: [wiki/concept]
---

# 概念名

## 定义

## 参见

- 来源：[[RAW 或 摘要页]]

## 相关

- [[其它概念]]
```

## 可选：附件

- Vault 设置中将附件目录设为 `raw/assets/` 时，剪藏后图片与 raw 笔记并列，wiki 中说明「见图见 raw 笔记」即可。

---
name: obsidian-wiki-reorganize
description: >-
  Scans an existing Obsidian vault’s raw/ and wiki/ trees with no new user
  input: lints links and structure, reconciles index.md and log.md, flags stale
  or orphan pages, and applies safe reorganizations. Use when the user asks to
  tidy, lint, health-check, rebuild the index, or “自动整理 Obsidian / raw /
  wiki” with no source to ingest.
---

# Obsidian 自动整理（仅基于现有 raw / wiki）

## 何时启用

- 用户要求**整理、重整、体检、修复链接、重建索引、清理孤儿页**，且**不提供**新文章或链接
- 触发语示例：自动整理 Obsidian、整理一下知识库、wiki 体检、重建 index、raw/wiki 大扫除

## 与「摄取」技能的分工

- **摄取技能**：新来源 → 先写 `raw/` 再写 `wiki/`。
- **本技能**：**零新输入**，只对已有 `raw/`、`wiki/`（及 `index.md` / `log.md`）做盘点、去孤儿、更新索引与日志。

## 开始前

1. 确认 **Vault 根路径**（用户规则或询问）。
2. 若存在 **schema**（`AGENTS.md`、`WIKI-SCHEMA.md` 等），先读：目录名、命名、禁止移动的目录以 schema 为准。
3. 默认根下关注：`raw/`、`wiki/`、`wiki/index.md`、`wiki/log.md`（路径以 schema 为准）。

---

## 执行流程（按顺序）

### 1. 盘点（只读）

- 列出 `raw/` 下 `.md`（递归），记录：`title`（frontmatter 或首行）、`date`、`source`。
- 列出 `wiki/` 下 `.md`（递归），**排除**若存在的 `index.md`、`log.md` 以免当普通笔记误删。
- 用搜索或解析提取 `[[...]]` 与 `[[...|alias]]`，建立「笔记标题 → 被引用次数」粗图（规模特大时可抽样 + 全量 grep 关键 orphan）。

### 2. 健康检查（Lint）

至少检查并**写入报告**（对话 + 可选 `wiki/log.md` 一条 lint 记录）：

| 项 | 说明 |
|----|------|
| **孤儿页** | wiki 中无任何入链（可从 index、其它 wiki 页）的页面 |
| **断链** | `[[不存在的标题]]` 或指向已删文件 |
| **raw 未被引用** | `raw/` 笔记在 `wiki/` 中从未被链到（摘要页缺失） |
| **陈旧** | 长期未出现在 `log.md` 近期 ingest、但 topic 敏感的页可标「待复核」 |
| **重复主题** | 标题/别名高度重合的页（只标建议合并，不自动删） |
| **index 漂移** | `wiki/index.md` 与当前 `wiki/` 实际页面不一致 |

不做：未经用户确认**删除**文件；不**改写** `raw/` 正文（整理 raw 仅指元数据补全或用户明确授权时）。

### 3. 整理动作（默认应执行的安全项）

在 Vault 内**直接修改文件**，除非用户说「只报告不改」：

1. **重建或增量修正 `wiki/index.md`**
   - 以当前 `wiki/` 为准生成/更新分类表：每页一行或一行一条：链接 + 一句话（可从该页首段或 frontmatter `description` 摘；无则占位「待补摘要」）。
   - 保留用户手工写的说明性段落；若冲突，**合并**而非整文件覆盖（可先读全文件再改）。

2. **追加 `wiki/log.md`**
   - 格式：  
     `## [YYYY-MM-DD] reorganize | auto`  
   - 正文：扫描范围、raw 数量、wiki 数量、修复项摘要（断链数、孤儿数、index 是否更新）。

3. **补链减孤（轻量）**
   - 为「仅有 raw、无 wiki 摘要」的来源：**新建**最小 `wiki/` 摘要页**或**在既有主题页加「来源」小节并 `[[raw 标题]]`，二选一以 schema 为准；无 schema 时优先新建 `wiki/sources/` 下摘要 stub。
   - 为明显孤儿：在合适 **MOC 或主题页** 增加一条链接指向该页；若无主题页，在 `index.md` 中归入「未分类」并链到该页。

4. **断链**
   - 能唯一对应某页则**修正链接文本**；ambiguous 则列在 lint 报告，不改猜。

### 4. 可选（仅当用户同意或显式要求）

- 批量统一 frontmatter（`date`、`tags`）缺省字段。
- 将 `wiki/` 子目录结构调整（**必须先列出移动清单并请用户确认**）。

---

## 输出给用户

- 简短摘要：处理了多少文件、index/log 是否更新、前几项 lint 统计。
- **待人工**列表：ambiguous 合并、需删重复、需付费墙判断等。

---

## 禁止

- 不删除 `raw/` 内容；不整篇替换用户 wiki 正文「用摘要覆盖」。
- 不把整理结果只写在聊天里而不更新 `log.md`（除非用户只要只读报告）。

## 参考

- 与 **obsidian-knowledge-capture**（摄取）技能共用同一套 `raw/`、`wiki/`、`index.md`、`log.md` 约定。需要模板时读取同仓库 `skills/obsidian-knowledge-capture/reference.md`（或本机 `~/.cursor/skills/obsidian-knowledge-capture/reference.md`）。
- 本技能独有补充（孤儿判定、`index` 区块标记、log 条目示例）：见 [reference.md](reference.md)。

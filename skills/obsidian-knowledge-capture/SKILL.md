---
name: obsidian-knowledge-capture
description: >-
  Two-layer Obsidian workflow: (1) extract and archive sources under raw/ as
  immutable markdown; (2) summarize, link, and integrate into wiki/ as a
  persistent LLM-maintained wiki with index.md and log.md updates. Use when the
  user ingests URLs or pasted content into Obsidian, wants LLM Wiki-style
  compounding notes, or mentions raw/wiki 沉淀、摄取、索引、变更日志.
---

# Obsidian：Raw 存档 + Wiki 合成（LLM Wiki 模式）

## 核心理念（执行时记在心上）

- **raw/**：来源层，**只增不改**（除非用户明确要求订正存档）。一篇来源一份存档，作为事实与引用的锚点。
- **wiki/**：合成层，由代理**创建与持续维护**：摘要、概念/实体页、主题综述、`[[双链]]`、与新来源冲突时的修订说明。
- **目标**：知识**累积**——每次摄取都写入日志、更新索引，并把新信息**编入**已有 wiki，而不是只在对话里答一次就消失。

## 何时启用

- 用户提供链接、粘贴正文、或「链接 + 摘录内容」，要求入库、沉淀、整理、做笔记
- 用户提到：Obsidian、raw、wiki、摄取、ingest、索引、log、LLM Wiki、个人知识库

## 开始前

1. 确认 **Vault 根路径**（用户规则或当场询问）。
2. 若库根存在 **schema**（如 `AGENTS.md`、`WIKI-SCHEMA.md`、`CLAUDE.md` 中关于本库的约定），**先读再写**，目录名与命名以 schema 为准。
3. 默认目录（无 schema 时）：
   - 存档：`raw/`
   - 合成：`wiki/`
   - 可选附件：`raw/assets/`（图片等本地化时指向此处）

---

## 摄取流程（必须分两阶段，顺序固定）

### 阶段 A — 写入 `raw/`（存档）

**目的**：把「你给我的东西」无损落到磁盘，便于回溯、引用、版权上可控地保留摘录而非只在聊天里。

1. **收集正文**
   - **仅 URL**：用 `WebFetch` 等拉取；失败则请用户粘贴正文或改用剪藏插件已生成的文件。
   - **粘贴内容**：原样作为来源正文（可适度规范化 Markdown，不改变语义）。
   - **URL + 正文**：以用户粘贴为准作正文，URL 写入元数据；若二者冲突，在 raw 文件「备注」里记一笔。

2. **命名与路径**（可被 schema 覆盖）

   - 建议：`raw/YYYY-MM-DD-英文或拼音短 slug.md`
   - 或：`raw/articles/YYYY-MM-DD-标题简写.md`

3. **每个 raw 文件至少包含**

   - YAML：`title`、`date`（摄取日）、`source`（URL 或 `pasted` / `user-provided`）、`ingested_at`（可选 ISO 时间）
   - 正文区：**来源正文或清洗后的全文/节选**（节选时在 frontmatter 标明 `excerpt: true`）
   - 小节 **Source metadata**：抓取时间、最终用户可见 URL、许可证/版权声明一句话（若已知）

4. **规则**

   - **不**在阶段 A 里写 wiki 摘要（除 raw 内必要的标题分级外）；阶段 A 只做**存档**。
   - 存档文件视为**不可变**：同一 URL 再次摄取时**新建新文件**（新日期或 `-2` slug），或按用户/schema 规定的去重策略执行。
   - 版权：避免无必要地整篇复制付费墙全文；用户已粘贴则按用户责任存档。

### 阶段 B — 写入 `wiki/`（总结、摘要、关联）

**目的**：基于 **刚写入的 raw 文件**（及必要时 `index.md` 中已有条目）做合成与增量维护。

1. **阅读** 对应 `raw/` 文件，提取论点、术语、可行动结论；区分事实 / 作者观点 / 待验证。
2. **新建或更新** wiki 页面，至少包括：
   - **来源摘要页**（推荐每来源一页）：`wiki/sources/YYYY-MM-DD-标题.md` 或 `wiki/inbox/...`，内含对 raw 的链接：`[[../raw/2026-04-15-xxx]]`（Obsidian 中路径按你库实际调整，可用 **Wikilink 笔记名** 而非路径：在 raw 笔记 `title` 与 wiki 摘要页互链）。
   - **概念/实体页**（按需）：新术语建 `wiki/concepts/...`，已存在则 **更新段落** 并加「见来源 [[...]]」。
   - **冲突处理**：若新内容与旧 wiki 矛盾，在相关页面增加 **「变更/冲突」** 小节，写明依据哪条 raw、旧说法如何修正，勿静默覆盖不留痕。
3. **双链**：从摘要页链向概念页；概念页互链；避免孤儿页（新页至少被索引或另一页链到）。
4. **更新 `wiki/index.md`**（若存在；若不存在则创建）：
   - 为本次新增/显著更新的页面各加一行：**链接 + 一句话说明 + 可选日期/来源数**。
   - 按 schema 中的分类组织（实体、概念、来源摘要等）；无 schema 时用简单分组即可。
5. **追加 `wiki/log.md`**（若存在则追加；不存在则创建）：
   - 新条目格式统一，便于 `grep`：  
     `## [YYYY-MM-DD] ingest | <短标题或 slug>`
   - 正文几行：来源类型（URL/粘贴）、raw 路径、`wiki/` 中更新/新建了哪些页面。

6. **可选（用户明确要求或定期任务）**：**Lint**——检查孤儿页、缺页的重要概念、陈旧结论、缺互链；输出到对话或写入 `wiki/log.md` 的一条 lint 记录。

---

## 查询与回写（用户问「根据库回答」时）

- 优先读 `wiki/index.md` 定位页面，再读相关 `wiki/` 页面；需要核对原文时再打开 `raw/`。
- 好的回答若具有长期价值，**可新建 `wiki/` 页面**或写入现有「研究/问答」页，并 **追加 log**，避免只留在聊天里。

---

## 格式约定（wiki 层）

- Frontmatter：`title`、`date`、`tags`；来源类页面可加 `sources: [[]]`。
- 标签少而准；层级如 `wiki/entity`、`wiki/concept` 可用文件夹代替过多 tag。

---

## 禁止与注意

- **禁止**直接改 `raw/` 来「修正 wiki 内容」——修正应在 `wiki/` 进行；raw 仅在用户要求订正存档时修改。
- 不假设必装 Dataview、Marp 等；提及插件时作为可选增强。
- 大图/多图：可在 raw 中保留 URL，并建议用户将附件放到 `raw/assets/`（见 reference.md）。

---

## 扩展阅读

- 完整模板与示例：`raw` 存档头、`wiki` 摘要页、`index`/`log` 片段：见 [reference.md](reference.md)。

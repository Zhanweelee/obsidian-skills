# obsidian-skills

面向 **Cursor / Claude Code / Codex** 等支持 [Agent Skills](https://agentskills.io)（`SKILL.md`）的客户端：用 LLM 维护 **Obsidian** 的 **raw 存档层** 与 **wiki 合成层**，并支持对现有库做**自动整理**。

## 包含的技能

| 目录 | 说明 |
|------|------|
| [`skills/obsidian-knowledge-capture`](skills/obsidian-knowledge-capture/) | 新来源 → 先写入 `raw/` 存档，再写入 `wiki/` 并维护 `index.md` / `log.md` |
| [`skills/obsidian-wiki-reorganize`](skills/obsidian-wiki-reorganize/) | 无新输入，扫描现有 `raw/`、`wiki/`，lint、重建索引、补链 |

每个技能为独立文件夹，内含 `SKILL.md`（及可选 `reference.md`），符合 Anthropic/Cursor 的命名与 frontmatter 规范。

## 本地开发：用软链指向本仓库（推荐）

克隆到固定路径后，把 Cursor 用户技能目录**软链**到本仓库里的 `skills/` 子目录，之后只改仓库即可生效。

```bash
git clone git@github.com:Zhanweelee/obsidian-skills.git ~/gitlab/obsidian-skills
cd ~/gitlab/obsidian-skills
node bin/obsidian-skills.mjs link
# 或：npm i && npx obsidian-skills link
```

默认在 `~/.cursor/skills/` 下创建：

- `obsidian-knowledge-capture` → `…/obsidian-skills/skills/obsidian-knowledge-capture`
- `obsidian-wiki-reorganize` → `…/obsidian-skills/skills/obsidian-wiki-reorganize`

若目标路径已存在**同名真实目录**（非本仓库链出的 symlink），请先自行备份或移走，再执行 `link`。

移除软链（仅删除指向本包的那两个 symlink）：

```bash
node bin/obsidian-skills.mjs unlink
```

## 从 npm 安装（发布到 npm 之后）

本仓库提供 CLI `obsidian-skills`，用于在用户机器上创建上述软链（不复制文件，保证与包内 `skills/` 一致）。

```bash
npx obsidian-skills@latest link
```

若全局安装：

```bash
npm i -g obsidian-skills
obsidian-skills link
```

> **说明**：生态里常见的是 `npx skills add owner/repo`（从 GitHub 拉取）或各平台的 `/learn`；本包名 **`obsidian-skills`**，避免与通用 `skill` CLI 混淆。发布后请用 **`npx obsidian-skills link`** 完成 Cursor 侧软链。

## 发布到 agentskill.sh / 可被发现

- 将本仓库推送到 **GitHub 或 GitLab（公开）**。
- 在 [agentskill.sh](https://agentskill.sh) 按站点流程**导入仓库**或发布技能集；多数工具会识别仓库根下或 `skills/` 下的多个 `SKILL.md`（与 [anthropics/skills](https://github.com/anthropics/skills) 布局一致）。
- Cursor 用户也可使用官方 **`/learn`** 或站点提供的安装方式（以 agentskill.sh 当前文档为准）。

更细的版本号、`package.json` 的 `repository` 字段与 npm 发布步骤见 [docs/PUBLISHING.md](docs/PUBLISHING.md)。

## Git 远程

公开仓库：<https://github.com/Zhanweelee/obsidian-skills>

若你尚未在本机推送过，请先在 GitHub **新建同名空仓库**（不要勾选添加 README），再在本地执行：

```bash
cd ~/gitlab/obsidian-skills
git remote add origin git@github.com:Zhanweelee/obsidian-skills.git   # 若已添加可跳过
git push -u origin main
```

若提示 `Repository not found`，请确认仓库已在 `Zhanweelee` 账号下创建，且本机 `ssh -T git@github.com` 登录的是有权限的账号。

## 许可

MIT，见 [LICENSE](LICENSE)。

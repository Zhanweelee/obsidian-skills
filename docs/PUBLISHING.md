# 发布与分发说明

## 仓库布局（与生态兼容）

```
obsidian-skills/
├── package.json          # npm 包 + bin
├── bin/obsidian-skills.mjs
├── skills/               # 与 anthropic/anthropics/skills 类似
│   ├── obsidian-knowledge-capture/
│   │   ├── SKILL.md
│   │   └── reference.md
│   └── obsidian-wiki-reorganize/
│       ├── SKILL.md
│       └── reference.md
├── README.md
└── LICENSE
```

导入到 **agentskill.sh**、**Agent Skill Hub** 类平台时，选择「多技能仓库」；若平台只认单技能，可分别为每个子目录建子模块仓库（一般不需要）。

## npm

1. 修改根目录 `package.json` 中的 `name`（建议 `@你的作用域/obsidian-skills`）、`repository`、`bugs`、`homepage`。
2. 登录 npm：`npm login`
3. 发布：`npm publish --access public`（作用域包需 `--access public`）

发布后用户可用：

```bash
npx obsidian-skills@latest link
```

将 `skills/*` 链到 `~/.cursor/skills/`。

## GitLab / GitHub

- 远程地址以你为准；`package.json` 的 `repository.url` 可与托管商一致。
- **GitLab 私有库**无法被公共索引抓取时，团队内部可用 **clone + `node bin/obsidian-skills.mjs link`** 分发。

## SKILL.md 规范

- `name` 必须与文件夹名一致（小写、连字符）。
- `description` 含能力与触发场景，便于模型检索。

## 版本

- 语义化版本写在 `package.json` 的 `version`。
- 技能正文变更应同步 **升 patch/minor**，便于依赖方锁定 `npx obsidian-skills@1.x`。

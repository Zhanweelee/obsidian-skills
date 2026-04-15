---
name: obsidian-cli
description: >-
  Official Obsidian desktop CLI (1.12+): vault targeting, parameters/flags,
  daily notes, search, files, tasks, plugins, sync, publish, and developer
  commands. Use when the user runs or scripts `obsidian`, automates Obsidian
  from the terminal, or mentions Obsidian 命令行、CLI、obsidian help.
---

# Obsidian CLI

## 何时启用

- 用户在终端使用或询问 **`obsidian`** 命令
- 需要从脚本/cron/AI 工具**程序化操作** Obsidian 库
- 涉及 **日记、搜索、读写笔记、任务、插件、同步、发布、开发者调试**

## 前置条件

1. **安装版 Obsidian 1.12+**（需满足官方对「安装器版本」的要求）。
2. **设置 → 通用 → 启用 Command line interface**，并按提示注册 CLI（加入 `PATH`）。
3. **桌面端 Obsidian 在运行**时 CLI 最可靠；未运行时首次调用可能会启动应用。
4. 无桌面端纯 CLI 同步需求见官方 **Obsidian Headless** 文档，与桌面 CLI 场景不同。

权威文档：<https://help.obsidian.md/cli>

## 两种用法

| 方式 | 说明 |
|------|------|
| **单条命令** | `obsidian <子命令> [参数=值] [开关]` |
| **TUI** | 只输入 `obsidian`，进入交互界面；之后可直接输入子命令（可不带 `obsidian` 前缀），支持补全与历史（如 `Ctrl+R`） |

入门：

```bash
obsidian help
obsidian version
```

## 参数与约定

- **参数**：`name=value`；值含空格时用引号：`content="Hello world"`。
- **开关（flag）**：无值，写上即生效，例如 `open`、`overwrite`、`todo`。
- **多行文本**：在 `content=` 等中使用 `\n` 换行、`\t` 制表符。
- **复制输出到剪贴板**：任意命令末尾加 `--copy`。
- **指定库 `vault=`**：须作为**第一个**参数：`obsidian vault=我的库 daily`  
  若当前 shell 的工作目录已是某个 vault 根目录，默认使用该库；否则通常用当前在 Obsidian 中**活动**的库。
- **定位文件**：
  - `file=`：按库内**双链解析**（笔记名即可，不必全路径）。
  - `path=`：从 vault 根起的**精确路径**，如 `Templates/Recipe.md`。
- 未指定 `file`/`path` 时，许多命令默认针对**当前活动笔记**。

## 常用场景与命令

**日记**

```bash
obsidian daily
obsidian daily:append content="- [ ] 待办事项"
obsidian daily:read
obsidian daily:path
```

**搜索**

```bash
obsidian search query="关键词"
obsidian search:context query="关键词" limit=10
obsidian search:open query="初始查询"
```

**文件**

```bash
obsidian read
obsidian read file=笔记名
obsidian create name="新笔记" content="# 标题\n\n正文" open
obsidian files folder=Inbox ext=md
obsidian append file=笔记名 content="追加一行"
```

**任务**

```bash
obsidian tasks todo
obsidian tasks daily
obsidian task ref="Note.md:12" toggle
```

**命令面板（含插件注册的命令）**

```bash
obsidian commands filter=my-plugin
obsidian command id=app:open-settings
```

**开发者（插件/主题开发）**

```bash
obsidian devtools
obsidian plugin:reload id=plugin-id
obsidian eval code="app.vault.getFiles().length"
obsidian dev:screenshot path=shot.png
```

## 指令索引

完整子命令列表、参数表与更多示例见同目录 **[reference.md](reference.md)**。

## 执行时注意

- 不确定语法时优先 **`obsidian help`** 与官方文档对照。
- 自动化脚本中明确 **`vault=`** 或 **`cd` 到 vault 根**，避免误操作活动库。
- 涉及删除、永久删除、发布、同步恢复等命令前，确认 `file`/`path`/`vault` 指向正确。

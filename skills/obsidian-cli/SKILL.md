---
name: obsidian-cli
description: >-
  Official Obsidian desktop CLI (1.12+): vault targeting, parameters and flags,
  daily notes, search, files, tasks, plugins, sync, publish, and developer
  commands. Use when the user runs or scripts `obsidian`, automates Obsidian
  from the terminal, or asks about Obsidian CLI, command line, or `obsidian help`.
---

# Obsidian CLI

## When to use

- The user runs or asks about the **`obsidian`** terminal command.
- They script or automate Obsidian (cron, agents, CI-style local tasks).
- Topics: **daily notes, search, read/write notes, tasks, plugins, sync, publish, developer tooling**.

## Prerequisites

1. **Obsidian installer build 1.12+** (meet official installer requirements).
2. **Settings → General → Enable Command line interface**, then register the CLI on `PATH`.
3. **Obsidian desktop running** — most reliable; first invocation may launch the app if it was closed.
4. Headless/server workflows differ; point users to **Obsidian Headless** docs when they need non-desktop automation.

Authoritative docs: <https://help.obsidian.md/cli>

## Two modes

| Mode | Description |
|------|-------------|
| **Single-shot** | `obsidian <subcommand> [param=value] [flags]` |
| **TUI** | Run `obsidian` alone for an interactive shell; subcommands can omit the `obsidian` prefix; completion and history (e.g. `Ctrl+R`) |

Getting started:

```bash
obsidian help
obsidian version
```

## Parameters and conventions

- **Parameters**: `name=value`; quote values with spaces: `content="Hello world"`.
- **Flags**: boolean switches (e.g. `open`, `overwrite`, `todo`) — present means true.
- **Multiline text**: use `\n` and `\t` inside values like `content=`.
- **Copy output to clipboard**: append `--copy` to any command.
- **`vault=`** must be the **first** argument when used: `obsidian vault=MyVault daily`  
  If the shell `cwd` is already a vault root, that vault is used; otherwise the **active** vault in the app is the default.
- **Targeting notes**:
  - `file=` — resolve by **wikilink name** inside the vault (not necessarily full path).
  - `path=` — path from vault root, e.g. `Templates/Recipe.md`.
- Many commands default to the **active note** when `file`/`path` are omitted.

## Common flows

**Daily notes**

```bash
obsidian daily
obsidian daily:append content="- [ ] Todo item"
obsidian daily:read
obsidian daily:path
```

**Search**

```bash
obsidian search query="keyword"
obsidian search:context query="keyword" limit=10
obsidian search:open query="initial query"
```

**Files**

```bash
obsidian read
obsidian read file=NoteTitle
obsidian create name="New note" content="# Title\n\nBody" open
obsidian files folder=Inbox ext=md
obsidian append file=NoteTitle content="Appended line"
```

**Tasks**

```bash
obsidian tasks todo
obsidian tasks daily
obsidian task ref="Note.md:12" toggle
```

**Command palette (including plugin-registered commands)**

```bash
obsidian commands filter=my-plugin
obsidian command id=app:open-settings
```

**Developer (plugin/theme work)**

```bash
obsidian devtools
obsidian plugin:reload id=plugin-id
obsidian eval code="app.vault.getFiles().length"
obsidian dev:screenshot path=shot.png
```

## Full command index

See **[reference.md](reference.md)** for grouped subcommands and parameters.

## Execution notes

- Prefer **`obsidian help`** and the official docs when syntax is unclear.
- In scripts, set **`vault=`** explicitly or **`cd`** to the vault root to avoid touching the wrong vault.
- Before destructive operations (delete, permanent delete, publish, sync restore), double-check `file` / `path` / `vault`.

---
name: obsidian-wiki-reorganize
description: >-
  Scans an existing Obsidian vault’s raw/ and wiki/ trees with no new user
  input: lints links and structure, reconciles index.md and log.md, flags stale
  or orphan pages, and applies safe reorganizations. Use when the user asks to
  tidy, lint, health-check, rebuild the index, or reorganize Obsidian raw/wiki
  with no new source to ingest.
---

# Obsidian wiki maintenance (existing raw / wiki only)

## When to use

- The user wants to **reorganize, lint, fix links, rebuild the index, or clear orphans** without providing a new article or URL.
- Triggers: “clean up my Obsidian wiki”, “lint vault”, “rebuild index”, “raw/wiki housekeeping”.

## Relationship to ingest skill

- **obsidian-knowledge-capture**: new source → write `raw/` then `wiki/`.
- **This skill**: **no new input** — only inventory and safe fixes on existing `raw/`, `wiki/`, `index.md`, `log.md`.

## Before you start

1. Confirm **vault root** (user rules or ask).
2. Read any **schema** (`AGENTS.md`, `WIKI-SCHEMA.md`, …): folder names, naming, folders that must not move.
3. Default focus: `raw/`, `wiki/`, `wiki/index.md`, `wiki/log.md` (paths per schema).

---

## Workflow (in order)

### 1. Inventory (read-only)

- List all `.md` under `raw/` recursively; record `title` (frontmatter or first heading), `date`, `source`.
- List all `.md` under `wiki/` recursively; **exclude** `index.md` and `log.md` from “note” counts where appropriate.
- Parse `[[...]]` and `[[...|alias]]` to estimate inbound links (sample + grep if the vault is huge).

### 2. Health check (lint)

Report in chat and optionally append a **lint** block to `wiki/log.md`:

| Check | Meaning |
|-------|---------|
| **Orphans** | Wiki pages with no inbound links (from index or other notes) |
| **Broken links** | `[[Missing page]]` or targets that do not exist |
| **Raw unlinked** | A `raw/` note never referenced from `wiki/` (missing summary) |
| **Stale** | Sensitive topics not touched in recent `log.md` activity (flag for review) |
| **Duplicates** | Very similar titles/aliases (suggest merge; do not auto-delete) |
| **Index drift** | `wiki/index.md` out of sync with files on disk |

Do **not**: delete files without confirmation; rewrite `raw/` body (except metadata fixes if the user explicitly allows).

### 3. Safe fixes (default: apply unless the user says “report only”)

1. **Rebuild or patch `wiki/index.md`**
   - Reflect current `wiki/` files: link + one-line summary (from first paragraph or frontmatter `description`; placeholder “TODO summary” if empty).
   - Preserve prose the user wrote outside auto-maintained sections; **merge**, do not blindly overwrite.

2. **Append `wiki/log.md`**
   - Heading like: `## [YYYY-MM-DD] reorganize | auto`
   - Body: scope, raw count, wiki count, broken-link fixes, orphan mitigation, whether index was updated.

3. **Light linking**
   - **Raw without wiki summary**: create a minimal summary stub under `wiki/sources/` **or** add a “Sources” section on a topic page with `[[raw title]]` — follow schema; default is `wiki/sources/`.
   - **Orphans**: link from a MOC/topic page, or list under “Uncategorized” in `index.md`.

4. **Broken links**
   - Fix when the target is unambiguous; list ambiguous cases in the report — do not guess.

### 4. Optional (only with user approval)

- Normalize missing frontmatter (`date`, `tags`) across wiki.
- Restructure `wiki/` subfolders — **must** show a move plan and get confirmation first.

---

## User-facing output

- Short stats: files touched, index/log updated, top lint counts.
- **Human follow-up**: ambiguous merges, duplicate deletion, paywall judgment calls.

---

## Do not

- Delete `raw/` content; replace user wiki prose with a summary wholesale.
- Skip `log.md` updates unless the user asked for a read-only report.

## References

- Shared conventions with **obsidian-knowledge-capture**: `raw/`, `wiki/`, `index.md`, `log.md`. Templates: `skills/obsidian-knowledge-capture/reference.md` (or `~/.cursor/skills/obsidian-knowledge-capture/reference.md` when installed).
- Skill-specific notes (orphans, index markers, log examples): [reference.md](reference.md).

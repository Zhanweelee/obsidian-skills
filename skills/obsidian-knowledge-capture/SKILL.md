---
name: obsidian-knowledge-capture
description: >-
  Two-layer Obsidian workflow: (1) extract and archive sources under raw/ as
  immutable markdown; (2) summarize, link, and integrate into wiki/ as a
  persistent LLM-maintained wiki with index.md and log.md updates. Use when the
  user ingests URLs or pasted content into Obsidian, wants LLM Wiki-style
  compounding notes, or mentions raw/wiki, ingest, index, or changelog.
---

# Obsidian: raw archive + wiki synthesis (LLM Wiki pattern)

## Core ideas (keep in mind while executing)

- **raw/**: Source layer — **append-only** (unless the user explicitly asks to correct an archived file). One file per source; anchor for facts and citations.
- **wiki/**: Synthesis layer — **created and maintained by the agent**: summaries, entity/concept pages, topic overviews, `[[wikilinks]]`, and explicit notes when new sources **contradict** older wiki claims.
- **Goal**: **Compounding** knowledge — every ingest updates the log and index and **weaves** new material into the existing wiki, not a one-off chat answer.

## When to use

- The user provides a link, pasted text, or “URL + excerpt”, and wants notes filed, summarized, or organized.
- They mention Obsidian, raw, wiki, ingest, index, log, LLM Wiki, or personal knowledge base.

## Before you start

1. Confirm the **vault root** (user rules or ask once).
2. If a **schema** exists at the vault root (`AGENTS.md`, `WIKI-SCHEMA.md`, `CLAUDE.md`, etc.), **read it first**; folder names and naming follow that schema.
3. Default layout when no schema is given:
   - Archive: `raw/`
   - Synthesis: `wiki/`
   - Optional attachments: `raw/assets/`

---

## Ingest workflow (two phases, fixed order)

### Phase A — write `raw/` (archive)

**Purpose**: Persist what the user gave you on disk for traceability and controlled excerpts (not only in chat).

1. **Collect body text**
   - **URL only**: fetch with `WebFetch` or similar; on failure, ask the user to paste or use a clipper-generated file.
   - **Pasted content**: use as the source body (normalize Markdown lightly without changing meaning).
   - **URL + body**: treat the pasted text as canonical; put the URL in metadata; if they disagree, note it under **Notes** in the raw file.

2. **Paths and names** (overridable by schema)

   - Suggested: `raw/YYYY-MM-DD-short-slug.md`
   - Or: `raw/articles/YYYY-MM-DD-short-title.md`

3. **Each raw file should include at least**

   - YAML: `title`, `date` (ingest day), `source` (URL or `pasted` / `user-provided`), optional `ingested_at` (ISO)
   - Body: **full or excerpted source text** (set `excerpt: true` in frontmatter if excerpted)
   - Section **Source metadata**: fetch time, canonical public URL, one-line license/copyright note if known

4. **Rules**

   - Do **not** write wiki summaries in phase A (except minimal headings in the raw file). Phase A is **archive only**.
   - Treat archived files as **immutable**: re-ingesting the same URL → **new file** (new date or `-2` slug), or follow dedup rules in the user schema.
   - Copyright: avoid pasting full paywalled articles unnecessarily; if the user pasted, archiving follows their responsibility.

### Phase B — write `wiki/` (summarize, link, integrate)

**Purpose**: Synthesize from the **raw file you just wrote** (and existing `index.md` entries when relevant).

1. **Read** the raw file; extract claims, terms, and actionable takeaways; separate **facts** / **author opinion** / **needs verification**.
2. **Create or update** wiki pages, including at least:
   - **Source summary page** (one per source is ideal): e.g. `wiki/sources/YYYY-MM-DD-title.md`, linking to raw via **wikilink title** (match `title` in raw frontmatter) rather than fragile absolute paths.
   - **Concept/entity pages** as needed: new terms → `wiki/concepts/...`; existing pages → **update** with “per source [[...]]”.
   - **Conflicts**: if new material contradicts the wiki, add a **Conflicts / updates** subsection citing which raw file supports the change — do not silently overwrite.
3. **Wikilinks**: summary → concepts; concepts cross-link; avoid orphans (new pages should appear in the index or another page).
4. **Update `wiki/index.md`** (create if missing): one line per new/updated page — link + one-line blurb + optional date/source count; group per schema or simple sections.
5. **Append `wiki/log.md`** (create if missing):
   - Consistent heading for grep, e.g. `## [YYYY-MM-DD] ingest | <short title or slug>`
   - Body: source type (URL/paste), raw path, wiki pages created/updated.

6. **Optional** (on request or periodic): **lint** — orphans, missing concept pages, stale claims, missing links; report in chat or append a lint entry to `wiki/log.md`.

---

## Query and write-back (when the user asks “based on my vault”)

- Prefer `wiki/index.md` to locate pages, then read `wiki/`; open `raw/` only to verify originals.
- Answers worth keeping → **new `wiki/` page** or append to a “Q&A / research” page, and **append the log** — do not leave value only in chat.

---

## Wiki conventions

- Frontmatter: `title`, `date`, `tags`; source pages may include `sources: [[]]`.
- Keep tags sparse; prefer folders like `wiki/concepts/` over dozens of tags.

---

## Do not

- Do **not** “fix” wiki content by editing `raw/` — fixes belong in `wiki/`; raw changes only when the user asks to amend the archive.
- Do not assume Dataview, Marp, etc.; mention plugins as optional.
- Heavy images: keep URLs in raw; suggest `raw/assets/` for local copies (see [reference.md](reference.md)).

---

## More templates

See [reference.md](reference.md) for raw header, wiki summary page, `index`/`log` snippets.

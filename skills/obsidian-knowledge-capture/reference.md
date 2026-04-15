# Obsidian LLM Wiki — reference templates

## `raw/` archive template

```markdown
---
title: "Article title or your title"
date: YYYY-MM-DD
source: "https://..."
# or: "pasted" / "user-provided"
ingested_at: "YYYY-MM-DDTHH:MM:SS"
excerpt: false
---

# Body (or excerpt)

(Full or cleaned text from fetch or user paste.)

## Source metadata

- How captured:
- Canonical public URL (if any):
- Notes (why excerpted, mismatch with URL, etc.):
```

## `wiki/` source summary template (links to raw)

Link to the raw note **by title** (match raw `title`), not by absolute path.

```markdown
---
title: "Summary · Short title"
date: YYYY-MM-DD
tags: [wiki/source]
sources:
  - "[[RAW note title]]"
---

# Summary · xxx

## One-liner

## Key points (3–8 bullets)

-

## Key terms

- **Term** → [[concept page]]

## Links to existing notes

- [[Related topic]]
- Relation to [[older claim]]: agrees / extends / conflicts (see below)

## Conflicts and updates (remove if empty)

- Previous claim:
- New evidence ([[RAW note title]]):
- Updated conclusion:

## Action items

- [ ]
```

## `wiki/index.md` incremental block

Append under the right section (split volumes if huge).

```markdown
## Sources

| Page | Summary |
|------|---------|
| [[Summary · Some article]] | One line |

## Concepts

| Page | Summary |
|------|---------|
| [[Some concept]] | One line |
```

## `wiki/log.md` — ingest entry

```markdown
## [YYYY-MM-DD] ingest | short-title-or-slug

- type: url | paste | url+paste
- raw: `raw/2026-04-15-example-slug.md`
- wiki: created [[Summary · Example]], updated [[Some concept]]
- notes:
```

## `wiki/log.md` — lint entry

```markdown
## [YYYY-MM-DD] lint | optional-scope

- orphans:
- stale:
- missing-links:
- suggested-actions:
```

## Atomic concept page (short)

```markdown
---
title: "Concept name"
date: YYYY-MM-DD
tags: [wiki/concept]
---

# Concept name

## Definition

## See also

- Source: [[RAW or summary page]]

## Related

- [[Other concept]]
```

## Optional: attachments

If the vault uses `raw/assets/` for clipper images, note in wiki “see raw note for figures.”

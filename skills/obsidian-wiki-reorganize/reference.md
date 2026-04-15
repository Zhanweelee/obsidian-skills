# Obsidian wiki maintenance — extra notes

## `log.md` — reorganize entry example

```markdown
## [YYYY-MM-DD] reorganize | auto

- raw files: N
- wiki notes: M (excluding index / log)
- index.md: rebuilt | patched
- broken links: fixed K / pending L
- orphans: mitigated P / remaining Q
- raw without wiki: created R summary stubs
- notes:
```

## Orphans (practical rule)

- **Zero inbound** `[[Page title]]` references (match Obsidian’s resolution rules for case/aliases).
- **Exceptions**: listed in `index.md`, or linked from a README-style hub — may count as non-orphan.
- **Mitigation**: infer topic and link from a MOC; or add to “Uncategorized” in `index.md`.

## Broken link scan

- Extract all `[[...]]` link targets; match against note `title` or basename (without `.md`).
- For `[[Page|alias]]`, only the link target title matters.

## Rebuilding `index.md`

- Read the full existing `index.md` first; keep free-form intro text.
- Prefer an auto-maintained block delimited by HTML comments, e.g. `<!-- auto-index-start -->` … `<!-- auto-index-end -->`, so the next run can replace only that block.

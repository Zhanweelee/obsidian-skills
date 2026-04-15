# obsidian-skills

Agent [Skills](https://agentskills.io) for Obsidian: **raw** archive + **wiki** synthesis (LLM Wiki pattern), **wiki maintenance** without new input, and the official desktop **CLI** reference.

## Skills

| Skill | Summary |
|--------|---------|
| [`obsidian-knowledge-capture`](skills/obsidian-knowledge-capture/) | Ingest sources → `raw/`, then synthesize `wiki/` with `index.md` and `log.md`. |
| [`obsidian-wiki-reorganize`](skills/obsidian-wiki-reorganize/) | Lint and reconcile existing `raw/` and `wiki/` (no new source). Runnable with `/obsidian-wiki-reorganize` alone — no extra prompt required. |
| [`obsidian-cli`](skills/obsidian-cli/) | Obsidian CLI usage (vault, daily notes, search, files, plugins, sync, dev). |

## Examples

Use **Agent** chat and type `/` to pick a skill, or paste a block as-is. Each block is one message.

**obsidian-knowledge-capture**

```text
/obsidian-knowledge-capture

Save this to my vault under raw/, then summarize and link it in wiki.
```

```text
/obsidian-knowledge-capture

Ingest https://example.com/article into raw/, add a source summary note, and link new terms to concept pages.
```

```text
/obsidian-knowledge-capture

Append today’s reading to wiki/log.md, refresh wiki/index.md, and flag conflicts with older notes.
```

**obsidian-wiki-reorganize** (full maintenance — no extra text needed)

```text
/obsidian-wiki-reorganize
```

```text
/obsidian-wiki-reorganize

Report only: lint broken [[links]], orphans, and raw files missing a wiki summary — do not write files.
```

```text
/obsidian-wiki-reorganize

Rebuild wiki/index.md from current wiki notes; keep my existing intro paragraphs.
```

**obsidian-cli**

```text
/obsidian-cli

Give me the obsidian command to append a checklist to today’s daily note.
```

```text
/obsidian-cli

Search the vault for “project alpha” from the CLI; show flags for context lines.
```

```text
/obsidian-cli

How do I reload a plugin and take a dev screenshot via obsidian?
```

## Install

```bash
npx skills add https://github.com/Zhanweelee/obsidian-skills --skill obsidian-knowledge-capture
npx skills add https://github.com/Zhanweelee/obsidian-skills --skill obsidian-wiki-reorganize
npx skills add https://github.com/Zhanweelee/obsidian-skills --skill obsidian-cli
```

Shorthand:

```bash
npx skills add Zhanweelee/obsidian-skills --skill obsidian-knowledge-capture
```

## License

MIT — see [LICENSE](LICENSE).

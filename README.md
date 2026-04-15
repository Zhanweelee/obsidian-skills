# obsidian-skills

Agent [Skills](https://agentskills.io) for Obsidian: **raw** archive + **wiki** synthesis (LLM Wiki pattern), **wiki maintenance** without new input, and the official desktop **CLI** reference.

## Skills

| Skill | Summary |
|--------|---------|
| [`obsidian-knowledge-capture`](skills/obsidian-knowledge-capture/) | Ingest sources → `raw/`, then synthesize `wiki/` with `index.md` and `log.md`. |
| [`obsidian-wiki-reorganize`](skills/obsidian-wiki-reorganize/) | Lint and reconcile existing `raw/` and `wiki/` (no new source). |
| [`obsidian-cli`](skills/obsidian-cli/) | Obsidian CLI usage (vault, daily notes, search, files, plugins, sync, dev). |

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

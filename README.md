# obsidian-skills

Agent [Skills](https://agentskills.io) for Obsidian: **raw** archive + **wiki** synthesis (LLM Wiki pattern), **wiki maintenance** without new input, and the official desktop **CLI** reference.

## Skills

| Skill | Summary |
|--------|---------|
| [`obsidian-knowledge-capture`](skills/obsidian-knowledge-capture/) | Ingest sources → `raw/`, then synthesize `wiki/` with `index.md` and `log.md`. |
| [`obsidian-wiki-reorganize`](skills/obsidian-wiki-reorganize/) | Lint and reconcile existing `raw/` and `wiki/` (no new source). |
| [`obsidian-cli`](skills/obsidian-cli/) | Obsidian CLI usage (vault, daily notes, search, files, plugins, sync, dev). |

## Examples

**obsidian-knowledge-capture** — you give a source; the agent archives it, then updates your wiki.

- Paste an article or paper excerpt and ask: *“Save this to my vault under raw, then summarize and link it in wiki.”*
- Share a URL: *“Ingest this post into raw/, add a source summary note, and link new terms to concept pages.”*
- Research workflow: *“Append today’s reading to `wiki/log.md`, refresh `wiki/index.md`, and flag conflicts with older notes.”*

**obsidian-wiki-reorganize** — no new material; the agent audits what you already have.

- *“Lint my vault’s wiki folder: broken `[[links]]`, orphan pages, and raw files with no wiki summary.”*
- *“Rebuild `wiki/index.md` from the current set of wiki notes without deleting my intro text.”*
- *“Append a reorganize entry to `wiki/log.md` with counts of fixes.”*

**obsidian-cli** — terminal automation against Obsidian.

- *“Give me the `obsidian` command to append a checklist to today’s daily note.”*
- *“Search the vault for X from the CLI and show the right flags.”*
- *“How do I reload a plugin or take a dev screenshot via `obsidian`?”*

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

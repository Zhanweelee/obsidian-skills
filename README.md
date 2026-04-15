# obsidian-skills

Agent [Skills](https://agentskills.io) (`SKILL.md`) for **Cursor**, **Claude Code**, **Codex**, and other compatible clients: maintain an Obsidian vault with a **raw** archive layer and a **wiki** synthesis layer (LLM Wiki pattern), plus optional **wiki maintenance** without new input.

## Skills in this repo

| Skill | Summary |
|--------|---------|
| [`obsidian-knowledge-capture`](skills/obsidian-knowledge-capture/) | Ingest sources → write immutable notes under `raw/`, then synthesize into `wiki/` with `index.md` and `log.md`. |
| [`obsidian-wiki-reorganize`](skills/obsidian-wiki-reorganize/) | No new input: scan existing `raw/` and `wiki/`, lint links, reconcile `index.md` / `log.md`, fix orphans safely. |
| [`obsidian-cli`](skills/obsidian-cli/) | Guide for the official Obsidian desktop CLI (vault targeting, daily notes, search, files, plugins, sync, dev commands). |

Each skill is a folder with `SKILL.md` (and optional `reference.md`). Names match the `name` field in frontmatter.

## Installation (Skills CLI)

Use the [Skills CLI](https://skills.sh/) (`npx skills`) to install one skill at a time from this repository:

```bash
npx skills add https://github.com/Zhanweelee/obsidian-skills --skill obsidian-knowledge-capture
npx skills add https://github.com/Zhanweelee/obsidian-skills --skill obsidian-wiki-reorganize
npx skills add https://github.com/Zhanweelee/obsidian-skills --skill obsidian-cli
```

Equivalent shorthand (GitHub `owner/repo`):

```bash
npx skills add Zhanweelee/obsidian-skills --skill obsidian-knowledge-capture
```

Install globally and skip prompts (typical for automation):

```bash
npx skills add https://github.com/Zhanweelee/obsidian-skills --skill obsidian-wiki-reorganize -g -y
```

Browse and search more skills at [skills.sh](https://skills.sh/).

**Other useful commands:** `npx skills find <query>`, `npx skills check`, `npx skills update`.

## Symlink install (local development)

To edit skills in a git clone and have Cursor pick them up via symlinks (no copy):

```bash
git clone https://github.com/Zhanweelee/obsidian-skills.git
cd obsidian-skills
node bin/obsidian-skills.mjs link
```

This creates symlinks under `~/.cursor/skills/` pointing at `skills/<name>` in the repo. If a real directory already exists with the same name, move it aside first.

Remove only symlinks created from this package:

```bash
node bin/obsidian-skills.mjs unlink
```

## npm package (`obsidian-skills` CLI)

After [publishing to npm](docs/PUBLISHING.md), users can link the packaged `skills/` tree:

```bash
npx obsidian-skills@latest link
```

## Registry hubs

- [skills.sh](https://skills.sh/) — directory and `npx skills` flows (same install pattern as [vercel-labs/skills/find-skills](https://skills.sh/vercel-labs/skills/find-skills)).
- [agentskill.sh](https://agentskill.sh/) — `/learn` and skillsets; import a public GitHub repo that contains `skills/*/SKILL.md` (same layout as [anthropics/skills](https://github.com/anthropics/skills)).

See [docs/PUBLISHING.md](docs/PUBLISHING.md) for npm versioning and repository metadata.

## Repository

**https://github.com/Zhanweelee/obsidian-skills**

## License

MIT — see [LICENSE](LICENSE).

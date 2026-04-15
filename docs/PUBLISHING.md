# Publishing and distribution

## Layout (ecosystem-compatible)

```
obsidian-skills/
├── package.json
├── bin/obsidian-skills.mjs
├── skills/
│   ├── obsidian-knowledge-capture/
│   ├── obsidian-wiki-reorganize/
│   └── obsidian-cli/
├── README.md
└── LICENSE
```

Registries such as [skills.sh](https://skills.sh/) and [agentskill.sh](https://agentskill.sh/) expect one or more `SKILL.md` files under the repo root or under `skills/`, similar to [anthropics/skills](https://github.com/anthropics/skills).

## npm

1. Set `name` (e.g. `@scope/obsidian-skills`), `repository`, `bugs`, and `homepage` in root `package.json`.
2. `npm login`
3. `npm publish --access public` (scoped packages need `--access public`)

After publish, users can run:

```bash
npx obsidian-skills@latest link
```

to symlink packaged `skills/*` into `~/.cursor/skills/`.

## Git hosting

- Keep `repository.url` in `package.json` aligned with GitHub/GitLab.
- Private GitLab repos are not indexed by public directories; distribute with **clone + `node bin/obsidian-skills.mjs link`**.

## SKILL.md rules

- `name` must match the folder name (lowercase, hyphens).
- `description` should state **what** the skill does and **when** to use it (for model routing).

## Versioning

- Bump `version` in `package.json` (semver) when skills or CLI behavior change so consumers can pin `npx obsidian-skills@1.x`.

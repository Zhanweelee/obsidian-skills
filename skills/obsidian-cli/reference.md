# Obsidian CLI — command reference

Grouped overview of official CLI capabilities. For exact flags and edge cases, run `obsidian help` and see <https://help.obsidian.md/cli>.

## General

| Command | Description |
|---------|-------------|
| `help` | List commands; pass a subcommand for detailed help |
| `version` | Obsidian app version |
| `reload` | Reload the app window |
| `restart` | Restart the application |

## Bases

| Command | Description |
|---------|-------------|
| `bases` | List `.base` files in the vault |
| `base:views` | Views for the current base |
| `base:create` | Create an entry in a base |
| `base:query` | Query a base (`format=json|csv|tsv|md|paths`) |

## Bookmarks

| Command | Description |
|---------|-------------|
| `bookmarks` | List bookmarks (optional `total`, `verbose`, `format=`) |
| `bookmark` | Add bookmark (`file` / `path` / `folder` / `search` / `url`, etc.) |

## Command palette

| Command | Description |
|---------|-------------|
| `commands` | List command IDs (`filter=`) |
| `command` | Run a command: `id=<command-id>` (required) |
| `hotkeys` | List hotkey bindings |
| `hotkey` | Hotkeys for a command: `id=` |

## Daily notes

| Command | Description |
|---------|-------------|
| `daily` | Open daily note (`paneType=tab|split|window`) |
| `daily:path` | Path to daily file (expected path even if not created) |
| `daily:read` | Read daily note body |
| `daily:append` | Append (`content=` required) |
| `daily:prepend` | Prepend (`content=` required) |

## File history

| Command | Description |
|---------|-------------|
| `diff` | Version list or diff (`from=` / `to=`, `filter=local|sync`) |
| `history` | Local file recovery history |
| `history:list` | Files with local history |
| `history:read` | Read a historical version |
| `history:restore` | Restore a historical version |
| `history:open` | Open file recovery UI |

## Files and folders

| Command | Description |
|---------|-------------|
| `file` | File metadata |
| `files` | List files (`folder=`, `ext=`, `total`) |
| `folder` | Folder metadata |
| `folders` | List folders |
| `open` | Open a file |
| `create` | Create/overwrite (`name` / `path` / `content` / `template`, `overwrite`, `open`) |
| `read` | Read content |
| `append` | Append |
| `prepend` | Insert after frontmatter |
| `move` | Move/rename path (`to=`) |
| `rename` | Rename (`name=`) |
| `delete` | Delete (`permanent` for permanent delete) |

## Links

| Command | Description |
|---------|-------------|
| `backlinks` | Backlinks |
| `links` | Outgoing links |
| `unresolved` | Unresolved links |
| `orphans` | Files with no backlinks |
| `deadends` | Files with no outgoing links |

## Outline

| Command | Description |
|---------|-------------|
| `outline` | Heading outline (`format=tree|md|json`) |

## Plugins

| Command | Description |
|---------|-------------|
| `plugins` | Installed plugins |
| `plugins:enabled` | Enabled plugins |
| `plugins:restrict` | Restricted mode on/off |
| `plugin` | One plugin: `id=` |
| `plugin:enable` / `plugin:disable` | Enable/disable |
| `plugin:install` / `plugin:uninstall` | Install/uninstall community plugins |
| `plugin:reload` | Reload plugin (development) |

## Properties

| Command | Description |
|---------|-------------|
| `aliases` | Aliases list |
| `properties` | Property usage stats |
| `property:set` | Set property (`name=` `value=` `type=`) |
| `property:remove` | Remove property |
| `property:read` | Read property value |

## Publish

| Command | Description |
|---------|-------------|
| `publish:site` | Publish site info |
| `publish:list` | Published files |
| `publish:status` | Publish changes (`new` / `changed` / `deleted`) |
| `publish:add` | Publish (`changed` publishes all pending changes) |
| `publish:remove` | Unpublish |
| `publish:open` | Open on published site |

## Random notes

| Command | Description |
|---------|-------------|
| `random` | Open random note |
| `random:read` | Read random note (includes path) |

## Search

| Command | Description |
|---------|-------------|
| `search` | Match paths/filenames |
| `search:context` | Content search with context (grep-like) |
| `search:open` | Open search view |

## Sync

| Command | Description |
|---------|-------------|
| `sync` | `on` / `off` pause or resume |
| `sync:status` | Sync status and usage |
| `sync:history` | Sync version history |
| `sync:read` | Read a Sync version |
| `sync:restore` | Restore a Sync version |
| `sync:open` | Open Sync history |
| `sync:deleted` | Deleted files list |

## Tags

| Command | Description |
|---------|-------------|
| `tags` | Tag list (`counts`, `sort=count`, `active`) |
| `tag` | One tag: `name=` |

## Tasks

| Command | Description |
|---------|-------------|
| `tasks` | Task list (`todo` / `done` / `daily` / `verbose`, etc.) |
| `task` | Single task (`ref=` or `file`+`line`, `toggle`, etc.) |

## Templates

| Command | Description |
|---------|-------------|
| `templates` | Template list |
| `template:read` | Read template (`resolve` expands variables) |
| `template:insert` | Insert into active file |

## Themes and snippets

| Command | Description |
|---------|-------------|
| `themes` / `theme` / `theme:set` / `theme:install` / `theme:uninstall` | Themes |
| `snippets` / `snippets:enabled` / `snippet:enable` / `snippet:disable` | CSS snippets |

## Unique notes

| Command | Description |
|---------|-------------|
| `unique` | Create unique note |

## Vault

| Command | Description |
|---------|-------------|
| `vault` | Current vault info |
| `vaults` | Known vaults |
| `vault:open` | Switch vault (**TUI only**) |

## Web viewer

| Command | Description |
|---------|-------------|
| `web` | Open URL in built-in web viewer |

## Wordcount

| Command | Description |
|---------|-------------|
| `wordcount` | Word count |

## Workspace

| Command | Description |
|---------|-------------|
| `workspace` | Workspace tree |
| `workspaces` | Saved workspace layouts |
| `workspace:save` / `workspace:load` / `workspace:delete` | Save/load/delete layout |
| `recents` | Recent files |

## Developer

| Command | Description |
|---------|-------------|
| `devtools` | Developer tools |
| `dev:debug` | Attach/detach CDP debugger |
| `dev:cdp` | Run CDP method |
| `dev:errors` | JS error buffer |
| `dev:screenshot` | Screenshot |
| `dev:console` | Console messages |
| `dev:css` | CSS by selector |
| `dev:dom` | DOM query |
| `dev:mobile` | Mobile device emulation |
| `eval` | Run JavaScript in app: `code=` |

## TUI shortcuts (selection)

Arrow keys, `Ctrl+A`/`Ctrl+E` line start/end, `Ctrl+R` history search; see official **Keyboard shortcuts** for the full list.

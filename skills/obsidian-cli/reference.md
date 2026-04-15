# Obsidian CLI 指令参考

以下为官方 CLI 能力分组与主要子命令名，参数细节以 `obsidian help` 与 <https://help.obsidian.md/cli> 为准。

## General

| 命令 | 作用 |
|------|------|
| `help` | 列出全部命令；可跟子命令名查看单项帮助 |
| `version` | Obsidian 版本 |
| `reload` | 重载应用窗口 |
| `restart` | 重启应用 |

## Bases

| 命令 | 作用 |
|------|------|
| `bases` | 列出 vault 中 `.base` 文件 |
| `base:views` | 当前 base 的视图列表 |
| `base:create` | 在 base 中新建条目 |
| `base:query` | 查询 base（`format=json\|csv\|tsv\|md\|paths`） |

## Bookmarks

| 命令 | 作用 |
|------|------|
| `bookmarks` | 列出书签（可选 `total`、`verbose`、`format=`） |
| `bookmark` | 添加书签（`file` / `path` / `folder` / `search` / `url` 等） |

## Command palette

| 命令 | 作用 |
|------|------|
| `commands` | 列出 command id（`filter=`） |
| `command` | 执行命令：`id=<command-id>`（必填） |
| `hotkeys` | 列出快捷键绑定 |
| `hotkey` | 查询某命令的快捷键：`id=` |

## Daily notes

| 命令 | 作用 |
|------|------|
| `daily` | 打开日记（`paneType=tab\|split\|window`） |
| `daily:path` | 日记路径（文件未创建也可返回预期路径） |
| `daily:read` | 读取日记正文 |
| `daily:append` | 追加（`content=` 必填） |
| `daily:prepend` | 前置插入（`content=` 必填） |

## File history

| 命令 | 作用 |
|------|------|
| `diff` | 版本列表或对比（`from=` / `to=`，`filter=local\|sync`） |
| `history` | 本地文件恢复历史版本列表 |
| `history:list` | 有本地历史的文件列表 |
| `history:read` | 读取某历史版本 |
| `history:restore` | 恢复到某历史版本 |
| `history:open` | 打开文件恢复界面 |

## Files and folders

| 命令 | 作用 |
|------|------|
| `file` | 文件信息 |
| `files` | 列出文件（`folder=`、`ext=`、`total`） |
| `folder` | 文件夹信息 |
| `folders` | 列出文件夹 |
| `open` | 打开文件 |
| `create` | 创建/覆盖（`name` / `path` / `content` / `template`、`overwrite`、`open`） |
| `read` | 读取内容 |
| `append` | 追加 |
| `prepend` | 在 frontmatter 后前置插入 |
| `move` | 移动/重命名路径（`to=`） |
| `rename` | 重命名（`name=`） |
| `delete` | 删除（`permanent` 永久删除） |

## Links

| 命令 | 作用 |
|------|------|
| `backlinks` | 反向链接 |
| `links` | 出链 |
| `unresolved` | 未解析链接 |
| `orphans` | 无入链文件 |
| `deadends` | 无出链文件 |

## Outline

| 命令 | 作用 |
|------|------|
| `outline` | 标题大纲（`format=tree\|md\|json`） |

## Plugins

| 命令 | 作用 |
|------|------|
| `plugins` | 已安装插件列表 |
| `plugins:enabled` | 已启用插件 |
| `plugins:restrict` | 受限模式 on/off |
| `plugin` | 单个插件信息 `id=` |
| `plugin:enable` / `plugin:disable` | 启用/禁用 |
| `plugin:install` / `plugin:uninstall` | 安装/卸载社区插件 |
| `plugin:reload` | 重载插件（开发用） |

## Properties

| 命令 | 作用 |
|------|------|
| `aliases` | 别名列表 |
| `properties` | 属性列表统计 |
| `property:set` | 设置属性（`name=` `value=` `type=`） |
| `property:remove` | 删除属性 |
| `property:read` | 读取属性值 |

## Publish

| 命令 | 作用 |
|------|------|
| `publish:site` | 发布站点信息 |
| `publish:list` | 已发布文件 |
| `publish:status` | 发布变更（`new` / `changed` / `deleted`） |
| `publish:add` | 发布（`changed` 发布全部变更） |
| `publish:remove` | 取消发布 |
| `publish:open` | 在站点打开 |

## Random notes

| 命令 | 作用 |
|------|------|
| `random` | 随机打开笔记 |
| `random:read` | 读取随机笔记（含路径） |

## Search

| 命令 | 作用 |
|------|------|
| `search` | 按路径/文件名匹配 |
| `search:context` | 内容搜索带上下文（类 grep） |
| `search:open` | 打开搜索视图 |

## Sync

| 命令 | 作用 |
|------|------|
| `sync` | `on` / `off` 暂停或恢复 |
| `sync:status` | 同步状态与用量 |
| `sync:history` | Sync 版本历史 |
| `sync:read` | 读取某 Sync 版本 |
| `sync:restore` | 恢复某 Sync 版本 |
| `sync:open` | 打开 Sync 历史 |
| `sync:deleted` | 已删除文件列表 |

## Tags

| 命令 | 作用 |
|------|------|
| `tags` | 标签列表（`counts`、`sort=count`、`active`） |
| `tag` | 单个标签信息 `name=` |

## Tasks

| 命令 | 作用 |
|------|------|
| `tasks` | 任务列表（`todo` / `done` / `daily` / `verbose` 等） |
| `task` | 单条任务查看/更新（`ref=` 或 `file`+`line`，`toggle` 等） |

## Templates

| 命令 | 作用 |
|------|------|
| `templates` | 模板列表 |
| `template:read` | 读取模板（`resolve` 解析变量） |
| `template:insert` | 插入到活动文件 |

## Themes and snippets

| 命令 | 作用 |
|------|------|
| `themes` / `theme` / `theme:set` / `theme:install` / `theme:uninstall` | 主题 |
| `snippets` / `snippets:enabled` / `snippet:enable` / `snippet:disable` | CSS 片段 |

## Unique notes

| 命令 | 作用 |
|------|------|
| `unique` | 唯一笔记创建 |

## Vault

| 命令 | 作用 |
|------|------|
| `vault` | 当前库信息 |
| `vaults` | 已知库列表 |
| `vault:open` | 切换库（**仅 TUI**） |

## Web viewer

| 命令 | 作用 |
|------|------|
| `web` | 在内置网页视图打开 URL |

## Wordcount

| 命令 | 作用 |
|------|------|
| `wordcount` | 字数统计 |

## Workspace

| 命令 | 作用 |
|------|------|
| `workspace` | 工作区树 |
| `workspaces` | 已保存工作区布局 |
| `workspace:save` / `workspace:load` / `workspace:delete` | 保存/加载/删除布局 |
| `recents` | 最近文件 |

## Developer

| 命令 | 作用 |
|------|------|
| `devtools` | 开发者工具 |
| `dev:debug` | CDP 调试器 attach/detach |
| `dev:cdp` | 执行 CDP 方法 |
| `dev:errors` | JS 错误缓冲 |
| `dev:screenshot` | 截图 |
| `dev:console` | 控制台消息 |
| `dev:css` | 按选择器查 CSS |
| `dev:dom` | DOM 查询 |
| `dev:mobile` | 移动设备模拟 |
| `eval` | 在应用内执行 JavaScript：`code=` |

## TUI 快捷键（节选）

方向键、`Ctrl+A`/`Ctrl+E` 行首行尾、`Ctrl+R` 搜索历史等；完整列表见官方文档 **Keyboard shortcuts** 一节。

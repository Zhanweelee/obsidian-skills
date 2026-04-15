#!/usr/bin/env node
/**
 * Link or unlink skill folders into ~/.cursor/skills (symlinks to this repo).
 * Usage:
 *   node bin/obsidian-skills.mjs link [--target DIR] [--dry-run]
 *   node bin/obsidian-skills.mjs unlink [--target DIR]
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(REPO_ROOT, "skills");

function parseArgs(argv) {
  const cmd = argv[2] === "link" || argv[2] === "unlink" ? argv[2] : "help";
  let target = path.join(os.homedir(), ".cursor", "skills");
  let dryRun = false;
  for (let i = 3; i < argv.length; i++) {
    if (argv[i] === "--target" && argv[i + 1]) {
      target = path.resolve(argv[++i]);
    } else if (argv[i] === "--dry-run") {
      dryRun = true;
    }
  }
  return { cmd, target, dryRun };
}

function listSkillDirs() {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => fs.existsSync(path.join(SKILLS_DIR, name, "SKILL.md")));
}

function isOurSymlink(linkPath) {
  try {
    const st = fs.lstatSync(linkPath);
    if (!st.isSymbolicLink()) return false;
    const real = fs.realpathSync(linkPath);
    return real.startsWith(REPO_ROOT);
  } catch {
    return false;
  }
}

function linkCommand(target, dryRun) {
  fs.mkdirSync(target, { recursive: true });
  const names = listSkillDirs();
  if (names.length === 0) {
    console.error("No skills found under:", SKILLS_DIR);
    process.exit(1);
  }
  for (const name of names) {
    const src = path.join(SKILLS_DIR, name);
    const dest = path.join(target, name);
    if (fs.existsSync(dest)) {
      if (isOurSymlink(dest)) {
        if (!dryRun) {
          fs.unlinkSync(dest);
        }
      } else {
        console.error(
          `Refusing to replace (not our symlink): ${dest}\nRemove or move it, then re-run.`
        );
        process.exit(1);
      }
    }
    if (dryRun) {
      console.log(`[dry-run] ln -s ${src} ${dest}`);
      continue;
    }
    fs.symlinkSync(src, dest);
    console.log("Linked:", dest, "->", src);
  }
}

function unlinkCommand(target) {
  const names = listSkillDirs();
  for (const name of names) {
    const dest = path.join(target, name);
    if (isOurSymlink(dest)) {
      fs.unlinkSync(dest);
      console.log("Removed:", dest);
    }
  }
}

function help() {
  console.log(`obsidian-skills — symlink skills into Cursor user skills dir

Commands:
  link    Create symlinks in ~/.cursor/skills (default target)
  unlink  Remove symlinks that point into this package's skills/

Options:
  --target DIR   Cursor skills directory (default: ~/.cursor/skills)
  --dry-run      Print planned ln commands only

Examples:
  npx obsidian-skills@latest link
  npx obsidian-skills link --target ~/.cursor/skills
`);
}

const { cmd, target, dryRun } = parseArgs(process.argv);

if (cmd === "help" || process.argv.includes("-h") || process.argv.includes("--help")) {
  help();
  process.exit(cmd === "help" ? 0 : 1);
}

if (cmd === "link") {
  linkCommand(target, dryRun);
} else if (cmd === "unlink") {
  unlinkCommand(target);
} else {
  help();
  process.exit(1);
}

#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const rootDir = process.cwd();
const stateDir = join(rootDir, ".buildecho");

type Config = {
  projectName: string;
  description: string;
  audience: string;
  tone: string;
  channels: string[];
};

const defaultConfig: Config = {
  projectName: guessProjectName(),
  description: "Describe what you are building.",
  audience: "Developers",
  tone: "clear, honest, technical",
  channels: ["x", "linkedin", "reddit", "discord"],
};

const command = process.argv[2] ?? "help";

switch (command) {
  case "init":
    await init();
    break;
  case "daily":
    await daily();
    break;
  case "draft":
    await daily();
    break;
  case "help":
  case "--help":
  case "-h":
    printHelp();
    break;
  default:
    console.error(`Unknown command: ${command}\n`);
    printHelp();
    process.exitCode = 1;
}

async function init() {
  await ensureStateDirs();
  await writeIfMissing(join(stateDir, "config.json"), `${JSON.stringify(defaultConfig, null, 2)}\n`);
  await writeIfMissing(
    join(stateDir, "memory.md"),
    [
      "# BuildEcho Memory",
      "",
      "Use this file to teach BuildEcho the project narrative over time.",
      "",
      "## Project",
      "",
      "- What are you building?",
      "- Who is it for?",
      "- Why does it matter?",
      "",
      "## Public Building Notes",
      "",
      "- What should be shared often?",
      "- What should not be shared yet?",
      "- What tone should the project use?",
      "",
    ].join("\n"),
  );
  await writeIfMissing(join(stateDir, "prompts", "system.md"), await readRepoPrompt());

  console.log("BuildEcho initialized.");
  console.log(`Created ${relative(stateDir)} with config, memory, and prompt files.`);
  console.log("Next: edit .buildecho/config.json, then run `npx buildecho daily`.");
}

async function daily() {
  await ensureStateDirs();
  const config = await readConfig();
  const date = localDate();
  const activity = readGitActivity();
  const content = renderDailyLog(config, date, activity);
  const outputPath = join(stateDir, "build-logs", `${date}.md`);

  await writeFile(outputPath, content);

  console.log(`Wrote ${relative(outputPath)}`);
  console.log("This is a local draft. Review it before publishing anywhere.");
}

async function ensureStateDirs() {
  await mkdir(stateDir, { recursive: true });
  await mkdir(join(stateDir, "build-logs"), { recursive: true });
  await mkdir(join(stateDir, "drafts"), { recursive: true });
  await mkdir(join(stateDir, "feedback"), { recursive: true });
  await mkdir(join(stateDir, "metrics"), { recursive: true });
  await mkdir(join(stateDir, "prompts"), { recursive: true });
}

async function readConfig(): Promise<Config> {
  const configPath = join(stateDir, "config.json");
  if (!existsSync(configPath)) {
    await init();
  }
  const raw = await readFile(configPath, "utf8");
  return { ...defaultConfig, ...JSON.parse(raw) } as Config;
}

function readGitActivity() {
  if (!existsSync(join(rootDir, ".git"))) {
    return {
      commits: ["No git repository found yet."],
      diffStat: "No diff stat available.",
    };
  }

  const commits = safeGit(["log", "--since=24 hours ago", "--pretty=format:- %s (%h)"]);
  const diffStat = safeGit(["diff", "--stat", "HEAD~1..HEAD"]);

  return {
    commits: commits.trim() ? commits.split("\n") : ["No commits in the last 24 hours."],
    diffStat: diffStat.trim() || "No diff stat available.",
  };
}

function safeGit(args: string[]) {
  try {
    return execFileSync("git", args, { cwd: rootDir, encoding: "utf8" });
  } catch {
    return "";
  }
}

function renderDailyLog(config: Config, date: string, activity: ReturnType<typeof readGitActivity>) {
  return [
    `# BuildEcho Daily - ${date}`,
    "",
    `Project: ${config.projectName}`,
    `Audience: ${config.audience}`,
    `Tone: ${config.tone}`,
    `Channels: ${config.channels.join(", ")}`,
    "",
    "## Real Progress",
    "",
    ...activity.commits,
    "",
    "## Evidence",
    "",
    "```text",
    activity.diffStat,
    "```",
    "",
    "## Public Angles",
    "",
    "- What changed that matters to users?",
    "- What proof can we show?",
    "- What should wait?",
    "",
    "## X Draft",
    "",
    "Draft a short, honest update based on the real progress above.",
    "",
    "## LinkedIn Draft",
    "",
    "Draft a more reflective update with context, tradeoffs, and learning.",
    "",
    "## Reddit / Hacker News Draft",
    "",
    "Draft a useful discussion post. Avoid marketing language.",
    "",
    "## Discord / Community Update",
    "",
    "Draft a concise project update for existing followers.",
    "",
    "## Next Build Step",
    "",
    "- What should we build, document, benchmark, or ask next?",
    "",
    "## Quality Check",
    "",
    "- [ ] No invented progress",
    "- [ ] Claims have evidence",
    "- [ ] No sensitive information",
    "- [ ] Human approved before publishing",
    "",
  ].join("\n");
}

async function writeIfMissing(path: string, content: string) {
  if (!existsSync(path)) {
    await writeFile(path, content);
  }
}

async function readRepoPrompt() {
  const promptPath = join(rootDir, "docs", "PROMPT.md");
  if (existsSync(promptPath)) {
    return readFile(promptPath, "utf8");
  }
  return "# BuildEcho Prompt\n";
}

function guessProjectName() {
  return rootDir.split("/").filter(Boolean).at(-1) ?? "my-project";
}

function localDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function relative(path: string) {
  return path.replace(`${rootDir}/`, "");
}

function printHelp() {
  console.log(`BuildEcho - agentic public building for developers

Usage:
  buildecho init    Create .buildecho project context
  buildecho daily   Generate a local daily build log draft
  buildecho draft   Alias for daily
  buildecho help    Show this help

Principle:
  Agent-driven. Human-approved.
`);
}

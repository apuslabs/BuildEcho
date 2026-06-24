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

type GitCommit = {
  hash: string;
  subject: string;
  author: string;
  date: string;
  files: string[];
};

type GitActivity = {
  commits: GitCommit[];
  commitWindow: string;
  diffStat: string;
  changedFiles: string[];
  changedAreas: string[];
  fallbackUsed: boolean;
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
      commits: [],
      commitWindow: "No git repository found.",
      diffStat: "No diff stat available.",
      changedFiles: [],
      changedAreas: [],
      fallbackUsed: false,
    } satisfies GitActivity;
  }

  let fallbackUsed = false;
  let rawCommits = safeGit([
    "log",
    "--since=24 hours ago",
    "--pretty=format:%h%x09%s%x09%an%x09%ad",
    "--date=short",
  ]);

  if (!rawCommits.trim()) {
    fallbackUsed = true;
    rawCommits = safeGit([
      "log",
      "-5",
      "--pretty=format:%h%x09%s%x09%an%x09%ad",
      "--date=short",
    ]);
  }

  const commits = rawCommits
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map(parseCommitLine)
    .filter((commit): commit is GitCommit => commit !== null)
    .map((commit) => ({
      ...commit,
      files: readCommitFiles(commit.hash),
    }));

  const changedFiles = unique(commits.flatMap((commit) => commit.files));
  const changedAreas = summarizeChangedAreas(changedFiles);
  const diffStat = readDiffStat(commits);

  return {
    commits,
    commitWindow: fallbackUsed ? "Last 5 commits" : "Last 24 hours",
    diffStat: diffStat.trim() || "No diff stat available.",
    changedFiles,
    changedAreas,
    fallbackUsed,
  } satisfies GitActivity;
}

function safeGit(args: string[]) {
  try {
    return execFileSync("git", args, { cwd: rootDir, encoding: "utf8" });
  } catch {
    return "";
  }
}

function parseCommitLine(line: string): GitCommit | null {
  const [hash, subject, author, date] = line.split("\t");
  if (!hash || !subject) {
    return null;
  }
  return {
    hash,
    subject,
    author: author || "unknown",
    date: date || "unknown",
    files: [],
  };
}

function readCommitFiles(hash: string) {
  const output = safeGit(["diff-tree", "--no-commit-id", "--name-only", "-r", hash]);
  return output
    .split("\n")
    .map((file) => file.trim())
    .filter(Boolean);
}

function readDiffStat(commits: GitCommit[]) {
  if (commits.length === 0) {
    return "";
  }

  const oldest = commits.at(-1);
  if (!oldest) {
    return "";
  }

  const rangeStat = safeGit(["diff", "--stat", `${oldest.hash}^..HEAD`]);
  if (rangeStat.trim()) {
    return rangeStat;
  }

  return safeGit(["show", "--stat", "--oneline", "--no-renames", "HEAD"]);
}

function summarizeChangedAreas(files: string[]) {
  return unique(
    files.map((file) => {
      const [first, second] = file.split("/");
      if (!second) {
        return first;
      }
      if (first.startsWith(".")) {
        return `${first}/${second}`;
      }
      return first;
    }),
  );
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function renderDailyLog(config: Config, date: string, activity: GitActivity) {
  const publicAngle = buildPublicAngle(config, activity);
  const proof = buildProofList(activity);
  const xDraft = buildXDraft(config, activity, publicAngle);
  const linkedInDraft = buildLinkedInDraft(config, activity, publicAngle);
  const discussionDraft = buildDiscussionDraft(config, activity, publicAngle);
  const discordDraft = buildDiscordDraft(config, activity, publicAngle);
  const nextStep = buildNextStep(activity);

  return [
    `# BuildEcho Daily - ${date}`,
    "",
    `Project: ${config.projectName}`,
    `Audience: ${config.audience}`,
    `Tone: ${config.tone}`,
    `Channels: ${config.channels.join(", ")}`,
    `Commit window: ${activity.commitWindow}`,
    "",
    "## Real Progress",
    "",
    ...renderCommitList(activity),
    "",
    "## What Changed",
    "",
    ...renderChangedAreas(activity),
    "",
    "## Evidence",
    "",
    ...proof,
    "",
    "## Diff Stat",
    "",
    "```text",
    activity.diffStat,
    "```",
    "",
    "## Public Angle",
    "",
    publicAngle,
    "",
    "## X Draft",
    "",
    xDraft,
    "",
    "## LinkedIn Draft",
    "",
    linkedInDraft,
    "",
    "## Reddit / Hacker News Draft",
    "",
    discussionDraft,
    "",
    "## Discord / Community Update",
    "",
    discordDraft,
    "",
    "## Next Build Step",
    "",
    `- ${nextStep}`,
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

function renderCommitList(activity: GitActivity) {
  if (activity.commits.length === 0) {
    return ["- No commits found yet."];
  }

  return activity.commits.map((commit) => `- ${commit.subject} (${commit.hash})`);
}

function renderChangedAreas(activity: GitActivity) {
  if (activity.changedAreas.length === 0) {
    return ["- No changed files detected."];
  }

  return activity.changedAreas.map((area) => `- ${area}`);
}

function buildProofList(activity: GitActivity) {
  const proof = [
    ...activity.commits.map((commit) => `- Commit ${commit.hash}: ${commit.subject}`),
    ...activity.changedFiles.slice(0, 12).map((file) => `- Changed file: ${file}`),
  ];

  return proof.length > 0 ? proof : ["- No proof available yet."];
}

function buildPublicAngle(config: Config, activity: GitActivity) {
  if (activity.commits.length === 0) {
    return `The project is ready for its next public-building loop, but there is no new git activity yet.`;
  }

  const mainCommit = activity.commits[0];
  const areas = activity.changedAreas.slice(0, 3).join(", ");
  const areaText = areas ? ` across ${areas}` : "";

  return `${config.projectName} made concrete progress${areaText}. The useful story is not just what changed, but how this commit history becomes public proof for the next build loop.`;
}

function buildXDraft(config: Config, activity: GitActivity, publicAngle: string) {
  const bullets = activity.commits
    .slice(0, 4)
    .map((commit) => `- ${commit.subject}`)
    .join("\n");

  return [
    `${config.projectName} build update:`,
    "",
    publicAngle,
    "",
    bullets || "- No new commits yet",
    "",
    "Loop: commit -> proof -> public update -> feedback -> next build step.",
  ].join("\n");
}

function buildLinkedInDraft(config: Config, activity: GitActivity, publicAngle: string) {
  return [
    `Today in ${config.projectName}:`,
    "",
    publicAngle,
    "",
    "The important part is the operating loop: every meaningful commit should become evidence, every public update should invite feedback, and every feedback signal should inform the next build step.",
    "",
    "Recent progress:",
    ...renderCommitList(activity),
  ].join("\n");
}

function buildDiscussionDraft(config: Config, activity: GitActivity, publicAngle: string) {
  return [
    `We are building ${config.projectName} in public and using the repo itself as the first test case.`,
    "",
    publicAngle,
    "",
    "Question for builders: what part of your project progress is hardest to turn into a useful public update?",
    "",
    "Recent commits:",
    ...renderCommitList(activity),
  ].join("\n");
}

function buildDiscordDraft(config: Config, activity: GitActivity, publicAngle: string) {
  return [
    `Build update for ${config.projectName}: ${publicAngle}`,
    "",
    "Recent commits:",
    ...renderCommitList(activity).slice(0, 5),
  ].join("\n");
}

function buildNextStep(activity: GitActivity) {
  if (activity.commits.length === 0) {
    return "Make the first small commit, then run BuildEcho again to generate a real public-building log.";
  }

  if (activity.changedAreas.includes("src")) {
    return "Add a quality check that flags unsupported claims in generated drafts.";
  }

  if (activity.changedAreas.includes("docs") || activity.changedFiles.includes("README.md")) {
    return "Turn the improved docs into an example daily build log and social draft.";
  }

  return "Use this build log as public proof, then collect feedback for the next iteration.";
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

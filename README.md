<div align="center">
  <img src="./assets/social/buildecho-day0.png" alt="BuildEcho public-building loop" width="900"/>

  # BuildEcho

  **Agentic public building for developers.**

  Turn real development progress into **public proof**, **build logs**,
  **social drafts**, **community feedback**, and **next build steps**.

  [![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![Status](https://img.shields.io/badge/status-day%200-orange.svg)](docs/PUBLIC_BUILD_DAY_0.md)
  [![Agent-driven](https://img.shields.io/badge/agent--driven-human--approved-blue.svg)](docs/AGENT_HARNESS.md)

  [Quick Start](#-quick-start) • [How It Works](#-how-it-works) • [Agent Team](#-agent-team) • [Contributing](#-contributing)
</div>

---

## Why BuildEcho?

Most developers build every day, but their progress stays invisible.

- Commits never become public proof.
- Bug fixes never become learning.
- Demos never become distribution.
- User feedback never becomes the next build loop.
- Developers know they should build in public, but the workflow is manual.

**BuildEcho solves this with an agentic loop:**

- Read real project activity.
- Extract what is worth sharing.
- Attach proof before claims.
- Draft updates for different channels.
- Keep humans in the publishing loop.
- Learn from community feedback.

BuildEcho is not a posting bot. It is a public-building loop:

```text
Build -> Tell -> Listen -> Decide -> Build
```

---

## How It Works

```text
┌────────────────────┐
│  Your repository   │
│ commits / PRs /    │
│ issues / releases  │
└─────────┬──────────┘
          │
          v
┌──────────────────────────────────────────┐
│              BuildEcho Agent             │
│  • understand real progress              │
│  • find shareable signals                │
│  • attach proof                          │
│  • draft channel-specific updates        │
│  • check truthfulness and safety         │
└─────────┬────────────────────────────────┘
          │
          v
┌──────────────────────────────────────────┐
│            Human review                  │
│  approve / edit / skip                   │
└─────────┬────────────────────────────────┘
          │
          v
┌──────────────────────────────────────────┐
│  Public build log + social drafts        │
│  X / LinkedIn / Reddit / HN / Discord    │
└─────────┬────────────────────────────────┘
          │
          v
┌──────────────────────────────────────────┐
│  Feedback becomes the next build step    │
└──────────────────────────────────────────┘
```

---

## Quick Start

BuildEcho is currently a local, repo-native CLI.

```bash
git clone https://github.com/apuslabs/BuildEcho.git
cd BuildEcho
npm install
npm run build
npm run dev -- init
npm run dev -- daily
```

When published as a package, the intended usage is:

```bash
npx buildecho init
npx buildecho daily
npx buildecho draft
```

BuildEcho keeps project memory in your repository:

```text
.buildecho/
  config.json       project settings
  context.md        current project context for humans and agents
  memory.md         long-running public-building memory
  build-logs/       local build logs
  drafts/           social drafts
  feedback/         community feedback summaries
  metrics/          response and growth signals
  prompts/          project-specific prompts
```

---

## What BuildEcho Generates

A daily run should produce:

| Output | Purpose |
| --- | --- |
| Build log | A truthful record of what changed |
| Public angles | The 1-3 most useful things to share |
| Proof list | Commits, PRs, docs, demos, metrics, or feedback |
| X draft | Short public progress update |
| X thread | Deeper build-in-public narrative |
| LinkedIn draft | More reflective professional update |
| Reddit / HN draft | Discussion-first community post |
| Discord update | Concise update for existing followers |
| Next build step | What to build, document, benchmark, or ask next |
| Quality check | Flags hype, unsupported claims, or risky content |

Example:

```markdown
# Build Log - 2026-06-24

## Real Progress
- Added the first CLI commands: init, daily, draft.
- Documented the Build -> Tell -> Listen -> Decide -> Build loop.
- Added agent harness governance for future contributors.

## Public Angle
We are starting BuildEcho in public, using the same loop we want the product to
provide for other developers.

## Proof
- README.md
- docs/AGENT_LOOP.md
- docs/AGENT_HARNESS.md
- src/cli.ts

## X Draft
Starting BuildEcho today: an agentic public-building loop for developers.

The goal is simple:
turn real development progress into public proof, social drafts, community
feedback, and the next build step.

Agent-driven. Human-approved.
```

---

## Product Principles

BuildEcho should:

- Tell the truth.
- Prefer proof over claims.
- Avoid spam.
- Respect each community.
- Keep humans in the approval loop.
- Learn from feedback.

BuildEcho should not:

- Invent progress.
- Inflate ordinary work into fake breakthroughs.
- Publish without human approval.
- Automate spam, mass replies, or unsolicited mentions.
- Position itself as a generic social media bot.

---

## Agent Team

BuildEcho presents one product surface, but works like an agent team internally.

| Agent | Role |
| --- | --- |
| Orchestrator Agent | Decides which loop to run and merges outputs |
| Builder Agent | Reads commits, PRs, issues, releases, and docs |
| Signal Agent | Finds the progress worth sharing |
| Proof Agent | Attaches evidence before claims |
| Narrator Agent | Writes channel-specific drafts |
| Community Agent | Summarizes external feedback |
| Strategy Agent | Recommends the next build step |
| Quality Agent | Checks truthfulness, tone, risk, and community fit |

See [docs/AGENT_LOOP.md](docs/AGENT_LOOP.md).

---

## Agent Harness

BuildEcho is designed so humans and coding agents can both continue the project.

If you are a coding agent, read these first:

1. [docs/AGENT_HARNESS.md](docs/AGENT_HARNESS.md)
2. [.buildecho/context.md](.buildecho/context.md)
3. [docs/AGENT_LOOP.md](docs/AGENT_LOOP.md)
4. [docs/PROMPT.md](docs/PROMPT.md)
5. [docs/ROADMAP.md](docs/ROADMAP.md)

The harness defines:

- Required context files
- Target function
- Allowed early contributions
- Verification protocol
- Human approval boundary
- Handoff protocol

---

## Roadmap

### Phase 0: Make the idea legible

- README
- Agent loop documentation
- First system prompt
- Contribution guide
- Agent harness governance
- Minimal CLI

### Phase 1: Local CLI

- Read local git history
- Generate useful build logs
- Generate social draft structures
- Add quality checks for unsupported claims

### Phase 2: GitHub Native

- Read commits, PRs, issues, and releases through GitHub API
- Generate daily build logs through GitHub Actions
- Open draft PRs or issues with suggested public updates

### Phase 3: Review and Publish

- Human approval queue
- Optional X, LinkedIn, Discord, Reddit integrations
- Draft scheduling
- Channel-specific style guides

### Phase 4: Feedback Loop

- Collect comments, stars, clicks, signups, and issues
- Summarize feedback into product insights
- Recommend next build actions

See [docs/ROADMAP.md](docs/ROADMAP.md).

---

## Repository Status

BuildEcho is intentionally early. Day 0 is about making the idea legible:

- Clear story
- Clear loop
- Clear agent harness
- Minimal CLI
- Public roadmap

See [docs/PUBLIC_BUILD_DAY_0.md](docs/PUBLIC_BUILD_DAY_0.md).

---

## Contributing

Contributions are welcome in code, prompts, docs, examples, and workflows.

Start with [CONTRIBUTING.md](CONTRIBUTING.md).

Good first contributions:

- Improve `buildecho daily` output.
- Add local git activity collectors.
- Add prompt templates for agent roles.
- Add examples from real developer projects.
- Add quality checks for unsupported claims.

---

## License

MIT

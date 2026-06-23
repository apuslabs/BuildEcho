# BuildEcho

> Agentic public building for developers.

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-day%200-orange.svg)](docs/PUBLIC_BUILD_DAY_0.md)
[![Agent-driven](https://img.shields.io/badge/agent--driven-human--approved-blue.svg)](docs/AGENT_HARNESS.md)

BuildEcho is an open-source public-building agent that turns real development
progress into public proof, social drafts, community feedback, and the next
build step.

```text
Build -> Tell -> Listen -> Decide -> Build
```

BuildEcho is not a posting bot. It is an agentic loop for developers who want
to build in public with truth, evidence, and feedback.

## Why BuildEcho

Developers build every day, but most progress stays invisible.

Every commit, bug fix, demo, benchmark, user question, and product decision can
become public momentum, but developers usually have to do that work manually.

BuildEcho helps answer:

- What did we actually build today?
- What is worth sharing publicly?
- What proof supports the story?
- Which channel should we use?
- What did the community tell us?
- What should we build next?

## Quickstart

BuildEcho is currently a local, repo-native CLI.

```bash
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
  config.json
  memory.md
  context.md
  build-logs/
  drafts/
  feedback/
  metrics/
  prompts/
```

## Example Output

A daily run should eventually produce something like this:

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
- README
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

## Agent Team

BuildEcho presents one product surface, but works like an agent team internally:

- **Orchestrator Agent** decides which loop to run.
- **Builder Agent** reads commits, PRs, issues, releases, and docs.
- **Signal Agent** finds the progress worth sharing.
- **Proof Agent** attaches evidence such as diffs, demos, metrics, and feedback.
- **Narrator Agent** writes channel-specific drafts.
- **Community Agent** summarizes external feedback.
- **Strategy Agent** recommends the next build step.
- **Quality Agent** checks truthfulness, tone, risk, and community fit.

See [docs/AGENT_LOOP.md](docs/AGENT_LOOP.md).

## Agent Harness

BuildEcho is designed so humans and coding agents can both continue the project.

If you are a coding agent, read
[docs/AGENT_HARNESS.md](docs/AGENT_HARNESS.md) and
[.buildecho/context.md](.buildecho/context.md) before making changes.

The harness defines:

- Required context files
- Target function
- Allowed early contributions
- Verification protocol
- Human approval boundary
- Handoff protocol

## Roadmap

- Local CLI that generates build logs and social drafts.
- GitHub integration for commits, PRs, issues, and releases.
- Human review flow for approving drafts.
- Feedback collection from GitHub, X, LinkedIn, Reddit, Discord, and Hacker News.
- Agent memory that improves project narrative over time.
- Optional hosted dashboard for teams and multi-project workflows.

See [docs/ROADMAP.md](docs/ROADMAP.md).

## Repository Status

This project is intentionally early. Day 0 is about making the idea legible:

- Clear story
- Clear loop
- Clear agent harness
- Minimal CLI
- Public roadmap

See [docs/PUBLIC_BUILD_DAY_0.md](docs/PUBLIC_BUILD_DAY_0.md).

## Contributing

Contributions are welcome in code, prompts, docs, examples, and workflows.

Start with [CONTRIBUTING.md](CONTRIBUTING.md).

Good first contributions:

- Improve `buildecho daily` output.
- Add local git activity collectors.
- Add prompt templates for agent roles.
- Add examples from real developer projects.
- Add quality checks for unsupported claims.

## License

MIT

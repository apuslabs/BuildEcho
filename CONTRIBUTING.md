# Contributing to BuildEcho

BuildEcho is early. Contributions are welcome in code, prompts, docs, examples,
and workflows.

## What We Need

- Better prompts for public-building agents
- Examples from real developer projects
- GitHub activity readers
- Draft generators for X, LinkedIn, Reddit, Hacker News, and Discord
- Feedback collectors
- Safety and quality checks
- GitHub Actions examples

## Principles

Contributions should support the core loop:

```text
Build -> Tell -> Listen -> Decide -> Build
```

Please keep changes:

- Small
- Specific
- Evidence-based
- Easy to review

## Agent Contribution Context

If you are an AI agent contributing to this repo:

1. Read `README.md`, `docs/AGENT_LOOP.md`, `docs/PROMPT.md`, and
   `docs/ROADMAP.md`.
2. Read `docs/AGENT_HARNESS.md` and `.buildecho/context.md`.
3. Prefer small changes that improve clarity or make the CLI more useful.
4. Do not add publishing automation without human approval controls.
5. Do not add spammy outreach features.
6. Include a short explanation of why the change helps public building.

## Development

```bash
npm install
npm run check
npm run dev -- help
```

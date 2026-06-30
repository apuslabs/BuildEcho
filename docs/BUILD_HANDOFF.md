# Build Handoff

This document compresses the BuildEcho build history into a short context pack
for the next human or coding agent.

Read this after `README.md`, `docs/VISION.md`, and `docs/AGENT_HARNESS.md`.

## Current Status

BuildEcho is a local CLI MVP for a governed agentic open-source growth loop.

The core command is:

```bash
buildecho daily --agent-team
```

It reads real git activity and generates a markdown report under
`.buildecho/build-logs/` with these sections:

- Orchestrator Agent
- Builder Agent
- Proof Agent
- Story Agent
- Growth Agent
- Strategy Agent
- Governor Agent

The current differentiator is governance. BuildEcho is not a posting bot. The
Governor Agent reads `.buildecho/policy.json` and reports:

- Autonomous actions
- Approval-required actions
- Forbidden actions
- Spam risk
- Human approval boundaries

## Product Thesis

BuildEcho's positioning is:

```text
An agentic open-source growth company inside every repo.
```

The product loop is:

```text
Build -> Prove -> Publish -> Listen -> Decide -> Build
```

The project should optimize for:

```text
Maximize the public compounding effect of real development progress.
```

It should not optimize for post volume, hype, unverified claims, or autonomous
spam.

## Important Decisions

1. Repository content must be English-only.
2. Publishing, outreach, mentions, email, and external GitHub comments require
   human approval.
3. Local, repo-native workflow comes before hosted dashboards or external
   integrations.
4. The first MVP is a useful daily report, not full autonomy.
5. Public-building images and local test assets live under `local-public-build/`
   and must not be committed.
6. Each meaningful feature or positioning change should be a separate commit so
   the project has public-building history.
7. Tweet preparation should include one review pass and a generated image. When
   generating images, produce three options and recommend one.

## What Has Been Built

Key commits:

- `0bddad0` Bootstrap BuildEcho
- `3085288` Improve README for launch clarity
- `1fab36b` Generate daily logs from git activity
- `9197d86` Add Day 1 social card
- `1da1618` Upgrade BuildEcho vision
- `bd85f85` Refine BuildEcho positioning
- `20e8060` Add MVP spec for agent team report
- `bbcea4b` Add agent team daily report
- `99a1d38` Add repo policy for agent actions
- `6f2ace8` Update MVP follow-up milestones
- `611d2fe` Make Governor report policy-driven

Core files:

- `src/cli.ts` contains the current CLI implementation.
- `.buildecho/config.json` stores project settings.
- `.buildecho/policy.json` stores the governance policy.
- `.buildecho/context.md` stores durable project context.
- `.buildecho/memory.md` is intended for long-running narrative memory.
- `docs/MVP_SPEC.md` defines the first MVP.
- `docs/VISION.md` defines the long-term product thesis.
- `docs/AGENT_HARNESS.md` defines the working protocol for future agents.

## Current Gaps

The project has a useful MVP, but several parts are still manual or shallow:

- `.buildecho/memory.md` is still mostly a template.
- The CLI does not yet read `.buildecho/memory.md`.
- The CLI does not yet persist a structured run summary back into memory.
- Governor checks are policy-aware but still simple.
- GitHub issues, pull requests, releases, and discussions are not read yet.
- There is no approval queue for publishing or outreach.
- Generated social images are local-only and not part of the CLI.

## Recommended Next Steps

Prioritize in this order:

1. Make `buildecho daily --agent-team` read `.buildecho/memory.md` and include a
   short memory context section.
2. Add a `buildecho remember` command that appends a verified run summary to
   `.buildecho/memory.md`.
3. Add stronger Governor checks for unsupported claims and spam risk.
4. Run a case study on a real external repo such as NovitaBox or 9router.
5. Add an example report to the docs after the output quality is stable.
6. Add GitHub API readers for PRs, issues, and releases.

## Verification Protocol

Run:

```bash
npm run check
npm run build
npm run dev -- help
npm run dev -- daily --agent-team
rg -n "[\\p{Han}]" . --glob '!node_modules/**' --glob '!dist/**'
```

The final command should return no matches.

## Handoff Rule

Before ending a meaningful build session, update this document or
`.buildecho/context.md` if the project direction, current state, or next steps
changed.

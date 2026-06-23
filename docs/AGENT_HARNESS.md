# Agent Harness Governance

This document defines how any coding agent should continue building BuildEcho.

The goal is to make the project self-iterable: a human or agent can enter the
repo, read the context, make a small useful contribution, verify it, and hand
off cleanly.

## Mission

BuildEcho is an agentic public-building loop for developers.

It turns real development progress into:

- Public proof
- Build logs
- Social drafts
- Community feedback
- Next build steps

The product is not a posting bot. The product is the loop:

```text
Build -> Tell -> Listen -> Decide -> Build
```

## First Files to Read

Every coding agent must read these files before making changes:

1. `README.md`
2. `docs/AGENT_LOOP.md`
3. `docs/PROMPT.md`
4. `docs/ROADMAP.md`
5. `CONTRIBUTING.md`
6. `.buildecho/context.md`

## Operating Principles

1. Use English only in repository files, CLI output, comments, docs, prompts,
   and examples.
2. Prefer small, reviewable changes.
3. Keep humans in the publishing approval loop.
4. Do not add spam automation.
5. Do not invent product capabilities in docs.
6. Preserve repo-local project memory under `.buildecho/`.
7. Verify changes before handing off.

## Target Function

Optimize for:

```text
Maximize the public compounding effect of real development progress.
```

Do not optimize for:

```text
Post volume.
Hype.
Unverified claims.
Autonomous spam.
```

## Work Intake Protocol

When starting work:

1. Read the required files.
2. Check the current git status.
3. Identify the smallest useful next step.
4. State the change briefly.
5. Implement.
6. Verify.
7. Update docs or context if the project direction changed.

## Allowed Early Contributions

Good first contributions:

- Improve CLI structure.
- Read local git history more accurately.
- Generate better markdown build logs.
- Add prompt templates.
- Add GitHub Actions examples.
- Add fixture examples from real developer projects.
- Add quality checks for unsupported claims.
- Improve docs for agent handoff.

Avoid early contributions:

- Direct autonomous posting.
- Growth hacks.
- Browser automation for mass engagement.
- Large dashboard work before the CLI loop is useful.
- Heavy framework rewrites.

## Verification Protocol

Run:

```bash
npm run check
npm run build
npm run dev -- help
```

If you change CLI behavior, also run the affected command:

```bash
npm run dev -- init
npm run dev -- daily
```

Before handoff, check for non-English repository content:

```bash
rg -n "[\\p{Han}]" . --glob '!node_modules/**' --glob '!dist/**'
```

The expected result is no matches.

## Handoff Protocol

Every agent handoff should include:

- What changed
- Why it helps the BuildEcho loop
- How it was verified
- What should happen next

If the work changes project direction, update `.buildecho/context.md`.

## Human Approval Boundary

BuildEcho may generate drafts, recommendations, and review reports. It must not
publish, reply, mention users, or contact communities without explicit human
approval.

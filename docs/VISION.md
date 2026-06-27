# Vision

BuildEcho helps open-source projects compound.

The project starts from a simple belief: most open-source work is real, useful,
and hard-earned, but too much of it stays invisible. Commits do not become
proof. Demos do not become distribution. Feedback does not reliably become the
next build step. Builders know they should build in public, but the workflow is
manual, inconsistent, and easy to abandon.

BuildEcho is an attempt to turn public building into a governed agentic loop
that can live inside any repository.

## Long-Term Goal

BuildEcho should become an agentic operating system for open-source growth.

When a project installs BuildEcho, it should gain a small autonomous team that
can run continuously around the repository:

- Understand what changed.
- Turn real progress into public proof.
- Draft useful updates for the right channels.
- Discover feedback, demand, confusion, and objections.
- Recommend the next build, demo, benchmark, or documentation step.
- Preserve project memory across days, launches, and contributors.
- Keep sensitive actions under human approval.

The goal is not to maximize posting volume. The goal is to maximize the public
compounding effect of real development progress.

## Product Thesis

Open-source success depends on more than code.

A strong project needs:

- A clear narrative.
- Visible proof of progress.
- Trustworthy demos and docs.
- Fast feedback loops.
- Respectful community interaction.
- Consistent distribution.
- Good product judgment about what to build next.

BuildEcho packages those activities into a repeatable loop:

```text
Build -> Prove -> Publish -> Listen -> Decide -> Build
```

Each loop should leave the project better than it found it: more understandable,
more trustworthy, more connected to users, and more prepared for the next build
step.

## Agentic Company Model

BuildEcho can be understood as an agentic open-source growth company inside
every repo.

The external product should feel simple. Internally, the work is split across
specialized agents:

| Agent | Responsibility |
| --- | --- |
| Orchestrator Agent | Runs the loop, chooses work, merges outputs, and maintains continuity |
| Builder Agent | Understands code, commits, issues, releases, docs, demos, and tests |
| Proof Agent | Ensures public claims are tied to evidence |
| Story Agent | Turns progress into build logs, social drafts, launch notes, and video plans |
| Growth Agent | Finds relevant audiences, communities, projects, issues, and potential users |
| Community Agent | Summarizes replies, comments, objections, and contributor signals |
| Strategy Agent | Converts feedback into the next useful build step |
| Governor Agent | Blocks hype, spam, unsupported claims, unsafe outreach, and policy violations |

The agent team can be CEO-like, CTO-like, and CMO-like in behavior, but the
system should expose concrete responsibilities instead of vague titles.

## Harness Engineering

BuildEcho needs a harness because autonomous agents need structure, memory,
permissions, and review gates.

The harness should define:

- Mission and target function.
- Required project context.
- Agent roles.
- Allowed autonomous actions.
- Actions that require human approval.
- Forbidden behavior.
- Verification commands.
- Handoff protocol.
- Memory and metrics.

A project should be able to describe its public-building policy in repo-local
files such as:

```text
.buildecho/
  config.json
  context.md
  memory.md
  policy.json
  agents/
  policies/
  build-logs/
  drafts/
  feedback/
  metrics/
```

The harness is what keeps BuildEcho from becoming a posting bot or a growth-hack
machine. It gives agents autonomy inside clear boundaries.

## Loop Engineering

The core product is the loop, not a single generated post.

Each run should move through six stages:

1. Observe project activity and external signals.
2. Understand what matters.
3. Decide the next useful action.
4. Act by generating code suggestions, docs, build logs, drafts, or demo plans.
5. Verify truthfulness, quality, safety, and community fit.
6. Learn from the result and update project memory.

The loop can start locally and manually:

```bash
buildecho daily
```

Over time, it can become scheduled, multi-agent, and channel-aware while keeping
approval gates for sensitive actions.

## Permission Model

BuildEcho should be agent-driven and human-approved by default.

Allowed early autonomous actions:

- Read repository activity.
- Summarize commits, issues, releases, and docs.
- Generate local build logs.
- Draft posts, threads, launch notes, and video scripts.
- Suggest GitHub issues or documentation improvements.
- Recommend the next build step.
- Run quality checks.

Actions that require explicit approval:

- Publishing to X, LinkedIn, Reddit, Discord, Hacker News, or other communities.
- Sending email.
- Mentioning users.
- Commenting on external GitHub issues.
- Opening external pull requests.
- Scheduling posts.

Forbidden behavior:

- Mass outreach.
- Scraping private contact information.
- Fake testimonials or fake metrics.
- Unsupported production-readiness claims.
- Repeatedly tagging maintainers or users.
- Posting just to increase volume.

## What Success Looks Like

BuildEcho succeeds when an open-source maintainer can connect a repository and
receive a useful daily operating report:

- What changed.
- What is worth sharing.
- What proof supports it.
- What should not be shared yet.
- Which users or communities might care.
- What feedback arrived.
- What to build next.

In the best version, BuildEcho helps a project become easier to understand,
easier to trust, easier to contribute to, and easier to adopt.

It should help builders spend less time wondering how to communicate progress
and more time compounding it.

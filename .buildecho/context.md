# BuildEcho Context

BuildEcho is an agentic open-source growth company inside every repo.

## Current Positioning

BuildEcho helps open-source projects turn real development progress into public
proof, build logs, social drafts, community feedback, growth signals, and next
build steps.

Core line:

```text
An agentic open-source growth company inside every repo.
```

Operating line:

```text
Agent-driven. Human-approved.
```

## Product Loop

```text
Build -> Prove -> Publish -> Listen -> Decide -> Build
```

## Current Phase

Local CLI MVP.

The project currently has:

- README
- Agent loop documentation
- First system prompt
- Roadmap
- Contribution guide
- Agent harness governance
- Minimal TypeScript CLI
- GitHub Action example
- Vision document for the agentic company model
- MVP spec for the daily agent team report
- Repo-local governance policy
- Policy-driven Governor Agent output

## Near-Term Goal

Make the local CLI useful enough that a developer can run:

```bash
npx buildecho init
npx buildecho daily --agent-team
```

and receive a truthful agent team report with real git activity, proof, public
drafts, next steps, and policy-aware Governor output.

## Long-Term Goal

Give every open-source project a governed agentic team that can run continuously
around the repository:

- Understand real progress.
- Turn proof into public artifacts.
- Find relevant audiences and feedback.
- Recommend the next build, demo, benchmark, or documentation step.
- Preserve project memory.
- Keep publishing and outreach human-approved by default.

## Naming

Project name: BuildEcho

Reason:

- Build points to developer progress.
- Echo points to public resonance and feedback.
- The name supports the full loop, not just content generation or posting.

## Constraints

- Use English only in repository files.
- Keep publishing human-approved.
- Prefer local, repo-native workflow first.
- Do not position the product as a generic social media bot.
- Do not add spam or mass-engagement automation.
- Treat outreach, mentions, public posting, and email as approval-required
  actions.

## Next Useful Steps

1. Make `daily --agent-team` read `.buildecho/memory.md` and include memory
   context.
2. Add a `remember` command that appends verified run summaries to
   `.buildecho/memory.md`.
3. Add stronger Governor checks for unsupported claims and spam risk.
4. Add examples for a real developer project.
5. Run a case study on NovitaBox or 9router.

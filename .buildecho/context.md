# BuildEcho Context

BuildEcho is an open-source agentic public-building loop for developers.

## Current Positioning

BuildEcho helps developers turn real development progress into public proof,
social drafts, community feedback, and next build steps.

Core line:

```text
Agentic public building for developers.
```

Operating line:

```text
Agent-driven. Human-approved.
```

## Product Loop

```text
Build -> Tell -> Listen -> Decide -> Build
```

## Current Phase

Day 0 / repository bootstrap.

The project currently has:

- README
- Agent loop documentation
- First system prompt
- Roadmap
- Contribution guide
- Agent harness governance
- Minimal TypeScript CLI
- GitHub Action example

## Near-Term Goal

Make the local CLI useful enough that a developer can run:

```bash
npx buildecho init
npx buildecho daily
```

and receive a truthful build log plus useful public-building draft structure.

## Naming

Project name: BuildEcho

Reason:

- Build points to developer progress.
- Echo points to public resonance and feedback.
- The name supports the full loop, not just content generation.

## Constraints

- Use English only in repository files.
- Keep publishing human-approved.
- Prefer local, repo-native workflow first.
- Do not position the product as a generic social media bot.
- Do not add spam or mass-engagement automation.

## Next Useful Steps

1. Improve `daily` so it produces stronger draft content instead of placeholders.
2. Add a local git activity collector module.
3. Add prompt templates per agent role.
4. Add examples for a real developer project.
5. Add a quality check that flags unsupported claims.

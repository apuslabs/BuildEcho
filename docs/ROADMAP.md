# Roadmap

## Phase 0: Make the Idea Clear

- README
- Vision document
- Agent loop documentation
- First system prompt
- Contribution guide
- Minimal CLI

## Phase 1: Local CLI

Commands:

```bash
buildecho init
buildecho daily
buildecho daily --agent-team
buildecho draft
```

Capabilities:

- Create `.buildecho/`
- Read local git history
- Generate a markdown build log
- Generate an agent-team daily report
- Generate X, LinkedIn, Reddit/HN, and Discord drafts
- Save outputs locally

## Phase 2: GitHub Native

- Read commits, PRs, issues, and releases through GitHub API
- Generate daily build logs through GitHub Actions
- Open a draft PR or issue with suggested public updates

## Phase 3: Agent Team and Governance

- Orchestrator, Builder, Proof, Story, Growth, Community, Strategy, and Governor
  agents
- Repo-local policies for autonomous, approval-required, and forbidden actions
- Claim checking and spam-risk checks
- Human approval queue for publishing and outreach

## Phase 4: Review and Publish

- Human approval queue
- Optional X, LinkedIn, Discord, Reddit integrations
- Draft scheduling
- Channel-specific style guides

## Phase 5: Feedback Loop

- Collect comments, replies, stars, clicks, signups, and issues
- Summarize feedback into product insights
- Recommend next build actions

## Phase 6: Daily Video Loop

- Generate demo scripts, shot lists, cover images, and subtitles
- Record terminal, browser, or product demos
- Produce short video drafts from real progress
- Keep video publishing human-approved

## Phase 7: Multi-Project Dashboard

- Hosted dashboard
- Team workflows
- Shared memory
- Content calendar
- Launch campaign templates

## Non-Goals for Early Versions

- Fully autonomous posting
- Spam automation
- Mass email or mass GitHub outreach
- Growth hacking without proof
- Replacing human product judgment

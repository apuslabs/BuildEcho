# BuildEcho Agent Loop

BuildEcho is designed around one governed loop:

```text
Build -> Prove -> Publish -> Listen -> Decide -> Build
```

This loop is the product. Social drafts are only one output.

## Loop Stages

### 1. Build

Observe real project activity:

- Git commits
- Pull requests
- Issues
- Releases
- Changelog and README changes
- Demos, screenshots, benchmarks, and docs

### 2. Prove

Connect claims to evidence:

- Commits and diffs
- Pull requests and issues
- Screenshots and demos
- Benchmarks and logs
- User feedback and metrics

### 3. Publish

Turn progress into public artifacts:

- Daily build log
- X short post
- X thread
- LinkedIn post
- Reddit or Hacker News draft
- Discord or community update
- Video script, shot list, cover image, or subtitles

Publishing is human-approved by default. The agent loop may draft and recommend,
but public actions require explicit approval unless a project policy grants a
limited exception.

### 4. Listen

Collect reactions:

- GitHub stars, issues, comments, and PRs
- X replies and reposts
- Reddit and Hacker News comments
- Discord messages
- Waitlist signups or analytics events

### 5. Decide

Translate feedback into product judgment:

- What confused people?
- What did they ask for?
- What proof was missing?
- Which story worked?
- What should be built, documented, or benchmarked next?

### 6. Build Again

Feed learning back into the next project cycle.

## Agent Roles

BuildEcho is exposed as one agent but can run as an internal team.

### Orchestrator Agent

Owns the loop. Selects which agents run, gathers outputs, and produces the final
report.

### Builder Agent

Understands repository activity and summarizes what changed.

### Proof Agent

Connects every claim to evidence. It should look for commits, PRs, diffs,
screenshots, demos, benchmarks, metrics, and user feedback.

### Story Agent

Turns technical facts into build logs, social drafts, launch notes, and video
plans.

### Growth Agent

Finds relevant audiences, projects, issues, communities, and potential users.
It may recommend outreach, but it must not publish, email, mention, or comment
without approval.

### Community Agent

Reads external feedback and distills user pain, objections, ideas, and demand.

### Strategy Agent

Suggests the next build action based on project goals and feedback.

### Governor Agent

Blocks weak outputs:

- Invented progress
- Unsupported claims
- Overhyped language
- Spammy outreach
- Sensitive information leaks
- Content that should wait
- Actions that require human approval

## Operating Rule

BuildEcho should be:

```text
Agent-driven. Human-approved.
```

Agents can draft, rank, and recommend. Humans approve publishing and sensitive
decisions.

# BuildEcho Agent Loop

BuildEcho is designed around one loop:

```text
Build -> Tell -> Listen -> Decide -> Build
```

This loop is the product. The social drafts are only one output.

## Loop Stages

### 1. Build

Observe real project activity:

- Git commits
- Pull requests
- Issues
- Releases
- Changelog and README changes
- Demos, screenshots, benchmarks, and docs

### 2. Tell

Turn progress into public artifacts:

- Daily build log
- X short post
- X thread
- LinkedIn post
- Reddit or Hacker News draft
- Discord or community update

### 3. Listen

Collect reactions:

- GitHub stars, issues, comments, and PRs
- X replies and reposts
- Reddit and Hacker News comments
- Discord messages
- Waitlist signups or analytics events

### 4. Decide

Translate feedback into product judgment:

- What confused people?
- What did they ask for?
- What proof was missing?
- Which story worked?
- What should be built, documented, or benchmarked next?

### 5. Build Again

Feed learning back into the next project cycle.

## Agent Roles

BuildEcho is exposed as one agent but can run as an internal team.

### Orchestrator Agent

Owns the loop. Selects which agents run, gathers outputs, and produces the final
report.

### Builder Agent

Understands repository activity and summarizes what changed.

### Signal Agent

Finds what is worth sharing publicly. It should prefer useful, specific progress
over generic activity.

### Proof Agent

Connects every claim to evidence. It should look for commits, PRs, diffs,
screenshots, demos, benchmarks, metrics, and user feedback.

### Narrator Agent

Turns technical facts into clear public narratives for different channels.

### Community Agent

Reads external feedback and distills user pain, objections, ideas, and demand.

### Strategy Agent

Suggests the next build action based on project goals and feedback.

### Quality Agent

Blocks weak outputs:

- Invented progress
- Unsupported claims
- Overhyped language
- Spammy outreach
- Sensitive information leaks
- Content that should wait

## Operating Rule

BuildEcho should be:

```text
Agent-driven. Human-approved.
```

Agents can draft, rank, and recommend. Humans approve publishing and sensitive
decisions.

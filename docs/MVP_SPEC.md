# MVP Spec: Daily Agent Team Report

BuildEcho's first MVP is a local CLI loop that turns real repository activity
into a governed daily open-source growth report.

The MVP should prove the product thesis:

```text
An agentic open-source growth company inside every repo.
```

It does not need full autonomy, external integrations, or hosted dashboards. It
does need to make the agentic company model visible in a useful daily output.

## Target User

The first user is an open-source maintainer or solo developer who already builds
in a Git repository and wants help turning real progress into:

- Public proof
- Clear updates
- Useful distribution drafts
- Feedback questions
- The next build decision

## Primary Command

```bash
buildecho daily --agent-team
```

The command should read local repository activity and write a markdown report to
`.buildecho/build-logs/`.

## MVP Output

The generated report should include these sections:

1. `Orchestrator Agent`
   - The daily loop summary.
   - The strongest public-building angle.
   - Approval status for publishing.

2. `Builder Agent`
   - Recent commits.
   - Changed files.
   - Changed areas.

3. `Proof Agent`
   - Evidence for each claim.
   - Missing proof that should be gathered before publishing.

4. `Story Agent`
   - X short post draft.
   - X thread outline.
   - LinkedIn draft.
   - Discord or community update.
   - Optional video script or shot list.

5. `Growth Agent`
   - Who might care.
   - Where the update could be shared.
   - Outreach ideas that require approval.

6. `Strategy Agent`
   - Recommended next build step.
   - Recommended demo, benchmark, or documentation improvement.

7. `Governor Agent`
   - Unsupported claims.
   - Spam risk.
   - Sensitive information risk.
   - Actions that require human approval.

## Acceptance Criteria

The first MVP is complete when:

- `buildecho daily --agent-team` works in this repository.
- It writes a markdown report under `.buildecho/build-logs/`.
- It uses real git activity as evidence.
- It includes all agent sections listed above.
- It clearly marks publishing, outreach, mentions, and email as
  approval-required actions.
- It includes a repo-local policy file for autonomous, approval-required, and
  forbidden actions.
- It does not contact external services.
- `npm run check` passes.
- `npm run build` passes.
- The repository contains no non-English product content.

## Non-Goals

The first MVP should not:

- Publish to X, LinkedIn, Reddit, Discord, or Hacker News.
- Send email.
- Comment on GitHub issues or discussions.
- Scrape private contact information.
- Run a hosted dashboard.
- Implement a full multi-agent runtime.
- Claim autonomous growth without governance.

## Follow-Up Milestones

After the MVP works locally:

1. Add `.buildecho/policy.json`.
2. Add stronger Governor checks for unsupported claims and spam risk.
3. Add GitHub API readers for issues, PRs, and releases.
4. Add video assets: script, shot list, subtitles, and cover image.
5. Add a scheduled GitHub Actions example.
6. Add an approval queue for publishing and outreach.

---
name: autonomous-cron-pipelines
description: 'Cron jobs that run AI agents: state machines, PR gates.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos]
metadata:
  hermes:
    tags: [cron, automation, pipelines, github, prs, agents]
    related_skills: [github-pr-workflow, github-org-bulk-operations]
---

# Autonomous Cron Pipelines

Design and operate cron jobs that run AI agents on long-running projects
(continuous audit, template/app factories, feature pipelines) with manual
human review gates. This is the class the user calls "an hourly schedule"
that should DO work, not just notify.

## When to use

- User asks for an hourly/daily schedule that implements, audits, or fixes
  across sessions.
- Long build-out projects ("recreate 1,600 templates one at a time").
- Any repo where an agent must make autonomous commits/pushes on a schedule.

## Core design rules

1. **Self-contained prompts.** A cron run is a fresh session with NO chat
   context. The prompt must carry: repo path, mission, exact commands, report
   format, and the "nothing to do → no empty commit, report idle" rule.
2. **Checklist markers as the source of truth.** Track per-unit progress in a
   committed checklist (`- [ ]` not started · `[~]` in progress · `[x]` done).
   Current unit = first `[~]`; next unit = first `- [ ]`. The job reads and
   writes this file every run — it survives restarts and doubles as the
   backlog.
3. **Idempotent runs.** Every state must be re-detectable from git (log,
   branches, PR list) + the checklist. Never create empty commits.
4. **PR-gated manual review** (the pattern this user requires):
   - Implement each unit on its own branch `feat/<unit>` from main.
   - Finished + verified → push branch → `gh pr create` with a summary.
   - The user reviews/approves/merges MANUALLY. The job NEVER merges, never
     force-pushes, never deletes branches.
   - Wait for the merge before starting the next unit.
   - While waiting, PREP AHEAD: write the next units' specs/docs/tasks ONLY
     (no implementation) and commit+push them directly to main, each unit in
     its own folder (`specs/<unit>/`, `docs/<unit>/`) so branches never
     conflict. Keep advancing down the checklist while the PR stays open.
5. **Document the jobs.** Keep a committed CRONJOB.md (job ID, schedule,
   workspace, mission, state machine, report format) and update it in the
   same commit as any prompt change. Mirror workflow changes into AGENTS.md.
6. **Point agents at a contract.** Have the job read the repo's AGENTS.md
   first so every run follows the same rules.

## State-machine skeleton

Detect state each run in order:

- **IDLE** (no `[~]`, no open PR) → start first `- [ ]` unit on a new branch.
- **IMPLEMENTING** (branch exists, no PR) → continue; when done: full gate →
  push → `gh pr create` → prep next unit on main.
- **WAITING** (PR open) → prep future units' specs/docs on main only; never
  implement.
- **MERGED** → pull main, flip `[~]`→`[x]` (the only direct-to-main commit
  allowed), start next unit.
- **CLOSED** (no merge) → report honestly, wait for direction.

Annotated prompt skeleton: `templates/cron-pipeline-prompt.md`.

## Run forensics ("did the cron do it?")

- Saved reports: `~/.hermes/cron/output/<job_id>/<timestamp>.md`
  (prompt + final response).
- Execution DB: `~/.hermes/cron/executions.db` — SQLite `executions` table
  with claimed_at / started_at / finished_at / status.
- **`cronjob action=list` shows `last_run_at: null` while a run is in
  flight** — a 30–60 min run looks like it never ran until it finishes, and
  `next_run_at` has already advanced. Check the DB before concluding "the
  cron didn't do it". Details: `references/hermes-cron-forensics.md`.

## Pitfalls

- **Audit-style crons sweep uncommitted WIP.** A job told to "commit any
  changes" will commit the user's in-progress edits sitting in the working
  tree (exactly what happened this session — the user's auth refactor got
  committed by the hourly job mid-review). Warn the user, or commit/stash
  WIP before enabling such a job.
- **Sibling agents race on the same repo** (another session, another job).
  Always `git pull --rebase` before pushing; lockfiles conflict — resolve by
  taking yours then `npm install` to reconcile.
- **Doc drift:** every prompt update must be mirrored into CRONJOB.md (and
  AGENTS.md workflow sections) in the same commit.
- **Cron jobs and sub-agents cannot use clarify** — decisions must be encoded
  in the prompt; when in doubt, the job reports and waits rather than asks.

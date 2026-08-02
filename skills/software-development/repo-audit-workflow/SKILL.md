---
name: repo-audit-workflow
description: 'Repo audit: verify, fix, commit, push; schedule recurring.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [Audit, Git, Verification, CI, Cron]
    related_skills: [vite-vitest-tooling, github-repo-management]
---

# Repo Audit Workflow

Use when asked to audit a repository (leave it better than found), run verification gates and fix what fails, or schedule recurring maintenance audits (e.g. an hourly audit cron job).

## 1. Establish the baseline first

- Clone, read README/TODO for known gaps, check recent commits (`git log --oneline -10`), and note conventions (oxlint, prettier, husky, conventional commits) BEFORE changing anything.
- Install deps at root AND in every subpackage (e.g. `functions/`) before trusting build/test output — a missing local `node_modules` silently falls back to a global tsc of a different major version and produces misleading errors (see vite-vitest-tooling §2).

## 2. Verification gates (run all, in order)

1. `npx tsc -b`
2. `npm run lint`
3. `npm test` — check for post-summary crashes from build-only plugins (see vite-vitest-tooling §1)
4. `npx knip`
5. `npm run build` + every subpackage build (`npm --prefix functions run build`)
6. `fallow audit --gate all` + `fallow health` + `fallow dead-code` + `fallow dupes` (when the project has `.fallowrc.json`)

- Never skip or disable a failing gate; fix the root cause. If a required tool genuinely cannot run in this environment, report that honestly instead of faking a result — but note that `fallow` (Rust-native TS/JS analyzer) does NOT require Rust or cargo: install the prebuilt GitHub release binary (see `references/fallow-usage.md`).

## 3. Credential pre-flight before push

Never promise "push auth is available" without checking — the `GITHUB_TOKEN` line in `~/.hermes/.env` is often a commented-out template placeholder (empty value), and an empty token fails with `remote: Invalid username or token`. Pre-flight:

```bash
gh auth status 2>&1 | head -5
git config --get credential.helper
ls ~/.git-credentials 2>/dev/null
grep "^GITHUB_TOKEN=" ~/.hermes/.env | head -1 | cut -d= -f2 | tr -d '\n\r' | wc -c   # 0 = placeholder/empty
ls ~/.ssh/*.pub 2>/dev/null
```

If nothing valid exists, tell the user what to add (fine-grained PAT with Contents: Read & write on the repo) and report the push failure honestly — NEVER report a push as successful when it failed. To bootstrap credentials interactively over chat, use the gh device flow (no token sharing) — see `references/gh-device-flow-auth.md`; note its default scopes (`gist, read:org, repo`) do NOT include `admin:org`, so org admin work needs `--scopes repo,workflow,admin:org`. After a device-flow login, run `gh auth setup-git` once or plain `git push` still fails with `fatal: could not read Username` — the login prints "Configured git protocol" but the credential helper is only registered by setup-git. One-shot push without persisting to git config:

```bash
TOKEN=$(grep "^GITHUB_TOKEN=" ~/.hermes/.env | head -1 | cut -d= -f2 | tr -d '\n\r')
git push "https://x-access-token:${TOKEN}@github.com/OWNER/REPO.git" main
```

## 4. Commit rules

- Conventional commits (`fix:`, `refactor:`, `perf:`, `chore:`); focused and atomic.
- If nothing needs fixing: do NOT create an empty commit — report "passed with no changes required".
- Pre-commit hooks (husky/lint-staged) run on every commit; they must pass.

## 5. Scheduling recurring audits (cron)

When the user asks to run the audit on a schedule ("add an hourly schedule" + a mission prompt):

- Create a cron job with a SELF-CONTAINED prompt — cron runs in a fresh session with no chat context. Include: repo path, the full verification commands, fix rules, commit convention, push instruction, the no-empty-commit rule, and "report push failures honestly".
- Set `workdir` to the repo so project context files are picked up; restrict `enabled_toolsets` (e.g. `["terminal", "file"]`) to cut token cost.
- Default `deliver` (origin) lands reports in the user's chat. Confirm with `cronjob action=list` and report `next_run_at` to the user.
- When the environment gains a tool after the job was created (e.g. fallow gets installed), `cronjob action=update` the prompt to run it directly instead of the old "try installing / report unavailable" fallback — otherwise every hourly run wastes effort rediscovering the tool.
- **An audit cron job WILL commit uncommitted WIP.** A prompt that says "commit and push" makes the job treat any uncommitted changes in the working tree as fair game: it will review, commit, and push the user's half-finished local edits even when the user intended to commit them manually. Seen in practice: an hourly audit job committed and pushed the user's in-progress auth refactor minutes before the user's own "commit this" instruction was acted on, causing a "who did this?" confusion. If the user has WIP in the tree, either commit it yourself first, or add an explicit guard to the job prompt: "do not commit changes you did not create during this run."
- **Diagnosing whether a cron run did something:** `cronjob action=list` shows `last_run_at`/`last_status`, but while a run is in flight `last_run_at` is still null — never conclude "it never ran" from that alone. Definitive evidence lives on disk: saved run reports at `~/.hermes/cron/output/<job_id>/<timestamp>.md` and the `executions.db` table (started_at / finished_at). A wide span between started and finished means a long in-flight run — its commits can land minutes before you check the job list. The saved report also reveals exactly what the job did (files, commits, verdicts).

## References

- `references/fallow-usage.md` — fallow install (GitHub release binary; NOT on crates.io or npm), CLI cheat sheet, security false-positive pattern (open-redirect sinks fed by trusted server URLs), cron integration.
- `references/gh-device-flow-auth.md` — headless `gh auth login --web` device flow (piped stdin, share one-time code over chat), default-scope trap (`admin:org` missing), scope→capability map, org overview commands.

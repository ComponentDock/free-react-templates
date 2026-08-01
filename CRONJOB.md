# CRONJOB.md — Scheduled Jobs

This project is driven by hourly scheduled jobs (Hermes cron). Each job runs in a
fresh session with no chat context, so every prompt below is fully self-contained.

---

## Job 1: Templates pipeline — next template + audit

| Field      | Value |
| ---------- | ----- |
| **Job ID** | `1634240b4e3f` |
| **Schedule** | every 60 minutes |
| **Workspace** | `/root/free-react-templates` |
| **Toolsets** | terminal, file |
| **Delivery** | origin (this chat) |

### Mission

Drive the spec-driven, test-driven template pipeline for the monorepo
(Vite + React 19 + Tailwind CSS 4 + TypeScript, npm workspaces `apps/*` + `packages/*`).
The project recreates ColorLib website templates under different names; the full
checklist is `TEMPLATES.md` (1,646 items — `[ ]` not started · `[~]` in progress ·
`[x]` done). Every template lives in its own app folder under `apps/`, named after
the template (e.g. Aurora lives in `apps/aurora`, package `@free-react-templates/aurora`).

### PR-based workflow (one template at a time)

- Each template is implemented on its **own branch** created from `main`:
  `feat/template-<name>`.
- When a template is finished and fully verified, the job pushes the branch and
  opens a **Pull Request to `main`** (`gh pr create`).
- The user **reviews, approves, and merges PRs manually**. The job NEVER merges,
  never force-pushes, and never deletes branches.
- The job **waits for the PR to be merged** before implementing the next template.
- While waiting, it **prepares specs and docs for upcoming templates** (one at a
  time, in TEMPLATES.md order) and **commits them directly to `main`** — docs
  only, never implementation code. Each template's prepared artifacts live in
  their own separate folders to avoid merge conflicts:
  `openspec/specs/template-<name>/spec.md` + `docs/templates/<name>/`.

### State detection (each run)

1. `git fetch origin`, `git status`, `git branch -a`, `gh pr list --state open`
   (and merged) for `feat/template-*` branches.
2. Current in-progress template = first `[~]` item in `TEMPLATES.md`; if none,
   the pipeline is idle.

### Per-state actions

- **A · Idle** — start the next template: first `- [ ]` item → branch
  `feat/template-<name>` from latest `origin/main`, mark `[~]`, spec-first TDD,
  full gate, push, open PR.
- **B · Implementing** — continue on the existing branch; when complete: full
  gate → push → `gh pr create` → report PR URL → start prep for the next
  template (state C).
- **C · Waiting (PR open)** — do NOT touch the template branch and do NOT
  implement anything. **Prepare specs and docs for upcoming templates, one at a
  time, in TEMPLATES.md order, and commit them directly to `main`** (pull latest
  `origin/main` first): start with the first `- [ ]` item after the current one
  whose spec does not yet exist on main, writing ONLY prep artifacts in its own
  folders — `openspec/specs/template-<name>/spec.md` + `docs/templates/<name>/`
  (tasks/todo outline, notes) — committed with a `docs:` message and pushed. If
  that prep is done and the PR is still open, **continue to the following
  template** and prepare its spec/docs the same way. Keep advancing down the
  checklist while the PR remains open (specs/docs only, never implementation).
  Stop when all remaining templates are prepared on main (report idle-waiting)
  or when the PR merges.
- **D · Merged** — on main: pull, mark the template's `TEMPLATES.md` lines
  `[~]` → `[x]` (bookkeeping commit), then start the next template: branch
  `feat/template-<next>` from main (its spec/docs are already on main from prep),
  mark `[~]`, implement (state B); or state A if no spec exists yet.
- **E · Closed without merge** — report honestly; wait for user direction.

### Verification chain (before opening a PR)

`npm run typecheck` → `npm run lint` → `npm run test:coverage` (100%) →
`npm run build` → `npm run knip` → `npm run fallow` (+ `npm run spec:validate`).
Fix root causes; never disable checks; never bypass hooks with `--no-verify`.

### Report (each run)

Detected state (A–E), template worked on, branch name, PR number/URL, prep
progress for the next template, files modified, verification results, coverage,
commit hashes, push status, and what the job is waiting on.

---

## Job 2: Continuous implementation audit (sibling project)

| Field      | Value |
| ---------- | ----- |
| **Job ID** | `6368966141d8` |
| **Schedule** | every 60 minutes |
| **Workspace** | `/root/free-templates-firebase` |
| **Toolsets** | terminal, file |
| **Delivery** | origin (this chat) |

### Mission

Continuous implementation audit of the Firebase template marketplace repo
(`free-templates-firebase`). Leave the repository in a better state than found,
preserving behavior. Read `TODO.md` every run: mark already-done items `[x]`,
continue on the highest-priority actionable remaining item (respecting blockers
such as "needs deployment"), and audit the codebase for bugs, edge cases, dead
code, React anti-patterns, security issues, missing tests, etc.

### Verification chain (each run)

`npx tsc -b` → `npm run lint` (oxlint) → `npm test` (vitest) →
`fallow audit --gate all` + `fallow health` + `fallow dead-code` + `fallow dupes`
(binary at `/usr/local/bin/fallow`) → `npx knip`. Fix root causes; never disable
checks. Security findings on Cloud-Function-returned URLs (Stripe, Storage signed
URLs) are known false positives — verify, don't churn. Commit conventionally,
push to `origin main`, and report honestly (including "nothing to fix").

---

## Operational notes

- Both jobs deliver their final report to the originating chat automatically.
- Job prompts are self-contained: they assume a fresh session each run.
- Pushing requires GitHub credentials on the host (`gh` device-flow login as
  `chesteralan`); without them the jobs report the push as failed.

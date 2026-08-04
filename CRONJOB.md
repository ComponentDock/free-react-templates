# CRONJOB.md — Scheduled Jobs

This project is driven by hourly scheduled jobs (Hermes cron). Each job runs in a
fresh session with no chat context, so every prompt below is fully self-contained.

## Current status

| Job                             | State                  | Schedule  | Working tree                    | Delivery    |
| ------------------------------- | ---------------------- | --------- | ------------------------------- | ----------- |
| 1 · Templates pipeline A        | ✅ scheduled           | every 15m | `/root/free-react-templates`    | this chat   |
| 2 · Continuous audit (firebase) | ⏸️ paused (2026-08-01) | every 60m | `/root/free-templates-firebase` | this chat   |
| 3 · Templates pipeline B        | ✅ scheduled           | every 15m | `/root/free-react-templates-b`  | this chat   |
| 4 · Templates pipeline C        | ✅ scheduled           | every 15m | `/root/free-react-templates-c`  | local files |
| 5 · Templates pipeline D        | ✅ scheduled           | every 15m | `/root/free-react-templates-d`  | local files |

---

## Parallel tracks

Jobs 1, 3, 4 and 5 run the **same pipeline in parallel** (up to four templates
in flight at once), each on its own clone of the repo. Coordination is via the
**claim rule**: before starting a template a job fetches origin, picks the first
`- [ ]` item not claimed (no open `feat/template-*` branch/PR, not `[~]` on
main), and claims it by pushing a `[~]` marker commit to main **before**
creating the implementation branch. If a claim push fails (sibling moved
origin), it refetches and picks the next available item. PRs are merged
immediately (`gh pr merge --squash --delete-branch`) and kept as documentation.

Note on the 15-minute cadence: each run typically lasts much longer than 15
minutes, so the tracks are effectively always working — at least one agent is
running at any time, usually all four. Runs that die on the 600s API-idle
timeout simply resume on the next tick (state B continues the existing branch).

## Job 1: Templates pipeline — next template + audit

| Field         | Value                        |
| ------------- | ---------------------------- |
| **Job ID**    | `1634240b4e3f`               |
| **Schedule**  | every 60 minutes             |
| **Workspace** | `/root/free-react-templates` |
| **Toolsets**  | terminal, file               |
| **Delivery**  | origin (this chat)           |

### Mission

Drive the spec-driven, test-driven template pipeline for the monorepo
(Vite + React 19 + Tailwind CSS 4 + TypeScript, npm workspaces `apps/*` + `packages/*`).
The project recreates ColorLib website templates under different names; the full
checklist is `TEMPLATES.md` (1,646 items — `[ ]` not started · `[~]` in progress ·
`[x]` done). Every template lives in its own app folder under `apps/`, named after
the template (e.g. Aurora lives in `apps/aurora`, package `@free-react-templates/aurora`).

### Replication — mandatory before implementing (see `docs/replication.md`)

The original design is the reference, never the agent's imagination. For every
template being built, all references are self-serve:

1. **Live preview DOM** — `https://preview.colorlib.com/theme/<original-slug>/`
   (real rendered structure: sections in order, headings, copy, buttons, forms).
2. **CSS tokens** — fetch the stylesheet(s) the preview references (usually
   `css/main.css`) and extract brand colors (e.g. `.banner-area` background),
   font family (e.g. "Poppins"), button shapes, section backgrounds.
3. **Screenshot** — the image URL already in `TEMPLATES.md` next to each item;
   view it and record the visual design (colors, layout, aesthetic).

Record structure + tokens in the template spec. Rebuild section-for-section with
matching layout, colors, font, and content types. **Never copy assets**
(images/fonts/CSS): use picsum.photos seeded placeholders, Google Fonts via
`<link>`, and lucide-react icons. If the preview is unreachable, fall back to the
screenshot and say so in the PR.

### PR-based workflow (one template at a time)

- Each template is implemented on its **own branch** created from `main`:
  `feat/template-<name>`.
- When a template is finished and fully verified, the job pushes the branch and
  opens a **Pull Request to `main`** (`gh pr create`).
- PRs are created for **documentation** (title, summary, spec link, verification
  results), then the job **merges them immediately** (`gh pr merge --squash
--delete-branch`) — no review window, no waiting. It never force-pushes.
- The job **waits for the PR to be merged** before implementing the next template.
- While waiting, it **prepares specs and docs for upcoming templates** (one at a
  time, in TEMPLATES.md order) and **commits and pushes them directly to `main`**
  — docs only, never implementation code. Each template's prepared artifacts
  live in their own separate folders to avoid merge conflicts:
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
  gate → push → `gh pr create` → **merge immediately**
  (`gh pr merge --squash --delete-branch`, retry once if GitHub reports
  not-mergeable-yet) → bookkeeping (state D) → start the next template (state A).
- **C · Pending merge** — an open `feat/template-*` PR could not be merged yet
  (checks pending / conflict): retry the merge now. If it succeeds, do state D
  bookkeeping and continue to state A. If still blocked, report why, do NOT
  implement anything, and **prepare specs and docs for upcoming templates, one
  at a time, in TEMPLATES.md order, and commit AND push them directly to
  `main`**
  (pull latest `origin/main` first): start with the first `- [ ]` item after the
  current one whose spec does not yet exist on main, writing ONLY prep artifacts
  in its own separate folders — `openspec/specs/template-<name>/spec.md` +
  `docs/templates/<name>/` (tasks/todo outline, notes). While preparing, ALSO
  gather the design references per the Replication section (fetch preview HTML +
  CSS tokens, note the screenshot) and record the real section structure +
  tokens inside the spec. Committed with a `docs:` message and pushed. If that
  prep is done and the PR is still open, **continue to the following template**
  and prepare its spec/docs the same way. Keep advancing down the checklist while
  the PR remains open (specs/docs only, never implementation). Stop when all
  remaining templates are prepared and pushed on main (report idle-waiting) or
  when the PR merges.
- **D · Merged** — on main: pull, mark the template's `TEMPLATES.md` lines
  `[~]` → `[x]` **and append the live Surge URL**
  (`· [<name>](https://free-react-templates-<name>.surge.sh)`), set
  `"homepage"` to that URL in the app's `package.json` (bookkeeping commit),
  then start the next template: branch `feat/template-<next>` from main (its
  spec/docs are already on main from prep), mark `[~]`, implement (state B); or
  state A if no spec exists yet.
  - Deployment is **automatic** via `.github/workflows/deploy-surge.yml` when
    the user merges — the job never deploys.
- **E · Closed without merge** — report honestly; wait for user direction.

### Verification chain (before opening a PR)

`npm run typecheck` → `npm run lint` → `npm run test:coverage` (100%) →
`npm run build` → `npm run knip` → `npm run fallow` (+ `npm run spec:validate`).
Fix root causes; never disable checks; never bypass hooks with `--no-verify`.

### Report (each run)

Detected state (A–E), template worked on, original ColorLib slug + preview URL
analyzed, branch name, PR number/URL, prep progress (which upcoming templates
have specs/docs prepared and pushed on main), files modified, verification
results, coverage, commit hashes, push status, and what the job is waiting on.

---

## Job 2: Continuous implementation audit (sibling project)

| Field         | Value                           |
| ------------- | ------------------------------- |
| **Job ID**    | `6368966141d8`                  |
| **Schedule**  | every 60 minutes                |
| **Workspace** | `/root/free-templates-firebase` |
| **Toolsets**  | terminal, file                  |
| **Delivery**  | origin (this chat)              |

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

## Job 3: Templates pipeline B (parallel track)

| Field         | Value                                         |
| ------------- | --------------------------------------------- |
| **Job ID**    | `24bddb765dc0`                                |
| **Schedule**  | every 15 minutes                              |
| **Workspace** | `/root/free-react-templates-b` (second clone) |
| **Toolsets**  | terminal, file                                |
| **Delivery**  | origin (this chat)                            |

## Job 4: Templates pipeline C (parallel track)

| Field         | Value                                        |
| ------------- | -------------------------------------------- |
| **Job ID**    | `2173ce3cd45b`                               |
| **Schedule**  | every 15 minutes                             |
| **Workspace** | `/root/free-react-templates-c` (third clone) |
| **Toolsets**  | terminal, file                               |
| **Delivery**  | local files (no chat spam)                   |

## Job 5: Templates pipeline D (parallel track)

| Field         | Value                                         |
| ------------- | --------------------------------------------- |
| **Job ID**    | `964c998e8b17`                                |
| **Schedule**  | every 15 minutes                              |
| **Workspace** | `/root/free-react-templates-d` (fourth clone) |
| **Toolsets**  | terminal, file                                |
| **Delivery**  | local files (no chat spam)                    |

Jobs 3–5 are identical in mission, process and claim rule to Job 1 (see above),
each running on its own clone so the tracks never share a working tree. Together
the four tracks double/quadruple template throughput. All tracks merge their
PRs immediately and rely on the same `.github/workflows/deploy-surge.yml` for
automatic deployment.

---

## Operational notes

- Both jobs deliver their final report to the originating chat automatically.
- Job prompts are self-contained: they assume a fresh session each run.
- Pushing requires GitHub credentials on the host (`gh` device-flow login as
  `chesteralan`); without them the jobs report the push as failed.

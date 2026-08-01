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

### Process (each run)

1. **Assess** — `git log --oneline -10`, first `[~]`/`[ ]` item in `TEMPLATES.md`,
   existing specs in `openspec/specs/`, existing apps in `apps/`.
2. **Priority** — if a spec exists whose template app is missing (currently
   `template-aurora`), implement that first; mark its `TEMPLATES.md` item `[~]`
   when starting and `[x]` when finished. Otherwise pick the first `- [ ]` item,
   mark it `[~]`, and create `apps/<template-name>` (copy the simplest existing
   app, rename the package to `@free-react-templates/<template-name>`).
3. **Spec-first** — write `openspec/specs/template-<name>/spec.md` with Gherkin
   requirements + scenarios (navigation, hero, about, services, features,
   testimonials, contact form, footer, composition). Validate with
   `npm run spec:validate`.
4. **TDD** — write Vitest + Testing Library tests first (red), then implement,
   reusing `packages/ui`. Run `npm run test:coverage` until 100%
   lines/functions/branches/statements.
5. **Verify** — run until all pass:
   `npm run typecheck` → `npm run lint` → `npm run test:coverage` →
   `npm run build` → `npm run knip` → `npm run fallow` (never disable or ignore
   failing checks).
6. **Commit** — focused atomic commits with conventional messages.
7. **Push** — to `origin main`; report honestly if credentials block the push.
8. **Idle** — if everything is green and nothing is in progress, do NOT create an
   empty commit; report the pipeline is idle.

### Report (each run)

Templates started/completed, spec created/updated, test count + coverage,
files modified, verification results, commit hashes, push status, next queued
template.

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

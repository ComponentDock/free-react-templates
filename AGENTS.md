# AGENTS.md — AI Coding Rules

Read this file first. It is the contract for AI-assisted work in this repository.

## Project snapshot

`free-react-templates` is a **monorepo of free React website templates**
(npm workspaces). Every template recreates a ColorLib design under a different
name and lives in its own app folder: `apps/<template-name>` (e.g. Aurora →
`apps/aurora`). Shared UI lives in `packages/ui`. The full backlog is
`TEMPLATES.md` (1,646 ColorLib templates as a checklist).

Stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).
Tests: Vitest + Testing Library with **100% coverage enforced**.

## Non-negotiable rules

1. **Read the docs first.** Start with `docs/ai-context.md`, then
   `docs/conventions.md`, `docs/contracts.md`, `docs/verification.md`.
   For template work, load `skills/research/colorlib-template-replication`
   (mandatory fidelity process). The full agent skill library is mirrored in
   `skills/`.
2. **Spec-first.** No implementation without a spec:
   `openspec/specs/template-<name>/spec.md` (Gherkin requirements + scenarios).
   Validate with `npm run spec:validate`.
3. **TDD.** Write tests before implementation. `npm run test:coverage` must stay
   at 100% lines/functions/branches/statements. Never disable coverage.
4. **Verification gates.** FAST_MODE (see `docs/FAST_MODE.md` — restore when
   the template backlog is done): the local pre-push gate verifies only the
   changed app(s) (`scripts/verify-app.sh <app>`: typecheck + lint + 100%
   coverage tests + build, ~2–3 min). The FULL gate (`npm run gate`:
   typecheck → lint → test:coverage → build → knip → fallow) still runs in CI
   on every merge and on a nightly sweep, so regressions cannot merge
   silently. Never ignore a failing gate; never disable
   lint/tests/typechecking. Fix the root cause.
5. **One app per template, new name.** New templates get a new folder
   `apps/<new-name>` (copy the simplest existing app, rename the package to
   `@free-react-templates/<new-name>`). The name must be NEW and DIFFERENT from
   the ColorLib source template (never reuse the source name). Never put two
   templates in one app folder. New templates must NOT reference ColorLib in
   any app file (comments included — provenance lives only in the spec,
   TEMPLATES.md, and the PR), and every template's footer MUST link
   `https://www.componentdock.com/` ("Component Dock").
6. **Reuse before build.** Use `packages/ui` components and `cn()` instead of
   duplicating. Avoid new dependencies unless truly necessary.
7. **Follow existing patterns.** Match file structure, naming, component
   patterns, and error handling described in `docs/conventions.md`. Do not
   refactor working code for style.
8. **Smallest safe change.** Before editing, do the change-impact analysis in
   `docs/self-review.md`. Identify affected files, dependencies, and possible
   regressions first.
9. **Self-review before finishing.** Run the checklists in `docs/self-review.md`
   (architecture impact, code quality, performance, security, test coverage,
   documentation updates).
10. **Keep documentation current.** Update `docs/`, `README.md`, ADRs
    (`docs/adr/`), and `TEMPLATES.md` statuses alongside code changes.
11. **Conventional commits.** `feat:` / `fix:` / `test:` / `chore:` /
    `docs:` / `refactor:` — focused and atomic.
12. **Summarize.** When a task is complete, report: what changed, verification
    results, coverage, commit hash(es), and push status.

## Standard workflow

1. Read this file + `docs/ai-context.md` (+ `docs/conventions.md` when writing code).
2. Inspect current state: `git log --oneline -10`, `git status`, `TEMPLATES.md`,
   `openspec/specs/`, `apps/`.
3. Pick the target: first `[~]` (in progress) template, else first `- [ ]` item
   in `TEMPLATES.md`. Mark it `[~]` when starting, `[x]` when done.
4. Write/update the spec, then the tests (red), then the implementation (green).
5. Run the full verification chain (see rule 4) until everything passes.
6. Self-review (rule 9), update docs/checklist, commit conventionally.
7. **Templates ship via PRs** (see `CRONJOB.md`): work on `feat/template-<name>`
   branches, open a PR to `main` for documentation, then **merge it immediately**
   (`gh pr merge --squash --delete-branch`). Never force-push. While a merge is
   blocked (rare), you may prepare the next template's spec/docs but not
   implement it.
8. If nothing needs doing: do NOT create an empty commit — report the repo is
   green and idle.

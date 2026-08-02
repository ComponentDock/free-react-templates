---
name: ai-native-project-setup
description: 'AI-native repo setup: AGENTS.md, specs, TDD 100%, guards.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [ai-agents, tdd, spec-driven, monorepo, husky, vitest, testing-library]
    related_skills: [test-driven-development, github-pr-workflow]
---

# AI-Native Project Setup

Stand up (or retrofit) a repository so AI agents can work in it safely and
consistently: a binding agent contract, spec-driven requirements, TDD with
enforced 100% coverage, a hard verification gate, and (optionally) an
autonomous pipeline that ships work through PRs the human merges manually.

Proven on a Vite + React + TS + Tailwind monorepo of 1,600+ template apps.

## When to use

- User asks to "improve this project for AI-assisted development" or lists
  practices like context/spec/TDD/contract/convention-driven development.
- User wants spec-driven development (OpenSpec / GitHub Spec Kit), "100% test
  coverage", husky guards, or an hourly autonomous pipeline.
- Creating a new repo that AI agents will contribute to.

## Deliverables map (practices → artifacts)

| Practice                | Artifact                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------- |
| Context-driven          | `docs/ai-context.md` — architecture, stack, workflows, **known issues**             |
| Spec-driven             | `openspec/specs/<item>/spec.md` per feature (Gherkin) + `npm run spec:validate`     |
| TDD                     | Vitest + Testing Library, 100% thresholds in root `vitest.config.ts`                |
| Architecture-driven     | documented module boundaries; one folder per unit (e.g. `apps/<name>` per template) |
| Contract-driven         | `docs/contracts.md` — typed public API, closed unions, no `any`                     |
| Decision docs           | `docs/adr/000N-*.md` — context, decision, consequences, alternatives                |
| Convention-driven       | `docs/conventions.md` — naming, file layout, component/error patterns               |
| Continuous verification | husky pre-push: typecheck → lint → test:coverage → build → knip → fallow            |
| AI self-review          | `docs/self-review.md` — pre-edit impact + pre-commit checklists                     |
| AI coding rules         | `AGENTS.md` at repo root (read first, non-negotiable rules, workflow)               |
| Automation (optional)   | hourly cron pipeline; document it in `CRONJOB.md`                                   |

## Steps

1. **AGENTS.md** (root): project snapshot, non-negotiable rules (read docs
   first; spec-first; TDD; verification gates; reuse before build; smallest
   safe change; self-review; keep docs current; conventional commits;
   summarize changes), and a numbered standard workflow. Keep it short enough
   to be read fully — it gets injected into agent context.
2. **docs/ tree**: `ai-context.md`, `conventions.md`, `contracts.md`,
   `verification.md`, `self-review.md`, `adr/`. Cross-link them from README and
   AGENTS.md. ADRs: Status/Date, Context, Decision, Consequences,
   Alternatives considered.
3. **Spec-driven**: `npm i -D @fission-ai/openspec`; `openspec/config.yaml`
   (schema: `spec-driven`, plus project context and operation guidance); one
   spec per feature at `openspec/specs/<feature>/spec.md` with `SHALL` +
   `Given/When/Then` scenarios. Script: `"spec:validate": "openspec validate
--specs"` (bare `openspec validate` says "Nothing to validate"). Spec Kit
   scaffolding (`.specify/`, `.opencode/`) can be copied wholesale from any
   existing spec-kit repo — it's generic.
4. **TDD + 100% coverage**: root `vitest.config.ts` with
   `test.projects: ['apps/*', 'packages/*']` and `test.coverage` thresholds
   100/100/100/100, include `*/src/**`, exclude tests/configs/`main.tsx`/CSS.
   Per-workspace `vitest.config.ts` with `globals: true`, `jsdom`,
   `setupFiles` (jest-dom). See templates/ and the Pitfalls below — the
   pitfalls are the actual lessons.
5. **Tooling**: oxlint (`.oxlintrc.json`, `react-in-jsx-scope: off` for
   automatic JSX runtime), prettier, knip (`ignoreBinaries` for global CLIs
   like fallow; `ignoreDependencies` for script-only tools like lint-staged),
   fallow (`.fallowrc.json` health thresholds; binary ships as a GitHub
   release, not crates.io/npm).
6. **Guard chain (husky)**: `prepare: "husky"`; `.husky/pre-commit` →
   `npx lint-staged`; `.husky/pre-push` → the full gate. Ban `--no-verify`.
   lint-staged in package.json: `*.{ts,tsx}` → `oxlint --fix` +
   `prettier --write`; others → prettier.
7. **Autonomous pipeline (optional)**: an hourly cron job whose prompt is fully
   self-contained (fresh session each run): read AGENTS.md first; detect state
   (idle / implementing / waiting-on-PR / merged); one unit at a time on its
   own branch `feat/<unit>`; open a PR and **let the human review/merge
   manually** (never merge, never force-push); while a PR waits, prepare next
   units' specs/docs **directly on main in per-unit folders**
   (`openspec/specs/<unit>/` + `docs/<units>/<unit>/`) to avoid merge
   conflicts — never implementation. Document the whole state machine in
   `CRONJOB.md`. Diagnosing runs: `~/.hermes/cron/output/<job_id>/*.md` holds
   each run's report; `executions.db` shows start/finish — note
   `last_run_at` stays null while a long run is still in flight (runs can take
   ~50 min).

## Pitfalls (all hit in practice)

- **RTL cleanup**: without `globals: true` in the workspace vitest config,
  Testing Library can't auto-cleanup → DOM leaks between tests → spurious
  "Found multiple elements with ..." failures. First thing to check.
- **Accessible-name whitespace**: JSX text + a `<span>` on separate lines
  collapses the space in the computed accessible name (e.g.
  `"Free, production-readyReact templates"`). Query headings by
  `getByRole('heading', { level: 1 })` + `textContent` regex instead of
  `name: /.../`.
- **Barrel files & coverage**: pure re-export `index.ts` files show 0% under
  v8 (no executable statements) — cosmetic, aggregate stays 100%, thresholds
  pass. Do not "fix".
- **CSS in coverage**: exclude `**/*.css` or it reports 0% and looks broken.
- **TypeScript 7 (Go-native)**: `latest` resolves to 7.x. `TS5112` when files
  are passed on the command line (tooling quirk, not a code error); `TS5011`
  rootDir required in some legacy configs. Build scripts: `tsc --noEmit`.
- **Knip + test-only deps**: a workspace using `@testing-library/*` only in
  tests must declare them in ITS OWN devDependencies or knip/fallow flag them
  as unlisted.
- **fallow health** prints `✗ 0 above threshold · maintainability 96 (good)`
  — the `✗ 0 above threshold` line is a HEALTHY summary, not an issue.
- **oxlint** on a fresh React 19 app: dozens of `react-in-jsx-scope` warnings
  — disable the rule (automatic runtime), don't add `import React`.

## Support files

- `templates/root-vitest.config.ts` — projects + 100% coverage thresholds
- `templates/workspace-vitest.config.ts` — jsdom + globals + setup
- `templates/oxlintrc.json` — React/TS/unicorn, in-jsx-scope off
- `templates/knip.jsonc` — entry auto-detect + tool ignores
- `templates/fallowrc.json` — health thresholds + dep ignores
- `templates/husky-pre-commit`, `templates/husky-pre-push` — the guard chain

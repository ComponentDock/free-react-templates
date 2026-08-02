---
name: react-vite-quality-tooling
description: 'React/Vite quality tooling: Vitest, Tailwind v4, husky.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [react, vite, vitest, testing-library, tailwind, husky, oxlint, knip]
    related_skills: [test-driven-development, github-org-automation]
---

# React/Vite Quality Tooling

Setting up tests and quality gates for React + Vite projects: Vitest with 100%
coverage, Tailwind CSS v4, oxlint, prettier, knip, fallow, and husky
pre-commit/pre-push guards. Each section is a verified gotcha from real setups.

## Trigger

- Scaffolding a new React/Vite app or monorepo with TDD + quality gates
- "Latest stack" setup: Vite + React 19 + Tailwind 4 + TypeScript
- Any Vitest + Testing Library suite behaving oddly (duplicate elements, flaky queries)

## Vitest + Testing Library pitfalls

1. **RTL auto-cleanup requires `globals: true`.** Without it, the DOM from the
   previous test is NOT removed — you get cascading `Found multiple elements`
   / `Unable to find` failures that look like real bugs. Fix: `test.globals: true`
   in each project's vitest config (RTL registers `afterEach(cleanup)` only when
   globals are available). Symptom: test 1 passes, tests 2+ fail with
   "Found multiple elements with the text: X".

2. **Accessible-name whitespace is not textContent.** `getByRole('heading',
{ name: /Foo Bar/ })` can fail because JSX span leading spaces are stripped
   from the computed accessible name (`<h1>Foo <span> Bar</span></h1>` →
   name "FooBar"). Robust pattern: query by role + level, assert on textContent
   with a whitespace-tolerant regex (`/Foo\s*Bar/i`).

3. **v8 coverage shows 0% for barrel re-export files** (`index.ts` that only
   re-exports). Pure re-exports generate no executable statements, so v8 reports
   them at 0% — cosmetic only; the aggregate and thresholds still pass.
   Don't chase it; importing through the barrel in tests is good practice anyway.

4. **Exclude non-code from coverage**: `**/*.css`, `**/main.tsx` (entry),
   `**/*.test.*`, configs. Otherwise CSS shows 0% and drags the report.

5. **Coverage thresholds with projects**: root `vitest.config.ts` with
   `test.projects: ['apps/*', 'packages/*']` + `test.coverage.thresholds`
   (lines/functions/branches/statements: 100) enforces the gate across the
   whole monorepo from one command (`vitest run --coverage`).

## Tailwind CSS v4 gotchas

- **Class-based dark mode needs an explicit variant.** Tailwind v4 defaults
  `dark:` to `prefers-color-scheme`, so a JS theme toggle does nothing until:
  ```css
  @custom-variant dark (&:where(.dark, .dark *));
  ```
  Then toggle `document.documentElement.classList` and return a cleanup that
  removes the class on unmount.
- Tailwind v4 is a Vite plugin: `plugins: [tailwindcss()]` from `@tailwindcss/vite`;
  `@import 'tailwindcss'` in CSS. No tailwind.config needed for basic themes;
  design tokens via `@theme { --color-primary-600: ...; }`.

## oxlint

- **`react-in-jsx-scope` must be off** for React 17+ automatic JSX runtime —
  otherwise every .tsx file warns `React must be in scope`. Add
  `"rules": { "react-in-jsx-scope": "off" }` to `.oxlintrc.json`.
- Oxlint 1.x is fast (57ms/100 files) — fine as the pre-commit lint.

## knip

- **`ignoreBinaries` for globally-installed CLIs** invoked in scripts
  (`"ignoreBinaries": ["fallow"]`) — otherwise "Unlisted binaries".
- **`ignoreDependencies` for script-only tools** knip can't see being used
  (e.g. `lint-staged`, referenced only from `.husky/pre-commit` which knip
  doesn't scan).
- Workspace entry points: `{ "workspaces": { "apps/*": { "entry": true } } }`
  or let knip auto-detect (empty config often suffices; `entry: true` is
  invalid at that path — use globs or drop it).
- New test deps (testing-library) appear as "unused" until the first test file
  imports them — expected during setup, resolves with the first suite.

## husky guards

```bash
npx husky init   # creates .husky/ with a sample hook; your hooks live there
chmod +x .husky/pre-commit .husky/pre-push
```

- `pre-commit` → `npx lint-staged` (config in package.json: oxlint --fix +
  prettier --write for ts/tsx; prettier for json/md/css)
- `pre-push` → full chain, e.g.:
  `npm run typecheck && npm run lint && npm run test:coverage && npm run build && npm run knip && npm run fallow`
- Add `"prepare": "husky"` to package.json scripts so hooks install on `npm install`.

## fallow-rs

- Not on crates.io or npm — install the **prebuilt binary from GitHub releases**
  (`fallow-linux-x64-gnu` → `/usr/local/bin/fallow`) or `cargo install` from the
  repo. Config: `.fallowrc.json` (ignoreDependencies for tool CLIs like
  openspec, health thresholds, thresholdOverrides per function).
- Commands: `fallow audit --gate all` (diff-gated CI verdict, exit 1 on fail),
  `fallow health`, `fallow dead-code`, `fallow dupes`, `fallow security`.
- Security findings are candidates, not verdicts: URLs returned by your own
  Cloud Functions (Stripe Checkout, signed Storage URLs) are trusted sources —
  verify the data flow before changing code.

## npm workspaces monorepo shape (worked example)

```
package.json          # workspaces: ["apps/*","packages/*"], lint-staged, prepare
tsconfig.base.json    # strict: true, noUncheckedIndexedAccess, jsx react-jsx
apps/web/             # one template/app per app; vite.config + vitest.config + src/test/setup.ts
packages/ui/          # shared components; main/types point at ./src/index.ts (source export)
```

- Workspace packages export **source** (`"main": "./src/index.ts"`) — Vite
  compiles them; TS resolves via exports map with `moduleResolution: bundler`.
- Test tooling at root works for all workspaces; declare the testing-library
  deps in EACH workspace that imports them (knip/fallow flag unlisted deps per
  package).
- Latest-stack note: `typescript@latest` is now TS 7 (native) — fine, but its
  `tsc` flags `TS5112` when run with explicit files; always run via project
  tsconfig.

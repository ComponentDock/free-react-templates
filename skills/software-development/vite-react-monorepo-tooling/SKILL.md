---
name: vite-react-monorepo-tooling
description: 'Vite+React+TS monorepo tooling: TDD, gates, quirks.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos]
metadata:
  hermes:
    tags: [vite, react, typescript, vitest, tailwind, monorepo, tdd]
    related_skills: [autonomous-cron-pipelines, github-org-bulk-operations]
---

# Vite + React + TypeScript Monorepo Tooling

Setup and debugging playbook for npm-workspaces monorepos (`apps/*` +
`packages/*`) with strict TDD (100% coverage) and a husky guard chain.

## Layout

- Root: `package.json` (workspaces), `tsconfig.base.json` (strict),
  `vitest.config.ts` (projects: `['apps/*', 'packages/*']`, coverage
  thresholds 100), `.oxlintrc.json`, `knip.jsonc`, `.fallowrc.json`, husky
  hooks.
- Each workspace: its own `vitest.config.ts` (jsdom, globals, setupFiles) and
  `src/test/setup.ts` (`import '@testing-library/jest-dom/vitest'`).
- Gates: pre-commit = lint-staged (oxlint --fix + prettier --write);
  pre-push = `typecheck && lint && test:coverage && build && knip && fallow`.
  Never bypass with `--no-verify`.

## Pitfalls that cost real debugging time

1. **Testing Library cleanup requires `globals: true`** in every workspace
   vitest config. Without it RTL cannot register afterEach cleanup → DOM
   accumulates across tests → baffling "Found multiple elements" / "Unable to
   find" errors that look like query bugs but are a config bug.
2. **v8 coverage reports barrel re-export files at 0%** (pure
   `export {} from` files have no executable statements). Cosmetic — the 100%
   aggregate and thresholds still pass. Do NOT chase it. Also exclude
   `**/*.css` from coverage (always 0%).
3. **Accessible-name whitespace:** JSX text + a `<span>` on separate lines can
   collapse the space in the accessible name (`"production-readyReact"`).
   Query headings with `{ level: 1 }` + textContent regex instead of
   `name: /.../`.
4. **TypeScript 6/7:** TS6 requires an explicit `rootDir` when a single common
   source dir exists (TS5011); TS7 (the Go compiler, now "latest") emits
   TS5112 when files are passed on the command line (tooling quirk, not a code
   error). Prefer `tsc --noEmit` (reads tsconfig.json) over bare `tsc file`.
5. **oxlint:** disable `react-in-jsx-scope` in `.oxlintrc.json` (automatic JSX
   runtime needs no React import) or every .tsx file warns.
6. **knip:** script-invoked CLIs (lint-staged, fallow, surge, openspec) get
   flagged as unused — add to `ignoreBinaries` / `ignoreDependencies`. CLI
   packages used only via scripts (e.g. `@fission-ai/openspec`) either get an
   ignoreDependencies entry or a real npm script that invokes the binary
   (then knip counts it as used).
7. **Tailwind v4 class-based dark mode** requires
   `@custom-variant dark (&:where(.dark, .dark *));` in the CSS entry — the
   default is prefers-color-scheme, which breaks a manual theme toggle. The
   toggle flips `.dark` on `document.documentElement`; effects should return a
   cleanup that removes the class.
8. **Workspace deps must be declared where imported** — a test file importing
   `@testing-library/*` in `packages/ui` but declaring it only in `apps/*`
   trips knip AND fallow ("unlisted dependency"). Declare test deps in every
   workspace that uses them.

## fallow-rs

Distributed via GitHub releases (fallow-rs/fallow) with prebuilt binaries —
NOT on crates.io or npm. Install: `curl -sL -o /usr/local/bin/fallow
<release-asset-url> && chmod +x`. Commands: `fallow audit --gate all`
(diff-gated PR verdict), `fallow health`, `fallow dead-code`, `fallow dupes`,
`fallow security`. "✗ 0 above threshold" in health output is a HEALTHY line.
Security items are candidates to verify — URLs returned by trusted backends
(Stripe, signed storage URLs) are false positives by design. Config:
`.fallowrc.json` (health thresholds + `thresholdOverrides` per file/function;
`duplicates.ignore`). For template-farm repos, ignore cross-app duplication
(`"apps/*/src/**"`) — copies are the design. Details:
`references/fallow-rs.md`.

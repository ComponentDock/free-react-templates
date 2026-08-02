---
name: vite-react-tailwind-scaffolding
description: 'Scaffold Vite+React+Tailwind TS apps and monorepos.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [Vite, React, Tailwind, TypeScript, Monorepo, Scaffolding]
    related_skills: [vite-vitest-tooling, github-repo-management]
---

# Vite + React + Tailwind + TypeScript Scaffolding

Use when creating a new frontend app or a multi-app monorepo from scratch: "create a repo with vite latest / react latest / tailwind latest / typescript latest", "make it a monorepo", or adding template apps to a templates monorepo. Verified stack (mid-2026): **Vite 8 · React 19 · Tailwind CSS 4 · TypeScript 7** — `"latest"` in package.json resolves to these.

## Key decisions

- **Monorepo layout:** npm workspaces, `apps/*` (deployable apps) + `packages/*` (shared source packages). Root `package.json` has `"workspaces": ["apps/*", "packages/*"]` and convenience scripts (`dev`/`build`/`typecheck` via `npm run <cmd> --workspace <name>`). No turbo/pnpm needed — plain npm workspaces is enough for small template shops.
- **Shared package exports SOURCE, not build output:** `"main": "./src/index.ts"`, `"types": "./src/index.ts"`, `"exports": { ".": "./src/index.ts" }` — Vite compiles it through the workspace symlink. No per-package build step; each package just has a `typecheck` script (`tsc --noEmit`).
- **Shared strict tsconfig** at root (`tsconfig.base.json`): `strict`, `noUncheckedIndexedAccess`, `moduleResolution: "bundler"`, `jsx: "react-jsx"`, `noEmit` set per-workspace. Apps extend it and add `"types": ["vite/client", "node"]`.
- **Tailwind v4 is a Vite plugin**, not PostCSS config: `plugins: [react(), tailwindcss()]` from `@tailwindcss/vite`, and the CSS is just `@import 'tailwindcss'` — no `tailwind.config.js` needed (theme via `@theme { --color-... }`).

## Pitfalls

- **Dark mode toggle breaks under Tailwind v4 unless you add the class variant.** v4 defaults `dark:` to the `prefers-color-scheme` media query, so a `.dark`-class toggle (common with a `useEffect` toggling `document.documentElement.classList`) silently stops working. Fix in CSS: `@custom-variant dark (&:where(.dark, .dark *));`. This is a real bug-fix pattern, not just a preference.
- **Compound components collide with TS 7:** `const Card = Object.assign(Card, {...})` next to `function Card() {}` → TS2300 Duplicate identifier. Use `Object.assign(function Card() {...}, { Header, Content, Footer })`.
- **Vite config + test config:** if the app also runs vitest, build-only plugins (sitemap etc.) crash the test run — see the `vite-vitest-tooling` skill §1 for the filter pattern.
- **Verify before pushing to a fresh repo:** `npm install` at root, `npm run typecheck`, `npm run build`, confirm dist/ output. Also set git identity for the repo (`user.name`/`user.email`) — a brand-new repo created under someone's org should carry their identity, not the machine's `root` default.

## Workflow

1. `gh repo create <org>/<name> --public --description "..."` (empty repo, no auto-init) — see `github-repo-management`.
2. Scaffold: root `package.json` + `tsconfig.base.json` + `.gitignore` + `README.md`, then `apps/web` and `packages/ui`.
3. `npm install` (root — installs all workspaces), then verify: `npm run typecheck && npm run build`.
4. `git init -b main`, set identity, commit conventionally (`feat: scaffold ...`), `git push -u origin main`.

Full file-by-file recipe with ready-to-adapt contents: `references/monorepo-scaffold.md`. For build/test/tsc quirks after scaffolding, see `vite-vitest-tooling`.

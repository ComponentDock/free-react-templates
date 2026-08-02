---
name: vite-vitest-tooling
description: 'Vite+Vitest build/test pitfalls and tsc red herrings.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [Vite, Vitest, TypeScript, Build, Testing]
    related_skills: [github-repo-management, systematic-debugging]
---

# Vite + Vitest Tooling

Use when working on a Vite project that also runs Vitest: config merging, build-only plugins crashing tests, TypeScript version mismatches in subpackages, or deciding a verification order.

## 1. Isolate build-only plugins from the test config

Pitfall: when `vitest.config.ts` does `mergeConfig(viteConfig, ...)`, ALL Vite plugins run during `vitest` — including build-only ones (e.g. `vite-plugin-sitemap`). Those write into `dist/`, which doesn't exist during tests, and crash after the test summary with an unhandled `ENOENT` (e.g. `open '/.../dist/sitemap.xml'`). `npm test` may still exit 0, hiding the crash; CI that runs `npm test` is affected too.

Fix: filter the plugin out before merging:

```ts
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// Build-only plugin (writes dist/sitemap.xml) crashes vitest: no dist/ dir.
const plugins = (viteConfig.plugins ?? []).filter((plugin) => {
  if (!plugin || typeof plugin !== 'object') return true
  return !('name' in plugin && plugin.name === 'vite-plugin-sitemap')
})

export default mergeConfig({ ...viteConfig, plugins }, defineConfig({ test: {/* ... */} }))
```

Get the exact plugin name from the compiled output: `grep -oE 'name: "[^"]+"' node_modules/<plugin>/dist/index.js`.

Rule of thumb: any Vite plugin that writes to disk in a build hook (sitemap, service-worker generators, prerendering) will misbehave under vitest if its config is merged wholesale. Filter it from the test config, or register it conditionally on the build command.

## 2. tsc errors from the wrong TypeScript

Pitfall: running `npm run build` (or `tsc`) inside a package whose `node_modules` is NOT installed silently falls back to a globally installed `tsc` — often a different major version. Its version-specific errors are red herrings. Example: a project declaring `typescript: ^5.4.0` with a global tsc v6 produced `TS5011: The 'rootDir' setting must be explicitly set` (a TS6-only migration error), tempting a config "fix" for a non-existent problem.

Diagnose before changing any config:

- `ls node_modules/.bin/tsc` — missing means no local compiler
- `npm ls typescript` — resolved local version
- `node_modules/.bin/tsc --version` — the version that actually matters

Fix: `npm install` in that package, re-run the build. Only touch tsconfig if the error persists after that.

## 3. Verification order for Vite + TS repos

Run in this order; each step is cheap and catches a different class of issue:

1. `npx tsc -b` (typecheck; `npm run build` also type-checks)
2. `npm run lint`
3. `npm test` — confirm clean exit with NO post-summary crash output (see §1)
4. `npx knip` (unused exports/deps; exit 0 with no output = clean)
5. `npm run build` — verify chunks and that dist/ artifacts (e.g. sitemap.xml) appear
6. Subpackages: `npm --prefix <pkg> ci` then `npm --prefix <pkg> run build` (e.g. Cloud Functions)

## 4. TypeScript 7 ("latest") quirks

`typescript: latest` now resolves to TS 7.x (the Go-native compiler). Two gotchas seen in the wild:

- **TS2300 Duplicate identifier** when assembling a compound component: `const Card = Object.assign(Card, {...})` next to a `function Card() {}` declaration collides. Use a named function expression INSIDE Object.assign: `Object.assign(function Card() {...}, { Header, Content, Footer })`, then `export const Card = ...`.
- The write_file auto-lint sometimes reports `TS5112: tsconfig.json is present but will not be loaded if files are specified on commandline` — that is an artifact of running tsc with explicit files on the command line, NOT a defect in the edited file. Ignore it; the real `tsc -b` / `tsc --noEmit` run decides. Same family as §2: version-specific red herrings.

## References

- `references/vitest-sitemap-crash.md` — full reproduction of the sitemap-in-vitest crash and the fix.

---
name: fallow
description: 'Fallow: Rust static analysis for TS/JS codebases.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [static-analysis, typescript, javascript, linting, code-quality]
    related_skills: [codebase-inspection, requesting-code-review, github-org-administration]
---

# Fallow — Codebase Intelligence for TypeScript/JavaScript

Rust-native static analysis: dead code, duplication, complexity hotspots, circular deps, styling candidates, and an opt-in security scan. Sub-second on medium repos. Config via `.fallowrc.json` — useful both as a PR gate (`fallow audit`) and as a whole-repo health check before/after refactors.

## Install

**NOT on crates.io, NOT on npm** (both return 404). Distributed as prebuilt binaries via GitHub releases (`fallow-rs/fallow`):

```bash
# x86_64 Linux (check uname -m; other assets: aarch64-unknown-linux-gnu, *-musl, darwin, windows)
curl -sL -o /usr/local/bin/fallow \
  https://github.com/fallow-rs/fallow/releases/download/v3.10.0/fallow-linux-x64-gnu
chmod +x /usr/local/bin/fallow && fallow --version
```

Find the latest tag + exact asset names via `https://api.github.com/repos/fallow-rs/fallow/releases/latest`. Building from source needs Rust ≥ 1.92 (workspace `rust-version`).

## Commands

| Command                           | What it does                                                                                       |
| --------------------------------- | -------------------------------------------------------------------------------------------------- |
| `fallow audit`                    | PR-quality gate on **changed files only** (vs merge-base with origin/main). Exit 1 = fail verdict. |
| `fallow audit --gate all`         | Fail on EVERY finding in changed files (no base-snapshot attribution pass) — strictest form.       |
| `fallow dead-code`                | Unused code, dependency hygiene, architecture cycles (whole repo).                                 |
| `fallow dupes`                    | Copy-paste / structural duplication (skips default ignores; `--explain-skipped` to see why).       |
| `fallow health`                   | Complexity hotspots + maintainability score; `--css` for styling candidates.                       |
| `fallow security`                 | Opt-in local scan: sinks with evidence traces + blast radius — verify before acting.               |
| `fallow fix --yes`                | Auto-fix safe unused-code findings.                                                                |
| `fallow config` / `config-schema` | Show resolved config / JSON schema.                                                                |

## Config (`.fallowrc.json`)

Precedence: `.fallowrc.json` (JSONC ok) > `.fallowrc.jsonc` > `fallow.toml` > `.fallow.toml` — first match wins, no merging. Key sections:

- `ignorePatterns`, `ignoreDependencies`, `ignoreUnresolvedImports`
- `duplicates.ignore` — file globs excluded from clone detection
- `health.maxCyclomatic / maxCognitive / maxCrap` — global ceilings
- `health.thresholdOverrides` — per-file/per-function ceilings with a `reason` (documented intentional complexity, e.g. large page components)

## Pitfalls

- **`fallow audit` is diff-scoped by default** — "0 issues" on a big repo usually means "0 issues in the changed files", not the whole repo. For a full sweep use `dead-code`, `dupes`, `health` individually (or `audit --gate all`).
- **Security findings are candidates, not verdicts.** Verify the evidence trace before changing code. Common false positive: `window.location.href = url` / `window.open(url)` where `url` comes from your own backend (Stripe Checkout/Customer Portal URLs, Firebase Storage signed URLs) — server-trusted, no user input reaches the sink.
- `health` hotspot metrics use git churn; files with < 3 commits are excluded (seen as "31 files excluded (< 3 commits)").
- Default ignores skip node_modules/dist/coverage/minified bundles; a repo with many generated files will report "skipped N files" on dupes — expected.

## Typical usage in an audit loop

```bash
fallow audit --gate all          # gate on the changeset
fallow dead-code && fallow dupes && fallow health   # whole-repo sweep
fallow security                  # review candidates manually
```

# ADR-0003: TDD with 100% coverage and a husky guard chain

**Status:** Accepted · **Date:** 2026-08-01

## Context

AI agents are the primary contributors. Without hard gates, quality degrades:
untested sections ship, lint drifts, dead code accumulates, and pushes go out
with failing builds.

## Decision

- **TDD:** tests are written before/alongside implementation; every spec
  scenario maps to a test.
- **100% coverage enforced:** Vitest + v8 provider with thresholds of 100 for
  lines, functions, branches, and statements (root `vitest.config.ts`).
  Excluded only: entry point, configs, CSS, test files.
- **Guard chain (husky):**
  - `pre-commit` → lint-staged (`oxlint --fix` + `prettier --write`)
  - `pre-push` → `typecheck` → `lint` → `test:coverage` → `build` → `knip` →
    `fallow`
- Tools: oxlint (lint), Prettier (format), knip + fallow-rs (dead code,
  duplication, complexity, security candidates).

## Consequences

- Nothing lands without passing every gate; `--no-verify` is banned.
- 100% coverage occasionally forces slightly more verbose components (small
  branches are covered instead of excluded) — accepted for the safety it buys.
- Barrier to entry is higher, but the hourly pipeline job absorbs it.

## Alternatives considered

- **Coverage < 100% (e.g. 80%):** rejected — leaves "which lines?" ambiguity
  that agents exploit.
- **CI-only verification:** rejected — feedback is too slow for an agent loop;
  local pre-push hooks catch issues before push.

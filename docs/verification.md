# Verification

Every change must pass the full gate. This document defines the gate, the
commands, and the failure policy.

## The gate (pre-push, enforced by husky)

Run in order; all must succeed:

```bash
npm run typecheck      # tsc --noEmit per workspace
npm run lint           # oxlint (0 warnings, 0 errors)
npm run test:coverage  # vitest run --coverage (100% lines/functions/branches/statements)
npm run build          # aurora: tsc --noEmit && vite build
npm run knip           # unused exports/deps/binaries
npm run fallow         # audit --gate all + health + dead-code + dupes
```

The same chain runs locally at any time; the husky `pre-push` hook enforces it
on every push. **Never bypass with `--no-verify`.**

`pre-commit` (lint-staged) runs `oxlint --fix` + `prettier --write` on staged
files.

## Failure policy

- **Never ignore a failing check.**
- **Never disable a check** (no `// oxlint-disable` to silence, no `it.skip`,
  no lowered coverage thresholds, no `ts-ignore`).
- Diagnose the root cause, fix the implementation, re-run the full chain.
- If a check is wrong about valid code, fix the configuration (e.g. oxlint
  rule off in `.oxlintrc.json`) — with justification, not suppression.

## Coverage semantics

- Thresholds: 100% statements, branches, functions, lines (root
  `vitest.config.ts`, v8 provider).
- Included: `apps/*/src/**`, `packages/*/src/**`.
- Excluded: test files, `__tests__`, `test/`, entry point `main.tsx`, configs,
  `*.css`.
- Barrel re-export files (e.g. `packages/ui/src/index.ts`) may show 0% with no
  executable statements — cosmetic, does not affect the 100% aggregate.

## Spec validation

```bash
npm run spec:validate   # openspec validate --specs
```

Run after creating or editing any spec. A failing spec blocks the change.

## Security checks

- No secrets in code, configs, or docs (`.env*` is gitignored; Firebase-style
  client keys are public by design but never commit server secrets).
- `fallow security` candidates: verify the data-flow trace before acting —
  URLs returned by trusted backends (Stripe, Storage signed URLs) are false
  positives by design.
- New dependencies require justification (see `AGENTS.md` rule 6).

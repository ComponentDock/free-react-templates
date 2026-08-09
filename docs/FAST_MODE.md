# FAST_MODE — temporary throughput changes (restore after all templates ship)

> **Status: ACTIVE** (enabled 2026-08-07). This document is the authoritative
> checklist of everything that was temporarily changed/removed to raise
> template throughput from ~10/day to ~30–40/day. **When all ~1,646 templates
> are done, restore the original behavior by following [Restore procedure](#restore-procedure).**
>
> Everything listed here is a _deliberate, temporary_ relaxation. The full
> six-step gate still runs — just not on the local critical path (CI + nightly).

## What changed and why

The local six-step gate (typecheck → lint → test:coverage → build → knip →
fallow) costs ~20 minutes per template across 60+ workspaces and was the
biggest wall-clock item in every template run. In FAST_MODE the **local** gate
checks only the app(s) a change touches (~2–3 min); the **full** gate moved to
CI (on merge) and a nightly sweep. Three concurrent pipeline streams
(1 cron + 2 spawned `hermes chat` processes) replace the single stream.

## Checklist — everything changed (restore these)

| #   | File / thing                           | Original (production) behavior                                                                                             | FAST_MODE behavior                                                                                                                                         |
| --- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `.husky/pre-push`                      | Full gate: `npm run typecheck && npm run lint && npm run test:coverage && npm run build && npm run knip && npm run fallow` | Per-app gate via `scripts/verify-app.sh` for each changed app (root lint always)                                                                           |
| 2   | `package.json` scripts                 | `test`, `test:coverage`, etc.                                                                                              | Added `gate` (= original full chain, still runnable), `verify:app` (per-app gate). Original scripts unchanged                                              |
| 3   | `AGENTS.md` rule 4                     | "Every change must pass ALL of: typecheck → lint → test:coverage → build → knip → fallow"                                  | Local gate = per-app; full gate = `npm run gate` on demand + CI on merge + nightly sweep                                                                   |
| 4   | `docs/verification.md`                 | Defined full gate as the only gate                                                                                         | Documents both gates + FAST_MODE section                                                                                                                   |
| 5   | `.github/workflows/deploy-surge.yml` | Deploy only                                                                                                                | Merge gate now verifies only the CHANGED apps (+ `packages/ui` if touched) via `scripts/verify-app.sh` — NOT the full gate (the full gate is too slow at 1,000+ workspaces) |
| 6   | `.github/workflows/nightly-gate.yml` | — (new)                                                                                                                    | Nightly full-gate sweep, partitioned for scale: `static` job (lint + typecheck + knip + fallow whole-repo) + `test-build` matrix of 4 shards (`scripts/shard-apps.mjs`, round-robin) running tests + builds per app; shard 0 also verifies `packages/ui` at 100% coverage |
| 7   | Cron job "Templates pipeline watchdog" | Job A ran the implementer prompt (full 6-step gate verification)                                                           | no_agent watchdog (`~/.hermes/scripts/cron-watchdog.sh`, every 15m) that restarts dead streams; all LLM work runs in spawned `hermes chat -q` streams 1–3  |
| 8   | Pipeline concurrency                   | 1 stream (cron job A, `/root/free-react-templates`)                                                                        | 3 spawned streams (see CRONJOB.md): stream 1 implementer (main tree), stream 2 implementer (`-p2`), stream 3 prep (`-p3`) — all without cron idle timeouts |
| 9   | `CRONJOB.md`                           | Documents single pipeline                                                                                                  | Documents 3 streams + how to stop them                                                                                                                     |
| 10  | `scripts/verify-app.sh`              | — (new)                                                                                                                    | Per-app gate: typecheck + lint + **knip + fallow** + vitest (100% coverage) + build for ONE workspace (~2–3 min)                                                                                                   |

**Unchanged (never relaxed):** spec-first (OpenSpec), TDD with 100% coverage on
changed code, replication fidelity mandate, conventional commits, PR +
immediate squash merge, deploy-on-merge, README status regeneration, lockfile
registration, new-original-name rule. `npm run gate` still exists and is run by
CI + nightly, so no regression can silently merge.

## The three streams (how they coordinate)

- **Claim rule (implementers):** streams 1 and 2 both implement. Before
  starting, fetch origin/main, find the first `- [ ]` item, push a `[~]` mark
  commit to main; if the push fails (someone else claimed), pick the next item
  and retry. After merge: pull --rebase, `[~]`→`[x]` + surge URL + homepage +
  `npm run readme:status`, push.
- **Prep stream (stream 3):** picks the first `- [ ]` item whose spec does NOT
  exist on main, does the replication research (preview DOM, CSS tokens,
  screenshot) and writes `openspec/specs/template-<name>/spec.md` +
  `docs/templates/<name>/`, commits docs-only to main. The spec folder is its
  claim marker (implementers skip items whose spec is missing).
- **Stop streams 2/3:** `process` kill or `pkill -f "stream-runner"` (see
  CRONJOB.md for the exact runner script names).

## Restore procedure

1. **Stop streams 1–3** (kill the runner processes; see CRONJOB.md).
2. **Restore job A as the implementer cron** (watchdog → prompt-driven):
   via `cronjob` update: `no_agent=false`, clear the script, restore the
   implementer prompt (see git history / CRONJOB.md), keep `every 15m`.
3. **Restore `.husky/pre-push`** to the original full gate:
   ```bash
   printf 'npm run typecheck && npm run lint && npm run test:coverage && npm run build && npm run knip && npm run fallow\n' > .husky/pre-push && chmod +x .husky/pre-push
   ```
4. **Restore `AGENTS.md` rule 4** and `docs/verification.md` to the full-gate
   contract (git history: `git show <last-main-commit>~1:AGENTS.md`).
5. **Remove the nightly workflow** `.github/workflows/nightly-gate.yml` and the
   `verify` job in `deploy-surge.yml` (or keep — they are additive and safe).
6. **Delete clones** `/root/free-react-templates-p2` and `-p3` (~300 MB each).
7. **Optional:** remove `scripts/verify-app.sh`, `npm run gate`,
   `npm run verify:app`, the stream runner scripts, and this file.
8. Update `CRONJOB.md` + `README.md` accordingly; commit as `docs: restore
full verification gate (FAST_MODE off)`.

## History

- 2026-08-07 — FAST_MODE enabled (user-approved plan 1+2+3: per-app local gate
  - CI/nightly full gate, 3 concurrent streams, prep stream).

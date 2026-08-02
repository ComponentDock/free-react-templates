# Fallow — Rust-native codebase analyzer for TS/JS

Fallow (`github.com/fallow-rs/fallow`) — free static analysis: dead code, duplication,
complexity hotspots, styling, architecture boundaries. Config: `.fallowrc.json` (JSONC),
`.fallowrc.jsonc`, or `fallow.toml`. Optional paid runtime layer — irrelevant to audits.

## Install — GitHub release binary (NOT crates.io, NOT npm)

- `fallow-rs` and `fallow` both 404 on crates.io; `fallow-rs` 404s on npm. Do not waste
  time with `cargo install` or `npx`.
- Distribution is GitHub releases with prebuilt binaries. Checked: v3.10.0 (2026-08).
- x86_64 Linux: download `fallow-linux-x64-gnu` (or `-musl`) from
  `https://github.com/fallow-rs/fallow/releases/latest`, `chmod +x`, move to `/usr/local/bin`.
  Also ships darwin/windows/aarch64 variants.
- Rust toolchain NOT required for the binary. (If ever building from source: workspace
  declares `rust-version 1.92`+; `rustup` minimal profile suffices.)
- Verify: `fallow --version`.

## CLI cheat sheet

| Command                                            | Purpose                                                                                                                                                                                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fallow audit`                                     | Diff-gated review (changed files vs merge-base with origin/main). Exit 1 on fail verdict. `--gate all` = fail on every finding in changed files. **Default scope is only changed files** — for a whole-repo scan use the subcommands. |
| `fallow dead-code`                                 | Unused code, dependency hygiene, architecture cycles.                                                                                                                                                                                 |
| `fallow dupes`                                     | Copy-paste / structural duplication. Default ignores skip many files — `--explain-skipped` to list.                                                                                                                                   |
| `fallow health`                                    | Complexity (cyclomatic/cognitive/CRAP), maintainability score, hotspots. Thresholds from config `health` (`maxCyclomatic`, `maxCognitive`, `maxCrap`, `thresholdOverrides`).                                                          |
| `fallow security`                                  | Opt-in security candidates — always verify the evidence trace before changing code.                                                                                                                                                   |
| `fallow fix`                                       | Auto-fix safe unused-code findings.                                                                                                                                                                                                   |
| `fallow viz`                                       | Interactive HTML map of the codebase.                                                                                                                                                                                                 |
| `fallow list` / `fallow inspect` / `fallow config` | Discovery / single-symbol evidence / resolved config.                                                                                                                                                                                 |

## Security false-positive pattern (verified on a real repo)

`fallow security` flags non-literal navigation targets as medium **Open redirect sinks
(CWE-601)**: `window.location.href = url`, `window.open(url, ...)`. When the URL comes from a
trusted server response — e.g. a Cloud Function returning a Stripe Checkout / Customer Portal
URL or a Firebase Storage signed URL — the sink is NOT attacker-controlled. Verify the
evidence trace (import trace → sink site → where the value originates), then treat as a
false positive; no code change. Keep this note in any cron/audit prompt so scheduled runs
don't churn code on these findings.

## Cron integration

If a scheduled audit job was created before fallow was installed, its prompt may contain a
"try installing via cargo or npx; report if unavailable" fallback. After installing the
binary, `cronjob action=update` the prompt to run `fallow audit --gate all` plus
`fallow health` / `fallow dead-code` / `fallow dupes` directly, embedding the
false-positive note above.

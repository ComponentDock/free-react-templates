# fallow-rs quick reference

Static analysis for TS/JS: dead code, duplication, complexity, security
candidates. Rust-native, very fast (milliseconds).

## Install (Linux x64)

- NOT on crates.io or npm (both 404). Distributed via GitHub releases:
  https://github.com/fallow-rs/fallow/releases — asset `fallow-linux-x64-gnu`
  (or `-musl` for static).
- `curl -sL -o /usr/local/bin/fallow <asset-url> && chmod +x /usr/local/bin/fallow`
- `fallow --version` to confirm. Rust itself is not required for the binary.

## Commands

- `fallow audit` — changed-files verdict (exit 1 on fail). Base defaults to
  the git merge-base with origin/main; `--gate all` fails on every finding in
  changed files. Purpose-built as a PR quality gate.
- `fallow health` — cyclomatic/cognitive complexity, maintainability index,
  churn hotspots. Config thresholds decide pass/fail.
- `fallow dead-code` — unused exports, dependencies, binaries; `fallow fix`
  auto-fixes safe unused-code findings.
- `fallow dupes` — copy-paste + structural duplication.
- `fallow security` — CWE candidates (open redirect sinks etc.), opt-in.
- Exit 0 even when health prints "✗ 0 above threshold" — that line is the
  healthy summary, not an issue.

## Config (.fallowrc.json)

```json
{
  "ignorePatterns": [],
  "ignoreDependencies": ["tailwindcss", "@fission-ai/openspec"],
  "ignoreUnresolvedImports": ["./firebase", "**/__/firebase/**"],
  "duplicates": { "ignore": ["apps/*/src/**"] },
  "health": {
    "maxCyclomatic": 20,
    "maxCognitive": 20,
    "maxCrap": 60,
    "ignore": ["**/__tests__/**", "**/*.test.*"],
    "thresholdOverrides": [
      {
        "files": ["src/pages/BrowsePage.tsx"],
        "functions": ["BrowsePage"],
        "maxCyclomatic": 31,
        "reason": "tracked refactor"
      }
    ]
  }
}
```

- `thresholdOverrides` sets intentional ceilings per file/function with a
  `reason` — the documented alternative to suppression.
- Unused CLIs (fallow itself, openspec, surge) are flagged by knip, not
  fallow — mirror configs (`knip ignoreBinaries`).

## False-positive discipline

Security findings are "candidates for verification": read the import trace
before changing code. URLs originating from trusted backend responses (Stripe
Checkout/Customer Portal, Firebase signed storage URLs) are safe by design.
Config files and the repo's `.fallowrc.json` may carry an explicit note so
agents don't churn on them (the firebase repo's cron prompt does this).

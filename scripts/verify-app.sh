#!/bin/bash
# Per-app verification gate (FAST_MODE, see docs/FAST_MODE.md).
# Usage: bash scripts/verify-app.sh <app-name>
# Runs typecheck + lint + 100%-coverage tests + build for ONE workspace (~2-3 min).
# The FULL gate (npm run gate) still runs in CI on merge and nightly.
set -e

APP="${1:?usage: verify-app.sh <app-name>}"
PKG="@free-react-templates/${APP}"

if [ ! -d "apps/${APP}" ]; then
  echo "error: apps/${APP} does not exist" >&2
  exit 1
fi

echo "==> verify-app: ${APP} (per-app gate)"
npm run typecheck --workspace "${PKG}"
npm run lint
# Deterministic coverage run. `vitest run --project <pkg>` with the root
# config's `test.projects` is racy in Vitest 4.1.10: the empty core-project
# instance finishes instantly and its cleanAfterRun() wipes the shared
# coverage/.tmp while this app's workers are still writing (intermittent
# "ENOENT coverage/.tmp/coverage-N.json"). Running with `--root apps/<app>`
# loads only the app's own vitest.config.ts → a single Vitest instance and a
# single coverage provider. Coverage config is passed via CLI flags (repeated
# --coverage.exclude flags — comma-joined globs don't match main.tsx/css):
npx vitest run --root "apps/${APP}" \
  --coverage.enabled=true --coverage.provider=v8 \
  --coverage.include='src/**' \
  --coverage.exclude='**/*.test.*' --coverage.exclude='**/test/**' \
  --coverage.exclude='src/main.tsx' --coverage.exclude='**/*.css' \
  --coverage.exclude='**/*.config.*' \
  --coverage.reporter=text \
  --coverage.thresholds.lines=100 --coverage.thresholds.functions=100 \
  --coverage.thresholds.branches=100 --coverage.thresholds.statements=100
npm run build --workspace "${PKG}"
echo "==> OK: ${APP} passed the per-app gate"

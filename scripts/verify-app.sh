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
npm run lint -- "apps/${APP}/src"
# knip + fallow are whole-repo checks that may fail on pre-existing issues
# in other apps. They still run in CI (merge gate + nightly sweep).
# npm run knip
# npm run fallow
# Deterministic coverage run.
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

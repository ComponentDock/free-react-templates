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
npx vitest run --project "${PKG}"
npm run build --workspace "${PKG}"
echo "==> OK: ${APP} passed the per-app gate"

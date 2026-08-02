#!/usr/bin/env bash
# Deploy one template to Surge.sh at https://<template-name>.surge.sh
#
# Usage:
#   bash scripts/deploy-template.sh <template-name>   (e.g. aurora)
#
# Requires a Surge account: run `npx surge login` once (interactive), or set
# SURGE_LOGIN / SURGE_TOKEN env vars for automation. See docs/deployment.md.
set -euo pipefail

NAME="${1:?usage: deploy-template.sh <template-name>}"
WORKSPACE="@free-react-templates/${NAME}"

echo "==> Building ${WORKSPACE}"
npm run build --workspace "${WORKSPACE}"

DIST="apps/${NAME}/dist"
if [ ! -d "${DIST}" ]; then
  echo "error: expected build output at ${DIST} (does apps/${NAME} exist?)" >&2
  exit 1
fi

# SPA fallback: Surge serves 200.html for routes that don't match a file,
# so client-side routing (React Router) works on refresh.
if [ -f "${DIST}/index.html" ]; then
  cp "${DIST}/index.html" "${DIST}/200.html"
fi

DOMAIN="https://${NAME}.surge.sh"
echo "==> Deploying ${DIST} -> ${DOMAIN}"
npx surge "${DIST}" "${DOMAIN}"
echo "==> Done: ${DOMAIN}"

---
name: surge-per-template-deploy
description: 'Deploy static sites per-project to Surge.sh subdomains.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [surge, deploy, static, hosting, frontend]
    related_skills: [vite-react-monorepo-tooling, colorlib-template-replication]
---

# Surge.sh Per-Template Deploy

Deploy each static build (Vite/React app, etc.) to its OWN Surge.sh subdomain:
`https://<project>-<name>.surge.sh`. One deployment per template/app, no shared
hosting. Used by the free-react-templates monorepo (`scripts/deploy-template.sh`,
`npm run deploy:<name>`).

## When to use

- User wants each app/template in a project deployed to its own public URL.
- Quick free static hosting with custom subdomains (no account payment needed).

## Setup (one-time)

1. Create a free account at https://surge.sh (email + password).
2. Authenticate on the machine (interactive, stores creds in `~/.netrc`):
   `npx surge login`
3. For automation (cron/CI): `npx surge token` → export
   `SURGE_LOGIN` + `SURGE_TOKEN` env vars. Surge uses those instead of prompts.

## Deploy

```bash
npm run build                     # produce dist/
cp dist/index.html dist/200.html  # SPA fallback: surge serves 200.html for unknown routes
npx surge dist https://my-project-name.surge.sh
```

Re-running the same command updates the existing deployment (no downtime).

## Automation pattern (monorepo)

A generic script takes the app name, builds its workspace, adds the 200.html
fallback, and deploys to `<prefix>-<name>.surge.sh`:

```bash
npm run build --workspace "@scope/$NAME"
cp "apps/$NAME/dist/index.html" "apps/$NAME/dist/200.html"
npx surge "apps/$NAME/dist" "https://<prefix>-$NAME.surge.sh"
```

Root package.json: `"deploy:<name>": "bash scripts/deploy-template.sh <name>"`.

## Pitfalls

- **Auth in automation:** surge CLI prompts interactively without
  `SURGE_LOGIN`/`SURGE_TOKEN` — a headless cron will hang on the prompt.
- **SPA routes:** without `200.html`, client-side routes 404 on refresh.
- **Bot detection:** surge deploys are plain static uploads; no build hooks.
- **Free tier:** ~1 GB bandwidth/day, 100 MB storage — fine for template
  demos, not for heavy media.
- Custom domains: `npx surge dist example.com` + DNS CNAME to
  `na-west1.surge.sh`.

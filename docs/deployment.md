# Deployment — Surge.sh

Every template deploys to its **own Surge.sh subdomain**:
`https://free-react-templates-<template-name>.surge.sh` (e.g. the Aurora
template → `https://free-react-templates-aurora.surge.sh`). One deployment per
template, no shared hosting.

## One-time setup

1. Create a free account at https://surge.sh (email + password).
2. Authenticate on this machine (interactive, stores credentials in
   `~/.netrc`):
   ```bash
   npx surge login
   ```
   For automation (cron jobs, CI) use a token instead:
   ```bash
   npx surge token                 # prints a token
   export SURGE_LOGIN='you@example.com'
   export SURGE_TOKEN='<token>'
   ```

## Deploy a template

```bash
npm run deploy:aurora        # builds apps/aurora and deploys to aurora.surge.sh
# generic form:
bash scripts/deploy-template.sh <template-name>
```

The script:
1. Builds the template's workspace (`npm run build --workspace @free-react-templates/<name>`).
2. Copies `dist/index.html` → `dist/200.html` (SPA fallback so client-side
   routes work on refresh).
3. Runs `npx surge apps/<name>/dist https://free-react-templates-<name>.surge.sh`.

Re-running the same command updates the existing deployment (Surge replaces
the files; no downtime).

## Adding a template

Add its script to root `package.json`:
`"deploy:<name>": "bash scripts/deploy-template.sh <name>"`

## CI/CD — automatic deploy on merge (`.github/workflows/deploy-surge.yml`)

When you **manually merge** a PR, a GitHub Action deploys the changed
template(s) automatically:

- Trigger: `pull_request` closed with `merged == true` (plus a manual
  `workflow_dispatch` with an optional `app` input for re-deploys).
- It asks the GitHub API which files the merged PR changed, extracts the app
  folder(s) (`apps/<name>/`), and runs `scripts/deploy-template.sh` for each.
- Docs-only PRs deploy nothing (the run reports it).

### Setup (one-time, required)

The action needs two **repository secrets** (Settings → Secrets and variables →
Actions):

| Secret | Value |
| --- | --- |
| `SURGE_LOGIN` | The Surge.sh account email (e.g. `webmaster@free-templates.cc`) |
| `SURGE_TOKEN` | From `npx surge token` after `npx surge login` |

Without these the deploy step fails on merge (the merge itself still succeeds —
only the action errors). Add them **before** merging the next template PR.

### Manual re-deploy

Actions → "Deploy to Surge.sh" → Run workflow → optionally set `app`
(empty = all apps).

## Notes

- Surge free tier: 1 GB bandwidth/day, 100 MB storage — fine for static
  template demos.
- Custom domains are supported (`surge dist yourdomain.com` + DNS CNAME to
  `na-west1.surge.sh`) — useful if a template ever needs a branded URL.
- Deploys are manual (or automatic via the CI workflow on PR merge); the
  pipeline cron job does NOT deploy — only the user triggers deployments.

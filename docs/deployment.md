# Deployment — Surge.sh

Every template deploys to its **own Surge.sh subdomain**:
`https://<template-name>.free.componentdock.com` (e.g. the Aurora
template → `https://aurora.free.componentdock.com`). One deployment per
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
npm run deploy:aurora        # builds apps/aurora and deploys to aurora.free.componentdock.com
# generic form:
bash scripts/deploy-template.sh <template-name>
```

The script:

1. Builds the template's workspace (`npm run build --workspace @free-react-templates/<name>`).
2. Copies `dist/index.html` → `dist/200.html` (SPA fallback so client-side
   routes work on refresh).
3. Runs `npx surge apps/<name>/dist https://<name>.free.componentdock.com`.

Re-running the same command updates the existing deployment (Surge replaces
the files; no downtime).

## Adding a template

Add its script to root `package.json`:
`"deploy:<name>": "bash scripts/deploy-template.sh <name>"`

## CI/CD — automatic deploy on merge (`.github/workflows/deploy-surge.yml`)

A GitHub Action deploys the changed template(s) automatically:

- Trigger 1 — **`push` to `main`** (a squash-merge is a push to main), which is
  the reliable trigger: the ref persists, so the run cannot be cancelled by
  `gh pr merge --delete-branch` (the old `pull_request: [closed]` trigger could,
  see `docs/adr/0004`). The workflow diffs `before..after` of the push,
  extracts the app folder(s) (`apps/<name>/`), runs the per-app gate
  (`scripts/verify-app.sh`), deploys each app, then re-probes each URL and fails
  if it is not HTTP 200. Docs-only pushes deploy nothing (the run reports it).
- Trigger 2 — **nightly fleet audit + repair** (`04:30 UTC`): every app's
  published domain is probed and the ones that answer with a Surge 404 are
  rebuilt and redeployed (4 shards, ≤ 40 apps per shard per night). This heals
  deploys that failed or were cancelled.
- Trigger 3 — **`workflow_dispatch`**: set `app` (space-separated folders, e.g.
  `aurora drift`) to deploy specific apps; leave it empty to only run the
  audit/repair job. `audit_limit` caps how many apps the repair redeploys per
  shard (default 40).

### Fleet audit by hand

```bash
bash scripts/audit-deployments.sh            # whole fleet
bash scripts/audit-deployments.sh --shard 0 --total 4 --limit 5 --jobs 24
```

stdout is TSV — `missing<TAB><app>` (never published → Surge 404) and
`insecure<TAB><app>` (published, but the host serves Surge's shared
`CN=*.surge.sh` certificate, so browsers warn on the `https://` link) — with a
`live / missing / insecure` summary on stderr. `insecure` hosts cannot be fixed
from this repo: the certificate is issued by Surge/DNS, not by the build.

### Setup (one-time, required)

The action needs two **repository secrets** (Settings → Secrets and variables →
Actions):

| Secret        | Value                                                           |
| ------------- | --------------------------------------------------------------- |
| `SURGE_LOGIN` | The Surge.sh account email (e.g. `webmaster@free-templates.cc`) |
| `SURGE_TOKEN` | From `npx surge token` after `npx surge login`                  |

Without these the deploy step fails on merge (the merge itself still succeeds —
only the action errors). Add them **before** merging the next template PR.

### Manual re-deploy

Actions → "Deploy to Surge.sh" → Run workflow → set `app` to the folder(s) to
deploy (space-separated). Leave `app` empty to run only the fleet audit +
repair; `audit_limit` caps the number of apps repaired per shard.

## Notes

- Surge free tier: 1 GB bandwidth/day, 100 MB storage — fine for static
  template demos.
- Custom domains are supported (`surge dist yourdomain.com` + DNS CNAME to
  `na-west1.surge.sh`) — useful if a template ever needs a branded URL.
- Deployments are automatic (the CI workflow above, on push to `main` plus the
  nightly audit repair). The pipeline's template runs never deploy by hand: they
  merge, and the Action publishes.
- **TLS:** a custom domain only serves a certificate for itself once Surge has
  provisioned one. Hosts still on Surge's shared `CN=*.surge.sh` certificate
  produce a browser warning on the `https://` link even though the site
  responds (see `scripts/audit-deployments.sh` — the `insecure` class).

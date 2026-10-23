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
  (`scripts/verify-app.sh`), deploys each app, then probes each URL and fails
  only if the site is not published **anywhere** (see `missing` below — the
  probe distinguishes a failed deploy from a branded edge that cannot serve TLS,
  so an edge outage no longer turns every merge into a red run). A renamed app
  appears in the diff under its OLD and NEW folder (`petcare` → `pawly`), so the
  detected list is filtered to folders that still hold an `apps/<name>/package.json`
  — otherwise the gate is asked to verify the vanished folder, fails, and the
  rename never deploys (that is what happened to `vetly`, #1810, and `pawly`,
  #1812 — both recovered with
  `gh workflow run deploy-surge.yml -f app="pawly vetly"`).
- Trigger 2 — **nightly fleet audit + repair** (`04:30 UTC`): every app's
  published domain is probed and the ones that answer with a Surge 404 are
  rebuilt and redeployed (4 shards, ≤ 40 apps per shard per night). This heals
  deploys that failed or were cancelled. Hosts that are healthy at the Surge
  origin but unreachable through the branded domain are **not** redeployed (a
  publish cannot fix them) — the job reports them and fails with the DNS/TLS
  diagnosis instead of burning the daily deploy budget.
- Trigger 3 — **`workflow_dispatch`**: set `app` (space-separated folders, e.g.
  `aurora drift`) to deploy specific apps; leave it empty to only run the
  audit/repair job. `audit_limit` caps how many apps the repair redeploys per
  shard (default 40).

### Fleet audit by hand

```bash
bash scripts/audit-deployments.sh            # whole fleet
bash scripts/audit-deployments.sh --shard 0 --total 4 --limit 5 --jobs 24
bash scripts/audit-deployments.sh --apps "aurora drift" --fail-on-missing
```

stdout is TSV, one line per host that is not plain `live`, with a
`live / missing / insecure / edge-live / edge-insecure` summary on stderr:

| class           | meaning                                                                | fixable by a deploy?         |
| --------------- | ---------------------------------------------------------------------- | ---------------------------- |
| `live`          | 200 with a certificate valid for the host                              | —                            |
| `insecure`      | 200, but Surge's shared `CN=*.surge.sh` cert                           | yes (re-publish)             |
| `missing`       | no content at the Surge origin (never published / deploy lost)         | yes (re-publish)             |
| `edge-live`     | healthy at the Surge origin, no HTTP at all through the branded domain | **no** — DNS/TLS edge        |
| `edge-insecure` | only the origin answers, and only with `-k` (shared cert)              | only after the edge is fixed |

The `edge-*` classes are what a **fleet-wide** outage looks like: every host
returns `sslv3 alert handshake failure` and, without the origin fallback, would
be miscounted as `missing` — which makes the repair job redeploy thousands of
healthy sites. Probe the origin before concluding anything:

```bash
dig +short na-west1.surge.sh A                       # origin IP
curl -sS --resolve <app>.free.componentdock.com:443:<ip> \
     -o /dev/null -w '%{http_code} ssl_verify_result=%{ssl_verify_result}\n' \
     https://<app>.free.componentdock.com/
```

`200` + `ssl_verify_result=0` at the origin while the branded domain fails the
handshake means the content is fine and the **edge** is missing a certificate
for the hostname — for `*.free.componentdock.com` behind Cloudflare that is the
second-level-wildcard trap (Universal SSL covers `*.componentdock.com` only).
Per-domain certificates are **not** issued while the record is proxied
(measured 2026-10-22: publish succeeded, origin still `CN=*.surge.sh` 60 s
later), so fix the edge first, then re-publish the `insecure` /
`edge-insecure` hosts one by one (`surge apps/<app>/dist https://<app>.<zone>`,
rate-limited to ≈150 publishes/day).

### Measured 2026-10-23 — the edge outage is current, and the obvious fallbacks do not work

Re-measured after the batch-26 merge (2,857 rows done, 1,703 apps, so the fleet
was static; nothing had been wrongly published):

- `scripts/audit-deployments.sh` over 40 random apps: **0 `live`**, 27
  `edge-insecure`, 13 `edge-live`. The 12 batch-26 apps: same classes, 0
  `missing` — the content is at the origin, only the branded TLS edge is broken.
- `http://<app>.free.componentdock.com` answers `301 https://…` and TLS then
  fails at SNI with `sslv3 alert handshake failure` (Alert 40) for HTTP/1.1 and
  HTTP/2, TLS 1.2 and 1.3. A WAF/blocked-IP would complete the handshake and
  return 1020 — this is certificate selection, so it is the missing
  second-level wildcard, not egress filtering.
- Fallback **`<app>.componentdock.com` does not resolve at all** (`NXDOMAIN`, no
  wildcard on the apex) — it would need a new proxied wildcard *and* 1,703
  re-publishes, so it is not a cheap alternative.
- Fallback **`free-react-templates-<app>.surge.sh` only exists for some
  projects** (8/40 sampled: `volt`, `lodgely`, `aegis`, `jobfield`, `altruist`,
  `appru`, `blaze`, `roam`); the rest 404. Not a usable public URL scheme.

So the only fix is on the Cloudflare side (Total TLS / advanced certificate for
`*.free.componentdock.com`), which needs a zone-scoped API token. Until then the
marketplace's 1,704 demo links are broken in browsers while R2 downloads
(`downloads.componentdock.com`) keep working. Do **not** answer this by
re-publishing the fleet: every host is already at the origin.

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

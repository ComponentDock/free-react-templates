# ADR-0004: Deploy on push + self-healing deployment audit

**Status:** Accepted · **Date:** 2026-10-13

## Context

Templates are merged with `gh pr merge --squash --delete-branch` and deployed by
`.github/workflows/deploy-surge.yml`. That workflow triggered on
`pull_request: [closed]`, which runs against the _PR branch_ ref — deleting the
branch right after the merge cancels the in-flight run. Nothing retried, so a
cancelled or failed run left the template merged to `main` but never published.

Measured on 2026-10-13 (`gh api .../actions/runs`, all 1,790 deploy runs):

| conclusion | runs  |
| ---------- | ----- |
| success    | 1,049 |
| cancelled  | 503   |
| failure    | 238   |

Fleet audit of the 1,703 published links (`scripts/audit-deployments.sh`):

| state    | count | meaning                                                                                                                |
| -------- | ----- | ---------------------------------------------------------------------------------------------------------------------- |
| live     | 834   | HTTP 200 + certificate valid for the host                                                                              |
| insecure | 728   | HTTP 200, but the host serves Surge's shared `CN=*.surge.sh` cert → browser certificate warning on the `https://` link |
| missing  | 141   | Surge 404 — the app was never published (dead public link)                                                             |

## Decision

- **Trigger the deploy on `push` to `main`** (a squash-merge is a push to main;
  the ref persists) with the changed apps computed from the push diff
  (`git diff --name-only "$before" "$after"` → `apps/<name>`). Falls back to the
  commit's parent when `before` is missing/all-zeros.
- **Keep the per-app gate** (`scripts/verify-app.sh`) before deploying, plus a
  `packages/ui` verification when the push touched the shared package.
- **Verify the result**: after deploying, each app's URL is re-probed and the
  job fails if it is not HTTP 200 — a deploy that reported success but left a
  404 is a failure.
- **Self-healing audit** (`.github/workflows/deploy-surge.yml` job `audit`,
  nightly `04:30 UTC` + manual dispatch): `scripts/audit-deployments.sh` probes
  every app's published domain, classifies `missing` / `insecure` / `live`, and
  the job rebuilds and redeploys the `missing` ones (sharded 4 ways,
  `--limit 40` per shard per night). A cancelled or failed deploy therefore
  heals itself within a day instead of leaving a dead link forever.
- The repair path rebuilds with `npm run build` (`tsc --noEmit && vite build`),
  so type-broken code can never be published even without the full test gate;
  the nightly gate keeps the test contract honest.

## Consequences

- 141 dead links repair themselves on the next audit run; new merges deploy
  reliably because the trigger no longer races branch deletion.
- `workflow_dispatch` now means "deploy these apps" (`app`) and/or "run the
  audit with this cap" (`audit_limit`); an empty `app` no longer means
  "redeploy all ~1,700 apps".
- The fleet's live state is measurable on demand
  (`bash scripts/audit-deployments.sh`), instead of only discoverable by
  clicking a link and finding a 404.
- The 728 `insecure` hosts are **not** fixable from this repo: the certificate
  a host serves is issued by Surge/DNS, not by the build. The audit reports them
  (job summary) so the fleet state is visible; fixing them needs Surge-side
  (re-)provisioning of per-domain certificates — `aurora.free.componentdock.com`
  shows a correctly issued Let's Encrypt certificate, so the mechanism does work
  for some domains.

## Alternatives considered

- **Keep `pull_request: [closed]` and stop deleting the branch:** rejected — it
  makes every merge slower and still leaves the workflow racing ref deletion for
  squash merges, and manual merges without a PR would deploy nothing.
- **Retry the deploy job on failure only:** rejected — cancellation is not a
  failure GitHub retries, and the real gap was that nothing ever compared
  `main` against what is actually published.
- **Run the audit on every push:** rejected — probing ~1,700 domains plus
  rebuilding is only worth doing when something could have been lost; changed
  apps are already deployed on push.

---
name: github-org-administration
description: 'Bulk GitHub org admin: classify and delete repos at scale.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [GitHub, Organizations, Bulk-Operations, Repo-Administration]
    related_skills: [github-repo-management, github-auth, github-pr-workflow]
---

# GitHub Organization Administration

Class-level companion to the bundled `github-repo-management` / `github-auth` skills for org-wide administration: inventorying hundreds of repos, classifying them, and bulk-deleting — plus the auth-scope pitfalls that block these operations.

## Prerequisites

- `gh` authenticated (see `github-auth` skill; device flow works headless — but read the scope pitfall below)
- Org **admin** membership for write ops: `gh api /user/memberships/orgs/<org> --jq .role`

## Auth Scope Pitfalls (device-flow tokens)

`gh auth login --web` grants only `gist`, `read:org`, `repo`. Both of these then fail with **403** despite org-admin membership:

| Operation                        | Needed scope  | Error you'll see                       |
| -------------------------------- | ------------- | -------------------------------------- |
| `DELETE /repos/{org}/{repo}`     | `delete_repo` | "Must have admin rights to Repository" |
| Member/team/org-settings changes | `admin:org`   | 403 / 404 on the org endpoints         |

Add scopes without re-logging-in (same one-time-code device flow):

```bash
printf '\n' | gh auth refresh -h github.com --scopes delete_repo
```

Verify current scopes: `gh auth status` (Token scopes line).

## Inventorying an Org

```bash
# All repos (paginate 100/page until empty)
for p in 1 2 3 ...; do
  gh api "/orgs/$ORG/repos?per_page=100&page=$p" --jq '.[] | {name, visibility, size, created_at, pushed_at, default_branch}'
done > /tmp/org-repos.jsonl

# Members, teams, org profile
gh api "/orgs/$ORG/members?per_page=50" --jq '.[] | .login'
gh api "/orgs/$ORG/teams" --jq '.[] | .name'
gh api "/orgs/$ORG" --jq '{name, description, public_repos, total_private_repos}'
```

## Bulk API Calls: Parallelize, and EXPORT the Token

Per-repo `gh api` subprocess calls are ~1s each — 1000 repos = 15+ min (times out). Use parallel curl instead (~1-2 min at `-P 16`).

**#1 bug:** `TOKEN=$(gh auth token)` without `export` → every xargs subshell gets an empty token → all calls return 401 "Bad credentials" (and the files they wrote contain error JSON — always spot-check a sample body, not just exit codes).

```bash
export TOKEN=$(gh auth token)
cat /tmp/repo-list.txt | xargs -P 16 -I{} bash -c '
  code=$(curl -s -o /dev/null -w "%{http_code}" -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$ORG/{}")
  [ "$code" != "200" ] && echo "FAIL $code {}" >> /tmp/failures.log
' _
```

## Classifying Repos Before Deletion (irreversible!)

**Never judge by size alone** — a 84KB default scaffold and an 84KB real template look identical. Fingerprint each repo's git tree:

- Fetch: `GET /repos/{org}/{repo}/git/trees/{default_branch}?recursive=1` (default branch from repo metadata, NOT hardcoded `main`)
- **Default `create-next-app` scaffold fingerprint:** `src/pages/index.tsx` = 3618 bytes, `package-lock.json` = 96760 bytes, boilerplate `public/next.svg` + `thirteen.svg`, ~20 files total, identical README/package.json sizes
- **Bare shell:** only README/package.json/next.config.js + a CI workflow, no `src/` at all
- **Real template:** custom components dir, non-default `index.tsx` size, real dependency list

Safety rules:

- Never include **public** repos in a deletion list
- Never include org **`.github*`** repos (org config / community files) or unrelated real projects
- Get **explicit user confirmation** (count + samples + keep-list) before the first delete — use a clarify prompt
- Log every HTTP code; `204` = deleted, anything else = investigate

Full recipe with a ready-to-run classification script: `references/bulk-repo-classification.md`.

## Delete

```bash
gh repo delete $ORG/$REPO --yes
# bulk (parallel):
cat /tmp/delete-list.txt | xargs -P 16 -I{} bash -c '
  code=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$ORG/{}")
  [ "$code" != "204" ] && echo "FAIL $code {}" >> /tmp/delete-failures.log
' _
```

## Verify after deletion (never skip)

Re-count the org and list what remains; compare against the keep-list. A leftover count above the keep-list size means some deletes failed silently:

```bash
gh api /orgs/$ORG --jq '{public_repos, total_private_repos}'
gh repo list $ORG --limit 100 --json name,visibility --jq '.[] | "\(.name) [\(.visibility)]"' | sort
```

On mismatch, inspect `/tmp/delete-failures.log` (HTTP codes; `204` = deleted) and retry only the failed names. In practice a bulk run can report "fail: N" when the real cause was a missing scope (403, see the scope table above) or an unexported token (401) — the verify step catches both before you tell the user it's done.

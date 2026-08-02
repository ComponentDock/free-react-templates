---
name: github-org-bulk-operations
description: 'Bulk GitHub org cleanup: inventory, classify, delete.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos]
metadata:
  hermes:
    tags: [github, orgs, bulk, cleanup, auth]
    related_skills: [github-repo-management, github-auth]
---

# GitHub Org Bulk Operations

Inventory, classify, and clean up orgs with hundreds to thousands of repos
(bulk imports, template farms, placeholder scaffolds). The bundled
`github-repo-management` skill covers single-repo work; this covers scale.

## Headless auth (no TTY)

- Device-flow login without a PTY (interactive `gh auth login` hangs):
  `printf 'Y\n\n' | gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key`
  → prints a one-time code the user enters at github.com/login/device.
- After login, run `gh auth setup-git` so `git push` uses the gh credential
  helper (without it: "could not read Username for 'https://github.com'").
- **Deleting repos requires the `delete_repo` scope**, which device flow does
  NOT grant (only `gist`, `read:org`, `repo`). `DELETE /repos/...` then fails
  with 403 "Must have admin rights to Repository". Add the scope with a second
  device-code round trip: `printf '\n' | gh auth refresh -h github.com --scopes delete_repo`
  — the user must authorize again; verify with `gh auth status | grep scopes`.

## Enumerate fast: parallel API calls

Sequential `gh api` per repo times out on ~1000 repos (600s+). Two-phase:

```bash
# 1. Metadata, paginated
for p in 1 2 3; do
  gh api "/orgs/$OWNER/repos?per_page=100&page=$p" \
    --jq '.[] | {name, visibility, size, default_branch, created_at, pushed_at}'
done > repos.jsonl

# 2. Per-repo default-branch git trees, 16 parallel workers
export TOKEN=$(gh auth token)   # MUST export — subshells don't inherit plain vars
cat repo-branches.tsv | xargs -P 16 -n 2 bash -c '
  curl -s -o "/tmp/trees/$1.txt" -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$OWNER/$1/git/trees/$2?recursive=1"' _
```

**Pitfall:** `TOKEN=$(gh auth token)` without `export` → `bash -c` subshells
get an empty token → every request 401 "Bad credentials" while the outer shell
still works. After any bulk fetch, grep the output dir for
`"Bad credentials"`/`"Not Found"` bodies before trusting the data.

## Classify before deleting

- Repo size alone misleads (scaffold families share near-identical sizes).
- Compare trees against the scaffold fingerprint: untouched create-next-app
  repos share an identical `package-lock.json` byte size (96,760 for that era)
  and a default `src/pages/index.tsx` size (3,618). Also catch "bare" repos
  (≤6 files, no src/).
- Always inspect 2–3 trees by hand first; never bulk-classify blind.
- Keep out of the delete list: public repos, `.github`-style config repos,
  real projects (chrome extensions etc.), anything the user names.
- Present the classified list and get explicit user confirmation — deletion
  is irreversible.

Full recipe: `references/bulk-repo-cleanup.md`.

## Delete in bulk

```bash
export TOKEN=$(gh auth token)
cat delete-list.txt | xargs -P 16 -I{} bash -c '
  code=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE \
    -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$OWNER/{}")
  [ "$code" = "204" ] && echo "{}" >> ok.log || echo "FAIL $code {}" >> fail.log' _
```

Expect 204 per repo; verify afterwards by re-listing the org and comparing to
the keep-list (`gh api /orgs/$OWNER --jq '{public_repos, total_private_repos}'`).

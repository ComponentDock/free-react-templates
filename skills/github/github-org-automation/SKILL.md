---
name: github-org-automation
description: 'Headless GitHub org automation: auth, scopes, bulk repo ops.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [GitHub, gh-cli, org, automation, bulk-operations, device-flow]
    related_skills: [github-auth, github-repo-management, web-catalog-scraping]
---

# GitHub Org Automation (Headless)

Automating GitHub organization operations from a headless agent session (VPS,
no browser): authenticating without sharing tokens, adding scopes, wiring git
credentials, and running bulk repo inventory/classification/deletion safely.

## Trigger

- User asks to "manage my GitHub org", delete/archive many repos, or audit an org
- Any bulk GitHub API work (100s–1000s of repos) that needs parallel fetching

## 1. Headless Authentication (Device Flow — no token sharing)

When the user is on a different machine than the agent, use gh's device flow so
the user authorizes in their own browser:

```bash
# Piped answers handle the interactive prompts headlessly. Run in a background
# process, then read the one-time code from its output:
printf 'Y\n\n' | gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key
# Output: "! First copy your one-time code: XXXX-XXXX" + https://github.com/login/device
# → send the code to the user; code expires in ~15 min
```

**CRITICAL after device login:** run `gh auth setup-git`. Device flow configures
gh but does NOT install git's credential helper — without it `git push` fails
with `fatal: could not read Username for 'https://github.com'`.

**Add scopes later** without a full re-login (same device-code flow):

```bash
printf '\n' | gh auth refresh -h github.com --scopes delete_repo
```

**Scope gotcha — deleting repos:** a device-flow token starts with only
`gist, read:org, repo`. `DELETE /repos/{owner}/{repo}` requires the **`delete_repo`**
scope, or it returns `403 Must have admin rights to Repository` even for org
admins. Always `gh auth refresh --scopes delete_repo` before bulk deletion.
Check current scopes with `gh auth status`.

## 2. Org Inventory

```bash
gh api /orgs/<org> --jq '{public_repos, total_private_repos}'
gh api /user/memberships/orgs/<org> --jq '{state, role}'   # confirm admin
# Full repo list (paginated), saved for analysis:
for p in 1 2 3 ...; do
  gh api "/orgs/<org>/repos?per_page=100&page=$p" --jq '.[] | {name, visibility, size, created_at, pushed_at, default_branch}' >> repos.jsonl
done
```

## 3. Bulk Classification (what is a placeholder?)

For hundreds/thousands of repos, classify by **content fingerprint**, not size:
fetch each repo's git tree and match known placeholder signatures.

```bash
# Parallel tree fetch — TOKEN MUST BE EXPORTED (see pitfall):
export TOKEN=$(gh auth token)
cat repo-branches.tsv | xargs -P 16 -n 2 bash -c '
  code=$(curl -s -o "/tmp/trees/$1.txt" -w "%{http_code}" \
    -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/<org>/$1/git/trees/$2?recursive=1")
' _
```

Known placeholder signatures observed in the wild:

- **Default `create-next-app` scaffold**: `src/pages/index.tsx` = 3618 bytes AND
  `package-lock.json` = 96760 bytes (identical across repos), boilerplate
  `public/vercel.svg` / `thirteen.svg`, default README
- **Bare shells**: ≤6 files, no `src/`, just README + package.json + workflow

`git/trees/{branch}?recursive=1` returns every blob with size — one call per repo
(~1000 calls is fine within the 5000/hr core limit; parallelize 16-wide).

## 4. Bulk Deletion

```bash
cat delete-list.txt | xargs -P 16 -I{} bash -c '
  code=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE \
    -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/<org>/$1")
  [ "$code" = "204" ] && echo "$1" >> ok.log || echo "FAIL $code $1" >> failures.log
' _ {}
```

- Success = **204** (no body). Log failures; never assume.
- **Verify after**: re-query org counts (`public_repos`, `total_private_repos`)
  and list remaining repos — confirm the keep-list exactly, not just the count.

## Pitfalls

- **Unexported token in xargs subshells** → every request sends `Authorization: token ` (empty)
  → all files written with `401 Bad credentials` JSON. Files still exist and
  `curl -s` suppresses errors, so **validate file CONTENT** (`grep -c '"tree"'`),
  not file existence or HTTP-code logging alone.
- Deleting is **irreversible** — always classify first, present the list +
  counts to the user, and get explicit confirmation before the delete loop.
- `gh repo create` with `--add-topic`/`--clone` can trip command parsers; split
  creation from later topic updates if a command is flagged.
- Device-flow tokens expire/rotate; `gh auth status` shows current scopes.

## Verify

```bash
gh auth status                      # logged in + scopes
gh api /orgs/<org> --jq '{public_repos, total_private_repos}'  # after deletion
```

See `references/bulk-repo-classification.md` for the full working pipeline
(inventory → trees → classify → delete) used to clean a 1,005-repo org.

---
name: github-bulk-repo-ops
description: 'Bulk GitHub ops: parallel API, deletion, scopes, cleanup.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [github, gh-cli, org-admin, cleanup, bulk-ops, rest-api]
    related_skills: [github-auth, github-repo-management]
---

# Bulk GitHub Repository Operations

Large-scale GitHub operations — deleting/archiving hundreds of repos, auditing
an org's repo inventory, parallel REST calls — done fast and safely. Built while
cleaning 994 placeholder repos out of a 1,005-repo org. Complements the bundled
github-repo-management skill (which covers single-repo ops only).

## Auth gotchas (the ones that burn you)

- A device-flow `gh auth login` grants `gist, read:org, repo` but **NOT
  `delete_repo`**. `DELETE /repos/{owner}/{repo}` then fails with
  `403 Must have admin rights to Repository` even for org admins. Fix without
  re-login: `gh auth refresh -h github.com --scopes delete_repo` (another
  device-flow one-time code; scope shows in `gh auth status`).
- After `gh auth login`, git still cannot push until you run
  `gh auth setup-git` — without it: `fatal: could not read Username for
'https://github.com'`.
- Headless device flow: `printf 'Y\n\n' | gh auth login --hostname github.com
--git-protocol https --web --skip-ssh-key` — piping stdin skips the
  "Authenticate Git?" and "Press Enter" prompts that hang a bare PTY run.
- **export TOKEN before xargs**: subshells spawned by `xargs` lose unexported
  variables. `TOKEN=$(gh auth token)` then `export TOKEN` — otherwise every
  curl returns a silent 401 "Bad credentials" and you waste a full pass.

## Identify placeholders before deleting (JS/TS repos)

A repo that is only the default scaffold is a placeholder. Signatures:

- create-next-app default scaffold: `src/pages/index.tsx` = **3,618 bytes**
  AND `package-lock.json` = **96,760 bytes** (identical across repos).
- Bare shell: only README/package.json/next.config.js + a workflow, no `src/`.
  Inspect with one call per repo:
  `GET /repos/{owner}/{repo}/git/trees/{branch}?recursive=1` (use the repo's
  `default_branch` from metadata). For hundreds of repos, fetch trees in parallel
  (see pattern below) and classify locally by file-size signature.

## Parallel bulk API pattern

```bash
export TOKEN=$(gh auth token)   # must be exported (see auth gotchas)
# one repo per line
cat repos.txt | xargs -P 16 -n 1 bash -c '
  code=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE \
    -H "Authorization: token $TOKEN" "https://api.github.com/repos/OWNER/$1")
  [ "$code" != "204" ] && echo "FAIL $code $1" >> failures.log || echo "$1" >> ok.log
' _
```

`204` = deleted. The same pattern works for any read endpoint (trees, repos,
metadata) — just change the method/path.

## Safety rules

- **Always confirm the deletion list with the user before executing** — repo
  deletion is irreversible and has no trash bin.
- Classify first, present counts + samples + the keep-list, then delete only
  after explicit confirmation (include borderline cases as a separate choice).
- Verify after bulk ops:
  `gh api /orgs/{org} --jq '{public_repos,total_private_repos}'` and
  `gh repo list {org}` — diff against your keep-list.
- Never bulk-delete public repos without calling them out individually.
- Rate limits: ~5,000 core requests/hr per token; parallel fetches of 1,000+
  resources are fine, sequential subprocess-per-call is the slow path
  (spawn `xargs -P 16` with curl, not a Python loop calling gh).

## References

- `references/placeholder-classification.md` — worked example of classifying
  create-next-app scaffolds via git-trees signatures (sizes, sample trees,
  borderline cases).

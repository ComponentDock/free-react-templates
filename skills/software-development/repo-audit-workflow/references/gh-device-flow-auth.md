# Headless GitHub Device-Flow Login (no token over chat)

When a machine has no GitHub credentials and the user is remote (chat), the device
flow is the best UX: `gh` prints a one-time code, the user enters it at
https://github.com/login/device in their own browser, and no token ever crosses chat.

## Working pattern

```bash
# Pipe the answers: Y = configure git credentials, blank Enter = skip opening a browser.
# NOTE: an interactive PTY `gh auth login` can stall at the first prompt
# ("Authenticate Git with your GitHub credentials? (Y/n)") and not advance on submit —
# piped stdin is the reliable path.
printf 'Y\n\n' | gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key
```

Run as a background process, poll output for the code:

```
! First copy your one-time code: XXXX-XXXX
Open this URL to continue in your web browser: https://github.com/login/device
```

Send the code + URL to the user (code expires in ~15 min). The process exits with
`✓ Authentication complete.` and `Logged in as <login>` — confirm via poll, then
`gh auth status`.

## After login: run `gh auth setup-git` or pushes still fail

`gh auth login` prints `✓ Configured git protocol`, but that does NOT by itself make
`git push` work — the credential helper is only registered by `gh auth setup-git`:

```bash
gh auth setup-git   # registers credential.https://github.com.helper -> gh auth git-credential
git config --global --get-regexp "credential\."   # verify the helper lines exist
```

Without it, the first push fails with `fatal: could not read Username for 'https://github.com': No such device or address` even though `gh auth status` shows a valid login. Session evidence (2026-08-01): commit succeeded, push failed with exactly that error, `gh auth setup-git` fixed it immediately.

## Adding scopes to an existing login

Rather than re-logging-in, refresh with extra scopes (same device-flow code, no re-entry of the whole flow):

```bash
printf '\n' | gh auth refresh -h github.com --scopes delete_repo
```

e.g. `delete_repo` (bulk repo deletion — default scopes lack it, DELETE returns 403 "Must have admin rights to Repository") or `admin:org`.

## Scope caveat (the trap that bites org work)

The default device flow grants only `gist, read:org, repo`. That covers repo work and
READING org membership — but org admin (members, teams, org settings) needs `admin:org`.
Re-auth with explicit scopes for that:

```bash
printf 'Y\n\n' | gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key --scopes repo,workflow,admin:org
```

## Scope → capability map (classic tokens)

| Scope       | Enables                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `repo`      | Full repo management: create/edit/archive, contents, repo-level secrets, branch protection, issues/PRs — incl. private repos |
| `workflow`  | Push/modify GitHub Actions workflow files                                                                                    |
| `read:org`  | Read org profile, list members/teams (roles visible); no writes                                                              |
| `admin:org` | Manage members, teams, org-level settings & secrets                                                                          |

## Checking what a login actually got

```bash
gh auth status                      # shows token scopes (e.g. 'gist', 'read:org', 'repo')
gh api user --jq '{login, name}'
gh api /user/memberships/orgs/<org> --jq '{state, role}'   # your role in an org (admin/member)
```

## Org overview in one shot (read:org is enough)

```bash
gh repo list <org> --limit 100 --json name,visibility,updatedAt,isArchived --jq '.[] | "\(.name) [\(.visibility)] arch=\(.isArchived)"'
gh api /orgs/<org> --jq '{name, description, public_repos, total_private_repos}'
gh api "/orgs/<org>/members?per_page=50" --jq '.[].login'
gh api "/orgs/<org>/teams?per_page=50" --jq '.[].name'
```

## Session evidence (2026-08-01)

- PTY `gh auth login` stalled at the first prompt; `submit` did not advance it; killed and
  re-ran with `printf 'Y\n\n' |` — printed the code immediately.
- Default scopes were `gist, read:org, repo`; org membership check showed role=admin but
  member/team/org-settings writes would have 403'd without `admin:org`.
- Device-flow code expires in ~15 minutes — share it promptly and poll for completion.

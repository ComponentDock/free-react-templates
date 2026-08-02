# Bulk Repo Classification Pipeline (worked example)

Full working pipeline used to clean a 1,005-repo GitHub org (996 private
placeholder repos deleted, 0 failures). Repos were private Next.js "starter
template" repos — all untouched `create-next-app` scaffolds from a bulk import.

## 1. Inventory (paginated, to JSONL)

```bash
for p in $(seq 1 11); do
  gh api "/orgs/<org>/repos?per_page=100&page=$p" \
    --jq '.[] | {name, visibility, size, created_at, pushed_at, default_branch, archived, fork}' \
    2>/dev/null
done > /tmp/org-repos.jsonl
```

Key signals seen: 991 repos at exactly **84 KB**, 7 at <10 KB, all created within
3 days — bulk import smell. Big repos (≥100 KB) were the real ones.

## 2. Fetch git trees (parallel)

```bash
# repo-branches.tsv: name<TAB>default-branch, one per line
export TOKEN=$(gh auth token)     # MUST be exported — see pitfall
cat /tmp/repo-branches.tsv | xargs -P 16 -n 2 bash -c '
  name="$1"; branch="$2"
  code=$(curl -s -o "/tmp/trees/${name}.txt" -w "%{http_code}" \
    -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/<org>/${name}/git/trees/${branch}?recursive=1")
  [ "$code" != "200" ] && echo "FAIL $code $name" >> /tmp/trees/failures.log
' _
# VALIDATE CONTENT, not just files:
grep -l '"truncated": false' /tmp/trees/*.txt | wc -l   # should == repo count
grep -l "Bad credentials" /tmp/trees/*.txt | wc -l      # must be 0
```

**Pitfall that cost a full re-run:** the first attempt used `TOKEN=$(gh auth
token)` WITHOUT export. Every subshell got an empty Authorization header → all
files contained `401 Bad credentials` JSON, every repo "failed", yet files
existed and `-s` hid the errors. Only content inspection caught it.

## 3. Classify by fingerprint

```python
# per repo: parse tree JSON -> {path: size}
DEFAULT_INDEX_TSX = 3618   # src/pages/index.tsx in default create-next-app
DEFAULT_LOCK      = 96760  # package-lock.json in default scaffold

default_scaffold = (idx == DEFAULT_INDEX_TSX and lock == DEFAULT_LOCK)
bare             = n_files <= 6 and lock == DEFAULT_LOCK and 'src/pages/index.tsx' not in files
placeholder      = (default_scaffold or bare) and not public
```

Also inspect borderline repos manually (tree dump of blob paths+sizes) before
finalizing the list. Watch for: repos whose default branch isn't `main`
(fetch by actual `default_branch` from metadata), org config repos
(`.github-private`), and real small projects (a chrome extension, etc.).

## 4. Delete + verify

```bash
export TOKEN=$(gh auth token)
cat /tmp/delete-list.txt | xargs -P 16 -I{} bash -c '
  code=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE \
    -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/<org>/$1")
  [ "$code" = "204" ] && echo "$1" >> /tmp/delete-ok.log \
                      || echo "FAIL $code $1" >> /tmp/delete-failures.log
' _ {}
# verify:
gh api /orgs/<org> --jq '{public_repos, total_private_repos}'
gh repo list <org> --json name,visibility --jq '.[] | "\(.name) [\(.visibility)]"' | sort
```

**Scope requirement:** the device-flow token needs `delete_repo` scope or every
DELETE returns `403 Must have admin rights to Repository`.
Fix: `printf '\n' | gh auth refresh -h github.com --scopes delete_repo`
(another device-code prompt to the user), then re-run — no other changes needed.

## Numbers from the worked example

- 1,005 repos → 994 placeholders deleted (987 default scaffolds + 5 bare + 2 borderline)
- 11 kept (9 public real templates + 2 private: org config + real project)
- ~1,000 tree fetches: 16-wide parallel ≈ 2–3 min
- Deletes: 994 × 204, 0 failures, verified by org count (996→2 private)

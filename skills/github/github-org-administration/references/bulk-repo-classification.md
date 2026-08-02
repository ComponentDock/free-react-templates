# Bulk Repo Classification Recipe (proven on Free-Templates-cc, 1,005 repos)

End-to-end pattern for "delete the placeholder repos" on an org with hundreds of repos. All steps verified in production.

## 1. Inventory (fast — ~11 paginated calls for 1,005 repos)

```bash
for p in $(seq 1 11); do
  gh api "/orgs/$ORG/repos?per_page=100&page=$p" \
    --jq '.[] | {name, visibility, size, created_at, pushed_at, default_branch, archived, fork}' 2>/dev/null
done > /tmp/org-repos.jsonl
```

Spot-check immediately: `wc -l` vs expected count, size distribution, and created-date histogram (bulk imports cluster on one date — a strong signal).

## 2. Fetch git trees in parallel (the 600s trap)

Sequential `gh api .../git/trees/...` for ~1,000 repos **times out at 600s**. Parallel curl with an EXPORTED token finishes in ~1-2 min:

```bash
export TOKEN=$(gh auth token)   # export is REQUIRED — subshells don't inherit plain assignments
mkdir -p /tmp/trees
cat /tmp/repo-branches.tsv | xargs -P 16 -n 2 bash -c '
  name="$1"; branch="$2"; out="/tmp/trees/${name}.txt"
  code=$(curl -s -o "$out" -w "%{http_code}" -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$ORG/${name}/git/trees/${branch}?recursive=1")
  [ "$code" != "200" ] && echo "FAIL $code $name" >> /tmp/trees/failures.log
' _
```

Verify: `grep -l '"truncated": false' /tmp/trees/*.txt | wc -l` — every file must be a valid tree JSON, not an error body. (First attempt failed silently: all 1,004 files contained `{"message":"Bad credentials"}` because the token wasn't exported. Always sample file content, not just file count.)

Note: `repo-branches.tsv` = `name<TAB>default_branch` built from the inventory (`r.get('default_branch') or 'main'`). Some repos (e.g. `.github-private`) need their own fetch if the branch differs.

## 3. Classify with the scaffold fingerprint

Classification script (writes /tmp/classification.json):

```python
DEFAULT_INDEX_TSX = 3618   # src/pages/index.tsx in untouched create-next-app
DEFAULT_LOCK = 96760       # package-lock.json in untouched create-next-app

def parse_tree(path):
    data = json.load(open(path))
    return {i['path']: i.get('size', 0) for i in data.get('tree', []) if i['type'] == 'blob'}

# per repo:
idx = files.get('src/pages/index.tsx'); lock = files.get('package-lock.json')
default_scaffold = (idx == DEFAULT_INDEX_TSX and lock == DEFAULT_LOCK)
bare = len(files) <= 6 and 'src/' not in files and lock in (None, DEFAULT_LOCK)
placeholder = (default_scaffold or bare) and not is_public
```

**Why size alone fails:** default scaffolds and real templates can be the same size (84KB). The byte-exact fingerprint (index.tsx=3618, lock=96760) is what separates them. 987/993 private template repos matched it exactly — every one was the identical untouched scaffold (same lockfile byte count is the giveaway).

**Classifier gaps to watch:** bare shells WITHOUT `package-lock.json` (4-file repos: README + package.json + next.config.js + workflow) slip past a lockfile-based check — add them manually. Near-default repos with a tiny edit to index.tsx (3,924 vs 3,618 bytes) are borderline — surface them to the user rather than silently including or excluding.

## 4. Confirm before deleting

Destructive + irreversible → explicit user confirmation with count, samples, and the keep-list (public repos, `.github*` org-config repos, unrelated real projects). Offer the borderline set as a separate choice.

## 5. Delete (parallel, log HTTP codes)

`curl -X DELETE` → **204 = success**. Any other code means investigate; 403 = missing `delete_repo` scope (run `gh auth refresh -h github.com --scopes delete_repo` — device flow again, no re-login), 404 = already gone/renamed.

## Lessons that cost real time

1. **Export the token** in any xargs/`bash -c` pipeline — the silent 401 "Bad credentials" writes look like success (files created) but contain error JSON.
2. **Verify response bodies**, not just HTTP codes or file counts.
3. **Default branch comes from metadata** — never hardcode `main`.
4. **Device-flow tokens lack `delete_repo`** — repo deletion 403s even for org admins until refreshed.
5. Interactive `gh auth login` prompts hang in background/PTY-less shells — pipe `printf 'Y\n\n'`.

# Bulk repo cleanup recipe (classify + delete placeholders)

Proven on a 1,005-repo org (996 private template scaffolds → 994 deleted,
0 failures, verified by re-listing).

## Steps

1. **Inventory** — paginated `gh api "/orgs/$OWNER/repos?per_page=100&page=N"`
   → `repos.jsonl` (name, visibility, size, default_branch, created_at,
   pushed_at). 11 calls for 1,005 repos.
2. **Trees** — export the token, `xargs -P 16` curl of
   `git/trees/<default_branch>?recursive=1` per repo (see SKILL.md).
3. **Classify** (Python over the tree files):

   ```python
   DEFAULT_INDEX_TSX = 3618   # create-next-app default src/pages/index.tsx bytes
   DEFAULT_LOCK = 96760       # create-next-app default package-lock.json bytes
   default_scaffold = (
       files.get('src/pages/index.tsx') == DEFAULT_INDEX_TSX
       and files.get('package-lock.json') == DEFAULT_LOCK
   )
   bare = n_files <= 6 and 'src/pages/index.tsx' not in files  # README+pkg+workflow only
   ```

   Mark `default_scaffold or bare` repos as placeholders; keep everything else
   for manual review (public repos, config repos, real projects).

4. **Confirm** the delete list with the user before executing (irreversible).
5. **Delete** — `xargs -P 16` curl `-X DELETE`; expect HTTP 204 per repo.
6. **Verify** — re-list the org; public/private counts should match the
   keep-list exactly.

## Pitfalls

- Trees fetched with an unexported token contain
  `{"message":"Bad credentials"}` bodies — grep for that string across the
  tree dir and re-fetch before classifying (the fetch "succeeds" silently:
  curl writes the error body and may still return 200 for the HTTPS layer).
- A repo's default branch is not always `main` — read `default_branch` from
  the metadata, don't assume.
- Boundary cases: "bare" repos may lack package-lock.json entirely (4–5 files:
  README, package.json, next.config.js, workflow) — the `bare` rule catches
  them only if you don't require the lock size.
- Sitemap/category-derived lists (if you also scrape site pages) may paginate —
  fetch `/page/2..N/` for categories that show pagination links.

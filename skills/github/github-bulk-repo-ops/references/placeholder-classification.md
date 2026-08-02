# Placeholder classification — worked example (994 repos deleted)

Org inventory: 1,005 repos (9 public, 996 private). Bulk of the private repos
were created in a 3-day window (2023-04-10..12) — the first signal that they
were a bulk scaffold import.

## Classification by size first

GitHub `size` (KB) distribution:

- 0 KB: none (no truly empty repos)
- 1–9 KB: 7 (bare shells)
- 10–99 KB: 991 (nearly ALL exactly 84 KB — identical content, suspicious)
- 100+ KB: 7 (the real templates — all public)

## Confirm via git trees API

`GET /repos/{owner}/{repo}/git/trees/{default_branch}?recursive=1` returns
`{path, size}` per blob. Default create-next-app scaffold fingerprint:

- `src/pages/index.tsx` = 3618 bytes (the stock page)
- `package-lock.json` = 96760 bytes (byte-identical across all repos)
- boilerplate assets: `public/vercel.svg`, `public/thirteen.svg`,
  `public/favicon.ico` (25931 bytes)
- `.github/workflows/main.yml` + default `next.config.js` (159 bytes)

Bare shells (1 KB, 4 files): README (490–502 B), package.json (535–539 B),
next.config.js, one workflow — NO package-lock.json, NO src/.

Real template (kept): custom `src/components/`, custom `_document.tsx`,
different package.json deps, .yarnclean — no default fingerprints.

## Borderline case

Two repos had the full default scaffold but a slightly edited index.tsx
(3924 vs 3618 bytes) and nothing else — treated as placeholder-level, but
offered to the user as a separate "include?" option instead of silently
deleting.

## Pipeline that worked

1. `gh api /orgs/{org}/repos?per_page=100&page=N` → JSONL inventory
   (name, visibility, size, created_at, default_branch).
2. Fetch all trees in parallel: `cat repo-branches.tsv | xargs -P 16 -n 2
bash -c 'curl ...'` (export TOKEN first!).
3. Classify locally (python): placeholder = default-scaffold signature OR
   bare-shell signature; never public.
4. Present counts + samples + keep-list; get explicit user confirmation
   (deletion is irreversible).
5. Delete in parallel; log 204s vs failures; verify org counts after.
6. Guardrail: watch for the 403 "Must have admin rights to Repository" —
   means the token lacks `delete_repo` (see SKILL.md auth gotchas).

---
name: web-catalog-scraping
description: 'Enumerate site catalogs via sitemaps into checklists.'
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [scraping, sitemap, wordpress, catalog, checklist, enumeration]
    related_skills: [github-org-automation]
---

# Web Catalog Scraping (Sitemap-Driven)

Build a complete, structured inventory of a website's content catalog (templates,
products, posts) — e.g. a `TEMPLATES.md` checklist with names, URLs, and preview
images — without a browser. Proven on colorlib.com (1,646 templates, 79 categories).

## Trigger

- "Fetch all X from <site>" / "build a checklist of every <thing> on <site>"
- Any WordPress/Yoast site (wp-sitemap.xml) or sitemap-bearing site

## Process

1. **Sitemap index discovery** (WordPress + Yoast):

   ```bash
   curl -sL https://<site>/wp-sitemap.xml          # plain WP
   curl -sL https://<site>/wp/sitemap_index.xml    # Yoast: splits by post type
   # Yoast sub-sitemaps: post-sitemap.xml, page-sitemap.xml,
   #                     <custom-post-type>-sitemap.xml, <taxonomy>-sitemap.xml
   ```

   Custom post types (e.g. a "portfolio" post type holding templates) have their
   own sitemap — check `sitemap_index.xml` for the full list.

2. **REST API is usually locked** on production WP sites: `wp-json/wp/v2/<type>`
   returns HTTP 200 with `x-wp-total: 0` and `[]` even when content exists.
   Don't fight it — the sitemap is the source of truth. (Verify with
   `curl -sIL ... | grep -i x-wp-total` once; if > 0, use the API instead.)

3. **Parse sitemap entries** — each `<url>` block carries:
   `<loc>` (URL; slug = last path segment), `<lastmod>`, and often
   `<image:image><image:loc>` (screenshot/preview URLs — gold for checklists).

4. **Categories/tags**: fetch `<taxonomy>-sitemap.xml` for the list, then each
   category listing page is **server-rendered** HTML listing its items.
   **Pagination**: big categories paginate as `/cat/<name>/page/N/` — read the
   max page from the `page/N/` hrefs on page 1 and fetch 2..N.

5. **Parallel fetch**: `xargs -P 16` with curl (`-sL`, set a `User-Agent`).
   Save each page to `/tmp/cats/<name>.html` (pagination suffix: `<name>__<N>.html`).

6. **Parse + build**: regex `<loc>` extraction from sitemaps; per-page
   `/path/to/items/<slug>/` regex for category membership; humanize slugs
   (`classy-ads` → "Classy Ads"); emit grouped Markdown checklist
   `- [ ] **Name** — [source](url) · ![preview](img)`.

## Pitfalls

- **`xargs -P` + shell vars**: `TOKEN`/`UA` must be **exported** before the pipe —
  unexported vars are empty inside the `bash -c` subshell (silent 401/empty files).
- **Validate fetched content, not file counts** — a "successful" fetch may be an
  error JSON body. Content checks (`grep -c '"tree"'`) beat `ls | wc -l`.
- **Delete/recreate scratch dirs carefully**: a `rm -rf` of the wrong glob loses
  all fetched pages — re-fetch everything if unsure; keep the rebuild script
  idempotent (re-runnable) so recovery is one command.
- Sitemaps can span multiple files for big catalogs (`-sitemap2.xml`, ...);
  dedupe slugs (`sort -u`, `uniq -d` to detect).
- Some slugs legitimately contain underscores/numbers (`comingsoon_01`).

## Verify

- Total count from parse == count in the final checklist (`grep -c "^- \["`).
- Spot-check 3–5 entries: URL resolves, category grouping is sane.
- Report coverage honestly: items not appearing on any category page land in an
  "Uncategorized" section — pagination misses are the usual cause.

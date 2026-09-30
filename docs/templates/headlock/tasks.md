# Headlock (ColorLib Fixed Header Table) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-headlock`. Recreation name: **Headlock** (NEW
> name — the ColorLib source keeps its name "Fixed Header Table").
>
> Full replication research (source ZIP analysis, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-headlock/spec.md`.

## Quick facts

- **ColorLib item:** "Fixed Header Table" (TEMPLATES.md line 2881,
  "## Table (25)" section). Slug `fixed-header-table` appears exactly ONCE
  in TEMPLATES.md.
- **Preview URL — UNREACHABLE (verified 2026-09-30):** both the slug-only
  URL `https://preview.colorlib.com/theme/fixed-header-table/` and the
  bootstrap-path variant `https://preview.colorlib.com/theme/bootstrap/fixed-header-table/`
  return **HTTP 404**. (The bootstrap/ path works for the css-table-12..20
  family but NOT for this slug — do not assume.) The source page offers a
  ZIP download which was extracted and analyzed — this is the authoritative
  reference.
- **Source ZIP:** `https://preview.colorlib.com/downloads/free/fixed-header-table.zip`
  (HTTP 200, 73,693 bytes). Contains `index.html` (38,826 bytes — five
  variant blocks), `css/style.css` (9,900 bytes), `fonts/Lato-Regular.woff2`,
  `fonts/Lato-Bold.woff2`, favicon. **NO JavaScript** — the fixed header is
  100% CSS (the README template text mentions `js/snippet.js` but the ZIP
  ships no js/ folder). README title "Table V04" is a stale copy-paste.
- **Key tokens:** Lato-Regular (body 15px `#808080`) / Lato-Bold (headers),
  **page white `#fff`** (flex-centered, 33px/30px padding, 1366px limiter,
  1170px wrap), **SIGNATURE = two-table fixed header** (header table
  `position: absolute; top: 0` over body `max-height: 585px; overflow: auto`,
  60px top reserve, 110px block gaps), columns 33/13/22/19/13% (column1
  `padding-left: 40px`; ver4: 7px), header padding 18px (ver5: 25px), body
  padding 16px (ver5: 10px), `th,td { font-weight: unset; padding-right:
  10px }`. Per-variant: ver1 periwinkle `#6c7ae0` header + `#f8f6ff` zebra
  even rows + radius 10px + `0 0 40px rgba(0,0,0,.15)` shadow (THE
  SCREENSHOT variant); ver2 transparent header `#fa4251` + head shadow `0
  5px 20px rgba(0,0,0,.1)` + `#f2f2f2` row borders; ver3 dark card `#393939`
  + `#00ad5f` uppercase header + `#222222` rows; ver4 `#4272d7` header +
  2px `#f2f2f2` underline, no radius/shadow, -20px gutter trick; ver5
  `#555555` uppercase 14px header + `#f7f7f7` card-rows on 10px white
  gutters + `tr:hover td` → `#ebebeb` pointer (ONLY hover variant), -30px
  gutter trick.
- **Data:** 5 columns (Class name · Type · Hours · Trainer · Spots) × 22
  rows per variant = the 11-row fitness schedule DUPLICATED exactly twice
  (rows 12–22 = rows 1–11), identical across all five variants.
- **Sections in DOM order:** white page shell (flex center, full viewport)
  → five `.table100` variant cards stacked with 110px gaps (ver1 → ver2 →
  ver3 → ver4 → ver5), each = absolute header table + scrollable body
  table → Component Dock attribution footer (source has none; monorepo rule
  mandates it).
- **Interactive model:** NONE beyond native vertical scrolling of each
  body container (and ver5's CSS-only row hover). No state, no handlers,
  no scripts.
- **Naming check:** "headlock" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content (verified
  2026-09-30 — zero hits across all pools). Fits the sibling naming idiom
  gridline / rowglow / gridspan / rowcard / gridpane / nightgrid /
  cellswitch / cellgrid / cellcrew / cellmate / fixstack ("head" = the
  header row; "lock" = it stays fixed while the body scrolls).
- **Sibling warning:** Fixstack (`fixed-column-table`) is the fixed-*
  COLUMN* cousin — do NOT copy its gradient page or Roboto tokens.
  Gridline/Rowglow/Gridspan/Rowcard/Gridpane/Nightgrid/Cellswitch/Cellgrid/
  Cellcrew/Cellmate are the css-table family (single-table snippets).
  Headlock is the ONLY multi-variant (5 stacked cards) table template and
  the ONLY one whose signature is the two-table absolute-header mechanism.

## Implementation outline (for the implementer)

1. Copy the simplest existing app as the base; rename the package to
   `@free-react-templates/headlock`; run `npm install` at the repo root
   (lockfile registration); set `homepage` + `public/CNAME`
   (`headlock.free.componentdock.com`); keep the `injectUiSource()` vite
   pattern.
2. `index.html`: Google Fonts `<link>` for Lato 400 and 700. NEVER copy the
   woff2 files from the source ZIP.
3. `src/index.css` `@theme` tokens (see the spec's verification checklist):
   header-purple `#6c7ae0`, zebra `#f8f6ff`, cell-ink `#808080`, ver2-red
   `#fa4251`, ver3-dark `#393939`, ver3-green `#00ad5f`, ver3-cell
   `#222222`, ver4-blue `#4272d7`, ver5-ink `#555555`, ver5-cell `#f7f7f7`,
   hairline `#f2f2f2`, hover `#ebebeb`.
4. Components: `App.tsx` (white shell + centered 1170px column + footer) →
   `FixedHeaderTable.tsx` (parameterized by a `variant` prop: renders the
   absolute header table + 585px scrollable body table) → variant config
   object per ver1..ver5 → `classSchedule.ts` (the 11-row dataset; render
   it twice = 22 rows, matching the source). No state, no handlers.
5. Fixed-header mechanism: per card, `position: relative; padding-top:
   60px`; header = a real `<table>` in an absolutely-positioned wrapper
   (`absolute inset-x-0 top-0`); body = a div `max-height: 585px;
   overflow: auto` containing a second `<table>` with the 22 `<tbody>`
   rows. Column widths via `<colgroup>` or explicit classes
   (33/13/22/19/13%). Do NOT put the header inside the scrolling table.
6. Apply each variant's tokens via a `Record<Variant, string>` map +
   `cn()` (per conventions.md) — ver1 zebra uses `even:` variant rows;
   ver5 card-rows use separated borders + 10px spacing + hover utilities;
   ver4/ver5 gutter trick = negative right margin + right padding on head
   and body wrappers.
7. Data: 22 rows = the 11-row schedule duplicated (see design-notes.md for
   the verbatim list). Same data in all five variants, as in the source.
8. Footer: minimal "Component Dock" attribution link
   (https://www.componentdock.com/). Zero ColorLib references anywhere in
   the app (comments included).
9. Tests (TDD, 100% coverage): scenarios mirror the spec's Gherkin — shell
   renders, Lato loaded, five cards in order, header absolute + body
   scrollable (fixed-header invariant: scrolling body doesn't move
   header), column widths, 22 rows ×5, ver1 zebra + radius + shadow, ver2
   red header + head shadow, ver3 dark card, ver4 gutter trick + no
   radius/shadow, ver5 card-rows + hover, footer attribution, no-handler
   invariant.
10. Verify: `scripts/verify-app.sh headlock`; PR `feat/template-headlock`
    — description must include source slug `fixed-header-table`, the
    UNREACHABLE preview caveat (both paths 404; ZIP
    `preview.colorlib.com/downloads/free/fixed-header-table.zip` was the
    reference), the design tokens used, and what differs (renames; Lato via
    Google Fonts instead of self-hosted woff2; Component Dock footer added).

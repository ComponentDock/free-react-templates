# Cellgrid (ColorLib Css Table 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cellgrid`. Recreation name: **Cellgrid** (NEW
> name — the ColorLib source keeps its name "Css Table 18").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-cellgrid/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 18" (TEMPLATES.md line 2877, "## Table
  (25)" section). Slug `css-table-18` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-18/`
  (HTTP 200, 6,005 bytes, `<title>Table #8</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-18/`
  returns **HTTP 404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=264e2b5b` (11,308 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then styles
  from defaults; custom-checkbox component styles + an `@media print` A3
  block (screen layout stays responsive). NO `.cl-table-striped` on this
  table — no zebra tint.
- **Preview JS:** `js/snippet.js?v=7bf65063` — check-all
  (`input.js-check-all` toggles every `th input[type=checkbox]` — header
  box + all row checkboxes — + an `active` class on rows) + per-row
  checkbox toggling `active`. **CRITICAL — UNLIKE css-table-17: the
  stylesheet STYLES `.active` AND row hover** (bg `#2e2e36`, white text +
  white links) — checked/hovered rows VISIBLY highlight. Reimplement the
  highlight in React state; do NOT copy the css-table-17 "never styled"
  trap.
- **Key tokens:** Roboto (300 body/cells, 500 h2), **page `#19191d`
  CHARCOAL**, heading 20px/500 WHITE `#fff`, header labels **WHITE
  `#fff` normal-case** bold weight, borderless; table body `#777` @
  weight 300 (20px v / 0.75rem h padding, no borders); row bg `#25252b`;
  **active/hover row bg `#2e2e36` + white `#fff` text/links (the
  signature)**; name links GRAY `#b3b3b3` (NOT blue), no underline;
  sub-blurb `#b3b3b3` @ 300/80% block; checkbox 20×20px radius 4px
  border 2px `#3f3f47` (DARK — NOT `#ccc`), hover/focus `#007bff`,
  checked = `#007bff` fill + WHITE check (lucide Check/inline SVG —
  NEVER the icomoon font); 3px transparent spacer rows between every
  data row (the gap signature); rows square-cornered (7px tr radius is
  zeroed at the ends); container 540/720/960/1140px @576/768/992/1200
  with 15px gutters; table `min-width: 900px` in `overflow-x: auto`
  wrapper; content `7rem 0` padding; NO zebra striping.
- **Sections in DOM order:** charcoal page shell (7rem padding, centered
  container) → h2 heading "Table #8" (20px/500, WHITE, on charcoal) →
  overflow-x-auto wrapper → dark data table (6 columns: [select-all
  checkbox] · Order · Name (gray link) · Occupation (+ sub-blurb) ·
  Contact · Education; 7 data rows on `#25252b` cells separated by 3px
  transparent gaps; white normal-case header labels; all checkboxes
  unchecked initially) → minimal Component Dock attribution line (source
  has no footer; monorepo rule mandates the link).
- **Naming check:** "cellgrid" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30; also
  grep'd for content collisions on origin/main + TEMPLATES.md — zero
  hits). Fits the sibling naming idiom gridline / gridspan / rowcard /
  rowglow / gridpane / nightgrid / cellswitch.
- **Sibling warning:** Gridline (`css-table-11`), Rowglow
  (`css-table-12`), Gridspan (`css-table-13`), Rowcard
  (`css-table-14`), Gridpane (`css-table-15`), Nightgrid
  (`css-table-16`) and Cellswitch (`css-table-17`) are prepped
  near-identical snippets. Cellgrid's distinguishing features: the
  **REAL active/hover row highlight** (`#2e2e36` + white text — the only
  variant besides Nightgrid/Gridpane where checked rows visibly change
  beyond the checkbox), charcoal `#19191d` page + `#25252b` rows with
  3px gaps, gray `#b3b3b3` name links (Cellswitch: blue `#007bff`),
  dark `#3f3f47` checkbox borders (Cellswitch: `#ccc`), WHITE
  normal-case headers on dark (Nightgrid: uppercase), 6 columns with NO
  Details column (Cellswitch: 7 columns + iOS switches). Do NOT copy
  tokens between the eight apps.

## Tasks (todo outline for implementers)

- [ ] Scaffold app: copy the simplest existing app → `apps/cellgrid`,
      rename package to `@free-react-templates/cellgrid`, set
      `public/CNAME` (`cellgrid.free.componentdock.com`) + `homepage`;
      run `npm install` at repo root so the lockfile registers the
      workspace.
- [ ] Load Roboto 300/400/500 via Google Fonts `<link>` in `index.html`.
- [ ] `src/index.css` `@theme` tokens: page `#19191d`, row `#25252b`,
      row-active `#2e2e36`, heading/header `#fff`, muted `#777`,
      blurb `#b3b3b3`, link `#b3b3b3`, link-active `#fff`,
      checkbox `#007bff`, checkbox-border `#3f3f47`; keep the
      `injectUiSource()` vite pattern.
- [ ] `App.tsx` composition: `PageShell` → `HighlightTable` (or
      `CellTable`) → footer (Component Dock attribution). Single
      `main`/`h2` hierarchy.
- [ ] `HighlightTable.tsx` (or equivalent): `overflow-x-auto` wrapper →
      `<table>` `min-width: 900px` / `w-full` / `border-collapse`;
      thead `th` bold / `#fff` / NORMAL CASE (no uppercase, no
      tracking) / borderless (6 columns, `scope="col"`, FIRST cell =
      select-all checkbox); tbody = 7 data rows, each followed by a 3px
      transparent spacer row (6 spacers — implement as a
      `<tr class="spacer">` with `h-[3px] bg-transparent p-0` or
      equivalent); cells `#777` weight 300, padding 20px v / 0.75rem h,
      `align-top`, NO borders; normal row cells bg `#25252b`; NO stripe
      class anywhere; square-cornered rows.
- [ ] Row data + content: 7 rows (4 unique + 3 duplicates of rows 2–4,
      or 4 unique — same KIND either way): 4-digit ids, GRAY `#b3b3b3`
      no-underline name links (NOT blue, NO switches), occupation +
      `#b3b3b3` block blurb, +CC phones, school names; NO 7th Details
      column.
- [ ] Checkbox component: visually hidden native input + 20×20px /
      radius 4px / 2px `#3f3f47` indicator (div or span) — DARK border,
      NOT `#ccc`; hover/focus border `#007bff`; checked = `#007bff`
      fill + WHITE checkmark (lucide `Check` or inline SVG — NEVER copy
      the icomoon font); all row checkboxes + header select-all start
      UNCHECKED; first body cell = `<th scope="row">` (omit the source's
      stray `scope="row"` on `<tr>`).
- [ ] State wiring (React, NOT the source's snippet.js): `checked`
      state for the 7 row checkboxes + the header select-all; select-all
      change → set all row checkboxes to its value AND set every row's
      active state to its value; row checkbox change → toggle only its
      own row's checked + active state (header box does NOT auto-sync
      from row state, per the source JS). **Active highlight (THE
      signature):** checked rows (and hovered rows) render cells bg
      `#2e2e36` + text/links `#fff`; normal rows `#25252b` / `#777` /
      `#b3b3b3`. Hover must NOT clear a checked row's highlight (hover
      overlays the visual; the checked state persists). Faint hover
      shadow `0 2px 10px -5px rgba(0,0,0,0.1)` MAY be added.
- [ ] Footer: minimal "Made with Component Dock" attribution linking
      `https://www.componentdock.com/`. ZERO ColorLib references in app
      files (comments included) — token notes only.
- [ ] Tests (TDD, colocated `*.test.tsx`, scenario-style `it` blocks
      mirroring the spec's Gherkin): shell/heading render (charcoal bg,
      white h2), header casing/6-column layout, 7 rows + demo data +
      spacer gaps, sub-blurb, gray link colors (NOT blue), checkbox
      visual states (unchecked dark border `#3f3f47` / checked blue
      fill + check icon), select-all toggles all checkboxes + highlights
      all rows, row checkbox toggles only its row + highlight, header
      does not auto-sync, hover/active highlight (bg `#2e2e36`, white
      text/links), uncheck returns row to normal, responsive wrapper,
      footer link, accessibility semantics (labels, scope="col"/"row",
      keyboard reach). 100% coverage via `scripts/verify-app.sh cellgrid`.
- [ ] PR `feat/template-cellgrid` → squash-merge; description must cite
      source slug `css-table-18`, the `bootstrap/` preview path, tokens,
      and the signature (REAL active/hover row highlight on charcoal
      `#25252b` rows — unlike css-table-17 where `.active` was never
      styled).

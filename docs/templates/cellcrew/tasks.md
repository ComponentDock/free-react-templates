# Cellcrew (ColorLib Css Table 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cellcrew`. Recreation name: **Cellcrew** (NEW
> name — the ColorLib source keeps its name "Css Table 19").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-cellcrew/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 19" (TEMPLATES.md line 2878, "## Table
  (25)" section). Slug `css-table-19` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-19/`
  (HTTP 200, 9,915 bytes, `<title>Table #9</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-19/`
  returns **HTTP 404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=61f5c8ec` (11,771 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then styles
  from defaults; custom-checkbox component styles + `.persons` avatar
  cluster component + an `@media print` A3 block (screen layout stays
  responsive). NO `.cl-table-striped` on this table — no zebra tint.
  NOTE: the base `.cl-table th/td` `border-top: 1px solid #dee2e6` rule is
  KEPT for tbody cells (the custom-table rule does NOT remove borders —
  unlike css-table-18/Cellgrid).
- **Preview JS:** `js/snippet.js?v=aba81c02` — check-all
  (`input.js-check-all` toggles every `th input[type=checkbox]` — header
  box + all row checkboxes — + an `active` class on rows) + per-row
  checkbox toggling `active`. **CRITICAL — `.active` AND row hover ARE
  STYLED here (subtly):** bg `rgba(0,0,0,0.03)` + 1px `#bfbfbf` hairlines
  top/bottom via `:before/:after` pseudo-elements — checked/hovered rows
  VISIBLY read as light-gray bands. NOT the css-table-17 "never styled"
  trap; also subtler than css-table-18's dramatic `#2e2e36` shift.
- **Key tokens:** Roboto (300 body/cells, 500 h2), **page `#fff` WHITE**,
  heading 20px/500 DARK INK `#212529` (NOT white), header labels **dark
  `#212529` bold normal-case** borderless (5 labels), table body `#777`
  @ weight 300 (20px v / 0.75rem h padding), rows KEEP 1px `#dee2e6` top
  borders (contiguous rows, NO spacer gaps), normal row bg transparent,
  **active/hover row bg `rgba(0,0,0,0.03)` + `#bfbfbf` hairlines (the
  signature — subtle)**, sub-blurb `#b3b3b3` @ 300/80% block, checkbox
  20×20px radius 4px border 2px **`#ccc` (LIGHT — not Cellgrid's
  `#3f3f47`)**, hover/focus `#007bff`, checked = `#007bff` fill + WHITE
  check (lucide Check/inline SVG — NEVER the icomoon font); **SIGNATURE:
  headerless 6th column of overlapping circular avatars** (`ul.persons`:
  li inline-block margin-left -15px, link width 36px, img radius 50%;
  counts 5/3/2 per unique row); container 540/720/960/1140px @576/768/
  992/1200 with 15px gutters; table `min-width: 900px` in `overflow-x:
  auto` wrapper; content `7rem 0` padding; NO zebra striping.
- **Sections in DOM order:** white page shell (7rem padding, centered
  container) → h2 heading "Table #9" (20px/500, dark ink, on white) →
  overflow-x-auto wrapper → light data table (**5 header labels**:
  [select-all checkbox] · Order · Sales · Description · Support; **6
  body cells per row**: checkbox th · order · sales · description +
  blurb · phone · avatar cluster [headerless]; 6 data rows = 3 unique
  ×2, contiguous with 1px `#dee2e6` separators; all checkboxes
  unchecked initially) → minimal Component Dock attribution line (source
  has no footer; monorepo rule mandates the link).
- **Naming check:** "cellcrew" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30; also
  grep'd for content collisions on origin/main + TEMPLATES.md — zero
  hits). Fits the sibling naming idiom gridline / gridspan / rowcard /
  rowglow / gridpane / nightgrid / cellswitch / cellgrid ("cell" =
  table cells; "crew" = the avatar crews).
- **Sibling warning:** Gridline (`css-table-11`), Rowglow
  (`css-table-12`), Gridspan (`css-table-13`), Rowcard (`css-table-14`),
  Gridpane (`css-table-15`), Nightgrid (`css-table-16`), Cellswitch
  (`css-table-17`) and Cellgrid (`css-table-18`) are prepped
  near-identical snippets. Cellcrew's distinguishing features: the
  **avatar-crew column** (ONLY css-table variant with imagery), the
  subtle-but-REAL active/hover tint + `#bfbfbf` hairlines (NOT never-
  styled like 14/17, NOT dramatic like 18), light white page with KEPT
  `#dee2e6` row separators (18 removed borders + used 3px gaps), dark
  `#212529` bold headers (5 labels), `#ccc` checkbox borders (like 17,
  unlike 18's `#3f3f47`), and the 6-body-cells-vs-5-headers quirk. Do
  NOT copy tokens between the nine apps.

## Tasks (todo outline for implementers)

- [ ] Scaffold app: copy the simplest existing app → `apps/cellcrew`,
      rename package to `@free-react-templates/cellcrew`, set
      `public/CNAME` (`cellcrew.free.componentdock.com`) + `homepage`;
      run `npm install` at repo root so the lockfile registers the
      workspace.
- [ ] Load Roboto 300/400/500 via Google Fonts `<link>` in `index.html`.
- [ ] `src/index.css` `@theme` tokens: page `#fff`, heading/header
      `#212529`, muted `#777`, blurb `#b3b3b3`, separator `#dee2e6`,
      hairline `#bfbfbf`, row-active `rgba(0,0,0,0.03)`, checkbox
      `#007bff`, checkbox-border `#ccc`; keep the `injectUiSource()`
      vite pattern.
- [ ] `App.tsx` composition: `PageShell` → `CrewTable` (or
      `CellTable`) → footer (Component Dock attribution). Single
      `main`/`h2` hierarchy.
- [ ] `CrewTable.tsx` (or equivalent): `overflow-x-auto` wrapper →
      `<table>` `min-width: 900px` / `w-full` / `border-collapse`;
      thead `th` BOLD / `#212529` dark ink / NORMAL CASE (no uppercase,
      no tracking) / borderless (**5 columns**, `scope="col"`, FIRST
      cell = select-all checkbox); tbody = 6 data rows, each with SIX
      cells (checkbox `th scope="row"` · order · sales · description +
      blurb · phone · avatar cluster — the 6th column has NO header);
      cells `#777` weight 300, padding 20px v / 0.75rem h, `align-top`;
      tbody cells KEEP `border-top: 1px solid #dee2e6` (rows contiguous,
      NO spacer rows, NO gaps); normal rows transparent (white page);
      NO stripe class anywhere.
- [ ] Row data + content: 6 rows (3 unique + 3 duplicates of rows 1–3,
      or 3 unique — same KIND either way): 4-digit ids (1392 / 4616 /
      9841), sales-pitch titles (Sales Pitch - 2019 / Social Media
      Planner / Website Agreement), shared description + `#b3b3b3`
      block blurb, +CC phones (+63 983 0962 971 / +02 020 3994 929 /
      +01 352 1125 0192), avatar clusters 5/3/2; NO Details column, NO
      switches, NO name links.
- [ ] Avatar cluster component (`ul.persons` pattern): `ul` list-none
      p-0 m-0; `li` inline-block `-ml-[15px]` (overlap 15px — each next
      avatar steps ~21px); wrapper `a` width 36px; `img` `rounded-full`
      max-w-full; images = `https://picsum.photos/seed/cellcrew-<n>/72/72`
      (n = 1..5, deterministic — NEVER the source's person_*.jpg);
      avatars per row: 5 / 3 / 2.
- [ ] Checkbox component: visually hidden native input + 20×20px /
      radius 4px / 2px **`#ccc`** indicator (div or span) — LIGHT
      border, NOT `#3f3f47`; hover/focus border `#007bff`; checked =
      `#007bff` fill + WHITE checkmark (lucide `Check` or inline SVG —
      NEVER copy the icomoon font); all row checkboxes + header
      select-all start UNCHECKED; first body cell = `<th scope="row">`.
- [ ] State wiring (React, NOT the source's snippet.js): `checked`
      state for the 6 row checkboxes + the header select-all; select-all
      change → set all row checkboxes to its value AND set every row's
      active state to its value; row checkbox change → toggle only its
      own row's checked + active state (header box does NOT auto-sync
      from row state, per the source JS). **Active highlight (THE
      signature):** checked rows (and hovered rows) render cells bg
      `rgba(0,0,0,0.03)` + 1px `#bfbfbf` hairlines top/bottom; normal
      rows transparent + `#dee2e6` separators. Hover must NOT clear a
      checked row's highlight (hover overlays; checked state persists).
- [ ] Footer: minimal "Made with Component Dock" attribution linking
      `https://www.componentdock.com/`. ZERO ColorLib references in app
      files (comments included) — token notes only.
- [ ] Tests (TDD, colocated `*.test.tsx`, scenario-style `it` blocks
      mirroring the spec's Gherkin): shell/heading render (white bg,
      dark `#212529` h2 — NOT white), 5-column header + bold/normal-case
      labels, 6 rows × 6 cells + demo data + `#dee2e6` separators (NO
      gaps/spacers), sub-blurb, avatar cluster (circular, overlapping,
      counts 5/3/2, picsum seeds, never source images), checkbox visual
      states (unchecked `#ccc` border / checked blue fill + check icon),
      select-all toggles all checkboxes + highlights all rows, row
      checkbox toggles only its row + highlight, header does not
      auto-sync, hover/active highlight (tint + hairlines), uncheck
      returns row to normal, responsive wrapper, footer link,
      accessibility semantics (labels, scope="col"/"row", keyboard
      reach). 100% coverage via `scripts/verify-app.sh cellcrew`.
- [ ] PR `feat/template-cellcrew` → squash-merge; description must cite
      source slug `css-table-19`, the `bootstrap/` preview path, tokens,
      and the signature (avatar-crew column + subtle REAL active/hover
      tint on a white page with kept `#dee2e6` separators — unlike
      css-table-17 where `.active` was never styled and unlike
      css-table-18 which is dark with dramatic highlight and no avatars).

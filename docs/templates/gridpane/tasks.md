# Gridpane (ColorLib Css Table 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gridpane`. Recreation name: **Gridpane** (NEW
> name — the ColorLib source keeps its name "Css Table 15").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-gridpane/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 15" (TEMPLATES.md line 2874, "## Table
  (25)" section). Slug `css-table-15` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-15/`
  (HTTP 200, 4,058 bytes, `<title>Table #5</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-15/`
  returns **HTTP 404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=cfec863e` (10,982 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then styles
  from defaults.
- **Preview JS:** `js/snippet.js?v=4363416b` (1,006 bytes, vanilla, no
  jQuery) — `CHECK_ALL` (header `.js-check-all` toggles all row
  checkboxes + toggles `cl-active` on every row) and `CHECK_ROWS` (row
  checkboxes toggle `cl-active` on their own row independently).
  The script toggles class `cl-active` on checked rows AND this
  stylesheet DOES style it: `.custom-table tbody tr.cl-active {
  opacity: .4 }` — **checked rows dim to 40% opacity**. Reimplement in
  React state (`boolean[]`); header checked ⇔ all checked (no
  indeterminate in source). Initial state: row 2 (4616) checked + dimmed.
- **Key tokens:** Roboto (300 body/cells, 500 h2), page `#fff` (WHITE),
  **gray panel** `#efefef` / 20px padding / 4px radius wrapping the whole
  table (`.custom-table-responsive`), ink `#212529`, table body `#777` @
  weight 300, occupation sub-blurb `#b3b3b3` @ 300/80%, WHITE row-cards
  (`#fff`, radius 7px, overflow hidden) separated by 10px transparent
  spacer gaps, **UPPERCASE 12px letter-spaced (0.1rem) header labels**
  sitting directly on the gray panel (borderless thead, no white behind),
  links `#007bff` / hover `#0056b3` (no underline, .3s ease), card hover
  shadow `0 2px 10px -5px rgba(0,0,0,0,0.1)` (.3s ease), **checked rows
  `opacity: .4`** (`.cl-active`), custom checkbox 20×20px radius 4px
  border 2px `#ccc` (checked `#007bff` fill + white check via lucide
  `Check`), container 540/720/960/1140px @576/768/992/1200 with 15px
  gutters, table `min-width: 900px` in `overflow-x: auto` wrapper inside
  the panel, cell padding 0.75rem h / 20px v, content `7rem 0` padding,
  heading margin 3rem.
- **Sections in DOM order:** WHITE page shell (7rem padding, centered
  container) → h2 heading "Table #5" (20px/500, on the white page) →
  gray rounded PANEL wrapper (`#efefef`/20px/4px) → borderless-header
  data table (select-all checkbox · Order · Name · Occupation (+
  sub-blurb) · Contact · Education; 4 white rounded row-cards with 10px
  gaps, 4 rows of demo data, row 2 checked + dimmed) → custom checkboxes
  + select-all (React state; checked state dims the row via opacity .4)
  → minimal Component Dock attribution line (source has no footer; monorepo
  rule mandates the link).
- **Naming check:** "gridpane" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30; also
  grep'd for content collisions on origin/main + TEMPLATES.md — zero
  hits). Fits the sibling naming idiom gridline / gridspan / rowcard /
  rowglow.
- **Sibling warning:** Gridline (`css-table-11`), Rowglow
  (`css-table-12`), Gridspan (`css-table-13`) and Rowcard
  (`css-table-14`) are prepped near-identical snippets. Gridpane's
  distinguishing features vs them: WHITE page + gray rounded PANEL
  wrapper around the table (not a gray page — Rowglow/Rowcard; not a
  plain white page — Gridline/Gridspan), UPPERCASE letter-spaced header
  labels on the gray, and **checked rows dim to opacity .4** (Rowcard:
  no checked-row styling at all; Gridspan: blue tint + hairlines —
  different treatment). Do NOT copy tokens between the five apps.

## Tasks (todo outline for implementers)

- [ ] Scaffold app: copy the simplest existing app → `apps/gridpane`,
      rename package to `@free-react-templates/gridpane`, set
      `public/CNAME` (`gridpane.free.componentdock.com`) + `homepage`;
      run `npm install` at repo root so the lockfile registers the
      workspace.
- [ ] Load Roboto 300/400/500 via Google Fonts `<link>` in `index.html`.
- [ ] `src/index.css` `@theme` tokens: ink `#212529`, muted `#777`,
      subtle `#b3b3b3`, surface `#fff`, accent `#007bff`,
      accent-dark `#0056b3`, page `#fff`, panel `#efefef`; keep the
      `injectUiSource()` vite pattern.
- [ ] `App.tsx` composition: `PageShell` → `PaneledTable` → footer
      (Component Dock attribution). Single `main`/`h2` hierarchy.
- [ ] `PaneledTable.tsx` (or equivalent): gray panel wrapper
      (`bg-panel p-5 rounded` — `#efefef`/20px/4px) → `overflow-x-auto`
      → `<table>` `min-width: 900px` / `w-full` / `border-collapse`;
      thead `th` 12px uppercase tracking-[.1rem] `#212529` borderless
      (6 columns, `scope="col"`, first = select-all checkbox cell);
      tbody = 4 data rows + 10px transparent spacer rows; cells `#777`
      weight 300, padding 20px v / 0.75rem h, `align-top`, NO borders;
      rows white + `rounded-[7px] overflow-hidden` + hover shadow
      `0 2px 10px -5px rgba(0,0,0,0.1)` + `.3s ease` transition.
- [ ] Row data + content: demo rows (4-digit ids, names as `#007bff`
      no-underline links, occupation + `#b3b3b3`/300/80% block blurb,
      +CC phones, school names); paraphrase OK, same KIND of content.
- [ ] Checkbox state: `useState<boolean[]>` initialized with row index 1
      checked (`true`); row class `cl-active` (opacity `.4`) when
      checked; header checkbox ⇔ all rows (no indeterminate); per-row
      toggles independent.
- [ ] Custom checkbox component: hidden native input + 20×20px indicator
      (radius 4px, 2px `#ccc`; hover/focus `#007bff`; checked `#007bff`
      fill + white lucide-react `Check` centered; disabled `#e6e6e6`
      @0.6 + checked-disabled `#007bff` @0.2); accessible labels
      (header = select-all).
- [ ] Footer: minimal "Made with Component Dock" attribution linking
      `https://www.componentdock.com/`. ZERO ColorLib references in app
      files (comments included) — token notes only.
- [ ] Tests (TDD, colocated `*.test.tsx`, scenario-style `it` blocks
      mirroring the spec's Gherkin): shell/heading render, panel
      properties, header casing, 4 rows + spacers, sub-blurb, link
      colors/hover, checkbox states incl. disabled, select-all behavior,
      row 2 initial checked + dim, independent row toggles, hover shadow,
      responsive wrapper, footer link, accessibility semantics. 100%
      coverage via `scripts/verify-app.sh gridpane`.
- [ ] PR `feat/template-gridpane` → squash-merge; description must cite
      source slug `css-table-15`, the `bootstrap/` preview path, tokens,
      and the two signatures (panel + dim-on-check).

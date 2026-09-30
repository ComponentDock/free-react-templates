# Gridspan (ColorLib Css Table 13) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gridspan`. Recreation name: **Gridspan** (NEW
> name — the ColorLib source keeps its name "Css Table 13").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-gridspan/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 13" (TEMPLATES.md line 2872, "## Table
  (25)" section). Slug `css-table-13` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-13/`
  (HTTP 200, 3,684 bytes, `<title>Table #3</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-13/`
  returns **HTTP 404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=12e290cd` (10,634 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then styles
  from defaults.
- **Preview JS:** `js/snippet.js?v=8b6525f2` (1,000 bytes, vanilla, no
  jQuery) — `CHECK_ALL` (header `.js-check-all` toggles all row checkboxes
  + `active` class on rows) and `CHECK_ROWS` (row checkboxes toggle
  `active` on their own row). Reimplement as React state.
- **Key tokens:** Roboto (300 body/cells, 500 h2), page `#fff`, ink
  `#212529`, table body `#777` @ weight 300, occupation sub-blurb
  `#b3b3b3` @ 300/80%, row separators `#dee2e6`, borderless header row,
  accent `#007bff` (checkbox + row hairlines), hover/active row bg
  `rgba(0,123,255,0.03)` + 1px `#007bff` top/bottom hairlines
  (`.3s all ease`), custom checkbox 20×20px radius 4px border 2px `#ccc`,
  container 540/720/960/1140px @576/768/992/1200 with 15px gutters, table
  `min-width: 900px` in `overflow-x: auto` wrapper, cell padding 0.75rem
  h / 20px v, content `7rem 0` padding, heading margin 3rem.
- **Sections in DOM order:** white page shell (7rem padding, centered
  container) → h2 heading "Table #3" (20px/500) → responsive wrapper →
  borderless-header data table (select-all checkbox · Order · Name ·
  Occupation (+ sub-blurb) · Contact · Education; 4 rows of demo data) →
  custom checkboxes + active-row highlight (select-all toggles all rows)
  → minimal Component Dock attribution line (source has no footer;
  monorepo rule mandates the link).
- **Naming check:** "gridspan" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30; also
  grep'd for content collisions — zero hits).
- **Sibling warning:** Gridline (`css-table-11`) and Rowglow
  (`css-table-12`) are prepped near-identical snippets. Gridspan's
  distinguishing features vs them: blue hover/active row tint + hairlines,
  the Occupation sub-blurb, 20px vertical cell padding, white page (vs
  Rowglow's gray), light separators + tint (vs Gridline's plain
  separators). Do NOT copy tokens between the three apps.

## Task outline (for the implementer)

- [ ] Scaffold `apps/gridspan` from the simplest existing app; package
      `@free-react-templates/gridspan`; CNAME
      `gridspan.free.componentdock.com`; homepage set; `npm install` at
      repo root (lockfile registration); `injectUiSource()` in
      `vite.config.ts`.
- [ ] `@theme` tokens in `src/index.css`: ink `#212529`, muted `#777`,
      subtle `#b3b3b3`, line `#dee2e6`, accent `#007bff`, surface `#fff`;
      Roboto via Google Fonts link (300/400/500) in `index.html`.
- [ ] TDD per section (colocated `*.test.tsx`, 100% coverage):
      PageShell + heading → DataTable (thead borderless, 4 rows with
      sub-blurb, token styling) → CustomCheckbox (visual states) +
      SelectAll + active-row state → responsive wrapper behavior →
      ComponentDockFooter attribution.
- [ ] Custom checkboxes: hidden native input + 20×20px indicator
      (`rounded`, `border-2 border-[#ccc]`; hover/focus `#007bff`;
      checked `#007bff` + white lucide `Check`; disabled gray states).
      Header checkbox toggles all rows (React state); rows independent.
      `aria-label` on all checkboxes; `th[scope=row/col]` semantics.
- [ ] Row highlight: a row is active ⇔ its checkbox is checked;
      active/hover rows get `bg-[rgba(0,123,255,0.03)]` + 1px `#007bff`
      top/bottom borders (e.g. `border-y border-[#007bff]` on active, or
      pseudo-element-equivalent borders), `transition-colors
      duration-300 ease`; hover must NOT change checked state. CSS
      note: the source draws hairlines via per-cell `:before/:after`
      absolute 1px lines — `border-y` on `<tr>`/cells is an acceptable
      visual equivalent if it renders identically at the 0.75rem/20px
      padding.
- [ ] Occupation cells: title + block-level small blurb `#b3b3b3`/300 at
      80% size (same kind of placeholder sentence in every row).
- [ ] Table: `min-w-[900px]` inside `overflow-x-auto`; cell text
      `#777`/300, `px-3 py-5` (0.75rem/20px), `align-top`; 1px `#dee2e6`
      `border-t` per cell; NO vertical borders; borderless thead.
- [ ] Assets: NONE in source — no images needed; lucide-react icons only
      (no icomoon); no framework CSS — Tailwind utilities + @theme.
- [ ] Zero ColorLib references in app files (comments included); footer
      links `https://www.componentdock.com/` branded "Component Dock".
- [ ] `scripts/verify-app.sh gridspan` green; PR `feat/template-gridspan`
      with source slug + preview URL + tokens in the description; squash
      merge immediately; then `[~]`→`[x]` bookkeeping in TEMPLATES.md +
      `npm run readme:status` (implementer's flow — prep never sets
      markers).

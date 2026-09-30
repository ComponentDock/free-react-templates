# Rowglow (ColorLib Css Table 12) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-rowglow`. Recreation name: **Rowglow** (NEW name —
> the ColorLib source keeps its name "Css Table 12").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-rowglow/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 12" (TEMPLATES.md line 2871, "## Table
  (25)"). Slug `css-table-12` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-12/`
  (HTTP 200, 2,610 bytes, `<title>Table #2</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-12/`
  returns **HTTP 404** — always use the `bootstrap/` path (same quirk as
  css-table-11 / Gridline).
- **Preview CSS:** `css/style.css?v=66bf8830` (7,712 bytes) — single
  self-contained sheet, no framework, no JS, no icons.
- **Key tokens:** Roboto (300/400, body weight 300), page **#efefef
  (light gray — NOT white)**, ink `#212529`, table body `#777` @ weight
  300, occupation subtext `#b3b3b3`, **NO row separators** (borderless
  body cells), borderless header row, **white row-hover glow** (`#fff` +
  0.3s ease — the signature feature), no accent colors, container
  540/720/960/1140px @576/768/992/1200 with 15px gutters, table
  `min-width: 900px` in `overflow-x: auto` wrapper, content `7rem 0`
  padding, heading margin 3rem.
- **Sections in DOM order:** gray page shell (7rem padding, centered
  container) → h2 heading "Table #2" (20px, weight 300) → responsive
  wrapper → borderless data table (Order · Name · Occupation · Contact ·
  Education; 4 rows; each Occupation cell has a gray `<small>` descriptor
  line) → row-hover white glow (CSS only) → minimal Component Dock
  attribution line (source has no footer; monorepo rule mandates the
  link).
- **Naming check:** "rowglow" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30).

## Task outline (for the implementer)

- [x] Scaffold `apps/rowglow` from the simplest existing app; package
      `@free-react-templates/rowglow`; CNAME
      `rowglow.free.componentdock.com`; homepage set; `npm install` at
      repo root (lockfile registration); `injectUiSource()` in
      `vite.config.ts`.
- [x] `@theme` tokens in `src/index.css`: ink `#212529`, muted `#777`,
      subtext `#b3b3b3`, page `#efefef`, surface `#fff`; Roboto via
      Google Fonts link (300/400) in `index.html`; body text weight 300.
- [x] TDD per section (colocated `*.test.tsx`, 100% coverage):
      PageShell + heading → DataTable (thead borderless 5 cols, 4 rows,
      borderless body cells, Occupation subtext) → RowHover glow →
      responsive wrapper behavior → ComponentDockFooter attribution.
- [x] Table: `min-w-[900px]` inside `overflow-x-auto`; cell text
      `#777`/300, `px-3 py-5` (0.75rem / 20px), `align-top`; NO borders
      on body cells; borderless thead (ink labels).
- [x] Occupation subtext: `<small>` block line — `text-sm` (80%),
      `text-[#b3b3b3]`, weight 300, `block`.
- [x] Row-hover glow: `hover:bg-white focus:bg-white
    transition-colors duration-300 ease-out` on `<tbody>` rows — white
      row on the `#efefef` page. Pure CSS, no JS.
- [x] NO checkboxes in this template (unlike css-table-11) — plain data
      table only.
- [x] Assets: NONE in source — no images needed; no icons at all; no
      framework CSS — Tailwind utilities + @theme.
- [x] Zero ColorLib references in app files (comments included); footer
      links `https://www.componentdock.com/` branded "Component Dock".
- [x] `scripts/verify-app.sh rowglow` green; PR `feat/template-rowglow`
      with source slug + preview URL + tokens in the description; squash
      merge immediately; then `[~]`→`[x]` bookkeeping in TEMPLATES.md +
      `npm run readme:status` (implementer's flow — prep never sets
      markers).

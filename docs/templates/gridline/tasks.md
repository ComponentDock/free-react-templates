# Gridline (ColorLib Css Table 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gridline`. Recreation name: **Gridline** (NEW
> name — the ColorLib source keeps its name "Css Table 11").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-gridline/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 11" (TEMPLATES.md line 2870, "## Table
  (25)"). Slug `css-table-11` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-11/`
  (HTTP 200, 3,525 bytes, `<title>Table #1</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-11/`
  returns **HTTP 404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=7705366a` (8,985 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then styles
  from defaults.
- **Key tokens:** Roboto (300/400, 500 for h2), page `#fff`, ink
  `#212529`, table body `#777` @ weight 300, row separators `#dee2e6`,
  borderless header row, accent `#007bff` (checkbox hover/focus/checked),
  custom checkbox 20×20px radius 4px border 2px `#ccc`, container
  540/720/960/1140px @576/768/992/1200 with 15px gutters, table
  `min-width: 900px` in `overflow-x: auto` wrapper, content `7rem 0`
  padding, heading margin 3rem.
- **Sections in DOM order:** white page shell (7rem padding, centered
  container) → h2 heading "Table #1" (20px/500) → responsive wrapper →
  borderless-header data table (select-all checkbox · Order · Name ·
  Occupation · Contact · Education; 4 rows of demo data) → custom
  checkboxes (select-all toggles all rows) → minimal Component Dock
  attribution line (source has no footer; monorepo rule mandates the
  link).
- **Naming check:** "gridline" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30). Incidental `--color-gridline`
  Tailwind tokens in apps/planner & apps/chronogrid are per-app tokens,
  not workspace collisions.

## Task outline (for the implementer)

- [ ] Scaffold `apps/gridline` from the simplest existing app; package
      `@free-react-templates/gridline`; CNAME
      `gridline.free.componentdock.com`; homepage set; `npm install` at
      repo root (lockfile registration); `injectUiSource()` in
      `vite.config.ts`.
- [ ] `@theme` tokens in `src/index.css`: ink `#212529`, muted `#777`,
      line `#dee2e6`, accent `#007bff`, surface `#fff`; Roboto via
      Google Fonts link (300/400/500) in `index.html`.
- [ ] TDD per section (colocated `*.test.tsx`, 100% coverage):
      PageShell + heading → DataTable (thead borderless, 4 rows, token
      styling) → CustomCheckbox (visual states) + SelectAll state →
      responsive wrapper behavior → ComponentDockFooter attribution.
- [ ] Custom checkboxes: hidden native input + 20×20px indicator
      (`rounded`, `border-2 border-[#ccc]`; hover/focus `#007bff`;
      checked `#007bff` + white lucide `Check`; disabled gray states).
      Header checkbox toggles all rows (React state); rows independent.
      `aria-label` on all checkboxes; `th[scope=row/col]` semantics.
- [ ] Table: `min-w-[900px]` inside `overflow-x-auto`; cell text
      `#777`/300, `p-3`, `align-top`; 1px `#dee2e6` `border-t` per cell;
      NO vertical borders; borderless thead.
- [ ] Assets: NONE in source — no images needed; lucide-react icons only
      (no icomoon); no framework CSS — Tailwind utilities + @theme.
- [ ] Zero ColorLib references in app files (comments included); footer
      links `https://www.componentdock.com/` branded "Component Dock".
- [ ] `scripts/verify-app.sh gridline` green; PR `feat/template-gridline`
      with source slug + preview URL + tokens in the description; squash
      merge immediately; then `[~]`→`[x]` bookkeeping in TEMPLATES.md +
      `npm run readme:status` (implementer's flow — prep never sets
      markers).

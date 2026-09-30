# Rowcard (ColorLib Css Table 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-rowcard`. Recreation name: **Rowcard** (NEW
> name — the ColorLib source keeps its name "Css Table 14").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-rowcard/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 14" (TEMPLATES.md line 2873, "## Table
  (25)" section). Slug `css-table-14` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-14/`
  (HTTP 200, 4,028 bytes, `<title>Table #4</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-14/`
  returns **HTTP 404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=4361de53` (10,761 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then styles
  from defaults.
- **Preview JS:** `js/snippet.js?v=dce5f118` (1,000 bytes, vanilla, no
  jQuery) — `CHECK_ALL` (header `.js-check-all` toggles all row
  checkboxes) and `CHECK_ROWS` (row checkboxes toggle independently).
  The script also toggles an `active` class on checked rows — **but this
  stylesheet has NO `.active` rule**, so the class is visually inert.
  Reimplement checkbox state in React; do NOT invent checked-row
  highlight styling.
- **Key tokens:** Roboto (300 body/cells, 500 h2), page `#efefef`
  (light gray), ink `#212529`, table body `#777` @ weight 300, occupation
  sub-blurb `#b3b3b3` @ 300/80%, WHITE row-cards (`#fff`, radius 7px,
  overflow hidden) separated by 10px transparent spacer gaps, borderless
  header row, links `#007bff` / hover `#0056b3` (no underline, .3s ease),
  card hover shadow `0 2px 10px -5px rgba(0,0,0,0.1)` (.3s ease), custom
  checkbox 20×20px radius 4px border 2px `#ccc` (checked `#007bff` fill +
  white check), container 540/720/960/1140px @576/768/992/1200 with 15px
  gutters, table `min-width: 900px` in `overflow-x: auto` wrapper, cell
  padding 0.75rem h / 20px v, content `7rem 0` padding, heading margin
  3rem.
- **Sections in DOM order:** gray page shell (7rem padding, centered
  container) → h2 heading "Table #4" (20px/500) → responsive wrapper →
  borderless-header data table (select-all checkbox · Order · Name ·
  Occupation (+ sub-blurb) · Contact · Education; 4 white rounded
  row-cards with 10px gaps, 4 rows of demo data) → custom checkboxes +
  select-all (React state; checked state visible ONLY on the checkbox) →
  minimal Component Dock attribution line (source has no footer; monorepo
  rule mandates the link).
- **Naming check:** "rowcard" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30; also
  grep'd for content collisions on origin/main — zero hits).
- **Sibling warning:** Gridline (`css-table-11`), Rowglow
  (`css-table-12`) and Gridspan (`css-table-13`) are prepped near-identical
  snippets. Rowcard's distinguishing features vs them: gray page +
  permanently-white rounded row-cards with 10px transparent gaps (not
  flat separator lines, not hover-only white), subtle hover SHADOW lift
  (not Rowglow's full-row white glow), and **no checked-row highlight**
  (not Gridspan's active tint + hairlines). Do NOT copy tokens between
  the four apps.

## Task outline (for the implementer)

- [ ] Scaffold `apps/rowcard` from the simplest existing app; package
      `@free-react-templates/rowcard`; CNAME
      `rowcard.free.componentdock.com`; homepage set; `npm install` at
      repo root (lockfile registration); `injectUiSource()` in
      `vite.config.ts`.
- [ ] `@theme` tokens in `src/index.css`: ink `#212529`, muted `#777`,
      subtle `#b3b3b3`, surface `#fff`, accent `#007bff`,
      accent-dark `#0056b3`, page `#efefef`; Roboto via Google Fonts link
      (300/400/500) in `index.html`.
- [ ] TDD per section (colocated `*.test.tsx`, 100% coverage):
      PageShell + heading → DataTable (borderless thead, 4 white
      row-cards + 10px spacer gaps, token styling) → CustomCheckbox +
      SelectAll (React state) → Name links + Occupation sub-blurb →
      hover shadow behavior → responsive wrapper →
      ComponentDockFooter attribution.
- [ ] Row-cards: each data row `bg-white border-none` cells with
      `rounded-[7px] overflow-hidden` (or first/last-cell corners);
      between rows a 10px transparent spacer (`h-2.5`) — gray `#efefef`
      shows through; NO cell borders anywhere.
- [ ] Custom checkboxes: hidden native input + 20×20px indicator
      (`rounded`, `border-2 border-[#ccc]`; hover/focus `#007bff`;
      checked `#007bff` + white lucide `Check`; disabled gray states).
      Header checkbox toggles all rows (React state); rows independent.
      Checked rows show NO extra styling — only the checkbox fill.
      `aria-label` on all checkboxes; `th[scope=row/col]` semantics.
- [ ] Row hover: card shadow `0 2px 10px -5px rgba(0,0,0,0.1)` via
      `hover:shadow-...` + `transition-shadow duration-300 ease`; hover
      must NOT change checked state.
- [ ] Name cells: anchors `#007bff`, hover `#0056b3`, NO underline
      (source forces `text-decoration: none !important`),
      `transition-colors duration-300 ease`.
- [ ] Occupation cells: title + block-level small blurb `#b3b3b3`/300 at
      80% size (same kind of placeholder sentence in every row).
- [ ] Table: `min-w-[900px]` inside `overflow-x-auto`; cell text
      `#777`/300, `px-3 py-5` (0.75rem/20px), `align-top`; borderless
      thead (6 columns incl. select-all checkbox cell).
- [ ] Assets: NONE in source — no images needed; lucide-react icons only
      (no icomoon); no framework CSS — Tailwind utilities + @theme.
- [ ] Zero ColorLib references in app files (comments included); footer
      links `https://www.componentdock.com/` branded "Component Dock".
- [ ] `scripts/verify-app.sh rowcard` green; PR `feat/template-rowcard`
      with source slug + preview URL + tokens in the description; squash
      merge immediately; then `[~]`→`[x]` bookkeeping in TEMPLATES.md +
      `npm run readme:status` (implementer's flow — prep never sets
      markers).

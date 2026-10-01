# Crossline (ColorLib "Table With Vertical Horizontal Highlight") — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-crossline`. Recreation name:
> **Crossline** (NEW name — the ColorLib source keeps its name
> "Table With Vertical Horizontal Highlight"; snippet self-title
> "Table V03").
>
> Full replication research (ZIP source, DOM skeleton, per-version
> CSS tokens, JS behavior, screenshot analysis, fidelity decisions)
> lives in `design-notes.md` in this folder — read it first. The
> OpenSpec requirements are in `openspec/specs/template-crossline/spec.md`.

## Quick facts

- **ColorLib item:** "Table With Vertical Horizontal Highlight"
  (TEMPLATES.md line 2894, "## Table (25)" at line 2868). Slug
  `table-with-vertical-horizontal-highlight` appears exactly ONCE.
- **Preview URL:** ⚠️ **UNREACHABLE** — both
  https://preview.colorlib.com/theme/table-with-vertical-horizontal-highlight/
  AND the `bootstrap/` sibling path return **HTTP 404** (verified
  2026-10-01). Unlike table-04…10, this snippet is not on the preview
  host at all.
- **Canonical reference:** the source **ZIP**
  https://preview.colorlib.com/downloads/free/table-with-vertical-horizontal-highlight.zip
  (HTTP 200, 172,952 B) — index.html (35,189 B) + css/style.css
  (9,952 B, 557 lines) + js/snippet.js (984 B, vanilla JS) +
  Montserrat-Regular/Medium woff2 + README ("Table V03 … no jQuery,
  no Bootstrap, no build step"). All tokens captured from it — do not
  re-fetch.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-with-vertical-horizontal-highlight.jpg
  — REAL JPEG 1200×560 progressive (37,079 B); shows ver1 in hover
  state on the gray canvas. ⚠️ its sample data differs from the ZIP's
  — **ZIP data is canonical**.
- **Signature tokens:** mid-gray canvas **`#d1d1d1`** (the only
  table-family page on mid-gray — NOT `#fafafa`/`#f8f9fd`), Montserrat
  **400 (td 14px `#808080`) + 500 (th 12px white uppercase)**, wrap
  **1300px**, table gap **110px**, six per-version treatments (plum
  `#36304a` / charcoal `#333333` / indigo `#6c7ae0` / coral `#fa4251`
  / teal `#002933` / purple-blue gradient card `#ac32e4`→`#4801ff`
  16px radius), and the three-strength crosshair hover (row CSS +
  column JS class + strongest exact-cell CSS).
- **Source JS:** YES — `js/snippet.js` toggles
  `hov-column-verN`/`hov-column-head-verN` classes on mouseover of
  every cell. The ONLY JS-interactive table on main. React
  translation: per-table `hoveredColumn` state (mouseenter on cells,
  mouseleave on the wrapper). ver6 has NO head-highlight rule — its
  header cell joins the plain column highlight.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app to `apps/crossline`,
   rename package to `@free-react-templates/crossline`, run
   `npm install` at repo root, set `public/CNAME` + `homepage` to
   `crossline.free.componentdock.com`, register `injectUiSource()` in
   `vite.config.ts`.
2. **Tokens** — `src/index.css` `@theme`: `--color-canvas: #d1d1d1`,
   `--color-celltext: #808080`, `--color-headtext: #fff` + the
   per-version hexes (see spec token table). Load **Montserrat 400 +
   500** via Google Fonts `<link>` in `index.html` (never ship woff2).
3. **Components** (colocated tests, TDD, 100% coverage):
   - `Navbar` / `PageHeading` — none (source has ZERO headings and no
     navbar; skip both).
   - `ScheduleTable` — one parametrized component rendering a single
     8×8 table: semantic `<table>/<thead>/<tbody>`, `scope="col"` on
     labeled th (visually-hidden "Name" on the corner cell), th
     12px/500/uppercase/white/padding 24-20 top/bottom, td
     14px/400/`#808080`/padding 18-14, name column 265px (42px left
     pad), day columns 130px (25px left pad), 10px right pad. Takes
     `variant: 'ver1'…'ver6'` + the canonical schedule data +
     hover-state props.
   - `CrosshairTable` (or state inside `ScheduleTable`) —
     `hoveredColumn` state per table: cell `onMouseEnter` sets the
     column key, wrapper `onMouseLeave` clears it; hovered column
     body cells get the variant's column class, the column's header
     cell gets `hov-column-head` treatment for ver1–5 only (ver6:
     plain column class on the header too). Row hover + exact-cell
     hover are pure CSS (`:hover` variants per token table).
   - `TreatmentTable` wrapper — 110px bottom margin + per-table
     `overflow-x-auto` wrapper (source has none; documented
     robustness divergence).
   - `Footer` — Component Dock attribution only (14px `#808080`).
4. **Data** — static array of 8 staff rows × 7 day cells (times or
   `"--"`), identical for all six tables; array of 6 variants
   (ver1–ver6) mapping to the token table. Paraphrase allowed if
   same kind of content (8 staff × week grid, times/`--`).
5. **Verify** — `scripts/verify-app.sh crossline` green (typecheck,
   lint, 100% coverage, build); PR `feat/template-crossline` to main
   with source slug + ZIP/screenshot URLs + tokens in the
   description; note the documented divergences (per-table scroll,
   visually-hidden corner label, optional `th scope="row"` names,
   Component Dock footer, pointer-only hover) in the PR;
   squash-merge immediately; then `[~]`→`[x]` + `npm run
   readme:status` bookkeeping (implementer stream owns the TEMPLATES.md
   marker).

## Fidelity notes (section by section)

- **Page shell** — `#d1d1d1` full-viewport canvas, flex-centered,
  padding 33px 30px, wrap max-w 1300px. NO headings, NO navbar (the
  source page is tables-only).
- **ver1** — plum `#36304a` header; row hover `#f2f2f2`; column
  `#f2f2f2`; head `#484848`; cell hover `#6c7ae0` white (the
  screenshot's state).
- **ver2** — charcoal `#333333` header; even stripes `#eaf8e6`; row +
  column `#83d160` white; head `#484848`; cell `#57b846` white.
- **ver3** — indigo `#6c7ae0` header; row borders 1px `#e5e5e5`;
  row + column `#fcebf5` (text unchanged); head `#7b88e3`; cell
  `#e03e9c` white.
- **ver4** — coral `#fa4251` header; row hover TEXT-ONLY `#fa4251`
  (⚠️ no bg); column `#ffebed`; head `#f95462`; cell `#ffebed` with
  `#fa4251` text.
- **ver5** — teal `#002933` header; even stripes `#e9faff`; row hover
  TEXT-ONLY `#fe3e64`; column `#fe3e64` + 1px `#f2f2f2` side borders
  (source `::before` overlay — Tailwind `border-x` equivalent OK);
  head `#1a3f48` with `#fe3e64` text; cell `#fe3e64` + 1px `#fe3e64`
  outline (source `::before` — `ring`/`border` equivalent OK).
- **ver6** — 16px-radius card, `linear-gradient(-68deg, #ac32e4,
  #4801ff)`, transparent table, white 14px cells, header
  `rgba(255,255,255,0.32)`; row + column (header INCLUDED — ⚠️ no
  head-highlight rule for ver6) `rgba(255,255,255,0.1)`; cell
  `rgba(255,255,255,0.2)`.
- **Crosshair** — three strengths: exact cell (strongest `:hover`),
  whole row (CSS `tr:hover`), whole column (React state mirroring
  `snippet.js`'s class toggling). Independent per table. Pointer-only
  (no tabindex — documented a11y choice; data readable statically).
- **Responsive** — per-table `overflow-x-auto` below natural width
  (~1240px); source overflows at page level (documented divergence).
- **Footer** — minimal Component Dock attribution (monorepo rule;
  source has none). Zero ColorLib references in the app.

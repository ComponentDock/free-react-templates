# Flexure (ColorLib Responsive Table V2) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-flexure`. Recreation name: **Flexure** (NEW name
> — the ColorLib source keeps its name "Responsive Table V2").
>
> Full replication research (source ZIP analysis, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-flexure/spec.md`.

## Quick facts

- **ColorLib item:** "Responsive Table V2" (TEMPLATES.md line 2883,
  "## Table (25)" section). Slug `responsive-table-v2` appears exactly ONCE
  in TEMPLATES.md.
- **Preview URL — UNREACHABLE (verified 2026-09-30):** both the slug-only
  URL `https://preview.colorlib.com/theme/responsive-table-v2/` and the
  bootstrap-path variant `https://preview.colorlib.com/theme/bootstrap/responsive-table-v2/`
  return **HTTP 404** (9-byte bodies). Same as its V1 sibling Pliancy /
  responsive-table-v1 and Headlock / fixed-header-table — the bootstrap/
  path works only for the css-table-12..20 family; do not assume. The
  source page offers a ZIP download which was extracted and analyzed —
  this is the authoritative reference.
- **Source ZIP:** `https://preview.colorlib.com/downloads/free/responsive-table-v2.zip`
  (HTTP 200, 105,542 bytes). Contains `index.html` (3,807 bytes — full
  single-page div-table markup), `css/style.css` (6,050 bytes),
  `fonts/Poppins-Regular.woff2` + `fonts/Poppins-Bold.woff2` (TWO faces),
  favicon, README (title "Table V02" is correct, but its "What's inside"
  list mentions `js/snippet.js` — STALE template text: **NO JavaScript**
  ships; no js/ folder at all).
- **Key tokens:** Poppins Regular + Bold (cells/header = Poppins-Regular
  400; stacked labels = the Poppins-Bold FACE), **SOLID page**
  `#c4d3f6` (pale periwinkle — NOT a gradient, unlike V1/Pliancy's
  `#4158d0`→`#c850c0` 45deg gradient), min-height 100vh flex-centered
  padding 33px/30px (NO ≤576px override), wrap **960px** (vs V1's 1170px)
  `border-radius: 10px` + `overflow: hidden` + **NO box-shadow**, header
  band `#6c7ae0` with white Poppins-Regular 18px **regular** labels
  (py 19px), body cells Poppins-Regular 15px `#666666` py 20px with
  `border-bottom: 1px solid #f2f2f2`, **NO zebra striping**, columns
  360(+40pad)/160/250/190px **all left-aligned** (no right-align
  anywhere), hover → `#ececff` + pointer on **EVERY row including the
  header band** (CSS-canonical quirk). **SIGNATURE = responsive reflow at
  ≤768px (NOT V1's 992px):** grid/rows/cells → block, header row collapses
  (h-0, cells hidden), rows become separated blocks (padding 30/15r/18,
  `#f2f2f2` bottom border), cells block (pl-30px, py-16px) with text
  **GROWING to 18px `#555555`**, `:before` labels via
  `content: attr(data-title)` — the cell's own `data-title` ATTRIBUTE
  (NOT `nth-child` like V1) — Poppins-Bold face, 12px `#808080`,
  UPPERCASE, mb-13px, min-w-98px, block (labels stack ABOVE values).
- **Data:** 4 columns (Full Name · Age · Job Title · Location) × 8 rows —
  employee directory; rows 7–8 DUPLICATE rows 1–2 (source quirk —
  replicate as-is).
- **Sections in DOM order:** periwinkle page shell (flex center, full
  viewport, 960px rounded column) → single employee grid card → Component
  Dock attribution footer (source has none; monorepo rule mandates it).
- **Interactive model:** NONE beyond the CSS-only row hover. No state, no
  handlers, no scripts. Resizing across 768px flips grid ↔ stacked modes.
- **Naming check:** "flexure" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, TEMPLATES.md content, or any
  git-tracked path (verified 2026-09-30 — zero hits across all pools;
  nearest flex-family names flexly / reflexly / flexpose / flexzone are
  taken). Flexure = the state of being bent/flexible — the div-table's
  signature responsive reflow. Fits the sibling naming idiom gridline /
  rowglow / gridspan / rowcard / gridpane / nightgrid / cellswitch /
  cellgrid / cellcrew / cellmate / fixstack / headlock / pliancy.
- **Sibling warning (Pliancy!):** Pliancy (`responsive-table-v1`) is the
  CLOSEST sibling — same family, same reflow idiom — but their tokens
  differ COMPLETELY: Pliancy = GRADIENT page `#4158d0`→`#c850c0`, Open
  Sans, REAL `<table>`, 1170px, 992px breakpoint, `:nth-child` absolute
  side-labels, zebra `#f5f5f5`, right-aligned numeric cols, 14-row
  electronics order log. Flexure = SOLID `#c4d3f6` page, Poppins,
  DIV-based grid, 960px, **768px** breakpoint, `attr(data-title)` inline
  top-labels, NO zebra, all-left-aligned, 8-row employee directory,
  header-band hover quirk. **Do not borrow either spec's tokens.**

## Implementation outline (for the implementer)

1. Copy the simplest existing app as the base; rename the package to
   `@free-react-templates/flexure`; run `npm install` at the repo root
   (lockfile registration); set `homepage` + `public/CNAME`
   (`flexure.free.componentdock.com`); keep the `injectUiSource()` vite
   pattern.
2. `index.html`: Google Fonts `<link>` for Poppins **400 + 700**. NEVER
   copy the woff2 files from the source ZIP.
3. `src/index.css` `@theme` tokens (see the spec's verification checklist):
   page-periwinkle `#c4d3f6`, header-indigo `#6c7ae0`, cell-ink `#666666`,
   border-hair `#f2f2f2`, hover-lavender `#ececff`, mobile-ink `#555555`,
   label-ink `#808080`.
4. Components: `App.tsx` (periwinkle shell + centered 960px rounded column
   + footer) → `StaffGrid.tsx` (div-based grid mirroring the source:
   `display: table` wrapper > `display: table-row` rows > `display:
   table-cell` cells; the spec PERMITS a semantic `<table>` equivalent if
   every visual token matches — but the div structure is the 1:1-fidelity
   choice). No state, no handlers — hover is pure Tailwind
   (`hover:bg-hover-lavender cursor-pointer` on EVERY row incl. the
   header band).
5. Desktop geometry: header band `bg-header-indigo text-white py-[19px]
   text-lg font-normal` (regular — if you use a real `<table>`, th renders
   bold by default and you MUST set `font-normal`; with divs there is no
   UA bold), labels Full Name / Age / Job Title / Location; cells `py-5
   text-[15px] text-[#666] border-b border-[#f2f2f2]`; columns
   360px(+pl-10)/160px/250px/190px — ALL left-aligned (`text-left`
   everywhere, NO text-right); NO zebra classes; NO shadow on the card;
   wrap `w-[960px] rounded-[10px] overflow-hidden`; container
   `bg-[#c4d3f6] min-h-screen flex items-center justify-center
   flex-wrap px-[30px] py-[33px]`.
6. Stacked mode (SIGNATURE): **768px is a default Tailwind breakpoint
   (`md:` = min-width 768px), BUT `max-md:` = max-width 767.996px does NOT
   cover exactly 768px where the source switches** — use arbitrary
   `max-[768px]:` variants for exact fidelity. At ≤768px: rows
   `max-[768px]:block max-[768px]:border-b max-[768px]:border-[#f2f2f2]
   max-[768px]:pt-[30px] max-[768px]:pr-[15px] max-[768px]:pb-[18px]`;
   header row `max-[768px]:h-0 max-[768px]:p-0` + header cells
   `max-[768px]:hidden`; body cells `max-[768px]:block
   max-[768px]:border-0 max-[768px]:pl-[30px] max-[768px]:py-4
   max-[768px]:text-lg max-[768px]:text-[#555]`; `:before` labels via
   `data-title` attribute + `before:content-[attr(data-title)]
   before:block before:font-bold before:text-xs before:text-[#808080]
   before:uppercase before:mb-[13px] before:min-w-[98px]` (Poppins 700 =
   the source's separate Poppins-Bold face); widths
   `max-[768px]:w-full` on container/rows/cells. `data-title` strings:
   "Full Name", "Age", "Job Title", "Location".
7. Data: `staff.ts` — the verbatim 8-row dataset from design-notes.md
   (including the rows 7–8 = 1–2 duplicate quirk; do not "fix" it).
8. Footer: minimal "Component Dock" attribution link
   (https://www.componentdock.com/). Zero ColorLib references anywhere in
   the app (comments included).
9. Tests (TDD, 100% coverage): scenarios mirror the spec's Gherkin — shell
   renders with solid `#c4d3f6` + Poppins 400+700 loaded, footer
   attribution, card renders (radius, no shadow), header labels +
   `#6c7ae0` + regular weight, 8 rows incl. duplicate quirk, column
   geometry + left-alignment + no zebra, hover classes present on rows
   (incl. header band), stacked-mode markup invariants (data-title
   attributes present, header-hidden utility, `:before` label utilities) —
   note jsdom cannot evaluate CSS media queries, so assert the CLASS
   MARKUP that drives the breakpoint behavior rather than computed
   styles.
10. Verify: `scripts/verify-app.sh flexure`; PR `feat/template-flexure`
    — description must include source slug `responsive-table-v2`, the
    UNREACHABLE preview caveat (both paths 404; ZIP
    `preview.colorlib.com/downloads/free/responsive-table-v2.zip` was the
    reference), the design tokens used, and what differs (renames; Poppins
    via Google Fonts instead of self-hosted woff2; Component Dock footer
    added).

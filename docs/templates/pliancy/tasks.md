# Pliancy (ColorLib Responsive Table V1) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-pliancy`. Recreation name: **Pliancy** (NEW name
> — the ColorLib source keeps its name "Responsive Table V1").
>
> Full replication research (source ZIP analysis, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-pliancy/spec.md`.

## Quick facts

- **ColorLib item:** "Responsive Table V1" (TEMPLATES.md line 2882,
  "## Table (25)" section). Slug `responsive-table-v1` appears exactly ONCE
  in TEMPLATES.md.
- **Preview URL — UNREACHABLE (verified 2026-09-30):** both the slug-only
  URL `https://preview.colorlib.com/theme/responsive-table-v1/` and the
  bootstrap-path variant `https://preview.colorlib.com/theme/bootstrap/responsive-table-v1/`
  return **HTTP 404**. (The bootstrap/ path works for the css-table-12..20
  family but NOT for this slug — do not assume.) The source page offers a
  ZIP download which was extracted and analyzed — this is the authoritative
  reference.
- **Source ZIP:** `https://preview.colorlib.com/downloads/free/responsive-table-v1.zip`
  (HTTP 200, 67,253 bytes). Contains `index.html` (5,095 bytes — single
  table page), `css/style.css` (6,723 bytes), `fonts/OpenSans-Regular.woff2`
  (60,412 bytes), favicon, README (stale title "Table V01"). **NO
  JavaScript** — the responsive reflow is 100% CSS (the README template
  text mentions `js/snippet.js` but the ZIP ships no js/ folder).
- **Key tokens:** OpenSans-Regular ONLY (weight 400 — header labels are
  REGULAR, not bold: `font-weight: unset` reverts the UA default), **page
  gradient** `linear-gradient(45deg, #4158d0, #c850c0)` (blue-violet →
  magenta, min-height 100vh, flex-centered, padding 33px/30px, ≤576px →
  15px sides), wrap 1170px, white table card `border-radius: 10px` +
  `overflow: hidden` + **NO box-shadow**, header row `#36304a` 60px with
  white 18px labels, body rows 50px Open Sans 15px `#808080`, zebra even
  rows `#f5f5f5`, hover → `#555555` / `#f5f5f5` / pointer, columns
  260(+40pad)/160/245/110r/170r/222r(+62pad)px. **SIGNATURE = responsive
  reflow at ≤992px:** table→block, thead→none, rows→stacked cards (37px
  padding), tds `padding-left: 40%` + `margin-bottom: 24px` (last: 0) +
  `width: 100%` + left-align, `:before` labels per nth-child (Date/Order
  ID/Name/Price/Quantity/Total — 14px `#999`, absolute left 30px width
  40%), body 14px.
- **Data:** 6 columns (Date · Order ID · Name · Price · Quantity · Total)
  × 14 rows — electronics order log; rows 11–14 DUPLICATE rows 7–10
  (source quirk — replicate as-is).
- **Sections in DOM order:** gradient page shell (flex center, full
  viewport, 1170px centered column) → single orders table card → Component
  Dock attribution footer (source has none; monorepo rule mandates it).
- **Interactive model:** NONE beyond the CSS-only row hover. No state, no
  handlers, no scripts. Resizing across 992px flips grid ↔ stacked modes.
- **Naming check:** "pliancy" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, TEMPLATES.md content, or any
  git-tracked path (verified 2026-09-30 — zero hits across all pools).
  Pliancy = the quality of being pliant, i.e. adapting shape — the table's
  signature responsive reflow. Fits the sibling naming idiom gridline /
  rowglow / gridspan / rowcard / gridpane / nightgrid / cellswitch /
  cellgrid / cellcrew / cellmate / fixstack / headlock.
- **Sibling warning:** Headlock (`fixed-header-table`) and Fixstack
  (`fixed-column-table`) are white-page table snippets — Pliancy is the
  ONLY table template with a GRADIENT page and the ONLY one whose
  signature is viewport-responsive reflow. The css-table family
  (rowcard/gridpane/nightgrid/…) are single-table snippets with their own
  idiom — do not borrow their tokens.

## Implementation outline (for the implementer)

1. Copy the simplest existing app as the base; rename the package to
   `@free-react-templates/pliancy`; run `npm install` at the repo root
   (lockfile registration); set `homepage` + `public/CNAME`
   (`pliancy.free.componentdock.com`); keep the `injectUiSource()` vite
   pattern.
2. `index.html`: Google Fonts `<link>` for Open Sans **400 only**. NEVER
   copy the woff2 files from the source ZIP.
3. `src/index.css` `@theme` tokens (see the spec's verification checklist):
   brand-from `#4158d0`, brand-to `#c850c0` (or one gradient token),
   header-plum `#36304a`, cell-ink `#808080`, zebra `#f5f5f5`, hover-ink
   `#555555`, label-ink `#999999`.
4. Components: `App.tsx` (gradient shell + centered 1170px column + footer)
   → `OrdersTable.tsx` (single `<table>`: thead 6 th + tbody 14 rows from
   a `orders.ts` data module). No state, no handlers — hover is pure
   Tailwind (`hover:bg-zebra hover:text-hover-ink cursor-pointer` on tr).
5. Desktop geometry: `<colgroup>` or per-column classes for
   260/160/245/110/170/222px; column1 `pl-10` (40px), column6 `pr-[62px]`;
   cells `pl-2` (8px); th `text-right` on cols 4–6 + **`font-normal`
   explicitly** (v4 preflight does NOT reset th weight — it would render
   bold); thead tr `h-[60px]` bg `#36304a`; tbody tr `h-[50px]`; even
   rows `even:bg-zebra`; table `rounded-[10px] overflow-hidden` — NO
   shadow.
6. Stacked mode (SIGNATURE): 992px is NOT a default Tailwind breakpoint —
   use arbitrary `max-[992px]:` variants (or register a custom breakpoint
   in `@theme`). At ≤992px: thead `max-[992px]:hidden`, table/rows/cells
   `max-[992px]:block`, tr `max-[992px]:py-[37px] max-[992px]:h-auto`, td
   `max-[992px]:pl-[40%] max-[992px]:mb-6 max-[992px]:w-full
   max-[992px]:text-left` (last-child mb-0), `:before` labels via
   `data-label` + `before:content-[attr(data-label)] before:absolute
   before:left-[30px] before:top-0 before:w-[40%] before:text-sm
   before:text-[#999]` (needs `relative` on the td or tr), tbody
   `max-[992px]:text-sm`. 576px: shell `max-[576px]:px-[15px]`.
7. Data: `orders.ts` — the verbatim 14-row dataset from design-notes.md
   (including the rows 11–14 = 7–10 duplicate quirk; do not "fix" it).
   `data-label` strings: "Date", "Order ID", "Name", "Price", "Quantity",
   "Total".
8. Footer: minimal "Component Dock" attribution link
   (https://www.componentdock.com/). Zero ColorLib references anywhere in
   the app (comments included).
9. Tests (TDD, 100% coverage): scenarios mirror the spec's Gherkin — shell
   renders with gradient + Open Sans 400 loaded, footer attribution,
   table card renders (radius, no shadow), header labels + `#36304a` +
   regular weight, 14 rows incl. duplicate quirk, column geometry, zebra
   even rows, hover classes present, stacked-mode markup invariants
   (data-label attributes present, thead hidden utility, `:before`
   label utilities) — note jsdom cannot evaluate CSS media queries, so
   assert the CLASS MARKUP that drives the breakpoint behavior rather
   than computed styles.
10. Verify: `scripts/verify-app.sh pliancy`; PR `feat/template-pliancy`
    — description must include source slug `responsive-table-v1`, the
    UNREACHABLE preview caveat (both paths 404; ZIP
    `preview.colorlib.com/downloads/free/responsive-table-v1.zip` was the
    reference), the design tokens used, and what differs (renames; Open
    Sans via Google Fonts instead of self-hosted woff2; Component Dock
    footer added).

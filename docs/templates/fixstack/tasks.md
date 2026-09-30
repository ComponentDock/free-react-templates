# Fixstack (ColorLib Fixed Column Table) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fixstack`. Recreation name: **Fixstack** (NEW
> name — the ColorLib source keeps its name "Fixed Column Table").
>
> Full replication research (source ZIP analysis, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-fixstack/spec.md`.

## Quick facts

- **ColorLib item:** "Fixed Column Table" (TEMPLATES.md line 2880,
  "## Table (25)" section). Slug `fixed-column-table` appears exactly
  ONCE in TEMPLATES.md.
- **Preview URL — UNREACHABLE (verified 2026-09-30):** both the
  slug-only URL `https://preview.colorlib.com/theme/fixed-column-table/`
  and the bootstrap-path variant
  `https://preview.colorlib.com/theme/bootstrap/fixed-column-table/`
  return **HTTP 404**. The source page
  (https://colorlib.com/wp/template/fixed-column-table/) offers a ZIP
  download which was extracted and analyzed — this is the authoritative
  reference.
- **Source ZIP:** `https://preview.colorlib.com/downloads/free/fixed-column-table.zip`
  (HTTP 200, 139,594 bytes). Contains `index.html` (5,315 bytes),
  `css/style.css` (5,895 bytes), `fonts/Roboto-Medium.woff2`,
  `fonts/Roboto-Bold.woff2`, favicon. **NO JavaScript** — zero
  interactivity in the source.
- **Key tokens:** Roboto-Medium (body cells) / Roboto-Bold (headers),
  **page gradient** `#c471f5` (purple, top) → `#fa71cd` (pink, bottom)
  vertical, white `#fff` table card, header `#333333` bold uppercase
  14px, first-column body `#666666`, other-column body `#999999`,
  row separators 1px `#f2f2f2`, container max-width 1366px padding
  33px 100px, fixed column 310px absolute z-index 1000, scrollable
  area padding-left 310px overflow auto, second table `table-layout:
  fixed` with columns 225/205/195/235/170/330/305px, cell padding
  th=21px td=16px.
- **Sections in DOM order:** gradient page shell (flex center, full
  viewport) → white table card → two-table layout (fixed first column
  "Employees" + scrollable 7-column table) → Component Dock
  attribution footer (source has none; monorepo rule mandates it).
- **Interactive model:** NONE. No state, no handlers, no hover
  effects. The only "interaction" is native horizontal scrolling of
  the second table, which reveals hidden columns while the first
  column stays fixed via absolute positioning.
- **Naming check:** "fixstack" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content
  (verified 2026-09-30 — zero hits across all pools). Fits the table
  sibling naming idiom gridline / rowglow / gridspan / rowcard /
  gridpane / nightgrid / cellswitch / cellgrid / cellcrew / cellmate
  ("fix" = fixed column; "stack" = layered two-table stack).
- **Sibling warning:** Gridline (`css-table-11` — checkboxes, no
  gradient), Rowglow (`css-table-12`), Gridspan (`css-table-13`),
  Rowcard (`css-table-14`), Gridpane (`css-table-15`), Nightgrid
  (`css-table-16` — dark variant), Cellswitch (`css-table-17` — iOS
  toggles), Cellgrid (`css-table-18` — dark), Cellcrew (`css-table-19`
  — avatars), Cellmate (`css-table-20` — toggle/strike). Do NOT copy
  tokens across variants. Fixstack is the ONLY one with a gradient
  page background and a fixed-column two-table layout.

## Implementation outline (for the implementer)

1. Copy the simplest existing app as the base; rename the package to
   `@free-react-templates/fixstack`; run `npm install` at the repo root
   (lockfile registration); set `homepage` + `public/CNAME`
   (`fixstack.free.componentdock.com`); keep the `injectUiSource()` vite
   pattern.
2. `index.html`: Google Fonts `<link>` for Roboto 500 (Medium) and 700
   (Bold). NEVER copy the woff2 files from the source ZIP.
3. `src/index.css` `@theme` tokens (see the spec's verification
   checklist): gradient-top `#c471f5`, gradient-bottom `#fa71cd`,
   card `#fff`, header `#333333`, first-col `#666666`, other-col
   `#999999`, separator `#f2f2f2`.
4. Components: `App.tsx` (gradient shell + centered card + footer) →
   `FixedColumnTable.tsx` (the two-table layout: absolute first column
   + scrollable second table). No state, no handlers, no interactivity.
5. Fixed column: render a single-column table inside a
   `position: absolute; z-index: 1000; width: 310px; top: 0; left: 0`
   container with white background. The scrollable area gets
   `padding-left: 310px; overflow: auto; padding-bottom: 28px`.
6. Second table: `table-layout: fixed` with explicit column widths
   (225/205/195/235/170/330/305px). Headers uppercase Roboto-Bold
   14px `#333333`. Body Roboto-Medium 15px, first-col `#666666`,
   others `#999999`. Row separators 1px `#f2f2f2`.
7. Data: 7 rows matching the source (Brandon Green / CMO / 16 Nov 2012
   / 16 Nov 2017 / brandon94@example.com / 30 / New York City, NY /
   424242xxxxxx6262, etc. — see the source HTML in design-notes.md).
8. Footer: minimal "Component Dock" attribution link
   (https://www.componentdock.com/). Zero ColorLib references anywhere
   in the app (comments included).
9. Tests (TDD, 100% coverage): scenarios mirror the spec's Gherkin —
   gradient renders, card centered, fixed column absolute-positioned,
   scroll area padded, header styling, body cell colors, row
   separators, column widths, no-interactivity invariant, footer
   attribution.
10. Verify: `scripts/verify-app.sh fixstack`; PR
    `feat/template-fixstack` — description must include source slug
    `fixed-column-table`, the UNREACHABLE preview caveat (both paths
    404; ZIP was the reference), the design tokens used, and what
    differs (renames; Roboto via Google Fonts instead of self-hosted
    woff2; Component Dock footer added).

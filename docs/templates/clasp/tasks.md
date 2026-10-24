# Tasks & Design Notes: Clasp (Accordion 19)

## Overview

Recreation of ColorLib **Accordion 19** (`https://colorlib.com/wp/template/accordion-19/`,
live demo `https://preview.colorlib.com/theme/bac/accordion-19/`) as **Clasp** — a single centred
accordion list, no page chrome.

Spec: `openspec/specs/template-clasp/spec.md`
Brief with measured tokens, document order and interaction notes: `docs/templates/clasp/design-notes.md`
TEMPLATES.md: row **658** (`## Bootstrap Accordions (20)`)
Shipped: https://clasp.free.componentdock.com

Row 658 previously read `[x] … [stride]`, but `apps/stride` renders ColorLib Stamina's copy
(`docs/spec-row-mismatch.md` → `ROW-POINTER`); Stamina ships as `grit`, so stride is a surplus
duplicate and the accordion-19 design had never been built. The row was re-claimed for this build.

## Section order & architecture

The reference is a snippet: `.content` (7rem vertical padding) holding one heading and one
accordion group. There is no navbar, hero, feature grid, testimonial band or newsletter form —
the recreation ships the same two bands plus the mandatory credit line.

| # | file | band | status |
| --- | --- | --- | --- |
| 1 | `src/App.tsx` | centred band: `h1` naming the list + the accordion, inside a ≤1,140px column | [x] |
| 2 | `src/components/Accordion.tsx` | disclosure rows — 5 items, first open, **exclusive** toggling, `aria-expanded` / `aria-controls` / `role="region"` | [x] |
| 3 | `src/components/Footer.tsx` | Component Dock credit (`https://www.componentdock.com/`) | [x] |
| 4 | `src/data.ts` | the reference's three questions verbatim + two billing/support questions; one lorem answer each | [x] |

## Tasks

- [x] Spec written from the live demo DOM + sheet
- [x] Brief (`design-notes.md`) with measured tokens, document order and interaction model
- [x] App scaffolded from the sibling accordion app (same stack, `injectUiSource()` kept intact)
- [x] Reference questions present and the first row open on load
- [x] Exclusive row toggling with disclosure semantics and a visible focus ring
- [x] Skin matches the measured tokens: accent `#72c02c`, ink `#999` / `#888` / `#212529`,
      hairline `#f9f9f9`, square rows, no gap, 15px label padding with zero left inset, Roboto
- [x] Footer credit to Component Dock
- [x] No source-site name, domain or URL anywhere under `apps/clasp/`
- [x] `bash scripts/verify-app.sh clasp` green (typecheck + lint + 100% coverage + build)

## Design tokens & styling

Measured from `theme/bac/accordion-19/css/style.css` (9,070 B, sha256 `3a36f9f4…`): accent
`#72c02c`, ground `#fff`, separator `#f9f9f9`, closed ink `#999`, panel ink `#888`, heading ink
`#212529`, radius 0, row gap 0, label padding `15px 0`, band padding `7rem 0`, container 1,140px,
Roboto. Full table in the brief.

Interactive states: the open row's label **and** its chevron carry the accent, and its bottom
border turns transparent; closed rows stay `#999` with a gray chevron; the panel is plain `#888`
text with 20px bottom padding.

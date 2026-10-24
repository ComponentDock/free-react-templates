# Tasks & Design Notes: Concertina (Accordion 16)

## Overview

Recreation of ColorLib **Accordion 16** (`https://colorlib.com/wp/template/accordion-16/`,
live demo `https://preview.colorlib.com/theme/bac/accordion-16/`) as **Concertina** — a
single centred accordion strip, no page chrome.

Spec: `openspec/specs/template-concertina/spec.md` (rewritten 2026-10-24; it previously recorded
Accordion 05 and a seven-band page — see `docs/spec-row-mismatch.md`).
Brief with measured tokens and the fidelity-delta table: `docs/templates/concertina/design-notes.md`.
Shipped: https://concertina.free.componentdock.com

## Section order & architecture

The reference is a snippet: `.content` (7rem vertical padding) holding one heading and one
accordion group. There is no navbar, hero, feature grid, testimonial band or newsletter form —
the recreation ships the same two bands plus the mandatory credit line.

| # | file | band | status |
| --- | --- | --- | --- |
| 1 | `src/App.tsx` | centred band: `h1` naming the group + the accordion, vertically centred in a ≤700px column | [x] |
| 2 | `src/components/Accordion.tsx` | disclosure rows — 5 items, first open, independent toggling, `aria-expanded` / `aria-controls` / `role="region"` | [x] |
| 3 | `src/components/Footer.tsx` | Component Dock credit (`https://www.componentdock.com/`) | [x] |
| 4 | `src/data.ts` | the reference's three questions verbatim + two billing/support questions; one lorem answer each | [x] |

## Tasks

- [x] Spec rewritten to the measured Accordion 16 reference; Requirements aligned to the app
- [x] Brief (`design-notes.md`) rewritten with measured tokens + document order + delta table
- [x] Reference questions present and the first row open on load
- [x] Independent row toggling with disclosure semantics and a visible focus ring
- [x] Footer credit to Component Dock
- [x] No source-site name, domain or URL anywhere under `apps/concertina/`
- [ ] Skin parity with the reference: accent `#72c02c` (currently `#563d7c`), page ground `#efefef`
      (currently `#ffffff`), 40px borderless pills (currently 8px radius + 1px border), row ink
      `#999` → accent on open, panel ink `#888`, single Roboto face (currently Open Sans +
      Roboto Slab). Implementer change: update `src/index.css` `@theme` + `Accordion.tsx` classes,
      adjust the tests that assert the purple accent, then run
      `bash scripts/verify-app.sh concertina`

## Design tokens & styling

Measured from `theme/bac/accordion-16/css/style.css` (9,013 B, sha256 `e61cfd1c…`): accent
`#72c02c`, ground `#efefef`, row surface `#f9f9f9`, closed ink `#999`, panel ink `#888`, heading
ink `#212529`, 40px radius, 10px gaps, Roboto. Full table in the brief.

Interactive states: the open row's label **and** its glyph carry the accent; closed rows stay
`#999`; the panel is plain `#888` text at 20px padding.

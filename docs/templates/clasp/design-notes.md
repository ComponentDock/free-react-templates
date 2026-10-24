# Clasp — Design Notes

Reference: **Accordion 19** — `https://colorlib.com/wp/template/accordion-19/`
Live preview: `https://preview.colorlib.com/theme/bac/accordion-19/` (HTTP 200, 4,272 B, title `Accordion #9`, read 2026-10-24)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-19.jpg (21,725 B, AVIF 1200 × 972)
Token authority: `theme/bac/accordion-19/css/style.css?v=069fd9ef` (9,070 B, sha256 `3a36f9f446b2db024de191d6e8a7e832b08e0714eaa33dbedcbb31899956a4b4`)
Behaviour: `theme/bac/accordion-19/js/snippet.js` (4,219 B, sha256 `1885667054d18bfe61e90dd99488ad6d863f8cc12e9497858cadcd70a3d0c410`)
Archive twin: `https://preview.colorlib.com/downloads/free/accordion-19.zip` (HTTP 200, 252,065 B)
Spec: `openspec/specs/template-clasp/spec.md`
Shipped: https://clasp.free.componentdock.com

One centred accordion list and nothing else: a white page, a 20px heading, then three flat rows
separated only by a 1px `#f9f9f9` hairline — square corners, no row gap, no fill. The open row's
label and its chevron turn lime `#72c02c`; closed labels sit in `#999`, panel copy in `#888`, the
only face is Roboto. It is a snippet, not a page: the demo has no header, hero, imagery, form or
footer, which is why the recreation ships a single band plus the credit line.

Provenance note: row **658** (`## Bootstrap Accordions (20)`) was marked `[x]` with `[stride]`,
but `apps/stride` is a dark-hero fitness landing whose copy is ColorLib **Stamina**'s
(`docs/spec-row-mismatch.md`, verdict `ROW-POINTER`, 19 exclusive hits vs 0 for accordion-19).
Stamina already ships as `grit`, so stride is a surplus duplicate (`UNLINKED`) and the
accordion-19 design had never been built — the row was a false `[x]`. This run re-claims the row
and ships the design as **Clasp** (`clasp` ≠ `accordion-19`, rule 5 holds; no rename needed).

## Document order

| # | band | reference | shipped as |
| --- | --- | --- | --- |
| 1 | centred heading | `.cl-container` → `<h2 class="cl-my-5 cl-text-center">` "Bootstrap Accordion #9" | `h1` in `App.tsx` |
| 2 | accordion list | one `.custom-accordion#accordion_1` of 3 flat rows, first open, exclusive `data-parent` toggling | `Accordion` — 5 rows, first open, exclusive |
| 3 | — (reference has no footer) | — | `Footer` — Component Dock credit |

Band padding in the reference is `.content { padding: 7rem 0 }`, inside a `.cl-container` whose
max-width ladder is 540 / 720 / 960 / 1,140px with 15px gutters.

## Typography

One text face, webfont-delivered: two `@font-face` blocks for **Roboto 400**
(`fonts/roboto-400-latin.woff2`, `fonts/roboto-400-latin-ext.woff2`, `font-display: swap`) plus
the `icomoon` subset that draws the two chevrons. `body`, `h2`/`.h2` and the row buttons all
resolve to `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", …` — the stack after Roboto
is the fallback, not the delivery. Load Roboto from Google Fonts instead of copying the woff2.

| role | face | reference sizes |
| --- | --- | --- |
| heading | Roboto | 20px, `#212529`, centred, `margin: 3rem 0` |
| row label | Roboto | 20px (`h2` inside the button), `#999` closed → `#72c02c` open, `padding: 15px 0` |
| panel body | Roboto | 1rem, `#888`, `padding: 0 0 20px 0`, line-height 1.5 |

## Design tokens (measured from `theme/bac/accordion-19/css/style.css`, 9,070 B)

Sheet census: `#212529`×3, `#fff`×3, `#007bff`×2, `#0056b3`×2, `#72c02c`×2, `#6c757d`×1,
`#999`×1, `#f9f9f9`×1, `#888`×1. The two link blues are the reboot `a` / `a:hover` pair plus its
`.cl-btn-link` duplicates and are never painted (0 anchors on the page, and the snippet rule
repaints the buttons to `#999` / `#72c02c`).

| token | value | role against the reference |
| --- | --- | --- |
| accent | `#72c02c` | open row label + open chevron (the only chromatic on the page) |
| page ground | `#fff` | `body`, and the row buttons repaint `#fff` |
| separator | `1px solid #f9f9f9` | bottom border of every closed row; open row → `transparent` |
| closed label ink | `#999` | `.cl-btn-link { color: #999 }` |
| panel ink | `#888` | `.cl-accordion-body { color: #888 }` |
| heading ink | `#212529` | `body`, `h2`, `.cl-h2` |
| disabled ink | `#6c757d` | disabled link only — never painted |
| radius | `0` | square rows, square buttons |
| row gap | `0` | rows touch; the hairline is the separator |
| label padding | `15px 0` | `padding: 15px; padding-left: 0` — titles align to the heading's left edge |
| panel padding | `0 0 20px` | `.cl-accordion-body` |
| band padding | `7rem 0` | `.content` |
| container | max 1,140px, 15px gutters | `.cl-container` ladder |
| indicator | chevron-down `#999` → chevron-up `#72c02c` | `.cl-btn-link:before` `\e313` → `[aria-expanded="true"]` `\e316` + accent, 18px, `right: 0` |

## Interaction

The reference groups its three panels under `data-parent="#accordion_1"`, so the list is
**exclusive**: opening a row collapses the others, and re-activating the open row collapses it
(Bootstrap accordion mode). The recreation keeps that model — this is the difference from the
sibling accordion demos, which toggle independently. State is a single open id.

## Replication rules applied

- Structure and copy come from the live demo (no assets copied): the three reference questions
  verbatim plus two billing/support questions in the same voice, one shared lorem answer each.
- Placeholder imagery: none — the reference has no images at all, so the recreation ships none
  rather than inventing a hero.
- Icons: `lucide-react` `ChevronDown` / `ChevronUp` (the brand `+`/`−` glyphs are an icon-font
  substitute; the state colour is the fidelity point).
- Footer credits Component Dock (`https://www.componentdock.com/`) instead of the source.

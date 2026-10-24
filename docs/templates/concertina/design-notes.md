# Concertina — Design Notes

Reference: **Accordion 16** — `https://colorlib.com/wp/template/accordion-16/`
Live preview: `https://preview.colorlib.com/theme/bac/accordion-16/` (HTTP 200, 4,272 B, title `Accordion #6`, read 2026-10-24)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-16.jpg (22,541 B, AVIF)
Token authority: `theme/bac/accordion-16/css/style.css?v=20298103` (9,013 B, sha256 `e61cfd1ccb7c6cac05bc83c38f8201ae9edbddd0bc73553910011d80f18fc37a`)
Archive twin: `https://preview.colorlib.com/downloads/free/accordion-16.zip` (HTTP 200 — this family does ship an archive)
Shipped: https://concertina.free.componentdock.com

One centred accordion strip and nothing else: a `#efefef` page, a 20px heading, three soft-grey
`#f9f9f9` rows rounded into 40px pills, the open row's title and its `−` glyph in lime
`#72c02c`, the panel copy in `#888`. It is a snippet, not a page — the demo has no header, hero,
imagery, form or footer, which is why the recreation ships a single band plus the credit line.

Provenance note: this brief and `openspec/specs/template-concertina/spec.md` were rewritten on
2026-10-24. The earlier pair recorded ColorLib **"Accordion 05"** (demo `/theme/bac/accordion-05/`,
9,961 B, Poppins, mint `#75d6d1`) and described a seven-band marketing page — sticky navbar, hero,
features grid, testimonials, newsletter — none of which `apps/concertina` renders or the design
ever had. The spec ↔ row census listed `concertina spec=accordion-05 rows=accordion-16`, and its
copy adjudication found the app's own strings exclusively in accordion-16's body
(`Bootstrap Accordion #6`, `How to download and register`, `How to link your paypal and bank
account` — a16 1 / a05 0 each), verdict `SPEC-STALE` in `docs/spec-row-mismatch.md`. The tokens
below are re-measured from the accordion-16 sheet. The `[concertina]` row (line **655**, under
`## Bootstrap Accordions (20)`) already pointed at `accordion-16`, so no row moved and no rename
is needed (`concertina` ≠ `accordion-16`, rule 5 holds).

## Document order

| # | band | reference | shipped as |
| --- | --- | --- | --- |
| 1 | centred heading | `<h2>` "Bootstrap Accordion #6", `text-align: center` | `h1` in `App.tsx` |
| 2 | accordion group | one `.custom-accordion` of 3 pills, first open | `Accordion` — 5 rows, first open |
| 3 | — (reference has no footer) | — | `Footer` — Component Dock credit |

Band padding in the reference is `.content { padding: 7rem 0 }`; the recreation centres the strip
in the viewport instead, which reads the same at desktop width.

## Typography

One text face, no webfont: `body`, `h2`/`.h2` and the row buttons all resolve to
`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", …` from the system stack. The only
`@font-face` in the sheet is the `icomoon` subset that draws the `+` / `−` indicator.

| role | face | reference sizes |
| --- | --- | --- |
| heading | Roboto | `h2` 20px, `#212529`, centred, `margin: 3rem 0` |
| row label | Roboto | 1rem, `#999` closed → `#72c02c` open |
| panel body | Roboto | 1rem, `#888`, `padding: 20px` |

## Design tokens (measured from `theme/bac/accordion-16/css/style.css`, 9,013 B)

Sheet census: `#212529`×3, `#fff`×2, `#007bff`×2, `#0056b3`×2, `#72c02c`×2, `#6c757d`×1,
`#efefef`×1, `#f9f9f9`×1, `#999`×1, `#888`×1.

| token | value | role against the reference |
| --- | --- | --- |
| accent | `#72c02c` | the only chromatic painted: open `−` glyph + open row title |
| page ground | `#efefef` | `body` background (second `body` block) |
| row surface | `#f9f9f9` | `.cl-accordion-item` background; the row button repaints `#fff` |
| row ink (closed) | `#999` | `.cl-btn-link` colour |
| panel ink | `#888` | `.cl-accordion-body` colour |
| heading ink | `#212529` | `body` default, `h2` / `.h2` |
| radius | `40px` | full pill on each `.cl-accordion-item` |
| row rhythm | `10px` | `margin-bottom` between pills |
| row padding | `15px`, `padding-left: 40px` | glyph sits at `left: 15px` in the reserved 40px inset |
| panel padding | `20px` | all four sides |
| indicator | `+` → `−` | `.cl-btn-link:before` `content: "\f067"`; open state `"\f068"` in lime |
| border | none | rows are separated by ground tint and gap, not by a rule |
| type scale | 20 / 16 px | `h2` 20px; labels and panels 1rem |

Reference-only values the app does not paint: `#007bff` / `#0056b3` (generic `a` / `a:hover`),
`#6c757d` (generic `a`), `#fff` (the row button repaint). None appears on the visible band.

## Deltas the app still carries (fidelity debt, recorded not claimed)

| axis | reference | shipped `apps/concertina` |
| --- | --- | --- |
| accent | `#72c02c` | `#563d7c` purple — in neither candidate sheet (`grep -c 563d7c` = 0 / 0), an invented third palette |
| page ground | `#efefef` | `#ffffff` |
| row shape | 40px pill, borderless | 8px radius + 1px border |
| indicator | icomoon `+` / `−` | `lucide-react` chevron, rotated 180° when open |
| row ink | `#999` → `#72c02c` | `#6b6b6b` → `#563d7c` |
| panel ink | `#888` | `#6b6b6b` |
| typeface | Roboto only | Open Sans body / Roboto Slab headings |

Closing this table is an implementer change (tests + `scripts/verify-app.sh concertina`), not a
prep one.

## Section-by-section fidelity

### `Accordion`
- The reference's three questions ship verbatim; the app adds two in the same voice
  ("How to update your billing information?", "How to contact customer support?") so the strip
  reads as a real FAQ.
- Toggling is independent (the reference's Bootstrap collapse is also independent — no
  `data-parent` close behaviour is observable across these three rows), and the first row is
  open on load, matching `aria-expanded="true"` + `.cl-show` in the demo.
- Each button keeps `aria-expanded` / `aria-controls`; each panel is `role="region"` labelled by
  its button. The reference uses `h2 > button`; the recreation uses `h3` inside a `button` so the
  page keeps exactly one `h1`.
- The state colour is the fidelity point the current skin misses: the reference paints the open
  row's label **and** its glyph lime, not just the glyph.

### `Footer`
- The reference has no footer at all, so the mandatory Component Dock credit is delivered as a
  quiet last line ("© {year} Concertina — More templates at Component Dock").

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link [Component Dock](https://www.componentdock.com/). That
  is the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the source's own
  strings, it is what the source renders: the recreation replaces any credit with the Component
  Dock credit.
- **Provenance ban.** No file under `apps/concertina/` may name the source designer, carry a
  `colorlib.com` URL, or reuse the source template's name — code, comments, CSS, markup,
  metadata and filenames included (AGENTS.md rule 5).
- **Asset ban.** No source image, font or stylesheet is copied; the indicator comes from
  `lucide-react`.
- **Deploy identity.** `apps/concertina/public/CNAME` = `concertina.free.componentdock.com` and
  the package `homepage` = `https://concertina.free.componentdock.com`.

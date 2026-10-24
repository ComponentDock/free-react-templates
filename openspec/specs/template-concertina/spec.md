# Template: Concertina (Accordion / FAQ snippet)

## Purpose

A single centred accordion strip and nothing else — no header, no hero, no marketing bands:
a page tint of `#efefef`, one 20px heading, and three soft-grey (`#f9f9f9`) rows shaped as
40px pills that expand to a lorem paragraph. The open row is the only coloured thing on the
page: its title and its plus/minus glyph turn lime (`#72c02c`), every closed row sits in
`#999`. The body copy is `#888`, the typeface is Roboto. The whole snippet is one band
padded `7rem` top and bottom.

Recreation of the ColorLib **"Accordion 16"** snippet
(https://colorlib.com/wp/template/accordion-16/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

- **Source slug:** `accordion-16`
- **ColorLib page:** https://colorlib.com/wp/template/accordion-16/
- **Live preview:** https://preview.colorlib.com/theme/bac/accordion-16/ (HTTP 200, 4,272 B,
  page title `Accordion #6`). The `accordion-*` family lives under the `/theme/bac/` prefix;
  the slug-only path `https://preview.colorlib.com/theme/accordion-16/` answers **404** (9 B).
- **New name:** `concertina` (apps/concertina, `@free-react-templates/concertina`) — a single
  lowercase word that differs from the source name, has no collision in `apps/` and none in
  `openspec/specs/`
- **Deploy target:** https://concertina.free.componentdock.com (`apps/concertina/public/CNAME`,
  `homepage` in `apps/concertina/package.json`)
- **Category:** TEMPLATES.md `## Bootstrap Accordions (20)`, row **655** — the row links
  `accordion-16` and `concertina`, which is what this spec now records
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-16.jpg — **22,541 B**, served as
  **AVIF** (`content-type: image/avif`). The thumbnail shows the same three rows the live DOM
  renders; the live preview is the authority for spacing and state colours.

### Why this spec was rewritten

`apps/concertina` shipped recreating this design, but the spec it shipped with named a
different one — ColorLib **"Accordion 05"** (`/template/accordion-05/`, demo at
`/theme/bac/accordion-05/`, 9,961 B, Poppins + mint `#75d6d1`) — and described a seven-band
marketing page (sticky nav, hero, features grid, testimonials, newsletter) that the app does
not contain and the reference never had. The spec ↔ row census
(`docs/spec-row-mismatch.md`, `scripts/verify-spec-row-mismatch.py`) flagged the disagreement
(`spec=accordion-05 rows=accordion-16`); its copy adjudication searched the app's own strings in
both candidate previews and found them **exclusively** in accordion-16's body —
`Bootstrap Accordion #6` (a16 1 / a05 0), `How to download and register` (1 / 0),
`How to link your paypal and bank account` (1 / 0) — verdict **`SPEC-STALE`**. This spec is the
measured accordion-16 reference and its Requirements describe what `apps/concertina` actually
ships; `docs/templates/concertina/` was rewritten with it, because a corrected spec carrying a
stale brief still misdirects the next implementer. The folder name stays: `concertina` ≠
`accordion-16`, so rule 5 is satisfied and no rename is needed.

## Reference readings (2026-10-24, `curl -4`)

`preview.colorlib.com` answers IPv4 only from this host — plain `curl` (IPv6 first) hangs, so
every probe below passes `-4`. Hashes are the canonical body.

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/bac/accordion-16/` page (DOM authority) | 4,272 | — (page bodies are request-unstable; bytes only — `index.html` is byte-identical to the directory URL, so it is the same page, not a second one) |
| `theme/bac/accordion-16/css/style.css?v=20298103` (token authority) | 9,013 | `e61cfd1ccb7c6cac05bc83c38f8201ae9edbddd0bc73553910011d80f18fc37a` |
| `theme/bac/accordion-16/js/snippet.js?v=edc3dcd8` (collapse behaviour) | 4,219 | `ed1cd7bed848e13f2a349fdbc9fa32927477a7753321a45eae08348425e6c402` |
| screenshot (above) | 22,541 | — (AVIF 1200 × 972) |
| `downloads/free/accordion-16.zip` | 252,097 | `eeebd1b26ae9ac5a8d78fc66deaff1c7514fde1067462ce4e8e854b6461e943d` — its `css/style.css` and `js/snippet.js` hash **identically** to the live pair above, so the archive is the live twin |

- **`measure-reference-tokens.py --slug accordion-16` reports `rebuilt: False`** — the demo is the
  original build, so any mismatch with the shipped app is DRIFT, not a redesign.
- **Anchor census: the page holds 0 anchors and 3 buttons.** There is no nav, no footer and no
  inner page (`index.html` is byte-identical to the directory URL), so the snippet shows no link
  at all; the Component Dock credit is the recreation's own addition, in its last band.
- The sheet is a self-contained snippet stylesheet: no framework, no Bootstrap base, and a
  `:where(html) :is(…) { all: revert }` reset that keeps a host page's reboot off the snippet.
  It ships its own faces: **two `@font-face` blocks for Roboto 400** (`fonts/roboto-400-latin.woff2`
  and `fonts/roboto-400-latin-ext.woff2`, `font-display: swap`) plus the `icomoon` icon subset that
  draws the `+`/`−` glyphs. So the text face IS webfont-delivered — but only weight 400, which is
  the only weight the page uses. The stack after `"Roboto"` (`-apple-system, BlinkMacSystemFont,
  "Segoe UI", …`) is the fallback, not the delivery. Load Roboto from Google Fonts in the
  recreation (`css2?family=Roboto:wght@300;400;500;700&display=swap` answered **200** on
  2026-10-24); never copy the woff2.

## Design tokens (measured from `css/style.css`, 9,013 B)

Sheet census, theme sheet only: `#212529`×3, `#fff`×2, `#007bff`×2, `#0056b3`×2, `#72c02c`×2,
`#6c757d`×1, `#efefef`×1, `#f9f9f9`×1, `#999`×1, `#888`×1. `#007bff` / `#0056b3` are link colours
— the reboot `a` / `a:hover` pair (lines 122–130) plus its `.cl-btn-link` / `.cl-btn-link:hover`
duplicates (lines 286–296) — and are **not painted on this page**: the live DOM holds **0 anchors**
and 3 buttons, and the theme's `.custom-accordion .cl-btn-link` rule repaints both to `#999` /
`#72c02c` anyway. The only chromatic the visitor sees is the lime `#72c02c`.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (only chromatic) | `#72c02c` | 2 declarations — `.cl-btn-link[aria-expanded="true"]:before` (the open `−` glyph) and `.cl-accordion-item.active .cl-btn-link` (the open row's title) |
| Page ground | `#efefef` | `body { background-color: #efefef }` (second `body` block, line 385) |
| Row surface | `#f9f9f9` | `.custom-accordion .cl-accordion-item { background-color: #f9f9f9 }`; the row's own button repaints `#fff` |
| Closed row ink | `#999` | `.cl-accordion-item .cl-btn-link { color: #999 }` |
| Panel ink | `#888` | `.cl-accordion-item .cl-accordion-body { color: #888 }` |
| Ink (headings, body default) | `#212529` | 3 declarations — `body`, `h2`/`.h2`, `.cl-h2`; `h2 { font-size: 20px }` |
| Muted (disabled link) | `#6c757d` | 1 declaration — `.cl-btn-link.disabled` / `.cl-btn-link:disabled`; the page has no disabled control, so it is never painted |
| Typeface (only face) | `Roboto` | 7 references along the stack (`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", …`); `h2` re-declares it — and the sheet delivers weight 400 itself via two `@font-face` blocks (see above) |
| Row radius | `40px` | `.cl-accordion-item { border-radius: 40px; overflow: hidden }` — a full pill |
| Row rhythm | `10px` gaps | `.cl-accordion-item { margin-bottom: 10px }` |
| Row padding | `15px` / `padding-left: 40px` | `.cl-btn-link` — 40px left inset leaves room for the glyph at `left: 15px` |
| Panel padding | `20px` all round | `.cl-accordion-body { padding: 20px 20px 20px 20px }` |
| Band padding | `7rem 0` | `.content { padding: 7rem 0 }` |
| Indicator | `+` → `−` | `.cl-btn-link:before { content: "\f067" }` (icomoon plus); open state `content: "\f068"` (minus) in lime |
| Border | none | no `border` on a row — separation comes from the ground tint and the 10px gap |
| Type scale | 20 / 15 / 16 px | `h2` 20px; row label 15px padding around 1rem text; panel 1rem |

## Reference document order (one band, no chrome)

| # | what | detail |
| --- | --- | --- |
| 1 | centred heading | `<h2>` "Bootstrap Accordion #6", `text-align: center`, `margin: 3rem 0` |
| 2 | accordion group | one `.custom-accordion#accordion_1` holding 3 `.cl-accordion-item` pills |
| 2a | row 1 · open | "How to download and register?" — `aria-expanded="true"`, panel `.cl-show`, lime `−` |
| 2b | row 2 · closed | "How to create your paypal account?" |
| 2c | row 3 · closed | "How to link your paypal and bank account?" |
| 2d | panel body | all three share one lorem paragraph ("Anim pariatur cliche reprehenderit…") |

There is no header, navigation, hero, imagery, form, testimonial block or footer in the
reference: the entire demo is `.content > .cl-container` twice (heading, accordion). The
recreation therefore has room for exactly one marketing-free band plus the mandatory credit.

## Requirements

### Requirement: Centred accordion band

The template SHALL render a single page whose only band is a centred accordion group: one
heading naming the group, then the rows, vertically centred in the viewport with the
reference's `7rem` breathing room.

#### Scenario: Page loads with the band centred

- **WHEN** the page loads
- **THEN** exactly one `h1` names the accordion group
- **AND** the accordion group is horizontally centred inside a column no wider than 700px
- **AND** no navigation, hero, feature grid, testimonial or newsletter band is rendered

#### Scenario: Document title identifies the template

- **WHEN** the page loads
- **THEN** `document.title` is `Concertina — Interactive Accordion Template`
- **AND** the document description mentions the accordion, not the source site

### Requirement: Rows expand and collapse independently

Each accordion row SHALL expose its question as a button and reveal its answer in a panel;
opening one row SHALL NOT close another, and the first row SHALL be open on load.

#### Scenario: First row open on load

- **GIVEN** the page has just loaded
- **WHEN** the visitor inspects the accordion
- **THEN** the first row's button reports `aria-expanded="true"`
- **AND** its panel is present in the DOM

#### Scenario: Visitor opens a closed row

- **GIVEN** a collapsed row is displayed
- **WHEN** the visitor activates its button
- **THEN** that row's panel is revealed
- **AND** `aria-expanded` flips to `true`

#### Scenario: Visitor collapses an open row

- **GIVEN** a row is expanded
- **WHEN** the visitor activates its button again
- **THEN** the panel is removed from the DOM
- **AND** `aria-expanded` flips to `false`

#### Scenario: Two rows stay open together

- **GIVEN** the first row is open
- **WHEN** the visitor opens a second row
- **THEN** both panels are visible
- **AND** the first row is not collapsed implicitly

### Requirement: Row content carries the reference's question set

The template SHALL ship the reference's three questions verbatim and MAY extend the set with
further billing/support questions in the same voice; every row SHALL have a non-empty answer.

#### Scenario: Reference questions present

- **WHEN** the visitor reads the row labels
- **THEN** "How to download and register?", "How to create your paypal account?" and
  "How to link your paypal and bank account?" are all rendered
- **AND** every rendered row has a non-empty panel body

### Requirement: Accessible disclosure semantics

Row buttons SHALL carry `aria-expanded` and `aria-controls` pointing at their panel, and each
panel SHALL expose `role="region"` with `aria-labelledby` naming its button.

#### Scenario: Assistive technology reads the disclosure

- **GIVEN** a visitor using a screen reader focuses a row button
- **WHEN** the button is inspected
- **THEN** it is a `button` of `type="button"` with an accessible name equal to the question
- **AND** the panel it controls is labelled by that button

#### Scenario: Keyboard operation

- **GIVEN** a row button has keyboard focus
- **WHEN** the visitor presses Enter or Space
- **THEN** the row toggles exactly as it does on click
- **AND** a visible focus ring is drawn on the button

### Requirement: Footer with Component Dock attribution

The template SHALL credit Component Dock in the last band, because the reference's own
snippet carries no footer.

#### Scenario: Visitor checks the footer

- **GIVEN** the visitor scrolls to the bottom of the page
- **WHEN** they view the footer
- **THEN** a link labelled "More templates at Component Dock" points at
  `https://www.componentdock.com/`
- **AND** the copyright line names Concertina

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/concertina/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source
template's name — code, comments, CSS, markup, metadata and filenames included. Provenance
lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit
line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/concertina/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Known app delta — fidelity debt for the next implementer pass

`apps/concertina` reproduces the reference's **structure and copy** (one centred block, the
three reference questions plus two billing/support additions, first row open, independent
toggling) but not its **skin**. These deltas are recorded, not claimed:

| axis | reference (measured) | shipped `apps/concertina` | note |
| --- | --- | --- | --- |
| Accent | `#72c02c` lime | `#563d7c` purple (`--color-accent`) | the purple appears in **neither** candidate sheet (`grep -c 563d7c` = 0 in both) — it is an invented third palette |
| Page ground | `#efefef` | `#ffffff` (`--color-page`) | the reference's tint is what separates the white row buttons from the page |
| Row shape | 40px pill, borderless, 10px gap | 8px radius + 1px border per row | two different visual systems |
| Indicator | icomoon `+` / `−` glyph, lime when open | `lucide-react` chevron, rotates 180° | icon substitution is allowed; the state colour is the fidelity point |
| Row ink | `#999` closed / `#72c02c` open | `#6b6b6b` / `#563d7c` | |
| Panel ink | `#888` | `#6b6b6b` (`--color-text-body`) | |
| Typeface | Roboto (the sheet delivers weight 400 as woff2) | Open Sans body / Roboto Slab headings | the reference declares one text face |

Closing this delta is an implementer change (tests + per-app gate), not a prep one — it is not
part of this rewrite.

## Verification checklist

- [x] App exists and ships at https://concertina.free.componentdock.com
- [x] Footer links `https://www.componentdock.com/`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, `docs/templates/concertina/`, `TEMPLATES.md` and the PR
- [x] Requirements describe what `apps/concertina` renders (single band, 5 rows, first open, independent toggling, footer credit)
- [ ] Typecheck / lint / 100% coverage / build — per-app gate, run by the implementer on any app change
- [ ] Skin parity (see "Known app delta")

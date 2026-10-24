# Template: Clasp (Accordion #9 / FAQ list)

## Purpose

A single centred accordion list on a white page — no header, no hero, no marketing bands:
one 20px heading, then three label rows drawn as a flat list, each separated by nothing but a
1px `#f9f9f9` hairline and padded `15px` with a zero left inset, so the titles line up with the
heading's left edge. The open row is the only coloured thing on the page: its label and the
chevron at its far right turn lime (`#72c02c`). Closed labels sit in `#999`, panel copy in
`#888`, the typeface is Roboto, and the band is padded `7rem` top and bottom. Unlike the
pill-shaped accordion demos, this one has square corners, no row gap and no fill — the list is
the page.

Recreation of the ColorLib **"Accordion 19"** snippet
(https://colorlib.com/wp/template/accordion-19/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

- **Source slug:** `accordion-19`
- **ColorLib page:** https://colorlib.com/wp/template/accordion-19/ (HTTP 200, 113,786 B)
- **Live preview:** https://preview.colorlib.com/theme/bac/accordion-19/ (HTTP 200, 4,272 B,
  page title `Accordion #9`). The `accordion-*` family lives under the `/theme/bac/` prefix;
  the slug-only path `https://preview.colorlib.com/theme/accordion-19/` answers **404** (9 B).
- **New name:** `clasp` (apps/clasp, `@free-react-templates/clasp`) — a single lowercase word
  naming the part that holds a folded list shut, differs from the source name, and has no
  collision in `apps/`, `openspec/specs/` or `docs/templates/`
- **Deploy target:** https://clasp.free.componentdock.com (`apps/clasp/public/CNAME`, `homepage`
  in `apps/clasp/package.json`)
- **Category:** TEMPLATES.md `## Bootstrap Accordions (20)`, row **658** — the row links
  `accordion-19`, which is what this spec records
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-19.jpg — **21,725 B**, served as
  **AVIF** (`image/avif`, 1200 × 972). It shows the same heading + three rows the live DOM
  renders, with the first row open; the live preview is the authority for spacing and state
  colours.

### Why this row had to be re-implemented

Row 658 was marked `[x]` with `[stride]`, but `apps/stride` is a dark-hero **fitness** landing
page: the spec ↔ row census (`docs/spec-row-mismatch.md`,
`scripts/verify-spec-row-mismatch.py --network`) searched stride's own copy in both designs and
found it exclusively in ColorLib **Stamina** (`Stay Healthy`, `Get The Result You Want`,
`Every Step Counts` — 19 exclusive hits, versus 0 for accordion-19), verdict `ROW-POINTER`.
Stamina is already shipped as `grit`, so `apps/stride` is a surplus duplicate of it (the
`spark`/`givehope` shape, `UNLINKED`), and the accordion-19 design had never been built at all:
the row was a false `[x]`. This run re-claims the row and ships the missing design as **`clasp`**.

## Reference readings (2026-10-24, `curl -4`)

`preview.colorlib.com` answers IPv4 only from this host — plain `curl` (IPv6 first) hangs, so
every probe passes `-4`. Hashes are the canonical body.

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/bac/accordion-19/` page (DOM authority) | 4,272 | — (page bodies are request-unstable; bytes only) |
| `theme/bac/accordion-19/css/style.css?v=069fd9ef` (token authority) | 9,070 | `3a36f9f446b2db024de191d6e8a7e832b08e0714eaa33dbedcbb31899956a4b4` |
| `theme/bac/accordion-19/js/snippet.js` (collapse behaviour) | 4,219 | `1885667054d18bfe61e90dd99488ad6d863f8cc12e9497858cadcd70a3d0c410` |
| screenshot (above) | 21,725 | — (AVIF 1200 × 972) |
| `downloads/free/accordion-19.zip` | 252,065 | `375529b890715785af9468a174613e97f7557cb8ccc9b82826fb3eacd9bb8c53` |

- **`measure-reference-tokens.py --slug accordion-19` reports `rebuilt: False`** — the demo is
  the original build, so any mismatch with the shipped app is DRIFT, not a redesign.
- **Anchor census: the page holds 0 anchors and 3 buttons.** There is no nav, no footer and no
  inner page, so the snippet shows no link at all; the Component Dock credit is the recreation's
  own addition, in its last band.
- The sheet ships its own faces: **two `@font-face` blocks for Roboto 400**
  (`fonts/roboto-400-latin.woff2`, `fonts/roboto-400-latin-ext.woff2`, `font-display: swap`) plus
  the `icomoon` icon subset that draws the two chevrons. Load Roboto from Google Fonts in the
  recreation; never copy the woff2.
- **The collapse is exclusive.** Each panel carries `data-parent="#accordion_1"`, so opening a
  row closes the others (Bootstrap's accordion mode), and re-activating the open row closes it.
  The recreation keeps that behaviour; it is not the independent multi-open of the sibling
  accordion demos.

## Design tokens (measured from `css/style.css`, 9,070 B)

Sheet census, theme sheet only: `#212529`×3, `#fff`×3, `#007bff`×2, `#0056b3`×2, `#72c02c`×2,
`#6c757d`×1, `#999`×1, `#f9f9f9`×1, `#888`×1. `#007bff` / `#0056b3` are link colours — the reboot
`a` / `a:hover` pair plus its `.cl-btn-link` / `.cl-btn-link:hover` duplicates — and are **not
painted on this page**: the live DOM holds **0 anchors** and 3 buttons, and the theme's
`.custom-accordion .cl-btn-link` rule repaints both to `#999` / `#72c02c` anyway. The only
chromatic the visitor sees is the lime `#72c02c`.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (only chromatic) | `#72c02c` | 2 declarations — `.cl-btn-link[aria-expanded="true"]:before` (colour of the open chevron) and `.cl-accordion-item.active .cl-btn-link` (the open row's label) |
| Page ground | `#fff` | `body { background-color: #fff }` (second `body` block) and `.cl-btn-link { background: #fff }` |
| Row separator | `1px solid #f9f9f9` | `.cl-accordion-item .cl-btn-link { border-bottom: 1px solid #f9f9f9 }`; the open row sets `border-bottom: 1px solid transparent` |
| Closed label ink | `#999` | `.cl-accordion-item .cl-btn-link { color: #999 }` |
| Panel ink | `#888` | `.cl-accordion-item .cl-accordion-body { color: #888 }` |
| Ink (headings, body default) | `#212529` | 3 declarations — `body`, `h2`/`.h2`, `.cl-h2`; `h2 { font-size: 20px }` (override at the snippet layer) |
| Muted (disabled link) | `#6c757d` | 1 declaration — `.cl-btn-link.disabled` / `:disabled`; no disabled control is rendered |
| Typeface (only face) | `Roboto` | 7 stack references (`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", …`); the sheet delivers weight 400 itself via two `@font-face` blocks |
| Corner radius | `0` | `.cl-accordion-item { border-radius: 0 }`, `.cl-btn-link { border-radius: 0 }` — square rows, not pills |
| Row rhythm | `0` | `.cl-accordion-item { margin-bottom: 0 }` — rows touch, the hairline is the only separator |
| Label padding | `15px` with `padding-left: 0` | `.cl-btn-link` — titles align to the heading's left edge |
| Panel padding | `0 0 20px 0` | `.cl-accordion-body` — no left inset, no top padding |
| Band padding | `7rem 0` | `.content { padding: 7rem 0 }` |
| Container | 540 / 720 / 960 / 1140 max-width + 15px gutters | `.cl-container` media ladder (`576/768/992/1200`) |
| Heading | 20px, centred, `margin: 3rem 0` | `h2 { font-size: 20px }` + `.cl-my-5` + `.cl-text-center` |
| Indicator | chevron-down → chevron-up | `.cl-btn-link:before { content: "\e313" }` (gray `#999`); open state `content: "\e316"` + `color: #72c02c`; 18px, pinned `right: 0`, vertically centred |
| Type scale | 20 / 16 px | `h2` 20px; panel copy `1rem` |

## Reference document order (one band, no chrome)

| # | what | detail |
| --- | --- | --- |
| 1 | band | `.content`, `padding: 7rem 0`, white ground |
| 2 | centred heading | `.cl-container` → `<h2 class="cl-my-5 cl-text-center">` "Bootstrap Accordion #9" |
| 3 | accordion group | `.cl-container` → one `.custom-accordion#accordion_1` holding 3 `.cl-accordion-item` rows |
| 3a | row 1 · open | "How to download and register?" — `aria-expanded="true"`, panel `.cl-show`, lime label + lime chevron-up |
| 3b | row 2 · closed | "How to create your paypal account?" — `#999` label + gray chevron-down |
| 3c | row 3 · closed | "How to link your paypal and bank account?" — `#999` label + gray chevron-down |
| 3d | panel body | all three share one lorem paragraph ("Anim pariatur cliche reprehenderit…"), `#888` |

There is no header, navigation, hero, imagery, form, testimonial block or footer in the
reference: the whole demo is `.content > .cl-container` twice (heading, accordion). The
recreation therefore has room for exactly one marketing-free band plus the mandatory credit.

## Requirements

### Requirement: Centred accordion band

The template SHALL render a single page whose only band is a centred accordion list: one heading
naming the list, then the rows, inside the reference's 1,140px container with `7rem` of
breathing room above and below.

#### Scenario: Page loads with the band centred

- **WHEN** the page loads
- **THEN** exactly one `h1` names the accordion list
- **AND** the list sits inside a column no wider than 1,140px, horizontally centred
- **AND** no navigation, hero, feature grid, testimonial or newsletter band is rendered

#### Scenario: Document title identifies the template

- **WHEN** the page loads
- **THEN** `document.title` is `Clasp — Accordion List Template`
- **AND** the document description mentions the accordion, not the source site

### Requirement: Rows expand exclusively

Each row SHALL expose its question as a full-width button and reveal its answer in a panel below
it. Opening a row SHALL close any other open row, and activating the open row SHALL close it, as
the reference's `data-parent` grouping does.

#### Scenario: First row open on load

- **GIVEN** the page has just loaded
- **WHEN** the visitor inspects the list
- **THEN** the first row's button reports `aria-expanded="true"`
- **AND** its panel is present in the DOM

#### Scenario: Opening a second row closes the first

- **GIVEN** the first row is open
- **WHEN** the visitor activates the third row's button
- **THEN** the third panel is revealed
- **AND** the first panel is removed from the DOM
- **AND** the first button reports `aria-expanded="false"`

#### Scenario: Visitor collapses the open row

- **GIVEN** a row is expanded
- **WHEN** the visitor activates its button again
- **THEN** the panel is removed from the DOM
- **AND** `aria-expanded` flips to `false`

### Requirement: Skin matches the measured tokens

The rendered page SHALL use the reference's palette and geometry: lime `#72c02c` for the open
label and chevron, `#999` for closed labels, `#888` for panel copy, 1px `#f9f9f9` hairline
separators, square corners, no row gap, `15px` label padding with a zero left inset and Roboto as
the only text face.

#### Scenario: Open row is the only coloured element

- **GIVEN** the first row is open
- **WHEN** the visitor compares the rows
- **THEN** the open row's label and chevron are lime (`#72c02c`)
- **AND** every closed row's label is `#999` with a `#999` chevron
- **AND** no other chromatic colour appears in the band

#### Scenario: Rows are square and hairline-separated

- **WHEN** the list is inspected
- **THEN** rows have no border radius, no gap between them and no fill distinct from the page
- **AND** each closed row is separated from the next by a 1px `#f9f9f9` bottom border

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

The template SHALL credit Component Dock in the last band, because the reference's own snippet
carries no footer.

#### Scenario: Visitor checks the footer

- **GIVEN** the visitor scrolls to the bottom of the page
- **WHEN** they view the footer
- **THEN** a link labelled "More templates at Component Dock" points at
  `https://www.componentdock.com/`
- **AND** the copyright line names Clasp

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under `apps/clasp/` may
contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments,
CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md`
and the PR; where the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/clasp/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Spec written from the live demo DOM + sheet (page 4,272 B, CSS 9,070 B, sha recorded above)
- [x] Requirements describe what `apps/clasp` renders (one band, 5 rows, first open, exclusive toggling, footer credit)
- [ ] App ships at https://clasp.free.componentdock.com
- [ ] Typecheck / lint / 100% coverage / build — per-app gate (`scripts/verify-app.sh clasp`)
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename

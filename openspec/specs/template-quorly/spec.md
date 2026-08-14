# Template: Quorly (Bootstrap Accordions — FAQ Accordion)

## Purpose

Quorly is a single-page FAQ accordion template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 17"
design (see TEMPLATES.md — Bootstrap Accordions category, line 655; the
`accordion-17` slug appears exactly once, no duplicate rows), built under a
NEW name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, single-section demo page: a centered `h2` heading
("Bootstrap Accordion #7") above a **stacked accordion of 3 FAQ items**
(white header bars with a green plus/minus toggle icon on the left, light-gray
item background `#f9f9f9`, square corners) on a light-gray page background
`#efefef`. Exactly one panel is open at a time (Bootstrap collapse with
`data-parent`); the first item ("How to download and register?") is expanded
by default. The active item's header text turns brand-green `#72c02c` with a
soft drop shadow and the toggle icon flips plus → minus. Quorly recreates that
structure and behavior with accessible React accordion semantics (buttons +
`aria-expanded`, single-open state) and adds the repo-standard navbar/footer
chrome (the original has none).

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 17" —
  `https://colorlib.com/wp/template/accordion-17/` (Bootstrap Accordions
  category, TEMPLATES.md line 655). Single row, no duplicates.
- **Preview URL analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/bac/accordion-17/` (HTTP 200, 19.4 KB).
  NOTE: the naive `https://preview.colorlib.com/theme/accordion-17/` returns
  **404**; the ColorLib template page's preview target is the `bac` bundle
  path shown above. The `bac` bundle serves 10 demos at URLs
  `accordion-11`…`accordion-20` whose in-page headings read
  "Bootstrap Accordion #1"…"#10" (URL number minus 10); therefore the
  "Accordion 17" catalog item renders the demo titled
  **"Bootstrap Accordion #7"** — that is the design to replicate. Screenshot
  `accordion-17.jpg` (1200×972) browser-verified 2026-08-14 and matches: the
  same "Bootstrap Accordion #7" centered heading, three stacked items, green
  toggle icons (minus on the open item, plus on the closed ones), first item
  open with lorem body text. Clean, minimal, monochrome-plus-green FAQ
  aesthetic.
- **Stylesheet analyzed:** `https://preview.colorlib.com/theme/bac/accordion-17/css/style.css`
  (2.2 KB — the token source; the sibling `bac/css/style.css` 404s, the CSS
  lives per-demo). Vendor sheets (bootstrap.min, owl.carousel.min,
  fonts/icomoon/style.css) are NOT copied.
- **Font:** **"Roboto"** loaded via inline cf-fonts `@font-face` blocks
  (weights 300/400/500/600 observed) — recreate with a Google Fonts `<link>`
  in `index.html` (Roboto 300/400/500/600).
- **Structure (from the live DOM, in order):**
  1. `div.content` (padding `7rem 0`) > `div.container`:
     - `h2.my-5.text-center` **"Bootstrap Accordion #7"** — 20px, centered,
       Bootstrap margin-y 3rem (48px).
  2. `div.custom-accordion#accordion_1` > 3 `div.accordion-item`:
     - Item 1: button **"How to download and register?"** — expanded by
       default (`div#collapseOne.collapse.show`, `aria-expanded="true"`).
     - Item 2: button **"How to create your paypal account?"** — collapsed.
     - Item 3: button **"How to link your paypal and bank account?"** —
       collapsed.
     - Each item: `h2.mb-0` > `button.btn.btn-link` (header bar) + `div.collapse`
       > `div.accordion-body` (lorem answer: the Bootstrap default
       > "Anim pariatur cliche reprehenderit…" paragraph).
  3. No navbar, no footer, no images, no forms, no other sections in the
     original — the demo is a single accordion block.
- **Behavior notes:** Bootstrap collapse with `data-parent="#accordion_1"`
  gives **single-open semantics** (opening one panel closes the others);
  `js/main.js` adds `.active` to the item whose button has
  `aria-expanded="true"` on load and toggles it on `show.bs.collapse` /
  `hidden.bs.collapse`. Recreation: React state holding the open item id
  (first item open initially), buttons with `aria-expanded` + `aria-controls`,
  one open at a time, toggle icon Plus ↔ Minus.

## Design tokens (extracted from the live `css/style.css` + computed styles)

- Page: `body { background-color: #efefef; font-family: "Roboto", …; }` —
  light-gray page background.
- Font: **"Roboto"** (weights 300/400/500/600; body copy weight 300).
- Brand green: **#72c02c** — expanded toggle icon (`:before` content `\f068`
  minus) and the active item's header link color.
- Accordion item (`.accordion-item`): background **#f9f9f9**, margin-bottom
  10px, **border-radius 0** (square), overflow hidden.
- Header bar (`.btn-link`): background **#fff** (white), display block, width
  100%, padding 15px, **padding-left 40px** (room for the icon), text-align
  left, color **#999**, border none, radius 0, position relative; plus icon
  (`\f067`) absolutely positioned left 15px, vertically centered.
- Active header: color **#72c02c**, box-shadow `0 1px 10px 0 rgba(0,0,0,0.1)`.
- Answer body (`.accordion-body`): padding 20px, color **#888**; `p` color
  **#b3b3b3**, font-weight 300.
- Headings: `h2` font-size 20px (the section heading uses Bootstrap
  `my-5 text-center` utilities).
- Icons: icomoon font glyphs `\f067` (plus) / `\f068` (minus) → recreate with
  `lucide-react` `Plus` / `Minus` icons (size ~16px, left 15px, vertically
  centered); green only when the item is open, gray `#999`-ish when closed
  (the closed-state icon inherits the header's gray).
- Section rhythm: `.content` padding `7rem 0` (top and bottom).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Quorly", a
"Home" link, and a dark-mode toggle button (repo-standard chrome — the
original has no navbar).

#### Scenario: Navbar content

- **GIVEN** the Quorly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Quorly" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: FAQ accordion section

The system SHALL render the centered section heading and the accordion of
three FAQ items with single-open behavior.

#### Scenario: Section heading

- **GIVEN** the Quorly page is rendered
- **WHEN** the accordion section is displayed
- **THEN** a centered 20px heading SHALL render above the accordion
  (original text: "Bootstrap Accordion #7"; a paraphrase such as
  "Frequently Asked Questions" is acceptable per the copy-kind rule — keep it
  a short centered label)

#### Scenario: Accordion items render

- **GIVEN** the accordion section is displayed
- **WHEN** the accordion is rendered
- **THEN** three accordion items SHALL render, each with a white header bar
  and a light-gray `#f9f9f9` body container with square corners
- **AND** the header bars SHALL read "How to download and register?",
  "How to create your paypal account?" and
  "How to link your paypal and bank account?"
- **AND** each closed header SHALL show a gray plus icon on the left
- **AND** the first item ("How to download and register?") SHALL be expanded
  by default, showing its answer body with a green minus icon and green header
  text

#### Scenario: Single-open toggle

- **GIVEN** the first item is open
- **WHEN** the user clicks the second or third header
- **THEN** that item SHALL expand, showing its answer body
- **AND** the previously open item SHALL collapse (exactly one panel open at a time)

#### Scenario: Close open item

- **GIVEN** an accordion item is open
- **WHEN** the user clicks the open item's header
- **THEN** the item SHALL collapse and its icon SHALL flip back to a plus

#### Scenario: Answer body

- **GIVEN** an accordion item is expanded
- **WHEN** the answer body is displayed
- **THEN** it SHALL show a paragraph of answer text (300-weight, light-gray
  `#b3b3b3` on `#888` container) — the original uses the Bootstrap default
  lorem; any placeholder-style answer paragraph of the same kind is fine

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
social links, and the mandatory Component Dock credit.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Quorly" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)
- **AND** it SHALL show a credit line linking to
  `https://www.componentdock.com/` ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Quorly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the FAQ
  accordion section in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Quorly — FAQ"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- quorly` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: light-gray page `#efefef`, centered
      20px heading, 3 stacked accordion items (white header bar + `#f9f9f9`
      body, square corners, 10px item gap), first item open by default.
- [ ] Design tokens applied: brand green `#72c02c` (open icon + active header
      text + shadow `0 1px 10px 0 rgba(0,0,0,0.1)`), Roboto (300/400/500/600),
      header text `#999`, answer text `#888` / `#b3b3b3`, radius 0.
- [ ] Behavior: single-open accordion (one panel at a time), aria-expanded +
      aria-controls on header buttons, Plus ↔ Minus icon flip, toggle works
      both ways.
- [ ] No ColorLib references in any app file; footer links
      `https://www.componentdock.com/`.
- [ ] TEMPLATES.md row 655 ("Accordion 17") marked `[x]` with the surge URL
      after shipping.

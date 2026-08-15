# Template: Fount (Single-Column Source-Picker Dropdown)

## Purpose

Fount is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 14" demo design
(source: https://colorlib.com/wp/template/dropdown-14/), built under a
DIFFERENT name (Fount — a source of supply, evoking the demo's "All sources"
source-picker menu, the defining visual trait) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript. The page showcases a link-triggered single-column source-picker
dropdown: a plain "All sources" trigger link (gray text, no background) with
a down-chevron sitting in a small light-gray circle at its right edge that
opens a narrow white card (Bootstrap default width) listing four items — All
Rources (single-line; the source's typo), Dropbox, Google Drive, Eventbrite
— each a bold black title + light-gray 13px subtitle row with a hollow
light-gray 10px dot on the left that turns blue `#007bff` on hover, light
divider lines under every row, and a fade + 20px slide-down animation — a
minimal, functional component-showcase page on a white background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 14" — fourteenth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 767). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy**, Dropdown 12 as
  **Lilac**, Dropdown 13 as **Docket** (see `docs/templates/menubar/` …
  `docs/templates/docket/`). This prep: Dropdown 14 → **Fount**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-14/`
  (HTTP 200, 17,008 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-14/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets: `fonts/icomoon/
style.css` (icon font — but the demo markup uses NO `icon-*` classes at
  all; only ONE glyph is consumed, `\e313`, via the trigger's `:after`
  pseudo-element — see trigger below), `css/owl.carousel.min.css` (LOADED
  but UNUSED — no carousel in this demo), `css/bootstrap.min.css`
  (Bootstrap 4 base), and `css/style.css` — a SLIM ~140-line / 3,076-byte
  template stylesheet (same slim builder as dropdown-11/12/13 — Privy/
  Lilac/Docket; NOT the 222 KB ftco stylesheet that dropdown-09/10 load).
  Libs: jquery, popper, bootstrap.min.js, owl.carousel.min.js (unused),
  js/main.js — which only adds `.active` to `.dropdown-menu` 100 ms after
  `show.bs.dropdown` fires and removes it on `hide.bs.dropdown` (drives the
  fade/slide animation; Bootstrap handles all open/close logic — identical
  to Privy/Lilac/Docket's main.js). Google Fonts loaded via inline cf-fonts
  `@font-face` blocks: **Roboto** (300/400), Poppins (300/400/500), Source
  Serif Pro (400/600) — but ONLY **Roboto** is used by the demo markup and
  `style.css` (Poppins and Source Serif Pro are loaded but unused). For the
  recreation, load Roboto (300/400) via a Google Fonts `<link>` per
  conventions.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live
  page's `<title>` AND `<h2>` read **"Dropdown #4"** (NOT "Dropdown #14"),
  and the TEMPLATES.md screenshot (`dropdown-14.jpg`) shows the same text —
  the page was cloned from the Dropdown 04 demo and the heading was never
  renumbered (the same copy-paste bug as Lilac's "Dropdown #2" and Docket's
  "Dropdown #3"). The recreation SHALL render the heading text exactly as
  the reference renders it — **"Dropdown #4"** — because fidelity mandates
  the original (DOM + screenshot both agree). Do NOT silently "fix" it to
  "Dropdown #14"; the numbering discrepancy is documented here and belongs
  in the PR description. (The monorepo document-title convention uses the
  NEW name instead, e.g. "Fount — Source-Picker Dropdown".)
- **SOURCE TYPO BUG (documented, reproduce faithfully):** the FIRST menu
  item reads **"All Rources"** (capital R, "Rources" NOT "Sources") — the
  live DOM and the screenshot both show it (verified character-by-character
  on a zoomed crop of `dropdown-14.jpg`). The recreation SHALL keep the
  typo exactly ("All Rources") and SHALL NOT silently "fix" it to "All
  Sources"; it belongs in the PR description. (Note the trigger label above
  is spelled correctly: "All sources".)
- **SOURCE DANGLING ARIA BUG (documented, do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  bug as Lilac/Docket). The recreation SHALL pair trigger and menu properly
  via `aria-controls`/id instead.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body background = **WHITE** (the slim `style.css`
  sets NO `background-color` on body — the default white, same as
  Privy/Lilac/Docket). `.content` wrapper padding **7rem 0** (the whole
  demo block floats vertically centered). Heading: `h2.my-5.text-center`
  "Dropdown #4" — custom `h2 { font-size: 20px }` override (NOT Bootstrap's
  2rem), Roboto, centered, near-black `#212529` (inherited Bootstrap body
  color), `my-5` = 3rem top AND bottom margin. Below it a centered demo row
  (`row.justify-content-center.text-center` → `col-md-5`, the narrow
  ~41.7%-on-md+ column) holding `div.dropdown.custom-dropdown`:
  - **Trigger** = an `<a href="#" data-toggle="dropdown" class="dropdown-
link" aria-haspopup="true" aria-expanded="false">All sources</a>` — a
    LINK-triggered dropdown (like Docket; not a button). `.dropdown-link`
    styling: `color: #888`, `display: inline-block`, `padding-right: 40px`,
    `position: relative` — **NO background and NO border** (a PLAIN gray
    text link — unlike Docket's `#f8f9fa` pill; the trigger is visually
    just the label + chevron). Font-size: NOT set → inherits the Bootstrap
    4 body size (**16px/1rem** — unlike Docket's explicit 15px). `:after {
content: "\e313" }` — the icomoon `icon-keyboard_arrow_down` glyph (a
    Material-style down chevron → lucide `ChevronDown`), absolutely
    positioned `right: 0; top: 50%; translateY(-50%)`, inside a **20px
    light-gray `#efefef` circle** (`width/height: 20px; border-radius: 50%;
text-align: center; line-height: 20px`), font-family 'icomoon'. The
    chevron circle is the trigger's only decoration. **NO open-state flip:**
    this stylesheet has NO `.custom-dropdown.show` rule at all (unlike
    Docket's blue/white flip) — the trigger looks IDENTICAL when the menu
    is open or closed.
  - **Menu** = `div.dropdown-menu` (NO extra classes): white bg (Bootstrap
    default), `border: 1px solid transparent` (overrides BS4's
    `rgba(0,0,0,.15)`), **no min-width override** → Bootstrap's default
    `min-width: 10rem` (a NARROW single-column card, like Docket, NOT
    Lilac's 700px), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **`left: 0
!important`** (LEFT-anchored under the trigger), `margin-top: 0
!important`, `padding-top: 0`, `padding-bottom: 0` (items carry the
    vertical padding). ANIMATED open: base state `opacity: 0; visibility:
hidden`, `.active` → `opacity: 1; visibility: visible; margin-top:
20px !important`, transition `.3s margin-top ease, .3s opacity ease,
.3s visibility ease` (fade + 20px slide-down; `.active` added by
    main.js 100 ms after `show.bs.dropdown`).
  - **Items** = four full-width `<a href="#" class="dropdown-item">` rows
    (reading order):
    1. **All Rources** — PLAIN single-line text, NO `<strong>`/`<span>`
       (the source's typo — reproduce "Rources" exactly; this row has NO
       subtitle, unlike the others)
    2. **Dropbox** — `<strong>Dropbox</strong><span>Lorem ipsum dolor sit
amet harum.</span>`
    3. **Google Drive** — `<strong>Google Drive</strong><span>Lorem ipsum
dolor sit amet harum.</span>`
    4. **Eventbrite** — `<strong>Eventbrite</strong><span>Lorem ipsum
dolor sit amet harum.</span>`
       Row styling: `.dropdown-item` `font-size: 14px`, `color: #888`,
       **`border-bottom: 1px solid #efefef` on EVERY row — this stylesheet
       has NO `:last-child` border exception (DIFFERENT from Docket, whose
       slim CSS removed the last row's border; here the last row
       "Eventbrite" keeps its divider too)**, `padding-top: 10px;
padding-left: 35px; padding-bottom: 10px` (no right padding),
       `position: relative`. Title: `strong { display: block; font-weight:
bold; color: #000 }` — a bold BLACK title on its own line. Subtitle:
       `span { font-size: 13px; color: #999 }` — a smaller light-gray line
       under the title. **Dot:** `:before` pseudo-element — a **10px
       circle** (`width/height: 10px; border-radius: 50%`), absolutely
       positioned `top: 50%; left: 10px; translateY(-50%)`, background
       **`#efefef`** (light gray — reads as a hollow radio-style dot on the
       white card), transition `.3s all ease`. HOVER: `color: #000` and
       `:before` → **`background: #007bff`** (the dot turns Bootstrap-blue;
       the row text darkens to black). **NO padding-left shift on hover**
       in this variant (unlike Docket's 15px→20px shift — here the 35px
       left padding stays fixed).
  - **No mobile-specific CSS** in this slim stylesheet (like
    Privy/Lilac/Docket; unlike Onboard/Glimpse/Inquire): there are NO media
    queries. The menu stays left-anchored at all viewports; the `col-md-5`
    simply becomes full-width. Reproduce the source behavior (no responsive
    handling).
- **Icons:** NO `icon-*` glyphs appear in the demo markup AT ALL — the only
  icon is the trigger's `:after` chevron (`\e313` `keyboard_arrow_down` →
  lucide `ChevronDown`), and the item "dots" are pure CSS circles (no icon
  font). NO images, NO carousel (owl assets loaded but unused). Total: ONE
  icon glyph + four CSS dots.
- **Section order (1:1, from live demo DOM):**
  1. `.content` wrapper (padding **7rem 0**).
  2. Heading container (`div.container`): `h2.my-5.text-center` "Dropdown
     #4" (20px Roboto, near-black `#212529`, centered, 3rem top/bottom
     margin).
  3. Demo container (`div.container` → `div.row.justify-content-center.text-
center` → `div.col-md-5`): `div.dropdown.custom-dropdown` containing
     the "All sources" trigger link (chevron in gray circle) and the
     LEFT-anchored `dropdown-menu` with four `dropdown-item` rows.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.
- **Screenshot:** `dropdown-14.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #4", below it the "All sources" trigger
  (medium-gray text with a light-gray circle containing a dark down-chevron
  at its right edge), menu OPEN beneath it: a white card with a soft diffuse
  shadow, four rows — the first "All Rources" single-line, then Dropbox /
  Google Drive / Eventbrite each with a bold black title and a light-gray
  "Lorem ipsum dolor sit amet harum." subtitle, each row with a hollow
  light-gray dot at the left and faint light-gray divider lines (verified
  on zoomed crops; the typo "Rources" and subtitle "harum" match the DOM
  exactly). Matches the DOM + CSS. URL bar in the screenshot shows
  `ui-preview.codylabs.com` — an OLDER preview host (other series
  screenshots show `preview.colorlib.com`; the CURRENT live preview is
  `https://preview.colorlib.com/theme/bootstrap/dropdown-14/`).

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Source                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Page background | WHITE (no `background-color` set in the slim `style.css` — default white; same as Privy/Lilac/Docket; screenshot reads white)                                                                                                                                                                                                                                                                                                                                                                                                                               | `body` (no rule) + screenshot           |
| Heading         | "Dropdown #4" (SOURCE BUG — see above; reproduce as-is, NOT "#14"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem top + bottom margin                                                                                                                                                                                                                                                                                                              | `h2` override + `.my-5`                 |
| Section rhythm  | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `.content`                              |
| Trigger link    | `.dropdown-link` — `color: #888`, `display: inline-block`, `padding-right: 40px` (reserves room for the chevron circle), `position: relative`; font-size INHERITED (16px — Bootstrap 4 body default; NOT set explicitly); **NO background, NO border** (a plain gray link — unlike Docket's `#f8f9fa` pill); **NO open-state change** (no `.show` rule in this stylesheet)                                                                                                                                                                                  | `.custom-dropdown .dropdown-link` rules |
| Trigger chevron | `:after` — icomoon glyph `\e313` `icon-keyboard_arrow_down` (Material down chevron → lucide `ChevronDown`), absolute `right: 0; top: 50%; translateY(-50%)`, inside a **20px light-gray `#efefef` circle** (`border-radius: 50%`, centered, `line-height: 20px`)                                                                                                                                                                                                                                                                                            | `style.css` `:after` + icomoon css      |
| Menu card       | `dropdown-menu` — white bg, `border: 1px solid transparent`, **NO min-width override** (Bootstrap default `min-width: 10rem` — a NARROW single-column card, like Docket, NOT Lilac's 700px), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **`left: 0 !important`** (LEFT-anchored), `margin-top: 0 !important`, `padding-top/bottom: 0`; ANIMATED: `opacity: 0; visibility: hidden` → `.active`: `opacity: 1; visibility: visible; margin-top: 20px !important`, transition `.3s margin-top ease, .3s opacity ease, .3s visibility ease` (fade + 20px slide-down) | `.custom-dropdown .dropdown-menu` rules |
| Item rows       | `.dropdown-item` — `font-size: 14px`, `color: #888`, **`border-bottom: 1px solid #efefef` under EVERY row including the LAST** (NO `:last-child` exception in this stylesheet — DIFFERENT from Docket), `padding: 10px 0 10px 35px` (top 10 / left 35 / bottom 10, no right), `position: relative`; HOVER: `color: #000` only (**NO padding-left shift** — unlike Docket's 15px→20px)                                                                                                                                                                       | `.custom-dropdown .dropdown-item` rules |
| Item title      | `strong { display: block; font-weight: bold; color: #000 }` — bold BLACK title on its own line (only rows 2–4 have one; row 1 "All Rources" is plain single-line text)                                                                                                                                                                                                                                                                                                                                                                                      | `.dropdown-item strong` rule            |
| Item subtitle   | `span { font-size: 13px; color: #999 }` — smaller light-gray line under the title; text "Lorem ipsum dolor sit amet harum." (rows 2–4 only)                                                                                                                                                                                                                                                                                                                                                                                                                 | `.dropdown-item span` rule              |
| Item dot        | `:before` — **10px circle** (`border-radius: 50%`), absolute `top: 50%; left: 10px; translateY(-50%)`, background **`#efefef`** (hollow radio-style dot), transition `.3s all ease`; HOVER: background → **`#007bff`** (dot turns blue)                                                                                                                                                                                                                                                                                                                     | `.dropdown-item:before` rules           |
| Font family     | Roboto (300/400 available; page also loads Poppins + Source Serif Pro but they are UNUSED here), stack `"Roboto", -apple-system, …, sans-serif`; body text default `#212529`                                                                                                                                                                                                                                                                                                                                                                                | `body` rule + cf-fonts @font-face block |
| Icons           | ONE glyph total — the trigger's `:after` chevron (`\e313` → lucide `ChevronDown`); item dots are pure CSS circles; **NO `icon-*` classes in the markup, NO images, NO carousel** (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                                                             | preview HTML + icomoon css              |
| Mobile behavior | NONE — no media queries in the slim stylesheet (like Privy/Lilac/Docket); menu stays LEFT-anchored at all viewports, no restyling on narrow screens (the `col-md-5` simply becomes full-width)                                                                                                                                                                                                                                                                                                                                                              | `style.css` (no media queries)          |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Fount app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Fount — Source-Picker Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
matching the reference text exactly (including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #4" (the source page renders "Dropdown #4", NOT "Dropdown #14"
  — a documented ColorLib copy-paste bug; reproduce the reference exactly
  and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, with 3rem top AND bottom margins (Bootstrap `my-5`
  equivalent)

### Requirement: Trigger control

The system SHALL render the centered "All sources" trigger with the
chevron-in-circle at its right edge and full dropdown semantics.

#### Scenario: Trigger renders with chevron circle

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible showing the label "All
  sources" (lowercase "s") followed by a **down chevron icon inside a 20px
  light-gray `#efefef` circle** at its right edge (lucide `ChevronDown`;
  the circle is the trigger's only decoration)
- **AND** the trigger SHALL use the reference styling: gray `#888` text,
  inline-block, `padding-right: 40px` (room for the chevron), **NO
  background and NO border** (a plain gray text link — unlike Docket's
  `#f8f9fa` pill)
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the source-picker card on trigger click, close it on
outside click, Escape, or trigger re-click, and keep only one menu open at
a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, LEFT-anchored under the trigger (the
  reference anchors with `left: 0`; white card, **narrow Bootstrap-default
  width (`min-width: 10rem`)**, radius `.25rem` (Bootstrap base), shadow
  `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, no top/bottom
  padding)
- **AND** the menu SHALL animate in with a fade + 20px slide-down
  (opacity 0→1 and margin-top 0→20px, ~0.3s ease — the reference's
  `.active` transition)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Trigger open-state styling

The system SHALL keep the trigger visually IDENTICAL when the menu is open —
this variant has NO open-state treatment (unlike Docket's blue flip).

#### Scenario: Trigger unchanged while open

- **GIVEN** the dropdown menu is open
- **THEN** the trigger SHALL keep its default look — gray `#888` text with
  the light-gray `#efefef` chevron circle — with NO background, border, or
  color change (the reference stylesheet has no `.custom-dropdown.show`
  rule in this variant)
- **WHEN** the menu closes
- **THEN** the trigger SHALL remain visually unchanged

### Requirement: Menu items

The system SHALL render the four source items in the reference order with
the reference labels, subtitle text, and the source's typo.

#### Scenario: Item content and order

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show exactly four items, in reading order: All
  Rources, Dropbox, Google Drive, Eventbrite
- **AND** the first item SHALL be spelled **"All Rources"** (the source's
  typo — "Rources" with an R, NOT "Sources"; the live DOM and screenshot
  both show it; do NOT "fix" it)
- **AND** the first item SHALL be a single-line plain row (NO subtitle)
- **AND** items 2–4 SHALL each render a bold black title (Dropbox, Google
  Drive, Eventbrite) with the subtitle **"Lorem ipsum dolor sit amet
  harum."** in smaller light-gray text beneath it

#### Scenario: Item styling and hover

- **GIVEN** a menu item row is rendered
- **THEN** the row SHALL be 14px gray `#888` text with a light `#efefef`
  divider under it — **under EVERY row including the LAST** (this
  stylesheet has no `:last-child` border exception — unlike Docket) —
  padding 10px top / 35px left / 10px bottom
- **AND** each row SHALL show a **10px hollow light-gray `#efefef` dot**
  at its left (10px from the left edge, vertically centered — the
  reference `:before` circle)
- **WHEN** the user hovers a row
- **THEN** the row text SHALL turn black `#000` and the dot SHALL turn
  Bootstrap-blue **`#007bff`**
- **AND** the row SHALL NOT shift horizontally on hover (no `padding-left`
  change in this variant — unlike Docket's 15px→20px shift)

### Requirement: Accessibility

The system SHALL expose dropdown semantics and a proper trigger-menu
association to assistive technology. (The source menu's
`aria-labelledby="dropdownMenuButton"` points to a NONEXISTENT id — a
source bug; the recreation SHALL pair the trigger and menu correctly.)

#### Scenario: Screen reader exposure

- **GIVEN** the trigger and menu are rendered
- **WHEN** assistive technology inspects the dropdown
- **THEN** the trigger SHALL expose `aria-haspopup="menu"` and reflect the
  open state via `aria-expanded`
- **AND** the menu SHALL be associated with the trigger (e.g. `aria-controls`
  / `id` pairing)
- **AND** every menu item SHALL be an interactive element reachable by
  keyboard (the source items are `<a href="#">` links; the recreation may
  keep them as links with real targets or as buttons — but they SHALL be
  focusable and activated with Enter/Space)

### Requirement: Footer

The system SHALL render the mandatory monorepo footer with the Component
Dock credit link (the source demo has no footer — this is a monorepo
addition per conventions.md).

#### Scenario: Footer with Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer area loads
- **THEN** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock"

### Requirement: Mobile behavior

The system SHALL reproduce the source's lack of responsive handling (no
media queries in the reference stylesheet).

#### Scenario: No responsive menu treatment

- **GIVEN** the page is rendered on a narrow viewport
- **THEN** the menu SHALL keep the reference behavior: no special
  mobile CSS (unlike Onboard/Glimpse/Inquire) — the card is NOT restyled
  for small screens and stays left-anchored (matches the source, which has
  zero media queries in its slim stylesheet)

## Verification checklist

- [ ] `npm run verify:app fount` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #4" (the SOURCE'S numbering bug —
      reproduce as-is, do NOT "fix" to "Dropdown #14"; 20px Roboto,
      near-black `#212529`, centered, `my-5`/3rem top+bottom margins) on a
      WHITE page background (slim stylesheet sets no body bg)
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: "All sources" (lowercase s), gray `#888` text,
      inline-block, `padding-right: 40px`, **NO background/border** (a
      plain link — unlike Docket's pill), with a down chevron (lucide
      `ChevronDown`) inside a **20px `#efefef` circle** at the right edge
- [ ] Trigger does NOT change appearance when the menu is open (no `.show`
      rule in this variant — unlike Docket's blue flip)
- [ ] Menu opens LEFT-anchored under the trigger (white card, Bootstrap
      default `min-width: 10rem`, radius .25rem, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, no top/bottom
      padding) with the fade + 20px slide-down animation (margin-top
      0→20px)
- [ ] Four items in order: **All Rources** (SOURCE TYPO — "Rources" with
      an R, do NOT "fix" to "Sources"; single-line, no subtitle), Dropbox,
      Google Drive, Eventbrite — the last three with bold black titles and
      the subtitle "Lorem ipsum dolor sit amet harum." (13px `#999`)
- [ ] Row styling: 14px gray `#888`, `#efefef` divider under EVERY row
      INCLUDING THE LAST (no `:last-child` exception — unlike Docket),
      padding 10px top / 35px left / 10px bottom; 10px hollow `#efefef`
      dot at left (10px inset, vertically centered); hover → black `#000`
      text + dot turns `#007bff`, NO horizontal shift
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — like Privy/Lilac/Docket, unlike Onboard/Glimpse/Inquire;
      the menu is not restyled on narrow viewports)
- [ ] No images needed; no carousel (owl assets loaded but unused in the
      source); exactly ONE icon glyph (the trigger chevron, lucide
      `ChevronDown`); item dots are CSS circles — no `icon-*` classes, no
      lavender accent (unlike Lilac)
- [ ] Roboto (300/400) via Google Fonts `<link>` in `index.html`;
      Poppins/Source Serif Pro are loaded by the source but UNUSED — do not
      load them
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/fount` (provenance lives only here + TEMPLATES.md +
      PR)

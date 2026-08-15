# Template: Docket (Single-Column Filetype Dropdown)

## Purpose

Docket is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 13" demo design
(source: https://colorlib.com/wp/template/dropdown-13/), built under a
DIFFERENT name (Docket — a list of filed documents, evoking the demo's
file-type menu, the defining visual trait) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page showcases a link-triggered single-column file-type dropdown: a
light-gray "Filetype" trigger link with a document icon that opens a narrow
white card (Bootstrap default width) listing four file types — Markup HTML,
Photoshop PDF, Illustrator AI, Sketch — each a gray icon + label row with
light divider lines, a blue 6px accent bar appearing on hover, and a fade +
20px slide-down animation — a minimal, functional component-showcase page on
a white background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 13" — thirteenth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 766). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy**, Dropdown 12 as
  **Lilac** (see `docs/templates/menubar/` … `docs/templates/lilac/`). This
  prep: Dropdown 13 → **Docket**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-13/`
  (HTTP 200, 16,868 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-13/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets: `fonts/icomoon/
style.css` (icon font — see icons below), `css/owl.carousel.min.css`
  (LOADED but UNUSED — no carousel in this demo), `css/bootstrap.min.css`
  (Bootstrap 4 base), and `css/style.css` — a SLIM 96-line / 2,731-byte
  template stylesheet (same slim builder as dropdown-11/12 — Privy/Lilac;
  NOT the 222 KB ftco stylesheet that dropdown-09/10 load). Libs: jquery,
  popper, bootstrap.min.js, owl.carousel.min.js (unused), js/main.js — which
  only adds `.active` to `.dropdown-menu` 100 ms after `show.bs.dropdown`
  fires and removes it on `hide.bs.dropdown` (drives the fade/slide
  animation; Bootstrap handles all open/close logic — identical to
  Privy/Lilac's main.js). Google Fonts loaded via inline cf-fonts
  `@font-face` blocks: **Roboto** (300/400), Poppins (300/400/500), Source
  Serif Pro (400/600) — but ONLY **Roboto** is used by the demo markup and
  `style.css` (Poppins and Source Serif Pro are loaded but unused). For the
  recreation, load Roboto (300/400) via a Google Fonts `<link>` per
  conventions.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live
  page's `<title>` AND `<h2>` read **"Dropdown #3"** (NOT "Dropdown #13"),
  and the TEMPLATES.md screenshot (`dropdown-13.jpg`) shows the same text —
  the page was cloned from the Dropdown 03 demo and the heading was never
  renumbered (the same copy-paste bug as Lilac's "Dropdown #2"). The
  recreation SHALL render the heading text exactly as the reference renders
  it — **"Dropdown #3"** — because fidelity mandates the original (DOM +
  screenshot both agree). Do NOT silently "fix" it to "Dropdown #13"; the
  numbering discrepancy is documented here and belongs in the PR
  description. (The monorepo document-title convention uses the NEW name
  instead, e.g. "Docket — Single-Column Filetype Dropdown".)
- **SOURCE DANGLING ARIA BUG (documented, do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  bug as Lilac). The recreation SHALL pair trigger and menu properly via
  `aria-controls`/id instead.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body background = **WHITE** (the slim `style.css`
  sets NO `background-color` on body — the default white, same as
  Privy/Lilac; the screenshot reads as white/off-white). `.content` wrapper
  padding **7rem 0** (the whole demo block floats vertically centered).
  Heading: `h2.my-5.text-center` "Dropdown #3" — custom `h2 { font-size:
20px }` override (NOT Bootstrap's 2rem), Roboto, centered, near-black
  `#212529` (inherited Bootstrap body color), `my-5` = 3rem top AND bottom
  margin. Below it a centered demo row (`row.justify-content-center.text-
center` → `col-md-5`, the narrow ~41.7%-on-md+ column) holding
  `div.dropdown.custom-dropdown`:
  - **Trigger** = an `<a href="#" data-toggle="dropdown" class="dropdown-
link" aria-haspopup="true" aria-expanded="false">` containing `<span
class="icon-file-text-o mr-2"></span>Filetype` — a LINK-triggered
    dropdown (not a button, like Lilac/Privy/Glimpse). `.dropdown-link`
    styling: `color: #888`, `font-size: 15px`, `display: inline-block`,
    `padding: 8px 15px`, `background: #f8f9fa` (LIGHT GRAY pill — unlike
    Lilac's borderless plain link; this variant looks like a Bootstrap
    secondary button), `position: relative`. `:after { content: "" }` (a
    no-op). OPEN state (`.custom-dropdown.show .dropdown-link`) → **`color:
#fff; background: #007bff`** (the trigger flips to Bootstrap-primary
    BLUE with white text — the defining interaction of this variant).
    Icon: `icon-file-text-o` (FA `\f0f6`, a document with text lines;
    lucide equivalent `FileText`), `mr-2` = 0.5rem gap before the label.
    (The `.custom-dropdown .btn` / `.btn.btn-custom` rules in style.css
    belong to the OTHER demos in the series and are UNUSED here.)
  - **Menu** = `div.dropdown-menu` (NO extra classes — NOT the flex
    two-column of Lilac): white bg (Bootstrap default), `border: 1px solid
transparent` (overrides BS4's `rgba(0,0,0,.15)`), **no min-width
    override** → Bootstrap's default `min-width: 10rem` (a NARROW single-
    column list, unlike Lilac's 700px card), shadow `0 15px 30px 0
rgba(0,0,0,.2)`, **`left: 0 !important`** (LEFT-anchored under the
    trigger — NOT centered like Lilac's `left: 50%`), `margin-top: 0
!important`, `padding-top: 0`, `padding-bottom: 0` (items carry the
    vertical padding). ANIMATED open: base state `opacity: 0; visibility:
hidden`, `.active` → `opacity: 1; visibility: visible; margin-top:
20px !important`, transition `.3s margin-top ease, .3s opacity ease,
.3s visibility ease` (fade + 20px slide-down; `.active` added by
    main.js 100 ms after `show.bs.dropdown`).
  - **Items** = four full-width `<a href="#" class="dropdown-item">` rows,
    each `<span class="icon-… mr-3"></span>Label` (icon `mr-3` = 1rem gap
    before the label). Reading order + icons:
    1. **Markup HTML** — `icon-html5` (FA `\f13b`, the HTML5 shield →
       lucide `FileCode2`, the `</>` code icon)
    2. **Photoshop PDF** — `icon-file-pdf-o` (FA `\f1c1`, document glyph →
       lucide `FileText`)
    3. **Illustrator AI** — `icon-glass` (FA `\f000`, a cocktail/martini
       glass → lucide `Martini`)
    4. **Sketch** — `icon-flag` (FA `\f024`, a flag → lucide `Flag`)
       Row styling: `.dropdown-item` `font-size: 14px`, `color: #888`, `border-
bottom: 1px solid #efefef` (light divider under each row),
       `padding-top: 10px; padding-left: 15px; padding-bottom: 10px`,
       `position: relative`; `:last-child` → `border-bottom: none`. HOVER:
       `color: #000`, `padding-left: 20px`, and a `:before` pseudo-element
       (absolute, `left: 0`, full height, `width: 0px`, `opacity: 0`,
       `visibility: hidden`, `background: #007bff`, transition `.3s all ease`)
       expands to `width: 6px; opacity: 1; visibility: visible` — a BLUE 6px
       accent bar at the item's left edge. (Icons inherit the gray `#888` row
       color — no separate icon color rule; there is no `#c3a1fa` lavender
       accent in this variant, unlike Lilac.)
  - **No mobile-specific CSS** in this slim stylesheet (like Privy/Lilac;
    unlike Onboard/Glimpse/Inquire): there are NO media queries. The menu
    stays left-anchored at all viewports; the `col-md-5` simply becomes
    full-width. Reproduce the source behavior (no responsive handling).
- **Section order (1:1, from live demo DOM):**
  1. `.content` wrapper (padding **7rem 0**).
  2. Heading container (`div.container`): `h2.my-5.text-center` "Dropdown
     #3" (20px Roboto, near-black `#212529`, centered, 3rem top/bottom
     margin).
  3. Demo container (`div.container` → `div.row.justify-content-center.text-
center` → `div.col-md-5`): `div.dropdown.custom-dropdown` containing
     the document-icon + "Filetype" trigger link and the LEFT-anchored
     `dropdown-menu` with four `dropdown-item` rows.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.
- **Screenshot:** `dropdown-13.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #3", below it the "Filetype" trigger
  shown in its OPEN state: a solid BLUE (Bootstrap-primary) pill with white
  text and a document icon, and the menu OPEN beneath it: a narrow white
  card with a soft diffuse shadow and rounded corners, four rows of gray
  icon + dark gray text with faint light-gray divider lines (the first row,
  "Markup HTML", shows the hover state: black text + blue left accent bar).
  Matches the DOM + CSS exactly. URL bar in the screenshot shows the
  preview host (same series screenshots show `preview.colorlib.com`).

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Source                                  |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Page background | WHITE (no `background-color` set in the slim `style.css` — default white; same as Privy/Lilac, NOT the `#fafafa` of older series pages; screenshot reads white/off-white)                                                                                                                                                                                                                                                                                                                                                                                       | `body` (no rule) + screenshot           |
| Heading         | "Dropdown #3" (SOURCE BUG — see above; reproduce as-is, NOT "#13"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem top + bottom margin                                                                                                                                                                                                                                                                                                                  | `h2` override + `.my-5`                 |
| Section rhythm  | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `.content`                              |
| Trigger link    | `.dropdown-link` — `color: #888`, `font-size: 15px`, `inline-block`, `padding: 8px 15px`, **`background: #f8f9fa`** (light-gray pill, Bootstrap-secondary look), `position: relative`; OPEN (`.custom-dropdown.show`) → **`color: #fff; background: #007bff`** (flips to Bootstrap-primary blue + white text)                                                                                                                                                                                                                                                   | `.custom-dropdown .dropdown-link` rules |
| Trigger icon    | Document-with-lines glyph, FA `\f0f6` via icomoon (`icon-file-text-o`), `mr-2` = 0.5rem right gap → lucide `FileText` equivalent                                                                                                                                                                                                                                                                                                                                                                                                                                | `fonts/icomoon/style.css` + markup      |
| Menu card       | `dropdown-menu` — white bg, `border: 1px solid transparent`, **NO min-width override** (Bootstrap default `min-width: 10rem` — a NARROW single-column card, unlike Lilac's 700px), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **`left: 0 !important`** (LEFT-anchored, NOT centered), `margin-top: 0 !important`, `padding-top/bottom: 0`; ANIMATED: `opacity: 0; visibility: hidden` → `.active`: `opacity: 1; visibility: visible; margin-top: 20px !important`, transition `.3s margin-top ease, .3s opacity ease, .3s visibility ease` (fade + 20px slide-down) | `.custom-dropdown .dropdown-menu` rules |
| Item rows       | `.dropdown-item` — `font-size: 14px`, `color: #888`, `border-bottom: 1px solid #efefef`, `padding: 10px 0 10px 15px` (top 10 / left 15 / bottom 10, no right), `position: relative`; `:last-child` → no border. HOVER: `color: #000`, `padding-left: 20px`, + blue 6px left accent bar (`:before`, `background: #007bff`, width 0→6px, opacity 0→1, full height, `.3s all ease`)                                                                                                                                                                                | `.custom-dropdown .dropdown-item` rules |
| Item icons      | FOUR distinct glyphs (no repeats): `icon-html5` (FA `\f13b` → lucide `FileCode2`), `icon-file-pdf-o` (FA `\f1c1` → lucide `FileText`), `icon-glass` (FA `\f000` → lucide `Martini`), `icon-flag` (FA `\f024` → lucide `Flag`); `mr-3` = 1rem gap before the label; icon color inherits the row's gray `#888` (no separate accent color — NO lavender in this variant)                                                                                                                                                                                           | `fonts/icomoon/style.css` + markup      |
| Font family     | Roboto (300/400 available; page also loads Poppins + Source Serif Pro but they are UNUSED here), stack `"Roboto", -apple-system, …, sans-serif`; body text default `#212529`                                                                                                                                                                                                                                                                                                                                                                                    | `body` rule + cf-fonts @font-face block |
| Icons           | FIVE icon glyphs total (trigger `icon-file-text-o` + four item icons above). No images, no carousel (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                                                                                                                                              | preview HTML                            |
| Mobile behavior | NONE — no media queries in the slim stylesheet (like Privy/Lilac); menu stays LEFT-anchored at all viewports, no restyling on narrow screens (the `col-md-5` simply becomes full-width)                                                                                                                                                                                                                                                                                                                                                                         | `style.css` (no media queries)          |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Docket app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Docket — Single-Column Filetype
  Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
matching the reference text exactly (including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #3" (the source page renders "Dropdown #3", NOT "Dropdown #13"
  — a documented ColorLib copy-paste bug; reproduce the reference exactly
  and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, with 3rem top AND bottom margins (Bootstrap `my-5`
  equivalent)

### Requirement: Trigger control

The system SHALL render the centered light-gray "Filetype" control with the
document icon and full dropdown semantics.

#### Scenario: Trigger renders with document icon

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible showing a document icon
  followed by the label "Filetype"
- **AND** the trigger SHALL use the reference styling: gray `#888` text,
  15px font, `inline-block`, padding 8px 15px, and a **light-gray `#f8f9fa`
  background** (a Bootstrap-secondary look — unlike Lilac's borderless
  link)
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the file-type card on trigger click, close it on
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

### Requirement: Open-state trigger styling

The system SHALL show the open-state treatment on the trigger while the
menu is open, mirroring the reference `.show` state.

#### Scenario: Trigger open state

- **GIVEN** the dropdown menu is open
- **THEN** the trigger SHALL flip to the Bootstrap-primary look: **white
  text on a solid blue `#007bff` background** (the defining interaction of
  this variant — unlike Lilac's simple text-color change)
- **WHEN** the menu closes
- **THEN** the trigger SHALL return to its default state (gray `#888` text
  on light-gray `#f8f9fa`)

### Requirement: Menu items

The system SHALL render the four file-type items in the reference order
with the reference labels and icons.

#### Scenario: Item content and order

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show exactly four items, in reading order:
  Markup HTML, Photoshop PDF, Illustrator AI, Sketch
- **AND** the second item SHALL be spelled **"Photoshop PDF"** (the source
  text is PDF — do NOT "fix" it to "PSD")
- **AND** each row SHALL pair an icon with a 1rem gap before the label:
  `FileCode2` (Markup HTML), `FileText` (Photoshop PDF), `Martini`
  (Illustrator AI), `Flag` (Sketch) — lucide equivalents of the source's
  icomoon glyphs

#### Scenario: Item styling and hover

- **GIVEN** a menu item row is rendered
- **THEN** the row SHALL be 14px gray `#888` text with a light `#efefef`
  divider under it (none under the LAST row), padding 10px top / 15px left
  / 10px bottom, and the icon inheriting the gray row color
- **WHEN** the user hovers a row
- **THEN** the row text SHALL turn black `#000`, the row SHALL shift to
  `padding-left: 20px`, and a **blue 6px `#007bff` accent bar** SHALL
  appear at the row's left edge (the reference `:before` — full height,
  fading/expanding in over ~0.3s)

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

- [ ] `npm run verify:app docket` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #3" (the SOURCE'S numbering bug —
      reproduce as-is, do NOT "fix" to "Dropdown #13"; 20px Roboto,
      near-black `#212529`, centered, `my-5`/3rem top+bottom margins) on a
      WHITE page background (slim stylesheet sets no body bg)
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: document icon (lucide `FileText`) + "Filetype",
      gray `#888` 15px, padding 8px 15px, light-gray `#f8f9fa` background;
      open state → **white text on blue `#007bff`** (Bootstrap-primary
      flip — the variant's defining interaction)
- [ ] Menu opens LEFT-anchored under the trigger (white card, Bootstrap
      default `min-width: 10rem`, radius .25rem, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, no top/bottom
      padding) with the fade + 20px slide-down animation (margin-top
      0→20px)
- [ ] Four items in order: Markup HTML (`FileCode2`), Photoshop PDF
      (`FileText`), Illustrator AI (`Martini`), Sketch (`Flag`) — "Photoshop
      PDF" spelled with PDF (do NOT "fix" to PSD)
- [ ] Row styling: 14px gray `#888`, `#efefef` divider under each row
      except the last, padding 10px top / 15px left / 10px bottom; hover →
      black `#000` text, `padding-left: 20px`, blue 6px `#007bff` left
      accent bar
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — like Privy/Lilac, unlike Onboard/Glimpse/Inquire; the menu
      is not restyled on narrow viewports)
- [ ] No images needed; no carousel (owl assets loaded but unused in the
      source); exactly FIVE icon glyphs (trigger document + 4 file-type
      icons), no lavender accent (unlike Lilac)
- [ ] Roboto (300/400) via Google Fonts `<link>` in `index.html`;
      Poppins/Source Serif Pro are loaded by the source but UNUSED — do not
      load them
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/docket` (provenance lives only here + TEMPLATES.md +
      PR)

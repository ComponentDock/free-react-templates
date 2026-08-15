# Template: Curricula (Course Catalog Mega Menu)

## Purpose

Curricula is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 19" demo design
(source: https://colorlib.com/wp/template/dropdown-19/), built under a
DIFFERENT name (**Curricula** — the demo is a course-catalog mega menu:
a "Courses" link with a layers icon + chevron that opens a wide 3-column
panel of subject categories (Math / Computing / Economic) with colored
headings and left-accented link lists; a single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/` or `docs/templates/` —
verified 2026-08-16), per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
link-triggered mega-menu dropdown: a centered gray "Courses" trigger
(layers glyph + "Courses" + keyboard-chevron) that opens a **680px-wide**
white card centered below it (left:50% + translateX(-50%)) holding a flex
row of THREE equal-width subject columns, each with a colored uppercase
heading, a 2px colored left border on its link list, and six gray category
links with parenthetical counts — a minimal, functional component-showcase
page on a white background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 19" — nineteenth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 772). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy**, Dropdown 12 as
  **Lilac**, Dropdown 13 as **Docket**, Dropdown 14 as **Fount**,
  Dropdown 15 as **Notifly**, Dropdown 16 as **Sitemap**, Dropdown 17 as
  **Console**, Dropdown 18 as **Identity** (see `docs/templates/menubar/`
  … `docs/templates/identity/`). This prep: Dropdown 19 → **Curricula**.
- **Preview DOM analyzed (LIVE, fetched via curl AND verified in a
  browser):** `https://preview.colorlib.com/theme/bootstrap/dropdown-19/`
  (HTTP 200, 22,623 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-19/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets:
  `fonts/icomoon/style.css` (full FA-derived icon font — the markup
  consumes exactly TWO glyphs: `icon-layers` and
  `icon-keyboard_arrow_down`), `css/owl.carousel.min.css` (LOADED but
  UNUSED — no carousel in this demo), `css/bootstrap.min.css` (Bootstrap 4
  base), and `css/style.css` — a SLIM ~131-line / 4,000-byte template
  stylesheet (the same slim builder as dropdown-11/12/13/14/15/18 —
  Privy/Lilac/Docket/Fount/Notifly/Identity; NOT the 222 KB ftco
  stylesheet that dropdown-09/10 load). Libs: jquery, popper,
  bootstrap.min.js, owl.carousel.min.js (unused), `js/main.js` — which
  only adds `.active` to `.dropdown-menu` 100 ms after `show.bs.dropdown`
  fires and removes it on `hide.bs.dropdown` (drives the fade/slide
  animation; Bootstrap handles all open/close logic — identical to the
  other slim-builder demos). Google Fonts loaded via inline cf-fonts
  `@font-face` blocks: **Roboto (300/400/700)** — only Roboto is used in
  the demo. For the recreation, load Roboto (300/400) via a Google Fonts
  `<link>` per conventions.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live
  page's `<title>` AND `<h2>` read **"Dropdown #9"** (NOT "Dropdown #19"),
  and the TEMPLATES.md screenshot (`dropdown-19.jpg`) shows the same text
  — the page was cloned from the Dropdown 09 demo and the heading was never
  renumbered (the same copy-paste bug as Identity's "Dropdown #8", Notifly's
  "Dropdown #5", Lilac's "Dropdown #2", Docket's "Dropdown #3" and Fount's
  "Dropdown #4"). The recreation SHALL render the heading text exactly as
  the reference renders it — **"Dropdown #9"** — because fidelity mandates
  the original (DOM + screenshot both agree). Do NOT silently "fix" it to
  "Dropdown #19"; the numbering discrepancy is documented here and belongs
  in the PR description. (The monorepo document-title convention uses the
  NEW name instead, e.g. "Curricula — Course Catalog Mega Menu".)
- **SOURCE "Percalculus" TYPO (documented, reproduce faithfully):** the
  Math column's sixth link reads **"Percalculus(16)"** in the live DOM
  (a misspelling of "Precalculus" — the "r" is missing). The TEMPLATES.md
  screenshot appears to read "Precalculus(16)", so this is a live-DOM-only
  typo. Following the Identity precedent (live DOM is authoritative when it
  differs from the screenshot), the recreation SHALL render the link as the
  live DOM does — **"Percalculus(16)"** — and note the typo in the PR
  description. Do NOT silently "fix" it to "Precalculus".
- **SOURCE COUNT VARIANCES (live DOM authoritative):** the live DOM counts
  differ from the screenshot's in two cells — "Early math(**5**)" (DOM) vs
  "Early math(3)" (screenshot) and "Accounting(**93**)" (DOM) vs
  "Accounting(10)" (screenshot) — demo-content variance between hosts (the
  same class of variance Identity documented for its Inbox badge "3" vs
  "1"). Use the live DOM values below; note in the PR.
- **SOURCE DANGLING ARIA BUG (documented, do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (the
  same bug as Identity/Notifly/Fount/Lilac/Docket). The recreation SHALL
  pair trigger and menu properly via `aria-controls`/id instead.
- **Visual design (from live DOM + CSS tokens + screenshot + live browser
  geometry):** minimalist component-showcase page. Body background =
  **`#fff`** (WHITE — unlike Identity's `#efefef`; the slim `style.css`
  sets NO background on `body`, so Bootstrap 4's default white shows; the
  screenshot confirms white). `.content` wrapper padding **7rem 0** (live
  112px 0). Heading: `h2.my-5.text-center` "Dropdown #9" — custom
  `h2 { font-size: 20px }` override (NOT Bootstrap's 2rem), Roboto,
  near-black `#212529` (inherited Bootstrap body color), `my-5` = 3rem (live
  48px) top AND bottom margin. Below it a centered demo row
  (`row.justify-content-center.text-center` → `col-md-5`, the narrow
  ~41.7%-on-md+ column) holding `div.dropdown.custom-dropdown`:
  - **Trigger** = `<a href="#" data-toggle="dropdown" class="dropdown-link"
aria-haspopup="true" aria-expanded="false">` — a LINK-triggered
    dropdown (no `d-flex`, no avatar, no `data-offset` — simpler than
    Identity's trigger) containing:
    - `<span class="icon-layers mr-1"></span>` — the layers glyph (a
      diamond/stack-of-sheets icon → lucide `Layers`), `mr-1` = 0.25rem
      (live 4px) right margin, 16px (inherited BS4 base).
    - text node **"Courses"**.
    - `<span class="icon-keyboard_arrow_down arrow"></span>` — the
      keyboard-style chevron (→ lucide `ChevronDown`), `.arrow` class.
    - `.dropdown-link` styling: **`color: #888`** (medium gray — live
      rgb(128,128,128)), `display: inline-block`, `position: relative`,
      **NO background, NO border** (live: transparent bg, 0px border).
    - **OPEN-STATE CHANGE (visible — unlike Identity):** the arrow IS in
      the markup, so `.custom-dropdown.show a { color: #000 }` turns the
      trigger text/icons BLACK while open, and
      `.custom-dropdown.show a .arrow { transform: rotate(180deg) }`
      flips the chevron (live matrix(-1,0,0,-1) when open). Transition:
      `.3s transform ease` on the arrow; `.3s all ease` on links.
  - **Menu** = `div.dropdown-menu` (with a dangling
    `aria-labelledby="dropdownMenuButton"` — do NOT reproduce the
    association): white bg `#fff` (BS4 default — the slim CSS does not
    override it), `border: 1px solid transparent` (overrides BS4's
    `rgba(0,0,0,.15)`), **`border-radius: 4px`** (BS4's default .25rem —
    NOT overridden, unlike Identity's square `0`), shadow
    `0 15px 30px 0 rgba(0,0,0,.2)`, `padding: 10px` (overrides BS4's
    `.5rem 0` — uniform 10px all sides), **`min-width: 680px`** (a WIDE
    mega menu — live width exactly 680px), positioned
    `top: 100% !important; left: 50% !important;
transform: translate(-50%, 0) !important; right: auto !important`
    (popper.js centers it on the trigger — live left 222.5px with a
    -340px X-translate, i.e. centered under the trigger, overflowing the
    `col-md-5` column to both sides). ANIMATED open: base `opacity: 0;
visibility: hidden; margin-top: 0px !important` → `.active`:
    `opacity: 1; visibility: visible; margin-top: 10px !important`,
    transition `.3s margin-top ease, .3s opacity ease, .3s visibility
ease` (fade + **10px slide-DOWN** — margin-top 0→10px; opposite
    direction to Identity's -10px→0; `.active` added by main.js 100 ms
    after `show.bs.dropdown`). **LIVE GEOMETRY (browser-verified):** a
    white rounded (4px) card, 680px wide, centered under the trigger with
    a soft diffuse shadow and a 10px gap, three columns inside.
  - **Mega panel** = `div.mega-menu.d-flex` — `display: flex`, padding
    **20px** (live). Inside, THREE `div` columns, each
    `width: 33.3333%` (live 205.98px each within the 680px card),
    `padding-left/right: 10px`:
    1. **Math** — `h3.text-primary` (heading color **`#007bff`** blue) +
       `ul.list-unstyled.border-primary` (left border **2px solid
       `#007bff`**, `padding-left: 20px`): Early math(5) / Pre-Algebra(22)
       / Algebra 1(12) / Geometry(81) / Trigonometry(9) /
       **Percalculus(16)** (typo — see above).
    2. **Computing** — `h3.text-warning` (heading color **`#ffc107`**
       amber) + `ul.list-unstyled.border-warning` (left border 2px solid
       `#ffc107`, padding-left 20px): Computer Programming(5) / Computer
       Science(12) / Hour of Code(81) / Computer Animation(9) / Graphic
       Design(16) / Logo Design(22).
    3. **Economic** — `h3.text-danger` (heading color **`#dc3545`** red) +
       `ul.list-unstyled.border-danger` (left border 2px solid `#dc3545`,
       padding-left 20px): Microeconomics(32) / Macroeconomics(61) /
       Finance(73) / Capital Markets(88) / World Economy(19) /
       Accounting(93).
    - Column heading styling (`.mega-menu h3`): **14px**, **uppercase**,
      weight 500 (BS4 h3 default — live 14px/500), no other overrides.
    - Link lists (`ul.list-unstyled`): `margin: 0; padding: 0`
      (list-unstyled strips bullets; the colored left border + 20px
      padding-left come from the `border-*` classes), live
      `border-left: 2px solid <color>`, `padding-left: 20px`.
    - **Links** (`a`): `display: block`, `padding-top/bottom: 5px` (5px
      vertical rhythm between rows), **14px**, `color: gray`
      (rgb(128,128,128) — the BS4 `gray` color), `font-weight: 400`,
      `text-decoration: none`; **hover: `color: #000`** (black; live
      confirmed). No dividers between rows (unlike Identity's account
      menu) — just 5px paddings.
  - **No footer/other sections** — the demo is exactly: heading + one
    mega-menu dropdown. (The monorepo footer is a mandatory addition per
    conventions.md.)
  - **Unused CSS in the shared slim stylesheet (do NOT reproduce
    functionally):** `p { color: #b3b3b3 }` (no `<p>` in this demo),
    `.custom-dropdown .btn:active/:focus` (box-shadow/outline reset),
    `.btn.btn-custom` (border `#efefef`), `.title-wrap` (padding 10px 0),
    `.title` (12px/700 uppercase), `.dropdown-link .wrap-icon`
    (font-size 30px) and `.dropdown-link .number` (24px round `#007bff`
    badge with 2px white border — a notification-bell variant used by a
    SIBLING demo, never rendered here), `.custom-dropdown a .arrow`
    transition (the arrow IS used here — see above). Note in PR only.
  - **No mobile-specific CSS** in this slim stylesheet (like
    Privy/Lilac/Docket/Fount/Notifly/Identity): there are NO media
    queries. The 680px menu stays centered under the trigger at ALL
    viewports via `left:50%` + `translateX(-50%)` — on a narrow phone it
    OVERFLOWS the viewport to both sides (source behavior — reproduce it;
    do NOT add responsive handling).
- **Icons:** exactly TWO `icon-*` glyphs in the demo markup:
  `icon-layers` (→ lucide `Layers`; `mr-1`/0.25rem right margin) on the
  trigger and `icon-keyboard_arrow_down` (→ lucide `ChevronDown`) as the
  `.arrow` chevron. No other icons; no carousel (owl assets loaded but
  unused). The colored column headings and left borders are pure CSS (no
  icons).
- **Images:** NONE — the demo uses no images at all (no avatars, no
  photos, no backgrounds). The recreation needs no picsum assets.
- **Screenshot:** `dropdown-19.jpg` (1200×972, viewed in browser) —
  white page, centered heading "Dropdown #9", below it the trigger (gray
  "Courses" with a small gray diamond/layers glyph left and a downward
  chevron right, NO border) with the menu OPEN beneath: a wide white card
  with a soft diffuse shadow, three equal columns — MATH (blue heading,
  blue left rule) / COMPUTING (amber heading, amber left rule) / ECONOMIC
  (red heading, red left rule) — each with six dark-gray category links
  (lighter counts in parentheses). Matches DOM + CSS + live preview EXCEPT
  the two count cells noted above (Early math / Accounting) and the
  "Percalculus" vs "Precalculus" spelling. URL bar in the screenshot shows
  `preview.codyfol.io` (an OLDER preview host; the CURRENT live preview is
  `https://preview.colorlib.com/theme/bootstrap/dropdown-19/`).

## Design tokens (from the reference)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Source                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Page background   | **`#fff`** (WHITE — the slim `style.css` sets NO `body` background, so Bootstrap 4's default white shows; unlike Identity's `#efefef`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | BS4 `body` default + screenshot          |
| Heading           | "Dropdown #9" (SOURCE BUG — see above; reproduce as-is, NOT "#19"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem (48px) top + bottom margin                                                                                                                                                                                                                                                                                                                                                                                         | `h2` override + `.my-5`                  |
| Section rhythm    | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `.content`                               |
| Trigger link      | `.dropdown-link` — **`color: #888`** (medium gray, live rgb(128,128,128)), `display: inline-block`, `position: relative`; **NO background, NO border**; **OPEN STATE: turns `#000` and the chevron rotates 180°** (`.custom-dropdown.show a` + `.show a .arrow` — the arrow element IS rendered here, unlike Identity)                                                                                                                                                                                                                                                                                                                        | `.custom-dropdown .dropdown-link` rules  |
| Trigger icons     | `icon-layers` (→ lucide `Layers`) with `mr-1` = 0.25rem right margin, 16px (inherited); `icon-keyboard_arrow_down` (→ lucide `ChevronDown`) as the `.arrow` chevron with `.3s transform ease` transition                                                                                                                                                                                                                                                                                                                                                                                                                                      | preview HTML + icomoon css               |
| Menu panel        | `dropdown-menu` — white `#fff` bg (BS4 default), `border: 1px solid transparent`, **`border-radius: 4px`** (BS4 .25rem — NOT overridden, unlike Identity's `0`), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, `padding: 10px` (uniform; overrides BS4 `.5rem 0`), **`min-width: 680px`**; anchored `top: 100%; left: 50%; transform: translate(-50%,0)` (centered under the trigger, overflows the narrow column); ANIMATED: `opacity: 0; visibility: hidden; margin-top: 0` → `.active`: `opacity: 1; visibility: visible; margin-top: 10px`, transition `.3s margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px slide-DOWN**) | `.custom-dropdown .dropdown-menu` rules  |
| Mega panel        | `.mega-menu.d-flex` — `display: flex`, padding **20px**; three columns each `width: 33.3333%`, `padding-left/right: 10px`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `.mega-menu` rules                       |
| Column headings   | `h3` — **14px**, **uppercase**, weight 500 (BS4 h3 default); colors per column: **`#007bff`** blue (Math, `text-primary`), **`#ffc107`** amber (Computing, `text-warning`), **`#dc3545`** red (Economic, `text-danger`)                                                                                                                                                                                                                                                                                                                                                                                                                       | `.mega-menu h3` + BS4 text-* colors      |
| Column link lists | `ul.list-unstyled.border-*` — `margin: 0; padding: 0`, **`border-left: 2px solid <column color>`**, `padding-left: 20px` (the colored left accent rule)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `.border-primary/-warning/-danger` rules |
| Menu links        | `a` — `display: block`, `padding: 5px 0`, **14px**, `color: gray` (rgb(128,128,128)), `font-weight: 400`, no underline; **hover: `color: #000`**; NO dividers between rows (5px paddings only)                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.mega-menu a` rules                     |
| Font family       | Roboto (300/400/700 available; body `font-weight: 300`), stack `"Roboto", -apple-system, …, sans-serif`; body text default `#212529`; links default `gray`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `body` rule + cf-fonts @font-face block  |
| Icons             | TWO glyphs total: `icon-layers` → lucide `Layers`, `icon-keyboard_arrow_down` → lucide `ChevronDown`; no other icons, no carousel (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | preview HTML + icomoon css               |
| Images            | NONE — the demo uses no images (no avatar, no photos, no backgrounds); recreation needs no picsum assets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | preview HTML                             |
| Mobile behavior   | NONE — no media queries in the slim stylesheet (like Privy/Lilac/Docket/Fount/Notifly/Identity); the 680px menu stays centered under the trigger at all viewports and OVERFLOWS narrow screens to both sides (reproduce; no responsive handling)                                                                                                                                                                                                                                                                                                                                                                                              | `style.css` (no media queries)           |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Curricula app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Curricula — Course Catalog Mega Menu"

### Requirement: Page background and section heading

The system SHALL render the white page background and the centered heading
at the top of the section, matching the reference text exactly (including
the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** the page background SHALL be white `#fff`
- **AND** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #9" (the source page renders "Dropdown #9", NOT "Dropdown #19"
  — a documented ColorLib copy-paste bug; reproduce the reference exactly
  and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, with 3rem (48px) top AND bottom margins (Bootstrap
  `my-5` equivalent)

### Requirement: Trigger control

The system SHALL render the centered "Courses" trigger with the layers
icon, the label and the chevron, with full dropdown semantics and the
reference open-state styling.

#### Scenario: Trigger renders with icon, label and chevron

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible as an inline-block link
  showing, left to right:
  - a **layers icon** (lucide `Layers`) with a 0.25rem right margin
  - the label **"Courses"**
  - a **chevron-down icon** (lucide `ChevronDown`, the `.arrow` element)
- **AND** the trigger SHALL have the reference styling: **gray `#888`
  text**, NO background and NO border
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the mega menu on trigger click, close it on outside
click, Escape, or trigger re-click, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open centered below the trigger (white card,
  `border-radius: 4px` (BS4 .25rem), shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
  transparent border, **min-width 680px**, anchored `top: 100%; left: 50%;
transform: translateX(-50%)`)
- **AND** the menu SHALL animate in with a fade + **10px slide-DOWN**
  (opacity 0→1 and margin-top 0→10px, ~0.3s ease — the reference's
  `.active` transition)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Trigger open-state styling

The system SHALL apply the reference open-state treatment: the trigger
turns black and the chevron rotates 180° while the menu is open (the arrow
element IS rendered in this variant, so the rotate rule is live).

#### Scenario: Trigger changes while open

- **GIVEN** the dropdown menu is open
- **THEN** the trigger's text AND icons SHALL turn black `#000` (from the
  reference's `.custom-dropdown.show a { color: #000 }`)
- **AND** the chevron SHALL rotate 180° (the reference's
  `.show a .arrow { transform: rotate(180deg) }`, ~0.3s ease)
- **WHEN** the menu closes
- **THEN** the trigger SHALL return to gray `#888` with the chevron back
  to 0°

### Requirement: Mega menu columns

The system SHALL render the three-column mega panel in the reference order
with the reference column headings, colors and left-accented link lists.

#### Scenario: Column layout and headings

- **GIVEN** the mega menu is open
- **THEN** the menu SHALL show a flex row of exactly three equal columns
  (each ~33.33% wide, 10px horizontal padding inside a 20px-padded panel),
  in reading order:
  1. **Math** — heading in blue **`#007bff`**, link list with a 2px solid
     `#007bff` left border and 20px left padding
  2. **Computing** — heading in amber **`#ffc107`**, link list with a 2px
     solid `#ffc107` left border and 20px left padding
  3. **Economic** — heading in red **`#dc3545`**, link list with a 2px
     solid `#dc3545` left border and 20px left padding
- **AND** each column heading SHALL be **14px**, **uppercase**, weight 500

#### Scenario: Category link lists

- **GIVEN** the three columns are rendered
- **THEN** the Math column SHALL list exactly six links, in order:
  Early math(5) / Pre-Algebra(22) / Algebra 1(12) / Geometry(81) /
  Trigonometry(9) / **Percalculus(16)** (the live DOM's misspelling of
  "Precalculus" — a documented source typo; reproduce as-is and do NOT
  "fix" it)
- **AND** the Computing column SHALL list exactly six links, in order:
  Computer Programming(5) / Computer Science(12) / Hour of Code(81) /
  Computer Animation(9) / Graphic Design(16) / Logo Design(22)
- **AND** the Economic column SHALL list exactly six links, in order:
  Microeconomics(32) / Macroeconomics(61) / Finance(73) / Capital
  Markets(88) / World Economy(19) / Accounting(93)
- **AND** every link SHALL be a focusable, keyboard-activatable element
  (the source items are `<a href="#">` links) with **14px** text,
  **gray** `rgb(128,128,128)` color, weight 400, `display: block`, and
  **5px top AND bottom padding** (no dividers between rows)
- **AND** the link lists SHALL have no list markers and no extra
  margin/padding beyond the colored left border + 20px left padding

#### Scenario: Link hover treatment

- **GIVEN** a category link is rendered
- **WHEN** the user hovers, focuses or activates a link
- **THEN** the link's text SHALL turn black `#000`

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
- **AND** every menu link SHALL be reachable by keyboard and activated with
  Enter/Space

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
- **THEN** the menu SHALL keep the reference behavior: no special mobile
  CSS (unlike Onboard/Glimpse/Inquire) — the 680px card is NOT restyled for
  small screens, stays centered under the trigger, and overflows the
  viewport to both sides (matches the source, which has zero media queries
  in its slim stylesheet)

## Verification checklist

- [ ] `npm run verify:app curricula` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #9" (the SOURCE'S numbering bug —
      reproduce as-is, do NOT "fix" to "Dropdown #19"; 20px Roboto,
      near-black `#212529`, centered, `my-5`/3rem top+bottom margins) on a
      WHITE `#fff` page background
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: lucide `Layers` icon (0.25rem right margin) +
      "Courses" + lucide `ChevronDown` arrow; gray `#888` text, NO
      background/border; when open → text/icons turn `#000` and the chevron
      rotates 180° (~0.3s ease)
- [ ] Menu opens centered below the trigger (white card, `border-radius:
    4px`, shadow `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border,
      **min-width 680px**, `left: 50%` + `translateX(-50%)`) with the fade +
      **10px slide-DOWN** animation (margin-top 0→10px)
- [ ] Mega panel: flex row, 20px padding, three equal columns (33.33%,
      10px horizontal padding): Math (`#007bff` heading + 2px `#007bff`
      left border) / Computing (`#ffc107` + 2px `#ffc107`) / Economic
      (`#dc3545` + 2px `#dc3545`); headings 14px uppercase weight 500
- [ ] 18 category links with the live-DOM text EXACTLY (Math: Early
      math(5) / Pre-Algebra(22) / Algebra 1(12) / Geometry(81) /
      Trigonometry(9) / Percalculus(16) — the source typo; Computing:
      Computer Programming(5) / Computer Science(12) / Hour of Code(81) /
      Computer Animation(9) / Graphic Design(16) / Logo Design(22);
      Economic: Microeconomics(32) / Macroeconomics(61) / Finance(73) /
      Capital Markets(88) / World Economy(19) / Accounting(93)); 14px,
      gray `rgb(128,128,128)`, weight 400, block, 5px vertical padding, no
      dividers; hover/focus → black `#000`
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — like Privy/Lilac/Docket/Fount/Notifly/Identity; the 680px
      card is not restyled on narrow viewports and overflows the viewport)
- [ ] No carousel (owl assets loaded but unused in the source); exactly
      TWO icon glyphs (lucide `Layers` + `ChevronDown`); no images at all
      in the demo
- [ ] Roboto (300/400) via Google Fonts `<link>` in `index.html`; body
      `font-weight: 300`
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/curricula` (provenance lives only here + TEMPLATES.md +
      PR)

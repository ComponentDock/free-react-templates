# Template: Marquee (Navigation Menu Dropdown)

## Purpose

Marquee is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 08" demo design
(source: https://colorlib.com/wp/template/dropdown-08/), built under a
DIFFERENT name (Marquee) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
split-button navigation dropdown — a full-width brand-blue bar holding a
white uppercase wordmark (source: "Splash" → recreation: "Marquee") on the
left and a deep-blue 60×60 square split-toggle with a white hamburger icon
on the right, which opens a right-aligned white menu card listing five
nav items (Home, About, Services, Blog, Contact), each with a trailing
forward arrow icon — a minimal, functional component-showcase page on a flat
light-gray background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 08" — eighth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 761). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard** (see `docs/templates/menubar/`, `docs/templates/popmenu/`,
  `docs/templates/skycast/`, `docs/templates/chime/`,
  `docs/templates/trolley/`, `docs/templates/passkey/`,
  `docs/templates/onboard/`).
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-08/`
  (HTTP 200, 15.3 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-08/` fails to connect — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet `css/style.css`
  (221 KB, 8270 lines, ftco-style Bootstrap 4 theme; the template-specific
  rules are the LAST ~130 lines, from the ftco `body` rule at line 8135
  through the `.btn-group .dropdown-menu .dropdown-item:hover` rule at line
  8268); libs: jquery, popper, bootstrap.min.js, ionicons 4.5.6 — USED by
  this demo (`ion-ios-menu` hamburger + `ion-ios-arrow-round-forward` item
  arrows; replace with lucide-react `Menu` + `ArrowRight` in the
  recreation). Google Font **Roboto** (weights 400/500/700) loaded via a
  Cloudflare `/cf-fonts/s/roboto/` @font-face block in the preview HTML (for
  the recreation, use a Google Fonts `<link>` per conventions).
  `js/main.js` is only a `fullHeight` helper — no dropdown logic (Bootstrap
  handles it). Cross-checked against the TEMPLATES.md screenshot
  (`dropdown-08.jpg`, 1200×972, viewed in browser) — all match. The demo
  brands itself "Splash"; the recreation uses the NEW name **Marquee** as
  its wordmark.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page on a flat **light-gray background `#fafafa`**
  (the ftco `body` rule at line 8135 — SAME treatment as Dropdown
  06/Passkey; the INVERSE of Dropdown 07/Onboard's periwinkle `#79a0eb`).
  Centered BLACK heading "Dropdown #08" (28px Roboto, `#000`,
  `.heading-section` with `mb-4 pb-md-4` margins — same margins as
  Onboard). Below it a single centered column holding a full-width
  brand-blue horizontal bar:
  - **Bar** = `div.btn-group.justify-content-between.align-items-center` —
    Bootstrap base `position: relative; display: inline-flex`, ftco
    override `width: 100%; background: #4d80e4; border-radius: 4px;
padding-left: 20px`; the flex utilities push the wordmark LEFT and the
    split toggle RIGHT; the bar height is driven by the 60px split (~60px).
  - **Wordmark** = `p.text-left.mb-0.heading` (the `.heading` class has NO
    CSS rule) containing `a.logo` — `color: #fff`, `text-transform:
uppercase`, font-size inherited from body (18px Roboto), source text
    "Splash". The screenshot shows it as bold-ish white uppercase text on
    the blue bar. Recreation: "Marquee" (uppercase, white).
  - **Split trigger** = `a.split.dropdown-toggle.dropdown-toggle-split.d-flex
.align-items-center.justify-content-center` — `width: 60px; height:
60px; background: #2161dd` (deep blue), `border-radius: 0 4px 4px 0`
    (right side rounded to match the bar), hover/focus `#3770e1`; inner
    `span.icon.ion-ios-menu` — `color: #fff; font-size: 24px` (white
    hamburger). The standard Bootstrap caret is SUPPRESSED
    (`.dropdown-toggle::after { display: none; }` at line 8218 — same as
    Trolley, unlike Onboard/Passkey). `data-toggle="dropdown"`,
    `aria-haspopup="true"`, `aria-expanded="false"`. NOTE: the source uses
    an `<a href="#">`; the recreation should use a semantic `<button>`
    (see Accessibility requirement).
  - **Menu** = `div.dropdown-menu.dropdown-menu-right` — RIGHT-aligned
    (Bootstrap base `right: 0; left: auto`), `border: none`, bg `#fff`,
    shadow `0px 10px 34px -20px rgba(0,0,0,.41)`, `padding: 0`,
    `min-width: 15rem` (240px), `margin-top: 20px`. Small white caret
    triangle near its top-RIGHT (`.btn-group .dropdown-menu:after`,
    `top: -.7em`, `right: 20px`, `border-width: 0 .7em .8em .7em`,
    `border-bottom-color: #fff`; a translucent `rgba(0,0,0,.02)` duplicate
    `:before` at `top: -.8em` casts a soft shadow; both `z-index: -1`).
    NOTE: unlike dropdown-07/Onboard there is NO mobile media query for the
    menu — it stays right-aligned at all viewports.
  - **Items** = five `a.dropdown-item.justify-content-between.d-flex` rows:
    "Home", "About", "Services", "Blog", "Contact" — each a `<span>` label
    plus a trailing `<span class="ion-ios-arrow-round-forward"></span>`
    arrow icon. `.dropdown-item`: `padding: 15px 20px`, `border-bottom:
1px solid rgba(0,0,0,.05)` (last child: none), hover/focus
    `background: #4d80e4; color: #fff` (brand-blue fill, white text).
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding **5em 0**) → `div.container`
     (max-width 1140px).
  2. Header row (`div.row` → `div.col-md-12.text-center`):
     `h2.heading-section.mb-4.pb-md-4` "Dropdown #08" (28px, **#000 black**,
     centered — the light-background treatment, NOT white-on-periwinkle).
  3. Demo row (`div.row.justify-content-center` →
     `div.col-md-12.d-flex.justify-content-center`): `div.btn-group
.justify-content-between.align-items-center` containing:
     - Wordmark: `p.heading` (text-left, mb-0) → `a.logo` "Splash"
       (white, uppercase).
     - Trigger: `a.split.dropdown-toggle.dropdown-toggle-split` (60×60,
       deep blue `#2161dd`, right-rounded, hamburger icon, caret hidden,
       `aria-haspopup="true"` / `aria-expanded="false"`).
     - Menu: `div.dropdown-menu.dropdown-menu-right` — white card (240px,
       shadow, caret top-right `right: 20px`), right-aligned under the
       trigger, containing the five `a.dropdown-item` rows (Home, About,
       Services, Blog, Contact), each with a trailing arrow icon; hover
       fills brand blue.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                             | Source                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Page background | `#fafafa` (flat light gray — SAME as Passkey; INVERSE of Onboard/Chime's periwinkle `#79a0eb`)                                                                                                                                                                                                                                                                                                    | ftco `body` rule (line 8135)                      |
| Brand blue      | `#4d80e4` (bar background, plain `a` link color, menu-item hover background)                                                                                                                                                                                                                                                                                                                      | `.btn-group` + `a` + `.dropdown-item:hover` rules |
| Deep blue       | `#2161dd` (split toggle background); hover/focus `#3770e1`                                                                                                                                                                                                                                                                                                                                        | `.btn-group .split`                               |
| Bar             | `div.btn-group` — `width: 100%`, bg `#4d80e4`, `border-radius: 4px`, `padding-left: 20px`, inline-flex with `justify-content-between align-items-center`; height driven by the 60px split (~60px)                                                                                                                                                                                                 | `.btn-group` ftco override                        |
| Wordmark        | `a.logo` — `color: #fff`, `text-transform: uppercase`, 18px Roboto (inherited from body), source text "Splash" → recreation "Marquee"; wrapper `p.heading` is UNSTYLED (only `text-left mb-0` utilities)                                                                                                                                                                                          | `.btn-group .heading .logo`                       |
| Split trigger   | 60×60 square, bg `#2161dd`, `border-radius: 0 4px 4px 0`, hover/focus `#3770e1`; white 24px hamburger icon (source `ion-ios-menu` → lucide `Menu`); caret SUPPRESSED (`.dropdown-toggle::after { display: none }`)                                                                                                                                                                                | `.btn-group .split` + `.dropdown-toggle::after`   |
| Menu card       | `min-width: 15rem` (240px), bg `#fff`, border none, `padding: 0`, `margin-top: 20px`, RIGHT-aligned (`dropdown-menu-right` → `right: 0; left: auto`), shadow `0px 10px 34px -20px rgba(0,0,0,.41)`; white caret triangle near top-RIGHT (`right: 20px`; `:after` `top: -.7em` `border-bottom-color: #fff`, `:before` shadow-cast duplicate at `top: -.8em` `rgba(0,0,0,.02)`, both `z-index: -1`) | `.btn-group .dropdown-menu` + `::before/::after`  |
| Menu items      | `a.dropdown-item` — `padding: 15px 20px`, `border-bottom: 1px solid rgba(0,0,0,.05)` (last: none), label + trailing arrow icon (source `ion-ios-arrow-round-forward` → lucide `ArrowRight`), hover/focus bg `#4d80e4` + text `#fff`                                                                                                                                                               | `.btn-group .dropdown-menu .dropdown-item`        |
| Heading color   | `#000` (BLACK — on the light `#fafafa` background, NOT white like Onboard), 28px Roboto, centered, `mb-4 pb-md-4` (1.5rem bottom margins)                                                                                                                                                                                                                                                         | `.heading-section`                                |
| Font family     | `"Roboto", Arial, sans-serif` (weights 400/500/700 via Cloudflare @font-face; body 18px/1.8)                                                                                                                                                                                                                                                                                                      | ftco `body` + preview HTML @font-face block       |
| Section rhythm  | **5em 0** padding; container max-width 1140px; no mobile-specific dropdown media query (menu stays right-aligned)                                                                                                                                                                                                                                                                                 | `.ftco-section`, `.container`                     |
| Icons           | `ion-ios-menu` (24px white hamburger, in the split) + `ion-ios-arrow-round-forward` (trailing arrows on items) → lucide-react `Menu` + `ArrowRight`                                                                                                                                                                                                                                               | preview HTML (ionicons 4.5.6)                     |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Marquee app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Marquee — Navigation Menu Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #08".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #08"
- **AND** the heading SHALL use the brand font (Roboto), BLACK color (#000),
  28px, with generous bottom margins (mb-4 pb-md-4 equivalent)

### Requirement: Brand bar and wordmark

The system SHALL render the full-width brand-blue bar with the uppercase
white wordmark on the left, exactly like the reference, on the flat
light-gray `#fafafa` page background.

#### Scenario: Bar with wordmark

- **GIVEN** the demo section is rendered
- **WHEN** the bar area loads
- **THEN** a full-width horizontal bar SHALL be visible with the brand
  background `#4d80e4`, `border-radius: 4px`, and left padding (20px
  equivalent)
- **AND** the bar SHALL contain the wordmark "MARQUEE" (uppercase, white)
  on its left side, rendered as a link (the source wordmark is "Splash";
  the recreation uses the NEW name Marquee per the naming mandate)
- **AND** the wordmark SHALL use the brand font (Roboto)

### Requirement: Split toggle trigger

The system SHALL render the deep-blue square split-toggle on the right side
of the bar with a white hamburger icon, no caret, and full dropdown
semantics.

#### Scenario: Trigger renders with hamburger icon

- **GIVEN** the bar is rendered
- **WHEN** the trigger area loads
- **THEN** a 60×60 square control SHALL be visible on the RIGHT side of the
  bar with the deep-blue background `#2161dd` and `border-radius: 0 4px 4px 0`
  (right corners rounded, matching the bar)
- **AND** the control SHALL show a white 24px hamburger icon (source
  `ion-ios-menu` → lucide `Menu`)
- **AND** the control SHALL NOT show the Bootstrap dropdown caret (it is
  suppressed in the reference)
- **AND** the trigger SHALL have `aria-haspopup="menu"` and dynamic
  `aria-expanded` (menu closed → `false`) — use a semantic `<button>`, not
  the source's `<a href="#">`

### Requirement: Dropdown menu behavior

The system SHALL open the nav menu on trigger click, close it on outside
click, Escape, or item activation, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger button with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the bar, RIGHT-aligned with
  the trigger (white card, min-width 240px, shadow
  `0px 10px 34px -20px rgba(0,0,0,.41)`, small white caret triangle near its
  top-right, per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu or presses Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

#### Scenario: Activating an item closes the menu

- **GIVEN** the menu is open
- **WHEN** the user activates one of the menu items (e.g. "Home")
- **THEN** the menu SHALL close (the demo items are non-navigating
  placeholders — no route change required, but closing is required)

### Requirement: Navigation menu items

The system SHALL render the five reference nav items in order inside the
menu, each as a row with its label on the left and a trailing arrow icon on
the right.

#### Scenario: Menu items in order

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL contain, in order, the items "Home", "About",
  "Services", "Blog", "Contact"
- **AND** each item SHALL render its label on the left and a trailing arrow
  icon on the right (source `ion-ios-arrow-round-forward` → lucide
  `ArrowRight`), label and icon pushed apart (justify-content-between
  equivalent)
- **AND** each item SHALL use the reference styling: 15px/20px padding, a
  light bottom border between items (none after the last)
- **AND** on hover/focus each item SHALL fill with the brand blue `#4d80e4`
  and its text SHALL become white

### Requirement: Accessibility

The system SHALL expose dropdown semantics to assistive technology.

#### Scenario: Screen reader exposure

- **GIVEN** the trigger button and menu are rendered
- **WHEN** assistive technology inspects the dropdown
- **THEN** the trigger SHALL expose `aria-haspopup="menu"` and reflect the
  open state via `aria-expanded`
- **AND** the menu SHALL be associated with the trigger (e.g. `aria-controls`
  / `id` pairing)
- **AND** the wordmark SHALL be a real link with accessible text

### Requirement: Footer

The system SHALL render the mandatory monorepo footer with the Component
Dock credit link (the source demo has no footer — this is a monorepo
addition per conventions.md).

#### Scenario: Footer with Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer area loads
- **THEN** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app marquee` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #08" (BLACK, 28px Roboto, centered) on
      flat light-gray `#fafafa` background (NOT #79a0eb periwinkle — that's
      Onboard)
- [ ] Full-width bar is brand blue `#4d80e4` (radius 4px, left padding 20px)
      with uppercase WHITE wordmark "MARQUEE" on the left (NOT "Splash")
- [ ] Split trigger is a 60×60 deep-blue `#2161dd` square (right corners
      rounded, hover `#3770e1`) with a white 24px hamburger icon (lucide
      Menu) and NO caret
- [ ] Menu opens RIGHT-aligned under the bar (margin-top 20px), white card
      min-width 240px, shadow `0px 10px 34px -20px rgba(0,0,0,.41)`, white
      caret near top-right; stays right-aligned at all viewports
- [ ] Menu lists in order: Home, About, Services, Blog, Contact — each
      label left + lucide ArrowRight icon right (justify-content-between),
      bottom border between items, hover fills `#4d80e4` with white text
- [ ] `aria-haspopup`/`aria-expanded` flip on open/close; menu closes on
      outside click, Escape, and item activation
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/marquee` (provenance lives only here + TEMPLATES.md + PR)

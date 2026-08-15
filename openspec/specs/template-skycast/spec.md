# Template: Skycast (Weather Condition Dropdown)

## Purpose

Skycast is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 03" demo design
(source: https://colorlib.com/wp/template/dropdown-03/), built under a
DIFFERENT name (Skycast) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
weather-condition picker dropdown — an indigo button ("Todays Weather") that
opens a white card menu of four icon+label weather options (Sunny Day, Rainy
Day, Cloudy Day, Thunderstorm), each with its own accent color — a minimal,
functional component-showcase page.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 03" — third demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 756). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu** (see `docs/templates/menubar/`, `docs/templates/popmenu/`).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/bootstrap/dropdown-03/`
  (HTTP 200, 8.5 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-03/` 404s — the dropdown
  demos live under the `/theme/bootstrap/` subpath; the ColorLib template
  page (`colorlib.com/wp/template/dropdown-03/`) links the correct preview.
  Master stylesheet `css/style.css` (223 KB, ftco-style Bootstrap 4 theme,
  fully extracted for tokens); libs: jquery, popper, bootstrap.min.js,
  ionicons (4.5.6). Google Font **Poppins** (weights 300–900) loaded via a
  Cloudflare `/cf-fonts/s/poppins/` @font-face block in the preview HTML
  (for the recreation, use a Google Fonts `<link>` per conventions).
  Cross-checked against the TEMPLATES.md screenshot (`dropdown-03.jpg`,
  1200×972, viewed in browser) — all match. The demo brands itself
  "Dropdown #03"; the recreation uses the NEW name **Skycast**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean minimalist
  component-showcase page on a very light gray (`#fafafa`) background
  (confirmed by both CSS `body` rule and the screenshot). Centered black
  heading "Dropdown #03" (28px Poppins, `.heading-section`, generous bottom
  margin `mb-5 pb-md-4`); below it a single centered column holding the
  trigger button and, directly under it, the open weather dropdown card.
  The trigger is a `button.btn.btn-primary.dropdown-toggle.text-left` —
  solid periwinkle-indigo (`#3e64ff`), 4px radius, 18px white text, white
  sun icon (`ion-ios-sunny`, `mr-4` gap) on the left, and a white caret
  triangle absolutely positioned at the right (`right: 20px`, vertically
  centered). Label: "Todays Weather" (original HTML text — note the missing
  apostrophe; keep the label text verbatim for fidelity). The menu card is
  white, borderless, `min-width: 18rem` (288px), `margin-top: 15px`,
  shadow `0 10px 34px -20px rgba(0,0,0,.41)`, with a small white caret
  triangle on its top-RIGHT corner (`right: 0; margin-right: 16px`;
  `border-width: 0 .7em .6em .7em`; a translucent `rgba(0,0,0,.03)`
  duplicate behind it casts a soft shadow). Four rows, each a 20px colored
  ionicon (`span`, `mr-4` = 24px gap) followed by a 16px dark-gray label
  (`rgba(0,0,0,.7)`); rows are separated by `1px solid rgba(0,0,0,.05)`
  borders (last row none). Each item carries its own accent color
  (`color-1..4`) applied to the icon and to a 4px-wide left accent bar
  (`::after`, opacity 0 → 1, 0.3s) that fades in on hover/focus; Bootstrap's
  default `#f8f9fa` row hover also applies. Screenshot shows the menu OPEN
  (default reference state) — matches CSS exactly. Section padding is
  `7em 0`; container max-width 1140px. No header, no hero image — the page
  is purely the demo section.
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding 7em 0) → `div.container`.
  2. Header row (`div.row` → `div.col-md-12.text-center`): `h2.heading-section
mb-5 pb-md-4` "Dropdown #03" (28px, #000, centered).
  3. Demo row (`div.row.justify-content-center` → `div.col-md-6.d-flex
justify-content-center`): `.btn-group` containing:
     - Trigger: `button.btn.btn-primary.dropdown-toggle.text-left`
       (brand indigo `#3e64ff`, radius 4px, 18px; content: `i.ion-ios-sunny
mr-4` white sun icon + label "Todays Weather"), `data-toggle="dropdown"`,
       `aria-haspopup="true"`, `aria-expanded="false"`.
     - `.dropdown-menu.dropdown-menu-right` (288px white card, shadow,
       caret on top right): four `a.dropdown-item` (16px,
       `rgba(0,0,0,.7)`, `padding: 15px 30px`, `border-bottom` 1px
       `rgba(0,0,0,.05)`; 4px left accent bar `::after` colored per item),
       each `span.mr-4` (20px ionicon, colored per item) + label, in order:
       1. `color-1` — `ion-ios-sunny` — "Sunny Day" — `#f9e090`
       2. `color-2` — `ion-ios-rainy` — "Rainy Day" — `#5edfff`
       3. `color-3` — `ion-ios-cloudy` — "Cloudy Day" — `#4d80e4`
       4. `color-4` — `ion-ios-thunderstorm` — "Thunderstorm" — `#ff8080`
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token                  | Value                                                                                                                                                                                                                                                                          | Source                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Brand indigo (primary) | `#3e64ff`; hover/focus `#5878ff`                                                                                                                                                                                                                                               | `.btn-primary` ftco override + `:hover`                                                 |
| Sunny accent           | `#f9e090`                                                                                                                                                                                                                                                                      | `.color-1 span` color / `:hover:after` bg                                               |
| Rainy accent           | `#5edfff`                                                                                                                                                                                                                                                                      | `.color-2 span` color / `:hover:after` bg                                               |
| Cloudy accent          | `#4d80e4`                                                                                                                                                                                                                                                                      | `.color-3 span` color / `:hover:after` bg                                               |
| Storm accent           | `#ff8080`                                                                                                                                                                                                                                                                      | `.color-4 span` color / `:hover:after` bg                                               |
| Icon color             | `#fff` on trigger (20px ionicons on items, colored per item)                                                                                                                                                                                                                   | `.btn-primary` color, `.dropdown-menu .dropdown-item span` (font-size 20px)             |
| Page background        | `#fafafa` (very light gray — confirmed in screenshot)                                                                                                                                                                                                                          | `body` ftco rule                                                                        |
| Heading color          | `#000`                                                                                                                                                                                                                                                                         | `.heading-section` (28px, Poppins)                                                      |
| Item text              | `rgba(0,0,0,.7)`, 16px, weight 400, padding `15px 30px`; row border `1px solid rgba(0,0,0,.05)` (last row none)                                                                                                                                                                | `.dropdown-menu .dropdown-item`                                                         |
| Item hover/focus       | Bootstrap row hover bg `#f8f9fa`, text `#16181b` + 4px left accent bar (`::after`, `width: 4px`, opacity 0→1, 0.3s) in the item's color                                                                                                                                        | `.dropdown-item:hover` + `.dropdown-menu .dropdown-item:after` + `.color-N:hover:after` |
| Font family            | `"Poppins", Arial, sans-serif` (weights 300–900 via Cloudflare @font-face; body 14px/1.8)                                                                                                                                                                                      | `body` + preview HTML @font-face block                                                  |
| Trigger button         | `#3e64ff` bg, white text 18px, padding `15px 16px`, `border-width: 1px`, `border-radius: 4px`, shadow `0 10px 20px -6px rgba(0,0,0,.12)`; white caret triangle absolute `right: 20px` (top 50%, `translateY(-50%)`)                                                            | `.btn` ftco override + `.btn-primary` + `.dropdown-toggle::after`                       |
| Menu card              | `min-width: 18rem` (288px), bg `#fff`, border none, padding 0, `margin-top: 15px`, shadow `0 10px 34px -20px rgba(0,0,0,.41)`; white caret triangle top-right (`right: 0; margin-right: 16px`, `border-width: 0 .7em .6em .7em`, plus `rgba(0,0,0,.03)` shadow-cast duplicate) | `.dropdown-menu` ftco override + `::before/::after`                                     |
| Section rhythm         | `7em 0` padding; container max-width 1140px                                                                                                                                                                                                                                    | `.ftco-section`, `.container`                                                           |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Skycast app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Skycast — Weather Condition Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #03".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #03"
- **AND** the heading SHALL use the brand font (Poppins), black color, and
  a generous bottom margin (mb-5 + pb-md-4 equivalent)

### Requirement: Weather trigger button

The system SHALL render the indigo trigger button exactly like the reference:
brand-indigo background, white sun icon on the left, the label "Todays
Weather" (verbatim — the original deliberately has no apostrophe), and a
white caret triangle on the right.

#### Scenario: Trigger renders with icon, label, and caret

- **GIVEN** the demo section is rendered
- **WHEN** the trigger area loads
- **THEN** a button SHALL be visible with background `#3e64ff`, white text
  18px, 4px border radius, and the reference shadow
- **AND** it SHALL contain a white sun icon (lucide `Sun`) on the left
  followed by the label "Todays Weather"
- **AND** a white caret triangle SHALL be positioned at its right edge
  (vertically centered)
- **AND** it SHALL have `aria-haspopup="menu"` and dynamic `aria-expanded`
  (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the weather menu on trigger click, close it on outside
click, Escape, or item selection, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger button with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the button (with the small
  white caret triangle on its top-right corner, per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu or presses Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

#### Scenario: Selecting an item closes the menu

- **GIVEN** the menu is open
- **WHEN** the user activates any menu item
- **THEN** the menu SHALL close (the demo items are selection placeholders —
  no navigation required, but closing is required)

### Requirement: Menu items

The system SHALL render the four reference weather options in order, each as
a colored icon (20px lucide icon) plus a 16px dark-gray label, mirroring the
reference labels, icon kinds, and accent colors.

#### Scenario: Four items in order

- **GIVEN** the dropdown menu is open
- **THEN** it SHALL contain, in order: Sunny Day, Rainy Day, Cloudy Day,
  Thunderstorm
- **AND** each item SHALL pair its accent-colored lucide icon (Sun,
  CloudRain, Cloud, CloudLightning respectively) with the label text
  beside it (24px gap), using the accent colors `#f9e090`, `#5edfff`,
  `#4d80e4`, `#ff8080` respectively
- **AND** rows SHALL be separated by `1px solid rgba(0,0,0,.05)` borders
  (no border after the last item)

#### Scenario: Hover state matches reference

- **GIVEN** any menu item
- **WHEN** it is hovered or focused
- **THEN** the item SHALL get the Bootstrap-style row hover (bg `#f8f9fa`)
- **AND** a 4px-wide accent bar SHALL fade in along the item's left edge,
  colored with that item's accent color

### Requirement: Accessibility

The system SHALL expose dropdown semantics to assistive technology.

#### Scenario: ARIA attributes

- **GIVEN** the trigger button and menu
- **THEN** the trigger SHALL have `aria-haspopup="menu"` and a dynamic
  `aria-expanded` attribute
- **AND** the menu SHALL be `role="menu"` with `role="menuitem"` items
- **AND** items SHALL be reachable and operable by keyboard (focus-visible
  rings on hover/focus states)

### Requirement: Footer

The system SHALL include the mandatory monorepo footer crediting Component
Dock (the reference demo has no footer — this is a repo convention).

#### Scenario: Component Dock credit

- **GIVEN** the page is rendered
- **WHEN** the footer loads
- **THEN** a footer SHALL be present in the contentinfo landmark
- **AND** it SHALL link to `https://www.componentdock.com/` ("Component
  Dock") and never reference ColorLib

## Verification checklist

- [ ] `apps/skycast` exists with package name `@free-react-templates/skycast`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Brand indigo `#3e64ff` / hover `#5878ff` and the four accents
      `#f9e090` / `#5edfff` / `#4d80e4` / `#ff8080` defined in `@theme`;
      Poppins Google Font `<link>` in index.html
- [ ] Section order matches the reference 1:1 (centered heading → trigger
      button + weather dropdown menu → footer)
- [ ] Menu opens directly below the button with the white caret on the top
      right; closes on outside click / Escape / item select; one open at a
      time
- [ ] Four items in order with accent-colored lucide icons; hover shows
      `#f8f9fa` row bg + 4px left accent bar in the item's color
- [ ] ARIA: `aria-haspopup`, dynamic `aria-expanded`, `role="menu"` /
      `menuitem`; 100% coverage on all interaction scenarios
- [ ] Per-app gate passes: `scripts/verify-app.sh skycast` (typecheck +
      lint + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark line 756 (Dropdown 03) `[~]` → `[x]` + Surge URL +
      homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table after merge
- [ ] PR description states: source template (ColorLib Dropdown 03), preview
      URL, design tokens, what differs (rename, lucide icons, added
      Component Dock footer)

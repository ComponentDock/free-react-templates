# Template: Chime (Notifications Dropdown)

## Purpose

Chime is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 04" demo design
(source: https://colorlib.com/wp/template/dropdown-04/), built under a
DIFFERENT name (Chime) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
notifications bell dropdown — a transparent trigger (white bell icon + white
"Notifications" label, with a green unread dot) that opens a white card menu
of three avatar+text notification rows (David Smith, John Doe, Gary Clinton)
plus a "VIEW ALL" link — a minimal, functional component-showcase page on a
flat periwinkle background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 04" — fourth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 757). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast** (see `docs/templates/menubar/`,
  `docs/templates/popmenu/`, `docs/templates/skycast/`).
- **Preview DOM analyzed (LIVE, clicked open in browser):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-04/`
  (HTTP 200, 15.7 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-04/` 404s — the dropdown
  demos live under the `/theme/bootstrap/` subpath; the ColorLib template
  page (`colorlib.com/wp/template/dropdown-04/`) links the correct preview.
  Master stylesheet `css/style.css` (222 KB, ftco-style Bootstrap 4 theme,
  fully extracted for tokens); libs: jquery, popper, bootstrap.min.js,
  ionicons (4.5.6). Google Font **Roboto** (weights 400/500/700) loaded via
  a Cloudflare `/cf-fonts/s/roboto/` @font-face block in the preview HTML
  (for the recreation, use a Google Fonts `<link>` per conventions).
  Cross-checked against the TEMPLATES.md screenshot (`dropdown-04.jpg`,
  1200×972, viewed in browser) — all match. The demo brands itself
  "Dropdown #04"; the recreation uses the NEW name **Chime**.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page on a flat medium periwinkle/blue-purple background
  `#6c81f4` (confirmed by both the CSS `body` rule and the screenshot).
  Centered white heading "Dropdown #04" (28px Roboto, `.heading-section`,
  generous bottom margin `mb-5`); below it a single centered column holding
  the trigger and, under it, the open notification card. The trigger is an
  `a.btn-custom.dropdown-toggle.text-left.d-flex.align-items-center.notif`
  — TRANSPARENT (no background rule in the CSS — the white content sits
  directly on the periwinkle page), 18px white text, `data-toggle="dropdown"`,
  `aria-haspopup="true"`, `aria-expanded="false"`. Content: a 40×40 flex
  icon container (`div.icon`) holding a white 26px bell icon
  (`i.ion-ios-notifications`) with a 10px green unread dot
  (`#28a745`, `border: 2px solid #fff`) absolutely positioned at
  `top: 8px; right: 10px` of the icon box; then the label "Notifications".
  Bootstrap's caret is suppressed (`.dropdown-toggle::after { display: none }`).
  The menu card (`.btn-group .dropdown-menu`) is white, borderless,
  `min-width: 25rem` (400px; 22rem on ≤767.98px), `margin-top: 60px`,
  horizontally centered on the trigger (`left: 50%; translateX(-50%)`),
  shadow `0 10px 34px -20px rgba(0,0,0,.41)`, with a small white caret
  triangle at its top-CENTER (`.dropdown-menu:after`, `top: -.7em`,
  `border-width: 0 .7em .8em .7em`, `border-bottom-color: #fff`; a
  translucent `rgba(0,0,0,.02)` duplicate `:before` at `top: -.8em` casts a
  soft shadow). Three rows, each `a.dropdown-item.d-flex.align-items-start`
  (16px, `rgba(0,0,0,.7)`, `padding: 20px`, `border-bottom: 1px solid
rgba(0,0,0,.05)` — last row none, `white-space: normal`): a 45px circular
  avatar (`div.img`, `background-size: cover`, `border-radius: 50%`) with a
  10px green presence dot (`#28a745`, `border: 2px solid #fff`, top-right)
  on the LEFT, and a `div.text` (width `calc(100% - 45px)`, `pl-3`) on the
  right: `h4` name (18px, weight 500, `rgba(0,0,0,.8)`) + `span` action
  (18px, weight 400, `rgba(0,0,0,.3)`) on one line, then a `span.time`
  (color `rgba(0,0,0,.3)`). Fourth row: `a.dropdown-item.btn-link.text-center`
  "View All" — uppercase, 13px, weight 500, link color `#726df3`, with a
  right arrow icon (`ion-ios-arrow-round-forward`). Screenshot shows the
  menu OPEN (default reference state) — matches CSS exactly. Section padding
  is `7em 0`; container max-width 1140px. No header, no hero image — the
  page is purely the demo section.
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding 7em 0) → `div.container`.
  2. Header row (`div.row` → `div.col-md-12.text-center`): `h2.heading-section
mb-5` "Dropdown #04" (28px, #fff, centered).
  3. Demo row (`div.row.justify-content-center` → `div.col-md-12.d-flex
justify-content-center`): `.btn-group` containing:
     - Trigger: `a.btn-custom.dropdown-toggle.text-left.d-flex.align-items-center.notif`
       (transparent bg, white 18px text; content: `div.icon` 40×40 flex box
       with white 26px bell icon + green unread dot `#28a745`, then label
       "Notifications"), `data-toggle="dropdown"`, `aria-haspopup="true"`,
       `aria-expanded="false"`.
     - `.dropdown-menu` (400px white card, shadow, caret on top center):
       three `a.dropdown-item.d-flex.align-items-start` (16px,
       `rgba(0,0,0,.7)`, `padding: 20px`, `border-bottom` 1px
       `rgba(0,0,0,.05)`), each: `div.img` 45px circular avatar (person
       photo, green presence dot) + `div.text.pl-3` (`h4` name + `span`
       action + `span.time`), in order:
       1. David Smith — commented on your album — 10 min ago
       2. John Doe — reacted to your video — 10 min ago
       3. Gary Clinton — commented on your picture — 10 min ago
          then `a.dropdown-item.btn-link.text-center` "View All" + right arrow
          icon (uppercase, 13px, `#726df3`).
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token            | Value                                                                                                                                                                                                                                                                                                                                             | Source                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Page background  | `#6c81f4` (flat medium periwinkle/blue-purple — confirmed in screenshot)                                                                                                                                                                                                                                                                          | `body` ftco rule                                              |
| Brand link color | `#726df3` (periwinkle-violet; used for the "View All" link)                                                                                                                                                                                                                                                                                       | `a` ftco rule + `.btn-link` override                          |
| Unread dot       | `#28a745` (green), 10px circle, `border: 2px solid #fff` — on the bell (top-right of the 40px icon box) AND on each avatar (top-right)                                                                                                                                                                                                            | `.btn-custom.notif .icon:after` + `.dropdown-item .img:after` |
| Heading color    | `#fff` (white), 28px Roboto, centered, `mb-5` (2rem) bottom margin                                                                                                                                                                                                                                                                                | `.heading-section`                                            |
| Trigger button   | TRANSPARENT background (no bg rule — white content on the periwinkle page), 18px white text, 40×40 flex icon box with 26px white bell icon; no caret (`.dropdown-toggle::after` suppressed)                                                                                                                                                       | `.btn-custom` + `.btn-custom.notif .icon`                     |
| Menu card        | `min-width: 25rem` (400px; 22rem on ≤767.98px), bg `#fff`, border none, padding 0, `margin-top: 60px`, centered under trigger (`left: 50%`, `translateX(-50%)`), shadow `0 10px 34px -20px rgba(0,0,0,.41)`; white caret triangle top-center (`:after` `top: -.7em` `border-bottom-color: #fff`, `:before` shadow-cast duplicate at `top: -.8em`) | `.btn-group .dropdown-menu` + `::before/::after`              |
| Item row         | 16px, `rgba(0,0,0,.7)`, weight 400, `padding: 20px`, `border-bottom: 1px solid rgba(0,0,0,.05)` (last row none), `white-space: normal`, hover `background: transparent`                                                                                                                                                                           | `.btn-group .dropdown-menu .dropdown-item`                    |
| Avatar           | 45px circle (`border-radius: 50%`, `background-size: cover`), green presence dot top-right; text column `width: calc(100% - 45px)` + `pl-3` (12px gap)                                                                                                                                                                                            | `.dropdown-item .img` + `.dropdown-item .text`                |
| Item text        | Name `h4`: 18px, weight 500, `rgba(0,0,0,.8)`; action `span`: 18px, weight 400, `rgba(0,0,0,.3)`; time `span.time`: `rgba(0,0,0,.3)`                                                                                                                                                                                                              | `.dropdown-item .text h4` + `.time`                           |
| View All link    | Uppercase, 13px, weight 500, `#726df3`, centered, right arrow icon                                                                                                                                                                                                                                                                                | `.dropdown-menu .dropdown-item.btn-link`                      |
| Font family      | `"Roboto", Arial, sans-serif` (weights 400/500/700 via Cloudflare @font-face; body 18px/1.8)                                                                                                                                                                                                                                                      | `body` + preview HTML @font-face block                        |
| Section rhythm   | `7em 0` padding; container max-width 1140px                                                                                                                                                                                                                                                                                                       | `.ftco-section`, `.container`                                 |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Chime app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Chime — Notifications Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #04".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #04"
- **AND** the heading SHALL use the brand font (Roboto), white color, and a
  generous bottom margin (mb-5 equivalent)

### Requirement: Notifications trigger

The system SHALL render the transparent trigger exactly like the reference:
white bell icon with a green unread dot on the left, the label
"Notifications", no caret, on the flat periwinkle page background.

#### Scenario: Trigger renders with icon, label, and unread dot

- **GIVEN** the demo section is rendered
- **WHEN** the trigger area loads
- **THEN** a button SHALL be visible with a TRANSPARENT background (no fill —
  the white content sits directly on the `#6c81f4` page background), white
  18px text
- **AND** it SHALL contain a white bell icon (lucide `Bell`, 26px) inside a
  40×40 flex container followed by the label "Notifications"
- **AND** a 10px green dot (`#28a745`, 2px white border) SHALL be
  positioned at the top-right of the bell icon container
- **AND** it SHALL have `aria-haspopup="menu"` and dynamic `aria-expanded`
  (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the notifications menu on trigger click, close it on
outside click, Escape, or item selection, and keep only one menu open at a
time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger button with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the button, horizontally
  centered on it (with the small white caret triangle on its top-center,
  per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu or presses Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

#### Scenario: Selecting an item closes the menu

- **GIVEN** the menu is open
- **WHEN** the user activates any menu item or the "View All" link
- **THEN** the menu SHALL close (the demo items are selection placeholders —
  no navigation required, but closing is required)

### Requirement: Menu items

The system SHALL render the three reference notification rows in order, each
as a 45px circular avatar on the left and a text block on the right (name +
action + timestamp), mirroring the reference names, action copy, and
timestamps.

#### Scenario: Three notification rows in order

- **GIVEN** the dropdown menu is open
- **THEN** it SHALL contain, in order, the rows: "David Smith — commented on
  your album", "John Doe — reacted to your video", "Gary Clinton — commented
  on your picture"
- **AND** each row SHALL show its timestamp "10 min ago" (reference keeps the
  same timestamp on all three)
- **AND** each row SHALL have a 45px circular avatar image (deterministic
  placeholder, e.g. `https://picsum.photos/seed/chime-<n>/90/90`) with a
  10px green presence dot at its top-right
- **AND** the name SHALL be 18px/500/`rgba(0,0,0,.8)` and the action + time
  SHALL be `rgba(0,0,0,.3)`
- **AND** rows SHALL be separated by `1px solid rgba(0,0,0,.05)` borders
  (no border after the last row)

### Requirement: View All link

The system SHALL render the "View All" link at the bottom of the menu,
mirroring the reference: centered, uppercase, 13px, weight 500, link color
`#726df3`, with a right arrow icon.

#### Scenario: View All row

- **GIVEN** the dropdown menu is open
- **WHEN** the menu footer row loads
- **THEN** a link SHALL be visible with the text "View All" and a right arrow
  icon (lucide `ArrowRight`)
- **AND** the link SHALL be centered, uppercase, 13px, weight 500, and use
  the brand link color `#726df3`

### Requirement: Accessibility

The system SHALL expose dropdown semantics to assistive technology.

#### Scenario: Screen reader exposure

- **GIVEN** the trigger button and menu are rendered
- **WHEN** assistive technology inspects the dropdown
- **THEN** the trigger SHALL expose `aria-haspopup="menu"` and reflect the
  open state via `aria-expanded`
- **AND** the menu SHALL be associated with the trigger (e.g. `aria-controls`
  / `id` pairing)
- **AND** all interactive rows (menu items, "View All") SHALL be keyboard
  focusable

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

- [ ] `npm run verify:app chime` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #04" (white, 28px Roboto, centered) on
      flat `#6c81f4` background
- [ ] Trigger is transparent (no bg), white bell icon + "Notifications",
      green unread dot top-right of the icon box
- [ ] Click opens the 400px white card centered under the trigger with
      top-center caret; outside click / Escape / item click closes it
- [ ] Three notification rows in order with avatars, green presence dots,
      names, actions, "10 min ago" timestamps; 1px `rgba(0,0,0,.05)` row
      separators
- [ ] "View All" centered, uppercase, `#726df3`, with right arrow
- [ ] Footer links `https://www.componentdock.com/`
- [ ] No ColorLib references in any app file (provenance only in spec /
      TEMPLATES.md / PR)
- [ ] Placeholder avatars are deterministic (`picsum.photos/seed/chime-*`);
      fonts via Google Fonts `<link>`; icons from lucide-react
- [ ] `docs/templates/chime/` consulted for implementation notes

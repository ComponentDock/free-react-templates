# Template: Console (Dashboard Dropdown)

## Purpose

Console is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 17" demo design
(source: https://colorlib.com/wp/template/dropdown-17/), built under a
DIFFERENT name (**Console** — the demo is a dashboard-themed dropdown: a
solid-blue "Dashboard" trigger button with a grid icon and down-chevron that
opens a blue menu panel of five "Dashboard N" links, the last two carrying
orange "New" badges; single lowercase word, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-16), per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The page showcases a link-triggered dropdown: a blue
**#007bff** button (grid icon + "Dashboard" + chevron) that opens a blue
menu panel anchored below it — five links ("Dashboard 1" … "Dashboard 5",
items 4 and 5 with an orange "New" pill badge), white 14px text on the blue
panel, hairline white separators between items, sharp corners, a soft
drop-shadow, and a fade + 10px slide-down animation; while open the chevron
rotates 180° (points up). A minimal, functional component-showcase page on a
white background. This is the most colorful demo of the Dropdown series —
the ONLY one with a filled blue trigger AND a filled blue menu panel.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 17" — seventeenth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 770). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy**, Dropdown 12 as
  **Lilac**, Dropdown 13 as **Docket**, Dropdown 14 as **Fount**, Dropdown 15
  as **Notifly**, Dropdown 16 as **Sitemap** (see
  `docs/templates/menubar/` … `docs/templates/sitemap/`). This prep:
  Dropdown 17 → **Console**.
- **Preview DOM analyzed (LIVE, fetched via curl AND verified in a
  browser):** `https://preview.colorlib.com/theme/bootstrap/dropdown-17/`
  (HTTP 200, 21,217 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-17/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets:
  `fonts/icomoon/style.css` (icon font — the markup consumes exactly TWO
  glyphs: `\e871` `icon-dashboard2`, the trigger's grid icon, and `\e313`
  `icon-keyboard_arrow_down`, the trigger chevron),
  `css/owl.carousel.min.css` (LOADED but UNUSED — no carousel in this demo),
  `css/bootstrap.min.css` (Bootstrap 4 base), and `css/style.css` — a SLIM
  ~96-line / 2,861-byte template stylesheet (the slim builder, same family
  as dropdown-11/12/13/14/15/16 — Privy/Lilac/Docket/Fount/Notifly/Sitemap;
  NOT the 222 KB ftco stylesheet that dropdown-09/10 load). Libs: jquery,
  popper, bootstrap.min.js, owl.carousel.min.js (unused), `js/main.js` —
  which only adds `.active` to `.dropdown-menu` 100 ms after
  `show.bs.dropdown` fires and removes it on `hide.bs.dropdown` (drives the
  fade/slide animation; Bootstrap handles all open/close logic — identical
  to the siblings' main.js). Google Fonts loaded via inline cf-fonts
  `@font-face` blocks: **Roboto** (300/400), Poppins (300/400/500), Source
  Serif Pro (400/600) — but ONLY **Roboto** is used (verified: no
  `font-family` usage outside the `@font-face` blocks; body and all
  headings are Roboto). For the recreation, load Roboto (300/400) via a
  Google Fonts `<link>` per conventions — and note the body weight is
  **300 (light)**, the family default.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live
  page's `<title>` AND `<h2>` read **"Dropdown #7"** (NOT "Dropdown #17"),
  and the TEMPLATES.md screenshot (`dropdown-17.jpg`) shows the same text —
  the page was cloned from the Dropdown 07 demo and the heading was never
  renumbered (the same copy-paste bug as Lilac's "Dropdown #2", Docket's
  "Dropdown #3", Fount's "Dropdown #4", Notifly's "Dropdown #5" and
  Sitemap's "Dropdown #6"). The recreation SHALL render the heading text
  exactly as the reference renders it — **"Dropdown #7"** — because
  fidelity mandates the original (DOM + screenshot both agree). Do NOT
  silently "fix" it to "Dropdown #17"; the numbering discrepancy is
  documented here and belongs in the PR description. (The monorepo
  document-title convention uses the NEW name instead, e.g. "Console —
  Dashboard Dropdown".)
- **SOURCE DANGLING ARIA BUG (documented, do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  bug as Fount/Lilac/Docket/Notifly/Sitemap). The recreation SHALL pair
  trigger and menu properly via `aria-controls`/id instead.
- **Visual design (from live DOM + CSS tokens + screenshot + live browser
  geometry):** minimalist component-showcase page. Body background =
  **WHITE** (the slim `style.css` sets NO `background-color` on body — the
  default white, same as the series). Body font Roboto **weight 300**
  (`.content` wrapper padding **7rem 0**). Heading: `h2.my-5.text-center`
  "Dropdown #7" — custom `h2 { font-size: 20px }` override (NOT Bootstrap's
  2rem), Roboto, near-black `#212529` (inherited Bootstrap body color),
  `my-5` = 3rem top AND bottom margin. Below it a centered demo row
  (`row.justify-content-center.text-center` → `col-md-5`, the narrow
  ~41.7%-on-md+ column) holding `div.dropdown.custom-dropdown`:
  - **Trigger** = an `<a href="#" data-toggle="dropdown" class="dropdown-link"
aria-haspopup="true" aria-expanded="false">` (a LINK-triggered dropdown
    like Fount/Docket/Notifly/Sitemap; not a button) containing, IN ORDER:
    `<span class="icon-dashboard2 mr-2"></span>` (the **grid/dashboard
    icon**, icomoon `\e871` = Material "dashboard" → lucide
    `LayoutDashboard`; **16px** — live-verified — with Bootstrap `.mr-2` =
    **8px right margin**), the text **"Dashboard"**, and `<span class="icon-keyboard_arrow_down arrow"></span>`
    (the **chevron**, icomoon `\e313` = Material "keyboard_arrow_down" →
    lucide `ChevronDown`, **16px** — live-verified; `.arrow` class gives it
    `display: inline-block; position: relative; transition: .3s transform
ease`). `.dropdown-link` styling: **`background: #007bff`** (Bootstrap
    primary blue), `color: #fff`, **`padding: 10px 10px`**, **NO
    border-radius** (square corners — NOT a Bootstrap `.btn`), NO border,
    `display: inline` (live-verified — an inline anchor; the 10px padding
    renders the solid blue block), font-size 16px (Bootstrap 4 body
    default). Live geometry: **144.3 × 39 px** blue block. NOTE: unlike
    Sitemap/Notifly there is NO `.number` badge and NO `.wrap-icon` bell —
    the trigger is a filled blue button.
  - **OPEN-STATE FLIP (partial — the chevron only):**
    `.custom-dropdown.show a { color: #fff }` — the trigger text stays
    **white** (already white when closed — live-verified: closed and open
    computed color are both `rgb(255,255,255)`; the rule is visually
    redundant for this demo) — and `.custom-dropdown.show a .arrow {
transform: rotate(-180deg) }` — the **chevron rotates -180°** (points
    UP when open; live-verified: open computed transform
    matrix(-1,0,0,-1,0,0) = 180°, closed `none`).
  - **Menu** = `div.dropdown-menu` (NO `-right` class): **`background:
#007bff`** (a solid BLUE panel — NOT the white panels of the other
    siblings; live-verified `rgb(0,123,255)`), `border: 1px solid
transparent !important` (overrides BS4's `rgba(0,0,0,.15)`),
    **`border-radius: 0`** (SHARP corners — overrides BS4's .25rem;
    live-verified `0px`), shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
    **`min-width: 160px`** (BS4 10rem default — no custom width; the panel
    is auto-width: live-verified rendered width **192.5px**, driven by the
    widest item "Dashboard 4 [New]" plus the items' 40px side padding),
    `right: auto !important; left: auto !important` (overrides BS4's
    `left: 0` — the panel sits at its STATIC position: **LEFT-anchored
    flush under the trigger**; live-verified: menu.x 567.5 vs trigger.x
    567.8 — left edges align; menu top y=263 == trigger bottom y=263,
    flush, `margin-top: 0` in the active state; NOT centered — unlike
    Sitemap's 680px mega panel), `padding-top: 0; padding-bottom: 0`
    (item padding governs the row height), `opacity: 0; visibility:
hidden` base. ANIMATED open: `.active` → `opacity: 1; visibility:
visible; margin-top: 0px !important` — base is **`margin-top: -10px
!important`**, so the panel starts 10px ABOVE its resting spot and
    slides DOWN 10px while fading in; transition `.3s margin-top ease, .3s
opacity ease, .3s visibility ease` (fade + **10px** slide-down —
    direction same as Sitemap/Notifly, from a negative offset instead;
    `.active` added by main.js 100 ms after `show.bs.dropdown`; live: menu
    classes "dropdown-menu show active" when open).
  - **Menu items** = five `a.dropdown-item` anchors, IN ORDER: **Dashboard
    1**, **Dashboard 2**, **Dashboard 3**, **Dashboard 4** (with
    `<span>New</span>`), **Dashboard 5** (with `<span>New</span>`).
    Styling (`.custom-dropdown .dropdown-menu a`): **`font-size: 14px`**,
    white text (inherits `#fff` from the blue panel's link color —
    live-verified `rgb(255,255,255)`), **`padding: 15px 40px`** (tall rows,
    wide 40px side padding), **`border-bottom: 1px solid rgba(255,255,255,
0.1)`** (hairline white separator under EVERY item, including the last;
    live-verified on all five), `position: relative`, transparent bg.
    **Hover/active/focus:** `background: #fff; color: #007bff` (inverts to
    white bg + blue text).
  - **"New" badge** = the `<span>` inside items 4 and 5: `padding: 2px 4px;
border-radius: 2px; font-size: 10px; color: #fff; background: #fd7e14`
    (Bootstrap ORANGE — live-verified `rgb(253,126,20)`), sits inline at
    the item's right (the `.dropdown-item` has no flex — the span follows
    the label text in normal flow).
- **Images:** NONE — the page has no `<img>` elements at all (unlike
  Sitemap's featured card). The only visuals are the two icomoon glyphs
  (grid icon + chevron). No picsum placeholder needed.
- **Unused CSS (do NOT reproduce as functional elements):** the stylesheet
  retains `p { color: #b3b3b3 }` (no `<p>` on this page), the
  `.custom-dropdown .btn:active/.btn:focus` reset and `.btn.btn-custom`
  (border `#efefef`) for a button variant the demo never uses (the trigger
  is a link, not a `.btn`), and the `.title-wrap` / `.title` rules (12px
  700 uppercase header — the markup has NO title-wrap row). Note them in
  the PR description only.
- **No mobile-specific CSS** in this slim stylesheet (like the whole 11–17
  run): there are NO media queries (verified: 0 `@media` blocks). The
  auto-width blue panel is not restyled for narrow viewports (Bootstrap's
  absolutely-positioned dropdown just overflows) — reproduce the source
  behavior (no responsive handling).
- **Screenshot:** `dropdown-17.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #7", below it the trigger: a solid
  medium-blue rectangular block with a small white grid/dashboard icon at
  its left, the white text "Dashboard", and a small white down-chevron at
  its right; menu OPEN beneath it: the SAME solid blue background continues
  down into a vertical list — "Dashboard 1", "Dashboard 2", "Dashboard 3",
  "Dashboard 4", "Dashboard 5" in white sans-serif, left-aligned; items 4
  and 5 each show a small rectangular ORANGE badge at the right with white
  text "New". Matches the live DOM + CSS tokens exactly (the screenshot
  shows the demo in its open state; the closed page is the same minus the
  blue panel).

## Design tokens (from the reference)

| Token              | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Source                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Page background    | WHITE (no `background-color` set in the slim `style.css` — default white; same as the whole 11–17 series; screenshot reads white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `body` (no rule) + screenshot                           |
| Body font          | Roboto (300/400 available), stack `"Roboto", -apple-system, …, sans-serif`, **font-weight: 300** (LIGHT — the family default); body text default `#212529` (Bootstrap 4); `p { color: #b3b3b3 }` (unused on this page)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `body` rule + cf-fonts @font-face block                 |
| Heading            | "Dropdown #7" (SOURCE BUG — see above; reproduce as-is, NOT "#17"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem top + bottom margin                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `h2` override + `.my-5`                                 |
| Section rhythm     | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `.content`                                              |
| Brand / accent     | **`#007bff`** (Bootstrap primary blue) — the demo's single brand color: trigger background AND menu panel background AND menu-item hover text color. Accent: **`#fd7e14`** (Bootstrap orange) — ONLY the "New" badges. White `#fff` — trigger text, menu text, badge text, hover bg. NO pink `#e83e8c` on this page (that was Sitemap's link-hover accent — here hover inverts to blue-on-white)                                                                                                                                                                                                                                                                                                            | `style.css` rules                                       |
| Trigger button     | `.dropdown-link` — `background: #007bff`, `color: #fff`, **`padding: 10px 10px`**, NO border-radius (square), NO border, `display: inline` (live-verified), font-size 16px (inherited); contents IN ORDER: grid icon (lucide `LayoutDashboard`, 16px, **8px right margin** = BS4 `.mr-2`), text **"Dashboard"**, chevron (lucide `ChevronDown`, 16px, `.arrow`: inline-block + relative + `.3s transform ease`). Live size: 144.3 × 39 px                                                                                                                                                                                                                                                                   | `.custom-dropdown .dropdown-link` rules + live geometry |
| Trigger open state | `.custom-dropdown.show a { color: #fff }` — trigger text stays white (visually redundant; live-verified closed AND open = `rgb(255,255,255)`); `.show a .arrow { transform: rotate(-180deg) }` — **chevron rotates -180°** (points UP; live-verified matrix(-1,0,0,-1,0,0) open, `none` closed)                                                                                                                                                                                                                                                                                                                                                                                                             | `style.css` `.show` rules + live                        |
| Menu panel         | `div.dropdown-menu` — **background `#007bff`** (solid blue), `border: 1px solid transparent`, **`border-radius: 0`** (sharp), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **min-width 160px** (BS4 default; auto width — live 192.5px), **LEFT-anchored flush under the trigger** (`left/right: auto !important` → static position; live: menu.x == trigger.x, menu top == trigger bottom), `padding-top/bottom: 0`, base **`margin-top: -10px !important`**; ANIMATED: `opacity: 0; visibility: hidden` → `.active`: `opacity: 1; visibility: visible; margin-top: 0px !important`, transition `.3s margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px** slide-down from a negative offset) | `.custom-dropdown .dropdown-menu` rules + live          |
| Menu items         | Five `a.dropdown-item`: **Dashboard 1, Dashboard 2, Dashboard 3, Dashboard 4 (New), Dashboard 5 (New)** — `font-size: 14px`, white text, **`padding: 15px 40px`**, **`border-bottom: 1px solid rgba(255,255,255,.1)`** under EVERY item; hover/active/focus → `background: #fff; color: #007bff` (inverted)                                                                                                                                                                                                                                                                                                                                                                                                 | `.custom-dropdown .dropdown-menu a` rules + live        |
| "New" badge        | `<span>` inside items 4 & 5: `padding: 2px 4px; border-radius: 2px; font-size: 10px; color: #fff; background: #fd7e14` (orange), inline at the item's right after the label text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `.dropdown-menu a > span` rules + live                  |
| Icons              | EXACTLY TWO glyphs: `\e871` `icon-dashboard2` → lucide `LayoutDashboard` (16px, 8px right margin) and `\e313` `icon-keyboard_arrow_down` → lucide `ChevronDown` (16px, `.arrow`). NO bell, NO `.number` badge, NO other `icon-*` classes, no carousel (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                                                                                                                                        | preview HTML + icomoon css                              |
| Images             | NONE — no `<img>` in the markup (unique in the recent series: Sitemap had a featured card). Nothing to replace                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | preview HTML                                            |
| Mobile behavior    | NONE — no media queries in the slim stylesheet (verified: 0 `@media`); the blue panel is NOT restyled for narrow viewports (Bootstrap's absolutely-positioned dropdown just overflows)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `style.css` (no media queries)                          |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Console app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Console — Dashboard Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
matching the reference text exactly (including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #7" (the source page renders "Dropdown #7", NOT "Dropdown #17"
  — a documented ColorLib copy-paste bug; reproduce the reference exactly
  and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, with 3rem top AND bottom margins (Bootstrap `my-5`
  equivalent)

### Requirement: Trigger control

The system SHALL render the centered "Dashboard" trigger with the grid icon,
text, and down-chevron, styled as a filled blue button, with full dropdown
semantics. (This demo has NO count badge and NO bell icon.)

#### Scenario: Trigger renders as a blue button

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible: a solid blue (`#007bff`)
  block with square corners, white content, 10px padding, 16px text
- **AND** the trigger contents SHALL appear in order: a **grid/dashboard
  icon** (lucide `LayoutDashboard`, 16px) with an **8px right margin**, the
  text **"Dashboard"**, and a **down-chevron icon** (lucide `ChevronDown`,
  16px) at the right
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)
- **AND** there SHALL be NO badge element and NO bell icon

### Requirement: Dropdown menu behavior

The system SHALL open the blue menu panel on trigger click, close it on
outside click, Escape, or trigger re-click, and keep only one menu open at a
time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, **LEFT-anchored flush under the trigger**
  (the reference forces `left/right: auto !important` → static position;
  blue panel, sharp corners `border-radius: 0`, min-width 160px, shadow
  `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, no vertical padding)
- **AND** the menu SHALL animate in with a fade + **10px** slide-down
  (opacity 0→1 and margin-top -10px→0, ~0.3s ease — the reference's
  `.active` transition)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Trigger open-state styling

The system SHALL flip the chevron when the menu opens. (The reference's
`.show a { color: #fff }` rule is visually redundant — the trigger is
already white-on-blue — so the ONLY visible open-state change is the
chevron rotation.)

#### Scenario: Chevron rotates while open

- **GIVEN** the dropdown menu is open
- **THEN** the chevron SHALL rotate **-180°** (point UP; the reference
  `.show a .arrow { transform: rotate(-180deg) }`, transitioned over ~0.3s)
- **AND** the trigger text SHALL remain white (the reference's open-state
  color rule is a no-op for this demo — closed and open both render
  `#fff`)
- **WHEN** the menu closes
- **THEN** the chevron SHALL point down again (transform reset)

### Requirement: Menu content

The system SHALL render the five menu items with the reference labels,
order, and badges.

#### Scenario: Five dashboard items with two "New" badges

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL list exactly five items in order: **Dashboard 1**,
  **Dashboard 2**, **Dashboard 3**, **Dashboard 4**, **Dashboard 5**
- **AND** the items SHALL be white 14px text with `15px 40px` padding and a
  hairline white separator (`1px solid rgba(255,255,255,.1)`) under EVERY
  item, including the last
- **AND** items 4 and 5 SHALL each show an inline **"New"** badge at their
  right: orange `#fd7e14` background, white 10px text, `2px 4px` padding,
  `2px` radius
- **AND** items 1, 2, 3 SHALL have NO badge

#### Scenario: Menu item hover inversion

- **GIVEN** a menu item is rendered
- **WHEN** the user hovers (or focuses) a menu item
- **THEN** its background SHALL turn **white** and its text SHALL turn
  **`#007bff`** (the reference `.dropdown-menu a:hover/:active/:focus` —
  an inverted state)

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

#### Scenario: No responsive restyling

- **GIVEN** the page is rendered in a narrow viewport
- **THEN** the demo SHALL keep the reference layout unchanged (the
  absolutely-positioned blue panel is not restyled for small screens — the
  source has zero media queries; no hamburger, no reflow)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-console`
- [ ] Heading renders "Dropdown #7" (source bug — not "#17"), 20px Roboto,
      `#212529`, centered, 3rem margins, white page bg, `.content` 7rem
      padding, body Roboto weight 300
- [ ] Trigger: solid blue `#007bff` block, square corners, 10px padding,
      white 16px content; order = `LayoutDashboard` (16px, 8px right
      margin) + "Dashboard" + `ChevronDown` (16px, `.arrow` transition);
      semantic `<button>` with `aria-haspopup="menu"` + `aria-expanded`
- [ ] Menu: blue `#007bff` panel, radius 0, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, min-width 160px,
      auto width, left-anchored flush under trigger; fade + 10px slide-down
      (margin-top -10px → 0, ~0.3s); opens on click, closes on
      outside/Escape/re-click
- [ ] Open state: chevron rotated -180° (up); trigger text stays white
- [ ] Items: Dashboard 1…5 in order, white 14px, padding 15px 40px, hairline
      white bottom border on every item; "New" badges (orange `#fd7e14`,
      white 10px, 2px 4px padding, 2px radius) on items 4 and 5 ONLY;
      hover/focus inverts to white bg + `#007bff` text
- [ ] Accessibility: `aria-controls`/id pairing (NOT the source's dangling
      `aria-labelledby`); keyboard-focusable items
- [ ] No images, no carousel; exactly two icon glyphs (LayoutDashboard +
      ChevronDown); unused CSS (`p` color, btn-custom, title-wrap) not
      reproduced; zero media queries (no responsive handling)
- [ ] Footer links `https://www.componentdock.com/`; NO ColorLib references
      anywhere in app code
- [ ] 100% coverage; per-app gate passes; PR description states: source
      template (ColorLib Dropdown 17), preview URL
      (`https://preview.colorlib.com/theme/bootstrap/dropdown-17/`), design
      tokens, heading-bug note, what differs (renames, semantic button,
      lucide icons)

# Template: Privy (Settings Dropdown)

## Purpose

Privy is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 11" demo design
(source: https://colorlib.com/wp/template/dropdown-11/), built under a
DIFFERENT name (Privy — privacy-settings semantics, matching the demo's
"Privacy Settings" trigger) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page
showcases a link-triggered settings dropdown: a centered gray "Privacy
Settings" link with a gear icon that opens a small LEFT-aligned white card
below it listing four settings links (Account, Privacy & Security, Password,
Notification) with a fade + slight slide-down animation — a minimal,
functional component-showcase page on a white background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 11" — eleventh demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 764). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire** (see `docs/templates/menubar/` …
  `docs/templates/inquire/`). This prep: Dropdown 11 → **Privy**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-11/`
  (HTTP 200, 16.7 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-11/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets: `fonts/icomoon/
style.css` (icon font — `icon-cog` = the Font Awesome `\f013` solid gear),
  `css/owl.carousel.min.css` (LOADED but UNUSED — no carousel in this demo),
  `css/bootstrap.min.css` (Bootstrap 4 base), and `css/style.css` — a SLIM
  71-line / 2,199-byte template stylesheet (IMPORTANT: this series page does
  NOT use the 222 KB ftco stylesheet that dropdown-09/10 load; the dropdown
  demos were regenerated with a new builder). Libs: jquery, popper,
  bootstrap.min.js, owl.carousel.min.js (unused), js/main.js — which only
  adds `.active` to `.dropdown-menu` 100 ms after `show.bs.dropdown` fires
  and removes it on `hide.bs.dropdown` (this drives the fade/slide
  animation; Bootstrap handles all open/close logic). Google Fonts loaded
  via Cloudflare `/cf-fonts/`: **Roboto** (300/400), Poppins (300/400/500),
  Source Serif Pro (400/600) — but ONLY **Roboto** is used by the demo
  markup and `style.css` (Poppins and Source Serif Pro are loaded but
  unused). For the recreation, load Roboto (300/400/500) via a Google Fonts
  `<link>` per conventions.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live page's
  `<h2>` reads "Dropdown #1" (NOT "Dropdown #11"), and the TEMPLATES.md
  screenshot (`dropdown-11.jpg`) shows the same text — the page was cloned
  from the Dropdown 01 demo and the heading was never renumbered (sibling
  page 12 shows "Dropdown #2"; page 10 correctly shows "Dropdown #10"). The
  recreation SHALL render the heading text exactly as the reference renders
  it — **"Dropdown #1"** — because fidelity mandates the original (DOM +
  screenshot both agree). Do NOT silently "fix" it to "Dropdown #11"; the
  numbering discrepancy is documented here and belongs in the PR description.
  (The `<title>` also says "Dropdown #1" — the monorepo document-title
  convention uses the NEW name instead, e.g. "Privy — Settings Dropdown".)
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body background = **WHITE** (the slim
  `style.css` sets NO `background-color` on body — the default white, NOT
  the `#fafafa` that the older series pages used; the screenshot reads as
  off-white/very light gray). `.content` wrapper padding **7rem 0** (the
  whole demo block floats vertically centered). Heading: `h2.my-5.text-
center` "Dropdown #1" — custom `h2 { font-size: 20px }` override (NOT
  Bootstrap's 2rem), Roboto, centered, near-black `#212529` (inherited
  Bootstrap body color), `my-5` = 3rem top AND bottom margin. Below it a
  centered demo row (`row.justify-content-center.text-center` →
  `col-md-5`, the narrow ~41.7%-on-md+ column) holding `div.dropdown.
custom-dropdown`:
  - **Trigger** = an `<a href="#" data-toggle="dropdown" class="dropdown-
link" aria-haspopup="true" aria-expanded="false">` containing `<span
class="icon-cog mr-2"></span>Privacy Settings` — a LINK-triggered
    dropdown (NOT a button, unlike Inquire/Glimpse). `.dropdown-link`
    styles: `color: #888`, `font-size: 14px`, `display: inline-block`,
    `padding: 4px 7px`, `border-radius: 4px`, `border: 1px solid
transparent`; HOVER → `border: 1px solid #efefef` + `box-shadow: 0 1px
5px 0 rgba(0,0,0,.05)`; OPEN state (`.custom-dropdown.show`) → `border:
1px solid transparent !important`, `background: #f8f9fa`, INSET shadow
    `0 2px 2px 0 rgba(0,0,0,.2)` (a pressed look while the menu is open).
    Icon: solid gear (FA `\f013`; the monorepo equivalent is lucide-react
    `Settings`/`Cog`), `mr-2` = 0.5rem gap before the label. (The
    `.custom-dropdown .btn` / `.btn.btn-custom` rules in style.css belong to
    the OTHER demos in the series and are UNUSED here.)
  - **Menu** = `div.dropdown-menu.dropdown-menu-left` — LEFT-aligned
    (custom `left: 0 !important`, plus Bootstrap's `dropdown-menu-left`),
    white bg, `border: 1px solid transparent` (overrides BS4's
    `rgba(0,0,0,.15)`), radius `.25rem` (Bootstrap base), `min-width:
10rem` (160px, Bootstrap base), `padding: .5rem 0` (Bootstrap base),
    shadow `0 15px 30px 0 rgba(0,0,0,.2)`. ANIMATED open: base state
    `opacity: 0; visibility: hidden; margin-top: 0`, `.active` →
    `opacity: 1; visibility: visible; margin-top: 10px`, transition
    `margin-top .3s ease, opacity .3s ease` (fade + 10px slide-down; the
    `.active` class is added by main.js 100 ms after `show.bs.dropdown`).
  - **Items** = four plain `<a class="dropdown-item" href="#">` links:
    "Account", "Privacy & Security", "Password", "Notification" —
    `.dropdown-item` override: `font-size: 14px; color: #888`; HOVER →
    `color: #000`; Bootstrap base padding `.25rem 1.5rem` (4px 24px). (NOTE:
    the source menu's `aria-labelledby="dropdownMenuButton"` points at a
    NONEXISTENT id — a source bug; the recreation SHALL pair trigger and
    menu properly via `aria-controls`/id.)
  - **No mobile-specific CSS** in this slim stylesheet (unlike siblings
    Onboard/Glimpse/Inquire which center the menu under the button below
    768px): on small viewports the menu stays LEFT-aligned inside the
    now-full-width centered column — nothing special to reproduce.
- **Section order (1:1, from live demo DOM):**
  1. `.content` wrapper (padding **7rem 0**).
  2. Heading container (`div.container`): `h2.my-5.text-center` "Dropdown
     #1" (20px Roboto, near-black `#212529`, centered, 3rem top/bottom
     margin).
  3. Demo container (`div.container` → `div.row.justify-content-center.text-
center` → `div.col-md-5`): `div.dropdown.custom-dropdown` containing
     the gear + "Privacy Settings" trigger link and the LEFT-aligned
     `dropdown-menu.dropdown-menu-left` with the four settings items.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.
- **Screenshot:** `dropdown-11.jpg` (1200×972, viewed in browser) — white/
  off-white page, centered heading "Dropdown #1", below it the "Privacy
  Settings" trigger (gear icon left of the gray label, white bg with a
  thin light-gray border/inset-shadow — the open-state treatment) with the
  menu OPEN beneath it: small white card with a soft diffuse shadow,
  four dark-gray left-aligned items (Account, Privacy & Security, Password,
  Notification). Matches the DOM + CSS exactly. URL bar in the screenshot
  shows `ui-preview.colorlib.com`.

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                                      | Source                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Page background | WHITE (no `background-color` set in the slim `style.css` — default white; screenshot reads off-white/very light gray). NOTE: NOT the `#fafafa` used by older series pages (Passkey/Marquee/Glimpse/Inquire)                                                                                                                                                                                                                | `body` (no rule) + screenshot           |
| Heading         | "Dropdown #1" (SOURCE BUG — see above; reproduce as-is), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem top + bottom margin                                                                                                                                                                                        | `h2` override + `.my-5`                 |
| Section rhythm  | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                         | `.content`                              |
| Trigger link    | `.dropdown-link` — `color: #888`, `font-size: 14px`, `inline-block`, `padding: 4px 7px`, `border-radius: 4px`, `border: 1px solid transparent`; hover → `border: 1px solid #efefef` + `box-shadow: 0 1px 5px 0 rgba(0,0,0,.05)`; OPEN (`.show`) → `background: #f8f9fa`, border transparent `!important`, INSET shadow `0 2px 2px 0 rgba(0,0,0,.2)` (pressed look)                                                         | `.custom-dropdown .dropdown-link` rules |
| Trigger icon    | Solid gear, FA `\f013` via icomoon (`icon-cog`), `mr-2` = 0.5rem right gap → lucide `Settings`/`Cog` equivalent                                                                                                                                                                                                                                                                                                            | `fonts/icomoon/style.css` + markup      |
| Menu card       | `dropdown-menu.dropdown-menu-left` — white bg, `border: 1px solid transparent`, radius `.25rem` (BS4 base 4px), `min-width: 10rem` (160px), `padding: .5rem 0`, shadow `0 15px 30px 0 rgba(0,0,0,.2)`, LEFT-aligned (`left: 0 !important`); ANIMATED: `opacity: 0; visibility: hidden; margin-top: 0` → `.active`: `opacity: 1; visibility: visible; margin-top: 10px`, transition `margin-top .3s ease, opacity .3s ease` | `.custom-dropdown .dropdown-menu` rules |
| Menu items      | `.dropdown-item` — `font-size: 14px; color: #888`; hover → `color: #000`; BS4 base `padding: .25rem 1.5rem` (4px 24px)                                                                                                                                                                                                                                                                                                     | `.custom-dropdown .dropdown-item` rules |
| Font family     | Roboto (300/400/500 available; page also loads Poppins + Source Serif Pro but they are UNUSED here), stack `"Roboto", -apple-system, …, sans-serif`; body text default `#212529`; `p` (unused here) is `#b3b3b3`/300                                                                                                                                                                                                       | `body` rule + cf-fonts @font-face block |
| Icons           | ONE icon: the gear (`icon-cog`) on the trigger. No other icons, no images, no carousel (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                      | preview HTML                            |
| Mobile behavior | NONE — no media queries in the slim stylesheet; menu stays left-aligned at all viewports (the `col-md-5` simply becomes full-width)                                                                                                                                                                                                                                                                                        | `style.css` (no media queries)          |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Privy app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Privy — Settings Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
matching the reference text exactly (including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #1" (the source page renders "Dropdown #1", NOT "Dropdown #11"
  — a documented ColorLib copy-paste bug; reproduce the reference exactly
  and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, with 3rem top AND bottom margins (Bootstrap `my-5`
  equivalent)

### Requirement: Trigger control

The system SHALL render the centered gray "Privacy Settings" control with
the gear icon and full dropdown semantics.

#### Scenario: Trigger renders with gear icon

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible showing a gear icon followed
  by the label "Privacy Settings"
- **AND** the trigger SHALL use the reference styling: gray `#888` text,
  14px font, padding 4px 7px, `border-radius: 4px`, and a 1px transparent
  border
- **AND** on hover the trigger SHALL show a 1px `#efefef` border and the
  soft shadow `0 1px 5px 0 rgba(0,0,0,.05)`
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the settings card on trigger click, close it on
outside click, Escape, or trigger re-click, and keep only one menu open at
a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the trigger, LEFT-aligned
  (white card, `min-width: 160px`, padding 0.5rem 0, shadow
  `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border)
- **AND** the menu SHALL animate in with a fade + 10px slide-down
  (opacity 0→1 and margin-top 0→10px, ~0.3s ease — the reference's
  `.active` transition)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Open-state trigger styling

The system SHALL show the pressed look on the trigger while the menu is
open, mirroring the reference `.show` state.

#### Scenario: Trigger pressed state

- **GIVEN** the dropdown menu is open
- **THEN** the trigger SHALL show the reference open-state styling:
  background `#f8f9fa`, transparent border, and the INSET shadow
  `0 2px 2px 0 rgba(0,0,0,.2)`
- **WHEN** the menu closes
- **THEN** the trigger SHALL return to its default transparent-border,
  no-background state

### Requirement: Settings menu items

The system SHALL render the four settings links in the reference order with
the reference styling.

#### Scenario: Menu items

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show exactly four items, in order: Account,
  Privacy & Security, Password, Notification
- **AND** each item SHALL be styled as a reference `.dropdown-item`: 14px,
  gray `#888`, padding 4px 24px (Bootstrap `.25rem 1.5rem` equivalent)
- **AND** on hover each item SHALL darken to `#000`

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

## Verification checklist

- [ ] `npm run verify:app privy` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #1" (the SOURCE'S numbering bug —
      reproduce as-is, do NOT "fix" to "Dropdown #11"; 20px Roboto,
      near-black `#212529`, centered, `my-5`/3rem top+bottom margins) on a
      WHITE page background (NOT `#fafafa` — the slim stylesheet sets no
      body bg)
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: gear icon (lucide `Settings`) + "Privacy Settings",
      gray `#888` 14px, padding 4px 7px, radius 4px, 1px transparent
      border; hover → `#efefef` border + `0 1px 5px 0 rgba(0,0,0,.05)`
      shadow
- [ ] Menu opens LEFT-aligned under the trigger (white card, min-width
      160px, padding .5rem 0, shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
      transparent border) with the fade + 10px slide-down animation
- [ ] Open-state trigger: bg `#f8f9fa` + INSET shadow `0 2px 2px 0
    rgba(0,0,0,.2)`, reverting on close
- [ ] Four items in order: Account, Privacy & Security, Password,
      Notification — 14px `#888`, hover `#000`, padding 4px 24px
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — unlike Onboard/Glimpse/Inquire; menu stays left-aligned)
- [ ] No images needed; no carousel (owl assets loaded but unused in the
      source); only ONE icon (the gear)
- [ ] Roboto (300/400/500) via Google Fonts `<link>` in `index.html`;
      Poppins/Source Serif Pro are loaded by the source but UNUSED — do not
      load them
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/privy` (provenance lives only here + TEMPLATES.md +
      PR)

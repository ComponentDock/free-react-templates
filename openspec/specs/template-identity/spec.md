# Template: Identity (User Account Dropdown)

## Purpose

Identity is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 18" demo design
(source: https://colorlib.com/wp/template/dropdown-18/), built under a
DIFFERENT name (**Identity** — the demo is a user-account/identity menu:
avatar + name + location trigger opening a profile-menu card; a single
lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-16), per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The page showcases a link-triggered user-account
dropdown: a left-aligned trigger row (50px round avatar + "Kevin Thomas" +
"New York City, USA") that opens a white menu card of five icon rows (User
Dashboard / Inbox with an orange count badge / Following / Setting /
Log out), with a fade + 10px slide-down animation — a minimal, functional
component-showcase page on a light-gray background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 18" — eighteenth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 771). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy**, Dropdown 12 as
  **Lilac**, Dropdown 13 as **Docket**, Dropdown 14 as **Fount**,
  Dropdown 15 as **Notifly**, Dropdown 16 as **Sitemap**, Dropdown 17 as
  **Console** (see `docs/templates/menubar/` … `docs/templates/console/`).
  This prep: Dropdown 18 → **Identity**.
- **Preview DOM analyzed (LIVE, fetched via curl AND verified in a
  browser):** `https://preview.colorlib.com/theme/bootstrap/dropdown-18/`
  (HTTP 200, 21,681 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-18/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets:
  `fonts/icomoon/style.css` (icon font — the markup consumes exactly FIVE
  glyphs: `icon-dashboard`, `icon-mail_outline`, `icon-people`,
  `icon-cog`, `icon-sign-out`), `css/owl.carousel.min.css` (LOADED but
  UNUSED — no carousel in this demo), `css/bootstrap.min.css` (Bootstrap 4
  base), and `css/style.css` — a SLIM ~123-line / 3,848-byte template
  stylesheet (the same slim builder as dropdown-11/12/13/14/15 —
  Privy/Lilac/Docket/Fount/Notifly; NOT the 222 KB ftco stylesheet that
  dropdown-09/10 load). Libs: jquery, popper, bootstrap.min.js,
  owl.carousel.min.js (unused), `js/main.js` — which only adds `.active`
  to `.dropdown-menu` 100 ms after `show.bs.dropdown` fires and removes it
  on `hide.bs.dropdown` (drives the fade/slide animation; Bootstrap handles
  all open/close logic — identical to Notifly/Privy/Lilac/Docket/Fount's
  main.js). Google Fonts loaded via inline cf-fonts `@font-face` blocks:
  **Roboto** (300/400/700). For the recreation, load Roboto (300/400) via a
  Google Fonts `<link>` per conventions.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live
  page's `<title>` AND `<h2>` read **"Dropdown #8"** (NOT "Dropdown #18"),
  and the TEMPLATES.md screenshot (`dropdown-18.jpg`) shows the same text
  — the page was cloned from the Dropdown 08 demo and the heading was never
  renumbered (the same copy-paste bug as Notifly's "Dropdown #5", Lilac's
  "Dropdown #2", Docket's "Dropdown #3" and Fount's "Dropdown #4"). The
  recreation SHALL render the heading text exactly as the reference renders
  it — **"Dropdown #8"** — because fidelity mandates the original (DOM +
  screenshot both agree). Do NOT silently "fix" it to "Dropdown #18"; the
  numbering discrepancy is documented here and belongs in the PR
  description. (The monorepo document-title convention uses the NEW name
  instead, e.g. "Identity — User Account Dropdown".)
- **SOURCE "SettingNew" GLITCH (documented, reproduce faithfully):** the
  fourth menu item is `<span class="icon icon-cog"></span>Setting<span>New</span>`
  — an UNSTYLED plain `<span>New</span>` appended directly after "Setting"
  with NO space and NO class (unlike the `.number` badge on the Inbox row),
  so the source renders **"SettingNew"** as one run of text (confirmed in
  BOTH the live browser render and the TEMPLATES.md screenshot). The
  recreation SHALL render the two adjacent text nodes exactly as the
  reference does ("Setting" + "New" with no intervening space or styling) —
  do NOT "fix" it into a styled badge or add a space; the glitch is
  documented here and belongs in the PR description.
- **SOURCE DANGLING ARIA BUG (documented, do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  bug as Notifly/Fount/Lilac/Docket). The recreation SHALL pair trigger and
  menu properly via `aria-controls`/id instead.
- **Visual design (from live DOM + CSS tokens + screenshot + live browser
  geometry):** minimalist component-showcase page. Body background =
  **`#efefef`** (light gray — the slim `style.css` DOES set
  `background: #efefef` on `body`, unlike Notifly's white). `.content`
  wrapper padding **7rem 0**. Heading: `h2.my-5.text-center` "Dropdown #8"
  — custom `h2 { font-size: 20px }` override (NOT Bootstrap's 2rem),
  Roboto, near-black `#212529` (inherited Bootstrap body color), `my-5` =
  3rem top AND bottom margin. Below it a centered demo row
  (`row.justify-content-center.text-center` → `col-md-5`, the narrow
  ~41.7%-on-md+ column) holding `div.dropdown.custom-dropdown`:
  - **Trigger** = an `<a href="#" data-toggle="dropdown" class="d-flex
align-items-center dropdown-link text-left" aria-haspopup="true"
aria-expanded="false" data-offset="0, 20">` (a LINK-triggered dropdown;
    `data-offset="0, 20"` = popper offsets the menu 20px below the trigger)
    containing:
    - `div.profile-pic.mr-3` — `flex: 0 0 50px`; `<img>` `width: 50px;
border-radius: 50%` (a 50px ROUND avatar; source image
      `images/person_2.jpg` — a bearded man in a red/white checkered
      shirt in the live preview).
    - `div.profile-info` — `<h3>Kevin Thomas</h3>` (**16px**, Roboto;
      h3 default bold) + `<span>New York City, USA</span>` (**13px**,
      `display: block` — the two lines stack: name over location).
    - `.dropdown-link` styling: `color: #000` (from
      `.custom-dropdown > a { color: #000 }`), `display: flex` (BS4
      `d-flex`), `align-items: center`; **NO background, NO border** (a
      plain dark text link). **NO arrow element in the markup** — the
      stylesheet HAS a `.custom-dropdown.show > a .arrow { transform:
rotate(-180deg) }` rule but it targets an `.arrow` element the demo
      NEVER renders, so the trigger is visually IDENTICAL when the menu is
      open or closed.
  - **Menu** = `div.dropdown-menu` (with a dangling
    `aria-labelledby="dropdownMenuButton"` — do NOT reproduce the
    association): white bg `#fff`, `border: 1px solid transparent`
    (overrides BS4's `rgba(0,0,0,.15)`), **`border-radius: 0`** (square
    corners — NOT BS4's .25rem), shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
    `right: auto !important; left: auto !important` (no forced anchoring —
    popper.js positions it under the centered trigger via `data-offset`,
    so the card opens BELOW the trigger, roughly centered in the demo
    column), `margin-top: -10px !important`, `padding-top: 0;
padding-bottom: 0` (BS4's `.5rem 0` → left/right `.5rem` remains),
    `width: auto` (BS4 min-width 10rem; content-sized). ANIMATED open:
    base `opacity: 0; visibility: hidden` → `.active`: `opacity: 1;
visibility: visible; margin-top: 0px !important`, transition `.3s
margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px**
    slide-down — the -10px → 0 margin-top shift; `.active` added by main.js
    100 ms after `show.bs.dropdown`). **LIVE GEOMETRY (browser-verified):**
    a white rounded-less card directly under the trigger with a soft
    diffuse shadow, roughly the trigger's width, five rows with faint
    dividers.
  - **Items** = five `<a class="dropdown-item" href="#">` rows
    (`position: relative`), in reading order:
    1. **User Dashboard** — `span.icon.icon-dashboard` (grid/dashboard
       glyph → lucide `LayoutDashboard`)
    2. **Inbox** — `span.icon.icon-mail_outline` (envelope → lucide
       `Mail`) + `<span class="number">3</span>` — the ORANGE count badge:
       **`background: #fd7e14`**, white **11px** text, `padding: 2px 6px`,
       **`border-radius: 4px`**, absolutely positioned **`right: 15px;
top: 50%; transform: translateY(-50%)`** (vertically centered at the
       row's right edge). Live DOM value = **"3"** (the TEMPLATES.md
       screenshot shows "1" — demo-content variance between hosts; the
       live DOM is authoritative: 3).
    3. **Following** — `span.icon.icon-people` (two-person group → lucide
       `Users`)
    4. **Setting** + unstyled `<span>New</span>` — `span.icon.icon-cog`
       (gear → lucide `Settings`); the "New" span has NO class → renders
       as plain gray text directly appended to "Setting" (**"SettingNew"**
       glitch — see above).
    5. **Log out** — `span.icon.icon-sign-out` (exit arrow → lucide
       `LogOut`)
    - Item styling: `font-size: 14px`, `padding: 15px 15px`, `color:
#b2bac1` (light gray — NOT the BS4 default), `border-bottom: 1px
solid rgba(0,0,0,0.1)` (FAINT DIVIDERS between rows; last row
      `border-bottom: none`); icon `margin-right: 15px`, inline-block.
      **Hover/active/focus:** `background: #fff; color: #000` (text turns
      black on hover; the `.number` badge text stays white).
  - **No footer/other sections** — the demo is exactly: heading + one
    dropdown. (The monorepo footer is a mandatory addition per
    conventions.md.)
  - **Unused CSS (do NOT reproduce functionally):** `.custom-dropdown > a
.arrow` + `.show > a .arrow` rotate rules (the trigger has no arrow
    element), `.custom-dropdown .btn:active/:focus` (box-shadow/outline
    reset) and `.btn.btn-custom` (border `#efefef`) rules for a button
    variant the demo never uses (the trigger is a link). Note in PR only.
  - **No mobile-specific CSS** in this slim stylesheet (like
    Privy/Lilac/Docket/Fount/Notifly; unlike Onboard/Glimpse/Inquire):
    there are NO media queries. The dropdown stays centered under the
    trigger at all viewports; the `col-md-5` simply becomes full-width.
    Reproduce the source behavior (no responsive handling).
- **Icons:** exactly FIVE `icon-*` glyphs in the demo markup, one per menu
  row: dashboard, mail_outline, people, cog, sign-out → lucide
  `LayoutDashboard`, `Mail`, `Users`, `Settings`, `LogOut`. The Inbox
  count badge is a pure CSS chip (NOT an icon). No chevron on the trigger,
  no carousel (owl assets loaded but unused).
- **Images:** ONE avatar photo — `images/person_2.jpg` (a male portrait;
  round-cropped to 50px by CSS). Recreation SHALL use a picsum placeholder
  avatar, e.g. `https://picsum.photos/seed/<seed>/100/100` rendered at
  50px round (2x for retina). Seed-screening note: verified person-photo
  candidates from the pipeline's screening are picsum IDs 1027 (profile
  portrait, dark bg), 64 (golden-hour woman), 823 (woman with camera), 996
  (backlit woman); verify the chosen seed renders as a recognizable face
  (see the seed-screening method in the replication skill) before pinning
  it in the app. The name "Kevin Thomas" may be paraphrased to match the
  chosen portrait (content-kind latitude; note in PR).
- **Screenshot:** `dropdown-18.jpg` (1200×972, viewed in browser) —
  light-gray page, centered heading "Dropdown #8", below it the trigger
  (50px round avatar of a man in a suit + bold dark "Kevin Thomas" +
  smaller lighter-gray "New York City, USA") and the menu OPEN beneath it:
  a white card with a soft diffuse shadow, five rows (User Dashboard /
  Inbox with a small bright-orange rounded badge "1" / Following /
  "SettingsNew" / Log out), each with a gray icon on the left and faint
  dividers between rows. Matches DOM + CSS + live preview exactly (only
  the badge number differs: screenshot "1" vs live DOM "3" — see above).
  URL bar in the screenshot shows `preview.codyfol.io` (an OLDER preview
  host; the CURRENT live preview is
  `https://preview.colorlib.com/theme/bootstrap/dropdown-18/`).

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Source                                         |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Page background | **`#efefef`** (light gray — the slim `style.css` DOES set it on `body`, unlike Notifly's white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `body` rule + screenshot                       |
| Heading         | "Dropdown #8" (SOURCE BUG — see above; reproduce as-is, NOT "#18"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem top + bottom margin                                                                                                                                                                                                                                                                                                                                                           | `h2` override + `.my-5`                        |
| Section rhythm  | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `.content`                                     |
| Trigger link    | `.dropdown-link` — `color: #000`, flex row with `align-items: center` (BS4 `d-flex`), `text-align: left`; **NO background, NO border** (a plain dark text link); **NO visible open-state change** (the stylesheet's `.show > a .arrow` rotate rule targets an arrow element the markup NEVER renders)                                                                                                                                                                                                                                                                                                    | `.custom-dropdown > a` rules                   |
| Avatar          | `.profile-pic` — `flex: 0 0 50px`; `<img>` `width: 50px; border-radius: 50%` (50px ROUND avatar), `mr-3` = 1rem right margin                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `.custom-dropdown .dropdown-link .profile-pic` |
| Profile info    | `.profile-info` — `<h3>` "Kevin Thomas": **16px** Roboto, bold (h3 default 700), no margins; `<span>` "New York City, USA": **13px**, `display: block` (stacks below the name), no margins; both `#212529`-ish inherited dark                                                                                                                                                                                                                                                                                                                                                                            | `.profile-info` rules                          |
| Menu panel      | `dropdown-menu` — white `#fff` bg, `border: 1px solid transparent`, **`border-radius: 0`** (SQUARE corners, not BS4 .25rem), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, `right/left: auto !important` (popper positions under the centered trigger; `data-offset="0, 20"` = 20px below), `margin-top: -10px !important`, `padding-top/bottom: 0` (BS4 `.5rem` left/right remains); ANIMATED: `opacity: 0; visibility: hidden` → `.active`: `opacity: 1; visibility: visible; margin-top: 0 !important`, transition `.3s margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px** slide-down) | `.custom-dropdown .dropdown-menu` rules        |
| Menu items      | `a.dropdown-item` — **14px**, `padding: 15px 15px`, `color: #b2bac1` (light gray), `position: relative`, **`border-bottom: 1px solid rgba(0,0,0,0.1)`** (faint dividers; last row none); icon `margin-right: 15px`, inline-block; **hover/active/focus: `background: #fff; color: #000`** (black text on white)                                                                                                                                                                                                                                                                                          | `.custom-dropdown .dropdown-menu a` rules      |
| Count badge     | `.number` — **`background: #fd7e14`** (orange), white **11px** text, `padding: 2px 6px`, **`border-radius: 4px`**, absolute **`right: 15px; top: 50%; transform: translateY(-50%)`** (vertically centered at the row's right edge); content "3" (live DOM; screenshot shows "1")                                                                                                                                                                                                                                                                                                                         | `.custom-dropdown .dropdown-menu a .number`    |
| Font family     | Roboto (300/400/700 available; body `font-weight: 300`), stack `"Roboto", -apple-system, …, sans-serif`; body text default `#212529`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `body` rule + cf-fonts @font-face block        |
| Icons           | FIVE glyphs total, one per row: `icon-dashboard` → lucide `LayoutDashboard`, `icon-mail_outline` → `Mail`, `icon-people` → `Users`, `icon-cog` → `Settings`, `icon-sign-out` → `LogOut`; the Inbox count is a pure CSS chip; no chevron, no carousel (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                                      | preview HTML + icomoon css                     |
| Images          | ONE avatar photo (`person_2.jpg` — male portrait), round-cropped to **50px** by CSS; recreation uses a picsum seeded avatar (see "Images" note above)                                                                                                                                                                                                                                                                                                                                                                                                                                                    | preview HTML + CSS                             |
| Mobile behavior | NONE — no media queries in the slim stylesheet (like Privy/Lilac/Docket/Fount/Notifly); dropdown stays centered under the trigger at all viewports, no restyling on narrow screens (the `col-md-5` simply becomes full-width)                                                                                                                                                                                                                                                                                                                                                                            | `style.css` (no media queries)                 |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Identity app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Identity — User Account Dropdown"

### Requirement: Page background and section heading

The system SHALL render the light-gray page background and the centered
heading at the top of the section, matching the reference text exactly
(including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** the page background SHALL be light gray `#efefef`
- **AND** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #8" (the source page renders "Dropdown #8", NOT "Dropdown #18"
  — a documented ColorLib copy-paste bug; reproduce the reference exactly
  and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, with 3rem top AND bottom margins (Bootstrap `my-5`
  equivalent)

### Requirement: Trigger control

The system SHALL render the centered user-profile trigger with the round
avatar, name and location, and full dropdown semantics.

#### Scenario: Trigger renders with avatar and profile info

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible as a flex row
  (`align-items: center`, left-aligned text) showing:
  - a **50px round avatar image** (lucide-free: an `<img>` with
    `border-radius: 50%`; picsum seed, never a ColorLib asset) on the left
    with a 1rem right margin
  - the name **"Kevin Thomas"** in **16px** bold Roboto
  - the location **"New York City, USA"** directly below the name in
    **13px** regular weight
- **AND** the trigger SHALL have the reference styling: dark `#000` text,
  NO background and NO border
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the account menu on trigger click, close it on
outside click, Escape, or trigger re-click, and keep only one menu open at
a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open directly below the trigger (the reference
  offsets it 20px below via `data-offset="0, 20"`; white card, SQUARE
  corners `border-radius: 0`, shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
  transparent border, content-sized width with BS4 min-width 10rem)
- **AND** the menu SHALL animate in with a fade + **10px** slide-down
  (opacity 0→1 and margin-top -10px→0, ~0.3s ease — the reference's
  `.active` transition)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Trigger open-state styling

The system SHALL keep the trigger visually IDENTICAL when the menu is open —
this variant has no visible open-state treatment (the stylesheet's `.show`
rule only rotates an `.arrow` element the markup never renders).

#### Scenario: Trigger unchanged while open

- **GIVEN** the dropdown menu is open
- **THEN** the trigger SHALL keep its default look — dark `#000` avatar
  row with NO background, border, or color change
- **WHEN** the menu closes
- **THEN** the trigger SHALL remain visually unchanged

### Requirement: Menu items

The system SHALL render the five menu rows in the reference order with the
reference labels, icons, dividers, hover treatment, and the orange Inbox
count badge.

#### Scenario: Item content and order

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show exactly five rows, in reading order:
  1. **User Dashboard** — lucide `LayoutDashboard` icon
  2. **Inbox** — lucide `Mail` icon + an **orange `#fd7e14` count badge**
     reading **"3"** (white 11px text, `padding: 2px 6px`,
     `border-radius: 4px`, vertically centered at the row's right edge —
     `right: 15px; top: 50%`)
  3. **Following** — lucide `Users` icon
  4. **Setting** + plain appended **"New"** — lucide `Settings` icon; the
     "New" span SHALL be unstyled inline text directly after "Setting"
     with NO space and NO badge styling (the source renders "SettingNew" —
     a documented glitch, reproduced faithfully)
  5. **Log out** — lucide `LogOut` icon
- **AND** each row SHALL be a focusable, keyboard-activatable element
  (the source items are `<a href="#">` links) with **14px** text, **15px
  padding**, light-gray **`#b2bac1`** text, icon with 15px right margin,
  and a **faint `rgba(0,0,0,0.1)` bottom divider** between rows (none
  after the last row)

#### Scenario: Item hover treatment

- **GIVEN** a menu row is rendered
- **WHEN** the user hovers, focuses or activates a row
- **THEN** the row's background SHALL become white `#fff` and its text
  SHALL turn black `#000` (the Inbox badge text stays white)

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
- **AND** every menu row SHALL be reachable by keyboard and activated with
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
- **THEN** the menu SHALL keep the reference behavior: no special
  mobile CSS (unlike Onboard/Glimpse/Inquire) — the card is NOT restyled
  for small screens and stays centered under the trigger (matches the
  source, which has zero media queries in its slim stylesheet)

## Verification checklist

- [ ] `npm run verify:app identity` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #8" (the SOURCE'S numbering bug —
      reproduce as-is, do NOT "fix" to "Dropdown #18"; 20px Roboto,
      near-black `#212529`, centered, `my-5`/3rem top+bottom margins) on a
      light-gray `#efefef` page background
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: **50px round avatar** (picsum seed, `border-radius:
    50%`, 1rem right margin) + **"Kevin Thomas"** (16px bold) +
      **"New York City, USA"** (13px, stacked below); dark `#000` text,
      NO background/border; NO change when open
- [ ] Menu opens directly below the trigger (white card, SQUARE corners
      `border-radius: 0`, shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
      transparent border) with the fade + **10px** slide-down animation
      (margin-top -10px→0)
- [ ] Five rows in order with icons: User Dashboard (`LayoutDashboard`) /
      Inbox (`Mail`) + orange `#fd7e14` badge "3" (11px white text,
      padding 2px 6px, radius 4px, vertically centered right) / Following
      (`Users`) / Setting + plain "New" (`Settings` — renders "SettingNew",
      source glitch reproduced) / Log out (`LogOut`)
- [ ] Rows: 14px, 15px padding, `#b2bac1` text, icon 15px right margin,
      faint `rgba(0,0,0,0.1)` bottom dividers (none after last row);
      hover/focus → white bg + black text
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — like Privy/Lilac/Docket/Fount/Notifly; the card is not
      restyled on narrow viewports)
- [ ] No carousel (owl assets loaded but unused in the source); exactly
      FIVE icon glyphs (lucide LayoutDashboard/Mail/Users/Settings/LogOut);
      the Inbox count is a pure CSS chip; no chevron on the trigger
- [ ] Avatar image is a picsum seed (never a ColorLib asset), round 50px;
      seed verified to render as a face (seed-screening method)
- [ ] Roboto (300/400) via Google Fonts `<link>` in `index.html`; body
      `font-weight: 300`
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/identity` (provenance lives only here + TEMPLATES.md +
      PR)

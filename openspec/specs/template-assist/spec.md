# Template: Assist (Help & Feedback Menu)

## Purpose

Assist is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 20" demo design
(source: https://colorlib.com/wp/template/dropdown-20/), built under a
DIFFERENT name (**Assist** — the demo is a help/support menu: a bare "Menu"
trigger opening a white card with two labeled sections, "Help & Feedback"
(Getting started / Help center + an orange count badge / Contact us) and
"About" (Blog / Privacy / Security / Terms of service), separated by a hairline
divider; a single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-16), per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The page showcases a link-triggered help menu dropdown: a
centered "Menu" trigger (black text + keyboard-chevron) that opens a
**square-cornered** white card **~175px wide** positioned **70px left of and
20px below** the trigger (popper `data-offset="-70, 20"`), holding two
uppercase-gray section headings with a hairline `hr` divider and seven icon
rows — a minimal, functional component-showcase page on a light-gray
background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 20" — the LAST demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 773). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy**, Dropdown 12 as
  **Lilac**, Dropdown 13 as **Docket**, Dropdown 14 as **Fount**,
  Dropdown 15 as **Notifly**, Dropdown 16 as **Sitemap**, Dropdown 17 as
  **Console**, Dropdown 18 as **Identity**, Dropdown 19 as **Curricula**
  (see `docs/templates/menubar/` … `docs/templates/curricula/`). This prep:
  Dropdown 20 → **Assist**.
- **Preview DOM analyzed (LIVE, fetched via curl AND verified in a
  browser):** `https://preview.colorlib.com/theme/bootstrap/dropdown-20/`
  (HTTP 200, 21,800 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-20/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets:
  `fonts/icomoon/style.css` (icon font — the markup consumes exactly EIGHT
  glyphs: `icon-dashboard`, `icon-mail_outline`, `icon-people`,
  `icon-comment`, `icon-lock_outline`, `icon-security`,
  `icon-featured_play_list` and the trigger chevron
  `icon-keyboard_arrow_down`), `css/owl.carousel.min.css` (LOADED but
  UNUSED — no carousel in this demo), `css/bootstrap.min.css` (Bootstrap 4
  base), and `css/style.css` — a SLIM ~137-line / 3,487-byte template
  stylesheet (the same slim builder as dropdown-11/12/13/14/15/18/19 —
  Privy/Lilac/Docket/Fount/Notifly/Identity/Curricula; NOT the 222 KB ftco
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
  page's `<title>` AND `<h2>` read **"Dropdown #8"** (NOT "Dropdown #20"),
  and the TEMPLATES.md screenshot (`dropdown-20.jpg`) shows the same text
  — the page was cloned from the Dropdown 08 demo and the heading was never
  renumbered (the SAME bug as Identity's "Dropdown #8" — both were cloned
  from the #8 page; also like Notifly's "Dropdown #5", Lilac's "Dropdown
  #2", Docket's "Dropdown #3", Fount's "Dropdown #4" and Curricula's
  "Dropdown #9"). The recreation SHALL render the heading text exactly as
  the reference renders it — **"Dropdown #8"** — because fidelity mandates
  the original (DOM + screenshot both agree). Do NOT silently "fix" it to
  "Dropdown #20"; the numbering discrepancy is documented here and belongs
  in the PR description. (The monorepo document-title convention uses the
  NEW name instead, e.g. "Assist — Help & Feedback Menu".)
- **SOURCE DANGLING ARIA BUG (documented, do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (the
  same bug as Identity/Curricula/Notifly/Fount/Lilac/Docket). The
  recreation SHALL pair trigger and menu properly via
  `aria-controls`/id instead.
- **SOURCE DEAD CLASS (documented, do NOT reproduce):** the trigger anchor
  carries `class="align-items-center dropdown-link"` — `align-items-center`
  with NO `d-flex` is a no-op in BS4 (live `display: inline` confirmed).
  Reproduce the VISUAL result (inline black link) without the dead class.
- **Visual design (from live DOM + CSS tokens + screenshot + live browser
  geometry):** minimalist component-showcase page. Body background =
  **`#efefef`** (LIGHT GRAY — the slim `style.css` DOES set it, like
  Identity; NOT white like Curricula). `.content` wrapper padding **7rem 0**
  (live 112px 0). TWO separate `.container` divs: (1) heading container
  with `h2.my-5.text-center` "Dropdown #8" — custom `h2 { font-size: 20px }`
  override (NOT Bootstrap's 2rem), Roboto, near-black `#212529` (inherited
  Bootstrap body color), `my-5` = 3rem (live 48px) top AND bottom margin;
  (2) demo container with `row.justify-content-center.text-center` →
  `col-md-5` (the narrow ~41.7%-on-md+ column) holding
  `div.dropdown.custom-dropdown`:
  - **Trigger** = `<a href="#" data-toggle="dropdown"
class="align-items-center dropdown-link" aria-haspopup="true"
aria-expanded="false" data-offset="-70, 20">` — a LINK-triggered
    dropdown (no avatar, no `d-flex`; SIMPLER than Identity's trigger)
    containing: text node **"Menu"** + `<span
class="arrow icon-keyboard_arrow_down"></span>` — the
    keyboard-style chevron (→ lucide `ChevronDown`), `.arrow` class
    (inline-block, relative, `.3s transform ease` transition). Trigger
    styling: **`color: #000`** (BLACK — via `.custom-dropdown > a`;
    live rgb(0,0,0)), `display: inline` (live), NO background, NO border.
    - **OPEN-STATE CHANGE (visible — the arrow IS rendered):**
      `.custom-dropdown.show > a .arrow { transform: rotate(-180deg) }`
      flips the chevron (live computed matrix(-1,0,0,-1) = 180°). The
      trigger TEXT stays black when open — there is NO `.show > a`
      color rule in this stylesheet (unlike Curricula's gray→black
      change; here it is black→black, only the chevron rotates).
  - **Menu** = `div.dropdown-menu` (with a dangling
    `aria-labelledby="dropdownMenuButton"` — do NOT reproduce the
    association): white bg `#fff` (explicit), `border: 1px solid
transparent !important`, **`border-radius: 0`** (SQUARE corners —
    overrides BS4's .25rem; same as Identity, NOT Curricula's 4px),
    shadow `0 15px 30px 0 rgba(0,0,0,.2)`, `margin-top: -10px
!important` (the slide animation offset), **`padding: 20px 0`**
    (top/bottom 20px, NO left/right — overrides BS4's `.5rem 0`;
    items carry their own 20px horizontal padding), `min-width: 160px`
    (BS4's 10rem default), **width AUTO — live 174.6px** (content-sized;
    the item text is single-line). Positioned by popper.js with
    `data-offset="-70, 20"`: menu LEFT edge = trigger left − **70px**
    (live: trigger x=610.2, menu x=540.5 = 610.2−70+0.3 — exact), menu
    TOP ≈ trigger bottom + **20px** (the offset's y; live flipped
    upward only because the headless viewport was 577px tall and
    popper clamped it into view — on a normal-height desktop viewport
    it sits 20px below the trigger, matching the screenshot). The menu
    ends up roughly centered under the trigger (live: menu center 12px
    LEFT of trigger center). ANIMATED open: base `opacity: 0;
visibility: hidden; margin-top: -10px !important` → `.active`:
    `opacity: 1; visibility: visible; margin-top: 0 !important`,
    transition `.3s margin-top ease, .3s opacity ease, .3s visibility
ease` (fade + **10px slide-DOWN** — margin-top −10px→0; `.active`
    added by main.js 100 ms after `show.bs.dropdown`). **LIVE GEOMETRY
    (browser-verified):** a white SQUARE card, 174.6×368.6px, 70px left
    of / 20px below the trigger, soft diffuse shadow, hairline divider
    inside, orange badge at `right: 15px` of its row.
  - **Section headings** = TWO `<h3 class="menu-heading">` elements,
    **"Help & Feedback"** then **"About"**: `font-size: 14px`,
    `color: #b3b3b3` (light gray), `padding: 0 20px` (matches item
    horizontal padding). Between them a **hairline divider** `<hr>`:
    `height: 1px; border: 0; border-top: 1px solid #e9ecef; margin:
.5em 0; padding: 0` (the ONLY divider in the menu).
  - **Items** = SEVEN `<a class="dropdown-item">` rows
    (`position: relative`), in order:
    1. **Getting started** — `icon-dashboard` → lucide `LayoutDashboard`
    2. **Help center** — `icon-mail_outline` → lucide `Mail` + `.number`
       badge: **`#fd7e14`** orange, white **11px** text, padding **2px
       6px**, radius **4px**, `position: absolute; top: 50%;
translateY(-50%); right: 15px`; value **"3"** (live DOM —
       screenshot agrees, see below)
    3. **Contact us** — `icon-people` → lucide `Users`
    4. **Blog** — `icon-comment` → lucide `MessageCircle`
    5. **Privacy** — `icon-lock_outline` → lucide `Lock`
    6. **Security** — `icon-security` → lucide `ShieldCheck`
    7. **Terms of service** — `icon-featured_play_list` → lucide
       `ListVideo`
       Item CSS (`.custom-dropdown .dropdown-menu a`): **14px**,
       `padding: 8px 20px`, `color: #000` (BLACK — unlike Identity's
       `#b2bac1`), `position: relative`; row icon `.icon` =
       `margin-right: 15px; display: inline-block`; **hover/active/focus:
       `background: #f8f9fa; color: #000`** (light-gray row highlight —
       text stays black). **NO row dividers** — the stylesheet's
       `a:last-child { border-bottom: none }` rule is DEAD CSS (no
       `border-bottom` is ever applied to items here, unlike Identity's
       faint `rgba(0,0,0,.1)` dividers); the only divider is the `<hr>`
       between sections.
  - **No footer/other sections** — the demo is exactly: heading + one
    help-menu dropdown. (The monorepo footer is a mandatory addition per
    conventions.md.)
  - **Unused CSS in the shared slim stylesheet (do NOT reproduce
    functionally):** `p { color: #b3b3b3 }` (no `<p>` in this demo),
    `.custom-dropdown { border: none !important }` (BS4 `.dropdown` has
    no border anyway), `.custom-dropdown .btn:active/:focus`
    (box-shadow/outline reset), `.btn.btn-custom` (border `#efefef` —
    a button variant the demo never uses; the trigger is a link),
    `.custom-dropdown .dropdown-menu a:last-child { border-bottom:
none }` (dead — see above). Note in PR only.
  - **No mobile-specific CSS** in this slim stylesheet (like
    Privy/Lilac/Docket/Fount/Notifly/Identity/Curricula): there are NO
    media queries. The menu keeps its fixed offset position at ALL
    viewports; `col-md-5` becomes full-width below md. Reproduce as-is.
- **Icons:** exactly EIGHT `icon-*` glyphs in the demo markup — SEVEN
  row icons (lucide: LayoutDashboard, Mail, Users, MessageCircle, Lock,
  ShieldCheck, ListVideo) + the trigger chevron (lucide `ChevronDown`).
  The Help-center count is a pure CSS chip (not an icon). No carousel
  (owl assets loaded but unused).
- **Images:** NONE — the demo uses no images at all (no avatars, no
  photos, no backgrounds — SIMPLER than Identity's avatar trigger). The
  recreation needs no picsum assets.
- **Screenshot:** `dropdown-20.jpg` (1200×972, viewed in browser) —
  light-gray page, centered heading "Dropdown #8", below it the trigger
  (black "Menu" with a downward chevron right, no border; the browser
  focus outline is visible around it — the anchor was focused when
  captured) with the menu OPEN beneath: a white card with a soft diffuse
  shadow, two sections — "HELP & FEEDBACK" (gray, small): Getting started
  / Help center with a small ORANGE badge (digit verified as **"3"** by
  zoomed inspection) / Contact us — then a faint divider, then "ABOUT":
  Blog / Privacy / Security / Terms of service. Black text, dark-gray
  minimalist icons, no row dividers. Matches DOM + CSS + live preview
  exactly (badge "3" in screenshot == "3" in live DOM — NO variance,
  unlike Identity's screenshot "1" vs DOM "3"). URL bar in the screenshot
  shows `ui-preview.colorlib.com` (an OLDER preview host; the CURRENT
  live preview is
  `https://preview.colorlib.com/theme/bootstrap/dropdown-20/`).

## Design tokens (from the reference)

| Token            | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Source                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Page background  | **`#efefef`** (LIGHT GRAY — the slim `style.css` DOES set it, like Identity; NOT Curricula's white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `body { background: #efefef }`              |
| Heading          | "Dropdown #8" (SOURCE BUG — see above; reproduce as-is, NOT "#20"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem (48px, live) top + bottom margin, weight 500 (live)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `h2` override + `.my-5`                     |
| Section rhythm   | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block; live 112px 0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `.content`                                  |
| Trigger link     | `.dropdown-link` — **`color: #000`** (BLACK via `.custom-dropdown > a`; live rgb(0,0,0)), `display: inline` (live — the `align-items-center` class is a dead no-op without `d-flex`), **NO background, NO border**; **OPEN STATE: text stays black, ONLY the chevron rotates −180°** (`.custom-dropdown.show > a .arrow { transform: rotate(-180deg) }` — live matrix(-1,0,0,-1); the arrow element IS rendered here, unlike Identity)                                                                                                                                                                                                                                                                                                                                                                                                       | `.custom-dropdown > a` + `.show > a .arrow` |
| Trigger content  | Text **"Menu"** + `icon-keyboard_arrow_down` (→ lucide `ChevronDown`) as the `.arrow` chevron (`display: inline-block`, `.3s transform ease` transition)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | preview HTML + icomoon css                  |
| Menu panel       | `dropdown-menu` — white `#fff` bg (explicit), `border: 1px solid transparent`, **`border-radius: 0`** (SQUARE — overrides BS4 .25rem; same as Identity, NOT Curricula's 4px), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, `margin-top: -10px !important` (animation offset), **`padding: 20px 0`** (top/bottom only; items carry their own 20px horizontal padding), `min-width: 160px` (BS4 10rem), width AUTO (live **174.6px**); positioned via `data-offset="-70, 20"`: **left edge 70px LEFT of the trigger's left edge, top ≈ trigger bottom + 20px** (menu center ends up ~12px left of trigger center); ANIMATED: `opacity: 0; visibility: hidden; margin-top: -10px` → `.active`: `opacity: 1; visibility: visible; margin-top: 0`, transition `.3s margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px slide-DOWN**) | `.custom-dropdown .dropdown-menu` rules     |
| Section headings | `h3.menu-heading` — **14px**, **`#b3b3b3`** (light gray), `padding: 0 20px`; TWO of them: "Help & Feedback", "About"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `.menu-heading` rules                       |
| Section divider  | `<hr>` — `height: 1px; border: 0; border-top: 1px solid #e9ecef; margin: .5em 0; padding: 0` (the ONLY divider in the menu; NO row dividers)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `.custom-dropdown hr` rules                 |
| Menu rows        | `a.dropdown-item` — **14px**, `padding: 8px 20px`, **`color: #000`** (BLACK — unlike Identity's `#b2bac1`), `position: relative`, no underline; **hover/active/focus: `background: #f8f9fa`** (light-gray row highlight, text stays `#000`); row icon: `margin-right: 15px; display: inline-block`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `.custom-dropdown .dropdown-menu a` rules   |
| Badge            | `.number` — **`#fd7e14`** orange bg, white **11px** text, `padding: 2px 6px`, `border-radius: 4px`, `position: absolute; top: 50%; translateY(-50%); right: 15px`; value **"3"** (live DOM == screenshot, zoomed-verified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `.number` rules                             |
| Font family      | Roboto (300/400/700 available; body `font-weight: 300`), stack `"Roboto", -apple-system, …, sans-serif`; body text default `#212529`; row text `#000`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `body` rule + cf-fonts @font-face block     |
| Icons            | EIGHT glyphs total: SEVEN row icons (lucide `LayoutDashboard`, `Mail`, `Users`, `MessageCircle`, `Lock`, `ShieldCheck`, `ListVideo`) + trigger chevron (lucide `ChevronDown`); no other icons, no carousel (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | preview HTML + icomoon css                  |
| Images           | NONE — the demo uses no images (no avatar, no photos, no backgrounds — simpler than Identity); recreation needs no picsum assets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | preview HTML                                |
| Mobile behavior  | NONE — no media queries in the slim stylesheet (like Privy/Lilac/Docket/Fount/Notifly/Identity/Curricula); the menu keeps its fixed 70px-left/20px-below offset at all viewports and `col-md-5` becomes full-width below md (reproduce; no responsive handling)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `style.css` (no media queries)              |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Assist app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Assist — Help & Feedback Menu"

### Requirement: Page background and section heading

The system SHALL render the light-gray page background and the centered
heading at the top of the section, matching the reference text exactly
(including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** the page background SHALL be light gray `#efefef`
- **AND** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #8" (the source page renders "Dropdown #8", NOT "Dropdown #20"
  — a documented ColorLib copy-paste bug, the SAME bug as Identity; reproduce
  the reference exactly and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, weight 500, with 3rem (48px) top AND bottom margins
  (Bootstrap `my-5` equivalent)

### Requirement: Trigger control

The system SHALL render the centered "Menu" trigger with the label and the
chevron, with full dropdown semantics and the reference open-state styling.

#### Scenario: Trigger renders with label and chevron

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible as an inline link showing,
  left to right:
  - the label **"Menu"**
  - a **chevron-down icon** (lucide `ChevronDown`, the `.arrow` element)
- **AND** the trigger SHALL have the reference styling: **black `#000`
  text**, NO background and NO border
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the menu on trigger click, close it on outside click,
Escape, or trigger re-click, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open positioned **70px LEFT of the trigger's left
  edge and ~20px below the trigger's bottom** (the source's
  `data-offset="-70, 20"`; the menu ends up roughly centered under the
  trigger — live: menu center ~12px left of trigger center)
- **AND** the menu SHALL be a white card with **SQUARE corners**
  (`border-radius: 0`), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, transparent
  border, `padding: 20px 0` (top/bottom only), `min-width: 160px`, width
  auto (~175px content-sized)
- **AND** the menu SHALL animate in with a fade + **10px slide-DOWN**
  (opacity 0→1 and margin-top −10px→0, ~0.3s ease — the reference's
  `.active` transition)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Trigger open-state styling

The system SHALL apply the reference open-state treatment: the trigger text
stays black and the chevron rotates −180° while the menu is open (the arrow
element IS rendered in this variant, so the rotate rule is live; there is NO
`.show > a` color rule — unlike Curricula, the trigger does NOT change
color).

#### Scenario: Trigger changes while open

- **GIVEN** the dropdown menu is open
- **THEN** the trigger's text SHALL remain black `#000` (no color change —
  the source stylesheet has no open-state color rule)
- **AND** the chevron SHALL rotate −180° (the reference's
  `.show > a .arrow { transform: rotate(-180deg) }`, ~0.3s ease)
- **WHEN** the menu closes
- **THEN** the chevron SHALL return to 0°

### Requirement: Menu content structure

The system SHALL render the two-section menu in the reference order with the
reference section headings, the hairline divider, and the seven icon rows.

#### Scenario: Section headings and divider

- **GIVEN** the menu is open
- **THEN** the menu SHALL show, top to bottom:
  1. a section heading **"Help & Feedback"**
  2. three rows (Getting started / Help center / Contact us)
  3. a **hairline divider** (`1px`, `#e9ecef`, `margin: .5em 0` — the ONLY
     divider in the menu; there are NO row dividers)
  4. a section heading **"About"**
  5. four rows (Blog / Privacy / Security / Terms of service)
- **AND** each section heading SHALL be **14px**, light gray **`#b3b3b3`**,
  with 20px left AND right padding

#### Scenario: Menu rows

- **GIVEN** the two sections are rendered
- **THEN** the Help & Feedback section SHALL list exactly three rows, in
  order, each a focusable, keyboard-activatable link with **14px** black
  `#000` text and `padding: 8px 20px`:
  1. **Getting started** with a dashboard icon (lucide `LayoutDashboard`)
  2. **Help center** with a mail icon (lucide `Mail`) AND an orange
     **`#fd7e14`** badge reading **"3"** (11px white text, padding 2px 6px,
     radius 4px, vertically centered at the row's right edge, 15px inset)
  3. **Contact us** with a people icon (lucide `Users`)
- **AND** the About section SHALL list exactly four rows, in order: 4. **Blog** with a comment icon (lucide `MessageCircle`) 5. **Privacy** with a lock icon (lucide `Lock`) 6. **Security** with a shield icon (lucide `ShieldCheck`) 7. **Terms of service** with a play-list icon (lucide `ListVideo`)
- **AND** every row's icon SHALL have a 15px right margin and be
  inline-block
- **AND** there SHALL be NO dividers between rows (only the single `<hr>`
  between the sections)

#### Scenario: Row hover treatment

- **GIVEN** a menu row is rendered
- **WHEN** the user hovers, focuses or activates a row
- **THEN** the row SHALL get a light-gray background **`#f8f9fa`** (text
  stays black `#000`)

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
- **THEN** the menu SHALL keep the reference behavior: no special mobile
  CSS (like Identity/Curricula) — the menu keeps its fixed 70px-left/20px
  below offset position at all viewports, and the `col-md-5` column becomes
  full-width below the md breakpoint (matches the source, which has zero
  media queries in its slim stylesheet)

## Verification checklist

- [ ] `npm run verify:app assist` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #8" (the SOURCE'S numbering bug — the
      same bug as Identity; reproduce as-is, do NOT "fix" to "Dropdown
      #20"; 20px Roboto, near-black `#212529`, weight 500, centered,
      `my-5`/3rem top+bottom margins) on a LIGHT-GRAY `#efefef` page
      background
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: "Menu" + lucide `ChevronDown` arrow; BLACK `#000`
      text, NO background/border; when open → text STAYS black and the
      chevron rotates −180° (~0.3s ease)
- [ ] Menu opens 70px left of / ~20px below the trigger (white card,
      `border-radius: 0` SQUARE, shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
      transparent border, `padding: 20px 0`, min-width 160px, width auto
      ~175px) with the fade + **10px slide-DOWN** animation (margin-top
      −10px→0)
- [ ] Two section headings — "Help & Feedback" then "About" — 14px light
      gray `#b3b3b3`, padding 0 20px; ONE hairline `<hr>` divider
      (`#e9ecef`, margin .5em 0) between them; NO row dividers
- [ ] Seven rows with the live text EXACTLY: Getting started (lucide
      `LayoutDashboard`) / Help center (lucide `Mail` + orange `#fd7e14`
      badge "3" — 11px white text, padding 2px 6px, radius 4px, vertically
      centered right, 15px inset) / Contact us (lucide `Users`) / Blog
      (lucide `MessageCircle`) / Privacy (lucide `Lock`) / Security (lucide
      `ShieldCheck`) / Terms of service (lucide `ListVideo`); 14px, black
      `#000`, weight 400, padding 8px 20px, icon 15px right margin;
      hover/focus → background `#f8f9fa` (text stays black)
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — like Identity/Curricula; the menu keeps its offset position
      at all viewports; `col-md-5` becomes full-width below md)
- [ ] No carousel (owl assets loaded but unused in the source); exactly
      EIGHT icon glyphs (lucide: LayoutDashboard, Mail, Users,
      MessageCircle, Lock, ShieldCheck, ListVideo + ChevronDown); NO images
      at all in the demo (no avatar — unlike Identity)
- [ ] Roboto (300/400) via Google Fonts `<link>` in `index.html`; body
      `font-weight: 300`
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/assist` (provenance lives only here + TEMPLATES.md +
      PR)

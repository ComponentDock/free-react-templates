# Template: Notifly (Notifications Bell Dropdown)

## Purpose

Notifly is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 15" demo design
(source: https://colorlib.com/wp/template/dropdown-15/), built under a
DIFFERENT name (**Notifly** — "notifications" + the friendly "-ly" suffix
matching the family convention: Wingly, Drivly, Nestly, Bookly, Coastly,
Restly, Sleeply, Dozely, Soarly, Lodgely, Sneakly, Taply; single lowercase
word, no collision with `apps/`, `openspec/specs/` or `docs/templates/` —
verified 2026-08-15), per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
link-triggered notification-bell dropdown: a plain gray bell icon with a
blue circular count badge (number 5) at its top-right corner that opens a
right-edge-positioned white card ("Notifications" header + "Mark all as
read" link, a 200px scrollable list of five avatar notification rows — the
first two tinted pale cream as unread — and a centered "View All" link),
with a fade + 10px slide-down animation — a minimal, functional
component-showcase page on a white background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 15" — fifteenth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 768). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy**, Dropdown 12 as
  **Lilac**, Dropdown 13 as **Docket**, Dropdown 14 as **Fount** (see
  `docs/templates/menubar/` … `docs/templates/fount/`). This prep:
  Dropdown 15 → **Notifly**.
- **Preview DOM analyzed (LIVE, fetched via curl AND verified in a
  browser):** `https://preview.colorlib.com/theme/bootstrap/dropdown-15/`
  (HTTP 200, 24,151 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-15/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets:
  `fonts/icomoon/style.css` (icon font — the markup consumes exactly ONE
  glyph, `\e7f4` `icon-notifications`, via the trigger's `.wrap-icon`
  span), `css/owl.carousel.min.css` (LOADED but UNUSED — no carousel in
  this demo), `css/bootstrap.min.css` (Bootstrap 4 base), and
  `css/style.css` — a SLIM ~130-line / 3,305-byte template stylesheet
  (same slim builder as dropdown-11/12/13/14 — Privy/Lilac/Docket/Fount;
  NOT the 222 KB ftco stylesheet that dropdown-09/10 load). Libs: jquery,
  popper, bootstrap.min.js, owl.carousel.min.js (unused), `js/main.js` —
  which only adds `.active` to `.dropdown-menu` 100 ms after
  `show.bs.dropdown` fires and removes it on `hide.bs.dropdown` (drives
  the fade/slide animation; Bootstrap handles all open/close logic —
  identical to Privy/Lilac/Docket/Fount's main.js). Google Fonts loaded
  via inline cf-fonts `@font-face` blocks: **Roboto** (300/400), Poppins
  (300/400/500), Source Serif Pro (400/600) — but ONLY **Roboto** is used
  by the demo markup and `style.css`. For the recreation, load Roboto
  (300/400) via a Google Fonts `<link>` per conventions.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live
  page's `<title>` AND `<h2>` read **"Dropdown #5"** (NOT "Dropdown #15"),
  and the TEMPLATES.md screenshot (`dropdown-15.jpg`) shows the same text
  — the page was cloned from the Dropdown 05 demo and the heading was
  never renumbered (the same copy-paste bug as Lilac's "Dropdown #2",
  Docket's "Dropdown #3" and Fount's "Dropdown #4"). The recreation SHALL
  render the heading text exactly as the reference renders it —
  **"Dropdown #5"** — because fidelity mandates the original (DOM +
  screenshot both agree). Do NOT silently "fix" it to "Dropdown #15"; the
  numbering discrepancy is documented here and belongs in the PR
  description. (The monorepo document-title convention uses the NEW name
  instead, e.g. "Notifly — Notifications Dropdown".)
- **SOURCE DANGLING ARIA BUG (documented, do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  bug as Fount/Lilac/Docket). The recreation SHALL pair trigger and menu
  properly via `aria-controls`/id instead.
- **SOURCE COMMENTED-OUT LEFTOVER (do NOT reproduce):** the HTML contains
  a commented-out block with Dropdown 14's four source-picker items (All
  Rources / Dropbox / Google Drive / Eventbrite) — a leftover from
  cloning the previous demo. It is commented out in the source, renders
  nothing, and SHALL NOT be reproduced.
- **Visual design (from live DOM + CSS tokens + screenshot + live browser
  geometry):** minimalist component-showcase page. Body background =
  **WHITE** (the slim `style.css` sets NO `background-color` on body —
  the default white, same as Privy/Lilac/Docket/Fount). `.content` wrapper
  padding **7rem 0**. Heading: `h2.my-5.text-center` "Dropdown #5" —
  custom `h2 { font-size: 20px }` override (NOT Bootstrap's 2rem),
  Roboto, near-black `#212529` (inherited Bootstrap body color), `my-5` =
  3rem top AND bottom margin. Below it a centered demo row
  (`row.justify-content-center.text-center` → `col-md-5`, the narrow
  ~41.7%-on-md+ column) holding `div.dropdown.custom-dropdown`:
  - **Trigger** = an `<a href="#" data-toggle="dropdown" class="dropdown-
link" aria-haspopup="true" aria-expanded="false">` (a LINK-triggered
    dropdown like Fount/Docket; not a button) containing:
    - `<span class="wrap-icon icon-notifications"></span>` — the bell
      glyph, `font-size: 30px`, inherits the link's gray `#888` color.
      (icomoon `\e7f4` = Material "notifications" → lucide `Bell`.)
    - `<span class="number">5</span>` — the count badge: **24×24px
      circle** (`width/height: 24px; border-radius: 50%; line-height:
20px`), background **`#007bff`** (Bootstrap blue), **2px solid
      `#fff` border**, white 13px text, `text-align: center`, absolutely
      positioned **`top: -10px; right: -10px`** (sits at the bell's
      top-right corner, slightly overlapping outside it).
    - `.dropdown-link` styling: `color: #888`, `display: inline-block`,
      **`padding-right: 0px`** (NOT 40px — unlike Fount; the badge needs
      no reserved space because it is positioned with negative offsets),
      `position: relative`, font-size INHERITED (16px — Bootstrap 4 body
      default). **NO background and NO border** (a plain gray link).
      **NO open-state flip:** this stylesheet has NO
      `.custom-dropdown.show` rule at all (like Fount/Privy/Lilac/Docket)
      — the trigger looks IDENTICAL when the menu is open or closed.
  - **Menu** = `div.dropdown-menu.dropdown-menu-right` (NOTE the
    `-right` class — but see geometry below): white bg (Bootstrap
    default), `border: 1px solid transparent` (overrides BS4's
    `rgba(0,0,0,.15)`), **`max-width: 380px`** (the panel is capped at
    380px wide), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **`left: 0
!important`** (LEFT-anchored to the demo column — the `!important`
    beats BS4's `.dropdown-menu-right { left: auto; right: 0 }`, so the
    panel's LEFT edge aligns with the column's left edge while `right:
0` remains and simply caps the width at the column), `margin-top: 0
!important`, `padding: 10px` (the shorthand comes AFTER
    `padding-top: 0; padding-bottom: 0` in the file and overrides them —
    effective padding is 10px all around). ANIMATED open: base state
    `opacity: 0; visibility: hidden`, `.active` → `opacity: 1;
visibility: visible; margin-top: 10px !important`, transition `.3s
margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px**
    slide-down — NOT Fount's 20px; `.active` added by main.js 100 ms
    after `show.bs.dropdown`). **LIVE GEOMETRY (browser-verified):**
    panel renders 380px wide; the centered bell trigger floats over the
    panel's RIGHT portion (the panel's left edge sits at the column's
    left edge, the bell at the column's center) — matches the screenshot.
  - **Header** = `div.title-wrap.d-flex.align-items-center` (padding
    `10px 0`):
    - `h3.title.mb-0` "Notifications" — **12px, font-weight 700,
      `text-transform: uppercase`** (renders "NOTIFICATIONS"), color
      `#212529` (inherited). NOTE for tests: jsdom does NOT apply
      `text-transform` to accessible names — query the RAW text
      "Notifications", not "NOTIFICATIONS".
    - `a.small.ml-auto` "Mark all as read" — Bootstrap `.small` (80%
      size), pushed right by `ml-auto`, default Bootstrap link blue
      **`#007bff`**.
  - **List** = `ul.custom-notifications`:
    - `list-style: none; padding: 0; margin: 0; height: 200px;
overflow-y: scroll` (a SCROLLABLE 200px-tall list — the five items
      exceed 200px, so a scrollbar appears), **`border-bottom: 1px solid
#efefef`** (divider above the "View All" row).
    - Five `<li>` items (`font-size: 14px; margin-bottom: 10px`; last
      child `margin-bottom: 0`), in reading order — items 1 and 2 carry
      class **`unread`**:
      1. `li.unread` — **Claudia Gideon** "marked the task done a day ago"
         (avatar `person_1.jpg`)
      2. `li.unread` — **Alex Stafford** "marked the task done a day ago"
         (avatar `person_2.jpg`)
      3. `li` — **Devin Richards** "mentioned you in her comment on
         Invoices 2 days ago" (avatar `person_3.jpg`)
      4. `li` — **Alex Stafford** "marked the task done a day ago"
         (avatar `person_2.jpg`)
      5. `li` — **Devin Richards** "mentioned you in her comment on
         Invoices 2 days ago" (avatar `person_3.jpg`)
    - Item link: `a.d-flex` — `display: block; padding: 20px; color:
#bfbfbf` (light gray body text); **hover: `background: #f9f9f9`**.
    - Avatar: `div.img.mr-3` — `flex: 0 0 40px`; `<img>` `width: 40px;
border-radius: 50%` (a 40px ROUND avatar).
    - Text: `div.text` — the person's name in `<strong>` (`font-weight:
700; color: #000` — bold black), the rest of the message in the
      link's `#bfbfbf`.
    - **`li.unread a { background: #fffaef }`** — the first two rows have
      a pale cream/ivory tint (confirmed live: `rgb(255, 250, 239)`),
      while read rows are transparent.
  - **Footer** = `p.text-center.m-0.p-0` → `a.small` "View All" —
    centered, Bootstrap link blue **`#007bff`**.
  - **Unused CSS (do NOT reproduce as functional elements):** the
    stylesheet also has `.custom-dropdown .btn:active/:focus`
    (box-shadow/outline reset) and `.btn.btn-custom` (border
    `#efefef`) rules for a BUTTON variant the demo never uses (the
    trigger is a link). Note them in the PR description only.
  - **No mobile-specific CSS** in this slim stylesheet (like
    Privy/Lilac/Docket/Fount; unlike Onboard/Glimpse/Inquire): there are
    NO media queries. The panel stays left-anchored at all viewports;
    the `col-md-5` simply becomes full-width. Reproduce the source
    behavior (no responsive handling).
- **Icons:** exactly ONE `icon-*` glyph in the demo markup — the trigger's
  `wrap-icon` bell (`\e7f4` `icon-notifications` → lucide `Bell`). No
  other icons (no chevron, no dots). The count badge is a pure CSS circle.
  No carousel (owl assets loaded but unused).
- **Images:** three small avatar photos — `images/person_1.jpg`,
  `person_2.jpg`, `person_3.jpg` (round-cropped to 40px by CSS; the
  source reuses person_2 twice and person_3 twice). Recreation SHALL use
  picsum placeholder avatars, e.g. `https://picsum.photos/seed/<seed>/80/80`
  rendered at 40px round (2x for retina). Seed-screening note: verified
  person-photo candidates from the pipeline's screening are picsum IDs
  1027 (profile portrait, dark bg), 64 (golden-hour woman), 823 (woman
  with camera), 996 (backlit woman); verify the chosen seeds render as
  recognizable faces (see the seed-screening method in the replication
  skill) before pinning them in the app. Names may be paraphrased to
  match available portraits (content-kind latitude; note in PR).
- **Screenshot:** `dropdown-15.jpg` (1200×972, viewed in browser) —
  white page, centered heading "Dropdown #5", below it the bell icon
  (dark-gray outline) with a small blue circular badge (white number) at
  its top-right corner, menu OPEN beneath it: a white card with a soft
  diffuse shadow, "NOTIFICATIONS" small-uppercase header on the left with
  a blue "Mark all as read" on the right, five rows each with a round
  avatar and bold black name + light-gray message text (first two rows
  with a faint cream tint), a centered blue "View All" link at the bottom.
  The bell sits above the RIGHT portion of the open panel (matching the
  live geometry). Matches DOM + CSS + live preview exactly. URL bar in
  the screenshot shows `preview.codrops.com` (an OLDER preview host; the
  CURRENT live preview is
  `https://preview.colorlib.com/theme/bootstrap/dropdown-15/`).

## Design tokens (from the reference)

| Token             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Source                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Page background   | WHITE (no `background-color` set in the slim `style.css` — default white; same as Privy/Lilac/Docket/Fount; screenshot reads white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `body` (no rule) + screenshot             |
| Heading           | "Dropdown #5" (SOURCE BUG — see above; reproduce as-is, NOT "#15"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem top + bottom margin                                                                                                                                                                                                                                                                                                                                                                                                  | `h2` override + `.my-5`                   |
| Section rhythm    | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `.content`                                |
| Trigger link      | `.dropdown-link` — `color: #888`, `display: inline-block`, **`padding-right: 0px`** (NO reserved space — unlike Fount's 40px; the badge hangs off the corner via negative offsets), `position: relative`; font-size INHERITED (16px — Bootstrap 4 body default); **NO background, NO border** (a plain gray link); **NO open-state change** (no `.show` rule in this stylesheet)                                                                                                                                                                                                                                                                | `.custom-dropdown .dropdown-link` rules   |
| Bell icon         | `.wrap-icon` — icomoon glyph `\e7f4` `icon-notifications` (Material bell → lucide `Bell`), `font-size: 30px`, inherits `#888`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `style.css` + icomoon css                 |
| Count badge       | `.number` — **24×24px circle** (`border-radius: 50%`, `line-height: 20px`), background **`#007bff`**, **2px solid `#fff` border**, white **13px** text, `text-align: center`, absolute **`top: -10px; right: -10px`** (bell's top-right corner, overlapping outside); content "5"                                                                                                                                                                                                                                                                                                                                                               | `.custom-dropdown .dropdown-link .number` |
| Menu panel        | `dropdown-menu.dropdown-menu-right` — white bg, `border: 1px solid transparent`, **`max-width: 380px`** (panel capped at 380px), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **`left: 0 !important`** (LEFT-anchored to the column — beats BS4's `-right` class left:auto; `right: 0` remains and caps width), `margin-top: 0 !important`, **`padding: 10px`** (shorthand overrides the earlier padding-top/bottom: 0); ANIMATED: `opacity: 0; visibility: hidden` → `.active`: `opacity: 1; visibility: visible; margin-top: 10px !important`, transition `.3s margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px** slide-down) | `.custom-dropdown .dropdown-menu` rules   |
| Header row        | `.title-wrap` — `d-flex align-items-center`, `padding: 10px 0`. `h3.title.mb-0` "Notifications" — **12px, weight 700, `text-transform: uppercase`** (renders "NOTIFICATIONS"), `#212529`. `a.small.ml-auto` "Mark all as read" — `.small` (80%), right-aligned, link blue **`#007bff`**                                                                                                                                                                                                                                                                                                                                                         | `.title-wrap`/`.title` rules + BS4        |
| Notification list | `ul.custom-notifications` — `list-style: none`, no padding/margin, **`height: 200px; overflow-y: scroll`** (scrollable; 5 items exceed 200px → scrollbar), `border-bottom: 1px solid #efefef`; items `font-size: 14px; margin-bottom: 10px` (last: 0)                                                                                                                                                                                                                                                                                                                                                                                           | `.custom-notifications` rules             |
| Item rows         | `li > a` — `display: block; padding: 20px; color: #bfbfbf`; **hover: `background: #f9f9f9`**. Avatar `div.img` `flex: 0 0 40px` + `<img>` `width: 40px; border-radius: 50%` (round). `.text strong` — `font-weight: 700; color: #000` (bold black name); message text inherits `#bfbfbf`. **`li.unread a { background: #fffaef }`** (pale cream — first two rows); read rows transparent                                                                                                                                                                                                                                                        | `.custom-notifications > li` rules        |
| View All footer   | `p.text-center.m-0.p-0` → `a.small` "View All" — centered, link blue **`#007bff`**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | BS4 utilities + markup                    |
| Font family       | Roboto (300/400 available; page also loads Poppins + Source Serif Pro but they are UNUSED here), stack `"Roboto", -apple-system, …, sans-serif`; body text default `#212529`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `body` rule + cf-fonts @font-face block   |
| Icons             | ONE glyph total — the trigger's `wrap-icon` bell (`\e7f4` → lucide `Bell`); the count badge is a pure CSS circle; **no other `icon-*` classes, no carousel** (owl assets loaded but unused), no chevron                                                                                                                                                                                                                                                                                                                                                                                                                                         | preview HTML + icomoon css                |
| Images            | three avatar photos (`person_1/2/3.jpg`), round-cropped to **40px** by CSS; person_2 and person_3 are each reused twice; recreation uses picsum seeded avatars (see "Images" note above)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | preview HTML + CSS                        |
| Mobile behavior   | NONE — no media queries in the slim stylesheet (like Privy/Lilac/Docket/Fount); panel stays LEFT-anchored at all viewports, no restyling on narrow screens (the `col-md-5` simply becomes full-width)                                                                                                                                                                                                                                                                                                                                                                                                                                           | `style.css` (no media queries)            |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Notifly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Notifly — Notifications Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
matching the reference text exactly (including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #5" (the source page renders "Dropdown #5", NOT "Dropdown #15"
  — a documented ColorLib copy-paste bug; reproduce the reference exactly
  and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, with 3rem top AND bottom margins (Bootstrap `my-5`
  equivalent)

### Requirement: Trigger control

The system SHALL render the centered notification-bell trigger with the blue
count badge and full dropdown semantics.

#### Scenario: Trigger renders with bell and badge

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible showing a **bell icon**
  (lucide `Bell`) at 30px in gray `#888`
- **AND** a **24×24px blue `#007bff` circular badge** SHALL sit at the
  bell's top-right corner, slightly overlapping outside it (absolute
  `top: -10px; right: -10px`), with a **2px solid white border**, white
  13px text reading **"5"**, vertically centered (line-height 20px)
- **AND** the trigger SHALL have the reference styling: gray `#888` text,
  inline-block, `padding-right: 0`, **NO background and NO border** (a
  plain gray link)
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the notification card on trigger click, close it on
outside click, Escape, or trigger re-click, and keep only one menu open at
a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, LEFT-anchored to the demo column (the
  reference forces `left: 0 !important`; white card, **max-width 380px**,
  radius `.25rem` (Bootstrap base), shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
  transparent border, 10px padding)
- **AND** the menu SHALL animate in with a fade + **10px** slide-down
  (opacity 0→1 and margin-top 0→10px, ~0.3s ease — the reference's
  `.active` transition; NOT Fount's 20px)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Trigger open-state styling

The system SHALL keep the trigger visually IDENTICAL when the menu is open —
this variant has NO open-state treatment.

#### Scenario: Trigger unchanged while open

- **GIVEN** the dropdown menu is open
- **THEN** the trigger SHALL keep its default look — gray `#888` bell with
  the blue `#007bff` badge — with NO background, border, or color change
  (the reference stylesheet has no `.custom-dropdown.show` rule in this
  variant)
- **WHEN** the menu closes
- **THEN** the trigger SHALL remain visually unchanged

### Requirement: Menu header

The system SHALL render the notification-card header with the title and the
"Mark all as read" action link.

#### Scenario: Header content

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show a header row with the title "Notifications"
  on the left, rendered **12px, bold (700), uppercase** (the reference
  `text-transform: uppercase` renders it "NOTIFICATIONS" visually; tests
  SHALL query the raw text "Notifications" — jsdom does not apply
  `text-transform` to accessible names)
- **AND** a "Mark all as read" link SHALL sit on the RIGHT of the header
  (pushed by `ml-auto`), styled as Bootstrap `.small` (80% size) in link
  blue `#007bff`

### Requirement: Notification list

The system SHALL render the five notification rows in the reference order
with the reference names and messages, the unread tint on the first two
rows, round avatars, and the scrollable list container.

#### Scenario: Item content and order

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show a scrollable list (`height: 200px`,
  `overflow-y: scroll`) of exactly five rows, in reading order:
  1. **Claudia Gideon** — "marked the task done a day ago"
  2. **Alex Stafford** — "marked the task done a day ago"
  3. **Devin Richards** — "mentioned you in her comment on Invoices 2 days
     ago"
  4. **Alex Stafford** — "marked the task done a day ago"
  5. **Devin Richards** — "mentioned you in her comment on Invoices 2 days
     ago"
- **AND** each row SHALL show the person's name as a **bold black** (`#000`)
  `<strong>` element followed by the message in light-gray `#bfbfbf` text
- **AND** each row SHALL show a **40px round avatar image** on the left
  (`border-radius: 50%`; the source reuses the same photo for rows 2+4 and
  rows 3+5 — the recreation SHALL reuse the same seed per person)
- **AND** rows 1 and 2 SHALL carry the unread state: a pale cream
  **`#fffaef`** background (the reference `li.unread a` rule); the other
  rows SHALL have a transparent background

#### Scenario: Item styling and hover

- **GIVEN** a notification row is rendered
- **THEN** the row SHALL be 14px text with `margin-bottom: 10px` (last row
  none) and the link SHALL fill the row with **20px padding** and light-gray
  `#bfbfbf` text
- **WHEN** the user hovers a row
- **THEN** the row's background SHALL turn `#f9f9f9`
- **AND** the list SHALL have a `1px solid #efefef` bottom border (divider
  above the "View All" row)

### Requirement: View All footer

The system SHALL render the centered "View All" link below the list.

#### Scenario: View All link

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show a centered "View All" link below the
  notification list (Bootstrap `.small`, link blue `#007bff`, no extra
  margins)

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
- **AND** every notification row SHALL be an interactive element reachable
  by keyboard (the source items are `<a href="#">` links; the recreation
  may keep them as links with real targets or as buttons — but they SHALL
  be focusable and activated with Enter/Space)

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

- [ ] `npm run verify:app notifly` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #5" (the SOURCE'S numbering bug —
      reproduce as-is, do NOT "fix" to "Dropdown #15"; 20px Roboto,
      near-black `#212529`, centered, `my-5`/3rem top+bottom margins) on a
      WHITE page background (slim stylesheet sets no body bg)
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: **bell icon** (lucide `Bell`, 30px, gray `#888`) +
      **24×24px `#007bff` badge** reading "5" (2px white border, white 13px
      text, absolute `top:-10px; right:-10px` — hanging off the bell's
      top-right corner); `padding-right: 0`; NO background/border; NO
      change when open
- [ ] Menu opens LEFT-anchored to the demo column (white card, **max-width
      380px**, radius .25rem, shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
      transparent border, 10px padding) with the fade + **10px** slide-down
      animation (margin-top 0→10px)
- [ ] Header: "Notifications" title (12px, 700, uppercase — query raw text)
      left + "Mark all as read" (`.small`, `#007bff`) right
- [ ] Five rows in order: Claudia Gideon / Alex Stafford (both `unread`),
      Devin Richards, Alex Stafford, Devin Richards — names in bold black
      `#000` `<strong>`, messages in `#bfbfbf` ("marked the task done a day
      ago" / "mentioned you in her comment on Invoices 2 days ago"); 40px
      round avatars (same seed reused per person); rows 1–2 tinted
      **`#fffaef`**
- [ ] List container: `height: 200px`, `overflow-y: scroll`,
      `border-bottom: 1px solid #efefef`; rows 14px, `margin-bottom: 10px`,
      links `padding: 20px`, `color: #bfbfbf`; hover → `#f9f9f9`
- [ ] Centered "View All" link below the list (`#007bff`)
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced; the commented-out Dropdown 14 leftover rows are NOT
      reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — like Privy/Lilac/Docket/Fount; the panel is not restyled on
      narrow viewports)
- [ ] No carousel (owl assets loaded but unused in the source); exactly ONE
      icon glyph (the bell, lucide `Bell`); the count badge is a pure CSS
      circle; no chevron, no item dots (unlike Fount)
- [ ] Avatar images are picsum seeds (never ColorLib assets), round 40px;
      seeds verified to render as faces (seed-screening method)
- [ ] Roboto (300/400) via Google Fonts `<link>` in `index.html`;
      Poppins/Source Serif Pro are loaded by the source but UNUSED — do not
      load them
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/notifly` (provenance lives only here + TEMPLATES.md +
      PR)

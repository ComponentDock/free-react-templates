# Template: Sitemap (Mega Menu Dropdown)

## Purpose

Sitemap is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 16" demo design
(source: https://colorlib.com/wp/template/dropdown-16/), built under a
DIFFERENT name (**Sitemap** — the demo IS a sitemap-style mega-menu dropdown:
a "Dropdown" text trigger with a down-chevron opening a wide three-column
panel of category links with item counts plus a featured image card; single
lowercase word, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-16), per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The
page showcases a link-triggered mega-menu dropdown: a plain gray "Dropdown"
text link with a small down-chevron at its right that opens a white
**680px-wide panel centered under the trigger** ("mega menu"): three equal
columns — a featured card (image + "PSD Mockups" caption + "View All Here"
link) and two `list-unstyled` link lists of download categories with item
counts in parentheses (Code(5), Fonts(12), …) — with a fade + 10px slide-down
animation; while open, the trigger text turns black and the chevron rotates
180° (points up). A minimal, functional component-showcase page on a white
background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 16" — sixteenth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 769). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy**, Dropdown 12 as
  **Lilac**, Dropdown 13 as **Docket**, Dropdown 14 as **Fount**, Dropdown 15
  as **Notifly** (see `docs/templates/menubar/` … `docs/templates/notifly/`).
  This prep: Dropdown 16 → **Sitemap**.
- **Preview DOM analyzed (LIVE, fetched via curl AND verified in a
  browser):** `https://preview.colorlib.com/theme/bootstrap/dropdown-16/`
  (HTTP 200, 22,095 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-16/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets:
  `fonts/icomoon/style.css` (icon font — the markup consumes exactly ONE
  glyph, `\e313` `icon-keyboard_arrow_down`, the trigger chevron),
  `css/owl.carousel.min.css` (LOADED but UNUSED — no carousel in this demo),
  `css/bootstrap.min.css` (Bootstrap 4 base), and `css/style.css` — a SLIM
  ~120-line / 3,474-byte template stylesheet (same slim builder as
  dropdown-11/12/13/14/15 — Privy/Lilac/Docket/Fount/Notifly; NOT the 222 KB
  ftco stylesheet that dropdown-09/10 load). Libs: jquery, popper,
  bootstrap.min.js, owl.carousel.min.js (unused), `js/main.js` — which only
  adds `.active` to `.dropdown-menu` 100 ms after `show.bs.dropdown` fires
  and removes it on `hide.bs.dropdown` (drives the fade/slide animation;
  Bootstrap handles all open/close logic — identical to the siblings'
  main.js). Google Fonts loaded via inline cf-fonts `@font-face` blocks:
  **Roboto** (300/400), Poppins (300/400/500), Source Serif Pro (400/600) —
  but ONLY **Roboto** is used (verified: no `font-family` usage outside the
  `@font-face` blocks; body and all headings are Roboto). For the
  recreation, load Roboto (300/400) via a Google Fonts `<link>` per
  conventions — and note the body weight is **300 (light)**, the family
  default.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live
  page's `<title>` AND `<h2>` read **"Dropdown #6"** (NOT "Dropdown #16"),
  and the TEMPLATES.md screenshot (`dropdown-16.jpg`) shows the same text —
  the page was cloned from the Dropdown 06 demo and the heading was never
  renumbered (the same copy-paste bug as Lilac's "Dropdown #2", Docket's
  "Dropdown #3", Fount's "Dropdown #4" and Notifly's "Dropdown #5"). The
  recreation SHALL render the heading text exactly as the reference renders
  it — **"Dropdown #6"** — because fidelity mandates the original (DOM +
  screenshot both agree). Do NOT silently "fix" it to "Dropdown #16"; the
  numbering discrepancy is documented here and belongs in the PR description.
  (The monorepo document-title convention uses the NEW name instead, e.g.
  "Sitemap — Mega Menu Dropdown".)
- **SOURCE DANGLING ARIA BUG (documented, do NOT reproduce):** the menu's
  `aria-labelledby="dropdownMenuButton"` points at a NONEXISTENT id (same
  bug as Fount/Lilac/Docket/Notifly). The recreation SHALL pair trigger and
  menu properly via `aria-controls`/id instead.
- **Visual design (from live DOM + CSS tokens + screenshot + live browser
  geometry):** minimalist component-showcase page. Body background =
  **WHITE** (the slim `style.css` sets NO `background-color` on body — the
  default white, same as the series). Body font Roboto **weight 300**
  (`.content` wrapper padding **7rem 0**). Heading: `h2.my-5.text-center`
  "Dropdown #6" — custom `h2 { font-size: 20px }` override (NOT Bootstrap's
  2rem), Roboto, near-black `#212529` (inherited Bootstrap body color),
  `my-5` = 3rem top AND bottom margin. Below it a centered demo row
  (`row.justify-content-center.text-center` → `col-md-5`, the narrow
  ~41.7%-on-md+ column) holding `div.dropdown.custom-dropdown`:
  - **Trigger** = an `<a href="#" data-toggle="dropdown" class="dropdown-
link" aria-haspopup="true" aria-expanded="false">` (a LINK-triggered
    dropdown like Fount/Docket/Notifly; not a button) containing the text
    **"Dropdown"** followed by `<span class="icon-keyboard_arrow_down"></
span>` (the chevron glyph, icomoon `\e313` = Material
    "keyboard_arrow_down" → lucide `ChevronDown`; **16px inherited** font
    size — live-verified). `.dropdown-link` styling: `color: #888`,
    `display: inline-block`, **`padding-right: 0px`**, `position: relative`,
    font-size INHERITED (16px — Bootstrap 4 body default), **NO background
    and NO border** (a plain gray link — the light-blue ring visible in the
    screenshot around the trigger is the BROWSER focus outline on the just-
    clicked link, not part of the design). NOTE: this demo has **NO
    `.number` badge and NO `.wrap-icon` bell** (unlike Notifly) — the
    trigger is plain text + chevron.
  - **OPEN-STATE FLIP (present — unlike Notifly/Privy/Lilac/Docket/Fount):**
    `.custom-dropdown.show a { color: #000 }` — the trigger text turns
    **black** when the menu is open — and `.custom-dropdown.show a span {
transform: rotate(180deg) }` — the **chevron rotates 180°** (points UP
    when open; live-verified: chevron computed transform matrix(-1,0,0,-1,
    0,0) = 180°, color rgb(0,0,0), font-size 16px).
  - **Menu** = `div.dropdown-menu` (NO `-right` class this time): white bg
    (Bootstrap default), `border: 1px solid transparent` (overrides BS4's
    `rgba(0,0,0,.15)`), **`min-width: 680px`** (a WIDE mega panel — NOT
    Notifly's 380px max-width; live-verified rendered width exactly 680px),
    radius `.25rem`/4px (Bootstrap base — live-verified), shadow `0 15px
30px 0 rgba(0,0,0,.2)`, **`top: 100% !important; left: 50% !important;
transform: translate(-50%, 0) !important; right: auto !important`** —
    the panel is **CENTERED horizontally under the trigger** (live-verified:
    menu center-x == trigger center-x == 640px page center), `margin-top: 0
!important`, **`padding: 10px`** (the shorthand comes AFTER
    `padding-top: 0; padding-bottom: 0` in the file and overrides them —
    effective padding is 10px all around). ANIMATED open: base state
    `opacity: 0; visibility: hidden`, `.active` → `opacity: 1;
visibility: visible; margin-top: 10px !important`, transition `.3s
margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px**
    slide-down — same as Notifly; `.active` added by main.js 100 ms after
    `show.bs.dropdown`; live: menu class "dropdown-menu show active" with
    opacity 1, visibility visible, margin-top 10px when open).
  - **Mega menu content** = `div.mega-menu.d-flex` (padding **20px**,
    flex row) with exactly THREE children, each `width: 33.3333%;
padding-left: 10px; padding-right: 10px` (equal thirds of the 680px
    panel; the divs' `ul` children get `margin: 0; padding: 0`):
    1. **Featured column** — `<a href="#" class="d-block mb-1">` wrapping
       `<img src="images/hero_1.jpg" alt="Image" class="img-fluid mb-3">`
       (the ONLY image on the page; source file 1900×1150 landscape, renders
       at the column's ~206px width via `img-fluid` = max-width 100% — a
       placeholder SHALL replace it, see "Images" below), then
       `<p><a href="#">PSD Mockups</a><span class="text-muted">View All
Here</span></p>` — the caption link "PSD Mockups" (black `#000`,
       weight 400 — matches `.mega-menu a`), "View All Here" styled by
       Bootstrap `.text-muted` (**#6c757d**), the `<p>` itself `#b3b3b3`
       (the `p { color: #b3b3b3 }` rule) — so the caption reads black
       "PSD Mockups" + gray "View All Here".
    2. **Category column 1** — `ul.list-unstyled` with SIX links: **Code
       (5)**, **Fonts (12)**, **HTML Templates (81)**, **Mockups (9)**,
       **Logo (16)**, **PSD Mockups (22)** — count in parentheses is plain
       text inside the anchor (source markup has a trailing space after the
       closing paren: `"Code(5) </a>"` — normalize/trim in tests).
    3. **Category column 2** — `ul.list-unstyled` with SIX links:
       **Sketch App (32)**, **User Interface (61)**, **WordPress (73)**,
       **User Experience (88)**, **WebGL (19)**, **Mockups (93)**.
    - Link styling: `.mega-menu a` — `display: block; padding-top: 5px;
padding-bottom: 5px; text-decoration: none; color: #000; font-weight:
400`; **hover: `color: #e83e8c`** (Bootstrap 4 PINK — the demo's only
      accent color; live-verified on the open panel).
  - **Unused CSS (do NOT reproduce as functional elements):** the
    stylesheet retains `.custom-dropdown .wrap-icon { font-size: 30px }`
    (bell rule — this demo's chevron span is NOT `.wrap-icon`), the
    `.number` badge rules (24px `#007bff` circle — NOT used here; the
    trigger is text + chevron, no badge), the `.title-wrap` / `.title`
    rules (12px 700 uppercase header — the mega menu markup has NO
    title-wrap header row), and `.btn:active/:focus` reset + `.btn.btn-
custom` (border `#efefef`) for a button variant the demo never uses
    (the trigger is a link). Note them in the PR description only.
  - **No mobile-specific CSS** in this slim stylesheet (like the whole
    11–15 run): there are NO media queries (verified: 0 `@media` blocks).
    The 680px min-width mega panel simply overflows narrow viewports
    (Bootstrap's absolutely-positioned dropdown is not restyled) — reproduce
    the source behavior (no responsive handling).
- **Icons:** exactly ONE `icon-*` glyph in the demo markup — the trigger's
  chevron (`\e313` `icon-keyboard_arrow_down` → lucide `ChevronDown`,
  16px inherited). No bell, no badge, no other icons. No carousel (owl
  assets loaded but unused).
- **Images:** exactly ONE image — `images/hero_1.jpg` (1900×1150 landscape,
  `img-fluid` = full column width, `mb-3` = 1rem bottom margin, wrapped in a
  `d-block mb-1` link, `alt="Image"`). NOTE: the TEMPLATES.md screenshot
  shows a person holding a tablet, while the CURRENT live preview shows a
  book/leaflet design mockup — ColorLib swapped the asset; irrelevant since
  the recreation SHALL use a picsum placeholder, e.g.
  `https://picsum.photos/seed/<seed>/400/240` (landscape ~1.65:1 to match
  1900×1150, rendered at column width ~206px; 2x for retina). Seed-screening
  note: verify the chosen seed renders as a plausible design-mockup or
  person-with-device photo (see the seed-screening method in the
  replication skill) before pinning it in the app. (Also: the source `<img>`
  carries `fetchpriority="high" decoding="sync"` — builder noise from
  ColorLib's renderer, not needed in the recreation.)
- **Screenshot:** `dropdown-16.jpg` (1200×972, viewed in browser) — white
  page, centered heading "Dropdown #6", below it the trigger "Dropdown" +
  small down-chevron (a light-blue ring around it is the browser's focus
  outline on the just-clicked link), menu OPEN beneath it: a wide white
  panel with a soft diffuse shadow, three equal columns — left: a photo
  (person holding a tablet) with bold black "PSD Mockups" below and a
  smaller gray "View All Here" link beneath; middle: Code(5), Fonts(12),
  HTML Templates(81), Mockups(9), Logo(16), PSD Mockups(22); right: Sketch
  App(32), User Interface(61), WordPress(73), User Experience(88), WebGL(19),
  Mockups(93) — the category links in near-black text. Matches DOM + CSS +
  live preview exactly (the live preview's hero image differs — see above).

## Design tokens (from the reference)

| Token              | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Source                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Page background    | WHITE (no `background-color` set in the slim `style.css` — default white; same as the whole 11–15 series; screenshot reads white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `body` (no rule) + screenshot           |
| Body font          | Roboto (300/400 available), stack `"Roboto", -apple-system, …, sans-serif`, **font-weight: 300** (LIGHT — the family default); body text default `#212529` (Bootstrap 4); `p { color: #b3b3b3 }` (light gray paragraphs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `body` rule + cf-fonts @font-face block |
| Heading            | "Dropdown #6" (SOURCE BUG — see above; reproduce as-is, NOT "#16"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem top + bottom margin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `h2` override + `.my-5`                 |
| Section rhythm     | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `.content`                              |
| Trigger link       | `.dropdown-link` — `color: #888`, `display: inline-block`, **`padding-right: 0px`** (NO reserved space — the chevron sits inline right after the text), `position: relative`; font-size INHERITED (16px); **NO background, NO border** (a plain gray link); text **"Dropdown"**                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.custom-dropdown .dropdown-link` rules |
| Chevron icon       | `<span class="icon-keyboard_arrow_down">` — icomoon glyph `\e313` (Material "keyboard_arrow_down" → lucide `ChevronDown`), **16px inherited** (live-verified), inherits the link color (`#888` closed / `#000` open)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | preview HTML + icomoon css + live       |
| Trigger open state | `.custom-dropdown.show a { color: #000 }` — trigger text turns **black**; `.show a span { transform: rotate(180deg) }` — **chevron rotates 180°** (points UP; live-verified matrix(-1,0,0,-1,0,0)); transition `.3s transform ease` (`.custom-dropdown a span` base)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `style.css` `.show` rules               |
| Menu panel         | `div.dropdown-menu` — white bg, `border: 1px solid transparent`, **`min-width: 680px`** (WIDE mega panel; live-verified exactly 680px), radius `.25rem`/4px (BS4 base), shadow `0 15px 30px 0 rgba(0,0,0,.2)`, **CENTERED under the trigger**: `top: 100% !important; left: 50% !important; transform: translate(-50%, 0) !important; right: auto !important` (live: menu center-x == trigger center-x), `margin-top: 0 !important`, **`padding: 10px`** (shorthand overrides the earlier padding-top/bottom: 0); ANIMATED: `opacity: 0; visibility: hidden` → `.active`: `opacity: 1; visibility: visible; margin-top: 10px !important`, transition `.3s margin-top ease, .3s opacity ease, .3s visibility ease` (fade + **10px** slide-down) | `.custom-dropdown .dropdown-menu` rules |
| Mega menu layout   | `.mega-menu` — `display: flex`, **padding: 20px**; children `width: 33.3333%; padding-left/right: 10px` (three equal columns); `ul { margin: 0; padding: 0 }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `.mega-menu` rules                      |
| Category links     | `.mega-menu a` — `display: block; padding-top/bottom: 5px; text-decoration: none; color: #000; font-weight: 400`; **hover: `color: #e83e8c`** (Bootstrap 4 pink — the demo's ONLY accent color)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.mega-menu a` rules                    |
| Featured card      | Col 1: link (`d-block mb-1`) → `<img class="img-fluid mb-3">` (full column width; source hero_1.jpg 1900×1150 landscape, renders ~206px); then `<p>` (text `#b3b3b3`): caption link "PSD Mockups" (black `#000`/400) + `<span class="text-muted">View All Here</span>` (**#6c757d** gray)                                                                                                                                                                                                                                                                                                                                                                                                                                                      | preview HTML + BS4 utilities            |
| Category lists     | Col 2: Code(5), Fonts(12), HTML Templates(81), Mockups(9), Logo(16), PSD Mockups(22) · Col 3: Sketch App(32), User Interface(61), WordPress(73), User Experience(88), WebGL(19), Mockups(93) — counts in parentheses are plain text inside the anchor; source has a trailing space after each `)` (normalize/trim in tests)                                                                                                                                                                                                                                                                                                                                                                                                                    | preview HTML                            |
| Icons              | ONE glyph total — the trigger chevron (`\e313` → lucide `ChevronDown`); **NO bell, NO `.number` badge** (unlike Notifly — the badge rules exist in the CSS but are unused), no other `icon-*` classes, no carousel (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | preview HTML + icomoon css              |
| Images             | ONE image — `hero_1.jpg` (1900×1150 landscape), `img-fluid` + `mb-3`, inside a `d-block mb-1` link, `alt="Image"`; recreation uses a picsum seeded landscape placeholder (see "Images" note above)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | preview HTML + CSS                      |
| Mobile behavior    | NONE — no media queries in the slim stylesheet (verified: 0 `@media`); the 680px mega panel is NOT restyled for narrow viewports (Bootstrap's absolutely-positioned dropdown just overflows)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `style.css` (no media queries)          |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Sitemap app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Sitemap — Mega Menu Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
matching the reference text exactly (including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #6" (the source page renders "Dropdown #6", NOT "Dropdown #16"
  — a documented ColorLib copy-paste bug; reproduce the reference exactly
  and do NOT silently "fix" the number)
- **AND** the heading SHALL use the brand font (Roboto), near-black
  `#212529`, 20px, with 3rem top AND bottom margins (Bootstrap `my-5`
  equivalent)

### Requirement: Trigger control

The system SHALL render the centered "Dropdown" text trigger with the
down-chevron and full dropdown semantics. (This demo has NO count badge and
NO bell icon — unlike Notifly.)

#### Scenario: Trigger renders with text and chevron

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered trigger SHALL be visible showing the text
  **"Dropdown"** followed by a **down-chevron icon** (lucide `ChevronDown`,
  ~16px, inline) at its right
- **AND** the trigger SHALL have the reference styling: gray `#888` text,
  inline-block, `padding-right: 0`, **NO background and NO border** (a
  plain gray link)
- **AND** the trigger SHALL be a semantic control (the source uses
  `<a href="#">`; the recreation SHALL use a `<button>` per monorepo
  conventions, with identical visuals) exposing `aria-haspopup="menu"` and
  dynamic `aria-expanded` (menu closed → `false`)
- **AND** there SHALL be NO badge element (the source's `.number` CSS is
  unused in this demo) and NO bell icon

### Requirement: Dropdown menu behavior

The system SHALL open the mega panel on trigger click, close it on outside
click, Escape, or trigger re-click, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, **CENTERED horizontally under the trigger**
  (the reference forces `left: 50% !important` + `translate(-50%, 0)
!important`; white card, **min-width 680px**, radius 4px, shadow `0 15px
30px 0 rgba(0,0,0,.2)`, transparent border, 10px padding)
- **AND** the menu SHALL animate in with a fade + **10px** slide-down
  (opacity 0→1 and margin-top 0→10px, ~0.3s ease — the reference's
  `.active` transition)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Trigger open-state styling

The system SHALL flip the trigger when the menu opens — the reference has an
open-state treatment (unlike Notifly/Privy/Lilac/Docket/Fount).

#### Scenario: Trigger changes while open

- **GIVEN** the dropdown menu is open
- **THEN** the trigger text SHALL turn **black `#000`** (the reference
  `.custom-dropdown.show a { color: #000 }`)
- **AND** the chevron SHALL rotate **180°** (point UP; the reference
  `.show a span { transform: rotate(180deg) }`, transitioned over ~0.3s)
- **WHEN** the menu closes
- **THEN** the trigger text SHALL return to gray `#888` and the chevron
  SHALL point down again

### Requirement: Mega menu content

The system SHALL render the mega panel with three equal columns matching the
reference content and order.

#### Scenario: Three-column layout and featured card

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show a flex row (`mega-menu`, 20px padding) of
  exactly three columns, each one-third of the panel width (33.333% with
  10px side padding)
- **AND** the FIRST column SHALL show a featured card: a full-column-width
  landscape image (picsum placeholder — the source `hero_1.jpg` is
  1900×1150; rendered `img-fluid` with a 1rem bottom margin) wrapped in a
  link, with below it the caption link **"PSD Mockups"** (black `#000`,
  weight 400) and the gray **"View All Here"** span (Bootstrap
  `text-muted`, `#6c757d`)
- **AND** the SECOND column SHALL list exactly six links in order: **Code
  (5)**, **Fonts (12)**, **HTML Templates (81)**, **Mockups (9)**,
  **Logo (16)**, **PSD Mockups (22)**
- **AND** the THIRD column SHALL list exactly six links in order: **Sketch
  App (32)**, **User Interface (61)**, **WordPress (73)**, **User
  Experience (88)**, **WebGL (19)**, **Mockups (93)**
- **AND** the category counts in parentheses SHALL be plain text inside the
  link (the source has a trailing space after each `)` — tests SHALL match
  trimmed text)

#### Scenario: Category link styling and hover

- **GIVEN** a category link is rendered
- **THEN** the link SHALL be `display: block` with 5px top AND bottom
  padding, black `#000` text at weight 400, and no underline
- **WHEN** the user hovers a category link (or the "PSD Mockups" caption
  link)
- **THEN** its color SHALL turn **`#e83e8c`** (Bootstrap 4 pink — the
  reference `.mega-menu a:hover`)

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
- **AND** every menu link SHALL be an interactive element reachable by
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
- **THEN** the menu SHALL keep the reference behavior: no special mobile
  CSS (zero media queries in the source's slim stylesheet) — the 680px
  mega panel is NOT restyled for small screens and simply overflows the
  viewport like the original

## Verification checklist

- [ ] `npm run verify:app sitemap` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #6" (the SOURCE'S numbering bug —
      reproduce as-is, do NOT "fix" to "Dropdown #16"; 20px Roboto,
      near-black `#212529`, centered, `my-5`/3rem top+bottom margins) on a
      WHITE page background (slim stylesheet sets no body bg)
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: text **"Dropdown"** + **chevron** (lucide
      `ChevronDown`, 16px, gray `#888`); `padding-right: 0`; NO
      background/border; **NO badge and NO bell** (the `.number`/`.wrap-icon`
      CSS is unused in this demo)
- [ ] Menu opens **CENTERED under the trigger** (left:50% +
      translate(-50%,0)), white, **min-width 680px**, radius 4px, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border, 10px padding,
      fade + **10px** slide-down animation (margin-top 0→10px)
- [ ] Open-state flip: trigger text turns **black `#000`** and the chevron
      **rotates 180°** (points up); reverts on close
- [ ] Mega panel: flex row, 20px padding, three equal columns (33.333%,
      10px side padding)
- [ ] Col 1 featured card: full-width landscape picsum image (in a link,
      1rem bottom margin) + caption **"PSD Mockups"** (black/400) + gray
      **"View All Here"** (`text-muted` `#6c757d`)
- [ ] Col 2 links in order: Code(5), Fonts(12), HTML Templates(81),
      Mockups(9), Logo(16), PSD Mockups(22) — block, 5px top/bottom
      padding, `#000`/400, no underline
- [ ] Col 3 links in order: Sketch App(32), User Interface(61),
      WordPress(73), User Experience(88), WebGL(19), Mockups(93)
- [ ] Hover on any `.mega-menu` link → **`#e83e8c`** (pink); tests match
      trimmed link text (source has trailing spaces after the `)`)
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — the 680px panel is not restyled on narrow viewports, just
      like the original)
- [ ] No carousel (owl assets loaded but unused in the source); exactly ONE
      icon glyph (the chevron, lucide `ChevronDown`); the `.number` badge,
      `.wrap-icon`, `.title-wrap`/`.title` and `.btn.btn-custom` CSS rules
      are NOT reproduced as functional elements
- [ ] Hero image is a picsum seed (never a ColorLib asset), landscape
      ~1.65:1 (source hero_1.jpg is 1900×1150), seed verified to render
      plausibly (seed-screening method)
- [ ] Roboto (300/400) via Google Fonts `<link>` in `index.html`; body
      weight 300; Poppins/Source Serif Pro are loaded by the source but
      UNUSED — do not load them
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/sitemap` (provenance lives only here + TEMPLATES.md +
      PR)

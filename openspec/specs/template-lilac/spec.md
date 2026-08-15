# Template: Lilac (Two-Column Settings Dropdown)

## Purpose

Lilac is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 12" demo design
(source: https://colorlib.com/wp/template/dropdown-12/), built under a
DIFFERENT name (Lilac — evoking the lavender `#c3a1fa` icon color, the
demo's defining visual trait) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page
showcases a link-triggered WIDE two-column settings dropdown: a centered
gray "Privacy Settings" link with a gear icon that opens a large
**min-width 700px** white card CENTERED under it (flexbox 2×2 grid of
icon + title + blurb rows — Settings, Account, Settings, Notofication —
with lavender icons and light divider lines), with a fade + slide-down
animation — a minimal, functional component-showcase page on a white
background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 12" — twelfth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 765). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse**,
  Dropdown 10 as **Inquire**, Dropdown 11 as **Privy** (see
  `docs/templates/menubar/` … `docs/templates/privy/`). This prep:
  Dropdown 12 → **Lilac**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-12/`
  (HTTP 200, 18,060 bytes HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-12/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheets: `fonts/icomoon/
style.css` (icon font — `icon-cog` = FA `\f013` solid gear, `icon-person`
  = FA-style user glyph), `css/owl.carousel.min.css` (LOADED but UNUSED —
  no carousel in this demo), `css/bootstrap.min.css` (Bootstrap 4 base),
  and `css/style.css` — a SLIM 106-line / 2,646-byte template stylesheet
  (this series page does NOT use the 222 KB ftco stylesheet that
  dropdown-09/10 load — the dropdown demos were regenerated with a new
  builder; same builder as dropdown-11/Privy). Libs: jquery, popper,
  bootstrap.min.js, owl.carousel.min.js (unused), js/main.js — which only
  adds `.active` to `.dropdown-menu` 100 ms after `show.bs.dropdown` fires
  and removes it on `hide.bs.dropdown` (this drives the fade/slide
  animation; Bootstrap handles all open/close logic — identical to Privy's
  main.js). Google Fonts loaded via inline cf-fonts `@font-face` blocks:
  **Roboto** (300/400), Poppins (300/400/500), Source Serif Pro (400/600)
  — but ONLY **Roboto** is used by the demo markup and `style.css`
  (Poppins and Source Serif Pro are loaded but unused). For the
  recreation, load Roboto (300/400) via a Google Fonts `<link>` per
  conventions.
- **SOURCE HEADING BUG (documented, reproduce faithfully):** the live
  page's `<title>` AND `<h2>` read **"Dropdown #2"** (NOT "Dropdown
  #12"), and the TEMPLATES.md screenshot (`dropdown-12.jpg`) shows the
  same text — the page was cloned from the Dropdown 02 demo and the
  heading was never renumbered (confirmed in the Privy spec: "sibling
  page 12 shows 'Dropdown #2'"). The recreation SHALL render the heading
  text exactly as the reference renders it — **"Dropdown #2"** — because
  fidelity mandates the original (DOM + screenshot both agree). Do NOT
  silently "fix" it to "Dropdown #12"; the numbering discrepancy is
  documented here and belongs in the PR description. (The monorepo
  document-title convention uses the NEW name instead, e.g. "Lilac —
  Two-Column Settings Dropdown".)
- **SOURCE ITEM TYPO (documented, reproduce faithfully):** the fourth
  menu item reads **"Notofication"** (missing the second "i" —
  N-o-t-o-f-i-c-a-t-i-o-n) in both the live DOM and the screenshot. The
  recreation SHALL render the text exactly as the reference does —
  **"Notofication"** — do NOT "fix" it to "Notification".
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body background = **WHITE** (the slim
  `style.css` sets NO `background-color` on body — the default white, NOT
  the `#fafafa` that the older series pages used; the screenshot reads as
  off-white/very light gray). `.content` wrapper padding **7rem 0** (the
  whole demo block floats vertically centered). Heading: `h2.my-5.text-
center` "Dropdown #2" — custom `h2 { font-size: 20px }` override (NOT
  Bootstrap's 2rem), Roboto, centered, near-black `#212529` (inherited
  Bootstrap body color), `my-5` = 3rem top AND bottom margin. Below it a
  centered demo row (`row.justify-content-center.text-center` →
  `col-md-5`, the narrow ~41.7%-on-md+ column) holding `div.dropdown.
custom-dropdown`:
  - **Trigger** = an `<a href="#" data-toggle="dropdown" class="dropdown-
link" aria-haspopup="true" aria-expanded="false">` containing `<span
class="icon-cog mr-2"></span>Privacy Settings` — a LINK-triggered
    dropdown (NOT a button, like Privy/Inquire/Glimpse). `.dropdown-link`
    styles for THIS variant: `color: #888`, `font-size: 14px`, `display:
inline-block`, `padding: 4px 7px` — NOTE: **no border, no border-
    radius, no hover treatment** in this variant's stylesheet (the
    hover-border/shadow rules that Privy's dropdown-11 had are absent
    here). OPEN state (`.custom-dropdown.show .dropdown-link`) → **`color:
#000`** only (no background change, no inset shadow — simpler than
    Privy's pressed look). Icon: solid gear (FA `\f013`; lucide
    equivalent `Settings`/`Cog`), `mr-2` = 0.5rem gap before the label.
    (The `.custom-dropdown .btn` / `.btn.btn-custom` rules in style.css
    belong to the OTHER demos in the series and are UNUSED here.)
  - **Menu** = `div.dropdown-menu.d-flex` — FLEX two-column layout, white
    bg, `border: 1px solid transparent` (overrides BS4's
    `rgba(0,0,0,.15)`), radius `.25rem` (Bootstrap base), **`min-width:
700px`** (a WIDE card — NOT the 10rem of Privy), shadow `0 15px 30px 0
rgba(0,0,0,.2)`, and CENTERED under the trigger: `left: 50% !important`
    - `transform: translateX(-50%) !important` (the stylesheet also has a
      `left: 0 !important` earlier in the rule, but the LATER `left: 50%`
      declaration wins — the menu is horizontally centered on the trigger).
      ANIMATED open: base state `opacity: 0; visibility: hidden; margin-top:
40px`, `.active` → `opacity: 1; visibility: visible; margin-top: 50px`,
      transition `.3s all ease` (fade + 10px slide-down from 40px to 50px
      margin-top; the `.active` class is added by main.js 100 ms after
      `show.bs.dropdown`). No `padding` override on the menu itself — the
      columns carry the padding (`.half-col { width: 50%; padding: 20px }`).
  - **Items** = two `.half-col` columns, each with two full-width rows:
    `<a href="#" class="w-100 d-flex align-items-start">` containing
    `<div class="mr-3 wrap-icon"><span class="icon-cog|icon-person"></span>
    </div>` + `<div><h3>Title</h3><p>blurb</p></div>`. Reading order:
    1. **Settings** (icon-cog) — "Lorem ipsum dolor sit amet, consectetur
       adipisicing elit. Voluptatem soluta."
    2. **Account** (icon-person) — same blurb
    3. **Settings** (icon-cog) — same blurb (DUPLICATE title — source
       fidelity, keep both)
    4. **Notofication** (icon-person) — same blurb (SOURCE TYPO — keep)
    Row styling: `.half-col a` `display: block`, `border-bottom: 1px solid
    #efefef` (light divider under each row), `margin-bottom: 10px`;
    `:last-child` → no border, no margin. `.wrap-icon`: `font-size: 30px`,
    `line-height: 0`, span `color: #c3a1fa` (the LAVENDER brand accent).
    `h3`: `font-size: 16px`, `margin: 5px 0 10px 0`, `padding: 0`, `color:
    #000`, `letter-spacing: .05rem`. `p`: `font-size: 14px`, color
    `#b3b3b3`, `font-weight: 300` (the global `p` rule). (NOTE: the
    source menu's `aria-labelledby="dropdownMenuButton"` points at a
    NONEXISTENT id — a source bug; the recreation SHALL pair trigger and
    menu properly via `aria-controls`/id.)
  - **No mobile-specific CSS** in this slim stylesheet (like Privy; unlike
    Onboard/Glimpse/Inquire which center the menu under the button below
    768px): there are NO media queries. The `min-width: 700px` card simply
    overflows/scrolls on small viewports — reproduce the source behavior
    (no responsive handling); the `col-md-5` becomes full-width.
- **Section order (1:1, from live demo DOM):**
  1. `.content` wrapper (padding **7rem 0**).
  2. Heading container (`div.container`): `h2.my-5.text-center` "Dropdown
     #2" (20px Roboto, near-black `#212529`, centered, 3rem top/bottom
     margin).
  3. Demo container (`div.container` → `div.row.justify-content-center.text-
center` → `div.col-md-5`): `div.dropdown.custom-dropdown` containing
     the gear + "Privacy Settings" trigger link and the CENTERED
     `dropdown-menu.d-flex` with two `.half-col` × two icon+title+blurb
     rows.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.
- **Screenshot:** `dropdown-12.jpg` (1200×972, viewed in browser) —
  white/off-white page, centered heading "Dropdown #2", below it the
  "Privacy Settings" trigger (gear icon left of the label) with the menu
  OPEN beneath it: a large white card with rounded corners and a soft
  diffuse shadow, laid out as a 2×2 grid of icon + bold dark title +
  light-gray blurb rows, lavender/purple icons, faint light-gray divider
  lines between rows. Matches the DOM + CSS exactly. URL bar in the
  screenshot shows `preview.colorlib.com`.

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Source                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Page background | WHITE (no `background-color` set in the slim `style.css` — default white; screenshot reads off-white/very light gray). NOTE: NOT the `#fafafa` used by older series pages (Passkey/Marquee/Glimpse/Inquire)                                                                                                                                                                                                                                                                                       | `body` (no rule) + screenshot           |
| Heading         | "Dropdown #2" (SOURCE BUG — see above; reproduce as-is, NOT "#12"), 20px Roboto (custom `h2 { font-size: 20px }` override — NOT Bootstrap 2rem), near-black `#212529` (inherited), centered (`text-center`), `my-5` = 3rem top + bottom margin                                                                                                                                                                                                                                                    | `h2` override + `.my-5`                 |
| Section rhythm  | `.content { padding: 7rem 0 }` (vertical 7rem padding around the whole demo block)                                                                                                                                                                                                                                                                                                                                                                                                                | `.content`                              |
| Trigger link    | `.dropdown-link` — `color: #888`, `font-size: 14px`, `inline-block`, `padding: 4px 7px`; OPEN (`.custom-dropdown.show`) → `color: #000`. NOTE: NO border, NO radius, NO hover treatment in this variant (unlike Privy/dropdown-11 which had a 1px `#efefef` hover border + shadow)                                                                                                                                                                                                                | `.custom-dropdown .dropdown-link` rules |
| Trigger icon    | Solid gear, FA `\f013` via icomoon (`icon-cog`), `mr-2` = 0.5rem right gap → lucide `Settings`/`Cog` equivalent                                                                                                                                                                                                                                                                                                                                                                                   | `fonts/icomoon/style.css` + markup      |
| Menu card       | `dropdown-menu.d-flex` — white bg, `border: 1px solid transparent`, radius `.25rem` (BS4 base 4px), **`min-width: 700px`**, shadow `0 15px 30px 0 rgba(0,0,0,.2)`, CENTERED under trigger (`left: 50% !important` + `transform: translateX(-50%) !important` — the later rule wins over the earlier `left: 0`); ANIMATED: `opacity: 0; visibility: hidden; margin-top: 40px` → `.active`: `opacity: 1; visibility: visible; margin-top: 50px`, transition `.3s all ease` (fade + 10px slide-down) | `.custom-dropdown .dropdown-menu` rules |
| Menu columns    | `.half-col { width: 50%; padding: 20px }`; rows `.half-col a { display: block; border-bottom: 1px solid #efefef; margin-bottom: 10px }`, `:last-child` no border/margin                                                                                                                                                                                                                                                                                                                           | `.half-col` rules                       |
| Item icon       | `.wrap-icon { font-size: 30px; line-height: 0 }`, span **`color: #c3a1fa`** (lavender — the brand accent); icons: `icon-cog` (gear → lucide `Settings`) and `icon-person` (user → lucide `User`), `mr-3` = 1rem gap before the text block                                                                                                                                                                                                                                                         | `.wrap-icon` rules + markup             |
| Item title      | `h3` — `font-size: 16px`, `margin: 5px 0 10px 0`, `padding: 0`, `color: #000`, `letter-spacing: .05rem`                                                                                                                                                                                                                                                                                                                                                                                           | `.half-col h3` rule                     |
| Item blurb      | `p` — `font-size: 14px`, `color: #b3b3b3`, `font-weight: 300` (global `p` rule)                                                                                                                                                                                                                                                                                                                                                                                                                   | `p` + `.half-col p` rules               |
| Font family     | Roboto (300/400 available; page also loads Poppins + Source Serif Pro but they are UNUSED here), stack `"Roboto", -apple-system, …, sans-serif`; body text default `#212529`                                                                                                                                                                                                                                                                                                                      | `body` rule + cf-fonts @font-face block |
| Icons           | TWO icons, repeated: the gear (`icon-cog`) on the trigger and in items 1+3; the person (`icon-person`) in items 2+4. No images, no carousel (owl assets loaded but unused)                                                                                                                                                                                                                                                                                                                        | preview HTML                            |
| Mobile behavior | NONE — no media queries in the slim stylesheet (like Privy); the `min-width: 700px` card overflows/scrolls on small viewports, menu stays centered at all viewports (the `col-md-5` simply becomes full-width)                                                                                                                                                                                                                                                                                    | `style.css` (no media queries)          |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Lilac app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Lilac — Two-Column Settings Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
matching the reference text exactly (including the source's numbering bug).

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #2" (the source page renders "Dropdown #2", NOT "Dropdown #12"
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
  14px font, `inline-block`, padding 4px 7px, and NO border/radius (this
  variant's stylesheet has no border or hover treatment on the trigger —
  unlike Privy's)
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
- **THEN** the menu SHALL open, CENTERED horizontally under the trigger
  (the reference centers via `left: 50%` + `translateX(-50%)`; white card,
  **`min-width: 700px`**, radius `.25rem`, shadow
  `0 15px 30px 0 rgba(0,0,0,.2)`, transparent border)
- **AND** the menu SHALL animate in with a fade + 10px slide-down
  (opacity 0→1 and margin-top 40px→50px, ~0.3s ease — the reference's
  `.active` transition)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Open-state trigger styling

The system SHALL show the open-state treatment on the trigger while the
menu is open, mirroring the reference `.show` state.

#### Scenario: Trigger open state

- **GIVEN** the dropdown menu is open
- **THEN** the trigger text SHALL turn black `#000` (the ONLY open-state
  change in this variant — no background, no inset shadow, unlike Privy)
- **WHEN** the menu closes
- **THEN** the trigger SHALL return to its default gray `#888` state

### Requirement: Two-column menu layout

The system SHALL render the wide menu as two equal columns of icon+title+
blurb rows with divider lines, matching the reference structure.

#### Scenario: Menu columns and rows

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show TWO equal columns (`width: 50%`, `padding:
20px` each) of full-width rows
- **AND** each row SHALL be a flex row (icon left with a 1rem gap, text
  block right) with a light `#efefef` divider line under it, and NO
  divider under the LAST row of each column

### Requirement: Menu items

The system SHALL render the four menu items in the reference order with
the reference text — including the source's duplicate and typo — and the
reference styling.

#### Scenario: Item content and order

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show exactly four items, in reading order:
  Settings (gear icon), Account (person icon), Settings (gear icon),
  Notofication (person icon)
- **AND** the fourth item SHALL be spelled **"Notofication"** — the
  source's typo; reproduce it exactly and do NOT "fix" it to
  "Notification" (documented in the PR description)
- **AND** the second and third rows SHALL both read "Settings" (the
  source repeats the title — keep both, no "fixing")
- **AND** each row SHALL show the blurb "Lorem ipsum dolor sit amet,
  consectetur adipisicing elit. Voluptatem soluta."

#### Scenario: Item styling

- **GIVEN** a menu item row is rendered
- **THEN** the item icon SHALL be 30px and colored lavender `#c3a1fa`
  (lucide `Settings` for the gear rows, lucide `User` for the person rows)
- **AND** the item title SHALL be 16px, black `#000`, with
  `letter-spacing: .05rem` and margins 5px top / 10px bottom
- **AND** the item blurb SHALL be 14px, light gray `#b3b3b3`,
  `font-weight: 300`

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

#### Scenario: No responsive menu treatment

- **GIVEN** the page is rendered on a narrow viewport
- **THEN** the menu SHALL keep the reference behavior: no special
  mobile CSS (unlike Onboard/Glimpse/Inquire) — the wide `min-width:
700px` card is NOT restyled for small screens (matches the source, which
  has zero media queries)

## Verification checklist

- [ ] `npm run verify:app lilac` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #2" (the SOURCE'S numbering bug —
      reproduce as-is, do NOT "fix" to "Dropdown #12"; 20px Roboto,
      near-black `#212529`, centered, `my-5`/3rem top+bottom margins) on a
      WHITE page background (NOT `#fafafa` — the slim stylesheet sets no
      body bg)
- [ ] `.content`-equivalent vertical padding is **7rem 0**
- [ ] Centered trigger: gear icon (lucide `Settings`) + "Privacy Settings",
      gray `#888` 14px, padding 4px 7px, inline-block, NO border/radius
      (this variant has no hover treatment — unlike Privy); open state →
      text `#000`
- [ ] Menu opens CENTERED under the trigger (white card, `min-width:
    700px`, radius .25rem, shadow `0 15px 30px 0 rgba(0,0,0,.2)`,
      transparent border) with the fade + 10px slide-down animation
      (margin-top 40px→50px)
- [ ] Two equal columns (`50%` + 20px padding), four rows in order:
      Settings (gear), Account (person), Settings (gear), **Notofication**
      (person) — the source typo and duplicate title reproduced as-is
- [ ] Row styling: flex row, `#efefef` divider under each row except the
      last in each column; icon 30px lavender `#c3a1fa`; title 16px `#000`
      letter-spacing .05rem; blurb 14px `#b3b3b3` weight 300
- [ ] Menu closes on outside click, Escape, and trigger re-click;
      `aria-haspopup`/`aria-expanded` flip correctly; trigger-menu paired
      via `aria-controls`/id (source's dangling `aria-labelledby` bug is
      NOT reproduced)
- [ ] No mobile-specific behavior (the slim stylesheet has NO media
      queries — like Privy, unlike Onboard/Glimpse/Inquire; the 700px
      card is not restyled on narrow viewports)
- [ ] No images needed; no carousel (owl assets loaded but unused in the
      source); exactly TWO icon glyphs (gear + person)
- [ ] Roboto (300/400) via Google Fonts `<link>` in `index.html`;
      Poppins/Source Serif Pro are loaded by the source but UNUSED — do not
      load them
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/lilac` (provenance lives only here + TEMPLATES.md +
      PR)

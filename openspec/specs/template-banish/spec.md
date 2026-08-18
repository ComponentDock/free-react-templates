# Template: Banish (Registration Form Wizard)

## Purpose

Banish is a single-page multi-step registration FORM WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 10" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-10/), built under a
DIFFERENT name (**Banish**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps-driven form wizard (`jquery.steps.js` +
jQuery 3.3.1): a 451px-wide white card floating left-of-center over a
full-page lifestyle photo (muted sage/teal wall with potted plants), with a
2px progress bar + numeric markers BELOW the card, a centered avatar (the
same profile portrait on every step), a `Back`/`Next` bottom button row
(inset at the card's bottom edges, `space-between`), and a bespoke payment
method grid on the final step. It is the 10th member of the 30-template
"Bootstrap Wizards" family (`colorlib-wizard-1` … `colorlib-wizard-30`):
every sibling is the same jQuery-Steps skeleton with a different color
scheme, per-step images, and field inventory. Banish is the SECOND prep of
the family (Conjure = wizard-1 is the chain seed); do NOT cross-contaminate
its tokens with Conjure's (Conjure: cream `#f9f6f1` page + olive `#6d7f52`
dots on a 920px centered card; Banish: photo background + near-black `#333`
monochrome on a 451px left-floated card).

**WHAT MAKES BANISH DISTINCT (signature behaviors):**

1. **Photo-background page with a left-floated small card.** The body is a
   full-viewport photo (`images/form-wizard-bg.jpg` — sage/teal wall over a
   light shelf, two potted plants right of center; `background: center
bottom / cover`). The 451×656px white card sits at `margin-left: 14.7%`,
   vertically centered in a 1400px-max flex wrapper. On mobile (<768px) the
   photo background is REMOVED (`background: none`) and the card widens to
   the viewport (auto width), stacked with the button row below it.
2. **Progress BAR instead of clickable dots.** No tab dots, no labeled
   steps: a 2px track (`#b7b2ab`, 39.91% of card width) centered BELOW the
   card (`bottom: -52px`) with a `#333` fill (`ul`) that expands 33.33% →
   66.67% → 100% across steps (`transition: all .3s`) and two numeric
   markers: a `:before` pseudo-element that shows the CURRENT step number
   ("1" at the track's left on step 1, moving to "2" at 63.67% on step 2,
   emptied on step 3) and a fixed `:after` "3" at the right end. Number
   color `#333`, 13px. The current-step classes (`step-2` / `step-3`) are
   toggled on `.steps` by the plugin's `onStepChanging` callback
   (newIndex 1 → `.step-2`, newIndex 2 → `.step-3`, else removed).
   **Navigation is NOT dot-driven — there are no step-dot click targets.**
   **Screenshot divergence:** the TEMPLATES.md screenshot shows "1 2 3"
   with the current number underlined — the LIVE page/CSS renders only the
   two markers described above (no underline style exists in the CSS).
   Follow the LIVE DOM/CSS.
3. **Left-aligned input icons, dark placeholders.** Every `.form-holder`
   input row carries a right-edge icon (`position: absolute; right: 0`,
   17px `#333`; 13px `.small` icons vertically centered): lock on
   Password, envelope on Email, smartphone on Phone, map on Address,
   account on Nation, caret-down on both select controls, and brand glyphs
   (Twitter / Linked In / Facebook / Google) on the step-2 social rows.
   Inputs are 30px tall, borderless except a 1px `#333` bottom rule,
   `font-weight: 600`, transparent background, and placeholder color `#333`
   (dark, NOT grey — inverse of Conjure's `#999`).
4. **Two custom selects (step 2).** Not `<select>`s: `.select-control`
   boxes (30px, 2px `#333` underline, weight 600, flex) labelled "Gender"
   (options Male / Female / Other via `rel` attributes) and "Language"
   (options English / France / Vietnamese), each with a caret-down icon,
   toggling a white `ul.dropdown` (1px `#4192cb` border) with
   `li { padding: 5px 10px }`, hover row `#81acee` + white text. Clicking
   the control toggles the list (plus `.active` class), clicking an option
   sets the control text from `rel` and closes the list, clicking anywhere
   else on the page closes it (`(html).click` handler); the list area
   stops propagation. Bespoke widget, NOT Bootstrap's.
5. **Date-of-Birth field with a date picker (step 2).** A
   `.form-control.datepicker-here` text input (`id="dp1"`, placeholder
   "Date of Birth") initialized with the Air Datepicker plugin
   (`vendor/date-picker/`, `data-date-format="dd - mm - yyyy"`,
   `data-language='en'`). Visually it is just another underline input (no
   icon). The recreation should render the SAME underline text input —
   a native date widget would break the underline-only visual; a plain
   input with placeholder "Date of Birth" (documented deviation: no
   calendar popup, no new dependency; keep the `dd - mm - yyyy` format as
   hint text or a small helper if desired).
6. **Payment method grid (step 3).** After the avatar, an `h6` "Payment
   Method" (13px `#333`, mb 14px, pt 5px) precedes a flex-wrap 2-column
   grid of 8 `.payment-item` tiles (47.76% wide, 53px tall, 1px `#e5e5e5`
   border, flex, `padding: 0 11px 0 8px`, mb 15px, cursor pointer): each
   holds a `payment-logo` (34.53% — brand PNG: Visa, Master Card, Giropay,
   Bleue, PayPal, iDEAL, Mister, Maestro — DO NOT copy brand assets, render
   the brand NAME as styled text instead) + a `payment-content` (65.47%,
   two lines: "Visa ... 8314" and "Express 06/21"). Clicking a tile removes
   `.active` from all tiles and adds it to the clicked one; `.active`
   swaps the border to `#333`. NOTE: the source repeats the SAME
   "Visa ... 8314" / "Express 06/21" text on all 8 tiles — paraphrase to
   per-brand distinct card/expiry lines (content-kind latitude). The first
   tile (`visa.png`) starts `.active`.
7. **Near-black monochrome buttons.** The `.actions` row is positioned
   `absolute; bottom: 50px; left: 58px; right: 58px; display: flex;
justify-content: space-between` — i.e. INSIDE the card's bottom corners
   (not overlaid outside like Conjure). Each `li a` is 51px tall × 118px,
   15px, with an arrow glyph at the right (`\f2ee` arrow-right). **Back**
   (`li:first-child`): transparent bg, 1px `#333` border, `#333` text,
   arrow-LEFT glyph, `padding-left: 50px`; hover fills `#4d4d4d`,
   transparent border, white text. **Next / Finish** (`li:last-child`):
   solid `#333` bg, WHITE text, arrow-right, `padding-left: 28px`, icon at
   right 27px; hover `#4d4d4d`. `li[aria-disabled="true"] a { opacity: 0;
transition: all 1s }` — the Back button on step 1 is invisible but
   KEEPS ITS SLOT (the `space-between` row reserves the space; in the
   recreation use `invisible` + `aria-hidden` so it is out of the tab
   order). Labels are CUSTOM: "Back" / "Next" (`labels: { next: "Next",
previous: "Back" }`); the finish label is jQuery-Steps' DEFAULT
   "Finish" (not overridden) → step 3 shows "Back" + "Finish".

## Naming

The ColorLib source name "Colorlib Wizard 10" is FORBIDDEN as the app name
(and "wizard" itself must not be reused). **Banish** is the new, original
name — single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-08-18: zero hits for `banish` outside the Conjure naming-chain
proposal). It continues the magic-practice verb chain established by the
wizard-1 spec: **Conjure (1) → Evoke (2) → Summon (3) → Invoke (4) →
Enchant (5) → Charm (6) → Hex (7) → Bless (8) → Curse (9) → Banish (10) →
…** (Banish = wizard-10, the 10th member, matching the chain position).
Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 10" (page title: "FormWizard_v10").
  Listed in TEMPLATES.md under **Bootstrap Wizards (30)** (section header
  line 844; the one and only row at line 847 —
  `wp/template/colorlib-wizard-10/` appears exactly ONCE; the close string
  matches for wizard-1/wizard-11..19 rows are `-1` prefix substrings, not
  duplicates). Member 10 of colorlib-wizard-1 … 30. Sibling preps: Conjure
  (wizard-1, chain seed).
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch; assets
  fetched and parsed):** the naive
  `https://preview.colorlib.com/theme/colorlib-wizard-10/` returns 404 (9
  bytes); the REAL preview is the family path
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-10/index.html`** (HTTP
  200, 11,666 bytes, 247 lines, `<title>FormWizard_v10</title>` — same
  `/etc/bwiz/` path confirmed for wizard-1 and wizard-15). Stylesheets:
  `css/style.css` (6,550 bytes — ALL styling, custom written, NO
  Bootstrap), `fonts/material-design-iconic-font/css/...` (icon font —
  glyphs `\f2ea` arrow-left, `\f2ee` arrow-right, plus field icons; replace
  with lucide/inline SVG, do NOT ship the font), `vendor/date-picker/css/
datepicker.min.css` (Air Datepicker — not needed if the input stays
  plain). Scripts: `js/jquery-3.3.1.min.js`, `js/jquery.steps.js` (wizard
  plugin), `js/main.js` (1,709 bytes: steps init + `.forward`/`.backward`
  handlers + the bespoke dropdown toggle/select/outside-close handlers +
  the payment-tile `.active` toggle + Air Datepicker init),
  `vendor/date-picker/js/datepicker.js` + `datepicker.en.js`. Fonts: local
  `@font-face` **Poppins-Regular** (Poppins is a Google Font — load 400 +
  600 via `<link>` in index.html; 600 is used for input text
  `font-weight: 600`).
- **Live DOM structure (1:1, verified against the rendered page's HTML):**
  - `body` (bg photo) → `div.wrapper` (max-width 1400px, `height: 100vh`,
    flex, `align-items: center`, `margin: auto`) → `form#wizard`
    (width 451px, height 656px, `position: relative`,
    `margin-left: 14.7%`). jQuery Steps transforms it at load into the
    `.wizard` structure: `div.steps` (the progress bar; `ul` fill),
    `div.content` → three `section` panels (`role=tabpanel`) each
    `div.inner` (padding 50px 58px, bg `#fff`, height 656px), and
    `div.actions` (the button row).
    - `div.steps` — `height: 2px; position: absolute; width: 39.91%;
background: #b7b2ab; bottom: -52px; left: 50%; transform:
translateX(-50%)`; `ul` (`height: 2px; background: #333; width:
33.33%; bottom: 0; left: 0; transition: all .3s`); `:before`
      current-number marker (`content: "1"`, `#333`, 13px, bottom 3px,
      left 0; `.step-2` → `content: '2'; left: 63.67%`; `.step-3` →
      `content: ''`); `:after` `content: "3"` fixed right 0. At
      <1500px `bottom: -40px`, <1199px back to -52px; <767px full width
      of the page (left 20px right 20px, translateX(0)).
    - Each `section` → `div.inner`: `a.avartar` (block, centered,
      `margin-bottom: 29px`) → `img` (`images/avartar.png` — a 128×126
      photographic portrait of a young woman, light chestnut hair, pale
      blue/white collared top, light background, with an embedded dark
      circular "+"/camera upload badge at bottom-right; SAME image on all
      three steps) → `div.form-row` groups.
    - `div.actions` (absolute, bottom 50px, left/right 58px, flex
      space-between) → `ul` → 2 `li[role=menuitem][aria-disabled]` →
      `a.previous` (Back) / `a.next` or `a.finish` (Next/Finish): 51px
      × 118px, 15px, arrow glyph `:before` at right 32px (`\f2ee`
      arrow-right on both; Back's at right 77px = `\f2ea` arrow-left).
      `li:first-child a` (Back): transparent bg, 1px `#333` border,
      `#333` text, `padding-left: 50px`; hover `#4d4d4d` + border
      transparent + white text. `li:last-child a` (Next/Finish): `#333`
      bg + white text, `padding-left: 28px`, glyph right 27px; hover
      `#4d4d4d`. `li[aria-disabled="true"] a`: `opacity: 0;
transition: all 1s` (invisible Back on step 1, slot kept).
  - The original has NO footer; per monorepo convention add a minimal
    attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Step-by-step field inventory (verbatim placeholders, live-verified from
  the fetched HTML):**
  - **Step 1 — registration:** `div.form-row.form-group` → `First Name` |
    `Last Name` (50% cols, 25px gap); then full-width rows: `Password`
    (type=password, lock icon), `Email` (envelope), `Phone`
    (smartphone-android), `Address` (map), `Nation` (account-box). Every
    row `margin-bottom: 26px`.
  - **Step 2 — personal/social:** the two custom selects — `Gender`
    (options **Male / Female / Other**) then `Language` (options
    **English / France / Vietnamese**) — each `div.select > div.form-holder
    > div.select-control`+ caret-down icon +`ul.dropdown`; then `Date of
    > Birth` (`.datepicker-here`, `data-date-format="dd - mm - yyyy"`,
NO icon); then `Slogan`(no icon); then`div.form-row.form-group`→`Twitter`(twitter glyph) |`Linked In`(linkedin glyph); then`div.form-row.form-group`→`Facebook`(facebook glyph) |`Google`
    > (google glyph).
  - **Step 3 — payment:** avatar; `h6` **"Payment Method"**; `div.payment-
block` (flex wrap, space-between) → 8 `div.payment-item` (47.76%
    width) — `visa.png` (starts class `active`, border `#333`),
    `master-card.png`, `giropay.png`, `bleue.png`, `paypal.png`,
    `ideal.png`, `mister.png`, `maestro.png` — each with `div.payment-logo`
    (34.53%) + `div.payment-content` (65.47%): `<p>Visa ... 8314</p>` +
    `<p>Express  06/21</p>` (source repeats these SAME two lines on every
    tile — paraphrase to distinct per-brand values in the recreation).
- **Design tokens (all verified 2026-08-18 from the live stylesheet +
  fetched assets):**
  - **Page:** full-viewport photo `images/form-wizard-bg.jpg` 1400×939
    (sage/teal wall upper 2/3, light shelf surface lower third, two potted
    plants right of center — large tropical in a white geometric pot +
    smaller bushy plant in a grey cylinder pot), `background: center
bottom; background-size: cover`. Mobile (<767px): `background: none`.
  - **Card:** white `#fff`, 451×656px, NO shadow, NO radius (the soft
    shadow/rounded corners visible in the marketing screenshot are NOT in
    the CSS — do not add them). Padding 50px 58px (mobile 30px 20px,
    height auto).
  - **Fonts:** Poppins — 400 regular (page, body, buttons, dropdowns) +
    600 (input/select-control text `font-weight: 600`). Google Fonts
    `<link>` (Poppins 400,600). Base size 13px; buttons 15px; icons 17px
    (13px `.small`).
  - **Near-black accent:** `#333` — body text/input text/underline/icon
    color, progress-bar fill, button bg (white text), Back border,
    payment active border, progress numbers. Hover `#4d4d4d` (buttons).
  - **Light grey:** `#b7b2ab` (progress track), `#e5e5e5` (payment item
    border).
  - **Select dropdown:** white list, 1px `#4192cb` blue border, option
    rows `padding: 5px 10px`, hover row `#81acee` + white text.
  - **Inputs:** 30px tall, no box, 1px `#333` bottom rule, transparent bg,
    weight 600, placeholder `#333`; icons absolutely right 0 (17px `#333`,
    top 5px; `.small` 13px vertically centered).
  - **Buttons:** 51px × 118px, 15px; Back transparent + `#333` border/
    text + arrow-left; Next/Finish solid `#333` + white + arrow-right;
    hover `#4d4d4d`; row absolute bottom 50px left/right 58px flex
    space-between; disabled Back `opacity: 0` (1s) but keeps its slot.
  - **Progress bar:** 2px track `#b7b2ab`, width 39.91%, centered below
    the card (`bottom: -52px`); fill `#333` 33.33% → 66.67% → 100%
    (0.3s ease); number markers 13px `#333` (`:before` current: 1 → 2 at
    63.67% → none; `:after` "3" right).
  - **Avatar:** 128×126 portrait, centered, mb 29px, same on every step.
  - **Payment tiles:** 47.76% × 53px, 1px `#e5e5e5`, flex, padding
    0 11px 0 8px, mb 15px; logo col 34.53%, content col 65.47% (two lines);
    active border `#333`.
- **Behaviors (all verified 2026-08-18 from main.js + jQuery-Steps
  config):**
  - **Step navigation:** `#wizard` steps init: `headerTag: "h4"`, `bodyTag:
"section"`, `transitionEffect: "fade"`, `enableAllSteps: true`
    (navigation NEVER blocked — no validation anywhere), speed 300ms,
    `labels: { next: "Next", previous: "Back" }` (finish = default
    "Finish"). `.forward`/`.backward` anchors drive next/previous.
  - **Progress classes:** `onStepChanging` toggles `.step-2` on
    `$('.steps')` when `newIndex === 1` and `.step-3` when `newIndex ===
2` (else removed) — this animates the bar fill + number marker.
  - **Step 1 state:** Back is `aria-disabled` → rendered `opacity: 0`
    (invisible, slot kept via space-between); only Next is visible.
  - **Step 3 state:** Next is replaced by Finish ("Finish" label, same
    arrow-right styling); Back stays.
  - **Select dropdowns:** control click toggles the list + `.active`;
    option click sets control text from `rel` + closes; outside click
    closes; `.select` stops propagation (open list clicks don't close).
  - **Payment:** tile click removes `.active` everywhere, adds it to the
    clicked tile.
  - **No form submission:** `form action=""`, no submit handler; Finish
    is decorative. The recreation should render Finish as a
    non-navigating button (no fake submit either).
- **Screenshot (`colorlib-free-wizard-10.jpg`, 1200×972 AVIF, viewed
  2026-08-18):** browser frame; split-screen design: sage/teal wall
  (upper), light shelf surface (bottom), two potted plants right of
  center; white card at left-of-center with a soft shadow + rounded
  corners (MARKETING ARTIFACTS — the live CSS has neither; follow the CSS)
  containing a circular avatar photo of a woman with a small camera/upload
  badge on the circle (the badge is baked into `avartar.png`), side-by-side
  First Name / Last Name, then stacked Password / Email / Phone / Address /
  Nation with right-edge icons, and a dark charcoal "Next →" button at the
  card bottom; below the card, the progress indicator "1 2 3" with the
  current number underlined (again a marketing rendering of the bar —
  the live page shows the 2px track + fill + numeric markers per the CSS;
  follow the live DOM). Aesthetic: modern, clean, natural earthy palette,
  dark-grey text, dark neutral primary action. The demo photos/portraits/
  brand logos are replaced by picsum placeholders + text in the recreation
  (see picsum guidance: `banish-bg` seed for the wall/plant scene —
  verify the seed's subject before shipping; a portrait seed for the
  avatar; NO brand logo images — render brand names as text).

## Design tokens

| Token               | Value               | Notes                                                                      |
| ------------------- | ------------------- | -------------------------------------------------------------------------- |
| `--color-ink`       | `#333`              | Near-black: text, inputs, underline, icons, bar fill, buttons, numbers     |
| `--color-ink-hover` | `#4d4d4d`           | Button hover bg                                                            |
| `--color-track`     | `#b7b2ab`           | Progress bar track                                                         |
| `--color-card`      | `#fff`              | Card bg (no shadow, no radius)                                             |
| `--color-tile`      | `#e5e5e5`           | Payment tile border                                                        |
| `--color-drop`      | `#4192cb`           | Select dropdown border                                                     |
| `--color-drop-hv`   | `#81acee`           | Dropdown row hover bg (white text)                                         |
| `--font-body`       | Poppins, sans-serif | 400 (page/body); 600 for input text — Google Fonts `<link>`                |
| `--card-w`          | `451px`             | Card width (mobile: auto)                                                  |
| `--card-h`          | `656px`             | Card/content height (mobile: auto)                                         |
| `--card-ml`         | `14.7%`             | Card left offset from wrapper (mobile 0)                                   |
| `--card-pad`        | `50px 58px`         | Inner padding (mobile 30px 20px)                                           |
| `--input-h`         | `30px`              | Input/select-control height (1px `#333` bottom rule, transparent bg)       |
| `--icon`            | `17px` / `13px`     | Field icon size; `.small` icon size (right 0, vertically centered)         |
| `--btn`             | `51px × 118px`      | Button size, 15px font; row bottom 50px left/right 58px, space-between     |
| `--bar`             | `2px`, 39.91%       | Progress track; fill 33.33/66.67/100%; markers 13px; bottom -52px centered |
| `--avatar`          | `128×126`           | Centered avatar, mb 29px, same portrait all steps                          |
| `--tile`            | `47.76% × 53px`     | Payment tile; logo 34.53% / content 65.47%; mb 15px; active border `#333`  |
| `--fade`            | `300ms`             | Step transition effect                                                     |

## Requirements

### Requirement: Page shell

The system SHALL render a full-viewport photo-background page with the
white wizard card vertically centered and offset left, the progress bar
below the card, and the nav button row inset at the card's bottom edges.

#### Scenario: Photo-background page with left-floated card

- **GIVEN** the Banish app is rendered on a desktop viewport
- **THEN** the page background SHALL be a full-viewport photo (picsum
  placeholder standing in for the sage-wall/plants scene; CSS
  `background-size: cover`, centered bottom)
- **AND** the white card SHALL render at 451×656px, vertically centered in
  a max-1400px flex wrapper, at ~14.7% left margin
- **AND** the page font SHALL be Poppins (400/600 from Google Fonts), base
  13px

#### Scenario: Responsive stacking

- **GIVEN** a viewport below 768px
- **THEN** the photo background SHALL be removed, the card SHALL widen to
  the viewport (auto width/height) with `30px 20px` padding, the button
  row SHALL move below the card (`position: static`, margin 0 20px), the
  payment grid SHALL stack to one column, and the progress bar SHALL span
  the page (left/right 20px)

### Requirement: Progress bar step indicator

The system SHALL render a 2px progress bar below the card with a moving
fill and numeric markers, reflecting the current step — NOT clickable dots.

#### Scenario: Progress bar rendering

- **GIVEN** the Banish app is rendered on the first step
- **THEN** a 2px `#b7b2ab` track SHALL render centered below the card,
  39.91% of the card width
- **AND** the `#333` fill SHALL cover exactly one third (33.33%) of the
  track, and the markers SHALL read "1" (left end) and "3" (right end)
- **AND** no dot/clickable step targets SHALL render (progress is
  display-only)

#### Scenario: Progress advancement

- **GIVEN** the wizard is on step N
- **THEN** the fill SHALL cover N×33.33% (66.67% on step 2, 100% on step 3) with a ~0.3s width transition
- **AND** the current-number marker SHALL show the current step ("1" on
  step 1, "2" at ~63.67% on step 2, none on step 3) while "3" stays fixed
  at the right end

### Requirement: Registration step (step 1)

The system SHALL render the registration step: a centered avatar, a
two-column name row, and five full-width fields with right-edge icons.

#### Scenario: Registration fields

- **GIVEN** the wizard is on step 1
- **THEN** a centered avatar image SHALL render at the top (picsum portrait
  placeholder, same image on all steps)
- **AND** the fields SHALL render in order: `First Name` + `Last Name`
  side-by-side (50% each); then full-width `Password`, `Email`, `Phone`,
  `Address`, `Nation`
- **AND** every input SHALL be underline-only (30px, 1px `#333` bottom
  rule, no box), `font-weight: 600`, placeholder `#333`
- **AND** each field SHALL carry its icon at the right edge (lucide: Lock,
  Mail, Smartphone, MapPin, User — 17px `#333`)

### Requirement: Personal & social step (step 2)

The system SHALL render the second step: the two custom selects, a date-of-
birth input, a slogan input, and two social pairs with brand icons.

#### Scenario: Step 2 fields

- **GIVEN** the wizard is on step 2
- **THEN** the fields SHALL render in order: `Gender` select (options Male /
  Female / Other), `Language` select (options English / France /
  Vietnamese), `Date of Birth` input (placeholder "Date of Birth", no
  icon, `dd - mm - yyyy` hint format), `Slogan` input, `Twitter` +
  `Linked In` (side-by-side), `Facebook` + `Google` (side-by-side)
- **AND** the social fields SHALL show brand glyphs at the right edge
  (inline SVG simple-icons paths — lucide-react has NO brand icons)

#### Scenario: Custom select behavior

- **GIVEN** a custom select is rendered
- **WHEN** the user clicks the control box
- **THEN** the white dropdown list SHALL open (1px `#4192cb` border) with
  its options; clicking an option SHALL set the control text to that
  option and close the list; clicking anywhere outside SHALL close it
- **AND** hovering an option SHALL highlight it `#81acee` with white text
- **AND** the control SHALL expose `aria-expanded`,
  `role="listbox"`/`role="option"` with `aria-selected`

### Requirement: Payment step (step 3)

The system SHALL render the final step: the avatar, a "Payment Method"
heading, and an 8-tile selectable payment grid.

#### Scenario: Payment tiles

- **GIVEN** the wizard is on step 3
- **THEN** a `Payment Method` heading and eight payment tiles SHALL render
  in a 2-column grid (1-column below 768px), each with a brand-name slot
  (Visa, Mastercard, Giropay, Carte Bleue, PayPal, iDEAL, Mister Cash,
  Maestro — as styled text, NOT copied brand logos) plus a card-number
  line and an expiry line
- **AND** the FIRST tile SHALL be selected (active border `#333`)

#### Scenario: Tile selection

- **GIVEN** the payment grid is rendered
- **WHEN** the user clicks a payment tile
- **THEN** that tile SHALL become active (`#333` border) and every other
  tile SHALL return to the idle `#e5e5e5` border

### Requirement: Wizard navigation

The system SHALL provide Back/Next (Finish on step 3) navigation that is
never blocked, with the step-1 Back button invisible but layout-reserved.

#### Scenario: Button row and states

- **GIVEN** the Banish app is rendered
- **THEN** the button row SHALL render inset at the card's bottom
  (bottom 50px, left/right 58px, space-between) with 51px-tall × 118px
  `<button>`s at 15px
- **AND** on step 1 only the solid `#333` "Next" button (white text,
  arrow-right) SHALL be visible; the "Back" button SHALL be invisible
  (opacity-0 equivalent, `aria-hidden`) but SHALL keep its layout slot
  and be excluded from the tab order
- **AND** on steps 2–3 the "Back" button SHALL be visible: transparent bg,
  1px `#333` border, `#333` text, arrow-left; hover fills `#4d4d4d`,
  border transparent, white text
- **AND** on step 3 the "Next" button SHALL be replaced by a "Finish"
  button with the same solid style

#### Scenario: Step transitions

- **GIVEN** the wizard is on any step
- **WHEN** the user clicks Next / Back / Finish
- **THEN** the active panel SHALL change with a fade transition (~300ms)
- **AND** navigation SHALL never be blocked (no validation) and field
  values SHALL persist across steps
- **AND** Finish SHALL be decorative (no form submission, no navigable
  action)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (deviation from the source,
which removes all focus outlines and relies on bare `<a>`/`<input>`
with no labels).

#### Scenario: Semantics

- **GIVEN** the Banish app is rendered
- **THEN** the step panels SHALL expose `role="tabpanel"` (or equivalent
  step semantics) and each form field SHALL have a programmatic label
  (`aria-label` or `<label htmlFor>` with the placeholder text)
- **AND** the selects SHALL be buttons with `role="listbox"`/`role="option"`
  semantics and `aria-expanded`/`aria-selected`
- **AND** the payment tiles SHALL be buttons (or role=radio group) with
  `aria-pressed`/`aria-checked` state
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements, and the invisible step-1 Back SHALL be out of the tab order

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Banish app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/ branded
  as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- banish` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-10/index.html:
      photo-background page (sage/teal wall + plants motif), white 451px
      card left-of-center, centered avatar portrait, underline-only
      `#333` inputs with right-edge icons + `#333` placeholders, custom
      Gender/Language dropdowns (`#4192cb` border, `#81acee` hover),
      progress bar below the card (fill ⅓/⅔/full, numeric markers 1/2/3),
      bottom inset button row (step 1: single solid `#333` Next; steps
      2–3: outlined Back + solid Next/Finish), step-3 8-tile payment grid
      with first tile active, no shadow/radius on the card.
- [ ] Live behavior: Next/Back/Finish step through without blocking; values
      persist; progress bar advances with step; Back invisible-but-
      slot-kept on step 1; dropdowns open/close/select; payment tile
      selection swaps active; Finish does nothing; no submit.
- [ ] No ColorLib strings anywhere under `apps/banish` (source/provenance
      lives only in this spec + TEMPLATES.md + the PR). Footer links
      https://www.componentdock.com/.
- [ ] `public/CNAME` = `banish.free.componentdock.com`; `"homepage"` =
      `https://banish.free.componentdock.com`.
- [ ] Workspace registered in `package-lock.json` (`grep -c
"free-react-templates/banish" package-lock.json` ≥ 1) after `npm
install` at root.
- [ ] PR `feat/template-banish` description includes: source URL
      (https://colorlib.com/wp/template/colorlib-wizard-10/), preview URL
      (the `/etc/bwiz/` one), the token list, and what differs (renamed
      "Banish", Poppins via Google Fonts, lucide/inline-SVG icons, picsum
      placeholders, brand names as text instead of logo images, plain DOB
      input instead of the datepicker, accessible semantics + focus rings,
      footer, no ColorLib strings).

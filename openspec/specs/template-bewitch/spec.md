# Template: Bewitch (Accordion Sign-Up Wizard)

## Purpose

Bewitch is a single-page THREE-PANEL ACCORDION SIGN-UP WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 13" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-13/), built under a
DIFFERENT name (**Bewitch**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 3 **acc-wizard** (accordion wizard,
`vendor/acc-wizard-master/release/acc-wizard.min.js` + Bootstrap
collapse): a 1070px white card (10px radius, soft shadow) centered on a
warm golden-orange AERIAL photo background (`images/body-bg.jpg` — an
airplane-wing/sunset-in-the-sky view). Three collapsible panels —
**"Basic infomation"** (sic), **"Additional infomation"** (sic),
**"Specialities"** — with only one open at a time (Bootstrap accordion
collapse with `data-parent="#accordion"`). The first panel is open on
load. Each panel holds a `<form method="POST">` (no action):

- **Panel 1 — Basic infomation:** First name ("E.g Nguyen"), Last name
  ("E.g. Kardashian"), Gender (two 50x50 icon tiles with male/female
  silhouettes, male checked by default), Date of birth (three side-by-side
  selects MM / DD / YYYY populated by the `dobpicker` plugin), Nationality
  (a JS-REBUILT custom dropdown — the `<select>` is removed and replaced
  by a `ul` list with flag images; default "Viet Nam", option "USA").
- **Panel 2 — Additional infomation:** Your Email ("E.g. john123@gmail.com"),
  Phone Number (type=number, "(+ 123 ) 456 789"), City ("Eg. Ha Noi"),
  Pincode (type=number, no placeholder).
- **Panel 3 — Specialities:** a full-width 174px textarea ("Eg. I'm very
  good at UI design ....") + an orange **Submit** button.

The acc-wizard plugin appends nav buttons to each form: an orange
`au-btn` **Next** button after panel 1 and 2, and a **Go Back** button
(from the `au-btn-back` class) that is `display: none` — the back
affordance is invisible everywhere. Panel 3's explicit Submit input is
the only action on the last step.

**WHAT MAKES BEWITCH DISTINCT (signature behaviors):**

1. **Accordion panels, not step tiles or circles.** Unlike Conjure (dot
   nav), Banish (progress bar), Dispel (square tiles) or Abjure (hidden
   jQuery-Steps header + circular buttons), Bewitch uses Bootstrap
   COLLAPSIBLE PANELS as its step metaphor: panel headings are the
   navigation. Clicking a heading opens its panel and closes the others.
   Closed headings are grey `#999999`; the OPEN panel's heading is black
   `#222` (`panel-group .active .panel-heading h3 a { color: #222 }`).
   Headings are 18px, uppercase, bold, with a 1px `#ebebeb` bottom rule
   and 16px bottom padding. Panels stack with 37px gaps; `.panel-body`
   has 35px top padding.
2. **Photo page background — the family's only photo backdrop since
   Banish (wizard-10).** `body` uses `background-image: url(body-bg.jpg)`
   cover/center: a warm golden-orange aerial shot (aircraft wing at the
   far left, hazy sunset sky over terrain — viewed in the browser). The
   card floats on it with `.main { padding: 130px 0 }` (vs Abjure's solid
   `#00a7f6` page and Dispel's solid coral). Recreation needs ONE
   subject-screened picsum placeholder (see docs/templates/bewitch).
3. **Custom JS-rebuilt NATIONALITY dropdown with flags.** `main.js`
   deletes the `<select name="national">` and rebuilds it as
   `ul#national`: an `.init` row (grey well `#f8f8f8`, radius 5px,
   padding 14px 20px, chevron-down glyph right 20px at 18px `#999`)
   showing the selected option ("Viet Nam" + vietnam flag) with the other
   options (`li:not(.init)`, display:none) toggled on click; hovering or
   selecting an option turns it orange (`#f65300` bg + white text).
   Options: Viet Nam (default), USA. Flags are tiny PNGs
   (`images/icon-vietnam.png`, `images/icon-usa.png`) — the recreation
   drops the flag images (text-only list, documented deviation; no flag
   assets shipped) or uses an inline SVG Vietnam flag.
4. **Gender GENDER ICON TILES.** The radio inputs are 0x0 visually
   hidden (`left: -9999px`) and the labels are 50x50 squares (radius 5px,
   grey `#f8f8f8` well) containing silhouette icons
   (`images/icon-male.png`, `images/icon-female.png` — PNGs, not shipped).
   Checked: orange `#f65300` border + white background; unchecked: plain
   grey tile. Male is checked by default. The source's
   `.form-radio input:hover` (orange fill) styles a 0x0 input and never
   fires; the recreation should put the hover affordance on the tile
   (label:hover) for usable feedback (documented).
5. **Date-of-birth select TRIO with separators.** MM / DD / YYYY in
   three selects inside a 5px-radius container: widths 87 / 87 / 152px,
   1px `#ebebeb` vertical separators after the first two, each select
   transparent-bordered with `#f8f8f8` bg, 14px, `#999` text, padding
   14px 20px. Populated by `$.dobPicker` (tyea/dobpicker v1.0): month
   placeholder "MM" + Jan..Dec (3-letter), day placeholder "DD" + 01..31
   ZERO-PADDED, year placeholder "YYYY" + currentYear-120 .. currentYear
   (init'd with minimumAge 0 / maximumAge 120).
6. **ZERO validation — the family's most relaxed gate.** jquery.validate
   is loaded and ALL messages are emptied (`required: ""`, `email: ""`,
   ...) but NO rules and NO `.validate()` call exist anywhere in
   main.js/style.css — there is no error styling at all (grep found no
   `error` selector). Step changes are never blocked and the form submits
   freely. Recreation must NOT invent blocking validation — keep the
   accordion un-gated (this is the OPPOSITE of Dispel and Abjure).
7. **Orange `au-btn` buttons with a LONG-ARROW-DOWN glyph.** The accent
   color is burnt-orange `#f65300`: 140x50px buttons, white uppercase
   bold text, 5px radius, no border, cursor pointer, margin-bottom 30px,
   with the zmdi long-arrow-down glyph (`\f2fe`) at `right: 42px`. The
   plugin's Next buttons read "Next"; panel 3's Submit input reads
   "Submit" (an `<input>` cannot render the `:after` arrow — only
   "SUBMIT" with no glyph, faithfully). The "Go Back" buttons carry
   `au-btn-back` (display:none) — the recreation renders NO back control
   at all (documented; matching the source's effective UI).
8. **Mock submit.** The forms are `method="POST"` without action (a
   reload on submit; `alert('Sumited')` lives only in the commented-out
   jQuery-Steps block). Recreation: inline success state (e.g. a
   "thanks / submitted" message replacing the form or shown above it) —
   no alert, no fake network (per monorepo convention).
9. **Source typos are content, not corruption.** "Basic infomation",
   "Additional infomation", "Specialities", "E.g Nguyen" (no period),
   "E.g. Kardashian", "(+ 123 ) 456 789", "Eg. Ha Noi", "Eg. I'm very
   good at UI design ...." The recreation SHOULD fix the obvious spelling
   typos ("Information", "Specialties") while keeping the placeholder
   EXAMPLE styles (documented deviation — content-kind latitude).

## Naming

The ColorLib source name "Colorlib Wizard 13" is FORBIDDEN as the app
name (and "wizard" itself must not be reused). **Bewitch** is the new,
original name — single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-08-18: zero hits for `bewitch` in TEMPLATES.md, `ls
apps/`, `openspec/specs/`, `docs/templates/`). It continues the
magic-practice verb chain established by the wizard family preps:
**Conjure (1) → Evoke (2) → Summon (3) → Invoke (4) → Enchant (5) →
Charm (6) → Hex (7) → Bless (8) → Curse (9) → Banish (10) → Dispel (11)
→ Abjure (12) → Bewitch (13) → …** (Bewitch = wizard-13, the 13th
member, matching the chain position). Source slug + preview URL are
recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 13" (page title: "Sign Up
  Form"). Listed in TEMPLATES.md under **Bootstrap Wizards (30)**
  (section header line 844; the one and only row at line 850 —
  `wp/template/colorlib-wizard-13/` appears exactly ONCE). Member 13 of
  colorlib-wizard-1 … 30. Sibling preps: Conjure (wizard-1, chain seed —
  cream/olive, 920px card, dot nav), Banish (wizard-10 — photo bg, #333
  monochrome, 451px card, progress bar), Dispel (wizard-11 — coral page,
  630px card, square tile nav, validation-gated steps), Abjure (wizard-12
  — solid sky-blue page, 665px pill card, hidden step nav, single-field
  steps, circular buttons, growing footer). Bewitch's tokens are a FIFTH
  scheme: photo bg, 1070px white card, Bootstrap accordion panels, orange
  `#f65300` accent, custom flag dropdown, un-gated.
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch):**
  the naive `https://preview.colorlib.com/theme/colorlib-wizard-13/`
  returns 404; the REAL preview is the family path
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-13/index.html`**
  (HTTP 200, 10,539 bytes, 179 lines, `<title>Sign Up Form</title>` —
  same `/etc/bwiz/` path as wizard-1/10/11/12/15; do not redo this
  lookup). Stylesheets: `css/style.css` (14,212 bytes, 497 lines — ALL
  custom styling, SCSS-compiled; NO Bootstrap CSS rules beyond what
  bootstrap.min.css provides for collapse/panel layout),
  `vendor/boostrap/bootstrap.min.css` (Bootstrap 3.3.x grid/collapse),
  `vendor/acc-wizard-master/release/acc-wizard.min.css` (1,394 bytes —
  plugin's step nav styling, trivial),
  `fonts/material-icon/css/material-design-iconic-font.min.css` (zmdi
  icon font — glyphs `\f2f9` chevron-down, `\f2fe` long-arrow-down;
  REPLACE with lucide, do NOT ship the font). Scripts:
  `vendor/jquery/jquery.min.js`, `vendor/boostrap/bootstrap.min.js`
  (collapse), `vendor/acc-wizard-master/release/acc-wizard.min.js`
  (3,423 bytes: appends per-form action buttons — first form gets a Next
  only, middle forms get Back+Next, last form gets Back only; Back always
  `au-btn-back` = display:none),
  `vendor/jquery-validation/dist/jquery.validate.min.js` +
  `additional-methods.min.js` (LOADED; messages emptied; NO rules — see
  below), `vendor/jquery-steps/jquery.steps.min.js` (loaded, UNUSED —
  the whole `.steps()` init is commented out in main.js),
  `vendor/minimalist-picker/dobpicker.js` (3,573 bytes: populates the 3
  DOB selects: "MM"/"DD"/"YYYY" placeholders, zero-padded 01..31 days,
  Jan..Dec months, currentYear-120..currentYear years), `js/main.js`
  (3,333 bytes: accwizard init `addButtons: true, nextText 'Next',
nextClasses 'au-btn', backClasses 'au-btn au-btn-back'`; Bootstrap
  collapse active-class toggling; empty validator messages; dobPicker
  init; nationality select → ul rebuild + click handling). Fonts: local
  @font-face **Roboto Slab** 300/400/700 → **Google Fonts `<link>`
  (400, 700 — 300 is loaded but unused by the demo CSS)**.
- **Live DOM structure (from the fetched HTML; Bootstrap collapse
  renders panel bodies per accordion state):**
  - `body` (bg photo body-bg.jpg cover/center, Roboto Slab 14px/1.6,
    `#222`, weight 400) → `div.main` (padding 130px 0) → `div.container`
    (width 1070px, `margin: 0 auto`, bg `#fff`, **border-radius 10px**,
    shadow `0px 10px 9.9px 0.1px rgba(0,0,0,0.1)`; ≤992px:
    `calc(100% - 40px)`, max-width 100%) → `div.acc-wizard` (padding
    67px 30px 65px 65px; ≤768px: `67px 30px 65px 30px`) →
    `div.panel-group#accordion` → three `div.panel.panel-default` (no
    shadow/border/radius, margin-bottom 37px; the first carries `active`
    and its collapse carries `in` on load).
    - Each panel → `div.panel-heading` (transparent, padding 0) → `h3`
      (18px, uppercase, cursor pointer, margin 0, border-bottom 1px
      `#ebebeb`, padding-bottom 16px, bold) → `a`
      (href="#collapseN" data-toggle="collapse"
      data-parent="#accordion"; color `#999999` inactive / `#222` when
      the panel is `active`) and `div.panel-collapse.collapse`
      (`in` for the open panel) → `div.panel-body` (padding-top 35px) →
      `form[method=POST]` → `fieldset` (no border, margin 0 0 30px).
      - **Panel 1 form:** `div.form-row` (flex, margin 0 -13px, mb 6px;
        children 50% width + padding 0 13px + mb 15px) → two
        `div.form-group` each with `label.form-label` (block, width 100%,
        mb 4px, weight 400) + `input` (bg `#f8f8f8`, radius 5px, padding
        13px 20px, 14px, border 1px transparent; focus: bg transparent +
        border 1px solid `#f65300`; placeholder `#999`): `first_name`
        ("E.g Nguyen"), `last_name` ("E.g. Kardashian"). Then a second
        `div.form-row` with `div.form-group-flex` (justify space-between,
        50%): `div.form-radio` (110px) with label "Gender" + `div.form-flex`
        holding two 0x0 absolute radios (`name=gender`, values male/female,
        male `checked`) each paired with a 50x50 `label` (inline-block,
        bg `#f8f8f8`, radius 5px, border 1px transparent, padding 12px 10px;
        `:checked + label` → border-color `#f65300`, bg `#fff`, z-index 1)
        wrapping a silhouette icon (`<img>` alt "Male"/"Female"); and
        `div.form-date` (325px) with label "Date of birth" +
        `div.form-date-group` (flex, border 1px transparent, radius 5px)
        → three `div.form-date-item` (first two 87px, last 152px, each with
        a 1px `#ebebeb` vertical separator via `:after` except the last)
        → selects `#birth_month` / `#birth_date` / `#birth_year`
        (transparent border, `#f8f8f8` bg, padding 14px 20px, 14px, `#999`).
        Next row: `div.form-select` (50%) with label "Nationality" +
        `div.select-group` (relative) → (after main.js rebuild) `ul#national`
        (absolute overlay, z-index 9, radius 5px): `li.init` (bg `#f8f8f8`,
        radius 5px, padding 14px 20px, cursor pointer, chevron-down glyph
        `\f2f9` right 20px 18px `#999`) showing the selected option + flag,
        then `li` options (`display: none` until opened; bg `#f8f8f8`,
        padding 5px 20px, flag img margin-right 12px; `:hover`/`.selected`
        → bg `#f65300` + `#fff`). Options: "" (init; Viet Nam + vietnam
        flag), "Viet Nam" (vietnam flag), "USA" (usa flag).
      - **Panel 2 form:** two `form-row`s — email ("Your Email",
        type=email, "E.g. john123@gmail.com"), phone ("Phone Number",
        type=number, "(+ 123 ) 456 789"); city ("City", text,
        "Eg. Ha Noi"), pincode ("Pincode", type=number, no placeholder).
      - **Panel 3 form:** `div.form-group` → `label` "Tell us your
        specialities" + `textarea#specialities` (width 100%, height
        174px, same well styling, placeholder "Eg. I'm very good at UI
        design ....") + `div.form-submit` → `input[type=submit].au-btn`
        value "Submit" (orange button; margin-bottom 0 inside
        `.form-submit`).
    - **Plugin-appended action buttons** (verified live in the DOM):
      after panel 1's form: `<button class="au-btn" type="submit">Next</button>`;
      after panel 2's form: `<button class="au-btn au-btn-back" type="reset">Go Back</button>
<button class="au-btn" type="submit">Next</button>`; after panel 3's
      form: `<button class="au-btn au-btn-back" type="reset">Go Back</button>`
      (the panel 3 Submit input follows). All `au-btn-back` elements are
      `display: none`. The first `.au-btn` (Next, panel 1) has
      `margin-bottom 30px`; the panel-3 Next-margin is removed by
      `.form-submit .au-btn { margin-bottom: 0 }` — the plugin's back
      button in panel 3 keeps the 30px margin but is invisible.
  - **No h1, no nav, no images in the flow** other than the gender
    icons + dropdown flags + body photograph. The `h2` style block
    exists in the CSS but no h2 renders.
- **Behaviors (all verified 2026-08-18 from live fetch + browser):**
  - **Accordion:** Bootstrap collapse with `data-parent="#accordion"` —
    opening one panel closes the others; main.js adds/removes `.active`
    on show/hide (`.panel { active }` toggling drives the heading color).
    First panel open on load (`.active` + `.collapse.in`). The collapsible
    content transitions ~350ms (Bootstrap default).
  - **Wizard buttons:** accwizard init (addButtons) appends Next/Back per
    form as above. Next buttons are `type=submit` with class `au-btn` —
    clicking them submits that panel's form AND (per plugin) triggers the
    collapse open of the next step. Back buttons are invisible
    (`au-btn-back` display:none). On the last panel, the explicit Submit
    input is the action (the plugin's back button next to it is hidden).
  - **DOB picker:** populates the selects on load (placeholders MM/DD/YYYY
    as empty-value options + 12 months Jan..Dec, days 01..31 zero-padded,
    years currentYear-120..currentYear; minimumAge 0, maximumAge 120).
  - **Nationality dropdown:** main.js rebuilds the select into
    `ul#national`; clicking `.init` toggles the other `li`s (display
    none ↔ block); clicking an option updates the init row content,
    marks it `.selected` (orange bg/white), closes the list. Open list
    overlays the fields below (absolute, z-index 9).
  - **No validation:** empty validator messages + no rules + no error
    CSS → nothing blocks, nothing turns red, no messages appear.
  - **Submit:** `method="POST"` without action → a page reload in the
    source; the only feedback script is the commented-out
    `alert('Sumited')`. Recreation: inline success state (form hidden /
    replaced by a confirmation message), no alert, no fake network.
- **Screenshot (`colorlib-free-wizard-13.jpg`, 1200×972 AVIF; the
  TEMPLATES.md row embeds a downscaled copy), viewed 2026-08-18 in the
  browser:** warm golden-orange aerial background (aircraft wing at the
  far left, hazy sunset sky over terrain — soft, desaturated, brownish-
  orange cast that makes the white card pop); a large white card center
  with a soft grey drop shadow; three stacked headings — "BASIC INFOMATION"
  (bold, dark, active) over its open form, "ADDITIONAL INFOMATION" and
  "SPECIALITIES" below in light grey; form fields are light-grey wells
  with black labels and grey placeholders; the male gender tile is
  selected (dark silhouette icon, orange border in the live page); the
  DOB trio shows MM/DD/YYYY; Nationality shows the Vietnam flag + "Viet
  Nam" with a dropdown chevron; a burnt-orange "NEXT" button with a
  small down arrow sits under the first panel. Aesthetic: clean, modern,
  travel-flavored, flat white card on a warm photo. **One photo only —
  the body background; the recreation needs ONE subject-screened picsum
  placeholder** (see docs/templates/bewitch for the screening plan).

## Design tokens

| Token                  | Value                          | Notes                                                                                   |
| ---------------------- | ------------------------------ | --------------------------------------------------------------------------------------- |
| `--color-accent`       | `#f65300`                      | Burnt-orange: au-btn bg, focus border, radio-checked border, dropdown hover/selected bg |
| `--color-card`         | `#fff`, 1070px                 | `margin: 0 auto`; radius **10px**; shadow `0px 10px 9.9px 0.1px rgba(0,0,0,0.1)`;       |
|                        |                                | ≤992px: `calc(100% - 40px)`, max-width 100%; `.main` padding 130px 0                    |
| `--color-well`         | `#f8f8f8`                      | Input/select/textarea/dropdown/radio-tile resting background; radius 5px                |
| `--color-ink`          | `#222`                         | Body text, labels, active-panel heading, dropdown option text                           |
| `--color-heading-idle` | `#999999`                      | Closed-panel heading links; also placeholder `#999` + dropdown chevron `#999`           |
| `--color-line`         | `#ebebeb`                      | Panel-heading bottom border (1px), DOB separator lines (1px)                            |
| `--color-focus`        | `#f65300`                      | Input/textarea/select focus: transparent bg + 1px solid border (source);                |
|                        |                                | recreation adds a focus-visible ring per a11y convention (documented)                   |
| `--font-body`          | 'Roboto Slab', serif           | Google Fonts 400/700 (source local @font-face 300/400/700; 300 unused);                 |
|                        |                                | base 14px/1.6, weight 400, `#222`                                                       |
| `--panel-heading`      | 18px, uppercase, bold          | `h3` margin 0, border-bottom 1px `--color-line`, padding-bottom 16px,                   |
|                        |                                | cursor pointer; idle `--color-heading-idle`, active `--color-ink`;                      |
|                        |                                | panel margin-bottom 37px; `.panel-body` padding-top 35px                                |
| `--input`              | `#f8f8f8` bg, radius 5px       | padding 13px 20px, 14px, border 1px transparent (focus: 1px solid accent);              |
|                        |                                | placeholder `#999`; textarea 100% × 174px                                               |
| `--label`              | block, width 100%, mb 4px      | weight 400, `#222` (no floating labels — plain labels above fields)                     |
| `--radio-tile`         | 50×50px, radius 5px            | inline-block, bg `--color-well`, border 1px transparent; checked: border +              |
|                        |                                | (hover intent) accent; recreation adds label hover affordance (source's rule            |
|                        |                                | targets an offscreen 0x0 input and never fires — documented)                            |
| `--dob-trio`           | 87 / 87 / 152px items          | 1px `--color-line` separators after first two; selects transparent border,              |
|                        |                                | `--color-well` bg, padding 14px 20px, 14px, `#999`; group radius 5px                    |
| `--dropdown`           | `ul#national` absolute overlay | z-index 9, radius 5px; `.init` row: `--color-well` bg, padding 14px 20px,               |
|                        |                                | chevron-down 18px `#999` right 20px; options hidden until open: `--color-well`          |
|                        |                                | bg, padding 5px 20px; hover/selected: accent bg + `#fff`                                |
| `--btn`                | 140×50px, radius 5px           | accent bg, `#fff` uppercase bold 14px, no border, cursor pointer,                       |
|                        |                                | padding-right 23px, long-arrow-down glyph at right 42px (Next buttons);                 |
|                        |                                | margin-bottom 30px (0 inside `.form-submit`); "Submit" (input) has no glyph             |
| `--btn-back`           | `display: none`                | All "Go Back" (`au-btn-back`) controls are invisible — recreation omits them            |
| `--page-bg`            | PHOTO (cover, center)          | `images/body-bg.jpg` (~45KB, 1900×1276) warm aerial golden-orange flight view;          |
|                        |                                | recreation: ONE subject-screened picsum placeholder (plan in docs)                      |
| `--validate`           | NONE                           | No rules, empty messages, no error CSS — navigation and submit un-gated                 |
| `--success`            | inline confirmation            | Source: POST without action (reload); comment-out `alert('Sumited')`.                   |
|                        |                                | Recreation: inline success state, no alert, no fake network                             |

## Requirements

### Requirement: Page shell

The system SHALL render the photo-background page with the centered white
card holding the accordion wizard.

#### Scenario: Photo background and card

- **GIVEN** the Bewitch app is rendered on a desktop viewport
- **THEN** the page background SHALL be a single full-bleed photo
  (cover, centered) — a warm golden/orange aerial sky view (picsum
  placeholder, subject-screened per docs/templates/bewitch)
- **AND** a white 1070px card SHALL render centered with 130px vertical
  padding above and below it
- **AND** the card SHALL have a 10px radius and the shadow
  `0px 10px 9.9px 0.1px rgba(0,0,0,0.1)`
- **AND** the page font SHALL be Roboto Slab (400/700 via Google Fonts),
  14px/1.6, `#222`

#### Scenario: Responsive card

- **GIVEN** a viewport at or below 992px
- **THEN** the card SHALL widen to `calc(100% - 40px)` with
  `max-width: 100%` and no horizontal overflow

### Requirement: Accordion panels

The system SHALL render exactly three collapsible panels in order, with
only one open at a time and the first open on load.

#### Scenario: Panel headings and states

- **GIVEN** the Bewitch app is rendered
- **THEN** three panel headings SHALL render in order: "Basic
  information", "Additional information", "Specialties" (typo-corrected
  from the source's "Basic infomation" / "Additional infomation" /
  "Specialities" — documented deviation)
- **AND** each heading SHALL be 18px, uppercase, bold, with a 1px
  `#ebebeb` bottom rule and 16px bottom padding; the OPEN panel's
  heading SHALL be `#222` and the closed panels' headings `#999999`
- **AND** the first panel SHALL be open and the other two closed on load

#### Scenario: Accordion behavior

- **GIVEN** a closed panel's heading is visible
- **WHEN** the user activates it (click / Enter / Space)
- **THEN** that panel SHALL open (content expands) and the previously
  open panel SHALL close (only one open at a time, mirroring Bootstrap
  `data-parent` accordion)
- **AND** the heading colors SHALL swap accordingly (active `#222`,
  idle `#999999`)
- **AND** the toggle SHALL expose `aria-expanded` and the content region
  SHALL expose the proper expand/collapse semantics (recreation
  improvement — the source relies on Bootstrap's un-annotated collapse)

### Requirement: Basic information form (panel 1)

The first panel SHALL contain the personal-details fields in the
source's exact order and content.

#### Scenario: Name fields

- **GIVEN** the first panel is open
- **THEN** the fields SHALL render in order: "First name" (text,
  placeholder "E.g Nguyen") and "Last name" (text, placeholder
  "E.g. Kardashian") side by side (two-column form row)
- **AND** each field SHALL be a grey well (`#f8f8f8`, 5px radius,
  padding 13px 20px) with its label above it

#### Scenario: Gender icon tiles

- **GIVEN** the Gender field is rendered
- **THEN** two 50×50 square tiles SHALL render — Male and Female — each
  with a silhouette glyph (inline SVG or unicode symbol; the source's
  PNG icons are not shipped) inside a grey well
- **AND** the Male tile SHALL be selected by default: orange `#f65300`
  border + white background; the Female tile SHALL be an unselected grey
  well
- **WHEN** the user activates a tile
- **THEN** it SHALL become selected (orange border, white bg) and the
  other SHALL deselect
- **AND** the radios SHALL be accessible by name (`getByRole('radio',
{ name: 'Male' })`) with proper `aria-checked`

#### Scenario: Date of birth trio

- **GIVEN** the Date of birth field is rendered
- **THEN** three selects SHALL render side by side — MM / DD / YYYY —
  with 1px `#ebebeb` separators between the first two
- **AND** each select SHALL show its placeholder ("MM", "DD", "YYYY") as
  the selected default with no value
- **AND** the options SHALL be: months Jan..Dec (3-letter), days 01..31
  ZERO-PADDED, years currentYear−120 .. currentYear (matching dobPicker's
  minimumAge 0 / maximumAge 120)

#### Scenario: Nationality dropdown

- **GIVEN** the Nationality field is rendered
- **THEN** a custom dropdown SHALL render (NOT a native select — the
  source deletes the select and rebuilds a `ul`): an init row showing the
  selected option "Viet Nam" with a chevron-down at its right, styled as
  a grey well (padding 14px 20px)
- **WHEN** the user activates the init row
- **THEN** the option list SHALL open below it (absolute overlay) with
  the options "Viet Nam" and "USA"
- **WHEN** the user activates an option
- **THEN** the init row SHALL update to that option, the list SHALL
  close, and the chosen value SHALL be stored
- **AND** hovering an option SHALL turn it orange (`#f65300`) with white
  text (matching the source's hover/selected styling)
- **AND** the flag images SHALL be omitted (text-only options —
  documented deviation; no flag assets shipped), and the control SHALL
  expose listbox semantics (`role="listbox"` / `aria-expanded` /
  `aria-selected`)

### Requirement: Additional information form (panel 2)

The second panel SHALL contain email/phone/city/pincode in the source's
order.

#### Scenario: Field inventory

- **GIVEN** the second panel is open
- **THEN** the fields SHALL render in order: "Your Email" (type=email,
  placeholder "E.g. john123@gmail.com"), "Phone Number" (type=number,
  placeholder "(+ 123 ) 456 789"), "City" (text, placeholder
  "Eg. Ha Noi"), "Pincode" (type=number, no placeholder), arranged as two
  side-by-side rows
- **AND** every field SHALL use the same grey-well styling as panel 1
- **AND** a Next button SHALL render below the fields (see Navigation)

### Requirement: Specialities form (panel 3)

The third panel SHALL contain the specialities textarea and the Submit
action.

#### Scenario: Textarea and submit

- **GIVEN** the third panel is open
- **THEN** a "Tell us your specialities" label SHALL render above a
  full-width textarea (174px tall, grey well, placeholder "Eg. I'm very
  good at UI design ....")
- **AND** an orange "Submit" button (140×50px, uppercase white bold,
  5px radius) SHALL render below it
- **AND** the Submit button SHALL NOT show the arrow glyph (the source is
  an `<input>` — `:after` can't render on inputs; faithful)

### Requirement: Navigation buttons

The system SHALL render the orange Next button after the first two
panels and NO visible Back control anywhere.

#### Scenario: Next progression

- **GIVEN** the first panel is open
- **THEN** an orange "Next" button with a down-arrow glyph SHALL render
  under the panel's fields (140×50px, uppercase white bold, 5px radius)
- **WHEN** the user activates Next
- **THEN** the SECOND panel SHALL open (accordion slides) and the first
  SHALL close
- **AND** the second panel SHALL render its own Next button; activating
  it SHALL open the third panel
- **AND** the third panel SHALL render only the Submit button

#### Scenario: No back control

- **GIVEN** any panel other than the first is open
- **THEN** there SHALL be NO visible Back button (the source renders
  "Go Back" buttons that are `display: none` — the recreation omits
  them entirely, matching the effective UI)
- **AND** users SHALL still be able to return to an earlier panel via
  the panel headings (the accordion headings are the navigation)

### Requirement: Un-gated validation and submit

The system SHALL NOT block navigation or submission (the source empties
all validator messages, registers no rules, and has no error styling).

#### Scenario: Free navigation

- **GIVEN** any panel with empty fields
- **WHEN** the user activates Next
- **THEN** the next panel SHALL open regardless — no validation errors,
  no messages, no red states (faithful to the source; do NOT add
  blocking validation)

#### Scenario: Submit success

- **GIVEN** the third panel is open
- **WHEN** the user activates Submit
- **THEN** the form SHALL NOT reload or navigate (source has no action)
- **AND** an inline success message SHALL render (e.g. "Thanks — your
  signup was submitted!") replacing or appearing above the form
- **AND** no alert dialog and no fake network request SHALL occur

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (recreation improvement:
the source removes all focus outlines and provides no ARIA).

#### Scenario: Semantics

- **GIVEN** the Bewitch app is rendered
- **THEN** every field SHALL have a programmatic label (`<label htmlFor>`)
  and required/error state SHALL be announced if any is introduced
- **AND** the accordion heading toggles SHALL expose `aria-expanded` and
  `aria-controls`; the panel regions SHALL be labelled by their headings
- **AND** the gender radios and the nationality dropdown SHALL expose
  accessible names and states (`aria-checked` / `aria-expanded`,
  `aria-selected`)
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (headings, inputs, selects, tiles, dropdown, buttons)

### Requirement: Footer

The system SHALL include the required attribution footer (the source has
no footer content).

#### Scenario: Component Dock credit

- **GIVEN** the Bewitch app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- bewitch` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-13/index.html:
      warm golden photo background, white 1070px card (10px radius,
      soft shadow), three accordion headings (open `#222` / closed
      `#999999`, uppercase, 1px bottom rule), grey-well inputs with
      black labels, 50×50 gender tiles (orange border on selected),
      MM/DD/YYYY trio with separators, custom Nationality dropdown
      (Viet Nam default, orange hover), orange 140×50 Next buttons with
      down arrow, "Submit" without arrow on the last panel, no Back
      visible.
- [ ] Behavior check: first panel open on load; heading clicks accordion
      (one open at a time); Next opens the next panel; no Back control;
      no validation blocks anything; Send can also be reached by
      expanding the last panel heading directly; Submit shows the inline
      success message; DOB selects populated (DD/MM/YYYY defaults,
      zero-padded days, Jan..Dec, year range); Nationality opens/closes
      and selects Viet Nam / USA.
- [ ] Responsive check at 992px / 768px / 600px / 480px (card
      `calc(100% - 40px)`, form rows stack to one column, date trio and
      radio/date widths adapt, no horizontal overflow).
- [ ] No ColorLib strings in any app file; footer links
      https://www.componentdock.com/; provenance lives only in this
      spec, TEMPLATES.md, and the PR.

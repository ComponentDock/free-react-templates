# Template: Dispel (Sign-Up Form Wizard)

## Purpose

Dispel is a single-page multi-step EMPLOYEE SIGN-UP FORM WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 11" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-11/), built under a
DIFFERENT name (**Dispel**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps form wizard (`jquery.steps.min.js` +
jQuery 3.x + jquery.validate + a minimalist day/month/year picker): a
630px white card (10px radius, soft shadow) centered on a solid CORAL
(`#fa6d6a`) page, headed by an uppercase 20px title, with FOUR square
90×90px step tiles (grey `#adadad` inactive / coral `#fa5e5b` active,
Themify icons + label) above the active panel. Each panel opens with a
17px legend row ("Personal Informaltion:" in coral left / "Step N / 4"
right) followed by bordered inputs (1px `#ebebeb`, 5px radius, 15px 20px
padding), a bordered 3-select day/month/year group with per-item chevrons,
and bespoke (non-Bootstrap) dropdown lists for Gender / Country / Payment
type. Navigation is VALIDATION-GATED: jQuery Validate blocks Next/Submit
until every required field on the step is filled — an empty error icon
(themify `\e717`, red `#ff1212`) + red border marks invalid fields.
Previous is `display:none` on step 1 (no reserved slot — the actions row
is `justify-content: flex-end`). Finish (labeled "Submit") validates all
remaining fields then shows a mock `alert('Sumited')` success. It is the
11th member of the 30-template "Bootstrap Wizards" family
(`colorlib-wizard-1` … `colorlib-wizard-30`).

**WHAT MAKES DISPEL DISTINCT (signature behaviors):**

1. **Coral page + grey/coral step TILES (not dots, not a bar).** Solid
   page background `#fa6d6a` (no photo, no gradient). The FOUR step tabs
   are 90×90px rounded (5px) SQUARES in the `.steps` row
   (`justify-content: space-between`, margin-bottom 23px): inactive
   tiles `#adadad` with WHITE 29px icon + label, active tile `.current`
   `#fa5e5b` (darker coral than the page — color contrast comes from the
   grey-vs-coral swap, not a size change). jQuery Steps hides the `<h3>`
   title text inside the content area (`.content h3 { display: none }`);
   the tab label comes from `titleTemplate: '<span class="title">#title#</span>'`.
2. **Validation-GATED navigation (opposite of Banish).** Every step's
   fieldset is validated with jquery.validate on `onStepChanging`
   (`ignore: ":disabled,:hidden"`, `return form.valid()`) — the user
   CANNOT advance to the next step until all required fields on the
   current step are valid; `onFinishing` validates with `ignore: ":disabled"`
   before Submit completes. Error messages are EMPTY strings (no text):
   an invalid field gets `input.error` (1px `#ff1212` border) + a
   `label.error` positioned absolutely at the row's top right showing the
   themify ALERT icon `\e717` (13px, `#ff1212`, `top: 40px; right: 20px`
   relative to the field row). Fields validate on blur (`onfocusout:
$(element).valid()`), and a valid field flips to `input.valid`
   (1px `#666` border). Required marks: red `*` (`#b90000`) via
   `label.required:after`.
3. **Day/Month/Year date groups (native flat selects, not a calendar).**
   The Date of Birth (step 1) and Expiry Date (step 4) controls are each
   a bordered group (1px `#ebebeb`, 5px radius, `space-between`) of THREE
   borderless 90px native `<select>`s — Day (01–31, default "Day"),
   Month (Jan…Dec, default "Month"), Year (current year down to
   current-120, default "Year") — populated by the minimalist-dob-picker
   plugin (`minimumAge: 0, maximumAge: 120`). Each item shows a 10px
   `#222` chevron (30×20px hit area) at its right and a 1px `#ebebeb`
   30px divider line between items (last item: no divider). The whole
   group is a single rounded box 266px wide next to the step's custom
   select (160px).
4. **Three BESPOKE dropdown lists (Gender, Country, Payment type).**
   `main.js` REPLACES each `<select>` at runtime with a `ul.list-item`
   (1px `#ebebeb`, 5px radius, z-index 99, absolutely positioned): the
   first option becomes `li.init` (the closed-state value, with a
   chevron `\e64b` via `:after` at right 20px) and the remaining options
   are hidden `li:not(.init)` (display:none) shown only while open.
   Clicking `.init` toggles the list; clicking an option sets the
   `.init` text to it, marks it `.selected` and closes the list; hover /
   selected rows invert to `#fa5e5b` + white. NOT Bootstrap, NOT a
   native select. (Gender: Male / Female; Country: Australia / America
   [value "USA"]; Payment type: Master Card / Visa Card.)
5. **Right-aligned action row with Previous HIDDEN (display:none) on
   step 1.** `.actions` (margin-top 25px) `ul` is
   `justify-content: flex-end` with 10px gaps between 130×50px, 5px
   radius buttons: Previous/Back is grey `#adadad`, Next/Submit is
   coral `#fa5e5b` with white text (hover `#f82d2a`). jQuery Steps adds
   `.disabled` to the Previous `li` on step 1 AND `.actions .disabled {
display: none }` removes it entirely — the row then shows ONLY the
   right-aligned Next button (NO reserved slot — unlike Banish's
   invisible-but-laid-out Back). Labels: Previous / Next / **Submit**
   (finish label overridden from "Finish").
6. **Four-step employee account inventory.** Step 1 Personal: First
   name\*, Last name\*, [Date of birth + Gender], User name\*, Password\*.
   Step 2 Contact: Email\*, Phone\* (number), Address\*, Country. Step 3
   Official: Employee ID\*, Designation\*, Department\*, Working hours\*.
   Step 4 Payment: Bank Name\*, Holder Name\*, [Expiry Date + Payment
   type], [Card Number\* (number) + CVC\*]. Step titles repeat the
   source's typos ("EMPLYEE", "Offical", "Informaltion") — fix them in
   the recreation (content-kind latitude).
7. **Mock success.** `onFinished: alert('Sumited')` — no real submit
   (`form method="POST"`, no action). The recreation replaces the alert
   with an inline success panel ("Account created" style, non-navigating)
   and documents the deviation.

## Naming

The ColorLib source name "Colorlib Wizard 11" is FORBIDDEN as the app name
(and "wizard" itself must not be reused). **Dispel** is the new, original
name — single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-08-18: zero hits for `dispel` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`). It continues the magic-practice
verb chain established by the wizard family preps: **Conjure (1) → Evoke
(2) → Summon (3) → Invoke (4) → Enchant (5) → Charm (6) → Hex (7) →
Bless (8) → Curse (9) → Banish (10) → Dispel (11) → …** (Dispel =
wizard-11, the 11th member, matching the chain position). Source slug +
preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 11" (page title: "Sign Up Form").
  Listed in TEMPLATES.md under **Bootstrap Wizards (30)** (section header
  line 844; the one and only row at line 848 —
  `wp/template/colorlib-wizard-11/` appears exactly ONCE; close-string
  matches for wizard-1/10/12..19 rows are prefix substrings, not
  duplicates). Member 11 of colorlib-wizard-1 … 30. Sibling preps:
  Conjure (wizard-1, chain seed — cream/olive, 920px card, dot nav) and
  Banish (wizard-10 — photo bg, #333 monochrome, 451px card, progress
  bar). Dispel's tokens are a THIRD scheme: coral page, 630px card, tile
  nav, validation gating.
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch; assets
  fetched and parsed):** the naive
  `https://preview.colorlib.com/theme/colorlib-wizard-11/` returns 404 (9
  bytes); the REAL preview is the family path
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-11/index.html`** (HTTP
  200, 12,092 bytes, 238 lines, `<title>Sign Up Form</title>` — same
  `/etc/bwiz/` path confirmed for wizard-1, wizard-10, wizard-11,
  wizard-15). Stylesheets: `css/style.css` (12,951 bytes, 469 lines —
  ALL styling, custom written, NO Bootstrap), `fonts/themify-icons/themify-icons.css`
  (icon font — glyphs `\e717` error alert, `\e64b` chevron; replace with
  lucide/inline SVG, do NOT ship the font). Scripts:
  `vendor/jquery/jquery.min.js`, `vendor/jquery-validation/dist/jquery.validate.min.js`
  - `additional-methods.min.js`, `vendor/jquery-steps/jquery.steps.min.js`
    (wizard plugin), `vendor/minimalist-picker/dobpicker.js` (3,573 bytes —
    populates the day/month/year selects), `js/main.js` (6,261 bytes, 191
    lines: validate rules + steps init + the three list-item dropdown
    builders + dobPicker init ×2). Fonts: local @font-face **Roboto Slab**
    300/400/700 (Roboto Slab is a Google Font — load 300/400/700 via
    `<link>` in index.html; 300 is unused by the CSS, load 400 + 700).
- **Live DOM structure (1:1, verified against the rendered page's
  accessibility tree 2026-08-18):**
  - `body` (bg `#fa6d6a`) → `div.main` (padding 60px 0) → `div.container`
    (width 630px, `margin: 0 auto`, bg `#fff`, border-radius 10px,
    shadow `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`) → `h2` **"SIGN UP
    OFFICE EMPLYEE ACCOUNT"** (20px, bold, uppercase, centered,
    padding-top 35px, margin 0; typo "EMPLYEE" — fix) → `form#signup-form.signup-form`
    (padding 32px 90px 40px 90px). jQuery Steps transforms it at load
    into: `div.steps` (the tile row), `div.content` → four `fieldset`
    panels (`role=tabpanel`), and `div.actions` (the button row).
    - `div.steps` — `margin-bottom: 23px`; `ul` (flex,
      `justify-content: space-between`) → 4 `li` → `a` → `span.title`
      (90×90px, radius 5px, bg `#adadad`, color `#fff`, flex column,
      centered): `span.icon` (font-size 29px; `i.ti-user` /
      `ti-email` / `ti-star` / `ti-credit-card`) + `span.title_text`
      (margin-top -5px; "Personal" / "Contact" / "Offical" / "Payment").
      `.current .title` → bg `#fa5e5b`. Non-visited tabs carry
      `aria-disabled` (forward-only until visited; visited tabs remain
      clickable to go back). `.content h3 { display: none }` — the h3
      headers exist in markup but are hidden; the tab label is the only
      visible step title.
    - Each `fieldset` panel → `legend` (font-size 17px, margin-bottom
      20px, width 100%): `span.step-heading` (color `#fa5e5b`,
      float left — e.g. "Personal Informaltion:") + `span.step-number`
      (float right — "Step 1 / 4") → form controls (see inventory).
    - `div.actions` — `margin-top: 25px`; `ul` (flex,
      `justify-content: flex-end`) → 2 `li` (margin-left 10px) → `a`:
      130×50px, radius 5px, flex centered, color `#fff`;
      `li:first-child a` (Previous) bg `#adadad`; `li a` (Next/Submit)
      bg `#fa5e5b`, hover bg `#f82d2a`. `li.disabled a` → hidden via
      `.actions .disabled { display: none }` (step-1 Previous).
    - `div.footer` — EMPTY in the source; per monorepo convention add a
      minimal attribution footer linking `https://www.componentdock.com/`
      ("Component Dock") so every shipped template carries the required
      link.
  - **Field inventory (verbatim labels/options, live-verified from the
    fetched HTML + rendered DOM):**
    - **Step 1 — Personal:** `First name` (required), `Last name`
      (required), then `div.form-row` (space-between): `Date of birth`
      (`div.form-date` 266px: `.form-date-group` of 3 `div.form-date-item`
      each with a borderless 90px select — `birth_date` / `birth_month` /
      `birth_year` + `span.select-icon` chevron `ti-angle-down`; divider
      lines between items) + `Gender` (`div.form-select` 160px:
      `div.select-list` wrapping the replaced `ul.list-item#gender` list:
      options **Male / Female** — the source has a duplicate empty-value
      `Male` first option used as the `.init` default), then `User name`
      (required), `Password` (required, type=password).
    - **Step 2 — Contact:** `Email` (required, type=email), `Phone`
      (required, type=number), `Address` (required), `Country`
      (`ul.list-item#country`: options **Australia / America** [value
      "USA"]).
    - **Step 3 — Offical:** `Employee ID` (required), `Designation`
      (required), `Department` (required), `Working hours` (required).
    - **Step 4 — Payment:** `Bank Name` (required), `Holder Name`
      (required), `div.form-row`: `Expiry Date` (`.form-date` 266px:
      `expiry_date` / `expiry_month` / `expiry_year` selects, same
      day/month/year structure) + `Payment type` (`ul.list-item#payment_type`:
      options **Master Card / Visa Card**), `div.form-row`:
      `Card Number` (required, type=number) + `CVC` (required, type=text).
- **Design tokens (all verified 2026-08-18 from the live stylesheet +
  rendered page):**
  - **Page:** SOLID coral `#fa6d6a` (no photo/gradient), Roboto Slab
    13px/1.6, `#222`. `.main` padding 60px 0.
  - **Card/container:** `#fff`, 630px, `margin: 0 auto`, radius 10px,
    shadow `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`. Inner form padding
    32px 90px 40px 90px (<480px: 30px sides).
  - **Title:** 20px bold uppercase `#222`, centered, padding-top 35px.
  - **Fonts:** Roboto Slab — 400 body/labels/inputs, 700 h2/legend-weight
    text (`font-weight: bold` on h2), base 13px; legend 17px; icons 29px
    (tiles) / 10px (chevrons). Google Fonts `<link>` (400,700).
  - **Coral accents:** `#fa5e5b` — active tile, Next/Submit button,
    step-heading, dropdown hover/selected row; hover `#f82d2a` (button).
    Page bg `#fa6d6a` is the LIGHTER coral; `#fa5e5b` is the deeper
    action/accent coral.
  - **Greys:** `#adadad` — inactive tiles + Previous button; `#222` —
    body/input/label text, chevron icons, list items; `#666` — input
    focus + valid border.
  - **Borders:** `#ebebeb` 1px — inputs, date-group, select list,
    dividers; `#ff1212` — error border + error icon; `#b90000` —
    required asterisk.
  - **Inputs/selects:** 100% width, block, 1px `#ebebeb`, radius 5px,
    padding 15px 20px, Roboto Slab 13px; `appearance: unset` (native
    chrome removed); focus/valid border `#666`; error border `#ff1212`.
    Labels 13px, margin-bottom 5px; `.form-group/.form-select/.form-date`
    margin-bottom 15px (position relative).
  - **Step tiles:** 90×90px, radius 5px, `space-between` row, margin-
    bottom 23px; inactive `#adadad` + white icon 29px; active `#fa5e5b`;
    icon + label stacked/centered; mobile (<768px): 150px wide, centered,
    stacked column with margin-bottom 20px.
  - **Buttons:** 130×50px, radius 5px, white text, flex-centered;
    Previous `#adadad`, Next/Submit `#fa5e5b` (hover `#f82d2a`); row
    `justify-content: flex-end`, 10px gap, margin-top 25px; step-1
    Previous `display:none` (not slot-reserved).
  - **Date group:** 266px (row) / 100% (mobile), 1px `#ebebeb`, radius
    5px, space-between; inner selects 90px borderless transparent;
    chevron hit area 30×20px, 10px, `#222`; 1px `#ebebeb` 30px divider
    between items (none after last).
  - **Custom list:** absolute, width 100%, z-index 99, 1px `#ebebeb`,
    radius 5px; `.init` row (closed value) padding 13px 20px with
    chevron `\e64b` right 20px; option rows padding 5px 20px, hidden
    until open; hover/selected bg `#fa5e5b` + white; `.select-list`
    margin-bottom 47px.
  - **Form rows:** `.form-row` space-between; `.form-date` 266px /
    `.form-select` 160px side-by-side; mobile (<768px): column, both
    100%.
- **Behaviors (all verified 2026-08-18 from main.js + jQuery Steps
  config):**
  - **Steps init:** `headerTag: "h3"`, `bodyTag: "fieldset"`,
    `transitionEffect: "fade"`, `labels: { previous: 'Previous', next:
'Next', finish: 'Submit', current: '' }`, `titleTemplate:
'<span class="title">#title#</span>'`. `enableAllSteps` NOT set →
    default false: tabs beyond the visited set are `aria-disabled`
    (forward-only; visited tabs stay clickable). Previous is hidden on
    step 1 via jQuery Steps' `.disabled` + `display:none`.
  - **Central custom-list widget (×3):** each init grabs the `<select>`
    options, appends a `ul.list-item` into the `.select-list` parent,
    removes the native select, sets `li.init` = first option; click
    `.init` → toggles `li:not(.init)`; click an option → sets `.init`
    text, `.selected` highlight, closes; hover row `#fa5e5b`/white.
  - **dobPicker (×2):** day/month/year selects populated — defaults
    "Day"/"Month"/"Year"; Day 01–31; Month Jan…Dec (source typo "Octr" —
    use Oct); Year current … current−120 (birth: min age 0 / max 120;
    the expiry group uses the SAME plugin config).
  - **Validation-gated navigation:** `onStepChanging` → `form.valid()`
    with `ignore: ":disabled,:hidden"`; `onFinishing` → `form.valid()`
    with `ignore: ":disabled"`; `onFinished` → `alert('Sumited')`
    (replaced with an inline success state in the recreation).
    Required: first_name, last_name, user_name, password, email, phone,
    address, employee_id, designation, department, work_hours, bank_name,
    holder_name, card_number (+ `number: true`), cvc. Error text = ""
    (icon-only errors); `onfocusout` validates per-field; invalid →
    `input.error` + `label.error` icon (alert glyph, 13px `#ff1212`, at
    top 40px / right 20px); valid → `input.valid` (`#666` border).
    `.actions` gains/loses `.form-error` on highlight/unhighlight (no
    visible CSS — cosmetic hook, may skip).
  - **No real submit:** `form method="POST"` without action; Submit just
    validates then alerts. Recreation: Submit validates, then shows a
    success panel (no navigation, no fake network).
- **Screenshot (`colorlib-free-wizard-11.jpg`, 1200×972 AVIF; the
  TEMPLATES.md row embeds a downscaled copy), viewed 2026-08-18:**
  browser-frame marketing capture of the SAME page: solid salmon/coral
  full-viewport background; white 630px card centered, rounded corners +
  soft drop shadow; four square step tiles in a row — "Personal" filled
  coral with white person icon, "Contact"/"Offical"/"Payment" grey with
  white envelope/star/credit-card icons; centered uppercase dark heading
  "SIGN UP OFFICE EMPLOYEE ACCOUNT"; bordered inputs with red asterisk
  labels; Date of birth (Day/Month/Year) next to Gender (Male); coral
  "Next" button bottom-right. No imagery/photos anywhere in the design —
  NO picsum placeholders required (solid-color page, icon-only tiles).
  Aesthetic: warm coral/white, clean, flat, modern form aesthetic with
  rounded corners everywhere (5px micro-radius).

## Design tokens

| Token              | Value                           | Notes                                                                          |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------ |
| `--color-page`     | `#fa6d6a`                       | Solid page background (lighter coral)                                          |
| `--color-brand`    | `#fa5e5b`                       | Active tile, Next/Submit button, step-heading, dropdown hover/selected         |
| `--color-brand-hv` | `#f82d2a`                       | Button hover                                                                   |
| `--color-ink`      | `#222`                          | Text, labels, chevrons, list items, h2                                         |
| `--color-muted`    | `#adadad`                       | Inactive step tiles, Previous button bg                                        |
| `--color-line`     | `#ebebeb`                       | 1px borders: inputs, date group, list, dividers                                |
| `--color-focus`    | `#666`                          | Input focus + valid border                                                     |
| `--color-error`    | `#ff1212`                       | Error border + error icon; asterisk `#b90000`                                  |
| `--color-card`     | `#fff`                          | Card bg; radius 10px; shadow `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`             |
| `--font-body`      | 'Roboto Slab', serif            | Google Fonts 400/700; base 13px/1.6; legend 17px; h2 20px bold uppercase       |
| `--card-w`         | `630px`                         | Container width (mobile: calc(100% - 40px))                                    |
| `--signup-pad`     | `32px 90px 40px 90px`           | Form inner padding (<480px: 30px sides)                                        |
| `--tile`           | `90×90px`, radius 5px           | Step tiles; icon 29px; row space-between, mb 23px; current bg `--color-brand`  |
| `--input`          | padding `15px 20px`, radius 5px | Full-width block inputs/selects, 1px `--color-line` border                     |
| `--btn`            | `130×50px`, radius 5px          | Actions row justify-end, 10px gap, mt 25px; Previous `--color-muted`           |
| `--date-item`      | 90px borderless select          | 3 per group; chevron 30×20px hit / 10px icon; divider 1px `--color-line` 30px  |
| `--date-group`     | 266px (row) / 100% (mobile)     | 1px `--color-line`, radius 5px, space-between; pairs with 160px `.form-select` |
| `--list`           | z-index 99, radius 5px          | `ul.list-item`: `.init` pad 13px 20px + chevron `\e64b`; rows pad 5px 20px     |
| `--error-icon`     | 13px `#ff1212`                  | Absolute top 40px / right 20px of the field row (alert glyph)                  |
| `--fade`           | 300ms                           | Step transition effect                                                         |

## Requirements

### Requirement: Page shell

The system SHALL render the coral page with the centered white card, the
uppercase title, the four tile-step row, and the right-aligned action row.

#### Scenario: Coral page with card

- **GIVEN** the Dispel app is rendered on a desktop viewport
- **THEN** the page background SHALL be the solid coral `#fa6d6a`
- **AND** a white 630px card SHALL render centered horizontally with
  10px radius and the soft drop shadow `0px 3px 9.5px 0.5px
rgba(0,0,0,0.1)`
- **AND** the card SHALL contain the uppercase 20px bold centered title
  "SIGN UP OFFICE EMPLOYEE ACCOUNT" (typo fixed from the source's
  "EMPLYEE")
- **AND** the page font SHALL be Roboto Slab (400/700 from Google
  Fonts), base 13px

#### Scenario: Responsive stacking

- **GIVEN** a viewport below 768px
- **THEN** the card SHALL widen to `calc(100% - 40px)`, the step-tile row
  and form rows SHALL stack vertically, tiles SHALL become 150px wide
  and centered (margin-bottom 20px), and the date/select pairs SHALL go
  full width
- **AND** below 480px the form padding SHALL shrink to 30px on the sides

### Requirement: Step tile navigation

The system SHALL render four 90×90px step tiles (Personal, Contact,
Official, Payment) with icons, highlighting the current tile and
disabling unvisited tiles.

#### Scenario: Tile rendering and states

- **GIVEN** the Dispel app is rendered on step 1
- **THEN** the four tiles SHALL render in a space-between row with the
  icons User, Mail, Star, CreditCard (lucide) and labels Personal /
  Contact / Official / Payment (source's "Offical" typo fixed)
- **AND** the CURRENT tile SHALL have the coral `#fa5e5b` background;
  the others SHALL be grey `#adadad`; all tiles SHALL carry white icons
  and text
- **AND** each tile SHALL expose tab semantics with `aria-selected`/
  `aria-current` on the active one

#### Scenario: Visited-tile navigation

- **GIVEN** the user has visited steps 1 and 2
- **THEN** tiles 1–2 SHALL be clickable (returning to a visited step is
  allowed) and step-2's tile SHALL still be highlighted while it is the
  current step
- **AND** unvisited tiles (3–4) SHALL be disabled (`aria-disabled`,
  non-interactive) until reached

### Requirement: Panel legend

Each step panel SHALL open with a legend row: coral step heading left,
"Step N / 4" right.

#### Scenario: Legend rendering

- **GIVEN** the wizard is on step N
- **THEN** a legend SHALL render at 17px with the step heading in
  `#fa5e5b` on the left ("Personal Information:", "Contact Information:",
  "Official Information:", "Payment Information:" — source typos fixed)
- **AND** the right-aligned text SHALL read "Step N / 4" with the
  current step number

### Requirement: Registration step (step 1)

The system SHALL render the Personal step: name fields, the
day/month/year birth-date group + Gender custom list side-by-side, then
username and password.

#### Scenario: Step 1 fields

- **GIVEN** the wizard is on step 1
- **THEN** the fields SHALL render in order: `First name*`, `Last
name*`, `Date of birth` (3-select group: Day/Month/Year) + `Gender`
  custom list (Male / Female), `User name*`, `Password*`
- **AND** every required label SHALL carry a red `#b90000` asterisk
- **AND** every input SHALL be full-width with 1px `#ebebeb` border,
  5px radius, and 15px 20px padding
- **AND** the Date-of-birth group SHALL be a single bordered box
  (266px) of three 90px borderless selects with per-item chevrons and
  divider lines, and the Gender list SHALL sit in a 160px column next
  to it

#### Scenario: Date group population

- **GIVEN** the Date-of-birth group is rendered
- **THEN** the three selects SHALL default to `Day` / `Month` / `Year`
- **AND** the Day select SHALL offer 01–31, the Month select Jan…Dec,
  and the Year select the current year down to current−120

### Requirement: Contact step (step 2)

The system SHALL render the Contact step: email, phone, address, and the
Country custom list.

#### Scenario: Step 2 fields

- **GIVEN** the wizard is on step 2
- **THEN** the fields SHALL render in order: `Email*`, `Phone*`
  (number input, spinner arrows suppressed), `Address*`, `Country`
  custom list (Australia / America [value USA])

### Requirement: Official step (step 3)

The system SHALL render the Official step with four required text fields.

#### Scenario: Step 3 fields

- **GIVEN** the wizard is on step 3
- **THEN** the fields SHALL render in order: `Employee ID*`,
  `Designation*`, `Department*`, `Working hours*`

### Requirement: Payment step (step 4)

The system SHALL render the Payment step: bank name and holder, the
expiry-date group + Payment-type custom list, and the card number + CVC
pair.

#### Scenario: Step 4 fields

- **GIVEN** the wizard is on step 4
- **THEN** the fields SHALL render in order: `Bank Name*`, `Holder
Name*`, `Expiry Date` (Day/Month/Year group) + `Payment type` custom
  list (Master Card / Visa Card), then `Card Number*` (number input) +
  `CVC*` in a side-by-side row

### Requirement: Custom dropdown lists

The system SHALL render the Gender, Country, and Payment-type controls as
bespoke list widgets (not native selects, not Bootstrap).

#### Scenario: List behavior

- **GIVEN** a custom list control is rendered showing its default value
  (first option text) with a chevron
- **WHEN** the user clicks the closed control
- **THEN** the option rows SHALL open below the control (1px `#ebebeb`
  bordered list, z-index above later fields)
- **WHEN** the user clicks an option
- **THEN** the control text SHALL update to that option, the row SHALL
  highlight, and the list SHALL close
- **AND** hovering an option SHALL invert it to `#fa5e5b` with white
  text
- **AND** the control SHALL expose `aria-expanded`, `role="listbox"`/
  `role="option"` with `aria-selected` (accessible deviation — the
  source's list has no ARIA)

### Requirement: Validation-gated navigation

The system SHALL block Next/Submit while any required field on the
current step is empty, showing icon-only errors, and SHALL validate
fields on blur.

#### Scenario: Blocked step advancement

- **GIVEN** the wizard is on step 1 with all fields empty
- **WHEN** the user clicks Next
- **THEN** the step SHALL NOT advance
- **AND** every touched invalid field SHALL show a red `#ff1212` border
  and a right-aligned error icon (lucide CircleAlert, 13px `#ff1212`)
  above/right of the field
- **AND** no error text SHALL render (icon-only, matching the empty
  validate messages)

#### Scenario: Per-field validation on blur

- **GIVEN** the user types a value into a required field and leaves it
- **THEN** the field SHALL validate on blur
- **AND** a valid field SHALL flip to the `#666` valid border

#### Scenario: Advance when valid

- **GIVEN** all required fields on the current step are filled
- **WHEN** the user clicks Next
- **THEN** the next step SHALL activate with a fade transition (~300ms)
  and its tile SHALL become current

### Requirement: Action row and success

The system SHALL render the right-aligned Previous/Next/Submit row,
hiding Previous on step 1 entirely, and SHALL show an inline success
state on Submit (deviation from the source's `alert`).

#### Scenario: Button row and states

- **GIVEN** the Dispel app is rendered on step 1
- **THEN** only the coral `#fa5e5b` 130×50px "Next" button SHALL render,
  right-aligned (the Previous button is removed entirely — `display:none`
  semantics — NOT layout-reserved)
- **AND** on steps 2–4 a grey `#adadad` "Previous" button SHALL render
  to the left of the coral button (10px gap), and hovering the coral
  button SHALL darken it to `#f82d2a`

#### Scenario: Submit flow

- **GIVEN** the wizard is on step 4 and all fields are valid
- **WHEN** the user clicks Submit (the finish label overrides "Finish")
- **THEN** the wizard SHALL show an inline success panel (e.g. "Account
  created") replacing the form — no navigation, no fake network request
- **AND** the source's `alert('Sumited')` SHALL NOT be reproduced (an
  inline success state is the documented deviation)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (deviation from the source,
which removes all focus outlines, labels fields only visually, and gives
the list widget no ARIA).

#### Scenario: Semantics

- **GIVEN** the Dispel app is rendered
- **THEN** the step panels SHALL expose `role="tabpanel"` semantics with
  labelled tabs, every field SHALL have a programmatic label
  (`<label htmlFor>` / `aria-label`), required fields SHALL expose
  `aria-required`
- **AND** the custom lists SHALL be listbox/option widgets with
  `aria-expanded`/`aria-selected`
- **AND** field errors SHALL be announced (`aria-invalid` + the error
  icon with `role="alert"` or `aria-live`), and visible focus-visible
  rings SHALL appear on all interactive elements

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Dispel app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/ branded
  as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- dispel` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-11/index.html:
      coral `#fa6d6a` page, white 630px rounded card, uppercase title,
      four grey/coral square step tiles with icons, bordered inputs with
      red asterisks, day/month/year bordered group + custom list
      side-by-side, right-aligned coral Next (no Previous on step 1),
      error states (red border + alert icon) on invalid fields.
- [ ] Behavior check: Next is blocked on empty steps; blur-validated
      fields flip to `#666`; visited tabs clickable, unvisited disabled;
      Submit shows the inline success state.
- [ ] Responsive check at 767px and 479px (stacked tiles/rows,
      full-width date group, reduced padding).
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
- [ ] Icon exports probed with
      `node -e "console.log(typeof require('lucide-react').X)"` for
      every mapped icon before use.

# Template: Beguile (Circle-Steps Sign-Up Wizard)

## Purpose

Beguile is a single-page THREE-STEP SIGN-UP WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 16" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-16/), built under a
DIFFERENT name (**Beguile**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery Steps wizard (`vendor/jquery-steps/jquery.steps.min.js`

- jquery.validate): an 850px white card (10px radius, soft shadow) centered
  on a TEAL-WASHED lifestyle PHOTO background (`images/body-bg.jpg` — three
  women laughing with drinks in front of an urban graffiti wall, the whole
  photo tinted seafoam-green). A numbered-circle step header — **1 Account
  Information / 2 Personal Information / 3 Payment Details** — sits at the
  top of the card; the panels slide left/right (slideLeft transition). Step
  1 collects Username / Email / Password (with a live password-strength
  meter) / avatar file upload; Step 2 collects Full name / Country / Gender
  (tiles) / About us; Step 3 collects Payment Type (Visa-Mastercard-PayPal
  tiles), Credit Card, CVC, Expiration Date (two selects), Name of card.
  Next/Submit are teal `#1abc9c` 150×50 buttons; Previous is a grey
  `#f8f8f8` button hidden on the first step. The whole page is one card
  plus the photo backdrop — no navbar, no other sections, no footer content
  in the source.

Source slug: `colorlib-wizard-16` (TEMPLATES.md line 853; the section
"## Bootstrap Wizards (30)" starts at line 844; the slug appears exactly
ONCE — verified `grep -c 'wp/template/colorlib-wizard-16'` = 1 — no dup
rows to reconcile).

Preview URL (REACHABLE, verified 2026-08-18 by direct fetch): the naive
`https://preview.colorlib.com/theme/colorlib-wizard-16/` returns 404 (the
whole 30-member family 404s on the standard path — do NOT re-probe it);
the REAL preview is the family path
**`https://colorlib.com/etc/bwiz/colorlib-wizard-16/index.html`**
(HTTP 200, 8,885 bytes, 183 lines, `<title>Sign Up Form</title>`). Same
`/etc/bwiz/` pattern as wizard-1/10/11/12/13/14/15 — preps for those exist
(Conjure, Banish, Dispel, Abjure, Bewitch, Enthrall, Spellbind), same
lookup, do not redo this research.

Section order (1:1 with the source):

1. Page shell (photo background + white card + centered uppercase header)
2. Step navigation (numbered circles + separators)
3. Step 1 — Account Information (Username, Email, Password + strength, avatar)
4. Step 2 — Personal Information (Full name, Country, Gender tiles, About us)
5. Step 3 — Payment Details (Payment Type tiles, Credit Card, CVC, Expiry, Name of card)
6. Step footer ("Step X of 3") + action buttons (Previous / Next / Submit)
7. Success state (inline confirmation on finish)
8. Component Dock footer (recreation addition; source has no footer)

## Naming

The ColorLib source name "Colorlib Wizard 16" is FORBIDDEN as the app name
(and "wizard" itself must not be reused). **Beguile** is the new, original
name — single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-08-18: zero hits for `beguile` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`). It continues the magic-practice
word chain established by the wizard family preps: Conjure (1) → Evoke (2)
→ Summon (3) → Invoke (4) → Enchant (5) → Charm (6) → Hex (7) → Bless (8)
→ Curse (9) → Banish (10) → Dispel (11) → Abjure (12) → Bewitch (13) →
Enthrall (14) → Spellbind (15) → **Beguile (16) = wizard-16, the 16th
member**. The names reserved by the chain for members 2–9 (Evoke, Summon,
Invoke, Enchant, Charm, Hex, Bless, Curse) are NOT reused for this prep.
Source slug + preview URL are recorded in Purpose above.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 16" (page title: "Sign Up
  Form"). Member 16 of colorlib-wizard-1 … 30, listed in TEMPLATES.md
  under **Bootstrap Wizards (30)**. Beguile's scheme is a SIXTH family
  scheme: photo bg (lifestyle, teal-washed), 850px white card, jQuery
  Steps with numbered CIRCLE nav (done steps show a checkmark), teal
  `#1abc9c` accent, real (gated) validation on steps 1–2, file upload +
  password strength + payment tiles. Sibling schemes: Conjure (w1:
  cream/olive, dot nav), Banish (w10: photo bg, #333, progress bar),
  Dispel (w11: coral page, square tiles, gated), Abjure (w12: sky-blue
  page, hidden nav, single-field steps), Bewitch (w13: photo bg, orange
  #f65300, accordion panels, un-gated).
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch):**
  `https://colorlib.com/etc/bwiz/colorlib-wizard-16/index.html` (HTTP
  200, 8,885 bytes, 183 lines). Stylesheets: `css/style.css` (21,015
  bytes, 756 lines — ALL custom styling, SCSS-compiled),
  `fonts/material-icon/css/material-design-iconic-font.min.css` (zmdi
  icon font — glyphs `\f26b` check (done-step circle), `\f2f9`
  chevron-down (selects); REPLACE with lucide, do NOT ship the font).
  Fonts: local @font-face **Roboto Slab** 300/400/700 → **Google Fonts
  `<link>` (400, 700 — 300 is loaded by the CSS but unused by the demo)**.
  Scripts: `vendor/jquery/jquery.min.js`,
  `vendor/jquery-validation/dist/jquery.validate.min.js` +
  `additional-methods.min.js` (ACTIVE — real rules, see Behaviors),
  `vendor/jquery-steps/jquery.steps.min.js` (the step engine),
  `vendor/minimalist-picker/dobpicker.js` (populates the two expiry
  selects, see the Step 3 anomaly below),
  `vendor/jquery.pwstrength/jquery.pwstrength.js` (password meter),
  `js/main.js` (2,440 bytes: validate init + steps init + dobPicker init +
  pwstrength init + fake-path file-upload label).
- **Live DOM structure (from the fetched HTML; jQuery Steps wraps the
  fieldsets at runtime — the served HTML is the raw pre-wizard markup):**
  - `body` (bg photo `images/body-bg.jpg` cover/center, Roboto Slab
    14px/1.6, `#222`, weight 400) → `div.main` (padding 95px 0) →
    `div.container` (width 850px, `margin: 0 auto`, bg `#fff`,
    **border-radius 10px**, shadow `0px 5px 9.5px 0.5px rgba(0,0,0,0.1)`;
    ≤992px: `calc(100% - 40px)`, max-width 100%) → `h2` (20px bold
    uppercase, centered, padding-top 35px, margin 0) "Sign up to great
    new account" → `form#signup-form.signup-form` (padding 0 20px,
    relative) → three `h3` step titles (display:none inside the content
    area at runtime — they only render in the steps nav) each followed by
    a `fieldset` (no border, padding 0):
    - **Fieldset 1 — Account Information:** `div.fieldset-content`
      (height 465px, border-bottom 1px `#ebebeb`, padding-right 110px):
      `div.form-group` Username (text, placeholder "User Name"); Email
      (email, "Your Email"); Password (password, `data-indicator=
"pwindicator"`) + `div#pwindicator` (the pwstrength meter markup:
      `div.bar-strength > div.bar-process > div.bar` + `div.label`);
      `div.form-group` "Select avatar" + `div.form-file` (width 488px,
      relative) → hidden `input[type=file]` (opacity 0, height 50px) +
      `span#val` (345×50 filename display) + `span#button` (130×50
      "Select File").
    - **Fieldset 2 — Personal Information:** `div.fieldset-content`:
      `div.form-group` Full name (text, "Full Name"); `div.form-select`
      Country (`select#country`: options Country / Australia / America —
      "America" renders the value "USA"); `div.form-radio` Gender →
      `div.form-radio-item` with two hidden radios (male `checked`) +
      labels "Male"/"Female" (85×50 tiles); `div.form-textarea` About us
      (`textarea` 150px tall × 534px wide, "Who are you ...").
    - **Fieldset 3 — Payment Details:** `div.fieldset-content`:
      `div.form-radio` Payment Type → `div.form-radio-flex` with three
      hidden radios (payment_visa `checked`) + labels each wrapping a
      brand img (`icon-visa.png` / `icon-master.png` / `icon-paypal.png`,
      alt "") — 86×50 transparent tiles; `div.form-row` (padding-left
      80px; credit card group floats left, CVC floats right) → Credit
      Card (text, 275px), CVC (text, 143px); `div.form-date` Expiration
      Date → `div.form-flex` with two `div.form-date-item` (relative,
      overflow hidden): `select#expiry_date` (86px) + chevron icon,
      `select#expiry_year` (104px) + chevron icon; `div.form-group` Name
      of card (text, full 534px). All fieldset-3 inputs/selects are
      534px wide by default (`#signup-form-p-2` rule) except credit_card
      (275px) and cvc (143px).
    - Each fieldset ends with `div.fieldset-footer` (padding 28px 0) →
      `span` "Step X of 3" (`#999`).
  - **jQuery Steps runtime chrome** (generated, not in the served HTML):
    `.steps` nav (border-top+bottom 1px `#ebebeb`, padding 12px 20px)
    with one `li` per step, each `a` → `div.title` (flex, centered) →
    `span.number` (31×31 circle, 2px `#999` border, radius 50%,
    margin-right 15px) + step title text; 1px `#ebebeb` 30px vertical
    separators between items (right 18px); `.actions` (absolute, bottom
    14px, right 0, padding 0 20px, flex-end) with one `li` per button:
    Previous (`.actions ul li:first-child a` — grey) + Next/Finish
    (teal). `.disabled` actions are `display: none` (Previous hidden on
    step 1). `.content` wraps fieldsets; `.content .current` has
    padding-top 60px; step `h3`s are `display: none` inside content.
  - **No h1, no nav element, no footer, no links** in the flow. The only
    images in the source: the body photo + three payment brand PNGs (not
    shipped in the recreation) + the zmdi icon font.
- **Behaviors (all verified 2026-08-18 from the fetched HTML/CSS/JS + the
  browser):**
  - **Step engine:** jQuery Steps (`headerTag: h3`, `bodyTag: fieldset`,
    `transitionEffect: slideLeft`, labels Previous/Next/Finish("Submit")).
    Moving forward runs `onStepChanging` → `form.validate().settings.ignore
= ":disabled,:hidden"` then `return form.valid()` — **the next step is
    BLOCKED until the current step's fields are valid** (real gate, unlike
    Bewitch's un-gated w13). Finishing (`onFinishing`) re-validates with
    `ignore: ":disabled"` and `onFinished` shows `alert('Sumited')`.
  - **Validation (jquery.validate):** rules — `username: { required }`,
    `email: { required, email }`. All OTHER validator messages are
    emptied (`required: ""`, `date: ""`, `number: ""`, `digits: ""`,
    `creditcard: ""`, `equalTo: ""`, ...) so the ONLY visible error is the
    custom email one: `"Not a valid email address"` + a zmdi-info glyph,
    rendered 11px `#ff0000` `label.error` positioned absolute right 92px
    BEFORE the input (`errorPlacement: element.before(error)`); the input
    gains `input.error` = 1px solid `#ff0000` border. `onfocusout`
    validates the blurred element immediately. Required-empty fields show
    NO message (empty text) but still get the red error class and block
    the next step. Recreation: same rules, same single visible message
    (icon via lucide), same gating.
  - **Password strength (jquery.pwstrength):** `#password` gets
    `data-indicator="pwindicator"`; the meter is a 60×15px `#f8f8f8`
    track (radius 8px, absolutely positioned right 193px at vertical
    center of the row) with an inner `div.bar` + an 11px `div.label`
    text. Levels (`.pw-very-weak/.pw-weak`: bar `#d00` 25px, label
    `#d00`; `.pw-mediocre`: bar `#fca812` 35px; `.pw-strong`: bar
    `#fca812` 42px; `.pw-very-strong`: bar `#1abc9c` 100%, label
    `#1abc9c`). Bar widths are FIXED percentages of the 60px track
    (25/25/35/42/100 — not proportional to length). Recreation: same 5
    levels/colors/widths, labels for weak/medium/strong/very strong.
  - **Avatar upload:** the file input is invisible (opacity 0, 50px
    tall); `#button` ("Select File") triggers a click on it; on change,
    `#val` shows the filename with the `C:\fakepath\` prefix stripped.
    Recreation: a custom UploadButton (lucide Upload icon) + a filename
    readout; actual file content is NOT sent anywhere (client-side only).
  - **Expiry selects (dobPicker):** `$.dobPicker` binds
    `daySelector: '#expiry_date'`, `yearSelector: '#expiry_year'` and
    `monthSelector: '#expiry_month'` — **`#expiry_month` does NOT exist in
    the HTML** (demo bug): the page renders DAY + YEAR selectors (DD
    01..31 zero-padded; YYYY, currentYear−120..currentYear) with
    placeholders "DD"/"YYYY". A card expiry with a DAY picker is
    semantically wrong; the evident intent (label "Expiration Date",
    two dropdowns, payment context) is MONTH + YEAR. **Recreation:
    render Month (MM, Jan..Dec) + Year (YYYY) selects — documented
    deviation from the buggy demo.**
  - **Submit:** `onFinished` = `alert('Sumited')` and the form has no
    `action` (a POST to the same URL if submitted natively). Recreation:
    inline success state (form hidden/replaced by a confirmation message),
    no alert, no fake network (per monorepo convention).
  - **Step nav:** done steps show a teal circle with a CHECK glyph
    (`\f26b` in zmdi, 14px, centered) and teal title text; the current
    step shows a `#222` circle + `#222` bold title; future steps show
    `#999` circles + `#999`. jQuery Steps allows clicking a previous
    (done) step to go back; validation still runs on that transition
    (onStepChanging returns `form.valid()`).
  - **Source typos are content, not corruption:** "Sign up to great new
    account " (trailing space), "Account Infomation" (sic). The
    recreation SHOULD correct "Infomation" → "Information" (documented
    deviation — content-kind latitude), keep the headline text.
- **Screenshot (`colorlib-free-wizard-16.jpg`, 1200×972 AVIF; the
  TEMPLATES.md row embeds a downscaled copy), viewed 2026-08-18 in the
  browser:** a browser window (Chrome, macOS) showing the page: the
  background is the SAME lifestyle photo as `body-bg.jpg` — three women
  laughing with drinks in front of a grey/white abstract graffiti wall
  with green foliage in the upper right — heavily BLURRED and washed in
  teal/seafoam green so it reads as a soft textured backdrop that makes
  the card pop. Center: a clean white card. Top of the card: uppercase
  dark header "SIGN UP TO GREAT NEW ACCOUNT"; below it a row of THREE
  CIRCLES — step 1 filled dark (black, white numeral), steps 2–3 as grey
  outlined circles with grey numerals — each labelled (Account
  Information / Personal Information / Payment Details). The body of the
  card shows Step 1's form: four fields in two columns of label+input
  rows (Username/Email/Password/Select avatar with a grey "Select File"
  button), light grey field borders, dark labels. Bottom-left small grey
  text "Step 1 of 3"; bottom-right a rectangular teal/green "Next"
  button. Aesthetic: modern, minimalist, clean, flat white card on a
  tinted photo — the family's teal counterpart to Bewitch's orange.
  **Exactly ONE photo (the body background) — everything else is CSS +
  the zmdi icon font + three payment brand PNGs (cards/branding not
  shipped).** No navbar, no footer content in the source.

## Design tokens

| Token              | Value                          | Notes                                                                                     |
| ------------------ | ------------------------------ | ----------------------------------------------------------------------------------------- |
| `--color-accent`   | `#1abc9c`                      | Teal/mint: Next/Submit button bg (hover `#148f77`), checked gender tile bg,               |
|                    |                                | checked payment-tile border, done-step circle + check, pwstrength very-strong bar/label   |
| `--color-card`     | `#fff`, 850px                  | `margin: 0 auto`; radius **10px**; shadow `0px 5px 9.5px 0.5px rgba(0,0,0,0.1)`;          |
|                    |                                | ≤992px: `calc(100% - 40px)`, max-width 100%; `.main` padding 95px 0                       |
| `--color-well`     | `#f8f8f8`                      | Previous button bg, Select File button bg, pwstrength track bg, hover `#dfdfdf`           |
| `--color-ink`      | `#222`                         | Body text, h2 header, labels, current-step circle/title                                   |
| `--color-idle`     | `#999`                         | Placeholders, step-title idle text, unchecked circle border, Step X of 3 footer,          |
|                    |                                | Select File text, select text, chevron icons                                              |
| `--color-line`     | `#ebebeb`                      | Input/select/textarea borders (1px), steps nav top/bottom rules, fieldset bottom rule,    |
|                    |                                | step separators (1px × 30px)                                                              |
| `--color-error`    | `#ff0000`                      | `label.error` (11px, absolute right 92px) + `input.error` 1px solid border;               |
| `--color-strength` | `#d00` / `#fca812` / `#1abc9c` | pwstrength bar+label: weak red, medium/strong orange, very-strong teal                    |
| `--font-body`      | 'Roboto Slab', serif           | Google Fonts 400/700 (source local @font-face 300/400/700; 300 unused);                   |
|                    |                                | base 14px/1.6, weight 400, `#222`                                                         |
| `--input`          | 1px `--color-line` border      | radius **5px**, padding 15px 20px, 14px, weight bold, width 345px, `--color-well`-less    |
|                    |                                | transparent bg; placeholder `--color-idle` weight 400; focus: no outline/shadow (source)  |
|                    |                                | + recreation adds focus-visible ring per a11y convention (documented)                     |
| `--label`          | width 155px, right-aligned     | margin-right 27px; step-3 row labels width auto; mobile ≤768px: full width, left, mb 15px |
| `--steps-nav`      | `li` padding-right 80px        | 1px `--color-line` 30px separators (last none); title bold `--color-idle`; current        |
|                    |                                | `--color-ink`; done `--color-accent`; circle 31×31, 2px border (idle `--color-idle`,      |
|                    |                                | current `--color-ink`, done `--color-accent` + check glyph 14px), radius 50%,             |
|                    |                                | margin-right 15px; nav bordered top+bottom 1px `--color-line`, padding 12px 20px          |
| `--fieldset`       | content height 465px           | border-bottom 1px `--color-line`, padding-right 110px; content padding-top 60px;          |
|                    |                                | footer "Step X of 3" `--color-idle`, padding 28px 0; actions absolute bottom 14px,        |
|                    |                                | right 0, padding 0 20px                                                                   |
| `--btn`            | 150×50px, radius 5px           | Next/Submit: accent bg, `#fff` bold, no border; hover `#148f77`. Previous:                |
|                    |                                | `--color-well` bg, `--color-idle` text, hover `#dfdfdf`; hidden (`.disabled`) on step 1   |
| `--radio-tile`     | 85×50px, radius 5px            | Gender: `--color-well` bg; source text color is also `#f8f8f8` (INVISIBLE until           |
|                    |                                | checked — bug-like; recreation shows idle text `--color-idle` for usability, documented); |
|                    |                                | checked: accent bg + `#fff`; left tile radius 5px 0 0 5px, right tile 0 5px 5px 0         |
| `--radio-flex`     | 86×50px, border 1px line       | Payment type: transparent bg, brand glyphs (inline SVG/text badges — source PNGs not      |
|                    |                                | shipped; lucide has NO brand icons); checked: 1px accent border; hover border accent      |
| `--file-pick`      | 488px form area                | hidden input (opacity 0, 50px); `#val` 345×50 (1px line border, radius 5px, bold          |
|                    |                                | filename); `#button` 130×50 `--color-well`, `--color-idle` text, hover `#dfdfdf`          |
| `--pw-meter`       | 60×15px track, radius 8px      | `--color-well` bg, absolute right 193px, vertical-center; bar widths 25/25/35/42/100px;   |
|                    |                                | hidden ≤992px; label 11px colored by level                                                |
| `--expiry-selects` | 86px + 104px                   | chevron-down icon 22px `--color-idle` right 10px (select z-index 10 over icon);           |
|                    |                                | mobile ≤480px: full width, mb 10px; **Month+Year for the recreation (see anomaly)**       |
| `--page-bg`        | PHOTO (cover, center)          | `images/body-bg.jpg` (1900×1276) — 3 women + graffiti wall, TEAL wash, blurred behind     |
|                    |                                | the card; recreation: ONE subject-screened picsum placeholder + CSS duotone (plan in      |
|                    |                                | docs/templates/beguile)                                                                   |
| `--validate`       | GATED                          | username required; email required+format. Only visible error: email message + zmdi-info   |
|                    |                                | icon. Required-empty shows nothing (emptied messages) but blocks Next.                    |
| `--success`        | inline confirmation            | Source: `alert('Sumited')` on finish. Recreation: inline success state, no alert,         |
|                    |                                | no fake network                                                                           |

## Requirements

### Requirement: Page shell

The system SHALL render the photo-background page with the centered white
card holding the sign-up wizard.

#### Scenario: Photo background and card

- **GIVEN** the Beguile app is rendered on a desktop viewport
- **THEN** the page background SHALL be a single full-bleed photo
  (cover, centered) — an urban/lifestyle scene with a teal/duotone wash,
  blurred behind the card (picsum placeholder + CSS filter, screened per
  docs/templates/beguile; the source photo is NOT shipped)
- **AND** a white 850px card SHALL render centered with 95px vertical
  padding above and below it
- **AND** the card SHALL have a 10px radius and the shadow
  `0px 5px 9.5px 0.5px rgba(0,0,0,0.1)`
- **AND** the page font SHALL be Roboto Slab (400/700 via Google Fonts),
  14px/1.6, `#222`
- **AND** the card header SHALL render "Sign up to great new account"
  (20px, bold, uppercase, centered, `#222`)

#### Scenario: Responsive card

- **GIVEN** a viewport at or below 992px
- **THEN** the card SHALL widen to `calc(100% - 40px)` with
  `max-width: 100%` and no horizontal overflow
- **AND** the password-strength meter SHALL be hidden

### Requirement: Step navigation

The system SHALL render the three numbered-circle step tabs in order,
with step 1 active on load, and SHALL mark completed steps with a
checkmark.

#### Scenario: Step tabs and states

- **GIVEN** the Beguile app is rendered
- **THEN** three step tabs SHALL render in order: "Account Information",
  "Personal Information", "Payment Details" (typo corrected from the
  source's "Account Infomation" — documented deviation), separated by
  1px `#ebebeb` vertical rules, inside a nav bordered top+bottom by 1px
  `#ebebeb`
- **AND** each tab SHALL be a 31×31 circle (2px border, radius 50%) with
  its step number + the step title beside it
- **AND** the CURRENT step SHALL be black (`#222` circle + title); future
  steps SHALL be grey (`#999`); completed steps SHALL be teal
  (`#1abc9c` circle with a checkmark icon + teal title)
- **AND** step 1 SHALL be the current step on load

#### Scenario: Step navigation behavior

- **GIVEN** the wizard is on step 1 with the required fields filled
- **WHEN** the user activates "Next"
- **THEN** the wizard SHALL advance to step 2 with a slideLeft transition,
  step 1 SHALL become a completed (checkmarked) step, and step 2 SHALL
  become current
- **AND** the same SHALL apply advancing step 2 → step 3
- **WHEN** the user activates "Previous" on step 2 or 3
- **THEN** the wizard SHALL return to the previous step
- **AND** activating a completed step tab SHALL navigate back to it
  (validation of the current step still applies per gating rules)
- **AND** each step's footer SHALL read "Step X of 3" (`#999`)

### Requirement: Step 1 — Account Information

The first step SHALL collect Username, Email, Password (with live
strength meter) and an avatar file selection.

#### Scenario: Account fields

- **GIVEN** step 1 is current
- **THEN** fields SHALL render in order: "Username" (text, placeholder
  "User Name"), "Email" (type=email, placeholder "Your Email"),
  "Password" (type=password) and "Select avatar" (file picker)
- **AND** each field SHALL be a 14px bold input (1px `#ebebeb` border,
  5px radius, padding 15px 20px, width 345px on desktop) with its label
  to its left (right-aligned, 155px wide)

#### Scenario: Password strength meter

- **GIVEN** the Password field is rendered
- **THEN** a 60×15px `#f8f8f8` meter track (8px radius) SHALL render at
  the right side of the password row
- **WHEN** the user types a password
- **THEN** the meter SHALL fill per the source's fixed level widths and
  colors: very weak/weak `#d00` (25px), mediocre `#fca812` (35px),
  strong `#fca812` (42px), very strong `#1abc9c` (100%)
- **AND** a colored level label SHALL render beside the bar, and the
  meter SHALL be hidden at ≤992px

#### Scenario: Avatar upload

- **GIVEN** the Select avatar field is rendered
- **THEN** a 345×50 filename display (1px `#ebebeb` border, 5px radius)
  and a 130×50 grey "Select File" button SHALL render
- **WHEN** the user activates "Select File"
- **THEN** a file picker SHALL open (native input), and after choosing a
  file the display SHALL show the filename (the source strips the
  `C:\fakepath\` prefix; no file content is sent anywhere — client-side
  only)

### Requirement: Step 2 — Personal Information

The second step SHALL collect Full name, Country, Gender and About us.

#### Scenario: Personal fields

- **GIVEN** step 2 is current
- **THEN** fields SHALL render in order: "Full name" (text, placeholder
  "Full Name"), "Country" (select with placeholder option "Country" and
  options "Australia" and "America" [value USA]), "Gender" (two radio
  tiles "Male" and "Female", Male selected by default) and "About us"
  (textarea, 150px tall × 534px wide, placeholder "Who are you ...")
- **AND** every field SHALL use the same input styling as step 1
- **AND** the Gender tile text SHALL be readable in the idle state
  (`#999` — the source renders it `#f8f8f8` on `#f8f8f8`, i.e. invisible
  until checked; recreation fixes this for usability, documented)

#### Scenario: Gender tiles

- **GIVEN** the Gender field is rendered
- **WHEN** the user activates the Female tile
- **THEN** Female SHALL become selected (teal `#1abc9c` background,
  white text) and Male SHALL deselect (grey well)
- **AND** the radios SHALL be accessible by name
  (`getByRole('radio', { name: 'Male' })`) with proper `aria-checked`

### Requirement: Step 3 — Payment Details

The third step SHALL collect Payment Type, Credit Card, CVC, Expiration
Date and Name of card.

#### Scenario: Payment fields

- **GIVEN** step 3 is current
- **THEN** fields SHALL render in order: "Payment Type" (three radio
  tiles Visa / Mastercard / PayPal with inline SVG/text badges — the
  source brand PNGs are not shipped; Visa selected by default), a row of
  "Credit Card" (275px) and "CVC" (143px), "Expiration Date" (two
  selects) and "Name of card" (full-width 534px)
- **AND** all step-3 inputs SHALL be 534px wide by default except
  credit card and CVC
- **AND** the selected payment tile SHALL show a 1px teal
  `#1abc9c` border and hovering a tile SHALL tint its border teal

#### Scenario: Expiration Date selects

- **GIVEN** the Expiration Date field is rendered
- **THEN** two selects SHALL render side by side — MONTH (MM + Jan..Dec)
  and YEAR (YYYY + a sensible future range) — each with a chevron-down
  icon on its right
- **AND** each select SHALL show a placeholder ("MM" / "YYYY") as the
  default with no value
- **NOTE:** the source demo renders DAY + YEAR because its dobPicker
  binds a non-existent `#expiry_month` selector (html bug). The
  recreation renders Month + Year per the evident intent of a card
  expiration field — documented deviation.

### Requirement: Validation gating

The system SHALL require a non-empty Username and a valid Email before
the user can leave step 1, mirroring the source's jquery.validate rules.

#### Scenario: Blocked advance on invalid step 1

- **GIVEN** step 1 is current and the Username is empty
- **WHEN** the user activates "Next"
- **THEN** the wizard SHALL NOT advance
- **AND** the offending inputs SHALL get a 1px `#ff0000` border and an
  11px red error label SHALL render (empty required messages stay
  invisible per the source — only the email's message text shows:
  "Not a valid email address" with an info icon)
- **AND** entering a valid email SHALL clear its error on blur
  (onfocusout validation)

#### Scenario: Free navigation after validity

- **GIVEN** step 1 is valid (username non-empty, email well-formed)
- **WHEN** the user activates "Next"
- **THEN** the wizard SHALL advance to step 2
- **AND** steps 2 and 3 SHALL NOT block advancement (no rules on their
  fields — faithful to the source)

### Requirement: Submit and success

The system SHALL finish the wizard with an inline success state (the
source shows `alert('Sumited')`).

#### Scenario: Finish

- **GIVEN** the user is on step 3
- **WHEN** the user activates "Submit"
- **THEN** the wizard SHALL complete and an inline confirmation message
  SHALL render (replacing or above the form, e.g. "Thanks — your signup
  was submitted!")
- **AND** no alert dialog and no fake network request SHALL occur,
  and the Previous button SHALL be hidden on the last step

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (recreation improvement:
the source removes focus outlines and ships no ARIA).

#### Scenario: Semantics

- **GIVEN** the Beguile app is rendered
- **THEN** every field SHALL have a programmatic label (`<label htmlFor>`)
  and error state SHALL be associated with the field (`aria-describedby`
  or `role="alert"`)
- **AND** the step tabs SHALL expose `role="tablist"`/`tab` semantics or
  an equivalent (`aria-selected`/`aria-current`); the wizard region SHALL
  be labelled ("Beguile sign-up wizard")
- **AND** the gender and payment radios SHALL expose accessible names and
  states (`aria-checked`); the file picker SHALL be operable by keyboard
  with a visible focus ring
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (tabs, inputs, selects, tiles, buttons)

### Requirement: Footer

The system SHALL include the required attribution footer (the source has
no footer content).

#### Scenario: Component Dock credit

- **GIVEN** the Beguile app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- beguile` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-16/index.html:
      teal-washed lifestyle photo background, white 850px card (10px
      radius, soft shadow), centered uppercase header, three
      numbered-circle tabs (current black / done teal with checkmark /
      future grey, 1px separators), "Step X of 3" footer, teal 150×50
      Next/Submit buttons, grey Previous hidden on step 1, grey "Select
      File" button + filename display, password-strength meter, side-by-
      side gender tiles, 534px step-3 inputs with 275/143px credit
      card/CVC, two expiry selects + chevrons, payment tiles (teal
      border on selected).
- [ ] Behavior check: step 1 blocks Next until username + valid email;
      email shows the red "Not a valid email address" message; steps 2–3
      un-gated; Previous returns; done-step tabs navigate back; Submit
      shows the inline success message; file picker shows the chosen
      filename; password meter fills red → orange → teal; no alerts, no
      network calls.
- [ ] Responsive check at 992px / 768px / 600px / 480px (card
      `calc(100% - 40px)`, meter hidden ≤992, labels stack above fields
      ≤768, buttons/selects go full width, no horizontal overflow).
- [ ] No ColorLib strings in any app file; footer links
      https://www.componentdock.com/; provenance lives only in this
      spec, TEMPLATES.md, and the PR.

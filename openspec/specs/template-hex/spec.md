# Template: Hex (Bootstrap Wizards — Multi-step Account Signup)

## Purpose

Hex is a three-step account-registration wizard in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Wizard 23" template design (see TEMPLATES.md line 861; source slug
`wp/template/colorlib-wizard-23/`), built under a DIFFERENT name (Hex — a
single lowercase word from the wizard/magic naming theme of the sibling
wizard preps: Conjure, Conjury, Banish, Dispel, Abjure, Bewitch, Enthrall,
Spellbind, Beguile, Mesmerize, Incant, Stepwise, Enchant, Grimoire, Rune; a
"hex" is a spell — no collision with `apps/`, `openspec/specs/`, or
`docs/templates/`, checked 2026-08-18 against origin/main) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/colorlib-wizard-23/
(https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-23.jpg).
Category: Bootstrap Wizards — one of the 30 ColorLib "Wizard" mini-templates.

Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-23/ — **404**
(known wizard-family pattern — do NOT re-probe the naive URL; same hosting as
the Rune/Grimoire/Enchant preps). The real demo lives at
https://colorlib.com/etc/bwiz/colorlib-wizard-23/index.html (HTTP 200,
~10.9 KB HTML, `<title>Wizard-v3</title>`, `css/style.css` 14.9 KB parsed for
tokens, `js/main.js` 1.3 KB, `css/roboto-font.css` local Roboto @font-face).
The screenshot in TEMPLATES.md (`colorlib-free-wizard-23.jpg`, 1200×972,
analyzed in the browser) matches the demo.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 23" — a single-page three-step
  account-signup wizard (About → Personal → Payment). The whole page is one
  white card (`780px` wide, radius 10px, shadow `0 8px 20px rgba(0,0,0,.15)`,
  vertical margin 110px, 180px 20px ≤1199px, 90% width ≤575px) floating on a
  full-bleed mesh-gradient background image (`images/wizard-v3.jpg`, 1400×1042,
  cover). Sampled stops: top-left `#fc8fa2`, top-mid `#efcbfb`, top-right
  `#9ae7f9`, center `#edaaf1`, mid-left `#ff4f98`, mid-right `#54f5e6`,
  bottom-left `#39b6f8`, bottom-mid `#19d9ee`, bottom-right `#00f3dd` — a
  warm pink/magenta left-top → cool cyan/teal right-bottom diagonal gradient
  (recreate in CSS — no image asset copied; the cyan end matches the brand
  accent `#24c1e8`). The card is a single full-width column (no left photo
  panel, unlike wizard-22). Stack is jQuery + jquery.steps + jQuery UI, NOT
  Tailwind. All interactivity must be recreated client-side in React (no
  jQuery).
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-23/index.html
  (HTTP 200; `css/style.css` 14.9 KB; `js/main.js` 1.3 KB; shared wizard-family
  CSS — includes unused rules for h4/#checkbox/`.pay-1-label` variants not
  present in this HTML). Structure: `div.page-content` (bg image, flex-centered)
  > `div.wizard-v3-content` (white card, flex) > `div.wizard-form` >
  > `div.wizard-header` (`h3.heading` "Sign Up Your User Account" + `p` "Fill
  > all form field to go next step") > `form.form-register` > `div#form-total`
  > with three `h2` (icon span + step-text span) + `section` pairs (jquery-steps
  > turns each into a step; the `h2` also becomes the circle indicator):
  - **Step 1 "About"** (zmdi-account icon): `h3` "Account Information:" then
    four full-width floating-label inputs (`.form-row-inner` label wrapper:
    input + floating `.label` span + `.border` underline span): **Email
    Address**, **Username**, **Password** (type=password), **Comfirm Password**
    (source typo — fix to "Confirm Password"). All `required`, no visible
    labels (floating labels).
  - **Step 2 "Personal"** (zmdi-lock icon): `h3` "Personal Information:" then
    First Name + Last Name side-by-side (50/50, labels with `*`),
    Gender radios (`#radio`: "Gender*:" + Male checked + Female), Date of
    Birth (`form-row-date`: three selects Day `16…19` / Month `Feb…May` /
    Year `2013…2017`, disabled "Day/Month/Year" placeholders), Phone Number
    (full-width floating label), Address (full-width floating label).
  - **Step 3 "Payment"** (zmdi-card icon): `h3` "Payment Information:" then
    payment-method cards (two `190×95px` bordered boxes, hidden radios: Credit
    Card checked × `pay-1` with icon image; Paypal × `pay-2` with icon image),
    Holder Name (full-width floating label), Card Number + CVC side-by-side
    (floating labels), Expiry Date (Month + Year selects), and a **summary
    table** (`.table-responsive > table.table`): rows Full Name / Email
    Address / Phone Number / User / Gender / Address / Card Type (static
    "Credit Card"); the value cells (`#fullname-val`, `#email-val`, ...) are
    filled live by `onStepChanging`. `.actions` bar: **Previous** (grey,
    `display` normal here — unlike wizard-22 it is NOT hidden; margin-left
    60.9% pushes it right, 0 ≤991px) and **Next Step**/**Submit** (140×45px
    cyan rectangle, 120px wide ≤575px). Icons are Material Design Iconic Font
    glyphs (zmdi-account/lock/card + chevron bg-image on selects) — recreate
    with lucide-react.
- **Screenshot note:** `colorlib-free-wizard-23.jpg` (1200×972, viewed in the
  browser): full-screen pink/magenta → mint/cyan mesh gradient; white rounded
  card centered; heading "Sign Up Your User Account" + subtitle; below it
  three circular step indicators (step 1 bright cyan/blue with a white
  user icon, steps 2–3 grey circles with lock/card icons, labels About /
  Personal / Payment; a connector line links the circles); four underlined
  (bottom-border only) inputs with floating labels (Email Address, Username,
  Password, Confirm Password); bottom-right a cyan pill-ish "Next Step"
  button. The live demo matches the screenshot (gradient image + identical
  card; the demo's 3-step structure is authoritative — the vision pass
  suggested a phantom 4th "Confirm" step, which does not exist in the DOM).

### Design tokens (from css/style.css + image sampling)

- **Background:** full-bleed mesh gradient (JPEG in source; recreate in CSS —
  do NOT copy the image): pink/magenta top-left → lavender center → cyan/teal
  bottom-right. Sampled stops: `#fc8fa2` (top-left), `#efcbfb` (top-mid),
  `#9ae7f9` (top-right), `#edaaf1` (center), `#ff4f98` (mid-left),
  `#54f5e6` (mid-right), `#39b6f8` (bottom-left), `#19d9ee` (bottom-mid),
  `#00f3dd` (bottom-right). CSS approximation:
  `linear-gradient(135deg, #fc8fa2, #edaaf1 35%, #54f5e6 70%, #00f3dd)`.
- **Surface:** white card `#fff`, width 780px (90% ≤575px), `border-radius:
10px`, shadow `0 8px 20px rgba(0,0,0,0.15)`, margin 110px 0 (180px 20px
  ≤1199px), font Roboto; card is a single column (no photo panel).
- **Brand cyan:** `#24c1e8` (active/done step circles, connector before done
  circles, focused/valid input underline, Next/Submit button, focused select
  underline); hover `#1d97b5` (buttons).
- **Secondary accent:** `#6bc734` (green) — the `.border` underline span
  under text inputs (source's focus/typing animation); the final on-valid
  underline color is the cyan `#24c1e8` (`input:valid` rule wins). Recreate
  as a cyan focus/valid underline; keep green only if a typing accent is
  wanted (documented divergence if omitted).
- **Neutrals:** text `#333` (headings, input text, done step labels, summary
  values), `#666` (subtitle, floating labels, select text, summary labels,
  radio labels, pay card labels), `#999` (inactive step labels, grey Previous
  button bg), `#ccc` (inactive step circles), `#e5e5e5` (input/select bottom
  borders, step connectors, table row rules, pay card borders), white `#fff`
  icons on circles + button text.
- **Header:** h3 32px w700 `#333`, padding 13px 0 10px; subtitle 18px w400
  `#666`; header block padding 40px 0 20px (40px 20px 20px ≤575px).
- **Step indicator:** 3 items, ul padding-left 108px (0 ≤991px), margin-bottom
  33px; circular icons 60px (40px ≤575px) radius 50%; inactive `#ccc`, done
  `#24c1e8`; white glyph ~25.6px (20px ≤575px); connectors: 108px × 2px
  `#e5e5e5` pseudo-element before each circle except the first and after the
  last (`.step-icon::before` right:100% / `::after` left:100%); the connector
  BEFORE a done circle turns `#24c1e8`. Step label text below the circle:
  18px w400 `#999` (12px ≤575px), done → `#333`. Circles are CLICKABLE jump
  links (jquery-steps `enableAllSteps: true`).
- **Content panel** (`.form-register .content`): margin 0 20px, shadow
  `0 3px 10px rgba(0,0,0,0.15)`, radius 5px, padding 35px 55px 55px (35px
  30px 60px ≤575px). Section h3: 22px w700 `#333`, padding-bottom 18px
  (13px 0 for step 1, 5px for step 3).
- **Floating-label inputs:** transparent input box, **bottom border only**
  2px `#e5e5e5`; input text 18px w700 `#333`; floating label 16px w400 `#666`
  positioned above the field; on focus/valid: bottom border → `#24c1e8`,
  label color → `#24c1e8`. Field spacing: 50/50 rows for pairs, full-width
  rows for singletons; 15px bottom margin; `form-holder-1` 84.1% (100%
  ≤575px). No boxed borders, no radius — the underline style is the key
  visual.
- **Selects** (DOB Day/Month/Year, Expiry Month/Year): padding 13px 10px
  8px, bottom border 2px `#e5e5e5`, font 15px `#666`, chevron indicator at the
  right edge (bg-image in source — recreate with lucide `ChevronDown`); focus
  bottom border `#24c1e8`. Date selects: 17.5% width each, 20px margin-right
  (100% width stacked ≤575px).
- **Radio (Gender):** plain browser radios in the source; label text 16px
  w400 `#666` ("Gender*:"), margin 8px 12px. Style the radios per repo a11y
  (focus-visible ring) without inventing custom visuals.
- **Payment method cards:** `190×95px` boxes, 1px `#e5e5e5` border, block,
  float-left with 15px gaps; label 16px w400 `#666`; icon image on top
  (source `wizard_v3_icon_1.png` / `_2.png` — recreate with lucide
  `CreditCard` / `Wallet`, no assets copied); checked state: `border: none` +
  shadow `0 3px 10px rgba(0,0,0,0.15)`; the radio inputs are hidden
  (`display: none`); card width 100% ≤575px with margin-bottom 15px.
- **Summary table:** bordered-top rows (1px `#e5e5e5`), th `#666` 16px w400
  width 30%, td `#333` 16px w400, row padding 17px 20px 14px; wrapper radius
  5px, margin 27px 0 -25px.
- **Actions:** bar padding 0 20px, margin 30px 0, flex; buttons 140×45px
  (120px ≤575px), radius 3px; Next/Submit `#24c1e8` → hover `#1d97b5`;
  Previous `#999` → hover `#666`; link text white 16px w400, padding 13px
  34px (15px 24px ≤575px); Previous first in DOM with margin-left 60.9%
  (0 ≤991px) — both buttons sit on the right side on desktop.
- **Font:** **Roboto** via Google Fonts `<link>`
  (`https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap`;
  source used local TTFs with many weights, but style.css only references
  400/700).
- **Icons:** lucide-react: `User` (step 1), `Lock` (step 2), `CreditCard`
  (step 3 + Credit Card payment box), `Wallet` (Paypal box), `ChevronDown`
  (selects). Probe every icon export at implementation time (lucide renames
  bite silently).

### Copy (source-faithful, with typos fixed per Enchant precedent)

- Heading: "Sign Up Your User Account".
- Subtitle: "Fill all form field to go next step" → fix grammar:
  "Fill all form fields to go to the next step".
- Step labels: About / Personal / Payment.
- Section headings: "Account Information:" / "Personal Information:" /
  "Payment Information:".
- Step 1 fields: Email Address / Username / Password / **Confirm Password**
  (source typo "Comfirm Password" fixed).
- Step 2: First Name* / Last Name* / Gender*: (Male, Female) / Date of
  Birth*: Day / Month / Year / Phone Number* / Address*.
- Step 3: Credit Card / Paypal; Holder Name* / Card Number* / CVC* / Expiry
  Date*: Month / Year.
- Summary rows: Full Name / Email Address / Phone Number / User / Gender /
  Address / Card Type (value "Credit Card").
- Buttons: "Previous" (grey, visible in source) / "Next Step" → "Submit" on
  the last step.
- Select option sets: Day 16…19; Month Feb…May; Year 2013…2017
  (same list for DOB and Expiry); disabled placeholder options "Day" /
  "Month" / "Year".

### Validation semantics (from js/main.js)

- `onStepChanging` reads first+last name (joined), email, phone, username,
  the first checked radio in the form (gender; `pay-1` is checked by default
  later in the DOM, so gender wins by document order), and address, writes
  them into the summary cells (`.text()` on the `*-val` tds) on EVERY step
  change, then `return true` — **there is NO validation in the source** (no
  jquery.validate loaded; empty fields flow to the summary).
- `enableAllSteps: true` — all three step circles are clickable and jump
  directly to any step.
- `autoFocus: true`, fade transition, 500ms speed.
- `$("#date").datepicker(...)` in main.js targets a `select#date` that never
  existed as a date input — the DOB fields in this demo are plain Day/Month/
  Year selects with NO datepicker UI. Do NOT add a calendar picker; recreate
  the three selects as-is (documented divergence from the leftover wiring).
- Source form `action="#"` with **no onFinished handler** — the final
  "Submit" would reload the page. Recreate as an **in-page success state**
  (confirmation panel replacing the card content) — same precedent as the
  Enchant, Grimoire, and Rune preps.
- Recreation decision: per the repo form convention (zod schema + per-field
  errors) mark all fields required, validate email format + password
  min-length + confirm-password match on step 1, required fields on steps 2–3
  (incl. DOB/expiry selects and payment method), and card-number/CVC format
  on step 3 — a documented, user-facing divergence that preserves the flow;
  summary values must still echo whatever the user typed.

## Requirements

### Requirement: Page scaffold

The system SHALL render a full-viewport page centered on the wizard card,
with the multi-stop mesh-gradient background, a main landmark, and a document
title.

#### Scenario: Full page render

- **GIVEN** the Hex app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL fill the viewport with the multi-stop mesh gradient
  background (pink/magenta → lavender → cyan/teal)
- **AND** the white rounded wizard card SHALL be centered vertically and
  horizontally on top of it
- **AND** the main landmark SHALL contain the wizard
- **AND** the document title SHALL be "Hex — Sign Up Wizard"

### Requirement: Card layout

The system SHALL render the wizard as a single full-width white card column
(width 780px, radius 10px, soft shadow) holding the header, step indicator,
step content, and action bar.

#### Scenario: Card renders

- **GIVEN** the wizard card is displayed on a desktop viewport
- **WHEN** the card renders
- **THEN** the card SHALL be 780px wide, white, with 10px corner radius and
  a `0 8px 20px rgba(0,0,0,0.15)` shadow
- **AND** the card SHALL NOT have a side photo panel (unlike wizard-22)
- **AND** the header, step indicator, and form content SHALL stack vertically
  inside it

### Requirement: Step indicator

The system SHALL render the three-step progress bar as circular icon
indicators with labels and connectors, marking done/current with the brand
cyan.

#### Scenario: Progress bar render

- **GIVEN** the wizard is displayed
- **WHEN** the progress bar is visible
- **THEN** it SHALL show three 60px circular indicators in a row (40px on
  narrow screens) with white icons: User (About), Lock (Personal), CreditCard
  (Payment)
- **AND** labels SHALL sit below each circle reading About, Personal, Payment
- **AND** connector lines (108×2px, grey `#e5e5e5`) SHALL link consecutive
  circles, turning cyan `#24c1e8` for connectors leading into a done circle

#### Scenario: Active step follows navigation

- **GIVEN** the user is on step 1
- **WHEN** the user advances to step 2
- **THEN** step 1's circle SHALL remain cyan (done)
- **AND** step 2's circle SHALL become cyan (current)
- **AND** the done step's label SHALL turn `#333` while active/incomplete
  labels stay `#999`

#### Scenario: Circles are direct navigation

- **GIVEN** the wizard is on any step
- **WHEN** the user clicks a later or earlier step circle
- **THEN** the wizard SHALL jump directly to that step without a validation
  gate (source behavior: `enableAllSteps: true`)
- **AND** each circle SHALL be a keyboard-accessible link with an accessible
  name (e.g. "Step 1: About")

### Requirement: Step 1 — About (account details)

The system SHALL render the account form: Email Address, Username, Password
and Confirm Password as full-width floating-label inputs with bottom-border
underline styling.

#### Scenario: Step 1 fields render

- **GIVEN** the wizard starts on step 1
- **WHEN** the step 1 panel is displayed
- **THEN** it SHALL show four full-width text inputs with floating labels
  Email Address, Username, Password and Confirm Password
- **AND** the Password and Confirm Password inputs SHALL be `type="password"`
- **AND** each input SHALL render the underline style: transparent box with a
  2px `#e5e5e5` bottom border and 18px `#333` text
- **AND** the section heading SHALL read "Account Information:"

#### Scenario: Floating label behavior

- **GIVEN** a step 1 input is empty
- **WHEN** the field is focused or the user types
- **THEN** the floating label SHALL move above the field and the bottom
  border SHALL turn cyan `#24c1e8`

#### Scenario: Validation blocks advance

- **GIVEN** the user is on step 1
- **WHEN** the user clicks Next Step with empty or invalid fields
- **THEN** the system SHALL show per-field errors (e.g. "Please enter your
  email address", "Please enter a valid email address", "Password must be at
  least 8 characters", "Passwords do not match") and block the advance
- **AND** focus SHALL move to the first invalid field

#### Scenario: Valid step 1 advances

- **GIVEN** the user fills every step 1 field with valid values
- **WHEN** the user clicks Next Step
- **THEN** the wizard SHALL advance to step 2 with a fade transition

### Requirement: Step 2 — Personal details

The system SHALL render the personal form: First Name + Last Name side by
side, a Gender radio group, a Day/Month/Year Date of Birth select trio, and
full-width Phone Number and Address inputs.

#### Scenario: Step 2 fields render

- **GIVEN** the wizard is on step 2
- **WHEN** the step 2 panel is displayed
- **THEN** it SHALL show First Name and Last Name inputs side by side with a
  `*` on the labels
- **AND** a "Gender*:" radio group with Male (checked by default) and Female
- **AND** a "Date of Birth*:" row with three selects — Day (16…19), Month
  (Feb…May) and Year (2013…2017) — each with a grey placeholder option and a
  chevron indicator
- **AND** full-width Phone Number and Address floating-label inputs
- **AND** the section heading SHALL read "Personal Information:"

#### Scenario: Selects render chevrons

- **GIVEN** step 2 is displayed
- **WHEN** a Day/Month/Year select renders
- **THEN** it SHALL show a lucide `ChevronDown` indicator at its right edge
- **AND** its bottom border SHALL turn cyan `#24c1e8` while focused

#### Scenario: Validation blocks advance

- **GIVEN** the user is on step 2
- **WHEN** the user clicks Next Step with any required field empty
- **THEN** the system SHALL show per-field errors and block the advance

### Requirement: Step 3 — Payment + summary

The system SHALL render the payment form: Credit Card / Paypal selection
cards, Holder Name, Card Number + CVC side by side, Expiry Month/Year
selects, and a summary table echoing the values entered in steps 1–2.

#### Scenario: Payment fields render

- **GIVEN** the wizard is on step 3
- **WHEN** the step 3 panel is displayed
- **THEN** it SHALL show two bordered payment boxes — Credit Card (selected by
  default, with a CreditCard icon) and Paypal (with a Wallet icon) — whose
  selected state drops the border and adds a soft shadow
- **AND** it SHALL show Holder Name (full width), Card Number + CVC (side by
  side), and Expiry Date Month/Year selects
- **AND** the section heading SHALL read "Payment Information:"

#### Scenario: Summary table render

- **GIVEN** the wizard is on step 3
- **WHEN** the confirmation panel is displayed
- **THEN** it SHALL show a semantic `<table>` with rows Full Name, Email
  Address, Phone Number, User, Gender, Address and Card Type (value
  "Credit Card" by default)
- **AND** the label cells SHALL be grey `#666` at 30% width with 1px
  `#e5e5e5` top borders and the value cells SHALL be dark `#333`

#### Scenario: Summary reflects edits

- **GIVEN** the user changes a value in an earlier step
- **WHEN** the user returns to step 3
- **THEN** the summary SHALL show the updated value (Full Name = first + last
  joined, Gender = the checked gender radio, User = username)

#### Scenario: Payment validation

- **GIVEN** the user is on step 3
- **WHEN** the user clicks Submit with a required payment field empty or a
  malformed card number / CVC
- **THEN** the system SHALL show per-field errors and block the submit

### Requirement: Wizard navigation

The system SHALL provide Previous and Next Step/Submit buttons and finish
with an in-page success state.

#### Scenario: Next Step behavior

- **GIVEN** the user is on step 1 or 2 with valid input
- **WHEN** the user clicks Next Step
- **THEN** the wizard SHALL advance to the next step keeping all values

#### Scenario: Previous behavior

- **GIVEN** the user is on step 2 or 3
- **WHEN** the user clicks the grey Previous button
- **THEN** the wizard SHALL return to the previous step keeping all values
- **AND** on desktop the Previous button SHALL sit beside the Next button on
  the right side of the action bar (source margin-left 60.9%)

#### Scenario: Submit shows success

- **GIVEN** the user is on step 3 with all values present
- **WHEN** the user clicks Submit
- **THEN** the wizard SHALL replace the card content with an in-page success
  state (green confirmation panel summarizing the signup and a "Done"/reset
  CTA) instead of submitting to a server (source form had no backend)

### Requirement: Responsive behavior

The system SHALL collapse the wizard gracefully on smaller viewports.

#### Scenario: Stacked layout on narrow screens

- **GIVEN** the viewport is ≤ 991px
- **WHEN** the wizard renders
- **THEN** the step bar SHALL lose its left padding and the Previous button
  SHALL lose its push-right margin
- **AND** at ≤ 767px the date/expiry selects SHALL keep 17.5% width with 20px
  gaps
- **AND** at ≤ 575px the card SHALL be 90% wide, all side-by-side fields
  SHALL stack full-width, the payment boxes SHALL stack, the step circles
  SHALL shrink to 40px, the step labels SHALL shrink to 12px, the button
  width SHALL shrink to 120px, and the content padding SHALL shrink to
  35px 30px 60px

### Requirement: Branding

The system SHALL carry the repo-standard footer attribution.

#### Scenario: Component Dock footer

- **GIVEN** the wizard is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** the footer SHALL show a "Made with Component Dock" link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the app SHALL NOT reference ColorLib anywhere in its source

## Verification checklist

- [ ] App folder `apps/hex` (package `@free-react-templates/hex`,
      `public/CNAME` = `hex.free.componentdock.com`, `homepage`
      https://hex.free.componentdock.com)
- [ ] Mesh-gradient background recreated in CSS (pink → lavender → cyan/teal;
      no image asset)
- [ ] White 10px-radius card, 780px width, soft shadow, centered
- [ ] 3 icon step circles (60px/40px, cyan done/current, grey inactive,
      connectors, clickable jump navigation, icon + label per step)
- [ ] Step 1 account floating-label inputs + zod validation (required, email
      format, password length, confirm match)
- [ ] Step 2 personal fields: side-by-side names, gender radios, DOB
      Day/Month/Year selects, phone + address
- [ ] Step 3 payment cards (Credit Card/Paypal), holder/card/cvc inputs,
      expiry selects + validation (card format, CVC digits)
- [ ] Summary table echoing all values live (incl. joined full name, gender,
      username, card type)
- [ ] Previous (grey, visible) + Next Step/Submit (cyan) buttons; fade
      transitions; in-page success state on submit
- [ ] Roboto via Google Fonts (400/700); lucide-react icons only (probe
      exports: User, Lock, CreditCard, Wallet, ChevronDown)
- [ ] Responsive stacking at 1199px / 991px / 767px / 575px breakpoints
- [ ] Component Dock footer link; zero ColorLib references in app code
- [ ] 100% Vitest coverage (lines/functions/branches/statements)
- [ ] Per-app gate green: `npm run verify:app hex` + `npm run spec:validate`

## Metadata

- Source: https://colorlib.com/wp/template/colorlib-wizard-23/
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-23/index.html
- TEMPLATES.md line: 861
- Prep commit: `docs: prep Hex (ColorLib colorlib-wizard-23) spec + research`

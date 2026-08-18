# Template: Abjure (Sign-Up Form Wizard)

## Purpose

Abjure is a single-page five-step SIGN-UP FORM WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 12" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-12/), built under a
DIFFERENT name (**Abjure**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps form wizard (`jquery.steps.min.js` +
jQuery 3.x + jquery.validate): a 665px white PILL card (60px radius, soft
shadow) centered on a solid SKY-BLUE (`#00a7f6`) page, with NO step
tiles (`.signup-form .steps { display: none }` — the jQuery Steps header
is hidden entirely) and NO page title. Each of the FIVE steps is a
single field with a floating label that doubles as a numbered question
("01 . What is your first name ?" / "02 . What is your last name ?" /
"03 . What is your Email ?" / "04 . Create your password" / "05 . Repeat
your password"). Navigation is two big 90×90px CIRCULAR chevron buttons
(Prev grey `#ebebeb` circle + `#999` chevron; Next/Finish blue `#00a7f6`
circle + white chevron) on the right of a 334px content column. A dark
blue (`#0184d2`) full-width footer block APPENDS below the page on the
first Next click and GROWS with each step (188 → 376 → 564 → 752px);
validation is jquery.validate-gated with ICON-ONLY errors (empty message
text, red `#e10000` close-circle glyph + 3px red underline). Finishing
replaces the card with a single centered greeting h1 ("Hi , Hoang !")
on a page that turns the darker blue `#0184d2`. Passwords render with
eye toggles (zmdi-eye/eye-off). It is the 12th member of the 30-template
"Bootstrap Wizards" family (`colorlib-wizard-1` … `colorlib-wizard-30`).

**WHAT MAKES ABJURE DISTINCT (signature behaviors):**

1. **Solid SKY-BLUE page + one BIG pill card, no tiles, no heading.**
   Page background `#00a7f6` (no photo, no gradient; `.main` padding
   410px 0 — the card floats mid-page). The card is 665px, `#fff`,
   radius **60px** (pill-shaped — visually confirmed), shadow
   `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`. The jQuery Steps header
   (`.steps`) is `display:none` and the `<h3>` step titles are empty —
   there is NO step navigation, NO title text, NO numbers row: just the
   one field and the two circles. This is the FIRST family prep with
   hidden step navigation (Conjure has dot nav, Banish a progress bar,
   Dispel square tiles).
2. **Five single-field steps with FLOATING LABEL = question.** Each
   fieldset holds exactly one input + `label.form-label` (22px
   Montserrat bold, absolutely positioned at `left:0; top:25px`
   overlapping the input) whose text is the numbered question. On focus
   the label floats UP (`top:4px`, 13px, weight 500, `#999`);
   on blur a VALID field's label is hidden ENTIRELY
   (`input.valid + .form-label { display: none }`); an INVALID field's
   label floats up at 12px and turns red. The input itself has NO box
   border — only a 3px `#ebebeb` bottom rule; focused/valid keeps
   `#ebebeb` (no color change), errors turn the rule `#e10000`.
   Inputs are 22px bold, `padding-top: 30px; padding-bottom: 3px`.
3. **Validation gates ONLY steps 1–3.** jquery.validate rules require
   only `first_name`, `last_name`, `email`. The password fields (steps
   4–5) have NO rules — they are skippable and never block Next. This is
   the opposite of Dispel (all steps gated): the recreation MUST mirror
   the gated-first-three / free-last-two split.
4. **Icon-only errors (no message text).** All validator messages are
   emptied (`required: ""` etc.); `label.error` renders as an empty
   label absolutely at the fieldset's top right whose `:after` shows the
   material-font close-circle glyph `\f1f4` (18px, `#e10000`, at
   `top: 30px; right: 0`). Invalid: 3px `#e10000` bottom rule +
   red label + icon. Valid: `#ebebeb` rule and label hidden.
   `.actions` gains `.form-error` (CSS targets `.zmdi-arrow-right`, a
   class the demo never renders — NO visible effect; skip it).
5. **Circular Prev/Next buttons, Previous DISABLED-but-VISIBLE on step 1.** `.actions ul` is a flex row (space-between-ish, `margin: 0 -5px`)
   of `li` → `a` (font-size 50px) → `<i>` circles 90×90px, radius 50%:
   Prev = `#999` chevron on `#ebebeb`; Next/Finish = `#fff` chevron on
   `#00a7f6`. Wizard 12 has NO `.actions .disabled { display:none }`
   rule (unlike Dispel) — on step 1 jQuery Steps marks the Prev `li`
   disabled but it STAYS VISIBLE (grey circle, inert). The Finish label
   is ALSO the chevron-right icon (no text ever — the icon IS the
   button). Content column 334px left (`.wizard` `space-between`,
   padding `0 15px 0 55px`), circles right. Fade transition (300ms).
6. **A growing dark-blue FOOTER block.** On the FIRST Next click
   (onStepChanging from index 0) `main.js` appends a `div.footer`
   (absolute, `bottom: -115px`, width 100%, bg `#0184d2`) to the BODY
   with class `footer-0` (188px); each subsequent step change swaps the
   class to `footer-1` (376px) → `footer-2` (564px) → `footer-3`
   (752px). It NEVER shrinks when going Back. (The 4th growth — step
   index 4 — is commented out in the source; the 752px size stays.)
7. **Mock success.** `onFinished` appends `<h1>Hi , Hoang !</h1>` and
   adds `.finished` to `.main`: `.container` is hidden (`display:none`)
   and the page turns `#0184d2` with a centered 36px bold white
   greeting. The name "Hoang" is a hardcoded developer artifact — the
   recreation should greet with the entered first name (or a generic
   "Hi, there!") and document the choice. No real submit (`form method=
"POST"` without action).
8. **Source quirk — passwords start as `type="text"`.** Both password
   inputs are authored `type="text"`; the eye toggle (`.field-icon`,
   zmdi-eye/eye-off, `float:right; margin-top: -29px`) flips the type
   between text/password. The recreation should render
   `type="password"` initially and flip on toggle (documented deviation
   — security/UX; the toggle intent is preserved).

## Naming

The ColorLib source name "Colorlib Wizard 12" is FORBIDDEN as the app
name (and "wizard" itself must not be reused). **Abjure** is the new,
original name — single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-08-18: zero hits for `abjure` in TEMPLATES.md, `ls
apps/`, `openspec/specs/`, `docs/templates/`). It continues the
magic-practice verb chain established by the wizard family preps:
**Conjure (1) → Evoke (2) → Summon (3) → Invoke (4) → Enchant (5) →
Charm (6) → Hex (7) → Bless (8) → Curse (9) → Banish (10) → Dispel (11)
→ Abjure (12) → …** (Abjure = wizard-12, the 12th member, matching the
chain position). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 12" (page title: "Sign Up
  Form"). Listed in TEMPLATES.md under **Bootstrap Wizards (30)**
  (section header line 844; the one and only row at line 849 —
  `wp/template/colorlib-wizard-12/` appears exactly ONCE; close-string
  matches for wizard-1/2/11/21/22..29 rows are prefix substrings, not
  duplicates). Member 12 of colorlib-wizard-1 … 30. Sibling preps:
  Conjure (wizard-1, chain seed — cream/olive, 920px card, dot nav),
  Banish (wizard-10 — photo bg, #333 monochrome, 451px card, progress
  bar), Dispel (wizard-11 — coral page, 630px card, square tile nav,
  validation gating). Abjure's tokens are a FOURTH scheme: sky-blue
  page, 665px pill card, hidden step nav, single-field steps, circular
  buttons, growing footer.
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch):**
  the naive `https://preview.colorlib.com/theme/colorlib-wizard-12/`
  returns 404; the REAL preview is the family path
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-12/index.html`**
  (HTTP 200, 3,094 bytes, 77 lines, `<title>Sign Up Form</title>` —
  same `/etc/bwiz/` path confirmed for wizard-1, -10, -11, -12, -15;
  do not redo this lookup). Stylesheets: `css/style.css` (8,119 bytes,
  323 lines — ALL styling, custom written, NO Bootstrap, NO
  jquery.steps.css), `fonts/material-icon/css/material-design-iconic-font.min.css`
  (zmdi icon font — glyphs `\f1f4` error, chevrons, eye/eye-off;
  replace with lucide, do NOT ship the font). Scripts:
  `vendor/jquery/jquery.min.js`,
  `vendor/jquery-validation/dist/jquery.validate.min.js`,
  `vendor/jquery-validation/dist/additional-methods.min.js`,
  `vendor/jquery-steps/jquery.steps.min.js` (wizard plugin),
  `js/main.js` (3,708 bytes, 103 lines: validate rules + steps init +
  footer growth + eye toggles). Fonts: local @font-face **Montserrat**
  300/400(i)/500/600/700(i)/900 → **Google Fonts `<link>` (400, 500,
  700 — 300/600/900 are unused by the demo CSS)**.
- **Live DOM structure (from the fetched HTML + CSS + main.js; jQuery
  Steps transforms the form at load):**
  - `body` (bg `#00a7f6`, Montserrat, 14px, `#222`, bold) → `div.main`
    (padding 410px 0, z-index 99) → `div.container` (width 665px,
    `margin: 0 auto`, bg `#fff`, **border-radius 60px**, shadow
    `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`) → `form#signup-form.signup-form`
    (relative). jQuery Steps renders inside it: `div.steps` (HIDDEN via
    `.signup-form .steps { display: none }` — no tiles, no titles),
    `div.content` (width 334px, padding-bottom 25px) → five `fieldset`
    panels (`role=tabpanel`), and `div.actions`.
    - `div.wizard` — flex, `justify-content: space-between`, padding
      `0 15px 0 55px`: content column (334px, left) + actions (right).
    - Each `fieldset` (borderless, relative) → `input` (full-width,
      borderless, 3px `#ebebeb` bottom rule, 22px bold, padding-top
      30px / bottom 3px) + `label.form-label` (absolute, `left:0;
top:25px`, 22px bold — the floating question) + optional
      `span.field-icon` eye toggle (password steps; 18px, floated
      right, `margin-top: -29px`).
    - `div.actions` — flex row, `align-items: center`; `ul` (flex,
      margin `0 -5px`) → `li` (padding `0 5px`) → `a` (font-size 50px,
      text-decoration none) → `i.zmdi` circle 90×90px, radius 50%,
      flex-centered: `li:first-child a .zmdi` (Prev) `#999` chevron on
      `#ebebeb`; `li a .zmdi` (Next/Finish) `#fff` chevron on
      `#00a7f6`. Step-1 Prev `li` gets jQuery Steps' `.disabled` class
      but stays VISIBLE (no hiding rule — inert grey circle).
    - `div.footer` — appended to BODY by main.js on the first Next:
      absolute, `width: 100%`, `z-index: 9`, `bottom: -115px`, bg
      `#0184d2`; heights `.footer-0` 188px → `.footer-1` 376px →
      `.footer-2` 564px → `.footer-3` 752px (grows per step, never
      shrinks). It is NOT in the source HTML — the recreation renders
      it explicitly (same growth logic).
    - `h1` — ONLY present on the finished state: appended to `.main`,
      centered, 36px, bold, white, on the `.finished` page bg
      `#0184d2`; `.finished .container { display: none }`.
    - Per monorepo convention add a minimal attribution footer linking
      https://www.componentdock.com/ ("Component Dock") — the source
      has no footer content.
  - **Field inventory (verbatim labels/options, live-verified from the
    fetched HTML):**
    - **Step 1 — What is your first name ?** `first_name` (text,
      REQUIRED).
    - **Step 2 — What is your last name ?** `last_name` (text,
      REQUIRED).
    - **Step 3 — What is your Email ?** `email` (type=email, REQUIRED).
    - **Step 4 — Create your password** `password` (source type=text —
      recreation type=password; eye toggle).
    - **Step 5 — Repeat your password** `re_password` (source
      type=text — recreation type=password; eye toggle).
    - No selects, no checkboxes, no file inputs, no hidden fields, no
      images anywhere in the design.

- **Behaviors (all verified 2026-08-18 from main.js + style.css):**
  - **Steps init:** `headerTag: "h3"`, `bodyTag: "fieldset"`,
    `transitionEffect: "fade"`, labels previous/next/finish = the
    chevron-left / chevron-right / chevron-right ICONS (no text).
    `.signup-form .steps { display: none }` hides the whole header.
  - **Validation gating (steps 1–3 only):** rules require first_name,
    last_name, email; passwords have NO rules (they never block
    navigation). `onStepChanging` → `form.valid()` with
    `ignore: ":disabled,:hidden"`; `onFinishing` → `form.valid()` with
    `ignore: ":disabled"`; `onfocusout` validates the blurred field.
    All validator messages emptied — errors are ICON-ONLY. Invalid:
    `input.error` (3px `#e10000` bottom rule) + `label.error` (empty,
    absolute top 0 right 0) showing the `\f1f4` close-circle glyph
    (18px `#e10000` at top 30px right 0) + label floats red at
    top 4px / 12px. Valid: `input.valid` (rule returns to `#ebebeb`)
    and the label is hidden entirely (`display: none`).
  - **Footer growth:** onStepChanging from index 0 appends
    `div.footer.footer-0` (188px) to the body; moving from indices
    1 → 2 → 3 swaps the class to footer-1/2/3 (376/564/752px). It NEVER
    shrinks on Back navigation (only grows). Final step (index 4):
    no further growth (commented out in the source — 752px stays).
  - **Eye toggles:** clicking `.toggle-password` swaps
    zmdi-eye ↔ zmdi-eye-off and flips the input type between password
    and text (source starts at type=text; recreation starts at
    password).
  - **Mock success:** `onFinished` appends `<h1>Hi , Hoang !</h1>` and
    adds `finished` to `.main` → container hidden, page bg `#0184d2`,
    centered 36px bold white greeting. Recreation: inline success state
    greeting the entered first name (documented deviation — no alert,
    no fake network). Use the same "Hi, X !" shape (the comma-space oddity
    comes from the source template literal; a clean "Hi, X!" is fine).
  - **No real submit:** `form method="POST"` without action.
- **Screenshot (`colorlib-free-wizard-12.jpg`, 1200×972 AVIF; the
  TEMPLATES.md row embeds a downscaled copy), viewed 2026-08-18 in the
  browser:** solid flat SKY-BLUE full-viewport background; a single
  white PILL-shaped card (very rounded corners, subtle shadow) centered;
  on its left the black 22px question "01 . What is your first name ?"
  with a thin grey underline below it (the input); on its right a
  bright blue CIRCULAR button with a white right-chevron. Nothing else —
  no tiles, no heading, no photos, no footer visible on the initial
  step (the footer only appears after the first Next click, per
  main.js). Aesthetic: minimal, flat, monochromatic blue/white, pill
  softness. **No imagery anywhere — the recreation needs NO picsum
  placeholders** (solid-color page, icon-only controls).

## Design tokens

| Token                | Value                            | Notes                                                                         |
| -------------------- | -------------------------------- | ----------------------------------------------------------------------------- |
| `--color-page`       | `#00a7f6`                        | Solid sky-blue page background (no photo/gradient); `.main` padding 410px 0   |
| `--color-brand`      | `#00a7f6`                        | Next/Finish circle bg (SAME blue as the page — contrast via white icon)       |
| `--color-brand-deep` | `#0184d2`                        | Footer block + finished-state page bg (darker blue)                           |
| `--color-ink`        | `#222`                           | Body/label/input text (body base 14px bold)                                   |
| `--color-label-dim`  | `#999`                           | Label floated/focus state (13px, weight 500)                                  |
| `--color-line`       | `#ebebeb`                        | 3px input bottom rule; Prev circle bg; disabled-state grey                    |
| `--color-muted`      | `#999`                           | Prev chevron icon                                                             |
| `--color-error`      | `#e10000`                        | Error bottom rule + error icon + error-state label                            |
| `--font-body`        | 'Montserrat', sans-serif         | Google Fonts 400/500/700; base 14px/1.6 bold; labels+inputs 22px bold         |
| `--card-w`           | `665px`                          | Container; `margin: 0 auto`; bg `#fff`; radius **60px** (pill); shadow        |
|                      |                                  | `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`; mobile: `calc(100% - 40px)`            |
| `--content-w`        | `334px`                          | `.content` column (padding-bottom 25px); `.wizard` space-between,             |
|                      |                                  | padding `0 15px 0 55px`                                                       |
| `--btn-circle`       | `90×90px`, radius 50%            | Action buttons; `a` font-size 50px → circle icons; row `margin: 0 -5px`,      |
|                      |                                  | `li` padding `0 5px`; Prev `--color-line` bg + `#999` chevron;                |
|                      |                                  | Next/Finish `--color-brand` bg + `#fff` chevron; step-1 Prev disabled-visible |
| `--input`            | borderless, 3px `#ebebeb` bottom | 22px bold Montserrat; padding-top 30px / bottom 3px; 100% width block;        |
|                      |                                  | focus keeps `#ebebeb`; valid `#ebebeb`; error 3px `#e10000`                   |
| `--label`            | absolute `left:0; top:25px`      | 22px bold; focus float: top 4px, 13px, 500, `#999`; valid: `display:none`;    |
|                      |                                  | error: top 4px, 12px, `#e10000`; transition 0.25s                             |
| `--error-icon`       | 18px `#e10000`                   | `label.error:after` close-circle glyph `\f1f4` at `top: 30px; right: 0`       |
|                      |                                  | (absolute, empty label at fieldset top-right); NO error text ever             |
| `--footer`           | `#0184d2` full-width block       | Absolute `bottom: -115px`, z-index 9; heights 188/376/564/752px per step      |
|                      |                                  | index 0→3; appended on first Next, grows only, never shrinks                  |
| `--success`          | bg `#0184d2`; h1 36px bold white | Centered greeting replacing the form (container hidden); no alert             |
| `--fade`             | 300ms                            | Step transition effect                                                        |

## Requirements

### Requirement: Page shell

The system SHALL render the solid sky-blue page with the centered white
pill card containing the single-field wizard and its circular actions.

#### Scenario: Sky-blue page with pill card

- **GIVEN** the Abjure app is rendered on a desktop viewport
- **THEN** the page background SHALL be the solid sky-blue `#00a7f6`
  with no photo, gradient, or pattern
- **AND** a white 665px card SHALL render centered horizontally with
  **60px radius** (pill shape) and the soft shadow
  `0px 3px 9.5px 0.5px rgba(0,0,0,0.1)`
- **AND** the page font SHALL be Montserrat (400/500/700 from Google
  Fonts), 14px, bold, `#222`
- **AND** there SHALL be NO step-tile row and NO page heading (the
  source hides its steps header and has no title)

#### Scenario: Responsive card

- **GIVEN** a viewport at or below 768px
- **THEN** the card SHALL widen to `calc(100% - 40px)` with
  `max-width: 100%` and no horizontal overflow

### Requirement: Floating-label question fields

Each step SHALL render exactly one input with a numbered-question
floating label that lifts on focus, hides when valid, and turns red
with an icon when invalid.

#### Scenario: Floating label states

- **GIVEN** a step is rendered with its input empty and unfocused
- **THEN** the 22px bold label SHALL sit inside the input area at
  `top: 25px` reading e.g. "01 . What is your first name ?" (numbered
  question format verbatim from the source)
- **WHEN** the user focuses the input
- **THEN** the label SHALL float to the top (`top: 4px`, 13px, weight
  500, `#999`)
- **WHEN** the user blurs with a valid value
- **THEN** the label SHALL disappear entirely
  (`display: none` semantics — no floating label remains)

#### Scenario: Input styling

- **GIVEN** any step input is rendered
- **THEN** it SHALL be full-width, borderless except a 3px `#ebebeb`
  bottom rule, 22px bold Montserrat, with `padding-top: 30px` and
  `padding-bottom: 3px`
- **AND** focusing or a valid value SHALL keep the `#ebebeb` rule
  (no color change)

### Requirement: Five-step field inventory

The wizard SHALL have exactly five single-field steps in source order.

#### Scenario: Step sequence

- **GIVEN** the Abjure app is rendered on step 1
- **THEN** the steps SHALL progress in order:
  1. `first_name` — "01 . What is your first name ?"
  2. `last_name` — "02 . What is your last name ?"
  3. `email` (type=email) — "03 . What is your Email ?"
  4. `password` — "04 . Create your password" with an eye toggle
  5. `re_password` — "05 . Repeat your password " with an eye toggle
- **AND** no other controls SHALL exist (no selects, checkboxes, file
  inputs, or images — the design is field-only)

#### Scenario: Password fields

- **GIVEN** the wizard is on step 4 or 5
- **THEN** the input SHALL render as `type="password"` (documented
  deviation: the source authors them as `type="text"`) with an eye
  toggle at the field's right
- **WHEN** the user clicks the eye toggle
- **THEN** the type SHALL flip between password and text and the icon
  SHALL swap between Eye and EyeOff
- **AND** the toggle SHALL expose `aria-label` (e.g. "Show password" /
  "Hide password") and `aria-pressed` reflecting the state

### Requirement: Validation-gated navigation (steps 1–3)

Navigation SHALL be blocked while any REQUIRED field on the current
step is empty; steps 4–5 (passwords) SHALL never block navigation.
Errors SHALL be icon-only (no message text).

#### Scenario: Blocked step advancement

- **GIVEN** the wizard is on step 1, 2, or 3 with the required field
  empty
- **WHEN** the user clicks Next
- **THEN** the step SHALL NOT advance
- **AND** the invalid field SHALL show a 3px `#e10000` bottom rule, a
  red floating label, and a red close-circle icon (lucide `CircleX`,
  probed) at the fieldset's top right (18px, `#e10000`)
- **AND** no error TEXT SHALL render (icon-only, matching the source's
  emptied validator messages)

#### Scenario: Blur validation and valid state

- **GIVEN** the user types a value into a required field and leaves it
- **THEN** the field SHALL validate on blur
- **AND** a valid field SHALL return to the `#ebebeb` rule and its
  label SHALL hide
- **AND** an invalid field SHALL keep the red rule + icon until fixed

#### Scenario: Password steps never block

- **GIVEN** the wizard is on step 4 or 5 with both password fields
  empty
- **WHEN** the user clicks Next (or Finish on step 5)
- **THEN** the wizard SHALL advance / finish — password emptiness SHALL
  NOT block navigation (no validation rules on these fields, mirroring
  the source)

#### Scenario: Advance when valid

- **GIVEN** the required field on the current step is filled
- **WHEN** the user clicks Next
- **THEN** the next step SHALL activate with a fade transition (~300ms)

### Requirement: Circular action buttons

The system SHALL render the Prev/Next circular icon buttons, with Prev
disabled-but-visible on step 1 and the Next button becoming the Finish
action on step 5.

#### Scenario: Button rendering and states

- **GIVEN** the Abjure app is rendered on step 1
- **THEN** a 90×90px circular Prev button (radius 50%: `#999` chevron
  on `#ebebeb`) SHALL render left of a 90×90px circular Next button
  (`#fff` chevron on `#00a7f6`), with the content column (334px) on the
  left of the actions row
- **AND** the step-1 Prev button SHALL be VISIBLE but inert
  (`aria-disabled`, no step change on click — the source has no
  display:none rule, unlike Dispel)
- **WHEN** the user advances past step 1
- **THEN** Prev SHALL become active and navigate back one step
- **AND** on step 5 the Next button SHALL act as Finish (same chevron
  icon, no label change)

#### Scenario: Back navigation

- **GIVEN** the wizard is on step N>1
- **WHEN** the user clicks Prev
- **THEN** the wizard SHALL return to step N−1 with a fade transition

### Requirement: Growing footer block

The system SHALL show a dark-blue full-width footer block that appears
on the first Next click and grows with each step, never shrinking.

#### Scenario: Footer progression

- **GIVEN** the wizard is initially on step 1
- **THEN** no footer block SHALL render yet
- **WHEN** the user clicks Next from step 1
- **THEN** a `#0184d2` full-width block SHALL render anchored below the
  card with 188px height
- **WHEN** the user advances to steps 3, 4, and 5
- **THEN** the block SHALL grow to 376px, 564px, then 752px
- **WHEN** the user navigates Back to an earlier step
- **THEN** the block SHALL KEEP its current height (it only grows,
  mirroring the source)

### Requirement: Success state

Finishing SHALL replace the wizard with an inline success greeting on a
page that turns the darker blue.

#### Scenario: Completion

- **GIVEN** the wizard is on step 5 (passwords optional, never blocking)
- **WHEN** the user clicks Finish
- **THEN** the form SHALL disappear and a centered 36px bold white
  greeting SHALL render (e.g. "Hi, {entered-first-name}!" — documented
  deviation: the source hardcodes "Hi , Hoang !"; use the entered first
  name or a generic "Hi, there!" if the first step was skipped)
- **AND** the page background SHALL turn `#0184d2`
- **AND** no alert and no fake network request SHALL occur

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (deviation from the source:
it removes all focus outlines and renders icon-only errors with no
announcement).

#### Scenario: Semantics

- **GIVEN** the Abjure app is rendered
- **THEN** the step panels SHALL expose tabpanel semantics with the
  current step announced
- **AND** every field SHALL have a programmatic label (`<label
htmlFor>`, matching the source's real labels), required fields SHALL
  expose `aria-required`, and errors SHALL be announced
  (`aria-invalid` + the error icon with `role="alert"` or `aria-live`)
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (inputs, buttons, toggles)

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Abjure app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- abjure` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-12/index.html:
      sky-blue `#00a7f6` page, white 665px PILL card (60px radius),
      single floating-label question, circular Prev (grey) + Next
      (blue) circles, dark-blue footer block growing with steps,
      success greeting on `#0184d2`.
- [ ] Behavior check: steps 1–3 gated (icon-only red errors, blur
      validation), steps 4–5 never block; Prev visible-but-inert on
      step 1 then active; footer appears on first Next and only grows;
      eye toggles flip type + icon; Finish shows the inline success
      greeting (no alert).
- [ ] Responsive check at 768px (card `calc(100% - 40px)`, no
      horizontal overflow).
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
- [ ] Icon exports probed with
      `node -e "console.log(typeof require('lucide-react').X)"` for
      every mapped icon before use (ChevronLeft, ChevronRight, Eye,
      EyeOff, CircleX — CircleX renamed from XCircle in recent
      lucide releases; probe both).

## Icon mapping (zmdi → lucide)

| Source glyph (Material)            | Recreation                              |
| ---------------------------------- | --------------------------------------- |
| `zmdi-chevron-left` (Prev)         | lucide `ChevronLeft`                    |
| `zmdi-chevron-right` (Next/Finish) | lucide `ChevronRight`                   |
| `zmdi-eye` / `zmdi-eye-off`        | lucide `Eye` / `EyeOff`                 |
| `\f1f4` (error close-circle)       | lucide `CircleX` (probe; alias XCircle) |

No brand icons needed. No photos needed — no picsum placeholders.

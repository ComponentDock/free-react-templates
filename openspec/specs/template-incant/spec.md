# Template: Incant (3-Step Feedback Wizard)

## Purpose

Incant is a single-page THREE-STEP FEEDBACK WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 18" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-18/), built under a
DIFFERENT name (**Incant**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery Steps wizard
(`vendor/jquery-steps/jquery.steps.min.js` + jquery.validate loaded but
NEVER initialized) with a single centered white card: a 990px `#fff`
card (10px radius, soft drop shadow) on a light-grey `#f8f8f8` page.
Each step is a split row: a FLAT VECTOR illustration on the left (on its
own circular disc) and the step's form content on the right (443px).
Step 1 asks "What do you think about AU services?" with FIVE star-rating
rows (Overall Quality, Ease of Use, Features & Functionality, Customer
Support, Value of Money). Step 2 is a free-text "Your Review" textarea.
Step 3 collects First Name + Last Name (two-column row), Email, and
Phone number. A 110px CIRCULAR step badge (light teal `#43d7ba`) floats
half-outside the card's top-right corner showing "01/03" with a
gradient progress fill; it is the ONLY step indicator — the jQuery
Steps tab nav is `display: none`. Navigation is Previous (grey) /
Next / Submit (teal `#1abc9c`, 140×50, 5px radius, Montserrat 900),
bottom-right, with a fade transition between steps and NO validation
gating (Next advances with empty fields — verified on the live source).
Finish calls `alert('Sumited')`. The three illustration PNGs
(`signup-img-1/2/3.png`) are flat vector scenes on circular discs:
a smiling man with glasses in a blue suit surrounded by speech bubbles
(stars/eye/quote), a thumbs-up hand with megaphone/envelopes/hearts,
and a rocket launching with sparkles — feedback-to-launch narrative.

Source slug: `colorlib-wizard-18` (TEMPLATES.md line 855; the section
"## Bootstrap Wizards (30)" starts at line 844; the slug appears exactly
ONCE — verified `grep -c 'wp/template/colorlib-wizard-18'` = 1 — no dup
rows to reconcile).

Preview URL (REACHABLE, verified 2026-08-18 by direct fetch + browser):
the naive `https://preview.colorlib.com/theme/colorlib-wizard-18/`
returns 404 (the whole 30-member wizard family 404s on the standard path
— do NOT re-probe it); the REAL preview is the family path
**`https://colorlib.com/etc/bwiz/colorlib-wizard-18/index.html`**
(HTTP 200, 10,069 bytes, 152 lines, `<title>Sign Up Form</title>`). Same
`/etc/bwiz/` pattern as wizard-1/10/11/12/13/14/15/16/17 — preps for
those exist (Conjure, Banish, Dispel, Abjure, Bewitch, Enthrall,
Spellbind, Beguile, Mesmerize), same lookup, do not redo this research.
This prep adds wizard-18 = **Incant**.

Section order (1:1 with the source):

1. Page shell (light-grey `#f8f8f8` page, 185px vertical padding, white
   990px rounded card with soft shadow)
2. Circular step badge ("01/03", teal disc, gradient progress fill, top
   right, half-outside the card)
3. Step 1 — Rating survey (heading + five star-rating rows + happy
   reviewer illustration)
4. Step 2 — Review textarea (Your Review + thumbs-up illustration)
5. Step 3 — Personal info (First/Last name row, Email, Phone + rocket
   illustration)
6. Step actions (Previous / Next / Submit, bottom right; Previous
   hidden on step 1)
7. Success state (inline confirmation on finish; source uses
   `alert('Sumited')`)
8. Component Dock footer (recreation addition; source has no footer)

## Naming

The ColorLib source name "Colorlib Wizard 18" is FORBIDDEN as the app
name (and "wizard" itself must not be reused). **Incant** is the new,
original name — single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-08-18: zero hits for `incant` in TEMPLATES.md (`grep -ci`
= 0), `ls apps/`, `openspec/specs/`, `docs/templates/`). It continues
the magic-practice word chain established by the wizard family preps:
Conjure (1) → Banish (10) → Dispel (11) → Abjure (12) → Bewitch (13) →
Enthrall (14) → Spellbind (15) → Beguile (16) → Mesmerize (17) →
**Incant (18) = wizard-18, the 18th member**. Members 2–9 are reserved
in the chain (Evoke, Summon, Invoke, Enchant, Charm, Hex, Bless, Curse —
reserved by the Mesmerize prep) and 19–30 remain for future preps.
Source slug + preview URL are recorded in Purpose above.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 18" (page title: "Sign Up
  Form"). Member 18 of colorlib-wizard-1 … 30, listed in TEMPLATES.md
  under **Bootstrap Wizards (30)**. Its scheme is ANOTHER family scheme:
  a single centered WHITE card with split rows (illustration LEFT, form
  RIGHT) on a light-grey page — closest siblings are Beguile (w16,
  numbered-circle nav, teal `#1abc9c`, gated) and Mesmerize (w17,
  split-panel, periwinkle) for the teal accent, but Incant has NO
  numbered list of steps and NO gating, THREE content-heavy steps on ONE
  card, the floating circular "01/03" badge (unique in the family so
  far), and star-rating widgets. Sibling schemes: Conjure (w1:
  cream/olive, dot nav), Banish (w10: photo bg, #333, progress bar),
  Dispel (w11: coral page, square tiles, gated), Abjure (w12: sky-blue
  page, hidden nav, single-field steps), Bewitch (w13: photo bg, orange
  #f65300, accordion panels, un-gated), Enthrall (w14), Spellbind (w15),
  Beguile (w16: photo bg, teal #1abc9c, numbered-circle nav, gated),
  Mesmerize (w17: split-panel, periwinkle #7c7cdd, one field per step).
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch +
  browser):**
  `https://colorlib.com/etc/bwiz/colorlib-wizard-18/index.html` (HTTP
  200, 10,069 bytes, 152 lines). Stylesheets: `css/style.css` (20,479
  bytes, ~580 lines — ALL custom styling, SCSS-compiled),
  `fonts/material-icon/css/material-design-iconic-font.min.css` (zmdi
  icon font — star glyph `\f27d` used by the rating widget; REPLACE with
  lucide Star, do NOT ship the font). Fonts: local @font-face **Poppins**
  (300–700) + **Montserrat** (300–900) → **Google Fonts `<link>`:
  Poppins 400;500;700 — body/labels/inputs; Montserrat 700;900 —
  buttons + step badge; other weights loaded by the CSS are unused by
  the demo**. Scripts: `vendor/jquery/jquery.min.js`,
  `vendor/jquery-validation/dist/jquery.validate.min.js` +
  `additional-methods.min.js` (LOADED BUT NEVER INITIALIZED — no
  validation gating), `vendor/jquery-steps/jquery.steps.min.js` (the
  step engine), `js/main.js` (1,573 bytes: steps init (fade,
  Prev/Next/Submit labels, `onStepChanging` swaps a gradient class on
  the step-badge inner disc, `onFinished` = `alert('Sumited')`) + a
  dead `.toggle-password` handler left over from a sibling demo — there
  are NO password fields in this wizard).
- **Live DOM structure (from the fetched HTML; the served HTML is the raw
  pre-wizard markup, jQuery Steps wraps the fieldsets at runtime):**
  - `body` (bg `#f8f8f8`, Poppins 14px/1.6, `#222`, weight 500) →
    `div.main` (padding 185px 0) → `div.container` (width 990px,
    `margin: 0 auto`, bg `#fff`, `border-radius: 10px`, box-shadow
    `0px 5px 9.5px 0.5px rgba(0,0,0,0.08)`; ≤992px: `calc(100% - 40px)`,
    max-width 100%) → `form#signup-form.signup-form` (padding
    `0 110px 0 85px`, method POST, enctype multipart/form-data; NO
    action → would POST to the same URL).
  - Three `h3` step titles (EMPTY — no titles; jQuery Steps'
    `titleTemplate` uses them but the rendered step nav is hidden) each
    followed by a `fieldset` (border none, padding 0; `fieldset.current`
    padding-top 95px):
    - **Fieldset 1 — Rating survey:** `span.step-current` (110px circle,
      absolute, top −30px right −35px, bg `#43d7ba`, white Montserrat
      900 17px, a nested `span.step-number` with `<span>01</span>/03`
      where the number is 33px) → `div.fieldset-flex` (flex,
      align-items center, justify-content space-between) →
      `figure` (`images/signup-img-1.png`, 223×223, empty alt,
      margin-left 10px / margin-bottom −126px — the image hangs DOWN
      over the actions area) + `div.fieldset-content` (width 443px) →
      `h2` (Poppins bold 22px, `#222`, padding-bottom 35px) "What do
      you think about AU services ?" (sic — space before the question
      mark) → five `div.form-flex` rows (flex, space-between,
      align-items center): each a `label` (Overall Quality, Ease of Use,
      Features & Functionality, `Custormer Support` (sic — typo in the
      source), Value of Money) + `div.form-rating` (5 radio inputs +
      labels with `title` tooltips "Rocks!" / "Pretty good" / "Meh" /
      "Kinda bad" / "Sucks big time").
    - **Fieldset 2 — Review:** same shell (figure
      `signup-img-2.png`, 236×232) + `div.fieldset-content` →
      `div.form-textarea`: `label.form-label` (Poppins bold 22px, `#222`,
      padding-bottom 15px) "Your Review" + `textarea#your_review`
      (placeholder "Write your comment here", height 178px).
    - **Fieldset 3 — Personal info:** same shell (figure
      `signup-img-3.png`, 225×236) + `div.fieldset-content` →
      `label.form-label` "Enter your information manually below" →
      `div.form-row` (margin 0 −10px; two `div.form-group` children at
      50% width, padding 0 10px): `input#first_name` placeholder
      "First Name" + `input#last_name` placeholder "Last Name" →
      `div.form-group` `input#email` (type=email, placeholder "Email") →
      `div.form-group` `input#phone_number` (type=text, placeholder
      "Phone number"). `.form-group` margin-bottom 20px.
  - **jQuery Steps runtime chrome** (generated): `.content` (height
    410px) wraps the active fieldset; `.steps` nav is `display: none`
    (**no step tabs rendered** — the ONLY progress indicator is the
    circular "01/03" badge); `.actions` (padding-bottom 110px, flex,
    justify-content flex-end) with one `li` per button (margin-left
    10px): Previous (bg `#f8f8f8`, color `#999`, hover `#dfdfdf`) +
    Next/Submit (bg `#1abc9c`, color `#fff`, hover `#148f77`; 140×50,
    Montserrat 900, `border-radius: 5px`). `.disabled` actions are
    `display: none` (Previous hidden on step 1).
  - **No h1, no nav element, no footer, no links** in the flow. The only
    images: the three per-step flat illustrations (PNG) + the zmdi star
    glyph inside the rating widget.
- **Star-rating widget mechanics (CSS, from style.css):** each row is 5
  `<input type="radio">` + `<label>` pairs, radio name per row
  (`rating_quanlity`, `rating_use`, `rating_features`, `rating_support`,
  `rating_value`). Inputs are visually clipped (`position: absolute; top:
-9999px; clip: rect(0,0,0,0)`); labels float right, 1em wide, 20px,
  color `#ebebeb`, and render the zmdi star glyph (`\f27d`) via
  `label:before`. `input:checked ~ label` (and all hover rules) color
  the stars `#fbd91b` (yellow). `label:active` nudges 2px down-right
  while clicking. **Source quirk:** every radio in each row has
  `checked` for values 5, 4 AND 3 — per HTML last-wins this selects
  value 3 → **3 stars render lit (yellow) on load for every row**
  (the three LEFT-most stars; verified via the CSS selector math).
  Recreation: preselect rating 3 per row (controlled state), same 3
  lit up; the screenshot's grey-star look is a pre-interaction
  rendering quirk of the capture, not the CSS behavior.
- **Behaviors (all verified 2026-08-18 from the fetched HTML/CSS/JS + the
  browser):**
  - **Step engine:** jQuery Steps (`headerTag: h3`, `bodyTag: fieldset`,
    `transitionEffect: fade`, labels previous 'Prev' / next 'Next' /
    finish 'Submit', `titleTemplate: '<h3 class="title">#title#</h3>'`).
    **NO VALIDATION GATING: jquery.validate is loaded but never
    initialized in main.js — same verified family pattern as w13/w17:
    Next advances with empty required fields.** Recreation: mirror the
    source — free navigation, no gating, no error states.
  - **Step badge:** the circular `.step-current` badge carries an inner
    `.step-inner` disc whose gradient fill signals progress:
    `onStepChanging` sets `step-inner-0` on step 1
    (`linear-gradient(180deg, #43d7ba 70%, #1abc9c 30%)` — majority
    light teal) and swaps to `step-inner-1` on step 2
    (`linear-gradient(180deg, #43d7ba 50%, #1abc9c 50%)` — 50/50),
    which then persists through step 3. The number text updates
    "01/03" → "02/03" → "03/03" per fieldset.
  - **Navigation:** Previous hidden on step 1 (`.disabled` display
    none); on steps 2–3 it returns to the previous step (no
    re-validation). Right button reads "Next" on steps 1–2 and
    "Submit" on step 3 ("finish" label).
  - **Finish:** `onFinished` = `alert('Sumited')` (sic); form method
    POST with no action. Recreation: inline success state (form replaced
    by a confirmation message), no alert, no fake network (per monorepo
    convention).
  - **Dead code in source:** `.toggle-password` handler + zmdi eye
    glyphs come from a sibling demo (w17-style fields) — NOT part of
    wizard-18. Do NOT add password fields.
  - **Source spelling is content, not corruption:** "What do you think
    about AU services ?" (space before ?), "Custormer Support" (typo),
    "Sumited" (alert typo), "Enter your information manually below".
    The recreation keeps the same KIND of copy but SHOULD fix the
    obvious typos ("Customer Support", normal punctuation, "Submitted")
    — documented deviations.
- **Screenshot (`colorlib-free-wizard-18.jpg`, 1200×972 AVIF; the
  TEMPLATES.md row embeds a downscaled copy), viewed 2026-08-18 in the
  browser:** a browser window showing the page on a LIGHT-GREY
  background with a single WHITE card centered and softly shadowed.
  Inside the card: LEFT, a circular flat illustration of a smiling man
  with glasses in a blue suit+red tie, surrounded by speech bubbles
  (a red bubble with stars, a yellow bubble with an eye, a blue bubble
  with a quote); RIGHT, the bold heading "What do you think about AU
  services?" followed by five labelled rows each with five GREY star
  outlines (Overall Quality, Ease of Use, Features & Functionality,
  Customer Support, Value of Money). Top right of the card a TEAL
  circle badge reads "01/03". Bottom right a solid TEAL "Next" button
  with white text. Steps 2 and 3 (from the PNGs): a thumbs-up hand with
  megaphone/envelopes/hearts on a light-blue disc, and a rocket
  launching with yellow/orange/white sparkles on a dark-navy disc.
  Aesthetic: clean, friendly, flat — a survey/feedback flow; the
  family's "customer feedback" member. **Only THREE images (the
  per-step flat illustrations) — everything else is CSS + the zmdi
  star glyph.** No navbar, no footer content in the source.

## Design tokens

| Token                  | Value                           | Notes                                                                                             |
| ---------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| `--color-accent`       | `#1abc9c`                       | Teal-green: Next/Submit button bg, input/textarea focus border, step-badge gradient bottom half   |
| `--color-accent-light` | `#43d7ba`                       | Light teal: step-badge circle bg + gradient top portion                                           |
| `--color-accent-dark`  | `#148f77`                       | Teal hover for the action buttons                                                                 |
| `--color-star`         | `#fbd91b`                       | Yellow: lit rating stars (checked + hover)                                                        |
| `--color-star-idle`    | `#ebebeb`                       | Unlit stars (also the input border color)                                                         |
| `--color-page`         | `#f8f8f8`                       | Body background (also Previous button bg + its hover is `#dfdfdf`)                                |
| `--color-card`         | `#fff`                          | 990px card bg; card radius 10px; shadow `0px 5px 9.5px 0.5px rgba(0,0,0,0.08)`                    |
| `--color-ink`          | `#222`                          | Body text, h2/form-label headings, input text                                                     |
| `--color-muted`        | `#999`                          | Placeholders (weight 500), Previous button text                                                   |
| `--font-body`          | 'Poppins', sans-serif           | Google Fonts 400;500;700 — body 14px/1.6 500; headings/labels 22px 700; inputs 14px 700           |
| `--font-head`          | 'Montserrat', sans-serif        | Google Fonts 700;900 — action buttons 900; step-badge 900 (17px text, 33px number)                |
| `--card`               | 990px, radius 10px              | `margin: 0 auto`, `#fff`, soft shadow; form padding `0 110px 0 85px`; `.main` padding 185px 0     |
| `--field`              | 50px high, 1px `#ebebeb` border | Width 100%, radius 5px, padding 10px 20px, Poppins 14px 700; placeholder `#999` 500; focus        |
|                        |                                 | border `#1abc9c`; textarea height 178px; `.form-group` margin-bottom 20px                         |
| `--step-badge`         | 110px circle, top −30px r −35px | Absolute in the card's top-right corner (half-outside), bg `#43d7ba`, white Montserrat 900;       |
|                        |                                 | number 33px, "/03" 17px; inner gradient disc: step 1 = `70% #43d7ba / 30% #1abc9c`, steps 2–3 =   |
|                        |                                 | 50/50; z-index above the card; reads "01/03" → "02/03" → "03/03"                                  |
| `--rating`             | 5 radios + labels, 20px stars   | Labels float right (1em, padding 0 .1em), zmdi star `\f27d` → lucide Star; idle `#ebebeb`,        |
|                        |                                 | checked/hover `#fbd91b`; radios clipped off-screen but still in the a11y tree; preselect = 3      |
| `--btn`                | 140×50, radius 5px              | Montserrat 900; actions flex-end, padding-bottom 110px, `li` margin-left 10px; Next/Submit        |
|                        |                                 | `#1abc9c`/white (hover `#148f77`); Previous `#f8f8f8`/`#999` (hover `#dfdfdf`); `.disabled` →     |
|                        |                                 | display none (Previous hidden on step 1); ≤480px: buttons 100px                                   |
| `--step-content`       | 443px right column              | `.fieldset-flex` row: figure LEFT (≈223–236px PNG, margin-left 10px, margin-bottom −126px —       |
|                        |                                 | hangs over the actions area) + 443px content RIGHT; `fieldset.current` padding-top 95px;          |
|                        |                                 | `.content` height 410px                                                                           |
| `--transition`         | fade                            | jQuery Steps `transitionEffect: fade` between steps (no slide, no animation library)              |
| `--success`            | inline confirmation             | Source: `alert('Sumited')` on finish. Recreation: inline success state, no alert, no fake network |
| `--responsive`         | 992 / 480                       | ≤992: container `calc(100% - 40px)`, `.content` 650px, `.fieldset-flex` column (figure on top,    |
|                        |                                 | margin-left 0, margin-bottom 20px), form padding 55px 30px; ≤480: action buttons 100px; no        |
|                        |                                 | horizontal overflow                                                                               |

## Requirements

### Requirement: Page shell

The system SHALL render the light-grey page with the centered white
rounded card holding the three-step wizard.

#### Scenario: Page and card

- **GIVEN** the Incant app is rendered on a desktop viewport
- **THEN** the page background SHALL be `#f8f8f8`
- **AND** the card SHALL be 990px wide, centered with `margin: 0 auto`,
  background `#fff`, `border-radius: 10px` and a soft drop shadow
  (`0px 5px 9.5px 0.5px rgba(0,0,0,0.08)`), with 185px vertical padding
  above and below it (`.main`)
- **AND** the page font SHALL be Poppins (400 via Google Fonts),
  14px/1.6, weight 500, color `#222`

#### Scenario: Responsive card

- **GIVEN** a viewport at or below 992px
- **THEN** the card SHALL widen to `calc(100% - 40px)` with
  `max-width: 100%` and no horizontal overflow
- **AND** the form padding SHALL shrink to 55px 30px and the step rows
  SHALL stack vertically (illustration above content)
- **AND** at or below 480px the action buttons SHALL shrink to 100px

### Requirement: Circular step badge

The system SHALL display the current step as a circular "NN/03" badge at
the card's top-right corner with a gradient progress fill.

#### Scenario: Badge rendering and progress

- **GIVEN** the wizard is rendered on step 1
- **THEN** a 110px circle SHALL render at the top right, half-outside
  the card (top −30px, right −35px), background `#43d7ba`, white
  Montserrat 900 text reading "01/03" (number "01" at 33px, "/03" at
  17px), z-index above the card
- **AND** the badge SHALL contain an inner disc whose gradient reads
  `linear-gradient(180deg, #43d7ba 70%, #1abc9c 30%)` (step 1)
- **WHEN** the user advances to step 2
- **THEN** the badge SHALL read "02/03" and the inner gradient SHALL
  become `linear-gradient(180deg, #43d7ba 50%, #1abc9c 50%)` (50/50)
- **WHEN** the user advances to step 3
- **THEN** the badge SHALL read "03/03" and the 50/50 gradient SHALL
  persist
- **AND** NO step-tab navigation SHALL render (the source sets
  `.steps { display: none }` — the badge is the ONLY indicator)

### Requirement: Step 1 rating survey

The system SHALL render the rating survey with five labelled star-rating
rows.

#### Scenario: Survey heading and rows

- **GIVEN** step 1 is current
- **THEN** the step SHALL render, in order: the happy-reviewer
  illustration (left) and the 443px content column (right) with a
  heading (Poppins bold 22px, `#222`) paraphrasing "What do you think
  about AU services?" (keeping the same kind of copy; fix the source's
  spacing typo)
- **AND** the content SHALL list exactly five rows, each a label +
  five-star rating control:
  1. Overall Quality
  2. Ease of Use
  3. Features & Functionality
  4. Customer Support (source typo "Custormer Support" fixed —
     documented deviation)
  5. Value of Money

#### Scenario: Star rating behavior

- **GIVEN** any rating row on step 1
- **THEN** the row SHALL render five stars (20px, lucide Star replacing
  the source's zmdi glyph), idle color `#ebebeb`, with the rating
  preselected at 3 (three LEFT-most stars lit `#fbd91b` — mirrors the
  source's DOM which ships `checked` on values 5/4/3, last-wins = 3)
- **WHEN** the user clicks the Nth star
- **THEN** that star and all stars to its left SHALL light `#fbd91b`
  and the others SHALL return to `#ebebeb`
- **AND** each row SHALL be an independent radio group with the star
  tooltips from the source: "Rocks!" / "Pretty good" / "Meh" / "Kinda
  bad" / "Sucks big time" (as `title` or accessible description)
- **AND** the ratings SHALL persist when the user leaves and returns to
  step 1

### Requirement: Step 2 review textarea

The system SHALL render the free-text review step.

#### Scenario: Review field

- **GIVEN** step 2 is current
- **THEN** the step SHALL render the thumbs-up/communication
  illustration (left) and the content column (right) with a bold 22px
  label "Your Review" (source copy kept)
- **AND** a full-width textarea SHALL render (height 178px, 1px
  `#ebebeb` border, 5px radius, padding 10px 20px, Poppins 14px bold)
  with placeholder "Write your comment here" (`#999`)
- **WHEN** the textarea is focused
- **THEN** its border SHALL become `#1abc9c`
- **AND** the typed review SHALL persist when the user leaves and
  returns to step 2

### Requirement: Step 3 personal info

The system SHALL render the personal-information fields.

#### Scenario: Info fields

- **GIVEN** step 3 is current
- **THEN** the step SHALL render the rocket-launch illustration (left)
  and the content column (right) with a bold 22px label "Enter your
  information manually below" (source copy kept)
- **AND** the following fields SHALL render in order:
  - a two-column row: First Name + Last Name (each 50% width,
    placeholders "First Name" / "Last Name")
  - Email (type=email, placeholder "Email")
  - Phone number (type=tel or text, placeholder "Phone number")
- **AND** every input SHALL be full-width, 50px high, 1px `#ebebeb`
  border, 5px radius, padding 10px 20px, Poppins 14px bold, `#999`
  placeholder, `#1abc9c` focus border
- **AND** the entered values SHALL persist when the user leaves and
  returns to step 3

### Requirement: Step navigation

The system SHALL move through the three steps with a fade transition,
un-gated (mirroring the source, which loads jquery.validate but never
initializes it).

#### Scenario: Advancing and returning

- **GIVEN** any step, including step 1 with empty fields
- **WHEN** the user activates "Next"
- **THEN** the wizard SHALL advance to the next step with a fade, and MAY
  do so even when the current step has no input (NO validation gating —
  verified live on the source)
- **AND** "Previous" SHALL be hidden on step 1 and visible on steps 2–3
- **WHEN** the user activates "Previous" on steps 2–3
- **THEN** the wizard SHALL return to the previous step (no
  re-validation, values preserved)
- **AND** the right action button SHALL read "Next" on steps 1–2 and
  "Submit" on step 3 (source's finish label)

#### Scenario: Badge updates

- **GIVEN** the user advances from step X to step X+1
- **THEN** the badge SHALL read "0X+1/03" with the gradient updated per
  the step-badge requirement

### Requirement: Finish and success

The system SHALL finish the wizard with an inline success state (the
source shows `alert('Sumited')`).

#### Scenario: Finish

- **GIVEN** the user is on step 3
- **WHEN** the user activates "Submit"
- **THEN** the wizard SHALL complete and an inline confirmation message
  SHALL render (replacing the form, e.g. "Thanks — your feedback was
  submitted!") summarising that the ratings, review and contact details
  were received
- **AND** no alert dialog and no fake network request SHALL occur

### Requirement: Step illustrations

Each step SHALL show its flat vector illustration on the left of the
step row (the source's PNGs are NOT copyable assets).

#### Scenario: Per-step artwork

- **GIVEN** any step is current
- **THEN** a flat vector illustration SHALL render on the left of the
  step row (≈223–236px, aligning with the content column, hanging
  slightly over the actions area per the source's negative bottom
  margin)
- **AND** step 1 SHALL show the happy reviewer: a smiling man with
  glasses in a blue suit with tie inside a circular disc, surrounded by
  speech bubbles styled like the source (red bubble with stars, yellow
  bubble with an eye, blue bubble with a quotation mark)
- **AND** step 2 SHALL show the thumbs-up hand in a dark-blue sleeve
  with a red megaphone, a light-blue speech bubble, yellow envelopes and
  red hearts, on a light-blue disc
- **AND** step 3 SHALL show a white/light-grey rocket with a red nose
  cone and fins, a cyan porthole and light-blue exhaust clouds, on a
  dark-navy disc with yellow/orange/white four-point sparkles
- **AND** the illustrations SHALL be recreated as inline SVG components
  (the source is flat vector — a photographic placeholder would break
  the aesthetic; see docs/templates/incant)
- **AND** decorative-only images SHALL NOT expose a meaningful role
  (empty `alt` per the source)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (recreation improvement:
the source clips its radio inputs off-screen and ships no ARIA).

#### Scenario: Semantics

- **GIVEN** the Incant app is rendered
- **THEN** every input and textarea SHALL have a programmatic label
  (`<label htmlFor>`; the step-1 rating rows use the row label as the
  fieldset/group label)
- **AND** each rating row SHALL be exposed as a radio group (`role=
"radiogroup"` with the row label as its accessible name; the
  off-screen inputs stay in the a11y tree per the source, or use
  keyboard-operable star buttons with `aria-checked` — either pattern
  must be fully keyboard and screen-reader operable)
- **AND** the star controls SHALL have accessible names including their
  tooltip text ("Rocks!", "Pretty good", "Meh", "Kinda bad", "Sucks big
  time") and the current rating
- **AND** the badge SHALL expose the current step to assistive tech
  ("Step 1 of 3") and the wizard region SHALL be labelled ("Incant
  feedback wizard")
- **AND** the action buttons SHALL be real `<button>` elements with
  visible focus-visible rings (the source relies on anchor styling; use
  buttons per monorepo convention, documented)

### Requirement: Footer

The system SHALL include the required attribution footer (the source has
no footer content).

#### Scenario: Component Dock credit

- **GIVEN** the Incant app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- incant` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-18/index.html:
      light-grey `#f8f8f8` page, white 990px rounded card with soft
      shadow, teal circular "01/03" badge half-outside the top-right
      corner (gradient fill), step rows with flat illustration left +
      443px content right, five star rows (3 lit on load), teal
      140×50 "Next"/"Submit" + grey "Previous" bottom right, Previous
      hidden on step 1, no step tabs, fade between steps.
- [ ] Behavior check: Next/Submit advance with EMPTY inputs on every
      step (no gating); Previous returns; badge number + gradient
      update; stars click to set ratings per row (independent, persist
      across steps); textarea + info fields persist; Submit shows the
      inline success message; no alerts, no network calls.
- [ ] Responsive check at 992px / 480px (card fluid ≤992, step rows
      stack vertically, buttons 100px ≤480, no horizontal overflow).
- [ ] No ColorLib strings in any app file; footer links
      https://www.componentdock.com/; provenance lives only in this
      spec, TEMPLATES.md, and the PR.

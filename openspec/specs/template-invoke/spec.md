# Template: Invoke (Registration Form Wizard)

## Purpose

Invoke is a single-page multi-step registration FORM WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 4" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-4/), built under a DIFFERENT
name (**Invoke**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a jQuery-Steps-driven form wizard (`jquery.steps.js` + jQuery
3.3.1): a 1400px-wide flex layout with a left product image (41.07%) and a
right registration form (58.93%) over a full-viewport background image, with a
progress bar (not dots) at the card bottom and Back/Continue/Submit button row.
It is the FOURTH member of the 30-template "Bootstrap Wizards" family
(`colorlib-wizard-1` … `colorlib-wizard-30`).

**WHAT MAKES INVOKE DISTINCT (signature behaviors):**

1. **Academic course registration theme.** The form header is tagged
   "#Academic Programs" with the title "Register for the course online" —
   this is an educational/course signup wizard, not a generic registration.
2. **Background image instead of solid color.** The page uses a full-viewport
   background image (`form-wizard-bg.png`) rather than a solid color.
3. **Progress BAR (not dots).** Instead of clickable step dots, Wizard 4 uses
   a 60%-wide rounded progress bar (`rgba(255,255,255,0.3)` track, filled with
   `rgba(255,255,255,0.8)`) positioned below the card, with a checkmark icon
   that moves along the bar as steps progress.
4. **Native `<select>` dropdowns (4 on step 1).** Step 1 has four native
   `<select>` elements with caret-down icons — no custom dropdown component.
5. **Date picker on step 2.** Step 2 includes a date-picker input for "Date
   of Birth" (the original uses `datepicker.js`; recreate with a native
   date input or a lightweight datepicker).
6. **Pill-shaped buttons with golden-yellow accent.** Continue/Submit buttons
   are 180×54px, `#e4bd37` golden-yellow bg, white text, 27px border-radius
   (pill shape). Back button is white with `#666` text.

## Naming

The ColorLib source name "Colorlib Wizard 4" is FORBIDDEN as the app name.
**Invoke** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `invoke` in those listings). It
follows the verb-chain naming convention established for the Bootstrap Wizards
family: Conjure (1) → Hexcraft (2) → Confwell (3) → **Invoke (4)** → ...
Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 4" (page title: "FormWizard_v4").
  Listed in TEMPLATES.md under **Bootstrap Wizards (30)** (section header
  line 846; the row at line 872 — `wp/template/colorlib-wizard-4/`).
- **Live preview — REACHABLE (verified 2026-09-07):** the naive
  `https://preview.colorlib.com/theme/colorlib-wizard-4/` returns 404; the
  REAL preview is
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html`** (HTTP
  200). Stylesheets: `css/style.css` (ALL styling). Scripts:
  `js/jquery-3.3.1.min.js`, `js/jquery.steps.js`, `vendor/date-picker/js/datepicker.js`,
  `js/main.js`. Fonts: local `@font-face` Muli-Bold + Poppins-Regular +
  Poppins-SemiBold (replace with Google Fonts).
- **Live DOM structure (verified 2026-09-07):**
  - `body` (background image `form-wizard-bg.png`, white text, Poppins-Regular
    15px) → `div.wrapper` (1400px, 100vh, flex) →
    - `div.image-holder` (41.07%, align-self flex-end) → `img` (form-wizard.png)
    - `form` (58.93%, padding 100px left/right, centered) →
      - `div.form-header` → `a` tag "#Academic Programs" (`#e4bd37` bg, 5px
        radius, white text, padding 5px 15px) → `h3` "Register for the course
        online" (Poppins-SemiBold 22px, uppercase, letter-spacing 3px, margin-top
        19px, margin-bottom 46px)
      - `div#wizard` (1px white border, 10px border-radius, `rgba(255,255,255,0.1)`
        bg, padding 47px 57px 50px 50px) → jQuery Steps transforms into:
        - Progress bar: `ul[role=tablist]` styled as a 60%-wide bar at the card
          bottom (`bottom: -69px`, `rgba(255,255,255,0.3)` track, 12px height, 6px
          border-radius), filled portion `rgba(255,255,255,0.8)` expanding from
          33.33% to 66.67% to 100%. Checkmark icon (`\f26b` Material Design)
          at the bar's current position.
        - `div.content` → three `section` panels (role=tabpanel), each with
          `.form-row` groups (flex, 29px gap):
            - **Step 1 — Course info:** Is this course for UF Online? (select:
              No/Yes), Preferred System (select: Canvas/SVG), College/Department
              (select: University of Florida/Havard/Oxford), Term (select:
              Select Term/Term 1/Term 2/Term 3), Instructor Username (text input)
            - **Step 2 — Personal info:** Date of Birth (datepicker), Country
              of Birth (select: United States/United Kingdom/Viet Nam), Your
              Email (text), Phone Number (text), Gender (radio: Male/Female/
              Transgender — 15px circle, 1px `rgba(255,255,255,0.4)` border,
              checked = white 7px inner dot)
            - **Step 3 — Course details:** Course ID (text, placeholder "Ex. abc
              12345 or abc 1234L"), Course Title (text, placeholder "Ex. Intro
              to physic"), Section(s) (text, placeholder "Ex. 3679 or 33fa, 4295"),
              Select Teacher (select: Frances Meyer/Johan Lucas/Merry Linn),
              Terms & Conditions checkbox (pre-checked, 15px circle, white dot)
        - `div.actions ul` (flex, 39px margin-top, justify between) →
          `li[role=menuitem]` buttons: Back (136px, white bg, `#666` text,
          Muli-Bold, uppercase, icon left), Continue (180px, `#e4bd37` bg,
          white text, Muli-Bold, uppercase, icon right), Submit (154px, same
          as Continue). Disabled: opacity 0, 0.3s transition.
- **Design tokens (verified 2026-09-07 from the live stylesheet):**
  - **Page:** full-viewport background image (`form-wizard-bg.png`), white text,
    Poppins-Regular 15px
  - **Wrapper:** 1400px, 100vh, flex (≤1500px: height auto; ≤1199px: 100vh auto;
    ≤991px: image hidden; ≤767px: auto, stacked)
  - **Image column:** 41.07% width, flex-end aligned (≤991px: hidden)
  - **Form column:** 58.93% width, padding 100px left/right, centered vertically
  - **Form card (`#wizard`):** 1px solid white border, 10px border-radius,
    `rgba(255,255,255,0.1)` background, padding 47px 57px 50px 50px
  - **Tag link:** `#e4bd37` golden-yellow bg, white text, Poppins-Regular,
    padding 5px 15px, border-radius 5px
  - **Title (`h3`):** Poppins-SemiBold 22px, uppercase, letter-spacing 3px,
    margin-top 19px, margin-bottom 46px
  - **Form rows:** flex, margin-bottom 29px; label 34.9% width, form-holder
    65.1% width
  - **Form controls:** 41px height, 1px `rgba(255,255,255,0.4)` border,
    `rgba(255,255,255,0.2)` bg, 5px border-radius, white text, uppercase
    placeholder; focus: 7px `rgba(255,255,255,0.7)` box-shadow, 1px `#ceebf7`
    border
  - **Select caret:** 25px icon at bottom-right of form-holder
  - **Progress bar:** 60% width, 12px height, `rgba(255,255,255,0.3)` track,
    6px border-radius; filled portion `rgba(255,255,255,0.8)`, animated width;
    checkmark icon `\f26b` at current position
  - **Buttons:** 54px height; Continue 180px, Back 136px, Submit 154px;
    Muli-Bold, uppercase, letter-spacing 1.3px; Continue/Submit: `#e4bd37` bg,
    white text, 27px border-radius (pill); Back: white bg, `#666` text;
    hover: `#c9a630` (Continue/Submit), `#e5e5e5` (Back); disabled: opacity 0,
    0.3s transition
  - **Checkbox/radio:** 15px circle, 1px `rgba(255,255,255,0.4)` border;
    checked: 7px white inner dot; label padding-left 23px
  - **Fonts:** Poppins-Regular (body, inputs), Poppins-SemiBold (h3 heading),
    Muli-Bold (buttons) — all via Google Fonts `<link>` in index.html
  - **Responsive breakpoints:** ≤1500px (auto height), ≤1199px (100vh, centered
    image), ≤991px (image hidden, auto form), ≤767px (stacked, no border,
    no bg on card, column buttons)

- **Screenshot (`colorlib-free-wizard-4.jpg`, viewed 2026-09-07):** dark
  background image, centered white-bordered card with a left product photo
  (a student/laptop scene), right form area with "#Academic Programs" golden
  tag, "REGISTER FOR THE COURSE ONLINE" heading, underline-style form fields,
  progress bar below the card, and golden-yellow Continue button at bottom.
  Matches the live DOM/CSS exactly; the images are demo photography replaced
  by picsum placeholders in the recreation.

## Naming

ColorLib source name "Colorlib Wizard 4" is FORBIDDEN. **Invoke** is the new
name — follows the established verb chain for the Bootstrap Wizards family.
Verified no collisions with existing apps, specs, or docs.

## Design tokens

| Token                    | Value                              | Notes                                                              |
| ------------------------ | ---------------------------------- | ------------------------------------------------------------------ |
| `--color-page`           | (background image)                 | Full-viewport background image; no solid color                     |
| `--color-card-bg`        | `rgba(255,255,255,0.1)`           | Semi-transparent white card background                             |
| `--color-card-border`    | `1px solid #fff`                   | White border on the wizard card                                    |
| `--color-accent`         | `#e4bd37`                          | Golden-yellow: tag link, Continue/Submit buttons                   |
| `--color-accent-hover`   | `#c9a630`                          | Golden-yellow button hover                                         |
| `--color-back-bg`        | `#fff`                             | Back button background                                             |
| `--color-back-text`      | `#666`                             | Back button text                                                   |
| `--color-back-hover`     | `#e5e5e5`                          | Back button hover                                                  |
| `--color-text`           | `#fff`                             | Body text, input text, placeholder                                 |
| `--color-input-bg`       | `rgba(255,255,255,0.2)`           | Form control background                                            |
| `--color-input-border`   | `rgba(255,255,255,0.4)`           | Form control border                                                |
| `--color-focus-border`   | `#ceebf7`                          | Input focus border color                                           |
| `--color-focus-shadow`   | `rgba(255,255,255,0.7)`           | Input focus box-shadow                                             |
| `--color-progress-track` | `rgba(255,255,255,0.3)`           | Progress bar background                                            |
| `--color-progress-fill`  | `rgba(255,255,255,0.8)`           | Progress bar filled portion                                        |
| `--color-checkbox-border`| `rgba(255,255,255,0.4)`           | Radio/checkbox ring                                                |
| `--color-checkbox-fill`  | `#fff`                             | Radio/checkbox checked inner dot                                   |
| `--font-body`            | Poppins, sans-serif                | 400 Regular (body, inputs, selects)                                |
| `--font-heading`         | Poppins, sans-serif                | 600 SemiBold (h3 title)                                            |
| `--font-button`          | Muli, sans-serif                   | 700 Bold (buttons — load as "Muli" weight 700 via Google Fonts)    |
| `--card-border-radius`   | `10px`                             | Wizard card border radius                                          |
| `--control-radius`       | `5px`                              | Form control border radius                                         |
| `--btn-radius`           | `27px`                             | Button border radius (pill shape)                                  |
| `--btn-h`                | `54px`                             | Button height                                                      |
| `--btn-w`                | `180/136/154px`                    | Continue / Back / Submit widths                                    |
| `--tag-radius`           | `5px`                              | Tag link border radius                                             |
| `--progress-h`           | `12px`                             | Progress bar height                                                |
| `--progress-radius`      | `6px`                              | Progress bar border radius                                         |
| `--checkbox-size`        | `15px`                             | Radio/checkbox circle size (inner dot 7px)                         |
| `--input-h`              | `41px`                             | Form control height                                                |

## Requirements

### Requirement: Page shell

The system SHALL render a full-viewport page with a background image,
a 1400px flex-centered wrapper containing a left image and right form.

#### Scenario: Full-viewport background

- **GIVEN** the Invoke app is rendered on a desktop viewport
- **THEN** the page SHALL have a background image covering the full viewport
- **AND** the body font SHALL be Poppins (400/600 from Google Fonts)
- **AND** all text SHALL be white by default

#### Scenario: Responsive wrapper

- **GIVEN** a viewport below 1500px
- **THEN** the wrapper height SHALL become auto (scrollable)
- **GIVEN** a viewport below 991px
- **THEN** the left image column SHALL be hidden
- **GIVEN** a viewport below 767px
- **THEN** the layout SHALL stack vertically with no card border/background

### Requirement: Wizard card layout

The system SHALL render a semi-transparent card with a left image column
(41.07%) and a right form column (58.93%).

#### Scenario: Card with image and form columns

- **GIVEN** the Invoke app is rendered
- **THEN** a card with 1px white border, 10px border-radius, and
  `rgba(255,255,255,0.1)` background SHALL render
- **AND** the left column SHALL be 41.07% wide, showing a product image
  (`picsum.photos/seed/invoke-<n>/600/800`)
- **AND** the right column SHALL be 58.93% wide with 100px left/right padding,
  containing the heading and form

#### Scenario: Form header

- **GIVEN** the wizard card is rendered
- **THEN** a tag link "#Academic Programs" SHALL render in `#e4bd37` golden-yellow
  bg with white text, Poppins-Regular, 5px border-radius, padding 5px 15px
- **AND** below it, the title "Register for the course online" SHALL render
  in Poppins-SemiBold 22px, uppercase, letter-spacing 3px, margin-top 19px,
  margin-bottom 46px

### Requirement: Progress bar indicator

The system SHALL render a progress bar (not dots) below the wizard card that
fills from 33.33% to 66.67% to 100% as the user advances through steps.

#### Scenario: Progress bar rendering

- **GIVEN** the wizard is on step 1
- **THEN** a 60%-wide, 12px-tall rounded bar SHALL render below the card,
  centered, with `rgba(255,255,255,0.3)` track and `rgba(255,255,255,0.8)`
  filled portion at 33.33% width
- **AND** a checkmark icon SHALL be positioned at the end of the filled portion

#### Scenario: Progress bar advancement

- **GIVEN** the wizard is on step 2
- **THEN** the filled portion SHALL expand to 66.67% width
- **GIVEN** the wizard is on step 3
- **THEN** the filled portion SHALL expand to 100% width
- **AND** the transitions SHALL animate over 0.5s ease

### Requirement: Course info step (step 1)

The system SHALL render the course information step with four native select
dropdowns and one text input.

#### Scenario: Course info fields

- **GIVEN** the wizard is on step 1
- **THEN** the fields SHALL render in order: "Is this course for UF Online?"
  (select: No/Yes), "Preferred System" (select: Canvas/SVG), "College /
  Department" (select: University of Florida/University of Havard/University
  of Oxford), "Term" (select: Select Term/Term 1/Term 2/Term 3),
  "Instructor Username" (text input)
- **AND** every form control SHALL be 41px tall, 5px border-radius,
  `rgba(255,255,255,0.2)` bg, 1px `rgba(255,255,255,0.4)` border
- **AND** select dropdowns SHALL show a caret-down icon at the right

### Requirement: Personal info step (step 2)

The system SHALL render the personal information step with a date picker,
select, text inputs, and gender radios.

#### Scenario: Personal info fields

- **GIVEN** the wizard is on step 2
- **THEN** the fields SHALL render in order: "Date of Birth" (date input),
  "Country of Birth" (select: United States/United Kingdom/Viet Nam),
  "Your Email" (text), "Phone Number" (text), "Gender" (radio: Male/Female/
  Transgender)
- **AND** Male SHALL be preselected

#### Scenario: Gender radios

- **GIVEN** the wizard is on step 2
- **THEN** the gender radios SHALL render as 15px circles with 1px
  `rgba(255,255,255,0.4)` border
- **AND** the checked radio SHALL show a 7px white inner dot

### Requirement: Course details step (step 3)

The system SHALL render the course details step with text inputs, a teacher
select, and a terms checkbox.

#### Scenario: Course details fields

- **GIVEN** the wizard is on step 3
- **THEN** the fields SHALL render in order: "Course ID" (text, placeholder
  "Ex. abc 12345 or abc 1234L"), "Course Title" (text, placeholder "Ex. Intro
  to physic"), "Section(s)" (text, placeholder "Ex. 3679 or 33fa, 4295"),
  "Select Teacher" (select: Frances Meyer/Johan Lucas/Merry Linn)

#### Scenario: Terms checkbox

- **GIVEN** the wizard is on step 3
- **THEN** a checkbox SHALL render with text "I agree all statement in Terms
  & Conditions"
- **AND** it SHALL be PRE-CHECKED (7px white inner dot)

### Requirement: Wizard navigation

The system SHALL provide Back/Continue/Submit navigation with the source's
color state machine, never blocking navigation between steps.

#### Scenario: Button row

- **GIVEN** the wizard is rendered
- **THEN** the button row SHALL render below the progress bar with flex
  justify-between layout and 39px margin-top
- **AND** the buttons SHALL be labeled **Back** (chevron-left icon),
  **Continue** (chevron-right icon), and **Submit** (check icon) on the
  last step

#### Scenario: Step-1 button state

- **GIVEN** the wizard is on step 1
- **THEN** only the Continue button SHALL be visible (golden-yellow `#e4bd37`
  with white text), and Back SHALL be transparent but keep its 136px layout
  slot

#### Scenario: Later-step button states

- **GIVEN** the wizard is on step 2 or 3
- **THEN** Back SHALL be visible (white bg, `#666` text)
- **AND** Continue (step 2) / Submit (step 3) SHALL be golden-yellow
  `#e4bd37` with white text
- **AND** Continue/Submit hover SHALL be `#c9a630` and Back hover `#e5e5e5`

#### Scenario: Step transition

- **GIVEN** the wizard is on any step
- **WHEN** the user clicks Continue
- **THEN** the wizard SHALL advance to the next step with a fade transition
- **AND** navigation SHALL never be blocked (enableAllSteps, no validation)

### Requirement: Attribution footer

The system SHALL render a minimal attribution footer linking
`https://www.componentdock.com/` branded as "Component Dock" per monorepo
convention.

#### Scenario: Footer link

- **GIVEN** the Invoke app is rendered
- **THEN** a footer SHALL render with a link to `https://www.componentdock.com/`
  labeled "Component Dock"

## Verification checklist

- [ ] All three steps render with correct fields and placeholders
- [ ] Progress bar fills correctly (33.33% → 66.67% → 100%)
- [ ] Button state machine works: step 1 shows only Continue; steps 2–3 show
  Back + Continue/Submit with correct colors
- [ ] Back button is transparent on step 1 but keeps its layout slot
- [ ] Native select dropdowns render with caret icons
- [ ] Gender radios show 15px circles with white inner dot when checked
- [ ] Terms checkbox is pre-checked
- [ ] Responsive: image hides below 991px; layout stacks below 767px
- [ ] Fonts: Poppins 400/600, Muli Bold loaded from Google Fonts
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] 100% test coverage (Vitest + Testing Library)

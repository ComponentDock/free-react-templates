# Template: Spellcast (Multi-Step Form Wizard)

## Purpose

Spellcast is a single-page multi-step FORM WIZARD in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Colorlib Wizard 9"
free template (source: https://colorlib.com/wp/template/colorlib-wizard-9/),
built under a DIFFERENT name (**Spellcast**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps-driven form wizard (`jquery.steps.js` + jQuery
3.3.1): an 819px-wide white card centered on a full-viewport background image,
containing a 3-step wizard with form inputs (left-icon style), a country
dropdown (select element), a 6-item clickable image grid for activity selection
with vertical text labels, and Backward/Forward/Submit buttons. Step progress is
shown as a large "N / 3" counter in the top-right corner (not dots). It is a
member of the 30-template "Bootstrap Wizards" family (`colorlib-wizard-1` …
`colorlib-wizard-30`): every sibling is the same jQuery-Steps skeleton with a
different color scheme and form content per step.

**WHAT MAKES SPELLCAST DISTINCT (signature behaviors):**

1. **Numbered step counter instead of dots.** The step indicator is a large
   "1 / 3" display (CSS `:before` content "1" in 40px Poppins-Medium `#ccc`,
   `/ 3` in 15px offset to the right). Progress is numeric, not graphical
   dots. The `.steps .current-info` and `.steps .number` elements are hidden.
2. **Left-icon form inputs.** Every `.form-control` is 42px tall with a
   1px `#ccc` border (full box, not underline-only), `padding-left: 46px`
   to accommodate a 17px Material Design Iconic Font icon positioned
   absolutely at left 15px center. Focus turns the border `#3377c0` (blue).
   Placeholder text is `#999`, input text is `#999` with Poppins-Medium.
3. **6-item activity grid (step 3).** A 3×2 flex grid of clickable cards
   (31.25% width each), each with an image thumbnail (86% width) and a
   vertical text label (14% width, `writing-mode: tb-rl`, rotated -180deg,
   11px uppercase Poppins-Medium, gray `#b3b3b3` background). The active
   item's label turns blue `#3377c0`. Clicking an item selects it (toggles
   the `.active` class). Images dim to 0.6 opacity on hover.
4. **Blue brand color `#3377c0`.** Used for h3 headings (35px uppercase,
   letter-spacing 3px), active grid labels, button backgrounds, and input
   focus borders. Secondary blue `#3b87d9` for button hover.
5. **Native `<select>` dropdown (step 2).** Not a custom dropdown: a
   standard `<select>` with `-moz-appearance: none; -webkit-appearance: none`
   (hides native arrow) and a custom `zmdi-chevron-down` icon positioned
   right 15px. Options: United States, United Kingdom, Viet Nam. The
   Postcode/Zip field in step 2 uses `type="password"` with a
   `zmdi-eye` toggle icon (password visibility toggle).
6. **Full-viewport background image.** The body has `background:
   url("images/form-wizard-bg.jpg") no-repeat center center; background-size:
   cover; height: 100vh`. The `.wrapper` has a repeating pattern
   (`images/form-bg.png`). The recreation uses a CSS gradient or solid color
   instead of proprietary images.
7. **No validation gating.** Like all wizards in this family,
   `enableAllSteps: true` — navigation is never blocked. The original
   `main.js` has no validation logic.

## Naming

The ColorLib source name "Colorlib Wizard 9" is FORBIDDEN as the app name.
**Spellcast** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-09-06: zero hits for "spellcast" in those
listings). It is a member of the Bootstrap Wizards family; sibling specs
already exist for wizard-1 (Conjure), wizard-2 (Conjury), wizard-3 (Inscribe),
wizard-4 (Formflow), wizard-5 (Steppath), wizard-6 (Stepcraft), wizard-7
(Stepforge), wizard-8 (Shopsteps), wizard-10 (Banish), wizard-11 (Dispel),
wizard-12 (Abjure), wizard-13 (Bewitch), wizard-14 (Enthrall), wizard-15
(Spellbind), wizard-16 (Beguile), wizard-17 (Mesmerize), wizard-18 (Incant),
wizard-19 (Stepwise), wizard-20 (Enchant), wizard-21 (Grimoire), wizard-22
(Rune), wizard-23 (Hex), wizard-24 (Sorcery), wizard-25 (Sigil), wizard-26
(Arcanum), wizard-27 (Wizardry), wizard-28 (Formcraft), wizard-29 (Elixir),
wizard-30 (Signpost). **Spellcast fills the wizard-9 gap.**

Source slug + preview URL recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 9" (page title: "FormWizard_v9").
  Listed in TEMPLATES.md under **Bootstrap Wizards (30)** (section header
  line 846; row at line 877 — `wp/template/colorlib-wizard-9/`).
- **Live preview — REACHABLE via alternative URL (verified 2026-09-06):**
  the naive `https://preview.colorlib.com/theme/colorlib-wizard-9/` returns
  404; the REAL preview is
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html`** (HTTP
  200, 10,419 bytes, `<title>FormWizard_v9</title>` — same `/etc/bwiz/`
  path pattern as the rest of the wizard family). Stylesheets:
  `css/style.css` (5,915 bytes — ALL styling, hand-written, NO Bootstrap).
  Scripts: `js/jquery-3.3.1.min.js`, `js/jquery.steps.js` (wizard plugin),
  `js/main.js` (steps init). Fonts: local `@font-face` Poppins-Regular,
  Poppins-Medium, Poppins-SemiBold → **Google Fonts `<link>` (Poppins
  400, 500, 600)**. Icon font: Material Design Iconic Font → **replace
  with lucide-react icons** (do NOT ship the font).
- **Live DOM structure (1:1, verified from the fetched HTML):**
  - `div.wrapper` (819px, `padding: 7px`, repeating pattern bg) →
    `form#wizard` (jQuery Steps transforms this at load):
    - `div.wizard` (white `#fff` bg, `padding: 64px 58px 0`, height 548px)
    - `div.steps` → `ul` (`:before` content "1" 40px `#ccc` Poppins-Medium;
      `:after` content "/ 3" 15px `#ccc` offset right 16px top 13px;
      `.step-2:before` → "2", `.step-3:before` → "3")
    - Three `section` elements (the steps), each with an `h3` title + form
      content, jQuery Steps shows one at a time with fade transition
    - `div.actions` → `ul` (flex, space-between, margin-top 42px) → `li`
      buttons
  - **Step 1 — "User profile":** h3 "USER PROFILE" (blue, uppercase,
    35px). Three 2-column rows: (1) Full Name + Education Level;
    (2) Email ID + Phone Number; (3) Specialization + Date of Birth
    (datepicker). Each input: 42px, 1px `#ccc` border, left icon
    (account-o, edit, email, smartphone-android, spellcheck, calendar),
    `padding-left: 46px`, placeholder text `#999`.
  - **Step 2 — "Residential address":** h3 "RESIDENTIAL ADDRESS". Three
    2-column rows: (1) Country (native `<select>` with chevron-down icon)
    + Street Address; (2) Apartment + Town/City; (3) County + Postcode/Zip
    (type="password" with eye icon). Country options: United States,
    United Kingdom, Viet Nam.
  - **Step 3 — "What are you doing?":** h3 "WHAT ARE YOU DOING?" (inline
    `margin-bottom: 37px`). 3×2 flex grid of 6 activity cards: Programming
    (active by default), Sports, Business, Tour Guide, Art-Design, Doctor.
    Each card: image thumbnail (86% width) + vertical label (14% width,
    `writing-mode: tb-rl`, rotate -180deg, 11px uppercase, gray `#b3b3b3`
    bg → active blue `#3377c0` bg, white text).
  - **Button row:** `div.actions ul` with two `li` items (Backward, Forward)
    on steps 1–2; three items (Backward, Forward, Submit) on step 3.
    `li:first-child a` = outline (transparent bg, 1px `#3377c0` border,
    `#3377c0` text); other `a` = solid `#3377c0` bg, white text. All 42px
    tall, 112px wide, uppercase, letter-spacing 1px. Hover: `#3b87d9`.
    When `aria-disabled="true"` (Backward on step 1), a pseudo-element
    message "Your must fill all fields, to be able to continue" replaces
    the buttons (the `a` elements get `display: none`).
  - The original has NO footer; per monorepo convention add a minimal
    attribution footer linking `https://www.componentdock.com/`
    ("Component Dock").

## Design tokens

| Token                    | Value                        | Notes                                                                          |
| ------------------------ | ---------------------------- | ------------------------------------------------------------------------------ |
| `--color-page-bg`        | gradient/image               | Body: `url("form-wizard-bg.jpg")` cover 100vh; recreation: solid or gradient   |
| `--color-wrapper-bg`     | pattern repeat               | `.wrapper`: `url("form-bg.png")` repeat; recreation: subtle pattern or solid   |
| `--color-card`           | `#fff`                       | Wizard card background                                                         |
| `--color-brand`          | `#3377c0`                    | Blue: h3 headings, active grid label, button bg, input focus border            |
| `--color-brand-hover`    | `#3b87d9`                    | Button hover blue                                                              |
| `--color-text`           | `#999`                       | Body text, input text, placeholder text                                        |
| `--color-label`          | `#333`                       | Form labels (dark)                                                             |
| `--color-border`         | `#ccc`                       | Input borders, step counter text                                               |
| `--color-grid-inactive`  | `#b3b3b3`                    | Inactive grid item label background                                            |
| `--color-grid-active`    | `#3377c0`                    | Active grid item label background                                              |
| `--font-body`            | Poppins, sans-serif          | 400 Regular (Google Fonts)                                                     |
| `--font-medium`          | Poppins, sans-serif          | 500 Medium (inputs, grid labels, step counter)                                 |
| `--font-heading`         | Poppins, sans-serif          | 600 SemiBold (h3 headings)                                                     |
| `--card-w`               | `819px`                      | Wrapper width (card = 819px - 14px padding)                                    |
| `--card-h`               | `548px`                      | Wizard card height                                                             |
| `--input-h`              | `42px`                       | Input/button height                                                            |
| `--input-pad-left`       | `46px`                       | Input left padding for icon                                                    |
| `--input-icon-size`      | `17px`                       | Left icon font size                                                            |
| `--btn-w`                | `112px`                      | Button width                                                                  |
| `--btn-gap`              | space-between                | Button row spacing                                                             |
| `--h3-size`              | `35px`                       | h3 heading size (uppercase, letter-spacing 3px, centered)                      |
| `--grid-item-w`          | `31.25%`                     | Activity grid item width (3-column)                                            |
| `--grid-label-w`         | `13.96%`                     | Grid item vertical label width                                                 |
| `--grid-thumb-w`         | `86.04%`                     | Grid item thumbnail width                                                      |
| `--grid-label-size`      | `11px`                       | Grid label font size (uppercase, writing-mode tb-rl)                           |
| `--step-counter-size`    | `40px`                       | Step number font size (CSS :before)                                            |
| `--step-slash-size`      | `15px`                       | "/ 3" text size (CSS :after)                                                   |

## Requirements

### Requirement: Page shell

The system SHALL render a full-viewport page with a background image/gradient,
a centered wrapper with a subtle repeating pattern, and the wizard card
vertically and horizontally centered.

#### Scenario: Full-viewport background

- **GIVEN** the Spellcast app is rendered on a desktop viewport
- **THEN** the page background SHALL be a full-viewport cover image or
  gradient (recreation uses a CSS gradient or solid color, not the
  proprietary `form-wizard-bg.jpg`)
- **AND** the page SHALL be exactly viewport height with the card
  vertically and horizontally centered

#### Scenario: Wrapper pattern

- **GIVEN** the Spellcast app is rendered
- **THEN** the wrapper SHALL have a subtle repeating pattern background
  (recreation uses a CSS pattern or light texture, not the proprietary
  `form-bg.png`)

#### Scenario: Responsive stacking

- **GIVEN** a viewport below 768px
- **THEN** the page SHALL scroll (height auto, no fixed viewport), the
  card SHALL stack vertically, the wrapper SHALL go full-width with
  reduced padding, and the form rows SHALL stack (each field full-width)

### Requirement: Wizard card layout

The system SHALL render the white card with fixed dimensions, containing the
step indicator, step content, and navigation buttons.

#### Scenario: Card dimensions

- **GIVEN** the Spellcast app is rendered on desktop
- **THEN** a white card SHALL render at approximately 819px wide
  (wrapper width minus 14px padding) and 548px tall
- **AND** the card SHALL have `padding: 64px 58px 0` (top/sides)

#### Scenario: Step counter display

- **GIVEN** the wizard is on step N (of 3 total)
- **THEN** a step counter SHALL render in the top-right corner of the card
- **AND** the counter SHALL display the current step number (N) in 40px
  Poppins-Medium color `#ccc` followed by "/ 3" in 15px offset to the right
- **AND** the counter SHALL update when navigating between steps (N changes
  from "1" to "2" to "3")

### Requirement: Step 1 — User profile

The system SHALL render the user profile step with 6 form fields in 3
2-column rows, each with a left icon.

#### Scenario: User profile fields

- **GIVEN** the wizard is on step 1
- **THEN** the heading SHALL read **"USER PROFILE"** in Poppins 600,
  35px, uppercase, letter-spacing 3px, color `#3377c0`, centered
- **AND** the fields SHALL render in order: row 1: Full Name +
  Education Level; row 2: Email ID + Phone Number; row 3:
  Specialization + Date of Birth
- **AND** every input SHALL be 42px tall with 1px `#ccc` border (full box),
  `padding-left: 46px`, text `#999`, placeholder `#999`
- **AND** each input SHALL have a left icon (17px, absolutely positioned
  left 15px center): account-o (Full Name), edit (Education Level),
  email (Email ID), smartphone-android (Phone Number), spellcheck
  (Specialization), calendar (Date of Birth)
- **AND** the Date of Birth input SHALL function as a datepicker
  (recreation: native `<input type="date">` or a simple date picker
  component)

#### Scenario: Input focus state

- **GIVEN** a form input on any step
- **WHEN** the input receives focus
- **THEN** the input border SHALL change to blue `#3377c0`

### Requirement: Step 2 — Residential address

The system SHALL render the residential address step with 6 fields in 3
2-column rows, including a native select dropdown and a password field.

#### Scenario: Address fields

- **GIVEN** the wizard is on step 2
- **THEN** the heading SHALL read **"RESIDENTIAL ADDRESS"** in the same
  style as step 1
- **AND** the fields SHALL render in order: row 1: Country (select) +
  Street Address; row 2: Apartment + Town/City; row 3: County +
  Postcode/Zip
- **AND** the Country field SHALL be a native `<select>` with options:
  United States, United Kingdom, Viet Nam; the native arrow SHALL be
  hidden and replaced with a custom chevron-down icon at right 15px
- **AND** the Postcode/Zip field SHALL be `type="password"` with a
  `zmdi-eye` toggle icon (recreation: eye/eye-off lucide icon that
  toggles input type between password and text)

### Requirement: Step 3 — Activity selection

The system SHALL render a 3×2 grid of clickable activity cards, each with an
image thumbnail and a vertical text label.

#### Scenario: Activity grid layout

- **GIVEN** the wizard is on step 3
- **THEN** the heading SHALL read **"WHAT ARE YOU DOING?"** in the same
  blue style, with `margin-bottom: 37px`
- **AND** a 3×2 flex grid SHALL render with 6 items: Programming (active
  by default), Sports, Business, Tour Guide, Art-Design, Doctor
- **AND** each item SHALL be 31.25% wide, containing a thumbnail image
  (86.04% width, using `picsum.photos/seed/spellcast-<n>/260/180`) and a
  vertical label (13.96% width)

#### Scenario: Grid item label style

- **GIVEN** an activity grid item
- **THEN** the label SHALL be 11px uppercase Poppins-Medium with
  `writing-mode: tb-rl` and `transform: rotate(-180deg)`, centered
  vertically and horizontally
- **AND** the inactive label background SHALL be gray `#b3b3b3` with
  white text
- **AND** the active label background SHALL be blue `#3377c0` with
  white text

#### Scenario: Grid item interaction

- **GIVEN** the activity grid is rendered
- **WHEN** the user clicks a grid item
- **THEN** that item SHALL become active (blue label) and the previously
  active item SHALL become inactive (gray label)
- **AND** hovering over any grid item SHALL reduce the image opacity to 0.6

### Requirement: Navigation buttons

The system SHALL render Backward, Forward, and Submit buttons at the bottom
of the wizard card.

#### Scenario: Button layout

- **GIVEN** the wizard is rendered
- **THEN** a button row SHALL render below the step content with
  `justify-content: space-between` and `margin-top: 42px`
- **AND** on step 1: two buttons SHALL render (Backward outline, Forward
  solid)
- **AND** on step 2: two buttons (Backward outline, Forward solid)
- **AND** on step 3: three buttons (Backward outline, Forward solid,
  Submit solid)

#### Scenario: Button styles

- **GIVEN** the button row is rendered
- **THEN** the first button (Backward) SHALL have: transparent background,
  1px `#3377c0` border, `#3377c0` text
- **AND** all other buttons (Forward, Submit) SHALL have: `#3377c0`
  background, white text, no visible border
- **AND** all buttons SHALL be 42px tall, 112px wide, uppercase,
  letter-spacing 1px, Poppins-Medium
- **AND** hover on outline button: border becomes transparent, text
  becomes white, background becomes `#3b87d9`
- **AND** hover on solid buttons: background becomes `#3b87d9`

#### Scenario: Backward disabled on step 1

- **GIVEN** the wizard is on step 1
- **THEN** the Backward button SHALL be disabled (`aria-disabled="true"`)
- **AND** the disabled state SHALL display the message "Your must fill
  all fields, to be able to continue" (verbatim from the original,
  including the grammar) replacing the button text
- **AND** clicking Forward SHALL advance to step 2

#### Scenario: Free navigation

- **GIVEN** the wizard is on any step
- **WHEN** the user clicks Forward
- **THEN** the wizard SHALL advance one step (fade transition)
- **WHEN** the user clicks Backward
- **THEN** the wizard SHALL go back one step
- **AND** navigation SHALL never be blocked by validation

### Requirement: Semantics and accessibility

#### Scenario: Landmarks and ARIA

- **GIVEN** the Spellcast app is rendered
- **THEN** the page SHALL have a `<main>` landmark wrapping the wizard
- **AND** the step counter SHALL have appropriate `aria-label` (e.g.
  "Step 1 of 3")
- **AND** all form inputs SHALL have associated `<label>` elements
  (via `htmlFor`)
- **AND** the select dropdown SHALL have `aria-label` or associated label

#### Scenario: Keyboard and focus

- **GIVEN** the Spellcast app is rendered
- **THEN** all interactive elements (inputs, buttons, grid items, select)
  SHALL be reachable via Tab
- **AND** visible focus-visible rings SHALL appear on all focusable
  elements (restoring what the original's `outline: none` removes)
- **AND** grid items SHALL be focusable (`tabIndex={0}`) and activatable
  via Enter/Space

### Requirement: Component Dock credit

#### Scenario: Footer

- **GIVEN** the Spellcast app is rendered
- **THEN** a minimal footer SHALL render below the wizard card
- **AND** the footer SHALL contain a link to `https://www.componentdock.com/`
  labeled "Component Dock"

## Verification checklist

- [ ] `openspec/specs/template-spellcast/spec.md` exists on main
- [ ] `docs/templates/spellcast/tasks.md` exists on main
- [ ] Spec includes: source URL, preview URL (the `/etc/bwiz/` one),
      design tokens, Gherkin scenarios for all sections
- [ ] No ColorLib references in any app code (only in spec + TEMPLATES.md)
- [ ] New name "Spellcast" does not collide with any existing app or spec
- [ ] Poppins font loaded via Google Fonts (400, 500, 600)
- [ ] All design tokens extracted from the live CSS are documented
- [ ] Screenshot description matches the live DOM/CSS analysis
- [ ] 3-step wizard structure matches the original section order:
      User Profile → Residential Address → Activity Selection
- [ ] Activity grid: 6 items with vertical labels, active state blue
- [ ] Button row: outline Backward + solid Forward/Submit, blue brand
- [ ] Step counter: "N / 3" numeric display (not dots)
- [ ] Footer: Component Dock link present

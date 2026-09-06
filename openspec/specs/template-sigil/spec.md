# Template: Sigil (Registration Form Wizard)

## Purpose

Sigil is a single-page three-step payment account creation FORM WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 25" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-25/), built under a DIFFERENT
name (**Sigil**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a jQuery-Steps-driven form wizard (`jquery.steps.js` + jQuery
3.x): an 851px-wide card with a dark slate-purple (`#383a4f`) full-page
background and a medium purple-gray (`#525575`) card body, a white step
navigation header with three circular icons (check-mark icons that turn green
`#25b45b` when active/done), a three-section form (Personal Information, Bank
Information, Confirm Details), and circular green action buttons (50×50px,
`#25b45b`). It is the 25th member of the 30-template "Bootstrap Wizards"
family (`colorlib-wizard-1` … `colorlib-wizard-30`).

**Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-25/ — **404**.
The real demo lives at https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html
(HTTP 200, ~8.9 KB HTML, `<title>Wizard-v5</title>`, `css/style.css`
~14.5 KB parsed for tokens, `js/main.js` ~0.6 KB). The screenshot in
TEMPLATES.md (`colorlib-free-wizard-25.jpg`, 1200×972, viewed in the
browser) matches the demo. This is a jquery-steps wizard demo — no
preview.colorlib.com mirror.

**WHAT MAKES SIGIL DISTINCT (signature behaviors):**

1. **Dark purple-gray page + purple card, white step header.** The body is a
   solid dark slate-purple `#383a4f` (no photo, no gradient; `.page-content`
   flex centers the card). The card is 851px, `#525575` purple-gray,
   radius **10px**, shadow `0px 8px 20px 0px rgba(0,0,0,0.15)`. The step
   navigation header is WHITE (`#fff`) with `border-top-left-radius: 10px`
   and `border-top-right-radius: 10px`. Each step shows a 40px circular
   icon (check-mark in a circle) with label text to the right. The active
   step gets a green border + green icon (`#25b45b`); done steps get a
   solid green circle with white icon. A 1px `#e5e5e5` vertical line
   separates the step icons (75px tall).
2. **Three-step payment account form.** Step 1 "Personal Information":
   First Name, Last Name (side-by-side), Gender (radio: Male/Female),
   Address Location (full-width with pin icon), Phone Number + Zip Code
   (side-by-side), Date of Birth (three dropdowns: day/month/year). Step 2
   "Bank Information": Bank Name (with search icon), Branch Name,
   Email Address, Account Name, Account Number (with card icon), Expiry
   Date (three dropdowns). Step 3 "Confirm Details": a summary table
   (`rgba(255,255,255,0.1)` background, `rgba(255,255,255,0.2)` borders)
   showing all entered values with `#ccc` labels and `#fff` values.
3. **`enableAllSteps: true` — NO validation gating.** The original never
   blocks navigation between steps (no required-field validation in
   `main.js`); the forms are decorative. Recreate that: navigation always
   succeeds.
4. **Circular green action buttons (50×50px).** The action bar sits at the
   bottom-right of the card with two circular buttons: Previous (hidden on
   step 1 via `opacity: 0`) and Next/Finish. Both are `#25b45b` green
   circles with white chevron-right icons (Material Design Iconic Font
   `zmdi-chevron-right` → lucide `ChevronRight`). Previous shows on steps
   2–3. Button hover darkens to `#219c50`.
5. **On-step-changing populates confirmation table.** The `onStepChanging`
   callback reads all form fields and populates the step 3 table cells
   (`#fullname-val`, `#email-val`, `#phone-val`, `#address-val`,
   `#gender-val`, `#account-name-val`, `#account-number-val`). This means
   the confirmation table always reflects the CURRENT field values, even
   if the user navigated back and changed something.
6. **Nunito font family.** The card uses `'Nunito', sans-serif` at 18px
   base — a rounded, friendly Google Font distinct from the Roboto used
   in most other wizard siblings. Form inputs are 16px, labels are white,
   placeholders vary by input (`#999` for step 1, `#333` for address/phone,
   `#666` for bank fields).
7. **Material Design Iconic Font icons.** The original uses `zmdi` icons
   for step check-marks, pin, search, card, and chevrons → replace with
   lucide-react equivalents (Check, MapPin, Search, CreditCard, ChevronRight).

## Naming

The ColorLib source name "Colorlib Wizard 25" is FORBIDDEN as the app name
(and "wizard" itself must not be reused). **Sigil** is the new, original
name — single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
via `ls apps/ | grep sigil` and `git ls-tree origin/main --name-only
openspec/specs/ | grep sigil` — both empty). The name evokes the magical/
spell theme of the wizard sibling specs (Conjure, Banish, Dispel, Abjure,
Bewitch, Enthrall, Enchant, Hex, Rune, Grimoire, etc.).

## Design Tokens

Extracted from the live demo stylesheet
(`https://colorlib.com/etc/bwiz/colorlib-wizard-25/css/style.css`) and
HTML structure:

| Token                     | Value                                          | Source                           |
| ------------------------- | ---------------------------------------------- | -------------------------------- |
| Page background           | `#383a4f` (dark slate-purple)                  | `.page-content` background       |
| Card background           | `#525575` (medium purple-gray)                 | `.wizard-form` background        |
| Card width                | `851px`                                        | `.wizard-v5-content` width       |
| Card border-radius        | `10px`                                         | `.wizard-v5-content` radius      |
| Card shadow               | `0px 8px 20px 0px rgba(0,0,0,0.15)`            | `.wizard-v5-content` shadow      |
| Card margin               | `160px 0 115px` (vertical centering)           | `.wizard-v5-content` margin      |
| Step header background    | `#fff` (white)                                 | `.form-register .steps` bg       |
| Step header radius        | `10px` top-left/top-right                      | `.form-register .steps` radius   |
| Step icon size            | `40px × 40px`, circular                        | `.step-icon` width/height/radius |
| Step icon (inactive) bg   | `rgba(0, 0, 0, 0.1)`                           | `.step-icon` background          |
| Step icon (inactive) color| `#666`                                         | `.step-icon` color               |
| Step icon (current) bg    | `rgba(37, 180, 91, 0.2)`                       | `.current .step-icon` bg         |
| Step icon (current) border| `1px solid #25b45b`                            | `.current .step-icon` border     |
| Step icon (current) color | `#25b45b` (green)                              | `.current .step-icon` color      |
| Step icon (done) bg       | `#25b45b` (solid green)                        | `.done .step-icon` bg            |
| Step icon (done) color    | `#fff`                                         | `.done .step-icon` color         |
| Step text color           | `#333`                                         | `.step-text` color               |
| Step connector line       | `1px #e5e5e5`, `height: 75px`                  | `li::after` pseudo-element       |
| Step connector gap        | `width: 1px`, positioned `left: 100%`          | `li::after`                      |
| Font family               | `'Nunito', sans-serif`                         | `.wizard-v5-content` font-family |
| Base font size            | `18px`                                         | `.wizard-v5-content` font-size   |
| Form labels               | `#fff` (white)                                 | `.form-holder label` color       |
| Form input padding        | `11.5px 20px`                                  | `.form-holder input/select`      |
| Form input border         | `none`                                         | `.form-holder input` border      |
| Form input border-radius  | `3px`                                          | `.form-holder input` radius      |
| Form input font-size      | `16px`                                         | `.form-holder input` font-size   |
| Form input color          | `#000`                                         | `.form-holder input` color       |
| Placeholder color (step1) | `#999`                                         | `.form-control::placeholder`     |
| Placeholder color (addr)  | `#333`                                         | `.form-holder-2::placeholder`    |
| Placeholder color (bank)  | `#666`                                         | `.input-step-2::placeholder`     |
| Radio text color          | `#fff`                                         | `#radio` color                   |
| Select text color         | `#666`                                         | `.form-holder select` color      |
| Select font-weight        | `600`                                          | `.form-holder select`            |
| Button shape              | Circular `50px × 50px`, `border-radius: 50%`  | `.actions ul li`                 |
| Button background         | `#25b45b` (green)                              | `.actions ul li` background      |
| Button hover background   | `#219c50` (darker green)                       | `.actions ul li:hover`           |
| Button icon color         | `#fff`                                         | `.actions ul li a` color         |
| Button icon size          | `26px`                                         | `.actions ul li a i` font-size   |
| Previous button (step 1)  | `opacity: 0` (hidden)                          | `.actions ul li:first-child`     |
| Action bar padding        | `0 45px 45px`                                  | `.form-register .actions`        |
| Step 3 heading            | `#fff`, `25px`, weight `600`                   | `.inner h3`                      |
| Step 3 table bg           | `rgba(255, 255, 255, 0.1)`                     | `.table-responsive` background   |
| Step 3 table border       | `1px solid rgba(255, 255, 255, 0.2)`           | `.space-row > td/th` border      |
| Step 3 table header color | `#ccc`, `16px`, weight `400`                   | `.table-responsive tbody th`     |
| Step 3 table value color  | `#fff`, `16px`, weight `600`                   | `.table-responsive tbody td`     |
| Step 3 table header width | `29%`                                          | `tbody th` width                 |
| Step 3 table header border| `1px solid rgba(255, 255, 255, 0.2)` right     | `tbody th` border-right          |
| Step 3 table margin       | `0 45px 45px`                                  | `.table-responsive` margin       |

## Visual Design

From the live demo (`https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html`):
A full-viewport centered layout with a dark slate-purple `#383a4f` background.
An 851px-wide card floats centered with a purple-gray `#525575` body and a
white step navigation header showing three circular check-mark icons with
labels ("Personal Information", "Bank Information", "Confirm Details").

The card contains a multi-step form with:
- Step 1: First/Last Name, Gender radio, Address, Phone/Zip, Date of Birth
  dropdowns
- Step 2: Bank Name, Branch Name, Email, Account Name, Account Number,
  Expiry Date dropdowns
- Step 3: Summary table with all entered values in white text on translucent
  background

Navigation is two circular green `#25b45b` buttons (50×50px) at the
bottom-right: Previous (hidden on step 1) and Next/Finish with chevron-right
icons. The active step icon turns green-bordered; completed steps get a solid
green circle. Form fields have no borders (clean look), white labels, and
varied placeholder colors per section.

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a dark background and wizard card.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the background is dark slate-purple (`#383a4f`)
- **AND** an 851px wizard card is vertically and horizontally centered
- **AND** the card has a purple-gray (`#525575`) background
- **AND** the card has 10px border-radius and box-shadow

### Requirement: Step navigation header

The wizard SHALL display a step navigation header with three steps.

#### Scenario: Step header renders correctly

- **GIVEN** the page loads
- **WHEN** the wizard card is visible
- **THEN** a white header bar is displayed at the top of the card
- **AND** three step items are shown: "Personal Information", "Bank Information", "Confirm Details"
- **AND** each step has a 40px circular icon with a check-mark

#### Scenario: Active step highlighting

- **GIVEN** the wizard is on step 1
- **WHEN** the step header is visible
- **THEN** step 1 icon has a green border (`#25b45b`) and green icon
- **AND** steps 2-3 icons have gray background (`rgba(0,0,0,0.1)`) and gray icon (`#666`)

#### Scenario: Completed step state

- **GIVEN** the user has navigated past step 1
- **WHEN** the step header is visible
- **THEN** step 1 icon has a solid green background (`#25b45b`) and white icon
- **AND** the current step icon has a green border and green icon

### Requirement: Step 1 — Personal Information

The wizard SHALL display a personal information form on step 1.

#### Scenario: Step 1 form fields

- **GIVEN** the wizard is on step 1
- **WHEN** the form is visible
- **THEN** "First Name" and "Last Name" fields are displayed side-by-side
- **AND** a "Gender" radio group (Male/Female) is displayed
- **AND** an "Address Location" field is displayed full-width with a pin icon
- **AND** "Phone Number" and "Zip Code" fields are displayed side-by-side
- **AND** a "Date of Birth" section with three dropdowns (day/month/year) is displayed
- **AND** all labels are white (`#fff`)
- **AND** all inputs have no visible border and 3px border-radius

### Requirement: Step 2 — Bank Information

The wizard SHALL display a bank information form on step 2.

#### Scenario: Step 2 form fields

- **GIVEN** the wizard is on step 2
- **WHEN** the form is visible
- **THEN** "Bank Name" field is displayed with a search icon
- **AND** "Branch Name" field is displayed
- **AND** "Email Address" field is displayed
- **AND** "Account Name" field is displayed
- **AND** "Account Number" field is displayed with a card icon
- **AND** "Expiry Date" section with three dropdowns is displayed

### Requirement: Step 3 — Confirm Details

The wizard SHALL display a confirmation summary table on step 3.

#### Scenario: Step 3 confirmation table

- **GIVEN** the wizard is on step 3
- **WHEN** the confirmation view is visible
- **THEN** a heading "Comfirm Details" (original typo preserved) is displayed
- **AND** a summary table shows: Full Name, Email Address, Phone Number, Address Location, Gender, Account Name, Account Number
- **AND** table headers are `#ccc` color, 16px, weight 400
- **AND** table values are `#fff` color, 16px, weight 600
- **AND** table rows have `rgba(255,255,255,0.2)` bottom borders

#### Scenario: Step 3 populates from form data

- **GIVEN** the user filled step 1 and step 2 fields
- **WHEN** the user navigates to step 3
- **THEN** the confirmation table reflects the CURRENT values of all fields
- **AND** navigating back and changing a field updates the table when returning to step 3

### Requirement: Navigation buttons

The wizard SHALL provide circular green navigation buttons.

#### Scenario: Next/Finish button

- **GIVEN** the wizard is visible
- **WHEN** the action bar is displayed
- **THEN** a circular green (`#25b45b`) Next/Finish button is visible at the bottom-right
- **AND** the button is 50×50px with a white chevron-right icon
- **AND** hovering the button darkens it to `#219c50`

#### Scenario: Previous button hidden on step 1

- **GIVEN** the wizard is on step 1
- **WHEN** the action bar is displayed
- **THEN** the Previous button is hidden (`opacity: 0`)

#### Scenario: Previous button visible on steps 2-3

- **GIVEN** the wizard is on step 2 or step 3
- **WHEN** the action bar is displayed
- **THEN** a circular green Previous button is visible with a chevron-left icon

### Requirement: Step transitions

The wizard SHALL use fade transitions between steps.

#### Scenario: Fade transition on step change

- **GIVEN** the wizard is on any step
- **WHEN** the user clicks Next or Previous
- **THEN** the current step fades out and the new step fades in
- **AND** the transition takes approximately 500ms
- **AND** the step header updates to highlight the current step

### Requirement: Accessibility

The wizard SHALL be accessible.

#### Scenario: Form labels

- **GIVEN** any form step is displayed
- **WHEN** form fields are visible
- **THEN** every input has an associated `<label>` element
- **AND** radio buttons have accessible labels

#### Scenario: Focus management

- **GIVEN** the wizard transitions between steps
- **WHEN** a new step loads
- **THEN** focus moves to the first input of the new step

### Requirement: Component Dock footer

Every template MUST link Component Dock in the footer.

#### Scenario: Footer link

- **GIVEN** the page loads
- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text includes "Component Dock"

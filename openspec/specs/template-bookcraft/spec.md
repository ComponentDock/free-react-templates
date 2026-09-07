# Template: BookCraft (Form Booking Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 26" — a 3-step form booking wizard with step indicators, floating-label form fields, booking image, and confirmation table. Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-26/ (404 at time of research; live preview DOM fetched from https://colorlib.com/etc/bwiz/colorlib-wizard-26/index.html). Source slug: `colorlib-wizard-26`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with step indicators, floating-label inputs, date selects, and confirmation view.

## Design Tokens

Extracted from ColorLib preview CSS (`css/style.css`):

- **Page background:** `#383a4f` (dark blue-grey, full viewport)
- **Wizard form background:** `#525575` (muted purple-blue)
- **Wizard heading text:** `#fff` (white, above card)
- **Step indicator card background:** `#fff` (white cards, 5px radius)
- **Step icon inactive:** `#ccc` background, `#fff` text
- **Step icon active/done:** `#55e8d5` (teal/mint green), `#fff` text
- **Step text:** `#333`, 16px, weight 400
- **Form section heading:** `#fff`, 30px, weight 700
- **Form section subheading:** `#ccc`, 18px, weight 400
- **Floating label (default):** `#fff`, 16px
- **Floating label (focus/valid):** `#55e8d5`, scaled 0.9
- **Input text:** `#fff`, 16px, weight 400
- **Input border (bottom):** `rgba(255,255,255,0.3)`, 1px solid
- **Input background:** transparent
- **Placeholder text:** `#fff`
- **Special label (step 2):** `#55e8d5`, 14px, weight 600
- **Select text:** `#666` (native selects), `#fff` (custom selects)
- **Table header text:** `rgba(255,255,255,0.5)`, 16px, weight 400
- **Table value text:** `#55e8d5`, 18px, weight 700
- **Action button background:** `#43ccba` (teal)
- **Action button hover:** `#32998b` (darker teal)
- **Action button text:** `#fff`, 16px, weight 600
- **Action button shape:** 5px radius, 45px height, 150px width, centered
- **Card width:** 910px
- **Card border-radius:** 10px
- **Card shadow:** `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`
- **Font family:** `'Open Sans', sans-serif`
- **Font base size:** 18px
- **Step indicator card radius:** 5px
- **Step icon shadow (inactive):** `0px 4px 11px 0px rgba(0, 0, 0, 0.14)`

## Requirements

### Requirement: Page Load and Layout

The wizard SHALL display a centered wizard card on a dark full-screen background with a heading above the card.

#### Scenario: Page renders correctly

- **WHEN** the user loads the BookCraft wizard page
- **THEN** a centered wizard card is displayed on a `#383a4f` background
- **AND** the heading "Form Booking Wizard" is shown above the card in white, bold, 30px
- **AND** the card has a drop shadow
- **AND** the card has a `#525575` background with 10px border-radius
- **AND** a 3-step indicator is shown at the top of the card

### Requirement: Step Indicator

The wizard SHALL display 3 step indicator cards in a horizontal row at the top of the wizard.

#### Scenario: Step indicator renders correctly

- **WHEN** the wizard form is loaded
- **THEN** three step indicator cards are shown: "Personal Info", "Booking", "Confirm"
- **AND** each step card is white (#fff) with 5px border-radius
- **AND** step 1 icon shows "1" in white on a `#55e8d5` background (active)
- **AND** steps 2-3 icons show their numbers in white on a `#ccc` background (inactive)
- **AND** step text labels are shown to the right of each icon

#### Scenario: Step indicator updates on navigation

- **WHEN** the user advances to step 2
- **THEN** step 1 icon turns `#55e8d5` (completed)
- **AND** step 2 icon turns `#55e8d5` (active)
- **AND** step 3 icon remains `#ccc` (inactive)

### Requirement: Step 1 — Personal Info

The wizard SHALL display a personal information form with floating-label inputs.

#### Scenario: Step 1 fields render correctly

- **WHEN** step 1 is active
- **THEN** section heading "Personal Info" is displayed with "1/3" counter
- **AND** fields are displayed: First Name, Last Name, Phone Number, E-Mail
- **AND** a Date of Birth row shows 3 select dropdowns (day, month, year)
- **AND** an Address Location full-width field is shown
- **AND** all text inputs have floating labels that animate on focus
- **AND** a "Next" button is shown at the bottom

#### Scenario: Step 1 floating label animation

- **WHEN** the user focuses a text input
- **THEN** the label floats up and scales to 0.9
- **AND** the label color changes to `#55e8d5`

#### Scenario: Step 1 validation

- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors appear for all required fields
- **AND** the form does not advance to step 2

#### Scenario: Step 1 advances on valid input

- **WHEN** the user fills all required fields and clicks "Next"
- **THEN** the form advances to step 2
- **AND** the step indicator updates

### Requirement: Step 2 — Booking Information

The wizard SHALL display a booking form with room selection, date, and time.

#### Scenario: Step 2 fields render correctly

- **WHEN** step 2 is active
- **THEN** section heading "Booking Information" is displayed with "2/3" counter
- **AND** a booking image is shown at the top
- **AND** a "Choose a Room" select dropdown is shown (full width)
- **AND** an "Organization Day" text input with date placeholder is shown
- **AND** a "Time Open" select dropdown is shown
- **AND** label text for step 2 fields is teal (`#55e8d5`), 14px, bold
- **AND** a "Next" button is shown at the bottom

#### Scenario: Step 2 advances on valid input

- **WHEN** the user fills booking fields and clicks "Next"
- **THEN** the form advances to step 3
- **AND** the step indicator updates

### Requirement: Step 3 — Confirm Details

The wizard SHALL display a confirmation table summarizing all entered information.

#### Scenario: Step 3 renders correctly

- **WHEN** step 3 is active
- **THEN** section heading "Confirm Details" is displayed with "3/3" counter
- **AND** a summary table shows: Full Name, Room, Day, Time, Price
- **AND** table header labels are `rgba(255,255,255,0.5)`, 16px
- **AND** table values are `#55e8d5`, 18px, bold
- **AND** each row is displayed as a block (not table rows) for responsive layout
- **AND** a "Confirm" button is shown at the bottom

### Requirement: Navigation Buttons

The wizard SHALL provide Previous/Next navigation buttons centered at the bottom of each step.

#### Scenario: Navigation buttons render correctly

- **WHEN** any step is displayed
- **THEN** a "Next" button is shown centered at the bottom
- **AND** the button is `#43ccba` teal with white text
- **AND** the button is 150px wide, 45px tall, with 5px border-radius
- **AND** on hover the button background darkens to `#32998b`

#### Scenario: Previous button visibility

- **WHEN** step 1 is active
- **THEN** no "Previous" button is shown
- **WHEN** step 2 or 3 is active
- **THEN** a "Previous" button is shown alongside "Next"

### Requirement: Responsive Design

The wizard SHALL be responsive and adapt to smaller screens.

#### Scenario: Tablet layout

- **WHEN** the viewport is between 576px and 991px
- **THEN** the wizard card width adjusts to 90% of viewport
- **AND** step indicator labels stack vertically below icons
- **AND** step icon border-radius resets to 0

#### Scenario: Mobile layout

- **WHEN** the viewport is below 576px
- **THEN** form fields stack vertically (full width)
- **AND** date selects stack vertically (full width)
- **AND** the booking image is hidden
- **AND** the step counter "1/3" etc. is hidden

## Verification Checklist

- [ ] Page renders on `#383a4f` background with centered wizard card
- [ ] "Form Booking Wizard" heading displays above card
- [ ] 3-step indicator shows with correct active/inactive states
- [ ] Step 1: Personal Info fields render with floating labels
- [ ] Floating labels animate on focus (scale + color change)
- [ ] Step 2: Booking fields render with teal labels and image
- [ ] Step 3: Confirmation table shows summary data
- [ ] Navigation buttons centered, teal colored, correct sizing
- [ ] Previous button hidden on step 1, visible on steps 2-3
- [ ] Responsive layout works at tablet and mobile breakpoints
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds

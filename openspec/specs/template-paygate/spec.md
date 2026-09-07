# Template: PayGate (Payment Account Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 25" — a 3-step payment account creation wizard with step indicators, form fields, and confirmation. Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-25/ (404 at time of research; screenshot used as primary reference). Source slug: `colorlib-wizard-25`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with step indicators, form validation, and confirmation view.

## Design Tokens

Extracted from ColorLib page CSS and screenshot analysis:

- **Accent blue:** `#1a73e8` (primary action color, links, active states)
- **Green accent:** `#77CC6D` (icon highlights, active step indicators)
- **Green dark:** `#09aa59` (borders, secondary accent)
- **Body text:** `#26282b`
- **Muted text:** `#666`
- **Background:** `#f6f6f6` (page background)
- **Card white:** `#fff`
- **Border light:** `#eee`
- **Step inactive:** `#ccc` / `#999`
- **Font:** System sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
- **Button radius:** ~4px (rounded-sm)
- **Card radius:** ~10px
- **Card shadow:** `0 4px 24px rgba(0,0,0,0.12)`

## Requirements

### Requirement: Page Load and Layout

The wizard SHALL display a centered white card on a full-screen light background with a step indicator at the top.

#### Scenario: Page renders correctly

- **WHEN** the user loads the PayGate wizard page
- **THEN** a centered white card is displayed on a `#f6f6f6` background
- **AND** the card has a drop shadow
- **AND** the heading "Create Payment Account" is centered at the top
- **AND** a 3-step indicator is shown below the heading

### Requirement: Step Indicator

The wizard SHALL display a horizontal step indicator with 3 numbered circles and connecting lines.

#### Scenario: Step indicator renders correctly

- **WHEN** the wizard form is loaded
- **THEN** three step circles are shown: Step 1, Step 2, Step 3
- **AND** step circles are ~48px diameter with 50% border-radius
- **AND** connecting lines link the step circles
- **AND** step 1 circle is highlighted with the blue accent (`#1a73e8`) as active
- **AND** steps 2-3 circles are gray as inactive
- **AND** active step circle shows a checkmark or number in white

#### Scenario: Step indicator updates on navigation

- **WHEN** the user advances to step 2
- **THEN** step 1 circle shows a checkmark (completed)
- **AND** step 2 circle is highlighted blue (active)
- **AND** step 3 circle remains gray (inactive)

### Requirement: Step 1 — Personal Information

The wizard SHALL display personal information fields.

#### Scenario: Step 1 fields render correctly

- **WHEN** step 1 is active
- **THEN** section heading "Personal Information" is displayed
- **AND** fields are displayed: Full Name, Email Address, Phone Number
- **AND** all inputs have labels and placeholder text
- **AND** a "Next" button is shown at the bottom

#### Scenario: Step 1 validation

- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors appear for all required fields
- **AND** the form does not advance to step 2

#### Scenario: Step 1 advances on valid input

- **WHEN** the user fills all required fields and clicks "Next"
- **THEN** the form advances to step 2
- **AND** the step indicator updates

### Requirement: Step 2 — Bank Information

The wizard SHALL display bank information fields.

#### Scenario: Step 2 fields render correctly

- **WHEN** step 2 is active
- **THEN** section heading "Bank Information" is displayed
- **AND** fields are displayed: Card Number, Expiry Date, CVV, Cardholder Name
- **AND** "Previous" and "Next" buttons are shown

#### Scenario: Step 2 validation

- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors appear for Card Number, Expiry Date, and CVV
- **AND** the form does not advance

#### Scenario: Step 2 navigation

- **WHEN** the user clicks "Previous" on step 2
- **THEN** the form returns to step 1
- **AND** previously entered personal information is preserved

### Requirement: Step 3 — Confirmation

The wizard SHALL display a confirmation/review view.

#### Scenario: Step 3 fields render correctly

- **WHEN** step 3 is active
- **THEN** section heading "Confirmation" is displayed
- **AND** a summary of entered data is shown (personal info + masked card number)
- **AND** "Previous" and "Submit" buttons are shown

#### Scenario: Step 3 submit

- **WHEN** the user clicks "Submit" on step 3
- **THEN** a success message is displayed
- **AND** the form is replaced with a confirmation card

### Requirement: Navigation

The wizard SHALL provide Previous and Next navigation buttons.

#### Scenario: Previous button hidden on step 1

- **WHEN** the user is on step 1
- **THEN** the "Previous" button is not visible

#### Scenario: Previous button navigates back

- **WHEN** the user is on step 2 or 3
- **AND** clicks the "Previous" button
- **THEN** the form returns to the previous step
- **AND** the step indicator updates accordingly

#### Scenario: Next button advances to next step

- **WHEN** the user fills all required fields on the current step
- **AND** clicks the "Next" button
- **THEN** the form advances to the next step
- **AND** the step indicator updates accordingly

### Requirement: Footer

The wizard SHALL display a footer linking to Component Dock.

#### Scenario: Footer renders correctly

- **WHEN** the page is loaded
- **THEN** a footer is displayed with a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

### Requirement: Responsive Layout

The wizard SHALL be responsive across different screen sizes.

#### Scenario: Mobile layout

- **WHEN** the viewport is 575px or less
- **THEN** the card takes 90% width
- **AND** form fields stack vertically
- **AND** step indicator circles shrink to 36px

#### Scenario: Tablet layout

- **WHEN** the viewport is 991px or less
- **THEN** the card takes 85% width
- **AND** step indicator centers with reduced spacing

## Verification Checklist

- [ ] Page loads with centered card on light background
- [ ] 3-step indicator with blue active state and gray inactive
- [ ] Step 1: Full Name, Email, Phone fields with labels
- [ ] Step 1: Validation blocks empty submission
- [ ] Step 2: Card Number, Expiry, CVV, Cardholder fields
- [ ] Step 2: Validation blocks empty submission
- [ ] Step 2: Previous returns to step 1 with preserved data
- [ ] Step 3: Summary view with masked card number
- [ ] Step 3: Submit shows success message
- [ ] Previous button hidden on step 1
- [ ] Navigation updates step indicator correctly
- [ ] Footer links to Component Dock
- [ ] Responsive at 575px, 767px, 991px breakpoints
- [ ] 100% test coverage
- [ ] No ColorLib references in app code

# Template: Signuplane (Registration Form)

## Purpose

Signuplane is a single-page registration form template — a React recreation
of the ColorLib free "Colorlib Regform 14" template
(source: https://colorlib.com/wp/template/colorlib-regform-14/,
preview: https://preview.colorlib.com/theme/colorlib-regform-14/),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the screenshot (preview returned 404; tokens
derived from visual analysis of the screenshot at
https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-14.jpg):

- Body background: `#d6eaf8` (light sky blue)
- Card background: `#ffffff` (white)
- Card shadow: `0 4px 24px rgba(0, 0, 0, 0.12)`
- Primary/accent color: `#5bc0de` (steel blue / medium blue) — used for
  active gender button, submit button, and "Additional Info" toggle text
- Gender button active fill: `#5bc0de`
- Gender button inactive: white with `#ccc` border, dark text
- Input border: `#ddd` (light gray)
- Input background: `#ffffff`
- Label color: `#333333` (dark gray), uppercase, small text, letter-spacing
- Submit button: `#5bc0de` background, white text, uppercase, rounded corners
  (~4px radius), right-aligned
- Font: sans-serif (Open Sans or similar, via Google Fonts)
- Card: centered, max-width ~550px, white background, subtle drop shadow

**Note:** The live preview at `preview.colorlib.com/theme/colorlib-regform-14/`
returns 404. Research used the screenshot as the sole reference.

Signuplane lives in `apps/signuplane` and uses shared components from
`packages/ui` (Button, cn).

## Requirements

### Requirement: Page layout

The system SHALL render a full-viewport page with a light sky blue (#d6eaf8)
background, containing a single centered white registration form card.

#### Scenario: Page background and card centering

- **GIVEN** the page is rendered
- **WHEN** the page is displayed
- **THEN** the body background SHALL be #d6eaf8 (light sky blue)
- **AND** a white card SHALL be centered horizontally and vertically
- **AND** the card SHALL have a max-width of approximately 550px
- **AND** the card SHALL have a subtle drop shadow

### Requirement: Form card structure

The system SHALL render a white card with padding, containing all form
fields stacked vertically with consistent spacing.

#### Scenario: Card appearance

- **GIVEN** the page is rendered
- **WHEN** the form card is displayed
- **THEN** it SHALL have a white (#ffffff) background
- **AND** it SHALL have padding around all form content (~40px)
- **AND** it SHALL have rounded corners (~4px)
- **AND** it SHALL have a drop shadow

### Requirement: First name and last name fields

The system SHALL render "FIRST NAME" and "LAST NAME" text inputs side by
side in a two-column grid layout.

#### Scenario: Name fields layout

- **GIVEN** the form card is displayed
- **WHEN** the name fields are rendered
- **THEN** "FIRST NAME" SHALL be on the left
- **AND** "LAST NAME" SHALL be on the right
- **AND** both labels SHALL be uppercase, dark gray, small text
- **AND** both inputs SHALL have light gray (#ddd) borders
- **AND** both inputs SHALL be text type

#### Scenario: Name fields are required

- **GIVEN** the form is submitted
- **WHEN** either name field is empty
- **THEN** the form SHALL prevent submission
- **AND** an error state SHALL be indicated on the empty field

### Requirement: Birth date and gender fields

The system SHALL render a "BIRTH DATE" date input and a "GENDER" toggle
button group side by side.

#### Scenario: Birth date input

- **GIVEN** the form card is displayed
- **WHEN** the birth date field is rendered
- **THEN** it SHALL have a label "BIRTH DATE" in uppercase, dark gray
- **AND** the input SHALL display a date picker with "MM-DD-YYYY" placeholder
- **AND** the input SHALL have a light gray border

#### Scenario: Gender toggle buttons

- **GIVEN** the form card is displayed
- **WHEN** the gender selector is rendered
- **THEN** it SHALL show a label "GENDER" in uppercase, dark gray
- **AND** it SHALL display two toggle buttons: "Male" and "Female"
- **AND** the selected button SHALL have a blue (#5bc0de) background with white text
- **AND** the unselected button SHALL have a white background with gray border and dark text
- **AND** "Male" SHALL be selected by default
- **AND** clicking either button SHALL toggle the selection

### Requirement: Phone number field

The system SHALL render a full-width "PHONE NUMBER" text input.

#### Scenario: Phone number field

- **GIVEN** the form card is displayed
- **WHEN** the phone number field is rendered
- **THEN** it SHALL have a label "PHONE NUMBER" in uppercase, dark gray
- **AND** the input SHALL span the full width of the card
- **AND** the input SHALL have a light gray (#ddd) border
- **AND** the input SHALL be text type

### Requirement: Password fields

The system SHALL render "PASSWORD" and "REPEAT YOUR PASSWORD" inputs
side by side in a two-column layout.

#### Scenario: Password fields layout

- **GIVEN** the form card is displayed
- **WHEN** the password fields are rendered
- **THEN** "PASSWORD" SHALL be on the left
- **AND** "REPEAT YOUR PASSWORD" SHALL be on the right
- **AND** both labels SHALL be uppercase, dark gray
- **AND** both inputs SHALL be password type (masked)
- **AND** both inputs SHALL have light gray borders

#### Scenario: Password validation

- **GIVEN** the form is submitted
- **WHEN** the passwords do not match
- **THEN** the form SHALL prevent submission
- **AND** an error message SHALL be displayed

### Requirement: Additional info toggle

The system SHALL render a collapsible "ADDITIONAL INFO" section with a
caret/chevron icon toggle.

#### Scenario: Additional info toggle visibility

- **GIVEN** the form card is displayed
- **WHEN** the additional info section is rendered
- **THEN** it SHALL display a "> ADDITIONAL INFO" toggle in blue (#5bc0de)
- **AND** the section SHALL be collapsed by default
- **AND** clicking the toggle SHALL expand/collapse the section

#### Scenario: Additional info expanded state

- **GIVEN** the additional info section is expanded
- **WHEN** the section content is displayed
- **THEN** additional form fields SHALL be visible below the toggle
- **AND** the caret icon SHALL rotate to indicate expanded state

### Requirement: Submit button

The system SHALL render a blue submit button aligned to the right side of
the form card.

#### Scenario: Submit button appearance

- **GIVEN** the form card is displayed
- **WHEN** the submit button is rendered
- **THEN** it SHALL have text "SUBMIT" in uppercase
- **AND** it SHALL have a blue (#5bc0de) background
- **AND** it SHALL have white text
- **AND** it SHALL be right-aligned within the card
- **AND** it SHALL have rounded corners (~4px)
- **AND** it SHALL have padding for a rectangular shape

#### Scenario: Submit button hover

- **GIVEN** the form is displayed
- **WHEN** the user hovers over the submit button
- **THEN** the button SHALL show a hover state (darker blue or opacity change)

### Requirement: Form validation

The system SHALL validate all required fields before allowing form submission.

#### Scenario: Required fields enforcement

- **GIVEN** the form is submitted with empty required fields
- **WHEN** validation runs
- **THEN** the form SHALL not submit
- **AND** empty required fields SHALL show an error state

#### Scenario: Successful submission

- **GIVEN** all required fields are filled correctly
- **WHEN** the user clicks Submit
- **THEN** the form SHALL submit successfully
- **AND** a success feedback SHALL be shown (console or visual)

### Requirement: Responsive layout

The system SHALL adapt the form layout for mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport width is below 640px
- **WHEN** the form card is displayed
- **THEN** the two-column field pairs SHALL stack vertically
- **AND** the card SHALL maintain padding and centering
- **AND** all fields SHALL be full-width

## Verification checklist

- [ ] Page has light sky blue (#d6eaf8) background
- [ ] White card is centered with shadow
- [ ] First Name + Last Name side by side
- [ ] Birth Date (date picker) + Gender toggle (Male/Female)
- [ ] Gender toggle: blue fill for selected, outlined for unselected
- [ ] Phone Number full width
- [ ] Password + Repeat Password side by side
- [ ] "Additional Info" collapsible toggle in blue
- [ ] Submit button right-aligned, blue, uppercase
- [ ] All labels uppercase, dark gray
- [ ] Form validation on submit
- [ ] Responsive: stacks to single column on mobile
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] 100% test coverage

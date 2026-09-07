# Template: Cantrip (Colorlib Wizard 13 Account Accordion)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 13 (`https://colorlib.com/wp/template/colorlib-wizard-13/`)
- **New Name**: `cantrip` (App directory: `apps/cantrip`, Package: `@free-react-templates/cantrip`)
- **Category**: Forms / Multi-step Accordion Wizard
- **Description**: A clean, modern accordion-style form wizard for account registration with 3 collapsible steps: Basic Information, Additional Information, and Specialities.

## Requirements

### Requirement: Accordion wizard navigation

Users SHALL be able to expand/collapse each step panel by clicking its header.

#### Scenario: Clicking a step header expands it

- **WHEN** the user clicks "Basic Information" header
- **THEN** the Basic Information panel is visible

#### Scenario: Only one panel is open at a time

- **GIVEN** Step 1 is expanded
- **WHEN** the user clicks "Additional Information" header
- **THEN** Step 1 collapses and Step 2 expands

### Requirement: Step 1 — Basic Information form

Users SHALL be able to fill in first name, last name, gender, date of birth, and nationality.

#### Scenario: Fill basic information

- **GIVEN** Step 1 is expanded
- **WHEN** the user types in the first name field
- **THEN** the field value updates

### Requirement: Step 2 — Additional Information form

Users SHALL be able to fill in email, phone, city, and pincode.

#### Scenario: Fill additional information

- **GIVEN** Step 2 is expanded
- **WHEN** the user types in the email field
- **THEN** the field value updates

### Requirement: Step 3 — Specialities and Submit

Users SHALL be able to enter specialities and submit the form.

#### Scenario: Submit the form

- **GIVEN** Step 3 is expanded
- **WHEN** the user clicks the Submit button
- **THEN** the form submission is handled

### Requirement: Footer with Component Dock link

The footer SHALL display a link to https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **GIVEN** the page is rendered
- **THEN** a link to componentdock.com is present in the footer

### Requirement: Responsive layout

The form SHALL be responsive and centered on all screen sizes.

#### Scenario: Mobile viewport

- **GIVEN** the viewport width is 375px
- **WHEN** the wizard is rendered
- **THEN** the form is visible and usable

# Template: Wizardry (Colorlib Wizard 27 Form Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 27 (`https://colorlib.com/wp/template/colorlib-wizard-27/`)
- **New Name**: `wizardry` (App directory: `apps/wizardry`, Package: `@free-react-templates/wizardry`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A clean, modern vertical form wizard template featuring step-by-step navigation, account setup, billing details, agreement steps, and responsive layout.

## Requirements

### Requirement: Multi-step form wizard navigation

Users SHALL be able to navigate through a 3-step wizard with a vertical sidebar step indicator.

#### Scenario: User navigates through wizard steps

- **WHEN** the user is on the Wizardry form wizard landing view
- **THEN** the wizard displays Step 1 (Account Setup) with form fields for email, password, and confirm password

#### Scenario: Step indicator shows current progress

- **WHEN** the user is on Step 2
- **THEN** the step indicator shows Step 1 as completed with a checkmark and Step 2 as current

### Requirement: Form validation prevents advancing on invalid input

Users SHALL see inline validation errors when attempting to advance with invalid or missing required fields.

#### Scenario: Empty required fields show validation errors

- **WHEN** the user clicks "Next" on Step 1 with empty required fields
- **THEN** inline validation error messages are displayed for email, password, and confirm password

#### Scenario: Invalid email format shows error

- **WHEN** the user enters an invalid email format and clicks "Next"
- **THEN** an email format validation error is displayed

#### Scenario: Password mismatch shows error

- **WHEN** the user enters different passwords in password and confirm password fields
- **THEN** a passwords do not match error is displayed

#### Scenario: Billing step validation errors

- **WHEN** the user clicks "Next" on Step 2 with empty billing fields
- **THEN** validation errors are shown for card holder name, card number, CVC, and expiration date

#### Scenario: Agreement not accepted shows error

- **WHEN** the user clicks "Submit" on Step 3 without checking the agreement checkbox
- **THEN** a "You must accept the agreement" error is displayed

### Requirement: Successful submission completes the wizard

Users SHALL see a success screen after completing all steps with valid data.

#### Scenario: Successful completion

- **WHEN** the user completes all steps with valid data and clicks "Submit"
- **THEN** a success screen is displayed with a "Complete!" header and "Registration Complete" message

#### Scenario: Reset wizard

- **WHEN** the user clicks "Start Over" on the success screen
- **THEN** the wizard resets to Step 1 with all fields cleared

### Requirement: Navigation buttons

Users SHALL have Back and Next/Submit buttons for wizard navigation.

#### Scenario: Back button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** the Back button is not visible

#### Scenario: Back button visible on later steps

- **WHEN** the user is on Step 2 or Step 3
- **THEN** a Back button is visible that returns to the previous step

#### Scenario: Submit button on final step

- **WHEN** the user is on Step 3
- **THEN** the Next button is replaced with a Submit button

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Design Tokens

- **Brand Colors**: Primary sky blue (#33a7d7), Indigo buttons (#364cd2), Gradient background (blue→pink→gold)
- **Typography**: Montserrat (headings), Open Sans (body)
- **Layout**: Centered card with vertical sidebar step indicator and arrow connectors
- **Card**: White background, rounded corners (10px), subtle shadow

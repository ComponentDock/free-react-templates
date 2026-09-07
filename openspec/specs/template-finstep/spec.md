# Template: FinStep (Financial Sign-Up Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 24" — a 4-step financial sign-up wizard with floating labels, gradient accents, and progress tracking. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-24/index.html. Source slug: `colorlib-wizard-24`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with floating labels, gradient step indicators, and form validation.

## Requirements

### Requirement: Page Load and Layout

The wizard SHALL display a centered white card (780px, 10px border-radius) on a full-screen background image with a drop shadow.

#### Scenario: Page renders correctly

- **WHEN** the user loads the FinStep wizard page
- **THEN** a centered white card is displayed on a background image
- **AND** the card has a drop shadow
- **AND** the heading "Sign Up To Financial" is centered at the top
- **AND** the description "Fill all form field to go next step" is shown below the heading

### Requirement: Step Indicator Bar

The wizard SHALL display a horizontal step indicator bar with 4 circular step icons and gradient connectors.

#### Scenario: Step indicator renders correctly

- **WHEN** the wizard form is loaded
- **THEN** four step circles are shown: About, Account, Ownership, Financing
- **AND** step circles are 60px diameter with 50% border-radius
- **AND** connecting lines link the step circles
- **AND** step 1 circle is highlighted with the orange-pink-purple gradient as active
- **AND** steps 2-4 circles are gray as inactive

### Requirement: Step 1 - About (Personal Information)

The wizard SHALL display personal information fields with floating labels.

#### Scenario: Step 1 fields render correctly

- **WHEN** step 1 is active
- **THEN** the step icon shows an account/person icon
- **AND** "About" text is visible below the step icon
- **AND** section heading "Personal Information" is displayed
- **AND** fields are displayed: First Name, Last Name (side by side), Address, Zip Code, Phone Number
- **AND** all inputs use the floating label pattern

#### Scenario: Step 1 validation

- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors appear for all required fields
- **AND** the form does not advance to step 2

### Requirement: Step 2 - Account

The wizard SHALL display account fields with radio toggle and password fields.

#### Scenario: Step 2 fields render correctly

- **WHEN** step 2 is active
- **THEN** section heading "Do you have an account?" is displayed
- **AND** radio options are shown: "I already have an account", "I am newbie"
- **AND** fields are displayed: Email, Password, Confirm Password

#### Scenario: Step 2 validation

- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors appear for Email, Password, and Confirm Password
- **AND** the form does not advance

### Requirement: Step 3 - Ownership

The wizard SHALL display ownership fields with dropdowns and date of birth.

#### Scenario: Step 3 fields render correctly

- **WHEN** step 3 is active
- **THEN** section heading "More About Yourself" is displayed
- **AND** fields are displayed: First Name, Last Name (side by side), Position dropdown, Business Area dropdown
- **AND** Date of Birth is shown as three dropdowns: Day, Month, Year

### Requirement: Step 4 - Financing

The wizard SHALL display financing fields with inventory dropdown and balance inputs.

#### Scenario: Step 4 fields render correctly

- **WHEN** step 4 is active
- **THEN** section heading "Financing Information" is displayed
- **AND** a "Buy Inventory" dropdown is shown
- **AND** sub-heading "Existing Balance" is shown
- **AND** fields: Business name, Current Balance

#### Scenario: Step 4 validation

- **WHEN** the user clicks "Submit" without filling required fields
- **THEN** a validation error appears for Buy Inventory
- **AND** the form does not submit

### Requirement: Navigation

The wizard SHALL provide Previous and Next navigation buttons.

#### Scenario: Previous button hidden on step 1

- **WHEN** the user is on step 1
- **THEN** the "Previous" button is not visible

#### Scenario: Previous button navigates back

- **WHEN** the user is on step 2, 3, or 4
- **AND** clicks the "Previous" button
- **THEN** the form returns to the previous step
- **AND** the step indicator updates accordingly

#### Scenario: Next button advances to next step

- **WHEN** the user fills all required fields on the current step
- **AND** clicks the "Next" button
- **THEN** the form advances to the next step
- **AND** the step indicator updates accordingly

### Requirement: Floating Label Animation

The wizard SHALL animate labels when inputs receive focus.

#### Scenario: Label animates on focus

- **WHEN** the user focuses on an input
- **THEN** the label animates upward
- **AND** the input border-bottom turns green

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

#### Scenario: Tablet layout

- **WHEN** the viewport is 991px or less
- **THEN** step indicator centers with space-around layout
- **AND** connector lines between steps are hidden

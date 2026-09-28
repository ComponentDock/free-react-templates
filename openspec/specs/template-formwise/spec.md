# Formwise — Creative Signup Form

## Purpose

Recreation of ColorLib Regform 7 (https://colorlib.com/wp/template/colorlib-regform-7/). A creative signup form template featuring two alternative form layouts with underline-style inputs, workspace illustrations, and a steel-blue register button.

## Requirements

### Requirement: Page layout

The page SHALL display two signup form cards vertically stacked on a light gray (#f5f5f5) background, centered within a max-width container.

#### Scenario: Page renders two cards

- **WHEN** a user visits the Formwise page
- **THEN** two signup form cards are visible
- **AND** both cards have white backgrounds with subtle shadows

#### Scenario: Page background

- **WHEN** a user views the page
- **THEN** the page background is light gray

### Requirement: First signup form card

The first card SHALL display a "Sign up" heading, four underline-style input fields (Name, Email, Password, Repeat Password) with left-aligned lucide-react icons, a terms checkbox, a steel-blue "Register" button, and an "I am already member" link. The illustration SHALL appear on the right side.

#### Scenario: Form fields present

- **WHEN** a user sees the first card
- **THEN** a "Sign up" heading is displayed
- **AND** a Name input with user icon is present
- **AND** an Email input with mail icon is present
- **AND** a Password input with lock icon is present
- **AND** a Repeat Password input with lock icon is present
- **AND** a terms checkbox with "Terms of service" link is present
- **AND** a "Register" button is present
- **AND** an "I am already member" link is present

#### Scenario: Illustration on right

- **WHEN** a user views the first card
- **THEN** the form fields are on the left side
- **AND** the illustration is on the right side

### Requirement: Second signup form card (mirrored)

The second card SHALL mirror the first card's layout with the illustration on the left and the form on the right. All form fields and elements SHALL be identical.

#### Scenario: Mirrored layout

- **WHEN** a user views the second card
- **THEN** the illustration is on the left side
- **AND** the form fields are on the right side

#### Scenario: Same form fields

- **WHEN** a user inspects the second card
- **THEN** it contains the same fields as the first card (Name, Email, Password, Repeat Password, terms checkbox, Register button, already member link)

### Requirement: Form field interaction

All input fields SHALL accept user text input. The terms checkbox SHALL toggle on click. The Register button SHALL prevent default form submission.

#### Scenario: Accept text input

- **WHEN** a user types in the Name field
- **THEN** the input displays the typed text

#### Scenario: Email input

- **WHEN** a user types in the Email field
- **THEN** the input accepts email text

#### Scenario: Password input

- **WHEN** a user types in the Password field
- **THEN** the input accepts password text (masked)

#### Scenario: Repeat password input

- **WHEN** a user types in the Repeat Password field
- **THEN** the input accepts password text (masked)

#### Scenario: Terms checkbox toggle

- **WHEN** a user clicks the terms checkbox
- **THEN** the checkbox toggles between checked and unchecked states

#### Scenario: Form submission prevention

- **WHEN** a user clicks the Register button
- **THEN** the form does not navigate away from the page

### Requirement: Design tokens and styling

The template SHALL use underline-style inputs (bottom border only, transparent background), a steel-blue (#5b8fb9) brand color for the Register button, Poppins font from Google Fonts, and SVG workspace illustrations.

#### Scenario: Input styling

- **WHEN** a user views the form inputs
- **THEN** each input has a bottom border only (underline style)
- **AND** each input has a transparent background

#### Scenario: Button styling

- **WHEN** a user views the Register button
- **THEN** it has a steel-blue background
- **AND** it has white text
- **AND** it has rounded corners

#### Scenario: Illustrations rendered

- **WHEN** a user views the page
- **THEN** SVG workspace illustrations are displayed
- **AND** illustrations are hidden from screen readers (aria-hidden)

#### Scenario: Lucide icons rendered

- **WHEN** a user views the form fields
- **THEN** user, mail, and lock icons from lucide-react are displayed next to their respective inputs

### Requirement: Footer

The page footer SHALL contain a "Made with Component Dock" link pointing to https://www.componentdock.com/, opening in a new tab.

#### Scenario: Footer link

- **WHEN** a user scrolls to the footer
- **THEN** a "Made with Component Dock" text is visible
- **AND** the "Component Dock" text links to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Responsive layout

The cards SHALL display side-by-side (form + illustration) on desktop and stack vertically on mobile.

#### Scenario: Desktop layout

- **WHEN** a user views the page on a desktop viewport
- **THEN** each card shows form and illustration side by side

#### Scenario: Mobile layout

- **WHEN** a user views the page on a mobile viewport
- **THEN** each card stacks form above illustration

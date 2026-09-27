# Confreg

## Purpose

Conference registration form template with a split-panel layout: a hero image with green overlay on the left, and a two-column registration form on the right featuring personal info, meal preference, payment mode, donation slider, and submit/reset buttons.

Recreation of ColorLib "Colorlib Regform 16" (https://colorlib.com/wp/template/colorlib-regform-16/).

## Requirements

### Requirement: Split-panel layout

The template SHALL display a two-column layout on desktop: a hero image panel on the left with a dark green overlay and registration headline, and the registration form on the right. On mobile, the layout SHALL stack vertically.

#### Scenario: Desktop layout

- **WHEN** the user opens the Confreg page on a desktop viewport
- **THEN** the hero panel occupies the left half of the card
- **AND** the registration form occupies the right half

#### Scenario: Mobile layout

- **WHEN** the user opens the Confreg page on a mobile viewport
- **THEN** the hero panel is hidden
- **AND** the registration form is displayed full-width

### Requirement: Hero panel content

The hero panel SHALL display a background image with a dark green semi-transparent overlay, the heading "Register Now" in white uppercase text, and the subtitle "while seats are available !" below it.

#### Scenario: Hero displays correctly

- **WHEN** the user views the hero panel
- **THEN** the heading "Register Now" is visible
- **AND** the subtitle "while seats are available !" is visible
- **AND** a conference event image is displayed

### Requirement: Registration form fields

The form SHALL contain the following fields arranged in two columns: First Name (required), Last Name (required), Company (required), Email (required), Phone Number (required) in the left column; Meal Preference (dropdown), Payment Mode (radio buttons), DD/Cheque No., Drawn On (Bank Name), Payable At in the right column.

#### Scenario: All text fields present

- **WHEN** the user views the form
- **THEN** fields for First Name, Last Name, Company, Email, and Phone Number are visible
- **AND** each required field has a red asterisk marker

#### Scenario: Meal preference dropdown

- **WHEN** the user views the Meal Preference field
- **THEN** a dropdown is shown with options Vegetarian, Vegan, Non-Vegetarian
- **AND** Vegetarian is selected by default

#### Scenario: Payment mode radio buttons

- **WHEN** the user views the Payment Mode field
- **THEN** radio buttons for Cash, Cheque, and Demand Draft are displayed
- **AND** Cash is selected by default

### Requirement: Donation slider

The form SHALL include a "Donate Us" range slider from 0 to 1000 with a default value of 500. The current value SHALL be displayed in a green badge next to the slider.

#### Scenario: Slider displays default value

- **WHEN** the form loads
- **THEN** the donation badge shows "$ 500"

#### Scenario: Slider updates on interaction

- **WHEN** the user moves the donation slider to 750
- **THEN** the donation badge shows "$ 750"

### Requirement: Form submission

When the user fills all required fields and clicks Submit, the form SHALL display a success message "Registration submitted successfully!" and a "Register Another" button.

#### Scenario: Successful submission

- **WHEN** the user fills First Name, Last Name, Company, Email, and Phone Number
- **AND** the user clicks Submit
- **THEN** a success message is displayed
- **AND** the form fields are hidden

#### Scenario: Register another

- **WHEN** the user clicks Register Another after a successful submission
- **THEN** the form fields are displayed again with default values

### Requirement: Form reset

Clicking the Reset button SHALL reset all controlled form state (meal preference to Vegetarian, payment mode to Cash, donation to $500) and keep the form visible.

#### Scenario: Reset clears state

- **WHEN** the user changes meal preference to Vegan and payment mode to Cheque
- **AND** the user clicks Reset
- **THEN** meal preference shows Vegetarian
- **AND** payment mode shows Cash selected
- **AND** donation badge shows "$ 500"

### Requirement: Footer with Component Dock link

The template SHALL display a footer with a "Made with Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer link

- **WHEN** the user scrolls to the footer
- **THEN** a link to "Component Dock" is visible
- **AND** the link opens in a new tab

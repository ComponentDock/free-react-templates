# FormVolt — Contact Form V3 Recreation

## Purpose

Recreate the ColorLib "Contact Form V3" template as a React + Tailwind CSS component. The original features two side-by-side green gradient contact cards on a nature background — one for "Say Hi" (simple contact) and one for "Get a Quote" (extended with service/budget dropdowns), toggled by radio buttons.

Source: https://colorlib.com/wp/template/contact-form-v3/

## Requirements

### Requirement: Two contact cards rendered side by side

The template SHALL render two green gradient contact cards centered on the page, stacked vertically on mobile and side by side on desktop.

#### Scenario: Cards render on page load

- **WHEN** the page loads
- **THEN** two contact cards are visible
- **AND** each card has a "CONTACT US" heading

#### Scenario: Cards are responsive

- **WHEN** the viewport is narrow (mobile)
- **THEN** the cards stack vertically
- **AND** when the viewport is wide (desktop), the cards display side by side

### Requirement: Left card defaults to "Say Hi" mode

The left card SHALL default to the "Say Hi" form with Name, Email, and Message fields.

#### Scenario: Left card shows Say Hi form by default

- **WHEN** the page loads
- **THEN** the left card's "Say Hi" radio is selected
- **AND** the left card shows Name, Email, and Message fields
- **AND** the left card does NOT show Needed Services or Budget fields

#### Scenario: Switching left card to Get a Quote shows extended fields

- **WHEN** the user clicks "Get a Quote" radio on the left card
- **THEN** the left card shows Name, Email, Needed Services, Budget, and Message fields

#### Scenario: Switching left card back to Say Hi hides extended fields

- **WHEN** the user clicks "Say Hi" radio on the left card
- **THEN** the left card shows only Name, Email, and Message fields

### Requirement: Right card defaults to "Get a Quote" mode

The right card SHALL default to the "Get a Quote" form with Name, Email, Needed Services, Budget, and Message fields.

#### Scenario: Right card shows Get a Quote form by default

- **WHEN** the page loads
- **THEN** the right card's "Get a Quote" radio is selected
- **AND** the right card shows Name, Email, Needed Services, Budget, and Message fields

#### Scenario: Switching right card to Say Hi shows simple fields

- **WHEN** the user clicks "Say Hi" radio on the right card
- **THEN** the right card shows only Name, Email, and Message fields

### Requirement: Form fields are functional

All form fields SHALL accept user input and the submit button SHALL trigger form submission.

#### Scenario: User can fill and submit the Say Hi form

- **WHEN** the user fills Name, Email, and Message fields
- **AND** clicks the Submit button
- **THEN** the form submits with the entered data

#### Scenario: User can fill and submit the Get a Quote form

- **WHEN** the user fills Name, Email, selects a service and budget, and fills Message
- **AND** clicks the Submit button
- **THEN** the form submits with the entered data including service and budget

#### Scenario: Form shows success state after submission

- **WHEN** the form is submitted
- **THEN** a "Thank You!" message is displayed
- **AND** a "Send Another Message" button appears

#### Scenario: User can reset form after submission

- **WHEN** the user clicks "Send Another Message" after submission
- **THEN** the form resets to empty fields

### Requirement: Footer links to Component Dock

The footer SHALL display a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link opens in a new tab
- **AND** the link text includes "Component Dock"

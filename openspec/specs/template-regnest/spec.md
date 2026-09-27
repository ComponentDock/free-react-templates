# Regnest — Booking Ticket Registration Form

> Recreation of ColorLib "Regform 29" (https://colorlib.com/wp/template/colorlib-regform-29/)
> Preview unreachable (404); implementation based on screenshot analysis.

## Purpose

Provide a clean, centered booking ticket registration form with an image
carousel, supporting multiple ticket types with dynamic pricing.

## Requirements

### Requirement: Form renders all booking fields

Users SHALL see a "Booking Tickets" heading, inputs for Full Name, Email,
Person count, Date, and Ticket Type, a price display, terms checkbox, and
a "BUY NOW" button.

#### Scenario: renders the form with all fields

- **WHEN** the page loads
- **THEN** the heading "Booking Tickets" is visible
- **AND** a "Full Name" text input exists
- **AND** an "Email" text input exists
- **AND** a "Person" number input exists
- **AND** a "Date" date input exists
- **AND** a "Ticket Type" select exists
- **AND** a price "$20.00" is displayed
- **AND** a "BUY NOW" button exists

### Requirement: Dynamic pricing based on ticket type and person count

The displayed price SHALL update when the ticket type or person count changes.
Default: VIP at $20/person.

#### Scenario: shows price based on ticket type

- **WHEN** the ticket type changes to "Regular"
- **THEN** the price updates to "$10.00"

#### Scenario: shows price based on person count

- **WHEN** the person count changes to 3
- **THEN** the total price updates to reflect 3 persons ($60.00 for VIP)

### Requirement: Form submission with terms validation

The form SHALL only submit when all required fields are filled and the terms
checkbox is checked. Upon submission, a confirmation message is shown.

#### Scenario: submits the form successfully

- **WHEN** the user fills in Full Name, Email, Date
- **AND** the user checks the terms checkbox
- **AND** the user clicks "BUY NOW"
- **THEN** a confirmation message is shown

#### Scenario: blocks submission without terms

- **WHEN** the user fills in all required fields
- **AND** the user does NOT check the terms checkbox
- **AND** the user clicks "BUY NOW"
- **THEN** the form remains visible

#### Scenario: blocks submission with empty required fields

- **WHEN** the user checks the terms checkbox
- **AND** required fields are empty
- **AND** the user clicks "BUY NOW"
- **THEN** the form remains visible

### Requirement: Image carousel navigation

The right side of the card SHALL display an image carousel with prev/next
navigation.

#### Scenario: image carousel navigation

- **WHEN** the user clicks the next arrow
- **THEN** the displayed image changes
- **WHEN** the user clicks the previous arrow
- **THEN** the image returns to the previous one

### Requirement: Footer attribution

The page footer SHALL link to Component Dock (https://www.componentdock.com/).

#### Scenario: footer links to Component Dock

- **THEN** a link to componentdock.com is present

# Regpulse — Dinner Event Booking Form

Recreation of ColorLib Reg Form V13 (https://colorlib.com/wp/template/colorlib-regform-13/).

## Purpose

A split-screen dinner event booking form with a warm peach background, dark form panel, floating labels, dropdown selectors, and a person-count radio group with an active pill indicator.

## Requirements

### Requirement: Renders all form fields

Users SHALL see a heading "Booking place for your dinner!", text input for name, number input for phone, dropdowns for time and food, a dining space radio group (2/4/6/8/10), a "Book now" submit button, and a "Verify your booking info from your phone" link.

#### Scenario: renders the form heading and all fields

- **WHEN** I visit the Regpulse page
- **THEN** I see a heading "Booking place for your dinner!"
- **AND** I see a text input labeled "Your name"
- **AND** I see a number input labeled "Your phone number"
- **AND** I see a select labeled "Time"
- **AND** I see a select labeled "Food"
- **AND** I see a text "Select Your Dining Space" with radio options 2, 4, 6, 8, 10
- **AND** I see a submit button "Book now"
- **AND** I see a link "Verify your booking info from your phone"

### Requirement: Default dining space selection

The dining space selector SHALL default to 4 persons.

#### Scenario: default dining space is 4 persons

- **WHEN** I visit the Regpulse page
- **THEN** the radio "4" is checked

### Requirement: Dining space selection changes

Users SHALL be able to select a different dining space by clicking a radio option.

#### Scenario: can select different dining space

- **WHEN** I visit the Regpulse page
- **AND** I click the radio "2"
- **THEN** the radio "2" is checked

### Requirement: Form submission shows confirmation

When all required fields are filled and the form is submitted, users SHALL see a thank-you message.

#### Scenario: shows thank-you on submit

- **WHEN** I visit the Regpulse page
- **AND** I fill in "Your name" with "Alice"
- **AND** I fill in "Your phone number" with "5551234"
- **AND** I select "6:00 PM" from "Time"
- **AND** I select "Seasonal steamed fish" from "Food"
- **AND** I click "Book now"
- **THEN** I see "Thank you!"
- **AND** I see "Your booking has been received"

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: footer links to Component Dock

- **WHEN** I visit the Regpulse page
- **THEN** I see a link to "https://www.componentdock.com/"

### Requirement: Design tokens match source

The template SHALL use Poppins font, warm peach background (#ffd9b0), near-black form panel (#111), and warm tan accent (#edb77d).

#### Scenario: design tokens are applied

- **WHEN** I inspect the page
- **THEN** the body background is warm peach
- **AND** the form panel is near-black
- **AND** the accent color is warm tan
- **AND** the font family is Poppins

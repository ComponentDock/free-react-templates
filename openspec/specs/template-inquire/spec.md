# Inquire — Contact Form Template

## Purpose

Recreation of ColorLib "Colorlib Contact Form" (https://colorlib.com/wp/template/colorlib-contact-form/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page contact form. Delivers a full-viewport green background with a centered white card containing a contact form (name, email, phone, website, message) and a green submit button, plus a minimal footer with Component Dock branding.

## Design Tokens (from preview screenshot)

- **Brand green:** #28a745 (background + submit button)
- **Card background:** #ffffff (white)
- **Title color:** #999999 (light gray)
- **Subtitle color:** #666666 (medium gray)
- **Input border:** #e0e0e0 (light gray)
- **Input placeholder text:** #aaaaaa
- **Font:** system-ui / sans-serif (original uses default browser font)
- **Button radius:** ~4px (slightly rounded)
- **Card shadow:** subtle drop shadow
- **Card padding:** generous (~40px)

## Requirements

### Requirement: Full-viewport green background

The template SHALL render a full-viewport green background (#28a745) that fills the entire screen.

#### Scenario: Green background fills the viewport

- **GIVEN** the page is loaded
- **THEN** the root container has a green background covering the full viewport
- **AND** the content is centered both horizontally and vertically

### Requirement: Centered white contact card

The template SHALL render a white card centered on the page containing the form title, subtitle, and form fields.

#### Scenario: White card is centered on green background

- **GIVEN** the page is loaded
- **THEN** I see a white card centered on the green background
- **AND** the card has a title "Inquire" in large gray text
- **AND** the card has a subtitle "Contact us for a custom quote"

### Requirement: Contact form with five fields

The template SHALL render a contact form with five fields: name (required), email (required), phone (optional), website (optional), and message (textarea, required).

#### Scenario: All form fields are present

- **GIVEN** the page is loaded
- **THEN** I see a text input with placeholder "Your name"
- **AND** I see a text input with placeholder "Your Email Address"
- **AND** I see a text input with placeholder "Your Phone Number (optional)"
- **AND** I see a text input with placeholder "Your Web Site (optional)"
- **AND** I see a textarea with placeholder "Type your message here...."

#### Scenario: Form fields accept input

- **GIVEN** the form is displayed
- **WHEN** I type "John Doe" in the name field
- **THEN** the name field shows "John Doe"
- **WHEN** I type "john@example.com" in the email field
- **THEN** the email field shows "john@example.com"

### Requirement: Green submit button

The template SHALL render a full-width green submit button matching the background color.

#### Scenario: Submit button is visible and styled

- **GIVEN** the form is displayed
- **THEN** I see a "Submit" button
- **AND** the button has a green background matching the page background
- **AND** the button spans the full width of the form

### Requirement: Form submission feedback

The template SHALL show a success message after form submission.

#### Scenario: Successful form submission

- **GIVEN** the form is displayed
- **WHEN** I fill in the name, email, and message fields
- **AND** I click the "Submit" button
- **THEN** I see a success confirmation message

### Requirement: Footer with Component Dock link

The template SHALL render a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer displays Component Dock branding

- **GIVEN** the page is loaded
- **THEN** I see a footer section
- **AND** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

### Requirement: Responsive design

The template SHALL be responsive, with the card adapting to smaller screens.

#### Scenario: Mobile viewport renders correctly

- **GIVEN** the page is loaded on a 375px viewport
- **THEN** the form card is visible and usable
- **AND** the form fields span the available width

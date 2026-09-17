# Spec: Formbloom

> Recreation of ColorLib **Contact Form 15**
> (https://colorlib.com/wp/template/contact-form-15/)

## Purpose

A minimal, monochrome contact form template with a two-column layout (location info + contact info) and a full-width message form below. Pure white background, Quicksand font, solid black "Send Message" button.

## Requirements

### Requirement: Page renders all sections

Users SHALL see location info, contact info, and a message form on page load.

#### Scenario: All section headings visible

- **WHEN** the app loads
- **THEN** the heading "NEW YORK" is visible
- **AND** the heading "CONTACT INFO" is visible
- **AND** the heading "MESSAGE US" is visible

### Requirement: Contact details displayed

Users SHALL see the location address, phone number, and email address.

#### Scenario: Contact information visible

- **WHEN** the app loads
- **THEN** the address "9757 Aspen Lane South" is visible
- **AND** the phone "+1 (291) 939 9321" is visible
- **AND** the email "info@mywebsite.com" is visible

### Requirement: Form fields present and functional

Users SHALL see name, email, and message fields and be able to type into them.

#### Scenario: Form fields exist

- **WHEN** the app loads
- **THEN** a text input with placeholder "Your name" exists
- **AND** a text input with placeholder "Email" exists
- **AND** a textarea with placeholder "Write your message" exists
- **AND** a button labeled "Send Message" exists

#### Scenario: User can type in all fields

- **WHEN** the user types "Alice" into the name field
- **AND** types "alice@example.com" into the email field
- **AND** types "Hello" into the message textarea
- **THEN** all three fields contain the typed text

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer link present

- **WHEN** the app loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

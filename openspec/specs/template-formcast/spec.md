---
name: FormCast
description: >-
  A clean, centered contact form template with a map-inspired background,
  envelope icon, two-column name/email fields, textarea, and coral-red send
  button. Recreation of ColorLib Contact Form V20.
source: https://colorlib.com/wp/template/contact-form-v20/
preview: https://preview.colorlib.com/theme/contact-form-v20/
status: in-progress
---

## Purpose

FormCast is a centered contact form template that recreates ColorLib Contact Form V20 (https://colorlib.com/wp/template/contact-form-v20/). It features a full-screen muted map-like gradient background with a centered white card, envelope icon, two-column name/email fields, a message textarea, and a coral-red send button.

Design tokens: brand coral-red #ef4444, font Inter, card shadow, light gray-blue gradient background.

## Requirements

### Requirement: Page renders with correct layout and heading

The template SHALL display a full-screen gradient background with a centered white contact card containing an envelope icon and the heading "Drop Us A Message".

#### Scenario: Heading is visible on page load

- **WHEN** the page loads
- **THEN** the heading "Drop Us A Message" is displayed

#### Scenario: Envelope icon is visible

- **WHEN** the page loads
- **THEN** an envelope icon is displayed above the heading

#### Scenario: Contact card is centered

- **WHEN** the page loads
- **THEN** the contact card is rendered with a centered layout

### Requirement: Form fields are present and interactive

The template SHALL display a Name text input, an Email Address email input, a Message textarea, and a Send submit button.

#### Scenario: All form fields are rendered

- **WHEN** the page loads
- **THEN** a Name field is present
- **AND** an Email Address field is present
- **AND** a Message textarea is present
- **AND** a Send button is present

#### Scenario: User can type in the name field

- **WHEN** the user types "Jane" in the Name field
- **THEN** the Name field value is "Jane"

#### Scenario: User can type in the email field

- **WHEN** the user types "jane@example.com" in the Email field
- **THEN** the Email field value is "jane@example.com"

#### Scenario: User can type in the message field

- **WHEN** the user types "Hello!" in the Message field
- **THEN** the Message field value is "Hello!"

#### Scenario: Form fields are required

- **WHEN** the form renders
- **THEN** the Name field is required
- **AND** the Email field is required
- **AND** the Message field is required

#### Scenario: Send button has submit type

- **WHEN** the form renders
- **THEN** the Send button has type="submit"

### Requirement: Form submission shows success state

The template SHALL display a success message after the form is submitted with all fields filled in.

#### Scenario: Submission shows thank you message

- **WHEN** the user fills in all fields and clicks "Send"
- **THEN** a success state is displayed with a "Thank You!" message
- **AND** the message "Your message has been sent" is shown

#### Scenario: Form can be reset after submission

- **WHEN** the form was submitted successfully
- **AND** the user clicks "Send Another Message"
- **THEN** the form reappears with empty fields

### Requirement: Footer links to Component Dock

The template SHALL display a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a "Component Dock" link is present
- **AND** it points to https://www.componentdock.com/
- **AND** it opens in a new tab

### Requirement: Document title is set correctly

The template SHALL set the document title to "FormCast — Contact Form Template".

#### Scenario: Document title on load

- **WHEN** the page loads
- **THEN** the document title is "FormCast — Contact Form Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formcast/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formcast/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

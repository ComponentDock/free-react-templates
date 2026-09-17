# template-formzen

## Purpose

Recreation of ColorLib "Contact Form V10"
(https://colorlib.com/wp/template/contact-form-v10/).
A minimalist contact form page with a light gray background, centered white
card with subtle shadow, and a clean purple-branded send button.

## Requirements

### Requirement: Page renders with form

The page SHALL display a centered contact form card on a light gray background.

#### Scenario: Form heading is visible

- **WHEN** I visit the Formzen page
- **THEN** I should see the heading "SEND US A MESSAGE"

#### Scenario: All form fields are present

- **WHEN** I visit the Formzen page
- **THEN** I should see Name, Email, Phone, and Message fields
- **AND** I should see a Send button

### Requirement: Form field interactions

The form SHALL accept user input in all fields.

#### Scenario: Name field accepts text

- **WHEN** I type "Jane Smith" in the Name field
- **THEN** the Name field should contain "Jane Smith"

#### Scenario: Email field accepts text

- **WHEN** I type "jane@example.com" in the Email field
- **THEN** the Email field should contain "jane@example.com"

#### Scenario: Phone field accepts text

- **WHEN** I type "555-1234" in the Phone field
- **THEN** the Phone field should contain "555-1234"

#### Scenario: Message field accepts text

- **WHEN** I type "Hello there" in the Message field
- **THEN** the Message field should contain "Hello there"

### Requirement: Form submission

The form SHALL prevent default browser navigation on submit.

#### Scenario: Clicking Send does not navigate

- **WHEN** I click the Send button
- **THEN** the page should not navigate away

### Requirement: Visual styling

The page SHALL match the original design's visual language.

#### Scenario: Page has light gray background

- **WHEN** I visit the Formzen page
- **THEN** the page background should be light gray

#### Scenario: Card has white background

- **WHEN** I visit the Formzen page
- **THEN** the form card should have a white background with shadow

#### Scenario: Send button is purple

- **WHEN** I visit the Formzen page
- **THEN** the Send button should be purple

### Requirement: Footer

The page SHALL display a footer linking to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** I visit the Formzen page
- **THEN** I should see a "More templates at Component Dock" link
- **AND** the link should point to https://www.componentdock.com/

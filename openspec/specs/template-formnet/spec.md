# Formnet — Contact Form Template

## Purpose

Recreation of ColorLib [Contact Form V7](https://colorlib.com/wp/template/contact-form-v7/)
Preview: https://colorlib.com/etc/cf/ContactFrom_v7/index.html

A minimal, centered contact form with Oswald font, left-aligned icon inputs,
a custom checkbox, and a gradient pink-to-red submit button on a light gray
background. No navbar or sidebar — full-viewport form layout.

## Design Tokens (from original CSS)

| Token                | Value                                                      |
| -------------------- | ---------------------------------------------------------- |
| Background           | `#e6e6e6` (light gray)                                     |
| Heading/text         | `#43383e` (dark plum)                                      |
| Placeholder          | `#999999` (medium gray)                                    |
| Input background     | `#ffffff` (white)                                          |
| Button gradient      | `linear-gradient(-135deg, #d5007d, #e53935)` (pink to red) |
| Button text          | `#ffffff` (white)                                          |
| Button border-radius | 31px (pill shape)                                          |
| Input height         | 62px                                                       |
| Font family          | Oswald (Google Fonts, weights 400/500)                     |
| Title size           | 30px, Oswald Medium                                        |
| Input font size      | 15px, Oswald Medium                                        |
| Validation error     | `#c80000` (red)                                            |

## Requirements

### Requirement: Form renders all fields

The contact form SHALL display a heading, four input fields (name, email, phone, message),
a "Send copy to my-email" checkbox, and a "Send Email" submit button.

#### Scenario: Page loads with all form elements

- **WHEN** the page loads
- **THEN** I should see a heading "Get in Touch"
- **AND** I should see an input with placeholder "Name"
- **AND** I should see an input with placeholder "Email"
- **AND** I should see an input with placeholder "Phone"
- **AND** I should see a textarea with placeholder "Your message..."
- **AND** I should see a checkbox labeled "Send copy to my-email"
- **AND** I should see a button labeled "Send Email"

### Requirement: Form validates required fields

The form SHALL display validation errors when required fields are empty on submit.

#### Scenario: Required field validation

- **WHEN** I click "Send Email" without filling any fields
- **THEN** I should see "Name is required"
- **AND** I should see "Valid email is required: ex@abc.xyz"
- **AND** I should see "Phone is required"
- **AND** I should see "Message is required"

### Requirement: Form submits with valid data

The form SHALL submit successfully when all required fields are filled.

#### Scenario: Successful form submission

- **WHEN** I fill in "Name" with "John Doe"
- **AND** I fill in "Email" with "john@example.com"
- **AND** I fill in "Phone" with "555-1234"
- **AND** I fill in the message with "Hello!"
- **AND** I click "Send Email"
- **THEN** I should see a success message

### Requirement: Checkbox toggles

The checkbox SHALL toggle on click.

#### Scenario: Checkbox toggle

- **WHEN** I click the "Send copy to my-email" checkbox
- **THEN** the checkbox should be checked

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** I should see a link to "https://www.componentdock.com/"

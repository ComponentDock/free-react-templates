# ContactWave — ColorLib Contact Form V5 Recreation

## Purpose

ContactWave is a free, advanced contact form template that recreates the ColorLib "Contact Form V5" design. It features floating labels, a budget range slider, product type radio selection, and client-side validation — all built with React, Tailwind CSS, and TypeScript.

## Source

- **ColorLib template:** Contact Form V5
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v5/ (unreachable at time of spec; screenshot used as primary reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v5.jpeg

## Design Tokens (from screenshot analysis)

| Token             | Value                         | Notes                              |
| ----------------- | ----------------------------- | ---------------------------------- |
| Background        | `#f5f5f5` light gray          | Full-page background               |
| Card background   | `#ffffff` white               | Centered card with shadow          |
| Card shadow       | `0 2px 20px rgba(0,0,0,0.08)` | Subtle drop shadow                 |
| Heading color     | `#222222` dark                | "Contact Us" heading               |
| Label color       | `#999999` gray                | Uppercase, small, letter-spaced    |
| Input text        | `#333333` dark                | Body text in inputs                |
| Placeholder       | `#aaaaaa` light gray          | Input placeholders                 |
| Validation error  | `#e74c3c` red                 | Error text and borders             |
| Success           | `#27ae60` green               | Checkmark icon                     |
| Slider fill       | `#27ae60` green               | Budget range slider filled portion |
| Button background | `#333333` dark charcoal       | Submit button                      |
| Button text       | `#ffffff` white               | Submit button label                |
| Border            | `#e0e0e0` light gray          | Input underlines                   |
| Font family       | Inter, sans-serif             | Clean, modern typeface             |

## Requirements

### Requirement: Renders the contact form heading

The app SHALL display a "Contact Us" heading centered at the top of the form card.

#### Scenario: Heading is visible on load

- **WHEN** the app loads
- **THEN** I should see a "Contact Us" heading

### Requirement: Renders all form fields

The app SHALL render form fields for Full Name, Email, Phone, Needed Services, Product Type (radio group), Budget (range slider), and Message.

#### Scenario: All form fields are present

- **WHEN** the app loads
- **THEN** I should see a "Full Name" text input
- **AND** I should see an "Email" text input
- **AND** I should see a "Phone" text input
- **AND** I should see a "Needed Services" select dropdown
- **AND** I should see a product type radio group with three options
- **AND** I should see a budget range slider
- **AND** I should see a "Message" textarea

### Requirement: Validates required fields on submit

The app SHALL validate required fields and display error messages when the form is submitted with empty fields.

#### Scenario: Shows validation errors for empty form

- **WHEN** I click the "Submit" button without filling any fields
- **THEN** I should see validation errors for Full Name, Email, Services, Product Type, and Message

#### Scenario: Shows email validation error for invalid email

- **WHEN** I enter "notanemail" in the Email field and submit
- **THEN** I should see "Invalid email address" error

#### Scenario: Clears validation error when user types

- **WHEN** I submit the form with an empty Full Name field
- **AND** I start typing in the Full Name field
- **THEN** the validation error for Full Name should disappear

### Requirement: Submits the form successfully

The app SHALL show a success message when all required fields are filled with valid data.

#### Scenario: Successful form submission

- **WHEN** I fill in all required fields with valid data
- **AND** I click the "Submit" button
- **THEN** I should see a "Thank you!" message
- **AND** I should see "Your message has been sent"

#### Scenario: Reset after submission

- **WHEN** I submit the form successfully
- **AND** I click "Send another message"
- **THEN** the form should reset to its initial state

### Requirement: Budget slider interaction

The app SHALL allow users to adjust the budget using a range slider.

#### Scenario: Slider displays initial value

- **WHEN** the app loads
- **THEN** the budget slider should display "$2,500 – $5,000"

#### Scenario: Slider value changes on interaction

- **WHEN** I change the budget slider to 5000
- **THEN** the slider value should update to 5000

### Requirement: Footer with Component Dock link

The app SHALL render a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer link is present

- **WHEN** the app loads
- **THEN** I should see a footer with a link to componentdock.com
- **AND** the link should open in a new tab

### Requirement: Page title

The app SHALL set the page title to "ContactWave — Contact Form Template" on mount.

#### Scenario: Title is set on load

- **WHEN** the app loads
- **THEN** the page title should be "ContactWave — Contact Form Template"

## Implementation Notes

- Use floating labels (label moves up when input is focused or has value)
- Budget range slider: HTML `<input type="range">` with custom styling
- Radio group: styled radio buttons with labels
- Validation: client-side with visual feedback (red text, green checkmark)
- No external assets — use picsum.photos for any placeholder imagery
- Footer links to https://www.componentdock.com/ branded as "Component Dock"

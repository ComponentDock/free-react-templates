# Template: FormNoir (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V14** — a centered contact form card on a
vivid pink-to-purple gradient background, featuring validation states with
checkmarks and error indicators.

- **Source slug:** `contact-form-v14`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v14/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v14/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page renders a centered form card on a full-page gradient background.

#### Scenario: Gradient background

- **WHEN** I visit the FormNoir page
- **THEN** the page has a full-viewport gradient background from pink (bottom-left) to purple (top-right)

#### Scenario: Centered card

- **WHEN** I visit the FormNoir page
- **THEN** I see a white card centered on the page with rounded corners and a subtle shadow

### Requirement: Form heading

The form card contains a centered title.

#### Scenario: Contact Us heading

- **WHEN** I visit the FormNoir page
- **THEN** the card displays a "Contact Us" heading in bold dark text, centered at the top

### Requirement: Name fields

The form has side-by-side first name and last name fields.

#### Scenario: Two name inputs

- **WHEN** I visit the FormNoir page
- **THEN** I see a "YOUR NAME" label with two input fields in the same row: one for first name and one for last name

#### Scenario: Name fields are required

- **WHEN** I visit the FormNoir page
- **THEN** both name input fields are marked as required (asterisk after label)

### Requirement: Email field

The form has a single email input field.

#### Scenario: Email input

- **WHEN** I visit the FormNoir page
- **THEN** I see an "EMAIL ADDRESS" label with a single full-width email input field

#### Scenario: Email field required

- **WHEN** I visit the FormNoir page
- **THEN** the email input field is marked as required

### Requirement: Phone field

The form has a phone number input field.

#### Scenario: Phone input

- **WHEN** I visit the FormNoir page
- **THEN** I see a "PHONE NUMBER" label with a single full-width phone input field

#### Scenario: Phone field required

- **WHEN** I visit the FormNoir page
- **THEN** the phone input field is marked as required

### Requirement: Message field

The form has a message textarea.

#### Scenario: Message textarea

- **WHEN** I visit the FormNoir page
- **THEN** I see a "MESSAGE" label with a tall textarea for multi-line input

#### Scenario: Message field required

- **WHEN** I visit the FormNoir page
- **THEN** the message textarea is marked as required

### Requirement: Submit button

The form has a styled submit button.

#### Scenario: Submit button present

- **WHEN** I visit the FormNoir page
- **THEN** I see a "Submit" button with a right-arrow icon, centered below the form fields

#### Scenario: Submit button style

- **WHEN** I visit the FormNoir page
- **THEN** the submit button has a dark background, white text, and a fully rounded (pill) shape

### Requirement: Field validation states

The form shows validation indicators next to fields.

#### Scenario: Valid field indicator

- **WHEN** I enter valid data in a form field
- **THEN** a green checkmark appears to the right of the field

#### Scenario: Invalid field indicator

- **WHEN** I enter invalid data in a required field and blur away
- **THEN** the field shows a red border and a red X indicator to the right

#### Scenario: Error field styling

- **WHEN** a field is in error state
- **THEN** the input border turns red and the border style is visible

### Requirement: Form validation

The form validates inputs on submit and blur.

#### Scenario: Required field validation on submit

- **WHEN** I click Submit with empty required fields
- **THEN** the form shows validation errors and does not submit

#### Scenario: Email format validation

- **WHEN** I enter an invalid email address and submit
- **THEN** the form shows an email format error

#### Scenario: Successful submission

- **WHEN** I fill in all fields with valid data and click Submit
- **THEN** the form submits successfully (simulated)

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the FormNoir page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

### Requirement: Responsive layout

The form adapts to different screen sizes.

#### Scenario: Mobile layout

- **WHEN** I view the page on a mobile screen (width < 640px)
- **THEN** the form card is full-width with appropriate padding

#### Scenario: Desktop layout

- **WHEN** I view the page on a desktop screen
- **THEN** the form card is centered with a max-width of ~600px

## Design tokens

| Token            | Value                       | Notes                                    |
| ---------------- | --------------------------- | ---------------------------------------- |
| Gradient start   | `#e84393` (pink)            | Bottom-left of gradient background       |
| Gradient end     | `#a855f7` (purple)          | Top-right of gradient background         |
| Gradient angle   | 135deg                      | Diagonal from bottom-left to top-right   |
| Card background  | `#FFFFFF`                   | White card surface                       |
| Card shadow      | `0 10px 40px rgba(0,0,0,0.1)` | Subtle elevation shadow               |
| Card border-radius | 8–12px                    | Rounded corners on card                  |
| Text primary     | `#2d3436`                   | Heading and body text                    |
| Text secondary   | `#636e72`                   | Labels, lighter text                     |
| Label color      | `#636e72`                   | Uppercase field labels                   |
| Label transform  | uppercase, 11–12px          | Small caps-style labels                  |
| Input border     | `#dfe6e9`                   | Default light gray border                |
| Input focus      | `#0984e3`                   | Blue focus ring                          |
| Error border     | `#d63031`                   | Red border on invalid fields             |
| Error text       | `#d63031`                   | Red error indicator                      |
| Success check    | `#00b894`                   | Green checkmark for valid fields         |
| Button background| `#2d3436`                   | Dark button, nearly black                |
| Button text      | `#FFFFFF`                   | White text on button                     |
| Button radius    | 9999px (pill)               | Fully rounded pill shape                 |
| Button padding   | 12px 32px                   | Horizontal-heavy padding                 |
| Button font-size | 15px                        | —                                        |
| Font — heading   | Poppins (sans-serif)        | Bold weight for "Contact Us"             |
| Font — body      | Poppins (sans-serif)        | Regular weight for labels and inputs     |
| Font — labels    | Poppins (sans-serif)        | 11–12px uppercase                        |

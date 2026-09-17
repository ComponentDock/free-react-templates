# Template: FormLift (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V5** — an advanced single-page contact
form with validation states, a services dropdown, product-type radio buttons,
a budget range slider, a message textarea, and a full-width pill-shaped submit
button, all on a light gray background inside a centered white card.

- **Source slug:** `contact-form-v5`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v5/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v5/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the ColorLib screenshot (preview unavailable):

| Token | Value | Notes |
|-------|-------|-------|
| Page background | `#f5f5f5` (light gray) | Full-page neutral background |
| Card background | `#ffffff` (white) | Centered form card |
| Card border-radius | `12px` | Rounded card corners |
| Card shadow | `0 4px 24px rgba(0,0,0,0.08)` | Subtle drop shadow |
| Card max-width | `~640px` | Centered form card width |
| Heading text | `#222222` (near-black) | "Contact Us" bold heading |
| Heading font-weight | `700` (bold) | Centered heading |
| Label text | `#555555` (dark gray) | Small uppercase field labels |
| Label font-size | `~11px` | Small, uppercase, letter-spaced |
| Placeholder text | `#aaaaaa` (gray-400) | Input placeholder |
| Input text | `#333333` (dark) | User-entered text |
| Input border | `#e0e0e0` (gray-300) | Light border around input fields |
| Input border-radius | `4px` | Subtle rounded corners |
| Input padding | `12px 16px` | Comfortable click targets |
| Error text | `#e74c3c` (red) | Validation error messages |
| Error border | `#e74c3c` (red) | Border on invalid fields |
| Success icon | `#2ecc71` (green) | Checkmark on valid email |
| Radio accent | `#1abc9c` (teal) | Selected radio button fill |
| Radio border | `#cccccc` (gray) | Unselected radio border |
| Slider track | `#cccccc` (gray-300) | Background track |
| Slider fill | `#1abc9c` (teal) | Active range portion |
| Slider handle | `#ffffff` (white) | Draggable handle with border |
| Submit background | `#333333` (charcoal) | Dark pill button |
| Submit text | `#ffffff` (white) | Button label + arrow |
| Submit border-radius | `24px` | Fully rounded pill shape |
| Submit height | `~48px` | Tall clickable button |
| Font family | `"Poppins", sans-serif` | Clean geometric sans-serif |
| Font weight (heading) | `700` (bold) | "Contact Us" |
| Font weight (labels) | `500` (medium) | Uppercase labels |
| Font weight (inputs) | `400` (normal) | Input text |

## Requirements

### Requirement: Page layout

The page SHALL render a full-page light gray background with a centered white
contact form card.

#### Scenario: Light gray background

- **WHEN** I visit the FormLift page
- **THEN** the page background SHALL be light gray (`#f5f5f5`)

#### Scenario: Centered form card

- **WHEN** I visit the FormLift page
- **THEN** a white card SHALL be centered on the page with rounded corners
  and a subtle drop shadow, vertically centered in the viewport

### Requirement: Form heading

The form card SHALL display a heading at the top.

#### Scenario: Heading text

- **WHEN** I view the form card
- **THEN** a "Contact Us" heading SHALL be displayed at the top of the card
  in dark bold text, centered horizontally

### Requirement: Full Name field

The form SHALL include a Full Name text input.

#### Scenario: Name field structure

- **WHEN** I view the form
- **THEN** a text input SHALL be displayed with label "FULL NAME" above it
  (small, uppercase, letter-spaced)

#### Scenario: Name field placeholder

- **WHEN** I view the form
- **THEN** the name input SHALL show placeholder text "Please Type Your Name"

#### Scenario: Name field validation error

- **WHEN** I submit the form with an empty name field
- **THEN** the name field SHALL display a red error state with a red
  "Please Type Your Name" message and an X icon on the right

### Requirement: Email and Phone fields

The form SHALL include Email and Phone inputs displayed side by side.

#### Scenario: Two-column layout

- **WHEN** I view the form
- **THEN** the Email and Phone inputs SHALL be displayed in a two-column
  row below the Full Name field

#### Scenario: Email field

- **WHEN** I view the form
- **THEN** an email input SHALL be displayed with label "EMAIL" above it
  and placeholder "contact@colorlib.com"

#### Scenario: Email validation success

- **WHEN** I enter a valid email address
- **THEN** a green checkmark icon SHALL appear on the right side of the
  email field

#### Scenario: Phone field

- **WHEN** I view the form
- **THEN** a phone input SHALL be displayed with label "PHONE" above it
  and placeholder "Enter Number Phone"

### Requirement: Needed Services dropdown

The form SHALL include a services select dropdown.

#### Scenario: Services dropdown structure

- **WHEN** I view the form
- **THEN** a select dropdown SHALL be displayed with label "NEEDED SERVICES"
  above it, showing "eCommerce Business" as the default option, with a
  chevron/dropdown icon on the right

### Requirement: Product type radio group

The form SHALL include a radio button group for product type selection.

#### Scenario: Radio group label

- **WHEN** I view the form
- **THEN** a label "WHAT TYPE OF PRODUCTS DO YOU SELL?" SHALL be displayed
  above the radio group (small, uppercase)

#### Scenario: Radio options

- **WHEN** I view the form
- **THEN** three radio options SHALL be displayed:
  "Physical Products", "Digital Products", "Services Consulting"

#### Scenario: Default selection

- **WHEN** I view the form
- **THEN** "Physical Products" SHALL be selected by default with a teal
  accent color (`#1abc9c`)

### Requirement: Budget range slider

The form SHALL include a budget range slider.

#### Scenario: Slider label

- **WHEN** I view the form
- **THEN** a label "BUDGET" SHALL be displayed above the slider (small,
  uppercase)

#### Scenario: Slider display

- **WHEN** I view the form
- **THEN** a range slider SHALL be displayed showing a value range of
  "$1,500 - $3,900" with a teal filled track and white handle

#### Scenario: Slider interaction

- **WHEN** I drag the slider handle
- **THEN** the displayed budget range values SHALL update accordingly

### Requirement: Message textarea

The form SHALL include a message textarea.

#### Scenario: Textarea structure

- **WHEN** I view the form
- **THEN** a textarea SHALL be displayed with label "MESSAGE" above it
  and placeholder "Your message here..."

#### Scenario: Textarea size

- **WHEN** I view the form
- **THEN** the textarea SHALL be taller than single-line inputs,
  approximately 100-120px in height

### Requirement: Submit button

The form SHALL include a submit button.

#### Scenario: Button appearance

- **WHEN** I view the form
- **THEN** a full-width submit button SHALL be displayed at the bottom of
  the form with dark charcoal background (`#333333`), white text reading
  "Submit", and a right arrow icon (→)

#### Scenario: Button shape

- **WHEN** I view the form
- **THEN** the submit button SHALL have a fully rounded pill shape
  (border-radius ~24px)

#### Scenario: Button hover

- **WHEN** I hover over the submit button
- **THEN** the button background SHALL darken slightly to indicate
  interactivity

### Requirement: Form validation

The form SHALL support basic client-side validation.

#### Scenario: Required field validation

- **WHEN** I submit the form without filling required fields
- **THEN** error states SHALL appear on the Full Name field (and any other
  required fields) with red text and/or icons

#### Scenario: Valid form submission

- **WHEN** I fill all required fields correctly and click Submit
- **THEN** the form SHALL accept the submission (no validation errors shown)

### Requirement: Footer attribution

The template SHALL include a footer linking to Component Dock.

#### Scenario: Footer link

- **WHEN** I view the bottom of the page
- **THEN** a footer SHALL be present with a link to
  `https://www.componentdock.com/` branded as "Component Dock"

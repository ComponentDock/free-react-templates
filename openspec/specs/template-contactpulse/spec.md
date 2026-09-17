# Template: ContactPulse

## Purpose

Recreation of ColorLib **Contact Form V14** — a centered single-column contact
form on a vibrant full-page gradient background with underline-style inputs,
field validation indicators, and a dark pill-shaped submit button.

- **Source slug:** `contact-form-v14`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v14/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v14/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page SHALL render a centered single-column form card on a full-page gradient
background.

#### Scenario: Gradient background

- **WHEN** I visit the ContactPulse page
- **THEN** the page background SHALL be a full-page gradient transitioning from
  warm golden/peach (#f7c948) on the left to hot pink/magenta (#e84393) on
  the right

#### Scenario: Centered form card

- **WHEN** I visit the ContactPulse page
- **THEN** a white card SHALL be centered on the page with rounded corners and
  subtle shadow

#### Scenario: Contact heading

- **WHEN** I visit the ContactPulse page
- **THEN** a "Contact Us" heading SHALL be displayed at the top of the card in
  bold dark text, centered

### Requirement: Form fields

The form SHALL contain name (split first/last), email, phone, and message fields.

#### Scenario: Name fields

- **WHEN** I view the form
- **THEN** "YOUR NAME *" label SHALL be displayed above two side-by-side inputs
  (first name and last name) with underline borders

#### Scenario: Email field

- **WHEN** I view the form
- **THEN** "EMAIL ADDRESS *" label SHALL be displayed above a single input with
  underline border

#### Scenario: Phone field

- **WHEN** I view the form
- **THEN** "PHONE NUMBER *" label SHALL be displayed above a single input with
  underline border

#### Scenario: Message field

- **WHEN** I view the form
- **THEN** "MESSAGE *" label SHALL be displayed above a textarea with light gray
  background and placeholder text "Please enter your comments..."

### Requirement: Field validation indicators

Fields SHALL show visual feedback for valid/invalid states.

#### Scenario: Valid field indicator

- **WHEN** a required field (name or email) has a valid value
- **THEN** a green checkmark icon SHALL appear to the right of the field

#### Scenario: Invalid field indicator

- **WHEN** a required field (name or email) is empty or has an invalid value
  and the user has interacted with it
- **THEN** a red X icon SHALL appear to the right of the field

#### Scenario: Phone validation

- **WHEN** the phone field contains a non-numeric value
- **THEN** a red X icon SHALL appear to the right of the field

### Requirement: Submit button

The form SHALL include a styled submit button.

#### Scenario: Submit button appearance

- **WHEN** I view the form
- **THEN** a "Submit →" button SHALL be displayed at the bottom of the form,
  styled as a dark/black pill-shaped button with white text

#### Scenario: Form submission

- **WHEN** I click the Submit button with valid data
- **THEN** the form SHALL submit successfully (no page reload)

#### Scenario: Required field validation

- **WHEN** I click the Submit button with empty required fields
- **THEN** validation errors SHALL appear for the empty required fields

### Requirement: Footer

The page SHALL include a branded footer.

#### Scenario: Component Dock link

- **WHEN** I scroll to the bottom of the page
- **THEN** a footer SHALL be displayed with a link to https://www.componentdock.com/
  labeled "Component Dock"

## Design tokens (extracted from screenshot)

- **Background gradient:** left #f7c948 (warm golden) → right #e84393 (hot pink/magenta)
- **Card background:** #ffffff
- **Card shadow:** subtle drop shadow (0 4px 30px rgba(0,0,0,0.1))
- **Heading color:** #222222 (dark)
- **Label color:** #555555 (uppercase, small, tracking-wide)
- **Input border:** #e0e0e0 (light gray underline)
- **Input focus border:** transparent (underline stays consistent)
- **Valid indicator:** #28a745 (green checkmark)
- **Invalid indicator:** #dc3545 (red X)
- **Textarea background:** #f5f5f5 (light gray)
- **Submit button:** #333333 (dark/black), rounded-full, white text
- **Font:** Poppins (Google Fonts), sans-serif

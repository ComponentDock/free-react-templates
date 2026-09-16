# Template: Formwell (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 08** — a centered card with a form on the
left (olive-green accent, gray-bg inputs) and a decorative image on the right.

- **Source slug:** `contact-form-08`
- **Source URL:** https://colorlib.com/wp/template/contact-form-08/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-08/ (404 at
  time of implementation — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page renders a centered card on a light gray background with a page title above it.

#### Scenario: Page title displayed

- **WHEN** I visit the Formwell page
- **THEN** the page title "Formwell" is displayed centered above the card

#### Scenario: Centered card rendered

- **WHEN** I visit the Formwell page
- **THEN** I see a centered card with a white background and shadow on a light gray background

### Requirement: Contact form

The card contains a form with four fields and a submit button.

#### Scenario: Form heading displayed

- **WHEN** I visit the Formwell page
- **THEN** I see a "Get in touch with us" heading in the form section

#### Scenario: Full Name and Email fields side by side

- **WHEN** I visit the Formwell page
- **THEN** the Full Name and Email Address inputs appear in a two-column row

#### Scenario: Subject field

- **WHEN** I visit the Formwell page
- **THEN** I see a full-width Subject input field

#### Scenario: Message textarea

- **WHEN** I visit the Formwell page
- **THEN** I see a full-width Message textarea with at least 5 rows

#### Scenario: Form labels are uppercase

- **WHEN** I visit the Formwell page
- **THEN** all form labels (Full Name, Email Address, Subject, Message) are displayed in uppercase

#### Scenario: Inputs have light gray background

- **WHEN** I visit the Formwell page
- **THEN** the input fields have a light gray background color

#### Scenario: Send Message button

- **WHEN** I visit the Formwell page
- **THEN** I see a "Send Message" button with an olive-green background and rounded corners

### Requirement: Decorative image

The right side of the card shows a decorative image.

#### Scenario: Image displayed

- **WHEN** I visit the Formwell page
- **THEN** I see an image on the right side of the card

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Formwell page
- **THEN** I see "More templates at Component Dock" with a link to https://www.componentdock.com/

### Requirement: Form interactivity

The form fields accept user input and the form submits without error.

#### Scenario: Typing in form fields

- **WHEN** I type into the Full Name field
- **THEN** the field value updates to reflect my input

#### Scenario: Form submission

- **WHEN** I click the Send Message button
- **THEN** the form submits without throwing an error

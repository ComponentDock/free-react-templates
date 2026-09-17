# Template: FormCraft (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 20** — a minimal single-page contact form
centered in a white card on a light gray background. Clean underline-style
inputs, a "Let's Talk" heading, and a blue pill-shaped submit button.

- **Source slug:** `contact-form-20`
- **Source URL:** https://colorlib.com/wp/template/contact-form-20/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-20/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page renders a centered form card on a light gray background.

#### Scenario: Light gray background

- **WHEN** I visit the FormCraft page
- **THEN** the page background is light gray (#f5f5f5)

#### Scenario: Centered white card

- **WHEN** I visit the FormCraft page
- **THEN** I see a white card centered on the page
- **AND** the card has a subtle shadow

### Requirement: Form heading

The card displays a "Let's Talk" heading above the form fields.

#### Scenario: Heading displayed

- **WHEN** I visit the FormCraft page
- **THEN** a "Let's Talk" heading is visible centered at the top of the card

### Requirement: Name and Email fields (side by side)

The form displays Name and Email input fields in a two-column row.

#### Scenario: Two-column field layout

- **WHEN** I visit the FormCraft page
- **THEN** the Name and Email inputs are displayed side by side

#### Scenario: Name field labeled

- **WHEN** I visit the FormCraft page
- **THEN** the Name field has a label "Name *"

#### Scenario: Email field labeled

- **WHEN** I visit the FormCraft page
- **THEN** the Email field has a label "Email *"

#### Scenario: Name field accepts input

- **WHEN** I type "Alice" into the Name field
- **THEN** the Name field contains "Alice"

#### Scenario: Email field accepts input

- **WHEN** I type "alice@example.com" into the Email field
- **THEN** the Email field contains "alice@example.com"

### Requirement: Subject field

The form displays a full-width Subject input field below the Name/Email row.

#### Scenario: Subject field visible

- **WHEN** I visit the FormCraft page
- **THEN** a Subject input field is visible below the Name and Email fields

#### Scenario: Subject accepts input

- **WHEN** I type "Inquiry" into the Subject field
- **THEN** the Subject field contains "Inquiry"

### Requirement: Message textarea

The form displays a full-width Message textarea below the Subject field.

#### Scenario: Message textarea visible

- **WHEN** I visit the FormCraft page
- **THEN** a Message textarea is visible below the Subject field

#### Scenario: Message textarea accepts input

- **WHEN** I type "Hello there" into the Message textarea
- **THEN** the Message textarea contains "Hello there"

### Requirement: Submit button

The form displays a "SEND MESSAGE" button.

#### Scenario: Button visible

- **WHEN** I visit the FormCraft page
- **THEN** a "SEND MESSAGE" button is visible below the Message textarea

#### Scenario: Button styling

- **WHEN** I visit the FormCraft page
- **THEN** the SEND MESSAGE button has a blue/periwellow background
- **AND** the button text is white uppercase
- **AND** the button has a pill shape (fully rounded corners)

#### Scenario: Button prevents default submission

- **WHEN** I click the SEND MESSAGE button
- **THEN** the form does not navigate away from the page

### Requirement: Underline-style inputs

All text inputs and the textarea use bottom-border underline styling only.

#### Scenario: Input border style

- **WHEN** I visit the FormCraft page
- **THEN** all text inputs have a bottom border only (no full border/box)

### Requirement: Label styling

Form field labels are displayed in gray uppercase text above their inputs.

#### Scenario: Labels displayed

- **WHEN** I visit the FormCraft page
- **THEN** all form labels are in gray color and uppercase text

### Requirement: Footer links to Component Dock

The page footer contains a link to Component Dock.

#### Scenario: Footer link

- **WHEN** I visit the FormCraft page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Design tokens

| Token            | Value                   | Notes                                              |
| ---------------- | ----------------------- | -------------------------------------------------- |
| Background       | `#f5f5f5` (light gray)  | Full-viewport page background                      |
| Card surface     | `#ffffff` (white)        | Form card background                               |
| Card shadow      | Subtle box-shadow       | Slight elevation on card                           |
| Brand blue       | `#5B6ABF` (periwinkle)  | Button background                                  |
| Heading color    | `#333333` (dark gray)    | "Let's Talk" heading                               |
| Label color      | `#999999` (gray)         | Uppercase field labels                             |
| Input text       | `#333333` (dark gray)    | Typed text in fields                               |
| Input border     | `#dddddd` (light gray)   | Bottom-border only (underline style)               |
| Button text      | `#ffffff` (white)        | "SEND MESSAGE" text                                |
| Button radius    | ~50px (pill)            | Fully rounded corners                              |
| Font             | Poppins (sans-serif)    | Clean sans-serif via Google Fonts                  |
| Input style      | Underline (no border)   | Bottom border only, no full border/box             |
| Card padding     | ~40px                   | Internal card spacing                              |

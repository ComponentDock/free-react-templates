# Template: Linewell (Contact Form V15)

## Purpose

Recreation of ColorLib **Contact Form V15** — a centered card with a banner header
image, "Contact Us" title, and a four-field contact form (underline-style inputs)
on a dark map background.

- **Source slug:** `contact-form-v15`
- **Source URL:** https://colorlib.com/wp/template/contact-form-v15/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v15/ (404 at
  time of implementation — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from screenshot)

- **Background:** dark map-style background (solid dark gray `#2c2c3a`)
- **Card:** white `#ffffff`, rounded corners (`rounded-lg`), shadow (`shadow-xl`)
- **Banner image:** full-width photo at card top, overlaid with white text
- **Heading text:** white `#ffffff`, bold, centered on banner
- **Subtitle text:** white/semi-transparent, centered below heading
- **Form labels:** dark gray `#333`, uppercase, small font
- **Input style:** bottom-border only (underline), no full border box
- **Input placeholder:** light gray `#999`
- **Submit button:** green `#4caf50` / `#66bb6a`, rounded-full, white text, arrow icon
- **Font family:** system sans-serif (matches screenshot clean look)

## Requirements

### Requirement: Page background

The page renders a dark background that fills the entire viewport.

#### Scenario: Dark background displayed

- **WHEN** I visit the Linewell page
- **THEN** the page background is a dark color (not white)

### Requirement: Centered card layout

A white card is centered on the page with rounded corners and a shadow.

#### Scenario: Card rendered

- **WHEN** I visit the Linewell page
- **THEN** I see a centered white card with rounded corners and shadow on the dark background

### Requirement: Banner header

The top of the card displays a banner image with the heading and subtitle overlaid.

#### Scenario: Heading displayed

- **WHEN** I visit the Linewell page
- **THEN** I see "Contact Us" as the main heading in the banner area

#### Scenario: Subtitle displayed

- **WHEN** I visit the Linewell page
- **THEN** I see "Feel free to drop us a line below!" as a subtitle below the heading

### Requirement: Contact form

The card contains a form with four fields and a submit button.

#### Scenario: Full Name field

- **WHEN** I visit the Linewell page
- **THEN** I see a "Full Name" input field

#### Scenario: Email field

- **WHEN** I visit the Linewell page
- **THEN** I see an "Email" input field

#### Scenario: Phone field

- **WHEN** I visit the Linewell page
- **THEN** I see a "Phone" input field

#### Scenario: Message textarea

- **WHEN** I visit the Linewell page
- **THEN** I see a "Message" textarea field

#### Scenario: Form inputs have underline style

- **WHEN** I visit the Linewell page
- **THEN** the input fields have a bottom-border underline style (no full border box)

#### Scenario: Submit button displayed

- **WHEN** I visit the Linewell page
- **THEN** I see a green "Submit" button with an arrow icon

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Linewell page
- **THEN** I see "More templates at Component Dock" with a link to https://www.componentdock.com/

### Requirement: Form interactivity

The form fields accept user input and the form submits without error.

#### Scenario: Typing in Full Name

- **WHEN** I type into the Full Name field
- **THEN** the field value updates to reflect my input

#### Scenario: Form submission

- **WHEN** I click the Submit button
- **THEN** the form submits without throwing an error

# Template: Formrise (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 07** — a single dark card with a form on
the left and contact information on the right, featuring an orange/amber
"Send Message" button and underline-style inputs on a dark background.

- **Source slug:** `contact-form-07`
- **Source URL:** https://colorlib.com/wp/template/contact-form-07/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-07/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page SHALL display a centered dark card on a light gray background with a page title above it.

#### Scenario: Page renders centered dark card

- **WHEN** I visit the Formrise page
- **THEN** I see a centered card with a dark background on a light gray page

#### Scenario: Page title displayed

- **WHEN** I visit the Formrise page
- **THEN** I see "Contact Form #07" as a centered heading above the card

### Requirement: Dark card structure

The card SHALL have two sections divided by a vertical divider.

#### Scenario: Card has form and info sections

- **WHEN** I visit the Formrise page
- **THEN** the card contains a form section on the left
- **AND** a contact information section on the right
- **AND** a vertical divider separates the two sections

### Requirement: Contact form

The form SHALL display all fields with underline styling and an orange submit button.

#### Scenario: Form displays all fields

- **WHEN** I visit the Formrise page
- **THEN** I see a Name input field
- **AND** I see an Email input field
- **AND** I see a Subject input field
- **AND** I see a Message textarea
- **AND** I see a Send Message button

#### Scenario: Inputs have underline style on dark background

- **WHEN** I visit the Formrise page
- **THEN** all form inputs have a bottom border only (underline style)
- **AND** the input borders are light colored against the dark background

#### Scenario: Send Message button is styled

- **WHEN** I visit the Formrise page
- **THEN** the Send Message button has an orange background and white text

### Requirement: Contact information

The info section SHALL display heading, subtext, and four contact items with icons.

#### Scenario: Info section displays heading and subtext

- **WHEN** I visit the Formrise page
- **THEN** I see "Contact information" heading on the right side of the card
- **AND** I see "We're open for any suggestion or just to have a chat" below the heading

#### Scenario: Info section displays contact items

- **WHEN** I visit the Formrise page
- **THEN** I see an address icon and text "198 West 21th Street, Suite 721 New York NY 10016"
- **AND** I see a phone icon and text "+ 1235 2355 98"
- **AND** I see an email icon and text "info@yoursite.com"
- **AND** I see a globe icon and text "yoursite.com"

### Requirement: Responsive behavior

The card sections SHALL stack vertically on mobile viewports.

#### Scenario: Sections stack on mobile

- **WHEN** I visit the Formrise page on a mobile viewport
- **THEN** the form and contact information sections stack vertically

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** I visit the Formrise page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

### Requirement: Design fidelity

The template SHALL match the original ColorLib design tokens.

#### Scenario: Dark card background

- **WHEN** I visit the Formrise page
- **THEN** the card has a dark charcoal background (#343A40)
- **AND** the card has rounded corners (~5px)

#### Scenario: Typography

- **WHEN** I visit the Formrise page
- **THEN** headings use Playfair Display serif font
- **AND** body text uses Poppins sans-serif font

#### Scenario: No ColorLib references

- **WHEN** I inspect the app source code
- **THEN** there are no references to "colorlib" in any app file

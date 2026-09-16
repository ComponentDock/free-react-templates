# Template: Contactly (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 02** — a two-column contact page with a
green/teal info panel on the left and a form with underline-style inputs on the
right.

- **Source slug:** `contact-form-02`
- **Source URL:** https://colorlib.com/wp/template/contact-form-02/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-02/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page renders a centered two-column card on a light gray background with a page title above it.

#### Scenario: Page title displayed

- **WHEN** I visit the Contactly page
- **THEN** the page title "Contact Form #02" is displayed centered above the card

#### Scenario: Two-column card rendered

- **WHEN** I visit the Contactly page
- **THEN** I see a centered card with two columns on a light gray background

### Requirement: Left column — contact info panel

The left column has a green background and contains contact information.

#### Scenario: Green info panel

- **WHEN** I visit the Contactly page
- **THEN** the left column has a green background

#### Scenario: Info panel heading

- **WHEN** I visit the Contactly page
- **THEN** the left column contains a "Let's get in touch" heading

#### Scenario: Info panel subtext

- **WHEN** I visit the Contactly page
- **THEN** I see "We're open for any suggestion or just to have a chat" below the heading

#### Scenario: Address displayed

- **WHEN** I visit the Contactly page
- **THEN** I see an address icon and text "198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Phone displayed

- **WHEN** I visit the Contactly page
- **THEN** I see a phone icon and text "+ 1235 2355 98"

#### Scenario: Email displayed

- **WHEN** I visit the Contactly page
- **THEN** I see an email icon and text "info@yoursite.com"

#### Scenario: Website displayed

- **WHEN** I visit the Contactly page
- **THEN** I see a globe icon and text "yoursite.com"

#### Scenario: Circular icon containers

- **WHEN** I visit the Contactly page
- **THEN** each contact info item has a circular white icon container

### Requirement: Contact form

The right column contains a form with underline-style inputs and a submit button.

#### Scenario: Form heading

- **WHEN** I visit the Contactly page
- **THEN** the right column contains a "Get in touch" heading

#### Scenario: All form fields present

- **WHEN** I visit the Contactly page
- **THEN** I see a Full Name input field, an Email Address input field, a Subject input field, a Message textarea, and a Send Message button

#### Scenario: Name and email side by side

- **WHEN** I visit the Contactly page
- **THEN** the Full Name and Email Address inputs are displayed in the same row

#### Scenario: Subject full width

- **WHEN** I visit the Contactly page
- **THEN** the Subject input spans the full width of the form

#### Scenario: Underline input style

- **WHEN** I visit the Contactly page
- **THEN** all form inputs have a bottom border only (underline style)

#### Scenario: Uppercase labels

- **WHEN** I visit the Contactly page
- **THEN** all form field labels are displayed in uppercase above their inputs

#### Scenario: Message textarea

- **WHEN** I visit the Contactly page
- **THEN** the Message textarea has a tall height suitable for multi-line input

#### Scenario: Send Message button

- **WHEN** I visit the Contactly page
- **THEN** the Send Message button has a green background and white text

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Contactly page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Design tokens

| Token            | Value                    | Notes                                    |
| ---------------- | ------------------------ | ---------------------------------------- |
| Brand green      | `#4ECDC4`                | Info panel background, button, accents   |
| Background       | `#F5F5F5`                | Page background (light gray)             |
| Card surface     | `#FFFFFF`                | Form panel background                    |
| Text primary     | `#333333`                | Headings, body copy                      |
| Text secondary   | `#999999`                | Input placeholders, lighter text         |
| Text on green    | `#FFFFFF`                | Text inside the info panel               |
| Label color      | `#555555`                | Uppercase field labels                   |
| Font — headings  | Playfair Display (serif) | "Let's get in touch", "Get in touch"     |
| Font — body      | Poppins (sans-serif)     | Labels, contact info, button             |
| Button radius    | 3px                      | Nearly rectangular, very slight rounding |
| Button bg        | Brand green              | Same as info panel                       |
| Button text      | White                    | —                                        |
| Info panel icons | White circles (bg)       | Circular icon containers on green bg     |
| Input style      | Underline (no border)    | Bottom border only, no full border/box   |
| Shadow on card   | None visible             | Flat card on gray bg                     |

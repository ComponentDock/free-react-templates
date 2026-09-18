# Template: Formcatch (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 03** — a contact page with a horizontal
info bar at the top (four items with circular teal icons) and a two-column card
below (form on left, image on right).

- **Source slug:** `contact-form-03`
- **Source URL:** https://colorlib.com/wp/template/contact-form-03/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-03/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page title rendering

The page SHALL display "Contact Form #03" centered at the top in a serif font.

#### Scenario: Title is visible

- **WHEN** I visit the Formcatch page
- **THEN** I see a heading "Contact Form #03" centered at the top of the page

### Requirement: Info bar with contact items

The page SHALL display a horizontal info bar with four contact items (Address,
Phone, Email, Website), each with a circular teal icon container.

#### Scenario: Info bar shows four items

- **WHEN** I visit the Formcatch page
- **THEN** I see a horizontal row of four contact items below the title

#### Scenario: Info bar items have circular teal icons

- **WHEN** I visit the Formcatch page
- **THEN** each info bar item has a circular teal icon container

#### Scenario: Info bar displays address

- **WHEN** I visit the Formcatch page
- **THEN** I see an address icon and text containing "198 West 21th Street"

#### Scenario: Info bar displays phone

- **WHEN** I visit the Formcatch page
- **THEN** I see a phone icon and text containing "+ 1235 2355 98"

#### Scenario: Info bar displays email

- **WHEN** I visit the Formcatch page
- **THEN** I see an email icon and text containing "info@yoursite.com"

#### Scenario: Info bar displays website

- **WHEN** I visit the Formcatch page
- **THEN** I see a globe icon and text containing "yoursite.com"

### Requirement: Two-column contact card

The page SHALL display a two-column card with a contact form on the left and a
placeholder image on the right.

#### Scenario: Card renders form and image

- **WHEN** I visit the Formcatch page
- **THEN** I see a centered card with a form on the left and an image on the right

#### Scenario: Right column displays image

- **WHEN** I visit the Formcatch page
- **THEN** the right column of the card displays a placeholder image

### Requirement: Contact form fields

The form SHALL display Full Name, Email Address, Subject, and Message fields
with a Send Message button.

#### Scenario: Form displays all fields

- **WHEN** I visit the Formcatch page
- **THEN** I see a Full Name input, Email Address input, Subject input, Message textarea, and Send Message button

#### Scenario: Full Name and Email are side by side

- **WHEN** I visit the Formcatch page
- **THEN** the Full Name and Email Address inputs are displayed in the same row on desktop

#### Scenario: Subject spans full width

- **WHEN** I visit the Formcatch page
- **THEN** the Subject input spans the full width of the form

### Requirement: Form input styling

All form inputs SHALL use underline style (bottom border only) with uppercase labels.

#### Scenario: Inputs have underline style

- **WHEN** I visit the Formcatch page
- **THEN** all form inputs have a bottom border only

#### Scenario: Labels are uppercase

- **WHEN** I visit the Formcatch page
- **THEN** all form field labels are displayed in uppercase

### Requirement: Send Message button styling

The Send Message button SHALL have a teal background with white text and slight border radius.

#### Scenario: Button is styled

- **WHEN** I visit the Formcatch page
- **THEN** the Send Message button has a teal background and white text

### Requirement: Footer with Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** I visit the Formcatch page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references "Component Dock"

### Requirement: Responsive behavior

The page SHALL be responsive: info bar wraps on mobile, card columns stack on mobile.

#### Scenario: Info bar wraps on mobile

- **WHEN** I visit the Formcatch page on a mobile viewport
- **THEN** the info bar items wrap to multiple rows

#### Scenario: Card columns stack on mobile

- **WHEN** I visit the Formcatch page on a mobile viewport
- **THEN** the form and image columns stack vertically

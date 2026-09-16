# Template: Formpost (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 06** — a clean, minimalist contact page
with a form + map two-column layout and a contact info row with circular icons
below.

- **Source slug:** `contact-form-06`
- **Source URL:** https://colorlib.com/wp/template/contact-form-06/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-06/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Extracted from the ColorLib Contact Form #06 screenshot (preview was 404).

| Token             | Value                              | Usage                                |
| ----------------- | ---------------------------------- | ------------------------------------ |
| `--brand`         | `#435eb5` (indigo-blue)            | Icon circles, button, accent         |
| `--brand-dark`    | `#2e3f80`                          | Button hover                         |
| `--bg-page`       | `#f8f9fa` (near-white gray)        | Page background                      |
| `--bg-card`       | `#ffffff`                          | Form card / map container            |
| `--text-heading`  | `#1a1a2e`                          | Page title                           |
| `--text-body`     | `#333333`                          | Labels, body text                    |
| `--text-muted`    | `#888888`                          | Placeholder text                     |
| `--border`        | `#e0e0e0`                          | Input borders                        |
| `--radius-btn`    | `4px`                              | Button border-radius                 |
| `--radius-icon`   | `50%`                              | Circular contact icons               |
| `--font-heading`  | `"Jost", sans-serif`               | Page heading                         |
| `--font-body`     | `"Jost", sans-serif`               | Labels, body, inputs                 |

## Requirements

### Requirement: Page title

The page renders a centered heading above the main content area.

#### Scenario: Title displayed

- **WHEN** I visit the Formpost page
- **THEN** the page title "Contact Form #06" is displayed centered at the top
- **AND** the title uses a large sans-serif font in dark color

### Requirement: Two-column contact section

Below the title, a two-column layout occupies the main content area: form on
the left, map on the right.

#### Scenario: Two-column layout rendered

- **WHEN** I visit the Formpost page
- **THEN** I see a centered container with two columns side by side
- **AND** the left column contains the contact form
- **AND** the right column contains an embedded map

### Requirement: Contact form (left column)

The left column displays a white card with a "Contact Us" heading and a
four-field form.

#### Scenario: Form card rendered

- **WHEN** I visit the Formpost page
- **THEN** the form card has a white background
- **AND** the heading "Contact Us" is displayed at the top of the card

#### Scenario: Form fields displayed

- **WHEN** I visit the Formpost page
- **THEN** I see the following form fields:
  - Full Name (text input, placeholder "Name")
  - Email Address (text input, placeholder "Email")
  - Subject (text input, placeholder "Subject")
  - Message (textarea, placeholder "Message")
- **AND** Full Name and Email Address are displayed side by side in the same row
- **AND** Subject spans the full width of the card
- **AND** Message textarea spans the full width and is taller than the other fields

#### Scenario: Form field labels

- **WHEN** I visit the Formpost page
- **THEN** each field has an uppercase label above it (FULL NAME, EMAIL ADDRESS,
  SUBJECT, MESSAGE)
- **AND** the labels use small uppercase text in dark color

#### Scenario: Send Message button

- **WHEN** I visit the Formpost page
- **THEN** a "Send Message" button is displayed below the Message field
- **AND** the button has a dark blue (indigo) background
- **AND** the button has white text
- **AND** the button has a slight border-radius (~4px)

### Requirement: Map (right column)

The right column displays an embedded map.

#### Scenario: Map displayed

- **WHEN** I visit the Formpost page
- **THEN** the right column shows a map (placeholder image or iframe)
- **AND** the map fills the entire right column height matching the form card

### Requirement: Contact info row

Below the two-column section, four contact info items are displayed in a row.

#### Scenario: Four contact items rendered

- **WHEN** I visit the Formpost page
- **THEN** I see four contact info items in a horizontal row below the main section
- **AND** each item has a circular blue icon above it
- **AND** the icons use the brand indigo-blue color as background with white icon
  inside

#### Scenario: Contact item — Address

- **WHEN** I look at the first contact info item
- **THEN** it shows a location pin icon
- **AND** the text reads "Address: 198 West 21th Street, Suite 721 New York NY 10016"

#### Scenario: Contact item — Phone

- **WHEN** I look at the second contact info item
- **THEN** it shows a phone icon
- **AND** the text reads "Phone: + 1235 2355 98"

#### Scenario: Contact item — Email

- **WHEN** I look at the third contact info item
- **THEN** it shows a paper plane / send icon
- **AND** the text reads "Email: info@yoursite.com"
- **AND** the email address is a blue link

#### Scenario: Contact item — Website

- **WHEN** I look at the fourth contact info item
- **THEN** it shows a globe icon
- **AND** the text reads "Website yoursite.com"
- **AND** the website is a blue link

### Requirement: Footer

The page has a footer linking to Component Dock.

#### Scenario: Footer rendered

- **WHEN** I visit the Formpost page
- **THEN** a footer is visible at the bottom of the page
- **AND** the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] Page title "Contact Form #06" centered at top
- [ ] Two-column layout: form (left) + map (right)
- [ ] Form card: white background, "Contact Us" heading
- [ ] Four fields: Full Name, Email Address, Subject, Message
- [ ] Full Name + Email side by side; Subject + Message full width
- [ ] Uppercase labels above each field
- [ ] "Send Message" button: dark blue background, white text, slight radius
- [ ] Right column: map placeholder filling column height
- [ ] Contact info row: 4 items with circular blue icons
- [ ] Address, Phone, Email, Website items with correct content
- [ ] Footer links to Component Dock
- [ ] Brand color used consistently for icons, button, and links
- [ ] Clean, minimal, professional aesthetic matching the screenshot

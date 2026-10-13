# Formpost — Contact Form 09 (ColorLib Contact Form 09)

Recreation of ColorLib "Contact Form 09"  
https://colorlib.com/wp/template/contact-form-09/  
Preview (screenshot fallback — preview unavailable):  
https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-09.jpg

## Purpose

Formpost is a contact form 09 with a contact info, contact form and footer. It recreates the ColorLib **Contact Form 09** design (https://colorlib.com/wp/template/contact-form-09/, preview: https://preview.colorlib.com/theme/bootstrap/contact-form-09/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (from screenshot analysis)

| Token          | Value            | Notes                             |
| -------------- | ---------------- | --------------------------------- |
| brand          | `#c4a56e`        | Gold/tan accent (icons, button)   |
| brand-dark     | `#b89a62`        | Slightly darker for hover         |
| bg-page        | `#191919`        | Near-black full-page background   |
| text-primary   | `#ffffff`        | White headings and body text      |
| text-secondary | `#aaaaaa`        | Lighter text for placeholders     |
| card-surface   | `#2a2a2a`        | Slightly lighter dark for form bg |
| input-border   | `#444444`        | Subtle dark border on inputs      |
| font-heading   | Playfair Display | Serif heading font                |
| font-body      | Poppins          | Sans-serif body font              |

## Section structure (from screenshot)

1. **PageTitle** — "Contact Form #09" heading, white, serif font, centered.
2. **ContactInfo** — Three circular gold icon badges in a row (map pin, phone, paper-plane/send), each with a label and value below (Address, Phone, Email).
3. **ContactForm** — "Get in touch with us" heading (white, serif), then form with 4 fields (Name, Email, Subject, Message textarea) + full-width gold "SEND MESSAGE" button.
4. **Footer** — "More templates at Component Dock" link.

All wrapped in a dark full-page container with single-column centered layout (max-w-4xl).

## Requirements

### PageTitle

#### Scenario: renders the page title

- **GIVEN** I visit the formpost page
- **THEN** I should see a heading "Contact Form #09"

### ContactInfo

#### Scenario: displays three contact items

- **GIVEN** I visit the formpost page
- **THEN** I should see "Address" with "198 West 21th Street, Suite 721 New York NY 10016"
- **AND** I should see "Phone" with "+ 1235 2355 98"
- **AND** I should see "Email" with "info@yoursite.com"

#### Scenario: renders accessible icons

- **GIVEN** I visit the formpost page
- **THEN** each contact icon should be hidden from screen readers

### ContactForm

#### Scenario: renders form fields

- **GIVEN** I visit the formpost page
- **THEN** I should see text inputs for "Name", "Email", and "Subject"
- **AND** I should see a textarea for "Message"
- **AND** I should see a "Send Message" button

#### Scenario: form accepts user input

- **GIVEN** I visit the formpost page
- **WHEN** I type "John" in the "Name" field
- **THEN** the "Name" field should contain "John"

#### Scenario: form submission is prevented

- **GIVEN** I visit the formpost page
- **WHEN** I click the "Send Message" button
- **THEN** the page should not navigate

### Footer

#### Scenario: renders Component Dock link

- **GIVEN** I visit the formpost page
- **THEN** I should see a link to "https://www.componentdock.com/" labeled "Component Dock"
- **AND** the link should open in a new tab

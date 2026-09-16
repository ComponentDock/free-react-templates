# Template: Formlink (Contact Form Template)

## Purpose

Formlink is a split-layout contact form page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
"Contact Form 06" website template design
(source: https://colorlib.com/wp/template/contact-form-06/), built under
a DIFFERENT name (Formlink) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Contact Form 06" — split-layout contact form
  with map, Bootstrap template.
- **Preview analyzed:** the official preview at
  `https://preview.colorlib.com/theme/bootstrap/contact-form-06/` returns
  HTML with a two-column Bootstrap grid layout.
- **Section order (from live preview DOM):**
  1. Centered heading: "Contact Form #06"
  2. Two-column wrapper card (border-radius 10px, box-shadow):
     - Left panel (col-md-7, white bg, padded):
       - "Contact Us" heading
       - Contact form: Full Name (half-width), Email Address (half-width),
         Subject (full-width), Message (full-width textarea),
         "Send Message" button
     - Right panel (col-md-5): full-height map placeholder image
  3. Info boxes row (4 columns, below the card):
     - Address (MapPin icon) + street address text
     - Phone (Phone icon) + phone number link (tel:)
     - Email (Send icon) + email link (mailto:)
     - Website (Globe icon) + website link
- **Design tokens extracted:**
  - Font: Roboto, sans-serif
  - Page background: #ffffff (white)
  - Brand accent: #5b8fa6 (teal/steel blue)
  - Text body: #333333, headings: #000000, muted: #777777
  - Card shadow: 0px 21px 41px -13px rgba(0,0,0,0.15)
  - Input borders: bottom-only, #dddddd
  - Button: rounded, brand-teal bg, white text

## Requirements

### Requirement: Page renders with title and layout

The application SHALL render a centered "Formlink — Contact Form" heading above a
split-layout contact card with white page background.

#### Scenario: App renders with page title

- **WHEN** the app is loaded
- **THEN** the heading "Formlink — Contact Form" is visible
- **AND** the page background is white

### Requirement: Two-column contact card

The application SHALL render a two-column card with white left panel (form) and
background map image right panel, wrapped in a shadow container with rounded
corners.

#### Scenario: Card structure renders correctly

- **WHEN** the app is loaded
- **THEN** the shadow card is rendered with rounded corners
- **AND** the "Contact Us" heading is visible
- **AND** the map placeholder image is rendered

### Requirement: Contact form with all fields

The application SHALL render a contact form with Full Name, Email Address,
Subject, Message fields and a Send Message submit button.

#### Scenario: All form fields exist

- **WHEN** the app is loaded
- **THEN** the Full Name, Email Address, Subject, and Message fields are present
- **AND** the "Send Message" button is visible

#### Scenario: User can type in form fields

- **WHEN** the user types "Alice" in the Full Name field
- **THEN** the Full Name field contains "Alice"

#### Scenario: Form submission is prevented

- **WHEN** the user clicks "Send Message"
- **THEN** the form does not navigate away

### Requirement: Info boxes display contact details

The application SHALL display four info boxes below the card with Address,
Phone, Email, and Website details, each with an icon.

#### Scenario: Info items are visible and linked

- **WHEN** the app is loaded
- **THEN** the address "198 West 21th Street" is visible
- **AND** the phone "+ 1235 2355 98" links to tel
- **AND** the email "info@yoursite.com" links to mailto
- **AND** the website "yoursite.com" is visible

#### Scenario: Info boxes have icons

- **WHEN** the app is loaded
- **THEN** four icon containers are rendered

### Requirement: Footer with Component Dock branding

The application SHALL render a footer linking to Component Dock.

#### Scenario: Footer renders with correct link

- **WHEN** the app is loaded
- **THEN** the footer contains "More templates at Component Dock"
- **AND** the link points to componentdock.com with target _blank

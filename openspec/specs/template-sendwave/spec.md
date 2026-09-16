# Template: Sendwave (Contact Form Template)

## Purpose

Sendwave is a two-column contact form page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
"Contact Form 05" website template design
(source: https://colorlib.com/wp/template/contact-form-05/), built under
a DIFFERENT name (Sendwave) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Contact Form V05" — contact form with social
  media and image, Bootstrap template.
- **Preview analyzed:** the official preview at
  `https://preview.colorlib.com/theme/bootstrap/contact-form-05/` returns
  HTML with a two-column Bootstrap grid layout.
- **Section order (from live preview DOM):**
  1. Centered heading: "Contact Form #05"
  2. Two-column wrapper card (border-radius 10px, box-shadow):
     - Left panel (white bg):
       - "Contact us" heading + subtitle
       - Three info boxes: Address, Email (mailto), Phone (tel)
       - Contact form: Name, Email, Subject, Message, Send Message button
       - Social section: "Follow us here" + Facebook, Twitter, Instagram, Dribbble
     - Right panel: full-height background image
- **Design tokens extracted:**
  - Font: Poppins, sans-serif
  - Page background: #f4f4f4
  - Brand accent: #e3b04b (amber/gold)
  - Text body: #666666, headings: #000
  - Card shadow: 0px 21px 41px -13px rgba(0,0,0,0.18)
  - Button shadow: 0px 10px 20px -6px rgba(0,0,0,0.12)
  - Input borders: bottom-only, rgba(0,0,0,0.1)

## Requirements

### Requirement: Page renders with title and layout

The application SHALL render a centered "Contact Form #05" heading above a
two-column contact card with light gray page background.

#### Scenario: App renders with page title

- **WHEN** the app is loaded
- **THEN** the heading "Contact Form #05" is visible
- **AND** the page background is light gray

### Requirement: Two-column contact card

The application SHALL render a two-column card with white left panel and
background image right panel, wrapped in a shadow container with rounded
corners.

#### Scenario: Card structure renders correctly

- **WHEN** the app is loaded
- **THEN** the shadow card is rendered with rounded corners
- **AND** the "Contact us" heading is visible
- **AND** the subtitle about suggestions is visible

### Requirement: Contact info displays address, email, phone

The application SHALL display address, email, and phone information with
uppercase labels and clickable links for email and phone.

#### Scenario: Info items are visible and linked

- **WHEN** the app is loaded
- **THEN** the address "198 West 21th Street" is visible
- **AND** the email "info@yoursite.com" links to mailto
- **AND** the phone "+ 1235 2355 98" links to tel

### Requirement: Contact form with all fields

The application SHALL render a contact form with Name, Email, Subject,
Message fields and a Send Message submit button.

#### Scenario: All form fields exist

- **WHEN** the app is loaded
- **THEN** the Name, Email, Subject, and Message fields are present
- **AND** the "Send Message" button is visible

#### Scenario: User can type in form fields

- **WHEN** the user types "John" in the Name field
- **THEN** the Name field contains "John"

#### Scenario: Form submission is prevented

- **WHEN** the user clicks "Send Message"
- **THEN** the form does not navigate away

### Requirement: Social media links

The application SHALL render a social media section with Facebook, Twitter,
Instagram, and Dribbble links in uppercase small text.

#### Scenario: Social links are rendered

- **WHEN** the app is loaded
- **THEN** Facebook, Twitter, Instagram, and Dribbble links exist
- **AND** they are uppercase and small text

### Requirement: Footer with Component Dock branding

The application SHALL render a footer linking to Component Dock.

#### Scenario: Footer renders with correct link

- **WHEN** the app is loaded
- **THEN** the footer contains "More templates at Component Dock"
- **AND** the link points to componentdock.com with target _blank

# Spec: Shotwise

## Purpose

Shotwise is a photographer/creative portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pemodule" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a photographer page with a purple gradient theme: a hero
banner ("YOUR BEST PARTNER", "Pemodule", "Get Started" CTA), a featured
section with text and image, a parallax call-to-action band, a 2x2 service
grid with image overlays, a contact form section, a newsletter subscription
area, and a dark footer with navigation, social icons, and copyright.
Shotwise recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Pemodule" — free photographer website template
  (source: https://colorlib.com/wp/template/pemodule/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/pemodule/`
  (HTTP 200, 15.7KB) + stylesheet `css/main.css` (2548 lines). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot confirms the visual
  design (purple gradient overlays, dark sections, Poppins font).
- **Design tokens extracted:**
  - Font: Poppins (`font-family: 'Poppins', sans-serif`)
  - Brand gradient: `#3224b0` (deep purple) to `#be5ede` (pink/purple)
  - Overlay background: gradient at 0.85 opacity
  - Primary button: transparent, white border, 20px border-radius, gradient hover
  - Dark sections: `#222222` (footer)
  - Light sections: `#f9f9ff` (newsletter, featured)
  - Body text: `#777777`
  - Headings: `#222222`
  - Accent green: `#6cbb23` (newsletter span)

## Requirements

### Requirement: Page loads with all sections in correct order

Shotwise SHALL render all sections in the order specified by the original
design: Header, Hero, Featured, Parallax, Services, Contact, Newsletter, Footer.

#### Scenario: All sections render on page load

- **WHEN** the Shotwise app is rendered
- **THEN** the page contains a header with logo and navigation
- **AND** a hero section with heading and CTA button
- **AND** a featured section with heading, paragraph, and CTA
- **AND** a parallax section with text content
- **AND** a services section with 4 service cards
- **AND** a contact section with a form
- **AND** a newsletter section with email input and subscribe button
- **AND** a footer with navigation links and Component Dock link

### Requirement: Navigation is accessible

The header SHALL provide navigation links that are keyboard-accessible.

#### Scenario: Desktop navigation links are present

- **WHEN** the Shotwise app is rendered
- **THEN** the navigation contains links for Home, About, Services, Contact
- **AND** all links are focusable

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu becomes visible
- **AND** the toggle button changes to a close icon

### Requirement: Contact form captures user input

The contact section SHALL provide a form with name, email, and message fields.

#### Scenario: Contact form fields are present

- **WHEN** the Shotwise app is rendered
- **THEN** the contact form has a name input, email input, and message textarea
- **AND** a send message button is present

### Requirement: Newsletter subscription form

The newsletter section SHALL provide an email subscription form.

#### Scenario: Newsletter form is present

- **WHEN** the Shotwise app is rendered
- **THEN** the newsletter section has an email input and a subscribe button

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ with the brand name
"Component Dock".

#### Scenario: Footer contains Component Dock link

- **WHEN** the Shotwise app is rendered
- **THEN** the footer contains a link to componentdock.com
- **AND** the link text reads "Component Dock"
- **AND** the link opens in a new tab

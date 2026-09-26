# Template: Lenscape (Personal Portfolio Template)

## Purpose

Lenscape is a personal portfolio/developer landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Schmidt" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-background portfolio page with a golden accent, hero
with portrait image, about section with counter stats, skills progress bars,
service cards, portfolio works grid, testimonials, contact form, and a dark
footer. Lenscape recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Schmidt" — free personal portfolio website template
  (source: https://colorlib.com/wp/template/schmidt/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/schmidt/`
  (HTTP 200). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`schmidt-free-template.jpg`) confirms the
  visual design (dark hero, golden accents, portrait image).
- **Section order (1:1):** Navbar → Hero → About → Services → Skills → Works → Testimonials → Contact → Footer.
- **Design tokens (from css/style.css):**
  - Primary accent: `#d5c455` (golden yellow — buttons, icons, highlights)
  - Dark background: `#222222` (navbar, footer)
  - Body text: `#222222`
  - Muted text: `#888888`
  - Light background: `#f8f8f8`
  - Font family: Poppins (sans-serif, weights 300–800)
  - Buttons: sharp corners, box-shadow, uppercase, letter-spacing
- **Colors mapped to Tailwind theme tokens in `src/index.css`.**

## Requirements

### Requirement: Navbar with navigation and mobile menu

Lenscape SHALL display a fixed dark navbar with the "Lenscape." logo (dot in
golden color) and navigation links: Home, About, Services, Skills, Works,
Contact. On mobile, a hamburger toggle opens/closes a vertical menu.

#### Scenario: Desktop navbar renders all links

- **GIVEN** the page is loaded on a desktop viewport
- **WHEN** the navbar is visible
- **THEN** it contains links for Home, About, Services, Skills, Works, Contact
- **AND** the logo "Lenscape." links to #home-section

#### Scenario: Mobile menu toggles

- **GIVEN** the page is loaded on a mobile viewport
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu opens with all navigation links
- **AND** the button label changes to "Close menu"

### Requirement: Hero section with portrait and CTAs

Lenscape SHALL display a full-viewport hero with a dark background image,
golden overlay on the right half (desktop), the heading "I'm Alex Mercer",
subheading "UI/UX Designer & Developer", and two CTA buttons.

#### Scenario: Hero renders main content

- **GIVEN** the page is loaded
- **WHEN** the hero section is visible
- **THEN** it shows the heading "I'm Alex Mercer"
- **AND** it shows the subheading "UI/UX Designer & Developer"
- **AND** it has "More About Me" and "Hire Me" buttons

### Requirement: About section with counter stats

Lenscape SHALL display an about section with counter stats (Years Experience,
Projects Completed, Clients, Awards Won) and descriptive text.

#### Scenario: About stats render correctly

- **GIVEN** the page is loaded
- **WHEN** the about section is visible
- **THEN** it shows stat values 12, 350, 200, 15 with their labels

### Requirement: Skills section with progress bars

Lenscape SHALL display a skills section with progress bars for UI/UX, Web
Development, Branding, Photography, Marketing, and SEO.

#### Scenario: Skills render with percentages

- **GIVEN** the page is loaded
- **WHEN** the skills section is visible
- **THEN** it shows all 6 skill names with their percentage values

### Requirement: Services section with cards

Lenscape SHALL display a services section with 6 service cards (UI/UX Design,
Web Development, Photography, Marketing, SEO, Branding) with icons.

#### Scenario: Services render all cards

- **GIVEN** the page is loaded
- **WHEN** the services section is visible
- **THEN** it shows 6 service cards with titles and descriptions

### Requirement: Works/Portfolio section

Lenscape SHALL display a works section with 6 portfolio items showing images
with hover overlays displaying title and category.

#### Scenario: Portfolio items render

- **GIVEN** the page is loaded
- **WHEN** the works section is visible
- **THEN** it shows 6 portfolio items with images and titles

### Requirement: Testimonials section

Lenscape SHALL display a testimonials section with 3 client testimonials
including avatar, name, role, and quote.

#### Scenario: Testimonials render

- **GIVEN** the page is loaded
- **WHEN** the testimonials section is visible
- **THEN** it shows 3 testimonials with names and quotes

### Requirement: Contact section with form

Lenscape SHALL display a contact section with contact info (address, phone,
email) and a form (name, email, subject, message, submit).

#### Scenario: Contact form submits successfully

- **GIVEN** the contact form is filled with valid data
- **WHEN** the user clicks "Send Message"
- **THEN** a "Thank you!" message is displayed

#### Scenario: Contact form validates required fields

- **GIVEN** the contact form has empty required fields
- **WHEN** the form is submitted
- **THEN** the form remains visible (submission blocked)

### Requirement: Footer with Component Dock link

Lenscape SHALL display a dark footer with copyright text and a "Component
Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **GIVEN** the page is loaded
- **WHEN** the footer is visible
- **THEN** it contains a link labeled "Component Dock" pointing to https://www.componentdock.com/

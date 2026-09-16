# Template: Shingle (Roofing Services Landing)

## Purpose

Shingle is a single-page roofing services template. It is an original React
recreation of the ColorLib free "Roofing" template
(preview: https://preview.colorlib.com/theme/roofing/ — roofing company landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand gold `#d9ba2b` (accent, buttons, highlights)
- Primary blue `#007bff` (secondary CTA)
- Typeface: Poppins (Google Fonts via `<link>`)
- White content areas, light gray `#f8f9fa` section backgrounds
- Dark overlay `#000000` at 40% on hero
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Shingle lives in `apps/shingle` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Top bar

The system SHALL render a gold top bar with the logo "Shingle" and social media
icon links (Facebook, Twitter, Instagram, LinkedIn).

#### Scenario: Logo rendering

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show the logo text "Shingle" linking to `#home`

#### Scenario: Social media links

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show social media icon links for Facebook, Twitter, Instagram, and LinkedIn

### Requirement: Navigation bar

The system SHALL render a sticky white navbar with links: Home, About, Services,
Projects, Blog, Contact, and a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links to Home, About, Services, Projects, Blog, and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu SHALL expand
- **AND** clicking a link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, dark overlay,
subtitle, heading, and a gold outlined CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the subtitle "We Are Best Roofing Services"
- **AND** it SHALL show a heading about quality roofing services
- **AND** it SHALL show a "Book an Appointment" CTA linking to `#appointment`

### Requirement: Appointment section

The system SHALL render a two-column section with an about area (tabs for
Mission/Vision/Value) and a "Get a Quote" form.

#### Scenario: About tabs

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show tabs for Our Mission, Our Vision, and Our Value
- **AND** clicking a tab SHALL switch the displayed content

#### Scenario: Quote form

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show a form with service select, name, email, date, time, message fields
- **AND** it SHALL show a "Send Message" submit button

### Requirement: Counter section

The system SHALL display statistics: Happy Clients, Business Partners, Done
Projects, and Awards Won with numeric values.

#### Scenario: Stats display

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show all four stat labels and values

### Requirement: Services section

The system SHALL render 6 service cards: Skylights, Waterproofing, Industrial
Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show all 6 service cards with title, description, and "Get Started" link

### Requirement: Gallery section

The system SHALL render a responsive grid of 8 project images.

#### Scenario: Project images

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show 8 images with alt text

### Requirement: Testimonials section

The system SHALL render 3 testimonial cards with client quotes.

#### Scenario: Testimonial display

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show 3 cards with client names and quotes

### Requirement: Blog section

The system SHALL render 3 blog post cards with image, date, author, title, and
"Read more" link.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 3 blog post cards

### Requirement: Footer

The system SHALL render a multi-column footer with brand, services list, business
hours, and contact information. It MUST link to componentdock.com.

#### Scenario: Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Contact info

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show address, phone, and email contact information

### Requirement: App composition

The system SHALL compose all sections within a `<main>` landmark.

#### Scenario: Document title

- **GIVEN** the page is rendered
- **WHEN** the app loads
- **THEN** the document title SHALL be "Shingle — Roofing Services Template"

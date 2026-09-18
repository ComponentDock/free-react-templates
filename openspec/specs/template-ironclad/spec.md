# Template: Ironclad (Construction Company)

## Purpose

Recreation of ColorLib **Wilcon** — a construction company website template with hero section, features strip, about section, CTA bar, services, stats/counter, project gallery, testimonials, and footer.

- **Source slug:** `wilcon`
- **Preview URL:** https://preview.colorlib.com/theme/wilcon/
- **Original:** https://colorlib.com/wp/template/wilcon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/wilcon-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token            | Value                          | Notes                          |
| ---------------- | ------------------------------ | ------------------------------ |
| Font family      | `'Roboto', sans-serif`         | Google Font, weights 300–900   |
| Primary accent   | `#82ae46` (construction green) | CTAs, buttons, brand elements  |
| Secondary accent | `#f8b732` (golden yellow)      | Secondary highlights           |
| Dark bg          | `#1b1b1b` (near-black)         | Navbar, testimonial bg, footer |
| Body text        | `#7d8494` (medium gray)        | Paragraph copy                 |
| Heading text     | `#1b1b1b` (near-black)         | Section headings               |
| Button radius    | `4px` (slight rounding)        | Standard buttons               |

## Requirements

### Requirement: Hero section displays construction company heading

The hero section SHALL display the heading "We Build Great Projects" with a background image, description text, and two CTA buttons ("Our Services" and "Request A Quote").

#### Scenario: Hero renders heading and CTAs

- **WHEN** the page loads
- **THEN** the heading "We Build Great Projects" is displayed
- **AND** an "Our Services" button is present
- **AND** a "Request A Quote" button is present

### Requirement: Features strip shows three service highlights

The features strip SHALL display three feature items with icons, titles, and descriptions.

#### Scenario: Features strip renders three items

- **WHEN** the page loads
- **THEN** "Quality Construction", "Professional Liability", and "Dedicated To Our Clients" are displayed

### Requirement: About section displays company information

The about section SHALL display a welcome heading, company description, and video play button.

#### Scenario: About section renders company info

- **WHEN** the about section is visible
- **THEN** "Welcome to Ironclad" heading is displayed
- **AND** "Ironclad A Construction Company" heading is displayed

### Requirement: CTA bar shows services heading and quote button

The CTA bar SHALL display "Providing Personalized and High Quality Services" with a "Request A Quote" button.

#### Scenario: CTA bar renders heading and button

- **WHEN** the CTA bar is rendered
- **THEN** the heading "Providing Personalized and High Quality Services" is displayed
- **AND** a "Request A Quote" link is present

### Requirement: Services section shows three service cards

The services section SHALL display three service cards (Architecture, Renovation, Construction) with images, icons, titles, descriptions, and "Read more" links.

#### Scenario: Services section renders three cards

- **WHEN** the services section is rendered
- **THEN** "Architecture", "Renovation", and "Construction" cards are shown
- **AND** each card has a "Read more" link

### Requirement: Stats section displays project and customer counters

The stats section SHALL display 48,000 projects completed and 54,900 happy customers with the heading "Best Provider for Industrial Services".

#### Scenario: Stats section renders counters

- **WHEN** the stats section is rendered
- **THEN** "48,000" and "Project Completed" are displayed
- **AND** "54,900" and "Happy Customers" are displayed
- **AND** the heading "Best Provider for Industrial Services" is shown

### Requirement: Projects section shows six project cards

The projects section SHALL display six project cards with images, category, title, and location.

#### Scenario: Projects section renders six cards

- **WHEN** the projects section is rendered
- **THEN** the heading "Latest Projects" is displayed
- **AND** six project cards are shown

### Requirement: Testimonials section shows quotes with navigation

The testimonials section SHALL display testimonial quotes with previous/next navigation buttons.

#### Scenario: Testimonials renders quotes and navigation

- **WHEN** the testimonials section is rendered
- **THEN** a testimonial quote is displayed
- **AND** previous/next navigation buttons are present

#### Scenario: Testimonials navigation wraps around

- **WHEN** the user clicks next on the last testimonial
- **THEN** the first testimonial is shown
- **WHEN** the user clicks previous on the first testimonial
- **THEN** the last testimonial is shown

### Requirement: Footer displays navigation, contact, and newsletter

The footer SHALL display quick links, service links, contact information, a newsletter form, and a link to componentdock.com.

#### Scenario: Footer renders all sections

- **WHEN** the footer is rendered
- **THEN** navigation links are displayed
- **AND** contact information is shown
- **AND** a newsletter form with email input is present

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is rendered
- **THEN** a link to "https://www.componentdock.com/" is present with text "Component Dock"

### Requirement: Navbar displays navigation with mobile toggle

The navbar SHALL display the brand name, navigation links, and an "Inquire Now" CTA button with a mobile hamburger toggle.

#### Scenario: Navbar renders navigation links

- **WHEN** the navbar is rendered
- **THEN** Home, About, Services, Projects, Blog, and Contact links are visible

#### Scenario: Navbar mobile menu toggles

- **WHEN** the mobile toggle button is clicked
- **THEN** the mobile menu opens
- **AND** clicking a link closes the mobile menu

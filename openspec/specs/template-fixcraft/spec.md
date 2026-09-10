# Template: Fixcraft (Auto Repair Services)

## Purpose

Fixcraft is a single-page auto repair services landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Autorepair" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. "Fixcraft" is the new name (the ColorLib source name
"Autorepair" is never reused).

- **Source:** https://colorlib.com/wp/template/autorepair/
- **Preview:** https://preview.colorlib.com/theme/autorepair/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design reference (replication findings)

- **Section order (1:1):**
  1. Top Bar (dark #171a1d bg): phone, hours, social icons — left-aligned layout
  2. Navbar (dark bg, navbar-dark): logo + nav links (Home, About, Services, Pricing, Blog, Contact) + search icon + appointment CTA
  3. Hero Slider (bg images + black overlay): 2 slides — "Make your car last longer" + "It's time to come to repair your car" — white Poppins text, CTA buttons
  4. Intro (white bg, "We care about your car"): icon + text blocks with phone CTA and stats
  5. Services (white bg): "Our car services" heading, 3-column grid with 6 service cards (Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, Car Maintenance)
  6. Counter (dark bg with bg image): "45+ years serving customer" heading, 4 stat counters
  7. Appointment/CTA (bg image section): "Free Consultation" heading, appointment form (name, date, time, phone, message)
  8. Testimonials (bg-light): "Happy Clients & Feedbacks" heading, client testimonials
  9. Blog (white bg): "Latest news from our blog" heading, 3 blog cards
  10. Pricing (bg-light): "Pricing" heading, pricing cards
  11. Footer (dark #16181b bg): 4 widgets — Services list, Done Projects, Contact info, Business Hours; social icons, copyright with "Component Dock" link

- **Design tokens:**
  - Brand primary: #007bff (Bootstrap blue)
  - Primary hover: #0069d9
  - Font: "Poppins" via Google Fonts
  - Dark bg: #171a1d / #1a1a1a
  - Body text: #333333 / #4d4d4d
  - Muted text: #6c757d
  - Light bg: #f8f9fa
  - Button radius: 0.25rem

## Requirements

### Requirement: Top bar

The system SHALL render a dark top bar with contact information.

#### Scenario: Top bar content

- **GIVEN** the user visits the page
- **WHEN** the top bar renders
- **THEN** the bar SHALL display a phone number and business hours
- **AND** the bar SHALL have a dark background (#171a1d)

### Requirement: Navigation bar

The system SHALL render a navigation bar with logo, nav links, and appointment CTA.

#### Scenario: Navbar content

- **GIVEN** the user views the navbar
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Fixcraft"
- **AND** nav links SHALL include Home, About, Services, Pricing, Blog, Contact
- **AND** an appointment CTA button SHALL be visible
- **AND** a search icon SHALL be visible

#### Scenario: Mobile menu

- **GIVEN** the user is on a mobile viewport
- **WHEN** the hamburger menu is tapped
- **THEN** a mobile menu SHALL open with the same nav links
- **AND** clicking a link SHALL close the menu

### Requirement: Hero slider

The system SHALL render a hero carousel with two slides.

#### Scenario: Hero content

- **GIVEN** the user views the hero section
- **WHEN** the page loads
- **THEN** the first slide SHALL display "Make your car last longer"
- **AND** the second slide SHALL display "It's time to come to repair your car"
- **AND** each slide SHALL have a CTA button

#### Scenario: Hero auto-advance

- **GIVEN** the hero slider is displayed
- **WHEN** 6 seconds elapse
- **THEN** the slider SHALL advance to the next slide

### Requirement: Intro section

The system SHALL render an intro section with "We care about your car".

#### Scenario: Intro content

- **GIVEN** the user scrolls to the intro section
- **WHEN** the section is visible
- **THEN** the heading SHALL contain "We care about your car"
- **AND** a phone CTA SHALL be visible

### Requirement: Services section

The system SHALL render a services grid with 6 service cards.

#### Scenario: Services content

- **GIVEN** the user scrolls to the services section
- **WHEN** the section is visible
- **THEN** "Our car services" heading SHALL appear
- **AND** a 3-column grid SHALL show 6 service cards (Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, Car Maintenance)

### Requirement: Counter section

The system SHALL render a counter section with 4 statistics.

#### Scenario: Counter content

- **GIVEN** the user scrolls to the counter section
- **WHEN** the section is visible
- **THEN** it SHALL show counters for years, projects, staff, and happy clients
- **AND** the section SHALL have a dark background image

### Requirement: Appointment form

The system SHALL render an appointment booking form.

#### Scenario: Form fields

- **GIVEN** the user scrolls to the appointment section
- **WHEN** the section is visible
- **THEN** "Free Consultation" heading SHALL appear
- **AND** the form SHALL contain name, phone, date, time, and message fields

#### Scenario: Form submission

- **GIVEN** the form is filled with valid data
- **WHEN** the user submits the form
- **THEN** a confirmation message SHALL appear

### Requirement: Testimonials section

The system SHALL render a testimonials carousel.

#### Scenario: Testimonials content

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section is visible
- **THEN** "Happy Clients & Feedbacks" heading SHALL appear
- **AND** client testimonials with name, role, and quote SHALL be displayed

### Requirement: Blog section

The system SHALL render a blog section with 3 blog cards.

#### Scenario: Blog content

- **GIVEN** the user scrolls to the blog section
- **WHEN** the section is visible
- **THEN** "Latest news from our blog" heading SHALL appear
- **AND** 3 blog cards SHALL be shown

### Requirement: Pricing section

The system SHALL render a pricing section with 4 pricing tiers.

#### Scenario: Pricing content

- **GIVEN** the user scrolls to the pricing section
- **WHEN** the section is visible
- **THEN** "Pricing" heading SHALL appear
- **AND** pricing cards with tier names and prices SHALL be displayed

### Requirement: Footer

The system SHALL render a dark footer with 4 widget columns.

#### Scenario: Footer content

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer loads
- **THEN** it SHALL show Services, Contact, and Business Hours widgets
- **AND** a copyright line with "Component Dock" link SHALL be present

### Requirement: No ColorLib references

The app code SHALL NOT contain any references to ColorLib.

#### Scenario: Provenance isolation

- **GIVEN** any source file in apps/fixcraft
- **WHEN** the file is inspected
- **THEN** it SHALL NOT contain the string "colorlib" (case-insensitive)

# Squadly — Heavy Equipment Rental Landing Template

Recreation of ColorLib **Equipo** (https://colorlib.com/wp/template/equipo/).

## Purpose

Squadly is a heavy equipment rental landing page template featuring a hero, features/services section, about with stats, testimonials, blog, and a branded footer. It recreates the ColorLib Equipo design under a different name using React 19 + Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: TopBar displays contact information

The template SHALL display a top bar with a phone number and physical address.

#### Scenario: Phone number is visible

- **WHEN** the page loads
- **THEN** the text "Free Call" and "+1 234 456 78910" are visible

#### Scenario: Address is visible

- **WHEN** the page loads
- **THEN** the text "198 West 21th Street" is visible

### Requirement: Navbar provides site navigation

The navbar SHALL show the site name, navigation links, and a CTA button, with a mobile hamburger menu.

#### Scenario: Desktop navigation links

- **WHEN** the page loads on desktop
- **THEN** links for Home, About, Services, Blog, Contact, and "Request A Quote" are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the "Open menu" button on mobile
- **THEN** the mobile navigation menu opens with all links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a link is clicked
- **THEN** the mobile menu closes

### Requirement: Hero section displays headline and CTAs

The hero section SHALL show a background image, heading text, and two CTA buttons.

#### Scenario: Hero heading and buttons

- **WHEN** the page loads
- **THEN** the heading "Lease The Right Equipment For Your Job" is visible
- **AND** "Contact us" and "Request A Quote" buttons are present

### Requirement: Features section shows services and quote form

The features section SHALL display 4 feature items and a quote request form.

#### Scenario: Four features are shown

- **WHEN** the page loads
- **THEN** "24/7 Customer Service", "Prompt Delivery", "Reliable Equipment", and "New Heavy Equipment" headings are visible

#### Scenario: Quote form fields

- **WHEN** the page loads
- **THEN** the form contains First Name, Last Name, Phone, Service select, Message, and Submit Request button

### Requirement: About section shows company stats

The about section SHALL display a welcome message and 4 statistical counters.

#### Scenario: Stats are displayed

- **WHEN** the page loads
- **THEN** the values 50, 4,500, 300, and 300 are visible with labels "Years of Experience", "Customers Served", "Number of Equipment", "Number of Staff"

### Requirement: CTA banner promotes the company

The CTA banner SHALL display a heading and appointment button.

#### Scenario: CTA content

- **WHEN** the page loads
- **THEN** "We Are Squadly" heading and "Make An Appointment" button are visible

### Requirement: Services section shows equipment cards

The services section SHALL display 4 equipment service cards.

#### Scenario: Service cards

- **WHEN** the page loads
- **THEN** cards for Bulldozer, Forklift, Crane, and Excavator are visible

### Requirement: Testimonials section shows customer reviews

The testimonials section SHALL display customer testimonial cards.

#### Scenario: Testimonials

- **WHEN** the page loads
- **THEN** at least 3 testimonial cards with names are visible

### Requirement: Blog section shows recent posts

The blog section SHALL display blog post cards with read more links.

#### Scenario: Blog posts

- **WHEN** the page loads
- **THEN** 3 blog post cards with "Read more" links are visible

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock attribution

- **WHEN** the page loads
- **THEN** a link with text "Component Dock" points to https://www.componentdock.com/ with target="_blank"

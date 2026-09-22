# template-kinectwell

Recreation of ColorLib "Physical Therapy" (https://colorlib.com/wp/template/physical-therapy/).

**Preview note:** The ColorLib preview at `https://preview.colorlib.com/theme/physical-therapy/` returned 404 at implementation time. Design was reconstructed from the listing page description and screenshot.

## Purpose

Kinectwell is a professional physical therapy and rehabilitation landing page template. It provides a single-page marketing site for physiotherapy clinics, chiropractors, and massage therapy practices with sections for navigation, hero, about, services, why-choose-us, appointment CTA, testimonials, and footer.

## Requirements

### Requirement: Navigation

The template SHALL render a sticky header with the site logo, navigation links (Home, About, Services, Pages, Blog, Contact), a phone number link, and an appointment CTA button.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the header displays the site name "Kinectwell" with a logo badge
- **AND** all six navigation links are visible
- **AND** the phone number "+1 (555) 123-4567" is displayed
- **AND** the "Make an appointment" button links to #appointment

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation panel opens with all nav links
- **AND** the button label changes to "Close menu"
- **WHEN** the user clicks "Close menu"
- **THEN** the mobile navigation panel closes

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL render a hero section with an eyebrow text, headline, description paragraph, CTA button, and hero image.

#### Scenario: Hero content renders correctly

- **WHEN** the page loads
- **THEN** the hero displays the eyebrow "Welcome to Kinectwell"
- **AND** the headline "We Help People to Recover from Injuries" is shown
- **AND** the CTA button links to #appointment

### Requirement: About Section

The template SHALL render an about section with a heading, description, feature checklist, learn-more button, and an image.

#### Scenario: About content renders correctly

- **WHEN** the page loads
- **THEN** the heading "About Us" is displayed
- **AND** three feature items are listed with check icons
- **AND** the "Learn More" button links to #services

### Requirement: Services Section

The template SHALL render a services section with three service cards (Physical Therapy, Chiropractic Therapy, Massage Therapy), each with an icon, title, and description.

#### Scenario: Service cards render correctly

- **WHEN** the page loads
- **THEN** the heading "Our Services" is displayed
- **AND** three service cards are rendered with titles and descriptions
- **AND** each card has an icon in a circular background

### Requirement: Why Choose Us Section

The template SHALL render a why-choose-us section with four feature items (Professional Staff, Certified Equipment, Emergency Services, Opening Hours).

#### Scenario: Why Choose Us content renders correctly

- **WHEN** the page loads
- **THEN** the heading "Why Choose Us" is displayed
- **AND** four feature items are rendered with icons, titles, and descriptions

### Requirement: Appointment CTA

The template SHALL render a full-width green appointment call-to-action section with a headline, description, and button.

#### Scenario: Appointment CTA renders correctly

- **WHEN** the page loads
- **THEN** the heading "Book Your Appointment Today" is displayed on a green background
- **AND** the "Book Appointment" button links to #contact

### Requirement: Testimonials Section

The template SHALL render a testimonials section with three patient testimonial cards, each containing a quote, patient name, role, and avatar image.

#### Scenario: Testimonials render correctly

- **WHEN** the page loads
- **THEN** the heading "What Our Patients Say" is displayed
- **AND** three testimonial cards are rendered with quotes, names, and avatar images

### Requirement: Footer

The template SHALL render a footer with the site logo and about blurb, Quick Links navigation, Services navigation, copyright notice, and a link to Component Dock.

#### Scenario: Footer content renders correctly

- **WHEN** the page loads
- **THEN** the footer displays the site name "Kinectwell"
- **AND** Quick Links (About, Services, Appointments, Contact) are listed
- **AND** Services links (Physical Therapy, Chiropractic, Massage Therapy, Rehabilitation) are listed
- **AND** the copyright "© 2026 Kinectwell. All rights reserved." is shown
- **AND** "More templates at Component Dock" links to https://www.componentdock.com/

### Requirement: Skip Link Accessibility

The template SHALL include a skip-to-main-content link for keyboard accessibility.

#### Scenario: Skip link is present

- **WHEN** the page loads
- **THEN** a "Skip to main content" link targeting #main exists in the DOM

### Requirement: Document Title

The template SHALL set the page title on mount.

#### Scenario: Title is set on load

- **WHEN** the page loads
- **THEN** the document title is "Kinectwell — Physical Therapy Template"

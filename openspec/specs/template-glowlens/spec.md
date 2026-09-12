# Glowlens — Photography Portfolio Template

Recreation of ColorLib "Halo" (https://colorlib.com/wp/template/halo/).

## Purpose

Provide a photography portfolio single-page template with hero, intro, portfolio grid, milestones, services, contact form, and footer sections.

## Requirements

### Requirement: Navigation

Users SHALL see a sticky header with logo "GLOWLENS", navigation links, and search/hamburger controls.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the header shows the logo, nav links (Home, About, Services, Portfolio, Contact), and a search icon

#### Scenario: Mobile navigation

- **WHEN** the page loads on a mobile viewport
- **THEN** a hamburger icon is visible
- **WHEN** the user taps the hamburger
- **THEN** a full-screen mobile menu opens with all nav links
- **WHEN** the user taps close
- **THEN** the mobile menu closes

### Requirement: Hero section

Users SHALL see a full-width hero with background image, title "Glowlens", and subtitle text.

#### Scenario: Hero renders

- **WHEN** the page loads
- **THEN** a hero section displays with the title "Glowlens" and subtitle "We Create Awesome Photographies and more"

### Requirement: Intro section

Users SHALL see a two-column intro with text on the left and an image on the right.

#### Scenario: Intro renders

- **WHEN** the user scrolls to the intro section
- **THEN** the subtitle "Amazing Studio", heading "We Are So Creative", a paragraph, and a "Read More" button are visible
- **AND** an image is displayed on the right

### Requirement: Portfolio grid

Users SHALL see a 7-item portfolio grid with hover overlays.

#### Scenario: Portfolio items render

- **WHEN** the user scrolls to the portfolio section
- **THEN** 7 portfolio items are displayed in a grid
- **AND** each item shows a title and category on hover

### Requirement: Milestones section

Users SHALL see 4 milestone stat boxes with icons and numbers.

#### Scenario: Milestones render

- **WHEN** the user scrolls to the milestones section
- **THEN** 4 stat boxes are visible: 48 Projects, 7 Awards, 23K Photos, 19 Tutorials

### Requirement: Services section

Users SHALL see a services section with descriptive text and 4 service cards.

#### Scenario: Services render

- **WHEN** the user scrolls to the services section
- **THEN** the subtitle "Amazing Studio", heading "See What We Offer", paragraph, and "Read More" button are visible
- **AND** 4 service cards are displayed: Video Footages, Photo Shootings, Photo Albums, Original Ideas

### Requirement: Contact section

Users SHALL see a contact section with contact information and a form.

#### Scenario: Contact form renders

- **WHEN** the user scrolls to the contact section
- **THEN** contact info (phone, email, address) is visible
- **AND** a form with name, email, subject, message fields and a "Send" button is displayed

### Requirement: Footer

Users SHALL see a footer with CTA, social links, and Component Dock attribution.

#### Scenario: Footer renders

- **WHEN** the user scrolls to the footer
- **THEN** "Let's Work Together!" heading and email are visible
- **AND** social media icons are displayed
- **AND** a link to "Component Dock" (https://www.componentdock.com/) is present

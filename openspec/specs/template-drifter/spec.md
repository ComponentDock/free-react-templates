# Spec: Drifter

Recreation of ColorLib "Ronin" — a personal portfolio / freelancer landing page.

## Purpose

Build a personal portfolio landing page for a freelancer/designer, showcasing services, work samples, testimonials, and blog posts. The design follows the ColorLib "Ronin" template layout with a dark hero banner, skill bars, service cards, portfolio grid with filtering, and a dark footer.

## Requirements

### Requirement: Navbar with responsive mobile menu

The template SHALL render a fixed top navigation bar with logo and links for Home, About, Services, Portfolio, Blog, Contact. On mobile, a hamburger menu toggles the nav links.

#### Scenario: Desktop nav renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** I shall see the "Drifter" logo and links for Home, About, Services, Portfolio, Blog, Contact

#### Scenario: Mobile menu toggles on button click

- **WHEN** I click the hamburger menu button on mobile
- **THEN** the navigation links shall be displayed and the button icon shall change to a close icon

### Requirement: Hero banner with background image

The template SHALL render a full-width hero section with a background image overlay, heading "This is me", name, description, and a "Discover Now" CTA button linking to the about section.

#### Scenario: Hero displays heading and CTA

- **WHEN** the hero section is visible
- **THEN** I shall see "This is me", "Alex Morgan", and a "Discover Now" button

### Requirement: About section with stats and skill bars

The template SHALL render an "About Myself" section with descriptive text, 3 stat cards (Total Projects, Happy Clients, Cups of Coffee), and 6 tool expertness progress bars with percentage labels.

#### Scenario: About section shows stats

- **WHEN** the about section is visible
- **THEN** I shall see stat cards with values $2.5M, 1,465, and 3,965

#### Scenario: About section shows skill bars

- **WHEN** the about section is visible
- **THEN** I shall see 6 skill bars with labels and percentages

### Requirement: Services section with 3 service cards

The template SHALL render an "Offerings to My Clients" section with 3 service cards (Architecture, Interior Design, Concept Design), each with an icon, title, and description.

#### Scenario: Services shows 3 cards

- **WHEN** the services section is visible
- **THEN** I shall see Architecture, Interior Design, and Concept Design cards

### Requirement: Portfolio section with filter tabs and project grid

The template SHALL render an "Our Recent Completed Projects" section with filter tabs (All, Branding, Creative, Web Design) and a 6-item image grid that filters by selected category.

#### Scenario: Portfolio shows all projects by default

- **WHEN** the portfolio section loads
- **THEN** I shall see 6 project items

#### Scenario: Portfolio filters by category

- **WHEN** I click the "Branding" filter tab
- **THEN** only branding projects shall be shown

### Requirement: Testimonials section

The template SHALL render a testimonials section with 3 testimonial cards, each containing a quote, author name, and role.

#### Scenario: Testimonials renders quotes

- **WHEN** the testimonials section is visible
- **THEN** I shall see 3 testimonial quotes with author names

### Requirement: Blog section with 3 post cards

The template SHALL render a "Latest Posts from Blog" section with 3 blog post cards, each showing an image, date, title, excerpt, and "Read More" link.

#### Scenario: Blog section shows 3 posts

- **WHEN** the blog section is visible
- **THEN** I shall see 3 blog post cards with titles and Read More links

### Requirement: Footer with Component Dock link

The template SHALL render a dark footer with About Me text, Newsletter signup form, social media links, and a copyright line linking to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** I shall see a link to componentdock.com branded as "Component Dock"

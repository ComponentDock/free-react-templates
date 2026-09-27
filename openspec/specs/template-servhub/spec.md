# Servhub — Digital Services Template

## Purpose

Recreate the ColorLib "Services" template (https://colorlib.com/wp/template/services/) as a production-ready React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Servhub". The original is a multi-section business services agency site with hero, about, services grid, project gallery, testimonials carousel, blog posts, contact form, and footer.

## Requirements

### Requirement: Navbar with brand and navigation links

The template SHALL display a sticky header with the brand name "Servhub" on the left and navigation links (Home, About, Services, Projects, Blog, Contact) on the right. On mobile, a hamburger menu toggle SHALL show/hide the nav links.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the brand name "Servhub" and all 6 navigation links are visible

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation panel opens with all 6 links
- **WHEN** the user clicks the button again
- **THEN** the mobile navigation panel closes

### Requirement: Hero section with background image and CTA

The template SHALL display a full-width hero section with a background image, dark overlay, heading "We Are Digital Services", descriptive text, and a "Our Services" CTA button that scrolls to the services section.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the heading "We Are Digital Services" is visible
- **AND** a "Our Services" button links to the services section

### Requirement: About Us section with three-column layout

The template SHALL display an "About Us" section with three columns: left text, center image, right text.

#### Scenario: About section renders content

- **WHEN** the page loads
- **THEN** the "About Us" heading and an image are visible

### Requirement: Services section with 2x3 grid of service cards

The template SHALL display a "Services" section with 6 service cards in a 2-column grid, each with an icon, title, and description.

#### Scenario: All 6 services render

- **WHEN** the page loads
- **THEN** 6 service cards are visible with titles: Content Marketing, Social Media Marketing, Brand & Logo Design, Social Media Advertising, Email Marketing, Web Design & Development

### Requirement: Projects section with filterable gallery

The template SHALL display a "Projects" section with filter buttons (All, Web, Design, Brand) and a grid of portfolio images. Clicking a filter button SHALL show only projects in that category.

#### Scenario: Filter projects by category

- **WHEN** the user clicks the "Web" filter button
- **THEN** only Web-category projects are displayed
- **WHEN** the user clicks "All"
- **THEN** all projects are displayed again

### Requirement: Testimonials section with carousel

The template SHALL display a testimonials section with a lime-green background, showing one testimonial at a time with navigation arrows.

#### Scenario: Navigate testimonials

- **WHEN** the user clicks the next arrow
- **THEN** the next testimonial is displayed
- **WHEN** the user clicks the previous arrow
- **THEN** the previous testimonial is displayed

### Requirement: Blog section with 3-column card layout

The template SHALL display a "Blog Posts" section with 3 blog post cards, each with an image, title, date, excerpt, and "Read More" link.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** 3 blog post cards are visible with read more links

### Requirement: Contact section with form and office info

The template SHALL display a "Contact Form" section with a form (first name, full name, email, subject, message, submit button) and two office locations (London, New York) with address, phone, and email details.

#### Scenario: Contact form renders all inputs

- **WHEN** the page loads
- **THEN** the contact form has 5 inputs and a submit button
- **AND** both office locations are displayed

### Requirement: Footer with links, social icons, and Component Dock attribution

The template SHALL display a footer with brand info, 3 link columns (Services, Resources, Templates), social media icons, and a copyright line linking to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: Design tokens match original

The template SHALL use the Jost font family, lime-green brand color (#C2E54F), and dark (#000) body text matching the original ColorLib "Services" template.

#### Scenario: Brand color applied

- **WHEN** the page renders
- **THEN** buttons and accents use the lime-green brand color
- **AND** the Jost font family is applied

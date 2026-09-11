# Optic — Photographer Portfolio Template

## Purpose

Recreation of ColorLib "Credo" (https://colorlib.com/wp/template/credo/) — a photographer personal portfolio with warm gold accent design tokens, featuring a split navbar, hero section, services grid, about with progress bars, photo gallery, testimonials carousel, blog cards, contact form, and 4-column footer.

## Requirements

### Requirement: Full page render with all sections

The Optic app SHALL render a complete landing page with header, hero, services, about, gallery, testimonials, blog, contact, and footer sections.

#### Scenario: Document title and landmarks

- **WHEN** the Optic app loads
- **THEN** the document title is "Optic — Photographer Portfolio"
- **AND** the page contains a banner landmark (header)
- **AND** the page contains a main landmark
- **AND** the page contains a contentinfo landmark (footer)

#### Scenario: Hero section content

- **WHEN** the Optic app loads
- **THEN** the hero section displays the heading "I'm Alex Morgan"
- **AND** the hero section displays "Photographer" and "Speaker" role text
- **AND** the hero section displays a "Contact Me" call-to-action button

### Requirement: Navbar with split navigation

The navbar SHALL display a centered logo with left and right navigation links.

#### Scenario: Navigation links

- **WHEN** the Optic app loads
- **THEN** the navbar displays left links: Home, About, Services
- **AND** the navbar displays right links: Gallery, Blog, Contact
- **AND** the navbar displays the logo text "Optic"

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile menu opens
- **AND** when the user clicks a mobile link, the menu closes

### Requirement: Services section with four service cards

The services section SHALL display four photography services in a grid layout.

#### Scenario: Service cards

- **WHEN** the Optic app loads
- **THEN** the services section displays heading "Services"
- **AND** the services section displays cards for Wedding, Events, Conferences, and Culture
- **AND** each card has a title and description

### Requirement: About section with progress bars

The about section SHALL display bio text and skill progress bars.

#### Scenario: About content

- **WHEN** the Optic app loads
- **THEN** the about section displays heading "About Me"
- **AND** the about section displays bio text about the photographer
- **AND** the about section displays progress bars for Photographer (89%), Wedding (75%), Events (94%), and Conferences (94%)

### Requirement: Gallery section with photo grid

The gallery section SHALL display a grid of photography images with hover overlay.

#### Scenario: Gallery images

- **WHEN** the Optic app loads
- **THEN** the gallery section displays heading "My Photography"
- **AND** the gallery section displays 10 images

### Requirement: Testimonials section with carousel

The testimonials section SHALL display a rotating carousel of client quotes.

#### Scenario: Testimonial navigation

- **WHEN** the Optic app loads
- **THEN** the testimonials section displays heading "What Clients Are Saying"
- **AND** the testimonials section displays the first testimonial quote
- **AND** when the user clicks "Next testimonial", the next quote is shown
- **AND** when the user clicks "Previous testimonial", the previous quote is shown

### Requirement: Blog section with post cards

The blog section SHALL display three blog post cards with images, titles, dates, and excerpts.

#### Scenario: Blog posts

- **WHEN** the Optic app loads
- **THEN** the blog section displays heading "Blog Posts"
- **AND** the blog section displays three blog post cards
- **AND** each card has a "Read More" link

### Requirement: Contact section with form

The contact section SHALL display a contact form with input fields and submit button.

#### Scenario: Contact form fields

- **WHEN** the Optic app loads
- **THEN** the contact section displays heading "Say Hello"
- **AND** the contact form has fields for first name, last name, email, subject, and message
- **AND** the contact form has a "Send Message" submit button

#### Scenario: Form submission prevention

- **WHEN** the user submits the contact form
- **THEN** the form submission is prevented (no page reload)

### Requirement: Footer with links and copyright

The footer SHALL display brand info, link columns, social icons, and copyright with Component Dock link.

#### Scenario: Footer content

- **WHEN** the Optic app loads
- **THEN** the footer displays the logo "Optic"
- **AND** the footer displays link columns for Services, Resources, and Quick Links
- **AND** the footer displays social icons for Twitter, Facebook, Instagram, Dribbble, and LinkedIn
- **AND** the footer displays a copyright line with a "Component Dock" link to https://www.componentdock.com/

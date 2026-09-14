# Fulcrum — Digital Services Landing Template

## Purpose

Recreation of ColorLib "Services" (https://colorlib.com/wp/template/services/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page digital services/agency landing page. Delivers a sticky navbar with bordered logo, a hero with background image and CTA, an about section with 3-column layout, service cards in a 2x3 grid, a filterable project gallery, a testimonials carousel on lime green background, blog post cards, a contact form with office addresses, and a footer with Component Dock link.

## Requirements

### Requirement: Sticky navbar with logo and navigation links

The template SHALL render a sticky top navbar with a bordered logo "Fulcrum" on the left and navigation links (Home, About, Services, Projects, Blog, Contact) on the right. On mobile, a hamburger toggle SHALL show/hide a slide-down menu.

#### Scenario: Desktop navbar renders logo and nav links

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** I see a sticky navbar with the logo "Fulcrum"
- **AND** I see navigation links: Home, About, Services, Projects, Blog, Contact

#### Scenario: Mobile menu toggles open and closed

- **GIVEN** the page is loaded on mobile
- **WHEN** I click the "Open menu" button
- **THEN** the mobile menu appears with all nav links
- **AND** the button label changes to "Close menu"

#### Scenario: Mobile menu closes when a link is clicked

- **GIVEN** the mobile menu is open
- **WHEN** I click a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section with background image and CTA

The template SHALL render a full-width hero section with a background image, a dark overlay (black/50), a heading "We Are Digital Services", a subtitle paragraph, and an "Our Services" CTA button with lime green background linking to the services section.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the page is loaded
- **THEN** I see the heading "We Are Digital Services"
- **AND** I see a CTA button labeled "Our Services" linking to "#services"

### Requirement: About Us section with 3-column layout

The template SHALL render an "About Us" section with a centered heading, a 3-column grid containing text in the left column, an image in the center column, and text in the right column.

#### Scenario: About section renders heading, text, and image

- **GIVEN** the page is loaded
- **THEN** I see a heading "About Us"
- **AND** I see descriptive text paragraphs
- **AND** I see an about image

### Requirement: Services section with 6 service cards in a 2x3 grid

The template SHALL render a "Services" section with a centered heading and 6 service cards arranged in a 2-column grid. Each card SHALL contain an icon, a title, and a description. The services are: Content Marketing, Social Media Marketing, Brand & Logo Design, Social Media Advertising, PPC Advertising, Web Design & Development.

#### Scenario: Services section renders all 6 cards

- **GIVEN** the page is loaded
- **THEN** I see a heading "Services"
- **AND** I see 6 service card headings
- **AND** I see all 6 service titles

### Requirement: Projects section with filterable gallery

The template SHALL render a "Projects" section with filter tabs (All, Web, Design, Brand) and a grid of project images. Clicking a tab SHALL filter the displayed projects to only show items matching that category.

#### Scenario: All projects shown by default

- **GIVEN** the page is loaded
- **THEN** I see all 12 project images

#### Scenario: Clicking a filter tab shows only matching projects

- **GIVEN** the projects section is visible
- **WHEN** I click the "Web" tab
- **THEN** only web-category projects are shown

### Requirement: Testimonials carousel on lime green background

The template SHALL render a testimonials section with a lime green (#C2E54F) background, a centered heading "What Clients Are Saying", a blockquote with the current testimonial text and author, and previous/next navigation buttons.

#### Scenario: First testimonial shown by default

- **GIVEN** the page is loaded
- **THEN** I see the first testimonial quote and author "Jean Smith"

#### Scenario: Navigation buttons cycle through testimonials

- **GIVEN** the page is loaded
- **WHEN** I click the "Next testimonial" button
- **THEN** the next testimonial is displayed

### Requirement: Blog posts section with 3-column cards

The template SHALL render a "Blog Posts" section with 3 blog post cards, each containing an image, title, date, excerpt, and a "Read More" link.

#### Scenario: Blog section renders 3 post cards

- **GIVEN** the page is loaded
- **THEN** I see a heading "Blog Posts"
- **AND** I see 3 blog article cards
- **AND** I see 3 "Read More" links

### Requirement: Contact form with office addresses

The template SHALL render a "Contact Form" section with a form on the left (first name, full name, email, subject, message textarea, submit button) and office addresses (London, New York) on the right. Submitting the form SHALL reset all fields.

#### Scenario: Contact form renders all fields

- **GIVEN** the page is loaded
- **THEN** I see a heading "Contact Form"
- **AND** I see form fields for first name, full name, email, subject, and message
- **AND** I see a "Send Message" submit button
- **AND** I see office addresses for London and New York

#### Scenario: Form resets on submit

- **GIVEN** the contact form has been filled in
- **WHEN** I submit the form
- **THEN** all form fields are cleared

### Requirement: Footer with Component Dock link

The template SHALL render a footer with the brand name "Fulcrum", three link columns (Services, Resources, Templates), social media icon links (Twitter, Facebook, Instagram, Dribbble, LinkedIn), and a copyright line with a link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer renders brand, links, socials, and copyright

- **GIVEN** the page is loaded
- **THEN** I see the brand name "Fulcrum" in the footer
- **AND** I see link columns for Services, Resources, and Templates
- **AND** I see social icon links for Twitter, Facebook, Instagram, Dribbble, and LinkedIn
- **AND** I see a copyright line with a link to Component Dock

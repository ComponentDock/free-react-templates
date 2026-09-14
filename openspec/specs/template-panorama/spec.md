# Panorama — Web Agency Portfolio Template

## Purpose

Recreation of ColorLib "Scenic" (https://colorlib.com/wp/template/scenic/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio template. Delivers a full web agency landing experience with video-hero background, about section, stats counters, services grid, filterable portfolio gallery, video CTA, blog posts, and multi-column footer.

## Requirements

### Requirement: Navbar with logo and navigation links

The template SHALL render a sticky navbar with the brand name "Panorama" and navigation links: Home, About, Portfolio, Services, Blog, Contact. On mobile, a hamburger toggle SHALL show/hide a slide-down menu.

#### Scenario: Desktop navbar renders logo and links

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** I see a link "Panorama" pointing to #home
- **AND** I see links "Home", "About", "Portfolio", "Services", "Blog", "Contact"

#### Scenario: Mobile menu toggles open and closed

- **GIVEN** the page is loaded on a mobile viewport
- **WHEN** I click the "Open menu" button
- **THEN** the mobile menu is visible
- **WHEN** I click the "Close menu" button
- **THEN** the mobile menu is hidden

### Requirement: Hero section with background image and CTA

The template SHALL render a full-viewport hero section with a background image, dark overlay, heading "We Are Panorama", descriptive text, and a "Get in touch" CTA button. A scroll-down arrow SHALL link to the about section.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the page is loaded
- **THEN** I see a heading "We Are Panorama"
- **AND** I see a link "Get in touch" pointing to #contact

#### Scenario: Hero has scroll-down arrow

- **GIVEN** the page is loaded
- **THEN** I see a link "Scroll to about section" pointing to #about

### Requirement: About section with overlapping images

The template SHALL render an About section with subtitle "About Us", heading "Who Are You Guys", description paragraphs, a "Read more about us" link, and two overlapping images.

#### Scenario: About section renders content

- **GIVEN** the page is loaded
- **THEN** I see a heading "Who Are You Guys"
- **AND** I see text "About Us"

### Requirement: Stats counter section

The template SHALL render a 4-column stats section showing: Completed Projects (2393), Awards (54), Team (120), Lines of Code (550).

#### Scenario: Stats section renders all values

- **GIVEN** the page is loaded
- **THEN** I see text "2393" and "Completed Projects"
- **AND** I see text "54" and "Winners & Awards"

### Requirement: Services grid with 6 cards

The template SHALL render a services section with light background, subtitle "Our Services", heading "Services", and 6 service cards (Graphic Design, Marketing Strategy, Web Design, SEO, Market Leading, Pixel Perfect Design). A "View All Services" button SHALL be present.

#### Scenario: Services section renders all cards

- **GIVEN** the page is loaded
- **THEN** I see heading "Services"
- **AND** I see 6 service card headings

### Requirement: Filterable portfolio grid

The template SHALL render a portfolio section with filter buttons (All, Web, Design, Brand) and a 3-column image grid. Clicking a filter SHALL show only items in that category.

#### Scenario: Portfolio shows all items by default

- **GIVEN** the page is loaded
- **THEN** I see 9 portfolio images

#### Scenario: Portfolio filters by category

- **GIVEN** the page is loaded
- **WHEN** I click "Design"
- **THEN** I see 2 portfolio images

### Requirement: Video CTA section

The template SHALL render a video call-to-action section with a video thumbnail, play button, subtitle "Watch the video", heading "We Are Web Agency", and description text.

#### Scenario: Video CTA renders content

- **GIVEN** the page is loaded
- **THEN** I see heading "We Are Web Agency"
- **AND** I see a "Play video" button

### Requirement: Blog posts section

The template SHALL render a blog section with subtitle "Read the latest post", heading "Blog Posts", and 4 blog cards each with image, title, author, date, and comment count.

#### Scenario: Blog section renders all posts

- **GIVEN** the page is loaded
- **THEN** I see heading "Blog Posts"
- **AND** I see 4 blog card headings

### Requirement: Footer with Component Dock link

The template SHALL render a footer with 4 columns (Products, Company, Support, Contact Us with social icons), a copyright line, and a link to https://www.componentdock.com/ branded as "Component Dock". A scroll-to-top button SHALL be present.

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the page is loaded
- **THEN** I see a link "Component Dock" pointing to https://www.componentdock.com/
- **AND** I see social icons for Facebook, Twitter, Instagram, LinkedIn

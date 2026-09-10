# Spec: Minima

## Purpose

Minima is a minimalist portfolio/agency landing page template, recreating
the ColorLib "Avo" design under a new name. It features a dark hero with
stat counters, about/services section, portfolio showcase, testimonials,
CTA banner, blog grid, and multi-column footer with Component Dock branding.

## Requirements

### Requirement: Navigation bar with responsive mobile menu

The template SHALL render a fixed top navigation bar with the brand logo
and links to all sections (Home, About, Services, Portfolio, Blog, Contact).

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** all 6 navigation links are visible in the navbar

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** a dropdown menu appears with all navigation links

### Requirement: Hero section with stats and CTA

The template SHALL render a full-screen hero section with a dark overlay
background image, stat counters, headline, description, and a CTA button.

#### Scenario: Hero displays stat counters

- **WHEN** the hero section renders
- **THEN** the "400+" and "21+" stat counters are displayed

#### Scenario: Hero CTA button links to portfolio

- **WHEN** the user views the hero section
- **THEN** a "Start Project" button links to the portfolio section

### Requirement: About section with services and welcome text

The template SHALL display a services grid with 5 service cards and a
split about section with text and an image.

#### Scenario: Services grid shows 5 items

- **WHEN** the services section renders
- **THEN** 5 service cards are visible (UI/UX Design, Web Development, Product Design, Mobile Apps, SEO)

#### Scenario: Welcome text is displayed

- **WHEN** the about section renders
- **THEN** a welcome heading and description paragraph are present

### Requirement: Portfolio showcase with alternating layout

The template SHALL display 3 portfolio items with alternating image/text
layout, each with category, title, description, author, and CTA.

#### Scenario: Portfolio renders 3 items

- **WHEN** the portfolio section renders
- **THEN** 3 portfolio items are visible with "View Portfolio" buttons

### Requirement: Testimonials section

The template SHALL display client testimonials with quotes, author names,
and positions.

#### Scenario: Testimonials render 3 cards

- **WHEN** the testimonials section renders
- **THEN** 3 testimonial cards with author info are displayed

### Requirement: CTA banner with dark background

The template SHALL display a call-to-action banner with a dark background,
heading, and primary action button.

#### Scenario: CTA banner displays heading and button

- **WHEN** the CTA section renders
- **THEN** the heading "Fill in the brief and get the project estimate" and a "Get Started" button are visible

### Requirement: Blog grid with 4 posts

The template SHALL display 4 recent blog post cards with images, titles,
dates, authors, and comment counts.

#### Scenario: Blog renders 4 posts

- **WHEN** the blog section renders
- **THEN** 4 blog cards with titles and metadata are visible

### Requirement: Footer with Component Dock branding

The template SHALL render a multi-column footer with brand info, link
columns, contact information, and a copyright line linking to
https://www.componentdock.com/.

#### Scenario: Footer includes Component Dock link

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present

#### Scenario: Footer has 5 column groups

- **WHEN** the footer renders
- **THEN** brand, Community, About Us, Company, and contact sections are visible

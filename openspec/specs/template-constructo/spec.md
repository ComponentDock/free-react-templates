# Spec: Constructo — Construction Company Landing Template

## Purpose

Recreate the ColorLib "Topbuilder" construction company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Constructo". The template provides a full-featured construction company website with hero, features, about, services, team, stats, testimonials, gallery, blog, and footer sections.

## Requirements

### Requirement: All sections render in correct order

The template SHALL display 16 sections in the correct order: TopBar, Navbar, Hero, Features, About, WhatWeOffer, WhyChooseUs, Gallery, Team, Stats, Testimonials, Projects, Blog, Partners, CtaBanner, Footer.

#### Scenario: Page loads with all sections

- **GIVEN** the page loads
- **THEN** all 16 sections are visible in the correct order

### Requirement: Navbar displays navigation links

The navbar SHALL display Home, About, Services, Gallery, Blog, and Contact navigation links with a search button.

#### Scenario: Navbar renders all navigation items

- **GIVEN** the navbar is rendered
- **THEN** Home, About, Services, Gallery, Blog, Contact links are visible
- **AND** a search button is present

### Requirement: Hero displays heading and CTA

The hero section SHALL display a welcome heading, main heading, description text, and a "Read More" call-to-action button over a background image.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the hero section renders
- **THEN** the heading "Welcome to our" is visible
- **AND** "Clean, Modern, Multipurpose Theme" is visible
- **AND** a "Read More" button is displayed

### Requirement: Features section shows 4 items

The features section SHALL display 4 feature cards with icons, titles, and descriptions.

#### Scenario: Features section renders 4 cards

- **GIVEN** the features section renders
- **THEN** 4 feature cards are displayed (Professional Builder, We Deliver Quality, Always On Time, We Are Passionate)

### Requirement: About section has contact button

The about section SHALL display a section title, "Who We Are" heading, descriptive text, and a "Contact Now" button.

#### Scenario: About section renders content and CTA

- **GIVEN** the about section renders
- **THEN** "About Us" title is visible
- **AND** "Who We Are" heading is visible
- **AND** a "Contact Now" button is present

### Requirement: What We Offer shows 3 services

The What We Offer section SHALL display 3 service cards with images, icons, titles, and descriptions.

#### Scenario: What We Offer renders 3 cards

- **GIVEN** the What We Offer section renders
- **THEN** Building Construction, Project Planning, and House Renovation cards are visible

### Requirement: Why Choose Us shows 3 feature items

The Why Choose Us section SHALL display 3 feature items with icons, titles, and descriptions alongside a feature image.

#### Scenario: Why Choose Us renders 3 items

- **GIVEN** the Why Choose Us section renders
- **THEN** 30+ Years of Experience, Qualified Experts, and Best Customer Service items are visible

### Requirement: Gallery shows filterable project images

The gallery section SHALL display 6 project images in a grid with category filter buttons.

#### Scenario: Gallery renders and filters work

- **GIVEN** the gallery section renders
- **THEN** 6 project images are displayed
- **AND** clicking a filter button shows only matching items

### Requirement: Team shows 4 members

The team section SHALL display 4 team member cards with photos, names, and roles.

#### Scenario: Team renders 4 members

- **GIVEN** the team section renders
- **THEN** 4 team member cards are displayed with names and roles

### Requirement: Stats section shows 4 counters

The stats section SHALL display 4 stat blocks with icons, numbers, and labels on a dark background.

#### Scenario: Stats renders 4 counters

- **GIVEN** the stats section renders
- **THEN** 800, 230, 1390, 125 values are displayed with their labels

### Requirement: Testimonials displays quote cards

The testimonials section SHALL display testimonial cards with avatars, names, roles, and quote text.

#### Scenario: Testimonials renders cards

- **GIVEN** the testimonials section renders
- **THEN** at least 3 testimonial cards are displayed

### Requirement: Projects section shows image grid

The projects section SHALL display 8 project images in a grid on a dark background with hover overlays.

#### Scenario: Projects renders 8 images

- **GIVEN** the projects section renders
- **THEN** 8 project images are displayed

### Requirement: Blog shows 3 posts

The blog section SHALL display 3 blog post cards with images, titles, authors, dates, and excerpts.

#### Scenario: Blog renders 3 posts

- **GIVEN** the blog section renders
- **THEN** 3 blog post cards are displayed

### Requirement: Partners displays logos

The partners section SHALL display placeholder partner logos.

#### Scenario: Partners renders logos

- **GIVEN** the partners section renders
- **THEN** placeholder partner logos are visible

### Requirement: CTA banner has book now button

The CTA banner SHALL display booking text and a "Book Now" button on a yellow background.

#### Scenario: CTA renders booking CTA

- **GIVEN** the CTA section renders
- **THEN** a "Book Now" button is visible

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock" in the copyright area.

#### Scenario: Footer has Component Dock link

- **GIVEN** the footer renders
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible

### Requirement: Footer shows contact info

The footer SHALL display email, phone, and address contact information.

#### Scenario: Footer renders contact details

- **GIVEN** the footer renders
- **THEN** email, phone, and address are visible

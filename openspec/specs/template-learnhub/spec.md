# Learnhub — Online Education Platform

Recreation of ColorLib **Etrain** (https://colorlib.com/wp/template/etrain/).

## Purpose

Provide a free React template for online education platforms, featuring course listings, testimonials, stats, and a blog section. Recreates the ColorLib Etrain design with navy + coral-gold accent palette, Poppins/Roboto typography, and responsive mobile-first layout.

## Requirements

### Requirement: Navbar with navigation and mobile menu

The template SHALL render a sticky top navbar with brand logo, navigation links (Home, About, Courses, Blog, Contact), a Login CTA button, and a responsive hamburger menu for mobile.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows "Learnhub" brand, all 5 nav links, and a Login button

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user taps the hamburger icon on mobile
- **THEN** the mobile menu opens showing all nav links and a Login button
- **AND** tapping the close icon hides the menu

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user taps a nav link
- **THEN** the mobile menu closes

### Requirement: Hero section with CTAs

The template SHALL render a hero section with a gradient navy background, learner count badge, headline, description, and two call-to-action buttons.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the page loads
- **THEN** the hero shows "Advance Your Career with Expert-Led Courses" heading
- **AND** shows "Browse Courses" and "Start Free Trial" buttons

### Requirement: Features section

The template SHALL render a "Why Learnhub?" section with three feature cards (Flexible Learning, Expert Instructors, Career Support).

#### Scenario: Features render all cards

- **WHEN** the page loads
- **THEN** three feature cards are visible with titles and descriptions

### Requirement: About section

The template SHALL render a split-layout about section with an image and descriptive text with bullet points.

#### Scenario: About renders content

- **WHEN** the page loads
- **THEN** the about section shows "Learn Skills That Matter for Your Career" heading
- **AND** shows two bullet points and a Read More link

### Requirement: Stats section

The template SHALL render a gradient stats bar with four statistics.

#### Scenario: Stats render all values

- **WHEN** the page loads
- **THEN** four stats are visible: 250 Courses, 15,000 Students, 92% Career Advancement, 45 Countries

### Requirement: Courses section

The template SHALL render a "Featured Courses" section with three course cards showing images, categories, prices, titles, descriptions, duration, enrollment counts, instructor info, and star ratings.

#### Scenario: Courses render all cards

- **WHEN** the page loads
- **THEN** three course cards are visible with titles, prices, and instructor names

### Requirement: Platform section

The template SHALL render a split-layout platform section highlighting advanced learning features.

#### Scenario: Platform renders features

- **WHEN** the page loads
- **THEN** the platform section shows "Learn Anywhere" and "Verified Certificates" features

### Requirement: Testimonials section

The template SHALL render a testimonials section with three student success story cards.

#### Scenario: Testimonials render all cards

- **WHEN** the page loads
- **THEN** three testimonial cards are visible with names, roles, and quotes

### Requirement: Blog section

The template SHALL render a blog section with three blog post cards.

#### Scenario: Blog renders all cards

- **WHEN** the page loads
- **THEN** three blog cards are visible with categories, titles, and engagement counts

### Requirement: Footer with Component Dock attribution

The template SHALL render a footer with brand info, newsletter form, contact details, social links, and a "Component Dock" attribution linking to componentdock.com.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer shows brand description, newsletter form, contact info, and social links
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/

#### Scenario: Newsletter form handles submit

- **WHEN** the user types an email and clicks Subscribe
- **THEN** the form does not navigate (preventDefault)

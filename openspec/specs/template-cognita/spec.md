# Cognita — Online Learning Template

Recreation of ColorLib **Eskwela** (https://colorlib.com/wp/template/eskwela/).

## Purpose

Cognita is an online learning template. It recreates the ColorLib **Eskwela** design (https://colorlib.com/wp/template/eskwela/, preview: https://preview.colorlib.com/theme/eskwela/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Requirements

### Feature: UpperBar

#### Scenario: Renders social icons and Apply Now link

- **GIVEN** the page is loaded
- **THEN** social icon links for Twitter, Facebook, LinkedIn, and Dribbble are visible
- **AND** an "Apply Now" link is visible

### Feature: Navbar

#### Scenario: Renders logo, navigation links, and Join Now CTA

- **GIVEN** the page is loaded
- **THEN** a "Cognita" logo link is visible
- **AND** the following nav links are present: "Home", "Courses", "About", "Events", "News", "Contact"
- **AND** a "Join Now" CTA button is visible

#### Scenario: Toggles mobile menu

- **GIVEN** the page is loaded
- **WHEN** I click the "Open menu" button
- **THEN** a "Close menu" button is visible
- **AND** mobile navigation links are displayed

### Feature: Hero Section

#### Scenario: Displays headline, subtitle, and Start Learning button

- **GIVEN** the page is loaded
- **THEN** the hero heading "Best Online Learning System" is visible
- **AND** the subtitle "Start your journey to knowledge today" is visible
- **AND** a "Start Learning" button is visible

### Feature: Intro Features

#### Scenario: Shows three feature cards

- **GIVEN** the page is loaded
- **THEN** headings for "Learn Courses Online", "Online Library Store", "50% off in all selected Courses" are visible

### Feature: Welcome Section

#### Scenario: Displays welcome heading and accordion panels

- **GIVEN** the page is loaded
- **THEN** a "Welcome to Cognita" heading is visible
- **AND** accordion panels exist for FAQ items
- **AND** the first panel content is visible by default

#### Scenario: Toggles accordion panel

- **GIVEN** the page is loaded
- **WHEN** I click the "How do I enroll?" button
- **THEN** the enrollment content is visible
- **AND** the first panel content is hidden

### Feature: Features

#### Scenario: Shows four feature items

- **GIVEN** the page is loaded
- **THEN** headings for "Professional Courses", "Experienced Instructor", "Practical Training", "Validated Certificate" are visible

### Feature: Classes

#### Scenario: Shows course cards with images, prices, and enroll links

- **GIVEN** the page is loaded
- **THEN** a "Our Classes" heading is visible
- **AND** 6 course cards are rendered
- **AND** each course shows an "Enroll Now" link

### Feature: Testimonials

#### Scenario: Shows student testimonials with names and roles

- **GIVEN** the page is loaded
- **THEN** a "What Students Say" heading is visible
- **AND** testimonial cards for "Sarah Johnson", "Michael Chen", "Emily Davis" are rendered

### Feature: Professors

#### Scenario: Shows instructor cards with names and specialties

- **GIVEN** the page is loaded
- **THEN** a "Our Experienced Professors" heading is visible
- **AND** 4 instructor names are shown: "Olivia Young", "Daniel Anderson", "David Brook", "Brigeth Smith"

### Feature: Events

#### Scenario: Shows event cards with dates and descriptions

- **GIVEN** the page is loaded
- **THEN** a "Upcoming Events" heading is visible
- **AND** at least 3 event cards are rendered

### Feature: Footer

#### Scenario: Renders footer with Component Dock link and newsletter

- **GIVEN** the page is loaded
- **THEN** a link to componentdock.com is visible with text "Component Dock"
- **AND** a newsletter form with email input is visible
- **AND** copyright text is visible

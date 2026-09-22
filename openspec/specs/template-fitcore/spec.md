# FitCore — Health & Fitness Template

## Purpose

Recreate the ColorLib **Fitnessclub** design (https://colorlib.com/wp/template/fitnessclub/) as a React 19 + Tailwind CSS 4 + TypeScript single-page template under the name "FitCore". The template serves as a free, production-ready health and fitness club website with hero, about, services, testimonials, gallery, trainers, schedule, and contact sections.

## Requirements

### Requirement: Header navigation

The template SHALL display a transparent fixed header with brand logo, navigation links, and a "Become a Member" CTA, plus a responsive mobile hamburger menu.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the "FitCore" brand link, nav links (Home, About, Services, Schedule, Gallery, Contact), and "Become a Member" button are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user taps the hamburger icon on mobile
- **THEN** a full-screen mobile menu opens with all nav links and the CTA
- **AND** tapping a link or the close button dismisses the menu

### Requirement: Hero section

The template SHALL display a full-height hero with background image, accent subtitle, heading, CTA button, and a video play icon.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the heading "Build Perfect Body Shape" is visible
- **AND** the "Become a Member" CTA links to the contact section
- **AND** a video play button is present

### Requirement: About section

The template SHALL display a two-column about section with an image and gym description.

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the "About Our Gym" section label and heading are visible
- **AND** an image of the gym is shown
- **AND** a "Become a Member" CTA is present

### Requirement: Services section

The template SHALL display a dark-background services section with three service cards (Quality Equipment, Health Caring, Gym Strategies).

#### Scenario: Service cards

- **WHEN** the page loads
- **THEN** three service cards are visible with icons, titles, and descriptions
- **AND** each card has a "Discover More About Us" hover overlay

### Requirement: Testimonials section

The template SHALL display client feedback with a quote, author name, and role.

#### Scenario: Testimonial content

- **WHEN** the page loads
- **THEN** the "Client Feedback" heading is visible
- **AND** a testimonial quote with author name and role is shown

### Requirement: Gallery section

The template SHALL display a 2-column image gallery with hover overlays.

#### Scenario: Gallery images

- **WHEN** the page loads
- **THEN** five gallery images are displayed in a 2-column layout
- **AND** each image has a hover overlay with title and category

### Requirement: Team section

The template SHALL display trainer cards with images, roles, names, and social links.

#### Scenario: Trainer cards

- **WHEN** the page loads
- **THEN** three trainer cards are visible
- **AND** each card shows the trainer's name, role, and social icon links

### Requirement: Membership banner

The template SHALL display a full-width dark membership offer banner with heading and CTA.

#### Scenario: Banner content

- **WHEN** the page loads
- **THEN** the "Membership Offer Available Now" heading is visible
- **AND** a "More Services" CTA button is present

### Requirement: Schedule section

The template SHALL display a tab-based weekly timetable with day tabs and class rows.

#### Scenario: Day tabs

- **WHEN** the page loads
- **THEN** seven day tabs are visible (Saturday through Friday)
- **AND** Monday is selected by default
- **AND** clicking a day tab shows that day's classes with time, name, and instructor

### Requirement: Contact section

The template SHALL display contact information and a contact form.

#### Scenario: Contact form

- **WHEN** the page loads
- **THEN** the contact form has name, email, and message fields
- **AND** the form can be submitted without page navigation

### Requirement: Footer

The template SHALL display a dark footer with about text, quick links, newsletter subscription, and a "Component Dock" attribution link.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows "About FitCore", "Quick Links", and "Newsletter" columns
- **AND** the newsletter form accepts an email and shows a confirmation
- **AND** the "Component Dock" link points to https://www.componentdock.com/

### Requirement: Design tokens

The template SHALL use the brand colors, fonts, and layout patterns extracted from the original Fitnessclub design.

#### Scenario: Brand colors

- **WHEN** the template renders
- **THEN** the primary brand color is #f04e3c (red-orange)
- **AND** headings use Teko font and body text uses Barlow font
- **AND** buttons are uppercase with sharp corners and red background

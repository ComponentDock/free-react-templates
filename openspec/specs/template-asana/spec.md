# Spec: Asana (recreation of ColorLib DoYoga)

## Purpose

Asana is a yoga studio landing page template featuring class listings, schedule, about section, events, gallery, and contact form. Recreated from the ColorLib DoYoga design.

## Requirements

### Requirement: Navigation

The template SHALL display a sticky navigation bar with logo and links to all sections.

#### Scenario: Desktop navigation

- **WHEN** the user views the page on desktop
- **THEN** the navbar shows the "Asana" logo and links to Home, Classes, Schedule, About, Events, Gallery, Contact

#### Scenario: Mobile navigation

- **WHEN** the user taps the hamburger menu on mobile
- **THEN** a slide-out menu appears with all navigation links

### Requirement: Hero section

The template SHALL display a full-width hero with background image, heading, subtitle, and video play button.

#### Scenario: Hero content

- **WHEN** the user views the hero section
- **THEN** the heading "A Yoga Studio" is visible with a play button link

### Requirement: Featured classes

The template SHALL display a carousel of yoga class cards with prices and images.

#### Scenario: Class cards

- **WHEN** the user scrolls to the classes section
- **THEN** four class cards are shown with name, price, and image

### Requirement: Schedule

The template SHALL display a two-column grid of schedule items with time, date, and join button.

#### Scenario: Schedule items

- **WHEN** the user views the schedule section
- **THEN** four schedule items are shown with class name, time, date, and "Join from $15" button

### Requirement: About section

The template SHALL display an about section with text and overlapping images.

#### Scenario: About content

- **WHEN** the user scrolls to the about section
- **THEN** the "About Us" heading and description text are visible with two images

### Requirement: Events

The template SHALL display event cards with image, title, date, and description.

#### Scenario: Event cards

- **WHEN** the user views the events section
- **THEN** two event cards are shown with title, date, and "Read More" button

### Requirement: Gallery

The template SHALL display a filterable image gallery with category buttons.

#### Scenario: Filter gallery

- **WHEN** the user clicks a category filter button
- **THEN** only images in that category are displayed

### Requirement: Contact form

The template SHALL display a contact form with name, email, subject, message fields and submit button.

#### Scenario: Submit contact form

- **WHEN** the user fills all fields and submits
- **THEN** a thank-you message is displayed

### Requirement: Footer

The template SHALL display a dark footer with Component Dock attribution link.

#### Scenario: Footer link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present

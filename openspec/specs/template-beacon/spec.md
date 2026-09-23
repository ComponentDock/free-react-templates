# Beacon — Photography Portfolio Template

## Purpose

Recreate the ColorLib Halo photography portfolio template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app under the name "Beacon".

Source: https://colorlib.com/wp/template/halo/
Preview: https://preview.colorlib.com/theme/halo/

## Requirements

### Requirement: Navbar renders all navigation links and search

The navbar SHALL display the logo "Beacon", a search toggle, a mobile hamburger menu, and navigation links for Home, About, Services, Portfolio, Blog, Contact.

#### Scenario: Desktop navigation displays all links

- **WHEN** the page loads on a desktop viewport
- **THEN** I should see links for Home, About, Services, Portfolio, Blog, Contact

#### Scenario: Search input toggles on click

- **WHEN** I click the search button
- **THEN** a search input field should appear

#### Scenario: Mobile menu toggles on click

- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation should become visible

### Requirement: Hero section displays title and subtitle

The hero section SHALL show the template name "Beacon" and the subtitle "We Create Awesome Photographies and more" over a full-width background image.

#### Scenario: Hero renders heading and subtitle

- **WHEN** the hero section is visible
- **THEN** I should see "Beacon" as a heading and "We Create Awesome Photographies and more" as subtitle

### Requirement: Intro section shows creative description

The intro section SHALL display a two-column layout with subtitle "Amazing studio", heading "We are so Creative", descriptive paragraph, and a "Read More" button on the left, and a studio image on the right.

#### Scenario: Intro content renders correctly

- **WHEN** the intro section is visible
- **THEN** I should see "Amazing studio" subtitle, "We are so Creative" heading, a paragraph, and a "Read More" button

### Requirement: Portfolio grid shows 7 items

The portfolio section SHALL display a responsive grid of 7 portfolio items, each with a background image, title, and category visible on hover.

#### Scenario: Portfolio items render

- **WHEN** the portfolio section is visible
- **THEN** I should see 7 portfolio items with titles and categories

### Requirement: Milestones shows 4 statistics

The milestones section SHALL display 4 statistic counters in a row: 48 Video Games, 7 Awards Won, 23K Pictures Taken, 19 Video Tutorials, each with an icon.

#### Scenario: Statistics render correctly

- **WHEN** the milestones section is visible
- **THEN** I should see 4 statistic items with values 48, 7, 23K, 19 and their labels

### Requirement: Services shows 4 service cards

The services section SHALL display a title "see What we offer" with description on the left, and a 2x2 grid of 4 service cards (Video Footage, Photo Shootings, Photo Albums, Original Ideas) with icons on the right.

#### Scenario: Services content renders

- **WHEN** the services section is visible
- **THEN** I should see 4 service cards with their titles

### Requirement: Contact section has a form

The contact section SHALL display "Stay in touch" heading, contact info (phone, email, address) on the left, and a form with name, email, subject, message fields and a Send button on the right, all over a background image.

#### Scenario: Contact form renders all fields

- **WHEN** the contact section is visible
- **THEN** I should see a form with name, email, subject, message fields and a Send button

### Requirement: Footer has social links and Component Dock attribution

The footer SHALL display "Let's work together!" heading, email, social media icons (Pinterest, Facebook, Twitter, Dribbble), and a copyright line with a link to Component Dock.

#### Scenario: Footer renders correctly

- **WHEN** the footer is visible
- **THEN** I should see "Let's work together!" heading and a link to componentdock.com

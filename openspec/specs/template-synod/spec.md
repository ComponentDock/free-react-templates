# Synod — Church Landing Template

## Purpose

Recreate the ColorLib "Church WordPress Themes" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page church landing template under the name "Synod". The original preview was unreachable; the design is derived from the ColorLib screenshot.

## Requirements

### Requirement: Navigation bar with countdown and donate CTA

The template SHALL render a dark countdown bar at the top showing time remaining to an event, a navbar with logo, desktop navigation links, search icon, and a red "Donate" button. The mobile hamburger menu SHALL toggle open/closed on click and close when a link is tapped.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a wide screen
- **THEN** the navbar displays the Synod logo, links (Home, About, Ministries, Sermons, Events, Gallery, News, Giving), a search icon, and a Donate button

#### Scenario: Mobile menu toggle

- **WHEN** a user clicks the hamburger menu button
- **THEN** the mobile navigation panel becomes visible and the button label changes to "Close menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a user clicks a nav link
- **THEN** the mobile navigation panel closes

### Requirement: Hero section with background image and CTA

The template SHALL display a full-width hero section with a background image, a large heading, subtitle text, and a "Join us" CTA button linking to the about section. Decorative slide arrows SHALL be rendered.

#### Scenario: Hero content renders

- **WHEN** the hero section is visible
- **THEN** the heading "Synod — A Place of Faith", subtitle, background image, and "Join us" button are displayed

### Requirement: Sermon section with media actions

The template SHALL display a sermon section with a circular pastor avatar, a red quote heading, sermon metadata (speaker, date, category), and four media action buttons (watch, listen, gallery, links).

#### Scenario: Sermon content renders

- **WHEN** the sermon section is visible
- **THEN** the pastor photo, quote, speaker name, date, and category are displayed with four media buttons

### Requirement: About section with image and text

The template SHALL render a two-column about section with an image on the left and heading, paragraphs, and a "Read More" link on the right.

#### Scenario: About section renders

- **WHEN** the about section is visible
- **THEN** the image, heading "Welcome to Synod Church", two paragraphs, and "Read More" link are displayed

### Requirement: Features grid

The template SHALL display a three-column grid of feature cards, each with an icon, title, and description text.

#### Scenario: Three features render

- **WHEN** the features section is visible
- **THEN** three cards are displayed with titles "Spread Love", "Bible Study", and "Community"

### Requirement: Events section

The template SHALL show upcoming church events in a grid, each with a date, title, and location.

#### Scenario: Events render

- **WHEN** the events section is visible
- **THEN** at least three events are displayed with dates and locations

### Requirement: Footer with Component Dock branding

The template SHALL render a dark footer with three columns (about, quick links, contact info), a copyright line, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the footer is visible
- **THEN** a link labeled "More templates at Component Dock" points to https://www.componentdock.com/

#### Scenario: Footer renders contact info

- **WHEN** the footer is visible
- **THEN** the address, phone number, and email are displayed

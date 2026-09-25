# Template: Vynl (DJ Music Website)

## Purpose

Vynl is a DJ/music event website template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Dj" website template
design, built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript (strict). No ColorLib references in app code —
provenance lives in this spec, TEMPLATES.md, and the PR.

## Design Reference

- **Original:** ColorLib "Dj" — free DJ music website HTML template
  (https://colorlib.com/wp/template/dj/).
- **Preview URL:** https://preview.colorlib.com/theme/dj/
- **Design tokens:** brand gold #e4ae50, black background, Montserrat headings,
  Nunito body font, uppercase 12px buttons with 2px border.
- **Sections:** Navbar, Hero, Featured Events, Upcoming Events, Video/About, Footer.

## Requirements

### Requirement: Navbar with navigation and dropdown

The template SHALL display a fixed navigation bar with the brand name "Vynl."
with a gold dot accent, desktop navigation links (Home, DJs, Shows, Events,
About, Contact), a dropdown submenu under Shows, and a mobile hamburger menu
that toggles open/closed.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the brand name "Vynl." with a gold dot
- **AND** navigation links Home, DJs, Shows, Events, About, Contact are visible

#### Scenario: Shows dropdown appears on hover

- **WHEN** the user hovers over the Shows navigation link
- **THEN** a dropdown menu appears with items: Top 20 of The Week, Featured Artist, Interviews

#### Scenario: Shows dropdown disappears on mouse leave

- **WHEN** the user moves the mouse away from the Shows dropdown area
- **THEN** the dropdown menu disappears

#### Scenario: Mobile hamburger menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens showing all navigation links

#### Scenario: Mobile menu closes on link click

- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu closes

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle button
- **THEN** the dark mode state toggles

### Requirement: Hero section with background image and CTA

The template SHALL display a hero section with a full-width background image,
a "Vynl Music Fest" heading, descriptive text, and a "Join Us" button linking
to the events section.

#### Scenario: Hero renders heading and description

- **WHEN** the hero section is rendered
- **THEN** the heading reads "Vynl Music Fest"
- **AND** a description paragraph is present

#### Scenario: Hero Join Us button links to events

- **WHEN** the hero section is rendered
- **THEN** a "Join Us" link is present with href="#events"

### Requirement: Featured Events section with 3 event cards

The template SHALL display a "Featured Events" section with 3 event cards in a
responsive grid. Each card SHALL have an image, date badge (day and month),
title, description, and "Info" link.

#### Scenario: Featured Events renders 3 cards

- **WHEN** the Featured Events section is rendered
- **THEN** 3 event cards are displayed
- **AND** each card has a date badge with day and month

#### Scenario: Event titles are correct

- **WHEN** the Featured Events section is rendered
- **THEN** the event titles are "Slamp Party", "Love For My City", "Music Night Fest Party"

### Requirement: Upcoming Events section with asymmetric grid

The template SHALL display an "Upcoming Events" section with an asymmetric
image grid: one large image on the left and two smaller stacked images on the
right, each with an overlay title.

#### Scenario: Upcoming Events renders 3 cards

- **WHEN** the Upcoming Events section is rendered
- **THEN** 3 upcoming event cards are displayed
- **AND** each card has an overlay title

### Requirement: Video/About section with play button

The template SHALL display a two-column section with a video thumbnail and play
button on the left, and a "We Love Music" heading with description and "Join Us"
button on the right.

#### Scenario: Video/About renders heading and CTA

- **WHEN** the Video/About section is rendered
- **THEN** the heading reads "We Love Music"
- **AND** a "Join Us" link is present with href="#contact"
- **AND** a play button is present

### Requirement: Footer with about, social, subscribe, and video

The template SHALL display a footer with three columns: About Us with navigation
links, Follow Us with social icons and a Subscribe form, and Watch Video with a
video thumbnail. The footer bottom SHALL contain a copyright notice with a link
to https://www.componentdock.com/.

#### Scenario: Footer renders all sections

- **WHEN** the footer is rendered
- **THEN** "About Us" heading is present
- **AND** navigation links (Home, DJs, News, Top 20 of the week) are present
- **AND** social icons for Facebook, Twitter, Instagram, LinkedIn are present

#### Scenario: Footer Subscribe form

- **WHEN** the footer is rendered
- **THEN** an email input with label "Enter Email" is present
- **AND** a "Subscribe" button is present

#### Scenario: Footer Component Dock link

- **WHEN** the footer is rendered
- **THEN** a "Component Dock" link with href="https://www.componentdock.com/" is present

### Requirement: App composes all sections in correct order

The template SHALL compose all sections in the correct order: Navbar, Hero,
Featured Events, Upcoming Events, Video/About, Footer.

#### Scenario: All sections render in order

- **WHEN** the App component is rendered
- **THEN** all sections are present in the correct order
- **AND** the document title is "Vynl — DJ Music Website"

#### Scenario: Dark mode toggles on html element

- **WHEN** the user clicks the dark mode toggle
- **THEN** the html element gains or loses the "dark" class

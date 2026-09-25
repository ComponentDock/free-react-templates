# Template: Stave (Music Artist Landing)

## Purpose

Stave is a music artist landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Musico"
website template (source: https://colorlib.com/wp/template/musico/), built
under a DIFFERENT name (Stave — a musical term for the staff that holds
notes), per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Stave",
nav links (Home, About, Tracks, Blog, Contact), and social icon links
(Facebook, Twitter, Instagram).

#### Scenario: Navbar content

- **GIVEN** the Stave page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Stave"
- **AND** the navbar SHALL show links: Home (#home), About (#about), Tracks (#tracks), Blog (#blog), Contact (#contact)
- **AND** the navbar SHALL show social links for Facebook, Twitter, and Instagram

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the menu toggle button
- **THEN** the mobile menu SHALL open and show the same nav links
- **AND** the toggle button SHALL change to a close icon

#### Scenario: Mobile menu link click

- **GIVEN** the mobile menu is open
- **WHEN** the user taps a nav link
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a full-width hero section with a dark background image
and a centered "Musician" heading.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 heading "Musician"
- **AND** it SHALL have a background image from picsum.photos
- **AND** it SHALL have a dark overlay

### Requirement: Featured track section

The system SHALL render a featured track section with artist thumbnail,
artist name "Frando Kally", date, audio player placeholder, and a
"Buy Album" button.

#### Scenario: Featured track content

- **GIVEN** the page is rendered
- **WHEN** the featured track section is displayed
- **THEN** it SHALL show the artist name "Frando Kally"
- **AND** it SHALL show a date
- **AND** it SHALL have a play button
- **AND** it SHALL have a "Buy Album" button

### Requirement: About section

The system SHALL render an about section with a two-column layout: left
artist photo, right artist name "Jack Kalib" and bio text.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the artist name "Jack Kalib"
- **AND** it SHALL show bio text
- **AND** it SHALL have an artist image from picsum.photos

### Requirement: Video gallery section

The system SHALL render a 4-column grid of video thumbnails with play button
overlays, event labels, and titles on hover.

#### Scenario: Video gallery content

- **GIVEN** the page is rendered
- **WHEN** the video gallery section is displayed
- **THEN** it SHALL show 4 video thumbnails with images from picsum.photos
- **AND** each SHALL have a play button
- **AND** each SHALL show an event label and title

### Requirement: Latest tracks section

The system SHALL render a "Latest Tracks" section with 3 track rows, each
containing a thumbnail, name, date, audio player placeholder, and a
"Buy" button.

#### Scenario: Latest tracks content

- **GIVEN** the page is rendered
- **WHEN** the latest tracks section is displayed
- **THEN** it SHALL show a heading "Latest Tracks"
- **AND** it SHALL show 3 tracks with names, dates, play buttons, and buy buttons

### Requirement: Gallery section

The system SHALL render an "Image Galleries" section with a 5-image
masonry grid using picsum.photos images.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a heading "Image Galleries"
- **AND** it SHALL show 5 gallery images from picsum.photos

### Requirement: Contact CTA section

The system SHALL render a centered "Contact For RSVP" heading and a solid
red "Contact Me" button linking to a mailto.

#### Scenario: Contact CTA content

- **GIVEN** the page is rendered
- **WHEN** the contact CTA section is displayed
- **THEN** it SHALL show a heading "Contact For RSVP"
- **AND** it SHALL have a "Contact Me" link pointing to mailto:hello@stave.com

### Requirement: Footer

The system SHALL render a footer with a newsletter form, contact info,
social icon links, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a newsletter form with email input and subscribe button
- **AND** it SHALL show contact info (email, address, phone)
- **AND** it SHALL show social icon links (Facebook, Twitter, Instagram)
- **AND** it SHALL show a link to https://www.componentdock.com/ branded "Component Dock"

#### Scenario: Newsletter form submission

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL prevent default navigation

### Requirement: Design tokens

The system SHALL use the following design tokens:

#### Scenario: Color palette

- **GIVEN** the page is rendered
- **WHEN** styles are applied
- **THEN** the brand color SHALL be #ED1B1B
- **AND** the heading color SHALL be #001D38
- **AND** the body text color SHALL be #727272

#### Scenario: Typography

- **GIVEN** the page is rendered
- **WHEN** fonts are loaded
- **THEN** headings and nav SHALL use 'Josefin Sans'
- **AND** body text SHALL use 'Muli'

### Requirement: Page composition

The system SHALL compose all sections in a single page with a document title.

#### Scenario: Full page render

- **GIVEN** the Stave app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose Navbar, Hero, FeaturedTrack, About, VideoGallery, LatestTracks, Gallery, ContactCTA, and Footer in order
- **AND** the document title SHALL be "Stave — Music Artist Landing Page"

#### Scenario: No ColorLib references

- **GIVEN** the Stave app is rendered
- **WHEN** the HTML output is inspected
- **THEN** it SHALL NOT contain any reference to "colorlib"

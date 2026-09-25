# OnAir — Radio & Music Template

Recreation of ColorLib "Razo" (https://colorlib.com/wp/template/razo/)

## Purpose

OnAir is a free React website template that recreates the ColorLib Razo radio/music
template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It provides
a radio station website with hero, blog, music charts, video, app download, schedule,
and news sections.

## Design Tokens

Extracted from the live preview stylesheet:

- **Primary**: #dc2878 (hot pink — CTAs, accents, price buttons)
- **Heading**: #191919 (dark gray)
- **Body text**: #6e6e6e
- **Gray background**: #e7f2fd
- **White**: #ffffff
- **Dark/overlay**: #000000
- **Border**: #e5e5e5
- **Secondary**: #a6a6a6
- **Fonts**: Open Sans (body) + Oswald (headings) via Google Fonts

## Requirements

### Requirement: Navbar renders with brand and navigation links

The template SHALL display a sticky navbar with the OnAir brand logo and navigation
links for Home, Shows, Charts, Podcasts, Events, and Blog.

#### Scenario: Navbar displays brand and all nav links

- **WHEN** the page loads
- **THEN** the navbar shows the "OnAir" brand link
- **AND** navigation links include Home, Shows, Charts, Podcasts, Events, Blog

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu becomes visible
- **AND** clicking the toggle again hides the menu

### Requirement: Hero section displays with CTA

The template SHALL display a full-width hero section with a background image,
main headline, subtitle, and a "Book Now" call-to-action button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the heading "Designed For Music, Engineered to Last" is visible
- **AND** a "Book Now" button links to the charts section

### Requirement: Blog section shows featured and trending posts

The template SHALL display a two-column blog section with a featured post,
small posts, and a trending sidebar.

#### Scenario: Blog section renders posts

- **WHEN** the page loads
- **THEN** the "Blog New" heading is visible
- **AND** the featured post title is displayed
- **AND** small blog post titles are displayed
- **AND** trending post titles are displayed

### Requirement: Music charts section shows track listings

The template SHALL display a dark overlay section with music track listings
including thumbnails, titles, artists, and price buttons.

#### Scenario: Music charts renders tracks

- **WHEN** the page loads
- **THEN** the "Music Chart" heading is visible
- **AND** track titles and price buttons are displayed

### Requirement: Trending video section renders

The template SHALL display a video section with a featured video area
and a grid of video thumbnails.

#### Scenario: Trending video renders posts

- **WHEN** the page loads
- **THEN** the "Trending Video" heading is visible
- **AND** video post titles are displayed

### Requirement: App download section renders

The template SHALL display a dark overlay section with app download
information and store buttons.

#### Scenario: App download renders content

- **WHEN** the page loads
- **THEN** the "Radio Music" heading is visible
- **AND** download description text is present
- **AND** Google Play and App Store buttons are shown

### Requirement: Weekly schedule table renders

The template SHALL display a responsive schedule table with day columns
and show listings.

#### Scenario: Weekly schedule renders table

- **WHEN** the page loads
- **THEN** the "Weekly Schedule" heading is visible
- **AND** a table with day column headers is shown
- **AND** show names and times are displayed

### Requirement: Latest news section renders

The template SHALL display a grid of news posts with background images
and overlay text.

#### Scenario: Latest news renders posts

- **WHEN** the page loads
- **THEN** the "Latest News" heading is visible
- **AND** news post titles are displayed

### Requirement: Footer contains Component Dock link

The template SHALL display a footer with brand, contact info, social feeds,
and a copyright bar linking to Component Dock.

#### Scenario: Footer credits Component Dock

- **WHEN** the page loads
- **THEN** the footer shows a "Component Dock" link
- **AND** the link points to https://www.componentdock.com/

# Template: Alleluia (Church Website)

## Purpose

Alleluia is a single-page church website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Mimosan" design (see TEMPLATES.md, Church category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern church community page with a crimson red (#b10707) and white identity: a fixed top bar with social links, a white header with "Alleluia" logo in serif font and nav links (Sermons, Events, Contact), a fullscreen hero with background image and "Our lives in praising God" headline with a CTA button, a two-column About section with image and description, an Events section with date badges and event cards, a three-column Sermons grid with images and preacher info, a nine-image Gallery grid, and a three-column dark footer with contact info, quick links, newsletter subscribe form, and a "Component Dock" attribution link. Alleluia recreates that structure section-for-section with matching layout, colors, typography, and content types (no ColorLib assets copied).

## Requirements

### Requirement: Navbar renders with logo and navigation

The template SHALL display a fixed navigation bar with the logo "Alleluia" in serif font, desktop navigation links (Sermons, Events, Contact), a search button, a mobile hamburger toggle, and a top bar with social links (Facebook, Twitter, Instagram).

#### Scenario: Desktop navigation displays all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the logo "Alleluia" is visible
- **AND** the nav links "Sermons", "Events", "Contact" are visible with correct anchor hrefs

#### Scenario: Mobile menu toggles on click

- **WHEN** the user clicks the hamburger toggle button
- **THEN** the mobile menu expands showing all nav links
- **AND** clicking a mobile nav link closes the menu

#### Scenario: Search button is present

- **WHEN** the page renders
- **THEN** a search button with aria-label "Search" is visible

### Requirement: Hero section displays fullscreen background with CTA

The template SHALL display a fullscreen hero section with a background image, a heading "Our lives in praising God", descriptive subtext, and a "Discover More" CTA button linking to the About section.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the h1 heading contains "Our lives in praising God"
- **AND** a CTA button "Discover More" links to "#about"

#### Scenario: Hero has background image

- **WHEN** the page loads
- **THEN** a div with background-image style is present covering the viewport

### Requirement: About section shows church description

The template SHALL display a two-column About section with a placeholder image, a heading "Who We Are", descriptive paragraphs, and a "Learn More" CTA button.

#### Scenario: About section renders correctly

- **WHEN** the page loads
- **THEN** the heading "Who We Are" is visible
- **AND** a placeholder image with alt text "Church community" is displayed
- **AND** a CTA button "Learn More" links to "#contact"

### Requirement: Events section shows upcoming events

The template SHALL display an Events section with at least 3 event cards, each showing a date badge (day + month), title, description, time, and location with icons.

#### Scenario: Events render with all data

- **WHEN** the page loads
- **THEN** the heading "Upcoming Events" is visible
- **AND** at least 3 event cards are displayed with titles
- **AND** each card shows a date badge and time/location info

### Requirement: Sermons section shows recent sermons

The template SHALL display a Sermons section with 3 sermon cards in a grid, each showing an image, title, preacher name, and date.

#### Scenario: Sermons render with all data

- **WHEN** the page loads
- **THEN** the heading "Recent Sermons" is visible
- **AND** 3 sermon cards are displayed with titles, preacher names, and images

### Requirement: Gallery section shows image grid

The template SHALL display a Gallery section with a 3x3 grid of images linking to full-size versions.

#### Scenario: Gallery renders 9 images

- **WHEN** the page loads
- **THEN** the heading "Our Gallery" is visible
- **AND** 9 images are displayed in a grid
- **AND** each image links to a full-size version in a new tab

### Requirement: Footer includes Component Dock link

The template SHALL display a dark footer with contact information, quick links, a newsletter subscribe form, and a "Component Dock" attribution link to https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible
- **AND** the link opens in a new tab

#### Scenario: Footer newsletter form works

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form submits and the email field is cleared

#### Scenario: Footer shows contact info

- **WHEN** the page loads
- **THEN** contact details (address, phone, email) are visible

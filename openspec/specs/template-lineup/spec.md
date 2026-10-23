# Template: Lineup (Event)

Recreation of ColorLib "Agenda" (https://colorlib.com/wp/template/agenda/).

## Purpose

Lineup is an event calendar and concert listing landing page template. It provides a hero with countdown, event showcases, regional event browsing with location filtering, and newsletter signup — styled with a purple gradient brand palette.

## Requirements

### Requirement: Navbar with navigation and CTA

The template SHALL render a fixed navigation bar with logo, nav links (Home, About us, Events, News, Contact), and a "Buy Tickets" gradient CTA button. The navbar SHALL scroll from transparent to white with shadow. The navbar SHALL include a hamburger menu toggle for mobile viewports that opens/closes the mobile nav.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the "Lineup" logo, all five nav links, and the "Buy Tickets" CTA

#### Scenario: Mobile hamburger menu toggle

- **WHEN** the hamburger button is clicked on a mobile viewport
- **THEN** the mobile navigation menu opens with all nav links visible
- **AND** clicking a nav link closes the menu

#### Scenario: Navbar scroll effect

- **WHEN** the user scrolls past 50px
- **THEN** the navbar background changes from transparent to white with a shadow

### Requirement: Hero section with countdown

The template SHALL render a full-width hero section with a background image, a countdown display (Days, Hours, Minutes, Seconds), a heading "We have the best events. Get your ticket now!", and an "Order here" gradient CTA button. Slide navigation arrows SHALL be present.

#### Scenario: Hero displays countdown and heading

- **WHEN** the page loads
- **THEN** the hero section shows countdown values and the main heading

#### Scenario: Hero CTA is clickable

- **WHEN** the user clicks "Order here"
- **THEN** the link is activated (href="#")

### Requirement: About section

The template SHALL render a two-column about section with an illustration image on the left, a heading "What is Lineup and why choose our services?", a description paragraph, and two CTA buttons ("Read More" gradient and "Register Now" dark).

#### Scenario: About section renders content

- **WHEN** the page loads
- **THEN** the about section displays the heading, description, and both CTA buttons

### Requirement: Featured events grid

The template SHALL render a grid of event cards with images, titles, and dates. Cards SHALL use a mix of full-width and half-width layouts. Each card SHALL have a hover zoom effect on the image.

#### Scenario: Featured events displays all cards

- **WHEN** the page loads
- **THEN** all featured event cards are rendered with images, titles, and dates

### Requirement: Next events section

The template SHALL render an "Our next events" section with a heading, description, and three event cards. Each card SHALL display an image, rating badge, title, date, description, and "Buy Tickets" link.

#### Scenario: Next events displays cards with ratings

- **WHEN** the page loads
- **THEN** three event cards are rendered with rating badges, titles, and Buy Tickets links

### Requirement: Regional events section

The template SHALL render an "Events in [Location]" section with a location dropdown selector, a horizontal event slider with overlay links, and a partners section with partner name badges. Changing the location dropdown SHALL update the heading.

#### Scenario: Location dropdown updates heading

- **WHEN** the user selects a different location from the dropdown
- **THEN** the heading updates to show the selected location name

#### Scenario: Regional events renders slider and partners

- **WHEN** the page loads
- **THEN** event cards and partner badges are displayed

### Requirement: Newsletter subscription form

The template SHALL render a newsletter section with a heading, subtitle, and a form with Name input, Email input, and Subscribe gradient button. Form submission SHALL be prevented (no page reload).

#### Scenario: Newsletter form accepts input

- **WHEN** the user types into the name and email fields
- **THEN** the input values are updated

#### Scenario: Newsletter form submission

- **WHEN** the user clicks the Subscribe button
- **THEN** the form submission is prevented (e.preventDefault)

### Requirement: Footer with Component Dock link

The template SHALL render a footer with logo, navigation links, copyright text with a "Component Dock" link (https://www.componentdock.com/), and social media icons (Twitter/X, Instagram, LinkedIn, Facebook).

#### Scenario: Footer renders Component Dock attribution

- **WHEN** the page loads
- **THEN** the footer displays a link to https://www.componentdock.com/ branded as "Component Dock"

#### Scenario: Footer renders social icons

- **WHEN** the page loads
- **THEN** social media icons for Twitter, Instagram, LinkedIn, and Facebook are rendered with accessible labels

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lineup/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lineup/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

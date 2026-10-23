# template-loop

Recreation of ColorLib "Repeat" (https://colorlib.com/wp/template/repeat/).

## Purpose

Loop is a digital agency landing page template recreating the ColorLib "Repeat" design. It features a dark navy + coral palette, Comfortaa display font, service slider, stat counters, and a three-column footer with Component Dock branding.

## Design reference (replication findings)

- **Source:** ColorLib "Repeat" — https://colorlib.com/wp/template/repeat/
- **Source slug:** `repeat`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/repeat/ — **HTTP 200**, 21,132 B, fetched 2026-10-23 (page `<title>`: "Repeat — Free Bootstrap 5 Website Template by Colorlib"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/repeat/css/style.css`, fetched 2026-10-23): brand `#ff8e71`, `#003a70`, `#dc3545`, `#ff997f`; dominant neutrals `#212529`, `#6c757d`, `#f8f9fa`; type Comfortaa, Roboto. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/repeat-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/loop` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navbar renders all navigation links

The navbar SHALL display the "Loop" logo and desktop navigation links (Home, Services, Pricing, About, Contact Us). On mobile it SHALL show a hamburger toggle.

#### Scenario: Desktop nav renders all links

- **GIVEN** the Loop template is loaded on a desktop viewport
- **THEN** the navbar shows "Loop" logo
- **AND** desktop nav has Home, Services, Pricing, About, Contact Us links

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is mobile
- **WHEN** I click the hamburger button
- **THEN** the mobile menu opens
- **AND** the button shows "Close menu"

### Requirement: Hero section displays headline and CTA

The hero section SHALL display a background image with dark overlay, the heading "We are pretty Awesome", descriptive subtext, and a "Our Services" CTA link.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the Loop template is loaded
- **THEN** the hero shows heading "We are pretty Awesome"
- **AND** a "Our Services" link pointing to #services

### Requirement: About section shows company description

The about section SHALL display "About Us" subheading, a heading, an image, and descriptive text with a coral left border.

#### Scenario: About section renders all content

- **GIVEN** the Loop template is loaded
- **THEN** the about section shows "About Us" subheading
- **AND** a heading "We are here to help grow your business"
- **AND** an image and descriptive paragraphs

### Requirement: Services slider navigates between services

The services section SHALL display a service slider with 4 services (Web Design, Graphic Design, Web/Mobile Application, Brand Identity) and prev/next navigation.

#### Scenario: Services slider shows initial service

- **GIVEN** the services section is visible
- **THEN** "What We Offer" heading is shown
- **AND** the first service "Web Design" is displayed

#### Scenario: Next service navigation

- **WHEN** I click "Next service"
- **THEN** the displayed service changes to "Graphic Design"

#### Scenario: Previous service navigation

- **WHEN** I click "Previous service"
- **THEN** the previous service "Brand Identity" is shown

#### Scenario: Dot indicator navigation

- **WHEN** I click the third dot indicator
- **THEN** "Web/Mobile Application" is displayed

### Requirement: Stats section displays four counters

The stats section SHALL display four stat counters: Projects (230), Happy Clients (229), Leadership (8), Years Experience (15).

#### Scenario: Stats render all counters

- **GIVEN** the stats section is visible
- **THEN** it shows Projects: 230, Happy Clients: 229, Leadership: 8, Years Experience: 15

### Requirement: Media section shows heading and images

The media section SHALL display "Get anything done in one place" heading, description text, a CTA link, and two images.

#### Scenario: Media section renders all content

- **GIVEN** the media section is visible
- **THEN** heading "Get anything done in one place" is shown
- **AND** a "Our Services" link pointing to #contact
- **AND** two images are displayed

### Requirement: Footer contains contact info and Component Dock link

The footer SHALL display Contact info, Sources links, Links + social icons, and a copyright line with a Component Dock link.

#### Scenario: Footer renders all sections

- **GIVEN** the footer is visible
- **THEN** Contact section shows address, phone, email
- **AND** Sources section shows navigation links
- **AND** Links section shows social icons (Instagram, Twitter, Facebook, LinkedIn)
- **AND** copyright includes a link to componentdock.com

### Requirement: App renders all sections

The App component SHALL compose all sections in order: Navbar, Hero, About, Services, Stats, Media, Footer.

#### Scenario: All sections are present

- **GIVEN** the Loop template is loaded
- **THEN** all main sections are rendered in the correct order

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/loop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/loop/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

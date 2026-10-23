---
name: curate
description: Creative portfolio showcase template — recreation of ColorLib "Portfolio" (https://colorlib.com/wp/template/portfolio/)
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
---

# Template: Curate (Creative)

## Purpose

Curate is a multi-section portfolio/creative agency landing page. It showcases filterable portfolio work, services, and client testimonials. Recreation of ColorLib "Portfolio" under a new name with the same section structure and visual design.

## Requirements

### Requirement: Navbar with navigation links

The template SHALL display a fixed navigation bar with brand name and links to all sections.

#### Scenario: Desktop navbar renders all links

- **GIVEN** the page loads on a desktop viewport
- **WHEN** the navbar renders
- **THEN** it shows the brand name "Curate" and links for Home, Portfolio, Services, and Testimonial

#### Scenario: Mobile menu toggle works

- **GIVEN** the page loads on a mobile viewport
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu opens with all nav links visible
- **WHEN** the user taps a nav link
- **THEN** the mobile menu closes

### Requirement: Hero section with CTA

The template SHALL display a full-viewport hero with dark overlay, headline text, and a green CTA button.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the page loads
- **WHEN** the hero section renders
- **THEN** it shows the subtitle "Now you can watch the Talent", the heading "Let's Explore Idea!", and an "Explore Now" button linking to #portfolio

### Requirement: Filterable portfolio grid

The template SHALL display a 3-column grid of portfolio items with category filter buttons.

#### Scenario: All items displayed by default

- **GIVEN** the portfolio section loads
- **WHEN** no filter is selected
- **THEN** all 12 portfolio items are visible

#### Scenario: Filter by category

- **GIVEN** the portfolio grid is visible
- **WHEN** the user clicks the "Vector" filter button
- **THEN** only Vector items are displayed
- **WHEN** the user clicks "All"
- **THEN** all items are displayed again

### Requirement: Services section

The template SHALL display a dark overlay banner followed by 3 service cards with icons and descriptions.

#### Scenario: Services banner and cards render

- **GIVEN** the services section loads
- **WHEN** the section renders
- **THEN** a dark overlay banner with "This is what we can do for you" heading appears
- **AND** 3 service cards (Vector Artworks, Corporate Identity, Art Direction Design) appear with icons and descriptions

### Requirement: Testimonials section

The template SHALL display 4 customer testimonials in a 2-column grid.

#### Scenario: Testimonials render with ratings

- **GIVEN** the testimonials section loads
- **WHEN** the section renders
- **THEN** 4 testimonials appear with avatar, name, star rating, and review text

### Requirement: Footer with Component Dock link

The template SHALL display a footer with About Us, Newsletter signup, and social links. It MUST link to componentdock.com.

#### Scenario: Footer renders all columns

- **GIVEN** the footer loads
- **WHEN** the footer renders
- **THEN** it shows About Us text, Newsletter form with email input and subscribe button, and Follow Us social links
- **AND** it links to https://www.componentdock.com/ branded "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/curate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/curate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation links — it shows the brand name "Curate" and links for Home, Portfolio, Services, and Testimonial
- [ ] Hero section with CTA — it shows the subtitle "Now you can watch the Talent", the heading "Let's Explore Idea!", and an "Explore Now" button linking to #portfolio
- [ ] Filterable portfolio grid — all 12 portfolio items are visible
- [x] Services section — a dark overlay banner with "This is what we can do for you" heading appears
- [ ] Testimonials section — 4 testimonials appear with avatar, name, star rating, and review text

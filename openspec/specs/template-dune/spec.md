# Template: Dune (Travel Agency Landing Page)

> Recreation of ColorLib "Safario" (https://colorlib.com/wp/template/safario/)
> Preview: https://preview.colorlib.com/theme/safario/

## Purpose

Dune is a travel agency landing page with a navbar, hero banner, services, about band, tours, testimonials, search package, blog and footer. It recreates the ColorLib **Safario** design (https://colorlib.com/wp/template/safario/, preview: https://preview.colorlib.com/theme/safario/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

A travel agency landing page with a transparent navbar over a hero banner,
services section, about section, tour cards with pricing overlays, testimonials
carousel, search package form, blog cards, and a multi-column footer.

## Design Tokens

- **Fonts:** Roboto (body), Roboto Condensed (headings)
- **Brand color:** #6059f6 (indigo/purple)
- **Brand hover:** #201aa3 (dark indigo)
- **Headings:** #2a2a2a
- **Body text:** #888888
- **Background:** #ffffff (main), #f8f8ff (gray sections)
- **Buttons:** rounded-full, bg brand, white text, hover darker

## Sections (in order)

1. **Navbar** — transparent background, logo "Dune", nav links (Home, About, Packages, Pages, Blog, Contact), "Get Started" CTA button
2. **Hero Banner** — headline "Travel More To Discover Yourself", descriptive text, "Get Started" CTA, travel image on right
3. **Services** — "Our Popular Services" heading, 3 service cards (Hotel Booking, Flight Booking, Destination Booking) with icon, title, description
4. **About** — image left, text right: "Exploration is really the essence of the human spirit", "Learn More" button
5. **Tours** — "We offer worldwide tour plan recently", 4 tour cards with image overlay (name, duration, price), arranged in asymmetric grid
6. **Testimonials** — "Our client says" heading, 3 testimonial cards with photo, name, role, quote
7. **Search Package** — form with text input, category select, tour duration, date, price range, search button
8. **Blog** — "From our Blog" heading, 3 blog cards with image, title, date, comment count, excerpt
9. **Footer** — 4 columns (About, Navigation, Newsletter, InstaFeed), copyright bar with Component Dock link

## Requirements

### Feature: Dune template behaviour

Feature: Dune travel landing page

#### Scenario: Page renders all sections

- **GIVEN** the app loads
- **THEN** the navbar is visible with logo "Dune"
- **AND** the hero section displays "Travel More To Discover Yourself"
- **AND** the services section shows 3 service cards
- **AND** the about section has an image and text
- **AND** the tours section shows 4 tour cards
- **AND** the testimonials section shows client reviews
- **AND** the search package form is present
- **AND** the blog section shows 3 articles
- **AND** the footer links to Component Dock

#### Scenario: Navigation links work

- **GIVEN** the navbar is visible
- **WHEN** I click "About"
- **THEN** the page scrolls to the about section

#### Scenario: Mobile menu toggles

- **GIVEN** the viewport is mobile
- **WHEN** I click the menu button
- **THEN** the mobile menu opens
- **AND** I see all navigation links

#### Scenario: Search form submission

- **GIVEN** the search package form is visible
- **WHEN** I fill in the search field
- **AND** I select a category
- **AND** I click "Search Package"
- **THEN** the form does not reload the page

#### Scenario: Newsletter subscription

- **GIVEN** the footer newsletter form is visible
- **WHEN** I enter a valid email
- **AND** I click subscribe
- **THEN** a success message appears

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is visible
- **THEN** the copyright mentions "Component Dock"
- **AND** the link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/dune/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dune/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Page renders all sections — the navbar is visible with logo "Dune"
- [ ] Navigation links work — the page scrolls to the about section
- [ ] Mobile menu toggles — the mobile menu opens
- [ ] Search form submission — the form does not reload the page
- [ ] Newsletter subscription — a success message appears

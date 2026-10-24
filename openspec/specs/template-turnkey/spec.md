---
name: template-turnkey
description: Turnkey — Real estate website template (recreation of ColorLib Holmes)
---

# Template: Turnkey (Real Estate)

Recreation of [ColorLib Holmes](https://colorlib.com/wp/template/holmes/).
Preview: https://preview.colorlib.com/theme/holmes/

## Purpose

Turnkey is a real estate template with a navbar, hero, properties, city gallery, testimonials, blog and footer. It recreates the ColorLib "Holmes" design (https://colorlib.com/wp/template/holmes/, preview: https://preview.colorlib.com/theme/holmes/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens

- Font: Poppins (300/400/500/600/700)
- Brand: #ea6c5d (coral/salmon)
- Heading: #222222
- Body: #777777
- Selection: #ea6c5d
- Light: #f9f9ff
- **Surface (measured):** `#4cd3e3` — paints it ×7 — `background` on `.genric-btn.success`; main.css (66,389 B, sha256 8a16d766634c) · <https://preview.colorlib.com/theme/holmes/>

## Sections

1. **Navbar** — Top bar (phone, Sell/Rent Property, Login/Register) + sticky main nav (Home, Properties, About, Blog, Contact) + mobile hamburger
2. **Hero** — Full-screen background image with dark overlay, heading "We're Real Estate King", search form with Buy/Rent toggle, location/property type/bedrooms/price selects, search button
3. **Properties** — "Properties in Various Cities" — 3-column grid of property cards (image, For Sale/Rent badge, bed/bath/area, title, price)
4. **CityGallery** — "Find Home in Your City" — asymmetric grid of city images with hover overlay titles
5. **Testimonials** — "Feedback from Our Real Clients" — 3-column grid of client testimonials (avatar, quote, name, role)
6. **Blog** — "Latest Blog Posts" — 3-column grid of blog cards (image, title, excerpt, date/likes/comments)
7. **Footer** — 4-column layout (About Us, Newsletter, Instagram Feed, Follow Us) + footer bottom with Component Dock link

## Requirements

### Feature: Navbar

#### Scenario: Renders logo and navigation links

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** renders logo and navigation links

#### Scenario: Renders top bar with phone and login links

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** renders top bar with phone and login links

#### Scenario: Toggles mobile menu on button click

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** toggles mobile menu on button click

#### Scenario: Closes mobile menu when a link is clicked

- **Given** the page is rendered
- **When** the Navbar is inspected
- **Then** closes mobile menu when a link is clicked

### Feature: Hero

#### Scenario: Renders the main heading

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** renders the main heading

#### Scenario: Renders search form selects

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** renders search form selects

#### Scenario: Renders search button

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** renders search button

#### Scenario: Toggles sell/rent mode on toggle click

- **Given** the page is rendered
- **When** the Hero is inspected
- **Then** toggles sell/rent mode on toggle click

### Feature: Properties

#### Scenario: Renders the section heading

- **Given** the page is rendered
- **When** the Properties is inspected
- **Then** renders the section heading

#### Scenario: Renders property cards with details

- **Given** the page is rendered
- **When** the Properties is inspected
- **Then** renders property cards with details

#### Scenario: Renders badges

- **Given** the page is rendered
- **When** the Properties is inspected
- **Then** renders badges

### Feature: CityGallery

#### Scenario: Renders the section heading

- **Given** the page is rendered
- **When** the CityGallery is inspected
- **Then** renders the section heading

#### Scenario: Renders city images

- **Given** the page is rendered
- **When** the CityGallery is inspected
- **Then** renders city images

### Feature: Testimonials

#### Scenario: Renders the section heading

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** renders the section heading

#### Scenario: Renders testimonial authors

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** renders testimonial authors

#### Scenario: Renders testimonial roles

- **Given** the page is rendered
- **When** the Testimonials is inspected
- **Then** renders testimonial roles

### Feature: Blog

#### Scenario: Renders the section heading

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** renders the section heading

#### Scenario: Renders blog post titles

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** renders blog post titles

#### Scenario: Renders blog metadata

- **Given** the page is rendered
- **When** the Blog is inspected
- **Then** renders blog metadata

### Feature: Footer

#### Scenario: Renders footer sections

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders footer sections

#### Scenario: Renders newsletter form

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders newsletter form

#### Scenario: Renders Component Dock link in footer bottom

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders Component Dock link in footer bottom

#### Scenario: Renders social media links

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** renders social media links

#### Scenario: Handles newsletter form submission

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** handles newsletter form submission

### Feature: App

#### Scenario: Renders all sections

- **Given** the page is rendered
- **When** the App is inspected
- **Then** renders all sections

#### Scenario: Has a skip to main content link

- **Given** the page is rendered
- **When** the App is inspected
- **Then** has a skip to main content link

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/turnkey/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/turnkey/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar — Given** the page is rendered
- [ ] Hero — Given** the page is rendered
- [ ] Properties — Given** the page is rendered
- [ ] CityGallery — Given** the page is rendered
- [ ] Testimonials — Given** the page is rendered
- [ ] Blog — Given** the page is rendered
- [ ] App — Given** the page is rendered

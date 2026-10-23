---
name: Sartorial
description: Men's tailor shop landing page — recreation of ColorLib "Menztailor"
source: https://colorlib.com/wp/template/menztailor/
preview: https://preview.colorlib.com/theme/menztailor/
---

# Template: Sartorial (Men's Tailor Shop)

Recreation of ColorLib "Menztailor" (https://colorlib.com/wp/template/menztailor/).

## Purpose

Sartorial is a men's tailor shop template with a navbar, hero, clients, services, history, testimonials, visit us and footer. It recreates the ColorLib **Menztailor** design (https://colorlib.com/wp/template/menztailor/, preview: https://preview.colorlib.com/theme/menztailor/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (extracted from preview CSS)

- **Fonts:** "Josefin Sans" (headings), "Montserrat" (body), "Great Vibes" (accent/script)
- **Brand color:** #c6a16e (gold)
- **Dark:** #0b1416 (body-bg, navbar, footer)
- **Dark headings:** #0b1c39
- **Body text:** #96989a (muted gray)
- **Button:** gold bg, uppercase, letter-spacing: 3px, border: 1px solid #c6a16e
- **Section backgrounds:** dark (#0b1416) for most sections, white for some

## Sections (in order)

1. **Navbar** — Logo ("Sartorial"), nav links (Home, Services, History, Gallery, Blog, Contact), sticky
2. **Hero** — Full-width slider with 2 slides, large heading + CTA button
3. **Clients** — Partner/client logo strip
4. **Services** — "What We Offer" with 3 cards (measurements, cutting, restoration)
5. **History** — Split layout: video/image left, text + stats right
6. **Testimonials** — Client feedback carousel
7. **VisitUs** — "Visit Our Tailor" with address, hours, map area
8. **Footer** — Dark footer with about, links, newsletter, social, copyright

## Requirements

### Feature: Sartorial

#### Scenario: Renders navbar with logo and navigation links

- **Given** the page is rendered
- **When** the page is inspected
- **Then** it renders navbar with logo and navigation links

#### Scenario: Hero section displays headline and CTA button

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Hero section displays headline and CTA button

#### Scenario: Services section shows 3 offering cards

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Services section shows 3 offering cards

#### Scenario: History section shows stats

- **Given** the page is rendered
- **When** the page is inspected
- **Then** History section shows stats

#### Scenario: Testimonials section shows client quotes

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Testimonials section shows client quotes

#### Scenario: Footer links to Component Dock

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Footer links to Component Dock

#### Scenario: All sections render without errors

- **Given** the page is rendered
- **When** the page is inspected
- **Then** all sections render without errors

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
`apps/sartorial/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sartorial/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

# Template: Launchpad (Business)

## Purpose

Launchpad is a business landing page with a navbar, hero banner, services, about video, about support, portfolio, call to action and pricing. It recreates the ColorLib **Startup** design (https://colorlib.com/wp/template/startup/, preview: https://preview.colorlib.com/theme/startup/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Metadata

- **Name:** Launchpad
- **ColorLib Original:** Startup (https://colorlib.com/wp/template/startup/)
- **Preview URL:** https://preview.colorlib.com/theme/startup/
- **Category:** SaaS / Startup Landing

## Design Tokens (extracted from preview)

- **Brand color:** #df003a (red)
- **Accent teal:** #4cd3e3
- **Accent blue:** #38a4ff
- **Font family:** Poppins (Google Fonts)
- **Body text:** #777777
- **Headings:** #222222
- **Section backgrounds:** alternating white (#fff) and surface (#f9f9ff)
- **CTA button:** brand red background, white text, rounded
- **Dark sections:** dark gray overlay on brand color for CTA; dark footer

## Section Structure (in order)

1. **Navbar** — Logo + nav links (Home, We Offer, About, Project, Price) + Get Started CTA
2. **Hero/Banner** — Full-height gradient background, heading "All you want is here", subtitle, two CTA buttons
3. **Services (We Offer)** — 2x2 grid of icon + title + description cards (4 items)
4. **About Video** — Split layout: text left, video thumbnail with play button right
5. **About Support** — Split layout reversed: image left, text right on dark background
6. **Portfolio** — 3-column masonry-style grid of 6 project images with hover expand overlay
7. **Call to Action** — Full-width brand red section with heading, description, and CTA button
8. **Pricing** — 3 pricing cards (Standard, Business, Ultimate) with features list and purchase button
9. **Testimonials** — 3-column grid of client testimonial cards with avatar, quote, star rating
10. **Blog** — 2-column grid of blog post cards with image, tags, title, excerpt, date
11. **Footer** — 3-column: Top Products links, Newsletter form, Latest Updates images; bottom bar with Component Dock link + social icons

## Requirements

### Feature: Launchpad

#### Scenario: GHERKIN: App renders with correct title

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: App renders with correct title

#### Scenario: GHERKIN: All sections are present in the main landmark

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: All sections are present in the main landmark

#### Scenario: GHERKIN: Navbar toggles mobile menu

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Navbar toggles mobile menu

#### Scenario: GHERKIN: Footer links to Component Dock

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Footer links to Component Dock

#### Scenario: GHERKIN: Pricing shows three plans with correct names and prices

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Pricing shows three plans with correct names and prices

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
`apps/launchpad/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/launchpad/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] GHERKIN: App renders with correct title — Given** the page is rendered
- [ ] GHERKIN: All sections are present in the main landmark — Given** the page is rendered
- [ ] GHERKIN: Navbar toggles mobile menu — Given** the page is rendered
- [ ] GHERKIN: Pricing shows three plans with correct names and prices — Given** the page is rendered

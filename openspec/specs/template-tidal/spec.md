---
name: Tidal
description: Travel agency landing page — recreation of ColorLib "Pacific" (https://colorlib.com/wp/template/pacific/)
stack: React 19 + Vite + Tailwind CSS 4 + TypeScript
---

# Tidal — Travel Agency Landing Template

**Source:** ColorLib "Pacific" — https://colorlib.com/wp/template/pacific/
**Preview:** https://preview.colorlib.com/theme/pacific/

## Purpose

Tidal is a travel agency landing template with a navbar, hero, search bar, services, destination select, tour packages, about band and testimonials. It recreates the ColorLib **Pacific** design (https://colorlib.com/wp/template/pacific/, preview: https://preview.colorlib.com/theme/pacific/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (from CSS analysis)

| Token          | Value                      | Notes                            |
| -------------- | -------------------------- | -------------------------------- |
| Brand color    | `#f15d30` (orange-red)     | CTA buttons, accents, highlights |
| Primary blue   | `#007bff`                  | Secondary actions, links         |
| Font family    | Poppins, Arial, sans-serif | Google Fonts via `<link>`        |
| Dark bg        | `#33313b`                  | Footer, dark sections            |
| Text primary   | `#212529`                  | Headings, body text              |
| Text secondary | `#6c757d`                  | Subtitles, descriptions          |
| Light bg       | `#e9ecef`                  | Alternating section backgrounds  |
| White          | `#fff`                     | Cards, primary backgrounds       |

## Sections (in order)

1. **Navbar** — Logo "Tidal", links: Home, About, Destination, Tour, Blog, Contact; transparent over hero, solid on scroll
2. **Hero** — Full-height background image, heading "Discover Your Favorite Place with Us", subtitle "Travel to any corner of the world, without going around in circles", CTA "Search Destination"
3. **Search Bar** — Pill/tabbed search (Tour | Hotel | Destination) with check-in date, check-out date, price range slider, search button
4. **Services** — "It's time to start your adventure" + 4 icon cards: Activities, Travel Arrangements, Private Guide, Location Manager
5. **Destination Select** — Parallax background, "Select Your Destination", grid of 5 country cards: Philippines, Canada, Thailand, Australia, Greece with images
6. **Tour Packages** — Grid of tour cards with image, duration, title, location, icon stats (group size, duration), price
7. **About (Parallax)** — Background image with overlay text
8. **About Us** — "Make Your Tour Memorable and Safe With Us", content + stats/feature list
9. **Testimonials** — "Tourist Feedback" on parallax background, carousel/card of reviews
10. **Blog** — Recent posts grid (3 cards with image, date, title, excerpt)
11. **Footer CTA** — "We Are Tidal, A Travel Agency" intro banner
12. **Footer** — 4-column: About text, Information links, Customer Care links, Contact info + Component Dock attribution

## Fidelity Rules

- Match section order 1:1 with the original
- Use `#f15d30` as primary brand color in `@theme`
- Use Poppins font via Google Fonts `<link>` in index.html
- Placeholder images via `picsum.photos/seed/tidal-<n>/<w>/<h>`
- Icons via `lucide-react`
- Footer links to `https://www.componentdock.com/` (branded "Component Dock")
- No ColorLib references in app source code

## Requirements

### Feature: Navigation

#### Scenario: I see "Tidal" logo and links: Home, About, Destination, Tour, Blog,…

- **Given** the page loads,
- **When** I look at the navbar,
- **Then** I see "Tidal" logo and links: Home, About, Destination, Tour, Blog, Contact

#### Scenario: It has a solid background

- **Given** I scroll down,
- **When** the navbar becomes sticky,
- **Then** it has a solid background

### Feature: Hero

#### Scenario: I see heading "Discover Your Favorite Place with Us" with a CTA button

- **Given** I land on the page,
- **When** I see the hero section,
- **Then** I see heading "Discover Your Favorite Place with Us" with a CTA button

### Feature: Search

#### Scenario: The active tab highlights

- **Given** I see the search bar,
- **When** I click Tour/Hotel/Destination tabs,
- **Then** the active tab highlights

#### Scenario: I see date inputs and a search button

- **Given** I see the search form,
- **When** I view it,
- **Then** I see date inputs and a search button

### Feature: Services

#### Scenario: I see 4 service cards with icons

- **Given** I scroll to services,
- **When** I see the section,
- **Then** I see 4 service cards with icons

### Feature: Destinations

#### Scenario: I see 5 country cards with images and names

- **Given** I scroll to destinations,
- **When** I see the grid,
- **Then** I see 5 country cards with images and names

### Feature: Tour Packages

#### Scenario: I see tour cards with price, duration, and location

- **Given** I scroll to tours,
- **When** I see the grid,
- **Then** I see tour cards with price, duration, and location

### Feature: About

#### Scenario: I see "Make Your Tour Memorable and Safe With Us" heading with…

- **Given** I scroll to about,
- **When** I see the section,
- **Then** I see "Make Your Tour Memorable and Safe With Us" heading with descriptive text

### Feature: Testimonials

#### Scenario: I see review cards with names and quotes

- **Given** I scroll to testimonials,
- **When** I see the section,
- **Then** I see review cards with names and quotes

### Feature: Blog

#### Scenario: I see 3 blog post cards with dates and titles

- **Given** I scroll to blog,
- **When** I see the section,
- **Then** I see 3 blog post cards with dates and titles

### Feature: Footer

#### Scenario: I see 4 columns of links and a "Component Dock" attribution link

- **Given** I reach the footer,
- **When** I look at it,
- **Then** I see 4 columns of links and a "Component Dock" attribution link

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

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

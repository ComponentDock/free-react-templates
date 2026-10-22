# Spec: Propwell — Real Estate Landing Page

Recreation of ColorLib [Leramiz](https://colorlib.com/wp/template/leramiz/).

## Purpose

Propwell is a real estate landing page with a header bar, hero, filter bar, recent properties, services, featured listings and looking property. It recreates the ColorLib **Leramiz** design (https://colorlib.com/wp/template/leramiz/, preview: https://preview.colorlib.com/theme/leramiz/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (from CSS analysis)

| Token       | Value           | Usage                        |
| ----------- | --------------- | ---------------------------- |
| Brand teal  | `#30caa0`       | Buttons, accents, price text |
| Dark text   | `#252525`       | Headings, body               |
| Gray text   | `#707070`       | Secondary text               |
| Dark bg     | `#324a4e`       | Services, footer backgrounds |
| Font family | Source Sans Pro | Body and headings            |

## Sections (in page order)

1. **Header** — Top bar (phone, email, social icons, register/login links) + sticky navbar (logo, nav links: Home, Featured Listing, About Us, Pages, Blog, Contact).
2. **Hero** — Full-width background image with headline "Find your place with our local life style", description, and CTA button "VIEW DETAIL".
3. **Filter Bar** — Search form with text input, city dropdown, state dropdown, SEARCH button. Overlaps hero section bottom.
4. **Recent Properties** — 2x2 grid of property cards with background image, sale/rent badge, address, location, price.
5. **Services** — Split layout: left image, right list of 3 services (Consultant Service, Properties Management, Renting and Selling) with icons and descriptions. Dark background.
6. **Featured Listings** — 3-column grid of detailed property cards with image, badge, address, room info (sqft, bedrooms, garages, bathrooms), agent name, time posted, price.
7. **Looking Property** — 4-column grid of category images (Apartment, Family Home, Resort Villas, Office Building) with titles.
8. **Popular Places** — Masonry-style gallery of location cards (New York, Florida, San Jose, St Louis) with property counts.
9. **Reviews** — Carousel of testimonial cards with star ratings, quote, author name, title, and circular avatar. Dark parallax background.
10. **Latest News** — 3-column blog cards with image, title, author/date meta, excerpt.
11. **Partners** — Logo carousel strip.
12. **Footer** — 4-column: logo + description + social icons, contact info, popular places links, newsletter signup. Bottom bar with nav links and copyright ("Made with Component Dock").

## Requirements

### Feature: Header

Top bar (phone, email, social icons, register/login links) + sticky navbar (logo, nav links: Home, Featured Listing, About Us, Pages, Blog, Contact).

#### Scenario: Header renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Header band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Hero

Full-width background image with headline "Find your place with our local life style", description, and CTA button "VIEW DETAIL".

#### Scenario: Hero renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Hero band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Filter Bar

Search form with text input, city dropdown, state dropdown, SEARCH button. Overlaps hero section bottom.

#### Scenario: Filter Bar renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Filter Bar band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Recent Properties

2x2 grid of property cards with background image, sale/rent badge, address, location, price.

#### Scenario: Recent Properties renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Recent Properties band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Services

Split layout: left image, right list of 3 services (Consultant Service, Properties Management, Renting and Selling) with icons and descriptions. Dark background.

#### Scenario: Services renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Services band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Featured Listings

3-column grid of detailed property cards with image, badge, address, room info (sqft, bedrooms, garages, bathrooms), agent name, time posted, price.

#### Scenario: Featured Listings renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Featured Listings band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Looking Property

4-column grid of category images (Apartment, Family Home, Resort Villas, Office Building) with titles.

#### Scenario: Looking Property renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Looking Property band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Popular Places

Masonry-style gallery of location cards (New York, Florida, San Jose, St Louis) with property counts.

#### Scenario: Popular Places renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Popular Places band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Reviews

Carousel of testimonial cards with star ratings, quote, author name, title, and circular avatar. Dark parallax background.

#### Scenario: Reviews renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Reviews band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Latest News

3-column blog cards with image, title, author/date meta, excerpt.

#### Scenario: Latest News renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Latest News band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Partners

Logo carousel strip.

#### Scenario: Partners renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Partners band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Footer

4-column: logo + description + social icons, contact info, popular places links, newsletter signup. Bottom bar with nav links and copyright ("Made with Component Dock").

#### Scenario: Footer renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Footer band SHALL be present at its documented position with the structure, copy and tokens named above

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

---
template: dwelling
source: https://colorlib.com/wp/template/aler/
preview: https://preview.colorlib.com/theme/aler/
name: Dwelling
description: Real estate landing page template
category: Real Estate
---

# Template: Dwelling (Real Estate)

## Purpose

Dwelling is a one-page real estate landing page template, recreating the ColorLib "Aler" design (https://colorlib.com/wp/template/aler/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. It provides a complete property listing experience with search, featured properties, agent profiles, categories, testimonials, and contact form.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/aler/ (HTTP 200, 65,917 B, fetched 2026-10-23) and its theme stylesheet `theme/aler/css/style.css` (84,143 B, sha256 `6ff7c5cbee5b…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#00c89e` | 55 declarations — `.section-title h4:after`, `.section-title h5:after` |
| Other chromatic values | `#103230`, `#00c8a0`, `#0166d0` | `#103230` × 4 (.property-item .pi-pic .label.c-magenta); `#00c8a0` × 3 (.hs-top .ht-widget ul li i); `#0166d0` × 2 (.property-item .pi-pic .label) |
| Surface | `#ffffff` | 77 declarations — `.primary-btn`, `a:hover` |
| Ink / dark surface | `#111111` | 71 declarations — `h1`, `h2` |
| Typeface | `"ElegantIcons"` (5 rules — .more-option .card-heading a:after)<br>`"Lato", sans-serif` (4 rules — .section-title.sidebar-title h5) | `font-family` declarations in the theme sheet |
| Radii | `50%`, `2px`, `60px` | `50%` (.hs-slider.owl-carousel .owl-nav button); `2px` (.more-option .card .card-body .mo-list .ml-column label .checkbox); `60px` (.loader) |

Palette in order of use: `#ffffff` ×77, `#111111` ×71, `#00c89e` ×55, `#666666` ×38, `#e1e1e1` ×11, `#f5f5f5` ×10.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Full-page layout with navigation and footer

The template SHALL render a sticky navbar with logo, navigation links, and a CTA button. The footer SHALL link to https://www.componentdock.com/ and include quick links, useful links, and contact info.

#### Scenario: Navbar renders with all links

- **WHEN** the page loads
- **THEN** the navbar displays the logo "Dwelling"
- **AND** navigation links for Home, Properties, Agents, About, Blog, Contact are visible
- **AND** a "Submit Property" CTA button is shown

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Requirement: Hero carousel with property showcase

The hero section SHALL display a full-width carousel with property slides containing name, price, location, and navigation controls.

#### Scenario: Hero displays first property

- **WHEN** the page loads
- **THEN** the first property name, price, and location are visible

#### Scenario: Hero carousel navigation

- **WHEN** the user clicks the next arrow
- **THEN** the slide changes to the next property
- **WHEN** the user clicks the previous arrow
- **THEN** the slide changes to the previous property

### Requirement: Property search functionality

The search bar SHALL provide location input, property type, city, and price range filters with a search button.

#### Scenario: Search form renders all filters

- **WHEN** the page loads
- **THEN** a location input, property type dropdown, city dropdown, price range dropdown, and search button are visible

### Requirement: Property listings display

The latest properties section SHALL show a grid of property cards with images, labels, agent names, addresses, bed/bath counts, and prices.

#### Scenario: Property cards render correctly

- **WHEN** the page loads
- **THEN** 6 property cards are displayed with names, prices, and bed/bath counts

#### Scenario: Property card interaction

- **WHEN** the user views a property card
- **THEN** a heart/save button is visible for each card

### Requirement: Why Choose Us features

The Why Choose Us section SHALL display 4 feature cards on a dark background with icons and descriptions.

#### Scenario: Feature cards render

- **WHEN** the page loads
- **THEN** 4 feature cards are displayed with titles: "Find your future home", "Buy or rent homes", "Experienced agents", "List your own property"

### Requirement: Featured properties

The featured properties section SHALL show 4 featured property cards with images, prices, and details.

#### Scenario: Featured property cards render

- **WHEN** the page loads
- **THEN** 4 featured property cards are displayed with names, prices, and bed/bath counts

### Requirement: Agent profiles

The team section SHALL display 3 agent cards with photos, names, roles, and social media links.

#### Scenario: Agent cards render

- **WHEN** the page loads
- **THEN** 3 agent cards are displayed with names, roles, and social media link buttons

### Requirement: Property categories

The categories section SHALL show 5 property type categories (Apartment, Villa, House, Restaurant, Office) with icons and counts.

#### Scenario: Category cards render

- **WHEN** the page loads
- **THEN** 5 category cards are displayed with names and property counts

### Requirement: Client testimonials

The testimonials section SHALL display 3 testimonial cards with quotes, star ratings, and author info.

#### Scenario: Testimonial cards render

- **WHEN** the page loads
- **THEN** 3 testimonial cards are displayed with author names, roles, and star ratings

### Requirement: Contact form and info

The contact section SHALL provide contact information (Address, Phone, Support) and a message form with Name, Email, Subject, Message fields and a Send button.

#### Scenario: Contact form submission

- **WHEN** the user fills in the contact form and clicks Send
- **THEN** the form prevents default submission without page reload

#### Scenario: Contact info displays

- **WHEN** the page loads
- **THEN** Address, Phone, and Support contact items are visible with details

### Requirement: Mobile responsive navigation

The navbar SHALL include a hamburger menu toggle for mobile viewports.

#### Scenario: Mobile menu toggle

- **WHEN** the viewport is mobile-sized
- **AND** the user clicks the hamburger button
- **THEN** the mobile navigation menu opens
- **WHEN** the user clicks a navigation link
- **THEN** the menu closes

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/dwelling/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dwelling/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Hero carousel with property showcase — the first property name, price, and location are visible
- [ ] Property search functionality — a location input, property type dropdown, city dropdown, price range dropdown, and search button are visible
- [ ] Property listings display — 6 property cards are displayed with names, prices, and bed/bath counts
- [x] Why Choose Us features — 4 feature cards are displayed with titles: "Find your future home", "Buy or rent homes", "Experienced agents", "List your own property"
- [ ] Featured properties — 4 featured property cards are displayed with names, prices, and bed/bath counts
- [ ] Agent profiles — 3 agent cards are displayed with names, roles, and social media link buttons
- [ ] Property categories — 5 category cards are displayed with names and property counts
- [ ] Client testimonials — 3 testimonial cards are displayed with author names, roles, and star ratings
- [ ] Contact form and info — the form prevents default submission without page reload
- [ ] Mobile responsive navigation — the mobile navigation menu opens

# Template: Nestwell (Real Estate Agency)

Recreation of ColorLib "Homeland" (https://colorlib.com/wp/template/homeland/).

## Purpose

Provide a real estate agency landing page template featuring a hero slider with property details, a property search form, featured properties, about/services sections, customer testimonials, and a full footer with newsletter signup.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/homeland/ (HTTP 200, 48,890 B, fetched 2026-10-23) and its theme stylesheet `theme/homeland/css/style.css` (23,322 B, sha256 `69da8d6699c8…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#1f3c88` | 8 declarations — `.form-control:focus`, `.form-control:active` |
| Surface | `#ffffff` | 27 declarations — `.btn.btn-primary`, `.btn.btn-outline-primary:hover` |
| Ink / dark surface | `#000000` | 12 declarations — `.btn.btn-white.btn-outline-white:hover`, `.text-black` |
| Typeface | `"Nunito Sans", sans-serif` (1 rule — body)<br>`"Roboto Mono", SFMono-Regular` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `line-height: 1.7; color: rgba(0, 0, 0, 0.6); font-weight: 400; font-size: 1rem` | `body{…}` rule |
| Radii | `50%`, `0%`, `4px` | `50%` (.site-mobile-menu .site-nav-wrap .arrow-collapse); `0%` (.slide-one-item.home-slider .owl-prev); `4px` (.property-entry .property-thumbnail .offer-type) |

Palette in order of use: `#ffffff` ×27, `#000000` ×12, `#1f3c88` ×8, `#cccccc` ×3, `#333333` ×2, `#212529` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and CTA

The template SHALL display a fixed dark navbar with the brand name "Nestwell.", navigation links (Home, Properties, Agents, Blog, About, Contact), and a "Get Started" CTA button.

#### Scenario: Desktop navbar renders all links

- **GIVEN** the user views the template on a desktop viewport
- **THEN** the brand "Nestwell." is displayed in the navbar
- **AND** links for Home, Properties, Agents, Blog, About, Contact are visible
- **AND** a "Get Started" button is visible

#### Scenario: Mobile menu toggle

- **GIVEN** the user views the template on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation menu expands showing all links
- **WHEN** the user taps the close button
- **THEN** the mobile menu collapses

### Requirement: Hero section with property showcase

The template SHALL display a full-width hero section with a background property image, dark overlay, headline text, description, and a property details card with specs (area, bedrooms, bathrooms, garage) and a "View Properties" button.

#### Scenario: Hero displays property information

- **GIVEN** the user views the hero section
- **THEN** a property headline is displayed in an h1 heading
- **AND** a property description is shown
- **AND** property details including area, bedrooms, bathrooms, and garage are listed
- **AND** a "View Properties" button is present

### Requirement: Property search form

The template SHALL display a search form with Location (text input), Property Type (select), Property Status (select), Price Limit (select), and a Search button.

#### Scenario: Search form fields are accessible

- **GIVEN** the user views the search form
- **THEN** a Location text input with associated label is present
- **AND** Property Type, Property Status, and Price Limit select dropdowns are present
- **AND** a Search submit button is present

### Requirement: Featured Properties section

The template SHALL display a grid of 5 property cards, each showing an image, sale/rent tag, property name, price, location, and bed/bath information.

#### Scenario: Property cards display correctly

- **GIVEN** the user views the Featured Properties section
- **THEN** 5 property cards are rendered
- **AND** each card shows a price, location, and bed/bath details
- **AND** each card has a Sale or Rent tag

### Requirement: About section with features

The template SHALL display an about section with a background image, heading, description, 4 feature items (Find Your Dream Location, Expert Agents At Your Service, Buy & Rent Premium Homes, Best Value Properties), and a "Learn More" link.

#### Scenario: About section renders features

- **GIVEN** the user views the about section
- **THEN** the heading about discovering properties is displayed
- **AND** 4 feature items with icons are shown
- **AND** a "Learn More" link is present

### Requirement: Services section with property cards

The template SHALL display a services section with two side-by-side image cards (Buying and Renting) with overlay text and "Read more" links.

#### Scenario: Services cards render correctly

- **GIVEN** the user views the services section
- **THEN** "Buying A Property" and "Renting A Property" cards are displayed
- **AND** each card has a "Read more" link

### Requirement: Testimonials section

The template SHALL display a dark-background testimonials section with customer quotes, names, and roles.

#### Scenario: Testimonials render customer feedback

- **GIVEN** the user views the testimonials section
- **THEN** customer names (Sarah Mitchell, James Cooper, Emily Dawson) are displayed
- **AND** each testimonial shows a "Buyer" role
- **AND** quote text is present

### Requirement: Footer with newsletter and Component Dock link

The template SHALL display a dark footer with 5 columns (About, Company, Explore, Get Started, Newsletter), social links, a newsletter email form, and a "Component Dock" branded link.

#### Scenario: Footer contains required elements

- **GIVEN** the user views the footer
- **THEN** a "Component Dock" link points to https://www.componentdock.com/
- **AND** Company, Explore, and Get Started link columns are present
- **AND** a newsletter email input and Subscribe button are present
- **AND** social links (Facebook, Instagram) are present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/nestwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/nestwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation and CTA — the brand "Nestwell." is displayed in the navbar
- [ ] Hero section with property showcase — a property headline is displayed in an h1 heading
- [ ] Property search form — a Location text input with associated label is present
- [ ] Featured Properties section — 5 property cards are rendered
- [ ] About section with features — the heading about discovering properties is displayed
- [ ] Services section with property cards — "Buying A Property" and "Renting A Property" cards are displayed
- [ ] Testimonials section — customer names (Sarah Mitchell, James Cooper, Emily Dawson) are displayed

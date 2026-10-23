# Template: Wanderly (Business)

## Purpose

Wanderly is a travel agency landing template, a React recreation of the ColorLib "Martine" design (https://colorlib.com/wp/template/martine/). It features a top navigation bar, hero banner with gradient overlay, tabbed booking form, destination cards, event showcase, hotel listings, client testimonials, and services section.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/martine/ (HTTP 200, 46,617 B, fetched 2026-10-23) and its theme stylesheet `theme/martine/css/style.css` (150,580 B, sha256 `ee729414faea…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#fe5c24` | 45 declarations — `.btn_1`, `.button` |
| Other chromatic values | `#0c3e72`, `#2493e0`, `#415094` | `#0c3e72` × 13 (h1); `#2493e0` × 8 (.btn_1:hover); `#415094` × 7 (.genric-btn.default) |
| Surface | `#ffffff` | 70 declarations — `.btn_1`, `.btn_1:hover` |
| Ink / dark surface | `#000000` | 5 declarations — `.single-blog .thumb:after`, `.single-post-area .navigation-area .nav-left .thumb` |
| Typeface | `"Open Sans", sans-serif` (4 rules — h1) | `font-family` declaration in the theme sheet |
| Radii | `50%`, `3px`, `8px` | `50%` (.single-post-area .blog-author img); `3px` (.genric-btn.radius); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×70, `#fe5c24` ×45, `#f9f9ff` ×27, `#0c3e72` ×13, `#999999` ×12, `#f0e9ff` ×10.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: TopBar with destinations and social links

The template SHALL display a top bar with destination links (Asia, Europe, America), social media icons (Facebook, Twitter, Instagram), and a phone number.

#### Scenario: Renders destination navigation

- **WHEN** the page loads
- **THEN** the TopBar shows "Top destinations" label with Asia, Europe, and America links

#### Scenario: Shows contact phone

- **WHEN** the page loads
- **THEN** the TopBar displays the phone number "+1 555 234 5678"

### Requirement: Navbar with navigation and Book Now CTA

The template SHALL display a sticky navbar with the "Wanderly" logo, navigation links (Home, About, Packages, Blog, Pages, Contact), dropdown menus for Blog and Pages, and a "Book Now" button.

#### Scenario: Renders main navigation

- **WHEN** the page loads
- **THEN** the navbar shows Home, About, Packages, Blog, and Contact links

#### Scenario: Toggles mobile menu

- **WHEN** the user clicks the mobile hamburger button
- **THEN** the mobile menu opens with all navigation links visible

#### Scenario: Opens Blog dropdown

- **WHEN** the user clicks the Blog dropdown trigger
- **THEN** the Blog dropdown shows "Blog" and "Single Post" links

### Requirement: Hero banner with gradient overlay

The template SHALL display a full-width hero banner with a coral-to-orange gradient overlay, the title "Wanderly", a tagline, and a "Discover Now" CTA button linking to the booking section.

#### Scenario: Renders hero content

- **WHEN** the page loads
- **THEN** the banner shows "Wanderly" heading and "Let's start your journey" tagline

#### Scenario: CTA links to booking

- **WHEN** the user clicks "Discover Now"
- **THEN** the page scrolls to the booking section

### Requirement: Tabbed booking form

The template SHALL display a booking section with three tabs (Hotels, Flights, Places) each showing a form with relevant input fields and a Search button.

#### Scenario: Hotels tab active by default

- **WHEN** the page loads
- **THEN** the Hotels tab is active with destination, check-in, check-out, and guest inputs

#### Scenario: Switches to Flights tab

- **WHEN** the user clicks the Flights tab
- **THEN** the form shows From, To, Departure, and Passengers inputs

#### Scenario: Switches to Places tab

- **WHEN** the user clicks the Places tab
- **THEN** the form shows Destination, Date, Duration, and Travelers inputs

### Requirement: Top Places destination cards

The template SHALL display a "Top Places to visit" section with four destination cards, each showing an image, category tag, name, location, star rating, and review count.

#### Scenario: Renders all four destinations

- **WHEN** the page loads
- **THEN** four destination cards are displayed with unique names and locations

### Requirement: Featured Event section

The template SHALL display a featured event section with an image, "Upcoming Event" label, destination title, description, date, cost, organizer, star rating, and a "Plan Details" CTA button.

#### Scenario: Shows event details

- **WHEN** the page loads
- **THEN** the event section displays "Maldives — Asia" with date "12 Aug 2025" and cost "$820"

### Requirement: Hotel & Restaurant listings

The template SHALL display a "Top Hotels & Restaurants" section with three hotel cards showing image, name, rating, location, and starting price.

#### Scenario: Renders all three hotels

- **WHEN** the page loads
- **THEN** three hotel cards are displayed with names and prices

### Requirement: Client testimonials

The template SHALL display a "What they said" section with review cards showing star ratings, review text, and author names.

#### Scenario: Shows four reviews

- **WHEN** the page loads
- **THEN** four review cards are displayed with author names

### Requirement: Best Services section

The template SHALL display a services section with four service items, each with an icon, title, and description.

#### Scenario: Shows all four services

- **WHEN** the page loads
- **THEN** Transportation, Guidance, Accommodation, and Discover World services are shown

### Requirement: Footer with Component Dock link

The template SHALL display a footer with three columns: destination links, newsletter signup form, and contact information. The copyright line MUST link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Links to Component Dock

- **WHEN** the page loads
- **THEN** the footer copyright contains a link to componentdock.com labeled "Component Dock"

#### Scenario: Shows contact information

- **WHEN** the page loads
- **THEN** the footer displays address, phone, and email contact details

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/wanderly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/wanderly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] TopBar with destinations and social links — the TopBar shows "Top destinations" label with Asia, Europe, and America links
- [ ] Navbar with navigation and Book Now CTA — the navbar shows Home, About, Packages, Blog, and Contact links
- [ ] Hero banner with gradient overlay — the banner shows "Wanderly" heading and "Let's start your journey" tagline
- [ ] Tabbed booking form — the Hotels tab is active with destination, check-in, check-out, and guest inputs
- [ ] Top Places destination cards — four destination cards are displayed with unique names and locations
- [x] Featured Event section — the event section displays "Maldives — Asia" with date "12 Aug 2025" and cost "$820"
- [ ] Hotel & Restaurant listings — three hotel cards are displayed with names and prices
- [ ] Client testimonials — four review cards are displayed with author names
- [ ] Best Services section — Transportation, Guidance, Accommodation, and Discover World services are shown

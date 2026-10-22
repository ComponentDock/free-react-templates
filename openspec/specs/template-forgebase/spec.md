# Template: ForgeBase (Industrial / Engineering)
<!-- prep-status: shipped-as=fabricate -->
> **SHIPPED-UNDER** — the ColorLib `industry` design this prep describes already
> ships as `apps/fabricate` (<https://fabricate.free.componentdock.com>).
> Do not scaffold `apps/forgebase`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-fabricate/spec.md`.

## Purpose

Recreation of the ColorLib **Industry** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `industry`
- **ColorLib page:** https://colorlib.com/wp/template/industry/
- **Live preview:** https://preview.colorlib.com/theme/industry/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/industry-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#fab700` (golden yellow) | Banner background, CTA buttons, accent elements, hexagon icons |
| Secondary accent | `#4cd3e3` (cyan/teal) | Feature icons, secondary button colors |
| Text primary | `#222222` | Headings, body text |
| Text muted | `#777777` | Secondary text, descriptions |
| Background alt | `#f9f9ff` | Alternating section backgrounds (light blue-gray) |
| Background white | `#ffffff` | Main content background |
| Font family | `"Poppins", sans-serif` | Loaded via Google Fonts CDN |
| Button style | `.primary-btn` / `.genric-btn` | Golden yellow fill buttons, rounded corners |
| Hero | Full-width section with background image, dark overlay, yellow CTA | |
| Hexagon icons | `.hb-sm` hexagon shape | Used for service/feature icons in hexagonal containers |
| Section spacing | Bootstrap `section-gap` (~80px vertical padding) | |

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Sticky header with logo and nav links

- **GIVEN** the user is on the page
- **THEN** a sticky navbar is visible at the top
- **AND** the nav links are: Home, About, Service, Projects, Blog (submenu), Contact, Elements
- **AND** a phone number (+880 012 3654 896) and email are displayed in the top bar

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrow (< 768px)
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation menu slides open with all links visible

### Hero / Banner

Feature: Hero Banner

#### Scenario: Hero section displays on load

- **GIVEN** the user is on the page
- **THEN** a full-width hero section with a background image and dark overlay is visible
- **AND** the subheading reads "Don't look further, here is the key"
- **AND** the heading reads "Industry" (or similar)
- **AND** a golden yellow (#fab700) "Get Started" CTA button is displayed

### Category / Services

Feature: Category Section

#### Scenario: Three hexagonal service cards

- **GIVEN** the user scrolls past the hero
- **THEN** three service cards are displayed in a row
- **AND** each card has a hexagonal icon container, title, and description
- **AND** the services are: Maintenance, Residential Service, Commercial Service

#### Scenario: Hexagonal icon styling

- **GIVEN** the category section is visible
- **THEN** the icons are displayed in hexagonal containers with golden yellow (#fab700) borders

### About / Request Quote

Feature: About Section

#### Scenario: Two-column about with quote form

- **GIVEN** the user scrolls to the about area
- **THEN** a two-column layout is displayed
- **AND** the left column has heading "Brand new app to blow your mind" and descriptive text
- **AND** the right column has a "Request a Quote" form with golden yellow background
- **AND** the form has a service select dropdown and submit button

#### Scenario: Quote form interaction

- **GIVEN** the quote form is visible
- **WHEN** the user fills in the form and submits
- **THEN** the form triggers a submission action

### Market Sectors

Feature: Market Sectors

#### Scenario: Three service sectors

- **GIVEN** the user scrolls to the service area
- **THEN** the heading reads "Our Capturing Market Sectors"
- **AND** three service items are displayed: Automotive Engineering, Construction & Engineering, Industrial Engineering
- **AND** each item has a title and description

#### Scenario: Sector card hover

- **GIVEN** the sector cards are visible
- **WHEN** the user hovers over a card
- **THEN** the card lifts slightly with a shadow effect

### Counter Stats

Feature: Counter Stats

#### Scenario: Animated statistics

- **GIVEN** the user scrolls to the counter section
- **THEN** a dark overlay section is visible
- **AND** four stat items are displayed: 2K+, 5.5K, 959, 367
- **AND** each stat has an animated count-up number

#### Scenario: Number animation on scroll

- **GIVEN** the counter section enters the viewport
- **WHEN** the section becomes visible
- **THEN** the numbers animate from 0 to their target values

### Projects

Feature: Projects Section

#### Scenario: Project gallery

- **GIVEN** the user scrolls to the projects area
- **THEN** the heading reads "Latest Finished Projects"
- **AND** four project images are displayed in a grid
- **AND** each image is clickable (lightbox/magnific popup)

#### Scenario: Project image hover

- **GIVEN** the project images are visible
- **WHEN** the user hovers over an image
- **THEN** an overlay appears with the image title

### Testimonials / Feedback

Feature: Testimonials

#### Scenario: Customer feedback carousel

- **GIVEN** the user scrolls to the feedback area
- **THEN** a dark overlay section is visible
- **AND** the heading reads "Enjoy our Client's Feedback"
- **AND** a carousel shows customer testimonials with photos, names, and review text
- **AND** a video play button is available for a video testimonial

#### Scenario: Video play button

- **GIVEN** the feedback section is visible
- **WHEN** the user clicks the play button
- **THEN** a YouTube video opens in a lightbox/modal

### Blog

Feature: Blog Section

#### Scenario: Three blog post cards

- **GIVEN** the user scrolls to the blog area
- **THEN** the heading reads "Latest posts from our Blog"
- **AND** three blog cards are displayed in a row
- **AND** each card has an image, author name ("Mark Wiens"), date, title, and description

#### Scenario: Blog card hover

- **GIVEN** the blog cards are visible
- **WHEN** the user hovers over a card
- **THEN** the card lifts slightly with a shadow effect

### Footer

Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the user reaches the page bottom
- **THEN** a footer with three columns is visible: About Us, Newsletter, Follow Us
- **AND** the About Us column has a description and social media icon links
- **AND** the Newsletter column has an email input and subscribe button
- **AND** the Follow Us column has social media icon links (Facebook, Twitter, Dribbble, Behance)

#### Scenario: Footer copyright

- **GIVEN** the footer is visible
- **THEN** the copyright line is present
- **AND** a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → Categories → About/Quote → Market Sectors → Counter → Projects → Testimonials → Blog → Footer
- [ ] Poppins font loaded via Google Fonts `<link>` in index.html
- [ ] Primary golden yellow `#fab700` used for CTA buttons, banner, accent elements
- [ ] Secondary cyan `#4cd3e3` used for feature icons
- [ ] Text colors `#222222` (primary) and `#777777` (muted) applied correctly
- [ ] Light background `#f9f9ff` on alternating sections
- [ ] Hexagonal icon containers for service cards
- [ ] Quote form with select dropdown in about section
- [ ] Counter section with animated count-up numbers
- [ ] Project gallery with lightbox/magnific popup
- [ ] Testimonials carousel with video play button
- [ ] Responsive: hamburger nav on mobile, stacked layouts on small screens
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/forgebase-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)

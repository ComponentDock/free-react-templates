# Template: Cakery (Bakery & Cake Shop Landing)

## Purpose

Cakery is a single-page bakery and cake shop landing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cakes" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cakes" — bakery & cake shop landing
  (source: https://colorlib.com/wp/template/cakes/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/cakes/`
  (HTTP 200, full rendered DOM + `assets/css/style.css` (59KB) extracted;
  screenshot at `cakes-colorlib-template.jpg`).
- **Section order (1:1):** Navbar (Cake logo, Home, Product, About, Blog,
  Contact + phone number + "Order Online" button) → Hero (split layout:
  left pink bg with decorative Lobster-script "Delicious" overlay, heading
  "Delicious Cake For Everyone" + description + "Explore Menu" button, right
  hero image of plated dessert with parallax floating elements) → Popular
  Items (carousel: "Most Popular" kicker + "Our Exclusive Cakes" heading,
  6 product cards: Sweetheart, Blackforest, Chocolate, etc. with images,
  descriptions, "Order" link) → Support/About (two-column: left image,
  right text with "For the love of baking" heading + description +
  "Learn More" link) → Our Services ("Our Services" heading + 4 service
  cards: Wedding Cakes, Birthday Cakes, Cupcakes, Custom Cakes with icons,
  titles, descriptions) → Testimonials (3 testimonial cards with founder
  photos, names, roles, quotes) → Instagram social strip (6 overlaid
  Instagram photo thumbnails) → Footer (4-column: logo + about text,
  Quick Links, Support links, Newsletter signup + copyright).
- **Design tokens extracted from CSS:**
  - Primary **burnt orange `#F04506`** — buttons, links, accents, hover
    states, preloader ring, brand logo; hover gradient includes `#d83e06`.
  - Fonts: **"Quicksand"** (headings/buttons, wght 300-700) + **"DM Sans"**
    (body text, wght 400-700) + **"Lobster"** (decorative hero script overlay).
  - Card backgrounds: **`#FFF5F2`** (warm peach), footer bg **`#FFF7F3`**.
  - Text colors: `#000` headings, `#391F14` section paragraphs, `#5E5E5E`
    body/link text, `#635c5c` anchor base.
  - Buttons: pill shape (`border-radius: 30px`), gradient background
    `linear-gradient(to left, #F04506, #d83e06, #F04506)`, drop shadow
    `0px 17px 27px rgba(240,69,6,0.27)`.
  - Product cards: bottom-right corner radius `0 0 60px 0`, light peach bg
    `#FFF5F2`, image zoom on hover.
  - Section padding: ~120px top/bottom (section-padding), ~110px variant.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/cakery-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Cakery lives in `apps/cakery` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the brand name
"Cakery", anchor links to sections, and an "Order Online" CTA button.

#### Scenario: Navbar content

- **GIVEN** the Cakery page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Cakery" (with cake icon) and links to Home, Product, About, Blog, and Contact
- **AND** the navbar SHALL show a phone number "+10 (56) 745 3095" and an "Order Online" button in burnt orange

#### Scenario: Navbar sticky behavior

- **GIVEN** the Cakery page is scrolled past the hero
- **WHEN** the user scrolls down
- **THEN** the navbar SHALL remain fixed at the top with a white background and subtle shadow
- **AND** the navbar links SHALL shrink in vertical padding

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport width is less than 768px
- **WHEN** the page renders
- **THEN** the navbar SHALL show a hamburger menu icon
- **AND** clicking the icon SHALL toggle a slide-down mobile navigation menu

### Requirement: Hero banner

The system SHALL render a split hero section with a left text panel on a
warm peach background and a right product image with parallax floating
decorative elements.

#### Scenario: Hero content

- **GIVEN** the Cakery page is rendered
- **WHEN** the page loads
- **THEN** the hero section SHALL display the heading "Delicious Cake For Everyone"
- **AND** the hero SHALL show a decorative Lobster-script "Delicious" text overlay behind the heading in semi-transparent orange
- **AND** the hero SHALL show a paragraph description and an "Explore Menu" pill button

#### Scenario: Hero visual layout

- **GIVEN** the hero section renders
- **WHEN** viewed on desktop
- **THEN** the hero SHALL use a two-column split layout
- **AND** the left column SHALL have a warm peach (`#FFF5F2`) background
- **AND** the right column SHALL show a large dessert image with a subtle drop shadow
- **AND** a decorative tart image SHALL float on the left edge of the section

### Requirement: Popular items carousel

The system SHALL render a product carousel showing the most popular cake
items in card format.

#### Scenario: Section heading

- **GIVEN** the popular items section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show the kicker text "Most Popular" in orange uppercase
- **AND** it SHALL show the heading "Our Exclusive Cakes"

#### Scenario: Product cards

- **GIVEN** the popular items section renders
- **WHEN** the section is visible
- **THEN** it SHALL show at least 3 product cards in a carousel
- **AND** each card SHALL have a product image with bottom-right corner radius `60px`
- **AND** each card SHALL show a product name and description on a `#FFF5F2` peach background
- **AND** each card SHALL have an "Order" link
- **AND** images SHALL zoom slightly on hover

#### Scenario: Carousel navigation

- **GIVEN** the popular items carousel is rendered
- **WHEN** more than 3 products exist
- **THEN** left/right arrow navigation buttons SHALL be visible
- **AND** clicking arrows SHALL scroll through the product cards

### Requirement: About / Support section

The system SHALL render a two-column about section with an image on the left
and text content on the right.

#### Scenario: About content

- **GIVEN** the about section renders
- **WHEN** the section is visible
- **THEN** it SHALL show the heading "For the love of baking"
- **AND** it SHALL show descriptive text about the bakery
- **AND** it SHALL include a "Learn More" link in orange

#### Scenario: About layout

- **GIVEN** the about section renders
- **WHEN** viewed on desktop
- **THEN** the section SHALL use a two-column layout with a bakery image on the left and text on the right

### Requirement: Services section

The system SHALL render a services section with 4 service cards.

#### Scenario: Section heading

- **GIVEN** the services section renders
- **WHEN** the page loads
- **THEN** it SHALL show the kicker "Our Services" in orange
- **AND** it SHALL show a centered heading describing the services

#### Scenario: Service cards

- **GIVEN** the services section renders
- **WHEN** the section is visible
- **THEN** it SHALL show 4 service cards in a grid (2x2 on desktop)
- **AND** each card SHALL have an icon, title, and short description
- **AND** each card SHALL be on a white background with a soft shadow

### Requirement: Testimonials section

The system SHALL render a testimonials section with customer quotes.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section renders
- **WHEN** the page loads
- **THEN** it SHALL show at least 3 testimonial cards
- **AND** each card SHALL display a quote, customer name, role, and avatar image

### Requirement: Instagram social strip

The system SHALL render a horizontal strip of Instagram-style photo thumbnails.

#### Scenario: Instagram thumbnails

- **GIVEN** the Instagram section renders
- **WHEN** the section is visible
- **THEN** it SHALL show at least 5 square photo thumbnails in a horizontal row
- **AND** each photo SHALL have an Instagram icon overlay on hover
- **AND** the section SHALL have a warm peach background

### Requirement: Footer

The system SHALL render a full-width footer with 4 columns and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer renders
- **WHEN** the page loads
- **THEN** the footer SHALL show 4 columns: brand logo + about, Quick Links, Support, and Newsletter signup
- **AND** the footer SHALL have a warm cream background (`#FFF7F3`)

#### Scenario: Footer links and copyright

- **GIVEN** the footer renders
- **WHEN** the footer is visible
- **THEN** Quick Links SHALL include Home, About, Blog, Contact
- **AND** Support SHALL include Terms & Conditions, Privacy Policy, Contact
- **AND** the newsletter section SHALL show an email input + submit button
- **AND** a copyright bar SHALL show at the bottom with "Made with Component Dock" attribution linking to `https://www.componentdock.com/`

### Requirement: Color tokens and theming

The system SHALL use Tailwind CSS 4 `@theme` to define the bakery's burnt
orange color palette as custom properties.

#### Scenario: Custom theme tokens

- **GIVEN** the application's index.css is rendered
- **WHEN** Tailwind processes the theme
- **THEN** the primary color `--color-cakery-primary` SHALL be `#F04506`
- **AND** the card background `--color-cakery-card` SHALL be `#FFF5F2`
- **AND** the footer background `--color-cakery-footer` SHALL be `#FFF7F3`
- **AND** the heading font family SHALL be "Quicksand"
- **AND** the body font family SHALL be "DM Sans"

## Verification checklist

- [ ] All 8 sections render: Navbar, Hero, Popular Items, About, Services, Testimonials, Instagram, Footer
- [ ] Navbar is sticky and responsive (hamburger on mobile)
- [ ] Hero has split layout with decorative Lobster script overlay
- [ ] Popular Items carousel scrolls with arrow navigation
- [ ] Product cards have peach `#FFF5F2` background and corner radius
- [ ] Services grid shows 4 cards with icons
- [ ] Testimonials show 3+ quotes with avatars
- [ ] Instagram strip shows 5+ thumbnails with hover overlay
- [ ] Footer has 4 columns + copyright with Component Dock link
- [ ] Primary burnt orange `#F04506` used consistently across buttons, links, accents
- [ ] Pill buttons with 30px radius and gradient background
- [ ] No ColorLib references in app code (only in spec)
- [ ] All placeholder images use `picsum.photos/seed/cakery-<n>`
- [ ] Fonts loaded via Google Fonts: Quicksand, DM Sans, Lobster
- [ ] Responsive: single-column stacking on mobile
- [ ] Tailwind @theme custom properties defined for brand tokens

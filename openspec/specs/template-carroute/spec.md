# Template: Carroute (Car Rental)

## Purpose

Recreation of ColorLib's **CarRental** template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** ColorLib "CarRental" — https://colorlib.com/wp/template/carrentals/
- **Preview:** https://preview.colorlib.com/theme/carrentals/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carrentals-free-template.jpg
- **Package:** `@free-react-templates/carroute`
- **Deploy:** `carroute.free.componentdock.com`

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#0779e4` | Blue — buttons, active nav, accents, CTA section bg |
| Body text | `#364d59` | Dark teal-grey |
| Headings | `#364d59` (h1–h5 weight 300), bold inner | |
| Black accents | `#000` | Logo, text-black utility, footer heading color |
| Background | `#fff` | Page and section default |
| Light section bg | `#f7f7f7` / Bootstrap `bg-light` | Alternating sections |
| Footer bg | `#fff` with dark text | White footer with muted links |
| Font family | `Roboto` (Google Fonts) | Weights: 300 (body, headings), 400, 700, 900 (logo) |
| Body font weight | 300 | Light |
| Line height | 1.7 | |
| Button padding | 12px 25px | `.btn.btn-primary` |
| Button style | Bootstrap `.btn-primary` | Rounded corners (Bootstrap default ~4px) |
| Input height | 55px | `.form-control` |
| Step circles | Border-radius 50%, numbered | `.step > span` |
| Service icons | Dark card, circular icon | `.service-1.dark` |
| Dropdown border-top | 2px solid `#0779e4` | |
| CTA section | `bg-primary py-5` | Full-width blue banner |

## Section Order (from live preview DOM)

1. **Navbar** — Absolute positioned over hero. Logo "CarRental" (font-weight 900). Nav links: Home, Listing, Testimonials, Blog, About, Contact. Mobile hamburger menu.
2. **Hero** — Full-viewport background image. Large heading "Rent a car is within your finger tips." Search form row: car type select, pick-up date, drop-off date, "Search Now" button.
3. **How It Works** — Section heading "How it works?" + subtitle. 3 numbered steps (01. Select a car, 02. Fill up form, 03. Payment) with step circles and descriptions.
4. **Video CTA** — Play icon + "Video how it works" caption (centered).
5. **Promo Section** — Two-column: image left, heading "You can easily avail our promo for renting a car." + body text + "Meet them now" button right.
6. **Car Listings** — `bg-light` background. Section heading "Car Listings". 6 car cards in 3-col grid (2 rows). Each card: image, car name, price/day, specs (luggage, doors, passengers), description, "Rent Now" button.
7. **Features** — Section heading "Features". 6 feature cards in 3-col grid (2 rows). Each: icon circle, title, description, "Learn more" link.
8. **Testimonials** — `bg-light` background. Section heading "Testimonials". 3 testimonial cards: blockquote, author photo, name, role.
9. **CTA Banner** — Full-width `bg-primary` blue section. Heading "What are you waiting for?" + subtitle + "Rent a car now" white button.
10. **Footer** — About column + 4 link columns (Quick Links, Resources, Support, Company) + social icons + copyright with Component Dock link.

## Requirements

### Feature: Carroute template behaviour

Feature: Carroute car rental template

Background:
- **GIVEN** the user opens the Carroute homepage
- **THEN** the page loads without errors

#### Scenario: Navbar renders correctly

- **THEN** the navbar displays the logo "Carroute"
- **AND** the navbar contains navigation links: Home, Listing, Testimonials, Blog, About, Contact
- **AND** the navbar is positioned absolute over the hero section

#### Scenario: Hero section displays correctly

- **THEN** the hero section has a full-viewport background image
- **AND** the hero heading reads "Rent a car is within your finger tips."
- **AND** a search form is visible with: car type selector, pick-up date, drop-off date, search button
- **AND** the search button text is "Search Now"

#### Scenario: How It Works section renders

- **THEN** the section heading reads "How it works?"
- **AND** 3 numbered steps are displayed: "Select a car", "Fill up form", "Payment"
- **AND** each step has a number badge, title, and description

#### Scenario: Video CTA renders

- **THEN** a play icon button is visible with caption "Video how it works"

#### Scenario: Promo section renders

- **THEN** a two-column layout shows an image on the left
- **AND** the right column shows a heading about car rental promo
- **AND** a "Meet them now" button is present

#### Scenario: Car Listings section renders

- **THEN** 6 car listing cards are displayed in a 3-column grid
- **AND** each card shows: car image, car name, daily price, luggage/doors/passenger specs
- **AND** each card has a "Rent Now" button

#### Scenario: Features section renders

- **THEN** 6 feature cards are displayed in a 3-column grid
- **AND** each card has an icon, title, description, and "Learn more" link

#### Scenario: Testimonials section renders

- **THEN** 3 testimonial cards are displayed
- **AND** each card has a blockquote, author photo, author name, and role

#### Scenario: CTA banner renders

- **THEN** a full-width blue banner is displayed
- **AND** the heading reads "What are you waiting for?"
- **AND** a "Rent a car now" button is visible

#### Scenario: Footer renders

- **THEN** the footer shows an "About Us" column with social icons
- **AND** 4 link columns are present: Quick Links, Resources, Support, Company
- **AND** the copyright includes a Component Dock link

#### Scenario: Responsive layout

- **WHEN** the viewport is below 992px
- **THEN** the navbar shows a hamburger menu icon
- **AND** the car listings grid collapses to single column
- **AND** the hero search form stacks vertically

## Verification Checklist

- [ ] Navbar renders with logo + 6 nav links, absolute-positioned over hero
- [ ] Hero has full-viewport background image + heading + search form (type select, 2 date inputs, search button)
- [ ] How It Works shows 3 numbered steps with titles and descriptions
- [ ] Video CTA play button renders centered
- [ ] Promo section is 2-column: image left, text + button right
- [ ] Car Listings section (bg-light) shows 6 cards in 3-col grid with all specs
- [ ] Features section shows 6 cards with icons, titles, descriptions, links
- [ ] Testimonials section (bg-light) shows 3 cards with quotes + avatars
- [ ] CTA banner is full-width blue with heading + white button
- [ ] Footer has About Us + 4 link columns + social icons + copyright with Component Dock link
- [ ] Mobile responsive: hamburger nav, stacked grids, stacked form
- [ ] All interactive elements are keyboard accessible
- [ ] Semantic HTML used throughout (nav, main, section, footer, etc.)
- [ ] Brand color #0779e4 used consistently for accents and CTAs
- [ ] Font Roboto loaded via Google Fonts

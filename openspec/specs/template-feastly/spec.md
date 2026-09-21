# Feastly — Restaurant Landing Template

## Purpose

Recreation of ColorLib **Foodfun** (https://colorlib.com/wp/template/foodfun/) as a single-page restaurant landing template with a golden-yellow brand palette, Playfair Display headings, and a warm, inviting aesthetic.

## Requirements

### Requirement: Navigation bar with links

Users SHALL see a white navigation bar with logo and links (Home, About, Menu, Specials, Contact) that scroll to the corresponding sections.

#### Scenario: Navbar renders with all links

- **WHEN** the page loads
- **THEN** I see navigation links: Home, About, Menu, Specials, Contact

### Requirement: Hero banner with headline

Users SHALL see a full-width hero banner with a food-themed background and the headline "Discover the flavors of feastly" with yellow accent text.

#### Scenario: Banner displays the main headline

- **WHEN** the page loads
- **THEN** I see "Discover the flavors of feastly" in the hero section

### Requirement: Welcome section with CTA

Users SHALL see a split welcome section with an image on the left, descriptive text on the right, and a "book a table" call-to-action button.

#### Scenario: Welcome section renders with CTA

- **WHEN** I look at the welcome section
- **THEN** I see a "welcome to feastly" heading and a "book a table" button

### Requirement: Food menu grid

Users SHALL see a 3x2 grid of food items, each with an image, name, price, and description. Cards shall transition to yellow on hover.

#### Scenario: Menu displays food items

- **WHEN** I look at the menu section
- **THEN** I see 6 food items with names and prices

### Requirement: Reservation CTA banner

Users SHALL see a dark-background reservation call-to-action section with "Natural ingredients and tasty food" heading and a reservation button.

#### Scenario: Reservation CTA renders

- **WHEN** I look at the reservation section
- **THEN** I see "Natural ingredients and tasty food" and a reservation button

### Requirement: Special dishes showcase

Users SHALL see numbered special dish items with alternating text and image rows, including dish name, description, price, and a "book a table" link.

#### Scenario: Specials display dish items

- **WHEN** I look at the specials section
- **THEN** I see at least 2 numbered dish items with details

### Requirement: Customer testimonials

Users SHALL see customer review cards with avatar, name, role, and quote text on a dark overlay background.

#### Scenario: Testimonials render customer reviews

- **WHEN** I look at the testimonials section
- **THEN** I see customer review cards with names and quotes

### Requirement: Blog-style food updates

Users SHALL see blog-style cards with images, author info, dates, titles, and excerpts in the updates section.

#### Scenario: Updates display blog cards

- **WHEN** I look at the updates section
- **THEN** I see blog cards with titles, dates, and excerpts

### Requirement: Table booking form

Users SHALL see a booking form with date, time, and guest inputs on a dark overlay background, with a "book a table" submit button.

#### Scenario: Booking form renders inputs

- **WHEN** I look at the booking section
- **THEN** I see a form with date, time, and guest inputs

### Requirement: Footer with contact info and Component Dock link

Users SHALL see a dark footer with three columns (about, contact info, opening hours) and a copyright bar linking to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer renders with contact and Component Dock

- **WHEN** I look at the footer
- **THEN** I see contact information, opening hours, and a "Component Dock" link

#### Scenario: Footer has social links

- **WHEN** I look at the footer
- **THEN** I see social media icon links

## Design Tokens

| Token            | Value                                                 | Source                                          |
| ---------------- | ----------------------------------------------------- | ----------------------------------------------- |
| Brand yellow     | `#ffb606`                                             | ColorLib .prime-color, .template-btn background |
| Dark navy        | `#131230`                                             | ColorLib headings, h1/h3/h5, footer background  |
| Body text        | `#777777`                                             | ColorLib body color                             |
| Light background | `#f9f9ff`                                             | ColorLib .food-content, nav menu bg             |
| Footer dark      | `#0d0d27`                                             | ColorLib .footer-copyright                      |
| Heading font     | Playfair Display (italic for h1)                      | ColorLib font-family on h1/h2/h3/h5             |
| Body font        | Roboto                                                | ColorLib body, nav, buttons                     |
| Button style     | Uppercase, Roboto, 14px, yellow bg, transparent hover | ColorLib .template-btn                          |
| Border radius    | 3px                                                   | ColorLib global                                 |
| Section padding  | 130px                                                 | ColorLib .section-padding                       |

## Sections (in order)

1. **Navbar** — White bar, logo left, nav links right (Home, About, Menu, Specials, Contact)
2. **Banner** — Full-width hero with food image bg, centered headline "Discover the flavors of feastly", yellow accent
3. **Welcome** — Split: image left, text right with "welcome to feastly" heading + "book a table" CTA
4. **Menu** — "We serve delicious food" heading, 3x2 grid of food items with images, names, prices, descriptions
5. **Reservation CTA** — Dark bg section "Natural ingredients and tasty food" with reservation button
6. **Specials** — "Our special dishes" with alternating text/image rows, numbered items with descriptions and prices
7. **Testimonials** — Dark overlay bg, customer review cards with avatar, name, role, quote
8. **Updates** — "Our food update" blog-style cards with images, meta info, excerpts
9. **Booking Form** — Dark overlay bg, "Book your table" heading, form inputs (date, time, guests, CTA)
10. **Footer** — Dark bg, 3-column layout: about + logo, contact info, opening hours + copyright bar with Component Dock link

## Assets

- Placeholder images via picsum.photos seeded per template
- Google Fonts: Playfair Display (headings) + Roboto (body)
- lucide-react icons (no brand icons — use inline SVG for social)

## Coverage

All components must achieve 100% lines/functions/branches/statements coverage.

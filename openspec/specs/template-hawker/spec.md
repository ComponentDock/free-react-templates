# Template: Hawker (Multi-Purpose Selling)
<!-- prep-status: shipped-as=stall -->
> **SHIPPED-UNDER** — the ColorLib `selling` design this prep describes already
> ships as `apps/stall` (<https://stall.free.componentdock.com>).
> Do not scaffold `apps/hawker`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-stall/spec.md`.

## Purpose

Recreation of the ColorLib "Selling" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/selling/
- **Preview:** https://preview.colorlib.com/theme/selling/
- **New name:** `hawker` (app folder `apps/hawker`, package `@free-react-templates/hawker`)
- **Surge target:** `hawker.free.componentdock.com`
- **Category:** E-Commerce / Multi-Purpose Selling

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Accent / orange | `#f16821` | Links, text-primary, borders, highlights |
| Black | `#000000` | Headings, btn-black, text-black |
| White | `#ffffff` | btn-white, section backgrounds |
| Footer bg | `#333333` | Dark footer |
| Body text | `gray` | Paragraph text |
| Font | `"Muli", sans-serif` | All text, headings |
| Button radius | `0` (square) | Small uppercase buttons |
| btn-black | bg `#000`, text `#fff` | Primary CTA |
| btn-white | bg `#fff`, text `#000` | Light CTA |
| btn-outline-black | transparent, `#000` border | Outline variant |

## Section structure (page order)

1. **Nav** — Sticky header, white bg. Logo "Selling." left (with orange dot). Nav links right (Home, Shop, Featured, About, Blog, Contact). Mobile offcanvas.
2. **Hero** — "Shop With Us" large heading, description, CTA buttons, background image.
3. **Products (Our Products)** — "Our Products" section title, product card grid.
4. **Newsletter** — "Get notified on each updates" email subscribe form.
5. **Featured Products** — "Featured Products" section title, product cards.
6. **About Us** — "About Us" section title, company description text.
7. **Leadership** — "Leadership" section title, team member cards.
8. **Summer Sale** — Dark bg promotional banner, "Summer Sale" white heading.
9. **Services** — "We Offer Services" section title, service cards.
10. **Testimonials** — "Testimonials" section title, testimonial cards.
11. **Blog Posts** — "Blog Posts" section title, 3 blog cards with images.
12. **Get In Touch** — "Get In Touch" heading, "Contact Form" subheading, contact form.
13. **Footer** — Dark (#333) bg. 4 columns: About Us, Quick Links, Follow Us, Featured Product. Copyright with Component Dock.

## Requirements

### Nav

Feature: Hawker Navigation

#### Scenario: Nav displays logo and links

- **GIVEN** the user is on the Hawker page
- **THEN** the logo "Selling." with an orange dot is visible
- **AND** navigation links are visible: Home, Shop, Featured, About, Blog, Contact
- **AND** the header is sticky on scroll

### Hero

Feature: Hawker Hero

#### Scenario: Hero displays heading and CTA

- **GIVEN** the user is on the Hawker page
- **THEN** a "Shop With Us" heading is displayed
- **AND** a description paragraph is present
- **AND** CTA buttons are available

### Products

Feature: Hawker Products

#### Scenario: Products section displays items

- **GIVEN** the user scrolls to the products section
- **THEN** a "Our Products" heading is displayed
- **AND** product cards are shown in a grid
- **AND** each card has an image, title, and price

### Newsletter

Feature: Hawker Newsletter

#### Scenario: Newsletter form displays

- **GIVEN** the user scrolls to the newsletter section
- **THEN** a "Get notified on each updates" heading is shown
- **AND** an email input field is present
- **AND** a subscribe button is present

### Featured Products

Feature: Hawker Featured Products

#### Scenario: Featured products section renders

- **GIVEN** the user scrolls to the featured section
- **THEN** a "Featured Products" heading is displayed
- **AND** product cards are shown

### About Us

Feature: Hawker About Us

#### Scenario: About section renders

- **GIVEN** the user scrolls to the about section
- **THEN** an "About Us" heading is displayed
- **AND** company description text is present

### Leadership

Feature: Hawker Leadership

#### Scenario: Team section renders

- **GIVEN** the user scrolls to the leadership section
- **THEN** a "Leadership" heading is displayed
- **AND** team member cards are shown

### Summer Sale

Feature: Hawker Summer Sale

#### Scenario: Promotional banner renders

- **GIVEN** the user scrolls to the summer sale section
- **THEN** the section has a dark background
- **AND** a "Summer Sale" white heading is displayed

### Services

Feature: Hawker Services

#### Scenario: Services section renders

- **GIVEN** the user scrolls to the services section
- **THEN** a "We Offer Services" heading is displayed
- **AND** service cards are shown

### Testimonials

Feature: Hawker Testimonials

#### Scenario: Testimonials section renders

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a "Testimonials" heading is displayed
- **AND** testimonial cards are shown

### Blog Posts

Feature: Hawker Blog

#### Scenario: Blog section renders

- **GIVEN** the user scrolls to the blog section
- **THEN** a "Blog Posts" heading is displayed
- **AND** 3 blog post cards are shown
- **AND** each card has an image and title

### Get In Touch

Feature: Hawker Contact

#### Scenario: Contact form renders

- **GIVEN** the user scrolls to the contact section
- **THEN** a "Get In Touch" heading is displayed
- **AND** a "Contact Form" subheading is shown
- **AND** a contact form with input fields is present

### Footer

Feature: Hawker Footer

#### Scenario: Footer displays widgets

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark (#333333) background
- **AND** 4 widget columns are displayed (About Us, Quick Links, Follow Us, Featured Product)
- **AND** a copyright bar is at the bottom

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is rendered
- **THEN** the copyright includes a link to "Component Dock" (https://www.componentdock.com/)
- **AND** no ColorLib references appear in the app code

## Verification checklist

- [ ] All 13 sections present in correct order
- [ ] Design tokens match: #f16821 accent, Muli font, #333333 footer
- [ ] Square buttons (no border-radius)
- [ ] Sticky white header with "Selling." logo
- [ ] Hero with "Shop With Us" heading
- [ ] Products, Featured Products sections
- [ ] Newsletter subscribe form
- [ ] About Us, Leadership team section
- [ ] Summer Sale dark promotional banner
- [ ] Services, Testimonials, Blog Posts sections
- [ ] Contact form section
- [ ] Footer with 4 columns and Component Dock link
- [ ] No ColorLib references in app code

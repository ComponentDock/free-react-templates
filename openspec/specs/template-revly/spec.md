# Template: Revly (Car Rental)
<!-- prep-status: shipped-as=fleetly -->
> **SHIPPED-UNDER** — the ColorLib `car-rental` design this prep describes already
> ships as `apps/fleetly` (<https://fleetly.free.componentdock.com>).
> Do not scaffold `apps/revly`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-fleetly/spec.md`.

## Purpose

Recreation of ColorLib "Car Rental" template.
- Source: https://colorlib.com/wp/template/car-rental/
- Preview (analyzed): https://preview.colorlib.com/theme/carrental/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Design category: Car rental / vehicle booking

## Design tokens

| Token | Value | Source |
|---|---|---|
| Brand color | `#fab700` (golden yellow) | `.primary-btn`, `.facts-area`, `.callaction-btn` |
| Font family | `"Poppins", sans-serif` | Body default |
| Text dark | `#222222` | Headings, body text |
| Text muted | `#777777` | Paragraphs, descriptions |
| Footer bg | `#04091e` (dark navy) | `.footer-area` |
| Blog bg | `#f9f9ff` (light lavender) | `.blog-area` |
| Banner overlay | `rgba(0, 0, 0, 0.8)` | `.banner-area .overlay-bg` |
| CTA overlay | `rgba(4, 9, 30, 0.75)` | `.callaction-area .overlay-bg` |
| Button radius | `20px` | `.primary-btn` style |
| Button padding | `0 40px`, line-height `42px` | `.primary-btn` |
| Button hover | transparent bg, `#fab700` border+text | `.primary-btn:hover` |
| Section gap | `section-gap` class | Consistent vertical spacing |

## Visual design (from preview + CSS)

Dark hero banner with golden yellow brand accent. The banner has a full-bleed background image with a dark semi-transparent overlay. A booking form sits on the right side of the hero. Below: white-background feature/service cards, a split about section (image left, text right), a car model carousel with pricing, a bright yellow stats/facts bar, a testimonials/reviews carousel, a dark call-to-action band, light lavender blog cards, and a dark navy footer.

## Requirements

### 1. Navbar

#### Scenario: Sticky navigation bar renders with logo and links

- **GIVEN** the user is on the Revly homepage
- **WHEN** the page loads
- **THEN** a sticky navbar is visible at the top
- **AND** it contains the logo text "Revly"
- **AND** navigation links include: Home, About, Cars, Services, Blog, Contact
- **AND** the active link is visually highlighted

### 2. Hero / Banner

#### Scenario: Hero section displays with booking form

- **GIVEN** the user is on the Revly homepage
- **WHEN** the hero section is visible
- **THEN** a dark overlay covers the hero background image
- **AND** a heading reads "The Royal Essence of Journey"
- **AND** a subheading paragraph is present
- **AND** a primary CTA button reads "Rent Car Now"
- **AND** a booking form is displayed with:
    - Car selection dropdown (e.g. BMW, Ferrari, Toyota)
    - Pickup date picker
    - Dropoff date picker
    - Pickup location dropdown
    - Dropoff location dropdown
    - A "Book Your Car Today" submit button

### 3. Features / Services

#### Scenario: Six service feature cards are displayed

- **GIVEN** the user scrolls to the services section
- **WHEN** the feature area is visible
- **THEN** a heading reads "What Services We Offer"
- **AND** a subheading "Who are in extremely love with eco friendly system" is shown
- **AND** 6 service cards are displayed in a 3×2 grid
- **AND** each card has an icon, title, and description paragraph

### 4. About Section

#### Scenario: Split about section with text and image

- **GIVEN** the user scrolls to the about section
- **WHEN** the about area is visible
- **THEN** a heading reads "Globally Connected by Large Network"
- **AND** a subheading "We are here to listen from you deliver excellence" is shown
- **AND** two paragraphs of descriptive text are present
- **AND** a primary button reads "Get Details"
- **AND** an image occupies the left half

### 5. Car Models

#### Scenario: Car model cards with carousel navigation

- **GIVEN** the user scrolls to the car models section
- **WHEN** the model area is visible
- **THEN** a heading reads "Choose Your Desired Car Model"
- **AND** car cards display with:
    - Car image
    - Car name (e.g. "Audi 3000 msi")
    - Price per day (e.g. "$149 /day")
    - Specs: Capacity, Doors, Air Condition, Transmission, Fuel
- **AND** a "Book This Car Now" button on each card
- **AND** carousel dots allow navigation between pages of cars

### 6. Facts / Stats

#### Scenario: Statistics bar with animated counters

- **GIVEN** the user scrolls to the facts section
- **WHEN** the facts area is visible
- **THEN** a yellow (#fab700) background spans the full width
- **AND** 5 stat counters are displayed:
    - Projects Completed
    - Happy Clients
    - Total Tasks Completed
    - Cups of Coffee Taken
    - In House Professionals
- **AND** the counter values animate on scroll into view

### 7. Reviews / Testimonials

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the reviews section
- **WHEN** the reviews area is visible
- **THEN** a heading reads "Some Features That Made Us Unique"
- **AND** a subheading "Who are in extremely love with eco friendly system" is shown
- **AND** testimonial cards are displayed in a carousel
- **AND** each card has a quote, reviewer name, and role

### 8. Call to Action

#### Scenario: Full-width CTA band with dark overlay

- **GIVEN** the user scrolls to the call-to-action section
- **WHEN** the CTA area is visible
- **THEN** a dark overlay covers the background image
- **AND** a heading reads "Experience Great Support"
- **AND** a paragraph of supporting text is present
- **AND** a CTA button reads "Reach Our Support Team"

### 9. Blog

#### Scenario: Blog post cards in a grid

- **GIVEN** the user scrolls to the blog section
- **WHEN** the blog area is visible
- **THEN** a heading reads "Latest From Our Blog"
- **AND** 3 blog post cards are displayed
- **AND** each card shows:
    - Post image
    - Date
    - Post title
    - Excerpt text
    - Like count and comment count

### 10. Footer

#### Scenario: Dark footer with columns and newsletter

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** the background is dark navy (#04091e)
- **AND** three columns are displayed:
    - Quick Links
    - Resources
    - Newsletter signup
- **AND** a "Follow Us" social links section is present
- **AND** a copyright notice is shown
- **AND** a "Component Dock" attribution link is present in the footer

### 11. Responsive

#### Scenario: Mobile layout adapts correctly

- **GIVEN** the user views on a mobile viewport (< 768px)
- **WHEN** the page loads
- **THEN** the navbar collapses into a hamburger menu
- **AND** the booking form stacks vertically
- **AND** service cards stack into a single column
- **AND** the about section stacks image above text
- **AND** car model cards display one per row
- **AND** blog cards stack vertically

## Verification checklist

- [ ] Navbar sticky, logo + links, mobile hamburger
- [ ] Hero: dark overlay, heading, booking form with dropdowns and date pickers
- [ ] Services: 6 cards in 3×2 grid, icons, titles, descriptions
- [ ] About: split layout, heading, text, CTA button, image
- [ ] Car models: card carousel, pricing, specs, "Book This Car Now"
- [ ] Facts: yellow bg, 5 animated counters
- [ ] Reviews: testimonial carousel with quotes and names
- [ ] CTA: dark overlay, heading, paragraph, button
- [ ] Blog: 3 post cards with image, date, title, excerpt, likes/comments
- [ ] Footer: dark navy, 3 columns, newsletter, social, Component Dock link
- [ ] Responsive: hamburger menu, stacked layouts on mobile
- [ ] Design tokens match: #fab700 brand, Poppins font, #04091e footer, #f9f9ff blog bg

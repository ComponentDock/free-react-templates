# Template: GlobeTrek (Travel / Tourism)

## Purpose

Recreation of the ColorLib **Travelers** template
(preview: https://preview.colorlib.com/theme/travelers/).

A modern travel/tourism website template featuring a hero slider,
feature cards, service listings, testimonials carousel, destination grid,
a dark CTA banner, detailed services section, blog preview, and a
multi-column footer with newsletter signup.

**Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Design tokens (extracted from preview)

| Token              | Value                      | Notes                                      |
|--------------------|----------------------------|---------------------------------------------|
| brand-primary      | `#ef6c57`                  | Coral/orange — buttons, links, accents      |
| bg-dark            | `#25262a`                  | Dark charcoal — CTA banner, footer          |
| bg-light           | `#f4f5f9` / `#f8f9fa`     | Light gray — alternating section backgrounds |
| bg-white           | `#ffffff`                  | Card backgrounds, overlap sections           |
| text-primary       | `#000000`                  | Headings, main text                         |
| text-secondary     | `#4d4d4d` / `#737373`     | Body copy, descriptions                     |
| text-muted         | `#999999`                  | Fine print, meta                            |
| text-white         | `#ffffff`                  | On dark backgrounds                         |
| font-family        | Poppins (200–900)          | Google Font, loaded via `<link>`             |
| border-radius      | `0` (square buttons/cards) | Bootstrap default — no rounding             |
| button-primary-bg  | `#ef6c57`                  | Coral fill button                           |
| button-primary-text| `#ffffff`                  | White on coral                              |
| button-outline     | border `2px` on `#ef6c57`  | Outline variant, transparent fill           |

## Requirements

### 1. Navbar

- Sticky top bar: logo text left ("GlobeTrek"), nav links center
  (Home, Destinations (dropdown), Discount, About, Blog, Contact),
  social icons right (TripAdvisor, Twitter, Facebook, Instagram).
- Hamburger toggle on mobile with slide-out menu.

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the user is on the homepage
- **THEN** the navbar shows "GlobeTrek" as the logo text
- **AND** navigation links include "Home", "Destinations", "Discount", "About", "Blog", "Contact"
- **AND** social media icons are visible on the right

#### Scenario: Destinations link has a dropdown

- **GIVEN** the user is on the homepage
- **WHEN** the user hovers over "Destinations"
- **THEN** a dropdown appears with destination items (Japan, Europe, China, France)

#### Scenario: Navbar collapses to hamburger on mobile

- **GIVEN** the user views the page on a mobile viewport
- **THEN** the navbar shows a hamburger menu icon
- **AND** clicking it opens a slide-out mobile menu

### 2. Hero Slider

- Full-width image carousel (2 slides) with dark overlay
  (`site-blocks-cover overlay`). Centered headline + subtext + CTA button.
- Uses `background-image` with parallax (`data-stellar-background-ratio`).
- Slide 1: "Experience Nature" + "Discover the best tour in your life"
  + "Discover More" button.
- Slide 2: "Discover Amazing Place" + "With Our Greatest Experiences"
  + "Explore More" button.

#### Scenario: Hero slider shows the first slide

- **GIVEN** the user loads the homepage
- **THEN** a full-width hero image is displayed with a dark overlay
- **AND** the headline reads "Experience Nature"
- **AND** a subtext reads "Discover the best tour in your life"
- **AND** a "Discover More" button is visible

#### Scenario: Hero slider transitions to second slide

- **GIVEN** the user is on the homepage
- **WHEN** 5 seconds elapse
- **THEN** the slider transitions to the second slide
- **AND** the headline reads "Discover Amazing Place"
- **AND** a "Explore More" button is visible

### 3. Feature Cards (overlap-section)

- 3 cards with `overlap-left` style — white card overlapping the
  hero/background area. Each has a heading + description.
  1. "Write Down Your Experience" — description text
  2. "Explore Asian Mountains" — description text
  3. "Safe Trip With Airasia" — description text

#### Scenario: Feature cards are displayed after the hero

- **GIVEN** the user is on the homepage
- **THEN** three feature cards are shown in a row
- **AND** the first card heading is "Write Down Your Experience"
- **AND** the second card heading is "Explore Asian Mountains"
- **AND** the third card heading is "Safe Trip With Airasia"

#### Scenario: Feature cards have overlapping style

- **GIVEN** the user is on the homepage
- **THEN** each feature card has a white background
- **AND** the cards visually overlap the hero section

### 4. Services Quick (icon rows)

- 3 rows: each with icon + heading + description.
  1. Air Ticketing
  2. Cruises
  3. Tour Packages

#### Scenario: Services quick section shows three items

- **GIVEN** the user scrolls to the services quick section
- **THEN** three service items are displayed in a row
- **AND** each item has an icon, heading, and description
- **AND** the items are "Air Ticketing", "Cruises", "Tour Packages"

### 5. Testimonials Carousel

- Section with `bg-light` background. Centered heading "Testimonials".
- Owl-carousel of testimonials: image left + white card right with
  quote text + author name + "Traveler" link.
  - James Martin, Clair Augustin, James Martin (3 testimonials)

#### Scenario: Testimonials section displays carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a centered heading "Testimonials" is displayed
- **AND** a carousel shows testimonial slides
- **AND** each slide has an image on the left and a white card on the right
- **AND** each card contains a quote, author name, and "Traveler" label

#### Scenario: Testimonials carousel auto-advances

- **GIVEN** the user is viewing the testimonials section
- **WHEN** 5 seconds elapse
- **THEN** the carousel advances to the next testimonial

### 6. Our Destinations

- Section heading "Our Destinations". 6 destination cards in a grid
  (3 columns). Each card: image + overlay + heading.
  1. Santorini, Greece
  2. Rome, Italy
  3. Mount Fuji, Japan
  4. Camels, Dubai
  5. Elizabeth Tower, London
  6. Opera House, Australia

#### Scenario: Destinations grid shows six destinations

- **GIVEN** the user scrolls to the destinations section
- **THEN** a heading "Our Destinations" is displayed
- **AND** six destination cards are shown in a 3-column grid
- **AND** each card has a background image with an overlay and a heading

#### Scenario: Destination card content

- **GIVEN** the destinations grid is visible
- **THEN** the destinations listed are:
| destination        |
| Santorini, Greece  |
| Rome, Italy        |
| Mount Fuji, Japan  |
| Camels, Dubai      |
| Elizabeth Tower, London |
| Opera House, Australia  |

### 7. CTA Banner (Experience Our Outstanding Services)

- Full-width dark overlay section (`site-blocks-cover overlay`).
  Background image with parallax. Heading:
  "Experience Our Outstanding Services". Subtext + CTA button.

#### Scenario: CTA banner section is displayed

- **GIVEN** the user scrolls past the destinations
- **THEN** a full-width dark overlay banner is shown
- **AND** the heading reads "Experience Our Outstanding Services"
- **AND** a call-to-action button is visible below the heading

### 8. Services Detail (6 items)

- White background section. Heading "Our Services".
- 6 icon+text items in a grid:
  1. Air Ticketing
  2. Cruises
  3. Tour Packages
  4. Hotel Accommodations
  5. Sea Explorations
  6. Ski Experiences

#### Scenario: Services detail shows six items

- **GIVEN** the user scrolls to the services detail section
- **THEN** a heading "Our Services" is displayed
- **AND** six service items are shown in a grid
- **AND** the items are "Air Ticketing", "Cruises", "Tour Packages",
"Hotel Accommodations", "Sea Explorations", "Ski Experiences"

#### Scenario: Each service item has an icon

- **GIVEN** the services detail section is visible
- **THEN** each item displays a circular icon and descriptive text

### 9. Blog Preview

- `bg-light` background section. Shows a blog post preview card
  with image + excerpt + metadata.

#### Scenario: Blog preview section exists

- **GIVEN** the user scrolls to the blog section
- **THEN** a blog post preview card is displayed
- **AND** it contains an image, title, and excerpt text

### 10. Footer

- Dark background (`#25262a`). 3 columns:
  1. "About GlobeTrek" — about text
  2. "Navigations" — two sub-columns of link lists
  3. "Subscribe Newsletter" — email input + submit button
- Bottom bar: copyright + social icons + Component Dock link.

#### Scenario: Footer displays three columns

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark background
- **AND** column 1 shows "About GlobeTrek" heading with description text
- **AND** column 2 shows "Navigations" with link lists
- **AND** column 3 shows "Subscribe Newsletter" with email input and button

#### Scenario: Footer includes Component Dock link

- **GIVEN** the user is on the page
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text reads "Component Dock"

## Verification checklist

- [ ] Navbar: logo text, nav links, dropdown on hover, hamburger on mobile
- [ ] Hero slider: 2 slides with overlay, auto-advance, CTA buttons
- [ ] Feature cards: 3 cards with overlap style, correct headings
- [ ] Services quick: 3 icon rows with headings
- [ ] Testimonials: carousel with image + quote + author, bg-light section
- [ ] Destinations: 6 cards in 3-col grid with image overlays
- [ ] CTA banner: full-width dark overlay, heading, CTA button
- [ ] Services detail: 6 icon items, "Our Services" heading
- [ ] Blog preview: card with image + excerpt
- [ ] Footer: 3 columns, dark bg, newsletter input, Component Dock link
- [ ] Color tokens: brand `#ef6c57`, bg-dark `#25262a`, bg-light `#f4f5f9`
- [ ] Font: Poppins loaded via Google Fonts `<link>` in `index.html`
- [ ] No reference to ColorLib in app code (only in spec)
- [ ] `public/CNAME` contains `globetrek.free.componentdock.com`
- [ ] `"homepage"` in package.json is `https://globetrek.free.componentdock.com`
- [ ] All sections responsive (mobile + desktop)
- [ ] Square buttons/cards (no border-radius, matching Bootstrap default)

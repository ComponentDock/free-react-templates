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

## Section structure & Gherkin scenarios

### 1. Navbar

- Sticky top bar: logo text left ("GlobeTrek"), nav links center
  (Home, Destinations (dropdown), Discount, About, Blog, Contact),
  social icons right (TripAdvisor, Twitter, Facebook, Instagram).
- Hamburger toggle on mobile with slide-out menu.

```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user is on the homepage
  Then the navbar shows "GlobeTrek" as the logo text
  And navigation links include "Home", "Destinations", "Discount", "About", "Blog", "Contact"
  And social media icons are visible on the right

Scenario: Destinations link has a dropdown
  Given the user is on the homepage
  When the user hovers over "Destinations"
  Then a dropdown appears with destination items (Japan, Europe, China, France)

Scenario: Navbar collapses to hamburger on mobile
  Given the user views the page on a mobile viewport
  Then the navbar shows a hamburger menu icon
  And clicking it opens a slide-out mobile menu
```

### 2. Hero Slider

- Full-width image carousel (2 slides) with dark overlay
  (`site-blocks-cover overlay`). Centered headline + subtext + CTA button.
- Uses `background-image` with parallax (`data-stellar-background-ratio`).
- Slide 1: "Experience Nature" + "Discover the best tour in your life"
  + "Discover More" button.
- Slide 2: "Discover Amazing Place" + "With Our Greatest Experiences"
  + "Explore More" button.

```gherkin
Scenario: Hero slider shows the first slide
  Given the user loads the homepage
  Then a full-width hero image is displayed with a dark overlay
  And the headline reads "Experience Nature"
  And a subtext reads "Discover the best tour in your life"
  And a "Discover More" button is visible

Scenario: Hero slider transitions to second slide
  Given the user is on the homepage
  When 5 seconds elapse
  Then the slider transitions to the second slide
  And the headline reads "Discover Amazing Place"
  And a "Explore More" button is visible
```

### 3. Feature Cards (overlap-section)

- 3 cards with `overlap-left` style — white card overlapping the
  hero/background area. Each has a heading + description.
  1. "Write Down Your Experience" — description text
  2. "Explore Asian Mountains" — description text
  3. "Safe Trip With Airasia" — description text

```gherkin
Scenario: Feature cards are displayed after the hero
  Given the user is on the homepage
  Then three feature cards are shown in a row
  And the first card heading is "Write Down Your Experience"
  And the second card heading is "Explore Asian Mountains"
  And the third card heading is "Safe Trip With Airasia"

Scenario: Feature cards have overlapping style
  Given the user is on the homepage
  Then each feature card has a white background
  And the cards visually overlap the hero section
```

### 4. Services Quick (icon rows)

- 3 rows: each with icon + heading + description.
  1. Air Ticketing
  2. Cruises
  3. Tour Packages

```gherkin
Scenario: Services quick section shows three items
  Given the user scrolls to the services quick section
  Then three service items are displayed in a row
  And each item has an icon, heading, and description
  And the items are "Air Ticketing", "Cruises", "Tour Packages"
```

### 5. Testimonials Carousel

- Section with `bg-light` background. Centered heading "Testimonials".
- Owl-carousel of testimonials: image left + white card right with
  quote text + author name + "Traveler" link.
  - James Martin, Clair Augustin, James Martin (3 testimonials)

```gherkin
Scenario: Testimonials section displays carousel
  Given the user scrolls to the testimonials section
  Then a centered heading "Testimonials" is displayed
  And a carousel shows testimonial slides
  And each slide has an image on the left and a white card on the right
  And each card contains a quote, author name, and "Traveler" label

Scenario: Testimonials carousel auto-advances
  Given the user is viewing the testimonials section
  When 5 seconds elapse
  Then the carousel advances to the next testimonial
```

### 6. Our Destinations

- Section heading "Our Destinations". 6 destination cards in a grid
  (3 columns). Each card: image + overlay + heading.
  1. Santorini, Greece
  2. Rome, Italy
  3. Mount Fuji, Japan
  4. Camels, Dubai
  5. Elizabeth Tower, London
  6. Opera House, Australia

```gherkin
Scenario: Destinations grid shows six destinations
  Given the user scrolls to the destinations section
  Then a heading "Our Destinations" is displayed
  And six destination cards are shown in a 3-column grid
  And each card has a background image with an overlay and a heading

Scenario: Destination card content
  Given the destinations grid is visible
  Then the destinations listed are:
    | destination        |
    | Santorini, Greece  |
    | Rome, Italy        |
    | Mount Fuji, Japan  |
    | Camels, Dubai      |
    | Elizabeth Tower, London |
    | Opera House, Australia  |
```

### 7. CTA Banner (Experience Our Outstanding Services)

- Full-width dark overlay section (`site-blocks-cover overlay`).
  Background image with parallax. Heading:
  "Experience Our Outstanding Services". Subtext + CTA button.

```gherkin
Scenario: CTA banner section is displayed
  Given the user scrolls past the destinations
  Then a full-width dark overlay banner is shown
  And the heading reads "Experience Our Outstanding Services"
  And a call-to-action button is visible below the heading
```

### 8. Services Detail (6 items)

- White background section. Heading "Our Services".
- 6 icon+text items in a grid:
  1. Air Ticketing
  2. Cruises
  3. Tour Packages
  4. Hotel Accommodations
  5. Sea Explorations
  6. Ski Experiences

```gherkin
Scenario: Services detail shows six items
  Given the user scrolls to the services detail section
  Then a heading "Our Services" is displayed
  And six service items are shown in a grid
  And the items are "Air Ticketing", "Cruises", "Tour Packages",
    "Hotel Accommodations", "Sea Explorations", "Ski Experiences"

Scenario: Each service item has an icon
  Given the services detail section is visible
  Then each item displays a circular icon and descriptive text
```

### 9. Blog Preview

- `bg-light` background section. Shows a blog post preview card
  with image + excerpt + metadata.

```gherkin
Scenario: Blog preview section exists
  Given the user scrolls to the blog section
  Then a blog post preview card is displayed
  And it contains an image, title, and excerpt text
```

### 10. Footer

- Dark background (`#25262a`). 3 columns:
  1. "About GlobeTrek" — about text
  2. "Navigations" — two sub-columns of link lists
  3. "Subscribe Newsletter" — email input + submit button
- Bottom bar: copyright + social icons + Component Dock link.

```gherkin
Scenario: Footer displays three columns
  Given the user scrolls to the footer
  Then the footer has a dark background
  And column 1 shows "About GlobeTrek" heading with description text
  And column 2 shows "Navigations" with link lists
  And column 3 shows "Subscribe Newsletter" with email input and button

Scenario: Footer includes Component Dock link
  Given the user is on the page
  Then the footer contains a link to "https://www.componentdock.com/"
  And the link text reads "Component Dock"
```

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

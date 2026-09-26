# Template: Collabiz (Business Consulting)

## Purpose

Recreation of ColorLib "Busicol" — a business consulting / financial services
landing page with green brand accent, hero slider, service cards, portfolio
gallery, testimonials, and CTA sections.

- **Source:** https://colorlib.com/wp/template/busicol/
- **Preview:** https://preview.colorlib.com/theme/busicol/
- **New name:** `collabiz`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

| Token            | Value                          | Notes                                 |
| ---------------- | ------------------------------ | ------------------------------------- |
| Primary brand    | `#28AE60`                      | Green — buttons, accents, about-wrap bg |
| Dark             | `#2C2C2C`                      | Headings, section titles, footer bg   |
| Footer dark      | `#1F1F1F`                      | Footer bottom border area             |
| Text gray        | `#727272`                      | Body text, section subtitles          |
| Light bg         | `#F5FBFF`                      | Counter area background               |
| White            | `#FFFFFF`                      | Cards, header, testimonial area       |
| Font family      | `"Poppins", sans-serif`        | All headings and body                 |
| Secondary font   | `"Roboto", sans-serif`         | Used in some secondary text           |
| Button primary   | bg `#28AE60`, color `#fff`     | `.boxed-btn3` — no radius             |
| Button white     | border white, color `#fff`     | `.boxed-btn3-white` — no radius       |
| Button green-outline | border `#28AE60`, color `#28AE60` | `.boxed-btn3-green-2` — no radius  |
| Border radius    | `4px`                          | Minimal rounding (book_btn only)      |
| Section title    | 36px, weight 400, color `#2C2C2C` | Centered, `.section_title h3`     |
| Section subtitle | 16px, color `#727272`, 28px lh | Centered, `.section_title p`          |

## Sections (in order)

### 1. Header
- **Top bar (desktop only):** social icons (LinkedIn, Facebook, Google+), contact info (email, phone).
- **Main nav:** logo left, horizontal menu right (Home, About, Services, Blog dropdown, Pages dropdown, Contact). Sticky on scroll.
- Sticky header has a white background.

### 2. Hero / Slider
- Full-width carousel (owl-carousel). Each slide has a background image (cover), large heading ("Grow Big with Musicol Business"), and two CTA buttons:
  - Green "Our Services" button (`.boxed-btn3`)
  - White outline "See How it Work" button with play icon (`.boxed-btn3-white`)
- Height: 900px desktop, 100vh responsive.

### 3. Service Area
- Section title: "Explore Our Solutions"
- 3 cards in a row (3 columns). Each card has a background image (cover), an SVG icon, and an h3 title.
- On hover: overlay with inner content (h4 title + description paragraph).
- Services: Invoicing, Business Growth, Problem Solving.

### 4. About
- Split layout: left image (full width of column), right text content.
- Heading: "The Largest Business Expert"
- Paragraph + 3 bullet points (apartments, irure dolor, voluptatem).
- Green "About Us" button.

### 5. Counter
- Light background (`#F5FBFF`).
- 3 counters in a row: "520 +" Total Projects, "244" On Going Projects, "95 %" Job Success.
- Animated counter with waypoints.

### 6. Gallery / Portfolio
- Section title: "Our Recent Works" + subtitle.
- 5 portfolio items in a masonry grid (Isotope):
  - 3 items in 4-col column (cat1, cat3/4, cat4)
  - 1 item in 8-col span (cat2)
  - 1 item in 4-col (cat2)
- Each item: image + hover overlay with title "Product Branding" and category "Branding".
- Green outline "More Works" button at bottom center.

### 7. About Wrap (Features)
- Dark green background (`#28AE60` on `about_wrap_area`).
- 3 feature cards centered: Unlimited Control, Rapidly Growth, Problem Solving.
- Each: SVG icon + h3 title + short description. Text centered.

### 8. Financial Solution
- Carousel (owl-carousel) with text + image side by side.
- Left: heading "Gives you the best Financial solution for business" + paragraph (3 slides, same content).
- Right: image (`finance.png`).

### 9. Testimonial
- Carousel with avatar-based dot navigation.
- Quote text + author name ("Robert Jonson") + role ("Business Owner").
- 3 slides, same content.

### 10. Project CTA
- Centered: heading "Do you Have any Project?" + paragraph.
- White outline "Contact Us" button.

### 11. Footer
- Dark background (`#2C2C2C`).
- 4 columns:
  1. Logo + paragraph + social icons (Facebook, Twitter, Instagram)
  2. Services links (Design, Development, Marketing, Consulting, Finance)
  3. Useful Links (About, Blog, Contact, Free quote)
  4. Address (street, phone, email)
- Copyright bar at bottom with "Made with ❤️ by Colorlib" (replace with Component Dock).

## Gherkin Scenarios

### Header
```gherkin
Scenario: Top bar shows contact info
  Given I view the page on desktop
  Then I see email "info@docmed.com" and phone "1601-609 6780"
  And I see social icons for LinkedIn, Facebook, Google+

Scenario: Main nav has correct links
  Given I view the page
  Then the nav contains Home, About, Services, Blog, Pages, Contact
  And Blog and Pages have dropdown submenus

Scenario: Header is sticky on scroll
  Given I scroll down past the hero
  Then the header remains visible at the top
```

### Hero
```gherkin
Scenario: Hero displays heading and CTAs
  Given I view the hero section
  Then I see a heading with "Grow Big" and "Musicol Business"
  And I see a green "Our Services" button
  And I see a white outline "See How it Work" button with a play icon

Scenario: Hero is full-width with background image
  Given I view the hero section
  Then it spans full viewport width
  And it has a background image covering the area
```

### Service Area
```gherkin
Scenario: Service cards display with hover effect
  Given I view the service area
  Then I see 3 service cards: Invoicing, Business Growth, Problem Solving
  And each card has an SVG icon and title
  When I hover over a card
  Then an overlay appears with the service title and description

Scenario: Service section has centered title
  Given I view the service area
  Then I see "Explore Our Solutions" centered above the cards
```

### About
```gherkin
Scenario: About section shows split layout
  Given I view the about area
  Then I see an image on the left and text on the right
  And the heading reads "The Largest Business Expert"
  And there are 3 bullet points below the paragraph

Scenario: About section has CTA button
  Given I view the about area
  Then I see a green "About Us" button
```

### Counter
```gherkin
Scenario: Counter displays stats
  Given I view the counter area
  Then I see 3 stats: "520 +" Total Projects, "244" On Going Projects, "95 %" Job Success
  And the background is light (#F5FBFF)

Scenario: Counter animates on scroll
  Given I scroll to the counter area
  Then the numbers animate up from zero
```

### Gallery
```gherkin
Scenario: Gallery shows portfolio grid
  Given I view the gallery section
  Then I see 5 portfolio items in a masonry layout
  And the heading reads "Our Recent Works"
  And each item shows "Product Branding" on hover

Scenario: Gallery has More Works button
  Given I view the gallery section
  Then I see a green outline "More Works" button centered below the grid
```

### About Wrap
```gherkin
Scenario: About wrap shows features on green background
  Given I view the about wrap area
  Then the background is green (#28AE60)
  And I see 3 feature cards: Unlimited Control, Rapidly Growth, Problem Solving
  And each card has an icon, title, and short description
```

### Financial Solution
```gherkin
Scenario: Financial solution has text and image
  Given I view the financial solution area
  Then I see a carousel with heading "Gives you the best Financial solution for business"
  And an image on the right side
```

### Testimonial
```gherkin
Scenario: Testimonial shows quote and author
  Given I view the testimonial area
  Then I see a quote paragraph
  And the author is "Robert Jonson" with role "Business Owner"
  And there are avatar dot indicators for navigation
```

### Project CTA
```gherkin
Scenario: Project CTA section
  Given I view the project area
  Then I see "Do you Have any Project?" heading
  And a white outline "Contact Us" button
```

### Footer
```gherkin
Scenario: Footer has 4 columns
  Given I view the footer
  Then I see logo + social links column
  And a Services column with 5 links
  And a Useful Links column with 4 links
  And an Address column with street, phone, email

Scenario: Footer copyright links Component Dock
  Given I view the footer bottom
  Then I see "Made with ❤️ by Component Dock" linking to componentdock.com
```

## Verification Checklist

- [ ] Header: top bar (social + contact) only on desktop, sticky nav, correct menu items with dropdowns
- [ ] Hero: full-width carousel, heading, two CTA buttons (green + white outline)
- [ ] Service Area: 3 cards with background images, hover overlay with description
- [ ] About: split layout (image left, text right), heading, bullets, green CTA
- [ ] Counter: 3 animated counters on light background, correct numbers
- [ ] Gallery: 5 items masonry grid, hover overlay, "More Works" green outline button
- [ ] About Wrap: green background, 3 feature cards centered
- [   ] Financial Solution: carousel with text + image
- [ ] Testimonial: carousel with quote, author, avatar dots
- [ ] Project CTA: centered heading + white outline button
- [ ] Footer: dark background, 4 columns, copyright with Component Dock link
- [ ] Colors match tokens: #28AE60 green, #2C2C2C dark, #F5FBFF light, #727272 gray
- [ ] Font: Poppins used throughout
- [ ] Responsive: mobile nav hamburger, stacked columns, full-width hero on small screens

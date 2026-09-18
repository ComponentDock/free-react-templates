# Template: CoralBay (Hotel / Resort)

## Purpose

Recreation of the ColorLib **Marimar** hotel template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source slug:** `marimar`
- **Source URL:** https://colorlib.com/wp/template/marimar/
- **Preview URL:** https://preview.colorlib.com/theme/marimar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/marimar-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui

## Design tokens

Extracted from the live preview's `styles/main_styles.css`:

| Token | Value | Usage |
|---|---|---|
| Primary brand | `#ff9000` (amber/orange) | Buttons, links, accents, hover states |
| Dark background | `#0e0923` (deep navy-purple) | Footer parallax, overlay panels |
| Accent red | `#db5246` | Secondary accent (subtle) |
| Tomato | `#FF6347` | Alert / error tone |
| Body font | `'Lato', sans-serif` | All body text, nav, form inputs |
| Heading font | `'Playfair Display', serif` | Section titles (h1 in sections) |
| Text gray | `#a5a5a5` | Placeholder text, muted body |
| Text dark gray | `#4a4f59` | Paragraph body text |
| Text near-black | `#150f24` | Section headings |
| White | `#ffffff` | Card backgrounds, page bg |
| Button width | 186px | CTA buttons |
| Button height | 65px | CTA buttons |
| Button border | 2px solid `#ff9000` | All CTA buttons |
| Button radius | 7px | Rounded CTA buttons |
| Button text | uppercase, 14px, weight 700, letter-spacing 0.075em | CTA labels |
| Button hover | transparent background, `#ff9000` text | Hover state swap |
| Section heading | 36px, font-weight 400, color `#150f24` | h1 in content sections |
| Overlay dark | `rgba(14,9,35,0.88)` | Gallery/hero overlays |

## Section structure

1. **Navbar** — Centered logo, horizontal nav (Home, About, Rooms, News, Contact), social icon row (Pinterest, Facebook, Twitter, Dribbble, Behance), "Book Your Room Now" CTA link, hamburger for mobile.
2. **Hero** — Full-width parallax background image, centered heading "Book Your Stay", subtext paragraph, amber "book now" button.
3. **Booking Form** — Inline form row: check-in date picker, check-out date picker, rooms/rooms count dropdown, amber "book now" submit button. Overlaps hero slightly.
4. **Intro** — Centered heading "Amazing Hotel in front of the Sea" with paragraph description below.
5. **Gallery Slider** — Horizontal image carousel (4+ slides) with dark overlay on hover showing room/venue name + arrow icon.
6. **Rooms Right** — Split layout: left = image slider of room photos, right = "Luxury Double Suite" heading, description, amenity list (icons + text), price "$129/Night", "book now" button.
7. **Rooms Left** — Mirror of Rooms Right: left = "Luxury Single Room" content + amenities + "$89/Night", right = image slider.
8. **Discover** — "Discover Marimar Hotel" heading (renamed to CoralBay), description text, highlighted stat number, amber "discover" button, plus an image slider of experience cards (Weddings, Parties, Relax) with dark overlay + centered text.
9. **Testimonials** — Carousel of testimonial cards: quote text, author avatar, author name + role.
10. **Footer** — Parallax background, centered logo, three-column layout (useful links, hotel address, contact info), copyright bar with "Made with Component Dock" link.

## Gherkin requirements

### Navbar
```gherkin
Feature: CoralBay Navbar

  Scenario: Desktop navbar renders all nav links
    Given the page is loaded on a desktop viewport
    Then I should see a navbar with links "Home", "About", "Rooms", "News", "Contact"
    And I should see social media icons for Pinterest, Facebook, Twitter, Dribbble, Behance
    And I should see a "Book Your Room Now" call-to-action

  Scenario: Mobile hamburger toggle
    Given the page is loaded on a mobile viewport
    Then the nav links should be hidden
    When I click the hamburger icon
    Then the mobile menu overlay should appear with all nav links
```

### Hero
```gherkin
Feature: CoralBay Hero

  Scenario: Hero displays heading and CTA
    Given the page is loaded
    Then I should see the heading "Book Your Stay"
    And I should see a paragraph of descriptive text
    And I should see a "book now" button

  Scenario: Hero has parallax background
    Given the page is loaded
    Then the hero section should have a background image
```

### Booking Form
```gherkin
Feature: CoralBay Booking Form

  Scenario: Booking form renders all fields
    Given the page is loaded
    Then I should see a check-in date input
    And I should see a check-out date input
    And I should see a rooms selector
    And I should see a "book now" submit button

  Scenario: Booking form fields are interactive
    Given the page is loaded
    When I click the check-in input
    Then a date picker should appear
```

### Intro
```gherkin
Feature: CoralBay Intro

  Scenario: Intro section displays heading and description
    Given the page is loaded
    Then I should see the heading "Amazing Hotel in front of the Sea"
    And I should see a descriptive paragraph below it
```

### Gallery Slider
```gherkin
Feature: CoralBay Gallery

  Scenario: Gallery renders image carousel
    Given the page is loaded
    Then I should see a carousel of at least 4 gallery images

  Scenario: Gallery hover shows overlay
    Given the page is loaded
    When I hover over a gallery image
    Then a dark overlay should appear with a venue name and arrow icon
```

### Rooms Right
```gherkin
Feature: CoralBay Rooms Right

  Scenario: Rooms Right section renders
    Given the page is loaded
    Then I should see the heading "Luxury Double Suite"
    And I should see an image slider of room photos
    And I should see an amenities list with icon + text items
    And I should see the price "$129/Night"
    And I should see a "book now" button
```

### Rooms Left
```gherkin
Feature: CoralBay Rooms Left

  Scenario: Rooms Left section renders
    Given the page is loaded
    Then I should see the heading "Luxury Single Room"
    And I should see an amenities list with icon + text items
    And I should see the price "$89/Night"
    And I should see a "book now" button
    And I should see an image slider of room photos on the right
```

### Discover
```gherkin
Feature: CoralBay Discover

  Scenario: Discover section displays heading and content
    Given the page is loaded
    Then I should see the heading "Discover CoralBay"
    And I should see a descriptive paragraph
    And I should see a highlighted stat number
    And I should see a "discover" button

  Scenario: Discover experience cards render
    Given the page is loaded
    Then I should see experience cards for "Weddings", "Parties", "Relax"
    And each card should have a background image with dark overlay
```

### Testimonials
```gherkin
Feature: CoralBay Testimonials

  Scenario: Testimonials carousel renders
    Given the page is loaded
    Then I should see a carousel of testimonial cards
    And each card should show a quote, author avatar, author name and role
```

### Footer
```gherkin
Feature: CoralBay Footer

  Scenario: Footer renders all columns
    Given the page is loaded
    Then I should see a three-column footer layout
    And column 1 should show useful links
    And column 2 should show hotel address
    And column 3 should show contact info (phone, email)
    And I should see a copyright bar with "Made with Component Dock" link

  Scenario: Footer has parallax background
    Given the page is loaded
    Then the footer should have a parallax background image
```

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar: all 5 links visible, social icons present, CTA visible, mobile hamburger works
- [ ] Hero: heading + paragraph + CTA button, parallax background applied
- [ ] Booking form: date inputs + rooms dropdown + submit button
- [ ] Intro: centered heading + description
- [ ] Gallery: carousel with 4+ slides, hover overlay with name + arrow
- [ ] Rooms Right: slider + heading + amenities + price + button, layout correct
- [ ] Rooms Left: mirrored layout, correct content + price
- [ ] Discover: heading + text + stat + button + 3 experience cards with overlays
- [ ] Testimonials: carousel with avatar + name + quote
- [ ] Footer: 3 columns, parallax bg, Component Dock link, copyright
- [ ] All design tokens applied: #ff9000 brand, Playfair Display headings, Lato body, 7px button radius
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images via picsum.photos/seed/coralbay-*
- [ ] Responsive: hamburger nav, stacked layouts on mobile

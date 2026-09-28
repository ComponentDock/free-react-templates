# Template: Morselry (Restaurant)

## Purpose

Recreation of the ColorLib **Resta** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** [ColorLib Resta](https://colorlib.com/wp/template/resta/)
- **Preview:** https://preview.colorlib.com/theme/resta/
- **New name:** `morselry` (apps/morselry, @free-react-templates/morselry)
- **Surge target:** https://morselry.free.componentdock.com
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript · Vitest

## Design Tokens (extracted from preview)

| Token | Value | Notes |
|---|---|---|
| Brand color (primary) | `#DB9A64` | Warm copper/orange — buttons, accents, long dash, section subtitle |
| Heading color | `#001D38` | Deep navy — h1–h5, button hover bg |
| Body text | `#596672` | Muted blue-grey |
| Body font | Poppins | Google Fonts, sans-serif |
| Heading font | Philosopher | Google Fonts, serif-like sans-serif |
| Slider overlay | gradient `rgba(0,29,56,0.7)` → `rgba(26,13,1,0.6)` left-to-right |
| Button (CTA) | bg `#DB9A64`, text white, border-radius 0px, letter-spacing 2px, uppercase |
| Button hover | bg `#001D38`, text white |
| Header CTA underline | bg `#FFE8C3` |
| Testimonial bg | background image with overlay |
| Section padding | 120px top/bottom |
| Links default | `#1F1F1F` |
| Placeholder text | `#cccccc` |

## Section Structure (in order)

1. **Navbar** — Transparent header over hero. Logo left, nav center (Home, Menu, Pages dropdown, Blog dropdown, Contact), "Book a Table" CTA right.
2. **Hero Slider** — Full-width carousel (2–3 slides). Dark gradient overlay. Centered headline ("Fresh And Delicious Food For Your Health") + "View Menus" button. Left/right navigation arrows.
3. **About** — Two-column: left has heading, long dash accent, paragraph, food list (Fresh Ingredients, Expert Cooker with SVG icons). Right has two overlapping images (large + small).
4. **Delicious Menu** — Section heading "Delicious Food For You". Tabbed categories (Dinner/Breakfast/Lunch with icons). 6 menu items in 2-column grid: food image thumbnail + title + description + price.
5. **Testimonials** — Dark overlay bg. Subtitle "Testimonials" + heading "Our Customer's Say". Owl-style carousel: quote + author photo + name + 5-star rating. 2 testimonials alternating.
6. **Photo Gallery** — Heading "Photo Gallery". Asymmetric grid: 2 large images + 4 small images. Lightbox popup on click.
7. **Reservation** — Heading "Reservation". Two-column: left is Google Map embed, right is "Book a Table" form (Name, Phone, Date picker, Dinner select, Person select, Book button). Below form: Address + Reservation phone info with icons.
8. **Footer** — Dark background. 3-column: logo + address + social icons | Useful Links | Subscribe form + newsletter text. Copyright bar at bottom.

## Gherkin Scenarios

```gherkin
Feature: Morselry Restaurant Template

  Background:
    Given the template is loaded at the root URL

  Scenario: Navbar renders correctly
    Then the navbar should display the logo
    And the nav should contain links: Home, Menu, Pages, Blog, Contact
    And a "Book a Table" CTA should be visible
    And the navbar should be transparent over the hero

  Scenario: Hero slider displays with overlay
    Then a hero carousel should be visible
    And the headline should read "Fresh And Delicious Food For Your Health"
    And a "View Menus" button should be present
    And a dark gradient overlay should cover the hero background

  Scenario: About section shows restaurant info
    Then a heading "Sed ut perspiciatis unde omnis iste natus" should be visible
    And a description paragraph should be present
    And a food list with "Fresh Ingredients" and "Expert Cooker" should display
    And two overlapping images should appear on the right

  Scenario: Delicious menu shows tabbed food items
    Then a heading "Delicious Food For You" should be visible
    And three tabs should be present: Dinner, Breakfast, Lunch
    And the Dinner tab should be active by default
    And six menu items should be displayed in a 2-column grid
    And each item should show a food image, title, description, and price

  Scenario: Testimonials carousel displays
    Then a heading "Our Customer's Say" should be visible
    And a subtitle "Testimonials" should appear above it
    And at least two testimonials should be in the carousel
    And each testimonial should show a quote, author name, photo, and star rating

  Scenario: Photo gallery renders with lightbox
    Then a heading "Photo Gallery" should be visible
    And six gallery images should be displayed in an asymmetric grid
    And clicking a gallery image should open a lightbox overlay

  Scenario: Reservation form is functional
    Then a heading "Reservation" should be visible
    And a "Book a Table" form should be present
    And the form should have fields: Name, Phone, Date, Dinner, Person
    And a "Book" submit button should be visible
    And address and reservation phone info should display below the form

  Scenario: Footer contains required elements
    Then the footer should show the logo and address
    And social media icon links should be present (Facebook, Twitter, Instagram, Pinterest, YouTube)
    And a "Useful Links" column should list Menu, About, Blog
    And a subscribe form with email input and button should be present
    And a "Made with Component Dock" attribution link to componentdock.com must be present
    And the copyright text should not reference Colorlib
```

## Verification Checklist

- [ ] All sections match the original section order (8 sections)
- [ ] Brand color #DB9A64 used consistently for accents, buttons, and highlights
- [ ] Heading font Philosopher, body font Poppins
- [ ] Hero has dark gradient overlay (not solid black)
- [ ] Buttons have 0px border-radius (sharp corners), letter-spacing 2px
- [ ] Testimonials section has dark background image overlay
- [ ] Gallery uses asymmetric layout (large + small grid)
- [ ] Reservation form has all 5 fields + submit button
- [ ] Footer links to componentdock.com (not Colorlib)
- [ ] No Colorlib references in app code (provenance only in spec)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] 100% test coverage maintained
- [ ] No new dependencies added unnecessarily

# Template: CruiseCraft (Car Rental)

## Purpose

Recreation of ColorLib "Carrentals" template.
- **Source slug:** `carrentals`
- **Preview URL:** https://preview.colorlib.com/theme/carrentals/
- **Source page:** https://colorlib.com/wp/template/carrentals/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | Roboto (400, 700, 900) | Google Fonts via `<link>` |
| Brand color | `#0779e4` | Blue — links, primary buttons, CTA section bg |
| Text color | `#364d59` | Dark teal, used for headings and body |
| Black | `#000` | Strong text |
| Light background | `#f8f9fa` | Alternate section bg (`bg-light`) |
| White | `#fff` | Card backgrounds, button fill |
| Button primary | `bg: #0779e4`, `padding: 12px 25px`, `color: #fff` | Standard Bootstrap primary |
| Button white | `bg: #fff`, `color: #0779e4` | Inverted style |
| Border radius | Bootstrap default (~0.25rem / 4px) | No custom radius overrides |
| Section backgrounds | White, `#f8f9fa` (light), `#0779e4` (primary/CTA) | Alternating sections |

## Section structure (order from preview)

1. **Navbar** — fixed top, logo left, 6 nav links right (Home, Listing, Testimonials, Blog, About, Contact), mobile hamburger
2. **Hero** — full-width background image, centered heading "Rent a car is within your finger tips.", trip-form overlay (pickup location, dropoff location, pickup date, dropoff date)
3. **How It Works** — 3 numbered steps in a row: "Select a car", "Fill up form", "Payment" with icon circles
4. **Promo/Banner** — "You can easily avail our promo for renting a car." with descriptive text, bg-light
5. **Car Listings** — 6 car cards in 2-col grid, each with image, car name, price, short description, "Details" button
6. **Features** — "Features" heading, 6 feature items in 2-col grid with icon + title + description (listing-feature pattern)
7. **Testimonials** — "Testimonials" heading, 3 testimonial-2 cards with quote, name, role; bg-light
8. **CTA** — "What are you waiting for?" heading, short text, button; bg-primary (#0779e4) full-width
9. **Footer** — 4-column layout (About Us, Quick Links, Resources, Support, Company), dark bg

## Gherkin requirements

```gherkin
Feature: CruiseCraft car rental template

  Background:
    Given the user opens the CruiseCraft template

  Scenario: Navbar renders correctly
    Then the navbar contains the logo
    And the navbar contains 6 navigation links
    And the navbar is sticky/fixed on scroll
    And a mobile hamburger menu exists

  Scenario: Hero section displays
    Then a hero banner with background image is visible
    And the hero contains a heading about car rental
    And a trip form with pickup/dropoff fields is rendered

  Scenario: Trip form has required fields
    Then a pickup location field is present
    And a dropoff location field is present
    And a pickup date picker is present
    And a dropoff date picker is present
    And a submit/CTA button is present

  Scenario: How It Works section displays
    Then 3 numbered steps are shown in a row
    And each step has an icon and title
    And the step titles are "Select a car", "Fill up form", "Payment"

  Scenario: Promo banner section displays
    Then a promotional banner is visible with descriptive text
    And the section uses a light background

  Scenario: Car Listings section displays
    Then 6 car cards are shown in a 2-column grid
    And each card shows an image, name, price, and description
    And each card has a "Details" action button

  Scenario: Features section displays
    Then a "Features" heading is visible
    And 6 feature items are shown in a 2-column grid
    And each feature has an icon, title, and description

  Scenario: Testimonials section displays
    Then a "Testimonials" heading is visible
    And 3 testimonial cards are shown
    And each testimonial has a quote, name, and role
    And the section uses a light background

  Scenario: CTA section displays
    Then a "What are you waiting for?" heading is visible
    And a call-to-action button is present
    And the section uses the brand blue background

  Scenario: Footer renders correctly
    Then the footer has 4+ columns with link groups
    And the footer contains a Component Dock link
    And the footer has a dark background
```

## Verification checklist

- [ ] Brand color `#0779e4` used consistently for links, buttons, CTA bg
- [ ] Font family is Roboto (loaded via Google Fonts)
- [ ] Section order matches preview exactly
- [ ] Hero has background image with overlay and trip form
- [ ] 3-step "How it Works" section with icon circles
- [ ] 6 car cards in 2-col grid layout
- [ ] 6 feature items in 2-col grid layout
- [ ] 3 testimonial cards
- [ ] CTA section with brand blue full-width bg
- [ ] Footer has 4+ columns, dark bg, Component Dock link
- [ ] Navbar is sticky with mobile hamburger
- [ ] No ColorLib references in app code (only in spec/docs)
- [ ] Placeholder images via picsum.photos
- [ ] lucide-react icons used (no copied icon assets)
- [ ] Footer links to componentdock.com

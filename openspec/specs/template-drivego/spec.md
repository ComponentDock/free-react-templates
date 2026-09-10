# Template: DriveGo (Car Rental)

## Purpose

Recreation of ColorLib **Carrentals** template.
- Source: https://colorlib.com/wp/template/carrentals/
- Preview: https://preview.colorlib.com/theme/carrentals/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- New name: **DriveGo** (apps/drivego, `@free-react-templates/drivego`)

## Design tokens

Extracted from the preview's `css/style.css`:

| Token | Value | Source |
|---|---|---|
| Brand color (primary) | `#0779e4` | `.btn-primary`, `.text-primary`, `.bg-primary`, `.trip-form` submit |
| Font family | `"Roboto", sans-serif` | `@font-face` declarations (400, 700, 900 weights) |
| Hero heading | `#000`, `font-size: 50px`, `font-weight: 900` | `.hero .intro h1` |
| Trip form | `border-radius: 7px`, white bg, `box-shadow: 0 15px 30px rgba(0,0,0,0.1)` | `.trip-form` |
| Listings card | `border-radius: 7px`, white bg, `padding: 20px` | `.listing` |
| Testimonial card | `border-radius: 7px`, `border-bottom: 4px solid #0779e4` | `.testimonial-2` |
| Step numbers | `text-primary` (#0779e4) | `.step .number.text-primary` |
| Service icon | `border-radius: 50%` (circle) | `.service-1 .service-1-icon` |
| CTA banner | `background: #0779e4`, white text | `.bg-primary` |
| Button primary | Bootstrap default `.btn-primary` + `padding: 12px 25px` | `.btn.btn-primary` |
| Button white (CTA) | `background: #fff`, `color: #0779e4` | `.btn.btn-white` |
| Navbar | White bg, logo black (`#000`), nav links `rgba(0,0,0,0.7)`, active link `#0779e4` | `.site-navbar` |
| Footer | Dark background, `color: rgba(0,0,0,0.5)` for links | `.site-footer` |

## Visual design (from screenshot)

The template has a clean, professional car-rental aesthetic:
- White navbar with bold "CarRental" logo on the left, navigation links on the right
- Full-screen hero with a dark car image, overlaid headline and a prominent white search form
- Clean white sections with subtle gray (`bg-light`) alternating backgrounds
- Blue (#0779e4) brand accent used sparingly: CTA buttons, step numbers, active nav, testimonial borders
- Card-based car listings with a side-by-side image+content layout
- Circle icon features section with hover effects
- Blue CTA banner before the dark footer

## Section structure (top to bottom)

1. **Navbar** — sticky, white, logo left, nav right (Home, Listing, Testimonials, Blog, About, Contact), mobile hamburger
2. **Hero** — full-viewport bg image, headline "Rent a car is within your finger tips", search form overlay (Select Type dropdown, Pick up date, Drop off date, Search Now button)
3. **How It Works** — 3 numbered steps (Select a car, Fill up form, Payment) with step numbers in blue + "Video how it works" play link
4. **Promo** — split layout: text left ("You can easily avail our promo for renting a car") + car image right, CTA button
5. **Car Listings** — 3-col grid of 6 car cards (image, car name, price/day, specs row: Luggage/Doors/Passenger, description, Rent Now button)
6. **Features** — 3x2 grid of 6 service cards with circle icons (home, gear, clock, user, video, key), title, description, "Learn more" link
7. **Testimonials** — 3-col grid, 3 testimonial cards (quote, avatar photo, name + role)
8. **CTA Banner** — blue bg-primary section: "What are you waiting for?" headline + "Rent a car now" button
9. **Footer** — About Us (with social icons), 4 link columns (Quick Links, Resources, Support, Company), copyright line

## Gherkin requirements

```gherkin
Feature: DriveGo — Car Rental Template

  Scenario: Navbar displays correctly
    Given I am on the DriveGo page
    Then the navbar should show the DriveGo logo on the left
    And the navigation links should be: Home, Listing, Testimonials, Blog, About, Contact
    And the navbar should be sticky on scroll
    And a mobile hamburger menu should appear on small screens

  Scenario: Hero section renders
    Given I am on the DriveGo page
    Then the hero should be full-viewport height
    And it should display the headline "Rent a car is within your finger tips"
    And a search form should appear with a Select Type dropdown
    And the form should have Pick up and Drop off date inputs
    And the form should have a Search Now button

  Scenario: How It Works section shows 3 steps
    Given I am on the DriveGo page
    Then there should be 3 numbered steps
    And step 1 should be "Select a car"
    And step 2 should be "Fill up form"
    And step 3 should be "Payment"
    And a "Video how it works" link should be visible

  Scenario: Promo section shows car image with text
    Given I am on the DriveGo page
    Then a promo section should display a car image
    And the text should describe a rental promo
    And a "Meet them now" CTA button should be present

  Scenario: Car Listings shows 6 vehicle cards
    Given I am on the DriveGo page
    Then the Car Listings section should display 6 car cards
    And each card should show the car image, name, and price per day
    And each card should show specs: Luggage, Doors, Passenger count
    And each card should have a "Rent Now" button

  Scenario: Features section shows 6 service cards
    Given I am on the DriveGo page
    Then 6 service cards should be visible in a grid
    And each card should have a circle icon, title, description, and "Learn more" link

  Scenario: Testimonials section shows 3 reviews
    Given I am on the DriveGo page
    Then 3 testimonial cards should be visible
    And each card should show a quote, avatar, name, and role

  Scenario: CTA banner is present
    Given I am on the DriveGo page
    Then a blue CTA banner should be visible
    And it should show "What are you waiting for?"
    And a "Rent a car now" button should be present

  Scenario: Footer is complete
    Given I am on the DriveGo page
    Then the footer should contain About Us text and social icons
    And it should have 4 link columns: Quick Links, Resources, Support, Company
    And the copyright line should be present
    And the footer should link to https://www.componentdock.com/

  Scenario: Footer links to Component Dock
    Given I am on the DriveGo page
    Then the footer should contain a link to https://www.componentdock.com/
    And it should be branded as "Component Dock"
```

## Verification checklist

- [ ] Navbar: logo renders, all nav links present, sticky behavior works, hamburger on mobile
- [ ] Hero: full viewport height, headline visible, search form with all inputs functional
- [ ] How It Works: 3 steps displayed with blue numbers, video link present
- [ ] Promo: car image + text + CTA button
- [ ] Car Listings: 6 cards in 3-column grid, each with image/name/price/specs/Rent Now
- [ ] Features: 6 service cards with circle icons, hover effect
- [ ] Testimonials: 3 cards with quote, avatar, name, role
- [ ] CTA Banner: blue background, headline, button
- [ ] Footer: About Us, 4 link columns, social icons, copyright, Component Dock link
- [ ] Design tokens: brand #0779e4, font Roboto, border-radius 7px, proper spacing
- [ ] No ColorLib references in app code
- [ ] Images use picsum.photos placeholders
- [ ] 100% test coverage (TDD)
- [ ] Spec folder: openspec/specs/template-drivego/spec.md
- [ ] Docs folder: docs/templates/drivego/

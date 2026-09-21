# Template: Statutory (Legal / Law Firm)

## Purpose

Recreation of the ColorLib **Lawfirm** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source slug:** `lawfirm`
- **Source URL:** https://colorlib.com/wp/template/lawfirm/
- **Preview URL:** https://preview.colorlib.com/theme/lawfirm/
- **New name:** `statutory`
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui shared components
- **Deploy target:** `statutory.free.componentdock.com`

## Design tokens

Extracted from `css/style.css` at the preview URL on 2026-09-21.

| Token | Value | Notes |
|-------|-------|-------|
| Primary blue | `#007bff` | `.btn-primary`, links |
| Primary hover | `#0069d9` | |
| Gold accent | `#cbb88c` | Border accents, highlight lines |
| Dark palette (intro boxes) | `#1d2227`, `#161a1e`, `#121518`, `#0e1013` | Gradient darkening from left to right across 4-column intro strip |
| Overlay / hero | `#1d2227` at 50% opacity | Hero section dark overlay on bg image |
| Light background | `#f5f4f0` | `.bg-light` override for about section |
| Counter section bg | Image with dark overlay | `ftco-counter img` class |
| Appointment bg | Image with dark overlay | `ftco-appointment img` class |
| Footer | `#1d2227` dark | `ftco-footer` |
| Font | `"Roboto", Arial, sans-serif` | Google Fonts |
| Border radius | Bootstrap 4 defaults (0.25rem buttons, 0 cards) | |
| Button style | Bootstrap `.btn-primary` (rounded 0.25rem), `.btn-white` variant | |

## Gherkin requirements

### Navbar

```gherkin
Feature: Navbar

  Scenario: Desktop navigation
    Given the user opens the page on a viewport wider than 992px
    Then a dark navbar is visible with brand "Statutory" and logo
    And nav links include "Home", "About", "Practice Areas", "Cases", "Blog", "Contact"
    And the navbar is fixed at the top with dark background

  Scenario: Mobile hamburger menu
    Given the user opens the page on a viewport narrower than 992px
    When the user taps the hamburger icon
    Then the nav links expand in a dropdown below the brand
```

### Hero

```gherkin
Feature: Hero section

  Scenario: Hero displays headline and CTAs
    Given the hero section is visible
    Then the heading reads "Don't Feel Helpless We Fight for Justice"
    And a subtext paragraph is present below the heading
    And a "Contact us" primary button is visible
    And a "Read more" white outline button is visible
    And the hero has a dark overlay (50% opacity) over a background image
    And the hero height is 600px
```

### Intro strip (4 feature boxes)

```gherkin
Feature: Intro strip

  Scenario: Four dark boxes with icons
    Given the intro section is in view
    Then four feature boxes are displayed in a single row
    And box 1 shows "Expert Attorneys" with an icon and description
    And box 2 shows "Case Dismissed" with an icon and description
    And box 3 shows "Court Performance" with an icon and description
    And box 4 shows "Court Performance" with an icon and description
    And the boxes use a dark palette that darkens left-to-right (#1d2227 → #0e1013)
```

### About section

```gherkin
Feature: About section

  Scenario: About content with image and feature list
    Given the about section is visible
    Then the heading reads "Why to Put Trust Your Trust In Law Firm"
    And an image appears on the left side (col-md-6)
    And a light background panel (#f5f4f0) appears on the right (col-md-6)
    And four feature items are listed: "Expert Attorneys", "Great Discount", "Legal Advisory", "Quick Charges"
    And each feature has an icon and short description
```

### Counter stats

```gherkin
Feature: Counter stats

  Scenario: Four animated counters
    Given the counter section is visible
    Then four stat cards are displayed in a row
    And "Trusted Clients" shows value 3000
    And "Honor's & Awards" shows value 1000
    And "Expert Lawyers" shows value 2000
    And "Successful Cases" shows value 10540
    And each stat has a checklist icon
    And the counter section has a background image with dark overlay
```

### Practice areas (What We Cover)

```gherkin
Feature: Practice areas

  Scenario: Six practice area cards
    Given the practice areas section is visible
    Then the heading reads "What We Cover"
    And six practice areas are displayed in a grid
    | Area              |
    | Business Law     |
    | Family Law       |
    | Criminal Law     |
    | Real Estate Law  |
    | Personal Injury  |
    | Judicial Law     |
    And each card has an icon and short description
```

### Recent case studies

```gherkin
Feature: Case studies

  Scenario: Case study grid
    Given the case studies section is visible
    Then the heading reads "Recent Case Studies"
    And case study cards are displayed in a grid layout
    And each card has a category tag, title, and description
```

### Testimonials

```gherkin
Feature: Testimonials

  Scenario: Client testimonial carousel
    Given the testimony section is visible
    Then the heading reads "What Our Clients Say About Us"
    And testimonial cards are displayed with client names and quotes
    And navigation arrows allow cycling through testimonials
```

### Appointment / Contact

```gherkin
Feature: Appointment section

  Scenario: Contact section with form
    Given the appointment section is visible
    Then the heading reads "We Have Great Results"
    And a description paragraph is present
    And feature highlights include "Award Winning", "60 Years of Experience", "Best Attorneys team"
    And a contact form with fields is displayed on the right side
    And the section has a background image with dark overlay
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer with links and contact
    Given the footer is visible
    Then the brand "Statutory" is displayed
    And three link columns are shown: "Explore", "Legal", "Company"
    And a "Have a Questions?" column shows address, phone, and email
    And a copyright line includes a link to Component Dock
    And the footer background is dark (#1d2227)
```

## Verification checklist

- [ ] Navbar: dark, fixed, brand + 6 nav links, mobile hamburger
- [ ] Hero: 600px height, dark overlay, heading, 2 CTA buttons
- [ ] Intro strip: 4 dark boxes, left-to-right darkening gradient
- [ ] About: split layout, heading, 4 feature items, light bg panel
- [ ] Counter: 4 stat cards with animated numbers, background image
- [ ] Practice areas: heading, 6 cards in grid
- [ ] Case studies: heading, card grid with category tags
- [ ] Testimonials: heading, carousel with navigation
- [ ] Appointment: heading, 3 feature highlights, contact form, bg image
- [ ] Footer: dark bg, 4 columns, Component Dock link
- [ ] Fonts: Roboto loaded from Google Fonts
- [ ] Colors: blue #007bff primary, gold #cbb88c accents, dark #1d2227 palette
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com

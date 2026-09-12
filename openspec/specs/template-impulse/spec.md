# Template: Impulse (Creative Agency / Portfolio)

## Purpose

Recreation of ColorLib **Innova** template.
- **Source slug:** `innova`
- **Preview URL:** https://preview.colorlib.com/theme/innova/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/innova-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Category:** Creative agency / portfolio landing page

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) on 2026-09-13:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand` | `#6f42c1` | Primary accent (purple/violet) — service icons, active nav link, CTA section bg, carousel dots |
| `--dark` | `#343a40` | Navbar background (on mobile), footer accents |
| `--heading` | `#000000` | All heading text (h1, h2, h3) |
| `--body-text` | `#6c757d` | Paragraph / body copy |
| `--white` | `#ffffff` | Hero text, button outlines, slider overlay |
| `--light-bg` | `#f8f9fa` | Testimonials section background (`bg-light`) |
| `--overlay` | `rgba(0,0,0,0.5)` | Portfolio hover overlay, hero dark overlay (opacity 0.3) |

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings (h1–h3) | `"Abril Fatface"` | 900 | h1: 7rem (desktop) / 3rem (mobile); h2/h3: inherit |
| Body | `"Roboto Mono"` | 400 | 0.96rem, line-height 1.8 |
| Buttons | system sans-serif | 900 | 13–14px, uppercase, letter-spacing 0.2em |
| Navbar brand | `"Abril Fatface"` | 400 | 1.25rem, uppercase, letter-spacing 0.2em |
| Nav links | system sans-serif | 300 | 0.9rem, uppercase, letter-spacing 0.1rem |

### Buttons
- **Shape:** `border-radius: 0` (sharp square corners)
- **Outline white:** 2px solid white, white text; hover → white bg, black text
- **Outline black:** 2px solid black, black text; hover → black bg, white text
- **Padding (outline):** 10px 20px
- **Padding (CTA hero):** py-3 px-4

### Section backgrounds
- Hero: full-viewport parallax background image with dark overlay (opacity 0.3)
- Services: white (default)
- Portfolio: white (default)
- Testimonials: light gray (#f8f9fa)
- CTA: brand purple (#6f42c1)
- Footer: white (default)

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar

  Scenario: Desktop navbar renders with brand and links
    Given the viewport width is >= 992px
    When the page loads
    Then a dark transparent navbar overlays the hero
    And the brand text "Impulse" is displayed in Abril Fatface
    And nav links "Home", "About", "Services", "Projects", "Contact" are visible
    And active link color is brand purple #6f42c1

  Scenario: Mobile navbar toggles
    Given the viewport width is < 992px
    When the hamburger button is clicked
    Then the nav links expand vertically
    And navbar background is black
```

### Hero
```gherkin
Feature: Hero section

  Scenario: Hero renders full-viewport with background image
    Given the page loads
    When the hero section is visible
    Then it occupies the full viewport height (min 700px)
    And a parallax background image covers the section
    And a dark semi-transparent overlay (opacity 0.3) sits over the image
    And the heading "We are Impulse, we create great stuff." is centered in white

  Scenario: Hero heading uses Abril Fatface font
    Given the hero section is rendered
    Then the heading font-family is "Abril Fatface"
    And the heading font-size is 7rem on desktop and 3rem on mobile
```

### Services
```gherkin
Feature: Services section

  Scenario: Four service cards render in a grid
    Given the page loads
    When the services section is visible
    Then 4 service cards are displayed in a 4-column grid on desktop
    And each card has an icon (purple, 3rem), a title (h3), and a description
    And the services are: Email Design, Web Design, Mobile Design, Research

  Scenario: Service cards stack on mobile
    Given the viewport width is < 992px
    Then the 4 service cards stack vertically (1 column)
```

### Portfolio
```gherkin
Feature: Portfolio section

  Scenario: Portfolio grid renders 4 items
    Given the page loads
    When the portfolio section is visible
    Then a section title "Selected Work" is displayed centered
    And 4 portfolio items render in a 2x2 grid
    And each item shows a project image with white border

  Scenario: Portfolio hover reveals overlay
    Given the portfolio grid is visible
    When a portfolio item is hovered
    Then a dark overlay fades in over the image
    And the project name and category text appear centered in white
```

### Testimonials
```gherkin
Feature: Testimonials section

  Scenario: Testimonials carousel renders on light background
    Given the page loads
    When the testimonials section is visible
    Then the section has a light gray background (#f8f9fa)
    And a heading "Happy Client" is displayed centered
    And at least one testimonial card shows a circular avatar, name, company, and quote
    And carousel navigation dots are visible below the cards

  Scenario: Active carousel dot is brand purple
    Given the testimonials carousel is rendered
    Then the active dot has color #6f42c1
```

### CTA
```gherkin
Feature: Call-to-action section

  Scenario: CTA renders with brand background
    Given the page loads
    When the CTA section is visible
    Then the background is brand purple (#6f42c1)
    And centered white text reads "Get Started"
    And a subtitle paragraph is displayed below
    And a "Get In Touch!" outline-white button links to the contact page

  Scenario: CTA button hover inverts colors
    Given the CTA button is rendered
    When the button is hovered
    Then the background becomes white and text becomes black
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer renders with columns
    Given the page loads
    When the footer is visible
    Then an "About Us" column with description text is shown
    And a "Navigation" column with links (About, Services, Portfolio, Contact) is shown
    And a social icons column (Twitter, Facebook, LinkedIn, Instagram) is shown

  Scenario: Footer links to Component Dock
    Given the footer is rendered
    Then a "Made with Component Dock" or similar link points to https://www.componentdock.com/
```

## Verification checklist

- [ ] Navbar: transparent overlay on hero, dark on mobile, brand in Abril Fatface
- [ ] Hero: full-viewport, parallax bg, dark overlay, large centered heading
- [ ] Services: 4 cards with purple icons, responsive grid
- [ ] Portfolio: 2x2 grid, hover overlay with project info
- [ ] Testimonials: light bg, carousel with avatar/name/quote
- [ ] CTA: purple bg, centered text, outline-white button
- [ ] Footer: 3 columns (about, nav, social), Component Dock link
- [ ] All design tokens match extracted values
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos/seed/impulse-*

# Template: GymNova (Fitness & Gym)

## Purpose

Recreation of ColorLib **Gym2** — a bold, dark-themed fitness/gym website template with a red accent palette.

- **Source:** [colorlib.com/wp/template/gym2/](https://colorlib.com/wp/template/gym2/)
- **Preview:** [preview.colorlib.com/theme/gym2/](https://preview.colorlib.com/theme/gym2/)
- **New name:** `gymnova` (app: `apps/gymnova`, package: `@free-react-templates/gymnova`)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

### Fonts (Google Fonts)

| Role | Font Family | Weights |
|------|-------------|---------|
| Headings / body | **Paytone One** | 400 |
| Body text / nav / form | **Montserrat** | 300, 400, 500, 600, 700 |
| Buttons / accents | **Teko** | 300, 400, 500, 600, 700 |

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-red` | `#FF1414` | Primary CTA buttons, accent links, pricing highlight, hover outlines |
| `--dark-bg` | `#1A1A1A` | Pricing cards, features area background, team section, footer |
| `--darker-bg` | `#000000` | Features section background |
| `--heading-color` | `#001D38` | Heading text (h1–h5) on light backgrounds |
| `--body-text` | `#7A838B` | Paragraph text |
| `--light-section-bg` | `#fbf9ff` / `#F5FBFF` | Gallery area, light section backgrounds |
| `--footer-accent` | `#AAB1B7` | Footer body text |
| `--border-accent` | `#f0e9ff` | Border color for cards / pricing |
| `--overlay-gradient` | `rgba(181,8,8,0.38)` → `rgba(0,0,0,0.6)` | Hero slider radial gradient overlay |
| `--text-white` | `#fff` | Text on dark/overlay backgrounds |

### Buttons

- **boxed-btn3 (primary CTA):** bg `#FF1414`, color `#fff`, no border-radius (square), padding 12px 53px, Teko font 500 16px. Hover: transparent bg, border 1px `#FF1414`, text `#FF1414`.

### Spacing / Layout

- Full-width container-fluid for header and category sections
- Standard Bootstrap grid (col-xl/col-lg/col-md)
- Hero section: full-width carousel with overlay gradient
- Category split: 50/50 two-column full-width

## Section Structure

1. **Navbar** — sticky header; logo left, nav center (Home, About, Pricing, Gallery, Pages dropdown, Blog dropdown, Contact), "Join Us" CTA right
2. **Hero Slider** — owl-carousel with 4 slides alternating two background images, overlay gradient, centered text ("Body Shape" / "Strength")
3. **Category Split** — full-width two-column: "For Girl" / "For Boys", each with image background, heading, description, "Join Now" CTA
4. **Features** — dark bg (`#000`), centered section title "Our Features", 4 feature cards (Weightlifting, Specific Muscles, Flex Your Muscles, Cardio Exercises) with icons
5. **Offer Banner** — parallax/image bg, centered "A Big Offer for 50% Off" with "Join Now" CTA
6. **Pricing** — dark bg (`#1A1A1A`), 3 plans (Beginner, Expert, Pro), each with price, features list, CTA button
7. **Gallery** — light bg, 6-image grid (mix of big/small), hover zoom+overlay pop effect
8. **Team** — dark image bg with overlay, section title "Our Expert Trainers", trainer cards with image/name/social icons
9. **Big Offer** — parallax/image bg, "A Big Offer for..." heading, "Join Now" CTA
10. **Footer** — dark bg, 3-column: logo + address + socials, nav links, newsletter form

## Gherkin Requirements

```gherkin
Feature: GymNova — Fitness & Gym Website Template
  As a gym business owner
  I want a bold, dark-themed fitness website
  So that I can attract new members

  Background:
    Given the user visits the GymNova homepage

  Scenario: Navbar displays all navigation links
    Then the navbar shows links for "Home", "About", "Pricing", "Gallery", "Contact"
    And a "Join Us" call-to-action button is visible

  Scenario: Hero section displays carousel
    Then a full-width hero carousel is visible
    And the carousel shows "Body Shape" and "Strength" slides
    And each slide has an overlay gradient

  Scenario: Category section shows two categories
    Then a "For Girl" category card is visible
    And a "For Boys" category card is visible
    And each has a "Join Now" button

  Scenario: Features section shows 4 feature cards
    Then 4 feature cards are displayed
    And each card has an icon and description
    And the features include "Weightlifting", "Specific Muscles", "Flex Your Muscles", "Cardio Exercises"

  Scenario: Offer banner displays promotion
    Then an offer banner shows "50% Off"
    And a "Join Now" button is present

  Scenario: Pricing section shows 3 plans
    Then 3 pricing plans are displayed
    And the plans are "Beginner", "Expert", "Pro"
    And each plan has a price and feature list

  Scenario: Gallery section shows image grid
    Then a gallery of 6 images is displayed
    And images have hover zoom effects

  Scenario: Team section shows trainers
    Then a team section with trainer cards is displayed
    And each trainer has a name and social links

  Scenario: Big offer banner is visible
    Then a large offer banner is displayed
    And it has a "Join Now" button

  Scenario: Footer has contact and newsletter
    Then the footer shows address and contact info
    And a newsletter subscription form is present
    And a "Component Dock" link is in the footer
```

## Verification Checklist

- [ ] Preview DOM structure matches section order above
- [ ] Brand color `#FF1414` used for all CTAs
- [ ] Dark background sections use `#1A1A1A` or `#000`
- [ ] Fonts loaded: Paytone One (headings), Montserrat (body), Teko (buttons)
- [ ] Hero overlay uses radial gradient (red center → dark edges)
- [ ] Pricing cards have dark bg with red accent borders on active/selected
- [ ] Gallery has hover zoom + overlay pop effect
- [ ] All images use `picsum.photos` placeholders
- [ ] Footer links to `componentdock.com`
- [ ] No ColorLib references in app code
- [ ] Spec covers all 10 sections with Gherkin scenarios

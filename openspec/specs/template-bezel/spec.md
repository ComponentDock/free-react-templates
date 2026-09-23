---
name: bezel
description: >
  Recreation of ColorLib "Watch" (https://colorlib.com/wp/template/watch/) as
  a product/landing page for smartwatches. Multi-section single-page with hero,
  video intro, feature highlights, product catalog, reviews, FAQ accordion, and
  footer.
---

# Bezel — Smartwatch Landing Template

Recreation of ColorLib "Watch" (https://preview.colorlib.com/theme/watch/).

## Design Tokens

| Token       | Value                  | Notes                                      |
| ----------- | ---------------------- | ------------------------------------------ |
| brand       | `#235ee7`              | Primary blue (CTAs, accents)               |
| brand-dark  | `#1a4bc5`              | Hover state                                |
| surface     | `#ffffff`              | Default card/section background            |
| surface-alt | `#f9f9ff`              | Alternate section background (slight blue) |
| text        | `#222222`              | Primary body text                          |
| text-muted  | `#777777`              | Secondary text                             |
| dark-bg     | `#04091e`              | Unique Feature section background          |
| font        | Poppins (Google Fonts) | Body + headings                            |

## Sections (in order)

1. **Navbar** — sticky header with logo, nav links (Home, About, Services, Unique Features, Reviews, FAQ)
2. **Hero** — full-height banner with background image, subtitle "Now you can feel the Heat", headline "Smart New Future", "Buy Now" pill CTA
3. **Video Intro** — split layout: left text (headline, paragraph, CTA), right video thumbnail with play button overlay
4. **Feature Grid** — centered heading + 4 feature cards with icon, title, description in 2x2 grid (col center = product image)
5. **About Split** — full-width split: left image, right text with headline, paragraph, CTA
6. **Services** — heading + 6 service cards (icon + title + description) in 3x2 grid
7. **Product Catalog** — dark background (#04091e), heading + 4 product cards with image, name, price, "Pre Order" CTA
8. **Reviews** — heading + 6 review cards (name, text, star rating) in 3x2 grid
9. **FAQ** — heading + accordion (4 questions with expand/collapse)
10. **Footer** — 3-column: About Us text, Newsletter form, Social links + "Made with Component Dock" line

## Gherkin Scenarios

### Navbar

- Scenario: renders logo and all nav links
- Scenario: mobile menu toggles open/close

### Hero

- Scenario: renders background, headline, and CTA button
- Scenario: CTA button is focusable

### Video Intro

- Scenario: renders heading, description, and play button
- Scenario: play button is focusable

### Feature Grid

- Scenario: renders 4 feature cards with icons and titles
- Scenario: product image is centered between cards

### About Split

- Scenario: renders image and text side by side
- Scenario: CTA button is focusable

### Services

- Scenario: renders 6 service items with icons and descriptions

### Product Catalog

- Scenario: renders 4 product cards on dark background
- Scenario: each card has name, price, and "Pre Order" button

### Reviews

- Scenario: renders 6 review cards with star ratings
- Scenario: star ratings display correct filled/unfilled stars

### FAQ

- Scenario: renders 4 accordion items
- Scenario: clicking a question expands the answer
- Scenario: only one answer is expanded at a time

### Footer

- Scenario: renders About Us, Newsletter, and Social columns
- Scenario: footer links to Component Dock
- Scenario: newsletter form has email input and submit button

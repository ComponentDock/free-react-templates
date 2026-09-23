# Template: Gearline (Tech/Product Landing Page)

## Purpose

Recreation of the ColorLib "Watch" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source template:** [ColorLib Watch](https://colorlib.com/wp/template/watch/)
- **Preview URL:** https://preview.colorlib.com/theme/watch/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/watch-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/gearline`
- **Deploy target:** `https://gearline.free.componentdock.com`

## Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| Primary brand color | `#235ee7` (blue) | `.primary-btn`, selection color, FAQ card headers, service hover |
| Secondary accent | `#4ae7fa` (cyan) | Gradient endpoint in primary-btn gradient |
| Gradient | `linear-gradient(0deg, #235ee7, #4ae7fa)` | Primary buttons, FAQ headers, footer social hover |
| Body text color | `#777777` | Body default |
| Heading color | `#222222` | h1–h6 |
| Card/section background | `#f9f9ff` | Single-service cards, course cards, buttons default |
| Dark section background | `#04091e` | Unique-feature area |
| Font family | `"Poppins", sans-serif` | Body, headings (weights 300–700) |
| Button border-radius | `25px` (rounded pill) | `.primary-btn` |
| Section spacing | `padding: 120px 0` | `.section-gap` |
| Card border-radius | `10px` | `.single-service` |
| Card hover shadow | `0px 20px 30px 0px rgba(35, 94, 231, 0.2)` | `.single-service:hover` |

## Section Order (from live preview DOM)

1. **Header** — Logo + sticky navigation (Home, About, Service, Unique Feature, Review, FAQ)
2. **Banner/Hero** — Fullscreen background image, subtitle "Now you can feel the Heat", headline "Smart New Future", "Buy Now" CTA button
3. **Video About Section** — Two-column layout: left text block ("Brand new app to blow your mind", "We've made a life that will change you", description, "Get Started now" CTA), right video thumbnail with play button overlay
4. **Top Courses/Features** — 4 feature cards around a center product image (2 left + 2 right), each with icon + title + description
5. **Home About** — Full-width split: left half image, right half text ("Globally Connected by Large Network", description, "get details" CTA with white-on-dark styling)
6. **Services** — 6 service cards in 3×2 grid with icons, titles, descriptions, hover shadow effect
7. **Unique Features** — Dark background (#04091e), 4 product cards each with image, name ("Apple Watch White"), price (£399.00), "Pre Order" CTA
8. **Reviews** — 6 review cards in 3×2 grid, each with name, review text, star rating (1–3 filled stars)
9. **FAQ** — Left column: 4-item accordion (Bootstrap-style collapse), right column empty
10. **Footer** — 3 columns: About Us text, Newsletter email signup, Social icons (Facebook, Twitter, Dribbble, Behance)

## Gherkin Requirements

### Feature: Gearline — Smart Tech Product Landing Page

#### Scenario: Header navigation renders all section links
  Given the user visits the Gearline page
  When the header renders
  Then it displays a logo and navigation links for Home, About, Service, Unique Feature, Review, and FAQ

#### Scenario: Hero banner displays headline and CTA
  Given the user visits the Gearline page
  When the hero banner renders
  Then it shows a subtitle "Now you can feel the Heat"
  And a headline "Smart New Future"
  And a "Buy Now" call-to-action button

#### Scenario: Video about section shows text and video thumbnail
  Given the user visits the Gearline page
  When the about section renders
  Then it displays a two-column layout with text on the left and a video thumbnail on the right
  And the text includes a headline and a "Get Started now" CTA button

#### Scenario: Top courses section displays feature cards around a center image
  Given the user visits the Gearline page
  When the courses section renders
  Then it shows a center product image flanked by 4 feature cards (2 left, 2 right)
  And each card has an icon, title, and description

#### Scenario: Home about section shows split image-text layout
  Given the user visits the Gearline page
  When the about split section renders
  Then it displays a full-width two-column layout
  And the left column shows an image
  And the right column shows a headline, description, and "get details" CTA button

#### Scenario: Services section displays 6 feature cards
  Given the user visits the Gearline page
  When the services section renders
  Then it shows 6 service cards in a 3-column grid
  And each card has an icon, title, and description
  And hovering a card shows a blue shadow effect

#### Scenario: Unique features section shows product cards on dark background
  Given the user visits the Gearline page
  When the unique features section renders
  Then it displays a dark background (#04091e)
  And 4 product cards, each with an image, product name, price, and "Pre Order" CTA

#### Scenario: Reviews section displays customer testimonials
  Given the user visits the Gearline page
  When the reviews section renders
  Then it shows 6 review cards in a 3-column grid
  And each card has a reviewer name, review text, and star rating

#### Scenario: FAQ section shows collapsible accordion
  Given the user visits the Gearline page
  When the FAQ section renders
  Then it shows 4 accordion items in the left column
  And clicking a question toggles its answer visibility

#### Scenario: Footer contains about, newsletter, and social links
  Given the user visits the Gearline page
  When the footer renders
  Then it shows three columns: About Us, Newsletter signup, and Social media links
  And it includes a link to Component Dock (https://www.componentdock.com/)

## Verification Checklist

- [ ] Header renders with all nav links and logo
- [ ] Hero banner has background image, subtitle, headline, and CTA button
- [ ] Video about section has two-column layout with video overlay
- [ ] Top courses section has 4 feature cards + center image
- [ ] Home about section has split image/text layout
- [ ] Services section has 6 cards with icons in 3-column grid
- [ ] Unique features section has dark background with 4 product cards
- [ ] Reviews section has 6 cards with star ratings
- [ ] FAQ section has 4 accordion items with toggle behavior
- [ ] Footer has 3 columns (about, newsletter, social) + Component Dock link
- [ ] All sections use Poppins font family
- [ ] Primary brand color #235ee7 used consistently
- [ ] Gradient buttons use #235ee7 → #4ae7fa
- [ ] Tailwind @theme tokens match extracted design tokens
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] All images use picsum.photos placeholders
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (strict TypeScript)
- [ ] Lint passes
- [ ] Build succeeds

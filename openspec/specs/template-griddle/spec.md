# Template: Griddle (Restaurant / Food)

## Purpose

Recreation of ColorLib **Eatery** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** https://colorlib.com/wp/template/eatery/
- **Preview:** https://preview.colorlib.com/theme/eatery/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eatery-free-template.jpg
- **New name:** `griddle` (package: `@free-react-templates/griddle`, folder: `apps/griddle`)
- **Deploy target:** `griddle.free.componentdock.com`

## Design Tokens (from live preview CSS analysis)

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#cf1d16` | CTA bg, dropdown hover, price badge, loader stroke, heading underline |
| Hover accent | `#e9362f` | `btn-primary:hover` border/bg |
| Body text | `#868e96` | Default paragraph color |
| Heading color | `#000` | `h1`–`h4` |
| Background white | `#fff` | Body, cards, schedule items |
| Background light | `#f7f7f7` | `bg-light` sections (features, menu, newsletter) |
| Decorative back-text | `#f7f7f7` / `#e3e3e3` | Large watermark heading text behind section titles |
| Font family | Open Sans (300, 400, 700, 800) | `font-family: "Open Sans", Arial, sans-serif` |
| Button radius | `0px` (sharp rectangular) | All `.btn`, `.form-control` |
| CTA button style | Uppercase, letter-spacing 0.2em, font-size 13px, bold | `.btn`, `.cta-btn a` |
| Price badge | Circular, 100×100px, border-radius 50%, `#cf1d16` bg | `.item-dishes .dishes-price` |
| Navbar | Transparent header on desktop; black `bg-dark` on mobile | Absolute positioned, overlays hero |
| Card/dropdown shadow | `0 2px 30px 0px rgba(0,0,0,0.2)` | Dropdown menus |
| Section heading underline | 80px × 2px line, `#cf1d16`, centered above h2 | `.heading-wrap h2:before` |

## Section Structure (from live DOM)

1. **Navbar** — Dark theme; brand "Griddle"; links: Home, Recipes, Services (dropdown: Catering, Birthday Party, Wedding Party), About, News; CTA: Contact Us (solid `#cf1d16` bg)
2. **Hero Slider** — Owl-carousel with 2 slides; full-width background images; centered text (heading + paragraph + "Get Started" outline-white button); animated entry
3. **Features Grid** — `bg-light` section; 4 equal columns; icon (flaticon → lucide-react), title (primary color), short description: Drinks, Seafood, Coffee, Fresh Salad
4. **Special Dishes Carousel** — Heading with decorative back-text "Dishes"; owl-carousel of dish cards; each card: overlay image with circular red price badge + uppercase dish name
5. **Our Menu** — `bg-light`; heading with decorative back-text "Menu"; 2-column grid of menu items; each: side-by-side image + text (title, description, price)
6. **Testimonials** — 3-column grid of blockquotes; each: quote text, author photo (circular 80×80), author name, role
7. **Blog** — Heading with decorative back-text "Our Blog"; 2-column grid of blog cards; each: side-by-side image + text (title, date, excerpt, "Read More" primary button)
8. **Newsletter** — `bg-light` centered section; heading, description, email input + Subscribe primary button
9. **Footer** — Dark background; 3 columns: About (text + social icons), Opening Hours + Contact Info, Quick Links; bottom: copyright with heart icon

## Gherkin Scenarios

```gherkin
Feature: Navbar
  Scenario: Desktop navigation
    Given the viewport is >= 768px wide
    Then the navbar is transparent and overlays the hero
    And the brand text "Griddle" is displayed in uppercase with letter-spacing
    And nav links show: Home, Recipes, Services, About, News
    And the "Contact Us" CTA button has a solid red (#cf1d16) background

  Scenario: Mobile navigation
    Given the viewport is < 768px wide
    Then the navbar has a dark/black background
    And a hamburger toggle button is visible
    And clicking the toggle reveals nav links vertically

  Scenario: Services dropdown
    Given the navbar is visible on desktop
    When hovering over "Services"
    Then a dropdown appears with: Catering, Birthday Party, Wedding Party
    And dropdown items highlight with red (#cf1d16) background on hover

Feature: Hero Slider
  Scenario: Slide display
    Given the page loads
    Then a full-width carousel shows 2 hero slides
    And each slide has a background image, heading text, paragraph, and "Get Started" button
    And the "Get Started" button is outlined white (border #fff, text #fff)

  Scenario: Slide transitions
    Given the carousel is active
    Then slides auto-advance on a timer
    And carousel dots are visible below the slides

Feature: Features Grid
  Scenario: Four-column feature display
    Given the features section is visible
    Then 4 feature cards display in a row on desktop
    And each card has an icon, a title in primary red (#cf1d16), and a description
    And the section background is light (#f7f7f7)
    And the features are: Drinks, Seafood, Coffee, Fresh Salad

Feature: Special Dishes Carousel
  Scenario: Dish cards display
    Given the dishes section is visible
    Then a horizontal carousel shows dish cards
    And each card shows a food image with a dark overlay
    And a circular red (#cf1d16) price badge (100×100px) overlays the image
    And the dish name appears in white uppercase text

  Scenario: Dish hover effect
    Given a dish card is visible
    When hovering over a dish card
    Then the image scales up slightly (transform: scale(1.1))
    And the price badge transitions from filled red to transparent with white border

Feature: Our Menu
  Scenario: Menu grid display
    Given the menu section is visible
    Then a 2-column grid shows menu items
    And each item displays an image alongside text (title, description, price in primary red)
    And the section background is light (#f7f7f7)

Feature: Testimonials
  Scenario: Testimonial cards
    Given the testimonials section is visible
    Then 3 testimonial blockquotes display in a row
    And each contains a quote paragraph, author photo (circular, 80×80), author name, and role

Feature: Blog
  Scenario: Blog cards display
    Given the blog section is visible
    Then 2 blog cards display in a row
    And each card shows an image alongside text (title, date, excerpt, "Read More" button)
    And the "Read More" button uses the primary button style

Feature: Newsletter
  Scenario: Newsletter subscription form
    Given the newsletter section is visible
    Then a centered form displays with heading "Subscribe to Newsletter"
    And an email input field and "Subscribe" primary button are shown side by side
    And the section background is light (#f7f7f7)

Feature: Footer
  Scenario: Footer columns
    Given the footer is visible
    Then 3 content columns display: About (with social icons), Opening Hours + Contact, Quick Links
    And the footer background is dark
    And the copyright line includes a heart icon and links to Component Dock

  Scenario: Social icons
    Given the footer About column is visible
    Then social media icons (Twitter, Facebook, LinkedIn, Instagram) are displayed
    And icons use the lucide-react equivalents
```

## Verification Checklist

- [ ] Section order matches the original 1:1: Navbar → Hero → Features → Dishes → Menu → Testimonials → Blog → Newsletter → Footer
- [ ] Brand color #cf1d16 used for CTAs, price badges, heading underlines, dropdown hovers
- [ ] Open Sans font loaded via Google Fonts
- [ ] Buttons are sharp (no border-radius), uppercase, letter-spacing 0.2em
- [ ] Hero carousel has 2 slides with outline-white CTA buttons
- [ ] Dishes carousel has circular price badges (100×100, border-radius 50%)
- [ ] Menu section uses side-by-side image+text layout per item
- [ ] Testimonials show 3 cards with circular author photos
- [ ] Blog section has 2 cards with side-by-side layout
- [ ] Newsletter form is centered with input + button row
- [ ] Footer has 3 columns + copyright with Component Dock link
- [ ] Decorative back-text watermark behind section headings
- [ ] Mobile: navbar collapses to hamburger, sections stack vertically
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images use picsum.photos/seed/griddle-N/W/H

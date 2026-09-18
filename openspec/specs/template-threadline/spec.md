# Template: Threadline (Fashion E-Commerce)

## Purpose

Recreation of ColorLib **Fashion 2** (`https://colorlib.com/wp/template/fashion-2/`).
Preview URL: `https://preview.colorlib.com/theme/fashion-2/` (unreachable at time of research — fallback to screenshot and Fashion v1 preview).
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

A minimalist, creative apparel store website template for displaying fashion products
(clothes, shoes, bags, sunglasses, accessories). Clean black-and-white aesthetic with
red accent color, serif headings, and sans-serif body text.

## Source references

- **ColorLib slug:** `fashion-2`
- **ColorLib page:** `https://colorlib.com/wp/template/fashion-2/`
- **Preview (unreachable):** `https://preview.colorlib.com/theme/fashion-2/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/fashion-free-template.jpg`
- **Description (from ColorLib):** "Fashion is the most creative, engaging and impactful free apparel store website template that helps create a solid online presence."
- **Research note:** Preview returned 404. Design tokens extracted from the Fashion v1 preview CSS (`https://preview.colorlib.com/theme/fashion/css/style.css`) which shares the same design language. Screenshot analyzed for section structure.

## Design tokens

### Colors

| Token             | Hex       | Usage                                    |
| ----------------- | --------- | ---------------------------------------- |
| `--color-primary` | `#ff6363` | CTA buttons, accent highlights, links    |
| `--color-text`    | `#303030` | Body text, headings                      |
| `--color-heading` | `#000000` | Primary headings                         |
| `--color-muted`   | `#7b7b7b` | Secondary/muted text                     |
| `--color-border`  | `#e6e6e6` | Dividers, card borders                   |
| `--color-bg`      | `#ffffff` | Page background                          |
| `--color-bg-alt`  | `#f8f9fa` | Alternate section background             |
| `--color-bg-warm` | `#f9f9f9` | Warm section background                  |
| `--color-bg-cool` | `#ebedee` | Cool section background                  |
| `--color-btn-hover` | `#ff7777` | Button hover state                     |

### Typography

| Element   | Font Family          | Style                |
| --------- | -------------------- | -------------------- |
| Headings  | "Playfair Display", serif | Bold, dark       |
| Body      | "Lato", sans-serif   | Regular, #303030     |
| Nav links | "Lato", sans-serif   | Uppercase, tracking  |

### Border radii

| Token    | Value   | Usage                |
| -------- | ------- | -------------------- |
| `--radius-sm`  | `2px`   | Subtle rounding      |
| `--radius-md`  | `4px`   | Cards, inputs        |
| `--radius-pill` | `30px` | Pill-shaped buttons  |
| `--radius-full` | `50%` | Circular elements    |

### Buttons

- Primary: background `#ff6363`, color `#fff`, border-radius `30px` (pill), padding generous, hover lightens to `#ff7777`
- Secondary/outline: transparent bg, border, dark text
- Font: "Lato", uppercase, letter-spacing

### Overall aesthetic

- Clean, minimalist, fashion-forward
- Black and white base with red (#ff6363) accent
- Generous whitespace
- Serif headings give editorial/luxury feel
- Sharp edges (0px radius) on containers, pill buttons

## Gherkin requirements

### Feature: Threadline — Fashion E-Commerce Template

```gherkin
Feature: Threadline Fashion E-Commerce Template
  As a visitor to a fashion e-commerce site
  I want to browse products, read about the brand, and contact the store
  So that I can discover and purchase fashion items

  Background:
    Given the user is on the Threadline homepage
    And the page has loaded completely

  # --- Navbar ---
  Scenario: Navbar displays brand and navigation links
    Then the navbar should display the brand name "Threadline"
    And the navbar should contain navigation links
    And the navbar should have a mobile hamburger menu on small screens
    And the navbar should be sticky/fixed on scroll

  Scenario: Navbar dropdown menus work
    When the user hovers over a nav item with submenus
    Then a dropdown menu should appear with sub-links

  # --- Hero Carousel ---
  Scenario: Hero section displays a full-width carousel
    Then the hero section should show a carousel with multiple slides
    And each slide should have a headline, subtext, and CTA button
    And the carousel should have prev/next navigation arrows
    And the carousel should auto-advance on a timer

  Scenario: Hero carousel navigation works
    When the user clicks the next arrow
    Then the carousel should advance to the next slide
    When the user clicks the previous arrow
    Then the carousel should go back to the previous slide

  # --- Collections / Products Grid ---
  Scenario: Collections section shows product category cards
    Then there should be a "Collections" section heading
    And there should be a grid of product category cards (at least 4)
    And each card should show a product image, name, and brief description
    And the grid should be responsive (4 columns desktop, 2 tablet, 1 mobile)

  # --- About / Boutique Section ---
  Scenario: About section presents the brand
    Then there should be an "About" section
    And it should have a heading like "A Fashion Boutique"
    And it should include a descriptive paragraph about the brand
    And it should include brand/product images

  # --- Testimonials ---
  Scenario: Testimonials section displays customer quotes
    Then there should be a "Testimonials" section
    And there should be at least 3 testimonial entries
    And each testimonial should have a quote, customer name, and attribution
    And testimonials should be displayed in a carousel or slider

  # --- Blog Posts ---
  Scenario: Blog section shows recent posts
    Then there should be a "Blog Posts" section
    And there should be at least 3 blog post cards
    And each card should show a thumbnail, title, date, and excerpt
    And each card should link to the full post

  # --- Newsletter / Connect ---
  Scenario: Newsletter section captures email
    Then there should be a "Connect with us" or newsletter section
    And it should have an email input field
    And it should have a submit/subscribe button
    And the section should have a distinct background (rounded or colored)

  # --- Footer ---
  Scenario: Footer displays brand and navigation
    Then the footer should contain the brand name
    And the footer should have navigation link columns
    And the footer should include a "Made with Component Dock" link to componentdock.com
    And the footer should have copyright text

  # --- Responsive ---
  Scenario: Template is responsive
    When the viewport is resized to mobile width (375px)
    Then all sections should stack vertically
    And the navbar should collapse to a hamburger menu
    And images should scale to fit their containers
    And text should remain readable

  # --- Accessibility ---
  Scenario: Template meets basic accessibility
    Then all images should have alt text
    And interactive elements should be keyboard-focusable
    And color contrast should meet WCAG AA standards
    And semantic HTML elements should be used (nav, main, section, footer)
```

## Verification checklist

- [ ] Navbar: sticky, brand name, dropdown menus, mobile hamburger
- [ ] Hero: full-width carousel, 3+ slides, auto-advance, prev/next arrows
- [ ] Collections: grid of 4+ product category cards, responsive
- [ ] About: heading, paragraph, brand images
- [ ] Testimonials: 3+ quotes with names, carousel/slider
- [ ] Blog: 3+ post cards with thumbnails, titles, excerpts
- [ ] Newsletter: email input, subscribe button, distinct background
- [ ] Footer: brand, nav columns, Component Dock link, copyright
- [ ] Responsive: mobile hamburger, stacked layout, readable text
- [ ] Accessibility: alt text, keyboard nav, WCAG AA contrast, semantic HTML
- [ ] Design tokens: Playfair Display headings, Lato body, #ff6363 accent, pill buttons
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com

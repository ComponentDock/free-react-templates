# Template: Netcraft (Creative Studio Agency)

## Purpose

Recreation of ColorLib **Portech** (https://colorlib.com/wp/template/portech/).
Preview: https://preview.colorlib.com/theme/portech/

A creative studio / IT agency landing page with full-height slider hero, service
cards, about section with animated year counter, stats parallax, portfolio grid,
FAQ accordion, testimonial carousel, blog entries, and newsletter signup.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. No external dependencies
beyond shared `packages/ui` (Button, ButtonLink, cn).

## Design Tokens (extracted from preview CSS)

| Token             | Value                          | Usage                                  |
| ----------------- | ------------------------------ | -------------------------------------- |
| Brand primary     | `#4986fc`                      | Primary buttons, links, accents        |
| Brand secondary   | `#207ce5`                      | Gradient / hover states                |
| Brand purple      | `#6f4be8`                      | Accent highlights                      |
| Brand teal        | `#28df99`                      | Accent highlights                      |
| Dark navy         | `#141b25`                      | Navbar bg, footer bg                   |
| Light bg          | `#f9faff`                      | Section alternate bg                   |
| Body text         | `#212529`                      | Default text                           |
| Font: heading     | `"Roboto", Arial, sans-serif`  | Headings, body                         |
| Font: brand/logo  | `"Arizonia", cursive`          | Brand text in navbar                   |
| Button radius     | `0` (square corners)           | Bootstrap default                      |
| Button padding    | `.375rem .75rem`               | Standard Bootstrap                     |
| Section bg-light  | `#f8f9fa`                      | Services, portfolio, testimony, blog   |

## Visual Design Notes (from screenshot)

- Dark navy top bar with phone/email + social icons
- Dark navbar with Arizonia-styled brand name
- Full-viewport hero slider (dark overlay on images, play-video button + text)
- Light-gray services row with flaticon icons and circular arrow buttons
- Split about section: left image with "42 Years Experienced" counter overlay
- Dark parallax counter/stats band with white icons and animated numbers
- Portfolio grid (3x2) with hover-reveal cards
- FAQ split: left image + feature list, right accordion
- Testimonial carousel with circular avatar, quote, name, role
- Blog cards (3-column) with date badge
- Newsletter CTA with parallax background
- Dark footer with 4-column layout

## Gherkin Requirements

### Feature: Netcraft — Creative Studio Agency Landing Page

  Background:
    Given the user visits Netcraft at its deployed URL
    Then the page loads without errors
    And the document title contains "Netcraft"

  Scenario: Top bar displays contact info and social links
    Given the top bar is visible
    Then it shows a phone number link
    And it shows an email link
    And it shows social media icon links (Facebook, Twitter, Instagram, Dribbble)

  Scenario: Navbar shows brand and navigation
    Given the navbar is visible
    Then it displays the brand name "Netcraft"
    And it shows navigation links: Home, About, Services, Portfolio, Blog, Contact
    And it has a mobile hamburger toggle on small screens

  Scenario: Hero section displays slider with CTA
    Given the hero section is visible
    Then it shows at least one slide with a headline, subheading, and description
    And it has two CTA buttons (primary + white/outline)
    And it has a video play button overlay
    And it has a dark overlay on the background image

  Scenario: Services section shows 4 service cards
    Given the services section is visible
    Then it displays 4 service cards
    And each card has an icon, a heading, and a description paragraph
    And each card has a circular arrow button
    And the section has a light background

  Scenario: About section shows company info
    Given the about section is visible
    Then it shows a left column with a background image and a year counter overlay
    And it shows a right column with subheading, heading, and description
    And it shows two feature items: "Expert Team" and "Solution For Business"
    And each feature has an icon and label

  Scenario: Counter/stats section shows animated numbers
    Given the counter section is visible
    Then it shows 4 stat items with icons and numbers
    And the stats are: "Project Completed" (4800), "Our Staff" (1000), "Services Provide" (350), "Happy Customers" (7650)
    And the section has a dark parallax background image

  Scenario: Portfolio section shows project grid
    Given the portfolio section is visible
    Then it shows a heading "Recent Portfolio" and subheading "Our Exceptional Quality Work"
    And it displays 6 project cards in a 3-column grid
    And each card has a background image, category label, title, and link arrow

  Scenario: FAQ section with accordion
    Given the FAQ section is visible
    Then it shows a left column with an image and two feature items
    And it shows a right column with an accordion of FAQ questions
    And at least 2 FAQ items are present
    And clicking a question header expands/collapses its answer

  Scenario: Testimonial carousel
    Given the testimonial section is visible
    Then it displays testimonial cards with avatar image, quote text, name, and role
    And the testimonials cycle in a carousel/slider

  Scenario: Blog section shows recent entries
    Given the blog section is visible
    Then it shows 3 blog entry cards
    And each card has a date badge, image, title, and description

  Scenario: Newsletter subscription
    Given the newsletter section is visible
    Then it shows a heading "Subscribe to our Newsletter"
    And it has an email input field
    And it has a "Subscribe" submit button
    And the section has a parallax background image

  Scenario: Footer layout
    Given the footer is visible
    Then it shows a brand name "Netcraft"
    And it has a description paragraph
    And it shows social media icon links
    And it links to "https://www.componentdock.com/" (Component Dock)

  Scenario: Responsive mobile layout
    Given the viewport width is less than 768px
    Then the navbar collapses to a hamburger menu
    And the hero text and buttons stack vertically
    And the service cards stack vertically
    And the portfolio grid becomes single-column

## Verification Checklist

- [ ] All 12 sections present in correct order matching the ColorLib source
- [ ] Design tokens match: brand primary #4986fc, dark navy #141b25, Arizonia logo font
- [ ] Hero: full-viewport slider, dark overlay, video play button, 2 CTA buttons
- [ ] Services: 4 cards with icons, headings, descriptions, arrow buttons, light bg
- [ ] About: split layout with year counter overlay + Expert Team / Solution features
- [ ] Counter: parallax bg, 4 animated stats with icons
- [ ] Portfolio: 3-column grid, 6 cards, hover-reveal titles
- [ ] FAQ: split layout, left image + features, right accordion (expand/collapse)
- [ ] Testimony: carousel with avatar, quote, name, role
- [ ] Blog: 3 cards with date badge, image, title, description
- [ ] Newsletter: parallax bg, email input, Subscribe button
- [ ] Footer: brand, description, social icons, Component Dock link
- [ ] Responsive: hamburger nav, stacked columns on mobile
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (provenance only in spec/PR)

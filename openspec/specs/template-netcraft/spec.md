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

## Requirements

### Feature: Netcraft — Creative Studio Agency Landing Page

  Background:
- **GIVEN** the user visits Netcraft at its deployed URL
- **THEN** the page loads without errors
- **AND** the document title contains "Netcraft"

#### Scenario: Top bar displays contact info and social links

- **GIVEN** the top bar is visible
- **THEN** it shows a phone number link
- **AND** it shows an email link
- **AND** it shows social media icon links (Facebook, Twitter, Instagram, Dribbble)

#### Scenario: Navbar shows brand and navigation

- **GIVEN** the navbar is visible
- **THEN** it displays the brand name "Netcraft"
- **AND** it shows navigation links: Home, About, Services, Portfolio, Blog, Contact
- **AND** it has a mobile hamburger toggle on small screens

#### Scenario: Hero section displays slider with CTA

- **GIVEN** the hero section is visible
- **THEN** it shows at least one slide with a headline, subheading, and description
- **AND** it has two CTA buttons (primary + white/outline)
- **AND** it has a video play button overlay
- **AND** it has a dark overlay on the background image

#### Scenario: Services section shows 4 service cards

- **GIVEN** the services section is visible
- **THEN** it displays 4 service cards
- **AND** each card has an icon, a heading, and a description paragraph
- **AND** each card has a circular arrow button
- **AND** the section has a light background

#### Scenario: About section shows company info

- **GIVEN** the about section is visible
- **THEN** it shows a left column with a background image and a year counter overlay
- **AND** it shows a right column with subheading, heading, and description
- **AND** it shows two feature items: "Expert Team" and "Solution For Business"
- **AND** each feature has an icon and label

#### Scenario: Counter/stats section shows animated numbers

- **GIVEN** the counter section is visible
- **THEN** it shows 4 stat items with icons and numbers
- **AND** the stats are: "Project Completed" (4800), "Our Staff" (1000), "Services Provide" (350), "Happy Customers" (7650)
- **AND** the section has a dark parallax background image

#### Scenario: Portfolio section shows project grid

- **GIVEN** the portfolio section is visible
- **THEN** it shows a heading "Recent Portfolio" and subheading "Our Exceptional Quality Work"
- **AND** it displays 6 project cards in a 3-column grid
- **AND** each card has a background image, category label, title, and link arrow

#### Scenario: FAQ section with accordion

- **GIVEN** the FAQ section is visible
- **THEN** it shows a left column with an image and two feature items
- **AND** it shows a right column with an accordion of FAQ questions
- **AND** at least 2 FAQ items are present
- **AND** clicking a question header expands/collapses its answer

#### Scenario: Testimonial carousel

- **GIVEN** the testimonial section is visible
- **THEN** it displays testimonial cards with avatar image, quote text, name, and role
- **AND** the testimonials cycle in a carousel/slider

#### Scenario: Blog section shows recent entries

- **GIVEN** the blog section is visible
- **THEN** it shows 3 blog entry cards
- **AND** each card has a date badge, image, title, and description

#### Scenario: Newsletter subscription

- **GIVEN** the newsletter section is visible
- **THEN** it shows a heading "Subscribe to our Newsletter"
- **AND** it has an email input field
- **AND** it has a "Subscribe" submit button
- **AND** the section has a parallax background image

#### Scenario: Footer layout

- **GIVEN** the footer is visible
- **THEN** it shows a brand name "Netcraft"
- **AND** it has a description paragraph
- **AND** it shows social media icon links
- **AND** it links to "https://www.componentdock.com/" (Component Dock)

#### Scenario: Responsive mobile layout

- **GIVEN** the viewport width is less than 768px
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero text and buttons stack vertically
- **AND** the service cards stack vertically
- **AND** the portfolio grid becomes single-column

## Verification checklist

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

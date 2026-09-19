# Template: Hourglass (Smart Product Landing)

## Purpose

Hourglass is a single-page product/tech landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Watch" free template (source:
https://colorlib.com/wp/template/watch/), built under a
DIFFERENT name (**Hourglass**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based landing page with a full-screen hero banner,
video feature section, course/feature grid, about section, service cards,
product showcase (with pricing), review/testimonial grid, FAQ accordion, and
a three-column footer with newsletter signup. The overall aesthetic is modern
tech/product — dark hero with blue gradient accents, clean white content
sections, and rounded CTA buttons.

**Preview URL:** https://preview.colorlib.com/theme/watch/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/watch-free-template.jpg
**ColorLib source name:** Watch

## Design Tokens (from live preview CSS)

| Token             | Value                                       | Notes                                          |
| ----------------- | ------------------------------------------- | ---------------------------------------------- |
| Font family       | `"Poppins", sans-serif`                     | Google Fonts; weights 300–700 used             |
| Brand primary     | `#235ee7` (royal blue)                      | Buttons, links, accents                        |
| Brand secondary   | `#4ae7fa` (cyan/teal)                       | Gradient partner for primary                   |
| Body text         | `#777777` (medium grey)                     | Paragraphs, descriptions                       |
| Heading text      | `#222222` (near-black)                      | H1–H6                                          |
| White             | `#fff`                                      | Button text, banner text                       |
| Section bg alt    | `#f9f9ff` (very light lavender)             | Alternating section backgrounds                |
| Footer bg         | `#f9f9ff` (same lavender)                   | Footer area                                    |
| FAQ card header   | gradient `#235ee7 → #4ae7fa`               | Accordion header background                    |
| Button radius     | `25px` (pill shape)                         | `.primary-btn` border-radius                   |
| Button style      | gradient fill `#235ee7 → #4ae7fa`           | Transparent on hover with white border         |
| Card border-radius| `3px`                                       | Product/review cards                           |
| Star rating       | Gold `#ffc107` via Font Awesome `.fa-star`  | Review section                                 |
| Overlay           | `rgba(0,0,0,0.5)` on video section          | Play button area                               |

## Section Structure (in order, matched 1:1)

1. **Navbar** — fixed/sticky header with logo left, nav links right (Home,
   About, Service, Unique Feature, Review, FAQ, Pages dropdown). White text
   on transparent/dark background.
2. **Banner/Hero** — full-screen (`min-h-screen`) dark background image
   section. Centered white text: subtitle "Now you can feel the Heat"
   (uppercase, small), heading "Smart New Future" (large), white rounded
   "Buy Now" CTA button.
3. **Video Section** — split layout: left column has heading "We've made a
   life that will change you", paragraph text, dark "Get Started now"
   button; right column has a video thumbnail with play button overlay
   (dark overlay + centered play icon).
4. **Top Course Area** — centered title "Top Courses That are open for
   Students" + subtitle. 4 feature cards (2 left, 2 right) flanking a
   center product image. Each card has an icon (Linearicons), title link,
   and description text.
5. **About Section** — full-width split: left half = image, right half =
   heading "Globally Connected by Large Network", subtitle, paragraph
   description, "get details" CTA button. No section gap.
6. **Service Section** — centered title "Some Features that Made us Unique"
   + subtitle. 3 service cards in a row, each with an icon (Linearicons),
   title, and description. Light lavender background.
7. **Unique Feature Section** — dark/colored background. Centered title
   "Some Features that Made us Unique" (white text). 4 product cards in a
   row: each with product image, product name, price, and "Pre Order"
   button. Cards have `border-radius: 3px`.
8. **Review Section** — centered title. 7 review/testimonial cards in a
   responsive grid (3 columns on desktop). Each card: reviewer name (h4),
   review text, and 5-star rating (using Font Awesome stars).
9. **FAQ Section** — centered title "Frequently Asked Questions". Left
   column: 4-item accordion (Bootstrap collapse). Each accordion item has
   a blue gradient header button and expandable body with answer text.
   Right column: empty/spacer.
10. **Footer** — light lavender background. 3 columns: (a) About Us with
    copyright text, (b) Newsletter signup form with email input + arrow
    button, (c) Follow Us with 4 social icon links. Footer links to
    Component Dock per monorepo convention.

## Gherkin Scenarios

```gherkin
Feature: Hourglass Landing Page

  Background:
    Given the user visits the Hourglass landing page

  Scenario: Navbar displays all navigation links
    Then the navbar shows links: Home, About, Service, Unique Feature, Review, FAQ
    And the navbar has a logo on the left

  Scenario: Hero banner renders with CTA
    Given the hero banner is visible
    Then the banner heading reads "Smart New Future"
    And the banner subtitle reads "Now you can feel the Heat"
    And there is a "Buy Now" button
    When the user clicks "Buy Now"
    Then the page scrolls to the content area

  Scenario: Video section shows play overlay
    Given the video section is visible
    Then there is a video thumbnail with a play button overlay
    And the left side shows a heading and description
    And there is a "Get Started now" button

  Scenario: Top courses grid displays 4 feature cards
    Given the courses section is visible
    Then there are 4 feature cards displayed
    And each card has an icon, title, and description
    And a center product image is shown between the card columns

  Scenario: About section shows split layout
    Given the about section is visible
    Then there is an image on the left
    And the heading "Globally Connected by Large Network" is on the right
    And there is a "get details" CTA button

  Scenario: Service section shows 3 feature cards
    Given the service section is visible
    Then there are 3 service cards displayed
    And each card has an icon, title, and description

  Scenario: Unique features section shows 4 product cards
    Given the unique features section is visible
    Then there are 4 product cards displayed
    And each card shows a product image, name, price, and "Pre Order" button
    And the section has a colored/dark background

  Scenario: Review section shows testimonial cards with ratings
    Given the review section is visible
    Then there are 7 review cards displayed in a grid
    And each card shows a reviewer name, review text, and star rating
    And star ratings use filled/unfilled star icons

  Scenario: FAQ accordion expands and collapses
    Given the FAQ section is visible
    Then there are 4 accordion items displayed
    When the user clicks the first FAQ question
    Then the answer becomes visible
    When the user clicks the same question again
    Then the answer collapses

  Scenario: Footer has three columns
    Given the footer is visible
    Then there is an "About Us" column with description text
    And there is a "Newsletter" column with an email input
    And there is a "Follow Us" column with social icons
    And the footer links to Component Dock

  Scenario: Navigation links scroll to sections
    When the user clicks "About" in the navbar
    Then the page scrolls to the about section
    When the user clicks "Service" in the navbar
    Then the page scrolls to the service section
```

## Verification Checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar is sticky/fixed with correct links
- [ ] Hero banner is full-height with background image and centered text
- [ ] Gradient primary button (`#235ee7 → #4ae7fa`) renders with pill shape
- [ ] Video section has dark overlay with play button
- [ ] Top courses grid: 4 cards + center image, responsive layout
- [ ] About section: split layout, no gap
- [ ] Service cards: 3 in a row on desktop, stack on mobile
- [ ] Unique features: 4 product cards with pricing, dark background
- [ ] Reviews: 7 cards in grid with star ratings
- [ ] FAQ accordion: expand/collapse works, blue gradient headers
- [ ] Footer: 3 columns, newsletter form, social icons, Component Dock link
- [ ] Poppins font loaded from Google Fonts
- [ ] Brand gradient (`#235ee7 → #4ae7fa`) used consistently for accents
- [ ] Sections alternate white / `#f9f9ff` lavender backgrounds
- [ ] Responsive: cards stack on mobile, hero adjusts height
- [ ] No ColorLib references in app code (only in spec)
- [ ] `public/CNAME` contains `hourglass.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://hourglass.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`

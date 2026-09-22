# Template: FitNest (Health Fitness / Gym)

## Purpose

FitNest is a single-page fitness/gym website in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Fitnezz" free template
(source: https://colorlib.com/wp/template/fitnezz/), built under a DIFFERENT
name (**FitNest**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a dark-themed gym/fitness site with a hero slider, featured
classes carousel with price badges, a schedule grid, trainer carousel,
testimonial quotes, blog cards, and a dark footer. The aesthetic is bold
and high-contrast — hot pink accent on dark/black backgrounds, square
buttons, oversized decorative background text behind section headings,
and full-bleed background images in cards.

## Naming

The ColorLib source name "Fitnezz" is FORBIDDEN as the app name. **FitNest**
is the new, original name — single lowercase word (kebab-case: `fitnest`),
no collision with `apps/`, `openspec/specs/`, or `docs/templates/`
(verified: zero hits). Source slug: `fitnezz`. Preview URL:
https://preview.colorlib.com/theme/fitnezz/

## Design reference (replication findings)

- **Original:** ColorLib "Fitnezz" (page title: "Colorlib Fitnezz").
  Listed in TEMPLATES.md under **Health Fitness** (line 1848). Single-page
  gym/fitness site with carousel-driven content sections.

- **Live preview — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/fitnezz/` returns HTTP 200.
  Stylesheets: `css/style.css` (custom styling), `css/bootstrap.css`,
  `css/animate.css`, `css/owl.carousel.min.css`, `css/magnific-popup.css`.
  External deps: Bootstrap grid, Font Awesome, Owl Carousel, Animate.css.
  Fonts: Google Fonts "Open Sans" (300/400/700/800 weights).

- **Design tokens (extracted from `css/style.css`):**

  | Token              | Value             | Usage                                        |
  | ------------------ | ----------------- | -------------------------------------------- |
  | Primary brand      | `#f73471` (hot pink) | CTA buttons, accent color, links, price badges, dropdown hover |
  | Button hover pink  | `#f96593`         | Primary button hover/border color            |
  | Font family        | `"Open Sans", Arial, sans-serif` | Body and all text            |
  | Body text          | `#868e96`         | Paragraphs, body copy                        |
  | Headings           | `#000` (black)    | h1-h4 headings                               |
  | Body background    | `#fff` (white)    | Default page background                      |
  | Light section bg   | `#f7f7f7`         | Schedule section background (bg-light)       |
  | Footer background  | `#262626`         | Site footer                                  |
  | Navbar mobile bg   | `#000` (black)    | Mobile navbar background                     |
  | Button radius      | `0px` (square)    | All buttons and form controls                |
  | Dropdown radius    | `4px`             | Navbar dropdown menu                         |
  | Button text        | `uppercase, 0.2em letter-spacing, 13px` | All button labels     |
  | Heading back-text  | `#e3e3e3` (light gray) | Decorative oversized text behind headings |
  | Schedule/blog meta | `#999999`         | Date/time metadata                           |
  | Testimonial quote  | `#000` (black)    | Blockquote text                              |
  | Footer link color  | `#f73471`         | Footer anchor links                          |
  | Footer text        | `rgba(255,255,255,0.5)` | Footer body text                     |

- **Live DOM structure (from fetched HTML + CSS):**

  - `header` (absolute positioned, transparent over hero on desktop, black bg on mobile)
    - `nav.navbar.navbar-dark` → brand "Fitne<span>zz</span>" (span = pink)
    - Nav links: Home, About, Services (dropdown: Body Builder, Yoga Pilate, Healthy Life)
    - CTA button (bg: #f73471, white text)
  - `section.home-slider.owl-carousel` (hero slider)
    - 2 slide items with background images, centered text
    - Slide 1: "Health is wealth" heading + paragraph + "Get Started" (outline-white) + "Download" buttons
    - Slide 2: "Join Fitnezz Today" heading + same layout
  - `section.section` (Featured Classes — white bg)
    - Section heading: "Featured Classes" with decorative back-text "The Classes"
    - Owl Carousel of 4 class cards (image + price badge "#30.99" in pink bg + class name heading)
    - Cards: full-bleed image, overlay text, hover scale effect on image, price badge toggles to outline on hover
  - `section.section.bg-light` (Our Schedule — #f7f7f7 bg)
    - Section heading: "Our Schedule" with back-text-dark "Schedule"
    - 2x2 grid of schedule items, each with 50/50 image + text layout
    - Each item: class name, description, time (clock icon) + date (calendar icon), "Join from $15" CTA (btn-primary btn-sm)
    - Images alternate sides (order-2 for bg-image in left column items)
  - `section.section` (Expert Trainers — white bg)
    - Section heading: "Expert Trainers" with back-text "Our Trainers"
    - Owl Carousel of trainer cards (portrait image + name + "Gym Trainer" subtitle)
  - `section.section` (Testimonial — white bg)
    - Section heading: "Testimonial" with back-text "Testimonial"
    - 3-column grid of blockquotes with avatar + quote text + name + title
  - `section.section` (Blog — white bg)
    - Section heading: "Blog" with back-text "Our Blog"
    - 2-column grid of blog cards (50/50 image + text: title, date, excerpt, "Read More" btn-primary)
  - `footer.site-footer` (#262626 bg)
    - 3-column: About Us (text + social icons), Contact Info (address/phone/email), Quick Links
    - Copyright line at bottom

- **Screenshot (from TEMPLATES.md):**
  Full-width hero with dark overlay on gym photo, "Health is wealth" white
  heading centered. Dark navbar with "Fitnezz" brand (zz in pink) and
  pink CTA button. Below: white section with class cards showing gym
  photos with pink price badges. Light gray schedule section with
  side-by-side image/text cards. Dark footer with 3 columns.

## Gherkin requirements

### Feature: FitNest Gym Website

  Background:
    Given the user visits FitNest at fitnest.free.componentdock.com
    Then the page loads with the FitNest brand and navigation

  ### Scenario: Hero slider displays
    Given the hero section is visible
    When the page loads
    Then a full-width hero slider shows with background images
    And the first slide displays "Health is wealth" heading
    And "Get Started" and "Download" buttons are visible
    And the slider auto-advances to the second slide

  ### Scenario: Navigation works
    Given the navigation bar is visible
    When the user clicks a nav link
    Then the page scrolls to the corresponding section
    And on mobile, the hamburger menu toggles the nav links

  ### Scenario: Featured classes carousel
    Given the Featured Classes section is visible
    When the user views the section
    Then 4 class cards are displayed in a carousel
    And each card shows an image, price badge, and class name
    And hovering a card scales the image up slightly

  ### Scenario: Schedule grid
    Given the Our Schedule section is visible
    When the user views the section
    Then 4 schedule items are displayed in a 2x2 grid
    And each item shows a class image, name, description, time, date
    And each item has a "Join from $15" button

  ### Scenario: Expert trainers carousel
    Given the Expert Trainers section is visible
    When the user views the section
    Then 3 trainer cards are displayed in a carousel
    And each card shows a portrait image, name, and title

  ### Scenario: Testimonials
    Given the Testimonial section is visible
    When the user views the section
    Then 3 testimonial quotes are displayed in a 3-column grid
    And each quote shows an avatar, quote text, name, and company

  ### Scenario: Blog cards
    Given the Blog section is visible
    When the user views the section
    Then 2 blog cards are displayed in a 2-column grid
    And each card shows an image, title, date, excerpt, and "Read More" button

  ### Scenario: Footer
    Given the footer is visible
    When the user scrolls to the bottom
    Then the footer shows About Us, Contact Info, and Quick Links columns
    And social media icons are present
    And a Component Dock link is present (replaces Colorlib attribution)

  ### Scenario: Responsive design
    Given the user resizes the browser to mobile width
    When the page reflows
    Then the navbar collapses to a hamburger menu
    And schedule items stack vertically
    And trainer/testimonial columns reduce to single column

## Verification checklist

- [ ] Hero slider renders with background images and auto-advances
- [ ] Navigation links scroll to sections; mobile hamburger works
- [ ] Featured classes carousel shows 4 cards with price badges
- [ ] Schedule section shows 4 items in 2x2 grid with time/date
- [ ] Trainers carousel shows 3 trainer cards with portraits
- [ ] Testimonials show 3 quotes in 3-column grid
- [ ] Blog section shows 2 cards in 2-column layout
- [ ] Footer has 3 columns with Component Dock link
- [ ] Brand color `#f73471` is used consistently for accents/CTAs
- [ ] Open Sans font family is loaded and applied
- [ ] All sections use the decorative back-text behind headings
- [ ] Responsive layout works at mobile breakpoints
- [ ] No ColorLib references appear in app code
- [ ] Public/CNAME contains fitnest.free.componentdock.com
- [ ] Homepage field set to https://fitnest.free.componentdock.com

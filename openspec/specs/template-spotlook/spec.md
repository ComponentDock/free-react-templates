# Template: Spotlook (Directory / Listing)

## Purpose

Recreation of ColorLib **Browse** as a React 19 + Vite + Tailwind 4 + TypeScript
single-page template. Business directory / local listings theme with search hero,
location cards, categories, FAQ, testimonials, and blog.

- **ColorLib source:** https://colorlib.com/wp/template/browse/
- **Live preview:** https://preview.colorlib.com/theme/browse/
- **New name:** `spotlook` (apps/spotlook, @free-react-templates/spotlook)
- **Screenshot analyzed:** colorlib.com/wp/wp-content/uploads/sites/2/browse-free-template.jpg

## Design tokens

| Token               | Value                                  | Notes                                         |
| ------------------- | -------------------------------------- | --------------------------------------------- |
| Primary brand color | `#00918e` (teal)                       | Nav pills, CTA bar, headings, links, buttons  |
| Body text           | `#4d4d4d`                              | Default paragraph color                       |
| Muted text          | `#737373`                              | Footer paragraphs                             |
| Footer link color   | `#999999`                              | Hover → `#00918e`                             |
| Dropdown hover      | `#f4f5f9`                              | Nav dropdown item hover                       |
| Body background     | `#ffffff`                              | Main sections                                 |
| Section alt bg      | `#f8f9fa` (Tailwind `bg-gray-100`)     | Testimonials section                          |
| Hero overlay        | `rgba(0,0,0,0.6)`                     | Semi-transparent dark on hero bg image        |
| Font family         | `"Rubik"` (Google Fonts, 400 + 700)    | Loaded via `<link>` in index.html             |
| Nav pill radius     | `30px`                                 | Active/hover pill shape on nav items          |
| Button radius       | `0` (sharp)                            | Primary buttons — rectangular                 |
| Outline button      | border `#00918e`, text `#00918e`       | "View All Categories" CTA                     |

## Section structure (top → bottom)

1. **Navbar** — transparent, logo left ("Spotlook"), nav links right (Home active pill,
   Dropdown, Listings, About, Blog, Contact). Mobile hamburger menu.
2. **Hero / Search** — full-width bg image with dark overlay, centered headline
   "Find Nearby [typed-words]" with typing animation cycling words (Attractions,
   Events, Hotels, Restaurants). Search form bar: keyword input, location input
   (with pin icon), category dropdown, Search button (teal).
3. **Most Visited Places** — section heading "Most Visited Places" with teal
   underline. 3×2 grid of listing cards: image thumbnail, heart bookmark icon,
   category pill, place name, address. 6 cards total.
4. **Popular Categories** — section heading "Popular Categories". 6-column grid
   of category tiles: icon, label, count (Hotels 489, Events 482, Spa 194,
   Stores 1472, Restaurants 439, Other 692). "View All Categories" outline button.
5. **Why Us (FAQ)** — two-column layout: left = large image, right = "Why Us"
   heading + 4 accordion FAQ items (How to list, Available countries, Is it free,
   How system works). Collapsible answers.
6. **How It Works** — section heading "How It Works". 3-column: numbered steps
   (1 Decide, 2 Find, 3 Explore) with SVG illustration, step number, title,
   description.
7. **Testimonials** — `bg-light` background. Carousel of customer testimonials:
   avatar image, name, blockquote. 4 testimonials.
8. **Tips & Articles (Blog)** — section heading "Tips & Articles". 3-column grid
   of blog cards: image, title, author + date, excerpt.
9. **CTA Banner** — full-width teal (`bg-primary`) bar. Heading "Let's get started.
   Create your account", description, "Sign Up" outline-white button.
10. **Footer** — white background, 4-column grid: Quick Links, Products, Features,
    Follow Us (social icons), Subscribe Newsletter (email input + Send button).
    Copyright line at bottom.

## Gherkin requirements

### Feature: Spotlook — Business Directory Template

```gherkin
Feature: Spotlook — Business Directory Template
  As a visitor to a business directory site
  I want to browse nearby places, categories, and articles
  So I can discover local businesses and services

  Background:
    Given the Spotlook template is loaded

  # ---- Navbar ----
  Scenario: Navbar renders with logo and links
    Then the navbar contains the logo text "Spotlook"
    And the navbar contains links: "Home", "Listings", "About", "Blog", "Contact"
    And the "Home" link has the active teal pill style

  Scenario: Navbar mobile toggle
    Given the viewport is below 1200px wide
    When I click the hamburger menu icon
    Then the mobile menu slides open

  # ---- Hero ----
  Scenario: Hero displays search headline with typing animation
    Then the hero section contains the text "Find Nearby"
    And a typing animation cycles through category words

  Scenario: Hero search form has four fields
    Then the hero search bar contains a keyword input
    And the hero search bar contains a location input with a pin icon
    And the hero search bar contains a category dropdown
    And the hero search bar contains a teal "Search" button

  # ---- Most Visited Places ----
  Scenario: Most Visited Places renders 6 listing cards
    Then the "Most Visited Places" section is visible
    And 6 listing cards are displayed in a grid
    And each listing card shows an image, bookmark heart, category pill, name, and address

  # ---- Popular Categories ----
  Scenario: Popular Categories renders 6 category tiles
    Then the "Popular Categories" section is visible
    And 6 category tiles are displayed with icon, label, and count
    And a "View All Categories" outline button is shown

  # ---- Why Us / FAQ ----
  Scenario: FAQ accordion items expand on click
    Then 4 FAQ accordion items are visible
    When I click the first FAQ item "How to list my item?"
    Then the answer expands with description text

  # ---- How It Works ----
  Scenario: How It Works shows 3 steps
    Then 3 step cards are displayed
    And each step has a number, illustration, title, and description

  # ---- Testimonials ----
  Scenario: Testimonials carousel shows customer reviews
    Then the "Satisfied Customers" section is visible
    And at least 3 testimonials are available in the carousel
    And each testimonial has an avatar, name, and quote

  # ---- Tips & Articles ----
  Scenario: Blog section renders article cards
    Then the "Tips & Articles" section is visible
    And 3 article cards are displayed with image, title, author, date, and excerpt

  # ---- CTA Banner ----
  Scenario: CTA banner renders with signup prompt
    Then the CTA banner has a teal background
    And the banner contains the heading "Let's get started"
    And a "Sign Up" outline-white button is visible

  # ---- Footer ----
  Scenario: Footer renders link columns and newsletter
    Then the footer contains Quick Links, Products, Features, and Follow Us columns
    And the footer contains a newsletter email input and Send button
    And the footer contains a copyright line with a "Component Dock" link

  # ---- Footer Component Dock ----
  Scenario: Footer links to Component Dock
    Then the footer contains a link to "https://www.componentdock.com/"
    And the link text reads "Component Dock"
```

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Font loaded: Rubik 400 + 700 via Google Fonts `<link>`
- [ ] Primary teal `#00918e` used consistently (nav pills, headings, CTAs, links)
- [ ] Hero has dark overlay on background image
- [ ] Typing animation cycles through category words
- [ ] Search form: keyword, location (pin icon), category dropdown, Search button
- [ ] 6 listing cards with image, heart, category, name, address
- [ ] 6 category tiles with icon, label, count
- [ ] FAQ accordion: 4 items, expandable
- [ ] How It Works: 3 steps with numbers and illustrations
- [ ] Testimonials carousel: 3+ testimonials with avatars
- [ ] Blog: 3 article cards
- [ ] CTA banner: teal bg, heading, outline-white button
- [ ] Footer: 4 columns + newsletter + copyright + Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No image assets copied; use picsum.photos placeholders
- [ ] Use lucide-react for icons (pin, heart, social, etc.)
- [ ] Typed.js effect replaced with CSS-based or JS typing animation in React

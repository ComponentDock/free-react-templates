# Template: Gearbox (Automotive / Garage Services)

## Purpose

Recreation of the ColorLib "AutoMotive" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** ColorLib AutoMotive — https://colorlib.com/wp/template/automotive/
- **Preview:** https://preview.colorlib.com/theme/automotive/
- **New name:** `gearbox` (apps/gearbox, `@free-react-templates/gearbox`)
- **Deploy target:** https://gearbox.free.componentdock.com
- **Category:** Automotive / garage services

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Public Sans", sans-serif` | Weights 400, 500, 600, 700, 800, 900 |
| Primary brand color | `#5F67FF` | Blue-purple, used on buttons + header icon accents |
| Header top bar background | `#25282C` | Dark charcoal |
| Heading text (section titles) | `#353535` | Dark gray |
| Body heading text | `#111111` | Near-black |
| Body paragraph text | `#727171` | Medium gray |
| Primary button | bg `#5F67FF`, white text, no border-radius (square), padding `14px 25px 12px` | `.primary-btn` |
| Site button | bg `#5F67FF`, border-radius `2px`, padding `14px 30px 12px` | `.site-btn` |
| Hero overlay | Black semi-transparent over background image | Text is white, h2 at 60px/700, span prefix at 40px/400 |
| Counter section background | Background image with overlay | Stats in white, strong accent |
| Footer background | Dark with background image | Multi-column layout |
| Section padding | `100px` top/bottom (`.spad`) | Hero gets `170px` top/bottom |

### Visual Design (from screenshot)

The template has a dark automotive/garage aesthetic. The hero uses a full-width background image with white overlay text. The color scheme is dark charcoal headers/footers with a distinctive blue-purple (#5F67FF) accent on CTAs and icons. Layout is grid-based with alternating image/text service cards. The overall feel is professional automotive workshop.

## Section Structure (in order)

1. **Header** — Top info bar (phone, hours, social links) + main nav bar with logo, navigation links (Home, Services, Shop, Pages dropdown, Blog), search + cart icons
2. **Hero** — Full-width background image, "Welcome To" prefix + "Gearbox Garage" heading, subtitle text, "Our Services" CTA button
3. **Services** — "What We Do?" section title + 4 service cards in alternating layout (text/image pairs): Engine Overhaul, Power Steering, Oil Change, Upgrades Car — each with icon, title, description
4. **Choose Us** — Split layout: left image, right side with "20 Years Experience" heading, checklist items (4 checkmarks), "About Us" CTA
5. **Products** — "Our Products" section title + 4 product cards in grid: image with hover actions (heart, eye, exchange), product name, price, "Add To Cart" link
6. **Testimonial** — Carousel slider with quote icon + testimonial text (3 slides)
7. **Counter/Statistics** — Background image section with "About Our Statistics" title + 4 stat items: All Projects, Completed, Customers, Awards (each with icon, number, label)
8. **Latest News** — "Latest News" section title + 3 blog cards: background image with date overlay, article title, excerpt, "Continue Reading" link
9. **Footer** — Top row: 3 contact/action cards (Appointment, Phone, Hours); then multi-column bottom: About text, Useful Links, Recent News, Instagram-style gallery; bottom bar with copyright + Component Dock link

## Gherkin Requirements

### Feature: Gearbox Template

```gherkin
Feature: Gearbox automotive services template
  As a visitor to the Gearbox website
  I want to see a professional automotive services page
  So that I can learn about services, products, and contact the business

  Background:
    Given the page is loaded at "/" 

  # --- Header ---
  Scenario: Header top bar displays contact info
    Then the header top bar shows phone number "(+123) 4567-7890-123"
    And the header top bar shows hours "Mon-Sat: 10:00 - 16:00 / Sunday Close"
    And social media icons (Facebook, Twitter, Vimeo, Pinterest) are visible

  Scenario: Main navigation bar
    Then the logo is displayed on the left
    And navigation links include "Home", "Services", "Shop", "Pages", "Blog"
    And search and cart icons are on the right

  Scenario: Mobile menu toggle
    When I click the hamburger menu button
    Then the offcanvas mobile menu slides open
    And navigation links are visible inside the mobile menu

  # --- Hero ---
  Scenario: Hero section renders
    Then the hero displays a full-width background image
    And a "Welcome To" subtitle is shown above the main heading
    And the main heading reads "Gearbox Garage"
    And a descriptive paragraph is shown below the heading
    And a "Our Services" CTA button is displayed

  Scenario: Hero CTA navigates
    When I click the "Our Services" button
    Then the page scrolls to the services section

  # --- Services ---
  Scenario: Services section displays 4 service cards
    Then the "What We Do?" section title is visible
    And 4 service cards are rendered in alternating image/text layout
    And each card has an icon, title, and short description

  Scenario: Service cards show correct content
    Then service card 1 shows "Engine Overhaul"
    And service card 2 shows "Power Steering"
    And service card 3 shows "Oil Change"
    And service card 4 shows "Upgrades Car"

  # --- Choose Us ---
  Scenario: Choose Us section displays
    Then a background image is shown on the left half
    And "20 Years Experience" heading is on the right
    And 4 checklist items with checkmark icons are displayed
    And an "About Us" CTA button is shown

  # --- Products ---
  Scenario: Products section displays 4 product cards
    Then the "Our Products" section title is visible
    And 4 product cards are rendered in a grid
    And each card shows a product image, name, and price

  Scenario: Product cards have hover actions
    Then each product card has heart, eye, and exchange hover icons
    And each card has an "Add To Cart" link

  # --- Testimonial ---
  Scenario: Testimonial carousel renders
    Then a testimonial slider is displayed
    And it contains at least 3 testimonial quotes
    And carousel navigation dots are shown

  Scenario: Testimonial carousel navigates
    When I click a navigation dot
    Then the carousel transitions to the corresponding slide

  # --- Counter ---
  Scenario: Statistics section displays
    Then the "About Our Statistics" title is visible over a background image
    And 4 stat items are shown: "All Project", "Project Completed", "Customers Action", "Awards Winner"
    And each stat shows an icon, number, and label

  # --- Latest News ---
  Scenario: News section displays 3 blog cards
    Then the "Latest News" section title is visible
    And 3 blog cards are rendered in a grid
    And each card has a background image, date, title, excerpt, and "Continue Reading" link

  # --- Footer ---
  Scenario: Footer top row shows contact cards
    Then 3 footer top cards are displayed: Appointment, Phone, Hours
    And each card has an icon and heading text

  Scenario: Footer bottom columns
    Then the footer shows About, Useful Links, Recent News, and gallery columns
    And a copyright line is at the very bottom

  Scenario: Footer links to Component Dock
    Then the footer contains a link to "https://www.componentdock.com/"
    And the link text references "Component Dock"

  # --- Responsive ---
  Scenario: Mobile responsiveness
    Given the viewport width is 375px
    Then the navigation collapses to a hamburger menu
    And service cards stack vertically
    And product cards display in a 2-column grid
    And the footer columns stack vertically
```

## Verification Checklist

- [ ] All 9 sections render in the correct order
- [ ] Design tokens match: #5F67FF primary, #25282C header, Public Sans font
- [ ] Hero background image with overlay + white text
- [ ] 4 service cards in alternating image/text layout
- [ ] Choose Us split layout with checklist
- [ ] 4 product cards with hover actions
- [ ] Testimonial carousel with 3+ slides
- [ ] Counter stats section with background image
- [ ] 3 blog/news cards
- [ ] Footer with 3 contact cards + multi-column layout
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Mobile responsive (hamburger nav, stacked layouts)
- [ ] Placeholder images via picsum.photos with deterministic seeds

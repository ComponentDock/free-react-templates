# Template: Bidmark (Auction Website)

## Purpose

Bidmark is a single-page AUCTION WEBSITE TEMPLATE in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Auction" free template
(source: https://colorlib.com/wp/template/auction/), built under a DIFFERENT
name (**Bidmark**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a multi-page Bootstrap 4 auction marketplace powered by jQuery,
Owl Carousel, AOS, Fancybox, and various plugins. The index page includes: an
absolute navbar with logo and Sign In/Register link, a full-width hero with
background image, an 8-item product auction grid with price badges, a "How It
Works" 4-step section, an About Us section with feature icons, a testimonial
carousel over a background image, a CTA section, and a 4-column footer. It is
a member of the ColorLib "Business" template family.

**WHAT MAKES BIDMARK DISTINCT (signature behaviors):**

1. **Orange brand color `#f37121`.** The entire palette centers on this bold
   orange: used for headings (h1-h3, h5), caption labels, price badge
   backgrounds, feature icon circles, and the loader spinner accent. No
   secondary brand color.
2. **Circular price badges.** Each auction item has a 90px diameter orange
   circle (`border-radius: 50%`) positioned absolute over the product image,
   displaying the price in white bold 20px text.
3. **Square buttons.** All buttons use `border-radius: 0` — sharp square
   corners. The "Submit a Bid" button has a light gray (`#f8f9fa`) background
   with black text. The primary "Register" button uses Bootstrap default blue.
4. **4-step "How It Works" process.** A horizontal row of 4 steps (Register,
   Buy or Bid, Submit a bid, Win) with icomoon circle icons and connecting
   arrow decorations (CSS `::after` pseudo-element).
5. **Feature icons in orange circles.** The About section has 3 feature items
   (Fast Support, Happy Customers, 24/7 Support) with 70px orange circle
   icons (white icon, 40px font).
6. **Muli font.** Google Fonts Muli (weights 300, 400, 700, 900). Body text
   is 15px, gray (`#999999`), font-weight 300, line-height 1.7.
7. **Testimonials over background image.** The testimonials section uses a
   full-width background image with overlay, containing an Owl Carousel of
   person cards (photo + name + role + quote).
8. **8 product auction cards.** A 4-column grid of 8 items, each with: a
   product image, overlaid orange price badge, product title, category tag,
   bid count, and "Submit a Bid" button.
9. **Absolute navbar.** Positioned absolutely over the hero with transparent
   background, logo on left, nav links + Sign In/Register on right.

## Naming

The ColorLib source name "Auction" is FORBIDDEN as the app name.
**Bidmark** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-09-07: zero hits for "bidmark" in those
listings).

Source slug + preview URL recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Auction" (page title: "Auction — Website by
  Colorlib"). Listed in TEMPLATES.md (row at line 898 —
  `wp/template/auction/`).
- **Live preview — REACHABLE (verified 2026-09-07):**
  **`https://preview.colorlib.com/theme/auction/`** (HTTP 200, 23,844 bytes,
  `<title>Auction — Website by Colorlib</title>`).
  Stylesheets: `css/style.css` (custom, ~29 KB), `css/bootstrap.min.css`,
  `css/owl.carousel.min.css`, `css/owl.theme.default.min.css`,
  `css/jquery.fancybox.min.css`, `css/aos.css`, `css/jquery-ui.css`,
  `css/bootstrap-datepicker.css`, `fonts/flaticon/font/flaticon.css`,
  `fonts/icomoon/style.css`. Scripts: jQuery, Bootstrap, Owl Carousel, AOS,
  Fancybox, and more. Fonts: Google Fonts Muli (300, 400, 700, 900).
  Icons: icomoon + Flaticon → **replace with lucide-react**.
- **Live DOM structure (1:1, verified from the fetched HTML):**
  - `div.site-wrap` (page wrapper)
    - Mobile menu: `div.site-mobile-menu`
    - `header.site-navbar.py-4.site-navbar-target` (absolute positioned)
      - `div.container` → `div.d-flex.align-items-center`
        - `div.site-logo` → img logo
        - `div.mr-auto` → `nav.site-navigation` → `ul.site-menu`
          - li: Home (active), Buy, Sell, Services (dropdown: Sell Items, Buy Items, Submit a Bid), Blog, About, Contact
        - `div.ml-auto` → Sign In/Register link + hamburger toggle
    - `div.intro-section` (hero, bg-image: hero_1.jpg, 100vh)
      - `div.container` → centered: h1, p, Register button
    - `div.site-section` (auctions)
      - Caption "Auctions", heading "Current Auctions"
      - `div.row.auctions-entry` → 8× product cards (4-col grid)
        - Each: price badge (absolute circle), product image, title, category + bids, "Submit a Bid" btn
    - `div.site-section.pt-0` (how it works)
      - Caption "How?", heading "How It Works"
      - 4× `div.col-lg-3` → `div.step` (icon + h3 + p)
    - `div.site-section` (about)
      - 2-col: image left, features right (3× feature-icon with orange circle)
    - `div.section-bg.style-1` (testimonials, bg-image overlay)
      - Caption "Testimonials", heading "Happy Clients"
      - Owl Carousel of testimonial cards (photo + name + role + quote)
    - `div.site-section` (CTA)
      - Centered: h2 "Create an account...", Register button
    - `div.footer` (bg: #f8f9fa, 4rem padding)
      - 4-col: logo + text, Solutions, Services, Contact + copyright

- **Screenshot:** Downloaded from ColorLib CDN (62,558 bytes, JPEG).
  Visual: clean auction marketplace with orange brand color, hero image
  with centered text, 4-column product grid with orange price circles,
  4-step process section, about section with orange feature icons,
  testimonials over dark background image, and a light gray footer.

## Design tokens (live stylesheet, verified 2026-09-07)

| Token             | Value                                    | Use                                                                    |
| ----------------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| Primary brand     | `#f37121`                                | Headings, captions, price badges, feature icons, loader accent         |
| Body text color   | `#999999`                                | Body text (gray)                                                       |
| Heading color     | `#f37121` (h1-h3, h5), `#000` (.text-black) | Headings default orange; `.text-black` override for section headings   |
| Caption color     | `#f37121`                                | Uppercase section captions (11px, letter-spacing 0.2rem, bold)         |
| Price badge bg    | `#f37121`                                | 90px circle over product images                                        |
| Price badge text  | `#fff`, 20px, bold                       | Price inside circle                                                    |
| Feature icon bg   | `#f37121`                                | 70px circle, white icon (40px)                                         |
| Button style      | `border-radius: 0` (square)              | All buttons                                                            |
| btn-bid bg        | `#f8f9fa`                                | "Submit a Bid" button (light gray)                                     |
| btn-bid text      | `#000`                                   | "Submit a Bid" button text                                             |
| Navbar bg         | transparent (absolute)                   | Overlay on hero                                                        |
| Footer bg         | `#f8f9fa`                                | Footer background                                                      |
| Section bg (testimonial) | Background image with dark overlay | Full-width image section                                          |
| Font family       | `"Muli", sans-serif`                     | Body + headings (Google Fonts Muli 300, 400, 700, 900)                 |
| Font size         | `15px`                                   | Body base                                                              |
| Font weight       | `300`                                    | Body                                                                   |
| Line height       | `1.7`                                    | Body                                                                   |
| Hero height       | `100vh`, min-height `500px`              | Intro section                                                          |
| Step arrow        | icomoon `\e315` (CSS ::after)            | Arrow between steps → replace with lucide-react ArrowRight             |
| Loader spinner    | `#51be78` (green circle)                 | Page loader (optional — may skip in React)                             |

## Gherkin requirements

### Feature: Bidmark — Auction Website Template

  As a visitor to the Bidmark page,
  I want to see an auction marketplace with product listings, a how-it-works
  section, testimonials, and a CTA,
  so that I can understand how an auction site looks and feels.

  Background:
    Given the page is loaded at the Bidmark root URL
    And the browser supports modern JavaScript (ES2020+)

  Scenario: Navbar renders with absolute positioning
    Then a navigation bar should be visible at the top of the page
    And the navbar should have a transparent background
    And the navbar should display a logo image
    And the navbar should contain navigation links: Home, Buy, Sell, Services, Blog, About, Contact
    And a "Sign In / Register" link should be visible in the navbar

  Scenario: Navbar has mobile menu toggle
    Given the viewport width is 375px
    Then a hamburger menu toggle should be visible
    And the desktop navigation links should be hidden

  Scenario: Hero section displays with background image
    Then a hero section should be visible
    And the hero should have a background image
    And the hero should display the heading "The Best Place to Buy and Sell"
    And the hero should display a subtitle paragraph
    And the hero should have a "Register" button
    And the hero should be approximately full viewport height

  Scenario: Auction grid shows 8 product cards
    Then a product auction grid should be visible
    And the grid should display 8 product cards
    And the grid should be arranged in a 4-column layout
    And each product card should have a product image
    And each product card should have an overlaid price badge

  Scenario: Price badges are circular and orange
    Then each price badge should be a circle (border-radius 50%)
    And each price badge should have an orange background (#f37121)
    And each price badge should display a price in white text
    And each price badge should be approximately 90px in diameter

  Scenario: Product cards show title, category, and bid count
    Then each product card should display a product title
    And each product card should display a category label
    And each product card should display a bid count
    And each product card should have a "Submit a Bid" button

  Scenario: Submit a Bid button has square style
    Then each "Submit a Bid" button should have square corners (no border-radius)
    And each "Submit a Bid" button should have a light gray background (#f8f9fa)
    And each "Submit a Bid" button should have black text

  Scenario: How It Works section shows 4 steps
    Then a "How It Works" section should be visible
    And the section should display 4 steps in a row
    And the steps should be: Register, Buy or Bid, Submit a bid, Win
    And each step should have an icon
    And each step should have a heading and description

  Scenario: Step icons use circle style
    Then each step icon should be displayed in a circular container
    And the step icons should use the icomoon font (to be replaced with lucide-react)

  Scenario: About Us section displays with features
    Then an "About Us" section should be visible
    And the section should have a product image on the left
    And the section should have 3 feature items on the right
    And the features should be: Fast Support, Happy Customers, 24/7 Support
    And each feature icon should be in a 70px orange circle

  Scenario: Testimonials section displays over background image
    Then a testimonials section should be visible
    And the testimonials section should have a background image
    And the testimonials section should display "Happy Clients" heading
    And testimonials should show person photos, names, and roles
    And testimonials should show quote text

  Scenario: CTA section displays registration prompt
    Then a CTA section should be visible
    And the CTA should display "Create an account and start Buy, Bid or Sell Now!"
    And the CTA should have a "Register" button

  Scenario: Footer renders with four columns
    Then a footer should be visible at the bottom of the page
    And the footer should have a light gray background (#f8f9fa)
    And the footer should contain a logo and description
    And the footer should contain "Solutions" links
    And the footer should contain "Services" links
    And the footer should contain "Contact" links
    And the footer should contain a copyright notice

  Scenario: Footer links to Component Dock
    Then a link to "https://www.componentdock.com/" should be present
    And the link text should contain "Component Dock"

  Scenario: Responsive layout on mobile
    Given the viewport width is 375px
    Then the navbar should collapse to a hamburger menu
    And the hero content should stack vertically
    And the auction grid should stack to fewer columns
    And the how-it-works steps should stack vertically
    And the footer columns should stack vertically

  Scenario: Orange brand color is consistent
    Then headings should use the orange color (#f37121)
    And captions should use the orange color (#f37121)
    And price badges should use the orange background (#f37121)
    And feature icons should use the orange background (#f37121)

  Scenario: No ColorLib references in app code
    Then no source file in the app should contain "colorlib.com"
    And no source file in the app should contain "Colorlib"
    And provenance should exist only in the spec and TEMPLATES.md

## Verification checklist

- [ ] Spec matches the live DOM structure from the preview
- [ ] Design tokens match the live stylesheet values
- [ ] Navbar is absolute with transparent bg and Sign In/Register link
- [ ] Hero is full-width bg image with centered heading and Register CTA
- [ ] Auction grid has 8 product cards in 4-column layout
- [ ] Price badges are 90px orange circles with white price text
- [ ] "Submit a Bid" buttons are square with light gray bg
- [ ] How It Works has 4 steps with icons and connecting arrows
- [ ] About Us has image + 3 feature items with orange circle icons
- [ ] Testimonials are over a background image with person cards
- [ ] CTA section has registration prompt and button
- [ ] Footer has 4 columns with light gray bg
- [ ] Font is Muli (Google Fonts, weights 300/400/700/900)
- [ ] Primary brand color is #f37121 (orange)
- [ ] Body text is #999999, 15px, weight 300
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to Component Dock
- [ ] 100% test coverage on new code
- [ ] Spec passes `npm run spec:validate`

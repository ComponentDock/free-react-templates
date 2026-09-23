# Template: Adpick (Classified Ads Directory)

## Purpose

Adpick is a single-page classified ads directory website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Classy Ads" free template (source:
https://colorlib.com/wp/template/classy-ads/), built under a DIFFERENT name
(**Adpick**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Source slug:** classy-ads
**Preview URL:** https://preview.colorlib.com/theme/classy-ads/ (hash-based: https://preview.colorlib.com/#classy-ads)
**Live preview page:** https://preview.colorlib.com/theme/classyads/ (171 KB, successfully fetched)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg

The original is a classified ads directory template with a dark-overlaid
hero with search bar, featured ad listings grid, popular products list,
trending section, testimonials, blog posts, newsletter, and footer. It uses
a clean, modern, minimal design aesthetic with a bright teal accent color
and neutral backgrounds. Built on Bootstrap 4 with Nanum Gothic font.

## Design Tokens

Extracted from the live preview CSS (style.css fetched from
https://preview.colorlib.com/theme/classyads/css/style.css):

### Colors

| Token                   | Value                              | Usage                                                               |
| ----------------------- | ---------------------------------- | ------------------------------------------------------------------- |
| Primary brand           | `#30e3ca` (bright teal/cyan)       | Search button, "Post an Ad" button, section headings, newsletter bg |
| Body text               | `#4d4d4d` (medium gray)            | Default body text                                                   |
| Heading text            | `#25262a` (dark charcoal)          | Card titles, section headings (dark)                                |
| Secondary accent        | `#8bc34a` (lime green)             | Secondary accent (used sparingly)                                   |
| Body background         | `#ffffff` (white)                  | Default page background                                             |
| Light section bg        | `#f4f5f9` (very light gray)        | Alternating section backgrounds (bg-light)                          |
| White section bg        | `#ffffff` (white)                  | Testimonials section background                                     |
| Hero overlay            | `rgba(0, 0, 0, 0.6)` (60% black)  | Dark overlay over hero background image                             |
| Navigation text         | `#000000` (black)                  | Default nav links                                                   |
| Navigation text         | `#ffffff` (white)                  | Footer nav links                                                    |
| Footer background       | `#333333` (dark gray)              | Footer section                                                      |
| Footer text             | `#999999` (muted gray)             | Footer links and paragraphs                                         |
| Footer heading          | `#ffffff` (white)                  | Footer column headings                                              |
| Newsletter background   | `#30e3ca` (teal, via bg-primary)   | Newsletter CTA section                                              |
| Input background        | `#ffffff` (white)                  | Search input fields                                                 |
| Testimonial text        | `#737373` (medium gray)            | Testimonial body text                                               |

### Typography

| Token                 | Value                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| Font family           | `"Nanum Gothic", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`  |
| Logo text             | Bold, black, brand name "ClassyAds" with "Ads" in primary teal                                               |
| Hero headline weight  | 700 (bold)                                                                                                    |
| Hero headline size    | ~2.5rem                                                                                                       |
| Section heading style | font-weight-light, text-primary (#30e3ca)                                                                    |
| Featured Ads heading  | h5, mb-4, text-black                                                                                          |
| Card title weight     | Bold (h3 inside listing cards)                                                                                |
| Body weight           | 400 (regular)                                                                                                 |
| Blog title size       | font-size-regular                                                                                             |
| Footer heading        | footer-heading class, white text                                                                              |

### Spacing & Shapes

| Token                  | Value                                       |
| ---------------------- | ------------------------------------------- |
| Button border-radius   | 0 (square, default Bootstrap .btn)          |
| CTA button (Post Ad)   | bg-primary, text-white, rounded (4px)       |
| Search button          | bg-primary, text-white, square              |
| Search input radius    | 4px (rounded class)                         |
| Tag/link pill radius   | 30px (pill shape, for category tags)        |
| Card border-radius     | 4px                                         |
| Hero height            | ~50vh (full viewport overlay)               |
| Section padding        | py-5 (2rem vertical)                        |
| Nav padding            | py-3 vertical                               |
| Container              | Bootstrap container, max-width ~1200px      |
| Newsletter input       | bg-white, form-control, d-flex              |

## Section Order (from live preview, top to bottom)

1. **Navbar** — White bar with logo "Classy<span class="text-primary">Ads</span>" (bold black text, "Ads" in teal), right-aligned nav links (Home, Ads, About with dropdown, Blog, Contact), auth links (Log In, Register), teal "Post an Ad" CTA button (bg-primary, text-white, rounded). Uses Bootstrap navbar with .site-navbar class. Mobile hamburger menu with .site-mobile-menu.

2. **Hero** — Full-width section with background image (images/hero_2.jpg), dark overlay (rgba(0,0,0,0.6)), parallax (data-stellar-background-ratio). Centered content: large headline "Largest Classifieds In The World" (h1, data-aos="fade-up"), search bar form with 3 inputs (text search, location with icon, category dropdown) + teal search button. Uses .site-blocks-cover.overlay class.

3. **Featured Ads** — Light gray background (bg-light). Section heading "Featured Ads" (h5, text-black, mb-4). 4-column grid of 8 ad listing cards (2 rows × 4 cols). Each card: image thumbnail, title (h3 with link), price/location info. Uses .site-section.bg-light.

4. **Popular Products** — White background. Section heading "Popular Products" (h2, font-weight-light, text-primary). 5 items in a layout with images and prominent titles. Uses .site-section with data-aos="fade". Each item: large image, h2 title link.

5. **Trending Today** — Light gray background (bg-light). Section heading "Trending Today" (h2, font-weight-light, text-primary). Grid of 6 listing cards with images and titles. Similar card layout to Featured Ads. Uses .site-section.bg-light.

6. **Testimonials** — White background (bg-white). Section heading "Testimonials" (h2, font-weight-light, text-primary). 4 testimonial cards in a row. Each: blockquote with quote text, profile image (figure img), author name. Uses .testimonial class with blockquote styling. Uses .site-section.bg-white.

7. **Our Blog** — Light gray background (bg-light). Section heading "Our Blog" (h2, font-weight-light, text-primary). 3 blog post cards in a row. Each: image, title (h2.font-size-regular with text-black link), excerpt text. Uses .site-section.bg-light.

8. **Newsletter** — Teal background (bg-primary, py-5). Left side: "Newsletter" heading (h2, white) + description text. Right side: inline form with email input (bg-white form-control) + submit button. Uses .newsletter.bg-primary class.

9. **Footer** — Dark gray background (#333333). 3-column layout: "About" (text + links), "Navigations" (link list), "Follow Us" (social links). Footer text in muted gray (#999999), headings in white. Copyright bar at bottom. Uses .site-footer class.

## Gherkin Requirements

### Feature: Adpick — Classified Ads Directory Template

  Background:
    Given the app is served at the root URL
    When  the page loads
    Then  the full page renders without errors
    And   all sections are visible in the correct order

  # --- Navbar ---
  Scenario: Navbar displays logo and navigation
    Given the navbar is rendered
    Then  the logo text shows "ClassyAds" with "Ads" in the primary color
    And   navigation links are visible: Home, Ads, About, Blog, Contact
    And   a "Post an Ad" CTA button is visible with primary color background
    And   the navbar has a white background
    And   the navbar is responsive (collapses to hamburger on mobile)

  Scenario: Navbar links are functional
    Given the navbar is rendered
    When  a user clicks the "Home" link
    Then  the page scrolls to or navigates to the hero section
    When  a user clicks the "Post an Ad" button
    Then  the button is visually interactive (hover state)

  # --- Hero ---
  Scenario: Hero section displays correctly
    Given the hero section is rendered
    Then  a background image is visible with a dark overlay
    And   the headline reads "Largest Classifieds In The World"
    And   a search bar is present with text input, location input, and category dropdown
    And   a search button with primary color is visible

  Scenario: Hero search bar accepts input
    Given the hero section is rendered
    When  the user types in the search text input
    Then  the text appears in the input
    When  the user types in the location input
    Then  the text appears in the location input
    When  the user selects a category from the dropdown
    Then  the category is selected

  # --- Featured Ads ---
  Scenario: Featured Ads section displays ad cards
    Given the Featured Ads section is rendered
    Then  the section heading reads "Featured Ads"
    And   there are 8 ad listing cards displayed in a grid
    And   each card has an image, title, and is clickable

  Scenario: Featured Ads cards are interactive
    Given the Featured Ads section is rendered
    When  a user hovers over an ad card
    Then  the card shows a hover effect (elevation or opacity change)

  # --- Popular Products ---
  Scenario: Popular Products section displays products
    Given the Popular Products section is rendered
    Then  the section heading reads "Popular Products" in primary color
    And   there are 5 product items displayed
    And   each item has a large image and an h2 title link

  # --- Trending Today ---
  Scenario: Trending Today section displays listings
    Given the Trending Today section is rendered
    Then  the section heading reads "Trending Today" in primary color
    And   there are 6 listing cards displayed in a grid
    And   each card has an image and title

  # --- Testimonials ---
  Scenario: Testimonials section displays quotes
    Given the Testimonials section is rendered
    Then  the section heading reads "Testimonials" in primary color
    And   there are 4 testimonial cards displayed
    And   each card has a blockquote with text and a profile image

  # --- Blog ---
  Scenario: Blog section displays posts
    Given the Blog section is rendered
    Then  the section heading reads "Our Blog" in primary color
    And   there are 3 blog post cards displayed
    And   each card has an image, title, and excerpt

  # --- Newsletter ---
  Scenario: Newsletter section displays signup form
    Given the Newsletter section is rendered
    Then  the section has a primary color (teal) background
    And   the heading reads "Newsletter"
    And   an email input field is visible
    And   a submit button is present

  Scenario: Newsletter form accepts email
    Given the Newsletter section is rendered
    When  the user types an email into the input
    Then  the email text appears in the field

  # --- Footer ---
  Scenario: Footer displays columns and links
    Given the footer is rendered
    Then  the footer has a dark background (#333333)
    And   there are 3 columns: About, Navigations, Follow Us
    And   a copyright line is present at the bottom
    And   a "Component Dock" link is present (https://www.componentdock.com/)

  # --- Responsive ---
  Scenario: Template is responsive on mobile
    Given the app is rendered on a 375px wide viewport
    Then  the navbar collapses to a hamburger menu
    And   grid layouts stack to single-column
    And   the hero search form stacks vertically
    And   all content is readable without horizontal scroll

  # --- Design Fidelity ---
  Scenario: Design tokens match the ColorLib original
    Given the template is rendered
    Then  the primary color is #30e3ca (teal)
    And   the font family is "Nanum Gothic"
    And   section backgrounds alternate between white and #f4f5f9 (light gray)
    And   the newsletter section uses the primary teal as its background
    And   buttons have square border-radius (0) by default
    And   the hero has a dark overlay at 60% opacity

## Verification Checklist

- [ ] Navbar: logo with "Ads" in teal, nav links, "Post an Ad" CTA, responsive hamburger
- [ ] Hero: background image with 60% dark overlay, headline, 3-input search bar + button
- [ ] Featured Ads: bg-light, 8 cards in 4-col grid, images + titles
- [ ] Popular Products: white bg, 5 items, primary-colored headings
- [ ] Trending Today: bg-light, 6 cards, primary-colored heading
- [ ] Testimonials: white bg, 4 testimonial cards with blockquotes + images
- [ ] Our Blog: bg-light, 3 blog post cards with images + titles
- [ ] Newsletter: teal bg-primary, email form with white input
- [ ] Footer: dark #333333 bg, 3 columns (About, Navigations, Follow Us), Component Dock link
- [ ] Responsive: mobile hamburger, stacked grids, readable on 375px
- [ ] Design tokens: #30e3ca primary, Nanum Gothic font, alternating section bgs
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use https://picsum.photos/seed/adpick-<n>/<w>/<h>
- [ ] Public CNAME: adpick.free.componentdock.com
- [ ] Package name: @free-react-templates/adpick
- [ ] Tests: Vitest + Testing Library, 100% coverage
- [ ] Typecheck: TypeScript strict mode, no errors
- [ ] Lint: no errors

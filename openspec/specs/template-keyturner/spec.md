# Template: Keyturner (Real Estate Agent)

## Purpose

Recreation of ColorLib "Youragent" — a real estate agent single-page template
featuring property listings, agent bio, customer testimonials, and blog posts.

- **Source slug:** `youragent`
- **Preview URL:** https://preview.colorlib.com/theme/youragent/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `keyturner` (single lowercase word, not reused from ColorLib)

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#007bff` | Bootstrap blue — buttons, footer bg, links |
| Dark bg | `#1a1a1a` | Footer background, card accents |
| Body font | `"Mukta Mahee", sans-serif` | Body text, nav, card titles |
| Heading font | `"Playfair Display", serif` | Hero heading (80px bold), section headings |
| Heading color | `#fff` on hero, dark on light sections | |
| Button shape | `border-radius: 50px` (pill) | Padding: 10px 30px, uppercase, letter-spacing .2em |
| Button primary bg | `#007bff` | Hover: `#0056b3` |
| Button outline | transparent with white border | Hero CTA secondary button |
| Hero overlay | `rgba(0,0,0,0.15)` | Semi-transparent dark over background image |
| Section bg (alternate) | `#f8f9fa` (bg-light) | Blog section |
| Star rating | yellow stars (`.reviews-star`) | Property cards |
| Border radius (cards) | `9px` | Rounded corners on cards |

## Sections (in order)

1. **Navbar** — Sticky header: logo left, nav links right (About, Blog, Contact), contact info (address, email, phone). Background: white/dark.
2. **Hero** — Full-width background image with `rgba(0,0,0,0.15)` overlay. Heading: "I'm Your Realtor, Get Your Key" (Playfair Display, 80px, white). Subtext below. Two pill buttons: "Get In Touch" (primary) and "Download" (outline-light). Scroll-down arrow at bottom.
3. **Popular Properties** — Section heading "Popular Properties". Grid of 3 property cards, each with: image (rounded 9px), star rating row, property title. Cards in a responsive grid (lg-3 col-md-6).
4. **About Agent** — Two-column layout. Left: avatar image + "About Me" heading + bio text. Right: 3 feature cards (Deal On Time, Good Reviews, 24/7 Support) each with icon, title, description.
5. **Happy Customers** — Heading "Happy Customers". 3 testimonial cards with customer name, role/company, and quoted text. Horizontal layout.
6. **Recent Blog Posts** — Section with `bg-light` background. Heading "Recent Blog Post". 3 blog post cards with image, date, title, excerpt, "Read more" link.
7. **Footer** — Dark background (`#1a1a1a`). Newsletter signup form (input + submit). Three-column layout: About Us description, Quick Links, Contact Info (address, email, phone). Copyright bar with Component Dock attribution.

## Gherkin scenarios

```gherkin
Feature: Keyturner Real Estate Agent Template

  Background:
    Given the Keyturner template is loaded

  Scenario: Navbar renders with logo and navigation links
    Given the page loads
    Then the navbar displays a logo
    And the navbar shows links: About, Blog, Contact
    And contact info (address, email, phone) is visible
    And the navbar is sticky on scroll

  Scenario: Hero section displays with correct typography
    Given the page loads
    Then the hero has a background image with dark overlay
    And the heading reads "I'm Your Realtor, Get Your Key"
    And the heading uses Playfair Display font at large size
    And two CTA buttons are visible: "Get In Touch" and "Download"
    And the buttons are pill-shaped (border-radius 50px)
    And a scroll-down indicator is present

  Scenario: Popular Properties section shows property cards
    Given the page loads
    When I scroll to the properties section
    Then 3 property cards are displayed in a grid
    And each card has an image, star rating, and title
    And the cards have rounded corners

  Scenario: About Agent section with bio and features
    Given the page loads
    When I scroll to the about section
    Then an agent avatar and "About Me" heading are shown
    And 3 feature cards are displayed: Deal On Time, Good Reviews, 24/7 Support
    And each feature card has an icon, title, and description

  Scenario: Happy Customers testimonials section
    Given the page loads
    When I scroll to the testimonials section
    Then the heading reads "Happy Customers"
    And 3 testimonial cards are shown with customer quotes

  Scenario: Recent Blog Posts section
    Given the page loads
    When I scroll to the blog section
    Then the heading reads "Recent Blog Post"
    And 3 blog post cards are displayed
    And each card has an image, title, and excerpt
    And the section has a light background

  Scenario: Footer with newsletter and contact
    Given the page loads
    When I scroll to the footer
    Then a newsletter signup form is visible
    And the footer has a dark background (#1a1a1a)
    And the footer contains About Us, Quick Links, and Contact Info columns
    And the copyright line links to Component Dock

  Scenario: Responsive layout on mobile
    Given the page loads on a viewport width of 375px
    Then the navbar collapses to a hamburger menu
    And the hero heading scales down to ~40px
    And property cards stack vertically
    And blog cards stack vertically
```

## Verification checklist

- [ ] Navbar: sticky, logo, nav links, contact info, hamburger on mobile
- [ ] Hero: bg image, dark overlay, heading (Playfair Display), two pill CTAs, scroll arrow
- [ ] Properties: heading, 3 cards in responsive grid, images, star ratings, titles
- [ ] About: avatar, bio text, 3 feature cards with icons
- [ ] Testimonials: heading, 3 customer quote cards
- [ ] Blog: light bg, heading, 3 post cards with images/excerpts
- [ ] Footer: dark bg (#1a1a1a), newsletter form, 3-column layout, copyright with Component Dock link
- [ ] Design tokens: #007bff primary, Playfair Display headings, Mukta Mahee body, pill buttons
- [ ] No ColorLib references in app code — provenance only in spec
- [ ] Placeholder images via picsum.photos/seed/keyturner-*
- [ ] Footer links to componentdock.com

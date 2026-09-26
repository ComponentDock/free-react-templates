# Template: Fotolens (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Fotograp" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `fotograp`
- **Source URL:** https://colorlib.com/wp/template/fotograp/
- **Preview URL:** https://preview.colorlib.com/theme/fotograp/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fotograp-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/fotolens`
- **Surge target:** `fotolens.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/fotograp/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#dc3545` (Bootstrap danger) | CTA buttons, accent |
| Dark bg | `#000000` | Body background |
| Dark alt | `#333333` | Testimonial section bg |
| White bg | `#FFFFFF` | Main content sections |
| Body text | `#4d4d4d` | Primary text on light backgrounds |
| Muted text | `#737373` / `#999999` | Secondary text |
| White text | `#FFFFFF` | On dark backgrounds |
| Font primary | `Josefin Sans`, sans-serif | All text (headings, body, nav) |
| Font icon | `icomoon` / `flaticon` | Icon fonts |
| Button shape | Square (border-radius: 0) | All CTA buttons |
| Button primary | `#dc3545` bg, white text | "Contact Me" CTA |
| Hero overlay | `rgba(0,0,0,0.6)` | Dark overlay on hero/parallax |
| Section heading | Underline decoration (after pseudo-element) | Section titles |
| Gallery overlay | Gradient dark overlay | Photo hover state |
| Testimonial bg | Parallax image with overlay | Testimonial section |

## Section Structure (in page order)

### 1. Navbar
- Logo: "fotolens" text (black, with red dot accent)
- Navigation links: Home, Photography (dropdown: Nature, Portrait, Wedding, Sub Menu), Services, About, Contact
- Social icons on right: Facebook, Twitter, Instagram, YouTube
- Hamburger menu on mobile (offcanvas)
- White background with bottom border

### 2. Hero
- Full-width parallax background image with dark overlay (`rgba(0,0,0,0.6)`)
- Centered heading: "I'm Ben Botsford a Professional Photographer Live in Oakland"
- Full viewport height

### 3. Specialties
- White background
- Section heading: "My Specialties" (centered, with underline decoration)
- 4 specialty items in a 2-column grid
- Each item: background image (left) + text content (right) in horizontal layout
- Specialties: Nature Photography, Portrait Photography, Wedding Photography, Food & Drink Photography
- Each has heading + description paragraph

### 4. Testimonials
- Parallax background image with dark overlay
- OwlCarousel slider with testimonials
- Each testimonial: circular photo, blockquote text, name with em-dash
- Testimonial: Marrygrace Woodland

### 5. Photography Gallery
- White background with bottom border
- Section heading: "My Photography" (centered)
- 6 project cards in a 3-column grid (col-lg-4)
- Each card: image with gradient overlay on hover + title + category ("5 photos / Nature")
- Projects: Autumn Leaf, Sea Creatures, Enjoying Deep Sea, Beautiful Beach, Laughter is Science, Knot Tying
- AOS fade-up animations with staggered delays

### 6. CTA
- White background
- Two-column layout: "Need a photographer?" heading (left) + "Contact Me" button (right)
- Button: Bootstrap danger (`#dc3545`), square (no border-radius), large padding

### 7. Footer
- Dark background
- 3-column layout:
  - Left: "About Fotolens" heading + description
  - Center: "Navigations" heading + 2-column link list (Home, Photography, Gallery, Services, About Me, Privacy Policy, Contact Me, Terms)
  - Right: "Follow Me" heading + social icon links (Facebook, Twitter, Instagram, LinkedIn)
- Copyright with "Component Dock" link (replacing Colorlib attribution)

## Gherkin Requirements

```gherkin
Feature: Fotolens — Photography Portfolio Template

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo "fotolens" with red dot is visible
    And navigation links "Home", "Photography", "Services", "About", "Contact" are visible
    And social icons (Facebook, Twitter, Instagram, YouTube) are visible on the right
    And on mobile viewports a hamburger menu button is visible

  Scenario: Hero displays with parallax
    Given the hero section is in the viewport
    Then a full-width parallax background image with dark overlay is visible
    And the heading about a professional photographer is displayed

  Scenario: Specialties section shows 4 items
    Given the specialties section is scrolled into view
    Then the heading "My Specialties" with underline decoration is visible
    And 4 specialty items are displayed in a 2-column grid
    And each item has a background image and text (heading + description)

  Scenario: Testimonials carousel works
    Given the testimonials section is scrolled into view
    Then a parallax background image is visible
    And a carousel with at least one testimonial is shown
    And each testimonial has a photo, quote, and name

  Scenario: Photography gallery shows 6 items
    Given the photography gallery section is scrolled into view
    Then the heading "My Photography" is visible
    And 6 project cards are displayed in a 3-column grid
    And each card has an image, title, and category tag
    And hovering a card reveals a gradient overlay

  Scenario: CTA section renders
    Given the CTA section is scrolled into view
    Then the heading "Need a photographer?" is visible
    And a "Contact Me" red button is visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then "About Fotolens" section with description is visible
    And "Navigations" with link lists is visible
    And "Follow Me" social icons are visible
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And specialty/gallery columns stack vertically
    And the CTA section stacks vertically
```

## Verification Checklist

- [ ] All 7 sections render in correct page order
- [ ] Brand color `#dc3545` used for CTA button
- [ ] Josefin Sans font loaded for all text
- [ ] Hero with parallax bg and dark overlay
- [ ] Specialties section with 4 items in 2-col grid
- [ ] Testimonials carousel with parallax bg
- [ ] Photography gallery with 6 cards in 3-col grid
- [ ] CTA section with heading + red button
- [ ] Footer with About, Navigations, Social sections
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Square buttons (no border-radius) for CTAs
- [ ] Placeholder images via `picsum.photos/seed/fotolens-<n>/...`

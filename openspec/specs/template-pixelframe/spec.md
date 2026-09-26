# Template: Pixelframe (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Bitmap" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `bitmap`
- **Source URL:** https://colorlib.com/wp/template/bitmap/
- **Preview URL:** https://preview.colorlib.com/theme/bitmap/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bitmap-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/pixelframe`
- **Surge target:** `pixelframe.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/bitmap/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#04091e` | Theme button background (dark navy) |
| Brand accent | `#fcdc00` | Yellow accent, highlights |
| White bg | `#FFFFFF` | Main content backgrounds |
| Body text | `#222222` | Primary text on light backgrounds |
| Muted text | `#777777` | Secondary/muted text |
| White text | `#FFFFFF` | On dark backgrounds |
| Font primary | `Poppins`, sans-serif | All text (headings, body, nav) |
| Font icon | `linericon` / `font-awesome` | Icon fonts |
| Button shape | Square (border-radius: 0px) | All CTA buttons |
| Button primary bg | `#04091e` | Dark navy CTA buttons |
| Button text | `#FFFFFF` | White on dark buttons |
| Hero overlay | `rgba(0,0,0,0.5)` | Dark overlay on hero banner |
| Gallery hover | Dark overlay with white text | Image hover state |
| Section padding | `p_120` (120px vertical) | Consistent section spacing |
| Border color | `#eeeeee` | Light borders/separators |

## Section Structure (in page order)

### 1. Navbar
- Logo image (left-aligned)
- Navigation links: Home, Gallery, Services, About, Elements, Blog (dropdown: Blog, Blog Details), Contact
- Search icon (magnifier) on right
- Hamburger toggler on mobile
- White background, light navbar style

### 2. Hero Banner
- Full-width parallax background image with dark overlay (`rgba(0,0,0,0.5)`)
- Centered content: "Bitmap Photography" heading, subtitle paragraph
- "Explore Gallery" button (dark navy `#04091e`, square, no border-radius)
- Vertically centered with flexbox

### 3. Gallery
- White background with section padding
- Isotope filter bar: All, Approved, Unapproved, Unviewed (tab-style filters)
- 6 gallery items in a 4-column grid (col-lg-3)
- Each item: image with dark overlay on hover showing title ("Spreading Peace to world") + expand icon (FontAwesome)
- Filterable by category classes (ap, unp, unv)
- Lightbox integration on expand icon click

### 4. Services
- White background with section padding
- Section heading: "Why we are the best" + subtitle "Who are in extremely love with eco friendly system."
- 6 service cards in a 3-column × 2-row grid
- Each card: linked heading + description paragraph
- Services: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recomended, Positive Reviews
- Clean minimal card style, no icons

### 5. Instagram
- Full-width section with Instagram-style image strip
- "Follow us on instagram" button (dark navy, centered)
- 6 Instagram images in a horizontal row (full-width, no gaps)
- Images link to Instagram (placeholder)

### 6. Footer
- White background with section padding
- 3-column layout:
  - Left (5 cols): "About Me" heading + description + copyright with "Component Dock" link
  - Center (5 cols): "Newsletter" heading + email subscription form (input + arrow button)
  - Right (2 cols): "Follow Me" heading + social icon list (Facebook, Twitter, Dribbble, Behance)

## Gherkin Requirements

```gherkin
Feature: Pixelframe — Photography Portfolio Template

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo image is visible in the top-left
    And navigation links "Home", "Gallery", "Services", "About", "Elements", "Blog", "Contact" are visible
    And a search icon is visible on the right
    And on mobile viewports a hamburger toggler is visible

  Scenario: Hero banner displays with parallax
    Given the hero section is in the viewport
    Then a full-width parallax background image with dark overlay is visible
    And the heading "Bitmap Photography" is displayed (replaced with "Pixelframe Photography")
    And a "Explore Gallery" dark navy button is visible

  Scenario: Gallery section shows filterable items
    Given the gallery section is scrolled into view
    Then filter tabs "All", "Approved", "Unapproved", "Unviewed" are visible
    And 6 gallery items are displayed in a 4-column grid
    And each item shows an image with hover overlay (title + expand icon)
    And clicking a filter tab shows/hides items by category

  Scenario: Gallery lightbox opens on expand click
    Given the gallery section is visible
    When the user clicks the expand icon on a gallery item
    Then a lightbox overlay opens showing the full-size image

  Scenario: Services section shows 6 items
    Given the services section is scrolled into view
    Then the heading "Why we are the best" is visible
    And 6 service cards are displayed in a 3-column grid
    And each card has a heading and description paragraph

  Scenario: Instagram section shows image strip
    Given the instagram section is scrolled into view
    Then a "Follow us on instagram" button is visible
    And 6 images are displayed in a horizontal row

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then "About Me" section with description is visible
    And a "Newsletter" subscription form with email input is visible
    And "Follow Me" social icons (Facebook, Twitter, Dribbble, Behance) are visible
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And gallery/service columns stack vertically
    And the instagram strip remains accessible

  Scenario: Search icon is interactive
    Given the navbar is visible
    When the user clicks the search icon
    Then a search input or overlay appears
```

## Verification Checklist

- [ ] All 6 sections render in correct page order
- [ ] Brand color `#04091e` used for CTA buttons
- [ ] Yellow accent `#fcdc00` used for highlights
- [ ] Poppins font loaded for all text
- [ ] Hero with parallax background and dark overlay
- [ ] Gallery with isotope filter tabs and 6 items
- [ ] Gallery hover overlays with title + expand icon
- [ ] Services section with 6 cards in 3-column grid
- [ ] Instagram image strip with 6 images
- [ ] Footer with About, Newsletter, Social sections
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Square buttons (no border-radius) for CTAs
- [ ] Placeholder images via `picsum.photos/seed/pixelframe-<n>/...`

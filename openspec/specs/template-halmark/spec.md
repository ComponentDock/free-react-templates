# Template: Halmark (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Halen" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `halen`
- **Source URL:** https://colorlib.com/wp/template/halen/
- **Preview URL:** https://preview.colorlib.com/theme/halen/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/halen-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/halmark`
- **Surge target:** `halmark.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/halen/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#444444` | Button backgrounds, dark sections |
| Dark bg | `#2C2C2C` | Footer background |
| Body text | `#1F1F1F` | Primary text on light backgrounds |
| Body alt | `#4D4D4D` | Secondary body text |
| Muted text | `#7e7e7e` | Tertiary/muted text |
| Light text | `#cccccc` | On dark backgrounds |
| White text | `#FFFFFF` | On dark backgrounds |
| Font primary | `Poppins`, sans-serif | All text (headings, body, nav) |
| Font icon | `FontAwesome` / `themify-icons` | Icon fonts |
| Button shape | Square (border-radius: 0px) | CTA buttons (`.boxed-btn3`) |
| Button primary | `#444444` bg, white text | "Explore Work" CTA |
| Button hover | Darker shade | Hover state |
| Hero overlay | Black overlay class | Dark overlay on slider images |
| Gallery hover | Dark overlay with centered text | Photo hover state |
| Testimonial bg | White/light | Testimonial section |
| Contact map | Google Maps embed | Right side of contact |
| Team social | Circle icon buttons | Team member social links |

## Section Structure (in page order)

### 1. Navbar
- Logo image (left-aligned)
- Navigation links: Home, About, Albums, Blog (dropdown: blog, single-blog), Pages (dropdown: elements), Contact
- Social icons on right: Facebook, Twitter, Instagram
- Sticky on scroll
- Hamburger menu on mobile (slicknav)

### 2. Hero Slider
- Full-width OwlCarousel with 3 slides
- Each slide: parallax background image with black overlay
- Content: "Hi, This is Halen, a professional Photographer" heading
- "Explore Work" button (square, dark bg, white text)
- Slider navigation arrows

### 3. Photography Skills
- White background
- Section heading: "World class photography skills" + description paragraph
- Signature image below text

### 4. Wildlife Photography
- Full-width split layout (50/50)
- Left: wildlife photo (zebra image)
- Right: "Wildlife photography" heading + description + "Explore Work" button (black, square)

### 5. Gallery
- White background
- Section heading: "My world class photography" + description
- 6 gallery items in a 3-column grid (col-xl-4, full-width no-gutters)
- Each item: image + dark overlay on hover with title + category ("Photography / Baby")
- All items labeled "Baby album"

### 6. Testimonials
- White background
- OwlCarousel with 3 testimonials
- Each: "Our Customers Say" heading + blockquote text + circular author photo + name
- Author: Robert Thomson

### 7. Team
- White background with border-bottom
- 3 team member cards in a 3-column grid
- Each: photo (full-width) + name + title ("Photographer") + social icons (Facebook, Twitter, Instagram)
- Team: Milani Mou, Jasmine Pinky, (third member)

### 8. Contact
- Two-column layout:
  - Left (5 cols): "Contact Us" heading + description + address info (address, phone, email) + social icons (Facebook, Twitter, Instagram)
  - Right (7 cols): Google Maps embed (500px height)

### 9. Footer
- Dark background (`#2C2C2C`)
- Copyright text with "Component Dock" link
- Social icons on right: Facebook, Twitter, Instagram

## Gherkin Requirements

```gherkin
Feature: Halmark — Photography Portfolio Template

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo image is visible in the top-left
    And navigation links "Home", "About", "Albums", "Blog", "Pages", "Contact" are visible
    And social icons (Facebook, Twitter, Instagram) are visible on the right
    And the navbar becomes sticky on scroll
    And on mobile viewports a hamburger menu is visible

  Scenario: Hero slider displays
    Given the hero section is in the viewport
    Then a full-width slider with parallax background images is visible
    And the heading about a professional photographer is displayed
    And an "Explore Work" square button is visible
    And slider navigation arrows are present

  Scenario: Photography Skills section renders
    Given the photography skills section is scrolled into view
    Then the heading "World class photography skills" is visible
    And a description paragraph is shown
    And a signature image is displayed

  Scenario: Wildlife Photography section renders
    Given the wildlife photography section is scrolled into view
    Then a wildlife photo is displayed on the left
    And "Wildlife photography" heading with description is on the right
    And an "Explore Work" black button is visible

  Scenario: Gallery shows 6 items
    Given the gallery section is scrolled into view
    Then the heading "My world class photography" is visible
    And 6 gallery items are displayed in a 3-column grid
    And each item has an image with hover overlay (title + category)

  Scenario: Testimonials carousel works
    Given the testimonials section is scrolled into view
    Then a carousel with 3 testimonials is displayed
    And each testimonial has a heading, quote, author photo, and name

  Scenario: Team section shows 3 members
    Given the team section is scrolled into view
    Then 3 team member cards are displayed in a 3-column grid
    And each card has a photo, name, title, and social icons

  Scenario: Contact section renders
    Given the contact section is scrolled into view
    Then "Contact Us" heading with address info is visible on the left
    And a map area is displayed on the right
    And social icons are visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then a dark background is displayed
    And a copyright notice with "Component Dock" link is present
    And social icons are visible

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And gallery/team columns stack vertically
    And the contact section stacks vertically
```

## Verification Checklist

- [ ] All 9 sections render in correct page order
- [ ] Brand color `#444444` used for CTA buttons
- [ ] Poppins font loaded for all text
- [ ] Hero slider with 3 slides and parallax backgrounds
- [ ] Photography Skills section with heading + signature
- [ ] Wildlife Photography split layout
- [ ] Gallery with 6 items in 3-col grid + hover overlays
- [ ] Testimonials carousel with 3 items
- [ ] Team section with 3 members + social icons
- [ ] Contact section with address info + map area
- [ ] Footer with copyright + social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Square buttons (no border-radius) for CTAs
- [ ] Placeholder images via `picsum.photos/seed/halmark-<n>/...`

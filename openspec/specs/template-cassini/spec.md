# Template: Cassini (Photography Studio)

## Purpose

Recreation of the ColorLib "Cassi" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `cassi`
- **Source URL:** https://colorlib.com/wp/template/cassi/
- **Preview URL:** https://preview.colorlib.com/theme/cassi/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cassi-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/cassini`
- **Surge target:** `cassini.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/cassi/

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent | `#242deb` | Blue accent color, category tags |
| Dark bg | `#151515` | Body background, footer background |
| Body text | `#333333` | Primary text on light backgrounds |
| Muted text | `#bfbfbf` | Secondary/muted text |
| White text | `#FFFFFF` | On dark backgrounds, hero text |
| Font primary | `Poppins`, sans-serif | All UI text, headings |
| Font secondary | `Roboto`, sans-serif | Footer copyright text |
| Button shape | Nearly square (border-radius: 2px) | CTA buttons |
| Hero nav buttons | White border, white text, border-radius: 1px | Slider prev/next arrows |
| Hero overlay | Dark gradient/overlay on slider images | Hero background treatment |
| Preloader | Spinner animation on dark bg | Page loading state |

## Section Structure (in page order)

### 1. Preloader
- Full-screen dark overlay with spinner animation
- Hides after page load

### 2. Header
- Logo image (left-aligned)
- Hamburger menu icon (right-aligned, `icon_menu`)
- Minimal header — no visible nav links (offcanvas only)
- Transparent/overlay on hero

### 3. Hero Slider
- Full-width OwlCarousel with 3 slides
- Each slide: full-screen background image + dark overlay
- Content: category tag ("Nature" in blue accent), heading "Photo Studio", description paragraph, "See More" button with arrow icon
- Slider navigation: prev/next arrows (white border, white text)
- Dot indicators (custom, white circles)
- All 3 slides have identical text content, different background images

### 4. Footer
- Dark background (`#151515`)
- Social text links: Facebook, Twitter, Instagram (centered)
- Copyright text with "Component Dock" link (replacing Colorlib attribution)

## Gherkin Requirements

```gherkin
Feature: Cassini — Photography Studio Template

  Scenario: Preloader displays on page load
    Given the page is loading
    Then a full-screen dark overlay with spinner is visible
    And the preloader hides after content loads

  Scenario: Header renders correctly
    Given the user is on any viewport
    Then the logo image is visible in the top-left
    And a hamburger menu icon is visible on the right
    And clicking the hamburger opens the offcanvas menu

  Scenario: Offcanvas menu opens on mobile
    Given the user is on a mobile viewport
    When the user clicks the hamburger menu icon
    Then an offcanvas menu slides in from the right
    And navigation links "Home", "Gallery", "Blog", "About", "Contact" are visible
    And social links (Facebook, Twitter, Instagram) are visible in the menu footer

  Scenario: Hero slider displays with parallax
    Given the hero section is in the viewport
    Then a full-width slider with background images is visible
    And the category tag "Nature" is displayed in blue accent
    And the heading "Photo Studio" is displayed
    And a "See More" button with arrow icon is visible
    And prev/next navigation arrows are present

  Scenario: Hero slider advances slides
    Given the hero slider is showing slide 1
    When the user clicks the next arrow
    Then slide 2 is displayed with its background image
    And the content (category, heading, description) remains visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then a dark background (#151515) is displayed
    And social text links (Facebook, Twitter, Instagram) are visible
    And a copyright notice with "Component Dock" link is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the header shows hamburger menu only
    And the offcanvas menu is accessible
    And the hero slider remains full-width
```

## Verification Checklist

- [ ] All sections render in correct page order (preloader, header, hero, footer)
- [ ] Brand accent color `#242deb` used for category tags
- [ ] Poppins font loaded for all UI text
- [ ] Dark body background (#151515)
- [ ] Preloader spinner displays and hides on load
- [ ] Header with logo + hamburger icon
- [ ] Offcanvas mobile menu with nav links + social links
- [ ] Hero slider with 3 slides and background images
- [ ] Category tag, heading, description, and CTA on each slide
- [ ] Slider navigation arrows (white border, white text)
- [ ] Footer with social links + copyright
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: offcanvas menu on mobile
- [ ] Placeholder images via `picsum.photos/seed/cassini-<n>/...`

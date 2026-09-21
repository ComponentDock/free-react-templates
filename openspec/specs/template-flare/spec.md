# Template: Flare (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Photon" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `photon`
- **Source URL:** https://colorlib.com/wp/template/photon/
- **Preview URL:** https://preview.colorlib.com/theme/photon/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/flare`
- **Surge target:** `flare.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/photon/

| Token | Value | Usage |
|-------|-------|-------|
| Body bg | `#ffffff` | Page background |
| Body text | `#212529` | Default body copy |
| Link color | `#20c997` | Bootstrap teal accent |
| Link hover | `#1aa179` | Teal hover state |
| White text | `#ffffff` | On dark image overlays, navbar |
| Black text | `#000000` | Logo text, headings |
| Overlay dark | `rgba(0,0,0,0.4)` | Image hover overlay |
| Nav arrow bg | `rgba(0,0,0,0.6)` | Carousel prev/next buttons |
| Font headings | `Josefin Sans`, sans-serif | All headings (h1–h6), nav, body |
| Font body | `Josefin Sans`, sans-serif | Body copy, buttons, nav links |
| Button shape | Rectangle (no border-radius visible) | `.btn-outline-white` |
| Button border | `2px solid #fff` | Carousel "More Photos" buttons |
| Button text | `#fff` uppercase, letter-spacing: 0.1em, font-size: 11px | "More Photos" CTA |
| Button hover | `bg: #fff, color: #000` | Carousel button hover |
| Carousel height | `calc(100vh - 192px)` | Full viewport minus navbar |
| Carousel pagination | Swiper pagination dots | Bottom of carousel |
| Carousel nav arrows | Swiper prev/next with dark bg pill | Left/right carousel control |

## Section Structure (in page order)

### 1. Navbar
- Logo text "Flare" (left-aligned, black text, h2-sized)
- Navigation links: Home, Gallery (dropdown with categories), Services, Blog, About, Reviews, Contact
- Gallery dropdown: Nature, Portrait, People, Architecture, Animals, Sports, Travel, Sub Menu (with nested items)
- Social icons: Facebook, Twitter, Instagram, YouTube (right side, white on transparent bg)
- Hamburger menu on mobile (icon-menu)
- Transparent background (no white bg by default)
- Bootstrap container-fluid layout

### 2. Full-Viewport Image Carousel (Swiper)
- Full-width Swiper carousel taking viewport height minus navbar
- 7 slides, each with:
  - Full-cover background image (object-fit: cover)
  - Dark overlay on hover (rgba(0,0,0,0.4))
  - Centered white text: category name (h2) + "More Photos" button
- Categories: Nature, Portrait, People, Architecture, Animals, Sports, Travel
- Each slide: full-bleed image, centered text overlay with category heading + CTA button
- Swiper pagination dots at bottom
- Prev/next navigation arrows (dark bg pills, white icon, positioned left/right)
- AOS fade-in animation on load

### 3. Footer
- Simple single-line footer
- Copyright text with current year
- "Made with ❤ by Colorlib" replaced with Component Dock link
- No multi-column layout — minimal single-row footer
- White background, centered text

## Gherkin Requirements

```gherkin
Feature: Flare — Photography Portfolio Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Flare"
    And the Component Dock footer link is visible

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo "Flare" is visible in the top-left
    And navigation links "Home", "Gallery", "Services", "Blog", "About", "Reviews", "Contact" are visible
    And social icons (Facebook, Twitter, Instagram, YouTube) are visible on the right
    And on mobile viewports a hamburger menu button is visible

  Scenario: Gallery dropdown shows categories
    Given the user hovers over or clicks "Gallery" in the navbar
    Then a dropdown menu appears with categories: Nature, Portrait, People, Architecture, Animals, Sports, Travel
    And each category item is clickable

  Scenario: Full-viewport carousel displays correctly
    Given the carousel section is in the viewport
    Then a full-width Swiper carousel is visible
    And the carousel height fills the viewport minus the navbar
    And at least 7 slides are present
    And each slide has a category name heading and a "More Photos" button
    And the first slide's image is visible with overlay text

  Scenario: Carousel navigation works
    Given the carousel is displayed
    Then prev/next arrow buttons are visible on left and right sides
    And pagination dots are visible at the bottom
    When the user clicks the next arrow
    Then the carousel advances to the next slide
    When the user clicks the previous arrow
    Then the carousel returns to the previous slide

  Scenario: Carousel button hover effect
    Given a carousel slide is displayed
    Then the "More Photos" button has white text and white border on transparent background
    When the user hovers over the button
    Then the button background becomes white and text becomes black

  Scenario: Image hover overlay effect
    Given a carousel slide image is displayed
    When the user hovers over the image area
    Then a dark semi-transparent overlay appears over the image

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then a copyright line with the current year is visible
    And a link to "https://www.componentdock.com/" is present
    And no other attribution links are visible

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And the carousel still fills the viewport
    And social icons are hidden on mobile
    And the footer remains single-line and centered

  Scenario: No ColorLib references in app code
    Given the template source code is inspected
    Then no file contains "colorlib.com" or "preview.colorlib.com"
    And the provenance is only in the spec and TEMPLATES.md
```

## Verification Checklist

- [ ] All 3 sections render in correct page order (Navbar → Carousel → Footer)
- [ ] Navbar with logo "Flare", 7 nav links, Gallery dropdown, social icons
- [ ] Gallery dropdown shows 7 categories + Sub Menu nested items
- [ ] Full-viewport Swiper carousel with 7 category slides
- [ ] Each slide has centered white text (category heading + "More Photos" button)
- [ ] Carousel prev/next arrows with dark bg pills
- [ ] Carousel pagination dots at bottom
- [ ] Button style: white border, white text, uppercase, letter-spacing, font-size 11px
- [ ] Button hover: bg white, text black
- [ ] Image hover dark overlay effect
- [ ] Simple footer with copyright + Component Dock link
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Josefin Sans font loaded (weights 400, 700)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, carousel still fills viewport
- [ ] Placeholder images via `picsum.photos/seed/flare-<n>/...`
- [ ] AOS fade-in animation on carousel load

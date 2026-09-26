# Template: Fotocast (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Fotograp" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `fotograp`
- **Source URL:** https://colorlib.com/wp/template/fotograp/
- **Preview URL:** https://preview.colorlib.com/theme/fotograp/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fotograp-free-photographer-website-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/fotocast`
- **Surge target:** `fotocast.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/fotograp/

| Token | Value | Usage |
|-------|-------|-------|
| Primary/accent | `#7971ea` | Purple/lavender — active nav links, dropdown border-top, link hover, form focus |
| Body text | `#4d4d4d` | Default paragraph text |
| Headings | `#000000` | h1–h6, section headings |
| Body bg | `#ffffff` | White page background |
| Footer bg | `#333333` | Dark footer background |
| Footer text | `#737373` | Footer paragraph text |
| Footer links | `#999999` | Footer anchor text, hover → `#ffffff` |
| Footer headings | `#ffffff` | h3 inside footer |
| Selection | `#000` bg / `#fff` text | Text highlight color |
| Hero overlay | `rgba(0,0,0,0.4)` | Dark overlay on hero background image |
| Section underline | `#000`, 100px × 1px | Decorative line under section headings |
| Font primary | `Josefin Sans`, sans-serif | Headings, nav, UI |
| Font body | System stack (Bootstrap default) | Body paragraphs, font-weight: 300 |
| Button shape | `border-radius: 0` (square corners) | All buttons |
| CTA button | `.btn-danger` (red) | "Contact Me" button |
| Dropdown border | `2px solid #7971ea` | Top border of nav dropdown menus |
| Mobile menu | White bg, 300px wide, slides from right | Offcanvas mobile nav |
| Card borders | `1px solid #edf0f5` | Light border on sections |

## Section Structure (in page order)

### 1. Header / Navbar
- Logo text "fotocast." with accent-colored period (`.text-primary`)
- Desktop nav links: Home, Photography (dropdown with Nature, Portrait, Wedding, Sub Menu), Services, About, Contact
- Social icons right-aligned: Facebook, Twitter, Instagram, YouTube (icomoon icons)
- Mobile hamburger icon (slides in offcanvas menu from right)
- White background, sticky/relative positioning

### 2. Hero / Cover
- Full-width background image with dark overlay (40% opacity)
- Centered heading: "I'm Ben Botsford a Professional Photographer Live in Oakland"
- Min-height: 600px (desktop: calc(100vh - 73px), inner page: calc(30vh))
- AOS fade-up animation

### 3. Profile Picture
- Small profile photo centered below hero
- AOS fade animation with delay

### 4. My Specialties
- Section heading "My Specialties" with centered underline
- 2×2 grid layout (col-md-6):
  - Nature Photography (image left, text right)
  - Wedding Photography (image left, text right)
  - Portrait Photography (image left, text right)
  - Food & Drink Photography (image left, text right)
- Each item: half-width image + half-width text (title + description)
- AOS fade-up animations with staggered delays

### 5. Testimonials
- Background image with parallax (stellar) effect
- Owl Carousel with 3 testimonial cards
- Each card: circular/square portrait photo, quote text, author name (em dash prefix)
- Authors: Marrygrace Woodland, Jean Doe, Ben Smith

### 6. My Photography (Gallery)
- Section heading "My Photography"
- 3-column grid (col-md-6 col-lg-4) of 6 photo albums
- Each album: image with gradient overlay on hover, title, category count ("5 photos / Nature")
- Albums: Autumn Leaf, Sea Creatures, Enjoying Deep Sea, Beautiful Beach, Laughter is Science, Knot Tying
- AOS fade-up with staggered delays

### 7. CTA Section
- "Need a photographer?" heading (left-aligned)
- "Contact Me" button (red .btn-danger, rounded padding, right-aligned)
- Flex layout, responsive centering

### 8. Footer
- Dark background (#333333)
- 3-column layout:
  - Column 1: "About Fotocast" heading + description paragraph
  - Column 2: "Navigations" heading + two sub-columns of links (Home, Photography, Gallery, Services / About Me, Privacy Policy, Contact Me, Terms)
  - Column 3: "Follow Me" heading + social icon links (Facebook, Twitter, Instagram, LinkedIn)
- Copyright line: "Copyright © [year] All rights reserved | Made with ♥ by Component Dock"

## Gherkin Requirements

```gherkin
Feature: Fotocast — Photography Portfolio Template

  Scenario: Header renders correctly on desktop
    Given the user is on a desktop viewport (>= 1200px)
    Then the logo "fotocast." is visible in the top-left
    And the navigation links "Home", "Photography", "Services", "About", "Contact" are visible
    And social icons (Facebook, Twitter, Instagram, YouTube) are visible on the right

  Scenario: Header renders correctly on mobile
    Given the user is on a mobile viewport (< 1200px)
    Then the logo "fotocast." is visible
    And a hamburger menu icon is visible
    And the desktop nav links are hidden

  Scenario: Mobile menu opens on hamburger click
    Given the user is on a mobile viewport
    When the user clicks the hamburger menu icon
    Then an offcanvas menu slides in from the right
    And navigation links are visible in the mobile menu
    And a close button is visible

  Scenario: Mobile menu closes on close click
    Given the mobile menu is open
    When the user clicks the close button
    Then the mobile menu slides out

  Scenario: Hero section displays correctly
    Given the user is on any viewport
    Then a full-width hero background image is displayed
    And a dark overlay covers the hero image
    And the heading "I'm Ben Botsford a Professional Photographer" is visible
    And the heading is centered on the image

  Scenario: Profile picture is displayed below hero
    Given the hero section is rendered
    Then a profile picture is visible below the hero
    And the picture is centered

  Scenario: Specialties section shows 4 photography types
    Given the user scrolls to the My Specialties section
    Then the heading "My Specialties" is visible with an underline
    And 4 specialty cards are displayed in a 2×2 grid
    And each card has an image and a title with description
    And the specialties are "Nature Photography", "Portrait Photography", "Wedding Photography", "Food & Drink Photography"

  Scenario: Testimonials carousel works
    Given the user scrolls to the testimonials section
    Then a background image with parallax effect is visible
    And a carousel of testimonial cards is displayed
    And each card shows a photo, quote, and author name
    And the user can navigate between testimonials

  Scenario: Photography gallery shows 6 albums
    Given the user scrolls to the My Photography section
    Then the heading "My Photography" is visible
    And 6 photo album cards are displayed in a 3-column grid
    And each card shows an image, title, and category info
    And hovering over a card shows a gradient overlay

  Scenario: CTA section displays correctly
    Given the user scrolls to the CTA section
    Then "Need a photographer?" text is visible on the left
    And a "Contact Me" button is visible on the right
    And the button is styled as a red danger button with square corners

  Scenario: Footer renders correctly
    Given the user scrolls to the footer
    Then the footer has a dark background
    And three columns are visible: About, Navigations, Follow Me
    And social icon links are present
    And a copyright line with "Component Dock" link is visible

  Scenario: Navigation dropdown works on desktop
    Given the user is on a desktop viewport
    When the user hovers over "Photography" in the nav
    Then a dropdown menu appears with "Nature", "Portrait", "Wedding" options
    And the dropdown has a purple top border

  Scenario: Section animations trigger on scroll
    Given the user scrolls down the page
    Then elements animate into view using AOS (fade-up)
    And animations have staggered delays for grouped items
```

## Verification Checklist

- [ ] Logo renders with accent-colored period
- [ ] Desktop nav shows all links with correct dropdown behavior
- [ ] Mobile hamburger toggles offcanvas menu
- [ ] Hero section fills viewport with background image + dark overlay
- [ ] Profile picture renders below hero
- [ ] Specialties grid displays 4 items in 2×2 layout
- [ ] Testimonials carousel scrolls through 3 cards
- [ ] Photography gallery shows 6 albums in 3-column grid
- [ ] CTA section has heading + red button
- [ ] Footer has 3 columns with correct content
- [ ] Footer copyright links to Component Dock
- [ ] AOS animations trigger on scroll
- [ ] All interactive elements are accessible (keyboard, screen reader)
- [ ] Responsive layout works at all breakpoints
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)

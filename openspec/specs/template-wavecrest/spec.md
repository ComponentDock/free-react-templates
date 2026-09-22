# Template: Wavecrest (Beach Hotel / Resort)

## Purpose

Recreation of ColorLib's **Major** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source slug:** `major`
- **ColorLib page:** https://colorlib.com/wp/template/major/
- **Live preview:** https://preview.colorlib.com/theme/major/
- **New name:** `wavecrest` (package `@free-react-templates/wavecrest`)
- **Surge target:** `wavecrest.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#da8661` | Warm terracotta/coral — button backgrounds, CTA accents |
| `--brand-dark` | `#0b1423` | Very dark navy — hero background, dark sections |
| `--brand-medium` | `#2e3f61` | Medium navy blue — section backgrounds |
| `--brand-light-navy` | `#4c5c7e` | Lighter navy — secondary section bg |
| `--accent-red` | `#db5246` | Red accent |
| `--accent-coral-light` | `#ffa07f` | Light coral/salmon |
| `--bg-white` | `#FFFFFF` | White sections |
| `--bg-light` | `#dadfe5` | Light gray-blue backgrounds |
| `--text-body` | `#6b6b6b` | Gray body text |
| `--font-heading` | `"Playfair Display", serif` | All headings (h1–h2) |
| `--font-body` | `"Roboto", sans-serif` | Body text, nav, forms |
| `--font-decorative` | `"Alike", sans-serif` | Decorative/brand text |
| `--btn-radius` | `50%` | Fully rounded / pill buttons |
| Overlay | `rgba(14,14,14,0.76)` | Hero overlay |

## Section Structure (from preview DOM)

### 1. Navbar
- Dark background, brand "Wavecrest"
- Nav links: Home, About us, Rooms, News, Contact
- Responsive hamburger menu on mobile

### 2. Hero
- Full-width background image with dark overlay (`rgba(14,14,14,0.76)`)
- Centered heading: "Luxury & Comfort" (Playfair Display)
- Subtitle: "Beach Hotel — More than a stay"

### 3. Search / Booking Box
- Floating search form overlaying the hero
- Date inputs (check-in / check-out), guest count
- Search button (terracotta pill button)

### 4. Intro / Testimonial
- Two-column layout: image left + text right
- Heading: "Deluxe Room"
- Testimonial quote with author: "Michael Williams" (client)
- Intro image on the left

### 5. Room Features (4 items)
- 4-column grid: each item has icon + heading
  - "Deluxe Room" (icon_1.svg)
  - "Beautiful Rooms" (icon_2.svg)
  - "Swimming Pool" (icon_3.svg)
  - "Luxury Resort" (icon_1.svg)

### 6. Gallery
- Owl Carousel slider with 5 gallery images
- Each image has a hover overlay with "+" icon
- Full-width slider

### 7. Newsletter
- Dark background section
- Heading: "Our Newsletter"
- Subscribe form: email input + "subscribe" button
- Terracotta/coral themed

### 8. Footer
- "Contact Info" section
- Brand logo
- "book now" button (terracotta)
- Copyright → componentdock.com

## Gherkin Requirements

```gherkin
Feature: Wavecrest — Beach Hotel Template

  Background:
    Given the app is deployed at wavecrest.free.componentdock.com
    And the page loads with no errors

  Scenario: Navbar renders all navigation items
    Then the navbar displays the brand "Wavecrest"
    And the navbar has links for "Home", "About us", "Rooms", "News", "Contact"
    And the navbar collapses to a hamburger on mobile

  Scenario: Hero section renders correctly
    Then the hero section displays heading "Luxury & Comfort"
    And the hero section displays subtitle "Beach Hotel — More than a stay"
    And the hero section has a dark overlay over a background image

  Scenario: Search/booking box renders correctly
    Then the search box displays check-in and check-out date inputs
    And the search box has a search button with terracotta styling

  Scenario: Intro section renders correctly
    Then the intro section displays heading "Deluxe Room"
    And the intro section shows an image and testimonial
    And the testimonial shows author name "Michael Williams"

  Scenario: Room features display correctly
    Then the room features section displays 4 feature items
    And each feature item shows an icon and a heading
    And the feature headings are "Deluxe Room", "Beautiful Rooms", "Swimming Pool", "Luxury Resort"

  Scenario: Gallery carousel renders correctly
    Then the gallery displays a carousel with 5 images
    And each gallery image has a hover overlay with a "+" icon

  Scenario: Newsletter section renders correctly
    Then the newsletter section displays heading "Our Newsletter"
    And the newsletter section has an email input field
    And the newsletter section has a "subscribe" button

  Scenario: Footer renders correctly
    Then the footer displays "Contact Info"
    And the footer has a "book now" button
    And the footer links to componentdock.com

  Scenario: Responsive behavior
    Then the navbar collapses to a hamburger menu on mobile
    And the room features stack vertically on mobile
    And the gallery carousel is swipeable on mobile
```

## Verification Checklist

- [ ] All sections render in correct order (hero → search → intro → features → gallery → newsletter → footer)
- [ ] Brand colors match: primary #da8661, dark #0b1423, medium #2e3f61
- [ ] Fonts: Playfair Display for headings, Roboto for body
- [ ] Hero has background image with dark overlay
- [ ] Search/booking box with date inputs
- [ ] Room features section shows 4 items with icons
- [ ] Gallery carousel with 5 images
- [ ] Newsletter with subscribe form
- [ ] Footer links to componentdock.com
- [ ] Pill buttons (50% border-radius)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos/seed/wavecrest-N/W/H
- [ ] Google Fonts loaded via <link> in index.html
- [ ] Tests pass with 100% coverage

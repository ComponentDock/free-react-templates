# Template: LavishLodge (Hotel / Accommodation)

## Purpose

Recreation of ColorLib's **LuxuryHotel** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source slug:** `luxuryhotel`
- **ColorLib page:** https://colorlib.com/wp/template/luxury-hotel/
- **Live preview:** https://preview.colorlib.com/theme/luxury-hotel/
- **New name:** `lavish-lodge` (package `@free-react-templates/lavish-lodge`)
- **Surge target:** `lavish-lodge.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#c9ac88` | Warm gold — button backgrounds, borders, CTA accents |
| `--brand-dark` | `#b99365` | Darker bronze/gold — section backgrounds, footer accents |
| `--accent` | `#ffc107` | Yellow/gold — footer highlights, links |
| `--bg-light` | `#f2f2f2` | Light gray section backgrounds |
| `--bg-lighter` | `#f7f7f7` | Alternate light section backgrounds |
| `--text-heading` | `#000` | Black headings |
| `--text-body` | `#6c757d` | Gray body text |
| `--font-heading` | `"Playfair Display", serif` | All headings (h1–h4) |
| `--font-body` | `"Rubik", sans-serif` | Body text, nav, buttons |
| `--btn-radius` | `4px` | Button border-radius |
| `--card-radius` | `7px` | Room cards border-radius |
| Overlay | `rgba(0,0,0,0.4)` | Hero overlay; `rgba(0,0,0,0.5)` parallax overlay |

## Section Structure (from preview DOM)

### 1. Navbar
- Dark background navbar (`bg-light` in preview but rendered dark via CSS overrides)
- Brand text "LavishLodge" (Playfair Display, serif)
- Nav links: Home, Rooms (dropdown: Presidential, Luxury, Deluxe), Blog, About, Contact
- CTA button: "Book Now" (gold `#c9ac88` background, white text, rounded)

### 2. Hero
- Full-width background image with dark overlay (`rgba(0,0,0,0.4)`)
- Centered text:
  - H1: "Welcome To Our Luxury Rooms"
  - Subtitle: "Discover our world's #1 Luxury Room For VIP."
  - CTA: "Book Now" button (gold primary)

### 3. About / Intro ("Stay and Enjoy")
- Two-column layout: text left (4 cols) + image right (7 cols)
- Subheading: "Stay with our luxury rooms"
- Heading: "Stay and Enjoy"
- Body text paragraph
- "More About Us" button (gold primary, small)

### 4. Rooms ("Featured Rooms")
- Light gray background (`#f2f2f2`)
- Subheading: "Our Luxury Rooms"
- Heading: "Featured Rooms"
- Heading: "Presidential Room" with description text
- "Book Now From $20" button
- 3-column room cards (Presidential, Luxury, Deluxe)
  - Each card: room image, room name, price ("from $22")
  - Dark overlay on images with text overlay

### 5. Parallax / Cover ("Relax and Enjoy")
- Full-width parallax background image
- Dark overlay (`rgba(0,0,0,0.5)`)
- Centered white text: "Relax and Enjoy your Holiday"

### 6. Blog ("Our Recent Blog")
- Light gray background (`#f2f2f2`)
- Subheading: "Our Blog"
- Heading: "Our Recent Blog"
- 3-column blog post cards:
  - Blog image, date, title (e.g. "New Rooms", "New Staff Added", "Big Rooms for All")
  - "Read More" link

### 7. Footer
- Dark background (`#000`)
- "Phone Support" section with phone number
- "Connect With Us" contact info (repeated heading in original)
- Copyright with link to componentdock.com

## Gherkin Requirements

```gherkin
Feature: LavishLodge — Luxury Hotel Template

  Background:
    Given the app is deployed at lavish-lodge.free.componentdock.com
    And the page loads with no errors

  Scenario: Navbar renders all navigation items
    Then the navbar displays the brand "LavishLodge"
    And the navbar has links for "Home", "Rooms", "Blog", "About", "Contact"
    And the navbar has a "Book Now" CTA button
    And the "Rooms" link has a dropdown with "Presidential", "Luxury", "Deluxe"

  Scenario: Hero section renders correctly
    Then the hero section displays heading "Welcome To Our Luxury Rooms"
    And the hero section displays subtitle "Discover our world's #1 Luxury Room For VIP."
    And the hero section has a "Book Now" button
    And the hero section has a dark overlay over a background image

  Scenario: About section renders correctly
    Then the about section displays heading "Stay and Enjoy"
    And the about section displays subheading "Stay with our luxury rooms"
    And the about section has a "More About Us" button
    And the about section shows a text column and an image column

  Scenario: Rooms section displays featured rooms
    Then the rooms section displays heading "Featured Rooms"
    And the rooms section displays subheading "Our Luxury Rooms"
    And the rooms section displays 3 room cards
    And each room card shows a room name and a price
    And the rooms section has a "Book Now From $20" button

  Scenario: Parallax section renders correctly
    Then the parallax section displays "Relax and Enjoy your Holiday"
    And the parallax section has a dark overlay over a background image

  Scenario: Blog section renders correctly
    Then the blog section displays heading "Our Recent Blog"
    And the blog section displays subheading "Our Blog"
    And the blog section displays 3 blog post cards
    And each blog card shows a title, image, and "Read More" link

  Scenario: Footer renders correctly
    Then the footer displays "Phone Support"
    Then the footer displays "Connect With Us"
    And the footer links to componentdock.com

  Scenario: Responsive behavior
    Then the navbar collapses to a hamburger menu on mobile
    And the room cards stack vertically on mobile
    And the blog cards stack vertically on mobile
```

## Verification Checklist

- [ ] All sections render in correct order (hero → about → rooms → parallax → blog → footer)
- [ ] Brand colors match: primary #c9ac88, dark #b99365, accent #ffc107
- [ ] Fonts: Playfair Display for headings, Rubik for body
- [ ] Hero has background image with dark overlay
- [ ] Rooms section shows 3 room cards with prices
- [ ] Parallax section has background image with overlay
- [ ] Blog section shows 3 posts
- [ ] Footer links to componentdock.com
- [ ] Navbar collapses on mobile
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos/seed/lavish-lodge-N/W/H
- [ ] Google Fonts loaded via <link> in index.html
- [ ] Tests pass with 100% coverage

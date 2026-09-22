# Template: LeafHaven (Hotel & Hospitality)

## Purpose

Recreation of the ColorLib "Ecoho" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `ecoho`
- **Source URL:** https://colorlib.com/wp/template/ecoho/
- **Preview URL:** https://preview.colorlib.com/theme/ecoho/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ecoho-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/leafhaven`
- **Surge target:** `leafhaven.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`) at https://preview.colorlib.com/theme/ecoho/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#FD8F5F` | Buttons, accents, highlights (coral orange) |
| Brand dark | `#A85432` | Submit buttons, hover states, header CTA bg (dark rust) |
| Dark hero bg | `#391F14` | Hero slider background (dark chocolate brown) |
| Warm cream bg | `#FFF7F3` | Testimonials section, footer background |
| Light gray bg | `#f5f5f5` | About section background |
| Heading text | `#140C40` | Primary headings (deep indigo) |
| Body text | `#5E5E5E` / `#646464` | Body copy, paragraphs |
| Muted text | `#888888` / `#999999` | Secondary text, captions |
| White | `#FFFFFF` | Text on dark backgrounds, card backgrounds |
| Accent blue | `#415094` | Accent links, secondary highlights |
| Footer bg | `#FFF7F3` | Warm cream footer background |
| Border light | `#eaeaea` | Form input borders |
| Font headings | `Cormorant`, serif | Hero heading, section headings, buttons |
| Font body | `Josefin Sans`, sans-serif | Body copy, navigation, UI text |
| Button shape | Square (border-radius: 0px) | All CTA buttons |
| Button outline | 1px solid `#FD8F5F` | Boxed button variant (white bg, orange border) |
| Button filled | `#A85432` solid | Submit/primary action buttons |
| Section heading size | 50px, weight 600, line-height 1.1 | Section titles |
| Hero heading | Large serif, white text | "World Class Accommodation" |

## Section Structure (in page order)

### 1. Navbar
- Logo (left-aligned, brand name "LeafHaven")
- Navigation links: Home, Rooms, About, Blog, Contact (right-aligned)
- Contact info strip below logo: phone number + address (desktop only)
- "Book Now" CTA button (right side, `#A85432` background)
- Sticky on scroll
- Mobile: hamburger menu → slide-out or dropdown

### 2. Hero Slider
- Full-width dark brown background (`#391F14`)
- Left-aligned content: large serif heading "World Class Accommodation" (white, `Cormorant`)
- Subtext: "Discover a hotel that defines a new dimension of luxury."
- "View More" CTA button (square, coral `#FD8F5F` border/bg)
- Right side: hotel room hero image
- Hero height: ~870px
- Content fades in with animation

### 3. About Section
- Light gray background (`#f5f5f5`)
- Centered introductory text heading (50px, serif)
- Two-column layout:
  - Left: section heading + description paragraph + "Learn More" button
  - Right: overlapping/nested hotel images (2 images stacked with offset)

### 4. Popular Rooms Carousel
- Full-width section
- Centered section heading
- OwlCarousel-style horizontal scroll of room cards
- Each card: room image, title, price per night ("$450/Night"), description
- Cards show image on top, text below with title + price on same row

### 5. Video Section
- Full-width with dark background image
- Centered play button icon + "Hotel Preview" text
- Popup video on click (YouTube link)

### 6. Booking Form Section
- Two-column layout:
  - Left: section heading + description text
  - Right: booking form with:
    - Check-in date picker
    - Check-out date picker
    - Room type select dropdown
    - Guest count select dropdown
    - "Check Availability" submit button (`#A85432`, full-width, square)

### 7. Blog Section
- Light background
- 3-column grid of blog cards
- Each card: blog image, title, description paragraph
- Consistent card layout across all 3

### 8. Client Testimonials
- Warm cream background (`#FFF7F3`)
- Testimonial slider/carousel
- Each item: client name, star rating, testimonial quote
- Dot indicators for navigation

### 9. Footer
- Warm cream background (`#FFF7F3`)
- Three-column layout:
  - Column 1: Logo + description text + social media icons (Twitter, Facebook, LinkedIn, Pinterest)
  - Column 2: Navigation links (About, Our Rooms, Book A Room, Blog, Privacy & Policy, Contact)
  - Column 3: Address + phone + email
- Bottom bar: copyright text (must link to Component Dock)

## Gherkin Requirements

```gherkin
Feature: LeafHaven Hotel Template

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo "LeafHaven" is visible in the top-left
    And navigation links "Home", "Rooms", "About", "Blog", "Contact" are visible
    And a "Book Now" button is visible
    And on mobile viewports a hamburger menu button is visible

  Scenario: Hero section displays
    Given the hero section is in the viewport
    Then the heading "World Class Accommodation" is displayed in serif font
    And a subtitle about discovering luxury is shown
    And a "View More" CTA button is visible
    And a hotel room image is displayed on the right

  Scenario: About section shows
    Given the about section is scrolled into view
    Then a centered heading paragraph is visible
    And a two-column layout shows text on the left and images on the right
    And a "Learn More" button is visible

  Scenario: Popular rooms carousel displays cards
    Given the rooms section is scrolled into view
    Then a section heading is visible
    And multiple room cards are displayed in a horizontal carousel
    And each card shows an image, title, price, and description

  Scenario: Video section renders
    Given the video section is scrolled into view
    Then a play button icon is centered on a dark background
    And "Hotel Preview" text is displayed below the play button

  Scenario: Booking form renders and validates
    Given the booking form section is scrolled into view
    Then a "Book A Room" heading is visible
    And check-in and check-out date input fields are present
    And room type and guest count select dropdowns are present
    And a "Check Availability" submit button is visible

  Scenario: Blog section shows 3 cards
    Given the blog section is scrolled into view
    Then 3 blog cards are visible in a row
    And each card has an image, title, and description

  Scenario: Testimonials slider works
    Given the testimonials section is scrolled into view
    Then client testimonials with names, ratings, and quotes are shown
    And dot navigation indicators are present

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then a logo and description text are visible
    And navigation links are listed
    And address and contact information are shown
    And social media icon links are visible
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And multi-column sections stack vertically
    And the booking form fields stack vertically
```

## Verification Checklist

- [ ] All 9 sections render in correct page order
- [ ] Brand coral `#FD8F5F` used for buttons and accents
- [ ] Dark rust `#A85432` used for submit/primary buttons
- [ ] Cormorant serif font loaded for headings and buttons
- [ ] Josefin Sans font loaded for body text
- [ ] Dark brown hero background (`#391F14`)
- [ ] Warm cream backgrounds on testimonials and footer (`#FFF7F3`)
- [ ] Square CTA buttons (border-radius: 0px)
- [ ] Booking form with date pickers and select dropdowns
- [ ] Room cards carousel with images, titles, prices
- [ ] 3-column blog card grid
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Placeholder images via `picsum.photos/seed/leafhaven-<n>/...`

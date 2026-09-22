# Template: Casamora (Hotel / Resort)

## Purpose

Recreation of the ColorLib "Casahotel" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `casahotel`
- **Source URL:** https://colorlib.com/wp/template/casahotel/
- **Preview URL:** https://preview.colorlib.com/theme/casahotel/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/casamora`
- **Surge target:** `casamora.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/casahotel/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#fd7e14` | Buttons, accents, highlights (orange) |
| Body bg | `#FFFFFF` | Main content backgrounds |
| Light bg | `#f8f9fa` | Alternating section backgrounds (Bootstrap bg-light) |
| Footer bg | `#1a1a1a` | Dark footer section |
| Body text | `#6c757d` | Body copy, paragraphs (gray) |
| Heading text | `#000000` | Primary headings |
| White text | `#FFFFFF` | On dark backgrounds, buttons |
| Font primary | `Mukta Mahee`, arial, sans-serif | Body copy, UI text |
| Font heading | `Playfair Display`, times, serif | Headings, hero text, nav logo, section titles |
| Button shape | `border-radius: 50px` (pill) | All CTA buttons |
| Button bg | `#fd7e14` | Primary action buttons |
| Button text | `#FFFFFF` | White on brand |
| Hero overlay | `rgba(0, 0, 0, 0.45)` | Dark overlay on hero background image |
| Border top | `1px solid rgba(255, 255, 255, 0.1)` | Footer divider |

## Section Structure (in page order)

### 1. Navbar
- Logo "Casahotel" on left (Playfair Display italic, white on transparent hero, black on white navbar)
- Hamburger toggle (3 white bars, opens full-screen nav overlay)
- Nav links: Home, Rooms, About, Events, Contact, Reservation Form
- Full-screen overlay menu on mobile: centered vertical list, white background

### 2. Hero
- Full-width parallax background image with dark overlay
- Centered heading: "Enjoy A Luxury Experience" (Playfair Display, white)
- Mouse scroll indicator at bottom (animated mouse icon)

### 3. Check Availability (Booking Form)
- Light gray section (`bg-light`)
- Heading: "Check Availability"
- Horizontal form with 4 columns:
  - Check In (date picker with calendar icon)
  - Check Out (date picker with calendar icon)
  - Adults (select dropdown, 1-4+)
  - Children (select dropdown, 1-4+)
- "Check Availability" button (pill shape, orange)

### 4. About Section
- Two-column layout: image (right, large) + text (left)
- Heading: "Welcome to Casahotel." (Playfair Display, italic "to")
- Lead paragraph + body paragraph (lorem ipsum)
- "Read More" button (pill, orange) + "or" + "See video" link (vimeo popup)

### 5. Great Offers (Room Pricing)
- Light gray section (`bg-light`)
- Heading: "Great Offers" with lead paragraph
- Two large side-by-side cards (desktop), stacked on mobile:
  - Each card: left image + right text area
  - Price display: "$199 / per night" and "$299 / per night" (orange display-4)
  - Room name: "Superior Room" / "Presidential Room"
  - Description paragraphs
  - "Book Now" button (pill, orange)
- Second card has reversed layout (image on right, text on left)
- "View All Rooms" CTA button centered below

### 6. Gallery (Image Slider)
- White section
- Heading: "See The Gallery" with lead paragraph
- OwlCarousel-style image slider (7 slides, large images)
- "View More Photos" link centered below

### 7. Testimonials
- White section
- Heading: "Testimonial"
- Carousel of testimonial cards (6 entries, cycling):
  - Circular author photo (rounded-circle)
  - Blockquote text
  - Author name in italic
- Slider with navigation dots

### 8. Events (Blog Posts)
- Light gray section (`bg-light`)
- Heading: "Events" with lead paragraph
- 3-column grid of event cards:
  - Image thumbnail
  - Date meta (e.g. "February 26, 2018")
  - Event title as heading link
- All cards have same structure, different images

### 9. CTA Banner
- White section with top border
- Two-column layout: heading text (left) + "Reserve Now" button (right, pill, orange, large padding)
- Text: "Make Yourself Comfortable in Any of Our Fully Air-conditioned Rooms"

### 10. Footer
- Dark background (`#1a1a1a`), white text
- 4-column layout:
  - Column 1: Link list (About Us, Terms & Conditions, Privacy Policy, Help, Rooms)
  - Column 2: Link list (Our Location, The Rooms & Suites, About, Contact, Restaurant)
  - Column 3: Contact info (Address, Phone, Email with ion icons in orange)
  - Column 4: Newsletter signup form (email input + send button)
- Bottom row: copyright text (left) + social icons (right: TripAdvisor, Facebook, Twitter)
- Divider line between content and bottom row

## Gherkin Scenarios

```gherkin
Feature: Casamora Hotel Template

  Background:
    Given the Casamora template is loaded

  Scenario: Navbar displays logo and navigation
    Then the logo "Casamora" is visible
    And navigation links include Home, Rooms, About, Events, Contact, Reservation Form
    And the hamburger menu toggle is visible on mobile

  Scenario: Hero section renders with parallax background
    Then a full-width hero background image is displayed
    And the heading "Enjoy A Luxury Experience" is visible
    And a mouse scroll indicator is shown

  Scenario: Booking form accepts check-in and check-out dates
    When the user views the Check Availability section
    Then Check In and Check Out date inputs are present
    And Adults and Children select dropdowns are present
    And the "Check Availability" button is visible

  Scenario: About section displays hotel description
    Then a two-column layout with image and text is shown
    And the heading "Welcome to Casamora" is visible
    And "Read More" and "See video" CTAs are present

  Scenario: Room pricing shows offers
    Then two room cards are displayed side by side
    And each card shows a price, room name, and description
    And each card has a "Book Now" button
    And a "View All Rooms" button is centered below

  Scenario: Gallery slider shows images
    Then a horizontal image carousel is displayed
    And multiple hotel images are available in the slider
    And a "View More Photos" link is shown below

  Scenario: Testimonials carousel renders
    Then testimonial cards are displayed in a carousel
    And each card shows an author photo, quote, and name

  Scenario: Events section shows blog-style cards
    Then three event cards are displayed in a grid
    And each card has an image, date, and title

  Scenario: CTA banner promotes reservations
    Then a call-to-action banner is displayed
    And a "Reserve Now" button is visible

  Scenario: Footer displays links and contact info
    Then the footer has 4 columns of content
    And contact information includes address, phone, and email
    And a newsletter signup form is present
    And social media icons are displayed
    And a copyright line is shown at the bottom
```

## Verification Checklist

- [ ] Section order matches original: Navbar → Hero → Booking → About → Offers → Gallery → Testimonials → Events → CTA → Footer
- [ ] Design tokens applied: brand orange `#fd7e14`, pill buttons (`rounded-full`), Mukta Mahee body font, Playfair Display headings
- [ ] Hero uses parallax-style full-width background with dark overlay
- [ ] Booking form has all 4 field groups (check-in, check-out, adults, children)
- [ ] About section uses two-column layout (image right, text left)
- [ ] Room pricing cards have reversed layout pattern (second card mirrors first)
- [ ] Gallery uses a horizontal carousel/slider
- [ ] Testimonials use carousel with author photos (circular)
- [ ] Events use 3-column grid
- [ ] CTA banner has top border + two-column layout
- [ ] Footer uses dark background with 4-column grid
- [ ] Footer links, contact info, newsletter form, and social icons all present
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] No ColorLib references in app code (comments, strings, data)
- [ ] Uses `picsum.photos` for placeholder images
- [ ] Google Fonts loaded via `<link>` in index.html
- [ ] Lucide React icons used for UI icons

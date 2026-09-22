# Template: Opulence (Hotel & Resort)

## Purpose

Recreation of ColorLib's **Deluxe** hotel template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `deluxe`
- **Preview URL:** https://preview.colorlib.com/theme/deluxe/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/deluxe-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/opulence` → `apps/opulence`
- **Deploy target:** `opulence.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand blue (primary) | `#78d5ef` | Buttons, accents, CTA backgrounds |
| Brand blue hover | `#56caeb` | Button hover state |
| Brand blue deep | `#4ac7ea` | Focus rings, secondary hover |
| Gold accent | `#8d703b` | Booking form labels, uppercase text accents |
| Dark surface | `#232323` | Footer background |
| Dark overlay | `#1d2124` | Section overlays |
| Light background | `#f7f7f7` | Alternate section backgrounds (`bg-light`) |
| Body text | `#212529` | Primary text color |
| Muted text | `#6c757d` | Secondary text |
| White | `#fff` | Card backgrounds, footer text |

### Fonts

| Role | Font stack |
|------|-----------|
| Headings | `"Playfair Display", Arial, serif` |
| Body | `"Poppins", Arial, sans-serif` |

### Border Radii

- Buttons: `border-radius: 30px` (pill shape)
- Cards: `border-radius: 4px`
- Form inputs: `border-radius: 0.25rem`

### Layout Patterns

- Hero slider: full viewport height (`900px`), dark overlay on background images
- Booking form: floats over hero bottom with `-230px` negative margin, white background
- Sections alternate between white and `#f7f7f7` (`bg-light`)
- Counter section uses parallax background image
- Room cards: 3-column grid with image + details
- Testimonials: carousel with avatars
- Instagram grid: 6-column image strip
- Footer: dark (`#232323`), multi-column with links + contact info

## Gherkin Requirements

### Navbar

```
Scenario: Sticky transparent navbar with logo and links
  Given the user loads the page
  Then the navbar displays "Opulence" as the logo text
  And the nav links are: Home, Rooms, Restaurant, About, Blog, Contact
  And the navbar becomes solid dark on scroll
```

### Hero Slider

```
Scenario: Full-height hero with overlay and CTA
  Given the user loads the page
  Then a full-height hero section displays
  And the heading reads "Welcome To Opulence"
  And the subheading reads "Hotels & Resorts"
  And a "Book Now" CTA button is visible
  And the hero has a dark semi-transparent overlay on the background image
```

### Booking Form

```
Scenario: Floating booking form over hero
  Given the user sees the hero section
  Then a booking form appears below the hero with negative margin
  And the form has fields: Check In, Check Out, Special Request
  And the form labels use gold accent color (#8d703b)
  And a "Check Availability" button is displayed
```

### About Section

```
Scenario: Welcome section with text and image
  Given the user scrolls past the booking form
  Then a two-column section displays
  And the left column has a large image
  And the right column has heading "Welcome To Our Hotel"
  And descriptive paragraph text is present
```

### Amenities Section

```
Scenario: Four amenity cards in a row
  Given the user scrolls to the amenities area
  Then 4 amenity cards are displayed in a row
  And the cards are: Front Desk, Restaurant Bar, Transfer Services, Spa Suites
  And each card has an icon and descriptive text
```

### Rooms Section

```
Scenario: Room listing grid
  Given the user scrolls to the rooms section
  Then 6 room cards are displayed in a 3-column grid
  And the rooms are: Suite Room, Family Room, Deluxe Room, Classic Room, Superior Room, Luxury Room
  And each card shows an image, room name, price per night, and "View Room Details" link
  And the section background is light (#f7f7f7)
```

### Counter Section

```
Scenario: Statistics counter with parallax background
  Given the user scrolls to the counter section
  Then 4 statistics are displayed: Happy Guests, Rooms, Staffs, Destination
  And the section has a parallax background image
  And numbers animate on scroll into view
```

### Testimonials Section

```
Scenario: Testimonial carousel
  Given the user scrolls to the testimonials section
  Then a carousel displays testimonial cards
  And each card shows a quote, avatar image, and author name
  And the section background is light (#f7f7f7)
```

### Blog Section

```
Scenario: Recent blog posts grid
  Given the user scrolls to the blog section
  Then 4 blog entry cards are displayed
  And each card has a featured image, date, title, and excerpt
  And a "Read more" link is present on each card
```

### Instagram Section

```
Scenario: Instagram image strip
  Given the user scrolls to the Instagram section
  Then a 6-column image strip is displayed
  And the heading reads "Instagram"
```

### Footer

```
Scenario: Dark footer with columns
  Given the user reaches the bottom of the page
  Then the footer has a dark background (#232323)
  And columns display: Useful Links, Privacy, Contact info
  And the footer links to Component Dock (https://www.componentdock.com/)
  And the footer shows contact phone and email
```

## Verification Checklist

- [ ] Spec written and saved to `openspec/specs/template-opulence/spec.md`
- [ ] Design tokens extracted from live preview CSS
- [ ] All 10 sections documented with Gherkin scenarios
- [ ] New name "opulence" has no collision with existing apps or specs
- [ ] ColorLib source slug `deluxe` recorded
- [ ] Preview URL and screenshot URL recorded
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)

# Template: AurumStay (Luxury Hotel Landing)

## Purpose

Recreation of ColorLib **Hiroto** — a luxury hotel landing page template with a dark hero, golden accent palette, booking form, and elegant gallery.

- **ColorLib source:** https://colorlib.com/wp/template/hiroto/
- **Live preview:** https://preview.colorlib.com/theme/hiroto/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

---

## Design Tokens

Extracted from the ColorLib Hiroto preview stylesheet:

| Token            | Value                            | Usage                                      |
|------------------|----------------------------------|---------------------------------------------|
| Brand / Accent   | `#E9AD28`                        | Headings, buttons, highlights, icons         |
| Dark Background  | `#19191A` / `#1d1c1c`           | Hero, rooms, footer, testimonial bg          |
| Body Text        | `#111111`                        | Primary text (light sections)                |
| Muted Text       | `#777C81`                        | Secondary text, subheadings                  |
| White            | `#ffffff`                        | Hero headings, light section bg              |
| Light Gray       | `#e5e5e5`                        | Dividers, subtle backgrounds                 |
| Font – Body      | `"DM Sans", sans-serif`          | Paragraphs, form labels                      |
| Font – Heading   | `"Barlow Condensed", sans-serif` | Section headings, hero h2                    |
| Button Radius    | `60px` (pill)                    | `.primary-btn`                               |
| Button Padding   | `14px 20px 12px`                | Primary CTA buttons                          |
| Letter Spacing   | `2px` (buttons), `4px` (labels)  | CTA and section subtitles                    |
| Section Padding  | `spad` (~80px vertical)          | Hero, services, rooms, testimonials, gallery  |

---

## Section Structure (in order)

| #   | Section           | Description                                                                 |
|-----|-------------------|-----------------------------------------------------------------------------|
| 1   | Header            | Top bar (address, phone, auth links, language) + navbar (logo, nav links, "Book Now" CTA) |
| 2   | Hero              | Full-width dark background image, centered text: "WELCOME AURUMSTAY" subtitle + "Experience the greatest for your holidays" heading |
| 3   | Booking Form      | Below hero: Location search + Check-in / Check-out date pickers + Room select + "Search" button |
| 4   | About Us          | Left: hotel image. Right: "ABOUT US" subtitle + "Welcome AurumStay Hotel" heading + two paragraphs of copy |
| 5   | Services          | 3×2 grid of 6 service icons with titles: Free Wi-Fi, Premium Pool, Coffee Maker, Bar Wine, TV HD, Restaurant |
| 6   | Our Rooms         | "OUR ROOM" subtitle + "Explore Our Hotel" heading. 4-column grid of room cards (image, name, price "/day") |
| 7   | Testimonials      | Left: author photo. Right: carousel of testimonial quotes + author name/title + social icons |
| 8   | Gallery           | Image gallery carousel (6+ images, mixed sizes) with "Our Gallery" heading |
| 9   | Booking Banner    | Dark full-width CTA: "Planning your next trip? Save up to 25% on your hotel" |
| 10  | Footer            | Dark background. Logo, about text, newsletter signup, social links, copyright with "Component Dock" link |

---

## Gherkin Requirements

### Header

```gherkin
Scenario: Header displays contact info and navigation
  Given the user is on the landing page
  Then the header shows the address "96 Ernser Vista Suite 437, NY, US"
  And the header shows the phone "(123) 456-78-910"
  And the navbar contains links: Home, Rooms, About Us, News, Contact
  And a "Book Now" CTA button is visible

Scenario: Navbar is sticky on scroll
  Given the user scrolls past the hero
  Then the navbar remains fixed at the top of the viewport

Scenario: Mobile hamburger menu
  Given the user is on a mobile viewport (< 768px)
  Then a hamburger icon is visible
  And tapping it opens a slide-in mobile menu
```

### Hero

```gherkin
Scenario: Hero displays welcome message
  Given the user is on the landing page
  Then the hero shows a subtitle "WELCOME AURUMSTAY" in accent color
  And the hero shows heading "Experience the greatest for your holidays"
  And the heading is white on a dark background image

Scenario: Hero has full-width dark background
  Given the user views the hero
  Then the hero spans full viewport width
  And the background is a dark hotel image with overlay
```

### Booking Form

```gherkin
Scenario: Booking form fields are present
  Given the user sees the booking form below the hero
  Then a "Location" text input with search icon is visible
  And a "Check In" date picker is visible
  And a "Check Out" date picker is visible
  And a "Room" select dropdown is visible
  And a "Search" button is visible

Scenario: Booking form is interactive
  Given the user fills in location and dates
  When they click "Search"
  Then the form does not navigate away (demo placeholder)
```

### About Us

```gherkin
Scenario: About section shows hotel info
  Given the user scrolls to the About section
  Then an "ABOUT US" subtitle in accent color is displayed
  And heading "Welcome AurumStay Hotel In Street L'Abreuvoir" is shown
  And two paragraphs of descriptive text are visible
  And a hotel image appears alongside the text
```

### Services

```gherkin
Scenario: Services grid displays 6 amenities
  Given the user scrolls to the Services section
  Then 6 service items are displayed in a 3×2 grid
  And each item has an icon and title
  And the titles are: Free Wi-Fi, Premium Pool, Coffee Maker, Bar Wine, TV HD, Restaurant

Scenario: Services section has dark background
  Given the user views the Services section
  Then the background is dark (#1d1c1c)
  And the text is white
```

### Our Rooms

```gherkin
Scenario: Rooms section shows hotel rooms
  Given the user scrolls to the Rooms section
  Then "OUR ROOM" subtitle in accent color is shown
  And heading "Explore Our Hotel" is displayed
  And 4 room cards are displayed in a row
  And each card has an image, room name, and price per day

Scenario: Room cards are hoverable
  Given the user hovers over a room card
  Then the card shows a subtle hover effect (overlay or lift)
```

### Testimonials

```gherkin
Scenario: Testimonials carousel works
  Given the user scrolls to the Testimonials section
  Then a testimonial quote is displayed
  And an author photo, name, and title are shown
  And social media icons are visible for the author
  And navigation dots/arrows allow cycling through testimonials
```

### Gallery

```gherkin
Scenario: Gallery shows hotel images
  Given the user scrolls to the Gallery section
  Then "Our Gallery" heading is displayed
  And 6+ images are shown in a carousel/grid layout
  And images are in mixed sizes (larger + smaller items)

Scenario: Gallery carousel is navigable
  Given the user views the gallery
  Then left/right arrows or dots allow navigation through images
```

### Booking Banner

```gherkin
Scenario: Booking CTA banner
  Given the user scrolls to the booking banner
  Then "Planning your next trip? Save up to 25% on your hotel" is displayed
  And the banner has a dark background with white text
```

### Footer

```gherkin
Scenario: Footer displays site info
  Given the user scrolls to the footer
  Then the footer has a dark background
  And the AurumStay logo is shown
  And a newsletter signup input is present
  And social media links are displayed
  And copyright text includes a "Component Dock" link

Scenario: Footer newsletter form
  Given the user enters an email in the newsletter field
  When they submit
  Then the form does not navigate away (demo placeholder)
```

---

## Verification Checklist

- [ ] All 10 sections present in correct order
- [ ] Header: sticky navbar, address, phone, nav links, "Book Now" CTA
- [ ] Hero: dark background image, golden subtitle, white heading, full-width
- [ ] Booking form: location, check-in, check-out, room, search button
- [ ] About Us: two-column layout (image + text), accent subtitle, heading, paragraphs
- [ ] Services: 6 items in 3×2 grid, dark background, icons + titles
- [ ] Rooms: 4 room cards with images, names, prices
- [ ] Testimonials: carousel, author info, social icons
- [ ] Gallery: carousel of mixed-size images
- [ ] Booking banner: CTA with dark bg
- [ ] Footer: dark bg, logo, newsletter, social links, Component Dock link
- [ ] Brand color #E9AD28 used throughout (headings, buttons, accents)
- [ ] Fonts: "DM Sans" (body) + "Barlow Condensed" (headings) loaded from Google Fonts
- [ ] Pill-shaped buttons (border-radius 60px)
- [ ] Responsive: mobile hamburger, stacked grids on small screens
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass with 100% coverage

---

## Replication Research Notes

**Source:** ColorLib Hiroto — https://preview.colorlib.com/theme/hiroto/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hiroto-free-template.jpg

The preview was reachable. Key observations:
- The hero uses a dark hotel lobby image with dark overlay. The subtitle "WELCOME HIROTO" is in gold (#E9AD28) uppercase with 4px letter-spacing. The main heading is large (72px) white Barlow Condensed.
- Below the hero is a booking search form with 4 fields (location, check-in, check-out, room) on a dark strip.
- The About section is a 2-column layout with hotel image on the left and text on the right.
- Services uses a dark background (#1d1c1c) with 6 amenity items in a 3×2 grid, each with an icon and title in white.
- Rooms section shows 4 Deluxe Room cards with price per day, on a light background.
- Testimonials has a split layout: circular author photo on left, carousel of quotes on right.
- Gallery is a carousel of hotel images in mixed sizes.
- A full-width dark booking CTA banner sits above the footer.
- Footer is dark with logo, newsletter form, social links, and copyright.

**Original font stack:** "DM Sans" for body text, "Barlow Condensed" for headings — both available on Google Fonts.

**CSS files:** bootstrap.min.css, font-awesome.min.css, elegant-icons.css, nice-select.css, jquery-ui.min.css, owl.carousel.min.css, slicknav.min.css, style.css (main custom styles).

**Image handling:** Original uses `data-setbg` for lazy-loaded backgrounds. In React, use `picsum.photos` with deterministic seeds for hotel/room/gallery images.

**Section order confirmation from HTML:**
1. Header (topbar + nav)
2. Hero (dark bg, booking form inside)
3. Home About (two-column)
4. Services (6 items, dark bg)
5. Home Rooms (4 cards, light bg)
6. Testimonials (carousel)
7. Gallery (image carousel)
8. Footer (dark bg, newsletter, social)

Note: The booking form is embedded inside the hero section in the original. In the React version, it can be rendered as a separate visual strip below the hero for cleaner component separation while maintaining the same visual appearance.

# Template: BlueCove (Luxury Hotel)

## Purpose

Recreation of ColorLib "The Grand Azure" — a luxury coastal hotel landing page featuring a hero with booking form, stats bar, about section, room cards, amenity highlights, seasonal offer, photo gallery, guest reviews slider, contact form with map info, and a multi-column footer with newsletter.

- **Source slug:** `the-grand-azure`
- **Preview URL:** https://preview.colorlib.com/theme/the-grand-azure/ (404 — preview unreachable; research based on GitHub clone + ColorLib description + screenshot)
- **ColorLib page:** https://colorlib.com/wp/template/the-grand-azure/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from clone CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand dark | `#06151a` | Deep ocean teal-black (hero overlay, dark sections) |
| Brand accent | `#0891b2` | Cyan-600 (links, highlights, buttons) |
| Accent hover | `#0e7490` | Cyan-700 (hover states) |
| Gold accent | `#d6a85d` | Warm gold (room price, special elements) |
| Gold hover | `#f0c572` | Lighter gold (hover) |
| Body text | `#111` | Near-black |
| Muted text | `#6c777a` | Gray-green |
| Light text | `#a8bdc3` | On dark backgrounds |
| Light bg | `#f7f4ec` / `#fbf8f1` | Warm off-white sections |
| Dark section bg | `#08171c` / `#10252c` / `#132f38` | Various dark teal layers |
| White | `#fff` / `#ffffff` | Cards, text on dark |
| Font — heading | Playfair Display | Serif, elegant |
| Font — body | Manrope | Clean geometric sans-serif |
| Button style | Rounded (border-radius ~8px), solid bg | `.btn` class |
| Section padding | Generous vertical spacing | `.section` class |
| Card style | Rounded corners, subtle shadow | Room/amenity/review cards |

## Section structure (from GitHub clone, order = 1:1)

1. **Navbar** — fixed top, brand logo (hotel icon + "BlueCove"), links: Rooms, Amenities, Offers, Gallery, Contact. "Book Now" CTA button. Mobile hamburger.
2. **Hero** — full-screen dark overlay (`#06151a`), heading "Wake up where the sky meets the Azure Sea.", subheading "Reserve your stay", booking form (date pickers, guests, room type dropdown), CTA buttons: "Explore Rooms", "View Gallery". Background image.
3. **Stats bar** — 4 stats in a row: 48 Luxury suites, 4.9 Guest rating, 120m Private beach, 24/7 Concierge.
4. **About** — two-column: left = text "A boutique resort designed for calm, comfort, and ocean views." + description paragraph; right = image.
5. **Rooms** — heading "Rooms & signature suites". 3 room cards in grid: Ocean Panorama Suite, Private Garden Villa, Azure Loft. Each: image, name, price ($299-$499/night), amenity icons (bed, bath, view, wifi), "Book Now" button.
6. **Amenities** — heading "Everything for an effortless stay". 4 amenity cards: Infinity pool, Azure spa, Fine dining, Fitness club. Each: icon, name, description.
7. **Offers** — two-column: left = seasonal package text "Stay 3 nights and enjoy a private beach dinner." + description + "Claim Offer" button; right = pricing card ($699 for 3 nights) with checklist.
8. **Gallery** — heading "Moments from BlueCove". Grid of 6 hotel photos with hover overlay.
9. **Reviews** — heading "Loved by travelers around the world." Slider with review cards: 5-star rating, quote, guest avatar, name, location. Slider controls (prev/next).
10. **Contact** — two-column: left = text "Need help choosing the right room?" + address/phone/email; right = contact form (name, email, message, "Send Message" button).
11. **Footer** — dark bg. Columns: brand + description, Explore (links), Social (links), Newsletter (email input). Bottom: copyright + back-to-top link + **Component Dock** link.

## Gherkin requirements

### Navbar
```gherkin
Scenario: Navigation links visible
  Given the user is on the homepage
  Then the navbar displays the logo "BlueCove"
  And navigation links include "Rooms", "Amenities", "Offers", "Gallery", "Contact"
  And a "Book Now" button is visible

Scenario: Mobile hamburger menu
  Given the viewport is mobile (< 768px)
  When the user taps the hamburger icon
  Then the mobile menu opens with all navigation links
```

### Hero
```gherkin
Scenario: Hero displays full-screen with booking form
  Given the user is on the homepage
  Then the hero occupies the full viewport height
  And displays the heading about sky and sea
  And a booking form with date pickers and room type selector is visible
  And "Explore Rooms" and "View Gallery" buttons are present

Scenario: Booking form is interactive
  Given the user is on the hero section
  When the user selects dates and room type
  Then the form accepts the input
```

### Stats Bar
```gherkin
Scenario: Stats display correctly
  Given the user scrolls past the hero
  Then 4 statistics are displayed in a row
  And stats include "Luxury suites", "Guest rating", "Private beach", "Concierge"
```

### About
```gherkin
Scenario: About section shows two-column layout
  Given the user scrolls to the about section
  Then the left column shows a heading about boutique resort
  And descriptive text is present
  And the right column shows a hotel image
```

### Rooms
```gherkin
Scenario: Room cards display with pricing
  Given the user scrolls to the rooms section
  Then 3 room cards are displayed in a responsive grid
  And each card shows an image, room name, and nightly price
  And room names include "Ocean Panorama Suite", "Private Garden Villa", "Azure Loft"
  And each card has a "Book Now" button

Scenario: Room cards show amenity icons
  Given a room card is visible
  Then amenity icons for bed, bath, view, and wifi are displayed
```

### Amenities
```gherkin
Scenario: Amenities displayed as cards
  Given the user scrolls to the amenities section
  Then 4 amenity cards are displayed
  And cards include "Infinity pool", "Azure spa", "Fine dining", "Fitness club"
  And each card has an icon, name, and description
```

### Offers
```gherkin
Scenario: Seasonal offer displayed
  Given the user scrolls to the offers section
  Then a seasonal package heading about private beach dinner is shown
  And a pricing card shows "$699" for 3 nights
  And a checklist includes daily breakfast, spa credit, private dinner, airport transfer
  And a "Claim Offer" button is present
```

### Gallery
```gherkin
Scenario: Gallery grid displays images
  Given the user scrolls to the gallery section
  Then a grid of 6 hotel photos is displayed
  And images have hover overlay effects
```

### Reviews
```gherkin
Scenario: Review slider works
  Given the user scrolls to the reviews section
  Then a review card is displayed with 5-star rating
  And the review shows a quote, guest avatar, name, and location
  And prev/next navigation buttons are present

Scenario: Slider navigates between reviews
  Given a review is displayed
  When the user clicks the next button
  Then the next review slides into view
```

### Contact
```gherkin
Scenario: Contact section shows form and info
  Given the user scrolls to the contact section
  Then the left column shows address, phone, and email
  And the right column shows a contact form
  And the form has name, email, message fields and a "Send Message" button
```

### Footer
```gherkin
Scenario: Footer displays with Component Dock link
  Given the user scrolls to the footer
  Then the footer has a dark background
  And columns include Explore, Social, and Newsletter
  And a newsletter email input is present
  And the footer links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All 11 sections present in correct order
- [ ] Navbar: fixed, brand logo, nav links, "Book Now" CTA, mobile menu
- [ ] Hero: full-screen, dark overlay, heading, booking form, CTA buttons
- [ ] Stats bar: 4 stats in a row
- [ ] About: two-column, text + image
- [ ] Rooms: 3 cards, pricing, amenity icons, "Book Now" buttons
- [ ] Amenities: 4 cards with icons and descriptions
- [ ] Offers: seasonal package, pricing card, checklist, CTA
- [ ] Gallery: image grid with hover effects
- [ ] Reviews: slider, 5-star ratings, avatars, navigation
- [ ] Contact: info + form, "Send Message" button
- [ ] Footer: dark bg, multi-column, newsletter, Component Dock link
- [ ] Design tokens: #0891b2 cyan accent, #d6a85d gold, Playfair Display headings, Manrope body
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Icons via lucide-react
- [ ] Accessibility: semantic elements, aria-labels on interactive controls

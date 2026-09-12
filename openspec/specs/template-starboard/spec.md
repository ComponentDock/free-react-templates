# Template: Starboard (Hotel / Hospitality)

## Purpose

Recreation of ColorLib "Hotel" template (`https://colorlib.com/wp/template/hotel/`).
Preview: `https://preview.colorlib.com/theme/hotel/`.
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

**Source slug:** `hotel`
**Preview URL:** `https://preview.colorlib.com/theme/hotel/`
**New name:** `starboard`

## Design tokens

| Token             | Value                           | Notes                                    |
| ----------------- | ------------------------------- | ---------------------------------------- |
| Brand color       | `#ae9548` (warm gold)           | Primary CTA, nav highlights, accents     |
| Text primary      | `#242424`                       | Headings and body text                   |
| Text dark         | `#081624`                       | Footer section, dark backgrounds         |
| Text secondary    | `#858585` / `#888888`           | Subtitles, dates                         |
| Background light  | `#F7F7F7`                       | Alternating section bg                   |
| Background dark   | `#353535`                       | Footer and dark sections                 |
| Font family       | `"Taviraj", serif`              | All headings and body                    |
| Button radius     | `60px` (pill)                   | Primary CTA buttons                      |
| Card radius       | `0` (sharp corners)             | Room cards                               |
| Icon shape        | `border-radius: 50%`            | Circular icon containers                 |
| Section spacing   | `spad` class (80px top/bottom)  | Consistent vertical rhythm               |

## Section structure (top to bottom)

1. **Header/Navbar** — sticky top bar with logo left, nav links right (Home, About, Rooms, Facilities, News, Contact). Dark text on white. Dropdown menus for room types.
2. **Hero Slider** — full-width image carousel with 3 slides (Pool, Sauna, Restaurant). Each slide has nav indicators (arrow icons in circles). Text overlay with slide title.
3. **Room Availability / Booking** — section heading "Check Availability" with date picker form (check-in/check-out), room selector with quantity, and "Junior Suite" card showing room picture carousel, price ($252), features (Smart TV, Wi-Fi, AC, Parking, Pool), and an info button. Light background `#F7F7F7`.
4. **About Room** — split layout: left text block with quote heading + Lorem description, right image. White background. Heading: "Customers may forget what you said but they will never forget how you made them feel."
5. **Facilities** — section heading "Facilities" with icon grid of facility cards (Wellness Center, etc.). Each card: circular icon container, title, description. Light background.
6. **Testimonials / Guestbook** — section heading "Guestbook" with testimonial carousel. Each item: date, star rating, title ("Loved It"), review text, author info (avatar + name). Dark background `#353535` with gold accents.
7. **Follow Instagram** — heading with Instagram handle `@yourhotel` and a grid of Instagram feed images (4-6 pics). White background.
8. **Footer** — dark background `#081624` / `#353535`. Logo left, 4 widget columns (Location, Reception, Shuttle Service, Restaurant), bottom copyright with privacy links. Gold `#ae9548` accents.

## Gherkin scenarios

### Feature: Starboard Hotel Template

```gherkin
Scenario: Page loads with hero slider
  Given the user visits the Starboard page
  Then a full-width hero slider is visible
  And navigation arrows are displayed
  And 3 slide indicators (Pool, Sauna, Restaurant) are shown

Scenario: Navbar is sticky and functional
  Given the user scrolls down the page
  Then the navbar remains fixed at the top
  And all nav links (Home, About, Rooms, Facilities, News, Contact) are clickable
  And room-type dropdown menus expand on hover/click

Scenario: Room availability section displays booking form
  Given the user scrolls to the booking section
  Then a "Check Availability" heading is visible
  And date picker fields for check-in and check-out are present
  And a room card shows "Junior Suite" with price "$252"
  And room features (Smart TV, Wi-Fi, AC, Parking, Pool) are listed
  And the room card has an image carousel

Scenario: About section shows split layout
  Given the user scrolls to the about section
  Then a left text block with quote heading is visible
  And a right-side image is displayed
  And the background is white

Scenario: Facilities section displays icon grid
  Given the user scrolls to the facilities section
  Then a "Facilities" heading is visible
  And facility cards are shown in a grid layout
  And each card has a circular icon, title, and description

Scenario: Testimonials section shows guestbook
  Given the user scrolls to the testimonials section
  Then a "Guestbook" heading is visible
  And testimonial items show date, star rating, title, review text, and author
  And the section has a dark background with gold accents

Scenario: Instagram feed section
  Given the user scrolls to the Instagram section
  Then a heading with "@yourhotel" handle is visible
  And a grid of Instagram feed images is displayed

Scenario: Footer has correct structure
  Given the user scrolls to the footer
  Then a dark background section is visible
  And 4 widget columns (Location, Reception, Shuttle Service, Restaurant) are present
  And a copyright area with privacy links is shown
  And a link to componentdock.com is present

Scenario: Mobile responsive layout
  Given the user views the page on a mobile device
  Then the navbar collapses to a hamburger menu
  And sections stack vertically
  And room cards display full-width
```

## Verification checklist

- [ ] Hero slider renders 3 slides with navigation controls
- [ ] Navbar is sticky with correct links and room dropdowns
- [ ] Booking section has date picker and room cards
- [ ] About section has split text/image layout
- [ ] Facilities section has icon grid with circular icons
- [ ] Testimonials section has dark background with gold accent
- [ ] Instagram feed grid renders correctly
- [ ] Footer has 4 widget columns and Component Dock link
- [ ] All design tokens match (gold `#ae9548`, Taviraj font, pill buttons)
- [ ] Mobile responsive at all breakpoints
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images use `picsum.photos` seeds
- [ ] Footer links to `https://www.componentdock.com/`

# Template: GrandStay (Hotel & Hospitality)

## Purpose

Recreation of ColorLib's **Hotel** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

- **Source:** [colorlib.com/wp/template/hotel/](https://colorlib.com/wp/template/hotel/)
- **Preview:** [preview.colorlib.com/theme/hotel/](https://preview.colorlib.com/theme/hotel/)
- **Screenshot:** `![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hotel-free-template.jpg)`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `grandstay` (apps/grandstay, @free-react-templates/grandstay)

## Design Tokens (extracted from preview CSS)

| Token              | Value                            | Usage                                      |
| ------------------ | -------------------------------- | ------------------------------------------ |
| Brand gold         | `#AE9548`                        | Buttons, borders, nav arrows, accents      |
| Dark navy          | `#081624`                        | Primary text, headings, check form text    |
| Off-white bg       | `#F7F7F7` / `#F3F3F3`           | Section alternating backgrounds            |
| White              | `#ffffff`                        | Cards, overlays, dropdown menus            |
| Dark charcoal      | `#353535`                        | Navbar bg, carousel nav buttons            |
| Heading font       | `"Taviraj", serif`               | Hero heading, section titles               |
| Body font          | `"Open Sans", sans-serif`        | Body copy, buttons, nav links              |
| Button style       | `border: 2px solid #AE9548`, uppercase, bold, icon-right arrow, radius `50px` pill | Primary CTA |
| Card radius        | `0` (sharp corners)             | Room cards, facility panels                |
| Pill radius        | `50px / 60px`                    | Nav thumbnails, dropdown                   |
| Social icon radius | `50%`                            | Circular social icons                      |

## Section Structure (from live preview DOM)

Page order as rendered on `preview.colorlib.com/theme/hotel/`:

1. **Navbar** — Logo left, nav links right (Home, About, Rooms, Facilities dropdown, News, Contact). Dark charcoal `#353535` background. Dropdown has white bg + gold border.
2. **Hero Slider** — Full-width background image with large serif heading "We hope you'll enjoy your stay." Below: three thumbnail nav cards (Pool, Sauna, Gym) with gold arrow icons.
3. **Room Availability / Check Form** — Two-column layout. Left: room card with image carousel (owl-carousel), title "Junior Suite", price "$252", feature icons (size, guests, bed, view). Right: check availability form with date pickers, room quantity, room type selector, gold-bordered card.
4. **About Room** — Large centered quote "Customers may forget what you said but they will never forget how you made them feel." Below: two-column body text.
5. **Facilities** — Title "Facilities". Two image-text pairs: large image left / text right (Wellness Center), then reversed (Wellness Center again). Gold "Visit Center" CTA button.
6. **Guestbook (Testimonials)** — Tabbed testimonial cards with star ratings, dates, quotes. Three reviews.
7. **Follow Instagram** — Centered heading "Follow us on Instagram @yourhotel" over white background.
8. **Footer Room Pics** — Full-width row of 4 room images.
9. **Footer** — Logo + 4-column info (Location, Reception, Shuttle Service, Restaurant) with Linearicons. Dark background.

## Gherkin Requirements

### Scenario: Navbar renders with correct links
```
Given the user visits GrandStay
Then the navbar shows links: Home, About, Rooms, Facilities, News, Contact
And the Facilities link has a dropdown with: Junior Suit, Double Room, Senior Suit, Single Room
And the navbar background is dark charcoal (#353535)
```

### Scenario: Hero slider displays welcome heading
```
Given the user views the hero section
Then a large serif heading reads "We hope you'll enjoy your stay."
And three navigation thumbnails are shown (Pool, Sauna, Gym)
```

### Scenario: Room availability section shows room card and check form
```
Given the user scrolls to the room availability section
Then a room card displays "Junior Suite" with price "$252"
And the card has feature icons for size, guests, bed type, and view
And a check availability form is shown with date pickers, room quantity, and room type selector
And the form has a gold-bordered card styling
```

### Scenario: About section displays quote and descriptive text
```
Given the user views the about section
Then a centered quote about customer experience is displayed
And two columns of descriptive body text appear below
```

### Scenario: Facilities section shows alternating image-text layout
```
Given the user views the facilities section
Then the heading reads "Facilities"
And two facility items are shown in alternating image-left/text-right layout
And each has a title, description, and gold "Visit Center" CTA button
```

### Scenario: Guestbook section shows tabbed testimonials
```
Given the user views the guestbook section
Then the heading reads "Guestbook"
And three tabbed testimonial cards are available
And each has a date, 5-star rating, title, and review text
```

### Scenario: Instagram section displays social CTA
```
Given the user views the Instagram section
Then the heading reads "Follow us on Instagram @yourhotel"
```

### Scenario: Footer room pics row shows images
```
Given the user scrolls to the footer room pics
Then 4 room images are displayed in a full-width row
```

### Scenario: Footer displays contact information
```
Given the user views the footer
Then four columns are shown: Location, Reception, Shuttle Service, Restaurant
And each has an icon and contact text
And the footer links to Component Dock (https://www.componentdock.com/)
```

## Verification Checklist

- [ ] Section order matches 1:1 with preview DOM
- [ ] Brand color `#AE9548` used for buttons, borders, accents
- [ ] Taviraj serif font for headings, Open Sans for body
- [ ] Pill-shaped buttons with gold border and right-arrow icon
- [ ] Dark charcoal navbar (#353535)
- [ ] Hero with large serif heading + 3 thumbnail nav cards
- [ ] Room card with image carousel, title, price, feature icons
- [ ] Check availability form with gold border
- [ ] About section with centered quote + 2-column text
- [ ] Facilities with alternating image/text layout
- [ ] Guestbook with tabbed testimonials + star ratings
- [ ] Instagram CTA section
- [ ] Footer room pics row (4 images)
- [ ] Footer with 4-column contact info + Component Dock link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Uses picsum.photos placeholder images
- [ ] Uses lucide-react for icons (replace Linearicons/Flaticon)
- [ ] Uses Google Fonts (Taviraj + Open Sans) via index.html link

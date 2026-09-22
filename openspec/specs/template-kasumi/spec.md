# Template: Kasumi (Hotel)

## Purpose

Recreation of ColorLib "Hiroto" — a luxury hotel/resort website template.
- **Source slug:** `hiroto`
- **Source URL:** https://colorlib.com/wp/template/hiroto/
- **Preview URL:** https://preview.colorlib.com/theme/hiroto/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/kasumi`
- **Deploy target:** `kasumi.free.componentdock.com`

## Section Structure (from live preview DOM)

1. **Top Bar** — address + phone (left), login/register + language selector (right)
2. **Navbar** — logo (left), nav links: Home, Rooms, About Us, Pages (dropdown), News, Contact (right), Book Now button
3. **Hero** — full-width background image (`img/hero.jpg`), heading "WELCOME KASUMI", subheading, booking form (Location search, Check In datepicker, Check Out datepicker, Person select, BOOK NOW button)
4. **About** — split 2-col: left text (heading, two paragraphs, signature image), right image
5. **Services** — 6 service cards in 3×2 grid: icon image + title + description (Free Wi-Fi, Premium Pool, Coffee Maker, Bar Wine, TV HD, Restaurant)
6. **Rooms** — 4-column full-width cards with background images, room name, price/day, "Booking Now" link (Deluxe Room × 4)
7. **Testimonials** — 5/7 split: left image, right slider (star rating, quote, author name/avatar), owl-carousel
8. **Why Choose Us** — full-width parallax background, centered CTA section with heading + "Booking Now" button
9. **Gallery** — header row (title + "View Gallery" CTA) + owl-carousel of 4 gallery images
10. **Blog** — "NEWS & EVENT" heading, 3 blog cards in a row (image + category label + title + date + "Read More" link)
11. **Footer** — dark background, 3-col: About (logo + description), Quick Links, Newsletter (email input + Subscribe + social icons), Copyright bar at bottom

## Design Tokens (extracted from style.css)

### Colors
| Token | Value | Usage |
|---|---|---|
| Brand / Primary | `#E9AD28` | Buttons, accents, highlights (25+ occurrences) |
| Dark | `#1d1c1c` / `#19191A` | Text headings, footer background |
| Body Text | `#777C81` | Paragraph text, secondary text |
| White | `#ffffff` | Hero text, button text, card text |
| Light Background | `#F9F8F6` | Light section backgrounds |
| Muted | `#8d8d8d` / `#8B9094` | Helper text, form labels |

### Typography
| Token | Value |
|---|---|
| Headings font | `"Barlow Condensed", sans-serif` |
| Body font | `"DM Sans", sans-serif` |

### Borders & Radii
| Token | Value | Usage |
|---|---|---|
| Default | `2px` | Cards, form elements |
| Circular | `50%` | Avatar circles, icon containers |
| Pill | `60px` | Buttons (some) |

### Buttons
- **Primary:** `background: #E9AD28`, `color: #ffffff`, `font-size: 16px`, `padding: 14px 20px 12px`, `letter-spacing: 2px`
- Rounded pill variant (`border-radius: 60px`) on nav Book Now
- No radius on primary CTA buttons

### Section Backgrounds
- Hero: full-width background image (`hero.jpg`)
- About: white/light background (`#F9F8F6`)
- Services: white
- Rooms: edge-to-edge room images
- Why Choose Us: parallax background image (`chooseus-bg.jpg`) with overlay
- Gallery: carousel images
- Footer: dark (`#19191A`)

## Visual Design (from TEMPLATES.md screenshot)

The ColorLib preview shows a warm, elegant hotel template with:
- Dark navbar with gold/amber accent button
- Large hero with booking search form overlay
- Clean white about section with signature image
- Icon-based services grid
- Full-width room cards with price overlay
- Testimonial slider with star ratings
- Parallax "Why Choose Us" CTA
- Image gallery carousel
- Blog cards with category labels
- Dark footer with newsletter form

## Gherkin Scenarios

### Navbar
```gherkin
Scenario: Top bar displays contact info and auth links
  Given the user visits the homepage
  Then the top bar shows address "96 Ernser Vista Suite 437, NY, US"
  And shows phone "(123) 456-78-910"
  And shows Login and Register links
  And shows a language selector

Scenario: Navbar shows navigation links and Book Now button
  Given the user visits the homepage
  Then the navbar shows links: Home, Rooms, About Us, News, Contact
  And shows a "Book Now" button styled with brand color
```

### Hero
```gherkin
Scenario: Hero section displays booking form
  Given the user visits the homepage
  Then the hero section shows heading "WELCOME KASUMI"
  And shows a subheading about holidays
  And shows a booking form with Location, Check In, Check Out, Person fields
  And shows a "BOOK NOW" submit button

Scenario: Hero has background image
  Given the user visits the homepage
  Then the hero section has a full-width background image
```

### About
```gherkin
Scenario: About section shows hotel info
  Given the user scrolls to the About section
  Then it shows heading "ABOUT US" with h2 subheading
  And shows two paragraphs of description text
  And shows a signature image
  And shows a large photo on the right side
```

### Services
```gherkin
Scenario: Services section displays 6 amenity cards
  Given the user scrolls to the Services section
  Then 6 service cards are displayed in a 3×2 grid
  And each card has an icon image, title, and description
  And the titles are: Free Wi-Fi, Premium Pool, Coffee Maker, Bar Wine, TV HD, Restaurant
```

### Rooms
```gherkin
Scenario: Rooms section shows 4 room cards
  Given the user scrolls to the Rooms section
  Then 4 room cards are displayed in a full-width row
  And each card has a background image, room name, price, and "Booking Now" link
  And the heading says "OUR ROOM" / "Explore Our Hotel"
```

### Testimonials
```gherkin
Scenario: Testimonials section shows customer reviews
  Given the user scrolls to the Testimonials section
  Then a testimonial image is shown on the left
  And a testimonial slider is shown on the right
  And each testimonial has a star rating, quote, and author info
  And the heading says "What do customers say about us?"
```

### Why Choose Us
```gherkin
Scenario: Why Choose Us CTA section
  Given the user scrolls to the Why Choose Us section
  Then a parallax background image is displayed
  And a centered CTA with heading and "Booking Now" button is shown
```

### Gallery
```gherkin
Scenario: Gallery section shows image carousel
  Given the user scrolls to the Gallery section
  Then 4 gallery images are shown in a carousel
  And a "View Gallery" button is displayed
  And the heading says "OUR GALLERY"
```

### Blog
```gherkin
Scenario: Blog section shows 3 recent posts
  Given the user scrolls to the Blog section
  Then 3 blog cards are displayed
  And each card has an image, category label, title, date, and "Read More" link
  And the heading says "NEWS & EVENT" / "From Our Blog"
```

### Footer
```gherkin
Scenario: Footer displays links and newsletter
  Given the user scrolls to the footer
  Then the footer has a dark background
  And shows an About section with logo and description
  And shows Quick Links
  And shows a Newsletter signup form with email input and Subscribe button
  And shows social media icons
  And shows a copyright bar at the bottom
  And the copyright links to Component Dock
```

## Verification Checklist

- [ ] Top bar with address, phone, login/register, language selector
- [ ] Navbar with logo, nav links, Book Now button
- [ ] Hero with background image, heading, booking form
- [ ] About section: split layout, heading, paragraphs, signature, photo
- [ ] Services: 6 cards with icons, titles, descriptions
- [ ] Rooms: 4 full-width cards with images, prices, booking links
- [ ] Testimonials: image + slider with ratings, quotes, authors
- [ ] Why Choose Us: parallax background, CTA heading + button
- [ ] Gallery: carousel of 4 images + View Gallery CTA
- [ ] Blog: 3 cards with images, labels, titles, dates, Read More
- [ ] Footer: dark, about, links, newsletter, social icons, copyright
- [ ] Brand color `#E9AD28` used for all buttons and accents
- [ ] Headings use Barlow Condensed, body uses DM Sans
- [ ] Footer links to Component Dock
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Tailwind theme tokens match extracted colors/fonts

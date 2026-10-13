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

## Requirements

### Navbar

#### Scenario: Top bar displays contact info and auth links

- **GIVEN** the user visits the homepage
- **THEN** the top bar shows address "96 Ernser Vista Suite 437, NY, US"
- **AND** shows phone "(123) 456-78-910"
- **AND** shows Login and Register links
- **AND** shows a language selector

#### Scenario: Navbar shows navigation links and Book Now button

- **GIVEN** the user visits the homepage
- **THEN** the navbar shows links: Home, Rooms, About Us, News, Contact
- **AND** shows a "Book Now" button styled with brand color

### Hero

#### Scenario: Hero section displays booking form

- **GIVEN** the user visits the homepage
- **THEN** the hero section shows heading "WELCOME KASUMI"
- **AND** shows a subheading about holidays
- **AND** shows a booking form with Location, Check In, Check Out, Person fields
- **AND** shows a "BOOK NOW" submit button

#### Scenario: Hero has background image

- **GIVEN** the user visits the homepage
- **THEN** the hero section has a full-width background image

### About

#### Scenario: About section shows hotel info

- **GIVEN** the user scrolls to the About section
- **THEN** it shows heading "ABOUT US" with h2 subheading
- **AND** shows two paragraphs of description text
- **AND** shows a signature image
- **AND** shows a large photo on the right side

### Services

#### Scenario: Services section displays 6 amenity cards

- **GIVEN** the user scrolls to the Services section
- **THEN** 6 service cards are displayed in a 3×2 grid
- **AND** each card has an icon image, title, and description
- **AND** the titles are: Free Wi-Fi, Premium Pool, Coffee Maker, Bar Wine, TV HD, Restaurant

### Rooms

#### Scenario: Rooms section shows 4 room cards

- **GIVEN** the user scrolls to the Rooms section
- **THEN** 4 room cards are displayed in a full-width row
- **AND** each card has a background image, room name, price, and "Booking Now" link
- **AND** the heading says "OUR ROOM" / "Explore Our Hotel"

### Testimonials

#### Scenario: Testimonials section shows customer reviews

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a testimonial image is shown on the left
- **AND** a testimonial slider is shown on the right
- **AND** each testimonial has a star rating, quote, and author info
- **AND** the heading says "What do customers say about us?"

### Why Choose Us

#### Scenario: Why Choose Us CTA section

- **GIVEN** the user scrolls to the Why Choose Us section
- **THEN** a parallax background image is displayed
- **AND** a centered CTA with heading and "Booking Now" button is shown

### Gallery

#### Scenario: Gallery section shows image carousel

- **GIVEN** the user scrolls to the Gallery section
- **THEN** 4 gallery images are shown in a carousel
- **AND** a "View Gallery" button is displayed
- **AND** the heading says "OUR GALLERY"

### Blog

#### Scenario: Blog section shows 3 recent posts

- **GIVEN** the user scrolls to the Blog section
- **THEN** 3 blog cards are displayed
- **AND** each card has an image, category label, title, date, and "Read More" link
- **AND** the heading says "NEWS & EVENT" / "From Our Blog"

### Footer

#### Scenario: Footer displays links and newsletter

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark background
- **AND** shows an About section with logo and description
- **AND** shows Quick Links
- **AND** shows a Newsletter signup form with email input and Subscribe button
- **AND** shows social media icons
- **AND** shows a copyright bar at the bottom
- **AND** the copyright links to Component Dock

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

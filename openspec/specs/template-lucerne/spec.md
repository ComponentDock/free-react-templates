# Template: Lucerne (Hotel Landing)

## Purpose

Recreation of ColorLib "Suites" template.
- **Source slug:** `suites`
- **Source URL:** https://colorlib.com/wp/template/suites/
- **Preview URL:** https://preview.colorlib.com/theme/suites/
- **New name:** `lucerne` (apps/lucerne, @free-react-templates/lucerne)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Category:** Hotel landing page

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand / primary color | `#f23a2e` | Red — used on `text-primary`, form focus, link hovers |
| Body font | `Work Sans` | sans-serif, weights 300/400/700 |
| Heading font | `Playfair Display` | serif, used for logo and hero headings |
| Button radius | `30px` | Pill-shaped via `.btn.pill` |
| Light section bg | `#f8f9fa` | Bootstrap `bg-light`, used on rooms and testimonials |
| Body bg | `#fff` | White default |
| Dark text | `#000` | All headings |
| Body text color | `rgba(0,0,0,0.5)` | Semi-transparent black paragraphs |
| Hotel room price | `#5c7893` | Muted blue-gray for room pricing |
| Hero overlay | `rgba(0,0,0,0.4)` | Dark overlay on hero background images |
| Navbar | transparent → white bg on scroll | Playfair Display logo weight 200 |
| Dropdown bg | `#000` | Black dropdown with white text, 7px border-radius |
| Footer bg | `rgba(0,0,0,0.8)` overlay | Dark overlay on bg image, white/50% text |
| CTA section | parallax bg-image with dark overlay | "Summer Promo 50% Off" banner |
| Testimonial circle | `border-radius: 50%` | Avatar images are circular |
| Section padding | `3em 0` mobile, `7em 0` desktop | Via `.site-section` |

## Section Order (from preview DOM)

1. **Navbar** — Logo "Suites" left (Playfair Display, weight 200), nav links right (Home, Rooms w/ dropdown, Events, About, Contact), transparent bg over hero, sticky on scroll, hamburger on mobile
2. **Hero Slider** — Owl Carousel, 3 full-viewport slides with background images + dark overlay, centered text (h1 + h2 caption), e.g. "Welcome To Suites" / "Hotel & Resort"
3. **Our Rooms** — Light bg (#f8f9fa), centered heading "Our Rooms", 3-column grid × 2 rows = 6 room cards (image + name + price per night), cards: white bg, hover shadow + image zoom
4. **About Us** — Two-column: left has image with play-button overlay (Vimeo popup) + small overlay image; right has heading "About Us", paragraph text, "Watch Video" link with arrow
5. **Hotel Features** — 4-column grid × 2 rows = 8 features (icon + label), e.g. Swimming Pool, Hotel Teller, Fire Exit, Car Parking, Hair Dryer, Minibar, Drinks, Car Airport; icons use `text-primary` (#f23a2e)
6. **Promo Banner** — Parallax background image with dark overlay, "Summer Promo 50% Off" heading + "Avail Now" outlined warning button + countdown timer
7. **Our Gallery** — Centered heading, 2×4 grid of clickable images (lightbox popup), full-width no-gutters layout
8. **Upcoming Events** — Centered heading, Owl Carousel of event cards (image + title + date + excerpt text)
9. **What People Say** — Light bg (#f8f9fa), centered heading, Owl Carousel of testimonial cards (circular avatar + name + blockquote)
10. **Footer** — Dark bg with overlay, 3-column: About description + Quick Menu links + Ministries links + Social Icons, copyright line with Component Dock link

## Requirements

### Feature: Lucerne Hotel Landing Template

#### Scenario: Navbar renders correctly

- **GIVEN** the user visits the Lucerne page
- **THEN** the navbar displays the logo "Lucerne" in Playfair Display font
- **AND** the navbar shows navigation links: Home, Rooms, Events, About, Contact
- **AND** the Rooms link has a dropdown with room types
- **AND** the navbar becomes sticky on scroll with white background
- **AND** a hamburger menu toggle appears on mobile viewports

#### Scenario: Hero slider displays

- **GIVEN** the hero section is visible
- **THEN** a full-viewport image carousel is displayed with 3 slides
- **AND** each slide has a dark overlay (rgba(0,0,0,0.4))
- **AND** each slide shows centered heading text and a caption subtitle
- **AND** slide text includes "Welcome To Lucerne" / "Hotel & Resort"
- **AND** carousel navigation arrows are present

#### Scenario: Our Rooms section

- **GIVEN** the rooms section is visible
- **THEN** the heading "Our Rooms" is displayed centered
- **AND** 6 room cards are shown in a 3-column responsive grid
- **AND** each card has an image, room name, and price per night
- **AND** room names include: Standard Room, Family Room, Single Room, Deluxe Room, Luxury Room, Single Room
- **AND** hovering a card shows a shadow and image zoom effect

#### Scenario: About Us section

- **GIVEN** the About Us section is visible
- **THEN** a two-column layout is displayed
- **AND** the left column shows an image with a play-button overlay for video
- **AND** a small overlapping image is positioned near the main image
- **AND** the right column shows heading "About Us" and descriptive text
- **AND** a "Watch Video" link with arrow icon is shown

#### Scenario: Hotel Features section

- **GIVEN** the hotel features section is visible
- **THEN** the heading "Hotel Features" is displayed centered
- **AND** 8 feature items are shown in a 4-column responsive grid
- **AND** each feature has an icon and a label
- **AND** feature icons use the primary color (#f23a2e)
- **AND** features include: Swimming Pool, Hotel Teller, Fire Exit, Car Parking, Hair Dryer, Minibar, Drinks, Car Airport

#### Scenario: Promo banner section

- **GIVEN** the promo banner section is visible
- **THEN** a parallax background image is displayed with dark overlay
- **AND** the heading "Summer Promo 50% Off" is shown in white
- **AND** an "Avail Now" outlined button is displayed
- **AND** a countdown timer area is present

#### Scenario: Gallery section

- **GIVEN** the gallery section is visible
- **THEN** the heading "Our Gallery" is displayed centered
- **AND** 8 clickable images are shown in a 2×4 grid
- **AND** clicking an image opens a lightbox popup
- **AND** images use full-width no-gutters layout

#### Scenario: Upcoming Events section

- **GIVEN** the events section is visible
- **THEN** the heading "Upcoming Events" is displayed centered
- **AND** event cards are shown in a carousel/slider
- **AND** each event card has an image, title, date, and excerpt text

#### Scenario: Testimonials section

- **GIVEN** the testimonials section is visible
- **THEN** the heading "What People Say" is displayed centered
- **AND** testimonial cards are shown in a carousel/slider
- **AND** each card has a circular avatar, reviewer name, and blockquote
- **AND** the section has light background (#f8f9fa)

#### Scenario: Footer renders

- **GIVEN** the footer is visible
- **THEN** a dark background with overlay is displayed
- **AND** column content includes: About description, Quick Menu links, Ministries/Social links
- **AND** social media icon links are present (Facebook, Twitter, Instagram, Vimeo)
- **AND** a copyright line is shown
- **AND** a "Made with Component Dock" link to https://www.componentdock.com/ is present

#### Scenario: Responsive design

- **GIVEN** the user views the page on mobile (viewport < 768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** room cards stack vertically
- **AND** feature items stack into 2-column then 1-column
- **AND** gallery images stack into 2-column then 1-column
- **AND** the about section stacks vertically
- **AND** section padding reduces from 7em to 3em

#### Scenario: Design tokens applied

- **GIVEN** the page loads
- **THEN** the primary color #f23a2e is used for feature icons and accent links
- **AND** headings use Playfair Display font (logo and hero)
- **AND** body text uses Work Sans font
- **AND** buttons have pill shape (border-radius: 30px)
- **AND** sections alternate between white and #f8f9fa backgrounds
- **AND** dark overlay sections use rgba(0,0,0,0.4)

## Verification Checklist

- [ ] Navbar: sticky, logo in Playfair Display, nav links with dropdown, hamburger on mobile
- [ ] Hero: 3-slide carousel, full-viewport, dark overlay, centered text
- [ ] Our Rooms: 6 room cards in 3-col grid, image + name + price, hover effects
- [ ] About Us: 2-column, image with play overlay, heading, text, Watch Video link
- [ ] Hotel Features: 8 features in 4-col grid, icons in #f23a2e, labels
- [ ] Promo Banner: parallax bg, heading, outlined button, countdown area
- [ ] Gallery: 8 images in 2×4 grid, lightbox popup on click
- [ ] Events: carousel of event cards with image + title + date + excerpt
- [ ] Testimonials: carousel of cards with circular avatar + name + blockquote
- [ ] Footer: dark bg, columns, social icons, copyright, Component Dock link
- [ ] Design tokens: #f23a2e primary, Playfair Display headings, Work Sans body, pill buttons
- [ ] Responsive: all sections adapt to mobile
- [ ] Accessibility: semantic HTML, aria labels, focus rings

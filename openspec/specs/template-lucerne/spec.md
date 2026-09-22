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

## Gherkin Requirements

### Feature: Lucerne Hotel Landing Template

#### Scenario: Navbar renders correctly
- Given the user visits the Lucerne page
- Then the navbar displays the logo "Lucerne" in Playfair Display font
- And the navbar shows navigation links: Home, Rooms, Events, About, Contact
- And the Rooms link has a dropdown with room types
- And the navbar becomes sticky on scroll with white background
- And a hamburger menu toggle appears on mobile viewports

#### Scenario: Hero slider displays
- Given the hero section is visible
- Then a full-viewport image carousel is displayed with 3 slides
- And each slide has a dark overlay (rgba(0,0,0,0.4))
- And each slide shows centered heading text and a caption subtitle
- And slide text includes "Welcome To Lucerne" / "Hotel & Resort"
- And carousel navigation arrows are present

#### Scenario: Our Rooms section
- Given the rooms section is visible
- Then the heading "Our Rooms" is displayed centered
- And 6 room cards are shown in a 3-column responsive grid
- And each card has an image, room name, and price per night
- And room names include: Standard Room, Family Room, Single Room, Deluxe Room, Luxury Room, Single Room
- And hovering a card shows a shadow and image zoom effect

#### Scenario: About Us section
- Given the About Us section is visible
- Then a two-column layout is displayed
- And the left column shows an image with a play-button overlay for video
- And a small overlapping image is positioned near the main image
- And the right column shows heading "About Us" and descriptive text
- And a "Watch Video" link with arrow icon is shown

#### Scenario: Hotel Features section
- Given the hotel features section is visible
- Then the heading "Hotel Features" is displayed centered
- And 8 feature items are shown in a 4-column responsive grid
- And each feature has an icon and a label
- And feature icons use the primary color (#f23a2e)
- And features include: Swimming Pool, Hotel Teller, Fire Exit, Car Parking, Hair Dryer, Minibar, Drinks, Car Airport

#### Scenario: Promo banner section
- Given the promo banner section is visible
- Then a parallax background image is displayed with dark overlay
- And the heading "Summer Promo 50% Off" is shown in white
- And an "Avail Now" outlined button is displayed
- And a countdown timer area is present

#### Scenario: Gallery section
- Given the gallery section is visible
- Then the heading "Our Gallery" is displayed centered
- And 8 clickable images are shown in a 2×4 grid
- And clicking an image opens a lightbox popup
- And images use full-width no-gutters layout

#### Scenario: Upcoming Events section
- Given the events section is visible
- Then the heading "Upcoming Events" is displayed centered
- And event cards are shown in a carousel/slider
- And each event card has an image, title, date, and excerpt text

#### Scenario: Testimonials section
- Given the testimonials section is visible
- Then the heading "What People Say" is displayed centered
- And testimonial cards are shown in a carousel/slider
- And each card has a circular avatar, reviewer name, and blockquote
- And the section has light background (#f8f9fa)

#### Scenario: Footer renders
- Given the footer is visible
- Then a dark background with overlay is displayed
- And column content includes: About description, Quick Menu links, Ministries/Social links
- And social media icon links are present (Facebook, Twitter, Instagram, Vimeo)
- And a copyright line is shown
- And a "Made with Component Dock" link to https://www.componentdock.com/ is present

#### Scenario: Responsive design
- Given the user views the page on mobile (viewport < 768px)
- Then the navbar collapses to a hamburger menu
- And room cards stack vertically
- And feature items stack into 2-column then 1-column
- And gallery images stack into 2-column then 1-column
- And the about section stacks vertically
- And section padding reduces from 7em to 3em

#### Scenario: Design tokens applied
- Given the page loads
- Then the primary color #f23a2e is used for feature icons and accent links
- And headings use Playfair Display font (logo and hero)
- And body text uses Work Sans font
- And buttons have pill shape (border-radius: 30px)
- And sections alternate between white and #f8f9fa backgrounds
- And dark overlay sections use rgba(0,0,0,0.4)

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

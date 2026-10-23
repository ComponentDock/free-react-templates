# Template: PitCrew (Automotive / Garage)

## Purpose

Recreation of the ColorLib **Automotive** template as a single-page React site.

- **Source:** [colorlib.com/wp/template/automotive/](https://colorlib.com/wp/template/automotive/)
- **Preview:** [preview.colorlib.com/theme/automotive/](https://preview.colorlib.com/theme/automotive/)
- **New name:** `pitcrew` (apps/pitcrew, `@free-react-templates/pitcrew`)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Design category:** Automotive / Garage services

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Public Sans", sans-serif` | All text (Google Fonts) |
| Brand / primary | `#5F67FF` | Primary buttons, accent icons, link hover |
| Heading color | `#111111` | All h1–h6 |
| Body text | `#727171` | Paragraph text, line-height 25px |
| Secondary text | `#353535` | Choose-us list items, misc |
| White | `#ffffff` | Hero text, button text, testimonial bg |
| Dark background | `#25282C` | Footer top bar, offcanvas menu |
| Light background | `#f7f7f7` | Product card hovers, general light sections |
| Button radius | `2px` | `.primary-btn` sharp corners (some elements 60px) |
| Button padding | `14px 25px 12px` | `.primary-btn` |
| Button weight | `700` | `.primary-btn` font-weight |
| Hero heading | `60px / 700` | Hero h2 |
| Hero sub-headline | `40px / 400` | Hero h2 span |
| Hero paragraph | `24px` | Hero p |

### Background images (placeholder strategy)

- Hero: dark automotive garage photo → `https://picsum.photos/seed/pitcrew-hero/1920/1080`
- Counter/stats: parallax dark photo → `https://picsum.photos/seed/pitcrew-stats/1920/800`
- Services images: 3 service photos → `https://picsum.photos/seed/pitcrew-svc-1/400/300` (etc.)
- Choose-us image: garage photo → `https://picsum.photos/seed/pitcrew-about/800/600`
- Product images: 4 product photos → `https://picsum.photos/seed/pitcrew-prod-1/400/400` (etc.)
- Blog/latest news images: 3 blog photos → `https://picsum.photos/seed/pitcrew-blog-1/600/400` (etc.)

## Section Structure (in page order)

1. **Header** — Top bar (phone + hours + social icons + map link) + main nav (logo, menu: Home/Services/Shop/Pages/Blog, search + cart icons). Sticky or fixed.
2. **Hero** — Full-width dark background image, centered text: "Welcome To PitCrew Garage" (h2 with small "Welcome To" span above), subtitle paragraph, "Our Services" primary button.
3. **Services** — "What We Do?" section title. 4 alternating text+image cards: Engine Overhaul, Power Steering, Oil Change, Upgrades Car. Each has icon, heading, description. Alternating layout (text-img-img-text pattern on desktop).
4. **Choose Us** — Split layout: left = image with set-bg, right = text with section title "We Have 20 Years Of Experience In Auto Car", bullet list with check icons, "About Us" primary button.
5. **Products** — "Our Products" section title. 4 product cards in a grid: High Flow Fuel, Revolution Wheels, Tone Interior Kit, Matte Gunmetal. Each card has image with hover overlay icons (heart, cart, eye, exchange), name link, price.
6. **Testimonial** — Carousel/slider with quote icons. 3 testimonial items with blockquote text. White background.
7. **Counter / Stats** — Parallax dark background image, "About Our Statistics" section title (white text). 3 counter items with animated numbers: All Project (560), Project Completed (560), Customers Action (560).
8. **Latest News** — "Latest News" section title. 3 blog cards: image, date/author overlay, title, description snippet, "Continue Reading" link.
9. **Footer** — Top bar (dark bg): 3 columns — Booking Repair/Appointment (CTA), Contact phone number, Location/map link. Main footer: about text + "Contact Us" button, Quick Links list, News list, Office address. Bottom bar: copyright.

## Requirements

### Feature: PitCrew Automotive Template

**Background**
- **GIVEN** the user visits the PitCrew homepage
- **THEN** the page loads within 3 seconds
- **AND** all sections render in the correct order

#### Scenario: Header renders with navigation

- **GIVEN** the header is visible
- **THEN** it displays a logo
- **AND** navigation links: Home, Services, Shop, Pages, Blog
- **AND** a phone number "(+123) 4567-7890-123"
- **AND** operating hours "Mon-Sat: 10:00 - 16:00 / Sunday Close"
- **AND** social icons (Facebook, Twitter, Vimeo, Pinterest)
- **AND** a "Find us on map" link

#### Scenario: Hero section displays welcome message

- **GIVEN** the hero section is visible
- **THEN** it shows "Welcome To" as a span above the main heading
- **AND** the main heading reads "PitCrew Garage"
- **AND** a subtitle paragraph is present
- **AND** a "Our Services" primary button links to the services section

#### Scenario: Services section shows four services

- **GIVEN** the services section is visible
- **THEN** the section title reads "What We Do?"
- **AND** 4 service cards are displayed
- **AND** each card has an icon, heading, and description
- **AND** the services are: Engine Overhaul, Power Steering, Oil Change, Upgrades Car
- **AND** cards alternate between text-left/image-right and text-right/image-left on desktop

#### Scenario: Choose Us section shows experience and CTA

- **GIVEN** the choose-us section is visible
- **THEN** it displays a background image on the left half
- **AND** the right half shows a section title about experience
- **AND** a bullet list with check-mark items
- **AND** an "About Us" primary button

#### Scenario: Products section displays product grid

- **GIVEN** the products section is visible
- **THEN** the section title reads "Our Products"
- **AND** 4 product cards are displayed in a grid
- **AND** each card has an image, product name, and price
- **AND** each card shows hover overlay icons (wishlist, cart, quick view, compare)

#### Scenario: Testimonial slider renders quotes

- **GIVEN** the testimonial section is visible
- **THEN** it displays a carousel/slider
- **AND** 3 testimonial items with quote icons
- **AND** each item has a blockquote paragraph
- **AND** carousel dots or arrows allow navigation

#### Scenario: Counter section shows statistics

- **GIVEN** the counter section is visible
- **THEN** it has a parallax background image
- **AND** the section title reads "About Our Statistics"
- **AND** 3 counter items are displayed with animated numbers
- **AND** counter labels are: All Project, Project Completed, Customers Action

#### Scenario: Latest News shows blog cards

- **GIVEN** the latest news section is visible
- **THEN** the section title reads "Latest News"
- **AND** 3 blog cards are displayed
  Each card has an image, date/author overlay, title, snippet, and "Continue Reading" link

#### Scenario: Footer renders all columns

- **GIVEN** the footer is visible
- **THEN** the top bar has dark background with 3 columns: Appointment, Phone, Location
- **AND** the main footer has about text, Quick Links, News, and Office address
- **AND** the bottom bar has a copyright notice
- **AND** the footer links to "https://www.componentdock.com/" branded as "Component Dock"

#### Scenario: Mobile responsive layout

- **GIVEN** the viewport width is less than 768px
- **THEN** the header collapses to a hamburger menu
- **AND** service cards stack vertically
- **AND** product cards stack vertically
- **AND** the choose-us section stacks (image above text)
- **AND** footer columns stack vertically

#### Scenario: Accessibility

- **GIVEN** any section of the page
- **THEN** all images have descriptive alt text
- **AND** interactive elements are keyboard-focusable
- **AND** headings follow a logical hierarchy (h1 > h2 > h3)
- **AND** buttons have accessible labels

## Verification checklist

- [ ] All 9 sections render in correct order
- [ ] Design tokens match: #5F67FF brand, Public Sans font, #25282C dark bg
- [ ] Hero: dark bg image, "Welcome To" span + main heading, CTA button
- [ ] Services: 4 alternating cards with icons, headings, descriptions
- [ ] Choose Us: split layout with image and bullet list
- [ ] Products: 4 product cards with hover overlays
- [ ] Testimonial: carousel with 3 quote items
- [ ] Counter: parallax bg, 3 animated stat counters
- [ ] Latest News: 3 blog cards with date/author overlay
- [ ] Footer: 3-column top bar, about/links/news/address, Component Dock link
- [ ] Mobile responsive: hamburger nav, stacked layouts
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos
- [ ] Google Font "Public Sans" loaded via index.html link
- [ ] 100% test coverage

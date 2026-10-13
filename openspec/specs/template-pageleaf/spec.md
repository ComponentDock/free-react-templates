# Template: PageLeaf (Book Landing Page)

## Purpose

PageLeaf is a single-page book landing and author promotional page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Book" free template (source:
https://colorlib.com/wp/template/book/), built under a DIFFERENT name
(**PageLeaf**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 single-page template for promoting a book,
with a gradient hero banner, about section, features header, animated
counters, pricing cards, course carousel, app download CTA, testimonial
carousel, and a 3-column footer. It uses Poppins font, an orange-to-red
gradient (`#f45622` → `#f53e54`) as the primary brand treatment, and
pill-shaped buttons (`border-radius: 25px`).

**Preview:** https://preview.colorlib.com/theme/book/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/book-free-template.jpg

## Design tokens

| Token | Value | Source |
|---|---|---|
| Brand gradient | `linear-gradient(90deg, #f45622 0%, #f53e54 100%)` | `.primary-btn`, `.banner-area`, `.call-to-action-area`, footer social hover |
| Brand orange | `#f45622` | Gradient start |
| Brand red | `#f53e54` / `#f53f51` | Gradient end |
| Accent cyan | `#4cd3e3` | Secondary accent |
| Accent yellow | `#f4e700` | Secondary accent |
| Text dark | `#222222` | Headings, body text |
| Text muted | `#777777` | Subtitles, descriptions |
| Background light | `#f9f9ff` | Section backgrounds |
| Background white | `#ffffff` | Cards, main content |
| Overlay dark | `rgba(0, 0, 0, 0.65)` | Banner, fact-area overlay |
| Font heading/body | `Poppins`, sans-serif | All text elements |
| Button radius | `25px` (pill shape) | `.primary-btn` |
| Button padding | `padding-left: 30px; padding-right: 60px` | `.primary-btn` |

## Section order (from live preview DOM)

1. **Navbar** — fixed/sticky nav, brand "PageLeaf.", nav links: Home, About, Fact, Price, Course. CTA button "Buy Now for $9.99" (gradient pill)
2. **Hero Banner** — full-width gradient background (`#f45622` → `#f53e54`), centered content: "Author: Travor James" subheading, author name heading, "Buy Now for $9.99" pill CTA button
3. **About** — split: left = author image, right = heading "Dr. Travor James" + bio paragraphs + signature image
4. **Features** — "Some Features that Made us Unique" heading on a dark overlay background image (parallax-style `fact-bg.jpg`)
5. **Counter** — 4 stat counters: Happy Clients (2536), Total Projects (6784), Cups Coffee (1059), Tickets Submitted (12239)
6. **Pricing** — "Purchase whatever you want" heading, 3 pricing cards: PDF ($79.99), E-Book ($99.99), Print Copy ($59.99). Each card has a top section with format name, description, and a bottom section with price and "Purchase Now" pill button
7. **Courses** — "Top Courses That are open for Students" heading, carousel of 3 course cards with images, "For Sale" badge, title "Breakthrough Thinking", price "$25", description
8. **CTA** — gradient background (`#f45622` → `#f53e54`), "Download Our App for all Platforms" white heading, description text, App Store + Google Play download buttons with Apple/Android icons
9. **Testimonials** — "What our Reader's Say about us" heading, carousel of testimonial cards with avatar image, quote text, name "Mark Alviro Wiens", position "CEO at Google"
10. **Footer** — 3 columns: About Us (brand blurb + copyright), Newsletter (email subscription form), Follow Us (social icons: Facebook, Twitter, etc.)

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Renders navigation bar

- **GIVEN** the page loads
- **THEN** a navigation bar is visible at the top
- **AND** the brand name "PageLeaf" is displayed
- **AND** 5 navigation links are present: Home, About, Fact, Price, Course
- **AND** a "Buy Now for $9.99" gradient pill button is displayed

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is mobile width
- **THEN** a hamburger toggle button is visible
- **AND** clicking it expands/collapses the navigation links

### Hero Banner

Feature: Hero Banner

#### Scenario: Renders hero banner

- **GIVEN** the page loads
- **THEN** a full-width gradient banner (#f45622 to #f53e54) is displayed
- **AND** "Author: Travor James" subheading is shown
- **AND** a "Buy Now for $9.99" CTA pill button is visible
- **AND** the banner spans the full viewport width

### About Section

Feature: About Section

#### Scenario: Renders about content

- **GIVEN** the page loads
- **THEN** the About section is displayed with id "about"
- **AND** an author image is shown on the left half
- **AND** "Dr. Travor James" heading is displayed on the right
- **AND** bio paragraphs are present
- **AND** a signature image is shown below the bio

### Features Section

Feature: Features Section

#### Scenario: Renders features header

- **GIVEN** the page loads
- **THEN** a "Some Features that Made us Unique" heading is displayed
- **AND** the section has a dark overlay on a background image
- **AND** the section id is "fact"

### Counter Section

Feature: Counter Section

#### Scenario: Renders animated counters

- **GIVEN** the page loads
- **THEN** 4 stat counters are shown: Happy Clients (2536), Total Projects (6784), Cups Coffee (1059), Tickets Submitted (12239)
- **AND** counters animate from 0 to their target values on scroll

### Pricing Section

Feature: Pricing Section

#### Scenario: Renders pricing cards

- **GIVEN** the page loads
- **THEN** a "Purchase whatever you want" heading is displayed
- **AND** 3 pricing cards are shown: PDF ($79.99), E-Book ($99.99), Print Copy ($59.99)
- **AND** each card has a "Purchase Now" gradient pill button
- **AND** the section id is "price"

#### Scenario: Pricing card layout

- **GIVEN** the page loads
- **THEN** each pricing card shows the format name, description, and price
- **AND** the price is displayed prominently with a dollar sign

### Courses Section

Feature: Courses Section

#### Scenario: Renders course carousel

- **GIVEN** the page loads
- **THEN** a "Top Courses That are open for Students" heading is displayed
- **AND** a carousel of 3 course cards is shown
- **AND** each card has an image, "For Sale" badge, title, price, and description
- **AND** the section id is "course"

### Call-to-Action Section

Feature: Call-to-Action Section

#### Scenario: Renders app download CTA

- **GIVEN** the page loads
- **THEN** a gradient background CTA section is displayed
- **AND** "Download Our App for all Platforms" white heading is shown
- **AND** App Store and Google Play download buttons are visible
- **AND** Apple and Android icons are displayed

### Testimonials Section

Feature: Testimonials Section

#### Scenario: Renders testimonial carousel

- **GIVEN** the page loads
- **THEN** a "What our Reader's Say about us" heading is displayed
- **AND** a carousel of testimonial cards is shown
- **AND** each card has an avatar, quote text, name, and position
- **AND** navigation dots allow cycling through testimonials

### Footer

Feature: Footer

#### Scenario: Renders footer

- **GIVEN** the page loads
- **THEN** a 3-column footer is displayed
- **AND** an "About Us" column with brand blurb is shown
- **AND** a "Newsletter" column with email subscription form is present
- **AND** a "Follow Us" column with social media icons is displayed
- **AND** a "Made with Component Dock" attribution is shown (replacing Colorlib link)

## Verification checklist

- [ ] Navbar with 5 links, mobile hamburger, gradient CTA button
- [ ] Hero: gradient background, author subheading, CTA pill button
- [ ] About: split image + text, author name heading, signature
- [ ] Features: heading on dark overlay background
- [ ] Counter: 4 animated counters with correct target numbers
- [ ] Pricing: 3 cards with format names, prices, pill buttons
- [ ] Courses: carousel of 3 cards with images, badges, prices
- [ ] CTA: gradient bg, white heading, App Store + Google Play buttons
- [ ] Testimonials: carousel with avatar, quote, name, position
- [ ] Footer: 3 columns (About, Newsletter, Social), Component Dock attribution
- [ ] Font: Poppins used throughout
- [ ] Brand gradient #f45622 → #f53e54 used consistently
- [ ] Pill-shaped buttons (border-radius: 25px)
- [ ] Footer uses https://www.componentdock.com/ link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Builds and passes lint/typecheck

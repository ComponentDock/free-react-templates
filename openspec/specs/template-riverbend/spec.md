# Template: Riverbend (Hotel / Luxury Resort)

## Purpose

Recreation of ColorLib's **The River** hotel/resort template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/theriver/
- **Preview (analyzed):** https://preview.colorlib.com/theme/theriver/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/theriver-free-template.jpg
- **Package:** `@free-react-templates/riverbend`
- **Surge target:** `https://riverbend.free.componentdock.com`

## Design Tokens

Extracted from the preview's `styles/main_styles.css`:

| Token             | Value                                          | Usage                                        |
| ----------------- | ---------------------------------------------- | -------------------------------------------- |
| Brand / accent    | `#ffa37b`                                      | Buttons, links, hover states, newsletter CTA |
| Footer background | `#0f0e24`                                      | Dark navy footer                             |
| Body text         | `#6d6d6d`                                      | Paragraph copy                               |
| Dark text         | `#121212`                                      | Headings, strong text                        |
| Light text        | `#ffffff`                                      | Hero overlay text, footer text               |
| Star rating       | `#db5246`                                      | Review stars (secondary red)                 |
| Font family       | `Raleway, sans-serif`                          | Global body + headings                       |
| Button radius     | `0` (flat/rectangular)                         | All buttons: no border-radius                |
| Button size       | `152px × 54px`                                 | Book Online, Booking, Newsletter buttons     |
| Button hover      | `rgba(255,255,255,0.2)` → text turns `#ffa37b` | Ghost-style hover on header/booking buttons  |
| Hero overlay      | `rgba(0,0,0,0.7)`                              | Dark semi-transparent overlay on hero slides |

## Section Structure (order from preview DOM)

1. **Header** — fixed top: logo ("The River"), main nav (Home, About us, Rooms, Blog, Contact), "Book Online" button (peach bg), phone number with icon, hamburger for mobile
2. **Hero / Home** — full-viewport-height slider (owl-carousel) with parallax background images. Centered text "A Luxury Stay". Inline booking form: Check in / Check out (datepicker), Children, Room inputs, "SEARCH" button
3. **Features** — 3-column icon boxes (Fabulous Resort, Infinity Pool, Relaxing Spa) with SVG icons + title + paragraph, centered text
4. **Gallery** — carousel of property images with overlay hover effect (colorbox lightbox)
5. **About** — 2-column: left = title "The River / 10 years of excellence" + paragraph; right = 3 small property images in a flex row
6. **Testimonials** — parallax background, overlay, slider with star rating (5 stars), title link, paragraph, user avatar + author name + location
7. **Book a Room** — centered title + paragraph, 3-column carousel of room cards (Family Room, Deluxe Room, Single Room) with background image, overlay, price ($120/Night), and link
8. **Blog** — full-width carousel of blog posts with background images, date badge, and title overlay
9. **Footer** — dark background (#0f0e24), centered logo + "since 1945", 4-column row: Our Address | Reservations | Newsletter (email input + Subscribe button) | Certificates (2 badge images), copyright line

## Requirements

### Feature: Header

#### Scenario: Logo and navigation display

- **GIVEN** the user is on any page
- **THEN** the logo "Riverbend" is visible in the header
- **AND** navigation links "Home", "About us", "Rooms", "Blog", "Contact" are visible

#### Scenario: Book Online button

- **GIVEN** the user sees the header
- **THEN** a "Book Online" button with peach background is displayed

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is mobile width (< 768px)
- **THEN** the hamburger menu icon is visible
- **AND** clicking it opens a slide-in mobile menu with all nav links

### Feature: Hero Section

#### Scenario: Hero slider displays

- **GIVEN** the user lands on the page
- **THEN** a full-viewport-height hero slider is displayed
- **AND** the heading "A Luxury Stay" is centered over the slider

#### Scenario: Booking form in hero

- **GIVEN** the hero section is visible
- **THEN** a booking form with inputs for Check in, Check out, Children, and Room is displayed
- **AND** a "SEARCH" button is visible

#### Scenario: Hero auto-slides

- **GIVEN** the hero slider is loaded
- **THEN** slides advance automatically at regular intervals
- **AND** navigation dots are clickable to jump to slides

### Feature: Features Section

#### Scenario: Three feature icons display

- **GIVEN** the user scrolls past the hero
- **THEN** three icon boxes appear in a row
- **AND** each has an icon, title ("Fabulous Resort", "Infinity Pool", "Relaxing Spa"), and description paragraph

### Feature: Gallery Section

#### Scenario: Gallery carousel displays

- **GIVEN** the user scrolls to the gallery
- **THEN** a horizontal carousel of property images is displayed
- **AND** images respond to hover with an overlay effect

### Feature: About Section

#### Scenario: About content displays

- **GIVEN** the user scrolls to the about section
- **THEN** a title "Riverbend / 10 years of excellence" is shown
- **AND** a descriptive paragraph is visible
- **AND** three property images are displayed in a row on the right

### Feature: Testimonials Section

#### Scenario: Testimonial slider displays

- **GIVEN** the user scrolls to the testimonials
- **THEN** a parallax background is visible
- **AND** testimonial slides show star ratings (5 stars), a title, text, user avatar, and author name with location

#### Scenario: Testimonials rotate

- **GIVEN** the testimonials section is loaded
- **THEN** slides rotate automatically
- **AND** navigation dots are available

### Feature: Book a Room Section

#### Scenario: Room cards display

- **GIVEN** the user scrolls to the booking section
- **THEN** a "Book a room" heading and paragraph are shown
- **AND** three room cards are displayed (Family Room, Deluxe Room, Single Room)
- **AND** each card shows a background image, price ("$120/Night"), and a link

### Feature: Blog Section

#### Scenario: Blog carousel displays

- **GIVEN** the user scrolls to the blog section
- **THEN** a full-width carousel of blog posts is shown
- **AND** each post has a background image, date, and title

### Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the user scrolls to the footer
- **THEN** the logo, "since 1945" text are centered at the top
- **AND** four columns are shown: Our Address, Reservations, Newsletter, Certificates

#### Scenario: Newsletter form

- **GIVEN** the footer is visible
- **THEN** an email input with placeholder "Your email address" is displayed
- **AND** a "Subscribe" button is present

#### Scenario: Footer links

- **GIVEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification checklist

- [ ] All sections present in correct order matching preview DOM
- [ ] Brand color `#ffa37b` applied to buttons, links, and accent elements
- [ ] Font Raleway applied globally
- [ ] All buttons flat (no border-radius)
- [ ] Hero is full viewport height with dark overlay
- [ ] Booking form has 4 inputs + search button
- [ ] Features section has 3 icon boxes in a row
- [ ] Gallery is a carousel with hover overlays
- [ ] Testimonials have parallax background, star ratings, avatar images
- [ ] Room cards show price + background image + link
- [ ] Blog is a full-width carousel
- [ ] Footer is dark (#0f0e24) with 4 columns
- [ ] Newsletter form in footer with email + subscribe button
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders (deterministic seeds)
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] 100% test coverage

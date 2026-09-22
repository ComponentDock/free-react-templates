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

## Gherkin Requirements

### Feature: Header

Scenario: Logo and navigation display
Given the user is on any page
Then the logo "Riverbend" is visible in the header
And navigation links "Home", "About us", "Rooms", "Blog", "Contact" are visible

Scenario: Book Online button
Given the user sees the header
Then a "Book Online" button with peach background is displayed

Scenario: Mobile hamburger menu
Given the viewport is mobile width (< 768px)
Then the hamburger menu icon is visible
And clicking it opens a slide-in mobile menu with all nav links

### Feature: Hero Section

Scenario: Hero slider displays
Given the user lands on the page
Then a full-viewport-height hero slider is displayed
And the heading "A Luxury Stay" is centered over the slider

Scenario: Booking form in hero
Given the hero section is visible
Then a booking form with inputs for Check in, Check out, Children, and Room is displayed
And a "SEARCH" button is visible

Scenario: Hero auto-slides
Given the hero slider is loaded
Then slides advance automatically at regular intervals
And navigation dots are clickable to jump to slides

### Feature: Features Section

Scenario: Three feature icons display
Given the user scrolls past the hero
Then three icon boxes appear in a row
And each has an icon, title ("Fabulous Resort", "Infinity Pool", "Relaxing Spa"), and description paragraph

### Feature: Gallery Section

Scenario: Gallery carousel displays
Given the user scrolls to the gallery
Then a horizontal carousel of property images is displayed
And images respond to hover with an overlay effect

### Feature: About Section

Scenario: About content displays
Given the user scrolls to the about section
Then a title "Riverbend / 10 years of excellence" is shown
And a descriptive paragraph is visible
And three property images are displayed in a row on the right

### Feature: Testimonials Section

Scenario: Testimonial slider displays
Given the user scrolls to the testimonials
Then a parallax background is visible
And testimonial slides show star ratings (5 stars), a title, text, user avatar, and author name with location

Scenario: Testimonials rotate
Given the testimonials section is loaded
Then slides rotate automatically
And navigation dots are available

### Feature: Book a Room Section

Scenario: Room cards display
Given the user scrolls to the booking section
Then a "Book a room" heading and paragraph are shown
And three room cards are displayed (Family Room, Deluxe Room, Single Room)
And each card shows a background image, price ("$120/Night"), and a link

### Feature: Blog Section

Scenario: Blog carousel displays
Given the user scrolls to the blog section
Then a full-width carousel of blog posts is shown
And each post has a background image, date, and title

### Feature: Footer

Scenario: Footer layout
Given the user scrolls to the footer
Then the logo, "since 1945" text are centered at the top
And four columns are shown: Our Address, Reservations, Newsletter, Certificates

Scenario: Newsletter form
Given the footer is visible
Then an email input with placeholder "Your email address" is displayed
And a "Subscribe" button is present

Scenario: Footer links
Given the footer is visible
Then a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification Checklist

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

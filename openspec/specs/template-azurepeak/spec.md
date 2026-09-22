# Template: AzurePeak (Luxury Hotel / Resort)

## Purpose

AzurePeak is a single-page luxury hotel/resort landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Grand Azure" hotel design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original design is a premium oceanfront hotel page with a full-viewport
hero, booking form, stats bar, rooms showcase, amenities grid, dining venues,
photo gallery, testimonials, FAQ accordion, and a newsletter CTA — all on a
dark/light theme with serif headings (Playfair Display) and sans-serif body
(Plus Jakarta Sans).

## Design reference (replication findings)

- **Original:** ColorLib "The Grand Azure" — free hotel template
  (source: https://colorlib.com/wp/template/the-grand-azure/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/grandazure/`
  (HTTP 200) + stylesheet `_astro/Base.CVaHg8hR.css`. The preview slug is
  `grandazure` (not `the-grand-azure`). The screenshot at
  `https://colorlib.com/wp/wp-content/uploads/sites/2/grandazure-template-1771943856380.jpg`
  confirms the visual design.
- **Section order (1:1):**
  1. **Navbar** — sticky top, white/80 bg, backdrop-blur-lg, border-b
     border-gray-200. Logo text left, nav links center (Rooms, Amenities,
     Dining, Gallery, Testimonials, FAQ), CTA button right. Mobile hamburger
     menu.
  2. **Hero** — full-viewport (min-h-screen), ocean background image with dark
     gradient overlay (from-primary-900/70 via-primary-900/50 to-primary-900/80).
     Centered: decorative accent line (bg-accent-400, h-px, w-16), heading
     "Experience" + "Luxury" (Playfair Display, white, 7xl on lg), subheading
     "oceanfront resort where luxury meets tranquility". Below: glass-morphism
     booking form (bg-primary-900/60, backdrop-blur-md, rounded-2xl) with
     fields: check-in, check-out, guests, rooms, and "Check Availability"
     button. Bouncing arrow at bottom.
  3. **Stats Bar** — border-y border-gray-200, bg-gray-50, 4-column grid.
     Stats: "5+" (Years of Excellence), "10000+" (Happy Guests), "150+"
     (Luxury Rooms), "25+" (Awards Won). Numbers in text-4xl/5xl bold
     primary-600; labels in text-sm gray-600.
  4. **Rooms & Suites** — dark:bg-gray-950. Heading "Rooms & Suites" with
     accent badge (bg-accent-100). 3-column grid of room cards: each card
     has overflow-hidden rounded-2xl bg-white shadow-lg, image (h-64,
     object-cover), price badge (bg-accent-500, white text, rounded-full),
     title (h3, text-xl, font-bold), description, amenity icons (Guests,
     Bed, Size) with text-sm gray-500. Cards: Deluxe Ocean Room, Premium
     Suite, Presidential Villa.
  5. **Amenities** — bg-gray-50. Heading "World-Class Amenities". 3×2 grid of
     amenity cards with icon (colored bg circle), title, description. Items:
     Infinity Pool, Full-Service Spa, Fine Dining, Fitness Center, Private
     Beach, Concierge.
  6. **Dining** — dark:bg-gray-950. Heading "Culinary Excellence". 3-column
     grid of venue cards: image, title, description. Venues: The Azure,
     Coral Bar, Sunrise Cafe.
  7. **Gallery** — bg-gray-50. Heading "A Glimpse of Paradise". Image grid
     (masonry-like layout).
  8. **Testimonials** — dark:bg-gray-950. Heading "What Our Guests Say".
     Cards with star ratings, quote text, author name/role. 3 testimonials.
  9. **FAQ** — bg-white dark:bg-gray-950. Heading "Frequently Asked
     Questions". Accordion with expand/collapse per question.
  10. **CTA** — bg-gradient-to-br from-primary-700 to-primary-900, centered.
      Heading "Make Your Stay Extraordinary" (white), subtext, email input +
      "Subscribe" button (white bg, primary text).
  11. **Footer** — bg-gray-900, text-gray-300. Logo + description, Quick Links
      column, Contact Info column, Connect column (social icons). Bottom bar
      with copyright + Component Dock link. Social: Facebook, Instagram, X.

- **Design tokens extracted from the stylesheet:**
  - Primary brand color: **#1e40af** (blue-800) — buttons, stat numbers,
    gradient stops, focus rings.
  - Primary dark: **#1e3a8a** (blue-900) — gradient endpoint.
  - Primary light: **#60a5fa** (blue-400) — gradient start, dark-mode accents.
  - Accent color: **#f59e0b** (amber-500) — price badges, decorative line,
    star ratings, shadows.
  - Accent hover: **#fbbf24** (amber-400) — borders, hover states.
  - Body font: **"Plus Jakarta Sans"** via Google Fonts (weights 300–800).
  - Heading font: **"Playfair Display"** via Google Fonts (weights 400–800),
    used on h1–h6 only.
  - Card radius: **rounded-2xl** (0.75rem → 1rem depending on utility).
  - Button radius: **rounded-lg** (0.5rem).
  - Badge radius: **rounded-full** (9999px).
  - Card shadow: **shadow-lg** with hover → shadow-xl transition.
  - Section backgrounds: alternating white / gray-50 (#f9fafb) / dark
    (gray-950 #030712) pattern.
  - CTA gradient: from-primary-700 (#1e3a8a) to-primary-900 (#0f172a).
  - Glass morphism on booking form: bg-primary-900/60, backdrop-blur-md.
  - Full dark mode support via Tailwind `dark:` variants.

## Requirements

### Requirement: Navigation bar

**Scenario: Desktop navbar renders with all links and CTA**
  - GIVEN the user is on a desktop viewport (≥1024px)
  - WHEN the page loads
  - THEN a sticky top navbar is visible with backdrop blur
  - AND the logo text "AzurePeak" is displayed on the left
  - AND navigation links for Rooms, Amenities, Dining, Gallery, Testimonials,
    FAQ are displayed in the center
  - AND a "Book Now" CTA button is displayed on the right
  - AND the navbar has a subtle bottom border

**Scenario: Mobile navbar shows hamburger menu**
  - GIVEN the user is on a mobile viewport (<1024px)
  - WHEN the page loads
  - THEN a hamburger menu icon is visible
  - AND clicking it toggles a slide-down mobile nav with all links
  - AND clicking a link closes the mobile nav

**Scenario: Navbar dark mode toggle**
  - GIVEN dark mode is toggled
  - WHEN the navbar re-renders
  - THEN the background becomes dark (bg-gray-950/80) with dark border
  - AND text/link colors adapt to light-on-dark

### Requirement: Hero section with booking form

**Scenario: Hero displays background image and heading**
  - GIVEN the user views the page
  - WHEN the hero section loads
  - THEN a full-viewport section with ocean background image is visible
  - AND a gradient overlay (primary-900 tones) covers the image
  - AND the heading "Experience Luxury" is centered in white serif font
  - AND a subheading about oceanfront resort is displayed below

**Scenario: Booking form fields render correctly**
  - GIVEN the hero section is visible
  - WHEN the user inspects the booking form
  - THEN four input fields are displayed: check-in date, check-out date,
    guests count, rooms count
  - AND a "Check Availability" button is visible
  - AND the form has a glass-morphism appearance (blurred, semi-transparent)

**Scenario: Booking form is responsive**
  - GIVEN the user is on a mobile viewport
  - WHEN the booking form renders
  - THEN fields stack vertically
  - AND the submit button spans full width

### Requirement: Stats bar

**Scenario: Stats section displays four metrics**
  - GIVEN the user scrolls past the hero
  - WHEN the stats section is visible
  - THEN four stats are displayed in a horizontal grid: Years (5+), Happy
    Guests (10000+), Luxury Rooms (150+), Awards (25+)
  - AND stat numbers are in the primary brand color (blue)
  - AND stat labels are in muted gray text

### Requirement: Rooms and suites section

**Scenario: Room cards display with images, prices, and details**
  - GIVEN the user views the Rooms & Suites section
  - WHEN the section loads
  - THEN three room cards are displayed in a 3-column grid
  - AND each card has an image, price badge, room name, description, and
    amenity icons (guests, bed type, size)
  - AND cards have rounded corners and shadow with hover elevation effect
  - AND price badges are accent-colored (amber) with white text

**Scenario: Room cards are responsive**
  - GIVEN the user is on a mobile viewport
  - WHEN the rooms section renders
  - THEN cards stack vertically in a single column

### Requirement: Amenities section

**Scenario: Six amenities display in a grid**
  - GIVEN the user views the Amenities section
  - WHEN the section loads
  - THEN six amenity cards are displayed in a 3×2 grid
  - AND each card has an icon, title, and short description
  - AND amenities include: Infinity Pool, Full-Service Spa, Fine Dining,
    Fitness Center, Private Beach, Concierge

### Requirement: Dining section

**Scenario: Three dining venues display**
  - GIVEN the user views the Dining section
  - WHEN the section loads
  - THEN three venue cards are displayed in a 3-column grid
  - AND each card has an image, venue name, and description
  - AND venues are: The Azure, Coral Bar, Sunrise Cafe

### Requirement: Gallery section

**Scenario: Photo gallery displays in a grid**
  - GIVEN the user views the Gallery section
  - WHEN the section loads
  - THEN a grid of placeholder images is displayed
  - AND images use placeholder URLs (picsum.photos with deterministic seeds)
  - AND the section heading reads "A Glimpse of Paradise"

### Requirement: Testimonials section

**Scenario: Guest testimonials display with ratings**
  - GIVEN the user views the Testimonials section
  - WHEN the section loads
  - THEN three testimonial cards are displayed
  - AND each card has star ratings, a quote, and author name/role
  - AND the section heading reads "What Our Guests Say"

### Requirement: FAQ section

**Scenario: FAQ accordion renders and toggles**
  - GIVEN the user views the FAQ section
  - WHEN the section loads
  - THEN multiple FAQ items are displayed in an accordion
  - AND each item has a question header and collapsed answer
  - AND clicking a question toggles the answer visibility
  - AND only one answer is expanded at a time (or multiple, per design)

### Requirement: CTA / newsletter section

**Scenario: CTA section displays email signup**
  - GIVEN the user scrolls to the CTA section
  - WHEN the section is visible
  - THEN a gradient background (primary-700 to primary-900) is displayed
  - AND the heading "Make Your Stay Extraordinary" is in white
  - AND an email input and "Subscribe" button are centered

### Requirement: Footer

**Scenario: Footer renders with links and social icons**
  - GIVEN the page loads
  - WHEN the user scrolls to the footer
  - THEN a dark footer (bg-gray-900) is displayed
  - AND the site logo/description, Quick Links, Contact Info, and Connect
    columns are visible
  - AND social icons (Facebook, Instagram, X) are displayed
  - AND a copyright line and "Component Dock" link are at the bottom

### Requirement: Dark mode

**Scenario: Dark mode toggle switches all sections**
  - GIVEN the user clicks the dark mode toggle
  - WHEN dark mode activates
  - THEN all sections render with dark backgrounds and light text
  - AND cards use dark surfaces (bg-gray-900) with light text
  - AND the toggle persists across page reloads (localStorage)

### Requirement: Responsive design

**Scenario: Page is fully responsive**
  - GIVEN the user views the page on any viewport (mobile, tablet, desktop)
  - WHEN the page renders
  - THEN all sections adapt: grids collapse to fewer columns, text scales
    down, navigation switches to mobile menu, booking form stacks vertically

## Verification checklist

- [ ] Navbar: sticky, backdrop blur, all nav links, CTA, mobile hamburger
- [ ] Hero: full-viewport, background image, gradient overlay, heading, booking form
- [ ] Booking form: 4 fields + submit, glass-morphism, responsive stack
- [ ] Stats bar: 4 metrics in grid, primary blue numbers
- [ ] Rooms: 3 cards, images, price badges, amenity icons, hover effects
- [ ] Amenities: 6 cards in 3×2 grid, icons, titles, descriptions
- [ ] Dining: 3 venue cards, images, names, descriptions
- [ ] Gallery: image grid with placeholder URLs
- [ ] Testimonials: 3 cards, star ratings, quotes, authors
- [ ] FAQ: accordion with toggle behavior
- [ ] CTA: gradient bg, heading, email input, subscribe button
- [ ] Footer: dark bg, 4 columns, social icons, Component Dock link
- [ ] Dark mode: toggle works, all sections adapt, persists in localStorage
- [ ] Responsive: all sections collapse gracefully on mobile
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage (Vitest + Testing Library)

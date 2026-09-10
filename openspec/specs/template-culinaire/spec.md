# Template: Culinaire (Restaurant — Hero Banner, Food Menu, Testimonials, Contact, Footer)

## Purpose

Culinaire is a full-page restaurant website template in the free-react-templates
monorepo. It is a React recreation of the ColorLib free "Buri" restaurant
website template (source: https://colorlib.com/wp/template/buri/, preview:
https://preview.colorlib.com/theme/buri/), built under a DIFFERENT name
(Culinaire — French for "culinary/cooking," continuing the restaurant theme)
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

New name **culinaire** is a single lowercase word, kebab-case-compatible,
differs from the ColorLib source slug (`buri`), and collides with nothing in
`apps/`, `openspec/specs/`, or `docs/templates/` (checked against
origin/main). Culinaire lives in `apps/culinaire` and uses shared components
from `packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Buri" — a RESTAURANT website template with a hero
  banner (full-width background image with heading + subtitle + CTA button),
  about section (2-column: text left, image right, overlapping the banner),
  food menu section (2-column grid of 6 menu items, each with image + name +
  description + price), intro video background section (parallax/dark bg with
  play button), testimonials/review carousel section, contact section
  (background image with white card overlay showing address, hours,
  reservation info), and footer (dark background with logo/contact info,
  quick links, newsletter signup form, copyright bar). Multi-page template
  (Home, About, Menu, Blog, Contact, Elements pages) — we implement only
  the HOME page.

- **Preview URL analyzed:** `https://preview.colorlib.com/theme/buri/`
  (HTTP 200, fetched 2026-09-10). HTML structure:
  - `<header class="main_menu home_menu">` — sticky navbar with logo image,
    hamburger toggler, nav links (Home, About, Menu, Blog dropdown, Pages
    dropdown, Contact), social icons (Facebook, Instagram) on right
  - `<section class="banner_part">` — 1080px hero with background image
    (`img/banner_bg.png`), text aligned left (col-lg-7): subtitle "Expensive
    but the best", heading "Modern restaurant in center of the city", CTA
    button `.btn_1` "book a table"
  - `<section class="about_part">` — overlapping banner by -250px margin-top,
    white bg, 2-column: left (col-lg-7) has h5 "about us", h2 "Delicious food
    provider since 1990", two paragraphs, `.btn_3` "learn More"; right
    (col-lg-5) has `img/about.png`
  - `<section class="food_menu">` — centered section title (h5 "Popular Menu",
    h2 "Delicious Food Menu"), 2-column grid (col-sm-6) of 6 `.single_food_item`
    entries: image on left, text (h3 name, p description, h5 price) on right.
    Items: Pork Sandwich, Roasted Marrow, Summer Cooking, Easter Delight,
    Tiener Schnitze, Chicken Roast — all "From $40.00"
  - `<section class="intro_video_bg">` — dark background image
    (`img/intro_video_bg.png`), centered play button (`.ti-control-play` icon)
    linking to a YouTube video (popup)
  - `<section class="review_part section_padding">` — section title (h5
    "Testimonials", h2 "What they said"), owl-carousel of 3 testimonial cards,
    each with: quote text, client image, client name, 5-star rating icons
  - `<section class="contact_part section_padding">` — background image
    (`img/contact_bg.png`), white card overlay (`.contact_part_iner`), heading
    "Contact Us", 3 `.single_contact_part` blocks: address (icon + text),
    WE ARE OPEN (icon + text), RESERVATION (icon + text)
  - `<footer class="footer-area">` — dark bg (#1c1a18), 3-column layout:
    column 1: logo + phone + email + social icons; column 2: "Quick links"
    (About, Menu, Reservation, Blog, Breakfast, Lunch, Dinner); column 3:
    "Subscribe newsletter" with email input + send button; bottom copyright bar

- **Section order (from HTML):**
  1. Navbar (sticky, with logo + nav links + social icons)
  2. Hero banner (full-width bg image, left-aligned text, CTA button)
  3. About section (overlapping hero, 2-column: text + image)
  4. Food menu (section title, 2-column grid of 6 menu items)
  5. Intro video (dark bg, centered play button)
  6. Testimonials (carousel of review cards with stars)
  7. Contact (bg image, white card with address/hours/reservation)
  8. Footer (dark, 3-column: brand + links + newsletter, copyright)

## Design tokens (from css/style.css)

- **Fonts:**
  - Body / UI: `"Montserrat", sans-serif` (Google Fonts)
  - Headings display: `"Playfair Display", serif` (Google Fonts)
  - Section title h2: `font-size: 40px; color: #2c3033; line-height: 1.25`
  - About h2: `font-size: 46px; line-height: 56px`
  - Banner h1: large (responsive), white on dark overlay
  - Banner h5 (subtitle): white

- **Colors:**
  - Brand/accent: `#d6ad86` (warm gold/tan — used on `.btn_1` background,
    section title subtitle "Popular Menu", about h5 "about us")
  - Hover accent: `#ffb830` (golden yellow — `.btn_1:hover`)
  - Dark: `#2c3033` (near-black — headings, text)
  - Footer background: `#1c1a18` (very dark brown/black)
  - Footer text: `#a9a9a9` (light gray)
  - Light background: `#fafafa`, `#f9f9ff`, `#fbf9ff` (near-white tints)
  - Body background: `#fff` (white)
  - White overlay on contact: `#fff` with `background-color: #fff` on
    `.contact_part_iner`

- **Buttons:**
  - `.btn_1` (primary CTA): `padding: 23px 60px; background-color: #d6ad86;
    font-size: 14px; font-weight: 400; border-radius: 0` (sharp rectangle),
    hover: `color: #fff; background-color: #ffb830`
  - `.btn_3` (secondary/about): `padding: 14px 37.5px; background-color: #000;
    color: #fff; font-size: 15px; border-radius: 0` (sharp rectangle),
    hover transitions to warm accent
  - Mobile btn_1: `padding: 14px 28px; margin-top: 25px`

- **Section backgrounds:**
  - Hero banner: `background-image: url(../img/banner_bg.png); height: 1080px;
    background-size: cover; background-repeat: no-repeat`
  - About: white (default), with `margin-top: -250px` overlapping hero
  - Food menu: light/white
  - Intro video: `background-image: url(../img/intro_video_bg.png);
    background-size: cover; height: 550px`
  - Testimonials: white/light with `section_padding`
  - Contact: `background-image: url(../img/contact_bg.png); background-size:
    cover` with white `.contact_part_iner` overlay (`padding: 50px`)
  - Footer: `background-color: #1c1a18; padding: 100px 0 25px`

- **Layout:** Bootstrap grid (12-column), max-width container, responsive
  breakpoints at 576/768/992/1200px. Banner text uses table-cell vertical
  alignment for centering.

## Gherkin requirements

### Feature: Culinaire — Restaurant Homepage

  As a restaurant owner,
  I want a professional single-page restaurant website,
  So that customers can learn about the restaurant, view the menu, and
  get in touch.

  Background:
    Given the user opens the Culinaire homepage

  Scenario: Navbar displays on page load
    Then a sticky navigation bar is visible at the top
    And the navbar contains a logo on the left
    And the navbar contains nav links: Home, About, Menu, Blog, Contact
    And social media icons (Facebook, Instagram) appear on the right
    And a mobile hamburger menu appears on small viewports

  Scenario: Hero banner displays with call to action
    Then a full-width hero banner is displayed with a background image
    And the banner shows a subtitle text on the left side
    And the banner shows a heading "Modern restaurant in center of the city"
    And a primary CTA button "book a table" is visible in the banner
    And the banner height is responsive (1080px desktop, 650px tablet/mobile)

  Scenario: About section overlaps the hero banner
    Then the about section appears below the hero with a negative top margin
    And the about section has a white background
    And the left column shows an "about us" subtitle in brand color (#d6ad86)
    And the left column shows a heading "Delicious food provider since 1990"
    And two descriptive paragraphs are displayed
    And a "learn More" button is visible below the text
    And the right column shows a food/restaurant image

  Scenario: Food menu section displays six menu items
    Then a section title shows "Popular Menu" subtitle and "Delicious Food Menu" heading
    And six menu items are displayed in a 2-column grid
    And each menu item shows a food image on the left
    And each menu item shows a name, description, and price on the right
    And all items display "From $40.00" as the price

  Scenario: Intro video section shows a play button
    Then a dark background section with a background image is displayed
    And a centered play button icon is visible
    And clicking the play button opens a video popup/link

  Scenario: Testimonials section displays review cards
    Then a section title shows "Testimonials" subtitle and "What they said" heading
    And a carousel displays multiple review cards
    And each review card shows a quote, client image, client name, and 5-star rating
    And the carousel auto-plays or can be navigated

  Scenario: Contact section shows restaurant information
    Then a background image section is displayed with a white overlay card
    And the card heading reads "Contact Us"
    And an address block shows location information
    And an hours block shows "WE ARE OPEN" with operating hours
    And a reservation block shows "RESERVATION" with booking info

  Scenario: Footer displays with newsletter signup
    Then a dark footer (background #1c1a18) is displayed
    And the footer has 3 columns on desktop
    And column 1 shows the logo, phone number, email, and social icons
    And column 2 shows "Quick links" with navigation items
    And column 3 shows "Subscribe newsletter" with an email input and send button
    And a copyright bar at the bottom links to Component Dock

  Scenario: Responsive layout adapts to mobile
    Then the navbar collapses into a hamburger menu below 992px
    And the hero banner text is centered on mobile
    And the about section stacks to single column on mobile
    And the food menu items stack to single column on mobile
    And the footer columns stack vertically on mobile
    And button sizes reduce on mobile (14px 28px padding)

## Verification checklist

- [ ] Navbar is sticky, has logo + nav links + social icons, collapses on mobile
- [ ] Hero banner: full-width bg image, subtitle + heading + CTA button, responsive height
- [ ] About section: overlaps hero with negative margin, 2-column layout, brand color accent
- [ ] Food menu: 6 items in 2-column grid, each with image + name + description + price
- [ ] Intro video: dark bg image section, centered play button
- [ ] Testimonials: carousel with review cards (quote + image + name + stars)
- [ ] Contact: bg image with white card overlay, 3 info blocks (address, hours, reservation)
- [ ] Footer: dark bg (#1c1a18), 3-column layout, newsletter form, copyright with Component Dock link
- [ ] All design tokens match: Montserrat + Playfair Display fonts, #d6ad86 accent, #ffb830 hover, #1c1a18 footer
- [ ] Buttons are sharp rectangles (no border-radius), correct padding
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive breakpoints at 576/768/992/1200px
- [ ] Placeholder images use https://picsum.photos/seed/culinaire-N/W/H
- [ ] Tests: 100% coverage on all new components

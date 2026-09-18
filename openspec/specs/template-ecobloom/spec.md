# Template: Ecobloom (Travel & Destination)

## Purpose

Ecobloom is a single-page travel/destination template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ecoland" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ecoland" — travel / destination landing page
  (source: https://colorlib.com/wp/template/ecoland/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ecoland/
  (HTTP 200 — full rendered DOM + `css/style.css` (3,420 lines) extracted;
  Bootstrap 4 + owl.carousel + flaticon/ionicons icon fonts). The
  TEMPLATES.md screenshot (`ecoland-free-template.jpg`) matches this
  reconstruction.
- **Section order (1:1):**
  1. Navbar (dark, `.ftco-navbar-light`): brand "Ecoland" → "Ecobloom" +
     links: Home, Services, About, Destination, Hotel, Restaurant, Blog,
     Contact.
  2. Hero slider (owl-carousel `.home-slider`): split layout — text left
     ("Discover Greece" subheading, "Explore Your Travel Destinations"
     heading, blurb, "Discover" CTA) + image right with SVG blob shape
     (`.svg-blob`). Two slides: Greece, Africa.
  3. Search form (`.search-wrap-1`): "Sexy & Healthy" subheading, "Where
     do you want to go?" heading, 5-column form: Destination (text),
     Check-in date, Check-out date, Price Limit (select), Search button.
  4. Services (`.ftco-services-2`, `#services-section`): "Sexy & Healthy"
     subheading, "Our Services" heading, 4-column grid: Activities,
     Travel Arrangement, Private Guide, Location Manager (icon + title +
     blurb each).
  5. About / Counter (`#about-section`): split — image left (6/5 cols),
     darkened text right: "Get in touch" subheading, "Get Best Travel
     Deals" heading, blurb, "Book now" (primary) + "Contact us" (white)
     buttons.
  6. CTA banner (`#destination-section`): parallax background (bg_3.jpg),
     overlay, "Choose the Perfect Destination" heading, "Search Places"
     white button.
  7. Destinations grid (6 cards): "Best Destination" subheading, "Best
     Place to Travel" heading, 3x2 grid of `.project` cards — each with
     image (some with "Sale" `.vr` badge), price, tour duration, location
     name, star ratings, review count.
  8. CTA banner (`#hotel-section`): parallax background (bg_4.jpg),
     overlay, "Choose at $99 Per Night Only" heading, "Book a room now"
     white button.
  9. Hotels grid (3 cards): "Suggested Hotel" subheading, "Find Nearest
     Hotel" heading, 3-column `.project` cards (same card pattern as
     destinations).
  10. Rooms (within same section): "Rooms & Suites" subheading, "Greece
      Best Rooms Offer" heading, featured room (7/5 split — image left,
      text right with name, price/night, blurb, "Details" + "Book now"
      buttons) + 4 thumbnail room links.
  11. Testimonials (`.testimony-section`): owl-carousel on blue-gray
      background, blob SVG decorations, "Read testimonials" subheading,
      "What Client Says" heading, 5 testimonial cards (user-img circle,
      quote icon, quote text, name, position).
  12. Restaurant (`#restaurant-section`): "Restaurant" subheading, "Near
      Resturant" heading, 3-column `.project` cards (image, "menu start
      at" price, location, name, stars).
  13. Blog (`#blog-section`, `.bg-light`): "Blog" subheading, "Our Blog"
      heading, 3-column `.blog-entry` cards — each with background image,
      date overlay (day + month + year), heading, blurb, "Read More"
      primary button, author + comment count.
  14. Contact (`#contact-section`): "Contact" subheading, "Contact Me"
      heading, 7/5 split — form right (name, email, subject, textarea,
      "Send Message" primary button) + contact info left (Address, Phone,
      Email, Website — each in `.box.bg-light` with icon).
  15. Map placeholder (`#map`).
  16. Instagram gallery (`.ftco-gallery`): 6-column image grid with
      instagram icon overlay on hover.
  17. Footer: 4-column — About (brand + social icons), Information (link
      list), Experience (link list), Have a Questions? (address, phone,
      email) + copyright line with "Component Dock" link replacing
      Colorlib attribution.
- **Design tokens extracted from `css/style.css`:**
  - Primary brand color: **`#e2c0bb`** (muted tan/blush) — used for
    `.btn.btn-primary` background + border, `.bg-primary` background,
    hero primary accent strip.
  - Dark overlay background: **`#b2bbc9`** (muted blue-gray) —
    `.testimony-section` background.
  - Dark text on about: `.bg-darken` darkened panel (right side of about).
  - Overlay: semi-transparent dark on hero images and parallax sections.
  - Fonts: **"Poppins"** (sans-serif, weights 300–900) + **"Cormorant
    Garamond"** (serif, weights 300–700). Both Google Fonts.
  - Buttons: primary = `#e2c0bb` background, white text; white = `#fff`
    background, black text, hover → black border + white text.
  - Border-radius: `0.25rem` (Bootstrap 4 default) on form controls,
    buttons, navbar toggler.
  - Card image overlay: expand icon (`.icon-expand`) on hover, absolute
    positioned centered.
  - Star ratings: ionicons star icons in gold/yellow.
  - "Sale" badge: `.vr` element — primary-colored strip on image top-left.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ecobloom-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied; owl-carousel replaced
  with native React carousel/swiper or CSS-only slider; parallax via
  `bg-fixed` (Tailwind `bg-fixed`); SVG blobs via inline SVG.

Ecobloom lives in `apps/ecobloom` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Ecobloom",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Ecobloom page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ecobloom" and links to
  Home, Services, About, Destination, Hotel, Restaurant, Blog, and Contact
- **AND** the navbar SHALL show a mobile hamburger toggle for small
  viewports

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with two slides. Each
slide SHALL have a split layout: text on the left (subheading, heading,
blurb, CTA button) and a travel image on the right with an SVG blob
decoration.

#### Scenario: Slide content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** slide 1 SHALL show "Discover Greece" subheading, heading
  "Explore Your Travel Destinations like never before", a blurb paragraph,
  and a "Discover" primary CTA button
- **AND** slide 2 SHALL show "Discover Africa" subheading, heading
  "Never Stop Exploring", a blurb, and "Discover" CTA

#### Scenario: Slide navigation

- **GIVEN** the hero is visible
- **WHEN** the user navigates between slides (dot or auto-play)
- **THEN** the active slide content SHALL be visible and the other slide
  hidden

### Requirement: Search form

The system SHALL render a search form section with heading "Where do you
want to go?" and a row of inputs: Destination, Check-in date, Check-out
date, Price Limit dropdown, and a Search button.

#### Scenario: Search form rendering

- **GIVEN** the search form section is visible
- **WHEN** the page renders
- **THEN** the heading SHALL read "Where do you want to go?"
- **AND** the form SHALL contain text inputs for Destination, Check-in,
  Check-out, a select for Price Limit, and a primary Search submit button

#### Scenario: Form submission

- **GIVEN** the search form is displayed
- **WHEN** the user clicks Search
- **THEN** the form SHALL prevent default submission (no backend)

### Requirement: Services section

The system SHALL render a 4-column services grid with heading "Our
Services". Each service card SHALL have an icon, a title, and a short
description.

#### Scenario: Services content

- **GIVEN** the services section is visible
- **WHEN** the page loads
- **THEN** four service cards SHALL be displayed: Activities, Travel
  Arrangement, Private Guide, Location Manager
- **AND** each card SHALL have an icon (lucide-react), title, and blurb

### Requirement: About section

The system SHALL render a split about section with a travel image on the
left (6 columns) and a darkened panel on the right (6 columns) containing
the heading "Get Best Travel Deals" with two CTA buttons.

#### Scenario: About content

- **GIVEN** the about section is visible
- **WHEN** the page loads
- **THEN** the right panel SHALL show "Get Best Travel Deals" heading,
  descriptive text paragraphs, a "Book now" primary button, and a
  "Contact us" white button

### Requirement: Destination CTA banner

The system SHALL render a parallax CTA banner with background image,
overlay, heading "Choose the Perfect Destination", blurb, and a "Search
Places" white button.

#### Scenario: Destination CTA rendering

- **GIVEN** the destination CTA section is visible
- **WHEN** the page loads
- **THEN** the heading SHALL read "Choose the Perfect Destination"
- **AND** a "Search Places" white button SHALL be displayed

### Requirement: Destinations grid

The system SHALL render a 3-column grid of 6 destination cards, each with
an image, price, duration, location name, star rating, and review count.

#### Scenario: Destination card content

- **GIVEN** the destinations grid is visible
- **WHEN** the page loads
- **THEN** 6 destination cards SHALL be rendered
- **AND** each card SHALL display a price (some with strikethrough
  original + discounted), duration text, location name, 5-star rating
  row, and review count link

#### Scenario: Sale badge

- **GIVEN** a destination has a sale price
- **WHEN** the card renders
- **THEN** a "Sale" badge SHALL overlay the top-left of the card image

### Requirement: Hotel CTA banner

The system SHALL render a parallax CTA banner with heading "Choose at $99
Per Night Only" and a "Book a room now" white button.

#### Scenario: Hotel CTA rendering

- **GIVEN** the hotel CTA section is visible
- **WHEN** the page loads
- **THEN** the heading SHALL read "Choose at $99 Per Night Only"
- **AND** a "Book a room now" white button SHALL be displayed

### Requirement: Hotels grid

The system SHALL render a 3-column grid of 3 hotel cards with image,
price, duration, hotel name, star rating, and review count.

#### Scenario: Hotel card content

- **GIVEN** the hotels grid is visible
- **WHEN** the page loads
- **THEN** 3 hotel cards SHALL be rendered
- **AND** each card SHALL display price, duration ("3 nights"), hotel
  name, star ratings, and review count

### Requirement: Rooms showcase

The system SHALL render a rooms section with a featured room (7/5 image +
text split) and a row of 4 room thumbnail links.

#### Scenario: Featured room

- **GIVEN** the rooms section is visible
- **WHEN** the page loads
- **THEN** the featured room SHALL show an image on the left and text on
  the right with room name, price per night, description, "Details"
  secondary button, and "Book now" primary button

#### Scenario: Room thumbnails

- **GIVEN** the rooms section is visible
- **WHEN** the page loads
- **THEN** 4 room thumbnail links SHALL be displayed, each with a small
  image and room name

### Requirement: Testimonials

The system SHALL render a testimonial carousel section with a blue-gray
background, blob SVG decorations, and heading "What Client Says".

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is visible
- **WHEN** the page loads
- **THEN** at least 3 testimonial cards SHALL be shown in a carousel
- **AND** each card SHALL have a circular user image, a quote icon,
  quote text, user name, and position

### Requirement: Restaurant section

The system SHALL render a 3-column grid of restaurant cards with heading
"Near Resturant" (sic — preserve original copy), each with image, menu
price, location, restaurant name, and star ratings.

#### Scenario: Restaurant card content

- **GIVEN** the restaurant section is visible
- **WHEN** the page loads
- **THEN** 3 restaurant cards SHALL be rendered
- **AND** each card SHALL display "menu start at $4.00" price, location,
  restaurant name, and star rating row

### Requirement: Blog section

The system SHALL render a blog section on a light background with heading
"Our Blog" and 3 blog cards, each with a background image, date display,
heading, blurb, "Read More" button, and author/comment metadata.

#### Scenario: Blog card content

- **GIVEN** the blog section is visible
- **WHEN** the page loads
- **THEN** 3 blog cards SHALL be rendered
- **AND** each card SHALL have a background image, a date overlay (day +
  month + year), heading, description paragraph, "Read More" primary
  button, and author + comment count

### Requirement: Contact section

The system SHALL render a contact section with a 7/5 split: a contact
form on the right (name, email, subject, message textarea, "Send Message"
button) and contact information cards on the left (Address, Phone, Email,
Website).

#### Scenario: Contact form

- **GIVEN** the contact section is visible
- **WHEN** the page loads
- **THEN** a form SHALL be displayed with name, email, subject, and
  message inputs plus a "Send Message" primary button
- **AND** clicking "Send Message" SHALL prevent default form submission

#### Scenario: Contact info cards

- **GIVEN** the contact section is visible
- **WHEN** the page loads
- **THEN** 4 contact info cards SHALL be shown: Address, Phone, Email,
  Website — each with an icon and text content

### Requirement: Instagram gallery

The system SHALL render a 6-column image gallery with hover overlay
showing an Instagram icon.

#### Scenario: Gallery rendering

- **GIVEN** the gallery section is visible
- **WHEN** the page loads
- **THEN** 6 gallery images SHALL be displayed in a horizontal row
- **AND** each image SHALL show an Instagram icon overlay on hover

### Requirement: Footer

The system SHALL render a 4-column footer with About, Information,
Experience, and Have a Questions? columns, social links, and a copyright
line that links to Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is visible
- **WHEN** the page loads
- **THEN** the footer SHALL show 4 columns of links and info
- **AND** the copyright line SHALL link to `https://www.componentdock.com/`
  branded as "Component Dock"
- **AND** the footer SHALL NOT contain any ColorLib references

## Verification checklist

- [ ] All 17 sections rendered in correct order (1:1 fidelity)
- [ ] Design tokens match: primary `#e2c0bb`, testimony bg `#b2bbc9`,
  Poppins + Cormorant Garamond fonts
- [ ] Navbar has 8 section links + hamburger for mobile
- [ ] Hero has 2-slide carousel with split layout
- [ ] Search form has 5 fields + search button, prevents default
- [ ] Services shows 4 cards with icons
- [ ] About is 6/6 split with 2 CTA buttons
- [ ] Two CTA parallax banners with white buttons
- [ ] Destinations: 6 cards with price, stars, optional "Sale" badge
- [ ] Hotels: 3 cards
- [ ] Rooms: featured (7/5 split) + 4 thumbnails
- [ ] Testimonials: carousel on blue-gray bg with blob shapes
- [ ] Restaurant: 3 cards
- [ ] Blog: 3 cards on bg-light with date overlay
- [ ] Contact: form (7 cols) + info cards (5 cols)
- [ ] Gallery: 6 images with hover icon
- [ ] Footer: 4 columns, Component Dock link, no ColorLib references
- [ ] No ColorLib references in any app file (spec-only provenance)
- [ ] Dark mode toggle works (`.dark` class on `<html>`)
- [ ] Responsive: all grids collapse on mobile

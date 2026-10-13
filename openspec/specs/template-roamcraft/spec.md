# Template: Roamcraft (Travel Agency)

## Purpose

Recreation of ColorLib **Pacific** — a travel agency website template with a dark hero banner, tour search/booking form, destination carousels, tour cards, testimonials, and blog section.

- **Source:** https://colorlib.com/wp/template/pacific/
- **Preview:** https://preview.colorlib.com/theme/pacific/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pacific-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `roamcraft` (apps/roamcraft, @free-react-templates/roamcraft)

## Design Tokens

| Token | Value | Notes |
|---|---|---|
| Font family (body) | `"Poppins", sans-serif` | Google Fonts, weights 300–800 |
| Font family (accent) | `"Arizonia", cursive` | Google Fonts, subheadings only |
| Primary brand | `#f15d30` | Orange — buttons, badges, accents, nav active, subheading color |
| Brand dark | `#c7390d` | Darker orange — badge pseudo-element borders, hover states |
| Body text | `#212529` | Headings, paragraphs |
| Muted text | `rgba(0,0,0,0.4)` | Form placeholder text |
| Label text | `rgba(0,0,0,0.8)` | Form labels (override: `#f15d30` uppercase) |
| White | `#fff` | Search tabs active, video play button bg |
| Dark overlay | `rgba(0,0,0,0.3)` | Hero, video banner, testimonial section overlays |
| Dark bg | `#000000` | Hero overlay base |
| Button primary | bg `#f15d30`, text `#fff`, border-radius `4px` | Hover: transparent bg, orange text, orange border |
| Button outline | bg transparent, text `#f15d30` | Secondary CTA variant |
| Search tabs | bg `#f15d30`, text `#fff`, border-radius `5px` | Active: bg `#fff`, text `gray` |
| Tab content | bg `#fff`, border-radius `7px` | Box shadow: `0px 10px 33px -27px rgba(0,0,0,0.4)` |
| Search form | border-radius `0` (inputs) | Labels uppercase, brand color |
| Card (destination) | border-radius `5px` | Height `320px`, bg image cover |
| Card (tour) | bg `#fff`, box-shadow `0px 10px 23px -8px rgba(0,0,0,0.11)` | Price badge: bg `#f15d30`, border-radius `0` |
| Video play button | bg `#fff`, border-radius `50%`, `80px × 80px` | Icon color `#f15d30` |
| Testimonial star | `#f15d30` | Star icon color |
| Footer heading | `#000000` | Widget title color |
| Footer link hover | `#f15d30` | Orange |
| Footer social icon | `#f15d30` | Hover: white |
| Navbar | bg `dark` (dark bg), text white | Brand: "Pacific" bold + "Travel Agency" subtitle |

## Section Structure (order from preview)

1. **Navbar** — Dark bg, brand text "Pacific" (bold, white) + "Travel Agency" (small, orange), nav links: Home, About, Destination, Hotel, Blog, Contact. Hamburger on mobile.
2. **Hero** — Full-height bg image, dark overlay (0.3 opacity), "Welcome to Pacific" subheading (Arizonia font, orange), "Discover Your Favorite Place with Us" h1 (white, 55px), tagline paragraph (white/0.9), circular video play button (white circle, orange icon).
3. **Search/Booking Form** — Floating over hero bottom (margin-top: -100px), tab pills ("Search Tour" active, "Hotel"), form fields in row: Destination (text input), Check-in date, Check-out date, Price Limit (select dropdown), Search button (orange). White bg, box shadow.
4. **Services** — 2-col layout: left = heading "It's time to start your adventure" + paragraph + "Search Destination" CTA; right = 2×2 grid of service cards with bg images + icon overlay: Activities, Travel Arrangements, Private Guide, Location Manager.
5. **Select Destination** — Parallax bg image, heading "Select Your Destination", owl carousel of destination cards (Philippines 8 Tours, Canada 2 Tours, Thailand 5 Tours, Australia 5 Tours, Greece 7 Tours). Cards have bg image, orange label badge with triangle pseudo-elements, tour count badge.
6. **Tour Destinations** — 6-card grid (3×2), each card: bg image (300px height), orange price badge ("$550/person") with triangle pseudo-elements, white content area below with "X Days Tour" label, location, amenity icons (shower, bed, mountain/beach).
7. **Video/Parallax Banner** — Full-width bg image, dark overlay (0.3), centered circular play button (white, orange icon).
8. **About Us** — 2-col: left = bg image, right = "About Us" subheading (Arizonia, orange) + heading "Make Your Tour Memorable and Safe With Us" + paragraphs + "Book Your Destination" CTA (orange).
9. **Testimonials** — Bg image + dark overlay, heading "Tourist Feedback", owl carousel of testimonial cards: 5 orange stars, quote text, user avatar, name, position.
10. **Blog** — 3-card grid, each card: bg image, date badge (day + month + year), heading "Most Popular Place In This World", "Read more" CTA (orange).
11. **CTA Banner** — Full-width bg image, dark overlay, "We Are Pacific A Travel Agency" heading + "Ask For A Quote" CTA (orange).
12. **Footer** — Bg image + dark overlay, 4-column layout: About text + social icons (Twitter, Facebook, Instagram), Information links, Experience links, Contact info (address, phone, email). Copyright line at bottom.

## Requirements

### Feature: Navbar

#### Scenario: Navbar displays brand and navigation links

- **GIVEN** the user visits the Roamcraft homepage
- **THEN** a dark navbar with brand text "Roamcraft" is visible
- **AND** nav links "Home", "About", "Destination", "Hotel", "Blog", "Contact" are displayed

#### Scenario: Navbar shows hamburger on mobile

- **GIVEN** the user resizes to mobile viewport
- **THEN** a hamburger menu icon is displayed
- **AND** clicking it toggles the mobile navigation menu

### Feature: Hero Section

#### Scenario: Hero displays fullscreen with dark overlay

- **GIVEN** the user visits the Roamcraft homepage
- **THEN** a fullscreen hero section with a background image and dark overlay is visible
- **AND** the subheading "Welcome to Roamcraft" is displayed in Arizonia font and orange color
- **AND** the heading "Discover Your Favorite Place with Us" is displayed in large white text
- **AND** a circular video play button is displayed to the right of the text

#### Scenario: Hero is responsive

- **GIVEN** the user resizes the viewport to mobile width
- **THEN** the hero content remains centered and readable
- **AND** the heading font size reduces for mobile

### Feature: Search/Booking Form

#### Scenario: Search form displays with tabs

- **GIVEN** the user views the search section
- **THEN** two tab pills are visible: "Search Tour" (active) and "Hotel"
- **AND** the active tab has an orange background
- **AND** clicking "Hotel" switches to the hotel search form

#### Scenario: Search form contains all fields

- **GIVEN** the user views the search form
- **THEN** fields for Destination, Check-in date, Check-out date, Price Limit, and a Search button are visible
- **AND** the Search button has an orange background
- **AND** the form has a white background with rounded corners and box shadow

### Feature: Services Section

#### Scenario: Services section shows text and 4 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** a heading "It's time to start your adventure" is displayed on the left
- **AND** 4 service cards are displayed on the right in a 2×2 grid
- **AND** the service cards are: Activities, Travel Arrangements, Private Guide, Location Manager
- **AND** each card has a background image, icon, title, and description

### Feature: Select Destination

#### Scenario: Destination carousel displays destination cards

- **GIVEN** the user scrolls to the destination section
- **THEN** a heading "Select Your Destination" is displayed
- **AND** a carousel of destination cards is visible
- **AND** each card shows a destination name and tour count
- **AND** destination cards have orange label badges

#### Scenario: Destination section has parallax background

- **GIVEN** the user views the destination section
- **THEN** a parallax background image is visible behind the carousel

### Feature: Tour Destinations

#### Scenario: Tour destination grid shows 6 cards

- **GIVEN** the user scrolls to the tour destinations section
- **THEN** 6 tour cards are displayed in a 3×2 grid
- **AND** each card shows a price badge in orange, tour duration, location, and amenities
- **AND** each card has a background image with a white content area below

#### Scenario: Tour cards are responsive

- **GIVEN** the user resizes the viewport to mobile width
- **THEN** the tour cards stack vertically

### Feature: Video/Parallax Banner

#### Scenario: Video banner displays with play button

- **GIVEN** the user scrolls to the video banner
- **THEN** a full-width background image with dark overlay is visible
- **AND** a centered circular play button is displayed

### Feature: About Us

#### Scenario: About section shows image and text side by side

- **GIVEN** the user scrolls to the about section
- **THEN** an image is displayed on the left
- **AND** the heading "Make Your Tour Memorable and Safe With Us" is on the right
- **AND** a "Book Your Destination" CTA button in orange is displayed

#### Scenario: About section has Arizonia subheading

- **GIVEN** the user views the about section
- **THEN** the subheading "About Us" is displayed in Arizonia cursive font

### Feature: Testimonials

#### Scenario: Testimonials carousel displays with star ratings

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a carousel of testimonial cards is visible
- **AND** each card shows 5 orange stars, a quote, user avatar, name, and position
- **AND** the section has a background image with dark overlay

#### Scenario: Testimonials carousel cycles through items

- **GIVEN** the user views the testimonial section
- **THEN** the testimonials rotate through multiple items automatically

### Feature: Blog

#### Scenario: Blog section shows 3 post cards

- **GIVEN** the user scrolls to the blog section
- **THEN** 3 blog post cards are displayed in a row
- **AND** each card has a background image, date badge, heading, and "Read more" CTA

#### Scenario: Blog cards are responsive

- **GIVEN** the user resizes the viewport to mobile width
- **THEN** the blog cards stack vertically

### Feature: CTA Banner

#### Scenario: CTA banner displays with call to action

- **GIVEN** the user scrolls to the CTA banner
- **THEN** a full-width background image with dark overlay is visible
- **AND** the heading "We Are Roamcraft A Travel Agency" is displayed
- **AND** an "Ask For A Quote" CTA button in orange is shown

### Feature: Footer

#### Scenario: Footer displays 4 columns of content

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are displayed: About (with social icons), Information links, Experience links, Contact info
- **AND** a copyright line is at the bottom
- **AND** the footer has a background image with dark overlay

#### Scenario: Footer social icons use orange color

- **GIVEN** the user hovers over a footer social icon
- **THEN** the icon color is orange (#f15d30)

#### Scenario: Footer links have hover effect

- **GIVEN** the user hovers over a footer link
- **THEN** the link color changes to orange (#f15d30)

## Verification Checklist

- [ ] Section order matches original: Navbar → Hero → Search Form → Services → Select Destination → Tour Destinations → Video Banner → About Us → Testimonials → Blog → CTA Banner → Footer
- [ ] Font: Poppins (300–800) + Arizonia (cursive) loaded from Google Fonts
- [ ] Brand color: #f15d30 (orange) used for buttons, badges, accents, subheadings
- [ ] Hero: fullscreen, dark overlay (0.3), Arizonia subheading in orange, white h1, circular play button
- [ ] Search form: floating over hero, tab pills (orange active), 5 fields, white bg, box shadow
- [ ] Services: 2-col layout, 4 service cards with bg images in 2×2 grid
- [ ] Select Destination: parallax bg, carousel of destination cards with orange badges
- [ ] Tour Destinations: 3×2 grid, price badges, amenity icons, white content cards
- [ ] Video banner: full-width bg image, dark overlay, circular play button
- [ ] About Us: 2-col split, Arizonia subheading, CTA button
- [ ] Testimonials: bg image + overlay, star ratings, carousel, user avatars
- [ ] Blog: 3 cards, date badges, "Read more" CTA
- [ ] CTA banner: bg image, overlay, heading + CTA button
- [ ] Footer: bg image + overlay, 4 columns, social icons, copyright
- [ ] Responsive: hamburger nav on mobile, stacked columns, reduced font sizes
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos
- [ ] All text paraphrased, no copied assets

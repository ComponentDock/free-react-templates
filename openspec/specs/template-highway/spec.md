# Template: Highway (Car Rental Landing)

## Purpose

Highway is a single-page car rental landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Autoroad" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-accented car rental page with orange highlights: a
hero ("Now It's easy for you rent a car") with a booking form ("Make your
trip"), a secondary search/filter bar, an "Our Services" row (4 cards), a
"Choose Your Car" vehicle carousel, a "How it works" parallax section (4
steps), a "Happy Clients" testimonial carousel, a "Choose A Perfect Car"
about section, a "Recent Blog" grid (3 cards), and a dark footer with
about info, links, customer support, and a newsletter form. Highway
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Autoroad" — free car rental website template
  (source: https://colorlib.com/wp/template/autoroad/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/autoroad/`
  (HTTP 200, 41.2KB) + stylesheet `css/style.css` (78.7KB). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot
  (`autoraod-free-template.jpg`) confirms the visual design (dark hero with
  orange accents, white booking form card, dark footer).
- **Section order (1:1):**
  1. Navbar: dark bg, brand "Autoroad" with orange span, nav links (Home,
     About, Pricing, Our Car, Blog, Contact). Responsive hamburger menu.
  2. Hero (`hero-wrap`): background image (SUV off-road desert shot) with
     40% black overlay. Split layout:
     - Left (col-lg-6): headline "Now It's easy for you rent a car" (60px
       white, weight 200), description paragraph, video play button (orange
       #fc983c circle, 70px, border-radius 50%) + "Easy steps for renting
       a car" label.
     - Right (col-lg-4): white booking form card ("Make your trip") with
       border-radius 5px, box-shadow. Fields: Pick-up location, Drop-off
       location, Pick-up date, Drop-off date, Pick-up time, "Search
       Vehicle" button (btn-primary, sharp corners).
  3. Secondary search filter bar: horizontal row of selects (Car type,
     Condition, Car model, Price limit range) + orange "Search" button.
  4. Services (`services-section`): "Our Services" heading + 4 cards in a
     row: 24/7 Car Support, Lots of location, Reservation, Rental Cars.
     Each card has a lucide-style icon and heading.
  5. Choose Your Car: "Choose Your Car" heading + owl-carousel of vehicle
     cards (image, name "Mercedes Grand Sedan", price, features list).
  6. How it works (`services-section img`): parallax background image with
     overlay, "How it works" heading (white), 4 step cards: Pick
     Destination, Select Term, Choose A Car, Enjoy The Ride.
  7. Testimonials (`testimony-section`): "Happy Clients" heading + owl
     carousel of testimonial cards (avatar, name, role, quote text).
  8. About section (`ftco-section ftco-no-pt ftco-no-pb`): "Choose A
     Perfect Car" heading, split layout — text blurb left, image right.
  9. Recent Blog: "Recent Blog" heading + 3 blog cards (image, date badge,
     title, description link).
  10. Footer (`ftco-footer ftco-bg-dark`): dark bg (#000), 4 columns —
      About Autoroad (logo + social links: Twitter, Facebook, Instagram),
      Information (nav links), Customer Support (nav links), Have a
      Questions? (newsletter form with email input + subscribe button) +
      copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#fc983c** (warm orange) — play button, breadcrumbs,
    section accents, search button, secondary highlights.
  - Bootstrap primary: **#007bff** (blue) — btn-primary background.
  - Hero overlay: **#000000** at 40% opacity.
  - Counter/parallax sections: **#000000**, dark brown **#3c312e**.
  - Footer background: **#000** (pure black).
  - Request form card: **#fff** bg, border-radius **5px**, box-shadow
    `0px 10px 31px -21px rgba(0,0,0,0.33)`.
  - Form controls: height 40px, border-radius **0px**, transparent bg,
    border `1px solid rgba(0,0,0,0.05)`, placeholder color
    `rgba(0,0,0,0.4)`.
  - Font: **"Poppins"** (sans-serif, weights 200-800) via Google Fonts.
  - Headings: white on hero (60px, weight 200), dark on sections.
  - Play icon: orange **#fc983c** circle, 70x70px, border-radius 50%.
  - Form submit button: sharp corners (border-radius 0), btn-primary blue.
- **Screenshot analyzed:** `autoraod-free-template.jpg` — dark moody hero
  with off-road SUV in desert landscape, white booking form card floating
  right, orange accents on buttons and interactive elements, clean modern
  layout with generous whitespace.
- **Recreation decisions:** repo-standard Navbar (site name "Highway",
  Home link, dark-mode toggle) + hero with seeded picsum photo + booking
  form card; secondary search filter with select dropdowns; services cards
  with lucide icons; vehicle cards in a CSS grid carousel; parallax "How
  it works" section; testimonials carousel; about section with photo;
  blog cards; dark footer with newsletter form and social links; all
  images picsum-seeded (`picsum.photos/seed/highway-N/w/h`); Google Fonts
  via `<link>`.

Highway lives in `apps/highway` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Highway"
(with "way" highlighted), a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Highway page is rendered
- **WHEN** the user inspects the navigation bar
- **THEN** the brand text "Highway" is visible with "way" styled
  differently (orange color accent)
- **AND** navigation links are present: Home, About, Services, Fleet,
  Blog, Contact
- **AND** a dark-mode toggle button is present

#### Scenario: Navbar mobile responsive

- **GIVEN** the viewport width is below 768px
- **WHEN** the page is rendered
- **THEN** the nav collapses into a hamburger menu
- **AND** clicking the hamburger reveals the navigation links

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
a dark overlay, a headline, a description, a video play button, and a
booking form.

#### Scenario: Hero layout

- **GIVEN** the Highway page is rendered
- **WHEN** the user views the hero section
- **THEN** a full-width background image is displayed with a 40% black
  overlay
- **AND** on the left side (6 columns): headline "Now It's easy for you
  rent a car" in white 60px font-weight 200, a description paragraph, and
  a circular orange play button (#fc983c, 70px diameter) with "Easy steps
  for renting a car" label

#### Scenario: Hero booking form

- **GIVEN** the Highway page is rendered
- **WHEN** the user views the right side of the hero
- **THEN** a white booking form card is displayed with border-radius 5px
  and drop shadow
- **AND** the form contains fields: Pick-up location, Drop-off location,
  Pick-up date, Drop-off date, Pick-up time
- **AND** a "Search Vehicle" submit button with sharp corners

#### Scenario: Booking form interactions

- **GIVEN** the booking form is displayed
- **WHEN** the user types in any location or date field
- **THEN** the placeholder text disappears and user input appears
- **AND** form labels are uppercase, 12px, font-weight 600

### Requirement: Secondary search filter

The system SHALL render a horizontal search filter bar below the hero with
car type, condition, car model, and price range selects, plus a search
button.

#### Scenario: Filter bar content

- **GIVEN** the Highway page is rendered
- **WHEN** the user scrolls past the hero
- **THEN** a horizontal row of filter controls is displayed: Car type
  select, Condition select, Car model select, Price limit range select
- **AND** an orange "Search" button is present

### Requirement: Services section

The system SHALL render an "Our Services" section with 4 service cards
arranged in a row.

#### Scenario: Services cards

- **GIVEN** the Highway page is rendered
- **WHEN** the user scrolls to the services section
- **THEN** the heading "Our Services" is displayed centered
- **AND** 4 service cards are shown in a row: "24/7 Car Support", "Lots
  of location", "Reservation", "Rental Cars"
- **AND** each card has a lucide-react icon and a heading

### Requirement: Vehicle carousel

The system SHALL render a "Choose Your Car" section with a horizontally
scrollable carousel of vehicle cards.

#### Scenario: Vehicle cards

- **GIVEN** the Highway page is rendered
- **WHEN** the user scrolls to the vehicle section
- **THEN** the heading "Choose Your Car" is displayed centered
- **AND** a row of vehicle cards is shown (at least 4 visible)
- **AND** each card has: a vehicle image (seeded picsum), vehicle name,
  price per day, and a list of features (4 items)

### Requirement: How it works section

The system SHALL render a parallax "How it works" section with a dark
background image and 4 step cards.

#### Scenario: How it works content

- **GIVEN** the Highway page is rendered
- **WHEN** the user scrolls to the how-it-works section
- **THEN** a section with a dark parallax background image is displayed
- **AND** the heading "How it works" is shown in white, centered
- **AND** 4 step cards are shown: "Pick Destination", "Select Term",
  "Choose A Car", "Enjoy The Ride"
- **AND** each card has an icon, heading, and brief description

### Requirement: Testimonials section

The system SHALL render a "Happy Clients" testimonial carousel with
client quotes and avatars.

#### Scenario: Testimonials carousel

- **GIVEN** the Highway page is rendered
- **WHEN** the user scrolls to the testimonials section
- **THEN** the heading "Happy Clients" is displayed centered
- **AND** a carousel of testimonial cards is shown
- **AND** each card has: a client avatar (seeded picsum circle), client
  name, role/title, and a quote paragraph

### Requirement: About section

The system SHALL render a "Choose A Perfect Car" about section with a
split layout: text on one side, image on the other.

#### Scenario: About content

- **GIVEN** the Highway page is rendered
- **WHEN** the user scrolls to the about section
- **THEN** the heading "Choose A Perfect Car" is displayed
- **AND** a text blurb describing the service is shown
- **AND** a vehicle image (seeded picsum) is shown adjacent to the text

### Requirement: Blog section

The system SHALL render a "Recent Blog" section with 3 blog cards.

#### Scenario: Blog cards

- **GIVEN** the Highway page is rendered
- **WHEN** the user scrolls to the blog section
- **THEN** the heading "Recent Blog" is displayed centered
- **AND** 3 blog cards are shown in a row
- **AND** each card has: a blog image (seeded picsum), a date badge, a
  title, and a description snippet

### Requirement: Footer

The system SHALL render a dark footer with 4 columns: About, Information,
Customer Support, and a newsletter form.

#### Scenario: Footer layout

- **GIVEN** the Highway page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** a dark background (#000) footer is displayed
- **AND** column 1 contains "About Highway" text and social media icons
  (Twitter, Facebook, Instagram) linking to "#"
- **AND** column 2 contains "Information" heading with nav links
- **AND** column 3 contains "Customer Support" heading with nav links
- **AND** column 4 contains "Have a Questions?" heading with an email
  input and "Subscribe" button

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the user inspects the footer copyright area
- **THEN** a link to "https://www.componentdock.com/" is present,
  branded as "Component Dock"
- **AND** the link opens in a new tab

#### Scenario: No ColorLib references

- **GIVEN** the Highway app is rendered
- **WHEN** the user inspects any rendered element or source file
- **THEN** no text contains "ColorLib", "colorlib", "preview.colorlib.com",
  or any ColorLib domain reference

### Requirement: Dark mode

The system SHALL support dark mode toggled via a button in the navbar.

#### Scenario: Dark mode toggle

- **GIVEN** the Highway page is rendered in light mode
- **WHEN** the user clicks the dark-mode toggle
- **THEN** the page switches to dark mode styling
- **AND** all sections adapt with appropriate dark backgrounds and light
  text

#### Scenario: Dark mode persistence

- **GIVEN** the user has toggled dark mode
- **WHEN** the page is reloaded
- **THEN** the dark mode preference is preserved (localStorage)

## Verification checklist

- [ ] Section order matches original 1:1 (navbar → hero → search filter
      → services → vehicles → how it works → testimonials → about → blog →
      footer)
- [ ] Brand color #fc983c is used for accents (play button, search
      button, highlights)
- [ ] Font is Poppins (loaded via Google Fonts link in index.html)
- [ ] Hero has background image with 40% black overlay, split layout
      with booking form card
- [ ] Booking form card: white bg, border-radius 5px, box-shadow,
      sharp-cornered inputs and submit button
- [ ] Services section: 4 cards in a row with lucide icons
- [ ] Vehicle carousel: horizontal scroll with card items
- [ ] How it works: dark parallax bg, 4 step cards, white text
- [ ] Testimonials: carousel with avatar, name, role, quote
- [ ] About section: split layout with text + image
- [ ] Blog section: 3 cards in a row
- [ ] Footer: dark bg, 4 columns, newsletter form, Component Dock link
- [ ] No ColorLib references in app code
- [ ] All images use picsum-seeded placeholders
- [ ] Dark mode toggle works
- [ ] Mobile responsive (hamburger menu, stacked layout)
- [ ] TypeScript strict mode — no `any` types
- [ ] Tests: Vitest + Testing Library, 100% coverage

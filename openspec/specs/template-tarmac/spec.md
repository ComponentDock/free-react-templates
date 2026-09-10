# Template: Tarmac (Car Rental Template)

## Purpose

Tarmac is a single-page car rental landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Autoroad"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source template:** ColorLib "Autoroad"
  (https://colorlib.com/wp/template/autoroad/)
- **Preview URL:** https://preview.colorlib.com/theme/autoroad/
- **New name:** Tarmac — evokes asphalt road surface, fitting for a car
  rental theme; does not reuse the ColorLib source name.

## Design reference (replication findings)

- **Original:** ColorLib "Autoroad" — car rental website template
  (Bootstrap 4 based, multi-page but homepage is the primary view).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autoroad/
  (HTTP 200, full rendered DOM + `css/style.css` extracted, ~3500 lines).
  The TEMPLATES.md screenshot (`autoraod-free-template.jpg`) is also
  referenced; it shows the hero with a pickup truck on a scenic road.
- **Visual design (screenshot + live DOM):** modern car rental landing
  with a warm orange accent on a mostly white/dark scheme. The hero is
  a full-width background image (off-road vehicle + sunset landscape)
  with a left-aligned headline ("Now It's easy for you rent a car") and
  a white booking form overlay on the right. A play button (orange circle)
  links to a video. Below the hero, a horizontal search/filter bar with
  dropdowns. The page uses Poppins font throughout. Orange (`#fc983c`)
  is the brand color for subheadings, testimonial names, pagination
  active dots, and link hovers. Bootstrap blue `#007bff` is used for
  primary buttons. Dark sections (`#3c312e`, `#000`) appear in the
  "How it works" background and footer.

- **Section order (1:1, from live DOM):**
  1. Navbar (dark bg, "Auto**road**" logo with accent span, nav links:
     Home, About, Pricing, Our Car, Blog, Contact; sticky on scroll).
  2. Hero (full-width `background-image: url('images/bg_1.jpg')` with
     dark overlay; left: H1 "Now It's easy for you rent a car" + blurb +
     video play button ("Easy steps for renting a car"); right: white
     booking form with pick-up location, drop-off location, pick-up date,
     drop-off date, pick-up time, "Search Vehicle" primary button).
  3. Search/filter bar (horizontal form: Select Model, Select Brand,
     Year Model, Price Limit dropdowns + "Search" button; no section
     heading).
  4. Services ("Our Services" heading + subheading; 4 cards in a row:
     24/7 Car Support, Lots of locations, Reservation, Rental Cars —
     each with icon + title + blurb).
  5. Choose Your Car ("Choose Your Car" heading + "What we offer"
     subheading; 4-column grid of car cards — each with background-image,
     price badge ("$25 From /Day"), car name, brand, "Book now" +
     "Details" outline buttons).
  6. How It Works (dark background image with overlay; "How it works"
     heading; 4 centered steps: Pick Destination, Select Term, Choose A
     Car, Enjoy The Ride — each with icon + title + blurb).
  7. Testimonials ("Happy Clients" heading + "Testimonial" subheading;
     owl-carousel of testimonial cards — user-img, quote, name, position).
  8. About ("About us" subheading + "Choose A Perfect Car" heading;
     split layout: left = background image, right = text + "Search
     Vehicle" button).
  9. Blog ("Recent Blog" heading + "Blog" subheading; 3 blog entry
     cards — thumbnail, date/author/comments meta, heading link,
     blurb).
  10. Footer (dark `#3c312e` bg; 4 columns: About Autoroad + social
      icons, Information links, Customer Support links, Have a Questions?
      contact info + address/phone/email; copyright line at bottom —
      replace Colorlib attribution with "Component Dock").

## Design tokens extracted from `style.css`

- **Primary brand color:** Orange `#fc983c` (subheading text, testimonial
  names, pagination active, link hovers).
- **Secondary accent:** `#f7b71d` (owl-carousel active dot).
- **Primary button:** Bootstrap blue `#007bff` / `#0069d9` (hover).
- **Dark background:** `#3c312e` (`.ftco-bg-dark` — services "How it works"
  overlay, footer).
- **Footer bg:** `#000` (pure black).
- **Body text:** `#212529` (Bootstrap default).
- **Heading section subheading:** `#fc983c`, 12px, 600 weight, 2px
  letter-spacing, uppercase.
- **Heading section h2:** 40px, 600 weight; mobile 28px.
- **Font:** **Poppins** (Google Fonts, weights 200–800).
- **Icons:** flaticon + ionicons (recreation → lucide-react).
- **Button style:** Bootstrap `.btn-primary` (rounded 0.25rem); black
  outline buttons for car cards (`.btn-black.btn-outline-black`).
- **Section padding:** `6em 0`.
- **Car card price badge:** overlay at bottom of image, dark bg with
  white text.
- **Testimonial user-img:** 100×100px, `border-radius: 50%`.
- **Testimonial name:** `#fc983c`, 20px, 500 weight.
- **Blog entry heading link hover:** `#fc983c`.

## Recreation decisions

- Photos → seeded picsum placeholders (`picsum.photos/seed/tarmac-<n>/<w>/<h>`).
- Icons → lucide-react (replace flaticon/ionicons).
- Poppins → Google Fonts `<link>` in `index.html`.
- Forms → prevent default (no backend).
- Orange primary → `@theme` token for Tailwind classes.
- Dark sections → Tailwind `dark:` utilities.
- Footer attribution → "Component Dock" link (`https://www.componentdock.com/`).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Tarmac",
anchor links to page sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Tarmac page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Tarmac" with the second
  word in the brand accent color
- **AND** the navbar SHALL show links to Home, About, Our Cars, How It
  Works, and Blog
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, a
headline, a description, a video play button, and a booking form.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading about renting a car
- **AND** it SHALL show a description paragraph
- **AND** it SHALL show a play button labeled "Easy steps for renting a car"
- **AND** the hero SHALL display a booking form

#### Scenario: Booking form fields

- **GIVEN** the hero booking form is displayed
- **WHEN** the user views the form
- **THEN** it SHALL contain fields for pick-up location, drop-off location,
  pick-up date, drop-off date, and pick-up time
- **AND** it SHALL have a "Search Vehicle" submit button

#### Scenario: Form interaction

- **GIVEN** the booking form is displayed
- **WHEN** the user fills in all fields and submits
- **THEN** the form SHALL prevent default submission (no backend)

### Requirement: Search filter bar

The system SHALL render a horizontal search/filter bar below the hero with
dropdown filters and a search button.

#### Scenario: Filter bar content

- **GIVEN** the page is rendered
- **WHEN** the filter bar is displayed
- **THEN** it SHALL contain dropdowns for Model, Brand, Year, and Price Limit
- **AND** it SHALL have a "Search" button

### Requirement: Services section

The system SHALL render a services section with a heading and four
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show four service cards with icons, titles, and blurbs:
  24/7 Car Support, Lots of locations, Reservation, Rental Cars

### Requirement: Car listing section

The system SHALL render a car listing section with a heading and a grid
of car cards.

#### Scenario: Car listing content

- **GIVEN** the page is rendered
- **WHEN** the car listing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Car"
- **AND** it SHALL show at least four car cards, each with a background
  image, price badge, car name, brand name, "Book now" button, and
  "Details" button

### Requirement: How it works section

The system SHALL render a "How it works" section with a dark background
image and four step cards.

#### Scenario: How it works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "How it works"
- **AND** it SHALL show four steps: Pick Destination, Select Term, Choose A
  Car, Enjoy The Ride — each with an icon, title, and blurb

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and a
carousel of testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Clients"
- **AND** it SHALL show at least two testimonial cards with a circular
  user image, quote text, name, and position

### Requirement: About section

The system SHALL render an about section with a split layout: image on
one side, text + CTA on the other.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Choose A Perfect Car"
- **AND** it SHALL show a description paragraph
- **AND** it SHALL have a "Search Vehicle" button

### Requirement: Blog section

The system SHALL render a blog section with a heading and three blog
entry cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent Blog"
- **AND** it SHALL show at least three blog entries, each with a thumbnail
  image, date/author metadata, heading link, and a blurb

### Requirement: Footer

The system SHALL render a dark footer with multiple columns and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain columns for: About Tarmac + social icons,
  Information links, Customer Support links, and contact info (address,
  phone, email)
- **AND** it SHALL show a copyright line with a link to
  `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] Spec matches 1:1 section order from the live DOM
- [ ] All design tokens (orange `#fc983c`, Poppins font, dark `#3c312e`)
  are captured and will be implemented via `@theme`
- [ ] All 10 sections have Gherkin requirements + scenarios
- [ ] Booking form prevents default (no backend)
- [ ] Footer links to Component Dock instead of ColorLib
- [ ] No ColorLib references in app code
- [ ] All images use seeded picsum placeholders
- [ ] Icons use lucide-react
- [ ] Dark mode toggles via `.dark` class

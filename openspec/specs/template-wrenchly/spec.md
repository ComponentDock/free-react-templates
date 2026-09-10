# Template: Wrenchly (Business / Auto Repair Landing)

## Purpose

Wrenchly is a single-page auto repair service landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Autorepair" website template design (see TEMPLATES.md line 900,
Business category), built under a DIFFERENT name (Wrenchly — a wrench is the
iconic mechanic's tool, plus the friendly "-ly" suffix) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

**Source:** ColorLib "Autorepair" — auto repair service website template
- Source URL: https://colorlib.com/wp/template/autorepair/
- Preview URL: https://preview.colorlib.com/theme/autorepair/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/autorepair-free-template.jpg

## Design reference (replication findings)

- **Original:** ColorLib "Autorepair" — auto repair service website template.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autorepair/
  (HTTP 200, full rendered DOM + `css/style.css` extracted 2026-09-10).
  The TEMPLATES.md screenshot (`autorepair-free-template.jpg`) was also
  inspected: dark navbar, blue/orange color scheme, hero slider with car
  images, services grid, stats counter, testimonials carousel, blog cards,
  pricing grid, work portfolio, full footer.
- **Section order (1:1):**
  1. Top bar: address ("721 New York NY 10016"), phone ("(+01) 123 456 7890"),
     social icons (Facebook, Twitter, Instagram, Dribbble).
  2. Navbar: dark bg, "Autorepair." brand, menu (Home, About, Services,
     Project, Blog, Contact), search input.
  3. Hero slider: owl-carousel with 2 slides — "Make your car last longer"
     + "Book an appointment" button; "It's time to come to repair your car"
     + "Book an Appointment" button. Background images with dark overlay.
  4. Intro CTA bar: "Are you ready? Let's repair it now!" + wrench icon +
     "Book an Appointment" orange button.
  5. Services (`ftco-section`): "Our car services" — 6 service cards in
     3x2 grid (Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck,
     Car Maintenance) each with icon, heading, description, "Read more" link.
  6. About/Stats (`ftco-counter`): "We help more than 45 years serving
     customer car" + 4 counters (45 Years Experienced, 8500 Project completed,
     2342 Happy Customers, 30 Award Winning).
  7. Appointment (`ftco-appointment`): dark background image, "Free
     Consultation" heading + appointment form (name, service dropdown,
     date, phone, message, "Make an Appointment" button).
  8. Testimonials (`testimony-section`): "Happy Clients & Feedbacks" —
     owl-carousel of testimonial cards (quote icon + text + author photo +
     name + position).
  9. Blog (`ftco-section bg-light`): "Latest news from our blog" — 3 blog
     cards (image + author photo + name + date + title).
  10. Pricing (`ftco-section bg-light`): "Pricing" — 4 pricing cards
      (First PMS $78.98, Engine Diagnostics $83.75, Tow Truck $85.00,
      Oil Change) each with "Get Started" button.
  11. Work/Portfolio: 4 image cards with overlay text (work-1 through work-4).
  12. Footer: 4-column layout — brand + description + social icons, Services
      list (Oil Change, Batteries, Tow Truck, Tire Change, Engine Repair),
      Contact info (address, phone, email), Business Hours (Mon-Fri 9am-20pm,
      Sat 9am-17pm, Sun/holidays closed).

- **Design tokens extracted from `css/style.css`:**
  - **Brand primary:** `#064acb` (deep blue — links, hover states, buttons).
  - **Brand accent:** `#f79f24` (amber/orange — CTA buttons, highlights,
    intro bar background).
  - **Dark backgrounds:** `#000000` (hero overlays, navbar).
  - **Light backgrounds:** `#e6e6e6` (alt sections), `#fff` (main).
  - **Text:** `#000000` (headings), `#b3b3b3` / `#ccc` (muted).
  - **Font family:** `"Poppins", Arial, sans-serif`.
  - **Shapes:** `.btn-primary` — blue #064acb bg, white text; `.btn-custom` /
    `.bg-primary` — amber/orange #f79f24 bg; buttons have `border-radius: 4px`;
    service icons use `border-radius: 50%` circular containers.
  - **Spacing:** `.ftco-section` = standard section padding; hero uses
    `slider-text` with `align-items-center`.
  - **Animations:** `ftco-animate` class for scroll-reveal effects.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top info bar and a dark navbar with site branding,
menu links, and search.

#### Scenario: Top bar content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL display an address "721 New York NY 10016"
- **AND** display a phone number "(+01) 123 456 7890"
- **AND** display social media icons (Facebook, Twitter, Instagram, Dribbble)

#### Scenario: Navbar content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL display the brand name "Wrenchly"
- **AND** display menu links: Home, About, Services, Projects, Blog, Contact
- **AND** display a search input
- **AND** include a dark-mode toggle button
- **AND** collapse into a hamburger menu on mobile

### Requirement: Hero section

The system SHALL render a hero section with a heading, subtitle, and CTA
button over a background image with dark overlay.

#### Scenario: Hero content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the heading "Make your car last longer"
- **AND** display a "Book an appointment" CTA button

### Requirement: Intro CTA bar

The system SHALL render a horizontal CTA bar with an icon, heading, and
button.

#### Scenario: Intro bar content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the intro bar is visible
- **THEN** it SHALL display "Are you ready? Let's repair it now!"
- **AND** display a "Book an Appointment" button with amber/orange styling

### Requirement: Services section

The system SHALL render a services section with 6 service cards in a 3x2 grid.

#### Scenario: Services content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL display the heading "Our car services"
- **AND** render 6 service cards: Oil Change, Tire Change, Batteries,
  Engine Repair, Tow Truck, Car Maintenance
- **AND** each card SHALL have an icon, heading, description, and "Read more" link

### Requirement: Statistics section

The system SHALL render a statistics/counter section with 4 stat cards.

#### Scenario: Stats content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the stats section is visible
- **THEN** it SHALL display "We help more than 45 years serving customer car"
- **AND** show 4 counters: 45 Years Experienced, 8500 Project completed,
  2342 Happy Customers, 30 Award Winning

### Requirement: Appointment form

The system SHALL render an appointment booking form with input fields.

#### Scenario: Appointment form content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the appointment section is visible
- **THEN** it SHALL display the heading "Free Consultation"
- **AND** render fields for name, service type, date, phone, and message
- **AND** display a "Make an Appointment" submit button

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with customer feedback.

#### Scenario: Testimonials content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL display "Happy Clients & Feedbacks"
- **AND** render testimonial cards with quote icon, text, author photo,
  name, and position

### Requirement: Blog section

The system SHALL render a blog section with 3 blog post cards.

#### Scenario: Blog content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL display "Latest news from our blog"
- **AND** render 3 blog cards with image, author info, date, and title

### Requirement: Pricing section

The system SHALL render a pricing section with 4 pricing cards.

#### Scenario: Pricing content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the pricing section is visible
- **THEN** it SHALL display the heading "Pricing"
- **AND** render 4 pricing cards: First PMS ($78.98), Engine Diagnostics
  ($83.75), Tow Truck ($85.00), Oil Change
- **AND** each card SHALL have a "Get Started" button

### Requirement: Work/Portfolio section

The system SHALL render a work/portfolio section with 4 image cards.

#### Scenario: Work content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the work section is visible
- **THEN** it SHALL render 4 portfolio image cards with overlay text

### Requirement: Footer

The system SHALL render a 4-column footer with brand info, services, contact,
and business hours.

#### Scenario: Footer content

- **GIVEN** the Wrenchly page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL display the "Wrenchly" brand logo and description
- **AND** display social media icons (Twitter, Facebook, Instagram)
- **AND** display a Services column (Oil Change, Batteries, Tow Truck, Tire Change, Engine Repair)
- **AND** display Contact information (address, phone, email)
- **AND** display Business Hours (Mon-Fri 9am-20pm, Sat 9am-17pm)
- **AND** include a link to https://www.componentdock.com/ ("Component Dock")
- **AND** display a copyright notice

### Requirement: Responsive layout

The system SHALL be fully responsive across desktop, tablet, and mobile viewports.

#### Scenario: Mobile navigation

- **GIVEN** the viewport width is less than 768px
- **WHEN** the page loads
- **THEN** the navbar SHALL collapse into a hamburger menu
- **AND** the menu SHALL expand when activated

#### Scenario: Responsive grid

- **GIVEN** the viewport width is less than 768px
- **WHEN** the services, blog, or pricing sections are visible
- **THEN** the grid SHALL stack into a single column

## Verification checklist

- [ ] Top bar shows address, phone, social icons
- [ ] Navbar shows "Wrenchly" brand, menu links, search, dark-mode toggle
- [ ] Hero has background image, heading, CTA button
- [ ] Intro bar shows "Are you ready?" + amber CTA
- [ ] Services section shows 6 cards in 3x2 grid
- [ ] Stats section shows 4 counters (45, 8500, 2342, 30)
- [ ] Appointment form has name, service, date, phone, message fields
- [ ] Testimonials carousel shows customer feedback
- [ ] Blog section shows 3 post cards
- [ ] Pricing section shows 4 cards with prices
- [ ] Work section shows 4 portfolio images
- [ ] Footer has 4 columns: brand, services, contact, hours
- [ ] Footer links to Component Dock
- [ ] Dark mode toggle works and persists
- [ ] Responsive on mobile (hamburger nav, stacked grids)
- [ ] No references to ColorLib in app code
- [ ] All placeholder images use picsum.photos/seed/wrenchly-*
- [ ] Poppins loaded via Google Fonts
- [ ] 100% test coverage (Vitest + Testing Library)

# Template: Torquely (Car Repair Service Landing)

## Purpose

Torquely is a single-page car repair service landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Autorepair" website template design (see TEMPLATES.md), built
under a DIFFERENT name (Torquely — "torque", the turning force of an engine,
evoking the car-repair theme, plus the friendly "-ly" suffix matching the
naming family convention: Motorly, Nestly, Drivly, Wingly; re-branded) per
the monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Autorepair" — car repair services website template
  (source: https://colorlib.com/wp/template/autorepair/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autorepair/
  (HTTP 200, full rendered DOM + `css/style.css` (86KB) extracted
  2026-08-09; the preview portal serves this non-Astro template directly —
  NOT in `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md
  screenshot (`autorepair-free-template.jpg`) was also inspected visually
  (browser): dark top bar with address/phone, white nav with orange active
  link, image hero with orange "BOOK AN APPOINTMENT" CTA, bright blue
  "Are you ready? Let's repair it now!" strip below the hero, blue circular
  icons on the service cards.
- **Section order (1:1):**
  1. Header: dark top bar (logo "Torquely." + Address "721 New York NY
     10016" + Call us "(+01) 123 456 7890" + social icons Facebook, Twitter,
     Instagram, Dribbble) + white nav (logo + menu: Home, About, Services,
     Project, Blog, Contact).
  2. Hero (image bg, 2-slide carousel): slide 1 kicker "We are best car
     repair services" + h1 "Make your car last longer"; slide 2 kicker "We
     care about your car" + h1 "It's time to come to repair your car"; both
     with an orange "Book an appointment" button.
  3. Intro strip (blue band `bg-intro`): wrench icon + "Are you ready?
     Let's repair it now!" + white "Book an Appointment" link.
  4. Services (`ftco-section`): kicker "We offer Services" + "Our car
     services" — 6 icon cards (Oil change, Tire Change, Batteries, Engine
     Repair, Tow Truck, Car Maintenance), each icon + title + blurb +
     "Read more" link, 3 columns.
  5. About (`ftco-section bg-light`): "Welcome to Torquely" + "We help more
     than 45 years serving customer car" + paragraph + Our Mission / Our
     Vision / Our Value columns + image.
  6. Counter band (image bg): 45 Years of Experienced, 8500 Project
     completed, 2342 Happy Customers, 30 Award Winning.
  7. Appointment (`ftco-appointment`, image bg): "Booking an Appointment" +
     "Free Consultation" + form (Select services: Change Oil, Battery
     Replace, Change Tire; Your Name, Vehicle number, Date, Time, Message;
     "Send message" button).
  8. Testimonials (`testimony-section bg-light`): kicker "Testimonies" +
     "Happy Clients & Feedbacks" — carousel of 3 slides, each with quote
     icon, quote text, avatar, "Roger Scott" / "Marketing Manager".
  9. Blog (`ftco-section`): kicker "News & Blog" + "Latest news from our
     blog" — 3 post cards (meta "Posted by John doe · 24 February 2020",
     title "Best wheel alignment & air conditioning").
  10. Pricing (`ftco-section bg-light`): kicker "Price & Plans" +
      "Pricing" — 4 plans (First PMS $78.98, Engine Diagnostics $83.75, Tow
      Truck $85.00, Car Wash $30.50), each with a "Get Started" button.
  11. Projects (`ftco-section ftco-no-pb`): "Done Projects" — 4 image cards
      (Engine → "Engine Testing Complated", Oil Change → "Change Oil
      Completed", Engine → "Engine Diagnostics", Tire → "Tire Change").
  12. Footer (`footer ftco-section`): "Torquely." + blurb; Services column
      (Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, Car
      Maintenance); Contact information (203 Fake St. Mountain View, San
      Francisco, California, USA, +2 392 3929 210, info@yourdomain.com);
      Business Hours (Opening Days: Monday – Friday 9am to 20pm, Saturday
      9am to 17pm; Vacations: All Sunday Days, All Official Holidays) +
      copyright.
- **Design tokens extracted from the DOM + CSS (`css/style.css`):**
  - Brand colors: **orange #f79f24** (primary accent, buttons, active nav)
    - **blue #064acb** (secondary: intro strip, service icons) + dark
      #212529/#343a40 headings/top bar; white/light (#f8f9fa) alternating
      sections.
  - Font: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: `.btn` — filled orange primary, dark secondary, padding
    .75rem 1.25rem, uppercase bold; `.subheading` — small blue uppercase
    kicker above centered section titles; flat icon cards (blue circular
    icon + text beside it); image-backed hero/counter/appointment/footer
    sections.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/torquely-<n>/<w>/<h>`); icons → lucide-react
  (MapPin, Phone, Menu, X, Wrench, Droplet, Disc, BatteryCharging, Cog,
  Truck, Quote, CalendarCheck, Send, ChevronRight, Clock, Mail); brand
  icons → inline SVG (BrandIcon with facebook, x, instagram, dribbble);
  Poppins via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome; carousels rebuilt with a dependency-free index + dots
  pattern (hero 2 slides, testimonials 3 slides).

Torquely lives in `apps/torquely` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with a dark top strip (address,
phone, social icons), the site name "Torquely", anchor links to the page's
sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Torquely page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Torquely" and links to
  About, Services, Projects, Blog, and Contact
- **AND** the navbar SHALL show the address "721 New York NY 10016", the
  phone "(+01) 123 456 7890", and social icon links
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero carousel with two slides, each
with a kicker, a level-1 headline, and a booking button, plus dot
indicators.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Make your car last longer"
- **AND** it SHALL show a "Book an appointment" button

#### Scenario: Hero slide navigation

- **GIVEN** the hero is rendered
- **WHEN** the user activates the second dot
- **THEN** the level-1 heading SHALL change to "It's time to come to repair
  your car"

### Requirement: Intro strip

The system SHALL render a blue intro strip with a wrench icon, a readiness
headline, and a booking call-to-action.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro strip is displayed
- **THEN** it SHALL show "Are you ready?" and "Let's repair it now!"
- **AND** it SHALL show a "Book an Appointment" link pointing to the
  appointment section

### Requirement: Services section

The system SHALL render a services section with six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our car services"
- **AND** it SHALL show cards for Oil change, Tire Change, Batteries,
  Engine Repair, Tow Truck, and Car Maintenance, each with a "Read more"
  link

### Requirement: About section

The system SHALL render an about section with a headline, a paragraph, an
image, and three value columns (Mission, Vision, Value).

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "We help more than 45 years serving
  customer car"
- **AND** it SHALL show columns for Our Mission, Our Vision, and Our Value

### Requirement: Statistics section

The system SHALL render a statistics section with four counters.

#### Scenario: Statistics content

- **GIVEN** the page is rendered
- **WHEN** the statistics section is displayed
- **THEN** it SHALL show counters for "Years of Experienced" (45), "Project
  completed" (8500), "Happy Customers" (2342), and "Award Winning" (30)

### Requirement: Appointment section

The system SHALL render an appointment booking section with a form that
shows a confirmation after a valid submit.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL contain a heading "Free Consultation"
- **AND** it SHALL show a service select and fields for name, vehicle
  number, date, time, and message

#### Scenario: Appointment confirmation

- **GIVEN** the appointment form is displayed
- **WHEN** the user fills the required fields and submits
- **THEN** a confirmation message SHALL be shown

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with three slides and dot
indicators.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Clients & Feedbacks"
- **AND** it SHALL show a quote from "Roger Scott"

#### Scenario: Testimonial slide navigation

- **GIVEN** the testimonials carousel is rendered
- **WHEN** the user activates the third dot
- **THEN** the third testimonial SHALL be displayed

### Requirement: Blog section

The system SHALL render a blog section with three post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Latest news from our blog"
- **AND** it SHALL show three posts titled "Best wheel alignment & air
  conditioning"

### Requirement: Pricing section

The system SHALL render a pricing section with four plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Pricing"
- **AND** it SHALL show plans for First PMS ($78.98), Engine Diagnostics
  ($83.75), Tow Truck ($85.00), and Car Wash ($30.50), each with a "Get
  Started" button

### Requirement: Projects section

The system SHALL render a projects section with four image cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Done Projects"
- **AND** it SHALL show cards for "Engine Testing Complated", "Change Oil
  Completed", "Engine Diagnostics", and "Tire Change"

### Requirement: Footer

The system SHALL render a footer with contact information, business hours,
and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show contact information and business hours
- **AND** it SHALL show a copyright line for Torquely

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Torquely app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Torquely — Car Repair Template"

# Template: Dentaglow (Dental Clinic)

## Purpose

Dentaglow is a dental clinic landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Dento"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Dento" — dental clinic template
  (source: https://colorlib.com/wp/template/dento/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dento/
  (HTTP 200; sections, headings, copy, forms extracted).
- **Section order (1:1):** Header (white bg, logo + address/email top bar
  + nav links + social icons + dark mode toggle) → Hero/Welcome (full-width
  image slider with dark overlay, heading "We Believe Everyone Should Have
  Easy Access To Great Dental Care", subtext, two CTAs: "Get Started" + "Contact
  Us") → About Us (white bg, heading "About Us", 3 skill bars: Experience
  Dentist, Modern Equipment, Friendly Staff, plus stats counters: 20 Years,
  700+ Patients, 120 Certificates, 40+ Awards) → CTA (teal bg, heading
  with description, two buttons) → Services (dark overlay bg, heading "Our
  Services", 6 service cards: Teeth Whitening, Missing Teeth, Cosmetic
  Dentistry, Examination, Teeth Pain, plus video play area) → Pricing
  (white bg, heading "Pricing", table with columns: Service Names, Stage,
  Price — 10 rows of dental services) → Appointment (dark overlay bg,
  heading, booking form with patient name, phone, email, DOB, date, message,
  confirm button) → Dentist Team (white bg, heading "Our Dentist", 3 dentist
  cards with photo, name, specialty, hover social links) → Testimonials
  (dark overlay bg, testimonial carousel with avatar + quote) → Blog (white
  bg, heading "Blog", 3 blog cards with image, date, title, excerpt,
  comments count) → Footer (dark overlay bg, 4 columns: contact info,
  opening hours, quick links, newsletter form, social icons, copyright bar).

- **Design tokens extracted from the demo stylesheet (style.css):**
  - **Primary Brand Color:** Teal `#0891b2` (buttons, accents, hover states,
    icons, links, form focus ring)
  - **Secondary Color:** Teal-green `#0f766e` (secondary accents)
  - **Primary Hover:** Darker teal `#0e7490`
  - **Neutral Dark:** Dark `#1e293b`, `#0f172a` (used for section overlays,
    footer bg)
  - **Neutral Light:** Off-white `#f8f9fa`, `#f8fafc` (body bg, light sections)
  - **Heading Color:** Dark `#212529`
  - **Body Text:** Gray `#576a7d`, `#707070`
  - **Font Family:** "Montserrat", sans-serif (weights 300–700)
  - **Button Shapes:** Rounded 0.5rem border-radius, uppercase text, bold 600,
    min-width 170px, padding 0.875rem 2rem
  - **Button Variants:** Primary `#0891b2` bg / white text; Secondary (btn-2)
    white bg / `#0891b2` text
  - **Section Padding:** `section-padding-100` (100px top/bottom), some with
    `-0` suffix for reduced vertical padding
  - **Dark Overlay Sections:** `bg-img bg-gradient-overlay jarallax` pattern
    for hero, services, appointment, testimonials, footer
  - **Border Radius (general):** 0.375rem default, 0.5rem for buttons
  - **Box Shadows:** Subtle `0 1px 2px 0 rgba(0,0,0,0.05)` on buttons,
    hover `0 4px 6px -1px rgba(0,0,0,0.1)`

## Requirements

### Requirement: Header Navigation

Users SHALL see a header with top info bar (address, email, social icons),
main nav (logo, links: Home, About, Service, Pricing, Blog, Contact, dark
mode toggle, booking button), and responsive hamburger menu on mobile.

#### Scenario: User sees the header with nav links

- **WHEN** the user opens Dentaglow
- **THEN** they see a top bar with address "28 Jackson Street, Chicago"
  and email "info.dentaglow@gmail.com"
- **AND** they see social icon links (Facebook, Twitter, LinkedIn, Pinterest)
  in the top bar
- **AND** they see the logo "Dentaglow" in the main header
- **AND** they see navigation links: Home, About, Service, Pricing, Blog,
  Contact
- **AND** they see a dark mode toggle icon
- **AND** they see a "Booking Now" button in the header

#### Scenario: Header is sticky on scroll

- **WHEN** the user scrolls down the page
- **THEN** the header remains fixed at the top of the viewport

### Requirement: Hero / Welcome Section

Users SHALL see a full-width hero slider with background images, dark overlay,
heading, subtext, and two CTA buttons.

#### Scenario: User sees the hero banner

- **WHEN** the user opens Dentaglow
- **THEN** they see a full-width hero with a background image and dark overlay
- **AND** the heading reads "We Believe Everyone Should Have Easy Access To
  Great Dental Care"
- **AND** there is a descriptive paragraph about dental opportunities
- **AND** there are two CTA buttons: "Get Started" (teal) and "Contact Us"
  (white outline)

#### Scenario: Hero has multiple slides

- **WHEN** the user views the hero section
- **THEN** there are multiple slides with different background images
- **AND** navigation dots or arrows allow switching between slides

### Requirement: About Us Section

Users SHALL see an About Us section with heading, description, 3 skill bars
with percentages, and 4 stat counters.

#### Scenario: User views the About Us section

- **WHEN** the user scrolls to the About Us section
- **THEN** they see the heading "About Us"
- **AND** they see 3 skill bars: "Experience Dentist", "Modern Equipment",
  "Friendly Staff" with percentage fill animations
- **AND** they see 4 stat counters: "20 Years Of Experience", "700+ Happy
  Patients", "120 Certificate", "40+ Awards"

### Requirement: CTA Section

Users SHALL see a call-to-action section with teal background, heading,
description, and two buttons.

#### Scenario: User views the CTA section

- **WHEN** the user scrolls to the CTA section
- **THEN** they see a teal-colored background section
- **AND** there is a heading and description text
- **AND** there are two buttons

### Requirement: Services Section

Users SHALL see a services section with dark overlay background, heading,
6 service cards, and a video play area.

#### Scenario: User views the services

- **WHEN** the user scrolls to the Services section
- **THEN** they see the heading "Our Services"
- **AND** they see 6 service cards: Teeth Whitening, Missing Teeth,
  Cosmetic Dentistry, Examination, Teeth Pain, and one more
- **AND** each service has an icon, title, and brief description
- **AND** there is a video play button area below the services

### Requirement: Pricing Table Section

Users SHALL see a pricing table with dental services, stages, and prices.

#### Scenario: User views the pricing table

- **WHEN** the user scrolls to the Pricing section
- **THEN** they see the heading "Pricing"
- **AND** they see a table with columns: Service Names, Stage, Price
- **AND** the table includes at least 10 dental service rows with prices
- **AND** each row has a service name, frequency/stage, and dollar amount

### Requirement: Appointment / Booking Section

Users SHALL see an appointment booking form with dark overlay background.

#### Scenario: User views the appointment form

- **WHEN** the user scrolls to the Appointment section
- **THEN** they see a dark overlay background section
- **AND** there is a heading "Book an Appointment" or similar
- **AND** the form has fields: patient name, phone, email, date of birth,
  appointment date, message
- **AND** there is a submit/confirm button

### Requirement: Dentist Team Section

Users SHALL see a team section with 3 dentist cards.

#### Scenario: User views the dentist team

- **WHEN** the user scrolls to the Dentist section
- **THEN** they see the heading "Our Dentist"
- **AND** they see 3 dentist cards in a row
- **AND** each card shows a photo, name, and specialty
- **AND** on hover, social media links appear over the photo

### Requirement: Testimonials Section

Users SHALL see a testimonials carousel with dark overlay background.

#### Scenario: User views the testimonials

- **WHEN** the user scrolls to the Testimonials section
- **THEN** they see a dark overlay background section
- **AND** they see testimonial slides with avatar, quote text
- **AND** there are navigation arrows/dots to cycle through testimonials

### Requirement: Blog Section

Users SHALL see a blog section with 3 blog post cards.

#### Scenario: User views the blog cards

- **WHEN** the user scrolls to the Blog section
- **THEN** they see the heading "Blog"
- **AND** they see 3 blog cards in a row
- **AND** each card has an image, date badge, title, excerpt, and
  comments count

### Requirement: Footer

Users SHALL see a footer with 4 columns, opening hours, newsletter form,
and copyright bar.

#### Scenario: User views the footer

- **WHEN** the user scrolls to the footer
- **THEN** they see a dark overlay background footer
- **AND** they see contact info (address, phone, email)
- **AND** they see opening hours: Mon-Wed 8-18, Thu-Fri 8-17,
  Sat 9-17, Sun 10-17, Holiday Closed
- **AND** they see quick links: About, FAQs, Contact, Policy, News,
  Advisors, Careers, Dentist, Services, Legals
- **AND** they see a newsletter signup form
- **AND** they see social media icon links
- **AND** they see a copyright bar with "Component Dock" link

## Verification checklist

- [ ] Header: sticky, top bar with contact info, nav links, dark mode toggle,
  booking button, responsive hamburger
- [ ] Hero: full-width slider, dark overlay, heading, subtext, two CTA buttons
- [ ] About Us: heading, 3 skill bars, 4 stat counters
- [ ] CTA: teal background, heading, description, two buttons
- [ ] Services: dark overlay bg, 6 service cards, video play area
- [ ] Pricing: table with 10+ rows, columns for service/stage/price
- [ ] Appointment: dark overlay bg, booking form with 6+ fields, submit button
- [ ] Dentist Team: 3 cards with photo/name/specialty, hover social links
- [ ] Testimonials: dark overlay bg, carousel with avatars and quotes
- [ ] Blog: 3 cards with image, date badge, title, excerpt, comments
- [ ] Footer: 4 columns, contact, hours, links, newsletter, social, copyright
- [ ] Design tokens: Montserrat font, #0891b2 primary, 0.5rem button radius
- [ ] All sections match the 1:1 section order from the original

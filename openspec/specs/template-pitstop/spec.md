# Template: Pitstop (Automotive / Auto Repair Landing)

## Purpose

Pitstop is a single-page auto-repair landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Autorepair" free
template design (source: https://colorlib.com/wp/template/autorepair/), built
under a DIFFERENT name (Pitstop) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Live preview: https://preview.colorlib.com/theme/autorepair/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/autorepair-free-template.jpg

Design tokens extracted from the ColorLib preview CSS (css/style.css):

- Font: Poppins (Google Fonts, weights 300–900)
- Primary color: #007bff (Bootstrap blue) — navbar, links, service icons, buttons
- Accent color: #f79f24 (amber/orange) — CTA buttons, active states, highlights
- Dark background: #1d2124 (top bar), #000000 (hero overlay, footer)
- Light backgrounds: #f7f7f7, #f8f9fa (alternate section backgrounds)
- Body text: #666 (default body), headings in dark/black
- Button style: Bootstrap default radius (0.25rem), blue primary + orange accent
- Navbar: dark (bg-dark #343a40), transparent overlay on hero, sticky
- Section backgrounds: white (default), #f7f7f7 (alt), hero with image + dark overlay
- Top bar: black background, white text, social icons
- CTA banner: split layout — blue left half + orange right half

Screenshot analysis (visual):

- Dark top bar with contact info (address, phone) and social icons
- White navbar with logo ("Autorepair."), nav links, and search bar
- Full-width hero with mechanic photo, dark overlay, heading, orange CTA button
- Split CTA strip: blue "Are you ready?" left, orange "Book an Appointment" right
- Services grid: 6 cards (3x2), blue circular icons, white background
- About/stats section: light background, counters, "45+ years" messaging
- Free Consultation: split layout — image left, dark form right
- Testimonials: light background, owl carousel
- Blog: 3 news cards
- Pricing: 3 tier cards
- Done Projects: image gallery
- Footer: dark background, multi-column (brand, services, contact info)

## Requirements

### Requirement: Top bar with contact information

The template SHALL display a dark top bar at the very top of the page containing
the brand name, physical address, phone number, and social media icon links
(Facebook, Twitter, Instagram, Dribbble).

#### Scenario: Top bar renders

- **WHEN** the page loads
- **THEN** a dark bar appears at the top with address "721 New York NY 10016"
- **AND** phone number "(+01) 123 456 7890" is displayed
- **AND** social media icons are visible

### Requirement: Navbar with navigation and search

The template SHALL display a dark navigation bar with the brand name "Pitstop.",
navigation links (Home, About, Services, Project, Blog, Contact), and a
search input with submit button. The navbar SHALL be sticky on scroll.

#### Scenario: Navbar renders all links

- **WHEN** the page loads
- **THEN** the navbar displays "Pitstop." brand
- **AND** navigation links for Home, About, Services, Project, Blog, Contact are present
- **AND** a search input with button is visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile hamburger menu button
- **THEN** a collapsible mobile menu opens with all navigation links

### Requirement: Hero section with slider and CTA

The template SHALL display a full-width hero section with a background image
of a mechanic working, a dark semi-transparent overlay, heading text
"It's time to come to repair your car", subtext, and an orange
"Book an Appointment" CTA button.

#### Scenario: Hero renders

- **WHEN** the hero section is visible
- **THEN** the heading "It's time to come to repair your car" is displayed
- **AND** an orange CTA button labeled "Book an Appointment" is present
- **AND** a dark overlay covers the background image

### Requirement: CTA banner strip

The template SHALL display a split horizontal banner directly below the hero.
The left half SHALL have a blue background with heading "Are you ready?" and
text "Let's repair it now!" with a gear icon. The right half SHALL have an
orange background with "Book an Appointment" text.

#### Scenario: CTA banner renders

- **WHEN** the user scrolls past the hero
- **THEN** a blue-and-orange split banner is visible
- **AND** the left side shows "Are you ready?" heading
- **AND** the right side shows "Book an Appointment"

### Requirement: Services grid

The template SHALL display a "Our car services" section with 6 service cards
in a 3-column responsive grid. Each card SHALL contain a blue circular icon,
a service title (Oil Change, Tire Change, Batteries, Engine Repair,
Tow Truck, Car Maintenance), a description, and a "Read More" link.

#### Scenario: All 6 services render

- **WHEN** the services section is visible
- **THEN** 6 service cards are displayed in a responsive grid
- **AND** each card shows a blue icon, title, description, and "Read More" link

#### Scenario: Responsive layout

- **WHEN** the viewport is below 768px
- **THEN** service cards stack in a single column

### Requirement: About / stats counter section

The template SHALL display an "about" section on a light background with
the heading "We help more than 45 years serving customer car", descriptive
text, and 4 counter statistics (e.g., number of projects, happy clients,
years of experience, team members).

#### Scenario: Stats counters render

- **WHEN** the about section is visible
- **THEN** the heading "We help more than 45 years" is displayed
- **AND** 4 stat counters are visible with numbers

### Requirement: Free Consultation appointment form

The template SHALL display a split-layout "Free Consultation" section.
The left half SHALL show a background image, and the right half SHALL
contain a dark-background form with inputs for name, date, time,
phone number, and a "Send Message" button.

#### Scenario: Consultation form renders

- **WHEN** the consultation section is visible
- **THEN** a dark-background form is displayed on the right
- **AND** inputs for name, appointment date, appointment time, and phone are present
- **AND** a "Send Message" submit button is visible

### Requirement: Testimonials carousel

The template SHALL display a "Happy Clients & Feedbacks" section on a light
background with an owl-carousel-style slider showing client testimonials.
Each testimonial SHALL include a quote, client name, and a small avatar image.

#### Scenario: Testimonials render

- **WHEN** the testimonials section is visible
- **THEN** at least 3 testimonials are displayed in a carousel
- **AND** each testimonial has a quote, name, and avatar

### Requirement: Blog section

The template SHALL display a "Latest news from our blog" section with 3
blog post cards. Each card SHALL show a post image, date, author, title,
and a "Read More" link.

#### Scenario: Blog posts render

- **WHEN** the blog section is visible
- **THEN** 3 blog post cards are displayed
- **AND** each card shows an image, date, title, and "Read More" link

### Requirement: Pricing section

The template SHALL display a "Pricing" section with 3 pricing tier cards.
Each card SHALL show a tier name, price, feature list, and a
"Get Started" button. One tier SHALL be highlighted as featured.

#### Scenario: Pricing tiers render

- **WHEN** the pricing section is visible
- **THEN** 3 pricing cards are displayed
- **AND** one card is visually highlighted as the recommended tier
- **AND** each card shows a price, feature list, and CTA button

### Requirement: Done Projects gallery

The template SHALL display a "Done Projects" section with an image gallery
showing completed auto repair projects in a responsive grid.

#### Scenario: Projects gallery renders

- **WHEN** the projects section is visible
- **THEN** a grid of project images is displayed

### Requirement: Footer with contact and Component Dock link

The template SHALL display a dark footer with 4 columns: brand logo and
description, services list with check icons, contact information (address,
phone, email), and a newsletter signup form. The footer SHALL include a
"Component Dock" link as the attribution link.

#### Scenario: Footer renders

- **WHEN** the footer is visible
- **THEN** 4 columns are displayed (brand, services, contact, newsletter)
- **AND** social media icons are present
- **AND** a "Component Dock" link is visible

#### Scenario: Newsletter form

- **WHEN** the user views the newsletter column
- **THEN** an email input and submit button are displayed

## Verification checklist

- [ ] Poppins font loaded from Google Fonts
- [ ] Primary blue (#007bff) used for interactive elements
- [ ] Accent orange (#f79f24) used for CTA buttons
- [ ] Top bar: dark background, contact info, social icons
- [ ] Navbar: dark, sticky, logo, nav links, search bar
- [ ] Hero: full-width image, dark overlay, heading, orange CTA
- [ ] CTA banner: split blue/orange layout
- [ ] Services: 6 cards in responsive 3-col grid
- [ ] About: stats counters, "45+ years" heading
- [ ] Consultation: split layout, form on dark background
- [ ] Testimonials: carousel on light background
- [ ] Blog: 3 post cards
- [ ] Pricing: 3 tiers, one highlighted
- [ ] Projects: image gallery grid
- [ ] Footer: dark, 4-column, Component Dock link
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/

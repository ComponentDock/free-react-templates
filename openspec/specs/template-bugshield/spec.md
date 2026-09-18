# Template: BugShield (Pest Control Landing)

## Purpose

BugShield is a single-page pest-control landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "PestControl" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a service-oriented pest control landing page: a hero slider
with background image, an overlapping appointment booking form, an about
section with service list, an 8-card services grid, a "why choose us"
section, animated stat counters, testimonials with star rating, a call-to-action
banner, latest blog posts, and a dark footer. BugShield recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "PestControl" — pest control website template
  (source: https://colorlib.com/wp/template/pestcontrol/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/pestcontrol/
  (HTTP 200 — full rendered DOM + `css/style.css` (51KB) extracted; this
  non-Astro template is served directly by the preview portal). The
  TEMPLATES.md screenshot (`pestcontrol-colorlib-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):**
  1. Top bar: address, hours, phone, social icons (facebook, twitter, instagram, linkedin) on a dark strip.
  2. Header: logo left, nav menu (Home, Services, Pages dropdown, Blog, Contact), search icon, "Appointment" CTA button (pill-shaped).
  3. Hero slider (owl-carousel): full-width background images with overlay; "Pest Control" label (brand color #d7553b), heading "Keep your House clean & Safe" (white, large), tagline "Trusted. Experienced. Dedicated.", "Learn More" button (blue #1c6ab8).
  4. Filter / Appointment form (overlaps hero, raised white box): heading "Ready To Appointment" + form fields: service dropdown (Choose Services / Ant / Spider), Your Name, Your Phone, Email Address inputs + "Appointment" submit button.
  5. About section (2 cols): left — heading "Welcome to the Pest Control Services Company", description, "How Does It Work?" blurb + "Services We Offers" list (Facility Management, Pest control, Energy management, Technical maintenance with icon), "About Us" button; right — image collage (1 large + 2 small).
  6. Services section (8 cards, 4x2 grid): section title "Our Services" + subtitle, 8 pest types with icon: Cockroaches, Ants, Rodents, Scorpion, Silver Fish, Millipedes, Spiders, Centipede — each card has icon image, name, description.
  7. Choose Us section (3 cols): left — heading "Why People Choose Pest Control" + description + "Read More" button; middle — image; right — 3 feature items with icons: Comfortable Price, Safe And Clean, Friendly Customer Service.
  8. Counter section (blue bg #1c6ab8, 4 columns): 50+ Years Of Experience, 1254+ Satisfied Clients, 2000+ Happy Customers, 42+ Awards & Certificates — each with icon.
  9. Testimonials section: heading "Testimonials" + rating widget (4.7 stars, "3000 Rating") on the right, owl-carousel slider with testimonial quotes and author names.
  10. Call To Action (full-width background image + dark overlay): "Have Any Question?" + "Call Us: (+800) 1234 56781" + description text, image on right.
  11. Latest Blog Post section: section title + 1 large featured post (image + date + heading + excerpt + "Read More") + 3 smaller posts (image + date + title + excerpt).
  12. Footer (4 cols, dark bg #222222): col 1 — logo + description + phone + "Request An Appointment" button; col 2 — Useful Links (About Us, Contact Us, Testimonials, Terms & Conditions, Affiliate Program); col 3 — Our Services (Pest Control Services, Lawn and Landscape, Termite Treatment, Irrigation Services, Mosquito Services); col 4 — Contact Us (address, fax, email, working hours). Copyright bar: copyright text + social icons (facebook, twitter, linkedin, pinterest).
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **reddish-orange #d7553b** (`.primary-btn` background, hero label text, appointment form).
  - Secondary/accent color: **blue #1c6ab8** (hero CTA button, filter form submit bg, counter section background, rating icon bg).
  - Text: headings `#0d0d0d`, body `#4e4e4e`, global `#111111`, light `#b7b7b7` (disabled/placeholder).
  - Font: **"Lato"** (Lato, sans-serif) via Google Fonts — weights 300, 400, 700, 900.
  - Buttons: `.primary-btn` — `background: #d7553b`, white text, `border-radius: 60px` (pill shape), padding `14px 30px`.
  - Section backgrounds: `#1c6ab8` (counter), `#222222` (footer), image backgrounds with overlay (hero, call-to-action).
  - Services cards: white bg, box-shadow `10px 5px 30px rgba(35,46,14,0.05)`.
  - Section titles: 42px h2, `#0d0d0d`, bold, centered with 45px bottom margin.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/bugshield-<n>/<w>/<h>`); icons → lucide-react
  (Bug, Shield, Clock, MapPin, Phone, Mail, Search, Menu, ChevronDown,
  Star, Calendar, ArrowRight, Facebook, Twitter, Instagram, Linkedin,
  Pinterest — social icons as inline SVG where lucide-react lacks them);
  Lato via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.

BugShield lives in `apps/bugshield` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Header

- **Scenario: Fixed top bar with contact info**
  Given the page loads
  When I look at the top bar
  Then I see address text, business hours, phone number, and social icons (facebook, twitter, instagram, linkedin)

- **Scenario: Main navigation with logo and CTA**
  Given the page loads
  When I look at the header
  Then I see the logo on the left, navigation links (Home, Services, Pages, Blog, Contact), a search icon, and an "Appointment" button styled as a pill

- **Scenario: Pages dropdown menu**
  Given the page loads
  When I hover over or click "Pages" in the nav
  Then a dropdown appears with links (About, Services Details, Blog Details)

### Hero Slider

- **Scenario: Hero displays slider with background image and overlay**
  Given the page loads
  When I look at the hero section
  Then I see a full-width slider with background images and dark overlay

- **Scenario: Hero shows pest control headline and CTA**
  Given the hero slider is visible
  When I read the hero text
  Then I see a "Pest Control" label in brand color, heading "Keep your House clean & Safe", tagline "Trusted. Experienced. Dedicated.", and a "Learn More" button

- **Scenario: Hero supports multiple slides**
  Given the hero slider is visible
  When I navigate slides
  Then I can switch between at least 2 slides with navigation dots or arrows

### Appointment Form

- **Scenario: Appointment form visible over hero area**
  Given the page loads
  When I look below the hero
  Then I see a white form box with heading "Ready To Appointment"

- **Scenario: Form fields are present**
  Given the appointment form is visible
  When I inspect the fields
  Then I see: a service dropdown, "Your Name" input, "Your Phone" input, "Email Address" input, and an "Appointment" submit button

- **Scenario: Form submission**
  Given the appointment form is filled with valid data
  When I click "Appointment"
  Then the form submits (no validation errors shown)

### About Section

- **Scenario: About section with two-column layout**
  Given the page loads
  When I scroll to the About section
  Then I see a left column with heading "Welcome to the Pest Control Services Company", description text, "How Does It Work?" blurb, services list, and "About Us" button; and a right column with image collage

- **Scenario: Services list in about section**
  Given the about section is visible
  When I look at the services list
  Then I see 4 items: Facility Management, Pest control, Energy management, Technical maintenance (each with an icon)

### Services Section

- **Scenario: Services grid displays 8 pest types**
  Given the page loads
  When I scroll to the Services section
  Then I see a centered section title "Our Services" with subtitle and 8 service cards in a 4-column grid

- **Scenario: Each service card has icon, name, and description**
  Given the services section is visible
  When I look at any service card
  Then I see an icon, a pest name (Cockroaches, Ants, Rodents, Scorpion, Silver Fish, Millipedes, Spiders, or Centipede), and a description paragraph

### Choose Us Section

- **Scenario: Choose Us with three-column layout**
  Given the page loads
  When I scroll to the Choose Us section
  Then I see left column (heading + description + "Read More" button), middle column (image), and right column (3 feature items with icons)

- **Scenario: Feature items displayed**
  Given the Choose Us section is visible
  When I look at the feature list
  Then I see: Comfortable Price, Safe And Clean, Friendly Customer Service

### Counter Section

- **Scenario: Counter section with blue background and 4 stats**
  Given the page loads
  When I scroll to the counter section
  Then I see a blue (#1c6ab8) background with 4 stat columns

- **Scenario: Stat values are displayed**
  Given the counter section is visible
  When I read the stats
  Then I see: 50+ Years Of Experience, 1254+ Satisfied Clients, 2000+ Happy Customers, 42+ Awards & Certificates

### Testimonials Section

- **Scenario: Testimonials with rating widget**
  Given the page loads
  When I scroll to the testimonials section
  Then I see heading "Testimonials" on the left, and a rating widget on the right showing 4.7 stars and "3000 Rating"

- **Scenario: Testimonial carousel**
  Given the testimonials section is visible
  When I interact with the carousel
  Then I see testimonial quotes with author names

### Call To Action

- **Scenario: CTA banner with background image**
  Given the page loads
  When I scroll to the call-to-action section
  Then I see a full-width background image with dark overlay

- **Scenario: CTA displays contact info**
  Given the CTA section is visible
  When I read the text
  Then I see "Have Any Question?", "Call Us: (+800) 1234 56781", and a descriptive paragraph

### Latest Blog Posts

- **Scenario: Blog section with 1 featured + 3 small posts**
  Given the page loads
  When I scroll to the blog section
  Then I see a centered section title "Latest Blog Post" with subtitle, 1 large featured post (image + date + heading + excerpt + "Read More"), and 3 smaller posts (image + date + title + excerpt)

### Footer

- **Scenario: Dark footer with 4 columns**
  Given the page loads
  When I scroll to the footer
  Then I see a dark (#222222) footer with 4 columns: logo/about/phone + Useful Links + Our Services + Contact Us

- **Scenario: Footer includes Component Dock link**
  Given the footer is visible
  When I look at the footer
  Then I see a "Made with Component Dock" or similar attribution linking to https://www.componentdock.com/

- **Scenario: Copyright bar with social icons**
  Given the footer is visible
  When I look at the copyright bar
  Then I see a copyright notice and social icons (facebook, twitter, linkedin, pinterest)

## Verification checklist

- [ ] Section order matches original 1:1 (header, hero, form, about, services, choose us, counters, testimonials, CTA, blog, footer)
- [ ] Brand color #d7553b used for primary buttons and hero labels
- [ ] Secondary color #1c6ab8 used for hero CTA, counter bg, form submit
- [ ] Font is Lato (Google Fonts) — weights 300/400/700/900
- [ ] Primary buttons are pill-shaped (border-radius 60px)
- [ ] All photos replaced with seeded picsum placeholders (no ColorLib assets)
- [ ] Footer links to ComponentDock (no ColorLib attribution)
- [ ] No ColorLib references in app code (spec/docs only)
- [ ] App lives in `apps/bugshield` with package name `@free-react-templates/bugshield`
- [ ] `npm run spec:validate` passes
- [ ] TypeScript strict mode — no `any` types
- [ ] All interactive elements have proper accessibility (semantic HTML, aria-labels)

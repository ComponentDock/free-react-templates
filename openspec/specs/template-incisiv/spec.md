# Template: Incisiv (Dentist)

## Purpose

Incisiv is a dental practice landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Prodent"
dental website template, built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Prodent" — dental practice template
  (source: https://colorlib.com/wp/template/prodent/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/prodent/
  (HTTP 200; sections, headings, copy, forms extracted).
- **Screenshot analyzed:** https://colorlib.com/wp/wp-content/uploads/sites/2/prodent-free-template.jpg
  (AVIF image converted to PNG, 1200x946, visual design noted).
- **Section order (1:1):** Header (fixed white bg, site logo "ProDent",
  nav links: Home, About, Service, Blog, Contact, flaticon icon) →
  Header Info Bar (4 columns: address, opening hours, phone, address) →
  Hero Slider (full-width owl-carousel with dental bg image, heading
  "Love your smile", CTA "Read More" green button, slide indicators 01/02) →
  Banner (green #71cd29 bg, "Schedule your appointment for a free
  consultation", white CTA "Read More") →
  About (white bg, split layout: image left, text right "We Care About Your
  teeth") →
  Facts (bg image with overlay, 4 stat counters: X-rays 531, Tooth Brushes
  14K, Extractions 678, Happy Patients 2134, flaticon icons) →
  Services (light gray #eff2f4 bg, 6 service cards in 2-row 3-col grid:
  Crowns Bridges, Implants, Teeth Whitening, Root Canals, Wisdom Teeth,
  Braces, each with flaticon icon + title + description) →
  Gallery (4-column photo grid) →
  Testimonials (carousel with quote marks, text, name "Jessica Brown",
  title "Pacient", author avatar images) →
  Newsletter (green #71cd29 bg, heading "Subscribe to our newsletter",
  email input + "Subscribe" dark button) →
  Footer Top (bg image, 3 columns: about text + social icons, Our Services
  links list, Opening Hours table Mon-Sun 8:00am-12:00pm) →
  Footer (dark #0d0d0d bg, nav menu: Home/About us/Services/Blog/Contact,
  copyright bar with Component Dock link).

- **Design tokens extracted from the demo stylesheet (css/style.css):**
  - **Primary Brand Color:** Green `#71cd29` (buttons, banner bg, newsletter
    bg, accent color, hover states)
  - **Neutral Dark:** Near-black `#0d0d0d` (footer bg)
  - **Neutral Medium:** Dark gray `#2d2d2d` (text, dark button, accordion)
  - **Neutral Light:** Cool gray `#eff2f4` (services bg, accordion bg)
  - **Light Off-white:** `#f4f8fb` (featured section bg)
  - **Blue Accent:** `#1b9ed2` (page-info overlay, secondary accent)
  - **Blue Hover:** `#43afda` / `#36a3cf` / `#2897c3` (interactive states)
  - **Red Accent:** `#f44336` (error/alert, likely unused in main template)
  - **Font Family:** "Montserrat", sans-serif (weights 400, 500, 600, 700)
  - **Button Primary:** Green `#71cd29`, white text, border-radius 5px,
    min-width 175px, padding 18px 15px
  - **Button Dark:** `#2d2d2d` bg, green `#71cd29` text
  - **Button Light:** White bg, dark `#2d2d2d` text
  - **Heading Color:** Dark `#2d2d2d`
  - **Body Text:** Gray `#696969` / `#7e7e7e`
  - **Section spacing:** `spad` class adds consistent padding (padding-top
    ~80px implied by .spad rule)

## Requirements

### Requirement: Header Navigation

Users SHALL see a fixed header with site logo, navigation links, and a decorative flaticon icon.

#### Scenario: User sees the fixed header with nav links

- **WHEN** the user opens Incisiv
- **THEN** they see the logo "Incisiv" in the header (with tooth icon)
- **AND** they see navigation links: Home, About, Service, Blog, Contact
- **AND** the header has a white background
- **AND** the Home link is visually active/highlighted

### Requirement: Header Info Bar

Users SHALL see a 4-column info bar below the header with address, opening hours, phone, and address.

#### Scenario: User views the header info bar

- **WHEN** the user opens Incisiv
- **THEN** they see a 4-column info bar below the header
- **AND** column 1 shows address: "Dental Street 20199, Denver, USA"
- **AND** column 2 shows opening hours: "Mon - Sat: 8:00 - 19:00"
- **AND** column 3 shows phone: "+885 332 1568, Call us now!"
- **AND** column 4 shows address: "Dental Street 20199, Denver, USA"
- **AND** each column has a flaticon icon

### Requirement: Hero Slider

Users SHALL see a full-width hero slider with dental imagery, heading, description, and CTA button.

#### Scenario: User views the hero slider

- **WHEN** the user opens Incisiv
- **THEN** they see a full-width hero section with background dental image
- **AND** the heading reads "Love your smile"
- **AND** there is a description paragraph
- **AND** there is a green "Read More" CTA button
- **AND** there are slide indicators (01, 02) at the bottom

### Requirement: Banner (Appointment CTA)

Users SHALL see a green banner section with appointment prompt and CTA.

#### Scenario: User views the banner section

- **WHEN** the user scrolls past the hero
- **THEN** they see a green (#71cd29) background banner
- **AND** the heading reads "Schedule your appointment for a free consultation."
- **AND** there is a white "Read More" CTA button aligned to the right

### Requirement: About Section

Users SHALL see an about section with split layout: image left, text right.

#### Scenario: User views the about section

- **WHEN** the user scrolls to the About section
- **THEN** they see a white background section with split layout
- **AND** the left column contains a dental practice image
- **AND** the right column has heading "We Care About Your teeth"
- **AND** there is a description paragraph about the dental practice

### Requirement: Facts Section

Users SHALL see a facts/statistics section with 4 counter items over a background image.

#### Scenario: User views the facts section

- **WHEN** the user scrolls to the Facts section
- **THEN** they see a background image with 4 stat items
- **AND** each stat has a flaticon icon, number, and label
- **AND** the stats are: X-rays (531), Tooth Brushes (14K), Extractions (678), Happy Patients (2134)
- **AND** the section has white text over the dark image

### Requirement: Services Section

Users SHALL see a services grid with 6 dental service cards on a light gray background.

#### Scenario: User views the services section

- **WHEN** the user scrolls to the Services section
- **THEN** they see the heading "Our Services" centered
- **AND** there are 6 service cards in a 3-column, 2-row grid
- **AND** each card has a flaticon icon, title, and description
- **AND** the services are: Crowns Bridges, Implants, Teeth Whitening, Root Canals, Wisdom Teeth, Braces
- **AND** the section has a light gray (#eff2f4) background

### Requirement: Gallery Section

Users SHALL see a 4-column photo gallery grid.

#### Scenario: User views the gallery section

- **WHEN** the user scrolls to the Gallery section
- **THEN** they see 4 dental practice photos in a row
- **AND** each photo fills its column equally
- **AND** images are edge-to-edge (no padding between columns)

### Requirement: Testimonials Section

Users SHALL see a testimonials carousel with client quotes, names, and avatars.

#### Scenario: User views client testimonials

- **WHEN** the user scrolls to the Testimonials section
- **THEN** they see the heading "Testimonials" centered
- **AND** there is a carousel of testimonial cards
- **AND** each card has a quote mark, testimonial text, name, and title "Pacient"
- **AND** each card has an author avatar image

### Requirement: Newsletter Section

Users SHALL see a green newsletter signup section with email input and subscribe button.

#### Scenario: User views the newsletter section

- **WHEN** the user scrolls to the Newsletter section
- **THEN** they see a green (#71cd29) background section
- **AND** the heading reads "Subscribe to our newsletter"
- **AND** there is an email input field with placeholder "Your E-mail"
- **AND** there is a dark "Subscribe" button

### Requirement: Footer Top Section

Users SHALL see a footer top section with about text, services links, and opening hours over a background image.

#### Scenario: User views the footer top section

- **WHEN** the user scrolls to the Footer Top section
- **THEN** they see a background image section with 3 columns
- **AND** column 1 has about text and social media icons (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
- **AND** column 2 has "Our Services" links list (Dental Implants, Braces, Wisdom Teeth, Porcelain Veneers, Teeth Whitening, Dental Bridges)
- **AND** column 3 has "Opening Hours" table (Monday-Sunday, 8:00am - 12:00pm)

### Requirement: Footer

Users SHALL see a dark footer with navigation menu, copyright, and Component Dock link.

#### Scenario: User views the footer

- **WHEN** the user scrolls to the footer
- **THEN** they see a dark (#0d0d0d) background footer
- **AND** there is a navigation menu: Home, About us, Services, Blog, Contact
- **AND** there is a copyright notice
- **AND** the footer links to https://www.componentdock.com/ as "Component Dock"

## Verification checklist

- [ ] Header renders with logo, nav links, white background
- [ ] Header info bar shows 4 columns with icons
- [ ] Hero slider displays with bg image, heading, CTA
- [ ] Banner section is green with appointment text and white CTA
- [ ] About section has split layout with image and "We Care About Your teeth"
- [ ] Facts section shows 4 stat counters with icons
- [ ] Services section shows 6 cards on #eff2f4 background
- [ ] Gallery shows 4 equal-width images
- [ ] Testimonials carousel shows quotes with avatars
- [ ] Newsletter section is green with email form
- [ ] Footer top has 3 columns with services links and hours table
- [ ] Footer has dark bg, nav menu, Component Dock link
- [ ] No references to ColorLib in app code (only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use https://picsum.photos/seed/incisiv-<n>/<w>/<h>
- [ ] Font loaded: Montserrat from Google Fonts

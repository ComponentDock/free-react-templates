# Template: Cabin (Real Estate Template)

## Purpose

Cabin is a single-page real-estate landing template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
free "Hus" website template design, built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hus" — real estate / apartment listing template
  (source: https://colorlib.com/wp/template/hus/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/hus/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`hus-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (logo, nav links: Home, About, Pages, Blog, Contact; Login + phone on right) → Hero slider (full-width carousel with dark overlay, "We Create your dream apartment" headline, "View Project" CTA) → About area (experience badge "10 Years of Experience" circle on left, company info + bullet list + stats "120 Buildings / 500+ Clients" on right) → Our Facilities (3 feature cards with icons: Planning Stage, etc.) → Property Certificates (heading left, 3 certificate logo images right) → Apartment carousel (cards with image, price, title, bed/bath/sqft details) → Testimonials (carousel with author photo, name, role, quote) → Quotation CTA ("Get a free quotation Today!" + phone number) → Latest News (2 news cards with date, category, title, read more) → Footer (About Us, Contact Info, Important Links, Newsletter + copyright + social links).
- **Design tokens extracted from `css/style.css`:**
  - Primary accent: **red `#FF2424`** (buttons, highlights, links).
  - Hover accent: `#FF4A52` (lighter red for button hover).
  - Heading color: `#191d34` (dark navy).
  - Body text: `#6b6a6a` (medium gray).
  - Link/default color: `#1F1F1F` (near-black).
  - Label color: `#7e7e7e`.
  - Dark backgrounds: `#000`, `#0d101c`, `#303030`.
  - Footer background: dark image-based (`footer_bg.png`).
  - Overlay: black at 41% opacity on hero slider.
  - Fonts: **"Oswald"** (headings, body base) + **"Roboto"** (paragraphs, body text, buttons).
  - Button style: `.boxed-btn3` — white bg, red text `#FF2424`, red border, `border-radius: 5px`, Roboto font; hover → red bg `#FF4A52`, white text.
  - Section dividers: red double-line underline accent.
  - Apartment card overlay: dark gradient from transparent to 67% black.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/cabin-<n>/<w>/<h>`); icons → lucide-react;
  forms prevent default (no backend); no assets copied.
  Footer MUST link `https://www.componentdock.com/` (branded "Component Dock").
  No reference to ColorLib in app code — provenance only in spec and PR.

Cabin lives in `apps/cabin` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navigation bar with the brand name
"Cabin" and anchor links to page sections, plus a login link and phone number.

#### Scenario: Navbar content

- **GIVEN** the Cabin page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand name "Cabin" on the left
- **AND** the navbar SHALL show navigation links: Home, About, Pages, Blog, Contact
- **AND** the navbar SHALL show a Login link and phone number on the right
- **AND** the navbar SHALL show a mobile hamburger menu on small screens

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with dark overlay,
displaying a headline, description text, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show at least 2 carousel slides
- **AND** each slide SHALL contain the headline "We Create your dream apartment"
- **AND** each slide SHALL have a description paragraph
- **AND** each slide SHALL have a "View Project" CTA button with `boxed-btn3` style (white bg, red text, 5px radius)
- **AND** the hero SHALL have a semi-transparent dark overlay (41% black)

### Requirement: About area

The system SHALL render an about section with an experience badge on the
left and company information on the right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a circular experience badge displaying "10 Years of Experience" on the left
- **AND** it SHALL show a heading "We are Cabin / Realestate Company" with red underline divider on the right
- **AND** it SHALL show a description paragraph and a bullet list (4 items)
- **AND** it SHALL show two stat counters: "120 Buildings" and "500+ Clients"
- **AND** the section SHALL have a white background

### Requirement: Our Facilities section

The system SHALL render a 3-column facilities section on a dark background
with white text.

#### Scenario: Facilities content

- **GIVEN** the page is rendered
- **WHEN** the facilities section is displayed
- **THEN** it SHALL show 3 feature cards: "Planning Stage" (each)
- **AND** each card SHALL have an icon (flaticon-style), a heading, and a description
- **AND** each card SHALL have a "Learn more" link
- **AND** the section SHALL have a dark background with white title text

### Requirement: Property Certificates section

The system SHALL render a certificates section with a heading on the left
and certificate images on the right.

#### Scenario: Certificates content

- **GIVEN** the page is rendered
- **WHEN** the certificates section is displayed
- **THEN** it SHALL show a heading "Property Certificates" on the left
- **AND** it SHALL show 3 certificate images in a horizontal row on the right
- **AND** the section SHALL have a white background

### Requirement: Apartment carousel

The system SHALL render a horizontal carousel of apartment listing cards,
each with an image, price, title, and room details.

#### Scenario: Apartment cards content

- **GIVEN** the page is rendered
- **WHEN** the apartment section is displayed
- **THEN** it SHALL show at least 4 apartment cards in a carousel
- **AND** each card SHALL display a property image with a dark gradient overlay
- **AND** each card SHALL show a price (e.g. "$35,000"), a title, and room details (2BD, 2BA, 920 SF)
- **AND** each card SHALL have a link to the property detail

### Requirement: Testimonials section

The system SHALL render a testimonial carousel with author photos, names,
roles, and quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least 2 testimonial slides in a carousel
- **AND** each slide SHALL have a circular author photo, author name, role, and a quoted paragraph
- **AND** the section SHALL have a light background

### Requirement: Quotation CTA section

The system SHALL render a call-to-action section encouraging users to
request a free quotation.

#### Scenario: Quotation content

- **GIVEN** the page is rendered
- **WHEN** the quotation section is displayed
- **THEN** it SHALL show a heading "Get a free quotation Today!"
- **AND** it SHALL show a "Have any questions in mind?" subtext
- **AND** it SHALL have a "Contact Us" button with `boxed-btn3` style
- **AND** it SHALL show a phone icon and phone number on the right
- **AND** the section SHALL have a dark background

### Requirement: Latest News section

The system SHALL render a news carousel showing blog post cards with
dates, categories, and titles.

#### Scenario: News content

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL show at least 2 news cards in a carousel
- **AND** each card SHALL have a thumbnail image, a date badge (day + month), a category label, a title, and a "Read more" link
- **AND** the section SHALL have a white background

### Requirement: Footer

The system SHALL render a multi-column footer with about text,
contact info, important links, newsletter signup, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have 4 columns: "About Us", "Contact Info", "Important Link", "Newsletter"
- **AND** the "Important Link" column SHALL contain: View Project, Contact Us, Testimonial, Properties, Support
- **AND** the newsletter column SHALL have an email input and submit button
- **AND** the footer SHALL have a dark background with light text
- **AND** the footer SHALL show copyright text and social media icon links
- **AND** the footer SHALL contain a "Made with Component Dock" attribution link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All 10 sections rendered in correct order: Navbar → Hero slider → About → Facilities → Certificates → Apartments → Testimonials → Quotation CTA → News → Footer
- [ ] Navbar has brand name "Cabin" + 5 nav links + Login + phone + mobile menu
- [ ] Hero slider has carousel slides with headline, description, "View Project" CTA
- [ ] About section has experience badge circle + heading + description + stats
- [ ] Facilities section has 3 cards on dark background with icons + "Learn more" links
- [ ] Certificates section has heading + 3 certificate images
- [ ] Apartment carousel has cards with image, price, title, room details
- [ ] Testimonials have carousel with author photo, name, role, quote
- [ ] Quotation CTA has heading, subtext, "Contact Us" button, phone number
- [ ] News section has 2+ cards with date, category, title, "Read more"
- [ ] Footer has 4 columns + newsletter form + social icons + Component Dock attribution
- [ ] Mobile hamburger menu opens/closes
- [ ] No reference to ColorLib in app code (only spec, TEMPLATES.md, PR)
- [ ] All placeholder images use seeded picsum URLs
- [ ] Design tokens match: red `#FF2424` accent, Oswald + Roboto fonts, dark footer

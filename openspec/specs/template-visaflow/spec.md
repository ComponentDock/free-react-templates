# Template: Visaflow (Immigration & Visa Consultation)

## Purpose

Visaflow is a single-page immigration and visa consultation landing template
in the free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Immigration" website template design (see TEMPLATES.md),
built under the new name **Visaflow** with the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Immigration" — immigration & visa consultation
  template (source: https://colorlib.com/wp/template/immigration/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/immigration/
  (HTTP 200, full rendered DOM + `css/main.css` (49KB) extracted).
  The TEMPLATES.md screenshot (`immigration-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens. Note: the preview is a standard immigration landing page with
  a hero banner, call-to section, services by country, booking/contact area,
  unique features grid, testimonials, blog posts, and a multi-column footer.
- **Section order (1:1):** Navbar (Home, About, Immigration, Course, Country,
  Blog, Contact) → Hero banner ("Immigrations & Visa Consultation" +
  "Process Visa within hours" + "Book Consultancy" CTA) → Call-to bar
  ("Start planning your New Dream" + "Request Free Consultancy" CTA) →
  Services by country (4 cards: United States, Canada, Germany, Australia
  with "Addiction When Gambling Becomes A Problem" placeholder titles) →
  Booking/contact section ("Globally Connected by Large Network" + "Book
  Free Consultancy" form) → Requirements section ("Requirements to be
  Immigrants" + 4 country cards) → Unique features grid (6 items: Expert
  Technicians, Professional Service, Great Support, Technical Skills, Highly
  Recommended, Positive Reviews) → Testimonials ("How Our Customers Treat
  Us" + carousel with author names) → Blog section ("Latest News from our
  Blog" + 3 post cards) → Footer (About Us, Contact Us, Newsletter,
  copyright).
- **Design tokens extracted from `main.css`:**
  - Primary **red/pink `#f6214b`** (hero CTA button, call-to background,
    banner accent, footer background, service icons).
  - Light background `#f9f9ff` (alternating section backgrounds, call-to
    section).
  - Dark text `#222`/`#222222` (headings), `#777777` (body text).
  - White `#fff` / `#f9f9ff` (card backgrounds, feature backgrounds).
  - Button: red `#f6214b` bg + white text, border-radius 3px; hover
    darkens.
  - Circular service icons: 50% radius, red bg, white icon.
  - Font: **"Poppins"**, sans-serif (entire template).
  - Border radii: 3px (buttons), 5px (cards), 20px (feature icons),
    50% (circular elements).
  - Hero: full-width background image with dark overlay, white text, red
    CTA button.
  - Sections alternate white / light gray (`#f9f9ff`) backgrounds.
- **Recreation decisions:** this entry is recreated as a full-page immigration
  landing with hero, CTA bar, country services, booking form, features grid,
  testimonials, blog, and footer; placeholder images via picsum.photos;
  lucide-react icons for services/features; red primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome. No assets copied.

Visaflow lives in `apps/visaflow` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Visaflow"
and navigation links, plus a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Visaflow page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Visaflow"
- **AND** the navbar SHALL show navigation links (Home, About, Services,
  Features, Testimonials, Blog, Contact)
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with a headline, subtext, and a
"Book Consultancy" call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Immigrations & Visa
  Consultation"
- **AND** it SHALL show subtext "Process Visa within hours"
- **AND** it SHALL show a "Book Consultancy" CTA button

#### Scenario: Hero background

- **GIVEN** the page is rendered
- **WHEN** the hero section loads
- **THEN** it SHALL display a full-width background image (placeholder)
- **AND** it SHALL apply a dark overlay for text readability

### Requirement: Call-to bar

The system SHALL render a call-to bar with a headline and CTA button.

#### Scenario: Call-to content

- **GIVEN** the page is rendered
- **WHEN** the call-to bar is displayed
- **THEN** it SHALL show "Start planning your New Dream" heading
- **AND** it SHALL show descriptive text about the service
- **AND** it SHALL show a "Request Free Consultancy" button

#### Scenario: Call-to background

- **GIVEN** the page is rendered
- **WHEN** the call-to bar is displayed
- **THEN** it SHALL have a red (`#f6214b`) background

### Requirement: Services by country section

The system SHALL render a services grid with 4 country service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show a heading "Requirements to be Immigrants"
- **AND** it SHALL display 4 country cards: United States, Canada, Germany,
  Australia
- **AND** each card SHALL have a country name, icon, and description

#### Scenario: Services layout

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed on desktop
- **THEN** the cards SHALL be arranged in a 4-column grid

### Requirement: Booking/contact section

The system SHALL render a booking/contact section with a heading and a
contact form.

#### Scenario: Booking content

- **GIVEN** the page is rendered
- **WHEN** the booking section is displayed
- **THEN** it SHALL show "Globally Connected by Large Network" heading
- **AND** it SHALL show "We are here to listen from you deliver excellence"
  subtext
- **AND** it SHALL show a "Book Free Consultancy" form

#### Scenario: Booking layout

- **GIVEN** the page is rendered
- **WHEN** the booking section is displayed on desktop
- **THEN** the left side SHALL show heading and text
- **AND** the right side SHALL show the contact form

### Requirement: Unique features section

The system SHALL render a features grid with 6 feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show a heading "Our Unique Features that can impress you"
- **AND** it SHALL display 6 feature cards: Expert Technicians, Professional
  Service, Great Support, Technical Skills, Highly Recommended, Positive
  Reviews
- **AND** each card SHALL have an icon, title, and description

#### Scenario: Features layout

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed on desktop
- **THEN** the cards SHALL be arranged in a 3-column grid (2 rows)

### Requirement: Testimonial section

The system SHALL render a testimonial section with client quotes.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a heading "How Our Customers Treat Us"
- **AND** it SHALL display testimonial quotes with author names

#### Scenario: Testimonial layout

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** the testimonials SHALL be presented in a carousel/slider format

### Requirement: Blog section

The system SHALL render a blog section with 3 blog post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a heading "Latest News from our Blog"
- **AND** it SHALL display 3 blog post cards each with a tag, title,
  excerpt, and date

#### Scenario: Blog layout

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed on desktop
- **THEN** the cards SHALL be arranged in a 3-column grid

### Requirement: Footer

The system SHALL render a multi-column footer with about info, contact info,
newsletter, and copyright.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" column
- **AND** it SHALL show a "Contact Us" column with phone numbers
- **AND** it SHALL show a "Newsletter" signup area
- **AND** it SHALL show a copyright line
- **AND** the footer SHALL link to "https://www.componentdock.com/" branded
  as "Component Dock"

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed on desktop
- **THEN** it SHALL be arranged in 3-4 columns (about, contact, newsletter,
  copyright)

## Verification checklist

- [ ] Navbar renders with "Visaflow" brand name and dark-mode toggle
- [ ] Hero section displays headline, subtext, and CTA button
- [ ] Call-to bar shows "Start planning your New Dream" with CTA
- [ ] Services grid shows 4 country cards
- [ ] Booking section displays heading, text, and contact form
- [ ] Features grid shows 6 feature cards
- [ ] Testimonial section shows quotes in carousel
- [ ] Blog section shows 3 post cards
- [ ] Footer links to componentdock.com
- [ ] Dark mode toggle works across all sections
- [ ] Responsive layout: single column on mobile
- [ ] No ColorLib references in app code
- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh visaflow` passes (typecheck + lint + 100%
      coverage tests + build)

# Template: Pawcare (Pet Care Landing — Services, Team, CTA)

## Purpose

Pawcare is a single-page pet-care landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Anipat"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a warm pet-care landing: a full-screen slider hero ("We Care
Your Pets"), a three-card services row, an about block with adoption stats, a
testimonial, a team row, a support CTA band, and a dark footer. Pawcare
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Anipat" — pet care website template
  (source: https://colorlib.com/wp/template/anipat/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/anipat/`
  (HTTP 200; full rendered DOM + `css/style.css` (138KB) extracted). The
  TEMPLATES.md screenshot (`anipat-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):**
  1. Top bar: phone "+880 4664 216" · hours "Mon - Sat 10:00 - 7:00".
  2. Header/nav: home, about, blog, pages, services, Contact.
  3. Slider hero (`slider_area`, image bg): h3 "We Care Your Pets" (large,
     bold, dark text), paragraph, outlined "Contact Us" button.
  4. Services (`service_area`, bg `#f9f9ff`): "Services for every dog" +
     3 cards — Pet Boarding, Healthy Meals, Pet Spa (icon on `#f0e9ff`
     circle, title, blurb).
  5. About/adapt (`adapt_area`): "We care your pet / As you care" + blurb +
     "About Us" button; stats row: "452 Pets Available", "52 +" (volunteers).
  6. Testimonials (`testmonial_area`): quote card — "Jhon Walker",
     "Head of web design" (avatar, quote, name, role).
  7. Team (`team_area`): "Our Team" + members — "Rala Emaia" / "Senior
     Director", "jhon Smith".
  8. CTA band: "Why go with Anipat?" + "Because we know that even the best
     technology is only as good as the people behind it. 24/7 tech support."
     - phone "+555 0000 565".
  9. Footer: contact widget (Demomail@gmail.Com, 700 Green Lane New York
     USA), Our Services (Pet Insurance, Pet surgeries, Pet Adoption, Dog
     Insurance), Quick Link (Privacy Policy, Terms of Service, Login info,
     Knowledge Base), address "239 E 5th St, New York NY 10003, USA",
     copyright + social icons.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff3500** (red-orange) — `.boxed-btn` outline, hover
    fill, carousel arrows, accents.
  - Light section background: **#f9f9ff**; icon chip background **#f0e9ff**.
  - Text: headings **#222222**, body gray (~#999999); footer dark.
  - Font: **"Poppins"** via Google Fonts.
  - Buttons: `.boxed-btn` — white bg, `1px solid #ff3500`, `#ff3500` text,
    uppercase, `letter-spacing: 3px`, `padding: 18px 44px`, square corners;
    hover → solid `#ff3500` bg, white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/pawcare-<n>/<w>/<h>`); icons → lucide-react (Home,
  UtensilsCrossed, Sparkles, PawPrint, Phone, Mail, MapPin, Play); brand
  social icons → inline SVG; Poppins via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome. Buttons recreated as square outlined
  uppercase CTAs with the original letter-spacing; CTA band heading renamed
  "Why go with Pawcare?".

Pawcare lives in `apps/pawcare` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Pawcare",
links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Pawcare page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pawcare" and links to About
  and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width hero with a headline, a short
subheading, and an outlined call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Care Your Pets"
- **AND** it SHALL show a "Contact Us" button with the outlined brand style

### Requirement: Services section

The system SHALL render a services section with a heading and three service
cards with icons.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Services for every dog"
- **AND** it SHALL show the services Pet Boarding, Healthy Meals, and Pet Spa

### Requirement: About section

The system SHALL render an about section with a heading, a blurb, an about
button, and adoption stats.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "We care your pet" and an "About Us"
  button
- **AND** it SHALL show a "452 Pets Available" stat

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote card.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain at least one testimonial card with a name
  ("Jhon Walker") and role ("Head of web design")

### Requirement: Team section

The system SHALL render a team section with member cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "Our Team"
- **AND** it SHALL show the members "Rala Emaia" and "jhon Smith"

### Requirement: Call-to-action band

The system SHALL render a CTA band with a heading, a support blurb, and a
phone number.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Why go with Pawcare?"
- **AND** it SHALL show the phone number "+555 0000 565"

### Requirement: Footer

The system SHALL render a footer with contact details, service links, quick
links, social icons, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show contact details, an "Our Services" column, and a
  "Quick Link" column
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pawcare app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pawcare — Pet Care Template"

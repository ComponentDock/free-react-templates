# Template: Boost (App Landing Page)

## Purpose

Boost is a single-page software/web-app landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "WebApp" website template design (source:
https://colorlib.com/wp/template/webapp/), built under a **new, original
name** ("Boost" — evoking the hero headline "Boost Productivity") with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. No ColorLib
assets (images, fonts, CSS, icons) are copied.

## Design reference (replication findings)

- **Original:** ColorLib "WebApp" — web app / software marketing template
  (https://colorlib.com/wp/template/webapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/webapp/
  (HTTP 200, full rendered DOM + `css/style.css` (60KB) extracted).
  The TEMPLATES.md screenshot (`webapp-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Features, Pricing, Blog, Contact) →
  Hero ("Boost Productivity with WebApp" + blurb + "Try it for free" +
  dashboard mockup image) → Features ("The Features": Powerful Apps,
  Strategic Partners, Business in Mind, Innovative Technologies, Many
  Features, Easy to use) → More Features ("More Features": Strategic
  Partners, Business in Mind) → Testimonials ("What People Says": User
  Collaboration, Mobile Integration, Smart Analytics) → Pricing ("Pricing
  for All": Starter $30/yr, Professional $72/yr, Enterprise $130/yr, "Buy
  Now" buttons) → Blog ("News & Updates": 3 post cards + "Continue
  Reading...") → Contact ("Get In Touch": CTA band "Join over 1,700
  companies that trust us.", contact info, contact form with First Name /
  Last Name / Email / Subject / Message) → Footer (About Us, Quick Links,
  Follow Us, Subscribe Newsletter, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#fd7e14`** (`.btn-primary` background + border, white
    text) — buttons and accents.
  - Light section backgrounds `#f8f9fa` (`.bg-light`), borders `#dee2e6`.
  - Headings/text near-black `#212529`, secondary text `#6c757d`.
  - Font: **"Open Sans"** (Google Fonts, loaded via `<link>` in index.html);
    icomoon icon font (replaced by lucide-react icons).
  - Buttons: orange primary, white text; secondary light buttons
    (`btn-secondary`, light gray bg).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/boost-<n>/<w>/<h>`); icons → lucide-react; brand
  social icons → inline SVG (Facebook, Twitter, Dribbble, Behance); contact
  form prevents default (no backend); no assets copied.

Boost lives in `apps/boost` (package `@free-react-templates/boost`) and uses
shared components from `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Boost.",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Boost page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Boost." and links to Home, Features, Pricing, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, a
"Try it for free" button, and a dashboard illustration image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Boost Productivity with Boost"
- **AND** it SHALL show a supporting blurb and a "Try it for free" button
- **AND** it SHALL show a decorative dashboard image

### Requirement: Features section

The system SHALL render a features section with a heading and at least six
feature tiles.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "The Features"
- **AND** it SHALL show tiles titled "Powerful Apps", "Strategic Partners", "Business in Mind", "Innovative Technologies", "Many Features", and "Easy to use"

### Requirement: More features section

The system SHALL render a "More Features" section with two image cards.

#### Scenario: More features content

- **GIVEN** the page is rendered
- **WHEN** the more-features section is displayed
- **THEN** it SHALL contain a heading "More Features"
- **AND** it SHALL show cards titled "Strategic Partners" and "Business in Mind"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and three
testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What People Says"
- **AND** it SHALL show cards titled "User Collaboration", "Mobile Integration", and "Smart Analytics"

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Pricing for All"
- **AND** it SHALL show tiers "Starter", "Professional", and "Enterprise"
- **AND** each tier SHALL show a "Buy Now" button

### Requirement: Blog section

The system SHALL render a blog section with a heading and three post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "News & Updates"
- **AND** it SHALL show three post cards each with a title, author, date, and a "Continue Reading..." link

### Requirement: Contact section

The system SHALL render a contact section with a CTA band, contact details,
and a contact form.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Get In Touch"
- **AND** it SHALL show the CTA text "Join over 1,700 companies that trust us."
- **AND** it SHALL render a form with First Name, Last Name, Email, Subject, and Message fields

#### Scenario: Contact form submission

- **GIVEN** the contact form is displayed
- **WHEN** the user fills in the required fields and submits
- **THEN** the form SHALL NOT reload the page
- **AND** the form SHALL be reset after submission

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form, social
links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show columns for About Us, Quick Links, Follow Us, and Subscribe Newsletter
- **AND** it SHALL show a copyright line
- **AND** it SHALL show social links (Facebook, Twitter, Dribbble, Behance)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Boost app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Boost — App Landing Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh boost` passes (typecheck + lint + 100% coverage tests + build)
- [ ] `npm run spec:validate` passes
- [ ] README status regenerated after merge (`npm run readme:status`)
- [ ] TEMPLATES.md Webapp entries marked `[x]` with surge URL appended

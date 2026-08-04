# Template: Pawpal (Pet Grooming & Boarding Website)

## Purpose

Pawpal is a multi-section pet-grooming website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "PawPal" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a modern pink pet-grooming landing page: hero with a
"Where Every Pet Gets the Royal Treatment" headline and stats, six service
cards, a "why us" feature strip, a photo gallery, testimonials, a CTA band,
and a dark footer. Pawpal follows the same structure and adds the repo's
standard dark-mode toggle and accessible patterns. All imagery is recreated
with seeded placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "PawPal" — free pet grooming/boarding website
  template (source: https://colorlib.com/wp/template/pawpal/).
- **Live demo DOM analyzed:** `https://pawpal-colorlib.pages.dev/` (HTTP
  200, fetched 2026-08-04). Note: the classic preview portal
  (`preview.colorlib.com/theme/pawpal/` and variants) returns 404 — the
  ColorLib preview portal's `products.js` manifest maps `#pawpal` to this
  Cloudflare Pages demo, which is the reference. Stylesheet:
  `/_astro/Base.BfUsFLRD.css` (Tailwind-based).
- **Structure (1:1, section order):**
  1. Header — fixed top nav (transparent → solid): Services, About, Gallery,
     Team, Contact + "Book Now" button. (Team/Contact are separate pages on
     the demo; the single-page recreation anchors Services/About/Gallery/
     Contact to sections.)
  2. Hero — h1 "Where Every Pet Gets the Royal Treatment", supporting copy
     ("Professional grooming, loving daycare, and comfortable boarding for
     your furry family members…"), "Book an Appointment" + "View Services"
     buttons, stats (10K+ Happy Pets, 8+ Years Experience, 4.9 rating),
     pink gradient background.
  3. Services — h2 "Our Services"; six cards: Full Grooming, Bath & Brush,
     Daycare, Overnight Boarding, Nail Trim, Puppy Package (icon + title +
     copy + duration line), "View All Services" button.
  4. Why Us — h2 "A Place Where Pets Come First"; four features: Certified
     Staff, Fear-Free Certified, Premium Products, Climate Controlled.
  5. Gallery — h2 "Happy Pets Gallery"; image grid.
  6. Testimonials — h2 "What Pet Parents Say"; customer quote cards (Sarah
     Mitchell, Jessica Thompson, Michael Park, David Martinez).
  7. CTA band — h2 "Ready to Pamper Your Pet?" on a pink gradient band.
  8. Footer (dark, #030712-ish) — brand + blurb (Austin, TX · since 2015),
     Services (Grooming, Daycare, Boarding, Pricing) / Company (About Us,
     Our Team, Gallery, Contact) / Support (FAQs, New Client Info,
     Vaccination Policy, Cancellation Policy) link columns, Hours
     (Mon-Fri 7AM-7PM, Sat 8AM-6PM, Sun 9AM-5PM) / Contact / Location
     (Austin, TX 78701) details.
- **Design tokens extracted from the demo stylesheet:**
  - Brand color: **#db2777** (pink-600 — primary buttons/accents), with
    **#be185d** (pink-700 hover) and **#f472b6**/**#fbcfe8**/**#fce7f3**
    (pink tints).
  - Text/background: **#111827**/**#1f2937** (dark text), **#9ca3af**/
    **#4b5563** (muted), white and **pink-50** sections, dark footer
    **#030712**-ish.
  - Fonts: **"Poppins"** (sans) + **"Lora"** (serif headings) via Google
    Fonts.
  - Buttons: filled rounded pink pills; section alternation white / pink-50;
    the demo is Tailwind-native and dark-mode aware (the recreation matches
    the monorepo's `@custom-variant dark` setup).
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens
  (`--color-primary-*` = Tailwind pink scale keyed on `#db2777`, serif
  headings via `--font-serif: 'Lora'`); placeholder images
  via `https://picsum.photos/seed/pawpal-<n>/<w>/<h>`; icons from
  lucide-react; social icons inline SVG (GitHub, X, LinkedIn); no assets
  copied.

Pawpal lives in `apps/pawpal` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Pawpal", links
to the main sections (Services, About, Gallery, Contact), a "Book Now"
button, and a dark-mode toggle button. (The demo's Team/Contact entries are
separate pages; the single-page recreation anchors Contact to the footer.)

#### Scenario: Navbar content

- **GIVEN** the Pawpal page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pawpal" and links to the main sections
- **AND** the navbar SHALL show a "Book Now" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "Where Every Pet
Gets the Royal Treatment", supporting copy, CTA buttons, and stat counters.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Where Every Pet Gets the Royal Treatment"
- **AND** it SHALL show a supporting paragraph, CTA buttons, and at least two stats

### Requirement: Services section

The system SHALL render a services section titled "Our Services" with six
cards: Full Grooming, Bath & Brush, Daycare, Overnight Boarding, Nail Trim,
and Puppy Package.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL show the six service cards, each with an icon, title, and copy

### Requirement: Why-us section

The system SHALL render a "A Place Where Pets Come First" section with four
features: Certified Staff, Fear-Free Certified, Premium Products, and
Climate Controlled.

#### Scenario: Feature items

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL show the heading "A Place Where Pets Come First"
- **AND** it SHALL show the four features with titles

### Requirement: Gallery section

The system SHALL render a "Happy Pets Gallery" section with a grid of at
least six images.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Happy Pets Gallery"
- **AND** it SHALL show at least six gallery images with accessible labels

### Requirement: Testimonials section

The system SHALL render a "What Pet Parents Say" section with at least two
customer quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "What Pet Parents Say"
- **AND** it SHALL show at least two testimonial cards with quotes and names

### Requirement: CTA section

The system SHALL render a CTA band with the heading "Ready to Pamper Your
Pet?" and a call-to-action button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the heading "Ready to Pamper Your Pet?"
- **AND** it SHALL show a call-to-action button

### Requirement: Footer

The system SHALL render a footer with the site name, an about blurb, link
columns (Services, Company, Support), and contact details.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Pawpal" and an about blurb
- **AND** it SHALL show link columns and contact details

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pawpal app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pawpal — Pet Grooming & Boarding Website Template"

# Template: Biscuit (Premium Pet Care Landing)

## Purpose

Biscuit is a single-page premium pet grooming, daycare & boarding website
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "PawPal" website template design (see
TEMPLATES.md), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "PawPal" — pet grooming, daycare & boarding
  (source: https://colorlib.com/wp/template/pawpal/; live site title "Paws &
  Play").
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/pawpal/` returns
  404, so the ColorLib preview-gallery deployment was used instead:
  **https://pawpal-colorlib.pages.dev/** (HTTP 200, full rendered DOM +
  `/_astro/Base.*.css` (36.5KB, Tailwind-based) extracted). The TEMPLATES.md
  screenshot (`pawpal-template-1770211334322.jpg`) is the visual reference.
- **Section order (1:1):** Navbar (Services, About, Gallery, Team, Contact +
  Book Now) → Hero ("Where Every Pet Gets the Royal Treatment" + Book an
  Appointment / View Services + stats: 10K+ Happy Pets, 8+ Years Experience,
  4.9 Average Rating, 50+ Services) → Services (Our Services: Full Grooming
  From $65, Bath & Brush $35, Daycare $35/day, Overnight Boarding $55/night,
  Nail Trim $15, Puppy Package $45) → About (Our Story / A Place Where Pets
  Come First + Certified Staff, Fear-Free Certified, Premium Products,
  Climate Controlled) → Gallery (Happy Pets Gallery: 8 photos) →
  Testimonials (What Pet Parents Say: 4 quotes) → CTA (Ready to Pamper Your
  Pet? + Book Appointment + phone) → Footer (Services/Company/Support,
  Hours, Contact, Location, social, copyright).
- **Design tokens extracted from CSS:**
  - Primary **pink `#db2777`** — buttons, headings, gradient stops; hover
    **`#be185d`**; light pink-50 `#fce7f3` section backgrounds.
  - Fonts: **"Lora"** (display serif) + **"Poppins"** (body) (Google Fonts).
  - Dark text `#111827`; white cards with soft shadows; rounded-full pink
    buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/biscuit-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Biscuit lives in `apps/biscuit` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Biscuit",
anchor links to the page's sections, a "Book Now" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Biscuit page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Biscuit" and links to Services, About, Gallery, Team, and Contact
- **AND** the navbar SHALL show a "Book Now" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, two
buttons ("Book an Appointment", "View Services"), and four stats (Happy Pets,
Years Experience, Average Rating, Services).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Where Every Pet Gets the Royal Treatment"
- **AND** it SHALL show "Book an Appointment" and "View Services" buttons
- **AND** it SHALL show the stats "10K+ Happy Pets", "8+ Years Experience", "4.9 Average Rating", and "50+ Services"

### Requirement: Services section

The system SHALL render a services section with a heading and six service
cards, each with a title, a price, a feature list, and a duration.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show six services: Full Grooming, Bath & Brush, Daycare, Overnight Boarding, Nail Trim, and Puppy Package
- **AND** each service SHALL show a price, a feature list, and a duration
- **AND** the section SHALL show a "View All Services" button

### Requirement: About section

The system SHALL render an about section with a kicker, a heading, a story,
and four features (Certified Staff, Fear-Free Certified, Premium Products,
Climate Controlled), each with an icon and a description.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a kicker "Our Story" and a heading "A Place Where Pets Come First"
- **AND** it SHALL show features titled Certified Staff, Fear-Free Certified, Premium Products, and Climate Controlled

### Requirement: Gallery section

The system SHALL render a gallery section with a heading, at least six pet
photos with labels, and a social follow line.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "Happy Pets Gallery"
- **AND** it SHALL show at least six gallery photos with labels
- **AND** it SHALL show a follow-on-social line

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least two
customer quotes, each with the customer's name and pet.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Pet Parents Say"
- **AND** it SHALL show at least two quotes, each with a customer name and a pet

### Requirement: Call-to-action section

The system SHALL render a CTA band with a heading, a blurb, a "Book
Appointment" button, and a phone number.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Pamper Your Pet?"
- **AND** it SHALL show a "Book Appointment" button and a phone number

### Requirement: Footer

The system SHALL render a footer with the site name, link columns, opening
hours, contact details, a location, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Biscuit" and link columns
- **AND** it SHALL show opening hours, contact details (email, phone), and a location
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Biscuit app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Biscuit — Premium Pet Care Template"

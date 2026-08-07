# Template: Beamline (Architecture Template)

## Purpose

Beamline is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Archlab" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Archlab" — Free Bootstrap 4 architecture template
  (source: https://colorlib.com/wp/template/archlab/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/archlab/
  (HTTP 200, full rendered DOM + `css/style.css` (74KB) extracted).
  The TEMPLATES.md screenshot (`archlab-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Team, Services, Project,
  Blog, Contact) → Hero ("Modern Innovative Architecture" + blurb +
  Explore Projects / Watch our video) → Green process band (Design
  Process, Supervision, Budget Planning + "Build a Home For You" CTA) →
  Quote form ("Be Part of our Business" / "Request A Quote": First Name,
  Last Name, Select Your Services [Construction, Renovation, Interior
  Design, Exterior Design, Painting], Phone, Message) beside an about
  column ("Beamline" + two blurbs) → Stats band (Years of Experienced,
  Project Done, Licensed Architect, Happy Customers) → Projects ("Our
  Unique Latest Projects": Geometric Building, Twin Office, Cultural
  Complex Centre + View Portfolio) → Testimonials ("Happy Clients": Roger
  Scott, Marketing Manager) → Pricing ("Price & Plans": Planning Solution
  $78/$88/$98 per month) → Blog ("Recent Blog": 4 posts) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#96bb7c`** (buttons, accents, process band, quote
    overlay).
  - Dark text `#000`, `#212529`; muted `#6c757d`.
  - Font: **"Nunito Sans"** (Google Fonts).
  - Footer background: **`#0f101c`** (near-black).
  - Buttons: green pill with white text; hover flips to transparent with
    green border/text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/beamline-<n>/<w>/<h>`); icons → lucide-react
  (flaticon glyphs recreated as lucide equivalents); video button →
  styled play button; quote form prevents default (no backend); no assets
  copied.

Beamline lives in `apps/beamline` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Beamline",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Beamline page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Beamline" and links to Home, About, Team, Services, Project, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and two
buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Modern Innovative Architecture"
- **AND** it SHALL show "Explore Projects" and "Watch our video" buttons

### Requirement: Process band

The system SHALL render a green band with three process cards and a CTA card:
"Design Process", "Supervision", "Budget Planning", and "Build a Home For
You".

#### Scenario: Process band content

- **GIVEN** the page is rendered
- **WHEN** the process band is displayed
- **THEN** it SHALL show cards titled "Design Process", "Supervision", and "Budget Planning" each with a blurb
- **AND** it SHALL show a "Build a Home For You" call-to-action

### Requirement: Quote form

The system SHALL render a quote form with a "Select Your Services" selector
and a "Request A Quote" button.

#### Scenario: Quote form content

- **GIVEN** the page is rendered
- **WHEN** the quote form is displayed
- **THEN** it SHALL show a service selector with options including "Construction", "Renovation", and "Interior Design"
- **AND** it SHALL show a "Request A Quote" button that does not navigate on submit

### Requirement: Stats band

The system SHALL render a stats band with four counters: "Years of
Experienced", "Project Done", "Licensed Architect", and "Happy Customers".

#### Scenario: Stats band content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show the four stat labels "Years of Experienced", "Project Done", "Licensed Architect", and "Happy Customers"

### Requirement: Projects section

The system SHALL render a projects section titled "Our Unique Latest Projects"
with project cards and "View Portfolio" buttons.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show a level-2 heading "Our Unique Latest Projects"
- **AND** it SHALL show project cards such as "Geometric Building", "Twin Office", and "Cultural Complex Centre"
- **AND** each card SHALL show a "View Portfolio" button

### Requirement: Testimonials section

The system SHALL render a testimonials section titled "Happy Clients" with
client quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a level-2 heading "Happy Clients"
- **AND** it SHALL show at least one testimonial with an author name

### Requirement: Pricing section

The system SHALL render a pricing section titled "Price & Plans" with three
plans and "Get Started" buttons.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show a level-2 heading "Price & Plans"
- **AND** it SHALL show three plans with monthly prices and a "Get Started" button each

### Requirement: Blog section

The system SHALL render a blog section titled "Recent Blog" with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a level-2 heading "Recent Blog"
- **AND** it SHALL show at least two post cards with titles

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (Facebook, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Beamline app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Beamline — Architecture Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh beamline` (typecheck + lint + 100% coverage tests + build)
- [ ] `npm run spec:validate`
- [ ] Replication fidelity: section order, green `#96bb7c` brand, Nunito Sans, dark footer `#0f101c`

# Template: Vitality (Astro Template)

## Purpose

Vitality is a single-page medical / healthcare clinic landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Vitality" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Vitality" — medical / healthcare website template
  (source: https://colorlib.com/wp/template/vitality/).
- **Preview unreachable:** `https://preview.colorlib.com/theme/vitality/`
  returns 404 and `vitality` is NOT in the preview portal demo registry
  (`preview.colorlib.com/assets/js/products.js`), so no
  `<slug>-colorlib.pages.dev` demo exists. Per `docs/replication.md`, the
  fallback is the TEMPLATES.md screenshot
  (`vitality-template-1770211473540.jpg`, fetched OK) plus the official
  ColorLib description — the section map below is derived from the
  documented feature set and the healthcare-vertical convention of the
  other Astro demos in this repo. Implementation MUST re-verify against
  whatever preview becomes available and adjust the spec if it diverges.
- **Official description (ColorLib):** "Healthcare decisions demand trust,
  and trust starts with professional presentation. Vitality establishes
  medical credibility through doctor credentials, specialty certifications,
  and real patient success stories. The appointment scheduler reduces phone
  call volume while HIPAA-conscious design principles guide the entire
  patient journey." Category: Health & Fitness (Astro). Built with Astro 6
  and Tailwind CSS 4.x, dark mode support, mobile-first responsive.
- **Documented feature set (from ColorLib page):**
  1. Online appointment booking with department selection.
  2. Doctor profiles with credentials and specializations.
  3. Medical services with detailed descriptions.
  4. Emergency contact section with hotline.
  5. Patient testimonials and success stories.
  6. Insurance and payment information.
- **Expected section order (from feature set, to confirm against preview):**
  1. Sticky navbar: logo + links (Services, Doctors, Departments, About,
     Contact) + "Book Appointment" button; dark-mode toggle.
  2. Hero: medical credibility headline + blurb + "Book Appointment" /
     "Our Services" buttons.
  3. Departments/services grid: department cards with descriptions.
  4. Doctors: profile cards with credentials and specializations.
  5. Emergency contact band: hotline + urgency copy.
  6. Testimonials: patient success stories.
  7. Insurance: accepted insurance / payment information.
  8. Appointment booking: form with department selection.
  9. Footer: contact details + link columns + copyright.
- **Design tokens (to confirm against preview; healthcare convention):**
  - Brand color: **medical teal/blue** (e.g. #0d9488 teal-600 or #2563eb
    blue-600 — verify from live preview when available).
  - Font: **"Manrope"** or **"Inter"** (verify from live preview).
  - Shapes: rounded cards, pill buttons; dark mode support documented.
- **Recreation decisions (once preview confirmed):** photos → seeded picsum
  placeholders (`picsum.photos/seed/vitality-<n>/<w>/<h>`); icons →
  lucide-react (Stethoscope, HeartPulse, CalendarCheck, Phone, Mail, MapPin,
  Clock, Star, ChevronDown, Ambulance, ShieldCheck, Building2); font via
  Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.

Vitality lives in `apps/vitality` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Vitality",
anchor links to the page's sections, a "Book Appointment" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Vitality page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Vitality" and links to
  Services and Doctors
- **AND** the navbar SHALL show a "Book Appointment" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading that conveys medical
  credibility
- **AND** it SHALL show a "Book Appointment" button

### Requirement: Services section

The system SHALL render a medical services section with at least six service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show at least six service cards with titles and
  descriptions

### Requirement: Doctors section

The system SHALL render a doctors section with profile cards.

#### Scenario: Doctors content

- **GIVEN** the page is rendered
- **WHEN** the doctors section is displayed
- **THEN** it SHALL show doctor profile cards with names and
  credentials/specializations

### Requirement: Emergency contact

The system SHALL render an emergency contact section with a hotline.

#### Scenario: Emergency content

- **GIVEN** the page is rendered
- **WHEN** the emergency section is displayed
- **THEN** it SHALL show a phone hotline and emergency urgency copy

### Requirement: Testimonials section

The system SHALL render a testimonials section with patient success stories.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least three patient testimonial quotes

### Requirement: Insurance information

The system SHALL render an insurance / payment information section.

#### Scenario: Insurance content

- **GIVEN** the page is rendered
- **WHEN** the insurance section is displayed
- **THEN** it SHALL show accepted insurance or payment information

### Requirement: Appointment booking

The system SHALL render an appointment booking form with department
selection.

#### Scenario: Booking form content

- **GIVEN** the page is rendered
- **WHEN** the booking section is displayed
- **THEN** it SHALL show a form with a department selector and a submit
  button

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show the clinic's contact details

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Vitality app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Vitality — Healthcare Template"

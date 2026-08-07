# Template: Atrium (Architecture Template)

## Purpose

Atrium is a single-page architecture & interior design agency landing
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Ararat" website template design (see
TEMPLATES.md), built under a **different name** with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ararat" — free architecture HTML template
  (source: https://colorlib.com/wp/template/ararat/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ararat/
  (HTTP 200, full rendered DOM + `css/style.css` (55KB) extracted).
  The TEMPLATES.md screenshot (`ararat-free-template.jpg`) was also
  inspected visually (browser): white header, serif wordmark, ghost
  buttons, skyscraper hero photo, white about section.
- **Section order (1:1):** Header (logo + centered nav + GET IN TOUCH
  button) → Hero ("We Design your space" + See Our Projects, over photo)
  → About ("About Us — Architechtural plan design and build" + list +
  "25 Years of Experience" badge on the image) → Services ("Make your
  Dream with US": Interior, Exterior, Bridge) → Projects ("Project view —
  Our Latest Projects": 4 alternating rows with location, name, blurb,
  View More) → Testimonials (quote + author on photo background) →
  Message ("Contact Us — Send your message" + email/subject/message form)
  → Footer (dark: "Do you have any project or Query?" CTA + logo, social
  circles, Navigation/Services link columns, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary accent **orange `#ff5e13`** (link hovers, focus, accents).
  - Dark ink `#131313` (headings, borders); light tints `#f9f9ff`,
    `#f0e9ff`; body text grays `#808080`, `#9e9e9e`, `#a3a3a3`.
  - Fonts: **"Playfair Display"** (body/serif wordmark) + **"Roboto"**
    (headings, nav, buttons) — Google Fonts.
  - Buttons: `.boxed-btn` — white bg, 1px `#131313` border, uppercase,
    letter-spacing 3px, padding 18px 44px, hover fills black; over photos
    `.boxed-btn2` — transparent, white border, white text.
  - Section kickers: 14px uppercase, letter-spacing 3px, gray (`#c9c9c9`
    / `#808080`); headings 46px; `.seperator` 90×2px `#131313`.
  - About list bullets: 15px green `#02c856` dots.
  - Testimonial + footer: photo background with dark overlay.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/atrium-<n>/<w>/<h>`); icons → lucide-react + inline
  SVG brand icons; forms prevent default (no backend); original typo
  "Architechtural" corrected to "Architectural"; "Do youn" corrected to
  "Do you"; no assets copied.

Atrium lives in `apps/atrium` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Atrium",
anchor links to the page's sections, a "Get in touch" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Atrium page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Atrium" and links to Home, About, Services, Projects, and Contact
- **AND** the navbar SHALL show a "Get in touch" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero over a photo with a headline, a
blurb, and a "See Our Projects" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Design Your Space"
- **AND** it SHALL show a blurb and a "See Our Projects" button

### Requirement: About section

The system SHALL render an about section with a heading "Architectural Plan
Design and Build", a blurb, a bulleted list, an "About Us" button, and a
"25 Years of Experience" badge over the section image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Architectural Plan Design and Build"
- **AND** it SHALL show a blurb, a bulleted list, an "About Us" button, and a "25 Years of Experience" badge

### Requirement: Services section

The system SHALL render a services section with a heading "Make Your Dream
with Us" and three service cards (Interior, Exterior, Bridge).

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Make Your Dream with Us"
- **AND** it SHALL show three service cards titled "Interior", "Exterior", and "Bridge", each with an image and a blurb

### Requirement: Projects section

The system SHALL render a projects section with a heading "Our Latest
Projects" and four project rows (location, name, blurb, "View More" link).

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Latest Projects"
- **AND** it SHALL show four projects: "Abahoni Building" (Dubai, UAE), "MR Kholifa Tower" (Dhaka, Bangladesh), "Galoni Plan & Design" (Dubai, UAE), and "Hiclick Mirror Design" (Dhaka, Bangladesh)
- **AND** each project SHALL show a "View More" link

### Requirement: Testimonials section

The system SHALL render a testimonials section with a quote, an author
name, and the author's role.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a quote, an author name, and a role

### Requirement: Contact section

The system SHALL render a contact section with a heading "Send Your
Message" and a form with email, subject, and message fields and a
"Send Us" button.

#### Scenario: Contact form

- **GIVEN** the contact section is displayed
- **WHEN** the user fills the email, subject, and message fields and submits the form
- **THEN** the form SHALL prevent default submission (no backend)
- **AND** a success message SHALL be shown

### Requirement: Footer

The system SHALL render a footer with a "Do You Have Any Project or
Query?" call-to-action, social links, link columns, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Do You Have Any Project or Query?" heading and a "Contact Us" button
- **AND** it SHALL show social links (Twitter, Instagram, Facebook, LinkedIn)
- **AND** it SHALL show link columns (Navigation, Services) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Atrium app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Atrium — Architecture Template"

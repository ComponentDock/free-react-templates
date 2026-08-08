# Template: Parapet (Astro Template)

## Purpose

Parapet is a single-page construction company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Buildcraft" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Buildcraft" — construction company template
  (source: https://colorlib.com/wp/template/buildcraft/).
- **Demo DOM analyzed:** https://buildcraft-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/buildcraft/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal). The
  TEMPLATES.md screenshot (`buildcraft-template-1771943678540.jpg`) is the
  visual reference; the design below is reconstructed from the live DOM
  structure and the `_astro/Base.*.css` stylesheet (62 KB parsed for tokens).
- **Section order (1:1):** Navbar (sticky, blur; links Services, Projects,
  Process, About, Pricing, Blog, Contact; "Get a Quote" button, dark toggle)
  → Hero (dark construction photo + navy `#0f172a` overlay, badge "Trusted
  by 500+ clients since 1998", H1 "Building Tomorrow's Landmarks", blurb,
  "Get Free Estimate" + "View Our Projects" buttons, stats row 500+ Projects
  Completed / 25+ Years Experience / 98% On-time Delivery / 12 Industry
  Awards) → animated stats strip (border-y; Projects Completed, Years
  Experience, On-Time Delivery, Team Members) → Services ("What We Build",
  6 cards: Residential Construction, Commercial Buildings, Renovation &
  Remodeling, Interior Design, Project Management, Green Building) →
  Projects ("Our Recent Projects" portfolio: Skyline Tower Complex, Riverside
  Luxury Estates, Metro Innovation Hub, Lakeside Residence) → Results
  ("Project Transformations" before/after: Home Renovation, Kitchen Remodel)
  → Process ("How We Build", 4 steps: Consultation, Planning, Construction,
  Handover) → About ("Building Excellence Since 1998" + stats) →
  Testimonials ("What Our Clients Say" carousel) → Contact ("Request a Free
  Quote" form + info cards: Phone, Email, Address, Office Hours) → FAQ
  (5-item accordion) → CTA ("Ready to Start Your Project?" amber gradient) →
  Footer (dark, brand blurb, Services/Company/Support columns, contact,
  socials, copyright).
- **Design tokens extracted from the demo stylesheet:**
  - Brand: **amber** — `primary-600 #d97706` buttons, `primary-500 #f59e0b`
    accents, `primary-700 #b45309` hover, `primary-400 #fbbf24` highlights,
    `primary-100 #fef3c7` icon/avatar surfaces, `primary-50 #fffbeb` washes,
    `primary-900 #78350f` dark accents; hero overlay navy
    `accent-900 #0f172a` at 80%; star ratings `yellow-400`; light surfaces
    white/`gray-50`, dark surfaces `gray-950/900/800`.
  - Font: **"Outfit"** (Google Fonts).
  - Buttons: `rounded-lg` solid amber primary + white/outline secondary with
    soft shadow (`shadow-lg shadow-primary-600/25`); cards `rounded-2xl`
    with soft shadow.
  - Socials: LinkedIn `#0A66C2`, X `#1DA1F2`, Facebook `#1877F2` hover fills.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/parapet-<n>/<w>/<h>`); icons → lucide-react (+ inline
  SVG brand icons for socials); no assets copied. The demo's separate pages
  (About, Pricing, Blog, Contact) become in-page anchors (Services, Projects,
  Process, About, Testimonials, Contact, FAQ) in the single-page recreation.

Parapet lives in `apps/parapet` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Parapet",
anchor links to the page's sections, a "Get a Quote" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Parapet page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Parapet" and links to Services, Projects, Process, About, and Contact
- **AND** the navbar SHALL show a "Get a Quote" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with an acceptance badge, a
level-1 headline, a blurb, two call-to-action links, a stats row, and a
construction image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the badge "Trusted by 500+ clients since 1998"
- **AND** it SHALL contain a level-1 heading whose text mentions "Building Tomorrow's"
- **AND** it SHALL show a blurb about quality construction for residential and commercial projects
- **AND** it SHALL show "Get Free Estimate" and "View Our Projects" links
- **AND** it SHALL show the stats "500+ Projects Completed" and "25+ Years Experience"

### Requirement: Stats strip

The system SHALL render a stats strip with four labeled counts.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats strip is displayed
- **THEN** it SHALL show "Projects Completed", "Years Experience", "On-Time Delivery", and "Team Members" labels
- **AND** each label SHALL be paired with a numeric value

### Requirement: Services section

The system SHALL render a services section with a heading and six service
cards, each with a title and description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Build"
- **AND** it SHALL show Residential Construction, Commercial Buildings, Renovation & Remodeling, Interior Design, Project Management, and Green Building
- **AND** each service SHALL show a short description

### Requirement: Projects section

The system SHALL render a projects section with a heading and four project
cards, each with a year, location, title, and description.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Recent Projects"
- **AND** it SHALL show Skyline Tower Complex, Riverside Luxury Estates, Metro Innovation Hub, and Lakeside Residence
- **AND** each project SHALL show a year and a location

### Requirement: Results section

The system SHALL render a before/after results gallery with a heading and
two renovation pairs.

#### Scenario: Results content

- **GIVEN** the page is rendered
- **WHEN** the results section is displayed
- **THEN** it SHALL contain a heading "Project Transformations"
- **AND** it SHALL show "Home Renovation" and "Kitchen Remodel" treatments
- **AND** each treatment SHALL show "Before" and "After" labels

### Requirement: Process section

The system SHALL render a four-step process section with a heading.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "How We Build"
- **AND** it SHALL show Consultation, Planning, Construction, and Handover steps
- **AND** each step SHALL show a short description

### Requirement: About section

The system SHALL render an about section with a heading, a blurb, and a
stats row.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Building Excellence Since 1998"
- **AND** it SHALL show a blurb about the company's experience
- **AND** it SHALL show "500+ Projects Completed" and "150+ Team Members" stats

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with a heading, reviews,
star ratings, and previous/next controls.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show a review with a five-star rating and a reviewer name
- **AND** it SHALL show "Previous testimonial" and "Next testimonial" controls

#### Scenario: Navigating the carousel

- **GIVEN** the testimonials section is displayed
- **WHEN** the user presses the "Next testimonial" control
- **THEN** a different review SHALL be displayed
- **WHEN** the user presses the "Previous testimonial" control
- **THEN** the previous review SHALL be displayed again

### Requirement: Contact section

The system SHALL render a "Request a Free Quote" section with a form and
four contact detail cards.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Request a Free Quote"
- **AND** the form SHALL include Full Name, Email Address, Phone Number, Project Type, and Project Details fields
- **AND** it SHALL show Phone, Email, Address, and Office Hours details

#### Scenario: Submitting an incomplete form

- **GIVEN** the contact section is displayed
- **WHEN** the user submits the form without entering a name and a valid email
- **THEN** the form SHALL show validation errors
- **AND** no success message SHALL be shown

#### Scenario: Submitting a valid form

- **GIVEN** the contact section is displayed
- **WHEN** the user fills in a name, valid email, phone, project type, and details and submits
- **THEN** a success message SHALL be displayed
- **AND** the form fields SHALL be replaced by the success message

### Requirement: FAQ section

The system SHALL render an FAQ accordion with a heading and five questions,
each expandable to reveal an answer.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show the question "How long does a typical construction project take?"

#### Scenario: Expanding an FAQ item

- **GIVEN** the FAQ section is displayed
- **WHEN** the user presses an FAQ question
- **THEN** the answer for that question SHALL be revealed
- **AND** pressing it again SHALL hide the answer

### Requirement: Emergency CTA section

The system SHALL render an amber gradient call-to-action section with a
heading, a blurb, and two links.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Start Your Project?"
- **AND** it SHALL show a blurb about a free estimate
- **AND** it SHALL show "Get Free Estimate" and "Call Us Now" links

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, three link
columns, contact details, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Parapet" and a brand blurb
- **AND** it SHALL show Services, Company, and Support columns
- **AND** it SHALL show a copyright line mentioning Parapet

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Parapet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Parapet — Astro Template"

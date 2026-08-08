# Template: Dentora (Astro Template)

## Purpose

Dentora is a single-page dental clinic landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Brightsmile" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Brightsmile" — dental clinic template
  (source: https://colorlib.com/wp/template/brightsmile/).
- **Demo DOM analyzed:** https://brightsmile-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/brightsmile/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal). The
  TEMPLATES.md screenshot (`brightsmile-template-1771943701965.jpg`) is the
  visual reference; the design below is reconstructed from the DOM
  structure and the `_astro/Base.*.css` stylesheet.
- **Section order (1:1):** Navbar (sticky, blur) → Hero (badge "Now
  Accepting New Patients", "Your Smile Deserves the Best Care", stats row,
  office photo) → animated stats strip (border-y) → Services (6 cards:
  General Dentistry, Cosmetic Dentistry, Dental Implants, Orthodontics,
  Teeth Whitening, Emergency Care) → Team (3 dentists) → Why Us (4
  features) → Results (before/after gallery) → Testimonials (carousel, 6
  reviews, 5-star yellow ratings) → Insurance (6 plans) → Emergency CTA
  (teal gradient) → FAQ (5-item accordion) → Contact ("Schedule Your
  Visit" booking form + info cards) → Footer (dark, 4 columns).
- **Design tokens extracted from the demo stylesheet:**
  - Brand: **teal** — `primary-600 #0d9488` buttons, `primary-500
#14b8a6` accents, `primary-700 #0f766e` hover, `primary-800 #115e59`
    gradients, `primary-100 #ccfbf1` icon/avatar surfaces, `primary-50
#f0fdfa` hero wash; star ratings `yellow-400 #facc15`; light surfaces
    white/`gray-50`, dark surfaces `gray-950/900/800`.
  - Font: **"Plus Jakarta Sans"** (300–800) via Google Fonts.
  - Buttons: pill-shaped (rounded-full); solid teal primary + white
    outline secondary; cards `rounded-2xl` with soft shadow.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/dentora-<n>/<w>/<h>`); icons → lucide-react (+
  inline SVG brand icons for socials); no assets copied. The demo's
  separate pages (About, Pricing, Blog) become in-page anchors (Services,
  Team, Why Us, Testimonials, FAQ, Contact) in the single-page
  recreation.

Dentora lives in `apps/dentora` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Dentora",
anchor links to the page's sections, a "Book Appointment" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Dentora page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Dentora"
- **AND** the navbar SHALL show links to Services, Team, Why Us, Testimonials, and Contact
- **AND** the navbar SHALL show a "Book Appointment" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with an acceptance badge, a
level-1 headline, a blurb, two call-to-action links, a stats row, and an
office image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the badge "Now Accepting New Patients"
- **AND** it SHALL contain a level-1 heading whose text mentions "Your Smile Deserves"
- **AND** it SHALL show a blurb paragraph about modern, gentle dental care
- **AND** it SHALL show "Book Appointment" and "Call (555) 234-5678" links
- **AND** it SHALL show the stats "15+ Years Experience" and "10,000+ Happy Patients"

### Requirement: Stats strip

The system SHALL render a stats strip with four labeled counts.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats strip is displayed
- **THEN** it SHALL show "Happy Patients", "Years Experience", "Expert Dentists", and "Satisfaction Rate" labels
- **AND** each label SHALL be paired with a numeric value

### Requirement: Services section

The system SHALL render a services section with a heading and six service
cards, each with a title and description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Comprehensive Dental Care"
- **AND** it SHALL show General Dentistry, Cosmetic Dentistry, Dental Implants, Orthodontics, Teeth Whitening, and Emergency Care
- **AND** each service SHALL show a short description

### Requirement: Team section

The system SHALL render a team section with a heading and three dentist
cards, each with a photo, name, role, bio, and education.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "Meet Our Dentists"
- **AND** it SHALL show Dr. Sarah Mitchell, Dr. James Park, and Dr. Maria Santos
- **AND** each dentist SHALL show a role, a bio, and an education entry

### Requirement: Why Us section

The system SHALL render a "why us" section with a heading and four feature
cards.

#### Scenario: Why Us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL contain a heading "Modern Care You Can Trust"
- **AND** it SHALL show Advanced Technology, Gentle Approach, Flexible Scheduling, and Insurance Friendly
- **AND** each feature SHALL show a short description

### Requirement: Results section

The system SHALL render a before/after results gallery with a heading and
two treatment pairs.

#### Scenario: Results content

- **GIVEN** the page is rendered
- **WHEN** the results section is displayed
- **THEN** it SHALL contain a heading "See the Difference"
- **AND** it SHALL show "Teeth Whitening" and "Cosmetic Veneers" treatments
- **AND** each treatment SHALL show "Before" and "After" labels

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with a heading, six
reviews, star ratings, and previous/next controls.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Patients Say"
- **AND** it SHALL show a review with a five-star rating and a reviewer name
- **AND** it SHALL show "Previous testimonial" and "Next testimonial" controls

#### Scenario: Navigating the carousel

- **GIVEN** the testimonials section is displayed
- **WHEN** the user presses the "Next testimonial" control
- **THEN** a different review SHALL be displayed
- **WHEN** the user presses the "Previous testimonial" control
- **THEN** the previous review SHALL be displayed again

### Requirement: Insurance section

The system SHALL render an insurance section with a heading and six
accepted plan cards.

#### Scenario: Insurance content

- **GIVEN** the page is rendered
- **WHEN** the insurance section is displayed
- **THEN** it SHALL contain a heading "We Accept Most Insurance Plans"
- **AND** it SHALL show Aetna, Cigna, Delta Dental, MetLife, United Healthcare, and Blue Cross Blue Shield
- **AND** each plan SHALL be labeled "In-network provider"

### Requirement: Emergency CTA section

The system SHALL render a teal gradient call-to-action section with a
heading, a blurb, and two links.

#### Scenario: Emergency CTA content

- **GIVEN** the page is rendered
- **WHEN** the emergency section is displayed
- **THEN** it SHALL contain a heading mentioning "Dental Emergency"
- **AND** it SHALL show a blurb about same-day emergency appointments
- **AND** it SHALL show "Call Now" and "Book Online" links

### Requirement: FAQ section

The system SHALL render an FAQ accordion with a heading and five
questions, each expandable to reveal an answer.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show the question "Do you accept dental insurance?"

#### Scenario: Expanding an FAQ item

- **GIVEN** the FAQ section is displayed
- **WHEN** the user presses an FAQ question
- **THEN** the answer for that question SHALL be revealed
- **AND** pressing it again SHALL hide the answer

### Requirement: Contact section

The system SHALL render a "Schedule Your Visit" section with a booking
form and four contact detail cards.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Schedule Your Visit"
- **AND** the form SHALL include Full Name, Email Address, Phone Number, Service Needed, Preferred Date, and Message fields
- **AND** it SHALL show Visit Us, Call Us, Email Us, and Office Hours details

#### Scenario: Submitting an incomplete form

- **GIVEN** the contact section is displayed
- **WHEN** the user submits the form without entering a name and a valid email
- **THEN** the form SHALL show validation errors
- **AND** no success message SHALL be shown

#### Scenario: Submitting a valid form

- **GIVEN** the contact section is displayed
- **WHEN** the user fills in a name, valid email, phone, service, and message and submits
- **THEN** a success message SHALL be displayed
- **AND** the form fields SHALL be replaced by the success message

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, four link
columns, contact details, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Dentora" and a brand blurb
- **AND** it SHALL show Services, Patient Info, Clinic, and Contact Us columns
- **AND** it SHALL show a copyright line mentioning Dentora

# Template: Barbero (Barber Shop Landing)

## Purpose

Barbero is a single-page barber-shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barbero" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark, gold-accented barber landing page: a full-screen photo
hero ("We Will Make Your Style of Your Dreams"), a 4-card services row, an
about split, a photo counter band, an expert team section, a video band, a
gallery grid, testimonials, an appointment form, a blog row, and a dark
multi-column footer. Barbero recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Barbero" — barber shop website template
  (source: https://colorlib.com/wp/template/barbero/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barbero/`
  (HTTP 200, 50KB) + stylesheet `css/style.css` (90KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot (`barbero-free-template.jpg`)
  confirms the visual design (dark with gold accents, photo hero).
- **Section order (1:1):**
  1. Header/navbar: logo + nav (Home, About, Services, Gallery, Blog,
     Contact).
  2. Hero (`hero-wrap`, photo background, right-aligned): "Welcome to
     Barbero" subheading, "We Will Make Your Style of Your Dreams" headline
     with gold `<span>` emphasis, blurb, "Learn More About Us" button.
  3. Services (`ftco-services bg-light`): 4 photo cards — Hair Styles ·
     Beard Trim · Hot Shave · Hair Shampoo (image + title + blurb).
  4. About (`ftco-about img`): "About Barber" / "A Smooth Barber Experience
     In Your Town" + paragraphs + image.
  5. Counter band (`ftco-counter img`, photo background): 4 counters —
     Places · Events · Photos · Speakers.
  6. Team (`bg-darken`): "Our Expert Team" + tabbed team members.
  7. Video band (`video-image img`): play button + "Watch Our Video Popular
     Hair Style".
  8. Gallery (`ftco-section ftco-no-pb`): "Photos of Our Events" + photo
     grid with search icons.
  9. Testimonials (`testimony-section bg-light`): "People Say About Our
     Barber" + quote cards.
  10. Appointment (`ftco-intro img`, photo background): "Make An
      Appointment" + form (First Name, Last Name, …).
  11. Blog row: post cards (image, meta, title "Beginners Guide to Hair
      Styling", excerpt).
  12. Footer (`ftco-footer`, dark): logo blurb + social icons + Explore
      links + Info links + contact column + copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#bf925b** (gold — accents, headings, buttons) on dark
    **#090601** (near-black backgrounds) with white sections.
  - Fonts: **"Barlow Condensed"** (display headings) + **"Poppins"** (body)
    via Google Fonts.
  - Buttons: gold text/link style `btn-custom`; pill play buttons.
  - Section rhythm: dark hero/team/footer and photo bands mixed with light
    (bg-light) content sections.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  headline and gold accents; services cards with seeded photos; counter band
  with static numbers; gallery photo grid; appointment form client-side with
  zod; blog cards with seeded photos. All images picsum-seeded, icons
  lucide-react (no assets copied).

Barbero lives in `apps/barbero` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Barbero", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Barbero page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Barbero" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a
subheading, a level-1 headline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a subheading (e.g. "Welcome to Barbero") and a level-1 headline
- **AND** it SHALL show a "Learn More About Us" button

### Requirement: Services

The system SHALL render a services section with four photo cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL render four service cards (Hair Styles, Beard Trim, Hot Shave, Hair Shampoo)

### Requirement: Counters

The system SHALL render a counter band with at least four counters.

#### Scenario: Counter items

- **GIVEN** the page is rendered
- **WHEN** the counter band is displayed
- **THEN** it SHALL render four counters (Places, Events, Photos, Speakers) with numbers

### Requirement: Team

The system SHALL render an "Our Expert Team" section with team member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Expert Team"
- **AND** it SHALL render at least one team member with a name

### Requirement: Gallery

The system SHALL render a "Photos of Our Events" gallery with a photo grid.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Photos of Our Events"
- **AND** it SHALL render at least four gallery images

### Requirement: Appointment form

The system SHALL render an appointment form with at least first name and last
name fields plus a submit button.

#### Scenario: Form fields

- **GIVEN** the page is rendered
- **WHEN** the appointment form is displayed
- **THEN** the form SHALL contain a first name input and a submit button
- **AND** submitting the form SHALL NOT reload the page (client-side only)

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, quick
links, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Barbero" and quick links
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Barbero app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Barbero — Barber Shop Template"

# Template: Vitalis (Medical & Cosmetic Surgery Landing)

## Purpose

Vitalis is a single-page medical/cosmetic-surgery landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Aesthetic" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean medical page with teal accents: a photo hero
("Take the world's best quality Treatment" + Contact us), a consultation
band ("Consultation" / "Find Best Doctors With AESTHETIC" + appointment
form + video play button), an "Offer for you" choose-us row (Advanced
equipment, Qualified doctors, Certified services, Emergency care), a
procedures grid (Body procedures, Facial Procedures, Breast procedures,
Skin care & Beauty), an "Our Expert Doctors" team (Caroline Grant, Dr.
Maria Angel, Nathan Mullins), a "Skin care tips" blog row, and a footer
with subscribe/company/quick-links/contact columns. Vitalis recreates
that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Aesthetic" — free medical & cosmetic surgery
  website template (source: https://colorlib.com/wp/template/aesthetic/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/aesthetic/`
  (HTTP 200, 43.2KB) + stylesheet `css/style.css` (269.5KB). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot
  (`aesthetic-free-template.jpg`) confirms the visual design (light
  sections, teal accents, photo bands).
- **Section order (1:1):**
  1. Header: logo + nav (Home, About, Services, Pages, Pricing, Doctor,
     Blog Details, News, Contact).
  2. Hero (`hero spad set-bg`): "Take the world's best quality Treatment" +
     "Contact us" CTA (`.primary-btn`).
  3. Consultation (`consultation`): h2 "Consultation" + "Find Best Doctors
     With AESTHETIC" + copy "30 Years of experience in Cosmetic Surgery…" +
     appointment form (name/phone/email/select + "Book appointment") +
     circular video play button.
  4. Choose us (`chooseus spad`): "Offer for you" + 4 icon cards (Advanced
     equipment, Qualified doctors, Certified services, Emergency care).
  5. Services (`services spad set-bg`): "Offer for you" + procedures grid
     (Body procedures, Facial Procedures, Breast procedures, Skin care &
     Beauty) — photo band background.
  6. Team (`team spad`): "Our Team" eyebrow + "Our Expert Doctors" + 3
     member cards (Caroline Grant, Dr. Maria Angel, Nathan Mullins — all
     "Plastic surgeon").
  7. Blog (`latest spad`): "Skin care tips" + 3 post cards (e.g. "Here's
     how you can get a natural glow this party season", by "John Doe",
     "Dec 06, 2030").
  8. Footer: Subscribe (Email input) + Company (About Us, Departments,
     Find a Doctor, FAQ, News) + Quick links (Facial Fillers, Breast
     Surgery, Body Lifts, Face & Neck, Fat Reduction) + Contact Us (Los
     Angeles Gournadi, 1230 Bariasl · 1-677-124-44227 · Support@gmail.com).
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#13a2b7** (teal — accents, buttons) + dark **#111111**.
  - Font: **"Poppins"** (sans) via Google Fonts.
  - Sections: light white/`#f8f9fa` with `set-bg` photo bands.
  - Buttons (`.primary-btn`): uppercase, letter-spacing 2px, 2px border,
    ~15px/500 weight; teal fill with white text (header/appointment), or
    outline that fills teal on hover (hero "Contact us").
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline; consultation band with a CTA; choose-us/features with lucide
  icons; procedures grid with photo cards; doctor cards with initials
  avatars; blog cards with seeded photos; footer with newsletter/contact
  columns and social links; all images picsum-seeded
  (`picsum.photos/seed/vitalis-N/w/h`); Google Fonts via `<link>`.

Vitalis lives in `apps/vitalis` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Vitalis", a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Vitalis page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Vitalis" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Take the world's best quality Treatment")
- **AND** it SHALL show a call-to-action button (e.g. "Contact us")

### Requirement: Consultation band

The system SHALL render a consultation band with a heading, introductory
copy, an appointment form, and a video play button.

#### Scenario: Consultation content

- **GIVEN** the page is rendered
- **WHEN** the consultation band is displayed
- **THEN** it SHALL show the heading "Consultation"
- **AND** it SHALL show the sub-heading "Find Best Doctors With VITALIS" and a paragraph of copy
- **AND** it SHALL render an appointment form with a "Book appointment" button
- **AND** it SHALL show a circular "Play video" button

### Requirement: Choose us

The system SHALL render an "Offer for you" section with at least four icon
cards.

#### Scenario: Choose-us content

- **GIVEN** the page is rendered
- **WHEN** the choose-us section is displayed
- **THEN** it SHALL show the heading "Offer for you"
- **AND** it SHALL render four icon cards (Advanced equipment, Qualified doctors, Certified services, Emergency care)

### Requirement: Procedures

The system SHALL render a procedures section with at least four procedure
cards.

#### Scenario: Procedure cards

- **GIVEN** the page is rendered
- **WHEN** the procedures section is displayed
- **THEN** it SHALL render four procedure cards (Body procedures, Facial Procedures, Breast procedures, Skin care & Beauty)

### Requirement: Expert doctors

The system SHALL render an "Our Expert Doctors" section with at least three
member cards.

#### Scenario: Doctor cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Expert Doctors"
- **AND** it SHALL render at least three member cards (Caroline Grant, Dr. Maria Angel, Nathan Mullins)

### Requirement: Blog

The system SHALL render a "Skin care tips" section with at least three post
cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Skin care tips"
- **AND** it SHALL render at least three post cards with a title, an author, and a date

### Requirement: Footer

The system SHALL render a footer with the site name, quick links, contact
details, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Vitalis" and quick links
- **AND** it SHALL show contact details and social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Vitalis app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Vitalis — Medical & Cosmetic Surgery Template"

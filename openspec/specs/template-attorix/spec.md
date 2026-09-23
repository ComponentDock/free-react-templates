# Template: Attorix (Law Firm Agency)

## Purpose

Attorix is a single-page law firm landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Atorni" free template design (source:
https://colorlib.com/wp/template/atorni/), built under a different name
(**Attorix**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Atorni" — law firm agency template
  (source: https://colorlib.com/wp/template/atorni/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/atorni/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`atorni-colorlib-template-1.jpg`) is the
  visual reference; the design below is reconstructed from the DOM structure
  and CSS tokens.
- **Section order (1:1):** Top bar (phone + location, dark) → Navbar
  (logo "Attorix" + links: Home, About, Attorneys, Practice Areas, Cases,
  News, Contact + search) → Hero slider (3 slides, full-height parallax
  images, headline + "Make An Appointment" CTA) → Stats counter (4 items:
  Qualified Lawyers, Successful Cases, Happy Clients, Awards & honors) →
  About ("80 Years Of Experience" + video play image) → Practice Areas
  ("What We Cover" + 4 cards: Bank & Financial, Personal Injury, Family
  Law, Criminal Law) → Appointment ("Our Performance" + "Free Case
  Evaluation" form) → Case Studies (4 cards) → CTA banner ("Are You
  Facing Criminal Charges?") → Testimonials (carousel) → Blog (3 posts)
  → Newsletter CTA ("Subscribe for updates") → Footer (About + Practice
  Areas + links + social + copyright).
- **Design tokens extracted from `css/style.css`:**
  - Primary **gold `#c18e3c`** (subheadings, icon backgrounds, accents,
    counter labels, footer hover links).
  - Dark backgrounds: `#191919` (top bar, footer, counter cards),
    `#262626` (navbar, `bg-darken`).
  - Primary button: Bootstrap blue `#0d6efd` (hero CTA, form submit).
  - Black button variant: `#000000` with white text (CTA banner).
  - Fonts: **"Cormorant Garamond"** (serif, display/headings via
    Google Fonts) + **"Poppins"** (sans-serif, body/navbar via
    Google Fonts).
  - No border-radius on buttons or cards (square/boxy aesthetic).
  - Overlay opacity on parallax image sections.
  - Light background `#f9f9f9` (`.bg-light` on About, Practice Areas,
    Testimonials).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/atorni-<n>/<w>/<h>`); icons → lucide-react;
  forms prevent default (no backend); no assets copied; footer links to
  Component Dock instead of ColorLib.

Attorix lives in `apps/attorix` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a dark top bar above the navbar with phone number,
location, and contact information.

#### Scenario: Top bar content

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the top bar
- **THEN** the top bar SHALL display a phone number ("+1 234 456 78910")
  with "Free Call" label, a location address ("198 West 21th Street, Suite
  721 New York NY 10016"), and corresponding icons.
- **AND** the top bar SHALL have a dark background (`#191919`) with
  white text and gold accent (`#c18e3c`) for icon backgrounds.

### Requirement: Navigation bar

The system SHALL render a sticky navigation bar with the site logo,
navigation links, and a search toggle.

#### Scenario: Navbar links

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the navbar
- **THEN** the navbar SHALL contain the logo "Attorix" with a scale icon,
  and links: Home, About, Attorneys, Practice Areas, Cases, News, Contact.
- **AND** the navbar SHALL have a dark background (`#262626`) with white
  uppercase text (13px, letter-spacing 2px).

#### Scenario: Navbar logo

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the navbar brand
- **THEN** the brand SHALL show "Attorix" in bold with the subtitle
  "Lawfirm Agency" below it, plus a scale of justice icon.

#### Scenario: Search toggle

- **GIVEN** the Attorix page is rendered
- **WHEN** the user clicks the search icon
- **THEN** a search input field SHALL slide open or appear.

### Requirement: Hero slider

The system SHALL render a full-height hero slider with at least 3 slides,
each containing a background image, headline text, description, and a CTA
button.

#### Scenario: Hero slide content

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the hero section
- **THEN** the hero slider SHALL display a full-viewport-height slide with
  a parallax background image.
- **AND** the slide SHALL contain a heading (e.g. "We Are Lawfirm Agency"),
  a descriptive paragraph, and a "Make An Appointment" primary button
  (blue `#0d6efd`, large padding px-5 py-3).
- **AND** the slider SHALL cycle through at least 3 slides with different
  headlines: "We Are Lawfirm Agency", "Help To Reclaim Your Life And
  Freedom", "We Are Ready For A Fight Against Injustice".

#### Scenario: Hero overlay

- **GIVEN** a hero slide is displayed
- **WHEN** the user views the slide
- **THEN** the slide SHALL have a dark semi-transparent overlay on the
  background image to ensure text readability.

### Requirement: Statistics counter

The system SHALL render a statistics/counter section with 4 items showing
key firm metrics.

#### Scenario: Counter items

- **GIVEN** the Attorix page is rendered
- **WHEN** the user scrolls to the counter section
- **THEN** the section SHALL display 4 counter items: "Qualified Lawyers"
  (1500), "Successful Cases" (2100), "Happy Clients" (2700), and "Awards
  & honors" (1010).
- **AND** each counter item SHALL have an icon, a large number, and a
  label in gold (`#c18e3c`).
- **AND** the counter section SHALL have a dark background (`#262626`).
- **AND** the counter cards SHALL have dark card backgrounds (`#191919`).

### Requirement: About section

The system SHALL render an about section with a heading, description text,
and a video-play image.

#### Scenario: About content

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the about section
- **THEN** the section SHALL display a subheading "About Us" in gold,
  a heading "80 Years Of Experience In Legal Solution", and descriptive
  text.
- **AND** the section SHALL contain a large image with a play button
  overlay (gold circle, `#c18e3c`) simulating a video link.

### Requirement: Practice areas

The system SHALL render a practice areas section with 4 area cards.

#### Scenario: Practice area cards

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the practice areas section
- **THEN** the section SHALL display 4 cards in a row: "Bank & Financial",
  "Personal Injury", "Family Law", "Criminal Law".
- **AND** each card SHALL have a background image at the top, an icon,
  a title, and a short description.
- **AND** the section heading SHALL be "What We Cover" with subheading
  "Practice Areas" in gold.

### Requirement: Appointment / contact form

The system SHALL render a parallax-background appointment section with a
split layout: performance highlights on the left and a case evaluation
form on the right.

#### Scenario: Appointment section layout

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the appointment section
- **THEN** the section SHALL have a parallax background image with dark
  overlay.
- **AND** the left side SHALL show "Our Performance" with a heading "We
  Have Great Results" and 3 service items (Get Legal Advices, We Protect
  Justice, Best Attorneys team) each with an icon.
- **AND** the right side SHALL show a "Free Case Evaluation" form with:
  Full Name input, Email input, Subject dropdown (Practice Areas options:
  Business Law, Criminal Law, Family Law, Judicial Law, Personal Injury,
  Real Estate Law), Message textarea, and "Send message" submit button
  (rounded, `#0d6efd`).

### Requirement: Case studies

The system SHALL render a case studies section with 4 cards showing
recent cases.

#### Scenario: Case study cards

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the case studies section
- **THEN** the section SHALL display a heading "Recent Case Studies" with
  subheading "Cases".
- **AND** it SHALL show 4 case cards, each with a background image, a
  title (e.g. "Business Law"), and a short description.
- **AND** cards SHALL have hover effects revealing text over the image.

### Requirement: CTA banner

The system SHALL render a call-to-action banner section with a parallax
background.

#### Scenario: CTA banner content

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the CTA banner
- **THEN** the banner SHALL display the heading "Are You Facing Criminal
  Charges?" with the subtext "We are waiting for your call".
- **AND** it SHALL have a "Get in touch" black button (`#000000`, white
  text, square).
- **AND** the section SHALL use a parallax background image with dark
  overlay.

### Requirement: Testimonials

The system SHALL render a testimonials section with a carousel of client
reviews.

#### Scenario: Testimonial cards

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the testimonials section
- **THEN** the section SHALL display "Happy Clients" heading with
  subheading "Testimonial" in gold.
- **AND** it SHALL show a carousel of testimonial cards, each containing
  a quote icon, a review paragraph, a user avatar image, the person's
  name, and their position/title.
- **AND** the testimonials section SHALL have a light background
  (`#f9f9f9`).

### Requirement: Blog section

The system SHALL render a blog section with 3 recent blog post cards.

#### Scenario: Blog cards

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the blog section
- **THEN** the section SHALL display "Recent Blog" heading with subheading
  "Blog" in gold.
- **AND** it SHALL show 3 blog cards, each with a background image, a
  date overlay (day, month, year), a post title, and a short excerpt.

### Requirement: Newsletter CTA

The system SHALL render a newsletter/subscribe call-to-action section.

#### Scenario: Newsletter content

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the newsletter section
- **THEN** the section SHALL display a heading "Subscribe for updates"
  with an email input and a submit button.
- **AND** the section SHALL use a parallax background with dark overlay.

### Requirement: Footer

The system SHALL render a multi-column footer with firm info, practice
areas, links, and social media.

#### Scenario: Footer columns

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the footer
- **THEN** the footer SHALL contain 4 columns: firm info (Attorix logo
  + description + social icons), Practice Areas links, Quick links, and
  Contact info (address, phone, email).
- **AND** the footer SHALL have a dark background (`#191919`) with white
  text at 70% opacity.
- **AND** the footer SHALL link to `https://www.componentdock.com/`
  (branded as "Component Dock") replacing any ColorLib attribution.

#### Scenario: Footer copyright

- **GIVEN** the Attorix page is rendered
- **WHEN** the user views the footer bottom
- **THEN** the copyright bar SHALL display the current year and
  "Component Dock" attribution on a black background.

## Verification checklist

- [ ] All 12 sections rendered in correct order (top bar → navbar → hero →
      counter → about → practice areas → appointment → case studies → CTA
      → testimonials → blog → newsletter → footer).
- [ ] Design tokens: gold `#c18e3c`, dark `#191919`/`#262626`, fonts
      Cormorant Garamond + Poppins, square buttons, no border-radius.
- [ ] Hero slider cycles 3 slides with correct headlines and CTAs.
- [ ] Counter numbers animate (count-up) on scroll into view.
- [ ] Practice area cards show 4 items with icons and images.
- [ ] Appointment form has all 5 fields (name, email, subject dropdown,
      message, submit).
- [ ] CTA banner has black button with hover state (transparent + black
      border).
- [ ] Testimonial carousel shows cards with avatar, name, position.
- [ ] Blog cards show date overlay and post excerpts.
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`).
- [ ] No ColorLib references in app code (provenance only in spec +
      TEMPLATES.md).
- [ ] All images use seeded picsum placeholders.
- [ ] Coverage: 100% lines/functions/branches/statements.

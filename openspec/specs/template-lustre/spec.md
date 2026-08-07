# Template: Lustre (Hair Salon)

## Purpose

Lustre is a single-page hair-salon template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Vogue"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Vogue" — hair salon single-page template
  (source: https://colorlib.com/wp/template/vogue/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/vogue/
  (HTTP 200, full rendered DOM + `styles/main_styles.css` (28.5 KB)
  extracted). The TEMPLATES.md screenshot
  (`vogue-free-template.jpg`) is the visual reference and confirms the
  design below.
- **Section order (1:1):**
  1. Header: logo "Vogue" + gold "hair" tagline, center nav (Home / About Us
     / Services / Articles / Contact), right-side gold "Book an Appointment"
     button that slides open a right panel with an appointment form.
  2. Mobile menu overlay (hamburger, same links, stacked column).
  3. Home hero: full-screen image slider (3 identical slides) — "Our best
     offers" kicker, h1 "The hair that you dream" (the word "hair" in gold),
     muted paragraph, gold underlined "View our offers" link, centered
     "Scroll Down" mouse indicator, slide progress counter ("01." + bar).
  4. Services: parallax background image, dark "Our Services" heading +
     subtext, carousel of 6 amber service cards (icon + title + text):
     Hair Dressing, Ombre Hair, Hair Coloring, Treatments, Cutting &
     Trimming, Keratin Straightening. Cards invert on hover (dark bg, gold
     title, white text).
  5. Testimonials: parallax background image, white "Testimonials" heading +
     subtext, carousel of 3 white testimonial cards (circular author photo
     overlapping the top edge, gold title, quote, gold author line
     "Jessica Smith, Client"), centered "load more" button.
  6. Footer: parallax background image, white "Get in touch" heading +
     subtext, two columns — Contact Info (address / phone / email rows with
     icons + 6 circular gold social buttons) and "Leave a comment" form
     (Name, E-mail, Subject, Message, gold "send message" button) — then a
     bottom bar with the copyright line.
- **Design tokens extracted from `main_styles.css`:**
  - Brand gold **`#ffae00`** (appointment button, service-card bg at
    `rgba(255,174,0,0.86)`, form buttons, links, author lines) and brighter
    **`#ffbb00`** (hover states, active nav underline, logo highlight).
  - Dark **`#1a1a1a`** (headings on light sections, testimonial text),
    **`#2a2a2a`** (button text on gold), **`#454545`** (copyright);
    grays **`#767271`** (footer input underlines) and **`#737373`**
    (app-form input underlines).
  - White `#FFFFFF`; muted on dark `rgba(255,255,255,0.49)`.
  - Font: **"Montserrat"** (sans-serif) throughout — hero h1 110px/700,
    section h1 110px/700, logo 48px, nav 18px, body 15–18px.
  - Buttons: sharp corners (no radius), gold fill, uppercase bold text in
    `#2a2a2a` (e.g. `contact_form_button` 203×62, `app_form_button` 100×46).
  - Cards: service card 239px tall, icon overlapping its left edge; white
    testimonial card 396px tall with the author image (53px circle) pulled
    up over the top edge.
  - Header: fixed, transparent over the hero, `rgba(0,0,0,0.85)` once
    scrolled (logo shrinks 48px → 36px).
- **Recreation decisions:** same kind of salon page — hero slider with
  `https://picsum.photos/seed/lustre-<n>/<w>/<h>` placeholder imagery,
  lucide icons for service/contact icons, Montserrat via Google Fonts
  `<link>`, gold primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; no assets copied.

Lustre lives in `apps/lustre` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the site name
"Lustre" (wordmark + gold "hair" tagline), the page navigation, a
"Book an Appointment" button, and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Lustre page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Lustre" with a "hair"
  tagline in gold
- **AND** the navbar SHALL show navigation links for Home, About Us,
  Services, Articles and Contact
- **AND** the navbar SHALL show a "Book an Appointment" button
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Navbar darkens on scroll

- **GIVEN** the page is rendered at the top of the hero
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL switch from a transparent background to a dark
  translucent background

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Appointment booking panel

The system SHALL open a right-side panel with an appointment form when the
"Book an Appointment" button is clicked.

#### Scenario: Open appointment panel

- **GIVEN** the page is rendered
- **WHEN** the user clicks "Book an Appointment"
- **THEN** a right-side panel SHALL appear with fields for Full Name, Email
  Address, Phone Number and Desired Date
- **AND** the panel SHALL offer a "Select Service" dropdown
- **AND** the panel SHALL show a submit button

#### Scenario: Close appointment panel

- **GIVEN** the appointment panel is open
- **WHEN** the user clicks the close control
- **THEN** the panel SHALL close

### Requirement: Mobile menu

The system SHALL show a hamburger menu on small screens that opens an
overlay with the same navigation links.

#### Scenario: Open mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user clicks the hamburger icon
- **THEN** a menu overlay SHALL open listing Home, About Us, Services,
  Articles and Contact

### Requirement: Hero slider

The system SHALL render a full-screen hero slider with a headline, copy,
a call-to-action link, a scroll-down indicator and slide progress.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the kicker "Our best offers"
- **AND** it SHALL show a level-1 heading "The hair that you dream" with the
  word "hair" highlighted in gold
- **AND** it SHALL show a paragraph of supporting copy
- **AND** it SHALL show a "View our offers" link in gold

#### Scenario: Hero scroll indicator and progress

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the hero
- **THEN** it SHALL show a centered "Scroll Down" indicator
- **AND** it SHALL show a slide-progress counter and progress bar

### Requirement: Services section

The system SHALL render a services section with a heading and a carousel of
six service cards, each with an icon, a title and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services" with supporting copy
- **AND** it SHALL list service cards for Hair Dressing, Ombre Hair, Hair
  Coloring, Treatments, Cutting & Trimming and Keratin Straightening
- **AND** each card SHALL show an icon, a title and a description

#### Scenario: Service card hover state

- **GIVEN** a service card is displayed
- **WHEN** the user hovers over it
- **THEN** the card SHALL invert to a dark background with a gold title and
  white text

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a carousel
of testimonial cards (photo, title, quote, author) and a "load more"
button.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Testimonials" with supporting copy
- **AND** it SHALL show at least one testimonial card with an author photo,
  a title, a quote and an author line "Jessica Smith, Client"
- **AND** it SHALL show a "load more" button below the carousel

### Requirement: Footer

The system SHALL render a footer with a "Get in touch" heading, contact
info and social icons, a comment form, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the heading "Get in touch" with supporting copy
- **AND** it SHALL show contact info rows for address, phone and email
- **AND** it SHALL show circular social buttons (pinterest, facebook,
  twitter, dribbble, behance, linkedin)
- **AND** it SHALL show a "Leave a comment" form with Name, E-mail, Subject
  and Message fields and a "send message" submit button
- **AND** it SHALL show a copyright line in the bottom bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lustre app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Lustre — Hair Salon Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App renders all sections 1:1 in the order above (header → hero →
      services → testimonials → footer).
- [ ] Design tokens match the reference: gold `#ffae00`/`#ffbb00` primary,
      dark `#1a1a1a`, Montserrat, sharp-corner gold buttons.
- [ ] 100% Vitest coverage on `apps/lustre` (lines/functions/branches/
      statements).
- [ ] Per-app gate `scripts/verify-app.sh lustre` passes.
- [ ] PR description includes: source template (ColorLib Vogue), preview
      URL, design tokens used, what differs (renames, placeholder images).

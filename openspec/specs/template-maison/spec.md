# Template: Maison (Architecture Template)

## Purpose

Maison is a single-page architecture/interior landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Loaft" website template design
(https://colorlib.com/wp/template/loaft/), built under a **different name**
("Maison") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Loaft" — architecture template
  (source: https://colorlib.com/wp/template/loaft/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/loaft/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Screenshot** (`loaft-free-template.jpg`): split hero — dining-room photo
  left, headline right; gold CTA; solid gold divider band; split "Latest
  Works" section (text left, brick-wall photo right).
- **Section order (1:1, from the DOM):**
  1. Navbar (logo + Home, About, Works, Project, Service, Blog, Contact).
  2. Hero: "Precise Concept design for Posh living" — split, image left,
     headline right, gold CTA "Learn More About Precise Design".
  3. Gold divider band (screenshot).
  4. Projects: "We are Maison — Here are some of Our Latest Works" + project
     cards (image, title, "View Details").
  5. Services: "Top Services That We Offers" + 3 service cards (icon, title,
     blurb, "View Details" link).
  6. Testimonials: "What Our Priority Client's Say" + testimonial card.
  7. Counters: 1990 Projects done · 50+ Expert Members · 25+ Achievements.
  8. Blog: "A Glimpse from Our Latest Blog" + blog post cards (author/date,
     likes/comments meta, title, blurb).
  9. CTA band: "Join us today without any hesitation" + gold "Learn More".
  10. Footer: About Me (logo + blurb + socials), Newsletter, Follow Me +
      copyright.
- **Design tokens extracted from `css/style.css`:**
  - Primary **gold `#f5ca56`** (buttons, accents, divider band); dark
    `#222222`; light backgrounds `#f9f9ff`; muted text `#777777`.
  - Fonts: **"Roboto"** (body) + **"Rajdhani"** (display) via Google Fonts.
  - Buttons: square (`border-radius: 0`), gold fill with dark text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/maison-<n>/<w>/<h>`); icons → lucide-react; brand
  icons → inline SVG; no assets copied.

Maison lives in `apps/maison` (package `@free-react-templates/maison`) and
uses shared components from `packages/ui` (Button, ButtonLink, Badge, Card,
cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Maison",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Maison page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Maison" and links to Home, About, Services, Projects, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width split hero with a photo, a headline, and
a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading with "Posh living"
- **AND** it SHALL show a "Learn More About Precise Design" button

### Requirement: Projects section

The system SHALL render a projects section with a heading and at least three
project cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Here are some of Our Latest Works"
- **AND** it SHALL show at least three project cards, each with an image, a title, and a "View Details" link

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Top Services That We Offers"
- **AND** it SHALL show at least three service cards with icons, titles, and blurbs

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and a
testimonial card.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Priority Client's Say"
- **AND** it SHALL show a testimonial quote with an author name

### Requirement: Counters band

The system SHALL render a stats band with at least three counters.

#### Scenario: Counters content

- **GIVEN** the page is rendered
- **WHEN** the counters band is displayed
- **THEN** it SHALL show the values "1990", "50+", and "25+"
- **AND** each counter SHALL have a label (Projects done, Expert Members, Achievements)

### Requirement: Blog section

The system SHALL render a blog section with a heading and at least three blog
post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "A Glimpse from Our Latest Blog"
- **AND** it SHALL show at least three blog cards with meta info, titles, and blurbs

### Requirement: Call-to-action band

The system SHALL render a call-to-action band with a headline and a gold
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain the text "Join us today without any hesitation"
- **AND** it SHALL show a "Learn More" button

### Requirement: Footer

The system SHALL render a footer with an about column, a newsletter form, a
social column, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an about blurb and social links (Facebook, X, LinkedIn, Instagram)
- **AND** it SHALL show a newsletter input with a subscribe button
- **AND** it SHALL show a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the footer is rendered
- **WHEN** the user types an email and presses the subscribe button
- **THEN** the form SHALL submit without a page reload

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Maison app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Maison — Architecture Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `bash scripts/verify-app.sh maison` passes (typecheck + lint + 100% coverage tests + build)
- [ ] 100% lines/functions/branches/statements coverage for `apps/maison`
- [ ] Surge URL in PR + bookkeeping: `https://free-react-templates-maison.surge.sh`

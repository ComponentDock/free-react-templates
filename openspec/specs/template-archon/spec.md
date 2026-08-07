# Template: Archon (Architecture Template)

## Purpose

Archon is a single-page architecture/agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Alpha" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Original:** ColorLib "Alpha" — free HTML architecture template
  (source: https://colorlib.com/wp/template/alpha/).

## Design reference (replication findings)

- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/alpha/
  (live rendered DOM + `css/style.css` (29 KB) fetched and parsed; the
  TEMPLATES.md screenshot `alpha-free-template.jpg` used as visual
  cross-check).
- **Section order (1:1):** Navbar (logo + Home, Dropdown, Inner Page,
  Contact us, pill CTA) → Hero (full-width photo, overlapping blockquote
  with author, bordered "Get Quote" box with black button, "Share me
  please!" row) → Mission (two alternating image/text blocks, second with
  three counters) → Services (intro + 2×2 icon cards) → News (grey band,
  four dated cards, "Our Blog Posts" button) → Testimonials (carousel of
  three) → Footer (About Us, Navigation ×2 columns, social icons,
  Subscribe form, Recent Posts, copyright).
- **Design tokens extracted from `style.css`:**
  - Brand coral **`#ff926b`** (primary buttons, active/hover nav links,
    hover `#ffa585`); buttons are **pill-shaped** (`border-radius: 30px`,
    `padding: 10px 30px`, 2px transparent border; hover switches to
    transparent bg + coral border + coral text).
  - Near-black `#000` (headings, hero box **2px black border**, black
    "Get a quote" button, navbar CTA pill `#000` bg).
  - Light greys `#f5f5f5` (mission band, news band, testimonials band),
    `#f7f7f7` (nav bottom border), muted text `#878787`/`#b3b3b3`,
    share-icon circles `#dedede`.
  - Footer **`#191919`** with white links, `padding: 70px 0`.
  - Font: **"Montserrat"** (Google Fonts) throughout.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/archon-<n>/<w>/<h>`); icons → lucide-react (brand
  icons as inline SVG); the hero box + quote overlap the photo via
  negative margins exactly like the original; copy paraphrased to
  architecture-agency content, same section kinds; the "Visit Colorlib"
  CTA becomes a "Get a quote" CTA; the Colorlib footer attribution becomes
  an original copyright line. No assets copied.

Archon lives in `apps/archon` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Archon",
anchor links to the page's sections, a dropdown menu, a CTA button, a
dark-mode toggle, and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Archon page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Archon" and links for Home, Inner
  Page, and Contact us
- **AND** it SHALL show a "Dropdown" control, a "Get a quote" CTA, and a
  dark-mode toggle button

#### Scenario: Dropdown menu

- **GIVEN** the navbar is displayed
- **WHEN** the user activates the Dropdown control
- **THEN** a menu with Menu One, Menu Two, and Menu Three SHALL be shown
- **AND** activating the control again SHALL hide it

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed
- **WHEN** the user presses the "Open menu" button
- **THEN** a mobile menu with the same links SHALL be shown
- **AND** pressing "Close menu" SHALL hide it

### Requirement: Hero section

The system SHALL render a full-width photo hero with an overlapping
blockquote (quote + author), a bordered "Get Quote" box with a button, and
a share row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading with the template tagline
- **AND** it SHALL show the author name "Adam Aderson" with a photo
- **AND** it SHALL show a "Get Quote" box with a "Get a quote" button

#### Scenario: Share row

- **GIVEN** the hero is displayed
- **WHEN** the share row is rendered
- **THEN** it SHALL contain the text "Share me please!"
- **AND** it SHALL show Facebook and Twitter share links

### Requirement: Mission section

The system SHALL render a mission section with two alternating blocks and
three counters.

#### Scenario: Mission blocks

- **GIVEN** the page is rendered
- **WHEN** the mission section is displayed
- **THEN** it SHALL contain the subtitle "Our Mission"
- **AND** it SHALL contain two level-2 headings with mission copy
- **AND** the first block SHALL show an image and an "Our Mission" button

#### Scenario: Counters

- **GIVEN** the second mission block is displayed
- **WHEN** the counters render
- **THEN** it SHALL show the numbers 30,210, 9,102, and 40,244
- **AND** each counter SHALL have a label (Share, Likes, Love)

### Requirement: Services section

The system SHALL render a services section with an intro and four service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain the label "Our Services" and a heading
  introducing the services
- **AND** it SHALL show four cards titled Square, Technology, Brilliant
  Ideas, and Blueprint
- **AND** each card SHALL have a blurb
- **AND** the intro SHALL show a "Contact Us" button

### Requirement: News section

The system SHALL render a news section with a grey band, four dated
entries, and a "Our Blog Posts" button.

#### Scenario: News content

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL contain the subtitle "Ideas & Publications" and the
  heading "Keep up to date"
- **AND** it SHALL show four entries, each with a date, a title, a blurb,
  and a "Read more" link
- **AND** it SHALL show an "Our Blog Posts" button

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with three people and
previous/next controls.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain the subtitle "What They Say" and the heading
  "Testimonials"
- **AND** it SHALL show the first testimonial (Adam Aderson) with a photo
  and quote

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user presses Next
- **THEN** the next testimonial SHALL be shown
- **AND** pressing Prev SHALL show the previous one
- **AND** the carousel SHALL wrap around at both ends

### Requirement: Footer

The system SHALL render a dark footer with an about widget, navigation
columns, social icons, a subscribe form, recent posts, and a copyright
line.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show "About Us" with a "Learn more" button
- **AND** it SHALL show two navigation columns of links
- **AND** it SHALL show five social links (Facebook, Twitter, LinkedIn,
  Google, YouTube)
- **AND** it SHALL show a "Subscribe" form and a "Recent Posts" list
- **AND** it SHALL show a copyright line containing "All rights reserved"

#### Scenario: Subscribe validation

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits an invalid or empty email
- **THEN** an error message SHALL be shown
- **AND** no success message SHALL be shown

#### Scenario: Subscribe success

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits a valid email address
- **THEN** a success message SHALL be shown

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Archon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Archon — Architecture Template"

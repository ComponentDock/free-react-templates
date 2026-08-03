# Template: Alotan (Barber Shop Landing)

## Purpose

Alotan is a single-page barber-shop landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Alotan"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a clean, light barber shop landing page with an orange accent:
a full-screen photo hero with the barbershop wordmark, an orange quick-info
strip (phone/location/hours), a services carousel with photo cards, a
"Barber Features" grid, a photo CTA band ("Appoint a Haircut Today … 25%
discount"), a video + "Good Looking Style" split, and a light footer. Alotan
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Alotan" — barber shop website template
  (source: https://colorlib.com/wp/template/alotan/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/alotan/`
  (HTTP 200, 32.1KB) + stylesheet `css/style.css` (13.9KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`alotan-free-template.jpg`) confirms the visual design (light, orange
  accents, photo hero).
- **Section order (1:1):**
  1. Header/navbar: logo + nav (Home, About, Contact).
  2. Hero (`site-hero overlay`, photo background, centered): barbershop
     wordmark image (recreated as styled text), no headline copy.
  3. Quick info strip (`quick-info`, orange `bgcolor`): 3 media items —
     phone "+1 234 5633 342" ("Call us 24/7…"), location "249 Division Rad"
     (Fake st. New York), hours "Daily: 8 am - 10 pm" (Mon-Fri, Sunday;
     Saturday closed).
  4. Services (`site-section`): "Services" heading + blurb + Previous/Next
     buttons; right carousel of photo cards (Haircuting · Beard Shaving ·
     Cream & Shampoo) each with an icon, title, and "Read More".
  5. Barber Features (`site-section`): centered "Barber Features" heading +
     blurb + 3 icon feature cards: Shave & Haircut · Cream & Shampoo ·
     Mustache Expert.
  6. CTA band (`section-cover cta`, photo background): "Appoint a Haircut
     Today and Get 25% discount" + black "Make an Appointment" button.
  7. Good Looking Style (`site-section`): video image with play button +
     "Good Looking Style" heading, "Start with us today" lead, two
     paragraphs.
  8. Footer (`site-footer`, light): About column (blurb, address, phone,
     email) + Links column + Latest Blog column (post meta + titles) +
     copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff6d24** (orange — quick-info strip, accents, hover).
  - Text: dark gray on white; black buttons (`btn-black`).
  - Font: **"Roboto"** (Google Fonts) — body and headings.
  - Buttons: solid black "Make an Appointment"; small prev/next circle
    buttons; play button overlay on the video image.
  - Section rhythm: white sections, photo backdrops for hero and CTA band.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  "Alotan" wordmark; quick-info strip with lucide icons (phone, map pin,
  clock); service cards with seeded photos and titles; feature cards with
  lucide icons; CTA band with the 25% discount message and an appointment
  button; video block with a play icon. All images picsum-seeded, icons
  lucide-react (no assets copied).

Alotan lives in `apps/alotan` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Alotan", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Alotan page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Alotan" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image and the
barbershop wordmark.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a background image and the site wordmark "Alotan"

### Requirement: Quick info strip

The system SHALL render a quick-info strip with phone, location, and opening
hours items.

#### Scenario: Info items

- **GIVEN** the page is rendered
- **WHEN** the quick-info strip is displayed
- **THEN** it SHALL show a phone number item, a location item, and an hours item

### Requirement: Services

The system SHALL render a "Services" section with at least three service cards,
each with a title.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Services"
- **AND** it SHALL render at least three service cards (Haircuting, Beard Shaving, Cream & Shampoo)

### Requirement: Barber features

The system SHALL render a "Barber Features" section with three feature cards.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Barber Features"
- **AND** it SHALL render three feature cards (Shave & Haircut, Cream & Shampoo, Mustache Expert)

### Requirement: CTA band

The system SHALL render a call-to-action band with a discount message and an
appointment button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show a discount message (e.g. "Get 25% discount")
- **AND** it SHALL show a "Make an Appointment" button

### Requirement: Good Looking Style

The system SHALL render a split section with a video block and a "Good Looking
Style" heading.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** the style section is displayed
- **THEN** it SHALL show the heading "Good Looking Style"
- **AND** it SHALL show a play button over a video image

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, quick
links, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Alotan" and quick links
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Alotan app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Alotan — Barber Shop Template"

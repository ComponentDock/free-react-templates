# Template: Blush (App Landing Page)

## Purpose

Blush is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Selene"
website template design (see TEMPLATES.md), built under a DIFFERENT name
("Blush") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Selene" — app landing page template
  (source: https://colorlib.com/wp/template/selene/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/selene/
  (HTTP 200, full rendered DOM extracted) + `style.css` (39KB) extracted.
  The TEMPLATES.md screenshot (`selene-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the live DOM structure
  and CSS tokens.
- **Section order (1:1, from live DOM):**
  1. Navbar (`header_area` / `menu_area`): logo + Home, About Us, Services,
     Blog, Contact links + search.
  2. Hero (`section.welcome_area`): h2 "SELENE THE APP" + blurb + two
     app-download buttons ("available on Google Store" / "available on
     Apple Store") + "Scroll Down" link + mobile device image (right).
  3. About app split (`div.about-app-area`): h2 "Mobile ready" + blurb +
     app slider (4 slides) + 4 feature icons (`single-app-feature-icon`).
  4. FAQ (`section.app-faq-area`): h2 "An app for Each & Everyone" + blurb +
     3 accordion panels (heading + collapsible answer).
  5. Users map (`div.app-users-map-area`): world map graphic with 4 map
     pins.
  6. Stats (`section.cool_facts_area`): 5 counters — 10 Years of Experience,
     +500 Happy Clients, 17k Followers on FB, 132 Finished Projects,
     03 Coffees a day.
  7. Features (`section.app-features-area`): h2 "All the best features" +
     6 feature cards (No1 in Sales!, Online Marketing, Modern Design,
     Documented, Easy to use, Google Font) + side image.
  8. Pricing (`section.pricing-plan-area`): 3 plans ($0 Free / $29 / $59 per
     month; tags Beginner / Recommended / Always; features 2 Email
     Addresses, 25 GB Space, 24h Live Support, Documentation inside, SEO
     Plan) + "Purchase App" heading + blurb + plan buttons.
  9. Footer (`footer.footer-area`): app download buttons, social links,
     copyright line.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#ff4c8b`** (buttons, borders, accents), darker pink
    `#fb397d`, light pink `#fa91b9`, **lime `#ccfa87`** accent, dark ink
    `#292d4f`, muted `#9597a6`.
  - Fonts: "Century Gothic" / "Futura LT" (headings) + "Open Sans" (body) —
    recreate with **Poppins** (headings) + **Open Sans** (body) via Google
    Fonts `<link>`.
  - Buttons: solid pink `#ff4c8b` with white text; download buttons have a
    2px pink border; plan cards have a 5px pink top border + soft shadow.
- **Copy fixes (paraphrase allowed):** "SELENE THE APP" → "BLUSH THE APP";
  "Coffes a day" → "Coffees a day"; "begginer" → "Beginner"; "Documetation
  inside" → "Documentation inside"; "2 E-mail Addresess" → "2 Email
  Addresses"; product name in copy ("Who can use Selene?") → "Blush".
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/blush-<n>/<w>/<h>`); icons → lucide-react (brand
  icons as inline SVG); the map area is recreated as a stylized
  "used worldwide" band with MapPin markers (no copyrighted map asset);
  the preloader animation is omitted (meaningless once rendered); forms
  prevent default (no backend); no assets copied.

Blush lives in `apps/blush` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Blush",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Blush page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Blush" and links to Home, About, Features, Pricing, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, two
store buttons, and a device image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Blush the App"
- **AND** it SHALL show "Google Store" and "Apple Store" download buttons

### Requirement: About app split section

The system SHALL render a split section with the heading "Mobile ready", a
blurb, feature icons, and an image slider.

#### Scenario: About split content

- **GIVEN** the page is rendered
- **WHEN** the about split section is displayed
- **THEN** it SHALL contain the heading "Mobile ready"
- **AND** it SHALL show four feature icons with labels

### Requirement: FAQ section

The system SHALL render an FAQ section with a heading and three collapsible
accordion panels.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain the heading "An app for Each & Everyone"
- **AND** it SHALL show three accordion questions

#### Scenario: Accordion toggle

- **GIVEN** the FAQ section is displayed
- **WHEN** the user clicks an accordion question
- **THEN** the matching answer SHALL expand and collapse on subsequent clicks

### Requirement: Stats section

The system SHALL render a stats section with five metrics.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show "10 Years of Experience", "500 Happy Clients", "17k Followers on FB", "132 Finished Projects", and "3 Coffees a day"

### Requirement: Features section

The system SHALL render a features section with a heading and six feature
cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain the heading "All the best features"
- **AND** it SHALL show six feature cards with titles and blurbs

### Requirement: Pricing section

The system SHALL render a pricing section with a heading, a blurb, and three
plans with prices and purchase buttons.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain the heading "Purchase App"
- **AND** it SHALL show three plans priced Free, $29, and $59 per month
- **AND** each plan SHALL list its features and show a "Buy Now" button

### Requirement: Footer

The system SHALL render a footer with download buttons, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show store download buttons and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Blush app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Blush — App Landing Template"

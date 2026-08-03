# Template: Hvac (Car Dealership Landing)

## Purpose

Hvac is a single-page car-dealership landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "HVAC"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. (The ColorLib name is "HVAC" but the design is a
car rental/sales landing page.)

The original is a bold red-and-dark car landing page: a full-screen hero with a
featured car ("Porsche Cayenne S") and a rental/buy search form, a services
grid, a features split, a filterable vehicle offers grid, a "Why People Choose
Us" strip with video, a latest-news blog row, and a dark contact footer. Hvac
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "HVAC" — car dealership website template
  (source: https://colorlib.com/wp/template/hvac/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hvac/`
  (HTTP 200, 52.1KB) + stylesheet `css/style.css` (58KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot (`hvac-free-template.jpg`)
  confirms the visual design (red/dark, hero car, offers grid).
- **Section order (1:1):**
  1. Header: logo + nav + "Add Car" primary button.
  2. Hero (`hero spad set-bg`, photo background): left "FIND YOUR DREAM CAR"
     overline + `<h2>Porsche Cayenne S</h2>`, "Model 2019" + `$399/Month`,
     "Test Drive" + "Learn More" buttons; right tabbed form ("Car Rental" /
     "Buy Car") with "Find Your Dream Car" selects (Select Year · Select
     Brand · …) and a search button.
  3. Services (`services spad`): "Our Services" / "What We Offers" + 4
     icon cards: Rental A Cars · Buying A Cars · Car Maintenance · Support
     24/7.
  4. Feature (`feature spad`): "Our Feature" / "We Are a Trusted Name In
     Auto" + two paragraphs + "About Us" / "Our Partners" buttons + icon
     feature grid.
  5. Car offers (`car spad`): "Our Car" / "Best Vehicle Offers" + filter
     controls (Most Researched · Latest on sale) + car cards (year label,
     model name e.g. "Porsche cayenne turbo s", price, "Rent Now").
  6. Choose us (`chooseus spad`): "Why People Choose Us" + checkmark list +
     "About Us" button + video block with play button.
  7. Latest blog (`latest spad`): "Our Blog" / "Latest News Updates" + 3
     post cards (image with By/date meta, title, excerpt, "View More").
  8. Footer (`footer set-bg`, photo background, dark): "Contact Us Now!" +
     phone/email options + about column with address + social icons +
     copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#db2d2e** (red — primary buttons, accents, links).
  - Dark neutrals: **#353535** / **#323232** (headings/footer), **#727171** /
    **#8d8d8d** (body/muted), white.
  - Font: **"Lato"** (Google Fonts) — body and headings.
  - Buttons: solid red `primary-btn`, uppercase, white text; secondary
    "more-btn"/"partner-btn" variants.
  - Section rhythm: white sections with `spad` padding, photo backdrops for
    hero and footer.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  featured car + two CTAs; the search form (year/brand selects) is
  client-side with zod; services/feature items use lucide icons; car offer
  cards with seeded photos and prices; choose-us checklist with check icons;
  blog cards with seeded photos and meta lines. All images picsum-seeded,
  icons lucide-react (no assets copied).

Hvac lives in `apps/hvac` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Hvac", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hvac page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hvac" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a featured
car heading, a price, and call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show an overline (e.g. "Find your dream car") and a level-1 headline (e.g. "Porsche Cayenne S")
- **AND** it SHALL show a monthly price and a "Test Drive" button

### Requirement: Search form

The system SHALL render a car search form with year and brand selects and a
search button.

#### Scenario: Search fields

- **GIVEN** the page is rendered
- **WHEN** the search form is displayed
- **THEN** the form SHALL contain labeled selects for year and brand
- **AND** the form SHALL show a search button
- **AND** submitting the form SHALL NOT reload the page (client-side only)

### Requirement: Services

The system SHALL render a "What We Offers" section with four service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What We Offers"
- **AND** it SHALL render four service cards (Rental A Cars, Buying A Cars, Car Maintenance, Support 24/7)

### Requirement: Vehicle offers

The system SHALL render a "Best Vehicle Offers" section with car cards, each
showing a model name, a year, and a price.

#### Scenario: Offer cards

- **GIVEN** the page is rendered
- **WHEN** the offers section is displayed
- **THEN** it SHALL show the heading "Best Vehicle Offers"
- **AND** it SHALL render at least two car cards with model names and prices

### Requirement: Choose us

The system SHALL render a "Why People Choose Us" section with a checkmark list.

#### Scenario: Checklist

- **GIVEN** the page is rendered
- **WHEN** the choose-us section is displayed
- **THEN** it SHALL show the heading "Why People Choose Us"
- **AND** it SHALL render a list of at least three reasons

### Requirement: Blog row

The system SHALL render a "Latest News Updates" section with three post cards.

#### Scenario: Post cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest News Updates"
- **AND** it SHALL render three post cards with titles and excerpts

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, contact
information, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Hvac" and contact information
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Hvac app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Hvac — Car Dealership Template"

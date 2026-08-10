# Template: Pump (Gym Fitness Landing)

## Purpose

Pump is a single-page gym/fitness template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Muscle"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a hot-pink-and-orange gym page: a full-height slider hero
("Fuel Your Body Fitness" / "Be One Of Us" / "Challenge Yourself" / "Get
Your Body Fit"), a "What We Do?" services row (Analyze Your Goal, Work
Hard On It, Improve Your Performance, Achieve Your Perfect Body), a counter
band, a "Welcome To Our Gym" about split, an "Our Coaches" team (Mark
Brook, Sarah Henderson, George Hump, Victor Hump), a "Workout Classes"
grid (Body Building, Aerobic Classes, Weight Lifting, Yoga Classes), a
"Membership Plans" pricing section (One Day Training, Pay Every Month, 1
Year Membership), a "Successful Stories" testimony band, a "Recent Blog"
row, a "Book an Appointment" band, an Instagram gallery, and a footer with
About Us / Recent Blog / Services / "Have a Questions?". Pump recreates
that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Muscle" — free gym website template
  (source: https://colorlib.com/wp/template/muscle/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/muscle/`
  (HTTP 200, 56.4KB) + stylesheet `css/style.css` (95.7KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`muscle-free-template.jpg`) confirms the visual design (dark hero, pink +
  orange accents).
- **Section order (1:1):**
  1. Navbar (`ftco_navbar`): logo "Pump" + nav (Home, Program, Coaches,
     Schedule, About, Blog, Contact).
  2. Hero (`home-slider js-fullheight`): slides "Fuel Your Body Fitness",
     "Be One Of Us", "Challenge Yourself", "Get Your Body Fit".
  3. Services (`ftco-section-services`): "What We Do?" + 4 cards (Analyze
     Your Goal, Work Hard On It, Improve Your Performance, Achieve Your
     Perfect Body).
  4. Counter (`ftco-counter ftco-bg-dark img`): stats band.
  5. About (`ftco-about d-md-flex bg-light`): "Welcome To Our Gym" +
     "Shape Your Body".
  6. Coaches (`ftco-section bg-light`): "Our Coaches" + 4 member cards
     (Mark Brook, Sarah Henderson, George Hump, Victor Hump).
  7. Classes (`ftco-section`): "Workout Classes" + 4 cards (Body Building,
     Aerobic Classes, Weight Lifting, Yoga Classes).
  8. Pricing (`ftco-section bg-light`): "Membership Plans" + 3 cards (One
     Day Training, Pay Every Month, 1 Year Membership — "Enjoy All The
     Features").
  9. Testimony (`testimony-section`): "Successful Stories" band.
  10. Blog (`ftco-section bg-light`): "Recent Blog" + post cards ("Young
      Women Doing Abdominal").
  11. Appointment (`ftco-appointment`): "Book an Appointment" band.
  12. Gallery (`ftco-gallery`): Instagram photo tiles.
  13. Footer (`ftco-footer img`): About Us / Recent Blog / Services /
      "Have a Questions?".
- **Design tokens extracted from `css/style.css`:**
  - Brand colors: **#fd0054** (hot pink) + **#fd6b00** (orange) — accents,
    buttons, headings; dark **#212529** text; light **#f8f9fa** / `bg-light`
    section backgrounds.
  - Font: **"Work Sans"** (sans — headings/body) via Google Fonts.
  - Buttons: `btn-primary` pink/orange filled + `btn-custom` outline.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero slider with seeded picsum photos
  - headlines; services with lucide icons; counter band; about split;
    coach cards with initials avatars; class cards; pricing cards; testimony
    band; blog cards with seeded photos; appointment band; gallery grid;
    footer with link columns; all images picsum-seeded
    (`picsum.photos/seed/pump-N/w/h`); Google Fonts via `<link>`.

Pump lives in `apps/pump` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Pump", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Pump page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pump" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero slider with headlines.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Fuel Your Body Fitness", "Get Your Body Fit")

### Requirement: What We Do

The system SHALL render a "What We Do?" section with at least four cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What We Do?"
- **AND** it SHALL render four cards (Analyze Your Goal, Work Hard On It, Improve Your Performance, Achieve Your Perfect Body)

### Requirement: Our Coaches

The system SHALL render an "Our Coaches" section with at least four member
cards.

#### Scenario: Coach cards

- **GIVEN** the page is rendered
- **WHEN** the coaches section is displayed
- **THEN** it SHALL show the heading "Our Coaches"
- **AND** it SHALL render four member cards (Mark Brook, Sarah Henderson, George Hump, Victor Hump)

### Requirement: Workout Classes

The system SHALL render a "Workout Classes" section with at least four
class cards.

#### Scenario: Class cards

- **GIVEN** the page is rendered
- **WHEN** the classes section is displayed
- **THEN** it SHALL show the heading "Workout Classes"
- **AND** it SHALL render four class cards (Body Building, Aerobic Classes, Weight Lifting, Yoga Classes)

### Requirement: Membership Plans

The system SHALL render a "Membership Plans" section with at least three
pricing cards.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Membership Plans"
- **AND** it SHALL render three pricing cards (One Day Training, Pay Every Month, 1 Year Membership)

### Requirement: Testimony band

The system SHALL render a "Successful Stories" testimony band.

#### Scenario: Testimony content

- **GIVEN** the page is rendered
- **WHEN** the testimony band is displayed
- **THEN** it SHALL show the heading "Successful Stories"

### Requirement: Recent Blog

The system SHALL render a "Recent Blog" section with at least three post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL render at least three post cards

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Pump"
- **AND** it SHALL show link columns (About Us, Recent Blog, Services)

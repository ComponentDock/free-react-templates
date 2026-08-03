# Template: Pretty (Beauty Salon Landing)

## Purpose

Pretty is a single-page beauty-salon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pretty" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light beauty page with hot-pink accents and sky-blue
highlights: a hero slider (Beauty Salon / Skin & Beauty Care / Makeup Pro /
Hair Style), an about split, an "Our Beauty Experts" team (Mellisa Smith,
Marie Mush, Ana Jacobson, Ivan Dorchsner), a discount band ("Save up to 25%
Off", Student Discount), an "Our Work" portfolio (Lips Makeover, Hair
Style, Makeup), a four-tier "Beauty Pricing" (Basic, Standard, Premium,
Platinum), a counter band, a "Recent from blog" row, an appointment
section, and a footer with contact and hours. Pretty recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Pretty" — free beauty salon website template
  (source: https://colorlib.com/wp/template/pretty/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/pretty/`
  (HTTP 200, 33.8KB) + stylesheet `css/style.css` (65.3KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`pretty-free-template.jpg`) confirms the visual design (light sections,
  pink accents, sky-blue highlights).
- **Section order (1:1):**
  1. Header: "Pretty" logo + nav (Home, About, Services, Work, Blog,
     Contact).
  2. Hero slider: "Beauty Salon" / "Skin & Beauty Care" / "Makeup Pro" /
     "Hair Style" headlines + CTA.
  3. About (`ftco-section`): "Skin & Beauty Care" + copy.
  4. Team (`ftco-section bg-light`): "Our Beauty Experts" + 4 member cards
     (Mellisa Smith, Marie Mush, Ana Jacobson, Ivan Dorchsner).
  5. Discount band (`ftco-discount img`): "Save up to 25% Off" / "Student
     Discount".
  6. Work (`ftco-section`): "Our Work" + portfolio tiles (Lips Makeover,
     Hair Style, Makeup).
  7. Pricing (`ftco-section bg-light`): "Beauty Pricing" + 4 tiers (Basic,
     Standard, Premium, Platinum).
  8. Counter band (`ftco-counter img`): stat counters.
  9. Blog (`ftco-section`): "Recent from blog" + post cards ("Skin Care for
     Teen Skin").
  10. Appointment (`ftco-appointment`): appointment form.
  11. Footer: About Us + Recent Blog + Address/Phone/Opening Hours/
      Appointments + "Spa Center" + "Have a Questions?" + social links.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#fa5bdd** (hot pink — accents, buttons) + **#78d5ef**
    (sky blue — highlights).
  - Light section backgrounds `#f8f9fa`/white, `bg-light` bands.
  - Font: **"Montserrat"** (headings) + **"Work Sans"** (body) via Google
    Fonts.
  - Buttons: pink filled, rounded, uppercase.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline; about split; team cards with initials avatars; discount band;
  portfolio tiles with seeded photos; pricing tiers; counter stats; blog
  cards with seeded photos; appointment form; footer with contact/hours and
  social links; all images picsum-seeded
  (`picsum.photos/seed/pretty-N/w/h`); Google Fonts via `<link>`.

Pretty lives in `apps/pretty` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Pretty", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Pretty page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pretty" and a "Home" link pointing to the page root
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
- **THEN** it SHALL show a level-1 headline (e.g. "Beauty Salon")
- **AND** it SHALL show a call-to-action button

### Requirement: Beauty experts team

The system SHALL render an "Our Beauty Experts" section with at least four
member cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Beauty Experts"
- **AND** it SHALL render four member cards (Mellisa Smith, Marie Mush, Ana Jacobson, Ivan Dorchsner)

### Requirement: Our Work portfolio

The system SHALL render an "Our Work" section with at least three portfolio
tiles.

#### Scenario: Work content

- **GIVEN** the page is rendered
- **WHEN** the work section is displayed
- **THEN** it SHALL show the heading "Our Work"
- **AND** it SHALL render at least three portfolio tiles (Lips Makeover, Hair Style, Makeup)

### Requirement: Beauty pricing

The system SHALL render a "Beauty Pricing" section with at least four priced
tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Beauty Pricing"
- **AND** it SHALL render four tiers (Basic, Standard, Premium, Platinum)

### Requirement: Footer

The system SHALL render a footer with the site name, contact details,
opening hours, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Pretty" and contact details
- **AND** it SHALL show opening hours and social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Pretty app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pretty — Beauty Salon Template"

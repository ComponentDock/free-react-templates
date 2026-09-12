# Template: Coolcraft (HVAC Company Landing)

## Purpose

Coolcraft is a single-page HVAC company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hvacompany" website template design (see TEMPLATES.md), built
under the new name **Coolcraft** with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hvacompany" — HVAC company landing page template
  (source: https://colorlib.com/wp/template/hvacompany/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/hvacompany/
  (HTTP 200, full rendered DOM + `css/style.css` (69KB) extracted).
  The TEMPLATES.md screenshot (`hvacompany-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens. Note: the preview is a standard HVAC landing page with a hero
  slider, benefit badges, services grid, about section, blog cards,
  testimonials, and a multi-column footer.
- **Section order (1:1):** Navbar (logo + social + options) → Hero slider
  (2 slides, "Keeping your home comfortable all year long" + Contact us CTA)
  → Benefits bar (4 items: No Upfront Payments, Satisfaction Guarantee,
  Emergency Service, 8 Years Experience) → Services grid (6 cards:
  Maintenance & repair, Heating & water, Cleaning & Optimization, Duct
  Services, A/C Installation, Cleaning & Optimization) → About section
  ("Welcome to HVAC Quality Heating & Cooling" + text) → Counter stats
  (3589 Satisfied Customers, 868 Professional, 5148 Equipment Sold, 025
  Branches Operating) → Blog section (3 cards with "Tips & tricks" tags)
  → Testimonial carousel (3 quotes with Lorem ipsum) → Footer (contact
  info, newsletter, links, copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#4586D5`** (hero accent, buttons, CTA backgrounds,
    footer links, about section background).
  - Dark **navy `#142336`** (primary text, footer background, service
    backgrounds, testimonial backgrounds).
  - Accent **yellow `#FAD110`** (service card badges, secondary accent).
  - Light gray `#c4c4c4` (service/testimonial backgrounds), `#e1e1e1`
    (alternating section backgrounds).
  - Dark text `#888888` (body text), `#222222`, `#111111` (headings).
  - Buttons: blue `#4586D5` bg, white text, border-radius 2px; hover
    darkens. Secondary buttons with white bg and blue text.
  - Hero: full-width slider with dark overlay, white text, CTA button.
  - Font: **"Saira Condensed"** for headings, **"Mulish"** for body text.
  - Border radii: 2px (buttons), 60px/50px (circular counters, badges).
  - Sections alternate white / light gray backgrounds for visual rhythm.
- **Recreation decisions:** this entry is recreated as a full-page HVAC
  landing with hero slider, benefit badges, service cards, about/counter
  section, blog grid, testimonials, and footer; placeholder images via
  picsum.photos; lucide-react icons for benefits/services; no assets
  copied.

Coolcraft lives in `apps/coolcraft` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Coolcraft"
and navigation links, plus a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Coolcraft page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Coolcraft"
- **AND** the navbar SHALL show navigation links (Services, About, Blog,
  Contact)
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with a headline, subtext, and a
"Contact us" call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Keeping your home comfortable
  all year long"
- **AND** it SHALL show subtext about air conditioning maintenance
- **AND** it SHALL show a "Contact us" CTA button

#### Scenario: Hero background

- **GIVEN** the page is rendered
- **WHEN** the hero section loads
- **THEN** it SHALL display a full-width background image (placeholder)
- **AND** it SHALL apply a dark overlay for text readability

### Requirement: Benefits bar

The system SHALL render a row of 4 benefit badges below the hero.

#### Scenario: Benefit badges content

- **GIVEN** the page is rendered
- **WHEN** the benefits bar is displayed
- **THEN** it SHALL show 4 benefit items: "No Upfront Payments",
  "Satisfaction Guarantee", "Emergency Service", "8 Years Experience"
- **AND** each benefit item SHALL have an icon and a label

#### Scenario: Benefit badges layout

- **GIVEN** the page is rendered
- **WHEN** the benefits bar is displayed on desktop
- **THEN** the 4 items SHALL be arranged in a single row (4 columns)

### Requirement: Services section

The system SHALL render a services grid with 6 service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show a heading "What We Can Offer You"
- **AND** it SHALL display 6 service cards with titles: "Maintenance &
  Repair", "Heating & Water", "Cleaning & Optimization", "Duct Services",
  "A/C Installation", "Cleaning & Optimization"
- **AND** each card SHALL have a description and a "More info" link

#### Scenario: Services layout

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed on desktop
- **THEN** the cards SHALL be arranged in a 3-column grid (2 rows)

### Requirement: About section

The system SHALL render an about section with a heading and descriptive
text.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading "Welcome to HVAC Quality Heating &
  Cooling"
- **AND** it SHALL display descriptive text about the company

#### Scenario: About background

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL have a blue (`#4586D5`) background

### Requirement: Counter stats section

The system SHALL render a counter stats row with 4 statistic items.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show 4 statistics: "3589 Satisfied Customers",
  "868 Professional", "5148 Equipment Sold", "025 Branches Operating"
- **AND** each statistic SHALL display a large number and a label

#### Scenario: Counter layout

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed on desktop
- **THEN** the 4 items SHALL be arranged in a single row (4 columns)
- **AND** each item SHALL have a circular/rounded badge styling

### Requirement: Blog section

The system SHALL render a blog section with 3 blog post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a heading "Tips & Tricks"
- **AND** it SHALL display 3 blog post cards each with a tag, title,
  author, and date

#### Scenario: Blog layout

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed on desktop
- **THEN** the cards SHALL be arranged in a 3-column grid

### Requirement: Testimonial section

The system SHALL render a testimonial section with client quotes.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a heading "What Clients Say?"
- **AND** it SHALL display testimonial quotes with placeholder text

#### Scenario: Testimonial layout

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** the testimonials SHALL be presented in a carousel/slider format

### Requirement: Footer

The system SHALL render a multi-column footer with contact info, links,
and copyright.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a contact section ("Contact with us")
- **AND** it SHALL show a newsletter signup area
- **AND** it SHALL show a copyright line
- **AND** the footer SHALL link to "https://www.componentdock.com/" branded
  as "Component Dock"

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed on desktop
- **THEN** it SHALL be arranged in 3-4 columns (contact, newsletter,
  links, copyright)

## Verification checklist

- [ ] Navbar renders with "Coolcraft" brand name and dark-mode toggle
- [ ] Hero section displays headline, subtext, and CTA button
- [ ] Benefits bar shows 4 benefit badges in a row
- [ ] Services grid shows 6 service cards in 2 rows of 3
- [ ] About section displays heading and blue background
- [ ] Counter stats show 4 circular badge statistics
- [ ] Blog section shows 3 post cards
- [ ] Testimonial section shows quotes
- [ ] Footer links to componentdock.com
- [ ] Dark mode toggle works across all sections
- [ ] Responsive layout: single column on mobile
- [ ] No ColorLib references in app code
- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh coolcraft` passes (typecheck + lint + 100%
      coverage tests + build)

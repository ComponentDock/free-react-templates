# Template: Serenity (Spa & Beauty)

## Purpose

Serenity is a single-page spa & beauty center website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Energen" design (see TEMPLATES.md — Beauty & Spa category),
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a gold-accented spa page: a full-height hero ("Spa & Beauty
Center"), an intro band ("Benefits of Doing Spa & Massage" with Book Your
Treatment / Great Gift Packages / Special Offer & Deal cards), a services
row (Aromatherapy, Skin Care, Herbal Spa, Body Massage), a Treatments grid
(Salt & Aroma, Hydro, Hot Stone, Aroma), a Spa/Massage Therapies section
(Relaxation, Athlete, Thai, Rose), pricing tables (Year/Monthly/Weekly Cards
— "Enjoy All The Features"), a "Successful Stories" testimony band, a
counter band, a "Recent Posts" blog row, a "See the latest photos" gallery,
and a footer with Popular Links / Quick Links / "Have a Questions?". Serenity
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Energen" — free spa & beauty website template
  (source: https://colorlib.com/wp/template/energen/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/energen/`
  (HTTP 200, 55.6KB) + stylesheet `css/style.css` (74.3KB, re-fetched and
  re-verified 2026-08-09). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`energen-free-template.jpg`) confirms the visual
  design (light sections, gold accents).
- **Section order (1:1):**
  1. Navbar (`ftco_navbar`): logo + nav (Home, About, Treatments,
     Specialists, Pricing, Blog, Contact).
  2. Hero (`hero-wrap js-fullheight`): "Spa & Beauty Center" headline.
  3. Intro (`ftco-section ftco-intro`): "Benefits of Doing Spa & Massage" +
     3 cards (Book Your Treatment, Great Gift Packages, Special Offer &
     Deal).
  4. Services (`ftco-section-services bg-light`): "Services" + 4 icon cards
     (Aromatherapy, Skin Care, Herbal Spa, Body Massage).
  5. Treatments (`ftco-section`): "Treatments" + grid (Salt & Aroma, Hydro,
     Hot Stone, Aroma).
  6. Therapies (`ftco-section bg-light`): "Spa Therapies" / "Massage
     Therapies" + 4 cards (Relaxation, Athlete, Thai, Rose).
  7. Pricing (`ftco-section`): "Pricing Treatments" + 3 cards (Year Card,
     Monthly Card, Weekly Card — "Enjoy All The Features").
  8. Testimony (`testimony-section`): "Successful Stories" band.
  9. Counter (`ftco-counter img`): stats band.
  10. Blog (`ftco-section bg-light`): "Recent Posts" + post cards ("Is
      wellness the new luxury").
  11. Gallery (`ftco-gallery`): "See the latest photos" + photo tiles.
  12. Footer (`ftco-footer`): brand + Popular Links / Quick Links / "Have a
      Questions?".
- **Design tokens extracted from `css/style.css` (re-verified 2026-08-09):**
  - Brand color: **#d9bf77** (gold — accents, buttons, headings; 47 uses)
    - dark **#212529** text; light **#f8f9fa** / `bg-light` section
      backgrounds; muted body text **#a6a6a6**.
  - Fonts: body **"Open Sans"** (18px, weight 300, line-height 1.8) via
    Google Fonts; hero h1 **"Prata"** serif (40px, uppercase, letter-spacing
    15px); Ionicons icon font (replace with lucide-react).
  - Hero: full-height (js-fullheight), h1 uppercase with wide letter
    spacing, dark on light background.
  - Buttons: gold filled, uppercase.
  - Sections: white alternating with `bg-light` bands.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum background photo
  with headline; intro cards; services with lucide icons; treatments grid;
  therapies cards; pricing cards; testimony band; counter band; blog cards
  with seeded photos; gallery grid; footer with link columns; all images
  picsum-seeded (`picsum.photos/seed/serenity-N/w/h`); Google Fonts via
  `<link>`.

Serenity lives in `apps/serenity` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Serenity",
a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Serenity page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Serenity" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Spa & Beauty Center")

### Requirement: Intro cards

The system SHALL render an intro section with a heading and three cards.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show the heading "Benefits of Doing Spa & Massage"
- **AND** it SHALL render three cards (Book Your Treatment, Great Gift Packages, Special Offer & Deal)

### Requirement: Services

The system SHALL render a "Services" section with at least four icon cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Services"
- **AND** it SHALL render four icon cards (Aromatherapy, Skin Care, Herbal Spa, Body Massage)

### Requirement: Treatments

The system SHALL render a "Treatments" section with at least four tiles.

#### Scenario: Treatments grid

- **GIVEN** the page is rendered
- **WHEN** the treatments section is displayed
- **THEN** it SHALL show the heading "Treatments"
- **AND** it SHALL render four treatment tiles (Salt & Aroma, Hydro, Hot Stone, Aroma)

### Requirement: Therapies

The system SHALL render a therapies section with at least four cards.

#### Scenario: Therapy cards

- **GIVEN** the page is rendered
- **WHEN** the therapies section is displayed
- **THEN** it SHALL show the headings "Spa Therapies" and "Massage Therapies"
- **AND** it SHALL render four therapy cards (Relaxation, Athlete, Thai, Rose)

### Requirement: Pricing tables

The system SHALL render a "Pricing Treatments" section with at least three
pricing cards.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Pricing Treatments"
- **AND** it SHALL render three pricing cards (Year Card, Monthly Card, Weekly Card)

### Requirement: Testimony band

The system SHALL render a "Successful Stories" testimony band.

#### Scenario: Testimony content

- **GIVEN** the page is rendered
- **WHEN** the testimony band is displayed
- **THEN** it SHALL show the heading "Successful Stories"

### Requirement: Blog posts

The system SHALL render a "Recent Posts" section with at least three post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Posts"
- **AND** it SHALL render at least three post cards

### Requirement: Gallery

The system SHALL render a gallery section with the heading "See the latest
photos" and at least six photo tiles.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "See the latest photos"
- **AND** it SHALL render at least six photo tiles

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Serenity"
- **AND** it SHALL show link columns (Popular Links, Quick Links)

### Requirement: Full page composition

The system SHALL compose all sections inside the main landmark in the
original's order.

#### Scenario: Full page render

- **GIVEN** the Serenity app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, intro, services, treatments,
  therapies, pricing, testimony, counter, blog, gallery, and footer inside
  the main landmark in the original's order
- **AND** the document title SHALL be "Serenity — Spa & Beauty"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- serenity` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → intro →
      services → treatments → therapies → pricing → testimony → counter →
      blog → gallery → footer).
- [ ] Design tokens applied: brand gold #d9bf77 (buttons, accents,
      headings), dark text #212529, muted body #a6a6a6, light #f8f9fa
      `bg-light` bands, Open Sans body + Prata serif hero h1 (uppercase,
      wide letter-spacing).
- [ ] Hero is full-height with a seeded picsum background photo and the
      "Spa & Beauty Center" h1.
- [ ] Intro/Services/Therapies/Pricing/Blog sections render their full card
      sets (3 intro cards, 4 services, 4 treatments, 4 therapies, 3 pricing,
      3 blog posts, 6+ gallery tiles).
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Energen), preview URL, tokens,
      and renames.

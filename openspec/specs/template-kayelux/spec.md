# Template: Kayelux (Beauty & Spa Wellness Landing)

## Purpose

Kayelux is a single-page beauty & spa wellness template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Kayelux" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a terracotta-accented spa page: a hero ("Beauty & Spa
Wellness"), a "Beauty Anywhere Anytime" intro, a services grid (Beauty
Massage, Facial Therapy, Skin Care, Parlor & Beauty, Eye Shadow,
Relaxation Room, MakeUp, Aroma Therapy), a featured-services band (Massage,
Tea Therapy, Hand & Foot Spa, Body Treatments, Facials, Waxing), a stats
band, an expert team (Kaye Bruce, Lanie William, Catherine Smith, Sonya
Lopez), a pricing section ("Get Our Package Pricing"), an appointment band
("Make An Appointment"), a testimony band ("What Customers Saying"), a blog
row ("Recent From Blog": Tips for Perfect Makeup), and a footer with
Services / Recent Posts / "Have a Questions?". Kayelux recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Kayelux" — free beauty & spa website template
  (source: https://colorlib.com/wp/template/kayelux/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/kayelux/`
  (HTTP 200, 50.1KB) + stylesheet `css/style.css` (76.5KB, Bootstrap 5
  base + custom theme). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`kayelux-colorlib-template.jpg`) confirms the
  visual design (light sections, terracotta accents).
- **Section order (1:1):**
  1. Navbar (`ftco_navbar`): logo + nav (Home, About, Gallery, Services,
     Pricing, Blog, Contact).
  2. Hero (`hero-wrap`): "Beauty & Spa Wellness" + "Make An Appointment"
     button.
  3. Intro (`ftco-section`): "Beauty Anywhere Anytime".
  4. Services (`ftco-section ftco-no-pt`): "Our Beauty & Spa Services" + 8
     icon cards (Beauty Massage, Facial Therapy, Skin Care, Parlor &
     Beauty, Eye Shadow, Relaxation Room, MakeUp, Aroma Therapy).
  5. Featured (`ftco-section img`): "Discover the Best Beauty Salon
     Center" + 6 featured services (Massage, Tea Therapy, Hand & Foot Spa,
     Body Treatments, Facials, Waxing).
  6. Counter (`ftco-section-counter img`): stats band (60, 9200, 5800,
     100).
  7. Team (`ftco-section bg-white`): "Our Expert Makeup & Beautician
     Artist" + 4 member cards (Kaye Bruce, Lanie William, Catherine Smith,
     Sonya Lopez).
  8. Gallery (`ftco-gallery`): photo tiles ("Beauty & Massage").
  9. Pricing (`ftco-section bg-white`): "Get Our Package Pricing" + "Get
     Started" cards.
  10. Appointment (`ftco-appointment img`): "Make An Appointment" band.
  11. Testimony (`testimony-section bg-light`): "What Customers Saying".
  12. Blog (`ftco-section`): "Recent From Blog" + post cards ("Tips for
      Perfect Makeup").
  13. Footer (`ftco-footer img`): brand + Services / Recent Posts / "Have
      a Questions?".
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#e95b3a** (terracotta — accents, buttons, headings) +
    dark **#212529** / **#111111** text; light **#f8ebe6** / `bg-light`
    section backgrounds.
  - Font: **"Prata"** (serif — headings) + **"Poppins"** (sans — body) via
    Google Fonts.
  - Buttons: `btn-primary` terracotta filled + `btn-white` / `btn-custom`
    variants.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo + headline
  - CTA; services with lucide icons; featured band; stats band; team cards
    with initials avatars; gallery grid; pricing cards; appointment band;
    testimony band; blog cards with seeded photos; footer with link columns;
    all images picsum-seeded (`picsum.photos/seed/kayelux-N/w/h`); Google
    Fonts via `<link>`.

Kayelux lives in `apps/kayelux` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Kayelux", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Kayelux page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Kayelux" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with a headline and a
call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Beauty & Spa Wellness")
- **AND** it SHALL show a "Make An Appointment" button

### Requirement: Services

The system SHALL render an "Our Beauty & Spa Services" section with at least
eight icon cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Beauty & Spa Services"
- **AND** it SHALL render eight icon cards (Beauty Massage, Facial Therapy, Skin Care, Parlor & Beauty, Eye Shadow, Relaxation Room, MakeUp, Aroma Therapy)

### Requirement: Featured services

The system SHALL render a featured services band with at least six items.

#### Scenario: Featured band

- **GIVEN** the page is rendered
- **WHEN** the featured services band is displayed
- **THEN** it SHALL show the heading "Discover the Best Beauty Salon Center"
- **AND** it SHALL render six featured services (Massage, Tea Therapy, Hand & Foot Spa, Body Treatments, Facials, Waxing)

### Requirement: Expert team

The system SHALL render an "Our Expert Makeup & Beautician Artist" section
with at least four member cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Expert Makeup & Beautician Artist"
- **AND** it SHALL render at least four member cards (Kaye Bruce, Lanie William, Catherine Smith, Sonya Lopez)

### Requirement: Pricing

The system SHALL render a "Get Our Package Pricing" section with pricing
cards.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Get Our Package Pricing"
- **AND** it SHALL render pricing cards with "Get Started" buttons

### Requirement: Appointment band

The system SHALL render a "Make An Appointment" band.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment band is displayed
- **THEN** it SHALL show the heading "Make An Appointment"

### Requirement: Testimony band

The system SHALL render a "What Customers Saying" testimony band.

#### Scenario: Testimony content

- **GIVEN** the page is rendered
- **WHEN** the testimony band is displayed
- **THEN** it SHALL show the heading "What Customers Saying"

### Requirement: Blog posts

The system SHALL render a "Recent From Blog" section with at least three post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent From Blog"
- **AND** it SHALL render at least three post cards

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Kayelux"
- **AND** it SHALL show link columns (Services, Recent Posts)

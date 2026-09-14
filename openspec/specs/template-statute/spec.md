# Template: Statute (Law Firm Landing Page)

## Purpose

Statute is a law-firm landing-page template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "PrimeLaw" free template
(source: https://colorlib.com/wp/template/primelaw/,
preview: https://preview.colorlib.com/theme/primelaw/),
built under a DIFFERENT name (**Statute**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 multi-section law-firm landing page with
a dark navbar, hero slider with background images and dark overlay,
a "Request A Quote" form alongside 4 service cards, about sections with
image-text splits, a parallax counter stats row, testimonial carousel,
a steps/CTA section with golden brand accent, a blog grid, and a dark
footer with 4 columns and copyright bar. The design uses a
**golden/amber** brand palette (`#b99566` primary, `#a27c4a` darker),
**Work Sans** font family, and dark backgrounds (`#16181b`).

## Design tokens

| Token            | Value                     | Notes                                   |
| ---------------- | ------------------------- | --------------------------------------- |
| Brand primary    | `#b99566`                 | Golden/amber; buttons, accents, icons   |
| Brand dark       | `#a27c4a`                 | Darker gold for hover states            |
| Brand light      | `#f1eae0`                 | Warm cream for service icon backgrounds |
| Brand warm bg    | `#e9decf`                 | Warm beige section tint                 |
| Text primary     | `#212529`                 | Headings, body text                     |
| Text secondary   | `#666666`                 | Paragraphs                              |
| Text muted       | `#999999`                 | Footer links, copyright                 |
| White            | `#ffffff`                 | Card backgrounds, button text           |
| Light section bg | `#f7f7f7`                 | Alternate section backgrounds           |
| Dark bg          | `#16181b`                 | Navbar and footer background            |
| Darker bg        | `#1a1a1a`                 | Footer widget background                |
| Hero overlay     | `rgba(0,0,0,0.5)`         | Semi-transparent black over hero images |
| Font — headings  | `"Work Sans", sans-serif` | h1, h2 in hero/sections                 |
| Font — body      | `"Work Sans", sans-serif` | Paragraphs, buttons, nav (same family)  |
| Button radius    | `0.25rem`                 | Bootstrap default rounded               |
| Button padding   | `0.5rem 1rem`             | Standard Bootstrap padding              |

## Requirements

### Requirement: Navbar

The system SHALL render a responsive dark navbar with logo text and
navigation links.

#### Scenario: Desktop navbar

- **GIVEN** the Statute app is rendered on a desktop viewport (≥992px)
- **THEN** a `<nav>` SHALL render with the logo text "Statute" on the left
- **AND** navigation links (Home, About, Practice Areas, Attorneys, Pricing,
  Case Studies, Contact) SHALL appear in a horizontal row aligned right
- **AND** the navbar SHALL have a dark background (`#16181b`) with white text

#### Scenario: Mobile navbar

- **GIVEN** the viewport is ≤991px
- **THEN** the navbar SHALL collapse to a hamburger toggle button
- **AND** clicking the toggle SHALL expand/collapse the navigation links
  vertically

### Requirement: Hero section

The system SHALL render a hero section with a background image, dark overlay,
centered headline, subtext, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **THEN** the background SHALL be a full-cover background image
  (use `picsum.photos/seed/statute-hero/1920/1080`)
- **AND** a dark overlay SHALL sit at 0.5 opacity
- **AND** a centered headline "Attorneys Fighting For Your Freedom" SHALL
  render in white text
- **AND** a subtext paragraph SHALL render below the headline
- **AND** a "Make an Appointment" CTA button SHALL render with golden
  background (`#b99566`)

#### Scenario: Hero vertical centering

- **GIVEN** the hero section is rendered
- **THEN** the content SHALL be vertically and horizontally centered
  within the hero area

### Requirement: Services & Quote section

The system SHALL render a 2-column section with a "Request A Quote" form
on the left and 4 service cards on the right.

#### Scenario: Quote form

- **GIVEN** the services section is rendered
- **THEN** a "Request A Quote" form SHALL render with two email inputs
  and a message textarea, plus a "Send Message" submit button
- **AND** the form SHALL have a light background

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **THEN** four service cards SHALL render in a 2×2 grid
- **AND** each card SHALL have a circular icon area with golden accent
  background (`#f1eae0`), a title, and a short description
- **AND** the services SHALL be: Family Law, Business Law, Insurance Law,
  Criminal Law (or similar law practice areas)

### Requirement: About section (image left, text right)

The system SHALL render a 2-column about section with an image on the left
and text content on the right.

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **THEN** the left column SHALL show an image
  (`picsum.photos/seed/statute-about/800/600`)
- **AND** the right column SHALL have a heading "Dedicated to Give You
  the Best Legal Service", a descriptive paragraph, and a CTA link

### Requirement: Counter stats

The system SHALL render a 4-column stats row with parallax background
and animated counters.

#### Scenario: Counter display

- **GIVEN** the counter section is rendered
- **THEN** four stat items SHALL render in a responsive 4-column grid
- **AND** each item SHALL have a counter number and a label
- **AND** the counter numbers SHALL be: 1200+ (Cases Won), 450+ (Happy
  Clients), 25+ (Years Experience), 35+ (Awards Won)

#### Scenario: Counter styling

- **GIVEN** the counter section is rendered
- **THEN** the background SHALL be a parallax image
  (`picsum.photos/seed/statute-counter/1920/800`)
- **AND** the text SHALL be white

### Requirement: About section 2 (text left, image right)

The system SHALL render a second about section with text on the left
and an image on the right (reversed layout).

#### Scenario: About 2 layout

- **GIVEN** the second about section is rendered
- **THEN** the left column SHALL have a heading, descriptive paragraph,
  and a CTA link
- **AND** the right column SHALL show an image
  (`picsum.photos/seed/statute-about2/800/600`)

### Requirement: Testimonial section

The system SHALL render a testimonial section with a centered heading
and testimonial cards.

#### Scenario: Testimonial display

- **GIVEN** the testimonial section is rendered
- **THEN** a centered heading "Testimony" SHALL render
- **AND** at least two testimonial cards SHALL render with a quote,
  author name, and role

### Requirement: Steps/CTA section

The system SHALL render a golden/amber CTA section with 3 numbered steps.

#### Scenario: Steps layout

- **GIVEN** the steps section is rendered
- **THEN** the background SHALL be the brand golden color (`#b99566`)
- **AND** three step items SHALL render: "Consultation", "Choose Service",
  "Get Results" (or similar)
- **AND** each step SHALL have a number icon and a label

### Requirement: Blog section

The system SHALL render a blog section with a centered heading
and 3 blog post cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **THEN** three blog cards SHALL render in a responsive grid
- **AND** each card SHALL have a thumbnail image, a date/author meta
  line, a linked title, and a short excerpt

### Requirement: Footer

The system SHALL render a dark footer with 4 columns: Brand info,
Useful Links, Quick Links, and Contact info, followed by a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** the background SHALL be `#16181b` with white text
- **AND** four columns SHALL render: Brand (logo text + description +
  social icons), Useful Links (Family Law, Drug Law, Insurance Law,
  Criminal Law, Business Law), Quick Links (About Us, Practice Areas,
  Appointment, Terms & Conditions, FAQ), and Contact (address, phone,
  email)

#### Scenario: Copyright bar

- **GIVEN** the copyright bar is rendered
- **THEN** it SHALL have a dark background with a subtle top border
- **AND** the copyright text SHALL contain a link to Component Dock
  (`https://www.componentdock.com/`)

### Requirement: Component Dock branding

The system SHALL NOT reference ColorLib in any user-facing content. The
footer SHALL link to `https://www.componentdock.com/` branded as
"Component Dock".

#### Scenario: No ColorLib references

- **GIVEN** the Statute app is rendered
- **THEN** no element SHALL contain the text "ColorLib" or
  "colorlib.com"

#### Scenario: Component Dock footer link

- **GIVEN** the copyright bar is rendered
- **THEN** a link to `https://www.componentdock.com/` SHALL be visible
  with text mentioning "Component Dock"

### Requirement: Responsive design

The system SHALL be fully responsive across desktop, tablet, and mobile
viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport is ≤575px
- **THEN** all multi-column grids SHALL stack to single column
- **AND** the navbar SHALL collapse to a hamburger menu
- **AND** no horizontal overflow SHALL occur

#### Scenario: Tablet layout

- **GIVEN** the viewport is between 576px and 991px
- **THEN** multi-column grids SHALL use 2-column layout where applicable
- **AND** the navbar SHALL show the hamburger toggle

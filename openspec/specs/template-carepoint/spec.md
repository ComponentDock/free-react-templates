# Template: Carepoint (Medical)

## Purpose

A medical/healthcare center website template. Recreation of ColorLib "Caremed".

- **Source slug:** `caremed`
- **ColorLib URL:** https://colorlib.com/wp/template/caremed/
- **Preview URL:** https://preview.colorlib.com/theme/caremed/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caremed-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `carepoint` (apps/carepoint, @free-react-templates/carepoint)

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/caremed/ (HTTP 200, 22,131 B, fetched 2026-10-23) and its theme stylesheet `theme/caremed/styles/main_styles.css` (20,801 B, sha256 `6c4a4fe4cb32…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#20d34a` | 19 declarations — `a:hover`, `.button::after` |
| Other chromatic values | `#283290` | `#283290` × 7 (.button) |
| Surface | `#ffffff` | 27 declarations — `body`, `.button a` |
| Ink / dark surface | `#272727` | 5 declarations — `.hamburger i`, `.menu_item a` |
| Typeface | `'Roboto', sans-serif` (4 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `font-size: 15px; font-weight: 500; color: #696969` | `body{…}` rule |

Palette in order of use: `#ffffff` ×27, `#20d34a` ×19, `#283290` ×7, `#272727` ×5, `#696969` ×4, `#b2b2b2` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.

## Requirements

### Requirement: Top Bar

The page SHALL display a top information bar with FAQ link, appointment request link, and emergency phone number.

#### Scenario: Top bar renders contact info

- **GIVEN** a visitor loads the page
- **WHEN** they view the top bar
- **THEN** they see a FAQ link, "Request an Appointment" link, and emergency phone number "+563 47558 623"

### Requirement: Header Navigation

The page SHALL display a sticky header with the CarePoint logo, subtitle, and navigation links.

#### Scenario: Header renders navigation

- **GIVEN** a visitor loads the page
- **WHEN** they view the header
- **THEN** they see the CarePoint logo with "Health Care Center" subtitle and navigation links (Home, About us, Services, News, Contact)

#### Scenario: Mobile menu toggle

- **GIVEN** a visitor on mobile
- **WHEN** they tap the menu button
- **THEN** the mobile navigation menu opens and closes on link click

### Requirement: Hero Section

The page SHALL display a full-width hero section with the heading "Medicine made with care" and an appointment button.

#### Scenario: Hero renders heading

- **GIVEN** a visitor loads the page
- **WHEN** they view the hero section
- **THEN** they see "Medicine made with care" as the main heading

### Requirement: Info Boxes

The page SHALL display three information boxes for Working Hours, Appointments, and Emergency Cases on a green background.

#### Scenario: Info boxes render content

- **GIVEN** a visitor scrolls past the hero
- **WHEN** they view the info boxes
- **THEN** they see three cards with Working Hours, Appointments, and Emergency Cases content

### Requirement: About Section

The page SHALL display an about section with a heading, descriptive text, a "Read More" button, and an image.

#### Scenario: About section renders

- **GIVEN** a visitor views the about section
- **WHEN** they read the content
- **THEN** they see "A great medical team to help your needs" heading and descriptive text

### Requirement: Departments Section

The page SHALL display a departments section with a parallax background, department cards with doctor names, and a read more card.

#### Scenario: Departments render

- **GIVEN** a visitor views the departments section
- **WHEN** they browse the grid
- **THEN** they see three department cards (Plastic Surgery, Gastroenterology, Dentistry) with doctor names and a read more card

### Requirement: Services Section

The page SHALL display a services section with six service cards in a grid layout.

#### Scenario: Services render

- **GIVEN** a visitor views the services section
- **WHEN** they browse the service cards
- **THEN** they see six services (Free Checkups, Screening Exams, RMI Services, Dentistry, Neonatology, Biochemistry) with icons and descriptions

### Requirement: CTA Section

The page SHALL display a call-to-action section with a parallax background, heading, description, and request button.

#### Scenario: CTA renders

- **GIVEN** a visitor reaches the CTA section
- **WHEN** they see the call to action
- **THEN** they see "Need a personal health plan?" heading and a "Request a Plan" button

### Requirement: Footer

The page SHALL display a footer with contact information, useful links, recent news, and a Component Dock attribution link.

#### Scenario: Footer renders

- **GIVEN** a visitor reaches the footer
- **WHEN** they view the footer
- **THEN** they see contact info, useful links, recent news, and a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Responsive Layout

The page SHALL adapt to mobile viewports with appropriate responsive behavior.

#### Scenario: Mobile layout

- **GIVEN** a visitor on a mobile device
- **WHEN** they view the page
- **THEN** the layout adapts to mobile viewport width

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/carepoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/carepoint/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Top Bar — they see a FAQ link, "Request an Appointment" link, and emergency phone number "+563 47558 623"
- [x] Header Navigation — they see the CarePoint logo with "Health Care Center" subtitle and navigation links (Home, About us, Services, News, Contact)
- [x] Hero Section — they see "Medicine made with care" as the main heading
- [ ] Info Boxes — they see three cards with Working Hours, Appointments, and Emergency Cases content
- [ ] About Section — they see "A great medical team to help your needs" heading and descriptive text
- [ ] Departments Section — they see three department cards (Plastic Surgery, Gastroenterology, Dentistry) with doctor names and a read more card
- [ ] Services Section — they see six services (Free Checkups, Screening Exams, RMI Services, Dentistry, Neonatology, Biochemistry) with icons and descriptions
- [x] CTA Section — they see "Need a personal health plan?" heading and a "Request a Plan" button
- [ ] Responsive Layout — the layout adapts to mobile viewport width

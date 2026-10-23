# Oathmark — Implementation Tasks

Source design: **Notary** (`https://colorlib.com/wp/template/notary/`) → recreation name **oathmark**. Shipped at https://oathmark.free.componentdock.com.

Scope: A Legal / Notary Services template with hero, practice areas, about and legal solutions sections.

## Component breakdown

Render order as composed in `apps/oathmark/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky white navbar with the brand name "Oathmark", navigation links (Home, Practice Areas, Testimonials, About, Contact), a Practice Areas dropdown with 6 legal practice areas, and a hamburger toggle for mobile.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the brand name "Oathmark" linking to #home
  - **AND** it SHALL show links to Home, Practice Areas, Testimonials, About, Contact
- Scenario — Practice Areas dropdown:
  - **GIVEN** the page is rendered on desktop
  - **WHEN** the user clicks the Practice Areas button
  - **THEN** a dropdown SHALL appear with 6 practice areas: Bankruptcy Law, Business Law, Civil Rights Law, Criminal Law, Immigration Law, Family Law
  - **AND** the dropdown SHALL have aria-expanded="true"
- Scenario — Mobile menu:
  - **GIVEN** the page is rendered
  - **WHEN** the user clicks the hamburger toggle
  - **THEN** the mobile menu SHALL become visible
  - **AND** clicking a mobile nav link SHALL close the menu

### 2. Hero
- The system SHALL render a full-width hero with a dark image overlay, a split layout with headline and subtitle on the left, and an appointment booking form on the right.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show the headline "Notary Public & Legal Solutions"
  - **AND** it SHALL display a form with Name, Email, and Date inputs
  - **AND** it SHALL have a "Book Appointment" submit button
- Scenario — Form submission:
  - **GIVEN** the hero form is visible
  - **WHEN** the user fills in all fields and clicks "Book Appointment"
  - **THEN** a confirmation message SHALL appear
  - **AND** the form SHALL be replaced by the confirmation

### 3. PracticeAreas
- The system SHALL render a light-background section with 6 practice area cards in a 3-column grid, each with an icon, title, and description.
- Scenario — Practice areas grid:
  - **GIVEN** the user scrolls to the Practice Areas section
  - **WHEN** the section is visible
  - **THEN** 6 practice area cards SHALL be displayed
  - **AND** each card SHALL have an icon, title, and description

### 4. About
- The system SHALL render a two-column about section with attorney images on the left and a headline, description, and CTA button on the right.
- Scenario — About content:
  - **GIVEN** the user scrolls to the about section
  - **WHEN** the section is visible
  - **THEN** it SHALL show 2 attorney images
  - **AND** it SHALL show a headline about legal solutions
  - **AND** it SHALL have a "Book an appointment" button

### 5. Testimonials
- The system SHALL render a light-background section with 3 testimonial cards showing avatar, name, role, and blockquote.
- Scenario — Testimonials grid:
  - **GIVEN** the user scrolls to the testimonials section
  - **WHEN** the section is visible
  - **THEN** 3 testimonial cards SHALL be displayed
  - **AND** each card SHALL show an avatar, author name, role, and quote

### 6. LegalSolutions
- The system SHALL render a three-column section with an image, text with checklist, and an accordion FAQ.
- Scenario — Legal solutions content:
  - **GIVEN** the user scrolls to the legal solutions section
  - **WHEN** the section is visible
  - **THEN** it SHALL show the heading "We Have Legal Solutions"
  - **AND** it SHALL show a 3-item checklist
- Scenario — Accordion FAQ:
  - **GIVEN** the accordion FAQ is visible
  - **WHEN** the user clicks a FAQ item
  - **THEN** that item SHALL expand and show its answer
  - **AND** clicking the same item again SHALL collapse it
  - **AND** clicking a different item SHALL expand it and collapse the previous one

### 7. Footer
- The system SHALL render a dark-background footer with About Us text, social icons, 4 link columns, and a copyright line linking to Component Dock.
- Scenario — Footer content:
  - **GIVEN** the user scrolls to the footer
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show "About Us" with social icons
  - **AND** it SHALL show 4 link columns: Quick Links, Resources, Support, Company
  - **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/oathmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/oathmark/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/oathmark` ships on https://oathmark.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/oathmark/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/oathmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/oathmark/public/CNAME` = `oathmark.free.componentdock.com`
  and the package `homepage` = `https://oathmark.free.componentdock.com`.

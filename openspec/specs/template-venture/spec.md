# Template: Venture (Business)

Recreation of ColorLib "StartupBusiness" (https://colorlib.com/wp/template/startupbusiness/).

## Purpose

Recreate the ColorLib Startupbusiness template as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Venture". The template provides a business startup landing page with sections for services, skills, portfolio, testimonials, features, blog, and contact.

## Design reference (replication findings)

- **Source:** ColorLib "StartupBusiness" — https://colorlib.com/wp/template/startupbusiness/
- **Source slug:** `startupbusiness`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/startupbusiness/ — **HTTP 200**, 26,153 B, fetched 2026-10-23 (page `<title>`: "Business consulting for your next stage | Startup"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/startupbusiness/vendor/photoswipe/5.4.4/photoswipe.css?v=3.0.0`, fetched 2026-10-23): dominant neutrals `#4f4f4f`. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/startupbusiness-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/venture` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: All sections render correctly

The template SHALL render all major sections in the correct order.

#### Scenario: Section presence

- **WHEN** the app loads
- **THEN** all sections are visible: Navbar, Hero, WantToWork, Services, Skills, ProjectGallery, Testimonials, Features, Blog, ContactCTA, Footer

### Requirement: Navbar functionality

The navbar SHALL display navigation links and a mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the page loads on desktop
- **THEN** all navigation links (Home, About, Services, Works, Blog, Contact) are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile navigation menu opens

### Requirement: Services section displays cards

The services section SHALL display service cards with icons and descriptions.

#### Scenario: Service cards render

- **WHEN** the services section is visible
- **THEN** three service cards are displayed (Strategic Planning, Trades & Stocks, Audit & Assurance)

### Requirement: Skills section shows progress bars

The skills section SHALL display skill progress bars with percentages.

#### Scenario: Progress bars render

- **WHEN** the skills section is visible
- **THEN** three progress bars are displayed with correct percentages (75%, 89%, 95%)

### Requirement: Footer includes Component Dock link

The footer SHALL include a link to Component Dock.

#### Scenario: Footer link present

- **WHEN** the footer is visible
- **THEN** a link to "Component Dock" with href "https://www.componentdock.com/" is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/venture/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/venture/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] All sections render correctly — all sections are visible: Navbar, Hero, WantToWork, Services, Skills, ProjectGallery, Testimonials, Features, Blog, ContactCTA, Footer
- [ ] Navbar functionality — all navigation links (Home, About, Services, Works, Blog, Contact) are visible
- [ ] Services section displays cards — three service cards are displayed (Strategic Planning, Trades & Stocks, Audit & Assurance)
- [ ] Skills section shows progress bars — three progress bars are displayed with correct percentages (75%, 89%, 95%)

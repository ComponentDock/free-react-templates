# template-foliox

Recreation of ColorLib "FPlus" (https://colorlib.com/wp/template/fplus/).

## Purpose

Foliox is a portfolio and agency website template, recreating the ColorLib F-plus design under a new original name. It provides a complete agency/portfolio site with hero, about, projects gallery, methods, clients, news, and contact sections.

## Design reference (replication findings)

- **Source:** ColorLib "FPlus" — https://colorlib.com/wp/template/fplus/
- **Source slug:** `fplus`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/fplus/ — **HTTP 200**, 33,730 B, fetched 2026-10-23 (page `<title>`: "F-plus Portfolio Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/fplus/style.css`, fetched 2026-10-23): brand `#ff6c00`; dominant neutrals `#ebebeb`, `#959595`, `#000000`; type Montserrat. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/fplus-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/foliox` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Hero section with background image and CTA

The hero section SHALL display a full-viewport background image with the heading "For More Agency" and a "View Portfolio" call-to-action button that scrolls to the projects section.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows "For More Agency" heading
- **AND** a "View Portfolio" button linking to #projects is visible

### Requirement: Full-screen overlay navigation

The navbar SHALL show a hamburger icon that toggles a full-screen overlay menu with navigation links to all page sections.

#### Scenario: Navigation menu opens and closes

- **WHEN** the user clicks the hamburger button
- **THEN** a full-screen overlay menu opens with links: Home, About Us, Projects, Clients, Recent News, Contact
- **AND** clicking a menu item closes the overlay and scrolls to that section

### Requirement: About Us section with features

The About Us section SHALL display a split layout with an image and "Who We Are" text, followed by three feature cards: Reasonable Pricing, eCommerce Support, User-Friendly Admin.

#### Scenario: About section renders features

- **WHEN** the About Us section is visible
- **THEN** an image and "Who We Are" description are displayed
- **AND** three feature cards with icons are shown

### Requirement: Filterable projects gallery

The Projects section SHALL display a grid of portfolio items with filter buttons (All Fields, Branding, Editorial Design, Graphic Design) that filter the visible items.

#### Scenario: Projects filter by category

- **WHEN** the user clicks "Branding" filter
- **THEN** only branding items are displayed
- **WHEN** the user clicks "All Fields"
- **THEN** all items are displayed again

### Requirement: Methods video section

The Methods section SHALL display a "How We Work" heading with description text and a video placeholder with a play button.

#### Scenario: Methods section renders

- **WHEN** the Methods section is visible
- **THEN** "How We Work" heading and video play button are shown

### Requirement: Clients logo section

The Clients section SHALL display a row of client logos with grayscale styling that colorizes on hover.

#### Scenario: Clients logos render

- **WHEN** the Clients section is visible
- **THEN** a row of client logo images is displayed

### Requirement: Recent News blog cards

The Recent News section SHALL display three blog post cards with thumbnail, title, author name, and date.

#### Scenario: News cards render

- **WHEN** the Recent News section is visible
- **THEN** three blog post cards with title, author, and date are shown

### Requirement: Contact form

The Contact section SHALL display a form with Name, Email, Subject, Telephone, Message fields and a "Send Message" submit button.

#### Scenario: Contact form renders and submits

- **WHEN** the Contact section is visible
- **THEN** Name, Email, Subject, Telephone, Message fields and Send Message button are present
- **AND** submitting the form does not navigate away from the page

### Requirement: Footer with Component Dock link

The footer SHALL contain navigation links, social icons, a subscribe form, and a Component Dock attribution link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders with attribution

- **WHEN** the footer is visible
- **THEN** it contains nav links, social icons, and a Component Dock link
- **AND** the Component Dock link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/foliox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/foliox/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

# Template: Lodge (Hotel Landing)

Recreation of ColorLib "Hotel" (https://colorlib.com/wp/template/hotel/).

## Purpose

Lodge is a single-page hotel landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hotel"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a luxury hotel template with a hero slider, room availability
with booking form, facilities showcase, guestbook testimonials, Instagram
gallery, and a multi-column footer. Lodge recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Source:** ColorLib "Hotel" — https://colorlib.com/wp/template/hotel/
- **Source slug:** `hotel`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/hotel/ — **HTTP 200**, 56,928 B, fetched 2026-10-23 (page `<title>`: "Hotel | Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/hotel/css/style.css`, fetched 2026-10-23): brand `#ae9548`, `#2d220f`, `#f44336`, `#ae954b`; dominant neutrals `#242424`, `#ffffff`, `#353535`; type Open Sans, Taviraj. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/hotel-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/lodge` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Page renders all sections

The Lodge page SHALL render a navbar, hero section, room availability section,
quote section, facilities section, guestbook section, Instagram gallery, and
footer with Component Dock link.

#### Scenario: All sections are visible

- **GIVEN** a user visits the Lodge page
- **THEN** they see a navbar with logo and navigation links
- **AND** they see a hero section with welcome text
- **AND** they see a room availability section with booking form
- **AND** they see a facilities section
- **AND** they see a guestbook/testimonials section
- **AND** they see an Instagram gallery section
- **AND** they see a footer with Component Dock link

### Requirement: Navbar navigation

The navbar SHALL provide navigation links that scroll to the corresponding
sections, with a dropdown for Facilities and a mobile-responsive menu.

#### Scenario: Desktop navigation

- **GIVEN** the navbar is visible on desktop
- **THEN** nav links are rendered (Home, About, Rooms, Facilities, News, Contact)
- **AND** the Facilities link has a dropdown with room types

#### Scenario: Mobile menu toggle

- **GIVEN** the navbar is visible on mobile
- **WHEN** the user taps the hamburger menu
- **THEN** the mobile menu opens
- **AND** tapping a link closes the menu

### Requirement: Room availability form

The room availability section SHALL display a room showcase with amenities and
a booking form with date pickers, guest counters, room type selector, and
a CHECK Availability button.

#### Scenario: Form displays room details

- **GIVEN** the room availability section is visible
- **THEN** the room name, price, and amenity icons are displayed

#### Scenario: User fills in booking form

- **WHEN** the user fills in check-in and check-out dates
- **AND** the user adjusts adults, children, and rooms counters
- **AND** the user selects a room type
- **AND** clicks the CHECK Availability button
- **THEN** the form accepts the input without errors

### Requirement: Facilities section displays correctly

The facilities section SHALL display facility cards with title, description,
and CTA button in an alternating image-text layout.

#### Scenario: Facility cards render

- **GIVEN** the facilities section is visible
- **THEN** facility cards show title, description, and CTA button
- **AND** images use seeded placeholder photos

### Requirement: Guestbook testimonials

The guestbook section SHALL display tabbed testimonials with star ratings,
dates, author photos, and quotes.

#### Scenario: Testimonial tabs

- **WHEN** the user clicks a testimonial tab dot
- **THEN** the corresponding testimonial is displayed
- **AND** star ratings are shown (gold for filled, gray for empty)

### Requirement: Instagram gallery

The Instagram section SHALL display a 4-column photo grid linking to Instagram.

#### Scenario: Photo grid renders

- **GIVEN** the Instagram section is visible
- **THEN** 4 room photos are displayed in a grid

### Requirement: Footer contains Component Dock link

The footer SHALL contain a link to https://www.componentdock.com/ branded as
"Component Dock", plus quick links, newsletter, and copyright.

#### Scenario: Component Dock link present

- **GIVEN** the footer is visible
- **THEN** it contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lodge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lodge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar navigation — nav links are rendered (Home, About, Rooms, Facilities, News, Contact)
- [ ] Room availability form — the room name, price, and amenity icons are displayed
- [ ] Facilities section displays correctly — facility cards show title, description, and CTA button
- [ ] Guestbook testimonials — the corresponding testimonial is displayed
- [ ] Instagram gallery — 4 room photos are displayed in a grid

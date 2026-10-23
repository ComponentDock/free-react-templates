# Template: Lumier (Photography Portfolio Template)

Recreation of ColorLib "Elit" (https://colorlib.com/wp/template/elit/).

## Purpose

Lumier is a single-page photographer portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Elit" photography website template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Source:** ColorLib "Elit" — https://colorlib.com/wp/template/elit/
- **Source slug:** `elit`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/elit/ — **HTTP 200**, 24,702 B, fetched 2026-10-23 (page `<title>`: "Elit Photography— Onepage Website Template by Colorlib"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/elit/css/style.css`, fetched 2026-10-23): brand `#df0e62`, `#8bc34a`; dominant neutrals `#25262a`, `#212529`, `#f8f9fa`; type Oswald. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/lumier` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#df0e62` | live sheet paints it ×10 — `background` on `.custom-pagination a:hover`; style.css (14,049 B, sha256 c749c31c84d3) · <https://preview.colorlib.com/theme/elit/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Sidebar navigation

The template SHALL display a fixed left sidebar (250px wide, black background) with logo, navigation links, and social icons.

#### Scenario: Sidebar renders all navigation links

- **WHEN** the page loads
- **THEN** the sidebar displays Home, Photos, Biography, Blog, and Contact links

#### Scenario: Sidebar highlights active section

- **WHEN** the user scrolls to a section
- **THEN** the corresponding nav link is highlighted in the brand color

#### Scenario: Sidebar smooth scrolls on click

- **WHEN** the user clicks a navigation link
- **THEN** the page smoothly scrolls to that section

#### Scenario: Sidebar logo click scrolls to hero

- **WHEN** the user clicks the logo
- **THEN** the page scrolls to the hero section

### Requirement: Mobile sidebar

The sidebar SHALL be responsive with a hamburger toggle on mobile viewports.

#### Scenario: Mobile menu opens on toggle click

- **WHEN** the viewport is mobile and the user clicks the hamburger icon
- **THEN** the sidebar slides in from the left with a dark overlay

#### Scenario: Mobile menu closes on overlay click

- **WHEN** the mobile sidebar is open and the user clicks the overlay
- **THEN** the sidebar closes

#### Scenario: Mobile menu closes on close button click

- **WHEN** the mobile sidebar is open and the user clicks the close button
- **THEN** the sidebar closes

### Requirement: Hero section

The template SHALL display a full-viewport hero section with a background image, heading, description, and call-to-action button.

#### Scenario: Hero renders heading and button

- **WHEN** the page loads
- **THEN** the hero displays the "Welcome" heading and "Contact Me" button

#### Scenario: Hero CTA scrolls to contact

- **WHEN** the user clicks "Contact Me"
- **THEN** the page scrolls to the contact section

### Requirement: Photo gallery

The template SHALL display a 3-column photo grid with hover effects and lightbox.

#### Scenario: Gallery renders 18 photos

- **WHEN** the page loads
- **THEN** 18 photo items are displayed in a grid

#### Scenario: Gallery lightbox opens on click

- **WHEN** the user clicks a photo
- **THEN** a lightbox opens showing the full-size image

#### Scenario: Gallery lightbox closes on overlay click

- **WHEN** the lightbox is open and the user clicks the overlay
- **THEN** the lightbox closes

#### Scenario: Gallery lightbox closes on close button

- **WHEN** the lightbox is open and the user clicks the close button
- **THEN** the lightbox closes

### Requirement: Testimonials carousel

The template SHALL display a testimonials section with a carousel of testimonials.

#### Scenario: Testimonials shows first item by default

- **WHEN** the page loads
- **THEN** the first testimonial is displayed with name and quote

#### Scenario: Testimonials navigates forward

- **WHEN** the user clicks the next button
- **THEN** the next testimonial is shown

#### Scenario: Testimonials navigates backward

- **WHEN** the user clicks the previous button
- **THEN** the previous testimonial is shown

#### Scenario: Testimonials navigates via dots

- **WHEN** the user clicks a dot indicator
- **THEN** that testimonial is shown

### Requirement: Biography section

The template SHALL display a biography section with portrait, bio text, and skill checklist.

#### Scenario: Biography renders all content

- **WHEN** the page loads
- **THEN** the biography heading, portrait image, name, bio paragraphs, and skill checklist are visible

### Requirement: Blog section

The template SHALL display a blog section with paginated post entries.

#### Scenario: Blog shows first page

- **WHEN** the page loads
- **THEN** 2 blog posts are displayed on page 1

#### Scenario: Blog navigates to next page

- **WHEN** the user clicks the next page button
- **THEN** page 2 posts are shown

#### Scenario: Blog navigates to previous page

- **WHEN** the user is on page 2 and clicks the previous page button
- **THEN** page 1 posts are shown

#### Scenario: Blog disables next on last page

- **WHEN** the user is on the last page
- **THEN** the next page button is disabled

#### Scenario: Blog disables previous on first page

- **WHEN** the user is on page 1
- **THEN** the previous page button is disabled

### Requirement: Contact form

The template SHALL display a contact form with name, email, subject, and message fields.

#### Scenario: Contact form renders all fields

- **WHEN** the page loads
- **THEN** First Name, Last Name, Email, Subject, Message fields and Send Message button are visible

#### Scenario: Contact form accepts input

- **WHEN** the user types in a field
- **THEN** the field value updates

#### Scenario: Contact form submits without error

- **WHEN** the user clicks Send Message
- **THEN** the form submits without throwing an error

### Requirement: Footer

The template SHALL display a footer with a Component Dock attribution link.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer displays a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Footer renders copyright

- **WHEN** the page loads
- **THEN** the footer displays the current year and copyright text

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lumier/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lumier/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Sidebar navigation — the sidebar displays Home, Photos, Biography, Blog, and Contact links
- [ ] Mobile sidebar — the sidebar slides in from the left with a dark overlay
- [x] Hero section — the hero displays the "Welcome" heading and "Contact Me" button
- [ ] Photo gallery — 18 photo items are displayed in a grid
- [ ] Testimonials carousel — the first testimonial is displayed with name and quote
- [ ] Biography section — the biography heading, portrait image, name, bio paragraphs, and skill checklist are visible
- [ ] Blog section — 2 blog posts are displayed on page 1
- [ ] Contact form — First Name, Last Name, Email, Subject, Message fields and Send Message button are visible

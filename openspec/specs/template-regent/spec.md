# Template: Regent (Hotel)

Recreation of ColorLib "Suites" (https://colorlib.com/wp/template/suites/).

> Recreates ColorLib 'Suites' as a free React hotel & resort landing page.

## Purpose

Regent is a luxury hotel & resort landing page template built with React 19, Tailwind CSS 4, and TypeScript. It showcases rooms, amenities, gallery, events, and testimonials — matching the structure and design tokens of the ColorLib Suites template under a new original name.

## Brand

| Token        | Value                      |
| ------------ | -------------------------- |
| Brand        | `#f23a2e` (red accent)     |
| Brand hover  | `#d9322a`                  |
| Dark         | `#000000`                  |
| Offwhite     | `#f8f9fa`                  |
| Ink          | `#333333`                  |
| Muted        | `#777777`                  |
| Heading font | Playfair Display (400;700) |
| Body font    | Work Sans (300;400;700)    |

## Sections (in order)

1. **Navbar** — Transparent over hero, white background when scrolled. Logo 'Regent' in Playfair Display. Nav links: Home, Rooms (dropdown: Standard, Family, Suite), Events, About, Contact.
2. **Hero** — 3-slide carousel with background images. Slides:
   - 'Welcome To Regent' / 'Hotel & Resort'
   - 'Unique Experience' / 'Enjoy With Us'
   - 'Relaxing Stay' / 'Your Room, Your Suite'
3. **Our Rooms** — 3-column grid, 6 room cards. Each: picsum image, room name, price/night.
4. **About Us** — Two columns. Left: image with play button overlay. Right: heading, paragraph, 'Watch Video' link.
5. **Hotel Features** — 4-column grid, 8 features with lucide-react icons.
6. **Promo Banner** — Full-width parallax background, heading, 'Book Now' button, countdown text.
7. **Our Gallery** — 2x4 grid of picsum images with hover opacity effect.
8. **Upcoming Events** — 3 event cards with image, title, date, description.
9. **Testimonials** — 3 testimonials with avatar, name, quote.
10. **Footer** — Dark bg (#000), 3 columns, social icons, copyright with Component Dock link.

## Design reference (replication findings)

- **Source:** ColorLib "Suites" — https://colorlib.com/wp/template/suites/
- **Source slug:** `suites`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/suites/ — **HTTP 200**, 35,777 B, fetched 2026-10-23 (page `<title>`: "Suite — Colorlib Website Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/suites/css/style.css`, fetched 2026-10-23): brand `#f23a2e`, `#5c7893`; dominant neutrals `#343a40`, `#25262a`, `#212529`; type Playfair Display, Work Sans. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/suites-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/regent` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: App renders all major sections

The application SHALL render all 10 sections in the correct order.

#### Scenario: All sections present

- **WHEN** the App component is rendered
- **THEN** I see a navigation landmark
- **AND** I see a main content area
- **AND** I see a contentinfo landmark (footer)

### Requirement: Navbar displays brand and navigation links

The navbar SHALL show the brand name and navigation links with a working dropdown.

#### Scenario: Brand and links

- **WHEN** the Navbar is rendered
- **THEN** I see the text "Regent"
- **AND** I see links for Home, Rooms, Events, About, Contact

#### Scenario: Rooms dropdown toggles

- **WHEN** I click the Rooms button
- **THEN** I see Standard, Family, Suite options
- **WHEN** I click the Rooms button again
- **THEN** the dropdown closes

### Requirement: Hero displays carousel slides

The hero section SHALL show a carousel with 3 slides and navigation controls.

#### Scenario: Initial slide

- **WHEN** the Hero is rendered
- **THEN** I see the heading "Welcome To Regent"
- **AND** I see the caption "Hotel & Resort"

#### Scenario: Navigation arrows

- **WHEN** I click the next arrow
- **THEN** the slide changes to "Unique Experience"
- **WHEN** I click the previous arrow
- **THEN** the slide returns to "Welcome To Regent"

### Requirement: Rooms section displays room cards

The rooms section SHALL display 6 room cards in a grid layout.

#### Scenario: Room cards

- **WHEN** the Rooms section is rendered
- **THEN** I see 6 room cards
- **AND** each card shows a room name and price

### Requirement: About section shows hotel description

The about section SHALL display a two-column layout with image and text.

#### Scenario: About content

- **WHEN** the About section is rendered
- **THEN** I see "About Us" heading
- **AND** I see a play button overlay
- **AND** I see a "Watch Video" link

### Requirement: Features section displays amenities

The features section SHALL display 8 hotel amenity items with icons.

#### Scenario: Feature items

- **WHEN** the Features section is rendered
- **THEN** I see 8 feature items with icons and labels

### Requirement: Promo banner displays offer

The promo section SHALL display a promotional offer with a parallax background.

#### Scenario: Promo content

- **WHEN** the Promo section is rendered
- **THEN** I see "Summer Special" heading
- **AND** I see a "Book Now" button

### Requirement: Gallery section shows hotel images

The gallery section SHALL display a grid of 8 hotel images.

#### Scenario: Gallery images

- **WHEN** the Gallery section is rendered
- **THEN** I see 8 gallery images

### Requirement: Events section displays upcoming events

The events section SHALL show 3 event cards with details.

#### Scenario: Event cards

- **WHEN** the Events section is rendered
- **THEN** I see 3 event cards with titles and dates

### Requirement: Testimonials section shows guest reviews

The testimonials section SHALL display 3 guest testimonials.

#### Scenario: Testimonial content

- **WHEN** the Testimonials section is rendered
- **THEN** I see 3 testimonials with names and quotes

### Requirement: Footer displays contact and branding

The footer SHALL show contact information and link to Component Dock.

#### Scenario: Footer content

- **WHEN** the Footer is rendered
- **THEN** I see the copyright text
- **AND** I see a link to Component Dock
- **AND** the link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regent/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regent/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] App renders all major sections — I see a navigation landmark
- [x] Navbar displays brand and navigation links — I see the text "Regent"
- [x] Hero displays carousel slides — I see the heading "Welcome To Regent"
- [ ] Rooms section displays room cards — I see 6 room cards
- [x] About section shows hotel description — I see "About Us" heading
- [ ] Features section displays amenities — I see 8 feature items with icons and labels
- [x] Promo banner displays offer — I see "Summer Special" heading
- [ ] Gallery section shows hotel images — I see 8 gallery images
- [ ] Events section displays upcoming events — I see 3 event cards with titles and dates
- [ ] Testimonials section shows guest reviews — I see 3 testimonials with names and quotes

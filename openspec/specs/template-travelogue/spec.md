# Template: Travelogue (Travel Agency Landing)

## Purpose

Travelogue is a single-page travel-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Travel Wordpress Themes" free template (source:
https://colorlib.com/wp/template/travel-wordpress-themes/), built under a
DIFFERENT name (**Travelogue**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a full-width hero-driven travel page branded "The Valley"
with a mountain/valley logo. The hero features an aerial photograph of
turquoise ocean water with boats, a large white heading ("Travel WordPress
Themes"), and a dark semi-transparent "Let's go now" CTA button. A
transparent navbar overlays the hero with white text links (Home, Destination,
Regions, Shop, Blog), a phone number, and a search icon. Left/right slider
arrows suggest a carousel-style hero.

**Design reference (replication findings):**

- **Original:** ColorLib "Travel Wordpress Themes" — free travel agency
  website template (source: https://colorlib.com/wp/template/travel-wordpress-themes/).
- **Live preview DOM:** none exists — five candidate paths 404 and the slug is
  absent from the preview host's catalog map (full probe list in **Design
  tokens** below). The TEMPLATES.md screenshot (`travel-wordpress-themes.jpg`)
  is the sole reference.
- **Screenshot analysis:** The screenshot shows:
  1. Transparent navbar with "The Valley" mountain logo (left), navigation
     links (Home, Destination, Regions, Shop, Blog), phone number
     (+03 86 600 888 33), search icon (right).
  2. Full-viewport hero with an aerial photo of turquoise/teal ocean water
     with traditional boats, large white sans-serif heading
     ("Travel WordPress Themes"), a light translucent CTA button
     ("Let's go now"), and left/right chevron slider arrows.
  3. The overall aesthetic is: turquoise/teal ocean tones, white text on the
     photo, transparent navbar, luxury travel vibe.
  4. The screenshot was taken on **demo.themexpert.com** ("The Valley", a
     third-party theme) — the ColorLib entry is a round-up post, which is why
     no `/theme/<slug>/` build exists.
- **Design tokens:** measured from the screenshot's pixels in **Design tokens**
  below (no stylesheet exists to read).
- **Section order (from screenshot — only hero visible, full structure inferred):**
  1. Header/Navbar: transparent, logo + nav links + phone + search
  2. Hero: full-viewport, aerial ocean photo, heading, CTA, slider arrows
  3. (Inferred) Destinations: featured travel destinations/cards
  4. (Inferred) About/Features: why choose this agency
  5. (Inferred) Popular Trips: tour packages with images and prices
  6. (Inferred) Testimonials: customer reviews
  7. (Inferred) Newsletter: email signup
  8. Footer: links, social, copyright, Component Dock attribution

**Recreation decisions:** repo-standard Navbar (site name "Travelogue",
Home link, dark-mode toggle) + hero with seeded picsum aerial photo +
heading + CTA button; destinations section with card grid; features/about
section; popular trips with pricing; testimonials; newsletter signup;
footer with Component Dock link. All images picsum-seeded
(`picsum.photos/seed/travelogue-N/w/h`). Google Fonts via `<link>`.

Travelogue lives in `apps/travelogue` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Travel Wordpress Themes** — https://colorlib.com/wp/template/travel-wordpress-themes/
- **Preview**: **none exists.** Probed 2026-10-23: `/theme/travel-wordpress-themes/` 404 (9 B `text/plain`), `/theme/bootstrap/travel-wordpress-themes/` 404, `/theme/bb/travel-wordpress-themes/` 404, `colorlib.com/etc/cs/travel-wordpress-themes/index.html` soft-404 (`<title>Page Not Found - Colorlib</title>`), `/downloads/free/travel-wordpress-themes.zip` 404. The slug is also **absent from the preview host's own catalog map** (`assets/js/catalog-products-20261009-trace-developer.js`, 633,990 B — 0 occurrences), so no demo URL is registered anywhere.
- **Why**: this ColorLib entry is a round-up post, not a free build. The TEMPLATES.md screenshot is **The Valley**, a third-party theme — the screenshot's own address bar reads `Not Secure — demo.themexpert.com`.
- **Reference that remains**: the TEMPLATES.md screenshot `travel-wordpress-themes.jpg` (HTTP 200, 239,618 B, progressive JPEG **1200×916**, served as real JPEG — no AVIF conversion needed). The values below are **sampled from its pixels**, not read from a stylesheet, and are the only measurements that exist for this template.

### Colors (pixel-sampled, 1200×916 screenshot)

| Token | Value | Evidence |
| ----- | ----- | -------- |
| Hero water — deep marine | `#003c54` | dominant quantised bucket of the hero crop (≈2,854 of 16,000 samples) |
| Hero water — mid teal | `#004848` | second bucket (1,671 samples) |
| Hero water — shallow turquoise | `#0c786c` | brightest large-area turquoise (410 samples) |
| Hero water — navy edge | `#003048` | 334 samples, top-right corner |
| Heading / nav labels | `#fffafa` | pixel sample inside the H1 strokes (200,400) |
| CTA fill | translucent white ≈ `rgba(255,255,255,0.25)` → samples `#c8dcd9`–`#e4efe9` | button box (165,537)–(285,570): the fill tracks the water pattern underneath, i.e. white at low opacity over the photo |
| CTA label | `#0a1212` | darkest pixel inside the button box |
| Logo tile | `#ffffff` block, `#000` glyph | logo box (46,60)–(158,122) holds both pure white and pure black |
| App brand, for comparison | `#00b4d8` (`--color-primary-400`) | **not in the screenshot**: the nearest pixel anywhere is `#07a0f1` (chroma distance 33) on a single boat/title-bar pixel; no water area reaches it |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Hero H1 ("Travel WordPress Themes") | heavy geometric sans (Montserrat/Gilroy class), ~56 px at a 1200 px viewport, 2 lines, white | screenshot; **no serif face is present anywhere** in the reference |
| Nav labels | ~14 px, letterspaced, white, over the photo | navbar row at y≈88 |
| CTA label | ~13 px, near-black | "Let's go now" |
| Wordmark | black mountain mark + "The Valley" wordmark inside a white tile | top-left |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Nav | transparent, sitting directly on the photo; white logo tile flush left; phone number + search icon right |
| Hero | full-bleed photograph, no dark scrim measurable (the water is already dark at the right edge; the heading sits over the lighter turquoise half) |
| CTA | ~110×34 px translucent-white rectangle, corners square-to-2 px at this scale, no shadow |
| Carousel | chevron arrows vertically centred at both edges |

Section order measured in the reference: **only the hero exists** — nav (transparent over the photo) → full-bleed hero photo → two-line H1 → `Let's go now` → left/right chevrons. Everything below the fold in the shipped app (destinations, features, trips, testimonials, newsletter, footer) is **invented**, because no reference page exists; the earlier version of this spec inferred that structure but did not say so plainly.

**Deltas vs the shipped app** (drift is not a prep error — the app is already on main):
- Primary: app `#00b4d8` is a brighter cyan than any measured pixel; the photo's marine range is `#003c54`–`#0c786c`. Recorded as a deliberate brightening, not a measurement.
- Display face: app `--font-display: 'Playfair Display'` (serif) — the reference H1 is a **heavy sans**. The spec's earlier "Playfair Display or similar serif" line was an unsourced estimate and is corrected here.
- CTA: the earlier "dark semi-transparent button" was wrong; the reference button is **light translucent** with a near-black label.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Travelogue",
a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the navigation bar
- **THEN** the system SHALL display "Travelogue" as the site name
- **AND** the system SHALL display a "Home" link
- **AND** the system SHALL display a dark-mode toggle button

#### Scenario: Navbar transparency

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the navigation bar
- **THEN** the navbar SHALL have a transparent background overlaying the hero

### Requirement: Hero section

The system SHALL render a full-viewport hero section with a background image,
a heading, a call-to-action button, and slider navigation arrows.

#### Scenario: Hero content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the hero section
- **THEN** the system SHALL display a heading "Explore the World"
- **AND** the system SHALL display a subheading describing travel services
- **AND** the system SHALL display a "Let's Go" call-to-action button

#### Scenario: Hero background

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the hero section
- **THEN** the hero SHALL display a full-viewport background image
- **AND** the background SHALL have a dark semi-transparent overlay
- **AND** all text SHALL be white and readable over the overlay

#### Scenario: Hero slider arrows

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the hero section
- **THEN** the system SHALL display left and right chevron navigation arrows
- **AND** the arrows SHALL be positioned at the vertical center of the hero

### Requirement: Destinations section

The system SHALL render a destinations section showcasing travel destinations.

#### Scenario: Destinations content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the destinations section
- **THEN** the system SHALL display a section heading "Popular Destinations"
- **AND** the system SHALL display a grid of destination cards
- **AND** each card SHALL have an image, a destination name, and a brief description

#### Scenario: Destination cards

- **GIVEN** the destinations section is visible
- **WHEN** the user views a destination card
- **THEN** the card SHALL display a seeded placeholder image
- **AND** the card SHALL display the destination name
- **AND** the card SHALL display a short description

### Requirement: Features section

The system SHALL render a features section explaining why users should
choose this travel agency.

#### Scenario: Features content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the features section
- **THEN** the system SHALL display a section heading "Why Choose Us"
- **AND** the system SHALL display 3–4 feature cards
- **AND** each card SHALL have an icon, a title, and a description

### Requirement: Popular trips section

The system SHALL render a popular trips section with tour packages.

#### Scenario: Trips content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the trips section
- **THEN** the system SHALL display a section heading "Popular Trips"
- **AND** the system SHALL display a grid of trip cards
- **AND** each card SHALL have an image, trip name, duration, price, and a
  "Book Now" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with customer reviews.

#### Scenario: Testimonials content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the testimonials section
- **THEN** the system SHALL display a section heading "What Our Clients Say"
- **AND** the system SHALL display 2–3 testimonial cards
- **AND** each card SHALL have a quote, the customer name, and a role/location

### Requirement: Newsletter section

The system SHALL render a newsletter signup section.

#### Scenario: Newsletter content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the newsletter section
- **THEN** the system SHALL display a heading "Subscribe to Our Newsletter"
- **AND** the system SHALL display an email input field
- **AND** the system SHALL display a "Subscribe" button

### Requirement: Footer

The system SHALL render a footer with navigation, social links, and
Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the footer
- **THEN** the footer SHALL display the site name "Travelogue"
- **AND** the footer SHALL display navigation links
- **AND** the footer SHALL display a "Made with Component Dock" link
  pointing to https://www.componentdock.com/
- **AND** the footer SHALL display a copyright notice

### Requirement: Dark mode

The system SHALL support dark mode via a toggle in the navbar.

#### Scenario: Dark mode toggle

- **GIVEN** the Travelogue page is rendered in light mode
- **WHEN** the user clicks the dark-mode toggle
- **THEN** the page SHALL switch to dark mode
- **AND** all sections SHALL update their backgrounds and text colors
  for dark-mode readability

#### Scenario: Dark mode persistence

- **GIVEN** the user has enabled dark mode
- **WHEN** the user reloads the page
- **THEN** the page SHALL remain in dark mode

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/travelogue/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/travelogue/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Navbar renders with "Travelogue" site name and Home link
- [ ] Hero displays full-viewport background with overlay, heading, CTA, arrows
- [ ] Destinations section displays card grid with images and descriptions
- [ ] Features section displays icon cards with titles and descriptions
- [ ] Popular trips section displays trip cards with pricing
- [ ] Testimonials section displays customer quotes
- [ ] Newsletter section displays email input and subscribe button
- [x] Footer displays Component Dock link (https://www.componentdock.com/)
- [ ] Dark mode toggle works and persists across reloads
- [ ] All images use picsum-seeded placeholders
- [ ] Google Fonts loaded via <link> in index.html
- [x] No ColorLib references in app code (comments, strings, data)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeCheck passes with strict TypeScript
- [ ] Lint passes (oxlint + prettier)
- [ ] Build succeeds (vite build)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

# Template: Cadence (Music Artist Landing)

## Purpose

Cadence is a music artist landing page in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Musica" free template
(source: https://colorlib.com/wp/template/musica/), built under a DIFFERENT
name (**Cadence**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/musica/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/musica-free-template.jpg

## Requirements

### Requirement: Navbar with navigation and mobile menu

The template SHALL render a sticky navbar with brand name "Cadence", navigation links (Home, About, Shows, Album, Artists, Contact), social icons on desktop, and a hamburger toggle for mobile.

#### Scenario: Renders brand and navigation links

- **WHEN** the Cadence app is rendered
- **THEN** the navbar displays "Cadence" as brand text
- **AND** navigation links include Home, About, Shows, Album, Artists, Contact

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu becomes visible
- **WHEN** the user clicks the close button
- **THEN** the mobile navigation menu becomes hidden

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile navigation menu is open
- **AND** the user clicks a navigation link
- **THEN** the mobile navigation menu closes

### Requirement: Hero section with background imagery

The template SHALL render a full-viewport hero section with a background image, dark purple overlay, gradient bar, watermark text, heading, subtitle, and scroll indicator.

#### Scenario: Displays hero content

- **WHEN** the Cadence app is rendered
- **THEN** the hero heading shows "Cadence Cadence"
- **AND** the subtitle shows "Music Theme"
- **AND** a scroll-down indicator is present

### Requirement: Artist Bio section

The template SHALL render a parallax artist bio section with dark overlay, heading, artist image, bio text, and signature.

#### Scenario: Displays artist information

- **WHEN** the Cadence app is rendered
- **THEN** the section heading shows "Artist Bio"
- **AND** the artist image is displayed
- **AND** bio paragraphs are shown

### Requirement: Upcoming Shows section

The template SHALL render a list of upcoming show events with date, image, event name, city, venue, time, and a "Buy Tickets" CTA button.

#### Scenario: Displays all events

- **WHEN** the Cadence app is rendered
- **THEN** 4 upcoming shows are displayed
- **AND** each show has a "Buy Tickets" button
- **AND** show dates and locations are visible

### Requirement: Music Player section

The template SHALL render a grid of track cards with album art, play button overlay, track title, and artist name.

#### Scenario: Displays track cards

- **WHEN** the Cadence app is rendered
- **THEN** 4 track cards are displayed
- **AND** each card has a play button with an accessible label

### Requirement: Featured Album section

The template SHALL render a featured album with cover image, song playlist, "Buy on iTunes" CTA, and a now-playing progress bar.

#### Scenario: Displays album and playlist

- **WHEN** the Cadence app is rendered
- **THEN** the album title "Love is all Around" is shown
- **AND** the playlist contains multiple songs
- **AND** a "Buy on iTunes" link is present
- **AND** a now-playing bar is shown

### Requirement: Music/Artists Search panels

The template SHALL render two side-by-side panels with background images and dark overlays for music and artist search.

#### Scenario: Displays search panels

- **WHEN** the Cadence app is rendered
- **THEN** a "Music" heading is displayed
- **AND** an "Artists" heading is displayed
- **AND** both panels have background images

### Requirement: Footer with Component Dock link

The template SHALL render a multi-column footer with brand, link columns, newsletter subscribe form, and Component Dock attribution.

#### Scenario: Footer content

- **WHEN** the Cadence app is rendered
- **THEN** the footer shows "Cadence" brand
- **AND** footer sections include About, Links, Social, Subscribe
- **AND** a newsletter subscribe form is present
- **AND** Component Dock links point to https://www.componentdock.com/
- **AND** the copyright shows the current year

### Requirement: Design tokens and styling

The template SHALL use the Raleway font family, hot pink to deep purple gradient (#cc1573 to #5722a9), dark navy background (#150430), and appropriate text colors.

#### Scenario: Applies correct design tokens

- **WHEN** the Cadence app is rendered
- **THEN** the body font is Raleway
- **AND** gradient buttons use the pink-to-purple gradient
- **AND** dark sections use the deep navy background

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/cadence/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cadence/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with navigation and mobile menu — the navbar displays "Cadence" as brand text
- [ ] Hero section with background imagery — the hero heading shows "Cadence Cadence"
- [ ] Artist Bio section — the section heading shows "Artist Bio"
- [ ] Upcoming Shows section — 4 upcoming shows are displayed
- [ ] Music Player section — 4 track cards are displayed
- [ ] Featured Album section — the album title "Love is all Around" is shown
- [ ] Music/Artists Search panels — a "Music" heading is displayed
- [ ] Design tokens and styling — the body font is Raleway

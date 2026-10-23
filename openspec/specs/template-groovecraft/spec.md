# Template: Groovecraft (Music)

## Purpose

Groovecraft is a music artist landing page template that recreates the ColorLib "One Music" design as a single-page React application. It showcases albums, featured artists, music charts, and a contact form — all faithful to the original section order, layout, and design tokens.

- **Source:** [One Music](https://colorlib.com/wp/template/onemusic/)
- **Preview:** https://preview.colorlib.com/theme/onemusic/
- **App:** `apps/groovecraft`
- **Package:** `@free-react-templates/groovecraft`

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/onemusic/ (HTTP 200, 48,045 B, fetched 2026-10-23) and its theme stylesheet `theme/onemusic/css/style.min.css` (29,580 B, sha256 `fe1a3b0fed82…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Surface | `#ffffff` | 37 declarations — `body`, `.skip` |
| Ink / dark surface | `#111111` | 28 declarations — `body`, `.button` |
| Typeface | `Archivo, sans-serif` (1 rule — .wordmark text) | `font-family` declaration in the theme sheet |
| Body type | `color: #111` | `body{…}` rule |
| Radii | `50%` | `50%` (.track button) |

Palette in order of use: `#ffffff` ×37, `#111111` ×28, `#dddddd` ×10, `#626262` ×8, `#000000` ×5, `#aaaaaa` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar

The template SHALL display a fixed transparent navbar with the brand "Groovecraft", navigation links (Home, Albums, Events, News, Contact), and a shopping cart icon.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** I see the "Groovecraft" brand name
- **AND** I see navigation links for Home, Albums, Events, News, Contact
- **AND** I see a shopping cart icon

#### Scenario: Mobile menu toggles

- **WHEN** I click the mobile menu toggle button
- **THEN** the mobile navigation menu opens
- **AND** I see all navigation links
- **WHEN** I click a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section

The template SHALL display a full-viewport hero section with a background image, subtitle "Latest album", heading "Beyond Time", and a "Discover" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** I see the heading "Beyond Time"
- **AND** I see a "Discover" button
- **AND** I see the subtitle "Latest album"

### Requirement: Latest Albums section

The template SHALL display a "Latest Albums" section with a heading, description text, and a horizontal scrollable row of album cards.

#### Scenario: Albums section renders cards

- **WHEN** I scroll to the albums section
- **THEN** I see the heading "Latest Albums"
- **AND** I see album cards with artist names and genre tags

### Requirement: Buy What's New section

The template SHALL display a "Buy What's New" section on a light gray background with a grid of album cards including price badges and play button overlays, plus a "Load More" button.

#### Scenario: Buy section renders with prices

- **WHEN** I scroll to the buy section
- **THEN** I see the heading "Buy What's New"
- **AND** I see album cards with price badges
- **AND** I see a "Load More" button

### Requirement: Featured Artist section

The template SHALL display a "Featured Artist" section with a dark overlay background, artist image, description text, and an audio player row.

#### Scenario: Featured artist renders content

- **WHEN** I scroll to the featured section
- **THEN** I see the heading and description
- **AND** I see a song name and play button

### Requirement: Music Lists section

The template SHALL display a three-column layout with "This week's top" tracks, "New Hits" with play controls, and "Popular Artist" list.

#### Scenario: Music lists render all columns

- **WHEN** I scroll to the music lists section
- **THEN** I see three column headings: "This week's top", "New Hits", "Popular Artist"
- **AND** I see track entries with thumbnails in each column

### Requirement: Contact form

The template SHALL display a "Get In Touch" section with a dark overlay background and a contact form with Name, E-mail, Subject, Message fields and a Send button.

#### Scenario: Contact form renders all fields

- **WHEN** I scroll to the contact section
- **THEN** I see the heading "Get In Touch"
- **AND** I see input fields for Name, E-mail, Subject, and Message
- **AND** I see a Send button

#### Scenario: Contact form submission shows confirmation

- **WHEN** I fill in all form fields and click Send
- **THEN** I see a thank you message

### Requirement: Footer

The template SHALL display a dark footer with the "Groovecraft" brand, copyright text linking to Component Dock, and navigation links.

#### Scenario: Footer renders brand and links

- **WHEN** I scroll to the footer
- **THEN** I see the "Groovecraft" brand name
- **AND** I see a "Component Dock" link pointing to https://www.componentdock.com/
- **AND** I see navigation links for Home, Albums, Events, News, Contact

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/groovecraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/groovecraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — I see the "Groovecraft" brand name
- [x] Hero section — I see the heading "Beyond Time"
- [x] Latest Albums section — I see the heading "Latest Albums"
- [ ] Buy What's New section — I see the heading "Buy What's New"
- [ ] Featured Artist section — I see the heading and description
- [x] Music Lists section — I see three column headings: "This week's top", "New Hits", "Popular Artist"
- [x] Contact form — I see the heading "Get In Touch"

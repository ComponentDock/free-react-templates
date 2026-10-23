# Template: Melodica (Music Artist Landing)

Recreation of ColorLib "Music 2" (https://colorlib.com/wp/template/music-2/).

## Purpose

Melodica is a dark-themed music artist/band landing page template with a deep
blue-to-purple gradient color scheme, vibrant accent colors, and music-focused
sections. It showcases an artist's brand, tracks, upcoming events, photo gallery,
and newsletter signup.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/music/ (HTTP 200, 24,529 B, fetched 2026-10-23) and its theme stylesheet `theme/music/styles/main_styles.css` (32,427 B, sha256 `beba86a028d7…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#2ac275` | 26 declarations — `.button::after`, `.header::after` |
| Other chromatic values | `#3b125d`, `#eeff2d`, `#2e9e7a` | `#3b125d` × 9 (.header); `#eeff2d` × 8 (.header::after); `#2e9e7a` × 4 (.log_reg ul li a:hover) |
| Surface | `#ffffff` | 50 declarations — `body`, `p a:hover` |
| Ink / dark surface | `#3b125d` | 9 declarations — `.news`, `.header` |
| Typeface | `'Josefin Sans', sans-serif` (3 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `font-size: 14px; font-weight: 400; color: #a5a5a5` | `body{…}` rule |
| Radii | `50%`, `22px`, `15px` | `50%` (.main_nav ul li.active::after); `22px` (.button); `15px` (.player_title) |

Palette in order of use: `#ffffff` ×50, `#2ac275` ×26, `#3b125d` ×9, `#6d6d6d` ×8, `#eeff2d` ×8, `#2e9e7a` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navigation bar with logo and section links

The template SHALL display a fixed navigation bar with a logo text, section links
(Home, About, Tracks, Events, Gallery, Contact), and a call-to-action button.

#### Scenario: Navbar renders on page load

- **WHEN** the page loads
- **THEN** I see a navigation bar at the top with the logo "Melodica" and links to all sections

#### Scenario: Navbar contains CTA button

- **WHEN** I look at the navigation bar
- **THEN** I see a call-to-action button (e.g. "Get Tickets")

### Requirement: Hero section with headline and CTAs

The template SHALL display a hero section with a large headline, subtitle text,
and two call-to-action buttons (primary filled, secondary outline).

#### Scenario: Hero displays headline and subtitle

- **WHEN** the page loads
- **THEN** I see a hero section with a large headline "Feel The Music" and a subtitle paragraph

#### Scenario: Hero has two CTA buttons

- **WHEN** I look at the hero section
- **THEN** I see two buttons: a primary "Explore Now" button and an outline "Watch Video" button

#### Scenario: Primary CTA links to tracks

- **WHEN** I click the "Explore Now" button
- **THEN** the page scrolls to the tracks section

### Requirement: About section with artist info and stats

The template SHALL display an about section with an artist image, bio text,
and statistic counters (albums, fans, concerts).

#### Scenario: About section shows artist info

- **WHEN** I scroll to the about section
- **THEN** I see an artist image and bio text describing the artist

#### Scenario: About section shows statistics

- **WHEN** I look at the about section
- **THEN** I see three stat counters: Albums, Fans, and Concerts with numeric values

### Requirement: Tracks section with featured tracks grid

The template SHALL display a tracks section with a grid of featured tracks,
each showing an image, title, and play button overlay.

#### Scenario: Tracks grid renders

- **WHEN** I scroll to the tracks section
- **THEN** I see a grid of at least 4 track cards with images and titles

#### Scenario: Track card has play button

- **WHEN** I hover over a track card
- **THEN** I see a play button icon overlay on the track image

### Requirement: Events section with upcoming shows

The template SHALL display an events section listing upcoming shows with
date, venue name, and a ticket button for each event.

#### Scenario: Events list renders

- **WHEN** I scroll to the events section
- **THEN** I see a list of upcoming events with date and venue information

#### Scenario: Event has ticket button

- **WHEN** I look at an event entry
- **THEN** I see a "Get Tickets" button next to the venue details

### Requirement: Photo gallery grid

The template SHALL display a gallery section with a responsive grid of
placeholder images arranged in 2-3 columns.

#### Scenario: Gallery renders images

- **WHEN** I scroll to the gallery section
- **THEN** I see a grid of at least 6 images in a 2-3 column layout

### Requirement: Newsletter signup section

The template SHALL display a newsletter section with a heading, email input
field, and a subscribe button.

#### Scenario: Newsletter form renders

- **WHEN** I scroll to the newsletter section
- **THEN** I see a heading "Subscribe", an email input, and a "Subscribe" button

#### Scenario: Newsletter form handles submission

- **WHEN** I enter an email address and click "Subscribe"
- **THEN** the form handles the submission (no page reload)

### Requirement: Footer with Component Dock link

The template SHALL display a footer with social media links, quick navigation
links, and a Component Dock attribution link.

#### Scenario: Footer renders

- **WHEN** I scroll to the footer
- **THEN** I see social media icons, quick links, and copyright text

#### Scenario: Footer links to Component Dock

- **WHEN** I look at the footer
- **THEN** I see a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/melodica/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/melodica/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar with logo and section links — I see a navigation bar at the top with the logo "Melodica" and links to all sections
- [x] Hero section with headline and CTAs — I see a hero section with a large headline "Feel The Music" and a subtitle paragraph
- [ ] About section with artist info and stats — I see an artist image and bio text describing the artist
- [ ] Tracks section with featured tracks grid — I see a grid of at least 4 track cards with images and titles
- [ ] Events section with upcoming shows — I see a list of upcoming events with date and venue information
- [ ] Photo gallery grid — I see a grid of at least 6 images in a 2-3 column layout
- [x] Newsletter signup section — I see a heading "Subscribe", an email input, and a "Subscribe" button

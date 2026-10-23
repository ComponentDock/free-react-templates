# Template: Shatter (Magazine / News Blog)

## Purpose

Shatter is a magazine/news blog template in the free-react-templates monorepo.
It is a React recreation of the ColorLib "Smashed" free template (source:
https://colorlib.com/wp/template/smashed/; preview:
https://preview.colorlib.com/theme/smashed/), built under a DIFFERENT name
(**Shatter**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Naming

- Source slug: `smashed`
- Source URL: https://colorlib.com/wp/template/smashed/
- Preview URL: https://preview.colorlib.com/theme/smashed/
- New name: `shatter`
- Package: `@free-react-templates/shatter`
- Deploy target: `shatter.free.componentdock.com`

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/smashed/ (HTTP 200, 51,736 B, sha256 `ef13a0dc074b…`, fetched 2026-10-23) and its design stylesheet(s) `main.css`, `inline-style-0`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff1857` | 30 declarations — `.primary-btn.fill`, `.primary-btn:hover` |
| Other chromatic values | `#4cd3e3` (5), `#38a4ff` (4), `#f4e700` (4) | secondary hues in the same sheet |
| Surface | `#ffffff` | 73 declarations — `.h1, .h2, .h3, .h4, .h5, .h6`, `::selection` |
| Ink / dark surface | `#000000` | 2 declarations — `.single-post-area .navigation-area .nav-left .thumb`, `.single-post-area .navigation-area .nav-right .thumb` |
| Typeface | `Roboto` (2 rules — `.h1, .h2, .h3, .h4, .h5, .h6`)<br>`Open Sans` (1 rule — `body`) | `font-family` declarations in the design sheet |
| Radii | `3px`, `8px`, `8.5px`, `50%` | `3px` (`.genric-btn.radius`); `8px` (`.confirm-radio`); `8.5px` (`.default-switch`); `50%` (`.default-switch input + label`) |

Palette in order of use: `#ffffff` ×73, `#ff1857` ×30, `#999999` ×13, `#222222` ×10, `#f9f9ff` ×8, `#2e2e2e` ×6, `#777777` ×6, `#252525` ×5.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Full magazine layout on page load

The template SHALL render a complete magazine layout with all seven sections.

#### Scenario: Page loads with full magazine layout

- **WHEN** the user visits the Shatter homepage
- **THEN** they see a banner area with a 3-column grid (left posts, center featured, right widgets)
- **AND** the banner area spans the full viewport width
- **AND** the page background is light (#f9f9ff)

### Requirement: Banner hero left column

The banner left column SHALL display 3 stacked small post cards.

#### Scenario: Banner left column post cards

- **WHEN** the banner area is displayed
- **THEN** 3 small post cards are stacked vertically in the left column
- **AND** each card shows an image with dark overlay
- **AND** each card shows a category tag (red #ff1857), date, and comment count
- **AND** each card shows a headline and short excerpt

### Requirement: Banner hero center carousel

The banner center SHALL display a large featured post with carousel navigation.

#### Scenario: Banner center featured post

- **WHEN** the banner area is displayed
- **THEN** the center column shows a large featured post
- **AND** the featured post has a full-bleed image with dark overlay
- **AND** the featured post shows a category tag, date, and comment count
- **AND** the featured post shows a large headline and excerpt
- **AND** a "Read More" fill button is displayed (#ff1857 background)
- **AND** left/right carousel navigation arrows are present

### Requirement: Banner hero right sidebar widgets

The banner right sidebar SHALL display weather and music playlist widgets.

#### Scenario: Weather widget

- **WHEN** the banner area is displayed
- **THEN** the right column shows a weather widget
- **AND** the weather widget shows location ("United States"), date, temperature ("28°C"), and weather description

#### Scenario: Music playlist widget

- **WHEN** the banner area is displayed
- **THEN** the right column shows a music playlist widget below the weather widget
- **AND** the music playlist shows 3 numbered list items

### Requirement: Navigation bar

The navbar SHALL be sticky with dark background and active link highlighting.

#### Scenario: Navbar display and interaction

- **WHEN** the page is loaded
- **THEN** a sticky navbar appears with dark #252525 background
- **AND** the navbar shows a logo (diamond icon + "SHATTER" name)
- **AND** the navbar shows nav links: Home, Archive, Category, Pages, Contact
- **AND** the active nav link is highlighted in red #ff1857
- **AND** a search icon/button is displayed on the right

#### Scenario: Search toggle

- **WHEN** the user clicks the search icon
- **THEN** a search input is revealed

#### Scenario: Mobile hamburger menu

- **WHEN** the user views on mobile
- **THEN** the navbar shows a hamburger menu
- **AND** clicking the hamburger toggles the mobile nav links

### Requirement: Editors' Picks section

The Editors' Picks section SHALL display 4 horizontal post cards.

#### Scenario: Editors' Picks rendering

- **WHEN** the user views the Editors' Picks section
- **THEN** a heading "Editors' Picks" is displayed
- **AND** 4 horizontal post cards are shown in a row
- **AND** each card has a thumbnail image on the left
- **AND** each card shows a category tag, date, and headline on the right
- **AND** the section background is #f9f9ff

### Requirement: International News section

The International News section SHALL use an 8/4 column split layout.

#### Scenario: International News content and sidebar

- **WHEN** the user views the International News section
- **THEN** a heading "International News" is displayed
- **AND** the section uses an 8/4 column split (content left, sidebar right)
- **AND** the left column shows a large featured post with full-width image, category tag, date, comment count, headline, and excerpt
- **AND** the left column shows 2 smaller posts below
- **AND** the right column shows a sidebar with category links

### Requirement: Technology News section

The Technology News section SHALL display 4 post cards in a grid.

#### Scenario: Technology News grid

- **WHEN** the user views the Technology News section
- **THEN** a heading "Technology News" is displayed
- **AND** 4 post cards are shown in a row
- **AND** each card has an image, category tag, date, and headline
- **AND** some cards have a play button overlay on the image

### Requirement: Exclusive Videos section

The Exclusive Videos section SHALL display a carousel of large video post cards.

#### Scenario: Exclusive Videos carousel

- **WHEN** the user views the Exclusive Videos section
- **THEN** a heading "Exclusive Videos" is displayed
- **AND** a carousel of large video post cards is shown
- **AND** each card has a full-bleed image with dark overlay
- **AND** each card shows category tag, date, comment count, and headline
- **AND** carousel navigation arrows are present

### Requirement: Popular News Feed section

The Popular News Feed section SHALL display 4 post cards in a grid.

#### Scenario: Popular News grid

- **WHEN** the user views the Popular News Feed section
- **THEN** a heading "Popular News Feed" is displayed
- **AND** 4 post cards are shown in a row
- **AND** each card has an image, category tag, date, and headline

### Requirement: Footer

The footer SHALL display 3 columns with dark background and Component Dock link.

#### Scenario: Footer layout and content

- **WHEN** the user views the footer
- **THEN** the footer has a dark #252525 background
- **AND** the footer shows 3 columns
- **AND** the first column shows the logo and a description paragraph
- **AND** the second column shows quick links in 2 sub-columns
- **AND** the third column shows "Most Viewed News" with thumbnail + headline cards

#### Scenario: Footer Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ is displayed with text "Component Dock"

### Requirement: Responsive layout

The template SHALL be responsive across all breakpoints.

#### Scenario: Mobile responsive behavior

- **WHEN** the user views on mobile
- **THEN** the 3-column banner collapses to a single column
- **AND** the editors' picks stack vertically
- **AND** the 4-column grids collapse to 2 columns or 1 column
- **AND** the navbar shows a hamburger menu

### Requirement: Placeholder images

All images SHALL use deterministic picsum.photos placeholders.

#### Scenario: Placeholder image seeding

- **WHEN** any post card or section shows an image
- **THEN** the image is a deterministic placeholder from picsum.photos
- **AND** the seed is based on the template name

### Requirement: No ColorLib references in app code

No file in apps/shatter/ SHALL contain any ColorLib reference.

#### Scenario: No ColorLib strings

- **WHEN** any file in apps/shatter/ is inspected
- **THEN** no file contains the string "colorlib" or "preview.colorlib.com"
- **AND** no comment references the ColorLib source

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/shatter/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/shatter/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Full magazine layout on page load — they see a banner area with a 3-column grid (left posts, center featured, right widgets)
- [ ] Banner hero left column — 3 small post cards are stacked vertically in the left column
- [ ] Banner hero center carousel — the center column shows a large featured post
- [ ] Banner hero right sidebar widgets — the right column shows a weather widget
- [ ] Navigation bar — a sticky navbar appears with dark #252525 background
- [x] Editors' Picks section — a heading "Editors' Picks" is displayed
- [x] International News section — a heading "International News" is displayed
- [x] Technology News section — a heading "Technology News" is displayed
- [x] Exclusive Videos section — a heading "Exclusive Videos" is displayed
- [x] Popular News Feed section — a heading "Popular News Feed" is displayed
- [ ] Responsive layout — the 3-column banner collapses to a single column
- [ ] Placeholder images — the image is a deterministic placeholder from picsum.photos

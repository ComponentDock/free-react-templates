---
name: roster
description: >
  Recreation of ColorLib "Listco" (https://colorlib.com/wp/template/listco/) —
  a directory listing landing page with hero search, city cards, directory
  carousel, how-it-works steps, and footer.
stack:
  react: 19
  tailwind: 4
  typescript: strict
---

# Template: Roster (Directory)

## Purpose

Roster is a directory listing landing page template that recreates the ColorLib
Listco design. It provides a hero search section, popular city cards, a
scrollable directory listing carousel, a how-it-works explainer, new listings,
and a branded footer linking to Component Dock.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/listco/ (HTTP 200, 34,047 B, fetched 2026-10-23) and its theme stylesheet `theme/listco/assets/css/style.min.css` (92,944 B, sha256 `7082374a35bf…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#b367ff` | 40 declarations — `.btn`, `.boxed-btn` |
| Other chromatic values | `#1f2b7b`, `#415094`, `#4cd3e3` | `#1f2b7b` × 16 (.contact-info .media-body h3 a:hover); `#415094` × 7 (.genric-btn.default); `#4cd3e3` × 5 (.genric-btn.success) |
| Surface | `#ffffff` | 90 declarations — `.boxed-btn`, `.boxed-btn:hover` |
| Ink / dark surface | `#000000` | 9 declarations — `.black-btn`, `.main-menu2 ul li a` |
| Typeface | `Rubik, sans-serif` (12 rules — .boxed-btn) | `font-family` declaration in the theme sheet |
| Body type | `font-weight: 400; font-size: 16px` | `body{…}` rule |
| Radii | `50%`, `3px`, `8px` | `50%` (#scrollUp); `3px` (.genric-btn.radius); `8px` (.slider-area form.search-box) |

Palette in order of use: `#ffffff` ×90, `#b367ff` ×40, `#f9f9ff` ×27, `#1f2b7b` ×16, `#999999` ×10, `#000000` ×9.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with logo, navigation, login, and add-listing button

The page renders a fixed navbar with the "Roster" logo, navigation links
(Home, Categories, Explore, Contact), a Login link, and an "Add Listing"
button. The navbar transitions from transparent to solid white on scroll.

#### Scenario: Navbar renders all elements

- **GIVEN** the page loads
- **THEN** the navbar displays the logo text "Roster"
- **AND** navigation links for Home, Categories, Explore, and Contact are visible
- **AND** a "Log in" link is visible
- **AND** an "Add Listing" button is visible

#### Scenario: Navbar toggles dark mode

- **GIVEN** the page loads in light mode
- **WHEN** I click the dark mode toggle button
- **THEN** the html element has class "dark"

### Requirement: Hero section with search form

The hero section displays a background image with dark overlay, a heading
"Explore Your City", a subtitle, a search form with text input, category
dropdown, and search button, plus category icon shortcuts.

#### Scenario: Hero renders heading and search form

- **GIVEN** the page loads
- **THEN** a heading "Explore Your City" is displayed
- **AND** a search input, category select, and search button are visible

#### Scenario: Search form is interactive

- **GIVEN** the page loads
- **WHEN** I type "restaurant" in the search input
- **THEN** the input displays "restaurant"
- **WHEN** I select "Restaurants" from the category dropdown
- **THEN** the dropdown shows "Restaurants"

### Requirement: Popular locations section with city cards

The page displays an "Explore Top Cities" section with 6 city cards in a
responsive grid. Each card shows a city image, name, and listing count badge.

#### Scenario: All city cards render

- **GIVEN** the page loads
- **THEN** the "Explore Top Cities" heading is visible
- **AND** 6 city cards are displayed (New York, Paris, Rome, Sydney, Tokyo, London)
- **AND** each card shows a listing count (e.g. "65+ Listings")

### Requirement: Popular directory carousel

The page displays a "Popular Directory" section with scrollable listing cards.
Each card shows an image with overlay, price badge, status, title, description,
category, and a favorite button.

#### Scenario: Directory cards render

- **GIVEN** the page loads
- **THEN** the "Popular Directory" heading is visible
- **AND** 5 directory cards are displayed with titles and price badges

#### Scenario: Favorite button is clickable

- **GIVEN** the page loads
- **WHEN** I click the favorite button on "Urban Bites"
- **THEN** the button remains in the document

### Requirement: How it works section with steps

The page displays a "How It Works" section with a CTA button and 3 numbered
steps explaining the directory process.

#### Scenario: Steps render correctly

- **GIVEN** the page loads
- **THEN** the "How It Works" heading is visible
- **AND** 3 steps are displayed (Find Businesses, Review Listings, Make a Reservation)
- **AND** step numbers 01, 02, 03 are visible

### Requirement: New directory section

The page displays a "New Directory" section with a carousel of new listing cards.

#### Scenario: New directory cards render

- **GIVEN** the page loads
- **THEN** the "New Directory" heading is visible
- **AND** 5 new directory cards are displayed

### Requirement: Footer with Component Dock link

The footer renders on a dark background with logo, contact info, newsletter
signup, social links, and a "Component Dock" attribution link.

#### Scenario: Footer links to Component Dock

- **GIVEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"
- **AND** the link opens in a new tab

#### Scenario: Footer newsletter form is interactive

- **GIVEN** the page loads
- **WHEN** I type an email in the newsletter input
- **THEN** the input displays the typed email
- **WHEN** I submit the newsletter form
- **THEN** the page does not navigate (form submission is prevented)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/roster/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/roster/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with logo, navigation, login, and add-listing button — the navbar displays the logo text "Roster"
- [x] Hero section with search form — a heading "Explore Your City" is displayed
- [x] Popular locations section with city cards — the "Explore Top Cities" heading is visible
- [x] Popular directory carousel — the "Popular Directory" heading is visible
- [x] How it works section with steps — the "How It Works" heading is visible
- [x] New directory section — the "New Directory" heading is visible

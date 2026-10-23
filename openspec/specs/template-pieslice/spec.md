# Template: Pieslice (Restaurant)

## Purpose

Pieslice is a pizza restaurant landing page template that recreates the ColorLib "Luigi's" design (https://colorlib.com/wp/template/luigis/) with a React 19 + Vite + Tailwind CSS 4 + TypeScript stack. It features a hero section, our story, best sellers grid, filterable menu, and a branded footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/luigis/ (HTTP 200, 32,199 B, sha256 `3cbb85c8cc26…`, fetched 2026-10-23) and its design stylesheet(s) `styles.css`, `inline-style-0`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ef0031` | 15 declarations — `.bg-primary`, `.color-primary` |
| Other chromatic values | `#1f8330` (5), `#ef002e` (3), `#ed0037` (2) | secondary hues in the same sheet |
| Surface | `#ffffff` | 26 declarations — `header`, `header .main-menu li.drop-down > ul.drop-down-menu` |
| Ink / dark surface | `#000000` | 8 declarations — `.bg-black`, `.bg-grad-layer-6:after` |
| Typeface | `Open Sans` (2 rules — `.radial-progress .progress-title`)<br>`beyond_the_mountainsregular` (1 rule — `h1, h2, h3, .font-beyond`) | `font-family` declarations in the design sheet |
| Radii | `2px`, `70px`, `80px`, `3px` | `2px` (`.btn-brdr-grey`); `70px` (`.circle-70`); `80px` (`.circle-80`); `3px` (`.br-3`) |
| Gradients | 1 declaration | `.bg-grad-layer-6:after` |

Palette in order of use: `#ffffff` ×26, `#ef0031` ×15, `#aaaaaa` ×9, `#111111` ×9, `#000000` ×8, `#cccccc` ×5, `#1f8330` ×5, `#ef002e` ×3.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar renders navigation and phone order

Users SHALL see a fixed navbar with the site logo, navigation links (Home, About, Menu, Best Sellers, Contact), and a phone order button.

#### Scenario: Desktop navbar displays all links

- **WHEN** the user loads the page on desktop
- **THEN** the navbar shows the logo "Pieslice"
- **AND** all five navigation links are visible
- **AND** the phone order button with number is visible

#### Scenario: Mobile hamburger toggle

- **WHEN** the user is on a mobile viewport
- **AND** clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking a nav link closes the menu

### Requirement: Hero section displays restaurant branding

Users SHALL see a full-width hero with a background image, subtitle, main heading, and a call-to-action button.

#### Scenario: Hero content renders correctly

- **WHEN** the user loads the page
- **THEN** the hero shows "Best in Town" subtitle
- **AND** shows "Pizza & Pasta" as the main heading
- **AND** shows a "See Today's Menu" button linking to #menu

### Requirement: Our Story section shows two-column text

Users SHALL see a two-column story section with a heading and descriptive paragraphs.

#### Scenario: Story content renders

- **WHEN** the user scrolls to the About section
- **THEN** the "Our Story" heading is visible
- **AND** two columns of text are displayed

### Requirement: Best Sellers shows product cards with badges

Users SHALL see an 8-card grid of best-selling items with names, prices, and order buttons. Some items SHALL have ribbon badges.

#### Scenario: Product cards render

- **WHEN** the user views the Best Sellers section
- **THEN** 8 product cards are displayed
- **AND** each card has a name, price, and "Order Now" button

#### Scenario: Ribbon badges display

- **WHEN** the Best Sellers section renders
- **THEN** OFFER, SPECIALITY, and PLUS SIZE badges are visible on their respective items

### Requirement: Our Menu provides category filtering

Users SHALL see a tabbed menu with category filters (All, Pizza, Pasta, Salads, Desserts) and a 2-column grid of menu items.

#### Scenario: All items visible by default

- **WHEN** the user loads the page
- **THEN** all 8 menu items are visible

#### Scenario: Tab filtering works

- **WHEN** the user clicks the "Pizza" tab
- **THEN** only pizza category items are shown
- **AND** items from other categories are hidden
- **WHEN** the user clicks the "All" tab
- **THEN** all 8 menu items are visible again

### Requirement: Footer shows contact info and Component Dock attribution

Users SHALL see a footer with address, phone, email, social media links, and a Component Dock attribution link.

#### Scenario: Contact information renders

- **WHEN** the user scrolls to the footer
- **THEN** the address, phone number, and email are displayed

#### Scenario: Component Dock link is present

- **WHEN** the footer renders
- **THEN** at least one link to componentdock.com is visible with "Component Dock" text

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/pieslice/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pieslice/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders navigation and phone order — the navbar shows the logo "Pieslice"
- [x] Hero section displays restaurant branding — the hero shows "Best in Town" subtitle
- [x] Our Story section shows two-column text — the "Our Story" heading is visible
- [ ] Best Sellers shows product cards with badges — 8 product cards are displayed
- [ ] Our Menu provides category filtering — all 8 menu items are visible

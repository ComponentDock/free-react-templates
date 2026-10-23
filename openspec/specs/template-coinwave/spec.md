# Template: CoinWave (Cryptocurrency Landing Page)

## Purpose

A cryptocurrency / bitcoin landing page template. Recreation of ColorLib "Bitcoin".

- **Source slug:** `bitcoin`
- **ColorLib page:** https://colorlib.com/wp/template/bitcoin/
- **Preview URL:** https://preview.colorlib.com/theme/bitcoin/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/coinwave`
- **Deploy:** `coinwave.free.componentdock.com`

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bitcoin/ (HTTP 200, 26,745 B, fetched 2026-10-23) and its theme stylesheet `theme/bitcoin/css/main.css` (29,264 B, sha256 `fc000dbc5491…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f78f3d` | 35 declarations — `b`, `sup` |
| Other chromatic values | `#4cd3e3`, `#38a4ff`, `#f44a40` | `#4cd3e3` × 7 (.genric-btn.success); `#38a4ff` × 6 (.genric-btn.info); `#f44a40` × 6 (.genric-btn.danger) |
| Surface | `#ffffff` | 58 declarations — `.text-white`, `.sample-text-area` |
| Ink / dark surface | `#222222` | 17 declarations — `h1`, `h2` |
| Typeface | `"Poppins", sans-serif` (3 rules — body)<br>`FontAwesome` (1 rule — .sf-arrows .sf-with-ul:after) | `font-family` declarations in the theme sheet |
| Body type | `color: #777; font-size: 14px; font-weight: 300; line-height: 1.625em` | `body{…}` rule |
| Radii | `3px`, `8px`, `8.5px` | `3px` (.genric-btn.radius); `8px` (.primary-radio); `8.5px` (.default-switch) |

Palette in order of use: `#ffffff` ×58, `#f78f3d` ×35, `#f9f9ff` ×29, `#222222` ×17, `#4cd3e3` ×7, `#38a4ff` ×6.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Fixed header with navigation

Users SHALL see a fixed header with the CoinWave logo and navigation links.

#### Scenario: Header renders with nav links

- **WHEN** the user visits the CoinWave homepage
- **THEN** a logo "CoinWave" is visible in the header
- **AND** navigation links "Home", "Convert", "Feature", "Price", "Blog", "Pages" are present

#### Scenario: Header scroll effect

- **WHEN** the user is at the top of the page and scrolls down
- **THEN** the header background becomes semi-transparent dark

#### Scenario: Mobile navigation

- **WHEN** the user is on a mobile viewport and taps the hamburger toggle
- **THEN** a slide-in mobile navigation panel appears

### Requirement: Hero banner section

Users SHALL see a hero section with a prominent price display and CTA.

#### Scenario: Hero content displays

- **WHEN** the user visits the homepage
- **THEN** a label "Currently Purchase Rate" is visible
- **AND** a large price "$12,356" is displayed prominently
- **AND** a "Buy Bitcoin" call-to-action button is visible

### Requirement: Currency converter section

Users SHALL see a converter section that overlaps the banner.

#### Scenario: Converter form displays

- **WHEN** the user scrolls to the converter section
- **THEN** a heading "The Currency Converter" is visible
- **AND** input fields for BTC and USD values are visible

### Requirement: Services section

Users SHALL see 3 service cards describing Bitcoin features.

#### Scenario: Service cards display

- **WHEN** the user scrolls to the services section
- **THEN** 3 service cards are visible with titles "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", and "Send & Receive Bitcoin"

### Requirement: About section

Users SHALL see an about section with a dark background.

#### Scenario: About section layout

- **WHEN** the user scrolls to the about section
- **THEN** a heading "Exchange Bitcoin is not that tough Anymore" is visible
- **AND** descriptive text is shown

### Requirement: Features section

Users SHALL see 6 feature items in a grid.

#### Scenario: Feature grid displays

- **WHEN** the user scrolls to the features section
- **THEN** 6 feature items are displayed with titles including "Expert Technicians" and "Professional Service"

### Requirement: Stats section

Users SHALL see a stats section with a chart and CTA.

#### Scenario: Stats section displays

- **WHEN** the user scrolls to the stats section
- **THEN** a heading "Ups and Downs of Bitcoin (Realtime)" is visible
- **AND** a "View Details" button is present

### Requirement: Call to action section

Users SHALL see an orange gradient CTA section.

#### Scenario: CTA section displays

- **WHEN** the user scrolls to the call-to-action section
- **THEN** a heading "Huge Transaction in last Week" is visible
- **AND** a "Buy Bitcoin Now!" button is present

### Requirement: Pricing section

Users SHALL see 3 pricing cards.

#### Scenario: Pricing cards display

- **WHEN** the user scrolls to the pricing section
- **THEN** 3 pricing cards are shown with titles "01 Ripple", "01 Ethereum", and "01 Bitcoin"

### Requirement: Blog section

Users SHALL see 3 blog cards.

#### Scenario: Blog cards display

- **WHEN** the user scrolls to the blog section
- **THEN** 3 blog cards are shown with author names

### Requirement: Footer with Component Dock link

Users SHALL see a footer with newsletter, social icons, and Component Dock attribution.

#### Scenario: Footer layout

- **WHEN** the user scrolls to the footer
- **THEN** a "Top Products" column is visible
- **AND** a "Newsletter" section with email input is present
- **AND** social media icons are present
- **AND** a link to "https://www.componentdock.com/" branded as "Component Dock" is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/coinwave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/coinwave/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Fixed header with navigation — a logo "CoinWave" is visible in the header
- [x] Hero banner section — a label "Currently Purchase Rate" is visible
- [x] Currency converter section — a heading "The Currency Converter" is visible
- [x] Services section — 3 service cards are visible with titles "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", and "Send & Receive Bitcoin"
- [ ] About section — a heading "Exchange Bitcoin is not that tough Anymore" is visible
- [x] Features section — 6 feature items are displayed with titles including "Expert Technicians" and "Professional Service"
- [x] Stats section — a heading "Ups and Downs of Bitcoin (Realtime)" is visible
- [x] Call to action section — a heading "Huge Transaction in last Week" is visible
- [x] Pricing section — 3 pricing cards are shown with titles "01 Ripple", "01 Ethereum", and "01 Bitcoin"
- [ ] Blog section — 3 blog cards are shown with author names

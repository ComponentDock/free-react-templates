# Template: Dwellix (Real Estate Listing)

> Recreation of ColorLib "Rehomes" (https://colorlib.com/wp/template/rehomes/)

## Purpose

A real estate property listing template with search functionality, property
cards, category browsing, why-choose-us features, blog posts, and a newsletter
footer. Lime-green accent (`#92c800`) as a fill on light surfaces, its darker
`#507000` shade for text and focus rings, Lato typeface.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/rehomes/ (HTTP 200, 37,234 B, sha256 `7deeb2c1ccb2…`, fetched 2026-10-23) and its design stylesheet(s) `style.min.css`, `reveal.min.css`, `mobile-nav.min.css`, `select.min.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand lime (fill) | `#92c800` | 44 declarations — `.rehomes-btn`, `button.mfp-arrow`, `.partner-area` band background, `.single-choose-us-content:hover`, `.slider-range .ui-widget-header`, `.newsletter-submit`, `.rehomes-search-form .form-control:focus` — every **painted** accent (button fills, hover fills, band background, slider track) |
| Brand lime (text / contrast variant) | `#507000` | 49 declarations — the darker shade the demo uses for **text and rings on light surfaces**: `.section-heading :is(h2,.heading-h2) span`, `.classynav ul li.active a`, links/icons on hover, `button:focus-visible { outline: 3px solid #507000 }`. Never a fill: choosing it as the brand colour paints the page olive |
| Other chromatic values | `#2a303b` (33), `#1b2600` (8), `#252525` (6) | secondary hues in the same sheet |
| Surface | `#ffffff` | 76 declarations — `.mfp-image-holder .mfp-close,.mfp-iframe-holder .mfp-close`, `.rehomes-btn` |
| Ink / dark surface | `#000000` | 18 declarations — `.bg-gradient-overlay:after`, `.bg-overlay:after` |
| Typeface | **`Lato, sans-serif`** (2 rules — `:is(h1,.heading-h1),:is(h2,.heading-h2),…` and the button/label set). The sheet also carries one **malformed** declaration, `font-family:"object-fit: cover"` on `.jarallax>.jarallax-img` — that is a broken rule in the source, not a face; never load it | `font-family` declarations in the design sheet; the page links no Google Fonts, so ship Lato via `<link>` |
| Radii | `5px`, `2px`, `50%`, `4px` | `5px` (`.bg-gradient-overlay:after`); `2px` (`.main-header-area .contact-btn a`); `50%` (`.single-footer-widget .nl-form button`); `4px` (`.classy-navbar-toggler`) |
| Gradients | 5 declarations | `.bg-gradient-overlay:after`, `.single-categories-property-area.bg-gradient-overlay:after` |

Palette in order of use (root `style.min.css?v=3.0.1`, 85,564 B, 898 rules; hex
occurrences): `#fff` ×81, `#507000` ×49, `#92c800` ×44, `#2a303b` ×33,
`#555d69` ×26, `#ebebeb` ×15, `#636a76` ×12, `#000` ×8, `#f5f8fa` ×8,
`#1b2600` ×8. The two limes are not interchangeable: `#92c800` is the demo's
fill colour, `#507000` is its text/contrast variant added by the rebuilt sheet.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Top header with contact info and social links

The template SHALL display a top header bar with email, phone number, and social media icons.

#### Scenario: Top header renders contact info

- **WHEN** the page loads
- **THEN** the email address "info@componentdock.com" is visible
- **AND** the phone number "(12) 345 6789" is visible

#### Scenario: Top header renders social icons

- **WHEN** the page loads
- **THEN** Facebook, Twitter, Instagram, and LinkedIn icons are visible

### Requirement: Navigation bar with logo and menu

The template SHALL display a sticky navigation bar with the DWELLIX logo, navigation links, and a Contact Us button.

#### Scenario: Navbar renders logo and links

- **WHEN** the page loads
- **THEN** the DWELLIX logo is visible
- **AND** navigation links (Home, Pages, Rent, Agents, About, Blog) are visible

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the viewport is mobile and the user clicks the hamburger icon
- **THEN** the mobile menu opens with all navigation links

### Requirement: Property search bar with filters

The template SHALL display a search form with dropdown filters and a search button.

#### Scenario: Search form renders all filters

- **WHEN** the page loads
- **THEN** 6 filter dropdowns (Location, Types, City, Bedrooms, Bathroom, Price Range) are visible
- **AND** a Search button is visible

#### Scenario: Search form does not navigate on submit

- **WHEN** the user clicks the Search button
- **THEN** the form submission is prevented (no page navigation)

### Requirement: Featured property listings

The template SHALL display 6 property cards in a 3-column grid with images, details, and pricing.

#### Scenario: All property cards render

- **WHEN** the page loads
- **THEN** 6 property cards are displayed with titles, locations, and seller info

#### Scenario: Property cards show pricing

- **WHEN** the page loads
- **THEN** each property card shows a price and a "For Rent" or "For Sale" badge

### Requirement: Why Choose Us section

The template SHALL display 3 feature items with icons and descriptions.

#### Scenario: Feature items render

- **WHEN** the page loads
- **THEN** 3 feature items are visible: Find Your Home, Transportation Support, Save Your Money

### Requirement: Property categories section

The template SHALL display 5 category cards in an asymmetric grid with gradient overlays.

#### Scenario: Category cards render

- **WHEN** the page loads
- **THEN** 5 category cards are visible with property counts, names, and starting prices

### Requirement: Call-to-action banner

The template SHALL display a CTA banner with a background image, heading, and app store buttons.

#### Scenario: CTA banner renders

- **WHEN** the page loads
- **THEN** the heading "Download app & join now!" is visible
- **AND** App Store and Google Play buttons are visible

### Requirement: Latest news blog section

The template SHALL display 3 blog post cards with images, titles, and metadata.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** 3 blog post cards are visible with titles, authors, dates, and comment counts

### Requirement: Partner logos section

The template SHALL display a row of 5 partner logo placeholders.

#### Scenario: Partner logos render

- **WHEN** the page loads
- **THEN** 5 partner logo images are visible

### Requirement: Footer with brand, contact, cities, newsletter

The template SHALL display a 4-column footer with brand info, contact details, property cities, and a newsletter form. The copyright line MUST link to Component Dock.

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** brand section, contact info, property cities list, and newsletter form are visible

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the copyright line contains a link to https://www.componentdock.com/

#### Scenario: Newsletter form does not navigate on submit

- **WHEN** the user submits the newsletter form
- **THEN** the form submission is prevented (no page navigation)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/dwellix/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/dwellix/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation bar with logo and menu — the DWELLIX logo is visible
- [ ] Property search bar with filters — 6 filter dropdowns (Location, Types, City, Bedrooms, Bathroom, Price Range) are visible
- [ ] Featured property listings — 6 property cards are displayed with titles, locations, and seller info
- [ ] Why Choose Us section — 3 feature items are visible: Find Your Home, Transportation Support, Save Your Money
- [ ] Property categories section — 5 category cards are visible with property counts, names, and starting prices
- [x] Call-to-action banner — the heading "Download app & join now!" is visible
- [ ] Latest news blog section — 3 blog post cards are visible with titles, authors, dates, and comment counts
- [ ] Partner logos section — 5 partner logo images are visible

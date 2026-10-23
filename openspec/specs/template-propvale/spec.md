# Template: Propvale (Real Estate)

## Purpose

Propvale is a free real estate website template that recreates the ColorLib "Real Estate 2" design (https://colorlib.com/wp/template/real-estate-2/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It provides a property listing landing page with search, featured properties, FAQ, testimonials, agent profiles, and a call-to-action section.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/realestate2/ (HTTP 200, 68,636 B, fetched 2026-10-23) and its theme stylesheet `theme/realestate2/css/style.css` (183,542 B, sha256 `c44673d7754f…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#fdae5c` | 45 declarations — `.boxed-btn`, `.boxed-btn:hover` |
| Other chromatic values | `#001d38`, `#ff5e13`, `#fd8e5e` | `#001d38` × 22 (h1); `#ff5e13` × 19 (.contact-info .media-body h3 a:hover); `#fd8e5e` × 14 (.owl-carousel:hover .owl-nav div:hover) |
| Surface | `#ffffff` | 89 declarations — `*::-moz-selection`, `.owl-carousel .owl-nav div` |
| Ink / dark surface | `#001d38` | 22 declarations — `h1`, `h2` |
| Typeface | `"Poppins", sans-serif` (7 rules — h1)<br>`'themify'` (3 rules — .slider_area .single-field.max_width .nice-select::after) | `font-family` declarations in the theme sheet |
| Radii | `50%`, `30px`, `3px` | `50%` (.owl-carousel .owl-nav div); `30px` (.boxed-btn3-line); `3px` (.genric-btn.radius) |

Palette in order of use: `#ffffff` ×89, `#fdae5c` ×45, `#f9f9ff` ×27, `#001d38` ×22, `#ff5e13` ×19, `#919191` ×16.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Top bar displays contact information

The template SHALL display a top bar with company welcome message, email, phone number, and social media icons.

#### Scenario: Top bar content

- **WHEN** the page loads
- **THEN** the top bar shows "Welcome to Propvale consulting service"
- **AND** an email icon and address are visible
- **AND** a phone icon and number are visible
- **AND** social media icons (LinkedIn, Facebook, Twitter) are visible

### Requirement: Navigation bar with logo and links

The template SHALL display a sticky navigation bar with the "Propvale." logo, navigation links, and an "Add Property" button.

#### Scenario: Navigation content

- **WHEN** the page loads
- **THEN** the navbar shows the "Propvale." logo
- **AND** navigation links (Home, Pages, Property, Blog, Contact) are visible
- **AND** an "Add Property" button is displayed

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the page switches to dark mode

### Requirement: Hero section with property search

The template SHALL display a hero section with a background image, heading "Find Your Best Property", subtitle, and a property search form with Location, Property Type, Price, Bed Room, and Bath Room fields.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero shows "Find Your Best Property" heading
- **AND** a subtitle text is displayed
- **AND** the search form has Location, Property Type, Price, Bed Room, and Bath Room fields

### Requirement: Popular properties grid

The template SHALL display 6 property cards in a 3-column grid, each with an image, tag (For Sale/For Rent), title, location, price, and stats (sqft, beds, baths).

#### Scenario: Property cards

- **WHEN** the page loads
- **THEN** 6 property cards are displayed
- **AND** each card shows an image, title, location, and price
- **AND** each card shows sqft, bed, and bath stats

### Requirement: FAQ accordion section

The template SHALL display a FAQ section with expandable/collapsible accordion items.

#### Scenario: Accordion interaction

- **WHEN** a user clicks an FAQ question
- **THEN** the answer expands
- **AND** clicking another question collapses the previous answer

### Requirement: Statistics counter section

The template SHALL display a counter section with 3 statistics on a dark background: Properties for Sale (200+), Happy Clients (300), and Years Experience (15).

#### Scenario: Counter display

- **WHEN** the page loads
- **THEN** "200+" is shown for Properties
- **AND** "300" is shown for Happy Clients
- **AND** "15" is shown for Years Experience

### Requirement: Testimonials section

The template SHALL display testimonials with quote text, author photo, name, and role, with carousel navigation.

#### Scenario: Testimonial content

- **WHEN** the page loads
- **THEN** testimonial quotes are visible
- **AND** author names and roles are displayed

#### Scenario: Testimonial navigation

- **WHEN** a user clicks the next/previous button
- **THEN** the displayed testimonial changes

### Requirement: Team/agents section

The template SHALL display 4 agent cards with photo, name, role, and social media icons.

#### Scenario: Agent cards

- **WHEN** the page loads
- **THEN** 4 agent cards are shown
- **AND** each card shows a photo, name, and role

### Requirement: Call-to-action section

The template SHALL display a CTA section with an orange gradient background, heading "Add your property for sale", subtitle, and a button.

#### Scenario: CTA content

- **WHEN** the page loads
- **THEN** the CTA shows "Add your property for sale"
- **AND** a button is displayed

### Requirement: Footer with Component Dock link

The template SHALL display a footer with contact information, service links, newsletter form, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows contact information
- **AND** service and quick links are visible
- **AND** a newsletter form is present
- **AND** a link to https://www.componentdock.com/ is displayed as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/propvale/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/propvale/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Top bar displays contact information — the top bar shows "Welcome to Propvale consulting service"
- [x] Navigation bar with logo and links — the navbar shows the "Propvale." logo
- [x] Hero section with property search — the hero shows "Find Your Best Property" heading
- [ ] Popular properties grid — 6 property cards are displayed
- [ ] FAQ accordion section — the answer expands
- [ ] Statistics counter section — "200+" is shown for Properties
- [ ] Testimonials section — testimonial quotes are visible
- [ ] Team/agents section — 4 agent cards are shown
- [x] Call-to-action section — the CTA shows "Add your property for sale"

# Template: ListNest (Directory & Listing)

## Purpose

A Directory & Listing template with hero section with search, find places, featured places, browse categories and add listing cta sections. ListNest is a single-page directory & listing template — an original React recreation of the ColorLib free "Listing" template (preview: https://preview.colorlib.com/theme/listing/ — directory/listing site), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand pink `#ff3a6d` (search button, heading underlines, CTA), hover `#f34e79`
- Dark background `#252a33` (navbar, footer)
- Light background `#f3f4f7` (featured places, add listing sections)
- Body text `#737882`, heading text `#3e434b`, muted text `#909090`
- Green rating `#46cd38`, orange rating `#ffb006`
- Typeface: Roboto (Google Fonts via `<link>`)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

ListNest lives in `apps/listnest` and uses shared components from `packages/ui`
(Button, cn).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Listing** — https://colorlib.com/wp/template/listing/
- **Preview**: `https://preview.colorlib.com/theme/listing/` — HTTP 200 on 2026-10-23, **39,079 bytes**, title `Listing — Discover Great Local Places in New York`, `<meta name="generator" content="Listing 3.0.0">`.
- **Stylesheet measured**: `css/style.min.css?v=3.0.0` — **188,216 bytes**, sha256 `6b49c637d8bb…`; plus `vendor/fontawesome/7.3.1/css/fontawesome.subset.css?v=3.0.0` (1,672 B, icons only). No webfont `<link>` — Roboto is self-hosted as six `@font-face` weights inside the sheet.
- **Measured how**: hex-literal census per sheet (count = occurrences in the sheet), then the winning rule per selector. The demo is a **3.0.0 rebuild** (`?v=3.0.0`, Bootstrap 5.3 variable layer): mismatches with the shipped app are **drift**, not prep errors. Bootstrap's own variable palette (`#007bff`×24, `#6c757d`×19, `#212529`×18, `#198754`×16, `#dc3545`×16, `#f8f9fa`×16, `#ffc107`×14) paints nothing after the theme layer and is **not** a token set.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Action crimson | `#d81b53` | 18 | `.btn-form` · `.featured-btn-wrap .btn-danger` · `.btn-contact` · `.review-btn .btn-outline-danger` · `.closed-now` · `.category-wrap:hover` |
| Action crimson (hover) | `#b8143f` | 8 | `.featured-btn-wrap .btn-danger:hover` · `.btn-outline-danger:hover` · `.listing-modal__submit` |
| Decorative pink | `#ff3a6d` | 2 | `.styled-heading h3:after` (heading underline) · `.category-img` |
| Ink | `#3e434b` | 18 | headings, `.category-block h6`, `.detail-filter-wrap p`, `.map-icon:hover` |
| Body copy | `#666a73` | 15 | `.featured-title-box ul li`, `.add-listing-wrap p`, `.map-icon`, checkboxes |
| Muted meta | `#5f6d84` | 5 | `.featured-title-box p`/`span`, `.reserve-block p`, `.review-btn span` |
| Price accent | `#8f6400` | 2 | `.featured-title-box p span` (the `$$` price level) |
| Light band | `#f3f4f7` | 1 | `.light-bg` (alternating section band) |
| Dark band | `#252a33` | 5 | `.dark-bg` (footer band) · `.is-sticky` · `.fixed` · `.map-close` |
| On-dark text | `#fff` | 75 | `.slider` H1, `.dark-bg` copy, primary button labels |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `Roboto, sans-serif`, 16 px | `body` (theme layer overrides `--bs-body-font-family`) |
| H1 (hero) | 72 px / **300** / `#fff` — 52 px then 40 px at the breakpoints | `h1,.h1` |
| H2 (section) | 47 px → 34 px | `h2,.h2` |
| Nav links | 16 px / 300 / `#fff` | `.navbar-light .navbar-nav .nav-link` |
| Wordmark | 31 px | `.navbar-brand` |
| Buttons | 18 px / 400, white on crimson | `.btn-form` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Section band | `.main-block { padding: 90px 0 }` (45px under the mobile breakpoint), alternating white / `#f3f4f7` |
| Hero | `.slider` min-height **800px** (700px mobile), cover photo centred at `75%` vertical — no scrim, no gradient |
| Radius | **3 px** on `.btn-form`, `.btn-group1`, `.btn-group2`, `.customer-content-wrap a`/`.helpful-btn`; Bootstrap's `--bs-border-radius` elsewhere |
| Buttons | `.btn-form { padding: 17px; font-size: 18px }`; `.btn-outline-light { padding: 10px 16px }`, hover flips label to `#000` with a white fill |
| Nav | `.navbar { padding: .5rem 0 }`, brand 31 px, `.btn-outline-light` "Add Listing" CTA |
| Heading underline | `.styled-heading h3:after` — a short `#ff3a6d` rule under every section title |

Section order measured in the reference DOM: skip-link → navbar (brand `Listing`, Explore / Listing / Pages dropdowns, `Add Listing`) → `.slider` (H1 "Discover great places in New York", sub-line, search) → `.main-block` "What do you need to find?" (3 category cards with counts) → `.main-block light-bg` "Featured Places" (6 cards) → `.main-block` "Browse Categories" (10 tiles) → `.main-block light-bg` "Reach millions of People" CTA → footer `.main-block dark-bg` (copyright + Colorlib credit) → `Add your business` modal form.

**Deltas vs the shipped app** (drift is not a prep error — the app is already on main):
- The app's primary `#ff3a6d` is the reference's **decorative underline** colour (2 occurrences), while the reference's **action** colour is `#d81b53` (18 occurrences, every CTA). The app carries no `#d81b53` at all.
- Body copy: app `#737882` vs reference `#666a73`; the app's `#3e434b`, `#f3f4f7` and `#252a33` match the reference exactly.
- The reference is a 3.0.0 rebuild, so the app's flat nav/search treatment is drift as much as omission.

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky dark navbar with the brand name "ListNest",
dropdown menus (Explore, Listing, Pages), static links (About, Blog), and an
"Add Listing" button. The navbar SHALL support a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "ListNest"
- **AND** it SHALL show dropdown triggers for Explore, Listing, and Pages
- **AND** it SHALL show links to About and Blog
- **AND** it SHALL show a "+ Add Listing" link

#### Scenario: Dropdown on hover

- **GIVEN** the navbar is displayed on desktop
- **WHEN** the user hovers over an Explore dropdown trigger
- **THEN** a dropdown menu SHALL appear with Action, Another action, and Something else here

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the mobile navigation menu SHALL open
- **AND** it SHALL display the same nav links as the desktop version

### Requirement: Hero section with search

The system SHALL render a full-width hero section with a background image,
heading "Discover great places in New York", subtitle, and a search form
with two inputs and a SEARCH button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "Discover great places in New York"
- **AND** it SHALL show the subtitle about eating, drinking, and shopping
- **AND** it SHALL show "Browse Popular" and "Recently Added" links

#### Scenario: Search form

- **GIVEN** the hero section is displayed
- **WHEN** the user views the search form
- **THEN** it SHALL show a search query input labeled "Search query"
- **AND** it SHALL show a location input labeled "Location"
- **AND** it SHALL show a SEARCH button

### Requirement: Find Places section

The system SHALL render a "Find Places" section with a heading and 5 category
image cards (1 tall + 2x2 grid layout) showing category names and listing counts.

#### Scenario: Category cards

- **GIVEN** the Find Places section is displayed
- **WHEN** the user views the section
- **THEN** it SHALL show the heading "What do you need to find?"
- **AND** it SHALL show 5 category cards: Nightlife, Restaurants, Outdoors, Hotels, Shopping
- **AND** each card SHALL display its listing count

### Requirement: Featured Places section

The system SHALL render a "Featured Places" section on a light background with
3 restaurant cards showing image, color-coded rating, name, type, reviews,
price, address, phone, website, open/closed status, and action icons.

#### Scenario: Place cards

- **GIVEN** the Featured Places section is displayed
- **WHEN** the user views the section
- **THEN** it SHALL show the heading "Featured Places"
- **AND** it SHALL show 3 place cards: Burger & Lobster, Joe's Shanghai, Tasty Hand-Pulled Noodles
- **AND** each card SHALL show a rating badge, address, phone, and website

#### Scenario: Open/closed status

- **GIVEN** the Featured Places section is displayed
- **WHEN** a place is closed
- **THEN** it SHALL show "CLOSED NOW" in pink text
- **AND** when a place is open it SHALL show "OPEN NOW" in green text

#### Scenario: Action buttons

- **GIVEN** a place card is displayed
- **WHEN** the user views the action icons
- **THEN** it SHALL show a Favorite (heart) button
- **AND** it SHALL show a Bookmark button

### Requirement: Browse Categories section

The system SHALL render a "Browse Categories" section with 8 category cards
showing Lucide icons and category names in a 4-column grid.

#### Scenario: Category grid

- **GIVEN** the Browse Categories section is displayed
- **WHEN** the user views the section
- **THEN** it SHALL show the heading "Browse Categories"
- **AND** it SHALL show 8 categories: Automotive, Beauty & Spa, Hotel, Restaurant, Fitness, Health, Shopping, Travel
- **AND** each category SHALL be a link

### Requirement: Add Listing CTA section

The system SHALL render an "Add Listing" call-to-action section with a heading,
description, and a pink ADD LISTING button.

#### Scenario: CTA content

- **GIVEN** the Add Listing section is displayed
- **WHEN** the user views the section
- **THEN** it SHALL show "Reach millions of People" heading
- **AND** it SHALL show a description about adding a business
- **AND** it SHALL show an "ADD LISTING" button linking to #

### Requirement: Footer

The system SHALL render a dark footer with copyright text, a Component Dock link,
and social media icons (Facebook, Twitter, Instagram).

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show copyright text with the current year and "ListNest"
- **AND** it SHALL link to https://www.componentdock.com/ labeled "Component Dock"
- **AND** it SHALL show social media icon links for Facebook, Twitter, and Instagram

### Requirement: App composition

The system SHALL compose all sections in the correct order: Navbar, Hero,
FindPlaces, FeaturedPlaces, BrowseCategories, AddListing, Footer.

#### Scenario: Section order

- **GIVEN** the app is rendered
- **WHEN** the user views the page
- **THEN** all 7 sections SHALL be present in the correct order
- **AND** the document title SHALL be "ListNest — Directory & Listing Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/listnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/listnest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — it SHALL show the brand name "ListNest"
- [x] Hero section with search — it SHALL show the heading "Discover great places in New York"
- [x] Find Places section — it SHALL show the heading "What do you need to find?"
- [x] Featured Places section — it SHALL show the heading "Featured Places"
- [x] Browse Categories section — it SHALL show the heading "Browse Categories"
- [x] Add Listing CTA section — it SHALL show "Reach millions of People" heading
- [ ] App composition — all 7 sections SHALL be present in the correct order

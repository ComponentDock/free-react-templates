# Template: Carnivor (Steakhouse Landing)

Recreation of ColorLib "Steakshop" (https://colorlib.com/wp/template/steakshop/)

## Purpose

A free, production-ready React steakhouse landing page template featuring a right-sidebar navigation, hero banner, food courses, reservation form, chef spotlight, food gallery, brand partners, and a footer with newsletter signup.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/steakshop/ (HTTP 200, 22,275 B, fetched 2026-10-23) and its theme stylesheet `theme/steakshop/css/style.css` (68,895 B, sha256 `b5e780a6556e…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f42f2c` | 35 declarations — `.blog_right_sidebar .widget_title`, `.categories_post:hover .categories_details` |
| Other chromatic values | `#f8b600`, `#4cd3e3`, `#38a4ff` | `#f8b600` × 18 (b); `#4cd3e3` × 11 (.success); `#38a4ff` × 10 (.info) |
| Surface | `#ffffff` | 88 declarations — `.primary-btn`, `.primary-btn:hover` |
| Ink / dark surface | `#222222` | 33 declarations — `h1`, `h2` |
| Typeface | `"Roboto", sans-serif` (7 rules — body)<br>`"Pacifico", cursive` (1 rule — h1) | `font-family` declarations in the theme sheet |
| Body type | `line-height: 28px; font-size: 14px; font-weight: 400; color: #777777` | `body{…}` rule |
| Radii | `3px`, `50%`, `8px` | `3px` (.radius); `50%` (.video-play-button); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×88, `#f42f2c` ×35, `#222222` ×33, `#777777` ×23, `#f8b600` ×18, `#f9f9ff` ×16.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navigation

Users SHALL see a fixed right-sidebar navigation with the brand name and links to all sections.

#### Scenario: Desktop sidebar visible

- **WHEN** the page loads on a desktop viewport
- **THEN** a right sidebar navigation is visible with links: Home, About, Menu, Book Table, Chefs, Contact

#### Scenario: Mobile hamburger toggle

- **WHEN** the page loads on a mobile viewport
- **THEN** a hamburger button is visible
- **WHEN** the user taps the hamburger button
- **THEN** the sidebar slides in and an overlay appears
- **WHEN** the user taps the overlay or presses Escape
- **THEN** the sidebar closes

### Requirement: Hero Section

Users SHALL see a full-screen hero banner with a headline, description, and call-to-action button.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** a heading with "best steaks in town" is displayed
- **AND** an "Explore Menu" CTA button links to the menu section

### Requirement: Food Courses

Users SHALL see two food course sections with images and descriptive text.

#### Scenario: Course sections render

- **WHEN** the page loads
- **THEN** two course sections are displayed with headings and food images
- **AND** a "See Full Menu" CTA button is present

### Requirement: Reservation Form

Users SHALL be able to fill out and submit a reservation form with validation.

#### Scenario: Form renders all fields

- **WHEN** the page loads
- **THEN** fields for name, email, phone, party size, date/time, and event type are displayed

#### Scenario: Validation on empty submit

- **WHEN** the user clicks "Make Reservation" without filling fields
- **THEN** validation error messages appear for required fields

#### Scenario: Successful reservation

- **WHEN** the user fills all required fields with valid data and submits
- **THEN** a confirmation message is displayed with the reservation details

### Requirement: Chef Section

Users SHALL see a chef spotlight with a portrait and specialty items.

#### Scenario: Chef content renders

- **WHEN** the page loads
- **THEN** a chef portrait image and 4 specialty item thumbnails are displayed

### Requirement: Food Gallery

Users SHALL see a grid of food photography images.

#### Scenario: Gallery renders

- **WHEN** the page loads
- **THEN** 6 food images are displayed in a responsive grid

### Requirement: Brand Partners

Users SHALL see a section listing partner brands.

#### Scenario: Brands render

- **WHEN** the page loads
- **THEN** 5 partner brand names are displayed

### Requirement: Footer

Users SHALL see a footer with quick links, contact info, social icons, newsletter signup, and a Component Dock attribution link.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** quick links, contact details, and social icons are displayed
- **AND** a newsletter email form is present
- **AND** a link to https://www.componentdock.com/ with text "Component Dock" is present

#### Scenario: Newsletter validation

- **WHEN** the user clicks Subscribe without entering an email
- **THEN** a validation error is shown

#### Scenario: Newsletter success

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a thank-you message is displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/carnivor/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/carnivor/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation — a right sidebar navigation is visible with links: Home, About, Menu, Book Table, Chefs, Contact
- [x] Hero Section — a heading with "best steaks in town" is displayed
- [ ] Food Courses — two course sections are displayed with headings and food images
- [ ] Reservation Form — fields for name, email, phone, party size, date/time, and event type are displayed
- [ ] Chef Section — a chef portrait image and 4 specialty item thumbnails are displayed
- [ ] Food Gallery — 6 food images are displayed in a responsive grid
- [ ] Brand Partners — 5 partner brand names are displayed

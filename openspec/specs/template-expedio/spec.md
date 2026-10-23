---
name: Expedio
description: Travel agency landing page template with hero, services, about, tour packages, testimonials, search form, blog, and footer
source: https://colorlib.com/wp/template/safario/
preview: https://preview.colorlib.com/theme/safario/
status: draft
---

# Template: Expedio (Business)

## Purpose

Recreation of ColorLib "Safario" — a travel agency landing page with hero, services, about, tour packages, testimonials, search form, blog, and footer sections. The original uses Roboto/Roboto Condensed fonts with a purple (#6059f6) brand color, sharp-cornered buttons, and a clean travel-themed layout.

Design tokens extracted from the original CSS:

- Fonts: Roboto (body), Roboto Condensed (headings)
- Brand: #6059f6 (purple), #7676ff (hover), #d1cff4 (light), #ebebff (lighter bg)
- Text: #2a2a2a (headings), #888888 (body), #555555 (secondary)
- Backgrounds: #f8f8ff (gray sections), #fff (white sections)
- Buttons: #6059f6 bg, white text, sharp corners

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Safario** — https://colorlib.com/wp/template/safario/
- **Preview**: https://preview.colorlib.com/theme/safario/ — HTTP 200 on 2026-10-23; measured `css/style.css` (41,540 bytes). Title served: "Safario Travel - Home".
- **Path note**: `theme/safario/css/style.css` (41,540 B) shares its basename with `vendors/linericon/style.css`; the census below is of the page's own theme sheet only, not the vendor/icon sheets.
- **Measured how**: hex-literal census of `css/style.css`; the count column is the number of literal occurrences in that sheet (smaller than the number of rules that use it when a declaration repeats the value).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Violet brand | `#6059f6` | 25 | nav hover, links, buttons, section accents |
| Mist fill | `#f0e9ff` | 13 | `.form-control` fill and `.widget_title::after` rule |
| Ink | `#2a2a2a` | 7 | `h1`–`h6` |
| Body grey | `#888888` | 15 | `body` copy, blog card meta |
| Muted | `#999999` | 17 | search-form placeholders and labels |
| Paper | `#f8f8ff` | 3 | page tint |
| Cloud | `#ebebff` | 1 | band tint |
| Gradient stop | `#7676ff` | 1 | lightest violet stop |
| Gradient stop | `#d1cff4` | 1 | muted violet stop |

### Typography

| Element | Family | Evidence |
| ------- | ------ | -------- |
| Body | `Roboto` | `body { font-family: "Roboto", sans-serif; font-size: 15px }` |
| Headings | `Roboto Condensed` | one headings declaration |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radii | theme `5px` (4 — form controls), `12px` (2), `20px` (1), `50%` (4), plus the Bootstrap `.25rem` (20) |
| Rhythm | `hero-banner.magic-ball` -> white sections -> `bg-gray` alternating bands |
| Buttons | square-ish 5px controls, violet fills, `f0e9ff` fields |

### Section order (shipped app, 1:1 with the reference)

`Navbar -> Hero -> Services -> About -> Tours -> Testimonials -> SearchPackage -> Blog -> Footer`

Reference bands: hero-banner -> services -> about (bg-gray) -> tours -> testimonials -> blog (bg-gray) -> footer.

### Delta vs shipped app

- The app's brand violet matches the reference exactly (`--color-primary-500 #6059f6`, 25 occurrences).
- `#f0e9ff` (the reference's field fill) and `#999999` (search placeholders) are not tokenized in `apps/expedio`, which carries `--color-mist #f8f8ff` and `--color-smoke #888888` instead.
- Section order matches; the app adds the `SearchPackage` band the reference keeps inside the search bar.

## Requirements

### Requirement: Navbar renders with brand and navigation

The page SHALL display a navigation bar with the brand name "Expedio" and links for Home, About, Packages, Blog, Contact, plus a "Get Started" CTA button.

#### Scenario: Brand and nav links visible

- **WHEN** the user views the page
- **THEN** the navbar shows "Expedio" brand text
- **AND** navigation links for Home, About, Packages, Blog, Contact are present
- **AND** a "Get Started" button is visible

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu opens
- **AND** clicking close hides the mobile menu

### Requirement: Hero section displays travel headline

The hero SHALL show "Travel More To Discover Yourself" with description text, a CTA button, a hero image, and badge overlays.

#### Scenario: Hero content renders

- **WHEN** the user views the hero section
- **THEN** the headline "Travel More To Discover Yourself" is displayed
- **AND** a "Get Started" CTA link is present
- **AND** a hero image with badge overlays (500+ Destinations, Guided Tours) is shown

### Requirement: Services section shows three service cards

The services section SHALL display "Our Popular Services" heading with three service cards (Hotel Booking, Flight Booking, Destination Booking) each with an icon, title, and description.

#### Scenario: Three service cards render

- **WHEN** the user scrolls to the services section
- **THEN** "Our Popular Services" heading is visible
- **AND** three cards are displayed with titles "Hotel Booking", "Flight Booking", "Destination Booking"
- **AND** each card has a description text

### Requirement: About section shows exploration text

The about section SHALL display an image alongside text about exploration with a "Learn More" button.

#### Scenario: About content renders

- **WHEN** the user scrolls to the about section
- **THEN** the heading "Exploration is really the essence of the human spirit" is visible
- **AND** a "Learn More" button is present
- **AND** a travel exploration image is displayed

### Requirement: Tours section shows tour package cards

The tours section SHALL display "We offer worldwide tour plan recently" heading with tour cards showing destination names, durations, and prices.

#### Scenario: Tour cards render with pricing

- **WHEN** the user scrolls to the tours section
- **THEN** four tour cards are displayed (Paris Tour, Bali Escape, Tokyo Adventure, Santorini Retreat)
- **AND** each card shows its price ($65/day, $85/day, $95/day, $110/day)
- **AND** each card shows its duration

### Requirement: Testimonials section shows client quotes

The testimonials section SHALL display "Our client says" heading with testimonial cards containing avatar, name, role, and quote text.

#### Scenario: Testimonial cards render

- **WHEN** the user scrolls to the testimonials section
- **THEN** three testimonial cards are displayed
- **AND** each card shows the client name, role, and testimonial text
- **AND** each card has an avatar image

### Requirement: Search Package form has all fields

The search section SHALL display a search form with text input, category select, duration select, date input, price range select, and a "Search Package" submit button.

#### Scenario: Search form renders with all fields

- **WHEN** the user scrolls to the search section
- **THEN** a text input with placeholder "Where do you want to go?" is shown
- **AND** dropdowns for Category, Tour duration, and Price range are present
- **AND** a date picker input is available
- **AND** a "Search Package" submit button is present

#### Scenario: Form fields are interactive

- **WHEN** the user selects options in the form fields
- **THEN** the selected values are updated
- **AND** the form can be submitted without errors

### Requirement: Blog section shows three blog posts

The blog section SHALL display "From our Blog" heading with three blog post cards each having an image, title, date, comment count, and excerpt.

#### Scenario: Blog cards render

- **WHEN** the user scrolls to the blog section
- **THEN** three blog post cards are displayed
- **AND** each card shows a title, date, comment count, and description
- **AND** each card has a blog post image

### Requirement: Footer links to Component Dock

The footer SHALL contain an "About Agency" section, "Navigation Links", "Newsletter" with email form, "Follow Us" social section, and a copyright line with a link to componentdock.com.

#### Scenario: Footer renders all sections

- **WHEN** the user scrolls to the footer
- **THEN** "About Agency", "Navigation Links", "Newsletter", and "Follow Us" sections are visible
- **AND** a link to "https://www.componentdock.com/" with text "Component Dock" is present
- **AND** a copyright line with "Expedio" is shown

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/expedio/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/expedio/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders with brand and navigation — the navbar shows "Expedio" brand text
- [x] Hero section displays travel headline — the headline "Travel More To Discover Yourself" is displayed
- [x] Services section shows three service cards — "Our Popular Services" heading is visible
- [x] About section shows exploration text — the heading "Exploration is really the essence of the human spirit" is visible
- [ ] Tours section shows tour package cards — four tour cards are displayed (Paris Tour, Bali Escape, Tokyo Adventure, Santorini Retreat)
- [ ] Testimonials section shows client quotes — three testimonial cards are displayed
- [x] Search Package form has all fields — a text input with placeholder "Where do you want to go?" is shown
- [ ] Blog section shows three blog posts — three blog post cards are displayed

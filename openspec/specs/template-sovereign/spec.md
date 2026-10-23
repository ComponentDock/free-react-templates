# Template: Sovereign (Hotel Booking Landing)

## Purpose

Sovereign is a modern hotel booking website with a booking-form hero, room types, amenities, a gallery and testimonials. It recreates ColorLib's **The Palatin** design.

- **Source slug:** `the-palatin`
- **ColorLib URL:** https://colorlib.com/wp/template/the-palatin/
- **Preview URL:** https://preview.colorlib.com/theme/the-palatin/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Hospitality / Hotel Booking

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/thepalatin/ (HTTP 200, 28,927 B, fetched 2026-10-23) and its theme stylesheet `theme/thepalatin/style.css` (47,277 B, sha256 `a7d49a832e0e…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#cb8670` | 51 declarations — `.section-heading .line-`, `#scrollUp` |
| Surface | `#ffffff` | 51 declarations — `.section-heading.white p`, `.section-heading.white h2` |
| Ink / dark surface | `#363636` | 13 declarations — `h1`, `h2` |
| Typeface | **Jost** — the sheet's only face is the file family `FuturaLT-Book` (1 rule — body), which is not published on Google Fonts (`css?family=Futura LT Book` → HTTP 400); load the geometric `Jost` (400) and keep `Questrial` as the documented alternative — the reference face itself cannot be shipped | `font-family` declaration in the theme sheet |
| Body type | `font-size: 14px` | `body{…}` rule |

**Shipped app (recorded delta, 2026-10-23o):** the shipped app declares `Cormorant Garamond` + `Poppins`, neither of which is a geometric Futura substitute. The prep records the reference face; correcting the app is an implementer task, not a prep edit.

| Radii | `50%`, `4px` | `50%` (.preloader .cssload-loading i); `4px` (.single-accordion.panel) |

Palette in order of use: `#cb8670` ×51, `#ffffff` ×51, `#363636` ×13, `#7d7d7d` ×7, `#000000` ×3, `#181818` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar navigation

The template SHALL display a fixed navigation bar with logo, links, and a Book Now CTA button.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads
- **THEN** the navbar displays the brand name "Sovereign" and navigation links for Home, About, Rooms, Amenities, Gallery, Contact, and Book Now

#### Scenario: Navbar becomes solid on scroll

- **WHEN** the user scrolls past 50 pixels
- **THEN** the navbar background changes from transparent to solid dark

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile navigation menu opens with all links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** the user clicks a link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section with booking form

The template SHALL display a full-width hero section with a background image, heading, and booking form.

#### Scenario: Hero displays heading and subheading

- **WHEN** the page loads
- **THEN** the hero section shows "Welcome to Sovereign Hotel" heading and descriptive subheading

#### Scenario: Booking form fields are present

- **WHEN** the hero section renders
- **THEN** a booking form row is visible with Check In, Check Out, Room Type, Guests inputs and a Check Availability button

#### Scenario: Form submission is prevented

- **WHEN** the user clicks Check Availability
- **THEN** the form submission is prevented (no page reload)

### Requirement: About section

The template SHALL display a two-column about section with heading, paragraph, and image.

#### Scenario: About section content

- **WHEN** the about section renders
- **THEN** it displays "About Our Hotel" heading, descriptive paragraph, and hotel lobby image

### Requirement: Rooms section

The template SHALL display a grid of room cards with images, names, descriptions, prices, and book buttons.

#### Scenario: All room cards render

- **WHEN** the rooms section renders
- **THEN** 4 room cards are displayed: Standard Room, Deluxe Room, Executive Suite, and Presidential Suite

#### Scenario: Room prices are displayed

- **WHEN** the rooms section renders
- **THEN** each room card shows its price per night

### Requirement: Amenities section

The template SHALL display a grid of amenity items with icons and descriptions on a dark background.

#### Scenario: All amenity items render

- **WHEN** the amenities section renders
- **THEN** 6 amenity items are displayed: Swimming Pool, Spa & Wellness, Restaurant, Fitness Center, Free Wi-Fi, Airport Transfer

### Requirement: Gallery section

The template SHALL display a responsive grid of hotel photos with hover overlay effects.

#### Scenario: Gallery images render

- **WHEN** the gallery section renders
- **THEN** 8 images are displayed in a grid layout with alt text

### Requirement: Testimonials section

The template SHALL display guest reviews with avatars, star ratings, names, roles, and quotes.

#### Scenario: All testimonials render

- **WHEN** the testimonials section renders
- **THEN** 3 guest reviews are displayed with 5-star ratings each

### Requirement: Booking CTA section

The template SHALL display a full-width call-to-action section with background image, heading, and booking button.

#### Scenario: Booking CTA content

- **WHEN** the booking CTA section renders
- **THEN** it displays "Book Your Stay Today" heading, descriptive text, and a Book Now button

### Requirement: Footer

The template SHALL display a multi-column footer with about text, quick links, contact info, social icons, and copyright.

#### Scenario: Footer columns render

- **WHEN** the footer renders
- **THEN** it displays About Sovereign text, Quick Links, and Contact Info columns

#### Scenario: Component Dock link is present

- **WHEN** the footer renders
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/

#### Scenario: Social icons render

- **WHEN** the footer renders
- **THEN** Facebook, Twitter, Instagram, and Pinterest social icons are displayed

### Requirement: Accessibility

All interactive elements SHALL have appropriate aria-labels and all images SHALL have alt text.

#### Scenario: Navigation accessibility

- **WHEN** the navbar renders
- **THEN** it has an aria-label "Main navigation" and the mobile toggle has aria-label and aria-expanded

#### Scenario: Image alt text

- **WHEN** any image renders
- **THEN** it has a descriptive alt attribute

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sovereign/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sovereign/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar navigation — the navbar displays the brand name "Sovereign" and navigation links for Home, About, Rooms, Amenities, Gallery, Contact, and Book Now
- [x] Hero section with booking form — the hero section shows "Welcome to Sovereign Hotel" heading and descriptive subheading
- [x] About section — it displays "About Our Hotel" heading, descriptive paragraph, and hotel lobby image
- [ ] Rooms section — 4 room cards are displayed: Standard Room, Deluxe Room, Executive Suite, and Presidential Suite
- [ ] Amenities section — 6 amenity items are displayed: Swimming Pool, Spa & Wellness, Restaurant, Fitness Center, Free Wi-Fi, Airport Transfer
- [ ] Gallery section — 8 images are displayed in a grid layout with alt text
- [ ] Testimonials section — 3 guest reviews are displayed with 5-star ratings each
- [x] Booking CTA section — it displays "Book Your Stay Today" heading, descriptive text, and a Book Now button
- [x] Accessibility — it has an aria-label "Main navigation" and the mobile toggle has aria-label and aria-expanded

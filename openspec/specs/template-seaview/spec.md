---
name: Seaview
description: >
  Recreates the ColorLib "Marimar" hotel template
  (https://colorlib.com/wp/template/marimar/) as a React 19 + Vite + Tailwind
  CSS 4 + TypeScript single-page hotel landing with parallax hero, booking form,
  room showcases, discover carousel, testimonials, and a branded footer.
---

# Template: Seaview (Business)

## Purpose

Build a production-ready React recreation of the ColorLib Marimar hotel landing
template under the new name "Seaview". The original template is a luxury hotel
landing page with a parallax hero, booking form, room showcases, discover
carousel, testimonials, and a branded footer. The recreation preserves the
section structure, design tokens, and visual language while using original code,
placeholder images, and the Component Dock brand.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/marimar/ (HTTP 200, 25,191 B, fetched 2026-10-23) and its theme stylesheet `theme/marimar/styles/main_styles.css` (21,735 B, sha256 `a218555c7f32…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff9000` | 19 declarations — `.button`, `.button:hover a` |
| Other chromatic values | `#bfc8d8` | `#bfc8d8` × 4 (.rooms_left_content .rooms_text p) |
| Surface | `#ffffff` | 26 declarations — `body`, `p a:hover` |
| Ink / dark surface | `#0e0923` | 1 declarations — `.search_close:hover` |
| Typeface | `'Playfair Display', serif` (4 rules — .section_title > div)<br>`'Lato', sans-serif` (3 rules — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: 15px; font-weight: 400; color: #a5a5a5` | `body{…}` rule |
| Radii | `50%`, `7px` | `50%` (.testimonial_author_image); `7px` (.search_close) |
| Colour (measured) | `#ffa07f` | paints it ×2 — `border-bottom` on `p a`; main_styles.css (21,735 B, sha256 1ff6709c4541) · <https://preview.colorlib.com/theme/marimar/> |

Palette in order of use: `#ffffff` ×26, `#ff9000` ×19, `#4a4f59` ×14, `#f4f5fa` ×7, `#bfc8d8` ×4, `#0e0923` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar renders with navigation and CTA

The template SHALL display a fixed top navigation bar with the "Seaview" logo,
horizontal navigation links (Home, About, Rooms, News, Contact), and a
"Book Now" CTA button. A hamburger menu toggle SHALL appear on mobile devices.

#### Scenario: Desktop navbar shows all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the "Seaview" logo, all five navigation links, and the "Book Now" button are visible

#### Scenario: Mobile hamburger toggles menu overlay

- **WHEN** the user taps the hamburger button on mobile
- **THEN** a full-screen mobile menu overlay appears with the same navigation links

### Requirement: Hero section displays with parallax background

The template SHALL display a full-viewport hero section with a background image,
dark overlay, centered heading "Book Your Stay", subtitle text, and a "Book Now"
CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the "Book Your Stay" heading, subtitle paragraph, and "Book Now" button are visible

### Requirement: Booking form captures guest details

The template SHALL display a horizontal booking form with check-in date input,
check-out date input, adults dropdown (1-5), children dropdown (0-5), and a
"Book Now" submit button.

#### Scenario: Booking form shows all input fields

- **WHEN** the page loads
- **THEN** the check-in input, check-out input, adults select, children select, and submit button are visible

### Requirement: Intro section shows welcome and gallery

The template SHALL display a welcome section with a subtitle "Welcome", heading
"Amazing Hotel in front of the Sea", description paragraph, and a 4-column
image gallery with hover overlay "+ See More" on each image.

#### Scenario: Intro section renders heading and gallery

- **WHEN** the page loads
- **THEN** the "Welcome" subtitle, main heading, description, and 4 gallery images are visible

### Requirement: Rooms showcase displays two room options

The template SHALL display two alternating room showcase blocks. Each block
contains an image, section title, description, feature checklist with check
icons, price per night, and a "Book Now" button. The first block has image
left / content right; the second flips.

#### Scenario: Both rooms render with prices and features

- **WHEN** the page loads
- **THEN** "Luxury Double Suite" at $129/Night and "Luxury Single Room" at $89/Night are displayed with feature checklists

### Requirement: Discover section shows services

The template SHALL display a "Discover Seaview Hotel" section with a heading,
highlight paragraph, "Discover" button, and a 3-card grid of service images
(Weddings, Parties, Relax) with dark overlays and category headings.

#### Scenario: Discover section renders service cards

- **WHEN** the page loads
- **THEN** the "Discover Seaview Hotel" heading and three service cards (Weddings, Parties, Relax) are visible

### Requirement: Testimonials section displays client reviews

The template SHALL display a "Testimonials" section with a heading and 3
testimonial cards, each containing a quote, author image, author name, and
"Client" role label.

#### Scenario: Testimonials render with author info

- **WHEN** the page loads
- **THEN** the "Testimonials" heading and 3 testimonial cards with author names are visible

### Requirement: Footer shows contact info and Component Dock branding

The template SHALL display a footer with the "Seaview" logo, 3-column contact
info (Phone, Address, Email), a "More templates at Component Dock" link to
https://www.componentdock.com/, and a copyright line.

#### Scenario: Footer renders contact info and branded link

- **WHEN** the page loads
- **THEN** the Phone, Address, and Email contact details, the Component Dock link, and copyright text are visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/seaview/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/seaview/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders with navigation and CTA — the "Seaview" logo, all five navigation links, and the "Book Now" button are visible
- [x] Hero section displays with parallax background — the "Book Your Stay" heading, subtitle paragraph, and "Book Now" button are visible
- [ ] Booking form captures guest details — the check-in input, check-out input, adults select, children select, and submit button are visible
- [x] Intro section shows welcome and gallery — the "Welcome" subtitle, main heading, description, and 4 gallery images are visible
- [x] Rooms showcase displays two room options — "Luxury Double Suite" at $129/Night and "Luxury Single Room" at $89/Night are displayed with feature checklists
- [x] Discover section shows services — the "Discover Seaview Hotel" heading and three service cards (Weddings, Parties, Relax) are visible
- [x] Testimonials section displays client reviews — the "Testimonials" heading and 3 testimonial cards with author names are visible

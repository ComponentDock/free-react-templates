# Template: Feast (Food Catering Service)

> Recreation of ColorLib "Flatter" (https://colorlib.com/wp/template/flatter/)

## Purpose

A food catering service landing page with centered navigation, hero slider,
services grid, video banner, popular orders, testimonials, brand logos, and a
multi-column footer. The design uses warm red-orange tones and a zigzag/wave
aesthetic on section borders.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/flatter/ (HTTP 200, 33,056 B, fetched 2026-10-23) and its theme stylesheet `theme/flatter/css/style.css` (143,126 B, sha256 `f79efbb2ad67…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#78b454` | 26 declarations — `.boxed_btn`, `.boxed-btn` |
| Other chromatic values | `#ff5e13`, `#415094`, `#4cd3e3` | `#ff5e13` × 20 (.owl-carousel:hover .owl-nav div:hover); `#415094` × 7 (.genric-btn.default); `#4cd3e3` × 7 (.genric-btn.success) |
| Surface | `#ffffff` | 76 declarations — `a:focus`, `*::-moz-selection` |
| Ink / dark surface | `#000000` | 17 declarations — `h1`, `a:focus` |
| Typeface | `"Josefin Sans", sans-serif` (3 rules — .header-area .main-header-area .main-menu ul li a)<br>`'Josefin Sans', sans-serif` (2 rules — h1) | `font-family` declarations in the theme sheet |
| Radii | `3px`, `50%`, `8px` | `3px` (.genric-btn.radius); `50%` (.video_area .video_text .icon_video a); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×76, `#f9f9ff` ×27, `#78b454` ×26, `#ff5e13` ×20, `#000000` ×17, `#777777` ×12.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and CTA

The template SHALL render a sticky navbar with logo, navigation links
(About, Services, Menu, Gallery, Blog dropdown, Pages dropdown, Contact),
and a "Custom Order" CTA button.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads
- **THEN** the navbar displays the Feast logo, About, Services, Menu, Gallery, Blog, Pages, Contact links, and a "Custom Order" button

#### Scenario: Blog dropdown opens on click

- **WHEN** the user clicks the "Blog" dropdown button
- **THEN** a dropdown menu with "Blog" and "Single Post" links is shown

#### Scenario: Pages dropdown opens on click

- **WHEN** the user clicks the "Pages" dropdown button
- **THEN** a dropdown menu with "Elements" link is shown

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** a mobile navigation menu is displayed with all nav links

### Requirement: Hero section with heading and background

The template SHALL render a full-width hero section with a heading,
description text, and background image.

#### Scenario: Hero renders heading and description

- **WHEN** the page loads
- **THEN** the hero section displays "Food Catering Service." heading and a description about catering services

### Requirement: Services section with 6 service cards

The template SHALL render a services section with a heading and 6 service
cards in a grid layout.

#### Scenario: All services are displayed

- **WHEN** the page loads
- **THEN** 6 service cards are rendered: Birthday Catering, Wedding Service, Party Catering, Event Catering, Corporate Service, Catering On Demand

### Requirement: Video banner with play button

The template SHALL render a dark video banner section with a heading
and play button.

#### Scenario: Video banner renders

- **WHEN** the page loads
- **THEN** the "Watch Video" heading and a play button are displayed

### Requirement: Popular Orders section with 6 meal cards

The template SHALL render a popular orders section with 6 meal cards,
each showing a food image, price, name, ingredients, and "Order Now!" button.

#### Scenario: All meals are displayed

- **WHEN** the page loads
- **THEN** 6 meal cards are rendered with names, prices, and "Order Now!" buttons

### Requirement: Testimonials section with customer feedback

The template SHALL render a testimonials section with customer cards
showing avatar, name, role, and quote.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** 3 testimonial cards are displayed with author names and quotes

### Requirement: Brands section with logo grid

The template SHALL render a brands section with 8 placeholder brand logos.

#### Scenario: Brand logos render

- **WHEN** the page loads
- **THEN** 8 brand logo placeholder images are displayed

### Requirement: Footer with newsletter and Component Dock link

The template SHALL render a footer with link columns, newsletter form,
social icons, and a link to https://www.componentdock.com/.

#### Scenario: Newsletter form works

- **WHEN** the user enters an email and submits the newsletter form
- **THEN** a "Thanks for subscribing!" message is displayed

#### Scenario: Component Dock link is present

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/feast/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/feast/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation and CTA — the navbar displays the Feast logo, About, Services, Menu, Gallery, Blog, Pages, Contact links, and a "Custom Order" button
- [ ] Hero section with heading and background — the hero section displays "Food Catering Service." heading and a description about catering services
- [ ] Services section with 6 service cards — 6 service cards are rendered: Birthday Catering, Wedding Service, Party Catering, Event Catering, Corporate Service, Catering On Demand
- [x] Video banner with play button — the "Watch Video" heading and a play button are displayed
- [x] Popular Orders section with 6 meal cards — 6 meal cards are rendered with names, prices, and "Order Now!" buttons
- [ ] Testimonials section with customer feedback — 3 testimonial cards are displayed with author names and quotes
- [ ] Brands section with logo grid — 8 brand logo placeholder images are displayed

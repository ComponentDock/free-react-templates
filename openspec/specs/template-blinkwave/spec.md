---
name: blinkwave
description: Internet Service Provider landing template — recreation of ColorLib "Fastnet"
source: https://colorlib.com/wp/template/fastnet/
preview: https://preview.colorlib.com/theme/fastnet/
---

# Template: Blinkwave (Business)

## Purpose

Recreate the ColorLib "Fastnet" ISP landing page as a React 19 + Tailwind CSS 4
template under the name "Blinkwave". The template showcases an internet service
provider with hero, about, services, pricing, zipcode availability check,
testimonials, blog, and footer sections.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/fastnet/ (HTTP 200, 32,851 B, fetched 2026-10-23) and its theme stylesheet `theme/fastnet/assets/css/style.css` (176,614 B, sha256 `8bb10d0039be…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff3e3f` | 21 declarations — `.boxed-btn:hover`, `#back-top` |
| Other chromatic values | `#1f2b7b`, `#415094`, `#4cd3e3` | `#1f2b7b` × 19 (.contact-info .media-body h3 a:hover); `#415094` × 7 (.genric-btn.default); `#4cd3e3` × 7 (.genric-btn.success) |
| Surface | `#ffffff` | 62 declarations — `.boxed-btn:hover`, `a` |
| Ink / dark surface | `#072366` | 5 declarations — `h1`, `h2` |
| Typeface | `"Muli", sans-serif` (5 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `font-weight: normal; font-size: 16px` | `body{…}` rule |
| Radii | `50%`, `3px`, `8px` | `50%` (#back-top); `3px` (.genric-btn.radius); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×62, `#f9f9ff` ×27, `#ff3e3f` ×21, `#1f2b7b` ×19, `#999999` ×10, `#f0e9ff` ×9.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: All sections render correctly

The page SHALL display all 9 sections in order: Header, Hero, About, Services,
Pricing, CTA/Zipcode, Testimonials, Blog, Footer.

#### Scenario: Page loads with all sections

- **WHEN** a user visits the Blinkwave page
- **THEN** the header with navigation is visible
- **AND** the hero section shows the headline and CTA
- **AND** the about section shows company information
- **AND** the services section shows 4 feature cards
- **AND** the pricing section shows 3 plan cards
- **AND** the zipcode check form is present
- **AND** the testimonial section shows customer quotes
- **AND** the blog section shows 3 posts
- **AND** the footer contains a Component Dock link

### Requirement: Mobile navigation toggle works

The header SHALL support a mobile hamburger menu that opens and closes.

#### Scenario: Mobile menu toggle

- **WHEN** a user on a mobile viewport clicks the hamburger button
- **THEN** the mobile navigation menu opens
- **AND** clicking a navigation link closes the menu

### Requirement: Pricing cards display correct plans

The pricing section SHALL display three plans with names, prices, and features.

#### Scenario: Pricing information

- **WHEN** a user views the pricing section
- **THEN** Single Package is shown at $20.00/mo
- **AND** Half Package is shown at $25.00/mo
- **AND** Full Package is shown at $29.00/mo
- **AND** each card has a View Packages button

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Component Dock attribution

- **WHEN** a user scrolls to the footer
- **THEN** a link to https://www.componentdock.com/ is visible
- **AND** the link text contains "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/blinkwave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/blinkwave/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Mobile navigation toggle works — the mobile navigation menu opens
- [ ] Pricing cards display correct plans — Single Package is shown at $20.00/mo

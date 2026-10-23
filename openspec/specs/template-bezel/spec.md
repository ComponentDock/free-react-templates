---
name: bezel
description: >
  Recreation of ColorLib "Watch" (https://colorlib.com/wp/template/watch/) as
  a product/landing page for smartwatches.
---

# Template: Bezel (Landing Page)

## Purpose

Bezel is a multi-section single-page smartwatch landing template. It recreates
the ColorLib "Watch" design under a new name with React 19, Tailwind CSS 4,
and TypeScript. The template features a hero banner, video intro, feature
highlights, product catalog, customer reviews, FAQ accordion, and footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/watch/ (HTTP 200, 31,144 B, fetched 2026-10-23) and its theme stylesheet `theme/watch/css/style.min.css` (186,297 B, sha256 `d5f1e83a4e9e…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#235ee7` | 24 declarations — `b`, `sup` |
| Other chromatic values | `#007bff`, `#007bff40`, `#0e7c86` | `#007bff` × 6 (.form-check-input:checked); `#007bff40` × 5 (.form-control:focus); `#0e7c86` × 5 (.genric-btn.success) |
| Surface | `#ffffff` | 69 declarations — `.valid-tooltip`, `.form-range:focus::-moz-range-thumb` |
| Ink / dark surface | `#222222` | 20 declarations — `h1`, `h2` |
| Typeface | `Poppins, sans-serif` (3 rules — body)<br>`var(--bs-body-font-family)` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `var(--bs-border-radius)`, `3px`, `8px` | `var(--bs-border-radius)` (.img-thumbnail); `3px` (.genric-btn.radius); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×69, `#f9f9ff` ×30, `#235ee7` ×24, `#222222` ×20, `#000000` ×11, `#6b6b6b` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar

The template SHALL display a sticky navigation bar with logo text "Bezel" and
links to all major sections (Home, About, Services, Products, Reviews, FAQ).

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar displays the logo and all six navigation links

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation panel expands
- **WHEN** the user clicks the menu button again
- **THEN** the mobile navigation panel collapses

### Requirement: Hero Section

The template SHALL display a full-height hero banner with a background image,
subtitle text, headline "Smart New Future", and a "Buy Now" call-to-action.

#### Scenario: Hero renders content

- **WHEN** the page loads
- **THEN** the hero section displays the subtitle, headline, and CTA button
- **AND** the CTA button links to the products section

### Requirement: Video Introduction

The template SHALL display a split-layout section with text content on the left
and a video thumbnail with play button overlay on the right.

#### Scenario: Video intro renders

- **WHEN** the page loads
- **THEN** the section displays heading text and a play button

### Requirement: Feature Grid

The template SHALL display a 2x2 grid of feature cards flanking a center product
image, with icon, title, and description for each feature.

#### Scenario: Feature grid renders all cards

- **WHEN** the page loads
- **THEN** four feature cards are displayed with their titles and descriptions

### Requirement: About Split

The template SHALL display a full-width split layout with an image on the left
and text content with a CTA on the right.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** the section displays the image, heading, and CTA button

### Requirement: Services

The template SHALL display a 3-column grid of six service cards, each with an
icon, title, and description.

#### Scenario: Services renders all items

- **WHEN** the page loads
- **THEN** six service cards are displayed

### Requirement: Product Catalog

The template SHALL display a dark-background section with four product cards,
each showing an image, name, price, and "Pre Order" button.

#### Scenario: Product catalog renders

- **WHEN** the page loads
- **THEN** four product cards are displayed with names, prices, and CTA buttons

### Requirement: Reviews

The template SHALL display a 3-column grid of six review cards, each with a
reviewer name, text, and star rating.

#### Scenario: Reviews render with ratings

- **WHEN** the page loads
- **THEN** six review cards are displayed with star ratings

### Requirement: FAQ Accordion

The template SHALL display an FAQ section with four collapsible items. Only one
answer may be expanded at a time.

#### Scenario: FAQ items toggle

- **WHEN** the user clicks a question
- **THEN** the answer expands
- **WHEN** the user clicks a different question
- **THEN** the previous answer collapses and the new one expands

### Requirement: Footer

The template SHALL display a three-column footer with About, Newsletter, and
Social sections. The footer MUST link to https://www.componentdock.com/
branded as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** the footer displays About, Newsletter, and Social columns

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/bezel/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/bezel/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar — the navbar displays the logo and all six navigation links
- [ ] Hero Section — the hero section displays the subtitle, headline, and CTA button
- [ ] Video Introduction — the section displays heading text and a play button
- [ ] Feature Grid — four feature cards are displayed with their titles and descriptions
- [ ] About Split — the section displays the image, heading, and CTA button
- [ ] Services — six service cards are displayed
- [ ] Product Catalog — four product cards are displayed with names, prices, and CTA buttons
- [ ] Reviews — six review cards are displayed with star ratings
- [ ] FAQ Accordion — the answer expands

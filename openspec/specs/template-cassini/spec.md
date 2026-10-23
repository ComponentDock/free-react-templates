---
name: Cassini
description: Photography studio template with hero slider, offcanvas menu, and dark theme
source: https://colorlib.com/wp/template/cassi/
preview: https://preview.colorlib.com/theme/cassi/
status: in-progress
---

# Template: Cassini (Photography Studio)

Recreation of ColorLib "Cassi" (https://colorlib.com/wp/template/cassi/)

## Purpose

Cassini is a photography studio website template featuring a full-screen hero image slider with category tags, an offcanvas hamburger menu, a minimal transparent header, and a dark footer with social links and Component Dock attribution. It recreates the ColorLib "Cassi" design faithfully using React, Tailwind CSS, and TypeScript.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/cassi/ (HTTP 200, 8,565 B, fetched 2026-10-23) and its theme stylesheet `theme/cassi/css/style.min.css` (89,402 B, sha256 `621ca40d6621…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#242deb` | 12 declarations — `.site-btn`, `.hero-slider .owl-nav button.owl-prev:hover` |
| Other chromatic values | `#8a8fff` | `#8a8fff` × 2 (.main-menu li a:hover) |
| Surface | `#ffffff` | 42 declarations — `.text-bg-dark`, `.text-bg-danger` |
| Ink / dark surface | `#000000` | 13 declarations — `.text-bg-info`, `.text-bg-primary` |
| Typeface | `Poppins, sans-serif` (1 rule — html)<br>`Roboto, sans-serif` (1 rule — .main-menu li a) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `1px`, `4px`, `.2rem` | `1px` (.hero-slider .owl-nav button.owl-prev); `4px` (.pswp__kit-caption); `.2rem` (kbd) |

Palette in order of use: `#ffffff` ×42, `#000000` ×13, `#242deb` ×12, `#969696` ×6, `#151515` ×3, `#00000080` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Preloader

The template SHALL display a full-screen dark overlay with a spinner animation on page load that hides after content loads.

#### Scenario: Preloader displays on load

- **WHEN** the page is loading
- **THEN** a full-screen dark overlay with a spinning loader is visible

#### Scenario: Preloader hides after timeout

- **WHEN** the page has finished loading (1.5 seconds)
- **THEN** the preloader overlay disappears

### Requirement: Header

The template SHALL display a minimal header with logo text on the left and a hamburger menu icon on the right.

#### Scenario: Header renders logo and hamburger

- **WHEN** the page loads
- **THEN** the header shows the "Cassini" logo text and a menu icon button

#### Scenario: Hamburger opens offcanvas menu

- **WHEN** the user clicks the hamburger menu icon
- **THEN** the offcanvas menu slides in from the right

### Requirement: Offcanvas menu

The template SHALL display a full-screen offcanvas menu with navigation links, social links, and a copyright notice.

#### Scenario: Menu shows all nav links

- **WHEN** the offcanvas menu is open
- **THEN** navigation links "Home", "Gallery", "Blog", "About", "Contact" are visible

#### Scenario: Menu shows social links

- **WHEN** the offcanvas menu is open
- **THEN** social links "Facebook", "Twitter", "Instagram" are visible

#### Scenario: Menu shows copyright with Component Dock

- **WHEN** the offcanvas menu is open
- **THEN** a copyright notice with a "Component Dock" link to https://www.componentdock.com/ is present

#### Scenario: Menu closes on close button click

- **WHEN** the offcanvas menu is open and the user clicks the close button
- **THEN** the offcanvas menu closes

### Requirement: Hero slider

The template SHALL display a full-width hero section with a background image slider, category tag, heading, description, and CTA button.

#### Scenario: Hero renders initial slide

- **WHEN** the page loads
- **THEN** a full-screen hero section shows a background image with dark overlay, the category tag "Nature", heading "Photo Studio", description text, and a "See More" button

#### Scenario: Slider advances to next slide

- **WHEN** the user clicks the next arrow
- **THEN** the background image changes to the next slide

#### Scenario: Slider goes to previous slide

- **WHEN** the user clicks the previous arrow
- **THEN** the background image changes to the previous slide

#### Scenario: Dot indicators navigate slides

- **WHEN** the user clicks a dot indicator
- **THEN** the slider navigates to the corresponding slide

### Requirement: Footer

The template SHALL display a dark footer with social text links and a copyright notice with Component Dock attribution.

#### Scenario: Footer renders social links

- **WHEN** the footer is in the viewport
- **THEN** social text links "Facebook", "Twitter", "Instagram" are visible

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is in the viewport
- **THEN** a copyright notice with a "Component Dock" link to https://www.componentdock.com/ is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/cassini/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cassini/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Preloader — a full-screen dark overlay with a spinning loader is visible
- [x] Header — the header shows the "Cassini" logo text and a menu icon button
- [x] Hero slider — a full-screen hero section shows a background image with dark overlay, the category tag "Nature", heading "Photo Studio", description text, and a "See More" button

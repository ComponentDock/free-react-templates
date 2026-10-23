# Template: Drape (Ecommerce)

Recreation of ColorLib **Fashe** (https://colorlib.com/wp/template/fashe/).

## Purpose

Drape is a modern fashion e-commerce landing page template with a warm terracotta palette, sharp corners, and the Assistant typeface. It recreates the ColorLib Fashe design under a different name with React 19 + Tailwind CSS 4.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/fashe/ (HTTP 200, 34,470 B, fetched 2026-10-23) and its theme stylesheet `theme/fashe/assets/css/style.css` (41,806 B, sha256 `1b8ddab97d8b…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#d99a2b` | 1 declarations — `.inventory--low::before` |
| Surface | `#ffffff` | 2 declarations — `.badge--sale`, `.header__cart-count` |
| Typeface | `var(--font-body)` (3 rules — body)<br>`var(--font-heading)` (3 rules — h1) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--text-base); font-weight: var(--font-body-weight); line-height: 1.6; color: rgb(var(--color-text))` | `body{…}` rule |
| Radii | `var(--radius-base)`, `50%`, `var(--radius-media)` | `var(--radius-base)` (.button); `50%` (.icon-button); `var(--radius-media)` (.rte img) |

Palette in order of use: `#ffffff` ×2, `#d99a2b` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Announcement bar

The template SHALL display a dark announcement bar with promotional text at the top.

#### Scenario: Renders promotional message

- **WHEN** the page loads
- **THEN** an announcement bar is visible with "Free shipping on orders over $100"

### Requirement: Sticky header with navigation

The template SHALL have a sticky header with the brand logo, desktop navigation links, and icon actions.

#### Scenario: Logo and nav links visible

- **WHEN** the page loads
- **THEN** the "Drape." logo is visible
- **AND** navigation links for Home, Shop, Product, Blog, About, Contact are present

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu appears

### Requirement: Hero banner

The template SHALL display a full-height hero banner with a background image, headline, and call-to-action.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the heading "New season essentials" is visible
- **AND** a "Shop now" button links to the shop section

### Requirement: Marquee strip

The template SHALL display a scrolling marquee with promotional text items.

#### Scenario: Marquee content

- **WHEN** the page loads
- **THEN** text items including "Free shipping over $100" and "30 day returns" are present

### Requirement: Shop by category section

The template SHALL display a grid of category cards with images.

#### Scenario: Three categories

- **WHEN** the page loads
- **THEN** three category cards are visible: Clothing, Jewellery, Bags

### Requirement: New arrivals product grid

The template SHALL display a grid of product cards with images, titles, and prices.

#### Scenario: Eight products

- **WHEN** the page loads
- **THEN** eight product cards are visible with titles and prices

#### Scenario: Sale badge

- **WHEN** a product has a sale price
- **THEN** a "Sale" badge is displayed on that product card

### Requirement: Image with text section

The template SHALL display a split layout with an image and descriptive text.

#### Scenario: Made to last content

- **WHEN** the page loads
- **THEN** the heading "Made to last" and an "Our story" link are visible

### Requirement: Features grid

The template SHALL display a three-column grid of feature highlights.

#### Scenario: Three features

- **WHEN** the page loads
- **THEN** "Free shipping", "30 day returns", and "Made responsibly" headings are visible

### Requirement: Journal section

The template SHALL display a grid of blog article cards.

#### Scenario: Three articles

- **WHEN** the page loads
- **THEN** three article cards with titles, dates, and excerpts are visible

### Requirement: Footer with Component Dock link

The template SHALL have a footer with newsletter form, navigation links, and Component Dock attribution.

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ labeled "www.componentdock.com" is present in the footer

#### Scenario: Newsletter form

- **WHEN** the page loads
- **THEN** an email input and Subscribe button are present

### Requirement: Document title

The template SHALL set the browser tab title.

#### Scenario: Title on load

- **WHEN** the page loads
- **THEN** the document title is "Drape — Fashion E-Commerce Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/drape/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/drape/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Announcement bar — an announcement bar is visible with "Free shipping on orders over $100"
- [x] Sticky header with navigation — the "Drape." logo is visible
- [x] Hero banner — the heading "New season essentials" is visible
- [x] Marquee strip — text items including "Free shipping over $100" and "30 day returns" are present
- [ ] Shop by category section — three category cards are visible: Clothing, Jewellery, Bags
- [ ] New arrivals product grid — eight product cards are visible with titles and prices
- [x] Image with text section — the heading "Made to last" and an "Our story" link are visible
- [x] Features grid — "Free shipping", "30 day returns", and "Made responsibly" headings are visible
- [ ] Journal section — three article cards with titles, dates, and excerpts are visible
- [ ] Document title — the document title is "Drape — Fashion E-Commerce Template"

# Template: Veloce (Business)

## Purpose

Veloce is a free automotive service landing page template that recreates the
ColorLib "Automotive" design (https://colorlib.com/wp/template/automotive/) under
a new name. It provides a professional auto garage landing page with hero,
services grid, product cards, testimonials, stats, and a news section.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/automotive/ (HTTP 200, 37,024 B, fetched 2026-10-23) and its theme stylesheet `theme/automotive/css/style.css` (42,561 B, sha256 `1dfe2e33ed0f…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#5f67ff` | 24 declarations — `.site-btn`, `.primary-btn` |
| Other chromatic values | `#2c85ae`, `#324975`, `#3eaff0` | `#2c85ae` × 2 (.footer__copyright__social a.twitter); `#324975` × 2 (.footer__copyright__social a); `#3eaff0` × 2 (.footer__copyright__social a.pinterest) |
| Surface | `#ffffff` | 40 declarations — `.primary-btn`, `a:hover` |
| Ink / dark surface | `#353535` | 47 declarations — `.section-title h2`, `.header__right li a` |
| Typeface | `"Public Sans", sans-serif` (3 rules — html)<br>`"FontAwesome"` (1 rule — .breadcrumb__links a:after) | `font-family` declarations in the theme sheet |
| Radii | `2px`, `50%`, `60px` | `2px` (.site-btn); `50%` (.search-close-switch); `60px` (.loader) |

Palette in order of use: `#353535` ×47, `#ffffff` ×40, `#5f67ff` ×24, `#727171` ×18, `#8d8d8d` ×7, `#b4b4b4` ×7.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Full page renders all sections

The template SHALL render all 10 sections in order: Navbar (top bar + main nav),
Hero, Services, ChooseUs, Products, Testimonial, Stats, LatestNews, Footer.

#### Scenario: All sections are present

- **WHEN** I visit the Veloce template
- **THEN** I see the navbar with phone number and navigation links
- **AND** I see a hero section with "Welcome To" heading
- **AND** I see 4 service cards under "What We Do?"
- **AND** I see the choose-us section with a checklist
- **AND** I see 4 product cards under "Our Products"
- **AND** I see a testimonial quote section
- **AND** I see 4 stat counters under "About Our Statistics"
- **AND** I see 3 news cards under "Latest News"
- **AND** I see the footer with Component Dock link

### Requirement: Navigation is interactive

The navbar SHALL display links for Home, Services, Shop, Pages, and Blog, and
SHALL support mobile menu toggle.

#### Scenario: Nav links are clickable

- **WHEN** I visit the Veloce template
- **THEN** all nav links (Home, Services, Shop, Pages, Blog) are clickable
- **AND** the hero CTA button "Our Services" is clickable

#### Scenario: Mobile menu toggles

- **WHEN** I click the mobile menu toggle button
- **THEN** the mobile navigation menu appears

### Requirement: Product cards show hover actions

Each product card SHALL display heart, eye, and exchange icon buttons on hover.

#### Scenario: Product hover actions exist

- **WHEN** I visit the Veloce template
- **THEN** each product card has Wishlist, View, and Compare buttons
- **AND** each product shows a price and Add To Cart button

### Requirement: Testimonial carousel navigates

The testimonial section SHALL allow switching between 3 testimonials via dot buttons.

#### Scenario: Dot navigation changes testimonial

- **WHEN** I click testimonial dot 2
- **THEN** the displayed quote changes to the second testimonial

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock attribution

- **WHEN** I visit the Veloce template footer
- **THEN** I see a link to componentdock.com labeled "Component Dock"
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/veloce/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/veloce/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation is interactive — all nav links (Home, Services, Shop, Pages, Blog) are clickable
- [ ] Product cards show hover actions — each product card has Wishlist, View, and Compare buttons
- [ ] Testimonial carousel navigates — the displayed quote changes to the second testimonial

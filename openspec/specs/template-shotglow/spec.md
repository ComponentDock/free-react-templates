# Template: Shotglow (Business)

> Recreation of ColorLib Shotgear
> (https://colorlib.com/wp/template/shotgear/)

## Purpose

Shotglow is a photography studio portfolio template with a bold, dark-hero aesthetic. It targets freelance photographers and creative studios who need a single-page landing with gallery, services, testimonials, pricing, and blog sections.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/shotgear/ (HTTP 200, 32,923 B, fetched 2026-10-23) and its theme stylesheet `theme/shotgear/css/style.css` (188,813 B, sha256 `a7c6a087e9aa…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff4800` | 55 declarations — `.btn_1:hover`, `.btn_1:hover:after` |
| Other chromatic values | `#182028`, `#415094`, `#4cd3e3` | `#182028` × 16 (h1); `#415094` × 7 (.genric-btn.default); `#4cd3e3` × 7 (.genric-btn.success) |
| Surface | `#ffffff` | 68 declarations — `.btn_1`, `.btn_1:after` |
| Ink / dark surface | `#182028` | 16 declarations — `h1`, `h2` |
| Typeface | `"Roboto", sans-serif` (5 rules — p)<br>`"Oswald", sans-serif` (3 rules — h1) | `font-family` declarations in the theme sheet |
| Radii | `50%`, `3px`, `5px` | `50%` (.single-post-area .blog-author img); `3px` (.genric-btn.radius); `5px` (.blog_item_img .blog_item_date) |

Palette in order of use: `#ffffff` ×68, `#ff4800` ×55, `#f9f9ff` ×27, `#999999` ×19, `#182028` ×16, `#777777` ×10.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders all sections

Users SHALL see the full template with navbar, hero, about, gallery, services, testimonials, pricing, blog, and footer sections when visiting the Shotglow page.

#### Scenario: All sections are present

- **WHEN** a user visits Shotglow
- **THEN** the navbar is visible with logo and navigation links
- **AND** the hero section displays "Creative Studio" heading
- **AND** the about section is present
- **AND** the gallery section is present with filter buttons
- **AND** the services section displays service cards
- **AND** the testimonials section is present
- **AND** the pricing section displays pricing cards
- **AND** the blog section displays blog posts
- **AND** the footer contains a Component Dock link

### Requirement: Gallery category filtering

Users SHALL be able to filter gallery items by category (All, Wedding, Fashion, Portrait, Magazine).

#### Scenario: Filtering by category

- **WHEN** a user clicks the "Fashion" filter button
- **THEN** only gallery items in the Fashion category are visible
- **AND** the "Fashion" button is highlighted as active

#### Scenario: Showing all items

- **WHEN** a user clicks the "All" filter button
- **THEN** all gallery items are visible regardless of category

### Requirement: Mobile navigation toggle

Users SHALL be able to toggle the mobile navigation menu on small viewports.

#### Scenario: Toggle open and close

- **WHEN** a user clicks the hamburger menu button
- **THEN** the navigation menu expands
- **AND** the button aria-expanded attribute is true
- **WHEN** the user clicks the hamburger button again
- **THEN** the navigation menu collapses

### Requirement: Footer contains Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock attribution

- **WHEN** a user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" is visible
- **AND** the link opens in a new tab
- **AND** the link text mentions "Component Dock"

### Requirement: Testimonials carousel

Users SHALL be able to navigate between testimonials using previous/next buttons.

#### Scenario: Next testimonial

- **WHEN** a user clicks the "Next testimonial" button
- **THEN** the next testimonial is displayed

#### Scenario: Previous testimonial

- **WHEN** a user clicks the "Previous testimonial" button
- **THEN** the previous testimonial is displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/shotglow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/shotglow/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Gallery category filtering — only gallery items in the Fashion category are visible
- [ ] Mobile navigation toggle — the navigation menu expands
- [ ] Testimonials carousel — the next testimonial is displayed

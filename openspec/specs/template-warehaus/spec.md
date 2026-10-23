# Template: Warehaus (E-Commerce Shop)

## Purpose

Warehaus is a single-page e-commerce shop landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Winkel" free template (source:
https://colorlib.com/wp/template/winkel/), built under a
DIFFERENT name (**Warehaus**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source mapping:**

- **ColorLib item:** "Winkel" (TEMPLATES.md line 1232)
- **Source URL:** https://colorlib.com/wp/template/winkel/
- **Preview URL:** https://preview.colorlib.com/theme/winkel/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/winkel/ (HTTP 200, 58,192 B, fetched 2026-10-23) and its theme stylesheet `theme/winkel/css/style.css` (91,028 B, sha256 `9fd67332e32f…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ffa45c` | 36 declarations — `a`, `a:hover` |
| Other chromatic values | `#007bff`, `#0062cc` | `#007bff` × 8 (a); `#0062cc` × 2 (.btn-primary:hover) |
| Surface | `#ffffff` | 67 declarations — `body`, `.table .table` |
| Ink / dark surface | `#000000` | 78 declarations — `.close`, `.close:hover` |
| Typeface | `-apple-system, sans-serif` (3 rules — body)<br>`"Open Sans", sans-serif` (2 rules — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529` | `body{…}` rule |
| Radii | `50%`, `0.25rem`, `30px` | `50%` (.mouse-icon); `0.25rem` (.form-control); `30px` (.hero-wrap .slider-text .btn-primary) |

Palette in order of use: `#000000` ×78, `#ffffff` ×67, `#ffa45c` ×36, `#007bff` ×8, `#6c757d` ×8, `#212529` ×6.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders all sections

The template MUST display all major sections in order: TopBar, Navbar, Hero, Services, BestSellers, NewCollections, Products, Counter, Testimonials, Newsletter, Footer.

#### Scenario: All sections are visible

- **WHEN** the user opens the template
- **THEN** the top bar shows phone and email info
- **AND** the navbar shows brand name and navigation links
- **AND** the hero section displays a headline and CTA
- **AND** the services section shows 3 service cards
- **AND** the best sellers section shows 4 product cards
- **AND** the new collections section shows 2 collection cards
- **AND** the products section shows 4 product cards with category filters
- **AND** the counter section shows 4 stat items
- **AND** the testimonials section shows a review
- **AND** the newsletter section shows an email input
- **AND** the footer shows menu and contact info

### Requirement: Navigation works

The navbar MUST display links for Home, Shop, About, Blog, Contact and a cart icon with badge.

#### Scenario: Nav links are present

- **WHEN** the navbar is visible
- **THEN** it contains links for Home, Shop, About, Blog, Contact
- **AND** a cart icon with item count badge

### Requirement: Hero carousel advances

The hero section MUST auto-advance between slides and support manual navigation.

#### Scenario: Carousel auto-advances

- **WHEN** the hero section is displayed
- **AND** 5 seconds elapse
- **THEN** the slide content changes

### Requirement: Products filter by category

The products section MUST allow filtering by category tabs (All, Men, Women, Kids).

#### Scenario: Category filter works

- **WHEN** the user clicks the "Women" category button
- **THEN** only women's products are displayed

### Requirement: Footer links to Component Dock

The footer MUST link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link present

- **WHEN** the footer is visible
- **THEN** it contains a link to componentdock.com

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/warehaus/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/warehaus/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page renders all sections — the top bar shows phone and email info
- [ ] Navigation works — it contains links for Home, Shop, About, Blog, Contact
- [ ] Hero carousel advances — the slide content changes
- [ ] Products filter by category — only women's products are displayed

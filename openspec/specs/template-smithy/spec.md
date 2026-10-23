# Template: Smithy (Personal)

## Purpose

Smithy is a personal portfolio and developer landing page template, recreating the design of ColorLib "Satner" (https://colorlib.com/wp/template/satner/) under a new original name. It showcases a developer's profile with sections for introduction, services, portfolio work, testimonials, and contact.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/satner/ (HTTP 200, 14,061 B, fetched 2026-10-23) and its theme stylesheet `theme/satner/css/style.min.css` (238,377 B, sha256 `88295271f4ae…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#4458dc` | 29 declarations — `.comments-area .btn-reply:hover`, `.blog-pagination .page-link:hover` |
| Other chromatic values | `#854fee`, `#f8b600`, `#4cd3e3` | `#854fee` × 12 (.gradient-bg); `#f8b600` × 12 (b); `#4cd3e3` × 9 (.success) |
| Surface | `#ffffff` | 103 declarations — `.pswp__kit-caption`, `select:where(.nice-select` |
| Ink / dark surface | `#000000` | 49 declarations — `.text-bg-info`, `.text-bg-primary` |
| Typeface | `Roboto, sans-serif` (7 rules — body)<br>`Rubik, sans-serif` (7 rules — h1) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `3px`, `var(--bs-border-radius)`, `50%` | `3px` (.owl-theme:where(.kit-owl) .owl-nav [class*=owl-]); `var(--bs-border-radius)` (.img-thumbnail); `50%` (.form-check-input[type=radio]) |

Palette in order of use: `#ffffff` ×103, `#000000` ×49, `#6b6b6b` ×35, `#4458dc` ×29, `#eeeeee` ×17, `#f9f9ff` ×16.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders all sections in correct order

The Smithy page SHALL display the following sections in order: Navbar, Hero, About, Brands, Services, Portfolio, Testimonials, Newsletter, Footer.

#### Scenario: All sections are visible on page load

- **WHEN** I visit the Smithy page
- **THEN** I see the Navbar at the top
- **AND** I see the Hero section with greeting and CTA buttons
- **AND** I see the About section with image and text
- **AND** I see the Brands section with logos and stats
- **AND** I see the Services section with 4 service cards
- **AND** I see the Portfolio section with filterable grid
- **AND** I see the Testimonials section with client quotes
- **AND** I see the Newsletter section with email form
- **AND** I see the Footer with social links

### Requirement: Navbar provides navigation

The Navbar SHALL display the "Smithy" logo and navigation links for Home, About, Services, Portfolio, and Contact. It SHALL include a mobile hamburger toggle.

#### Scenario: Desktop navigation links are present

- **WHEN** I view the Navbar on desktop
- **THEN** I see links for Home, About, Services, Portfolio, Contact

#### Scenario: Mobile menu toggles

- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking it again closes the menu

### Requirement: Hero section displays developer profile

The Hero section SHALL display a greeting subtitle, the developer name, role text, and two CTA buttons ("Hire Me" and "Get CV").

#### Scenario: Hero content is visible

- **WHEN** I view the Hero section
- **THEN** I see the "Hello" subtitle
- **AND** I see the name "Alex Smith"
- **AND** I see the role "Senior Web Developer"
- **AND** I see a "Hire Me" button
- **AND** I see a "Get CV" button

### Requirement: Portfolio section supports filtering

The Portfolio SHALL display filter tabs (all, popular, latest, following, upcoming) that filter the portfolio items.

#### Scenario: Filter tabs filter portfolio items

- **WHEN** I click the "popular" filter tab
- **THEN** only portfolio items tagged "popular" are displayed

#### Scenario: All tab shows all items

- **WHEN** I click the "all" filter tab after filtering
- **THEN** all portfolio items are displayed

### Requirement: Newsletter form accepts email input

The Newsletter section SHALL display an email input and a "Get Started" button.

#### Scenario: Email input is functional

- **WHEN** I type an email address in the newsletter input
- **THEN** the input field shows the typed email
- **AND** submitting clears the input

### Requirement: Footer links to Component Dock

The Footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link is present

- **WHEN** I view the Footer
- **THEN** I see a link to componentdock.com

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/smithy/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/smithy/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page renders all sections in correct order — I see the Navbar at the top
- [ ] Navbar provides navigation — I see links for Home, About, Services, Portfolio, Contact
- [x] Hero section displays developer profile — I see the "Hello" subtitle
- [x] Portfolio section supports filtering — only portfolio items tagged "popular" are displayed
- [ ] Newsletter form accepts email input — the input field shows the typed email

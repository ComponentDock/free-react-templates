# Template: Rivet (Construction Company)

> Recreation of ColorLib "Construct" — https://colorlib.com/wp/template/construct/
> Preview: https://preview.colorlib.com/theme/construct/

## Purpose

Rivet is a construction company landing page template featuring a hero banner,
services grid, works gallery, company news, testimonials, and a 4-column footer.
The design uses Open Sans typography with a steel blue (#4a90d9) brand palette.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/construct/ (HTTP 200, 39,919 B, sha256 `d7d8d6e19b74…`, fetched 2026-10-23) and its design stylesheet(s) `inline-style-0`, `style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f4b214` | 14 declarations — `.btn.btn-outline-primary`, `header .navbar .nav-link.active` |
| Other chromatic values | `#f6c245` (2), `#5ac8d8` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 20 declarations — `.btn.btn-outline-primary:hover, .btn.btn-outline-primary:focus, .btn.btn-outline-primary:a`, `.btn.btn-primary` |
| Ink / dark surface | `#000000` | 6 declarations — `.btn.btn-outline-white:hover, .btn.btn-outline-white:focus`, `h1, h2, h3, h5` |
| Typeface | `Open Sans` (1 rule — `body`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `4px`, `16px` | `50%` (`.owl-carousel .owl-dots .owl-dot`); `4px` (`.media-feature`); `16px` (`#loader`) |

Palette in order of use: `#ffffff` ×20, `#f4b214` ×14, `#000000` ×6, `#868e96` ×3, `#f6c245` ×2, `#e6e6e6` ×2, `#ced4da` ×2, `#495057` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/construct/css/style.css` — 14,637 B, sha256 `5e952b3bd2e1…`.

## Requirements

### Requirement: Navbar

The template SHALL display a sticky navigation bar with the brand name "Rivet", navigation links (Home, Services, Works, News, About, Contact), and a "Get A Quote" CTA button.

#### Scenario: Renders brand and nav links

- **WHEN** the page loads
- **THEN** the navbar displays "Rivet" as the brand name
- **AND** navigation links for Home, Services, Works, News, About, Contact are present

#### Scenario: Shows Get A Quote CTA

- **WHEN** the page loads
- **THEN** a "Get A Quote" button/link is visible in the navbar

#### Scenario: Mobile menu toggle

- **WHEN** the viewport is narrow (mobile)
- **THEN** a hamburger menu button is displayed
- **AND** clicking the button opens a mobile navigation panel

#### Scenario: Sticky on scroll

- **WHEN** the user scrolls down
- **THEN** the navbar becomes opaque with a background

### Requirement: Hero

The template SHALL display a full-width hero section with a background image, heading text, description, and a CTA button.

#### Scenario: Renders hero content

- **WHEN** the page loads
- **THEN** the heading "Creating A Brighter Future" is displayed
- **AND** a description paragraph is present
- **AND** a CTA button is visible

#### Scenario: Background image

- **WHEN** the page loads
- **THEN** the hero section has a background image

### Requirement: Banner CTA

The template SHALL display a banner section with a trust heading and a quote button.

#### Scenario: Renders banner content

- **WHEN** the page loads
- **THEN** the heading "Trusted Construction & Development Since 1889" is displayed
- **AND** a "Get A Quote" outline button is visible

### Requirement: Services

The template SHALL display a services section with a heading, 3 service cards, and a "View All Services" button.

#### Scenario: Renders services heading

- **WHEN** the page loads
- **THEN** the heading "Services" is displayed

#### Scenario: Renders service cards

- **WHEN** the page loads
- **THEN** 3 service cards are displayed: House Renovation, Construction Consultant, General Contracting
- **AND** each card has an icon, title, description, and "Learn More" button

#### Scenario: View All Services button

- **WHEN** the page loads
- **THEN** a "View All Services" button is visible

### Requirement: Recent Works

The template SHALL display a works gallery section with project thumbnails and hover overlays.

#### Scenario: Renders works heading

- **WHEN** the page loads
- **THEN** the heading "Recent Works" is displayed

#### Scenario: Renders work thumbnails

- **WHEN** the page loads
- **THEN** 3 project thumbnail images are displayed with overlay text

#### Scenario: View All Works button

- **WHEN** the page loads
- **THEN** a "View All Works" button is visible

### Requirement: Company News

The template SHALL display a news section with news cards on a light background.

#### Scenario: Renders news heading

- **WHEN** the page loads
- **THEN** the heading "Company News" is displayed

#### Scenario: Renders news cards

- **WHEN** the page loads
- **THEN** 3+ news cards are displayed with image, date, title, description, and "Read more" link

### Requirement: Testimonials

The template SHALL display a testimonials section with customer quotes.

#### Scenario: Renders testimonials heading

- **WHEN** the page loads
- **THEN** the heading "Testimonial" is displayed

#### Scenario: Renders testimonial cards

- **WHEN** the page loads
- **THEN** 2 testimonial cards are displayed with avatar, name, company, and blockquote

### Requirement: Footer

The template SHALL display a 4-column footer with brand info, contact details, quick links, social icons, and a Component Dock link.

#### Scenario: Renders footer columns

- **WHEN** the page loads
- **THEN** the footer displays brand name, contact info, quick links, and social icons

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: App composition

The template SHALL compose all sections in the correct order and set the document title.

#### Scenario: Section order

- **WHEN** the page loads
- **THEN** sections appear in order: Navbar, Hero, BannerCTA, Services, RecentWorks, CompanyNews, Testimonials, Footer

#### Scenario: Document title

- **WHEN** the page loads
- **THEN** the document title contains "Rivet"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/rivet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/rivet/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — the navbar displays "Rivet" as the brand name
- [ ] Hero — the heading "Creating A Brighter Future" is displayed
- [x] Banner CTA — the heading "Trusted Construction & Development Since 1889" is displayed
- [x] Services — the heading "Services" is displayed
- [x] Recent Works — the heading "Recent Works" is displayed
- [x] Company News — the heading "Company News" is displayed
- [x] Testimonials — the heading "Testimonial" is displayed
- [ ] App composition — sections appear in order: Navbar, Hero, BannerCTA, Services, RecentWorks, CompanyNews, Testimonials, Footer

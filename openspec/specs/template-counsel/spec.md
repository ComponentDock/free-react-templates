# Template: Counsel (Business)

## Purpose

Counsel is a lawyer and legal firm website template. It recreates the ColorLib "Whisper" design (https://colorlib.com/wp/template/whisper/) with a professional dark-blue aesthetic, Poppins + Lora fonts, and sections for services, practice areas, attorneys, testimonials, blog, and newsletter.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/whisper/ (HTTP 200, 56,942 B, fetched 2026-10-23) and its theme stylesheet `theme/whisper/css/style.css` (73,387 B, sha256 `3521b460d061…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#eac15a` | 39 declarations — `a`, `a:hover` |
| Other chromatic values | `#007bff`, `#0062cc` | `#007bff` × 8 (a); `#0062cc` × 2 (.btn-primary:hover) |
| Surface | `#ffffff` | 54 declarations — `body`, `.table .table` |
| Ink / dark surface | `#000000` | 23 declarations — `.close`, `.close:hover` |
| Typeface | `"Lora", serif` (7 rules — h1)<br>`"Poppins", sans-serif` (3 rules — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529` | `body{…}` rule |
| Radii | `50%`, `0.25rem`, `4px` | `50%` (.owl-carousel .owl-dots .owl-dot); `0.25rem` (.form-control); `4px` (.tagcloud a) |

Palette in order of use: `#ffffff` ×54, `#eac15a` ×39, `#000000` ×23, `#6c757d` ×9, `#007bff` ×8, `#212529` ×6.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navigation bar

The template SHALL display a sticky dark navigation bar with the brand name "Counsel", section links (Home, About Us, Practice Areas, Attorneys, Blog, Contact), a "Get a Quote" button, and a mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the brand link, all six section links, and the "Get a Quote" button are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** the button icon switches from Menu to Close and the dark class is toggled on the document root

### Requirement: Hero section

The template SHALL display a full-height hero with a background image overlay, a subheading "We are here to help!", a heading "Experience . Innovation . Excellence", and a "Request a Free Consultation" CTA button.

#### Scenario: Hero renders

- **WHEN** the page loads
- **THEN** the hero section shows the subheading, heading, and CTA button

### Requirement: Services section

The template SHALL display a 4-column grid of service cards: Get Your Legal Advice, Work with Expert Lawyers, Have Great Discounted Rates, Review Your Case Documents.

#### Scenario: Services render

- **WHEN** the page loads
- **THEN** four service cards with icons, titles, and descriptions are visible

### Requirement: Stats counter section

The template SHALL display a split layout with a video placeholder on the left and statistics on the right (500 Qualified Lawyers, 2000 Trusted Clients, 1500 Successful Cases, 100 Honors & Awards).

#### Scenario: Stats render

- **WHEN** the page loads
- **THEN** four stat boxes with numbers and labels are visible

### Requirement: Practice areas section

The template SHALL display a grid of 10 practice areas with icons: Family Law, Business Law, Insurance Law, Criminal Law, Property Law, Employment Law, Fire Accident, Financial Law, Drug Offenses, Sexual Offenses.

#### Scenario: Practice areas render

- **WHEN** the page loads
- **THEN** all 10 practice area items are visible

### Requirement: Attorneys section

The template SHALL display 4 attorney cards with placeholder photos, names (Richard Anderson, Jefford Maxillin, Carlos Obing, Nathan Smith), and specializations.

#### Scenario: Attorneys render

- **WHEN** the page loads
- **THEN** four attorney cards with photos, names, and specializations are visible

### Requirement: Consultation section

The template SHALL display a dark-background consultation section with a "Free Consultation" heading and a CTA button.

#### Scenario: Consultation renders

- **WHEN** the page loads
- **THEN** the consultation heading and CTA button are visible

### Requirement: Testimonials section

The template SHALL display a dark-background testimonials section with a "Happy Clients" heading and 3 testimonial cards.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** the testimonials heading and 3 client quotes are visible

### Requirement: Blog section

The template SHALL display a light-background blog section with a "Recent Blog" heading and 3 blog post cards with images and titles.

#### Scenario: Blog renders

- **WHEN** the page loads
- **THEN** the blog heading and 3 post cards are visible

### Requirement: Newsletter section

The template SHALL display a parallax-style dark-background newsletter section with a "Subscribe to our Newsletter" heading and an email input with subscribe button.

#### Scenario: Newsletter renders

- **WHEN** the page loads
- **THEN** the newsletter heading, email input, and subscribe button are visible

### Requirement: Footer

The template SHALL display a dark-background footer with brand name, description, social icons, Practice Areas list, Business Hours, Contact info, and a "More templates at Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** the footer shows the brand, practice areas, business hours, contact info, and the Component Dock link

### Requirement: App composition

The App component SHALL compose all sections in the correct order and set the document title.

#### Scenario: Full page renders

- **WHEN** the page loads
- **THEN** the document title is "Counsel — Lawyer & Legal Firm Template" and all sections are present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/counsel/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/counsel/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the brand link, all six section links, and the "Get a Quote" button are visible
- [ ] Hero section — the hero section shows the subheading, heading, and CTA button
- [ ] Services section — four service cards with icons, titles, and descriptions are visible
- [ ] Stats counter section — four stat boxes with numbers and labels are visible
- [ ] Practice areas section — all 10 practice area items are visible
- [ ] Attorneys section — four attorney cards with photos, names, and specializations are visible
- [ ] Consultation section — the consultation heading and CTA button are visible
- [ ] Testimonials section — the testimonials heading and 3 client quotes are visible
- [ ] Blog section — the blog heading and 3 post cards are visible
- [ ] Newsletter section — the newsletter heading, email input, and subscribe button are visible
- [x] App composition — the document title is "Counsel — Lawyer & Legal Firm Template" and all sections are present

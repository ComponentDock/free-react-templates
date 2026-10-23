# Template: Credix (Loan & Credit Company)

## Purpose

A loan and credit company landing page with navy blue and golden accent, featuring a hero section, feature highlights, skill indicators. It also includes services grid, contact/news section, newsletter signup, and a 4-column footer. Recreation of ColorLib "Credit" (https://colorlib.com/wp/template/credit/).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/credit/ (HTTP 200, 39,614 B, fetched 2026-10-23) and its theme stylesheet `theme/credit/style.css` (56,866 B, sha256 `0ecc0e70b54b…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ffbb38` | 48 declarations — `.section-heading .line`, `.tooltip-inner` |
| Other chromatic values | `#003679` | `#003679` × 33 (.preloader) |
| Surface | `#ffffff` | 58 declarations — `.section-heading.white p`, `.section-heading.white h2` |
| Ink / dark surface | `#212121` | 10 declarations — `.section-heading h2`, `.single-blog-area .blog-content .post-title` |
| Typeface | `"Open Sans", sans-serif` (7 rules — body)<br>`"Montserrat", sans-serif` (1 rule — h1) | `font-family` declarations in the theme sheet |
| Body type | `font-size: 14px` | `body{…}` rule |
| Radii | `5px`, `50%`, `30px` | `5px` (.credit-btn); `50%` (.preloader .lds-ellipsis div); `30px` (.single-news-area .news-content span) |

Palette in order of use: `#ffffff` ×58, `#ffbb38` ×48, `#003679` ×33, `#212121` ×10, `#838383` ×6, `#f1f7f9` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Full page render with all sections

The Credix app SHALL render a complete landing page with header, hero, features, stats, CTA banner, services, contact/news, newsletter, and footer sections.

#### Scenario: Document title and landmarks

- **WHEN** the Credix app loads
- **THEN** the document title is "Credix — Loan & Credit Company Template"
- **AND** the page contains a banner landmark (header)
- **AND** the page contains a main landmark
- **AND** the page contains a contentinfo landmark (footer)

#### Scenario: Hero section content

- **WHEN** the Credix app loads
- **THEN** the hero section displays the heading "get your loan now"
- **AND** the hero section displays a "Discover" call-to-action button

### Requirement: Features section with loan information

The features section SHALL display a heading card with "Our Loans" title and three image cards highlighting loan benefits.

#### Scenario: Feature cards

- **WHEN** the Credix app loads
- **THEN** the features section displays "Our Loans" heading
- **AND** the features section displays "We take care of you"
- **AND** the features section displays "No documents needed"
- **AND** the features section displays "Fast & easy loans"

### Requirement: Stats section with skill indicators

The stats section SHALL display three circular progress indicators showing Energy (90%), Power (75%), and Resource (97%).

#### Scenario: Skill indicators

- **WHEN** the Credix app loads
- **THEN** the stats section displays "Energy" with value "90%"
- **AND** the stats section displays "Power" with value "75%"
- **AND** the stats section displays "Resource" with value "97%"

### Requirement: Services section with 6 service cards

The services section SHALL display 6 service cards in a 3-column grid, each with an icon, title, and description.

#### Scenario: Service cards

- **WHEN** the Credix app loads
- **THEN** the services section displays 6 service card titles
- **AND** each card has a description paragraph

### Requirement: Newsletter section with email signup

The newsletter section SHALL display an email input field and a subscribe button.

#### Scenario: Newsletter form

- **WHEN** the Credix app loads
- **THEN** the newsletter section has an email input field
- **AND** the newsletter section has a "Subscribe" button

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the email input is cleared

### Requirement: Footer with Component Dock attribution

The footer SHALL display 4 widget columns and a copyright bar linking to Component Dock.

#### Scenario: Footer columns

- **WHEN** the Credix app loads
- **THEN** the footer contains "About Us" heading
- **AND** the footer contains "Solutions" heading
- **AND** the footer contains "Our Loans" heading
- **AND** the footer contains "Latest News" heading

#### Scenario: Component Dock link

- **WHEN** the Credix app loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

### Requirement: Navbar with mobile toggle

The navbar SHALL display navigation links and support a mobile toggle.

#### Scenario: Navigation links

- **WHEN** the Credix app loads
- **THEN** the navbar displays "Home", "About", "Services", "Blog", "Contact" links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle
- **THEN** the mobile menu opens with navigation links visible
- **AND** aria-expanded is "true"

#### Scenario: Mobile menu close on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/credix/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/credix/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Full page render with all sections — the document title is "Credix — Loan & Credit Company Template"
- [x] Features section with loan information — the features section displays "Our Loans" heading
- [x] Stats section with skill indicators — the stats section displays "Energy" with value "90%"
- [ ] Services section with 6 service cards — the services section displays 6 service card titles
- [ ] Newsletter section with email signup — the newsletter section has an email input field
- [x] Navbar with mobile toggle — the navbar displays "Home", "About", "Services", "Blog", "Contact" links

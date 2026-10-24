# Template: Reflexly (Photography Studio)

Recreation of ColorLib "Phozogy" (https://colorlib.com/wp/template/phozogy/).

## Purpose

Reflexly is a photography studio landing page template featuring a hero carousel, services grid, photo categories, filterable portfolio gallery, and a full footer with subscribe form. The design uses a green accent (#009603), Quantico headings, Open Sans body text, and a dark header/footer with white content sections.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/phozogy/ (HTTP 200, 35,428 B, sha256 `729481628ede…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `inline-style-1`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#009603` | 22 declarations — `.nav-menu ul li a:after`, `.primary-btn` |
| Other chromatic values | `#af00e1` (2), `#ff9e35` (2), `#40c4ff` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 38 declarations — `.primary-btn`, `.site-btn` |
| Ink / dark surface | `#000000` | 2 declarations — `#preloder`, `.search-model` |
| Typeface | `Open Sans` (2 rules — `html, body`)<br>`Quantico` (5 rules — `.primary-btn`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `60px` | `50%` (`.categories-slider.owl-carousel .owl-nav button`); `60px` (`.loader`) |
| Gradients | 2 declarations | `.blog-details-text .bd-tag-share .share a.instagram` |

Palette in order of use: `#444444` ×43, `#ffffff` ×38, `#111111` ×35, `#009603` ×22, `#c4c4c4` ×10, `#888888` ×7, `#666666` ×6, `#f5f5f5` ×5.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/phozogy/css/style.css` — 46,648 B, sha256 `0fd813727cf2…`.

<!-- role-rule-tokens: phozogy/ink -->
**Role rule (measured 2026-10-25):** 6 rule(s) own ink; strongest `h6{color:#111111}` — the design declares `#111111`; this prep states `#000000`, which no rule that owns the heading ink declares. The sibling prep `shotscape` states the measured value.
<!-- /role-rule-tokens -->

## Requirements

### Requirement: Header with navigation

The template SHALL display a fixed header with the logo "Reflexly", navigation links (Home, About, Services, Portfolio, Contact), and a search icon button.

#### Scenario: Logo displays brand name

- **WHEN** the page loads
- **THEN** the text "Reflexly" is visible in the header

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Services, Portfolio, and Contact are visible

#### Scenario: Search icon is accessible

- **WHEN** the page loads
- **THEN** a search icon button with an aria-label is present

### Requirement: Hero section with carousel

The template SHALL display a full-width hero section with a background image, heading "Photography Studio", description text, and a "Contact us" call-to-action button.

#### Scenario: Hero heading is displayed

- **WHEN** the page loads
- **THEN** a heading "Photography Studio" is visible

#### Scenario: Contact us button is present

- **WHEN** the page loads
- **THEN** a button labeled "Contact us" is visible

### Requirement: Services section

The template SHALL display three service cards in a grid: Shooting, Videos, and Editing, each with an image, title, and description.

#### Scenario: Three services are displayed

- **WHEN** the page loads
- **THEN** cards for Shooting, Videos, and Editing are visible

### Requirement: Categories section

The template SHALL display a categories section with a heading, a "View all" button, and a horizontal scrollable list of category cards (Animal, Natural, Portrait, Landscape, Wildlife) each showing an image, name, and picture count.

#### Scenario: Categories heading and button

- **WHEN** the page loads
- **THEN** a heading "Categories" and a "View all" button are visible

#### Scenario: Category cards display names and counts

- **WHEN** the page loads
- **THEN** category cards show names like "Animal" and counts like "120 pictures"

### Requirement: Portfolio section with filters

The template SHALL display a filterable portfolio grid with tabs (All, Fashion, Lifestyle, Natural, Wedding) and a "Load More" button.

#### Scenario: Filter tabs are present

- **WHEN** the page loads
- **THEN** tabs for All, Fashion, Lifestyle, Natural, and Wedding are visible

#### Scenario: Clicking a filter updates displayed items

- **WHEN** the user clicks the "Fashion" filter tab
- **THEN** only portfolio items tagged as Fashion are displayed

#### Scenario: Load More button

- **WHEN** the page loads
- **THEN** a "Load More" button is visible below the portfolio grid

### Requirement: Footer with Component Dock link

The template SHALL display a footer with logo, description, social icons, Instagram grid, quick links, subscribe form, and a copyright line linking to Component Dock.

#### Scenario: Footer displays Component Dock link

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is visible in the footer

#### Scenario: Subscribe form is present

- **WHEN** the page loads
- **THEN** an email input and a submit button are visible in the footer

#### Scenario: Quick links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Contact, Gallery, Portfolio, and Services are visible in the footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/reflexly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/reflexly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Header with navigation — the text "Reflexly" is visible in the header
- [x] Hero section with carousel — a heading "Photography Studio" is visible
- [ ] Services section — cards for Shooting, Videos, and Editing are visible
- [x] Categories section — a heading "Categories" and a "View all" button are visible
- [ ] Portfolio section with filters — tabs for All, Fashion, Lifestyle, Natural, and Wedding are visible

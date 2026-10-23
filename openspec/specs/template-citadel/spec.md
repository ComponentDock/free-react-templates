# Template: Citadel (Industrial / Construction Company)

**Source:** ColorLib "Durg" — https://colorlib.com/wp/template/durg/
**Preview:** https://preview.colorlib.com/theme/durg/
**New name:** Citadel

## Purpose

Citadel is an industrial/construction company landing page template. It showcases industrial services (construction, mechanical engineering, bridge construction), project portfolio, company info (location, hours, contact), and a call-to-action for industrial consulting. The design uses an orange (#ff5e13) accent color, dark navy (#020c26) backgrounds, and the Rubik Google Font for a modern industrial aesthetic.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/durg/ (HTTP 200, 31,871 B, sha256 `1ad146f261ba…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff5e13` | 46 declarations — `.boxed-btn`, `.boxed-btn:hover` |
| Other chromatic values | `#020c26` (24), `#415094` (7), `#4cd3e3` (5) | secondary hues in the same sheet |
| Surface | `#ffffff` | 80 declarations — `*::-moz-selection`, `::selection` |
| Ink / dark surface | `#000000` | 4 declarations — `.single-blog .thumb:after`, `.single-post-area .navigation-area .nav-left .thumb` |
| Typeface | `Rubik` (37 rules — `.boxed-btn`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `3px`, `8px`, `8.5px` | `50%` (`.about-area .about-thumb a.video-icon`); `3px` (`.genric-btn.radius`); `8px` (`.confirm-radio`); `8.5px` (`.default-switch`) |
| Gradients | 1 declaration | `.blog_area a:hover,.blog_area a :hover` |

Palette in order of use: `#ffffff` ×80, `#ff5e13` ×46, `#020c26` ×24, `#f9f9ff` ×23, `#5c5c5c` ×15, `#999999` ×13, `#415094` ×7, `#777777` ×6.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Header with navigation and contact info

The template SHALL display a top information bar with phone and email, plus a main navigation with logo, links, search icon, and "Get a Quote" CTA button.

#### Scenario: Top bar shows contact details

- **GIVEN** the user loads the page
- **THEN** the phone number "+1 (800) 256-3562" is visible
- **AND** the email "support@citadel.com" is visible

#### Scenario: Navigation links are present

- **GIVEN** the user loads the page
- **THEN** the nav shows Home, About, Services, Projects, Blog, Contact
- **AND** a "Get a Quote" button is visible

### Requirement: Hero slider with industrial messaging

The template SHALL display a hero section with tagline, heading, and CTA button on a dark background with white card overlay.

#### Scenario: Hero content is visible

- **GIVEN** the user loads the page
- **THEN** the tagline "Quality work. Trustable service. Dedicated team" is shown
- **AND** the heading "We provide your Industrial solution" is shown
- **AND** the "Our Services" CTA button is visible

### Requirement: Brand logos section

The template SHALL display 6 brand/partner logos on a gray background.

#### Scenario: Brand logos are shown

- **GIVEN** the user loads the page
- **THEN** 6 brand logo images are rendered on a gray background

### Requirement: Services section with 3 service cards

The template SHALL display a services section with section title and 3 service cards (image, title, description, Read More link).

#### Scenario: Services are displayed

- **GIVEN** the user loads the page
- **THEN** the section title "Our Services" is visible
- **AND** 3 service cards are shown: Industrial Construction, Mechanical Engineering, Bridge Construction
- **AND** each card has a "Read More" link

### Requirement: Projects section with dark overlay

The template SHALL display a projects section with dark background overlay, left-aligned title/description, and right-aligned project cards.

#### Scenario: Projects are displayed

- **GIVEN** the user loads the page
- **THEN** the heading "Take a look around our projects" is visible
- **AND** the "More Projects" link is visible
- **AND** 2 project cards are shown

### Requirement: CTA section

The template SHALL display a call-to-action section with heading, description, and action button.

#### Scenario: CTA content is visible

- **GIVEN** the user loads the page
- **THEN** the heading "Let's talk about your industrial problems" is visible
- **AND** the "Discuss now" button is visible

### Requirement: Location info section with 3 cards

The template SHALL display location information in 3 columns: address, opening hours, and contact details.

#### Scenario: Location cards are displayed

- **GIVEN** the user loads the page
- **THEN** "Our Location", "Opening Hours", and "Drop a Message" cards are visible
- **AND** "Get Direction" and "Mail Us" links are present

### Requirement: Footer with company info and Component Dock link

The template SHALL display a footer with logo, company links, solutions links, branch offices, social icons, and copyright linking to Component Dock.

#### Scenario: Footer content is present

- **GIVEN** the user loads the page
- **THEN** Company, Solutions, and Branch Office sections are shown
- **AND** social icons (Facebook, Twitter, LinkedIn) are present
- **AND** the copyright links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/citadel/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/citadel/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Header with navigation and contact info — the phone number "+1 (800) 256-3562" is visible
- [x] Hero slider with industrial messaging — the tagline "Quality work. Trustable service. Dedicated team" is shown
- [ ] Brand logos section — 6 brand logo images are rendered on a gray background
- [x] Services section with 3 service cards — the section title "Our Services" is visible
- [x] Projects section with dark overlay — the heading "Take a look around our projects" is visible
- [ ] CTA section — the heading "Let's talk about your industrial problems" is visible
- [x] Location info section with 3 cards — "Our Location", "Opening Hours", and "Drop a Message" cards are visible

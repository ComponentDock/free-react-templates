# Template: Photomuse (Photography)

Recreation of ColorLib Louie (https://colorlib.com/wp/template/louie/)

## Purpose

A photographer portfolio template featuring a fixed sidebar navigation, split hero section with author info, Instagram photo grid, and dark footer with contact details.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/louie/ (HTTP 200, 21,969 B, fetched 2026-10-23) and its theme stylesheet `theme/louie/css/style.css` (71,039 B, sha256 `116b552fc644…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ccb78f` | 14 declarations — `a`, `a:hover` |
| Other chromatic values | `#78d5ef`, `#4ac7ea` | `#78d5ef` × 8 (a); `#4ac7ea` × 2 (.btn-primary:hover) |
| Surface | `#ffffff` | 44 declarations — `body`, `.table .table` |
| Ink / dark surface | `#000000` | 38 declarations — `.close`, `.close:hover` |
| Typeface | `"Work Sans", sans-serif` (3 rules — body)<br>`"Montserrat", sans-serif` (2 rules — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529` | `body{…}` rule |
| Radii | `50%`, `0.25rem`, `4px` | `50%` (#colorlib-aside #colorlib-logo span.img); `0.25rem` (.form-control); `4px` (.tagcloud a) |

Palette in order of use: `#ffffff` ×44, `#000000` ×38, `#ccb78f` ×14, `#212529` ×8, `#6c757d` ×8, `#78d5ef` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Sidebar navigation

The template SHALL display a fixed left sidebar with author avatar, name, navigation links, and newsletter signup.

#### Scenario: Sidebar renders author identity

- **WHEN** the page loads
- **THEN** the sidebar displays an author avatar image and the name "Louie Smith"

#### Scenario: Sidebar navigation links

- **WHEN** the page loads
- **THEN** the sidebar contains links for Home, Collection, About Me, My Services, Blog, and Contact

#### Scenario: Newsletter signup form

- **WHEN** the page loads
- **THEN** the sidebar displays a newsletter heading and an email input with a submit button

### Requirement: Hero section

The template SHALL display a split hero section with a photographer portrait on the left and author info on the right.

#### Scenario: Hero author info

- **WHEN** the page loads
- **THEN** the hero shows a greeting "Hello! I'm", the author name, tagline "A Photographer. I Capture Life", a bio paragraph, a cursive signature, and social media links

#### Scenario: Hero portrait image

- **WHEN** the page loads
- **THEN** the hero displays a photographer portrait image

### Requirement: Instagram photo grid

The template SHALL display an Instagram photo grid with a heading and five images.

#### Scenario: Instagram grid renders

- **WHEN** the page loads
- **THEN** the section shows "Follow me on Instagram" and five images with hover overlay

### Requirement: Footer

The template SHALL display a dark footer with recent photos, archives, and contact information.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows Recent Photos thumbnails, monthly Archives, contact address/phone/email, and a Component Dock attribution link

### Requirement: Component Dock branding

The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer attribution

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/photomuse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/photomuse/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Sidebar navigation — the sidebar displays an author avatar image and the name "Louie Smith"
- [ ] Hero section — the hero shows a greeting "Hello! I'm", the author name, tagline "A Photographer. I Capture Life", a bio paragraph, a cursive signature, and social media links
- [x] Instagram photo grid — the section shows "Follow me on Instagram" and five images with hover overlay

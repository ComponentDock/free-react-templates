# Template: Reframe (Construction)

## Purpose

Recreate ColorLib "Pivot" (https://colorlib.com/wp/template/pivot/) as a React 19 + Tailwind CSS 4 + TypeScript template named "Reframe". The original is a construction company landing page with hero, about, projects, services, news, testimonials, CTA, and footer sections.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/pivot/ (HTTP 200, 28,011 B, fetched 2026-10-23) and its theme stylesheet `theme/pivot/css/style.css` (15,499 B, sha256 `9c17cffcf977…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 13 declarations — `.btn.btn-outline-primary`, `header .navbar-brand span` |
| Other chromatic values | `#3395ff` | `#3395ff` × 2 (.btn.btn-primary:hover) |
| Surface | `#ffffff` | 19 declarations — `.btn.btn-primary`, `.btn.btn-outline-primary:hover` |
| Ink / dark surface | `#000000` | 5 declarations — `h1`, `h2` |
| Typeface | `"Ionicons"` (1 rule — .list-unstyled.check li:before)<br>`"K2D", sans-serif` (1 rule — h1) | `font-family` declarations in the theme sheet |
| Body type | `font-weight: 300; font-size: 16px; line-height: 1.8; color: #6c757d` | `body{…}` rule |
| Radii | `50%`, `16px`, `4px` | `50%` (.owl-carousel .owl-dots .owl-dot); `16px` (#loader); `4px` (.media-feature) |

Palette in order of use: `#ffffff` ×19, `#007bff` ×13, `#000000` ×5, `#6c757d` ×3, `#3395ff` ×2, `#ced4da` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with sticky behavior and mobile toggle

The template SHALL display a fixed navbar with logo, navigation links (Home, Services dropdown, Projects, News, About, Contact), and a "Quotation" button. The navbar SHALL become opaque on scroll and SHALL support a mobile hamburger menu.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the logo "Reframe", all nav links, and the "Quotation" button

#### Scenario: Navbar becomes opaque on scroll

- **WHEN** the user scrolls past 60px
- **THEN** the navbar background changes from transparent to white with a shadow

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger icon on a mobile viewport
- **THEN** a mobile menu with all navigation links is displayed

#### Scenario: Services dropdown

- **WHEN** the user hovers over "Services" on desktop
- **THEN** a dropdown shows Pre-Construction, General Construction, and House Renovation sub-links

### Requirement: Hero section with background image and CTA

The template SHALL display a full-width hero section with a dark overlay, construction background image, heading text, subtitle, and a "Get Started" CTA button.

#### Scenario: Hero content renders

- **WHEN** the hero section loads
- **THEN** the heading "We Are Leading The Way Construction Works" and subtitle are visible with a "Get Started" button linking to #contact

### Requirement: About section with text and image

The template SHALL display an about section with a heading, blue accent underline, descriptive paragraphs, and a construction worker image in a two-column layout.

#### Scenario: About content renders

- **WHEN** the about section loads
- **THEN** the heading, blue underline accent, text, and image are visible

### Requirement: Projects grid section

The template SHALL display a projects section with a heading and a 3-column grid of project cards, each with an image and title.

#### Scenario: Projects render

- **WHEN** the projects section loads
- **THEN** three project cards appear with titles "House Renovation", "General Construction Building", and "Pre-Construction"

### Requirement: Services section with icon cards

The template SHALL display a services section with 3 service cards, each containing an icon, title, and description.

#### Scenario: Services render

- **WHEN** the services section loads
- **THEN** three service cards appear with icons, titles, and descriptions

### Requirement: News section with article cards

The template SHALL display a news section with 4 article cards in a grid, each with an image, date, and title.

#### Scenario: News articles render

- **WHEN** the news section loads
- **THEN** four news cards appear with images, dates, and titles

### Requirement: Testimonials section

The template SHALL display a testimonials section with customer quotes and author attributions.

#### Scenario: Testimonials render

- **WHEN** the testimonials section loads
- **THEN** at least two testimonial cards appear with quotes and author names

### Requirement: CTA section

The template SHALL display a call-to-action section with a heading and a "Get Started" button.

#### Scenario: CTA renders

- **WHEN** the CTA section loads
- **THEN** the heading "Contact Us For Projects or Need a Quotation" and a "Get Started" button are visible

### Requirement: Footer with Component Dock link

The template SHALL display a dark footer with company info (address, phone, email), quick links, social links, and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock". The footer SHALL NOT contain any ColorLib references.

#### Scenario: Footer renders with contact info

- **WHEN** the footer loads
- **THEN** address, phone, email, quick links, and social links are visible

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

#### Scenario: No ColorLib references in footer

- **WHEN** the footer renders
- **THEN** no text containing "colorlib" (case-insensitive) is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/reframe/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/reframe/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with sticky behavior and mobile toggle — the navbar shows the logo "Reframe", all nav links, and the "Quotation" button
- [x] Hero section with background image and CTA — the heading "We Are Leading The Way Construction Works" and subtitle are visible with a "Get Started" button linking to #contact
- [ ] About section with text and image — the heading, blue underline accent, text, and image are visible
- [x] Projects grid section — three project cards appear with titles "House Renovation", "General Construction Building", and "Pre-Construction"
- [ ] Services section with icon cards — three service cards appear with icons, titles, and descriptions
- [ ] News section with article cards — four news cards appear with images, dates, and titles
- [ ] Testimonials section — at least two testimonial cards appear with quotes and author names
- [x] CTA section — the heading "Contact Us For Projects or Need a Quotation" and a "Get Started" button are visible

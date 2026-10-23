# Template: Panorama (Web Agency Portfolio)

## Purpose

Recreation of ColorLib "Scenic" (https://colorlib.com/wp/template/scenic/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio template. Delivers a full web agency landing experience with video-hero background, about section, stats counters, services grid, filterable portfolio gallery, video CTA, blog posts, and multi-column footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/scenic/ (HTTP 200, 22,757 B, fetched 2026-10-23) and its theme stylesheet `theme/scenic/css/style.css` (30,394 B, sha256 `c48c8707ad0f…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 18 declarations — `.home-section .scroll-button`, `.site-mobile-menu .site-nav-wrap a:hover` |
| Other chromatic values | `#001f42`, `#3395ff` | `#001f42` × 2 (.site-footer); `#3395ff` × 2 (.btn.btn-primary:hover) |
| Surface | `#ffffff` | 29 declarations — `.site-navbar .site-logo a`, `.site-navbar .site-menu-toggle` |
| Ink / dark surface | `#000000` | 13 declarations — `h1`, `h2` |
| Body type | `font-weight: 400; font-size: 1rem; line-height: 1.7` | `body{…}` rule |
| Radii | `50%`, `7px`, `4px` | `50%` (.site-mobile-menu .site-nav-wrap .arrow-collapse); `7px` (.img-shadow); `4px` (.block__86547) |
| Surface (measured) | `#007eff` | paints it ×12 — `background-color` on `.bg-primary`; custom-bs.css (35,950 B, sha256 fb029ca1be17) · <https://preview.colorlib.com/theme/scenic/> |

Palette in order of use: `#ffffff` ×29, `#007bff` ×18, `#000000` ×13, `#212529` ×4, `#cccccc` ×4, `#f8f9fa` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with logo and navigation links

The template SHALL render a sticky navbar with the brand name "Panorama" and navigation links: Home, About, Portfolio, Services, Blog, Contact. On mobile, a hamburger toggle SHALL show/hide a slide-down menu.

#### Scenario: Desktop navbar renders logo and links

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** I see a link "Panorama" pointing to #home
- **AND** I see links "Home", "About", "Portfolio", "Services", "Blog", "Contact"

#### Scenario: Mobile menu toggles open and closed

- **GIVEN** the page is loaded on a mobile viewport
- **WHEN** I click the "Open menu" button
- **THEN** the mobile menu is visible
- **WHEN** I click the "Close menu" button
- **THEN** the mobile menu is hidden

### Requirement: Hero section with background image and CTA

The template SHALL render a full-viewport hero section with a background image, dark overlay, heading "We Are Panorama", descriptive text, and a "Get in touch" CTA button. A scroll-down arrow SHALL link to the about section.

#### Scenario: Hero renders heading and CTA

- **GIVEN** the page is loaded
- **THEN** I see a heading "We Are Panorama"
- **AND** I see a link "Get in touch" pointing to #contact

#### Scenario: Hero has scroll-down arrow

- **GIVEN** the page is loaded
- **THEN** I see a link "Scroll to about section" pointing to #about

### Requirement: About section with overlapping images

The template SHALL render an About section with subtitle "About Us", heading "Who Are You Guys", description paragraphs, a "Read more about us" link, and two overlapping images.

#### Scenario: About section renders content

- **GIVEN** the page is loaded
- **THEN** I see a heading "Who Are You Guys"
- **AND** I see text "About Us"

### Requirement: Stats counter section

The template SHALL render a 4-column stats section showing: Completed Projects (2393), Awards (54), Team (120), Lines of Code (550).

#### Scenario: Stats section renders all values

- **GIVEN** the page is loaded
- **THEN** I see text "2393" and "Completed Projects"
- **AND** I see text "54" and "Winners & Awards"

### Requirement: Services grid with 6 cards

The template SHALL render a services section with light background, subtitle "Our Services", heading "Services", and 6 service cards (Graphic Design, Marketing Strategy, Web Design, SEO, Market Leading, Pixel Perfect Design). A "View All Services" button SHALL be present.

#### Scenario: Services section renders all cards

- **GIVEN** the page is loaded
- **THEN** I see heading "Services"
- **AND** I see 6 service card headings

### Requirement: Filterable portfolio grid

The template SHALL render a portfolio section with filter buttons (All, Web, Design, Brand) and a 3-column image grid. Clicking a filter SHALL show only items in that category.

#### Scenario: Portfolio shows all items by default

- **GIVEN** the page is loaded
- **THEN** I see 9 portfolio images

#### Scenario: Portfolio filters by category

- **GIVEN** the page is loaded
- **WHEN** I click "Design"
- **THEN** I see 2 portfolio images

### Requirement: Video CTA section

The template SHALL render a video call-to-action section with a video thumbnail, play button, subtitle "Watch the video", heading "We Are Web Agency", and description text.

#### Scenario: Video CTA renders content

- **GIVEN** the page is loaded
- **THEN** I see heading "We Are Web Agency"
- **AND** I see a "Play video" button

### Requirement: Blog posts section

The template SHALL render a blog section with subtitle "Read the latest post", heading "Blog Posts", and 4 blog cards each with image, title, author, date, and comment count.

#### Scenario: Blog section renders all posts

- **GIVEN** the page is loaded
- **THEN** I see heading "Blog Posts"
- **AND** I see 4 blog card headings

### Requirement: Footer with Component Dock link

The template SHALL render a footer with 4 columns (Products, Company, Support, Contact Us with social icons), a copyright line, and a link to https://www.componentdock.com/ branded as "Component Dock". A scroll-to-top button SHALL be present.

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the page is loaded
- **THEN** I see a link "Component Dock" pointing to https://www.componentdock.com/
- **AND** I see social icons for Facebook, Twitter, Instagram, LinkedIn

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/panorama/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/panorama/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with logo and navigation links — I see a link "Panorama" pointing to #home
- [x] Hero section with background image and CTA — I see a heading "We Are Panorama"
- [x] About section with overlapping images — I see a heading "Who Are You Guys"
- [x] Stats counter section — I see text "2393" and "Completed Projects"
- [x] Services grid with 6 cards — I see heading "Services"
- [ ] Filterable portfolio grid — I see 9 portfolio images
- [x] Video CTA section — I see heading "We Are Web Agency"
- [x] Blog posts section — I see heading "Blog Posts"

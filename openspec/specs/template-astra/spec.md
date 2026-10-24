---
name: astra
description: Branding agency landing page — recreation of ColorLib Stellar
source: https://colorlib.com/wp/template/stellar/
preview: https://preview.colorlib.com/theme/stellar/
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
---

# Template: Astra (Business)

## Purpose

Astra is a creative branding agency landing page with a parallax hero, services and portfolio grids, client logos, stat counters and a contact form. It recreates the ColorLib "Stellar" design (https://colorlib.com/wp/template/stellar/).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/stellar/ (HTTP 200, 41,030 B, fetched 2026-10-23) and its theme stylesheet `theme/stellar/css/style.min.css` (76,585 B, sha256 `3b73ff5fa662…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f26522` | 13 declarations — `ul.disc li:before`, `.video-embed:hover .video-embed__play` |
| Other chromatic values | `#bf4a12`, `#f5854f`, `#a3282a` | `#bf4a12` × 9 (a); `#f5854f` × 5 (.s-services a); `#a3282a` × 2 (.alert-box--error) |
| Surface | `#ffffff` | 45 declarations — `.kit-video-dialog__stage.is-map`, `.kit-video-dialog` |
| Ink / dark surface | `#000000` | 33 declarations — `.kit-video-dialog__stage`, `h1` |
| Typeface | `Montserrat, sans-serif` (29 rules — .pswp)<br>`Merriweather, serif` (8 rules — body) | `font-family` declarations in the theme sheet |
| Radii | `3px`, `50%`, `100%` | `3px` (.owl-theme:where(.kit-owl) .owl-nav [class*=owl-]); `50%` (ul.disc li:before); `100%` (.testimonials__avatar) |

Palette in order of use: `#ffffff` ×45, `#000000` ×33, `#f26522` ×13, `#151515` ×11, `#bf4a12` ×9, `#f5854f` ×5.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and mobile menu

The template SHALL display a sticky navigation bar with logo "Astra" and links to Home, About, Services, Works, and Contact sections. The navbar SHALL toggle a mobile menu on hamburger click.

#### Scenario: Desktop navigation links

- **WHEN** the page loads
- **THEN** the navbar displays links for Home, About, Services, Works, and Contact

#### Scenario: Mobile menu toggle

- **WHEN** user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking the close button closes it

### Requirement: Hero section with parallax background

The template SHALL display a full-viewport hero section with a dark overlay, headline text, CTA button, play video link, scroll link, and social sidebar.

#### Scenario: Hero content

- **WHEN** the hero section is visible
- **THEN** the headline reads "We provide creative solutions to turn your ideas into digital reality"
- **AND** a "More About Us" button links to #about
- **AND** social icons for Facebook, Twitter, Instagram, Behance, and Dribbble are displayed

### Requirement: About section with process grid

The template SHALL display an "About" section with subhead "01 Who We Are", heading, description, and a 2x2 grid of process cards (Planning, Branding, Implementation, Documentation).

#### Scenario: About content

- **WHEN** the About section is visible
- **THEN** the subhead shows "01 Who We Are"
- **AND** four process cards are displayed

### Requirement: Services section with dark background

The template SHALL display a "Services" section with dark background, subhead "02 What We Do", heading, and 6 service cards in a 3x2 grid.

#### Scenario: Services grid

- **WHEN** the Services section is visible
- **THEN** six service cards are displayed (Brand Identity, Illustration, Web Design, Product Strategy, UI/UX Design, Mobile Design)

### Requirement: Works section with portfolio and testimonials

The template SHALL display a "Works" section with light background, subhead "03 Recent Works", 8 portfolio items in a 4x2 grid, and a testimonials subsection with 3 testimonials.

#### Scenario: Portfolio grid

- **WHEN** the Works section is visible
- **THEN** eight portfolio items are displayed with images, titles, and categories

#### Scenario: Testimonials

- **WHEN** the Works section is visible
- **THEN** three testimonials are displayed with quotes, author names, and positions

### Requirement: Clients section with logo grid

The template SHALL display a "Clients" section with dark background, subhead "04 Selected Clients", heading, and 8 client logo placeholders in a 4x2 grid.

#### Scenario: Client logos

- **WHEN** the Clients section is visible
- **THEN** eight client placeholders are displayed

### Requirement: Stats section with counter values

The template SHALL display a stats row with 4 counter items: 213 Projects Completed, 179 Happy Clients, 35 Awards Received, 2319 Cups of Coffee.

#### Scenario: Stats display

- **WHEN** the Stats section is visible
- **THEN** four stat items are displayed with labels and numeric values

### Requirement: Contact section with form and info

The template SHALL display a "Contact" section with dark background, subhead "05 Get In Touch", address, social links, contact info, CTA button, and subscribe form.

#### Scenario: Contact form

- **WHEN** user enters a valid email and clicks Subscribe
- **THEN** a "Thanks for subscribing!" message is shown

#### Scenario: Empty email submission

- **WHEN** user submits the form with empty email
- **THEN** the form does not show the thanks message

### Requirement: Footer with Component Dock link

The template SHALL display a footer with copyright text and a link to https://www.componentdock.com/.

#### Scenario: Footer link

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ is displayed with "Component Dock" text

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/astra/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/astra/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with navigation and mobile menu — the navbar displays links for Home, About, Services, Works, and Contact
- [x] Hero section with parallax background — the headline reads "We provide creative solutions to turn your ideas into digital reality"
- [x] About section with process grid — the subhead shows "01 Who We Are"
- [ ] Services section with dark background — six service cards are displayed (Brand Identity, Illustration, Web Design, Product Strategy, UI/UX Design, Mobile Design)
- [ ] Works section with portfolio and testimonials — eight portfolio items are displayed with images, titles, and categories
- [ ] Clients section with logo grid — eight client placeholders are displayed
- [ ] Stats section with counter values — four stat items are displayed with labels and numeric values
- [x] Contact section with form and info — a "Thanks for subscribing!" message is shown

---
name: template-kinetic
description: >
  Recreation of ColorLib "Bobsled" creative agency landing page.
  Original: https://colorlib.com/wp/template/bobsled/
  Preview: https://preview.colorlib.com/theme/bobsled/
---

# Template: Kinetic (Landing Page)

## Purpose

Kinetic is a free creative agency landing page template that recreates the ColorLib "Bobsled" design under a new name. It features a gradient hero, step-by-step working process, feature cards, portfolio showcase, newsletter signup, and contact form — built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bobsled/ (HTTP 200, 17,947 B, fetched 2026-10-23) and its theme stylesheet `theme/bobsled/css/main.css` (33,377 B, sha256 `be77bd91ed3a…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#3e69fe` | 20 declarations — `b`, `i` |
| Other chromatic values | `#4cd3e3`, `#38a4ff`, `#f44a40` | `#4cd3e3` × 7 (.genric-btn.success); `#38a4ff` × 6 (.genric-btn.info); `#f44a40` × 6 (.genric-btn.danger) |
| Surface | `#ffffff` | 68 declarations — `.text-white`, `.button-area` |
| Ink / dark surface | `#222222` | 12 declarations — `h1`, `h2` |
| Typeface | `"Poppins", sans-serif` (3 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `color: #777777; font-size: 14px; font-weight: 300; line-height: 1.5em` | `body{…}` rule |
| Radii | `3px`, `8px`, `8.5px` | `3px` (.genric-btn.radius); `8px` (.primary-radio); `8.5px` (.default-switch) |

Palette in order of use: `#ffffff` ×68, `#f9f9ff` ×28, `#3e69fe` ×20, `#222222` ×12, `#4cd3e3` ×7, `#38a4ff` ×6.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with mobile menu

The template SHALL display a navigation bar with the brand name "Kinetic" and links to Home, About, Services, Portfolio, and Contact sections. On mobile viewports, a hamburger toggle SHALL show/hide the mobile navigation menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays "Kinetic" logo text and links: Home, About, Services, Portfolio, Contact

#### Scenario: Mobile menu toggle

- **WHEN** the hamburger button is clicked on a mobile viewport
- **THEN** the mobile navigation menu opens with all nav links visible

### Requirement: Hero section with gradient background

The template SHALL display a hero section with a blue-to-teal gradient background, a heading "Don't look anywhere, This is the best place on web", a subtitle paragraph, and a "Get Started" CTA button linking to the About section.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** the hero heading contains "best place on web" and a "Get Started" CTA is visible

### Requirement: Working process section

The template SHALL display a "Our Working Process" section with 4 inline steps: Researching, Wireframing, Prototyping, Final Design — each with an icon.

#### Scenario: Four process steps are displayed

- **WHEN** the page loads
- **THEN** labels "Researching", "Wireframing", "Prototyping", and "Final Design" are all visible

### Requirement: Features section with cards

The template SHALL display an "Our Exclusive Features" section on a gradient background with 3 feature cards (Creative Design, Appropriate UX, Super Clean Code), each with an image, description, and "Read More" link.

#### Scenario: Three feature cards render

- **WHEN** the page loads
- **THEN** 3 feature cards are visible with "Read More" links

### Requirement: Remarkable works portfolio section

The template SHALL display a "Remarkable Works" section with 3 alternating image/text portfolio rows, each with a "View Project" link.

#### Scenario: Three portfolio items render

- **WHEN** the page loads
- **THEN** 3 portfolio items are visible with "View Project" links

### Requirement: Story section

The template SHALL display a story section on a gradient background with a "From the part of beginning" heading, description paragraph, and "Get Started" CTA linking to the Contact section.

#### Scenario: Story content renders

- **WHEN** the page loads
- **THEN** the heading contains "From the part of beginning" and a CTA links to #contact

### Requirement: Newsletter signup

The template SHALL display a newsletter section with a "Subscribe for our Newsletter" heading, an email input, and a "Get Started" submit button.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** an email input and "Get Started" button are visible

### Requirement: Contact form

The template SHALL display a "Keep in Touch" contact form with name, email, and message inputs and a "Send Message" button. Form submission SHALL be prevented (no page reload).

#### Scenario: Contact form renders with all fields

- **WHEN** the page loads
- **THEN** name, email, and message inputs are visible with a "Send Message" button

### Requirement: Footer with Component Dock link

The template SHALL display a footer with Address, Email, and Phone info columns, a bottom bar with the brand name, copyright text, a link to https://www.componentdock.com/ branded as "Component Dock", and social media icon links.

#### Scenario: Footer renders info and Component Dock attribution

- **WHEN** the page loads
- **THEN** Address, Email, Phone sections are visible, a link to "https://www.componentdock.com/" is present, and social icons exist

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/kinetic/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/kinetic/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with mobile menu — the navbar displays "Kinetic" logo text and links: Home, About, Services, Portfolio, Contact
- [x] Hero section with gradient background — the hero heading contains "best place on web" and a "Get Started" CTA is visible
- [x] Working process section — labels "Researching", "Wireframing", "Prototyping", and "Final Design" are all visible
- [x] Features section with cards — 3 feature cards are visible with "Read More" links
- [x] Remarkable works portfolio section — 3 portfolio items are visible with "View Project" links
- [x] Story section — the heading contains "From the part of beginning" and a CTA links to #contact
- [x] Newsletter signup — an email input and "Get Started" button are visible
- [x] Contact form — name, email, and message inputs are visible with a "Send Message" button

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/kinetic/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4cd3e3` — nearest `#1da1f2` (d=70)
- `#38a4ff` — nearest `#1da1f2` (d=30)
- `#f44a40` — nearest `#a3e635` (d=176)
<!-- live-palette-unverified:end -->

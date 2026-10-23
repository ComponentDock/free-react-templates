---
name: Atelier
slug: atelier
description: Creative agency / business landing page template
source: https://colorlib.com/wp/template/design/
preview: https://preview.colorlib.com/theme/design/
---

# Template: Atelier (Bootstrap)

## Purpose

Atelier is a creative agency landing page with a split hero, achievement stats, process steps, services, a testimonial carousel and blog cards. It recreates the ColorLib "Design" design with Vite, React 19, Tailwind CSS 4 and TypeScript.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/design/ (HTTP 200, 24,558 B, fetched 2026-10-23) and its theme stylesheet `theme/design/css/style.css` (27,802 B, sha256 `4567f225ba66…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#1264fa` | 29 declarations — `.btn.btn-primary`, `a` |
| Other chromatic values | `#000839`, `#2671fa` | `#000839` × 5 (body); `#2671fa` × 2 (.btn.btn-primary:hover) |
| Surface | `#ffffff` | 11 declarations — `.site-nav .site-navigation .site-menu > li.cta-button a:hover`, `body` |
| Ink / dark surface | `#000000` | 9 declarations — `.site-mobile-menu-close > span:before`, `.site-nav .site-navigation .site-menu > li > a` |
| Typeface | `"Montserrat", sans-serif` (2 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `line-height: 1.8; font-size: 1em; color: #000839` | `body{…}` rule |
| Radii | `50%`, `30px`, `4px` | `50%` (.site-mobile-menu .site-nav-wrap .arrow-collapse); `30px` (.btn); `4px` (.control__indicator) |

Palette in order of use: `#1264fa` ×29, `#ffffff` ×11, `#000000` ×9, `#f8f9fa` ×6, `#000839` ×5, `#2671fa` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with logo, links, and mobile menu

The template SHALL render a sticky navbar with the logo "Atelier", navigation links (Home, About, Services, Blog, Contact), and a "Get Started" CTA button. On mobile, a hamburger toggle shows/hides a mobile menu.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the logo, all navigation links, and the CTA button

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu becomes visible
- **AND** clicking a link closes the menu

### Requirement: Hero section with split layout

The template SHALL render a hero section with a left column containing a heading, paragraph, CTA button, and feature cards, and a right column with an image and quote overlay.

#### Scenario: Hero displays heading and CTA

- **WHEN** the hero section renders
- **THEN** the heading "Create, Code, and Published." is visible
- **AND** a "Get Started" button is present

#### Scenario: Hero displays feature cards

- **WHEN** the hero section renders
- **THEN** two feature cards with icons and descriptions are visible

### Requirement: Achievements statistics section

The template SHALL render 4 stat columns showing performance metrics.

#### Scenario: Stats are displayed

- **WHEN** the achievements section renders
- **THEN** four stat values are visible: 99.55%, 98,000+, 99.99%, and 1M+

### Requirement: How It Works process steps

The template SHALL render a 3-step process section with icons, titles, and descriptions.

#### Scenario: Three steps are shown

- **WHEN** the how-it-works section renders
- **THEN** three step cards are visible with numbered titles

### Requirement: Services section with checklist

The template SHALL render a services section with a heading, paragraph, checkmark list, and CTA on the left, and a decorative image on the right.

#### Scenario: Services content is visible

- **WHEN** the services section renders
- **THEN** a heading, paragraph, 3 checklist items, and a "Get Started" button are visible

### Requirement: Testimonial carousel

The template SHALL render a testimonial carousel with navigation dots.

#### Scenario: Default testimonial is shown

- **WHEN** the testimonial section renders
- **THEN** the first testimonial with author name and role is visible

#### Scenario: Dot navigation works

- **WHEN** the user clicks a navigation dot
- **THEN** the corresponding testimonial is displayed

### Requirement: Blog section with post cards

The template SHALL render a blog section with 5 post cards showing dates, titles, and descriptions.

#### Scenario: Blog posts are displayed

- **WHEN** the blog section renders
- **THEN** 5 blog post cards are visible with dates and titles

### Requirement: Footer with Component Dock link

The template SHALL render a footer with about text, social icons, navigation columns, and a copyright line linking to Component Dock.

#### Scenario: Footer renders all elements

- **WHEN** the footer renders
- **THEN** social media links are present
- **AND** navigation columns are visible
- **AND** the Component Dock link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/atelier/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/atelier/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with logo, links, and mobile menu — the navbar displays the logo, all navigation links, and the CTA button
- [x] Hero section with split layout — the heading "Create, Code, and Published." is visible
- [ ] Achievements statistics section — four stat values are visible: 99.55%, 98,000+, 99.99%, and 1M+
- [ ] How It Works process steps — three step cards are visible with numbered titles
- [x] Services section with checklist — a heading, paragraph, 3 checklist items, and a "Get Started" button are visible
- [ ] Testimonial carousel — the first testimonial with author name and role is visible
- [ ] Blog section with post cards — 5 blog post cards are visible with dates and titles

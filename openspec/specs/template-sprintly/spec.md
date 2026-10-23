---
name: Sprintly
description: >
  Fitness & sport landing template recreating ColorLib "Activitar"
  (https://colorlib.com/wp/template/activitar/) under a new name.
  Dark-themed gym/fitness site with hero carousel, feature cards,
  class timetable, pricing plans, and blog section.
source:
  colorlib_slug: activitar
  preview_url: https://preview.colorlib.com/theme/activitar/
  screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/activitar-free-template.jpg
design_tokens:
  fonts:
    headings: Oswald
    body: Nunito Sans
  colors:
    primary: '#e16521'
    secondary: '#e4381C'
    accent_gold: '#ffca04'
    dark_bg: '#111111'
    dark_surface: '#1a1a1a'
---

# Template: Sprintly (Health Fitness)

## Purpose

Sprintly is a dark-themed fitness and sport landing page template. It recreates the ColorLib "Activitar" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application with 100% test coverage.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/activitar/ (HTTP 200, 51,744 B, sha256 `baf74d391e8c…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `inline-style-0`, `inline-style-1`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#e4381c` | 52 declarations — `.nav-menu .mainmenu ul li.active a`, `.primary-btn:after` |
| Other chromatic values | `#e16521` (28), `#ffca04` (1), `#7d2719` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 111 declarations — `.section-title h2`, `.section-title p` |
| Ink / dark surface | `#000000` | 6 declarations — `#preloder`, `.map-contact-detalis .open-time h5` |
| Typeface | `Oswald` (14 rules — `.primary-btn`)<br>`Nunito Sans` (6 rules — `.single-hero-item .hero-text h2`) | `font-family` declarations in the design sheet |
| Radii | `2px`, `50%`, `4px`, `3px` | `2px` (`.price-section .toggle-option li .switch .slider`); `50%` (`.hero-items .owl-dots button.owl-dot`); `4px` (`.blog-single-sidebar .bs-latest-news .bl-item`); `3px` (`.blog-option .blog-option-right .show-result`) |
| Gradients | 26 declarations | `.classtime-table table tbody tr td:after`, `.primary-btn:after` |

Palette in order of use: `#ffffff` ×111, `#e4381c` ×52, `#e16521` ×28, `#151515` ×20, `#272727` ×17, `#000000` ×6, `#afb4bf` ×5, `#a6a6a6` ×5.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/activitar/css/style.css` — 54,948 B, sha256 `f518adaed484…`.

## Requirements

### Requirement: Page structure and sections

The template SHALL render all sections in the correct order from top to bottom.

#### Scenario: Renders all sections

- **WHEN** the app loads
- **THEN** the page contains a Navbar, Hero, Features, About, Programs, Class Timetable, Pricing, Why Choose Us, Video CTA, Blog, and Footer sections

#### Scenario: Sets document title

- **WHEN** the app loads
- **THEN** the document title is "Sprintly — Fitness & Sport Template"

### Requirement: Navbar with navigation

The navbar SHALL display a logo, navigation links, and a mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the Navbar renders
- **THEN** it shows the logo "Sprintly" and links: Home, About, Classes, Schedule, Pricing, Blog, Contact

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu expands
- **WHEN** the user clicks the close button
- **THEN** the mobile menu collapses

### Requirement: Hero section

The hero section SHALL display a large heading, subtitle, and CTA button.

#### Scenario: Hero content

- **WHEN** the Hero section renders
- **THEN** it shows heading "Fitness & Sport", subtitle "Join Us Now", and a "Get Started" button

### Requirement: Features section with three cards

The features section SHALL display 3 feature cards with titles and descriptions.

#### Scenario: Three feature cards

- **WHEN** the Features section renders
- **THEN** it displays 3 cards each with a title and description

### Requirement: About section

The about section SHALL display a heading and description.

#### Scenario: About content

- **WHEN** the About section renders
- **THEN** it shows heading "Welcome to Sprintly" and a description paragraph

### Requirement: Programs section with four cards

The programs section SHALL display 4 program cards.

#### Scenario: Four program cards

- **WHEN** the Programs section renders
- **THEN** it displays 4 cards each with a title and description

### Requirement: Class timetable

The timetable section SHALL display a weekly schedule grid.

#### Scenario: Schedule grid

- **WHEN** the Class Timetable renders
- **THEN** it shows days of the week with class entries

### Requirement: Pricing section with three plans

The pricing section SHALL display 3 pricing plans.

#### Scenario: Three pricing plans

- **WHEN** the Pricing section renders
- **THEN** it displays 3 plans each with a name, price, features list, and CTA button

### Requirement: Why Choose Us section

The section SHALL display 6 items with icons and descriptions.

#### Scenario: Six reason items

- **WHEN** the Why Choose Us section renders
- **THEN** it displays 6 items each with an icon and description

### Requirement: Blog section with three posts

The blog section SHALL display 3 blog post cards.

#### Scenario: Three blog posts

- **WHEN** the Blog section renders
- **THEN** it displays 3 cards each with a title, excerpt, and image

### Requirement: Footer with Component Dock link

The footer SHALL link to Component Dock and display contact info.

#### Scenario: Footer content

- **WHEN** the Footer renders
- **THEN** it displays "More templates at Component Dock" linking to https://www.componentdock.com/
- **AND** it shows contact information and social links

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sprintly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sprintly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page structure and sections — the page contains a Navbar, Hero, Features, About, Programs, Class Timetable, Pricing, Why Choose Us, Video CTA, Blog, and Footer sections
- [x] Navbar with navigation — it shows the logo "Sprintly" and links: Home, About, Classes, Schedule, Pricing, Blog, Contact
- [x] Hero section — it shows heading "Fitness & Sport", subtitle "Join Us Now", and a "Get Started" button
- [ ] Features section with three cards — it displays 3 cards each with a title and description
- [x] About section — it shows heading "Welcome to Sprintly" and a description paragraph
- [ ] Programs section with four cards — it displays 4 cards each with a title and description
- [ ] Class timetable — it shows days of the week with class entries
- [ ] Pricing section with three plans — it displays 3 plans each with a name, price, features list, and CTA button
- [ ] Why Choose Us section — it displays 6 items each with an icon and description
- [ ] Blog section with three posts — it displays 3 cards each with a title, excerpt, and image

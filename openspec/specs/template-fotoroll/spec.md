# Fotoroll — Photography Portfolio Template

> Recreation of ColorLib "Photography 2" (https://colorlib.com/wp/template/photography-2/)

## Purpose

Fotoroll is a photography portfolio template with a navbar, hero, portfolio, blog and footer. It recreates the ColorLib **Photography 2** design (https://colorlib.com/wp/template/photography-2/, preview: https://preview.colorlib.com/theme/photography2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design tokens (from screenshot analysis)

- **Accent color:** `#4ecdc4` (mint/teal) — used for logo dot, nav links, CTA hover
- **Text:** `#333333` (dark), `#888888` (light/muted)
- **Background:** `#ffffff` (white paper), `#f5f5f5` (gallery sections)
- **Font:** Montserrat (Google Fonts) — clean sans-serif, weights 300–700
- **Layout:** Full-width hero slider, masonry portfolio grid, 3-column blog cards
- **Footer:** Dark `#333` background, social icons (Facebook, Twitter, Instagram, Dribbble), Component Dock link

## Sections (in order)

1. **Navbar** — White sticky header, "Foto." logo with green dot, nav links (Home, Portfolio, Blog, About, Contact), green email CTA, mobile hamburger
2. **Hero** — Full-width image slider (3 slides), large centered heading, "View Projects" CTA, left/right arrow navigation, "1/3" pagination counter, auto-advance every 6s
3. **Portfolio** — Masonry-style 3-column grid, 12 photography projects with captions, hover scale effect
4. **Blog** — 3-column card grid, image + title + excerpt + date, `#f5f5f5` card backgrounds
5. **Footer** — Dark background, copyright with heart, social icon row, "More templates at Component Dock" link

## Requirements

### Gherkin requirements

Feature: Fotoroll Photography Portfolio

#### Scenario: Navbar renders all navigation links

- **GIVEN** I visit the Fotoroll page
- **THEN** I see the "Foto." logo
- **AND** I see links: Home, Portfolio, Blog, About, Contact
- **AND** I see the email "hello@fotoroll.com"

#### Scenario: Mobile menu opens and closes

- **GIVEN** I visit the Fotoroll page on mobile
- **WHEN** I click the "Open menu" button
- **THEN** I see the mobile navigation
- **WHEN** I click "Close menu"
- **THEN** the mobile navigation is hidden

#### Scenario: Hero slider auto-advances

- **GIVEN** I visit the Fotoroll page
- **THEN** I see "Mountain Vistas" heading
- **WHEN** I wait 6 seconds
- **THEN** I see "Urban Streets" heading

#### Scenario: Hero slider manual navigation

- **GIVEN** I visit the Fotoroll page
- **WHEN** I click "Next slide"
- **THEN** I see "Urban Streets" heading
- **WHEN** I click "Previous slide"
- **THEN** I see "Mountain Vistas" heading

#### Scenario: Portfolio grid displays images

- **GIVEN** I visit the Fotoroll page
- **THEN** I see 12 portfolio images

#### Scenario: Blog section shows posts

- **GIVEN** I visit the Fotoroll page
- **THEN** I see 3 blog post cards with titles and dates

#### Scenario: Footer has Component Dock link

- **GIVEN** I visit the Fotoroll page
- **THEN** I see a "Component Dock" link to componentdock.com
- **AND** I see social media icons

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/fotoroll/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/fotoroll/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Preview analysis notes

- ⚠️ Pointer status re-probed 2026-10-13: the slug-only path (`https://preview.colorlib.com/theme/photography-2/`) 404s, but the live demo is the alias directory `https://preview.colorlib.com/theme/photography2/` (HTTP 200, 6,928 B)
- Analysis based on ColorLib screenshot: `photography-2-free-template-1.jpg`
- Full-width hero slider is the dominant feature — the page is essentially a slider with a thin footer
- White navbar with green accent (`#4ecdc4` approximate), "Foto." brand name
- Slider has dark overlay, large white text, "VIEW PROJECTS" underline CTA
- Arrow navigation is circular dark buttons on left/right edges
- Footer: copyright + "made with ♥ by Colorlib" + "SHOW THUMBNAIL" + social icons

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

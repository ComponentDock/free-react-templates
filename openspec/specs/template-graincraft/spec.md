# Template: Graincraft (Woodworking Company Landing)

## Purpose

Recreate the ColorLib **Woodwork** template (https://colorlib.com/wp/template/woodwork/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page landing template for a woodworking and construction company. The app lives at `apps/graincraft/` under the package name `@free-react-templates/graincraft`.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/woodwork/ (HTTP 200, 42,448 B, sha256 `9e5e0be422ce…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `inline-style-1`, `inline-style-0`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#bfb332` | 22 declarations — `.primary-btn`, `.section-title span` |
| Other chromatic values | `#0043a1` (1), `#23c4ff` (1), `#ff000f` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 45 declarations — `.primary-btn`, `.site-btn` |
| Ink / dark surface | `#000000` | 2 declarations — `#preloder`, `.blog__details__comment__item__text p` |
| Typeface | `Rajdhani` (9 rules — `.header__menu ul li a`)<br>`Josefin Sans` (3 rules — `.testimonial__text h5 span`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `60px`, `2px` | `50%` (`.about__history .nav-item .nav-link:after`); `60px` (`.loader`); `2px` (`.canvas__open`) |

Palette in order of use: `#111111` ×59, `#ffffff` ×45, `#bfb332` ×22, `#444444` ×19, `#adadad` ×15, `#888888` ×9, `#faf5f0` ×6, `#000000` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with branding and navigation

The page SHALL display a sticky dark (#111111) navbar with the "GRAINCRAFT" logo (gold accent), navigation links (Home, About, Services, Portfolio, FAQ, Contact), and a gold (#bfb332) "Get a Quote" CTA button. On mobile, a hamburger menu SHALL toggle open/closed.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** I see the GRAINCRAFT logo, all 6 nav links, and the "Get a Quote" button

#### Scenario: Mobile menu toggles

- **WHEN** I tap the hamburger menu button on mobile
- **THEN** the mobile nav overlay opens with all navigation links
- **WHEN** I tap a link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero section with background imagery

The page SHALL display a full-width hero section with a dark overlay, a woodworking background image, the heading "New Construction, Remodeling, Additions", and a gold "Contact Us" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** I view the hero section
- **THEN** I see the heading text and a "Contact Us" button

### Requirement: About section with stats

The page SHALL display an about section with a photo grid on the left, the subtitle "About Woodworking", the heading "30 Years of Woodworking Experience", descriptive text, 3 stat counters (1800+ Projects, 1200+ Clients, 150+ Offices), and a "Contact Us" button.

#### Scenario: About section renders all elements

- **WHEN** I view the about section
- **THEN** I see the heading, description text, 3 stat counters, and the "Contact Us" button

### Requirement: Services section with 4 service cards

The page SHALL display a services section on a dark background with 4 service cards: Design Solutions, Exterior Design, Moldings & Trim, and Office Furniture.

#### Scenario: Services section renders 4 cards

- **WHEN** I view the services section
- **THEN** I see 4 service card titles

### Requirement: Testimonials section with client quotes

The page SHALL display a testimonials section on a light background (#faf5f0) with client photos, quotes, and names, with previous/next navigation.

#### Scenario: Testimonials renders client quotes

- **WHEN** I view the testimonials section
- **THEN** I see at least 2 client names and quotes

#### Scenario: Testimonials navigation wraps

- **WHEN** I click the "Previous" button on the first testimonial
- **THEN** the last testimonial is shown
- **WHEN** I click the "Next" button on the last testimonial
- **THEN** the first testimonial is shown

### Requirement: Portfolio gallery

The page SHALL display a portfolio section with a grid of 6 project images.

#### Scenario: Portfolio renders image grid

- **WHEN** I view the portfolio section
- **THEN** I see at least 6 project images

### Requirement: Choose Us section with 4 reasons

The page SHALL display a "Why Choose Us?" section with 4 reason cards: Highly Professional Staff, Latest Machinery, Certified Material, and Affordable Cost, each with an icon and description.

#### Scenario: Choose Us renders 4 reasons

- **WHEN** I view the Choose Us section
- **THEN** I see 4 reason titles

### Requirement: FAQ accordion

The page SHALL display a FAQ section with 3 expandable questions. Clicking a question SHALL toggle its answer open/closed.

#### Scenario: FAQ renders 3 questions

- **WHEN** I view the FAQ section
- **THEN** I see 3 question headings

#### Scenario: FAQ accordion toggles

- **WHEN** I click a FAQ question
- **THEN** the answer expands
- **WHEN** I click the same question again
- **THEN** the answer collapses

### Requirement: Footer with Component Dock link

The page SHALL display a dark footer with the GRAINCRAFT logo, address, phone, email, quick links, social icons, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all elements

- **WHEN** I view the footer
- **THEN** I see the logo, contact info, quick links, and a "Component Dock" link

### Requirement: App renders all sections in order

The App component SHALL compose all sections in order: Navbar, Hero, About, Services, Testimonials, Portfolio, Choose Us, FAQ, Footer.

#### Scenario: All sections render

- **WHEN** the page loads
- **THEN** all 9 sections render in the correct order
- **AND** the document title is "Graincraft — Woodworking Company"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/graincraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/graincraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with branding and navigation — I see the GRAINCRAFT logo, all 6 nav links, and the "Get a Quote" button
- [x] Hero section with background imagery — I see the heading text and a "Contact Us" button
- [x] About section with stats — I see the heading, description text, 3 stat counters, and the "Contact Us" button
- [ ] Services section with 4 service cards — I see 4 service card titles
- [ ] Testimonials section with client quotes — I see at least 2 client names and quotes
- [ ] Portfolio gallery — I see at least 6 project images
- [ ] Choose Us section with 4 reasons — I see 4 reason titles
- [ ] FAQ accordion — I see 3 question headings
- [ ] App renders all sections in order — all 9 sections render in the correct order

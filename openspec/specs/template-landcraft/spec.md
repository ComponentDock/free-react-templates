---
name: landcraft
description: Landscaping company landing page — recreation of ColorLib Martxa (https://colorlib.com/wp/template/martxa/)
stack:
  - React 19
  - Vite
  - Tailwind CSS 4
  - TypeScript
---

# Template: Landcraft (Business)

## Purpose

Landcraft is a landscaping company landing page template. It recreates the ColorLib Martxa design as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application. The template showcases a full business landing experience: navbar, hero, about, services, statistics, portfolio with filtering, team, FAQ accordion, testimonials, blog, newsletter signup, and a branded footer.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/martxa/ (HTTP 200, 24,981 B, fetched 2026-10-23) and its theme stylesheet `theme/martxa/style.css` (16,086 B, sha256 `9c2b80c9b598…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#296dc1` | 12 declarations — `a:hover`, `#scrollUp` |
| Surface | `#ffffff` | 22 declarations — `.sticky`, `#scrollUp` |
| Ink / dark surface | `#242424` | 5 declarations — `h1`, `h2` |
| Typeface | `'Montserrat', sans-serif` (1 rule — body) | `font-family` declaration in the theme sheet |
| Body type | `color: #242424; font-size: 14px; font-weight: 400; line-height: 24px` | `body{…}` rule |
| Radii | `4px`, `50%`, `50% 50% 50% 50%` | `4px` (.btn-white); `50%` (.footer-social a); `50% 50% 50% 50%` (.preloder-wrap .child-common) |

Palette in order of use: `#ffffff` ×22, `#296dc1` ×12, `#242424` ×5, `#000000` ×4, `#222222` ×2, `#6c6c6c` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navigation

The page SHALL display a responsive navbar with brand name, contact information, and navigation links.

#### Scenario: Desktop navigation

- **WHEN** the user views the page on a desktop viewport
- **THEN** the navbar shows the brand "Landcraft", contact info (hours, email, phone), and horizontal navigation links (Home, About, Services, Team, Portfolio, Blog, Contact)

#### Scenario: Mobile navigation toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** a vertical navigation menu appears
- **WHEN** the user clicks a link in the mobile menu
- **THEN** the menu closes

### Requirement: Hero section

The page SHALL display a hero section with a background image, heading, description, and two CTA buttons.

#### Scenario: Hero content

- **WHEN** the user views the hero section
- **THEN** the heading "Welcome to Landcraft" is visible
- **AND** two CTA buttons "Read More" and "Get Started" are displayed

### Requirement: About section

The page SHALL display an about section with an image, heading, description text, and a list of capabilities.

#### Scenario: About content

- **WHEN** the user scrolls to the about section
- **THEN** the heading "Who We Are" is visible
- **AND** a list of 7 landscaping capabilities is shown

### Requirement: Services section

The page SHALL display a services section with three service cards.

#### Scenario: Service cards

- **WHEN** the user views the services section
- **THEN** three service cards are displayed (Lawn Care, Landscape Design, Garden Maintenance)
- **AND** each card has an image, title, description, and "Read More" link

### Requirement: Fun facts section

The page SHALL display a statistics section with four numeric counters.

#### Scenario: Statistics display

- **WHEN** the user views the fun facts section
- **THEN** four statistics are shown: Projects Completed (2,157), Happy Clients (15,445), Awards Won (145), Team Members (1,200)

### Requirement: Portfolio section with filtering

The page SHALL display a portfolio section with filterable items.

#### Scenario: Show all items

- **WHEN** the user views the portfolio section with "Show All" active
- **THEN** all 6 portfolio items are displayed

#### Scenario: Filter by category

- **WHEN** the user clicks a category filter button (e.g. "Residential")
- **THEN** only items matching that category are displayed

### Requirement: Team section

The page SHALL display a team section with four team member cards.

#### Scenario: Team members

- **WHEN** the user views the team section
- **THEN** four team members are displayed with name, role, and social links

### Requirement: FAQ accordion

The page SHALL display a FAQ section with a functional accordion.

#### Scenario: Accordion interaction

- **WHEN** the user clicks a FAQ question
- **THEN** its answer is revealed
- **WHEN** the user clicks another question
- **THEN** the previous answer collapses and the new one opens

### Requirement: Testimonials

The page SHALL display a testimonials section with client reviews and star ratings.

#### Scenario: Testimonials content

- **WHEN** the user views the testimonials section
- **THEN** client testimonials with names, roles, star ratings, and quotes are displayed

### Requirement: Newsletter signup

The page SHALL display a newsletter section with an email input form.

#### Scenario: Newsletter form

- **WHEN** the user views the newsletter section
- **THEN** an email input and submit button are displayed

### Requirement: Footer with Component Dock link

The page SHALL display a footer with company info, links, Instagram grid, contact form, and a Component Dock attribution link.

#### Scenario: Footer Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ is displayed with text "Component Dock"

#### Scenario: Footer contact form submission

- **WHEN** the user submits the quick contact form
- **THEN** the form prevents default submission and remains on the page

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/landcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/landcraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation — the navbar shows the brand "Landcraft", contact info (hours, email, phone), and horizontal navigation links (Home, About, Services, Team, Portfolio, Blog, Contact)
- [x] Hero section — the heading "Welcome to Landcraft" is visible
- [x] About section — the heading "Who We Are" is visible
- [ ] Services section — three service cards are displayed (Lawn Care, Landscape Design, Garden Maintenance)
- [ ] Fun facts section — four statistics are shown: Projects Completed (2,157), Happy Clients (15,445), Awards Won (145), Team Members (1,200)
- [ ] Portfolio section with filtering — all 6 portfolio items are displayed
- [ ] Team section — four team members are displayed with name, role, and social links
- [ ] FAQ accordion — its answer is revealed
- [ ] Testimonials — client testimonials with names, roles, star ratings, and quotes are displayed
- [ ] Newsletter signup — an email input and submit button are displayed

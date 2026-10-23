# Creed — Church Website Template

> Recreation of ColorLib "Faith 2" (https://colorlib.com/wp/template/faith-2/)

## Purpose

Creed is a church website template with a navbar, hero, about band, activities, donate, blog and footer. It recreates the ColorLib **Faith 2** design (https://colorlib.com/wp/template/faith-2/, preview: https://preview.colorlib.com/theme/faith2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Overview

A church website template featuring a warm tan brand palette, Poppins font,
and sections for events, sermons, donations, and blog posts.

## Design Tokens

- **Brand color**: #ac8a74 (warm tan/brown)
- **Dark header**: #1b1b1b
- **Font**: Poppins (Google Fonts)
- **Body font-size**: 14px base
- **Section backgrounds**: white, light gray (#eff4f6)

## Sections (in order)

1. **Navbar** — Top bar (dark bg, "Next Big Event" countdown) + main nav
   with logo, menu items (Home, Ministries, Sermons, Blog, Contact),
   and "Send Donations" CTA button (brand color bg)
2. **Hero** — Full-width carousel/slider with event images, date badges,
   headline "Let God guide your path", subtitle, and "Sunday Worship: 10:30 AM"
3. **CTA** — Warm-toned call-to-action with "Visitors Info" button
4. **About** — Scripture quote heading, descriptive text, image
5. **Activities** — Two-column layout: upcoming events list (date, title,
   time, location) + latest sermons (title, author, date)
6. **Donate** — Carousel of donation cause cards with image, title,
   description, and "Donate" button
7. **Blog** — Latest news cards (date, title, excerpt, "Read More" link)
8. **Footer** — 4-column: site info, contact details, useful links,
   "Why Choose Us" text, Component Dock link

## Requirements

### Gherkin Scenarios

Feature: Creed church website template

#### Scenario: Page loads with all sections

- **GIVEN** I visit the Creed template
- **THEN** I should see the navbar with logo and navigation links
- **AND** I should see the hero section with event information
- **AND** I should see the "Visitors Info" CTA section
- **AND** I should see the about section with scripture quote
- **AND** I should see the church activities section
- **AND** I should see the donate section
- **AND** I should see the blog section
- **AND** I should see the footer with contact info

#### Scenario: Navigation contains required links

- **GIVEN** I visit the Creed template
- **THEN** the navbar should contain links for Home, Ministries, Sermons, Blog, Contact
- **AND** there should be a "Send Donations" button

#### Scenario: Hero section displays event info

- **GIVEN** I visit the Creed template
- **THEN** the hero should show a headline about faith
- **AND** it should show a worship time

#### Scenario: Footer links to Component Dock

- **GIVEN** I visit the Creed template
- **THEN** the footer should contain a link to https://www.componentdock.com/
- **AND** the link text should mention "Component Dock"

#### Scenario: Document title is set

- **GIVEN** I visit the Creed template
- **THEN** the document title should contain "Creed"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/creed/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/creed/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

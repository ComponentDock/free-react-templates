---
name: Indigo
slug: indigo
description: >
  Recreation of ColorLib "Parason" (https://colorlib.com/wp/template/parason/)
  — a contemporary SaaS/software landing page with hero banner, feature cards,
  about section, offer grid, solutions split, pricing table, testimonial
  carousel, client logos, and newsletter footer.
---

# Template: Indigo (Business)

## Purpose

Indigo is a free SaaS software landing page template, a faithful React recreation of the ColorLib "Parason" design. It targets startups, SaaS products, and web application landing pages with a hero section, feature highlights, pricing plans, testimonials, and a newsletter footer.

## Requirements

### Requirement: Page loads with all sections

Users SHALL see the complete landing page with all 10 sections rendered in order.

#### Scenario: All sections present

- **WHEN** the Indigo template loads in the browser
- **THEN** the navbar is visible at the top
- **AND** the hero banner displays "Advanced software made simple"
- **AND** the features section shows 3 feature cards
- **AND** the about section is visible
- **AND** the offer features section shows 4 feature cards
- **AND** the solutions section is visible
- **AND** the pricing section shows 3 pricing plans
- **AND** the testimonials section is visible
- **AND** the client logos section is visible
- **AND** the footer is visible

### Requirement: Navigation links work

Users SHALL be able to navigate between sections using the navbar links.

#### Scenario: Click Feature link

- **WHEN** I click "Feature" in the navbar
- **THEN** I scroll to the features section

#### Scenario: Click Pricing link

- **WHEN** I click "Pricing" in the navbar
- **THEN** I scroll to the pricing section

### Requirement: Mobile responsive navigation

Users SHALL be able to toggle the mobile navigation menu.

#### Scenario: Open and close mobile menu

- **WHEN** I click the hamburger menu icon
- **THEN** the mobile navigation menu opens
- **AND** when I click the close icon
- **THEN** the mobile navigation menu closes

### Requirement: Pricing cards display correctly

Users SHALL see three pricing plans with prices, feature lists, and buy buttons.

#### Scenario: All pricing plans visible

- **WHEN** the pricing section renders
- **THEN** the Normal plan shows $45.00
- **AND** the Advanced plan shows $55.00
- **AND** the Ultimate plan shows $65.00
- **AND** each plan has a "Buy Now" button

### Requirement: Footer contains Component Dock link

Users SHALL see a link to Component Dock in the footer.

#### Scenario: Footer link present

- **WHEN** the footer renders
- **THEN** there is a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/indigo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/indigo/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page loads with all sections — the navbar is visible at the top
- [ ] Navigation links work — I scroll to the features section
- [ ] Mobile responsive navigation — the mobile navigation menu opens
- [ ] Pricing cards display correctly — the Normal plan shows $45.00

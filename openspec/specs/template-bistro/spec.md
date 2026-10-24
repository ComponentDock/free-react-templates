# Template: Bistro (Design category: Food & Dining / Menu Accordions)

## Purpose

A restaurant menu accordion template with hero slider, about, services, gallery, booking form and blog sections. Recreation of ColorLib [Bootstrap Accordion V02](https://colorlib.com/wp/template/accordion-02/) (preview URL: `https://preview.colorlib.com/theme/accordion-02/`), built with Vite, React 19, Tailwind CSS 4, and TypeScript.
- **Source design:** ColorLib "Accordion 02" — https://colorlib.com/wp/template/accordion-02/

## Design Tokens

- **Brand Colors**: Warm cream background (`#fcf8f2`), dark espresso text (`#2c221e`), warm amber/gold accents (`#d4a373` / `#bc6c25`), clean white card surfaces (`#ffffff`).
- **Font Family**: Sans-serif headings and body (e.g., Poppins or Inter via Google Fonts).
- **Button / Accordion Styling**: Clean rounded pill or rectangular accordion headers with subtle hover states, smooth expand/collapse transitions, and clear active indicators.
- **Layout**: Centered container featuring "Our Specialties" section with interactive accordion tabs for Breakfast, Lunch, Dinner, Drink, and Wine, listing menu items with titles, prices, and descriptions.

## Requirements

### Feature: Interactive Food Menu Accordions

As a site visitor, I want to explore food and drink menus via interactive accordion sections so that I can easily view meal categories and items.

#### Scenario: Viewing default open section

- **GIVEN** the user opens the Bistro menu page
- **WHEN** the page loads
- **THEN** the "Breakfast" section is expanded by default showing menu items with titles, prices, and descriptions
- **AND** other sections (Lunch, Dinner, Drink, Wine) are collapsed

#### Scenario: Toggling accordion sections

- **GIVEN** the user is viewing the menu
- **WHEN** the user clicks on the "Lunch" accordion header
- **THEN** the "Lunch" section expands to reveal its items
- **AND** the previously open section collapses

#### Scenario: Footer Attribution

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer displays a link to `https://www.componentdock.com/` ("Component Dock")

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/bistro/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/bistro/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] Per-app checks pass (`scripts/verify-app.sh bistro`)
- [ ] 100% test coverage maintained
- [ ] Footer correctly links Component Dock
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bac/accordion-02/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#d4a373` — nearest `#feba2c` (d=86)
- `#bc6c25` — nearest `#feba2c` (d=102)
<!-- live-palette-unverified:end -->

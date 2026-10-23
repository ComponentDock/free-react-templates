---
name: Lattice
slug: lattice
description: 'Portfolio gallery grid — carousel-style work showcase'
source: 'ColorLib Bootstrap Carousel 02 (https://colorlib.com/wp/template/carousel-02/)'
preview: 'https://preview.colorlib.com/theme/bootstrap/carousel-02/'
status: draft
---

# Template: Lattice (Portfolio Gallery Grid)

Recreation of ColorLib "Carousel 02" — a Bootstrap carousel demo showcasing a
portfolio grid of work items with hover-reveal search overlays, card shadows,
and category labels.

## Purpose

Lattice is a portfolio gallery grid. It recreates the ColorLib **Carousel 02** design (https://colorlib.com/wp/template/carousel-02/, preview: https://preview.colorlib.com/theme/bootstrap/carousel-02/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (extracted from preview CSS)

| Token             | Value                                |
| ----------------- | ------------------------------------ |
| Font family       | Poppins, Arial, sans-serif           |
| Body size         | 14px, line-height 1.8                |
| Brand accent      | #1089ff (links, active dots)         |
| Text primary      | #000000 (headings, titles)           |
| Text muted        | rgba(0,0,0,0.3) (category labels)    |
| Background        | #ffffff                              |
| Card shadow       | 0px 20px 35px -30px rgba(0,0,0,0.26) |
| Icon size         | 70x70px white circle                 |
| Card image height | 300px                                |
| Section padding   | 7em 0                                |
| Heading size      | 28px                                 |
| Title size        | 18px, weight 500                     |
| Category size     | 12px, uppercase, letter-spacing 1px  |

## Sections (in DOM order)

### 1. Navbar

- Brand name "Lattice" on the left
- Navigation links: Home, Portfolio, About, Contact
- Responsive: hamburger menu on mobile
- White background, subtle bottom border

### 2. Hero / Heading section

- Centered heading: "Portfolio Gallery"
- Subtitle: "Explore our creative work collection"
- White background

### 3. Portfolio Grid

- 3 cards per view from 1000px, 2 from 600px, 1 below 600px — the count lives in the owl config in `js/snippet.js` (`responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }`), not in a media query; the live markup carries only `cl-col-md-12` columns
- 6 portfolio items, each with:
  - Rounded image container (300px height, cover, rounded corners)
  - Box shadow: 0px 20px 35px -30px rgba(0,0,0,0.26)
  - Hover overlay: white circle (70x70px) with search icon, fades in (opacity 0→1)
  - Title below image (18px, weight 500, black)
  - Category label (12px, uppercase, letter-spacing 1px, muted)
- Images: picsum.photos seeded placeholders
- Search icon: lucide-react Search icon

### 4. Footer

- Simple footer with copyright and "More templates at Component Dock" link
- Link to https://www.componentdock.com/
- Dark background, light text

## Requirements

### Feature: Lattice template behaviour

#### Scenario: Lattice

- Responsive grid layout (CSS Grid or Flexbox)
- Hover effect on cards: icon overlay appears
- No carousel/slider — static grid (carousel JS not needed in React)
- Clean, minimal aesthetic matching the source

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lattice/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lattice/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Acceptance criteria

- GWT: Given the page loads, When I view the portfolio section, Then I see 6 work cards in a responsive grid
- GWT: Given I hover over a work card, When the hover animation plays, Then a circular search icon appears over the image
- GWT: Given I view on mobile, When the viewport is <768px, Then cards stack in a single column
- GWT: Given I view the footer, When I read the footer text, Then I see a link to componentdock.com
- GWT: Given the page loads, When I check the font, Then Poppins is applied

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Lattice template behaviour — Responsive grid layout (CSS Grid or Flexbox)

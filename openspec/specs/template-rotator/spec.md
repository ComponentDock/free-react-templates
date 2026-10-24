# Template: Rotator (Carousel / Interactive UI)
<!-- prep-status: shipped-as=carousel-vane -->
> **SHIPPED-UNDER** — the ColorLib `carousel-16` design this prep describes already
> ships as `apps/carousel-vane` (<https://carousel-vane.free.componentdock.com>).
> Do not scaffold `apps/rotator`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-carousel-vane/spec.md`.

## Purpose

- **Recreation of:** ColorLib [Carousel 16](https://colorlib.com/wp/template/carousel-16/)
- **Preview URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-16.jpg
- **Design Category:** Carousel / Interactive UI Component Showcase
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript

## Design Tokens (Extracted from Screenshot & Standard Theme Palette)

- **Brand Colors:**
  - Primary / Accent: Deep Blue (`#1d3557` / `#457b9d`)
  - Neutral Light: Clean White & Soft Gray (`#f8f9fa`, `#ffffff`)
  - Text Dark: Slate Dark (`#212529`)
- **Typography:**
  - Font Family: "Poppins", sans-serif
- **UI Elements:**
  - Card Border Radius: rounded-xl (`0.75rem`)
  - Button Shapes: rounded-lg with smooth shadow and hover transition
  - Layout Structure: Header navigation, Hero banner with featured carousel items, grid-based card showcase, interactive testimonial/carousel slider section, newsletter signup, footer linking Component Dock.

## Requirements

### Feature: Carousel 16 Showcase & Interactive Rotator

As a visitor exploring template designs, I want to view a responsive carousel and interactive slides so I can test modern slider layouts.

#### Scenario: Display Hero Carousel Section

- **GIVEN** the user visits the Rotator landing page
- **WHEN** the hero section loads
- **THEN** a prominent featured carousel banner is displayed with navigation controls (prev/next arrows, pagination dots) and call-to-action buttons

#### Scenario: Interactive Slide Navigation

- **GIVEN** the user is viewing the carousel slides
- **WHEN** they click the next/previous navigation controls
- **THEN** the active slide smoothly transitions and updates the displayed headline, description, and preview image

#### Scenario: Feature Card Grid

- **GIVEN** the user scrolls down past the hero carousel
- **WHEN** the feature cards section appears
- **THEN** a responsive multi-column grid displays categorized highlight cards with icons, titles, and descriptions

#### Scenario: Footer Attribution

- **GIVEN** the user reaches the bottom of the page
- **THEN** the footer displays copyright information and a link to `https://www.componentdock.com/`

## Verification checklist

- [ ] TypeScript typecheck passes (`npm run typecheck` or app gate)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest unit tests pass with 100% coverage on new components
- [ ] Build succeeds without errors
- [ ] Footer correctly links `https://www.componentdock.com/`
- [ ] No mention of ColorLib in app source code

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-16/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#1d3557` — nearest `#0056b3` (d=102)
- `#457b9d` — nearest `#0056b3` (d=81)
<!-- live-palette-unverified:end -->

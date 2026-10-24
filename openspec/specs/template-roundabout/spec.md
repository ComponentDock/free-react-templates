# Template: Roundabout (Carousel)
<!-- prep-status: shipped-as=slidespot -->
> **SHIPPED-UNDER** — the ColorLib `carousel-06` design this prep describes already
> ships as `apps/slidespot` (<https://slidespot.free.componentdock.com>).
> Do not scaffold `apps/roundabout`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-slidespot/spec.md`.

## Purpose

Recreation of ColorLib **Carousel V06** (`https://colorlib.com/wp/template/carousel-06/`), styled as a modern interactive multi-item carousel and slider showcase for digital agencies and product features.

- **Source Slug:** `carousel-06`
- **Preview URL:** `https://roundabout.free.componentdock.com`
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons, Vitest.

## Design Tokens

- **Brand Colors:**
  - Primary / Accent: `#3b82f6` (Blue-500) / `#2563eb` (Blue-600)
  - Neutral Dark: `#0f172a` (Slate-900)
  - Neutral Light: `#f8fafc` (Slate-50)
  - Muted: `#64748b` (Slate-500)
- **Typography:**
  - Font Family: Inter, system-ui, sans-serif
- **UI Elements:**
  - Rounded corners (`rounded-xl`, `rounded-2xl`)
  - Soft shadows (`shadow-lg`, `shadow-xl`)
  - Smooth sliding transitions and interactive card focus states.
- **Surface (measured):** `#ffc6be` — paints it ×5 — `background` on `.owl-carousel .owl-dots .owl-dot.cl-active`; style.css?v=db49ce39 (25,649 B, sha256 03a4549def55) · <https://preview.colorlib.com/theme/bootstrap/carousel-06/>

## Requirements

### Feature: Interactive Carousel Showcase

As a site visitor, I want to browse multiple featured slides in a responsive carousel with smooth navigation controls so that I can explore featured content efficiently.

#### Scenario: Hero Showcase Carousel

- **GIVEN** the user visits the Roundabout home page
- **WHEN** the hero section loads
- **THEN** a prominent featured carousel displays multiple slides with active pagination dots and left/right navigation arrows

#### Scenario: Slide Navigation & Interaction

- **GIVEN** the carousel is displayed
- **WHEN** the user clicks the "Next" arrow or pagination indicator
- **THEN** the active slide transitions smoothly to display the next featured item with updated heading, description, and call-to-action button

#### Scenario: Feature Highlights Section

- **GIVEN** the user scrolls past the hero carousel
- **WHEN** the feature grid section is visible
- **THEN** multiple feature cards display with icons, titles, and descriptive text

#### Scenario: Component Dock Footer Attribution

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is rendered
- **THEN** it contains copyright and a prominent link to `https://www.componentdock.com/` labeled "Component Dock"

## Verification checklist

- [ ] TypeScript strict mode compiles without errors.
- [ ] All Vitest tests pass with 100% coverage.
- [ ] Tailwind v4 CSS tokens and `injectUiSource()` configured correctly.
- [ ] Footer includes Component Dock link.

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-06/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#3b82f6` — nearest `#007bff` (d=60)
- `#2563eb` — nearest `#007bff` (d=48)
<!-- live-palette-unverified:end -->

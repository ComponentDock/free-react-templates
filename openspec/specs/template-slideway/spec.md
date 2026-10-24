# Template: Slideway (Carousel / Slideshow)
<!-- prep-status: shipped-as=merry -->
> **SHIPPED-UNDER** — the ColorLib `carousel-07` design this prep describes already
> ships as `apps/merry` (<https://merry.free.componentdock.com>).
> Do not scaffold `apps/slideway`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-merry/spec.md`.

## Purpose

Recreation of ColorLib "Carousel 07" (`https://colorlib.com/wp/template/carousel-07/`), implemented as a modern React 19 + Tailwind CSS 4 + TypeScript template named **Slideway**.

- **Preview URL**: `https://preview.colorlib.com/theme/carousel-07/` (preview unreachable during prep; built from screenshot & standard carousel layout conventions)
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, TypeScript (strict).

## Design Tokens & Styling

- **Brand Colors**:
  - Primary: Indigo / Slate (`#4f46e5` / `bg-indigo-600`)
  - Secondary: Teal / Cyan (`#06b6d4` / `bg-cyan-500`)
  - Neutral dark: Slate 900 (`#0f172a`)
  - Neutral light: Slate 50 (`#f8fafc`)
- **Typography**: Sans-serif (`Inter`, `system-ui`, sans-serif).
- **Button Shapes**: Rounded-lg (`rounded-lg`), smooth transitions, subtle shadows.
- **Section Layouts**: Hero header with interactive carousel slider, featured slides/cards section, testimonial/feature highlights with dot navigation, statistics counter, call-to-action banner, and professional footer linking Component Dock.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/carousel-07/` | HTTP 200 · 15,251 B · title `Carousel 07` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/carousel-07/css/style.css?v=5afee45e` | HTTP 200 · 23,230 B · sha256 `813f8c662ed2` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×9,
`#007bff`×5, `#ff487e`×5, `#000000`×3, `#212529`×3, `#d6d6d6`×2,
`#869791`×2, `#0062cc`×2, `#b3b3b3`×2, `#0056b3`×1.

**Low-chroma values the sheet actually uses** — `#212529`, `#d6d6d6`,
`#869791`, `#b3b3b3`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#4f46e5`.

## Requirements

### 1. Navigation Header

- **Requirement**: The header must contain a brand logo, navigation links (Home, Features, Showcases, Testimonials, Contact), and a CTA action button.

#### Scenario: User views the navigation bar

- **GIVEN** the app is loaded
- **WHEN** the user looks at the top header
- **THEN** they see the brand logo and navigation links

### 2. Hero Carousel Section

- **Requirement**: The hero section features a dynamic carousel with title, subtitle, CTA buttons, and slide navigation controls (previous/next buttons and dot indicators).

#### Scenario: User interacts with the hero carousel

- **GIVEN** the hero section is displayed with slide 1 active
- **WHEN** the user clicks the next arrow or a pagination dot
- **THEN** the carousel smoothly transitions to slide 2 with updated headline and image

### 3. Features Grid

- **Requirement**: A section highlighting key features with icons, titles, and descriptions in a responsive grid.

#### Scenario: User browses the features

- **GIVEN** the user scrolls down to the features section
- **WHEN** they view the feature cards
- **THEN** each card displays an icon, title, and descriptive text

### 4. Interactive Showcase & Slides

- **Requirement**: A dedicated showcase slider section displaying cards with imagery and descriptions.

#### Scenario: User navigates the showcase carousel

- **GIVEN** the showcase slider is visible
- **WHEN** the user interacts with slide controls
- **THEN** the items scroll correctly into view

### 5. Statistics Counter & Testimonials

- **Requirement**: Sections displaying key metrics and customer/user testimonials.

#### Scenario: User reads testimonials

- **GIVEN** the user views the testimonial section
- **WHEN** they switch between testimonial slides
- **THEN** the respective review text and author details appear

### 6. Call to Action & Footer

- **Requirement**: A conversion CTA banner and a professional footer linking `https://www.componentdock.com/`.

#### Scenario: User reaches the footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** they inspect the footer
- **THEN** they see copyright info and a branded link to Component Dock

## Verification checklist

- [ ] TypeScript strict compilation (`npm run typecheck`) passes without errors.
- [ ] All unit tests pass with **100% coverage** (`npm run test:coverage`).
- [ ] Lint and formatting checks pass.
- [ ] Footer correctly links `https://www.componentdock.com/`.
- [ ] No mention of ColorLib in app source code.
- [ ] 1. Navigation Header — they see the brand logo and navigation links
- [ ] 2. Hero Carousel Section — the carousel smoothly transitions to slide 2 with updated headline and image
- [ ] 3. Features Grid — each card displays an icon, title, and descriptive text
- [ ] 4. Interactive Showcase & Slides — the items scroll correctly into view
- [ ] 5. Statistics Counter & Testimonials — the respective review text and author details appear

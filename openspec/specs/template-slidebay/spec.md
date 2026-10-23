# Template: SlideBay (Carousel / Slider UI)

## Purpose

Recreation of ColorLib **Carousel 05** (`https://colorlib.com/wp/template/carousel-05/`), a modern slide/carousel interface template featuring high-impact hero carousel slides, interactive navigation controls, feature cards, testimonial slider, call-to-action sections, and fully responsive layout. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens (Extracted from Preview / Screenshot Reference)

- **Brand Colors:**
  - Primary: Deep Indigo / Blue (`#4f46e5` / `indigo-600`)
  - Accent: Vibrant Coral / Orange (`#f97316` / `orange-500`)
  - Backgrounds: Neutral Slate (`#f8fafc` / `slate-50`, `#0f172a` / `slate-900`)
  - Text: Dark Charcoal (`#1e293b` / `slate-800`), Light Muted (`#64748b` / `slate-500`)
- **Typography:**
  - Font Family: `Inter`, `system-ui`, sans-serif
  - Headings: Bold sans-serif, high contrast
- **UI Elements & Layout:**
  - Rounded card containers (`rounded-xl` / `rounded-2xl`)
  - Smooth slide transition wrappers with interactive dot/arrow navigation
  - Clean feature grids and responsive navigation bar

## Requirements

### Requirement: Hero Carousel Section

Users SHALL see a primary hero carousel banner with headline, subtitle, and CTA buttons, and interactive navigation controls.

#### Scenario: User views the hero carousel

- **Given** the user visits the SlideBay home page
- **When** the page loads
- **Then** the primary carousel banner is visible with headline, subtitle, and CTA buttons
- **And** next/previous arrow controls and pagination dots allow switching slides

### Requirement: Interactive Feature Showcase

Users SHALL browse core features in a responsive grid.

#### Scenario: User browses core features

- **Given** the user scrolls to the feature section
- **When** feature cards are displayed
- **Then** each card highlights a distinct capability with icon, title, and description

### Requirement: Testimonials / Carousel Display

Users SHALL interact with the testimonial slider to view quotes and author details.

#### Scenario: User interacts with the testimonial slider

- **Given** the user views the testimonials section
- **When** clicking pagination or swiping through slides
- **Then** testimonial quotes and author details update smoothly

### Requirement: Call to Action & Footer

Users SHALL see navigation links, copyright, and the mandatory Component Dock link.

#### Scenario: User reaches the footer

- **Given** the user scrolls to the bottom of the page
- **When** the footer is rendered
- **Then** navigation links, copyright, and the mandatory "Component Dock" link (`https://www.componentdock.com/`) are prominently displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/slidebay/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/slidebay/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Hero Carousel Section — Given** the user visits the SlideBay home page
- [ ] Interactive Feature Showcase — Given** the user scrolls to the feature section
- [ ] Testimonials / Carousel Display — Given** the user views the testimonials section

# Template: CarouselSweep (Carousel / UI Showcase)

## Purpose

Recreation of ColorLib **Carousel 12** (`https://colorlib.com/wp/template/carousel-12/`), built as a modern, accessible React 19 + Vite + Tailwind CSS 4 template (`apps/carousel-sweep`).
Preview URL fallback: ColorLib WordPress screenshot archive (preview.colorlib.com was unreachable).

## Design tokens

- **Brand Colors**: Primary indigo (`#4f46e5`), slate neutral (`#0f172a`), accent violet (`#8b5cf6`), card background (`#ffffff` / dark `#1e293b`).
- **Typography**: Font family `Inter, system-ui, sans-serif`. Clean headings, readable body text.
- **Button / Shape**: Rounded-xl (`0.75rem`), shadow-md, smooth transitions.
- **Layout**: Sticky header, hero slider/carousel section with interactive controls, featured items showcase grid, interactive testimonial carousel, newsletter subscription banner, and footer linking Component Dock.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/carousel-12/` | HTTP 200 · 2,363 B · title `Carousel #2` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/carousel-12/css/style.css?v=fd8ac0d8` | HTTP 200 · 12,544 B · sha256 `a983f96089f0` |

> ⚠️ the demo's own `<title>` reads `Carousel #2` though the path is
> `carousel-12` — the host's titles are not reliable labels; the readings
> above are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#007bff`×3,
`#0056b3`×2, `#000000`×1, `#212529`×1, `#ffffff`×1, `#b3b3b3`×1,
`#f8f9fa`×1, `#6c757d`×1, `#cccccc`×1.

**Low-chroma values the sheet actually uses** — `#212529`, `#b3b3b3`,
`#f8f9fa`, `#6c757d`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#4f46e5`, `#8b5cf6`.

## Requirements

### Feature: Interactive Carousel Showcase

As a visitor, I want to browse featured interactive carousels and slides so that I can explore content smoothly.

#### Scenario: Hero Slider Navigation

- **GIVEN** the user lands on the CarouselSweep home page
- **WHEN** the user clicks the next/previous navigation buttons on the hero carousel
- **THEN** the active slide updates smoothly with transition effects and pagination dots reflect the current position

#### Scenario: Testimonial Slider Controls

- **GIVEN** the user scrolls to the testimonial carousel section
- **WHEN** the user interacts with the carousel controls or auto-play progresses
- **THEN** customer quotes and avatars transition accordingly

### Feature: Responsive Navigation & Footer

#### Scenario: Navbar and Component Dock Footer

- **GIVEN** the user views the page on desktop or mobile
- **WHEN** the user checks the footer
- **THEN** it must include a prominent link to `https://www.componentdock.com/` branded as Component Dock

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] 100% test coverage on all components
- [ ] Responsive layout across mobile/tablet/desktop
- [ ] Footer links Component Dock

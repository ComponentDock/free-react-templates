# Template: CarouselHub (Carousel / Gallery category)
<!-- prep-status: shipped-as=carouselhub -->
> **SHIPPED-UNDER** — the ColorLib `carousel-03` design this prep describes already
> ships as `apps/carouselhub` (<https://carouselhub.free.componentdock.com>).
> Do not scaffold `apps/carousel-hub`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-carouselhub/spec.md`.

## Purpose

- Recreation of ColorLib **Carousel V03** (`https://colorlib.com/wp/template/carousel-03/`).
- Preview URL: `https://preview.colorlib.com/theme/carousel-03/` (Note: preview URL is unreachable/404 on ColorLib CDN; replicated faithfully from the ColorLib screenshot and standard Bootstrap carousel patterns).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons, Tailwind Carousel / interactive slider.

## Design tokens

- Primary Brand Color: `#007bff` (Sky blue) / dark slate `#0f172a`
- Font Family: "Inter", system-ui, sans-serif
- Button Shapes: Rounded-md / rounded-full for carousel control arrows
- Section Backgrounds: Light slate `#f8fafc`, dark hero `#0f172a`, pure white `#ffffff` cards

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/carousel-03/` | HTTP 200 · 3,830 B · title `Carousel 03` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/carousel-03/css/style.css?v=18e25668` | HTTP 200 · 19,122 B · sha256 `05c98090314f` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×4,
`#b063c5`×4, `#000000`×2, `#d6d6d6`×2, `#869791`×2, `#212529`×1,
`#007bff`×1, `#0056b3`×1, `#ff5db1`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#0284c7` → **`#007bff`** — the sheet paints `a{color}` with it

**Low-chroma values the sheet actually uses** — `#d6d6d6`, `#869791`,
`#212529`; any sampled Tailwind grey above is an approximation of these.

## Requirements

### Requirement 1: Hero Carousel Section

#### Scenario: Hero Carousel Section

- The template must display a prominent interactive image carousel with slide navigation (prev/next buttons and pagination dots).
- Each slide features a high-impact background image (via picsum), bold headline, descriptive subtitle, and call-to-action button.

### Requirement 2: Featured Collections / Grid

#### Scenario: Featured Collections / Grid

- A structured grid section displaying featured items, categories, or portfolio cards with hover zoom effects and descriptions.

### Requirement 3: Interactive Carousel Slider

#### Scenario: Interactive Carousel Slider

- Secondary card carousel showcasing testimonials, products, or featured media items with smooth slide transitions.

### Requirement 4: Footer Component

#### Scenario: Footer Component

- Professional footer featuring brand info, quick navigation links, newsletter signup, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Verification checklist

- [ ] TypeScript strict compilation passes without errors.
- [ ] Tailwind CSS v4 styling and `@theme` tokens correctly applied.
- [ ] Responsive design verified for mobile, tablet, and desktop viewports.
- [ ] 100% test coverage on all components.
- [ ] Footer correctly includes link to `https://www.componentdock.com/`.
- [ ] Hero Carousel Section — The template must display a prominent interactive image carousel with slide navigation (prev/next buttons and pagination dots)
- [ ] Featured Collections / Grid — A structured grid section displaying featured items, categories, or portfolio cards with hover zoom effects and descriptions
- [ ] Interactive Carousel Slider — Secondary card carousel showcasing testimonials, products, or featured media items with smooth slide transitions

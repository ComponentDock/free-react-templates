# Template: Lenslide (Carousel & Testimonials Showcase)

## Purpose

A Carousel & Testimonials Showcase template with header navigation and footer attribution sections. Recreation of ColorLib **Carousel 14** (`https://colorlib.com/wp/template/carousel-14/`), implemented as a modern React 19 + Tailwind CSS 4 single-page template named **lenslide**.

- Preview URL: `https://preview.colorlib.com/theme/bootstrap/carousel-14/`
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons, and `packages/ui` components.

## Design Tokens (Extracted from Preview CSS)

- **Brand Colors**:
  - Primary / Accent: Bootstrap Blue (`#007bff`) for active indicator dots, button highlights, and interactive states.
  - Backgrounds: Clean off-white (`#f8f9fa`) for content blocks, pure white card containers, dark slate (`#1e293b`) for headings/footer.
  - Text: Muted gray (`#b3b3b3` / `#64748b`) for descriptive text and quotes, dark (`#212529`) for body text.
- **Typography**:
  - Font Family: Roboto / system sans-serif (`font-sans`).
- **Layout & Components**:
  - Responsive testimonial and image carousel slider (`.testimony-29101`) featuring split 40% image and 60% text block layout on desktop, stacked on mobile.
  - Navigation controls: Previous / Next arrow buttons and active/inactive pagination dots.
  - Header navigation bar with brand logo and links.
  - Footer with copyright and mandatory Component Dock link.

## Requirements

### Feature 1: Header Navigation

#### Scenario: User views the navigation bar

- **GIVEN** the user loads the Lenslide template
- **WHEN** the header renders
- **THEN** it displays a brand logo and navigation menu items

### Feature 2: Hero Carousel Testimonial Section

#### Scenario: User views and interacts with the testimonial carousel

- **GIVEN** the user is on the main carousel section
- **WHEN** the slider renders active testimony items with side-by-side image and quote blocks
- **THEN** the user can click next/previous arrow controls or pagination dots to switch between testimonials smoothly

### Feature 3: Footer Attribution

#### Scenario: User checks the page footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer renders
- **THEN** it displays copyright information and a prominent link to `https://www.componentdock.com/`

## Verification checklist

- [x] TypeScript compilation (`npm run typecheck`) passes without errors.
- [x] Linter (`npm run lint`) passes without warnings.
- [x] Test suite (`npm run test:coverage`) achieves 100% coverage.
- [x] Build (`npm run build`) completes successfully.
- [x] Footer correctly links `https://www.componentdock.com/`.
- [x] No mention of ColorLib in application source code.
- [ ] Header Navigation — it displays a brand logo and navigation menu items
- [ ] Hero Carousel Testimonial Section — the user can click next/previous arrow controls or pagination dots to switch between testimonials smoothly

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-14/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#64748b` — nearest `#0056b3` (d=112)
<!-- live-palette-unverified:end -->

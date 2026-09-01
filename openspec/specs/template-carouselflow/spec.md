# Template: CarouselFlow (Carousel & Product Showcase)

## Purpose

Recreation of ColorLib **Carousel 12** (`https://colorlib.com/wp/template/carousel-12/`), preview URL: `https://preview.colorlib.com/theme/bootstrap/carousel-12/`.
New original name: `carouselflow` (`@free-react-templates/carouselflow`). Stack: Vite, React 19, Tailwind CSS 4, TypeScript.

## Design Tokens (Extracted from Reference)

- **Font Family**: "Roboto", sans-serif (Headings & Body).
- **Colors**:
  - Primary / Active Dot: `#007bff` (Bright Blue)
  - Text Color: `#6c757d` (Muted Gray) for card titles, `#b3b3b3` for paragraph copy
  - Section Background (Left Half): `#f8f9fa` (Light Gray split background)
  - Base Background: `#ffffff` (White)
  - Dot Inactive: `#cccccc`
- **Button / Shape / Spacing**:
  - Clean minimalist cards with high-contrast bold titles (`font-weight: 900`).
  - Generous padding (`7rem 0` content wrapper).
  - Carousel indicator dots styled as horizontal bars (`15px` width, `3px` height, no border radius).

## Section Structure & Requirements

### 1. Header / Title Section

- Centered section heading (`Carousel #2` / `Our Products`) styled with clean typography and spacing.

### 2. Carousel Showcase Section (`bg-left-half`)

- Split background container (`bg-[#f8f9fa]` on the left half).
- Responsive interactive product carousel supporting multiple item cards (6 items featuring high-quality photography and bold titles).
- Interactive navigation dots (horizontal bar indicators) allowing users to switch active slide views.

### 3. Footer

- Minimalist footer featuring copyright and mandatory Component Dock branding link (`https://www.componentdock.com/`).

## Verification Checklist

- [ ] TypeScript strict compilation (`npm run typecheck`) passes without errors.
- [ ] Tailwind CSS 4 setup includes `@theme` configuration for primary blue (`#007bff`) and muted grays.
- [ ] Vitest unit tests achieve 100% test coverage across all components and hooks.
- [ ] Footer links to `https://www.componentdock.com/`.
- [ ] `public/CNAME` contains `carouselflow.free.componentdock.com`.

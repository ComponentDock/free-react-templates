# Template: CarouselHub (Carousel / Gallery category)

## Purpose

- Recreation of ColorLib **Carousel V03** (`https://colorlib.com/wp/template/carousel-03/`).
- Preview URL: `https://preview.colorlib.com/theme/carousel-03/` (Note: preview URL is unreachable/404 on ColorLib CDN; replicated faithfully from the ColorLib screenshot and standard Bootstrap carousel patterns).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons, Tailwind Carousel / interactive slider.

## Design tokens

- Primary Brand Color: `#0284c7` (Sky blue) / dark slate `#0f172a`
- Font Family: "Inter", system-ui, sans-serif
- Button Shapes: Rounded-md / rounded-full for carousel control arrows
- Section Backgrounds: Light slate `#f8fafc`, dark hero `#0f172a`, pure white `#ffffff` cards

## Requirements & Scenarios

### Requirement 1: Hero Carousel Section

- The template must display a prominent interactive image carousel with slide navigation (prev/next buttons and pagination dots).
- Each slide features a high-impact background image (via picsum), bold headline, descriptive subtitle, and call-to-action button.

### Requirement 2: Featured Collections / Grid

- A structured grid section displaying featured items, categories, or portfolio cards with hover zoom effects and descriptions.

### Requirement 3: Interactive Carousel Slider

- Secondary card carousel showcasing testimonials, products, or featured media items with smooth slide transitions.

### Requirement 4: Footer Component

- Professional footer featuring brand info, quick navigation links, newsletter signup, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Verification checklist

- [ ] TypeScript strict compilation passes without errors.
- [ ] Tailwind CSS v4 styling and `@theme` tokens correctly applied.
- [ ] Responsive design verified for mobile, tablet, and desktop viewports.
- [ ] 100% test coverage on all components.
- [ ] Footer correctly includes link to `https://www.componentdock.com/`.

# Template: SpinWheel (Carousel / Gallery category)

## Purpose

- Recreation of ColorLib **Carousel V04** (`https://colorlib.com/wp/template/carousel-04/`).
- Preview URL: `https://preview.colorlib.com/theme/carousel-04/` (Note: preview URL returns 404 on ColorLib CDN; replicated faithfully from the ColorLib screenshot and standard Bootstrap carousel patterns).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons, interactive carousel slider.

## Design tokens

- Primary Brand Color: `#4f46e5` (Indigo) / `#3b82f6` (Blue)
- Neutral Palette: Slate (`#f8fafc` background, `#1e293b` text)
- Font Family: "Inter", system-ui, sans-serif
- Button Shapes: Rounded-md / rounded-full for interactive carousel navigation controls
- Section Backgrounds: Light gray/slate section alternating with pure white and dark slate footer

## Requirements & Scenarios

### Requirement 1: Navigation Bar & Header

- The template must include a responsive top navigation bar with brand logo, nav links, and a CTA button.
- Scenario: User resizes window; navigation adapts cleanly with mobile menu toggle.

### Requirement 2: Hero Carousel Slider

- The template must display an interactive hero carousel section with slide pagination indicators and previous/next arrow controls.
- Each slide features an engaging image background, headline, description text, and action buttons.

### Requirement 3: Featured Testimonial / Item Carousel

- A secondary carousel showcasing testimonial cards or featured content items with smooth sliding navigation.

### Requirement 4: Footer Component

- Professional footer featuring brand info, quick navigation links, social icons, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Verification checklist

- [ ] TypeScript strict compilation passes without errors.
- [ ] Tailwind CSS v4 styling and `@theme` tokens correctly applied.
- [ ] Responsive design verified for mobile, tablet, and desktop viewports.
- [ ] Footer correctly includes link to `https://www.componentdock.com/`.

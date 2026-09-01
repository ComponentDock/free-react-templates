# Template: Lenslide (Carousel & Testimonials Showcase)

## Purpose

Recreation of ColorLib **Carousel 14** (`https://colorlib.com/wp/template/carousel-14/`), implemented as a modern React 19 + Tailwind CSS 4 single-page template named **lenslide**.

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

## Requirements & Gherkin Scenarios

### Feature 1: Header Navigation

- **Scenario**: User views the navigation bar
  - Given the user loads the Lenslide template
  - When the header renders
  - Then it displays a brand logo and navigation menu items.

### Feature 2: Hero Carousel Testimonial Section

- **Scenario**: User views and interacts with the testimonial carousel
  - Given the user is on the main carousel section
  - When the slider renders active testimony items with side-by-side image and quote blocks
  - Then the user can click next/previous arrow controls or pagination dots to switch between testimonials smoothly.

### Feature 3: Footer Attribution

- **Scenario**: User checks the page footer
  - Given the user scrolls to the bottom of the page
  - When the footer renders
  - Then it displays copyright information and a prominent link to `https://www.componentdock.com/`.

## Verification Checklist

- [x] TypeScript compilation (`npm run typecheck`) passes without errors.
- [x] Linter (`npm run lint`) passes without warnings.
- [x] Test suite (`npm run test:coverage`) achieves 100% coverage.
- [x] Build (`npm run build`) completes successfully.
- [x] Footer correctly links `https://www.componentdock.com/`.
- [x] No mention of ColorLib in application source code.

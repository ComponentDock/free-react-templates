# Stockroom — Design Notes

Recreation of ColorLib Amado (https://colorlib.com/wp/template/amado/).
Preview: https://preview.colorlib.com/theme/amado/

## Section structure (top → bottom)

1. **Search Overlay** — Hidden by default, full-screen overlay with search
   input. Light gray bg (#f5f7fa). Close button.
2. **Sidebar Header** — Left sidebar (~300px), white bg. Close icon,
   logo, nav (Home, Shop, Product, Cart, Checkout), two yellow CTA
   buttons, cart/fav/search links, social icons. Hamburger for mobile.
3. **Product Categories** — Main content (right of sidebar). 3-column
   grid, 9 product cards. Each: bg image, hover overlay (dark),
   yellow accent line + price + name.
4. **Newsletter** — Dark gray bg (#3c3c3c). 2-col: heading + paragraph
   left, email input + yellow subscribe button right.
5. **Footer** — Very dark bg (#252525). 2-col: logo + copyright left,
   nav links right-aligned. Copyright with Component Dock.

## Design fidelity notes

- Brand color is `#fbb710` (golden yellow). Use as primary in `@theme`.
- Dark active/hover color is `#131212`. Use as secondary in `@theme`.
- Newsletter bg is `#3c3c3c`, footer bg is `#252525`.
- Fonts: Helvetica Neue Bold (headings/buttons) + Helvetica Neue Medium
  (body). These are self-hosted WOFF2 fonts in the original. Use Inter
  or system font stack as substitute (load via Google Fonts or use
  `font-family: system-ui, -apple-system, sans-serif`).
- Buttons are rectangular (border-radius: 0), 55px tall, 160px min-width,
  yellow bg (#fbb710), hover/active: dark (#131212).
- Product category grid: 3-column, each card is a full-width image link.
  Hover: dark overlay via `::after` pseudo-element, yellow accent line
  (80px × 3px) appears, text turns white.
- The sidebar is a fixed left column (~300px) on desktop, collapses to
  a hamburger toggle on mobile. The main content fills the remaining space.
- Search overlay: full-screen, light gray bg, centered input, hidden by
  default, toggled via JS.
- Newsletter form: email input (white bg, 50px height) + subscribe button
  (yellow bg, absolutely positioned on right).
- Responsive: sidebar becomes a mobile nav toggle, product grid collapses
  to 1-2 columns.
- Placeholder images: use `https://picsum.photos/seed/stockroom-<n>/<w>/<h>`
  with deterministic seeds per product card.

## Component outline

```
src/
  App.tsx            — compose sidebar + main content + newsletter + footer
  components/
    Sidebar.tsx      — logo, nav, CTA buttons, cart/fav/search, social
    SearchOverlay.tsx — full-screen search overlay
    ProductGrid.tsx  — 3-col grid of product category cards
    ProductCard.tsx  — single product card with hover overlay
    Newsletter.tsx   — dark bg, heading + form
    Footer.tsx       — logo + copyright + nav links, Component Dock
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template, rename package
- [ ] Set up index.css with Tailwind @theme tokens (brand #fbb710, dark #131212)
- [ ] Add Inter or system font to index.html (replace Helvetica Neue)
- [ ] Implement Sidebar.tsx (fixed left, nav, buttons, social, hamburger)
- [ ] Implement SearchOverlay.tsx (full-screen, toggle open/close)
- [ ] Implement ProductCard.tsx (image, hover overlay, accent line)
- [ ] Implement ProductGrid.tsx (3-col grid, 9 cards)
- [ ] Implement Newsletter.tsx (dark bg, heading, email form)
- [ ] Implement Footer.tsx (dark bg, logo, copyright, nav, Component Dock)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for every component (Vitest + Testing Library)
- [ ] Verify 100% coverage, typecheck, lint, build

# Mileway — Design Notes & Task Outline

**Source:** ColorLib "Carrentals"  
**Preview:** https://preview.colorlib.com/theme/carrentals/  
**New name:** mileway  
**Stack:** React 19 + Vite + Tailwind 4 + TypeScript

## Section Build Order

1. **Navbar.tsx** — Absolute-positioned over hero. Logo "Mileway" left, nav links right (Home, Listings, Testimonials, About, Contact). Transparent bg → solid on scroll (use IntersectionObserver or scroll listener).

2. **Hero.tsx** — Full-width background image (picsum placeholder). Overlay: h1 "Rent a car is within your fingertips." Search bar: 3 inputs (type dropdown, pick-up date, drop-off date) + "Search Now" button. White search bar container with subtle shadow.

3. **HowItWorks.tsx** — 3-column grid. Each: step number (blue circle, `#0779e4`), h3 title, paragraph. White background section.

4. **PromoBanner.tsx** — Light background. h3 heading + paragraph description. Simple text section.

5. **CarListings.tsx** — 3-column, 6-card grid. Each card: image left, content right (h3 name, price `$XXX.XX/day`, specs row: Luggage/Doors/Passenger, description, "Rent Now" button). Data array with 6 cars.

6. **Features.tsx** — Light bg section. "Features" heading + 6 feature cards in a grid.

7. **Testimonials.tsx** — 3-column cards. Each: blockquote text, avatar (picsum), name + role. White bg.

8. **CtaBanner.tsx** — Blue full-width (`#0779e4`). h2 "What are you waiting for?" white text, subtext, white "Rent a car now" button.

9. **Footer.tsx** — Dark bg. 4 columns: About Us (text + social icons), Quick Links, Resources, Support. Component Dock attribution link. Social icons via lucide-react.

## Fidelity Notes

- **Colors:** Primary `#0779e4` (not Bootstrap `#007bff` — the custom CSS overrides). Use this in Tailwind `@theme`.
- **Font:** Roboto via Google Fonts `<link>` in `index.html`.
- **Buttons:** Bootstrap-style `.btn` with `padding: 12px 25px`, `border-radius: 4px`. `.btn-sm` variant for cards.
- **Section rhythm:** Alternating white / `#f8f9fa` backgrounds. CTA banner is solid blue.
- **Hero:** Background image with dark overlay. Search bar is a white card floating over the hero.
- **Car cards:** Horizontal layout (image left, content right) on desktop, stacked on mobile.
- **Testimonials:** Blockquote-style with avatar + name/role below.
- **Footer:** Dark background, 4-column grid, social icons.
- **No assets:** Use `https://picsum.photos/seed/mileway-<n>/<w>/<h>` for all images. Icons from lucide-react.

## Component Dependencies

- `packages/ui`: Button, ButtonLink, Card (for car cards)
- `cn()` from `packages/ui` for class merging
- No new dependencies needed

# Pitmaster — Prep Notes

## Source
- ColorLib: Steakshop (https://colorlib.com/wp/template/steakshop/)
- Preview: https://preview.colorlib.com/theme/steakshop/

## Section Order (1:1 fidelity)
1. **Navbar** — fixed right-side vertical sidebar (desktop), hamburger trigger (mobile <1920px)
2. **Hero Banner** — full-screen background image, dark overlay (20% black), video play button (pulsing circle)
3. **Banner Bottom** — white card overlapping hero bottom with headline + "Explore Menu" CTA
4. **Breakfast Area** — left text (heading + 2 paragraphs + CTA) + right image pair (overlapping layout)
5. **Lunch Area** — reversed layout (images left, text right) + chef attribution (avatar, name, title)
6. **Reservation Area** — background image section with white form card (box-shadow), reservation form fields
7. **Chef Area** — large chef photo + description + signature + row of 4 item thumbnails (lightbox)
8. **Food Gallery** — full-width image carousel (owl-carousel style, fluid images)
9. **Brands Area** — "In associasion with" heading + brand logo carousel
10. **Footer** — dark overlay (75% black) over background image, 4 columns (Top Products, Resources, Newsletter + social)

## Design Notes
- **Fonts:** Pacifico (headings, cursive) + Roboto (body, 400/500) — load via Google Fonts link in index.html
- **Brand color:** #f42f2c (red) with gradient to #f48464 for CTA backgrounds
- **Buttons:** sharp rectangle (border-radius 2px), border 1px solid #f42f2c, white bg → hover fills red
- **Section spacing:** 150px 0 (80px on mobile breakpoints)
- **Banner overlap:** negative margin-top on banner-bottom to overlap hero (-340px to -555px depending on breakpoint)
- **Reservation form:** white card with box-shadow(0 20px 50px rgba(0,0,0,0.1)), input borders are bottom-only #eeeeee
- **Footer overlay:** ::after pseudo-element, background #000, opacity 0.75
- **Nav sidebar:** fixed right, 150px width, white bg, box-shadow, items with icon images + text

## Implementation Approach
- Single-page: `src/App.tsx` composes all sections in order
- Components: `Navbar.tsx`, `Hero.tsx`, `BannerBottom.tsx`, `Breakfast.tsx`, `Lunch.tsx`, `Reservation.tsx`, `Chef.tsx`, `FoodGallery.tsx`, `Brands.tsx`, `Footer.tsx`
- Use `cn()` from `packages/ui` for class composition
- Placeholder images: `https://picsum.photos/seed/pitmaster-<n>/<w>/<h>`
- Icons: lucide-react where possible; Font Awesome-style icons can be replaced with lucide equivalents
- Carousel: implement with CSS scroll-snap or simple auto-scroll (no jQuery owl-carousel dependency)
- Form: controlled inputs with useState, basic validation
- No parallax, no lightbox complexity needed — simplified for React

## Fidelity Gaps (acceptable)
- Video play button → static play icon (no actual YouTube embed)
- Lightbox on chef items → simplified hover effect or skip
- Brand carousel → CSS animation scroll (no owl-carousel)
- Google Maps script excluded (not needed for template)
- Nice-select dropdowns → native `<select>` or styled dropdown

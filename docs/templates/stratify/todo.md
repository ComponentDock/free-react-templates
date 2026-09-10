# Stratify — Implementation TODO

Source: ColorLib Bizcon (https://colorlib.com/wp/template/bizcon/)
Preview: https://preview.colorlib.com/theme/bizcon/
New name: stratify

## Section order (top to bottom, matching preview)

1. **Navbar** — fixed top, transparent over hero, collapses to hamburger on mobile
2. **Hero / Banner** — full-height gradient section with headline, subtext, 2 CTAs, decorative floating shapes
3. **About** — two-column (image left, text right), heading "24 Year Experience in consulting", CTA button
4. **Services** — gray background, 3 service cards with numbered icons (Business Opportunity, Commercial Approach, etc.)
5. **Reviews / Testimonials** — carousel with customer quotes, names, roles, dot navigation
6. **Portfolio** — 4-item grid with overlay titles, "Load More" button
7. **Secondary CTA / Services** — heading + description + "Learn More" button, full-width
8. **Blog** — 3 post cards (thumbnail, title, "read more" link)
9. **Footer** — newsletter gradient section, 4-column links, copyright bar, Component Dock link

## Fidelity notes

- **Hero gradient:** `linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)` — warm coral-to-peach. This is the signature visual element.
- **Typography:** Poppins for everything; Martel serif for decorative accents. Use Google Fonts `<link>` in `index.html`.
- **Buttons:** Pill-shaped (`border-radius: 50px`). Primary is solid orange (#ff7e5f), secondary is outlined orange.
- **Section spacing:** Consistent `section_padding` (~80px top/bottom). Gray bg sections (`#f7f7f7`) alternate with white.
- **Decorative shapes:** Floating geometric elements in hero with CSS animations (custom-animation classes). Use absolute-positioned divs with CSS keyframes.
- **Services cards:** Numbered (01, 02, 03) with orange accent numbers. Each card has icon, title, description.
- **Testimonials:** Carousel/slider — use a simple state-based approach with dot indicators and prev/next arrows.
- **Portfolio grid:** 2x2 grid on desktop, stacked on mobile. Each item has a dark overlay with white title text on hover.
- **Newsletter gradient:** Same orange-to-peach gradient as hero, used as a CTA band within the footer area.

## Component tree

```
App.tsx
├── Navbar.tsx
├── Hero.tsx
├── About.tsx
├── Services.tsx
├── Testimonials.tsx
├── Portfolio.tsx
├── SecondaryCta.tsx
├── Blog.tsx
└── Footer.tsx
```

## Design token mapping (Tailwind @theme)

```
--color-brand: #ff7e5f
--color-brand-light: #feb47b
--color-bg-light: #f9f9ff
--color-bg-subtle: #f0e9ff
--color-bg-gray: #f7f7f7
--color-text-dark: #2f373d
--color-text-mid: #666666
--color-text-light: #999999
```

## Dependencies to reuse

- `packages/ui` Button (primary + outline variants), cn()
- No new dependencies needed (all from UI + lucide-react for icons)

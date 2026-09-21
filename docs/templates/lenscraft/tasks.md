# Lenscraft — Implementation Tasks

Source: ColorLib "Alime" (https://preview.colorlib.com/theme/alime/)

## Structure order (implement top-down)

1. `index.html` — Google Fonts link for Poppins
2. `src/index.css` — Tailwind entry + `@theme` tokens (#fc6060 brand, Poppins font)
3. `src/App.tsx` — Compose all sections in order
4. `src/components/Navbar.tsx` — Fixed top nav, logo, links, search icon, mobile hamburger
5. `src/components/Hero.tsx` — Carousel with 2 slides, bg images + overlay, heading, CTA, email
6. `src/components/Portfolio.tsx` — Filter menu + 4-col grid, hover overlays
7. `src/components/InstagramFeed.tsx` — Heading, handle, row of images with hover
8. `src/components/Footer.tsx` — Copyright, logo, social icons, Component Dock link

## Design notes

- **Navbar:** Fixed position, z-50, transparent bg on top, solid on scroll. Hamburger toggle for mobile with slide-in menu.
- **Hero:** Full viewport height, bg images with `bg-cover bg-center`, dark overlay (`bg-black/40`). Two slides with CSS transition/animation. Heading text white, bold. Button: outline style (2px solid brand, rounded-full, white text), on hover fills brand.
- **Portfolio:** Section padding 80px top/bottom. Filter buttons: text uppercase, transparent bg, brand color on active. Grid: `grid-cols-4` desktop, `grid-cols-2` tablet, `grid-cols-1` mobile. Each item: aspect-square image, hover overlay with "+" icon center.
- **Instagram:** Heading centered, handle below. Row of equal-width images (`flex` or `grid-cols-6`). Hover: dark overlay with Instagram icon.
- **Footer:** Single row flex between copyright, logo, social icons. Social icons from lucide-react (Facebook, Twitter, Instagram, LinkedIn). Copyright links to Component Dock.
- **Images:** All via `https://picsum.photos/seed/lenscraft-<n>/...` (n = 1-8 for portfolio, hero bg = large landscape).
- **Colors:** Use `bg-brand` / `text-brand` / `border-brand` where `brand` is the `#fc6060` token in `@theme`.
- **Fonts:** Poppins loaded via `<link>` in `index.html`, declared in `@theme` as `font-poppins`.

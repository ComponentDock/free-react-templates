# Craftfolio — Prep Notes

## Source
- ColorLib template: **Steve** (`steve`)
- Preview: https://preview.colorlib.com/theme/steve/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/steve-free-template.jpg

## Design notes

### Structure order (must match 1:1)
1. Navbar (fixed, logo + links, mobile hamburger)
2. Hero Banner Carousel (fullscreen, 3 slides, name + subtitle + CTA)
3. Portfolio Grid (4-col, 8 cards, filter bar, hover overlay)
4. About (2-col: image left, text right, gray bg)
5. Testimonials (2-col: carousel left, brand logos right)
6. Newsletter (bg image, heading, email input + subscribe)
7. Footer (logo, social icons, copyright, golden yellow bg)

### Fidelity notes per section

**Navbar:** Fixed top, transparent/light background. Logo left, nav links right (Home, About, Portfolio dropdown, Pages dropdown, Blog dropdown, Contact). Hamburger on mobile. Use Tailwind `sticky top-0 z-50`. Dropdowns: simple hover or click toggle.

**Hero:** Fullscreen height (`h-screen`), background image (use `picsum.photos/seed/craftfolio-hero-1/1920/1080`). Centered content: h1 name, h3 subtitle, CTA button. Carousel with 3 slides — can use a simple React state-based carousel (no external dep). Each slide has different bg image.

**Portfolio:** Title + filter bar at top. 4-column grid (`grid-cols-4`). 8 cards, each with: image (`picsum.photos/seed/craftfolio-work-<n>/400/300`), dark overlay on hover (opacity transition), title text + "Client Project" subtitle. Cards have `border-radius: 5px` and `overflow: hidden`.

**About:** Two columns (`grid-cols-2` or flex). Left: portrait image (`picsum.photos/seed/craftfolio-about/500/600`). Right: h1 "About Myself", two paragraphs of body text, "More Info" CTA button. Background: `#f9f9ff` (gray-bg). Section padding: 120px vertical.

**Testimonials:** Split layout. Left: carousel of testimonial cards (each has: quote icon from lucide-react, h4 name, 5 star icons, paragraph text). Right: white card with shadow containing 5 brand logo placeholders in a grid pattern. Background: background image (`picsum.photos/seed/craftfolio-testi/1920/800`), hidden on mobile.

**Newsletter:** Background image with dark overlay. Centered white h1 "Join Our Newsletter", paragraph text. Email input + "Subscribe" button in a row. Section padding: 120px.

**Footer:** Golden yellow background (`#ffd200`). Centered layout: logo image, "Follow Me" heading, 4 social icon links (use lucide-react: Facebook, Twitter, Dribbble, Behance icons), copyright line with Component Dock link.

### Color palette summary
- Brand red: `#e45447` (CTAs, hover states)
- Golden yellow: `#ffd200` (footer bg)
- Light gray: `#f9f9ff` (about section bg)
- Text dark: `#222`
- Text muted: `#777`
- White: `#fff`
- Black overlay: `#000` at varying opacity

### Typography
- Headings: Poppins (Google Fonts)
- Body / buttons: Roboto (Google Fonts)
- Load via `<link>` in `index.html`

### Components to build
- `Navbar.tsx` — sticky, logo, nav links, mobile toggle, dropdowns
- `HeroCarousel.tsx` — fullscreen, 3 slides, state-based carousel
- `PortfolioGrid.tsx` — filter bar, 4-col grid, hover overlay cards
- `About.tsx` — 2-col layout, image + text + CTA
- `Testimonials.tsx` — 2-col: carousel + brand logos
- `Newsletter.tsx` — bg image, heading, email form
- `Footer.tsx` — social icons, copyright, Component Dock link

### Shared UI usage
- Use `cn()` from `packages/ui` for class merging
- Use `Button` / `ButtonLink` from `packages/ui` for CTA buttons
- Use `lucide-react` for icons (Quote, Star, Facebook, Twitter, Dribbble, Behance)

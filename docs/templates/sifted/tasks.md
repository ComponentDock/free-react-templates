# Sifted — Prep Notes & Todo

Source: ColorLib Cakes → https://colorlib.com/wp/template/cakes/
Preview: https://preview.colorlib.com/theme/cakes/
New name: sifted (apps/sifted)

## Implementation Todo

1. Copy starter app (simplest existing app) to `apps/sifted`
2. Rename package to `@free-react-templates/sifted`
3. Update `public/CNAME` to `sifted.free.componentdock.com`
4. Update `homepage` in `package.json` to `https://sifted.free.componentdock.com`
5. Create `src/index.css` with Tailwind entry + `@theme` block defining brand tokens:
   - `--color-brand-primary: #F04506`
   - `--color-brand-dark: #d83e06`
   - `--color-card-bg: #FFF5F2`
   - `--color-footer-bg: #FFF7F3`
   - `--color-text-hero: #1A1A1A`
6. Add Google Fonts link in `index.html`: DM Sans, Quicksand, Lobster
7. Build components in `src/components/`:
   - `Navbar.tsx` — sticky header with logo, nav links (Home, Product, About, Blog, Contact), phone, CTA button
   - `Hero.tsx` — full-width hero with background image, "Delicious" watermark (Lobster, huge, low opacity), h1, paragraph, CTA
   - `PopularItems.tsx` — "Most Popular" / "Our Exclusive Cakes" heading, 3-column grid of product cards (image, title, desc, order button), card bg #FFF5F2, border-radius 0 0 60px 0
   - `About.tsx` — split layout: left image, right text with "Fresh & Delicious" span, heading, paragraph, "Our Story" button
   - `Services.tsx` — "Our Features" / "Quality is Our First Priority", 3-column icon+title+desc cards
   - `VideoSection.tsx` — dark background image with centered play button
   - `Testimonials.tsx` — "Testimonial" / "What Customers Say", carousel of quote+avatar+name+role
   - `InstagramStrip.tsx` — 6 horizontal images with hover Instagram icon overlay
   - `Footer.tsx` — 4-column footer (#FFF7F3 bg): logo+desc+social | Quick Links | Cake types | Contact; bottom bar with Component Dock link
8. Compose all sections in `src/App.tsx`
9. Write tests for every component (Vitest + Testing Library)
10. Run `npm run verify:app sifted` to pass per-app gate
11. Commit as `feat: add sifted template (ColorLib cakes)`
12. Push branch, open PR, merge, deploy

## Design Notes

### Section Order (must match original)
1. Navbar (sticky)
2. Hero (full-width bg image)
3. Popular Items (3 cards, carousel on mobile)
4. About (split layout)
5. Services (3 feature cards)
6. Video (bg image + play button)
7. Testimonials (carousel)
8. Instagram Strip (horizontal images)
9. Footer (4-column, warm bg)

### Fidelity Notes

- **Hero**: The "Delicious" watermark text is rendered in Lobster cursive at 160px with rgba(240,69,6,0.06) color — very faint. Use absolute positioning with negative top/left offsets. The hero has a background image covering the full section. Min-height 820px on desktop.
- **Product cards**: Each card has image on top with `border-radius: 0 0 40px 0` and a bottom section with name, description, and gradient CTA button. Cards sit on #FFF5F2 with `border-radius: 0 0 60px 0`. On hover, image scale transitions from 1.1 to 1.
- **About section**: Left column has the image (with `w-100`). Right column has section-tittle (span + h2) and paragraph + button. The span text ("Fresh & Delicious") is #F04506 with letter-spacing 0.2em.
- **Services**: Icons come from SVG files. Use lucide-react equivalents. Cards are centered with icon above title + description.
- **Video section**: Uses `data-background` attribute for parallax-like background image. Centered play button with fa-play icon in a circle.
- **Testimonials**: Carousel of customer cards. Each card has a quote, then an avatar (circular), name, and role.
- **Instagram**: Horizontal strip of images, each with a ti-instagram icon that appears on hover (opacity transition from 0 to 1, positioned at 48% from top).
- **Footer**: Warm #FFF7F3 background. Social icons in brand color (#F04506). Phone number also in brand color. Bottom bar has copyright with heart icon and Colorlib attribution (replace with Component Dock).

### Placeholder Images

- Hero background: `https://picsum.photos/seed/sifted-hero/1920/1080`
- Product cards: `https://picsum.photos/seed/sifted-cake1/400/400`, `.../cake2/...`, `.../cake3/...`
- About image: `https://picsum.photos/seed/sifted-about/600/500`
- Service icons: Use lucide-react (Cake, Star, Heart or similar)
- Video background: `https://picsum.photos/seed/sifted-video/1920/800`
- Testimonial avatars: `https://picsum.photos/seed/sifted-avatar1/80/80`, `.../avatar2/...`
- Instagram strip: `https://picsum.photos/seed/sifted-insta1/400/400` through `.../insta6/...`

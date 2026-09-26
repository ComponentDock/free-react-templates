# Mellow — Design Notes & Implementation Tasks

## Source

- **ColorLib:** Melan — https://colorlib.com/wp/template/melan/
- **Preview:** https://preview.colorlib.com/theme/melan/
- **Category:** Personal Portfolio / Creative Designer

## Design Notes

### Layout

Single-page personal portfolio. Full-viewport hero with background image, followed by services, portfolio gallery, about section, counters, testimonials, CTA, and dark footer. The page uses a light lavender background (`#f9f9ff`) for most sections.

### Color Palette

- Brand purple: `#615CFD` — buttons, accent lines, counter numbers, section title decorations
- Dark navy: `#001D38` — footer, discuss section, section title text, counter labels
- Light lavender: `#f9f9ff` — page body background
- Light purple: `#f0e9ff` — services section background
- Accent orange: `#ff5e13` — secondary accent (sparingly used)
- Muted gray: `#999999` — secondary text
- Border gray: `#E8E8E8` — counter card borders

### Typography

- Primary font: Muli (Google Fonts, weights 300–900)
- Section titles: 50px bold, `#001D38` color
- Section spans/labels: 13px, letter-spacing 3px, uppercase, `#001D38`
- Body text: 14–15px, `#999999` or `#001D38` depending on section
- Counter numbers: 50px bold, `#615CFD`

### Interactive Elements

- Sticky header with nav dropdowns (Blog, Pages)
- "Contact Me" CTA button (`.boxed-btn3` — square corners, purple bg)
- Portfolio hover overlay with "Product Design" title on each image
- Magnific-popup lightbox on portfolio images
- Testimonial carousel (owl-carousel)
- Counter number animation (jquery.counterup)
- "More Folio" outline button (`.line_btn` — purple border, hover fills)
- "Download CV" button (`.boxed-btn3`)
- "Start Talking" button (`.boxed-btn3`)

### Section Order (fidelity)

1. Header — sticky nav, logo, nav links, "Contact Me" button
2. Hero — full-viewport bg image, decorative grid, social links, centered greeting
3. Services — light purple bg, 3-column icon cards
4. Portfolio Header — dark bg with white text
5. Portfolio Gallery — asymmetric 5-image grid with hover overlays + "More Folio"
6. About Me — watermark text, bio + photo with color grid decoration + "Download CV"
7. Counters — 3 bordered stat cards (520+ Projects, 244 Ongoing, 95% Success)
8. Testimonials — bg image + dark gradient overlay, carousel of quotes
9. Discuss Projects — dark navy CTA section with "Start Talking"
10. Footer — dark navy, menu links + social icons, Component Dock attribution

## Implementation Tasks

### 1. Scaffold

- [ ] Create `apps/mellow/` (copy simplest existing app, rename package)
- [ ] Register in `package.json` workspaces
- [ ] Set up `src/index.css` with Tailwind + theme tokens (brand `#615CFD`, dark `#001D38`)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `mellow.free.componentdock.com`
- [ ] Run `npm install` at root for lockfile registration

### 2. Components

- [ ] `Header.tsx` — sticky nav, logo, nav links with dropdowns, "Contact Me" button
- [ ] `Hero.tsx` — full-viewport bg image, decorative grid, social links, centered greeting
- [ ] `Services.tsx` — light purple bg, 3-column grid with icon cards
- [ ] `PortfolioHeader.tsx` — dark bg section title
- [ ] `PortfolioGallery.tsx` — asymmetric 5-image grid with hover overlays
- [ ] `AboutMe.tsx` — watermark text, bio + photo + "Download CV" button
- [ ] `Counters.tsx` — 3 bordered stat cards with animated numbers
- [ ] `Testimonials.tsx` — bg image + gradient overlay, carousel
- [ ] `DiscussProjects.tsx` — dark navy CTA with "Start Talking"
- [ ] `Footer.tsx` — dark navy, menu links + social icons + Component Dock
- [ ] `App.tsx` — compose all sections in order

### 3. Styling

- [ ] Muli font via Google Fonts `<link>` in `index.html`
- [ ] Hero: full-viewport, background image, decorative grid overlay
- [ ] Services: `#f0e9ff` bg, section title with purple vertical line
- [ ] Portfolio: asymmetric grid (5+7 cols then 4+4+4 cols), hover overlays
- [ ] About: large decorative "About" text, color grid pattern, portrait photo
- [ ] Counters: bordered cards, `#615CFD` numbers, hover border effect
- [ ] Testimonials: background image + gradient overlay, carousel dots
- [ ] Discuss Projects: `#001D38` bg, white text, CTA button
- [ ] Footer: `#001D38` bg, white links, social icons, copyright

### 4. Tests (TDD)

- [ ] Header renders logo, nav links, Contact Me button, is sticky
- [ ] Hero renders greeting, subtitle, background image, social links
- [ ] Services renders 3 service cards with icons, titles, descriptions
- [ ] Portfolio renders 5 images in grid with hover overlays
- [ ] About renders bio, photo, Download CV button, watermark text
- [ ] Counters renders 3 stat cards with numbers and labels
- [ ] Testimonials renders carousel with quotes, author info
- [ ] DiscussProjects renders CTA heading and button
- [ ] Footer renders links, social icons, Component Dock attribution
- [ ] Responsive behavior (mobile stacking, header collapse)
- [ ] 100% coverage gate passes

### 5. Finalize

- [ ] `npm run readme:status` to update README
- [ ] Conventional commit: `feat: add Mellow (ColorLib Melan) personal portfolio`
- [ ] Push to main, verify deploy

# FilmVault — Implementation Todo

Source: ColorLib Rettro (https://preview.colorlib.com/theme/rettro/)
New name: filmvault

## Tasks

- [ ] Scaffold app from an existing template (copy simplest app, rename package)
- [ ] Register workspace: `npm install` at repo root, verify lockfile
- [ ] Create `public/CNAME` with `filmvault.free.componentdock.com`
- [ ] Set `"homepage"` in package.json
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind + theme tokens (Playfair Display, Montserrat)
- [ ] Add Google Fonts link for Playfair Display + Montserrat in `index.html`
- [ ] Build `Navbar` component (logo, nav links, sticky, hamburger on mobile)
- [ ] Build `HeroSlider` component (3-slide carousel, headline, signature, captions, dot nav)
- [ ] Build `Gallery` component (asymmetric 2-col grid, 4 items, hover overlay, CTA)
- [ ] Build `AboutMe` component (full-width dark bg, heading, description, border button)
- [ ] Build `Services` component (4 icon cards in a row)
- [ ] Build `Testimonials` component (dark bg, carousel, quotes, founder info)
- [ ] Build `Pricing` component (3 cards, "Most Popular" badge, feature lists)
- [ ] Build `InstagramFeed` component (horizontal carousel with hover overlay)
- [ ] Build `Footer` component (centered logo, nav, social icons, copyright)
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for each component (Vitest + RTL, 100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
- [ ] Commit and push

## Design Notes

### Section Order
1. Navbar (sticky)
2. Hero Slider (full-width, 3 slides)
3. Gallery (asymmetric 2-col)
4. About Me (full-width dark overlay)
5. Services (4 icon cards)
6. Testimonials (dark bg carousel)
7. Pricing (3 cards)
8. Instagram Feed (carousel)
9. Footer (centered)

### Color Palette
- Near-black: #071112 (headings, button text/border)
- Dark navy: #10285d (body text)
- Link gray: #635c5c
- White: #fff (button bg, card bg)
- Dark overlay: semi-transparent on hero, about, gallery hover

### Typography
- Headings: Playfair Display 400 (serif, elegant)
- Body: Montserrat 400, 16px, line-height 30px
- Buttons: Playfair Display, uppercase, letter-spacing 3px

### Button Style
- `.boxed-btn`: white bg, #071112 text, 1px solid #071112 border, letter-spacing 3px, uppercase
- `.border-btn`: transparent bg, #071112 border, similar to boxed-btn
- Hover: bg #071112, text #fff

### Layout Patterns
- Hero: full-width slider, container, col-xl-9 headline
- Gallery: container, 5/7 and 6/6 column splits
- About: full-width with background image overlay (fix overflow)
- Services: container, 4 equal columns (col-lg-3)
- Testimonials: dark bg section, centered col-lg-9
- Pricing: container, 3 equal columns (col-xl-4)
- Instagram: full-width container-fluid, horizontal scroll/carousel
- Footer: centered, single column

### Responsive Breakpoints
- Desktop: >1200px (full layout)
- Tablet: 768-1200px (adjusted columns)
- Mobile: <768px (stacked, hamburger menu)

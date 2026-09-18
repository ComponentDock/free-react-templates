# Treklore — Design Notes & Implementation Tasks

Source: ColorLib Travello (https://preview.colorlib.com/theme/travello/)
New name: treklore
Stack: React 19 + Vite + Tailwind 4 + TypeScript

## Section Order (top to bottom)

1. **Header** — transparent overlay, logo (Oswald), nav, phone, social icons, hamburger
2. **HeroSlider** — Swiper carousel, 3 slides with headlines, vertical nav dots
3. **SearchForm** — white bar overlapping hero, 4 inputs + dark search button
4. **IntroFeatures** — 3-column icon cards (destinations, prices, services)
5. **PopularDestinations** — 6 destination cards in grid with images, names, prices
6. **WhyChooseUs** — parallax bg, 3 feature cards with icon overlays
7. **FeaturedTours** — Swiper slider of tour cards with badges, prices, CTAs
8. **Testimonials** — background image, slider with quotes + author
9. **InstagramFeed** — 6 images with hover overlay
10. **LatestNews** — 3 news posts + promotional sidebar
11. **Footer** — newsletter form, 3 contact columns, copyright + Component Dock

## Design Token Notes

- Body font: Open Sans 300–800 via Google Fonts
- Display font: Oswald 400–700 via Google Fonts (logo, headings, buttons)
- Dark navy: `#1a1a2e` — header bg, search button, dark overlays
- Blue accent: `#3b82f6` — links, active states
- Blue hover: `#2563eb` — link hover
- Text muted: `#64748b` — body text
- Warm brown: `#937c6f` — hover states
- White: `#FFFFFF` — search bg, cards
- Dark bg: `#232323` — dark sections
- Buttons: sharp (radius 0), navy bg, white text
- Cards: Bootstrap default radius (0.375rem)
- Parallax: `background-attachment: fixed` on Why Choose Us

## Fidelity Notes

- Match section order exactly as listed above
- Use Swiper.js for hero slider and featured tours slider
- Search form: absolute positioned overlapping hero, white background
- Destinations: use Isotope-style masonry grid or CSS grid
- Why Choose Us: parallax background with fixed attachment
- Featured Tours: horizontal card slider with image, badges, content
- Testimonials: background image with dark overlay, centered text
- Instagram: 6-column grid with hover icon overlay
- News: 2-column layout (posts left, promo sidebar right)
- Footer: newsletter form on dark background image
- All placeholder images: `https://picsum.photos/seed/treklore-<n>/<w>/<h>`

## Tasks

- [ ] Set up `apps/treklore` workspace (copy simplest existing app, rename package)
- [ ] Create `index.html` with Open Sans + Oswald font links
- [ ] Create `index.css` with Tailwind `@theme` tokens (navy, blue, brown)
- [ ] Create `App.tsx` composing all section components
- [ ] Create `Header.tsx` — logo, nav, phone, social, hamburger
- [ ] Create `HeroSlider.tsx` — Swiper carousel with headlines + vertical nav
- [ ] Create `SearchForm.tsx` — 4 inputs + dark search button
- [ ] Create `IntroFeatures.tsx` — 3-column icon feature cards
- [ ] Create `PopularDestinations.tsx` — 6 destination cards in grid
- [ ] Create `WhyChooseUs.tsx` — parallax bg + 3 feature cards
- [ ] Create `FeaturedTours.tsx` — Swiper tour card slider
- [ ] Create `Testimonials.tsx` — bg image + quote slider
- [ ] Create `InstagramFeed.tsx` — 6-image grid with hover overlay
- [ ] Create `LatestNews.tsx` — 3 news posts + promo sidebar
- [ ] Create `Footer.tsx` — newsletter, contact columns, copyright + Component Dock
- [ ] Write tests for each component (Vitest + RTL, 100% coverage)
- [ ] Verify: `npm run test:coverage` passes at 100%
- [ ] Verify: typecheck + lint pass
- [ ] Verify: build succeeds
- [ ] Commit as `feat: add treklore (travel & tourism) template`

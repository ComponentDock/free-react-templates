# Adpick — Implementation Todo & Design Notes

Source: ColorLib "Classy Ads" (slug: classy-ads)
Preview: https://preview.colorlib.com/#classy-ads
Live preview: https://preview.colorlib.com/theme/classyads/
Spec: openspec/specs/template-adpick/spec.md

## Implementation Order

### Phase 1: Scaffold
- [ ] Copy simplest existing app (e.g. blankslate) to `apps/adpick`
- [ ] Rename package to `@free-react-templates/adpick`
- [ ] Update `public/CNAME` to `adpick.free.componentdock.com`
- [ ] Update `homepage` in package.json to `https://adpick.free.componentdock.com`
- [ ] Update `index.html` title to "Adpick — Classified Ads"
- [ ] Add Nanum Gothic Google Font link to `index.html`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Components (top to bottom)
- [ ] `Navbar.tsx` — Logo ("Classy" + "Ads" in teal), nav links, "Post an Ad" CTA
- [ ] `Hero.tsx` — Full-width bg image, dark overlay (60%), headline, 3-input search bar
- [ ] `FeaturedAds.tsx` — 8 ad cards in 4-col grid (2 rows), bg-light
- [ ] `PopularProducts.tsx` — 5 product items with large images, primary headings
- [ ] `TrendingToday.tsx` — 6 listing cards in grid, bg-light, primary heading
- [ ] `Testimonials.tsx` — 4 testimonial blockquotes with profile images, white bg
- [ ] `Blog.tsx` — 3 blog post cards with images, bg-light
- [ ] `Newsletter.tsx` — Teal bg-primary, email form with white input
- [ ] `Footer.tsx` — Dark bg (#333333), 3 columns, Component Dock link

### Phase 3: App Assembly
- [ ] `App.tsx` — Compose all sections in order
- [ ] `index.css` — Tailwind entry + @theme tokens (#30e3ca primary, Nanum Gothic)
- [ ] `vite.config.ts` — Register `injectUiSource()` for Tailwind v4

### Phase 4: Tests (TDD)
- [ ] Navbar: logo text, nav links, CTA button, responsive
- [ ] Hero: headline, search inputs, overlay
- [ ] FeaturedAds: card count, card content, hover state
- [ ] PopularProducts: item count, headings
- [ ] TrendingToday: card count, content
- [ ] Testimonials: card count, blockquotes
- [ ] Blog: post count, titles
- [ ] Newsletter: form, email input
- [ ] Footer: columns, Component Dock link
- [ ] App: section order, full render

### Phase 5: Polish
- [ ] Placeholder images: `https://picsum.photos/seed/adpick-hero/1920/600`, etc.
- [ ] AOS animations (data-aos="fade-up" on key elements)
- [ ] Responsive breakpoints (mobile hamburger, stacked grids)
- [ ] 100% test coverage verification
- [ ] Typecheck + lint pass

## Design Notes

### Color Palette (from live CSS)
- Primary: #30e3ca (teal/cyan) — used on headings, buttons, newsletter bg
- Body text: #4d4d4d
- Headings: #25262a (dark charcoal)
- Light sections: #f4f5f9
- Hero overlay: rgba(0, 0, 0, 0.6)
- Footer bg: #333333
- Footer text: #999999

### Typography
- Font: Nanum Gothic (Google Fonts)
- Section headings: font-weight-light, text-primary (#30e3ca)
- Featured Ads heading: h5, text-black, no font-weight-light
- Card titles: bold h3 links
- Blog titles: font-size-regular

### Layout Details
- Bootstrap-style grid (12-col, responsive breakpoints)
- Container: max-width ~1200px centered
- Featured Ads: 4 columns × 2 rows = 8 cards
- Popular Products: 5 items (layout varies, images + text side by side)
- Trending Today: 3 columns × 2 rows = 6 cards
- Testimonials: 4 cards in a row
- Blog: 3 cards in a row
- Newsletter: 2-column (text left, form right)

### Key CSS Classes (from original)
- .site-blocks-cover.overlay — hero with dark overlay
- .site-section — standard section padding
- .bg-light — light gray section bg (#f4f5f9)
- .bg-primary — primary color background (teal)
- .text-primary — primary color text (teal)
- .newsletter.bg-primary — newsletter section
- .testimonial — testimonial card with blockquote
- .site-footer — footer styling
- .form-control.rounded — rounded search inputs
- .cta — call-to-action button styling
- .btn with border-radius: 0 — square buttons
- .rounded on CTA — 4px border-radius

### Differences from Original
- New name "Adpick" (not "ClassyAds" or "Classy Ads")
- No ColorLib references in code
- Placeholder images via picsum.photos
- Footer links to Component Dock
- React 19 + Vite + Tailwind 4 + TypeScript (not Bootstrap jQuery)

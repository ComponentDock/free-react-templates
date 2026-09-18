# Roofly — Design Notes & Implementation Tasks

Source: ColorLib Myhome (https://preview.colorlib.com/theme/myhome/)
New name: roofly
Stack: React 19 + Vite + Tailwind 4 + TypeScript

## Section Order (top to bottom)

1. **TopHeaderBar** — purple `#55407d` bar with contact info + social icons + login/register
2. **MainHeader** — logo + nav + submit listing button + hamburger mobile
3. **HeroSlider** — full-width image carousel with property headline + price tag overlay
4. **SearchForm** — "Find your home" title, 3 inputs (type/rooms/location) + green submit
5. **FeaturedProperties** — "the best deals" subtitle + 3-column property card grid
6. **MapSection** — split: map placeholder left + purple sidebar with city radio list right
7. **HotDeal** — "Today's Hot Deal" 2-column: image left + deal details/agent right
8. **Testimonials** — 2-column: background image left + testimonial slider right
9. **Footer** — dark `#1e1332`, 4-column: about/social, info/links, property types, featured card
10. **FooterBar** — darkest `#110a1f`, copyright + nav + Component Dock link

## Design Token Notes

- Font: Montserrat 300–900 via Google Fonts `<link>` in `index.html`
- Brand purple: `#55407d` — header bar bg, map sidebar overlay
- Dark purple: `#1e1332` — footer content bg
- Accent green: `#adc867` — buttons, tags, active states, selections
- Salmon hover: `#ffa07f` — link hover underline
- Text dark: `#2b2e35` — headings, body
- Text muted: `#a2b0bf` — paragraph text
- Testimonials bg: `#f1f6fc` — light blue-grey
- Footer bar: `#110a1f` — darkest strip
- Buttons: flat (radius 0), green bg, white text
- Tags/badges: flat (radius 0), colored backgrounds

## Fidelity Notes

- Match section order exactly as listed above
- Hero slider should be a simple carousel (react-slick or custom) with 3 slides
- Search form: horizontal layout on desktop, stacked on mobile
- Featured properties: 3 equal-width cards in a row, stacked on mobile
- Map section: use a static map image placeholder instead of Google Maps API
- Hot deal: side-by-side image + content with large property stat icons
- Testimonials: use a simple slider for client quotes
- Footer: 4-column grid, stacked on mobile
- All placeholder images: `https://picsum.photos/seed/roofly-<n>/<w>/<h>`

## Tasks

- [ ] Set up `apps/roofly` workspace (copy simplest existing app, rename package)
- [ ] Create `index.html` with Montserrat font link
- [ ] Create `index.css` with Tailwind `@theme` tokens
- [ ] Create `App.tsx` composing all section components
- [ ] Create `TopHeaderBar.tsx` — purple bar with contact info, social, login/register
- [ ] Create `MainHeader.tsx` — logo, nav, submit button, hamburger
- [ ] Create `HeroSlider.tsx` — carousel with headlines and price tags
- [ ] Create `SearchForm.tsx` — "Find your home" form with 3 inputs
- [ ] Create `FeaturedProperties.tsx` — 3-column card grid
- [ ] Create `MapSection.tsx` — split layout with city radio list
- [ ] Create `HotDeal.tsx` — 2-column deal highlight
- [ ] Create `Testimonials.tsx` — image + testimonial slider
- [ ] Create `Footer.tsx` — 4-column dark footer with Component Dock link
- [ ] Create `FooterBar.tsx` — copyright strip
- [ ] Write tests for each component (Vitest + RTL, 100% coverage)
- [ ] Verify: `npm run test:coverage` passes at 100%
- [ ] Verify: typecheck + lint pass
- [ ] Verify: build succeeds
- [ ] Commit as `feat: add roofly (real estate listing) template`

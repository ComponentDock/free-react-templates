# Trekcraft — Design Notes & Implementation Tasks

Source: ColorLib Travelix (https://preview.colorlib.com/theme/travelix/)
New name: trekcraft
Stack: React 19 + Vite + Tailwind 4 + TypeScript

## Section Order (top to bottom)

1. **TopBar** — thin bar with phone, social icons, login/register
2. **MainNav** — logo + nav links + search icon + hamburger
3. **HeroSlider** — full-width carousel with "discover the world" + gradient button
4. **SearchPanel** — 6 tabbed categories (hotels active), form with destination/dates/guests
5. **BestTours** — "We have the best tours" + 3-column destination cards
6. **CtaSlider** — background image section with package slides
7. **BestOffers** — "the best offers with rooms" + 4 offer cards (2x2 grid)
8. **Testimonials** — "what our clients say" + author photo/quote slider
9. **TrendingDestinations** — 4-column grid of 8 trending items
10. **Contact** — background image + contact form (name, email, subject, message)
11. **Footer** — 4-column: about/social, blog posts, tags, contact info
12. **CopyrightBar** — copyright text + nav links + Component Dock link

## Design Token Notes

- Body font: Open Sans 300–800 via Google Fonts
- Display/decorative font: "Beyond the Mountains" is a custom .otf — use Playfair Display or Georgia as fallback
- Orange primary: `#fa9e1b` — buttons, prices, active states, stars
- Purple secondary: `#8d4fff` — gradient partner
- Gradient: `linear-gradient(to right, #fa9e1b, #8d4fff)` — buttons, nav arrows, borders
- Dark purple overlay: `rgba(54, 19, 84, 0.6)` / `#350a4e` / `#31124b`
- Text dark: `#2d2c2c`
- Text muted: `#929191`
- Button radius: 27px (pill shape)
- Card radius: 18px
- Star color: `#fa9e1c`

## Fidelity Notes

- Match section order exactly as listed above
- Hero slider: use a simple carousel with dark purple overlay on images
- Search panel: use tabs (useState) to switch between 6 category forms; hotels active by default
- Tour cards: full-background images with gradient overlay, centered content
- CTA: background image with dark overlay, centered slider
- Offers: 2-column grid, each card has image left + details right
- Testimonials: slider with circular author photos
- Trending: 4-column grid with small thumbnails
- Contact: split layout with background image
- Navigation arrows: use SVG with gradient fill (orange-to-purple)
- All placeholder images: `https://picsum.photos/seed/trekcraft-<n>/<w>/<h>`

## Tasks

- [ ] Set up `apps/trekcraft` workspace (copy simplest existing app, rename package)
- [ ] Create `index.html` with Open Sans + display font links
- [ ] Create `index.css` with Tailwind `@theme` tokens (orange, purple, gradient)
- [ ] Create `App.tsx` composing all section components
- [ ] Create `TopBar.tsx` — phone, social icons, login/register
- [ ] Create `MainNav.tsx` — logo, nav, search icon, hamburger
- [ ] Create `HeroSlider.tsx` — carousel with headlines, gradient button, SVG arrows
- [ ] Create `SearchPanel.tsx` — 6 tabbed forms with category switching
- [ ] Create `BestTours.tsx` — 3-column destination cards with overlays
- [ ] Create `CtaSlider.tsx` — background image section with package slides
- [ ] Create `BestOffers.tsx` — 2x2 offer cards with image + details
- [ ] Create `Testimonials.tsx` — author photo slider with quotes
- [ ] Create `TrendingDestinations.tsx` — 4-column grid of 8 items
- [ ] Create `Contact.tsx` — background image + contact form
- [ ] Create `Footer.tsx` — 4-column with about, blog, tags, contact
- [ ] Create `CopyrightBar.tsx` — copyright + nav + Component Dock link
- [ ] Write tests for each component (Vitest + RTL, 100% coverage)
- [ ] Verify: `npm run test:coverage` passes at 100%
- [ ] Verify: typecheck + lint pass
- [ ] Verify: build succeeds
- [ ] Commit as `feat: add trekcraft (travel agency) template`

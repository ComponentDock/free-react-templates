# RedIron — Implementation Todo & Design Notes

**Source:** ColorLib Sintec → https://preview.colorlib.com/theme/sintec/
**New name:** rediron
**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · packages/ui
**Deploy:** https://rediron.free.componentdock.com

## Implementation order

### Phase 1 — Scaffold
- [ ] Copy simplest existing app as boilerplate
- [ ] Rename package to `@free-react-templates/rediron`
- [ ] Create `public/CNAME` with `rediron.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Update `index.html` with Heebo + Roboto Google Fonts links
- [ ] Set up `src/index.css` with `@theme` tokens (--color-primary, --color-accent, etc.)

### Phase 2 — Components (in section order)
- [ ] **TopBar** — flex row, phone + address left, social icons right, `#f6f6f6` bg
- [ ] **Navbar** — transparent→white on scroll, logo left, nav center, cart+search right, mobile hamburger
- [ ] **Hero** — full-width parallax bg image, dark overlay, centered subtitle+headline+CTA button
- [ ] **About** — 2-col (image left hidden on mobile, text right), `#f6f6f6` bg, heading + CTA
- [ ] **Services** — centered heading + 4-col card grid (icon, title, desc)
- [ ] **Stats** — 2-col (image left, text right), 3 stat counters in accent color
- [ ] **Portfolio** — filter tabs, 2-col masonry grid, hover overlay with white bg
- [ ] **Testimonials** — carousel, cards with circular avatar + quote + name/designation
- [ ] **Blog** — 3-col card grid, image + meta (date, category) + title
- [ ] **Footer** — dark `#16191a` bg, 3-col (links, hours, newsletter), Component Dock credit

### Phase 3 — Integration
- [ ] Compose all sections in `App.tsx` in correct DOM order
- [ ] Add placeholder images via `picsum.photos/seed/rediron-<n>/<w>/<h>`
- [ ] Responsive breakpoints: mobile single-col, tablet 2-col, desktop full grid
- [ ] Navbar scroll behavior (intersection or scroll listener for sticky class)
- [ ] Portfolio filter functionality (useState for active filter)
- [ ] Testimonial carousel (simple CSS/JS carousel or lightweight lib)

### Phase 4 — Tests (TDD)
- [ ] TopBar renders phone, address, social icons
- [ ] Navbar renders all nav links, cart badge, search icon, sticky behavior
- [ ] Hero renders subtitle, headline, CTA button
- [ ] About renders heading, description, CTA
- [ ] Services renders 4 cards with icon, title, description
- [ ] Stats renders 3 counters with correct numbers
- [ ] Portfolio renders filter tabs, 4 project cards, hover overlay
- [ ] Testimonials renders avatar, name, designation, quote
- [ ] Blog renders 3 cards with image, date, category, title
- [ ] Footer renders links, hours, newsletter, Component Dock link
- [ ] 100% coverage (lines, functions, branches, statements)

### Phase 5 — Verification
- [ ] `npm run verify:app rediron` passes (typecheck + lint + tests + build)
- [ ] Visual comparison with screenshot — section order matches
- [ ] No ColorLib references in `apps/rediron/`
- [ ] Footer links to `https://www.componentdock.com/`

## Design notes

### Color palette
- Primary brand: `#e22104` (strong red-orange) — buttons, active states, accents
- Accent: `#ec473a` (softer red) — stat counter numbers
- Text dark: `#202e31` — headings, nav
- Text muted: `#888888` — body, meta
- Background light: `#f6f6f6` — top bar, about section
- Background dark: `#16191a` — footer

### Typography
- Headings: Heebo (hero h3 at 60px/500, area headings at 30px/700)
- Body: Roboto (14px normal, nav links, buttons, meta text)

### Button style
- `.main_btn`: `#e22104` bg, white text, Roboto font, `padding: 0 51px`, `border-radius: 0`
- Hover: white bg, `#e22104` text, 1px white border
- Footer subscribe button: same red, `border-radius: 0`, `padding: 0 20px`, `line-height: 38px`

### Section heading pattern
- Centered `h3` with `#202e31` color, 30px
- Small red underline decoration via `::after` pseudo-element (20px wide, positioned absolutely below)
- Subtitle paragraph: 14px, `#888888`

### Layout patterns
- Top bar: flex between (left contact info, right social)
- About: 2-col flex (image hidden on `<lg`, text takes full width on mobile)
- Services: 4-col grid (col-md-6 col-xl-3)
- Stats: 2-col (image col-md-5, content col-md-7), stats in flex row (33.33% each)
- Portfolio: 2-col masonry (col-lg-6), overlay card hover transition
- Blog: 3-col grid (col-lg-4)
- Footer: 3-col (col-lg-4 each)

### Key interactions
- Navbar: transparent → white bg on scroll (`.navbar_fixed` class)
- Portfolio: filter tabs filter by data attributes, CSS transitions
- Testimonials: owl-carousel style carousel (use simple CSS or JS)
- Hero: parallax effect on background image (use CSS `background-attachment: fixed` or similar)

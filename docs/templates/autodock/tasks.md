# AutoDock — Implementation Tasks

Recreation of ColorLib Cardoor. Preview: https://preview.colorlib.com/theme/cardoor/

## Phase 1: Scaffold

- [ ] Copy simplest existing app (e.g. abjure) to `apps/autodock`
- [ ] Rename package to `@free-react-templates/autodock`
- [ ] Update `public/CNAME` to `autodock.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://autodock.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Set up `src/index.css` with Tailwind v4 + theme tokens (brand: #ffd000, dark: #1e2228)

## Phase 2: Components (in order)

- [ ] **Header.tsx** — top bar (address, phone, hours, social icons) + nav bar (logo, menu links, sticky scroll behavior)
- [ ] **HeroSlider.tsx** — dark overlay, booking form (left: location select, date inputs, car type select, Book Now button), headline (right)
- [ ] **AboutSection.tsx** — section title with golden accent, text + video embed, CTA buttons
- [ ] **PartnerStrip.tsx** — horizontal row of partner logo placeholders
- [ ] **ServicesGrid.tsx** — 3x2 grid of icon + title + description cards (6 services)
- [ ] **FunFactCounters.tsx** — dark overlay, 3 counter items with icons
- [ ] **ChooseCar.tsx** — tabbed interface (Popular Cars / Newest Cars / Office Map) with car cards
- [ ] **PricingSection.tsx** — dark overlay, 3 pricing cards with feature lists
- [ ] **Testimonials.tsx** — carousel with quote, client name, client photo
- [ ] **MobileAppPromo.tsx** — dark bg, headline, subtitle, Android/Apple store buttons
- [ ] **ArticlesSection.tsx** — horizontal blog cards with thumbnail, title, meta, date
- [ ] **Footer.tsx** — 3-column footer (About+newsletter, Recent Posts, Contact), copyright bar with Component Dock link

## Phase 3: Integration

- [ ] **App.tsx** — compose all sections in correct order
- [ ] Ensure footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (comments included)

## Phase 4: Tests (TDD)

- [ ] Header.test.tsx — renders top bar info, nav links, sticky behavior
- [ ] HeroSlider.test.tsx — renders form fields, headline, book button
- [ ] AboutSection.test.tsx — renders title, text, video, buttons
- [ ] PartnerStrip.test.tsx — renders partner logos
- [ ] ServicesGrid.test.tsx — renders 6 service cards
- [ ] FunFactCounters.test.tsx — renders 3 counters
- [ ] ChooseCar.test.tsx — renders tabs, switches content
- [ ] PricingSection.test.tsx — renders 3 pricing cards
- [ ] Testimonials.test.tsx — renders testimonial carousel
- [ ] MobileAppPromo.test.tsx — renders headline, store buttons
- [ ] ArticlesSection.test.tsx — renders article cards
- [ ] Footer.test.tsx — renders 3 columns, newsletter, Component Dock link
- [ ] App.test.tsx — renders all sections in order
- [ ] Achieve 100% line/function/branch/statement coverage

## Phase 5: Verification

- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% test coverage
- [ ] Build succeeds
- [ ] Run `scripts/verify-app.sh autodock`

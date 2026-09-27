# Dwelva — Implementation Tasks

Recreation of ColorLib **Real Estate 2** (slug: `real-estate-2`).

## Pre-implementation checklist

- [x] Spec written: `openspec/specs/template-dwelva/spec.md`
- [x] Design tokens captured (screenshot + ColorLib page analysis)
- [x] Section structure documented (11 sections)
- [ ] Preview reached or fallback documented

## Implementation order

### Phase 1: Scaffold
1. Copy simplest existing app (e.g. `apps/propwise` or similar real estate app) as base
2. Rename package to `@free-react-templates/dwelva`
3. Update `public/CNAME` → `dwelva.free.componentdock.com`
4. Update `package.json` homepage → `https://dwelva.free.componentdock.com`
5. Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design tokens in index.css
1. Set `@theme` block with brand tokens:
   - `--color-brand`: `#FD8E5E` (warm orange)
   - `--color-brand-light`: `#FDAE5C`
   - `--color-heading`: `#001D38` (dark navy)
   - `--color-body`: `#4D4D4D`
   - `--color-dark-overlay`: `rgba(0, 29, 56, 0.7)`
2. Import Poppins via Google Fonts in `index.html`

### Phase 3: Components (section by section)
1. **TopBar** — thin bar, desktop only, welcome text + email + phone + social icons
2. **Navbar** — sticky, logo left, nav links center (Home, Pages, Property, Blog, Contact), search icon + "Add Property" button right. Mobile hamburger toggle.
3. **Hero** — full-width bg image, dark overlay, "Find your best Property" heading, search form (Location, Property Type, Price range, Bed Room, Bath Room, search button)
4. **PopularProperties** — 3×2 grid, 6 cards (image, For Sale/Rent badge, title, location, price, sqft/bed/bath), "More Properties" button
5. **HomeDetails** — carousel of property detail cards (image left, info right with badge, title, stats, description, price, "View Details" button)
6. **AccordionFaq** — split layout, 3 accordion items left, image right
7. **CounterArea** — 3 animated counters (200+ Properties, 300 Clients, 15 Awards) on gradient bg
8. **Testimonials** — dark overlay section, testimonial carousel
9. **TeamArea** — team member cards (photo, name, role)
10. **ContactCta** — full-width gradient bar, "Add your property for sale" heading, phone + "Add Property" button
11. **Footer** — 4 columns (contact+social, Services, Useful Links, Subscribe), Component Dock link

### Phase 4: App composition
1. `App.tsx` composes all sections in order
2. Verify no ColorLib references in any app file

### Phase 5: Tests (TDD)
- One `*.test.tsx` per component
- Test all interactive elements (hamburger toggle, accordion, carousel nav)
- 100% coverage enforcement

### Phase 6: Verification
1. `npm run verify:app dwelva` (typecheck + lint + tests + build)
2. Self-review against `docs/self-review.md`
3. Update TEMPLATES.md (do NOT mark — leave for implementer)
4. Commit as `docs: prep Dwelva (ColorLib Real Estate 2) spec + research`

## Design notes

### Fidelity priorities
- Dark navy (#001D38) is the dominant color — hero overlay, testimonials, footer
- Warm orange (#FD8E5E → #FDAE5C gradient) is the accent — buttons, badges
- Poppins font throughout
- Search form is a key interactive element on the hero
- Property cards use a consistent layout: image top, content below with badge
- Accordion FAQ is a distinctive split-layout section
- Counter area uses animated numbers on scroll

### Differences from source
- Replace ColorLib branding with "Dwelva" / "Component Dock"
- Use `picsum.photos` for placeholder images
- Use `lucide-react` for icons (social, nav, property stats)
- Carousel implemented as CSS/JS slider (no owl-carousel dependency)

# Pitstop — Tasks

## Spec

- [x] Write spec (openspec/specs/template-pitstop/spec.md)
- [x] Capture design tokens from ColorLib Autorepair preview

## Scaffold

- [ ] Copy driven app scaffold to apps/pitstop
- [ ] Rename package to @free-react-templates/pitstop
- [ ] Set homepage to https://pitstop.free.componentdock.com
- [ ] Create public/CNAME

## Components (TDD)

- [ ] TopBar (dark, contact info, social icons)
- [ ] Navbar (dark, logo, nav links, search, sticky)
- [ ] Hero (full-width image, dark overlay, heading, CTA)
- [ ] CtaBanner (split blue/orange)
- [ ] Services (6 cards, 3-col grid, blue icons)
- [ ] AboutStats (counters, "45+ years", light bg)
- [ ] Consultation (split: image left, dark form right)
- [ ] Testimonials (carousel, light bg, avatars)
- [ ] Blog (3 post cards)
- [ ] Pricing (3 tiers, one highlighted)
- [ ] ProjectsGallery (image grid)
- [ ] Footer (dark, 4-column, Component Dock link)

## Verification

- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% coverage
- [ ] Build succeeds
- [ ] spec:validate passes

## Ship

- [ ] PR created and merged
- [ ] Bookkeeping (TEMPLATES.md [x], homepage, readme:status)

---

## Design notes (section-by-section fidelity)

**Section order** (from live preview HTML):

1. TopBar → dark strip, brand "Pitstop.", address, phone, social icons
2. Navbar → dark bg, logo, Home/About/Services/Project/Blog/Contact, search
3. Hero → owl-carousel slider, mechanic photo, dark overlay, heading, orange CTA
4. CtaBanner → split: blue left "Are you ready? Let's repair it now!", orange right "Book an Appointment"
5. Services → "Our car services", 3-col grid of 6 cards with blue circle icons
6. AboutStats → "We help more than 45 years", bg-light, 4 counters
7. Consultation → "Free Consultation", split: image left / dark form right
8. Testimonials → "Happy Clients & Feedbacks", bg-light, owl carousel
9. Blog → "Latest news from our blog", 3 cards with image/date/title
10. Pricing → "Pricing", 3 tier cards
11. ProjectsGallery → "Done Projects", image grid
12. Footer → dark, 4-col: brand+social, services list, contact info, newsletter

**Fidelity notes**:

- Original uses Bootstrap 4 grid + owl-carousel + magnific-popup → replace with
  Tailwind grid + CSS animations + no jQuery dependencies
- Font Awesome icons → lucide-react equivalents
- Owl-carousel testimonials → CSS-based carousel or simple slide component
- Hero image slider → single hero with background image (simplify; carousel optional)
- Form inputs use Bootstrap `.form-control` styling → replicate with Tailwind form classes
- Original has animated counters (ftco-animate) → use Intersection Observer for count-up
- Pricing section uses ftco-pricing classes → custom Tailwind cards
- Footer newsletter uses `.subscribe-form` → Tailwind input + button

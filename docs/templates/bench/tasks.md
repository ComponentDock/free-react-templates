# Bench — Implementation Tasks & Design Notes

ColorLib source: "Judicial" → https://colorlib.com/wp/template/judicial/
Preview: https://preview.colorlib.com/theme/judicial/
New name: `bench` (apps/bench, `@free-react-templates/bench`)

## Section order (from live preview DOM)

1. Navbar — transparent, absolute over hero, "BENCH." logo + 5 nav links
2. Hero — full-width bg image, dark overlay, H1 + subtitle + gold CTA
3. About / Introduction — 3-col: image | drop-cap text | body text
4. Featured Practice Area — dark bg, title col + 3 image-overlay cards
5. Areas of Expertise — centered heading, 3×2 icon+text grid
6. Why Clients Choose Us — parallax bg, heading+CTA left, 2×2 stats right
7. Quality Service + Contact Form — heading with gold accent, call-now box, form
8. Testimonials + FAQ — carousel left, accordion right
9. Social Bar — gold full-width, 6 equal social icon columns
10. Footer — dark, 3-col: about+subscribe | nav+social | links+copyright

## Design tokens for Tailwind @theme

```
--color-brand-gold: #cea15a;      /* primary buttons, accents, social bar */
--color-brand-charcoal: #25262a;  /* dark sections (practice area, footer) */
--color-brand-orange: #fd7e14;    /* drop-cap letter accent */
--color-brand-gray: #737373;      /* footer body text */
--color-brand-border: #edf0f5;    /* dropdown borders */
```

Fonts via Google Fonts `<link>`:
- Oswald (400, 700) → headings (H1, H2, H3, H5)
- Nunito Sans (200–900) → body (line-height 1.7, 1.1rem)

Button/form style: border-radius: 0 (sharp corners everywhere).
Section padding: 3em mobile / 7em desktop.

## Implementation tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/brief`)
- [ ] Rename package to `@free-react-templates/bench`
- [ ] Set `public/CNAME` → `bench.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at root for lockfile registration
- [ ] Add Google Fonts links to `index.html` (Oswald + Nunito Sans)

### Phase 2: Core components
- [ ] `Navbar.tsx` — transparent absolute, logo + 5 links, mobile hamburger
- [ ] `Hero.tsx` — full-width bg image, dark overlay, H1 + subtitle + CTA
- [ ] `About.tsx` — 3-col: image, drop-cap text, body text
- [ ] `FeaturedPractice.tsx` — dark bg, title col + 3 image cards
- [ ] `Expertise.tsx` — centered heading, 3×2 icon grid (use lucide-react)
- [ ] `WhyChooseUs.tsx` — parallax bg, heading+CTA + 2×2 stat cards
- [ ] `QualityService.tsx` — heading with gold accent + contact form
- [ ] `TestimonialsFaq.tsx` — carousel + accordion (use packages/ui if available)
- [ ] `SocialBar.tsx` — gold bg, 6 equal social icon columns
- [ ] `Footer.tsx` — dark 3-col, subscribe form, Component Dock link

### Phase 3: Styling
- [ ] `index.css` — @theme tokens (gold, charcoal, orange, gray, border)
- [ ] Apply Tailwind classes matching original CSS
- [ ] Ensure no border-radius on buttons/forms
- [ ] Implement AOS-like scroll animations (CSS or lightweight lib)
- [ ] Responsive: mobile hamburger, single-column collapse

### Phase 4: Tests (TDD)
- [ ] Test each component renders correct headings and content
- [ ] Test mobile hamburger toggle
- [ ] Test FAQ accordion expand/collapse
- [ ] Test form fields and submit button present
- [ ] Test footer has Component Dock link
- [ ] Verify 100% coverage

### Phase 5: Verify + Deploy
- [ ] Run `scripts/verify-app.sh bench`
- [ ] Confirm no ColorLib references in app code
- [ ] Commit: `docs: prep Bench (ColorLib Judicial) spec + research`
- [ ] Push to main

# Pandemic — Design Notes

Recreation of ColorLib Covid (https://colorlib.com/wp/template/covid/).
Preview: https://preview.colorlib.com/theme/covid/

## Section structure (top → bottom)

1. **Nav** — Sticky top nav with logo, links (Home, Prevention, Stay at home, Social distancing, Wear facemask, Wash hands, Symptoms, About, Blog, Contact), hamburger for mobile
2. **Hero** — Purple-tinted bg, curved bottom-right (50% radius), h1 "Stay Safe. Stay Home." + subtitle + "How to prevent" pill button + illustration
3. **Statistics** — Dark bg, 3 stat cards: Cases (14,112,077), Deaths (595,685), Recovered (8,397,665)
4. **What is Coronavirus?** — Light bg, heading + description + 4 tip cards (Protection, Prevention, Treatments, Symptoms)
5. **How to Prevent** — White bg, heading + 4 prevention items with Flaticon icons (Stay at home, Wear facemask, Social distancing, Wash hands)
6. **How To Protect Yourself** — Light purple bg, 2-col: "You should do" (5 items) + "You should avoid" (5 items)
7. **Symptoms** — White bg, heading + 4 symptom cards (High Fever, Cough, Sore Throat, Headache)
8. **News & Articles** — Light purple bg, 3 blog cards with images
9. **About** — Description paragraph
10. **Footer** — Dark bg, 4-col: About, Quick Links, Helpful Links, Resources

## Design fidelity notes

- Brand color is `#6f42c1` (purple). Use as primary in `@theme`.
- Hero has a distinctive curved bottom-right corner (`border-bottom-right-radius: 50%`).
- Buttons are pill-shaped (30px border-radius).
- Section headings: weight 900, purple (`#6f42c1`), 30px.
- Light purple sections use `rgba(111,66,193,0.05)` background.
- Icons: use Flaticon COVID icon set (or lucide-react equivalents for sanitizer, virus, mask, hand-washing, etc.).
- Font: Mulish (Google Fonts) — used for all text.
- Statistics section has dark background with white text.
- Do/avoid lists use check/cross visual indicators.
- Blog cards: image + title + excerpt + "Read more" link.
- Responsive: hamburger menu on mobile, single-column stacking.

## Component outline

```
src/
  App.tsx              — compose all sections
  components/
    Navbar.tsx         — sticky nav with hamburger
    Hero.tsx           — purple bg, curved shape, heading + CTA
    Statistics.tsx     — 3 stat cards on dark bg
    WhatIsCovid.tsx    — info + 4 tip cards
    Prevention.tsx     — 4 prevention items with icons
    ProtectYourself.tsx — do/avoid 2-column lists
    Symptoms.tsx       — 4 symptom cards
    News.tsx           — 3 blog post cards
    About.tsx          — description paragraph
    Footer.tsx         — 4-col footer + Component Dock
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template, rename package
- [ ] Set up index.css with Tailwind @theme tokens (brand #6f42c1, fonts)
- [ ] Add Google Fonts link (Mulish) to index.html
- [ ] Implement Navbar with sticky nav and mobile hamburger
- [ ] Implement Hero with curved bottom-right shape, heading, CTA
- [ ] Implement Statistics section (3 stat cards on dark bg)
- [ ] Implement WhatIsCovid section (info + 4 tip cards)
- [ ] Implement Prevention section (4 items with icons)
- [ ] Implement ProtectYourself section (do/avoid 2-col lists)
- [ ] Implement Symptoms section (4 symptom cards)
- [ ] Implement News section (3 blog cards)
- [ ] Implement About section
- [ ] Implement Footer (4-column, Component Dock link)
- [ ] Write tests for all components (Vitest + RTL, 100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build

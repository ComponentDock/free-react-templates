# TopModel — Implementation Tasks
<!-- prep-status: shipped-as=vizier -->
> **SHIPPED-UNDER** — the ColorLib `mona` design this prep describes shipped
> as `apps/vizier` (<https://vizier.free.componentdock.com>).
> The unchecked items below are prep history, not outstanding work.

- [ ] Scaffold app from template (copy simplest existing app, rename to topmodel)
- [x] Set up `apps/topmodel/` package.json, vite.config.ts, index.html with Google Fonts — superseded: shipped as `apps/vizier`
- [ ] Add brand token #ed489d to `src/index.css` @theme
- [ ] Implement Navbar (transparent on hero, white on scroll)
- [ ] Implement HeroCarousel (auto-advance, model data, social links, arrows)
- [ ] Implement AboutUs (heading + 4 feature items)
- [ ] Implement ModelPortfolio (tabs + card carousel)
- [ ] Implement ModelCard (circular thumbnail, name, role)
- [ ] Implement Testimonials (quote carousel, ratings, avatars)
- [ ] Implement CtaSection (heading + pink CTA button)
- [ ] Implement BlogSection (card grid)
- [ ] Implement Footer (4 columns, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for every component (100% coverage target)
- [ ] Run `npm run test:coverage` — verify 100%
- [ ] Run `scripts/verify-app.sh topmodel` — full per-app gate
- [ ] Ensure no ColorLib references in app code
- [ ] Ensure footer links to https://www.componentdock.com/

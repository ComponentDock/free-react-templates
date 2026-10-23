# WashBox — Implementation Todo

Source: ColorLib Carwash → washbox
Spec: openspec/specs/template-washbox/spec.md

## Tasks

- [ ] Scaffold app folder (`apps/washbox/`) — copy minimal existing app, rename package
- [ ] Set up `vite.config.ts` with `injectUiSource()` pattern
- [ ] Add Google Fonts (Poppins + Work Sans) to `index.html`
- [ ] Configure Tailwind theme tokens in `index.css` (brand color, fonts)
- [ ] Implement `Navbar.tsx` — sticky, mobile menu, phone CTA
- [ ] Implement `Hero.tsx` — full-width bg, animated text, CTA button
- [ ] Implement `Equipment.tsx` — offset two-column layout
- [ ] Implement `Pricing.tsx` — 3 cards with outlined buttons + hover
- [ ] Implement `Testimonials.tsx` — slider with dot navigation
- [ ] Implement `Services.tsx` — 4-column icon grid
- [ ] Implement `VideoCta.tsx` — dark bg, play button, heading
- [ ] Implement `Footer.tsx` — 4-column, Component Dock link, hours, social
- [ ] Implement `ScrollToTop.tsx` — fixed button
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests (Vitest + RTL) for every component — 100% coverage
- [ ] Verify: `npm run verify:app washbox`
- [ ] Set up `public/CNAME` with `washbox.free.componentdock.com`
- [ ] Add `"homepage"` to `package.json`

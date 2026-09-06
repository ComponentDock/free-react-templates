# Grove — Implementation Tasks & Design Notes

## Template overview

- **New name:** grove
- **ColorLib source:** Avo
- **Preview URL:** https://preview.colorlib.com/theme/avo/
- **Category:** Agency / Portfolio
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as `apps/grove`
- [ ] Rename package to `@free-react-templates/grove`
- [ ] Update `public/CNAME` to `grove.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://grove.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Verify `grep -c "free-react-templates/grove" package-lock.json` returns 1

### Phase 2: Components
- [ ] `src/App.tsx` — composes Navbar + Hero + About + Portfolio + Testimonials + ContactCTA + Footer
- [ ] `src/components/Navbar.tsx` — dark navbar with logo and 5 links
- [ ] `src/components/Hero.tsx` — full-height hero with background image, overlay, counter, headline, CTA
- [ ] `src/components/About.tsx` — "About us" heading + 6 service items
- [ ] `src/components/Portfolio.tsx` — "Our Works" heading + gallery + "View all projects"
- [ ] `src/components/Testimonials.tsx` — "Clients Says About Us?" heading + testimonial cards
- [ ] `src/components/ContactCTA.tsx` — "Fill in the brief..." heading + "Get started" button
- [ ] `src/components/Footer.tsx` — Component Dock link
- [ ] `src/index.css` — Tailwind entry + theme tokens (brand: #d1002c, primary: #007bff)

### Phase 3: Tests (TDD — RED first)
- [ ] `Navbar.test.tsx` — render, logo, links, responsive toggle
- [ ] `Hero.test.tsx` — render, slider, counter, headline, CTA buttons
- [ ] `About.test.tsx` — render, heading, 6 service items
- [ ] `Portfolio.test.tsx` — render, heading, gallery items, button
- [ ] `Testimonials.test.tsx` — render, heading, client cards
- [ ] `ContactCTA.test.tsx` — render, heading, button
- [ ] `Footer.test.tsx` — renders Component Dock link

### Phase 4: Verification
- [ ] `scripts/verify-app.sh grove` passes (typecheck + lint + tests + build)
- [ ] 100% coverage maintained

## Design notes (fidelity reference)

### Structure order (from original)
1. Navbar (dark, fixed/sticky)
2. Hero section (owl-carousel style slider, 850px height, 2 slides)
   - Slide 1: bg_1.jpg, counter "400", headline, "Start Project" button
   - Slide 2: bg_2.jpg, counter "21", headline, "Explore Projects" button
   - Video play button overlay
3. About us section (white bg, centered heading, 6 service items in 2x3 grid)
4. Portfolio/Works section (bg-light, "Our Works" heading, image gallery)
5. Testimonials section (white bg, "Clients Says About Us?", client cards)
6. Contact/CTA section (bg-light, heading, "Get started" button)
7. Footer

### Section-by-section fidelity
- **Navbar:** Dark background (#343a40), brand "grove" with styled "v", 5 nav links right-aligned, hamburger on mobile
- **Hero:** Full-width bg images with dark overlay, counter stats with large numbers (40px, weight 800), white text, CTA buttons (Bootstrap blue #007bff)
- **About:** White background, centered "About us" heading (28px), 6 service items with icons and titles
- **Portfolio:** Light background (#f8f9fa), "Our Works" heading, image grid, "View all projects" button
- **Testimonials:** White background, heading, client photo + name + quote cards
- **Contact:** Light background, large heading text, "Get started" button
- **Footer:** Simple with Component Dock link

### Differences from original
- React + Tailwind instead of Bootstrap 4 + jQuery + Owl Carousel
- No Owl Carousel — use CSS transitions or simple React state for slider
- No Magnific Popup — video play can be a placeholder
- Placeholder images via picsum.photos
- Lato font replaced with Nunito Sans via Google Fonts
- Counter animation can use simple React state with useEffect

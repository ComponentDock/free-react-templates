# Finova — Prep Notes & Design Reference

Source: ColorLib "Occupy" (https://colorlib.com/wp/template/occupy/)
Preview: https://preview.colorlib.com/theme/occupy/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/occupy-free-template.jpg

## Structure Order (top to bottom)

1. Navbar — fixed top, logo left, 5 nav links center, social + search right
2. Hero Banner — Swiper slider (3 slides), heading + 2 CTAs, full-width bg image
3. Mission Area — 50/50 split: image left, Owl carousel text right
4. Success Area — 2 alternating rows (text-image, image-text)
5. Project Area — 3x2 grid of cards with hover overlays
6. Team Area — Owl carousel, 4 members, hover social icons
7. Project Estimate CTA — centered, bg color section, heading + button
8. Home Blog Area — 4-col: alternating image + text pairs (2 posts)
9. Footer — 4-col (About, Nav, Newsletter, InstaFeed), copyright bar

## Design Token Notes

- Primary brand: #a7cb00 (lime green) — used on buttons, overlays, accents
- Fonts: Raleway (body), Oswald (headings) — load via Google Fonts
- Buttons: sharp corners (no border-radius), 0 40px padding, #a7cb00 bg
- White button variant: #f9f9ff bg, dark text — used in CTA sections
- Section alternation: white (#fff) → lavender (#f9f9ff) → gray (#eeeeee)
- Overlay on project cards: rgba(167,203,0,0.8) green, rgba(34,34,34,0.8) dark

## Implementation TODO

- [ ] Scaffold app: copy simplest existing app, rename to finova
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Set up public/CNAME (finova.free.componentdock.com)
- [ ] Set up package.json (name: @free-react-templates/finova, homepage)
- [ ] Load Google Fonts (Raleway + Oswald) in index.html
- [ ] Define @theme tokens in index.css for #a7cb00 and Oswald
- [ ] Implement Navbar component
- [ ] Implement HeroBanner component (Swiper or custom slider)
- [ ] Implement MissionArea component (split layout + carousel)
- [ ] Implement SuccessArea component (alternating rows)
- [ ] Implement ProjectGrid component (3x2 card grid with hover)
- [ ] Implement TeamCarousel component (member cards + hover)
- [ ] Implement ProjectCTA component (centered section)
- [ ] Implement BlogArea component (4-col alternating layout)
- [ ] Implement Footer component (4-col + copyright bar)
- [ ] Compose App.tsx from all sections in correct order
- [ ] Write tests for each component (TDD: red-green-refactor)
- [ ] Verify 100% coverage, lint, typecheck, build
- [ ] Run scripts/verify-app.sh finova

## Fidelity Notes

- The original uses Swiper for the hero slider — consider Swiper React or a lighter alternative
- Owl carousel in Mission and Team — replace with a React carousel (e.g. Embla or Swiper)
- Project cards use a CSS hover overlay — replicate with group-hover in Tailwind
- Blog area is an unusual 4-col layout (image-col, text-col, image-col, text-col)
- Newsletter input has a submit button with a location icon (lnr-location) — use mail icon instead
- InstaFeed is just 8 placeholder thumbnails — use picsum.photos
- Social icons: Facebook, Twitter, Dribbble, Behance — use lucide-react equivalents where available

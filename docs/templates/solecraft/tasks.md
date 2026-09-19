# Solecraft — Task Checklist

## Prep (done)
- [x] Replication research: preview DOM analyzed, CSS tokens extracted
- [x] Spec written: openspec/specs/template-solecraft/spec.md
- [x] Design notes: docs/templates/solecraft/notes.md

## Implementation (for implementers)
- [ ] Scaffold apps/solecraft from template (copy simplest existing app, rename package)
- [ ] Update public/CNAME → solecraft.free.componentdock.com
- [ ] Update package.json homepage → https://solecraft.free.componentdock.com
- [ ] Register workspace: `npm install` at root + verify package-lock.json
- [ ] index.html: add Google Fonts links (Inter + Outfit)
- [ ] src/index.css: define @theme tokens (primary orange #f97316/#ea580c, font-display Outfit)
- [ ] src/App.tsx: compose all section components
- [ ] AnnouncementBar.tsx: gradient bar with promo text
- [ ] Header.tsx: sticky header with logo, nav, actions, dark mode toggle
- [ ] MobileMenu.tsx: hamburger dropdown
- [ ] SearchModal.tsx: overlay with input + popular tags
- [ ] Hero.tsx: full-height dark section with gradient mesh + CTA
- [ ] FeaturedProducts.tsx: product card grid (4 cards)
- [ ] ProductCard.tsx: image, hover overlay, rating, price, colors
- [ ] Testimonials.tsx: 3 cards + trust stats
- [ ] CTASection.tsx: orange CTA with email form + app badges
- [ ] Footer.tsx: newsletter bar + 4-col grid + bottom bar with payment icons
- [ ] Dark mode: toggle + localStorage persistence
- [ ] Tests: Vitest + RTL, 100% coverage
- [ ] Verification: scripts/verify-app.sh solecraft
- [ ] Update TEMPLATES.md: mark Solestyle as [~] then [x]
- [ ] PR + squash merge + Surge deploy

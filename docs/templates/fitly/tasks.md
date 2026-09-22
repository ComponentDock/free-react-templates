# Fitly — Implementation Tasks

## Prep Status: DONE

- [x] Preview DOM fetched and analyzed
- [x] CSS tokens extracted
- [x] Screenshot reviewed (via DOM structure)
- [x] Spec written: openspec/specs/template-fitly/spec.md
- [x] Design notes: docs/templates/fitly/design-notes.md
- [x] Commit + push to main

## Implementation TODO (for implementer stream)

### Setup
- [ ] Create apps/fitly from template starter
- [ ] Register workspace in package.json + npm install
- [ ] Set up CNAME (fitly.free.componentdock.com)
- [ ] Set up index.html with Poppins Google Font link

### Components (in section order)
- [ ] Navbar.tsx — sticky header, brand accent bg, logo, nav, CTA
- [ ] Hero.tsx — parallax bg image, text overlay, primary-btn
- [ ] About.tsx — 2-col layout, video play button, text + CTA
- [ ] Services.tsx — dark bg, image + 4 service cards in 2×2 grid
- [ ] Classes.tsx — carousel of class cards with trainer info
- [ ] Trainers.tsx — 3 trainer cards with social icons
- [ ] Testimonials.tsx — carousel with quotes and avatars
- [ ] Banner.tsx — parallax CTA section with person image
- [ ] Membership.tsx — 3 pricing tier cards with gradient accents
- [ ] Register.tsx — 4-field form in 2×2 grid + image
- [ ] Blog.tsx — 3 blog post cards
- [ ] FooterBanners.tsx — 2-column promo banners
- [ ] Footer.tsx — contact info, subscribe form, social links, Component Dock link

### Testing
- [ ] All components have 100% test coverage
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Verify with scripts/verify-app.sh fitly

### Finalization
- [ ] Mark TEMPLATES.md [~] then [x]
- [ ] Commit + PR + merge
- [ ] Surge deploy verified

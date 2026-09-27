# PropVault — Implementation Todo

## Setup
- [ ] Copy simplest existing app as scaffold (e.g. apps/aurora → apps/propvault)
- [ ] Rename package to @free-react-templates/propvault
- [ ] Run npm install at repo root to register workspace
- [ ] Set public/CNAME to propvault.free.componentdock.com
- [ ] Set homepage in package.json

## Components (TDD order)
- [ ] TopBar.tsx + test
- [ ] Navbar.tsx + test (sticky behavior, dropdown menus, mobile hamburger)
- [ ] Hero.tsx + test (full-screen bg image, overlay, headline)
- [ ] SearchForm.tsx + test (toggle, selects, range inputs, search button)
- [ ] PropertyCard.tsx + test (image, badge, title, price, bed/bath/area, amenities, meta)
- [ ] PropertyGrid.tsx + test (3-col grid, section heading)
- [ ] About.tsx + test (split layout, 3 text blocks + image)
- [ ] CityCard.tsx + test (bg image, overlay, hover fade-in)
- [ ] CityGrid.tsx + test (asymmetric grid layout)
- [ ] TestimonialCard.tsx + test (avatar, quote, name, title)
- [ ] Testimonials.tsx + test (embla carousel)
- [ ] BlogCard.tsx + test (thumb, title, excerpt, meta)
- [ ] BlogGrid.tsx + test (3-col layout, section heading)
- [ ] Footer.tsx + test (4-col layout, newsletter, instagram, social, copyright + Component Dock)
- [ ] App.tsx + test (compose all sections in order)
- [ ] index.css — Tailwind entry + @theme tokens (coral, lavender, charcoal)

## Theme Tokens (index.css)
- @theme brand-coral: #ea6c5d
- @theme brand-lavender: #f9f9ff
- @theme brand-charcoal: #222222

## Verification
- [ ] npm run test:coverage — 100% lines/functions/branches/statements
- [ ] scripts/verify-app.sh propvault passes
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: mobile stacks, hamburger menu works

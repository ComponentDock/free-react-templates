# SellCraft — Implementation Tasks & Design Notes

**Source:** ColorLib Selling (https://colorlib.com/wp/template/selling/)
**Preview:** https://preview.colorlib.com/theme/selling/
**New name:** sellcraft

## Task Outline

### 1. Scaffold app
- [ ] Copy simplest existing app as base (e.g. `apps/abjure` or similar minimal)
- [ ] Rename package to `@free-react-templates/sellcraft`
- [ ] Update `public/CNAME` → `sellcraft.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Run `npm install` at repo root for lockfile registration

### 2. Design tokens in index.css
- [ ] Add `@theme` block with brand color `--color-brand: #f16821`
- [ ] Add accent color `--color-accent: #f23a2e`
- [ ] Add font family: Mulish (Google Fonts rename of Muli)
- [ ] Load Google Font link in `index.html`

### 3. Section components (in order)
- [ ] `TopBar.tsx` — phone, email, social icons (lucide-react)
- [ ] `Navbar.tsx` — logo + nav links, sticky behavior
- [ ] `Hero.tsx` — full-width bg image, overlay, heading, subtitle, 2 outlined buttons
- [ ] `PopularProducts.tsx` — 6 product cards in 3-col grid
- [ ] `Newsletter.tsx` — heading + email form
- [ ] `FeaturedProducts.tsx` — 2 detailed product cards
- [ ] `AboutCompany.tsx` — heading + description + image
- [ ] `Team.tsx` — 3 circular photo cards
- [ ] `SpecialPromo.tsx` — full-width banner with overlay
- [ ] `Services.tsx` — 6 service items in 3-col grid
- [ ] `Testimonials.tsx` — carousel of testimonial cards
- [ ] `Blog.tsx` — 3 blog post cards
- [ ] `Contact.tsx` — form with name/email/subject/message
- [ ] `Footer.tsx` — 4 columns + Component Dock link

### 4. App.tsx composition
- [ ] Import and compose all sections in order
- [ ] Ensure responsive layout at all breakpoints

### 5. Tests (TDD)
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% coverage on lines/functions/branches/statements
- [ ] Test form validation in Contact
- [ ] Test carousel behavior in Testimonials
- [ ] Test sticky navbar behavior

### 6. Verification
- [ ] Run `scripts/verify-app.sh sellcraft`
- [ ] Visual check: compare with ColorLib screenshot
- [ ] Confirm no ColorLib references in app code
- [ ] Confirm Component Dock link in footer
- [ ] Build succeeds
- [ ] Commit + push

## Design Notes

### Section Order (from live DOM analysis)
1. TopBar (bg-light #f8f9fa)
2. Navbar (white, sticky)
3. Hero (full-width image + dark overlay rgba(0,0,0,0.4))
4. PopularProducts (white bg, 6 cards in 3-col grid)
5. Newsletter (bg-light #f4f5f9)
6. FeaturedProducts (white bg, 2 detailed cards)
7. AboutCompany (white bg, border-bottom)
8. Team (bg-light #f4f5f9, 3 circular photos)
9. SpecialPromo (full-width image + dark overlay rgba(0,0,0,0.6))
10. Services (white bg, 6 items in 3-col grid)
11. Testimonials (bg-light #f4f5f9, carousel)
12. Blog (white bg, 3 post cards)
13. Contact (white bg, form)
14. Footer (white bg, 4 columns)

### Fidelity Notes
- Hero: two outlined buttons (transparent bg, white border), not solid-filled
- Product cards: image on top, name below, price, two small buttons (Cart/View)
- Team: circular photos (border-radius 50%), name + role below
- Special promo: parallax-style background image with dark overlay
- Newsletter: simple inline form (input + button side by side)
- Footer: 4 equal columns, copyright bar at bottom
- Social icons: use lucide-react (Facebook, Twitter, Instagram, LinkedIn)
- All section headings use Muli/Mulish font, weights 700/900
- Product prices in brand color #f16821

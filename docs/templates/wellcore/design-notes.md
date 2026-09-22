# Wellcore — Design Notes & Task Outline

## Source

- **ColorLib template:** healthcoach
- **Preview URL:** https://preview.colorlib.com/theme/healthcoach/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/healthcoach-free-template.jpg

## Section Order (top to bottom)

1. **Navbar** — Sticky, transparent over hero → solid on scroll. 8 links: Home, About, Coach, Pricing, Services, Stories, Blog, Contact. Logo left, links right. Mobile hamburger menu.
2. **Hero Slider** — Full-viewport (100vh) Owl Carousel with 3 slides. Each slide: dark overlay (`rgba(0,0,0,0.6)`), centered text (h2 + h1 + CTA button). Background images via picsum placeholders. Auto-advance every ~5s.
3. **Services** — 3 cards in a row (Exercise Program, Nutrition Plans, Diet Program). Each: icon (flaticon) + h3 heading + short description. White background, light gray text.
4. **About** — Split layout: image left (50%), text right (50%). Heading "Hello! Health Care is a natural way of improving your health". Paragraph text + testimonial quote from "Cythia Hunter" + "Learn More" button (btn-primary).
5. **Services Grid** — 3 items (Healthcare Services, Free Consultation, Find A Health Expert). Each: icon + h3 + description. Light gray background.
6. **Testimonials** — Owl Carousel of client feedback. Heading "Happy Clients & Feedbacks". Client photo + quote + name. Light gray background.
7. **How It Works** — 4 steps (Follow the program, Work for result, Eat healthy food, Enjoy your life). Each: icon + h3 + description. White background.
8. **Success Stories** — Carousel of success testimonials. Heading "Successfull Stories".
9. **CTA Banner** — Full-width dark overlay section. Heading "We Provide Free Health Care Consultation". CTA button.
10. **Numbered How It Works** — 4 numbered steps with green circle badges (#a3cb4c). Same step headings as #7 but with numbered circles. White background.
11. **Pricing** — 4 tiered plans: Starter ($49), Standard ($79), Premium ($109), Platinum ($159). Each card: plan name, price, feature list, "Get Started" button. Light gray background.
12. **Blog** — 3 blog post cards. Each: image + date + title + excerpt + "Read more" link. White background.
13. **Newsletter** — Email subscription form. Heading "Subscribe for our weekly tips". Input + button. Dark overlay background.
14. **Footer** — 4 columns (Services, About, Resources, Social) + copyright. Dark background.

## Design Token Notes

- **Primary blue:** `#1089ff` — buttons, overlays, active states
- **Secondary green:** `#a3cb4c` / `#a7cd54` — "How It Works" numbered badges, secondary accents
- **Font:** Poppins (Google Fonts) — weights 300, 400, 500, 600, 700
- **Button style:** Bootstrap `.btn-primary` — `#1089ff` bg, white text, 4px radius, 10px 28px padding
- **Section backgrounds:** alternating white / `#e6e6e6` (light gray) / dark overlays
- **Text colors:** `#333333` (body), `#999999` (muted), `#ffffff` (on dark)
- **Hero overlay:** `rgba(0,0,0,0.6)` over background image
- **CTA overlay:** `#1089ff` with opacity or `rgba(16,137,255,0.9)`

## Task Outline

### Phase 1: Scaffold
- [ ] Create `apps/wellcore/` from simplest existing app
- [ ] Rename package to `@free-react-templates/wellcore`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `index.css` with Tailwind v4 + theme tokens (primary, secondary colors)
- [ ] Add Poppins font to `index.html`
- [ ] Create `public/CNAME` with `wellcore.free.componentdock.com`

### Phase 2: Components (in section order)
- [ ] `Navbar.tsx` — Sticky, transparent→solid, 8 nav links, mobile hamburger
- [ ] `Hero.tsx` — Full-viewport slider, 3 slides, dark overlay, CTA buttons
- [ ] `Services.tsx` — 3 service cards with icons
- [ ] `About.tsx` — Split layout, image + quote + CTA button
- [ ] `ServicesGrid.tsx` — 3 service items with icons
- [ ] `Testimonials.tsx` — Client feedback carousel
- [ ] `HowItWorks.tsx` — 4 process steps with icons
- [ ] `SuccessStories.tsx` — Success stories carousel
- [ ] `CtaBanner.tsx` — Full-width dark overlay with consultation offer
- [ ] `NumberedSteps.tsx` — 4 numbered steps with green circle badges
- [ ] `Pricing.tsx` — 4 pricing cards (Starter/Standard/Premium/Platinum)
- [ ] `Blog.tsx` — 3 blog post cards
- [ ] `Newsletter.tsx` — Email subscription form
- [ ] `Footer.tsx` — 4-column footer with ComponentDock link

### Phase 3: Assembly
- [ ] Compose all sections in `App.tsx` in correct order
- [ ] Add smooth scroll behavior for nav links
- [ ] Add responsive breakpoints (mobile/tablet/desktop)

### Phase 4: Tests
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Test navbar scroll behavior
- [ ] Test hero slider navigation
- [ ] Test newsletter form validation
- [ ] Test pricing card layout

### Phase 5: Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
- [ ] No ColorLib references in app code
- [ ] Footer links to ComponentDock

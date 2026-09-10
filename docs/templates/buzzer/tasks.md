# Buzzer (ColorLib Bravo) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-buzzer`.

## Design notes (replication findings)

- **Original:** ColorLib "Bravo" — business / consulting / corporate
  template (source: https://colorlib.com/wp/template/bravo/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/bravo/
  (HTTP 200; ~31 KB HTML + `assets/css/style.css` ~172 KB parsed for
  tokens). Title tag: "Bravo — Website by Colorlib". Bootstrap 4 +
  owl-carousel + slick carousel + fontawesome/themify icons, AOS +
  animated-headline animations.
- **Visual design (from screenshot `bravo-free-template.jpg`):** modern
  professional B2B business site — clean white base, deep navy (#140C40)
  headings, coral/salmon (#FA8F77) accents on underlines and borders,
  blue (#4760FF) primary CTA buttons with rounded pill shape; hero with
  portrait illustration and large bold headline "Entrepreneur. Investor.
  Marketing Extraordinaire."; service cards with slide-up hover overlays;
  testimonials over background image; team section with social icons;
  dark navy footer with newsletter email form.
- **Structure (1:1, section order):**
  1. Header `.header-area` (sticky) — logo left; nav links center: Home,
     About, Services, Blog (submenu: Blog, Blog Details, Elements),
     Contact; `.border-btn` phone right (+880 156 278 256, transparent
     bg, #FA8F77 border, radius 30px pill); mobile hamburger.
  2. Hero `.slider-area` / `.slider-active` — owl-carousel, 2 identical
     slides. Each: right-side hero illustration image (fade-in-right
     animation), left caption: h1 "Entrepreneur. Investor. Marketing
     Extraordinaire." (80px/500, #140C40, "Entrepreneur." in coral
     tittle-light span), subtext paragraph, `.btn` "Explore Our Services"
     (#4760FF bg, white, 30px radius pill). `.hero-shape` decorative image.
  3. About `.about-low-area.section-padding40` — split: left col-xl-6:
     `.section-tittle` ("About Us" eyebrow 20px/600 #140C40 + h2 "Build
     trust fast using the most engaging technology" with coral accent),
     paragraph, `.about-btn` "More About Us", experience row (10 Years /
     $40M+); right col-xl-5: two stacked `.about-right-cap` image cards
     with descriptions.
  4. Services `.popular-items.section-padding40` — `.section-tittle`
     ("How we can help?" + "We're helping employers get"); 3
     `.single-popular-items` in 3-col: `.popular-img` (image + `.img-cap`
     overlay sliding up on hover, #4760FF bg, "Read More" white),
     `.popular-caption` h3 title.
  5. Testimonials `.testimonial-area.section-bg2` (bg image section_bg01)
     — centered carousel dot-style: each `.single-testimonial` has
     `.testimonial-top-cap` (logo image + quote), `.testimonial-founder`
     (name bold + role span).
  6. Team `.team-area.section-padding40` — centered `.section-tittle`
     ("Our Team" / "Meet with our amazing team"); 3 `.single-team` in
     3-col: `.team-img` (hover scale transition), `.team-caption` (name
     h3, role span, `.team-social` twitter/facebook/pinterest icons).
  7. Services 2 `.popular-items.section-padding40` — 2 larger
     `.single-popular-items` in 2-col: same pattern as primary services.
  8. CTA `.contact-animal-owner.section-bg2` (bg image section_bg02) —
     centered: h3 "Get started with our awesome service today", subtext
     paragraph, `.btn` "Get Started Now" (#4760FF).
  9. Footer `.footer-area.footer-padding` (bg #140C40) — 4 columns:
     (1) logo + description + social icons (twitter, facebook, pinterest);
     (2) About links (5); (3) Services links (5); (4) Newsletter (h4 +
     description + email input + Send button). `.footer-bottom-area`
     copyright bar centered (#C2C5DB text).

## Implementation tasks

### Phase 1: Scaffold (5 min)

- [ ] Copy simplest existing app as `apps/buzzer/`
- [ ] Rename package to `@free-react-templates/buzzer`
- [ ] Set `"homepage": "https://buzzer.free.componentdock.com"` in
      package.json
- [ ] Create `public/CNAME` with `buzzer.free.componentdock.com`
- [ ] Update `index.html` title to "Buzzer — Business Consulting"
- [ ] Add Google Fonts `<link>` for Roboto (weights 300,400,500,600,700)
- [ ] Define theme tokens in `src/index.css` `@theme` block:
      `--color-primary: #4760FF;` `--color-accent: #FA8F77;`
      `--color-navy: #140C40;` `--color-surface: #f7f7f7;`
- [ ] Add `injectUiSource()` in `vite.config.ts`
- [ ] Run `npm install` at repo root

### Phase 2: Components — Navbar (10 min)

- [ ] Create `src/components/Navbar.tsx`
- [ ] Sticky positioning, logo left, nav links center, phone button right
- [ ] Phone button: transparent bg, #FA8F77 border, 30px radius pill
- [ ] Blog submenu (hover-triggered dropdown)
- [ ] Mobile hamburger toggle
- [ ] Write `Navbar.test.tsx`

### Phase 3: Components — Hero (10 min)

- [ ] Create `src/components/Hero.tsx`
- [ ] Two-slide carousel with auto-advance
- [ ] Each slide: illustration image right (picsum seed `buzzer-hero`),
      caption left: h1 "Entrepreneur. Investor. Marketing Extraordinaire."
      with coral accent on "Entrepreneur."
- [ ] Blue CTA button "Explore Our Services"
- [ ] Write `Hero.test.tsx`

### Phase 4: Components — About (10 min)

- [ ] Create `src/components/About.tsx`
- [ ] Split layout: left text + stats, right stacked image cards
- [ ] Section title: "About Us" eyebrow + heading with coral accent
- [ ] Experience stats: "10 Years" + "$40M+"
- [ ] Write `About.test.tsx`

### Phase 5: Components — Services (10 min)

- [ ] Create `src/components/Services.tsx`
- [ ] 3 service cards in 3-col grid
- [ ] Each card: image with hover overlay (slide-up, #4760FF bg, "Read More")
- [ ] Write `Services.test.tsx`

### Phase 6: Components — Testimonials (10 min)

- [ ] Create `src/components/Testimonials.tsx`
- [ ] Background image with section-bg2 treatment
- [ ] Centered carousel: quote + founder attribution
- [ ] Write `Testimonials.test.tsx`

### Phase 7: Components — Team (10 min)

- [ ] Create `src/components/Team.tsx`
- [ ] 3 team cards in 3-col: photo + name + role + social icons
- [ ] Hover scale transition on photos
- [ ] Write `Team.test.tsx`

### Phase 8: Components — Secondary Services + CTA (10 min)

- [ ] Create `src/components/ServicesShowcase.tsx` (2 larger cards, 2-col)
- [ ] Create `src/components/CtaBanner.tsx` (background image, centered
      heading + subtext + blue button)
- [ ] Write tests for both

### Phase 9: Components — Footer (10 min)

- [ ] Create `src/components/Footer.tsx`
- [ ] Dark navy #140C40 bg, 4-column: logo+desc+social, About, Services,
      Newsletter (email input + Send)
- [ ] Copyright bar with Component Dock link
- [ ] Write `Footer.test.tsx`

### Phase 10: App composition + Integration (10 min)

- [ ] Compose all sections in `src/App.tsx` in correct order:
      Navbar → Hero → About → Services → Testimonials → Team →
      ServicesShowcase → CtaBanner → Footer
- [ ] Ensure semantic landmarks (banner, main, contentinfo)
- [ ] Set document title "Buzzer — Business Consulting"
- [ ] Write `App.test.tsx`

### Phase 11: Verification (5 min)

- [ ] `npm run spec:validate` passes
- [ ] `npm run verify:app -- buzzer` passes
- [ ] No ColorLib references in `apps/buzzer/`
- [ ] Footer links to https://www.componentdock.com/
- [ ] `npm install` at root for lockfile
- [ ] Commit: `feat: add buzzer template (ColorLib Bravo recreation)`

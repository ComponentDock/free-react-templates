# Pexflow — Implementation Tasks & Design Notes

## ColorLib source
- **Template name:** Pexcon
- **Slug:** pexcon
- **Preview URL:** https://preview.colorlib.com/theme/pexcon/
- **Source URL:** https://colorlib.com/wp/template/pexcon/
- **Screenshot:** `pexcon-free-template.jpg`

## Task list (for implementer)

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/aurora` or another small template)
- [ ] Rename package to `@free-react-templates/pexflow`
- [ ] Update `public/CNAME` → `pexflow.free.componentdock.com`
- [ ] Update `package.json` `homepage` → `https://pexflow.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Components (in section order)
- [ ] `src/components/Navbar.tsx` — sticky nav, logo, links (Home, About, Services, Blog, Contact), "Get a Quote" CTA
- [ ] `src/components/Hero.tsx` — full-width light gray bg, headline "Committed to Superior Quality and Results", subtext, "View project" CTA
- [ ] `src/components/About.tsx` — two-column: left image, right heading + 2 icon features (Certified Company, Experience Employee)
- [ ] `src/components/Services.tsx` — "our services" heading, 3 service cards (Better Future, Qualified Trainers, Job Oppurtunity) with icons + "read more"
- [ ] `src/components/Experience.tsx` — two-column: left text + 20-year counter, right image
- [ ] `src/components/Projects.tsx` — "Our Projects" heading, filter tabs (All/Buildings/Rebuild/Architecture), 3 project cards with hover overlay
- [ ] `src/components/Stats.tsx` — 4-column counter strip (60 Satisfied Client, 10 Branches, 80 Projects, 24 Finished) with SVG icons
- [ ] `src/components/Reviews.tsx` — "Some Feedback From Client" heading, carousel of testimonials (avatar + quote + location)
- [ ] `src/components/Blog.tsx` — "Recent news" heading, 3 blog cards (image + comments/likes meta + title + "read more")
- [ ] `src/components/Footer.tsx` — dark bg, 4 columns (logo+about, Best Services, Our Gallery, Contact info), copyright, Component Dock link

### Phase 3: App assembly + theme
- [ ] `src/App.tsx` — compose all sections in order
- [ ] `src/index.css` — Tailwind entry + `@theme` tokens: `--color-primary: #ff5e13`, `--color-secondary: #001b5e`, `--color-light-bg: #fbf9ff`, `--color-banner-bg: #f7f7f7`, font-family Roboto
- [ ] `vite.config.ts` — register `injectUiSource()` (copy pattern from existing app)

### Phase 4: Tests (TDD)
- [ ] One `*.test.tsx` per component
- [ ] Scenario-style `it` blocks matching spec Gherkin scenarios
- [ ] `npm run test:coverage` → 100% lines/functions/branches/statements

### Phase 5: Verify & push
- [ ] `scripts/verify-app.sh pexflow` passes
- [ ] Commit: `feat: add pexflow (ColorLib pexcon) template`
- [ ] Push + PR + squash merge

## Design notes

### Layout structure (top to bottom)
1. **Navbar**: fixed/sticky top, white bg, logo left, nav links right, orange "Get a Quote" button
2. **Hero**: light gray (#f7f7f7) full-width, left-aligned text with headline + CTA
3. **About**: 2-col, image left / text+features right, white bg
4. **Services**: 3 equal columns, white bg, icon + title + description + link
5. **Experience**: 2-col, text+counter left / image right, alternating lavender (#fbf9ff) bg
6. **Projects**: filter bar + 3 image cards with hover overlay, white bg
7. **Stats**: dark/black bg strip, 4 counter blocks, white text
8. **Reviews**: alternating lavender (#fbf9ff) bg, carousel
9. **Blog**: white bg, 3 cards in 3 columns
10. **Footer**: dark/black bg, 4 columns, white text, Component Dock link

### Key visual characteristics
- Orange (#ff5e13) brand color prominent in buttons and accents
- Navy blue (#001b5e) for headings and hover states
- Roboto font family throughout
- Light, clean aesthetic with alternating white/lavender sections
- Bootstrap-inspired grid (12-col)
- Counter animation in stats section (use animate-on-scroll)
- Isotope-style filter on projects section
- OWL Carousel for testimonials

### Placeholder images
- Hero: `https://picsum.photos/seed/pexflow-hero/1200/600`
- About: `https://picsum.photos/seed/pexflow-about/600/400`
- Experience: `https://picsum.photos/seed/pexflow-experience/600/400`
- Projects: `https://picsum.photos/seed/pexflow-proj-{1,2,3}/400/300`
- Blog: `https://picsum.photos/seed/pexflow-blog-{1,2,3}/400/250`
- Client avatars: `https://picsum.photos/seed/pexflow-client-{1,2}/80/80`
- Gallery (footer): `https://picsum.photos/seed/pexflow-gallery-{1..8}/100/100`

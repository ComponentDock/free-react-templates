# BuildSite — Implementation Notes

## Source
- ColorLib: Constructioncompany
- Preview: https://preview.colorlib.com/theme/constructioncompany/
- New name: buildsite (kebab-case, unique, no collision)

## Section Order (from preview)
1. Header — transparent overlay, sticky on scroll
2. Hero Slider — full-width bg image, dark overlay, large text, animated clip-path
3. Services — 3 cards (image + title + read more)
4. About — split layout (text left, image right + year badge)
5. Projects Gallery — tabbed filter, 3x2 grid, hover dark overlay
6. Contact CTA — full-width bg image, section heading
7. Counter Stats — 3 numbers on bg image with overlay
8. Team — 3 member cards (image + role + name)
9. Testimonials — carousel with SVG quote icon
10. Latest News — 2 blog cards, dark bg, date badges
11. Footer — 4 columns, newsletter form, copyright

## Design Token Summary
- Brand: #ff5f13 (orange) — buttons, active states, accents
- Headings font: "Teko" — section titles, hero text
- Body font: "Barlow" — all body text
- Button primary: border-radius 5px, orange fill, hover sweep
- Section back-text: 140px outlined decorative text behind section headings
- Blog bg: #00235b (dark navy)
- Team role accent: #c94500 (burnt orange)

## Implementation Tasks

### 1. Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/aurora → apps/buildsite)
- [ ] Rename package to @free-react-templates/buildsite
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind v4 + @theme tokens for brand colors
- [ ] Add Google Fonts link for Barlow + Teko in index.html
- [ ] Create public/CNAME with buildsite.free.componentdock.com
- [ ] Set homepage in package.json

### 2. Component Structure
- [ ] src/components/Header.tsx — transparent sticky header, top bar, nav, mobile menu
- [ ] src/components/HeroSlider.tsx — background image slider with overlay, animated text
- [ ] src/components/Services.tsx — 3 service cards
- [ ] src/components/About.tsx — split layout with badge
- [ ] src/components/ProjectsGallery.tsx — tabbed filter with 3x2 grid
- [ ] src/components/ContactCTA.tsx — full-width background section
- [ ] src/components/Counter.tsx — 3 stat counters with background
- [ ] src/components/Team.tsx — 3 member cards
- [ ] src/components/Testimonials.tsx — carousel with quote SVG
- [ ] src/components/LatestNews.tsx — 2 blog cards on dark bg
- [ ] src/components/Footer.tsx — 4-column footer with newsletter form
- [ ] src/App.tsx — compose all sections in order

### 3. Tests (TDD)
- [ ] Write tests for each component (100% coverage required)
- [ ] Test header sticky behavior
- [ ] Test project gallery tab switching
- [ ] Test testimonial carousel navigation
- [ ] Test mobile menu toggle
- [ ] Test newsletter form submission

### 4. Styling Details
- [ ] Hero: linear-gradient overlay, clip-path animation on "Construction"
- [ ] Section titles: front h2 (70px Teko) + back-text (140px outlined stroke)
- [ ] Project cards: hover → dark overlay (#00235b), plus icon fade-in
- [ ] Team cards: hover image scale
- [ ] Blog date badge: absolute positioned, #c94500 background
- [ ] Counter: negative margin-top to overlap previous section
- [ ] About badge: absolute bottom, #1f2b7b background, rounded

### 5. Images
- [ ] Use picsum.photos/seed/buildsite-1/W/H for all placeholder images
- [ ] Hero: large landscape (1920x900)
- [ ] Services: 370x268
- [ ] About: 845x609
- [ ] Projects: 370x394
- [ ] Team: 370x406
- [ ] Blog: 571x325
- [ ] Map footer: 405x184

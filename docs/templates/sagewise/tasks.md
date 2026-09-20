# Sagewise — Implementation Tasks & Design Notes

**Source:** ColorLib "Wiser" — https://colorlib.com/wp/template/wiser/
**Preview:** https://preview.colorlib.com/theme/wiser/
**New name:** sagewise
**Category:** Education

## Task List

- [ ] Initialize app: copy simplest education app (e.g. scholara), rename package to `@free-react-templates/sagewise`
- [ ] Set up `public/CNAME` with `sagewise.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://sagewise.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()` pattern
- [ ] Add Google Fonts: Poppins (body) + Abril Fatface (headings) in index.html
- [ ] Set up Tailwind theme tokens in `src/index.css` (`@theme` block)
- [ ] Create `src/components/HeaderTop.tsx` — dark navy bar with contact info
- [ ] Create `src/components/Navbar.tsx` — sticky nav with logo, menu, book button
- [ ] Create `src/components/HeroSlider.tsx` — owl-carousel-style slider with 2 slides + scholarship card
- [ ] Create `src/components/ServiceArea.tsx` — 3 yellow service cards
- [ ] Create `src/components/PopularPrograms.tsx` — program cards carousel
- [ ] Create `src/components/LatestCourses.tsx` — course cards carousel
- [ ] Create `src/components/RecentEvents.tsx` — event cards carousel
- [ ] Create `src/components/AdmissionForm.tsx` — split layout with form
- [ ] Create `src/components/RecentNews.tsx` — 3-column article grid
- [ ] Create `src/components/Footer.tsx` — newsletter + 4-column links + copyright
- [ ] Compose all sections in `src/App.tsx`
- [ ] Write Vitest tests for each component (100% coverage)
- [ ] Verify: `scripts/verify-app.sh sagewise` passes
- [ ] Commit + push

## Design Notes

### Section Order (1:1 fidelity)
1. Header Top Bar (dark navy `#232637`, phone/email)
2. Sticky Nav (white bg, logo left, menu center, book button right)
3. Hero Slider (2 slides, bg images, scholarship callout yellow card)
4. Service Area (3 cards, yellow `#ebb830` bg, 10px radius)
5. Popular Programs (carousel, program cards with images)
6. Latest Courses (carousel, course cards)
7. Recent Events (carousel, event cards with date badges)
8. Admission Form (split: image left, form right)
9. Recent News (3-col grid, article cards)
10. Footer (newsletter on dark bg + 4-col links)

### Color Palette
- Primary yellow: `#ebb830` (service cards, newsletter button)
- Teal accent: `#1fc2d9` (buttons, carousels, links)
- Dark navy: `#234262` (headings, header top bar)
- Muted blue-gray: `#7d84ab` (body text)
- Light purple bg: `#f0e9ff` (section alternation)
- Body bg: `#f9f9ff`
- Footer dark: `#232637`
- White: `#fff`

### Typography
- Body: Poppins (Google Fonts, all weights)
- Section headings: Abril Fatface (decorative serif, 55px)
- Section description: Poppins 18px, line-height 2, color `#7d84ab`

### Component Patterns
- Carousels: Use a lightweight carousel or CSS scroll-snap (avoid heavy deps)
- Service cards: Yellow bg, rounded (10px), icon + title + description
- Admission form: Use react-hook-form + zod validation
- Footer newsletter: Email input + yellow subscribe button
- All footer links point to componentdock.com

### Placeholder Images
- Hero slides: `https://picsum.photos/seed/sagewise-hero-1/1920/800`
- Service icons: Use lucide-react
- Program cards: `https://picsum.photos/seed/sagewise-prog-1/400/250`
- Course cards: `https://picsum.photos/seed/sagewise-course-1/400/300`
- Event images: `https://picsum.photos/seed/sagewise-event-1/400/250`
- Admission image: `https://picsum.photos/seed/sagewise-admission/600/400`
- News images: `https://picsum.photos/seed/sagewise-news-1/400/250`

### Fidelity Notes
- Match section order exactly as listed above
- Service cards must have yellow background + 10px border-radius
- Section headings use Abril Fatface (55px, weight 400, color `#234262`)
- Slider should have 2 slides with background images
- Scholarship callout card in hero: yellow bg with icon
- Footer has 4 columns: About Us, Campus, Study, Support
- Newsletter section sits above footer columns
- No ColorLib references in app code — provenance only in spec
- Footer MUST link componentdock.com (branded "Component Dock")

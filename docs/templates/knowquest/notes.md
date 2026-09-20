# KnowQuest — Design Notes & Task Outline

Source: ColorLib "Knowledge" · https://preview.colorlib.com/theme/knowledge/
New name: knowquest · Stack: React 19, Vite, Tailwind 4, TypeScript

## Structure Order (top → bottom)

1. **TopBar** — Dark purple-navy (#302a39) bar with tagline left + 3 links right
2. **Navbar** — Logo left, nav items right, CTA button. Transparent on hero, white on scroll
3. **HeroSlider** — Full-width flex slider, dark overlay, headline + subtitle + play CTA, "Discover More" outline button, slide dots
4. **SearchBar** — Dark bg (#302a39), 3-column dropdown form (Categories, Difficulty, Sort By) + blue submit button
5. **CourseCategories** — "Popular Online Courses" heading, 6 course cards in carousel (owl-carousel equivalent), image + title + meta
6. **StatsCounter** — Dark parallax bg with overlay, 4 columns: number (#4586ff) + label (white), animated count-up
7. **Trainers** — Instructor profiles: photo, name, subject specialty. Grid layout
8. **Events** — "Upcoming Events", cards with image, title, date, description, "Discover" link
9. **Blog** — Light grey (#f2f3f7) bg, "Recent Articles", article cards with image, title, excerpt, author, date
10. **Footer** — Dark footer, 4 columns (About, Courses, Difficulty, Company), contact info, social links, Component Dock attribution

## Fidelity Notes

- **Colors:** Primary blue #4586ff is used everywhere — links, buttons, counter numbers, active states. Dark bar #302a39 for top-bar and search. Blog section uses #f2f3f7 light grey.
- **Font:** Rubik via Google Fonts (weights 300, 400, 500, 700). Body 17px, weight 300.
- **Buttons:** All CTA buttons are pill-shaped (border-radius: 100px). Primary = solid blue + white text. Outline = transparent + blue border + blue text. Play button = dark circle icon + text.
- **Hero:** Uses a slider (FlexSlider). Each slide has a background image with dark overlay, centered text, and CTA. The play button has a black circle with white play icon.
- **Search:** 3-column form on dark bg. Each column is a form group with a label and a select dropdown. Submit is a full-width blue pill button.
- **Counters:** Parallax background image with dark overlay (rgba(0,0,0,0.7)). Numbers count up from 0 using JS animation. Labels are below numbers in white.
- **Trainers:** Grid of trainer cards. Each has a photo, name in an h3, and a subject in a span below. Hover effects on images.
- **Events:** Cards with image, title, date, and short description. "Discover" link to read more.
- **Blog:** Article cards on light grey bg. Featured image at top, title, excerpt, admin name + date. Blog section heading with underline accent.
- **Footer:** 4-column layout on dark bg. About text column, course links, difficulty links, company info. Bottom bar with social icons and copyright.
- **Images:** Use picsum.photos/seed/knowquest-N for placeholders.
- **No parallax JS needed** for counters — use IntersectionObserver + requestAnimationFrame for count-up animation.

## Task Outline

- [ ] Scaffold app: `apps/knowquest/` from simplest existing app, rename package
- [ ] Add Rubik font to index.html
- [ ] Create Tailwind theme tokens: brand blue, dark bg, light grey bg
- [ ] Build TopBar component
- [ ] Build Navbar component (with mobile hamburger)
- [ ] Build HeroSlider component (simple CSS-only or state-based slide rotation)
- [ ] Build SearchBar component
- [ ] Build CourseCategories component with card grid
- [ ] Build StatsCounter component with animated count-up
- [ ] Build Trainers component
- [ ] Build Events component
- [ ] Build Blog component
- [ ] Build Footer component with Component Dock link
- [ ] Compose App.tsx from all sections
- [ ] Write tests (TDD) for each component — 100% coverage
- [ ] Run verify-app.sh, fix any issues
- [ ] Commit: `feat: knowquest (ColorLib knowledge) — online learning template`

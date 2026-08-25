# Scholara (ColorLib Universityedu) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-scholara`.

## Design notes (replication findings)

- **Original:** ColorLib "Universityedu" — education / university landing
  template (source: https://colorlib.com/wp/template/universityedu/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/universityedu/
  (HTTP 200, 28 KB HTML, title "Education | Template"). Stylesheet
  `css/style.css` (103 KB, compiled from SCSS, Chivo font via Google
  Fonts `@import` at top) + Bootstrap 4 + plugin libs (owl.carousel,
  slicknav, animate, magnific-popup, font-awesome, themify-icons, slick,
  nice-select, counterup, waypoints). Bootstrap 4 grid + utility classes.
- **Screenshot:** `universityedu-colorlib-template.jpg` — education template
  with dark hero overlay + countdown timer banner, sticky nav, warm cream
  about section, programs 2-col grid, resources accordion, top stories
  3-col, partner carousel, dark green trusted section, grey footer.
- **Visual design:** clean education landing — warm cream `#FCF2EB`
  sections alternating with white and light blue-gray `#F1FBFF`. Font:
  **Chivo** (Google Fonts, 300–900). Primary green `#007A5C` (buttons,
  accent, scroll-to-top). Dark slate headings `#32404D`. Grey body text
  `#5D646A`. Primary `.btn_1` = green bg, white text, NO radius (square).
  `.browse-btn` = green underline link. Split sections use background
  images with dark overlays.

## Section order (1:1 recreation order)

| #   | Section       | CSS class / marker       | Notes                                                 |
| --- | ------------- | ------------------------ | ----------------------------------------------------- |
| 1   | Top bar + Nav | `.header-area`           | Countdown timer banner + sticky nav with logo + links |
| 2   | Hero          | `.slider-area`           | Full-width bg image, dark overlay, headline + CTA     |
| 3   | About         | `.about-area.section-bg` | Cream bg, image left, title + text + browse link      |
| 4   | Programs      | `.home-blog`             | Centered title, 2 image cards                         |
| 5   | Resources     | `.visit-three`           | Split layout: accordion items left, image right       |
| 6   | Top Stories   | `.class-offer-area`      | 3-column card grid, "More Stories" link               |
| 7   | Partners      | `.brand-area`            | Centered title, logo carousel                         |
| 8   | Trusted       | `.visit-one`             | Dark green split section, white text + button         |
| 9   | Footer        | `footer`                 | 5-column layout + newsletter + social + copyright     |

## Implementation tasks

- [ ] Scaffold `apps/scholara/` from simplest existing app
- [ ] Create `src/components/TopBar.tsx` — countdown timer + promo text
- [ ] Create `src/components/Navbar.tsx` — sticky nav with logo + links + CTA
- [ ] Create `src/components/Hero.tsx` — bg image overlay, headline + CTA
- [ ] Create `src/components/About.tsx` — cream bg, image + text + link
- [ ] Create `src/components/Programs.tsx` — 2-col card grid
- [ ] Create `src/components/Resources.tsx` — split layout accordion
- [ ] Create `src/components/TopStories.tsx` — 3-col card grid
- [ ] Create `src/components/Partners.tsx` — logo carousel
- [ ] Create `src/components/Trusted.tsx` — dark green split section
- [ ] Create `src/components/Footer.tsx` — 5-col layout + newsletter
- [ ] Create `src/App.tsx` — compose all sections in order
- [ ] Add Chivo Google Font to `index.html`
- [ ] Set Tailwind theme tokens in `index.css` (primary green, heading, body colors)
- [ ] Write tests for each component (100% coverage)
- [ ] Run `npm run verify:app scholara` — must pass
- [ ] Commit, push, open PR, merge immediately

# Fitforge (ColorLib Crossbody) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fitforge`. Recreation name: **Fitforge** (NEW name —
> the ColorLib source keeps its name "Crossbody").

## Source mapping

- **ColorLib item:** "Crossbody" (TEMPLATES.md unchecked; fitness/crossfit template).
- **Source URL:** https://colorlib.com/wp/template/crossbody/
- **Preview URL:** https://preview.colorlib.com/theme/crossbody/ (REACHABLE, fetched 2026-09-21)
- **Preview CSS:** `css/style.css` (85,816 bytes) — Bootstrap 4 based with
  custom ftco-* classes. Font: Work Sans (Google Fonts, weights 100-900).
  Icons: Open Iconic, Flaticon, Icomoon (REPLACE with lucide-react).

## Reference research (done — do not redo)

### Live preview DOM (fetched 2026-09-21)

HTML length: 42,127 bytes. 9 `<section>` elements in DOM order:
1. Hero (`.hero-wrap.js-fullheight`) — parallax bg photo + overlay
2. Pricing (`.ftco-section`) — 3-column pricing cards
3. Programs (`.ftco-section.ftco-no-pb.ftco-no-pt`) — split layout
4. Counter (`.ftco-counter.ftco-bg-dark`) — 4 animated stats
5. Coaches (`.ftco-section`) — 4 coach cards, 2-col grid
6. Testimony (`.ftco-section.testimony-section`) — carousel
7. Blog (`.ftco-section`) — 3 blog cards
8. Appointment/Contact (`.ftco-appointment`) — map + form split
9. Gallery (`.ftco-gallery`) — 4 equal-width images

### CSS tokens (extracted from style.css)

**Brand colors:**
- Primary gradient: `#ff0055` (pink) → `#ff6600` (orange) — 45deg diagonal
- Accent: `#3fc3e8`, `#34c0e7`, `#4ac7ea`, `#56caeb`, `#78d5ef` (light blues)
- Dark sections: `#000`, `#0d0d0d`, `#141414`, `#16181b`, `#1d2124`, `#212529`
- Light bg: `#f7f7f7`, `#f8f9fa`, `#eaf8fd`
- Text: `#212529` (dark), `#6c757d` (muted)

**Typography:** Work Sans, all weights 100-900 from Google Fonts

**Border radii:**
- Buttons: 30px (rounded pill)
- Cards: 0.25rem, 0.3rem (Bootstrap defaults)
- Avatar/gallery hover: 50%

### Screenshot analysis (from TEMPLATES.md preview image)

Dark, moody fitness aesthetic. Large "Cross Body" heading with photo-clipped
text fill on dark bg. Three pricing cards with gym photos as backgrounds.
Pink-to-orange gradient accent buttons. Dark counter band with stats. Coach
cards alternating image/text. Testimonial carousel. Blog cards with date
sidebar. Map + contact form split. Dark footer with 4 columns.

## Implementation tasks

### Phase 1: Setup
- [ ] Create `apps/fitforge/` by copying simplest existing app
- [ ] Rename package to `@free-react-templates/fitforge`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Add Work Sans Google Fonts link to `index.html`
- [ ] Set up `index.css` with Tailwind v4 theme tokens

### Phase 2: Components (in DOM order)
- [ ] `Navbar.tsx` — dark bg, brand "Fitforge", 7 nav links, mobile toggle
- [ ] `Hero.tsx` — full-height parallax, dark overlay, heading, play button
- [ ] `Pricing.tsx` — section heading + diamond icons, 3 pricing cards
- [ ] `Programs.tsx` — split layout, 5 program items with icons
- [ ] `Counter.tsx` — dark parallax, 4 animated counters
- [ ] `Coaches.tsx` — 2-col grid, 4 coach cards, alternating layout
- [ ] `Testimony.tsx` — photo bg, dark overlay, carousel
- [ ] `Blog.tsx` — 3 blog cards with date sidebar
- [ ] `Contact.tsx` — map placeholder + form split
- [ ] `Gallery.tsx` — 4 equal-width images with hover overlay
- [ ] `Footer.tsx` — 4 columns, dark bg, Component Dock credit

### Phase 3: Assembly & polish
- [ ] Compose all sections in `App.tsx`
- [ ] Add parallax effects (CSS or simple scroll handler)
- [ ] Add counter animation (intersection observer + number counting)
- [ ] Add carousel for testimonials (use existing carousel or simple CSS)
- [ ] Wire up form validation
- [ ] Add placeholder images (picsum.photos with deterministic seeds)

### Phase 4: Tests
- [ ] Component tests for each section (render, content, accessibility)
- [ ] Test parallax/animation behavior
- [ ] Test form validation
- [ ] Achieve 100% coverage

### Phase 5: Verify & deploy
- [ ] `npm run verify:app fitforge`
- [ ] Update TEMPLATES.md: mark `[~]` when starting, `[x]` when done
- [ ] Push to `feat/template-fitforge`, open PR, squash merge
- [ ] Deploy to https://fitforge.free.componentdock.com

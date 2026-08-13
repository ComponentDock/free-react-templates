# Studia (ColorLib Onedu) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-studia`.

## Design notes (replication findings)

- **Original:** ColorLib "Onedu" — an e-learning course-directory landing
  one-pager (page title "Education | Template"; source:
  https://colorlib.com/wp/template/onedu/, appears 2× in TEMPLATES.md — line
  612 Education (154) + line 1650 Education (155); mark ALL `[x]` when done).
  The app name MUST differ from the source — hence **Studia** (Latin for
  "studies"; single lowercase word, no collision with `apps/`,
  `openspec/specs/`, or `docs/templates/` — verified 2026-08-13).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/onedu/ (HTTP
  200, ~44.6 KB HTML; `assets/css/style.css` ~74 KB parsed for tokens; also
  rendered in-browser — a11y tree matches the curl parse; live render
  confirms the hero search submit is a coral/red square while the static
  TEMPLATES.md screenshot renders it purple-ish — CSS + live render win).
  Stack: Bootstrap 5 + owl.carousel + slick + slicknav + nice-select +
  magnific-popup + themify/fontawesome icons — recreate ALL interactivity
  client-side in React (accessible carousel/accordion patterns, no jQuery
  libs).
- **Screenshot:** `onedu-free-template.jpg` (1200×946, viewed in browser):
  clean Udemy/Coursera-style e-learning landing. Header: red logo mark +
  "Onedu", central pill search bar, nav links, cart icon with red badge +
  dark "Sign In" button. SPLIT hero: left deep purple/indigo bg with large
  white headline "Learn new skills online with top educators", white
  sub-line, white search bar + red/purple submit; right lifestyle photo
  (young man on orange couch with laptop, bookshelves). Below: centered
  "The world's largest selection of courses" + course-card carousel (identical
  "Python for Data Science and Machine Learning" placeholders, ~4.9 star
  ratings + review counts, prev/next arrows). Professional, modern, academic;
  generous spacing. (Footer not in the shot — from live DOM it is purple with
  a newsletter form.)
- **Visual design (DOM + CSS tokens + screenshot):** BRAND PURPLE `#5A4E8C`
  (12 uses) — `.btn` bg (Jost, padding 30px 35px, white 16px/500, radius 4px;
  hover `::before` sweeps DARK NAVY `#1A213D` scaleX 0→1), "Sign In"
  header-btn2 (24px 23px), hero-btn (29px 31px), `.footer-area` bg, header
  search icon. ACCENT RED `#EA5252` (39 uses) — nav hover underline (3px
  `::before` animation) + link hover, hero eyebrow span, hero search submit
  (80px square, white icon), card `.img-text` badge, price span, category
  "View Courses" button, footer "Subscribe", `.slider-btns` links, `.video-btn`,
  footer heart/link. DARK TEXT `#3C3B37` (27 uses) — section-tittle h2, nav
  links, hero input text, testimonial h2/p, features p. MUTED `#6A6A6A`
  (card p, rating count, founder role), `#878787` (placeholders), `#B8B1D6`
  (footer links/copyright on purple). LIGHT BAND `#EFFDFF` (section-bg +
  section-overlay — both about sections). TESTIMONIAL BAND `#F3EAD8`.
  RATING STARS `#FFA200`. CATEGORY OVERLAY `rgba(90,78,140,0.3)` → 0.7 hover.
  SEARCH PILL white, border `#B9B9B9`, radius 30px, height 48px. Fonts:
  **Jost** (everything — display + body + buttons; Google Fonts @import
  weights 200–700; hero h1 52px/500/lh 1.2, section h2 36–40px/600/lh 1.4,
  card h3 20px/500, category h4 20px/600, footer h4 18px/500). Section
  rhythm: section-padding 100px top / 90–100px bottom, about-area2 100px 0,
  slider-height 700px, hero input 80px, footer input 47px radius 4px.

## Section-by-section fidelity notes (build order)

1. **Header** — white sticky (`header-sticky`); row: left logo (text brand
   "Studia" — Jost, red mark per screenshot), center pill search input
   (radius 30px, border `#B9B9B9`, 48px, placeholder "Search courses..") with
   purple `#5A4E8C` magnifier icon, right nav (Home / Browse Courses / About
   / Blog dropdown: Blog, Blog Details / Element / Contact; 17px/500
   `#3C3B37`, hover `#EA5252` + animated 3px underline) + purple "Sign In"
   `.btn` (radius 4px). Mobile: hamburger menu (slicknav → accessible
   disclosure). Nav links are dead anchors.
2. **Hero** — `.slider-height` ~700px, bg = seeded placeholder (hero-shape
   pattern → subtle flat tint or picsum; keep purple base `#5A4E8C`).
   Two-column split: left caption (eyebrow span red 14px/700 uppercase —
   optional, empty in source; h1 white 52px/500 "Learn new skills online with
   top educators"; p white 24px/300 "Learn 100% online with world-class
   universities and industry experts."; search form: white input 80px +
   red `#EA5252` square submit with white magnifier), right photo (person at
   laptop, `picsum.photos/seed/studia-hero/800/700` — screen seeds by pixel
   metric). Stack on mobile.
3. **Courses carousel 1** — centered section-tittle h2 36–40px/600 `#3C3B37`
   "The world's largest selection of courses" + sub-line; carousel (React
   state, prev/next arrows `#1a213d` 40%) of 5 course cards: photo (radius
   4px, bottom gradient overlay), red badge top-right (rating "4.9 (120
   Review)" white on `#EA5252`, radius 4px), h3 title 20px/500, blurb
   `#6A6A6A` + red price span, gold star row (`#FFA200`) + review count.
   Vary the 5 titles (all identical in source demo).
4. **About** — `#EFFDFF` band via section-overlay (or section bg): left
   photo (radius 4px), right heading "The world's largest selection of
   online courses" + paragraph (paraphrase the "Kingster" demo copy away) +
   purple "Browse Courses" `.btn`.
5. **Courses carousel 2** — same card pattern, heading "Students are
   viewing".
6. **Testimonials** — `#F3EAD8` band; centered column: quote icon + h2
   34px/500 "Student says about us" + quote p 22px `#3C3B37` (padding 0
   200px desktop) + founder row (avatar, name 18px/600, role 14px `#6A6A6A`);
   2 slides, round prev/next arrows. Paraphrase quotes.
7. **Categories** — heading "Explore top categories" (FIX the source typo
   "categoriesn"); grid 8 tiles (4-col desktop / 2-col tablet / 1-col
   mobile): photo + purple overlay `rgba(90,78,140,0.3)` (→0.7 hover, img
   scale 1.05), centered white title 20px/600 + sub-line 16px/300, red
   "View Courses" button (radius 4px, hidden → visible on hover, hover
   inverts white/red). Categories: Programing, VFX, App Development,
   Technology, Graphics Design, Music, Product Design, Video Editing.
8. **Become an Instructor** — `#EFFDFF` bg; left: h2 "Become an Instructor"
   - paragraph + 3 feature rows (icon + h3 25px/400 + p 16px `#3C3B37`) +
     purple "Become a Instructor" btn + red "Watch Video" link (play icon);
     right photo.
9. **Footer** — purple `#5A4E8C`; row: brand col (logo + about p 16px/300 +
   circular social icons 40px `rgba(255,255,255,0.06)`, hover `#EA5252`),
   three link cols "Subjects" / "Community" / "Company" (5 links each,
   `#B8B1D6` 300, hover white + underline), "Newsletter" col (email input
   47px radius 4px `rgba(255,255,255,0.1)` + full-width red "Subscribe"
   button); bottom border-top + centered copyright (14px `#B8B1D6`, red
   heart, credit → "Made with Component Dock" linking
   https://www.componentdock.com/ per policy); "Go to Top" link.

## Tasks (implementation checklist)

- [ ] Scaffold `apps/studia` from the simplest existing app; rename package
      to `@free-react-templates/studia`; `public/CNAME`
      `studia.free.componentdock.com`; homepage
      `https://studia.free.componentdock.com`; `npm install` at root so the
      lockfile registers the workspace (deploy Action runs `npm ci`)
- [ ] `vite.config.ts` with `injectUiSource()` (copy pattern from any
      existing app); Tailwind 4 tokens in `index.css` `@theme` (brand
      `#5A4E8C`, accent `#EA5252`, dark `#3C3B37`, light band `#EFFDFF`,
      testimonial `#F3EAD8`, stars `#FFA200`, hover `#1A213D`, muted trio,
      search border `#B9B9B9`)
- [ ] Jost `<link>` in `index.html`; document title "Studia — Learn New
      Skills Online with Top Educators"
- [ ] Components: `Navbar` (sticky + mobile menu), `Hero`, `CourseCard`,
      `CourseCarousel` (×2), `About`, `Testimonials`, `Categories`,
      `Instructor` (features), `Footer`, `ScrollTop`
- [ ] TDD: tests per section mirroring the spec's Gherkin scenarios; 100%
      coverage; `scripts/verify-app.sh studia` green
- [ ] Footer credit → "Component Dock" linking
      https://www.componentdock.com/; NO colorlib/onedu strings in app code
      (provenance only in this spec + TEMPLATES.md + PR)
- [ ] PR: `feat/template-studia` → merge immediately (`gh pr merge --squash
    --delete-branch`); description includes source template, preview URL,
      design tokens, renames/placeholder notes
- [ ] Bookkeeping (implementer): mark BOTH TEMPLATES.md rows (612 + 1650)
      `[x]` with `studia.free.componentdock.com` + `npm run readme:status`,
      push

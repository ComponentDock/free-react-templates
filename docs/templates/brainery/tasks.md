# Brainery (ColorLib Academica) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-brainery`. Recreation name: **Brainery** (NEW name —
> the ColorLib source keeps its name "Academica").

## Source mapping

- **ColorLib item:** "Academica" (TEMPLATES.md line 1622, under the
  Education section). The slug `academica` appears once — distinct from
  `academia` (line 1630, prepped as template-learnly).
- **Source URL:** https://colorlib.com/wp/template/academica/
- **Preview URL — REACHABLE (verified 2026-09-19):**
  **`https://preview.colorlib.com/theme/academica/`**
  (title: "Academica - Learning Page Template", HTTP 200, Bootstrap 3 site).
- **Preview CSS:** `css/style.css` (custom styles on top of Bootstrap 3
  grid). Also uses: `css/bootstrap.min.css`, `css/font-awesome.min.css`,
  `css/flaticon.css`, `css/owl.carousel.css`. Fonts: Raleway (Google Fonts,
  weights 400–800, italic). Icons: Font Awesome + Flaticon.

## Reference research (done — do not redo)

### Live preview DOM analysis (2026-09-19)

Fetched full HTML and CSS from the preview. The page is a Bootstrap 3
education landing page with these sections top-to-bottom:

1. **Header** — Fixed position, gradient background (`#185dd0` → `#7076fc`,
   left-to-right). Contains:
   - Logo image (`img/logo.png`) on the left
   - "Login / Register" text links on the right (white text)
   - Hamburger nav switch (Font Awesome bars icon) for mobile
   - Main menu: Home, About us, Courses, News, Contact (white text)
   - Header wrapper (`.header-warp`) has the gradient bg

2. **Hero Section** — Full-width background image (`img/bg.jpg` via
   `data-setbg` JS pattern), white text, left-aligned (col-lg-7).
   Contains:
   - Headline: "Literature Course" (h2, white, 34px, weight 500)
   - Description paragraph (white, 14px)
   - Author info: circular avatar + "By Sebastian Smith, Senior Lead Developer"
   - CTA button: "See Details →" (`.site-btn`, gradient bg, white text)

3. **Search Section** — White background, centered container.
   - Heading: "Search your Course" (h5)
   - Inline form with 5 text inputs: Course, Level, Date, Teacher, Price
   - "Search →" button (gradient bg)

4. **Services Section** — White background, `.spad` (90px top/bottom padding).
   - 3-column grid (col-lg-4 col-md-6) × 2 rows = 6 cards
   - Each card: flaticon icon (large, gradient bg circle) + title + description
   - Icons: apple, mortarboard, idea, medal, question, learning
   - All titles are "Training Center" (placeholder text)

5. **Testimonials / Review Section** — Full-width background image
   (`img/review-bg.jpg`) with dark overlay, white text.
   - Section title: "our students" (span, uppercase) + "Testimonials" (h2)
   - Owl-carousel slider with 2 slides
   - Each slide: large blue quotation mark (`.quota`), heading, paragraph,
     circular avatar, "By Name, Student"
   - Quote marks use gradient bg color

6. **Courses Section** — White background, `.spad`.
   - Section title: "Only the best" (span) + "Our Courses" (h2)
   - Owl-carousel of 4 course cards
   - Each card:
     - Preview image with overlaid price badge (gradient bg, e.g. "$25")
     - Course title (h5)
     - Description paragraph
     - Student count icon + count ("20")
     - Location icon + count ("3")
     - Star rating (4/5 stars)
     - Seller info bar (gradient bg): circular avatar + "By Name, Role"

7. **Footer** — Not fully fetched but follows standard Bootstrap 3 pattern.

### Key design decisions for implementation

- **Gradient brand identity** — Primary brand is a horizontal gradient
  `#185dd0` (deep blue) → `#7076fc` (lavender). Used on header, buttons,
  icons, price badges, and seller info bars. The vertical button gradient
  goes `#7076fc` (top) → `#185dd0` (bottom).
- **Raleway font** — Load via Google Fonts (weights 400, 500, 600, 700,
  800 — both normal and italic variants).
- **No external images** — Use `https://picsum.photos/seed/brainery-N/W/H`
  for hero bg, course images, avatars, review bg. Use lucide-react for
  all icons (replace flaticon + font-awesome).
- **Square buttons** — The original uses no border-radius on buttons
  (sharp Bootstrap 3 defaults). Replicate this distinctive look.
- **Carousel** — Replace owl-carousel with a simple CSS/JS carousel or
  a lightweight React carousel. Keep the same slide structure.
- **Section spacing** — `.spad` = 90px top + 90px bottom padding.
  Section titles have 84px bottom margin.
- **Primary color in @theme** — Define custom primary scale based on
  the gradient colors (#185dd0, #7076fc) in the Tailwind @theme block.

## Task breakdown

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (rename package to `@free-react-templates/brainery`)
- [ ] Set up `public/CNAME` → `brainery.free.componentdock.com`
- [ ] Set up `package.json` homepage
- [ ] Add Google Fonts (Raleway 400,500,600,700,800) to `index.html`
- [ ] Configure `vite.config.ts` with `injectUiSource()` pattern

### Phase 2: Design tokens
- [ ] Add primary color scale to `@theme` in `index.css` (blue #185dd0, lavender #7076fc, gradient)
- [ ] Configure Tailwind with custom gradient utilities

### Phase 3: Static data
- [ ] Create `src/data/services.ts` (6 service items with icon name, title, description)
- [ ] Create `src/data/courses.ts` (4 courses with title, description, price, students, locations, rating, seller)
- [ ] Create `src/data/testimonials.ts` (2 testimonials with heading, quote, author name, role, avatar)

### Phase 4: Components (bottom-up)
- [ ] `src/components/Header.tsx` — gradient bg, logo, auth links, nav, hamburger
- [ ] `src/components/Hero.tsx` — full-width bg image, headline, author, CTA
- [ ] `src/components/CourseSearch.tsx` — 5-field inline search form
- [ ] `src/components/Services.tsx` — 3-col grid, 6 cards with gradient icons
- [ ] `src/components/Testimonials.tsx` — dark bg, carousel with quotes
- [ ] `src/components/CourseCatalog.tsx` — course cards with pricing, ratings
- [ ] `src/components/Footer.tsx` — footer links, Component Dock attribution
- [ ] `src/components/MobileMenu.tsx` — hamburger slide-down
- [ ] `src/App.tsx` — compose all sections in order
- [ ] `src/index.css` — Tailwind entry + theme tokens

### Phase 5: Tests (TDD)
- [ ] Test each component renders correctly
- [ ] Test mobile menu toggle
- [ ] Test carousel navigation (prev/next)
- [ ] Achieve 100% coverage

### Phase 6: Verification
- [ ] `npm run typecheck` — zero errors
- [ ] `npm run lint` — zero errors
- [ ] `npm run test:coverage` — 100% all metrics
- [ ] `npm run build` — clean build
- [ ] Visual check: all sections match reference
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com

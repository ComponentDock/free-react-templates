# Acadex (ColorLib Oneschool) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-acadex`. Recreation name: **Acadex** (NEW name —
> the ColorLib source keeps its name "Oneschool").

## Source mapping

- **ColorLib item:** "Oneschool" (TEMPLATES.md line 1653, Education category).
- **Source URL:** https://colorlib.com/wp/template/oneschool/
- **Preview URL — REACHABLE (verified 2026-09-20 by direct fetch):**
  **`https://preview.colorlib.com/theme/oneschool/`** (HTTP 200, 26,557 bytes,
  576 lines).
- **Preview CSS:** `css/style.css` (20,342 bytes) — all styles, Bootstrap 4 base,
  custom classes. Also loads: `css/bootstrap.min.css`, `css/owl.carousel.min.css`,
  `css/aos.css`, `css/jquery.fancybox.min.css`. Fonts: Google Fonts Muli
  (300, 400, 700, 900). Icons: Icomoon + Flaticon (replace with lucide-react).
  Scripts: jQuery 3.x, Bootstrap, Owl Carousel, AOS, Stellar (parallax).

## Reference research (done — do not redo)

### Screenshot visual analysis

The screenshot shows a purple-themed education site. The hero has a dark
parallax background image with a left-aligned heading "Learn From The Expert"
in white, subtext, and a purple pill "Admission Now" button. On the right,
a white signup card with form fields. Below, a light blue-gray section
shows a carousel of white course cards with images and pricing. The Programs
section alternates illustration rows. Teachers are shown in a 3-column grid
with circular photos. A dark parallax testimonial section follows. "Why
Choose Us" has decorative SVG blobs. Contact form on light gray. Footer is
white with 3 columns.

### Live preview DOM analysis (2026-09-20)

- **Navbar:** Sticky, `py-4`, logo text "OneSchool" left (will rename to
  "Acadex"), centered nav links (Home, Courses, Programs, Teachers), right
  "Contact Us" CTA (purple btn-primary btn-pill).
- **Hero (`#home-section`):** Full-width parallax background image (hero_1.jpg),
  dark overlay. Split: col-lg-6 h1 "Learn From The Expert" + 2 paragraphs +
  purple btn-primary btn-pill "Admission Now". Right col-lg-5: white form card
  with h3 "Sign Up", email, password, re-type password inputs, purple submit.
- **Courses (`#courses-section`):** Section title "Courses" on `#edf0f5` bg.
  Owl Carousel with 6 cards: image + price badge + lesson meta + title +
  description + stats bar (students, comments). Prev/Next buttons.
- **Programs (`#programs-section`):** Title "Our Programs" + intro text. 3 rows
  alternating illustration (undraw SVGs) and text with 2 icon+stat items each.
  Text headings: "We Are Excellent In Education", "Strive for Excellent",
  "Education is life". Each has 22,931 Yearly Graduates + 150 Universities.
- **Teachers (`#teachers-section`):** Title "Our Teachers" + intro. 3-column
  grid: circular photo (w-50, rounded-circle), name, position, bio.
  Teachers: Benjamin Stone, Katleen Stone, Sadie White (all "Physics Teacher").
- **Testimonials (`.bg-image.overlay`):** Parallax bg with dark overlay.
  Circular avatar, name "Jerome Jensen", blockquote with long testimonial.
- **Why Choose Us:** Heading + decorative SVG blobs (blob_1, blob_2).
  Left: white card with 6 icon+text features. Right: transparent person PNG.
- **Contact (`#contact-section`, `.bg-light`):** "Message Us" heading.
  Form: First name + Last name (row), Subject, Email, textarea, purple
  pill "Send Message" button (btn-block).
- **Footer (`.footer-section.bg-white`):** 3-col: About text, nav links,
  email subscribe (input + button). Bottom: copyright + Colorlib credit
  (replace with Component Dock).

### Design tokens (from CSS extraction)

- **Primary brand:** `#7971ea` (medium purple, used 17× in CSS — buttons,
  active states, accents)
- **Hover accent:** `#615dc2` (darker purple)
- **Deep accent:** `#4f45e3` (deep purple)
- **Contact accent:** `#1c4b82` (dark navy blue)
- **Font:** Muli (now "Mulish" on Google Fonts), weights 300/400/700/900
- **Body:** `color: gray; font-weight: 300; font-size: 1.1rem; line-height: 1.7`
- **Headings:** `font-family: "Muli", sans-serif` (inherited), `color: #000`
- **Bg colors:** `#fff` (main), `#edf0f5` (section alt), `#f4f5f9` (lighter),
  `#fafafa`, `#f8f9fa`
- **Text colors:** `#000`, `#343a40`, `#25262a`, `#212529`, `gray`
- **Buttons:** `.btn-primary` = `#7971ea` bg, white text; `.btn-pill` = high
  border-radius (pill shape); `.btn-block` for full-width submit
- **Section rhythm:** `.site-section` consistent padding, alternating light bg
- **Overlay:** `.bg-image.overlay` = dark semi-transparent on parallax images

## Implementation task outline

### Phase 1: Scaffolding
1. Copy simplest existing app (e.g. `apps/abjure/`) as base → rename to `apps/acadex/`
2. Rename package to `@free-react-templates/acadex`
3. Create `public/CNAME` with `acadex.free.componentdock.com`
4. Update `package.json` homepage to `https://acadex.free.componentdock.com`
5. Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design tokens (index.css + tailwind config)
1. Add `@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700;900&display=swap')` to index.html
2. Define `@theme` tokens in `src/index.css`:
   - `--color-brand: #7971ea`
   - `--color-brand-dark: #615dc2`
   - `--color-brand-deep: #4f45e3`
   - `--color-navy: #1c4b82`
   - `--color-section-alt: #edf0f5`
   - `--color-section-light: #f4f5f9`
   - `--font-family-body: 'Mulish', sans-serif`
3. Set body defaults: `font-weight: 300; font-size: 1.1rem; line-height: 1.7; color: gray`

### Phase 3: Components (section-by-section)

1. **Navbar.tsx** — Sticky header with logo text, centered nav links, CTA button.
   Use `cn()` from packages/ui. Active link highlight with brand color.
   Mobile hamburger menu.

2. **Hero.tsx** — Full-width section with parallax background image
   (picsum.photos/seed/acadex-hero/1920/1080). Dark overlay. Split layout:
   left (heading + subtext + CTA button), right (signup form card).
   AOS fade-up animations.

3. **CoursesCarousel.tsx** — Section title "Courses". Carousel of 6 course
   cards. Each card: image (picsum), price badge, lesson meta with clock icon
   (lucide), title, description, stats bar with users + message icons.
   Prev/Next controls. Use a simple CSS-based carousel or custom implementation.

4. **Programs.tsx** — Section title "Our Programs" + intro. 3 alternating rows:
   illustration (picsum or SVG placeholder) + text with icon+stat items.
   Use responsive grid with order reversal on larger screens.

5. **Teachers.tsx** — Section title "Our Teachers" + intro. 3-column grid
   (col-md-6 col-lg-4) of teacher cards: circular photo (picsum),
   name, position, bio paragraph.

6. **Testimonials.tsx** — Parallax background image with dark overlay
   (`.bg-image.overlay`). Centered: small circular avatar, name, blockquote
   with opening/closing quotes.

7. **WhyChooseUs.tsx** — Centered heading. Two-column layout: left (white
   card with 6 icon+text feature items using lucide icons), right
   (illustration image). Decorative SVG blobs in background.

8. **Contact.tsx** — Light gray background section. Centered form:
   First name + Last name (side by side on md+), Subject, Email,
   Message textarea. Purple pill submit button.

9. **Footer.tsx** — 3-column: About text, nav links, email subscribe form.
   Bottom copyright bar with border-top + Component Dock link.

### Phase 4: Testing + Verification
1. Write Vitest tests for each component (100% coverage)
2. Run `scripts/verify-app.sh acadex`
3. Typecheck + lint + build + test:coverage
4. Verify all sections render correctly

### Phase 5: Deploy prep
1. `npm install` at root (lockfile registration)
2. Commit with conventional format
3. Push to main, verify deploy

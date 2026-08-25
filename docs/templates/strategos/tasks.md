# Strategos (ColorLib Victor) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-strategos`. Recreation name: **Strategos** (NEW
> name — the ColorLib source keeps its name "Victor").

## Source mapping

- **ColorLib item:** "Victor" — appears TWICE in TEMPLATES.md:
  - Line 635 (section "## Bootstrap 5 (89)")
  - Line 1219 (section "## Business (365)")
    Both point to the same source: https://colorlib.com/wp/template/victor/
- **Preview URL — REACHABLE (verified 2026-08-25 by direct fetch):**
  `https://preview.colorlib.com/theme/victor/` (29,836 bytes HTML, HTTP 200)
- **Preview CSS:** `assets/css/style.css` (64,004 bytes) — hand-written CSS
  with Bootstrap 5 grid, no preprocessors. Additional: `bootstrap.min.css`,
  `owl.carousel.min.css`, `slicknav.css`, `animate.min.css`,
  `magnific-popup.css`, `fontawesome-all.min.css`, `themify-icons.css`,
  `slick.css`, `nice-select.css`. Fonts: Google Fonts "DM Sans" (loaded via
  link, weights 400/500/700 used).

## Reference research (done — do not redo)

### Live preview DOM analysis

Fetched `https://preview.colorlib.com/theme/victor/` on 2026-08-25.
Full page structure (from HTML comments and class names):

1. `<header>` — transparent header, sticky, logo + main-menu (6 items with
   submenu on Blog) + buttons (phone icon + "Get Free Consultant" white btn)
2. `.slider-area` — hero with `slider-bg1` background image, 2-col layout:
   `.hero-caption` (h1 + p + `.btn.hero-btn` orange) + `.hero-shape` image
3. `.our-client` — 3-col stats, each: blockquote img + `.client-say` (h2 + p)
4. `<section class="project-us">` — 2-col: image left + accordion right
   (4 `.accordion-item` elements, Bootstrap 5 accordion)
5. `<section class="services-area gray-bg">` — asymmetric: 8-col left
   (title + 2 `.single-cat` cards with icon + h5 + ul + `.browse-btn`)
   - 3-col right (sidebar image)
6. `.emargency-care` — parallax bg image, right-aligned white card with
   quote + author
7. `.services-area2` — carousel `.services1-active` with split cards
   (image left + `.features-caption` right)
8. `.support-company-area` — 2-col: text + `.about-btn` left, image right
9. `<footer>` — `.footer-wrappper` with gradient bg, 4-col layout:
   logo+social | services | navigation | contact. Copyright bar at bottom.

### CSS token extraction

Key design tokens from `assets/css/style.css`:

- **Brand orange:** `#FF6D21` — `.btn` background, `.browse-btn` color,
  `.white-btn` text, `.header-btn i` color, `btn_1` background
- **Dark navy:** `#232F55` — `.btn::before` hover sweep, footer gradient end
- **Slate:** `#454e6d` — footer gradient start, body text, headings
- **Deep navy:** `#1f2b7b` — `.accordion-button` text, hover states
- **Muted text:** `#A2A6B2` — footer paragraph and link text
- **Page bg:** `#fbf9ff` — body background (very light lavender)
- **Gray section:** `#F8FAFC` — `.services-area` and `.services-area2` bg
- **Font:** `"DM Sans", sans-serif` — global, set on body
- **Button radius:** `5px` — `.btn`, `.white-btn`
- **Card radius:** `10px` — `.emargency-care .single-emargency`
- **Footer gradient:** `linear-gradient(45deg, #454e6d 0%, #232f55 100%)`
- **Button hover:** `.btn::before` sweeps `#232F55` from left (scaleX 0→1)
- **White button:** `.white-btn` white bg + orange text + orange sweep hover
- **Section padding:** `.section-padding` = `100px 0`
- **Hero:** background image `h1_hero1.jpg`, cover sizing

### Screenshot analysis

The preview image (`victor-free-template.jpg`) shows:

- Dark navy header bar with orange accents
- Large hero section with background photo, white text overlay, orange CTA
- Clean white sections with centered content
- Orange brand color on buttons and accents throughout
- Professional business/consulting aesthetic
- Dark navy gradient footer with orange social highlights

## Implementation tasks

### Phase 1: Scaffolding

- [ ] Copy simplest existing app (e.g. `apps/abode`) to `apps/strategos`
- [ ] Rename package to `@free-react-templates/strategos`
- [ ] Set `public/CNAME` to `strategos.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://strategos.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Run `npm install` at repo root

### Phase 2: Design tokens

- [ ] Create `src/index.css` with Tailwind v4 `@theme` block:
  - `--color-brand: #FF6D21` (orange)
  - `--color-brand-dark: #232F55` (navy)
  - `--color-brand-mid: #454e6d` (slate)
  - `--color-brand-navy: #1f2b7b` (deep navy)
  - `--color-page-bg: #fbf9ff`
  - `--color-gray-section: #F8FAFC`
  - `--color-text-muted: #A2A6B2`
- [ ] Add Google Fonts link for "DM Sans" (400, 500, 700) in `index.html`

### Phase 3: Components (section by section)

- [ ] `Navbar.tsx` — transparent sticky header, logo, nav links with
      dropdown for Blog, phone CTA + "Get Free Consultant" white button,
      mobile hamburger
- [ ] `Hero.tsx` — full-width bg image, 2-col: headline + p + orange
      CTA button, hero shape image
- [ ] `ClientStats.tsx` — 3-column cards with image, heading, description
- [ ] `ProjectAccordion.tsx` — section title + 2-col: image left +
      4-item accordion right (use `<details>`/`<summary>` or state-managed
      accordion, only one open at a time)
- [ ] `Services.tsx` — gray bg, asymmetric layout: title + 2 service
      cards (icon + title + bullets + link) left, sidebar image right
- [ ] `Testimonial.tsx` — parallax bg, right-aligned white card with
      quote + author
- [ ] `ProjectShowcase.tsx` — centered title, carousel/split cards:
      image left + caption right with logo icon, heading, description, link
- [ ] `AboutSupport.tsx` — 2-col: text + orange CTA left, image right
- [ ] `Footer.tsx` — 4-column with gradient bg, logo+social, services,
      navigation, contact. Component Dock attribution in copyright bar.

### Phase 4: Assembly

- [ ] `App.tsx` — compose all sections in order
- [ ] `main.tsx` — entry point (excluded from coverage)

### Phase 5: Testing (TDD)

- [ ] Write tests for each component (describe per component, it blocks
      per Gherkin scenario)
- [ ] Ensure 100% line/function/branch/statement coverage
- [ ] Test responsive behavior (mobile menu toggle, column stacking)

### Phase 6: Verification

- [ ] Run `scripts/verify-app.sh strategos` (typecheck + lint + knip +
      fallow + vitest 100% coverage + build)
- [ ] Visual check: compare with preview screenshot
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code

## Fidelity notes

- **Section order must match 1:1:** Header → Hero → Client Stats →
  Project/Accordion → Services → Testimonial → Project Showcase →
  About → Footer
- **Orange brand `#FF6D21`** is the dominant accent — all primary buttons,
  browse links, and icon accents use it
- **Button hover effect:** orange button sweeps to navy `#232F55` from left;
  white button sweeps to orange from left — implement with CSS transition
  on `::before` pseudo-element
- **Accordion behavior:** Bootstrap 5 accordion with `data-bs-parent` — only
  one item expanded at a time. Implement with controlled state in React.
- **Parallax effect** on testimonial section — use `background-attachment:
fixed` or a CSS parallax technique
- **Footer gradient:** 45-degree linear gradient from `#454e6d` to `#232f55`
- **Font:** "DM Sans" throughout — load via Google Fonts `<link>` in index.html
- **No ColorLib attribution** in footer — replace with Component Dock link

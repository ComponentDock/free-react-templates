# Mendly (ColorLib Repair) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-mendly`. Recreation name: **Mendly** (NEW name —
> the ColorLib source keeps its name "Repair").

## Source mapping

- **ColorLib item:** "Repair" (TEMPLATES.md line 1152)
- **Source URL:** https://colorlib.com/wp/template/repair/
- **Preview URL — REACHABLE (verified 2026-09-14):**
  **`https://preview.colorlib.com/theme/repair/`** (HTTP 200).
- **Preview CSS:** `css/main.css` — extracted from live preview HTML.

## Reference research (done — do not redo)

### Live preview DOM (fetched 2026-09-14)

Full HTML fetched via `curl` from the live preview. Section order confirmed:

1. `<header id="header">` — fixed, dark top bar + main nav
2. `<section class="banner-area">` — fullscreen hero, text left, image right
3. `<section class="service-area">` — 4 service cards
4. `<section class="home-about-area">` — split layout, 2 feature cards
5. `<section class="discount-section-area">` — dark overlay, form
6. `<section class="work-process-area">` — 4-step process
7. `<section class="faq-area">` — accordion + skill circles
8. `<section class="testomial-area">` — testimonial carousel
9. `<section class="blog-area">` — 4 blog cards
10. `<section class="brands-area">` — logo carousel
11. `<footer class="footer-area">` — 4-column dark footer

### Design tokens (extracted from main.css)

- **Font:** Poppins (Google Fonts, weights 300–700, sans-serif)
- **Primary brand color:** `#988fff` (soft periwinkle purple)
- **Body text:** `#777`
- **Headings:** `#222`, font-weight 600
- **Light lavender bg:** `#f9f9ff` (about area, forms, testimonials)
- **Dark footer:** `#04091e`
- **Header top bar:** `#222222`
- **Primary button:** `#988fff` bg, `#fff` text, `border-radius: 25px`
- **Header button:** `#fff` bg, `#222` text, `border-radius: 0`
- **Discount overlay gradient:** `linear-gradient(0deg, #f43d6a 0%, #f574dd 100%)`
- **Work-process icon gradient:** `linear-gradient(0deg, #f43d6a 0%, #f574dd 100%)`
- **Primary-btn gradient:** `linear-gradient(0deg, #888fff 0%, #ce90ff 100%)`
- **Testimonial area:** dark overlay background
- **Form inputs:** `#f9f9ff` bg, no border-radius, 12px font
- **Blog details button:** `#988fff` border, 40x40 circle, expands on hover
- **Brands:** grayscale filter → color on hover, opacity 0.5 → 1
- **Section spacing:** `section-gap` class
- **Icons:** Linearicons (`lnr-*`) — REPLACE with lucide-react

### Screenshot analysis

Screenshot URL:
https://colorlib.com/wp/wp-content/uploads/sites/2/repair-free-template-1.jpg

Visual design notes (from preview + CSS):
- Professional repair service aesthetic with purple periwinkle as the brand
- Hero has a dark/photo background with white text overlay
- Service cards are image-heavy (product photos)
- About section uses a split layout with a large image on the right via
  CSS pseudo-element (`::after` with `background-image`)
- Discount section stands out with a pink-magenta gradient overlay
- Work process uses square icon boxes with gradient text
- FAQ uses a clean accordion with simple headings
- Testimonials sit on a dark background with card-style quote blocks
- Blog section is a standard 4-column grid
- Brands section shows grayscale partner logos
- Footer is dark navy (`#04091e`) with white/grey text

## Implementation tasks

### Phase 1: Setup
- [ ] Create `apps/mendly/` (copy simplest existing app, rename package to
      `@free-react-templates/mendly`)
- [ ] Set `public/CNAME` to `mendly.free.componentdock.com`
- [ ] Set `"homepage"` to `https://mendly.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Run `npm install` at repo root, verify lockfile registration

### Phase 2: Components (section order)
- [ ] `src/components/Header.tsx` — fixed header with top bar + nav
- [ ] `src/components/Hero.tsx` — fullscreen hero banner
- [ ] `src/components/Services.tsx` — 4 service cards grid
- [ ] `src/components/About.tsx` — split about section with feature cards
- [ ] `src/components/EstimateForm.tsx` — discount + estimate form section
- [ ] `src/components/WorkProcess.tsx` — 4-step process with arrows
- [ ] `src/components/Faq.tsx` — accordion + skill circles
- [ ] `src/components/Testimonials.tsx` — carousel testimonials
- [ ] `src/components/Blog.tsx` — 4 blog post cards
- [ ] `src/components/Brands.tsx` — logo carousel
- [ ] `src/components/Footer.tsx` — 4-column dark footer
- [ ] `src/App.tsx` — compose all sections in order
- [ ] `src/index.css` — Tailwind entry + theme tokens (`#988fff` primary)

### Phase 3: Tests
- [ ] Component tests for each section (Vitest + Testing Library)
- [ ] 100% coverage on all lines/functions/branches
- [ ] Responsive tests at 768px

### Phase 4: Verification
- [ ] `npm run verify:app -- mendly` passes
- [ ] Visual comparison with preview
- [ ] No ColorLib references in app code
- [ ] Footer links Component Dock
- [ ] PR opened and squash-merged

## Icon mapping (Linearicons → lucide-react)

| Source glyph (Linearicons)     | Recreation           |
| ------------------------------ | -------------------- |
| `lnr-diamond` (Expert Services)| lucide `Gem`         |
| `lnr-phone` (Great Support)    | lucide `Phone`       |
| `lnr-funnel` (Detect problem)  | lucide `Search`      |
| `lnr-layers` (Split solution)  | lucide `Layers`      |
| `lnr-paw` (Analyzing method)   | lucide `Scan`        |
| `lnr-smile` (Final result)     | lucide `Smile`       |
| `lnr-chevron-right` (accordion)| lucide `ChevronRight`|
| `lnr-arrow-right` (blog details)| lucide `ArrowRight` |
| `lnr-location` (newsletter btn)| lucide `Send`        |
| `fa-facebook/twitter/dribbble/behance` | lucide social icons or just text links |

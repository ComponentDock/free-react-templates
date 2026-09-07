# Glider (ColorLib Bobsled) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-glider`. Recreation name: **Glider** (NEW name —
> the ColorLib source keeps its name "Bobsled").

## Source mapping

- **ColorLib item:** "Bobsled" (TEMPLATES.md line 914; section
  "## Creative" or similar).
- **Source URL:** https://colorlib.com/wp/template/bobsled/
- **Preview URL — REACHABLE (verified 2026-09-07 by direct fetch):**
  **`https://preview.colorlib.com/theme/bobsled/`**
  (HTTP 200, 17,947 bytes, 164 lines, `<title>Bobsled</title>`).
- **Preview CSS:** `css/main.css` (33,377 bytes — ALL custom styles),
  plus `css/bootstrap.css`, `css/owl.carousel.css`, `css/nice-select.css`,
  `css/magnific-popup.css`, `css/linearicons.css`, `css/font-awesome.min.css`.
  Fonts: Google Fonts Poppins (300, 500, 600) via `<style>` preload.
  Scripts: jQuery 2.2.4, Popper.js, Bootstrap, Owl Carousel, Nice Select,
  Magnific Popup, AjaxChimp, main.js.

## Reference research (done — do not redo)

### Preview DOM structure (from fetched HTML)

Section order extracted from `https://preview.colorlib.com/theme/bobsled/`:

1. **Navbar** — `.header-top` with `.logo` (image) + `.main-menubar` (nav
   links: Home, Generic, Elements) + `.menu-bar` hamburger (`.lnr-menu`).
   Nav hidden on mobile (`.hide` class toggled by breakpoint).
2. **Hero / Banner** — `.hero-area` > `.banner-area` with `.container` >
   `.row.height` > `.col-lg-7` > `.banner-content`:
   - h1: "Don't look anywhere, This is the best place on web" (uppercase,
     white, `.text-white .text-uppercase .mb-10`)
   - p: "Living in today's metropolitan world..." (white, `.mb-30`)
   - a.primary-btn: "Get Started" with arrow icon (`.lnr-arrow-right`)
   - Decorative `.hero-area:after` pseudo-element: `hero-bg.png` illustration
     at 50% width, bottom-right, z-index 2.
3. **Working Process** — `.working-process-area` (white bg, padding 100px 0):
   - Section title: "Our Working Process" + subtitle paragraph
   - 4x `.single-work-process` in flex row: `.work-icon-box` (120×120px,
     border-radius 3px) with `.lnr` icon + h4 label. Connected by
     `.work-arrow` images (`work-arrow.png`).
   - Steps: Researching (lnr-funnel), Wireframing (lnr-layers),
     Prototyping (lnr-paw), Final Design (lnr-smile).
4. **Features** — `.featured-area` (gradient bg via parent, padding 100px 0):
   - Section title: "Our Exclusive Features" (white text)
   - 3x `.single-feature` (col-md-4): `.thumb` (background image t1/t2/t3.jpg)
     + `.desc` with h4 title + p description + "Read More" primary-btn.
   - Cards: Creative Design, Appropriate UX, Super Clean Code.
5. **Remarkable Works** — `.remarkable-area` (white bg, padding 100px 0):
   - Section title: "Remarkable Works"
   - 3x `.single-remark` rows with `.row.no-gutters`:
     - Row 1: col-lg-7 `.remark-thumb` (r1.jpg) + col-lg-5 `.remark-desc`
       (title + text + "View Project" button)
     - Row 2: REVERSED — text left, image right (r2.jpg)
     - Row 3: image left, text right (r3.jpg)
   - Each row has box-shadow: `0px 15px 50px rgba(0,0,0,0.1)`
6. **Story** — Gradient background section:
   - Container with col-lg-1 spacer + col-lg-7 content
   - `.story-box`: white bg, border-radius 3px, padding 60px 90px, z-index 2
   - Content: h6 uppercase "From the part of beginning" + paragraph +
     "Get Started" primary-btn with arrow.
7. **Subscription** — `.subscription-area` (bg `#f9f9ff`, padding 100px 0):
   - Left (col-lg-6): "Subscribe for our Newsletter" h3 + subtitle span
   - Right (col-lg-6): email input + "Get Started" primary-btn (ajaxchimp form)
8. **Contact Form** — `.contact-form-area` (padding 100px 0):
   - Section title: "Keep in Touch" (white text, centered)
   - Form: name input (col-lg-5) + email input (col-lg-5) + textarea
     (col-lg-10) + "Send Message" button (col-lg-10, right-aligned)
   - White placeholder text on gradient background.
9. **Footer Widget** — `.footer-widget-area` (transparent bg):
   - 3 columns (col-md-4): Address, Email Address, Phone Number
   - Each with centered `.single-widget > .desc` content.
10. **Footer** — Over gradient, border-top `1px solid rgba(255,255,255,0.3)`:
    - Logo image + copyright text + social icons (Facebook, Twitter,
      Dribbble, Behance via Font Awesome)

### Design tokens (extracted from css/main.css)

| Token | Value | Source selector |
|-------|-------|-----------------|
| Font family | `"Poppins", sans-serif` | `body` |
| Font weight base | `300` | `body` |
| Font weight medium | `500` | headings |
| Font weight semi-bold | `600` | strong, h2 |
| Body text color | `#777777` | `body` |
| Heading color | `#222222` | `h2`, `h4` |
| Primary gradient start | `#3e69fe` (blue) | `.primary-btn:after`, `.banner-area`, `.featured-area`, `.story-area` |
| Primary gradient end | `#4cd4e3` (cyan) | same selectors |
| Body background | `linear-gradient(0deg, #4cd4e3 0%, #3e69fe 100%)` | `body` second rule |
| White | `#fff` | text on gradient, card bg, button text |
| Light section bg | `#f9f9ff` | `.subscription-area` |
| Button border-radius | `20px` | `.primary-btn` |
| Button border | `1px solid #fff` | `.primary-btn` |
| Button hover | gradient fill via `:after` pseudo | `.primary-btn:hover:after` |
| Icon box dimensions | `120px × 120px` | `.work-icon-box` |
| Icon box radius | `3px` | `.work-icon-box` |
| Card shadow | `0px 15px 50px rgba(0,0,0,0.1)` | `.single-remark` |
| Story box padding | `60px 90px` | `.story-box` |
| Story box radius | `3px` | `.story-box` |
| Footer border | `1px solid rgba(255,255,255,0.3)` | `footer` |
| Section padding | `100px 0` | all major sections |

### Screenshot analysis (`bobsled-creative-website-template.jpg`)

The screenshot confirms:
- Full-page blue-cyan gradient background
- Hero with large white uppercase text + pill button
- Working process on white with 4 icon steps + arrows
- Features on gradient with 3 image cards
- Portfolio rows alternating image/text on white with shadows
- Story card floating over gradient
- Newsletter on light background
- Contact form on gradient
- Footer with social icons

## Implementation task outline

### Phase 1: Setup
1. Create `apps/glider/` — copy simplest existing app, rename package to
   `@free-react-templates/glider`.
2. Run `npm install` at repo root to register workspace in lockfile.
3. Set up `public/CNAME` with `glider.free.componentdock.com`.
4. Set `homepage` in `package.json` to `https://glider.free.componentdock.com`.

### Phase 2: Structure (components)
5. `src/components/Navbar.tsx` — Logo + desktop nav + mobile hamburger.
6. `src/components/Hero.tsx` — Gradient banner with headline, subtitle, CTA.
7. `src/components/WorkingProcess.tsx` — 4 icon steps with arrow connectors.
8. `src/components/Features.tsx` — 3 feature cards with thumbnails.
9. `src/components/RemarkableWorks.tsx` — 3 alternating image/text rows.
10. `src/components/Story.tsx` — Floating white card over gradient.
11. `src/components/Subscription.tsx` — Newsletter signup on light bg.
12. `src/components/ContactForm.tsx` — Name/email/message form on gradient.
13. `src/components/Footer.tsx` — Widget columns + copyright + social icons.

### Phase 3: Design tokens
14. `src/index.css` — Tailwind `@theme` with:
    - `--color-brand-blue: #3e69fe`
    - `--color-brand-cyan: #4cd4e3`
    - `--color-body-text: #777777`
    - `--color-heading: #222222`
    - `--color-light-bg: #f9f9ff`
    - Font: Poppins via Google Fonts `<link>` in index.html

### Phase 4: Composition
15. `src/App.tsx` — Compose all sections in order.
16. `src/main.tsx` — Entry point (excluded from coverage).

### Phase 5: Testing (TDD)
17. Write tests for each component (Vitest + Testing Library).
18. Ensure 100% coverage on all lines/functions/branches/statements.
19. Test responsive behavior (hamburger menu toggle, column stacking).

### Phase 6: Verification
20. Run `npm run verify:app glider` (FAST_MODE per-app gate).
21. Verify: typecheck passes, lint passes, tests pass at 100%, build succeeds.
22. Self-review checklist from `docs/self-review.md`.

### Phase 7: Documentation
23. Update `TEMPLATES.md` — mark Bobsled as `[x]` with Glider link.
24. Commit as `feat: add Glider (ColorLib Bobsled) template`.
25. Open PR, merge immediately, verify deploy.

## Fidelity notes

- **Replace all images** with `https://picsum.photos/seed/glider-<n>/<w>/<h>` placeholders.
- **Replace icons** from Linearicons/Font Awesome with `lucide-react`.
- **Replace jQuery plugins** (Owl Carousel, Nice Select, Magnific Popup,
  AjaxChimp) with React equivalents or native implementations.
- **Replace custom dropdown** with native `<select>` for accessibility.
- **Footer attribution** must link `https://www.componentdock.com/` —
  replace "Designed by Colorlib" with "Made with Component Dock".
- **No ColorLib references** in any app file (comments, data, CSS notes).
- **Gradient body** — use Tailwind `bg-gradient-to-t from-[#3e69fe] to-[#4cd4e3]`
  or a custom CSS class in `@theme`.
- **Pill buttons** — use `rounded-full` Tailwind class (20px radius).
- **Gradient text** — use `bg-gradient-to-r from-[#3e69fe] to-[#4cd4e3]
  bg-clip-text text-transparent` Tailwind utilities.

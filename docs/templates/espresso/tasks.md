# Espresso (ColorLib Coffee) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-espresso`. Recreation name: **Espresso** (NEW name —
> the ColorLib source keeps its name "Coffee").

## Source mapping

- **ColorLib item:** "Coffee" (TEMPLATES.md line 1779; section "## Coffee (7)"
  at line 1777). The `wp/template/coffee/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/coffee/
- **Preview URL — REACHABLE (verified 2026-09-21 by direct fetch):**
  **`https://preview.colorlib.com/theme/coffee/`**
  (HTTP 200, 24,752 bytes).
- **Preview CSS:** `css/main.css` (50,396 bytes — all styles, Bootstrap-based).
  Fonts: Google Fonts `<link>` (Poppins). Icons: Font Awesome (replace with
  lucide-react). JS: Swiper, GLightbox, counter animation.

## Reference research (done — do not redo)

### Live preview DOM (fetched 2026-09-21)

Full HTML parsed from `https://preview.colorlib.com/theme/coffee/`.
Section order (7 sections + footer):

1. **Banner / Hero** (`#home`) — dark photo background (`header-bg.jpg`),
   full-viewport height, left-aligned. Tagline "Now you can feel the Energy",
   headline "Start your day with a black Coffee", gold pill "Buy Now" button.
2. **Video / About** (`video-sec-area`) — white background, video placeholder
   with play icon overlay, headline "Live Coffee making process.",
   sub-headline "We Telecast our Coffee Making Live", paragraph, signature
   image.
3. **Menu** (`#coffee`) — white, heading "What kind of Coffee we serve for
   you", 3×3 grid (8 items): Cappuccino, Americano, Espresso, Macchiato,
   Mocha, Coffee Latte, Piccolo Latte, Ristretto — each $49 with lorem
   description.
4. **Gallery** (`#gallery`) — asymmetric grid: col-4 (2 images stacked),
   col-8 (1 large + row of 2). 5 images total, GLightbox lightbox.
5. **Review** (`#review`) — 2 review cards: avatar, name, star rating (3/5,
   2/5), testimonial text. Below: counter row with 4 stats (Happy Client
   2536, Total Projects 7562, Cups Coffee 2013, Total Submitted 10536).
6. **Blog** (`#blog`) — 2 blog cards: image, tag pills (Travel, Life Style),
   title, excerpt, date (31st January, 2032).
7. **Footer** (`footer-area`) — dark photo background, 3 columns: About Us
   (description + copyright), Newsletter (email input + arrow submit button),
   Follow Us (Facebook, Twitter, Dribbble, Behance social icons).

### Design tokens extracted from CSS

| Token | Value | Usage |
|-------|-------|-------|
| Brand gold | `#b68834` | Primary button bg, click-btn bg |
| Dark bg | `#191919` | Footer area background-color |
| White | `#fff` | Content sections, banner text |
| Off-white | `#f9f9ff` / `#f9fafc` | Alternating section tints |
| Font family | Poppins, sans-serif | All text |
| Button radius | 25px (pill) | `.primary-btn` |
| Button padding | 30px left, 60px right | Asymmetric pill |
| Section gap | 120px vertical padding | `.section-gap` |
| Banner text | 60px, weight 600, line-height 1em | `.banner-content h1` |
| Footer bg | photo (`footer-bg.jpg`) | Dark overlay with white text |
| Counter section | dark background | Counter row in review area |

### Screenshot (colorlib-free-template.jpg, viewed via CSS/HTML analysis)

The screenshot shows a dark, moody coffee-shop aesthetic with a full-screen
hero featuring coffee imagery, gold accent buttons, clean white content
sections with generous spacing, and a dark footer. The overall vibe is
warm, rustic-modern with a dark photo-heavy design.

## Tasks for implementer

### Phase 1: Scaffold

1. Copy simplest existing app as base (e.g. `apps/aurora` or another
   single-page landing).
2. Rename package to `@free-react-templates/espresso`.
3. Update `public/CNAME` to `espresso.free.componentdock.com`.
4. Update `vite.config.ts` with `injectUiSource()`.
5. Run `npm install` at repo root for lockfile registration.

### Phase 2: Components (section-by-section)

6. **Navbar** — fixed top, dark background, "Espresso" brand, links:
   Home, About, Coffee, Review, Blog. Hamburger toggle for mobile.
7. **Hero** — full-screen dark bg image, tagline h6, headline h1, gold
   pill "Buy Now" CTA button. Use picsum.photos seed `espresso-hero`.
8. **VideoSection** — two-column: left = video placeholder with play
   icon, right = headline + paragraph + signature image.
9. **MenuGrid** — section heading + subtitle, 8 menu items in 3-col
   grid. Each: name, price $49, description.
10. **Gallery** — asymmetric image grid (col-4 + col-8), 5 images,
    lightbox on click (use react-photoswipe-gallery or similar).
11. **ReviewSection** — section heading + subtitle, 2 review cards
    (avatar, name, stars, text), then counter row (4 stats).
12. **BlogSection** — section heading + subtitle, 2 blog cards (image,
    tags, title, excerpt, date).
13. **Footer** — dark bg image, 3 columns: About Us, Newsletter form,
    Follow Us social icons. Link to Component Dock.

### Phase 3: Styling & Polish

14. Apply design tokens in `index.css` `@theme` block:
    - `--color-brand: #b68834;`
    - Font: Poppins via Google Fonts link in `index.html`.
15. Ensure section-gap spacing (120px) between sections.
16. Make responsive: stacking columns on mobile, hamburger menu.
17. Accessibility: semantic HTML, aria-labels on interactive elements,
    focus-visible rings.

### Phase 4: Tests & Verification

18. Write Vitest + Testing Library tests for each component.
19. Ensure 100% line/function/branch/statement coverage.
20. Run `scripts/verify-app.sh espresso`.
21. Commit as `feat: add Espresso template (ColorLib Coffee recreation)`.

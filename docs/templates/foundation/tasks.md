# Foundation (ColorLib Wilcon) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-foundation`. Recreation name: **Foundation** (NEW name —
> the ColorLib source keeps its name "Wilcon").

## Source mapping

- **ColorLib item:** "Wilcon" (TEMPLATES.md line 1360; section "## Construction (29)" at line 1330).
  The `wp/template/wilcon/` slug appears TWICE in TEMPLATES.md: once at line 1205
  as `[x]` (implemented as "constructo") and once at line 1360 as `[ ]` in the
  Construction category section. This is a DUPLICATE entry — the same ColorLib
  template was already built. However, this prep covers the category-section
  entry as a standalone spec.
- **Source URL:** https://colorlib.com/wp/template/wilcon/
- **Preview URL — REACHABLE (verified 2026-09-16):**
  **`https://preview.colorlib.com/theme/wilcon/`**
  (HTTP 200, 55,329 bytes, Bootstrap 5 framework, `<title>Wilcon | Construction Company - Building Great Projects</title>`).
- **Preview CSS:** `css/style.css` (326,236 bytes — large Bootstrap 5 custom build)
  + `css/aos.css` (Animate on Scroll) + `css/swiper-bundle.min.css` (carousel)
  + `css/glightbox.min.css` (lightbox) + `css/flaticon.css` (icons).
  Font: Roboto 300/400/500 via Google Fonts `<link>` (Cloudflare hosted woff2).
  Icons: Font Awesome 4.7 + Flaticon — REPLACE with lucide-react, do not ship.
  Scripts: Bootstrap 5 bundle, AOS init, Swiper init, GLightbox init —
  replace AOS with Tailwind/IntersectionObserver, Swiper with custom React
  carousel, GLightbox with React lightbox or inline.

## Reference research (done — do not redo)

### Screenshot (`wilcon-free-template.jpg`)

The screenshot shows a construction company website with:
- Dark navy top bar with social icons and contact info
- Dark navbar with "Wilcon" logo, nav links, and orange "Inquire Now" CTA
- Large hero with construction site background image, dark overlay, "We Build
  Great Projects" white heading, and two CTA buttons (orange "Inquire Now" +
  outline "Our Services")
- 3-column stats row with icons and labels (Quality Construction, Professional
  Liability, Dedicated To Our Clients)
- About section with background image, heading, description, and video CTA
- Services intro with heading
- 3 service cards with background images (Architecture, Renovation, Construction)
  and "Request A Quote" buttons
- Full-width orange CTA banner ("Best Provider for Industrial Services")
- Projects gallery with 4 project cards
- Testimonials section
- Blog section with post cards
- Dark footer with 4 columns

### Design tokens (live stylesheet + rendered page, verified 2026-09-16)

| Token         | Value               | Use                                                           |
| ------------- | ------------------- | ------------------------------------------------------------- |
| Brand primary | `#fc5e28`           | Orange-red; hero CTAs, CTA banner, accent color (90 uses)     |
| Dark navy     | `#040e26`           | Navbar bg, footer bg, hero overlay, secondary sections (31 uses) |
| White         | `#fff`              | Text on dark bg, card backgrounds (112 uses)                  |
| Light gray    | `#f8f9fa`           | Alternating section bg (`bg-light`)                           |
| Body text     | `#212529`           | Default text color (Bootstrap default)                        |
| Muted text    | `#6c757d`           | Secondary/muted text                                          |
| Font          | Roboto 300/400/500  | Google Fonts `<link>`; body 16px/1.5                          |
| Button radius | ~0.375rem (3px)     | Bootstrap `--bs-border-radius-lg`; use `rounded` in TW       |
| Hero height   | 700px               | Full-width bg image with dark overlay                         |
| Navbar        | `#040e26` bg        | Dark navy, white text, fixed/sticky                           |
| CTA bar       | `#fc5e28` bg        | Full-width orange banner                                      |
| Footer        | `#040e26` bg        | Dark navy, 4-column grid, white text                          |
| Card style    | White bg, subtle shadow, no visible border-radius on content cards |

### Section-by-section fidelity notes

1. **TopBar**: Simple bar with social icons left, contact info right. Use
   lucide-react icons (Facebook → ExternalLink or similar). Light gray or
   dark navy bg.

2. **Navbar**: Dark navy (`#040e26`) bg. Logo text "Foundation" left. Nav
   links center/right. "Inquire Now" orange button right. Mobile: hamburger
   menu. Use `packages/ui` Navbar pattern if available, else build fresh.

3. **Hero**: 700px height, background image (use `picsum.photos/seed/foundation-hero/1920/700`),
   dark overlay (opacity ~0.5), white text. Main heading "We Build Great Projects".
   Two CTA buttons: orange filled "Inquire Now" + white outline "Our Services".

4. **Stats**: 3-column grid. Each stat has an icon (use lucide-react),
   a label, and possibly a counter number. White or light bg.

5. **About**: Split layout — text left, background image right. Heading
   "Foundation A Construction Company". Description paragraph. "Watch video"
   link with play icon. Background image: `picsum.photos/seed/foundation-about/800/600`.

6. **Services intro**: Centered heading "Providing Personalized and High
   Quality Services" + description. Light bg.

7. **Services cards**: 3-column grid. Each card has a background image
   (`picsum.photos/seed/foundation-svc-{1,2,3}/600/400`), dark overlay,
   title, and "Request A Quote" button. Services: Architecture, Renovation,
   Construction.

8. **CTA banner**: Full-width orange (`#fc5e28`) bg. Centered heading
   "Best Provider for Industrial Services" + description. White text.

9. **Projects gallery**: "Latest Projects" heading. 4 project cards in
   a 2x2 or 4-column grid. Each has a background image, title "Building
   A Condominium", and "Read more" link. Use `picsum.photos/seed/foundation-proj-{1,2,3,4}/600/400`.

10. **Testimonials**: Heading about client reviews. Slider/card with
    testimonial text, client name, and possibly avatar. Use a simple
    auto-rotating carousel (no heavy dependency).

11. **Blog**: "Latest Blog Updates" heading. Blog post cards with image,
    title, date, and "Read more" link. 3-column grid.

12. **Footer**: Dark navy bg. 4-column grid: About (logo + description +
    social icons), Links, Services, Contact. Copyright bar at bottom
    with "Component Dock" link to `https://www.componentdock.com/`.

### Implementation task order

1. Scaffold `apps/foundation/` (copy simplest existing app, rename package)
2. Set up `index.css` with Tailwind theme tokens (`--color-brand: #fc5e28`,
   `--color-navy: #040e26`)
3. Add Google Fonts `<link>` for Roboto to `index.html`
4. Build components top-down: TopBar → Navbar → Hero → Stats → About →
   ServicesIntro → ServicesCards → CtaBanner → ProjectsGallery →
   Testimonials → Blog → Footer
5. Compose in `App.tsx`
6. Tests (Vitest + Testing Library, 100% coverage)
7. Verify: `scripts/verify-app.sh foundation`
8. Commit, push, PR, merge

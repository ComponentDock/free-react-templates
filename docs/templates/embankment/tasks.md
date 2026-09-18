# Embankment (ColorLib Builder) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-embankment`. Recreation name: **Embankment** (NEW
> name — the ColorLib source keeps its name "Builder").

## Source mapping

- **ColorLib item:** "Builder" (TEMPLATES.md line 1338; section
  "## Construction (13)" at line 1332).
- **Source URL:** https://colorlib.com/wp/template/builder/
- **Preview URL — REACHABLE (verified 2026-09-16 by direct fetch):**
  **`https://preview.colorlib.com/theme/builder/`**
  (HTTP 200, 489 lines of HTML).
- **Preview CSS:** `css/style.css` (3,551 lines — includes Bootstrap 4 +
  custom template styles). Fonts loaded via Google Fonts: Oswald (300–700),
  Roboto (300–700), Poppins (300–700). Additional: Font Awesome (social
  icons), Linecons (feature icons), Owl Carousel.

## Reference research (done — do not redo)

### Screenshot (builder-free-template.jpg)

Browsed visually in the browser 2026-09-16. The screenshot shows a
construction company landing page with:
- Thin top menu bar with social icons and a golden CTA button
- White navigation bar with logo and links
- Large hero banner with a construction/building image, centered white
  heading "Build Your Dream" with golden accent, and a dark CTA button
- Clean, professional construction industry aesthetic with dark + golden
  (#fab700) color scheme
- Overall design feels modern and polished with good use of whitespace

### Design tokens (live stylesheet + rendered page, verified 2026-09-16)

| Token            | Value                                         | CSS Source                                                            |
| ---------------- | --------------------------------------------- | --------------------------------------------------------------------- |
| Accent/brand     | `#fab700` (golden yellow)                     | Used throughout: active links, CTA bg, counter bg, team hover, buttons |
| Dark/ink         | `#222222`                                     | Headings, footer bg, CTA bg, nav links                                |
| Body text        | `#777777`                                     | Paragraph text, muted elements                                        |
| Border/divider   | `#eeeeee`                                     | Top menu border, feature card borders                                 |
| Social icons     | `#ccc` default, `#fab700` hover               | `.top_menu .header_social`                                            |
| Quote button     | bg `#fab700`, color `#fff`                    | `.top_menu .dn_btn`                                                   |
| Hero CTA         | bg `#222222`, color `#fab700`, radius 5px     | `.black_btn`                                                          |
| Hero heading     | `'Oswald'`, `#fff`, large size                | `.banner_content h3`                                                  |
| Hero subtitle    | `'Poppins'`, `#fff`                           | `.banner_content h5`                                                  |
| Heading font     | `'Oswald', sans-serif`                        | `.main_title h2`, service/project/feature headings                    |
| Body font        | `'Roboto', sans-serif`                        | body, paragraphs, form elements                                       |
| Accent font      | `'Poppins', sans-serif`                       | banner subtitle only                                                  |
| Service card     | white bg, radius 10px, padding 45px 55px      | `.services_item`                                                      |
| Service hover    | shadow `0 10px 30px rgba(0,0,0,0.1)`          | `.services_item:hover`                                                |
| Project grid     | 3-col (33.33%), no gutters                    | `.builder_inner .builder_item`                                        |
| Project hover    | centered text, opacity 0→1                    | `.builder_item .hover`                                                |
| Team hover       | `rgba(250,183,0,0.85)` overlay + social icons | `.team_img:before` + `.team_img .hover`                               |
| Counter bg       | `#fab700`, padding 115px 0                    | `.counter_area`                                                       |
| Counter numbers  | 48px Oswald 500, `#222222`                    | `.counter_item h4`                                                    |
| Feature card     | white, 1px `#eee` border, radius 10px         | `.feature_item`                                                       |
| Testimonials bg  | `#f9f9ff` (light purple-gray)                 | `.testimonials_area`                                                  |
| Testimonial layout| media: image left, text right                 | `.testi_item .media`                                                  |
| Footer bg        | `#222222`                                     | `.footer-area`                                                        |
| Footer heading   | 20px Oswald 500, `#fff`                       | `.footer_title`                                                       |
| Subscribe button | bg `#fab700`, color `#222222`, 36×36px        | `.sub-btn`                                                            |
| Hero height      | min-height 700px                              | `.home_banner_area`                                                   |
| Navbar fixed     | position fixed, top -70px, line-height 70px   | `.header_area.navbar_fixed`                                           |

### Section order (from live HTML, 1:1)

1. **Top menu** — `.top_menu` → social icons (FB, Twitter, Dribbble,
   Behance), language select, golden "Free Quote!" button
2. **Navbar** — `.main_menu` → logo image, nav links with two dropdowns
   (Pages: Projects/Elements; Blog: Blog/Blog Details), search icon
3. **Hero banner** — `.home_banner_area` → parallax bg image, overlay,
   centered "Build Your Dream" heading, subtitle, "Discover Now" CTA
4. **Services** — `.services_area` → 3 cards with icon PNGs: Building
   Drawings, Painting Constructions, Repairing Constructions
5. **Projects** — `.builder_area` → 6-item 3×2 grid with hover text
   overlay: "Alex Complex for Residence" repeated
6. **Team** — `.team_area` → 4 members (all "Ethel Davis, Managing
   Director (Sales)" in demo), golden hover overlay + social icons
7. **Counter** — `.counter_area` → 5 stats: 596 Projects Completed,
   552 Happy Clients, 5962 Total Tasks, 1009 Cups of Coffee, 435
   In House Professionals
8. **Features** — `.feature_area` → 6 items: Expert Technicians,
   Professional Service, Great Support, Technical Skills, Highly
   Recommended, Positive Reviews
9. **Testimonials** — `.testimonials_area` → carousel with avatar +
   quote + name + role, on #f9f9ff bg
10. **Client logos** — `.clients_logo_area` → 5 logo images in carousel
11. **Footer** — `.footer-area` → About Us, Contact Us, Newsletter
    (email input + golden submit), copyright + social icons

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph (Font Awesome / Linecons)     | Recreation                              |
| ------------------------------------------- | --------------------------------------- |
| `fa-facebook` / `fa-twitter` / etc.         | lucide `Facebook` / `Twitter` / etc.    |
| `fa-dribbble` / `fa-behance`                | lucide `Dribbble` / `Figma` (no Behance)|
| `fa-heart-o` (footer)                       | lucide `Heart`                          |
| `lnr-magnifier` (search)                    | lucide `Search`                         |
| `lnr-user` (Expert Technicians)             | lucide `User`                           |
| `lnr-license` (Professional Service)        | lucide `BadgeCheck`                     |
| `lnr-phone` (Great Support)                 | lucide `Phone`                          |
| `lnr-rocket` (Technical Skills)             | lucide `Rocket`                         |
| `lnr-diamond` (Highly Recommended)          | lucide `Diamond`                        |
| `lnr-bubble` (Positive Reviews)             | lucide `MessageSquare`                  |
| `lnr-arrow-right` (newsletter submit)       | lucide `ArrowRight`                     |
| service icons (PNG)                         | lucide `Hammer` / `PaintBucket` / `Wrench` |

### Picsum placeholder plan

| Placeholder                            | Size      | Use                          |
| -------------------------------------- | --------- | ---------------------------- |
| `picsum.photos/seed/embankment-hero`   | 1920×900  | Hero banner background       |
| `picsum.photos/seed/embankment-p1`     | 600×400   | Project 1 image              |
| `picsum.photos/seed/embankment-p2`     | 600×400   | Project 2 image              |
| `picsum.photos/seed/embankment-p3`     | 600×400   | Project 3 image              |
| `picsum.photos/seed/embankment-p4`     | 600×400   | Project 4 image              |
| `picsum.photos/seed/embankment-p5`     | 600×400   | Project 5 image              |
| `picsum.photos/seed/embankment-p6`     | 600×400   | Project 6 image              |
| `picsum.photos/seed/embankment-t1`     | 400×500   | Team member 1 photo          |
| `picsum.photos/seed/embankment-t2`     | 400×500   | Team member 2 photo          |
| `picsum.photos/seed/embankment-t3`     | 400×500   | Team member 3 photo          |
| `picsum.photos/seed/embankment-t4`     | 400×500   | Team member 4 photo          |
| `picsum.photos/seed/embankment-te1`    | 200×200   | Testimonial 1 avatar         |
| `picsum.photos/seed/embankment-te2`    | 200×200   | Testimonial 2 avatar         |
| `picsum.photos/seed/embankment-cl1`    | 200×80    | Client logo 1                |
| `picsum.photos/seed/embankment-cl2`    | 200×80    | Client logo 2                |
| `picsum.photos/seed/embankment-cl3`    | 200×80    | Client logo 3                |
| `picsum.photos/seed/embankment-cl4`    | 200×80    | Client logo 4                |
| `picsum.photos/seed/embankment-cl5`    | 200×80    | Client logo 5                |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/embankment` from the simplest existing app, rename
       package to `@free-react-templates/embankment`, add Oswald 400/500/700
       + Roboto 300/400/500 + Poppins 400 Google Fonts `<link>` in
       index.html, set `public/CNAME` = `embankment.free.componentdock.com`
       + `"homepage"`. Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): TopMenu (social icons, language selector, "Free Quote"
       golden button), Navbar (logo, 5 nav links with 2 dropdowns, search
       icon, scroll-to-fixed), HeroBanner (parallax bg, "Build Your Dream"
       heading with golden accent, subtitle, "Discover Now" dark CTA),
       Services (3 cards with icons, titles, descriptions, hover shadow),
       Projects (6-item grid, hover text overlay), Team (4 members, golden
       hover overlay with social icons), Counter (5 animated stats on
       golden bg), Features (6 cards with line icons, bordered), Testimonials
       (carousel with avatar + text), ClientLogos (grayscale carousel),
       Footer (3 columns + newsletter form + golden submit + Component Dock
       link), App (landmarks, document title "Embankment — Construction
       Company").
3. [ ] Layout shell + theme tokens in `index.css` (`@theme` block with
       `--color-accent: #fab700`, `--color-dark: #222222`, `--color-muted:
       #777777`, `--color-border: #eeeeee`, `--color-testimonial-bg:
       #f9f9ff`, etc.).
4. [ ] TopMenu component: thin bar, flex row, social icons (luceide), language
       select, golden "Free Quote!" button.
5. [ ] Navbar component: white bg, logo image, 5 nav links (2 with dropdown
       menus), search icon; scroll detection → fixed white bg with shadow;
       mobile hamburger collapse.
6. [ ] HeroBanner: full-width parallax bg (picsum), centered content
       ("Build Your Dream" with golden "Dream", subtitle, dark CTA button
       with golden text, radius 5px).
7. [ ] Services: 3 icon cards (lucide Hammer/PaintBucket/Wrench), title
       links, descriptions; hover shadow effect.
8. [ ] Projects: 3×2 grid of project images with hover text overlay
       (opacity transition, centered text).
9. [ ] Team: 4 member cards with photos, golden hover overlay
       (rgba(250,183,0,0.85)) + social icons on hover.
10. [ ] Counter: golden bg bar, 5 stat blocks with scroll-triggered count
        animation, Oswald 48px numbers.
11. [ ] Features: 6 bordered cards with lucide line icons + title +
        description in a 3-column grid.
12. [ ] Testimonials: carousel on #f9f9ff bg, media layout (avatar left,
        text right), simple CSS/JS carousel.
13. [ ] ClientLogos: grayscale logo row in carousel, brighten on hover.
14. [ ] Footer: dark bg, 3 columns (About Us, Contact Us, Newsletter with
        email + golden submit), copyright with Component Dock link.
15. [ ] Run `npm run verify:app -- embankment` (typecheck → lint → vitest
        100% → build) and fix until green.
16. [ ] Open PR `feat/template-embankment` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (golden #fab700,
        dark #222222, Oswald + Roboto + Poppins, 5px radius CTA, 10px
        radius cards, golden team hover, #f9f9ff testimonials), and what
        differs (renamed "Embankment", Google Fonts, lucide icons, picsum
        placeholders, Component Dock footer).
17. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1338 `[x]` + surge
        URL (`https://embankment.free.componentdock.com`), `npm run
        readme:status`, push.

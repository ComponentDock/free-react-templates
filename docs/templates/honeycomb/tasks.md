# Honeycomb (ColorLib Bee) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-honeycomb`. Recreation name: **Honeycomb** (NEW name
> — the ColorLib source keeps its name "Bee").

## Source mapping

- **ColorLib item:** "Bee" (TEMPLATES.md line 1335; section
  "## Construction (13)" at line 1332).
- **Source URL:** https://colorlib.com/wp/template/bee/
- **Preview URL — REACHABLE (verified 2026-09-16 by direct fetch):**
  **`https://preview.colorlib.com/theme/bee/`**
  (HTTP 200, 812 lines of HTML).
- **Preview CSS:** `css/style.css` (3,324 lines — includes Bootstrap 4 +
  custom template styles). Fonts loaded via inline `@font-face`: Poppins
  (300–900) + Nunito Sans (200–900). Additional stylesheets: bootstrap,
  animate.css, owl.carousel, magnific-popup, AOS, ionicons, flaticon,
  icomoon — most are for animation/icon effects, not core layout.

## Reference research (done — do not redo)

### Screenshot (bee-free-template.jpg)

Browsed visually in the browser 2026-09-16. The screenshot shows a
construction company landing page with:
- Dark navy top info bar with amber circular icons and a pill CTA button
- Bright blue navigation bar with white links
- Full-width hero with a construction building image and large heading text
  on the right side with a "Request A Quote" button
- Below the hero: a form on the left overlapping the hero area, and an
  "About" text section on the right
- Clean, professional construction industry aesthetic with blue/amber/navy
  color scheme

### Design tokens (live stylesheet + rendered page, verified 2026-09-16)

| Token          | Value                                         | CSS Source                                                              |
| -------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| Top bar bg     | `#022d5d` (dark navy)                         | `.bg-top { background: #022d5d; }`                                      |
| Navbar bg      | `#1683fb` (bright blue)                       | `.ftco-navbar-light { background: #1683fb !important; }`                |
| Navbar mobile  | `#000000` (black)                             | `@media (max-width: 991.98px) { background: #000 !important; }`         |
| Active link    | `#fda729` (golden amber)                      | `.nav-item.active > a { color: #fda729; }`                              |
| Topper icon    | `#fda729`, 40×40px, radius 50%               | `.topper .icon { background: #fda729; border-radius: 50%; }`            |
| Topper text    | `rgba(255,255,255,0.7)`                       | `.topper .text { color: rgba(255,255,255,0.7); }`                       |
| Brand text     | `#fff`, weight 900, size 28px                 | `.navbar-brand { font-weight: 900; font-size: 28px; color: #fff; }`    |
| Brand span     | `#fda729`                                     | `.navbar-brand span { color: #fda729; }`                                |
| Button primary | `#007bff`                                     | Bootstrap `.btn-primary`                                                 |
| Button pill    | border-radius 50px                            | `.topper .btn { border-radius: 50px; }`                                 |
| Search form    | radius 30px, 1px solid rgba(255,255,255,0.1) | `.searchform { border-radius: 30px; }`                                  |
| Quote header   | `#007bff` (bg-primary)                        | `.request-quote .bg-primary { background: #007bff; }`                   |
| Quote subhead  | `#fda729`                                     | Override via `.request-quote .subheading`                                |
| Slider overlay | `#fff` at 0.4 opacity, right 50%             | `.home-slider .slider-item .overlay`                                     |
| Dark overlay   | `#000` at 0.3 opacity                         | `.hero-wrap .overlay`, `.ftco-intro .overlay`                           |
| Services bg    | transparent                                   | `.ftco-services { padding: 0 0 5em 0; }`                                |
| Service icon   | 60×60px circle, ring decoration               | `.services .icon` with `:before`/`:after` pseudo-elements               |
| Services-2 #1  | `rgba(0,0,0,0.05)`                            | `.services-2:nth-child(1) { background: rgba(0,0,0,0.05); }`           |
| Services-2 #2  | `#fda729` (golden)                            | `.services-2:nth-child(2) { background: #fda729; }`                     |
| Services-2 #3  | `#000000` (black)                             | `.services-2:nth-child(3) { background: black; }`                       |
| Services-2 #3 text | `rgba(255,255,255,0.8)`                   | `.services-2:nth-child(3) .text { color: rgba(255,255,255,0.8); }`     |
| CTA section    | bg image + dark overlay, 8em padding          | `.ftco-intro { padding: 8em 0; }`                                       |
| Counter section| bg image + overlay, 4em padding, Nunito Sans  | `.ftco-counter { font-family: "Nunito Sans"; padding: 4em 0; }`         |
| Staff cards    | overflow hidden, 30px margin-bottom           | `.staff { overflow: hidden; margin-bottom: 30px; }`                     |
| Staff hover    | social icons + image scale                    | `.staff:hover .faded { opacity: 1; }`                                   |
| Project grid   | 4 columns, no gutters                         | `.row.no-gutters` in projects section                                   |
| Blog bg        | `#fafafa`                                     | `.bg-light { background: #fafafa !important; }`                         |
| Blog date badge| Absolute positioned, bg-colored               | `.meta-date` overlay on blog image                                       |
| Footer bg      | `#343a40`                                     | `.ftco-footer.ftco-bg-dark { background: #343a40; }`                    |
| Footer heading | `#fff`, 22px                                  | `.ftco-heading-2 { color: #fff; font-size: 22px; }`                     |
| Heading font   | `'Poppins', Arial, sans-serif`                | `body { font-family: "Poppins", Arial, sans-serif; }`                   |
| Counter font   | `'Nunito Sans', Arial, sans-serif`            | `.ftco-counter { font-family: "Nunito Sans"; }`                         |

### Section order (from live HTML, 1:1)

1. **Top info bar** — `.bg-top` → dark navy bar with email icon, phone icon,
   and "Request A Quote" pill button
2. **Navbar** — `.ftco-navbar-light` → blue bg, brand "Honeycomb" with bee
   icon, nav links (Home, About, Project, Blog, Contact), search form
3. **Hero slider** — `.home-slider.owl-carousel` → 2 slides with parallax
   background images, white right-side overlay, heading + subtext + CTA
4. **Quote form + About** — `.ftco-section.ftco-no-pt.ftco-margin-top` →
   split: left = request-quote form (amber header), right = about text
5. **Services** — `.ftco-services` → 4 icon+text cards (Construction,
   House Renovation, Painting, Architecture Design)
6. **CTA parallax** — `.ftco-intro` → bg image + overlay, "Lets Build Your
   Dream Together" heading + "Know more about us" button
7. **Team** — `.ftco-section` → 4 staff cards (photo, name, position,
   social icons on hover)
8. **Featured Projects** — `.ftco-section.ftco-no-pt.ftco-no-pb` → 4×2 grid
   of project images with category + name overlay + zoom icon
9. **Stats counter** — `.ftco-counter` → 4 animated numbers (30, 1500, 100,
   300) over parallax bg image
10. **Services + Testimonials** — `.testimony-section` → left: 3 service-
    feature cards (gray/amber/black); right: testimonial carousel with
    quote text + circular user photo
11. **Blog** — `.ftco-section.bg-light` → 3 blog cards with date badge,
    title, excerpt, "Read More" button, author + comment count
12. **Footer** — `.ftco-footer.ftco-bg-dark` → 4 columns: logo+social,
    services list, recent blog, newsletter form; copyright + Component Dock

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph (flaticon/icomoon)           | Recreation                              |
| ----------------------------------------- | --------------------------------------- |
| `flaticon-bee` (brand)                    | lucide `Hexagon` or `Flower2`           |
| `icon-paper-plane` (email)                | lucide `Mail`                           |
| `icon-phone2` (phone)                     | lucide `Phone`                          |
| `ion-ios-search` (search)                 | lucide `Search`                         |
| `flaticon-hook` (construction)            | lucide `Hammer`                         |
| `flaticon-skyline` (renovation)           | lucide `Building2`                      |
| `flaticon-stairs` (painting)              | lucide `PaintBucket`                    |
| `flaticon-home` (architecture)            | lucide `Home`                           |
| `flaticon-engineer` (expert)              | lucide `HardHat`                        |
| `flaticon-engineer-1` (quality)           | lucide `Award`                          |
| `flaticon-engineer-2` (support)           | lucide `Headphones`                     |
| `icon-quote-left` (testimonial)           | lucide `Quote`                          |
| `icon-expand` (project zoom)              | lucide `Maximize2`                      |
| `icon-twitter/facebook/instagram`         | lucide `Twitter`/`Facebook`/`Instagram` |
| `icon-calendar/person/chat` (blog meta)   | lucide `Calendar`/`User`/`MessageCircle`|
| `icon-heart` (footer)                     | lucide `Heart`                          |
| `ion-ios-arrow-round-forward` (links)     | lucide `ArrowRight`                     |

### Picsum placeholder plan

| Placeholder                        | Size      | Use                          |
| ---------------------------------- | --------- | ---------------------------- |
| `picsum.photos/seed/honeycomb-bg1` | 1920×1080 | Hero slide 1 background      |
| `picsum.photos/seed/honeycomb-bg2` | 1920×1080 | Hero slide 2 background      |
| `picsum.photos/seed/honeycomb-cta` | 1920×800  | CTA parallax + counter bg    |
| `picsum.photos/seed/honeycomb-t1`  | 400×500   | Team member 1 photo          |
| `picsum.photos/seed/honeycomb-t2`  | 400×500   | Team member 2 photo          |
| `picsum.photos/seed/honeycomb-t3`  | 400×500   | Team member 3 photo          |
| `picsum.photos/seed/honeycomb-t4`  | 400×500   | Team member 4 photo          |
| `picsum.photos/seed/honeycomb-p1`  | 600×400   | Project 1 image              |
| `picsum.photos/seed/honeycomb-p2`  | 600×400   | Project 2 image              |
| `picsum.photos/seed/honeycomb-p3`  | 600×400   | Project 3 image              |
| `picsum.photos/seed/honeycomb-p4`  | 600×400   | Project 4 image              |
| `picsum.photos/seed/honeycomb-p5`  | 600×400   | Project 5 image              |
| `picsum.photos/seed/honeycomb-p6`  | 600×400   | Project 6 image              |
| `picsum.photos/seed/honeycomb-p7`  | 600×400   | Project 7 image              |
| `picsum.photos/seed/honeycomb-p8`  | 600×400   | Project 8 image              |
| `picsum.photos/seed/honeycomb-b1`  | 600×400   | Blog post 1 image            |
| `picsum.photos/seed/honeycomb-b2`  | 600×400   | Blog post 2 image            |
| `picsum.photos/seed/honeycomb-b3`  | 600×400   | Blog post 3 image            |
| `picsum.photos/seed/honeycomb-te1` | 200×200   | Testimonial 1 circular photo |
| `picsum.photos/seed/honeycomb-te2` | 200×200   | Testimonial 2 circular photo |
| `picsum.photos/seed/honeycomb-te3` | 200×200   | Testimonial 3 circular photo |
| `picsum.photos/seed/honeycomb-te4` | 200×200   | Testimonial 4 circular photo |
| `picsum.photos/seed/honeycomb-te5` | 200×200   | Testimonial 5 circular photo |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/honeycomb` from the simplest existing app, rename
       package to `@free-react-templates/honeycomb`, add Poppins 300–900 +
       Nunito Sans 400/600/700 Google Fonts `<link>` in index.html, set
       `public/CNAME` = `honeycomb.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): TopBar (email + phone icons, quote button), Navbar
       (brand, 5 nav links, search form, scroll-to-fixed behavior), HeroSlider
       (2 slides, parallax bg, overlay, heading, CTA), QuoteForm (5 fields +
       dropdown + submit), AboutSection (heading + text + Read More button),
       Services (4 cards with icons), CTASection (bg image, overlay,
       heading, button), Team (4 members with social icons on hover),
       Projects (8 cards with hover zoom), StatsCounter (4 animated numbers
       on scroll), ServicesFlow (3 colored cards), TestimonialCarousel
       (quotes + user photos), Blog (3 posts with date badge + meta),
       Footer (4 columns, newsletter form, Component Dock link), App
       (landmarks, document title "Honeycomb — Construction Company").
3. [ ] Layout shell + theme tokens in `index.css` (`@theme` block with
       `--color-brand-navy: #022d5d`, `--color-brand-blue: #1683fb`,
       `--color-brand-amber: #fda729`, `--color-brand-dark: #343a40`,
       etc.).
4. [ ] TopBar component: dark navy bg, flex row, amber circular icons,
       email + phone text, pill-shaped "Request A Quote" button.
5. [ ] Navbar component: blue bg, brand with hex/flower icon, 5 nav links,
       search form with rounded border; scroll detection → fixed white bg
       with shadow; mobile hamburger collapse.
6. [ ] HeroSlider: 2 slides with picsum backgrounds, white right-half
       overlay (50% width, 0.4 opacity), heading + subtext + CTA button
       in right column; implement as simple fade or CSS-only slide.
7. [ ] QuoteForm + About split: negative margin overlap on hero, form
       with amber header block, 5 inputs + dropdown + submit; about text
       on right with heading + paragraph + "Read More" CTA.
8. [ ] Services: 4 icon cards with lucide icons, circular icon containers
       with ring decoration (or simplified circle bg), title + description.
9. [ ] CTA parallax section: bg image + dark overlay, centered heading +
       subtext + "Know more about us" button.
10. [ ] Team: 4 staff cards, picsum photos, name + position, social icons
        that fade in on hover.
11. [ ] Projects: 4×2 no-gutters grid, image + category label + title
        overlay + zoom icon on hover.
12. [ ] StatsCounter: 4 stat blocks, IntersectionObserver-triggered count
        animation, parallax bg + overlay.
13. [ ] ServicesFlow + TestimonialCarousel: left column with 3 stacked
        service cards (gray/amber/black backgrounds), right column with
        owl-carousel-style testimonial slider (use simple CSS/JS carousel).
14. [ ] Blog: 3 cards on light bg, date badge overlay on image, title +
        excerpt + "Read More" button + author/comment meta.
15. [ ] Footer: dark bg, 4 columns (logo+social, services list, recent
        blog, newsletter form), copyright with Component Dock link.
16. [ ] Run `npm run verify:app -- honeycomb` (typecheck → lint → vitest
        100% → build) and fix until green.
17. [ ] Open PR `feat/template-honeycomb` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (navy #022d5d,
        blue #1683fb, amber #fda729, dark #343a40, Poppins + Nunito Sans,
        pill buttons, circular icons, parallax overlays), and what differs
        (renamed "Honeycomb", Google Fonts, lucide icons, picsum
        placeholders, Component Dock footer).
18. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1335 `[x]` + surge
        URL (`https://honeycomb.free.componentdock.com`), `npm run
        readme:status`, push.

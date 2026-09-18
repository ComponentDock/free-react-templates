# Timepiece (ColorLib Watch) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-timepiece`. Recreation name: **Timepiece** (NEW name —
> the ColorLib source keeps its name "Watch").

## Source mapping

- **ColorLib item:** "Watch" (TEMPLATES.md line 1226; first `- [ ]` item).
- **Source URL:** https://colorlib.com/wp/template/watch/
- **Preview URL — REACHABLE (verified 2026-09-15 by direct fetch):**
  `https://preview.colorlib.com/theme/watch/` (HTTP 200, 29,352 bytes).
- **Preview CSS:** `css/main.css` (36,534 bytes — all custom styles on top
  of Bootstrap). Other stylesheets: linearicons.css, font-awesome.min.css,
  bootstrap.css, magnific-popup.css, nice-select.css, animate.min.css,
  owl.carousel.css.
- **Fonts:** Poppins (Google Fonts via Cloudflare CDN, weights 100-700).
  Body base: 14px, weight 300, color `#777777`. Headings: weight 600,
  color `#222222`.

## Reference research (done — do not redo)

### Live DOM structure (from fetched HTML + CSS, verified 2026-09-15)

Section order from the source (the recreation MUST match 1:1):

1. **Header/Navbar** — sticky, logo image + nav links (Home, About, Service,
   Unique Feature, Review, Faq; omit Pages dropdown)
2. **Banner Area (Hero)** — full-screen (`100vh`, capped 800px at ≤1199px),
   background image (`header-bg.png`) with `background-size: cover`, overlay,
   subtitle "Now you can feel the Heat" (white, uppercase), heading "Smart New
   Future", white "Buy Now" pill button
3. **Video/About Section** — two-column: left text (subtitle + heading +
   paragraphs + dark "Get Started now" button `#222` bg), right video
   thumbnail with play button overlay (magnific-popup → use lightbox or modal)
4. **Top Courses (Features Grid)** — centered heading + subtitle, 3-column
   layout: left 2 features, center product image, right 2 features. Each
   feature: icon + "High Performance" heading + paragraph. Bg `#f9f9ff`.
5. **Home About (Split Section)** — full-bleed: left image, right text
   ("Globally Connected by Large Network" + paragraphs + "get details" CTA).
6. **Service Grid** — heading + subtitle, 3×2 grid: Expert Technicians,
   Professional Service, Great Support, Technical Skills, Highly Recommended,
   Positive Reviews. Each: icon + heading + paragraph.
7. **Unique Feature (Product Showcase)** — dark bg `#191919`, white text,
   4 product cards: image + "Apple Watch White" + "£399.00" + "Pre Order"
   gradient button. Hover: image scale + gradient overlay.
8. **Reviews Grid** — heading + subtitle, 3×2 grid: 6 review cards with
   name, paragraph, star ratings (1-5, brand blue filled).
9. **FAQ Accordion** — heading + subtitle, Bootstrap accordion with 4 items,
   first expanded by default. Active header gets brand gradient bg.
10. **Footer** — 3 columns: About Us (Component Dock credit), Newsletter
    (email input + submit), Follow Us (social icons: Facebook, Twitter,
    Dribbble, Behance).

### Design tokens (live stylesheet, verified 2026-09-15)

| Token       | Value                                      | Use                                                                                      |
| ----------- | ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Brand       | `#235ee7`                                  | Primary blue — gradient start, FAQ active, star color, accent                            |
| Brand light | `#4ae7fa`                                  | Gradient end — blue-to-cyan diagonal gradient                                           |
| Teal        | `#4cd3e3`                                  | Service icons, unique-feature hover overlays                                             |
| Sky         | `#38a4ff`                                  | Review section accent                                                                    |
| Dark        | `#191919`                                  | Unique-feature section background                                                        |
| Ink         | `#222222`                                  | Heading text color                                                                       |
| Body        | `#777777`                                  | Paragraph/body text color                                                                |
| Bg alt      | `#f9f9ff`                                  | Top-course section background (light lavender)                                           |
| Bg          | `#fff`                                     | Default section backgrounds                                                              |
| Star filled | `#235ee7`                                  | Filled star color (matches brand)                                                        |
| Font        | 'Poppins', sans-serif                      | Google Fonts 300/400/500/600/700; body 14px/1.6 weight 300; headings 600                 |
| Btn radius  | `25px`                                     | Primary button border-radius (pill)                                                      |
| Btn gradient| `linear-gradient(0deg, #235ee7, #4ae7fa)` | Primary button background                                                                |
| Section gap | `100px 0 70px 0`                           | `.section-padding`                                                                       |
| Hero height | `100vh` (fullscreen)                       | Banner `.fullscreen` with `min-height: 100vh`; ≤1199px caps at 800px                     |

### Icon mapping (Linearicons → lucide)

| Source glyph (lnr)        | Recreation        |
| ------------------------- | ----------------- |
| `lnr-rocket`              | lucide `Rocket`   |
| `lnr-cog`                 | lucide `Settings` |
| `lnr-apartment`           | lucide `Building` |
| `lnr-phone`               | lucide `Phone`    |
| `lnr-user`                | lucide `User`     |
| `lnr-license`             | lucide `Award`    |
| `lnr-diamond`             | lucide `Gem`      |
| `lnr-bubble`              | lucide `MessageCircle` |

Font Awesome stars → lucide `Star` (filled via fill prop, empty = stroke only).

### Picsum placeholder plan

| Section       | Seed pattern                           | Size         | Notes                                  |
| ------------- | -------------------------------------- | ------------ | -------------------------------------- |
| Hero bg       | `picsum.photos/seed/timepiece-hero/1920/1080` | 1920×1080    | Full-screen hero background            |
| Video thumb   | `picsum.photos/seed/timepiece-video/600/400`  | 600×400      | Video section thumbnail               |
| Feature img   | `picsum.photos/seed/timepiece-feature/500/600` | 500×600      | Center image in Top Courses grid      |
| About img     | `picsum.photos/seed/timepiece-about/800/600`  | 800×600      | Left column of split about section     |
| Product 1-4   | `picsum.photos/seed/timepiece-watch-{1-4}/400/400` | 400×400 | Unique Feature product cards           |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/timepiece` from the simplest existing app, rename
       package to `@free-react-templates/timepiece`, add Poppins
       300/400/500/600/700 Google Fonts `<link>` in index.html, set
       `public/CNAME` = `timepiece.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (sticky, nav links, smooth scroll),
       Hero (background image, overlay, subtitle, heading, CTA button,
       full height), VideoSection (two-column, text + video thumbnail),
       FeaturesGrid (heading, 3-column layout, 4 feature items + center
       image), AboutSection (split layout, image left, text right),
       ServiceGrid (6 cards with icons, headings, descriptions),
       ProductShowcase (dark bg, 4 product cards, hover effects),
       ReviewsGrid (6 cards with star ratings), FAQAccordion (4 items,
       expand/collapse, first open by default), Footer (3 columns,
       newsletter form, social links, Component Dock credit).
3. [ ] Layout shell: Tailwind theme tokens in `index.css` (`@theme`
       directive for brand colors), Poppins font, basic section spacing.
4. [ ] Navbar: sticky header, logo, nav links with smooth scroll, mobile
       hamburger menu (responsive).
5. [ ] Hero banner: full-screen background image with dark overlay
       (`bg-black/60`), subtitle, heading, white pill CTA button.
6. [ ] Video/About section: two-column layout, text content left, video
       thumbnail with play button right.
7. [ ] Features grid: centered heading, 3-column layout with feature
       items flanking a center image, light lavender background.
8. [ ] Split about section: full-bleed two-column, image left, text
       right with CTA.
9. [ ] Service grid: 3×2 responsive grid with lucide icons, headings,
       descriptions.
10. [ ] Product showcase: dark `#191919` bg, 4 product cards with images,
        titles, prices, gradient buttons, hover effects.
11. [ ] Reviews grid: 3×2 responsive grid with star ratings (lucide
        Star, filled/empty).
12. [ ] FAQ accordion: expandable/collapsible items, first open by
        default, gradient active header.
13. [ ] Footer: 3-column layout, About/Newsletter/Social, Component Dock
        credit replacing Colorlib attribution.
14. [ ] Run `npm run verify:app -- timepiece` (typecheck → lint → vitest
        100% → build) and fix until green.
15. [ ] Open PR `feat/template-timepiece` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (brand `#235ee7`,
        gradient `#235ee7`→`#4ae7fa`, dark `#191919`, Poppins, 25px pill
        buttons, star ratings), and what differs (renamed "Timepiece",
        Poppins via Google Fonts, lucide icons replacing Linearicons +
        Font Awesome, picsum placeholders for all images, Component Dock
        footer).
16. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1226 `[x]` + surge
        URL (`https://timepiece.free.componentdock.com`), `npm run
        readme:status`, push.

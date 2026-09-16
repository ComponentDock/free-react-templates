# TopForge (ColorLib Topbuilder) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-topforge`. Recreation name: **TopForge** (NEW name —
> the ColorLib source keeps its name "Topbuilder").

## Source mapping

- **ColorLib item:** "Topbuilder" (TEMPLATES.md line 1357; first unchecked
  item after the last `[~]` claim).
- **Source URL:** https://colorlib.com/wp/template/topbuilder/
- **Preview URL — REACHABLE (verified 2026-09-16 by direct fetch):**
  **`https://preview.colorlib.com/theme/topbuilder/`** (HTTP 200, 45,822 bytes,
  `<title>Topbuilder Construction Template</title>`).
- **Preview CSS:** `css/style.css` (68,476 bytes) — all custom styles.
  Also loads: `css/bootstrap.min.css` (Bootstrap 3), `vendors/animate/animate.css`,
  `vendors/font-awesome/css/font-awesome.min.css`, `vendors/camera-slider/camera.css`,
  `vendors/owl_carousel/owl.carousel.css`.
- **Screenshot:** `topbuilder-construction-company-website-template.jpg` (155 KB).
- **Font:** Roboto (Google Fonts — 2 references in style.css).
- **Icons:** Font Awesome 4 (replace with lucide-react).

## Reference research (done — do not redo)

### Screenshot analysis

Construction company template with:
- Dark header bar with phone/email/hours + social icons
- Full-width hero slider with dark overlay, white "Welcome to our" text, bold
  ALL-CAPS heading, paragraph, and "Read More" link
- 4-column icon row (Professional Builder, We Deliver Quality, Always On Time,
  We Are Pasionate) on white background
- About Us section on light grey background with "WHO WE ARE" heading + image
- 3-column "What We Offer" cards with images
- "Our Features" 2-column split (image left, checklist right)
- Portfolio filter tabs + masonry gallery
- 4-member team grid with social hover
- Dark parallax counter section (800, 230, 1390, 125)
- Testimonials carousel
- Featured works dark gallery
- 3-column blog cards
- Partners logo carousel + yellow booking CTA strip
- Dark 4-column footer

### Design tokens (from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#f6b60b` | Golden yellow — 22 background refs, 46 color refs |
| Dark BG 1 | `#222222` | Parallax sections, footer |
| Dark BG 2 | `#111f29` | Counter section, footer |
| Dark BG 3 | `#333333` | Navbar, secondary dark |
| Light BG 1 | `#f5f5f5` | About Us, Team sections |
| Light BG 2 | `#f7f7f7` | Features section |
| White | `#fff` / `#fefefe` | Content areas, cards |
| Text dark | `#222222` | Headings |
| Text body | `#555555` | Body copy |
| Text muted | `#888888` | Secondary |
| Font | `"Roboto", sans-serif` | All text |
| Button radius | `0` | Rectangular buttons, brand yellow bg |
| Social icons | `border-radius: 50%` | Circular |
| Counter section | `data-stellar-background-ratio="0.3"` | Parallax via Stellar.js |
| Featured works | `data-stellar-background-ratio="0.3"` | Parallax via Stellar.js |

### Section order (from preview HTML)

1. `top_header_area` — utility bar (phone, email, hours, social icons)
2. `slider_area` — full-width hero slider (camera slider)
3. `professional_builder` — 4-column icon row
4. `about_us_area` — 7/5 text + image split
5. `what_we_area` — 3-column "What We Offer" cards
6. `our_feature_area` — 2-column features (image + checklist)
7. `our_services_area` — tabbed portfolio filter + 8-item gallery
8. `our_team_area` — 4-member grid with social hover
9. `our_achievments_area` — dark parallax counters
10. `testimonial_area` — testimonial carousel
11. `featured_works` — dark parallax gallery
12. `latest_blog_area` — 3-column blog cards
13. `our_partners_area` — partner logos + booking CTA strip
14. `footer_area` — 4-column footer

## Implementation notes for implementer

### Component structure

```
src/
  App.tsx              — compose all sections in order
  components/
    TopHeader.tsx      — utility bar (phone, email, hours, social icons)
    HeroSlider.tsx     — full-width hero with auto-advance (use Framer Motion or CSS)
    ProfessionalBuilder.tsx — 4-column icon row
    AboutUs.tsx        — 7/5 split with "Contact Now" CTA
    WhatWeOffer.tsx    — 3-column image cards
    OurFeatures.tsx    — 2-column split (image + checklist items)
    PortfolioFilter.tsx — tabbed filter + masonry gallery (8 items)
    TeamGrid.tsx       — 4-member cards with hover social icons
    Achievements.tsx   — dark parallax counters (animate on scroll)
    Testimonials.tsx   — carousel with avatar + quote
    FeaturedWorks.tsx  — dark parallax gallery (8 items)
    LatestBlog.tsx     — 3-column blog cards
    Partners.tsx       — logo carousel + yellow booking CTA strip
    Footer.tsx         — 4-column footer
```

### Key implementation details

- **Hero slider:** Use CSS-based auto-advancing slides (interval-based) or
  Framer Motion. Two slides, dark overlay (`rgba(0,0,0,0.5)`), centered
  white text. Full-width, no container constraint.
- **Parallax sections (Achievements, Featured Works):** Use CSS
  `background-attachment: fixed` for parallax effect. Do NOT pull in Stellar.js.
- **Portfolio filter:** React state for active tab. Filter items by data
  attribute. CSS transitions on show/hide.
- **Team hover:** CSS transform + opacity transition on hover to reveal
  social icons overlay.
- **Counter animation:** Use `IntersectionObserver` to trigger count-up
  animation when section enters viewport.
- **Testimonial carousel:** Use CSS scroll-snap or a simple interval-based
  auto-rotate with manual navigation dots.
- **Partner logos:** Simple flex carousel or CSS animation.
- **Images:** All placeholder images via `https://picsum.photos/seed/topforge-<n>/<w>/<h>`.
- **Footer:** Must include "Made with Component Dock" link to
  `https://www.componentdock.com/`. No ColorLib references.
- **Font:** Load Roboto via Google Fonts `<link>` in `index.html`.
- **Icons:** Replace all Font Awesome icons with lucide-react equivalents.
  Map: fa-home→Home, fa-building→Building2, fa-clock-o→Clock,
  fa-thumbs-up→ThumbsUp, fa-wrench→Wrench, fa-rocket→Rocket,
  fa-users→Users, fa-connectdevelop→GitBranch, fa-child→Baby,
  fa-trophy→Trophy, fa-facebook→Facebook, fa-twitter→Twitter,
  fa-linkedin→Linkedin, fa-google-plus→Google, fa-instagram→Instagram,
  fa-pinterest-p→Pinterest, fa-link→Link, fa-search→Search,
  fa-quote-right→Quote, fa-quote-left→Quote, fa-chevron-right→ChevronRight,
  fa-phone→Phone, fa-envelope-o→Mail, fa-gavel→Hammer,
  fa-keyboard-o→Keyboard.

### Things to watch

- The `our_services_area` section in the HTML contains BOTH the filter tabs
  AND the gallery grid — it is NOT a separate "services" section. The tab
  labels are: All, Architecture, Building, Construction, Design, Painting.
- The "book now" CTA strip is inside `our_partners_area`, below the logo
  carousel. Background is brand yellow `#f6b60b`, text is white.
- The footer `footer_area` is inside a dark `#111f29` background with 4
  columns: About (logo + social), Quick Links, Recent Posts, Newsletter.
- The achievements section uses `data-stellar-background-ratio="0.3"` for
  parallax — use `background-attachment: fixed` in CSS instead.
- The featured works section ALSO uses parallax (`data-stellar-background-ratio`).
- Top header bar is NOT inside the navbar — it's a separate `<section>` above
  the nav. On mobile, collapse it (or hide it).
- The navbar has a search form overlay toggled by a search icon.

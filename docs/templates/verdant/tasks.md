# Verdant (ColorLib Neos) — Tasks & Design Notes

> Recreation of ColorLib "Neos — Website Template by Colorlib"
> (https://colorlib.com/wp/template/neos/) under the NEW name **Verdant**
> (green with lush vegetation — the lime-green brand color and the plant
> photography of the hero; single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-11), per the monorepo naming mandate (never reuse the ColorLib
> source name). TEMPLATES.md category: Bootstrap (216).

## Design notes (replication findings)

- **Original:** ColorLib "Neos" — free Bootstrap 4 TEMPLATE-SHOWCASE /
  agency landing page ("Welcome to Colorlib" hero, "Love Us Colorlib"
  4-feature grid, "Clean Design" / "Free HTML5 Templates" image-half bands,
  6-card "Share Before You Download" products carousel, "Free Templates By
  Colorlib" counters, 4-slide testimonials, 3-post blog, green CTA band,
  3-widget near-black footer with newsletter). The recreation brands itself
  **Verdant**.
- **Live preview analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/neos/` — HTTP 200, ~30 KB HTML +
  `css/style.css` ~26 KB (curl). Standard preview.colorlib.com host (not the
  Cloudflare-Pages "Astro" pattern). The TEMPLATES.md screenshot
  (`neos-free-template.jpg`, 1100×894, viewed in browser) shows the navbar +
  hero slider and cuts off just below the hero; it matches the live render
  1:1 (below-the-fold sections captured from the live DOM + CSS instead).
- **Visual design (screenshot):** white navbar — bold black uppercase
  "NEOS" logo left, small dark-grey uppercase links (HOME, ABOUT▾, SERVICES,
  BLOG, CONTACT), lime-green rectangular "GET STARTED" button right; hero =
  full-width lifestyle photo (potted plants: succulent in terracotta pot,
  trailing green plant, white mug) with centered bold white uppercase
  "WELCOME TO COLORLIB" over a dark overlay; semi-transparent grey square
  owl prev/next arrows at the hero's left/right edges.
- **Section order (1:1, verified from live DOM):**
  1. **Preloader** (`.loader` spinner + "Loading...") — optional.
  2. **Mobile menu** (`.site-mobile-menu` slide-in panel; `js-menu-toggle`
     hamburger) — hidden on desktop.
  3. **Navbar** (`.site-navbar-wrap.bg-white`, z-index 99; inner
     `.site-navbar` bg `#fff !important`) — brand `h2.site-logo` "Neos"
     bold uppercase black; `ul.site-menu` (uppercase 15px,
     `rgba(0,0,0,.6)`, hover black): Home (active) · About (has-children:
     Testimonials, Gallery, FAQ, Why Choose Us, Sub Menus→nested
     Testimonials/Gallery/Why Choose Us) · Services · Blog · Contact ·
     **Get Started** = `span.bg-primary.text-white.btn.btn-primary` green
     button in the bar.
  4. **Hero slider** (`.slide-one-item.home-slider` owl) — 2 slides
     `.site-blocks-cover.inner-page.overlay` (hero_1.jpg / hero_2.jpg;
     overlay `rgba(0,0,0,.2)`; min-height 600px / calc(80vh)); centered h1
     `font-secondary font-weight-bold text-uppercase` 4rem/700 white:
     "Welcome to Colorlib" · "Free Bootstrap 4 Templates". NO buttons on
     slides. Owl arrows bottom-center (padding 20px, 30px) + dots.
  5. **Slant + Love Us Colorlib** — `.slant-1` white rotated band (70px,
     `rotate(-5deg) translateX(-20%)`) + `.site-section.first-section`
     OVERLAPPING the hero (`margin-top: -150px`, -50px ≤992px). Eyebrow
     "Outstanding Services" + h2 `.site-section-heading` (30px uppercase,
     40×2px green `:before` underline) **"Love Us Colorlib"**; 4 features
     (col-md-6 col-lg-3, 3 with `border-right`): icon (flaticon, green
     `text-primary` display-4) + h3 uppercase + lorem: **Increase Revenue**
     (money-bag) · **Analytics** (bar-chart) · **3 Years Experience**
     (medal) · **Free Package** (box).
  6. **Site-half #1** — `.site-half`: left `.img-bg-1` absolute 50%
     (img_4.jpg; 300px block ≤992px), right col-lg-5 ml-lg-auto py-5:
     "Outstanding Services" → h2 **"Clean Design"** → 2 lorem paragraphs.
  7. **Site-half #2** — `.site-half.block` reversed: right `.img-bg-1.right`
     (img_5.jpg), left col-lg-5 mr-lg-auto py-5: "Easy To Use Templates" →
     h2 **"Free HTML5 Templates"** → same 2 lorem paragraphs.
  8. **Products & Services** (`.block-13.nav-direction-white`) — eyebrow
     "Products & Services" + h2 **"Share Before You Download"**;
     `.nonloop-block-13` owl with 6 `.media-image` cards (h2 1.2rem
     uppercase; hover shadow `0 5px 40px -5px rgba(0,0,0,.1)`): **Pixel
     Perfect · Template Under CCA 3.0 Unported · Useful Web Templates ·
     HTML5 / CSS3 · Bootstrap 4 · SCSS** + lorem + "Learn More".
  9. **Counters** (`.section-counter`) — left photo (img_1.jpg); right
     col-lg-5 ml-auto: h2 **"Free Templates By Colorlib"** + para + 2
     `.counter` blocks: `.number` Oswald 4rem GREEN `#71bc42`
     (animateNumber from 0) + caption: **Current Downloads · Number of
     Templates**.
  10. **Testimonials** (`.block-14.nav-direction-white`) — h2
      **"Testimonials"**; `.nonloop-block-14` owl, 4 `.block-testimony`
      slides: circular photo (person_1..4.jpg, rounded-circle 80px) + h5
      name + blockquote 1.5rem italic: **Katie Johnson · Jun Mars · Shane
      Holmes · Mark Johnson**.
  11. **Recent Blog Posts** — h2 **"Recent Blog Posts"**; 3
      `.media-image` cards (img_1/2/3): title **"Where Do You Learn HTML &
      CSS in 2019?"** (repeated) + meta **"By James — Jan. 20, 2019"** +
      lorem + "Read More".
  12. **CTA band** — `.py-5.bg-primary`: h2 white uppercase **"Try For Your
      Next Project"** + `a.btn.btn-bg-primary` **"Contact Us"** (white 2px
      outline, white text, radius 0, 10px 30px; hover → white bg + green
      text).
  13. **Footer** (`site-footer.bg-dark` = `#1e1e1c`, text
      rgba(255,255,255,.5), padding 4em 0) — col-4 **About** (para + Read
      More); col-5 ml-auto: **Quick Menu** (Home · About · Blog · Contacts ·
      Privacy) + **Free Templates** (HTML5 / CSS3 · Clean Design ·
      Responsive · Multi Purpose Template) + **Stay up to date**
      (`form.footer-subscribe`: email input placeholder "Enter your email" +
      Subscribe `btn-primary`, transparent bg + white border); col-2
      **Social Icons** (facebook/twitter/instagram/linkedin icomoon);
      copyright bar (rephrase ColorLib line).

## Key fidelity gotchas

- **SQUARE buttons** — `.btn { border-radius: 0px }`. This template is the
  opposite of the pill-button ColorLib family; do NOT add rounded corners.
- **Oswald is the display/heading font** (`font-secondary`): hero h1,
  section headings, card titles, counter numbers, nav links, buttons all
  uppercase Oswald. Body = Work Sans.
- **Features grid overlaps the hero** — `.first-section { margin-top:
-150px }` (-50px ≤992px) with the white `.slant-1` rotated band bridging
  hero → white section (z-index 4/5). The screenshot cuts off right at this
  overlap, so rely on the CSS values.
- **Site-half images are absolutely positioned 50% columns** (full-width
  300px blocks ≤992px) — implement as grid/aspect-ratio columns, not
  plain `<img>` stacking.
- **Hero slides have NO buttons/CTAs** — just the centered headline (unlike
  most ColorLib heroes).
- **Get Started** is a `span` styled as a button INSIDE the navbar (green
  bg, white text) — render as a real button/link for a11y.
- **Triple carousel** — hero (2 slides), products (6 cards), testimonials
  (4 slides). Reuse one Carousel component with configurable slides/dots/
  arrows (owl-equivalent behavior: prev/next + dots, `nav-direction-white`
  variant for white arrows).
- **Counters** animate from 0 on view (jquery.animateNumber) — jsdom-safe
  implementation with fake timers inside `act()`.
- **Newsletter form** — transparent input with WHITE border on the dark
  footer; success state replaces the input (repo convention).

## Implementation task outline

1. Scaffold `apps/verdant` (copy simplest existing app; rename package to
   `@free-react-templates/verdant`); `npm install` at root; register
   `injectUiSource()` in vite.config.ts.
2. Spec → tests (red): one `describe` per component mirroring the Gherkin
   scenarios in `openspec/specs/template-verdant/spec.md`.
3. `src/data.ts` — section copy: nav links + dropdowns, hero headlines,
   feature items, site-half copy, carousel cards, counters, testimonials,
   blog posts, footer widgets, social links.
4. Components: `Navbar` (desktop + mobile + dropdowns), `HeroSlider`,
   `Features`, `SiteHalf` (reusable, `flipped` prop), `ProductsCarousel`,
   `Counters`, `TestimonialsCarousel`, `BlogStrip`, `CtaBand`, `Footer`
   (newsletter form), shared `Carousel` for the three owl carousels.
5. `src/index.css` — `@theme` tokens: `--color-brand: #71bc42`, dark
   `#1e1e1c`, fonts Oswald + Work Sans via Google Fonts `<link>` in
   index.html.
6. Images: `https://picsum.photos/seed/verdant-<n>/<w>/<h>` — hero seeds
   should render a plant/nature scene (screen seeds before commit).
7. Green: `npm run verify:app verdant` (typecheck + lint + 100% coverage
   tests + build). Self-review per `docs/self-review.md`. PR to main, merge
   immediately (`gh pr merge --squash`), verify live deploy with curl.

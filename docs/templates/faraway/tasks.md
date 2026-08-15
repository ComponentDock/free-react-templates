# Faraway (ColorLib Carousel 02) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-faraway`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 02" — the SECOND of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-02/).
  Single occurrence in TEMPLATES.md (line 709, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Faraway**
  (second of the carousel-series renames; lineage from the Wanderlust prep:
  carousel-01 → wanderlust, carousel-02 → faraway, carousel-03 → fjord —
  theme: travel / destinations).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-02/`
  — HTTP 200, 10.9KB DOM. **Gotcha:** the standard path
  `https://preview.colorlib.com/theme/carousel-02/` 404s — the Bootstrap
  series is served under the `/theme/bootstrap/` prefix (same finding as the
  Bootstrap Calendars and Carousel 01 preps).
- **What this demo IS:** a white single-section featured-works carousel —
  ONE `.ftco-section` (padding 7em 0), no navbar, no hero, no footer.
  `js/main.js`: `$('.featured-carousel').owlCarousel({loop:true,
autoplay:true, margin:30, animateOut:'fadeOut', animateIn:'fadeIn',
nav:true, dots:true, autoplayHoverPause:false, items:1,
navText:[ion-ios-arrow-back, ion-ios-arrow-forward],
responsive:{0:{items:1}, 600:{items:2}, 1000:{items:3}}})` — 1/2/3 items
  per view at 0/600/1000px, cross-fade, autoplay, loop.
- **Cards (6, in order):** Work 01–06 (`images/work-1.jpg` … `work-6.jpg`),
  each `.work`: `.img` (height 300px, width 100%, `border-radius: .25rem`,
  cover bg, `box-shadow: 0px 20px 35px -30px rgba(0,0,0,0.26)`) containing a
  hidden `.icon` (70px white circle, radius 50%, opacity 0 → 1 on hover,
  ion-ios-search glyph) + `.text.pt-3.w-100.text-center` with `<h3><a
href="#">Work NN</a></h3>` (18px/500/#000) and `<span>Web Design</span>`
  (12px, uppercase, letter-spacing 1px, weight 500, rgba(0,0,0,0.3)). The
  recreation SHOULD use a distinct picsum seed per card:
  `picsum.photos/seed/faraway-<n>/800/600`.
- **Screenshot:** `carousel-02.jpg` (1200×972 AVIF, viewed in browser) —
  stark white page, centered dark "Carousel #02" heading, row of THREE cards
  (B&W architecture facade / orange chair / woman fashion portrait), rounded
  images, bold dark "Work 0N" titles + light-grey uppercase "WEB DESIGN"
  labels, two dots under the center card (left BLUE active, right grey
  inactive), no arrows visible (hover-only). Minimalist light agency/portfolio
  aesthetic.
- **Live tokens (from `css/style.css`):**
  - Brand accent: `#1089ff` (bright blue) — ONLY used on the active dot.
  - Page bg: `#fff`; heading dark `#212529` (28px Poppins).
  - Font: Poppins (headings AND body override), Google Fonts.
  - Card image: 300px tall, `border-radius: .25rem`, shadow
    `0px 20px 35px -30px rgba(0,0,0,0.26)`.
  - Hover icon: 70px white circle, `border-radius: 50%`, opacity 0→1 on
    hover, 0.3s transition, magnifier glyph.
  - Title: 18px, weight 500, `#000`. Category: 12px, uppercase,
    `letter-spacing: 1px`, weight 500, `rgba(0,0,0,0.3)`.
  - Arrows: `top: 50%` + `translateY(-50%)`, `left: 0`/`right: 0`, hidden
    (`opacity: 0`) → shown + nudged out `-25px` on `.owl-carousel:hover`;
    30px glyphs `rgba(0,0,0,0.1)`.
  - Dots: centered, `margin-top: 20px`; 10px circles, `margin: 5px`,
    `rgba(0,0,0,0.1)`; ACTIVE `#1089ff`.
  - Gutter between items: 30px (`margin: 30`).
- **Recreation notes:** pure-React multi-item carousel — no jQuery, no Owl
  Carousel, no Bootstrap, no ionicons. Use lucide-react ChevronLeft/
  ChevronRight for arrows and Search for the hover icon, picsum placeholders
  for the photos, Poppins via Google Fonts `<link>`. Keep the design tokens
  verbatim; paraphrase only the copy ("Carousel #02" heading and "Web
  Design" category are fine to keep — generic copy, not brand text; Work
  titles can stay Work 01–06 or paraphrase).
- **Closest sibling to copy:** `apps/canvas` — its `BlogCarousel.tsx` is
  already a multi-item paginated carousel with `vi.useFakeTimers()` autoplay
  (setInterval + modulo wrap), per-page grid (`md:grid-cols-3`), 10px round
  dots with `bg-white/50` → `bg-white` active + `aria-current`, and lucide
  ChevronLeft/ChevronRight prev/next buttons. Faraway ADDS on top of that
  pattern: 3 responsive breakpoints (1/2/3 items — canvas is fixed
  grid-cols), 30px gutter (`gap-[30px]`), cross-fade page transition
  (opacity, not grid swap), hover-reveal arrows that nudge outward, the
  hover search-icon overlay on cards, brand-blue active dot (`#1089ff`), and
  the white/light background (canvas's is a dark indigo band — invert the
  color treatment). The `.work` card markup (rounded image + title +
  uppercase category + hover icon) is closest to a portfolio card; check
  `apps/canvas/src/data.ts` for the data-module pattern (BLOG_POSTS /
  POSTS_PER_VIEW / CAROUSEL_INTERVAL_MS constants). Check `apps/` for the
  simplest app to scaffold from; reuse canvas's carousel mechanics.

## Tasks (implementation outline)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/canvas` or the
   minimal app with a carousel) to `apps/faraway`; rename package
   `@free-react-templates/faraway`; set `public/CNAME` =
   `faraway.free.componentdock.com` and `"homepage"` =
   `https://faraway.free.componentdock.com`; `npm install` at root so
   `package-lock.json` registers the new workspace (verify:
   `grep -c "free-react-templates/faraway" package-lock.json`); keep the
   `injectUiSource()` helper in `vite.config.ts` and the MemoryStorage
   polyfill in `src/test/setup.ts` if the source app has it (jsdom 30 has
   no localStorage).
2. **Theme tokens** — in `src/index.css` `@theme`: `--color-brand: #1089ff`
   (active dot) plus the white/grey/black usages as arbitrary values; add
   Poppins Google Fonts `<link>` (300/400/500/700) to index.html.
3. **Data** (`src/data.ts`, modeled on `apps/canvas/src/data.ts`) — six work
   cards (Work 01–06 or paraphrases), each with a picsum seed
   (`faraway-1` … `faraway-6`) at 800×600, title, and the shared category
   "Web Design"; constants: `CAROUSEL_INTERVAL_MS`, `ITEMS_PER_VIEW` map
   (1 / 2 / 3 by breakpoint) or a per-view slice helper.
4. **Section component** (`src/components/FeaturedWorks.tsx`, modeled on
   `apps/canvas/src/components/BlogCarousel.tsx`) — white `py-[7em]`
   section; centered 28px dark heading ("Carousel #02" or paraphrase);
   page state `page`; per-view slice of the 6 cards (1/2/3 via
   matchMedia-driven state or CSS-grid + overflow technique — prefer a
   state-driven page index like canvas); autoplay `setInterval` with
   `vi.useFakeTimers()`-friendly cleanup + modulo wrap (loop); cross-fade
   page transition (opacity classes on a stacked container or keyed
   re-render with `transition-opacity`); prev/next buttons (lucide
   ChevronLeft/ChevronRight) vertically centered at the edges, `opacity-0`
   until carousel hover (`group` + `group-hover:opacity-100`), nudged
   outward on hover (`-left-6`/`-right-6`), aria-labels; dot indicators
   below (10px circles, `bg-black/10`, active `bg-brand` `#1089ff`,
   `aria-current`, click-to-jump).
5. **Work card component** (`src/components/WorkCard.tsx`) — rounded image
   (`rounded`, `h-[300px] w-full object-cover`,
   `shadow-[0_20px_35px_-30px_rgba(0,0,0,0.26)]`) with the hover overlay:
   70px white circle (`bg-white`, `rounded-full`, `opacity-0` →
   `group-hover:opacity-100`, `transition-opacity duration-300`) containing
   lucide `Search`, as a focusable link/button with aria-label; below: title
   link (18px/500/`text-black`) + category span (12px, uppercase,
   `tracking-[1px]`, `text-black/30`), `pt-3 text-center`.
6. **Footer** — minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer; monorepo mandate).
7. **Tests (TDD, 100% coverage)** — `vi.useFakeTimers()` for autoplay;
   cover: heading + six cards render, first-page default, responsive
   per-view counts (mock matchMedia or assert the slice logic), next/prev
   wrap-around (first ↔ last), dot jump, dot active tracking, autoplay tick
   advances page, loop wraps last → first, arrows hidden without hover /
   visible on hover, hover search icon appears (and its aria-label),
   category + title tokens, footer link. a11y: aria-labels on arrows + dots
   - search-icon control, focus-visible rings, `aria-current` on active dot.
8. **Verify** — `npm run verify:app -- faraway` (typecheck + lint + knip +
   fallow + 100% coverage + build).
9. **Ship** — commit on `feat/template-faraway`, open PR to main, merge
   immediately (`gh pr merge --squash --delete-branch`); after merge
   `[~]` → `[x]` in TEMPLATES.md + surge URL + homepage +
   `npm run readme:status`, push; verify the deploy returns 200 at
   https://faraway.free.componentdock.com.

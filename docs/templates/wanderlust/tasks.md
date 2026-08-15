# Wanderlust (ColorLib Carousel 01) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-wanderlust`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 01" — the FIRST of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-01/).
  Single occurrence in TEMPLATES.md (line 708, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Wanderlust**
  (first of the carousel-series renames; suggested lineage for later
  preps: carousel-02 → faraway, carousel-03 → fjord — theme: travel /
  destinations).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-01/`
  — HTTP 200, 9.1KB DOM. **Gotcha:** the standard path
  `https://preview.colorlib.com/theme/carousel-01/` 404s — the Bootstrap
  series is served under the `/theme/bootstrap/` prefix (same finding as
  the Bootstrap Calendars preps).
- **What this demo IS:** a FULL-SCREEN Owl Carousel 2.3.4 travel hero —
  ONE section, no navbar, no content sections, no footer. `js/main.js`:
  `$('.home-slider').owlCarousel({loop:true, autoplay:true, margin:0,
animateOut:'fadeOut', animateIn:'fadeIn', nav:true, dots:true,
autoplayHoverPause:false, items:1, navText:[ion-ios-arrow-back,
ion-ios-arrow-forward]})` + `fullHeight()` setting `.js-fullheight` to
  `$(window).height()` (recomputed on resize → the slider is always
  viewport-height).
- **Slides (3, in order):** Norway (`images/slider-1.jpg`), Japan
  (`images/slider-2.jpg`), Singapore (`images/slider-2.jpg` — the source
  reuses the same photo for slides 2+3; the recreation SHOULD use a
  distinct picsum seed per destination: `picsum.photos/seed/wanderlust-1`,
  `-2`, `-3` at 1920×1080). Each slide: full-bleed bg image → `.overlay`
  (black 30%) → centered column (`.col-md-12.ftco-animate > .text
.text-center`) with `<h2>Best Place to Travel</h2>` + `<h1>Norway</h1>`.
- **Screenshot:** `carousel-01.jpg` (1200×972 AVIF, viewed in browser) —
  Lofoten/Norway fjord photo (dark jagged mountains, red rorbu cabins at
  the waterline, purple/pink dawn sky); centered small uppercase white
  "BEST PLACE TO TRAVEL" above MASSIVE bold white "NORWAY"; three dots
  bottom-center (middle solid = active); no arrows visible (hover-only).
  Modern, minimalist, immersive full-bleed travel hero.
- **Live tokens (from `css/style.css`):**
  - Kicker accent: `#f5e4c3` (warm cream/gold) — "Best Place to Travel".
  - Headline: 9vw / 50px (≤991.98px), weight 800, uppercase, `#fff`,
    `line-height: 1`, `.mb-3` spacing.
  - Kicker: 16px, uppercase, `letter-spacing: 4px`, Poppins 700,
    `#f5e4c3`, inline-block.
  - Overlay: `#000` at `opacity: .3` (Tailwind `bg-black/30`).
  - Arrows: `top: 50%` + `translateY(-50%)`, `left: 0`/`right: 0`,
    hidden (`opacity: 0`) → shown + nudged out 50px on `.home-slider:hover`;
    30px glyphs `rgba(255,255,255,0.5)` → `#fff` on hover/focus.
  - Dots: bottom 40px (≤991.98px: 5px), centered; 10px circles,
    `margin: 5px`, `rgba(255,255,255,0.4)`; ACTIVE `#fff`.
  - Font: Poppins (300/400/500/700), Google Fonts.
  - Transitions: cross-fade (fadeIn/fadeOut), loop, autoplay, 1 item at
    every breakpoint.
- **Recreation notes:** pure-React crossfade slider — no jQuery, no Owl
  Carousel, no Bootstrap, no ionicons. Use lucide-react
  ChevronLeft/ChevronRight for the arrows, picsum placeholders for the
  photos, Poppins via Google Fonts `<link>`. Keep the design tokens above
  verbatim; paraphrase only the copy ("Best Place to Travel" kicker is
  fine to keep — it is generic copy, not brand text; destination names are
  the slide content).
- **Closest sibling to copy:** `apps/atlas` — its `HeroSlider.tsx` is
  already a photo-slider with crossfade (`transition-opacity duration-500`),
  lucide ChevronLeft/ChevronRight arrows, dot indicators, and an overlay
  (atlas uses `bg-black/70` — wanderlust needs `bg-black/30`). Wanderlust
  ADDS on top of atlas's pattern: full-viewport height (`h-screen` vs
  atlas's fixed `h-[600px]`), autoplay + loop, the centered
  kicker + headline text over the photos, hover-reveal arrows, and the
  `#f5e4c3` / Poppins tokens. Check `apps/` for the simplest app to
  scaffold from; reuse atlas's slider mechanics.

## Tasks (implementation outline)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/atlas` or the
   minimal app with a `HeroSlider`) to `apps/wanderlust`; rename package
   `@free-react-templates/wanderlust`; set `public/CNAME` =
   `wanderlust.free.componentdock.com` and `"homepage"` =
   `https://wanderlust.free.componentdock.com`; `npm install` at root so
   `package-lock.json` registers the new workspace (verify:
   `grep -c "free-react-templates/wanderlust" package-lock.json`); keep the
   `injectUiSource()` helper in `vite.config.ts` and the MemoryStorage
   polyfill in `src/test/setup.ts` if the source app has it (jsdom 30 has
   no localStorage).
2. **Theme tokens** — in `src/index.css` `@theme`: `--color-brand: #f5e4c3`
   (kicker accent) plus the white/black overlay usage; add Poppins Google
   Fonts `<link>` (300/400/500/700) to index.html.
3. **Data** — slide list of 3 destinations (Norway / Japan / Singapore or
   paraphrases), each with a picsum seed (`wanderlust-1` … `wanderlust-3`)
   and the shared kicker "Best Place to Travel" (or equivalent).
4. **Slider component** (`src/components/HeroSlider.tsx`, modeled on
   `apps/atlas/src/components/HeroSlider.tsx`) — state `index`;
   crossfade via absolutely-positioned slides toggling opacity; autoplay
   with `setInterval` (cleanup on unmount) + loop wrap; prev/next buttons
   (lucide ChevronLeft/ChevronRight) vertically centered at the edges,
   `opacity-0` until slider hover (`group` + `group-hover:opacity-100`),
   aria-labels; dot indicators bottom-center (10px circles,
   `bg-white/40`, active `bg-white`, `aria-current`), click-to-jump;
   slide text overlay (kicker `#f5e4c3` tracking-[4px] uppercase text-sm
   font-bold + headline text-[9vw] lg:text-[9vw] max-lg:text-[50px]
   font-extrabold uppercase text-white leading-none); overlay
   `bg-black/30`; container `relative h-screen overflow-hidden`.
5. **Footer** — minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer; monorepo mandate).
6. **Tests (TDD, 100% coverage)** — `vi.useFakeTimers()` for autoplay;
   cover: initial slide renders (Norway), kicker + headline text, next /
   previous wrap-around (first ↔ last), dot jump, dot active tracking,
   autoplay tick advances slide, loop wraps last → first, arrows hidden
   without hover / visible on hover, mobile tokens (50px headline, dots
   5px from bottom), footer link. a11y: aria-labels on arrows, `aria-label`
   on dots, focus-visible rings.
7. **Verify** — `npm run verify:app -- wanderlust` (typecheck + lint +
   knip + fallow + 100% coverage + build).
8. **Ship** — commit on `feat/template-wanderlust`, open PR to main,
   merge immediately (`gh pr merge --squash --delete-branch`); after merge
   `[~]` → `[x]` in TEMPLATES.md + surge URL + homepage +
   `npm run readme:status`, push; verify the deploy returns 200 at
   https://wanderlust.free.componentdock.com.

# Fjord (ColorLib Carousel 03) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fjord`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 03" — the THIRD of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-03/).
  Single occurrence in TEMPLATES.md (line 710, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Fjord**
  (third of the carousel-series renames; lineage from the Wanderlust/Faraway
  preps: carousel-01 → wanderlust, carousel-02 → faraway, carousel-03 →
  fjord — theme: travel / destinations).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-03/`
  — HTTP 200, 8.2KB DOM. **Gotcha:** the standard path
  `https://preview.colorlib.com/theme/carousel-03/` 404s — the Bootstrap
  series is served under the `/theme/bootstrap/` prefix (same finding as the
  Bootstrap Calendars and Carousel 01/02 preps).
- **What this demo IS:** a white single-section featured-works carousel —
  ONE `.ftco-section` (padding 7em 0), no navbar, no hero, no footer.
  `js/main.js`: `$('.featured-carousel').owlCarousel({loop:true,
autoplay:true, margin:30, animateOut:'fadeOut', animateIn:'fadeIn',
nav:true, dots:true, autoplayHoverPause:false, items:1,
navText:[ion-ios-arrow-back, ion-ios-arrow-forward],
responsive:{0:{items:1}, 600:{items:2}, 1000:{items:3}}})` — 1/2/3 items
  per view at 0/600/1000px, cross-fade, autoplay, loop. IDENTICAL config to
  Carousel 02 (Faraway).
- **Cards (5, in order):** `images/work-1.jpg` … `work-5.jpg`, each `.work`:
  `.img` (height 500px, width 100%, `border-radius: 15px`, overflow hidden,
  cover bg, `box-shadow: 0px 20px 35px -30px rgba(0,0,0,0.26)`) with an
  `::after` bottom black gradient overlay (`linear-gradient(to bottom,
transparent 0%, transparent 42%, black 100%)`, opacity .6) + `.text.w-100`
  (padding 35px, padding-top 0) OVERLAID at the bottom (`align-items-end`)
  with `<span class="cat">Web Design</span>` (12px uppercase chip, purple
  #b063c5 text on rgba(255,255,255,0.9) bg) above `<h3><a href="#">Working
Spaces for Startups Freelancer</a></h3>` (34px Playfair Display serif,
  #fff). NOTE: all five titles are the same placeholder string — paraphrase
  per card. Recreation SHOULD use a distinct picsum seed per card:
  `picsum.photos/seed/fjord-<n>/800/1100` (portrait, screened for
  people/street subjects per the seed-screening method).
- **Screenshot:** `carousel-03.jpg` (1200×972 AVIF, viewed in browser) —
  stark white page, centered near-black "Carousel #03" heading, row of THREE
  cards (woman in beige coat / hand with ice cream cone / two people on
  steps), white serif title + white "WEB DESIGN" chip overlaid at photo
  bottom, two dots below the left card (PURPLE active + light grey), faint
  chevron arrows at the bottom-right of the third card. Aesthetic: clean,
  minimalist, editorial (serif titles), single purple accent.
- **Design tokens:** brand `#b063c5` purple (active dot, cat chip, link,
  arrow hover) · white page · `py-[7em]` section · 28px Poppins heading ·
  500px/15px-radius card images with bottom black gradient (opacity .6) ·
  Playfair Display 34px/400 white titles · 12px uppercase purple-on-white
  chips · arrows bottom-right ALWAYS visible (rgba(0,0,0,0.2), hover
  #b063c5) · dots LEFT-aligned 10px circles, active #b063c5 · fonts: Poppins
  (body) + Playfair Display (titles).

## Key differences vs Carousel 02 (Faraway) — do NOT mix them up

| Aspect         | Faraway (carousel-02)          | Fjord (carousel-03)                  |
| -------------- | ------------------------------ | ------------------------------------ |
| Cards          | 6 (Work 01–06)                 | 5 (work-1 … work-5)                  |
| Text position  | BELOW the image (`.text.pt-3`) | OVERLAID on image bottom (items-end) |
| Title font     | Poppins 18px/500 dark          | Playfair Display 34px/400 WHITE      |
| Image          | 300px tall, radius 0.25rem     | 500px tall, radius 15px + gradient   |
| Brand color    | #1089ff blue                   | #b063c5 purple                       |
| Arrows         | centered edges, hidden→hover   | bottom-RIGHT, always visible         |
| Dots           | centered, `mt-5`               | LEFT-aligned, `mt-2.5`               |
| Category label | plain grey uppercase span      | purple-on-white pill chip            |

## Implementation tasks (in order)

1. Scaffold `apps/fjord` (copy the simplest existing app, rename package to
   `@free-react-templates/fjord`; `public/CNAME` = `fjord.free.componentdock.com`;
   `homepage` = `https://fjord.free.componentdock.com`; register workspace
   with `npm install --package-lock-only` at root; keep `injectUiSource()`
   in vite.config.ts).
2. index.html: Google Fonts Poppins 300/400/500/700 + Playfair Display
   400/700. index.css `@theme`: `--color-brand: #b063c5` (+ grey token for
   `rgba(0,0,0,0.1)`/`rgba(0,0,0,0.2)` if desired).
3. `src/data.ts`: five works — seed id, paraphrased title, category
   "Web Design" (title/category kinds from the source).
4. `WorkCard` component: 500px-tall image (picsum seed `fjord-<n>` 800×1100),
   rounded-[15px], overflow hidden, shadow, bottom gradient overlay div
   (`bg-gradient-to-b from-transparent via-transparent/42% to-black
opacity-60` — verify via browser_vision that the white title stays
   readable; use arbitrary property if Tailwind's via-42% misbehaves),
   bottom-aligned text block: chip + Playfair title link.
5. `FeaturedCarousel` component: React carousel — 1/2/3 items responsive
   (600/1000px breakpoints), 30px gutter, cross-fade (opacity), autoplay +
   loop, dots (left-aligned, brand active), arrows (bottom-right, always
   visible, hover brand).
6. Footer with Component Dock link (monorepo mandate; source has none).
7. Tests (TDD, 100% coverage): heading + five cards, responsive per-view,
   autoplay (fake timers), loop wrap, dot jump + active tracking, arrow
   navigation, hover states, gradient overlay presence, footer link.
8. `npm run verify:app -- fjord` → gate, PR, immediate squash merge,
   bookkeeping (`[x]` + surge URL + `npm run readme:status`), deploy to
   https://fjord.free.componentdock.com.

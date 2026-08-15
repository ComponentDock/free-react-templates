# Positano (ColorLib Carousel 07) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-positano`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 07" — the SEVENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-07/).
  Single occurrence in TEMPLATES.md (line 714, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Positano**
  (seventh of the carousel-series renames; lineage from the Wanderlust
  prep: carousel-01 → wanderlust, carousel-02 → faraway, carousel-03 →
  fjord, carousel-04 → lido, carousel-05 → capri, carousel-06 → cannes,
  carousel-07 → positano — theme: travel / destinations; the name is
  thematic, the content is a blog-card slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-07/`
  — HTTP 200, 15,229 bytes DOM (fetched 2026-08-15). **Gotcha:** the
  standard path `https://preview.colorlib.com/theme/carousel-07/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under
  `.../theme/bootstrap/carousel-07/css/` (same finding as the Bootstrap
  Calendars and Carousel 01–06 preps).
- **What this demo IS:** a LIGHT-GRAY single-section BLOG-CARD carousel —
  ONE `.ftco-section` (padding 7em 0), no navbar, no hero, no footer.
  Centered BLACK heading "Carousel #07" (`.heading-section`, 28px, #000,
  mb-5 pb-md-4) above `.featured-carousel.owl-carousel` with SIX `.item`
  slides, each a WHITE blog card (`.blog-entry`): cover photo (275px) with
  dark `#343a40` date badge top-left, bold black title, gray blurb, pink
  "Read More" button, right-aligned meta (ADMIN + comment count). NOT an
  editorial split-screen (Cannes) and NOT testimonials (Capri) — do NOT
  copy either's requirements.
- **Carousel config (`js/main.js`):**
  `$('.featured-carousel').owlCarousel({ loop: true, autoplay: true,
margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn', nav: true,
dots: true, autoplayHoverPause: false, items: 1,
navText: ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } })`
  — **ONE card per view < 600px, TWO at 600–999px, THREE at ≥1000px**
  (like Capri's 1/2/3, NOT Cannes's 1/1/1), **LOOP ON**, **AUTOPLAY ON**
  (~5s default, hover-pause OFF), cross-fade, **ARROWS ON** (icon-only,
  side-mounted at 50% height, HIDDEN until `.owl-carousel:hover`, then
  opacity 1 + shift to ±25px), dots ON (centered row below, one per item
  → six dots, active `#ff487e`).
- **Card (`.blog-entry`, ×6):** white (`#fff`) on the light-gray page.
  - `a.block-20.d-flex.align-items-start` (photo): 275px tall, cover bg
    image (`images/image_1.jpg` … `image_6.jpg` — office/business stock),
    `position: relative`.
    - `div.meta-date.text-center.p-2` (badge): `display: inline-block;
background: #343a40;` padding 0.5rem; three stacked WHITE spans —
      `.day` "26" (700, 20px), `.mos` "Nov." (13px), `.yr` "2019"
      (13px). Source repeats "26 Nov. 2019" in all six — vary dates per
      card in the recreation.
  - `div.text.border.border-top-0.p-4` (body): 1px `#dee2e6` border, NO
    top border (`.border-top-0`), `border-radius: 2px`, padding 1.5rem.
    - `h3.heading > a` (title): 20px, weight 600, mb 16px, `#000`; hover
      `#ff487e`. Source repeats "Finance And Legal Working Streams Occur
      Throughout" — use SIX DISTINCT professional headlines (business /
      finance / legal kind).
    - `p` (blurb): body style (Poppins 14px, lh 1.8, gray), paraphrased
      per card.
    - `div.d-flex.align-items-center.mt-4` (footer row):
      - `p.mb-0 > a.btn.btn-primary` — "Read More" + round arrow icon.
      - `p.ml-auto.meta2.mb-0` — `a.mr-2` (user icon + "Admin") +
        `a.meta-chat` (chat icon + "3"). Meta: uppercase 13px,
        letter-spacing 1px, `rgba(0,0,0,0.4)`; comment count `#b3b3b3`.
        Vary the count per card.
- **Nav (`.owl-nav`):** `position: absolute; top: 50%; width: 100%;`;
  `.owl-prev { left: 0 }` / `.owl-next { right: 0 }`,
  `translateY(-50%)`, `margin-top: -10px`, icon-only 30px,
  `rgba(0,0,0,0.1)`; `opacity: 0` default → `opacity: 1` + offset ±25px
  on `.owl-carousel:hover`. NO "Prev"/"Next" labels (differs from Cannes).
- **Dots (`.owl-dots`):** centered row, `margin-top: 20px`; 10×10px
  circles, margin 5px, radius 50%, `rgba(0,0,0,0.1)`; active `#ff487e`.
  Six slides → six dots.
- **Buttons:** custom `.btn.btn-primary { background: #ff487e;
border-color: #ff487e; }`, `.btn { font-size: 14px; }`; Bootstrap base
  padding 0.375rem 0.75rem, radius 0.25rem. **Source bug:** Bootstrap's
  `.btn-primary:hover { background-color: #0069d9 }` (blue) is left in
  place — use a darker pink hover (`#e64a73`) instead.
- **Fonts:** Poppins body (14px, lh 1.8, gray) and headings (#000). Load
  Poppins 300/400/500/700 via Google Fonts.
- **Fidelity exception:** source forces `body { min-width: 992px
!important; }` (13 occurrences — desktop-only demo artifact). Recreation
  MUST be responsive (3/2/1 columns) — do not force a min-width.
- **Placeholder content:** ALL six cards repeat the same date, title,
  blurb, and comment count. Recreation: 6 distinct titles + blurbs, varied
  dates and comment counts; use office/business-appropriate picsum seeds
  for the photo (`https://picsum.photos/seed/positano-<n>/600/400`,
  skill-verified person IDs: 1027, 64, 823, 996).

## Section-by-section fidelity notes (structure order 1:1)

1. **Section `.ftco-section`** — `py-[7em]` on LIGHT-GRAY page bg
   (`rgba(0,0,0,0.05)` / Tailwind `bg-[#f2f2f2]`-ish). Center via a
   `.container`-style max-width wrapper.
2. **Heading** — `h2` "Carousel #07" (or "Latest News" paraphrase): 28px,
   Poppins, `#000`, centered, `mb-12` (~3rem) + `pb-6` at ≥768px.
3. **Carousel `.featured-carousel`** — 6 cards, 30px gutter, fade
   transition, 1/2/3 per view at <600/600–999/≥1000px, LOOP on, autoplay
   ~5s (pause under reduced motion), icon-only side arrows (hover-reveal),
   six centered dots (active `#ff487e`).
4. **Card `.blog-entry`** — white card: photo 275px (cover) with dark date
   badge top-left (day 20px/700 + month + year, stacked white text,
   0.5rem padding) + body (1px #dee2e6 border, no top, 2px radius, 1.5rem
   padding): title 20px/600/#000 (hover #ff487e), gray blurb, footer row.
5. **Card footer row** — pink "Read More" (`#ff487e` bg, white text,
   radius .25rem, ~`py-1.5 px-3`, 14px, ArrowRight icon, darker-pink
   hover) + right-aligned uppercase meta (User icon + "ADMIN",
   MessageSquare icon + count, `rgba(0,0,0,0.4)` / `#b3b3b3`).
6. **Footer** — monorepo mandate: minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer).

## Implementation task outline

- [ ] Scaffold `apps/positano` (copy simplest existing app; package
      `@free-react-templates/positano`; `public/CNAME` =
      `positano.free.componentdock.com`; homepage
      `https://positano.free.componentdock.com`); root `npm install` +
      lockfile check (`grep -c "free-react-templates/positano"
    package-lock.json`); `vite.config.ts` keeps `injectUiSource()`
- [ ] index.html: Google Fonts Poppins 300/400/500/700 link; no ColorLib
      assets/strings anywhere in the app
- [ ] `src/index.css` `@theme`: brand tokens `#ff487e` (buttons, active
      dot, title hover), `#343a40` (date badge), `#dee2e6` (card border),
      `rgba(0,0,0,0.1)` (inactive dots, arrows); light-gray page bg
- [ ] Components (mirror existing app patterns, `cn()` from packages/ui):
      `App.tsx` (section + footer), `BlogCarousel.tsx` (loop + autoplay +
      fade + arrows + dots, responsive 1/2/3-per-view, hover-reveal
      arrows), `BlogCard.tsx` (photo + date badge + title + blurb + button + meta)
- [ ] Tests (TDD, 100% coverage): six cards render, date badge content,
      card body tokens, footer row (button + meta), 1/2/3-per-view at
      breakpoints, loop wrap-around, dot jump + active tracking, autoplay
      advance + reduced-motion pause, cross-fade, arrow navigation +
      hover-reveal + focus-within, mobile/desktop token differences,
      footer link
- [ ] `npm run verify:app -- positano`; commit `feat: add Positano
(ColorLib Carousel 07) template`; PR + immediate squash merge; deploy
      check https://positano.free.componentdock.com
- [ ] Bookkeeping on merge: `[ ]`→`[x]` for Carousel 07 in TEMPLATES.md +
      surge URL, `npm run readme:status`

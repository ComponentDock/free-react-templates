# Portofino (ColorLib Carousel 12) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-portofino`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 12" — the TWELFTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-12/).
  Single occurrence in TEMPLATES.md (line 719, "Bootstrap Carousels (20)"
  category — no dup rows; no `[x]` row anywhere for carousel-12).
  Recreation uses the NEW name **Portofino** (twelfth of the carousel-series
  renames; lineage: carousel-01 → wanderlust, carousel-02 → faraway,
  carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri,
  carousel-06 → cannes, carousel-07 → positano, carousel-08 → sorrento,
  carousel-09 → ravello, carousel-10 → amalfi, carousel-11 → santorini,
  carousel-12 → portofino — theme: coastal destinations; the name is
  thematic, the content is a product showcase). Name checked 2026-08-15
  against origin/main: zero hits in `apps/`, `openspec/specs/`,
  `docs/templates/`, repo content, or git history.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-12/`
  — HTTP 200, 17,596 bytes DOM (fetched + rendered in a browser 2026-08-15).
  **Gotcha:** the standard path `https://preview.colorlib.com/theme/carousel-12/`
  404s — the Bootstrap series is served under the `/theme/bootstrap/`
  prefix, and its stylesheets live under `.../theme/bootstrap/carousel-12/css/`
  (same finding as the Bootstrap Calendars and Carousel 01–11 preps).
  Stylesheets: `owl.carousel.min.css` (3,351 bytes) + `bootstrap.min.css`
  (4.3.1) + `style.css` (2,203 bytes) + `fonts/icomoon/style.css` + Google
  Roboto.
- **What this demo IS — READ THIS FIRST:** a **PRODUCT-CARD carousel**, NOT
  the full-width image slider of Carousel 11 (Santorini). A WHITE single-
  section page (`.content`, `padding: 7rem 0`) with TWO stacked parts: (1) a
  centered near-black heading (`.h2.my-5.text-center`, 20px — demo text
  "Carousel #2", a copy-paste artifact from demo 02; use "Carousel #12" or
  paraphrase) and (2) a `.site-section.bg-left-half.mb-5` band whose LEFT
  HALF is painted `#f8f9fa` light gray (`.bg-left-half::before`, 50% width,
  100% height, z-index -1) containing the blue "Our Products" heading
  (`h2.text-primary.py-5`, `#007bff`, 20px, left-aligned) and the
  `.owl-carousel.owl-2` with SIX `.media-29101` image+title cards. NO
  navbar, NO hero, NO footer. NOT the caption-overlay slider of Carousel 10
  and NOT the plain full-width slider of Carousel 11 — do NOT copy those
  requirements.
- **Carousel config (`js/main.js`):**
  `$('.owl-2').owlCarousel({ center: false, items: 1, loop: true,
stagePadding: 0, margin: 20, smartSpeed: 1000, autoplay: true, nav: true,
dots: true, pauseOnHover: false, responsive: { 600: { margin: 20, nav:
true, items: 2 }, 1000: { margin: 20, stagePadding: 0, nav: true, items:
3 } } })` — **1 card < 600px, 2 ≥ 600px, 3 ≥ 1000px**, 20px gaps, **LOOP
  ON**, **AUTOPLAY ON (~5s) with HOVER-PAUSE OFF** (`pauseOnHover: false` —
  differs from Carousel 11), **DOTS ON**, **NAV ON in JS but CSS-HIDDEN**,
  **1,000ms smartSpeed**, NO `animateOut` → **HORIZONTAL SLIDE** (confirmed
  live: `.owl-stage` `translate3d(-1130px,0,0)`).
- **Arrows are hidden — do NOT render them:** `css/style.css` has
  `.owl-2-style .owl-nav { display: none; }`. The `.owl-prev`/`.owl-next`
  buttons exist in the DOM (verified) but are invisible. Recreate with NO
  visible arrows.
- **Dots (`.owl-2-style .owl-dots`):** `position: relative; bottom: -30px;
text-align: center` — in NORMAL FLOW BELOW the carousel (confirmed
  visually: dots sit under the cards, NOT overlaid). One dot per PAGE
  (verified live: **2 dots at desktop** = 6 slides ÷ 3 per view; implies 3
  at ≥600px and 6 below 600px). `> span`: **15px × 3px bar, `border-radius:
0`, `#cccccc`**, margin 3px, `transition: .3s all cubic-bezier(.32,.71,.53,.53)`;
  **active `> span`: `#007bff`**. (Pill bars — NOT circles, unlike Carousel
  11.)
- **Cards (`.media-29101`, ×6):** `<a href="#"><img class="img-fluid"
alt="Image"></a>` + `<h3><a href="#">Title</a></h3>` — image wrapped in a
  link, title is a link (whole card clickable; demo hrefs are "#").
  Images `img_1..6.jpg` all **900×600 (3:2)**, natural aspect ratio
  (img-fluid, NO fixed height, NO cover crop), `margin-bottom: 20px`.
  Titles (each repeated twice): "Consectetur Adipisicing Elit", "Beatae
  Doloribu", "Accusantium Eius Soluta" — recreate with paraphrased
  product-ish placeholder titles (same KIND: short card title link).
- **Heading copy-paste artifact:** the demo `<title>` AND the top visible
  `h2` literally say "Carousel #2" (untouched copy from demo 02; this is
  demo #12). Recreation SHALL use "Carousel #12" (corrected) or a same-kind
  paraphrase ("Featured Products", "Our Gallery"). The "Our Products"
  section heading is NOT an artifact — keep it (or an equivalent
  paraphrase).
- **Accent color:** **`#007bff`** (Bootstrap primary blue via `text-primary`)
  — used by the "Our Products" heading AND the active dot. Verified live
  `rgb(0,123,255)`. The left-half band is `#f8f9fa` (verified live
  `rgb(248,249,250)`). Everything else is monochrome: white page,
  near-black `#212529` headings, gray `#6c757d` card-title links, `#cccccc`
  inactive dots.
- **Fonts:** **Roboto** (body AND heading rules both use the Roboto stack;
  NOT Poppins): body 16px/lh 1.5/w400 `#212529` (Bootstrap defaults), top
  heading 20px w500, section heading 20px w500, card title 18px **w900**,
  `p` `#b3b3b3` w300 (none in this demo). Load Roboto 300/400/500 via
  Google Fonts.
- **Slide images (reference only — NOT copied):** `img_1..6.jpg` (900×600
  each) — product/lifestyle photography (live render: hand pulling a
  "GENESIS" magazine from a teal box with eucalyptus; light-blue handheld
  console; white ONNE skincare flat-lay; screenshot shows skincare basket,
  "COCOON" bottle + plant, wireless earbuds). Recreation: picsum placeholder
  product/lifestyle photos, seeds screened per the replication skill (seed
  shape `https://picsum.photos/seed/portofino-<n>/900/600`), rendered at
  natural aspect ratio (NOT cover-cropped).
- **Bootstrap utility mapping:** `text-primary` → `#007bff` token; `py-5` →
  `py-12` (3rem); `my-5` → `my-12` (3rem); `mb-5` → `mb-12` (3rem);
  `img-fluid` → `max-width: 100%; height: auto`.
- **Fidelity note (responsive):** mirror the source breakpoints (600px /
  1000px); mobile 1 card, images scale, dots tappable (≥44px effective hit
  area despite the source's 15px bars) — mobile support is a monorepo hard
  requirement.

## Section-by-section fidelity notes (structure order 1:1)

1. **Page wrapper `.content`** — `py-[7em]` on WHITE page bg. Center via a
   `.container`-style max-width wrapper (~1140px).
2. **Top heading** — `h2` "Carousel #12" (corrected — NOT the demo's
   "Carousel #2" copy-paste artifact; or paraphrase "Featured Products"):
   20px, Roboto, near-black `#212529`, centered, `my-12` (~3rem
   top/bottom).
3. **Section `.site-section.bg-left-half.mb-5`** — `position: relative`,
   `mb-12`; **left-half `#f8f9fa` band** via a pseudo-element (absolute,
   50% width, 100% height, left 0, top 0, behind content) — the right half
   stays white.
4. **Section heading** — "Our Products": `#007bff`, 20px, Roboto w500,
   left-aligned, `py-12` (~3rem vertical padding).
5. **Carousel `.owl-carousel.owl-2`** — `position: relative` wrapper;
   1/2/3 cards per view at <600 / ≥600 / ≥1000px with ~20px gaps; LOOP;
   ~1s horizontal slide (translateX, NOT cross-fade); autoplay ~5s with NO
   hover-pause.
6. **Cards (×6, `.media-29101`)** — image link (900×600 picsum at natural
   ratio, `margin-bottom: 20px`, descriptive alt) + title link (18px, w900,
   `#6c757d`); paraphrased product-ish titles.
7. **Dots** — one per page (2 desktop / 3 ≥600px / 6 mobile), 15×3px pill
   bars (`border-radius: 0`), `#cccccc` inactive / `#007bff` active,
   centered ~30px BELOW the carousel (normal flow, NOT overlaid); click →
   jump; active dot follows autoplay/loop wrap-around. Real `<button>`s with
   aria-labels.
8. **No arrows** — the source hides `.owl-nav`; render NO arrow buttons.
9. **Footer** — monorepo mandate: minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer).

## Implementation task outline

- [ ] Scaffold `apps/portofino` (copy simplest existing app; package
      `@free-react-templates/portofino`; `public/CNAME` =
      `portofino.free.componentdock.com`; homepage
      `https://portofino.free.componentdock.com`); root `npm install` +
      lockfile check (`grep -c "free-react-templates/portofino"`
      package-lock.json); `vite.config.ts` keeps `injectUiSource()`
- [ ] index.html: Google Fonts Roboto link (weights 300/400/500); no
      ColorLib assets/strings anywhere in the app
- [ ] `src/index.css` `@theme`: white page bg, Roboto family token,
      `#007bff` brand accent, `#f8f9fa` band color, `#6c757d` link gray,
      `#cccccc` inactive-dot gray
- [ ] Components (mirror existing app patterns, `cn()` from packages/ui):
      `App.tsx` (page wrapper + top heading + product section + footer),
      `ProductCarousel.tsx` (1/2/3 cards per view at <600 / ≥600 / ≥1000px,
      ~20px gaps, loop, ~1s horizontal slide, autoplay ~5s NO hover-pause),
      `ProductCard.tsx` (image link at natural 3:2 ratio with 20px bottom
      margin + descriptive alt; title link 18px w900 `#6c757d`),
      `CarouselDots.tsx` (one dot per page — 2/3/6 — 15×3px pill bars,
      `#cccccc` inactive / `#007bff` active, centered below the carousel,
      aria-labels, click → jump, active sync). NO arrow components.
- [ ] Tests (TDD, 100% coverage): page wrapper `py-[7em]` + white bg + Roboto;
      top heading (centered, ~20px, `my-12`, "Carousel #12" or paraphrase);
      left-half `#f8f9fa` band (50% width, full height, behind content);
      section heading (#007bff, left, `py-12`); six cards (image natural
      3:2, 20px bottom margin, descriptive alt, title 18px w900 gray link);
      1/2/3 cards per view at breakpoints with 20px gaps; loop wrap-around;
      ~1s horizontal slide; autoplay advances ~5s and does NOT pause on
      hover; dots (count per breakpoint, 15×3px pill shape, colors,
      position below carousel, click jump, active sync, aria-labels); NO
      arrow buttons rendered; mobile (no overflow, tappable dots ≥44px);
      footer link
- [ ] `npm run verify:app -- portofino`; commit `feat: add Portofino
(ColorLib Carousel 12) template`; PR + immediate squash merge; deploy
      check https://portofino.free.componentdock.com
- [ ] Bookkeeping on merge: `[ ]`→`[x]` for Carousel 12 in TEMPLATES.md +
      surge URL, `npm run readme:status`

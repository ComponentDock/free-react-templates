# Corniglia (ColorLib Carousel 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-corniglia`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 19" — the NINETEENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-19/).
  Single occurrence in TEMPLATES.md (line 727, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Corniglia**
  (nineteenth of the carousel-series renames; lineage: carousel-01 →
  wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 →
  lido, carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
  carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
  carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
  carousel-14 → taormina, carousel-15 → tropea, carousel-16 → procida,
  carousel-17 → vernazza, carousel-18 → manarola, carousel-19 → corniglia —
  theme: travel / destinations; Corniglia is the Cinque Terre village
  BETWEEN Vernazza and Manarola, continuing the Cinque Terre thread — the
  name is thematic, the content is a testimonial/quote carousel).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-19/`
  — HTTP 200, 14,900 bytes DOM (fetched + rendered + interacted 2026-08-15).
  **Gotcha:** the standard path `https://preview.colorlib.com/theme/carousel-19/`
  404s — the Bootstrap series is served under the `/theme/bootstrap/` prefix,
  and its stylesheets live under `.../theme/bootstrap/carousel-19/css/` (same
  finding as the Bootstrap Calendars and Carousel 01–18 preps). Stylesheets:
  `owl.carousel.min.css` (Owl 2.3.4 base) + `bootstrap.min.css` (4.3.1) +
  `style.css` + `fonts/icomoon/style.css` (icon font for the arrow glyphs).
  NO `animate.css` in this demo (unlike Carousel 17/18). Roboto + Arbutus
  Slab injected by the demo shell; load both via Google Fonts in the
  recreation.
- **What this demo IS:** a DARK single-section **TESTIMONIALS CAROUSEL** —
  ONE `.content` wrapper (`padding: 7rem 0`) on a DARK SLATE `#393e46`
  page, no navbar, no hero, no footer. Centered WHITE 20px heading
  (`h2.my-5.text-center.text-white`) above `.container` →
  `.owl-carousel.owl-1` with FOUR `blockquote.testimony-29101` slides:
  a large white Arbutus Slab serif quote (`p`, 24px, `#fff`,
  `line-height: 1.5`, weight 300, left-aligned inside a centered
  max-width-799px blockquote) + an author line (`p.author`, 14px, with
  `<cite>` in `#ccc`, italic). **KEY DIFFERENCES vs Carousel 18 (Manarola —
  do NOT copy Manarola's requirements:** (1) DARK page (`#393e46`) vs
  Manarola's white; (2) **ARROWS ON** (`nav: true` — Manarola has none);
  (3) **DOTS ON** (Owl default — Manarola has none); (4) **LOOP ON** (wraps —
  verified live: 8 `.owl-item`s = 4 real + 4 cloned); (5) **AUTOPLAY ON
  with hover-pause** (Manarola has none); (6) ~1s HORIZONTAL slide
  (`smartSpeed: 1000`, same as Manarola); (7) ONE slide per view at ALL
  breakpoints (same); (8) NO tabs, NO imagery — pure typography (Manarola
  has split image+text slides and a 3-tab bar).
- **Carousel config (`js/main.js` — fetched live via the page):**
  `$('.owl-1').owlCarousel({ loop: true, margin: 0, nav: true, items: 1,
smartSpeed: 1000, autoplay: true, autoplayHoverPause: true, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — 1 per view always, LOOP ON,
  AUTOPLAY ON (hover-pause), ARROWS ON, DOTS ON (Owl default — not
  overridden), ~1s slide. Recreate: 1-per-view, loop ON, autoplay with
  hover-pause, arrows + dots, ~1s slide.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally say "Carousel #9" (untouched copy from demo #9; this is demo
  #19 — the same artifact pattern as Carousel 17's "Carousel #7" and
  Carousel 18's "Carousel #8"; the SCREENSHOT shows the same "Carousel
  #9"). Recreation SHALL use "Carousel #19" (corrected) or a same-kind
  paraphrase ("Testimonials" / "What People Say" / "Our Clients Say").
- **Dead carousel furniture (do NOT reproduce):** `style.css` styles
  `.owl-1 .owl-nav .owl-prev` with `border: 1px solid red` and `.owl-next`
  with `border: 4px solid blue` (leftover debug scaffolding, same as
  Carousel 17/18) — but Owl's base CSS (`button { border: none }`) wins, so
  the LIVE arrows render borderless (computed `border: 0px` verified). The
  recreation renders clean white chevron arrows, NO red/blue borders. The
  icomoon icon font is only referenced by the navText spans — use
  lucide-react chevron icons (or inline SVG) instead.
- **Autoplay verified live:** the screenshot shows the FIRST dot active,
  but the live page's dots showed a LATER slide after a few idle seconds —
  the carousel advances on its own (autoplay ON) and wraps (loop ON).
  Hovering pauses it (`autoplayHoverPause: true`).
- **Arrows:** `.owl-nav` absolute, `top: 50%`, `width: 100%`; `.owl-prev`
  `left: 20px`, `.owl-next` `right: 20px`; white ~40px glyphs (`span:before
font-size: 40px`), `opacity: .5` → `1` on hover/focus, `z-index: 92`;
  HIDDEN below 991.98px (`@media (max-width: 991.98px) { display: none }`) —
  on tablets/phones the dots are the only navigation.
- **Dots:** `.owl-dots` absolute, `bottom: -80px`, centered (`left: 50%` +
  `translateX(-50%)`); 7px round dots (`border-radius: 50%`), `margin: 4px`,
  `background: rgba(255,255,255,0.5)`; active dot WHITE `#fff`. The content
  wrapper's generous bottom padding hosts them — recreation keeps ~80px of
  space below the carousel.
- **Blockquote:** `max-width: 799px`, `margin: 0 auto` (centered block),
  text LEFT-aligned (verified computed `text-align: left`). Quote `p`:
  Arbutus Slab serif, 24px, `#fff`, `line-height: 1.5` (36px computed),
  weight 300. Author `p.author`: 14px; `cite` `#ccc`, Arbutus Slab, italic.
- **Screenshot (carousel-19.jpg, 1200×972, AVIF):** browser chrome over the
  preview, solid dark slate `#393e46` background, centered small white sans
  heading "Carousel #9" (stale artifact), large white serif quote (lorem),
  "— Ryan Peters" in smaller italic serif left-aligned beneath, faint white
  chevron arrows left/right, four round dots bottom-center (first dot
  brighter = slide 1 active). Minimalist, elegant, editorial/literary —
  typography and whitespace driven, NO imagery at all.
- **Fonts:** Roboto (body/heading) + **Arbutus Slab** (quotes + author
  names — the serif-on-dark contrast is the demo's signature typographic
  move; do NOT render the quote in Roboto).
- **Dead/irrelevant classes:** the red/blue nav debug borders (suppressed
  by Owl base CSS), the icomoon icon font (only in unrendered navText
  spans). Only `.content`, `.container`, `h2`, `.owl-carousel`,
  `blockquote.testimony-29101` matter.
- **Mobile (<992px):** arrows hidden; dots remain the only navigation; 1
  quote per view; blockquote centered within the fluid container; no
  horizontal overflow; dots ≥44px tap targets.
- **Content note:** the demo repeats the SAME lorem quote with the SAME
  author ("— Ryan Peters") on all four slides. The recreation SHALL use
  four distinct paraphrased testimonials with four distinct author names
  (same content KIND: short third-party quote + attributed author), which
  is both more realistic and what a real testimonial section needs.

## Implementation tasks

- [ ] Copy the simplest existing app → `apps/corniglia`; rename package to
      `@free-react-templates/corniglia`
- [ ] `public/CNAME` = `corniglia.free.componentdock.com`; `"homepage"` =
      `https://corniglia.free.componentdock.com` in package.json
- [ ] index.html: Google Fonts Roboto (300/400/500) + Arbutus Slab (400),
      title "Corniglia"
- [ ] Single-section layout: DARK SLATE `#393e46` page, `py-[7em]` wrapper,
      centered ~1140px container, centered WHITE ~20px heading ("Carousel
      #19" or paraphrase — NOT "Carousel #9"); no navbar/hero/footer (plus
      the mandatory Component Dock footer)
- [ ] FOUR quote slides: serif quote (Arbutus Slab, ~24px, `#fff`,
      `line-height` ~1.5, weight 300, left-aligned in a centered ~799px
      block) + author line (~14px, `#ccc`, italic, "— <Name>"); four
      distinct paraphrased testimonials + four distinct author names; NO
      images anywhere (pure typography — picsum NOT needed)
- [ ] Carousel: ONE slide per view at every breakpoint; LOOP ON (wraps
      last→first); AUTOPLAY ON (~1s slide) with PAUSE-ON-HOVER (resume on
      leave)
- [ ] Arrows: chevron buttons vertically centered at the carousel edges
      (`left: 20px` / `right: 20px`), white ~40px glyphs (lucide-react
      ChevronLeft/ChevronRight), `opacity: .5` → `1` on hover/focus, NO
      red/blue borders (dead demo scaffolding — never reproduced); HIDDEN
      below 992px
- [ ] Dots: centered ~80px below the carousel, 7px round, `margin: 4px`,
      `rgba(255,255,255,0.5)`; active dot WHITE; click = jump to slide;
      active dot syncs on every slide change; ≥44px hit areas + accessible
      labels (aria-label on arrows, aria-current on the active dot)
- [ ] Responsive: ≥992px arrows visible; <992px arrows hidden, dots remain;
      no horizontal overflow at any width; blockquote centered within the
      fluid container
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh corniglia`
- [ ] PR: branch `feat/template-corniglia`, PR description with source slug,
      preview URL, tokens, renames (esp. "dark testimonials carousel —
      autoplay + loop + arrows + dots, ~1s slide — differs from Manarola's
      white tabbed media carousel"); merge immediately

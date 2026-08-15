# Template: Corniglia (Testimonials Carousel — Bootstrap Carousels #19)

## Purpose

Corniglia is a dark single-section testimonials carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 19" website template design
(source: https://colorlib.com/wp/template/carousel-19/), built under a
DIFFERENT name (Corniglia — the middle village of the Cinque Terre on the
Italian Riviera, sandwiched between Vernazza and Manarola, continuing the
travel/destinations naming theme of the "Bootstrap Carousels (20)" series
renames) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **corniglia** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-19`), and collides with nothing in `apps/`,
`openspec/specs/`, `docs/templates/`, or `TEMPLATES.md` (checked 2026-08-15
against origin/main; zero hits, including git history). It is the NINETEENTH
of the "Bootstrap Carousels (20)" series renames (lineage: carousel-01 →
wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
carousel-14 → taormina, carousel-15 → tropea, carousel-16 → procida,
carousel-17 → vernazza, carousel-18 → manarola, carousel-19 → corniglia —
theme: travel / destinations; Corniglia is the Cinque Terre village between
Vernazza (17) and Manarola (18), continuing the Cinque Terre thread; the name
is thematic, the content is a testimonial/quote carousel).

Corniglia lives in `apps/corniglia` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 19" — the NINETEENTH of the 20 "Bootstrap
  Carousels" demos. A **DARK TESTIMONIALS CAROUSEL** (quote slider): ONE
  `.content` wrapper (`padding: 7rem 0`) on a DARK SLATE `#393e46` page with
  a centered WHITE 20px heading above a `.owl-carousel.owl-1` holding FOUR
  `blockquote.testimony-29101` slides (quote paragraph + author line).
  **DIFFERS from Carousel 18 (Manarola — a WHITE tabbed media carousel with
  split image+text slides, NO arrows/dots, loop OFF, no autoplay): this
  demo is a DARK full-width quote carousel — 1 slide per view at all
  breakpoints, ARROWS ON (`nav: true`), DOTS ON (Owl default), LOOP ON,
  AUTOPLAY ON with hover-pause, ~1s slide, NO tabs.** No navbar, no hero
  band, no footer — the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-19/`
  (HTTP 200, 14,900 bytes DOM; fetched + rendered + interacted 2026-08-15).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/carousel-19/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–18 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-19/css/`. Stylesheets: `css/owl.carousel.min.css`
  (Owl Carousel 2.3.4 base — note its `button { border: none }` base rule
  kills the debug borders, see below), `css/bootstrap.min.css` (Bootstrap
  4.3.1), `css/style.css` (the template's custom rules, see tokens below),
  `fonts/icomoon/style.css` (icon font used by the nav arrows' spans).
  NO `animate.css` in this demo (unlike Carousel 17/18). Roboto is the
  declared body font and the quotes use "Arbutus Slab" (serif); neither is
  in a Google Fonts `<link>` in the demo head — ColorLib's demo shell
  injects them; the recreation loads Roboto + Arbutus Slab via Google Fonts
  in `index.html` per monorepo convention.
- **Carousel driven by `js/main.js` (fetched live via the page):**
  `$('.owl-1').owlCarousel({ loop: true, margin: 0, nav: true, items: 1,
smartSpeed: 1000, autoplay: true, autoplayHoverPause: true, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **1 slide per view at ALL
  breakpoints** (no `responsive` block), **LOOP ON** (wraps — verified live:
  the DOM held 8 `.owl-item`s = 4 real + 4 cloned), **AUTOPLAY ON** with
  **hover-pause** (verified live: the carousel advanced to slide 4 while
  idle, then paused on hover), **ARROWS ON** (`nav: true`), **DOTS ON**
  (Owl default — `dots` is not overridden), **~1s slide** (`smartSpeed:
1000`). This is the OPPOSITE of Manarola on every behavior axis except
  1-per-view and slide speed.
- **Verified live in the browser (2026-08-15, viewport 1280px):** dark
  slate `#393e46` page; heading "Carousel #9" rendered white, centered,
  20px, Roboto (`.my-5` = 48px vertical margins); the carousel showed the
  FIRST quote (white Arbutus Slab serif 24px, left-aligned, line-height 1.5,
  weight 300) with the author "— Ryan Peters" (14px, `cite` in `#ccc`,
  italic, Arbutus Slab) beneath; faint white chevron arrows at left/right
  edges (opacity .5, `left/right: 20px`, vertically centered on the
  carousel) and FOUR round dots bottom-center (active dot white,
  inactive rgba(255,255,255,.5)). **Autoplay confirmed:** after a few idle
  seconds the active dot advanced (the screenshot shows the FIRST dot
  active; the live page's dots showed a later slide — the carousel moves on
  its own). **Debug borders NOT rendered:** the computed `border` of the
  arrow buttons is `0px` — Owl's base CSS (`button { border: none }`) wins
  over `style.css`'s leftover `border: 1px solid red` (prev) / `4px solid
blue` (next) scaffolding, so the arrows render as clean white chevrons.
- **Screenshot (carousel-19.jpg, 1200×972, AVIF):** browser chrome over the
  preview, solid dark slate `#393e46` background, centered small white
  sans-serif heading "Carousel #9" (stale artifact), a large white serif
  quote paragraph (lorem), "— Ryan Peters" in smaller italic serif
  left-aligned beneath, faint white chevron arrows left/right, four round
  dots bottom-center (first dot brighter = slide 1 active). Minimalist,
  elegant, editorial/literary aesthetic — typography and whitespace driven,
  no imagery at all.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally read "Carousel #9" — a copy-paste artifact (this is demo #19 of
  the series; the heading was not updated from demo #9 — the same artifact
  pattern as Carousel 17's "Carousel #7" and Carousel 18's "Carousel #8";
  the SCREENSHOT shows the same stale "Carousel #9"). The recreation SHALL
  NOT reproduce the wrong number: use "Carousel #19" (corrected) or an
  equivalent same-kind paraphrase (e.g. "Testimonials", "What People Say",
  "Our Clients Say").
- **Dead/decorative detail (do NOT reproduce):** `style.css` still styles
  `.owl-1 .owl-nav .owl-prev` with `border: 1px solid red` and `.owl-next`
  with `border: 4px solid blue` (leftover debug scaffolding, exactly as in
  Carousel 17/18) — but the live rendered arrows have NO borders (Owl's
  base CSS overrides them). The recreation SHALL render clean white chevron
  arrows with NO red/blue borders. The icomoon icon font is only referenced
  by the navText spans — the recreation uses lucide-react chevron icons
  (or inline SVG) instead.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the DARK SLATE `#393e46` page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px;
     the carousel is NOT full-bleed — it is constrained to the container).
     - `h2.my-5.text-center.text-white` — the heading: "Carousel #9" in the
       demo (copy-paste artifact — see note; use "Carousel #19" or
       paraphrase), 20px, Roboto, WHITE, centered, `margin: 3rem 0`
       (`.my-5` = 48px computed).
     - `.owl-carousel.owl-1` — the carousel: FOUR slide DIVs, each
       `blockquote.testimony-29101` (max-width 799px, `margin: 0 auto`,
       text left-aligned):
       - `p` — the quote: "Even the all-powerful Pointing has no control
         about the blind texts it is an almost unorthographic life One day
         however a small line of blind text by the name of Lorem Ipsum
         decided to leave for the far World of Grammar." (Arbutus Slab
         serif, 24px, WHITE `#fff`, `line-height: 1.5`, weight 300).
       - `p.author` — "— Ryan Peters" wrapped in `<cite>` (14px; cite
         color `#ccc`, Arbutus Slab, italic).
   - Carousel furniture: ARROWS (`.owl-nav` — absolute, `top: 50%`,
     `width: 100%`; `.owl-prev` `left: 20px`, `.owl-next` `right: 20px`,
     white 40px chevron spans, `opacity: .5` → `1` on hover; HIDDEN below
     991.98px via `@media (max-width: 991.98px) { display: none }`) and
     DOTS (`.owl-dots` — absolute, `bottom: -80px`, centered via
     `left: 50%` + `translateX(-50%)`; 7px round dots, `margin: 4px`,
     `background: rgba(255,255,255,0.5)`, active dot WHITE).

## Design tokens (from preview stylesheet `css/style.css` + live computed styles)

- **Page background:** DARK SLATE `#393e46` (set on BOTH `body` and
  `.content` — the whole page is dark).
- **Heading color:** WHITE `#fff` (`h2.text-white`), 20px, Roboto, centered,
  `margin: 3rem 0` (`.my-5`).
- **Quote text:** WHITE `#fff`, **Arbutus Slab** serif, 24px,
  `line-height: 1.5`, weight 300, LEFT-aligned within the centered
  max-width-799px blockquote.
- **Author line:** `p.author` 14px; `cite` color `#ccc`, Arbutus Slab,
  italic, LEFT-aligned.
- **Body paragraph color (outside the blockquote):** `#b3b3b3`, weight 300
  (only relevant if the recreation adds any auxiliary text).
- **Font family:** Roboto (`"Roboto", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`) for
  body, heading, and arrows; **Arbutus Slab** (serif) for the quotes and
  author names — the serif-on-dark contrast is the demo's signature
  typographic move; do NOT render the quote in Roboto. Load both via Google
  Fonts `<link>` in `index.html` (Roboto 300/400/500 + Arbutus Slab 400).
- **Brand color:** none — the palette is monochrome dark (slate page, white
  text, grey author, translucent-white dots). The only "color" is the
  translucent white of the inactive dots.
- **Carousel navigation:** ARROWS ON — chevron buttons absolutely positioned
  at the carousel's vertical center (`top: 50%`), `left: 20px` /
  `right: 20px`, white 40px glyphs, `opacity: .5` (→ `1` on hover/focus),
  `z-index: 92`, HIDDEN below 991.98px (`display: none`). DOTS ON — centered
  below the carousel (`bottom: -80px`, `left: 50%` + `translateX(-50%)`),
  7px circles (`border-radius: 50%`), `margin: 4px`,
  `rgba(255,255,255,0.5)` → active WHITE `#fff`. NO red/blue debug borders
  (dead scaffolding — Owl's base CSS suppresses them).
- **Radii:** only the carousel dots are round (7px, 50%); everything else is
  square-cornered (no border-radius in `style.css`).
- **Carousel behavior:** 1 slide per view at ALL breakpoints, `margin: 0`,
  LOOP ON (wraps), AUTOPLAY ON with hover-pause, ARROWS ON, DOTS ON, default
  ~1s slide (`smartSpeed: 1000`).
- **Spacing rhythm:** `.content` `padding: 7rem 0`; page h2 `.my-5` = 3rem
  top/bottom; blockquote `max-width: 799px` centered; dots `bottom: -80px`
  (the content's generous bottom padding hosts them — recreation: keep ~80px
  of space below the carousel for the dots).
- **Container:** Bootstrap `.container` behavior (max-width 1140px ≥1200px,
  fluid below) — the carousel is centered and container-constrained, NOT
  full-bleed.
- **Dark/light treatment:** DARK page throughout — slate `#393e46`
  background, white heading + quotes, grey author; NO imagery anywhere (the
  demo is pure typography). Contrast is the design.
- **Breakpoints:** arrows disappear below 992px (`display: none` under
  991.98px — the dots remain the only navigation on tablets/phones); the
  carousel stays 1-per-view at every width; the blockquote keeps its 799px
  max-width (fluid below that, still centered).

## Requirements

### Requirement: Page composition

The page SHALL render as a single centered dark section with a white heading
above a quote carousel, per the source's one-section layout.

#### Scenario: Single dark section layout

Given the app is loaded, when the page renders, then exactly one content
section is present with generous vertical padding (`py-[7em]`), a dark slate
`#393e46` page background, and no navbar, hero band, or footer.

#### Scenario: Section heading

Given the page is rendered, when the user looks above the carousel, then a
centered white heading (~20px, Roboto, ~3rem vertical margins) reads
"Carousel #19" or a same-kind paraphrase (NOT the demo's "Carousel #9"
copy-paste artifact).

### Requirement: Quote carousel slides

The carousel SHALL show four slides, each a blockquote with a large white
serif quote paragraph and a small author attribution line, per the source's
`blockquote.testimony-29101` pattern.

#### Scenario: Four quote slides

Given the carousel is rendered, then four slides exist, each composed of a
serif quote paragraph (Arbutus Slab, ~24px, white `#fff`, `line-height`
~1.5, weight 300, left-aligned inside a centered ~799px max-width block)
and an author line ("— <Name>" style, ~14px, `#ccc`, italic) — paraphrased
copy of the same kind (short third-party testimonial + attributed author
name; the demo repeats one lorem quote with one author — the recreation
SHALL use four distinct testimonial quotes with four distinct author names
for realism, keeping the same content kind).

#### Scenario: One slide per view at every breakpoint

Given any viewport width (<600px, 600–999px, or ≥1000px), then exactly one
slide is visible at a time (the source has NO responsive block — `items: 1`
always).

### Requirement: Carousel behavior

The carousel SHALL show one quote at a time, slide (~1s), autoplay with
pause-on-hover, and wrap around, matching `js/main.js` (`loop: true`,
`nav: true`, `smartSpeed: 1000`, `autoplay: true`,
`autoplayHoverPause: true`, dots on by default).

#### Scenario: Autoplay advances slides

Given the page is idle, then the carousel advances to the next slide on its
own (~1s slide) and wraps from the last slide back to the first (loop ON).

#### Scenario: Autoplay pauses on hover

Given the user hovers (or focuses) the carousel, then autoplay pauses while
the pointer/focus remains, resuming when it leaves.

#### Scenario: Manual navigation with arrows

Given the carousel is on any slide, then clicking the left/right arrow
buttons moves to the previous/next slide (~1s), including wrap-around.

#### Scenario: Manual navigation with dots

Given the carousel is on any slide, then clicking a dot jumps to the
corresponding slide and the active dot updates to match the visible slide.

#### Scenario: Active dot sync

Given the slide changes by any means (autoplay, arrows, dots), then exactly
one dot is active (white, `rgba(255,255,255,0.5)` for the others) matching
the visible slide's index.

### Requirement: Responsive behavior

The template SHALL stay usable and unbroken on mobile and desktop, with the
arrows hidden on small screens per the source.

#### Scenario: Arrows hidden below 992px

Given a viewport below 992px, then the arrow buttons are NOT shown (the
source hides `.owl-nav` under 991.98px) and the dots remain the only
navigation control.

#### Scenario: Carousel usable on mobile

Given a viewport below 768px, then the carousel shows one quote per view,
the blockquote stays centered within the fluid container, the dots are
reachable (≥44px hit areas), and there is no horizontal overflow.

#### Scenario: Desktop layout

Given a viewport ≥992px, then arrows are visible at the carousel's vertical
center (`left: 20px` / `right: 20px`, white, ~40px glyphs, `opacity: .5`),
the dots sit ~80px below the carousel, and the whole section is constrained
to the centered ~1140px container.

### Requirement: Footer with Component Dock link

Every monorepo template SHALL ship a minimal footer linking Component Dock.

#### Scenario: Footer attribution

Given the page is rendered, then a minimal footer links "Component Dock" →
https://www.componentdock.com/.

## Verification checklist

- [ ] `apps/corniglia` exists; package `@free-react-templates/corniglia`;
      `public/CNAME` = `corniglia.free.componentdock.com`; `homepage` =
      `https://corniglia.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (300/400/500) AND Arbutus Slab
      (400 — the quote font; the serif-on-dark contrast is the signature
      typographic move); no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/corniglia` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on DARK SLATE `#393e46` background;
      centered WHITE heading (~20px, Roboto, ~3rem top/bottom margins) —
      "Carousel #19" or same-kind paraphrase (NOT the demo's "Carousel #9"
      copy-paste artifact); carousel constrained to a centered ~1140px
      container
- [ ] FOUR quote slides (picsum NOT needed — the demo has NO imagery; pure
      typography): serif quote (Arbutus Slab, ~24px, `#fff`,
      `line-height` ~1.5, weight 300) + author line (~14px, `#ccc`, italic,
      "— <Name>"); four distinct paraphrased testimonials with four distinct
      author names; text left-aligned inside a centered ~799px max-width
      block
- [ ] Carousel: ONE slide per view at every breakpoint; LOOP ON (wraps
      last→first); AUTOPLAY ON (~1s slide) with PAUSE-ON-HOVER; ARROWS ON +
      DOTS ON
- [ ] Arrows: chevron buttons vertically centered at the carousel edges
      (`left: 20px` / `right: 20px`), white ~40px glyphs (lucide-react
      chevron icons or inline SVG — NOT the icomoon font), `opacity: .5` →
      `1` on hover/focus, NO red/blue borders (dead demo scaffolding —
      never reproduced); HIDDEN below 992px
- [ ] Dots: centered ~80px below the carousel, 7px round, `margin: 4px`,
      `rgba(255,255,255,0.5)`; active dot WHITE; click = jump to slide;
      active dot syncs on every slide change; ≥44px hit areas + accessible
      labels (aria-label on arrows, aria-current/aria-selected on dots)
- [ ] Responsive: ≥992px arrows visible; <992px arrows hidden, dots remain;
      no horizontal overflow at any width; blockquote centered within the
      fluid container
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh corniglia`
- [ ] PR: branch `feat/template-corniglia`, PR description with source slug,
      preview URL, tokens, renames (esp. "dark testimonials carousel —
      autoplay + loop + arrows + dots, ~1s slide — differs from Manarola's
      white tabbed media carousel"); merge immediately

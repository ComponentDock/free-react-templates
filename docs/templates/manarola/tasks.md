# Manarola (ColorLib Carousel 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-manarola`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 18" — the EIGHTEENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-18/).
  Single occurrence in TEMPLATES.md (line 725, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Manarola**
  (eighteenth of the carousel-series renames; lineage: carousel-01 →
  wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 →
  lido, carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
  carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
  carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
  carousel-14 → taormina, carousel-15 → tropea, carousel-16 → procida,
  carousel-17 → vernazza, carousel-18 → manarola — theme: travel /
  destinations; Manarola is a sibling Cinque Terre village of Vernazza —
  the name is thematic, the content is a tabbed media carousel).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-18/`
  — HTTP 200, 17,303 bytes DOM (fetched + rendered + interacted 2026-08-15).
  **Gotcha:** the standard path `https://preview.colorlib.com/theme/carousel-18/`
  404s — the Bootstrap series is served under the `/theme/bootstrap/` prefix,
  and its stylesheets live under `.../theme/bootstrap/carousel-18/css/` (same
  finding as the Bootstrap Calendars and Carousel 01–17 preps). Stylesheets:
  `owl.carousel.min.css` (Owl 2.3.4 base) + `bootstrap.min.css` (4.3.1) +
  `animate.css` (LOADED but NOT used by this demo) + `style.css` +
  `fonts/icomoon/style.css` (icon font — dead, see below) + Roboto +
  Playfair Display (injected by the demo shell; load both via Google Fonts
  in the recreation).
- **What this demo IS:** a WHITE single-section **TABBED MEDIA CAROUSEL** —
  ONE `.content` wrapper (`padding: 7rem 0`), no navbar, no hero, no footer.
  Centered near-black heading (`.h2.my-5.text-center`, 20px, `#212529`) above
  a **3-TAB BAR** (`.d-flex.carousel-nav`: "First Tab" / "Second Tab" /
  "Third Tab", equal-width columns, `border-bottom: 1px solid #ccc`, active
  tab black + 1px black underline) above `.container` →
  `.owl-carousel.owl-1` with THREE **SPLIT MEDIA** slides
  (`.media-29101 d-md-flex`): image `flex: 0 0 50%` left + `.text`
  (`padding: 50px`) right — small UPPERCASE category link ("Travel — First
  Tab", `#adb5bd`, 12px, bold, `.2rem` tracking) + **Playfair Display serif
  headline** ("Take your mobile photography to the next level", 2rem,
  `#000`, `line-height: 1.3`, `margin-bottom: 30px`) + lorem paragraph
  (`#999999`, weight 300).
  **KEY DIFFERENCES vs Carousel 17 (Vernazza) — do NOT copy Vernazza's
  requirements:** (1) slides are SPLIT media (image 50% + text 50%), not
  full-width images; (2) **NO ARROWS** (Vernazza shows white chevrons) and
  **NO DOTS** (Vernazza overlays white dots) — the TAB BAR is the ONLY
  navigation; (3) **LOOP OFF** (Vernazza loops); (4) **~1s HORIZONTAL slide**
  (`smartSpeed: 1000`, Owl default translate) — Vernazza slides VERTICALLY at
  ~450ms via animate.css (which is loaded here but NOT configured); (5)
  **NO autoplay** (same as Vernazza); (6) ONE slide per view at ALL
  breakpoints (same as Vernazza); (7) slide text uses a SERIF display font
  (Playfair Display) — Vernazza has no text on slides at all.
- **Carousel config (`js/main.js` — fetched live via the page):**
  `$('.owl-1').owlCarousel({ loop: false, margin: 0, nav: false, dots:
false, items: 1, smartSpeed: 1000, autoplay: false, navText: […] })` —
  1 per view always, LOOP OFF, NO autoplay, NAV OFF (no arrows), DOTS OFF
  (no dots), ~1s HORIZONTAL slide. The TAB BAR drives it: each `.carousel-nav
a` gets `data-num` = slide index; click → `owl.trigger('to.owl.carousel',
[index, 1500])` (slide-to target in ~1.5s); `changed.owl.carousel` → remove
  `.active` from all tabs, add to `a[data-num=<current index>]`. Recreate:
  1-per-view, loop OFF, ~1s horizontal slide, no autoplay, no arrows/dots,
  3-tab bar that slide-tos the matching slide and syncs the underline.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally say "Carousel #8" (untouched copy from demo #8; this is demo
  #18 — same artifact pattern as Carousel 17's "Carousel #7"). The
  screenshot shows yet another stale number ("Carousel #6"). Recreation
  SHALL use "Carousel #18" (corrected) or a same-kind paraphrase ("Featured"
  / "Our Work" / "Gallery").
- **Dead carousel furniture (do NOT reproduce):** `style.css` styles
  `.owl-1 .owl-nav` (incl. leftover debug `border: 1px solid red` /
  `border: 4px solid blue`, same as Carousel 17) and `.owl-dots` (7px round
  white dots), but `nav: false` + `dots: false` mean NOTHING renders. Live
  page + screenshot show NO arrows, NO dots, NO red/blue — only the tab bar.
  The recreation renders the tab bar as the ONLY navigation.
- **Tab underline mechanics:** tabs are `<a>` links inside Bootstrap `.col`
  columns (`position: relative`); the active tab's `::before` (`bottom: -1px;
left: 0; right: 0; border-bottom: 1px solid #000`) draws a black underline
  spanning the tab column, sitting on the bar's `1px solid #ccc` bottom
  border. Recreation: equal-width tabs in a row, `1px solid #ccc` bottom
  border on the bar, active tab = black text + `border-b border-black`
  (Tailwind) spanning the tab. Tabs must be real buttons (≥44px hit areas,
  aria-current or aria-selected semantics) — NOT `<a href="#">` dead links.
- **Media split breakpoints:** `d-md-flex` applies from `md` (768px) up —
  two columns (image 50% / text 50%, text padding 50px); below 991.98px the
  text padding drops to 20px; below `md` the slide STACKS (image full-width
  top, text below, `width: 100%`). Match with `flex-col md:flex-row` + text
  `p-5 md:p-[50px]` style utilities.
- **Slide images:** the SAME three 1900×1150 editorial book/lifestyle photos
  as Vernazza/Carousel 17: `hero_1.jpg` (hand holding a "GENESIS" paperback
  — warm beige/terracotta wall, blurred dried botanicals, mountain-silhouette
  cover art), `hero_2.jpg` (hand in white knit sleeve holding the magazine
  out of a matte teal box stacked on a dusty-blue box, eucalyptus sprig,
  cream wall), `hero_3.jpg` ("BOOK OF PROVERBS" hardcover against deep
  crimson fabric, still-life cover art). Warm/muted/sophisticated palette
  (cream, beige, teal, dusty blue, crimson), bookshop/lifestyle theme
  (despite the "Travel" copy label). Recreation: THREE wide picsum
  placeholders (screen seeds for editorial/warm-tone subjects per the
  replication skill), descriptive alt text.
- **Screenshot (carousel-18.jpg, 1200×972, AVIF):** browser chrome over
  `ui-preview.colorlib.com`, white page, centered small dark sans heading
  "Carousel #6" (stale artifact), tab bar with black underline under "First
  Tab", split hero — warm-toned hand/book photo left, "TRAVEL — FIRST TAB" +
  serif headline + lorem right. Minimalist, flat, whitespace-heavy; the only
  color lives in the photos.
- **Fonts:** Roboto (body/UI/tabs/labels) + **Playfair Display** (slide
  headlines — the serif-on-sans contrast is the demo's signature
  typographic move; do NOT render the headline in Roboto).
- **Dead/irrelevant classes:** `.owl-nav`/`.owl-dots` (unused), the icomoon
  icon font (only referenced by the unrendered navText spans), `animate.css`
  (loaded, unused). Only `.content`, `.container`, `.carousel-nav`,
  `.media-29101` matter.
- **Mobile (<768px):** stacked media (image top, text below), 1 slide per
  view, no horizontal overflow, tabs ≥44px tap targets; tab bar stays a
  single row.

## Implementation tasks

- [ ] Copy the simplest existing app → `apps/manarola`; rename package to
      `@free-react-templates/manarola`
- [ ] `public/CNAME` = `manarola.free.componentdock.com`; `"homepage"` =
      `https://manarola.free.componentdock.com` in package.json
- [ ] index.html: Google Fonts Roboto (300/400/500) + Playfair Display
      (400/700), title "Manarola"
- [ ] Single-section layout: white page, `py-[7em]` wrapper, centered ~1140px
      container, centered near-black ~20px heading ("Carousel #18" or
      paraphrase — NOT "Carousel #8")
- [ ] Tab bar: three equal-width tab buttons ("First Tab" / "Second Tab" /
      "Third Tab" or paraphrases), `1px solid #ccc` bottom border, 40px
      bottom margin, ~20px padding, centered, grey `#999`; active = black +
      `border-b border-black` spanning the tab; first tab active initially;
      ≥44px hit areas + accessible labels (aria-selected / aria-current)
- [ ] Carousel: THREE split media slides — picsum placeholders (screened
      per replication skill, editorial/warm-tone subjects, descriptive alt) + text column (uppercase letter-spaced category "Travel — …Tab" style,
      serif Playfair Display headline ~2rem `#000`, lorem paragraph
      `#999999` weight 300)
- [ ] Carousel behavior: ONE slide per view at every breakpoint; LOOP OFF
      (no wrap-around); ~1s HORIZONTAL slide (NOT vertical, NOT cross-fade);
      NO autoplay (idle = stays put)
- [ ] NO arrows, NO dots, NO red/blue borders anywhere (dead demo
      scaffolding — never reproduced); the tab bar is the only navigation
- [ ] Tab interaction: click tab → slide to matching slide (~1s–1.5s
      horizontal); active tab underline syncs on every slide change
- [ ] Responsive: ≥768px split (image left 50% / text right 50%, text
      padding ~50px); <768px stacked (image full-width top, text below,
      ~20px padding); no horizontal overflow; tabs tappable
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh manarola`
- [ ] PR: branch `feat/template-manarola`, PR description with source slug,
      preview URL, tokens, renames (esp. "tab-driven media carousel — NO
      arrows/dots, loop off, ~1s horizontal slide — differs from Vernazza");
      merge immediately

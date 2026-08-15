# Template: Manarola (Tabbed Media Carousel — Bootstrap Carousels #18)

## Purpose

Manarola is a tab-driven media carousel template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Carousel
18" website template design
(source: https://colorlib.com/wp/template/carousel-18/), built under a
DIFFERENT name (Manarola — a cliffside fishing village on the Italian
Riviera, one of the five villages of the Cinque Terre, continuing the
travel/destinations naming theme of the "Bootstrap Carousels (20)" series
renames) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **manarola** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-18`), and collides with nothing in `apps/`,
`openspec/specs/`, `docs/templates/`, or `TEMPLATES.md` (checked 2026-08-15
against origin/main; zero hits, including git history). It is the EIGHTEENTH
of the "Bootstrap Carousels (20)" series renames (lineage: carousel-01 →
wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
carousel-14 → taormina, carousel-15 → tropea, carousel-16 → procida,
carousel-17 → vernazza, carousel-18 → manarola — theme: travel /
destinations; Manarola is a sibling village of Vernazza, continuing the
Cinque Terre thread; the name is thematic, the content is a tabbed media
carousel).

Manarola lives in `apps/manarola` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 18" — the EIGHTEENTH of the 20 "Bootstrap
  Carousels" demos. A **TABBED MEDIA CAROUSEL**: ONE `.content` wrapper
  (`padding: 7rem 0`) on a WHITE page with a centered near-black 20px heading
  (the demo text is a copy-paste artifact — see note below) above a
  `.carousel-nav` TAB BAR (three equal-width tabs: "First Tab", "Second Tab",
  "Third Tab") and a `.container` → `.owl-carousel.owl-1` holding **THREE**
  SPLIT MEDIA slides (`.media-29101 d-md-flex`): a 50%-width image beside a
  50%-width text block (small uppercase category link + large SERIF headline
  - lorem paragraph). **DIFFERS from Carousel 17 (Vernazza — a full-width
    image carousel with visible arrows, overlaid dots, loop ON, ~450ms VERTICAL
    slide): this demo is a TAB-switched media carousel — 1 slide per view at
    all breakpoints, NO arrows, NO dots, LOOP OFF, ~1s HORIZONTAL slide, NO
    autoplay; navigation is the TAB BAR (click a tab → slide-to that index,
    active tab gets a black underline, active tab syncs when the slide
    changes).** No navbar, no hero band, no footer — the section is the whole
    page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-18/`
  (HTTP 200, 17,303 bytes DOM; fetched + rendered + interacted 2026-08-15).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/carousel-18/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–17 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-18/css/`. Stylesheets: `css/owl.carousel.min.css`
  (Owl Carousel 2.3.4 base), `css/bootstrap.min.css` (Bootstrap 4.3.1,
  separate file), `css/style.css` (the template's custom rules, see tokens
  below), `css/animate.css` (Animate.css — loaded but NOT used by this
  demo's config, unlike Carousel 17), `fonts/icomoon/style.css` (icon font
  used only by the dead nav-text spans — see note below). Roboto is the
  declared body font and the slide headlines use "Playfair Display" (serif);
  neither is in a Google Fonts `<link>` in the demo head — ColorLib's demo
  shell injects them; the recreation loads Roboto + Playfair Display via
  Google Fonts in `index.html` per monorepo convention.
- **Carousel driven by `js/main.js` (fetched live via the page):**
  `$('.owl-1').owlCarousel({ loop: false, margin: 0, nav: false, dots:
false, items: 1, smartSpeed: 1000, autoplay: false, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **1 slide per view at ALL
  breakpoints** (no `responsive` block), **LOOP OFF**, **AUTOPLAY OFF**,
  **ARROWS OFF** (`nav: false`), **DOTS OFF** (`dots: false`). The tab bar
  drives it: each `.carousel-nav a` gets a `data-num` index and on click
  calls `owl.trigger('to.owl.carousel', [slide_index, 1500])` (slide-to
  target in ~1.5s); the `changed.owl.carousel` event removes `.active` from
  all tabs and adds it to `a[data-num=<current index>]`. No `animateOut` /
  `animateIn` → the transition is Owl's DEFAULT **HORIZONTAL** translate
  slide at `smartSpeed: 1000` (1s) — NOT the vertical animate.css slide of
  Carousel 17. Recreate: 1-per-view carousel, loop OFF, no autoplay, NO
  arrows, NO dots, ~1s horizontal slide, tab bar (3 tabs) that slide-to the
  matching slide (~1.5s) and syncs the active-tab underline.
- **Verified live in the browser (2026-08-15):** heading "Carousel #8"
  rendered (20px, near-black, centered, `.my-5` = 48px vertical margins);
  the tab bar showed "First Tab" (ACTIVE — black text + black underline
  spanning the tab), "Second Tab" and "Third Tab" (grey `#999`, no
  underline); the carousel showed the FIRST slide — split layout, GENESIS
  paperback photo on the left, "TRAVEL — FIRST TAB" category + serif
  headline "Take your mobile photography to the next level" + lorem
  paragraph on the right. **Clicked "Second Tab": the slide switched to the
  hero_2 photo (magazine + eucalyptus + teal boxes), the category updated to
  "TRAVEL — SECOND TAB", and the active underline moved to "Second Tab".**
  The screenshot (`carousel-18.jpg`, 1200×972, AVIF) shows the same: browser
  chrome, white page, centered small dark sans heading (artifact "Carousel
  #6" in the screenshot), tab bar with black underline under "First Tab",
  split hero — warm-toned hand/book photo left, text right.
- **Slide images (from the preview, NOT copied — picsum placeholders only):**
  the SAME three 1900×1150 editorial book/lifestyle photos as Carousel 17
  (Vernazza): `hero_1.jpg` (hand holding a "GENESIS" paperback against a
  warm beige/terracotta wall with blurred dried botanicals — mountain-silhouette
  cover art), `hero_2.jpg` (hand in white knit sleeve holding the magazine
  out of a matte teal gift box stacked on a dusty-blue box, eucalyptus
  sprig, cream wall), `hero_3.jpg` ("BOOK OF PROVERBS" hardcover standing
  against deep crimson fabric, still-life cover art). Warm, muted,
  sophisticated palette (cream/beige, muted teal, dusty blue, deep crimson),
  bookshop/lifestyle-subscription subject matter despite the "Travel" copy
  label. The recreation SHOULD use three wide picsum placeholders (screen
  seeds per the colorlib-template-replication skill's seed-screening method)
  with the same kind of editorial/warm-tone subject.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (`css/bootstrap.min.css`) + Owl Carousel 2.3.4 + Animate.css (loaded, not
  used) + icomoon icon font + Roboto + Playfair Display. The recreation must
  NOT copy any of this — build a pure-React tabbed carousel (tab buttons +
  slide tracking, ~1s horizontal slide via CSS transforms/transitions),
  placeholder picsum photos.
- **Fidelity note (heading copy-paste artifact):** the demo `<title>` and the
  visible `h2` literally read "Carousel #8" — a copy-paste artifact (this is
  demo #18 of the series; the heading was not updated from demo #8 — the
  same artifact pattern as Carousel 17's "Carousel #7"; the SCREENSHOT shows
  yet another stale number, "Carousel #6"). The recreation SHALL NOT
  reproduce the wrong number: use "Carousel #18" (corrected) or an
  equivalent same-kind paraphrase (e.g. "Featured", "Our Work", "Gallery").
- **Fidelity note (dead carousel furniture — do NOT reproduce):** `css/style.css`
  still styles `.owl-1 .owl-nav` / `.owl-dots` (including the leftover debug
  scaffolding `border: 1px solid red` / `border: 4px solid blue` on the nav
  buttons, exactly as in Carousel 17), but `js/main.js` sets `nav: false`
  and `dots: false`, so NO arrows and NO dots are ever rendered. The
  screenshot and live page show NO arrows and NO dots — only the tab bar.
  The recreation SHALL render the tab bar as the ONLY navigation: no arrows,
  no dots, no red/blue borders.
- **Fidelity note (tab underline mechanics):** `.carousel-nav a` is an
  inline-block link inside Bootstrap `.col` columns (which are
  `position: relative`); the active tab's `::before` (`position: absolute;
bottom: -1px; left: 0; right: 0; border-bottom: 1px solid #000`) renders a
  black underline spanning the active tab column, sitting on the tab bar's
  `border-bottom: 1px solid #ccc`. Recreation: tabs are equal-width columns
  in a row with a `1px solid #ccc` bottom border; the active tab shows black
  text + a 1px black underline spanning the tab (Tailwind: relative tab +
  `border-b` on the active one, or an equivalent).
- **Fidelity note (no autoplay, no loop, horizontal slide):** `loop: false`
  (the carousel does NOT wrap; tab 0 is the first slide, tab 2 the last),
  `autoplay: false` (idle = stays put), and the slide motion is the default
  ~1s HORIZONTAL Owl translate (`smartSpeed: 1000`), with tab clicks
  animating to the target over 1500ms (`to.owl.carousel` duration). This is
  the OPPOSITE of Vernazza on loop and direction (Vernazza: loop ON, VERTICAL
  ~450ms, arrows + dots).
- **Fidelity note (media split stacks below md):** `.media-29101 d-md-flex`
  is a two-column flex row from the `md` breakpoint (768px) up (image
  `flex: 0 0 50%` left, `.text` right with `padding: 50px`). Below 991.98px
  the text padding drops to 20px; below the `md` breakpoint the `d-md-flex`
  class stops applying and the slide stacks VERTICALLY: image full-width on
  top, text below (`width: 100%`). The recreation must match this stacking
  behavior (flex-col on mobile, md:flex-row).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the WHITE page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px;
     the carousel is NOT full-bleed — it is constrained to the container).
     - `h2.my-5.text-center` — the heading: "Carousel #8" in the demo
       (copy-paste artifact — see note; use "Carousel #18" or paraphrase),
       20px, Roboto, near-black `#212529`, centered, `margin: 3rem 0`
       (`.my-5` = 48px computed).
     - `.d-flex.carousel-nav` — the TAB BAR: `width: 100%`,
       `border-bottom: 1px solid #ccc`, `margin-bottom: 40px`; THREE
       equal-width columns (`col`), each an `<a href="#">` link ("First
       Tab" / "Second Tab" / "Third Tab"), `padding: 20px`,
       `text-align: center`, color `#999` → `#000` on hover/active; the
       active tab's `::before` draws a `1px solid #000` underline spanning
       the tab column.
     - `.owl-carousel.owl-1` — the carousel: THREE slide DIVs, each
       `.media-29101 d-md-flex w-100` (split media):
       - Slide 1 → `hero_1.jpg` (GENESIS paperback, beige wall) + text:
         `a.category` "Travel — First Tab" (uppercase, 12px, bold,
         `letter-spacing: .2rem`, color `#adb5bd`, `margin-bottom: 1.5rem`
         = `.mb-4`), `h2` → "Take your mobile photography to the next
         level" (Playfair Display serif, `2rem`, `line-height: 1.3`,
         `margin-bottom: 30px`, link color `#000`), `p` lorem ipsum
         (`#999999`, weight 300).
       - Slide 2 → `hero_2.jpg` (magazine + eucalyptus + teal boxes) +
         same text with "Travel — Second Tab".
       - Slide 3 → `hero_3.jpg` (Book of Proverbs vs crimson fabric) +
         same text with "Travel — Third Tab".
   - Carousel furniture: NONE rendered — `nav: false` and `dots: false` in
     the config (the `.owl-nav`/`.owl-dots` CSS is dead code; see note).

## Design tokens (from preview stylesheet `css/style.css` + Bootstrap base)

- **Page background:** WHITE (`#fff` — Bootstrap body default).
- **Heading color (page h2):** near-black `#212529` (Bootstrap's default
  body color), weight 500, 20px, Roboto.
- **Paragraph color:** `#999999` (light gray), weight 300.
- **Category label:** `#adb5bd` (Bootstrap secondary-ish gray), UPPERCASE,
  12px, bold, `letter-spacing: .2rem`, `margin-bottom: 1.5rem`.
- **Slide headline:** `#000`, **Playfair Display** serif, `2rem`,
  `line-height: 1.3`, `margin-bottom: 30px` (serif headline on a sans body —
  the demo's key typographic contrast; do NOT lose the serif).
- **Font family:** Roboto (`"Roboto", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) for body, tabs,
  category labels, and page heading; Playfair Display for the slide
  headlines. Load both via Google Fonts `<link>` in `index.html` (Roboto
  300/400/500 + Playfair Display 400/700).
- **Brand color:** none in the source (monochrome white/near-black/gray page;
  the only color is inside the photographic slides).
- **Tabs (the only interactive elements):** bar `border-bottom: 1px solid
#ccc`, `margin-bottom: 40px`; tab links `padding: 20px`, centered,
  `color: #999`; hover AND active `color: #000`; active tab additionally
  gets a `1px solid #000` underline spanning the tab (recreation: relative
  tab + bottom border on active). Inactive tabs have NO underline.
- **Radii:** none — everything is square-cornered (no border-radius
  anywhere in `style.css`).
- **Carousel behavior:** 1 slide per view at ALL breakpoints, `margin: 0`,
  LOOP OFF (no wrap), NO autoplay, NO arrows, NO dots, default ~1s
  HORIZONTAL slide (`smartSpeed: 1000`); tab click slides to the target
  index over ~1.5s (`to.owl.carousel` 1500ms) and the active tab underline
  syncs on every slide change.
- **Spacing rhythm:** `.content` `padding: 7rem 0`; page h2 `.my-5` = 3rem
  top/bottom; tab bar `margin-bottom: 40px`, tab `padding: 20px`; slide text
  `padding: 50px` (20px below 991.98px); slide headline `margin-bottom: 30px`;
  category `margin-bottom: 1.5rem`.
- **Container:** Bootstrap `.container` behavior (max-width 1140px ≥1200px,
  fluid below) — the carousel is centered and container-constrained, NOT
  full-bleed.
- **Dark/light treatment:** LIGHT page throughout — white background,
  near-black heading, gray paragraph token, gray tabs; the photographic
  slides themselves are warm/editorial (beige, muted teal, dusty blue, deep
  crimson) but no dark sections.
- **Slide images:** 1900×1150 editorial book/lifestyle photos (same set as
  Vernazza) — replace with three wide picsum placeholders (screen seeds for
  warm/editorial subjects per the replication skill).
- **Breakpoints:** the split media row applies from `md` (768px) up; below
  that the slide stacks (image top, text below). Tab bar stays a single row
  at every breakpoint.

## Requirements

### Requirement: Page composition

The page SHALL render as a single centered section on a white background with
a heading above a tab bar and a split-media carousel, per the source's
one-section layout.

#### Scenario: Single section layout

Given the app is loaded, when the page renders, then exactly one content
section is present with generous vertical padding (`py-[7em]`), a white
`#fff` page background, and no navbar, hero band, or footer.

#### Scenario: Section heading

Given the page is rendered, when the user looks above the tab bar, then a
centered heading (~20px, Roboto, near-black `#212529`, ~3rem vertical
margins) reads "Carousel #18" or a same-kind paraphrase (NOT the demo's
"Carousel #8" copy-paste artifact).

### Requirement: Tab navigation bar

A three-tab bar SHALL sit between the heading and the carousel; the active
tab is black with a black underline; clicking a tab slides the carousel to
the matching slide and moves the underline.

#### Scenario: Tabs render

Given the page is rendered, then a tab bar with a `1px solid #ccc` bottom
border contains three equal-width tab buttons ("First Tab", "Second Tab",
"Third Tab" or same-kind paraphrases), each with ~20px padding, centered
text, grey `#999` color, and an accessible label; the FIRST tab is active by
default (black text + `1px solid #000` underline spanning the tab).

#### Scenario: Click a tab

Given the user activates a tab, then the carousel slides (~1s horizontal
motion) to the corresponding slide and the active underline moves to the
clicked tab.

#### Scenario: Active tab sync

Given the carousel's slide changes by any means, then the active tab updates
to match the visible slide (active = black + underline, all others grey,
no underline).

#### Scenario: No wrap (loop off)

Given the carousel is on the first or last slide, then there is no
wrap-around: activating the first tab always shows slide 1 and the last tab
always shows slide 3 (the source sets `loop: false`).

### Requirement: Split media slides

The carousel SHALL show three slides, each a split media row: a 50%-width
image beside a text block with a small uppercase category label, a serif
headline, and a paragraph.

#### Scenario: Three split slides

Given the carousel is rendered, then three slides exist, each composed of an
image (50% width on desktop) and a text column containing: a small uppercase
letter-spaced category label ("Travel — First Tab" / "… Second Tab" / "…
Third Tab" style, paraphrased), a large serif headline (~2rem, Playfair
Display, `#000`, ~30px bottom margin), and a light-gray paragraph
(`#999999`, weight 300) — using picsum placeholders (NOT the source's
hero_1/2/3.jpg assets), each image with descriptive alt text.

#### Scenario: One slide per view at every breakpoint

Given any viewport width (<600px, 600–999px, or ≥1000px), then exactly one
slide is visible at a time (the source has NO responsive block — `items: 1`
always).

### Requirement: Carousel behavior

The carousel SHALL show one slide at a time, slide horizontally (~1s), NOT
autoplay, and expose NO arrow or dot controls, matching `js/main.js`
(`loop: false`, `nav: false`, `dots: false`, `smartSpeed: 1000`,
`autoplay: false`).

#### Scenario: Horizontal slide transition

Given a slide change is triggered (tab click), then the carousel slides
HORIZONTALLY (~1s) to the target slide — NOT a vertical slide and NOT a
cross-fade (the OPPOSITE of Vernazza's ~450ms vertical animate.css motion).

#### Scenario: No autoplay

Given the page is idle, then the carousel does NOT advance on its own.

#### Scenario: No arrows, no dots

Given the page is rendered, then NO arrow buttons and NO dot indicators are
present anywhere (the source's `nav: false` / `dots: false`; the
`.owl-nav`/`.owl-dots` CSS with its red/blue debug borders is dead code and
MUST NOT be reproduced); the tab bar is the ONLY navigation.

### Requirement: Responsive behavior

The template SHALL stay usable and unbroken on mobile and desktop, with the
split media stacking on small screens.

#### Scenario: Stacked media on mobile

Given a viewport below the `md` breakpoint (768px), then each slide stacks
vertically — image full-width on top, text below (padding ~20px) — with no
horizontal overflow, and the tab bar remains a single tappable row
(≥44px hit areas).

#### Scenario: Split media on desktop

Given a viewport ≥768px, then each slide renders as two columns — image left
(~50%), text right (~50%, padding ~50px) — and the carousel is constrained
to the centered ~1140px container.

### Requirement: Footer with Component Dock link

Every monorepo template SHALL ship a minimal footer linking Component Dock.

#### Scenario: Footer attribution

Given the page is rendered, then a minimal footer links "Component Dock" →
https://www.componentdock.com/.

## Verification checklist

- [ ] `apps/manarola` exists; package `@free-react-templates/manarola`;
      `public/CNAME` = `manarola.free.componentdock.com`; `homepage` =
      `https://manarola.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (300/400/500) AND Playfair
      Display (serif — the slide-headline font; the key typographic contrast);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/manarola` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (~20px, Roboto, ~3rem top/bottom margins) —
      "Carousel #18" or same-kind paraphrase (NOT the demo's "Carousel #8"
      copy-paste artifact); carousel constrained to a centered ~1140px
      container
- [ ] Tab bar: `1px solid #ccc` bottom border, 40px bottom margin; THREE
      equal-width tab buttons, ~20px padding, centered, grey `#999`; active
      tab = black text + `1px solid #000` underline spanning the tab; first
      tab active initially; ≥44px hit areas + accessible labels
- [ ] THREE split media slides (picsum placeholders, screened per the
      replication skill, wide ~1900×1150 editorial/warm-tone subjects,
      descriptive alt); ONE slide per view at every breakpoint
- [ ] Each slide text column: small UPPERCASE letter-spaced category label
      (`#adb5bd`, 12px, bold, ~.2rem spacing, "Travel — …Tab" style
      paraphrased) + large SERIF headline (Playfair Display, ~2rem, `#000`,
      ~30px bottom margin) + light-gray paragraph (`#999999`, weight 300)
- [ ] Carousel: LOOP OFF (no wrap-around); NO autoplay (idle = stays put);
      ~1s HORIZONTAL slide (NOT vertical, NOT cross-fade — the OPPOSITE of
      Vernazza); NO arrows, NO dots, NO red/blue borders (dead demo
      scaffolding — never reproduced)
- [ ] Tab interaction: click tab → slide to matching slide + active
      underline moves; active tab syncs on every slide change; first tab
      active initially
- [ ] Responsive: ≥768px = image left 50% / text right 50% (text padding
      ~50px); <768px = stacked (image full-width top, text below, ~20px
      padding), no horizontal overflow, tabs tappable
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh manarola`
- [ ] PR: branch `feat/template-manarola`, PR description with source slug,
      preview URL, tokens, renames (esp. "tab-driven media carousel — NO
      arrows/dots, loop off, ~1s horizontal slide — differs from Vernazza");
      merge immediately

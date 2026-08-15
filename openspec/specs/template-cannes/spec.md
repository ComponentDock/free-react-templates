# Template: Cannes (Editorial Collection Carousel)

## Purpose

Cannes is a single-section editorial work/collection carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 06" website template design
(source: https://colorlib.com/wp/template/carousel-06/), built under a
DIFFERENT name (Cannes — "the French Riviera festival city", continuing the
travel/destinations naming theme of the "Bootstrap Carousels (20)" series
renames) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **cannes** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-06`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the SIXTH of the "Bootstrap Carousels (20)" series
renames (lineage: carousel-01 → wanderlust, carousel-02 → faraway,
carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri, carousel-06 →
cannes — theme: travel / destinations; the name is thematic, the content is
an editorial fashion-collection slider).

Cannes lives in `apps/cannes` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 06" — the SIXTH of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 06"). An **editorial
  FASHION-COLLECTION carousel** — NOT a testimonials slider like Carousel 05
  (Capri). `.ftco-section` (padding 7em 0) on a WHITE page with a centered
  black heading ("Carousel #06") above a `.featured-carousel.owl-carousel`
  holding FOUR `.item` slides, each a 50/50 split-screen "work wrap":
  pale-pink text panel (headline + contact + blurb + two CTAs) beside a
  tall fashion photograph. No navbar, no hero band, no footer — the section
  is the whole page. **Differs from Carousel 05 (Capri): the page is WHITE,
  the heading is BLACK (#000), each slide is a SPLIT layout (not a card),
  items: 1 at ALL breakpoints (never 2/3), the carousel LOOPS, nav arrows
  ARE enabled (Prev/Next with round icons, bottom-center), dots sit as a
  VERTICAL column on the right edge at desktop, the accent is pale pink
  `#fff3f1` / `#ffc6be`, and content is right-aligned on large screens.**
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-06/`
  (HTTP 200, 12,184 bytes DOM; fetched 2026-08-15). NOTE: the standard
  preview path `https://preview.colorlib.com/theme/carousel-06/` 404s — the
  whole "Bootstrap Carousels" series lives under the `/theme/bootstrap/`
  prefix (same finding as the Bootstrap Calendars and Carousel 01–05 preps);
  stylesheets are likewise under
  `.../theme/bootstrap/carousel-06/css/`. Stylesheets: `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/style.css` (223,410 bytes — bundles
  Bootstrap 4.3.1 + the template's custom ftco styles at the tail) +
  ionicons 4.5.6 (CDN). Body font Poppins (Google, loaded via cf-fonts in
  the source head). Carousel driven by `js/main.js`:
  `$('.featured-carousel').owlCarousel({ loop: true, autoplay: true,
margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn', nav: true,
dots: true, autoplayHoverPause: false, items: 1,
navText: ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>",
"<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } })`
  — **ONE slide per view at 0/600/1000px** (unlike Capri's 1/2/3), **LOOP
  ON**, **AUTOPLAY ON** (Owl default 5,000ms interval,
  `autoplayHoverPause: false`), **ARROWS ON** (custom Prev/Next navText
  with round ionicons, bottom-center), dots ON (vertical on the right edge
  at ≥992px, centered below otherwise). Four slides → four dots, one per
  slide.
- **Screenshot:** `carousel-06.jpg` (1200×972, viewed in browser) —
  minimalist editorial fashion layout. Top: centered black "Carousel #06"
  heading. Below: a large split-screen panel — LEFT half on a pale
  pink/beige background (`#fff3f1`): big bold BLACK UPPERCASE headline
  ("DEFINE YOUR BUDGET"), two small contact lines ("Call: 0123 456 78901",
  "Email Address: email@info.com"), a small grey placeholder paragraph, and
  two rectangular buttons side by side (left: white with a thin black
  border, "Shop the collection"; right: solid dark grey/black with white
  text, "Learn More"). RIGHT half: a tall, high-contrast black-and-white
  fashion photograph (woman in a grey blazer seated on a black chair) on a
  white background. On the far RIGHT edge of the panel, a VERTICAL column
  of four small dots — the top dot filled PINK (`#ffc6be`, active), the
  rest grey. Below the panel, bottom-center: "PREV" and "NEXT" links with
  round arrow icons. Aesthetic: high-end editorial fashion; monochrome
  photography, negative space, neutral palette (white / pale pink / black)
  with a single peach-pink accent.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1 (bundled
  into style.css) + Owl Carousel 2.3.4 + ionicons 4.5.6 + Google Poppins.
  The recreation must NOT copy any of this — build a pure-React carousel
  with lucide-react icons (ChevronLeft/ChevronRight for nav, or
  ArrowLeft/ArrowRight) and picsum placeholder photos (the source's
  fashion photos are NOT copied).
- **Fidelity exception (responsive):** the source stylesheet forces
  `body { min-width: 992px !important; }` (a desktop-only demo artifact —
  14 occurrences in style.css). The recreation MUST be responsive (the
  split layout stacks below 768px: image above text, both 100% wide) and
  MUST NOT force a min-width — mobile support is a monorepo hard
  requirement. NOTE the slide content is RIGHT-aligned on large screens
  (`.text-lg-right` + `.row.justify-content-end`) and left-aligned on
  mobile — preserve that shift.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` — single section, `padding: 7em 0`, on the WHITE page
   background. Inside `.container` > `.row`:
   - `.col-md-12.text-center` > `h2.heading-section.mb-5` — "Carousel #06"
     (28px, **#000**, Poppins, centered, `margin-bottom: 3rem`).
   - `.col-md-12` > `.featured-carousel.owl-carousel` — FOUR `.item`
     slides, each:
     - `.work-wrap.d-md-flex` — the slide: flex row at ≥768px (50/50
       split), stacked (100%/100%) below 768px:
       - `.img.order-md-last` — the PHOTO side: `height: 700px`, `width:
50%` (100% below 768px), `background-image: url(images/work-N.jpg)`
         (cover, centered). Source cycles work-1.jpg … work-4.jpg (fashion
         portraits). Order: at ≥768px the image sits RIGHT (order-md-last);
         below 768px (no flex) the image is FIRST in the DOM → photo on
         top, text below.
       - `.text.text-left.text-lg-right.p-4.px-xl-5.d-flex.align-items-center`
         — the TEXT panel: `width: 50%` (100% below 768px),
         `background: #fff3f1` (pale pink), `padding: 1.5rem` (`.p-4`) +
         `3rem` horizontal at ≥1200px (`.px-xl-5`), flex-centered
         vertically, text LEFT below lg / RIGHT at ≥992px (`.text-lg-right`).
         - `.desc.w-100` — inner block:
           - `h2.mb-4` — the slide headline: 60px (40px at ≤991.98px),
             `font-weight: 800`, `text-transform: uppercase`, color #000
             (h1–h5 base). Source slides: "Define Your Budget", "Kids
             Collection", "Ladies Collection", "Ladies Collection" —
             recreation should use FOUR DISTINCT collection headlines of
             the same kind (e.g. "Define Your Budget", "Kids Collection",
             "Ladies Collection", "Men's Collection").
           - `p.h5` — "Call: 0123 456 78901" (`.h5` = 20px, Poppins, #000,
             line-height 1.2, weight 400).
           - `p.h5.mb-4` — "Email Address: email@info.com" (same .h5
             style + `margin-bottom: 1.5rem`).
           - `.row.justify-content-end` (flex-end — pushes content right
             on desktop) > `.col-xl-8` (8/12 of the row at ≥1200px):
             - `p` — the blurb paragraph: inherits body Poppins 14px,
               line-height 1.8, `color: gray` (the placeholder "Far far
               away, behind the word mountains…" text; `margin-bottom:
1rem`).
             - `p` — second (empty/continuation) paragraph in the source;
               recreation may merge into one blurb.
             - `button.btn.btn-outline-dark.mb-2.py-3.px-4` — "Shop the
               collection Outline": transparent bg, 1px solid #343a40
               border, #343a40 text; hover fills #343a40 with white text.
               Padding 1rem 1.5rem (py-3 px-4), radius 0.25rem (Bootstrap
               .btn default), `margin-bottom: .5rem`. (The source's button
               copy includes the literal word "Outline" — paraphrase to
               "Shop the Collection".)
             - `button.btn.btn-dark.mb-2.py-3.px-4` — "Learn More": solid
               #343a40 bg, white text; hover #23272b. Same padding/radius.
   - Carousel furniture (Owl + style.css):
     - `.owl-nav` — absolute, `bottom: 0; left: 0; right: 0;` (a
       bottom-center strip). `.owl-prev` / `.owl-next` — absolutely
       positioned at `left: 50%` / `right: 50%` (offset ±35px so they sit
       side by side at bottom-center), `transform: translateY(-50%)`,
       `margin-top: 60px`, base color `rgba(0,0,0,0.2)`. Each nav button's
       inner `p` holds `small` (uppercase "Prev"/"Next", `display: block`,
       `color: #000`, `line-height: .8`) and a round-arrow icon span
       (ionicons in the source → lucide ChevronLeft/ChevronRight in the
       recreation). The whole nav strip hangs ~60px BELOW the slide.
     - `.owl-dots` — two regimes: BASE (below 992px): centered,
       `margin-top: 20px`; dots are 10×10px CIRCLES, `margin: 5px`,
       `border-radius: 50%`, transparent fill, `border: 1px solid #000`;
       ACTIVE dot `background: #ffc6be; border: 1px solid #ffc6be`.
       AT ≥992px (media query in style.css): `.owl-dots` becomes
       `position: absolute; top: 0; right: 0; margin-right: -40px;` with
       dots `display: block` → a VERTICAL column of dots hanging off the
       RIGHT edge of the carousel, just outside it. Four slides → four
       dots.

## Design tokens (from preview stylesheet `css/style.css`)

- **Page background:** white (default; the source only forces a 992px
  min-width on body — no bg color). The section sits on white.
- **Section:** `.ftco-section` — `padding: 7em 0` (Tailwind `py-[7em]`).
- **Heading (`.heading-section`):** 28px, Poppins, **#000** (h1–h5 base
  color — differs from Capri's white-on-green), centered, `margin-bottom:
3rem` (`.mb-5`).
- **Body text:** Poppins 14px, `line-height: 1.8`, `color: gray` (the
  blurb paragraph). Body rule: `body { font-family: "Poppins", Arial,
sans-serif; font-size: 14px; line-height: 1.8; font-weight: normal;
color: gray; }`.
- **Text panel (`.work-wrap .text`):** `background: #fff3f1` (pale
  pink/peach — the signature brand accent). Padding `1.5rem` (`.p-4`),
  `3rem` horizontal at ≥1200px (`.px-xl-5`); `width: 50%` (100% < 768px);
  flex row with `align-items: center`; `text-align: left` below lg,
  `right` at ≥992px.
- **Photo side (`.work-wrap .img`):** `height: 700px`, `width: 50%` (100%
  < 768px), `background-size: cover; background-position: center`, sits on
  the RIGHT at ≥768px (`order-md-last`), on TOP below 768px (DOM order).
- **Slide headline (`.work-wrap .text h2`):** 60px (40px at ≤991.98px),
  `font-weight: 800`, `text-transform: uppercase`, color #000,
  `margin-bottom: 1.5rem` (`.mb-4`).
- **Contact lines (`.h5`):** 20px (1.25rem), Poppins, `#000`,
  `line-height: 1.2`, `font-weight: 400`; the email line keeps
  `margin-bottom: 1.5rem`.
- **Buttons (Bootstrap .btn):** `border-radius: 0.25rem`; `padding: 1rem
1.5rem` (py-3 px-4); `margin-bottom: .5rem`; `font-size: 1rem`.
  - `.btn-dark`: `background: #343a40; color: #fff; border-color:
#343a40`; hover `background: #23272b; border-color: #1d2124`.
  - `.btn-outline-dark`: transparent, `color: #343a40; border: 1px solid
#343a40`; hover `background: #343a40; color: #fff`.
- **Nav arrows (`.owl-nav`):** bottom-center strip (absolute bottom 0, full
  width); buttons at left/right 50% offset ±35px, `margin-top: 60px`
  (below the slide); label `small` UPPERCASE ("Prev"/"Next"),
  `display: block`, `color: #000`, `line-height: .8`; round arrow icon next
  to it (lucide ChevronLeft/ChevronRight in the recreation); container base
  color `rgba(0,0,0,0.2)`.
- **Dots (`.owl-dots`):** below 992px: centered, `margin-top: 20px`;
  10×10px circles, `margin: 5px`, `border-radius: 50%`, transparent fill,
  `border: 1px solid #000`; ACTIVE dot `background: #ffc6be;
border-color: #ffc6be`. At ≥992px: absolute `top: 0; right: 0;
margin-right: -40px`, dots `display: block` (vertical column on the right
  edge).
- **Link color:** `a { color: #ffc6be }` (peach — only relevant if any
  text link is rendered; buttons use their own colors).
- **Fonts:** `"Poppins", Arial, sans-serif` for body and headings (Google
  Poppins via cf-fonts in the source). Load Poppins 300, 400, 500, 700 via
  Google Fonts `<link>` in index.html (no font files copied).
- **Icons/images:** source uses the ionicons font (nav round arrows) and
  local `images/work_*.jpg` fashion photos. Recreation uses lucide-react
  icons and picsum placeholder photos
  (`https://picsum.photos/seed/cannes-<n>/900/1400`, portrait ~2:3 ratio to
  match the tall photo panel; 700px-tall panel → use ~900×1400 source
  images). Seeds should be SCREENED for fashion/portrait-appropriate
  subjects (see the colorlib-template-replication skill's verified person
  picsum IDs: 1027, 64, 823, 996) — do not ship arbitrary landscape seeds
  in the photo slot.

## Requirements

### Requirement: Page composition

The system SHALL render a single section on a white page containing a
centered section heading and an editorial collection carousel; the section
SHALL fill the page width with the carousel constrained to a centered
container.

#### Scenario: Single section layout

- **GIVEN** the Cannes page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be white
- **AND** the section SHALL contain a centered heading "Carousel #06" (or
  an equivalent paraphrase of the same kind, e.g. "The Collection")
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)
- **AND** the page SHALL be responsive (source forces `min-width: 992px`
  — the recreation MUST NOT; see fidelity exception above)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, BLACK (`#000` — on white,
  unlike Carousel 05's white-on-green), centered
- **AND** the heading SHALL be followed by bottom margin (`.mb-5`, ~3rem)

### Requirement: Collection slides

The system SHALL render exactly four slides, each a split-screen "work
wrap": a pale-pink text panel (headline, contact lines, blurb, two CTAs)
beside a tall photo panel; the photo SHALL sit on the right at ≥768px and
on top below 768px.

#### Scenario: Four slides

- **GIVEN** the carousel is rendered
- **WHEN** the slide items are inspected
- **THEN** exactly four distinct slides SHALL exist (headlines of the same
  kind as the source: "Define Your Budget", "Kids Collection", "Ladies
  Collection", and a fourth distinct one — the source repeats "Ladies
  Collection" twice; the recreation SHALL use four distinct headlines)
- **AND** each slide SHALL be a flex row at ≥768px (50/50 split) and a
  stacked column below 768px (photo 100% wide on top, text 100% wide
  below)

#### Scenario: Split layout at desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** a slide is inspected
- **THEN** the text panel SHALL occupy 50% width on the LEFT with
  background `#fff3f1`
- **AND** the photo panel SHALL occupy 50% width on the RIGHT with height
  700px and a cover-positioned background image
- **AND** at ≥ 1200px the text panel SHALL have 3rem horizontal padding
  (`.px-xl-5`) in addition to its 1.5rem base padding

#### Scenario: Mobile stacking

- **GIVEN** a viewport < 768px
- **WHEN** a slide is inspected
- **THEN** the photo SHALL render first (on top), 100% wide, 700px tall
- **AND** the text panel SHALL render below, 100% wide, with the 1.5rem
  padding
- **AND** no horizontal overflow SHALL occur (no forced min-width)

### Requirement: Slide content

The system SHALL render each slide's text panel with an uppercase headline,
two contact lines, a blurb paragraph, and two buttons (outline-dark "Shop
the Collection" + dark "Learn More"); text SHALL be right-aligned at
≥992px and left-aligned below.

#### Scenario: Text panel content

- **GIVEN** a slide's text panel is displayed
- **WHEN** its content is inspected
- **THEN** the headline SHALL be uppercase, 60px (40px at ≤991.98px),
  weight 800, color #000, with ~1.5rem bottom margin
- **AND** two contact lines SHALL follow in `.h5` style (20px, Poppins,
  #000): "Call: 0123 456 78901" and "Email Address: email@info.com" (or
  equivalent paraphrases of the same kind)
- **AND** a blurb paragraph SHALL follow in body style (Poppins 14px,
  line-height 1.8, gray), paraphrased per slide (same kind of content —
  the source repeats one placeholder in all four)
- **AND** two buttons SHALL be present side by side:
  - outline button "Shop the Collection": transparent, 1px solid #343a40
    border, #343a40 text, radius 0.25rem, padding 1rem 1.5rem
  - solid button "Learn More": #343a40 background, white text, same
    radius/padding

#### Scenario: Alignment shift

- **GIVEN** the text panel is rendered
- **WHEN** the viewport is ≥ 992px
- **THEN** the panel content SHALL be right-aligned (headline, contact
  lines, blurb, and the button row justified to the end)
- **WHEN** the viewport is < 992px
- **THEN** the panel content SHALL be left-aligned

### Requirement: Carousel behavior

The system SHALL display exactly one slide per view at ALL breakpoints;
it SHALL loop; page changes SHALL cross-fade; autoplay SHALL advance every
~5 seconds without pausing on hover.

#### Scenario: One slide per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px, 600–999px, or ≥ 1000px
- **THEN** exactly one slide SHALL be visible at a time at every
  breakpoint (source `responsive: { 0: {items:1}, 600: {items:1}, 1000:
{items:1} }`)
- **AND** adjacent slides SHALL be separated by a 30px gutter (`margin:
30`)

#### Scenario: Loop

- **GIVEN** the carousel is on the last slide
- **WHEN** a next-page action is attempted
- **THEN** the carousel SHALL wrap around to the first slide (loop on)

#### Scenario: Cross-fade transition

- **GIVEN** the carousel is changing slides
- **WHEN** the transition is observed
- **THEN** the outgoing slide SHALL fade out while the incoming slide fades
  in (opacity cross-fade, no horizontal slide motion)

#### Scenario: Autoplay

- **GIVEN** the carousel is displayed without user interaction
- **WHEN** ~5 seconds elapse
- **THEN** the carousel SHALL advance to the next slide and continue every
  ~5s, wrapping from the last slide back to the first
- **AND** autoplay SHALL NOT pause on hover (source `autoplayHoverPause:
false`)
- **AND** under `prefers-reduced-motion: reduce`, autoplay SHALL be
  disabled (slides change only via arrows/dots)

### Requirement: Navigation arrows

The system SHALL render Prev/Next arrow buttons bottom-center below the
slide, with an uppercase label ("Prev"/"Next") and a round arrow icon;
they SHALL move one slide per click and honor looping.

#### Scenario: Arrows render and navigate

- **GIVEN** the carousel is displayed
- **WHEN** the nav strip is inspected
- **THEN** a Prev button SHALL sit at bottom-center left and a Next button
  at bottom-center right, ~60px below the slide (`margin-top: 60px`)
- **AND** each button SHALL contain an uppercase "Prev"/"Next" label and a
  round arrow icon (lucide ChevronLeft/ChevronRight)
- **AND** clicking Prev SHALL move to the previous slide (wrapping to the
  last on the first slide)
- **AND** clicking Next SHALL move to the next slide (wrapping to the
  first on the last slide)
- **AND** buttons SHALL have accessible labels (`aria-label="Previous
slide"` / `aria-label="Next slide"`) and focus-visible rings

### Requirement: Dot indicators

The system SHALL render one dot per slide (four total); below 992px the
dots SHALL be centered beneath the slides; at ≥992px they SHALL form a
vertical column on the right edge of the carousel; the active dot SHALL be
peach `#ffc6be`, inactive dots transparent with a black border; activating
a dot SHALL jump to that slide.

#### Scenario: Dots render and track

- **GIVEN** the carousel is displayed
- **WHEN** the dots are inspected
- **THEN** exactly four dots SHALL be rendered, one per slide
- **AND** each dot SHALL be a 10×10px circle (`border-radius: 50%`) with
  5px gaps
- **AND** the dot for the current slide SHALL have `background: #ffc6be`
  and `border: 1px solid #ffc6be`
- **AND** the other dots SHALL be transparent with `border: 1px solid
#000`

#### Scenario: Dot placement by breakpoint

- **GIVEN** a viewport < 992px
- **WHEN** the dots are inspected
- **THEN** the dots SHALL be centered below the slides with ~20px top
  margin
- **GIVEN** a viewport ≥ 992px
- **WHEN** the dots are inspected
- **THEN** the dots SHALL be a vertical column (`display: block`) on the
  RIGHT edge of the carousel (absolute, top 0, right 0, ~40px outside the
  edge)

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first slide
- **WHEN** the third dot is activated
- **THEN** the third slide SHALL display
- **AND** the third dot SHALL become the active (peach) dot

### Requirement: Responsive behavior

The system SHALL keep the layout usable from mobile to desktop (the source
is desktop-only via `min-width: 992px` — the recreation MUST be
responsive).

#### Scenario: Mobile

- **GIVEN** a viewport < 768px
- **WHEN** the page is rendered
- **THEN** the slide SHALL stack (photo on top, text below, both 100%)
  with no horizontal overflow
- **AND** the dots SHALL remain tappable (≥ 44px effective hit area or
  clearly separated)
- **AND** the nav arrows SHALL remain reachable below the slide

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the slide SHALL be a 50/50 split (text left on `#fff3f1`,
  photo right, 700px tall)
- **AND** the dots SHALL sit vertically on the right edge and the arrows
  bottom-center below the slide

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Cannes page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/cannes` exists; package `@free-react-templates/cannes`;
      `public/CNAME` = `cannes.free.componentdock.com`; `homepage` =
      `https://cannes.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/cannes` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered BLACK
      heading (28px, Poppins, `#000`, `mb-12`/3rem) "Carousel #06" or
      paraphrase; responsive (NO min-width: 992px)
- [ ] Four distinct slides; each a flex row ≥768px (text 50% LEFT on
      `#fff3f1` + photo 50% RIGHT, 700px tall, `order-md-last`) and a
      stacked column <768px (photo on top, both 100%); `px-xl-5` (3rem
      horizontal) on the text panel at ≥1200px
- [ ] Slide content: uppercase headline 60px/800/`#000` (`text-4xl`-style
      at ≤992px), contact lines in .h5 style (20px, `#000`), gray blurb
      paragraph (paraphrased per slide), outline button "Shop the
      Collection" + dark button "Learn More" (#343a40 bg / white text,
      radius .25rem, `py-3 px-4`); content right-aligned ≥992px,
      left-aligned below
- [ ] Carousel: ONE slide per view at all breakpoints; 30px gutter; LOOP
      on; cross-fade transition; autoplay ON ~5s (fake timers) that does
      NOT pause on hover and is disabled under `prefers-reduced-motion`
- [ ] Arrows: bottom-center Prev/Next ~60px below the slide, uppercase
      label + lucide round arrow icon; wrap-around navigation; aria-labels + focus-visible rings
- [ ] Dots: four 10×10px circles; active `#ffc6be` (bg + border), inactive
      transparent with 1px `#000` border; centered below <992px, vertical
      column on the right edge ≥992px; clicking jumps to that slide
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic buttons with aria-labels on
      arrows/dots, `aria-current`/`aria-selected` on the active dot,
      focus-visible rings; tests cover: four slides render, split vs
      stacked layout at breakpoints, alignment shift, one-per-view at all
      breakpoints, loop wrap, dot jump + active-dot tracking, autoplay
      advance (fake timers) + reduced-motion pause, cross-fade, arrow
      navigation, mobile/desktop token differences, footer link
- [ ] `npm run verify:app -- cannes` (or `scripts/verify-app.sh cannes`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://cannes.free.componentdock.com (200, correct
      content)

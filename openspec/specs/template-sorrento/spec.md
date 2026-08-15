# Template: Sorrento (Testimonials Carousel)

## Purpose

Sorrento is a single-section testimonials carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 08" website template design
(source: https://colorlib.com/wp/template/carousel-08/), built under a
DIFFERENT name (Sorrento — "the cliffside town on the Amalfi Coast",
continuing the travel/destinations naming theme of the "Bootstrap Carousels
(20)" series renames) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **sorrento** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-08`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the EIGHTH of the "Bootstrap Carousels (20)" series
renames (lineage: carousel-01 → wanderlust, carousel-02 → faraway,
carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri, carousel-06 →
cannes, carousel-07 → positano, carousel-08 → sorrento — theme: travel /
destinations; the name is thematic, the content is a testimonials slider).

Sorrento lives in `apps/sorrento` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 08" — the EIGHTH of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 08"). A **TESTIMONIALS carousel** —
  NOT a blog-card carousel like Carousel 07 (Positano) and NOT an editorial
  split-screen like Carousel 06 (Cannes). `.ftco-section` (padding 7em 0) on
  a LIGHT-GRAY page (`body { background: rgba(0,0,0,0.05) }`) with a centered
  black heading ("Carousel #08") above a `.featured-carousel.owl-carousel`
  holding THREE `.item` slides, each a **white split card**: a 50%-width
  portrait photo (`.img`, 600px tall) beside a 50%-width white panel (`.text`,
  text-center) holding a large Playfair Display serif QUOTE, the
  author's name in GOLD `#dbcc8f`, and a gray job-position line. No navbar,
  no hero band, no footer — the section is the whole page. **Differs from
  Carousel 07 (Positano): the content is TESTIMONIALS (not blog cards), the
  layout is a 50/50 IMAGE+QUOTE SPLIT (not a 3-up card grid), items-per-view
  is 1/1/1 at every breakpoint (not 1/2/3), the accent is GOLD `#dbcc8f`
  (not raspberry pink `#ff487e`), the quote font is Playfair Display SERIF
  39px (not Poppins sans), the nav arrows are ALWAYS VISIBLE with
  "Prev"/"Next" text labels + 40px round icons (not hover-revealed
  icon-only arrows), the transition is `slideOutDown` + `flipInX` (not a
  cross-fade), and the dots are OUTLINED circles (1px black border,
  transparent fill) with the active dot filled GOLD (not gray-filled dots
  with a pink active).**
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-08/`
  (HTTP 200, 14,997 bytes DOM; fetched 2026-08-15). NOTE: the standard
  preview path `https://preview.colorlib.com/theme/carousel-08/` 404s — the
  whole "Bootstrap Carousels" series lives under the `/theme/bootstrap/`
  prefix (same finding as the Bootstrap Calendars and Carousel 01–07 preps);
  stylesheets are likewise under
  `.../theme/bootstrap/carousel-08/css/`. Stylesheets: `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/animate.css`, `css/style.css`
  (223,615 bytes — bundles Bootstrap 4.3.1 + the template's custom ftco
  styles at the tail) + ionicons 4.5.6 (CDN). Body font Poppins (Google,
  loaded via cf-fonts in the source head) + **Playfair Display serif** for
  the quote (also cf-fonts). Carousel driven by `js/main.js`:
  `$('.featured-carousel').owlCarousel({ loop: true, autoplay: true,
autoHeight: false, margin: 30, animateOut: 'slideOutDown', animateIn:
'flipInX', nav: true, dots: true, autoplayHoverPause: false, items: 1,
navText: ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } })`
  — **ONE slide per view at ALL breakpoints (1/1/1)** (UNLIKE
  Capri/Positano's 1/2/3), **LOOP ON**, **AUTOPLAY ON** (Owl default
  5,000ms interval, `autoplayHoverPause: false`), **ARROWS ON** with
  **"Prev"/"Next" text labels** (small, uppercase) above a 40px round arrow
  icon (ion-ios-arrow-round-back/forward — unlike Positano's bare icons),
  **ALWAYS VISIBLE** (opacity 1 — NOT hover-revealed), dots ON (centered
  row below, one per item → three dots).
- **Screenshot:** `carousel-08.jpg` (1200×972, viewed in browser) —
  minimalist testimonial layout. Top: centered dark "Carousel #08" heading.
  Below: ONE large white card (the single-slide desktop view of the
  carousel) on the LIGHT-GRAY page. The card is split horizontally: LEFT =
  a full-height portrait photo of a smiling woman (brown wavy hair, green
  patterned blouse, plain beige wall background); RIGHT = a white panel with
  the CENTERED quote "Incredible services and amazing customer support" in a
  large BOLD SERIF (Playfair Display) black type, beneath it "— Joy Smith"
  in GOLD/TAN (`#dbcc8f`), beneath that "Project Manager" in small light-gray
  sans. Flanking the card at mid-height: a "PREV" label + thin left arrow on
  the left and a "NEXT" label + thin right arrow on the right (dark
  gray/black, minimalist line style — always visible). Below the card: three
  small dots centered — the ACTIVE dot filled GOLD (`#dbcc8f`), the other
  two empty black OUTLINES. Aesthetic: clean, elegant, corporate; white card
  floating on light gray, serif quote + sans UI, a single gold accent.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1 (bundled
  into style.css) + Owl Carousel 2.3.4 + animate.css + ionicons 4.5.6 +
  Google Poppins + Playfair Display. The recreation must NOT copy any of
  this — build a pure-React carousel with lucide-react icons (ChevronLeft/
  ChevronRight or ArrowLeft/ArrowRight for nav) and picsum placeholder
  portraits (the source's person photos are NOT copied).
- **Fidelity exception (responsive):** the source stylesheet forces
  `body { min-width: 992px !important; }` (a desktop-only demo artifact —
  13 occurrences in style.css). The recreation MUST be responsive (the
  50/50 split stacks to image-over-text below 768px) and MUST NOT force a
  min-width — mobile support is a monorepo hard requirement.
- **Fidelity note (transition):** the source uses animate.css
  `animateOut: 'slideOutDown'` / `animateIn: 'flipInX'` — the outgoing slide
  slides down while the incoming slide flips in on the X axis. Recreation
  should replicate this flavor (slide-down exit + flip-in enter) rather than
  a horizontal slide or cross-fade, with `prefers-reduced-motion` respected
  (source itself disables the nav transitions under reduced motion).
- **Fidelity note (content):** all three source slides repeat the SAME quote
  ("Incredible services and amazing customer support") and the SAME position
  ("Project Manager"); only the author names differ (Joy Smith, Rony Smith,
  John Doe). The recreation SHALL use THREE DISTINCT quotes, names, and
  positions (same kinds of content — professional service praise).
- **Fidelity note (quote mark):** the source's quote `<p>` begins with a
  literal `"` character and has no closing quote — the recreation should use
  a proper opening/closing quote or an elegant decorative quote treatment.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` — single section, `padding: 7em 0`, on the LIGHT-GRAY
   page background (`body { background: rgba(0,0,0,0.05) }`). Inside
   `.container` > `.row`:
   - `.col-md-12.text-center` > `h2.heading-section.mb-5` — "Carousel #08"
     (28px, **#000**, Poppins, centered, `margin-bottom: 3rem` (`.mb-5`)).
   - `.col-md-12` > `.featured-carousel.owl-carousel` — THREE `.item`
     slides, each:
     - `.row.justify-content-center` > `.col-md-11` (centered, 91.67% width
       column) > `div.testimony-wrap.d-md-flex` — the CARD:
       `box-shadow: 0px 10px 40px -30px rgba(0,0,0,0.42)` (soft floating
       shadow), `display: flex` at ≥768px (`d-md-flex`).
       - `div.img` — the PHOTO panel: `width: 50%; height: 600px;`
         `background-image: url(images/person-1.jpg)` (cover, centered).
         Source cycles person-1.jpg … person-3.jpg (portrait stock photos).
       - `div.text.text-center.p-4.py-xl-5.px-xl-5.d-flex.align-items-center`
         — the QUOTE panel: `width: 50%; background: white;` text-center,
         padding `1.5rem` (`.p-4`) → `3rem` vertical+horizontal at ≥1200px
         (`.py-xl-5 .px-xl-5`), `display: flex; align-items: center` (the
         quote block is vertically centered). Inside:
         - `div.desc.w-100` — full-width inner wrapper:
           - `p.h3.mb-5` — the QUOTE: `font-family: "Playfair Display",
serif; font-size: 39px; font-weight: 700;` (Bootstrap `.h3`
             size 1.75rem is overridden by the custom 39px rule), color
             **#000** (via the h1–h5 custom rule), `margin-bottom: 3rem`
             (`.mb-5`). Source text: `"Incredible services and amazing
customer support` (leading `"` only; repeated in all three
             slides — recreation uses three DISTINCT quotes).
           - `div.pt-4` — `padding-top: 1.5rem`:
             - `p.name.mb-0` — the AUTHOR: `&mdash; Joy Smith` (em-dash
               prefix), `color: #dbcc8f; font-size: 20px; font-weight:
500;` (GOLD).
             - `span.position` — the JOB TITLE: "Project Manager" — no
               custom rule → inherits body style (Poppins 14px, `color:
gray`). Repeated in all three slides — recreation uses three
               DISTINCT positions.
   - Carousel furniture (Owl + style.css):
     - `.owl-carousel .owl-nav` — `position: absolute; top: 50%; left: 0;
right: 0; display: inline-block;` — a full-width side strip at
       mid-height. `.owl-prev { left: 0; }`, `.owl-next { right: 0; }` —
       both `transform: translateY(-50%); margin-top: 0px; color:
rgba(0,0,0,0.2) !important; opacity: 1;` (ALWAYS VISIBLE — no
       hover-reveal), `transition: 0.7s`. Inner `p span` + `p small`:
       `display: block; color: #000; line-height: .8;` — the icon
       (`span:before`) is **40px**, the label (`small`) is
       `text-transform: uppercase`. Hover: label + icon turn **#dbcc8f**
       (gold). Source navText: `<p><small>Prev</small><span
class='ion-ios-arrow-round-back'></span></p>` and the Next mirror —
       label ABOVE icon, stacked.
     - `.owl-carousel .owl-dots` — `text-align: center; margin-top: 20px;`
       — a CENTERED ROW below the slides. Dots: `width: 10px; height:
10px; margin: 5px; border-radius: 50%; background: transparent;
border: 1px solid #000;` (OUTLINED circles); ACTIVE dot
       `background: #dbcc8f; border: 1px solid #dbcc8f;` (gold-filled).
       Three slides → three dots.

## Design tokens (from preview stylesheet `css/style.css`, custom tail)

- **Page background:** `rgba(0,0,0,0.05)` (light gray — reads ≈ #f2f2f2
  over white; the screenshot shows ~#f0f0f0). Set the section/page bg to a
  light gray; the white card floats on it.
- **Section:** `.ftco-section` — `padding: 7em 0` (Tailwind `py-[7em]`).
- **Heading (`.heading-section`):** 28px, Poppins, **#000**, centered,
  `margin-bottom: 3rem` (`.mb-5`). Headings base rule: `h1..h5, .h1..h5 {
line-height: 1.2; font-weight: 400; font-family: "Poppins", Arial,
sans-serif; color: #000; }`.
- **Body text:** Poppins 14px, `line-height: 1.8`, `color: gray`. Body rule:
  `body { font-family: "Poppins", Arial, sans-serif; font-size: 14px;
line-height: 1.8; font-weight: normal; color: gray; background:
rgba(0,0,0,0.05); }`.
- **Card (`.testimony-wrap`):** `display: flex` at ≥768px (stacked below),
  `box-shadow: 0px 10px 40px -30px rgba(0,0,0,0.42)` (soft downward
  floating shadow — the key "lifted card" effect).
- **Photo panel (`.img`):** `width: 50%; height: 600px;` cover-positioned
  background image (portrait). Below 768px: `width: 100%; height: 450px;`
  (photo sits ABOVE the quote panel).
- **Quote panel (`.text`):** `width: 50%; background: white;` text-center;
  padding `1.5rem` (`.p-4`) → `3rem` at ≥1200px (`.py-xl-5 .px-xl-5`);
  flex + align-items-center (quote block vertically centered). Below 768px:
  `width: 100%`.
- **Quote (`p.h3`):** `font-family: "Playfair Display", serif; font-size:
39px; font-weight: 700;` color **#000**, `margin-bottom: 3rem` (`.mb-5`).
- **Author (`.name`):** `color: #dbcc8f; font-size: 20px; font-weight:
500;` — GOLD accent, `&mdash;` (em-dash) prefix before the name.
- **Position (`.position`):** inherits body (Poppins 14px, gray) — small
  light-gray sans line under the name.
- **Nav arrows (`.owl-nav`):** full-width strip at `top: 50%` (`left: 0` /
  `right: 0`), `translateY(-50%)`; ALWAYS VISIBLE (`opacity: 1`); label
  (`small`, uppercase) + 40px round icon (`span:before`) stacked, both
  `color: #000` (container color `rgba(0,0,0,0.2)`); hover → **#dbcc8f**.
  `transition: 0.7s` (nav strip) / `0.3s` (label + icon).
- **Dots (`.owl-dots`):** centered row, `margin-top: 20px`; 10×10px circles,
  `margin: 5px`, `border-radius: 50%`, `background: transparent`,
  `border: 1px solid #000` (OUTLINED); ACTIVE dot `background: #dbcc8f;
border: 1px solid #dbcc8f` (gold-filled). Three slides → three dots.
- **Fonts:** body + headings `"Poppins", Arial, sans-serif`; quotes
  `"Playfair Display", serif` (both Google via cf-fonts in the source). Load
  Poppins 300, 400, 500, 700 + Playfair Display 400, 700 via Google Fonts
  `<link>` in index.html (no font files copied).
- **Icons/images:** source uses the ionicons font (round back/forward
  arrows) and local `images/person_*.jpg` portraits. Recreation uses
  lucide-react icons (ChevronLeft/ChevronRight for nav) and picsum
  placeholder portraits (`https://picsum.photos/seed/sorrento-<n>/600/600`
  — square-ish portrait crops for the 600px-tall photo panel; seed IDs
  screened for person-appropriate subjects — see the
  colorlib-template-replication skill's verified person picsum IDs: 1027,
  64, 823, 996).

## Requirements

### Requirement: Page composition

The system SHALL render a single section on a light-gray page containing a
centered section heading and a testimonials carousel; the section SHALL fill
the page width with the carousel constrained to a centered container.

#### Scenario: Single section layout

- **GIVEN** the Sorrento page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be light gray (`rgba(0,0,0,0.05)` /
  ~#f2f2f2)
- **AND** the section SHALL contain a centered heading "Carousel #08" (or
  an equivalent paraphrase of the same kind, e.g. "Client Testimonials")
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)
- **AND** the page SHALL be responsive (source forces `min-width: 992px`
  — the recreation MUST NOT; see fidelity exception above)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, BLACK (`#000`), centered
- **AND** the heading SHALL be followed by a ~3rem bottom margin

### Requirement: Testimonial card

The system SHALL render exactly three slides, each a white split card: a
50%-width portrait photo panel beside a 50%-width white quote panel
vertically centering a serif quote, the author's gold name, and a gray job
position; below 768px the photo SHALL sit above the quote panel at full
width.

#### Scenario: Three slides

- **GIVEN** the carousel is rendered
- **WHEN** the slide items are inspected
- **THEN** exactly three distinct slides SHALL exist
- **AND** each slide SHALL be a white card with a soft floating shadow
  (`0px 10px 40px -30px rgba(0,0,0,0.42)`)
- **AND** at ≥768px the card SHALL be a flex row: photo panel 50% width on
  the left, quote panel 50% width on the right

#### Scenario: Photo panel

- **GIVEN** a slide's photo panel is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be `width: 50%; height: 600px` at ≥768px with a
  cover-positioned portrait image
- **AND** below 768px it SHALL be `width: 100%; height: 450px` and sit
  ABOVE the quote panel

#### Scenario: Quote panel

- **GIVEN** a slide's quote panel is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be `width: 50%; background: white;` with centered text
- **AND** its content SHALL be vertically centered (flex + align-items)
- **AND** it SHALL contain a quote, an author name, and a job position
  (see below)
- **AND** the quotes, names, and positions SHALL differ per slide (the
  source repeats one quote and one position in all three slides; the
  recreation SHALL use three distinct professional testimonial quotes,
  three distinct author names, and three distinct job positions)

#### Scenario: Quote text

- **GIVEN** the quote is displayed
- **WHEN** it is inspected
- **THEN** the quote SHALL be Playfair Display serif, 39px, weight 700,
  color `#000`, with a ~3rem bottom margin
- **AND** the quote SHALL use proper quotation marks (the source's
  bare leading `"` is a demo artifact — a proper opening/closing quote or
  decorative quote treatment is expected)

#### Scenario: Author and position

- **GIVEN** the author block is displayed
- **WHEN** it is inspected
- **THEN** the author name SHALL be `#dbcc8f` (gold), 20px, weight 500,
  prefixed with an em-dash ("— Name")
- **AND** the job position SHALL appear below the name in body style
  (Poppins 14px, gray)

### Requirement: Carousel behavior

The system SHALL display exactly one slide per view at every breakpoint
(1/1/1); it SHALL loop; slide changes SHALL use a slide-down exit + flip-in
enter; autoplay SHALL advance every ~5 seconds without pausing on hover.

#### Scenario: One slide per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px, 600–999px, or ≥ 1000px
- **THEN** exactly one card SHALL be visible at a time at every viewport
  size
- **AND** the card SHALL be horizontally centered (the source wraps it in a
  centered `.col-md-11` column)

#### Scenario: Loop

- **GIVEN** the carousel is on the last slide
- **WHEN** a next-page action is attempted
- **THEN** the carousel SHALL wrap around to the first slide (loop on)

#### Scenario: Slide transition

- **GIVEN** the carousel is changing slides
- **WHEN** the transition is observed
- **THEN** the outgoing slide SHALL slide down (slideOutDown flavor) while
  the incoming slide SHALL flip in on the X axis (flipInX flavor) — NOT a
  horizontal slide and NOT a plain cross-fade

#### Scenario: Autoplay

- **GIVEN** the carousel is displayed without user interaction
- **WHEN** ~5 seconds elapse
- **THEN** the carousel SHALL advance to the next slide and continue every
  ~5s, wrapping from the last slide back to the first
- **AND** autoplay SHALL NOT pause on hover (source
  `autoplayHoverPause: false`)
- **AND** under `prefers-reduced-motion: reduce`, autoplay SHALL be
  disabled (slides change only via arrows/dots)

### Requirement: Navigation arrows

The system SHALL render Prev/Next controls at the sides of the carousel
(mid-height) that are ALWAYS visible; each SHALL stack a small uppercase
text label ("Prev"/"Next") above a 40px round arrow icon in black, turning
gold on hover; they SHALL move one slide per click and honor looping.

#### Scenario: Arrows render and navigate

- **GIVEN** the carousel is displayed
- **WHEN** the nav strip is inspected
- **THEN** a Prev control SHALL sit at the left edge (mid-height) and a
  Next control at the right edge, each with a stacked label + icon
- **AND** the controls SHALL be visible WITHOUT hover (opacity 1) — no
  hover-reveal
- **AND** the label SHALL be uppercase small text ("Prev"/"Next") and the
  icon a 40px round arrow (lucide ChevronLeft/ChevronRight or
  ArrowLeft/ArrowRight in a circle)
- **AND** label + icon SHALL be black by default and turn `#dbcc8f` (gold)
  on hover/focus
- **AND** clicking Prev SHALL move to the previous slide (wrapping to the
  last on the first slide)
- **AND** clicking Next SHALL move to the next slide (wrapping to the
  first on the last slide)
- **AND** buttons SHALL have accessible labels (`aria-label="Previous
testimonial"` / `aria-label="Next testimonial"`) and focus-visible rings

### Requirement: Dot indicators

The system SHALL render one dot per slide (three total) in a centered row
below the slides; dots SHALL be outlined circles (1px black border,
transparent fill) and the active dot SHALL be filled gold `#dbcc8f`;
activating a dot SHALL jump to that slide.

#### Scenario: Dots render and track

- **GIVEN** the carousel is displayed
- **WHEN** the dots are inspected
- **THEN** exactly three dots SHALL be rendered, one per slide, in a
  centered row with ~20px top margin
- **AND** each dot SHALL be a 10×10px circle (`border-radius: 50%`) with
  5px gaps, `background: transparent`, `border: 1px solid #000`
- **AND** the dot for the current slide SHALL have `background: #dbcc8f;
border: 1px solid #dbcc8f`
- **AND** the other dots SHALL remain outlined (transparent fill, black
  border)

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first slide
- **WHEN** the third dot is activated
- **THEN** the third slide SHALL display
- **AND** the third dot SHALL become the active (gold-filled) dot

### Requirement: Responsive behavior

The system SHALL keep the layout usable from mobile to desktop (the source
is desktop-only via `min-width: 992px` — the recreation MUST be
responsive).

#### Scenario: Mobile

- **GIVEN** a viewport < 768px
- **WHEN** the page is rendered
- **THEN** the card SHALL stack vertically: photo panel (100% width, 450px
  tall) ABOVE the quote panel (100% width)
- **AND** the photo SHALL remain cover-positioned with no horizontal
  overflow (no forced min-width)
- **AND** the dots SHALL remain tappable (≥ 44px effective hit area or
  clearly separated)
- **AND** the nav arrows SHALL remain reachable on touch

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the card SHALL be a 50/50 flex split (photo left, quote right,
  600px photo height)
- **AND** at ≥1200px the quote panel padding SHALL grow to 3rem
- **AND** the dots SHALL sit centered below the slides and the arrows at
  the sides (always visible)

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component
Dock"). The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Sorrento page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/sorrento` exists; package `@free-react-templates/sorrento`;
      `public/CNAME` = `sorrento.free.componentdock.com`; `homepage` =
      `https://sorrento.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (300, 400, 500, 700) +
      Playfair Display (400, 700); no font/image/icon assets copied from
      ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/sorrento` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Single section (`py-[7em]`) on LIGHT-GRAY page background
      (`rgba(0,0,0,0.05)` / ~#f2f2f2); centered BLACK heading (28px,
      Poppins, `#000`, ~3rem bottom margin) "Carousel #08" or paraphrase;
      responsive (NO min-width: 992px)
- [ ] Three distinct slides; each a white card with soft floating shadow
      (`0px 10px 40px -30px rgba(0,0,0,0.42)`); ≥768px = 50/50 flex split
      (photo 50%/600px left, quote panel 50%/white/centered right); <768px
      = stacked (photo 100%/450px above quote panel 100%)
- [ ] Quote: Playfair Display serif 39px/700/#000, ~3rem bottom margin,
      proper quotation marks; three DISTINCT quotes (source repeats one)
- [ ] Author: `#dbcc8f` gold 20px/500 with em-dash prefix; position below
      in body style (Poppins 14px gray); three DISTINCT names + positions
- [ ] Carousel: exactly 1 slide per view at <600px / 600–999px / ≥1000px;
      LOOP on; slide-down exit + flip-in enter transition; autoplay ON ~5s
      (fake timers) that does NOT pause on hover and is disabled under
      `prefers-reduced-motion`
- [ ] Arrows: ALWAYS visible at mid-height sides; stacked uppercase
      "Prev"/"Next" label above 40px round arrow icon, black default →
      `#dbcc8f` on hover/focus; wrap-around navigation; aria-labels +
      focus-visible rings; reachable on touch
- [ ] Dots: three 10×10px OUTLINED circles (transparent fill, 1px `#000`
      border) in a centered row (20px top margin); active dot gold-filled
      `#dbcc8f`; clicking jumps to that slide

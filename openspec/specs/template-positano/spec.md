# Template: Positano (Blog Cards Carousel)

## Purpose

Positano is a single-section blog/news card carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 07" website template design
(source: https://colorlib.com/wp/template/carousel-07/), built under a
DIFFERENT name (Positano — "the cliffside village on the Amalfi Coast",
continuing the travel/destinations naming theme of the "Bootstrap Carousels
(20)" series renames) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **positano** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-07`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main). It is the SEVENTH of the "Bootstrap Carousels (20)" series
renames (lineage: carousel-01 → wanderlust, carousel-02 → faraway,
carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri, carousel-06 →
cannes, carousel-07 → positano — theme: travel / destinations; the name is
thematic, the content is a blog-card slider).

Positano lives in `apps/positano` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 07" — the SEVENTH of the 20 "Bootstrap
  Carousels" demos (page title "Carousel 07"). A **BLOG / NEWS-CARD
  carousel** — NOT an editorial split-screen like Carousel 06 (Cannes) and
  NOT a testimonials slider like Carousel 05 (Capri). `.ftco-section`
  (padding 7em 0) on a LIGHT-GRAY page (`body { background: rgba(0,0,0,0.05)
}`) with a centered black heading ("Carousel #07") above a
  `.featured-carousel.owl-carousel` holding SIX `.item` slides, each a
  **white blog card**: cover photo with a dark date badge (day/month/year)
  top-left, post title, gray blurb, pink "Read More" button with a round
  arrow icon, and meta (ADMIN + comment count) bottom-right. No navbar, no
  hero band, no footer — the section is the whole page. **Differs from
  Carousel 06 (Cannes): the page is LIGHT GRAY (not white), the accent is
  raspberry pink `#ff487e` (not peach `#ffc6be`), each slide is a CARD (not
  a split layout), items-per-view is 1/2/3 (not 1/1/1), the nav arrows sit
  at the SIDES at 50% height (not bottom-center) and are HIDDEN until
  hover, the dots are a centered row below (not a vertical right column),
  and the nav icons are bare ionicons (no "Prev"/"Next" labels).**
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-07/`
  (HTTP 200, 15,229 bytes DOM; fetched 2026-08-15). NOTE: the standard
  preview path `https://preview.colorlib.com/theme/carousel-07/` 404s — the
  whole "Bootstrap Carousels" series lives under the `/theme/bootstrap/`
  prefix (same finding as the Bootstrap Calendars and Carousel 01–06 preps);
  stylesheets are likewise under
  `.../theme/bootstrap/carousel-07/css/`. Stylesheets: `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/style.css` (222,771 bytes — bundles
  Bootstrap 4.3.1 + the template's custom ftco styles at the tail) +
  ionicons 4.5.6 (CDN). Body font Poppins (Google, loaded via cf-fonts in
  the source head). Carousel driven by `js/main.js`:
  `$('.featured-carousel').owlCarousel({ loop: true, autoplay: true,
margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn', nav: true,
dots: true, autoplayHoverPause: false, items: 1,
navText: ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } })`
  — **ONE slide per view below 600px, TWO at 600–999px, THREE at ≥1000px**
  (like Capri/Carousel 05, UNLIKE Cannes/Carousel 06's 1/1/1), **LOOP ON**,
  **AUTOPLAY ON** (Owl default 5,000ms interval, `autoplayHoverPause:
false`), **ARROWS ON** (icon-only navText — ion-ios-arrow-back/forward,
  NO "Prev"/"Next" labels), dots ON (centered row below, one per item →
  six dots).
- **Screenshot:** `carousel-07.jpg` (1200×972, viewed in browser) —
  minimalist blog-grid layout. Top: centered black "Carousel #07" heading.
  Below: THREE white cards in a row (3-column desktop view of the carousel,
  ~30px gutters) on a LIGHT-GRAY page. Each card: a rectangular cover photo
  (business/office stock, meetings) with a small BLACK date badge
  ("26 Nov 2019", white text, top-left of the photo); below it a BOLD BLACK
  title ("Finance And Legal Working Streams Occur Throughout"), a gray
  placeholder paragraph, a PINK "Read More" button (white text, round arrow
  icon) on the left, and "ADMIN" + a comment-bubble icon with "3" in small
  gray uppercase text bottom-right. Below the row: a centered dot strip —
  the FIRST dot PINK (`#ff487e`, active), the rest light gray. No arrows
  visible in the screenshot (they are hover-revealed). Aesthetic: clean
  corporate blog; white cards floating on light gray, monochrome text, a
  single raspberry-pink accent.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1 (bundled
  into style.css) + Owl Carousel 2.3.4 + ionicons 4.5.6 + Google Poppins.
  The recreation must NOT copy any of this — build a pure-React carousel
  with lucide-react icons (ArrowLeft/ArrowRight for nav, User + MessageSquare
  for meta) and picsum placeholder photos (the source's office photos are
  NOT copied).
- **Fidelity exception (responsive):** the source stylesheet forces
  `body { min-width: 992px !important; }` (a desktop-only demo artifact —
  13 occurrences in style.css). The recreation MUST be responsive (the
  3-column grid collapses to 2 then 1 below 1000px/600px) and MUST NOT force
  a min-width — mobile support is a monorepo hard requirement.
- **Fidelity note (hover):** the source's nav arrows are `opacity: 0` by
  default and only appear on `.owl-carousel:hover` (shifting to
  `left: -25px` / `right: -25px`). Recreation should replicate the
  hover-reveal (arrows visible on hover / on focus-within for keyboard
  users), with `prefers-reduced-motion` respected.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.ftco-section` — single section, `padding: 7em 0`, on the LIGHT-GRAY
   page background (`body { background: rgba(0,0,0,0.05) }`). Inside
   `.container` > `.row`:
   - `.col-md-12.text-center` > `h2.heading-section.mb-5.pb-md-4` —
     "Carousel #07" (28px, **#000**, Poppins, centered,
     `margin-bottom: 3rem` (`.mb-5`), `padding-bottom: 1.5rem` at ≥768px
     (`.pb-md-4`)).
   - `.col-md-12` > `.featured-carousel.owl-carousel` — SIX `.item`
     slides, each:
     - `div.blog-entry` — the card: `width: 100%; background: #fff;`
       - `a.block-20.d-flex.align-items-start` — the PHOTO area:
         `height: 275px`, `background-image: url(images/image_N.jpg)`
         (cover, centered), `position: relative; display: block`.
         Source cycles image_1.jpg … image_6.jpg (office/business stock).
         Inside it:
         - `div.meta-date.text-center.p-2` — the DATE BADGE:
           `display: inline-block; background: #343a40;` (dark slate),
           `padding: 0.5rem` (`.p-2`), text-center. Three block spans,
           all `color: #fff`:
           - `span.day` — "26": `font-weight: 700; font-size: 20px;`
           - `span.mos` — "Nov.": `font-size: 13px;`
           - `span.yr` — "2019": `font-size: 13px;`
             (all six cards repeat "26 Nov. 2019" in the source —
             recreation should vary dates per card, same format.)
       - `div.text.border.border-top-0.p-4` — the CARD BODY:
         `border: 1px solid #dee2e6` (Bootstrap `.border`) with
         `border-top: 0` (image sits above, no top border), `border-radius:
2px` (`.blog-entry .text` custom), `padding: 1.5rem` (`.p-4`):
         - `h3.heading` > `a` — the POST TITLE link: `font-size: 20px;`
           `font-weight: 600;` `margin-bottom: 16px;` color **#000**;
           hover/focus/active **#ff487e**. Source repeats "Finance And
           Legal Working Streams Occur Throughout" in all six — recreation
           uses SIX DISTINCT post titles of the same kind (professional
           business/legal/finance headlines).
         - `p` — the blurb: body style (Poppins 14px, `line-height: 1.8`,
           `color: gray`), the placeholder "Far far away, behind the word
           mountains…" text, paraphrased per card.
         - `div.d-flex.align-items-center.mt-4` — the card footer row
           (`margin-top: 1.5rem`):
           - `p.mb-0` > `a.btn.btn-primary` — "Read More" (see button
             tokens below) + `span.ion-ios-arrow-round-forward` (round
             arrow icon → lucide ArrowRight/ChevronRight in the
             recreation).
           - `p.ml-auto.meta2.mb-0` — the META (right-aligned via
             `ml-auto`): `a.mr-2` (user icon + "Admin") and
             `a.meta-chat` (`span.ion-ios-chatboxes` + "3" comment
             count). Meta styling: `.blog-entry .meta2 a {
text-transform: uppercase; font-size: 13px; letter-spacing:
1px; color: rgba(0,0,0,0.4); }`; `.meta-chat` color
             `#b3b3b3`. The "3" is the comment count (varies per card in
             the recreation).
   - Carousel furniture (Owl + style.css):
     - `.owl-carousel .owl-nav` — `position: absolute; top: 50%; width:
100%;` — a SIDE strip at mid-height. `.owl-prev { left: 0; }`,
       `.owl-next { right: 0; }` — both `transform: translateY(-50%)`,
       `margin-top: -10px`, `color: rgba(0,0,0,0.1) !important;` (light
       gray icons, 30px — `span:before { font-size: 30px }`), `opacity:
0` by default; `.owl-carousel:hover .owl-nav .owl-prev/.owl-next {
opacity: 1; }` and shift to `left: -25px` / `right: -25px` on
       hover. Icon-only (no labels).
     - `.owl-carousel .owl-dots` — `text-align: center; margin-top:
20px;` — a CENTERED ROW below the slides (no vertical variant).
       Dots: `width: 10px; height: 10px; margin: 5px; border-radius:
50%; background: rgba(0,0,0,0.1);` ACTIVE dot `background:
#ff487e`. Six slides → six dots.

## Design tokens (from preview stylesheet `css/style.css`, custom tail)

- **Page background:** `rgba(0,0,0,0.05)` (light gray — reads ≈ #f2f2f2
  over white; the screenshot shows ~#f0f0f0). Set the section/page bg to a
  light gray; cards are white and float on it.
- **Section:** `.ftco-section` — `padding: 7em 0` (Tailwind `py-[7em]`).
- **Heading (`.heading-section`):** 28px, Poppins, **#000**, centered,
  `margin-bottom: 3rem` (`.mb-5`) + `padding-bottom: 1.5rem` at ≥768px
  (`.pb-md-4`).
- **Body text:** Poppins 14px, `line-height: 1.8`, `color: gray` (blurb
  paragraphs). Body rule: `body { font-family: "Poppins", Arial,
sans-serif; font-size: 14px; line-height: 1.8; font-weight: normal;
color: gray; background: rgba(0,0,0,0.05); }`.
- **Card (`.blog-entry`):** `width: 100%; background: #fff;` — white card.
- **Photo area (`.block-20`):** `height: 275px`, `background-size: cover;
background-position: center center`, `position: relative; display:
block;` (an `<a>` wrapping the date badge).
- **Date badge (`.meta-date`):** `display: inline-block; background:
#343a40` (dark slate), `padding: 0.5rem` (`.p-2`), text-center; inner
  spans `display: block; color: #fff;` — `.day` `font-weight: 700;
font-size: 20px`, `.mos`/`.yr` `font-size: 13px`.
- **Card body (`.text`):** `border: 1px solid #dee2e6` with `border-top:
0`, `border-radius: 2px`, `padding: 1.5rem` (`.p-4`).
- **Post title (`.heading`):** 20px, `font-weight: 600`,
  `margin-bottom: 16px`; link color **#000**; hover/focus/active
  **#ff487e**.
- **Read More button (`.btn.btn-primary`):** custom override
  `background: #ff487e; border-color: #ff487e;` (raspberry pink), white
  text; custom `.btn { font-size: 14px; }`; Bootstrap base: `padding:
0.375rem 0.75rem`, `border-radius: 0.25rem`. NOTE: the source leaves
  Bootstrap's `.btn-primary:hover { background-color: #0069d9 }` (blue!)
  in place — an obvious source bug; the recreation SHALL use a darker
  shade of the pink for hover (e.g. `#e64a73`) instead.
- **Meta (`.meta2 a`):** `text-transform: uppercase; font-size: 13px;
letter-spacing: 1px; color: rgba(0,0,0,0.4);` `.meta-chat` (comment
  count) `color: #b3b3b3`. Icons: user + chat bubble (lucide User /
  MessageSquare in the recreation).
- **Nav arrows (`.owl-nav`):** side-mounted at `top: 50%` (left: 0 /
  right: 0), `translateY(-50%)`, icon-only 30px, color
  `rgba(0,0,0,0.1)`; hidden (`opacity: 0`) until `.owl-carousel:hover`
  (then `opacity: 1` and offset to ±25px outside the track).
- **Dots (`.owl-dots`):** centered row, `margin-top: 20px`; 10×10px
  circles, `margin: 5px`, `border-radius: 50%`, `background:
rgba(0,0,0,0.1)`; ACTIVE dot `background: #ff487e`.
- **Fonts:** `"Poppins", Arial, sans-serif` for body and headings (Google
  Poppins via cf-fonts in the source). Load Poppins 300, 400, 500, 700 via
  Google Fonts `<link>` in index.html (no font files copied).
- **Icons/images:** source uses the ionicons font (nav arrows, arrow
  round, chatboxes, person) and local `images/image_*.jpg` office stock.
  Recreation uses lucide-react icons and picsum placeholder photos
  (`https://picsum.photos/seed/positano-<n>/600/400` — landscape ~3:2 to
  fit the 275px-tall cover with a card width of ~350–400px; seed IDs
  screened for office/business-appropriate subjects — see the
  colorlib-template-replication skill's verified person picsum IDs: 1027,
  64, 823, 996).

## Requirements

### Requirement: Page composition

The system SHALL render a single section on a light-gray page containing a
centered section heading and a blog-card carousel; the section SHALL fill
the page width with the carousel constrained to a centered container.

#### Scenario: Single section layout

- **GIVEN** the Positano page is rendered
- **WHEN** the page loads
- **THEN** a single `<section>` SHALL be present with vertical padding of
  7em top and bottom (`py-[7em]`)
- **AND** the page background SHALL be light gray (`rgba(0,0,0,0.05)` /
  ~#f2f2f2)
- **AND** the section SHALL contain a centered heading "Carousel #07" (or
  an equivalent paraphrase of the same kind, e.g. "Latest News")
- **AND** the body font SHALL be Poppins (via Google Fonts link in
  index.html)
- **AND** the page SHALL be responsive (source forces `min-width: 992px`
  — the recreation MUST NOT; see fidelity exception above)

#### Scenario: Section heading

- **GIVEN** the section is rendered
- **WHEN** the heading is inspected
- **THEN** the heading SHALL be 28px, Poppins, BLACK (`#000`), centered
- **AND** the heading SHALL be followed by a ~3rem bottom margin and
  ~1.5rem bottom padding at ≥768px

### Requirement: Blog cards

The system SHALL render exactly six slides, each a white blog card: a
275px cover photo with a dark date badge (day/month/year) at its top-left,
a bold black post title, a gray blurb paragraph, a pink "Read More"
button, and meta (ADMIN + comment count) right-aligned in the card footer.

#### Scenario: Six cards

- **GIVEN** the carousel is rendered
- **WHEN** the slide items are inspected
- **THEN** exactly six distinct cards SHALL exist, each `background:
#fff` (white) on the light-gray page
- **AND** each card SHALL contain a cover photo area 275px tall with a
  cover-positioned background image
- **AND** each card SHALL have a post title, blurb, Read More button, and
  meta (titles and blurbs paraphrased per card — the source repeats one
  title/blurb in all six; the recreation SHALL use six distinct
  professional headlines of the same kind)

#### Scenario: Date badge

- **GIVEN** a card's photo area is displayed
- **WHEN** the badge is inspected
- **THEN** a dark slate badge (`#343a40`) SHALL sit at the top-left of the
  photo with ~0.5rem padding
- **AND** it SHALL contain three stacked white text lines: day (20px,
  weight 700), month ("Nov."-style, 13px), and year (13px)
- **AND** the date SHALL differ per card (the source repeats "26 Nov.
  2019"; the recreation SHALL vary, same format)

#### Scenario: Card body

- **GIVEN** a card is rendered
- **WHEN** its body is inspected
- **THEN** the body SHALL have a 1px `#dee2e6` border with NO top border
  and a 2px radius, with 1.5rem padding
- **AND** the post title SHALL be 20px, weight 600, color `#000`, with a
  16px bottom margin, and turn `#ff487e` on hover/focus
- **AND** the blurb paragraph SHALL be Poppins 14px / line-height 1.8 /
  gray

### Requirement: Card footer row

The system SHALL render a card footer row: a pink "Read More" button with
a round arrow icon on the LEFT, and right-aligned uppercase meta (user +
"Admin", chat bubble + comment count) on the RIGHT.

#### Scenario: Read More button

- **GIVEN** a card's footer row is displayed
- **WHEN** the button is inspected
- **THEN** a "Read More" button SHALL be present with background
  `#ff487e` (raspberry pink), white text, `border-radius: 0.25rem`,
  padding ~0.375rem 0.75rem, font-size 14px, and a round arrow icon
  (lucide ArrowRight)
- **AND** on hover the button SHALL darken the pink (e.g. `#e64a73`) —
  the source's Bootstrap blue hover (`#0069d9`) is a bug and SHALL NOT be
  reproduced
- **AND** the button SHALL have an accessible label and focus-visible ring

#### Scenario: Meta row

- **GIVEN** a card's footer row is displayed
- **WHEN** the meta is inspected
- **THEN** a right-aligned meta block SHALL be present (pushed right with
  auto margin) containing a user icon + "ADMIN" and a chat-bubble icon +
  comment count
- **AND** the meta text SHALL be uppercase, 13px, letter-spacing 1px,
  color `rgba(0,0,0,0.4)`; the comment count SHALL be `#b3b3b3`
- **AND** the comment count SHALL differ per card (source repeats "3")

### Requirement: Carousel behavior

The system SHALL display one slide per view below 600px, two at
600–999px, and three at ≥1000px; it SHALL loop; page changes SHALL
cross-fade; autoplay SHALL advance every ~5 seconds without pausing on
hover.

#### Scenario: Responsive items per view

- **GIVEN** the carousel is rendered
- **WHEN** the viewport is < 600px
- **THEN** exactly one card SHALL be visible at a time
- **WHEN** the viewport is 600–999px
- **THEN** exactly two cards SHALL be visible at a time
- **WHEN** the viewport is ≥ 1000px
- **THEN** exactly three cards SHALL be visible at a time
- **AND** adjacent cards SHALL be separated by a 30px gutter (`margin:
30`)

#### Scenario: Loop

- **GIVEN** the carousel is on the last slide
- **WHEN** a next-page action is attempted
- **THEN** the carousel SHALL wrap around to the first slide (loop on)

#### Scenario: Cross-fade transition

- **GIVEN** the carousel is changing slides
- **WHEN** the transition is observed
- **THEN** the outgoing slide SHALL fade out while the incoming slide
  fades in (opacity cross-fade, no horizontal slide motion)

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

The system SHALL render icon-only Prev/Next arrow buttons at the sides of
the carousel (mid-height); they SHALL be hidden by default and revealed on
hover (and on focus-within for keyboard users), shifting slightly outward;
they SHALL move one slide per click and honor looping.

#### Scenario: Arrows render and navigate

- **GIVEN** the carousel is displayed
- **WHEN** the nav strip is inspected
- **THEN** a Prev button SHALL sit at the left edge (mid-height) and a
  Next button at the right edge, each with a 30px arrow icon (lucide
  ArrowLeft/ArrowRight) in light gray `rgba(0,0,0,0.1)`
- **AND** the arrows SHALL be hidden (opacity 0) until the carousel is
  hovered or an arrow receives focus, then become fully opaque and shift
  ~25px outward
- **AND** clicking Prev SHALL move to the previous slide (wrapping to the
  last on the first slide)
- **AND** clicking Next SHALL move to the next slide (wrapping to the
  first on the last slide)
- **AND** buttons SHALL have accessible labels (`aria-label="Previous
slide"` / `aria-label="Next slide"`) and focus-visible rings

### Requirement: Dot indicators

The system SHALL render one dot per slide (six total) in a centered row
below the slides; the active dot SHALL be raspberry pink `#ff487e`,
inactive dots light gray; activating a dot SHALL jump to that slide.

#### Scenario: Dots render and track

- **GIVEN** the carousel is displayed
- **WHEN** the dots are inspected
- **THEN** exactly six dots SHALL be rendered, one per slide, in a
  centered row with ~20px top margin
- **AND** each dot SHALL be a 10×10px circle (`border-radius: 50%`) with
  5px gaps
- **AND** the dot for the current slide SHALL have `background: #ff487e`
- **AND** the other dots SHALL have `background: rgba(0,0,0,0.1)`

#### Scenario: Click a dot

- **GIVEN** the carousel is on the first slide
- **WHEN** the fourth dot is activated
- **THEN** the fourth slide SHALL display
- **AND** the fourth dot SHALL become the active (pink) dot

### Requirement: Responsive behavior

The system SHALL keep the layout usable from mobile to desktop (the source
is desktop-only via `min-width: 992px` — the recreation MUST be
responsive).

#### Scenario: Mobile

- **GIVEN** a viewport < 600px
- **WHEN** the page is rendered
- **THEN** one card SHALL be visible per view with no horizontal overflow
  (no forced min-width)
- **AND** the dots SHALL remain tappable (≥ 44px effective hit area or
  clearly separated)
- **AND** the nav arrows SHALL remain reachable (e.g. always visible on
  touch devices, since hover does not exist)

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 1000px
- **WHEN** the page is rendered
- **THEN** three cards SHALL be visible per view with 30px gutters
- **AND** the dots SHALL sit centered below the slides and the arrows at
  the sides, revealed on hover

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component
Dock"). The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Positano page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/positano` exists; package `@free-react-templates/positano`;
      `public/CNAME` = `positano.free.componentdock.com`; `homepage` =
      `https://positano.free.componentdock.com`
- [ ] index.html loads Google Fonts Poppins (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/positano` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Single section (`py-[7em]`) on LIGHT-GRAY page background
      (`rgba(0,0,0,0.05)` / ~#f2f2f2); centered BLACK heading (28px,
      Poppins, `#000`, `mb-12`/3rem) "Carousel #07" or paraphrase;
      responsive (NO min-width: 992px)
- [ ] Six distinct white cards; each with 275px cover photo + dark
      `#343a40` date badge (day 20px/700 + month + year, white, stacked,
      top-left) + 1px `#dee2e6` body border (no top border, 2px radius,
      1.5rem padding) + 20px/600/#000 title (hover `#ff487e`) + gray
      blurb + footer row
- [ ] Footer row: pink "Read More" (`#ff487e` bg, white text, radius
      .25rem, `py-1.5 px-3`-scale, 14px, ArrowRight icon, darker-pink
      hover NOT Bootstrap blue) + right-aligned uppercase meta (User icon + "ADMIN", MessageSquare icon + comment count, `rgba(0,0,0,0.4)` /
      `#b3b3b3`)
- [ ] Carousel: 1/2/3 cards per view at <600px / 600–999px / ≥1000px; 30px
      gutter; LOOP on; cross-fade transition; autoplay ON ~5s (fake
      timers) that does NOT pause on hover and is disabled under
      `prefers-reduced-motion`
- [ ] Arrows: icon-only (ArrowLeft/ArrowRight, 30px, `rgba(0,0,0,0.1)`),
      side-mounted at mid-height, hidden until hover/focus-within then
      shift ~25px outward; wrap-around navigation; aria-labels +
      focus-visible rings; always reachable on touch
- [ ] Dots: six 10×10px circles in a centered row (20px top margin);
      active `#ff487e`, inactive `rgba(0,0,0,0.1)`; clicking jumps to that
      slide

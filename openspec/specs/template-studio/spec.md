# Template: Studio (Creative Studio Landing)

## Purpose

Studio is a single-section creative-studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel #10" website template from the Bootstrap Carousels
series (see TEMPLATES.md, Bootstrap Carousels section, line 727 — single row,
no duplicate rows elsewhere), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> **Naming note:** the source slug is `carousel-20` and the source's own
> on-page label reads "Carousel #10" (the series numbering lags the slug by
> 10 — confirmed on neighboring previews: carousel-18 → "Carousel #8",
> carousel-19 → "Carousel #9"). The NEW name is **Studio** (single lowercase
> word, no collision with `apps/` or existing spec folders) — it matches the
> hero brand "The Studio" and the template's creative-studio identity.

The reference is a minimal, high-contrast split-screen hero on a deep
indigo-navy `#272343` background: a small centered white label "Carousel #10"
at the top, then a full-viewport split — the LEFT half is a 3-slide image
carousel (its bottom-right corner rounded with a 200px radius), the RIGHT
half carries the giant white "The Studio" headline (8rem, weight 900), a
light-grey lorem paragraph and a white-outline pill button "Start a project"
that inverts to solid white on hover. Two circular `#007bff` blue prev/next
arrows sit stacked at the bottom of the image half. There is NO navbar and NO
footer in the source — the page is the hero and nothing else. On mobile the
image expands to full width under a white overlay and the text turns dark.

Brand colors: page/background `#272343` (deep indigo-navy), arrow accent
`#007bff` (Bootstrap primary blue), white headline + pill border, body text
`#b3b3b3` (weight 300) with `gray` (`#808080`) sub-text.

## Design tokens (from `https://preview.colorlib.com/theme/bootstrap/carousel-20/`)

- **Background:** `#272343` — `body` AND `.content` (`background-color:
#272343`). The whole page stays this dark indigo-navy.
- **Font:** Roboto — `body { font-family: "Roboto", -apple-system,
BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto
Sans", sans-serif, ... }`, same stack on all headings. Load Roboto (300,
  400, 900 — weights used: 300 body/sub-text, 400 default, 900 headline)
  via Google Fonts `<link>` in `index.html`.
- **Headline:** `.site-blocks-cover h1` — `font-size: 8rem` (128px, 4rem/64px
  ≤991.98px), `font-weight: 900`, `line-height: 1`, white
  (`text-white font-weight-bold`).
- **Sub-text:** `.sub-text` — `font-size: 1.4rem` (22.4px), `color: gray`
  (`#808080`), `font-weight: 300`; ≤991.98px the color flips to `#000` (it
  sits on the white mobile overlay).
- **Paragraphs:** `p { color: #b3b3b3; font-weight: 300; }`.
- **Series label:** `h2` inside `.content` — 20px, centered, white.
- **Button** `.btn-pill` (applied on top of Bootstrap `btn btn-outline-primary
btn-md`): `border-radius: 30px`, `padding: 15px 30px`, `border-color: #fff`,
  `color: #fff` (transparent bg); hover → `background: #fff`, `border-color:
#fff`, `color: #000`. Recreate as a white-outline pill that inverts to
  solid white with black text on hover.
- **Carousel arrows** `.hero-slider .owl-nav .owl-prev/.owl-next`: 50px
  circles, `background: #007bff`, white 30px chevron glyphs (`font-size:
1.3rem` on the button, 30px on the `<span>`), `border-radius: 50%`, stacked
  vertically (`margin-bottom: 10px`), positioned `bottom: 120px; right: 50px`
  within the image half. Icons → lucide `ChevronLeft` / `ChevronRight`.
- **Section layout:** `.content { padding: 7rem 0; }`; `.site-blocks-cover`
  `min-height: 600px; height: calc(100vh)`; `.img-wrap` — absolute,
  `width: calc(100% - 50%)` (= 50%), `right: 50%` (occupies the LEFT half),
  `height: 100%`, `border-bottom-right-radius: 200px`, `z-index: 2`,
  `overflow: hidden`; `.intro { z-index: 3 }` (text above the image);
  `.intro .heading { margin-left: -150px }` (headline pulled left, over the
  image edge); `.intro .text { padding-left: 50px }`.
- **Mobile (≤991.98px):** `.img-wrap` → `width: 100%; right: 0; top: 0`
  (full width) with a white overlay over the slider (`background: #fff;
opacity: .5; z-index: 2` via `.hero-slider:before`), `.sub-text` → `#000`,
  h1 → 4rem, `.heading` margin-left 0, `.text` padding-left 0.
- **Slide images:** `img { object-fit: cover; height: 100%; width: 100% }`
  per `.slide` (100vh tall). Three slides (hero_1..3.jpg).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel #10" — creative-studio single-hero landing,
  Bootstrap Carousels series (source:
  https://colorlib.com/wp/template/carousel-20/). Listed in TEMPLATES.md
  line 727 (section "## Bootstrap Carousels (20)"); grep confirms NO
  duplicate rows for this slug elsewhere. Screenshot:
  `carousel-20.jpg` (1200×972, AVIF, reviewed visually in the browser:
  solid deep-navy background, small centered white "Carousel #10" label near
  the top, left half shows a warm beige studio photo of a hand holding a
  hardcover "GENESIS" book/magazine with a mountain cover, right half shows
  the huge white sans-serif "The Studio" headline, a lorem line and a
  white-outline pill "Start a project"; minimal, editorial, high contrast).
- **Live preview URL:** https://preview.colorlib.com/theme/bootstrap/carousel-20/
  (HTTP 200, 14,799 bytes; title "Carousel #10"). NOTE: the standard
  `preview.colorlib.com/theme/carousel-20/` path 404s — the Bootstrap
  Carousels series is served under the `/theme/bootstrap/` prefix (the
  ColorLib template page's "Live Preview" href confirms it). HTML saved to
  `/tmp/carousel20/preview.html`; stylesheet
  `https://preview.colorlib.com/theme/bootstrap/carousel-20/css/style.css`
  (4,030 bytes — this series' style.css is the SMALL template-specific sheet,
  NOT a bootstrap bundle; `bootstrap.min.css` is the framework) saved to
  `/tmp/carousel20/style.css`. Libs referenced: Bootstrap 4 grid, Owl
  Carousel (`css/owl.carousel.min.css`, `slide-one-item`), `animate.css`,
  icomoon icon font (`fonts/icomoon/style.css` — used by the owl nav
  chevrons; substitute lucide).
- **Full page DOM (there is nothing else — no header/nav/footer):**
  ```html
  <div class="content">
    <div class="container"><h2 class="my-5 text-center text-white">Carousel #10</h2></div>
    <div class="site-blocks-cover">
      <div class="img-wrap">
        <div class="owl-carousel slide-one-item hero-slider">
          <div class="slide"><img src="images/hero_1.jpg" alt="..." /></div>
          <div class="slide"><img src="images/hero_2.jpg" ... /></div>
          <div class="slide"><img src="images/hero_3.jpg" ... /></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto align-self-center">
            <div class="intro">
              <div class="heading"><h1 class="text-white font-weight-bold">The Studio</h1></div>
              <div class="text sub-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi omnis qui
                  distinctio.
                </p>
                <p>
                  <a
                    href="https://free-template.co/"
                    target="_blank"
                    class="btn btn-outline-primary btn-md btn-pill"
                    >Start a project</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ```
  The owl prev/next arrows are JS-injected by Owl Carousel (absent from the
  static HTML); the CSS styles them as described above. The "Carousel #10"
  label is the source's series number — KEEP it verbatim for fidelity (the
  slug/number mismatch is a quirk of the source, not a typo to fix).
- **Image subjects:** hero_1.jpg is the hand-holding-"GENESIS"-book photo
  from the screenshot (warm beige backdrop); hero_2/3.jpg are not visible in
  the static HTML (owl lazily loads) — treat all three as editorial/studio
  photography (books, magazines, workspaces, cameras, portraits). Use
  `picsum.photos/seed/studio-hero-<n>/<w>/<h>` and SCREEN each seed for a
  studio/editorial subject (see replication skill: pixel-metric ranking +
  browser_vision on the top candidate; verified editorial-ish picsum IDs:
  1027/64/823/996 portraits, 453 dark stage shot — avoid pure landscapes).
- **The "Start a project" button** hrefs to `https://free-template.co/`
  (ColorLib's sister site) — do NOT link there (no ColorLib references in
  app code). Use `href="#"` / an inert CTA per repo conventions.
- **No footer in the source** — but AGENTS.md mandates every template's
  footer links `https://www.componentdock.com/` ("Component Dock"). Add ONE
  minimal dark footer bar (matching `#272343` with white/`#b3b3b3` text):
  "© 2026 Studio. All rights reserved." + "Made with ❤" credit linking to
  `https://www.componentdock.com/`. Documented deviation.

## Requirements

### Requirement: Series label

The system SHALL render the dark page with a small centered white series
label above the hero.

#### Scenario: Label on dark background

- **GIVEN** the Studio app is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#272343`
- **AND** a centered white 20px label SHALL read "Carousel #10" (verbatim
  from the source — keep the source's numbering even though it lags the
  slug) near the top of the page, above the hero

### Requirement: Split hero layout (desktop)

The system SHALL render a full-viewport hero split into an image half and a
text half.

#### Scenario: Desktop split

- **GIVEN** the hero is rendered on a viewport wider than 991.98px
- **WHEN** it loads
- **THEN** the image carousel SHALL occupy the LEFT 50% of the viewport,
  full height, with `border-bottom-right-radius: 200px` and `overflow:
hidden`
- **AND** the intro SHALL sit in the RIGHT half (`col-md-6 ml-auto
align-self-center`), with the headline pulled left by `margin-left:
-150px` (overlapping the image edge) and the text block padded `padding-
left: 50px`

#### Scenario: Mobile stack

- **GIVEN** the hero is rendered on a viewport ≤991.98px
- **WHEN** it loads
- **THEN** the image SHALL expand to full width (`width: 100%; right: 0`)
  with a white overlay at 50% opacity over the slider
- **AND** the headline SHALL scale to 4rem, the sub-text SHALL be `#000`
  (reads on the white overlay), and the heading/text offsets SHALL reset to
  0

### Requirement: Hero carousel

The system SHALL render a 3-slide image carousel with stacked circular
prev/next arrows.

#### Scenario: Slides and navigation

- **GIVEN** the hero carousel is rendered
- **WHEN** it loads
- **THEN** three full-height slide images (`picsum.photos/seed/studio-hero-<n>`
  — SCREEN each for a studio/editorial subject; `object-fit: cover`) SHALL
  cycle with a fade/slide transition
- **AND** prev/next controls SHALL be 50px circular `#007bff` buttons with
  white 30px chevrons (lucide `ChevronLeft`/`ChevronRight`), stacked
  vertically (10px apart) near the bottom of the image half (`bottom:
120px; right: 50px` of the image wrap)
- **AND** clicking prev/next SHALL move to the previous/next slide (wrap
  around), with `aria-label="Previous slide"` / `aria-label="Next slide"`
  on the controls

### Requirement: Hero intro

The system SHALL render the giant headline, sub-text and pill CTA on the
right half.

#### Scenario: Intro content

- **GIVEN** the hero intro is rendered
- **WHEN** it loads
- **THEN** the headline SHALL read "The Studio" — white, `font-size: 8rem`
  (4rem ≤991.98px), `font-weight: 900`, `line-height: 1`
- **AND** a paragraph SHALL follow in 1.4rem `gray` (`#808080`) weight-300
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
  omnis qui distinctio." (paraphrase allowed, same kind of content)
- **AND** a "Start a project" pill button SHALL render with
  `border-radius: 30px`, `padding: 15px 30px`, 1px white border, white
  text, transparent background
- **AND** hovering the button SHALL invert it to solid white with `#000`
  text

### Requirement: Page composition

The system SHALL compose the single-section page with proper landmarks, a
document title and the mandatory footer credit.

#### Scenario: Full page render

- **GIVEN** the Studio app is rendered
- **WHEN** the page loads
- **THEN** the series label + hero SHALL sit in the main landmark
- **AND** a minimal dark footer bar (`#272343`) SHALL read "© 2026 Studio.
  All rights reserved." with a "Made with ❤" credit line linking to
  `https://www.componentdock.com/` (mandatory per repo convention; the
  source has no footer — documented addition)
- **AND** the document title SHALL be "Studio — Creative Studio Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (image
  collapses from left-half to full-width + white overlay, headline scales
  8rem → 4rem, pill stays tappable, no horizontal scroll)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/studio`
      (`scripts/verify-app.sh studio` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: page background `#272343`; centered white "Carousel
      #10" label; split hero — left-half image carousel with 200px
      bottom-right radius + 3 slides, right-half "The Studio" 8rem/900 white
      headline pulled left over the image edge (-150px), gray 1.4rem
      sub-text with 50px left padding, white-outline pill "Start a project"
      inverting on hover; stacked 50px `#007bff` circular prev/next arrows
      (white 30px chevrons) at the bottom of the image half; mobile: full-
      width image + 50% white overlay + dark text + 4rem headline; matches
      the live preview 1:1.
- [ ] Design tokens in `@theme`: background `#272343`; arrow accent
      `#007bff`; sub-text gray `#808080`; body `#b3b3b3`; Roboto (300/400/ 900) via Google Fonts `<link>` in `index.html`.
- [ ] Buttons: pill `border-radius: 30px`, padding 15px 30px, white 1px
      border + white text, hover → solid white bg + `#000` text.
- [ ] Placeholder images use `picsum.photos/seed/studio-hero-<n>/<w>/<h>`
      (3 slides — SCREEN for studio/editorial subjects per the replication
      skill); icons from lucide-react (`ChevronLeft`, `ChevronRight`); no
      ColorLib assets copied; no ColorLib/free-template.co references
      anywhere in `apps/studio`.
- [ ] Footer: minimal `#272343` bar with "© 2026 Studio. All rights
      reserved." + "Made with ❤" linking to `https://www.componentdock.com/`
      (source has no footer — documented deviation).
- [ ] PR description states source template (ColorLib "Carousel #10", slug
      carousel-20), preview URL
      (https://preview.colorlib.com/theme/bootstrap/carousel-20/ — note the
      `/theme/bootstrap/` prefix), design tokens, and what differs (name,
      placeholder images, lucide chevrons instead of icomoon, no
      free-template.co link, added Component Dock footer).

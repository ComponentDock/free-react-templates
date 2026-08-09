# Template: Canvas (Bootstrap / Creative Agency)

## Purpose

Canvas is a single-page creative-agency / design-studio website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Approach" website template (source:
https://colorlib.com/wp/template/approach/), built under a DIFFERENT name
(**Canvas** — a designer's blank surface, creative-branded) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, high-contrast creative studio landing page: a solid
BLACK full-height hero (no image) with a bold Poppins-900 headline and a
50px white circle video-play button, an asymmetric mosaic portfolio collage
that overlaps the hero's bottom edge over a black band, a plain white
three-card services row with large indigo glyph icons, a vivid INDIGO
`#3b4eda` "Blog Updates" band with a white-text carousel of post cards, a
light gray client-logos row, and a white footer with an indigo brand mark,
three link columns, a centered social-icon row, and a copyright bar. Canvas
recreates that structure 1:1 with matching layout, colors, typography, and
content types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Approach" / slug `approach` is
> FORBIDDEN as the app name. **Canvas** is the new, original name — single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md (verified 2026-08-09). Source slug +
> preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Approach" — creative agency / studio website
  template. Category in TEMPLATES.md: **Bootstrap (216)**. THREE checklist
  rows are `- [ ] **Approach**` duplicates — lines **336** (Bootstrap),
  **886** (Business) and **1959** (Interior Design) — all point to
  https://colorlib.com/wp/template/approach/. The recreation brands itself
  **Canvas** but keeps the same section structure and copy kinds.
- **Live preview DOM analyzed (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/approach/` is LIVE — HTTP 200, 19,650
  bytes, title "Approach — Website Template by Colorlib". Structure extracted
  from the rendered DOM + HTML source + `css/style.css` (19,246 bytes) +
  Bootstrap 4 vendor CSS + `js/main.js` behaviors. The TEMPLATES.md screenshot
  (`approach-free-template.jpg`, 1200×946, browser-verified 2026-08-09)
  confirms the visual design below.
- **Visual design (live render + screenshot — match 1:1):** minimal,
  editorial, high-contrast creative-studio aesthetic. Palette: solid BLACK
  hero + white Poppins-900 headline + a single vivid INDIGO brand accent
  **`#3b4eda`** (rgb 59,78,218; 14 uses in style.css: active nav, sticky logo,
  dropdown border-top, service icons, blog band, footer logo, mobile-menu
  hover, post-link hover) + white sections + `#f8f9fa` light-gray bands +
  slate body text `#6c7b95` (Source Serif Pro, weight 300). Typography is the
  signature: body = **Source Serif Pro** (serif, 1rem, line-height 1.7,
  weight 300, color `#6c7b95`) while ALL headings h1–h5 = **Poppins** (weight
  900/700, color `#000`). No images in the hero (plain black), no buttons
  except the round play glyph. The portfolio mosaic mixing B&W and color
  photos over a black band is the most distinctive element.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`header.site-navbar.site-navbar-target`, `position:absolute`,
     top 0, `padding: 1rem`, z-index 1999, transparent): brand left
     (`div.site-logo` → `a.font-weight-bold` "Approach" — **uppercase Poppins,
     1rem, white**); right (`nav.site-navigation`, hidden ≤991px) links
     **Home (active), Portfolio, About, Services, Blog, Contact** — 15px
     horizontal margin each, `padding: 20px 0`, color `rgba(255,255,255,.7)`
     (hover `#fff`); the active link is WHITE (`.site-menu > li.active > a`),
     the active `li` carries `color:#3b4eda`. Mobile (≤991px): hamburger
     `span.icon-menu` in **indigo** (`text-primary`) + 300px white off-canvas
     panel sliding from the right (`.site-mobile-menu`, shadow
     `-10px 0 20px -10px rgba(0,0,0,.1)`; links `#212529`, hover/active
     `#3b4eda`; close = `icon-close2` 30px). **Sticky state** (`.sticky-wrapper`
     - `.is-sticky`): navbar background flips to WHITE with shadow
       `4px 0 20px -5px rgba(0,0,0,.2)`; logo turns `#3b4eda`; links turn `#000`
       (active `#3b4eda`).
  2. **Hero** (`div.site-section-cover`, **background `#000`** — solid black,
     `background-size: cover` but NO image inline in the source, so it renders
     as flat black; height `calc(100vh - 196px)`, `min-height: 677px` — mobile
     `calc(70vh - 196px)` / `min-height: 600px`): centered (`row
align-items-center text-center justify-content-center`, `col-lg-10`):
     `<h1 class="text-white mb-4">` **"Creativity is a wild mind and a
     disciplined eye."** (Poppins, **4rem/64px** — 2rem mobile, line-height
     1.3, weight 900, white); `<p class="lead">` lorem (18px,
     `rgba(255,255,255,.6)`); and a play link `a.btn-video_38929` (fancybox
     Vimeo lightbox `https://vimeo.com/191947042`) — a **50×50px white
     circle** (`border-radius: 50%`) with a small black play glyph (14px,
     `translate(-40%,-50%)`).
  3. **Portfolio mosaic** (`div.container-fluid.portfolio-wrap.bg-light.pt-0.site-section`
     — section padding overridden `pt-0`; `margin-top: -5rem` pulling it UP
     over the hero's bottom, `position: relative; z-index: 2`; a `:before`
     pseudo-element paints a **solid black strip** across the top 70% of the
     section, showing as a black band behind/around the photos): row 1 (`row
align-items-end mb-4`) = `col-md-3` + `col-md-6` + `col-md-3`; row 2
     (`row align-items-start`) = three `col-md-4`. Each cell is an
     `a.portfolio-item` link to `portfolio-single.html` with an `img.img-fluid`
     (sources: img_1.jpg, img_2.jpg, img_3.jpg, img_2.jpg again, hero_1.jpg,
     hero_3.jpg). `.portfolio-item` = `display:block; overflow:hidden; box-shadow:
0 4px 40px -5px rgba(0,0,0,.4)`; hover → image `scale(1.05)` + black
     overlay at opacity .2. The source mixes B&W and color photography; use
     seeded picsum photos in a mix of portrait/landscape crops.
  4. **Services** (`div.site-section`, white): 3 cells (`col-md-4`,
     `div.service-29191`): `span.wrap-icon.mb-4.d-block` containing a **64px
     (4rem) indigo `#3b4eda`** glyph (`icon-desktop_windows` /
     `icon-explore` / `icon-layers` — no circle, plain glyph) + `h3.mb-3`
     (20px, weight 900, black) + lorem `p`. Cards: **Interface Design**,
     **Product Design**, **Quality Results**.
  5. **Blog Updates** (`div.site-section.bg-primary` — rendered background
     **`#3b4eda`** rgb(59,78,218), verified via computed style): inner
     `div.container.mb-5` with `col-md-7`: `<h2 class="text-white
font-weight-bold">` **"Blog Updates"** (Poppins, 32px computed, bold,
     white) + `<p class="text-white lead">` lorem. Below, `div.container-fluid`
     > `div.owl-carousel.nonloop-block-13` — an Owl Carousel (auto-rotating
     > `loop`, **3 slides per view on desktop**) of **12** `div.media-29191`
     > cards (source markup repeats the same card): `a.d-block.mb-4` image
     > (img_1/2/3.jpg reused), `span.date.d-block` **"October 18, 2019"**
     > (white), `h3.mb-4 > a` **"Google saying pseudo-telephoto is more
     > important"** (26px, bold, white), and `div.d-flex.vcard-91123`:
     > `div.img.mr-3` **60px round avatar** (person_1.jpg) + `div.name` Poppins
     > 14px white — "by John Freeman" + "Thinker & Designer". Dots: `.owl-dots`
     > positioned `bottom: -3rem`, **10px white circles**, 4px margin, centered.
  6. **Client logos** (`div.site-section.bg-light`, `#f8f9fa`): 4 cells
     (`col-md-3`) of client logo images (client_google.png, client_invision.png,
     client_nike.png, client_microsoft.png — Google, InVision, Nike,
     Microsoft). No heading. Recreate as muted gray wordmarks (text) — never
     copy the logo images.
  7. **Footer** (`div.footer.site-section.bg-white` — footer class padding
     `4em 0` / `8em 0` ≥768px): row with left `col-md-3` → `div.site-logo-footer`
     link "Approach" (**Poppins, bold, UPPERCASE, `#3b4eda`**) and right
     `col-md-8.ml-auto` holding THREE `col-md-4` link columns
     (`ul.list-unstyled.links`, links `rgba(0,0,0,.5)` → hover black, `10px`
     bottom margin per li): col 1 = **Contact Us / hello@mydomain.com /
     +1 829 2293 382 / Support**; col 2 = **Home / Blog / Services / About
     Us**; col 3 = the SAME four links repeated (source duplicates them —
     keep the duplication).
  8. **Social + copyright band** (a separate `div.site-section` after the
     footer): `row.mb-4.text-center` with **five centered plain social glyphs**
     (`span.m-2.icon-facebook` / icon-twitter / icon-linkedin / icon-instagram
     / icon-skype — m-2 spacing, NO circles on this page), then `row.mt-5
justify-content-center` > `col-md-7.text-center` with the copyright line:
     "Copyright © <year> All rights reserved | This template is made with
     [heart] by Colorlib" → replace with **"© Canvas. All rights reserved."**
     (drop the Colorlib credit line; keep the layout).
- **JS behaviors (original, `js/main.js` + vendor):** jQuery Owl Carousel 2
  (`.nonloop-block-13` — auto-rotating blog carousel, dots below), sticky
  header via `jquery.sticky.js` (`.sticky-wrapper.is-sticky` white bar), AOS
  scroll animations, fancybox Vimeo lightbox on the hero play button,
  Bootstrap scrollspy (`data-spy="scroll"` on body) + off-canvas mobile menu
  toggle, Isotope/datepicker/typed loaded but unused on the home page (the
  `typed.js` config targets `.typed-words` which does NOT exist in the home
  DOM — the typed effect is inert; skip it). Recreate in React: a state-driven
  blog carousel (auto-advance, dots, prev/next, 3-per-view on desktop →
  1-per-view mobile), a scroll listener for the sticky white navbar, a
  client-side video-lightbox modal for the play button (or link the Vimeo
  URL), and optional light fade-up entrance animations.

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Fonts:** TWO families. Body = **"Source Serif Pro"** (`font-family:
"Source Serif Pro", serif`; 1rem, line-height 1.7, weight 300, color
  `#6c7b95`). Headings h1–h5 = **"Poppins"** (`h1,h2,h3,h4,h5 { color:#000;
font-family:"Poppins", sans-serif }`; h1 900, h3/others 900/700; navbar logo
  Poppins uppercase 1rem; vcard names Poppins 14px). Google Fonts `<link>` in
  `index.html`:
  `https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Source+Serif+Pro:wght@300;400&display=swap`.
- **Brand colors:**
  - `#3b4eda` — brand indigo (rgb 59,78,218; 14 uses): `.site-menu .active`
    li color, dropdown `border-top: 2px solid`, sticky-state logo + active
    link, `.service-29191 .wrap-icon span` (64px glyphs), `.bg-primary` blog
    band background, `.site-logo-footer a`, mobile-menu link hover/active,
    post-entry h2 hover.
  - `#000` — hero background, all headings, portfolio `:before` strip,
    `.btn-video_38929` glyph, `::selection` bg.
  - `#fff` — hero h1 + lead + play circle, navbar logo/links (top state),
    blog band text (h2, lead, date, card h3, vcard), owl dots, `bg-white`
    sections (services, footer).
  - `#6c7b95` — body text (Source Serif Pro).
  - `#f8f9fa` — `bg-light` bands (portfolio wrap, client logos).
  - rgba: nav links `rgba(255,255,255,.7)` (hover `#fff`), hero lead
    `rgba(255,255,255,.6)`, footer links `rgba(0,0,0,.5)` (hover black),
    portfolio shadow `rgba(0,0,0,.4)`, sticky shadow `rgba(0,0,0,.2)`, mobile
    panel shadow `rgba(0,0,0,.1)`, mobile menu links `#212529`, hover-bg
    `#ced4da`.
- **Radii:** 50% (play button 50px, blog avatars 60px, owl dots 10px);
  everything else square (sharp corners — no rounded buttons/cards).
- **Spacing/geometry:** `.site-section` padding `2.5em 0` (→ `5em 0` ≥768px);
  `.footer` padding `4em 0` (→ `8em 0` ≥768px); hero height
  `calc(100vh - 196px)` min 677px (mobile `calc(70vh - 196px)` min 600px);
  portfolio `margin-top: -5rem` overlap + black `:before` height 70%;
  navbar `padding: 1rem`, links `padding: 20px 0`, 15px side margins; hero h1
  4rem/1.3/900 (2rem mobile); lead 18px; service icon 64px, h3 20px/900; blog
  h2 32px bold, card h3 26px bold, date + vcard 14px; owl dots 10px,
  `bottom: -3rem`, 4px margin; footer logo uppercase bold; footer li margin
  10px; avatar 60px (`flex: 0 0 60px`).
- **Buttons:** NONE on the home page except the hero play circle (50px white
  circle, black 14px glyph) and the "View Gallery"-style links that live on
  OTHER template pages (not part of the home recreation). No pill/CTA buttons
  to replicate.
- **Responsive:** ≤991px — navbar hamburger (indigo `icon-menu`), off-canvas
  300px white panel (right, `.offcanvas-menu` translates in); hero h1 2rem;
  portfolio mosaic collapses to stacked full-width images; blog carousel
  shows 1 slide per view on small screens; footer columns stack.
- **Placeholder images (never copy ColorLib assets):** portfolio (6) →
  `picsum.photos/seed/canvas-p1/900/1200` (portrait), `canvas-p2/1200/800`
  (landscape), `canvas-p3/800/800`, `canvas-p4/900/600`, `canvas-p5/1200/900`,
  `canvas-p6/800/800` (mix portrait/landscape to echo the B&W/color mix —
  grayscale filter optional on some); blog thumbs (3 reused) →
  `canvas-b1/600/400`, `canvas-b2/600/400`, `canvas-b3/600/400`; blog avatar →
  `canvas-a/120/120`; hero = solid black (NO image — the source hero is plain
  black). Client logos → gray text wordmarks (Google, InVision, Nike,
  Microsoft) — no logo images.
- **Icon mapping (source → lucide-react, verified 2026-08-09):**
  icon-desktop_windows (Interface Design) → `Monitor` · icon-explore (Product
  Design) → `Compass` · icon-layers (Quality Results) → `Layers` · icon-play
  (hero) → `Play` · icon-menu (mobile toggle) → `Menu` · icon-close2 →
  `X` · icon-heart (copyright) → `Heart`. **BRAND ICONS WERE REMOVED FROM
  lucide-react** — `Facebook`/`Twitter`/`Linkedin`/`Instagram` are all
  `undefined` (verified in this repo's lucide-react), and `Skype` never
  existed; all five social glyphs (footer band) must be inline SVG brand
  paths (simple-icons) in gray, centered, no circles.

## Requirements

### Requirement: Navbar with sticky state

The system SHALL render a transparent absolute navbar over the black hero with
an uppercase brand, top-level links, and a white sticky state on scroll.

#### Scenario: Desktop navbar (top state)

- **GIVEN** the Canvas page is rendered on a desktop viewport
- **WHEN** the navbar is displayed at the top of the page
- **THEN** the navbar SHALL be transparent and absolutely positioned (padding
  1rem) with the brand "Canvas" in uppercase Poppins white on the left
- **AND** the links "Home" (active), "Portfolio", "About", "Services", "Blog",
  "Contact" SHALL be right-aligned, `rgba(255,255,255,.7)`, turning white on
  hover, with the active link white (15px side margins, 20px vertical padding)

#### Scenario: Sticky navbar on scroll

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navbar enters the sticky state
- **THEN** the navbar SHALL become a white bar with shadow `4px 0 20px -5px
rgba(0,0,0,.2)`, the brand turning indigo `#3b4eda`
- **AND** the links SHALL turn black with the active link indigo `#3b4eda`

#### Scenario: Mobile navbar

- **GIVEN** the Canvas page is rendered on a viewport ≤991px
- **WHEN** the navbar is displayed
- **THEN** an indigo hamburger icon SHALL be shown on the right
- **AND** tapping it SHALL slide in a 300px white off-canvas panel from the
  right listing the same links in `#212529` (hover/active indigo) with a close
  button

### Requirement: Black hero with play button

The system SHALL render the solid-black full-height hero with the display
headline, lead copy, and a round video-play button.

#### Scenario: Hero content

- **GIVEN** the Canvas page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL be a solid black band (`calc(100vh - 196px)` tall, min
  677px) with the centered headline "Creativity is a wild mind and a
  disciplined eye." in Poppins weight 900, 4rem (2rem on ≤991px), white
- **AND** a lead paragraph (18px, `rgba(255,255,255,.6)`) SHALL sit beneath
- **AND** a 50px white circle with a small black play glyph SHALL be centered
  below the lead

#### Scenario: Video button

- **GIVEN** the hero play button is displayed
- **WHEN** it is clicked
- **THEN** a video lightbox SHALL open (the source embeds
  https://vimeo.com/191947042 via fancybox; use a client-side modal or open
  the Vimeo URL)

### Requirement: Portfolio mosaic

The system SHALL render the asymmetric portfolio collage that overlaps the
hero's bottom edge over a black band.

#### Scenario: Mosaic layout

- **GIVEN** the Canvas page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL overlap the hero's bottom edge (`margin-top: -5rem`) on a
  `#f8f9fa` background with a solid black band covering the top 70% of the
  section
- **AND** six portfolio images SHALL be arranged in two rows — row 1:
  `col-md-3` / `col-md-6` / `col-md-3`; row 2: three `col-md-4` — each with
  shadow `0 4px 40px -5px rgba(0,0,0,.4)`, scaling to 1.05 with a 20% black
  overlay on hover
- **AND** the six images SHALL be a mix of portrait and landscape crops
  (seeded picsum; the source mixes B&W and color photography)

### Requirement: Services row

The system SHALL render the three services cards with large indigo icons on
white.

#### Scenario: Service cards

- **GIVEN** the Canvas page is rendered
- **WHEN** the services section is displayed
- **THEN** three cards SHALL be shown in a 3-up row on desktop (stacked on
  small screens), each with a 64px indigo `#3b4eda` icon, a 20px weight-900
  black heading, and a lorem paragraph
- **AND** the cards SHALL be "Interface Design" (Monitor), "Product Design"
  (Compass), and "Quality Results" (Layers)

### Requirement: Blog Updates band

The system SHALL render the indigo "Blog Updates" band with an auto-rotating
white-text post carousel.

#### Scenario: Band header and carousel

- **GIVEN** the Canvas page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL have a `#3b4eda` background with the heading
  "Blog Updates" (Poppins bold, white, 32px) and a white lead paragraph
- **AND** a carousel SHALL show post cards (3 per view on desktop, 1 on
  mobile), each with a thumbnail image, the date "October 18, 2019", a bold
  26px white title link, and an author row: a 60px round avatar plus
  "by John Freeman" / "Thinker & Designer" in Poppins 14px white
- **AND** white 10px round dots SHALL sit centered below the carousel
- **AND** the carousel SHALL auto-advance with working prev/next controls and
  wrapping (the source repeats the same card 12 times — vary the thumbnails
  and keep 8–12 distinct post titles)

#### Scenario: Carousel behavior

- **GIVEN** the blog carousel is displayed
- **WHEN** time passes, a dot is clicked, or an arrow is used
- **THEN** the visible page of posts SHALL change accordingly (auto-advance,
  dot jump, prev/next, wrapping)

### Requirement: Client logos row

The system SHALL render the light-gray client logos row with four wordmarks.

#### Scenario: Logos

- **GIVEN** the Canvas page is rendered
- **WHEN** the client section is displayed
- **THEN** four cells SHALL be shown in a 4-up row on desktop (stacked on
  small screens) on a `#f8f9fa` background
- **AND** the clients SHALL read Google, InVision, Nike, and Microsoft,
  rendered as muted gray wordmarks (the source uses logo images — never copy
  them)

### Requirement: White footer

The system SHALL render the white footer with an indigo brand mark, three link
columns, and a social + copyright band.

#### Scenario: Footer columns

- **GIVEN** the Canvas page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL be white with the brand "Canvas" (Poppins bold
  uppercase, indigo `#3b4eda`) on the left
- **AND** three link columns SHALL sit to the right (links
  `rgba(0,0,0,.5)`, black on hover, 10px spacing): column 1 = "Contact Us",
  "hello@mydomain.com", "+1 829 2293 382", "Support"; columns 2 and 3 = the
  same four links "Home", "Blog", "Services", "About Us" (the source
  duplicates them — keep the duplication)

#### Scenario: Social band and copyright

- **GIVEN** the footer is displayed
- **WHEN** the bottom band is rendered
- **THEN** five centered social glyphs (Facebook, Twitter, LinkedIn,
  Instagram, Skype — inline SVG, no circles) SHALL be shown with even spacing
- **AND** the centered copyright line SHALL read "© Canvas. All rights
  reserved." (drop the Colorlib credit line)

### Requirement: Responsive behavior

The system SHALL adapt the layout across breakpoints: the off-canvas mobile
menu, the shrinking hero headline, the stacked portfolio, and the collapsing
grids.

#### Scenario: Mobile layout (≤991px)

- **GIVEN** the Canvas page is rendered on a viewport ≤991px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL show the indigo hamburger with the off-canvas
  panel; the hero headline SHALL be 2rem; the portfolio images, services,
  client logos, and footer columns SHALL stack to one column; and the blog
  carousel SHALL show one card per view

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-canvas`
- [ ] `scripts/verify-app.sh canvas` passes (typecheck + lint + vitest 100% coverage + build)
- [ ] Sections in order (1:1 with source): transparent navbar (uppercase white brand, white links, active white; sticky = white bar, indigo brand/active) → solid-black hero (Poppins 900 4rem headline + lead + 50px white play circle) → portfolio mosaic (margin-top -5rem overlap, black 70% band, 3/6/3 + 4/4/4 rows) → services (3 cards, 64px indigo icons) → Blog Updates (`#3b4eda` band, white-text carousel, dots) → client logos (`#f8f9fa`, 4 wordmarks) → white footer (indigo brand + 3 link columns) → social band (5 centered glyphs) + copyright
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#3b4eda` (brand indigo: active nav, sticky logo, service icons, blog band, footer logo), `#000` (hero, headings), `#6c7b95` body, `#f8f9fa` bg-light, `#fff`
- [ ] Fonts via Google Fonts `<link>` in `index.html`: Poppins 400/700/900 (headings, logo, vcard) + Source Serif Pro 300/400 (body); title "Canvas — Creative Agency Template"
- [ ] Sticky navbar on scroll (white + shadow, indigo brand); blog carousel auto-advances with dots + arrows; mobile off-canvas menu; video lightbox on play click
- [ ] Placeholder images = seeded picsum (`canvas-p1..6`, `canvas-b1..3`, `canvas-a`); hero stays SOLID BLACK (no image); client logos = gray text wordmarks; icons from lucide-react (`Monitor`, `Compass`, `Layers`, `Play`, `Menu`, `X`, `Heart`) + inline-SVG brand glyphs for Facebook/Twitter/LinkedIn/Instagram/Skype — no copied assets
- [ ] Source quirks kept: the blog band repeats the same card 12× (give 8–12 distinct titles instead); footer columns 2 and 3 duplicate the same links; the typed.js `.typed-words` effect is inert on the home page — skip it
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done by implementer at ship time (mark ALL THREE "Approach" rows — lines 336 Bootstrap, 886 Business and 1959 Interior Design)

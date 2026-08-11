# Template: Lensa (Photography Studio / Portfolio)

## Purpose

Lensa is a single-page photography studio / portfolio website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Nissa" design (see TEMPLATES.md — listed in the Bootstrap
(216) category at line 465, with duplicate rows in Business (365) at line
1110 and Photography (49) at line 2458), built under a DIFFERENT name —
**Lensa** (a lens-themed word for the photography-studio design; single
lowercase word, no collision with `apps/`, `openspec/specs/`,
`docs/templates/` or TEMPLATES.md — verified 2026-08-11) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimalist split-screen photography studio page: a fixed
white left sidebar (huge letterspaced brand "NISSA / Photography Studio",
serif intro "My name is Michael Smith.", contact details, an outlined
"SEE MY PORTFOLIO" button) beside a horizontally scrolling full-height photo
slider of portfolio shots (each with a white caption box: title + category +
arrow link), a white top header bar with a hamburger nav-switch + social
icons, a slide-in black off-canvas menu (nav links + social icons), and a
fixed bottom-left copyright bar. Lensa recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

> NOTE (prep-stream 2026-08-11): the official preview
> `https://preview.colorlib.com/theme/nissa/` is LIVE — fetched HTTP 200
> (~45 KB HTML + `css/style.css` ~19.3 KB + Bootstrap + font-awesome +
> magnific-popup + owl.carousel, curl-verified) and analyzed for this prep.
> The index page is a one-page layout (the nav also links to
> about.html / blog.html / portfolio.html / contact.html / elements.html
> sub-pages — see Design reference for their structure; the recreation is a
> single-page landing, so those links become placeholder/anchor links). The
> TEMPLATES.md screenshot (`nissa-free-template.jpg`, 1200×975) was also
> viewed in a browser and matches the live render (split sidebar + two
> vertical hero photos with caption boxes).

## Design reference (replication findings)

- **Original:** ColorLib "Nissa" — free HTML5 photography studio template
  (source: https://colorlib.com/wp/template/nissa/). The recreation brands
  itself **Lensa** but keeps the same section structure, heading copy kinds,
  and photo-slide set.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/nissa/` (HTTP 200, ~45 KB HTML +
  `css/style.css` ~19.3 KB; assets under `img/` — hero shots `img/hero/1.jpg`
  - `img/hero/2.jpg`, arrow `img/arrow-right.png`). Page structure (1:1
    order):
  1. **Preloader (optional)** — `#preloder` fixed black fullscreen overlay
     with `.loader` spinner (keyframe animation cycling 4px borders
     `#f44336` / `#673ab7` — pre-hydration artifact; skip or replicate as a
     brief loading state).
  2. **Off-canvas menu** — `div.site-menu-warp` (position fixed, width
     614px, left -620px, bg `#242424`, z-index 9999; slides in via
     `.push-side` transform; full-width on ≤767px): `div.close-menu` "x"
     (30px white, cursor pointer) + `ul.site-menu` links — **Home**
     (`.active`) · About Me · Blog · Portfolio · Contact · Elements (30px
     white; hover/active 3px white underline 30px wide) + `div.menu-social`
     brand icon links (pinterest · facebook · twitter · dribbble · behance,
     18px white).
  3. **Header** — `header.header-section` (absolute, top 0, full width,
     bg `#fff`, padding 27px 45px, z-index 999): left `div.nav-switch`
     (hamburger bars icon, 28px `#4e4e4e`, opens the menu) + right
     `div.header-social` (same 5 brand icon links, 18px `#242424`, margin-
     right 30px; hidden on ≤479px).
  4. **Left sidebar** — `div.main-sidebar` (fixed, width 614px, z-index 99;
     relative + full-width below 992px) > `div.mb-warp` (padding
     151px 95px 100px 145px):
     - `a.site-logo` — `h2` **"Nissa"** (100px, weight 400, UPPERCASE,
       letter-spacing 18px, line-height 100px) + `p` **"Photography
       Studio"** (12px UPPERCASE, letter-spacing 12px, `#aaaaaa`).
     - `div.about-info` — `h2` **"My name is Michael Smith."** (48px/900,
       Playfair Display, line-height 1.1) + lorem paragraph (13px, #242424,
       line-height 2).
     - `ul.contact-info` — address **"1525 Boring Lane, Los Angeles, CA"**
       (with a position-marker icon before the list), phone
       **"+34 56672 9984 22"**, email **"contactme@myemail.com"** (14px,
       `#aaaaaa`, links `#242424`).
     - `a.site-btn` **"see my portfolio"** + arrow-right image.
  5. **Hero photo slider** — `div.page-section` > `div.hero-section` >
     `div.hero-scroll` > `div.hero-track` (horizontal owl-carousel track,
     overflow hidden, padding-bottom 50px) of 3 × `div.hs-item.set-bg`
     (height 750px, float left, margin-right 50px; bg image set via
     `data-setbg` — `img/hero/1.jpg`, `img/hero/2.jpg`, then `1.jpg` again
     for the loop):
     - Each hs-item > `div.hs-info` (absolute, left 0, bottom 0, width
       221px, white bg, padding 44px 0 10px): `h5` title + `p` category +
       arrow link (`img/arrow-right.png`).
     - Slide captions: **"Ice Cold Love" / "Nature Photography"** (the DOM
       has the source's typo "Photoagraphy"; the screenshot reads "Nature
       Photography" — use the screenshot spelling) · **"Bold Architecture" /
       "Cityscape Photography"** · third slide duplicates slide 1.
     - Desktop: horizontally scrollable strip (nicescroll); ≤767px: owl
       prev/next controls (30px circle, `#242424` bg, white glyphs, centered
       below the track).
  6. **Copyright bar** — `div.copyright` (fixed, bottom 0, left 0, width
     614px, height 80px, white bg, padding-left 145px): **"Copyright ©<year>
     All rights reserved | This template is made with ♥ by ColorLib"**
     (13px, `rgba(130,130,130,.29)`, heart `rgba(204,17,17,.29)`) — rephrase
     to Lensa ("made with ♥ by ColorLib" credit stays or is dropped per
     convention; see other shipped apps). Below 768px it becomes a static
     centered block.
- **Sub-pages (nav-linked; optional scope for the recreation):**
  - **about.html** — `about-section`: `.video-section` with a
    `.video-play-btn` (159×69px, white text, radius 27px,
    `rgba(255,255,255,.43)` bg over a video thumb) + `.milestones` row of 4
    `.milestone` counters (Playfair 72px/900 number + h5 + p): **25 Years Of
    experience · 16k Photograps taken · 59 Weddings/Year · 37k IG Followers**
    (source typos "Photograps"/"Weddings/Year" — paraphrase cleanly).
  - **portfolio.html** — `portfolio-section` of 5 `.portfolio-item` (3px
    gutters, mb 41px) each with a photo + `.pi-info` white caption box
    (same 221px box as the hero; items titled "Ice Cold Love" with a
    category line).
  - **blog.html** — `blog-posts` of `.blog-post-item`s: `.blog-thumb`
    (566px photo) + white `.post-date` block (Playfair 48px/900 day number +
    month) + overlapping white `.blog-content` (padding 55px 58px,
    margin-top -133px): h2 link + `.blog-metas` (author/date/comments
    separated by `|`) + excerpt; `.blog-comments` list with circular avatars
    (67px, 50%).
  - **contact.html** — `contact-section`: Google `.map` (grey `#ddd`
    placeholder) + `.contact-text` (h2 + lorem) + `.contact-form`
    (Name · E-mail · Subject inputs + Message textarea — 56px tall, 14px
    italic, 2px `#e1e1e1` border, mb 30px) + `a.site-btn` submit.
  - **elements.html** — style-guide page (accordion, tabs, circle progress,
    icon boxes, buttons) — not needed for the landing recreation.
- **Visual design (TEMPLATES.md screenshot `nissa-free-template.jpg`,
  1200×975, viewed in browser 2026-08-11):** minimalist split-screen
  portfolio. Left ~40%: white column with big widely-letterspaced "NISSA"
  and "PHOTOGRAPHY STUDIO" subtitle, a high-contrast serif headline "My name
  is Michael Smith.", light-grey body text, contact details, and a grey
  outlined "SEE MY PORTFOLIO" button with a right arrow. Right ~60%: two
  tall vertical photos side by side — a snowy mountain / dark-blue river
  landscape ("Ice Cold Love · Nature Photography") and white blocky
  architecture against a blue sky ("Bold Architecture · Cityscape
  Photography") — each with a small white caption box at its bottom-left,
  faint prev/next arrows below, thin header bar on top (hamburger left,
  social icons right), and a tiny copyright line bottom-left with a pink
  heart. Palette is essentially monochrome (white + black + greys) letting
  the photography supply the color.

## Design tokens

From `css/style.css` (verified 2026-08-11):

- **Brand colors:**
  - `#242424` (near-black ink) — PRIMARY: all headings + body text, button
    text, `.site-btn.sb-solid` background, `.site-menu-warp` background,
    header-social icon color, mobile hero-nav arrows, active tab/accordion
    backgrounds, email link color.
  - `#ffffff` (white) — page + sidebar + header + caption-box + copyright
    backgrounds, solid-button text, menu link text.
  - `#e1e1e1` (border gray) — `.site-btn` outline (2px), form input borders
    (2px), tab/accordion borders.
  - `#aaaaaa` (muted gray) — logo subtitle ("Photography Studio"), contact
    info text.
  - `#828282` (secondary gray) — milestone/body captions, blog meta
    separators; copyright text is `rgba(130,130,130,.29)`.
  - `#4e4e4e` — nav-switch hamburger icon color.
  - Loader spinner: `#f44336` / `#673ab7` keyframe borders (optional
    artifact — NOT brand colors).
- **Fonts:** headings accent = **"Playfair Display"** (serif, weights 400 +
  900 — used for the sidebar intro h2 48px/900, milestone h2 72px/900,
  circle-progress h2 72px/900, blog post-date h3 48px/900); everything else
  (including the giant logo wordmark and all body text) = **"Open Sans"**,
  sans-serif (default h1–h6 are Open Sans 700 `#242424`). Load both via
  Google Fonts `<link>` in `index.html` (source uses cf-fonts @font-face).
- **Type scale:** site-logo h2 100px/400/UPPERCASE/letter-spacing 18px;
  logo subtitle 12px UPPERCASE ls 12px; about-info h2 48px/900 Playfair
  lh 1.1; body p 13px lh 2; site-menu links 30px; h5 18px; default h1 70px,
  h2 36px, h3 30px, h4 24px, h6 16px (all 700 `#242424`).
- **Buttons:** `.site-btn` — UPPERCASE, 14px/700, min-width 167px, padding
  19px 35px, line-height 1, text-align center, transparent background,
  2px solid `#e1e1e1` border, text `#242424`, **radius 0** (sharp); hover
  keeps text color; optional trailing arrow icon (margin-left 15px).
  Variants: `.sb-solid` = `#242424` bg + white text; `.sb-dark` =
  `#242424` border.
- **Section backgrounds:** page = white throughout (header, sidebar, caption
  boxes, copyright bar); hero = full-bleed background photos (no overlay);
  off-canvas menu = `#242424`.
- **Radius family:** sharp/0 everywhere (buttons, caption boxes, images);
  circles only for: mobile hero prev/next arrows (30px), blog avatars (67px,
  50%). Blog video-play-btn uses radius 27px (pill).
- **Layout / spacing rhythm:** split layout — fixed left sidebar 614px wide
  (white) + right content area `padding-left: 614px`; sidebar inner padding
  151px 95px 100px 145px; header padding 27px 45px; logo margin-bottom 80px;
  about-info margin-bottom 80px; contact-info margin-bottom 65px; hero
  hs-item height 750px, margin-right 50px, caption box width 221px
  (padding 44px 0 10px); copyright bar 80px tall. Responsive: sidebar width
  450px (1200–1400px) → 350px (992–1199px) → static full-width stacked
  above the hero below 992px (site-logo h2 shrinks to 70px); menu full-width
  ≤767px; header-social hidden ≤479px.
- **Hero slider:** owl-carousel horizontal track of 3 slides (1, 2, 1 dup);
  desktop = horizontal scroll strip, mobile = prev/next circle arrows;
  each slide = 750px photo + white caption box (h5 title + p category +
  arrow link) bottom-left.
- **Icons:** font-awesome brand icons in header + menu socials
  (pinterest · facebook · twitter · dribbble · behance) — lucide-react
  REMOVED brand icons, use inline SVG brand paths per the
  colorlib-template-replication skill; arrow-right.png → lucide `ArrowRight`;
  position-marker before the address → lucide `MapPin`; copyright heart →
  lucide `Heart`; hamburger → lucide `Menu`.
- **Scroll effects (optional fidelity):** nicescroll horizontal scroll on
  the hero track + push-side slide-in menu (transform translateX(614px)).
  The slide-in menu behavior is REQUIRED (visible interaction); the custom
  scrollbar is optional.

## Requirements

### Requirement: Header bar with hamburger and social icons

The system SHALL render a white header bar across the top of the page with a
hamburger toggle on the left (opening the off-canvas menu) and five social
brand icon links (Pinterest, Facebook, Twitter, Dribbble, Behance) on the
right.

#### Scenario: Header content

- **GIVEN** the Lensa page is rendered
- **WHEN** the header is displayed
- **THEN** a white bar SHALL span the top of the page
- **AND** a hamburger icon SHALL appear on the left that opens the slide-in
  menu when clicked
- **AND** five social brand icon links SHALL appear on the right
- **AND** the social icons SHALL be hidden on very small screens (≤479px)

### Requirement: Slide-in off-canvas navigation menu

The system SHALL render a black (`#242424`) off-canvas menu that slides in
from the left when the hamburger is clicked, with a close "x" control, six
nav links (Home active, About Me, Blog, Portfolio, Contact, Elements) in
large white type with a short white underline on hover/active, and the five
social brand icon links at the bottom.

#### Scenario: Menu opens and closes

- **GIVEN** the Lensa page is rendered
- **WHEN** the hamburger toggle is clicked
- **THEN** the black off-canvas menu SHALL slide in from the left
- **AND** it SHALL show a close "x" control, the six nav links with Home
  active, and the social icon links
- **WHEN** the close control is clicked
- **THEN** the menu SHALL slide back out of view

#### Scenario: Menu links

- **GIVEN** the off-canvas menu is open
- **WHEN** the menu is inspected
- **THEN** links Home, About Me, Blog, Portfolio, Contact, and Elements
  SHALL be present in that order with Home active
- **AND** each link SHALL be large white type with an underline accent on
  hover/active

### Requirement: Fixed sidebar intro (logo, about, contact, CTA)

The system SHALL render a fixed white left sidebar (stacking above the hero
on small screens) containing the brand wordmark "Lensa" with the subtitle
"Photography Studio", a serif headline "My name is Michael Smith." with a
supporting paragraph, the contact details (address, phone, email), and an
outlined uppercase "see my portfolio" button with a right arrow.

#### Scenario: Sidebar content

- **GIVEN** the Lensa page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the brand wordmark "Lensa" SHALL be shown in large uppercase
  letters with wide letter spacing, with "Photography Studio" in a small
  widely-spaced uppercase subtitle below it
- **AND** the headline SHALL read "My name is Michael Smith." in a serif
  display face
- **AND** a short paragraph SHALL follow the headline
- **AND** the contact details SHALL show an address, a phone number, and an
  email address, each with a location icon on the address line
- **AND** an outlined uppercase button SHALL read "see my portfolio" with a
  right arrow

#### Scenario: Responsive stacking

- **GIVEN** the Lensa page is rendered on a small screen (below 992px)
- **WHEN** the layout is inspected
- **THEN** the sidebar SHALL become a static full-width block stacked above
  the hero instead of a fixed left column

### Requirement: Hero photo slider

The system SHALL render a horizontally scrolling hero track of full-height
(750px) photo slides, each showing a background photo with a white caption
box at its bottom-left containing a title, a category line, and an arrow
link. The track SHALL contain at least the two distinct slides "Ice Cold
Love / Nature Photography" and "Bold Architecture / Cityscape Photography"
and SHALL expose prev/next controls on small screens.

#### Scenario: Hero slides

- **GIVEN** the hero section is rendered
- **WHEN** the slider is displayed
- **THEN** photo slides SHALL fill the hero track at 750px height
- **AND** each slide SHALL show a white caption box at its bottom-left with
  a title, a category, and an arrow link
- **AND** the first slide SHALL be titled "Ice Cold Love" with the category
  "Nature Photography"
- **AND** the second slide SHALL be titled "Bold Architecture" with the
  category "Cityscape Photography"

#### Scenario: Mobile navigation

- **GIVEN** the hero slider is rendered on a small screen (≤767px)
- **WHEN** the hero is inspected
- **THEN** prev/next circular arrow controls SHALL be shown below the track
- **AND** clicking next SHALL advance to the following slide

### Requirement: Copyright bar

The system SHALL render a small fixed copyright line at the bottom-left
(under the sidebar), reading "Copyright ©<current year> All rights reserved
| made with ♥" plus the Lensa attribution, in a faint gray; on small screens
it SHALL become a static centered block.

#### Scenario: Copyright content

- **GIVEN** the Lensa page is rendered
- **WHEN** the bottom of the sidebar column is inspected
- **THEN** a copyright line SHALL show the current year and the words "All
  rights reserved"
- **AND** the line SHALL include a heart icon
- **AND** on screens below 768px the copyright SHALL be a centered static
  block instead of fixed

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens section:
`#242424` ink as the theme brand color, Playfair Display + Open Sans via
Google Fonts `<link>` in `index.html`, sharp 2px-outlined uppercase buttons
(solid `#242424` variant for the primary), white sidebar/caption boxes on a
white page, `#242424` off-canvas menu, the split sidebar + scrolling-hero
layout, and the exact section order (preloader (optional) → off-canvas menu
→ header → sidebar intro → hero slider → copyright bar).

#### Scenario: Token application

- **GIVEN** the Lensa app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand color `#242424` SHALL be defined as a theme token and
  used by headings, button text, the solid button background, and the
  off-canvas menu background
- **AND** Playfair Display and Open Sans SHALL be loaded via Google Fonts
  links in `index.html`
- **AND** buttons SHALL be sharp-cornered uppercase outlines (2px `#e1e1e1`
  border) with a solid `#242424` variant
- **AND** the section order SHALL be: off-canvas menu → header → sidebar
  intro → hero slider → copyright bar

## Verification checklist

- [ ] `openspec/specs/template-lensa/spec.md` — Gherkin scenarios above map
      1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (off-canvas menu → header →
      sidebar intro → hero slider → copyright bar); tokens `#242424` /
      `#e1e1e1` / `#aaaaaa` / `#828282`; Playfair Display + Open Sans; sharp
      outlined uppercase buttons; white sidebar + caption boxes; `#242424`
      off-canvas menu; 614px sidebar → stacked below 992px.
- [ ] Placeholder images: `https://picsum.photos/seed/lensa-<n>/<w>/<h>`
      (deterministic per template). Subject-critical hero slides need
      fitting scenes (e.g. snow/peaks for "Ice Cold Love", white
      architecture for "Bold Architecture") — screen seeds per the
      seed-screening method before committing.
- [ ] Icons: lucide-react (Menu, ArrowRight, MapPin, Heart); social brand
      icons (Pinterest/Facebook/Twitter/Dribbble/Behance) as inline SVG
      paths (lucide removed brand icons).
- [ ] Hero slider: one Carousel component (or horizontal-scroll track) with
      the two distinct slides + mobile prev/next; autoplay optional but must
      be testable (fake timers).
- [ ] Off-canvas menu: slide-in/slide-out state (test via click + state
      toggle; document the approach). Nav links render once (single menu —
      no desktop/mobile duplication in this template; hamburger toggles the
      same menu).
- [ ] Copyright year: render dynamically (`new Date().getFullYear()`).
- [ ] 100% coverage lines/functions/branches/statements; `scripts/
verify-app.sh lensa` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Nissa), preview URL
      (`https://preview.colorlib.com/theme/nissa/`), design tokens used,
      what differs (renames, placeholder images, paraphrased copy, fixed
      source typos like "Photoagraphy" → "Nature Photography").

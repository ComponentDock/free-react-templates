# Template: Furnly (Furniture / Business — Bootstrap)

## Purpose

Furnly is a single-page furniture/interior-business website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tangre" furniture website template design (see TEMPLATES.md,
Bootstrap category, line 508 — duplicate row at line 1194 under Business,
same template, one app only), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Tangre" — free furniture/interior HTML template
  (page `<title>` "Tangre Furniture"; source:
  https://colorlib.com/wp/template/tangre/). Single page: top utility bar
  (phone + social icons + "Get free Quote"), main nav (logo + home /
  portfolio / about / blog / pages / contact), full-screen interior-photo
  hero ("Creativity Beyond Life" + "hire us now!"), a "Latest News from all
  categories" 3-card section, a dark "Our Offer" section (2×2 circular
  progress rings with counters + "We can be your digital Problems Solution
  Partner" + two CTAs), a filterable "Our Recent Completed Projects" 6-card
  grid with gradient titles, a blue-overlay testimonial carousel, a 4-card
  "Latest From Our Blog" section, and a dark footer (Top Products links,
  Newsletter form, Instagram feed, copyright + socials).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/tangre/` (fetched `/tmp/tangre.html`,
  30,383 bytes) plus stylesheet `css/main.css` (`/tmp/tangre.css`, 67,761
  bytes) and the TEMPLATES.md screenshot (`tangre-free-template.jpg`,
  1200×946 AVIF, viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** clean, modern, minimalist
  flat-design creative-agency aesthetic with a light-blue `#3face4` brand
  accent. Screenshot shows: thin white utility bar (phone left, social icons
  - black "GET FREE QUOTE" right), white main header with "Tangre" logo
    (recreate as "Furnly" wordmark) + uppercase nav, full-width hero photo of a
    light-cyan wallpapered interior (wooden cabinet, white picture frame,
    tripod floor lamp) with big white "Creativity Beyond Life" headline and a
    bright blue "Hire Us Now!" button; below, white sections with light
    `font-weight: 100` centered grey headings ("Latest News from all
    categories"). Source copy is placeholder/Lorem — paraphrase freely, keep
    the same content kinds (headline + CTA, card title + blurb, counter
    labels, quote + name + role, blog title + date + likes/comments).

## Design tokens (from `css/main.css` of the live preview)

- **Brand blue:** `#3face4` — `.header-btn` bg, `.nav-menu` hover/active,
  `.header-top-left a i`, `.header-top-right a:hover i`, `.progressBar-circle`
  stroke, `.progressBar-percentage` center pill bg, `.footer-nav li a:hover`,
  `.footer-social a:hover` bg, `.footer-text a`, `.single-news:hover .card-title
a`, `.single-blog:hover h4 a`, `.single-testimonial:hover h4`,
  `.single-footer-widget .primary-btn` bg, `::selection` bg. Overlay tint:
  `rgba(63, 172, 228, 0.68)` (`.testimonial-area:before`, `.projects_item:before`).
- **Body text:** `#777777` — paragraphs, `.footer-nav li a`, footer input
  color/placeholder. Headings/nav: `#222` / `#222222` (Poppins, default
  `font-weight: 200`; `.main-title h1` weight 100). `.single-testimonial h4`
  weight 200. Footer social icons `#cccccc` on `#111111` squares.
- **Backgrounds:** page white; `.our-offer-area` + `.footer-area` `#222222`
  (dark); `.testimonial-area` cover photo + `rgba(63,172,228,0.68)` overlay;
  `.single-testimonial` card white `border: 1px solid #eeeeee`, `padding:
25px 30px`, hover shadow `-10px 10px 20px rgba(221,221,221,0.62)`; news
  card hover `box-shadow: 0px 12px 32px 0px rgba(26,26,26,0.12)`; nav
  dropdown white `box-shadow: 0px 6px 16px rgba(127,137,161,0.25)`.
- **Fonts:** `"Poppins", sans-serif` everywhere (body + headings). Load via
  Google Fonts `<link>` in `index.html`.
- **Buttons (`.primary-btn`):** `line-height: 42px`, `padding: 0 30px`,
  `border-radius: 5px`, border none, white text, weight 500, 0.3s transition.
  Variants: `.header-btn` bg `#3face4` (hover: transparent bg + 1px white
  border); `.offer-btn` 1px white border (hover: white bg + `#222222` text);
  `.quote-btn` white bg + `#222222` text + 1px white border. Footer
  `.single-footer-widget .primary-btn` (Subscribe): bg `#3face4`,
  `border-radius: 23px` (pill); footer email input white pill
  `border-radius: 20px`, `line-height: 38px`, padding-left 20px.
- **Header:** `.header-top` 60px, 12px text; left: phone link (13px uppercase
  500 `#222`, phone icon `#3face4`) inside `border-right: 1px solid #cccccc`;
  right: social icon links (icons `#cccccc`, hover `#3face4`, margin-right
  10px) + "Get free Quote" link (13px uppercase 500 `#222`); each `ul` has
  `border-right: 1px solid #cccccc`, `padding: 0 15px`. `<hr>` separator
  `rgba(204,204,204,0.54)`. `.main-menu` 100px tall. Nav (`.nav-menu a`):
  12px uppercase 500 `#222222`, `padding: 38.5px 8px`, hover/`.menu-active`
  `#3face4`; `li` margin-left 20px. Dropdowns (`.nav-menu ul`): white,
  padding 10px, shadow, `li` min-width 180px, links 12px `#333` (hover
  `#3face4`), shown on hover. On scroll (`#header.header-scrolled`) the top
  bar + `<hr>` hide.
- **Hero (`.home-banner-area`, `id="home"`):** `background: url(...) no-repeat
center / cover`; `.fullscreen` height 740px (600px tablet, 400px mobile);
  `.banner-content` col-lg-9: h1 "Creativity Beyond Life" (white, 72px,
  weight 100, `line-height: 77px`, 3 lines via `<br>`, margin 20px 0) + a
  `.primary-btn.header-btn` "hire us now!" (mt-10).
- **Section titles (`.main-title`):** `margin-bottom: 80px`; `.main-title h1`
  `font-weight: 100`, `line-height: 29px`, margin-bottom 20px; `.main-title p`
  `max-width: 630px`, 16px/26px, margin auto (text-center sections) or left.
  `.section-gap` padding `120px 0`.
- **News (`.latest-news-area`):** 3 `.single-news.card` (col-lg-4 col-md-6,
  mb-30): `card-top-img` full-width, `.card-body` `border: 1px solid
rgba(0,0,0,0.125)`, `padding: 40px 28px`; `.card-title` 20px weight 200
  (mb 16px), link `#222`; hover: card shadow + border transparent + title
  `#3face4`.
- **Offer (`.our-offer-area`, bg `#222`):** left col-lg-6: 2×2 grid of
  `.single-circle` (text-center): `.single-item` 150px box → SVG ring
  (`.progressBar-contentCircle` 170×170, track `.progressBar-background`
  white 4px round, `.progressBar-circle` stroke `#3face4` 4px round; source
  `data-progress="75"`); center `.progressBar-percentage` pill: 100px circle
  bg `#3face4`, white 24px counter text, `padding: 40px 25px`; h4 label
  below (white, 20px, weight 100, mt 35px). Counters: "1.5K Happy Clients",
  "10 Years of Experience", "250 Professionals", "369 On Going Job". Right
  col-lg-5 (offset-lg-1): `.main-title.text-left`: h1 "We can be your digital
  Problems Solution Partner" + paragraph + `.offer-btn` "What we Offer" +
  `.quote-btn` "Get a free Quote" (mr-10).
- **Projects (`.recent-completed-project`):** `.filters.project-filter` ul
  (text-center, mb 30px), `li` inline-block mr 30px cursor pointer (active =
  All Categories). `.projects_inner` row, 6 `.col-lg-4.col-sm-6` cells each
  with filter classes (`web all`, `brand all creative`, `brand`, `img-man
all`, `brand work img-man all`, `brand`): `.projects_item` (relative,
  `border-radius: 5px`, overflow hidden) image full-width + `:before` blue
  overlay `rgba(63,172,228,0.68)` opacity 0 → 1 on hover + `.icon`
  (absolute center, `icon.png` — recreate with a lucide plus/expand icon)
  `opacity: 0` → 1 on hover; below `.projects_text` (text-center, mt 15px):
  h4 link with gradient text `linear-gradient(to right, #8490ff 0%, #62bdfc
70%)` background-clip:text + p "Client Project" (14px, mb 0). Titles: 3D
  Helmet Design, 2D Vinyl Design, Creative Poster Design, Embosed Logo
  Design, 3D Disposable Bottle, 3D Logo Design. Cells are lightgallery
  anchors (click opens image — implement a simple accessible lightbox; note
  in PR).
- **Testimonial (`.testimonial-area`):** cover bg photo + `:before` blue
  overlay; `.active-testimonial-carusel` (owl carousel) of 4 `.single-testimonial`
  slides (2 unique people repeated): white card `padding: 25px 30px`,
  `margin: 15px`, `border: 1px solid #eeeeee`, `d-flex flex-row`: `.thumb`
  circular portrait (mr 30px) + `.desc`: quote paragraph, h4 name (weight
  200, hover `#3face4`), p "CEO at Google" (mb-0). Names: "Mark Alviro
  Wiens", "Lina Harrington".
- **Blog (`.latest-blog-area`):** 4 `.single-blog` (col-lg-3 col-md-6): `.thumb`
  image (overflow hidden), `.date` pill (bg `#000`, white text, weight 100,
  `padding: 2px 15px`, width 115px, text-center, mt 20px) "10 Jan 2018", h4
  link (weight 100, mb 12px, hover `#3face4`), excerpt p, `.meta-bottom`
  (d-flex justify-content-between): "15 Likes" (heart icon) + "02 Comments"
  (bubble icon) — use lucide Heart/MessageCircle.
- **Footer (`.footer-area`, bg `#222222`, `.section-gap`):** 3 columns:
  col-lg-3 `.single-footer-widget` "Top Products" (h6 white 18px weight 200
  mb 25px; `.footer-nav` links `#777777` mt 8px, hover `#3face4`: Managed
  Website, Manage Reputation, Power Tools, Marketing Service); col-lg-6
  `.newsletter` "Newsletter" + p "You can trust us. we only send promo
  offers, not a single spam." + email input (white pill radius 20px,
  placeholder "Your Email Address") + Subscribe `.primary-btn` pill radius
  23px `#3face4` with arrow icon (no backend — validate + success state);
  col-lg-3 `.mail-chimp` "Instragram Feed" + `.instafeed` 8-square grid
  (width 25% cells, 5px margins). `.footer-bottom` (pt 80px,
  justify-between): `.footer-text` copyright "Copyright © <year> All rights
  reserved | This template is made with ♥ by Component Dock" — "Component
  Dock" MUST link https://www.componentdock.com/ (replacing the source's
  Colorlib credit; heart icon lucide) + `.footer-social` 4 square icon links
  (bg `#111111`, 45px, white icons `#cccccc`, hover bg `#3face4`).

## Requirements

### Requirement: Header and navigation

The system SHALL render a two-part header: a 60px top utility bar (left: a
phone link "012-6532-568-9746" with a brand-colored phone icon; right: four
social icon links (Facebook, Twitter, Dribbble, Behance — lucide) and a "Get
free Quote" link, all separated by 1px `#cccccc` right borders) separated by
a thin `<hr>`, and a 100px main menu with the "Furnly" wordmark logo on the
left and a right-aligned uppercase nav (12px, 500, `#222222`): home,
portfolio, about, blog (dropdown: Blog Home, Blog Single), pages (dropdown:
Portfolio Details, Elements), contact. Nav links SHALL turn `#3face4` on
hover/active; dropdowns SHALL be white panels (min-width 180px, shadow, 12px
`#333` links, hover `#3face4`) shown on hover. On scroll the top bar and
separator SHALL hide. On mobile a hamburger SHALL open a responsive menu
with the same links.

#### Scenario: Utility bar

- **GIVEN** the page is rendered
- **WHEN** the top of the header is inspected
- **THEN** it shows the phone number with a phone icon, four social icons,
  and a "Get free Quote" link

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the main menu is inspected
- **THEN** it shows the brand logo and the nav links home / portfolio /
  about / blog / pages / contact

#### Scenario: Nav hover state

- **GIVEN** the main menu is rendered
- **WHEN** a nav link is hovered (or is the active page)
- **THEN** its text turns brand blue `#3face4`

#### Scenario: Dropdowns

- **GIVEN** a nav item with children (blog, pages)
- **WHEN** it is hovered
- **THEN** a white dropdown panel with its sub-links is shown

#### Scenario: Header scroll behavior

- **GIVEN** the header is rendered
- **WHEN** the page is scrolled down
- **THEN** the top utility bar and its separator are hidden, keeping the
  main menu visible

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a responsive menu with the nav links is shown and can be closed

### Requirement: Hero banner

The system SHALL render a full-screen (740px) hero with a cover
furniture-interior photo background and a left-aligned `banner-content`:
a three-line headline "Creativity Beyond Life" (white, 72px, weight 100) and
a "hire us now!" primary button (bg `#3face4`, white text, 5px radius; hover
becomes transparent with a white border). On tablet/mobile the hero SHALL
shrink (600px / 400px) and the headline SHALL scale down responsively.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline "Creativity Beyond Life" and a "hire us
  now!" button

#### Scenario: Hero button hover

- **GIVEN** the hero button is rendered
- **WHEN** it is hovered
- **THEN** it switches to a transparent background with a white border

### Requirement: Latest news cards

The system SHALL render a "Latest News from all categories" section (centered
title + subtitle) with three equal-width cards (image on top, body with 1px
`rgba(0,0,0,0.125)` border and 40px 28px padding): titles "Addiction Whit
Gambling", "Headset No Longer Wired", "Life Advice Looking At Window" (20px,
weight 200) with short paragraphs. On hover each card SHALL raise with a
soft shadow (`0px 12px 32px rgba(26,26,26,0.12)`) and its title SHALL turn
brand blue.

#### Scenario: News cards render

- **GIVEN** the news section is rendered
- **WHEN** it is inspected
- **THEN** it shows the section title and three cards, each with an image, a
  title, and a paragraph

#### Scenario: News card hover

- **GIVEN** a news card is rendered
- **WHEN** it is hovered
- **THEN** the card shows a drop shadow and its title turns brand blue

### Requirement: Our Offer — counters and CTA

The system SHALL render a dark section (bg `#222222`) split into two halves:
left, a 2×2 grid of circular progress rings (SVG ring with white track and
`#3face4` stroke, center pill with a white 24px counter value, label below in
white 20px weight 100) showing "1.5K Happy Clients", "10 Years of
Experience", "250 Professionals", "369 On Going Job"; right, a left-aligned
title "We can be your digital Problems Solution Partner" with a paragraph and
two buttons: outline "What we Offer" (white border, hover inverts) and solid
white "Get a free Quote" (dark text).

#### Scenario: Counter rings

- **GIVEN** the offer section is rendered
- **WHEN** the left half is inspected
- **THEN** it shows four circular rings with the values and labels 1.5K
  Happy Clients / 10 Years of Experience / 250 Professionals / 369 On Going
  Job

#### Scenario: Offer CTA buttons

- **GIVEN** the offer section is rendered
- **WHEN** the right half is inspected
- **THEN** it shows the "We can be your digital Problems Solution Partner"
  heading, a paragraph, and the What we Offer / Get a free Quote buttons

### Requirement: Recent completed projects

The system SHALL render an "Our Recent Completed Projects" section with a
centered title, a filter bar (All Categories, Branding, Image Manipulation,
Creative Work, Web Design, Print Material), and a 6-cell responsive grid
(col-lg-4 col-sm-6). Each cell SHALL show a rounded image (5px radius) with a
brand-blue overlay (`rgba(63,172,228,0.68)`) and a centered plus/expand icon
that fade in on hover, plus a title below with gradient text (`linear-gradient
(to right, #8490ff, #62bdfc)`) and a "Client Project" caption. Cells SHALL be
filterable by category and open a simple accessible lightbox on click.
Titles: 3D Helmet Design, 2D Vinyl Design, Creative Poster Design, Embosed
Logo Design, 3D Disposable Bottle, 3D Logo Design.

#### Scenario: Project grid

- **GIVEN** the projects section is rendered
- **WHEN** it is inspected
- **THEN** it shows the filter tabs and six project cells, each with an
  image, a gradient title, and a "Client Project" caption

#### Scenario: Project hover overlay

- **GIVEN** a project cell is rendered
- **WHEN** it is hovered
- **THEN** a brand-blue overlay and a centered icon fade in over the image

#### Scenario: Project filtering

- **GIVEN** the filter bar is rendered
- **WHEN** a category tab is activated
- **THEN** only the cells tagged with that category remain visible (and all
  are shown for All Categories)

#### Scenario: Project lightbox

- **GIVEN** a project cell is rendered
- **WHEN** it is activated
- **THEN** an accessible lightbox shows the enlarged image and can be
  dismissed

### Requirement: Testimonial carousel

The system SHALL render a testimonial section with a cover photo background
and a `rgba(63,172,228,0.68)` overlay, containing a carousel of white cards
(padding 25px 30px, 1px `#eeeeee` border): each card SHALL show a circular
portrait, a quote paragraph, the person's name (weight 200, hover brand
blue), and their role ("CEO at Google"). The carousel SHALL cycle through
the two unique people ("Mark Alviro Wiens", "Lina Harrington") with visible
navigation (arrows or dots).

#### Scenario: Testimonial cards

- **GIVEN** the testimonial section is rendered
- **WHEN** it is inspected
- **THEN** it shows white cards over the blue-tinted background, each with a
  portrait, quote, name, and role

#### Scenario: Carousel navigation

- **GIVEN** the carousel is rendered
- **WHEN** navigation controls are used
- **THEN** the visible testimonial changes to the other person

### Requirement: Latest blog

The system SHALL render a "Latest From Our Blog" section with four equal
cards (col-lg-3 col-md-6): each with a photo, a black date pill ("10 Jan
2018", 115px wide, white text), a title link (weight 100, hover brand blue:
"Cooking Perfect Fried Rice in minutes", "Secret of making Heart Shaped
eggs", "How to check steak if it is tender or not", "Addiction When Gambling
Becomes A Problem"), an excerpt, and a meta row with "15 Likes" (heart icon)
and "02 Comments" (bubble icon).

#### Scenario: Blog cards render

- **GIVEN** the blog section is rendered
- **WHEN** it is inspected
- **THEN** it shows the section title and four cards, each with a photo, a
  black date pill, a title, an excerpt, and a likes/comments meta row

### Requirement: Footer

The system SHALL render a dark footer (bg `#222222`) with three columns:
"Top Products" links (Managed Website, Manage Reputation, Power Tools,
Marketing Service — `#777777`, hover `#3face4`), a "Newsletter" column (text
"You can trust us. we only send promo offers, not a single spam.", a white
pill email input, and a brand-blue pill "Subscribe" button with an arrow
icon; submitting a valid email SHALL show a success state, invalid input a
validation message — no backend), and an "Instragram Feed" 8-image square
grid. The footer bottom SHALL contain a copyright line "Copyright © <year>
All rights reserved | This template is made with ♥ by Component Dock" where
"Component Dock" links https://www.componentdock.com/ (replacing the
source's Colorlib credit), plus four square social icon links (bg `#111111`,
hover `#3face4`).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the Top Products links, the Newsletter form, and the
  Instagram feed grid

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is rendered
- **WHEN** Subscribe is activated with an invalid or empty email
- **THEN** a validation message is shown and no success state is displayed

#### Scenario: Newsletter success

- **GIVEN** the newsletter form is rendered
- **WHEN** a valid email is provided and Subscribe is activated
- **THEN** a success confirmation is shown

#### Scenario: Footer copyright

- **GIVEN** the footer bottom is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and the four social icon links

## Verification checklist

- [ ] `openspec/specs/template-furnly/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/furnly`, package `@free-react-templates/furnly`, no
      ColorLib references in app code (grep for colorlib/Tangre in apps/furnly)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh furnly`
- [ ] Section order matches the source: header → hero → latest news → our
      offer (counters) → recent projects → testimonial → latest blog → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #3face4`,
      `--color-body: #777777`, `--color-ink: #222222`, `--color-light:
    #f9f9ff`, `--color-dark: #111111`; Poppins Google Fonts link in
      `index.html`
- [ ] Header: 60px utility bar (phone + socials + Get free Quote, 1px
      `#cccccc` separators) + `<hr>` + 100px main menu (uppercase 12px nav,
      hover `#3face4`, blog/pages dropdowns, top bar hides on scroll,
      mobile hamburger)
- [ ] Hero: 740px fullscreen cover photo, "Creativity Beyond Life" 72px
      weight-100 white headline + `#3face4` "hire us now!" button (hover
      transparent + white border); 600px/400px on tablet/mobile
- [ ] Latest news: 3 cards (image + bordered body), hover shadow + title
      `#3face4`
- [ ] Our offer: dark `#222` section, 2×2 SVG progress rings (white track,
      `#3face4` stroke, `#3face4` center pill with 24px value) + labels
      1.5K/10/250/369, right half heading + What we Offer / Get a free Quote
      buttons
- [ ] Projects: filter tabs + 6 cells (rounded images, hover blue overlay +
      icon, gradient titles `#8490ff → #62bdfc`, "Client Project" captions),
      filtering + lightbox
- [ ] Testimonial: cover bg + `rgba(63,172,228,0.68)` overlay, white cards
      (portrait, quote, name, role), carousel navigation
- [ ] Blog: 4 cards, black date pill "10 Jan 2018", weight-100 titles,
      meta row with 15 Likes / 02 Comments icons
- [ ] Footer: `#222222`, Top Products links + newsletter pill form with
      validation/success + 8-image instagram grid; bottom copyright with
      Component Dock link + 4 social squares
- [ ] Placeholder images via `https://picsum.photos/seed/furnly-<n>/<w>/<h>`;
      icons from `lucide-react`
- [ ] PR description: source template, preview URL, design tokens, diffs
      (name, placeholder images, carousel implementation, lightbox choice,
      newsletter no backend + validation)

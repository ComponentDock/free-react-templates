# Template: Serial (Magazine/Blog Template)

## Purpose

Serial is a magazine/news blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Magdesign" website template design (source:
https://colorlib.com/wp/template/magdesign/), built under a DIFFERENT name
(Serial — a serial is a publication issued in successive installments,
matching the source's magazine/news theme) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Magdesign" — clean editorial magazine/news blog
  template: white header with search + centered logo + social icons +
  dark-mode toggle, "Trending" hero slider of split featured posts, a
  3-column latest-posts grid, a "Most Popular Posts" slider, two category
  columns (Sports / Business), a light newsletter band, and a minimal
  centered footer. TEMPLATES.md has THREE copies of this item (lines 271,
  603, and 2199 — duplicate rows: line 271 in the "Blog (60)" section,
  line 603 in the "Bootstrap 5 (89)" section, line 2199 in the
  "Magazine (34)" section); ONE recreation (Serial) covers all three — the
  implementer must mark ALL THREE rows `[x]`.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/magdesign/`
  (HTTP 200, 40,729 bytes; title "MagDesign Magazine"). Master stylesheet
  `css/style.min.css` (244 KB, fully extracted for tokens; Bootstrap 5 CSS
  variables). Fonts: Poppins 400/700 via Google Fonts. Libs: bootstrap 5
  (CSS vars + grid), tiny-slider (tns) for the two carousels, glightbox,
  aos. Cross-checked against the TEMPLATES.md screenshot
  (`magdesign-free-template.jpg`, 1200×946, viewed in browser — see visual
  design below). The demo brands itself "MagDesign"; the recreation uses
  the NEW name **Serial**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, spacious
  editorial magazine on white. Header is a 3-column row: search input with
  magnifier left, centered UPPERCASE bold logo, and social icons (twitter,
  facebook, instagram) + dark-mode toggle (moon) + burger right; a thin
  border-bottom separates it from the nav row (Home, Categories dropdown —
  Travel/Food/Technology/Business — About, Contact). Below: centered
  heading "Trending" and a hero carousel of 4 split featured posts (large
  thumbnail left, content right: uppercase-ish category meta + date,
  big bold headline, excerpt, circular author avatar + name). Then a
  3-column grid of 6 vertical post cards (image top, meta, headline,
  author), then "Most Popular Posts" carousel (6 vertical cards, arrow
  controls bottom-right), then two 6-col category sections "Sports" and
  "Business" each listing 3 horizontal small posts (thumb left), then a
  light-gray newsletter band ("Subscribe to newsletter" + email input +
  orange "Subscribe" button), then a minimal footer (small gray centered
  copyright + social icons + credit + Terms/Privacy links). Accent color is
  orange **#f79918** on links, primary buttons, active slider dots, and
  cta hover; secondary dark teal **#10495c**; body text near-black
  #212529. Poppins (400/700) throughout. Dark mode is built in via a
  `[data-bs-theme=dark]` toggle (body #212529, text #dee2e6, links #fac274).
- **Section order (1:1, from live demo DOM):**
  1. `nav.site-nav` (white; border-bottom 1px solid rgba(0,0,0,.1);
     padding 20px 0) — `div.container` > `div.site-navigation` > `div.row`:
     - `div.col-md-3` (left): `form.search-form` with
       `input[type=search]#site-search` (placeholder "Search...", icon
       left, 38px height, font-size 14px).
     - `div.col-md-6` (center): `h1.visually-hidden` + `a.logo.m-0
text-uppercase` — site name (20px, 700, #000, uppercase, centered).
     - `div.col-md-3` (right): `div.d-flex` with `ul.list-unstyled
social` (twitter, facebook, instagram icons) + `button#darkModeToggle
.dark-mode-toggle` (moon icon, aria-label "Toggle dark mode") +
       burger `a.burger.site-menu-toggle` (mobile).
     - Below the row: `ul.js-clone-nav.site-menu` — Home (index.html),
       Categories (categories.html, `ul.dropdown` children: Travel, Food,
       Technology, Business), About (about.html), Contact (contact.html).
  2. `div.section.pt-5.pb-0` — Trending hero: centered
     `div.row.justify-content-center.mb-5` > `h2.heading` "Trending"
     (40px/700), then `div.posts-slide-wrap` > `div.posts-slide#posts-slide`
     (tiny-slider) with 4× `div.item`: each `div.post-entry.d-lg-flex` —
     `div.thumbnail.me-lg-5` (flex 0 0 440px, img rounded 7px) +
     `div.content.align-self-center` (`div.post-meta.mb-3`: category
     links + date; `h3.heading` headline link (color #222, hover brand);
     excerpt `p`; `a.post-author.d-flex.align-items-center` — circular
     avatar (45px, border-radius 50%) + `strong` author name). tns-nav
     dots centered below (bottom -70px).
  3. `div.section` — Latest posts grid: `div.row.g-5` of 6×
     `div.col-lg-4` > `div.post-entry.d-block.small-post-entry-v`
     (vertical: `div.thumbnail` image top + `div.content`: `div.post-meta
.mb-1` category links, `h3.heading.mb-3` headline, `a.post-author`
     avatar + name).
  4. `div.section` — Most Popular Posts: centered heading "Most Popular
     Posts" (`h2.heading`), `div.most-popular-slider-wrap.px-3.px-md-0` >
     `div#most-popular-nav` (arrow controls, absolute bottom -80px right
     20px) + `div.most-popular-slider#most-popular-center` (tiny-slider)
     of 6× `div.item` vertical `small-post-entry-v` cards (same markup as
     step 3).
  5. `div.section` — two category columns `div.row.g-5`:
     - `div.col-lg-6` Sports: `div.row.mb-4` > `div.col-12` >
       `h2.h4.fw-bold` "Sports", then 3× `div.post-entry.d-md-flex
.xsmall-horizontal.mb-5` (horizontal small: `div.thumbnail
.me-md-3` img + `div.content` meta + `h3.heading` + author).
     - `div.col-lg-6` Business: same with `h2.h4.fw-bold` "Business" and
       3 posts.
  6. `div.sec-subscribe.py-5.bg-light.mx-md-3` — newsletter band:
     `h2.h4.fw-bold` "Subscribe to newsletter" + `form.row`:
     `div.col-md-8` email `input#newsletter-email.form-control`
     (placeholder "Enter your email"; border-radius 7px) +
     `div.col-md-4.d-grid` `input.btn.btn-primary[type=submit]`
     value "Subscribe" (bg #f79918, radius 0.375rem).
  7. `footer.site-footer` (font-size 14px, color #888, padding 70px 0) —
     `div.container` > `div.row.justify-content-center.copyright` >
     `div.col-lg-7.text-center`: `div.widget` (copyright line "Copyright
     © All rights reserved | This template is made with ❤ by ColorLib"),
     `ul.social.list-unstyled` (facebook, twitter, linkedin,
     youtube-play icons), credit link to colorlib.com, `div.d-block` of
     legal links (Terms & Conditions, Privacy Policy → legal.html).
- **Design tokens extracted from `css/style.min.css` + DOM:**
  - Font: **"Poppins", sans-serif** — body 400 (default), headings 700;
    loaded via Google Fonts `<link>` (`wght@400;700`). `.logo,h1..h5`
    font-family Poppins, color #000.
  - Brand primary: **#f79918** (orange) — `--bs-primary`, link color,
    `.btn-primary` bg, active slider dot, cta-button hover bg/border;
    hover variant #c67a13 (link) / #f8a83b (button).
  - Secondary: **#10495c** (dark teal) — `--bs-secondary` (utility color,
    footer text, icon color).
  - Body: **#212529** text on **#fff**; light gray **#f8f9fa**
    (`--bs-light`, newsletter band); borders **#dee2e6**; muted grays
    #888 (footer), #999 (dates), #ccc (search icon), #6c757d.
  - Headings: `.logo` 20px/700 #000 uppercase; `.heading` 40px/700
    (section titles, 30px in some contexts); post `h3.heading` links
    #222/700; category links `.category` #222/600; author `strong` #000/700.
  - Images: `border-radius: 7px` (`.post-entry img`); author avatar
    45px, `border-radius: 50%`; hero thumbnail `flex: 0 0 440px`.
  - Nav links: font-size 14px, color rgba(0,0,0,.7), padding 10px 15px,
    hover #000; `.cta-button` pill: padding 6px 20px, border 2px solid
    rgba(0,0,0,.1), border-radius 30px, hover bg #f79918.
  - Buttons: Bootstrap `.btn-primary` — bg #f79918, radius
    `--bs-border-radius` 0.375rem, padding .375rem .75rem, font-weight
    400, hover bg #f8a83b; subscribe input radius 7px.
  - Carousels: tns-nav dots centered (left 50%, bottom -70px, 15px
    buttons); `#most-popular-nav` arrows absolute bottom -80px right 20px.
  - Dark mode: `[data-bs-theme=dark]` — body bg **#212529**, text
    **#dee2e6**, emphasis #fff, links **#fac274** (hover #fbce90),
    borders #495057. Persist with `window.localStorage` (Keyhaven
    pattern: in-memory Storage polyfill in test setup).
  - Rhythm: site-nav padding 20px 0; trending section pt-5 pb-0; latest
    grid `g-5` gutters (3rem); newsletter py-5; footer padding 70px 0.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/serial-<n>/<w>/<h>` — 4 hero + 6 latest + 6
  popular + 6 category + avatars ≈ 22 seeds); icons → lucide-react
  (search, moon, menu, chevron-down, arrow-left/right) + inline SVG brand
  icons for social (twitter/X, facebook, instagram, linkedin, youtube —
  NOT lucide brand icons, removed); Poppins via Google Fonts `<link>`;
  tiny-slider carousels → lightweight React state slider (index + dots /
  prev-next controls) — no carousel dependency; dark mode toggle persisted
  via `window.localStorage`; newsletter form validated per repo
  conventions (zod) — success state swaps in a message (assert
  `queryByLabelText` absence, per repo skill); mobile nav collapse with
  aria; skip glightbox/aos (static images, no lightbox needed).

Serial lives in `apps/serial` and uses shared components from
`packages/ui` (Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header with search, logo, socials, and dark toggle

The system SHALL render a white header row with a search form on the left,
the centered uppercase site logo, and social icons plus a dark-mode toggle
on the right.

#### Scenario: Header content

- **GIVEN** the Serial page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show a search input with placeholder "Search..." on
  the left
- **AND** it SHALL show the site name "Serial" in uppercase as the
  centered logo
- **AND** it SHALL show at least three social icons (twitter, facebook,
  instagram) on the right
- **AND** it SHALL show a dark-mode toggle button with aria-label
  "Toggle dark mode"
- **AND** toggling dark mode SHALL apply the dark theme and persist the
  choice across reloads

### Requirement: Navigation bar

The system SHALL render a nav row with Home, a Categories dropdown,
About, and Contact links.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the nav row is displayed
- **THEN** it SHALL show links Home, Categories, About, and Contact
- **AND** the Categories link SHALL reveal a dropdown with Travel, Food,
  Technology, and Business
- **AND** on mobile a burger menu SHALL expand/collapse the nav

### Requirement: Trending hero slider

The system SHALL render a "Trending" section with a carousel of split
featured post entries (thumbnail left, content right).

#### Scenario: Hero slider content

- **GIVEN** the page is rendered
- **WHEN** the trending section is displayed
- **THEN** it SHALL show the heading "Trending"
- **AND** it SHALL show a slider with at least three featured posts
- **AND** each slide SHALL contain a thumbnail, category meta, a headline
  link, and an author with a circular avatar
- **AND** slider dots SHALL be visible below the slide to navigate slides

### Requirement: Latest posts grid

The system SHALL render a 3-column grid of six vertical post cards.

#### Scenario: Latest grid content

- **GIVEN** the page is rendered
- **WHEN** the latest section is displayed
- **THEN** it SHALL show six vertical post cards in a 3-column grid
- **AND** each card SHALL show an image, category meta, a headline link,
  and an author with avatar

### Requirement: Most Popular Posts slider

The system SHALL render a "Most Popular Posts" carousel of vertical post
cards with prev/next controls.

#### Scenario: Most popular content

- **GIVEN** the page is rendered
- **WHEN** the most popular section is displayed
- **THEN** it SHALL show the heading "Most Popular Posts"
- **AND** it SHALL show at least four vertical post cards
- **AND** prev/next arrow controls SHALL navigate between cards

### Requirement: Category columns (Sports / Business)

The system SHALL render two side-by-side category columns, each with a
heading and three horizontal small post rows.

#### Scenario: Category columns content

- **GIVEN** the page is rendered
- **WHEN** the category columns are displayed
- **THEN** the left column SHALL show the heading "Sports" with three
  horizontal posts (thumbnail left, meta + headline right)
- **AND** the right column SHALL show the heading "Business" with three
  horizontal posts

### Requirement: Newsletter subscribe band

The system SHALL render a light-gray newsletter band with an email input
and a brand-orange "Subscribe" button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the subscribe section is displayed
- **THEN** it SHALL show the heading "Subscribe to newsletter"
- **AND** it SHALL show an email input with placeholder "Enter your email"
- **AND** it SHALL show a "Subscribe" button in the brand orange #f79918
- **AND** submitting an invalid email SHALL show a per-field error and
  block submission

### Requirement: Footer

The system SHALL render a minimal footer with copyright, social icons, a
credit link, and legal links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a centered copyright line
- **AND** it SHALL show at least four social icons (facebook, twitter,
  linkedin, youtube)
- **AND** it SHALL show Terms & Conditions and Privacy Policy links
- **AND** the footer text SHALL be small (14px) and light gray

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Serial app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, nav, trending slider,
  latest grid, most popular slider, category columns, newsletter band,
  and footer sections in the expected order
- **AND** the document title SHALL be "Serial — Magazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh serial` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (header w/ search+logo+socials+
      dark toggle, nav w/ Categories dropdown, Trending slider, latest
      grid, Most Popular slider, Sports/Business columns, newsletter,
      footer)
- [ ] Design tokens in `@theme`: brand `#f79918`, secondary `#10495c`,
      body `#212529` on `#fff`, light `#f8f9fa`, footer gray `#888`; dark
      mode `#212529` bg / `#dee2e6` text / `#fac274` links
- [ ] Font: Poppins 400/700 via Google Fonts `<link>`
- [ ] Header: search left, uppercase centered logo, socials + moon toggle
      right, border-bottom 1px rgba(0,0,0,.1)
- [ ] Hero: "Trending" heading, slider of split entries (thumb flex 0 0
      440px, rounded 7px), meta + headline + circular author avatar, dots
- [ ] Latest: 6 vertical cards, 3-column grid
- [ ] Most Popular: heading + slider of vertical cards + arrow controls
- [ ] Category columns: Sports left / Business right, 3 horizontal posts
      each
- [ ] Newsletter: bg-light band, email input (radius 7px), orange
      "Subscribe" button, validated form with success state
- [ ] Footer: 14px #888, centered copyright + socials + Terms/Privacy
- [ ] Dark mode toggle persists via `window.localStorage` (polyfill in
      test setup)
- [ ] Placeholder images seeded (`picsum.photos/seed/serial-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on ALL
      THREE dup rows, lines 271, 603, AND 2199, + surge URL) — NOT by the
      prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)

# Template: Volt (Blog Template)

## Purpose

Volt is a single-page blog template in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Ionize" website template
design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ionize" — travel/lifestyle blog template with a
  fixed sidebar layout (source: https://colorlib.com/wp/template/ionize/).
  TEMPLATES.md has TWO copies of this item (lines 265 and 1713 — duplicate
  lines exist for some items; mark BOTH when done).
- **Preview URL:** https://preview.colorlib.com/theme/ionize/ — HTTP 200, full
  rendered DOM fetched with curl (title: "ionize - Free Bootstrap 4 Template
  by Colorlib"). Stylesheets: `css/style.css` (main, 59KB) + bootstrap.min,
  open-iconic-bootstrap, animate, owl.carousel, owl.theme.default,
  magnific-popup, aos, ionicons, bootstrap-datepicker, jquery.timepicker,
  flaticon, icomoon. Google Fonts **Poppins** (body/UI) + **Abril Fatface**
  (display — used for the logo only).
  Cross-checked against the TEMPLATES.md screenshot (`ionize-free-template.jpg`,
  1200×946, viewed in browser) — designs match. The demo brands itself
  "ionize"; our recreation uses the NEW name **Volt**.
- **Layout (1:1):** the index page is a fixed-left-sidebar layout — NOT a
  top-nav layout:
  1. Sidebar (`#colorlib-aside`, `position: fixed`, `width: 25%`, full
     height, `padding: 3em 2em 40px`, `z-index: 1001`, bg photo
     `images/sidebar-bg.jpg` with `background-size: cover` + `:after`
     overlay **`#0028ff` at opacity .6`; overlay `z-index: -1`):
     - Logo `#colorlib-logo` (h1, `mb-4`): "ionize" → "Volt", **Abril
       Fatface**, 74px (62px ≤1199px), `line-height: .8`, white, left
       aligned, `display: inline-block`.
     - Nav `#colorlib-main-menu` (`ul`): 5 links — Home (active), Travel,
       Lifestyle, About, Contact. `li` margin-bottom 10px; links Poppins
       18px 500, white, padding 10px 0, hover/active animated underline
       (`:after` `scaleX(0)→1` white 2px bar); active li weight 600.
     - Sidebar footer `.colorlib-footer` (`position: absolute`, bottom
       20px, `padding: 0 2em`, 17px, `rgba(255,255,255,0.7)`):
       - `h3` "Subscribe for newsletter" (white).
       - Newsletter form `.colorlib-subscribe-form` — `.form-group.d-flex`:
         `.icon` span (paper-plane glyph) + `input.form-control`
         (transparent bg, 1px solid `rgba(255,255,255,0.2)`, text/placeholder
         `rgba(255,255,255,0.8)`, 14px, `padding-right: 40px`).
       - Credit `p.pfooter`: "Copyright © <year> All rights reserved | This
         template is made with <heart> by Colorlib" (heart glyph) → credit
         Volt in the recreation.
  2. Mobile offcanvas: ≤991px the sidebar becomes a 320px drawer
     `translateX(-320px)` (off-canvas), `bg rgba(0,0,0,0.04)`; a hamburger
     toggle `.colorlib-nav-toggle` (fixed, white bars over the blue sidebar,
     bars turn `#000` when active) opens it; `#colorlib-main` +
     `.colorlib-nav-toggle` translateX(270px) while open.
  3. Main (`#colorlib-main`, `float: right`, `width: 75%` ≥992px) →
     single blog section `.ftco-section.ftco-no-pt.ftco-no-pb.bg-light`
     (`bg-light` = `#f8f9fa`), `.container.px-0` → `.row.no-gutters` with a
     masonry-style arrangement of 12 `blog-entry` cards (all demo entries
     share ONE placeholder title — paraphrase):
     - **Featured card** (`.col-md-4.d-flex`): `.blog-entry.active` with
       `.carousel-blog.owl-carousel` of 3 slides (each `.item` = full-bleed
       `<a class="img">` bg photo) + `.text.p-4` block; the active card has
       **blue `#0028ff` background** with `rgba(255,255,255,0.8)` text.
     - **Wide horizontal cards** (`.col-md-8.d-flex` rows of 2, each
       `col-md-12`): `.blog-entry.d-md-flex.align-items-center` — image
       left (`.img`, width 50%) + `.text.text-2.p-4` (width 50%); second
       entry in each pair is `.text-2.text-md-right` (text right-aligned,
       image on the right).
     - **Vertical cards** (rows of 3 × `.col-md-4.d-flex`): `.blog-entry`
       with `.img` (height 340px, bg photo) + `.text.p-4` below.
     - One entry variant is `.flex-column-reverse` (image below text).
  4. Card anatomy (`.blog-entry`, `background: #fff`, full width,
     `transition: all .3s ease`):
     - `.img`: `display: block; width: 100%; height: 340px; position:
relative` + `:after` overlay **`#0028ff`** (`opacity: 0` → **.7** on
       hover).
     - `.text.p-4`: `h3.mb-2` title (Poppins 20px 400, `#000000`,
       `mb-2`) → `.meta-wrap > p.meta`: 3 spans, 13px, `#bfbfbf`, `margin:
0 10px 0 0` — calendar icon + date ("Sept. 10, 2019"), folder icon +
       category link ("Travel", `#000000`), comment icon + "5 Comment" →
       excerpt `p.mb-4` (body gray) → "Read More" link `.btn-custom` with
       forward-arrow glyph (brand blue per screenshot; **white** on the
       active/hover card).
     - Hover/active: `background: #0028ff; color: rgba(255,255,255,0.8)` —
       whole card flips to blue with white text.
  5. Sub-pages exist in the demo (travel.html, lifestyle.html, about.html,
     contact.html, single.html) but the recreation covers the INDEX page
     only (repo convention — one-page app).
- **Design tokens extracted from the live preview CSS (`css/style.css`):**
  - Brand **blue `#0028ff`** (16 uses) — sidebar `:after` overlay (opacity
    .6), `.btn.btn-primary` bg + border (white text), `.blog-entry` hover +
    `.active` bg, `.blog-entry .img:after` hover overlay (opacity .7),
    Read More link (per screenshot), meta link hover.
  - Ink **`#000000`** — blog card h3 titles, meta category links, `.btn.btn-white`
    text; body ink `#212529`; secondary `#6c757d`; meta gray **`#bfbfbf`**
    (13px).
  - Surfaces: page/cards **`#fff`**; blog section **`#f8f9fa`** (`bg-light`);
    sidebar photo + `#0028ff` overlay; sidebar text whites
    `rgba(255,255,255,0.7)` (footer) / `0.8` (input, active card).
  - Fonts: **"Poppins", Arial, sans-serif** (nav 18px 500; card h3 20px 400;
    body 400 1rem lh 1.5); **"Abril Fatface", cursive** (logo only — 74px,
    lh .8, weight normal).
  - Buttons: `.btn.btn-primary` = `#0028ff` bg, 1px `#0028ff` border, white
    text (square — Bootstrap default radius); `.btn.btn-white` = white bg,
    white border, black text. "Read More" `.btn-custom` = text link + arrow
    glyph (no box).
  - Radii: none on cards/buttons (square corners); underline bar on nav
    links; 50% circle only for the loader spinner (`#F96D00` orange — not
    recreated).
  - Spacing: sidebar padding 3em top / 2em sides / 40px bottom; `.text`
    padding `p-4` (1.5rem); `.img` height 340px; card `mb` 0 (grid rows
    carry spacing via `.row.no-gutters` + column padding in the demo —
    recreate with a gap ~24px); meta spans margin-right 10px; nav li margin
    bottom 10px; logo `mb-4`.
  - Inputs: newsletter input transparent, 1px `rgba(255,255,255,0.2)` border,
    14px, white 80% text, height 52px (`form-control`), paper-plane icon.
- **Visual design (from screenshot):** split-screen blog — fixed deep royal
  blue (#0028ff) left sidebar over a photo, big white serif "ionize" logo,
  vertical white nav (Home/Travel/Lifestyle/About/Contact), "Subscribe for
  newsletter" input with send icon, copyright credit at the bottom; right
  side is a light (#f8f9fa) masonry blog grid mixing: a large photo card with
  a solid-blue content block (title/meta/excerpt/Read More), a video
  thumbnail with play overlay, a text-only card, and rows of photo cards with
  white content blocks and captions. Read More links render blue; cards flip
  to solid blue with white text on hover. All demo posts share the title "A
  Loving Heart is the Truest Wisdom" (meta: Sept. 10, 2019 · Travel · 5
  Comment, excerpt "A small river named Duden flows by their place and
  supplies") — paraphrase into travel/lifestyle post titles in the
  recreation.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/volt-<n>/<w>/<h>`); icons → lucide-react (Calendar,
  Folder, MessageCircle, Send/PaperPlane, ArrowRight, Menu, X); Poppins +
  Abril Fatface via Google Fonts `<link>` in index.html; no assets copied.
  Copy paraphrased but same content kinds. The carousel card and the hover
  flip-to-blue interaction are recreated with React state (no owl-carousel).

Volt lives in `apps/volt` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Sidebar

The system SHALL render a fixed left sidebar (25% width on desktop) with a
brand logo, vertical navigation, a newsletter subscribe form, and a credit
footer, over a photo with a translucent royal-blue overlay.

#### Scenario: Sidebar branding and navigation

- **GIVEN** the Volt page is rendered on a desktop viewport
- **WHEN** the sidebar is displayed
- **THEN** the sidebar SHALL be fixed to the left edge, 25% wide and full
  height, with a background photo covered by a `#0028ff` overlay at 60%
  opacity
- **AND** it SHALL show a "Volt" logo in the Abril Fatface font at ~74px in
  white
- **AND** it SHALL show navigation links Home (active), Travel, Lifestyle,
  About, Contact — white, Poppins 18px weight 500, stacked vertically with
  10px gaps
- **AND** the active link SHALL be weight 600 with a visible white underline,
  and links SHALL reveal the underline on hover/focus

#### Scenario: Newsletter subscribe form

- **GIVEN** the sidebar is displayed
- **WHEN** the user focuses the "Subscribe for newsletter" email input
- **THEN** the input SHALL be a transparent field with a subtle white border
  (rgba(255,255,255,0.2)), white 80% placeholder text, and a paper-plane
  submit icon inside the field on the right

#### Scenario: Newsletter submit

- **GIVEN** the user has typed a valid-looking email address into the
  newsletter input
- **WHEN** the user submits the form
- **THEN** the form SHALL prevent the default page reload
- **AND** SHALL show an inline confirmation message (e.g. "Subscribed!
  Check your inbox.") replacing the form

#### Scenario: Sidebar credit footer

- **GIVEN** the sidebar is displayed
- **WHEN** the user scrolls to the bottom of the sidebar
- **THEN** the sidebar SHALL show a copyright credit line "Copyright ©
  <current year> All rights reserved | This template is made with <heart> by
  Volt" at the bottom, white at 70% opacity

### Requirement: Mobile navigation

The system SHALL collapse the sidebar into an off-canvas drawer with a
hamburger toggle on small screens.

#### Scenario: Off-canvas sidebar on mobile

- **GIVEN** the viewport is at most 991px wide
- **WHEN** the page is rendered
- **THEN** the sidebar SHALL be hidden off-canvas (translated left) and a
  hamburger toggle button SHALL be visible (fixed, with aria-label such as
  "Open menu")
- **AND** the main content SHALL span the full width

#### Scenario: Opening and closing the drawer

- **GIVEN** the sidebar is off-canvas on a mobile viewport
- **WHEN** the user activates the hamburger toggle
- **THEN** the sidebar SHALL slide in (320px wide) with the logo, nav,
  newsletter form, and credit
- **AND** the toggle SHALL switch to a close affordance (aria-label "Close
  menu", aria-expanded true)
- **AND** activating it again SHALL slide the sidebar back out and restore
  the hamburger affordance

### Requirement: Blog grid layout

The system SHALL render the main content area (75% width on desktop, light
`#f8f9fa` background) as a masonry-style grid of blog post cards matching the
demo arrangement: one featured carousel card, alternating wide horizontal
cards, and rows of vertical cards.

#### Scenario: Featured card with image carousel

- **GIVEN** the blog grid is displayed
- **WHEN** the first (featured) card renders
- **THEN** it SHALL occupy the left column of the first row and show a
  carousel of 3 rotating background images above a content block
- **AND** the featured card SHALL have a solid `#0028ff` background with
  white/80% text (title, meta, excerpt, Read More)
- **AND** carousel SHALL expose prev/next controls with accessible labels
  and SHALL advance automatically or on control activation

#### Scenario: Wide horizontal cards

- **GIVEN** the blog grid is displayed
- **WHEN** a wide card row renders
- **THEN** the row SHALL pair an image column (50%) with a text column (50%),
  with the second card of each pair right-aligned (image on the right,
  text-aligned right)

#### Scenario: Vertical cards in rows of three

- **GIVEN** the blog grid is displayed
- **WHEN** a three-up row renders
- **THEN** it SHALL show three vertical cards, each with a 340px background
  image on top and a white content block below

### Requirement: Blog card content

The system SHALL render each blog card with a title, meta row (date,
category, comment count), excerpt, and Read More link, with placeholder
travel/lifestyle copy.

#### Scenario: Card anatomy

- **GIVEN** a blog card is rendered
- **WHEN** the card content is inspected
- **THEN** the card SHALL contain an h3 title (Poppins 20px, black) linking
  to the post
- **AND** a 13px gray meta row with a calendar icon + date, a folder icon +
  category link (black), and a comment icon + comment count
- **AND** a short excerpt paragraph
- **AND** a "Read More" text link with a forward arrow icon

#### Scenario: Card hover interaction

- **GIVEN** a blog card is rendered
- **WHEN** the user hovers the card (or focuses it)
- **THEN** the card background SHALL transition to `#0028ff`, the text SHALL
  become white (80% for body copy), and the card image SHALL gain a blue
  overlay at 70% opacity
- **AND** the Read More link SHALL render white on the hovered card

### Requirement: Verification checklist

The template SHALL pass the per-app verification gate before shipping.

#### Scenario: Gate passes

- **GIVEN** the `apps/volt` workspace is implemented
- **WHEN** `scripts/verify-app.sh volt` runs
- **THEN** typecheck, oxlint, vitest with 100% line/function/branch/statement
  coverage, and the production build SHALL all pass
- **AND** the app SHALL import Button/ButtonLink/cn from `packages/ui`
  (knip guard) and register `injectUiSource()` in `vite.config.ts`
- **AND** after merge, TEMPLATES.md SHALL mark BOTH Ionize copies (lines 265
  and 1713) `[x]` with the live Surge URL
  `https://free-react-templates-volt.surge.sh` + homepage, and `npm run
readme:status` SHALL regenerate the README status section

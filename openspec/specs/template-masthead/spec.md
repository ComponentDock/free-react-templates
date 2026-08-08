# Template: Masthead (Blog / Lifestyle Magazine Template)

## Purpose

Masthead is a single-page lifestyle-blog landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Lifeleck" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Lifeleck" — lifestyle/fashion blog template
  (source: https://colorlib.com/wp/template/lifeleck/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/lifeleck/
  (HTTP 200, 28.9 KB rendered DOM, title "lifeleck BLOG || HOME").
  Stylesheets: `css/style.css` (main, 153 KB) + Bootstrap 4, animate,
  owl.carousel, themify icons, liner icon, custom `css/search.css`.
  Fonts via `@import` in style.css: Google Fonts **Cardo 400/700**
  (display + nav links) + **Lora 400/700** (body).
- **Screenshot:** `lifeleck-free-template.jpg` (1200×946, viewed in browser)
  — white editorial layout: top navbar (serif logo left, centered nav Home /
  Archive / Category / Contact / Pages dropdown, search + 4 social icons
  right), then a 3-column row of large lifestyle photos (woman in yellow
  sweater laughing out of a car window / couple in a modern interior / man
  and boy playing video games), each with a burnt-orange category tag
  "Fashion / Life Style" and small gray "Posted on April 15, 2019" date; a
  "Subscribe Our Newsletter" strip with name/email inputs and a solid orange
  square Subscribe button; blog grid + sidebar below; footer cut off in the
  screenshot. The demo brands itself "Lifeleck"; recreation uses the NEW name
  **Masthead**.
- **Visual design (from DOM + CSS tokens + screenshot):** minimalist modern
  editorial aesthetic — stark white page, **Cardo** serif headlines (weight
  600, `#2a2a2a`), **Lora** serif body (14px), burnt-orange **`#fc4600`**
  accent (category tags, buttons, hover states, sidebar-title underline,
  footer link hovers), light peach `#fbf2ee` sidebar widget cards, `#f7f7f7`
  footer. Post cards: image with a white text box overlapping upward
  (`margin-top: -50px`), text centered.

- **Structure (1:1, section order):**
  1. Header `header.main_menu` — Bootstrap navbar (`.navbar-expand-lg`):
     `.navbar-brand` logo image left; centered `ul.navbar-nav` links **Home,
     Archive, Category, Contact, Pages** (dropdown with Single Blog +
     Elements); right side search (`.btn_1` "search" + input) and 4 social
     icons (`.header_social_icon`, themify: facebook/twitter/instagram/
     skype). Nav links: Cardo 18px, `#2a2a2a`, `padding: 41px 30px`;
     toggler collapses below lg.
  2. Banner `section.banner_post` — `container-fluid` > `row
justify-content-between` with **3 equal columns**
     (`.banner_post_1.banner_post_bg_1/2/3`, width 33%, `height: 700px`,
     background images cover, stacked on mobile: 100%/400px). Each column:
     `.banner_post_iner.text-center` with `<a><h5>` category "Fashion /
     Life style" (15px, `#fc4600`, Lora 500), `<a><h2>` title "All said
     replenish years void kind say void" (Cardo 600, `#2a2a2a`, hover
     `#fc4600`, transition 0.5s), `<p>` "Posted on April 15, 2019" (13px,
     `#8a8a8a`).
  3. Subscribe `div.subscribe_form` — centered row: `h3` "Subscribe Our
     Newsletter" (700) + name input + email input + `.btn_1` Subscribe
     button. `.subscribe_form_iner`: `padding: 55px`, **8px solid
     `#fbf2ee` border**. Inputs: `border: 1px solid #eee`, `border-radius:
0`, `height: 50px`, `padding-left: 20px`.
  4. Posts `section.all_post.section_padding` (`padding: 140px 0`) —
     `container` > row:
     - Main `col-lg-8`: **1 feature post** (`.single_post.post_1
.feature_post`, full width): image + `.single_post_text` white box
       (`margin-top: -50px`, `max-width: 520px`, `padding: 50px 70px`) with
       `<a><h5>` category (`#fc4600`), `<a><h2>` 30px, `<p>` date; then
       **8 posts** in `col-lg-6 col-sm-6` grid (`.single_post.post_1`):
       image + white box (`max-width: 320px`, `padding: 40px 10px`,
       `margin-top: -50px`) with h5 category, h2 title (24px), p date.
       Placeholder content repeats on all cards: "Fashion / Life style" /
       "Your life is a product your right decisions" / "Posted on April 15,
       2019".
     - Sidebar `col-lg-4` `.sidebar_widget` — 4 widgets on `#fbf2ee` bg
       (`padding: 30px`, `margin-bottom: 30px`), each `.sidebar_tittle h3`
       (24px, `#2a2a2a`, weight 600, 60×2px `#fc4600` underline):
       a. Search widget — input + full-width `.btn_1` "search".
       b. **Categories** — list Culture (15), Creative Design (15),
       Illustration (15), Production (15), Mangement (15), Branding (15).
       c. **Popular Feeds** — 3 thumb + text rows (image left, h3 title
       "Subdue lesser beast winged bearing meat tree one", p "By Michal
       / March 30").
       d. **Share this post** — 4 social icons (facebook, twitter-alt,
       pinterest, instagram).
     - Pagination `.page_pageniation` — centered `ul.pagination`: Previous
       (disabled) + 1 + 2 + 3 + Next; `.page-link` 20px `#2a2a2a`, no
       borders.
  5. Social connect `section.social_connect_part` — `container-fluid`,
     `.social_connect` flex `space-between`: **6 square Instagram tiles**
     (`.single-social_connect`, width 16.67%, 50% on mobile), each
     `.social_connect_img` + `.social_connect_overlay` with a
     `.ti-instagram` icon; hover: black overlay (`#000`, opacity 0.5,
     `transform: scale(1)` from 0.5) + icon becomes visible.
  6. Footer `footer.footer-area` (`background: #f7f7f7`,
     `padding: 130px 0 25px`) — 4 widgets in `col-xl-3 col-lg-6 col-sm-6`
     (h4 20px `#2a2a2a` weight 700, capitalize):
     - **About us** — paragraph (body gray `#7b838a`).
     - **Contact Info** — Address / Phone (+8880 44338899) / Email
       (info@colorlib.com) list.
     - **Important Link** — WHMCS-bridge, Search Domain, My Account,
       Shopping Cart, Our Main Shop (links `#8a8a8a`, hover `#fc4600`).
     - **Newsletter** — intro paragraph + inline form: email input
       (borderless, 48px) + `.click-btn` 40×50px `#fc4600` arrow button
       (`.ti-arrow-right`), form-wrap 1px `#eee` border.
     - `.copyright_text` row: left copyright line "Copyright © 2019 All
       rights reserved | ... Made with <heart> by Colorlib" (recreated with
       the Masthead name, no Colorlib credit); right `.footer-social` 4
       icons (facebook/twitter/instagram/skype).

- **Design tokens extracted from `css/style.css`:**
  - Accent **burnt orange `#fc4600`** — category tags, `.btn_1` bg, banner
    h2 hover, footer link hover, sidebar-title underline, footer arrow btn.
  - Dark ink **`#2a2a2a`** — nav links, banner/sidebar headings, pagination.
  - Peach **`#fbf2ee`** — sidebar widget bg + subscribe border (8px).
  - Footer bg **`#f7f7f7`**.
  - Muted grays — `#8a8a8a` (dates/meta), `#999999` (footer input),
    `#7b838a` (footer text), `#0a0a0a` (bold byline).
  - Headings: **Cardo** (400/700), weight 600, `#2a2a2a`; nav links Cardo
    18px; body: **Lora** 14px.
  - Buttons `.btn_1`: solid `#fc4600`, white text, `padding: 14.5px 58px`,
    **square corners (no radius)**, hover → `#2a2a2a`; transition 0.4s.
  - Inputs: `1px solid #eee`, `border-radius: 0`, height 50px.
  - Post text boxes: white bg overlapping image by `-50px`; feature
    `max-width: 520px` / regular `max-width: 320px`.
  - Section padding rhythm: 140px vertical (70px mobile).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/masthead-<n>/<w>/<h>`); icons → lucide-react
  (search, arrow; brand/social icons as inline SVG since lucide-react
  removed brand glyphs); Cardo + Lora via Google Fonts; no assets copied.
  The banner background images become `<img>` with `object-cover` (or
  `bg-cover` divs) matching the 33%/700px columns; stacked on mobile.

Masthead lives in `apps/masthead` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Masthead",
centered links, a search control, and social icons.

#### Scenario: Navbar content

- **GIVEN** the Masthead page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Masthead" and links Home, Archive, Category, Contact, and Pages
- **AND** a search control and at least two social icons SHALL be visible in the navbar

#### Scenario: Pages dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user opens the Pages menu
- **THEN** it SHALL show entries Single Blog and Elements

### Requirement: Banner post trio

The system SHALL render three equal-width banner post columns, each with a
category tag, a title, and a posted date.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner section is displayed
- **THEN** it SHALL show three banner columns in a row on desktop
- **AND** each column SHALL contain a category tag, a headline, and a "Posted on" date line

#### Scenario: Banner heading hover

- **GIVEN** a banner column is displayed
- **WHEN** the user hovers over the banner headline
- **THEN** the headline SHALL change color to the accent orange

### Requirement: Subscribe form

The system SHALL render a newsletter subscribe form with a headline, name
and email inputs, and a subscribe button.

#### Scenario: Subscribe form content

- **GIVEN** the page is rendered
- **WHEN** the subscribe section is displayed
- **THEN** it SHALL show the headline "Subscribe Our Newsletter"
- **AND** a name input, an email input, and a Subscribe button

#### Scenario: Submit shows success

- **GIVEN** the subscribe form is displayed
- **WHEN** the user fills the name and email fields and submits
- **THEN** the form SHALL indicate the subscription was received (success message)

### Requirement: Post grid with feature post

The system SHALL render a blog section with one full-width feature post
followed by a two-column grid of posts, each card with image, category,
title, and date.

#### Scenario: Feature post

- **GIVEN** the blog section is displayed
- **WHEN** the section loads
- **THEN** the first post SHALL span the full width of the main column with an image, category, title, and date

#### Scenario: Post grid cards

- **GIVEN** the blog section is displayed
- **WHEN** the grid is rendered
- **THEN** at least six additional posts SHALL appear in a two-column grid
- **AND** each card SHALL contain an image, a category label, a title, and a date

### Requirement: Sidebar widgets

The system SHALL render a sidebar with a search widget, a categories list,
popular feeds, and a share section.

#### Scenario: Sidebar content

- **GIVEN** the blog section is displayed
- **WHEN** the sidebar is rendered
- **THEN** it SHALL show a search widget, a Categories list with at least five categories, a Popular Feeds list, and a Share this post section with social icons

### Requirement: Pagination

The system SHALL render a centered pagination control with previous/next
controls and page numbers.

#### Scenario: Pagination content

- **GIVEN** the blog section is displayed
- **WHEN** pagination is rendered
- **THEN** it SHALL show Previous, page numbers 1–3, and Next
- **AND** the Previous control SHALL be disabled

### Requirement: Instagram connect strip

The system SHALL render a full-width strip of six image tiles with an
Instagram icon overlay on hover.

#### Scenario: Connect strip tiles

- **GIVEN** the page is rendered
- **WHEN** the social connect section is displayed
- **THEN** it SHALL show six square image tiles in a row
- **WHEN** the user hovers over a tile
- **THEN** a dark overlay with an Instagram icon SHALL appear on that tile

### Requirement: Footer

The system SHALL render a footer with four widget columns, a copyright line,
and social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show About Us, Contact Info, Important Link, and Newsletter columns
- **AND** a copyright line for the Masthead site and social icons SHALL be visible

#### Scenario: Newsletter submit

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user enters an email and submits
- **THEN** the form SHALL indicate the subscription was received (success message)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Masthead app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the banner trio, subscribe form, blog section, and social connect strip in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Masthead — Lifestyle Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/masthead`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/masthead`)
- [ ] Section order matches the reference 1:1 (navbar → banner trio → subscribe form → blog grid + sidebar + pagination → social connect strip → footer)
- [ ] Design tokens from the reference used in `@theme` (accent #fc4600, ink #2a2a2a, peach #fbf2ee, footer #f7f7f7, Cardo + Lora)
- [ ] Square-corner buttons (`btn_1`: #fc4600 bg, white text, hover #2a2a2a); post text boxes overlap image by -50px
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands
- [ ] README Templates status + BOTH TEMPLATES.md Lifeleck lines (269 and 439) marked `[x]` after merge

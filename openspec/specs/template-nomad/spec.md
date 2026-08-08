# Template: Nomad (Travel Blog Template)

## Purpose

Nomad is a single-page travel-blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Explore"
website template (see TEMPLATES.md, Blog section, line 258), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a clean, editorial travel blog: a transparent navbar over a
full-height split hero slider (left: author avatar + "Written by Dave Lewis,
October 04, 2018", a huge Abril Fatface watermark word, headline, excerpt and a
coral "Continue Reading" button; right: full-height photo), a short centered
intro line ("I'm Traveler & Blogger from Paris, Italy Who Loves Documenting
Adventures & Discoveries Around the World"), a blog section with five large
article cards (photo, watermark category word, headline, excerpt, author row,
heart/eye/comment counters, coral CTA) and a right sidebar (search box,
Destination list, Popular Articles, Tag Cloud, coral newsletter signup,
Archives, a filler Paragraph widget), and a near-black footer with four widget
columns (about + socials, Destination, Archives, contact info).

Brand colors: coral `#ff895d` (primary accent — CTA buttons, newsletter
`subs-wrap` background, active nav link, hover states, circular pagination),
light blue `#78d5ef` (secondary/Bootstrap-primary, focus rings only), body
text `#666666` on white, headings black `#000000`, muted meta `#b3b3b3`,
footer background `#141313`. Body font Poppins (weight 300, 16px, line-height
1.8); decorative watermark words in Abril Fatface (100px, `#e6e6e6`/`#ebebeb`)
sitting absolutely behind headings.

## Design reference (replication findings)

- **Original:** ColorLib "Explore" — travel/personal blog template
  (source: https://colorlib.com/wp/template/explore/). Listed in TEMPLATES.md
  under Blog (line 258; duplicate lines 390 and 2392 — mark every copy).
  Screenshot: `explore-free-template.jpg` (1200×946, reviewed visually in the
  browser).
- **Live preview URL:** https://preview.colorlib.com/theme/explore/ —
  reachable, fetched and analyzed. HTML saved to `/tmp/explore-prep/preview.html`
  (32 KB); stylesheet `css/style.css` (68 KB — design tokens below). Screenshot
  and preview agree (editorial travel blog, split hero, coral CTAs, watermark
  serif words, dark footer) — the preview DOM is authoritative.
- **Fonts:** body `font-family: "Poppins", Arial, sans-serif` (style.css line
  1553, overrides the Bootstrap `--font-family-sans-serif` Work Sans default);
  `font-size: 16px; line-height: 1.8; font-weight: 300; color: #666666`.
  Decorative watermark words use `font-family: "Abril Fatface", cursive`
  (100px in the hero slider, 100px and 60px in blog entries). Google Fonts via
  `<link>` in `index.html` (Poppins + Abril Fatface).
- **Buttons:**
  - `.btn.btn-primary` (theme override): `background: #ff895d; border: 1px
solid #ff895d; color: #fff`; hover → `background: transparent; color:
#ff895d`. The CTA markup is `class="btn btn-primary p-3 px-xl-4 py-xl-3"`
    ("Continue Reading"). In the hero slider the same button gets
    `border-radius: 30px` (`.hero-wrap .slider-text .btn-primary`); on blog
    cards it keeps the default Bootstrap radius (~4px).
  - `.btn.btn-white` (newsletter submit): `background: #fff; border: 1px solid
#fff; color: #000000`; hover color `#ff895d`.
  - `.tagcloud a`: uppercase 11px, `padding: 4px 10px`, `border-radius: 4px`,
    `border: 1px solid #ccc`, color `#000`; hover → `border: 1px solid #000`.
  - Pagination `.block-27 ul li a/span`: 40px circles, `border: 1px solid
#ff895d`; active item filled `#ff895d` with white text (used on the
    destination/archive list pages — optional on the single-page recreation).
- **Section backgrounds (from style.css):**
  - navbar `.ftco-navbar-light`: transparent, absolute, `top: 20px`; white
    links (14px, padding .9rem 20px); scrolled state: `position: fixed`,
    `background: #fff`, dark links, active link `#ff895d`.
  - hero `.owl-carousel.home-slider`: height 750px; `.slider-item` overlay
    `#000000` opacity .3; split layout (text `col-md-6` + image `col-md-6`);
    `.big` watermark 100px Abril Fatface `#e6e6e6` positioned `top: -20px;
left: -60px`; h1 40px black weight 700 letter-spacing 1px; p 18px
    `rgba(0,0,0,0.7)` weight 300; author avatar 80px circle; slider dots 10px
    circles `rgba(255,255,255,0.4)`, active `#fff`, at `bottom: 40px`.
  - intro `.ftco-intro`: `padding: 4em 0; padding-bottom: 0`; h1 34px weight
    300 with `<strong>` emphasis.
  - blog `.ftco-section`: `padding: 6em 0`; `.blog-entry` margin-bottom 6em;
    image height 400px (`.img-2` variant 300px); h3 32px weight 700 black;
    `.big` watermark 100px Abril Fatface `#ebebeb`; meta `#b3b3b3`; author
    avatar 80px circle.
  - sidebar `.sidebar-box`: `padding: 25px`, h3 18px; `.search-form` bg
    `#fafafa` padding 10px; `.block-21` popular-article items (thumb 80×80,
    heading 18px weight 300, meta 12px gray); `.subs-wrap` newsletter widget:
    `background: #ff895d`, white heading, email input transparent on a
    1px `rgba(255,255,255,0.4)` border, full-width white "Subscribe" submit
    (52px tall).
  - footer `.ftco-footer`: `background: #141313`, `padding: 6em 0`,
    font-size 14px; widget h2 18px white weight 400; links
    `rgba(255,255,255,0.7)` (hover `#fff`); social circles 50px
    `background: rgba(255,255,255,0.05)`, icon 26px.
- **Section order (1:1 from the preview DOM):**
  1. Navbar `#ftco-navbar.ftco_navbar.bg-dark.ftco-navbar-light` — logo
     "Explorer" (→ rename "Nomad"; font-weight 700, 20px) + menu: Home
     (dropdown: Home with slider / Home with full slider / Home with
     parallax) · Post (dropdown: Post with right sidebar / Post with left
     sidebar / Post no sidebar) · Archives (dropdown: Destination / Tag /
     Authors Post) · Pages (dropdown: Right Sidebar / Left Sidebar / Authors
     Page) · Contact. Mobile: hamburger toggle labelled "Menu".
  2. Hero `div.home-slider.js-fullheight.owl-carousel` — two
     `div.slider-item.js-fullheight` slides. Each: `div.row.slider-text` →
     `div.col-md-6.text`: `div.author` (80px circular avatar `person_1.jpg` /
     `person_2.jpg` + "Written by <h3>Dave Lewis</h3>, October 04, 2018"),
     `div.text-2`: `span.big` watermark word ("Europe" / "USA"),
     `h1` ("Switzerland famous for chocolate making" / "Hawaii known as the
     Big Island"), `p` excerpt ("A small river named Duden flows..."),
     `a.btn.btn-primary` "Continue Reading"; `div.col-md-6.js-fullheight.img`
     (bg image `bg_1.jpg` / `bg_2.jpg`). White dots at the bottom.
  3. Intro `div.ftco-intro` — centered h1: "I'm **Traveler & Blogger** from
     Paris, Italy Who Loves Documenting Adventures & Discoveries Around the
     World".
  4. Blog `section.ftco-section` → container → row:
     - main `div.col-lg-8`: five `div.blog-entry.ftco-animate` cards, each:
       `a.img` (bg image 400px, `image_1.jpg`…`image_5.jpg`), `div.text`:
       `span.big` watermark category word ("South America" — vary per card:
       Europe / USA / South America / Asia / Africa), `h3` title (preview
       repeats "Hawaii known as the Big Island" — paraphrase per card),
       `p` excerpt, `div.author` row (80px avatar + "Written by Dave Lewis,
       October 04, 2018"), `div.meta-wrap`: meta counters
       (`icon-heart` 3 · `icon-eye` 100 · `icon-comment` 5) + `a.btn.btn-
primary` "Continue Reading".
     - sidebar `div.col-lg-4` (widgets in order):
       a. search box `.sidebar-box` → `form.search-form` — input "Type a
       keyword and hit enter" + search icon (bg `#fafafa`).
       b. `.sidebar-box` h3 "Destination" — list: Africa (6) · Asia (8) ·
       Australia (2) · Europe (2) · North America (7) · South America (5).
       c. `.sidebar-box` h3 "Popular Articles" — three `.block-21` items
       (80×80 thumb + heading + meta "Oct. 04, 2018 Dave Lewis 19").
       d. `.sidebar-box` h3 "Tag Cloud" — 8 tags: dish · menu · food · sweet ·
       tasty · delicious · desserts · drinks.
       e. `.sidebar-box.subs-wrap` h3 "Subcribe to our Newsletter" (keep the
       original's typo or fix to "Subscribe" — recommend fixing) + short
       line "Far far away, behind the word mountains..." + `form.subscribe-
   form`: email input + white "Subscribe" submit (bg `#ff895d`).
       f. `.sidebar-box` h3 "Archives" — September 2018 (6) · August 2018 (8)
       · July 2018 (2) · June 2018 (7) · May 2018 (5) · April 2018 (3).
       g. `.sidebar-box` h3 "Paragraph" — lorem filler paragraph.
  5. Footer `footer.ftco-footer.ftco-bg-dark.ftco-section` (bg `#141313`) —
     four widget columns: "Explorer" (→ "Nomad": about text + social icon
     circles), "Destination" (same 6 links as sidebar), "Archives" (same 6
     months), "Have a Questions?" (203 Fake St. Mountain View, San Francisco,
     California, USA · +2 392 3929 210 · info@yourdomain.com). Copyright bar:
     "Copyright © <year> All rights reserved | This template is made with
     Colorlib" → paraphrase as "© 2026 Nomad — Travel blog template".
- The template ships multiple inner pages (post/destination/tag/author pages,
  alternative home layouts index2/index3) — NOT required; recreate the
  index.html single page only.

## Requirements

### Requirement: Navbar with logo, dropdown menu and scroll state

The system SHALL render a transparent navbar over the hero with the site logo
and a multi-dropdown menu that turns solid white on scroll.

#### Scenario: Transparent navbar content

- **GIVEN** the Nomad app is rendered
- **WHEN** the page loads at the top
- **THEN** the navbar SHALL be transparent, absolutely positioned over the
  hero, with the logo "Nomad" on the left and white 14px nav links
- **AND** the menu SHALL list Home · Post · Archives · Pages · Contact in that
  order
- **AND** Home SHALL open a dropdown with "Home with slider", "Home with full
  slider" and "Home with parallax"
- **AND** Post SHALL open a dropdown with "Post with right sidebar", "Post
  with left sidebar" and "Post no sidebar"
- **AND** Archives SHALL open a dropdown with "Destination", "Tag" and
  "Authors Post"
- **AND** Pages SHALL open a dropdown with "Right Sidebar", "Left Sidebar"
  and "Authors Page"

#### Scenario: Scrolled navbar

- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become fixed with a white background, a subtle
  shadow and dark links
- **AND** the active/current link SHALL turn coral `#ff895d`

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the menu is collapsed
- **THEN** a hamburger toggle labelled "Menu" SHALL be shown with
  `aria-expanded` reflecting the menu state
- **AND** activating it SHALL reveal the nav links and dropdowns stacked
  vertically

### Requirement: Hero split slider

The system SHALL render a full-height two-slide hero: text column on the left,
photo column on the right, with a dark overlay and bottom dots.

#### Scenario: Slide content

- **GIVEN** the hero section is rendered
- **WHEN** a slide is active
- **THEN** the left column SHALL show an 80px circular author avatar, the line
  "Written by Dave Lewis, October 04, 2018", a huge Abril Fatface watermark
  word ("Europe" / "USA", ~100px, light grey, offset behind the headline), a
  40px bold black headline ("Switzerland famous for chocolate making" /
  "Hawaii known as the Big Island"), an 18px excerpt, and a coral
  "Continue Reading" button (rounded, radius ~30px)
- **AND** the right column SHALL be a full-height background photo (picsum
  placeholder)
- **AND** the slide SHALL have a black overlay at ~0.3 opacity

#### Scenario: Slide navigation

- **WHEN** the user activates the next/prev control or a bottom dot
- **THEN** the second slide SHALL become active with its own author/headline/
  watermark content
- **AND** the bottom dots SHALL reflect the active slide (white active dot,
  translucent inactive dots)

### Requirement: Intro statement

The system SHALL render a centered one-line introduction under the hero.

#### Scenario: Intro text

- **GIVEN** the intro section is rendered
- **WHEN** the section loads
- **THEN** it SHALL show the headline "I'm Traveler & Blogger from Paris,
  Italy Who Loves Documenting Adventures & Discoveries Around the World" at
  34px weight 300 with "Traveler & Blogger" bolded
- **AND** the section SHALL have generous vertical padding (4em top)

### Requirement: Blog section with article cards

The system SHALL render a main column of five large article cards.

#### Scenario: Article card

- **GIVEN** the blog section is rendered
- **WHEN** the main column loads
- **THEN** it SHALL contain five cards, each with: a 400px photo (picsum
  placeholder), a light-grey Abril Fatface watermark category word (e.g.
  Europe / USA / South America), a 32px bold black headline, an excerpt, an
  author row (80px avatar + "Written by Dave Lewis, October 04, 2018"), meta
  counters (heart 3 · eye 100 · comment 5 — lucide `Heart`, `Eye`,
  `MessageCircle` icons), and a coral "Continue Reading" button
- **AND** the cards SHALL stack single-column with large spacing between them
  (~6em margin-bottom)

#### Scenario: Meta counters

- **WHEN** the card renders
- **THEN** the counters SHALL show heart/eye/comment icons with the numbers 3,
  100 and 5 respectively in muted `#b3b3b3`

### Requirement: Sidebar widgets

The system SHALL render a right sidebar with search, Destination, Popular
Articles, Tag Cloud, newsletter, Archives and Paragraph widgets in order.

#### Scenario: Search widget

- **GIVEN** the sidebar is rendered
- **WHEN** the first widget loads
- **THEN** it SHALL be a search box on a `#fafafa` background with an input
  placeholder "Type a keyword and hit enter" and a search icon

#### Scenario: Destination widget

- **WHEN** the second widget loads
- **THEN** it SHALL be titled "Destination" and list Africa (6) · Asia (8) ·
  Australia (2) · Europe (2) · North America (7) · South America (5)

#### Scenario: Popular Articles widget

- **WHEN** the third widget loads
- **THEN** it SHALL be titled "Popular Articles" and list three items, each
  with an 80×80 thumbnail, a headline and meta "Oct. 04, 2018 Dave Lewis 19"

#### Scenario: Tag Cloud widget

- **WHEN** the fourth widget loads
- **THEN** it SHALL be titled "Tag Cloud" and show eight uppercase bordered
  tags: dish · menu · food · sweet · tasty · delicious · desserts · drinks
- **AND** hovering a tag SHALL darken its border

#### Scenario: Newsletter widget

- **WHEN** the fifth widget loads
- **THEN** it SHALL have the coral `#ff895d` background with the heading
  "Subscribe to our Newsletter", a short blurb, an email input and a full-width
  white "Subscribe" button
- **AND** submitting an invalid email SHALL show a validation error and SHALL
  NOT submit
- **AND** submitting a valid email SHALL show a success confirmation

#### Scenario: Archives and Paragraph widgets

- **WHEN** the remaining widgets load
- **THEN** the Archives widget SHALL list September 2018 (6) · August 2018
  (8) · July 2018 (2) · June 2018 (7) · May 2018 (5) · April 2018 (3)
- **AND** the last widget SHALL be titled "Paragraph" with filler text

### Requirement: Footer

The system SHALL render a near-black footer with four widget columns and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the footer loads
- **THEN** the footer SHALL have background `#141313` and four columns:
  "Nomad" (about text + circular social icon links), "Destination" (six
  links), "Archives" (six month links) and "Have a Questions?" (street
  address, phone `+2 392 3929 210`, email `info@yourdomain.com`)
- **AND** a copyright line SHALL read "© 2026 Nomad — Travel blog template"
  (paraphrase of the ColorLib credit line)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Nomad app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Nomad — Travel Blog Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (split hero
  stacks on mobile: text above photo)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/nomad`
      (`scripts/verify-app.sh nomad` in FAST_MODE; full `npm run gate` in CI).
- [ ] Visual fidelity: transparent navbar (logo + 5-link menu with 4
      dropdowns, white→fixed-white scroll state), 2-slide split hero (author
      row, Abril Fatface watermark, headline, excerpt, coral rounded CTA,
      photo column, dots), centered intro line, blog section (5 cards with
      photo / watermark word / title / author row / heart-eye-comment counters
      / coral CTA), sidebar (search, Destination, Popular Articles, Tag Cloud,
      coral newsletter, Archives, Paragraph), dark footer (4 columns +
      copyright) match the Explore preview 1:1.
- [ ] Design tokens in `@theme`: coral `#ff895d`, light blue `#78d5ef` (focus
      rings), body text `#666666`, headings `#000000`, muted `#b3b3b3`, footer
      `#141313`, search bg `#fafafa`, watermarks `#e6e6e6` / `#ebebeb`; Poppins + Abril Fatface via Google Fonts.
- [ ] Buttons: coral `#ff895d` "Continue Reading" (rounded ~30px in hero,
      default radius on cards), white "Subscribe" on the coral newsletter
      widget; bordered uppercase tags in the Tag Cloud.
- [ ] Placeholder images use `picsum.photos/seed/nomad-<n>/<w>/<h>` (hero
      photos, blog photos, avatars); lucide-react icons (heart/eye/comment,
      search, socials via inline SVG where needed); no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Explore"), preview URL
      (https://preview.colorlib.com/theme/explore/), design tokens, and what
      differs (name, placeholders, paraphrased card titles, inner pages not
      recreated).

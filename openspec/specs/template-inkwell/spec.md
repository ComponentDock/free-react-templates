# Template: Inkwell (Blog)

## Purpose

Inkwell is a single-page personal blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Axole"
personal blog website template design (see TEMPLATES.md, Blog category, line
243), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Axole" — minimalist editorial personal blog:
  fixed white navbar, a typographic hero built around a giant mixed-style
  wordmark (solid + outlined letters), an alternating image/text blog feed
  with huge underlined headlines, numbered pagination, a gold newsletter
  band, and a light-gray four-column footer with a dark copyright bar
  (source: https://colorlib.com/wp/template/axole/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/axole/`
  (HTTP 200, ~24KB HTML). DOM + `css/style.css` (63KB) + `css/flaticon.css`
  extracted and analyzed; tokens below come from that stylesheet.
- **Visual design (from screenshot `axole-website-template.jpg` + DOM):**
  high-contrast minimalist magazine/editorial aesthetic on a pale gray-white
  background. Thin white top bar with nav links BLOG / ABOUT / CONTACT
  (uppercase) right and the "Axole." wordmark left — a bold "A" and "e."
  with a thin outlined "xol" middle (1px text-stroke, transparent fill).
  Hero: "A PERSONAL BLOG" label (uppercase, letterspaced, small underline
  bar), the massive "Axole." wordmark again (14vw, weight 800, dark gray),
  and a light-gray thin tagline "I am a Blogger & Photographer Based in
  Philippines". Below: alternating image/text blog rows — square-ish
  pop-art/photo image (280px tall) + content column with gold uppercase meta
  (ADMIN · JAN. 30, 2021 · 3 COMMENTS), a huge underlined serif headline
  (90px desktop), an excerpt, and an uppercase "Learn More" link. Accent
  color is gold `#f4bf2c` (meta icons, comment link, hover underlines, link
  color); near-black `#111111` for the Subscribe button and copyright bar;
  footer background `#eeeeee`. Newsletter + footer are below the fold in the
  screenshot but fully present in the DOM (gold band with email input +
  dark Subscribe button; 4-column footer with social chips, Explore links,
  Recent Posts thumbs, contact info).
- **Section order (1:1) from the DOM:**
  1. Navbar (`nav.navbar.navbar-expand-lg.fixed-top.ftco-navbar-light`,
     `background: #fff`, `padding: 1em 0`): brand "Axole." (`a.navbar-brand`,
     `#111111`) left → `ul.navbar-nav.ms-auto`: Blog (`li.nav-item` +
     `a.nav-link.active`), About, Contact (uppercase treatment, small) →
     mobile toggler button (`navbar-toggler`, `fa fa-bars` + "Menu" label,
     collapses into `#navbarSupportedContent`).
  2. Hero (`section.hero-wrap`, height 750px, `position: relative`; `.overlay`
     `#111111` at `opacity: 0` — no visible overlay, light background):
     `div.container` → `div.row.no-gutters.slider-text.align-items-center.
justify-content-end` → `div.col-lg-8` → `div.text.rellaxHero`:
     - `span.subheading` "A Personal Blog" — uppercase 12px, weight 500,
       `letter-spacing: 3px`, `#111111`, `margin-left: -70px` (offset so the
       underline bar aligns with the wordmark), plus a 45×1px `#111111`
       underline bar after it (`:after`).
     - `h1.mb-3` "A`<span>xol</span>`e." — `font-weight: 800`, `color:
#444444`, `font-size: 14vw`, `line-height: 1.2` (25vw below 992px).
       The `span` is the outlined-letter effect: `color: black`,
       `-webkit-text-fill-color: transparent`, `-webkit-text-stroke: 1px
black`.
     - `h2` tagline "I am a Blogger & Photographer Based in Philippines" —
       30px, `font-weight: 200`, `letter-spacing: 1px`, `#919191`, right
       column (col-lg-9 justify-content-end).
     - Rellax parallax drift on the text (`data-rellax-speed="-3"`).
  3. Blog feed (`section.ftco-section.bg-light.ftco-no-pt`, `#f8f9fa`, no
     top padding) → `div.container-xl` → `div.row` with **7 × `div.blog-
entry`** rows (`div.col-md-12`). Each row: inner `div.row.g-0` →
     image `div.col-md-7` (`div.img.rellax`, height 280px,
     `background-image` cover, `data-rellax-speed="-5"`; `order-md-last` on
     even rows so images alternate sides) + text `div.col-md-5`
     (`div.text.py-5.ps-md-5.my-lg-5` / `pe-md-5` on even rows):
     - `p.meta` — uppercase 12px, weight 500, `letter-spacing: 2px`;
       spans: `fa fa-user` Admin, `fa fa-calendar` Jan. 30, 2021, `fa
fa-comment` 3 Comments — icons colored gold `#f4bf2c`.
     - `h2.mb-4` title link "Writing A Novel with A Heart" — `font-size:
90px` (desktop), weight 400, `line-height: 1.1`, link color
       `#444444`, `text-decoration: underline`; hover underline color gold
       `#f4bf2c`.
     - excerpt `p.mb-4` (the standard "Far far away, behind the word
       mountains…" ColorLib lorem).
     - `a.btn-custom` "Learn More" + arrow icon — effective cascade: uppercase
       13px, weight 500, `letter-spacing: 2px`, `color: #444444` (an earlier
       white-translucent rule is overridden later in the cascade; the #444
       uppercase link style is what renders on the light feed).
  4. Pagination (`div.row.mt-5.pt-lg-5` → `div.col.text-center` →
     `div.block-27`): `ul` with `‹` / 1 (`li.active`) / 2 / 3 / 4 / 5 / `›` —
     items `display: inline-block`, `margin: 0 5px`; links/spans 40×40px,
     `line-height: 40px`, `border-radius: 4px`, `#000000`; active + hover →
     background `#111111`, text `#fff`.
  5. Newsletter band (`section.ftco-intro.py-5.bg-primary` — the template
     overrides Bootstrap `.bg-primary` to `#f4bf2c` gold): `div.container` →
     centered `div.col-lg-10` → `div.col-md-8.text-center.mb-lg-4`: `h2.mb-0`
     "Newsletter - Stay tune and get the latest update" (`#111111`, 27px,
     weight 500) + `p` "Far far away, behind the word mountains" → right
     half `div.col-md-5.border-left.d-flex.align-items-center` →
     `form.subscribe-form` → `div.form-group.d-flex`: `input.form-control`
     (placeholder "Enter email address"; focus border gold `#f4bf2c`) +
     `a.btn.btn-darken` "Subscribe" (`background: #111111`, 1px `#111111`
     border, white text; hover → transparent bg, `#111111` text).
  6. Footer (`footer.ftco-footer`, `background: #eeeeee`, `padding: 5em 0 0`)
     → `div.container-xl` → `div.row.mb-5.justify-content-between`, four
     widgets:
     a. Brand (`col-md-6.col-lg`): `h2.logo` + brand link "Axole." (20px,
     `#111111`, with a gold `#f4bf2c` span) + blurb "A small river named
     Duden flows by their place and supplies it with the necessary
     regelialia." + `ul.ftco-footer-social` — three 40×40px
     `border-radius: 4px` chips, background `#c4c4c4`, white icons
     (`fa fa-twitter`, `fa fa-facebook`, `fa fa-instagram`); hover →
     background `#111111`.
     b. Explore (`col-md-6.col-lg-2`): widget heading "Explore" (14px
     uppercase, weight 700, `letter-spacing: 2px`, `#111111`,
     `margin-bottom: 40px`) + links About / Blog / Contact us
     (`#666666`, hover gold; ion arrow prefix icons `#111111`).
     c. Recent Posts (`col-md-6.col-lg`): heading + 3 × `div.block-21`
     rows: 50×50px rounded thumb (`a.blog-img.img.rounded`,
     background cover) + text (width `calc(100% - 50px)`,
     `padding-left: 20px`): meta line (`fa fa-calendar` Jan. 30, 2021 ·
     `fa fa-user` Admin, 12px `#999999`) + `h3.heading` link
     "Creativity and Inspiration" (16px, weight 400, `#666666`, hover
     gold).
     d. Have a Questions? (`col-md-6.col-lg`, `div.block-23`): heading +
     `ul` with three rows (15px, `margin-bottom: 15px`): `fa fa-map-
   marker` "203 Fake St. Mountain View, San Francisco, California,
     USA" · `fa fa-phone` "+2 392 3929 210" · `fa fa-paper-plane`
     "info@yourdomain.com" — icon column 40px (`#111111`), text
     `rgba(0,0,0,0.8)`.
  7. Copyright bar (`div.container-fluid.px-0.py-5.bg-darken` — `#111111`):
     centered 14px text: "Copyright © <year> All rights reserved | This
     template is made with ♥ by Colorlib" (paraphrase the credit per repo
     conventions — keep the "made with ♥" kind of content, drop the Colorlib
     attribution).
- **Recreation decisions:** new name **Inkwell** (a writer's ink pot — fits
  a personal blog brand; no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/`). Brand renders "Inkwell." with the middle segment
  outlined via a span + Tailwind arbitrary property
  (`[-webkit-text-stroke:1px]` with transparent text fill) mirroring the
  original's "xol" outline; keep the giant 14vw weight-800 wordmark. Blog
  rows: 7 entries with picsum placeholders alternating sides (parallax drift
  optional — implement a subtle scroll-linked translateY, or skip; the
  layout must not depend on it). Newsletter form validates email (zod) with
  a success state. Pagination is static (5 pages, page 1 active). Social
  icons are inline SVGs (lucide-react removed brand icons). Footer contact
  data is placeholder text. Dark-mode `.dark` variants per repo conventions.

Inkwell lives in `apps/inkwell` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Design tokens (extracted from `css/style.css`)

- Font (Google Fonts, Poppins 200–800): **Poppins** — wordmark h1 (800,
  14vw, `#444444`), blog titles h2 (400, 90px, `#444444`), tagline (200,
  30px, `#919191`), subheading/meta (500, 12px, uppercase, letterspaced),
  footer headings (700, 14px, uppercase, `letter-spacing: 2px`).
- Brand gold: **`#f4bf2c`** — link color (`a`), newsletter band bg
  (`.bg-primary` override), form focus border, blog meta icons, hover
  underline color, footer logo span, footer link hovers, block-23 contact
  icons.
- Ink: **`#111111`** — subheading, navbar brand, hero overlay (opacity 0),
  btn-darken bg/border, pagination active bg, social chip hover bg,
  copyright bar bg, footer headings, contact icons.
- Title gray: **`#444444`** — hero wordmark, blog title links.
- Muted gray: **`#919191`** — hero tagline.
- Surfaces: navbar `#fff`; blog section `#f8f9fa` (bg-light); footer
  `#eeeeee`; copyright bar `#111111`; social chips `#c4c4c4`; footer link
  text `#666666`; footer meta `#999999`.
- Shapes: btn-custom radius 2px (uppercase link style); pagination items +
  social chips `border-radius: 4px` (40×40px); footer thumbs 50×50px
  rounded; newsletter input standard 0.25rem radius.
- Layout rhythm: navbar `padding: 1em 0`; hero 750px (text right-aligned,
  col-lg-8); blog rows 7/5 column split, images 280px; blog h2 90px desktop
  (25vw hero h1 on mobile); newsletter `py-5` centered, form right half with
  `border-left`; footer `padding: 5em 0 0`, widget heading `margin-bottom:
40px`; copyright bar `py-5`, 14px text.

## Requirements

### Requirement: Navbar

The system SHALL render a fixed white navbar with a wordmark brand, three
nav links with an active state, and a mobile toggle.

#### Scenario: Desktop navbar

- **GIVEN** the Inkwell page is rendered
- **WHEN** the navbar is displayed at the top of the page
- **THEN** it SHALL show the wordmark "Inkwell." on the left
- **AND** it SHALL show the links Blog, About, and Contact aligned right
- **AND** the Blog link SHALL be marked active

#### Scenario: Mobile toggle

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the collapsed menu SHALL expand showing the nav links
- **AND** the toggle SHALL expose `aria-expanded` and an accessible label

### Requirement: Hero

The system SHALL render a tall typographic hero with a label, a giant
mixed-style wordmark, and a tagline, right-aligned.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the uppercase label "A Personal Blog" with a small
  underline bar
- **AND** it SHALL show the giant wordmark "Inkwell." (weight 800, ~14vw)
  with the middle letters outlined (transparent fill, 1px stroke)
- **AND** it SHALL show the thin light-gray tagline "I am a Blogger &
  Photographer Based in Philippines"

#### Scenario: Hero layout

- **GIVEN** the hero is displayed on a wide viewport
- **WHEN** the content is laid out
- **THEN** the text block SHALL be right-aligned within its container

### Requirement: Blog feed

The system SHALL render 7 blog entry rows with alternating image/text
layout, meta line, large underlined title, excerpt, and a Learn More link.

#### Scenario: Entry row

- **GIVEN** the blog feed is displayed
- **WHEN** an entry row is rendered
- **THEN** it SHALL show a cover image on one side (280px tall)
- **AND** it SHALL show the meta line with Admin, a date (e.g. "Jan. 30,
  2021"), and a comment count, with gold icons and uppercase letterspaced
  text
- **AND** it SHALL show the large underlined title link (e.g. "Writing A
  Novel with A Heart")
- **AND** it SHALL show an excerpt paragraph and an uppercase "Learn More"
  link with an arrow icon

#### Scenario: Alternating layout

- **GIVEN** the feed has multiple entries
- **WHEN** rows are rendered sequentially
- **THEN** the image SHALL alternate sides on consecutive rows

#### Scenario: Title hover

- **GIVEN** a blog entry title is displayed
- **WHEN** the user hovers the title link
- **THEN** the underline SHALL turn gold

### Requirement: Pagination

The system SHALL render centered page-number pagination with an active
state.

#### Scenario: Page list

- **GIVEN** the blog feed is displayed
- **WHEN** the pagination is rendered below the entries
- **THEN** it SHALL show prev/next arrows and 5 page numbers (40×40px,
  rounded)
- **AND** the current page SHALL be highlighted with a dark background and
  white text

### Requirement: Newsletter band

The system SHALL render a gold newsletter section with a heading, blurb,
email input, and subscribe button.

#### Scenario: Band content

- **GIVEN** the newsletter section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL sit on the gold brand background
- **AND** it SHALL show the heading "Newsletter - Stay tune and get the
  latest update" and a short blurb
- **AND** it SHALL show an email input with placeholder "Enter email
  address" and a dark "Subscribe" button next to it

#### Scenario: Subscribe validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters an invalid email and submits
- **THEN** the form SHALL show a validation error and SHALL NOT submit
- **WHEN** the user enters a valid email and submits
- **THEN** the form SHALL show a success confirmation

### Requirement: Footer

The system SHALL render a light-gray four-column footer and a dark
copyright bar.

#### Scenario: Brand column

- **GIVEN** the footer is displayed
- **WHEN** the brand column is rendered
- **THEN** it SHALL show the wordmark with a gold accent segment and a short
  about blurb
- **AND** it SHALL show three round social icon buttons (twitter, facebook,
  instagram) that darken on hover

#### Scenario: Link and post columns

- **GIVEN** the footer is displayed
- **WHEN** the Explore column is rendered
- **THEN** it SHALL show the heading "Explore" and links About, Blog, and
  Contact us with arrow icons
- **WHEN** the Recent Posts column is rendered
- **THEN** it SHALL show three rows, each with a 50px round thumbnail, a
  small meta line, and a post title link

#### Scenario: Contact column and copyright

- **GIVEN** the footer is displayed
- **WHEN** the "Have a Questions?" column is rendered
- **THEN** it SHALL show an address, a phone number, and an email with icon
  prefixes
- **WHEN** the copyright bar is rendered
- **THEN** it SHALL show a dark background with centered copyright text and
  a "made with ♥" credit

## Verification checklist

- [ ] `npm run verify:app inkwell` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (navbar → hero → blog feed
      (7 alternating rows) → pagination → newsletter band → footer →
      copyright bar)
- [ ] Tokens wired through `@theme`: gold `#f4bf2c`, ink `#111111`, title
      gray `#444444`, muted `#919191`, surfaces `#f8f9fa` / `#eeeeee` /
      `#111111`
- [ ] Poppins (200–800) loaded via Google Fonts `<link>` in `index.html`
- [ ] Wordmark middle letters outlined via transparent fill + 1px stroke
      (Tailwind arbitrary property), 14vw weight-800 on the hero
- [ ] Placeholder images use `https://picsum.photos/seed/inkwell-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Blog rows alternate image side; meta icons gold; title underline turns
      gold on hover
- [ ] Newsletter form validates email (zod) with success state; a11y labels
      and focus rings
- [ ] Mobile navbar toggle with aria-expanded; pagination active state
- [ ] Footer social chips darken on hover; contact icons per token
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)

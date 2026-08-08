# Template: Newsstand (Magazine & Blog Template)

## Purpose

Newsstand is a single-page magazine/blog landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Webmag" website template design (see TEMPLATES.md — TWO copies:
lines 294, 2221; mark ALL `[x]` when done), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Webmag" — modern magazine & blog template
  (source: https://colorlib.com/wp/template/webmag/). `<title>` in the live
  preview: "WebMag - Modern Magazine & Blog Template".
- **Preview URL:** `https://preview.colorlib.com/theme/webmag/` returns
  **HTTP 200** (confirmed 2026-08-08, ~36.5 KB HTML — the live preview portal
  serves this slug directly, no pages.dev fallback needed). It is built on a
  Bootstrap 5 grid + Font Awesome 7.1 icon set, with a single custom
  stylesheet `assets/css/style.css` (~180 KB, parsed for tokens below).
- **Preview CSS:** `https://preview.colorlib.com/theme/webmag/assets/css/style.css`
  (custom, non-Tailwind; Bootstrap CSS vars `--bs-*` present) +
  `assets/fontawesome/css/all.min.css` (icons).
- **Screenshot:** TEMPLATES.md `webmag-free-template.jpg` (1200×946) viewed in
  the browser. It matches the live preview 1:1: light theme, white
  background, card-based magazine layout, bold uppercase "WEBMAG" logo, nav
  with category-colored underline accents (orange/purple/green), two large
  hero post cards with image-bottom overlays (colored category tag + date +
  bold title), then a "Recent Posts" heading + 3-column card grid. The
  screenshot shows an older menu variant ("Jquery" item); the live preview is
  the primary reference (menu: News, Popular, Web Design, JavaScript, CSS,
  TypeScript).
- **Visual design (from screenshot + live DOM):** clean, minimalist,
  light-themed tech magazine. Fixed white 70px header with a thin
  `#dfe3eb` bottom border; category color-coding is the signature: every post
  card carries a small uppercase category badge (green `#4BB92F` Web Design,
  orange `#ff8700` JavaScript, purple `#8d00ff` CSS, blue `#0078ff`
  TypeScript) and nav items hover to their category color. Post cards are
  image cards with a dark-bottom gradient overlay holding the badge, date and
  bold 18px title. Grey band (`#f8f9fb`) sections alternate with white.
  Rounded corners (10px cards, 8px inputs, 4px badges). Typography: Nunito
  (300/600) for body, Nunito Sans (700) for headings — clean modern sans.
  Light footer (white, not dark) with logo, link columns, an orange
  paper-plane newsletter button and social icons.
- **Section order (1:1):**
  1. Header (`header#header` → `div#nav` → `div#nav-fixed`, fixed top, height
     70px, white bg, inset bottom border `0 -1px 0 0 #dfe3eb`, z-index 90):
     `.nav-logo` (logo image, height 70px) left; `.nav-menu` ul — News,
     Popular, Web Design (li.cat-1), JavaScript (li.cat-2), CSS (li.cat-3),
     TypeScript (li.cat-4); each `a` is `position: relative; padding: 25px
20px; text-transform: capitalize; box-shadow: -1px 0 0 0 #dfe3eb inset`
     (hairline dividers); hover/focus colors per category (e.g.
     `.nav-menu li.cat-2 a:hover { color: #ff8700 }`); right `.nav-btns`:
     aside/hamburger button (`.aside-btn`, `aria-controls="nav-aside"`
     `aria-expanded="false"`, `aria-label="Open menu"`) + search button
     (`.search-btn`, `aria-label="Open search"`). A `.search-form` overlay
     covers the nav area (white bg, `opacity: 0; visibility: hidden;` until
     opened) containing `input.search-input` — height 46px, `2px solid
#dfe3eb` border, `border-radius: 8px`, `font-weight: 300`, color
     `#212631`, placeholder "Enter Your Search ...", focus border `#ff8700`
     with `0 0 0 3px rgba(255,135,0,.15)` ring.
  2. Off-canvas aside drawer (`div#nav-aside`, opened by the hamburger):
     nav links, a widget-posts block (`.section-row` with h3 "Recent Posts"
     - `.post.post-widget` list: small thumbnail + 15px title, `display:
flex; gap: 16px`), a "Follow us" block with social links, and a close
       button.
  3. Section 1 (white, main content): `.container > .row` with a `col-md-8`
     main column and a `col-md-4` sidebar. Main: `.section-title` h2
     "Recent Posts" (`font-size: 28px; text-transform: capitalize;
margin-bottom: 40px`) + six `.post` cards (two rows × `col-md-4`):
     `a.post-img` (image) + `.post-body` (`position: absolute; bottom: 0;
left: 0; right: 0; padding: 24px 20px;` overlay) containing
     `.post-meta` (`margin: 16px 0 12px; display: flex; align-items: center;
gap: 8px`) — `a.post-category.cat-N` badge (`font-size: 11px;
text-transform: uppercase; letter-spacing: 0.5px; padding: 5px 12px;
font-weight: 700; border-radius: 4px; color: #FFF; background-color:
#212631` or the cat-N color) + `span.post-date` — and `h3.post-title`
     (`font-size: 18px; line-height: 1.4`) link, hover `#ff8700`. Sidebar:
     `.aside-widget` with `.section-title` h2 "Most Read" + 4–5
     `.post.post-widget` items (thumbnail left, title right).
  4. Section 2 (`div.section.section-grey`: `background-color: #f8f9fb;
border-top/bottom: 1px solid #dfe3eb`): `.section-title.text-center` h2
     "Featured Posts" + two large `.post.post-thumb` cards (`col-md-6`,
     `position: relative; border-radius: 10px; overflow: hidden;` — image +
     same overlay meta/title pattern).
  5. Section 3 (white): main `col-md-8` — `.section-title` h2 "Featured
     Posts" + four `.post` cards (`col-md-4`-style grid) + an ad box
     (placeholder image/bordered box); sidebar `col-md-4` — `.aside-widget`
     "Most Read" `.post-widget` list, `.category-widget` (`.section-title`
     h2 "Categories" + `ul li a.cat-N` — e.g. Web Design 340, JavaScript 74,
     TypeScript 41, CSS 35 — each link colored per cat-N, count in a `<span>`
     with `background-color` of the category) and `.tags-widget` (`ul li a`
     tag pills: Chrome, CSS, Tutorial, Backend, TypeScript, Design,
     Development, JavaScript, Website).
  6. Footer (`footer#footer`: `margin-top: 40px; padding-bottom: 40px`,
     light/white): `.container > .row` — `col-md-5`: `.footer-widget` with
     `.footer-logo` (logo), `.footer-nav` (Privacy Policy, Advertisement),
     `.footer-copyright` (`color: #5c6a7d; font-size: 13px; margin-top:
20px` — "© <year> All rights reserved | ... made with <heart> by
     Colorlib" → rebrand); `col-md-4` split into two `col-md-6`
     `.footer-widget`s: "About Us" `.footer-links` (About Us, Join Us,
     Contacts) and "Categories" links; `col-md-3`: `.footer-widget` h3
     "Join our Newsletter" + `.footer-newsletter` (label "Email address",
     `form > input.input[type=email]` placeholder "Enter your email", focus
     ring `#ff8700`, and `button.newsletter-btn` — 48px square, `background:
#ff8700; color: #fff; border: none; border-radius: 6px;` paper-plane
     icon, `aria-label="Subscribe"`) + `ul.footer-social` (Facebook,
     X, Pinterest, YouTube, TikTok icon links).

## Design tokens (from `assets/css/style.css`)

- **Brand orange** `#ff8700` — newsletter button bg, cat-2 (JavaScript)
  badge/nav hover, post-title hover, reply link, author-social hover, focus
  rings (`0 0 0 3px rgba(255,135,0,.15)`), category-widget count bg for
  cat-2. Put in `@theme` as `--color-brand-*` (500 `#ff8700`, hover 600
  `#e67a00`-ish, ring `rgba(255,135,0,.15)`).
- **Category accents:** cat-1 green `#4BB92F` (Web Design) · cat-2 orange
  `#ff8700` (JavaScript) · cat-3 purple `#8d00ff` (CSS) · cat-4 blue
  `#0078ff` (TypeScript).
- **Neutrals:** ink `#212631` (headings, blockquote text, search input
  text) · body copy `#3d455c` (`.main-post` paragraph color) · muted
  `#5c6a7d` (footer copyright) · hairline/border `#dfe3eb` (nav divider,
  section-grey borders, input border, post-date on dark images) · grey band
  `#f8f9fb` (section-grey, post-author bg, blockquote bg).
- **Fonts:** Nunito (300 body/weights, 600) + Nunito Sans (700 headings) —
  served in the preview via Cloudflare cf-fonts `@font-face` blocks; our
  recreation loads the same families from Google Fonts in `index.html`.
- **Radii:** cards `10px` (post-thumb), inputs `8px` (search), author box
  `8px`, newsletter button `6px`, category badge `4px`.
- **Shapes:** category badge = uppercase 11px / letter-spacing 0.5px / 700 /
  padding 5px 12px / radius 4px / white on dark or category color; newsletter
  button = 48px square orange with white paper-plane icon; nav links =
  padding 25px 20px with 1px inset dividers; post-title = 18px/1.4
  (15px/1.45 in widgets).
- **Section backgrounds:** white (default) ↔ `#f8f9fb` grey band with 1px
  `#dfe3eb` top+bottom borders; footer light white; image overlays darken
  toward the bottom under the meta/title (`.post-body` absolute overlay).
- **Header:** fixed, height 70px, white, inset bottom hairline; logo block
  height 70px; z-index 90 (search overlay z-10 within nav).
- **Container:** Bootstrap `container`-style max-width (1320px at xl with
  15px gutters) — Tailwind equivalent `mx-auto max-w-7xl px-4`.

## Requirements

### Requirement: Header navigation

The system SHALL render a fixed white header with the brand logo, category
nav links, a search toggle and an aside-menu toggle.

#### Scenario: Header content

- **GIVEN** the Newsstand page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand wordmark "Newsstand" on the left
- **AND** SHALL show nav links for News, Popular, Web Design, JavaScript, CSS
  and TypeScript, each with a hairline divider and a category-colored hover
  state
- **AND** SHALL show a search button and a hamburger/aside button on the
  right

#### Scenario: Mobile behavior

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** the nav links SHALL be reachable via the aside drawer
- **AND** the aside toggle SHALL expose the drawer state via aria-expanded

### Requirement: Search overlay

The system SHALL provide a search overlay covering the header with an input
and a visible focus ring.

#### Scenario: Search open/close

- **GIVEN** the header is rendered
- **WHEN** the user activates the search button
- **THEN** an overlay SHALL cover the nav area with a search input
  (placeholder "Enter Your Search ...")
- **AND** focusing the input SHALL show the brand-orange focus ring
- **AND** the user SHALL be able to close the overlay (Esc or close action)

### Requirement: Aside drawer

The system SHALL render an off-canvas drawer with nav links, a "Recent Posts"
widget list and "Follow us" social links.

#### Scenario: Drawer content

- **GIVEN** the aside drawer is opened
- **THEN** it SHALL show the same nav links stacked
- **AND** SHALL show a "Recent Posts" widget list (thumbnail + title rows)
- **AND** SHALL show a "Follow us" heading with social icon links
- **AND** SHALL show a close control

### Requirement: Recent Posts section

The system SHALL render a "Recent Posts" section with a 3-column grid of six
image post cards, each with a category badge, date and title overlaid at the
bottom of the image.

#### Scenario: Post cards

- **GIVEN** the Recent Posts section is displayed
- **WHEN** the section renders
- **THEN** it SHALL show the heading "Recent Posts" (28px, capitalized)
- **AND** SHALL show six post cards (two rows of three), each with an image,
  a colored category badge (green/orange/purple/blue per category), a date,
  and a bold title link
- **AND** the card meta and title SHALL overlay the bottom of the image

#### Scenario: Category badges

- **GIVEN** a post card is rendered
- **WHEN** the category badge is inspected
- **THEN** the badge SHALL be uppercase, small, and colored by category
  (Web Design `#4BB92F`, JavaScript `#ff8700`, CSS `#8d00ff`, TypeScript
  `#0078ff`)

### Requirement: Most Read sidebar widget

The system SHALL render a sidebar "Most Read" widget listing posts as
thumbnail + title rows.

#### Scenario: Widget list

- **GIVEN** the sidebar is rendered
- **WHEN** the Most Read widget is displayed
- **THEN** it SHALL show the heading "Most Read"
- **AND** SHALL show at least four rows, each with a small thumbnail and a
  15px title link

### Requirement: Featured Posts grey section

The system SHALL render a grey band section with a centered "Featured Posts"
heading and two large post cards.

#### Scenario: Grey band content

- **GIVEN** the page is scrolled to the grey section
- **WHEN** the section is displayed
- **THEN** it SHALL have a `#f8f9fb` background with `#dfe3eb` top and bottom
  hairlines
- **AND** SHALL show the centered heading "Featured Posts"
- **AND** SHALL show two large rounded post cards (image + overlay badge,
  date and title)

### Requirement: Second posts section with sidebar widgets

The system SHALL render a white section with four post cards plus sidebar
widgets for Most Read, Categories and Tags.

#### Scenario: Posts and ad

- **GIVEN** the section is rendered
- **WHEN** the main column is displayed
- **THEN** it SHALL show the heading "Featured Posts" with four post cards
- **AND** SHALL show a placeholder ad box

#### Scenario: Categories widget

- **GIVEN** the sidebar is rendered
- **WHEN** the Categories widget is displayed
- **THEN** it SHALL show the heading "Categories"
- **AND** SHALL show category links (Web Design 340, JavaScript 74,
  TypeScript 41, CSS 35), each tinted with its category color and carrying a
  colored count

#### Scenario: Tags widget

- **GIVEN** the sidebar is rendered
- **WHEN** the Tags widget is displayed
- **THEN** it SHALL show tag pill links (Chrome, CSS, Tutorial, Backend,
  TypeScript, Design, Development, JavaScript, Website)

### Requirement: Footer

The system SHALL render a light footer with the brand, legal links,
copyright, About/Categories link columns, a newsletter form and social icons.

#### Scenario: Footer content

- **GIVEN** the Newsstand page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand logo with Privacy Policy and Advertisement
  links and a copyright line
- **AND** SHALL show an "About Us" link column (About Us, Join Us, Contacts)
  and a "Categories" link column
- **AND** SHALL show a "Join our Newsletter" form with an email input, a
  label and an orange paper-plane subscribe button
- **AND** SHALL show social icon links (Facebook, X, Pinterest, YouTube,
  TikTok)

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits a valid email
- **THEN** the form SHALL show a confirmation state (no network required)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a main
landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Newsstand app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Newsstand — Magazine & Blog Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/newsstand`
- [ ] `npm run lint` passes for `apps/newsstand`
- [ ] `scripts/verify-app.sh newsstand` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Header: fixed white 70px, "Newsstand" logo, News/Popular/Web Design/
      JavaScript/CSS/TypeScript links with dividers + category hover colors,
      search + aside toggles (aria-expanded)
- [ ] Search overlay: covers nav, "Enter Your Search ..." input, orange
      focus ring, closes on Esc/close
- [ ] Aside drawer: stacked links, "Recent Posts" widget rows, "Follow us"
      social links, close control
- [ ] Recent Posts: 28px capitalize heading + 6 image post cards (3×2) with
      overlay category badge (cat colors) + date + 18px title
- [ ] Most Read sidebar widget: 4+ thumbnail+title rows
- [ ] Featured Posts grey band: #f8f9fb + #dfe3eb hairlines, centered heading,
      2 large rounded cards (10px)
- [ ] Second section: "Featured Posts" + 4 cards + ad box; sidebar Categories
      (colored links + counts) + Tags pills
- [ ] Footer: light, logo + legal links + copyright, About/Categories
      columns, newsletter form (label + input + 48px orange send button) +
      social icons (FB/X/Pinterest/YouTube/TikTok)
- [ ] Newsletter submit shows a confirmation state
- [ ] Placeholder images via seeded picsum (`seed/newsstand-<n>/<w>/<h>`)

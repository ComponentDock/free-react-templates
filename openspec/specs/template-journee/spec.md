# Template: Journee (Travel)

## Purpose

Journee is a single-page travel agency / tour booking template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tourbi" travel HTML template design (see TEMPLATES.md, line
517 under **Bootstrap (216)** — duplicate rows at line 1207 under **Business
(365)** and line 2999 under **Travel (44)**, same template, ONE app only),
built under a different name ("Journee" — French for "journey / day trip",
matching the source's tour-booking positioning) with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and
the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Tourbi" — free travel / tour booking HTML template
  (source: https://colorlib.com/wp/template/tourbi/). Single page: an
  absolute transparent header over the hero (logo image left, nav Home /
  about / packages / Blog (dropdown) / pages (dropdown) / Contact, yellow
  pill "Hot Line 052" button right, hamburger on mobile), a 1050px hero
  banner (blue sky photo with clouds + a hot-air balloon illustration,
  white "Best way to tour" script subheading + big white headline, wavy SVG
  overlay at the bottom edge), a white search section that overlaps the
  banner bottom by 254px (big yellow "country / city" search panel with a
  blue Search button + 3 donation-style cards below), a split "Amazing tour"
  feature section (photo left, title + copy + 3 small place-count cards
  right), a "Most Popular place" section (3 icon cards: Life of Egeft,
  Biking in Norway, Tour of iceland with "book now" script links), a "place
  details" section (left text block + 2 photos + a big yellow square "view
  all" button), a "tour package" section (4-slide carousel of destination
  cards with 5-star ratings + "join now", and a right-side "tour package"
  blurb with a yellow "join now" pill), a photo-background CTA newsletter
  section (blue sky bg, "Subscribe to get Updated with new offers" + email
  input + yellow "subscribe now" button), an "our blog" section (3 white
  blog cards with calendar/heart/comment meta), and a white footer (4
  columns: About Agency, Navigation Links, Newsletter with a blue paper-plane
  submit, Instafeed image grid + bottom bar with copyright + 4 social
  icons).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/tourbi/`. DOM fetched
  (`/tmp/tourbi-preview.html`, 34,897 bytes, `<title>travel</title>`) +
  stylesheet `css/style.css` (`/tmp/tourbi-style.css`, 171,615 bytes) +
  TEMPLATES.md screenshot (`tourbi-free-template.jpg`, AVIF image, viewed
  in the browser).
- **Visual design (screenshot + live DOM + CSS):** bright, cheerful
  travel-agency aesthetic — a sky-cyan blue hero (photo of blue sky with
  clouds + a colorful red/yellow/blue hot-air balloon illustration) with
  white Kaushan-Script + bold sans-serif text; the ONLY saturated block
  colors are a high-visibility **yellow `#ffcc00`** (search panel, pill
  buttons, the big "view all" square, star ratings, "subscribe now") and a
  **sky blue `#00c0ff`** (Search button, script-link hovers, newsletter
  paper-plane icon). Body sections are white with generous padding
  (180px), headings are dark navy `#14182d`/black, body copy grey
  `#7f7f7f`/`#888`. The "Tourbi" logo is a playful orange script wordmark.
  Source copy is placeholder/Lorem with typos ("chaina", "Life of Egeft",
  "Sawpalo") — paraphrase freely and fix typos, keep the same content kinds
  (nav, hero, search form, 3 donation cards, 3 mini place cards, 3 popular
  place cards, tour package carousel, blog cards, footer widgets).

## Design tokens (from `css/style.css` of the live preview)

- **Brand yellow:** `#ffcc00` — `.search_form` background, `.btn_1`
  background (pill button), `.subs_btn` background, `.view_btn` (265×215px
  square) background, `.tour_content_rating ul li a` star color,
  `.main_menu .nav-link:hover` color, `.banner_part` background-color
  fallback. THE accent of the whole template.
- **Sky blue:** `#00c0ff` — `.search_btn` background, `.read_btn:hover` /
  `.btn1:hover` color, `.mail_part .email_icon` (paper-plane submit)
  background, `.copyright_text span` color. (A related gradient
  `#00b4ff → #57ddff` appears on `.form-contact .btn_1` in the CSS but not
  on this page's DOM.)
- **Ink / headings:** `#14182d` — `.section_tittle h2` (36px, weight 500);
  `#000` — `.read_btn`/`.btn1` text, `.btn_1` text, `.subs_btn` text,
  `.view_btn` text, default headings.
- **Muted text:** `#7f7f7f` — `.single_popular_place p` (15px, lh 1.8);
  `#888` — `.copyright_text p`; `#c3c3c3` — custom select text in the
  search form.
- **Light surfaces:** `#fff` — body sections + `.single_blog_part` cards +
  `.search_your_country` (with a large soft shadow
  `-1.717px 8.835px 85.56px 6.44px rgba(170,170,170,0.29)`); `#fafafa` —
  `.tour_pack_content` card background (padding 45px 48px).
- **Fonts:** Google-imported via `css/style.css`
  (`@import url(...family=Kaushan+Script|Poppins:300,400,500,600,700|Roboto:300,400,500,700...)`):
  body **"Roboto", sans-serif** (14px base); headings/buttons **"Poppins",
  sans-serif** (`.section_tittle h2` 36px 500, `.btn_1` 15px 500);
  script accents **"Kaushan Script", cursive** (`.banner_text h5` 36px,
  `.read_btn`/`.btn1` 17px, `.cta_text h5` 20px, `.view_btn` 24px). Load
  all three via Google Fonts `<link>` in `index.html`.
- **Buttons:**
  - `.btn_1` — YELLOW PILL: `background-color: #ffcc00`, `border-radius:
50px`, `padding: 13px 40px`, Poppins 500 15px, `color: #000`, hover
    inverts (transparent bg + 2px `#ffcc00` border + yellow text).
  - `.search_btn` — BLUE BLOCK: bg `#00c0ff`, `padding: 19px 60px`, white,
    `width: 100%`, centered, capitalize.
  - `.subs_btn` — YELLOW BLOCK: bg `#ffcc00`, `padding: 19px 29px`,
    uppercase, `color: #000`, `margin-left: 10px`.
  - `.view_btn` — BIG YELLOW SQUARE: 265×215px (150×80px ≤1200px), bg
    `#ffcc00`, Kaushan Script 24px, `color: #000`, flex-centered.
  - `.read_btn`, `.btn1` — SCRIPT TEXT LINKS: Kaushan Script 17px,
    `color: #000`, `margin-top: 30px` (`.btn1` 0 inside the rating row;
    42px in popular cards), hover → `#00c0ff`.
- **Header (`.main_menu.home_menu`):** `position: absolute; top: 0; left:
0; width: 100%; z-index: 999` (transparent, overlays the hero); nav links
  white 15px Roboto 400, `padding: 36px 23px`, capitalize; hover →
  `#ffcc00`; logo = image link (orange script wordmark in the source);
  "Hot Line 052" `.btn_1` right (`d-none d-lg-block` — desktop only);
  mobile hamburger (`navbar-toggler` + `.menu_icon` fa-bars) collapses the
  nav (Bootstrap collapse in the source → React state toggle).
- **Hero (`.banner_part`):** `height: 1050px` (700px ≤991px), bg image
  `img/banner_bg.png` (blue sky photo, `background-size: cover`) +
  `background-color: #ffcc00` fallback; `:after` — `img/banner_overlay.svg`
  wavy overlay (absolute, right 0, bottom -132px, `z-index: -1`);
  `.banner_text` pt 235px; h5 "Best way to tour" (Kaushan Script 36px,
  white, mb 34px) + h1 "Lorem ipsum dolor amet consec" (66px 700 white, lh
  75px, capitalize, with a `heading_bg.png` underline strip `:after` at
  left 0 / bottom -86px / width 50%).
- **Search section (`.search_your_country`):** `max-width: 1690px; margin:
0 auto; background: #fff; margin-top: -254px` (overlaps the banner);
  `padding: 165px 0 100px` (70px ≤991px); inner container max-width 980px;
  `.search_form` — bg `#ffcc00`, `padding: 80px 95px`, `position: absolute;
top: -265px; width: 100%` (the yellow panel straddles the section top):
  two `.custom_select` selects (country / city; `width: 50%`, `height:
60px`, text `#c3c3c3`, nice-select in the source → native `<select>` or
  styled selects) + `.search_btn` "search"; below (`margin-top: 70px`), 3
  `.single_donation_item` columns: icon (max-width 27px) + h4 "donation"
  (18px, capitalize, mt 35px) + p + `.read_btn` "read more". Animated
  decorative shapes (`.feature_icon_1/2`, absolute PNGs).
- **Feature (`.feature_part.padding_top`):** `padding-top: 180px`; split
  row — left col-lg-7 `feature_img` (photo `about_img.png`); right col-lg-5
  `feature_part_text`: `section_tittle_img.png` + h2 "Amazing tour" + p +
  span, then 3 `.feature_part_text_iner` mini-cards (col-sm-6 col-md-4):
  icon (27px) + h4 "london" / "Kashmir" / "chaina" + p "35 Places" / "75
  Places" / "85 Places". 3 animated shapes behind.
- **Popular place (`.popular_place.padding_top`):** centered
  `.section_tittle` (img + h2 "Most Popular **place**" + p, mb 72px); 3
  `.single_popular_place` cards (padding 60px 25px 56px, white, centered):
  icon (max-width 150px) + h4 (20px 600, mt 45px mb 20px) + p (`#7f7f7f`
  15px lh 1.8) + `.btn1` "book now" (mt 42px). Titles: "Life of Egeft",
  "Biking in Norway", "Tour of iceland". Decorative shapes behind
  (`z-index: -1`).
- **Place details (`.place_details.section_padding`, `padding: 180px
0`):** container-fluid; left col-md-6: centered `.place_details_content`
  (col-lg-8 col-xl-6): `section_tittle_img.png` + h2 "Amazing tour" + p +
  span; below it `plase_details_1.png` photo; right col-md-6:
  `plase_details_2.png` photo; below: centered `.view_all_btn` →
  `.view_btn` "view all" (big yellow square, see Buttons).
- **Tour package (`.tour_package.section_padding`):** left col-lg-6:
  `.tour_package_cotent` owl-carousel (jQuery in the source → React
  carousel) of FOUR `.single_tour_package` slides: photo
  (`tour_plan_1.png` / `tour_plan_2.png` alternating) + `.tour_pack_content`
  (bg `#fafafa`, padding 45px 48px): h4 "Sawpalo, Brasil" (24px, mb 10px) +
  p (mb 50px) + `.tour_content_rating` (flex, space-between): 5 `fa-star`
  icons (`#ffcc00`) + `.btn1` "join now"; right col-lg-5 col-xl-3
  offset-lg-1: `.tour_pack_content` with `section_tittle_img.png` + h2
  "tour package" + p + `.btn_1` "join now" (yellow pill).
- **CTA (`.cta_part.section_padding`, `padding: 180px 0`):** bg image
  `img/cta_bg.png` (blue sky photo, cover), `height: 750px` (auto ≤1200px);
  centered `.cta_text` (col-lg-8 col-xl-7): h5 "Join Our Newsletter"
  (Kaushan Script 20px, white, mb 35px) + h2 "Subscribe to get Updated
  with new offers" (47px white, lh 60px, mb 65px; 30px ≤991px) +
  `.input-group`: email input (height 60px, no radius, `padding-left:
20px`) + `.subs_btn` "subscribe now" (yellow).
- **Blog (`.blog_part.padding_top`):** left `.section_tittle` (img + h2
  "our blog" + p); 3 `.single_blog_part` cards (white bg): photo
  (`blog_1.png` / `blog_2.png` / `blog_3.png`) + `.blog_text` (padding
  43px 0): h2 "Luxerious Car Rental" (24px, mb 20px) + p + meta `ul`
  (flex, mt 40px): `ti-calendar` "13th Dec" / `ti-heart` "15" /
  `fa-comment-dots` "10" (li flex, mr 30px; icons → lucide). Overlay image
  `.blog_img` (absolute, right 0, top 20%, decorative PNG).
- **Footer (`.footer_part`):** `padding: 180px 0 25px` (70px ≤991px),
  white bg + `.footer_overlay` image (absolute, left 0, top 0, decorative
  PNG; hidden ≤1200px); 4 `.single_footer_part` columns (col-sm-6 col-lg-3):
  - **About Agency** — h4 (20px 500, mb 30px) + paragraph.
  - **Navigation Links** — h4 + 8 links (Home, Features, Services,
    Portfolio, team, Pricing, Blog, Contact; `list-unstyled` with
    `column-count: 2`).
  - **Newsletter** — h4 + p + subscribe form (`#mc_embed_signup`): email
    input (placeholder "Email Address") + `.email_icon` submit button (40×39,
    bg `#00c0ff`, white, paper-plane icon, absolute right).
  - **Instafeed** — h4 + 8 thumbnail images (2×4 grid).
  - `<hr>` then bottom bar: `.copyright_text p` (#888): "Copyright ©
    <year> All rights reserved | This template is made with ♥ by
    **Component Dock**" → https://www.componentdock.com/ (replaces the
    source's Colorlib link) + `.footer_icon.social_icon`: 4 social links
    (facebook-f, twitter, globe, behance → inline SVG brand icons; the
    globe → lucide `Globe`).
- **Mobile:** the source uses Bootstrap collapse (hamburger) for the nav
  and owl-carousel / nice-select jQuery plugins — implement with React
  state: a mobile nav toggle, a simple 4-slide destination carousel with
  prev/next controls, styled `<select>`s for country/city. Stack all 3/4-
  column rows to 1–2 columns below `lg`. Note the "Hot Line 052" button is
  `d-none d-lg-block` (desktop only).
- **Placeholder images:** `https://picsum.photos/seed/journee-<n>/<w>/<h>`.
  Photo slots: hero background (blue sky — screen for a sky/balloon-ish
  shot or use a light-blue gradient + seeded cloud photo), about photo,
  place-details photos (2), tour-plan photos (2, alternating across 4
  slides), blog photos (3), footer Instafeed thumbs (8 small). Icons from
  `lucide-react` (Star, Calendar, Heart, MessageCircle, Send, Menu, X,
  Globe, ChevronLeft, ChevronRight) + inline SVG brand icons for the 4
  social links.

## Requirements

### Requirement: Header — transparent nav with hotline button

The system SHALL render an absolute transparent header over the hero with
the brand logo on the left, a centered nav (Home / about / packages / Blog
with a blog dropdown / pages with an Elements dropdown / Contact), and a
yellow pill "Hot Line 052" button on the right (desktop only). On mobile a
hamburger SHALL open the same nav links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the logo, the six nav entries (Home first, Blog and
  pages as dropdowns), and the "Hot Line 052" pill button on the right

#### Scenario: Blog dropdown

- **GIVEN** the header is rendered
- **WHEN** the Blog entry is activated
- **THEN** a dropdown with "blog" and "Single blog" links appears

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** the nav links appear and can be closed again

### Requirement: Hero banner

The system SHALL render a full-width hero banner (1050px tall on desktop)
with a blue-sky photo background, a white script subheading "Best way to
tour", a large white headline, and a wavy overlay at its bottom edge.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the subheading "Best way to tour" in script type
- **AND** a large white headline below it

### Requirement: Search-your-country section

The system SHALL render a white section overlapping the banner bottom
containing a yellow search panel with country and city selects and a blue
Search button, plus three donation-style cards (icon, heading, paragraph,
"read more" link).

#### Scenario: Search panel

- **GIVEN** the search section is rendered
- **WHEN** it is inspected
- **THEN** a yellow panel shows a country select, a city select, and a blue
  "search" button

#### Scenario: Donation cards

- **GIVEN** the search section is rendered
- **WHEN** the cards below the panel are inspected
- **THEN** three cards are shown, each with an icon, a "donation" heading, a
  paragraph, and a "read more" script link

### Requirement: Amazing tour feature section

The system SHALL render a split feature section with a photo on the left
and, on the right, a "Amazing tour" heading with copy and three small
place-count cards (london 35 Places, Kashmir 75 Places, chaina 85 Places).

#### Scenario: Feature content

- **GIVEN** the feature section is rendered
- **WHEN** it is inspected
- **THEN** it shows the photo on the left, the "Amazing tour" heading and
  paragraph on the right
- **AND** three mini-cards each with an icon, a place name, and a place
  count

### Requirement: Most Popular place section

The system SHALL render a "Most Popular place" section with three cards,
each showing an icon, a title, a paragraph, and a "book now" script link
(Life of Egeft, Biking in Norway, Tour of iceland).

#### Scenario: Popular place cards

- **GIVEN** the popular-place section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with an icon, a title, a paragraph,
  and a "book now" link

### Requirement: Place details section

The system SHALL render a place-details section with a centered text block
("Amazing tour" heading + copy), two photos, and a big yellow "view all"
square button below.

#### Scenario: Place details content

- **GIVEN** the place-details section is rendered
- **WHEN** it is inspected
- **THEN** it shows the text block on the left, a photo on the right, and
  the "view all" yellow square button below

### Requirement: Tour package carousel

The system SHALL render a tour-package section with a carousel of four
destination cards (photo, "Sawpalo, Brasil" title, paragraph, five yellow
stars, "join now" link) plus a right-side blurb (heading "tour package",
paragraph, yellow "join now" pill button).

#### Scenario: Tour package slides

- **GIVEN** the tour-package section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows a destination card with a photo, title, paragraph, five
  yellow stars, and a "join now" link

#### Scenario: Carousel navigation

- **GIVEN** the tour-package carousel is rendered
- **WHEN** the next/prev controls are activated
- **THEN** the displayed destination card changes

#### Scenario: Side blurb

- **GIVEN** the tour-package section is rendered
- **WHEN** the right column is inspected
- **THEN** it shows the "tour package" heading, a paragraph, and a yellow
  "join now" pill button

### Requirement: Newsletter CTA

The system SHALL render a blue-sky photo-background CTA section with the
script heading "Join Our Newsletter", the heading "Subscribe to get Updated
with new offers", an email input, and a yellow "subscribe now" button.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** it is inspected
- **THEN** it shows both headings, the email input, and the yellow
  "subscribe now" button

### Requirement: Blog section

The system SHALL render an "our blog" section with three white blog cards,
each showing a photo, a "Luxerious Car Rental" title, a paragraph, and meta
(date 13th Dec, likes 15, comments 10).

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a photo, a title, a paragraph,
  and a meta row with date, likes, and comments counts

### Requirement: Footer

The system SHALL render a white footer with four widget columns (About
Agency, Navigation Links, Newsletter with a blue paper-plane submit,
Instafeed image grid), a bottom bar with the copyright line, and four
social icons. The credit SHALL read "This template is made with ♥ by
**Component Dock**" linking https://www.componentdock.com/ (no ColorLib
credit).

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the About Agency paragraph, eight Navigation Links, the
  Newsletter email form, and eight Instafeed thumbnails

#### Scenario: Footer credit

- **GIVEN** the footer bottom bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Journee app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, search, feature, popular
  place, place details, tour package, CTA, blog and footer in the correct
  order
- **AND** the document title SHALL be "Journee — Travel Template"

## Verification checklist

- [ ] `openspec/specs/template-journee/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/journee`, package `@free-react-templates/journee`,
      no ColorLib references in app code (grep for colorlib/Tourbi in
      apps/journee)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh journee`
- [ ] Section order matches the source: header → hero banner → search
      country (+ donation cards) → feature → popular place → place details
      → tour package → CTA newsletter → blog → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #ffcc00`,
      `--color-sky: #00c0ff`, `--color-ink: #14182d`, `--color-muted:
    #7f7f7f`, `--color-soft: #fafafa`, `--color-fade: #888`; Google Fonts
      `<link>` in `index.html`: Roboto (300/400/500/700), Poppins
      (300–700), Kaushan Script
- [ ] Header: absolute transparent over hero, logo + 6 nav entries (Blog +
      pages dropdowns) + yellow pill "Hot Line 052" (desktop only); mobile
      hamburger → nav toggle
- [ ] Hero: 1050px blue-sky photo bg (yellow fallback), script subheading
      "Best way to tour", 66px white headline, wavy bottom overlay
- [ ] Search section: white, overlaps banner (~-254px), yellow panel with
      country/city selects + blue "search" button; 3 donation cards
      (icon + h4 + p + "read more" script link)
- [ ] Feature: split layout, "Amazing tour" heading + copy + 3 mini-cards
      (london 35 / Kashmir 75 / chaina 85 Places)
- [ ] Popular place: "Most Popular place" title, 3 cards (icon + title + p + "book now") — Life of Egeft, Biking in Norway, Tour of iceland
- [ ] Place details: centered text block + 2 photos + big yellow "view
      all" square (265×215px desktop)
- [ ] Tour package: 4-slide carousel (photo + "Sawpalo, Brasil" + p + 5
      yellow stars + "join now") with next/prev controls + right blurb
      ("tour package" + yellow "join now" pill)
- [ ] CTA: blue-sky bg, "Join Our Newsletter" script + "Subscribe to get
      Updated with new offers" + email input + yellow "subscribe now"
- [ ] Blog: "our blog" title + 3 white cards (photo + "Luxerious Car
      Rental" + p + date/likes/comments meta)
- [ ] Footer: 4 columns (About Agency / Navigation Links (8, 2-col) /
      Newsletter (email + blue paper-plane) / Instafeed 8 thumbs) + bottom
      bar with Component Dock credit + 4 social icons
- [ ] Placeholder images via `https://picsum.photos/seed/journee-<n>/<w>/<h>`
      (hero bg, about photo, 2 place-details, 2 tour-plan, 3 blog, 8
      instafeed); icons from `lucide-react` + inline SVG brand icons
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/tourbi/`), design tokens, diffs (name,
      placeholder images, React carousel + mobile nav instead of
      owl-carousel/Bootstrap collapse, native selects instead of
      nice-select, Component Dock footer credit)

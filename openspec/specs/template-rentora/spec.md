# Template: Rentora (Real Estate)

## Purpose

Rentora is a single-page real-estate website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Rental" design (see TEMPLATES.md — listed under Bootstrap,
line 489, first unchecked item whose prep did not exist on main; the same
slug also appears as duplicates at line 1149 (Business) and line 2608 (Real
Estate)), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a property/real-estate landing page: a transparent navbar
over the hero (logo, centered links Home / about / Properties / Blog / Pages
/ Single blog / Elements / Contact us, gold "Submit property" button on the
right), an 800px split hero — white text column left ("Beautiful investments"
kicker, "Everyone Deserves the Opportunity of the Home" headline, "View
Property" gold button, horizontal social icon list) and a skyscraper photo
right with a concave white curve mask plus a centered 95px gold play button
(youtube popup), a "Living From The Team That Cares" team split (photo left
via CSS background + 3-icon checklist + "Read More"), a dark "Our Passion is
People What's Yours?" section with four icon cards (Creative Design,
Experience Style, Product Research, Affordable Price; pattern bg flipping to
white on hover), a "Provide The Beautiful Apartment" section with three
listing cards (photo + heart, location line, price $1,235,632, "Detached
House For Sale", Home/Apartment meta with bed/bath icons) and a "View More"
link, a full-bleed "room" section with two alternating full-width photos and
white overlay cards (title + "Read More" text button), an "Our Happy Customer
Says About us" testimonial carousel (4 slides: quote, client photo, name,
role), a centered "Are You Ready For Move?" CTA band on a background image
with a gold "Sing Up" [sic] button, a "Read Latest News From Our Blog" blog
grid (4 posts: two image cards, two media rows; time/comment/heart meta),
and a dark #1b212e footer (About Us blurb, Contact Info, Important Link,
Newsletter pill input with gold icon button, copyright bar). Rentora
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Rental" — free real estate website template
  (source: https://colorlib.com/wp/template/rental/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/rental/`
  (HTTP 200, ~27.5KB) + stylesheet `css/style.css` (146KB) plus
  `bootstrap.min.css`, `owl.carousel.min.css` (testimonial carousel),
  `themify-icons.css` + `flaticon.css` (icons), `magnific-popup.css`
  (youtube video popup), `fontawesome/css/all.min.css`, `animate.css`. The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`rental-free-template.jpg`, 1200×946) confirms the visual design: white
  page with gold/mustard accents, split hero with a low-angle glass
  skyscraper photo and a large concave white curve masking the image edge,
  gold circular play button over the image, gold "View Property" /
  "Submit property" buttons, a team section showing a family photo on a warm
  orange/peach block beside a light-grey textured column, gold section-title
  underlines. Palette: white base, light section backgrounds, gold #cfb579
  primary accent (logo, buttons, underlines, play button, hover states),
  dark navy #14303a headings/nav text, near-black #1b212e footer.
- **Section order (1:1):**
  1. `header.main_menu.home_menu` — transparent header over the hero
     (`.main_menu` padding 10px 0; navbar padding 0): `a.navbar-brand`
     with `img/logo.png` (logo shows a geometric house icon + "RENTAL HOME
     SOLUTION" text in the screenshot); centered `ul.navbar-nav` links —
     **Home** (current), **about**, **Properties**, **Blog**, **Pages**,
     **Single blog**, **Elements**, **Contact us** — each `a.nav-link`
     14px, color #14303a, capitalize, hover → #cfb579; right
     `div.btn_1.d-none.d-lg-block > a.float-right` **Submit property**
     (gold button, desktop only). Mobile: hamburger toggler → collapsed
     menu on background #bd9f5a / #bd9c50 with white links (10px 22px
     padding, 2px margin-bottom).
  2. `section.banner_part` — height 800px (700px ≤576px), flex-centered,
     white; `:after` = right-half (50% width, 100% height) overlay image
     `img/banner_overlay.png` (concave white curve mask over the photo edge;
     hidden on mobile). Background photo: modern curved glass skyscraper
     (low angle, cool blue/grey tones). Content `div.banner_text_iner`
     (col-lg-6, table-cell vertical-align middle): `h5` kicker
     **Beautiful investments** (14px, uppercase, Open Sans 600, #666666),
     `h2` **Everyone Deserves the Opportunity of the Home** (50px,
     line-height 1.3, weight 600, margin 10px 0 20px), `p` lorem paragraph,
     `a.btn_1.banner_btn` **View Property** (gold), `ul.list-inline`
     social row — `ti-facebook`, dot, `ti-twitter-alt`, dot, `ti-instagram`;
     absolutely centered `a.popup-youtube.video_popup` play button
     (`span.ti-control-play`): 95×95px circle, bg #cfb579, 7px solid white
     border, radius 50%, shadow 0px 5px 25.5px 4.5px rgba(20,48,58,0.2),
     hover bg #d8b25a (links to a YouTube video in the original).
  3. `section.team_part` — padding-top 130px, z-index 99; `:before` =
     left 50% wide, top 130px, height 74%, background image
     `img/team_member.png` (family/people photo, cover; hidden ≤576px);
     right `div.team_member_text` (offset-lg-1 col-lg-5): `h2`
     **Living From The Team That Cares** (40px/700, gold 2px×90px underline
     :after 15px below), `p` lorem, `ul` 3 checklist items with
     `ti-paint-bucket` / `ti-check-box` / `ti-ruler-pencil` icons ("Set dry
     signs spirit a kind First shall them windged creping", "He two face one
     moved dominion man you're likeness", "Sea forth fill have divide be
     dominion from life for feven"), `a.btn_1` **Read More** (padding
     10px 42px); decorative `img/section_overlay.png` below the container.
  4. `div.passion_part` — padding 250px 0 130px (70px top mobile);
     background image `img/passion_bg.png` (cover, centered) → recreate as a
     dark section background (color/gradient); `div.section_tittle` `h1`
     **Our Passion is People What's Yours?** (40px/700, color #fff, gold
     2px×90px underline :after 27px below, margin-bottom 80px); 4
     `div.single_passion` cards — each `div.single_passion_item` (padding
     30px 20px 35px, pattern bg `img/patten_bg.png` via :after, z-index -1):
     `div.passion_icon` (80×80px, 1px solid #afb5be border, radius 5px,
     margin-bottom 35px) with 42px white icon — flaticon **compass**,
     **desk**, **bathroom**, **beach** — `h4` title (20px/600 white) —
     **Creative Design**, **Experience Style**, **Product Research**,
     **Affordable Price** — `p` white lorem (line-height 1.857),
     `a.btn_2` **Read More** (ti-arrow-right, margin-top 30px). Hover:
     card bg flips to white (1s), h4 → #14303a, p → #797979, btn_2 →
     #14303a.
  5. `div.apartment_part` — padding-top 130px (70px mobile); `div.section_tittle`
     `h1` **Provide The Beautiful Apartment** (color overridden to #14303a)
     - `div.view_more_btn.float-right.d-none.d-md-block` `a.btn_2`
       **View More** (color #797979, gold circle :after on #e9eef2);
       3 `div.single_appartment_part` cards — `div.appartment_img` (photo
       `img/appertment_1..3.png` + `span.ti-heart` corner) +
       `div.single_appartment_text > div.single_appartment_content`:
       location line `ti-location-pin` **384 Treeline Park, San Antonio, TX**,
       `h3` price **$1,235,632**, title **Detached House For Sale**, meta line
       **Home, Apartment** with flaticon **bed** / **bath** / **frame** icons.
  6. `div.room_part` — padding 130px 0 40px (70px mobile), overflow hidden;
     `div.container-fluid` (padding 0 — full-bleed): row 1 `div.room_1`
     (full-width photo `img/room_1.png`) + `div.room_text_1` white overlay
     card (absolute, z-index 9, width 510px, padding 40px, top -175px,
     right 30px, box-shadow 1px 15px 30px #14303a15): `h3` **Beginning own
     light divided male is light** + `a.btn_2` **Read More** (ti-arrow-right;
     hover: text → #cfb579); row 2 `div.room_2` mirrored (photo
     `img/room_2.png` + `div.room_text_2`).
  7. `div.review_part#testimonial` — padding 90px 0 130px; decorative 200px
     circle overlay `img/client_cercel_overlay.png` (top-left, z-index -1)
     - `img/review_overley.png` :after; `div.section_tittle` `h1`
       **Our Happy Customer Says About us**; `div.review_part_text.owl-carousel`
       of 4 `div.singler_eview_part` slides — testimonial text (white or
       #14303a on light bg — verify live) + `div.client_info`: client photo
       (`img/client_1.png` / `client_2.png`, rounded) + `h4` **Mouunt
       Alezaber** + role line **Project manager**.
  8. `div.cta_part` — centered text on background image `img/cta_bg.png`
     (cover), padding 170px 0: `h2` **Are You Ready For Move?** (white) +
     `p` lorem + `a.btn_1` **Sing Up** [sic — recreate as "Sign Up"].
  9. `div.blog_part` — padding 130px 0 125px; `div.blog_bg` decorative
     background layer (`img/blog_bg.png`); `div.section_tittle` `h1`
     **Read Latest News From Our Blog**; 4 `div.single_blog` posts — 2 image
     cards (`div.appartment_img` photo `img/blog_1.png`/`blog_2.png` +
     `div.single_appartment_content`: meta row `ti-time` **Apartment /
     March 20, 2019** + `ti-comment` + `ti-heart`, `h4` title, excerpt) and
     2 `div.media` rows (thumb + `div.media-body.align-self-center` text).
     Titles: **Doee lights without darkness that said good deep years
     very.** / **Green very from for rule stars seasons** / **Moveth wherein
     subdue of brought** / **Firmament heaven cant him night rule**.
  10. `footer.footer_part` — background #1b212e, padding 130px 0 25px:
      4 `div.single_footer_part` columns — **About Us** (blurb + footer
      social icons `div.footer_icon`), **Contact Info** (Address :Your
      address goes here, your demo address. / Phone : +8880 44338899 /
      Email : info@colorlib.com), **Important Link** (WHMCS-bridge, Search
      Domain, My Account, Shopping Cart, Our Shop), **Newsletter** (blurb +
      `div.mail_part` form: pill input radius 50px, 2px white border,
      padding 8px 22px, + 60×39px gold pill icon button with an email icon,
      radius 50px); `div.copyright_text` bar — "Copyright © {year} All
      rights reserved | This template is made with by Colorlib" →
      repo-standard credit.
- **Design tokens extracted from `css/style.css` (+ preview HTML):**
  - Fonts: **Poppins** (body + headings — `font-family: "Poppins",
sans-serif`, body 14px; h1 32px/600, h2 29px, section titles 40px/700),
    **Open Sans** (banner kicker 14px/600 uppercase + body alt),
    **Roboto** (minor). Load via Google Fonts `<link>`: Poppins
    400/500/600/700, Open Sans 400/700 (+ light italics), Roboto 400/700.
  - Primary gold: **#cfb579** — `.btn_1` bg/border, section-title underline
    (2px × 90px, 27px below), play button, nav link hover, `.btn_2` circle,
    footer newsletter icon button, passion/room hover accents. Hover →
    **#d8b25a** (btn_1, play button).
  - Dark gold: **#bd9c50** / **#bd9f5a** — mobile collapsed nav background.
  - Dark navy text: **#14303a** — base headings (h1–h6), nav links,
    apartment section title; room overlay card shadow `1px 15px 30px
#14303a15`.
  - Footer background: **#1b212e** (near-black navy).
  - Light surfaces: **#f9f9ff** (23 uses — section/pattern backgrounds),
    **#e9eef2** (view-more circle base), **#fbf9ff**.
  - Body grays: **#666666** (banner kicker), **#797979** (view-more link,
    passion hover text), **#afb5be** (passion icon border).
  - Buttons `.btn_1`: solid #cfb579 bg, white 500 text, 2px solid #cfb579
    border, text-transform capitalize, padding 7px 12px (team variant
    10px 42px), transition 0.5s; hover → #d8b25a. `.btn_2`: inline text
    button (white on dark / #797979 on light), 500 weight, with a 30×30px
    #cfb579 circle (radius 50%) absolutely positioned top -5px / left -11px
    behind the text; hover (room variant) → text #cfb579. Generic `.button`:
    15px/500, padding 12px 54px, 1px transparent border.
  - Section titles `.section_tittle h1`: 40px, Poppins 700, color #fff
    (dark sections) / #14303a (apartment override), margin-bottom 80px,
    gold 2px×90px underline 27px below.
  - Banner: 800px tall (700px mobile), white; h5 kicker 14px uppercase Open
    Sans 600 #666; h2 50px / line-height 1.3 / weight 600; play button
    95px circle, 7px white border, shadow rgba(20,48,58,0.2).
  - Team: h2 40px/700 with gold underline 15px below; `:before` photo block
    left 50% / top 130px / 74% height.
  - Passion: dark section (bg image → color/gradient stand-in), card pattern
    bg, icon box 80×80 (1px #afb5be border, radius 5px, icon 42px white),
    h4 20px/600 white, p white line-height 1.857; hover → white card,
    h4 #14303a, p #797979, btn_2 #14303a (1s transition).
  - Apartment card: image + heart, location line, h3 price, title, meta with
    bed/bath icons; View More link gray #797979 with gold circle on #e9eef2.
  - Room overlay card: white, 510px wide, padding 40px, absolute top -175px
    right 30px, shadow 1px 15px 30px #14303a15.
  - Testimonials: owl-carousel, 4 slides; decorative 200px circle overlay
    top-left; client photo + name + role.
  - CTA: centered, padding 170px 0, background image (→ color/gradient
    stand-in).
  - Newsletter: pill input (radius 50px, 2px white border, padding 8px 22px,
    13px) + 60×39px gold pill icon button (radius 50px).
  - Spacing rhythm: 130px section paddings (70px mobile), 80px section-title
    bottom margin, 25px card icon margin.
- **Recreation decisions:** navbar = transparent over hero with house-icon
  logo + "Rentora" brand, centered links (Home, About, Properties, Blog,
  Pages, Single Blog, Elements, Contact Us) + gold "Submit property" button
  (desktop) and gold-collapsed mobile menu; hero = 800px split: white text
  column (kicker, headline "Everyone Deserves the Opportunity of the Home",
  "View Property" gold button, Facebook/Twitter/Instagram social row) + right
  photo with a concave white curve mask (a curved div mask over a picsum
  building/skyscraper photo) + centered gold play button (decorative or
  linking to a video — no real popup needed); team = photo-left split
  (picsum family/people photo on a warm-toned block) + heading + 3-icon
  checklist + "Read More"; passion = dark band with 4 icon cards (Compass,
  LayoutTemplate/Desk, Bath, Umbrella/Beach icons from lucide-react), white
  text, hover flip to white; apartment = 3 listing cards (photo + heart,
  MapPin location "384 Treeline Park, San Antonio, TX", price "$1,235,632",
  "Detached House For Sale", Home/Apartment meta with Bed/Bath icons) +
  "View More"; room = 2 full-bleed alternating photo rows with white overlay
  cards ("Read More" text button, gold on hover); testimonials = carousel of
  4 quotes with photo + name + role; CTA = centered band ("Are You Ready For
  Move?", "Sign Up" — fix the original's "Sing Up" typo); blog = 4 posts (2
  image cards, 2 media rows) with time/comment/heart meta; footer = dark
  #1b212e, 4 columns (About Us + social, Contact Info, Important Link,
  Newsletter pill form) + repo-standard copyright credit; images
  picsum-seeded (`picsum.photos/seed/rentora-N/w/h`; hero/team/room photos
  must be probed for subject fit — see seed-screening lesson: building for
  hero, people for team); Google Fonts Poppins + Open Sans via `<link>`;
  icons via lucide-react plus inline SVG brand icons (Facebook, Twitter,
  Instagram) since lucide-react removed brand icons.

Rentora lives in `apps/rentora` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with a brand,
centered navigation links, and a gold "Submit property" button.

#### Scenario: Navbar content

- **GIVEN** the Rentora page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site brand "Rentora" with a house icon
- **AND** it SHALL show the nav links Home, About, Properties, Blog, Pages,
  Single Blog, Elements, and Contact Us
- **AND** it SHALL show a gold "Submit property" button on the right
  (desktop viewports)

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** the nav links SHALL be revealed in a collapsed menu on a dark
  gold background
- **AND** activating the control again SHALL hide the menu

### Requirement: Hero

The system SHALL render an 800px split hero with a text column, a photo with
a curved mask, a gold play button, and social icons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the uppercase kicker "Beautiful investments"
- **AND** it SHALL show the headline "Everyone Deserves the Opportunity of
  the Home"
- **AND** it SHALL show a short paragraph of copy and a gold "View Property"
  button

#### Scenario: Hero visuals

- **GIVEN** the hero section is displayed
- **WHEN** the hero renders on a desktop viewport
- **THEN** it SHALL show a building/skyscraper photo occupying the right
  half with a concave white curve masking its left edge
- **AND** it SHALL show a centered circular gold play button over the photo
- **AND** it SHALL show Facebook, Twitter, and Instagram icon links in the
  text column

### Requirement: Team section

The system SHALL render a team split with a photo block, a heading, a
three-item checklist, and a Read More button.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Living From The Team That Cares" with
  a gold underline
- **AND** it SHALL show a people photo block on the left
- **AND** it SHALL show three checklist items with icons (paint bucket,
  check box, ruler pencil)
- **AND** it SHALL show a gold "Read More" button

### Requirement: Passion section

The system SHALL render a dark passion section with a title and four icon
cards.

#### Scenario: Passion cards

- **GIVEN** the page is rendered
- **WHEN** the passion section is displayed
- **THEN** it SHALL show the white section title "Our Passion is People
  What's Yours?" with a gold underline
- **AND** it SHALL show four cards: Creative Design, Experience Style,
  Product Research, and Affordable Price
- **AND** each card SHALL show an icon in a bordered box, a title, a
  description, and a Read More text button

#### Scenario: Passion card hover

- **GIVEN** a passion card is displayed
- **WHEN** the user hovers over the card
- **THEN** the card background SHALL flip to white
- **AND** the title and Read More text SHALL turn dark navy #14303a

### Requirement: Apartment listings

The system SHALL render an apartment section with a title, a View More link,
and three listing cards.

#### Scenario: Listing cards

- **GIVEN** the page is rendered
- **WHEN** the apartment section is displayed
- **THEN** it SHALL show the title "Provide The Beautiful Apartment" with a
  gold underline and a "View More" link aligned right
- **AND** it SHALL show three cards, each with a photo with a heart icon, a
  location line ("384 Treeline Park, San Antonio, TX"), a price
  ("$1,235,632"), a title ("Detached House For Sale"), and a meta line
  ("Home, Apartment" with bed and bath icons)

### Requirement: Room section

The system SHALL render two full-bleed alternating photo rows with white
overlay text cards.

#### Scenario: Room rows

- **GIVEN** the page is rendered
- **WHEN** the room section is displayed
- **THEN** it SHALL show two full-width photos (one left-aligned, one
  right-aligned)
- **AND** each photo SHALL carry a white overlay card with a title and a
  "Read More" text button that turns gold on hover

### Requirement: Testimonials

The system SHALL render a testimonial carousel with four slides.

#### Scenario: Testimonial slides

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the title "Our Happy Customer Says About us"
- **AND** it SHALL show at least four slides, each with a quote, a client
  photo, a name (e.g. Mouunt Alezaber), and a role (e.g. Project manager)

### Requirement: Call to action

The system SHALL render a centered CTA band on a background image with a
headline and a gold button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the white headline "Are You Ready For Move?"
- **AND** it SHALL show a short paragraph of copy
- **AND** it SHALL show a gold "Sign Up" button

### Requirement: Blog

The system SHALL render a blog section with a title and four posts.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the title "Read Latest News From Our Blog"
- **AND** it SHALL show four posts: two image cards and two media rows
- **AND** each post SHALL show a meta line (date with a time icon, comment
  count, heart count), a title, and an excerpt

### Requirement: Footer

The system SHALL render a dark footer with four columns, a newsletter form,
and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About Us column with a blurb and social icons
- **AND** it SHALL show a Contact Info column with Address, Phone, and Email
- **AND** it SHALL show an Important Link column with four links
- **AND** it SHALL show a Newsletter column with a pill-shaped email input
  and a gold icon button
- **AND** the copyright bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Rentora app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, team, passion, apartment,
  room, testimonials, CTA, blog, and footer inside the main landmark in the
  original's order
- **AND** the document title SHALL be "Rentora — Real Estate"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- rentora` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → team →
      passion → apartment → room → testimonials → CTA → blog → footer).
- [ ] Design tokens applied: primary gold #cfb579 (brand, buttons,
      underlines, play button, hovers), hover #d8b25a, dark navy #14303a
      headings/nav text, footer #1b212e, Poppins headings + Open Sans
      kicker, gold 2px×90px section-title underlines, btn_1 solid gold
      rectangles, btn_2 text buttons with the 30px gold circle, pill
      newsletter input (radius 50px) with gold icon button.
- [ ] Hero shows the split layout with the curved-mask photo, gold play
      button, "View Property" gold button, and social icon row.
- [ ] Passion cards flip to white on hover (title/text → #14303a).
- [ ] Room overlay cards sit on the full-bleed photos (absolute, white,
      shadowed) with gold-on-hover Read More.
- [ ] All background images (passion_bg, cta_bg, blog_bg, banner_overlay,
      team photo, patten_bg) are replaced with picsum placeholders,
      colors/gradients, or masks — no ColorLib assets.
- [ ] Hero/team photos probed for subject fit (building for hero, people
      for team) before pinning seeds.
- [ ] PR description records source template (Rental), preview URL, tokens,
      and renames (including the "Sing Up" → "Sign Up" typo fix).

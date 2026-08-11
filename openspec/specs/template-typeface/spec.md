# Template: Typeface (Minimal Blog Website Template)

## Purpose

Typeface is a minimal blog/magazine home-page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wordify" template design (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wordify" — minimal blog one-pager (purple utility
  bar, huge centered serif-style logo, uppercase nav with dropdowns, full-bleed
  hero slider of featured posts, "Latest Posts" card grid with pagination,
  sidebar with search/bio/popular posts/categories/tags, dark footer; source:
  https://colorlib.com/wp/template/wordify/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/wordify/
  (HTTP 200, ~32 KB HTML fetched; `css/style.css` ~19.7 KB + `css/bootstrap.css`
  ~33 KB parsed for tokens). Title tag: "Colorlib Wordify — Minimal Blog
  Template". Bootstrap 4 + jQuery stack (owl-carousel, wow/animate), FontAwesome
  - Ionicons + Flaticon icons, no Tailwind.
- **Screenshot analyzed:** `wordify-free-template.jpg` (1200×946, TEMPLATES.md
  line 295) — solid purple strip on top with small white social icons left and
  a search field right; huge centered black "Wordify" logo (Josefin Sans, looks
  serif at 90px); uppercase gray nav (HOME BUSINESS TRAVEL CATEGORIES ABOUT
  CONTACT); large hero photo (pink flowers + "hello cactus" mug) with purple
  "TRAVEL" category tag, author avatar + name + date + comment count, white
  headline "How to Find the Video Games of Your Youth", excerpt, and white
  slider dots; below, the "Latest Posts" heading and a 3-column-looking grid of
  photo cards (2-col main grid + sidebar search box), with purple accents on
  the pagination. Matches the live DOM 1:1.
- **Section order (1:1):** Top bar (`div.top-bar`, bg #6610f2: 4 social icons
  left — Twitter/Facebook/Instagram/Youtube — + search form right) → Logo wrap
  (`div.container.logo-wrap`: centered `h1.site-logo` "Wordify" 90px/40px
  mobile, hamburger toggle on mobile) → Navbar (`nav.navbar.navbar-light
.bg-light`, transparent bg: links Home(active)/Business/Travel(dropdown:
  Asia, Europe, Dubai, Africa, South America)/Categories(dropdown: Lifestyle,
  Food, Adventure, Travel, Business)/About/Contact; mobile collapse bg #e6e6e6)
  → Hero slider (`section.site-section.pt-5.pb-5` → `div.owl-carousel
.home-slider`: 3 slides `a.a-block.height-lg` 500px, bg image + ::before
  black overlay 30% opacity, `.text.half-to-full` max-width 50%, category badge
  (Food/Travel/Sports), post-meta (30px circular avatar + "Colorlib" + • +
  "March 15, 2018" + • + 3 comments), white h3 headline "How to Find the Video
  Games of Your Youth", white excerpt; owl dots bottom center — 10px circles,
  2px rgba(255,255,255,.5) border, active solid white; prev/next arrows appear
  on hover) → Latest Posts (`section.site-section.py-sm` — zero vertical
  padding: h2 "Latest Posts"; grid `col-lg-8 main-content` + `col-lg-4
sidebar`) → Blog grid (2-col `col-md-6` rows, 8 entries: `a.blog-entry` —
  img + `.blog-content-body` (1px #efefef border, border-top none, padding 20px;
  hover opacity .7 + lift + shadow), post-meta 14px #b3b3b3 (30px avatar +
  author + • + date + • + comment count), h2 18px/1.5 black, p 13px gray) →
  Pagination (`nav[aria-label="Page navigation"]` centered: ‹ 1 2 3 4 5 ›,
  40px circles, hover/active bg #6610f2 white) → Sidebar (search-form box:
  input bg #f7f7f7, placeholder "Type a keyword and hit enter"; bio card:
  avatar with 4px white border + shadow, "David Craig", paragraph, "Read my
  bio" btn-primary rounded, social row; Popular Posts: 3 horizontal
  img+h4+date entries; Categories: Food(12) Travel(22) Lifestyle(37)
  Business(42) Adventure(14), dotted separators, count right in #ccc; Tags:
  tagcloud Travel Adventure Food Lifestyle Business Freelancing) → Footer
  (`footer.site-footer`, bg #262626, 5em padding: col About Us (h3 14px
  uppercase ls .2em white, img_1, paragraph + "Read More" link); col Latest
  Post (3 horizontal entries, white h4); col Quick Links (About Us, Travel,
  Adventure, Courses, Categories) + Social (Twitter, Facebook, Instagram,
  Vimeo, Youtube with icons); copyright bar: "Copyright © <year> All Rights
  Reserved | This template is made with <heart> by Colorlib" → replaced by
  original attribution).
- **Design tokens extracted from the preview CSS (computed values verified in
  the stylesheet):**
  - Brand purple: **#6610f2** — `.top-bar` bg, `.category` badge bg, `.navbar
.dropdown-item:hover/.active` bg, `.pagination li a:hover` bg, owl-carousel
    dot `.active` bg, `.btn.btn-primary` bg/border (Bootstrap primary override
    in this build), footer categories.
  - Purple hover: **#8540f5** — `.btn.btn-primary:hover` bg/border.
  - Dark purple: **#510bc4** — top-bar search input bg; focus **#3d0894**.
  - Dark footer: **#262626** — `.site-footer` bg; footer headings white,
    paragraphs rgba(255,255,255,.5), links white.
  - Light grays: **#efefef** (blog-content-body + body frame border),
    **#e6e6e6** (borders, mobile navbar bg, owl dots), **#f7f7f7** (sidebar
    search input bg), **#dee2e6** (categories dotted border), **#ccc** (body
    bg + category counts; body bg also uses `photography.png` pattern image).
  - Text: body **#6c757d** gray; headings **#000**; post-meta **#b3b3b3**;
    blog card excerpt "gray"; top-bar social icons white at 50% opacity (hover
    100%).
  - Fonts: headings + logo **"Josefin Sans"** (sans-serif stack); body
    **"Inconsolata"** monospace (SFMono/Menlo fallbacks), weight 300, 18px,
    line-height 1.9. Logo 90px (mobile 40px); h3 20px; nav-link 16px uppercase
    letter-spacing .05em; `.category` badge 12px uppercase ls .2em; footer h3
    14px uppercase ls .2em; post-meta 13–14px.
  - Body frame: `body { padding: 20px; border: 1px solid #efefef; border-top:
none; }` — the whole page sits inside a 20px light-bordered frame on the
    #ccc patterned background.
  - Buttons: `.btn`/`.form-control` border-radius **0** (sharp); `.btn.btn-primary`
    2px border, white text; hover #8540f5; bio button adds Bootstrap `rounded`.
  - Slider overlay: `.a-block:before` black 30% opacity (40% on hover);
    `.a-block` height-lg 500px, padding 30–80px; `.text.half-to-full` max-width
    50% (100% on mobile).
  - Cards: `.blog-entry:hover` opacity .7, translateY(-1px), shadow
    `0 3px 50px -2px rgba(0,0,0,.2)`.
  - Pagination: 40px circles, radius 50%, hover/active bg #6610f2 + white.
  - Dropdowns: radius 0, no border, shadow `0 2px 30px rgba(0,0,0,.2)`, white
    arrow notch.
  - Owl dots: 10px circles; home-slider dots 2px white border + active white
    fill; generic dots #e6e6e6, active #6610f2.
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/typeface-<n>/<w>/<h>`): slider img_1–3,
  blog cards img_5–12, avatar person_1 (repeat same seed for the author
  everywhere), footer/about image; icons → lucide-react (Search, MessageCircle
  for comments, Menu/X for hamburger; social icons → inline SVG — lucide
  removed brand icons); fonts Josefin Sans + Inconsolata via Google Fonts
  `<link>` in `index.html`; the slider is a state-based carousel with dot +
  prev/next controls (no new deps). Tokens #6610f2 / #8540f5 / #510bc4 /
  #3d0894 / #262626 / #efefef / #e6e6e6 / #f7f7f7 / #6c757d / #b3b3b3 / #000
  in `@theme`.

Typeface lives in `apps/typeface` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Top utility bar

The system SHALL render a purple top bar with social icons on the left and a
search field on the right.

#### Scenario: Top bar content

- **GIVEN** the Typeface page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL have a solid #6610f2 background with small white
  social icons (Twitter, Facebook, Instagram, Youtube) on the left at 50%
  opacity (100% on hover)
- **AND** the top bar SHALL show a search input on the right with a dark
  purple (#510bc4) background, white text, a search icon, and the placeholder
  "Type keyword to search..." (focus background #3d0894)

### Requirement: Site logo

The system SHALL render the brand as a huge centered logo below the top bar.

#### Scenario: Logo content

- **GIVEN** the Typeface page is rendered
- **WHEN** the page loads
- **THEN** the logo SHALL read "Typeface" in Josefin Sans at ~90px in black,
  centered (40px on mobile)
- **AND** on mobile SHALL a hamburger toggle be shown to open the nav menu

### Requirement: Navigation bar

The system SHALL render an uppercase nav with plain links and two dropdowns.

#### Scenario: Navbar content

- **GIVEN** the navbar is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the links Home (active), Business, Travel,
  Categories, About, and Contact in uppercase 16px with .05em letter-spacing
  on a transparent background
- **AND** the Travel dropdown SHALL contain Asia, Europe, Dubai, Africa, and
  South America
- **AND** the Categories dropdown SHALL contain Lifestyle, Food, Adventure,
  Travel, and Business
- **AND** dropdown items SHALL highlight with a #6610f2 background on hover
  and when active

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user activates the hamburger toggle
- **THEN** the nav links SHALL be reachable via the collapsible menu
  (aria-expanded toggled) with a #e6e6e6 background

### Requirement: Hero slider

The system SHALL render a full-width hero carousel of featured posts.

#### Scenario: Slider content

- **GIVEN** the hero slider is rendered
- **WHEN** the page loads
- **THEN** the slider SHALL show one featured post slide at a time (~500px
  tall, full-width background image with a 30% black overlay)
- **AND** each slide SHALL show a purple category badge (Food / Travel /
  Sports), the post meta (circular 30px author avatar, author name, bullet,
  date "March 15, 2018", bullet, comment count), a white headline "How to Find
  the Video Games of Your Youth", and a white excerpt
- **AND** the overlay text SHALL be constrained to ~50% width on desktop
  (full width on mobile)

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks the dot indicators or the prev/next arrows
- **THEN** the visible slide SHALL change accordingly
- **AND** the active dot SHALL be a solid white 10px circle with a 2px white
  border (inactive dots have 50%-white borders)
- **AND** the arrows SHALL be revealed on hover over the slider

### Requirement: Latest Posts grid

The system SHALL render the "Latest Posts" section with a two-column card grid
and pagination.

#### Scenario: Blog card grid

- **GIVEN** the Latest Posts section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Latest Posts"
- **AND** it SHALL render eight blog cards in a 2-column grid (1 column on
  mobile), each with a thumbnail image, a content body framed by a 1px #efefef
  border (no top border), the post meta (avatar, author, date, comment count),
  an 18px black title "How to Find the Video Games of Your Youth", and a short
  gray excerpt
- **AND** hovering a card SHALL dim it to ~70% opacity, lift it 1px, and show
  a soft shadow

#### Scenario: Pagination

- **GIVEN** the blog grid is rendered
- **WHEN** the page loads
- **THEN** a centered pagination SHALL show ‹, 1–5, and › as 40px circular
  buttons
- **AND** the active page and hovered buttons SHALL use a #6610f2 background
  with white text

### Requirement: Sidebar

The system SHALL render a right sidebar with search, author bio, popular
posts, categories, and tags.

#### Scenario: Search box

- **GIVEN** the sidebar is rendered
- **WHEN** the page loads
- **THEN** the first sidebar box SHALL contain a search input with a #f7f7f7
  background, no border, a search icon, and the placeholder "Type a keyword
  and hit enter"

#### Scenario: Author bio

- **GIVEN** the sidebar is rendered
- **WHEN** the page loads
- **THEN** the bio box SHALL show a circular avatar with a 4px white border
  and shadow, the name "David Craig", a short bio paragraph, a rounded
  primary "Read my bio" button, and a row of social icons

#### Scenario: Popular posts

- **GIVEN** the sidebar is rendered
- **WHEN** the page loads
- **THEN** the "Popular Posts" box SHALL list three horizontal entries, each
  with a thumbnail, an 18px title, and a date meta line

#### Scenario: Categories and tags

- **GIVEN** the sidebar is rendered
- **WHEN** the page loads
- **THEN** the "Categories" box SHALL list Food (12), Travel (22), Lifestyle
  (37), Business (42), and Adventure (14) with dotted separators and the count
  right-aligned in #ccc
- **AND** the "Tags" box SHALL render a tagcloud with Travel, Adventure, Food,
  Lifestyle, Business, and Freelancing

### Requirement: Footer

The system SHALL render a dark footer with about, latest posts, link columns,
social links, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a #262626 background with white uppercase
  14px .2em-letter-spacing column headings
- **AND** the "About Us" column SHALL show an image, a short paragraph, and a
  "Read More" link
- **AND** the "Latest Post" column SHALL list three horizontal entries with
  white titles and date/comment meta
- **AND** the "Quick Links" column SHALL list About Us, Travel, Adventure,
  Courses, and Categories
- **AND** the "Social" column SHALL list Twitter, Facebook, Instagram, Vimeo,
  and Youtube with icons
- **AND** the footer SHALL show a centered copyright bar with the current year
  and an original attribution (the ColorLib credit is replaced)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Typeface app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header (top bar + logo + navbar) in the
  banner landmark, the hero slider and Latest Posts + sidebar in the main
  landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Typeface — Minimal Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/typeface` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- typeface` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#6610f2, #8540f5, #510bc4, #3d0894, #262626, #efefef, #e6e6e6, #f7f7f7, #6c757d, #b3b3b3, #000, Josefin Sans + Inconsolata) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `typeface-<n>`, Google Fonts link, lucide icons + inline SVG brand icons only)
- [ ] Body frame reproduced (20px padding + 1px #efefef border on a #ccc textured page background)
- [ ] Slider and carousels implemented with client-side state (fake timers in tests where needed)

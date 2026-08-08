# Template: Prose (Blog Template)

## Purpose

Prose is a single-page blog/magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wordify" website template design
(source: https://colorlib.com/wp/template/wordify/), built under a
DIFFERENT name (Prose — writing/literary reference) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wordify" — editorial blog template (category:
  Blog). The official preview `https://preview.colorlib.com/theme/wordify/`
  is LIVE (HTTP 200, ~32 KB HTML; stylesheets: `css/bootstrap.css`,
  `css/animate.css`, `css/owl.carousel.min.css`, `fonts/ionicons`,
  `fonts/fontawesome`, `fonts/flaticon`, `css/style.css` ~19 KB parsed for
  tokens). The TEMPLATES.md screenshot (`wordify-free-template.jpg`,
  1200×946) confirms the same design.
- **Visual design (screenshot `wordify-free-template.jpg`):** thin dark
  purple top utility bar with social icons left + search right; clean white
  header with a LARGE centered serif-style logo "Wordify"; centered nav
  links (HOME / BUSINESS / TRAVEL / CATEGORIES / ABOUT / CONTACT); full-bleed
  hero slider (lifestyle photo with bottom gradient overlay, white text,
  category tag + dots); below it a white "Latest Posts" area with a 2-column
  blog card grid (photo thumb + title + meta) and a right sidebar (search
  box, author bio, widgets); white/light-gray palette with purple accents,
  editorial serif-ish headings and clean sans body. Dark footer not visible
  in the screenshot but present in the DOM.
- **Section order (1:1, from live preview DOM):**
  1. Top bar (bg `#6610f2`): social icons left (Twitter/Facebook/Instagram
     etc., white at 50% opacity) + search icon/input right.
  2. Logo header (`container logo-wrap`, centered): giant site logo
     "Wordify" (`font-size: 90px`, black, Josefin Sans).
  3. Navbar (transparent over white, `navbar-expand-md`): Home, Business
     (dropdown: Asia, Europe, Dubai, Africa, South America), Travel,
     Categories (dropdown: Lifestyle, Food, Adventure, Travel, Business),
     About, Contact; mobile hamburger collapses the menu.
  4. Hero slider (`owl-carousel home-slider`, full-width): 3+ slides, each
     a full-bleed background image (`a-block d-flex align-items-center
height-lg`) with: purple uppercase category badge (e.g. Food), post
     meta (author avatar + name · date · comment count), H3 headline ("How
     to Find the Video Games of Your Youth"), one-line excerpt, and a
     "Read More" link; owl dots below (purple active dot).
  5. Latest Posts (`section site-section py-sm`): H2 "Latest Posts" (with
     `mb-4`), grid `row` with `col-md-12 col-lg-8 main-content` +
     `col-md-12 col-lg-4 sidebar`.
     - Main content: `row` of `col-md-6` blog cards (`a.blog-entry
element-animate`): image (4:3-ish), then `.blog-content-body`
       (padding 20px, `border: 1px solid #efefef`, border-top none) with
       `.post-meta` (author avatar + "Colorlib" · "March 15, 2018" ·
       comment icon + "3") and H2 title. 8 cards total.
     - Pagination (`nav text-center`): circular 40px page buttons
       (`border-radius: 50%`, purple active/hover).
     - Sidebar (`.sidebar-box` stack, `bg #fff`):
       a. Search form (`search-form-wrap`, purple input/button).
       b. Author bio (`bio text-center`): avatar, "David Craig", blurb,
       "Read my bio" link.
       c. Popular Posts (`post-entry-sidebar`): 3+ thumbnail rows (img +
       title + meta).
       d. Categories widget: Food, Travel, Lifestyle, Business, Adventure.
       e. Tags widget (`tags`): gray pills (Travel, Adventure, Food,
       Lifestyle, Business, Freelancing) on `#f2f2f2`.
  6. Footer (`site-footer`, bg `#262626`): 4 columns — About Us (blurb +
     Read More), Latest Post (thumbnail list), Quick Links (About Us,
     Travel, Adventure, Courses, Categories), Social (Twitter, Facebook,
     Instagram, Vimeo, YouTube, Snapchat icons); bottom bar with
     copyright + social.
- **Design tokens (extracted from `css/style.css`):**
  - Brand purple: `#6610f2` (top bar bg, category badge bg, primary btn
    bg, slider dot active, pagination active, tags hover, dropdown active);
    hover/alt shades `#8540f5` (btn-primary hover), `#510bc4`, `#3d0894`
    (darker variants).
  - Neutrals: `#000` (headings), `#6c757d` (body text), `#fff` (cards,
    header, sidebar boxes), `#e6e6e6` (borders), `#efefef` (card border),
    `#f2f2f2` (tag bg, input bg), `#ccc` + repeating
    `images/photography.png` texture (page background), `#262626` (footer
    bg).
  - Fonts: **"Josefin Sans"** (headings + logo, via Google Fonts) and
    **"Inconsolata"** (body — distinctive monospace, 18px/1.9, weight 300,
    via Google Fonts).
  - Buttons: `.btn` padding 8px 20px, `border-radius: 4px`,
    `.btn-primary` = purple bg + white text + 2px border, hover `#8540f5`;
    `.btn-sm` 14px.
  - Category badge: inline-block, purple bg, white uppercase 12px text,
    padding 2px 8px, radius 4px, letter-spacing, margin-right 10px.
  - Post meta: white (over images) / gray elsewhere, uppercase 13px,
    letter-spacing .1em, margin-bottom 30px.
  - Sidebar headings: 18px, margin-bottom 30px, padding-bottom 20px,
    bottom border 1px `#e6e6e6`.
  - Pagination: 40px circles (`border-radius: 50%`), purple active/hover.
  - Footer headings: white, 14px uppercase, letter-spacing .2em; footer
    text `rgba(255,255,255,.5)`; footer links white.
  - Bio card: white bg, 1px `#e6e6e6` border, 15px padding.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/prose-<n>/<w>/<h>`); icons → lucide-react (Search,
  MessageCircle, Calendar, socials as inline SVG brand icons — lucide has
  no brand icons); Josefin Sans + Inconsolata via Google Fonts `<link>` in
  index.html; repo-standard Navbar + Footer chrome from `packages/ui`
  (Button, ButtonLink, cn). Author "Colorlib" → fictional author name
  (e.g. "Daniel Reyes"); site name "Wordify" → "Prose". The body font is
  deliberately monospace (Inconsolata) — keep this quirk; it is the
  template's signature.

Prose lives in `apps/prose` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a purple top utility bar with social icons on the
left and a search control on the right.

#### Scenario: Top bar content

- **GIVEN** the Prose page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show at least three social icons on the left
- **AND** the top bar SHALL show a search input on the right

### Requirement: Site header

The system SHALL render a centered site logo header below the top bar.

#### Scenario: Logo header content

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Prose" as a large centered logo

### Requirement: Navigation bar

The system SHALL render a navigation bar with the main links and the
Categories/Business dropdown menus.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links Home, Business, Travel, Categories, About,
  and Contact
- **AND** the Categories menu SHALL include Lifestyle, Food, Adventure,
  Travel, and Business

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at mobile width
- **WHEN** the user presses the hamburger button
- **THEN** the collapsed menu SHALL expand to show the same links

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with at least three
slides, each showing a category badge, post meta, headline, excerpt, and
read-more link.

#### Scenario: Slider content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** the first slide SHALL show a category badge (e.g. Food), a
  headline "How to Find the Video Games of Your Youth", post meta with
  author, date, and comment count, and a Read More link

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks the next slide control or a dot
- **THEN** the slider SHALL advance to the next slide

### Requirement: Latest posts section

The system SHALL render a "Latest Posts" heading followed by a 2-column
grid of at least six blog cards, each with an image, post meta, and title.

#### Scenario: Blog card content

- **GIVEN** the page is rendered
- **WHEN** the latest posts grid is displayed
- **THEN** it SHALL contain the heading "Latest Posts"
- **AND** each card SHALL show an image, meta (author, date, comment
  count), and a post title

#### Scenario: Pagination

- **GIVEN** the latest posts grid is displayed
- **WHEN** the pagination controls are rendered
- **THEN** the pagination SHALL show circular page buttons with the
  current page highlighted in purple

### Requirement: Sidebar

The system SHALL render a right sidebar with a search form, author bio,
popular posts, categories, and tags widgets.

#### Scenario: Sidebar content

- **GIVEN** the page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show a search form, an author bio card with a "Read my
  bio" link, a Popular Posts list, a Categories list, and a Tags list

### Requirement: Footer

The system SHALL render a dark footer with about, latest post, quick
links, and social columns plus a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the columns About Us, Latest Post, Quick Links,
  and Social
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Prose app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar and header in the banner
  landmark, all sections in the main landmark, and the footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Prose — Blog Template"

## Verification checklist (implementer)

- [ ] `scripts/verify-app.sh prose` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] `npm run spec:validate` passes for `openspec/specs/template-prose`
- [ ] Section order matches the reference 1:1 (Top bar → Logo header →
      Navbar → Hero slider → Latest Posts + sidebar → Footer)
- [ ] Design tokens applied via `@theme` (brand purple `#6610f2` + hover
      `#8540f5`, Josefin Sans headings, Inconsolata monospace body, radius
      4px buttons / 50% pagination circles, `#262626` footer)
- [ ] Page background uses the `#ccc` + subtle texture treatment; blog
      cards keep the `#efefef`-bordered `blog-content-body` style
- [ ] No ColorLib assets copied; seeded picsum placeholders + lucide icons
      (brand socials as inline SVGs)
- [ ] PR description includes: source (ColorLib Wordify), preview URL,
      tokens used, differences (new name, placeholders)

# Template: Vellum (Blog)

## Purpose

Vellum is a single-page blog website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Readit"
website template design (source: https://colorlib.com/wp/template/readit/),
built under a DIFFERENT name (Vellum — a fine writing/publishing surface,
keeping the "reading/writing" spirit of "Readit" while being a new, original
name) per the monorepo naming mandate, with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Readit" — blog website template (source:
  https://colorlib.com/wp/template/readit/, category "Blog (60)"). Template
  name: "Readit".
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/readit/`) is REACHABLE (HTTP 200,
  ~25 KB HTML + `css/style.css` ~66 KB + Bootstrap 4 CSS parsed for tokens).
  Structure below comes from the live preview DOM, which is authoritative.
- **Screenshot note:** the TEMPLATES.md screenshot (`readit-free-template.jpg`)
  matches the live preview: full-bleed hero with a diagonal
  magenta→orange gradient over a photo (a woman with a wide-brimmed hat,
  right side, partially visible through the gradient), huge white "Readit
  blog" headline + "Hello! Welcome to" subheading, scroll-down arrow, then a
  white blog-list area where each entry is image-left / text-right. The
  screenshot's navbar logo reads in a warm tone but the live preview CSS
  styles the dark navbar (`bg-dark` #343A40) with a WHITE brand + links —
  follow the live preview (dark navbar, white text).
- **Section order (1:1, from live preview DOM):**
  1. Navbar (`ftco_navbar bg-dark navbar-dark ftco-navbar-light`): brand
     "Readit." (white), nav links Home · Articles · Team · Contact (18px,
     rgba(255,255,255,.8), hover #FFD369). On scroll past the hero
     (`.scrolled`) it becomes fixed with a WHITE background + shadow
     (`margin-top: -130px` slide-in effect). Mobile hamburger
     (`navbar-toggler`) with dark navbar.
  2. Hero (`hero-wrap js-fullheight`, background-image bg_1.jpg + parallax
     `data-stellar-background-ratio="0.5"`): full-viewport; `.overlay`
     div = `linear-gradient(45deg, #F200FF 0%, #FFBA42 100%)` at opacity .8
     over the image. Content left-aligned (`slider-text`): `h2.subheading`
     "Hello! Welcome to" (18px white), `h1` "Readit blog" (10vw, white,
     Poppins 700, line-height 1.2), a short lorem paragraph in a
     `col-md-7` wrapper, and a `mouse` scroll indicator (`mouse-icon` 80px +
     `mouse-wheel` 30px rounded border with `ion-ios-arrow-round-down`).
  3. Blog list (`ftco-section`, container, col-md-12): NINE `.case` rows,
     each a full-width split: image link left (`col-md-6 col-lg-6 col-xl-8
d-flex`, `<a class="img w-100">` with inline `background-image`,
     height 400px) + text right (`col-md-6 col-lg-6 col-xl-4 d-flex`,
     `.text pl-md-3`): `span.subheading` category tag (uppercase 14px,
     rgba(0,0,0,.2); demo uses Illustration / Application / Design),
     `h2` title link (40px, 700, #000; demo text "Build a website in
     minutes with Adobe Templates"), `.media-social` icon list
     (twitter/facebook/instagram — opacity 0, fades in on hover; always
     visible ≤1199px), `.meta` line "11/13/2019 | 12 min read" (gray).
     On mobile the image stacks above the text (`mb-3 mb-md-0`).
  4. Pagination (`block-27`, centered, `row mt-5`): `« 1 2 3 4 5 »` — 40px
     square items, `li.active` has bg #FFD369 + white text.
  5. Footer (`ftco-footer ftco-bg-dark ftco-section`, bg #3C312E): four
     `ftco-footer-widget` columns:
     - About: brand "Readit." + blurb "Far far away, behind the word
       mountains, ..." + social icon links.
     - "latest News": two list items, each a headline "Even the
       all-powerful Pointing has no control about" + meta
       "Oct. 16, 2019 · Admin · 19".
     - "Information": links Home · About · Articles · Contact.
     - "Have a Questions?": address "203 Fake St. Mountain View, San
       Francisco, California, USA", phone "+2 392 3929 210", email
       "info@yourdomain.com".
     - Bottom bar: copyright "Copyright © All rights reserved | This
       template is made with ♥ by Colorlib".
- **Design tokens extracted from `css/style.css` + preview DOM:**
  - Brand color: **#FFD369** (warm gold/yellow) — `.btn-primary` bg/border,
    nav-link hover, active pagination item. Button hover flips to
    transparent bg + #FFD369 text (outline style).
  - Hero overlay gradient: **#F200FF** (magenta) → **#FFBA42** (orange) at
    45deg, opacity .8, over a full-bleed hero photo.
  - Headings: **#000** (`.case .text h2` #000, 40px, 700); hero h1 white
    10vw 700; card category tag rgba(0,0,0,0.2) uppercase 14px.
  - Navbar: bg **#343A40** (Bootstrap `bg-dark`), links rgba(255,255,255,.8)
    18px → hover #FFD369; brand #FFF; scrolled state bg #FFF + shadow.
  - Footer: bg **#3C312E** (dark cocoa), widget h2 #FFF 20px normal weight
    (margin-bottom 40px).
  - Fonts: **"Poppins", Arial, sans-serif** for everything (body + display)
    — load Poppins (400, 500, 700) via Google Fonts `<link>` in
    `index.html`.
  - Buttons: Bootstrap `.btn` shape — radius **3px**, no shadow; `.btn-
primary` bg/border #FFD369, white text; hover = transparent bg, #FFD369
    text/border.
  - Card image: 400px tall, `background-size: cover` (implement as an
    `<img>` with h-[400px] object-cover).
  - Pagination item: 40px square, centered; active bg #FFD369 white text.
  - Mouse scroll indicator: 80px tall, 30px wide wheel (rounded border,
    animated), arrow-down icon inside.

## Requirements

### Requirement: Navbar

The system SHALL render a dark fixed navbar with the brand, nav links, and a
mobile menu toggle that switches to a white fixed bar on scroll.

#### Scenario: Navbar content

- **GIVEN** the Vellum page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Vellum." in white
- **AND** the navbar SHALL show nav links Home, Articles, Team, and Contact
- **AND** the navbar SHALL have a dark background (#343A40)
- **AND** the nav links SHALL be light (rgba(255,255,255,.8)) and turn brand
  gold (#FFD369) on hover

#### Scenario: Navbar on scroll

- **GIVEN** the user scrolls past the hero section
- **WHEN** the navbar enters its scrolled state
- **THEN** it SHALL become fixed at the top with a white background and a
  subtle shadow

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user activates the menu toggle
- **THEN** a menu SHALL open listing all nav links
- **AND** the toggle SHALL be labeled accessibly (aria-label) and reflect
  open/closed state (aria-expanded)

### Requirement: Hero

The system SHALL render a full-viewport hero with a gradient overlay over a
background image, headline, blurb, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL fill the viewport height
- **AND** it SHALL show a background image with a diagonal
  magenta→orange gradient overlay (#F200FF → #FFBA42, 45deg, ~80% opacity)
- **AND** it SHALL show the subheading "Hello! Welcome to" (white)
- **AND** it SHALL show the headline "Vellum blog" in very large white bold
  type (≥ 8vw, Poppins 700)
- **AND** it SHALL show a short supporting paragraph
- **AND** it SHALL show a scroll-down indicator (mouse-style, accessible
  aria-label) linking to the blog section

### Requirement: Blog list

The system SHALL render a list of blog entries, each split image-left /
text-right.

#### Scenario: Blog entry layout

- **GIVEN** the blog list section is displayed
- **WHEN** the user views an entry
- **THEN** it SHALL show a 400px-tall image on the left (full width on
  mobile, stacking above the text)
- **AND** it SHALL show an uppercase category tag (e.g. Illustration,
  Application, Design)
- **AND** it SHALL show a bold 40px title link (#000)
- **AND** it SHALL show a meta line with a date and a read-time
  (e.g. "11/13/2019 | 12 min read")
- **AND** the entry SHALL be a link to the full article

#### Scenario: Entry hover socials

- **GIVEN** an entry is displayed on a desktop viewport
- **WHEN** the user hovers over the entry text
- **THEN** social icon links (twitter/facebook/instagram equivalents from
  lucide-react) SHALL fade in
- **AND** on mobile they SHALL be always visible

#### Scenario: Blog list content

- **GIVEN** the blog list is displayed
- **WHEN** the page loads
- **THEN** it SHALL contain exactly nine entries (matching the reference)
- **AND** all images SHALL be placeholder images
  (picsum.photos/seed/vellum-<n>/<w>/<h>) with alt text

### Requirement: Pagination

The system SHALL render a centered pagination control under the blog list.

#### Scenario: Pagination content

- **GIVEN** the blog list section is displayed
- **WHEN** the user reaches the bottom of the list
- **THEN** a pagination SHALL show: « 1 2 3 4 5 »
- **AND** the current page SHALL be highlighted with the brand gold
  background (#FFD369) and white text
- **AND** the arrows and page numbers SHALL be links (aria-label on arrow
  links)

### Requirement: Footer

The system SHALL render a dark footer with about text, latest news items,
information links, contact info, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a dark cocoa background (#3C312E)
- **AND** it SHALL show an about column: brand "Vellum.", a short blurb,
  and social icon links
- **AND** it SHALL show a "latest News" column with at least two news items
  (headline + meta: date · author · comment count)
- **AND** it SHALL show an "Information" column with links (Home, About,
  Articles, Contact)
- **AND** it SHALL show a "Have a Questions?" column with an address, a
  phone number, and an email
- **AND** it SHALL show the copyright line "Copyright © All rights reserved
  | This template is made with ♥ by Colorlib"

### Requirement: Page composition

The system SHALL compose all sections in the reference order on one page.

#### Scenario: Section order

- **GIVEN** the Vellum page is rendered
- **WHEN** the user scrolls from top to bottom
- **THEN** the sections SHALL appear in this order: Navbar, Hero, Blog
  list, Pagination, Footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] Section order matches the reference 1:1 (Navbar → Hero → Blog list →
      Pagination → Footer)
- [ ] Design tokens reproduced in Tailwind `@theme`: `--color-brand`
      #FFD369 (gold), `--color-flare` #F200FF (magenta), `--color-ember`
      #FFBA42 (orange), `--color-ink` #000, `--color-coal` #343A40
      (navbar), `--color-cocoa` #3C312E (footer); font Poppins via Google
      Fonts `<link>` in `index.html`
- [ ] Buttons match reference shape: radius 3px, bg #FFD369, white text,
      hover = transparent bg + gold text
- [ ] Hero: full-viewport, gradient overlay (45deg #F200FF → #FFBA42 at
      ~80% opacity) over image, "Hello! Welcome to" + huge white headline +
      paragraph + scroll-down indicator
- [ ] Nine blog entries, image-left/text-right (image stacks on mobile),
      category tag, 40px bold title, date|read-time meta, hover-reveal
      socials
- [ ] Pagination « 1 2 3 4 5 », active page gold
- [ ] Footer: 4 widgets + copyright, bg #3C312E
- [ ] All images are picsum placeholders with alt text; no ColorLib assets
- [ ] Icons from lucide-react (no icon fonts copied)
- [ ] Mobile menu toggle + accessible controls (aria-label/aria-expanded)
- [ ] Tests: one `describe` per component, scenarios mirroring this spec;
      100% coverage (lines/functions/branches/statements)
- [ ] `scripts/verify-app.sh vellum` green (typecheck + lint + coverage +
      build)

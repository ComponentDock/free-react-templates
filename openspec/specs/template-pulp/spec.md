# Template: Pulp (Beauty — Magazine Editorial)

## Purpose

Pulp is a single-page magazine/fashion editorial template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Erase" design (see TEMPLATES.md — line 217, first unchecked
item whose prep did not exist on main), built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a bold editorial magazine landing page: a transparent header
with hamburger over a full-height hero dominated by a giant image-filled
"ERASE" wordmark ("Magazine" eyebrow above, "UK Edition" below), followed by an
edge-to-edge list of eleven alternating image/text article rows (author avatar
chip + headline + excerpt + pill "Read more" button, with every few rows
inverted onto a dark #212121 band with a circular image on the right), and a
dark four-widget footer (brand + social circles, Recent Blog, Site Links,
Have a Questions?). Pulp recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Erase" — free Bootstrap 4 magazine/fashion editorial
  website template (source: https://colorlib.com/wp/template/erase/).
  New name: **pulp** (print-magazine "pulp"; single word, no collision with
  `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/erase/`
  (HTTP 200, ~30KB) + stylesheets `css/style.css` (~61KB — Bootstrap 4.3.1
  base vars + custom template styles), `css/icomoon.css` icon font
  (Twitter/Facebook/Instagram, calendar/person/chat, map/phone/envelope,
  arrow-forward), plus owl.carousel, animate, aos, magnific-popup, ionicons.
  Fonts: **Poppins** (100–700) and **Abril Fatface** (400) served via
  Cloudflare `cf-fonts` `@font-face` blocks inline in the head — in the
  recreation load them from Google Fonts `<link>` instead. The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`erase-free-template.jpg`, 1200×946) confirms the visual design: deep
  olive/dark hero background, giant high-contrast serif **"ERASE"** letters
  filled with a watercolor/multicolor image texture (white → teal/green →
  pink/purple), small uppercase letter-spaced "MAGAZINE" label top-left and
  "UK EDITION" bottom-right, white "ERASE" logo top-left + hamburger top-right;
  below, a split article card — dark woman portrait photo left, white content
  right with circular avatar + "Jamie Jonson" + "FASHION.COM" + headline +
  "Read more" pill.
- **Section order (1:1):**
  1. `nav#colorlib-main-nav` — fullscreen overlay menu: `position: absolute;
top/bottom/right: 0; width/height: 100%; background: rgba(0,0,0,0.99)`;
     hidden by default (`visibility: hidden; opacity: 0; transform: scale(0)`
     with a `cubic-bezier(0.175,0.885,0.32,1.275)` 0.8s transition); when
     `.menu-show` it becomes `visibility: visible; opacity: 1;
transform: scale(1)` (scale-in reveal). Inside: a background photo
     `div.img` with `:after` overlay `rgba(0,0,0,0.3)`, vertically centered
     content: `h1` logo "Erase" (Abril Fatface, 80px, white, uppercase,
     letter-spacing 2px) with a small tagline `span` (14px, weight 300,
     `rgba(255,255,255,0.8)`, letter-spacing 8px); `ul` of links **Home,
     About, Blog, Contact** (12px, uppercase, letter-spacing 5px, white,
     `padding: 5px 0`; each `span` wraps the label; hover shows an underline
     `:before` `scaleX(0→1)` animation; `.active` link text **#f8b500** gold
     with `#69779b` underline). Close button `a.colorlib-nav-toggle.active`
     (top: 40px; right: 40px) — the hamburger morphs into an X
     (`.active i` transparent middle bar, `::before/::after` rotate ±45deg).
  2. `header` — `position: absolute; top: 0; left/right: 0; z-index: 9;
padding: 2em 0` (1em mobile), transparent, `div.container`:
     left `a.colorlib-logo` "Erase" (Poppins, 12px, uppercase, white,
     letter-spacing 5px, weight 600) with a small `span` tagline (11px,
     weight 300, `rgba(255,255,255,0.8)`, letter-spacing 7px); right
     `a.js-colorlib-nav-toggle.colorlib-nav-toggle` — hamburger `i` (20×2px
     white bar + `::before/::after` 30×2px white bars, animated to X on
     `.active`, hover spacing grows ±3px).
  3. `section.hero-wrap.js-fullheight` — full-height hero
     (`height: 100%`/`700px`, `position: relative; overflow: hidden`,
     `background-size: cover`); `div.container-fluid.px-0 > div.row.no-gutters
.slider-text.js-fullheight.align-items-center.justify-content-center >
div.col-md-12.ftco-animate.text-center > div.desc`. Content:
     `span.subheading` **"Magazine"** (12px, uppercase, weight 600,
     letter-spacing 20px, white, absolutely positioned top-left of the text
     block) / `h1` **"Erase"** with inline `style="background-image:
url(images/bg_1.jpg)"` (Abril Fatface, 340px → 200px ≤1200 → 150px ≤992
     → 100px ≤768, uppercase, `line-height: 1`, `background-clip: text;
text-fill-color: transparent` — the wordmark is filled with the
     photo/watercolor texture; `overflow: hidden`) / `span.subheading-2`
     **"UK Edition"** (same style, letter-spacing 10px, bottom-right).
     The hero `background-color` cycles via `@keyframes myanimation` (20s
     infinite: `#69779b → #f8b500 → #212121 → #064acb → #69779b`); an
     optional `.overlay` div is `background: #000; opacity: .3` (present on
     some inner pages — the index hero relies on the photo + color cycle).
  4. `section.ftco-section.ftco-no-pb.ftco-no-pt` — edge-to-edge editorial
     list (`padding: 0` top/bottom, `container-fluid.px-0`) of **11**
     `div.col-md-12.blog-wrap` rows, each `div.row.no-gutters.align-items-
center`: image half `div.col-md-6.img.js-fullheight` (cover
     background-image) + text half `div.col-md-6 > div.text.p-md-5.p-4`:
     (a) author chip `div.icon.d-flex.align-items-center.mb-5`: 60×60px
     circular avatar `div.img` + `div.position.pl-3`: `h4` "Jamie Jonson"
     (16px, `rgba(0,0,0,0.7)`) + `span` "fashion.com" (12px, uppercase,
     letter-spacing 4px); (b) `h2.mb-4 > a` **"Make Peace With Your Broken
     Pieces"** (50px, weight 900, black); (c) lorem paragraph (body 18px,
     `rgba(0,0,0,0.5)`); (d) `p.mb-0.mt-4 > a.btn.btn-primary` **"Read
     more"** + arrow icon (pill: `border-radius: 30px`, bg/border **#69779b**,
     white text; hover: transparent bg, `#69779b` text, border stays).
     Rows **3 and 10** are `div.blog-wrap.bg-darken` (bg **#212121**): the
     image half becomes `order-md-last` (image on the right) and the image is
     `div.img` 400×400px `border-radius: 50%` (circle), text turns
     `rgba(255,255,255,0.5)`, `h2 a` white, author `h4` white. Row images in
     order: image_1, image_2, image_4, image_5, image_6, image_7, image_8,
     image_9, image_10, image_11, image_12.
  5. `footer.ftco-footer.ftco-section.img` — `background: #212121; padding:
7em 0; font-size: 16px` with an inner `div.overlay` (subtle image bg +
     overlay), `div.container > div.row.mb-5` of four widgets:
     - `col-lg-3` — `h2.ftco-heading-2.logo > a` "Erase" (24px, white,
       Abril Fatface) + blurb paragraph (`rgba(255,255,255,0.7)`) +
       `ul.ftco-footer-social` — three 60×60px circles,
       `border-radius: 50%`, bg `rgba(255,255,255,0.05)`, 26px icons,
       hover white text (Twitter, Facebook, Instagram).
     - `col-lg-4` — `h2` **"Recent Blog"** + two `div.block-21.mb-4.d-flex`
       entries: thumb `a.blog-img.mr-4` (cover image) + `div.text`:
       `h3.heading > a` (18px, `rgba(255,255,255,0.8)` → **#69779b** hover)
       - `div.meta` — inline 12px items: calendar "July 12, 2018", person
         "Admin", chat "19" (gray).
     - `col-lg-2` — `h2` **"Site Links"** + `ul.list-unstyled` links Home,
       About, Model, Services, Blog (each `a.py-2.d-block`).
     - `col-lg-3` — `h2` **"Have a Questions?"** + `div.block-23` rows:
       map-marker "203 Fake St. Mountain View, San Francisco, California,
       USA"; phone "+2 392 3929 210"; envelope "info@yourdomain.com"
       (40px icon column white, text `rgba(255,255,255,0.7)`).
       Bottom bar (`div.row > div.col-md-12.text-center`): copyright year +
       heart + **repo-standard credit** (replace the Colorlib credit line).
- **Design tokens extracted from `css/style.css` (Bootstrap 4.3.1 base +
  custom):**
  - Fonts: **"Abril Fatface", cursive** for display — hero wordmark (340px
    responsive, uppercase, `background-clip: text` image-fill), fullscreen
    menu logo (80px), footer logo (24px); **"Poppins", Arial, sans-serif**
    for everything else (body 18px / line-height 1.8). Google Fonts `<link>`
    in index.html.
  - Brand blue-gray: **#69779b** — `btn-primary` bg + border (white text),
    `a` link color, service icons, active-nav underline, footer Recent Blog
    title hover, logo icon, hero `@keyframes myanimation` stop 1; contact
    info links `#6c7a9d` (variant).
  - Gold: **#f8b500** — active fullscreen-menu link text; `myanimation`
    stop 2.
  - Dark: **#212121** — `bg-darken` rows, footer bg (`#212121`), `myanimation`
    stop 3; deep blue **#064acb** — `myanimation` stop 4.
  - Neutrals: body copy `rgba(0,0,0,0.5)`, headings `#000`, white on dark,
    light `#f8f9fa` (bg-light), form text `#737373`, meta `gray`, avatar
    label `rgba(0,0,0,0.7)`.
  - Overlays: fullscreen menu `rgba(0,0,0,0.99)` + bg-image overlay
    `rgba(0,0,0,0.3)`; hero overlay `rgba(0,0,0,0.3)` (optional index);
    footer links `rgba(255,255,255,0.7/0.8)`, footer social circle bg
    `rgba(255,255,255,0.05)`.
  - Buttons: pill `border-radius: 30px`, bg/border #69779b, white text,
    hover = transparent bg + colored text; arrow icon after label.
  - Sections: `.ftco-section` padding `7em 0`; editorial list section is
    `ftco-no-pt ftco-no-pb` (edge-to-edge, rows full-bleed); hero
    full-height 100vh/700px; footer padding `7em 0`.
  - Social circles: 60×60px, radius 50%, bg rgba(255,255,255,0.05), 26px
    icons, hover white text. Author avatar 60×60px circle. Dark-row image
    400×400px circle.
  - Micro-copy style: uppercase + wide letter-spacing (5–20px) for
    eyebrows/labels/nav — the signature editorial detail.
- **Recreation decisions:** header = absolute transparent bar over the hero
  (Poppins uppercase logo "Pulp" + tagline span + hamburger right); hamburger
  → fullscreen overlay menu (near-black rgba(0,0,0,0.99) with faint picsum
  bg photo + overlay, scale-in animation, big Abril Fatface logo + uppercase
  letter-spaced links Home/About/Blog/Contact, active link gold #f8b500,
  close = morphing X); hero = full-height, giant "Pulp" wordmark in Abril
  Fatface with `bg-clip-text text-transparent` filled by a picsum texture
  image, "Magazine" eyebrow top-left + "UK Edition" bottom-right, animated
  background-color cycle (keyframes in index.css); editorial list = 11
  alternating rows (image half + text half: 60px circular avatar + "Jamie
  Jonson"/"fashion.com", 50px black headline, excerpt, pill "Read more" with
  ArrowRight), rows 3 and 10 inverted on #212121 with the image flipped right
  as a 400px circle; footer = #212121, 4 widgets (brand + 3 social circles,
  Recent Blog ×2 entries with meta, Site Links, Have a Questions? contact
  rows) + bottom bar with repo-standard credit; images picsum-seeded
  (`picsum.photos/seed/pulp-N/w/h`); fonts Poppins + Abril Fatface via Google
  Fonts `<link>`; icons via lucide-react (Twitter, Facebook, Instagram,
  Calendar, User, MessageCircle, MapPin, Phone, Mail, ArrowRight).

Pulp lives in `apps/pulp` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Fullscreen navigation overlay

The system SHALL render a fullscreen overlay menu opened from a hamburger
control, with the site logo, primary links, and a close control.

#### Scenario: Opening the menu

- **GIVEN** the Pulp page is rendered
- **WHEN** the user activates the hamburger control in the header
- **THEN** a near-black (rgba(0,0,0,0.99)) fullscreen overlay SHALL appear
  with a scale-in animation
- **AND** it SHALL show the site name "Pulp" in the Abril Fatface display
  font (large, uppercase, white)
- **AND** it SHALL show the links Home, About, Blog, and Contact in white
  uppercase letter-spaced text

#### Scenario: Active and hover states

- **GIVEN** the overlay menu is open
- **WHEN** a link is the current/active one
- **THEN** its text SHALL be gold (#f8b500)
- **AND** when the user hovers or focuses any link, an underline SHALL
  animate in

#### Scenario: Closing the menu

- **GIVEN** the overlay menu is open
- **WHEN** the user activates the close control
- **THEN** the overlay SHALL close

### Requirement: Header bar

The system SHALL render a transparent header fixed over the hero with a logo,
a tagline, and the hamburger control.

#### Scenario: Header content

- **GIVEN** the Pulp page is rendered
- **WHEN** the header is displayed at the top of the page
- **THEN** it SHALL be transparent and absolutely positioned over the hero
- **AND** it SHALL show the site name "Pulp" in uppercase white Poppins text
  with wide letter-spacing
- **AND** it SHALL show a small uppercase tagline beneath the logo
- **AND** it SHALL show the hamburger control on the right

### Requirement: Hero section

The system SHALL render a full-height hero with a giant image-filled
wordmark and letter-spaced magazine labels.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL be full-height with a photographic background and an
  animated background color cycle
- **AND** it SHALL show the small uppercase label "Magazine" above the
  wordmark
- **AND** it SHALL show the wordmark "Pulp" in the Abril Fatface display font
  at a very large size, uppercase, with its letters filled by a background
  image (background-clip text effect)
- **AND** it SHALL show the small uppercase label "UK Edition" below the
  wordmark

### Requirement: Editorial article list

The system SHALL render an edge-to-edge list of alternating article rows,
each with an image half and a text half containing an author chip, headline,
excerpt, and read-more button.

#### Scenario: Article row content

- **GIVEN** the page is rendered
- **WHEN** the editorial list section is displayed
- **THEN** it SHALL show eleven full-width article rows, each with a
  full-height image on one side and text on the other
- **AND** each text side SHALL show a circular author avatar (60px) with the
  name "Jamie Jonson" and a small uppercase source label (e.g. "fashion.com")
- **AND** each text side SHALL show a large black headline link (e.g. "Make
  Peace With Your Broken Pieces"), a supporting paragraph, and a pill "Read
  more" button with an arrow icon

#### Scenario: Read-more button style

- **GIVEN** an article row is displayed
- **WHEN** the "Read more" button is shown
- **THEN** it SHALL be a pill (fully rounded) with a blue-gray (#69779b)
  background, white text, and an arrow icon
- **AND** on hover its background SHALL become transparent and the text
  SHALL turn #69779b

#### Scenario: Dark inverted rows

- **GIVEN** the editorial list is displayed
- **WHEN** the third and tenth rows are rendered
- **THEN** those rows SHALL have a dark (#212121) background with white
  headline and light text
- **AND** their images SHALL appear on the right as 400px circles

### Requirement: Footer

The system SHALL render a dark footer with brand, social links, recent blog
entries, site links, and contact information.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a dark (#212121) background
- **AND** it SHALL show a brand column with the site name, a short
  description, and three circular social buttons (Twitter, Facebook,
  Instagram)
- **AND** it SHALL show a "Recent Blog" column with two entries, each with a
  thumbnail, a title link, and meta (date, author, comment count)
- **AND** it SHALL show a "Site Links" column with the links Home, About,
  Model, Services, and Blog
- **AND** it SHALL show a "Have a Questions?" column with address, phone, and
  email rows
- **AND** the bottom bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pulp app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, editorial list, and footer
  inside the main landmark in the original's order
- **AND** the document title SHALL be "Pulp — Magazine"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- pulp` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → editorial list
      (11 rows) → footer).
- [ ] Design tokens applied: brand blue-gray #69779b (read-more pills, active
      menu underline, Recent Blog hover), gold #f8b500 (active menu link),
      dark #212121 (inverted rows, footer bg), Abril Fatface (wordmark, menu
      logo, footer logo) + Poppins (body/header/nav), uppercase
      letter-spaced micro-labels.
- [ ] Header is transparent over the hero with logo + tagline + hamburger;
      hamburger opens the fullscreen near-black overlay menu (scale-in) with
      Home/About/Blog/Contact, gold active link, and a close control.
- [ ] Hero is full-height with the giant image-filled "Pulp" wordmark
      (background-clip text), "Magazine" / "UK Edition" labels, and the
      animated background-color cycle.
- [ ] Editorial list renders 11 alternating rows with 60px circular avatar
      chips, black headlines, excerpts, and pill "Read more" buttons; rows 3
      and 10 are dark with the image flipped to the right as a 400px circle.
- [ ] Footer: 4 widgets (brand + 3 social circles, Recent Blog ×2 with
      date/author/comments meta, Site Links, Have a Questions? contact rows) + bottom bar with repo-standard credit.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Erase), preview URL, tokens,
      and renames.

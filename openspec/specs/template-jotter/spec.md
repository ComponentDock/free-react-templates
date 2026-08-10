# Template: Jotter (Blog / Personal Template)

## Purpose

Jotter is a single-page personal blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Elen"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Elen" — personal blog / lifestyle magazine
  template with a fixed left sidebar (source:
  https://colorlib.com/wp/template/elen/). TEMPLATES.md has THREE copies
  of this item (lines 384, 2390 and 2713 — mark EVERY copy `[x]` when
  done, in the Blog / Personal / Magazine categories). Live preview
  title: "Elen - Free Bootstrap 4 Template by Colorlib".
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/elen/
  (HTTP 200, 36.1 KB, title "Elen - Free Bootstrap 4 Template by
  Colorlib"). Stylesheets: `css/style.css` (65.1 KB — Bootstrap v4.1.0
  bundle + custom theme from ~line 1463) + plugin libs (owl.carousel,
  animate, aos, magnific-popup, ionicons, bootstrap-datepicker,
  jquery.timepicker, flaticon, icomoon). Google Fonts loaded via
  Cloudflare `cf-fonts`: **Montserrat** (300/400/500/700) + **Poppins**
  (300–700). No section `id`s; the theme uses ftco-style class names
  (`colorlib-page`, `colorlib-aside`, `hero-wrap`, `blog-entry`).
- **Screenshot:** `elen-free-template.jpg` (TEMPLATES.md lines 384 /
  2390 / 2713) — verified in a browser (vision analysis, 1200×946):
  split-screen layout — a fixed, narrow (~25%) white left sidebar with
  a "elen." logo, a vertical menu (Home, Photography, Travel, Fashion,
  About, Contact), a copyright line and social icons at the bottom;
  the main area shows a full-height hero with a heavily washed-out
  snowy-mountain background photo, a circular portrait of a woman, "Hello
  I'm" in small light grey text, the name "Elen Henderson" in large bold
  dark sans-serif, a paragraph ("I am A Blogger …"), and a subtle
  outline "More About Me" button, with a faint wavy divider below; the
  "Articles" section heading (bold, centered) with an intro paragraph
  and blog cards below. Clean, minimalist, airy personal-blog aesthetic
  (white + grey text + an orange/red accent on links/icons). NOTE: the
  screenshot's article cards look like flat color blocks, but the LIVE
  DOM uses alternating image/text rows (`.blog-entry` with `.half`
  columns) — DOM wins.
- **Visual design (from DOM + CSS tokens + rendered screenshot):**
  personal blog with a fixed light sidebar (logo + vertical nav +
  aside footer w/ socials) and a scrollable main column; full-height
  hero with a washed-out photo background + white overlay (opacity .7),
  centered circular portrait, "Hello I'm" subheading (24px, 300, light
  grey `#bfbfbf`), huge 900-weight name headline, body paragraph, and a
  text-only "More About Me" button (grey with a 2px bottom border);
  then a blog list of twelve alternating image/text article rows
  (category tag, 28px bold title, blurb, round author avatar + "Written
  by … , date", heart/eye/comment counts, "Continue Reading" link); a
  dark navy `#132238` footer with three widget columns (Category,
  Archives, Have a Questions?). Accent orange **`#f05d23`** used
  sparingly (primary buttons, pagination active, link/social hovers).
  The demo brands itself "elen"; recreation uses the NEW name **Jotter**.

- **Structure (1:1, section order):**
  1. Aside `aside#colorlib-aside` (**fixed left sidebar, width 25%**,
     `padding: 3em; bottom:0; top:0; left:0; overflow-y: scroll;
z-index:1001; background: rgba(0,0,0,0.04)`; mobile: off-canvas
     `translateX(-270px)` w/ hamburger `.colorlib-nav-toggle`):
     - `div#colorlib-logo` — brand wordmark "elen" (34px, weight 900,
       black) + a grey dot "." (`span` `#cccccc`); mb 2.5em.
     - `ul#colorlib-main-menu` — SIX links: **Home** (active), **Photography**,
       **Travel**, **Fashion**, **About**, **Contact** (16px, weight 700,
       Montserrat, color `rgba(0,0,0,.4)`; hover → black + animated
       underline `scaleX(0)→1`; active → black).
     - `div.colorlib-footer` (absolute, bottom 40px, 14px,
       `rgba(0,0,0,.6)`): copyright line "Copyright ©2024 All rights
       reserved | This template is made with ❤ by Colorlib" (keep
       Colorlib credit per CC BY 3.0) + social icon links (icon-facebook,
       icon-twitter, icon-instagram, icon-linkedin; hover → `#f05d23`).
  2. Main `div#colorlib-main` (margin-left 25% / 270px on mobile):
     - Hero `div.hero-wrap.js-fullheight` (**height 100%**, position
       relative, `background-image: url(images/bg_1.jpg)` — washed-out
       mountain photo — with a white `.overlay` (opacity .7) and
       `data-stellar-background-ratio="0.5"` parallax) →
       `div.container` > `div.row` > `div.col-md-12` > `div.desc`
       (centered text block):
       - `img` circular portrait `images/author.jpg`.
       - `h2.subheading` **"Hello I'm"** (24px, weight 300, `#bfbfbf`).
       - `h1.mb-4` **"Elen Henderson"** (weight 900, `letter-spacing:
1px`, black; the template's name → replaced by the new name's
         persona, e.g. a fictional blogger name).
       - `p` **"I am A Blogger Far far away, behind the word mountains,
         far from the countries Vokalia and Consonantia, there live the
         blind texts. Separated they live in Bookmarksgrove right at the
         coast of the Semantics, a large language ocean."**
       - `a.btn-custom` **"More About Me"** (weight 400, `#b3b3b3`,
         `border-bottom: 2px solid #b3b3b3` — underlined text-style
         button).
  3. Blog list `section.ftco-section` (**padding: 6em 1.8em**):
     - Section header: `h2.mb-4` **"Articles"** + `p` intro "A small
       river named Duden flows by their place and supplies it with the
       necessary regelialia. It is a paradisematic country."
     - TWELVE `div.blog-entry.ftco-animate` (**margin-bottom: 6em**),
       each a Bootstrap row of two halves (alternating `order-md-last`
       so image sides flip):
       - `a.img.img-2` — image half (**height 330px**, radius 3px, CSS
         background `url(images/image_N.jpg)`; the first entry uses
         `.img` 400px in the base rule).
       - `div.text.text-2.pt-2.mt-3` — text half:
         - `span.category.mb-3.d-block` > `a` — category tag
           (uppercase 12px, `letter-spacing: 1px`), e.g. **Technology**.
         - `h3.mb-4` > `a` — article title (28px, weight 700, black),
           e.g. **"The Newest Technology On This Year 2019"**.
         - `p.mb-4` — blurb ("Even the all-powerful Pointing has no
           control about the blind texts it is an almost…").
         - `div.author.mb-4.d-flex.align-items-center` — round avatar
           (80px, radius 50%, `images/person_N.jpg`) + `div.ml-3.info`:
           `span` **"Written by"** + `h3` > `a` author name
           (**Dave Lewis**) + `span` **", Nov. 28, 2018"**.
         - `div.meta-wrap.align-items-center` (two halves):
           - `div.half.order-md-last` > `p.meta` — counts with icons:
             `icon-heart` **3**, `icon-eye` **100**, `icon-comment` **5**
             (meta spans `#b3b3b3`, icons mr 10px).
           - `div.half` > `p` > `a.btn.py-2` — **"Continue Reading"**
             (uppercase 13px, `letter-spacing: 2px`) + arrow
             (`ion-ios-arrow-forward`).
  4. Footer `footer.ftco-footer.ftco-bg-dark.ftco-section` (**bg
     `#132238`, padding: 6em 0, font-size 14px**) → `div.container` >
     `div.row` of THREE `div.ftco-footer-widget` columns (h2 white
     17px/700, `letter-spacing: 1px`, mb 40px):
     - **Category** (`h2.ftco-heading-2`): list rows "Photography (6)",
       "Fashion (8)", "Technology (2)", "Travel (2)" — `.categories`
       rows with `border-bottom: 1px solid rgba(255,255,255,0.1)`;
       links `rgba(255,255,255,.5)` → white hover.
     - **Archives**: "October 2018 (6)", "September 2018 (6)",
       "August 2018 (8)", "July 2018 (2)", "June 2018 (7)".
     - **Have a Questions?**: address "203 Fake St. Mountain View, San
       Francisco, California, USA" (icon-map-marker), phone "+2 392
       3929 210" (icon-phone), email "info@yourdomain.com"
       (icon-envelope); links `rgba(255,255,255,.5)` → white hover.
     - Footer bottom bar: copyright line "Copyright ©2024 All rights
       reserved | This template is made with ❤ by Colorlib" (keep
       credit) + social icons.

- **Design tokens extracted from `css/style.css` (theme section from
  ~line 1463):**
  - Accent orange **`#f05d23`** — `.btn.btn-primary` fill (white text),
    `.block-27` pagination borders + active fill, link/social hovers
    (`.colorlib-footer ul li a:hover`, `.block-21 .text .heading
a:hover`). `btn-primary` hover inverts (transparent bg + orange
    text).
  - Sidebar **`rgba(0,0,0,0.04)`** — `#colorlib-aside` bg (near-white);
    logo black 34px 900 + grey dot `#cccccc`; nav links
    `rgba(0,0,0,0.4)` → black hover w/ animated 1px underline; aside
    footer text `rgba(0,0,0,0.6)` 14px, social links `rgba(0,0,0,0.7)`
    → orange hover.
  - Hero: white `.overlay` opacity **.7** over a washed photo bg
    (parallax 0.5); `.subheading` **24px / 300 / `#bfbfbf`**; h1 black
    900 with `letter-spacing: 1px`; `.btn-custom` `#b3b3b3` with
    `border-bottom: 2px solid #b3b3b3` (text-style CTA).
  - Blog: `.blog-entry` margin-bottom 6em; `.img` height 400px /
    `.img-2` 330px, radius 3px; `.category` uppercase 12px
    `letter-spacing: 1px`; `h3` 28px 700 black; meta `#b3b3b3`
    (icons mr 10px); author avatar 80px circle (radius 50%), name
    black w/ underline; "Continue Reading" uppercase 13px
    `letter-spacing: 2px`.
  - Footer **`#132238`** — dark navy bg; widget h2 white 17px 700
    `letter-spacing: 1px` mb 40px; links `rgba(255,255,255,.5)` →
    white hover; `.categories li` border-bottom
    `rgba(255,255,255,0.1)`, padding 10px 0.
  - Pagination `.block-27` (styles exist; not on the home DOM): 40px
    circular items, `border: 1px solid #f05d23`, active = orange fill +
    white text.
  - Fonts: body **"Work Sans", sans-serif** (Bootstrap base);
    headings **"Poppins", Arial, sans-serif** (`h1–h4, .h1–.h4`:
    `color: rgba(0,0,0,0.8)`, weight 400 base, overridden per
    selector — h1 900, h3 700); sidebar menu **"Montserrat", Arial,
    sans-serif** (16px 700). Google Fonts: Montserrat 300/400/500/700 +
    Poppins 300–700.
  - Buttons `.btn`: **radius 30px (pill)**, uppercase 13px,
    `letter-spacing: 2px`; `.btn-primary` orange fill → hover inverts.
  - Icons (icomoon `icon-*` / ionicons `ion-*` in source — swap to
    lucide-react): heart, eye, comment (article meta), arrow-forward
    (Continue Reading), map-marker / phone / envelope (footer
    questions); brand socials (facebook, twitter, instagram, linkedin)
    must be inline SVG (lucide-react removed brand glyphs).

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/jotter-<n>/<w>/<h>`; hero portrait 200×200 or
  hero bg 1600×900, article images 600×400, author avatars 80×80);
  icons → lucide-react (Heart, Eye, MessageCircle, ArrowRight,
  MapPin, Phone, Mail; brand socials → inline SVG); Work Sans +
  Poppins + Montserrat via Google Fonts `<link>` in `index.html`;
  logo recreated as a text wordmark ("jotter" black 900 + grey dot);
  hero background → a light seeded picsum landscape with a white
  overlay (opacity ~70%) — never copy the asset; the 12 article rows
  → a static array of 12 items rendered as alternating
  image/text rows (no pagination needed — the home DOM has none);
  parallax (stellar) → optional subtle CSS parallax or a static bg;
  the template persona name "Elen Henderson" → a different fictional
  blogger name (e.g. "Jude Marlowe" or the new name itself), keeping
  the same copy structure.

Jotter lives in `apps/jotter` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Fixed sidebar with logo, navigation and socials

The system SHALL render a fixed left sidebar (25% width on desktop,
off-canvas on mobile) with a brand wordmark, a six-link vertical
navigation menu, and a footer block with the copyright line and social
icon links.

#### Scenario: Sidebar content

- **GIVEN** the Jotter page is rendered
- **WHEN** the page loads
- **THEN** a fixed left sidebar SHALL show the "jotter" wordmark in
  black 900-weight text with a grey dot
- **AND** the navigation menu SHALL list Home (active), Photography,
  Travel, Fashion, About and Contact in Montserrat 700
- **AND** the aside footer SHALL show the copyright line with the
  Colorlib credit and four social icon links (Facebook, Twitter,
  Instagram, LinkedIn)

#### Scenario: Sidebar navigation interaction

- **GIVEN** the sidebar navigation is displayed
- **WHEN** the user hovers or activates a nav link
- **THEN** the link SHALL turn black with an animated underline

#### Scenario: Mobile off-canvas sidebar

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** the sidebar SHALL slide in from the left with the same
  links and socials
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero with portrait, greeting and CTA

The system SHALL render a full-height hero with a washed-out photo
background, a white overlay, a circular portrait, a greeting subheading,
a bold name headline, an intro paragraph and a text-style "More About
Me" button.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** a circular portrait image SHALL be shown centered
- **AND** the subheading "Hello I'm" SHALL be shown in 24px light-grey
  (`#bfbfbf`) text
- **AND** the name headline SHALL be shown in large 900-weight black
  text
- **AND** an intro paragraph ("I am A Blogger …") SHALL be shown
- **AND** a "More About Me" button SHALL be shown as grey text with a
  2px bottom border

### Requirement: Articles section

The system SHALL render an "Articles" section with a heading, an intro
paragraph, and twelve alternating image/text article rows.

#### Scenario: Articles section header

- **GIVEN** the Articles section is displayed
- **WHEN** the page loads
- **THEN** the heading "Articles" SHALL be shown with an intro
  paragraph

#### Scenario: Article rows

- **GIVEN** the Articles section is displayed
- **WHEN** the page loads
- **THEN** twelve article rows SHALL be shown, alternating the image
  and text sides
- **AND** each row SHALL show an image (rounded), an uppercase category
  tag (e.g. Technology), a 28px bold title (e.g. "The Newest
  Technology On This Year 2019"), a blurb paragraph, an author line
  (round avatar + "Written by Dave Lewis, Nov. 28, 2018"), meta counts
  (heart 3, eye 100, comment 5) and a "Continue Reading" link with an
  arrow

### Requirement: Footer

The system SHALL render a dark navy footer with three widget columns
(Category, Archives, Have a Questions?) and a bottom copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** a Category column SHALL list Photography (6), Fashion (8),
  Technology (2) and Travel (2)
- **AND** an Archives column SHALL list October 2018 (6), September
  2018 (6), August 2018 (8), July 2018 (2) and June 2018 (7)
- **AND** a "Have a Questions?" column SHALL show an address, a phone
  number and an email address
- **AND** a bottom bar SHALL show the copyright line with a credit to
  the template source

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Jotter app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose sidebar, hero, articles and footer in
  the correct order
- **AND** the document title SHALL be "Jotter — Personal Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/jotter`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/jotter`)
- [ ] Section order matches the reference 1:1 (sidebar → hero → articles → footer)
- [ ] Design tokens from the reference used in `@theme` (accent orange
      #f05d23, sidebar rgba(0,0,0,0.04), subheading #bfbfbf, meta
      #b3b3b3, footer navy #132238; Work Sans + Poppins + Montserrat fonts)
- [ ] Sidebar: fixed 25% left, "jotter" wordmark + grey dot, 6-link
      Montserrat 700 nav (Home active) → black + underline hover,
      aside footer with copyright/Colorlib credit + 4 social icons,
      mobile off-canvas + hamburger
- [ ] Hero: full-height washed photo bg + white overlay ~70%, circular
      portrait, "Hello I'm" 24px #bfbfbf, 900-weight name, intro
      paragraph, "More About Me" grey text button (2px bottom border)
- [ ] Articles: "Articles" heading + intro, 12 alternating rows (image
      rounded + category tag + 28px bold title + blurb + author avatar
      "Written by X, date" + heart/eye/comment counts + "Continue
      Reading" arrow link)
- [ ] Footer: #132238 bg, Category / Archives / Have a Questions?
      columns (white 17px headings, muted links → white hover,
      categories with bottom borders) + bottom copyright bar with
      Colorlib credit
- [ ] Placeholder images are seeded picsum (no copied assets); icons
      from lucide-react + inline SVG socials; Work Sans + Poppins +
      Montserrat via Google Fonts link; logo as text wordmark
- [ ] README Templates status + TEMPLATES.md Elen lines (384 AND 2390
      AND 2713) marked `[x]` after merge

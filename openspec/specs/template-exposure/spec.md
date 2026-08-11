# Template: Exposure (Photography / Portfolio)

## Purpose

Exposure is a single-page photography-portfolio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Myphotography" website template
(source: https://colorlib.com/wp/template/myphotography/ — "MyPhotography -
Free HTML Photography Website Template 2026 — the most impactful, responsive
and free HTML photography website template both for amateurs and
professionals"), built under a DIFFERENT name (Exposure — a photography
term; single lowercase word, no collision with `apps/`, `openspec/specs/`
or `docs/templates/` — verified 2026-08-11), per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears THREE times in TEMPLATES.md (dup-row trap): line 460
(**Bootstrap (216)** category — the FIRST occurrence, the canonical one),
line 2457 (**Photography (49)**), and line 2532 (**Portfolio (89)**) — all
`- [ ]` rows of the SAME template. ONE implementation covers all three rows
(mark all `[x]` with the same surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Myphotography" — page title "MyPhotography - Free
  HTML Photography Website Template 2026 - Colorlib". Bootstrap 4 based
  (bootstrap.min.css) + owl.carousel (hero slider, 2 identical slides) +
  slick (testimonial slider) + slicknav (mobile menu) + magnific-popup
  (gallery fullscreen zoom) + fontawesome + themify-icons (the gallery
  zoom icon is `ti-fullscreen`) + custom `assets/css/style.css`. The
  recreation brands itself **Exposure** but keeps the same section
  structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/myphotography/` — HTTP 200, ~32 KB
  HTML (REACHABLE — the preview is live, not a 404). Stylesheets:
  `assets/css/style.css` (custom, ~55 KB — the template-specific tokens
  live here; it `@import`s the Google Fonts: `Prompt:300,400,500,600,700,
800,900|Rubik:300,400,500,700`), plus bootstrap/owl/slick/slicknav/
  magnific/fontawesome/themify. Screenshot `myphotography-free-template.jpg`
  (1200×946, AVIF, viewed in browser) matches the live DOM (dark hero with
  B&W portrait cutout → "HOW WE MAKE USER EXPERIENCES" + Dali quote).
- **Section order (1:1, verified from live DOM):**
  1. **Preloader** (`#preloader-active`): fixed full-screen `#f7f7f7`
     loader with a spinning ring (`preloader-circle`, border-top
     `#f04e3c`) and a centered logo image. (Recreation: a simple
     CSS spinner overlay is optional — it only shows pre-hydration; can
     be skipped with a note, it has no layout impact.)
  2. **Header** (`div.header-area.header-transparent` > `.main-header
.header-sticky`, container-fluid): logo image left (`img/logo/logo.png`
     — recreation: text wordmark "EXPOSURE"); `.menu-main` right
     (justify-content-end): `nav.main-menu` inline links — **Home** ·
     **About** · **Gallery** · **Services** · **Blog** (hover dropdown
     `ul.submenu`, bg `rgba(43,43,43,0.7)`, 170px: Blog · Blog Details ·
     Element) · **Contact**; then `.header-right-btn` **Contact now**
     (`a.btn.header-btn`). Nav links white Rubik 16px, hover `#f04e3c`;
     header is transparent over the hero; on scroll (sticky) the bar
     becomes `background: #000`. Mobile: slicknav hamburger menu in the
     recreation.
  3. **Hero slider** (`div.slider-area` > `.slider-active`, owl carousel
     with TWO IDENTICAL slides): each `.single-slider.slider-height`
     (min-height 1080px, `background-image: url(img/hero/h1_hero.jpg)`
     cover; 700px/500px on tablet/mobile) with `.hero__caption` left
     (col-xl-7): eyebrow `span` **"Creative Photographey"** (24px, weight
     300, uppercase, `#f04e3c`, padding-left 50px with a 30px×1px line
     before it) · h1 **"Photography Make us happy Take a shot."** (70px,
     weight 700, uppercase, `#fff`, line-height 1.2) · `.hero__btn`
     **Watch Portfolio** (`a.btn.hero-btn`, href industries.html); and
     `.hero-man` absolute right (bottom/right, z-index -1, hidden below
     768px): a B&W cutout portrait of a man (recreation: right-side
     portrait photo panel).
  4. **About / Experience** (`section.about-area.about1.section-padding30`,
     bg `#121212`; section-padding30 = 195px top / 140px bottom): row
     `justify-content-between` — left `col-xl-5.about-caption2`: h3
     **"HOW WE MAKE USER EXPERIENCES"** (50px, weight 700, `#fff`,
     margin-bottom 48px) + `.send-cv` link **hire@colorlib.com** (18px,
     weight 300, `#f04e3c`, with a 144px×1px `#f04e3c` underline 9px
     below — rename to a neutral address like hire@exposure.example);
     right `col-xl-5.about-caption`: h3 **"You can't use up creativity.
     The more you use, the more you have in your signifant mind."** (18px,
     weight 400, `#fff`, line-height 1.5) · `p.pera1` **"SALVADOR DALI"
     Digital Artisit** (`#d3d3d4`, name uppercase, with a 60px divider
     line) · `.experience`: `.year` **"05"** (Prompt, weight 700, 90px,
     `#fff`, line-height 1) + `.year-details` **"YEARS OF / DIGITAL
     EXPERIENCE"** (uppercase, weight 500, `#fff`, padding-left 30px).
     Decorative `.about-shape` image bottom-right (optional). Keep the
     source's copy quirks ("signifant mind", "Artisit", "Photographey")
     or fix the typos — the SAME kind of content either way; document
     what you chose in the PR.
  5. **Services** (`section.home-blog-area.section-padding30`, bg
     `#0e0e0e`; NO section title): row of THREE `col-xl-4` cards
     (`.single-team.mb-30`), each `.team-img` (photo) + `.team-caption`:
     h3 link (26px, `#fff`, hover `#f04e3c`) **Creative Photography** ·
     **Wedding Photography** · **Nature Photography** (all → services.html)
     - p lorem (`#d3d3d4`, weight 300, padding-right 50px).
  6. **Gallery** (`section.gallery-area`, full-bleed `container-fluid p-0`,
     `row no-gutters`; no own bg — dark page behind): SIX
     `.gallery-box` items in mixed widths (xl: 5/3/4/5/4/3), each
     `.single-gallery` with `.gallery-img` (CSS background image,
     height 685px, cover) + hover overlay `rgba(240,78,60,0.9)` +
     `.cap-icon` (fullscreen zoom link `ti-fullscreen`, 30px `#fff`,
     appears top-left on hover) + `.g-caption` bottom (h4 **"The Last
     man"** `#fff` mb 20px + p lorem `#fff` mb 30px) that slides up on
     hover (`translateY(-102%)`).
  7. **Brand / Awards** (`section.brand-area.pb-bottom.section-padding30`,
     bg `#0e0e0e`, extra 200px bottom padding): left `col-lg-6`
     `.section-tittle`: h2 **"Take a look at our achivment"** (50px,
     weight 600, uppercase, `#fff`, line-height 1.3) + p + **Get Start**
     button (`a.btn`); right: SIX `col-lg-3.single-brand.text-center`
     award cards (`border: 1px solid #2e2e2e`, padding 50px 0): award
     logo image + **"Behance award"** + **"Prize 2019"** (both `#fff`,
     uppercase, weight 500, 18px). (Recreation: replace the logo images
     with a lucide trophy/award icon + the same text.) Decorative
     `.brand-shape` bottom-left (optional).
  8. **Testimonial** (`div.testimonial-area.testimonial-padding`, bg
     `#121212`, padding 190px top / 170px bottom; NO section title):
     centered `col-xl-11` `.h1-testimonial-active` slider (slick, 2
     slides): `.single-testimonial.text-center` — `.testimonial-top-cap`:
     quote-mark image + p lorem (20px, `#d3d3d4`, line-height 1.5,
     padding-right 100px, margin-bottom 50px); `.testimonial-founder`
     (centered flex): `.founder-img` (round photo) + `.founder-text`
     (margin-left 20px): `span` **"Jessya Inn"** (30px, weight 600,
     `#f04e3c`) + `p` **"Chif Photographer"** (`#57667e`, weight 500).
  9. **Blog** (`section.blogs-area.section-padding30`, bg `#0e0e0e`;
     decorative `.blog-shape` bottom-right optional): centered
     `.section-tittle.text-center`: h2 **"Tourist Blog"** + p **"Our
     Recent Photos"**; row of THREE `col-lg-4.single-blogs.mb-100` cards:
     `.blog-img` (photo) + `.blog-cap` (absolute, bottom-right over the
     image, bg `#121212`, width 94%, padding 29px 20px 20px 31px): `span`
     date **"23 Dec, 2020"** (`#828fa3`, uppercase, 14px) + h4 link
     **"Addiction When Gambling Becomes"** (20px, `#fff`, hover
     `#f04e3c`, → blog_details.html).
  10. **Footer** (`div.footer-area.footer-bg`, bg `#121212`,
      footer-padding 150px top / 136px bottom): row of 4 columns —
      `col-xl-4.single-footer-caption`: footer logo (recreation: text
      wordmark) + `p.info1` lorem (`#fff`, line-height 1.8, padding-right
      74px); `col-xl-2` **Navigation** (Home · Events · Testimonial ·
      Categories · Contacts); `col-xl-2` **Useful Links** (Registration ·
      Login · Policy · Terms & Conditions); `col-xl-4` **Instagram Feed**
      — `.insta-feed` 3×2 grid of six thumbnails (`li` width 33.33%,
      margin-bottom 10px). Footer headings `#fff` Rubik 18px uppercase
      (margin-bottom 38px); footer links `#868c98` weight 300, hover
      `#f04e3c` + padding-left 5px. `.footer-bottom` bar: copyright left
      (Colorlib credit → neutral "Made with ♥ by Exposure") + `.footer-social`
      right: **"Follow Us"** + four brand icons (twitter, facebook-f,
      globe, instagram; `#848493`, hover `#fff`; use inline SVG brand
      icons — lucide-react dropped brand icons).
- **Visual design (TEMPLATES.md screenshot `myphotography-free-template.jpg`,
  1200×946, AVIF, viewed in browser 2026-08-11):** dark cinematic
  photography one-pager. Deep matte-black/charcoal backgrounds; stark white
  all-caps bold headlines; coral-orange `#f04e3c` accents (logo mark, hero
  eyebrow, CTAs). Hero: transparent header row (logo left, white nav center,
  orange CONTACT NOW right), eyebrow "— CREATIVE PHOTOGRAPHY" + huge
  uppercase H1 "PHOTOGRAPHY MAKE US HAPPY TAKE A SHOT." with a faint
  brush-stroke graphic behind, orange WATCH PORTFOLIO button, and a
  dramatic B&W portrait of a man (arms crossed) on the right. Below: dark
  "HOW WE MAKE USER EXPERIENCES" section with the Salvador Dali quote on
  the right. The screenshot only reaches the about section; everything
  below (services, gallery, awards, testimonial, blog, footer) is verified
  from the live DOM.
- **Design tokens extracted from the live CSS (`assets/css/style.css`,
  verified 2026-08-11):**
  - Brand coral red: **`#f04e3c`** — `.btn` background, hero eyebrow text +
    its 30px line, `.send-cv` link + 144px underline, gallery hover
    overlay `rgba(240,78,60,0.9)`, preloader ring border-top, nav link
    hover, blog h4 hover, footer link hover, founder name `span`, brand
    "Get Start" button.
  - Button hover sweep: **`#e93b32`** (`.btn::before`, scaleX 0→1 from
    the left on hover).
  - Dark surfaces: **`#121212`** (about `.about1`, testimonial, blog-cap
    panel, footer) and **`#0e0e0e`** (services, brand/awards, blogs
    sections); sticky header `#000`; preloader `#f7f7f7`; brand card
    border `#2e2e2e`; submenu `rgba(43,43,43,0.7)`.
  - Text: headings **`#fff`** (Prompt); muted body on dark **`#d3d3d4`**
    (Rubik 16px/30px); footer links `#868c98` (weight 300); footer social
    icons `#848493`; blog dates `#828fa3` (uppercase 14px); founder role
    `#57667e` (weight 500); quote attribution `#d3d3d4`.
  - Fonts: headings/buttons **'Prompt', sans-serif** (weights 300-900);
    body/nav **'Rubik', sans-serif** (300,400,500,700). Google Fonts
    `@import` at the top of style.css → add BOTH `<link>`s in index.html.
  - Buttons (`.btn`): UPPERCASE, Prompt, 16px, letter-spacing 1px,
    `padding: 27px 44px`, background `#f04e3c`, white text, **no border
    radius** (square corners), hover sweep to `#e93b32`; `.hero-btn`
    padding 30px 38px; `.header-btn` padding 30px 45px.
  - Hero: min-height 1080px bg photo (cover; 700px tablet / 500px
    mobile); eyebrow 24px weight 300 uppercase `#f04e3c` with
    padding-left 50px + 30px×1px line; h1 70px weight 700 uppercase `#fff`
    line-height 1.2 (60px → 27px responsive); hero-man cutout absolute
    right, hidden < 768px.
  - Nav: Rubik 16px `#fff`, padding 39px 10px, margin 0 23px, hover
    `#f04e3c`; submenu bg `rgba(43,43,43,0.7)` 170px wide.
  - Section titles (`.section-tittle h2`): 50px, weight 600, uppercase,
    `#fff`, line-height 1.3, margin-bottom 17px; `.section-tittle p`
    `#fff` margin-bottom 30px.
  - Section paddings: `.section-padding30` 195px/140px (desktop →
    100/40 tablet, 65/10 mobile); `.testimonial-padding` 190px/170px;
    `.footer-padding` 150px/136px; `.pb-bottom` (brand) adds 200px bottom.
  - About: left h3 50px weight 700 `#fff` mb 48px; send-cv link 18px
    weight 300 `#f04e3c` + 144px underline; right h3 18px weight 400
    `#fff` mb 35px; `p.pera1` `#d3d3d4` with uppercase name + 60px divider;
    year 90px Prompt 700 `#fff`; year-details uppercase Prompt 500 `#fff`
    padding-left 30px.
  - Services cards: h3 26px `#fff` (hover `#f04e3c`), p `#d3d3d4` weight
    300 padding-right 50px.
  - Gallery: `.gallery-img` height 685px cover; hover overlay
    `rgba(240,78,60,0.9)`; caption h4 `#fff` mb 20px + p `#fff` mb 30px,
    slides up `translateY(-102%)`; fullscreen icon 30px `#fff` at
    top/left 42px/50px.
  - Awards: cards `border: 1px solid #2e2e2e`, padding 50px 0; text
    `#fff` uppercase weight 500 18px.
  - Testimonial: quote p 20px `#d3d3d4` line-height 1.5 padding-right
    100px; founder name 30px weight 600 `#f04e3c` (26px responsive); role
    `#57667e` weight 500; founder img round.
  - Blog: `.blog-cap` absolute bottom-right, bg `#121212`, width 94%,
    padding 29px 20px 20px 31px; date `#828fa3` uppercase 14px; h4 20px
    `#fff` hover `#f04e3c`.
  - Footer: h4 18px `#fff` Rubik uppercase mb 38px; links `#868c98`
    weight 300, hover `#f04e3c` + padding-left 5px; social icons
    `#848493` hover `#fff`; `.insta-feed` li 33.33% thumbnails.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap 4
  layout (NO Bootstrap dependency); section order 1:1 as above; body Rubik
  - headings/buttons Prompt via Google Fonts `<link>`s in `index.html`;
    brand coral `#f04e3c` + dark surfaces `#121212`/`#0e0e0e` in `@theme`
    used via Tailwind classes; images via seeded picsum placeholders
    (`picsum.photos/seed/exposure-<n>/<w>/<h>` — dark/portrait subject for
    the hero bg + hero-man portrait, photo subjects for services/gallery/
    blog/instagram thumbs, a portrait for the testimonial founder); the
    award "logos" become lucide trophy/award icons + the same two text
    lines; icons from lucide-react EXCEPT brand icons (twitter/facebook/
    instagram/globe in the footer social row) which need inline SVGs;
    the hero slider's two slides are identical in the source — a single
    static hero slide is an acceptable simplification, or keep a 2-slide
    fade; the preloader is optional (CSS-only spinner, no layout impact).
    Brand "Myphotography"/"Colorlib" → "Exposure" everywhere including the
    footer credit (neutral). All nav links, card links, footer links and
    the "Get Start"/"Watch Portfolio"/"Contact now" buttons are dead-ends
    in the recreation (single landing page; links keep their hrefs as
    `#` anchors or `href="#"` — no navigation needed). Document title
    "Exposure — Photography Portfolio".

Exposure lives in `apps/exposure` (package `@free-react-templates/exposure`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header / Navbar

The system SHALL render a transparent-over-hero dark header with a brand
wordmark on the left, six nav links (Blog with a dropdown), and a "Contact
now" button on the right; on scroll the bar SHALL turn solid black.

#### Scenario: Header content

- **GIVEN** the Exposure page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand wordmark "EXPOSURE" on the left
- **AND** the nav SHALL show links Home, About, Gallery, Services, Blog,
  Contact in white 16px Rubik
- **AND** the right side SHALL show a "Contact now" button (`.btn`
  `#f04e3c` background, uppercase Prompt, square corners)

#### Scenario: Blog dropdown

- **GIVEN** the header is rendered
- **WHEN** the Blog link is hovered (or toggled)
- **THEN** a dropdown SHALL open listing Blog, Blog Details, Element
- **AND** the dropdown SHALL have a `rgba(43,43,43,0.7)` background

#### Scenario: Sticky header

- **GIVEN** the page is scrolled past the hero
- **WHEN** the sticky state applies
- **THEN** the header bar SHALL switch to a solid `#000` background

### Requirement: Hero slider

The system SHALL render a full-height hero with a background photo, a
coral eyebrow, a large uppercase headline, a "Watch Portfolio" button and a
portrait image on the right.

#### Scenario: Hero content

- **GIVEN** the Exposure page is rendered
- **WHEN** the hero is visible
- **THEN** a full-bleed hero background photo SHALL be shown (min-height
  1080px on desktop)
- **AND** the eyebrow SHALL read "Creative Photographey" (24px, weight
  300, uppercase, `#f04e3c`, with a 30px line before it)
- **AND** the h1 SHALL read "Photography Make us happy Take a shot." (70px,
  weight 700, uppercase, `#fff`)
- **AND** a "Watch Portfolio" button SHALL be shown below the headline
- **AND** a portrait image SHALL be shown on the right side (hidden on
  mobile)

### Requirement: About / Experience section

The system SHALL render a `#121212` about section with the heading "HOW WE
MAKE USER EXPERIENCES", a contact email link with underline, a Dali quote,
and a "05 YEARS OF DIGITAL EXPERIENCE" stat block.

#### Scenario: About layout

- **GIVEN** the Exposure page is rendered
- **WHEN** the about section is visible
- **THEN** the left column SHALL show the 50px white heading "HOW WE MAKE
  USER EXPERIENCES" and an 18px `#f04e3c` email link with a 144px
  underline below it
- **AND** the right column SHALL show the quote "You can't use up
  creativity..." (18px `#fff`), the attribution "SALVADOR DALI / Digital
  Artisit" in `#d3d3d4` with a divider, and a stat block with a 90px "05"
  and "YEARS OF DIGITAL EXPERIENCE" (uppercase `#fff`)

### Requirement: Services section

The system SHALL render a `#0e0e0e` services section with three photo
cards (Creative / Wedding / Nature Photography), each with an image, a
26px title link and a muted paragraph.

#### Scenario: Service cards

- **GIVEN** the Exposure page is rendered
- **WHEN** the services section is visible
- **THEN** three cards SHALL be shown side by side on lg
- **AND** each card SHALL show a photo, the title "Creative Photography",
  "Wedding Photography" or "Nature Photography" (hover → `#f04e3c`), and a
  paragraph in `#d3d3d4`

### Requirement: Gallery

The system SHALL render a full-bleed gallery with six photo tiles of mixed
widths; hovering a tile SHALL show a coral overlay, a fullscreen icon and a
sliding caption.

#### Scenario: Gallery tiles

- **GIVEN** the Exposure page is rendered
- **WHEN** the gallery section is visible
- **THEN** six photo tiles SHALL be shown edge-to-edge in mixed column
  widths (xl: 5/3/4/5/4/3)
- **AND** each tile SHALL have a 685px-tall photo, a caption (h4 "The
  Last man" + a paragraph, both `#fff`) and a fullscreen zoom icon

#### Scenario: Gallery hover

- **GIVEN** a gallery tile
- **WHEN** the tile is hovered
- **THEN** a `rgba(240,78,60,0.9)` overlay SHALL cover the tile
- **AND** the caption SHALL slide up into view and the fullscreen icon
  SHALL appear top-left

### Requirement: Brand / Awards section

The system SHALL render a `#0e0e0e` awards section with the heading "Take a
look at our achivment", a paragraph, a "Get Start" button, and six award
cards ("Behance award / Prize 2019").

#### Scenario: Awards layout

- **GIVEN** the Exposure page is rendered
- **WHEN** the awards section is visible
- **THEN** the left column SHALL show the 50px uppercase white heading
  "Take a look at our achivment", a paragraph and a "Get Start" button
- **AND** six bordered cards (`border: 1px solid #2e2e2e`) SHALL each
  show an award icon and the two lines "Behance award" and "Prize 2019"
  (white, uppercase, 18px)

### Requirement: Testimonial

The system SHALL render a `#121212` testimonial slider with a quote, a
round founder photo, the founder name in coral and the role below it.

#### Scenario: Testimonial slide

- **GIVEN** the Exposure page is rendered
- **WHEN** the testimonial section is visible
- **THEN** a centered slide SHALL show a quote mark, a 20px `#d3d3d4`
  paragraph, a round photo, the name "Jessya Inn" (30px, weight 600,
  `#f04e3c`) and the role "Chif Photographer" (`#57667e`)

### Requirement: Blog section

The system SHALL render a `#0e0e0e` blog section titled "Tourist Blog"
with three cards, each with a photo, a date and a title overlay.

#### Scenario: Blog cards

- **GIVEN** the Exposure page is rendered
- **WHEN** the blog section is visible
- **THEN** the centered heading "Tourist Blog" with the sub-line "Our
  Recent Photos" SHALL be shown
- **AND** three cards SHALL each show a photo with an overlay panel
  (`#121212`, bottom-right, 94% width) containing the date "23 Dec, 2020"
  (`#828fa3`, uppercase) and the title "Addiction When Gambling Becomes"
  (white, hover `#f04e3c`)

### Requirement: Footer

The system SHALL render a `#121212` footer with an about column, two link
columns (Navigation, Useful Links), an Instagram Feed grid, a copyright
line and a social row.

#### Scenario: Footer columns

- **GIVEN** the Exposure page is rendered
- **WHEN** the footer is visible
- **THEN** the footer SHALL have a `#121212` background
- **AND** the first column SHALL show the brand and a short paragraph
- **AND** the Navigation column SHALL list Home, Events, Testimonial,
  Categories, Contacts
- **AND** the Useful Links column SHALL list Registration, Login, Policy,
  Terms & Conditions
- **AND** the Instagram Feed column SHALL show a 3×2 grid of six
  thumbnails
- **AND** footer links SHALL be `#868c98` and turn `#f04e3c` (with a 5px
  left shift) on hover

#### Scenario: Footer bottom bar

- **GIVEN** the footer is rendered
- **WHEN** the bottom bar is visible
- **THEN** a copyright line SHALL be shown on the left reading "Copyright
  © <current year>. All rights reserved | Made with ♥ by Exposure"
  (neutral credit, no Colorlib attribution)
- **AND** a "Follow Us" label with four brand icons SHALL be shown on the
  right (`#848493`, hover `#fff`)

### Requirement: Responsive behavior

The system SHALL collapse the header into a mobile menu on small screens,
hide the hero portrait, and stack all multi-column layouts to single
columns.

#### Scenario: Mobile navigation

- **GIVEN** the Exposure page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the page is displayed
- **THEN** the nav links and Contact now button SHALL collapse behind a
  hamburger toggler that opens them

#### Scenario: Stacked layout

- **GIVEN** the Exposure page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** the about columns, service cards, award cards, blog cards and
  footer columns SHALL stack to single columns
- **AND** the hero portrait SHALL be hidden and the hero caption padded
  down

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-exposure`
- [ ] `scripts/verify-app.sh exposure` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): preloader (optional) →
      header (EXPOSURE wordmark · Home / About / Gallery / Services / Blog
      dropdown [Blog, Blog Details, Element] / Contact · Contact now btn;
      sticky → #000) → hero (bg photo, eyebrow "Creative Photographey",
      h1 "Photography Make us happy Take a shot.", WATCH PORTFOLIO,
      right portrait cutout) → about (#121212: HOW WE MAKE USER
      EXPERIENCES + email link; Dali quote + 05 YEARS OF DIGITAL
      EXPERIENCE) → services (#0e0e0e: Creative / Wedding / Nature
      Photography cards) → gallery (6 mixed-width tiles, coral hover
      overlay + sliding caption + fullscreen icon) → awards (#0e0e0e:
      Take a look at our achivment + Get Start + 6 Behance award cards)
      → testimonial (#121212: quote + Jessya Inn / Chif Photographer) →
      blog (#0e0e0e: Tourist Blog + 3 cards with date overlay) → footer
      (#121212: about + Navigation + Useful Links + Instagram Feed 3×2 +
      copyright + Follow Us social)
- [ ] Brand tokens in `@theme`: `#f04e3c` coral (buttons, eyebrow,
      send-cv link, gallery overlay, founder name, hovers),
      `#e93b32` (button hover sweep), `#121212` + `#0e0e0e` dark
      surfaces, `#d3d3d4` muted text, `#868c98`/`#848493`/`#828fa3`/
      `#57667e` footer-text tones — all via Tailwind classes
- [ ] Fonts: Prompt (headings, buttons; 300-900) + Rubik (body, nav;
      300/400/500/700) via Google Fonts `<link>`s in `index.html`
- [ ] Buttons: square corners (no radius), 16px uppercase Prompt,
      letter-spacing 1px, `#f04e3c` bg, padding 27px 44px, hover sweep
      to `#e93b32`
- [ ] Placeholder images via `picsum.photos/seed/exposure-<n>/<w>/<h>`
      (hero bg + portrait, services, gallery, awards icons via lucide,
      blog, instagram, founder), brand icons in the footer social row as
      inline SVGs (lucide-react dropped brand icons), no copied assets
- [ ] Brand renamed "Myphotography"/"Colorlib" → "Exposure" everywhere;
      copyright credit neutral; all links/buttons dead-end (single
      landing page)
- [ ] Hero slider: source has TWO identical slides — either keep a
      simple 2-slide fade or render one static hero slide; document the
      choice
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL THREE `- [ ]` rows
      (lines ~460 Bootstrap, ~2457 Photography, ~2532 Portfolio) `[x]`
      with the same surge URL + `npm run readme:status` (implementer)

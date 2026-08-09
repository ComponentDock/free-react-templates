# Template: Lensly (Photography / Portfolio)

## Purpose

Lensly is a single-page wedding & event photography portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Capture 2" design (see TEMPLATES.md — line 355, first unchecked
item whose prep did not exist on main), built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark, elegant photographer landing page: a transparent dark
navbar over a full-height photo hero ("Wedding & Event Photographer"), a
12-tile "See My Works" portfolio grid with hover overlays, a black "About Me"
section with circular social icons, a "See The Video" play block, a light
testimonial row ("What Client Says"), a "News / Events" blog strip, and a
black four-part footer (About Me, Quick Links, Newsletter + bottom bar).
Lensly recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Capture 2" — free wedding & event photographer
  website template (source: https://colorlib.com/wp/template/capture-2/).
  New name: **lensly** (photography "lens"; single word, no collision with
  `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** the TEMPLATES.md slug `capture-2` returns
  HTTP 404 on the preview host — the real preview is
  `https://preview.colorlib.com/theme/capture2/` (HTTP 200, ~18KB) +
  stylesheets `css/style.css` (~24KB, custom) and `css/bootstrap.min.css`
  (Bootstrap 4.3.1, **re-themed**: `--primary: #f4ad2d`, `--yellow:
#f4ad2d`), plus owl.carousel, fancybox, aos, flaticon/icomoon icon fonts.
  Google Fonts: `Muli:400,700|Hepta+Slab:400,700` (Muli is now served as
  **Mulish** on Google Fonts — same family, use the current name).
  The rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`capture2-free-template.jpg`, 1200×946) confirms the visual design:
  transparent dark navbar with white "CAPTURE" logo + Home/About/Photography/
  Event/Contact links, photo hero of a kissing couple with dark overlay,
  white eyebrow "Hey there! I'm Craig Smith", **amber serif headline**
  "Wedding & Event Photographer", amber pill "Contact Me" button, white
  "See My Works" section with a 3×4 photo grid, dark About Me section,
  black footer.
- **Section order (1:1):**
  1. `header.site-navbar.site-navbar-target` — `position: absolute; top: 0;
width: 100%; padding: 1rem; background: rgba(0,0,0,0.5)` (transparent
     dark over the hero; desktop: `padding-top/bottom: 3rem`; on scroll it
     turns `background: #fff` + `box-shadow: 4px 0 20px -5px rgba(0,0,0,0.2)`,
     links turn black, logo turns amber). Left `div.site-logo` — logo text
     "Capture" uppercase, white (amber when scrolled). Right nav links
     **Home, About, Photography, Event, Contact** (white → black, hover +
     active amber `#f4ad2d`). Mobile: `div.site-mobile-menu` slide-in menu
     with close button (hamburger on narrow viewports).
  2. `div.ftco-blocks-cover-1 > div.site-section-cover.overlay` — hero:
     `background-image: url('images/hero_1.jpg')`, `background-size: cover`,
     full-height row `calc(100vh - 196px)` / `min-height: 677px`; `:before`
     overlay `rgba(0,0,0,0.3)`. Content (left col, `col-md-7`): white
     eyebrow text **"Hey there! I'm Craig Smith"**, `h1.mb-3.text-primary`
     **"Wedding & Event Photographer"** (Hepta Slab serif, 3rem / 2rem on
     mobile, weight 900, **amber #f4ad2d** — the `text-primary` class maps
     to the re-themed `--primary`), white 18px lorem paragraph, `a.btn
.btn-primary` **"Contact Me"** (bg #f4ad2d, text #212529, border
     #f4ad2d, Bootstrap radius ~4px).
  3. `div.site-section` (white, padding ~5–7rem 0) — **My Works**:
     centered header (`col-md-7 text-center mx-auto`): amber span
     **"My Works"** + `h2.serif` **"See My Works"**. Grid `div.row
no-gutter` of **12** `div.item` tiles (`col-6 col-sm-6 col-md-6
col-lg-4 col-xl-4 mb-4`, classes `web|brand|design`): image,
     `border-radius: 4px`, hover `:after` overlay `rgba(0,0,0,0.4)` +
     image scale(1.1), centered label/icon fades in.
  4. `div.site-section.bg-black.about-me` (bg **#000**) — **About Me**:
     `div.row.align-items-center`: left `col-md-6` image, right `col-md-5
ml-auto`: `h3` **"About Me"** (white) + two lorem paragraphs (white
     text) + `div.social_29128.white.mt-5` — row of circular social buttons
     (50×50px, `border-radius: 50%`, bg `rgba(255,255,255,0.2)`, amber
     icons, hover `background: #fff`).
  5. `div.site-section` (white) — **See The Video**: centered header: amber
     span **"See The Video"** + `h2.serif` **"See The Video"**; centered
     `col-md-8` video block: image bg with `:before` overlay
     `rgba(0,0,0,0.2)` + circular play button (`btn-video_38929`): 70×70px,
     `border: 2px solid white`, `border-radius: 50%`, centered white play
     icon → opens video modal/lightbox.
  6. `div.site-section.bg-light` (bg #f8f9fa) — **Testimonials**: centered
     header: amber span **"Testimonials"** + `h2.serif` **"What Client
     Says"**; `div.row` of **3** `div.col-lg-4.col-md-6` cards: title
     **"The Best Photographer" / "Easy To Work With" / "Professional
     Photographer"** + lorem quote paragraph.
  7. `div.site-section.bg-white` — **News / Events**: centered header: amber
     span **"News"** + `h2.serif` **"Events"**; `div.row` of **3**
     `div.col-lg-4.col-md-6.mb-4` `div.post-entry-1.h-100` cards: image +
     `div.post-entry-1-contents` (bg #fff, padding 20px): meta line
     **"July 17, 2019 by Admin"** (gray #ccc), `h2` 22px title link
     (black → amber #f4ad2d on hover), excerpt paragraph.
  8. `footer.site-footer` (bg **#000**, padding 4–8em) —
     `div.row`: `col-lg-3`: `h2.footer-heading` **"About Me"** + short
     lorem text; `col-lg-8.ml-auto > div.row`: `col-lg-6.ml-auto`:
     `h2.footer-heading` **"Quick Links"** + links **About Us,
     Testimonials, Terms of Service, Privacy, Contact Us** (rgba(255,255,255,
     0.5) → white hover, 10px spacing); `col-lg-6`: `h2.footer-heading`
     **"Newsletter"** + text + email input + amber subscribe button.
     Bottom bar (`div.row.pt-5.mt-5.text-center > div.border-top.pt-5`:
     border `rgba(255,255,255,0.1)`): copyright line (replace Colorlib
     credit with repo-standard footer credit).
- **Design tokens extracted from `css/style.css` + re-themed
  `bootstrap.min.css` (Bootstrap 4.3.1):**
  - Fonts: **"Hepta Slab", serif** for headings (hero h1 weight 900, 3rem;
    section h2s carry `.serif`), **"Muli" (→ Mulish), sans-serif** for body
    - nav. Google Fonts `<link>` in index.html.
  - Brand amber: **#f4ad2d** — `--primary` in the re-themed Bootstrap; used
    for `btn-primary` (bg + border, text #212529), `text-primary` (hero h1),
    section eyebrow spans, nav hover/active, scrolled-nav logo + links,
    `.form-control:focus` border, blog title hover, active carousel dot,
    social icons on dark bg. Surface via `@theme` (`--color-brand: #f4ad2d`).
  - Black: **#000** — about-me section bg (`bg-black`), footer bg, portfolio
    hover overlay base, blog title color.
  - Light grays: **#f8f9fa** (bg-light testimonial section), **#f6f5f5 /
    #f7f7f7** alt tints; meta text **#ccc**; body copy **#666666 / #212529**.
  - Overlays: hero `rgba(0,0,0,0.3)`, portfolio item hover `rgba(0,0,0,0.4)`,
    video `rgba(0,0,0,0.2)`, navbar over hero `rgba(0,0,0,0.5)`, footer link
    color `rgba(255,255,255,0.5)`, footer top border `rgba(255,255,255,0.1)`.
  - Buttons: `btn-primary` bg #f4ad2d / text #212529 / border #f4ad2d,
    Bootstrap radius (~4px), padding ~.375rem .75rem; uppercase? No —
    keep text as rendered ("Contact Me").
  - Sections: `.site-section` padding 2.5em → 5em → 7rem responsive (use
    Tailwind `py-16 md:py-24 lg:py-28`-ish rhythm); hero full-height
    `min-height: 677px`.
  - Social buttons: 50×50px circles, bg rgba(255,255,255,0.2) on dark,
    amber icons, hover white bg.
- **Recreation decisions:** navbar = fixed/absolute over hero, transparent
  dark (white logo "Lensly" + white links), turns white + shadow on scroll
  (logo + active link amber, links black), mobile hamburger → slide-in menu
  with close button; hero = full-bleed picsum photo + dark overlay, white
  eyebrow "Hey there! I'm Craig Smith", amber serif h1 "Wedding & Event
  Photographer", white paragraph, amber "Contact Me" button; works = 12-tile
  responsive grid (4/3/2 cols) with hover overlay + image zoom (classes
  web/brand/design as data tags); about = black section, image left, "About
  Me" heading + two paragraphs + 4 circular social buttons (lucide
  Facebook/Twitter/Instagram/Linkedin); video = centered 70px circular white
  play button on image → video modal with placeholder; testimonials = 3
  light-gray cards; news = 3 post cards with image, "July 17, 2019 by
  Admin"-style meta, title, excerpt; footer = black, About Me blurb + Quick
  Links + Newsletter form (email input + amber subscribe) + bottom bar with
  repo-standard credit; images picsum-seeded
  (`picsum.photos/seed/lensly-N/w/h`); fonts via Google Fonts `<link>`
  (Mulish + Hepta Slab); icons via lucide-react.

Lensly lives in `apps/lensly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a full-width navbar that is transparent dark over the
hero and turns solid white on scroll.

#### Scenario: Nav content

- **GIVEN** the Lensly page is rendered
- **WHEN** the navigation bar is displayed at the top of the page
- **THEN** it SHALL show the site name "Lensly" in uppercase white text on
  the left
- **AND** it SHALL show the links Home, About, Photography, Event, and
  Contact
- **AND** the bar SHALL be transparent with a dark tint over the hero

#### Scenario: Scroll state

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL have a solid white background with a subtle shadow
- **AND** the logo and the active/hover link SHALL be amber (#f4ad2d) and
  the other links black

#### Scenario: Mobile menu

- **GIVEN** the navigation is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** a slide-in menu SHALL open showing the nav links
- **AND** the user SHALL be able to close it with a close control

### Requirement: Hero section

The system SHALL render a full-height photo hero with an eyebrow, an amber
serif headline, a paragraph, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width photographic background with a dark
  overlay
- **AND** it SHALL show the white eyebrow text "Hey there! I'm Craig Smith"
- **AND** it SHALL show the heading "Wedding & Event Photographer" in the
  serif display font, colored amber (#f4ad2d)
- **AND** it SHALL show a supporting paragraph
- **AND** it SHALL show an amber "Contact Me" button with dark text

### Requirement: Works portfolio grid

The system SHALL render a centered "See My Works" header and a responsive
grid of portfolio image tiles with hover overlays.

#### Scenario: Works section content

- **GIVEN** the page is rendered
- **WHEN** the works section is displayed
- **THEN** it SHALL show an amber eyebrow label "My Works" above the serif
  heading "See My Works", centered
- **AND** it SHALL show a grid of twelve image tiles (4 across on desktop,
  collapsing to 2 and 1 on smaller screens)

#### Scenario: Tile hover

- **GIVEN** a portfolio tile is displayed
- **WHEN** the user hovers or focuses the tile
- **THEN** a dark overlay SHALL appear and the image SHALL zoom slightly
- **AND** a centered label/icon SHALL fade in

### Requirement: About section

The system SHALL render a black two-column about section with circular social
buttons.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL have a black (#000) background
- **AND** it SHALL show a portrait image on the left and the heading "About
  Me" with two supporting paragraphs on the right
- **AND** it SHALL show a row of four circular social buttons with amber
  icons

### Requirement: Video section

The system SHALL render a "See The Video" section with a centered play
button.

#### Scenario: Video block

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL show the amber eyebrow "See The Video" above the serif
  heading "See The Video", centered
- **AND** it SHALL show a media block with a dark overlay and a centered
  70px circular play button with a white border and white icon

#### Scenario: Play interaction

- **GIVEN** the play button is displayed
- **WHEN** the user activates it
- **THEN** a video modal SHALL open (placeholder video or lightbox)

### Requirement: Testimonials

The system SHALL render a light-gray testimonials section with three quote
cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL have a light-gray (#f8f9fa) background
- **AND** it SHALL show the amber eyebrow "Testimonials" above the serif
  heading "What Client Says", centered
- **AND** it SHALL show three cards — "The Best Photographer", "Easy To
  Work With", and "Professional Photographer" — each with a quote paragraph

### Requirement: News / Events section

The system SHALL render a white "Events" section with three blog post cards.

#### Scenario: Post cards

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show the amber eyebrow "News" above the serif heading
  "Events", centered
- **AND** it SHALL show three post cards, each with an image, a meta line
  (e.g. "July 17, 2019 by Admin"), a title link, and an excerpt
- **AND** a card title SHALL turn amber on hover

### Requirement: Footer

The system SHALL render a black footer with an about blurb, quick links, a
newsletter form, and a bottom bar.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a black (#000) background
- **AND** it SHALL show an "About Me" column with a short description
- **AND** it SHALL show a "Quick Links" column with the links About Us,
  Testimonials, Terms of Service, Privacy, and Contact Us
- **AND** it SHALL show a "Newsletter" column with an email input and an
  amber subscribe button
- **AND** the bottom bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lensly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, works, about, video,
  testimonials, events, and footer inside the main landmark in the
  original's order
- **AND** the document title SHALL be "Lensly — Wedding & Event Photographer"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- lensly` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → works → about →
      video → testimonials → events → footer).
- [ ] Design tokens applied: brand amber #f4ad2d (hero h1, eyebrows, nav
      hover/active, scrolled navbar logo, social icons, blog title hover,
      subscribe button), black #000 (about bg, footer bg), light gray
      #f8f9fa (testimonials), overlays rgba(0,0,0,.3/.4/.5), Hepta Slab
      (headings, weight 900 hero h1) + Mulish (body) fonts.
- [ ] Navbar is transparent dark over the hero and turns white with shadow on
      scroll; mobile hamburger opens a closable slide-in menu.
- [ ] Hero has the white eyebrow, amber serif h1, paragraph, and amber
      "Contact Me" button on a full-height photo with dark overlay.
- [ ] Works grid renders 12 tiles with hover overlay + zoom; about section is
      black with 4 circular amber social buttons; video section has the
      70px circular play button opening a modal.
- [ ] Testimonials: 3 cards on #f8f9fa; events: 3 post cards with
      date/author meta, title, excerpt; footer: 3 columns + newsletter +
      bottom bar with repo-standard credit.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Capture 2), preview URL
      (note: `/theme/capture2/`, not `capture-2`), tokens, and renames.

# Template: Genesis (Creative Agency Portfolio)

## Purpose

Genesis is a single-page creative-agency/portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Approach" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Approach" — creative agency / design studio
  portfolio landing page (source:
  https://colorlib.com/wp/template/approach/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/approach/
  (HTTP 200, full rendered DOM + `css/style.css` (19KB) extracted
  2026-08-12 during prep). The TEMPLATES.md screenshot
  (`approach-free-template.jpg`, 1200×946) was also viewed (browser) and
  confirms the design below: SOLID BLACK hero (no background photo — verified
  in live preview computed style: `background: rgb(0,0,0)`,
  `background-image: none`) with a huge white Poppins-900 headline, a white
  circular play button, a masonry-style portfolio photo collage (black-and-
  white + beige/peach photography) on a light-grey band overlapping the hero,
  three blue-icon service columns on white, a VIVID BLUE band (`#3b4eda` —
  computed `rgb(59,78,218)`, i.e. Bootstrap `.bg-primary` overridden to the
  brand color) with white blog cards in a carousel, a light-grey client logo
  strip, and a white footer with a blue wordmark.
- **Section order (1:1):** Navbar (`site-navbar`, absolute, transparent over
  the black hero) → Hero cover (`site-section-cover`, solid black, centered
  h1 + lead + circular play button) → Portfolio grid (`container-fluid
portfolio-wrap bg-light pt-0 site-section`, margin-top -5rem overlapping
  the hero, 2 rows: 3/6/3 then 4/4/4) → Services (`site-section`, 3 icon
  cards) → Blog Updates (`site-section bg-primary` = #3b4eda band: heading +
  lead left, owl-carousel of 6 media cards, 3 per slide, white dot
  pagination) → Clients (`site-section bg-light`, 4 logo images in col-md-3)
  → Footer (`footer site-section bg-white`, logo + 3 link columns) → Social
  icons + copyright strip (`site-section`, 5 centered icon links + centered
  copyright "made with ♥ by Colorlib").
- **Navbar details:** `position: absolute`, transparent over the hero, logo
  "Approach" → **Genesis** (white, uppercase, Poppins), links Home,
  Portfolio, About, Services, Blog, Contact (rgba(255,255,255,.7), hover
  #fff, active #fff, margin 15px, padding 20px 0). Mobile toggler =
  hamburger icon in **#3b4eda** (`icon-menu h3 text-primary`). Scrolled
  state (jquery.sticky adds `.sticky-wrapper.is-sticky` — CSS:
  `.sticky-wrapper.is-sticky .site-navbar`): background #fff, box-shadow
  `4px 0 20px -5px rgba(0,0,0,.2)`, logo **#3b4eda**, links #000, active
  link #3b4eda; `.shrink` reduces padding (mobile 30px 0).
- **Design tokens extracted from `style.css` + computed styles:**
  - Primary **#3b4eda** (vivid indigo blue) — active nav link, scrolled/footer
    logo, service icons (`font-size: 4rem`), mobile hamburger, dropdown
    border-top 2px, and the Blog Updates band (`.bg-primary` → #3b4eda).
  - Black **#000** — hero background (solid, no image), portfolio hover
    overlay (`.portfolio-item:after` opacity .2), portfolio-wrap `:before`
    black band (height 70% of the section, behind the images).
  - Light band **#f8f9fa** (Bootstrap `.bg-light`, computed rgb(248,249,250))
    — portfolio section + clients section.
  - Body text **#6c7b95** (slate blue-grey), weight 300, 16px, line-height
    1.7; body font **"Source Serif Pro", serif**.
  - Headings: **Poppins**, weight 900. Hero h1 white `4rem` (64px; 2rem
    <992px), line-height 1.3; Blog band h2 white 32px weight 700; service h3
    20px weight 900 color #000; blog card h3 26px bold white.
  - Hero lead: 18px, rgba(255,255,255,.6). Hero row: `calc(100vh - 196px)`,
    min-height 677px (mobile: `70vh - 196px`, min-height 600px).
  - Buttons: no rectangular CTAs. Play button `.btn-video_38929`: 50×50px
    circle, border-radius 50%, background #fff, black icon centered (14px);
    opens a Vimeo video in a fancybox lightbox (https://vimeo.com/191947042).
  - Portfolio items `.portfolio-item`: block, overflow hidden, box-shadow
    `0 4px 40px -5px rgba(0,0,0,.4)`; hover: img `scale(1.05)` (0.3s) +
    black overlay opacity .2.
  - Blog band dots (`.nonloop-block-13 .owl-dots`): 10px white circles,
    margin 4px, positioned `bottom: -3rem` below the carousel.
  - Blog card (`.media-29191`): image, `.date` white, h3 26px bold white
    link; author vcard (`.vcard-91123`): 60px flex avatar (`flex: 0 0 60px`,
    img border-radius 50%), name 14px white — "by John Freeman" + "Thinker &
    Designer".
  - Footer: bg #fff, padding 8em 0 (128px; 4em <768px); `.site-logo-footer`
    Poppins, uppercase, bold, color #3b4eda; links rgba(0,0,0,.5), hover
    #000, `li` margin-bottom 10px.
  - Form control (other pages): height 55px, Poppins — not needed on the
    single landing page.
- **Visual design (screenshot `approach-free-template.jpg`):** high-contrast
  modern dark aesthetic — solid black hero, huge bold white headline,
  circular white play button; portfolio collage of black-and-white
  architectural photography + beige/peach lifestyle shots (tall center
  image, smaller flanking images); white services section with blue icons;
  the screenshot frame cuts off right below the portfolio grid (the blue
  blog band + footer were confirmed in the live preview instead).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/genesis-<n>/<w>/<h>`); icons → lucide-react (Play for
  the hero button; Monitor / PenTool / Award for Interface Design / Product
  Design / Quality Results; Facebook, Twitter, Linkedin, Instagram,
  MessageCircle for the social row; Heart for the copyright); client logos →
  styled text wordmarks (bold, uppercase, grey) since logo assets must not
  be copied; Poppins (400/900) + Source Serif Pro via Google Fonts `<link>`
  in `index.html`; navbar scroll listener reproduces the transparent →
  sticky white (`.is-sticky`) state with the #3b4eda logo; the owl-carousel
  becomes a lightweight auto-advancing carousel (or scroll-snap strip) with
  white dot pagination, 3 cards per slide on desktop; the play button opens
  a video modal (embedded placeholder) or links out; the `typed.js` script
  is dead code on the original index page (no `.typed-words` element exists
  in the DOM — the headline is static) so it is skipped; footer stays white
  with the same-kind link columns; original copy is generic Lorem Ipsum —
  paraphrase keeping the same content kinds; no assets copied.

Genesis lives in `apps/genesis` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar that is absolutely positioned and
transparent over the black hero, showing the site name "Genesis" and section
links, and SHALL switch to a fixed white bar with a shadow after scrolling.

#### Scenario: Navbar content

- **GIVEN** the Genesis page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Genesis" in white uppercase
  letters and links to Home, Portfolio, About, Services, Blog, and Contact
- **AND** the navbar SHALL be transparent with light links over the hero

#### Scenario: Navbar on scroll

- **GIVEN** the page is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become white with a subtle shadow
- **AND** its logo SHALL turn the primary color and its links SHALL turn
  black with the active link in the primary color

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user activates the menu toggle
- **THEN** a slide-in menu SHALL open with the section links and the toggle
  icon SHALL be in the primary color

### Requirement: Hero cover

The system SHALL render a full-height solid-black hero with a centered white
headline, a subheading, and a circular white play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "Creativity is a wild mind and a
  disciplined eye." in white, bold, large text centered on a solid black
  background
- **AND** it SHALL show a short lead paragraph in translucent white
- **AND** it SHALL show a circular white play button

#### Scenario: Play button interaction

- **GIVEN** the hero section is displayed
- **WHEN** the user activates the play button
- **THEN** a video modal SHALL open (or the video SHALL link out)

### Requirement: Portfolio grid

The system SHALL render a portfolio section on a light #f8f9fa band that
overlaps the hero, with two staggered rows of image links that zoom and
darken on hover.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show six image links laid out in two rows (3/6/3
  columns then 4/4/4 columns)
- **AND** the section SHALL overlap the bottom of the hero
- **AND** hovering an image SHALL zoom it slightly and darken it with a
  black overlay

### Requirement: Services

The system SHALL render a white services section with three columns, each
with an icon in the primary color, a bold title, and a short description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show three cards titled "Interface Design", "Product
  Design", and "Quality Results"
- **AND** each card SHALL show a large icon in the primary color, a bold
  20px heading, and a 16px grey description

### Requirement: Blog updates band

The system SHALL render a primary-color (#3b4eda) band with a white heading
and lead on the left and a carousel of blog cards with images, dates,
titles, and author rows.

#### Scenario: Blog band content

- **GIVEN** the page is rendered
- **WHEN** the blog band is displayed
- **THEN** it SHALL show the heading "Blog Updates" and a lead paragraph in
  white
- **AND** it SHALL show a carousel of six blog cards, each with an image, a
  date ("October 18, 2019"), a bold white title, and an author row with a
  round avatar, "by John Freeman", and "Thinker & Designer"
- **AND** the carousel SHALL show three cards per slide with white dot
  pagination below

### Requirement: Clients

The system SHALL render a light #f8f9fa strip with four client logo
placeholders in a row.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL show four equal-width client logo placeholders in a
  single row

### Requirement: Footer

The system SHALL render a white footer with the site wordmark in the primary
color and three link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Genesis" in the primary color,
  bold and uppercase, on the left
- **AND** it SHALL show a contact column (Contact Us, an email address, a
  phone number, Support) and two navigation columns (Home, Blog, Services,
  About Us)

### Requirement: Social and copyright strip

The system SHALL render a strip below the footer with five centered social
icon links and a centered copyright line crediting the template source.

#### Scenario: Social strip content

- **GIVEN** the page is rendered
- **WHEN** the social strip is displayed
- **THEN** it SHALL show five centered social icon links
- **AND** it SHALL show a centered copyright line that credits the template
  source with a heart icon

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Genesis app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar, the hero, the portfolio grid,
  the services, the blog updates band, the clients, the footer, and the
  social strip in order
- **AND** the document title SHALL be "Genesis — Creative Agency Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/genesis`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/genesis`)
- [ ] Section order matches the reference 1:1 (navbar → hero cover → portfolio grid → services → blog updates band → clients → footer → social strip)
- [ ] Design tokens from the reference used in `@theme` (primary #3b4eda, black hero #000, light band #f8f9fa, body text #6c7b95, heading weight 900; Poppins + Source Serif Pro Google Fonts)
- [ ] Navbar: absolute transparent over hero, white + shadow + #3b4eda logo/active link on scroll, #3b4eda mobile toggle
- [ ] Hero: solid black full-height cover, white 64px weight-900 centered headline, 18px translucent lead, 50px circular white play button (opens video modal / links out)
- [ ] Portfolio: #f8f9fa band overlapping hero (negative margin), 2 rows (3/6/3 + 4/4/4), hover zoom scale(1.05) + black overlay .2, shadow 0 4px 40px -5px rgba(0,0,0,.4)
- [ ] Services: white section, 3 cards (Interface Design, Product Design, Quality Results) with 4rem #3b4eda lucide icons, 20px weight-900 headings, 16px #6c7b95 text
- [ ] Blog band: #3b4eda background, white 32px bold "Blog Updates" + lead, carousel of 6 media cards (image, white date, 26px bold white title, round-avatar author row) with white dot pagination, 3 per slide
- [ ] Clients: #f8f9fa strip with 4 equal logo placeholders
- [ ] Footer: white, 8em padding, #3b4eda bold uppercase wordmark, 3 link columns (contact + 2 nav), links rgba(0,0,0,.5) hover #000
- [ ] Social strip: 5 centered social icons + centered copyright with heart, crediting ColorLib

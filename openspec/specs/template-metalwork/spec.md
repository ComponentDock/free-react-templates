# Template: Metalwork (Industrial / Steel Fabrication Template)

## Purpose

Metalwork is a single-page industrial company template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Industrial" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Industrial" — steel fabrication / industrial
  company site, "Free Website Template by Free-Template.co" (Bootstrap 4,
  the original is the Free-Template.co house style; source:
  https://colorlib.com/wp/template/industrial/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/industrial/
  (HTTP 200, ~28 KB HTML fetched; `css/style.css` ~57 KB parsed in full).
- **Screenshot analyzed:** `industrial-free-template.jpg` (1200x946, AVIF
  source converted to PNG) — full-height hero photo of a welder's hands
  striking bright sparks in a dark workshop, dark overlay; white uppercase
  brand "INDUSTRIAL" top-left, links HOME / ABOUT / PROJECTS / SERVICES /
  BLOG / CONTACT top-right, plus a search form; centered white circular
  play button; headline "THE BEST LEVEL OF EXCELLENCE IN STEEL FABRICATION"
  in white uppercase with the **whole headline on a bright-orange `#fd5f00`
  highlight block**; white 20px subtext; slider arrows left/right. Below the
  fold (top visible): white section with centered h2 "We'll Handle Any
  Probles and Solve Them" [sic] and a 3-column row — orange icon cards left
  (screen/chart icon), a photo column center, orange 3D-cube icon card
  right. The remaining sections (services row, two about blocks, projects
  grid, testimonials, blog, CTA band, footer) were extracted from the DOM
  and CSS, not the screenshot (screenshot cuts off after the features
  section).
- **Section order (1:1, from the DOM of the home page):**
  1. Navbar (`header > nav.navbar.navbar-expand-lg.navbar-dark.bg-dark`,
     static, above the slider): left `navbar-brand` "Industrial" (white);
     links HOME (active) / ABOUT / PROJECTS / SERVICES (dropdown:
     **Architectural Design · Interior · Building**) / BLOG / CONTACT
     (`rgba(255,255,255,0.5)` → hover `0.75`); far right a search form
     (search icon + underline-only transparent input, placeholder
     "Search...", 44px, bottom border `rgba(255,255,255,0.3)`). Mobile:
     hamburger toggler collapsing to a stacked menu. A `.top-shadow` div
     sits under the header.
  2. Hero slider (`section.home-slider.owl-carousel`, 2 slides): each
     `.slider-item` is 100vh (min-height 700px) with a cover background
     image (`industrial_hero_1.jpg` / `industrial_hero_2.jpg`) and a
     `:before` overlay — `linear-gradient(to bottom, black 0%,
rgba(145,232,66,0) 100%)`, 500px tall, from the top. Centered column
     (`col-lg-7 text-center`): `div.btn-play-wrap` with a circular play
     link (`a.btn-play`, 60px white circle, black play icon, hover grows to
     80px) opening a Vimeo fancybox video; h1 uppercase white 50px weight
     300 with the **entire headline wrapped in a `<span>`** styled as an
     orange highlight block (`background:#fd5f00` + `box-shadow: 0.5em 0 0
#fd5f00, -0.5em 0 0 #fd5f00`, margin-left .5em) — slide 1 "We Are
     Industrial Company", slide 2 "The Best Level of Excellence in Steel
     Fabrication"; centered p 20px weight 300 white (w-75). Owl carousel
     arrows (chevrons at mid-height) + dots (7px white pills, active 12px,
     bottom 100px).
  3. Features (`section.section`, white, padding 7em 0): centered h2
     "We'll Handle Any Probles and Solve Them" [sic, typo kept in source];
     `row.align-items-stretch` — center column (`col-lg-4 order-lg-2`) is a
     `feature-img-bg` photo (`industrial_feature_1.jpg`, height 400px,
     hover scale 1.2 inside a scaling `.frame`); left column 2 cards:
     **Ducting Design** (ion-easel icon), **Stacks Design** (ion-hammer
     icon); right column 2 cards: **Tanks Design** (ion-cube icon),
     **Structural Design** (ion-clipboard icon). Each `.feature-1` card:
     bg `#f8f9fa`, padding 30px, icon `display-4 text-primary` orange, h3
     1.2rem, blurb paragraph.
  4. Services row (`section.section.bg-light`): 3 centered columns
     (`media.block-6.d-block.text-center`) — icon (50px, `text-primary`
     orange) + h3 + blurb: **Modern Design** (bell icon) · **Built With
     Passion** (heart icon) · **Fast Loading** (flash icon).
  5. About 1 (`section.section.element-animate`, white): `col-lg-7` image
     left (`industrial_featured_img_1.jpg` in a scaling `.frame`),
     `col-md-5` text right (`block-41`): h2 `block-41-heading` "Let's Build
     Together" (50px, Montserrat 900, line-height 1.2), text 20px, `a.readmore`
     "Read More" (uppercase .9rem with an arrow-circle icon, hover padding
     grows 20px → 30px).
  6. About 2 (`section.section.element-animate.bg-light`): mirrored —
     image right (`industrial_featured_img_2.jpg`), text left: h2 "We'll
     handle any intercate custom design" [sic], paragraph, Read More.
  7. Projects (`section.section.border-t.pb-0`, top border 2px `#dee2e6`):
     centered heading block (h2 "Projects" + lead paragraph); then
     **full-bleed** `container-fluid` → `row.no-gutters` 3×2 grid of 6
     tiles (`a.link-thumbnail`, col-md-4): image
     `industrial_img_1..6.jpg` + h3 title + `ion-plus` icon. Titles:
     "Ducting Design in Colorado", "Tanks Project In California",
     "Structural Design in New York", "Stacks Design", "Intercate Custom",
     "Banker Design". Hover: dark overlay `rgba(0,0,0,0.6)`, image scales
     1.1, white 18px h3 slides up from bottom (bottom -20px → 30px), plus
     icon 30px white fades in.
  8. Testimonial (`section.section.bg-light.block-11`): centered h2
     "Testimonial"; owl carousel of 4 items — `.block-33` white card
     (max-width 700px, padding 40px): `vcard` row — 60px round avatar
     (`person_3.jpg` / `person_2.jpg`), name 18px weight 300 ("John Smith",
     "Joshua Darren", "John Smith", "John Smith") + meta "Free-Template.co
     Client" (`#a6a6a6`); `blockquote` 16px quote text. Nav arrows below
     center (`bottom: -40px`).
  9. Blog (`section.section.blog`, white): centered h2 "Blog Posts" + lead;
     `row` of 3 `media.mb-4` cards in 2 columns (col-md-6): image left
     (`a.mr-5`, width 40%, 100% on mobile) + body — `span.post-meta`
     "Feb 26th, 2018" (12px uppercase `#b3b3b3`, letter-spacing .2em), h3
     20px black title "How to handle any intercate custom design" [sic],
     excerpt (first card only), Read More link. Images
     `industrial_blog_1..3.jpg`.
  10. CTA band (`section.section.bg-primary`, orange `#fd5f00`): flex row —
      `col-lg-8`: h2 white "Get Started With Industrial Free Template" +
      white lead paragraph; `col-lg-4 text-lg-right`: `a.btn.btn-outline-white.px-4.py-3`
      "Download This Template" (2px white border, white text, hover → white
      bg / black text).
  11. Footer (`footer.site-footer`, white, padding 7em 0, border-top
      `#eee`): 3 columns — "About The Industrial" (paragraph + social icon
      row: twitter / facebook / linkedin / instagram); "Contact Info"
      (Address: 34 Street Name, City Name Here, United States · Telephone:
      +1 242 4942 290 · Email: info@yourdomain.com); "Quick Links" (About,
      Terms of Use, Disclaimers, Contact). h3s 12px uppercase bold
      letter-spacing .1em; links orange `#fd5f00` with
      `border-bottom: 1px solid rgba(0,0,0,0.2)` → black hover. Bottom
      centered copyright bar (monorepo credit, not ColorLib).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Primary brand **orange `#fd5f00`** (`.btn-primary` bg/border, `.bg-primary`
    CTA band, `.text-primary` icons, `.site-footer a` links, hero h1 `<span>`
    highlight bg). Hover `#ff7e31` (btn-primary hover bg/border); darker
    shades `#ca4c00` / `#d75100` / `#b14200` (Bootstrap btn-primary
    active/focus borders). Focus ring `rgba(253,95,0,0.5)`.
  - Light surface `#f8f9fa` (`.bg-light` sections AND `.feature-1` cards);
    section border `#dee2e6` (2px, `.border-t`); footer border-top `#eee`.
  - Text: body **"Oxygen"** 15px, line-height 1.8, color `#6c757d`; headings
    **"Montserrat"** weight 900, color `#000`, line-height 1.5 (both Google
    Fonts, via `<link>` — never copy font files). Hero h1 50px (40px ≤
    992px) weight 300, uppercase, white, `margin-left: .5em`; hero p 20px
    weight 300 white. `block-41-heading` 50px line-height 1.2; `block-41-text`
    20px. Navbar brand white 1.25rem; nav links `rgba(255,255,255,0.5)` →
    hover `rgba(255,255,255,0.75)`; navbar bg Bootstrap `bg-dark` `#343a40`.
  - Buttons `.btn`: font-size **13px, uppercase, letter-spacing .2em,
    weight 900**, border-width 2px, radius 0.25rem (Bootstrap default), no
    box-shadow. `.btn-primary`: orange bg, white text. `.btn-outline-white`:
    2px white border / white text → hover white bg + black text.
  - Hero overlay: `linear-gradient(to bottom, black 0%, rgba(145,232,66,0)
100%)` (500px tall, top of slider) — dark-to-transparent.
  - Play button: 60px white circle, black icon, hover 80px; `btn-play-wrap`
    100px.
  - Feature cards: bg `#f8f9fa`, padding 30px, h3 1.2rem; icons `display-4`
    (~50px) orange. Services row icons 50px orange, centered.
  - Read More: uppercase .9rem with arrow icon, hover padding-right 20px →
    30px.
  - Project tiles: hover overlay `rgba(0,0,0,0.6)` + image scale(1.1) +
    h3 18px white slides up (bottom -20px → 30px) + 30px white plus icon.
  - Testimonial card: white, max-width 700px, padding 40px; avatar 60px
    round; name 18px weight 300; meta `#a6a6a6`; quote 16px.
  - Blog: image link width 40% (100% ≤ 768px); post-meta 12px uppercase
    `#b3b3b3` letter-spacing .2em; h3 20px.
  - Footer: h3 12px uppercase bold letter-spacing .1em; links `#fd5f00`,
    hover `#000`, `border-bottom: 1px solid rgba(0,0,0,0.2)`.
  - Section rhythm: `.section` padding **7em 0**; `container` widths;
    `.scaling-image`/`.frame` hover parallax (frame → scale .9, inner
    img/bg → scale 1.2).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/metalwork-<n>/<w>/<h>`); icons → lucide-react
  (Presentation, Hammer, Box, ClipboardList, Bell, Heart, Zap, Play,
  ChevronLeft, ChevronRight, Plus, Search, ArrowRightCircle, Twitter,
  Facebook, Linkedin, Instagram, MapPin, Phone, Mail, Menu); Oxygen +
  Montserrat via Google Fonts `<link>` in `index.html`; brand orange
  `#fd5f00` (+ hover `#ff7e31`) in `@theme` so shared Button/ButtonLink
  `primary` resolves to orange with 2px border and the local
  outline-white style (2px white border, hover invert) is added as a
  variant; no asset/CSS/font-file copying. Demo copy paraphrased but same
  kinds (hero headline + subtext; feature icon + title + blurb; about
  heading + paragraph + Read More; project tile title; testimonial quote +
  name + role; blog meta + title + excerpt; CTA heading + Download button;
  footer brand + contact info + quick links). Demo typos kept as-is in the
  source and **fixed in the recreation**: "Probles" → "Problems",
  "intercate" → "intricate", "Free-Template.co Client" → "Component Dock
  Client" (or similar neutral role). The 4-slot testimonial carousel and
  2-slide hero carousel are implemented with prev/next + dot navigation;
  hero play button can link to a placeholder/disabled state (no real Vimeo
  embed). Footer copyright uses the Component Dock credit line, not
  ColorLib.

Metalwork lives in `apps/metalwork` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the dark navbar + search form + Services
dropdown and the white 3-column footer).

## Requirements

### Requirement: Navbar

The system SHALL render a dark navbar with the site wordmark, section
links, a Services dropdown, and a search form.

#### Scenario: Navbar content

- **GIVEN** the Metalwork page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Metalwork" as the brand
- **AND** the navbar SHALL show links HOME, ABOUT, PROJECTS, SERVICES, BLOG, CONTACT
- **AND** the SERVICES link SHALL expand a dropdown with Architectural Design, Interior, and Building
- **AND** the navbar SHALL show a search input with placeholder "Search..."

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered at a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links SHALL expand into a stacked menu

### Requirement: Hero slider

The system SHALL render a full-height image slider with two slides, each
with a dark top gradient, a play button, an orange-highlighted uppercase
headline, and subtext.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** slide 1 SHALL show the headline "We Are Industrial Company"
- **AND** slide 2 SHALL show the headline "The Best Level of Excellence in Steel Fabrication"
- **AND** each headline SHALL be rendered in white uppercase with an orange highlight block behind the text
- **AND** each slide SHALL show a subtext paragraph and a circular play button

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates a slider arrow or dot
- **THEN** the slider SHALL advance to the next slide

### Requirement: Features ("We'll Handle Any Problems and Solve Them")

The system SHALL render a white section with a centered heading, a center
photo column, and four feature cards (icon + title + blurb) in two side
columns.

#### Scenario: Feature section content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "We'll Handle Any Problems and Solve Them"
- **AND** four features titled "Ducting Design", "Stacks Design", "Tanks Design", and "Structural Design", each with an orange icon and a blurb
- **AND** a photo column between the two card columns

### Requirement: Services row

The system SHALL render a light-background row of three centered icon
services.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services row is displayed
- **THEN** it SHALL show "Modern Design", "Built With Passion", and "Fast Loading", each with a centered orange icon and a blurb

### Requirement: About blocks

The system SHALL render two alternating image/text about blocks, each with
a large heading, a paragraph, and a Read More link.

#### Scenario: About block 1

- **GIVEN** the page is rendered
- **WHEN** the first about block is displayed
- **THEN** it SHALL show the image on the left, the heading "Let's Build Together", a paragraph, and a "Read More" link

#### Scenario: About block 2

- **GIVEN** the page is rendered
- **WHEN** the second about block is displayed
- **THEN** it SHALL show the image on the right on a light background, a heading about custom design, a paragraph, and a "Read More" link

### Requirement: Projects grid

The system SHALL render a heading block and a full-bleed 3-column grid of
six project tiles (image, title, plus icon) with a hover overlay.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show the heading "Projects" with a lead paragraph
- **AND** six project tiles with titles "Ducting Design in Colorado", "Tanks Project In California", "Structural Design in New York", "Stacks Design", "Intercate Custom", and "Banker Design"

#### Scenario: Tile hover

- **GIVEN** a project tile is displayed
- **WHEN** the user hovers over it
- **THEN** the tile SHALL show a dark overlay, a zoomed image, a white plus icon, and the title sliding up

### Requirement: Testimonials

The system SHALL render a light-background section with a heading and a
carousel of customer testimonials (avatar, name, role, quote).

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show the heading "Testimonial"
- **AND** at least one testimonial card with a round avatar, a customer name, a role, and a quote

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next testimonial

### Requirement: Blog section

The system SHALL render a blog section with a heading and three media-style
blog cards (image, date meta, title, excerpt, read-more link).

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Blog Posts" with a lead paragraph
- **AND** three blog cards, each with an image, a date meta line, a title, and a "Read More" link

### Requirement: CTA band

The system SHALL render an orange band with a white heading, white lead
text, and an outlined "Download This Template" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show a white heading and lead paragraph on the orange background
- **AND** a white-outlined button labeled "Download This Template"

### Requirement: Footer

The system SHALL render a footer with brand/about + social icons, Contact
Info, and Quick Links columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About" column with a paragraph and social icons
- **AND** a "Contact Info" column with address, telephone, and email
- **AND** a "Quick Links" column (About, Terms of Use, Disclaimers, Contact)
- **AND** the footer SHALL show a centered copyright bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Metalwork app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero slider, features, services row, about blocks, projects grid, testimonials, blog, CTA band, and footer in order
- **AND** the document title SHALL be "Metalwork — Industrial Template"

## Verification checklist

- [ ] `openspec/specs/template-metalwork/spec.md` present with the REAL
      section list (navbar → hero slider → features → services row → about
      ×2 → projects grid → testimonials → blog → CTA band → footer).
- [ ] Design tokens above (orange `#fd5f00`/hover `#ff7e31`, light
      `#f8f9fa`, Oxygen body + Montserrat 900 headings, 13px uppercase
      2px-border buttons, 50px hero h1 with orange highlight span, 7em
      section rhythm, dark navbar with search form) captured in the spec.
- [ ] `docs/templates/metalwork/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh metalwork`,
      PR lists source (ColorLib Industrial), preview URL, tokens, and what
      differs.

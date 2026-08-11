# Template: Folium (Blog / Business Website)

## Purpose

Folium is a single-page business-website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Papers" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Papers" — business / blog landing page (source:
  https://colorlib.com/wp/template/papers/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/papers/
  (HTTP 200, full rendered DOM + `css/style.css` (66KB) extracted
  2026-08-12 during prep). The TEMPLATES.md screenshot
  (`papers-free-template.jpg`) was also viewed (browser) and confirms the
  design below: transparent dark navbar over a full-width hero photo
  (smiling woman with curly hair holding a phone, olive/teal overlay), white
  50px headline, thin Rubik body text, mint-green #4ECCA3 accents, a quote
  band in mint green, flip-card testimonials, and a WHITE footer (the
  `ftco-bg-dark` class is overridden by `.ftco-footer { background: #fff }`
  — verified visually in the live preview).
- **Section order (1:1):** Navbar (transparent over hero, absolute, top
  10px; brand "Papers" → "Folium" + nav Home, What We Do, The Journal, Who
  We Are, Plans & Pricing, Contact; mobile toggler "Menu") → Hero cover
  (`ftco-cover`, bg image `bg_1.jpg`, min-height 700px, white h1 "We create
  awesome templates for you." 50px weight 300 + subheading "A free template
  for Business Websites by Colorlib" (rgba white 0.7, max-width 450px) +
  outline-white button "Go Get This Template" → "Get Started"; CTA opens a
  reservation modal in the original — recreate as a scroll anchor or plain
  button) → Intro statement (`ftco-section` #section-about, white; thin
  h1 "For busy business professionals — A small river named Duden flows by
  their place…") → Split block 1 (`ftco-section-2` container-fluid, row
  no-gutters: left image `image_4.jpg` with circular play button
  (popup-vimeo → in SPA open a video modal or link), right text
  col-md-6/7 with h3 "Far far away, behind the word mountains" + 2
  paragraphs; text padding 10% 7%) → Split block 2
  (`section-2-blocks-wrapper-2`, row bg #fafafa: left text col-md-5
  ml-auto with 2× (h4.text-primary + paragraph), right image `image_5.jpg`
  (500px, negative margin -70px overlap) with mint quote block overlay:
  quote "A small river named Duden…" 24px padding 80px + author
  "— Mellissa Clark") → Testimonials (`ftco-section` white, centered h2
  "Testimonials"; 3 flip-cards 427px tall, radius 4px: front = bg image
  (`image_5/6/7.jpg`) with bottom gradient rgba(0,0,0,.8) + name 20px white
  - role 12px white (Mellissa Clark/Web Designer, Louise Kelly/Illustrator
    Designer, Aldin Powell/Web Developer); back = white, shadow
    0 0 70px -10px rgba(0,0,0,.4), centered quote 18px + author row (40px
    round avatar + name + 12px position); 3D flip on hover (rotateY 180deg,
    .6s; on mobile the back shows by default)) → What We Do (`ftco-section`
    white, centered h2 "What We Do"; 6 media cards (`block-6`): 50px flaticon
    icon with 40px mint circle #9de3cc behind (z-index -1), heading 20px
    (Creative Performance, Reach Performance, Custom Development — each
    repeated twice), paragraph 16px) → Our Blog (`ftco-section bg-light`
    #fafafa, centered h2 "Our Blog"; 3 image cards (`block-5`, 500px, bg
    image `image_10/8/9.jpg`): absolute bottom text — subheading "Travel"
    (12px uppercase letter-spacing .1em opacity .6), heading 20px bold white
    "Far far away, behind the word mountains", post-meta "Wellie Clark ·
    March 20, 2018" (12px uppercase); hover: white panel slides up
    (text:before bg #fff) and text turns black) → Footer (white bg, border-top
    1px #eeeeee, padding 8em 0: 3 link columns — "The Restaurant" (About Us,
    Chefs, Events, Contact), "Communities" (Support, Sharing is Caring,
    Better Web, Good Template), "Useful links" (Bootstrap 4, jQuery, HTML5,
    Sass); social icon circles 60px (bg rgba(255,255,255,.05), radius 50%,
    icon 26px) right-aligned; centered copyright "made with ♥ by Colorlib").
- **Design tokens extracted from `style.css` + preview HTML:**
  - Primary **#4ECCA3** (mint green) — link color (body `a`), `.text-primary`,
    `.btn-primary` bg + border, quote block bg, icon circle behind services
    icons is lighter mint **#9de3cc**, footer link hover, active nav link
    when scrolled.
  - Headings: color **#000**, font-weight **300**, line-height 1.5; hero h1
    white 50px weight 300 line-height 1.2 (37px under 992px); section h2
    centered (`.ftco-section` heading pattern).
  - Body: font **Rubik** (Google), weight 300, 16px, line-height 1.8,
    background #fff.
  - Buttons: **border-radius 0 (square)**, no box-shadow. `.btn-primary`:
    bg #4ECCA3, border 2px solid #4ECCA3, color #000; hover → transparent
    bg + #4ECCA3 text. `.btn-outline-white` (hero): border 2px
    rgba(255,255,255,.8), transparent bg, white text, padding 1rem 1.5rem;
    hover → white bg + black text.
  - Navbar: transparent (absolute over hero, top 10px), links #f0f0f0 16px
    padding 30px 20px, active white; `.scrolled` → fixed white bg +
    box-shadow 0 0 10px rgba(0,0,0,.1), links black, active #4ECCA3.
  - Section backgrounds: white; `.bg-light` / wrapper-2 band = **#fafafa**;
    hero = photo with dark olive/teal overlay (screenshot: muted green/khaki
    tint over the woman-with-phone photo).
  - Split text: padding 10% 7% (≥768px); h3 margin-bottom 50px. Quote block:
    bg #4ECCA3, color #000, font-size 24px, padding 80px, author 16px;
    image 500px with margin-top/-left -70px (desktop overlap).
  - Flip-card front gradient: linear-gradient(transparent 18%, rgba(0,0,0,.8)
    99%). Back shadow: 0 0 70px -10px rgba(0,0,0,.4).
  - Blog card (block-5): height 500px, same bottom gradient overlay; white
    text; subheading 12px uppercase letter-spacing .1em opacity .6;
    post-meta 12px uppercase opacity .6; hover overlay panel bg #fff.
  - Loader: SVG circle stroke **#F96D00** (orange) on #eeeeee track —
    skip in recreation (preloader not user-facing content).
  - Form control (reservation modal in original): height 52px, radius 0,
    border-color #000 on focus — only if the modal is recreated.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/folium-<n>/<w>/<h>`); icons → lucide-react (Play,
  Quote, and for the 6 What-We-Do cards: TrendingUp / Target / Code /
  PieChart / Handshake / Presentation or similar); the flaticon service
  icons get lucide equivalents with the mint circle behind; Rubik via Google
  Fonts `<link>` in `index.html`; navbar "scrolled" behavior via
  scroll listener (transparent → white fixed); play button opens a modal
  with an embedded video placeholder or links out; footer stays white with
  the 3 link columns renamed in spirit (keep the same link kinds); original
  copy is generic Lorem Ipsum — paraphrase keeping the same kind of content;
  no assets copied.

Folium lives in `apps/folium` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar that is transparent over the hero
and turns into a fixed white bar with a shadow after scrolling, showing the
site name "Folium" and section links.

#### Scenario: Navbar content

- **GIVEN** the Folium page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Folium" and links to Home, What We Do, The Journal, Who We Are, Plans & Pricing, and Contact
- **AND** the navbar SHALL be transparent with light links over the hero

#### Scenario: Navbar on scroll

- **GIVEN** the page is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become fixed with a white background and a subtle shadow
- **AND** its links SHALL turn black with the active link in the primary color

### Requirement: Hero cover

The system SHALL render a full-viewport-height hero with a background photo
and dark overlay, a white headline, a subheading, and an outline call-to-action
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "We create awesome templates for you." in white
- **AND** it SHALL show a subheading about a free business template
- **AND** it SHALL show an outline button with white border labeled "Get Started"

### Requirement: Intro statement

The system SHALL render a white intro section with a single thin large
headline statement.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show a large light-weight headline beginning "For busy business professionals"

### Requirement: Split block with play button

The system SHALL render a full-width split section with an image on the left
(with a circular play button overlay) and a heading with two paragraphs of
text on the right.

#### Scenario: Split block content

- **GIVEN** the page is rendered
- **WHEN** the first split section is displayed
- **THEN** it SHALL show an image with a circular play button on the left
- **AND** it SHALL show a heading and two paragraphs on the right

#### Scenario: Play button interaction

- **GIVEN** the split section is displayed
- **WHEN** the user activates the play button
- **THEN** a video modal SHALL open (or the video SHALL link out)

### Requirement: Quote band split block

The system SHALL render a second split section on a #fafafa band with two
text blocks on the left and an image with a mint quote overlay on the right.

#### Scenario: Quote band content

- **GIVEN** the page is rendered
- **WHEN** the second split section is displayed
- **THEN** it SHALL show two heading+paragraph text blocks on the left
- **AND** it SHALL show an image with an overlapping quote block in the primary color showing a quote and an author name

### Requirement: Testimonials flip cards

The system SHALL render a testimonials section with a centered heading and
three flip cards that reveal a quote when hovered.

#### Scenario: Testimonial cards content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Testimonials"
- **AND** it SHALL show three cards, each with a photo, a name, and a role on the front ("Mellissa Clark"/"Web Designer", "Louise Kelly"/"Illustrator Designer", "Aldin Powell"/"Web Developer")
- **AND** each card SHALL flip on hover to reveal a quote and an author row with a round avatar

### Requirement: What We Do services

The system SHALL render a services section with a centered heading and six
icon cards, each with an icon in a mint circle, a title, and a short
description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the "What We Do" section is displayed
- **THEN** it SHALL contain a heading "What We Do"
- **AND** it SHALL show six cards titled "Creative Performance", "Reach Performance", and "Custom Development" (each repeated twice)
- **AND** each card SHALL show an icon, a title, and a short paragraph

### Requirement: Blog section

The system SHALL render a blog section on a light #fafafa background with a
centered heading and three image cards, each with a category label, a title,
and post meta.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Our Blog"
- **AND** it SHALL show three image cards, each with a category label (e.g. "Travel"), a bold title, and post meta with an author and a date
- **AND** the cards SHALL reveal a white panel with dark text on hover

### Requirement: Footer

The system SHALL render a white footer with a top border, three link
columns, social icon circles, and a centered copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns with headings (e.g. "About", "Communities", "Useful links") and four links each
- **AND** it SHALL show social icon links
- **AND** it SHALL show a centered copyright line crediting the template source

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Folium app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar, the hero, the intro, the two split blocks, testimonials, services, blog, and the footer in order
- **AND** the document title SHALL be "Folium — Business Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/folium`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/folium`)
- [ ] Section order matches the reference 1:1 (navbar → hero cover → intro → split block w/ play button → quote band split block → testimonials flip cards → what we do → blog → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #4ECCA3, icon circle #9de3cc, body #000 on #fff, light band #fafafa, heading weight 300; Rubik Google Font)
- [ ] Navbar: transparent over hero, white fixed + shadow on scroll, active link #4ECCA3 when scrolled
- [ ] Hero: full-height bg photo with dark overlay, white 50px headline, outline-white square button
- [ ] Intro: white section, single thin large headline
- [ ] Split block 1: image + circular play button (opens video modal), heading + 2 paragraphs on the right
- [ ] Split block 2: #fafafa band, 2 text blocks left, image with mint (#4ECCA3) quote overlay (24px, padding 80px, author name)
- [ ] Testimonials: centered "Testimonials" heading, 3 flip cards (photo/name/role front, quote + round avatar back, hover flip)
- [ ] What We Do: centered heading, 6 icon cards (mint circle behind icon, 20px heading, 16px paragraph)
- [ ] Blog: #fafafa band, 3 image cards with category label, bold title, author + date meta; hover white panel
- [ ] Footer: white bg, top border #eeeeee, 3 link columns, social circles, centered copyright

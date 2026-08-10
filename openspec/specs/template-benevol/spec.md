# Template: Benevol (Charity / Nonprofit Template)

## Purpose

Benevol is a single-page charity / nonprofit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Foundation" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Foundation" — charity / donation website template
  (source: https://colorlib.com/wp/template/foundation/). TEMPLATES.md has
  THREE copies of this item (lines 402, 1266, and 2322 — mark EVERY copy
  `[x]` when done). Note: `foundation2` is a DIFFERENT template (separate
  slug, lines 583/1019/2958) and `hopefoundation` shipped as
  **congregate** — do not confuse them.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/foundation/
  (HTTP 200, ~31.7 KB rendered DOM, title "Foundation — ColorLib Website
  Template"). Stylesheets: `css/style.css` (21.2 KB, extracted) +
  `css/bootstrap.min.css` (CUSTOMIZED — `.btn-primary` computes to
  `#fd5f00`, NOT Bootstrap blue) + owl.carousel / owl.theme.default /
  magnific-popup / jquery-ui / bootstrap-datepicker / aos + icon fonts
  `fonts/icomoon/style.css` (icon-facebook, icon-twitter, icon-instagram,
  icon-linkedin, icon-play, icon-heart) and `fonts/flaticon` (six cause
  icons: flaticon-piggy-bank, flaticon-blood, flaticon-food,
  flaticon-donation, flaticon-dollar, flaticon-unity). Fonts loaded via
  Cloudflare cf-fonts @font-face in the head: **'Anton'** (headings) +
  **'Nunito'** (body; Nunito is the custom Bootstrap body stack) — recreate
  with Google Fonts `<link>`s. jQuery + Bootstrap JS drive the sticky
  navbar, mobile slide-in menu, hero owl carousel, count-up counters,
  testimonial carousel, and vimeo popup.
- **Screenshot:** `foundation-free-template.jpg` (TEMPLATES.md lines 402 /
  1266 / 2322) — verified in a browser (vision analysis, 1200×946): white
  navbar with the orange "FOUNDATION" wordmark left and nav links right
  (Home, About, Discover, Donate, Blog, Contact); full-width hero photo of
  a smiling boy in a classroom with a headline baked into the image
  ("Education" in orange italic serif + "for Brighter Future" in white
  script) and a carousel arrow; below the hero, three solid-color panels
  (dark grey / orange / deep red) with white uppercase headings.
- **Visual design (from DOM + CSS tokens + live computed styles + rendered
  screenshot):** warm charity aesthetic — white page, near-black text,
  **brand orange `#fd5f00`** (logo when sticky, nav active/hover, links,
  `.btn-primary` fills, counters, intro panel 2, blog link titles, footer
  newsletter button), **gold overlay `rgba(205,165,88,.95)` (#cda558)**
  over background images (About / Donate / Testimonials sections), dark
  greys `#4e4e4e` / `#333333` (footer) / `#25262a`, deep red `#a23131`
  (intro panel 3), light grey `#f8f9fa` (blog/contact section bg), grey
  meta `#b8b8b8` / muted `#999`; Anton condensed uppercase headings with
  letter-spacing (`.1rem`–`.2rem`), Nunito 16px body; buttons 4px radius
  with orange fills; counters are 4rem Anton orange numbers with a 50×3px
  underline; `.bg-image` sections use `background-attachment: fixed`.
  The demo brands itself "Foundation"; recreation uses the NEW name
  **Benevol**.

- **Structure (1:1, section order):**
  1. Navbar `div.site-navbar.js-sticky-header.site-navbar-target` (white
     `#fff` bg, box-shadow `4px 0 20px -5px rgba(0,0,0,.2)`, padding 1rem)
     inside `.sticky-wrapper` — `div.container`: `a.site-logo` left (Anton
     2rem uppercase, letter-spacing .2rem, font-weight 900; color `#fff`
     above the hero, turns **`#fd5f00`** when sticky); `nav.site-navigation`
     right — `ul.site-menu`: six links **Home** / **About** / **Discover**
     / **Donate** / **Blog** / **Contact** (black `#000`, uppercase, 15px
     horizontal margin, 20px 0 padding, 2px transparent bottom border;
     hover + `.active` `#fd5f00`; smooth-scroll anchors
     `#home-section`/`#about-section`/`#discover-section`/`#donate-section`
     /`#blog-section`/`#contact-section`, scrollspy offset 300). Mobile:
     hamburger `a.toggle-button.d-inline-block.d-lg-none` (icomoon icon)
     opens a fixed 300px right slide-in panel (`#fff`, `translateX(110%)`
     → `0`) with the same links + close button.
  2. Hero `div.site-wrap#home-section` — `div.owl-carousel.slide-one-item`:
     TWO full-width image slides (`images/hero_1.jpg`, `images/hero_2.jpg`,
     `img-fluid`; the "Education for Brighter Future" headline is BAKED
     INTO the JPG — recreation overlays an equivalent HTML headline on the
     placeholder image), carousel arrows. No text inside the slides.
  3. Intro panels `div.d-block.d-md-flex.intro-engage` (below hero) —
     THREE equal `div` panels, padding 50px, inner frame `2px solid
rgba(255,255,255,.5)` inset 20px (via `:before`): panel 1 bg
     **`#4e4e4e`** — H2 uppercase white Anton "Rescue An Orphan" +
     paragraph `rgba(255,255,255,.5)`; panel 2 bg **`#fd5f00`** — "Feed
     The Hungry"; panel 3 bg **`#a23131`** — "Free Education".
  4. About / Mission + counters `div.site-section.bg-image.overlay.counter`
     `#about-section` (bg `images/hero_1_no-text.jpg` + gold overlay
     `rgba(205,165,88,.95)` via `.overlay:after`) — `div.container`:
     - `div.row.mb-5`: left `div.col-lg-6.mb-4` — `figure.block-img-video-1`
       (`a.popup-vimeo` → vimeo link): 80×80 white circle play button
       (`.icon` with `icon-play`, centered over the image); right
       `div.col-lg-6` — H2 "Our Mission" (white, Anton, uppercase) + TWO
       paragraphs (white).
     - Below: FOUR `div.block-counter-1` (col-md-6 col-lg-3): big orange
       Anton 4rem number (`data-number` count-up: Number of Orphanage
       **3293**, Number of Donations **3298**, Number of Volunteers
       **1212**, Number of Orphans **392**) + 50×3px `rgba(0,0,0,.3)`
       underline + white caption.
  5. Discover `div.site-section#discover-section` (white) — centered
     `div.block-heading-1` (`div.col-md-7.text-center`): H2 black uppercase
     "Discover" + intro paragraph; then TWO alternating rows
     (`div.row.mb-5`):
     - Row 1: `div.col-lg-6` image (`hero_1_no-text.jpg`) + `div.col-lg-5
.ml-auto.align-self-center`: H3 black uppercase "Build Schools in
       Africa" + paragraph + TWO mini counters
       (`div.block-counter-1.block-counter-1-sm`, text-left, underline
       left-aligned): **Schools 15** / **Students 1039**.
     - Row 2 (reversed via `order-lg-2` / `order-lg-1`): image
       `hero_2_no-text.jpg` right + left text: H3 "Feeding Children in
       Africa" + paragraph + mini counters **Children 15** /
       **Orphanage 38**.
  6. Donate CTA `div.site-section.bg-image.overlay#donate-section` (bg
     `hero_1_no-text.jpg` + gold overlay) — `div.row.align-items-center
.justify-content-center` > `div.col-lg-5.text-center`: H2 white
     "Make A Donation Now! You May Change Lives Forever" + `a.btn
.btn-primary.px-4.py-3.btn-block` **"Donate Now"** (orange fill
     `#fd5f00`, white text, radius 4px).
  7. Causes `div.site-section` (white) — `div.row`: SIX cards
     `div.col-md-6.col-lg-4.mb-4.text-center`: `span.flaticon-*` icon
     (`.d-block.mb-3.display-3.text-secondary`, grey `#6c757d`):
     flaticon-piggy-bank **Make Donation** / flaticon-blood **Medical
     Health** / flaticon-food **Food for the Poor** / flaticon-donation
     **Help & Love** / flaticon-dollar **Give To The Needy** /
     flaticon-unity **Volunteer** — each with H3 `text-primary.h4.mb-2`
     (orange) + grey paragraph.
  8. Team `div.site-section#team-section` (white) — centered H2 black
     uppercase "Our Leadership" + intro; `div.row`: THREE cards
     `div.col-lg-4.col-md-6.mb-4.mb-lg-0` > `div.block-team-member-1
.text-center.rounded` (padding 30px, 1px solid `#e9ecef` border):
     `figure` > `img.img-fluid.rounded-circle` (130px) + H3
     `font-size-20.text-white` name (**Jean Smith** — Mining Expert /
     **Bob Carry** — Project Manager / **Ricky Fisher** — Engineer;
     NOTE: original renders the name WHITE on a WHITE card — invisible
     source bug, see gotchas) + role span `d-block.font-gray-5
.letter-spacing-1.text-uppercase.font-size-12.mb-3` (grey `#b8b8b8`)
     - blurb + `div.block-social-1`: THREE `a.btn.border-w-2.rounded
.primary-primary-outline--hover` 30×30 circular buttons (orange fill
       `#fd5f00`, white icon, 2px transparent border, radius 4px; hover:
       transparent bg + orange border) with icon-facebook / icon-twitter /
       icon-instagram.
  9. Testimonials `div.site-section.block-13.overlay.bg-image`
     `#testimonials-section` (bg `hero_1_no-text.jpg` + gold overlay) —
     centered H2 white "Testimonial" + `div.owl-carousel.nonloop-block-13`:
     FOUR `div.block-testimony-1.text-center` (padding 20px): white
     `blockquote` (padding 30px, italic, 18px, Georgia serif, quote marks)
     - `figure` circular avatar + H3 white name (**Ken Davis**, **Mellisa
       Griffin**, **Robert Steward**, **Ricky Fisher**); carousel arrows.
  10. Blog `div.site-section.bg-light#blog-section` (bg `#f8f9fa`) —
      centered H2 black uppercase "Our Blog" + intro; `div.row`: TWO
      `div.col-lg-6` cards: `a` > `img.img-fluid.rounded` (rounded corners)
      - H2 link "How to Invest In Investing Company" (orange on hover /
        link color `#fd5f00`) + meta `p.text-muted.mb-3.text-uppercase.small`
        ("January 18, 2019 By **James Cooper**") + paragraph + orange link
        "Get Started" (card 1) / "Read More" (card 2).
  11. Contact `div.site-section.bg-light#contact-section` — centered H2
      black uppercase "Contact Us"; `div.row.justify-content-center` >
      `div.col-lg-6.mb-5` `form`: `div.form-group.row` with TWO
      `div.col-md-6` text inputs (placeholders "First name" / "Last name"
      — source repeats "First name" on both, a typo to fix) + email input
      (placeholder "Email address") + `textarea.form-control` (placeholder
      "Write your message.", rows 10) + `input[type=submit].btn.btn-block
.btn-primary.text-white.py-3.px-5` **"Send Message"** (orange fill).
  12. Footer `footer.site-footer` (bg **`#333333`**, padding 4em 0 8em) —
      `div.container` > `div.row`: left `div.col-md-6` (inner row:
      `div.col-md-8` — H2 `footer-heading.mb-4` **About Us** (16px, white,
      uppercase, letter-spacing .2rem) + blurb; `div.col-md-4.ml-auto` —
      H2 **Features** + `ul.list-unstyled` links **About Us** /
      **Testimonials** / **Terms of Service** / **Privacy** / **Contact
      Us**, links `#999999` hover white); right `div.col-md-4.ml-auto` —
      H2 **Some Paragraph** + blurb, H2 **Subscribe to Newsletter** +
      `div.input-group.mb-3`: input (placeholder "Enter Email",
      `bg-transparent`, `border-secondary`, white text) + `button.btn
.btn-primary.text-white` **Subscribe**; H2 **Follow Us** + FOUR
      social icon links (icon-facebook, icon-twitter, icon-instagram,
      icon-linkedin). Bottom row `div.row.pt-5.mt-5` — copyright line:
      "Copyright © <year> All rights reserved | This template is made
      with ♥ by Colorlib" (credit kept per CC BY 3.0, recreated as our
      own text).

- **Design tokens (from css/style.css + computed styles on the live
  preview):**
  - Brand orange **`#fd5f00`** — `.btn-primary` bg (Donate Now / Send
    Message / Subscribe), `.site-menu .active` + hover, `.site-logo` when
    sticky, `.text-primary` (cause card H3s, blog links), `.block-counter-1
.number`, `.intro-engage > div:nth-of-type(2)` bg,
    `primary-primary-outline--hover` bg (social buttons), `.footer-heading`
    not colored (white) but newsletter button is btn-primary.
  - Gold overlay **`rgba(205,165,88,.95)`** (`#cda558`) — `.overlay:after`
    over `.bg-image` sections (About, Donate, Testimonials).
  - Panel greys — **`#4e4e4e`** (intro panel 1), **`#333333`** (footer
    bg), **`#25262a`** (dropdown hover bg), `#343a40` (dropdown links).
  - Deep red **`#a23131`** — intro panel 3.
  - Light greys — `#e9ecef` (team card border), `#f8f9fa` / `#f4f5f9` /
    `#edf0f5` (light section bgs), `#dee2e6`, `#b8b8b8` (role text),
    `#999999` (footer links), `#6c757d` (`text-secondary` flaticon icons).
  - Fonts — **'Anton', sans-serif** (all headings h1–h4: condensed bold
    uppercase; logo 2rem, letter-spacing .2rem; section titles 4rem
    desktop / 2rem mobile via `.section-title`; counters 4rem) and
    **'Nunito', sans-serif** (body, 16px via Bootstrap). Google Fonts in
    the recreation.
  - Buttons — `.btn-primary`: bg `#fd5f00`, text white, radius **4px**,
    padding `16px 24px` (py-3 px-4), font-size 16px; block variant for
    Donate Now / Send Message. `.primary-primary-outline--hover`: bg
    `#fd5f00`, white icon, 2px transparent border, radius 4px; hover
    `border-color: #fd5f00; background: transparent` (icon stays white in
    the source — invisible hover, see gotchas).
  - Counters — `.block-counter-1 .number`: 4rem Anton, `#fd5f00`, pb 20px
    mb 20px, 50×3px `rgba(0,0,0,.3)` underline centered (`.block-counter-1
-sm`: text-left, underline left). Caption below, 1 line-height.
  - Section headings — `.section-title`: Anton uppercase, 4rem (2rem
    mobile); `block-heading-1` centered; `footer-heading`: 16px white
    uppercase letter-spacing .2rem.
  - Spacing rhythm — `.site-section` padding `5em 0` (2.5em mobile);
    `.intro-engage > div` padding 50px; cards `mb-4`; form `form-group
row` mb-4; footer `4em 0` / `8em 0`; team card padding 30px.
  - Icons (icon fonts in source → swap to lucide-react / inline SVG):
    play (vimeo popup), heart; brand socials facebook/twitter/instagram/
    linkedin as inline SVG (lucide-react removed brand glyphs); six cause
    icons (piggy-bank, blood/droplet, food/utensils, donation/heart-hand,
    dollar, unity/handshake) via lucide equivalents.
  - Mobile: navbar hamburger → 300px right slide-in white panel; hero
    stacks; intro panels stack; counters stack 1-up; discover rows keep
    image-then-text order; team 1-up; blog 1-up.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/benevol-<n>/<w>/<h>`; hero 1600×900-class, discover
  600×450-class, avatars 130×130, video thumb 600×400); the hero headline
  ("Education … for Brighter Future") is baked into the source JPG —
  recreate as an HTML overlay (orange italic serif + white script-ish
  heading) over the first placeholder slide so the visual structure is
  preserved; icons → lucide-react (play, heart) + inline SVG brand
  socials; Anton + Nunito via Google Fonts `<link>` in `index.html`;
  logo recreated as an Anton text wordmark "Benevol" (orange when sticky,
  white at top); vimeo popup link → placeholder (may open a demo modal or
  just an anchor); count-up animations → animate with a small effect or
  render the target numbers statically (tests must not depend on
  animation timing).

Benevol lives in `apps/benevol` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Sticky navbar with wordmark and anchor links

The system SHALL render a white sticky navbar with an Anton uppercase
wordmark on the left, six smooth-scroll anchor links on the right, an
active-link accent, and a mobile slide-in menu.

#### Scenario: Desktop navbar

- **GIVEN** the Benevol page is rendered
- **WHEN** the page loads
- **THEN** a white navbar with a subtle box shadow SHALL show the
  wordmark "Benevol" on the left
- **AND** six uppercase links SHALL be shown on the right: Home, About,
  Discover, Donate, Blog, and Contact, each anchoring to its section
- **AND** the active section's link SHALL be highlighted in the brand
  orange `#fd5f00`

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a white slide-in panel SHALL open from the right with the same
  six links
- **AND** pressing the toggle or the close button again SHALL close it

### Requirement: Hero image slider

The system SHALL render a full-width two-image hero slider with previous
and next controls.

#### Scenario: Hero slides

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the first of two full-width slide images SHALL be visible with
  carousel navigation arrows
- **AND** advancing the carousel SHALL show the second slide image
- **AND** a headline text overlay ("Education for Brighter Future") SHALL
  be rendered over the slide to match the reference's baked-in text
- **AND** on a narrow viewport the hero SHALL remain full-width and
  scale its height

### Requirement: Intro engagement panels

The system SHALL render three equal solid-color panels directly below the
hero, each with a framed inner box, an uppercase white heading, and a
muted paragraph.

#### Scenario: Panel content

- **GIVEN** the intro section is displayed
- **WHEN** the page loads
- **THEN** three panels SHALL be shown side by side with backgrounds
  dark grey `#4e4e4e`, brand orange `#fd5f00`, and deep red `#a23131`
- **AND** each panel SHALL frame its content with a 2px semi-transparent
  white inset border
- **AND** panel headings SHALL read "Rescue An Orphan", "Feed The
  Hungry", and "Free Education" in white uppercase Anton
- **AND** on a narrow viewport the panels SHALL stack vertically

### Requirement: About / mission with video popup and counters

The system SHALL render a background-image section with a gold overlay
containing a video-popup figure, a "Our Mission" heading with two
paragraphs, and four animated stat counters.

#### Scenario: Mission block

- **GIVEN** the About section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL show a background image under a
  semi-transparent gold overlay
- **AND** a circular play button SHALL be centered over the figure image
  on the left
- **AND** an uppercase white "Our Mission" heading with two paragraphs
  SHALL be shown on the right

#### Scenario: Stat counters

- **GIVEN** the About section is displayed
- **WHEN** the page loads
- **THEN** four counters SHALL be shown in a row with orange Anton
  numbers and a small underline bar
- **AND** their captions SHALL read "Number of Orphanage" (3293),
  "Number of Donations" (3298), "Number of Volunteers" (1212), and
  "Number of Orphans" (392)

### Requirement: Discover section with alternating rows

The system SHALL render a "Discover" heading block followed by two
alternating image/text rows, each with a heading, a paragraph, and two
mini counters.

#### Scenario: Discover rows

- **GIVEN** the Discover section is displayed
- **WHEN** the page loads
- **THEN** a centered uppercase black "Discover" heading with an intro
  paragraph SHALL appear
- **AND** the first row SHALL show an image on the left and "Build
  Schools in Africa" on the right with mini counters Schools (15) and
  Students (1039)
- **AND** the second row SHALL show the image on the right and "Feeding
  Children in Africa" on the left with mini counters Children (15) and
  Orphanage (38)
- **AND** mini counters SHALL use left-aligned orange Anton numbers with
  a left-aligned underline bar

### Requirement: Donate call-to-action

The system SHALL render a gold-overlay background section with a white
headline and a full-width orange "Donate Now" button.

#### Scenario: Donate CTA

- **GIVEN** the Donate section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL show the white headline "Make A Donation
  Now! You May Change Lives Forever" centered
- **AND** a block-level orange button labeled "Donate Now" with white
  text and 4px radius SHALL be shown below it

### Requirement: Causes grid

The system SHALL render a three-column grid of six cause cards, each with
a grey icon, an orange uppercase heading, and a paragraph.

#### Scenario: Cause cards

- **GIVEN** the causes grid is displayed
- **WHEN** the page loads
- **THEN** six cards SHALL be shown in a 3-column grid with icon, orange
  heading, and paragraph
- **AND** the cards SHALL read Make Donation, Medical Health, Food for
  the Poor, Help & Love, Give To The Needy, and Volunteer
- **AND** on a narrow viewport the grid SHALL collapse to one column

### Requirement: Leadership team

The system SHALL render an "Our Leadership" section with three member
cards, each with a circular avatar, name, role, blurb, and three orange
social buttons.

#### Scenario: Team cards

- **GIVEN** the team section is displayed
- **WHEN** the page loads
- **THEN** three cards with a 1px light border SHALL show a circular
  avatar, the member name (Jean Smith / Bob Carry / Ricky Fisher), an
  uppercase grey role line (Mining Expert / Project Manager / Engineer),
  a blurb, and three circular orange social icon buttons
- **AND** member names SHALL render in a legible dark color (the source
  's white-on-white name text is a bug — see gotchas)

### Requirement: Testimonials carousel

The system SHALL render a gold-overlay background section with a
"Testimonial" heading and a carousel of four quotes with avatars and
names.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** a white italic quote block, a circular avatar, and the
  author's name SHALL be shown for Ken Davis, Mellisa Griffin, Robert
  Steward, and Ricky Fisher
- **AND** carousel navigation SHALL cycle between the four testimonials

### Requirement: Blog section

The system SHALL render a light-grey blog section with a heading and two
large article cards with image, title, date/byline, excerpt, and an
orange link.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the page loads
- **THEN** an uppercase "Our Blog" heading with an intro paragraph SHALL
  appear
- **AND** two cards SHALL show a rounded image, an orange article-title
  link, an uppercase small meta line ("January 18, 2019 By James
  Cooper"), an excerpt, and an orange link ("Get Started" / "Read More")

### Requirement: Contact form

The system SHALL render a contact section with a two-column name row, an
email input, a message textarea, and an orange submit button.

#### Scenario: Contact form fields

- **GIVEN** the contact section is displayed
- **WHEN** the page loads
- **THEN** an uppercase "Contact Us" heading SHALL appear above a
  centered form
- **AND** the form SHALL show First name and Last name inputs side by
  side, an Email address input, a "Write your message." textarea, and a
  block-level orange "Send Message" submit button
- **AND** submitting the form SHALL NOT navigate away (prevented default
  / client-side handling)

### Requirement: Footer with newsletter and social links

The system SHALL render a dark grey footer with an About column, a
Features link column, a paragraph/newsletter column with a subscribe
input and button, a Follow Us social row, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "About Us" blurb and the "Features" links
  (About Us, Testimonials, Terms of Service, Privacy, Contact Us)
- **AND** the right column SHALL show "Some Paragraph", a "Subscribe to
  Newsletter" email input with an orange "Subscribe" button, and "Follow
  Us" with four social icon links (Facebook, Twitter, Instagram,
  LinkedIn)
- **AND** the bottom row SHALL show the copyright line with the current
  year and the ColorLib design credit

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters an email and presses Subscribe
- **THEN** the form SHALL indicate the subscription was received
- **AND** submitting an invalid email SHALL show a validation error and
  no success message

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Benevol app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero slider, intro panels,
  About/Mission, Discover, Donate CTA, causes grid, team, testimonials,
  blog, contact, and footer in order
- **AND** the document title SHALL be "Benevol — Charity Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/benevol`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/benevol`)
- [ ] Section order matches the reference 1:1 (navbar → hero slider → intro panels → About/Mission+counters → Discover → Donate CTA → causes grid → team → testimonials → blog → contact → footer)
- [ ] Design tokens in `@theme` (brand orange #fd5f00, gold overlay #cda558 @ 95%, panels #4e4e4e / #a23131, footer #333333, Anton + Nunito fonts)
- [ ] Navbar: white + shadow, Anton uppercase wordmark, six anchor links, active/hover #fd5f00, mobile right slide-in panel with hamburger
- [ ] Hero: two-slide full-width carousel with arrows + HTML headline overlay replacing the baked-in JPG text
- [ ] Intro panels: 3 equal panels (#4e4e4e / #fd5f00 / #a23131) with 2px white inset frame, white uppercase Anton headings, muted paragraphs; stack on mobile
- [ ] About: fixed-bg image + gold overlay, circular play button on figure, Our Mission + 2 paragraphs, 4 orange Anton counters with underline (3293 / 3298 / 1212 / 392)
- [ ] Discover: centered heading block + 2 alternating rows with left-aligned mini counters (15/1039 and 15/38)
- [ ] Donate CTA: gold overlay, white headline, block orange "Donate Now" button (4px radius)
- [ ] Causes: 6 cards 3-col grid (grey icon + orange H3 + paragraph), 1-col on mobile
- [ ] Team: 3 cards, 130px circular avatars, LEGIBLE (dark) names, uppercase grey roles, 3 orange circular social buttons each
- [ ] Testimonials: gold overlay, 4 quotes (white Georgia italic blockquote, avatar, white name) in a carousel
- [ ] Blog: bg-light, 2 rounded-image cards, orange title links, uppercase small date/byline, orange Get Started/Read More links
- [ ] Contact: bg-light, centered form (First/Last name row, email, textarea, block orange Send Message)
- [ ] Footer: #333333 bg, About/Features/Some Paragraph/Subscribe (input + orange Subscribe)/Follow Us (4 social icons)/copyright with credit
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands; Anton + Nunito via Google Fonts link
- [ ] README Templates status + TEMPLATES.md Foundation lines (402, 1266 AND 2322) marked `[x]` after merge

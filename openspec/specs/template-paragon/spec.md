# Template: Paragon (Interior Design Template)

## Purpose

Paragon is a single-page interior-design / architecture studio homepage
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Ideal" design (see TEMPLATES.md, line 419 —
Bootstrap category; the same template is also listed at lines 1048 (Business)
and 1970 (Interior Design) — mark all three `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is an interior-design studio landing page: a transparent navbar
over the hero with a lowercase green "ideal" wordmark centered and the menu
split left (Home / Project / Services) and right (About / Blog / Contact); a
full-width hero photo slider (3 slides, 600px) with a centered white headline
and a square green "Get A Quote" button; a white intro section with a bold
uppercase mission headline on the left and a green-bordered "years of
experience" box (big number "75" with a translucent green circle) on the
right; a 2×2 "Our Featured Services" card grid (photo + category label +
uppercase title + arrow link); a "Latest Projects" carousel with an
overlapping white caption panel; a centered testimonial slider (green quote
icon, large text, author name — CEO and Co-Founder); a 4-column "Blog and
Updates" post grid (photo, date, uppercase title, "Continue Reading" — green
overlay on hover); and a light footer with a dot-grid pattern background,
About Us / Features / Subscribe-to-Newsletter / Follow Us widgets and a
copyright bar. Paragon recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Ideal" — free interior design / architecture
  website template
  (source: https://colorlib.com/wp/template/ideal/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/ideal/`
  (HTTP 200, 20.0KB; `<title>` "Ideal &mdash; Website Template by Colorlib")
  - stylesheet `css/style.css` (23.7KB, SCSS-compiled) +
    `css/bootstrap.min.css` (for `.btn-primary`/`.text-primary` colors).
    Rendered DOM (accessibility tree of the live page) is the reference below;
    the TEMPLATES.md screenshot (`ideal-free-template.jpg`, 1200×946, includes
    browser chrome at the very top — the apparent "search bar" is the browser
    address bar, not part of the template) confirms the visual design:
    transparent navbar over a bright interior photo (dining table, black
    chairs, shelf with plants), lowercase green "ideal" logo centered, white
    nav links; hero slide 3 "The Best Interior Design" in white over the photo
    with a green "Get A Quote" button and three carousel dots; below, a white
    two-column section (left: uppercase mission headline + green "More About
    Us" arrow link; right: green-bordered box "The Best In Interior Design" /
    "YEARS OF EXPERIENCE" / huge "75" beside a light-green circle). Overall
    aesthetic: minimalist, sophisticated, architectural — DM Sans type, sage
    green #207561 accents on white with high-contrast black headings, generous
    whitespace.
- **Section order (1:1, from the live DOM):**
  1. `header.site-navbar` inside `div.sticky-wrapper` (position absolute,
     top 0, width 100%, z-index 1999, padding 1rem): 3-column Bootstrap row —
     left `nav.site-navigation` (text-right): ul Home (li.active), Project,
     Services; center `div.site-logo` (text-center): `<a>Ideal</a>`
     (font-size 1.7rem, `text-transform: lowercase`, color #207561); right
     nav (text-left): About, Blog, Contact; mobile: `a.site-menu-toggle`
     hamburger (icon-menu, white) + slide-in `.site-mobile-menu` panel
     (width 300px, fixed right, white bg, shadow -10px 0 20px -10px
     rgba(0,0,0,0.1)).
  2. `div.owl-carousel.owl-1` — hero slider: three `div.ftco-blocks-cover-1
     > div.ftco-cover-1`slides (min-height 600px, background-image photo
cover): centered`col-lg-6 text-center`— h1 "Welcome to
Ideal." (slide 1, with`<span class="text-primary">Ideal.</span>`),
"Enhance Human Experience" (slide 2), "The Best Interior Design"
(slide 3); lorem `<p>`subtext;`a.btn.btn-primary.px-4.py-2.rounded-0`"Get A Quote" (square corners). Dots:`.owl-1 .owl-dots`at bottom 50px,
inactive`#fff`, active `#207561`.
  3. `div.site-section` (padding 2.5em 0) — intro/about: row with
     `col-md-5`: `h2.heading-39291` "We Create Building, and Interior Design
     That Enhance The Human Experience" + lorem `p.mb-5` +
     `a.more-39291` "More About Us"; `col-md-4.ml-auto`:
     `div.year-experience-99301` (border 4px solid #207561, padding 40px,
     white bg, offset green-tinted block rgba(32,117,97,0.1) at top -31px /
     left -31px): `h2.heading-39291` "The Best In Interior Design" +
     `span.text` "YEARS OF EXPERIENCE" (uppercase 14px bold #888, lh 1) +
     `div.number` "75" (5rem bold #000 with 70px circle
     rgba(32,117,97,0.5) behind).
  4. `div.site-section` — featured services: row mb-5 with `col-md-7`:
     `h2.heading-39291` "Our Featured Services" (line-break split "Our
     Featured" / "Services") + lorem + `a.more-39291` "Learn More"; then a
     2×2 grid of `div.media-92812` cards (col-md-6 pairs, `data-aos=fade-up`
     delays 0/100): image + `.text` — small caption label (Architecture /
     Gym & Arena / Interior Design / Product Design), `h3 > a` uppercase
     title ("Sed Ut Perspiciatis Unde This", "Curabitur Bibendum",
     "Obcaecati Architecto", "Quisque Non Augue"), `a.more-39291` "Learn
     More".
  5. `div.site-section` — latest projects: row mb-5 align-items-center:
     `col-md-7` `h2.heading-39291` "Latest Projects" (br split) + `col-md-5
text-right` `a.more-39291` "View All Projects"; then
     `div.media-29191` (margin 0 10px): `div.owl-2.owl-carousel` (3 images
     hero_1..3.jpg) + `div.text` (white bg, padding 50px, margin-top -100px,
     z-index 9): caption "Interior Design" (#b3b3b3), `h3` "Obcaecati
     Architecto" (uppercase), lorem, `a.more-39291` "View This Project".
  6. `div.site-section.section-4` (white bg — no section-4 rule in the
     stylesheet) — testimonials: row justify-content-center text-center,
     `col-md-7`: `div.slide-one-item.owl-carousel` — 3 slides each
     `blockquote` (green quote icon via `.testimonial-1 .quote-icon-wrap`
     style family: icon 2rem color #207561; p font-size 1.5rem) with lorem
     quote + author "James Smith — CEO and Co-Founder" / "Mike Dorney — CEO
     and Co-Founder"; dots below (`.slide-one-item .owl-dots` bottom -20px,
     inactive #ccc, active #207561).
  7. `div.site-section` — blog: row mb-5 `col-md-7`: `h2.heading-39291`
     "Blog and Updates" + lorem; row align-items-stretch with four
     `div.post-entry-1.h-100` cards (col-lg-3 col-md-6 mb-5): image (hover:
     green #207561 overlay slides up via `:before` opacity 0→1), then
     `.post-entry-1-contents` (white bg, padding 20px): date "July 17,
     2019", `h2` "Iusto Quos Veniam Magni Totam" (uppercase), `a.more-39291`
     "Continue Reading".
  8. `footer.site-footer` (padding 8em 0 desktop / 4em, background
     `url("../images/dot-grid.png")` light dot pattern): container row —
     `col-md-6` > inner row: `col-md-7` "About Us" (`h2.footer-heading
mb-4`, 16px #000) + "Far far away, behind the word mountains…" lorem;
     `col-md-4.ml-auto` "Features" (`ul.list-unstyled` links: About Us,
     Testimonials, Terms of Service, Privacy, Contact Us); `col-md-4.ml-auto`:
     "Subscribe to Newsletter" — `form.footer-suscribe-form` with
     `input.form-control` (height 55px, placeholder "Enter Email") +
     `button.btn.btn-primary.text-white` "Subscribe" (id button-addon2);
     "Follow Us" — 4 social icon links; bottom row `border-top
pt-5` (border-top rgba(255,255,255,0.1)) with copyright line
     (original: Colorlib credit → replace with repo-standard credit).
- **Design tokens extracted from `css/style.css` (+ bootstrap.min.css):**
  - Brand green: **#207561** (23 uses) — `.text-primary`, `.btn-primary`
    bg, `.site-logo a` (lowercase), active/hover nav links, `.more-39291`
    arrow, carousel active dots, `.year-experience-99301` border + circle
    rgba(32,117,97,0.5) + offset block rgba(32,117,97,0.1), `.testimonial-1`
    quote icon, `.post-entry-1:before` hover overlay. Hover #185748, active
    #154d40 (btn); `.text-primary:hover` #10392f; focus ring
    rgba(65,138,121,0.5).
  - Ink: **#000** (22 uses) — headings (`.heading-39291` #000, blog titles,
    project titles), body text, `.year-experience-99301 .number` 5rem bold.
  - Light grays: #f8f9fa (4), #f7f7f7, #e6e6e6, #e3e3e3; inactive dots #ccc;
    borders #ced4da/#dee2e6; captions #b3b3b3; small labels #888; #666;
    dark teal-gray #364d59 (2 uses, secondary text).
  - White #fff (20 uses) — hero text, card panels, button text.
  - Font: **'DM Sans', sans-serif** (whole site, incl. `.form-control`).
  - Buttons: `.btn-primary` — bg #207561, color #fff, hover #185748,
    active #154d40; hero variant `px-4 py-2 rounded-0` = **square corners
    (radius 0)**; footer subscribe `btn btn-primary text-white` (height 55px
    via input-group).
  - Links: `.more-39291` — uppercase, font-size 12px, bold, padding-right
    20px, arrow glyph (icomoon `\e317` rotated 180deg = left-pointing
    chevron) → replicate with lucide `ArrowLeft`/`ArrowRight`; hover color
    #207561.
  - Headings: `.heading-39291` — text-transform uppercase, 20px, bold, #000,
    margin-bottom 30px (2-line sections split with `<br>`); hero h1 3rem
    white; `.site-logo` 1.7rem; `.footer-heading` 16px #000; testimonial p
    1.5rem; `.year-experience-99301 .number` 5rem.
  - Section backgrounds: all body sections white; hero = full-bleed photos;
    footer = light dot-grid pattern image (replicate with a CSS
    radial-gradient dot pattern); `.site-section` padding 2.5em 0.
  - Navbar states: default (desktop) transparent over hero — logo #207561,
    inactive links white-ish rgba(255,255,255,0.7), active #207561; scrolled
    (`.sticky-wrapper.is-sticky .site-navbar`): background #fff, box-shadow
    `4px 0 20px -5px rgba(0,0,0,0.2)`, links #000, active #207561; mobile:
    hamburger (white icon) → white slide-in panel (300px, right).
- **Recreation decisions:** name "Paragon" (wordmark "Paragon" lowercase,
  package @free-react-templates/paragon, app apps/paragon). Transparent
  navbar over the hero → sticky white navbar with shadow + black links on
  scroll, logo "Paragon" green, split menus (Home active / Project /
  Services | About / Blog / Contact), mobile hamburger slide-in menu;
  hero = full-width photo slider (3 slides, auto-advance + dots + prev/next,
  600px min-height) with centered white headline + subtext + square green
  "Get A Quote" button and white dots (active green); intro = left bold
  uppercase mission heading + "More About Us" arrow link, right green-bordered
  experience box ("The Best In Interior Design", "YEARS OF EXPERIENCE", big
  "75" with translucent green circle, offset green-tinted corner block);
  featured services = 2×2 cards (picsum photo, category label, uppercase
  title, "Learn More" arrow); latest projects = image carousel + overlapping
  white caption panel (mt -100px) with "View This Project" link; testimonials
  = centered slider (green quote icon, 1.5rem text, author "… — CEO and
  Co-Founder", green dots); blog = 4 post cards (photo with green hover
  overlay, date, uppercase title, "Continue Reading"); footer = light
  dot-grid pattern, About Us / Features links / Subscribe form (email input +
  green Subscribe button) / Follow Us social icons + copyright bar with
  repo-standard credit ("© 2026 Paragon. All rights reserved." + "recreation
  of ColorLib Ideal"); all images picsum-seeded
  (`picsum.photos/seed/paragon-N/w/h`); Google Fonts DM Sans via `<link>`;
  icons via lucide-react.

Paragon lives in `apps/paragon` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a transparent navbar with a centered logo, split
navigation, and a mobile menu that becomes white and sticky on scroll.

#### Scenario: Navbar content

- **GIVEN** the Paragon page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Paragon" as a lowercase green
  (#207561) wordmark centered in the header
- **AND** it SHALL show nav links Home (active), Project, and Services on
  the left and About, Blog, and Contact on the right
- **AND** the header SHALL sit transparent over the hero photo with white
  nav links and a green active link

#### Scenario: Sticky header on scroll

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down past the hero
- **THEN** the header SHALL become white with a subtle shadow, black nav
  links, and a green active link

#### Scenario: Mobile menu

- **GIVEN** the header is displayed at a small viewport
- **WHEN** the user activates the hamburger control
- **THEN** a white slide-in menu panel SHALL open from the right with the
  nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-width hero photo slider with a centered
headline, subtext, CTA button, and dot indicators.

#### Scenario: Hero slides

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width background photo at least 600px tall
- **AND** it SHALL show a centered white headline (e.g. "Welcome to
  Paragon.", "Enhance Human Experience", "The Best Interior Design") with a
  green accent span on the brand name
- **AND** it SHALL show a paragraph of subtext and a square green "Get A
  Quote" button below the headline
- **AND** the slides SHALL advance automatically and via dot indicators
  (white dots, active dot green)

### Requirement: Intro / experience section

The system SHALL render a two-column intro with a mission headline and a
green-bordered experience box.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show the uppercase bold heading "We Create Building, and
  Interior Design That Enhance The Human Experience" with a paragraph and a
  "More About Us" arrow link on the left
- **AND** it SHALL show an experience box on the right with a 4px green
  (#207561) border, the heading "The Best In Interior Design", a "YEARS OF
  EXPERIENCE" label, and a large "75" number with a translucent green circle
  behind it

### Requirement: Featured services

The system SHALL render a 2×2 grid of service cards with an image, a
category label, a title, and an arrow link.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the featured services section is displayed
- **THEN** it SHALL show the heading "Our Featured Services" with subtext
  and a "Learn More" link
- **AND** it SHALL show four cards, each with a photo, a category label
  (Architecture, Gym & Arena, Interior Design, Product Design), an uppercase
  title, and a "Learn More" arrow link

### Requirement: Latest projects

The system SHALL render a project carousel with an overlapping caption
panel.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the latest projects section is displayed
- **THEN** it SHALL show the heading "Latest Projects" with a "View All
  Projects" link on the right
- **AND** it SHALL show a carousel of project photos with a white caption
  panel overlapping the bottom of the carousel
- **AND** the caption panel SHALL show a category label, an uppercase title,
  a paragraph, and a "View This Project" arrow link

### Requirement: Testimonials

The system SHALL render a centered testimonial slider with quotes and author
names.

#### Scenario: Testimonial slides

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a green quote icon and a large quote paragraph
  (1.5rem) on each slide
- **AND** each slide SHALL show an author name (e.g. "James Smith — CEO and
  Co-Founder")
- **AND** the slides SHALL advance via dot indicators (inactive #ccc, active
  green #207561)

### Requirement: Blog section

The system SHALL render a four-column blog post grid.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Blog and Updates" with subtext
- **AND** it SHALL show four post cards, each with a photo (with a green
  overlay on hover), a date (e.g. "July 17, 2019"), an uppercase title, and
  a "Continue Reading" arrow link

### Requirement: Footer

The system SHALL render a light footer with a dot-grid pattern background,
widget columns, a newsletter form, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About Us column with a paragraph
- **AND** it SHALL show a Features column with links (About Us,
  Testimonials, Terms of Service, Privacy, Contact Us)
- **AND** it SHALL show a "Subscribe to Newsletter" form with an email input
  and a green "Subscribe" button
- **AND** it SHALL show a "Follow Us" row with four social icon links
- **AND** it SHALL show a copyright bar with the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Paragon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero slider, intro, featured
  services, latest projects, testimonials, blog, and footer inside the main
  landmark in the original's order
- **AND** the document title SHALL be "Paragon — Interior Design"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- paragon` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero slider →
      intro/experience → featured services → latest projects → testimonials →
      blog → footer).
- [ ] Design tokens applied: brand green #207561 (logo, buttons, active
      links, arrows, dots, borders, hover overlays), ink #000 headings, DM
      Sans font, square green hero button (rounded-0), uppercase 12px bold
      arrow links (.more-39291 style), uppercase 20px bold section headings,
      transparent→white sticky navbar, light dot-grid footer.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Ideal), preview URL, tokens,
      and renames.

# Template: Forge (Creative Agency Landing)

## Purpose

Forge is a single-page creative-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Craft" website template (see TEMPLATES.md, Bootstrap
category, line 367), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a light, corporate creative-agency landing: a transparent
navbar (over the hero) with an uppercase wordmark, centered nav links and a
right-side search field; a full-screen hero on a cover photo with a 0.4
black overlay, the uppercase headline "WE ARE CREATIVE AGENCY" (Raleway 700,
5rem) with a teal `#20c997` highlighter span, a 60px white circular play
button opening a YouTube lightbox, and "Watch Video" text; a white "Who We
Are" section with the eyebrow "WHO WE ARE", a 70×6px black divider bar, an
uppercase two-part heading with a bold span, an outline-black "Learn More"
button, and a right-hand photo with a 10px `#eee` offset shadow over a
dotted background; a portfolio grid on a blue-gray `#90a8af` background
with 4 hover-reveal work cards and an outline-white "More Portfolio"
button; a "Featured Services" split section with 4 icon cards (Branding,
Web Design, App Design, Start Up); a testimonial carousel on `#f8f9fa`
with white quote cards (avatar, name, role, blockquote) and a 4-item
rotation; a full-width teal `#20c997` CTA band ("Do You Have An Awesome
Project In Mind?" + outline-white "Get In Touch!"); and a dark `#333`
footer with About / Contact Info / Quick Links columns, social icons, and
a copyright bar with a heart. Typography is Raleway (300/400/700) with
uppercase treatment on headings and section titles. Forge recreates that
structure section-for-section with matching layout, colors, typography,
and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Craft" — Creative Agency Bootstrap HTML Template
  (source: https://colorlib.com/wp/template/craft/). Listed in TEMPLATES.md
  under the Bootstrap category (line 367; note: the same "Craft" row is
  duplicated at lines 958 and 1455 — dup-row trap, do not re-claim).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/craft/`
  (HTTP 200). DOM fetched and analyzed (`/tmp/craft-ref/craft.html`, 19.8
  KB); stylesheet `https://preview.colorlib.com/theme/craft/css/style.css`
  (55 KB, Bootstrap 4 base) extracted for tokens; screenshot
  (`craft-free-template.jpg`, 1200×946, TEMPLATES.md) reviewed visually in
  the browser. All references verified live.
- **Section order (1:1 from the preview DOM):**
  1. Header `header` → `nav.navbar.navbar-expand-lg.bg-dark` (CSS forces
     `background: none !important` → transparent over the hero; black
     background below 1200px): `a.navbar-brand` wordmark (uppercase,
     `letter-spacing: .2em`, white, weight 400) + `ul.navbar-nav` links
     (Home, About, Services, Portfolio, Contact; `padding: 1.7rem 1rem`,
     `font-size: 1.05rem`, weight 300, `color: rgba(255,255,255,.5)`,
     `.active` → white) + dropdown menu (Home, About, Services, Portfolio,
     Contact; white card, 4px radius, `#20c997` hover with black text) +
     right `div.navbar-nav.ml-auto` search form (`span.ion.ion-search` +
     `input.form-control` placeholder "Search...").
  2. Hero `div.slider-item.overlay` (`background-image: images/hero_2.jpg`,
     `background-size: cover`, `background-position: top center`, height
     100vh / min-height 700px; `:before` overlay `#000` opacity .4):
     `div.row.slider-text.align-items-center.justify-content-center` →
     `div.col-lg-9.text-center.element-animate`: `h1.mb-4` "We Are
     Creative Agency" (5rem, lh 1.2, weight 700, uppercase, white, margin
     left .5em) — highlight span with `background-color: #20c997` +
     `box-shadow: .5em 0 0 #20c997, -.5em 0 0 #20c997` (highlighter
     effect); `div.btn-play-wrap.mx-auto` (100px) → `a.btn-play`
     (60px white circle, `border-radius: 50%`, centered, `ion-ios-play`
     icon, `data-fancybox` YouTube link `_VnYSoMI-9Q`); `span` "Watch
     Video" below. Owl-carousel dots at bottom (100px, 5px dots).
  3. About `div.section` (padding `7em 0`, white bg): `div.row` →
     `div.col-lg-5.mr-auto.mb-5`: `span.d-block.text-uppercase.text-secondary`
     "Who We Are" + `span.divider.my-4` (70×6px black bar,
     `transform: translateX(-50%)`) + `h2.mb-4.section-title` "We Are
     **Design Agency** That Bring Your Ideas Alive" (3rem lh 1, uppercase,
     weight 300; `strong` weight 700) + 2 lorem paragraphs +
     `a.btn.btn-outline-black` "Learn More" (2px `#000` border, uppercase,
     14px bold, radius 0, padding 10px 20px); `div.col-lg-6` →
     `figure.img-dotted-bg` > `img` about_1.jpg (`box-shadow: 10px 10px 0
0 #eee`; dotted.jpg repeat behind).
  4. Portfolio `div.section.portfolio-section` (bg `#90a8af`):
     `div.row.mb-5` → `div.col-12.text-center` `h2.mb-4.section-title`
     "Latest Work"; 2 rows × 2 `div.col-lg-6` → `a.work-thumb` (img
     work_1..4.jpg; hover `:before` overlay `rgba(0,0,0,.5)` + centered
     `.work-text` opacity 0→1: `h2` "Work Name Here" + `span` "Category
     Here"); `div.row.mt-5` → `div.col-12.text-center` `a.btn.btn-outline-white.px-4.py-3`
     "More Portfolio".
  5. Services `div.section` (white bg): `div.col-lg-5.mr-auto.mb-3`:
     `span.text-uppercase.text-secondary` "Featured Services" + divider +
     `h2.section-title` "The **Services** That We Are Providing" + 2
     paragraphs; `div.col-lg-6` → `div.row.mt-5` × 4 `div.col-lg-6.col-md-6.mb-4`
     → `div.service`: `span.icon.icon-shield|icon-screen-desktop|icon-screen-smartphone|icon-rocket
mb-4.d-block` (simple-line-icons, 2rem) + `h3` (1.2rem, weight 400)
     Branding / Web Design / App Design / Start Up + one-line lorem.
  6. Testimonials `div.section.bg-light.block-11`: `div.row.justify-content-center.mb-5`
     → `div.col-md-8.text-center` `h2.mb-4.section-title` "Testimonial";
     `div.nonloop-block-11.owl-carousel` → `div.item` × 4 →
     `div.block-33.h-100` (white bg, max-width 700px, margin auto, padding
     40px): `div.vcard.d-flex.mb-3` (60px round avatar img +
     `div.name-text.align-self-center`: `h2.heading` name — John Smith /
     Joshua Darren, 3rem lh 1 — + `span` role "XYZ Inc. Client") +
     `div.text` blockquote quote.
  7. CTA `div.bg-primary.py-5` (`#20c997`): `div.container.text-center` →
     `div.row.justify-content-center` → `div.col-lg-7`: `h3.text-white.mb-4.font-weight-normal`
     "Do You Have An Awesome Project In Mind?" + `p.text-white.mb-5` lorem
     - `a.btn.btn-outline-white.px-4.py-3` "Get In Touch!".
  8. Footer `footer.site-footer` (bg `#333`, padding `7em 0`; `p` color
     `rgba(255,255,255,.5)`): `div.row.mb-5`: `div.col-md-4` → `h3.mb-4`
     "About Craft" + p + `ul.footer-social` social icons (fa-twitter,
     fa-facebook, fa-linkedin, fa-instagram, `p-2`); `div.col-md-5.pl-md-5`
     → `h3.mb-4` "Contact Info" + list (Address: / Telephone: / Email:
     labels dim, values `text-white`); `div.col-md-3` → `h3.mb-4` "Quick
     Links" + list (About, Terms of Use, Disclaimers, Contact); then
     `div.row` → `div.col-12.text-md-center.text-left` copyright bar:
     "Copyright © <year> All Rights Reserved | This template is made with
     <i.fa.fa-heart.text-danger> by Colorlib".
- **Visual design (screenshot):** light, corporate creative-agency look.
  Transparent navbar with thin uppercase "CRAFT" wordmark, centered nav
  links, search field on the right. Full-screen hero photo (flat-lay
  workspace with laptop/keyboard/orange mousepad) under a dark overlay with
  a centered bold uppercase white headline and a circular play button with
  "Watch Video". Below, a white two-column "Who We Are" section (text left,
  portrait photo right), neutral palette of white / dark gray / light gray
  with the black divider bar accent. Portfolio grid on a cool blue-gray
  background. Overall: Bootstrap corporate, generous whitespace, Raleway
  typography, teal used for interactive accents.
- **Design tokens (extracted from style.css):**
  - Primary/brand: `#20c997` (teal — buttons, hero highlight span, CTA
    band, dropdown hover, nav-link hover); hover `#1ba87e` / `#199d76`;
    light variant `#3ce0af`.
  - Dark surfaces: `#000` (hero overlay at opacity .4; btn-outline-black
    border), `#343a40` (gray-dark, navbar mobile bg), `#333` (footer),
    `#212529` (body text), `#495057` (footer labels / dim text).
  - Light surfaces: `#fff` (sections, testimonial cards, play button),
    `#f8f9fa` (testimonials bg-light), `#eee` (about image offset shadow),
    `#dee2e6`/`#e9ecef` (borders).
  - Portfolio section background: `#90a8af` (blue-gray), work-thumb hover
    overlay `rgba(0,0,0,.5)`.
  - Text: `#fff` (hero/footer/CTA), `#6c757d` (secondary — section
    eyebrows "Who We Are" / "Featured Services", footer dim),
    `rgba(255,255,255,.5)` (nav links, footer p).
  - Fonts: **Raleway** 300/400/700 (sans-serif stack; headings uppercase
    weight 700, section titles uppercase weight 300 with `strong` 700,
    nav weight 300). Load via Google Fonts `<link>`.
  - Buttons/shapes: `.btn-primary` = `#20c997` fill, white text,
    `border-radius: .25rem` (Bootstrap default); `.btn-outline-black` =
    2px `#000` border, uppercase, 14px bold, radius 0, padding 10px 20px;
    `.btn-outline-white` = 2px white border variant, `px-4 py-3` in CTA;
    hero play = 60px white circle (`border-radius: 50%`) in a 100px wrap;
    section title = 3rem lh 1; divider = 70×6px `#000` bar; card radius
    4px; testimonial card radius 4px, padding 40px, avatar 60px round.
  - Section rhythm: `.section` padding `7em 0`; CTA band `py-5`; footer
    padding `7em 0`; hero 100vh / min 700px.
- **Recreation name:** Forge (NEW name, differs from ColorLib "Craft").
  App folder `apps/forge`, package `@free-react-templates/forge`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/forge-<n>/<w>/<h>`: hero 1920×1080, about 800×600,
  work 900×650 ×4, avatars 120×120 ×2); lucide-react icons (Search, Play,
  Shield, Monitor, Smartphone, Rocket, Heart; brand icons Twitter/
  Facebook/Linkedin/Instagram as inline SVG — lucide has no brand icons);
  Raleway via Google Fonts; play button opens a YouTube lightbox (iframe
  modal on click, e.g. `_VnYSoMI-9Q`); hero slider → single hero slide with
  dot indicators (or static hero; document the choice); testimonial
  carousel → rotating quotes with dots; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Requirements

### Requirement: Header and navigation

The system SHALL render a transparent header with the site wordmark, nav
links, a dropdown, and a search field.

#### Scenario: Header content

- **GIVEN** the Forge page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site wordmark (uppercase, letter-
  spaced) on the left
- **AND** the header SHALL show nav links: Home, About, Services,
  Portfolio, Contact
- **AND** the header SHALL show a search field with a magnifier icon on
  the right

#### Scenario: Nav link states

- **GIVEN** the header is rendered
- **WHEN** a nav link is inspected
- **THEN** inactive links SHALL be dimmed white (50% opacity) and the
  active link SHALL be solid white

#### Scenario: Header over the hero

- **GIVEN** the page is rendered at desktop width
- **WHEN** the header is inspected
- **THEN** the header background SHALL be transparent over the hero image

### Requirement: Hero section

The system SHALL render a full-screen hero with a background image, dark
overlay, a level-1 headline with a highlighted span, a play button, and
"Watch Video" text.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the uppercase heading "We Are Creative Agency" in
  white, 5rem, weight 700
- **AND** it SHALL highlight a word of the heading with the brand teal
  `#20c997` (highlighter span effect)
- **AND** it SHALL show a 60px white circular play button with a play icon
- **AND** it SHALL show "Watch Video" text below the play button

#### Scenario: Hero background

- **GIVEN** the hero is rendered
- **WHEN** the hero background is inspected
- **THEN** it SHALL use a cover background image at full viewport height
- **AND** it SHALL apply a dark overlay (black at ~0.4 opacity)

#### Scenario: Play button opens video

- **GIVEN** the hero play button is rendered
- **WHEN** the user activates it
- **THEN** a video lightbox SHALL open (embedded YouTube player)

### Requirement: About section

The system SHALL render a two-column "Who We Are" section with an eyebrow,
divider bar, heading, text, button, and an image with a decorative offset
shadow.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the uppercase eyebrow "Who We Are" in the
  secondary color
- **AND** it SHALL show a short black divider bar (70×6px) below the
  eyebrow
- **AND** it SHALL show the uppercase heading "We Are Design Agency That
  Bring Your Ideas Alive" with a bold span
- **AND** it SHALL show a "Learn More" button with a black outline
  (2px border, uppercase, no radius)

#### Scenario: About image

- **GIVEN** the about section is rendered
- **WHEN** the right column is inspected
- **THEN** it SHALL show an image with a 10px `#eee` offset shadow

### Requirement: Portfolio section

The system SHALL render a portfolio grid on the blue-gray `#90a8af`
background with hover-reveal work cards and a "More Portfolio" button.

#### Scenario: Portfolio grid

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show the uppercase title "Latest Work" centered
- **AND** it SHALL show a 2×2 grid of work cards, each with a background
  image

#### Scenario: Work card hover

- **GIVEN** a work card is rendered
- **WHEN** the user hovers over it
- **THEN** a dark overlay SHALL appear with the work name and category
  (e.g. "Work Name Here" / "Category Here") centered

#### Scenario: More Portfolio button

- **GIVEN** the portfolio section is rendered
- **WHEN** the section bottom is inspected
- **THEN** it SHALL show a "More Portfolio" button with a white outline

### Requirement: Services section

The system SHALL render a split "Featured Services" section with four
icon cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the eyebrow "Featured Services", the divider bar,
  and the uppercase heading "The Services That We Are Providing" with a
  bold span
- **AND** it SHALL show four service cards: Branding (shield icon), Web
  Design (monitor icon), App Design (smartphone icon), Start Up (rocket
  icon)
- **AND** each card SHALL show an icon, a level-3 title, and a one-line
  description

### Requirement: Testimonials section

The system SHALL render a testimonial carousel on a light background with
white quote cards containing avatar, name, role, and a quote.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the uppercase title "Testimonial" centered
- **AND** it SHALL show a quote card with a 60px round avatar, a name
  (e.g. "John Smith"), a role (e.g. "XYZ Inc. Client"), and a blockquote

#### Scenario: Testimonial rotation

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the user advances the carousel
- **THEN** a different quote SHALL be displayed
- **AND** dot indicators SHALL reflect the current quote

### Requirement: Call-to-action band

The system SHALL render a full-width teal CTA band with a heading, text,
and a "Get In Touch!" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL use the brand teal `#20c997` background
- **AND** it SHALL show the heading "Do You Have An Awesome Project In
  Mind?" in white
- **AND** it SHALL show a "Get In Touch!" button with a white outline

### Requirement: Footer

The system SHALL render a dark footer with About / Contact Info / Quick
Links columns, social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About" column with a short text and social
  icons (Twitter, Facebook, Linkedin, Instagram)
- **AND** it SHALL show a "Contact Info" column with Address, Telephone,
  and Email entries
- **AND** it SHALL show a "Quick Links" column (About, Terms of Use,
  Disclaimers, Contact)
- **AND** it SHALL show a copyright line ending with a heart symbol

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Forge app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Forge — Creative Agency"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/forge`
      (`scripts/verify-app.sh forge` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: transparent navbar (wordmark + 5 links + search),
      full-screen hero (photo + 0.4 overlay + 5rem uppercase headline with
      teal highlight + 60px play circle + "Watch Video"), about (eyebrow +
      black divider + bold-span heading + outline-black button + offset-
      shadow image), portfolio (`#90a8af` grid + hover-reveal cards +
      "More Portfolio"), services (4 icon cards), testimonials (`#f8f9fa`
      carousel, white cards, avatars), teal CTA band, `#333` footer with 3
      columns + socials + copyright heart match the ColorLib Craft preview
      1:1.
- [ ] Design tokens in `@theme`: primary teal `#20c997` (+ hover
      `#1ba87e`), portfolio bg `#90a8af`, footer `#333`, light `#f8f9fa`,
      secondary `#6c757d`, body `#212529`; Raleway loaded via Google Fonts.
- [ ] Placeholder images use `picsum.photos/seed/forge-<n>/<w>/<h>`;
      brand icons are inline SVG (no lucide brand icons); no ColorLib
      assets copied.
- [ ] PR description states source template (ColorLib "Craft"), preview
      URL, design tokens, and what differs (name, placeholders, video
      lightbox approach, slider/carousel simplification choices).

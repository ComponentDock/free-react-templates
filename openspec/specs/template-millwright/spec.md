# Template: Millwright (Industrial / Engineering Company Template)

## Purpose

Millwright is a single-page industrial engineering-company website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Industries" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Industries" — industrial / engineering company
  website (Bootstrap 4, by Free-Template.co; page title reads "Industries
  Website Template by Colorlib").
  (source: https://colorlib.com/wp/template/industries/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/industries/
  (HTTP 200, ~27.6 KB HTML fetched + `css/style.css` ~56.1 KB parsed; live
  DOM rendered in browser, computed styles verified via JS, screenshots
  reviewed).
- **Screenshot analyzed:** `industries-free-template.jpg` (1200×946) —
  industrial pipes against a blue sky + modern white building facade; dark
  gradient overlay behind the centered white uppercase headline; white
  circular play button above the headline; orange `#fd5f00` single brand
  accent on icons and buttons; 3-column feature row below the hero; sections
  alternate white / light-grey `#f8f9fa`; footer is LIGHT (verified via
  computed style — transparent bg, `#6c757d` text, orange links; the dark
  look in some renders is the hero's black gradient showing behind the
  transparent header).
- **Section order (1:1, from the DOM of the home page):**
  1. Navbar (`header` absolutely positioned, top 30px, z-index 5, full
     width — transparent over the hero on desktop, solid black <1200px;
     `nav.navbar.navbar-expand-lg.navbar-dark.bg-dark` with
     `background: none !important` on desktop): brand link "Industries"
     (`navbar-brand`, Montserrat, uppercase, letter-spacing .2em, weight
     400; a `span` inside colored `#fd5f00`); `ul.navbar-nav ml-auto`:
     HOME (active) / ABOUT / PROJECTS / SERVICES (dropdown →
     Architectural Design, Interior, Building) / BLOG / CONTACT. Links:
     Montserrat, 12px, uppercase, letter-spacing .2em, padding 1.7rem 1rem;
     active white. Dropdown: white card, radius 4px, shadow
     `0 2px 30px rgba(0,0,0,0.2)`, hover/active item bg `#fd5f00` white
     text. NOTE: NO search form (unlike the similar "Industrial" template).
     Mobile: navbar-toggler collapse with black navbar background.
  2. Hero slider (`section.home-slider.owl-carousel`): 2 `div.slider-item`
     (height `calc(100vh)`, min-height 700px, bg image `hero_1.jpg` /
     `hero_2.jpg`; a `:before` black→transparent gradient overlay, top
     500px; inactive slides opacity .4): centered `col-lg-7 text-center` —
     `div.btn-play-wrap` (100px) with circular play button (`a.btn-play`,
     60px WHITE circle, black `ion-ios-play` icon, links to Vimeo with
     fancybox) + `h1` uppercase 50px weight 300 white (Montserrat) + `p`
     20px weight 300 white. NO orange highlight span on the headline
     (this variant differs from "Industrial"). Owl prev/next arrows at
     vertical center + dots (7px white pills, bottom 100px). Slides:
     "We Are Industrial Company" / "Create, Enhance and Sustain".
  3. Features (`section.section.bg-light`): NO section heading; 3 centered
     `media.block-6 d-block text-center` (col-md-6 col-lg-4): `div.icon.mb-3`
     with `span.ion.text-primary` (orange, 50px) + `h3.heading` (20px) + p
     (16px): **Automotive Parts** (ion-bookmark) · **Maintenance Services**
     (ion-heart) · **Green Energy** (ion-leaf).
  4. Services (`section.section`): centered h2 "We Are Reliable Engineering
     In House"; asymmetric row `align-items-stretch`: `col-lg-4 order-lg-1`
     = feature image (`div.feature-img-bg h-100`, `about_1.jpg`); two
     `col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column` columns
     (order-lg-1 / order-lg-3), each with 2 `feature-1 d-md-flex` items:
     `span.ion.display-4.text-primary` (orange) + h3 + blurb p:
     **Green Energy** (ion-leaf) · **Precision Mechanics**
     (ion-android-bulb) · **Construction Machines** (ion-alert-circled) ·
     **Reliable and Stable** (ion-android-happy).
  5. Split block (`section.section.element-animate`): `row align-items-center
mb-5` — text `col-md-5 pr-md-5 mb-5` (`div.block-41`): `h2.block-41-
heading mb-5` (50px, line-height 1.2) "Create, Enhance and Sustain" +
     `div.block-41-text` (20px) TWO paragraphs + `a.readmore` "Read More"
     with arrow icon (`ion-android-arrow-dropright-circle`); image
     `col-lg-7 order-md-2` (`div.frame > img`, `about_2.jpg`, img-fluid).
  6. Projects (`section.section.border-t.pb-0`): centered `col-md-8
text-center` h2 "Our Latest Projects" + `p.lead`; then
     `div.container-fluid > div.row.no-gutters` of SIX `a.link-thumbnail`
     tiles (col-md-4): h3 title + `span.ion-plus.icon` + img (`img_1.jpg`,
     `img_2.jpg`, `img_3.jpg`, `img_4.jpg`, then `img_1.jpg`, `img_2.jpg`
     repeated). Hover: dark overlay `rgba(0,0,0,0.6)` fades in, h3 (white
     18px) slides up to bottom 30px, plus icon appears centered (white),
     img zooms to 1.1. Titles: **Ducting Design in Colorado** · **Tanks
     Project In California** · **Structural Design in New York** · **Stacks
     Design** · **Intercate Custom** [sic] · **Banker Design**.
  7. Testimonial (`section.section.bg-light.block-11`): centered h2 "Happy
     Clients"; `nonloop-block-11.owl-carousel` of FOUR `div.item > div
.block-33` cards (WHITE card, max-width 700px, padding 40px, centered):
     `div.vcard.d-flex.mb-3` — avatar `div.image` (60px circle, `person_2
.jpg` / `person_3.jpg`) + `div.name-text`: `h2.heading` (18px weight 300) name + `span.meta` (color `#a6a6a6`) "Companies Client"; then
     `div.text > blockquote` (16px) quote. Names: John Smith · Joshua
     Darren · John Smith · John Smith. Nav arrows below (centered).
  8. Blog Posts (`section.section.blog`): centered h2 "Blog Posts" +
     `p.lead`; `div.row` col-md-6: FOUR `div.media mb-4 d-md-flex d-block`
     entries (2 left, 2 right stacked) — image (`a.mr-5`, `img_2.jpg` /
     `img_3.jpg` alternating) + `div.media-body`: `span.post-meta`
     (uppercase 12px, letter-spacing .2em, color `#b3b3b3`) "Feb 26th,
     2018" + `h3.mt-2.text-black` (20px) title link (demo uses the SAME
     title for all four: "Separated they live in Bookmarksgrove right") +
     excerpt p + `a.readmore` "Read More" (uppercase .9rem, arrow icon).
  9. CTA band (`section.section.bg-primary`, bg `#fd5f00`): row
     `align-items-center` — `col-lg-8`: `h2.text-white.mb-0` "Create,
     Enhance and Sustain" + `p.text-white.lead`; `col-lg-4 text-lg-right`:
     `a.btn.btn-outline-white.px-4.py-3` "Download This Template" (links to
     https://free-template.co/).
  10. Footer (`footer.site-footer`, LIGHT — verified computed: bg
      transparent/white, text `#6c757d`, `border-top: #eee`, padding 7em 0):
      - col-md-4: `h3` "About Us" + about p + `ul.footer-social d-flex` of
        4 social icon links (fa-twitter / fa-facebook / fa-linkedin /
        fa-instagram; 30px circles, border `rgba(255,255,255,0.1)`, hover
        white bg black icon).
      - col-md-5 pl-md-5: `h3` "Contact Info" — Address: 34 Street Name,
        City Name Here, United States · Telephone:+1 242 4942 290 ·
        Email:info@yourdomain.com.
      - col-md-3: `h3` "Quick Links" — About / Terms of Use / Disclaimers /
        Contact.
      - Bottom centered copyright bar: "Copyright © <year> All rights
        reserved | This template is made with <heart> by Colorlib"
        (monorepo credit, not ColorLib).
        Footer h3: 12px, uppercase, letter-spacing .1em, bold; links
        `#fd5f00` with bottom border `rgba(0,0,0,0.2)`, hover `#000`.
- **Design tokens extracted from the preview CSS (`css/style.css`) + live
  computed styles:**
  - Primary brand **orange `#fd5f00`** (18 uses): `.text-primary` icons,
    `.bg-primary` CTA band, `.btn-primary` bg/border, navbar-brand span,
    dropdown-item hover/active bg, footer links (computed `rgb(253,95,0)`).
  - Hover/deep shades: `#d75100` (btn-primary hover bg), `#ca4c00`
    (btn-primary active bg, `.text-primary` hover), `#bd4700` (active
    border), `#ff7e31` (`.btn.btn-primary` hover bg/border).
  - Neutrals: body text `#212529`; muted `#6c757d` (footer text),
    `#b3b3b3` (post-meta), `#a6a6a6` (testimonial meta); `.bg-light`
    `#f8f9fa`; `#eee` footer border-top; `#dee2e6`/`#e9ecef` borders;
    `#343a40`/`#495057` dark greys.
  - Fonts: body **"Oxygen"** (Bootstrap default, sans-serif fallback);
    headings + navbar + brand **"Montserrat"** (Google Fonts, loaded via
    `@font-face` in the preview; use `<link>` in `index.html`). h1/h2/h3:
    Montserrat, weight 900, color `#000` (hero h1 overridden to weight 300
    white `!important`). Navbar links 12px uppercase letter-spacing .2em;
    brand uppercase letter-spacing .2em weight 400; footer h3 12px uppercase
    letter-spacing .1em bold.
  - Buttons `.btn`: 13px, uppercase, letter-spacing .2em, **font-weight
    900**; `.btn-primary`: white text on `#fd5f00`, border-width 2px,
    hover `#ff7e31`; `.btn-outline-white`: 2px white border, white text,
    hover → white bg, black text.
  - Hero: `slider-item` height `calc(100vh)` (min 700px); `:before` black →
    transparent gradient (top 500px); h1 50px uppercase weight 300 white
    line-height 1.2; paragraph 20px weight 300 white; `btn-play` 60px WHITE
    circle with BLACK play icon (no orange highlight block on the headline
    — differs from the "Industrial" template).
  - Sections: `.section` padding 7em 0; `block-41-heading` 50px line-height
    1.2; `block-41-text` 20px; `.readmore` uppercase .9rem with right arrow
    icon; `.block-6 .icon span` 50px; `.block-6 .media-body .heading` 20px,
    p 16px.
  - Projects `link-thumbnail`: hover overlay `rgba(0,0,0,0.6)`, h3 white
    18px slides to bottom 30px, `ion-plus` icon appears centered, img zoom
    1.1; `.border-t` = `border-top: 1px solid #f8f9fa`.
  - Testimonial `block-33`: white card, max-width 700px, padding 40px;
    avatar 60px circle; name 18px weight 300; meta `#a6a6a6`; blockquote
    16px.
  - Blog: `.post-meta` uppercase 12px `#b3b3b3` letter-spacing .2em; h3
    20px; media image left with `mr-5` gap.
  - Navbar: `header` absolute top 30px z-index 5, transparent bg on desktop
    (black <1200px); dropdown white card radius 4px with caret, shadow
    `0 2px 30px rgba(0,0,0,0.2)`.
  - Footer: LIGHT (white/transparent bg), links `#fd5f00` → `#000` hover,
    social icons 30px circles.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/millwright-<n>/<w>/<h>`); icons → lucide-react
  (Play, ChevronLeft, ChevronRight, Bookmark, Heart, Leaf, Lightbulb,
  TriangleAlert, Smile, Plus, ArrowRight, Twitter, Facebook, Linkedin,
  Instagram, MapPin, Phone, Mail, Menu, Quote); Montserrat + Oxygen via
  Google Fonts `<link>` in `index.html`; brand orange `#fd5f00` in `@theme`
  so shared Button/ButtonLink and `text-primary` icons resolve correctly;
  hero headline has NO orange highlight block (unlike Industrial); navbar
  has NO search form (unlike Industrial); no asset/CSS/font-file copying.
  Demo copy paraphrased but same kinds (industrial engineering services +
  fabrication projects + testimonials + blog + orange CTA). Demo typos
  fixed: "Intercate Custom" → "Intricate Custom". Testimonial/blog
  carousel: simple carousel with prev/next + dots; hero slider auto-advances
  with arrows + dots.
- **What differs from the sibling template "Ingot" (ColorLib Industrial):**
  same Free-Template.co base, but: no search form; hero headline has no
  orange highlight block; features row = Automotive Parts / Maintenance
  Services / Green Energy; services heading "We Are Reliable Engineering In
  House" with 4 different items; only ONE split block ("Create, Enhance and
  Sustain"); projects heading "Our Latest Projects"; testimonials heading
  "Happy Clients" with 4 cards ("Companies Client" meta) + no carousel
  bottom-offset arrows; blog has 4 posts (all same demo title); CTA heading
  reuses "Create, Enhance and Sustain"; footer h3s "About Us" / "Contact
  Info" / "Quick Links".

Millwright lives in `apps/millwright` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the transparent-over-hero navbar with
Services dropdown and the light 3-column footer with orange links).

## Requirements

### Requirement: Navbar

The system SHALL render a navbar overlaid on the hero with the site
wordmark, section links (including a Services dropdown), and a mobile
toggle. It SHALL NOT include a search form.

#### Scenario: Navbar content

- **GIVEN** the Millwright page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Millwright" as the brand
- **AND** the navbar SHALL show links HOME, ABOUT, PROJECTS, SERVICES, BLOG, CONTACT
- **AND** the navbar SHALL NOT show a search input

#### Scenario: Services dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user activates the SERVICES link
- **THEN** a dropdown SHALL open with items Architectural Design, Interior, and Building

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered at a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links SHALL expand into a stacked menu

### Requirement: Hero slider

The system SHALL render a full-height hero slider with at least two slides,
each with a white circular play button, an uppercase white headline, and
subtext, plus slider navigation.

#### Scenario: Slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show slide 1 with the headline "We Are Industrial Company"
- **AND** slide 2 with the headline "Create, Enhance and Sustain"
- **AND** each slide SHALL show a circular play button and a short subtext paragraph

#### Scenario: Headline styling

- **GIVEN** a hero slide is displayed
- **WHEN** the user inspects the headline
- **THEN** the headline SHALL be uppercase white text on the dark photo overlay (no orange highlight block)

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates a previous/next arrow or a dot
- **THEN** the slider SHALL advance to the corresponding slide

### Requirement: Feature highlights

The system SHALL render a light-background section with three centered
feature items (orange icon + title + blurb) and no section heading.

#### Scenario: Feature content

- **GIVEN** the page is rendered
- **WHEN** the feature section is displayed
- **THEN** it SHALL show three features titled "Automotive Parts", "Maintenance Services", and "Green Energy", each with an orange icon and a blurb

### Requirement: Services section

The system SHALL render a section with the heading "We Are Reliable
Engineering In House" and four service items (orange icon + title + blurb)
arranged in two columns beside a tall feature image.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "We Are Reliable Engineering In House"
- **AND** four services titled "Green Energy", "Precision Mechanics", "Construction Machines", and "Reliable and Stable", each with an orange icon and a blurb
- **AND** a tall image beside the two service columns

### Requirement: Split block

The system SHALL render one image/text split section ("Create, Enhance and
Sustain") with a heading, two paragraphs, a Read More link, and an image on
the opposite side.

#### Scenario: Split block content

- **GIVEN** the page is rendered
- **WHEN** the split section is displayed
- **THEN** it SHALL show the heading "Create, Enhance and Sustain" with two paragraphs and a "Read More" link, and an image on the opposite side

### Requirement: Projects grid

The system SHALL render a Projects section with a heading, lead paragraph,
and a grid of six project tiles (image + title overlay on hover).

#### Scenario: Project grid content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show the heading "Our Latest Projects" and a lead paragraph
- **AND** six project tiles titled "Ducting Design in Colorado", "Tanks Project In California", "Structural Design in New York", "Stacks Design", "Intricate Custom", and "Banker Design"

#### Scenario: Tile hover overlay

- **GIVEN** a project tile is displayed
- **WHEN** the user hovers over it
- **THEN** the image SHALL zoom slightly, a dark overlay SHALL appear, and the title SHALL slide up over the image

### Requirement: Testimonial carousel

The system SHALL render a light-background testimonial section with a
heading and a carousel of white quote cards (avatar, name, role, quote).

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show the heading "Happy Clients"
- **AND** at least one card with a round avatar, a customer name, the role "Companies Client", and a quote

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next testimonial

### Requirement: Blog section

The system SHALL render a Blog Posts section with a heading, lead paragraph,
and four blog entries (image, date meta, title, excerpt, Read More link).

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Blog Posts" and a lead paragraph
- **AND** four blog entries, each with an image, a date meta "Feb 26th, 2018", a title, an excerpt, and a "Read More" link

### Requirement: CTA band

The system SHALL render a solid orange call-to-action band with white
headline and subtext on the left and a white-outline download button on the
right.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the heading "Create, Enhance and Sustain" in white on the orange band
- **AND** a white subtext paragraph
- **AND** a "Download This Template" button with a white outline on the right

### Requirement: Footer

The system SHALL render a light footer with About (brand + social icons),
Contact Info, and Quick Links columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" column with a paragraph and social icons (Twitter, Facebook, LinkedIn, Instagram)
- **AND** a "Contact Info" column with address, telephone, and email
- **AND** a "Quick Links" column (About, Terms of Use, Disclaimers, Contact)
- **AND** the footer SHALL show a centered copyright bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Millwright app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero slider, features, services, split block, projects, testimonials, blog, CTA band, and footer in order
- **AND** the document title SHALL be "Millwright — Industries Template"

## Verification checklist

- [ ] `openspec/specs/template-millwright/spec.md` present with the REAL
      section list (navbar → hero slider → features → services → split
      block → projects → testimonials → blog → CTA band → footer).
- [ ] Design tokens above (orange `#fd5f00` + shades `#d75100`/`#ca4c00`/
      `#bd4700`/`#ff7e31`, `#f8f9fa` light sections, Montserrat + Oxygen,
      13px uppercase 900-weight buttons, 50px weight-300 hero headline with
      NO orange highlight block, transparent-over-hero navbar with no
      search form, light footer with orange links) captured in the spec.
- [ ] `docs/templates/millwright/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh
    millwright`, PR lists source (ColorLib Industries), preview URL,
      tokens, and what differs.

# Template: Ingot (Industrial / Steel Fabrication Template)

## Purpose

Ingot is a single-page industrial company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Industrial" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Industrial" — steel fabrication / industrial
  company website (Bootstrap 4, by Free-Template.co; page title reads
  "Industrial — Website Template by Colorlin" [sic]).
  (source: https://colorlib.com/wp/template/industrial/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/industrial/
  (HTTP 200, ~28.8 KB HTML fetched + `css/style.css` ~57.7 KB parsed; live
  DOM rendered in browser and inspected visually via screenshots).
- **Screenshot analyzed:** `industrial-free-template.jpg` (AVIF) — dark
  welding-sparks hero photo with a white circular play button; the uppercase
  headline sits on a SOLID ORANGE highlight block (`#fd5f00`); orange
  `#fd5f00` is the single brand accent everywhere (icons, buttons, CTA band,
  footer links, nav brand letter); sections alternate white / light-grey
  `#f8f9fa`; footer is LIGHT with dark-grey text and orange links (verified
  via computed style — NOT dark); CTA band is solid orange with a
  white-outline "Download This Template" button.
- **Section order (1:1, from the DOM of the home page):**
  1. Navbar (`nav.navbar.navbar-expand-lg.navbar-dark.bg-dark`,
     `container-fluid`): brand link "Industrial" (`navbar-brand`, uppercase,
     letter-spacing .2em; brand span colored `#fd5f00`); `ul.navbar-nav
ml-auto`: HOME (active) / ABOUT / PROJECTS / SERVICES (dropdown →
     Architectural Design, Interior, Building) / BLOG / CONTACT; right:
     `form.search-form` — ion-search icon + `input.form-control`
     placeholder "Search...". Links: 12px, uppercase, letter-spacing .2em,
     padding 1.7rem 1rem; active white. Mobile: navbar-toggler collapse.
  2. Hero slider (`section.home-slider.owl-carousel`): 2 `div.slider-item`
     (full-height `100vh`, min-height 700px, bg image
     `industrial_hero_1.jpg` / `industrial_hero_2.jpg`; inactive slides
     opacity .4): centered `col-lg-7 text-center` — circular play button
     (`a.btn-play` with `ion-ios-play`, links to Vimeo) + `h1` uppercase
     50px weight 300 white, text wrapped in a `<span>` with SOLID ORANGE
     background `#fd5f00` + box-shadow `0.5em 0 0 #fd5f00, -0.5em 0 0
#fd5f00` (solid highlight block behind the text) + `p` 20px weight 300
     white. Carousel arrows (owl-prev/owl-next) at vertical center, dots.
  3. Services (`section.section`): centered h2 "We'll Handle Any Probles
     and Solve Them" [sic — "Probles"]; asymmetric 3-column row
     (`align-items-stretch`): center `col-lg-4 order-lg-2` = feature image
     (`div.feature-img-bg` 400px, `industrial_feature_1.jpg`); left
     `col-md-6 col-lg-4 order-lg-1` = 2 `feature-1` items; right
     `col-md-6 col-lg-4 order-lg-3` = 2 `feature-1` items. Each:
     `span.ion.display-4.text-primary` (orange) + h3 + blurb p:
     **Ducting Design** (ion-easel) · **Stacks Design** (ion-hammer) ·
     **Tanks Design** (ion-cube) · **Structural Design** (ion-clipboard).
  4. Features (`section.section.bg-light`): 3 centered `media.block-6
d-block text-center` (col-md-6 col-lg-4): `div.icon.mb-3` with
     `span.ion.text-primary` (orange) + `h3.heading` + p:
     **Modern Design** (ion-android-notifications) · **Built With Passion**
     (ion-heart) · **Fast Loading** (ion-flash).
  5. "Let's Build Together" (`section.section.element-animate`): row
     `align-items-center`: `col-lg-7 order-md-2` = `div.scaling-image >
div.frame > img` (`industrial_featured_img_1.jpg`; hover: frame scales
     to .9, image to 1.2); `col-md-5 order-md-1` = `div.block-41`:
     `h2.block-41-heading` (50px, line-height 1.2) "Let's Build Together" +
     `div.block-41-text` (20px) paragraph + `a.readmore` "Read More" with
     arrow icon (`ion-android-arrow-dropright-circle`).
  6. "We'll handle any intercate custom design" [sic]
     (`section.section.element-animate.bg-light`): MIRRORED layout — image
     `col-lg-7 order-md-1` (left), text `col-md-5 order-md-2` (right);
     image `industrial_featured_img_2.jpg`; same block-41 pattern.
  7. Projects (`section.section.border-t.pb-0`): centered
     `col-md-8 text-center` h2 "Projects" + `p.lead`; then
     `div.container-fluid > div.row.no-gutters` of SIX `a.link-thumbnail`
     tiles (col-md-4): h3 title + `span.ion-plus.icon` + img. Hover:
     dark overlay `rgba(0,0,0,0.6)` fades in, h3 (white 18px) slides up to
     bottom 30px, plus icon appears centered (white 30px), img zooms to
     1.1. Titles: **Ducting Design in Colorado** · **Tanks Project In
     California** · **Structural Design in New York** · **Stacks Design** ·
     **Intercate Custom** [sic] · **Banker Design**.
  8. Testimonial (`section.section.bg-light.block-11`): centered h2
     "Testimonial"; `nonloop-block-11.owl-carousel` of `div.item > div
.block-33` cards (WHITE card, max-width 700px, padding 40px, centered):
     `div.vcard.d-flex.mb-3` — avatar `div.image` (60px, `border-radius:
50%`) + `div.name-text`: `h2.heading` 18px weight 300 name + `span.meta`
     (color `#a6a6a6`) "Free-Template.co Client"; then `div.text >
blockquote` (16px) quote. Names: John Smith / Joshua Darren / John
     Smith. Nav arrows below (centered, bottom -40px).
  9. Blog Posts (`section.section.blog`): centered h2 "Blog Posts" +
     `p.lead`; `div.row` col-md-6: `div.media.mb-4` — image (`a.mr-5`,
     `industrial_blog_1..3.jpg`) + `div.media-body`: `span.post-meta`
     (uppercase 12px, letter-spacing .2em, color `#b3b3b3`) "Feb 26th,
     2018" + `h3.mt-2.text-black` (20px) title link "How to handle any
     intercate custom design" [sic] + excerpt p + `a.readmore` "Read More"
     (uppercase .9rem, arrow icon). 3 posts: 1 left, 2 stacked right.
  10. CTA band (`section.section.bg-primary`, bg `#fd5f00`): row
      `align-items-center` — `col-lg-8`: `h2.text-white.mb-0` "Get Started
      With Industrial Free Template" + `p.text-white.lead`; `col-lg-4
text-lg-right`: `a.btn.btn-outline-white.px-4.py-3` "Download This
      Template".
  11. Footer (`footer.site-footer`, LIGHT — border-top `#eee`, padding 7em
      0; computed bg transparent/white, text `#6c757d`):
      - col-md-4: `h3` "About The Industrial" + about p + `ul.footer-social
d-flex` of 4 social icon links (fa-twitter / fa-facebook /
        fa-linkedin / fa-instagram; 30px circle, border
        `rgba(255,255,255,0.1)`, hover white bg black icon).
      - col-md-5 pl-md-5: `h3` "Contact Info" — Address: 34 Street Name,
        City Name Here, United States · Telephone: +1 242 4942 290 ·
        Email: info@yourdomain.com.
      - col-md-3: `h3` "Quick Links" — About / Terms of Use / Disclaimers /
        Contact.
      - Bottom centered copyright bar: "Copyright © <year> All rights
        reserved | This template is made with <heart> by Colorlib"
        (monorepo credit, not ColorLib).
        Footer h3: 12px, uppercase, letter-spacing .1em, bold; links
        `#fd5f00` with bottom border `rgba(0,0,0,0.2)`, hover `#000`.
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Primary brand **orange `#fd5f00`** (22 uses): `.text-primary` icons,
    `.btn-primary` bg/border, `.bg-primary` CTA band, hero h1 highlight
    block (bg + box-shadow), navbar-brand span, dropdown-item hover bg,
    footer links, `.readmore`/`.slider-text p a` accents.
  - Hover/deep shades: `#d75100` (btn-primary hover bg), `#ca4c00`
    (btn-primary active bg, `.text-primary` hover), `#ff7e31`
    (`.btn.btn-primary` hover bg/border), `#b14200`.
  - Neutrals: body text `#212529`; muted `#6c757d` (footer text),
    `#b3b3b3` (post-meta), `#a6a6a6` (testimonial meta); `.bg-light`
    `#f8f9fa`; `#eee` footer border-top; `#dee2e6`/`#e9ecef` borders.
  - Fonts: body **"Oxygen"** (Bootstrap default, sans-serif fallback);
    navbar + brand + headings **"Montserrat"** (Google Fonts, loaded via
    `@font-face` in the preview; use `<link>` in `index.html`). Navbar
    links 12px uppercase letter-spacing .2em; brand uppercase letter-
    spacing .2em; footer h3 12px uppercase letter-spacing .1em bold.
  - Buttons `.btn`: 13px, uppercase, letter-spacing .2em, **font-weight
    900**; `.btn-primary`: white text on `#fd5f00`, border-width 2px,
    hover `#ff7e31`; `.btn-outline-white`: 2px white border, white text,
    hover → white bg, black text.
  - Hero: `slider-item` full-height (`100vh`, min 700px); h1 50px,
    uppercase, weight 300, white, line-height 1.2; `<span>` inside h1 =
    SOLID ORANGE block (bg `#fd5f00` + box-shadow `0.5em 0 0 #fd5f00,
-0.5em 0 0 #fd5f00`); paragraph 20px weight 300 white; white circular
    play button (btn-play).
  - Sections: `.section` padding 7em 0; `block-41-heading` 50px line-
    height 1.2; `block-41-text` 20px; `.readmore` uppercase .9rem with
    right arrow icon.
  - Projects `link-thumbnail`: hover overlay `rgba(0,0,0,0.6)`, h3 white
    18px slides to bottom 30px, `ion-plus` icon white 30px centered, img
    zoom 1.1.
  - Testimonial `block-33`: white card, max-width 700px, padding 40px;
    avatar 60px circle; name 18px weight 300; meta `#a6a6a6`; blockquote
    16px.
  - Blog: `.post-meta` uppercase 12px `#b3b3b3` letter-spacing .2em; h3
    20px; media image left with `mr-5` gap.
  - Footer: LIGHT (white/transparent bg), links `#fd5f00` → `#000` hover,
    social icons 30px circle.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ingot-<n>/<w>/<h>`); icons → lucide-react (Play,
  ChevronLeft, ChevronRight, Search, Easel, Hammer, Box, ClipboardList,
  Bell, Heart, Zap, Plus, ArrowRight, Twitter, Facebook, Linkedin,
  Instagram, MapPin, Phone, Mail, Heart, Menu); Montserrat + Oxygen via
  Google Fonts `<link>` in `index.html`; brand orange `#fd5f00` in `@theme`
  so shared Button/ButtonLink and `text-primary` icons resolve correctly;
  hero h1 highlight = orange background span (Tailwind `bg-brand px-2`
  or box-shadow equivalent); no asset/CSS/font-file copying. Demo copy
  paraphrased but same kinds (industrial services + steel-fabrication
  projects + testimonials + blog + orange CTA). Demo typos fixed:
  "Probles" → "Problems", "intercate" → "intricate" (both occurrences).
  Testimonial/blog carousel: simple carousel with prev/next + dots;
  hero slider auto-advances with arrows + dots.

Ingot lives in `apps/ingot` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) plus the repo-standard Navbar/Footer chrome
(adapted to the dark navbar with search form + Services dropdown and the
light 3-column footer with orange links).

## Requirements

### Requirement: Navbar

The system SHALL render a dark navbar with the site wordmark, section links
(including a Services dropdown), a search form, and a mobile toggle.

#### Scenario: Navbar content

- **GIVEN** the Ingot page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ingot" as the brand
- **AND** the navbar SHALL show links HOME, ABOUT, PROJECTS, SERVICES, BLOG, CONTACT
- **AND** the navbar SHALL show a search input with placeholder "Search..."

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
each with a play button, an uppercase headline on an orange highlight block,
and subtext, plus slider navigation.

#### Scenario: Slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show slide 1 with the headline "We Are Industrial Company"
- **AND** slide 2 with the headline "The Best Level of Excellence in Steel Fabrication"
- **AND** each slide SHALL show a circular play button and a short subtext paragraph

#### Scenario: Headline highlight

- **GIVEN** a hero slide is displayed
- **WHEN** the user inspects the headline
- **THEN** the headline text SHALL be uppercase white text on a solid orange highlight block

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates a previous/next arrow or a dot
- **THEN** the slider SHALL advance to the corresponding slide

### Requirement: Services section

The system SHALL render a section with the heading and four service items
(icon + title + blurb) arranged in an asymmetric layout around a center
image.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "We'll Handle Any Problems and Solve Them"
- **AND** four services titled "Ducting Design", "Stacks Design", "Tanks Design", and "Structural Design", each with an orange icon and a blurb
- **AND** a large image between the two left and two right service items

### Requirement: Feature highlights

The system SHALL render a light-background section with three centered
feature items (orange icon + title + blurb).

#### Scenario: Feature content

- **GIVEN** the page is rendered
- **WHEN** the feature section is displayed
- **THEN** it SHALL show three features titled "Modern Design", "Built With Passion", and "Fast Loading", each with an orange icon and a blurb

### Requirement: Split feature blocks

The system SHALL render two alternating image/text split sections ("Let's
Build Together" and a second custom-design block), each with a heading,
paragraph, and Read More link.

#### Scenario: First split block

- **GIVEN** the page is rendered
- **WHEN** the first split section is displayed
- **THEN** it SHALL show the heading "Let's Build Together" with a paragraph and a "Read More" link, and an image on the opposite side

#### Scenario: Second split block (mirrored)

- **GIVEN** the page is rendered
- **WHEN** the second split section is displayed
- **THEN** it SHALL show the heading "We'll handle any intricate custom design" with a paragraph and a "Read More" link, and an image on the opposite side (mirrored from the first block)

### Requirement: Projects grid

The system SHALL render a Projects section with a heading, lead paragraph,
and a grid of six project tiles (image + title overlay on hover).

#### Scenario: Project grid content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show the heading "Projects" and a lead paragraph
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
- **THEN** it SHALL show the heading "Testimonial"
- **AND** at least one card with a round avatar, a customer name, the role "Free-Template.co Client", and a quote

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next testimonial

### Requirement: Blog section

The system SHALL render a Blog Posts section with a heading, lead paragraph,
and three blog entries (image, date meta, title, excerpt, Read More link).

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Blog Posts" and a lead paragraph
- **AND** three blog entries, each with an image, a date meta "Feb 26th, 2018", a title, an excerpt, and a "Read More" link

### Requirement: CTA band

The system SHALL render a solid orange call-to-action band with white
headline and subtext on the left and a white-outline download button on the
right.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the heading "Get Started With Ingot Free Template" in white on the orange band
- **AND** a white subtext paragraph
- **AND** a "Download This Template" button with a white outline on the right

### Requirement: Footer

The system SHALL render a light footer with About (brand + social icons),
Contact Info, and Quick Links columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About" column with a paragraph and social icons (Twitter, Facebook, LinkedIn, Instagram)
- **AND** a "Contact Info" column with address, telephone, and email
- **AND** a "Quick Links" column (About, Terms of Use, Disclaimers, Contact)
- **AND** the footer SHALL show a centered copyright bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Ingot app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero slider, services, features, two split blocks, projects, testimonials, blog, CTA band, and footer in order
- **AND** the document title SHALL be "Ingot — Industrial Template"

## Verification checklist

- [ ] `openspec/specs/template-ingot/spec.md` present with the REAL section
      list (navbar → hero slider → services → features → split block →
      split block mirrored → projects → testimonials → blog → CTA band →
      footer).
- [ ] Design tokens above (orange `#fd5f00` + shades `#d75100`/`#ca4c00`/
      `#ff7e31`, `#f8f9fa` light sections, Montserrat + Oxygen, 13px
      uppercase 900-weight buttons, 50px hero headline with orange
      highlight block, light footer with orange links) captured in the
      spec.
- [ ] `docs/templates/ingot/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh ingot`,
      PR lists source (ColorLib Industrial), preview URL, tokens, and what
      differs.

# Template: Dynamo (Industrial / Energy Company Template)

## Purpose

Dynamo is a single-page industrial / energy-company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Industry Inc" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Industry Inc" — industrial / energy company
  website (Bootstrap 4; page title reads "Industry.INC | HTML Template").
  (source: https://colorlib.com/wp/template/industry-inc/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/industryinc/
  (note: the preview host drops the hyphen — `/theme/industry-inc/` 404s).
  HTTP 200, ~55 KB HTML fetched + `css/style.css` ~36 KB parsed; live DOM
  rendered in browser, screenshots reviewed).
- **Screenshot analyzed:** `industryinc-free-template.jpg` (1200×946) —
  hero photo of an industrial facility (large pipes, metal structures, clear
  blue sky); headline "Power & Energy Industry" in white on solid yellow
  highlight blocks; thin dark topbar above the nav; centered nav with Home
  active (yellow underline); yellow square search button on the right edge;
  two flat CTAs below the headline (white "READ MORE" + dark "OUR SERVICES");
  carousel arrows as white squares with black arrows; below the hero a white
  3-column services grid with yellow icons (gear/cog, worker, leaf); clean
  modern sans-serif typography throughout.
- **Section order (1:1, from the DOM of the home page):**
  1. Header (`header.header-section.clearfix`):
     - `div.header-top` (bg `#081624`, padding 14px 40px): two
       `container-fluid` halves of blurb text (left + right, same demo
       Lorem ipsum copy).
     - `div.site-navbar` (text-align center): brand `a.site-logo` left
       (`img/logo.png`, margin-right 100px, padding-left 63px); right side
       `div.header-right`: TWO `div.header-info-box` (icon PNG + `h6` + `p`):
       phone "+546 990221 123" / "contact@industryalinc.com" and address
       "Main Str, no 23" / "NY, New York PK 23589"; then `button.search-switch`
       (83px wide, full height, bg `#ffc000`, white search icon, toggles the
       full-screen search modal); centered `nav.site-nav-menu` (inline-flex):
       links Home (active) / About us / Solutions (sub-menu → Elements) /
       Blog / Contact — 15px, weight 600, color `#081624`, padding 32px 16px,
       margin-right 35px, active link has a yellow underline.
  2. Hero slider (`section.hero-section`): `div.hero-slider.owl-carousel`
     with TWO `div.hero-item.set-bg` slides (height 777px, flex,
     `align-items: center`, bg images `img/hero-slider/1.jpg` /
     `img/hero-slider/2.jpg` via `data-setbg`): `container > row >
col-xl-8` — `h2` (90px, weight 300, white) made of THREE stacked
     `span`s, each with `background: #ffc000`, padding-left 25px,
     padding-bottom 15px: **"Power" / "& Energy" / "Industry"**; then
     `a.site-btn.sb-white` "Read More" + `a.site-btn.sb-dark` "our
     Services". Owl prev/next arrows + dots (carousel controls).
  3. Services (`section.services-section`): `div.services-warp` (WHITE bg,
     max-width 1227px, `margin: -91px auto 0` — overlaps the hero bottom,
     box-shadow, `z-index: 99`, padding 56px top / 30px bottom): SIX
     `div.service-item` (col-lg-4 col-md-6, margin-bottom 55px): `div.si-head`
     = `div.si-icon` (61px, PNG icon: cogwheel / workers / leaf / zap /
     droplets / factory) + `h5` title, then `p` blurb:
     **Mechanical Engineering · Professional Workers · Green Energy ·
     Power Engineering · Oil & Lubricants · Power & Energy**.
  4. Features (`section.features-section.spad.set-bg`, bg image
     `img/features-bg.jpg`): THREE `div.feature-box` (col-lg-4 col-md-6;
     third col-md-12): `img` (`img/features/1.jpg` / `2.jpg` / `3.jpg`) +
     `div.fb-text`: `h5` — **Chemical Research · Engineering ·
     Manufacturing** — + `p` + `a.fb-more-btn` "Read More" (12px uppercase,
     color `#ffc000`, `border: 2px solid #ffc000`, padding 15px,
     min-width 128px).
  5. Clients (`section.clients-section.spad`): centered `div.client-text`
     (text-align center, margin-bottom 90px): `h2` (weight 300, margin-bottom
     40px) "A group of productive enterprises that produce or supply Goods,
     Services, or Sources of Income" + `p`; then `div#client-carousel.client-
slider.owl-carousel` of FIVE `div.single-brand` logo images
     (`img/clients/1.png` … `5.png`).
  6. Testimonial (`section.testimonial-section`): `container-fluid` split —
     left `col-lg-6.p-0` = `div.testimonial-bg.set-bg` (bg image
     `img/testimonial-bg.jpg`, height 100%); right `col-lg-6.p-0` =
     `div.testimonial-box` (bg `#17172d`, padding 100px 15px 70px) >
     `div.testi-box-warp` (max-width 740px): `h2` "Client's Testimonials" +
     `div.testimonial-slider.owl-carousel` of TWO `div.testimonial` items:
     quote `p` (Lorem ipsum) + `img.testi-thumb` (avatar) + `div.testi-info`:
     `h5` "Michael Smith" + `span` "CEO Industrial INC". Owl dots.
  7. CTA band (`section.cta-section`, bg `#ffc000`, padding 33px 0): row
     align-items-center — `col-lg-9`: `h2` (white, 37px, weight 300) "We
     produce or supply Goods, Services, or Sources"; `col-lg-3.text-lg-right`:
     `a.site-btn.sb-dark` "contact us".
  8. Video (`section.video-section.spad`): `col-lg-6` `div.video-text`: `h2`
     (weight 300, margin-bottom 40px) "We produce or supply Goods, &
     Services" + `p` + `a.site-btn` "Read More"; `col-lg-6` `div.video-box`
     (bg image `img/video-box.jpg` via `data-setbg`, flex centered) with
     `a.video-popup` play button linking to a YouTube video
     (https://www.youtube.com/watch?v=wbnaHgSttVo).
  9. Footer (`footer.footer-section`, bg `#17172d`): row of columns —
     about widget (blurb `p` + social icon links fa-facebook / fa-twitter /
     fa-dribbble / fa-behance); "Useful Resources" link column (Jobs
     Vacancies · Client Testimonials · Green Energy · Chemical Research ·
     Oil Extractions · About our Work); "Our Solutions" link column (Metal
     Industry · Agricultural Engineering · Green Energy · Chemical Research ·
     Oil Extractions · Manufacturing); "Contact Us" column (Main Str, no 23
     NY, New York PK 23589 · +546 990221 123 · contact@industryalinc.com +
     social icons). Bottom bar `div.footer-buttom` (sic — class typo in the
     original; bg `#03031b`, margin-top 55px): left `.copyright` p (14px,
     color `#646470`, padding-top 25px) "All rights reserved | made with
     ♥ by Colorlib" (monorepo credit) + right `ul.footer-menu` (Home / About
     us / Solutions / Blog / Contact).
  10. Search modal (`div.search-model`): full-screen overlay opened by the
      `search-switch` button, containing a large centered search input
      (`form.search-form`).
- **Design tokens extracted from the preview CSS (`css/style.css`) + live
  computed styles:**
  - Primary brand **yellow `#ffc000`** (many uses): `.site-btn` bg,
    `.cta-section` bg, `.hero-item h2 span` highlight blocks, `.search-switch`
    bg, `.fb-more-btn` border + text, footer link hovers.
  - Dark navy **`#081624`**: `.header-top` bg, `.sb-dark` bg, `.sb-white`
    text color, nav link color, default text color for headings/body.
  - Mid blue-grey **`#304a5f`** (secondary button/bg accents),
    `#e3f0fa` (light blue-grey info bg).
  - Dark section backgrounds: **`#17172d`** (`.testimonial-box`,
    `.footer-section`), **`#03031b`** (`.footer-buttom`),
    `#393958` / `#39334f` (footer widget/tone hover shades).
  - Muted text: `#718090` (secondary text), `#646470` (footer copyright),
    `#999` (footer link color), `#333` (footer link borders).
  - White `#fff` (buttons, hero text, nav active); black `#000` (image
    overlays).
  - Font: **"Open Sans", sans-serif** — the ONLY `font-family` declared in
    `style.css` (body + headings; load via Google Fonts `<link>` in
    `index.html`).
  - Buttons `.site-btn`: 14px, weight 600, uppercase, min-width 186px,
    padding 23px 47px, bg `#ffc000`, white text, NO radius (flat), hover
    keeps white text. Variants: `.sb-white` (white bg, `#081624` text),
    `.sb-dark` (`#081624` bg, white text). `.fb-more-btn`: 12px uppercase,
    `#ffc000`, 2px solid border, padding 15px, min-width 128px.
  - Hero: `.hero-item` height 777px, flex centered; h2 90px weight 300
    white; each `span` bg `#ffc000`, padding-left 25px, padding-bottom 15px;
    carousel arrows white squares with black icons, dots below.
  - Sections: `.spad` = padding 103px 0; `.cta-section` padding 33px 0;
    `.services-warp` max-width 1227px, `margin: -91px auto 0`, white bg,
    shadow, z-index 99; `.testimonial-box` bg `#17172d`, padding
    100px 15px 70px; `.testi-box-warp` max-width 740px; `.client-text h2` /
    `.video-text h2` weight 300 margin-bottom 40px; `.cta-section h2` 37px
    weight 300 white; `.copyright` 14px `#646470` padding-top 25px.
  - Nav links 15px weight 600 `#081624`, padding 32px 16px, margin-right
    35px, active yellow underline; `.header-top` bg `#081624` padding 14px
    40px; `.search-switch` absolute right, 83px wide, full height, bg
    `#ffc000`, white icon 25px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/dynamo-<n>/<w>/<h>`); icons → lucide-react (Search,
  Phone, MapPin, Cog, HardHat, Leaf, Zap, Droplets, Factory, Play,
  ChevronLeft, ChevronRight, Quote, Facebook, Twitter, Dribbble, Behance,
  Heart, Menu); Open Sans via Google Fonts `<link>` in `index.html`; brand
  yellow `#ffc000` in `@theme` so shared Button/ButtonLink and highlight
  blocks resolve correctly; hero headline rendered as stacked lines on solid
  yellow blocks; services warp overlaps the hero (negative top margin, white
  card, shadow); carousels (hero, clients, testimonials) implemented as
  simple sliders with prev/next + dots (hero auto-advances); search modal is
  implemented and toggled by the yellow search button. No asset/CSS/font-file
  copying. Demo copy paraphrased but same kinds (industrial services + about
  blurb + client logos + testimonials + yellow CTA + video + dark footer).
  Demo typos fixed: "Chemichal Reserach" → "Chemical Research",
  "Profesional Workers" → "Professional Workers", "Manufactoring" →
  "Manufacturing", "footer-buttom" class typo not reproduced. Contact email
  "contact@industryalinc.com" → paraphrased (e.g. hello@dynamo.com).
  Testimonial portraits: picsum has no verified male headshots, so the
  speaker name is paraphrased to match the available portrait ("Michael
  Smith" → "Sarah Mitchell", role "CEO, Dynamo Energy") — content-kind
  latitude, noted in the PR. Subject-verified picsum IDs used for
  backgrounds: 616 (steel truss roof — hero 1), 663 (suspension bridge —
  hero 2), 870 (twilight lighthouse — features bg), 903 (night sky —
  testimonial bg), 693 (bridge in fog — video box); feature card images are
  seeded picsum placeholders (small thumbnails, not subject-critical).
- **Differs from Millwright (ColorLib Industries — a DIFFERENT source
  template):** navy/yellow industrial palette (not orange); dark topbar +
  dark sticky nav info boxes; hero headline on yellow blocks (not plain white
  uppercase); overlapping white services warp; yellow CTA band with dark
  button; video section with popup; split testimonial with dark box on the
  right; dark `#17172d` footer with `#03031b` bottom bar and a right-aligned
  footer menu.

Dynamo lives in `apps/dynamo` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) plus the repo-standard Navbar/Footer chrome
(adapted to the dark topbar + yellow search button + centered nav and the
dark 4-column footer with bottom bar).

## Requirements

### Requirement: Header

The system SHALL render a dark topbar, a centered navigation with brand,
contact info boxes, a yellow search button, and section links.

#### Scenario: Header content

- **GIVEN** the Dynamo page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a dark topbar strip with short blurb text
- **AND** the header SHALL show the site brand "Dynamo" on the left
- **AND** the header SHALL show a phone number, an email, and an address in info boxes on the right
- **AND** the header SHALL show a yellow search button
- **AND** the header SHALL show links HOME (active), ABOUT US, SOLUTIONS, BLOG, CONTACT

#### Scenario: Solutions dropdown

- **GIVEN** the header is rendered
- **WHEN** the user activates the SOLUTIONS link
- **THEN** a dropdown SHALL open with the item Elements

#### Scenario: Mobile menu

- **GIVEN** the header is rendered at a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links SHALL expand into a stacked menu

#### Scenario: Search modal

- **GIVEN** the header is rendered
- **WHEN** the user clicks the search button
- **THEN** a full-screen search overlay SHALL open with a search input
- **AND** the overlay SHALL close when the user dismisses it

### Requirement: Hero slider

The system SHALL render a full-width hero slider of at least two slides, each
with a background image, a three-line headline on yellow highlight blocks,
and two call-to-action buttons.

#### Scenario: Slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show two slides with the headline lines "Power", "& Energy", and "Industry"
- **AND** each slide SHALL show a "Read More" button and an "our Services" button

#### Scenario: Headline styling

- **GIVEN** a hero slide is displayed
- **WHEN** the user inspects the headline
- **THEN** each headline line SHALL be white text on a solid yellow highlight block

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates a previous/next arrow or a dot
- **THEN** the slider SHALL advance to the corresponding slide

### Requirement: Services section

The system SHALL render a white services grid overlapping the hero bottom
with six service items (icon + title + blurb).

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show six services titled "Mechanical Engineering", "Professional Workers", "Green Energy", "Power Engineering", "Oil & Lubricants", and "Power & Energy", each with an icon and a blurb
- **AND** the white services card SHALL overlap the bottom of the hero

### Requirement: Features section

The system SHALL render a features section on a background image with three
cards (image, title, blurb, Read More link).

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show three cards titled "Chemical Research", "Engineering", and "Manufacturing"
- **AND** each card SHALL show an image, a blurb, and a yellow-outlined "Read More" link

### Requirement: Clients section

The system SHALL render a centered client blurb heading followed by a logo
carousel.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL show the heading "A group of productive enterprises that produce or supply Goods, Services, or Sources of Income"
- **AND** a carousel of five client logo images

#### Scenario: Logo carousel navigation

- **GIVEN** the client logo carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next set of logos

### Requirement: Testimonial section

The system SHALL render a split testimonial section with a background image
on the left and a dark box on the right containing a heading and a quote
carousel.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a background image on the left half
- **AND** the right half SHALL show the heading "Client's Testimonials"
- **AND** at least one testimonial SHALL show a quote, an avatar, the name "Sarah Mitchell", and the role "CEO, Dynamo Energy"

#### Scenario: Testimonial carousel navigation

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next testimonial

### Requirement: CTA band

The system SHALL render a solid yellow call-to-action band with a white
headline on the left and a dark "contact us" button on the right.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the heading "We produce or supply Goods, Services, or Sources" in white on the yellow band
- **AND** a dark "contact us" button on the right

### Requirement: Video section

The system SHALL render a video section with text and a "Read More" button on
the left and a play button over a background image on the right.

#### Scenario: Video content

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL show the heading "We produce or supply Goods, & Services" with a blurb and a "Read More" button
- **AND** a play button over the video background image on the right

#### Scenario: Video popup

- **GIVEN** the video play button is displayed
- **WHEN** the user activates it
- **THEN** a video lightbox SHALL open with the linked video

### Requirement: Footer

The system SHALL render a dark footer with an about column (brand + social
icons), three link columns, and a bottom bar with copyright and a footer
menu.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an about column with a blurb and social icons (Facebook, Twitter, Dribbble, Behance)
- **AND** a "Useful Resources" column with six links
- **AND** an "Our Solutions" column with six links
- **AND** a "Contact Us" column with address, phone, and email
- **AND** a dark bottom bar SHALL show a copyright notice on the left and the footer menu (Home, About us, Solutions, Blog, Contact) on the right

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Dynamo app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero slider, services, features, clients, testimonial, CTA band, video section, and footer in order
- **AND** the document title SHALL be "Dynamo — Industry Inc Template"

## Verification checklist

- [ ] `openspec/specs/template-dynamo/spec.md` present with the REAL section
      list (header → hero slider → services → features → clients →
      testimonial → CTA band → video section → footer).
- [ ] Design tokens above (brand yellow `#ffc000`, dark navy `#081624`,
      `#17172d` / `#03031b` dark sections, `#304a5f`, muted `#718090` /
      `#646470` / `#999`, Open Sans, 14px uppercase 600-weight flat buttons,
      90px weight-300 hero headline on yellow blocks, overlapping white
      services warp, dark 4-column footer with bottom bar) captured in the
      spec.
- [ ] `docs/templates/dynamo/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh dynamo`,
      PR lists source (ColorLib Industry Inc), preview URL, tokens, and what
      differs.

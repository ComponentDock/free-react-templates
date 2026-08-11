# Template: Artisan (Personal Portfolio Template)

## Purpose

Artisan is a single-page personal-portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Kenedy" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Kenedy" — personal portfolio / creative
  professional one-pager for "Kenedy Jackson, Senior Creative Designer and
  Content Developer" (source: https://colorlib.com/wp/template/kenedy/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/kenedy/
  (HTTP 200, ~55 KB HTML fetched; `css/main.css` ~76 KB parsed for tokens).
  Title tag: "Kenedy Personal". Bootstrap 4 + owl-carousel (brands +
  testimonials) + wow.js + linearicons + font-awesome; no AOS.
- **Screenshot analyzed:** `kenedy-free-template.jpg` (TEMPLATES.md) — clean
  minimalist personal portfolio: white page, hero with a small periwinkle
  speech-bubble "It's me" above a big bold black name "Kenedy Jackson", role
  line "Senior Creative **Designer** and Content **Developer**" (Designer
  coral-red, Developer periwinkle-blue), a coral pill-shaped "Hire Me" button,
  and a photo of a smiling man with crossed arms over a soft periwinkle
  (#90acd1-ish) block on the right. Logo top-left: coral-red square with a
  white "K". Below the hero, a floating white rounded "brands" card with
  grayscale wordmarks (Forbes, dribbble, 99designs, colorlib, AWWWARDS). This
  matches the live preview 1:1.
- **Section order (1:1):** Header (`#header`, absolute over the hero, logo
  image left, superfish menu right) → Hero (`home-banner-area`, light bg image
  cover, left text column + right photo) → Brands strip (`brands-area`, white
  rounded-100 card overlapping the hero bottom, 5 grayscale logos) → About
  (`about-area.section-gap`, split: photo left, "about myselt" + 2 paragraphs
  - white "More Info" + coral "Resume" buttons right) → Latest Works
    (`work-area.section-gap-top.section-gap-bottom-90`, bg #f9f9ff, filter tabs
  - 6 project cards with coral hover overlay) → Job History
    (`job-area.section-gap-top.section-gap-bottom-90`, 4 rounded #f9f9ff job
    cards: role/company left + pill date right + description) → Service Offers
    (`service-area.section-gap`, bg #f9f9ff, 4 colored service cards) →
    Testimonials (`testimonials_area.section-gap`, 3 centered quote slides with
    stars, prev/next + dot bars) → Contact Me (`contact-area.section-gap`, solid
    coral #e45447 band, white title + 3 contact boxes + white "Hire Me" pill) →
    Footer (`footer-area`, white, centered logo + "Follow Me" social icons +
    copyright bar).
- **Design tokens extracted from the preview CSS:**
  - Brand primary: **#e45447** (coral red) — `.primary-btn` bg, `::selection`,
    nav link hover/active, `.section-title h2:before/:after` dot+line
    decoration, work hover overlay `.overlay-bg` (opacity .80), filter tab
    active/hover, owl-dot active, testimonial star hover state, footer social
    icon hover, copyright link.
  - Secondary: **#90acd1** (periwinkle) — `.banner-content .me` "It's me"
    bubble bg + triangle tail, `.designation .developer` text, `.primary-btn.white`
    border, `.single-job` date pill border, 4th service card bg, inner-page
    `.banner-area` bg.
  - Light section bg: **#f9f9ff** — `.work-area`, `.service-area`,
    `.single-job` cards.
  - Heading ink: **#222222** (Poppins 600 default; `.banner-content h1` 60px/
    700/66px; `.section-title h2` 48px/700 capitalize; nav links #222 16px).
  - Body: **#777777** — Roboto 15px/1.625em.
  - Service card palette (one per card): **#e2a599** terracotta, **#715f69**
    mauve-brown, **#e45447** coral, **#90acd1** periwinkle.
  - Star gold: **#ffc000** (testimonial stars); footer social idle **#cccccc**
    36px; `.footer-logo h4` "Follow Me" #777777 21px/700.
  - Brand strip: bg #fff, `margin-top: -75px`, border-radius **100px**,
    padding 64px 14px, box-shadow `0 20px 50px rgba(153,153,153,0.2)`, logos
    `filter: grayscale(100%)` + `opacity: .5`, hover → full color/opacity 1.
  - Fonts: **"Poppins", sans-serif** (headings h1-h6, nav links, buttons) and
    **"Roboto", sans-serif** (body, `.designation` role line 30px/400/42px,
    max-width 390px). Both via Google Fonts `<link>`.
  - Buttons: `.primary-btn` pill — bg #e45447, white 15px/600, padding 0 52px,
    border-radius **40px**, border 1px #e45447; hover: bg #fff + coral text
    with a staggered letter-by-letter animation (the button renders its label
    as `<span>` per letter + a `data-text` pseudo-element that slides down).
    Variants: `.white` (bg #fff, border #90acd1, text #e45447); `.single-job`
    (bg #fff, border #90acd1, text #222, padding 0 28px).
  - Section title decoration: h2 with `:before` 10px dot (#e45447,
    border-radius 7px) + `:after` 100px × 2px line (#e45447), positioned
    bottom-left; centered white version on the coral contact band.
  - Radii: 40px (pill buttons), 100px (brand strip), 10px (work images,
    job cards), 8px ("It's me" bubble), 5px (service cards, work cards).
  - Navbar: `#header` absolute, transparent over hero; `.nav-menu a` Poppins
    16px/500 #222 capitalize, hover/active #e45447; `.nav-menu > li`
    margin-right 50px; dropdowns white with `0 0 30px rgba(127,137,161,0.25)`
    shadow; when scrolled (`header-scrolled`) fixed, bg #fff, shadow
    `-21.213px 21.213px 30px rgba(158,158,158,0.3)`; logo `#logo h1` 34px/700
    letter-spacing 3px with 4px #e45447 left border (index page uses a logo
    image: coral square + white "K" per screenshot).
  - Contact band: bg #e45447; `.contact-title h2` white 48px with centered
    white dot+line; `.contact-box h4` white 21px/700 (phone, email, website —
    plain text, not links); white pill "Hire Me" (white bg, #000 text; hover
    transparent bg + white text).
  - Testimonials: `.testi_item` centered, quote mark image, h4 name 21px/700,
    5 stars (#ffc000), quote p max-width 570px; owl dots = 40×4px bars
    #eeeeee, active #e45447; prev/next arrows #000 flanking.
  - Job cards: bg #f9f9ff, radius 10px, padding 40px 30px, mb 30px; `.top-left h4`
    21px/700 #000; company p; `.bottom-sec` margin-top 30px.
  - Work cards: `.single-work` radius 5px, mb 30px; image radius 10px;
    hover → coral overlay opacity .80 + centered white h4 title 21px + white
    `.cat` 15px.
  - Footer: white, `.footer-logo` centered (logo img + "Follow Me" h4), 4
    social icons (facebook, twitter, dribbble, behance) 36px #cccccc
    (margin 25px 0 50px), hover #e45447; `.footer-bottom` centered copyright
    "© <year> All rights reserved | This template is made with ♥ by Colorlib"
    (ColorLib credit replaced with original attribution, link #e45447).
- **Recreation decisions:** hero photo + about photo + work images → seeded
  picsum; hero background image → light #fff / very-light background with a
  periwinkle (#90acd1) block or shape behind the photo (per screenshot); no
  copied images; icons → lucide-react (Monitor, Smartphone, Database,
  BarChart3 for services; Star for testimonials; ChevronLeft/ChevronRight for
  slider) + inline SVG brand icons (Facebook, Twitter, Dribbble, Behance)
  since lucide removed brand icons; brand strip wordmarks → grayscale text
  logos (Forbes, dribbble, 99designs, AWWWARDS, Colorlib) with grayscale +
  opacity-50 treatment; logo → coral (#e45447) square with a white "K" (or
  site initial) per the screenshot; tokens #e45447 / #90acd1 / #f9f9ff /
  #222222 / #777777 / #e2a599 / #715f69 / #ffc000 / #cccccc in `@theme`;
  Poppins + Roboto via Google Fonts `<link>` in `index.html`.

Artisan lives in `apps/artisan` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent header over the hero with a logo on the
left and a menu of links on the right.

#### Scenario: Navbar content

- **GIVEN** the Artisan page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the logo on the left (coral #e45447 square
  with a white letter, per the original's logo mark)
- **AND** the header SHALL show menu links for Home, About, Portfolio, Pages,
  Contact, Service, and Blog on the right

#### Scenario: Navbar styling

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is displayed
- **THEN** the link SHALL be Poppins 16px weight 500, capitalized, in #222222
- **AND** the link SHALL turn coral (#e45447) on hover

#### Scenario: Dropdowns

- **GIVEN** the navbar is rendered
- **WHEN** the user activates the "Pages" item
- **THEN** a dropdown SHALL reveal an "Elements" link
- **WHEN** the user activates the "Blog" item
- **THEN** a dropdown SHALL reveal "Blog Home" and "Blog Single" links

#### Scenario: Scrolled header

- **GIVEN** the navbar is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the header SHALL become fixed with a white background and a soft
  shadow

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user activates the hamburger toggle
- **THEN** the nav links SHALL be reachable via the collapsible menu

### Requirement: Hero banner

The system SHALL render a full-screen light hero with a speech-bubble
eyebrow, the person's name, a role line with colored keywords, a coral pill
button, and a photo on the right.

#### Scenario: Hero content

- **GIVEN** the Artisan page is rendered
- **WHEN** the hero is in view
- **THEN** the hero SHALL show a periwinkle (#90acd1) speech bubble labeled
  "It's me" with a small triangle tail, white text, radius 8px
- **AND** the hero SHALL show the name "Kenedy Jackson" (Poppins 700, 60px,
  #222222)
- **AND** the hero SHALL show the role line "Senior Creative Designer and
  Content Developer" (30px, weight 400) with "Designer" in coral (#e45447)
  and "Developer" in periwinkle (#90acd1)
- **AND** the hero SHALL show a coral (#e45447) pill button labeled "Hire Me"
  (radius 40px, white 15px/600 text)

#### Scenario: Hero photo

- **GIVEN** the hero is rendered
- **WHEN** the right column is in view
- **THEN** it SHALL show a portrait photo (seeded picsum) over a soft
  periwinkle block, matching the original's light background treatment

### Requirement: Brands strip

The system SHALL render a white rounded card overlapping the hero's bottom
edge, containing grayscale client wordmarks.

#### Scenario: Brand logos

- **GIVEN** the brands strip is rendered
- **WHEN** the page loads
- **THEN** the strip SHALL be a white rounded (radius 100px) card pulled up
  over the hero bottom with a soft shadow
- **AND** it SHALL show five wordmarks (e.g. Forbes, dribbble, 99designs,
  AWWWARDS, Colorlib) in grayscale at reduced opacity
- **AND** each wordmark SHALL return to full color and opacity on hover

### Requirement: About section

The system SHALL render a split section with a photo on the left and an
"about" heading, two paragraphs, and two buttons on the right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a portrait photo (seeded picsum)
- **AND** the right column SHALL show the section title "About Myself" (the
  original's "about myselt" typo is corrected)
- **AND** the right column SHALL show two supporting paragraphs
- **AND** the right column SHALL show a white "More Info" button (white bg,
  1px #90acd1 border, coral text) and a coral "Resume" pill button

### Requirement: Latest works section

The system SHALL render a light-gray (#f9f9ff) portfolio section with filter
tabs and six project cards.

#### Scenario: Section title

- **GIVEN** the works section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Latest Works" with the coral
  dot-and-line decoration below it
- **AND** the section SHALL show a short intro paragraph

#### Scenario: Filter tabs

- **GIVEN** the works section is rendered
- **WHEN** the tabs are displayed
- **THEN** the section SHALL show filter tabs "All Categories", "Branding",
  "Creative Work", and "Web Design"
- **AND** the active (or hovered) tab SHALL turn coral (#e45447)

#### Scenario: Work cards

- **GIVEN** the works section is rendered
- **WHEN** the cards are in view
- **THEN** it SHALL render six project cards in a 3-column grid (stacking on
  mobile), each with an image (seeded picsum, radius 10px)
- **AND** hovering a card SHALL reveal a coral overlay (opacity ~0.8) with a
  white title (e.g. "2D Vinyl Design") and a white category line (e.g.
  "Client Project")

### Requirement: Job history section

The system SHALL render a section with four rounded job cards showing role,
company, date range, and a description.

#### Scenario: Job cards

- **GIVEN** the job history section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Job History" with the coral
  dot-and-line decoration
- **AND** it SHALL render four cards (2-column grid, stacking on mobile), each
  with a light-gray (#f9f9ff) background, radius 10px, padding ~40px 30px
- **AND** each card SHALL show the role (e.g. "Senior Creative Design") in
  21px weight 700, the company (e.g. "Old Bird IT, New York") below it, a
  white pill date badge ("Jul '15 to Present", 1px #90acd1 border) on the
  right, and a short description paragraph

### Requirement: Service offers section

The system SHALL render a light-gray (#f9f9ff) section with four colored
service cards.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Service Offers" with the coral
  dot-and-line decoration
- **AND** it SHALL render four cards in a 4-column row (stacking on mobile),
  each with a distinct background — #e2a599 terracotta, #715f69 mauve-brown,
  #e45447 coral, #90acd1 periwinkle
- **AND** each card SHALL show an icon, a white title (e.g. "Web Design" with
  "Web" on its own line), and a short white description

#### Scenario: Service icons

- **GIVEN** a service card is rendered
- **WHEN** the card is in view
- **THEN** the card SHALL show a lucide icon matching the original linearicon
  (screen, laptop-phone, database, chart-bars)

### Requirement: Testimonials section

The system SHALL render a centered testimonial slider with three slides.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a slide with a quote mark, the author name "Fanny
  Spencer" (21px weight 700), five gold (#ffc000) stars, and a centered quote
  paragraph
- **AND** prev/next arrows SHALL cycle between the three slides
- **AND** dot bars (40×4px, #eeeeee, active #e45447) SHALL indicate the active
  slide

### Requirement: Contact section

The system SHALL render a solid coral (#e45447) band with a white title, three
contact boxes, and a white "Hire Me" button.

#### Scenario: Contact content

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a coral (#e45447) background
- **AND** it SHALL show the white heading "Contact Me" with a centered white
  dot-and-line decoration and a short intro paragraph
- **AND** it SHALL show three contact boxes (phone number, email address, and
  website) as white 21px text
- **AND** it SHALL show a white pill "Hire Me" button (white bg, dark text)

### Requirement: Footer

The system SHALL render a white footer with a centered logo, "Follow Me"
social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show the logo and a "Follow Me" heading (21px,
  #777777)
- **AND** it SHALL show four social icons (Facebook, Twitter, Dribbble,
  Behance) in #cccccc that turn coral on hover
- **AND** it SHALL show a centered copyright line with an original attribution
  (the ColorLib credit is replaced)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Artisan app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections (Hero, Brands, About, Works, Job History, Services, Testimonials,
  Contact) in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Artisan — Personal Portfolio Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/artisan` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- artisan` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#e45447, #90acd1, #f9f9ff, #222222, #777777, #e2a599, #715f69, #ffc000, #cccccc, Poppins/Roboto) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `artisan-<n>`, Google Fonts links, lucide icons + inline SVG brand icons only)

# Template: Kraft (Creative Agency Portfolio)

## Purpose

Kraft is a single-page creative agency / portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "CardBoard" design (see TEMPLATES.md — line 356, first unchecked
item whose prep did not exist on main), built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a bold agency landing page: a dark navbar with a search field
over a full-viewport photo hero with a huge serif headline and a circular play
button, a white 2×2 portfolio grid whose images carry a hover caption overlay,
an "about" split with a dotted-paper background detail, a four-column icon
service row, a light testimonial carousel, an amber full-width CTA band, and a
**signature amber footer** (the footer background is the brand color). Kraft
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "CardBoard" — free Bootstrap 4 creative agency /
  portfolio website template (source: https://colorlib.com/wp/template/cardboard/).
  New name: **kraft** (kraft paper, evoking the cardboard material; single
  word, no collision with `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cardboard/`
  (HTTP 200, ~20KB) + stylesheet `css/style.css` (~42KB — Bootstrap 4 base
  vars + custom template styles), plus animate.css, owl.carousel,
  jquery.fancybox, ionicons, fontawesome, flaticon, simple-line-icons, aos.
  Fonts: **"DM Serif Display"** (headings: `h1,h2,h3 { font-family: "DM Serif
Display", sans-serif; font-weight: 900 }`) and **"Roboto Mono"** (body:
  `--font-family-sans-serif` and `body` default — the whole UI is set in a
  monospace-style sans), both served via inline Cloudflare `cf-fonts`
  `@font-face` blocks — in the recreation load them from Google Fonts `<link>`
  instead. The rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`cardboard-free-template.jpg`, 1200×946) confirms the visual design: dark
  full-bleed office-team photo hero with the huge white serif headline "We
  create awesome stuff." over a 30% black overlay, small "A website template by
  Colorlib" kicker, circular white play button; below the fold a white "Latest
  Work" section with a dark serif title, grey lorem, an amber "View All
  Portfolio" link, and the top of the 2×2 image grid (packaging product shot
  left, white bottle shot right).
- **Section order (1:1):**
  1. `header > nav.navbar.navbar-expand-lg.bg-dark` — dark navbar
     (`background: #343a40`, `container-fluid`): left `a.navbar-brand`
     "CardBoard"; right nav `ul.navbar-nav.ml-auto`: **Home** (`.active`),
     About, **Services** (`.dropdown`: Branding, Web Design, App Design, Start
     Up), Projects, Contact; then a `form.search-form` (magnifier icon +
     `input.form-control` placeholder "Search...").
  2. `div.slider-item.overlay` — full-viewport hero (`height: calc(100vh);
min-height: 700px; background-size: cover; background-position: top
center`, inline `background-image: url('images/hero_2.jpg')`; `:before`
     overlay `background: #000; opacity: .3`; `data-stellar-background-ratio=
0.5` parallax). Centered `div.slider-text`: kicker `p` "A website
     template by Colorlib" (fade-up), `h1.mb-4` **"We create awesome stuff."**
     (`font-size: 7rem; color: #fff; line-height: 1.2; font-weight: 700`),
     `div.btn-play-wrap` > `a.btn-play` — 60px white circle
     (`border-radius: 50%`) with `ion-ios-play` icon, opens a fancybox YouTube
     modal (`https://www.youtube.com/watch?v=_VnYSoMI-9Q`).
  3. `div.section.portfolio-section` — white portfolio section (`padding: 7em
0`): centered `col-md-8`: `h2.section-title` **"Latest Work"** (DM Serif
     Display, weight 300 base), lorem paragraph, link **"View All Portfolio"**.
     Below, `div.container-fluid > div.row.no-gutters` 2×2 grid of `a.work-
thumb` (each `col-sm-6 col-md-6 col-lg-6`, staggered `data-aos="fade"`
     delays 100–400): image (`border: 10px solid #fff`) + `div.work-text`
     hover overlay (absolutely centered, `opacity: 0` → 1 on hover;
     `h2` white 1.5rem weight 300 + `p` `rgba(255,255,255,0.5)`): **Startup
     Brand** / Business, **Corporate Design** / Design, **Unpacked Branding** /
     Business, **Rebranding Work** / Business. Then a centered "More
     Portfolio" `a.btn.btn-outline-white.px-4.py-3`.
  4. `div.section` — "Who We Are" split (row, no bg): text half
     `col-lg-5.ml-auto.mb-5.order-2` — `span.text-uppercase.text-primary`
     **"Who We Are"** (amber #ffc107), `h2.section-title` **"Do Things That
     Matters. Plan. Create. Grow."**, two lorem paragraphs, "Learn More"
     `a.btn.btn-outline-black`; image half `col-lg-6.order-1` —
     `figure.img-dotted-bg` (dotted-paper pattern `:after` behind, top-left
     -50px, 200×400px) containing `about_1.jpg` + absolutely-positioned
     `work_1.jpg` overlay (`img-absolute`, `data-aos="fade-left"`).
  5. `div.section` — services row of four `col-lg-3.mb-4` cards
     (`div.service`, staggered `data-aos="fade-up"` delays 0–300): `span.icon`
     (simple-line-icons, `font-size: 3rem; color: #ffc107`) + `h3` (1.2rem,
     weight 400) + lorem: **Designing** (icon-magnet), **Branding Identity**
     (icon-screen-desktop), **Mobile Application** (icon-screen-smartphone),
     **Search Engine** (icon-magnifier).
  6. `div.section.bg-light.block-11` — light (`#f8f9fa`) testimonial section:
     centered `h2.section-title` **"Testimonial"**, `div.nonloop-block-11.owl-
carousel` of four `div.item > div.block-33` cards (max-width 700px): `div.
vcard.d-flex` — `div.image` 60px circular photo (`border-radius: 50%;
border: 5px solid #fff`) + `div.name-text`: `h2.heading` name (**Carl
     Smith**, **Craig Darren**, **John Smith** ×2) + `span.meta` "Customer
     Corp."; `blockquote` (1.25rem) lorem.
  7. `div.bg-primary.py-5` — amber (`#ffc107`) full-width CTA band, centered
     `col-lg-7`: `h3.text-white.font-weight-normal` **"Let's do more
     together"**, white lorem paragraph, "Get In Touch!"
     `a.btn.btn-outline-white.px-4.py-3` → contact.html.
  8. `footer.site-footer` — **amber footer** (`background: #ffc809; padding:
7em 0`, black text): `div.row.mb-5` of four columns —
     `col-md-4` **"About Craft"** (`h3` 1rem bold `letter-spacing: .1em`
     black) + paragraph + `ul.footer-social` (twitter, facebook, linkedin,
     instagram `fa` icons, `p-2` links); `col-md-5.pl-md-5` **"Contact Info"**
     — Address ("34 Street Name, City Name Here, United States"), Telephone
     ("+1 242 4942 290"), Email ("info@yourdomain.com") rows
     (`span.caption` label + `span.caption-text`); `col-md-3` **"Quick Links"**
     — About, Terms of Use, Disclaimers, Contact; `col-md-3` (empty). Bottom
     bar (`div.row`): copyright year + heart + **repo-standard credit**
     (replace the Colorlib credit line).
  9. `div#loader.show.fullscreen` — fullscreen loader with circular SVG
     spinner (stroke **#ffc107** amber on #eeeeee track).
- **Design tokens extracted from `css/style.css` (Bootstrap 4 base + custom):**
  - Fonts: **"DM Serif Display", sans-serif** for `h1,h2,h3` (weight 900,
    black; hero h1 override: white, weight 700, 7rem); **"Roboto Mono"** for
    body/UI (`--font-family-sans-serif: "Roboto Mono", …`; `body` default,
    1rem/1.5, `#212529`). Google Fonts `<link>` in index.html.
  - Brand amber: **#ffc107** — `--primary`; `bg-primary` (CTA band), `text-
primary` ("Who We Are" kicker, "View All Portfolio" link), service icons,
    loader stroke; hover variant **#d39e00**.
  - Signature footer amber: **#ffc809** — `.site-footer` background (black
    text on amber).
  - Dark: **#343a40** — navbar `bg-dark`. Light: **#f8f9fa** — testimonial
    section `bg-light`. Body text **#212529**; `body { border-top: 2px solid
#dee2e6 }`.
  - Buttons: **square** (`border-radius: 0`), 2px border, uppercase, bold,
    14px, padding 10px 20px. `.btn-outline-white` — white border/text, hover:
    white bg + black text; `.btn-outline-black` — black border/text, hover:
    black bg + white text. Base `.btn` radius overridden to 0.
  - Work thumbs: images with **10px solid white border**; hover caption
    overlay centers `h2` white 1.5rem weight 300 + `p` rgba(255,255,255,0.5),
    opacity 0 → 1.
  - Play button: 60px white circle (`border-radius: 50%`) inside a 100px wrap.
  - Testimonial avatar: 60px circle, `border: 5px solid #fff`; card max-width
    700px centered.
  - Section rhythm: `.section { padding: 7em 0 }`; hero full-viewport (100vh /
    min-height 700px) with `rgba(0,0,0,0.3)` overlay; CTA band `py-5`; footer
    `padding: 7em 0`.
  - Micro-detail: `img-dotted-bg` dotted paper pattern (200×400px) behind the
    about image, offset -50px top-left; `data-aos` fade-up/fade-left entrance
    animations; body has a 2px light top border.
- **Recreation decisions:** navbar = dark #343a40 bar (Roboto Mono uppercase
  logo "Kraft" + Home/About/Services dropdown/Projects/Contact links + search
  input with Search icon; mobile: Tailwind collapse toggle with aria-expanded);
  hero = full-viewport cover photo (picsum) + rgba(0,0,0,0.3) overlay, kicker
  "A website template by Kraft"→ paraphrase ("A free template by Kraft"),
  huge DM Serif Display headline "We create awesome stuff.", 60px white circle
  play button (lucide Play; href to a placeholder YouTube-style link or # with
  aria-label); portfolio = 2×2 grid of picsum work images with 10px white
  border and hover caption overlay (h2 + category), "View All Portfolio" amber
  link, "More Portfolio" outline-white button; about = split with dotted bg
  detail (CSS radial-gradient dots instead of the dotted.jpg asset) + two
  stacked picsum images; services = 4 columns (lucide Magnet, MonitorSmartphone
  / Desktop, Smartphone, Search icons, 3rem amber); testimonial = bg-light
  carousel of 4 cards (60px round avatar + name + "Customer Corp." + quote —
  auto-advancing with dots/arrows, accessible); CTA band = amber bg, white
  heading + "Get In Touch!" outline button; footer = **amber #ffc809** with 4
  columns (About + 4 social circles, Contact Info rows, Quick Links, empty) +
  bottom bar with repo-standard credit; loader = amber circular spinner.
  Images `picsum.photos/seed/kraft-N/w/h`; fonts DM Serif Display + Roboto
  Mono via Google Fonts `<link>`; icons via lucide-react (Play, Search,
  Magnet, MonitorSmartphone, Smartphone, Twitter, Facebook, Linkedin,
  Instagram, MapPin, Phone, Mail).

Kraft lives in `apps/kraft` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Dark navigation bar

The system SHALL render a dark navbar with the site brand, primary links, a
Services dropdown, and a search field.

#### Scenario: Navbar content

- **GIVEN** the Kraft page is rendered
- **WHEN** the navbar is displayed at the top of the page
- **THEN** it SHALL have a dark (#343a40) background
- **AND** it SHALL show the site name "Kraft" on the left
- **AND** it SHALL show the links Home (active), About, Services, Projects,
  and Contact
- **AND** it SHALL show a search input with the placeholder "Search..." and a
  search icon on the right

#### Scenario: Services dropdown

- **GIVEN** the navbar is displayed
- **WHEN** the user activates the Services item
- **THEN** a dropdown SHALL open listing Branding, Web Design, App Design,
  and Start Up

#### Scenario: Mobile navigation

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the toggler
- **THEN** the navigation links SHALL be revealed/collapsed with the
  appropriate aria-expanded state

### Requirement: Full-viewport hero

The system SHALL render a full-height hero with a photographic background,
dark overlay, headline, kicker, and a circular play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL be full-viewport height with a cover background image and
  a dark overlay
- **AND** it SHALL show a small kicker line above the headline
- **AND** it SHALL show the headline "We create awesome stuff." in a large
  white serif (DM Serif Display) typeface
- **AND** it SHALL show a circular white play button centered below the
  headline

#### Scenario: Play button

- **GIVEN** the hero is displayed
- **WHEN** the user activates the play button
- **THEN** a video lightbox SHALL open (or the button SHALL be an accessible
  link to the video URL)

### Requirement: Portfolio grid

The system SHALL render a "Latest Work" section with a 2×2 grid of image
items that reveal a caption overlay on hover.

#### Scenario: Section header

- **GIVEN** the portfolio section is displayed
- **WHEN** its heading area renders
- **THEN** it SHALL show the heading "Latest Work" and a "View All Portfolio"
  link in the brand amber color

#### Scenario: Work items

- **GIVEN** the portfolio grid is displayed
- **WHEN** the four work items render
- **THEN** each item SHALL be an image with a 10px white border, a title, and
  a category label (e.g. "Startup Brand" / "Business", "Corporate Design" /
  "Design", "Unpacked Branding" / "Business", "Rebranding Work" / "Business")

#### Scenario: Hover caption

- **GIVEN** a work item is displayed
- **WHEN** the user hovers or focuses the item
- **THEN** a centered caption overlay SHALL fade in showing the title in
  white and the category in semi-transparent white

#### Scenario: More Portfolio button

- **GIVEN** the portfolio section is displayed
- **WHEN** the user reaches the end of the grid
- **THEN** a square outline "More Portfolio" button SHALL be shown

### Requirement: About section

The system SHALL render a split "Who We Are" section with an amber eyebrow,
serif heading, outline button, and a dotted-background image composition.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** the section renders
- **THEN** it SHALL show the uppercase amber label "Who We Are"
- **AND** it SHALL show the serif heading "Do Things That Matters. Plan.
  Create. Grow."
- **AND** it SHALL show supporting paragraphs and a square outline "Learn
  More" button
- **AND** the image side SHALL show a main image with a dotted background
  detail and a smaller overlapping image

### Requirement: Services row

The system SHALL render a four-column services row with amber icons.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the four cards render
- **THEN** each card SHALL show an amber icon, a heading, and a short
  description
- **AND** the headings SHALL be Designing, Branding Identity, Mobile
  Application, and Search Engine

### Requirement: Testimonial carousel

The system SHALL render a light-background testimonial carousel with avatar,
name, and quote cards.

#### Scenario: Testimonial content

- **GIVEN** the testimonial section is displayed
- **WHEN** the carousel renders
- **THEN** it SHALL have a light (#f8f9fa) background and the heading
  "Testimonial"
- **AND** it SHALL show a card with a circular avatar photo, a name, a
  "Customer Corp." label, and a quote
- **AND** the carousel SHALL advance between cards (auto or via controls)
  with accessible navigation

### Requirement: Call-to-action band

The system SHALL render an amber full-width CTA band with a heading and an
outline button.

#### Scenario: CTA content

- **GIVEN** the CTA band is displayed
- **WHEN** the band renders
- **THEN** it SHALL have the brand amber (#ffc107) background
- **AND** it SHALL show the white heading "Let's do more together" and a
  supporting white paragraph
- **AND** it SHALL show a square outline "Get In Touch!" button

### Requirement: Amber footer

The system SHALL render the signature amber footer with about text, social
links, contact info, quick links, and the bottom credit bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have the amber (#ffc809) background with black text
- **AND** it SHALL show an "About" column with a description and four social
  icon links (Twitter, Facebook, LinkedIn, Instagram)
- **AND** it SHALL show a "Contact Info" column with Address, Telephone, and
  Email rows
- **AND** it SHALL show a "Quick Links" column with About, Terms of Use,
  Disclaimers, and Contact
- **AND** the bottom bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Kraft app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, portfolio, about, services,
  testimonial, CTA band, and footer inside the main landmark in the
  original's order
- **AND** the document title SHALL be "Kraft — Creative Agency"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- kraft` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → portfolio →
      about → services → testimonial → CTA band → footer).
- [ ] Design tokens applied: brand amber #ffc107 (CTA band, "Who We Are"
      kicker, "View All Portfolio" link, service icons, loader stroke), footer
      amber #ffc809, dark navbar #343a40, light #f8f9fa (testimonials), DM
      Serif Display (headings) + Roboto Mono (body), square outline buttons
      (2px, uppercase, bold, 10px 20px).
- [ ] Navbar is dark with brand, Home/About/Services dropdown/Projects/Contact
      links, and a search input with icon; mobile toggler works with
      aria-expanded.
- [ ] Hero is full-viewport with cover photo, dark overlay, kicker, huge white
      serif headline "We create awesome stuff.", and a circular white play
      button.
- [ ] Portfolio renders a 2×2 grid of 10px-white-bordered images with hover
      caption overlays (title + category), an amber "View All Portfolio" link,
      and a "More Portfolio" outline button.
- [ ] About split shows the amber uppercase eyebrow, serif heading, outline
      "Learn More" button, and the dotted-bg image composition with an
      overlapping second image.
- [ ] Services row renders four cards with 3rem amber icons (Designing,
      Branding Identity, Mobile Application, Search Engine).
- [ ] Testimonial carousel renders on light bg with round avatars, names,
      "Customer Corp." labels, and quotes, with accessible navigation.
- [ ] CTA band is amber with white "Let's do more together" heading and an
      outline "Get In Touch!" button.
- [ ] Footer is amber #ffc809 with About + 4 social icons, Contact Info rows,
      Quick Links, and the repo-standard bottom credit.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (CardBoard), preview URL, tokens,
      and renames.

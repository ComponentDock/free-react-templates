# Template: Noir (Portfolio / Dark Minimal Agency)

## Purpose

Noir is a dark, minimal designer/developer studio portfolio landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Oraxol" website template (source:
https://colorlib.com/wp/template/oraxol/ — "Oraxol - Free Bootstrap 5 Template
by Colorlib"), built under a DIFFERENT name (Noir — French for "black", a
single lowercase word evoking the template's dark charcoal aesthetic; no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-13), per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears THREE times in TEMPLATES.md (dup-row trap): line 613
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one),
line 1119 (**Business (365)**) and line 2537 (**Portfolio (89)**) — all `- [ ]`
rows of the SAME template. ONE implementation covers all three rows (mark all
`[x]` with the same surge URL at bookkeeping time).

> Prep note (prep-stream 2026-08-13): the live preview
> `https://preview.colorlib.com/theme/oraxol/` is REACHABLE (curl verified,
> HTTP 200, ~34 KB HTML) and was analyzed for this prep; the stylesheet
> `css/style.css` (~57.7 KB) was fetched and token-extracted; the TEMPLATES.md
> screenshot (`oraxol-free-template.jpg`, 1200×946, viewed in browser) matches
> the live DOM section-for-section.

## Design reference (replication findings)

- **Original:** ColorLib "Oraxol" — page title "Oraxol - Free Bootstrap 5
  Template by Colorlib" (template page
  `https://colorlib.com/wp/template/oraxol/`). Category in TEMPLATES.md:
  **Bootstrap 5 (89)** (first of 3 dup rows; also Business (365) at 1119 and
  Portfolio (89) at 2537). The source is NOT shipped anywhere (no `[x]` row
  references it). The recreation brands itself **Noir** but keeps the same
  section structure, copy kinds and token palette.
- **Live preview DOM analyzed (verified 2026-08-13):**
  `https://preview.colorlib.com/theme/oraxol/` (HTTP 200, 34,140 bytes).
  Dark single-page studio portfolio, 7 `<section>`s + `<footer>` (sections
  separated by literal `<hr>` elements — `background: rgba(255,255,255,0.3)`):
  1. `<nav class="navbar navbar-expand-lg ftco-navbar-light">` — brand
     `navbar-brand d-flex align-items-center`: square `.icon-logo` box with
     `flaticon flaticon-layers` glyph + text "oraxol" (recreation:
     **Noir**); links `Work` (work.html), `Blog` (blog.html), `About`
     (blog.html — source quirk), `Contact` (contact.html); mobile toggler
     `fa fa-bars` + "Menu" text. Desktop navbar floats (margin-top 30px,
     transparent); scrolled → `background: #18191c !important`. Links
     14px/500 `#aaaaaa`, active/`nav-item.active` `#fff`.
  2. `#scroll` anchor hero `<section class="ftco-section ftco-no-pb
ftco-intro">` — centered column (`col-md-10 col-xl-8`):
     - `a.icon-scroll` — absolute left-edge bouncing down-arrow
       (`ion ion-ios-arrow-round-down`, animation `bounce 2600ms infinite`,
       links to `#scroll`);
     - `h1.mb-5` "We Create Minimal & Functional Website, Powered by The
       Latest `<span>Bootstrap 5 Alpha.</span>`" — 50px/500 white, the span
       `text-decoration: underline` (30px on mobile);
     - `p.mt-4` → `a.btn-custom` "Available for freelance work" + forward
       arrow (`ion ion-ios-arrow-round-forward`) — href="#helo" (dead anchor
       in source; recreation anchors to contact/footer);
     - below: `container-fluid.mt-4.mt-md-5` > `row.justify-content-end` >
       `col-lg-6` > `row.g-3`: FOUR `a.work-featured.img.glightbox`
       image tiles (`work-1..4.jpg`, height 150px, `data-aos="flip-left"`
       delays 100–400) each with a centered hover magnifier
       (`div.icon` + `fa fa-search`); glightbox = click-to-lightbox.
  3. `<section class="ftco-section">` — SERVICES: `heading-section
text-center`: `span.subheading` "Services" + `h2.mb-4` "We Provide the
     Perfect Solution" (40px/600); `row` of FOUR `div.services-wrap`
     (`col-md-6 col-lg-3`, centered, `data-aos="flip-left"` delays 100–400):
     `div.icon` 60px white flaticon glyph + `div.text h3` 24px. Cards:
     **Graphic Design** (flaticon-vector-art), **Web Design**
     (flaticon-monitoring), **Branding & Printing** (flaticon-branding),
     **Web Development** (flaticon-web).
  4. `<section class="ftco-section" id="scroll">` — PORTFOLIO:
     `span.subheading` "Portfolio" + `h2` "Our Portfolio"; SIX
     `div.work-wrap` (`col-md-6`, `data-aos="flip-left"` delays 100–600):
     `div.img` (background image `work-1..6.jpg`, height 550px, radius 4px) +
     `div.text` (padding 30px): `span.category` underlined
     ("Branding, Printing" / "Graphic Design" / "Web Development" / "Web
     Design, Web Development" / "Web Development" / "Web Design, Web
     Development") + `h3` 30px white link "High Quality Design Concept".
     (Source quirk: every card shares the same title — the recreation MAY
     vary the titles per project, noting it in the PR.)
  5. `<section class="ftco-section ftco-no-pt testimony-section">` —
     TESTIMONIALS: `span.subheading` "Testimonial" + `h2` "Satisfied
     Clients"; tiny-slider (`tns-outer`) of FIVE `div.testimony` blocks:
     `ion ion-ios-quote` icon + Duden paragraph ("Far far away, behind the
     word mountains…") + author name + `span.position` ("Roger Scott" /
     "Marketing Manager" — ALL FIVE blocks identical in the source;
     recreation MAY vary author names, noting it in the PR); tns controls:
     prev/next round buttons (40px, `border: 1px solid
rgba(255,255,255,0.3)`, white 20px chevrons) + 9px dots (`#ddd`,
     active `#999`).
  6. `<section class="ftco-section" id="scroll">` — TEAM:
     `span.subheading` "Our Team" + `h2` "Designer & Developer"; FOUR
     `div.team-wrap` (`col-md-6 col-lg-3`, bg `#18191c`, padding 20px,
     `data-aos="flip-left"` delays 100–400): `div.img` 120×120 avatar
     (`team-1..4.jpg`) with quarter-circle radius `50% 0 50% 50%`
     (top-left; hover flips to `0 50% 50% 50%`) + `div.text`: `h3` 22px/500
     name + `span.position` 15px underlined role. Members: John McArthur —
     CEO, Founder & Developer; Mark Sky — Graphic Designer; Kyle Becker —
     Web Designer; Alan Nortwood — CEO, Founder & Developer.
  7. `<section class="ftco-section" id="scroll">` — BLOG:
     `span.subheading` "Blog" + `h2` "Recent Blog"; THREE
     `div.blog-entry` (`col-md-6 col-lg-4`, `border: 1px solid
rgba(255,255,255,0.1)`): `div.block-20` cover image (`image_1..3.jpg`,
     background-size cover) + `div.text` (padding 20px 30px):
     `div.list-team` author chip (34px round `img` + `h3` "John Dorf",
     14px/500 `rgba(255,255,255,0.7)`), `p.meta` 13px ("Dec. 09, 2020" ·
     "3 Comments"), `h3.heading` 20px/500 white link "Grow your insights
     with inspiring news", excerpt paragraph (Duden lorem).
  8. `footer.ftco-footer` — FIVE `div.ftco-footer-widget` columns
     (`col-md-6 col-lg`): (1) brand (icon-logo + "oraxol" → **Noir**) +
     Duden paragraph + `ul.ftco-footer-social` (40px round links, bg
     `#161719`, white glyphs: fa-twitter / fa-facebook / fa-instagram);
     (2) "Explore" — About Us / Blog / Work; (3) "Quick Links" — Contact
     Us / Terms & Conditions / Privacy / Feedbacks; (4) "Categories" —
     Graphic Design / Web Design / Branding & Printing / Web Development
     (each with `fa fa-chevron-right`); (5) "Have a Questions?" —
     "203 Fake St. Mountain View, San Francisco, California, USA" (map
     marker icon) · "+2 392 3929 210" (phone icon) · "info@yourdomain.com"
     (paper-plane icon). Widget h2: 16px/500 uppercase white,
     letter-spacing 2px; body/links `rgba(255,255,255,0.4)`, links
     underlined, hover `#fff`. Bottom copyright bar
     (`container-fluid px-0 py-5 bg-darken`): "Copyright © <year> All
     rights reserved | This template is made with by Colorlib" (recreation:
     own credit line linking https://www.componentdock.com/ per policy).
- **Visual design (TEMPLATES.md screenshot `oraxol-free-template.jpg`,
  1200×946, viewed in browser 2026-08-13 + live DOM):** modern dark
  minimal studio/agency one-pager. Deep charcoal background (`#1d1e21`) with
  muted grey body text and white headings. Top: transparent navbar with
  square icon-logo + "oraxol" wordmark and grey links (Work/Blog/About/
  Contact). Hero: large white 50px headline with the "Bootstrap 5 Alpha."
  phrase underlined, a translucent white pill button "Available for
  freelance work", a small bouncing down-arrow at the left edge, and a row
  of four colourful 150px work tiles (blue/yellow pencil, red/document,
  pink/envelope, purple/abstract). Below, separated by thin light rules: a
  centered "SERVICES" label + "We Provide the Perfect Solution" heading
  with four square bordered cards (white line icons: pen-ruler, monitor,
  brochure, code-grid); "PORTFOLIO" + "Our Portfolio" with six large
  550px image cards each with an underlined category + title; a dark
  "TESTIMONIAL"/"Satisfied Clients" slider with quote marks; "OUR TEAM" +
  "Designer & Developer" with four dark cards with quarter-circle avatars;
  "BLOG" + "Recent Blog" with three bordered post cards (cover image,
  author chip, date · comments meta, title, excerpt); and a dark 5-column
  footer with social circles + copyright bar. Minimal, monochrome-dark,
  Poppins typography, generous 7em section padding.
- **Section order (1:1, verified from live DOM):** navbar → hero
  (scroll-arrow + h1 + freelance pill + 4 work-featured tiles) → services
  (4 cards) → portfolio (6 items) → testimonials (slider) → team (4 cards)
  → blog (3 cards) → footer (5 widgets + copyright). Sections joined by
  `<hr>` separators.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-13):**
  - Body: `background: #1d1e21` (dark charcoal), text `color: #aaaaaa`,
    `font-family: "Poppins", Arial, sans-serif`, 15px, line-height 1.8.
  - Dark surfaces: scrolled navbar + team cards `#18191c`; footer social
    circles `#161719`.
  - Navbar links: 14px, weight 500, `#aaaaaa` → `#fff` active/hover; brand
    white; toggler "Menu" (`fa fa-bars`), `font-size: 16px`,
    `letter-spacing: .1em`, uppercase, white.
  - `.btn-custom` (hero pill): uppercase, 13px, weight 700,
    `background: rgba(255,255,255,0.1)`, padding 4px 10px, `color: #fff`,
    `border-radius: 2px` (blog-link variant: uppercase 13px/600,
    `letter-spacing: 2px`, `color: #000` — unused in the shipped blog
    cards; skip it).
  - `.subheading`: 13px, uppercase, weight 600, `letter-spacing: 2px`,
    `color: #aaaaaa`.
  - `heading-section h2`: 40px, weight 600 (28px mobile).
  - Hero `h1`: 50px, weight 500, `#fff`, span `text-decoration: underline`
    (30px mobile); `.icon-scroll` 20px bouncing arrow.
  - `services-wrap`: padding 20px, `border: 1px solid
rgba(255,255,255,0.1)`; `.icon span` font-size 60px `#fff`; h3 24px.
  - `work-wrap`: margin-bottom 70px; `.img` height 550px, radius 4px;
    `.text` padding 30px; `.category` underlined; h3 30px `#fff`.
  - `work-featured` tiles: height 150px.
  - `team-wrap`: bg `#18191c`, padding 20px; `.img` 120×120,
    `border-radius: 50% 0 50% 50%` (hover `0 50% 50% 50%`); h3 22px/500;
    `.position` 15px underlined.
  - `blog-entry`: `border: 1px solid rgba(255,255,255,0.1)`; `.text`
    padding 20px 30px; `.heading` 20px/500 `#fff`; `.meta` 13px;
    `.list-team` author chip 14px/500 (`rgba(255,255,255,0.7)` name),
    34px round avatar.
  - Testimonial controls: prev/next 40px buttons, `border: 1px solid
rgba(255,255,255,0.3)`, white glyphs; dots 9px `#ddd`, active `#999`.
  - Footer: widget h2 16px/500 uppercase white, letter-spacing 2px;
    text/links `rgba(255,255,255,0.4)` (underline, hover `#fff`);
    social circles 40px, bg `#161719`.
  - Section separators: `<hr>` = `rgba(255,255,255,0.3)`.
  - Font: **Poppins** (Google Fonts, weights 200–700 loaded in the source;
    use 400/500/600/700) via `<link>` in `index.html`.
  - Motion: AOS (`fade-up` / `flip-left` with 100–600ms delays) + glightbox
    on image tiles + tiny-slider for testimonials + bouncing scroll arrow.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-5
  layout (NO Bootstrap dependency); the navbar floats transparent over the
  dark hero and turns solid `#18191c` on scroll, with a "Menu" hamburger on
  mobile; the hero's 4 work tiles and the portfolio images use seeded
  placeholders with a hover magnifier (lightbox optional — a simple
  accessible dialog or link, or omit and keep hover only; note in PR);
  testimonials render as a client-side slider (state + prev/next/dots, all
  5 blocks present in the DOM; author names MAY vary from the identical
  source blocks); AOS animations MAY be replaced by plain CSS
  transition/opacity or omitted (keep `data-aos`-free markup); the source's
  dead anchors (`#helo`, `work.html` etc.) become real section anchors
  (Work → portfolio, Blog → blog, About → team, Contact → footer/contact);
  placeholder images `picsum.photos/seed/noir-<n>/<w>/<h>` (hero tiles,
  portfolio, blog covers) — for the person-critical team/testimonial
  avatars use verified picsum `/id/` portraits (1027, 64, 823, 996 — see
  skill) since seeds are arbitrary; social icons via inline SVG brand
  icons (lucide-react removed brand icons); document title "Noir — Minimal
  & Functional Website Template"; brand "oraxol" → "Noir" everywhere; nav
  labels and copy kinds kept 1:1, Lorem/Duden text may be paraphrased.

Noir lives in `apps/noir` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Dark floating navbar with brand, section links and mobile menu

The system SHALL render a navbar at the top over the dark hero: a brand
(icon mark + "Noir"), four links (Work, Blog, About, Contact), and a mobile
hamburger labelled "Menu" that expands the links. The navbar SHALL be
transparent while at the top and turn solid dark `#18191c` on scroll.

#### Scenario: Navbar desktop state

- **GIVEN** the Noir page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** a navbar SHALL be shown at the top, transparent over the hero
- **AND** the brand SHALL show an icon mark next to the text "Noir" in white
- **AND** the navbar SHALL contain links Work, Blog, About and Contact, each
  anchored to its section
- **AND** link text SHALL be muted grey (`#aaaaaa`), turning white on hover
  and for the active section

#### Scenario: Navbar scrolled state

- **GIVEN** the user scrolls the page past the hero
- **WHEN** the navbar is scrolled
- **THEN** the navbar SHALL switch to a solid `#18191c` background with white
  brand and links

#### Scenario: Mobile menu

- **GIVEN** the Noir page is rendered on a viewport narrower than the desktop
  breakpoint
- **WHEN** the page loads
- **THEN** a hamburger toggler labelled "Menu" SHALL be shown instead of the
  inline links
- **AND** activating it SHALL expand/collapse the link list

### Requirement: Hero with headline, freelance pill and four work tiles

The system SHALL render a hero section containing, in order: a bouncing
scroll-down arrow at the left edge, a large white headline with the final
phrase underlined, a translucent "Available for freelance work" pill button
with a forward arrow, and a row of four image tiles with a hover magnifier.

#### Scenario: Hero content

- **GIVEN** the Noir page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL show a small bouncing down-arrow at its left edge
- **AND** an `h1` SHALL read "We Create Minimal & Functional Website, Powered
  by The Latest Bootstrap 5 Alpha." with "Bootstrap 5 Alpha." underlined
  (brand copy may be paraphrased, keeping the structure)
- **AND** a "Available for freelance work" pill button SHALL be shown below
  the headline with a forward arrow icon
- **AND** the button SHALL anchor to the contact/footer area

#### Scenario: Hero work tiles

- **GIVEN** the hero is displayed
- **WHEN** the tile row renders
- **THEN** FOUR square image tiles SHALL be shown in a row (2-up on small
  screens), each ~150px tall with a seeded placeholder image
- **AND** each tile SHALL reveal a centered magnifier icon on hover

### Requirement: Services section with four cards

The system SHALL render a services section with the uppercase label
"Services", the heading "We Provide the Perfect Solution", and four cards —
Graphic Design, Web Design, Branding & Printing, Web Development — each with
a 60px white icon above the title.

#### Scenario: Service cards

- **GIVEN** the Noir page is rendered
- **WHEN** the services section is displayed
- **THEN** a small uppercase "Services" label SHALL precede the heading "We
  Provide the Perfect Solution"
- **AND** four cards SHALL be shown side by side on desktop (2×2 on tablet)
- **AND** every card SHALL have a 1px `rgba(255,255,255,0.1)` border and a
  white line icon (e.g. PenTool, Monitor, Stamp, Code from lucide-react)
  above a 24px white title

### Requirement: Portfolio section with six project cards

The system SHALL render a portfolio section with the label "Portfolio", the
heading "Our Portfolio", and six project cards, each with a 550px-tall
image, an underlined category label and a 30px title link.

#### Scenario: Portfolio cards

- **GIVEN** the Noir page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** the label "Portfolio" and heading "Our Portfolio" SHALL be shown
  centered
- **AND** six project cards SHALL be shown (2 per row on desktop)
- **AND** each card SHALL show a large image (radius ~4px), an underlined
  category (e.g. "Graphic Design", "Web Design", "Branding & Printing",
  "Web Development") and a title link (source uses one repeated title —
  titles MAY be varied per project, noting it in the PR)

### Requirement: Testimonials slider

The system SHALL render a testimonials section with the label "Testimonial",
the heading "Satisfied Clients", and a slider of testimonial blocks — each
with a quote icon, a paragraph, an author name and an underlined position —
plus prev/next controls and dot navigation.

#### Scenario: Testimonial slider

- **GIVEN** the Noir page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the label "Testimonial" and heading "Satisfied Clients" SHALL be
  shown centered
- **AND** at least three testimonial blocks SHALL exist in the DOM, each
  with a quote icon, a review paragraph, an author name and a position
  (source repeats one block five times — authors MAY be varied)
- **AND** exactly one block SHALL be active at a time
- **AND** prev/next controls and dots SHALL switch the active block

### Requirement: Team section with four member cards

The system SHALL render a team section with the label "Our Team", the heading
"Designer & Developer", and four dark `#18191c` cards, each with a 120px
quarter-circle avatar, a 22px name and an underlined role.

#### Scenario: Team cards

- **GIVEN** the Noir page is rendered
- **WHEN** the team section is displayed
- **THEN** the label "Our Team" and heading "Designer & Developer" SHALL be
  shown centered
- **AND** four cards SHALL be shown side by side on desktop
- **AND** each card SHALL have the `#18191c` background, a 120×120 avatar
  with the quarter-circle radius `50% 0 50% 50%`, a name (e.g. John
  McArthur — CEO, Founder & Developer; Mark Sky — Graphic Designer; Kyle
  Becker — Web Designer; Alan Nortwood — CEO, Founder & Developer) and an
  underlined role

### Requirement: Blog section with three post cards

The system SHALL render a blog section with the label "Blog", the heading
"Recent Blog", and three bordered post cards, each with a cover image, an
author chip (round avatar + name), a meta line (date · comment count), a
20px title link and an excerpt.

#### Scenario: Blog cards

- **GIVEN** the Noir page is rendered
- **WHEN** the blog section is displayed
- **THEN** the label "Blog" and heading "Recent Blog" SHALL be shown centered
- **AND** three post cards SHALL be shown side by side on desktop
- **AND** each card SHALL have a 1px `rgba(255,255,255,0.1)` border, a cover
  image, an author chip (e.g. round avatar + "John Dorf"), a meta line
  (e.g. "Dec. 09, 2020" · "3 Comments"), a title link (e.g. "Grow your
  insights with inspiring news") and an excerpt paragraph

### Requirement: Dark footer with five widgets and copyright bar

The system SHALL render a dark footer with five widget columns — brand +
about text + social circles, Explore links, Quick Links, Categories, and
"Have a Questions?" contact details — plus a bottom copyright bar linking
https://www.componentdock.com/.

#### Scenario: Footer content

- **GIVEN** the Noir page is rendered
- **WHEN** the footer is displayed
- **THEN** widget one SHALL show the brand "Noir" with an icon mark, a short
  about paragraph and three round social icon links (40px, `#161719` bg)
- **AND** widget two SHALL be headed "Explore" with links About Us, Blog,
  Work
- **AND** widget three SHALL be headed "Quick Links" with links Contact Us,
  Terms & Conditions, Privacy, Feedbacks
- **AND** widget four SHALL be headed "Categories" with the four service
  names, each preceded by a chevron icon
- **AND** widget five SHALL be headed "Have a Questions?" with an address, a
  phone number and an email address
- **AND** a bottom bar SHALL show the copyright line with the recreation
  credit ("Component Dock") linking https://www.componentdock.com/

### Requirement: Section separators and overall rhythm

The system SHALL separate the main sections with thin light rules (1px
`rgba(255,255,255,0.3)` horizontal dividers) and use generous vertical
section padding (~7em), matching the source's `<hr>`-separated layout.

#### Scenario: Section dividers

- **GIVEN** the Noir page is rendered
- **WHEN** the user scrolls through the sections
- **THEN** each pair of adjacent main sections SHALL be separated by a thin
  translucent light horizontal rule

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-noir`
- [ ] `scripts/verify-app.sh noir` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with the source): transparent floating navbar
      (icon mark + "Noir", Work/Blog/About/Contact anchors, muted `#aaaaaa`
      links → white active, solid `#18191c` on scroll, "Menu" hamburger on
      mobile) → hero (bouncing left-edge scroll arrow + h1 50px/500 white
      with underlined trailing span + "Available for freelance work"
      pill `rgba(255,255,255,0.1)` radius 2px with forward arrow + 4×150px
      work tiles with hover magnifier) → services ("Services" label + "We
      Provide the Perfect Solution" h2 40px/600 + 4 cards: Graphic Design /
      Web Design / Branding & Printing / Web Development, 1px
      `rgba(255,255,255,0.1)` border, 60px white icon, 24px h3) →
      portfolio ("Portfolio" label + "Our Portfolio" + 6 cards: 550px image
      radius 4px, underlined category, 30px title) → testimonials
      ("Testimonial" label + "Satisfied Clients" + slider: quote icon +
      paragraph + author + underlined position; prev/next + dots) → team
      ("Our Team" label + "Designer & Developer" + 4 `#18191c` cards:
      120px avatar `50% 0 50% 50%` radius, 22px name, underlined role) →
      blog ("Blog" label + "Recent Blog" + 3 cards: cover image, author
      chip, "Dec. 09, 2020" · "3 Comments" meta, 20px title, excerpt) →
      footer (5 widgets: brand + about + social circles `#161719`,
      Explore, Quick Links, Categories with chevrons, "Have a Questions?"
      address/phone/email; copyright bar with Component Dock credit)
- [ ] Body `#1d1e21`, text `#aaaaaa`, Poppins 400/500/600/700 via Google
      Fonts `<link>` in `index.html`; dark surfaces `#18191c` (navbar
      scrolled + team cards) and `#161719` (social circles)
- [ ] `.btn-custom` hero pill: uppercase 13px/700, `rgba(255,255,255,0.1)`
      bg, 4px 10px padding, radius 2px
- [ ] subheading style: 13px uppercase weight 600 letter-spacing 2px
      `#aaaaaa`; section h2 40px/600 (28px mobile)
- [ ] Section separators: 1px `rgba(255,255,255,0.3)` horizontal rules
      between main sections; ~7em section padding
- [ ] Testimonial slider: all blocks in the DOM, one active, prev/next +
      dots controls
- [ ] Navbar scroll behavior: transparent → `#18191c` (tested with a
      scroll event or `IntersectionObserver`-free approach, jsdom-safe)
- [ ] Placeholder images via `picsum.photos/seed/noir-<n>/<w>/<h>` for hero
      tiles/portfolio/blog; verified picsum `/id/` portraits (1027, 64,
      823, 996) for team/testimonial avatars; no ColorLib assets
- [ ] Footer credit → "Component Dock" linking
      https://www.componentdock.com/; NO colorlib/oraxol strings in app
      code (provenance only in this spec + TEMPLATES.md + PR)
- [ ] PR description: source template (Oraxol), preview URL, design tokens,
      renames + placeholder notes, and which source quirks were varied
      (nav "About" href, identical testimonial blocks, repeated portfolio
      titles)

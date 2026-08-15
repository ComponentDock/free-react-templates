# Template: Prime (Bootstrap Digital Agency)

## Purpose

Prime is a single-page digital-agency / SaaS marketing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ultim8" Bootstrap 4 template
(source: https://colorlib.com/wp/template/ultim8/), built under a DIFFERENT
name (Prime — "the ultimate choice", echoing the source's "Ultim8") per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The page is a full one-pager: fixed navbar → split hero
with a rotating-word headline and a dashboard-image carousel → blue→mint
gradient strip → 6 service cards → image-background counters → portfolio
carousel → 4 pricing plans → "reasons + quote form" split section →
testimonial carousel → gradient newsletter → 3 blog cards → dark footer.

## Design reference (replication findings)

- **Original:** ColorLib "Ultim8" — "Ultim8 - Free Bootstrap 4 Template by
  Colorlib". It appears THREE times in TEMPLATES.md (dup rows at lines 522,
  1211, 2369) — the implementer must mark ALL THREE rows `[x]` with the surge
  URL when done (same source slug `ultim8`).
- **Preview URL:** `https://preview.colorlib.com/theme/ultim8/` — works
  (HTTP 200, ~59 KB HTML, fetched 2026-08-15). Master stylesheet
  `https://preview.colorlib.com/theme/ultim8/css/style.css` (~75.8 KB, fully
  extracted for tokens below). libs: bootstrap 4.3.1, jquery, owl.carousel,
  aos, magnific-popup, bootstrap-datepicker, flaticon + icomoon icon fonts.
  Google Font **Open Sans** (body — the ftco override at the END of
  style.css wins the cascade over Bootstrap's "Work Sans" body rule).
  Cross-checked against the TEMPLATES.md screenshot (`ultim8-free-template.jpg`
  1200×946, browser-viewed) — all match. The demo brands itself "ULTIM8";
  the recreation uses the NEW name **Prime**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, corporate,
  professional one-pager on white / light-gray (`#f0f0f0`/`#f8f9fa` bands)
  with dark text. The screenshot shows: fixed white navbar with bold "ULTIM8"
  logo, uppercase links, and a thin-bordered "GET A QUOTE" pill; split hero
  with the blue headline "Template for Digital Agency" + two CTAs on the left
  and layered laptop + phone **dashboard mockups** (line charts, bar graphs,
  data tables) on the right; a full-width **blue→mint gradient band** ("We
  Provide High Quality Services"); and the tops of three **blue circular
  service icons**. The live DOM adds the sections below the fold (portfolio,
  pricing, quote form, testimonials, newsletter, blog, footer).
- **Section order (1:1, from live preview DOM):**
  1. **Navbar** (`nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark
ftco-navbar-light`, id `ftco-navbar`, fixed): brand **"Ultim8."** +
     links **Home, About, Services, Work, Team, Pricing, Blog, Contact** +
     right-aligned CTA link **"Get a Quote"** (opens a request modal in the
     demo — recreation may scroll to the quote form instead). Dark at top of
     page (`bg-dark` #343a40), flips light (white) on scroll
     (`ftco-navbar-light`).
  2. **Hero** (`div.hero-wrap`, height 630px, 750px on mobile; overlay =
     light gradient `linear-gradient(45deg, #f0f0f0 0%, #fff 55%, #fff 100%)`):
     left column (col-4): `h1` **"Template for "** + `<strong class="typewrite">`
     rotating words **[Digital Agency, Portfolio, SEO Agency, Business]** (blue
     `#2f89fc`, 32px/40px, weight 400, strong 500, blinking caret bar), a
     paragraph ("A small river named Duden flows by their place and supplies
     it with the necessary regelialia."), and two CTAs — **"Get a Quote"**
     (`btn btn-primary px-4 py-3`, solid) and **"Our Portfolio"**
     (`btn btn-primary btn-outline-primary px-4 py-3`, outline). Right column
     (col-6): `div.slider-carousel.owl-carousel` with **3 dashboard images**
     (`images/dashboard_full_1.png` … `_3.png`).
  3. **Gradient strip** (`section.ftco-section.ftco-section-2`, padding 3em
     0, `div.overlay` = `linear-gradient(-45deg, #2f89fc 0%, #55fbc2 100%)`):
     white `h3.heading-white` **"We Provide High Quality Services"**.
  4. **Services** (`section.ftco-section.ftco-services`): centered
     `h2.heading-section` **"Our Service Keeps you Happy"** + `span.subheading`
     **"Search Engine & Social Media Optimization Experts"**. Row 1 — 3 cards
     (`div.media.block-6.services d-block text-center`): **Market Research,
     Business Strategy, Audience Analytics** (icon glyph + h3.heading + short
     blurb). Row 2 (`div.container-wrap mt-5` → `services-wrap`): 3 cards —
     **Logo Branding, Development, Online Marketing** (80px blue circle icon +
     longer blurb).
  5. **Counter band** (`section.ftco-section.ftco-counter.img`, id
     `section-counter`, inline `background-image: url(images/bg_1.jpg)`,
     padding 5em 0): 4 centered counters (`strong.number` + `span` label) —
     **6780 Happy Clients, 4500 Running Projects, Project Completed, Cups of
     Coffee**. Numbers white 34px weight 400; labels 16px
     `rgba(255,255,255,0.7)` (dark photo behind → white text).
  6. **Portfolio** (`section.ftco-section.ftco-work`): centered h2
     **"Our Portfolio"** + subheading **"We're Happy to share our complete
     Projects"**; owl-carousel of **6 works** (slides loop 3-visible):
     each item = category label **"Branding"** + title **"Work 01/02/03"**
     over a project image.
  7. **Pricing** (`section.ftco-section.bg-light`): centered h2 **"Our Best
     Pricing"** + subheading **"Pricing Plans"**; 4 `div.block-7` white cards
     (padding 30px, shadow `0 2px 5px rgba(0,0,0,0.03)`): **Free $0**
     ("100% free. Forever"), **Startup $19**, **Premium $49**, **Pro $99**
     ("All features are included"); each card lists feature rows
     (e.g. **150/450/250/450 GB Bandwidth**, **100/400/200/400 GB Storage**,
     **$1.00/$2.00/$5.00/$20.00 / GB Overages**, **All features**), a
     **"Get Started"** button (`btn btn-primary d-block` …) and an
     **"Enjoy All The Features"** link (3 cards use
     `btn-outline-primary d-block`; one solid).
  8. **Reasons + Quote form** (`section.ftco-quote`, split, no padding):
     LEFT col (`col-md-6 aside-stretch py-5 choose` — **solid `#2f89fc`
     blue**, with `:after` extending the blue 360% behind the column):
     heading-section-white **"Reasons for Choosing Us"** + paragraph + 3-item
     checklist (`ul.un-styled` with check icons: "Consectetur adipisicing
     elit", "Adipisci repellat accusamus", "Tempore reprehenderit vitae");
     RIGHT col (white): heading **"Get a Free Quote"** + form: **Full Name,
     Email, Phone, Website** (2-col row), **Message** textarea (full width),
     submit **"Get a Quote"** (`btn btn-primary py-3 px-5`). Form controls:
     height 52px, bg #fff, text #000, 16px, radius 0, no horizontal padding
     (underline style).
  9. **Testimonials** (`section.ftco-section.testimony-section.bg-light`):
     centered h2 **"Testimony"** + subheading **"Our Happy Customer Says"**;
     carousel of 5 slides — quote text + author **"Dennis Green"** + role
     (**Marketing Manager, Interface Designer, UI Designer, Web Developer,
     System Analytics** — the source repeats the same name on all slides;
     paraphrasing to distinct names is allowed content-kind latitude).
  10. **Newsletter** (`section.ftco-section-parallax`): `div.parallax-img`
      (padding 4em 0, `linear-gradient(-45deg, #2f89fc 0%, #55fbc2 100%)`),
      heading-section-white **"Subcribe to our Newsletter"** (source typo —
      fix to "Subscribe" in the recreation), blurb, subscribe form:
      input placeholder **"Enter email address"** + submit **"Subscribe"**.
  11. **Blog** (`section.ftco-section`): centered h2 **"Latest Blog"** +
      subheading **"Read our blog"**; 3 cards — each a `.block-20` image
      (300px tall background, `images/image_1|2|3.jpg`), meta line
      **"August 12, 2018 · Admin · 3"**, and a title link ("Even the
      all-powerful Pointing has no control about the blind texts").
  12. **Footer** (`footer.ftco-footer.ftco-bg-dark`, bg `#233142`, padding
      6em 0, font 16px): 4 columns — brand **"Prime."** + about blurb;
      **Quick Links** (About, Features, Projects, Blog, Contact); **Recent
      Blog** (2 entries: title + "Sept 15, 2018 · Admin · 19"); **Contact
      Info** (203 Fake St. Mountain View, San Francisco, California, USA /
      +2 392 3929 210 / info@yourdomain.com). Copyright bar (`ftco-bg-dark`
      bg `#3c312e`): "© Copyright All rights reserved" + credit line — the
      demo's "This template is made with by Colorlib" credit MUST be replaced
      by the mandated "Made with Component Dock" link to
      https://www.componentdock.com/.
- **Design tokens extracted from `css/style.css` + DOM:**
  - **Brand blue `#2f89fc`** — hero h1 strong (typewriter) color, typewriter
    caret bar, `aside-stretch` quote-column bg, gradient start, services-wrap
    icon circles.
  - **Brand mint `#55fbc2`** — gradient end (strips, newsletter).
  - **Button primary `#78d5ef`** (light blue) — `.btn-primary` bg/border,
    text `#212529`; hover bg `#56caeb` / border `#4ac7ea`. Outline variant:
    transparent bg, 1px border `#78d5ef`, text `#78d5ef`.
  - Hero h1: 32px (40px ≥ 992px), `#2f89fc`, weight 400, line-height 1.2;
    strong weight 500. Hero overlay: `linear-gradient(45deg, #f0f0f0, #fff
55%, #fff)`.
  - `.heading-section h2`: 30px (28px mobile), weight 400, dark; subheading:
    14px, display block, margin-bottom 20px.
  - Services-wrap icon: **80×80px circle, bg `#2f89fc`, radius 50%**.
  - Counter numbers: 34px weight 400 `#fff`; labels 16px
    `rgba(255,255,255,0.7)`.
  - Pricing card: bg `#fff`, padding 30px, shadow `0 2px 5px
rgba(0,0,0,0.03)`; `.block-7 .heading` 14px uppercase; feature rows color
    `#b3b3b3`, `strong` `#000`.
  - Quote section: `aside-stretch` bg `#2f89fc` (+`:after` 360% bleed);
    text `rgba(255,255,255,0.8)` for p/li, `#fff` for icons/headings.
  - Form controls: height 52px, bg `#fff`, color `#000`, 16px, radius 0,
    no horizontal padding.
  - Footer: bg `#233142`; copyright bar `#3c312e`.
  - Base: body **"Open Sans", Arial, sans-serif**, 16px, weight 400,
    line-height 1.5, color `#212529`, bg `#fff`; headings inherit Open Sans,
    weight 500.
- **Recreation decisions:** no copied assets. flaticon/icomoon glyphs →
  lucide-react icons (e.g. `Search`, `Target`/`Lightbulb`, `BarChart3`,
  `PenTool`, `Code`, `Megaphone`, `Check`, `Mail`, `MapPin`, `Phone`).
  Dashboard screenshots → deterministic picsum placeholders
  (`https://picsum.photos/seed/prime-<n>/<w>/<h>`), noted as a deviation
  (device mockups cannot be recreated without the source art). owl-carousel →
  lightweight React carousel (state + translate/fade) with aria-hidden on
  inactive slides. Typewriter → small React typewriter (interval + caret) or
  a rotating-word fade — keep the same words. Counters → simple count-up on
  mount/intersection (or static numbers). Google Font **Open Sans** via
  `<link>` in `index.html`. Fix the "Subcribe" typo → "Subscribe to our
  Newsletter". Footer credit → "Made with Component Dock" linking
  https://www.componentdock.com/ (repo mandate — replaces the Colorlib
  credit). Navbar "Get a Quote" modal → scroll to the quote-form section.
  No ColorLib references anywhere in `apps/prime` (provenance lives only in
  this spec, TEMPLATES.md, and the PR).

Prime lives in `apps/prime` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Navbar

The system SHALL render a fixed navbar with the brand, page links, and a CTA,
dark at the top of the page.

#### Scenario: Navbar content

- **GIVEN** the Prime page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Prime."
- **AND** the navbar SHALL show links: Home, About, Services, Work, Team,
  Pricing, Blog, Contact
- **AND** the navbar SHALL show a "Get a Quote" CTA that scrolls to the quote
  form section
- **AND** the navbar SHALL be dark-styled at the top of the page

#### Scenario: Mobile navigation

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user opens the mobile menu
- **THEN** the same links SHALL be reachable and the toggle SHALL expose
  `aria-expanded` state

### Requirement: Hero with rotating headline and dashboard carousel

The system SHALL render a split hero: left copy with a rotating-word headline
and two CTAs, right a carousel of three dashboard images.

#### Scenario: Hero content

- **GIVEN** the Prime page is rendered
- **WHEN** the user views the hero
- **THEN** the hero SHALL show the headline "Template for " followed by a
  rotating word cycling through Digital Agency, Portfolio, SEO Agency,
  Business
- **AND** the headline word SHALL be brand blue (#2f89fc)
- **AND** the hero SHALL show the intro paragraph and two buttons: "Get a
  Quote" (solid) and "Our Portfolio" (outline)
- **AND** the hero SHALL show a carousel of three dashboard images on the
  right

#### Scenario: Rotating word

- **GIVEN** the hero is displayed
- **WHEN** time advances
- **THEN** the typewriter word SHALL cycle through the four words in order
- **AND** the active word SHALL be announced to screen readers
  (aria-live polite) and the caret SHALL blink

### Requirement: Gradient strip

The system SHALL render a full-width blue→mint gradient strip with a white
headline.

#### Scenario: Strip content

- **GIVEN** the hero is displayed
- **WHEN** the user scrolls past the hero
- **THEN** the strip SHALL show "We Provide High Quality Services" in white
  on a diagonal gradient from #2f89fc to #55fbc2

### Requirement: Services

The system SHALL render a centered heading plus six service cards in two rows
of three.

#### Scenario: Services grid

- **GIVEN** the services section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL show the heading "Our Service Keeps you Happy"
  and the subheading "Search Engine & Social Media Optimization Experts"
- **AND** row one SHALL show three cards: Market Research, Business Strategy,
  Audience Analytics, each with an icon, title, and blurb
- **AND** row two SHALL show three cards: Logo Branding, Development, Online
  Marketing, each with an 80px circular icon, title, and blurb

### Requirement: Counter band

The system SHALL render a background-image band with four white counters.

#### Scenario: Counters

- **GIVEN** the counter section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL show four counters with white 34px numbers and
  translucent-white labels: Happy Clients, Running Projects, Project
  Completed, Cups of Coffee
- **AND** the first two numbers SHALL be 6780 and 4500

### Requirement: Portfolio carousel

The system SHALL render a portfolio heading and a carousel of six works.

#### Scenario: Portfolio works

- **GIVEN** the portfolio section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL show the heading "Our Portfolio" and the
  subheading "We're Happy to share our complete Projects"
- **AND** the carousel SHALL contain six works, each with the category
  "Branding" and a title "Work 01/02/03" over an image
- **AND** the carousel SHALL advance through the works (controls or autoplay)

### Requirement: Pricing

The system SHALL render four pricing cards on a light-gray background.

#### Scenario: Pricing plans

- **GIVEN** the pricing section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL show the heading "Our Best Pricing" and the
  subheading "Pricing Plans"
- **AND** four cards SHALL show the plans Free $0, Startup $19, Premium $49,
  Pro $99
- **AND** the Free card SHALL show "100% free. Forever" and the others "All
  features are included"
- **AND** each card SHALL list feature rows (bandwidth, storage, overage
  rate, all features) with a "Get Started" button and an "Enjoy All The
  Features" link

### Requirement: Reasons and quote form

The system SHALL render a split section: blue reasons column + white quote
form.

#### Scenario: Reasons column

- **GIVEN** the quote section is displayed
- **WHEN** the user views the left column
- **THEN** the column SHALL have the solid brand-blue background (#2f89fc)
- **AND** SHALL show the heading "Reasons for Choosing Us", a paragraph, and
  a three-item checklist with check icons

#### Scenario: Quote form

- **GIVEN** the quote section is displayed
- **WHEN** the user views the right column
- **THEN** the column SHALL show the heading "Get a Free Quote"
- **AND** the form SHALL contain Full Name, Email, Phone, and Website fields,
  a Message textarea, and a "Get a Quote" submit button
- **AND** submitting with invalid/empty required fields SHALL show per-field
  errors and block submission
- **AND** submitting valid data SHALL show a success state (the demo posts to
  `#`; the recreation SHALL handle submit client-side)

### Requirement: Testimonials

The system SHALL render a testimonial carousel on a light-gray background.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL show the heading "Testimony" and the subheading
  "Our Happy Customer Says"
- **AND** the carousel SHALL show five slides, each with a quote, an author
  name, and a role
- **AND** the carousel SHALL advance through the slides

### Requirement: Newsletter

The system SHALL render a gradient newsletter band with a subscribe form.

#### Scenario: Newsletter signup

- **GIVEN** the newsletter section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL show "Subscribe to our Newsletter" (typo fixed
  from the source) on the blue→mint gradient, with a blurb
- **AND** the form SHALL have an email input and a "Subscribe" button
- **AND** submitting a valid email SHALL show a success state; an invalid
  email SHALL show an error

### Requirement: Blog

The system SHALL render a blog heading and three post cards.

#### Scenario: Blog posts

- **GIVEN** the blog section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL show the heading "Latest Blog" and the subheading
  "Read our blog"
- **AND** three cards SHALL each show an image, a meta line (date · Admin ·
  comments), and a title link

### Requirement: Footer

The system SHALL render a dark four-column footer with the Component Dock
credit.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** the footer SHALL show the brand "Prime." with an about blurb,
  Quick Links (About, Features, Projects, Blog, Contact), Recent Blog entries
  (title + date · Admin · comments), and Contact Info (address, phone, email)
- **AND** the copyright bar SHALL link "Made with Component Dock" to
  https://www.componentdock.com/

### Requirement: Page composition

The system SHALL compose all sections in order in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Prime app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the sections in this order: navbar, hero,
  gradient strip, services, counters, portfolio, pricing, reasons + quote
  form, testimonials, newsletter, blog, footer
- **AND** the document title SHALL be "Prime — Digital Agency Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh prime` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the live preview 1:1 (navbar → hero → gradient
      strip → services → counters → portfolio → pricing → reasons/quote →
      testimonials → newsletter → blog → footer)
- [ ] Design tokens in `@theme`: brand blue `#2f89fc`, brand mint `#55fbc2`,
      button primary `#78d5ef`, hero overlay `#f0f0f0→#fff`; section bg
      `#f8f9fa`-ish light bands; footer `#233142` + copyright bar `#3c312e`
- [ ] Font: Open Sans via Google Fonts (body; headings inherit)
- [ ] Hero: 32px blue headline, rotating words (Digital Agency / Portfolio /
      SEO Agency / Business), solid + outline buttons, 3-image dashboard
      carousel (picsum placeholders)
- [ ] Services: 2 rows × 3 cards; row-2 icons are 80px `#2f89fc` circles
- [ ] Counters: white 34px numbers on background image (6780 / 4500 + two
      more)
- [ ] Pricing: 4 white cards (Free/Startup/Premium/Pro), shadow
      `0 2px 5px rgba(0,0,0,0.03)`, feature rows, Get Started + Enjoy All
      The Features
- [ ] Quote section: left column solid `#2f89fc` with checklist; right form
      (Full Name/Email/Phone/Website/Message) with validation + success state
- [ ] Newsletter: gradient band, "Subscribe to our Newsletter" (typo fixed),
      email validation
- [ ] Icons: lucide-react (no flaticon/icomoon/FontAwesome, no copied assets)
- [ ] No ColorLib references in any `apps/prime` file; footer links
      https://www.componentdock.com/ ("Component Dock")
- [ ] `TEMPLATES.md` lines 522, 1211, 2369 all marked `[x]` with surge URL by
      the implementer — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)

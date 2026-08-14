# Template: Adroit (Business / Digital Agency)

## Purpose

Adroit is a single-page digital-agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Saita" website template (source:
https://colorlib.com/wp/template/saita/ — "Saita — Free Bootstrap 5 Template
by ColorLib"), built under a DIFFERENT name (Adroit — "adroit", clever and
skillful, fitting a digital agency; single lowercase word, no collision with
`apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-14), per
the monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWICE in TEMPLATES.md (dup-row trap): line 623
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one) and
line 1156 (**Business (365)**) — both `- [ ]` rows of the SAME template. ONE
implementation covers both rows (mark all `[x]` with the same surge URL at
bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Saita" — digital-agency one-pager. Bootstrap 5
  based (bootstrap.min.css + font-awesome 4.7 + ionicons 4.5 + tiny-slider +
  glightbox + aos + datepicker + animate) plus a custom `css/style.css`
  (~79 KB) that carries the real design tokens. Brand name used in the
  source copy: **"Saita"** (the recreation brands itself **Adroit** but keeps
  the same section structure, copy kinds and layout).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/saita/` — HTTP 200, ~57 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets: `css/style.css`
  (custom tokens) + `animate.css`, `flaticon.css`, `tiny-slider.css`,
  `glightbox.min.css`, `aos.css`, `datepicker.min.css`, font-awesome 4.7,
  ionicons 4.5. Screenshot `saita-colorlib-template.jpg` (viewed in the
  browser) matches the live DOM: teal→deep-teal diagonal gradient hero with a
  cutout man-with-tablet photo on the right, white pill CTAs, blue service
  cards with yellow circular icons, lavender team section, light-lavender
  footer.
- **Visual design:** modern, bright digital-agency one-pager. The hero is a
  full-width **diagonal gradient `#1fc1a9` (teal) → `#2889a6` (deep teal)**
  with a right-side cutout photo (`hero-1.png`, man holding a tablet) and a
  left-aligned white headline **"We Are Digital Agency Helping To Boost Your
  sales"**; primary CTA is a **white pill** (`btn btn-white py-3 px-4`, white
  bg / teal text, 1px white border, hover → transparent bg + white text) and
  a secondary outlined **"Watch the Video"** pill with a play icon. Below the
  hero sit 4 feature cards: the first white with a **royal-blue `#5579fa`**
  circular icon, the other three **`#5579fa` blue** with **yellow `#feb82c`**
  circular icons and white text. Section headings use an uppercase
  **subheading/eyebrow** (e.g. "Services", "Projects", "Our Team") in muted
  gray with the h2 below in dark `#212529`. Body font **Poppins** (the source
  declares `"Poppins", Arial, sans-serif`); the preview loads it via the
  theme, the recreation loads Poppins via a Google Fonts `<link>`.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.navbar.ftco-navbar-light`, transparent over the hero):
     brand **"Saita."** left (white; `.ftco-footer .logo a` uses `#5579fa` in
     the footer variant), nav links **Home · About · Work · Services ·
     Pricing · Blog · Contact** right (white); scrolled state switches to a
     solid **`#052c43` dark navy** bar (`.ftco-navbar-light` solid bg +
     shadow). Recreation: brand "Adroit.", same 7 links, hamburger → mobile
     panel.
  2. **Hero** (`section.hero-wrap`, `linear-gradient(135deg, #1fc1a9 0%,
#2889a6 100%)`): left column — h1 **"We Are Digital Agency Helping To
     Boost Your sales"** (white, bold), paragraph ("A small river named Duden
     flows by their place and supplies it with the necessary regelialia."),
     **Start A Project** white pill + **Watch the Video** outlined pill with
     play icon; right column — cutout photo `hero-1.png` (man with tablet,
     `img-fluid`).
  3. **Feature cards** (`section.ftco-section.ftco-no-pt` + `services-wrap`
     row): 4 cards — **"We have experience for your project"** (white bg,
     blue `#5579fa` circular chart icon), **"We know how to save your time
     and money"**, **"We will bring your new pre-qualified customer"**,
     **"We can boost your project sales"** (blue `#5579fa` bg, white text,
     yellow `#feb82c` circular icons). Each: icon circle + h2 + short
     paragraph.
  4. **About** (`section.ftco-section.ftco-no-pt`, white, split row):
     eyebrow **"About Us"**, h2 **"We Design, Build Brands & Digital
     Projects"**, two paragraphs (Vokalia/Consonantia lorem), **Learn More**
     button (`btn btn-primary py-3 px-4`); right side photo `about.jpg`
     (background-image on the `col-lg-6 order-lg-last` column).
  5. **Counter strip** (`section.ftco-section-counter.img`, background
     `images/bg_3.jpg` + `#5579fa` overlay): 4 counters — **60 Year of
     Experienced · 9200 Satisfied Customers · 5800 Project Completed · 100
     Get Awards** (big white numbers + small label).
  6. **Services** (`section.ftco-section.bg-light`): eyebrow **"Services"**,
     h2 **"Our Exclusive Services We Offer For You"**; 8 cards in a
     row/grid — **Creative Design · Digital Marketing · Application Design ·
     Web Development · Branding · Graphic Design · Email Marketing · Web
     Design**; each: `#5579fa` circular icon (hover → `#feb82c` yellow, card
     bg → `#5579fa` blue), title + short lorem paragraph.
  7. **Quote + progress + portfolio** (`section.ftco-gallery.ftco-no-pb`):
     left column — blockquote **"Marketers need to build digital
     relationships and reputation before closing a sale"** + **Request A
     Quote** button; right column — **Projects** eyebrow, h2 **"Featured
     Projects"**, filter links **All · Web Design · Web Development ·
     Branding · Marketing · UI/UX Design**, progress bars (**Design &
     Development 70% · Branding 85% · Marketing 75%**, purple `#b088f9`
     bars), and a gallery grid of 8 image cards (`gallery-1..8.jpg`, each
     titled **"Innovative Design"**, zoom icon `#feb82c` on hover).
  8. **Team** (`section.ftco-section.bg-quarternary`, purple `#b088f9`):
     eyebrow **"Our Team"**, h2 **"Meet Our Team"**; 4 cards
     (`staff-1..4.jpg`): **Jason Smith (President & CEO) · Jeffrey Rockenson
     (Executive Vice President) · Jason Smith (General Manager) · Jason Smith
     (Strategic Consultant)** — photo, name, role, blurb, social icons
     (twitter/fb/google+/ig, `#b088f9`); hover: card text yellow `#feb82c`.
  9. **Pricing** (`section.ftco-section`, white): eyebrow **"Our Pricing"**,
     h2 **"Find Plan that is Right for You"**; 4 cards (`.block-7`, bg
     `#f9faff`, hover → white + yellow CTA): **Free $50/mos · Basic Plan
     $79/mos · Professional $89/mos · Startup $99/mos** — each with 6
     features (Live Chat Support, Minimum of 10 users, Easily Track Payments,
     Web Conference Support, Group Management of users, Remote Monitory) +
     **Get Started** button.
  10. **Testimonials** (`section.ftco-section.testimony-section.bg-light`):
      eyebrow **"Testimonial"**, h2 **"Happy Customers"**; tiny-slider
      carousel (2 slides) — quote card with `person_1..4.jpg` avatar +
      **"Roger Scott" (Marketing Manager)** + lorem quote; pagination dots.
  11. **Blog** (`section.ftco-section`, white): eyebrow **"Our Blog"**, h2
      **"Recent From Blog"**; 3 cards (`image_1..3.jpg`): meta **Admin ·
      Mar. 01, 2021 · 3 Comments**, h3 **"Improving Your Design &
      Programming Skills"**, paragraph, **Read More** link.
  12. **Intro CTA** (`section.ftco-intro-2.img`, background `bg_3.jpg` +
      `#5579fa` overlay): eyebrow **"Prepare for takeoff"**, h1 **"Looking
      for business opportunity?"**, **Get Started** button (white/teal).
  13. **Footer** (`footer.ftco-footer`, bg **`#f4eefe`** light lavender):
      col 1 — brand **"Adroit."** + about paragraph + social icons; col 2 —
      **Recent Posts** (2 items: date + admin + post title); col 3 —
      **Services** (8 links: Creative Design, Digital Marketing, Application
      Design, Web Development, Branding, Graphic Design, Web Design, Email
      Marketing Consulting); col 4 — **Have a Questions?** (address **203
      Fake St. Mountain View, San Francisco, California, USA** · phone **+2
      392 3929 210** · email **info@yourdomain.com**); bottom bar
      (`.bg-darken` inside footer): "© <year> All rights reserved | This
      template is made with by Colorlib" — Colorlib credit → **Component
      Dock link (mandatory)** `https://www.componentdock.com/`.

## Design tokens

- **Brand teal:** `#1fc1a9` — primary buttons (`.btn.btn-primary`), links
  (`a`, `a:hover`), hero gradient start, `.btn-white` text color, navbar
  toggler hover.
- **Deep teal:** `#2889a6` — hero gradient end (`.hero-wrap` linear-gradient
  `135deg, #1fc1a9 0%, #2889a6 100%`).
- **Royal blue:** `#5579fa` — service card icons (`.services-wrap .services
.icon`), active/hover service card bg (`.services:hover, .services.active`
  → `#5579fa`, `.active-2` → `#6e8dfb`, `.active-3` → `#87a0fb`), counter +
  intro CTA overlays, footer brand color.
- **Purple:** `#b088f9` — team section bg (`.bg-quarternary`), progress bars
  (`.progress-bar`), staff social icons, pricing card hover accent.
- **Yellow:** `#feb82c` — icon hover bg on services, gallery zoom icon,
  pricing card hover CTA (`.block-7:hover .btn-primary`), staff hover text,
  subheading eyebrow hover accents.
- **Dark navy:** `#052c43` — scrolled navbar bg (`.ftco-navbar-light` solid
  state), `.bg-darken` blocks (counter/intro inner bars), footer contact
  label color.
- **Light lavender:** `#f4eefe` — footer bg (`.ftco-footer`), with
  `#e0d1fd` for `.ftco-footer .bg-darken` (bottom bar band).
- **Card bg:** `#f9faff` — pricing cards (`.block-7`), blog cards
  (`.blog-entry`), quote card.
- **Light gray:** `#f8f9fa` — `bg-light` sections (services, testimonials).
- **Headings:** `#212529` near-black — font **Poppins** (source declares
  `"Poppins", Arial, sans-serif`), bold; h1 hero white.
- **Body text:** `#212529` / `#6c757d` muted gray — Poppins, 16px.
- **Eyebrow/subheading:** uppercase, small, muted `rgba(0,0,0,0.3)` /
  `#feb82c` accents.
- **Section backgrounds:** hero — diagonal gradient `#1fc1a9` → `#2889a6`;
  features — white cards + blue active cards; counter — `bg_3.jpg` photo +
  `#5579fa` overlay; services — `#f8f9fa`; team — `#b088f9`; pricing —
  white + `#f9faff` cards; testimonials — `#f8f9fa`; intro CTA — `bg_3.jpg`
  - `#5579fa` overlay; footer — `#f4eefe`.
- **Buttons:** `.btn` base — radius **4px** (0.25rem), padding 9px 12px;
  `.btn.btn-primary` — teal `#1fc1a9` bg, white text; `.btn.btn-white` —
  **white bg, teal `#1fc1a9` text, 1px white border, py-3 px-4 tall pill**,
  hover → transparent bg + white text; hero "Watch the Video" — transparent,
  1px white border, white text, play icon.
- **Fonts (Google Fonts `<link>` in `index.html`):**
  `family=Poppins:wght@300;400;500;600;700;800` — Poppins for headings and
  body (source's declared family).
- **Section padding rhythm:** `.ftco-section` padding 7em 0 (Bootstrap-based
  rhythm); hero `min-height` ~100vh-ish full viewport with white `:after`
  wave accent (`.hero-wrap:after` → `#fff`).
- **Icons:** font-awesome 4.7 + ionicons in the source → lucide-react in the
  recreation (chart, clock, users, rocket, phone, mail, map-pin, play, zoom,
  socials).

## Requirements

### Requirement: Header navigation

- **GIVEN** the Adroit page is loaded
- **WHEN** the user views the top of the page
- **THEN** a transparent navbar SHALL render over the hero with the ADROIT
  brand/logo left, nav links Home · About · Work · Services · Pricing · Blog ·
  Contact right, and a white text treatment
- **AND** when the page scrolls, the navbar SHALL switch to a solid dark
  navy `#052c43` bar

#### Scenario: Mobile navigation

- **GIVEN** the Adroit page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** a mobile menu SHALL open with the same links and a close control

### Requirement: Hero

- **GIVEN** the Adroit page is loaded
- **WHEN** the user views the hero
- **THEN** a full-width hero SHALL render a diagonal gradient background
  (`#1fc1a9` → `#2889a6`) with a left-aligned white headline **"We Are
  Digital Agency Helping To Boost Your sales"**, a supporting paragraph, a
  white **Start A Project** pill button and an outlined **Watch the Video**
  pill with a play icon, and a cutout photo (man with tablet) on the right

#### Scenario: Hero CTAs

- **GIVEN** the hero is displayed
- **WHEN** the user clicks **Start A Project** or **Watch the Video**
- **THEN** the buttons SHALL be dead-end links (no navigation required)

### Requirement: Feature cards

- **GIVEN** the user scrolls past the hero
- **WHEN** the feature-cards row is displayed
- **THEN** 4 cards SHALL render: the first white with a royal-blue `#5579fa`
  circular icon, the other three `#5579fa` blue with yellow `#feb82c`
  circular icons and white text — headings **"We have experience for your
  project" / "We know how to save your time and money" / "We will bring your
  new pre-qualified customer" / "We can boost your project sales"** each with
  a short paragraph

#### Scenario: Card layout

- **GIVEN** the feature-cards row is displayed
- **WHEN** the row reflows
- **THEN** the cards SHALL wrap to a responsive grid (4 → 2 → 1 columns)

### Requirement: About section

- **GIVEN** the user scrolls past the feature cards
- **WHEN** the about section is displayed
- **THEN** a white split section SHALL show the eyebrow **About Us**, the h2
  **"We Design, Build Brands & Digital Projects"**, paragraphs, a **Learn
  More** teal button, and a photo on the right

#### Scenario: Learn More button

- **GIVEN** the about section is displayed
- **WHEN** the user clicks **Learn More**
- **THEN** the button SHALL be a dead-end link (no navigation required)

### Requirement: Counter strip

- **GIVEN** the user scrolls past the about section
- **WHEN** the counter strip is displayed
- **THEN** a photo strip with a `#5579fa` overlay SHALL show 4 counters —
  **60 Year of Experienced · 9200 Satisfied Customers · 5800 Project
  Completed · 100 Get Awards** — big white numbers with small labels

#### Scenario: Counter values

- **GIVEN** the counter strip is displayed
- **WHEN** the user reads it
- **THEN** all four values and labels SHALL match the source copy

### Requirement: Services grid

- **GIVEN** the user scrolls past the counters
- **WHEN** the services section is displayed
- **THEN** a light `#f8f9fa` section SHALL show the eyebrow **Services**, the
  h2 **"Our Exclusive Services We Offer For You"** and 8 cards — Creative
  Design, Digital Marketing, Application Design, Web Development, Branding,
  Graphic Design, Email Marketing, Web Design — each with a `#5579fa`
  circular icon, title and short paragraph

#### Scenario: Service card hover

- **GIVEN** a service card is displayed
- **WHEN** the user hovers over it
- **THEN** the icon SHALL turn yellow `#feb82c` and the card background SHALL
  turn blue `#5579fa` with white text (matching the source's hover state)

### Requirement: Quote, progress and portfolio

- **GIVEN** the user scrolls past the services
- **WHEN** the portfolio section is displayed
- **THEN** a split section SHALL show: left — the blockquote **"Marketers
  need to build digital relationships and reputation before closing a sale"**
  with a **Request A Quote** button and progress bars (Design & Development
  70%, Branding 85%, Marketing 75%, purple `#b088f9`); right — eyebrow
  **Projects**, h2 **"Featured Projects"**, filter links (All · Web Design ·
  Web Development · Branding · Marketing · UI/UX Design) and a gallery grid
  of 8 image cards titled **"Innovative Design"**

#### Scenario: Gallery filter

- **GIVEN** the portfolio gallery is displayed
- **WHEN** the user clicks a filter link
- **THEN** the filter SHALL be selectable (a static filter with
  active-state styling is acceptable; full client-side filtering optional)

### Requirement: Team

- **GIVEN** the user scrolls past the portfolio
- **WHEN** the team section is displayed
- **THEN** a purple `#b088f9` section SHALL show the eyebrow **Our Team**, the
  h2 **"Meet Our Team"** and 4 cards — Jason Smith (President & CEO),
  Jeffrey Rockenson (Executive Vice President), Jason Smith (General
  Manager), Jason Smith (Strategic Consultant) — each with photo, name, role,
  blurb and social icons

#### Scenario: Team card hover

- **GIVEN** a team card is displayed
- **WHEN** the user hovers over it
- **THEN** the card text SHALL turn yellow `#feb82c` (matching the source)

### Requirement: Pricing

- **GIVEN** the user scrolls past the team
- **WHEN** the pricing section is displayed
- **THEN** a white section SHALL show the eyebrow **Our Pricing**, the h2
  **"Find Plan that is Right for You"** and 4 cards (`#f9faff` bg) — Free
  $50/mos, Basic Plan $79/mos, Professional $89/mos, Startup $99/mos — each
  with the 6 features (Live Chat Support, Minimum of 10 users, Easily Track
  Payments, Web Conference Support, Group Management of users, Remote
  Monitory) and a **Get Started** button

#### Scenario: Get Started button

- **GIVEN** a pricing card is displayed
- **WHEN** the user clicks **Get Started**
- **THEN** the button SHALL be a dead-end link (no navigation required)

### Requirement: Testimonials

- **GIVEN** the user scrolls past the pricing
- **WHEN** the testimonials section is displayed
- **THEN** a light `#f8f9fa` section SHALL show the eyebrow **Testimonial**,
  the h2 **"Happy Customers"** and a carousel/slider of quote cards with an
  avatar, the name **Roger Scott**, role **Marketing Manager**, a quote and
  pagination dots

#### Scenario: Testimonial card content

- **GIVEN** a testimonial card is displayed
- **WHEN** the user reads it
- **THEN** it SHALL show an avatar, name, role and quote paragraph

### Requirement: Blog

- **GIVEN** the user scrolls past the testimonials
- **WHEN** the blog section is displayed
- **THEN** a white section SHALL show the eyebrow **Our Blog**, the h2
  **"Recent From Blog"** and 3 cards — each with a photo, meta (Admin ·
  Mar. 01, 2021 · 3 Comments), title **"Improving Your Design & Programming
  Skills"**, paragraph and **Read More** link

#### Scenario: Read More link

- **GIVEN** a blog card is displayed
- **WHEN** the user clicks **Read More**
- **THEN** the link SHALL be a dead-end link (no navigation required)

### Requirement: Intro CTA

- **GIVEN** the user scrolls past the blog
- **WHEN** the intro CTA banner is displayed
- **THEN** a photo banner with a `#5579fa` overlay SHALL show the eyebrow
  **"Prepare for takeoff"**, the h1 **"Looking for business opportunity?"**
  and a **Get Started** button

#### Scenario: Get Started CTA

- **GIVEN** the intro CTA is displayed
- **WHEN** the user clicks **Get Started**
- **THEN** the button SHALL be a dead-end link (no navigation required)

### Requirement: Footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is displayed
- **THEN** a light-lavender `#f4eefe` footer SHALL show 4 columns: brand +
  about text + social icons; **Recent Posts** (2 items with date + admin +
  title); **Services** (8 links); **Have a Questions?** (address 203 Fake
  St. Mountain View, San Francisco, California, USA · phone +2 392 3929 210 ·
  email info@yourdomain.com)
- **AND** the bottom bar SHALL show the copyright line with a link to
  **https://www.componentdock.com/** ("Component Dock") — mandatory footer
  convention; no ColorLib credit

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user reads the bottom bar
- **THEN** a link to **https://www.componentdock.com/** labeled
  "Component Dock" SHALL be present and no ColorLib credit SHALL appear

### Requirement: Responsive layout

- **GIVEN** the Adroit page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** the hero SHALL stack (photo below text), the feature/service/
  team/pricing/blog grids SHALL collapse to a single column, and all buttons
  SHALL remain tappable

#### Scenario: Stacked layout

- **GIVEN** the Adroit page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** every multi-column section SHALL stack to a single column with
  tappable buttons and the header SHALL use the hamburger menu

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-adroit`
- [ ] `scripts/verify-app.sh adroit` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent navbar (ADROIT
      brand + Home/About/Work/Services/Pricing/Blog/Contact; solid `#052c43`
      on scroll) → hero (teal→deep-teal gradient, white headline "We Are
      Digital Agency Helping To Boost Your sales", white Start A Project pill + outlined Watch the Video pill, cutout man-with-tablet photo right) →
      feature cards (1 white + 3 blue `#5579fa`, yellow icons, 4 headings)
      → about ("About Us" / "We Design, Build Brands & Digital Projects" +
      Learn More + photo right) → counter strip (`bg_3.jpg` + `#5579fa`
      overlay: 60 / 9200 / 5800 / 100) → services (`#f8f9fa`, 8 cards) →
      quote + progress bars + Featured Projects gallery (8 "Innovative
      Design" cards, filters) → team (`#b088f9`, 4 staff cards) → pricing
      (4 `#f9faff` cards $50/$79/$89/$99) → testimonials (`#f8f9fa`, Roger
      Scott carousel) → blog (3 post cards) → intro CTA ("Prepare for
      takeoff" / "Looking for business opportunity?") → footer (`#f4eefe`:
      brand + Recent Posts + Services + Have a Questions?; bottom bar with
      Component Dock link)
- [ ] Brand tokens in `@theme`: `#1fc1a9` teal (primary buttons, links,
      hero gradient start), `#2889a6` (hero gradient end), `#5579fa` royal
      blue (icons, active cards, overlays), `#b088f9` purple (team section,
      progress bars), `#feb82c` yellow (hover icons, pricing hover CTA),
      `#052c43` navy (scrolled navbar), `#f4eefe` lavender (footer),
      `#f9faff` (pricing/blog cards), `#f8f9fa` (light sections) — all via
      Tailwind classes
- [ ] Fonts: Poppins (headings + body) via Google Fonts `<link>` in
      `index.html`
- [ ] Buttons: `.btn-primary` teal bg radius 4px; hero `.btn-white` white
      pill (white bg / teal text, 1px white border, hover transparent);
      outlined "Watch the Video" with play icon
- [ ] Placeholder images via `picsum.photos/seed/adroit-<n>/<w>/<h>` (hero
      cutout man-with-tablet, about photo, counter/intro bg, 8 gallery, 4
      staff, 4 testimonial avatars, 3 blog — screen seeds before pinning;
      seed-screening method), icons from lucide-react (probe exports first —
      no brand icons; use inline SVG for socials)
- [ ] Brand renamed "Saita"/"Colorlib" → "Adroit" everywhere; footer MUST
      link `https://www.componentdock.com/`; all links/forms dead-end
      without navigation (except the componentdock link)
- [ ] Source copy quirks: "Remote Monitory" (typo in source pricing) —
      normalize or keep, note in PR; "Email Marketing Consulting" footer
      list item, "Creative Desgin" typo — normalize, note in PR
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL TWO `- [ ]` rows
      (line 623 Bootstrap 5, line 1156 Business) `[x]` with the same
      surge URL + `npm run readme:status`

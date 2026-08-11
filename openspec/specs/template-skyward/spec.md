# Template: Skyward (Web Hosting Template)

## Purpose

Skyward is a single-page web hosting template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Ignite"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ignite" — web hosting company landing page,
  "Free Bootstrap 4 Template by Colorlib"
  (source: https://colorlib.com/wp/template/ignite/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/ignite/
  (HTTP 200, ~34 KB HTML fetched + `css/style.css` ~74 KB parsed).
- **Screenshot analyzed:** `ignite-free-template.jpg` (1200x946) — vibrant
  **blue** dominates the upper two-thirds (navbar on image, hero overlay,
  domain-search band all `#207dff`); white text on blue; bright
  **lime-green** `#a1dd70` CTA buttons ("Get Started", "Search"); hero is a
  hands-on-laptop photo under a semi-transparent blue overlay with centered
  text; below it the blue domain-search bar with a white input + green Search
  button and a TLD price row (`.com $9.75`, `.net $9.50`, `.biz $8.95`,
  `.co $7.80`, `.me $7.95`); a white partner-logos strip (grayscale logos)
  closes the visible fold. The rest of the page (features, counters,
  services, pricing, testimonials, blog, footer) was extracted from the DOM
  and CSS, not the screenshot.
- **Section order (1:1, from the DOM of the home page):**
  1. Navbar (`nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark`,
     fixed/absolute over hero): left `navbar-brand` "Ignite" wordmark; center
     links HOME / ABOUT / DOMAIN / HOSTING / BLOG / CONTACT (white at 70%
     opacity, hover white, active `#a1dd70`); right CTA link "Get Started"
     (green `#a1dd70` pill, radius 5px, padding .5rem 20px, hover → blue
     `#207dff`). Mobile: hamburger toggler collapsing to a stacked menu.
  2. Hero (`div.hero-wrap.js-fullheight.img`, full-height, background image
     of hands typing on a laptop, blue overlay `#207dff` opacity .8):
     centered column (`.slider-text`, height 750px): subheading span "Web
     Hosting" (14px, uppercase, letter-spacing 4px, weight 600, white), h1
     "Best Web Hosting For Your Website" (54px, weight 300, white, line-height
     1.2; a bold 700 span carries the emphasized word), p "Get best speed for
     your website. Don't lose more clients" (`rgba(255,255,255,0.8)`), CTA
     `a.btn.btn-secondary.px-4.py-3` "Get Started Now" (green pill).
  3. Domain band (`section.ftco-domain`, bg `#207dff`): `form.domain-form`
     (flex): text input "Enter your domain name..." (`form-control.name`, flex
     1, white) + extension select (`.com` / `.net` / `.biz` / `.co` / `.me`,
     300px) with a chevron icon + submit `input.search-domain.btn.btn-primary`
     "Search". Below: `p.domain-price` centered TLD price row —
     `.com $9.75` · `.net $9.50` · `.biz $8.95` · `.co $7.80` · `.me $7.95`
     (white small text).
  4. Partner logos (`section.ftco-section.ftco-partner`): row of 5–6
     grayscale partner logo images (`a.partner > img.img-fluid`, `col-sm`
     each), centered.
  5. Why You Should Choose Us (`section.ftco-section.services-section.bg-light`,
     bg `#f6fafd`): centered heading h2 "Why You Should Choose Us" (mb-4) +
     subtext paragraph; 3-column feature row: **Super Fast Server** · **Daily
     Backups** · **Technical Services**, each an icon (image/icon) + h3 title +
     blurb paragraph ("Even the all-powerful Pointing has no control about the
     blind texts…").
  6. Stats counter (`section.ftco-section.ftco-counter.bg-light.img`,
     `#section-counter`, light bg with faint image): centered h2 "More than
     12,000 websites trusted hosted"; 4 counters (`block-18`, text-center,
     col-md-3): big number (`strong.number`, animated count-up from 0) + label
     span: **12,000 CMS Installation** · **100 Awards Won** · **10,000
     Registered Domains** · **9,000 Satisfied Customers**.
  7. Our Main Services (`section.ftco-section.ftco-no-pt.ftco-no-pb`, white
     bg): centered h2 "Our Main Services" + subtext; 4-column icon service
     row: **Cloud VPS** · **Share** · **VPS** · **Dedicated**, each icon + h3
     title + blurb.
  8. Our Best Pricing (`section.ftco-section.bg-primary`, bg `#207dff`):
     centered white heading h2 "Our Best Pricing" + subtext
     (`heading-section-white`); 4 pricing cards (`div.block-7.d-flex.
align-self-stretch`, col-lg-3):
     - **Free** — `$0/mo` (card bg `bg-light`), "100% free. Forever",
       features: Enjoy All The Features · 150 GB Bandwidth · 100 GB Storage ·
       $1.00 / GB Overages · All features; button `btn-secondary` "Choose
       Plan".
     - **Startup** — `$19/mo` (white card), "All features are included",
       features: 450 GB Bandwidth · 400 GB Storage · $2.00 / GB Overages · All
       features; button `btn-secondary` "Choose Plan".
     - **Premium** — `$49/mo` (**ACTIVE card: bg `#a1dd70`, black text**),
       "All features are included", 250 GB Bandwidth · 200 GB Storage ·
       $5.00 / GB Overages · All features; button `btn-primary` (blue)
       "Choose Plan".
     - **Pro** — `$99/mo` (white card), "All features are included",
       450 GB Bandwidth · 400 GB Storage · $20.00 / GB Overages · All
       features; button `btn-secondary` "Choose Plan".
     Price markup: `<sup>$</sup><span class="number">N<small>/mo</small>`.
  9. Testimonials (`section.ftco-section.testimony-section`): centered h2
     "Our satisfied customer says" + subtext; carousel of 5 testimonial
     slides (`Mark Web` — Marketing Manager / Interface Designer / UI
     Designer / Web Developer / System Analyst): quote text + yellow star
     rating (`#ffc107`) + avatar + name + role.
  10. Recent Blog (`section.ftco-section.bg-light`): centered h2 "Recent
      Blog" + subtext; 3 blog cards (`div.blog-entry`, col-md-4): image
      (hover zoom), meta line "Aug 5, 2019 · Admin" (date + author), h3
      title, excerpt paragraph, "Read More" link.
  11. Footer (`footer.ftco-footer`, bg `#207dff`, padding 5em 0 3em):
      4 columns — brand "Ignite" + about paragraph + social icons; "Unseful
      Links" [sic] (Servers, Windos Hosting [sic], Cloud Hosting, OS
      Servers, Linux Servers, Policy); "Navigational" (Home, Domain,
      Hosting, About, Blog, Contact); "Office" (203 Fake St. Mountain View,
      San Francisco, California, USA · +2 392 3929 210 ·
      info@yourdomain.com). Bottom centered copyright bar: "Copyright ©
      <year> All rights reserved | This template is made with <heart> by …"
      (monorepo credit, not ColorLib).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Primary brand **blue `#207dff`** (hero overlay opacity .8, domain band
    bg, pricing section bg, footer bg, `.btn-primary` bg/border, navbar CTA
    hover, `ftco-domain` bg). Hover/deep shade `#0062cc`/`#0069d9` (Bootstrap
    defaults, unused by template overrides).
  - Secondary accent **green `#a1dd70`** (`.btn-secondary` bg/border, navbar
    CTA pill, active nav link, active pricing card bg). Hover **`#93d85b`**
    (btn-secondary hover bg/border).
  - Testimonial star yellow `#ffc107`; muted grays `#6c757d`, `#b3b3b3`,
    `#495057`.
  - Surfaces: `.bg-light` → **`#f6fafd`** (features/counter/blog sections);
    `.bg-primary` → `#207dff` (pricing section); footer → `#207dff`; pricing
    cards white / `bg-light` / active green.
  - Font: **"Work Sans"** (weights 300–700 via Google Fonts, Arial
    sans-serif fallback) for everything. Hero h1 54px weight 300 (bold span
    700), line-height 1.2; navbar 14px; footer h2 17–20px weight 500.
  - Buttons `.btn`: **radius 5px**, box-shadow
    `0 15px 30px -12px rgba(0,0,0,0.2)`. `.btn-primary`: bg/border
    `#207dff`, white text; hover → transparent bg, blue text. `.btn-secondary`:
    bg/border `#a1dd70`, white text; hover → bg/border `#93d85b`.
  - Hero subheading: 14px, uppercase, letter-spacing 4px, weight 600, white;
    hero paragraph `rgba(255,255,255,0.8)`.
  - Navbar: `bg-dark` over hero; links `rgba(255,255,255,0.7)` → white hover;
    active link `#a1dd70`; CTA pill radius 5px padding .5rem 20px.
  - Domain form: white input + 300px select; TLD price row white small text.
  - Counters: `strong.number` (large, animated count-up 0 → target),
    label span below.
  - Testimonial cards: quote + 5 yellow stars (`#ffc107`) + avatar + name +
    role; carousel with dot/arrow navigation.
  - Blog cards: image with hover zoom, meta "Aug 5, 2019 · Admin", h3 18px
    `#000`, excerpt, Read More link.
  - Footer: bg `#207dff`, white headings/links, links
    `rgba(255,255,255,0.7)` → white hover; column headings 17–20px weight 500.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/skyward-<n>/<w>/<h>`); icons → lucide-react (Server,
  Database, Wrench, Cloud, Share2, HardDrive, Star, ChevronDown, Menu,
  Facebook, Twitter, Instagram, MapPin, Phone, Mail, Heart, ArrowRight,
  Globe); Work Sans via Google Fonts `<link>` in `index.html`; brand blue
  `#207dff` + accent green `#a1dd70` in `@theme` so shared Button/ButtonLink
  `primary` (blue) and a local secondary style (green) resolve correctly with
  5px radius; no asset/CSS/font-file copying. Demo copy paraphrased but same
  kinds (hosting headline + domain search + TLD prices; feature icon +
  title + blurb; counter number + label; plan name + price + feature rows +
  Choose Plan; testimonial quote + name + role; blog image + meta + title +
  excerpt; footer brand + link columns + office info + copyright). Demo
  typos fixed: "Unseful Links" → "Useful Links", "Windos Hosting" → "Windows
  Hosting". Counter numbers animate from 0 on scroll into view.

Skyward lives in `apps/skyward` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) plus the repo-standard Navbar/Footer chrome
(adapted to the dark navbar + green CTA and the blue 4-column footer).

## Requirements

### Requirement: Navbar

The system SHALL render a dark navbar with the site wordmark, section links,
and a green "Get Started" call-to-action.

#### Scenario: Navbar content

- **GIVEN** the Skyward page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Skyward" as the brand
- **AND** the navbar SHALL show links HOME, ABOUT, DOMAIN, HOSTING, BLOG, CONTACT
- **AND** the navbar SHALL show a green "Get Started" CTA button

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered at a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links SHALL expand into a stacked menu

### Requirement: Hero

The system SHALL render a full-height hero with a blue overlay over a
background image, centered white headline, subtext, and a green CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the uppercase subheading "Web Hosting"
- **AND** the headline "Best Web Hosting For Your Website" in large white text
- **AND** the subtext "Get best speed for your website. Don't lose more clients"
- **AND** a green "Get Started Now" button

### Requirement: Domain search band

The system SHALL render a blue band with a domain search form (input +
extension select + search button) and a row of TLD prices.

#### Scenario: Search form

- **GIVEN** the domain band is rendered
- **WHEN** the user inspects the form
- **THEN** it SHALL show a domain name input with placeholder "Enter your domain name..."
- **AND** an extension select with options .com, .net, .biz, .co, .me
- **AND** a "Search" submit button

#### Scenario: TLD price row

- **GIVEN** the domain band is rendered
- **WHEN** the user inspects the price row
- **THEN** it SHALL show the prices .com $9.75, .net $9.50, .biz $8.95, .co $7.80, .me $7.95

### Requirement: Partner logos

The system SHALL render a strip of grayscale partner logos.

#### Scenario: Partner strip

- **GIVEN** the page is rendered
- **WHEN** the partner section is displayed
- **THEN** it SHALL show a responsive row of at least five partner logo images

### Requirement: Features ("Why You Should Choose Us")

The system SHALL render a light-background section with a heading and three
feature columns (icon + title + blurb).

#### Scenario: Feature section content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Why You Should Choose Us"
- **AND** three features titled "Super Fast Server", "Daily Backups", and "Technical Services", each with an icon and a blurb

### Requirement: Stats counter

The system SHALL render a counter section with a heading and four animated
stat counters (number + label).

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show the heading "More than 12,000 websites trusted hosted"
- **AND** four counters: 12,000 CMS Installation · 100 Awards Won · 10,000 Registered Domains · 9,000 Satisfied Customers

#### Scenario: Count-up animation

- **GIVEN** the counter section is displayed
- **WHEN** the counters scroll into view
- **THEN** each number SHALL animate from 0 up to its target value

### Requirement: Main services

The system SHALL render a white section with a heading and four service
columns (icon + title + blurb).

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Main Services"
- **AND** four services titled "Cloud VPS", "Share", "VPS", and "Dedicated", each with an icon and a blurb

### Requirement: Pricing

The system SHALL render a blue section with a heading and four pricing cards
(Free, Startup, Premium, Pro), the Premium card highlighted in green.

#### Scenario: Pricing section content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Our Best Pricing"
- **AND** four plans: Free $0/mo, Startup $19/mo, Premium $49/mo, Pro $99/mo

#### Scenario: Plan card details

- **GIVEN** a pricing card is rendered
- **WHEN** the user inspects it
- **THEN** the card SHALL show the plan name, monthly price, an "Enjoy All The Features" line, a feature list (Bandwidth, Storage, Overages, All features), and a "Choose Plan" button

#### Scenario: Featured plan

- **GIVEN** the pricing section is displayed
- **WHEN** the user inspects the Premium card
- **THEN** the Premium card SHALL be highlighted with the green brand background

### Requirement: Testimonials

The system SHALL render a testimonial section with a heading and a carousel
of customer quotes (quote, star rating, name, role).

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show the heading "Our satisfied customer says"
- **AND** at least one testimonial with a quote, a star rating, a customer name, and a role

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next testimonial

### Requirement: Blog section

The system SHALL render a light-background blog section with a heading and
three blog cards (image, meta, title, excerpt, read-more link).

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** three blog cards, each with an image, a date and author meta line, a title, an excerpt, and a "Read More" link

### Requirement: Footer

The system SHALL render a blue footer with brand/about, Useful Links,
Navigational, and Office columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a brand column with an about paragraph
- **AND** a "Useful Links" column (Servers, Windows Hosting, Cloud Hosting, OS Servers, Linux Servers, Policy)
- **AND** a "Navigational" column (Home, Domain, Hosting, About, Blog, Contact)
- **AND** an "Office" column with address, phone, and email
- **AND** the footer SHALL show a centered copyright bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Skyward app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, domain band, partner logos, features, counters, services, pricing, testimonials, blog, and footer in order
- **AND** the document title SHALL be "Skyward — Web Hosting Template"

## Verification checklist

- [ ] `openspec/specs/template-skyward/spec.md` present with the REAL section
      list (navbar → hero → domain band → partners → features → counters →
      services → pricing → testimonials → blog → footer).
- [ ] Design tokens above (blue `#207dff`, green `#a1dd70`/`#93d85b`,
      `#f6fafd` light sections, Work Sans 300–700, 5px-radius shadowed
      buttons, 54px hero headline, blue footer) captured in the spec.
- [ ] `docs/templates/skyward/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh skyward`,
      PR lists source (ColorLib Ignite), preview URL, tokens, and what
      differs.

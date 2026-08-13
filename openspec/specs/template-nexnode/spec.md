# Template: Nexnode (Hosting)

## Purpose

Nexnode is a web-hosting landing template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Hosthub" design
(https://colorlib.com/wp/template/hosthub/), built under the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript. "Nexnode" (a hosting-inspired
new word) is a NEW original name — the ColorLib source name is never reused in
app code.

The original is a classic hosting-company landing page (Bootstrap 4): an
orange (#ec9d5f) top utility bar (phone + email + "Purchase Hosting" button), a
white navbar (hexagon "H" logo + "Hosthub", uppercase dark links Home / About /
Services / Pages / Blog / Contact, search icon); a full-width purple (#6247ea)
hero with a faint dotted world-map background and an isometric server-rack
illustration on the right ("We're Web Hosting Professionals" headline, white
copy, orange "Explore Our Features" button); a white features section ("Some
Features that Made us Unique" + 4 icon cards); a light (#fafcff) pricing
section ("Choose Your Best Pricing Plans" + 4 white rounded plan cards: Basic
£39, Starter £59, Business £79, Enterprise £99, each with RAM / Core CPU / SSD
Storage / Transfer / Network In rows and a purple "Get Started" button); an
orange (#ec9d5f) "Looking for a Custom Solution?" band with a white
"Request Free Consultation" button; a white testimonials section ("What our
Client's Say about us" + 2 quote cards); a purple (#6247ea) "Top Services We
Provided" grid (5 translucent rounded cards with line icons: Cloud Hosting,
Web Hosting, Cloud Computing, VPS Hosting, Server Analytics); a white blog
section ("Latest Posts from Our Blog" + 3 cards with date, title, excerpt,
views/comments/shares meta); a light (#fafcff) clients-logo strip (5 logos);
and a dark navy (#04091e) four-column footer (Top Products links, Newsletter
subscribe form, Instagram feed grid, copyright bar) with a Component Dock
attribution. Nexnode recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hosthub" — free hosting/domain website Bootstrap 4
  template (source: https://colorlib.com/wp/template/hosthub/; listed in the
  "Bootstrap (216)" section of TEMPLATES.md).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hosthub/`
  (HTTP 200, ~24KB) + stylesheet `css/style.css` (~71KB, unminified) +
  `css/bootstrap.css` (~35KB). The rendered DOM is the structure ground truth
  below. The TEMPLATES.md screenshot (`hosthub-free-template.jpg`, 1200×946)
  shows the DESIGN above the fold: orange top utility bar (phone
  +880 1234 656 933, email SUPPORT@CODELESS.COM, purple "Purchase Hosting"
  button), white nav with a dark-purple hexagon "H" logo and a search icon,
  and the hero with an isometric server-rack illustration on the right (3
  stacked units, white outlines, green/orange/red status lights). NOTE: the
  live preview DOM omits the top bar and the hero illustration (its hero is
  text-only over the purple map background) — implement the SCREENSHOT design
  for those two elements (top bar + hero illustration via inline SVG or
  picsum), and use the DOM for everything else.
- **Section order (1:1):**
  1. Top utility bar (screenshot only, absent from the preview DOM): thin
     orange (#ec9d5f) strip — left: phone `+880 1234 656 933` + email
     `SUPPORT@CODELESS.COM` (small white text); right: "Purchase Hosting"
     button (dark purple bg, white text). Paraphrase the contact details.
  2. Header (`header.header_area`, absolute over the hero, transparent;
     `navbarSupportedContent`): left logo (`img/logo.png` — hexagon "H" +
     "Hosthub" wordmark, bold dark sans); center/right uppercase links
     Home / About / Services / Pages (dropdown: Features, Pricing, Elements) /
     Blog (dropdown: Blog) / Contact; search icon + hamburger on mobile. The
     screenshot shows a WHITE header — the DOM header is transparent-absolute;
     either treatment is acceptable, prefer the screenshot's white bar (with
     the top bar above it).
  3. Hero (`section.home_banner_area` > `.banner_inner`, bg #6247ea, overlay
     `img/banner/banner-map.png` dotted world map, min-height 780px): H1
     "We're Web Hosting Professionals" (large bold white), a paragraph of
     white copy, and an orange "Explore Our Features" button
     (`.banner_btn`: bg #ec9d5f, white text, radius 5px, padding 0 50px,
     line-height 50px, 12px font). Screenshot adds the isometric server-rack
     illustration on the right.
  4. Features (`section.feature_area.p_120`): centered H2 "Some Features that
     Made us Unique" + subtitle; 4 `feature_item` cards (icon + H4 + short
     paragraph). NOTE: the preview DOM repeats the placeholder title "Expert
     Technicians" 4× with no icons — paraphrase to 4 distinct hosting
     features (e.g. 24/7 Expert Support, 99.9% Uptime Guarantee, SSD-Powered
     Speed, Free SSL Certificates) and add lucide icons.
  5. Pricing (`section.price_area.p_120`, bg #fafcff): H2 "Choose Your Best
     Pricing Plans" + subtitle; 4 `price_item` white cards (radius 10px,
     shadow `0px 10px 30px rgba(98,71,234,0.1)`): H3 name + H5 audience +
     H2 price (`£39/mo` etc.) + `ul.list` rows (RAM, Core CPU, SSD Storage,
     Transfer, Network In) + full-width purple "Get Started" `.price_btn`
     (bg #6247ea, bottom radius 10px). Plans: Basic £39 (Individuals/
     Freelancers, RAM 1 GB, Core CPU 1, SSD 20 GB, Transfer 1 TB, Network In
     40 Gb), Starter £59 (Small Companies, 2/2/50/1/40), Business £79
     (Medium Companies, 4/4/75/2/80), Enterprise £99 (Large Companies,
     8/8/100/2/100). The screenshot shows the 2nd or 3rd card highlighted —
     consider marking "Business" as featured.
  6. Solution band (`section.solution_area.p_120`, bg #ec9d5f, centered):
     H2 "Looking for a Custom Solution?" + white paragraph + white
     "Request Free Consultation" button (`.white_btn`).
  7. Testimonials (`section.client_says_area.p_120`): 3-column row — left
     column: H3 "What our Client's Say about us" + paragraph ("Acres of
     Diamonds…"); two `says_item` cards (H4 name, H5 role, quote): Nellie
     Vega / Estelle Andrews, both "Head of Marketing, Apple Inc." — vary the
     roles in the recreation. (Static 2-card layout in the DOM; no carousel
     needed.)
  8. Services (`section.service_area.p_120`, bg #6247ea): H2 "Top Services
     We Provided" (white) + subtitle; `service_item` cards (bg
     rgba(255,255,255,0.1), radius 10px, padding 40px 60px 40px 40px, 1px
     border #9381eb): line icon (lnr: earth, lighter, cloud, inbox, screen,
     chart-bars) + title + copy: Cloud Hosting, Web Hosting, Cloud Computing,
     VPS Hosting, Server Analytics (5 in DOM; add a 6th item, e.g. Domain
     Management, for a clean grid).
  9. Blog (`section.latest_grid_blog_area.p_120`): H2 "Latest Posts from Our
     Blog" + subtitle; 3 `l_blog_item` cards: H6 date "10 April, 2018",
     H4 title, paragraph excerpt, and a `view_text` meta row (eye icon
     "4.5k Views", comment icon "07", share icon "362"). No card images in
     the DOM — the source markup is text-only; a small optional thumbnail is
     allowed. Titles are placeholder-repeated ("Benjamin Franklin S Method Of
     Habit Formation") — paraphrase to 3 distinct hosting-relevant posts.
  10. Clients logo (`section.clients_logo_area`, bg #fafcff): centered row of
      5 grayscale client logos (`img/clients-logo/c-logo-1..5.png`).
  11. Footer (`footer.footer-area.p_120`, bg #04091e): four columns — (a)
      "Top Products" links: Managed Website, Manage Reputation, Power Tools,
      Marketing Service; (b) "Newsletter" (form id `mc_embed_signup`):
      "You can trust us. we only send promo offers, not a single spam." +
      email input + Subscribe button; (c) "Instagram Feed": 2×4 grid of 8
      square thumbnails (`img/instagram/Image-01..08.jpg`); (d) brand/blurb
      or social icons per layout; copyright bar — the source's "made with
      Colorlib" becomes the Component Dock link.
- **Design tokens:**
  - Primary brand purple **#6247EA** (55× in style.css) — hero bg
    `.home_banner_area`, `.price_btn` bg, `.service_area` bg, price-card
    shadow tint (rgba(98,71,234,0.1)).
  - Accent orange **#EC9D5F** — `.banner_btn` bg, `.solution_area` bg, top
    utility bar bg (screenshot).
  - Dark navy **#04091E** — `.banner_inner` bg, `.footer-area` bg.
  - Text: headings **#222222**, body/muted **#777777** / #777 / #999.
  - Light section backgrounds **#FAFCFF** (price_area, clients_logo_area),
    **#F9F9FF** / **#FAFAFF** (blog_btn bg, blog sidebar), white cards.
  - Service-card border **#9381EB**; translucent card bg
    rgba(255,255,255,0.1) on purple.
  - Category accent colors seen in CSS for icons/variety: #F8B600 (gold),
    #4CD3E3 (cyan), #38A4FF (blue), #F4E700 (yellow), #F44A40 (red) — use
    sparingly for icon tints if desired.
  - Fonts (Google Fonts): **Open Sans** body (`.home_banner_area` etc.),
    **Roboto** for buttons/`.blog_btn` (500 weight). Nav links uppercase.
  - Buttons: `.banner_btn` solid orange, white text, radius **5px**, padding
    0 50px, line-height 50px, font-size 12px; `.price_btn` solid purple,
    full-width, bottom radius **10px**; `.white_btn` solid white on orange
    band; `.blog_btn` light (#f9f9ff) with #eee border, radius default.
  - Cards/radius: price cards **10px** + soft purple-tinted shadow; service
    cards **10px** with 1px #9381eb border; section padding `p_120`
    (~120px 0).
  - Rhythm: centered section H2 + muted subtitle paragraphs; uppercase nav;
    icon + title + copy card pattern in features and services.
- **Recreation approach:** light theme with purple #6247ea + orange #ec9d5f
  accents; optional thin orange top bar (phone/email/Purchase Hosting);
  white header with hexagon logo + uppercase links (Pages/Blog dropdowns);
  purple hero with dotted-map background (SVG dots or subtle pattern) +
  inline-SVG isometric server illustration + orange CTA; 4 feature icon
  cards; 4 white pricing cards (lucide check icons for the spec rows, purple
  Get Started buttons); orange solution band; 2-card testimonials; purple
  services grid (lucide: Globe for Cloud Hosting, Server for Web/VPS, Cloud
  for Cloud Computing, LineChart for Server Analytics); 3 blog cards;
  5 greyed client logos (text-based wordmarks or picsum); dark 4-column
  footer with subscribe input; all images picsum-seeded
  (`picsum.photos/seed/nexnode-N/w/h`); Google Fonts via `<link>`.

## Requirements

### Requirement: Top bar

The system SHALL render a thin utility bar above the header with contact
details and a purchase call-to-action.

#### Scenario: Utility bar content

- **GIVEN** the Nexnode app is rendered
- **WHEN** the page loads
- **THEN** a thin orange (`#ec9d5f`) bar SHALL show a phone number and an
  email address on the left
- **AND** it SHALL show a "Purchase Hosting" button (dark purple, white
  text) on the right
- **AND** the bar SHALL be hidden on small mobile viewports (optional,
  matching the original's responsive behavior)

### Requirement: Header

The system SHALL render a navigation header with a logo, links, a dropdown,
a search icon, and a mobile menu.

#### Scenario: Navbar

- **GIVEN** the Nexnode app is rendered
- **WHEN** the header displays
- **THEN** it SHALL show the brand "Nexnode" with a hexagon logo mark
- **AND** it SHALL show uppercase navigation links: Home, About, Services,
  Pages, Blog, Contact
- **AND** the Pages link SHALL open a dropdown (Features, Pricing, Elements)
- **AND** it SHALL show a search icon

#### Scenario: Mobile menu

- **WHEN** the viewport is narrow
- **THEN** the links SHALL collapse behind a hamburger toggle
- **AND** clicking the toggle SHALL open/close the menu

### Requirement: Hero

The system SHALL render a full-width purple hero with headline, copy, a
dotted world-map background, an illustration, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the Nexnode app is rendered
- **WHEN** the hero displays
- **THEN** it SHALL have a purple (`#6247ea`) background with a faint dotted
  world-map pattern
- **AND** it SHALL show the H1 "We're Web Hosting Professionals" in bold
  white
- **AND** it SHALL show a supporting paragraph of white copy
- **AND** it SHALL show an orange (`#ec9d5f`) button "Explore Our Features"
  (white text, rounded corners)
- **AND** it SHALL show an isometric server-rack illustration on the right
  (inline SVG, white outlines with green/orange status lights) — per the
  TEMPLATES.md screenshot design

### Requirement: Features section

The system SHALL render a centered heading and a four-card feature grid.

#### Scenario: Feature cards

- **GIVEN** the Nexnode app is rendered
- **WHEN** the features section displays
- **THEN** it SHALL show the H2 "Some Features that Made us Unique" with a
  muted subtitle
- **AND** it SHALL show four feature cards, each with an icon, a title
  (e.g. "24/7 Expert Support", "99.9% Uptime Guarantee", "SSD-Powered
  Speed", "Free SSL Certificates") and a short description
  (the source DOM repeats one placeholder title 4× — paraphrase to distinct
  hosting features)

### Requirement: Pricing section

The system SHALL render a light-background pricing section with four plan
cards.

#### Scenario: Pricing plans

- **GIVEN** the Nexnode app is rendered
- **WHEN** the pricing section displays
- **THEN** it SHALL show the H2 "Choose Your Best Pricing Plans" on a light
  (`#fafcff`) background
- **AND** it SHALL show four white rounded cards: Basic (£39/mo,
  Individuals/Freelancers), Starter (£59/mo, Small Companies), Business
  (£79/mo, Medium Companies) and Enterprise (£99/mo, Large Companies)
- **AND** each card SHALL list RAM, Core CPU, SSD Storage, Transfer and
  Network In rows
- **AND** each card SHALL have a full-width purple "Get Started" button
- **AND** the "Business" card SHALL be visually highlighted as the featured
  plan

### Requirement: Solution band

The system SHALL render an orange call-to-action band.

#### Scenario: Solution band content

- **GIVEN** the Nexnode app is rendered
- **WHEN** the solution band displays
- **THEN** it SHALL have an orange (`#ec9d5f`) centered background
- **AND** it SHALL show the H2 "Looking for a Custom Solution?", a short
  paragraph, and a white "Request Free Consultation" button

### Requirement: Testimonials section

The system SHALL render a testimonials row with a heading and two quote
cards.

#### Scenario: Testimonial cards

- **GIVEN** the Nexnode app is rendered
- **WHEN** the testimonials section displays
- **THEN** it SHALL show the H3 "What our Client's Say about us" with an
  intro paragraph on the left
- **AND** it SHALL show two quote cards, each with a name, a role and a
  short quote

### Requirement: Services section

The system SHALL render a purple services grid with icon cards.

#### Scenario: Service cards

- **GIVEN** the Nexnode app is rendered
- **WHEN** the services section displays
- **THEN** it SHALL have a purple (`#6247ea`) background with the H2 "Top
  Services We Provided" in white
- **AND** it SHALL show translucent white service cards (rounded, subtle
  purple border), each with a line icon, a title (Cloud Hosting, Web
  Hosting, Cloud Computing, VPS Hosting, Server Analytics + one more e.g.
  Domain Management) and a short description

### Requirement: Blog section

The system SHALL render three blog cards with metadata.

#### Scenario: Blog cards

- **GIVEN** the Nexnode app is rendered
- **WHEN** the blog section displays
- **THEN** it SHALL show the H2 "Latest Posts from Our Blog" with a subtitle
- **AND** it SHALL show three blog cards, each with a date, a title, an
  excerpt and a meta row (views, comments, shares)
- **AND** the titles SHALL be paraphrased to distinct hosting-relevant post
  topics (the source repeats one placeholder title 3×)

### Requirement: Client logos

The system SHALL render a light strip of client logos.

#### Scenario: Logo strip

- **GIVEN** the Nexnode app is rendered
- **WHEN** the clients logo strip displays
- **THEN** it SHALL show a centered row of five muted client logo
  placeholders on a light (`#fafcff`) background

### Requirement: Footer

The system SHALL render a dark four-column footer with attribution.

#### Scenario: Footer columns

- **GIVEN** the Nexnode app is rendered
- **WHEN** the footer displays
- **THEN** it SHALL have a dark navy (`#04091e`) background with white text
- **AND** it SHALL show a "Top Products" link list (Managed Website, Manage
  Reputation, Power Tools, Marketing Service)
- **AND** it SHALL show a "Newsletter" column with a short trust line, an
  email input and a Subscribe button
- **AND** it SHALL show an "Instagram Feed" grid of eight square thumbnails
- **AND** the copyright bar SHALL link to `https://www.componentdock.com/`
  (Component Dock attribution)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Nexnode app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar + Header in the banner
  landmark, all sections in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Nexnode — Hosting Template"

## Verification checklist

- [ ] `openspec/specs/template-nexnode/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/nexnode/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: section order matches the Hosthub preview DOM 1:1 (top bar →
      header → hero → features → pricing → solution band → testimonials →
      services → blog → client logos → footer); top bar + hero illustration
      follow the TEMPLATES.md screenshot design (noted as absent from the
      live DOM).
- [ ] Tokens used in the app: primary purple `#6247EA`, accent orange
      `#EC9D5F`, dark navy `#04091E`, light bgs `#FAFCFF`/`#F9F9FF`, text
      `#222222`/`#777777`; Open Sans body + Roboto accents via Google Fonts
      `<link>`; button radii 5px (orange CTA) / 10px (price + service
      cards).
- [ ] No ColorLib references in `apps/nexnode` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] All images picsum-seeded (`picsum.photos/seed/nexnode-N/w/h`); hero
      illustration is inline SVG (no external asset).
- [ ] Implementer gate: `scripts/verify-app.sh nexnode` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.

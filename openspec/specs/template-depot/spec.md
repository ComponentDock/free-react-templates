# Template: Depot (Real Estate Template)

## Purpose

Depot is a single-page real-estate property landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Warehouse" real estate website template (see TEMPLATES.md,
Bootstrap section, line 528; duplicate rows at line 1223 [Business section]
and line 2619 [Real Estate section] — mark EVERY copy `[x]` when done), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

> **Naming note:** the natural name "warehouse" is the ColorLib source name —
> never reuse it. The NEW name is **Depot** (single lowercase word, verified
> free in `apps/`, `openspec/specs/`, and `docs/templates/`). Semantically
> fits the storage/logistics feel of the source name while staying clearly
> original.

The reference is a clean real-estate landing ("Warehouse — Website Template
by Colorlib"): a transparent navbar over a full-screen photo hero carousel
(2 slides), a 6-card property grid, an agents row, a teal "How It Works"
section, an about split with checklist, a light services grid, testimonials,
a news section, a contact split with form, and a dark footer with newsletter

- socials. Despite the "Warehouse" name, the design is property/real-estate
  throughout (listing cards with prices, agents, property services) — the
  industrial-loft hero photo is the only warehouse nod. Keep the real-estate
  content in the recreation; the name "Depot" suits both readings.

## Design tokens (from `https://preview.colorlib.com/theme/warehouse/`)

- **Brand accent:** `#37cfa2` (teal/mint green) — `.btn.btn-primary` solid
  buttons (bg + border, white text; hover flips to `#343a40` dark gray),
  `.bg-primary` (the How It Works section), `.gototop` scroll-top button,
  active carousel dot.
- **Headings:** `"Oswald", sans-serif`, weight 300 by default, ALWAYS
  `text-transform: uppercase`. Hero `h1` is the exception: 3rem (2rem
  mobile), white, weight 900. Section `h2` headings are Oswald 300 uppercase.
- **Nav:** Oswald uppercase 300; links white over the hero. Brand is text
  ("Warehouse" → "Depot"), not an image.
- **Body text:** `"Roboto", -apple-system, ...` stack; `color: gray`
  (`#808080`), `line-height: 1.7`, 1rem. Section headings `h2` etc. inherit
  the Oswald uppercase treatment.
- **Section backgrounds:** white for properties / agents / about /
  testimonials / news; Bootstrap `bg-light` (`#f8f9fa`) for services and
  contact; `#37cfa2` for how-it-works; `#333333` footer (paragraph text
  `#737373`, top border `rgba(255,255,255,0.1)`).
- **Property cards (`.ftco-media-1`):** h3 20px `#000`, location `p`, price
  `strong` (weight normal). Hover: black offset frame slides out behind the
  image (`right: -20px; bottom: -20px`), the details block translates
  right 45px, h3 turns white and p/strong turn `#939393`.
- **Testimonials:** 50px circular member photos; name 1.2rem Oswald
  uppercase; role `span` `#c4c4c4`; quote `p` `#a2a2a2`.
- **How It Works steps:** numbered "01."/"02."/"03." + icon + title +
  lorem; connector line between steps (`:after`, 1px `#000`, 30% width).
- **Buttons/inputs:** `.btn.btn-primary` = solid teal `#37cfa2`, white
  text, Bootstrap radius (~0.25rem); hero CTA `px-5 py-3`. `.form-control`
  height 43px, radius 4px.
- **Fonts (Google Fonts `<link>` in `index.html`):** `"Oswald"` (300/400/
  500/600, headings + nav) and `"Roboto"` (300/400/500, body). The source
  pulls both from Google Fonts — recreate the same way.

## Design reference (replication findings)

- **Original:** ColorLib "Warehouse" — real estate website template
  (source: https://colorlib.com/wp/template/warehouse/). Listed in
  TEMPLATES.md line 528 (Bootstrap section); duplicate rows at lines 1223
  (Business) and 2619 (Real Estate) — same source, ONE implementation
  (line 528 is the claim row; mark ALL THREE `[x]` after merge).
  Screenshot: `warehouse-free-template.jpg` (1200×946, viewed in the
  browser): industrial-loft interior hero photo with dark gradient overlay
  (stronger on the left), centered white uppercase "BUY & SELL PROPERTY
  HERE" + lorem + teal "Get Started" button + two carousel dots (one
  active teal); white uppercase "WAREHOUSE" logo + white uppercase nav
  (HOME · PROPERTIES · AGENTS · ABOUT · NEWS · CONTACT) over the hero; the
  screenshot cuts off after the 3-property thumbnail row — the preview DOM
  is authoritative for the rest.
- **Live preview URL:** https://preview.colorlib.com/theme/warehouse/
  (reachable, HTTP 200, 47.5 KB, title "Warehouse — Website Template by
  Colorlib"). HTML saved to `/tmp/wh/preview.html`; stylesheet
  `https://preview.colorlib.com/theme/warehouse/css/style.css` (27.5 KB)
  saved to `/tmp/wh/style.css`; screenshot `/tmp/wh/shot.jpg`. Plugin CSS:
  bootstrap.min, owl.carousel, owl.theme.default, aos, fancybox,
  jquery-ui, bootstrap-datepicker, flaticon, icomoon — none needed in the
  recreation (icons → lucide-react, carousel → static render).
- **Navbar:** `div.site-navbar.py-4.js-sticky-header` — `position:
absolute; width: 100%` over the hero, transparent; sticky after scroll.
  Brand text "Warehouse" → "Depot" (Oswald, uppercase, white). Menu (Oswald
  uppercase 300, white, hover teal): Home (#home-section, active) ·
  Properties (#properties-section) · Agents (#agents-section) · About
  (#about-section) · News (#news-section) · Contact (#contact-section).
  Mobile: `site-mobile-menu` slide-in panel with a close button (recreate
  as hamburger toggling a stacked panel, `aria-expanded` + focus ring).
- **Hero:** `div.site-blocks-cover.overlay.overlay-2` `id="home-section"`
  — full viewport (`min-height: 600px; height: calc(100vh)`), inline
  `background-image: url(images/hero_1.jpg)`; overlay = `rgba(0,0,0,0.4)`
  flat (`:before`) + `rgba(0,0,0,0.7)`→transparent gradient from top 25%
  (`:after`). Owl carousel `slide-one-item with-dots` with TWO slides,
  centered content: h1 "Buy & Sell Property Here" / "Find Your Perfect
  Property For Your Home" (3rem white 900 uppercase), lorem paragraph, and
  `a.btn.btn-primary.px-5.py-3` "Get Started"; dot pagination below (active
  dot teal `#37cfa2`). Recreate both slides statically (prev/next or dots
  optional but must be jsdom-safe).
- **Properties** `div.site-section#properties-section` — `.row.large-
gutters` of SIX `col-md-6.col-lg-4` cards (`.ftco-media-1` →
  `.ftco-media-1-inner` image link [source links to property-single.html —
  no subpages in the recreation; keep it a link] + `.ftco-media-details`:
  h3 "HD17 19 Utica Ave.", `p` "New York - USA", `strong` "$20,000,000").
  Source reuses property_1/2/3.jpg across the 6 cards — use 6 distinct
  picsum seeds. Hover: black offset frame + details slide right + white
  title (see tokens).
- **Agents** `section.site-section#agents-section` — heading "Real Estate
  Agents" + subtext `p`; THREE `col-md-4` cards: circular/rect photo
  (`images/person_1..3.jpg`), name (h3, e.g. "Allison Holmes"), role span
  "Real Estate Agent".
- **How It Works** `section.py-5.bg-primary.site-section.how-it-works
#howitworks-section` — teal `#37cfa2` background; heading "How It Works";
  THREE steps (`.first-step` / `.second-step` + one plain, with the 1px black
  connector `:after` between the first two on desktop): "01."/"02."/"03."
  number + icon + h3 "Find Property." / "Buy Property." / "Outstanding
  Houses." + lorem. White text on teal.
- **About** `section.site-section#about-section` — row: left `col-md-6`
  image (`images/about.jpg`); right `col-md-6`: h2 "Warehouse Real Estate
  Template" → "Depot Real Estate Template", two paragraphs, `ul.list-
unstyled.ul-check` with FIVE check items ("Placeat maxime animi minus",
  "Dolore qui placeat maxime", "Consectetur adipisicing", "Lorem ipsum
  dolor", "Placeat molestias animi"), and `a.btn.btn-primary` "Learn More".
- **Services** `section.site-section.bg-light#services-section` — heading
  "Services"; SIX `col-md-6.col-lg-4` cards: icon + h3 ("Find Property",
  "Buy Property", "Beautiful Home", "Buildings & Lands", "Property
  Locator", "Mobile Apps") + lorem + "Learn More" text link.
- **Testimonials** `section.site-section.testimonial-wrap
#testimonials-section` — heading "Testimonials"; owl `with-dots` carousel
  of THREE slides (`.ftco-testimonial-1`): 50px circular photo + vcard
  (name + "Customer") + quote paragraph. Names: Allison Holmes, James
  Phelps, Nestor Helsin. Render statically (one testimonial visible) or
  with simple prev/next — jsdom-safe.
- **News & Events** `section.site-section#news-section` — heading "News &
  Events"; THREE `.col-md-6.col-lg-4.h-entry` cards: image
  (`images/img_1..3.jpg`), `.meta` ("Allison Holmes • Jan 18, 2019 •
  News"), title "Popular Real Estate Properties for 2019", excerpt.
- **Contact** `section.site-section.bg-light.bg-image#contact-section` —
  heading "Contct Us" (SOURCE TYPO — recreate as "Contact Us") + subheading
  "Get In Touch"; row: left `col-md-7`: form (First Name, Last Name, Email,
  Subject, Message textarea, `input.btn.btn-primary` "Send Message" — the
  source form has no action, no-op submit); right `col-md-4`: info column —
  "Address" / "203 Fake St. Mountain View, San Francisco, California, USA",
  "Phone" / "+1 232 3235 324", "Email Address" / "youremail@domain.com".
- **Footer** `footer.site-footer` (`background: #333333; padding: 4em 0`
  / 8em desktop) — THREE widget columns: (1) "About Us" heading + blurb;
  (2) "Quick Links" — About Us · Services · Testimonials · Contact Us;
  (3) "Subscribe Newsletter" — `.input-group` (transparent input with
  `border-secondary` + "Send" btn-primary) + "Follow Us" heading + 3
  circular social icon links (facebook · twitter · instagram — icomoon →
  inline SVGs). Bottom bar (`.border-top.pt-5`): "Copyright © <year> All
  rights reserved | This template is made with ❤ by <ColorLib>" — reword
  for Depot with the MANDATORY Component Dock link
  (`https://www.componentdock.com/`), no ColorLib credit.

## Requirements

### Requirement: Transparent navbar with brand and links

The system SHALL render a transparent navbar over the hero with a brand,
uppercase links and a mobile menu.

#### Scenario: Desktop navbar

- **GIVEN** the Depot app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be transparent, positioned over the hero, and
  become sticky with a solid background after scrolling
- **AND** the brand SHALL read "Depot" (Oswald uppercase, white)
- **AND** uppercase white links SHALL follow: Home · Properties · Agents ·
  About · News · Contact (Home active)
- **AND** links SHALL turn teal `#37cfa2` on hover

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered
- **WHEN** the viewport is narrower than the desktop breakpoint
- **THEN** a hamburger button SHALL open a stacked menu panel with
  `aria-expanded` reflecting the open state and a close control

### Requirement: Full-screen photo hero carousel

The system SHALL render a full-viewport hero carousel with two slides, dark
overlay and CTA.

#### Scenario: Hero slides

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL be full-viewport with a full-bleed property-interior
  photo background and a dark overlay (`rgba(0,0,0,0.4)` flat + top
  `rgba(0,0,0,0.7)`→transparent gradient)
- **AND** slide one SHALL show the uppercase white headline "Buy & Sell
  Property Here" with a paragraph and a teal "Get Started" button
- **AND** slide two SHALL show "Find Your Perfect Property For Your Home"
  with a paragraph and a teal "Get Started" button
- **AND** dot pagination SHALL mark the active slide with the teal
  `#37cfa2` accent

### Requirement: Properties grid

The system SHALL render a grid of six property listing cards.

#### Scenario: Property cards

- **GIVEN** the properties section is rendered
- **WHEN** it loads
- **THEN** a 3-column grid (stacking on smaller screens) SHALL show six
  cards, each with a photo, a title (e.g. "HD17 19 Utica Ave."), a
  location line (e.g. "New York - USA") and a price (e.g. "$20,000,000")
- **AND** hovering a card SHALL slide out a black offset frame behind the
  image, translate the details right, and turn the title white

### Requirement: Real estate agents

The system SHALL render an agents section with three member cards.

#### Scenario: Agent cards

- **GIVEN** the agents section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Real Estate Agents" with a subtext
  paragraph
- **AND** three cards SHALL follow, each with a photo, a name (Allison
  Holmes · Dave Simpson · Ben Thompson) and the role "Real Estate Agent"

### Requirement: How It Works steps

The system SHALL render a teal how-it-works section with three numbered
steps.

#### Scenario: Steps content

- **GIVEN** the how-it-works section is rendered
- **WHEN** it loads
- **THEN** it SHALL have the teal `#37cfa2` background with white text and
  the heading "How It Works"
- **AND** three steps SHALL follow — numbered 01./02./03. with an icon, a
  title ("Find Property." · "Buy Property." · "Outstanding Houses.") and a
  description
- **AND** a connector line SHALL run between the first two steps on
  desktop

### Requirement: About split with checklist

The system SHALL render an about section with an image, checklist and CTA.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** it loads
- **THEN** a photo SHALL sit on the left and the right column SHALL show
  the heading "Depot Real Estate Template", two paragraphs, a checklist of
  five items with check icons, and a teal "Learn More" button

### Requirement: Services grid

The system SHALL render a light-grey services section with six icon cards.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Services" on the `#f8f9fa` background
- **AND** six cards SHALL follow — Find Property · Buy Property · Beautiful
  Home · Buildings & Lands · Property Locator · Mobile Apps — each with an
  icon, a title, a description and a "Learn More" text link

### Requirement: Testimonials carousel

The system SHALL render a testimonials section with member quotes.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Testimonials"
- **AND** each testimonial SHALL show a 50px circular member photo, a name
  (Allison Holmes · James Phelps · Nestor Helsin), the role "Customer" and
  a quote paragraph

### Requirement: News & Events

The system SHALL render a news section with three blog cards.

#### Scenario: News cards

- **GIVEN** the news section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "News & Events"
- **AND** three cards SHALL follow, each with a photo, a meta line (author
  "Allison Holmes" · date "Jan 18, 2019" · category "News"), a title
  ("Popular Real Estate Properties for 2019") and an excerpt

### Requirement: Contact form and info

The system SHALL render a contact section with a form and an info column.

#### Scenario: Contact content

- **GIVEN** the contact section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Contact Us" (source typo "Contct Us" is
  fixed) with the subheading "Get In Touch"
- **AND** the form SHALL have First Name, Last Name, Email, Subject and
  Message fields plus a teal "Send Message" submit button (no-op submit)
- **AND** the info column SHALL list Address ("203 Fake St. Mountain View,
  San Francisco, California, USA"), Phone ("+1 232 3235 324") and Email
  Address ("youremail@domain.com")

### Requirement: Dark footer with widgets and copyright

The system SHALL render a dark footer with widget columns, newsletter,
socials and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL show an "About Us" column (blurb), a "Quick Links"
  column (About Us · Services · Testimonials · Contact Us) and a
  "Subscribe Newsletter" column (email input + teal "Send" button, then a
  "Follow Us" heading with three circular social icons — Facebook,
  Twitter, Instagram as inline SVGs)

#### Scenario: Copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** the bottom bar SHALL read "© 2026 Depot. All rights reserved."
  with a "Made with ❤" credit line linking to
  `https://www.componentdock.com/` (mandatory, no ColorLib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Depot app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar + hero in the banner
  landmark, the properties + agents + how-it-works + about + services +
  testimonials + news + contact sections in the main landmark, and the
  footer in the contentinfo landmark
- **AND** the document title SHALL be "Depot — Real Estate Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (navbar
  collapses to the mobile menu, hero text scales, property/agent/service/
  news grids collapse to 1–2 columns, about and contact splits stack,
  footer columns stack)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/depot`
      (`scripts/verify-app.sh depot` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: transparent navbar (brand "Depot", uppercase white
      links + teal hover, mobile hamburger panel), hero (full-viewport
      photo + dark overlay + 2 slides with "Get Started" CTAs + dots),
      properties (6 cards with title/location/price + black-frame hover),
      agents (3 cards with photos + "Real Estate Agent" role), how-it-works
      (teal `#37cfa2` + 3 numbered steps + connector), about (image +
      "Depot Real Estate Template" + 5-item checklist + "Learn More"),
      services (`#f8f9fa` + 6 icon cards + "Learn More" links),
      testimonials (3 members + circular photos + "Customer"), news (3
      h-entry cards), contact ("Contact Us" + form + info column), footer
      (`#333333`, About Us / Quick Links / newsletter + Follow Us socials + Component Dock credit) match the Warehouse preview 1:1.
- [ ] Design tokens in `@theme`: brand teal `#37cfa2` (button hover
      `#343a40`); headings Oswald uppercase (hero h1 3rem/900 white);
      body Roboto gray `#808080`; section bg `#f8f9fa`; footer bg
      `#333333` (text `#737373`); testimonial quote `#a2a2a2`; Oswald +
      Roboto via Google Fonts `<link>` in `index.html`.
- [ ] Buttons: teal `#37cfa2` bg, white text, Bootstrap radius; hero CTA
      `px-5 py-3`; inputs 43px tall, 4px radius.
- [ ] Placeholder images use `picsum.photos/seed/depot-<n>/<w>/<h>` (2
      hero backgrounds, 6 property photos, 3 agent portraits, about photo,
      3 news photos, 3 testimonial portraits); icons from lucide-react
      (home, search, building-2, check, menu, x, quote, map-pin, phone,
      mail, send, arrow-right); brand socials (facebook, twitter,
      instagram) as inline SVGs; no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Warehouse"),
      preview URL (https://preview.colorlib.com/theme/warehouse/), design
      tokens, and what differs (name, placeholder images, paraphrased
      copy, "Contct Us" typo fixed, no property-single subpage, single
      page only).

# Template: Haulage (Logistics / Cargo)

## Purpose

Haulage is a single-page logistics / cargo-shipping website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Cargo" template (see TEMPLATES.md — line 357, Bootstrap section;
the same source is DUPLICATED at lines 925, 2296 and 2953 — all four rows
must be marked `[x]` when done), built under a NEW name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern logistics landing page: a light top bar (contact
info + social icons), a sticky white navbar (bold uppercase logo + menu),
a full-viewport hero with a shipping-port photo under a blue→cyan gradient
overlay plus a "track your cargo" form, a photo service carousel that
overlaps the hero bottom, an icon-card "What We Offer" carousel, an About
section with a video-image block and animated counters, a team carousel, a
three-tier pricing row, a two-column FAQ grid, a "Why Us" checklist block,
a testimonials carousel, a blog/articles carousel, a contact section
(contact info + form), and a dark `#333` footer with four columns. The
brand accent is **orange `#ff8b00`** on white / light-grey (`#f6f5f5`)
neutrals, with a two-font system: **Oswald** (uppercase headings) and
**Rubik** (body). Haulage recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cargo" — `https://colorlib.com/wp/template/cargo/`
  (Bootstrap category item, logistics/cargo-shipping style). TEMPLATES.md
  has **FOUR copies** of this item (lines 357, 925, 2296, 2953 — all
  `- [ ]`); mark ALL `[x]` when done. None is shipped yet.
- **Preview URL:** `https://preview.colorlib.com/theme/cargo/` — **HTTP 200**
  (47.7 KB, ~0.21 s), fully reachable; structure + tokens below are from
  this live DOM and its `css/style.css` (28.8 KB) + `css/bootstrap.min.css`
  (btn-primary override). Screenshot used to confirm the visual design
  (see below).
- **Screenshot:** `cargo-free-template.jpg` (1200×946, verified via browser
  vision): top bar (email `info@yourdomain.com`, phone `1+ (234) 5678 9101`,
  Twitter/Facebook icons); navbar with bold ORANGE uppercase logo "CARGO"
  left and menu right (Home, Services, About Us dropdown, Why Us,
  Testimonials, Blog, Contact); hero = shipping-port photo (cranes + cargo
  ships) heavily overlaid with a bright blue→cyan gradient, large WHITE
  uppercase headline "CHOOSE YOUR QUALITY DELIVERY OF YOUR CARGO", lorem
  subtext, white tracking-number input + bright ORANGE "Track Now" button;
  below, three image cards (Sea Freight — cargo ship on ocean, Air
  Freight — airplane in blue sky, Package Forwarding — person holding a
  box) with orange titles and grey text. Modern, tech-forward; white
  content on light-grey sections, dark text, orange accents everywhere.
- **Section structure (from the live DOM, in order):**
  1. `div.top-bar` (border-bottom 1px `#e9ecef`): email, phone, Twitter +
     Facebook icon links.
  2. `header.site-navbar.js-sticky-header.site-navbar-target` (sticky,
     padding 1rem, white): `span.site-logo` "CARGO" (2rem, uppercase,
     weight 900, orange) + `nav.site-navigation` links: **Home, Services,
     About Us, Team, Pricing, FAQ, Why Us, Testimonials, Blog, Contact**
     (active/hover orange; mobile: `site-mobile-menu` off-canvas + hamburger
     `toggle-button`).
  3. **Hero** — `div.ftco-blocks-cover-1 > div.ftco-cover-1.overlay`
     (100vh, min-height 600px; bg image
     `https://source.unsplash.com/pSyfecRCBQA/1920x780` + `:before` overlay
     `linear-gradient(45deg, #377aff 0%, #00d9ff 100%)` opacity .95):
     `h1` white "Choose Your Quality Delivery of Your Cargo", white lorem
     `p`, `form` with `input.form-control` (placeholder "Enter your
     tracking number", 55px, radius 4px) + `input.btn.btn-primary`
     value "Track Now" (orange, 55px, radius 4px).
  4. **Service image carousel** — `div.ftco-service-image-1.pb-5`
     (`margin-top: -70px` — overlaps the hero bottom; desktop shows all
     cards as columns via the `owl-all` trick): `owl-carousel.owl-all` × 3
     `div.service.text-center` cards: `img.img-fluid` (photo) + `h3`
     (Oswald, 1.4rem, orange) + `p` (`#999999`). Hover (≥768px): image
     lifts 5px with `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.3)`.
     Titles: **Sea Freight, Air Freight, Package Forwarding**.
  5. **What We Offer** — `section.site-section.bg-light` (`#f6f5f5`):
     `div.block-heading-1` (kicker `span` + `h2` "What We Offer" — Oswald
     uppercase 3rem/2rem, `#ff8b00`; blurb `p`) + `owl-carousel.owl-all`
     × 6 `div.block__35630` cards: `div.icon` (flaticon: ferry, airplane,
     …) + `h3.mb-3` title + `p`. Titles: **Sea Freight, Air Freight,
     Package Forwarding, Trucking, Warehouse, Delivery**.
  6. **About Us** — `section.site-section` (white): `block-heading-1`
     (h2 "About Us" orange) + lorem paragraph.
  7. **Video + counters** — `section.site-section.bg-light#about-section`:
     `div.block-img-video-1-wrap` > `figure.block-img-video-1` (full-width
     image with a fancybox play link → video modal, `margin-top: -10rem`
     overlap handled on desktop) + counters `div.row` × 4
     `div.block-counter-1` (text-center): `span.number` (4rem, orange:
     **50+, 300+, 108+, 1500+**) + `span.caption` (Years of Experience,
     Companies, Covered Countries, Couriers).
  8. **Our Staff** — `section.site-section`: `block-heading-1` (h2 "Our
     Staff") + `owl-carousel.owl-all` × 6 `div.block-team-member-1
text-center rounded h-100` cards: photo, `h3` name (Max Carlson,
     Charlotte Pilat, Nicole Lewis, Jean Smith, Bob Carry, Anne Fisher),
     role `span` (uppercase 12px, letter-spacing .1em, `#b8b8b8`:
     Co-Founder / Co-Founder / Co-Founder / Financial Manager / Loader
     Manager / Package Manager), bio `p`, `div.block-social-1` social
     icons.
  9. **Pricing** — `section.site-section.bg-light`: `block-heading-1`
     (h2 "Pricing") + 3 `div.pricing` cards (white, padding 30px):
     `h3.text-black` plan name (Oswald uppercase: **Basic, Premium,
     Professional**), `div.price` (number 3rem `#ff8b00`: **$47, $200,
     $750**), 4 feature `li` (orange checkmark bullets — "Officia quaerat
     eaque neque", "Possimus aut consequuntur incidunt", "Lorem ipsum
     dolor sit amet", "Consectetur adipisicing elit"), `a.btn` "Buy Now".
  10. **FAQ** — `section.site-section`: `block-heading-1.col-12
text-center` (h2 "Frequently Ask Questions") + 2-column `div.row`
      (`col-lg-6` × 2, ~3 items each): each `div.mb-5` has `h3.h4
text-black` question (with `icon-question_answer text-primary` icon)
      - answer `p`. Questions: "Can I accept both Paypal and Stripe?",
        "What available is refund period?", "Where are you from?", "What is
        your opening time?" (repeated to fill the grid).
  11. **Why Us** — `section.block__73694.site-section.border-top`: h2 "Why
      Us" + `ul.ul-check.primary` (orange checkmarks): **Cargo express,
      Secure Services, Secure Warehouseing, Cost savings, Proven by great
      companies** + `div.block__73422` (bg image with cover).
  12. **Happy Clients** — `section.site-section.bg-light.block-13`:
      `block-heading-1` (h2 "Happy Clients") + `owl-carousel.nonloop-block-13`
      × 4 `div.block-testimony-1.text-center`: quote `p` (lorem) + name:
      **Ricky Fisher, Ken Davis, Mellisa Griffin, Robert Steward**.
  13. **Articles** — `section.site-section.py-5`: `block-heading-1` (h2
      "Articles") + `owl-carousel.owl-all` × 2 `div.blog-entry` rows:
      `div.blog-thumbnail` (flex 0 0 150px, `img` radius 4px) + `div.blog-excerpt`:
      meta `p` ("Apr 19, 2019"), title link (black → orange hover:
      "Knowing the Difference Is Key to Effective Logistics"), excerpt,
      "Read More" link.
  14. **Contact Us** — `section.site-section.bg-light`: `block-heading-1`
      (h2 "Contact Us"); left column: "Contact Info" — Address: 34 Street
      Name, City Name Here, United States · Phone: +1 242 4942 290 ·
      Email: info@yourdomain.com; right column: "Get In Touch" `form`:
      First name, Last name (both `input` 55px), Email address,
      textarea "Write your message.", submit `input.btn.btn-primary`
      value "Send Message".
  15. **Footer** — `footer.site-footer` (`#333333`, padding 4em/8em):
      4 columns — About Us (blurb + links About Us / Testimonials / Terms
      of Service / Privacy / Contact Us), Features (link list), Subscribe
      to Newsletter (`form.footer-suscribe-form`: email input + white
      btn), Follow Us (social icons); bottom bar `border-top`
      rgba(255,255,255,0.1) with copyright + credit line.
- **Behavior notes:** the navbar is sticky (`js-sticky-header`); the hero
  covers the full viewport; mobile gets an off-canvas `site-mobile-menu`
  with a close button. Carousels (owl) show static multi-column grids on
  desktop (`owl-all` resets transforms) and slide on mobile. Counters
  animate (`data-number` count-up). The video play opens a fancybox modal
  (recreation: a lightweight modal or a placeholder link is acceptable).
  The original is a one-page demo — the recreation is one page with nav
  links as in-page anchors.

## Design tokens (extracted from `css/style.css` + bootstrap override)

- Brand accent: **#ff8b00** (orange; 23 uses — `.site-logo`, nav active +
  hover, `.block-heading-1 h2` section titles, `.btn-primary` bg, pricing
  price number, `.block-counter-1 .number`, carousel active dot, form
  control focus border, `ul-check.primary` checkmarks, blog link hover).
- Hero overlay gradient: **#377aff → #00d9ff**, `linear-gradient(45deg)`,
  opacity .95, over a background image (white text on top).
- Fonts:
  - Headings (h1–h5 + .h1–.h5): **"Oswald", sans-serif**,
    `text-transform: uppercase` (Google Fonts `<link>` in the recreation).
  - Body: **"Rubik", -apple-system, …, sans-serif** — 1rem, line-height
    1.7, weight 400, color **#939393** (Google Fonts).
  - `.block-heading-1 span` kicker: uppercase, 12px, letter-spacing
    .1em, bold, color **#b8b8b8**.
  - Logo: 2rem, uppercase, weight 900, orange.
- Buttons: `.btn-primary` = `background #ff8b00; border-color #ff8b00`
  (from the compiled bootstrap override; text `#212529`→white via
  `text-white` utility); hover = outline variant (transparent bg + orange
  border/text, `.primary-primary-outline--hover`). Hero form controls +
  button: height **55px**, `border-radius: 4px`, transparent border.
  `.btn-md`: padding 8px 20px.
- Section headings (`.block-heading-1 h2`): Oswald uppercase, **3rem**
  (2rem ≤ 991px), color `#ff8b00`, followed by a blurb paragraph.
- Section backgrounds: white (`site-section`), light-grey **#f6f5f5**
  (`site-section.bg-light` — the template overrides Bootstrap's `#f8f9fa`).
- Pricing card: white, padding 30px; plan name Oswald uppercase text-black;
  price number **3rem `#ff8b00`** (`$47`/`$200`/`$750`) with a `#cccccc`
  suffix label; feature list rows 20px apart with orange checkmarks.
- Counters: `.block-counter-1 .number` **4rem `#ff8b00`**, caption below
  (both `display: block; line-height: 1`).
- Carousel dots: 7px circles, `#ccc`, active `#ff8b00`; hidden on desktop
  (≥992px) for the `owl-all` grids.
- Blog entry: thumbnail flex `0 0 150px`, `border-radius: 4px`; title link
  `#000` → `#ff8b00` hover.
- Form controls (`.form-control`): height 55px, white bg, `#ff8b00` focus
  border, no box-shadow.
- Top bar: `border-bottom: 1px solid #e9ecef`.
- Footer: background **#333333**, padding 4em (8em ≥768px); headings/`p`
  white; links `rgba(255,255,255,0.5)`; bottom border
  `rgba(255,255,255,0.1)`.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/haulage-<n>/<w>/<h>` (deterministic per
  template); icons from `lucide-react` (ship, plane, package, truck,
  warehouse, truck/delivery, check, play, mail, phone, map-pin, menu, x,
  quote, calendar, arrow-right; brand social icons via inline SVG);
  no ColorLib assets.

## Requirements

### Requirement: Top bar

The system SHALL render a thin top bar with contact details and social
icons above the navbar.

#### Scenario: Top bar renders

- **GIVEN** the Haulage app is rendered at a desktop viewport
- **WHEN** the page is displayed
- **THEN** a top bar with a `#e9ecef` bottom border SHALL render above the
  navbar
- **AND** it SHALL show the email `info@yourdomain.com`, the phone
  `1+ (234) 5678 9101`, and Twitter + Facebook social icon links

### Requirement: Sticky navbar

The system SHALL render a sticky navbar with the brand logo and the full
menu.

#### Scenario: Navbar renders on desktop

- **GIVEN** the Haulage app is rendered at a desktop viewport
- **WHEN** the page is displayed
- **THEN** a sticky white navbar SHALL render with the logo "Haulage"
  (uppercase, weight 900, orange) on the left
- **AND** the menu SHALL list Home, Services, About Us, Team, Pricing, FAQ,
  Why Us, Testimonials, Blog and Contact
- **AND** the active link and link hover SHALL use the `#ff8b00` accent

#### Scenario: Mobile menu

- **GIVEN** the Haulage app is rendered at a mobile viewport
- **WHEN** the hamburger toggle is activated
- **THEN** an off-canvas menu SHALL open with the same links
- **AND** the toggle SHALL expose `aria-expanded` and the menu SHALL be
  keyboard-operable (close via toggle / Escape)

### Requirement: Hero with tracking form

The system SHALL render a full-viewport hero with a gradient overlay, a
headline, and a cargo-tracking form.

#### Scenario: Hero renders

- **GIVEN** the Haulage app is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL cover the full viewport (min-height 600px) with a
  background image and a `#377aff → #00d9ff` 45° gradient overlay at ~95%
  opacity
- **AND** the headline "Choose Your Quality Delivery of Your Cargo" SHALL
  render in white uppercase (Oswald)
- **AND** a white subtext paragraph SHALL render below the headline
- **AND** a form SHALL render a 55px white input with the placeholder
  "Enter your tracking number" and a 55px orange "Track Now" button
  (radius 4px)

#### Scenario: Tracking form submits

- **GIVEN** the hero tracking form is displayed
- **WHEN** the user submits the form with a tracking number
- **THEN** the form SHALL submit without a page reload and SHALL show a
  confirmation (e.g. a success message) for the entered number

### Requirement: Service image cards

The system SHALL render three photo service cards that overlap the hero
bottom.

#### Scenario: Image service cards render

- **GIVEN** the Haulage app is rendered
- **WHEN** the services row below the hero is displayed
- **THEN** three centered cards (Sea Freight, Air Freight, Package
  Forwarding) SHALL render with a photo, an orange Oswald title, and grey
  (`#999999`) text
- **AND** the row SHALL overlap the hero's bottom edge (~70px)
- **AND** on hover (desktop) the photo SHALL lift 5px with a soft shadow

### Requirement: What We Offer

The system SHALL render a light-grey section with an icon-card grid of six
services.

#### Scenario: Offer cards render

- **GIVEN** the Haulage app is rendered
- **WHEN** the What We Offer section is displayed
- **THEN** the section SHALL use the `#f6f5f5` background
- **AND** the section heading "What We Offer" SHALL render in Oswald
  uppercase 3rem `#ff8b00` with a blurb paragraph below
- **AND** six cards SHALL render — Sea Freight, Air Freight, Package
  Forwarding, Trucking, Warehouse, Delivery — each with an icon, an
  Oswald title, and a short paragraph

### Requirement: About Us

The system SHALL render an About section with an intro paragraph, a
video-image block, and an animated counters row.

#### Scenario: About section renders

- **GIVEN** the Haulage app is rendered
- **WHEN** the About Us section is displayed
- **THEN** the "About Us" heading (orange Oswald) with a lorem paragraph
  SHALL render on a white section
- **AND** a full-width image with a play-button overlay SHALL render below
  it on the `#f6f5f5` background

#### Scenario: Counters render

- **GIVEN** the About section is displayed
- **WHEN** the counters row is shown
- **THEN** four counters SHALL render (text-center): 50+ Years of
  Experience, 300+ Companies, 108+ Covered Countries, 1500+ Couriers
- **AND** each number SHALL be 4rem in `#ff8b00` with a caption below

### Requirement: Team carousel

The system SHALL render a team section with six member cards.

#### Scenario: Team cards render

- **GIVEN** the Haulage app is rendered
- **WHEN** the Our Staff section is displayed
- **THEN** six rounded, centered cards SHALL render with a photo, an
  Oswald name (Max Carlson, Charlotte Pilat, Nicole Lewis, Jean Smith,
  Bob Carry, Anne Fisher), a role line (uppercase 12px, letter-spacing
  .1em, `#b8b8b8`), a short bio, and social icons

### Requirement: Pricing

The system SHALL render a three-tier pricing row with orange prices and
"Buy Now" buttons.

#### Scenario: Pricing cards render

- **GIVEN** the Haulage app is rendered
- **WHEN** the Pricing section is displayed
- **THEN** three white cards (padding 30px) SHALL render with the plan
  names Basic, Premium and Professional (Oswald uppercase)
- **AND** the prices SHALL render as 3rem `#ff8b00` numbers — $47, $200,
  $750 — each with a muted (`#cccccc`) label
- **AND** each card SHALL list four features with orange checkmarks and a
  "Buy Now" orange button

### Requirement: FAQ grid

The system SHALL render a two-column FAQ grid of question/answer pairs.

#### Scenario: FAQ items render

- **GIVEN** the Haulage app is rendered
- **WHEN** the Frequently Ask Questions section is displayed
- **THEN** the centered heading SHALL render (Oswald uppercase orange)
- **AND** a two-column grid SHALL render at least six Q&A items, each with
  a question icon, an Oswald black question (e.g. "Can I accept both
  Paypal and Stripe?", "What available is refund period?", "Where are you
  from?", "What is your opening time?"), and an answer paragraph

### Requirement: Why Us

The system SHALL render a bordered section with an orange checklist and an
image block.

#### Scenario: Why Us renders

- **GIVEN** the Haulage app is rendered
- **WHEN** the Why Us section is displayed
- **THEN** the "Why Us" heading SHALL render
- **AND** a checklist SHALL render with orange checkmarks: Cargo express,
  Secure Services, Secure Warehouseing, Cost savings, Proven by great
  companies
- **AND** an image block (cover background) SHALL render beside the list

### Requirement: Happy Clients testimonials

The system SHALL render a light-grey testimonials carousel.

#### Scenario: Testimonials render

- **GIVEN** the Haulage app is rendered
- **WHEN** the Happy Clients section is displayed
- **THEN** the section SHALL render on `#f6f5f5` with the "Happy Clients"
  heading
- **AND** at least four centered testimonial cards SHALL render, each with
  a quote and a name (Ricky Fisher, Ken Davis, Mellisa Griffin, Robert
  Steward)

### Requirement: Articles

The system SHALL render a blog carousel with two article entries.

#### Scenario: Article entries render

- **GIVEN** the Haulage app is rendered
- **WHEN** the Articles section is displayed
- **THEN** each entry SHALL render a 150px thumbnail (radius 4px), a meta
  line (e.g. "Apr 19, 2019"), a title link ("Knowing the Difference Is Key
  to Effective Logistics" — black, orange on hover), an excerpt, and a
  "Read More" link

### Requirement: Contact section

The system SHALL render contact info and a contact form.

#### Scenario: Contact renders

- **GIVEN** the Haulage app is rendered
- **WHEN** the Contact Us section is displayed
- **THEN** the "Contact Us" heading SHALL render
- **AND** a Contact Info column SHALL list the address (34 Street Name,
  City Name Here, United States), phone (+1 242 4942 290) and email
  (info@yourdomain.com)
- **AND** a "Get In Touch" form SHALL render First name, Last name and
  Email address inputs, a "Write your message." textarea, and an orange
  "Send Message" button

#### Scenario: Contact form validates

- **GIVEN** the contact form is displayed
- **WHEN** the user submits with missing fields or an invalid email
- **THEN** per-field errors SHALL show and the form SHALL NOT submit
- **AND** submitting a valid form SHALL show a success message

### Requirement: Footer

The system SHALL render a dark four-column footer.

#### Scenario: Footer renders

- **GIVEN** the Haulage app is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** a `#333333` footer SHALL render with four columns: About Us
  (blurb + links About Us / Testimonials / Terms of Service / Privacy /
  Contact Us), Features (links), Subscribe to Newsletter (email input +
  button), Follow Us (social icons)
- **AND** a bottom bar SHALL render the copyright and credit line with a
  `rgba(255,255,255,0.1)` top border

#### Scenario: Newsletter validates the email

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user submits an invalid email
- **THEN** a per-field error SHALL show and the form SHALL NOT submit
- **AND** submitting a valid email SHALL show a success message

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Haulage app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: top bar → navbar → hero →
  service image cards → What We Offer → About Us → video/counters → Our
  Staff → Pricing → FAQ → Why Us → Happy Clients → Articles → Contact →
  footer
- **AND** the document title SHALL be "Haulage — Logistics & Cargo"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- haulage` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: top bar + sticky navbar, 100vh
      hero, overlapping service image cards, and the 13-section body order
      (see full-page scenario).
- [ ] Design tokens applied: accent `#ff8b00`, hero gradient
      `#377aff → #00d9ff` (45°), body Rubik 1rem/1.7 `#939393`, headings
      Oswald uppercase, `bg-light #f6f5f5`, footer `#333333`, section h2
      3rem orange, kicker 12px uppercase `#b8b8b8`.
- [ ] Buttons are orange `btn-primary` with an outline hover; hero + form
      controls are 55px with 4px radius; focus border orange.
- [ ] Counters animate (50+/300+/108+/1500+), numbers 4rem orange.
- [ ] Pricing cards: $47/$200/$750 in 3rem orange, 4 orange-checkmark
      features, "Buy Now" buttons.
- [ ] FAQ is a two-column Q&A grid (question icon + Oswald question +
      answer), NOT an accordion.
- [ ] All forms (tracking, contact, newsletter) validate with
      error/success states; tracking submit shows the entered number.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets); icons
      from lucide-react / inline SVG (no brand icons from lucide).
- [ ] PR description records source (ColorLib Cargo), preview URL
      (HTTP 200), tokens, and renames; TEMPLATES.md marks ALL FOUR copies
      (lines 357, 925, 2296, 2953) `[x]` when done.

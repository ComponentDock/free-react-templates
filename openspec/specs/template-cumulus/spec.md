# Template: Cumulus (Bootstrap)

## Purpose

Cumulus is a single-page cloud-hosting / cloud-management corporate template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cloudtemplate" website template design (see TEMPLATES.md,
Bootstrap category, line 361; duplicate row at line 3051), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cloudtemplate" — free Bootstrap 4 cloud hosting /
  cloud management marketing template from the "ftco" template family: a
  transparent dark navbar over a purple split hero (SVG office illustration +
  headline), a grayscale partner-logo strip, a 6-card "Cloud Services" grid on
  light gray, a 5-item "What Our Software Can Do For You" feature row, a purple
  animated counter band ("We Always Try To Understand Users Expectation"), a
  "Have any question about us?" pink CTA banner, a split FAQ section (700px
  photo + pill-button accordion), a 4-plan pricing grid with pink "Choose
  Plan" buttons, a testimonials carousel with pink dots, a 3-card "Recent
  Blog" row, and a deep-purple 4-column footer with a copyright bar
  (source: https://colorlib.com/wp/template/cloudtemplate/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/cloudtemplate/`
  (HTTP 200, ~41.7KB HTML). DOM + `css/style.css` (78KB) extracted and
  analyzed; tokens below come from those stylesheets. Screenshot
  `cloudtemplate-free-template.jpg` viewed in browser (1200×946): confirms the
  dark navbar (white "Get started" button on the right — white bg + purple
  text in the screenshot state), the purple hero with a flat vector
  illustration of two office workers at a desk (left) + headline text (right),
  a white logo strip of grayscale tech brand logos, and the top of the
  light-gray "Cloud Services" section with three cards carrying small green
  circular icons. Footer is below the fold in the screenshot; fully specified
  from the DOM/CSS.
- **Commented-out section (do NOT render):** the preview HTML contains a
  `<!-- <section class="ftco-domain"> -->` block ("Search Your Domain Name" +
  TLD select + Search button + price row `.com $9.75 · .net $9.50 · .biz
$8.95 · .co $7.80 · .me $7.95`) that is commented out and NOT rendered, and
  the screenshot confirms it is absent. The recreation must match the
  RENDERED page — skip this section.
- **Section order (1:1) from the rendered DOM:**
  1. Navbar (`nav#ftco-navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light`)
     — transparent over the hero (`position: absolute; top: 20px`, `z-index:
3`); brand "Cumulus" white (20px, weight 900); links Home, Company
     (dropdown), Pricing, Leadership, Blog, Contact — 16px, weight 600, white
     at 80% opacity, full white on hover; CTA `li.nav-item.cta > a.nav-link`
     "Get started" — green `#21bf73`, 1px border, `padding: .5rem 20px`,
     radius 5px, hover → white bg + purple `#3f52e3` text. Mobile toggler:
     "MENU" uppercase text button. On scroll (`scrolled` state): `position:
fixed`, white bg + shadow `0 0 10px 0 rgba(0,0,0,.1)`, links black,
     active link purple `#3f52e3`, CTA becomes solid purple.
  2. Hero (`div.hero-wrap.js-fullheight`): `div.overlay` covering the section
     with solid `background: #3f52e3`; inner row is a flex split —
     `img.one-third` SVG illustration (undraw co-working scene: two office
     workers at a desk with a plant, flat style) with `order-md-first` (left
     on desktop, per screenshot) + `div.one-forth` text: `span.subheading`
     "Cloud Template" → "Cumulus", `h1.mb-3` three spans "Cloud, Management,
     Template", blurb paragraph, `a.btn.btn-secondary.px-4.py-3` "Get in
     touch" (btn-secondary overridden to green `#21bf73`).
  3. Partners (`section.ftco-section.ftco-partner`): 5 grayscale partner logo
     images in a row (`padding: 5em 0`).
  4. Cloud Services (`section.ftco-section.services-section.bg-light`):
     centered `h2.mb-3` "Cloud Services"; 6 cards in `col-lg-4.col-md-6` (3×2
     grid), each `div.media.block-6.services.d-flex`: circular icon badge
     (flaticon: cloud / customer-service / life-insurance / cloud-computing /
     settings / cloud — green per screenshot) + `h3.heading` title +
     `p.mb-0` blurb. Titles: Cloud databases, Website Hosting, File Storage,
     Forex Trading, File Backups, Remote Desktop.
  5. Features (`section.ftco-section`, white): centered `h2.mb-3` "What Our
     Software Can Do For You"; 5 media items (icon circle + `h3.heading` +
     blurb): Responsive Design, Android Apps Development, iOS Apps
     Development, UX/UI Design, Print Ready Design — icon badges use two
     variants (`icon` ×3, `icon.icon-2` ×2) for a two-tone treatment.
  6. Counter (`section.ftco-section.ftco-counter.img#section-counter`):
     `background: #3f52e3`, `padding: 5em 0`; centered white `h2.mb-3` "We
     Always Try To Understand Users Expectation"; 4 counters in
     `col-md-3.counter-wrap` — Download, Awards Won, Contributors, Satisfied
     Customers — each `strong.number` 40px bold white + label 16px
     `rgba(255,255,255,.7)`.
  7. CTA banner (`section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light`): row
     with `col-md-8` — `h3` "Have any question about us?" + intro paragraph;
     `col-md-4` centered — `a.btn.btn-tertiary.px-4.py-3` "Get in Touch"
     (pink `#ff8ba7`, hover `#ff7294`).
  8. FAQ (`section.ftco-section.ftco-no-pb.bg-light.ftco-faqs`): `col-lg-6`
     `div.img.img-faqs` (700px tall, `background-image` photo, radius 4px,
     shadow `17px 25px 56px -22px rgba(0,0,0,.38)`); `col-lg-6.pl-lg-5` —
     `h2.mb-3` "Frequently Asks Questions" + intro + `#accordion.myaccordion`
     of 4 cards (collapseOne–Four): full-width pill buttons (`border-radius:
40px`, weight 600, black text, `box-shadow 0 2px 8px -4px
rgba(0,0,0,.2)`, `margin-bottom: 10px`) + chevron icon
     (`rgba(0,0,0,.3)`); questions "How to Make an Account?", "How to manage
     your Dashboard?", "What are those requirements for businesses?", + one
     more.
  9. Pricing (`section.ftco-section.bg-light`): centered `h2.mb-4` "Our Best
     Pricing"; 4 plan cards (`col-md-3`, `div.block-7` white, `padding:
30px`) — Basic $0 ("100% free. Forever"), Advance $19, Expert $49, Pro
     $99 (all "/mo"); price = `sup` $ + `span.number` 60px weight 600
     `#203d67`; tagline; `h3.heading-2.mb-3` "Enjoy All The Features";
     feature list (Bandwidth X GB, Storage Y GB, `$X.XX / GB`Overages, All
features — text`#72789a`, strong `#203d67`); `a.btn.btn-tertiary
     d-block.px-3.py-3.mb-4` "Choose Plan" (pink). Hover: an offset purple
block (`background: #3f52e3`, `border-radius: 4px`, `bottom: -20px`,
`opacity: 0 → 1`, `transition .6s`) appears behind the card.
  10. Testimonials (`section.ftco-section.testimony-section`, white):
      centered "What Users Saying" + carousel of 4 `div.testimony-wrap`
      quotes (name + role, e.g. Mark Web — Marketing Manager / Interface
      Designer / UI Designer); dots 10px circles `rgba(0,0,0,.1)`, active
      pink `#ff8ba7`; prev/next arrows gray → purple `#3f52e3` on hover.
  11. Recent Blog (`section.ftco-section.bg-light`): centered `h2` "Recent
      Blog" + intro; 3 cards `col-md-4` (`div.blog-entry`): `a.block-20` 275px
      background photo + `div.text.d-flex.py-4` — meta column (date "May 17,
      2020", "Admin", "3" comments with chat icon) + `div.desc.pl-3` `h3`
      "Everything You Need to Know About Cloud Template" (repeated ×3 in the
      source; paraphrase per card).
  12. Footer (`footer.ftco-footer.ftco-bg-dark.ftco-section`,
      `background: #421b9b`, `padding: 5em 0 3em`; `.ftco-bg-dark` comes
      before `.ftco-footer` in the stylesheet so the purple wins): 4 columns —
      brand "Cumulus" + blurb + `ul.ftco-footer-social` (3 circular 40px
      green `#21bf73` icons: twitter, facebook, instagram); "Useful Links"
      (Company, Pricing, Leadership, Blog, Contact); "Navigational" (Join Us,
      Blog, Privacy & Policy, Terms & Condition); "Office" (map-marker +
      address "203 Fake St. Mountain View, San Francisco, California, USA",
      phone "+2 392 3929 210", envelope "info@yourdomain.com"). Footer
      headings white 20px weight 700 (`margin-bottom: 40px`); body/links
      `rgba(255,255,255,.7)` → white on hover. Copyright row: "Copyright ©
      All rights reserved | This template is made with by Colorlib" →
      paraphrase to the recreation ("made with by Free React Templates").

## Design tokens (extracted from `css/style.css` + DOM)

- Font (Google Fonts, Work Sans 400/500/600/700/900): **Work Sans** — brand
  20px weight 900; nav links 16px weight 600; headings bold; section
  headings `h2.mb-3` large bold; FAQ buttons 18px weight 500; footer
  headings 20px weight 700.
- Brand purple/indigo: **`#3f52e3`** — hero overlay + hero background, CTA
  banner behind pricing hover block, counter section background, scrolled-nav
  active link, hover `#293ee0` (btn-primary hover).
- Secondary green: **`#21bf73`** — nav "Get started" CTA (radius 5px), hero
  "Get in touch" button, footer social circles; white-bg + green border hover
  variant.
- Pink accent: **`#ff8ba7`** — btn-tertiary ("Get in Touch" banner CTA,
  "Choose Plan" pricing buttons), testimonial active dot; hover `#ff7294`.
- Footer background: **`#421b9b`** (deep purple). Bootstrap btn-primary base
  blue `#007bff` / `#0069d9` (overridden by `#3f52e3` in the theme rules).
- Ink / text: price numbers `#203d67`; pricing feature text `#72789a`;
  body/headings near-black `#212529` / `#343a40`; form text `#495057`;
  btn-secondary base gray `#6c757d`.
- Surfaces: cards `#fff`; light-gray sections `#f8f9fa` (bg-light: services,
  FAQ, pricing, blog); navbar scrolled `#fff`; footer `#421b9b`.
- Shapes: nav CTA radius 5px; FAQ accordion buttons pill 40px; footer social
  circles 40×40px radius 50%; testimonial dots 10px radius 50%; FAQ image
  radius 4px + shadow `17px 25px 56px -22px rgba(0,0,0,.38)`; pricing hover
  block radius 4px; base `.btn` radius 0.25rem (Bootstrap default), pricing
  buttons `d-block` full-width.
- Layout rhythm: hero full-height (`js-fullheight`); `ftco-section` default
  `padding: 7em 0` (6/4em at breakpoints), counter `5em 0`, footer
  `5em 0 3em`; partner strip `5em 0`; services cards `col-lg-4 col-md-6`;
  pricing cards `col-md-3`; FAQ image 700px tall; blog image 275px tall.

## Requirements

### Requirement: Navbar

The system SHALL render a transparent dark navbar over the hero with a brand,
five links (one dropdown), and a green "Get started" CTA, switching to a white
fixed bar on scroll.

#### Scenario: Brand and links

- **GIVEN** the Cumulus page is rendered
- **WHEN** the navbar is displayed at the top of the page
- **THEN** it SHALL show the wordmark "Cumulus" in white (20px, weight 900)
- **AND** it SHALL show links Home (active), Company, Pricing, Leadership,
  Blog, Contact in white at 80% opacity (full white on hover), 16px weight 600
- **AND** the Company link SHALL open a dropdown menu (white, shadowed)

#### Scenario: CTA button

- **GIVEN** the navbar is displayed
- **WHEN** the CTA is inspected
- **THEN** it SHALL show a "Get started" button with green background
  (`#21bf73`), white text, and 5px border radius
- **AND** on hover it SHALL flip to a white background with purple (`#3f52e3`)
  text

#### Scenario: Scrolled state

- **GIVEN** the user scrolls past the hero
- **WHEN** the navbar enters the scrolled state
- **THEN** it SHALL become fixed with a white background and a subtle shadow
- **AND** links and brand SHALL turn black with the active link purple
  (`#3f52e3`)

#### Scenario: Mobile toggle

- **GIVEN** a narrow viewport
- **WHEN** the navbar is rendered
- **THEN** it SHALL show an uppercase "MENU" toggle button
- **AND** activating it SHALL expand/collapse the link list with
  `aria-expanded` maintained

### Requirement: Hero

The system SHALL render a full-height purple hero split between a flat SVG
illustration and a text block with a headline and a green CTA.

#### Scenario: Hero layout

- **GIVEN** the hero section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL have a full-height section with a solid purple (`#3f52e3`)
  overlay behind the content
- **AND** it SHALL show an office-scene illustration on the left (desktop)
  and a text column on the right

#### Scenario: Hero text

- **GIVEN** the hero text column is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a small subheading "Cumulus"
- **AND** a headline "Cloud, Management, Template" (three spans)
- **AND** a short blurb paragraph
- **AND** a green "Get in touch" button (`#21bf73`, `px-4 py-3`)

### Requirement: Partner logos

The system SHALL render a strip of five grayscale partner logos.

#### Scenario: Logo strip

- **GIVEN** the page is scrolled past the hero
- **WHEN** the partner strip is displayed
- **THEN** it SHALL show five grayscale logo images in a horizontal row
- **AND** the strip SHALL have generous vertical padding (`5em`)

### Requirement: Cloud Services

The system SHALL render a light-gray "Cloud Services" section with six service
cards in a 3×2 grid.

#### Scenario: Service cards

- **GIVEN** the Cloud Services section is displayed
- **WHEN** the card grid is rendered
- **THEN** it SHALL show the centered heading "Cloud Services" on a light-gray
  (`#f8f9fa`) background
- **AND** it SHALL show six cards (3 columns on desktop, 2 on tablet) each
  with a circular icon badge, a title, and a blurb
- **AND** the titles SHALL be: Cloud databases, Website Hosting, File Storage,
  Forex Trading, File Backups, Remote Desktop

### Requirement: Software features

The system SHALL render a white "What Our Software Can Do For You" section
with five feature items.

#### Scenario: Feature items

- **GIVEN** the features section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "What Our Software Can Do For
  You"
- **AND** it SHALL show five items (icon circle + heading + blurb):
  Responsive Design, Android Apps Development, iOS Apps Development, UX/UI
  Design, Print Ready Design
- **AND** the icon badges SHALL use two alternating color treatments across
  the five items

### Requirement: Counter band

The system SHALL render a purple counter section with a heading and four
statistics.

#### Scenario: Counters

- **GIVEN** the counter section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL have a purple (`#3f52e3`) background with `5em` vertical
  padding
- **AND** it SHALL show the white heading "We Always Try To Understand Users
  Expectation"
- **AND** it SHALL show four counters — Download, Awards Won, Contributors,
  Satisfied Customers — each a 40px bold white number with a 16px
  semi-transparent white label

### Requirement: CTA banner

The system SHALL render a light-gray banner asking if the visitor has a
question, with a pink "Get in Touch" button.

#### Scenario: Banner content

- **GIVEN** the CTA banner is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Have any question about us?" with an
  intro paragraph on the left
- **AND** it SHALL show a pink (`#ff8ba7`) "Get in Touch" button on the right
- **AND** the banner SHALL have no vertical padding of its own (sits flush
  between the counter band and the FAQ section)

### Requirement: FAQ

The system SHALL render a split FAQ section with a tall photo and an accordion
of four pill-button questions.

#### Scenario: FAQ layout

- **GIVEN** the FAQ section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a ~700px-tall photo on the left with 4px radius and a
  large soft shadow
- **AND** it SHALL show the heading "Frequently Asks Questions" with an intro
  on the right

#### Scenario: Accordion

- **GIVEN** the accordion is displayed
- **WHEN** a question button is inspected
- **THEN** it SHALL be a full-width pill button (40px radius) with bold black
  text and a small shadow
- **AND** it SHALL show a chevron icon on the right
- **AND** clicking a question SHALL expand its answer panel and collapse the
  previously open one
- **AND** the accordion SHALL contain at least four questions (e.g. "How to
  Make an Account?", "How to manage your Dashboard?", "What are those
  requirements for businesses?")

### Requirement: Pricing

The system SHALL render a light-gray "Our Best Pricing" section with four plan
cards and pink "Choose Plan" buttons.

#### Scenario: Plan cards

- **GIVEN** the pricing section is displayed
- **WHEN** the plan grid is rendered
- **THEN** it SHALL show the centered heading "Our Best Pricing" on a
  light-gray background
- **AND** it SHALL show four white cards (4 columns on desktop): Basic ($0,
  "100% free. Forever"), Advance ($19), Expert ($49), Pro ($99), each with a
  "/mo" suffix
- **AND** each card SHALL show the plan name, a 60px price number in
  `#203d67`, a tagline, the heading "Enjoy All The Features", and a feature
  list (Bandwidth, Storage, Overages, All features) with values in `#72789a`
  and strong labels in `#203d67`

#### Scenario: Choose Plan buttons

- **GIVEN** a plan card is displayed
- **WHEN** the button is inspected
- **THEN** it SHALL show a full-width pink (`#ff8ba7`) "Choose Plan" button
- **AND** on card hover a purple (`#3f52e3`) offset block SHALL fade in
  behind the card (bottom edge, 4px radius)

### Requirement: Testimonials

The system SHALL render a "What Users Saying" carousel with four quotes and
pink active dots.

#### Scenario: Testimonial carousel

- **GIVEN** the testimonials section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "What Users Saying"
- **AND** it SHALL cycle through four quote slides, each with a quote text, a
  name, and a role (e.g. Mark Web — Marketing Manager)
- **AND** it SHALL show circular dots with the active dot in pink (`#ff8ba7`)

### Requirement: Recent Blog

The system SHALL render a light-gray "Recent Blog" section with three blog
cards.

#### Scenario: Blog cards

- **GIVEN** the Recent Blog section is displayed
- **WHEN** the card row is rendered
- **THEN** it SHALL show the centered heading "Recent Blog" with an intro
- **AND** it SHALL show three cards, each with a 275px-tall background photo
- **AND** each card SHALL show a meta column (date "May 17, 2020", "Admin",
  comment count) beside a headline (e.g. "Everything You Need to Know About
  Cloud Template")

### Requirement: Footer

The system SHALL render a deep-purple footer with four columns, social icons,
and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** it SHALL have a deep-purple (`#421b9b`) background with `5em 0 3em`
  padding
- **AND** it SHALL show the brand "Cumulus" with a blurb and three circular
  green social icons (twitter, facebook, instagram)
- **AND** it SHALL show "Useful Links" (Company, Pricing, Leadership, Blog,
  Contact), "Navigational" (Join Us, Blog, Privacy & Policy, Terms &
  Condition), and "Office" (address, phone, email)
- **AND** footer headings SHALL be white (20px, weight 700) and body text
  semi-transparent white at 70% (full white on hover)

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom row is rendered
- **THEN** it SHALL show a copyright line referencing the recreation (e.g.
  "Copyright © All rights reserved | made with by Free React Templates") —
  no ColorLib attribution or assets

## Verification checklist

- [ ] `npm run verify:app cumulus` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the rendered original 1:1 (navbar → hero →
      partner strip → Cloud Services → features → counter band → CTA banner →
      FAQ → pricing → testimonials → Recent Blog → footer); the commented-out
      domain-search section is NOT rendered
- [ ] Tokens wired through `@theme`: brand purple `#3f52e3` (+ hover
      `#293ee0`), green `#21bf73`, pink `#ff8ba7` (+ hover `#ff7294`), footer
      `#421b9b`, price ink `#203d67`, muted `#72789a`, surfaces `#fff` /
      `#f8f9fa`
- [ ] Work Sans (400/500/600/700/900) loaded via Google Fonts `<link>` in
      `index.html`
- [ ] Navbar: transparent-over-hero → white fixed on scroll; green CTA pill
      (radius 5px) flipping to white/purple on hover; Company dropdown; mobile
      "MENU" toggle with aria-expanded
- [ ] Hero: full-height purple overlay, illustration left + text right,
      green "Get in touch" button
- [ ] 6 service cards (3×2) with circular icon badges; 5 feature items with
      two icon-color variants
- [ ] Counter band: 4 counters (Download, Awards Won, Contributors, Satisfied
      Customers), 40px white numbers on purple
- [ ] CTA banner flush (no own vertical padding) with pink "Get in Touch"
- [ ] FAQ: 700px photo + 4-item pill accordion with chevron + expand/collapse
- [ ] Pricing: 4 cards, 60px `#203d67` prices, pink full-width "Choose Plan",
      purple hover block behind card
- [ ] Testimonials: 4 slides, pink active dot; Blog: 3 cards with 275px
      photos + meta column
- [ ] Footer purple with 4 columns + 3 green circular social icons + copyright
      paraphrase
- [ ] Placeholder images use `https://picsum.photos/seed/cumulus-<n>/<w>/<h>`;
      illustration recreated as an inline SVG (no assets copied)
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)

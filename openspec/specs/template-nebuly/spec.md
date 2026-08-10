# Template: Nebuly (Cloud Services)

## Purpose

Nebuly is a single-page cloud-hosting / domain-services business template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cloudtemplate" website template design (see TEMPLATES.md,
Bootstrap category, line 361; duplicate row at line 3051), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cloudtemplate" — modern SaaS/cloud-services landing
  page: royal-blue hero with a flat illustration + headline and green CTA,
  grayscale partner logo strip, a domain-name search band with TLD price
  table, 6 icon service cards, 5 feature cards, a royal-blue counter band, a
  small CTA strip, an FAQ accordion with an image panel, a 4-tier pricing
  grid, testimonial carousel, 3 blog cards, and a purple-dark multi-column
  footer (source: https://colorlib.com/wp/template/cloudtemplate/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/cloudtemplate/`
  (HTTP 200, ~42KB HTML). DOM + `css/style.css` (78KB, Bootstrap-based with
  custom ftco overrides) extracted and analyzed; tokens below come from that
  stylesheet. Screenshot `cloudtemplate-free-template.jpg` (1200×946) viewed
  in the browser and visually inspected.
- **Visual design (from screenshot + live preview):** high-contrast SaaS
  aesthetic — royal indigo `#3f52e3` hero/counter/footer-adjacent brand color,
  vibrant green `#21bf73` for CTAs and icon accents. Hero: full royal-blue
  background with a flat vector illustration on the LEFT (two people at a
  desk with monitors and a potted plant) and right-aligned white text: small
  uppercase subheading "CLOUD TEMPLATE" (letter-spaced), big bold headline
  "Cloud, Management, Template" (white, ~60px, weight 700), lorem subtext
  (white at 80% opacity) with a green highlighted number inline, and a solid
  green "Get in touch" button. Navbar (transparent over hero): white wordmark
  left, centered links (Home, Company, Pricing, Leadership, Blog, Contact),
  green pill "Get started" CTA right. Below: white strip of 5 grayscale
  partner logos (Microsoft, Android, Java, Google, Adobe vibe — use
  text placeholders), then a domain-search band (heading "Search Your Domain
  Name", TLD pills .com/.net/.biz/.co/.me, price rows $9.75/$9.50/$8.95/
  $7.80/$7.95), a light-gray "Cloud Services" section with 6 icon cards
  (green icons), a white "What Our Software Can Do For You" feature row, the
  royal-blue counter band ("We Always Try To Understand Users Expectation" +
  4 stats: Download, Awards Won, Contributors, Satisfied Customers), a light
  CTA strip ("Have any question about us?" + green "Get in Touch"), the FAQ
  accordion (image panel + 4 questions, active item filled royal-blue with
  white text, pill-shaped toggle rows), 4 pricing plans (Basic $0, Advance
  $19, Expert $49, Pro $99 — "Choose Plan" buttons), testimonials with
  user avatar + green quote icon, 3 blog cards with meta row, and a purple
  `#421b9b` footer (brand blurb + social icons, Useful Links, Navigational,
  Office contact info) with copyright bar. Typography: **Work Sans** for
  body and headings.
- **Section order (1:1) from the DOM:**
  1. Navbar (`nav#ftco-navbar.ftco-navbar-light`): brand wordmark left, nav
     links Home / Company / Pricing / Leadership / Blog / Contact, green CTA
     "Get started" right (`.nav-item.cta > a`: 1px `#21bf73` border, padding
     0.5rem 20px). Navbar `scrolled` state: white bg with dark links, cta
     button filled `#3f52e3` on white.
  2. Hero (`div.hero-wrap.js-fullheight`): royal-blue flat illustration left
     (placeholder art or picsum), right column: uppercase subheading
     "CLOUD TEMPLATE" (`letter-spacing: 2px`, `rgba(255,255,255,0.8)`), `h1`
     "Cloud, Management, Template" (white, 60px, weight 700), paragraph
     (white 80%) with a green-highlighted number, green "Get in touch"
     button (`.btn.btn-secondary`: bg `#21bf73`, hover `#1da966`, padding
     1rem 1.5rem). Dark overlay `rgba(0,0,0,0)`→blue `#3f52e3` overlay behind.
  3. Partner strip (`section.ftco-section.ftco-partner`): 5 grayscale
     partner logos (`.partner img` opacity 0.2, hover 1.0). Use text
     wordmarks (e.g. Microsoft, Android, Java, Google, Adobe) as inline SVG
     or styled text placeholders.
  4. Domain search (`section.ftco-domain`): heading "Search Your Domain
     Name", subtext, domain input + TLD pills (.com, .net, .biz, .co, .me),
     price table: .com $9.75 / .net $9.50 / .biz $8.95 / .co $7.80 / .me
     $7.95.
  5. Cloud Services (`section.ftco-section.services-section.bg-light`):
     heading "Cloud Services" + 6 icon cards — Cloud databases, Website
     Hosting, File Storage, Forex Trading, File Backups, Remote Desktop —
     each with a green icon and lorem blurb (icons: cloud, server,
     customer-service, life-insurance, cloud-computing, settings — map to
     lucide equivalents).
  6. Feature row (`section.ftco-section`): heading "What Our Software Can Do
     For You" + 5 bordered icon cards — Responsive Design, Android Apps
     Development, iOS Apps Development, UX/UI Design, Print Ready Design
     (`.media.block-6.services.border`).
  7. Counter band (`section.ftco-section.ftco-counter.img`): bg `#3f52e3`,
     heading "We Always Try To Understand Users Expectation" + 4 counters:
     Download, Awards Won, Contributors, Satisfied Customers (number 40px
     weight 700 white, label `rgba(255,255,255,0.7)`).
  8. CTA strip (`section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light`):
     "Have any question about us?" + lorem + green "Get in Touch" button.
  9. FAQ (`section.ftco-section.ftco-no-pb.bg-light.ftco-faqs`): image panel
     left (`.img-faqs`, 700px tall, rounded, soft shadow), right accordion
     "Frequently Asks Questions" with 4 items: "How to Make an Account?",
     "How to manage your Dashboard?", "How to grow your investments funds?",
     "What are those requirements for businesses?" — active button bg
     `#3f52e3` white text, pill rows (radius 40px), chevron rotates.
  10. Pricing (`section.ftco-section.bg-light`): heading "Our Best Pricing" +
      4 plans (`.block-7`): Basic Plan $0/mo ("100% free. Forever"), Advance
      Plan $19/mo, Expert Plan $49/mo, Pro Plan $99/mo — each with 3 feature
      rows (Bandwidth, Storage, Overages) and a "Choose Plan" button.
  11. Testimonials (`section.ftco-section.testimony-section`): heading "What
      Users Saying" + carousel: quote text, avatar with green quote icon,
      author name + role (e.g. "Mark Web — Marketing Manager").
  12. Blog (`section.ftco-section.bg-light`): heading "Recent Blog" + 3 blog
      cards: meta row (May 17, 2020 · Admin · 3), title "Everthing You Need
      to Know About Cloud Template" (link, hover brand blue), image, lorem.
  13. Footer (`footer.ftco-footer.ftco-bg-dark.ftco-section`, bg `#421b9b`):
      brand wordmark + blurb + green social icons; Useful Links (Company,
      Pricing, Leadership, Blog, Contact); Navigational (Join Us, Blog,
      Privacy & Policy, Terms & Condition); Office (203 Fake St. Mountain
      View, San Francisco, California, USA · +2 392 3929 210 ·
      info@yourdomain.com); copyright bar (paraphrase the "made with ♥"
      credit per repo conventions, drop the Colorlib attribution).
- **Recreation decisions:** new name **Nebuly** (adjective "of a nebula" —
  cloud-adjacent, fits a cloud-hosting brand; no collision with `apps/`,
  `openspec/specs/`, or `docs/templates/`). Hero illustration: picsum photo
  in a rounded panel (or a composed lucide-based graphic) instead of copying
  the flat vector art. Partner logos: styled text wordmarks (grayscale,
  opacity 0.2 hover 1.0). Domain form: client-side only (input + TLD select
  or pills + fake price table); form validates and shows a success state.
  FAQ accordion: one open item at a time (first open by default), chevron
  rotation, `aria-expanded`. Counter band: static numbers or count-up on
  scroll into view (layout must not depend on animation). Testimonial
  carousel: 3 quotes with prev/next controls. Social icons: inline SVGs
  (lucide-react removed brand icons). Footer contact data is placeholder
  text. Dark-mode `.dark` variants per repo conventions.

Nebuly lives in `apps/nebuly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Design tokens (extracted from `css/style.css`)

- Fonts: **"Work Sans", Arial, sans-serif** — the `body` font (16px,
  line-height 1.8) and headings. Load via Google Fonts `<link>` in
  `index.html` (400/500/600/700).
- Brand indigo: **`#3f52e3`** — dominant brand color: hero overlay
  (`.hero-wrap .overlay` background), counter band background, link color
  (`a`), `.btn.btn-primary` background, FAQ active toggle background,
  hover/active accents everywhere. Darker hover shade `#293ee0`.
- Accent green: **`#21bf73`** — `.btn.btn-secondary` bg/border (hero "Get in
  touch"), nav CTA border + scrolled fill, service icon backgrounds, quote
  icon, footer social icon hover, green highlighted number in hero. Hover
  shade `#1da966`.
- Accent pink: **`#ff8ba7`** — `.btn.btn-tertiary`, testimonial owl-dot
  active, secondary highlights.
- Purple-dark footer: **`#421b9b`** (`.ftco-footer`, `padding: 5em 0`).
- Surfaces: white `#ffffff`; light gray `#f8f9fa` / `#f8f8f8`
  (`bg-light` sections); dark navy `#203d67` (footer-adjacent headings?);
  muted text `rgba(255,255,255,0.7)` on dark, `rgba(0,0,0,0.8)` body copy,
  `#6c757d` / `#495057` / `#72789a` grays.
- Bootstrap primaries used sparingly: `#007bff` (default btn-primary —
  overridden by custom `.btn.btn-primary` → `#3f52e3`), `#ffc107` (warning).
- Buttons: `.btn` — `font-weight: 500`, **border-radius 5px**, soft shadow
  `0px 15px 30px -12px rgba(0,0,0,0.2)`; `.btn.btn-primary` bg `#3f52e3`
  white text; `.btn.btn-secondary` bg `#21bf73`; hero CTA padding `1rem
1.5rem` (px-4 py-3); FAQ accordion toggle rows `border-radius: 40px`
  (pill), weight 600.
- Section headings: `.heading-section h2` — 40px, weight 700 (30px on
  mobile); `.heading-section .subheading` — 14px, uppercase, letter-spaced.
- Hero: `h1` 60px white weight 700, line-height 1.2 (50px → 40px on smaller
  screens); subheading 16px weight 600 uppercase `letter-spacing: 2px`,
  `rgba(255,255,255,0.8)`.
- Counter band: bg `#3f52e3`, `padding: 5em 0`; number 40px weight 700
  white; label 16px `rgba(255,255,255,0.7)`.
- Layout rhythm: `container` max-width ~1140px; sections `padding: 5em 0`
  (some `pt-0 pb-0`); partner strip `padding: 5em 0`; hero slider height
  750px (`.slider-text`), hero-2 500px; domain section compact band.
- FAQ image panel: height 700px, `border-radius: 4px`, shadow
  `17px 25px 56px -22px rgba(0,0,0,0.38)`.

## Requirements

### Requirement: Header

The system SHALL render a transparent navbar over the hero with a wordmark,
nav links, and a green CTA button.

#### Scenario: Navbar content

- **GIVEN** the Nebuly page is rendered at the top of the page
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the "Nebuly" wordmark on the left
- **AND** it SHALL show the links Home, Company, Pricing, Leadership, Blog,
  and Contact
- **AND** it SHALL show a green pill "Get started" button on the right
- **AND** the Home link SHALL be marked active

#### Scenario: Scrolled state

- **GIVEN** the user scrolls past the hero
- **WHEN** the navbar is in its scrolled state
- **THEN** the navbar SHALL gain a solid light background with dark links
- **AND** the "Get started" button SHALL be filled with the brand indigo

#### Scenario: Mobile toggle

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the collapsed menu SHALL expand showing the nav links and the
  CTA button
- **AND** the toggle SHALL expose `aria-expanded` and an accessible label

### Requirement: Hero

The system SHALL render a full-width royal-blue hero with illustration,
headline, subtext, and a green CTA.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the uppercase subheading "CLOUD TEMPLATE" (or the
  Nebuly-appropriate eyebrow) in letter-spaced white
- **AND** it SHALL show the headline "Cloud, Management, Template"
- **AND** it SHALL show a short subtext paragraph
- **AND** it SHALL show a green "Get in touch" button
- **AND** the layout SHALL place an illustration on the left and the text on
  the right on wide viewports, stacking vertically on narrow ones

### Requirement: Partner strip

The system SHALL render a row of grayscale partner logos.

#### Scenario: Logo row

- **GIVEN** the partner strip is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show five partner wordmarks in grayscale at reduced
  opacity
- **AND** each wordmark SHALL become fully opaque on hover

### Requirement: Domain search

The system SHALL render a domain search band with TLD pills and a price
table.

#### Scenario: Search band

- **GIVEN** the domain section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Search Your Domain Name" and a subtext
- **AND** it SHALL show a domain input with TLD pills (.com, .net, .biz,
  .co, .me)
- **AND** it SHALL show price rows: .com $9.75, .net $9.50, .biz $8.95, .co
  $7.80, .me $7.95

#### Scenario: Domain submit

- **GIVEN** the domain input contains a value
- **WHEN** the user submits the search
- **THEN** the form SHALL show a success/availability message
- **WHEN** the user submits an empty or invalid value
- **THEN** the form SHALL show a validation error and SHALL NOT submit

### Requirement: Cloud services

The system SHALL render six icon service cards on a light-gray background.

#### Scenario: Service grid

- **GIVEN** the services section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Cloud Services"
- **AND** it SHALL show six cards: Cloud databases, Website Hosting, File
  Storage, Forex Trading, File Backups, and Remote Desktop
- **AND** each card SHALL show a green icon and a short blurb

### Requirement: Feature row

The system SHALL render five bordered feature cards.

#### Scenario: Feature cards

- **GIVEN** the features section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "What Our Software Can Do For You"
- **AND** it SHALL show five cards: Responsive Design, Android Apps
  Development, iOS Apps Development, UX/UI Design, and Print Ready Design,
  each with an icon and a blurb

### Requirement: Counter band

The system SHALL render a royal-blue band with four stat counters.

#### Scenario: Stats

- **GIVEN** the counter band is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "We Always Try To Understand Users
  Expectation"
- **AND** it SHALL show four counters labeled Download, Awards Won,
  Contributors, and Satisfied Customers with numeric values in white

### Requirement: CTA strip

The system SHALL render a light call-to-action strip with a heading and
button.

#### Scenario: Strip content

- **GIVEN** the CTA strip is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Have any question about us?" and a
  short paragraph
- **AND** it SHALL show a green "Get in Touch" button

### Requirement: FAQ

The system SHALL render an accordion of four questions beside an image panel,
with one open item at a time.

#### Scenario: Accordion

- **GIVEN** the FAQ section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Frequently Asks Questions"
- **AND** it SHALL show four questions: "How to Make an Account?", "How to
  manage your Dashboard?", "How to grow your investments funds?", and "What
  are those requirements for businesses?"
- **AND** the first question SHALL be expanded by default
- **WHEN** the user activates a collapsed question
- **THEN** it SHALL expand and the previously open item SHALL collapse
- **AND** the open toggle SHALL be styled with the brand indigo background
  and white text

#### Scenario: Image panel

- **GIVEN** the FAQ section is displayed on a wide viewport
- **WHEN** it is rendered
- **THEN** an image panel SHALL appear beside the accordion
- **AND** the panel SHALL hide on narrow viewports

### Requirement: Pricing

The system SHALL render four pricing plans with feature lists and buttons.

#### Scenario: Plan cards

- **GIVEN** the pricing section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Our Best Pricing"
- **AND** it SHALL show four plans: Basic Plan $0/mo, Advance Plan $19/mo,
  Expert Plan $49/mo, and Pro Plan $99/mo
- **AND** each plan SHALL show three feature rows (Bandwidth, Storage,
  Overages) and a "Choose Plan" button
- **AND** the Basic plan SHALL carry the tagline "100% free. Forever"

### Requirement: Testimonials

The system SHALL render a testimonial carousel with quote, author, and
controls.

#### Scenario: Carousel

- **GIVEN** the testimonial section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "What Users Saying"
- **AND** it SHALL show one quote with an author name and role at a time
- **AND** it SHALL provide Previous and Next controls to cycle quotes

### Requirement: Blog

The system SHALL render three blog cards with meta rows.

#### Scenario: Post cards

- **GIVEN** the blog section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL show three cards, each with an image, a meta row (date ·
  author · comment count), and a title link

### Requirement: Footer

The system SHALL render a purple-dark multi-column footer with brand blurb,
link columns, contact info, and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** the first column SHALL show the "Nebuly" wordmark, a short blurb,
  and social icon links
- **AND** the Useful Links column SHALL show Company, Pricing, Leadership,
  Blog, and Contact
- **AND** the Navigational column SHALL show Join Us, Blog, Privacy & Policy,
  and Terms & Condition
- **AND** the Office column SHALL show an address, a phone number, and an
  email address

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is rendered
- **THEN** it SHALL show a copyright notice with a paraphrased "made with ♥"
  credit (no Colorlib attribution)

## Verification checklist

- [ ] `npm run verify:app nebuly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (navbar → hero → partner strip →
      domain search → cloud services → feature row → counter band → CTA strip
      → FAQ → pricing → testimonials → blog → footer)
- [ ] Tokens wired through `@theme`: brand indigo `#3f52e3`, accent green
      `#21bf73`, hover `#1da966` / `#293ee0`, pink `#ff8ba7`, footer `#421b9b`,
      section bg `#f8f9fa`
- [ ] Work Sans loaded via Google Fonts `<link>` in `index.html`
- [ ] Navbar transparent over hero, solid on scroll; green pill CTA; mobile
      toggle with aria-expanded
- [ ] Hero: royal-blue overlay, illustration left / text right, green "Get in
      touch" button
- [ ] Domain form validates (zod) with success state; TLD pills + price rows
      rendered
- [ ] Counter band on `#3f52e3`; FAQ accordion one-open-at-a-time with brand
      indigo active toggle; pricing 4 tiers; testimonial carousel with
      controls
- [ ] Placeholder images use `https://picsum.photos/seed/nebuly-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Footer purple `#421b9b`; social icons are inline SVGs
- [ ] Dark-mode `.dark` variants per repo conventions
- [ ] README status table regenerated after merge (`npm run readme:status`)

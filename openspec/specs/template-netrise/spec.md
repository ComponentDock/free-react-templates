# Template: Netrise (Web Hosting Template)

## Purpose

Netrise is a single-page web-hosting company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Webhost" website template design (see TEMPLATES.md), built
under a DIFFERENT name (Netrise — "network" + "rise", evoking a hosting
provider whose uptime lifts your site, per the monorepo naming mandate),
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Webhost" — a hosting-provider landing page: a
  pink→purple gradient hero slider with device mockups, a dark navy domain
  search bar with TLD pricing, a guarantee services grid, a parallax counter
  band, four pricing plans, a "Why Choose Us" icon grid, a blue→indigo
  gradient testimonial carousel, VPS feature tabs with dashboard
  screenshots, a client logo strip, a blog row, and a dark navy footer. The
  page runs on three diagonal gradients (teal→green, sky→indigo,
  pink→purple) over a dark navy base.
  Source: https://colorlib.com/wp/template/webhost/
  TEMPLATES.md has THREE copies of this item (line 530, category Bootstrap;
  line 2099, category Landing Page; and line 3066, category Web Hosting —
  mark EVERY copy `[x]` when done). No other spec on main maps to this slug
  (grep-checked before prepping).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/webhost/`
  (HTTP 200, 43,339 bytes; title "WebHost - Free Bootstrap 4 Template by
  Colorlib"). Master stylesheet `css/style.css` (93,325 bytes, fully
  extracted for tokens). Libs: Bootstrap 4 grid, Owl Carousel (hero slider +
  testimonial carousel), AOS, animate.css, magnific-popup, icomoon +
  flaticon icon fonts, bootstrap-datepicker/jquery.timepicker (unused on
  home). Font: **Work Sans** (Google Font). Cross-checked against the
  TEMPLATES.md screenshot (`webhost-free-template-1.jpg`, viewed in browser
  — see visual design below). The demo brands itself "WebHost"; the
  recreation uses the NEW name **Netrise**.
- **Visual design (from DOM + CSS tokens + screenshot + live browser
  render):** dark navbar over a vibrant pink→purple diagonal-gradient hero
  (lavender/magenta), large bold white headline, white subtext, two CTA
  buttons ("Get started" = teal→green gradient, "Read more" = sky→indigo
  gradient, both large-padded white-text), and a dashboard device mockup
  (desktop monitor + tablet + phone) on the right; carousel dots at the
  bottom. Below: a dark navy (#233142) domain-search band with an
  input + TLD select + square blue→indigo search button and a TLD price row
  (.com $9.75 .net $9.50 .biz $8.95 .co $7.80 .me $7.95). Then a light-grey
  guarantee grid, a photo-background counter band (parallax), a light-grey
  pricing row of four cards, a white "Why Choose Us" icon grid (icons sit in
  80×80 teal→green gradient squares), a sky→indigo gradient testimonial
  carousel, white VPS tabs with dashboard screenshots, a dark navy client
  logo strip, a light-grey blog row, and a dark navy footer. Everything
  cool-toned and SaaS-like; flat design with subtle shadows on the mockups.
- **Section order (1:1, from live demo DOM):**
  1. `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light`
     — `div.container`: `a.navbar-brand` "WebHost" (white bold) +
     `button.navbar-toggler` (burger, "Menu" label) +
     `ul.navbar-nav.ml-auto`: Home (active), About, Domain, Hosting, Blog,
     Contact (white links) + `li.nav-item.cta` > `a.nav-link` > `span`
     "Get started" — pill CTA (radius 30px, bg gradient
     #fb83b5→#9a51ff, on a white wrapper button).
  2. `section.home-slider.owl-carousel` — `.home-slider` bg gradient
     **#fb83b5 → #9a51ff** (pink→purple, 45deg); **2 × `div.slider-item`**
     (height 750px, cover bg images `images/bg_1.jpg`, `images/bg_2.jpg`):
     `div.slider-text` (white) — `h1` (48–50px bold): "Everything you get
     what you need to Host your website" / "The Web Hosting Platform Made
     for You"; `p.subheading` "Up to 90% Discount with Free Domain Name
     Registration"; blurb paragraph (Duden river copy); `p` with two CTAs —
     `a.btn.btn-primary` "Get started" (gradient #12e6ca→#8be55d) and
     `a.btn.btn-primary.btn-primary-2` "Read more" (gradient
     #56c8fb→#627bed), both `p-3 px-xl-5 py-xl-3` white text; right side
     device mockup (desktop dashboard + tablet + phone, from the bg
     images). Owl carousel dots at the bottom center (10px circles).
  3. `section.ftco-domain` (bg **#233142**, padding 5em 0) — centered
     heading h2 "Search You Domain Name" (white) + subheading p; `form.domain-form.d-flex`:
     `div.form-group.domain-name` > `input.form-control.name.px-4`
     placeholder "Enter your domain name..."; `div.domain-select` > `select`
     (options .com .net .biz .co .me) + `input.search-domain.btn.btn-primary`
     value "Search Domain" (bg gradient #56c8fb→#627bed, white,
     **square: border-radius 0 with 4px on the right side only**); below,
     a TLD price row: ".com $9.75 .net $9.50 .biz $8.95 .co $7.80 .me
     $7.95".
  4. `section.ftco-section.services-section.bg-light` — centered heading h2
     "The WebHost Guarantee" + subheading; **6 × `div.services` cards**
     (bg #fff, padding 30px, radius 4px, shadow 0 2px 5px rgba(0,0,0,.03),
     3-up grid): `div.icon` (80×80, bg gradient #12e6ca→#8be55d, flaticon:
     guarantee, shield, support, cloud-computing, settings, loading) + h3 +
     blurb. Items: 100% Uptime Guarantee, Safe and Secured, Our Dedicated
     Support, Domain Transfer, DNS Control, Fast Loaded.
  5. `section.ftco-counter.img#section-counter` — parallax bg image
     `images/bg_1.jpg` (`data-stellar-background-ratio="0.5"`), white text;
     centered subheading "More than 100,000 websites hosted"; **4 ×
     `div.block-18.text-center` counters**: `strong.number` (animated
     count-up, data-number) + label — 2000 CMS Installation, 100 Awards
     Won, 32000 Registered Domains, 31998 Satisfied Customers.
  6. `section.ftco-section.bg-light` — centered heading h2 "Our Best
     Pricing" + subheading; **4 × `div.block-7` plan cards** (col-md-3,
     text-center): h3 plan name (Free / Startup / Premium / Pro) + price
     "**$ 0**" / "$ 19" / "$ 49" / "$ 99" + tagline ("100% free. Forever"
     for Free, "All features are included" otherwise) + h3 "Enjoy All The
     Features" + `ul.pricing-text` features + `a.btn.btn-primary.d-block.px-3.py-3.mb-4`
     "Choose Plan" (bg gradient #12e6ca→#8be55d, block, white). Plan
     features: Free = 150 GB Bandwidth / 100 GB Storage / $1.00 per GB
     Overages / All features; Startup ($19) = 450 GB / 400 GB / $2.00;
     Premium ($49) = 250 GB / 200 GB / $5.00; Pro ($99) = 450 GB / 400 GB /
     $20.00.
  7. `section.ftco-services` (white) — centered heading h2 "Why Choose
     Us?"; **6 × `div.media.services`** (same card style as section 4:
     white, radius 4px, shadow, icon 80×80 gradient
     #12e6ca→#8be55d): flaticon-cloud-computing "Free Domain Transfer",
     flaticon-bandwidth "Unlimited BandWidth", flaticon-shield "Security",
     flaticon-guarantee "99% Uptime", flaticon-settings "Free Website
     Optimization", flaticon-support "24/7 Tech Support" + blurbs.
  8. `section.ftco-section.testimony-section` — bg gradient
     **#56c8fb → #627bed** (sky→indigo, 45deg); centered white heading h2
     "Our satisfied customer says"; Owl carousel of **5 × `div.testimony-wrap`**
     (white text): blockquote (Duden river copy), name "Mark Web" +
     role (Marketing Manager, Interface Designer, UI Designer, Web
     Developer, System Analyst); carousel dots.
  9. `section.ftco-section` (white) — centered heading h2 "How it works";
     `ul.nav.nav-pills` tabs: "Next gen VPS" (active), "Performance",
     "Effectiveness"; **3 × `div.tab-pane`** panels each with h3 ("Next gen
     VPS hosting" / "Performance VPS hosting" / "Effective VPS hosting"),
     2 paragraphs, and a dashboard screenshot image
     (`images/dashboard_full_1.jpg` / `dashboard_full_2.jpg` /
     `dashboard_full_1.jpg`).
  10. `section.ftco-section.ftco-partner` (bg **#233142**) — centered
      white heading h2 "Our Clients" + subheading; **5 × `img.img-fluid`
      partner logos** (`images/partner-1..5.png`).
  11. `section.ftco-section.bg-light` — centered heading h2 "Recent Blog";
      **3 × `div.blog-entry`**: `a.block-20` bg image
      (`images/image_1..3.jpg`) + `div.text.d-flex.py-4`: `div.meta.mb-3`
      (Sep. 20, 2018 · Admin · 3 comments with chat icon) + h3 title "Even
      the all-powerful Pointing has no control about the blind texts" (same
      for all three) + blurb + "Continue Reading" link.
  12. `footer.ftco-footer` (bg **#233142**, font 16px, padding 7em 0 3em)
      — **4 × `div.ftco-footer-widget`**: (a) h2 "WebHost" (brand) + blurb
      - 3 social icon links (icon-twitter, icon-facebook, icon-instagram);
        (b) h2 "Unseful Links" [sic — keep the typo or fix to "Useful Links"]
        — Servers, Windos Hosting [sic], Cloud Hosting, OS Servers, Linux
        Servers, Policy; (c) h2 "Navigational" — Home, Domain, Hosting,
        About, Blog, Contact; (d) h2 "Office" — `div.block-23`: address
        "203 Fake St. Mountain View, San Francisco, California, USA"
        (icon-map-marker), phone "+2 392 3929 210" (icon-phone), email
        "info@yourdomain.com" (icon-envelope). `div.copyright` bar:
        "Copyright © {year} All rights reserved | This template is made with
        ♥ by Colorlib" — recreation keeps the copyright + ♥ wording, drops
        the Colorlib credit (precedent: Newsprint/Lede/Wire footers).
- **Design tokens extracted from `css/style.css` + live computed styles:**
  - Gradients (all `linear-gradient(45deg, …)`):
    - **Gradient A (primary CTA / icons):** `#12e6ca` → `#8be55d`
      (teal→green) — hero "Get started", pricing "Choose Plan", service
      icon squares.
    - **Gradient B (secondary CTA / domain submit / testimonial bg):**
      `#56c8fb` → `#627bed` (sky→indigo) — hero "Read more", domain search
      submit, `.testimony-section` background.
    - **Gradient C (hero / nav CTA):** `#fb83b5` → `#9a51ff`
      (pink→purple) — `.home-slider` background, nav "Get started" pill.
  - Dark navy: **#233142** (`.ftco-domain`, `.ftco-partner`,
    `.ftco-footer`).
  - Light section bg: Bootstrap `bg-light` **#f8f9fa** (guarantee,
    pricing, blog sections).
  - Cards: `.services` white bg, **radius 4px**, shadow `0 2px 5px
rgba(0,0,0,.03)`, padding 30px; icon square 80×80 with Gradient A.
  - Buttons: hero CTAs large padding (`p-3 px-xl-5 py-xl-3`), white text,
    subtle radius (Bootstrap .25rem); domain submit **square** (radius 0 +
    4px right side), Gradient B, white; pricing "Choose Plan" block full
    width with bottom margin; nav CTA **pill radius 30px** Gradient C on a
    white rounded wrapper; `.btn` base `border: 1px solid transparent`,
    font-weight 400.
  - Font: **"Work Sans", Arial, sans-serif** (Google Font; load via
    `<link>` in index.html) — body 1rem/1.5; h1 hero 48–50px bold white;
    section h2 ~34px; plan name h3; counter numbers large bold white;
    `.subheading` 14px uppercase letter-spacing 1px (white on dark/gradient
    sections).
  - Rhythm: `.ftco-section` padding **6em 0**; `.ftco-domain` 5em 0;
    `.ftco-partner` 5em 0; footer 7em 0 3em; hero slider-item height
    **750px**.
  - Nav: dark (`bg-dark`), white links; CTA pill right.
  - Inputs: `.form-control` Bootstrap default (height ~38px, radius
    .25rem, border #ced4da); domain input has `px-4` padding.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/netrise-<n>/<w>/<h>` — 2 hero mockups (dashboard
  screenshots can be replaced with a styled mock-up card or seeded images),
  1 counter band, 3 dashboard panels, 3 blog, 5 partner logos (simple
  grayscale text/SVG marks or seeded images)); icons → lucide-react
  (shield-check, headset, cloud, settings, zap/rocket, server, globe, gauge,
  phone, mail, map-pin, message-circle, twitter, facebook, instagram,
  chevron-right, menu, search); Work Sans via Google Fonts `<link>`; hero
  slider + testimonial carousel + counters implemented with React state /
  IntersectionObserver (no jQuery/Owl/stellar); domain form + newsletter
  (none — no newsletter on this template) — forms validated per repo
  conventions (zod), success state swaps in a message; counters animate on
  scroll into view to the data-number values (2000, 100, 32000, 31998);
  alt text on images; focus-visible rings; copy paraphrased (plan features,
  service names, blog titles reworded where sensible, keep the same kinds
  of content); footer keeps the "made with ♥" wording without the Colorlib
  credit; footer heading typo "Unseful Links" and "Windos Hosting" may be
  corrected (fixing typos is allowed; note it in the PR).
- **Duplicate checklist rows:** TEMPLATES.md lines 530, 2099, AND 3066 all
  list "Webhost" — the implementer MUST mark ALL THREE `[x]` when done
  (precedent: Newsflex → Bulletin/Dateline; Flawless → Sculpt).

Netrise lives in `apps/netrise` and uses shared components from
`packages/ui` (Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Navbar

The system SHALL render a dark navbar with the brand on the left, site
links on the right, and a pill "Get started" CTA.

#### Scenario: Navbar content

- **GIVEN** the Netrise page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL have a dark background with the white bold brand
  "Netrise" on the left
- **AND** it SHALL show white links Home (active), About, Domain, Hosting,
  Blog, and Contact on the right
- **AND** it SHALL show a pill-shaped "Get started" CTA (30px radius,
  pink→purple gradient #fb83b5 → #9a51ff on a white wrapper)
- **AND** on mobile the links SHALL collapse behind a burger menu with
  aria-expanded

### Requirement: Hero slider

The system SHALL render a pink→purple gradient hero carousel with two
slides, each with a headline, subtext, two CTA buttons, and a device
mockup.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a 750px-tall background with the diagonal
  pink→purple gradient #fb83b5 → #9a51ff and white text
- **AND** the first slide SHALL show the headline "Everything you get what
  you need to Host your website" with the subheading "Up to 90% Discount
  with Free Domain Name Registration"
- **AND** the second slide SHALL show the headline "The Web Hosting
  Platform Made for You"
- **AND** each slide SHALL show a "Get started" button (teal→green
  gradient #12e6ca → #8be55d) and a "Read more" button (sky→indigo
  gradient #56c8fb → #627bed), both large-padded with white text
- **AND** each slide SHALL show a dashboard device mockup (desktop +
  tablet + phone) on the right side
- **AND** carousel controls SHALL let the user switch slides, with dots at
  the bottom center

### Requirement: Domain search

The system SHALL render a dark navy domain search band with an input, a TLD
select, a search button, and a TLD price row.

#### Scenario: Domain search content

- **GIVEN** the page is rendered
- **WHEN** the domain section is displayed
- **THEN** it SHALL have a #233142 background with the white heading "Search
  You Domain Name"
- **AND** it SHALL show an input with placeholder "Enter your domain
  name...", a TLD select (.com, .net, .biz, .co, .me), and a square
  "Search Domain" submit button (sky→indigo gradient, white text, square
  corners with a 4px radius on the right side)
- **AND** it SHALL show the TLD price row ".com $9.75 · .net $9.50 · .biz
  $8.95 · .co $7.80 · .me $7.95"
- **AND** submitting the form SHALL show a result message (no backend —
  client-side handling)

### Requirement: Guarantee services

The system SHALL render a light-grey grid of six guarantee cards, each with
a gradient icon square, a title, and a blurb.

#### Scenario: Guarantee content

- **GIVEN** the page is rendered
- **WHEN** the guarantee section is displayed
- **THEN** it SHALL show the heading "The WebHost Guarantee" on a #f8f9fa
  background
- **AND** it SHALL show six white cards (radius 4px, subtle shadow): 100%
  Uptime Guarantee, Safe and Secured, Our Dedicated Support, Domain
  Transfer, DNS Control, and Fast Loaded
- **AND** each card SHALL show an 80×80 icon square with the teal→green
  gradient and a short blurb

### Requirement: Counter band

The system SHALL render a photo-background band with four animated
statistics.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show a parallax background image with the white
  subheading "More than 100,000 websites hosted"
- **AND** it SHALL show four statistics — 2000 CMS Installation, 100
  Awards Won, 32000 Registered Domains, 31998 Satisfied Customers — with
  large white numbers that count up when scrolled into view

### Requirement: Pricing plans

The system SHALL render a light-grey row of four pricing plan cards with
feature lists and a "Choose Plan" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Our Best Pricing" on a #f8f9fa
  background
- **AND** it SHALL show four plans — Free $0 ("100% free. Forever"),
  Startup $19, Premium $49, and Pro $99 — each with "Enjoy All The
  Features"
- **AND** each plan SHALL list Bandwidth, Storage, and Overages: Free =
  150 GB / 100 GB / $1.00 per GB, Startup = 450 GB / 400 GB / $2.00 per GB,
  Premium = 250 GB / 200 GB / $5.00 per GB, Pro = 450 GB / 400 GB / $20.00
  per GB, plus "All features"
- **AND** each plan SHALL show a full-width "Choose Plan" button with the
  teal→green gradient

### Requirement: Why Choose Us

The system SHALL render a white section with six icon services.

#### Scenario: Why Choose Us content

- **GIVEN** the page is rendered
- **WHEN** the Why Choose Us section is displayed
- **THEN** it SHALL show the heading "Why Choose Us?"
- **AND** it SHALL show six cards (Free Domain Transfer, Unlimited
  BandWidth, Security, 99% Uptime, Free Website Optimization, 24/7 Tech
  Support), each with an 80×80 teal→green gradient icon square, a title,
  and a blurb

### Requirement: Testimonials

The system SHALL render a sky→indigo gradient testimonial carousel with
five quotes.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show the white heading "Our satisfied customer says"
  over the diagonal gradient #56c8fb → #627bed
- **AND** it SHALL show five testimonial slides, each with a quote, the
  name "Mark Web", and a role (Marketing Manager, Interface Designer, UI
  Designer, Web Developer, System Analyst)
- **AND** the slides SHALL be navigable as a carousel with dots

### Requirement: VPS hosting tabs

The system SHALL render a "How it works" section with three tabs, each
showing a heading, copy, and a dashboard screenshot.

#### Scenario: VPS tabs content

- **GIVEN** the page is rendered
- **WHEN** the "How it works" section is displayed
- **THEN** it SHALL show the heading "How it works" with three tabs: Next
  gen VPS (active), Performance, and Effectiveness
- **AND** selecting a tab SHALL show its panel: "Next gen VPS hosting",
  "Performance VPS hosting", or "Effective VPS hosting", each with two
  paragraphs and a dashboard screenshot image

### Requirement: Client logos

The system SHALL render a dark navy client logo strip.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL have a #233142 background with the white heading "Our
  Clients"
- **AND** it SHALL show five partner logos in a row

### Requirement: Recent blog

The system SHALL render a light-grey blog row with three entries carrying
an image, meta line, and title.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog" on a #f8f9fa background
- **AND** it SHALL show three blog entries, each with a background image, a
  meta line (Sep. 20, 2018 · Admin · 3 comments), a title, a blurb, and a
  "Continue Reading" link

### Requirement: Footer

The system SHALL render a dark navy footer with four columns and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a #233142 background with four columns: brand
  "Netrise" + blurb + 3 social icons (twitter, facebook, instagram); Useful
  Links (Servers, Windows Hosting, Cloud Hosting, OS Servers, Linux
  Servers, Policy); Navigational (Home, Domain, Hosting, About, Blog,
  Contact); and Office (address "203 Fake St. Mountain View, San
  Francisco, California, USA", phone "+2 392 3929 210", email
  "info@yourdomain.com")
- **AND** the copyright bar SHALL read "Copyright © {year} All rights
  reserved | This template is made with ♥"

## Verification checklist

- [ ] Full spec scenarios implemented in `apps/netrise` (TDD, 100% coverage)
- [ ] `scripts/verify-app.sh netrise` passes (typecheck + lint + tests + build)
- [ ] Visual pass vs live demo `https://preview.colorlib.com/theme/webhost/`
- [ ] All three gradients (teal→green, sky→indigo, pink→purple) + #233142
      dark navy + Work Sans reproduced via `@theme` tokens
- [ ] TEMPLATES.md lines 530, 2099, AND 3066 all marked `[x]` with the
      surge URL, plus `npm run readme:status`
- [ ] Footer links to `https://www.componentdock.com/`; no ColorLib
      references in app code

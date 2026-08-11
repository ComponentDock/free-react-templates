# Template: Upnode (Web Hosting Template)

## Purpose

Upnode is a single-page web hosting company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Hami" web hosting template (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hami" — "Web Hosting HTML Template"
  (source: https://colorlib.com/wp/template/hami/).
  TEMPLATES.md has **TWO copies** of this item (lines 408, 3056 — mark
  ALL of them `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/hami/
  (HTTP 200, 33 KB DOM, fetched 2026-08-11; the live DOM is the primary
  reference and matches the screenshot: solid blue header + hero with
  isometric server illustration, white cloud-wave transition, light
  sections below, white footer).
- **Screenshot:** `hami-free-template.jpg` (1200×946, verified via
  browser vision). Matches the live DOM: thin blue utility top bar
  (phone/email left, Login-Register + language right), blue nav with
  white "Hami." wordmark left + centered menu + white-outline Live Chat
  button right, large solid-blue hero with isometric server-rack
  illustration on the right and a white cloud-shape wave at the bottom,
  below it the start of the white "Find Your Perfect…" domain-search
  section.
- **Section order (1:1):** Top utility bar (blue) → Nav (blue, logo +
  Home/Hosting▾/Pages▾/About/Blog/Contact + Live Chat + Get Start Now!)
  → Hero slider (2 slides, blue, isometric server illustration, white
  cloud-wave transition) → Find-your-domain search (white, pill search
  form + domain price list) → Overall Features (light blue-grey
  `#e8f1f8`, 6 feature cards, wave pattern) → Choose Your Web Hosting
  Plan (white, 3 price cards with Save % tags) → 70% Discount CTA
  (`#e8f1f8`, 6 FREE mini-features) → 24/7 Support band (pattern bg,
  phone number + Live Chat) → "Proudly Hosting Over 800,000 Websites
  Since 2000" CTA (white) → Footer (Products / Programs / Company link
  columns + Subscribe Newsletter form + social circles, bottom bar with
  copyright + payment methods).

### Top bar + nav (from live DOM)

- Top bar (50px, blue): "Call Us: 001-1234-88888" + "Email:
  info.cololib@gmail.com" (left), "Login / Register" + language dropdown
  "English" with flag (right).
- Nav (blue, 100px): brand "Upnode" left; links Home (active), Hosting
  ▾ (Home, Hosting, About, Blog, Blog Details, 404, Coming Soon),
  Pages ▾ (Dropdown → Dropdown Item ×3), About, Blog, Contact; right:
  "Live Chat" outline button + "Get Start Now!" solid button.

### Hero (from live DOM)

- 2 slides, blue `#1c66de` bg, 800px tall; right side isometric
  illustration of server racks + cloud.
- Slide copy: h2 "The Best Web Hosting" (82px, white), price line
  "Starting at ~~$7.99~~ **$2.95/month***" (36px white, old price
  strikethrough), p "Everything you will EVER need to Host and Manage
  your Website!" (20px), buttons "Get Start Now!" (white) + "Live Chat"
  (outline). White cloud-wave svg at the bottom transitions into the
  white section below.

### Domain search (from live DOM)

- Heading "Find Your Perfect Domain Name" (48px) + sub "Only $7 for the
  first year".
- Pill search form (border-radius 35px, shadow `0 5px 15px -2px
rgba(0,0,0,.15)`): text input (height 60px, radius 35px 0 0 35px),
  extension select (.com), blue "Search" button.
- Domain price list below: .COM $5.75 · .NET $9.45 · .ORG $7.50 · .US
  $5.99 · .BIZ $9.99 · .CO $6.00.

### Features (from live DOM)

- "Overall Features" heading + 6 cards (icon + title + text): Auto
  Updates, Optimized Software, Daily Backups, Wide Networking, Protected,
  Free Support. Section bg `#e8f1f8`, wave pattern at the bottom edge.

### Price plans (from live DOM)

- "Choose Your Web Hosting Plan"; 3 cards:
  - Standard Hosting — On sale Save 50% — **$1.99** /per month — 4
    check-list items + "Get Started" + "Click here to see all features"
    (underlined).
  - Advanced Hosting — On sale Save 70% — **$3.99** /per month —
    "Best Plan" tag; same layout.
  - Unlimited Hosting — On sale Save 85% — **$7.99** /per month; same
    layout.
- Card style: radius 3px, border 1px `#ebebeb`, shadow `0 8px 8px -1px
rgba(0,0,0,.15)`, padding 40px; hover/active bg `#e8f1f8`.
- Shared checklist items (blue check icons): Unlimited Number of
  Websites, Unlimited Email Accounts, Unlimited Bandwidth, 2X Processing
  Power & Memory.

### CTA + support + stats (from live DOM)

- CTA band (`#e8f1f8`): "Up to 70% Discount with FREE Domain Name
  Registration Included!" + 6 mini-items with icons: FREE Domain Name,
  FREE Email Address, Plenty of Disk Space, FREE Website Builder, FREE
  Marketing Tools, 1-Click WordPress Install + "Get Started" button.
- Support band (pattern background image, blue): "Need help? Call our
  award-winning support team 24/7: +65 1234-6868" (white, 32px) + Live
  Chat button.
- Stats CTA (white, border-bottom 1px `#ebebeb`): "Proudly Hosting Over
  800,000 Websites Since 2000" with the number/span in `#1c66de` +
  "Get Started" button.

### Footer (from live DOM)

- 4 columns: Products (Shared hosting, WordPress hosting, VPS hosting,
  Dedicated hosting, Reseller hosting, Hosting features), Programs
  (WordPress, Affiliates, Marketing services, WordPress guide,
  Testimonials, Awards & Reviews), Company (About, Careers, Contact,
  Terms of service, Privacy policy, Blog), "Subscribe Newsletter"
  widget (blurb "Subscribe to our email newsletter for useful tips and
  valuable resources." + pill email input radius 30px bg `#e8f1f8` +
  blue subscribe button) + social circles (Facebook `#4b62b3`, Twitter
  `#03baeb`, Google `#cb242e`, Instagram `#057ad7`, YouTube `#e20000`;
  hover `#1c66de`).
- Bottom bar: "Copyright © <year> All rights reserved | This template is
  made with by Colorlib" (paraphrased credit) + "Payments We Accept" +
  payment-method icons (grey).

## Design tokens (from preview style.css)

| Token           | Value                                                                                                                                                                        | Where                                                                                                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand blue      | `#1c66de`                                                                                                                                                                    | header/nav/hero bg, primary buttons, price values, links, hover states, focus                                                                                                                                                         |
| White           | `#ffffff`                                                                                                                                                                    | text on blue, section bg, btn-2 bg, hero text                                                                                                                                                                                         |
| Light blue-grey | `#e8f1f8`                                                                                                                                                                    | `bg-gray` sections (features, discount CTA), newsletter input bg, price card hover/active bg                                                                                                                                          |
| Dark text       | `#303030`                                                                                                                                                                    | headings on light bg, footer widget titles, sticky-nav links, search button hover                                                                                                                                                     |
| Muted grey      | `#707070` / `#b7b7b7`                                                                                                                                                        | footer link text / payment icons; price "/per month", view-all links                                                                                                                                                                  |
| Border grey     | `#ebebeb`                                                                                                                                                                    | price card border, CTA border-bottom, domain input border                                                                                                                                                                             |
| Social circles  | `#4b62b3` fb, `#03baeb` twitter, `#cb242e` google, `#057ad7` instagram, `#e20000` youtube                                                                                    | footer social icon circles (40px, radius 50%)                                                                                                                                                                                         |
| Font family     | `"Archivo", sans-serif` (Google Fonts) for headings AND body                                                                                                                 | whole site                                                                                                                                                                                                                            |
| Buttons         | pill: border-radius 100px, min-width 150px, height 50px, line-height 50px, font-size 16px, weight 600, padding 0 40px, text-transform capitalize                             | `.hami-btn`: bg `#1c66de` white text; hover white bg + blue text + shadow `0 2px 40px 8px rgba(15,15,15,.15)`; `.btn-2` (white bg, blue text, hover inverse); live-chat = 1px white border, transparent, white text, line-height 48px |
| Domain form     | pill radius 35px, input height 60px, radius 35px 0 0 35px, shadow `0 5px 15px -2px rgba(0,0,0,.15)`                                                                          | find-your-domain search                                                                                                                                                                                                               |
| Price cards     | radius 3px, border 1px `#ebebeb`, shadow `0 8px 8px -1px rgba(0,0,0,.15)`, padding 40px, price h2 60px `#1c66de` with italic `$` span, hover/active bg `#e8f1f8`             | pricing section                                                                                                                                                                                                                       |
| Section rhythm  | `section-padding-100` (~100px vertical padding), headings 48px (h2) / 30px (CTA h2), paragraph 18px                                                                          | all sections                                                                                                                                                                                                                          |
| Hero            | solid `#1c66de` bg, 800px tall, h2 82px white, h3 36px with strikethrough old price, p 20px, white cloud-wave svg bottom                                                     | welcome slider (2 slides)                                                                                                                                                                                                             |
| Icons           | feature icons (lucide), check icons in price lists, font-awesome socials in original — use lucide-react + inline SVG BrandIcon from packages/ui (lucide removed brand icons) | features, price lists, footer socials                                                                                                                                                                                                 |

## Recreation decisions

- Deliverable: single-page web hosting landing page — blue utility top
  bar, blue nav, blue hero slider with isometric server illustration and
  cloud-wave transition, white domain search with pill form, light
  blue-grey features grid, white pricing cards with Save-% tags, light
  blue-grey discount CTA with FREE mini-items, support band with phone
  number, stats CTA, white multi-column footer with newsletter form.
- Brand name "Upnode" replaces "Hami"; never use the word "Hami" as the
  brand.
- Hero: 2 slides that crossfade (or a single static slide is acceptable
  if the slider adds no value — decide at implementation; keep the copy
  and layout of slide 1 identical). Right-side illustration → a
  lucide/emoji-free composition: use a picsum image or a stylized
  SVG/lucide server-stack graphic; the white cloud-wave transition
  bottom is an SVG curve (recreate with an inline SVG or a rounded
  pseudo-element).
- Photos/illustrations → seeded picsum placeholders
  (`picsum.photos/seed/upnode-<n>/<w>/<h>`); no assets copied.
- Icons → lucide-react (Phone, Mail, Globe, MessageCircle, Search, Check,
  RefreshCw/Server/Shield/Lock/Headphones/Cloud, etc.); brand social
  icons → inline SVG BrandIcon in packages/ui.
- Fonts: Google Fonts `<link>` — "Archivo" (weights 400/500/600/700).
- Nav dropdowns (Hosting, Pages) collapse into the mobile menu; sticky
  nav turns white with dark `#303030` links on scroll (original
  behavior).
- Newsletter + domain search forms: client-side validation + success
  state (no backend); pill styling.
- Language dropdown (English ▾) is decorative (static list, no actual
  language switching); Login / Register links are anchors.
- Hero slider controls: optional prev/next or dot indicators; links are
  anchors (single page).
- Skip link "Skip to main content" (already a convention).

## Requirements

### Requirement: Top utility bar

The system SHALL render a blue utility bar above the nav with contact
info on the left and account/language controls on the right.

#### Scenario: Bar content

- **GIVEN** the Upnode page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a phone number ("Call Us: …") and an
  email address with icons on a blue background
- **AND** it SHALL show "Login / Register" and a language selector
  (e.g. "English" with a flag/globe icon) on the right

### Requirement: Navigation

The system SHALL render a blue nav bar with the brand, menu links with
dropdowns, and CTA buttons.

#### Scenario: Nav content

- **GIVEN** the page is rendered
- **WHEN** the nav bar is displayed
- **THEN** it SHALL show the wordmark "Upnode" on the left
- **AND** it SHALL show links Home (active), Hosting, Pages, About,
  Blog, and Contact
- **AND** it SHALL show a "Live Chat" outline button and a "Get Start
  Now!" solid button on the right

#### Scenario: Dropdown menus

- **GIVEN** the nav bar is rendered
- **WHEN** the user activates "Hosting" or "Pages"
- **THEN** a sub-menu SHALL open with the corresponding items
- **AND** the user SHALL be able to close the sub-menu

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** every nav link and CTA SHALL be reachable
- **AND** the user SHALL be able to close the menu

### Requirement: Hero slider

The system SHALL render a blue hero section with a headline, price line,
call-to-action buttons, an illustration, and a cloud-wave transition.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed below the nav
- **THEN** it SHALL show the headline "The Best Web Hosting" in white on
  a solid `#1c66de` background
- **AND** it SHALL show a price line with a strikethrough old price and
  the new price (e.g. "$2.95/month*")
- **AND** it SHALL show a supporting paragraph and two buttons ("Get
  Start Now!" and "Live Chat")
- **AND** it SHALL show a white cloud-wave transition at the bottom edge

#### Scenario: Slider behaviour

- **GIVEN** the hero supports multiple slides
- **WHEN** the user advances the slider
- **THEN** the slide content SHALL change while keeping the same layout
- **AND** the slider SHALL not break keyboard or screen-reader
  navigation (or a single static slide is acceptable)

### Requirement: Domain search

The system SHALL render a white section with a heading and a pill-shaped
domain search form plus a domain price list.

#### Scenario: Search form

- **GIVEN** the domain section is displayed
- **WHEN** the form is rendered
- **THEN** it SHALL show the heading "Find Your Perfect Domain Name" and
  a sub-line about the first-year price
- **AND** it SHALL show a pill search input with an extension selector
  and a blue "Search" button
- **AND** submitting an empty or invalid domain SHALL show a validation
  message without navigating

#### Scenario: Price list

- **GIVEN** the domain section is displayed
- **WHEN** the price row is rendered
- **THEN** it SHALL show at least six extensions with prices (e.g. .COM
  $5.75, .NET $9.45, .ORG $7.50, .US $5.99, .BIZ $9.99, .CO $6.00)

### Requirement: Features grid

The system SHALL render a light blue-grey section with six feature cards.

#### Scenario: Feature cards

- **GIVEN** the features section is displayed
- **WHEN** the cards are rendered
- **THEN** it SHALL carry the heading "Overall Features" on a `#e8f1f8`
  background
- **AND** it SHALL show six cards, each with an icon, a title, and a
  short description (Auto Updates, Optimized Software, Daily Backups,
  Wide Networking, Protected, Free Support)

### Requirement: Pricing plans

The system SHALL render three pricing cards with Save-% tags, price,
feature checklist, and CTAs.

#### Scenario: Plan cards

- **GIVEN** the pricing section is displayed
- **WHEN** the cards are rendered
- **THEN** it SHALL carry the heading "Choose Your Web Hosting Plan"
- **AND** it SHALL show three cards: Standard $1.99 (Save 50%), Advanced
  $3.99 (Save 70%), and Unlimited $7.99 (Save 85%)
- **AND** the middle card SHALL carry a "Best Plan" highlight tag
- **AND** each card SHALL list at least four features with check icons
  (e.g. Unlimited Number of Websites, Unlimited Email Accounts,
  Unlimited Bandwidth, 2X Processing Power & Memory)
- **AND** each card SHALL show a "Get Started" button and a "Click here
  to see all features" link

### Requirement: Discount CTA

The system SHALL render a light blue-grey CTA band with a discount
headline and six FREE mini-features.

#### Scenario: CTA band

- **GIVEN** the discount CTA section is displayed
- **WHEN** the section is rendered
- **THEN** it SHALL show a headline with an up-to-70%-discount message
  and FREE domain registration mention
- **AND** it SHALL show six mini-features prefixed "FREE" (Domain Name,
  Email Address, Plenty of Disk Space, Website Builder, Marketing Tools,
  1-Click WordPress Install)
- **AND** it SHALL show a "Get Started" button

### Requirement: Support band

The system SHALL render a support band with a phone number and a Live
Chat button.

#### Scenario: Support content

- **GIVEN** the support section is displayed
- **WHEN** the section is rendered
- **THEN** it SHALL show the message "Need help? Call our award-winning
  support team 24/7:" with a phone number
- **AND** it SHALL show a "Live Chat" button

### Requirement: Stats CTA

The system SHALL render a white CTA with a hosting-stat headline.

#### Scenario: Stats content

- **GIVEN** the stats CTA section is displayed
- **WHEN** the section is rendered
- **THEN** it SHALL show a headline such as "Proudly Hosting Over
  800,000 Websites Since 2000" with the number highlighted in `#1c66de`
- **AND** it SHALL show a "Get Started" button

### Requirement: Footer

The system SHALL render a white footer with link columns, a newsletter
subscribe form, social circles, and a bottom bar.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show columns "Products", "Programs", and "Company"
  with link lists
- **AND** it SHALL show a "Subscribe Newsletter" widget with a blurb, a
  pill email input, and a subscribe button

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid email or an empty field
- **THEN** the form SHALL show a validation error and block submission
- **AND** submitting a valid email SHALL show a success state

#### Scenario: Social circles

- **GIVEN** the footer is displayed
- **WHEN** the social row is rendered
- **THEN** it SHALL show round brand-colored social icon links (e.g.
  Facebook, Twitter, Google, Instagram, YouTube) with accessible names

#### Scenario: Bottom bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is rendered
- **THEN** it SHALL show a copyright line with a paraphrased ColorLib
  credit
- **AND** it SHALL show a "Payments We Accept" line with payment-method
  icons

### Requirement: Page composition

The system SHALL compose all sections in a single page with a skip link,
a main landmark, and a document title.

#### Scenario: Full page render

- **GIVEN** the Upnode app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL start with a "Skip to main content" link
- **AND** the header SHALL be in the banner landmark, the sections in
  the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Upnode — Web Hosting Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh upnode` passes (typecheck + lint + 100%
      coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Top bar: blue, phone + email left, Login/Register + language right
- [ ] Nav: wordmark "Upnode", Home (active)/Hosting/Pages/About/Blog/
      Contact, Live Chat outline + Get Start Now! buttons; dropdowns
      open; mobile menu works
- [ ] Hero: solid `#1c66de`, white 82px headline, strikethrough price
      line, two pill CTAs, illustration, cloud-wave bottom transition
- [ ] Domain search: pill form with validation + extension price list
      (.COM/.NET/.ORG/.US/.BIZ/.CO)
- [ ] Features grid on `#e8f1f8`: 6 icon cards (Auto Updates, Optimized
      Software, Daily Backups, Wide Networking, Protected, Free Support)
- [ ] Pricing: 3 cards with Save-% tags, "Best Plan" on middle, blue
      check lists, Get Started + view-all link
- [ ] Discount CTA: 6 FREE mini-features + Get Started
- [ ] Support band: 24/7 phone number + Live Chat
- [ ] Stats CTA: "800,000 Websites Since 2000" with blue number
- [ ] Footer: Products/Programs/Company columns, newsletter form with
      validation + success state, brand-colored social circles, bottom
      bar with copyright + payments
- [ ] Fidelity: section order 1:1, `#1c66de` brand blue, `#e8f1f8`
      grey-blue sections, Archivo font, pill buttons (radius 100px),
      picsum placeholders seeded `upnode-<n>`, no copied assets
- [ ] TEMPLATES.md: mark ALL TWO copies (lines 408, 3056 — Hami) `[x]`
      and append the live surge URL to each
- [ ] `npm install` at root before committing (lockfile registers
      `apps/upnode`); `grep -c "free-react-templates/upnode"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-upnode.surge.sh"`
      in `apps/upnode/package.json`
- [ ] PR title: `feat: Upnode — web hosting website template (ColorLib
Hami)`; body includes the source URL, preview URL, tokens, and the
      two-copy TEMPLATES.md note

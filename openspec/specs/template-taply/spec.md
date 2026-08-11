# Template: Taply (Mobile App Landing / One-pager)

## Purpose

Taply is a single-page mobile-app landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "MobApp" website template
(source: https://colorlib.com/wp/template/mobapp/ — "MobApp — Free One
Page Mobile App Landing Page"), built under a DIFFERENT name (Taply —
"tap", the core mobile-app interaction, plus the friendly "-ly" suffix
matching the family convention: Wingly, Drivly, Nestly, Bookly, Coastly,
Restly, Sleeply, Dozely, Soarly, Lodgely, Sneakly; single lowercase word,
no collision with `apps/`, `openspec/specs/` or `docs/templates/` —
verified 2026-08-11), per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The source appears THREE times in TEMPLATES.md (dup-row trap): line 456
(**Mobile App (27)** category — the FIRST occurrence, the canonical one),
line 1477 (**One Page (101)**), and line 2063 (**Landing Page (91)**) —
all `- [ ]` rows of the SAME template. ONE implementation covers all three
rows (mark all `[x]` with the same surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "MobApp" — page title "MobApp - App Landing Page
  Template". Free one-page mobile app landing page, Bootstrap 4 based
  (bootstrap.min.css + owl.carousel + themify-icons). The recreation
  brands itself **Taply** but keeps the same section structure, copy kinds
  and layout.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/mobapp/` — HTTP 200, ~33 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets:
  `css/style.css` (custom, ~12.5 KB — the template-specific tokens live
  here), `css/bootstrap.min.css`, `css/themify-icons.css`,
  `css/owl.carousel.min.css`. Screenshot
  `MobApp-free-one-mobile-app-landing-page.jpg` (1200×991, viewed in
  browser) matches the live DOM (gradient hero → client logos → features
  visible in the shot).
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.navbar.navbar-dark.navbar-expand-lg`, transparent
     over the gradient hero): brand logo image (`images/logo.png`, left);
     links (`.nav-link`, white, uppercase, small) right-aligned: **HOME**
     (active) · **FEATURES** · **GALLERY** · **PRICING** · **CONTACT**;
     trailing "**Download**" button (outline/light style, uppercase). The
     section ids the links point to: `#home #features #gallery #pricing
#contact`.
  2. **Hero** (`header#home.bg-gradient`, `padding: 100px 0 0; text-align:
center; color: #FFF`): h1 "Mobile App Landing Page Template" (large,
     light-weight white sans) + paragraph "The one and only solution for
     any kind of mobila app landing needs. Just change the screenshots and
     texts and you are good to go." + centered phone mockup
     (`img#iphonex` `images/iphonex.png` — iPhone-X style lock screen;
     use a picsum phone/UI seed).
  3. **Client logos** (`div.client-logos.my-5`, white bg): a single
     horizontal strip of greyed-out client logos (`images/client-logos.png`
     — one combined image in the source; in the recreation render 4–6
     text/icon "logo" placeholders in grey).
  4. **Features** (`div.section.light-bg#features`, bg `#faf6fb`):
     `.section-title` — eyebrow `small` "HIGHLIGHTS" (color `#998a9b`,
     uppercase) + h3 "Features you love"; then `row` of THREE
     `col-12.col-lg-4` cards (`div.card.features > .card-body > .media`):
     themify icon in `.gradient-fill` (ti-face-smile **Simple** ·
     ti-settings **Customize** · ti-shield **Secure**) + `h4.card-title`
     - `p.card-text` lorem.
  5. **Discover our App** (`div.section`, white): two-column row — LEFT
     `col`: h3 "Discover our App" + lorem paragraph + "Read more" link
     (btn); RIGHT `col`: eyebrow `small` "FEATURES" + h3 "Do more with our
     app" + 4 checklist items with icons: **Communication** · **Scheduling**
     · **Messages** · **Live Chat** (each icon + title + one-line text).
  6. **Communicate with ease** (`div.section.light-bg#communication`):
     alternating image + text block — h3 "Communicate with ease" + lorem
     (image on one side, text on the other).
  7. **Scheduling when you want** (`div.section#schedule`): same layout
     pattern, h3 "Scheduling when you want" + lorem.
  8. **Realtime Messaging service** (`div.section.light-bg#messages`): h3
     "Realtime Messaging service" + lorem.
  9. **Live chat when you needed** (`div.section#livechat`): h3 "Live chat
     when you needed" + lorem. (Sections 6–9 alternate light-bg/white and
     flip the image/text side each time.)
  10. **App Screenshots** (`div.section.light-bg#gallery`): `.section-title`
      - h3 "App Screenshots" + phone-screenshot carousel (owl carousel in
        the source; 3–4 phone-screen images).
  11. **Testimonials** (`div.section`, white): `.section-title` + h3 "What
      our Customers Says" — carousel of quote cards: quote paragraph +
      `img.client-img` avatar + name "Crystal Gordon" + country "United
      States".
  12. **Pricing** (`div.section#pricing`): `.section-title` — eyebrow
      `small` "PRICING" + h3 "Upgrade to Pro"; `card-deck` of THREE
      `div.card.pricing` columns — (a) **PERSONAL** $14/m: 10 Projects ·
      5 GB Storage · Basic Support · ~~Collaboration~~ · ~~Reports and
      analytics~~; (b) **FOR TEAMS** $29/m (`card.pricing.popular` — 3px
      top border `#ce75b4` + soft shadow): Unlimited Projects · 100 GB
      Storage · Priority Support · Collaboration · Reports and analytics;
      (c) **ENTERPRISE** $249/m: Unlimited Projects · Unlimited Storage ·
      Collaboration · Reports and analytics · Web hooks. Each card: price
      `span.price` 45px weight 300 color `#633991` + "Choose this Plan"
      button (`btn-primary btn-lg btn-block`, gradient).
  13. **FAQ** (`div.section.pt-0`): `.section-title` + h3 "Frequently Asked
      Questions" — accordion of FOUR items: "Can I try before I buy?" ·
      "What payment methods do you accept?" · "Can I change my plan
      later?" · "Do you have a contract?" — each with a lorem answer.
  14. **CTA — Download Anywhere** (`div.section.bg-gradient`): h3 "Download
      Anywhere" + paragraph "Available for all major mobile and desktop
      platforms. Rapidiously visualize optimal ROI rather than
      enterprise-wide methods of empowerment." + **App Store** and
      **Google Play** buttons (white/outline) + footnote "*Works on iOS
      10.0.5+, Android Kitkat and above." (`p.text-primary`).
  15. **Contact info** (`div#contact`, inside the gradient CTA section,
      three icon+text blocks): address "1485 Pacific St, Brooklyn, NY
      11216 USA" · email "support@mobileapp.com" · phone "518-3636-2800".
  16. **Footer** (`footer.my-5.text-center`, white bg): centered copyright
      line ("Copyright © <year>. All rights reserved." + neutral credit —
      source credits Colorlib, rename to Taply) + links **PRESS** ·
      **TERMS** · **PRIVACY**.
- **Visual design (TEMPLATES.md screenshot
  `MobApp-free-one-mobile-app-landing-page.jpg`, 1200×991, viewed in
  browser 2026-08-11):** sleek tech-forward one-pager. Deep VIOLET →
  MAGENTA/HOT-PINK diagonal gradient hero (dark purple left → pink right)
  with a large thin white headline, short white subtext, and a centered
  iPhone-X style phone mockup showing a lock screen; white nav row above
  (HOME FEATURES GALLERY PRICING CONTACT + outlined DOWNLOAD button);
  below the hero a white strip of grey client logos; then a pale-lavender
  (`#faf6fb`) "Features you love" section with three icon cards (Simple /
  Customize / Secure) and small purple accent lines; dark-purple headings
  on light backgrounds throughout. Modern clean sans (Rubik). The
  screenshot reaches the features row; everything below (alternating
  feature blocks, screenshots, testimonials, pricing, FAQ, gradient CTA,
  footer) is verified from the live DOM.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-11):**
  - Brand gradient (buttons + accents): `linear-gradient(122deg, #e54595
0%, #fd378e 100%)` — `.btn-primary` background (hover reverses the two
    stops); also used for the feature icons' `.gradient-fill`.
  - Hero + CTA section background (`.bg-gradient`): `linear-gradient(135deg,
rgba(60, 8, 118, 0.8) 0%, rgba(250, 0, 118, 0.8) 100%)` — deep purple
    `#3c0876` → hot pink `#fa0076`. (A second gradient at ~135deg `#4a0d8f`
    → `#fa2a8f` appears for the same family of blocks.)
  - Primary/brand text purple: **`#633991`** (pricing price, headings,
    `text-primary`). Secondary purple: **`#9477b4`**. Muted text:
    **`#959094`** (pricing list items), eyebrow `small` **`#998a9b`**.
  - Light section background: **`#faf6fb`** (`.light-bg` — features,
    alternate blocks, screenshots). White sections in between.
  - Pricing cards: border `1px solid #f1eef1`; `.popular` card 3px top
    border `#ce75b4`, shadow `0 12px 59px rgba(36,7,31,0.11)`; strikethrough
    `<del>` `#d9d3d8`.
  - Font: **'Rubik', sans-serif** (Google Fonts — add the `<link>` in
    `index.html`, weights 300/400/500/700; body weight 400, headings
    regular-to-bold, hero headline light 300).
  - Buttons (`.btn`): font-size 12px, weight 400, UPPERCASE, padding
    `.375rem 1.35rem`, `border-radius: 3px`, transition all 0.3s ease;
    `.btn-primary` gradient bg + `box-shadow: 0 9px 32px rgba(0,0,0,0.3)`,
    hover = reversed gradient; `.btn-outline-light:hover` color `#d6619c`.
  - Section titles: `small` eyebrow uppercase (12px, `#998a9b`) above h3;
    card titles `h4`; pricing price 45px weight 300.
  - Section backgrounds: hero/CTA = purple→pink gradient; light sections
    `#faf6fb`; white sections; footer white with centered text.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap 4
  layout (NO Bootstrap dependency); section order 1:1 as above; body in
  Rubik via Google Fonts `<link>` in `index.html`; brand gradient
  `#e54595 → #fd378e` + hero/CTA gradient `#3c0876 → #fa0076` in `@theme`
  used via Tailwind classes; images via seeded picsum placeholders
  (`picsum.photos/seed/taply-<n>/<w>/<h>` — a phone/UI screenshot subject
  for the hero mockup and the screenshots gallery, faces for the
  testimonial avatar, generic shots for the 4 alternate feature blocks);
  icons from lucide-react (smile/settings/shield for features, check for
  the checklist, message/calendar/chat for the alternate blocks, phone/mail/
  map-pin for contact, apple/play for store buttons); the client-logo strip
  as 4–6 greyed text logos (no asset copying); the screenshots and
  testimonial "carousels" can be static stacks or a simple index carousel
  with dots (keep logic in a pure exported function for 100%-coverage
  tests); the source's lorem copy may be paraphrased but keep the same
  kinds (headline + subtext + phone mockup; eyebrow + h3 + 3 cards; etc.);
  brand "MobApp"/"Colorlib" → "Taply" everywhere including the footer
  credit (neutral); document title "Taply — Mobile App Landing Page".
  The nav "Download" button and "Read more" link are dead links in the
  recreation (single landing page).

Taply lives in `apps/taply` (package `@free-react-templates/taply`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the gradient hero with a
brand, five uppercase anchor links, and a "Download" button.

#### Scenario: Navbar links and button

- **GIVEN** the Taply page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Taply" on the left
- **AND** the nav SHALL show links HOME (active), FEATURES, GALLERY,
  PRICING, CONTACT, white, uppercase, small
- **AND** a "Download" button SHALL be shown on the right (light/outline
  style, uppercase)

#### Scenario: Anchor targets

- **GIVEN** the navbar is rendered
- **WHEN** any nav link is followed
- **THEN** it SHALL anchor to its section: #home (hero), #features, #gallery,
  #pricing, #contact

### Requirement: Hero

The system SHALL render a purple-to-pink gradient hero with a large light
headline, a subtext paragraph, and a centered phone mockup image.

#### Scenario: Hero content

- **GIVEN** the Taply page is rendered
- **WHEN** the hero is visible
- **THEN** a gradient background (deep purple `#3c0876` → hot pink
  `#fa0076`) SHALL be shown
- **AND** the headline "Mobile App Landing Page Template" SHALL be shown
  in large light-weight white text
- **AND** a white subtext paragraph SHALL be shown
- **AND** a centered phone mockup image SHALL be shown below the text

### Requirement: Client logos

The system SHALL render a white strip of greyed-out client logos between
the hero and the features section.

#### Scenario: Logo strip

- **GIVEN** the Taply page is rendered
- **WHEN** the hero is scrolled past
- **THEN** a horizontal strip of 4–6 grey client logo placeholders SHALL
  be shown on a white background

### Requirement: Features

The system SHALL render a light-lavender (`#faf6fb`) section with the
eyebrow "HIGHLIGHTS", the heading "Features you love", and three icon
cards: Simple, Customize, Secure.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** the section loads
- **THEN** the eyebrow "HIGHLIGHTS" SHALL be shown in small uppercase grey
  text (`#998a9b`)
- **AND** the heading "Features you love" SHALL be shown
- **AND** three cards SHALL be shown side by side on lg: Simple (smile
  icon), Customize (settings icon), Secure (shield icon)
- **AND** each card SHALL show an icon, an `h4` title, and a short
  paragraph
- **AND** the icons SHALL use the brand gradient (`#e54595` → `#fd378e`)

### Requirement: Discover our App

The system SHALL render a two-column section with "Discover our App" text
and a "Read more" link on the left, and a "Do more with our app" checklist
with four items on the right.

#### Scenario: Two-column layout

- **GIVEN** the Taply page is rendered
- **WHEN** the discover section is visible
- **THEN** the left column SHALL show the heading "Discover our App", a
  paragraph, and a "Read more" link
- **AND** the right column SHALL show the eyebrow "FEATURES", the heading
  "Do more with our app", and four checklist items with icons:
  Communication, Scheduling, Messages, Live Chat

### Requirement: Alternating feature blocks

The system SHALL render four alternating image + text blocks (light-bg and
white, image side flipping) with the headings "Communicate with ease",
"Scheduling when you want", "Realtime Messaging service", and "Live chat
when you needed".

#### Scenario: Block order and backgrounds

- **GIVEN** the Taply page is rendered
- **WHEN** the page is scrolled past the discover section
- **THEN** four blocks SHALL be shown in order:
  1. "Communicate with ease" on `#faf6fb` background
  2. "Scheduling when you want" on white
  3. "Realtime Messaging service" on `#faf6fb`
  4. "Live chat when you needed" on white
- **AND** each block SHALL show an image on one side and a heading plus a
  paragraph on the other
- **AND** the image/text side SHALL alternate between consecutive blocks

### Requirement: App Screenshots

The system SHALL render a light-bg "App Screenshots" section with a
carousel of phone-screen images.

#### Scenario: Screenshots carousel

- **GIVEN** the gallery section is rendered
- **WHEN** the section loads
- **THEN** the heading "App Screenshots" SHALL be shown
- **AND** 3–4 phone-screen images SHALL be shown in a carousel (or static
  row) with dots/controls
- **AND** the section background SHALL be `#faf6fb`

### Requirement: Testimonials

The system SHALL render a "What our Customers Says" section with
testimonial cards, each with a quote, an avatar, a name, and a country.

#### Scenario: Testimonial cards

- **GIVEN** the Taply page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the heading "What our Customers Says" SHALL be shown
- **AND** at least one testimonial card SHALL show a quote paragraph, an
  avatar image, a name (e.g. "Crystal Gordon"), and a country (e.g.
  "United States")

### Requirement: Pricing

The system SHALL render an "Upgrade to Pro" pricing section with three
tier cards — PERSONAL $14/m, FOR TEAMS $29/m (highlighted), ENTERPRISE
$249/m — each with a feature list and a "Choose this Plan" button.

#### Scenario: Three pricing tiers

- **GIVEN** the pricing section is rendered
- **WHEN** the section loads
- **THEN** the eyebrow "PRICING" and the heading "Upgrade to Pro" SHALL be
  shown
- **AND** three tier cards SHALL be shown:
  - PERSONAL — $14/m — 10 Projects, 5 GB Storage, Basic Support, with
    Collaboration and Reports & analytics struck through
  - FOR TEAMS — $29/m — Unlimited Projects, 100 GB Storage, Priority
    Support, Collaboration, Reports and analytics
  - ENTERPRISE — $249/m — Unlimited Projects, Unlimited Storage,
    Collaboration, Reports and analytics, Web hooks
- **AND** each card SHALL show a 45px weight-300 price in purple
  `#633991` and a "Choose this Plan" button with the brand gradient

#### Scenario: Popular tier highlight

- **GIVEN** the pricing cards are rendered
- **WHEN** the FOR TEAMS card is displayed
- **THEN** it SHALL be visually highlighted with a 3px top border
  (`#ce75b4`) and a soft shadow

### Requirement: FAQ

The system SHALL render a "Frequently Asked Questions" section with an
accordion of four questions and answers.

#### Scenario: FAQ accordion

- **GIVEN** the FAQ section is rendered
- **WHEN** the section loads
- **THEN** the heading "Frequently Asked Questions" SHALL be shown
- **AND** four questions SHALL be shown: "Can I try before I buy?", "What
  payment methods do you accept?", "Can I change my plan later?", "Do you
  have a contract?"
- **AND** each question SHALL expand to reveal a short answer (accordion)

### Requirement: Download CTA + contact

The system SHALL render a gradient "Download Anywhere" section with App
Store and Google Play buttons, a compatibility footnote, and the contact
info (address, email, phone).

#### Scenario: CTA content

- **GIVEN** the Taply page is rendered
- **WHEN** the CTA section is visible
- **THEN** a purple-to-pink gradient section SHALL be shown with the
  heading "Download Anywhere" and a paragraph
- **AND** "App Store" and "Google Play" buttons SHALL be shown
- **AND** the footnote "*Works on iOS 10.0.5+, Android Kitkat and above."
  SHALL be shown

#### Scenario: Contact info

- **GIVEN** the CTA section is rendered
- **WHEN** the contact block is visible
- **THEN** three icon + text items SHALL be shown: the address "1485
  Pacific St, Brooklyn, NY 11216 USA", the email "support@mobileapp.com",
  and the phone "518-3636-2800"
- **AND** the email and phone SHALL be real mailto:/tel: links (the phone
  href computed at runtime from a spaced string — never a literal tel:
  URI)

### Requirement: Footer

The system SHALL render a centered footer with a copyright line and
PRESS / TERMS / PRIVACY links.

#### Scenario: Footer content

- **GIVEN** the Taply page is rendered
- **WHEN** the page is scrolled to the footer
- **THEN** a centered footer SHALL be shown with the copyright line
  ("Copyright © <current year>. All rights reserved." + neutral Taply
  credit)
- **AND** links PRESS, TERMS, PRIVACY SHALL be shown

### Requirement: Responsive behavior

The system SHALL collapse the navbar into a mobile menu below lg and stack
the multi-column sections to single columns on small screens.

#### Scenario: Mobile navigation

- **GIVEN** the Taply page is rendered on a viewport narrower than 992px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL collapse behind a toggler (hamburger) that
  opens the links + Download button

#### Scenario: Stacked columns

- **GIVEN** the Taply page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** the feature cards, discover columns, alternate blocks,
  screenshots, testimonials, pricing cards, and contact items SHALL stack
  to single columns

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-taply`
- [ ] `scripts/verify-app.sh taply` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent navbar
      (Taply brand · HOME active / FEATURES / GALLERY / PRICING / CONTACT ·
      Download button) → gradient hero (h1 "Mobile App Landing Page
      Template" + subtext + centered phone mockup) → grey client-logos
      strip → Features you love (HIGHLIGHTS eyebrow + 3 icon cards:
      Simple / Customize / Secure, `#faf6fb` bg) → Discover our App (text + Read more | FEATURES eyebrow + "Do more with our app" + 4 checklist
      items) → 4 alternating blocks (Communicate with ease / Scheduling
      when you want / Realtime Messaging service / Live chat when you
      needed) → App Screenshots (`#faf6fb`, carousel) → What our Customers
      Says (quote + avatar + name + country) → Upgrade to Pro (3 tier
      cards, FOR TEAMS popular) → FAQ (4-item accordion) → Download
      Anywhere (gradient CTA, App Store/Google Play, iOS/Android footnote)
      → contact info (address · email · phone) → centered footer (copyright + PRESS/TERMS/PRIVACY)
- [ ] Brand gradients in `@theme`: `#e54595 → #fd378e` (buttons, feature
      icons) and `#3c0876 → #fa0076` (hero + CTA backgrounds); brand purple
      `#633991` for headings/prices; `#faf6fb` light sections; eyebrow
      `#998a9b`; popular border `#ce75b4` — all via Tailwind classes
- [ ] Body font Rubik via Google Fonts `<link>` in `index.html`
      (300/400/500/700; hero light 300)
- [ ] Buttons: 12px uppercase, weight 400, radius 3px, gradient bg +
      `0 9px 32px rgba(0,0,0,0.3)` shadow, hover reverses the gradient
- [ ] Placeholder images via `picsum.photos/seed/taply-<n>/<w>/<h>`
      (phone/UI subject for hero mockup + screenshots, faces for the
      testimonial avatar), icons from lucide-react, no copied assets
- [ ] Brand renamed "MobApp"/"Colorlib" → "Taply" everywhere; copyright
      credit neutral; dead links (Download, Read more, PRESS/TERMS/PRIVACY)
      anchor harmlessly
- [ ] Email link is mailto:, phone link computed at runtime from a spaced
      string (no literal tel: URI — toolchain redaction pitfall)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL THREE `- [ ]` rows
      (lines ~456 Mobile App, ~1477 One Page, ~2063 Landing Page) `[x]`
      with the same surge URL + `npm run readme:status` (implementer)

# Template: Counsel (Law Firm / Solicitor)

## Purpose

Counsel is a single-page law-firm / legal-services website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Solicitor" website template (source:
https://colorlib.com/wp/template/solicitor/ — "Solicitor - Free Bootstrap 5
Template by Colorlib"), built under a DIFFERENT name (Counsel — a lawyer or
firm giving legal advice, fitting a solicitor / investigative-litigation
brand; single lowercase word, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-14), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The source appears TWICE in TEMPLATES.md (dup-row trap): line 625
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one) and
line 2133 (**Lawyer (23)**) — both are `- [ ]` rows of the SAME template. ONE
implementation covers both rows (mark all `[x]` with the same surge URL at
bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Solicitor" — law firm / private investigation
  website template (a solicitors' firm with investigative, litigation,
  security-consultation and due-diligence services). Bootstrap 5 based
  (bootstrap bundle + aos) plus a custom `css/style.css` (~56 KB) that
  carries the real design tokens; icon fonts icomoon (`icon-keyboard_arrow_right`,
  phone icon) and flaticon (`flaticon-judge-1`, `flaticon-judge`,
  `flaticon-themis`, `flaticon-fingerprint`, `flaticon-courthouse`,
  `flaticon-laws`). Brand name used in the source copy: **"Solicitor"** (the
  recreation brands itself **Counsel** but keeps the same section structure,
  copy kinds and layout).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/solicitor/` — HTTP 200, ~41 KB HTML
  (REACHABLE — the preview is live, not a 404). The index page carries the
  FULL page: navbar + hero + about + services + why-us + investigative tabs +
  practice area + testimonials + resources + CTA band + "Write to us" form +
  footer (all sections parsed from the live DOM). Subpages also exist
  (`practicing-area.html`, `services.html`, `about.html`, `contact.html` —
  all HTTP 200) but the recreation is single-page and covers the index
  content. Custom CSS `css/style.css` (~56 KB, fully extracted for tokens).
  Screenshot `solicitor-free-template.jpg` (1200×946, viewed in the browser)
  shows the top of the page: DARK charcoal design — hero is a grayscale
  photo of a man in a suit at a desk (white brick wall behind), headline
  right-aligned **"Meet all your investigative and litigation needs"** with a
  solid blue **Our services** button and a white-outline **Contact us**
  button; below it the **"I'm Jon Campbell"** about section (same man's
  head-and-shoulders portrait overlapping the hero's bottom edge); serif
  headings, white text, blue CTAs, desaturated professional photography.
- **Visual design (from DOM + CSS tokens + screenshot):** a **dark theme**
  throughout — page background `#1b1c1e` with white text (Roboto 14px body),
  **Playfair Display serif** headings (`.section .heading` 45px/700, mobile
  30px), and a **brand blue `#037ef3`** that drives every accent: primary
  buttons (with BLACK text — `color: #000`), the 50px circle behind the
  service icons, the practice-card hover background, and the footer link
  hover underline. Near-black `#0f0f11` panels (practice-area cards, the
  decorative band behind the about portrait) alternate with very subtle
  white bands `rgba(255,255,255,0.02)` (services + resources boxes). Body
  copy is muted `rgba(255,255,255,0.5)`, nav links
  `rgba(255,255,255,0.7)`, footer links `#777`. Buttons are rounded 4px with
  generous padding (15px 30px) and a right arrow (`has-arrow`, padding-right
  50px). The hero sits on a background photo with a `rgba(0,0,0,0.4)`
  overlay, 100vh tall.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.site-nav`, `position: absolute; top: 40px; z-index:
9` — transparent, floats over the hero): brand **"Solicitor"** left
     (`h1` 24px, Playfair); nav links **Home · Practicing Area · Menu One
     (dropdown: Sub Menu One/Two/Three) · Services · About · Contact Us**
     (14px, `rgba(255,255,255,0.7)`, hover/active `#fff`, padding 10px 10px);
     right: phone link **123-489-9381**. Mobile: hamburger toggler + mobile
     menu. Recreation: brand "Counsel", same top-level links (dropdown may be
     simplified to its visible label or kept as a hover menu), phone link,
     mobile panel.
  2. **Hero** (`div.hero.overlay`, 100vh, `min-height: 780px`,
     `background-image: url('images/hero_1.jpg')` cover + `:before` overlay
     `rgba(0,0,0,0.4)`): right-aligned column (`col-lg-5 ms-auto`,
     `text-start`): h1.heading **"Meet all your investigative and litigation
     needs"** (white, Playfair), `p.text-white-50` lorem, buttons **Our
     services** (`btn btn-primary has-arrow mr-2` — solid blue) and **Contact
     us** (`btn btn-outline-white has-arrow` — white outline), both with
     `icon-keyboard_arrow_right` arrow.
  3. **About** (`section.sec-about-me`, dark, `.section` padding 7rem 0):
     h3.heading **"I'm Jon Campbell"** (45px/700); second row
     (`justify-content-between`): left `col-lg-4` — 2 paragraphs
     (`text-white-50`) + **Our services** blue button; right `col-lg-6
.bg-1` — portrait `images/about_2.png` inside `.img-wrap`
     (`margin-top: -150px` — overlaps the hero's bottom edge) over a
     **`#0f0f11` decorative band** (`.bg-1:after`, 300px tall, `width: 300%`,
     `z-index: -1`) behind it.
  4. **Our Services** (`section.py-5.bg-custom-light` — bg
     `rgba(255,255,255,0.02)`): h3.heading **"Our Services"**; 6 cards
     (`col-xs-12 col-sm-6 col-md-6 col-lg-4`): **Councel · Legal Dept ·
     Compliance · Identity · Hall of Justice · Law Abiding** — each: white
     flaticon icon (`fs-1`) with a **50px blue circle** behind it
     (`.circle:after`, `border-radius: 50%`, `background-color: #037ef3`,
     `left: -20px`, `z-index: -1`), h4 title, lorem paragraph.
  5. **Why us** (`section.sec-why-us`): h3.heading **"Security
     Consultants"**; row: image `images/hero_3.jpg` left (`col-lg-7`,
     `img-fluid rounded`), right `col-lg-4 ms-auto mt-5`: h3 **"Justice
     serves"** + paragraph (`text-white-50`) + **Read more** blue button.
  6. **Investigative tabs** (`section.sec-3`): 3 tab links (`row g-2
custom-nav-slider nav`, `col-4` each, white text, active = white
     bottom border, padding 20px 0): **Investigative Services · Security
     Consultations · Criminal Defense Investigations** (Bootstrap
     tab-panes); each pane (`row justify-content-between`): left `col-lg-3`
     — h3.heading + short paragraph + **Read more** blue button; right
     `col-lg-7` — image `images/hero_1.jpg` / `hero_2.jpg` / `hero_3.jpg`.
  7. **Practice Area** (`section.sec-4`): h3.heading **"Practice Area"**;
     12 numbered media cards (`col-6 col-sm-6 col-md-4 col-lg-4`, `.media-2`
     — `background-color: #0f0f11`, padding 20px, `padding-bottom: 80px`):
     **01 Asset Searches · 02 Background Investigations · 03 Business Due
     Diligence · 04 Civil Investigations · 05 Criminal Defense
     Investigations** — then 06–12 REPEAT the same names (06 Asset Searches,
     07 Background Investigations, 08 Business Due Diligence, 09 Civil
     Investigations, 10 Criminal Defense Investigations, 11 Background
     Investigations, 12 Business Due Diligence); each card: number div, h3
     title (with `<br>` split words), arrow icon (hidden → visible);
     **hover: background → blue `#037ef3`** and arrow fades in.
  8. **Testimonials** (`section.py-5.sec-testimonial`): h3.heading
     **"Testimonials"**; left vertical pill nav (`col-md-4`, `nav-pills`)
     with round avatars (`border-radius: 50%`; `person_2.jpg`,
     `person_1.jpg`, `person_3.jpg`): **Angela Smith — CEO, Co-Founder ·
     Joshua Hamilton — Web Designer · Janice Bruce — Web Designer**; right
     tab-content `blockquote p` quote (30px, 18px ≤991.98px): the Duden
     river quote with attribution.
  9. **Resources** (`section.sec-list`): heading row — h3.heading
     **"Resources"** left (`col-lg-7`) + intro paragraph right (`col-lg-5
align-self-end`, `text-white-50`); `.box` (bg
     `rgba(255,255,255,0.02)`, padding 40px) with **4 columns**
     (`col-lg-3`) of `list-unstyled` link lists, 6 links each (lorem
     sentences).
  10. **CTA band** (`section.py-0`): split REVERSED — image
      `images/hero_2.jpg` right (`col-lg-7 order-lg-2`, `img-fluid
rounded`), left `col-lg-4 me-auto mt-5`: h3 **"Peace & order"** +
      paragraph (`text-white-50`) + **Read more** blue button.
  11. **Write to us** (`section.sec-6`): h3.heading **"Write to us"**; form
      (`row g-1`, action="#") — **Full Name + Email** (`col-lg-6`), **Phone
      Number + Choose a Service** (`col-lg-6`), textarea **"Write your
      message"** (`col-lg-12`, rows 10), **Send Message** blue button
      (`btn btn-primary has-arrow`, `col-lg-12`); `.form-control` focus
      border `#81bff9`.
  12. **Footer** (`div.site-footer`, 14px, padding 70px 0): 3 widgets —
      **Contact** (address **43 Raymouth Rd. Baltemoer, London 3910**;
      `+1(123)-456-7890` ×2; `info@mydomain.com`; links `#777`, hover `#fff`
      with blue underline `a:before` `rgba(3,126,243,0.1)` → `#037ef3`),
      **Sources** (2×6 links: About us/Services/Vision/Mission/Terms/Privacy
      - Partners/Business/Careers/Blog/FAQ/Creative), **Links** (Our
        Vision/About us/Contact us); bottom bar: "© <year> All rights reserved
        | This template is made with ♥ by Colorlib" — Colorlib credit →
        **Component Dock link (mandatory)** `https://www.componentdock.com/`.

## Design tokens

- **Page bg:** `#1b1c1e` (body `background-color`); text `#fff`; body
  font-size 14px, weight 400, line-height 1.5, Roboto.
- **Brand blue:** `#037ef3` — primary buttons (`.btn-primary` bg, text
  `#000`; hover bg `#2991f5`, border `#1c8bf4`), service icon circles
  (`.circle:after` 50px, `left: -20px`, `z-index: -1`), practice-card hover
  bg (`.media-2:hover`), footer link underline hover (`.site-footer a:hover
:before`), testimonial/nav accents.
- **Form focus border:** `#81bff9` (`.form-control:focus`).
- **Dark panels:** `#0f0f11` — `.media-2` practice cards (padding 20px,
  padding-bottom 80px), `.sec-about-me .bg-1:after` decorative band (300px
  tall, width 300%, `margin-left: -100px`, `z-index: -1`).
- **Subtle white bands:** `rgba(255,255,255,0.02)` — `.bg-custom-light`
  (services section), `.sec-list .box` (padding 40px).
- **Muted text:** `rgba(255,255,255,0.5)` (`text-white-50` body copy,
  testimonial roles), `rgba(255,255,255,0.7)` (nav links), `#777` (footer
  links → `#fff` on hover).
- **Headings:** **"Playfair Display", serif** (h1–h5 + `.logo`); `.section
.heading` 45px/700 (30px ≤991.98px); hero `.heading` white.
- **Body font:** **"Roboto", sans-serif** (14px/400; `--bs-font-sans-serif`).
- **Buttons:** `.btn` padding **15px 30px**, border-radius **4px**,
  transition .3s; `.has-arrow` padding-right 50px + arrow icon after label;
  `.btn-primary` — blue `#037ef3` bg + **black** text, hover `#2991f5`;
  `.btn-outline-white` — transparent + white border/text, hover → white bg +
  black text.
- **Hero:** 100vh (`min-height: 780px`), `background-size: cover` +
  `rgba(0,0,0,0.4)` overlay (`:before`).
- **Section rhythm:** `.section` padding **7rem 0**; `py-5` → 3rem;
  `py-0` → 0. `.img-wrap` in about: `margin-top: -150px` (overlap, 0 on
  mobile).
- **Nav:** absolute, `top: 40px`, `z-index: 9`, transparent; links 14px,
  padding 10px 10px; brand h1 24px Playfair.
- **Icons:** source icomoon (`icon-keyboard_arrow_right` arrows, phone) +
  flaticon (`judge-1`, `judge`, `themis`, `fingerprint`, `courthouse`,
  `laws`) → **lucide-react** in the recreation (probe exports first!):
  ArrowRight (all has-arrow buttons), and for the six services Gavel /
  Scale / Landmark / Fingerprint / ScrollText / BookOpen (candidates — pick
  6 distinct lucide icons that read as law/justice; verify each with the
  `typeof` probe). No brand icons needed (no social links in this template).
- **Footer:** padding 70px 0, font-size 14px; widget h3 white Playfair;
  links `#777` with `a:before` underline bar `rgba(3,126,243,0.1)` → hover
  `#037ef3` + `#fff` text.
- **Forms:** Bootstrap `.form-control` (padding .375rem .75rem), focus
  border `#81bff9`; labels are placeholders only (Full Name / Email / Phone
  Number / Choose a Service / Write your message).

## Requirements

### Requirement: Header navigation

- **GIVEN** the Counsel page is loaded
- **WHEN** the user views the top of the page
- **THEN** a transparent navbar SHALL render over the hero with the COUNSEL
  brand/logo left, nav links Home · Practicing Area · Services · About ·
  Contact Us right, and a phone number link (123-489-9381)
- **AND** on viewports ≤ the mobile breakpoint the navbar SHALL show a
  hamburger toggler

#### Scenario: Mobile navigation

- **GIVEN** the Counsel page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** a mobile menu SHALL open with the same links and a close control

### Requirement: Hero

- **GIVEN** the Counsel page is loaded
- **WHEN** the user views the hero
- **THEN** a 100vh hero SHALL render a background photo with a dark
  `rgba(0,0,0,0.4)` overlay, the white serif h1 **"Meet all your
  investigative and litigation needs"** (right-aligned), a muted
  paragraph, a solid blue **Our services** button and a white-outline
  **Contact us** button, both with arrow icons

#### Scenario: Hero CTAs

- **GIVEN** the hero is displayed
- **WHEN** the user clicks **Our services** or **Contact us**
- **THEN** the buttons SHALL be dead-end links (no navigation required)

### Requirement: About section

- **GIVEN** the user scrolls past the hero
- **WHEN** the about section is displayed
- **THEN** the dark section SHALL show the heading **"I'm Jon Campbell"**,
  two muted paragraphs, a blue **Our services** button, and a portrait
  image that overlaps the hero's bottom edge with a dark `#0f0f11`
  decorative band behind it

#### Scenario: Portrait overlap

- **GIVEN** the about section is displayed on a desktop viewport
- **WHEN** the user views the portrait column
- **THEN** the portrait SHALL overlap the section above it (source:
  `.img-wrap` `margin-top: -150px`, disabled on mobile)

### Requirement: Services

- **GIVEN** the user scrolls past the about section
- **WHEN** the services section is displayed
- **THEN** a subtle white band SHALL show the heading **"Our Services"** and
  a responsive 3-column grid of 6 cards — Councel, Legal Dept, Compliance,
  Identity, Hall of Justice, Law Abiding — each with a white icon over a
  50px blue circle, an h4 title and a short paragraph

#### Scenario: Service icon circles

- **GIVEN** a service card is displayed
- **WHEN** the user views the icon
- **THEN** the icon SHALL sit over a 50px blue `#037ef3` circle (source:
  `.circle:after`, `z-index: -1`)

### Requirement: Why us

- **GIVEN** the user scrolls past the services
- **WHEN** the why-us section is displayed
- **THEN** the section SHALL show the heading **"Security Consultants"**, a
  rounded photo on the left, and on the right the h3 **"Justice serves"**, a
  muted paragraph and a blue **Read more** button

#### Scenario: Read more button

- **GIVEN** the why-us section is displayed
- **WHEN** the user clicks **Read more**
- **THEN** the button SHALL be a dead-end link (no navigation required)

### Requirement: Investigative services tabs

- **GIVEN** the user scrolls past the why-us section
- **WHEN** the investigative section is displayed
- **THEN** three tab links SHALL render — **Investigative Services ·
  Security Consultations · Criminal Defense Investigations** (white text,
  active tab with white bottom border) — each switching a pane with an h3
  heading, a short paragraph, a blue **Read more** button and a photo

#### Scenario: Tab switching

- **GIVEN** the investigative section is displayed
- **WHEN** the user clicks a tab
- **THEN** the corresponding pane SHALL become visible and the active tab
  SHALL be marked (white bottom border)

### Requirement: Practice Area

- **GIVEN** the user scrolls past the tabs
- **WHEN** the practice area section is displayed
- **THEN** the heading **"Practice Area"** and a responsive 3-column grid of
  12 numbered dark cards SHALL render — 01 Asset Searches, 02 Background
  Investigations, 03 Business Due Diligence, 04 Civil Investigations, 05
  Criminal Defense Investigations, then 06–12 repeating those names — each
  with a number, a title and an arrow icon

#### Scenario: Practice card hover

- **GIVEN** a practice card is displayed
- **WHEN** the user hovers over it
- **THEN** the card background SHALL turn blue `#037ef3` and the arrow icon
  SHALL fade in (matching the source's hover state)

### Requirement: Testimonials

- **GIVEN** the user scrolls past the practice area
- **WHEN** the testimonials section is displayed
- **THEN** the heading **"Testimonials"**, a left vertical list of three
  people with round avatars (Angela Smith — CEO, Co-Founder; Joshua
  Hamilton — Web Designer; Janice Bruce — Web Designer) and a large quote
  (30px) SHALL render

#### Scenario: Testimonial switching

- **GIVEN** the testimonials section is displayed
- **WHEN** the user clicks a person in the list
- **THEN** the quote SHALL switch to that person's testimonial

### Requirement: Resources

- **GIVEN** the user scrolls past the testimonials
- **WHEN** the resources section is displayed
- **THEN** the heading **"Resources"** with an intro paragraph on the right
  and a 4-column box of link lists (6 links per column) SHALL render

#### Scenario: Resource links

- **GIVEN** the resources section is displayed
- **WHEN** the user reads the link lists
- **THEN** four columns of six links each SHALL render inside the subtle
  white band box

### Requirement: CTA band

- **GIVEN** the user scrolls past the resources
- **WHEN** the CTA band is displayed
- **THEN** a reversed split SHALL show a rounded photo on the right and, on
  the left, the h3 **"Peace & order"**, a muted paragraph and a blue
  **Read more** button

#### Scenario: CTA Read more

- **GIVEN** the CTA band is displayed
- **WHEN** the user clicks **Read more**
- **THEN** the button SHALL be a dead-end link (no navigation required)

### Requirement: Contact form

- **GIVEN** the user scrolls past the CTA band
- **WHEN** the "Write to us" section is displayed
- **THEN** the heading **"Write to us"** and a form SHALL render with Full
  Name, Email, Phone Number and Choose a Service inputs, a Write your
  message textarea and a blue **Send Message** button

#### Scenario: Contact form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits it
- **THEN** the form SHALL validate required fields and SHALL NOT navigate
  (a success message or dead-end submit is acceptable)

### Requirement: Footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is displayed
- **THEN** a dark footer SHALL show three columns — Contact (address 43
  Raymouth Rd. Baltemoer, London 3910; two phone numbers; email), Sources
  (12 links in two lists) and Links (3 links) — with a bottom bar
  containing the copyright line and a link to
  **https://www.componentdock.com/** ("Component Dock") — mandatory footer
  convention; no ColorLib credit

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user reads the bottom bar
- **THEN** a link to **https://www.componentdock.com/** labeled
  "Component Dock" SHALL be present and no ColorLib credit SHALL appear

### Requirement: Responsive layout

- **GIVEN** the Counsel page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** the hero SHALL keep its photo + overlay with stacked text, the
  about portrait overlap SHALL be disabled, the services grid SHALL collapse
  to 1 column, the practice grid to 2 columns, the resources box to 2
  columns, the tabs to full-width stacked rows, and the navbar SHALL use the
  hamburger menu

#### Scenario: Stacked layout

- **GIVEN** the Counsel page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** every multi-column section SHALL stack appropriately with
  tappable buttons and the header SHALL use the hamburger menu

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-counsel`
- [ ] `scripts/verify-app.sh counsel` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent navbar (COUNSEL
      brand + Home/Practicing Area/Services/About/Contact Us + phone
      123-489-9381; hamburger on mobile) → hero (100vh photo +
      rgba(0,0,0,0.4) overlay, right-aligned "Meet all your investigative
      and litigation needs" + blue Our services + outline Contact us) →
      about ("I'm Jon Campbell", 2 paragraphs + Our services button, portrait
      overlapping hero with `#0f0f11` band) → services (`rgba(255,255,255,
    0.02)` band, 6 cards w/ blue-circle icons) → why-us (Security
      Consultants, photo + Justice serves + Read more) → tabs
      (Investigative/Security/Criminal Defense, 3 panes w/ photo) → practice
      area (12 numbered `#0f0f11` cards, hover → blue) → testimonials
      (3 avatars + 30px quote) → resources (4-col link box) → CTA band
      (Peace & order, reversed split) → write to us (4 inputs + textarea +
      Send Message) → footer (Contact/Sources/Links + Component Dock link)
- [ ] Brand tokens in `@theme`: `#037ef3` blue (btn-primary bg, icon
      circles, card hover, footer underline hover), `#1b1c1e` page bg,
      `#0f0f11` dark panels, `rgba(255,255,255,0.02)` subtle bands, `#fff`
      text, `rgba(255,255,255,0.5)` muted, `#777` footer links,
      `#81bff9` form focus — all via Tailwind classes
- [ ] Fonts: Playfair Display (headings) + Roboto (body) via Google Fonts
      `<link>` in `index.html`
- [ ] Buttons: padding 15px 30px, radius 4px; `.btn-primary` blue bg +
      BLACK text (hover `#2991f5`); `.btn-outline-white` outline (hover
      white bg + black text); all with right arrow icon (`has-arrow`,
      padding-right 50px)
- [ ] Placeholder images via `picsum.photos/seed/counsel-<n>/<w>/<h>` — 1
      hero photo, 1 about portrait, 1 why-us photo, 3 tab photos, 1 CTA
      photo, 3 testimonial avatars (subject-critical: hero/about need a
      person/desk scene and the avatars need headshots — use the
      seed-screening method + verified person picsum IDs 1027/64/823/996
      before pinning), icons from lucide-react (ArrowRight + 6 distinct
      law/justice icons — probe exports first; no brand icons)
- [ ] Brand renamed "Solicitor" → "Counsel" everywhere; footer MUST link
      `https://www.componentdock.com/`; all links/forms dead-end without
      navigation (except the componentdock link)
- [ ] Source copy quirks: "Councel" (typo in service card title), practice
      items 06–12 repeat names 01–05, phone number duplicated in the footer
      Contact widget, "Menu One" dropdown with sub menus — normalize or
      keep, note in PR; vary placeholder copy for realism but keep the same
      kind of content
- [ ] Multi-page source → single-page recreation: only the index content is
      recreated (subpages practicing-area/services/about/contact exist in
      the source but are out of scope); no client-side router needed
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows (line
      625 Bootstrap 5, line 2133 Lawyer) `[x]` with the same surge URL +
      `npm run readme:status`

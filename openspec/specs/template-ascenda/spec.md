# Template: Ascenda (Business / Agency Landing)

## Purpose

Ascenda is a single-page business/agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Stodeo" design (see TEMPLATES.md, Bootstrap (216) category),
built under a DIFFERENT name — **Ascenda** (ascend — growth, matching the
"best solution for your business to grow" hero copy; single lowercase word,
no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
TEMPLATES.md — verified 2026-08-14) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a clean corporate landing page with a strong blue palette: a
transparent absolute navbar over a flat white centered hero, an
image+navy-box "welcome" band, an overlapping counter section, a dark-navy
"Grow your business" split with two service cards, a 3-post blog strip, a
4-icon "Why Are We Awesome?" grid, a 4-slide testimonial slider, and a light
grey 5-widget footer. Ascenda recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

> NOTE (prep-stream 2026-08-14): the official preview
> `https://preview.colorlib.com/theme/stodeo/` is LIVE — fetched HTTP 200
> (~207 KB HTML + `css/style.css` ~57 KB + tiny-slider + aos + glightbox +
> icomoon + flaticon, curl-verified) and analyzed for this prep. The
> TEMPLATES.md screenshot (`stodeo-free-template.jpg`, 1200×946) was also
> viewed in a browser; it shows the navbar, the centered hero, the welcome
> image+navy-box band and the top of the counter section, matching the live
> render (below-the-fold sections were captured from the live DOM + CSS).

## Design reference (replication findings)

- **Original:** ColorLib "Stodeo" — free Bootstrap 5 business/agency website
  template (source: https://colorlib.com/wp/template/stodeo/; page title
  "Stodeo &mdash; Free Bootstrap 5 Website Template by Colorlib"). The
  recreation brands itself **Ascenda** but keeps the same section structure,
  heading copy kinds, and card set.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/stodeo/` (HTTP 200, ~207 KB HTML +
  `css/style.css` ~57 KB + `css/tiny-slider.css` + `css/aos.css` +
  `css/glightbox.min.css` + `fonts/icomoon/style.css` +
  `fonts/flaticon/font/flaticon.css`). Single-page document; section order
  (1:1):
  1. **Mobile menu** — `.site-mobile-menu` (slide-in panel, hidden on
     desktop; toggle `.js-menu-toggle` burger with 3 `<span>` bars).
  2. **Navbar** — `<nav class="site-navigation">` inside `.site-nav`
     (CSS: `position: absolute; top: 0; z-index: 9; width: 100%; padding:
20px 0` — transparent, floats OVER the hero):
     - LEFT: `h1.logo` > a **"Stodeo"** (24px, weight 700, color `#3369e7`).
     - RIGHT: `ul.site-menu` (inline-block `<li>`; hidden <lg, burger
       toggle): **Home · Why Stodeo · Menu One · Menu Two · Dropdown**
       (`li.has-children` → submenu: **Sub Menu One · Sub Menu Two · Sub
       Menu Three**) **· Our Services · Gallery · About · Contact Us**.
       Links: 14px, `color: rgba(51, 105, 231, 0.7)`, hover/active
       `#3369e7`, padding 10px 15px.
  3. **Hero** — `<div class="hero">` (CSS: `padding: 7rem 0`, FLAT WHITE —
     NO background image): `.container > .row.justify-content-center >
  .col-lg-7.text-center`: `<span class="subheading d-block mb-2
  text-uppercase">` **"Welcome To Our Site"** (`.subheading`:
     `color: #00aaff; font-size: 14px`) → `h1.heading.mb-4` (`.heading`:
     weight 700, color `#081b46`) **"We have the best solution for your
     business to grow."** → `p.w-75.mx-auto.mb-5` lorem → **"Get
     started"** `a.btn.btn-primary` (solid `#3369e7`, white text).
  4. **Welcome band** — `.section.sec-welcome.py-0` (`.section` padding
     7rem 0): `.row.g-0`: LEFT `.col-lg-6` `.img-wrap` photo
     (`images/img_1.jpg`, `.img-wrap { margin-right: -100px }` — image
     OVERLAPS under the right box); RIGHT `.col-lg-6` `.box` (CSS:
     `background: #133ea1; padding: 50px 100px 50px 150px; z-index: 2`):
     lorem paragraph (white/50) + **"About us"** `a.btn.btn-outline-dark-bg
.has-arrow` (transparent, border `#00aaff`, white text, pill,
     trailing `icon-keyboard_backspace` arrow).
  5. **Why choose us + counters** — `.section.sec-why-choose-us.pt-0
.section-counter`: `.row.g-0`: LEFT `.col-lg-5` `.aside-box`
     (padding-top 80px): two `.counter` blocks (`.counter strong`:
     `color: #00aaff; font-size: 50px; display: block`) **12** "Years of
     experience" + **34** "Team members"; RIGHT `.col-lg-7` `.box`
     (CSS: `background-color: #fff; margin-top: -50px` — box OVERLAPS the
     left column; `.box-inner` padding 140px 100px 140px 140px):
     `<span class="subheading">` **"Why Stodeo?"** → `h2.heading`
     **"You still thinking about why you should choose us?"** → lorem
     paragraph → **"Why Stodeo"** `a.btn.btn-outline-light-bg.has-arrow`.
  6. **Grow your business** — `.section.sec-3.pt-0`: `.row.g-0`: LEFT
     `.col-lg-6` photo (`images/img_2.jpg`); RIGHT `.col-lg-6.relative`
     `.box-wrap` (CSS: `position: absolute; left: 0; bottom: 0; z-index:
2; background: #133ea1;` `::after` = `height: 100%; width: 200%;
background: #133ea1` — navy band extends past the column; `.box-wrap >
div { padding: 15rem 50px 100px }`): `h2.heading.text-white`
     **"Grow your business"** → `p.text-white-50.mb-4` lorem → `.row` with
     two `.col-md-6` `.service-2` cards: `<span class="flaticon-idea">`
     (50px white icon) + `h3` (16px white) + p (white/50) — titles **"Far
     far away"** · **"far from the countries"** → **"Our services"**
     `a.btn.has-arrow.btn-outline-dark-bg` (mt-4).
  7. **Blog posts** — `.section.sec-posts.pt-0`: `.row.g-0`: LEFT
     `.col-lg-3` (empty spacer); RIGHT `.col-lg-9` `.box`:
     `.row.mb-4`: `<span class="subheading d-block">` **"Our Blogs"** →
     `h2.heading.mb-4` **"Recent Blog Posts"**; `.row.g-5` with **3**
     `.col-lg-4` `.post-entry` cards (aos delays 100/200/300) — each:
     `<span class="date">` **"23 Aug 2020"** (`.post-entry .date`:
     `color: #9a9a9a; font-size: 13px; margin-bottom: 10px`) → `h3` link
     **"Far far away, behind the word mountains, far from the countries"**
     → lorem paragraph. NO images in post entries.
  8. **Why Us grid** — `.section.pt-0`: `.row.justify-content-center.mb-5`:
     `<span class="subheading">` **"Why Us"** → `h2.heading`
     **"Why Are We Awesome?"** → lorem; then `.row` with **4** `.col-lg-3`
     icon columns: `<span class="icon-camera">` / `icon-home` /
     `icon-paper-plane` / `icon-search` + `h3` (Photograpy · Find it here ·
     Inspire Photograpy · Fly Your Dreams) + lorem paragraph.
  9. **Testimonials** — `.section`: `<span class="subheading">`
     **"Testimonial"** → `h2.heading` **"Happy Clients"**;
     `.testimonial-slider-wrap` > `.testimonial-slider` (tiny-slider, tns)
     with **4** `.untree_co-testimonial.text-center` slides — each: `.img-
wrap.mb-4` circular photo (`images/person_1..4.jpg`, 100px,
     `border-radius: 50%`) + blockquote (18px, line-height 1.5, `p { color:
#000 }`) + h3 name. Dots `.tns-nav` bottom-center (absolute,
     translateX(-50%), `bottom: 0`; `.tns-outer .tns-inner { padding-
bottom: 100px }`).
  10. **Footer** — `<footer class="site-footer">` (CSS: `background:
#efefef; font-size: 14px; color: #777/#888; padding: 70px 0`);
      `.row` of widgets: **"About Stodeo."** (`h3` + lorem paragraph) ·
      **"Connect"** (social circles: 40px, `background: #ccc`,
      `border-radius: 40%`, white glyph, hover `background: #3369e7`) ·
      **"Navagation"** (links: HTML5 · CSS3 · jQuery · Bootstrap ·
      Javascript) · **"Services"** (links: Web Design · eCommerce ·
      WordPress · Frontend) · **"Contact"** (43 Raymouth Rd. Baltemoer,
      London 3910 · +1(123)-456-7890 · +1(123)-456-7890 ·
      info@mydomain.com). Copyright bar: "Copyright © <year> All rights
      reserved | This template is made with by Colorlib" (rephrase: "©
      <year> Ascenda — All rights reserved | Free website template at
      Component Dock").
- **Visual design (TEMPLATES.md screenshot `stodeo-free-template.jpg`,
  1200×946, viewed in browser 2026-08-14):** white navbar with blue
  "Stodeo" logo left and dark-grey/blue links right; centered hero with
  uppercase cyan "WELCOME TO OUR SITE" eyebrow, large bold dark-navy
  headline, grey subtext and a solid blue PILL "Get started" button;
  below, the welcome band: office team photo left with a deep-navy box
  overlapping it on the right containing white text and an outline "About
  us →" pill; the counter section starts at the bottom of the frame with a
  big blue "12" over "Years of experience". Color story: BLUE `#3369e7`
  primary, deep navy `#133ea1` boxes, cyan `#00aaff` accents, white
  backgrounds, light grey `#efefef` footer.

## Design tokens

From `css/style.css` (verified 2026-08-14):

- **Brand colors:**
  - `#3369e7` (vivid blue) — PRIMARY: `.logo` color, nav link hover/active,
    `.btn-primary` bg, footer link color, social circle hover bg.
  - `#133ea1` (deep navy) — section boxes: `.sec-welcome .box` bg,
    `.box-wrap` bg + `::after` band.
  - `#00aaff` (cyan) — ACCENT: `.subheading` color, `.counter strong`
    numbers, `.btn-outline-*-bg` border color + hover background.
  - `#081b46` (dark navy) — `.heading` (hero h1, section h2) color.
- **Neutrals:** `#fff` (section/hero backgrounds, text on navy), `#212529`
  (body text), `#7a7a7a` (muted body), `#9a9a9a` (post dates),
  `#efefef` (footer bg), `#777`/`#888` (footer text), `#ccc` (footer social
  circles), `rgba(51,105,231,0.7)` (nav link rest state).
- **Fonts:** SINGLE family — `"Noto Sans JP", sans-serif` for body AND
  headings AND logo (`--bs-font-sans-serif`, `body`, `h1–h5, .logo`).
  Load via Google Fonts `<link>` in `index.html`.
- **Type scale:** hero h1 `.heading` weight 700 `#081b46` (~2.5–3rem);
  `.subheading` 14px uppercase `#00aaff`; nav links 14px; `.logo` 24px/700;
  `.counter strong` 50px; `.service-2 h3` 16px; `.post-entry .date` 13px
  `#9a9a9a`; testimonial blockquote 18px/1.5; footer 14px.
- **Buttons:** ALL PILLS — `.btn { border-radius: 30px; padding: 8px 25px;
font-size: 13px; line-height: 1.3; padding-left/right: 30px }`.
  - `.btn-primary`: solid `#3369e7`, white text; hover `#2b59c4`/`#2954b9`.
  - `.btn-outline-dark-bg` / `.btn-outline-light-bg`: transparent bg,
    `border-color: #00aaff`, white text; hover → `background-color:
#00aaff`. `.has-arrow` variant: `padding-right: 45px` with a trailing
    arrow icon absolutely positioned `right: 15px`, `transform:
translateY(-50%) rotate(180deg)` (i.e. a LEFT-pointing arrow before
    the label — source uses `icon-keyboard_backspace`).
- **Section backgrounds:** hero = flat white (NO image); welcome = photo +
  navy `#133ea1` box (z-index 2, overlaps photo via `img-wrap
margin-right: -100px`); why-choose-us = white box `margin-top: -50px`
  overlapping the counter column; sec-3 = navy `#133ea1` `.box-wrap`
  absolutely positioned bottom-left with `::after` extending 200% width;
  footer = `#efefef`.
- **Radius family:** PILL buttons (30px) and circular testimonial avatars
  (50%, 100px) + footer social circles (`border-radius: 40%`, 40px).
- **Spacing rhythm:** `.section` padding 7rem 0 (hero same); `.box`
  paddings: welcome 50px 100px 50px 150px, why-choose 140px 100px,
  `.box-wrap > div` 15rem 50px 100px; footer padding 70px 0; post-entry
  cards in `.row.g-5`; section headings `mb-4`.
- **Icons:** flaticon glyphs (idea, trophy) + icomoon (camera, home,
  paper-plane, search, keyboard_backspace, social brands) — recreate with
  lucide-react: idea → `Lightbulb`, trophy → `Trophy`, camera → `Camera`,
  home → `Home`, paper-plane → `Send`, search → `Search`,
  keyboard_backspace (left arrow) → `ArrowLeft`; brand icons
  (Facebook/Twitter/Instagram/LinkedIn) are NOT in lucide-react — use
  inline SVG brand paths per the colorlib-template-replication skill.

## Requirements

### Requirement: Transparent navbar with logo and links

The system SHALL render an absolutely-positioned transparent navbar over
the hero (`.site-nav`: `position: absolute; top: 0; width: 100%; z-index:
9; padding: 20px 0`) with the brand "Ascenda" (24px, weight 700, `#3369e7`)
on the left and, on the right, 14px navigation links — Home, Why Ascenda,
Menu One, Menu Two, Dropdown (with a submenu of Sub Menu One / Sub Menu Two
/ Sub Menu Three), Our Services, Gallery, About, and Contact Us — styled
`rgba(51,105,231,0.7)` with `#3369e7` hover/active. On mobile (<lg) the
links SHALL collapse behind a burger toggle that opens the slide-in mobile
menu panel.

#### Scenario: Brand and links

- **GIVEN** the Ascenda page is rendered
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL be transparent and positioned over the hero
- **AND** the brand SHALL read "Ascenda" in 24px bold `#3369e7`
- **AND** the navbar SHALL contain links Home, Why Ascenda, Menu One, Menu
  Two, Dropdown, Our Services, Gallery, About, and Contact Us
- **AND** the Dropdown link SHALL open a submenu with Sub Menu One, Sub
  Menu Two, and Sub Menu Three

#### Scenario: Mobile burger menu

- **GIVEN** the viewport is below the desktop breakpoint
- **WHEN** the burger toggle is activated
- **THEN** a slide-in mobile menu SHALL appear listing the same links
- **AND** the mobile menu SHALL close when the close control is activated

### Requirement: Centered hero with subheading, headline and Get started button

The system SHALL render a flat-white hero (padding 7rem 0, NO background
image) with a centered `col-lg-7` column: the uppercase cyan subheading
"Welcome To Our Site" (`#00aaff`, 14px), the bold dark-navy headline "We
have the best solution for your business to grow." (`#081b46`, weight 700),
a constrained-width lorem paragraph, and a solid blue pill "Get started"
button (`#3369e7` background, white text, radius 30px).

#### Scenario: Hero content

- **GIVEN** the Ascenda page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL have a white background with no image
- **AND** the subheading SHALL read "Welcome To Our Site" in uppercase
  cyan
- **AND** the headline SHALL read "We have the best solution for your
  business to grow."
- **AND** a "Get started" pill button SHALL be shown with `#3369e7`
  background and white text

### Requirement: Welcome band with image and navy overlay box

The system SHALL render the welcome section as a split band: a photo on the
left (`.img-wrap`, `margin-right: -100px` so the image slides under the
right box) and a deep-navy `#133ea1` box on the right (padding 50px
100px 50px 150px, z-index 2) containing a white/50 lorem paragraph and an
outline pill button "About us" (transparent, `#00aaff` border, white text,
trailing left-pointing arrow).

#### Scenario: Welcome band layout

- **GIVEN** the Ascenda page is rendered
- **WHEN** the welcome section is displayed
- **THEN** a photo SHALL appear on the left overlapping under the box
- **AND** a `#133ea1` navy box SHALL appear on the right
- **AND** the box SHALL contain a paragraph and an "About us" outline pill
  button with a trailing arrow

### Requirement: Counter section overlapping the welcome band

The system SHALL render a "why choose us" section with a left aside column
of two counters — **12** "Years of experience" and **34** "Team members",
each a 50px cyan `#00aaff` number over a label — and a right white box
(`margin-top: -50px` so it overlaps the counter column, inner padding 140px
100px) containing the cyan subheading "Why Stodeo?", the bold navy headline
"You still thinking about why you should choose us?", a paragraph, and an
outline pill "Why Stodeo" button.

#### Scenario: Counters and heading

- **GIVEN** the Ascenda page is rendered
- **WHEN** the counter section is displayed
- **THEN** the counters 12 and 34 SHALL be shown in 50px cyan type with the
  labels "Years of experience" and "Team members"
- **AND** the white box SHALL overlap the counter column by 50px
- **AND** the box SHALL show the heading "You still thinking about why you
  should choose us?" and a "Why Stodeo" outline pill button

### Requirement: Grow your business navy band with service cards

The system SHALL render the "Grow your business" section as a split: photo
left (`col-lg-6`), and right an absolutely-positioned navy `#133ea1`
`.box-wrap` anchored bottom-left whose `::after` extends the navy band
200% beyond the column. The box SHALL contain the white headline "Grow your
business", a white/50 paragraph, two service cards (Lightbulb icon +
16px white title + blurb: "Far far away" · "far from the countries"), and
an outline pill "Our services" button with trailing arrow.

#### Scenario: Navy band and service cards

- **GIVEN** the Ascenda page is rendered
- **WHEN** the "Grow your business" section is displayed
- **THEN** the section SHALL show the photo on the left
- **AND** a navy `#133ea1` band SHALL hold the white headline, paragraph,
  two service cards, and the "Our services" outline pill button
- **AND** each service card SHALL show an icon, a white title, and a blurb

### Requirement: Recent Blog Posts strip

The system SHALL render a blog section with a left `col-lg-3` spacer and a
right `col-lg-9` box containing the cyan subheading "Our Blogs" and the
bold navy heading "Recent Blog Posts", followed by three post cards, each
with a grey 13px date ("23 Aug 2020"), a linked h3 title, and a lorem
paragraph. Post entries SHALL NOT contain images.

#### Scenario: Blog cards

- **GIVEN** the Ascenda page is rendered
- **WHEN** the blog section is displayed
- **THEN** the heading "Recent Blog Posts" SHALL be shown with the
  subheading "Our Blogs"
- **AND** exactly three post cards SHALL be rendered
- **AND** each card SHALL show a date, a link title, and a paragraph

### Requirement: Why Are We Awesome icon grid

The system SHALL render the "Why Us" section with the cyan subheading "Why
Us", the bold navy heading "Why Are We Awesome?", and four icon columns
(Camera · Home · Send · Search) each with a title (Photograpy · Find it
here · Inspire Photograpy · Fly Your Dreams) and a lorem paragraph.

#### Scenario: Icon columns

- **GIVEN** the Ascenda page is rendered
- **WHEN** the "Why Us" section is displayed
- **THEN** the heading "Why Are We Awesome?" SHALL be shown with the
  subheading "Why Us"
- **AND** four columns SHALL each render an icon, a title, and a paragraph

### Requirement: Happy Clients testimonial slider

The system SHALL render the testimonial section with the cyan subheading
"Testimonial", the bold navy heading "Happy Clients", and a 4-slide
testimonial slider (dots bottom-center). Each slide SHALL show a circular
100px avatar, an 18px blockquote, and a name. Slides SHALL be navigable
(prev/next or dots) and autoplay-capable.

#### Scenario: Testimonial slides

- **GIVEN** the Ascenda page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** the heading "Happy Clients" SHALL be shown with the subheading
  "Testimonial"
- **AND** four testimonial slides SHALL exist, each with a circular avatar,
  a quote, and a name
- **AND** navigation dots SHALL be visible below the slider

### Requirement: Light grey footer with five widgets

The system SHALL render a `#efefef` footer (padding 70px 0, 14px text) with
an "About Ascenda." widget (paragraph), a "Connect" widget (circular
`#ccc` social icon buttons, hover `#3369e7`), a "Navagation" links widget
(HTML5 · CSS3 · jQuery · Bootstrap · Javascript), a "Services" links widget
(Web Design · eCommerce · WordPress · Frontend), a "Contact" widget
(address · two phone numbers · email), and a copyright bar whose credit
line links to https://www.componentdock.com/ ("Component Dock").

#### Scenario: Footer widgets

- **GIVEN** the Ascenda page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a `#efefef` background
- **AND** an "About Ascenda." widget SHALL show a paragraph
- **AND** a "Connect" widget SHALL show circular social icon buttons
- **AND** "Navagation" SHALL list HTML5, CSS3, jQuery, Bootstrap, and
  Javascript
- **AND** "Services" SHALL list Web Design, eCommerce, WordPress, and
  Frontend
- **AND** "Contact" SHALL show the address, two phone numbers, and email
- **AND** the copyright line SHALL contain a link to
  https://www.componentdock.com/

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens section:
`#3369e7` primary and `#00aaff` accent in `@theme`, `#133ea1` for the navy
boxes, "Noto Sans JP" loaded via Google Fonts in `index.html`, ALL buttons
pill-shaped (radius 30px), and the exact section order (navbar → hero →
welcome band → counters → grow your business → blog → why us grid →
testimonials → footer).

#### Scenario: Token application

- **GIVEN** the Ascenda app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand colors `#3369e7` and `#00aaff` SHALL be defined as
  theme tokens and used by the logo, buttons, subheadings, and counters
- **AND** the "Noto Sans JP" font SHALL be loaded via Google Fonts in
  `index.html`
- **AND** all buttons SHALL use pill corners (radius 30px)

## Verification checklist

- [ ] `openspec/specs/template-ascenda/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (navbar → hero → welcome
      band → counters → grow your business → blog → why us grid →
      testimonials → footer); tokens `#3369e7` / `#133ea1` / `#00aaff` /
      `#081b46`; "Noto Sans JP"; ALL buttons PILLS (radius 30px).
- [ ] Placeholder images: `https://picsum.photos/seed/ascenda-<n>/<w>/<h>`
      (deterministic per template; welcome img_1 (office/team scene) and
      grow-business img_2 + 4 testimonial portraits per the seed-screening
      method; verify seeds render plausible scenes before committing).
- [ ] Icons from lucide-react (Lightbulb, Trophy, Camera, Home, Send,
      Search, ArrowLeft); brand icons (Facebook/Twitter/Instagram/
      LinkedIn) as inline SVG paths (lucide removed brand icons).
- [ ] Testimonial slider: 4 slides with dots; implement prev/next + dots
      navigation; autoplay optional but must be testable (fake timers).
- [ ] Dropdown submenu + mobile slide-in menu need open/close interaction
      tests; desktop + mobile nav render duplicate links in the DOM — use
      `getAllByRole` and index the mobile one last in tests.
- [ ] Footer credit line MUST link `https://www.componentdock.com/` (no
      ColorLib attribution anywhere in app code — provenance lives only in
      the spec, TEMPLATES.md, and the PR).
- [ ] 100% coverage lines/functions/branches/statements; `scripts/
verify-app.sh ascenda` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Stodeo), preview URL
      (`https://preview.colorlib.com/theme/stodeo/`), design tokens used,
      what differs (renames, placeholder images).

# Template: Vanguard (Bootstrap 5 / Web Agency)

## Purpose

Vanguard is a clean, light web-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pageone" website template (source:
https://colorlib.com/wp/template/pageone/ — "Pageone — Free Bootstrap 5
Website Template by Colorlib"), built under a DIFFERENT name (Vanguard —
"the leading position in a movement or field", a single lowercase word
evoking an agency at the front of its field, a nod to the source name's
"page one" = first; no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-13), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The source appears THREE times in TEMPLATES.md (dup-row trap): line 614
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one),
line 1122 (**Business (365)**) and line 2350 (**One Page (91)**) — all
`- [ ]` rows of the SAME template. ONE implementation covers all three rows
(mark all `[x]` with the same surge URL at bookkeeping time).

> Prep note (prep-stream 2026-08-13): the live preview
> `https://preview.colorlib.com/theme/pageone/` is REACHABLE (curl verified,
> HTTP 200, ~30 KB HTML) and was analyzed for this prep; the stylesheet
> `css/style.css` (~55 KB) was fetched and token-extracted; the TEMPLATES.md
> screenshot (`pageone-free-template-1.jpg`, 1200×946, viewed in browser)
> matches the live DOM section-for-section. Computed styles of the live
> render were also sampled in-browser (footer bar, button, hero heading).

## Design reference (replication findings)

- **Original:** ColorLib "Pageone" — page title "Pageone &mdash; Free
  Bootstrap 5 Website Template by Colorlib" (template page
  `https://colorlib.com/wp/template/pageone/`). Category in TEMPLATES.md:
  **Bootstrap 5 (89)** (first of 3 dup rows; also Business (365) at 1122
  and One Page (91) at 2350). The source is NOT shipped anywhere (no `[x]`
  row references it). The recreation brands itself **Vanguard** but keeps
  the same section structure, copy kinds and token palette.
- **Live preview DOM analyzed (verified 2026-08-13):**
  `https://preview.colorlib.com/theme/pageone/` (HTTP 200, 30,132 bytes).
  Light single-page agency site, 9 content blocks + `<footer>` (sections
  NOT separated by rules — whitespace rhythm instead):
  1. `<nav class="site-nav js-site-navbar site-navbar-target">` — absolutely
     positioned over the hero (`position: absolute; top: 0; z-index: 9`),
     padding 20px. Left: brand `a.logo` "PageOne" + `<span
class="text-primary">.</span>` (pink dot — recreation: **Vanguard.**
     with the same pink period). Center (desktop): links Home
     (`#home-section`, active), Services (`#services-section` — has a
     `has-children` dropdown: Sub Menu One / Sub Menu Two / Dropdown >
     Sub Menu One/Two/Three), Process (`#process-section`), Clients
     (`#clients-section`), About (`#about-section`). Right: Contact
     (`#contact-section`). Mobile: burger (`span`s) toggling a full-screen
     `site-mobile-menu` overlay (close X + `site-mobile-menu-body`).
  2. `<div class="hero" id="home-section">` — pure white
     (`background: #fff`), `padding-top/bottom: 12rem`, single centered
     `col-lg-12 mx-auto`: `h1.heading` 80px/700 (50px < 992px) "We are web
     agency based in Los Angeles, CA". No image, no buttons.
  3. `<div class="section pt-0 section-1">` — two-column intro:
     `col-lg-4 ml-auto`: one paragraph with `<strong class="text-black">`
     lead-in ("Far far away, behind the word mountains…" lorem) and two
     `col-lg-6` `ul.links-underline` lists: **Technology / Marketing /
     Product & Design** and **Strategic Consulting / Business Synergies /
     Fundrising** (source spelling "Fundrising" — recreation may fix to
     "Fundraising"). Section `pt-0` (no top padding; hero provides it).
  4. `<div class="section bg-light" id="services-section">` — heading row
     (`col-lg-6` heading-wrap "Services" + `col-lg-5 ml-auto` desc
     paragraph + `a.btn.btn-primary` "Get In Touch" → `#contact-section`);
     then 2×2 grid of FOUR `div.service` cards (`col-lg-5`, gap-5,
     `data-aos="fade-up"` delays 100/200): `a.thumb.glightbox` image
     (`images/img_1..4.jpg`, mb-4) + `h3.mb-3` link. Cards: **Graphic
     Design**, **Web Development**, **Branding**, **Iconography**.
     glightbox = click-to-lightbox on the images.
  5. `<div class="section section-3" id="process-section">` — heading row
     ("Our process" + desc + `a.btn-primary` "Learn More" (href="#") +
     `a.link-muted` "Scroll down"); then 3×2 grid of SIX `div.step` cards
     (`col-lg-4`, `data-aos="fade-up"` delays 100–300): `span.number`
     "01"–"06" + `h3`. Steps: **Information Gathering**, **Planning**,
     **Design**, **Development**, **Testing and Delivery**,
     **Maintenance**. Card: padding 30px, `border: 3px solid #efefef`;
     `.step.active` (first card) + hover/focus → `border: 3px solid
#ec1e64`.
  6. `<div class="section section-4" id="clients-section">` — DARK band
     (`background-color: #1d1d1d`): heading row ("Our clients",
     `h2.heading.text-white` + desc `p.desc` white) + 2×3 grid of SIX
     `div.client` cards (`col-md-6`, `data-aos="fade-up"` delays 100/200):
     `img` logo (40px height, `images/logo-*.png`) + `h3` + lorem
     paragraph. Clients: **Goldline**, **Foxhub**, **Ideaa**,
     **Nirastate**, **Treva**, **Goldline** (source quirk: Goldline
     appears twice — recreation MAY vary the 6th name, noting it in the
     PR). Card: `background: #fff`, padding 30px, mb-30px; hover/active →
     `box-shadow: 0 15px 30px 0 rgba(0,0,0,.1)`.
  7. `<div class="section section-5 bg-light">` — heading row ("Features"
     - desc) + 2×3 grid of SIX `div.service-2` items (`col-lg-5`,
       `data-aos="fade-up"` delays 100/200): `span.flaticon-*` glyph (80px,
       `color: #ec1e64`) + `h3.mb-4` link (underlined, `#ec1e64`).
       Items: **Illustration** (flaticon-vector), **24/7 Support**
       (flaticon-chat), **Easy to use** (flaticon-settings), **Web
       development** (flaticon-monitor), **Intuitive** (flaticon-paper-plane),
       **Documentation** (flaticon-book).
  8. `<div class="section section-6" id="about-section">` — heading row
     ("Office and team") + `row.about-image` split: `col-lg-7` office
     photo (`images/about_1.jpg`, mb-5 on mobile) + `col-lg-5 ps-lg-5`:
     `h2.heading.mb-2.fw-bold` "Our Office" + three paragraphs (first has
     `<strong class="text-black">` lead-in); then `h2.heading.mb-2.fw-bold`
     "Our Team" + 1×4 row of FOUR `div.team` cards (`col-lg-3`,
     `data-aos="fade-up"` delays 0–400): `a.thumb` image
     (`images/person_1..4.jpg`) + `h3` link + `span.text-black-50`
     role + lorem paragraph + `ul.social` (4 round icon links:
     instagram / twitter / facebook / linkedin). Members: **Bradley
     Costa** — CEO, Partner; **Chanice Muir** — CTO, Partner; **Alisha
     Ellison** — Web Designer; **Bradley Costa** — Web Developer (source
     quirk: name duplicated across cards 1 & 4 — recreation MAY vary the
     4th name, noting it in the PR).
  9. `<div class="container py-5" id="contact-section">` — heading row
     ("Contact Us" heading-wrap only) + two-column: `col-lg-6`
     `form.contact-form` — First name + Last name (side by side), Email
     address (`type=email`), Message textarea (rows 5), submit
     `button.btn.btn-primary` "Send Message"; `col-lg-5 ml-auto` — three
     `div.quick-contact-item` rows: 80px circle icon (2px `#f8f9fa`
     border, `border-radius: 50%`) + 20px text: **155 Market St #101,
     Paterson, NJ 07505, United States** (icon-home), **+1 202 2020 200**
     (icon-phone), **@info@mydomain.com** (icon-envelope — source quirk:
     literal "@" prefix; recreation should drop it).
  10. `<div id="map">` — full-width Google Maps `<iframe>` embed
      (400px height, Paterson City Hall embed, lazy).
  11. `<footer class="site-footer">` — `div.inner.first`
      (`background: #f8f9fa`, `padding-top: 80px`): FOUR `div.widget`
      columns — (1) col-lg-4 "About": lorem paragraph + `ul.social` (3
      round icon links: twitter / instagram / facebook); (2) col-lg-2
      pl-lg-5 "Pages": Blog / About / Contact; (3) col-lg-2 "Resources":
      Blog / About / Contact; (4) col-lg-4 "Contact": `ul.quick-info`
      — info@untree.co (email), +1 222 212 3819 (phone), 43 Raymouth
      Rd. Baltemoer, London 3910 (address). Then `div.inner.dark` bottom
      bar (NOTE: `.inner.dark` has NO background rule in style.css —
      computed style is `#f8f9fa` like the rest of the footer; do NOT
      invent a dark bar): left "Copyright © <year> All rights reserved |
      This template is made with <heart> by Colorlib" (recreation: own
      credit line linking https://www.componentdock.com/ per policy) +
      right "Terms" / "Privacy" links.
  - Preloader: `#overlayer` + `.loader` with Bootstrap `spinner-border`
    ("Loading..." visually-hidden) — the recreation may implement a simple
    fade-in instead (repo pattern), noting it in the PR.
  - JS in source: bootstrap.bundle, tiny-slider, aos, navbar.js,
    page-scroll.js, counter.js (NO counter markup exists in the DOM —
    effectively unused), glightbox.min.js, custom.js. Recreate the
    observable interactivity client-side in React: AOS fade-up/fade-left/
    fade-right reveals, glightbox lightbox on service/team images, smooth
    page scroll to anchors, burger/mobile-menu toggle, scroll-aware
    navbar. No jQuery libs.
- **Visual design (TEMPLATES.md screenshot `pageone-free-template-1.jpg`,
  1200×946, viewed in browser 2026-08-13 + live render):** clean flat
  modern agency one-pager on white with generous whitespace. Hot-pink
  `#ec1e64` accents only: the logo's period, the 50×4px heading rule,
  the "Get In Touch" button, card borders on hover, icon glyphs, link
  underlines. Huge (80px) bold dark headline, Poppins throughout. Light
  grey `#f8f9fa` alternating bands (services, features) and one dark
  `#1d1d1d` clients band. Service cards carry photos; process cards are
  bordered number chips; team cards have portrait + social circles.
- **Design tokens (CSS-verified from `css/style.css` + live computed
  styles):** body `font-family: "Poppins", sans-serif`, 14px/400,
  `color: #252837`; brand pink `#ec1e64` (39 uses) — hover `#ef407b`,
  active `#f04b83`, light shade `#f68fb2`, focus ring
  `rgba(201,26,85,.5)`; text ink `#252837`, Bootstrap dark `#212529`,
  muted `#6c757d`, grey `#888`, `text-black-50`; light band `#f8f9fa`,
  dark band `#1d1d1d`, card white `#fff`, step border `#efefef`; hero
  `background: #fff`, `padding: 12rem 0`; `h1.heading` 80px/700 (50px
  mobile); `.section` `padding: 7rem 0`; `.heading-wrap .heading` 50px/700
  `padding-left: 100px` with `::before` 50×4px `#ec1e64` bar (`top: 25px`);
  `.btn-primary` `background/border: #ec1e64`, `border-radius: 0` (sharp,
  computed), text renders WHITE on the live page (style.css declares
  `color: #000` but Bootstrap's `.btn-primary` rule wins at render —
  match the RENDERED look, verify visually), hover bg `#ef407b`; `.step`
  padding 30px, `border: 3px solid #efefef` → active/hover `#ec1e64`,
  `.number` 12px/700 `letter-spacing: .2rem` `#999`, `h3` 18px/700
  `#ec1e64`; `.service`/`.team` `h3` 20px, links underlined → hover
  `color: #ec1e64`, `.thumb:hover` `box-shadow: 15px 15px 0 0 #ec1e64`
  (signature offset shadow); `.client` bg `#fff` padding 30px, `img`
  height 40px, `h3` 18px/700 `#ec1e64`, hover `box-shadow: 0 15px 30px
rgba(0,0,0,.1)`; `.service-2` glyph 80px `#ec1e64`, `h3 a` `#ec1e64`
  underline; `.quick-contact-item` icon 80px circle `border: 2px solid
#f8f9fa` radius 50%, text 20px; `#map` 400px; `.site-footer` 14px
  `#888`, `.inner` bg `#f8f9fa`, `.inner.first` `padding-top: 80px`,
  social circles 40px, hover bg `#ec1e64` white glyph.
- **Source quirks to handle (note in PR):** clients list repeats
  "Goldline" (cards 1 & 6); team repeats "Bradley Costa" (cards 1 & 4);
  contact email literal "@info@mydomain.com" (stray "@"); "Fundrising"
  spelling; "Get In Touch"/"Learn More" buttons href="#" (dead links —
  recreation: Get In Touch → `#contact-section`, Learn More → keep as
  button/scroll); footer Contact widget shows untree.co details (swap to
  Component Dock per policy); `.inner.dark` footer bar is NOT actually
  dark (unstyled — keep light); navbar "Services" has a hover dropdown
  (recreation MAY simplify to a static link, noting it in the PR);
  counter.js is loaded but unused.
- **Icons (source → lucide/inline SVG):** flaticon-vector → PenTool
  (Illustration); flaticon-chat → MessageCircle (24/7 Support);
  flaticon-settings → Settings (Easy to use); flaticon-monitor →
  Monitor (Web development); flaticon-paper-plane → Send (Intuitive);
  flaticon-book → BookOpen (Documentation); icon-home → MapPin (address);
  icon-phone → Phone; icon-envelope → Mail; brand social glyphs
  (icomoon twitter/instagram/facebook/linkedin) → inline SVG brand icons
  (lucide-react REMOVED brand icons — never import Facebook/Instagram/
  Twitter/Linkedin from lucide; probe with `typeof` first); logo dot is
  plain text `<span>` colored `#ec1e64`.

## Requirements

### Requirement: Navbar with brand, section links and mobile menu

The system SHALL render a navbar absolutely positioned over the hero: a
brand "Vanguard." (with the period in brand pink), five section links
centered (Home, Services, Process, Clients, About) plus Contact on the
right, and a hamburger on mobile that expands the links.

#### Scenario: Navbar desktop state

- **GIVEN** the Vanguard page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** a navbar SHALL be shown at the top, overlaid on the hero
- **AND** the brand SHALL read "Vanguard." with the trailing period in
  brand pink `#ec1e64`
- **AND** the navbar SHALL contain links Home, Services, Process, Clients,
  About and Contact, each anchored to its section
- **AND** "Home" SHALL be marked as the active section
- **AND** activating a link SHALL scroll smoothly to its section

#### Scenario: Mobile menu

- **GIVEN** the Vanguard page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the page loads
- **THEN** a hamburger button SHALL be shown instead of the inline links
- **AND** activating it SHALL open a menu overlay with all six links
- **AND** the overlay SHALL close when a link is chosen or the close
  control is activated

### Requirement: Hero with large agency headline

The system SHALL render a white hero with a single huge centered headline.

#### Scenario: Hero content

- **GIVEN** the Vanguard page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL have a white background with vertical padding
  of about 12rem
- **AND** it SHALL show a single `h1` reading "We are web agency based in
  Los Angeles, CA" (paraphrase allowed, same kind of content) in bold
  dark ink at a large size (80px desktop, 50px mobile)
- **AND** the text SHALL be centered

### Requirement: Intro strip with capability links

The system SHALL render an intro section under the hero with a paragraph
and two columns of service links.

#### Scenario: Intro content

- **GIVEN** the Vanguard page is rendered
- **WHEN** the intro section is displayed
- **THEN** a paragraph SHALL be shown with a bold lead-in phrase
- **AND** two link lists SHALL be shown side by side: Technology /
  Marketing / Product & Design and Strategic Consulting / Business
  Synergies / Fundraising
- **AND** the links SHALL be underlined, turning pink `#ec1e64` on hover

### Requirement: Services section with four photo cards

The system SHALL render a light-grey services band with a heading rule,
intro copy, a "Get In Touch" button and four photo cards in a 2×2 grid.

#### Scenario: Services layout

- **GIVEN** the Vanguard page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL have a light grey `#f8f9fa` background
- **AND** the "Services" heading SHALL be preceded by a 50×4px brand-pink
  rule on its left
- **AND** a "Get In Touch" button SHALL be shown, linking to the contact
  section
- **AND** four service cards SHALL be shown in a 2-column grid, each with
  an image, a title and a paragraph: Graphic Design, Web Development,
  Branding, Iconography
- **AND** hovering a card image SHALL reveal a 15px offset brand-pink
  shadow (`15px 15px 0 0 #ec1e64`)
- **AND** activating a card image SHALL open it in a lightbox

### Requirement: Process section with six numbered steps

The system SHALL render a process section with a heading, a "Learn More"
button, a "Scroll down" link and six bordered step cards in a 3×2 grid.

#### Scenario: Process steps

- **GIVEN** the Vanguard page is rendered
- **WHEN** the process section is displayed
- **THEN** the six steps SHALL be shown in order with numbers 01–06 and
  titles Information Gathering, Planning, Design, Development, Testing
  and Delivery, Maintenance
- **AND** each card SHALL have a 3px light-grey `#efefef` border
- **AND** the first card SHALL be marked active with a 3px brand-pink
  `#ec1e64` border, as SHALL any card on hover
- **AND** the step number SHALL be small, bold, letter-spaced and grey,
  and the step title SHALL be brand-pink

### Requirement: Clients section on dark band

The system SHALL render a dark `#1d1d1d` clients band with a white
heading and six white client cards in a 2×3 grid.

#### Scenario: Client cards

- **GIVEN** the Vanguard page is rendered
- **WHEN** the clients section is displayed
- **THEN** the section SHALL have a dark `#1d1d1d` background
- **AND** the "Our clients" heading SHALL be white
- **AND** six client cards SHALL be shown with a client name (Goldline,
  Foxhub, Ideaa, Nirastate, Treva, + one more — the source repeats
  Goldline; the recreation MAY vary the last name) and a paragraph
- **AND** each card SHALL be white with the client name in brand pink
- **AND** hovering a card SHALL raise it with a soft shadow
  (`0 15px 30px rgba(0,0,0,.1)`)

### Requirement: Features section with six icon items

The system SHALL render a light-grey features band with six icon+title
items in a 2×3 grid.

#### Scenario: Feature items

- **GIVEN** the Vanguard page is rendered
- **WHEN** the features section is displayed
- **THEN** six feature items SHALL be shown: Illustration, 24/7 Support,
  Easy to use, Web development, Intuitive, Documentation
- **AND** each SHALL have a large (80px) brand-pink icon above an
  underlined brand-pink title link and a paragraph

### Requirement: Office and team section

The system SHALL render an "Office and team" section with an office photo

- "Our Office" copy split, then a heading and four team cards.

#### Scenario: Office split

- **GIVEN** the Vanguard page is rendered
- **WHEN** the office-and-team section is displayed
- **THEN** the "Office and team" heading SHALL be shown
- **AND** a large office image SHALL be shown on the left with an "Our
  Office" subheading and two or three paragraphs on the right

#### Scenario: Team cards

- **GIVEN** the Vanguard page is rendered
- **WHEN** the team grid is displayed
- **THEN** an "Our Team" subheading SHALL be shown
- **AND** four team cards SHALL be shown in a 4-column row, each with a
  portrait, a name link, a role line, a short bio and four social icon
  links (instagram, twitter, facebook, linkedin)
- **AND** members SHALL be Bradley Costa — CEO, Partner; Chanice Muir —
  CTO, Partner; Alisha Ellison — Web Designer; and one more (the source
  repeats Bradley Costa — the recreation MAY vary the 4th name)
- **AND** hovering a portrait SHALL reveal the 15px offset brand-pink
  shadow

### Requirement: Contact section with form and quick contact

The system SHALL render a contact section with a form (first name, last
name, email, message, submit) and three quick-contact rows with circular
icons.

#### Scenario: Contact form

- **GIVEN** the Vanguard page is rendered
- **WHEN** the contact section is displayed
- **THEN** a "Contact Us" heading SHALL be shown
- **AND** a form SHALL be shown with labelled fields First name, Last
  name, Email address and Message, and a "Send Message" submit button
- **AND** submitting the form SHALL NOT reload the page (client-side
  handling — success state per repo pattern)

#### Scenario: Quick contact rows

- **GIVEN** the Vanguard page is rendered
- **WHEN** the contact section is displayed
- **THEN** three quick-contact rows SHALL be shown, each with an 80px
  circular icon (thin light border) and 20px text: the office address,
  a phone number and an email address
- **AND** the email SHALL NOT carry the source's stray "@" prefix

### Requirement: Map embed

The system SHALL render a full-width map below the contact section.

#### Scenario: Map

- **GIVEN** the Vanguard page is rendered
- **WHEN** the page is scrolled past the contact section
- **THEN** a 400px-tall full-width map embed SHALL be shown (Google Maps
  iframe or equivalent)

### Requirement: Footer with four widgets and copyright bar

The system SHALL render a light footer with four widget columns and a
copyright bar with Terms/Privacy links.

#### Scenario: Footer content

- **GIVEN** the Vanguard page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a light `#f8f9fa` background and small
  grey text
- **AND** it SHALL show four columns: About (paragraph + three social
  icon links), Pages (Blog/About/Contact), Resources (Blog/About/
  Contact), Contact (email, phone, address)
- **AND** the bottom bar SHALL show a copyright line crediting
  https://www.componentdock.com/ ("Component Dock") and Terms/Privacy
  links on the right
- **AND** the footer SHALL NOT reference ColorLib or the source name

## Verification checklist

- [ ] `openspec/specs/template-vanguard/spec.md` validates with
      `npm run spec:validate`
- [ ] All Gherkin scenarios above map 1:1 to tests in
      `apps/vanguard/src/__tests__/`
- [ ] Brand pink `#ec1e64` in `@theme` (`--color-brand`), used via
      Tailwind classes; no raw hex scattered in components
- [ ] Poppins loaded via Google Fonts `<link>` in `index.html` (400/500/
      600/700)
- [ ] Section order matches the source 1:1: navbar → hero → intro →
      services → process → clients → features → office & team → contact →
      map → footer
- [ ] Light `#f8f9fa` bands on services + features; dark `#1d1d1d` on
      clients; hero and process on white
- [ ] Buttons sharp-cornered (`rounded-none`), pink bg, rendered white
      text (match live render, not the source CSS's declared `#000`)
- [ ] Hover offset shadow `15px 15px 0 0 #ec1e64` on service/team thumbs
- [ ] No ColorLib/Pageone strings in app code (provenance only in this
      spec + TEMPLATES.md + PR)
- [ ] Footer links https://www.componentdock.com/
- [ ] Placeholder images via `https://picsum.photos/seed/vanguard-<n>/<w>/<h>`;
      team portraits prefer verified picsum person IDs 1027, 64, 823, 996
      (skill note: probe before pinning)
- [ ] No copied assets; lucide icons probed with `typeof` (no brand
      icons from lucide — inline SVGs for social)
- [ ] `scripts/verify-app.sh vanguard` green (typecheck + lint + 100%
      coverage + build) before PR
- [ ] PR description includes: source template, preview URL, design
      tokens, renames/placeholder notes, and the source quirks handled
      (duplicate client/team names, stray "@", dead button hrefs,
      unstyled `.inner.dark`)
- [ ] Bookkeeping: mark ALL THREE TEMPLATES.md rows (614, 1122, 2350)
      `[x]` with `vanguard.free.componentdock.com` + `npm run
    readme:status`, push

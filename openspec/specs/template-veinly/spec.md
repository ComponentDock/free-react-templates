# Template: Veinly (Bootstrap / Mining Company)

## Purpose

Veinly is a single-page mining-company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Miners" website template (source:
https://colorlib.com/wp/template/miners/), built under a DIFFERENT name
(Veinly — a mineral vein is where miners dig, a semantic echo of the source
name without reusing it; single lowercase word, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-11) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-11): the live preview
> `https://preview.colorlib.com/theme/miners/` is REACHABLE (curl verified,
> HTTP 200, ~30 KB HTML, page title "Miners &mdash; Colorlib Website
> Template") and was analyzed for this prep; `css/style.css` (~22 KB) plus
> the customized `css/bootstrap.min.css` (~30 KB) were fetched and
> token-extracted. The TEMPLATES.md screenshot (`miners-free-template.jpg`,
> 1200×946, viewed in browser) matches the live DOM section-for-section
> (dark mine-shaft hero photo, coral brand, white sections).

## Design reference (replication findings)

- **Original:** ColorLib "Miners" — page title "Miners &mdash; Colorlib
  Website Template". TEMPLATES.md category: **Bootstrap (216)**, first
  occurrence at line 453 (`- [ ]`, NOT shipped anywhere). DUP-ROW TRAP
  (see replication skill): the `miners` slug ALSO appears at lines 1099
  (Business 365), 1350 (Construction 29) and 2341 (One Page 91) — all
  `- [ ]` rows of the SAME template; one prep + one implementation covers
  all four rows. The recreation brands itself **Veinly** but keeps the same
  section structure, copy kinds and token palette.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/miners/` (HTTP 200, ~30 KB). Corporate
  mining landing page, `div.site-wrap` > sticky header + 8 section divs +
  footer + one quote modal:
  1. `div.site-mobile-menu.site-navbar-target` — **off-canvas mobile menu**
     (header with close toggler `icon-close2` + `.site-mobile-menu-body`
     filled at runtime by JS cloning `ul.js-clone-nav`): the 7 nav links.
  2. `header.site-navbar.js-sticky-header` — **sticky top navbar**
     (`padding: 1rem`, z-index 1999; sticky state → white bg + shadow
     `4px 0 20px -5px rgba(0,0,0,0.2)`, logo turns coral `#dd6b4d`):
     brand `a.site-logo` (uppercase, 1.2rem, weight 900, line-height 0)
     "Miners" wrapped in `span.text-primary` (coral); centered `nav.site-
navigation` with `ul.site-menu.main-menu.js-clone-nav.ml-auto
.d-none.d-lg-block` — 7 anchor links (Home → #home-section, Investors
     → #investors-section, About Us → #about-section, Press →
     #press-section, Testimonials → #testimonials-section, Blog →
     #blog-section, Contact → #contact-section; `color: #000 !important`,
     `border-bottom: 2px solid transparent`, hover + active coral
     `#dd6b4d`, margin 0 15px, padding 20px 0); right `div.toggle-button`:
     solid coral **"Get Quote"** `a.btn.btn-primary` (data-toggle modal →
     #exampleModal, shown on all viewports) + hamburger
     `a.site-menu-toggle.js-menu-toggle` (`span.icon-menu.h3`, `d-lg-none`).
  3. `div#home-section` — **hero slider** (`div.owl-carousel.slide-one-
item`, 2 slides): each slide `div.site-section-cover.overlay.img-bg-
section` (bg image `images/hero_1.jpg` / `images/hero_2.jpg`,
     `background-size: cover`; `:before` overlay `rgba(0,0,0,0.7)`; row
     height 100vh, min-height 700px — ≤991px 70vh/400px): content
     `col-md-12 col-lg-7` — `h1` "Best Miners In The World" (4.5rem, white,
     line-height 1; 2rem ≤991px), lorem `p` (18px, `#999999`, max-width
     400px), and a coral-outline **"Get in touch"** button
     `a.btn.btn-outline-primary.border-w-2.btn-md`. Slider chrome:
     `.owl-nav` prev/next arrows absolute left/right 20px, 2rem,
     `rgba(255,255,255,0.4)` → `#fff` hover; `.owl-dots` centered at
     bottom -30px.
  4. `div.site-section.block__73694#investors-section` — **Investors**
     (white bg; `div.container-fluid` > `div.row.d-flex.no-gutters.
align-items-stretch`): TWO image tiles `div.col-6.col-lg-3.block__73422`
     (inline `background-image: url('images/hero_2.jpg')` /
     `url('images/hero_1.jpg')`; bg cover/center, `background-attachment:
fixed`; ≤991px height 400px) + right content `div.col-lg-6.p-lg-5.mt-4.
mt-lg-0`: `h2` "Our Investors" (block-heading-1, 3rem coral), lorem
     paragraph, and an outline **"Get in touch"** button
     (`btn-outline-primary.border-w-2.btn-md`).
  5. `div.site-section.bg-primary#about-section` — **About / stats band on
     the CORAL background** (`bg-primary` = `#dd6b4d`): `div.row.justify-
content-center.mb-4.block-img-video-1-wrap` > `div.col-md-12.mb-5` >
     `figure.block-img-video-1` (`margin-top: -10rem` — pulls the video
     block up to overlap the section above; `data-aos="fade"`):
     `a.popup-vimeo` → `https://vimeo.com/45830194` with `span.icon` play
     circle over `img.img-fluid src=images/hero_1.jpg`; below, FOUR
     `div.block-counter-1` (`col-md-6.mb-4.col-lg-0.col-lg-3`): `span.number`
     white 4rem with `span[data-number]` (15 / 392 / 39332 / 53500 —
     animated count-up in source, render final value) + `span.caption`
     (block, line-height 1, white): "Year of Experience" / "Number of
     Engineers" / "Number of Employees" / "Number of Golds".
  6. `div.site-section#team-section` — **Team** (white bg): `div.block-
heading-1` "Our Leadership" (eyebrow span + h2, see tokens) + THREE
     `div.block-team-member-1.text-center.rounded` cards (`col-lg-4.col-md-6.
mb-4.mb-lg-0`): `padding: 30px`, `border: 1px solid #e9ecef`, rounded;
     `img` photo (`images/person_1.jpg` / `person_2.jpg` / `person_3.jpg`),
     `h3` name (Jean Smith / Bob Carry / Ricky Fisher), role line (Mining
     Expert / Project Manager / Engineer), lorem paragraph, and
     `div.block-social-1` social icon links (icomoon: facebook / twitter /
     instagram / linkedin).

  7. `div.site-section#press-section` — **Press** (white bg): left
     `div.col-lg-4.mb-5.mb-lg-0` > `div.block-heading-1`: eyebrow `span`
     "Press Releases" + `h2` "Press"; right `div.col-lg-8` >
     `ul.list-unstyled` with THREE `li.mb-4` press items: `h2.h4` title
     link (black, hover coral) "How To Invest In Mining Industry" (→
     `press-single.html`), `span.d-block.text-secondary` date "Apr 19,
     2019", lorem excerpt paragraph.
  8. `div.site-section.bg-light.block-13#testimonials-section` — **Testi-
     monials** (`bg-light` = `#f8f9fa`): centered `div.block-heading-1`
     eyebrow "Testimonial" + h2; `div.owl-carousel.nonloop-block-13` with
     FOUR `div.block-testimony-1.text-center` slides: `blockquote` (white
     bg, padding 30px, italic 18px, `#000`, font-family Georgia/serif —
     lorem quote), `img` avatar (`images/person_4.jpg` / `person_2.jpg` /
     `person_1.jpg` / `person_3.jpg`) and name (Ricky Fisher / Ken Davis /
     Mellisa Griffin / Robert Steward).
  9. `div.site-section#blog-section` — **Blog** (white bg): centered
     `div.block-heading-1` "Our Blog"; TWO `div.col-lg-6` post cards:
     `img.img-fluid` (`images/hero_2.jpg` / `images/hero_3.jpg`), `h2`
     title link "How to Invest In Mining Industry", meta line "January 18,
     2019 By James Cooper", lorem excerpt, "Read More" link.
  10. `div.site-section.bg-light#contact-section` — **Contact** (`#f8f9fa`):
      centered `div.block-heading-1` "Contact Us"; `div.row` > left
      `div.col-lg-6.mb-5` — `form`: `div.form-group.row` pairs (2×
      `col-md-6` inputs) then 2× `col-md-12` fields: `input.form-control`
      placeholders "First name" / "First name" (SOURCE BUG — second should
      be "Last name"; recreation uses First name + Last name), "Email
      address", `textarea.form-control` "Write your message." (rows 10),
      submit `input.btn.btn-block.btn-primary.text-white.py-3.px-5` value
      "Send Message"; right `div.col-lg-4.ml-auto` — `h3`/block-heading
      "Need to know more on details? Call Us +1 392 3929 482" + lorem
      paragraph.
  11. `footer.site-footer` — **Footer, dark `#333333`** (padding 4em 0):
      `div.col-md-6` "About Us" heading + lorem paragraph; inner
      `div.col-md-8` → `div.col-md-4.ml-auto` "Features" (`ul.list-unstyled`
      links: About Us / Press Releases / Testimonials / Terms of Service /
      Privacy / Contact Us — links `#999999`); `div.col-md-4.ml-auto.mb-5`
      "Subscribe to Newsletter" (`div.input-group.mb-3`: `input.form-
control` + `div.input-group-append` > `button` "Subscribe") and
      "Follow Us" (`div.block-social-1`: icomoon facebook / twitter /
      instagram / linkedin / heart); footer headings 16px white; bottom
      `div.row.pt-5.mt-5.text-center` > `div.col-md-12` > `div.border-top.
pt-5` (border `rgba(255,255,255,0.1)`): copyright line "Copyright
      © <year> All rights reserved | This template is made with ♥ by
      Colorlib" (recreation: own credit line, no Colorlib link).
  12. `div.modal.fade#exampleModal` — **Get A Quote modal** (triggered by
      navbar "Get Quote" button): `div.modal-dialog.modal-dialog-centered.
modal-lg` > `div.modal-content` > `div.modal-header` (`h5.modal-title`
      "Get A Quote" + `button.close` × close) > `div.modal-body.p-5` —
      same form as contact (First name / Last name / Email address /
      "Write your message." + "Send Message" submit).
- **Visual design (TEMPLATES.md screenshot `miners-free-template.jpg`,
  1200×946, viewed in browser 2026-08-11 + live DOM):** industrial corporate
  landing. Dark moody hero photo (underground mine shaft with wooden
  supports and stairs descending, deep browns/blacks) with `rgba(0,0,0,0.7)`
  overlay, LEFT-aligned large bold white headline "Best Miners In The
  World", lighter lorem line, coral-outline "Get in touch" button, hero
  slider arrows + pagination dots. Top navbar: "MINERS" logo (coral), menu
  links, solid coral "Get Quote" button far right. Below: white Investors
  section (two mineral/rock-texture photo tiles left, "Our Investors"
  heading + text + outline button right), CORAL `#dd6b4d` stats band (video
  block with play button overlapping from above + four big white counters),
  white team row (3 bordered cards with headshots + social icons), white
  press row (heading + 3 article lines), light-grey testimonials carousel
  (white quote cards), white blog row (2 image cards), light-grey contact
  row (form + "Call Us" info), dark `#333333` footer (About Us / Features /
  Newsletter / Follow Us + copyright bar). Signature **coral `#dd6b4d`**
  accent on white/light-grey neutrals; Nunito geometric sans-serif; slight
  4px button rounding (Bootstrap .btn).
- **Section order (1:1, verified from live DOM):** off-canvas mobile menu →
  sticky navbar (coral brand, 7 anchor links, solid coral "Get Quote"
  button, hamburger on mobile) → hero slider (2 slides: bg photo + dark
  overlay, left-aligned h1 + lorem + coral-outline "Get in touch") →
  Investors (2 image tiles + "Our Investors" content with outline button) →
  About/stats on coral bg (video block pulled up with play button + 4
  counters 15/392/39332/53500) → Team ("Our Leadership", 3 bordered
  rounded cards + social icons) → Press ("Press Releases" eyebrow, 3
  article items) → Testimonials (bg-light, carousel of 4 white quote
  cards) → Blog ("Our Blog", 2 image post cards) → Contact (bg-light,
  form + "Call Us" info) → footer (#333333, About Us / Features /
  Newsletter + Follow Us / copyright bar) → quote modal.

- **Design tokens extracted from the live CSS (`css/style.css` +
  `css/bootstrap.min.css`, verified 2026-08-11):**
  - Brand coral: **`#dd6b4d`** — customized Bootstrap `.btn-primary`
    (`background-color: #dd6b4d; border-color: #dd6b4d; color: #fff`),
    `.btn-outline-primary` (coral text + border, transparent bg),
    `.bg-primary` (`background-color: #dd6b4d!important` — the About/stats
    band), `.text-primary` (logo span), `block-heading-1 h2` (3rem coral),
    nav link hover + active, sticky navbar logo.
  - Buttons: Bootstrap `.btn` base — **`border-radius: 0.25rem` (4px)**,
    padding `.375rem .75rem`, no transition (source sets `transition:
none`); `.btn-md` padding `8px 20px`; solid variant `.btn-primary`
    (coral bg, white text — navbar "Get Quote", form submits); outline
    variant `.btn-outline-primary.border-w-2` (2px coral border, coral
    text — hero + investors "Get in touch"); contact/modal submits
    `.btn-block.py-3.px-5`.
  - Section backgrounds: default white; `bg-light` = **`#f8f9fa`**
    (standard Bootstrap, NOT customized — testimonials + contact); the
    stats band = `bg-primary` **`#dd6b4d`** (coral); footer **`#333333`**;
    hero overlay `rgba(0,0,0,0.7)`.
  - Body: font **Nunito** (`"Nunito", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ...`; Google
    Fonts link), `color: #939393` (light grey body text), 1rem. Testimonial
    quotes use `'Georgia', Times, serif` italic — the ONLY serif usage.
  - Headings: `block-heading-1` — eyebrow `span` uppercase 12px,
    letter-spacing .1em, bold, color `#b8b8b8`; `h2` 3rem coral `#dd6b4d`
    (white headings on the coral band / dark footer). Section heading
    wrapper is `div.text-center.mb-5` for testimonials/blog/contact.
  - Hero: `.site-section-cover` rows 100vh / min-height 700px (≤991px:
    70vh / 400px); `h1` 4.5rem white line-height 1 (2rem ≤991px); `p` 18px
    `#999999`, max-width 400px; slides are `img-bg-section` (bg cover,
    no-repeat) + `:before` overlay `rgba(0,0,0,0.7)`; slide-one-item nav
    arrows 2rem `rgba(255,255,255,0.4)` → `#fff` hover, absolute left/right
    20px; dots centered `bottom: -30px`.
  - Navbar: `padding: 1rem`; brand `a.site-logo` 1.2rem uppercase weight
    900 line-height 0 with coral `text-primary` span; desktop links
    `color: #000 !important`, hover coral, margin 0 15px, padding 20px 0,
    `border-bottom: 2px solid transparent` (active/hover underlines coral);
    sticky state (`.sticky-wrapper.is-sticky`): `background: #fff` +
    shadow `4px 0 20px -5px rgba(0,0,0,0.2)`, brand link `#dd6b4d`.
  - Investors tiles: `.block__73422` bg cover/center, `background-attach-
ment: fixed`, no-repeat; ≤991px height 400px.
  - Stats band: `.block-img-video-1` `margin-top: -10rem` (overlap pull-
    up), popup-vimeo play `span.icon` circle over the image; `.block-
counter-1 .number` 4rem white, padding-bottom 20px, margin-bottom 20px;
    `.caption` display block, line-height 1.
  - Cards: `.block-team-member-1` padding 30px, `border: 1px solid
#e9ecef`, rounded; `.block-testimony-1` padding 20px, `blockquote`
    white bg, padding 30px, italic 18px, `#000`, Georgia serif.
  - Footer: `#333333` bg, padding 4em 0; headings 16px white; links
    `#999999`; bottom bar `border-top: 1px solid rgba(255,255,255,0.1)`;
    newsletter `div.input-group.mb-3` (input + appended button).
  - Section padding: `.site-section` 7rem 0.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap/owl-carousel/magnific-popup dependency). The navbar is
  a fixed/sticky top bar (transparent over the hero) with the coral brand
  left, 7 anchor links (Home/Investors/About Us/Press/Testimonials/Blog/
  Contact), a solid coral "Get Quote" button right that opens the quote
  modal, and a hamburger that opens the off-canvas mobile menu; on scroll
  it turns white with a shadow and the brand turns coral. The hero is a
  2-slide slider (auto-advance optional; prev/next arrows + dots) — each
  slide a bg photo + `rgba(0,0,0,0.7)` overlay, left-aligned h1 + lorem +
  coral-outline "Get in touch" (link to #contact-section — source links to
  `#`). Investors = 2 image tiles + "Our Investors" content with outline
  button. The stats band sits on the CORAL `#dd6b4d` background with the
  video block (image + circular play button, `aria-label="Play video"`,
  may link to the source Vimeo URL or be inert — no embed needed) pulled up
  to overlap and 4 counters rendering FINAL values statically (15 / 392 /
  39332 / 53500; source count-up animation optional, fake-timer-safe).
  Team = 3 bordered rounded cards (photo, name, role, blurb, social icon
  row). Press = heading + 3 article items. Testimonials = static 4-column
  grid of white quote cards (NOT a carousel — source renders 4 slides in an
  owl loop; static grid is the documented simplification, or a simple
  carousel if desired). Blog = 2 image post cards. Contact = form (First
  name / Last name / Email address / message + "Send Message" solid coral
  submit — fix the source's duplicated "First name" placeholder) + "Call
  Us +1 392 3929 482" info column. Footer = dark `#333333` with About Us /
  Features links / Newsletter (email input + Subscribe button) / Follow Us
  socials + copyright bar (own credit line, no Colorlib link). The "Get A
  Quote" modal (navbar trigger) reuses the contact form. Placeholder
  images `picsum.photos/seed/veinly-<n>/<w>/<h>` (hero ×2 with dark
  mine-adjacent seeds, investors tiles ×2, video block, team ×3,
  testimonials ×4, blog ×2); icons via `lucide-react` (menu, close, play,
  chevrons, socials as inline SVG brand icons — lucide-react removed brand
  icons); document title "Veinly — Mining Company Template"; brand
  "Miners" → "Veinly" everywhere; nav labels and copy kinds kept 1:1,
  Lorem text may be paraphrased.

Veinly lives in `apps/veinly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Sticky navbar with brand, anchor links, Get Quote button and mobile menu

The system SHALL render a sticky top navbar with the brand "Veinly" on the
left, seven anchor links (Home, Investors, About Us, Press, Testimonials,
Blog, Contact), a solid coral "Get Quote" button on the right, and a
hamburger toggler on mobile that opens an off-canvas menu with the same
links. When the page is scrolled, the navbar SHALL switch to a solid white
background with a subtle shadow and the brand SHALL turn coral `#dd6b4d`.

#### Scenario: Navbar default state

- **GIVEN** the Veinly page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** a top navbar SHALL be shown with the brand "Veinly" in
  uppercase bold type with a coral `#dd6b4d` accent
- **AND** the seven links Home, Investors, About Us, Press, Testimonials,
  Blog and Contact SHALL be listed, each anchoring to its section
  (`#home-section`, `#investors-section`, `#about-section`,
  `#press-section`, `#testimonials-section`, `#blog-section`,
  `#contact-section`)
- **AND** a solid coral "Get Quote" button SHALL be shown on the right
- **AND** the navbar SHALL be transparent over the hero (white brand on
  the dark hero)

#### Scenario: Sticky scrolled navbar

- **GIVEN** the user scrolls the page down
- **WHEN** the navbar enters the sticky state
- **THEN** the navbar SHALL get a solid white background and a subtle
  shadow (source `4px 0 20px -5px rgba(0,0,0,0.2)`)
- **AND** the brand SHALL turn coral `#dd6b4d`
- **AND** link hover/active SHALL underline in coral `#dd6b4d`

#### Scenario: Off-canvas mobile menu

- **GIVEN** the Veinly page is rendered on a mobile viewport
- **WHEN** the user activates the hamburger toggler
- **THEN** an off-canvas menu SHALL open listing the seven nav links
- **AND** the menu SHALL contain a close control
- **AND** activating the close control or a link SHALL close the menu

#### Scenario: Get Quote opens the quote modal

- **GIVEN** the navbar "Get Quote" button is visible
- **WHEN** the user activates it
- **THEN** a "Get A Quote" modal SHALL open containing a quote-request
  form (First name, Last name, Email address, message, "Send Message"
  submit)

### Requirement: Full-height hero slider with two photo slides

The system SHALL render a hero slider with two slides; each slide SHALL
show a full-viewport-height photo background darkened by a
`rgba(0,0,0,0.7)` overlay, a left-aligned white headline "The Best
Veinly Miners In The World" (or equivalent paraphrase keeping the "Best …
In The World" pattern), a short paragraph, and a coral-outline "Get in
touch" button. Prev/next arrows and pagination dots SHALL navigate the
slides.

#### Scenario: Hero slide content

- **GIVEN** the Veinly page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL span near the full viewport height (source
  rows 100vh, min-height 700px; 70vh/400px on mobile)
- **AND** each slide SHALL use a background photo with a dark
  `rgba(0,0,0,0.7)` overlay
- **AND** a left-aligned headline SHALL read "Best … In The World" in
  large bold white type (source 4.5rem, line-height 1; 2rem on mobile)
- **AND** a supporting paragraph SHALL follow in light grey (source 18px,
  `#999999`, max-width 400px)
- **AND** a "Get in touch" button SHALL be shown, styled as a coral
  outline button (2px `#dd6b4d` border, coral text, transparent
  background) linking to `#contact-section`

#### Scenario: Slider navigation

- **GIVEN** the hero slider has two slides
- **WHEN** the user activates a prev/next arrow or a pagination dot
- **THEN** the hero SHALL switch to the other slide (the first slide is
  active on load)

### Requirement: Investors section with image tiles and content

The system SHALL render an Investors section with two background-photo
tiles on the left and a right content column headed "Our Investors" with a
paragraph and a coral-outline "Get in touch" button.

#### Scenario: Investors layout

- **GIVEN** the Veinly page is rendered
- **WHEN** the investors section is displayed
- **THEN** the section SHALL show two photo tiles side by side on the
  left (2-up grid on desktop, full-width stacked on mobile)
- **AND** the right column SHALL show the heading "Our Investors" (3rem
  coral block-heading-1 style)
- **AND** a short paragraph SHALL follow
- **AND** a "Get in touch" button SHALL be shown, styled as a coral
  outline button like the hero CTA

### Requirement: Coral stats band with video block and four counters

The system SHALL render a stats band on the coral `#dd6b4d` background
with a video block (photo + circular play button) pulled up to overlap the
section above, and four counters: 15 Year of Experience, 392 Number of
Engineers, 39332 Number of Employees, 53500 Number of Golds.

#### Scenario: Video block

- **GIVEN** the Veinly page is rendered
- **WHEN** the stats band is displayed
- **THEN** a photo with a centered circular play button SHALL be shown at
  the top of the band (source `margin-top: -10rem` overlap)
- **AND** the play button SHALL be keyboard-accessible
  (`aria-label="Play video"`) and inert or linked to a placeholder video
  URL (no embed required)

#### Scenario: Counter stats

- **GIVEN** the stats band is displayed
- **WHEN** the counter row renders
- **THEN** four counters SHALL be shown side by side on desktop (2-up on
  tablet)
- **AND** each counter SHALL show a large white number (15, 392, 39332,
  53500 — final values, source animates via JS) and a white caption
  (Year of Experience, Number of Engineers, Number of Employees, Number
  of Golds)

### Requirement: Team section with three member cards

The system SHALL render a Team section headed "Our Leadership" with three
bordered rounded cards, each with a photo, name, role, short blurb and a
row of social icons.

#### Scenario: Team cards

- **GIVEN** the Veinly page is rendered
- **WHEN** the team section is displayed
- **THEN** the heading SHALL read "Our Leadership" (block-heading-1
  style with coral h2)
- **AND** three cards SHALL be shown side by side on desktop (2-up +
  stacked on smaller screens)
- **AND** each card SHALL show a photo, a name (e.g. Jean Smith, Bob
  Carry, Ricky Fisher), a role (e.g. Mining Expert, Project Manager,
  Engineer), a short blurb and a row of social icon links
- **AND** each card SHALL have a 1px `#e9ecef` border and rounded corners
  (source padding 30px)

### Requirement: Press section with three article items

The system SHALL render a Press section with an eyebrow "Press Releases"
and heading "Press", followed by three article items, each with a title
link, a date and an excerpt.

#### Scenario: Press items

- **GIVEN** the Veinly page is rendered
- **WHEN** the press section is displayed
- **THEN** the eyebrow SHALL read "Press Releases" (uppercase 12px,
  letter-spaced, light grey) above a coral 3rem heading "Press"
- **AND** three items SHALL be listed, each with a title link (e.g. "How
  To Invest In Mining Industry"), a date line (e.g. "Apr 19, 2019") and a
  short excerpt

### Requirement: Testimonials section with four quote cards

The system SHALL render a light `#f8f9fa` testimonials section with the
heading "Testimonial" and four quote cards, each with a white italic
serif quote, an avatar photo and a name.

#### Scenario: Testimonial cards

- **GIVEN** the Veinly page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL use the light `#f8f9fa` background
- **AND** the centered heading SHALL read "Testimonial"
- **AND** four quote cards SHALL be shown (4-up on desktop, 2-up on
  tablet, stacked on mobile)
- **AND** each card SHALL show a white quote box with italic serif text
  (source: Georgia, 18px, `#000`, white bg padding 30px), an avatar photo
  and a name (e.g. Ricky Fisher, Ken Davis, Mellisa Griffin, Robert
  Steward)

### Requirement: Blog section with two post cards

The system SHALL render a Blog section headed "Our Blog" with two post
cards, each with an image, a title link, a meta line and an excerpt.

#### Scenario: Blog cards

- **GIVEN** the Veinly page is rendered
- **WHEN** the blog section is displayed
- **THEN** the centered heading SHALL read "Our Blog"
- **AND** two post cards SHALL be shown side by side on desktop
- **AND** each card SHALL show an image, a title link (e.g. "How to
  Invest In Mining Industry"), a meta line (e.g. "January 18, 2019 By
  James Cooper"), an excerpt and a "Read More" link

### Requirement: Contact section with form and call info

The system SHALL render a light `#f8f9fa` contact section headed "Contact
Us" with a contact form (First name, Last name, Email address, message
and a solid coral "Send Message" submit) and a right info column with a
phone line "Need to know more on details? Call Us +1 392 3929 482" and a
short paragraph.

#### Scenario: Contact form

- **GIVEN** the Veinly page is rendered
- **WHEN** the contact section is displayed
- **THEN** the section SHALL use the light `#f8f9fa` background
- **AND** the centered heading SHALL read "Contact Us"
- **AND** the form SHALL contain First name and Last name fields side by
  side (the source duplicates "First name" — the recreation fixes it to
  First name + Last name), an Email address field, a message textarea and
  a solid coral "Send Message" submit button
- **AND** the info column SHALL show the "Call Us +1 392 3929 482" phone
  line and a short paragraph

### Requirement: Dark footer with four widget columns

The system SHALL render a dark `#333333` footer with an "About Us" text
column, a "Features" link list, a "Subscribe to Newsletter" form and a
"Follow Us" social row, plus a bottom copyright bar.

#### Scenario: Footer content

- **GIVEN** the Veinly page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL use the dark `#333333` background with white
  16px widget headings
- **AND** column one SHALL be headed "About Us" with a short paragraph
- **AND** column two SHALL be headed "Features" listing About Us, Press
  Releases, Testimonials, Terms of Service, Privacy and Contact Us
- **AND** column three SHALL show a "Subscribe to Newsletter" form with an
  email input and a "Subscribe" button, plus a "Follow Us" row of social
  icon links (e.g. Facebook, Twitter, Instagram, LinkedIn)
- **AND** a bottom bar SHALL show the copyright line with the recreation
  credit (no Colorlib link)

### Requirement: Get A Quote modal

The system SHALL render a "Get A Quote" modal, opened by the navbar "Get
Quote" button, containing a quote-request form with the same fields as the
contact form and a "Send Message" submit.

#### Scenario: Modal opens and closes

- **GIVEN** the Veinly page is rendered
- **WHEN** the user activates the navbar "Get Quote" button
- **THEN** a modal titled "Get A Quote" SHALL open with a quote-request
  form (First name, Last name, Email address, message, "Send Message"
  submit)
- **AND** the modal SHALL contain a close control
- **AND** activating the close control SHALL close the modal

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-veinly`
- [ ] `scripts/verify-app.sh veinly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with the source): sticky navbar (coral
      "Veinly" brand, 7 anchor links, solid coral "Get Quote" button,
      hamburger → off-canvas menu; sticky white + shadow + coral brand on
      scroll) → hero slider (2 slides, bg photo + `rgba(0,0,0,0.7)`
      overlay, left-aligned "Best … In The World" h1 4.5rem white,
      lorem line 18px `#999999`, coral-outline "Get in touch" →
      #contact-section, arrows + dots) → Investors (2 photo tiles +
      "Our Investors" 3rem coral heading + paragraph + outline button) →
      stats band on coral `#dd6b4d` (video block with circular play
      button overlapping up + 4 white counters 15 / 392 / 39332 / 53500
      with captions) → Team ("Our Leadership", 3 bordered rounded cards:
      photo, name, role, blurb, social row) → Press ("Press Releases"
      eyebrow + "Press" h2 + 3 title/date/excerpt items) → Testimonials
      (`#f8f9fa` bg, "Testimonial" heading, 4 white italic serif quote
      cards with avatar + name) → Blog ("Our Blog", 2 image post cards
      with meta + "Read More") → Contact (`#f8f9fa` bg, "Contact Us",
      form First/Last name + Email + message + solid coral "Send Message",
      "Call Us +1 392 3929 482" info column) → footer `#333333` (About
      Us / Features / Subscribe to Newsletter + Follow Us / copyright
      bar) → "Get A Quote" modal
- [ ] Brand color `#dd6b4d` (coral) in `@theme` and used via Tailwind
      classes: solid buttons ("Get Quote", "Send Message"), outline
      buttons ("Get in touch" — 2px border), stats band background,
      block-heading h2 color, nav hover/active underline, sticky brand
- [ ] Section backgrounds: white default; `#f8f9fa` testimonials +
      contact; coral `#dd6b4d` stats band; footer `#333333`; hero overlay
      `rgba(0,0,0,0.7)`
- [ ] Nunito via Google Fonts `<link>` in `index.html` (body color
      `#939393`); testimonial quotes in Georgia/serif italic
- [ ] Buttons: Bootstrap-style slight rounding (`border-radius: 0.25rem`),
      solid coral primary + 2px coral outline variants; form submits
      full-width (`btn-block`) with `py-3 px-5`
- [ ] block-heading-1 style: uppercase letter-spaced eyebrow (12px,
      `#b8b8b8`) + 3rem coral h2
- [ ] Hero h1 4.5rem white line-height 1 (2rem mobile); hero row 100vh /
      min 700px (70vh / 400px mobile); counter numbers 4rem white;
      team cards 1px `#e9ecef` border + rounded; testimonial quote box
      white bg padding 30px italic serif
- [ ] Placeholder images via `picsum.photos/seed/veinly-<n>/<w>/<h>`
      (hero ×2 dark mine-adjacent seeds, investors tiles ×2, video block,
      team ×3, testimonials ×4, blog ×2); icons from `lucide-react`;
      social icons as inline SVG brand icons
- [ ] Document title "Veinly — Mining Company Template"; brand
      "Miners" → "Veinly" everywhere
- [ ] Source quirks handled: duplicated "First name" placeholder fixed to
      First name + Last name in both forms; counters render final values;
      no Bootstrap/owl-carousel/fancybox dependencies; no Colorlib link in
      footer

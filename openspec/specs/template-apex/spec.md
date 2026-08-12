# Template: Apex (Consulting Agency Landing)

## Purpose

Apex is a single-page consulting agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pointer" design (see TEMPLATES.md — listed FOUR times, all
rows are the same source slug: line 477, line 1139, line 1391 and line 2351;
implement ONE app and mark ALL FOUR rows `[x]` at bookkeeping), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a white corporate consulting page with a crimson/raspberry
identity: a transparent navbar over the hero (white logo "Pointer." + links
Home / About Us / Team / Services / Testimonials / Blog / Contact) that turns
sticky white with a #e81050 logo on scroll; a full-viewport hero photo
(misty mountain peak with a stone staircase and a hiker silhouette) darkened
with a light overlay and a centered 900-weight white headline "We Are The
Best Consulting Agency" plus a crimson pill "Get Started" button; a
full-width big image with a CRIMSON #e81050 floating box overlapping its
bottom-right ("Creative Skills" uppercase sub-title, "Create Your Own Web
Masterpiece" headline, paragraph, and a PURPLE #505288 "Read More" button); a
left-aligned "Our Dedicated Professionals" team section (8 photo cards on a
#f0f0f0 ground, name + "Product Manager" role, hover social overlay); a
centered "Our Approach" 3-column numbered row (01. Creative, 02. Strategy, 03. Production); a light-gray "Our Services" section (6 icon cards: Great
Design, Time Saving, Quick Response, Best Support, Finest Quality, Real
Solutions, each with a 3rem crimson icon and Learn More link); a centered
"Testimonials" carousel (4 italic quotes with circular photos); a split CTA
with a 4-image slider + "Consulting Agency It's Best" heading and two
feature cards (Web & Mobile Specialties, Intuitive Thinkers); a "Our Blog
Posts" 3-card row (image, title, author • date • category meta, excerpt,
Continue Reading); a light-gray contact section with a white "Contact Form"
card (First Name/Last Name/Email/Subject/Message + Send Message) beside three
white info cards (Address, Phone, Email Address); and a dark #333333 footer
with About Us / Quick Links / Subscribe Newsletter / Follow Us widgets and a
ColorLib copyright bar. Apex recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Pointer" — free consulting agency website template
  (source: https://colorlib.com/wp/template/pointer/; listed four times in
  TEMPLATES.md — lines 477, 1139, 1391 and 2351, all `- [ ]`, same slug →
  one app, mark all four rows `[x]`).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/pointer/`
  (HTTP 200, 45.8KB full rendered DOM + `css/style.css` (22.5KB, Bootstrap-4
  custom) + bootstrap.min.css + jquery-ui + owl.carousel + fancybox +
  bootstrap-datepicker + flaticon + aos + icomoon fonts, extracted 2026-08-12
  during prep). The TEMPLATES.md screenshot (`pointer-free-template.jpg`,
  1200×946, AVIF, viewed in the browser) confirms the visual design: a misty
  mountain-peak photo with stone staircase and a hiker silhouette at the
  summit (cool grays/browns/whites), dark overlay, centered white bold
  headline, crimson pill "Get Started" button, transparent navbar with white
  "Pointer" logo + white links, and just below the fold a white section with
  a large photo of a woman (the cta-big-image About block). Sections below
  the fold (team/services/testimonials/blog/contact/footer) are not visible
  in the 1200×946 screenshot — their details come from the live DOM + CSS.
- **Section order (1:1, LIVE DOM — comments stripped):**
  1. Navbar (`.site-navbar.py-4.js-sticky-header.site-navbar-target`,
     position absolute top 0, transparent over the hero): left h1 `.site-logo`
     "Pointer." ; right `.site-navigation` (position relative, text-right) ul
     `.site-menu`: Home, About Us, Team, Services, Testimonials, Blog,
     Contact. Links 5px 20px padding, #000, hover #e81050. Over the hero
     (`.sticky-wrapper` variant): logo #fff, links rgba(255,255,255,.7);
     sticky (`.is-sticky`): logo #e81050, links #000. Mobile: `.js-menu-toggle`
     hamburger + off-canvas `.site-mobile-menu` with the same links.
  2. Hero (`div.site-blocks-cover.overlay`, id=home-section, inline bg
     `images/hero_2.jpg` cover; min-height 600px / 100vh; `:before` overlay
     rgba(0,0,0,.2)): centered `.col-md-6.mt-lg-5.text-center`: h1 "We Are
     The Best Consulting Agency" (3rem, weight 900, #fff), p.mb-5 (white,
     lighter), `a.btn.btn-primary.mr-2.mb-2` "Get Started". Single slide (the
     stray `home-slider owl-carousel` class in the DOM sits on the
     TESTIMONIAL carousel — do NOT render a hero slider).
  3. About CTA (`div.site-section.cta-big-image`, id=about-section):
     `.container` (position relative) > full-width `img.img-fluid`
     `images/img_big_1.jpg` + `.img-box` (bg #e81050, max-width 550px,
     padding 3rem, position absolute, bottom -10%, right 10%; becomes static
     relative below 992px): `span.sub-title` "Creative Skills" (uppercase
     13px, letter-spacing .1em, rgba(255,255,255,.7), display block, mb
     1.5rem), h2 "Create Your Own Web Masterpiece" (2rem, #fff, mb 1.5rem),
     p (1.1rem, rgba(255,255,255,.9), weight 300, mb 1.5rem),
     `a.btn` "Read More" (bg **#505288** purple, white text).
  4. Team (`section.site-section.border-bottom`, id=team-section): heading
     row `.col-md-5.text-left`: h2 `.section-title.mb-3` "Our Dedicated
     Professionals" (40px, weight 900, #e81050; contains `<br>` between
     "Dedicated" and "Professionals") + `p.lead` lorem. Grid of 8
     `col-md-6.col-lg-3.mb-4` cards: `.team-member` (bg #f0f0f0): `figure`
     (margin 0, overflow hidden, position relative) with `ul.social` overlay
     (absolute; icon-facebook, icon-twitter, icon-linkedin, icon-instagram —
     icomoon; shown on hover) + `img.img-fluid` (person_1..8.jpg); then
     `.p-3`: h3 name + `span.position` "Product Manager". Members: Kaiara
     Spencer, Dave Simpson, Ben Thompson, Kyla Stewart, Kaiara Spencer, Dave
     Simpson, Ben Thompson, Chris Stewart.
  5. Approach (`section.site-section`): centered `.col-12` h2
     `.section-title.mb-3` "Our Approach"; 3 × `col-md-6.col-lg-4`:
     `.box-with-humber` (position relative): h2 `.text-black` (30px) with
     `<span.text-primary>` "01." (18px) + "Creative" / "02. Strategy" /
     "03. Production", p.mb-4 lorem.
  6. Services (`section.site-section.border-bottom.bg-light`,
     id=services-section): centered h2 `.section-title.mb-3` "Our Services";
     6 × `col-md-6.col-lg-4.mb-4` `data-aos=fade-up` (delays 0/100/200/
     0/100/200): `.unit-4.d-flex`: `.unit-4-icon.mr-4` `span.text-primary`
     (3rem, #e81050) + div: h3 (20px) + p + `p > a` "Learn More".
     Icon→title: icon-autorenew (Great Design), icon-backspace (Time Saving),
     icon-av (Quick Response), icon-beenhere (Best Support), icon-business
     (Finest Quality), icon-cloud (Real Solutions).
  7. Testimonials (`section.site-section.testimonial-wrap`,
     id=testimonials-section): centered; `.owl-carousel` (wrap's owl-nav
     hidden) of 4 slides `.testimonial` (max-width 800px, margin auto,
     text-align center): `blockquote.mb-5` p (1.5rem, italic) + `figure.mb-4`
     (flex, centered): `img.w-50.img-fluid.mb-3` (circular, ~100px,
     person_3.jpg / person_2.jpg / person_4.jpg / person_5.jpg) + name p.
     Names: John Smith, Christine Aguilar, Robert Spears, Bruce Rogers.
  8. CTA split (`section.site-section`, id=about-section — duplicate id in
     the source, keep a distinct id in the app): row: `.col-md-5.ml-auto.mb-5.
order-md-2` `data-aos=fade`: `.owl-carousel.slide-one-item-alt` with 4
     `img.img-fluid` (slide_1..4.jpg) + `.custom-direction` links
     `.custom-prev` "Prev" / `.custom-next` "Next"; `.col-md-6.order-md-1`
     `data-aos=fade`: h2 `.section-title.mb-3` "Consulting Agency It's Best"
     - 2 × `col-md-12.col-lg-6`: `.unit-4`: `.unit-4-icon.mr-4.mb-3`
       (icon-adb / icon-assignment) + h3 "Web & Mobile Specialties" /
       "Intuitive Thinkers" + p + "Learn More" link.
  9. Blog (`section.site-section`, id=blog-section): centered
     `.section-sub-title` "Blog" (13px, uppercase, letter-spacing .2em,
     #e81050) + h2 `.section-title.mb-3` "Our Blog Posts"; 3 ×
     `col-md-6.col-lg-4.mb-4`: `.h-entry`: `a > img.img-fluid`
     (img_1/2/3.jpg, margin-bottom 30px), h2 `.font-size-regular` (20px)
     link title (lorem), `.meta.mb-4` (color #b3b3b3, 14px): "Ham Brook"
     `•` "Jan 18, 2019" `•` "News" (category link), p excerpt, `p > a`
     "Continue Reading...".
  10. Contact (`section.site-section.bg-light`, id=contact-section): centered
      `.section-sub-title` "Services" + h2 `.section-title.mb-3` "Our
      Services"; row: `.col-md-7.mb-5` `form.p-5.bg-white`: h2.h4.
      text-black.mb-5 "Contact Form"; rows of fields: First Name + Last Name
      (2-up), Email, Subject, Message textarea (7 rows, placeholder "Write
      your notes or questions here..."), submit `input.btn.btn-primary.
btn-md.text-white` value "Send Message"; `.col-md-5`: 3 ×
      `.p-4.mb-3.bg-white` info cards: `p.mb-0.font-weight-bold` label +
      p value: Address → "203 Fake St. Mountain View, San Francisco,
      California, USA"; Phone → link "+1 232 3235 324"; Email Address →
      link "youremail@domain.com".
  11. Footer (`footer.site-footer`, bg #333333, padding 4em 0 / 8em ≥768px):
      `.col-md-8` > row: `.col-md-5` h2 `.footer-heading.mb-4` "About Us"
      (16px, #fff) + p lorem (#737373); `.col-md-3.ml-auto` h2
      `.footer-heading.mb-4` "Quick Links" + `ul.list-unstyled` (About Us,
      Services, Testimonials, Contact Us); `.col-md-4`: h2
      `.footer-heading.mb-4` "Subscribe Newsletter" + `.footer-subscribe`
      input-group: `input.form-control.border-secondary.text-white.
bg-transparent` (placeholder "Enter Email") + `.btn.btn-primary.
text-black` "Send" (height 43px); h2 "Follow Us" + icon links
      (icon-facebook, icon-twitter, icon-instagram, icon-linkedin). Bottom
      `.row.pt-5.mt-5.text-center` `.border-top.pt-5`: copyright p "Copyright
      © All rights reserved | This template is made with by Colorlib".
- **Design tokens extracted from `css/style.css` + bootstrap defaults:**
  - Primary crimson **#e81050** — `.btn.btn-primary` bg (white text; hover =
    white bg + #e81050 text), `.section-title` (40px, weight 900; 30px
    mobile), `.section-sub-title` (13px, uppercase, ls .2em), nav link
    hover, `.text-primary` (approach numbers, unit-4 icons), `.cta-big-image
.img-box` bg.
  - Secondary purple **#505288** — `.cta-big-image .img-box .btn` (Read
    More) bg + border, white text.
  - Dark **#333333** — `.site-footer` bg; footer headings #fff; footer body
    **#737373**; blog `.meta` **#b3b3b3**; dark text **#25262a** / #000.
  - Light section backgrounds: Bootstrap `bg-light` #f8f9fa (services,
    contact, CTA-split card area), **#f0f0f0** (team-member cards),
    #f3f3f4/#f7f7f7 (borders).
  - Hero overlay **rgba(0,0,0,0.2)**; img-box sub-title rgba(255,255,255,.7);
    img-box paragraph rgba(255,255,255,.9); nav links over hero
    rgba(255,255,255,.7).
  - Fonts: **Roboto system stack** — `"Roboto", -apple-system,
BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
sans-serif` (the theme's `body` stack; no Google Fonts <link> in the
    reference). Weights: hero h1 900, section titles 900, body 300–400;
    testimonial quotes italic.
  - Buttons: `.btn` font-size 16px, **border-radius 30px** (pill), padding
    10px 30px, no shadow; `.btn-primary` #e81050 bg; hover swaps to white
    bg + #e81050 text (`.btn-outline-dark` exists for secondary/Read More on
    white sections).
  - Type scale: hero h1 3rem/900; section-title 40px/900 (30px mobile);
    cta img-box h2 2rem; approach h2 30px (number span 18px); unit-4 h3
    20px + 3rem icons; team h3 (~1.3rem) + `.position` muted; testimonial
    quote 1.5rem italic; blog h2 20px, meta 14px; footer headings 16px;
    section-sub-title 13px uppercase.
  - Rhythm: `.site-section` padding 2.5em 0 → 5em 0 (≥768px); hero
    min-height 100vh; cta img-box padding 3rem / max-width 550px / bottom
    -10% right 10%; team heading column col-md-5 left-aligned; unit-4
    `d-flex` icon left (mr-4) text right; testimonial max-width 800px
    centered, photo ~100px circle; blog img mb 30px; contact form p-5 on
    white, info cards p-4 mb-3 on white; footer padding 4em/8em; input
    heights: form-control 43px, footer Send 43px.
- **Visual design (screenshot `pointer-free-template.jpg`):** corporate
  consulting landing with photography-led hero (misty mountain + stone
  staircase + hiker silhouette), transparent white-text navbar, centered
  white 900-weight headline, one crimson pill CTA; below the fold a white
  About block: big photo of a woman with a CRIMSON box overlapping bottom-
  right containing white text + purple button; the page is white/light-gray
  with crimson accents; clean Roboto-like sans typography throughout.
- **Recreation decisions:** all photos → seeded picsum placeholders
  (`picsum.photos/seed/apex-<n>/<w>/<h>`; hero bg wide 1600×900,
  cta-big-image ~1600×900, team portraits square ~400×400, CTA slider
  ~800×600 ×4, testimonial avatars ~200×200, blog thumbs ~800×600 ×3). The
  HERO BACKGROUND is subject-critical (mountain/staircase scene): screen
  candidate seeds and pin one that provably renders a mountain/outdoor
  scene (see skill: seed-screening method), then update spec + docs
  together. icomoon/flaticon icons → lucide-react equivalents (autorenew →
  RefreshCw, backspace → Delete, av → MonitorPlay, beenhere → BadgeCheck,
  business → Briefcase, cloud → Cloud, adb → Smartphone, assignment →
  ClipboardList); brand/social icons (Facebook/Twitter/LinkedIn/Instagram)
  are NOT in lucide-react → inline SVG (simple-icons paths). owl carousels
  (testimonials, CTA slider) → auto-advancing slider with prev/next
  controls (custom hook + timer, cleanup on unmount). Navbar: transparent
  over hero (white text) → sticky white bar (dark links, #e81050 logo) on
  scroll. Forms (contact, footer subscribe) → front-end only with
  validation + success state. Original copy paraphrased keeping the same
  content kinds (headline + CTA, team name + role, numbered step + blurb,
  icon service + blurb + link, quote + author, blog meta + excerpt +
  link). No assets copied.
- **Skipped/reference notes:** the hero "slider" is a single block (the
  `home-slider owl-carousel` class in the DOM actually wraps the TESTIMONIAL
  carousel — ColorLib markup quirk); the CTA-split section duplicates the
  `about-section` id (use a distinct id in the app); "Read More"
  (btn-outline-dark) appears only in the hero's commented-out markup and the
  img-box button is the purple #505288 one — implement the LIVE DOM. The
  newsletter "Send" button is `btn-primary text-black` (crimson bg with
  BLACK text — keep the quirk for fidelity).

Apex lives in `apps/apex` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header with navigation

The system SHALL render a transparent-over-hero header with a "Apex." logo,
seven nav links, and a mobile hamburger menu; on scroll the header SHALL
become sticky with a white background.

#### Scenario: Header content

- **GIVEN** the Apex page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Apex." as a logo
- **AND** it SHALL show nav links: Home, About Us, Team, Services,
  Testimonials, Blog, and Contact
- **AND** over the hero the logo and links SHALL be white (links ~70% white
  opacity)

#### Scenario: Sticky header on scroll

- **GIVEN** the page is scrolled past the hero
- **WHEN** the header enters its sticky state
- **THEN** the header SHALL get a solid background with dark links
- **AND** the logo SHALL turn the brand crimson #e81050 and links SHALL turn
  crimson on hover

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user opens the menu
- **THEN** a hamburger menu SHALL expand to show the same seven nav links

### Requirement: Hero banner

The system SHALL render a full-viewport hero with a background photo, a dark
overlay, a centered 900-weight headline, a paragraph, and a crimson pill
"Get Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "We Are The Best Consulting Agency"
  (3rem, weight 900, white)
- **AND** it SHALL show a supporting paragraph (placeholder copy)
- **AND** it SHALL show a "Get Started" button with a crimson #e81050
  pill background (radius 30px) and white text
- **AND** the background photo SHALL be darkened with an rgba(0,0,0,.2)
  overlay

### Requirement: About CTA with floating image box

The system SHALL render a full-width big image with a crimson box floating
over its bottom-right corner containing a sub-title, a headline, a paragraph,
and a purple "Read More" button.

#### Scenario: About CTA content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a full-width image
- **AND** it SHALL show an overlapping crimson #e81050 box (max-width ~550px)
  anchored bottom-right with the uppercase sub-title "Creative Skills"
  (letter-spaced), the headline "Create Your Own Web Masterpiece" in white,
  a paragraph, and a purple #505288 "Read More" button
- **AND** on mobile the box SHALL stack statically below the image

### Requirement: Team section

The system SHALL render a "Our Dedicated Professionals" section with a
left-aligned heading and a 4-column grid of eight team cards, each with a
photo, a name, a role, and hover social icons.

#### Scenario: Team content

- **GIVEN** the team section is displayed
- **WHEN** the user sees the section
- **THEN** it SHALL show the heading "Our Dedicated Professionals" in
  crimson #e81050 (40px, weight 900) with a lead paragraph
- **AND** it SHALL show eight team cards on a #f0f0f0 ground, each with a
  photo, a name (e.g. "Kaiara Spencer"), and the role "Product Manager"

#### Scenario: Team hover socials

- **GIVEN** a team card is displayed
- **WHEN** the user hovers the card photo
- **THEN** social icon links (Facebook, Twitter, LinkedIn, Instagram)
  SHALL appear overlaid on the photo

### Requirement: Approach section

The system SHALL render a centered "Our Approach" section with three numbered
columns.

#### Scenario: Approach content

- **GIVEN** the approach section is displayed
- **WHEN** the user sees the section
- **THEN** it SHALL show the centered heading "Our Approach"
- **AND** it SHALL show three columns, each with a crimson number
  ("01.", "02.", "03.") followed by a title ("Creative", "Strategy",
  "Production") and a short paragraph

### Requirement: Services section

The system SHALL render a light-gray "Our Services" section with a 3-column
grid of six icon cards.

#### Scenario: Services content

- **GIVEN** the services section is displayed
- **WHEN** the user sees the section
- **THEN** it SHALL show the centered heading "Our Services"
- **AND** it SHALL show six cards, each with a 3rem crimson icon and a
  title: Great Design, Time Saving, Quick Response, Best Support, Finest
  Quality, Real Solutions
- **AND** each card SHALL show a short paragraph and a "Learn More" link

### Requirement: Testimonials carousel

The system SHALL render a centered testimonials section with an
auto-advancing carousel of four quote slides (italic quote, circular photo,
name).

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the centered heading "Testimonials"
- **AND** it SHALL show a carousel of four slides, each with an italic
  1.5rem quote, a circular photo, and a name (John Smith, Christine
  Aguilar, Robert Spears, Bruce Rogers)
- **AND** the carousel SHALL advance automatically (prev/next optional)

### Requirement: CTA split with slider

The system SHALL render a split section with a four-image slider with
Prev/Next controls on one side and a heading with two feature cards on the
other.

#### Scenario: CTA split content

- **GIVEN** the page is rendered
- **WHEN** the CTA split section is displayed
- **THEN** it SHALL show a slider with four photos and Prev/Next controls
- **AND** it SHALL show the heading "Consulting Agency It's Best"
- **AND** it SHALL show two feature cards with a crimson icon, a title
  ("Web & Mobile Specialties", "Intuitive Thinkers"), a paragraph, and a
  "Learn More" link

### Requirement: Blog section

The system SHALL render a "Our Blog Posts" section with a 3-column grid of
blog cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the uppercase sub-title "Blog" and the heading
  "Our Blog Posts" (both centered)
- **AND** it SHALL show three cards, each with an image, a title link, a
  meta line "Author • Jan 18, 2019 • News" (author • date • category), an
  excerpt, and a "Continue Reading..." link

### Requirement: Contact section

The system SHALL render a light-gray contact section with a white contact
form card and three white info cards.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the uppercase sub-title "Services" and the heading
  "Our Services" (centered)
- **AND** it SHALL show a white form card headed "Contact Form" with fields:
  First Name, Last Name, Email, Subject, and a Message textarea (placeholder
  "Write your notes or questions here...")
- **AND** it SHALL show a crimson "Send Message" submit button

#### Scenario: Contact info cards

- **GIVEN** the contact section is displayed
- **WHEN** the user sees the right column
- **THEN** it SHALL show three white cards with bold labels and values:
  Address ("203 Fake St. Mountain View, San Francisco, California, USA"),
  Phone ("+1 232 3235 324"), and Email Address ("youremail@domain.com")

#### Scenario: Contact submit

- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL prevent default navigation and show a success
  state (or front-end validation messages on invalid/incomplete fields)

### Requirement: Footer

The system SHALL render a dark #333333 footer with four widget areas (About
Us, Quick Links, Subscribe Newsletter, Follow Us) and a ColorLib copyright
bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "About Us" column with a white heading and gray
  body text
- **AND** it SHALL show the "Quick Links" column with links: About Us,
  Services, Testimonials, Contact Us
- **AND** it SHALL show the "Subscribe Newsletter" column with a transparent
  email input and a crimson "Send" button (black text)
- **AND** it SHALL show the "Follow Us" column with Facebook, Twitter,
  Instagram, and LinkedIn icon links
- **AND** the bottom bar SHALL show the copyright line
  "Copyright © All rights reserved | This template is made with by Colorlib"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Apex app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, about CTA, team,
  approach, services, testimonials, CTA split, blog, contact, and footer in
  order
- **AND** the document title SHALL be "Apex — Consulting Agency Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/apex`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/apex`)
- [ ] Section order matches the reference 1:1 (header → hero → about CTA → team → approach → services → testimonials → CTA split → blog → contact → footer)
- [ ] Design tokens from the reference used in `@theme` (primary crimson #e81050, secondary purple #505288, footer dark #333333, footer body #737373, meta #b3b3b3, team ground #f0f0f0, light #f8f9fa, hero overlay rgba(0,0,0,.2); Roboto system sans stack — no Google Fonts)
- [ ] Header: "Apex." logo, seven links, white over hero → sticky white with #e81050 logo + dark links, mobile hamburger
- [ ] Hero: full-viewport bg photo (subject-verified mountain scene seed) + rgba(0,0,0,.2) overlay, "We Are The Best Consulting Agency" 3rem/900 white, crimson pill "Get Started"
- [ ] About CTA: full-width image + crimson #e81050 floating box (bottom-right, ~550px) with "Creative Skills" sub-title, white headline, paragraph, purple #505288 "Read More"; stacks on mobile
- [ ] Team: "Our Dedicated Professionals" left-aligned 40px/900 crimson heading, 8 cards (photo, name, "Product Manager", hover social overlay) on #f0f0f0
- [ ] Approach: centered "Our Approach", 3 numbered columns (01. Creative / 02. Strategy / 03. Production)
- [ ] Services: light-gray band, centered "Our Services", 6 icon cards (3rem crimson icons, title, blurb, Learn More)
- [ ] Testimonials: centered carousel, 4 italic 1.5rem quotes + circular photos + names, auto-advance
- [ ] CTA split: 4-image slider + Prev/Next, "Consulting Agency It's Best" heading, 2 feature cards (Web & Mobile Specialties, Intuitive Thinkers)
- [ ] Blog: "Blog" sub-title + "Our Blog Posts", 3 cards (image, title, "Author • Jan 18, 2019 • News" meta, excerpt, Continue Reading...)
- [ ] Contact: "Services"/"Our Services" centered header, white "Contact Form" card (First Name/Last Name/Email/Subject/Message + Send Message) + 3 white info cards (Address/Phone/Email Address)
- [ ] Footer: bg #333333, About Us / Quick Links / Subscribe Newsletter (transparent input + crimson Send) / Follow Us, ColorLib copyright bar
- [ ] NO hero slider (single block); distinct id for the CTA-split section; newsletter Send keeps crimson bg + black text
- [ ] No copied ColorLib assets; placeholders via picsum seeded `apex-<n>`; icons via lucide-react + inline SVG brand icons

# Template: Compass (Bootstrap / Consulting Agency Template)

## Purpose

Compass is a single-page business / consulting-agency homepage template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pointer" design (see TEMPLATES.md, line 477 — Bootstrap
category), built under a different name with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a consulting agency landing page: a transparent absolute
navbar over the hero with a black "Pointer" wordmark plus a pink dot
("Pointer."), right-aligned menu (Home / About Us / Team / Services /
Testimonials / Blog / Contact, active link pink) and a black mobile hamburger;
a full-viewport photo hero (mountain) with a dark overlay, centered white
headline "We Are The Best Consulting Agency", lorem subtext and a pill-shaped
pink "Get Started" button; a "big image" CTA section — a 3-photo carousel with
an absolutely-positioned pink panel overlapping the bottom-right corner
("Creative Skills" uppercase label, white "Create Your Own Web Masterpiece"
headline, white subtext, indigo #505288 "Read More" button); a team section
("Our Dedicated Professionals", pink 40px/900 section title, 4-column photo
cards with social icon bars that slide in on hover, 8 members); an approach
section ("Our Approach" with three numbered steps 01. Creative / 02. Strategy
/ 03. Production, plus a "Learn More" intro row); a light-gray services
section (6 cards: Great Design, Time Saving, Quick Response, Best Support,
Finest Quality, Real Solutions, each with icon + title + text + "Learn More");
a testimonials slider (4 slides, quote + author name, carousel dots); a
two-feature "Consulting Agency It's Best" section (Web & Mobile Specialties,
Intuitive Thinkers); a blog section (pink "BLOG" eyebrow, "Our Blog Posts",
3 post cards with image, "News" tag, title, "Continue Reading..."); a
light-gray contact section with a full contact form (First Name, Last Name,
Email, Subject, Message, "Send Message" pill button) plus address / phone /
email info; and a footer with About Us, Quick Links, a Subscribe-Newsletter
email input + "Send" button, Follow Us social icons and a copyright bar.
Compass recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Pointer" — free consulting agency / business
  website template (source: https://colorlib.com/wp/template/pointer/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/pointer/`
  (HTTP 200, 45.8KB; `<title>` "Pointer &mdash; Website by Colorlib").
  Stylesheets: `css/style.css` (22.5KB, the design source) +
  `css/bootstrap.min.css` (grid + `.bg-light` #f8f9fa + `.form-control`
  helpers) + owl.carousel/aos/fancybox (sliders + scroll animations).
  Rendered DOM + accessibility tree of the live page (checked in a real
  browser) are the reference below. The TEMPLATES.md screenshot
  (`pointer-free-template.jpg`, AVIF 142KB) confirms the visual design:
  transparent navbar with dark logo/links over a golden-lit mountain-peak
  photo; centered white bold headline; pill-shaped bright-pink #e81050 "Get
  Started" button; below, the big photo with the overlapping pink caption
  panel; white team/approach sections with pink section titles; light-gray
  services/blog/contact bands; pink + indigo accent palette throughout.
  Overall aesthetic: clean, corporate, high-contrast — Roboto type, vivid
  raspberry-pink #e81050 accents on white/#f8f9fa, pill buttons, generous
  whitespace.
- **Section order (1:1, from the live DOM):**
  1. `header.site-navbar.py-4.js-sticky-header.site-navbar-target`
     (position absolute, top 0, width 100%, z-index 1999, sticky on scroll):
     container row — `col-6 col-xl-2`: `h1.mb-0.site-logo` "Pointer" with
     `<span class="text-primary">.</span>` (pink dot wordmark, dark text);
     `col-12 col-md-10 d-none d-xl-block`: `nav.site-navigation text-right`
     with `ul.site-menu` — 7 links: Home (`#home-section`, active class →
     pink #e81050, padding 5px 20px), About Us (`#about-section`), Team
     (`#team-section`), Services (`#services-section`), Testimonials
     (`#testimonials-section`), Blog (`#blog-section`), Contact
     (`#contact-section`); link color #000; mobile: `a.site-menu-toggle
js-menu-toggle` black hamburger (icon-menu) + slide-in mobile menu
     (Bootstrap `.site-mobile-menu` pattern).
  2. `div.site-blocks-cover.overlay#home-section` — full-viewport hero:
     `background-image: url(images/hero_2.jpg)` (mountain peak), cover,
     `background-position: center center`, min-height 600px / height
     calc(100vh); `:before` overlay `rgba(0,0,0,0.2)`; centered
     `col-md-6 mt-lg-5 text-center`: `h1` white "We Are The Best Consulting
     Agency", `p.mb-5` lorem subtext (white), `a.btn.btn-primary.mr-2.mb-2`
     "Get Started" (pill radius 30px, bg #e81050, white text, padding
     10px 30px, font-size 16px; hover inverts to white bg + pink text).
  3. `div.site-section.cta-big-image#about-section` (note: duplicate `id`
     in the original — the big-image section and the features section both
     use `about-section`; in Compass use distinct ids): container —
     `div.owl-carousel.slide-one-item-alt` with 3 photos
     (`images/slide_1.jpg`, `slide_2.jpg`, `slide_3.jpg`, img-fluid);
     `div.img-box` absolutely positioned (`bottom: -10%; right: 10%`,
     max-width 550px, padding 3rem, background #e81050): `span.sub-title`
     "Creative Skills" (uppercase 13px, letter-spacing .1em, color
     rgba(255,255,255,0.7)), `h2` white 2rem "Create Your Own Web
     Masterpiece", `p` 1.1rem rgba(255,255,255,0.9) weight 300 lorem,
     `a.btn` "Read More" (pill, bg #505288 indigo, white text). On mobile
     the img-box becomes static (right: auto, relative).
  4. `section.site-section.border-bottom#team-section` — header row
     `col-md-5 text-left`: `h2.section-title.mb-3` "Our Dedicated <br>
     Professionals" (color #e81050, font-size 40px, font-weight 900;
     30px below 991.98px) + `p.lead` lorem. Grid `col-md-6 col-lg-3 mb-4`
     × 8 members (2 rows of 4): `div.team-member > figure` (position
     relative, overflow hidden) — photo + `ul.social` absolutely positioned
     (slides in from the left via translateX(0%) on
     `.team-member:hover .social`; 4 icon links: facebook, twitter,
     linkedin, instagram — icomoon; use lucide in Compass) — then `h3`
     member name (Kaiara Spencer, Dave Simpson, Ben Thompson, Kyla Stewart
     / Kaiara Spencer, Dave Simpson, Ben Thompson, Chris Stewart — original
     reuses placeholder names; use 8 distinct names in Compass).
  5. `section.site-section` — approach: row with `col-md-5`-style intro —
     `h2.section-title` "We Are The Best Consulting Agency" + lorem +
     `a.btn.btn-outline-dark`-style "Learn More" link; then "Our Approach"
     title + row of 3 steps: `01. Creative`, `02. Strategy`,
     `03. Production` — each a numbered step (leading "01."/"02."/"03."
     prefix) with `h2` step name and lorem paragraph.
  6. `section.site-section.border-bottom.bg-light#services-section` —
     centered header: `h2.section-title` "Our Services"; grid of 6 cards
     (2 rows × 3): Great Design, Time Saving, Quick Response, Best Support,
     Finest Quality, Real Solutions — each `h3` title + lorem paragraph +
     "Learn More" link (pink arrow-link style, `.more-39291`-like).
  7. `section.site-section.testimonial-wrap#testimonials-section` —
     `h2.section-title` "Testimonials"; `div.slide-one-item.home-slider
owl-carousel` — 4 slides, each `div.testimonial`: lorem quote +
     author name (John Smith, Christine Aguilar, Robert Spears, Bruce
     Rogers); owl carousel dots below.
  8. `section.site-section#about-section` (the duplicate-id features
     section) — `h2.section-title` "Consulting Agency It's Best"; two
     feature blocks (2 columns): `h3` "Web & Mobile Specialties" + lorem +
     "Learn More" link; `h3` "Intuitive Thinkers" + lorem + "Learn More"
     link.
  9. `section.site-section#blog-section` — header: `span.section-sub-title`
     "BLOG" (13px, #e81050, letter-spacing .2em, uppercase) +
     `h2.section-title` "Our Blog Posts"; row of 3 post cards
     (`col-lg-4`): image, `a` category tag "News", `h2` post title (lorem),
     "Continue Reading..." link.
  10. `section.site-section.bg-light#contact-section` — header reuses
      `span.section-sub-title` "Services" + `h2.section-title` "Our
      Services" in the original (copy-paste in the source; keep a section
      header above the form, paraphrased "Contact" / "Get In Touch" if
      preferred); `h2` "Contact Form"; form fields: First Name, Last Name,
      Email, Subject, Message + `button.btn.btn-primary` "Send Message"
      (pill); form-controls: height 43px, border-radius 30px (pill inputs);
      contact info aside: Address — 203 Fake St. Mountain View, San
      Francisco, California, USA; Phone — +1 232 3235 324; Email Address —
      youremail@domain.com.
  11. `footer.site-footer` — row of 4 columns: `col-md-3`-ish "About Us"
      (`h2` + lorem paragraph); "Quick Links" (`ul.list-unstyled`): About
      Us, Services, Testimonials, Contact Us; "Subscribe Newsletter" —
      email input + "Send" button (`.footer-subscribe .btn` height 43px);
      "Follow Us" — 4 social icon links (facebook, twitter, instagram,
      linkedin); bottom bar: copyright line — original shows "Copyright ©
      All rights reserved" + "This template is made with by Colorlib" →
      replace with the repo-standard footer credit linking
      https://www.componentdock.com/ (see conventions.md).
- **Design tokens extracted from `css/style.css` (+ bootstrap.min.css):**
  - Brand pink/raspberry: **#e81050** (19 uses — dominant accent) —
    `.text-primary` (logo dot, active nav link), `.btn-primary` bg,
    `.section-title` color, `.section-sub-title` color, `.cta-big-image
.img-box` background. `.btn-primary:hover` inverts: bg #fff, color
    #e81050.
  - Secondary indigo: **#505288** (2 uses) — `.cta-big-image .img-box .btn`
    (the "Read More" button in the pink panel).
  - Ink: **#000** (10 uses) — nav links, headings, logo wordmark; body
    text #212529/#343a40; secondary grays #737373, #999999, #b3b3b3
    (captions), #ccc (inactive owl dots), #dee2e6/#e6e6e6 borders.
  - Light section backgrounds: #f8f9fa (`bg-light` from Bootstrap — 1 use
    in style.css but applied via class), #edf0f5 (4), #f4f5f9 (2),
    #f0f0f0/#f3f3f4/#f7f7f7 (team figure hover / navbar border).
  - White #fff (19 uses) — hero text, img-box text, button text, card
    panels.
  - Font: **"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif** — whole site including
    `.form-control` (2 declarations).
  - Buttons: `.btn` — font-size 16px, **border-radius 30px (pill)**,
    padding 10px 30px, no box-shadow on hover/focus; `.btn-primary` bg
    #e81050 / white text / hover inverts to white bg + pink text;
    `.cta-big-image .img-box .btn` indigo #505288; footer subscribe button
    height 43px.
  - Headings: `.section-title` — color #e81050, font-size 40px (30px
    mobile), font-weight 900; `.section-sub-title` — 13px, #e81050,
    letter-spacing .2em, uppercase; hero h1 large bold white; `.site-logo`
    h1 with pink dot span.
  - Forms: `.form-control` — height 43px, **border-radius 30px (pill
    inputs)**.
  - Hero: `.site-blocks-cover` — min-height 600px / calc(100vh), cover
    photo, `:before` overlay rgba(0,0,0,0.2); `.site-navbar` absolute top
    0 full-width z-index 1999.
  - Team cards: `.team-member figure` position relative overflow hidden;
    `ul.social` absolute, slides in on hover (translateX(0%), left
    off-canvas at rest).
  - Carousels: hero CTA image carousel (`slide-one-item-alt`), testimonials
    (`slide-one-item home-slider`); owl dots — inactive #ccc, active
    #e81050 (owl-theme default active color overridden by `.text-primary`
    family where applied; verify in browser during implementation).
- **Recreation decisions:** name "Compass" (wordmark "Compass" with pink
  dot "Compass.", package @free-react-templates/compass, app apps/compass).
  Transparent navbar over hero (dark logo + links, pink active link) →
  white + shadow + black links when sticky after scroll; right-aligned menu
  Home / About Us / Team / Services / Testimonials / Blog / Contact; black
  mobile hamburger → slide-in menu (aria-expanded). Hero = full-viewport
  photo (picsum seed) + rgba(0,0,0,0.2) overlay, centered white headline +
  subtext + pill pink "Get Started" button. Big-image CTA = full-width photo
  carousel (3 picsum images) with absolutely-positioned pink panel
  (bottom-right, max-w 550px, padding 3rem) — "Creative Skills" eyebrow,
  white headline "Create Your Own Web Masterpiece", white subtext, indigo
  "Read More" pill button; panel static on mobile. Team = 8 photo cards in
  4-col rows with hover slide-in social icon bars. Approach = intro row +
  3 numbered steps (01. Creative / 02. Strategy / 03. Production).
  Services = light-gray band, 6 cards with icon + title + text + "Learn
  More". Testimonials = centered slider, 4 quote+author slides with dots.
  Features = "Consulting Agency It's Best" + 2 blocks (Web & Mobile
  Specialties, Intuitive Thinkers). Blog = "BLOG" eyebrow + "Our Blog
  Posts" + 3 cards (image, News tag, title, "Continue Reading..."). Contact
  = light-gray band, section header + Contact Form (First Name / Last Name
  / Email / Subject / Message + pink "Send Message" pill) + address/phone/
  email info. Footer = About Us / Quick Links / Subscribe Newsletter
  (email + Send) / Follow Us + copyright bar with repo-standard credit
  ("© 2026 Compass. All rights reserved." + "Made with Component Dock"
  linking https://www.componentdock.com/). All images picsum-seeded
  (`picsum.photos/seed/compass-N/w/h`); Google Fonts Roboto via `<link>` in
  index.html; icons via lucide-react.

Compass lives in `apps/compass` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a transparent navbar with a wordmark logo, a
right-aligned nav menu, and a mobile menu that becomes white and sticky on
scroll.

#### Scenario: Navbar content

- **GIVEN** the Compass page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Compass" with a pink (#e81050)
  trailing dot as the wordmark on the left
- **AND** it SHALL show nav links Home (active), About Us, Team, Services,
  Testimonials, Blog, and Contact
- **AND** the active link SHALL be pink (#e81050) and the others dark
- **AND** on mobile it SHALL show a hamburger toggle that opens a slide-in
  menu with the same links

#### Scenario: Sticky header on scroll

- **GIVEN** the page is scrolled down past the hero
- **WHEN** the header is in sticky state
- **THEN** it SHALL have a white background with a subtle shadow and dark
  links

### Requirement: Hero section

The system SHALL render a full-viewport photo hero with an overlay, a
centered headline, subtext, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the Compass page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a full-width cover background photo with a dark
  rgba(0,0,0,0.2) overlay
- **AND** it SHALL show the centered white headline "We Are The Best
  Consulting Agency"
- **AND** it SHALL show a lorem subtext paragraph
- **AND** it SHALL show a pill-shaped pink (#e81050) "Get Started" button
  with white text

### Requirement: Big-image CTA section

The system SHALL render a photo carousel with an overlapping pink caption
panel.

#### Scenario: CTA panel content

- **GIVEN** the Compass page is rendered
- **WHEN** the big-image section is displayed
- **THEN** it SHALL show a carousel of three full-width photos
- **AND** it SHALL show a pink (#e81050) panel overlapping the bottom-right
  corner containing the uppercase "Creative Skills" eyebrow, the white
  headline "Create Your Own Web Masterpiece", white subtext, and an indigo
  (#505288) "Read More" pill button
- **AND** on mobile the panel SHALL stack below the image instead of
  overlapping

### Requirement: Team section

The system SHALL render a team grid of photo cards with hover social icons.

#### Scenario: Team grid

- **GIVEN** the Compass page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the pink (#e81050) 40px bold section title "Our
  Dedicated Professionals" with a lead paragraph
- **AND** it SHALL show eight member cards in rows of four, each with a
  photo, a name heading, and a social icon bar
- **AND** the social icon bar SHALL be hidden at rest and slide in on card
  hover

### Requirement: Approach section

The system SHALL render an intro row and three numbered approach steps.

#### Scenario: Approach steps

- **GIVEN** the Compass page is rendered
- **WHEN** the approach section is displayed
- **THEN** it SHALL show a section title and "Learn More" link intro row
- **AND** it SHALL show the heading "Our Approach"
- **AND** it SHALL show three numbered steps: 01. Creative, 02. Strategy,
  and 03. Production, each with a paragraph

### Requirement: Services section

The system SHALL render a light-gray services band with six service cards.

#### Scenario: Services grid

- **GIVEN** the Compass page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the pink section title "Our Services" on a light
  (#f8f9fa) background
- **AND** it SHALL show six cards titled Great Design, Time Saving, Quick
  Response, Best Support, Finest Quality, and Real Solutions
- **AND** each card SHALL contain an icon, a title, a paragraph, and a
  "Learn More" link

### Requirement: Testimonials section

The system SHALL render a testimonial slider with quote slides and dots.

#### Scenario: Testimonial slides

- **GIVEN** the Compass page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the section title "Testimonials"
- **AND** it SHALL show a slider with four slides, each containing a quote
  and an author name (John Smith, Christine Aguilar, Robert Spears, Bruce
  Rogers)
- **AND** the slider SHALL expose carousel dots for navigation

### Requirement: Features section

The system SHALL render a two-column features section.

#### Scenario: Feature blocks

- **GIVEN** the Compass page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the section title "Consulting Agency It's Best"
- **AND** it SHALL show two feature blocks: "Web & Mobile Specialties" and
  "Intuitive Thinkers", each with a paragraph and a "Learn More" link

### Requirement: Blog section

The system SHALL render a blog section with three post cards.

#### Scenario: Blog posts

- **GIVEN** the Compass page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the pink uppercase eyebrow "BLOG" and the section
  title "Our Blog Posts"
- **AND** it SHALL show three post cards, each with an image, a "News"
  category tag, a title, and a "Continue Reading..." link

### Requirement: Contact section

The system SHALL render a contact section with a form and contact details.

#### Scenario: Contact form

- **GIVEN** the Compass page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a section header above the form (original reuses
  "Services / Our Services"; paraphrase to "Contact / Get In Touch" is
  acceptable)
- **AND** it SHALL show a form titled "Contact Form" with First Name, Last
  Name, Email, Subject, and Message fields
- **AND** it SHALL show a pill-shaped pink "Send Message" submit button
- **AND** it SHALL show contact details: address (203 Fake St. Mountain
  View, San Francisco, California, USA), phone (+1 232 3235 324), and email
  (youremail@domain.com)

### Requirement: Footer

The system SHALL render a footer with widget columns, a newsletter form,
social links, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About Us column with a paragraph
- **AND** it SHALL show a Quick Links column with links (About Us, Services,
  Testimonials, Contact Us)
- **AND** it SHALL show a "Subscribe Newsletter" form with an email input
  and a "Send" button
- **AND** it SHALL show a "Follow Us" row with four social icon links
- **AND** it SHALL show a copyright bar with the repo-standard footer credit
  (links https://www.componentdock.com/)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Compass app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, big-image CTA, team,
  approach, services, testimonials, features, blog, contact, and footer
  inside the main landmark in the original's order
- **AND** the document title SHALL be "Compass — Consulting Agency"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- compass` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → big-image CTA
      → team → approach → services → testimonials → features → blog →
      contact → footer).
- [ ] Design tokens applied: brand pink #e81050 (logo dot, active nav link,
      section titles, hero button, CTA panel, newsletter/footer accents),
      indigo #505288 (CTA "Read More" button), ink #000 headings, Roboto
      font, pill buttons (radius 30px, padding 10px 30px), pill form inputs
      (radius 30px, height 43px), 40px/900 pink section titles, uppercase
      13px letter-spaced eyebrows, light-gray #f8f9fa section bands,
      rgba(0,0,0,0.2) hero overlay, sticky white navbar with shadow.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Pointer), preview URL, tokens,
      and renames.

# Template: Fiscal (Finance / Business Consulting Template)

## Purpose

Fiscal is a single-page finance & business consulting website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Financier" template design (see TEMPLATES.md — appears 3×:
lines 581, 1381, 1752; all three rows point to the same source, one prep
covers all; verified with `grep -c 'wp/template/financier/'` = 3), built
under a DIFFERENT name (Fiscal — of or relating to finance/taxation, per the
monorepo naming mandate) with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Financier" — finance/business consulting template
  (Bootstrap 5.2; source: https://colorlib.com/wp/template/financier/).
  `<title>`: "Financier — Free Bootstrap 5 Website Template by Colorlib".
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/financier/
  (HTTP 200, ~26 KB HTML fetched + live browser render + accessibility tree;
  `css/style.css` ~60.8 KB = Bootstrap 5.2 compiled with the theme overrides
  appended, parsed for tokens; vendor sheets tiny-slider (tns), AOS,
  glightbox, flatpickr; icon fonts icomoon + flaticon). jQuery + tiny-slider
  carousels (portfolio, testimonials, news), AOS scroll animations,
  glightbox video popup. NOT Tailwind.
- **Screenshot analyzed:** `financier-free-templatel.jpg` (1200×946,
  TEMPLATES.md line 581, verified via browser vision) — hero with a
  left-to-right blue → cyan gradient, white bold headline "We Help Grow Your
  Business", white subtext, a solid blue pill "Contact us" button and a
  "Watch the video" link; right side a photo of a professional woman at a
  desk with papers (rounded-corner image). Transparent navbar over the hero:
  "Financier" logo in white, centered links (Home, Solutions, Services,
  About, Contact Us), phone number "123-489-9381" with a phone icon at the
  right. Below the fold: a white services area with three columns (light
  blue icons, "On Time Service" headings) and an "OUR SERVICES" section
  heading in blue uppercase. Clean corporate-SaaS aesthetic: white sections,
  light-gray alternating bands, single bright-blue accent + blue gradient.
- **Section order (1:1, from live preview DOM + rendered page):**
  1. Navbar (`nav.site-nav`) — transparent, `position: absolute; top: 40px;
z-index: 9; width: 100%`, floats over the hero. Brand "Financier."
     (24px Work Sans, white — implement as text "Fiscal."). Links (14px,
     rgba(255,255,255,.7) → white on hover/active): Home, Solutions
     (dropdown: Menu One, Menu Two, Dropdown → Sub Menu One / Sub Menu Two /
     Sub Menu Three), Services, About, Contact Us. Far right: phone icon +
     "123-489-9381" (white). Mobile: full-screen overlay menu
     (`div.site-mobile-menu` with close button).
  2. Hero (`div.hero.overlay`, `100vh / min-height: 780px`) — background:
     `linear-gradient(to right, #4facfe 0%, #00f2fe 100%)` (the `.hero.
overlay:before` dark overlay is `display: none` — the gradient shows).
     `div.row.align-items-center.justify-content-between`: left
     `div.col-lg-5`: `h1.heading.text-white` (50px / 700, 40px < 992px)
     "We Help Grow Your Business" + `p.text-white.mb-5.w-75` (Blind-Text
     copy) + `a.btn.btn-primary.me-4` "Contact us" + glightbox link
     "Watch the video" (YouTube `mwtbEGNABWU&t=12s`); right
     `div.img-wrap` image (professional woman at desk, shadow
     `0 15px 30px rgba(0,0,0,.1)`). NOTE: base CSS `.hero .heading` is
     `color:#000` but the live markup adds `text-white` — rendered white,
     the live render wins.
  3. Services (`section.section.sec-services`, white, `.section` padding
     7rem 0) — centered `h2.heading` "Our Services" (`text-transform:
uppercase`, 30px, bold) + lead paragraph; `div.row` of 6
     `div.service` cards (padding 40px, white bg, shadow
     `0 10px 30px rgba(0,0,0,.05)`, margin-bottom 50px): flaticon icon
     (50px, gradient `#4facfe → #00f2fe` circle background via `:before`),
     `h3` "On Time Service" (18px #000), Blind-Text paragraph,
     `a.btn.btn-outline-primary.py-2.px-4` "Read more".
  4. CTA band (`section.section.sec-cta.overlay`) — `background-image:
url(images/img_4.jpg)`, `background-position: 100% center`, `:before`
     overlay `rgba(0,0,0,.5)`; white `h2.heading` "Wanna Talk To Us?"
     (uppercase) + white paragraph + `a.btn.btn-primary` "Contact us".
  5. Portfolio (`section.section.sec-portfolio.bg-light`, `pb-5`) — centered
     `h2.heading` "Our Portfolio" + lead; `div.post-slider` (tiny-slider):
     5+ slides, each `div.post-entry`: image + `h5` caption "Behind the
     word mountains" + paragraph; Prev / Next buttons
     (`a.btn.btn-primary.py-2`); tns dots (7px circles, active #0099e5).
  6. Testimonials (`section.section.sec-testimonial.bg-light`) — centered
     `h2.heading` "Testimonials" + longer lead paragraph; `div.testimonial-
slider` (tiny-slider): 3 `div.testimonial-half.d-lg-flex.bg-white`
     slides, each 50/50: `.img` half (cover background photo) + `.text`
     half (padding 90px): `blockquote` (18px, 'Georgia' serif italic,
     #000) Blind-Text quote + `.author`: "John Campbell" + span
     "CEO & Co-founder"; tns dots.
  7. News (`section.section.sec-news`, white) — centered `h2.heading`
     "Latest News" + lead; `div.post-slider-wrap` (tiny-slider) of 3
     `div.post-entry` cards: `img.card-img-top`, `.date` "Jan 20, 2021"
     (uppercase, letter-spacing .05rem), `h5` title link "Behind the word
     mountains", paragraph, "Read more" link.
  8. Footer (`footer.site-footer`, bg #efefef, 14px, color #888, padding
     70px 0) — `div.row` of 3 `div.col-lg-4` widgets (h3 12px 700 uppercase
     #0099e5):
     - "Contact": `<address>` "43 Raymouth Rd. Baltemoer, London 3910" +
       links (tel/mailto): "+1(123)-456-7890" ×2, "info@mydomain.com",
       each with a 44px #0099e5 circle icon (`.contact-info`).
     - "Sources": 12 links in two floated columns (About us, Services,
       Vision, Mission, Terms, Privacy, Partners, Business, Careers, Blog,
       FAQ, Creative).
     - "Links": 3 links (Our Vision, About us, Contact us) + `ul.social`:
       6 circular icon links (40px, bg #ccc, radius 40%, hover → #0099e5
       white): instagram, twitter, facebook, linkedin, pinterest, dribbble.
     - Bottom bar (`div.row.mt-5`): "Copyright © <year> All rights
       reserved | This template is made with <heart> by ColorLib" → per
       monorepo policy replaced by the Component Dock attribution link.
- **Design tokens extracted from the preview CSS (computed values verified in
  the stylesheet):**
  - Primary blue: **#0099e5** — `--bs-primary`; link color, `.btn.btn-
primary` bg (white text), `.btn-outline-primary` text/border (white
    fill on hover), footer widget h3 color, `.contact-info` icon circle bg,
    footer link hover underline (`a:before`), social circle hover bg,
    `.post-entry h5 a:hover` color, tns active dot.
  - Gradient blue: **`linear-gradient(to right, #4facfe 0%, #00f2fe 100%)`**
    — `.hero` background + `.service [class^="flaticon-"]:before` icon
    background (circle).
  - Secondary gray: **#52565e** (`--bs-secondary`); icon-circle wash
    `rgba(82,86,94,.1)`.
  - Ink: **#212529** — body text (`--bs-dark`); service h3 #000; testimonial
    blockquote #000; hero heading black in base CSS but **white rendered**
    via `text-white` utility.
  - Muted: **#6c757d** (`--bs-gray`) — lead paragraphs.
  - Light: **#f8f9fa** (`--bs-light`) — `.sec-portfolio` / `.sec-testimonial`
    backgrounds; **#fafafa** — `.sec-features`.
  - Footer: **#efefef** bg, text #888, links #777, social circles #ccc.
  - Overlays: `.sec-cta.overlay:before` `rgba(0,0,0,.5)`; hero overlay
    `rgba(0,0,0,.4)` but `display: none`.
  - Fonts: headings + logo **"Work Sans"**, sans-serif (`.h1`–`.h6`,
    `.logo`); body **"Roboto"**, sans-serif (`--bs-font-sans-serif`);
    testimonial blockquote 'Georgia', serif italic.
  - Buttons: `.btn` — padding 10px 30px, **border-radius 30px** (pill),
    font-size 14px, transition .3s all ease; `.btn-primary` #0099e5 /
    white; `.btn-outline-primary` blue outline → white fill on hover.
  - Radii: 30px pill buttons; 50% circles (service icons, contact-info
    icons, tns dots); social circles 40% radius; hero image rounded corners
    (screenshot).
  - Shadows: `.service` `0 10px 30px rgba(0,0,0,.05)`; hero img
    `0 15px 30px rgba(0,0,0,.1)`.
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/fiscal-<n>/<w>/<h>`): hero image fiscal-1,
  portfolio slides fiscal-2..6, testimonial photos fiscal-7..9, news cards
  fiscal-10..12, CTA band background fiscal-13; icons → lucide-react (Phone,
  Play, Quote, ChevronLeft, ChevronRight, MapPin, Mail, Instagram, Twitter/
  X, Facebook, Linkedin, Pinterest, Dribbble); fonts Roboto (400/500/700) +
  Work Sans (400/500/600/700) via Google Fonts `<link>` in `index.html`;
  portfolio/testimonial/news sliders are state-based carousels (no new
  deps); "Watch the video" → button/link opening the YouTube video in a new
  tab (no glightbox dep); Solutions dropdown via state + aria-expanded;
  mobile menu as a slide-over panel; footer ColorLib credit → Component
  Dock attribution (`https://www.componentdock.com/`). Tokens #0099e5 /
  #4facfe / #00f2fe / #52565e / #212529 / #6c757d / #f8f9fa / #efefef in
  `@theme`. Brand "Financier" → "Fiscal" everywhere (logo "Fiscal.", footer
  headings, document title).

Fiscal lives in `apps/fiscal` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar floating over the hero with the
brand left, centered links, a phone number on the right, a Solutions
dropdown, and a mobile slide-over menu.

#### Scenario: Navbar content

- **GIVEN** the Fiscal page is rendered at the top of the page
- **WHEN** the page loads
- **THEN** the navbar SHALL be transparent and absolutely positioned at the
  top over the hero
- **AND** the brand SHALL read "Fiscal." in white Work Sans 24px on the left
- **AND** the nav SHALL list Home, Solutions, Services, About, and Contact Us
  in white 14px links (rgba(255,255,255,.7), full white on hover/active)
- **AND** a phone icon with the number "123-489-9381" SHALL sit at the far
  right in white

#### Scenario: Solutions dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user activates the Solutions link
- **THEN** a dropdown SHALL open listing Menu One, Menu Two, and Dropdown
  (which nests Sub Menu One, Sub Menu Two, Sub Menu Three)
- **AND** the dropdown trigger SHALL expose `aria-expanded` and close on
  outside click or Escape

#### Scenario: Mobile menu

- **GIVEN** a narrow viewport
- **WHEN** the user opens the mobile menu toggle
- **THEN** a full-screen slide-over menu SHALL open with the same links and a
  visible close control, and SHALL close when a link is chosen or the close
  control is clicked

### Requirement: Hero

The system SHALL render a full-viewport gradient hero with a headline, white
subtext, two CTAs, and a right-side image.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL be 100vh (min-height 780px) with the blue gradient
  background (#4facfe → #00f2fe, left to right)
- **AND** the left column SHALL show the white bold 50px headline "We Help
  Grow Your Business" (40px on small screens)
- **AND** a white sub-paragraph (75% width) SHALL follow
- **AND** a solid blue pill "Contact us" button (bg #0099e5, white text,
  radius 30px) SHALL sit next to a "Watch the video" link that opens the
  YouTube video in a new tab
- **AND** the right column SHALL show the hero image with the soft shadow
  `0 15px 30px rgba(0,0,0,.1)`

### Requirement: Services

The system SHALL render an "Our Services" section with six white service
cards, each with a gradient icon, heading, copy, and Read more link.

#### Scenario: Services content

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the centered uppercase heading "Our Services" (Work Sans 30px
  bold) SHALL render with a lead paragraph below
- **AND** six service cards SHALL render in a responsive grid (3 × 2 on
  desktop), each with a 50px circular icon on the #4facfe → #00f2fe
  gradient, the heading "On Time Service" (18px), a Blind-Text paragraph,
  and a pill "Read more" button (outline blue, white fill on hover)
- **AND** the cards SHALL sit on white with the shadow
  `0 10px 30px rgba(0,0,0,.05)`

### Requirement: CTA band

The system SHALL render a photo CTA band with a dark overlay, white heading
and copy, and a Contact us button.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a cover background image darkened by the
  rgba(0,0,0,.5) overlay
- **AND** the white uppercase heading "Wanna Talk To Us?" SHALL render with a
  white paragraph and a solid blue pill "Contact us" button

### Requirement: Portfolio

The system SHALL render a light-background "Our Portfolio" section with a
carousel of image slides and Prev/Next controls.

#### Scenario: Portfolio content

- **GIVEN** the portfolio section is rendered
- **WHEN** the page loads
- **THEN** the centered uppercase heading "Our Portfolio" SHALL render on the
  #f8f9fa background with a lead paragraph
- **AND** a carousel SHALL cycle at least five slides, each with an image, an
  h5 caption "Behind the word mountains", and a paragraph
- **AND** blue pill Prev and Next buttons SHALL step through the slides
- **AND** dot pagination SHALL show the active slide in #0099e5

### Requirement: Testimonials

The system SHALL render a light-background "Testimonials" section with a
carousel of split image/quote slides.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the centered uppercase heading "Testimonials" SHALL render with a
  lead paragraph
- **AND** a carousel SHALL cycle three slides, each a 50/50 split: a cover
  photo half and a white text half (padding 90px) with an italic Georgia
  18px quote, the author "John Campbell", and the role "CEO & Co-founder"
- **AND** dot pagination SHALL highlight the active slide in #0099e5

### Requirement: News

The system SHALL render a "Latest News" section with a carousel of post
cards (image, date, title, excerpt, Read more).

#### Scenario: News content

- **GIVEN** the news section is rendered
- **WHEN** the page loads
- **THEN** the centered uppercase heading "Latest News" SHALL render with a
  lead paragraph on white
- **AND** a carousel SHALL cycle three post cards, each with a top image, an
  uppercase spaced date "Jan 20, 2021", a title link "Behind the word
  mountains", an excerpt paragraph, and a "Read more" link

### Requirement: Footer

The system SHALL render a light-gray footer with Contact, Sources, and Links
widgets, social circles, and a copyright bar with the Component Dock
attribution.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have the #efefef background, 14px #888 text, and
  three 12px uppercase bold blue (#0099e5) widget headings: "Contact",
  "Sources", "Links"
- **AND** the Contact widget SHALL show the address "43 Raymouth Rd.
  Baltemoer, London 3910" and phone/email links, each with a 44px blue
  circle icon
- **AND** the Sources widget SHALL list 12 links in two columns (About us,
  Services, Vision, Mission, Terms, Privacy, Partners, Business, Careers,
  Blog, FAQ, Creative)
- **AND** the Links widget SHALL list Our Vision, About us, Contact us and
  six circular social icon links (40px #ccc, hover → #0099e5 white)
- **AND** the bottom bar SHALL show the copyright line with the Component
  Dock attribution link (https://www.componentdock.com/)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Fiscal app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar and hero in the banner
  landmark, the services, CTA, portfolio, testimonials, and news sections in
  the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Fiscal — Finance Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/fiscal` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- fiscal` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#0099e5, #4facfe, #00f2fe, #52565e, #212529, #6c757d, #f8f9fa, #efefef, Work Sans + Roboto, Georgia italic quotes) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `fiscal-<n>`, Google Fonts link, lucide icons only)
- [ ] Hero headline + subtext rendered WHITE (text-white beats the base black rule — verified in live render)
- [ ] Sliders (portfolio, testimonials, news) implemented with client-side state, no new deps
- [ ] Solutions dropdown + mobile slide-over accessible (aria-expanded, Escape, outside click)
- [ ] Footer bottom bar carries the Component Dock attribution link

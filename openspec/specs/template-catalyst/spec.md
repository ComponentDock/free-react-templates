# Template: Catalyst (Digital Agency / Business Landing)

## Purpose

Catalyst is a single-page digital-agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Unbrew" design (see TEMPLATES.md — listed THREE times, all
three rows are the same source slug: line 631 in the Bootstrap 5 section,
line 1213 in the Business section, and line 2096 in the Landing Page
section; implement ONE app and mark ALL THREE rows `[x]` at bookkeeping),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a modern, flat, corporate agency landing page: a deep
purple-violet gradient hero (`#553be6 → #a87ffa`, 45deg) with white text, a
blue "Start A Project" pill button and a purple "Call us for any inquiry"
button, and a flat vector illustration on the right; a white body of
soft-shadow cards (services, counters, team, work, pricing, blog) on
alternating white / light-lavender-gray (`#f9faff`) bands; bright sky-blue
`#1fb6fc` accents everywhere (icon circles, counter numbers, links, buttons,
the solid-blue newsletter band); a purple gradient copyright bar; and a
light lavender (`#eaedff`) footer with decorative circles. Catalyst
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Unbrew" — free Bootstrap 5 digital-agency /
  business landing website template (source:
  https://colorlib.com/wp/template/unbrew/; listed THREE times in
  TEMPLATES.md — line 631 [Bootstrap 5], line 1213 [Business], line 2096
  [Landing Page], all `- [ ]`, same slug → one app, mark all three rows
  `[x]`).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unbrew/ (HTTP
  200, full rendered DOM, 56.4KB HTML + `css/style.css` (78.6KB, Bootstrap-5
  custom) + bootstrap.min.css + font-awesome 4.7 + ionicons + animate.css +
  flaticon.css + tiny-slider.css + glightbox.min.css + aos.css, extracted
  2026-08-14 during prep). The TEMPLATES.md screenshot
  (`unbrew-free-template.jpg`, AVIF — served as
  `https://colorlib.com/wp/wp-content/uploads/sites/2/unbrew-free-template.jpg`,
  converted to PNG and viewed in the browser) confirms the design: purple
  gradient hero with white headline "Boost Personal Productivity" over a
  flat vector illustration (people + data charts on a large screen),
  white middle sections with a blue "VIEW MORE PORTFOLIO" link, a solid
  blue newsletter band, and a light lavender footer with a purple
  copyright bar.
- **Section order (1:1, LIVE DOM — comments stripped):**
  1. Navbar (`nav.navbar.ftco-navbar-light`, absolute, transparent,
     top 30px over the hero): brand link **"Unbrew."** (white, 18px);
     right nav `ul` 7 links — Home (active), About us, Services, Pricing,
     Work, Blog, Contact us — each 12px, uppercase, letter-spacing 1px,
     color rgba(255,255,255,.9), weight 500, with an animated white
     underline (2px, scaleX 0→1) on hover. Mobile (≤991px): background
     **#2a3a60**, hamburger toggler, stacked links (py 1.2rem).
  2. Hero (`section.hero-wrap`, height 800px, overflow hidden):
     background linear-gradient(45deg, **#553be6 0% → #a87ffa 100%**);
     decorative pseudo-element circles (white 550px @ opacity .05;
     black 180px band bottom-left); `.slider-text` content: h1
     "Boost Personal Productivity" (white, large), p "A small river named
     Duden flows by their place and supplies it with the necessary
     regelialia." (rgba(255,255,255,.8)), then two buttons — "Start A
     Project" (`btn btn-primary d-flex align-items-center`) and
     "Call us for any inquiry" (`btn btn-secondary`) with phone
     "+01 2345 5678 910"; right side flat vector illustration
     (`images/bg_1.svg`, people with data charts); bottom-left vertical
     social icons row (Facebook, Twitter, Instagram, Google+, 30px circles,
     white bg, on gradient).
  3. Services (`section.ftco-section.ftco-no-pb`): centered heading —
     `.subheading` (12px uppercase, letter-spacing 2px, **#1fb6fc**)
     - h2 **"We Provide A Lot of Cool Services"** (40px, weight 400,
       color #2a3a60); below, 6 service cards (`.services`, white, radius
       4px, shadow 0 24px 48px -13px rgba(0,0,0,.05), padding 20px, mb 30px):
       Marketing (flaticon-user), SEO (flaticon-seo), UI/UX Design
       (flaticon-vector), Creative (flaticon-business), Optimization
       (flaticon-search-engine), Business Strategy (flaticon-rocket). Each
       card: 70px circular icon (bg **#eff2ff**, icon 40px **#1fb6fc**),
       title h2 17px/500 (#2a3a60), blurb "Even the all-powerful Pointing
       has no control about the blind texts" (small, #88879e). Below the
       grid, link "Our Services" (`btn btn-primary`).
  4. Counter (`section.ftco-counter-section.ftco-no-pt`): row with left
     image (`images/about.svg` flat illustration) and right white card
     `.counter-section` (radius 10px, shadow 0 24px 48px -13px
     rgba(0,0,0,.1)) holding 4 `.counter-wrap` (text-center, padding
     40px 20px): animated counters 900+ "Project Done", 500+ "Optimize
     Sites", 770+ "Coffee Cups", 1000+ "Happy People" — number 50px
     **#1fb6fc** (line-height 1), label 14px uppercase **#2a3a60**.
     (data-count attributes: 900 / 500 / 770 / 1000; the DOM renders "0"
     until the count-up animation runs.)
  5. About (`section.ftco-about-section.ftco-no-pt.ftco-no-pb`): left
     column — `.subheading` + h2 "Unbrew A Digital Agency Company"
     (40px/400/#2a3a60), two paragraphs (Lorem ipsum style, #88879e),
     button "More About us" (`btn btn-primary`); right column
     `.col-lg.img.border` with `background-image: url(images/about.jpg)`
     (rounded-corner photo card).
  6. Team (`section.ftco-section`): centered `.subheading` + h2
     "Our Digital Experts Team"; 4 `.team-wrap` cards (text-center):
     Adrian Molises, Arthur MaGregor, Anna Hanzen, Brian Wooden — photo
     (`images/team-1..4.jpg`), social icon circles overlay on hover
     (bg **#f2e3fc**, icons **#a641ec**, hover bg **#1fb6fc** with white
     icons), role span "CEO, Founder & Developer", card hover bg
     **#f9f1fe**.
  7. Testimonials (`section.testimony-section.bg-light`, bg #f9faff):
     centered h2 "Happy Customers"; tiny-slider carousel of 5 white
     `.testimony-wrap` slides: circular avatar, quote "Far far away,
     behind the word mountains, far from the countries Vokalia and
     Consonantia, there live the blind texts.", author "Roger Scott" +
     role "Marketing Manager". Carousel pagination dots below.
  8. Why Choose Us (`section.img.v-section.bg-light`): full-width 600px
     tall gradient overlay (`#553be6 → #a87ffa`, 45deg, opacity 1) over
     the light band; centered `.subheading` "WHY CHOOSE US" (white) +
     h2 white "Easy Management for Your Businesses"; 4 white `.services`
     cards (padding 30px, shadow 0 24px 48px -13px rgba(0,0,0,.05)):
     Easy Management (flaticon-settings), Protect Your Profile
     (flaticon-padlock), Private Community (flaticon-secret-file),
     24/7 Help Support (flaticon-help) — each with 80px circular icon
     (bg **#1fb6fc**, white 45px icon), title 24px; hover: card bg
     **#1fb6fc**, icon bg white, icon color #1fb6fc.
  9. Work (`section.ftco-section`): centered h2 "Our Awesome Work";
     4 `.work-wrap` items (mb 70px): 400px-tall image block (radius 4px)
     - text: `.category` chip (13px uppercase, letter-spacing 1px, bg
       #f9faff, radius 4px; hover bg #84d7fd + white text) + h3 20px/500
       "High Quality Design Concept" (link #2a3a60). Categories:
       Branding, Printing / Graphic Design / Web Development / Web
       Development. Below: "View More Portfolio" (`btn btn-custom` —
       transparent, uppercase, 13px, letter-spacing 1px, color #1fb6fc,
       bg rgba(255,255,255,.1)). Images open in glightbox.
  10. Pricing (`section.ftco-section`): centered h2 "Choose Your Pricing
      Plan" + intro paragraph; 4 plan cards — **Personal $49**,
      **Professional $79**, **Medium Business $109**, **Gigantic
      Business $149** — each with 5 features (Strategic Alliance, Growth
      Expansion, Business Planning, Contact Negotiation, Market
      Positioning, `fa fa-check` bullets) and a "Get Started"
      (`btn btn-primary d-block px-2 py-3`) button.
  11. Blog (`section.ftco-section.bg-light`, #f9faff): centered h2
      "Recent Blog" + intro; 4 `.blog-entry` cards (white, image +
      text): date "Dec. 05, 2020", author "by Johan Stevenson", h3 link
      "Explore The Best Restaurant in New York".
  12. Newsletter (`section.ftco-intro.py-5.bg-primary`, solid **#1fb6fc**
      band): left h2 white 27px/500 "Newsletter - Stay tune and get the
      latest update" + p rgba(255,255,255,.8); right `.subscribe-form`:
      email input (transparent bg, white text/placeholder, underline
      border rgba(255,255,255,.8), radius 5px 0 0 5px) + send button
      (`.btn-icon`, paper-plane icon, white).
  13. Footer (`footer.ftco-footer`, bg **#eaedff**, padding 5em 0 0,
      decorative circles **#e5e9ff** top-left / bottom-right):
      - Column 1: brand logo "Unbrew." (link #1fb6fc) + blurb "A small
        river named Duden flows by their place..." + 3 social icons.
      - Column 2 "Explore": About Us, Services, Works, Blog, Contact us.
      - Column 3 "Quick Links": Contact Us, Pricing, Terms & Conditions,
        Privacy, Feedbacks.
      - Column 4 "Recent Posts": thumbnail + "Creativity and Inspiration"
        - date "DEC. 12, 2020" / author "ADMIN" (×3).
      - Column 5 "Have a Questions?": phone "+2 392 3929 210", email
        "info@yourdomain.com" (icon + text, icons #1fb6fc).
      - Footer widget headings h2 18px/500 #2a3a60; links #88879e.
      - Copyright bar (`.bg-wrap`): gradient `#553be6 → #a87ffa` 45deg,
        centered text rgba(255,255,255,.5) 13px: "Copyright © <year> All
        rights reserved | This template is made with ♥ by Colorlib"
        (Colorlib credited in the reference; keep the attribution line
        style — see conventions for the Component Dock footer link
        requirement).
- **Design tokens extracted from `css/style.css` (+ Bootstrap 5 defaults):**
  - Primary **#1fb6fc** (bright sky blue) — `.subheading`, service icon
    color, counter numbers, links, `.btn.btn-primary` bg + hover text,
    `.bg-primary` (newsletter band), footer logo + contact icons,
    work category hover, v-section icon circles, `form-control` focus
    border.
  - Secondary **#bc6ff1** (soft purple) — `.btn.btn-secondary` bg + hover
    text.
  - Gradient **#553be6 → #a87ffa** (45deg) — hero bg, v-section overlay,
    footer copyright bar `.bg-wrap`.
  - Headings **#2a3a60** (dark navy) — all h1–h5, counter labels,
    work titles, footer widget headings.
  - Body text **#88879e** (gray-purple), 16px, line-height 1.8, weight
    400 (body rule).
  - Light section bg **#f9faff** (custom `.bg-light` override; Bootstrap
    `#f8f9fa` also appears — use #f9faff for the testimonial/blog bands).
  - Footer bg **#eaedff** + decorative circles **#e5e9ff**; footer links
    **#88879e**; contact icons #1fb6fc.
  - Team social: circle bg **#f2e3fc**, icon **#a641ec**, hover bg
    #1fb6fc; team card hover bg **#f9f1fe**; work card hover bg
    **#e8f8ff**; work category chip #f9faff, hover #84d7fd.
  - Service icon circle bg **#eff2ff** (70px); v-section icon circle bg
    #1fb6fc (80px).
  - Fonts: **Roboto, Arial, sans-serif** (body + headings, weight 400;
    section h2 40px/1.4, card titles 17px/500, team names 20px/500,
    v-section titles 24px, footer widget h2 18px/500). Load Roboto via
    Google Fonts `<link>` in index.html.
  - Subheading: 12px, uppercase, weight 500, letter-spacing 2px, color
    #1fb6fc; white variant on gradient sections.
  - Buttons: `.btn` padding 10px 20px, font 14px/500, radius
    **40px 40px 40px 0** (bottom-left square) → hover flips to
    **0 40px 40px 40px** (top-left square); shadow
    0 24px 36px -11px rgba(0,0,0,.09). `.btn.btn-primary` bg #1fb6fc
    white text; hover → transparent bg, #1fb6fc border + text.
    `.btn.btn-secondary` bg #bc6ff1 white text; hover → transparent,
    #bc6ff1 border + text. `.btn-custom` (View More Portfolio):
    transparent, uppercase 13px, letter-spacing 1px, color #1fb6fc, bg
    rgba(255,255,255,.1).
  - Cards: `.services` / `.work-wrap` radius 4px, shadow 0 24px 48px -13px
    rgba(0,0,0,.05); `.counter-section` radius 10px, shadow
    0 24px 48px -13px rgba(0,0,0,.1); `.blog-entry` white cards.
  - Navbar: transparent over hero, absolute top 30px; links 12px uppercase
    letter-spacing 1px rgba(255,255,255,.9), hover white + 2px white
    underline scaleX animation; mobile bg #2a3a60.
  - Newsletter form: transparent input, white text, underline border
    rgba(255,255,255,.8), radius 5px 0 0 5px; send icon white.
  - Rhythm: `.ftco-section` ~6em vertical padding (Bootstrap-5 custom),
    hero 800px (600px < 1200px), v-section overlay 600px tall, counters
    padding 40px 20px, work-wrap mb 70px, footer padding 5em 0 0.
- **Visual design (screenshot `unbrew-free-template.jpg` + live render):**
  modern, flat, corporate SaaS/agency look — deep purple-violet gradient
  hero (white headline/CTAs, flat vector illustration of people with data
  charts on a big screen), generous white space with soft-shadow white
  cards, bright sky-blue accents (icons, counters, links, buttons), a
  solid blue newsletter band, light lavender footer, and a purple
  gradient copyright bar.
- **Recreation decisions:** all photos (about.jpg, team-1..4.jpg, work
  images, blog thumbnails, testimonial avatars) → seeded picsum
  placeholders (`picsum.photos/seed/catalyst-<n>/<w>/<h>`); the hero and
  about illustrations are FLAT VECTOR ARTWORKS — recreate them as composed
  inline SVGs (or flat-style graphics), NOT random photos; flaticon icons
  → lucide-react equivalents (Marketing→Megaphone/TrendingUp, SEO→Search,
  UI/UX→PenTool, Creative→Palette, Optimization→Gauge, Business
  Strategy→Briefcase, Easy Management→Settings, Protect Your Profile→Lock,
  Private Community→Users, 24/7 Help→Headphones/LifeBuoy, checkmarks→Check,
  social→Facebook/Twitter/Instagram, phone→Phone, email→Mail,
  send→Send, calendar→Calendar, user→User); tiny-slider testimonials +
  glightbox work lightbox + AOS scroll animations → lightweight React
  equivalents (custom carousel hook with auto-advance + dots, simple
  click-to-open lightbox or anchor links, CSS scroll reveals); counters →
  animate on scroll with a small count-up hook (useEffect + IntersectionObserver);
  newsletter form → front-end only with email validation; original copy
  paraphrased keeping the same content kinds (headline + subtext + CTAs,
  service title + blurb, counter number + label, team name + role, quote
  - author, work title + category, plan name + price + features, blog
    title + date + author); no assets copied.
- **Skipped/reference notes:** the hero social icons are a vertical row
  bottom-left of the hero (30px circles); the counter "0" placeholders in
  the DOM are animated count-ups (data-count 900/500/770/1000) — implement
  the count-up so the final values render (tests can assert the final
  value after the animation or the data attribute). The work section
  images are `background-image` divs (not `<img>`) — same visual result
  via CSS background or `<img>`; blog images are plain `<img>`. The
  copyright bar credits Colorlib in the reference — per monorepo
  conventions the app's footer must ALSO link Component Dock
  (https://www.componentdock.com/); keep the reference's "made with ♥"
  line adapted to Component Dock branding.

Catalyst lives in `apps/catalyst` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navbar with navigation

The system SHALL render a transparent-over-hero navbar with the brand
"Catalyst." (white) and nav links, collapsing to a dark hamburger menu on
mobile.

#### Scenario: Navbar content

- **GIVEN** the Catalyst page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Catalyst." as a white link on
  the left
- **AND** it SHALL show nav links: Home (active), About us, Services,
  Pricing, Work, Blog, Contact us — 12px uppercase with 1px letter-spacing
  in rgba(255,255,255,.9)
- **AND** hovering a link SHALL reveal a white animated underline

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user opens the hamburger menu
- **THEN** the menu SHALL expand to show the same nav links on a dark
  #2a3a60 background

### Requirement: Hero banner

The system SHALL render a full-width purple-gradient hero with a headline,
subtext, two CTAs, a phone line, social icons, and a flat illustration.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Boost Personal Productivity" in
  white over a 45deg gradient #553be6 → #a87ffa
- **AND** it SHALL show the paragraph "A small river named Duden flows by
  their place and supplies it with the necessary regelialia." in
  rgba(255,255,255,.8)
- **AND** it SHALL show a blue pill button "Start A Project" and a purple
  pill button "Call us for any inquiry" with the phone "+01 2345 5678 910"
- **AND** it SHALL show a flat vector illustration on the right (people
  with data charts — composed SVG, not a random photo)
- **AND** it SHALL show a vertical row of social icons (Facebook, Twitter,
  Instagram, Google+) bottom-left

### Requirement: Services section

The system SHALL render a centered heading and six service cards with
circular icons, titles, and blurbs.

#### Scenario: Services content

- **GIVEN** the services section is displayed
- **WHEN** the user sees the section heading
- **THEN** it SHALL show the uppercase blue subheading and the h2
  "We Provide A Lot of Cool Services" (40px, #2a3a60)
- **AND** it SHALL show six white cards (radius 4px, soft shadow):
  Marketing, SEO, UI/UX Design, Creative, Optimization, Business Strategy
- **AND** each card SHALL have a 70px circular icon (bg #eff2ff, icon
  #1fb6fc), a 17px/500 title, and a short blurb
- **AND** below the grid a blue "Our Services" button SHALL be shown

### Requirement: Counter section

The system SHALL render an image next to a white card with four animated
counters.

#### Scenario: Counter content

- **GIVEN** the counter section is displayed
- **WHEN** the user scrolls it into view
- **THEN** it SHALL show a flat illustration on the left and a white
  rounded card (radius 10px, shadow 0 24px 48px -13px rgba(0,0,0,.1)) on
  the right
- **AND** the card SHALL show four counters: 900+ "Project Done", 500+
  "Optimize Sites", 770+ "Coffee Cups", 1000+ "Happy People" — numbers
  50px #1fb6fc, labels 14px uppercase #2a3a60
- **AND** the numbers SHALL count up from 0 when the section becomes
  visible

### Requirement: About section

The system SHALL render an about text column with a button and a photo
column.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** the user sees it
- **THEN** it SHALL show the h2 "Unbrew A Digital Agency Company" (40px)
  with two placeholder paragraphs
- **AND** it SHALL show a blue "More About us" button
- **AND** it SHALL show a rounded photo card on the right

### Requirement: Team section

The system SHALL render a centered heading and four team member cards with
photos, names, roles, and hover-revealed social icons.

#### Scenario: Team content

- **GIVEN** the team section is displayed
- **WHEN** the user sees the section
- **THEN** it SHALL show the h2 "Our Digital Experts Team"
- **AND** it SHALL show four cards: Adrian Molises, Arthur MaGregor, Anna
  Hanzen, Brian Wooden — each with a photo, role
  "CEO, Founder & Developer", and social icons (circle bg #f2e3fc, icons
  #a641ec) revealed on hover
- **AND** hovering a card SHALL tint its background #f9f1fe

### Requirement: Testimonials carousel

The system SHALL render a light-gray section with a centered heading and an
auto-advancing carousel of testimonial slides with dots.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the centered h2 "Happy Customers" on a #f9faff
  band
- **AND** it SHALL show white slides, each with a circular avatar, a
  placeholder quote, author "Roger Scott" and role "Marketing Manager"
- **AND** the carousel SHALL advance automatically and provide pagination
  dots

### Requirement: Why Choose Us band

The system SHALL render a gradient overlay band with a white heading and
four white feature cards with blue icon circles.

#### Scenario: Why Choose Us content

- **GIVEN** the page is rendered
- **WHEN** the Why Choose Us band is displayed
- **THEN** it SHALL show the white uppercase subheading "WHY CHOOSE US"
  and the white h2 "Easy Management for Your Businesses" over a 600px
  45deg gradient (#553be6 → #a87ffa) overlay
- **AND** it SHALL show four white cards: Easy Management, Protect Your
  Profile, Private Community, 24/7 Help Support — each with an 80px
  #1fb6fc circular icon
- **AND** hovering a card SHALL turn its background #1fb6fc, its icon
  circle white, and its icon #1fb6fc

### Requirement: Work portfolio section

The system SHALL render a centered heading, four portfolio items with
category chips, and a "View More Portfolio" link.

#### Scenario: Work content

- **GIVEN** the work section is displayed
- **WHEN** the user sees the section
- **THEN** it SHALL show the h2 "Our Awesome Work"
- **AND** it SHALL show four items titled "High Quality Design Concept"
  with category chips (Branding, Printing / Graphic Design / Web
  Development / Web Development — 13px uppercase, bg #f9faff)
- **AND** clicking an item SHALL open a lightbox with the larger image
- **AND** below the grid a "View More Portfolio" link SHALL be shown
  (uppercase, 13px, letter-spacing 1px, color #1fb6fc)

### Requirement: Pricing section

The system SHALL render a centered heading and four pricing plans with
prices, feature lists, and Get Started buttons.

#### Scenario: Pricing content

- **GIVEN** the pricing section is displayed
- **WHEN** the user sees the section
- **THEN** it SHALL show the h2 "Choose Your Pricing Plan" with an intro
  paragraph
- **AND** it SHALL show four plans: Personal $49, Professional $79, Medium
  Business $109, Gigantic Business $149
- **AND** each plan SHALL list the five features: Strategic Alliance,
  Growth Expansion, Business Planning, Contact Negotiation, Market
  Positioning (check icons)
- **AND** each plan SHALL have a full-width blue "Get Started" button

### Requirement: Blog section

The system SHALL render a light-gray section with a centered heading and
four blog post cards with images, dates, authors, and titles.

#### Scenario: Blog content

- **GIVEN** the blog section is displayed
- **WHEN** the user sees the section
- **THEN** it SHALL show the h2 "Recent Blog" on a #f9faff band
- **AND** it SHALL show four white cards, each with an image, date
  "Dec. 05, 2020", author "by Johan Stevenson", and the title link
  "Explore The Best Restaurant in New York"

### Requirement: Newsletter band

The system SHALL render a solid blue band with a white heading and an email
subscribe form with a send button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter band is displayed
- **THEN** it SHALL show the white heading "Newsletter - Stay tune and get
  the latest update" on a solid #1fb6fc background
- **AND** it SHALL show an email input (transparent bg, white text, white
  placeholder, white underline) with a paper-plane send button

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters an email and submits
- **THEN** the form SHALL prevent default navigation and show a success
  state (or a front-end validation message on an invalid email)

### Requirement: Footer

The system SHALL render a light lavender footer with brand, Explore, Quick
Links, Recent Posts, and Contact columns, plus a gradient copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a #eaedff footer with decorative #e5e9ff circles
- **AND** it SHALL show the brand "Catalyst." (blue link), an Explore
  column (About Us, Services, Works, Blog, Contact us), a Quick Links
  column (Contact Us, Pricing, Terms & Conditions, Privacy, Feedbacks), a
  Recent Posts column (thumbnail + "Creativity and Inspiration" +
  "DEC. 12, 2020" / "ADMIN" ×3), and a "Have a Questions?" column (phone
  "+2 392 3929 210", email "info@yourdomain.com")
- **AND** the bottom bar SHALL show the copyright line over the purple
  gradient with a Component Dock attribution link
  (https://www.componentdock.com/)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Catalyst app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, services, counter,
  about, team, testimonials, why-choose-us, work, pricing, blog,
  newsletter, and footer in order
- **AND** the document title SHALL be "Catalyst — Digital Agency Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/catalyst`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/catalyst`)
- [ ] Section order matches the reference 1:1 (navbar → hero → services → counter → about → team → testimonials → why choose us → work → pricing → blog → newsletter → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #1fb6fc, secondary #bc6ff1, gradient #553be6→#a87ffa, headings #2a3a60, body #88879e, light #f9faff, footer #eaedff/#e5e9ff, icon circle #eff2ff, team social #f2e3fc/#a641ec, hover #f9f1fe/#e8f8ff/#84d7fd; Roboto font)
- [ ] Navbar: "Catalyst." white brand, 7 uppercase links with animated white underline, mobile dark #2a3a60 hamburger menu
- [ ] Hero: 45deg #553be6→#a87ffa gradient, white h1 "Boost Personal Productivity", subtext, blue "Start A Project" + purple "Call us for any inquiry" (+01 2345 5678 910) buttons, flat SVG illustration right (no random landscape), vertical social icons bottom-left
- [ ] Buttons: pill radius 40px 40px 40px 0 (bottom-left square, flips on hover), shadow 0 24px 36px -11px rgba(0,0,0,.09); primary #1fb6fc, secondary #bc6ff1
- [ ] Services: subheading + h2 "We Provide A Lot of Cool Services", 6 cards (70px #eff2ff circle, #1fb6fc icon), "Our Services" button
- [ ] Counter: white rounded card (radius 10px, shadow 0 24px 48px -13px rgba(0,0,0,.1)), 900/500/770/1000 count-up numbers (#1fb6fc 50px) + uppercase labels (Project Done, Optimize Sites, Coffee Cups, Happy People)
- [ ] About: h2 "Unbrew A Digital Agency Company" + 2 paragraphs + "More About us" button + photo card right
- [ ] Team: 4 cards (Adrian Molises, Arthur MaGregor, Anna Hanzen, Brian Wooden), role "CEO, Founder & Developer", hover social circles (#f2e3fc/#a641ec, hover #1fb6fc), card hover #f9f1fe
- [ ] Testimonials: #f9faff band, h2 "Happy Customers", carousel (avatar, quote, "Roger Scott", "Marketing Manager"), auto-advance + dots
- [ ] Why Choose Us: 600px gradient overlay, "WHY CHOOSE US" + white h2 "Easy Management for Your Businesses", 4 white cards (80px #1fb6fc icon circles), hover → card #1fb6fc / icon white / icon color #1fb6fc
- [ ] Work: h2 "Our Awesome Work", 4 items "High Quality Design Concept" with category chips (13px uppercase #f9faff, hover #84d7fd), lightbox on click, "View More Portfolio" btn-custom
- [ ] Pricing: h2 "Choose Your Pricing Plan", 4 plans (Personal $49 / Professional $79 / Medium Business $109 / Gigantic Business $149), 5 check features each, full-width "Get Started" buttons
- [ ] Blog: #f9faff band, h2 "Recent Blog", 4 cards (image, "Dec. 05, 2020", "by Johan Stevenson", "Explore The Best Restaurant in New York")
- [ ] Newsletter: solid #1fb6fc band, white heading, transparent underline email input + paper-plane send button, front-end validation + success state
- [ ] Footer: #eaedff bg + #e5e9ff circles, 5 columns (brand + Explore + Quick Links + Recent Posts + Have a Questions?), gradient copyright bar with Component Dock link (https://www.componentdock.com/)
- [ ] No copied ColorLib assets; placeholders via picsum seeded `catalyst-<n>`; icons via lucide-react; hero/about illustrations recreated as composed SVGs

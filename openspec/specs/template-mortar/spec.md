# Template: Mortar (Construction Company Template)

## Purpose

Mortar is a single-page construction company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Buildream" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Buildream" — construction company website template
  (source: https://colorlib.com/wp/template/buildream/). TEMPLATES.md has TWO
  copies of this item (line 553 — Bootstrap 5 category and line 1337 —
  Construction category; mark BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buildream/
  (HTTP 200, ~54 KB rendered DOM, title "Buildream - Construction Company
  Template"). Stylesheets: `css/style.css` (324 KB, extracted — Bootstrap 5.3
  base + ftco theme) + flaticon / swiper-bundle / glightbox / aos + Font
  Awesome 7 CDN. Fonts: Google Fonts `<link>` — **Poppins** (300/400/700) +
  **Prata** (Prata is loaded but NOT applied anywhere in the CSS — effectively
  Poppins-only; recreate with a single Poppins `<link>`). jQuery-free modern
  stack: Bootstrap collapse (mobile menu), swiper (testimonial carousel),
  glightbox (project lightbox), AOS (fade-up scroll reveals), countup
  (stat counters).
- **Screenshot:** `buildream-free-template.jpg` (TEMPLATES.md lines 553 / 1337) — verified live in a browser (vision analysis): dark charcoal
  navigation bar with amber-orange accents (active nav link, "Contact Us"
  button, "Happy" word in the headline), thin dark top bar with contact info
  and social icons, hero = full-width construction-site photo with heavy dark
  overlay, centered white headline "WE WILL BE HAPPY TO TAKE CARE OF YOUR
  WORK" with the word "HAPPY" in amber, a small rotated "SINCE 1982" stamp
  badge above the headline, two centered CTAs (solid amber "Contact Us" +
  ghost/outline "Request A Quote"), clean white content sections below,
  slightly-rounded rectangular flat buttons, a circular-cropped worker photo
  breaking up the about text block, amber small-caps labels above section
  headings (e.g. "Welcome to Buildream").
- **Visual design (from DOM + CSS tokens + rendered screenshot):** bold,
  high-contrast construction corporate aesthetic — amber/orange brand
  **`#ffa62b`** (subheadings, primary buttons, play button, popular badge,
  newsletter band, hover states), dark charcoal **`#3d424a`** (navbar, dark
  buttons, rotated about-badge, popular-badge text), footer **`#363b42`**,
  light gray `#f8f9fa` (trust / testimonials bands), white content sections.
  Poppins 300/400/700 throughout; section headings 54px weight 500 with a
  16px amber uppercase kicker (`heading-section .subheading`). Buttons are
  rectangular with slight rounding (`border-radius: 4px`), solid amber
  (`#ffa62b` bg, `#3d424a` text) or dark (`#3d424a` bg, white text); hover
  inverts to transparent bg + amber border + amber text. Hero is `100vh`
  fixed-background image with dark overlay, centered text. Distinctive
  elements: rotated `-90deg` dark counter badge ("38 Years of experienced")
  anchored to the bottom-right of the about photo, `80px` amber circular
  video play button, amber pill "Most Popular" badge on the featured pricing
  card, dark `#3d424a` navbar. The demo brands itself "Buildream"; recreation
  uses the NEW name **Mortar**.

## Design tokens (from css/style.css + live DOM)

| Token          | Value                                                                                                                                                                                                                                                                                               | Where                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand amber    | `#ffa62b`                                                                                                                                                                                                                                                                                           | `.heading-section .subheading` kicker, `.btn-primary` bg, `.video-play-btn` bg, `.popular-badge` bg, newsletter `bg-primary` band, `.btn-primary:hover` text/border |
| Dark charcoal  | `#3d424a`                                                                                                                                                                                                                                                                                           | `.ftco-navbar-light` navbar bg, `.btn-darken` bg/border, `.counter-wrap` bg, `.btn-primary` text, `.popular-badge` text                                             |
| Footer dark    | `#363b42`                                                                                                                                                                                                                                                                                           | `.ftco-footer` bg, footer text `rgba(255,255,255,0.7)`                                                                                                              |
| Light band     | `#f8f9fa` (bg-light)                                                                                                                                                                                                                                                                                | trust-badges section, testimonials section                                                                                                                          |
| Button dark    | `#3d424a` (btn-darken)                                                                                                                                                                                                                                                                              | "Request A Quote" hero ghost CTA, newsletter "Subscribe" button (btn-dark), pricing "Get Quote" hover states                                                        |
| White button   | `#fff` border 2px                                                                                                                                                                                                                                                                                   | "Make An Appointment" button on the intro CTA band (over bg image)                                                                                                  |
| Fonts          | **'Poppins', Arial, sans-serif** (300/400/700)                                                                                                                                                                                                                                                      | Google Fonts `<link>` in index.html; Prata loaded in source but unused — skip it                                                                                    |
| Headings       | `.heading-section h2`: 54px, weight 500, line-height 1.4; kicker `.subheading`: 16px, weight 600, `#ffa62b`, margin-bottom 5px                                                                                                                                                                      | about / services / team / portfolio / pricing / blog / faq headings                                                                                                 |
| Buttons        | radius 4px, `padding: 1rem 1.5rem`+ (btn-primary/btn-darken `p-4 py-3`), uppercase-ish letter-spaced variant in pricing cards (`.btn-primary` width 60% margin auto)                                                                                                                                | hero CTAs, "Make An Appointment", "Get Quote", "Subscribe", "Contact Us"                                                                                            |
| Hero           | `height: 100vh; min-height: 100%`, `background-attachment: fixed`, cover, dark `.overlay`, centered `.slider-text`                                                                                                                                                                                  | `.hero-wrap`                                                                                                                                                        |
| Counter badge  | `.counter-wrap`: absolute, `bottom: 107px; right: -107px`, bg `#3d424a`, padding 30px, `transform: rotate(-90deg)`                                                                                                                                                                                  | about photo badge "38 Years of experienced"                                                                                                                         |
| Play button    | `.video-play-btn`: absolute center, 80×80px circle, bg `#ffa62b`, text `#3d424a`                                                                                                                                                                                                                    | video CTA section                                                                                                                                                   |
| Popular badge  | `.popular-badge`: absolute `top: -12px; left: 50%; translateX(-50%)`, bg `#ffa62b`, text `#3d424a`, 12px weight 700 uppercase, `border-radius: 20px`                                                                                                                                                | featured pricing card                                                                                                                                               |
| Pricing card   | `.block-7`: white bg, padding `40px 0`, shadow `0 24px 48px -13px rgba(0,0,0,0.05)`; `.price` with `<sup>$</sup>` + `.number`                                                                                                                                                                       | 4 pricing tiers                                                                                                                                                     |
| Gallery tile   | `.gallery-wrap`: `height: 340px`, bg image, flex-end; search icon (glightbox) + `.desc` (category span + h2 link)                                                                                                                                                                                   | portfolio grid, `col-md-4` = 3 columns                                                                                                                              |
| Staff card     | `.staff`: radius 4px, shadow `0 24px 48px -13px rgba(0,0,0,0.05)`; photo with social icon overlay + name h3 + role span                                                                                                                                                                             | team grid, `col-lg-3`                                                                                                                                               |
| Section rhythm | `ftco-section` padding ~`7em 0` (`.ftco-section` default); `.ftco-no-pb` trust band; counters `6em 0`; newsletter `60px 0`; intro CTA `3em 0`                                                                                                                                                       | vertical rhythm                                                                                                                                                     |
| Icons (source) | flaticon + Font Awesome 7 → lucide-react: engineer/helmet (counter badge), building / floor-plan / consult / construction (about mini services), service icons, fa-check/fa-xmark (pricing features), search (gallery), user/comment (blog meta), socials (top bar + staff + footer), chevron (FAQ) | per-section                                                                                                                                                         |

## Requirements

### Requirement: Dark top bar and navigation

The system SHALL render a thin dark top bar with contact info and social
icons, and a dark charcoal navbar with the brand wordmark and seven
navigation links.

#### Scenario: Top bar

- **GIVEN** the Mortar page is rendered
- **WHEN** the page loads
- **THEN** a thin top bar SHALL show "Free Call: +1 234 456 78910" on the
  left and "Email Adddress: buildream@info.com" (sic — source typo, keep or
  fix) plus social icon links on the right

#### Scenario: Navbar

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** the navbar SHALL have a dark charcoal `#3d424a` background with
  the wordmark "Mortar" on the left
- **AND** links Home, About, Services, Projects, Pricing, Blog, and Contact
  SHALL appear on the right
- **AND** hovering a link SHALL turn it brand amber `#ffa62b`

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a collapsible menu SHALL open showing the same seven links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero with overlay, headline, and dual CTA

The system SHALL render a full-viewport hero with a background photo, dark
overlay, a "Since 1982" stamp badge, a centered headline with an amber
highlight word, and two CTA buttons.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL fill the viewport height with a fixed-attachment
  background image and a dark overlay for legibility
- **AND** a small "Since 1982" badge SHALL appear above the headline
  (rotated stamp treatment in the source screenshot)
- **AND** the headline "We Will Be Happy To Take Care Of Your Work" SHALL
  render centered in white with the word "Happy" highlighted in brand amber
- **AND** a solid amber button "Contact us" and a dark ghost-style button
  "Request A Quote" SHALL appear centered below, each with a right-arrow icon

### Requirement: About section with rotated badge and mini services

The system SHALL render a two-column about section: a photo with a rotated
"38 Years of experienced" badge on the left, and heading, copy, and a 2×2
grid of four mini services on the right.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** the page loads
- **THEN** the left column SHALL show the about photo with a dark charcoal
  badge rotated `-90deg` at its bottom-right reading "38" over "Years of
  experienced"
- **AND** the right column SHALL show the amber kicker "Welcome to Mortar",
  the heading "Quality and Affordable Constructor", a paragraph, and the
  sub-heading "We Can Help You"
- **AND** a 2×2 grid SHALL list Construction, Architecture, Consulting, and
  Mechanical, each with an icon, a title, and a short blurb
- **AND** on a narrow viewport the columns SHALL stack

### Requirement: Trust badges band

The system SHALL render a light-gray band with the kicker "Trusted By" and
six client name logos.

#### Scenario: Trust band content

- **GIVEN** the trust band is displayed
- **WHEN** the page loads
- **THEN** a light-gray (`#f8f9fa`) band SHALL show the heading "Companies
  We've Worked With"
- **AND** six client names SHALL appear as text logos: ABC Corp, City Dev,
  State Bank, Metro Health, Grand Hotels, and Industrial Co

### Requirement: Intro CTA band

The system SHALL render a background-image band with an overlay, a kicker,
a heading, and a white "Make An Appointment" button.

#### Scenario: Intro CTA content

- **GIVEN** the intro CTA band is displayed
- **WHEN** the page loads
- **THEN** the band SHALL show the kicker "You May Contact Us For
  Construction & Renovation Work" and the heading "We Are Great Construction
  Company"
- **AND** a button labeled "Make An Appointment" SHALL appear with a white
  fill and 2px white border

### Requirement: Services section

The system SHALL render a services section with a kicker, a heading, and
three service cards, each with an icon, a title, a blurb, and a "Learn More"
link.

#### Scenario: Services content

- **GIVEN** the services section is displayed
- **WHEN** the page loads
- **THEN** the kicker "What We Do" and the heading "Services" SHALL appear
- **AND** three cards SHALL be shown side by side: Construction Services,
  Infrastructure Services, and Architecture Services
- **AND** each card SHALL show an icon, the service title, a paragraph, and
  a "Learn More" link
- **AND** on a narrow viewport the cards SHALL stack

### Requirement: Video CTA with play button

The system SHALL render a video CTA section with an amber circular play
button, a heading, a paragraph, four check-marked differentiators, and a
"Learn More About Us" button.

#### Scenario: Video CTA content

- **GIVEN** the video CTA section is displayed
- **WHEN** the page loads
- **THEN** a play control labeled "Watch Our Story" SHALL appear as an 80px
  amber circle with a play icon
- **AND** the heading "Building Dreams Into Reality Since 1982" SHALL render
  beside it
- **AND** a paragraph and four bullet points SHALL list: Award-winning
  construction projects, Sustainable building practices, On-time, on-budget
  delivery, and Safety-first approach
- **AND** a "Learn More About Us" button SHALL appear

### Requirement: Stats counters

The system SHALL render a background-image band with four animated stat
counters.

#### Scenario: Counter content

- **GIVEN** the counters band is displayed
- **WHEN** the page loads
- **THEN** four counters SHALL show: 3000 Completed Projects, 320 Happy
  Clients, 1000 Cup Of Coffee, and 587 Engineers & Staffs

### Requirement: Team section

The system SHALL render a team section with a kicker, a heading, and four
engineer cards with photo, social icons, name, and role.

#### Scenario: Team content

- **GIVEN** the team section is displayed
- **WHEN** the page loads
- **THEN** the kicker "Team & Staff" and the heading "Qualified Engineers"
  SHALL appear
- **AND** four cards SHALL show a photo with a social-icon overlay (Twitter,
  Facebook, Instagram, Google+), the engineer's name, and the role "Senior
  Engineer": Lionel Wurtchbach, Mike Nintido, Bea Alam, and John Buffer

### Requirement: Portfolio gallery

The system SHALL render a portfolio section with a kicker, a heading, and a
six-tile gallery grid (3 columns), each tile with a search icon, a category
label, and a project title.

#### Scenario: Gallery content

- **GIVEN** the portfolio section is displayed
- **WHEN** the page loads
- **THEN** the kicker "Portfolio" and the heading "Projects" SHALL appear
- **AND** six tiles SHALL be shown in a 3-column grid, each with a
  background image, a centered search/lightbox icon, the category "Building",
  and the title "High Tower Works"

### Requirement: Pricing section

The system SHALL render a pricing section with a kicker, a heading, and four
tiers — Basic, Standard, Premium (featured with an amber "Most Popular"
badge), and Enterprise — each with a price, a tagline, a feature list with
check/cross icons, and a "Get Quote" button.

#### Scenario: Pricing content

- **GIVEN** the pricing section is displayed
- **WHEN** the page loads
- **THEN** the kicker "Our Pricing" and the heading "Pricing & Packages"
  SHALL appear
- **AND** four cards SHALL show: Basic `$49K` (Small renovations), Standard
  `$79K` (Home additions), Premium `$109K` (Full home builds, with a
  "Most Popular" amber pill badge), and Enterprise `$149K+` (Commercial
  projects)
- **AND** each card SHALL list six features (Basic: 4 included / 2 excluded; Standard: 5 included / 1 excluded; Premium and Enterprise: all included) with amber check icons for included features and muted cross icons for excluded ones
- **AND** each card SHALL have a full-width CTA button: "Get Quote" on Basic, Standard, and Premium, "Contact Us" on Enterprise (matches the source DOM)

### Requirement: Testimonials carousel

The system SHALL render a light-gray testimonial section with a kicker, a
heading, and a carousel of client quotes.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** the kicker "Testimonial" and the heading "Happy Clients" SHALL
  appear
- **AND** a carousel SHALL cycle between quotes by Roger Scott, Marketing
  Manager, each with a quote paragraph and an avatar
- **AND** carousel controls SHALL advance between slides

### Requirement: Blog section

The system SHALL render a blog section with a kicker, a heading, and three
post cards, each with an image carrying a date badge, a meta line, a title,
and an excerpt.

#### Scenario: Blog content

- **GIVEN** the blog section is displayed
- **WHEN** the page loads
- **THEN** the kicker "Our Blog" and the heading "Recent Blog" SHALL appear
- **AND** three cards SHALL show an image with a "16 Jan" date badge, a meta
  line ("Admin · 3 Comments"), the title "Biggest Construction in New York,
  USA", and an excerpt

### Requirement: FAQ accordion

The system SHALL render an FAQ section with a kicker, a heading, and an
accordion of construction questions.

#### Scenario: FAQ content

- **GIVEN** the FAQ section is displayed
- **WHEN** the page loads
- **THEN** the kicker "Frequently Ask Question" and the heading "You Want To
  Ask Something From Us?" SHALL appear
- **AND** an accordion SHALL list "What are the problems in construction?"
  and "What is best practice in construction?"
- **AND** clicking a question SHALL expand its answer and collapse the
  others (aria-expanded on the toggle)

### Requirement: Newsletter band

The system SHALL render an amber newsletter band with a heading, an email
input, and a subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the newsletter band is displayed
- **WHEN** the page loads
- **THEN** the band SHALL have the brand amber `#ffa62b` background with the
  heading "Subscribe to Our Newsletter" and the subtext "Get the latest
  updates on projects, industry news, and exclusive offers."
- **AND** an email input and a dark "Subscribe" button SHALL be shown

### Requirement: Footer

The system SHALL render a dark footer with brand blurb, a Services links
column, a Quick Links column, a "Have a Questions?" contact column, and a
copyright bar linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a `#363b42` background with the wordmark "Mortar"
  and a blurb paragraph
- **AND** a Services column SHALL list three recent post links
- **AND** a Quick Links column SHALL list Home, About, Services, Project,
  Pricing, and Contact Us
- **AND** a "Have a Questions?" column SHALL show the address (203 Fake St.
  Mountain View, San Francisco, California, USA), phone (+2 392 3929 210),
  and email (info@yourdomain.com)
- **AND** the bottom bar SHALL show the copyright line with the current
  year, a neutral design credit, and a link to Component Dock (brand
  attribution, per the repo convention that app code never names the source
  design studio)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Mortar app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar, navbar, hero, about, trust
  badges, intro CTA, services, video CTA, counters, team, portfolio,
  pricing, testimonials, blog, FAQ, newsletter, and footer in order
- **AND** the document title SHALL be "Mortar — Construction Company
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/mortar`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/mortar`)
- [ ] Section order matches the reference 1:1 (top bar → navbar → hero → about → trust → intro CTA → services → video CTA → counters → team → portfolio → pricing → testimonials → blog → FAQ → newsletter → footer)
- [ ] Design tokens in `@theme` (brand amber #ffa62b, dark charcoal #3d424a, footer #363b42, light #f8f9fa, Poppins 300/400/700)
- [ ] Top bar: contact info left, email + social icons right
- [ ] Navbar: `#3d424a` bg, "Mortar" wordmark, 7 links, hover `#ffa62b`, mobile hamburger collapse
- [ ] Hero: 100vh fixed bg image + dark overlay, "Since 1982" badge, centered H1 with amber "Happy", solid amber "Contact us" + dark "Request A Quote" CTAs with arrow icons
- [ ] About: photo + rotated `-90deg` `#3d424a` "38 Years of experienced" badge, kicker + "Quality and Affordable Constructor" heading, "We Can Help You" 2×2 mini-services (Construction / Architecture / Consulting / Mechanical)
- [ ] Trust band: bg-light, "Companies We've Worked With", 6 text client logos
- [ ] Intro CTA: bg image + overlay, kicker + "We Are Great Construction Company", white "Make An Appointment" button
- [ ] Services: "What We Do" / "Services", 3 cards (Construction / Infrastructure / Architecture Services) with icon + blurb + "Learn More"
- [ ] Video CTA: 80px amber circular play button, "Building Dreams Into Reality Since 1982", 4 check bullets, "Learn More About Us"
- [ ] Counters: bg-image band, 3000 / 320 / 1000 / 587 with labels
- [ ] Team: "Team & Staff" / "Qualified Engineers", 4 staff cards (photo + social overlay + name + "Senior Engineer")
- [ ] Portfolio: "Portfolio" / "Projects", 6 gallery tiles (3 cols, 340px) with search icon + "Building" + "High Tower Works"
- [ ] Pricing: "Our Pricing" / "Pricing & Packages", 4 cards (Basic $49K / Standard $79K / Premium $109K featured + "Most Popular" pill / Enterprise $149K+), check/cross feature lists, "Get Quote" buttons
- [ ] Testimonials: bg-light, "Testimonial" / "Happy Clients", carousel of Roger Scott quotes with avatar + controls
- [ ] Blog: "Our Blog" / "Recent Blog", 3 cards (image + "16 Jan" date badge + Admin/3 Comments meta + title + excerpt)
- [ ] FAQ: "Frequently Ask Question" / "You Want To Ask Something From Us?", accordion with 2 questions, aria-expanded
- [ ] Newsletter: `#ffa62b` band, heading + subtext, email input + dark Subscribe button
- [ ] Footer: `#363b42`, wordmark + blurb, Services links, Quick Links, "Have a Questions?" contact info, copyright + Component Dock link
- [ ] Responsive: all grids stack, mobile menu works, hero text scales

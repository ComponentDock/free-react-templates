# Template: Tide (Yacht & Sea Travel Template)

## Purpose

Tide is a single-page yacht-charter / sea-travel landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Waterboat" yacht charter website template (see TEMPLATES.md,
line 529 [Bootstrap section]; duplicate rows at line 1225 [Business] and 3015
[Travel] — same source, ONE implementation; mark EVERY copy `[x]` when done),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> **Naming note:** the natural name "waterboat" is the ColorLib source name —
> never reuse it. The NEW name is **Tide** (single lowercase word, verified
> free in `apps/`, `openspec/specs/`, and `docs/templates/`). "Tide" evokes
> the ocean, yachts and sea travel of the source while staying clearly
> original.

The reference is a yacht-charter landing ("WaterBoat — Website Template by
Colorlib"): a light top info bar (logo + 3 contact blocks with blue circular
icons) above a SOLID BLUE navbar with centered uppercase links, a 2-slide
full-bleed photo hero with blue dots + circular nav arrows, an image/text
about split with a serif label + underlined heading, a 3-card icon services
row (50px gray circles, blue icons), a blue-overlay photo stats band with 5
counters, a light "Our Destinations" grid of 6 shadowed cards with blue price
badges, an image + booking form split, a 4-person team grid with stacked
social squares, a 3-card testimonial row (bordered cards, 50px round avatars),
a blue-overlay CTA band with an ORANGE button, and a LIGHT footer (4 columns,
blue-underlined headings, blue links, centered copyright). The signature look
is the **bright blue `#1089ff`** applied to the navbar, buttons, icons, active
dots, heading underlines, price badges and links, with Oswald display
headings, Dancing Script serif section labels and Muli body text.

## Design tokens (from `https://preview.colorlib.com/theme/waterboat/`)

- **Brand blue:** `#1089ff` — `.btn-primary` background, `.sticky-wrapper
.site-navbar` navbar background, `.quick-contact-icons .icon` (40×40px
  circles, `border-radius: 50%`), `.service-29283` icon color, `.heading-
92913:after` underline (50×2px), `.hero-slide .owl-dots .owl-dot.active`
  bar, hero nav-arrow hover bg, `.price` badge (`bg-primary`, radius 4px,
  padding 5px 10px, white text), `.footer a` links + `.footer-heading > span`
  (2px bottom border), `.testimonial .client-name`, `.person .person-contents
.position`. Hover darkens to `#0076e9` (`.btn-primary:hover`).
- **Orange accent:** `#ffa139` — `.btn-warning` CTA button ("Contact Us"),
  text `#212529` (the vision check confirms an orange/amber button on the
  blue CTA band).
- **Text:** headings black `#000` (Oswald); body `color: gray` (≈`#888`),
  `font-weight: 300`, `font-size: 1.1rem`, `line-height: 1.7`; footer text
  `#888`.
- **Light background:** `#f8f9fa` (Bootstrap `.bg-light`) — `.header-top`
  info bar, Destinations section, and the FOOTER. NOTE: the `.footer {background:
#000 }` rule in style.css is DEAD — `.bg-light`'s `!important` wins, and the
  live preview confirms a white/light footer (headings black uppercase, links
  blue).
- **Icon circles:** `#efefef` 50×50px, `border-radius: 50%`, blue icon
  (`.service-29283`).
- **Overlay:** `rgba(16, 137, 255, 0.8)` — `.bg-image.overlay:after` blue
  tint over the stats band (`hero_1.jpg`) and CTA band (`hero_2.jpg`).
- **Cards/shadows:** destination card `.service-39381` — white,
  `box-shadow: 0 0 30px -5px rgba(0,0,0,0.2)`; testimonial `.testimony-39291`
  — 1px `#ccc` border, `border-radius: 4px`, `padding: 30px`, 16px text.
- **Fonts (Google Fonts `<link>` in `index.html`):** `"Oswald"` (400/700 —
  headings h1–h4, `.site-navbar`, buttons uppercase 14px `letter-spacing:
.2rem`, nav links uppercase 16px weight 900 `letter-spacing: .05rem`),
  `"Dancing Script"` (400/700 — `.text-serif` section labels: "About Us",
  "Destination", "Book Now", "Team", "Testimonial"), `"Muli"` (300/400 —
  body). Source URL: `fonts.googleapis.com/css?family=Oswald:400,700|Dancing+Script:400,700|Muli:300,400`.
- **Hero:** full-bleed background photos (`hero_1.jpg`, `hero_2.jpg`); white
  Oswald h1; `.btn-primary py-3 px-5` "Read More"; owl dots bottom-center
  (18×4px bars, white, active `#1089ff`); circular 70px white nav arrows
  (`border-radius: 50%`, black chevron, hover `#1089ff` bg + white icon).
- **Navbar active link:** white text + 2px WHITE underline bar (`left/right:
20px`), `.site-menu > li > a` white, uppercase, weight 900, padding
  `20px 20px`.

## Design reference (replication findings)

- **Original:** ColorLib "Waterboat" — yacht charter / sea travel website
  template (source: https://colorlib.com/wp/template/waterboat/). Listed in
  TEMPLATES.md line 529 (Bootstrap section); duplicate rows at lines 1225
  (Business) and 3015 (Travel) — same source, ONE implementation (line 529 is
  the claim row; mark ALL THREE `[x]` after merge).
  Screenshot: `waterboat-free-template.jpg` (1200×946, viewed in the browser):
  white top info bar (location / phone / email contact blocks with blue
  icons) above a SOLID BLUE navbar with white "WATERBOAT" logo and white
  uppercase links (HOME has a small underline), then a full-width luxury
  yacht photo hero with centered white serif headline "Enjoy The Ocean With
  Your Family", lorem subtext, a blue READ MORE button and two carousel dots
  (one blue = active, one white) at the bottom center; white section
  background below. The screenshot is cropped after the hero — the preview
  DOM is authoritative for the rest.
- **Live preview URL:** https://preview.colorlib.com/theme/waterboat/
  (reachable, HTTP 200, 27.8 KB, title "WaterBoat &mdash; Website Template by
  Colorlib"). HTML saved to `/tmp/waterboat.html`; stylesheet
  `https://preview.colorlib.com/theme/waterboat/css/style.css` (28.3 KB)
  saved to `/tmp/waterboat-style.css`; bootstrap 4
  `css/bootstrap.min.css` (27.9 KB) saved to `/tmp/waterboat-bootstrap.css`;
  screenshot `/tmp/waterboat-shot.jpg`. Plugin CSS: aos, bootstrap-
  datepicker, jquery-ui, fancybox, YTPlayer, owl.carousel — none needed in
  the recreation (carousel → static render of the 2 slides, datepickers →
  plain text inputs).
- **Visual design:** bright-blue `#1089ff` yacht-charter landing. Signature
  elements: SOLID BLUE navbar bar (centered links) below a light info bar;
  full-bleed photo hero slider; blue heading-underline bars (50×2px); serif
  Dancing Script section labels in blue; 50px gray-circle service icons;
  blue-overlay photo bands for stats + CTA with an orange `#ffa139` CTA
  button; shadowed white destination cards with blue price pills; LIGHT
  footer with blue-underlined headings. Flat, nautical, blue-accented.
- **Source quirks:** footer copyright credits ColorLib (replace with the
  MANDATORY Component Dock link `https://www.componentdock.com/`); the
  navbar is nested inside `.header-top` in the DOM but renders as a distinct
  solid blue bar (`.sticky-wrapper .site-navbar { background: #1089ff }`);
  logo is an image (`images/logo.png` with a `<!-- <strong>Water</strong>Boat
-->` comment) — recreate as text wordmark (e.g. "Tide" or "Tide" with a
  blue accent); hero owl carousel duplicates slides for looping (render the
  2 unique slides statically); nav links point to subpages (about.html etc.)
  — keep plain links; date fields use a datepicker (plain inputs fine);
  stats/CTA bands use fixed photo backgrounds (picsum seeds).

## Requirements

### Requirement: Light top info bar with logo and contact blocks

The system SHALL render a light `#f8f9fa` top bar with the brand logo and
three quick-contact blocks.

#### Scenario: Desktop info bar

- **GIVEN** the Tide app is rendered
- **WHEN** the page loads
- **THEN** a light-gray top bar SHALL show the brand wordmark on the left
- **AND** three contact blocks SHALL follow on desktop (hidden below the lg
  breakpoint): each with a 40px blue circular icon and a two-line label
  (heading + caption)
- **AND** the blocks SHALL read: "San Francisco" / "Mountain View, Fake st.,
  CA" (map-pin icon), "000 209 392 312" / "Toll free" (phone icon),
  "info@gmail.com" / "Gournadi, 1230 Bariasl" (mail icon)

#### Scenario: Mobile info bar

- **GIVEN** the info bar is rendered
- **WHEN** the viewport is narrower than the lg breakpoint
- **THEN** the contact blocks SHALL be hidden and a hamburger button SHALL
  appear on the right with `aria-expanded` reflecting the open state
- **AND** activating it SHALL open a stacked mobile menu panel with the nav
  links and a close control

### Requirement: Solid blue navbar with centered links

The system SHALL render a solid blue `#1089ff` navbar below the info bar with
centered uppercase navigation links.

#### Scenario: Desktop navbar

- **GIVEN** the navbar is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL have a solid `#1089ff` background and Oswald
  uppercase white links centered: Home (active, with a 2px white underline) ·
  About Us · Services · Testimonials · Blog · Contact
- **AND** the navbar SHALL stick to the top when the page scrolls

### Requirement: Two-slide full-bleed photo hero

The system SHALL render a full-bleed photo hero slider with two slides.

#### Scenario: Hero slide content

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show full-width yacht photos as slide backgrounds with a
  white Oswald h1, a lorem paragraph and a blue "Read More" button
- **AND** slide one SHALL be right-aligned with "Explore, Discover The
  Ocean" and slide two SHALL be centered with "Enjoy The Ocean With Your
  Family"
- **AND** two carousel indicator bars SHALL sit at the bottom center (18×4px,
  white, the active one `#1089ff`)

#### Scenario: Hero navigation

- **GIVEN** the hero has more than one slide
- **WHEN** the user activates the next/prev control
- **THEN** the visible slide SHALL advance (a static render of both slides
  with accessible controls is acceptable)

### Requirement: About split with serif label and underlined heading

The system SHALL render an about section: image left, text right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** it loads
- **THEN** a photo SHALL sit on the left and on the right a Dancing Script
  blue label "About Us", a black Oswald h3 "Welcome To Our Website" with the
  50×2px blue underline bar, two lorem paragraphs and a blue "Learn More"
  button SHALL render

### Requirement: Three-card services row with circular icons

The system SHALL render three service cards with 50px gray circular icons.

#### Scenario: Services content

- **GIVEN** the services section is rendered
- **WHEN** it loads
- **THEN** three cards SHALL render (stacking on mobile), each with a 50px
  `#efefef` circle containing a blue icon, an Oswald h3 title and a lorem
  paragraph
- **AND** the titles SHALL be "Luxuries Yacht", "30 Years of Experience" and
  "Good Captain"

### Requirement: Blue-overlay stats band with five counters

The system SHALL render a photo band with a blue `rgba(16,137,255,0.8)`
overlay and five white counters.

#### Scenario: Counter content

- **GIVEN** the stats band is rendered
- **WHEN** it loads
- **THEN** five counters SHALL render in a row (wrapping on mobile), each a
  white Oswald number with a white caption
- **AND** the pairs SHALL read: 349 "Number of Yacht", "7000+" "Customers
  Satisfied", 120 "Number of Staffs", 493 "Sea Destinations", 230
  "Professional Sailors"

### Requirement: Our Destinations card grid

The system SHALL render a light section with six shadowed destination cards.

#### Scenario: Destination cards

- **GIVEN** the destinations section is rendered
- **WHEN** it loads
- **THEN** a centered header SHALL render the Dancing Script blue label
  "Destination" and the black h3 "Our Destinations" with a centered underline
  bar
- **AND** six white cards SHALL render (3 columns, wrapping), each with a
  photo, an h3 title "Croatia &mdash; Columbia" with a blue location icon, a
  date row "Sep. 05 &mdash; Oct. 15" with a calendar icon, and a blue
  price badge "$600" (radius 4px, white text)

### Requirement: Booking form split

The system SHALL render a booking section: image left, form right.

#### Scenario: Booking form fields

- **GIVEN** the booking section is rendered
- **WHEN** it loads
- **THEN** a photo SHALL sit on the left and on the right the Dancing Script
  blue label "Book Now", the h3 "Book A Yacht" and a form SHALL render
- **AND** the form SHALL have labeled fields: Full Name, Number of People,
  Date From, Date To, a yacht select (Motor Yacht · Hi-Speed Yacht · Premium
  Yacht · Presidential Yacht), Email Address, Phone Number and a Notes
  textarea
- **AND** a blue "Book Now" submit button SHALL submit the form

### Requirement: Team grid with social overlays

The system SHALL render four team members with stacked social squares.

#### Scenario: Team cards

- **GIVEN** the team section is rendered
- **WHEN** it loads
- **THEN** a centered header SHALL render "Team" (serif blue) and "Our Team"
  (black h3 with centered underline)
- **AND** four cards SHALL render, each with a photo, stacked white social
  squares (facebook, twitter, linkedin) at the bottom-left of the photo, a
  black Oswald name "Craig Daniel" and a blue "Engineer" position

### Requirement: Testimonial cards

The system SHALL render three bordered testimonial cards.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** it loads
- **THEN** a centered header SHALL render "Testimonial" (serif blue) and
  "What Customer Saying..." (black h3 with centered underline)
- **AND** three cards SHALL render (1px `#ccc` border, 4px radius, 30px
  padding), each with a blue quote icon, a lorem blockquote, a 50px circular
  avatar, a blue name "John Doe" and the role "CEO and Co-Founder"

### Requirement: Blue CTA band with orange button

The system SHALL render a photo band with a blue overlay, white heading and
an orange button.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** it loads
- **THEN** a white h2 "Get In Touch With Us" and a lorem lead SHALL render
  centered over the blue-tinted photo band
- **AND** an orange `#ffa139` "Contact Us" button SHALL render below

### Requirement: Light footer with four columns

The system SHALL render a light `#f8f9fa` footer with four columns and the
Component Dock credit.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** column one SHALL show the brand, a lorem paragraph and a "Learn
  More" link
- **AND** column two SHALL list "Our Company": About · News · Services · Our
  Team · Careers · Projects
- **AND** column three SHALL list "Our Services": Industrial · Construction ·
  Remodeling
- **AND** column four SHALL list "Contact": Help Center · Support Community ·
  Press · FAQ · Our Partners
- **AND** each column heading SHALL be black uppercase with a 2px blue bottom
  border on the heading span, and links SHALL be blue
- **AND** a centered copyright line SHALL render crediting Component Dock
  with a link to `https://www.componentdock.com/` (NO ColorLib credit)

### Requirement: Full page render

The system SHALL compose all sections in order on one page.

#### Scenario: Full page render

- **GIVEN** the Tide app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the info bar + navbar (banner landmark),
  hero + about + services + stats + destinations + booking + team +
  testimonials + CTA (main landmark) and the footer (contentinfo landmark)
- **AND** the document title SHALL be "Tide — Yacht & Sea Travel Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (info bar
  collapses to the hamburger, grids collapse to 1 column, counters wrap,
  footer columns stack)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/tide`
      (`scripts/verify-app.sh tide` in FAST_MODE; full `npm run gate` in CI).
- [ ] Visual fidelity: light info bar (brand + 3 blue-circle contact blocks,
      hamburger on mobile), solid blue navbar (centered white uppercase
      links, active underline, sticky), hero (2 full-bleed yacht photos,
      white h1 + paragraph + blue "Read More", 18×4px dots, circular arrows),
      about (image left; serif blue "About Us" + underlined h3 + 2 paragraphs + "Learn More" right), services (3 cards, 50px gray circles + blue
      icons), stats (blue-overlay photo band, 5 white counters), destinations
      (light bg, centered header, 6 shadowed cards with blue price badges),
      booking (image left, labeled form + blue "Book Now" right), team (4
      cards, stacked white social squares, blue positions), testimonials (3
      bordered cards, blue quote icon, 50px round avatars, blue names), CTA
      (blue band, white h2, orange "Contact Us"), footer (light `#f8f9fa`, 4
      columns, black uppercase headings with blue underline, blue links,
      Component Dock credit) match the Waterboat preview 1:1.
- [ ] Design tokens in `@theme`: brand blue `#1089ff` (hover `#0076e9`),
      orange `#ffa139`, heading black, body gray 300, light `#f8f9fa`,
      icon-circle `#efefef`, footer text `#888`, overlay
      `rgba(16,137,255,0.8)`; fonts Oswald + Dancing Script + Muli via
      Google Fonts `<link>` in `index.html`.
- [ ] Placeholder images use `picsum.photos/seed/tide-<n>/<w>/<h>` (2 hero
      backgrounds, about photo, 6 destination photos, 4 team portraits, 3
      testimonial avatars, stats/CTA backgrounds); icons from lucide-react
      (map-pin, phone, mail, menu, x, anchor, shield, user-check, calendar,
      message-quote, facebook/twitter/linkedin as inline SVGs — lucide has
      NO brand icons); no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Waterboat"), preview
      URL (https://preview.colorlib.com/theme/waterboat/), design tokens, and
      what differs (name, text wordmark instead of logo image, placeholder
      images, paraphrased copy, no subpages, single page only, plain date
      inputs instead of datepicker).

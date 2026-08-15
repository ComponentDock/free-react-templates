# Template: Marina (Yacht Charter)

## Purpose

Marina is a single-page yacht-charter/business website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Waterboat" template design
(source: https://colorlib.com/wp/template/waterboat/), built under a
DIFFERENT name (**Marina** — a harbour for pleasure boats, per the monorepo
naming mandate — never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a full business landing page for a yacht charter company:
a contact top-bar + sticky navbar, a two-slide full-screen hero carousel with
ocean/yacht photography, a welcome intro, three feature cards, a blue-overlay
parallax stats band, a destination-card grid with prices, a booking form,
a team carousel, testimonials, a contact CTA, a final parallax CTA banner and
a 4-column footer.

> NAMING NOTE: the ColorLib source name "Waterboat" is FORBIDDEN as the app
> name. **Marina** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15 against origin/main).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Waterboat" — a yacht charter company landing page
  in TEMPLATES.md. **THREE duplicate rows exist** — mark ALL of them `[x]` +
  the same surge URL when done: line 529 (Bootstrap (216)), line 1225
  (Business (365)), line 3017 (Travel (44)).
- **Preview URL:** `https://preview.colorlib.com/theme/waterboat/` (HTTP 200,
  27,751 bytes HTML, verified 2026-08-15). Document title: "WaterBoat —
  Website Template by Colorlib". Stylesheets: `css/style.css` (28,284 bytes —
  the template's custom styles, fully extracted for tokens), plus Bootstrap 4
  (`css/bootstrap.min.css`), `owl.carousel.min.css` + `owl.theme.default.min.css`
  (hero + team + testimonials carousels), `jquery-ui.css`,
  `bootstrap-datepicker.css` (booking form date fields), `aos.css`,
  `jquery.fancybox.min.css`, `jquery.mb.YTPlayer.min.css`, and icon fonts
  (`fonts/flaticon/font/flaticon.css`, `fonts/icomoon/style.css`). libs:
  bootstrap 4, jquery, owl carousel 2.
- **Google Fonts (3 families, from the head link):** **Oswald** 400/700
  (headings + buttons + navbar), **Dancing Script** 400/700 (`.text-serif`
  accent), **Muli** 300/400 (body).
- **Screenshot cross-check:** TEMPLATES.md screenshot
  `waterboat-free-template.jpg` (1200×946, browser-viewed 2026-08-15)
  matches the live DOM: white top strip with contact info + logo, solid
  bright-blue navbar, full-width yacht hero with white text (no heavy dark
  overlay), blue "READ MORE" button, two white dash slider indicators. The
  screenshot cuts off just below the hero — everything below comes from the
  live DOM.
- **Visual design (from DOM + CSS tokens + screenshot):** nautical, clean,
  blue-and-white. Brand blue `#1089ff` drives the navbar, buttons, icon
  accents, active states, price badges and the 80%-opacity blue overlay on
  the parallax bands. Headings are condensed uppercase Oswald; body is light
  Muli gray on white; light-grey (`bg-light`) sections alternate with white.
  Destination cards are white with a soft drop shadow and a blue price chip.
  The stats band and the final CTA banner use fixed-attachment background
  images under `rgba(16,137,255,0.8)`.
- **Section order (1:1, from live preview DOM):**
  1. **Top bar** (`div.header-top.bg-light`) — left: logo (sailboat line
     icon + "Water" "Boat" two-tone wordmark); right: 3 `quick-contact-icons`
     blocks: (a) "San Francisco" / "Mountain View, Fake st., CA" (location),
     (b) "000 209 392 312" / "Toll free" (phone), (c) "info@gmail.com" /
     [email label] (email).
  2. **Navbar** (`div.site-navbar`, sticky, Oswald, brand-blue bg): links
     Home, About Us, Services, Testimonials, Blog, Contact — white uppercase
     16px, active link has a 2px white underline; hamburger on mobile.
  3. **Hero slider** (`div.hero-slide.owl-carousel.site-blocks-cover`,
     full-screen, 2 slides): slide 1 "Explore, Discover The Ocean", slide 2
     "Enjoy The Ocean With Your Family" — each with a lorem paragraph and a
     blue "Read More" button; owl dots = two 18×4px white dashes (active
     dash `#1089ff`), bottom center.
  4. **Welcome intro** (`div.intro-section`): H3 "Welcome To Our Website" +
     2 lorem paragraphs + "Learn More" link/button.
  5. **Features** (`div.intro-section` → 3 × `div.service-29283`): "Luxuries
     Yacht", "30 Years of Experience", "Good Captain" — each a 70px icon
     (brand blue) inside a light `#efefef` circle + H3 (20px, black) + one
     paragraph.
  6. **Stats band** (`div.site-section.bg-image.overlay` →
     `div.counter-39392`, fixed-attachment photo + `rgba(16,137,255,0.8)`
     overlay, 5 centered counters, white 50px numbers): 349 "Number of
     Yacht", 7000+ "Customers Satisfied", 120 "Number of Staffs", 493 "Sea
     Destinations", 230 "Professional Sailors".
  7. **Destinations** (`div.site-section.bg-light`): H3 "Our Destinations" +
     6 × `div.service-39381` cards (white, `box-shadow: 0 0 30px -5px
rgba(0,0,0,.2)`): destination photo, H3 "Croatia — Columbia" (18px,
     black), "Sep. 05 — Oct. 15" dates, blue price chip "$600" (radius 4px,
     padding 5px 10px).
  8. **Book A Yacht** (`div.site-section`): H3 "Book A Yacht" + form with
     labeled fields — Full Name (text), Number of People (text), Date From
     (datepicker), Date To (datepicker), Yacht You're Interested in
     (select: Motor Yacht, Hi-Speed Yacht, Premium Yacht, Presidential
     Yacht), Email Address (text), Phone Number (text), Notes (textarea) —
     submit button "Book Now" (`btn btn-primary py-3 px-5`).
  9. **Our Team** (`div.site-section`, owl carousel): H3 "Our Team" + 4 ×
     person cards (`div.person`): photo (hover `scale(1.05)`), name H3
     (black) e.g. "Craig Daniel", role `.position` in brand blue e.g.
     "Engineer", social icon strip overlay bottom-left.
  10. **Testimonials** (`div.site-section`): "What Customer Saying..." + 3
      lorem quotes + author block "John Doe" / "CEO and Co-Founder" (owl
      carousel).
  11. **Contact** (`div.site-section`): H2 "Get In Touch With Us" + one
      paragraph + "Contact Us" button/link.
  12. **CTA banner** (`div.site-section.bg-image.overlay`, fixed-attachment
      photo + blue overlay): one paragraph + "Learn More" button.
  13. **Footer** (`footer.bg-light`): 4 columns — "Our Company" (About,
      News, Services, Our Team, Careers, Projects), "Our Services"
      (Industrial, Construction, Remodeling), "Contact" (Help Center,
      Support Community, Press, FAQ, Our Partners) — plus a copyright bar
      ("Copyright © All rights reserved | This template is made with by
      Colorlib" — the ColorLib attribution is REPLACED by the mandated
      Component Dock link, see Recreation decisions).
- **Design tokens extracted from `css/style.css` + screenshot:**
  - Brand: **`#1089ff`** (bright blue) — navbar bg, buttons, feature icons,
    team role text, price chips, active owl dash, and overlay
    `rgba(16,137,255,0.8)` on parallax bands
  - Headings: **black `#000`**; body text: Bootstrap `gray` (≈`#6c757d`),
    weight 300, size 1.1rem, line-height 1.7
  - Section backgrounds: white `#fff`; light grey `#f8f9fa` (Bootstrap
    `bg-light`, used for top bar, destinations, footer); feature icon
    circle `#efefef`
  - Cards (`service-39381`): white, `box-shadow: 0 0 30px -5px
rgba(0,0,0,0.2)`; price chip radius 4px, padding 5px 10px, white text
  - Buttons (`.btn`): `text-transform: uppercase`, 14px,
    `letter-spacing: .2rem`, font Oswald; solid brand-blue bg, white text
    (screenshot), Bootstrap-style radius/padding; "Book Now" uses
    `btn-primary py-3 px-5`
  - Hero owl dots: 18×4px rectangles (0% radius), white; active `#1089ff`;
    positioned bottom 30px centered
  - Navbar: Oswald; links uppercase 16px `letter-spacing: .05rem`; active
    link white with 2px white underline
  - Parallax bands: `background-attachment: fixed` + `rgba(16,137,255,0.8)`
    overlay
  - Stats: `text-align: center`, numbers 50px white, labels white
  - Person cards: name H3 black; role `#1089ff`; hover image `scale(1.05)`;
    social strip absolute bottom-left
- **Recreation decisions:** no copied assets — placeholder images via
  `https://picsum.photos/seed/marina-<n>/<w>/<h>` (hero slides, destination
  cards, team photos, parallax band backgrounds); Google Fonts (Oswald,
  Dancing Script, Muli) via `<link>` in `index.html`; icons from
  `lucide-react` (feature icons, contact icons) + inline SVG for brand
  social icons (lucide-react has no brand glyphs). The booking form is a
  controlled React form (no datepicker lib — plain date inputs) with a
  submit-success state; the hero/team/testimonial carousels can be built
  with index-based state (no owl.js). Parallax `background-attachment:
fixed` is approximated with `bg-fixed`. The footer's ColorLib attribution
  line is REPLACED with the mandated
  "More templates at Component Dock" link to https://www.componentdock.com/
  (per repo TPW policy — no ColorLib anywhere in app code). Copy is
  paraphrased but keeps the same content kinds (destination names/dates/
  prices, team names/roles, contact placeholders).

Marina lives in `apps/marina` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Top bar with brand and contact info

The system SHALL render a light top bar above the navbar with the site logo
on the left and three contact blocks on the right.

#### Scenario: Top bar content

- **GIVEN** the Marina page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a logo (sailboat mark + wordmark) on the
  left
- **AND** the top bar SHALL show three contact blocks: location ("San
  Francisco" + "Mountain View, Fake st., CA"), phone ("000 209 392 312" +
  "Toll free"), and email ("info@gmail.com")
- **AND** each block SHALL have a leading line icon

### Requirement: Sticky navbar

The system SHALL render a brand-blue sticky navbar with six uppercase white
links and a visible active-link indicator.

#### Scenario: Navbar links and active state

- **GIVEN** the Marina page is rendered
- **WHEN** the user views the navbar
- **THEN** the navbar SHALL show the links Home, About Us, Services,
  Testimonials, Blog, Contact in order, uppercase white text
- **AND** the active link SHALL show a 2px white underline
- **AND** the navbar SHALL stay fixed at the top when the page scrolls
- **AND** on small screens the links SHALL collapse into a hamburger menu
  that opens a slide-down panel

### Requirement: Hero slider with two slides

The system SHALL render a full-screen hero carousel with two slides, each
with a headline, paragraph and CTA, plus dash-style indicators.

#### Scenario: Slide one

- **GIVEN** the hero slider is displayed
- **WHEN** the first slide is active
- **THEN** the slide SHALL show the headline "Explore, Discover The Ocean"
- **AND** a supporting paragraph SHALL appear
- **AND** a blue "Read More" button SHALL link to the next section

#### Scenario: Slide two

- **GIVEN** the hero slider is displayed
- **WHEN** the carousel advances to the second slide
- **THEN** the slide SHALL show the headline "Enjoy The Ocean With Your
  Family"
- **AND** a supporting paragraph and a blue "Read More" button SHALL appear

#### Scenario: Indicators and autoplay

- **GIVEN** the hero slider is displayed
- **WHEN** the user inspects the indicators
- **THEN** two dash indicators SHALL sit at the bottom center (white 18×4px
  dashes; the active one brand blue)
- **AND** the slides SHALL advance automatically and via the indicators

### Requirement: Welcome intro

The system SHALL render an intro section with a heading, two paragraphs and
a "Learn More" action.

#### Scenario: Intro content

- **GIVEN** the intro section is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the H3 heading "Welcome To Our Website"
- **AND** two paragraphs of intro copy
- **AND** a "Learn More" link/button

### Requirement: Feature cards

The system SHALL render three feature cards, each with a circular icon, a
title and a description.

#### Scenario: Three features

- **GIVEN** the features row is rendered
- **WHEN** the user views it
- **THEN** exactly three cards SHALL appear: "Luxuries Yacht", "30 Years of
  Experience", "Good Captain"
- **AND** each card SHALL show a brand-blue icon inside a light `#efefef`
  circle above a 20px black title and one description paragraph

### Requirement: Stats band

The system SHALL render a parallax band with a blue overlay and five
white-numbered counters with labels.

#### Scenario: Five counters

- **GIVEN** the stats band is rendered
- **WHEN** the user views it
- **THEN** the band SHALL have a fixed-attachment background image under a
  `rgba(16,137,255,0.8)` overlay
- **AND** five centered white counters SHALL appear: "349" (Number of
  Yacht), "7000+" (Customers Satisfied), "120" (Number of Staffs), "493"
  (Sea Destinations), "230" (Professional Sailors)
- **AND** the numbers SHALL be large (≈50px) and the labels smaller, both
  white

### Requirement: Destinations grid

The system SHALL render a light-grey section with a heading and six
destination cards, each with a photo, name, dates and a price chip.

#### Scenario: Six destination cards

- **GIVEN** the destinations section is rendered
- **WHEN** the user views it
- **THEN** the section SHALL show the H3 heading "Our Destinations"
- **AND** a responsive grid SHALL show six white cards (soft drop shadow),
  each with a destination photo, a title like "Croatia — Columbia", a date
  range like "Sep. 05 — Oct. 15", and a blue price chip like "$600"
- **AND** the price chip SHALL have a 4px radius and 5px/10px padding

### Requirement: Booking form

The system SHALL render a "Book A Yacht" section with a labeled form and a
submit action that shows a success state.

#### Scenario: Form fields

- **GIVEN** the booking section is rendered
- **WHEN** the user views the form
- **THEN** the section SHALL show the H3 heading "Book A Yacht"
- **AND** the form SHALL contain labeled fields: Full Name, Number of
  People, Date From, Date To, Yacht You're Interested in (select with Motor
  Yacht, Hi-Speed Yacht, Premium Yacht, Presidential Yacht), Email Address,
  Phone Number, and Notes (textarea)
- **AND** a "Book Now" submit button SHALL be present

#### Scenario: Submit success

- **GIVEN** the form is filled with valid values
- **WHEN** the user submits it
- **THEN** the form SHALL show a confirmation/success message
- **AND** the input fields SHALL no longer be present (success replaces the
  form)

### Requirement: Team carousel

The system SHALL render an "Our Team" section with four person cards showing
a photo, name, role and social icons.

#### Scenario: Four team members

- **GIVEN** the team section is rendered
- **WHEN** the user views it
- **THEN** the section SHALL show the H3 heading "Our Team"
- **AND** four person cards SHALL appear (carousel on mobile, grid on
  desktop), each with a photo (hover: slight zoom), a black name (e.g.
  "Craig Daniel"), a brand-blue role (e.g. "Engineer"), and a social icon
  strip overlaid at the bottom-left of the photo

### Requirement: Testimonials

The system SHALL render a testimonials carousel with a heading, quotes and
author attributions.

#### Scenario: Testimonial quotes

- **GIVEN** the testimonials section is rendered
- **WHEN** the user views it
- **THEN** the section SHALL show the heading "What Customer Saying..."
- **AND** three quotes SHALL rotate (carousel), each with an author name
  and role (e.g. "John Doe" / "CEO and Co-Founder")

### Requirement: Contact CTA

The system SHALL render a contact section with a heading, a paragraph and a
"Contact Us" action.

#### Scenario: Contact content

- **GIVEN** the contact section is rendered
- **WHEN** the user scrolls to it
- **THEN** it SHALL show the H2 heading "Get In Touch With Us"
- **AND** one supporting paragraph
- **AND** a "Contact Us" button/link

### Requirement: CTA banner

The system SHALL render a final parallax banner with a blue overlay, one
paragraph and a "Learn More" button.

#### Scenario: Banner content

- **GIVEN** the CTA banner is rendered
- **WHEN** the user views it
- **THEN** the banner SHALL have a fixed-attachment background image under
  the blue overlay
- **AND** SHALL show one paragraph and a "Learn More" button

### Requirement: Footer

The system SHALL render a light 4-column footer plus a copyright bar with
the mandated Component Dock link.

#### Scenario: Footer columns and attribution

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL show four columns: "Our Company" (About, News,
  Services, Our Team, Careers, Projects), "Our Services" (Industrial,
  Construction, Remodeling), "Contact" (Help Center, Support Community,
  Press, FAQ, Our Partners)
- **AND** a copyright bar SHALL show the year and a link to
  https://www.componentdock.com/ ("Component Dock") — the source's
  "made with by Colorlib" attribution is REPLACED per repo policy (no
  ColorLib references in app code)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Marina app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the sections in this order: top bar →
  navbar → hero slider → welcome intro → features → stats → destinations →
  booking → team → testimonials → contact → CTA banner → footer, inside a
  `<main>` landmark
- **AND** the document title SHALL be "Marina — Yacht Charter Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh marina` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the preview 1:1 (top bar → navbar → hero slider
      → intro → features → stats → destinations → booking → team →
      testimonials → contact → CTA banner → footer)
- [ ] Design tokens in `@theme`: brand `#1089ff`, heading `#000`, body gray,
      light bg `#f8f9fa`, icon circle `#efefef`, overlay
      `rgba(16,137,255,0.8)`
- [ ] Fonts via Google Fonts `<link>`: Oswald (headings/buttons/navbar),
      Dancing Script (accent), Muli (body)
- [ ] Navbar: brand-blue bg, uppercase white Oswald links, active 2px white
      underline, sticky, mobile hamburger
- [ ] Hero: two slides with the two reference headlines, auto-advance, dash
      indicators (18×4px white, active blue)
- [ ] Stats band: fixed-attachment photo + blue overlay, 5 white counters
      with the reference numbers/labels
- [ ] Destination cards: white, soft shadow, photo + title + dates + blue
      price chip (4px radius)
- [ ] Booking form: all 8 labeled fields + select options (Motor Yacht,
      Hi-Speed Yacht, Premium Yacht, Presidential Yacht) + "Book Now" with
      success state replacing the form
- [ ] Team: 4 person cards, black name + blue role + social overlay,
      hover zoom
- [ ] Testimonials: heading + rotating quotes with author/role
- [ ] Contact CTA ("Get In Touch With Us" + "Contact Us") and final parallax
      CTA banner ("Learn More")
- [ ] Footer: 4 columns + copyright bar linking
      https://www.componentdock.com/ (NO ColorLib attribution — repo
      mandate)
- [ ] No copied assets: picsum seeds `marina-<n>`, lucide icons + inline
      SVG brand icons
- [ ] `TEMPLATES.md` THREE duplicate rows marked by the implementer
      (`[~]` → `[x]` + surge URL): line 529 (Bootstrap), line 1225
      (Business), line 3017 (Travel) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)

# Template: Mosaic (Digital Agency / Creative Portfolio)

## Purpose

Mosaic is a single-page digital agency / creative studio landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Snipp" website template design
(source: https://colorlib.com/wp/template/snipp/), built under a DIFFERENT
name (Mosaic — evoking a mosaic of creative works, fitting an agency
portfolio) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **mosaic** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`snipp`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Mosaic lives in `apps/mosaic` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Design reference (replication findings)

- **Original:** ColorLib "Snipp" — bright, modern digital agency / creative
  studio one-page template (Bootstrap 4 + jQuery + particles.js + AOS +
  Owl Carousel). Demo brand "Snipp."; the recreation brands itself
  **Mosaic**.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/snipp/`
  (reachable; DOM fetched — 36KB HTML, 69KB `css/style.css` — and visually
  inspected via browser).
- **Screenshot:** `snipp-free-template.jpg` in TEMPLATES.md — white page
  with a full-width pink→peach gradient hero, centered white headline,
  white pill CTAs, masonry portfolio image grid below, light-blue accent
  buttons, blue counter band, dark footer.
- **Stack of the source:** Bootstrap 4 + jQuery + particles.js + Owl
  Carousel + AOS + flaticon/ionicons. Recreation must NOT copy any of this;
  use the monorepo stack + lucide-react icons + picsum placeholders.

### Section order (1:1, confirmed from preview DOM)

1. Navbar (`.ftco_navbar.bg-dark`) — dark, transparent-over-hero brand
   "Snipp." (→ "Mosaic."), links Home, About, Services, Portfolio, Case
   Studies, Contact; white filled pill CTA "Get in touch" (pink text).
2. Hero (`.hero-wrap.js-fullheight`) — full-viewport, brand-gradient
   overlay (`linear-gradient(45deg, #ee76ad 0%, #efac78 100%)`, opacity
   .97) with a particles.js dot/network canvas on top; centered H1 "We
   love to create Beautiful websites" ("Beautiful" bold), ghost CTA "Get
   in touch" (transparent, white border, white text).
3. Featured works (`#portfolio`, `.ftco-section-featured`) — asymmetric
   masonry grid (rows: 3/6/3, 12, 8/4, 8/4, 3) of 6 portfolio tiles: The
   Verge, Racks, Zendesk, Curator, Tasty, Voyage — each with an image, a
   "Website" category tag, and a "Designer" credit; then an About split
   (`.heading-section`): H2 "UI/UX, visual, Web designer with more than
   12 years of experience in designing websites and mobile apps." + pill
   CTA "Get in touch".
4. Services (`#services`, `.ftco-section`) — centered heading "Our
   Services" + blurb; 4 cards (`.media.block-6.services`): "Strategy",
   "Design", "Development", "Help & Supports" — each with a hexagon icon
   chip (4 tinted color variants) + title + blurb.
5. Newsletter (`#subscribe`, `.ftco-section-parallax`) — parallax band on
   the same brand gradient; centered heading "Subscribe to our Newsletter"
   - blurb; email input with paper-plane icon (`.subscribe-form`).
6. Works (`#work`, `.ftco-section`) — centered heading "Works" + blurb
   "View our works below to see our design and way of development."; 3
   horizontal portfolio cards (`.block-3`): "Illustration", "Application",
   "Web Design" — image left, text right, "View Portfolio" pill button.
7. Testimonials (`#testimonial`, `.ftco-section.testimony-section.bg-light`)
   — centered heading "Customer Says" + subtitle "Our satisfied customer
   says"; 5 testimonial cards (`.testimony-wrap`): avatar image + quote +
   name/role (e.g. "Dennis Green — Marketing Manager").
8. Counter (`#counter`, `.ftco-section.ftco-counter`) — blue band
   (`#29bae4`); centered heading "Our achievements"; 3 counters
   (`.block-18`): 400 "Customers are satisfied with our professional
   support", 1000 "Amazing preset options to be mixed and combined", 8000
   "Average response time on live chat support channel" — numbers animate
   0 → target on scroll into view.
9. Blog (`#blog`, `.ftco-section.bg-light`) — centered heading "Blog" +
   subtitle "Recent Blog"; 3 blog entries (`.blog-entry`): date "July 12,
   2018", "Admin", "3" comments, title, excerpt.
10. Footer (`.ftco-footer.ftco-bg-dark`) — dark brown `#3c312e`; 3 widgets
    (About "Mosaic." blurb, Quick Links, Contact Information with address
    "198 West 21th Street, Suite 721, New York NY 10016", phone
    "+ 1235 2355 98", emails); social icon circles (twitter, facebook,
    instagram); copyright line; footer MUST link
    https://www.componentdock.com/ ("Component Dock") per monorepo rule.

## Design tokens (from preview stylesheet `css/style.css`)

- **Brand gradient:** `linear-gradient(45deg, #ee76ad 0%, #efac78 100%)`
  — hero overlay (`.hero-wrap .overlay`, opacity .97) and newsletter
  parallax band (`.parallax-img`). Brand pink `#ee76ad`, brand peach
  `#efac78`.
- **Primary button blue:** `#78d5ef` (`.btn-primary`), hover `#56caeb`,
  border `#4ac7ea`. Counter band `#29bae4`.
- **Backgrounds:** page `#fff`; light sections `#f8faff` (`.bg-light`);
  footer `#3c312e`; hero/nav dark treatment over the gradient.
- **Text:** headings `#404044`; body/muted `#6c757d`, `#a5a5ab`; hero text
  `#fff`; counter labels `rgba(255,255,255,0.7)`, numbers `#fff`.
- **Fonts:** `"Work Sans", sans-serif` (weights 100–400+ used; light
  weights for large headings, bold for emphasis words). Load via Google
  Fonts `<link>` in index.html (no font files copied).
- **Buttons:** pill shape — `border-radius: 30px` (dominant radius in
  source); `px-5 py-3` scale padding on primary CTAs. Hero ghost CTA:
  transparent, `1px` white border, white text. Nav CTA: white filled pill,
  pink text. Section CTAs: `#78d5ef` filled pill, dark text.
- **Service icon chips (hexagon):** color-1 bg `#fce7f1` + icon `#ee76ad`;
  color-2 bg `#fdf2ea` + icon `#efac78`; color-3 bg `#def4fb` + icon
  `#29bae4`; color-4 bg `#ebfdf4` + icon `#79efb4`. Hexagon via
  triangle pseudo-element borders (top/bottom).
- **Heading sizes:** section H2 40px; card H3 20px; body 16px; counter
  numbers 40px weight 400, counter labels 20px.
- **Section rhythm:** `padding: 7em 0` per section; parallax and counter
  bands `10em 0`; footer `12em 0 8em`; `.container` max-width ~1200px
  (Bootstrap).
- **Hero pattern:** particles.js dot/network canvas over the gradient
  (recreate as a subtle SVG/CSS dot-grid pattern — NO copied particle
  library).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky dark navbar with the brand "Mosaic.", the
section links Home, About, Services, Portfolio, Case Studies, Contact, and a
white filled pill CTA "Get in touch".

#### Scenario: Navbar content

- **GIVEN** the Mosaic page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be fixed at the top with the brand "Mosaic."
- **AND** it SHALL list exactly the links Home, About, Services, Portfolio, Case Studies, Contact
- **AND** it SHALL show a filled white pill CTA labeled "Get in touch"

#### Scenario: Smooth scroll

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is clicked
- **THEN** the page SHALL smooth-scroll to the matching section

#### Scenario: Mobile navigation

- **GIVEN** a viewport narrower than 768px
- **WHEN** the hamburger toggler is clicked
- **THEN** the menu SHALL expand with aria-expanded toggled
- **AND** the links SHALL remain tappable

### Requirement: Hero section

The system SHALL render a full-viewport hero on the brand gradient with a
subtle dot-network pattern overlay, a centered headline with an emphasized
word, and a ghost CTA.

#### Scenario: Hero layout

- **GIVEN** the Mosaic page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL fill the viewport height with the brand gradient (45deg #ee76ad → #efac78) and a subtle dot-network pattern overlay
- **AND** the content SHALL be centered
- **AND** an H1 SHALL read "We love to create Beautiful websites" with "Beautiful" emphasized
- **AND** a ghost CTA button labeled "Get in touch" (transparent, white border, pill) SHALL be present

#### Scenario: Hero CTA

- **GIVEN** the hero CTA is rendered
- **WHEN** the CTA is clicked
- **THEN** the page SHALL scroll to the portfolio section

### Requirement: Featured works and About split

The system SHALL render an asymmetric masonry grid of 6 portfolio tiles,
each with an image, a category tag, and a designer credit, followed by an
About heading with a CTA.

#### Scenario: Masonry portfolio grid

- **GIVEN** the featured works section is in view
- **WHEN** the section is rendered
- **THEN** an asymmetric masonry grid of 6 portfolio tiles SHALL be shown (rows 3/6/3, 12, 8/4, 8/4, 3 on desktop; stacking on mobile)
- **AND** each tile SHALL show an image, a "Website" category tag, and a designer credit
- **AND** the tile titles SHALL read The Verge, Racks, Zendesk, Curator, Tasty, Voyage

#### Scenario: About split

- **GIVEN** the featured works section is in view
- **WHEN** the grid has rendered
- **THEN** a centered heading SHALL read "UI/UX, visual, Web designer with more than 12 years of experience in designing websites and mobile apps."
- **AND** a "Get in touch" pill CTA SHALL be shown beneath it

### Requirement: Services section

The system SHALL render a centered heading "Our Services" with a blurb and
exactly 4 service cards, each with a hexagon icon chip, a title, and a
blurb.

#### Scenario: Services grid

- **GIVEN** the Services section is in view
- **WHEN** the section is rendered
- **THEN** a centered heading "Our Services" with a blurb SHALL be shown
- **AND** exactly 4 service cards SHALL be displayed in a row (2-col tablet, 1-col mobile)
- **AND** the card titles SHALL be Strategy, Design, Development, Help & Supports

#### Scenario: Service icon chips

- **GIVEN** the 4 service cards are rendered
- **WHEN** the cards are inspected
- **THEN** each card SHALL show a hexagon icon chip, a title, and a blurb
- **AND** the 4 chips SHALL use the tinted color variants (pink #fce7f1/#ee76ad, peach #fdf2ea/#efac78, blue #def4fb/#29bae4, green #ebfdf4/#79efb4)

### Requirement: Newsletter parallax band

The system SHALL render a parallax band on the brand gradient with a
centered "Subscribe to our Newsletter" heading, a blurb, and an email input
with a paper-plane icon button.

#### Scenario: Newsletter band

- **GIVEN** the page is scrolled to the newsletter section
- **WHEN** the section is rendered
- **THEN** a parallax band on the brand gradient SHALL show a centered heading "Subscribe to our Newsletter" with a blurb
- **AND** an email input with a paper-plane icon button SHALL be present

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits an email address
- **THEN** a success state SHALL confirm the subscription (no backend required)

### Requirement: Works section

The system SHALL render a centered heading "Works" with a blurb and exactly
3 horizontal portfolio cards, each with an image, text, and a "View
Portfolio" pill button.

#### Scenario: Works cards

- **GIVEN** the Works section is in view
- **WHEN** the section is rendered
- **THEN** a centered heading "Works" with the blurb "View our works below to see our design and way of development." SHALL be shown
- **AND** exactly 3 horizontal cards SHALL be displayed (image left, text right; stacking on mobile)
- **AND** the card titles SHALL be Illustration, Application, Web Design
- **AND** each card SHALL have a "View Portfolio" pill button

### Requirement: Testimonials

The system SHALL render a light-background section with a centered heading
"Customer Says", the subtitle "Our satisfied customer says", and 5
testimonial cards with avatar, quote, and name/role.

#### Scenario: Testimonial cards

- **GIVEN** the Testimonials section is in view
- **WHEN** the section is rendered
- **THEN** a centered heading "Customer Says" with the subtitle "Our satisfied customer says" SHALL be shown on a light background (#f8faff)
- **AND** 5 testimonial cards SHALL be displayed (3-col on desktop, stacking on mobile)
- **AND** each card SHALL show an avatar image, a quote, and a name + role attribution

### Requirement: Counter band

The system SHALL render a blue band (#29bae4) with the heading "Our
achievements" and 3 counters (400, 1000, 8000) that animate from 0 to their
target when scrolled into view.

#### Scenario: Animated counters

- **GIVEN** the counter section scrolls into view
- **WHEN** the section becomes visible
- **THEN** a blue band (#29bae4) SHALL show the heading "Our achievements"
- **AND** 3 counters SHALL display with labels "Customers are satisfied with our professional support", "Amazing preset options to be mixed and combined", "Average response time on live chat support channel"

#### Scenario: Counter animation

- **GIVEN** the counters are visible
- **WHEN** the animation triggers
- **THEN** each number SHALL animate from 0 to its target (400, 1000, 8000)
- **AND** the final values SHALL remain in the DOM (readable, no layout shift)

### Requirement: Blog section

The system SHALL render a light-background section with a centered heading
"Blog", the subtitle "Recent Blog", and 3 blog entries with date, author,
comment count, title, and excerpt.

#### Scenario: Blog entries

- **GIVEN** the Blog section is in view
- **WHEN** the section is rendered
- **THEN** a centered heading "Blog" with the subtitle "Recent Blog" SHALL be shown on a light background (#f8faff)
- **AND** exactly 3 blog entries SHALL be displayed
- **AND** each entry SHALL show a date, author "Admin", a comment count, a title, and an excerpt

### Requirement: Footer

The system SHALL render a dark footer (#3c312e) with 3 widget columns
(About, Quick Links, Contact Information), social icon circles, a copyright
line, and a "Component Dock" link.

#### Scenario: Footer layout

- **GIVEN** the page is scrolled to the bottom
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show 3 widget columns: About (brand blurb), Quick Links, Contact Information
- **AND** contact details SHALL include an address, a phone number, and email addresses
- **AND** social icon circles (twitter, facebook, instagram) SHALL be present
- **AND** a copyright line SHALL be shown

#### Scenario: Component Dock link

- **GIVEN** the footer is visible
- **WHEN** the footer links are inspected
- **THEN** a link labeled "Component Dock" pointing to https://www.componentdock.com/ SHALL be present

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Mosaic app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, featured works, services, newsletter, works, testimonials, counter, blog, and footer in order
- **AND** the document title SHALL be "Mosaic — Digital Agency"

## Verification checklist

- [ ] Single page, all 10 sections in source order: Navbar → Hero →
      Featured works + About → Services → Newsletter → Works →
      Testimonials → Counter → Blog → Footer
- [ ] Brand gradient `linear-gradient(45deg, #ee76ad 0%, #efac78 100%)` on
      hero + newsletter band; brand pink `#ee76ad` / peach `#efac78` in
      theme layer
- [ ] Font: Work Sans (light weights for big headings) via Google Fonts
- [ ] Hero: full-viewport gradient + dot-network pattern + centered H1
      ("Beautiful" emphasized) + ghost "Get in touch" CTA
- [ ] Featured works: 6-tile asymmetric masonry grid with category tags;
      About split heading + CTA below
- [ ] Services: 4 cards with hexagon icon chips in 4 tinted colors
      (fce7f1/ee76ad, fdf2ea/efac78, def4fb/29bae4, ebfdf4/79efb4)
- [ ] Newsletter: gradient parallax band, heading + blurb + email form with
      paper-plane icon
- [ ] Works: 3 horizontal cards (Illustration, Application, Web Design)
      with "View Portfolio" pills
- [ ] Testimonials: 5 cards on `#f8faff`, avatar + quote + name/role
- [ ] Counter: `#29bae4` band, 3 animated counters (400 / 1000 / 8000)
- [ ] Blog: 3 entries (date, Admin, comment count, title, excerpt)
- [ ] Footer: 3 widget columns + social circles + Component Dock link
- [ ] Buttons: pill `rounded-full` (radius 30px source); primary blue
      `#78d5ef`; nav CTA white/pink
- [ ] No ColorLib assets copied: picsum.photos seeds, lucide-react icons,
      Google Fonts links only; no particle library (CSS/SVG pattern)
- [ ] Footer links https://www.componentdock.com/ (required, no ColorLib in
      app code)
- [ ] `apps/mosaic` package `@free-react-templates/mosaic`; CNAME
      `mosaic.free.componentdock.com`; homepage set accordingly
- [ ] 100% coverage tests, per-app gate green (`scripts/verify-app.sh mosaic`)

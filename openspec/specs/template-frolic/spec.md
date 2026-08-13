# Template: Frolic (Kids' Activity / Playground Website Template)

## Purpose

Frolic is a single-page kids' activity / playground landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Kiddy" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Kiddy" — children's activity center / kids'
  playground one-pager for a play center ("Bring Fun Life To Your Kids",
  "Amazing Playground for your kids") with indoor games, outdoor games and
  camping packages, pricing packs and testimonials (source:
  https://colorlib.com/wp/template/kiddy/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/kiddy/
  (HTTP 200, ~20 KB HTML fetched; `css/style.css` ~22 KB + a CUSTOMIZED
  `css/bootstrap.min.css` ~30 KB parsed for tokens — note: the preview's
  Bootstrap is re-skinned: `.btn-primary` is **#dc3545** red, `.btn-success`
  **#71bc42**, `.btn-warning` **#ffc107**). Title tag: "Kiddy — Website
  Template by Colorlib". Bootstrap 4 + owl-carousel (testimonials) + AOS +
  icomoon/flaticon icons; jQuery stack, no Tailwind.
- **Screenshot analyzed:** `kiddy-free-template.jpeg` (TEMPLATES.md) — light
  gray hero: "Kiddy." logo top-left, contact info right; white floating pill
  navbar (Home highlighted coral); left text column with coral "Welcome To Our
  Website" eyebrow, bold white headline "Bring Fun Life To Your Kids" and a
  red rectangular "LEARN MORE" button; right side a photo of a boy dressed as
  a superhero (red cape, blue mask, fist raised) blending into the gray
  background; below, three feature blocks with colored headers — reddish
  "Indoor Games" (house icon), yellow "Outdoor Game And Event" (person icon),
  teal "Camping for Kids" (gear icon). Matches the live preview 1:1.
- **Section order (1:1):** Header (`site-navbar`, absolute, two rows: logo
  "Kiddy." + quick-contact address/hours with icons; second row hamburger
  (mobile) + menu Home/About/Packages/Gallery/Pricing/Contact + social icons)
  → Hero (`ftco-blocks-cover-1` > `site-section-cover.overlay`, min-height
  777px, light gray = white body darkened by the CSS `:before` overlay
  rgba(0,0,0,.3); left: cursive red eyebrow + white bold h1 + white subtext +
  red LEARN MORE button; right: transparent superhero-kid PNG
  `images/kid_transparent.png`) → Feature blocks (`site-section`, 3×
  `block-2` colored cards: red `#fd4d40` "Indoor Games" (house icon), yellow
  `#fdb62f` "Outdoor Game And Event" (person icon), teal `#16c3b0` "Camping
  for Kids" (cog icon)) → About (`site-section bg-light` #f6f5f5: photo left,
  right: cursive red "About Us" + black h3 "Bring Fun Life To Your Kids" +
  2 paragraphs + amber MORE ABOUT US button) → Packages (`site-section
bg-info` #17a2b8: centered cursive red "Packages You Like" + white h2 "Our
  Packages"; 3 white cards radius 7px with flaticon SVG icon (jigsaw/target/
  mission) + colored h3 (teal/green/red) + colored LEARN MORE button
  (red/amber/green)) → Pricing (`site-section`: left col cursive red "Pricing
  Plan" + black h2 "Our Pricing" + paragraph; 2 pricing cards: teal Silver
  Pack $30 (teal 90px price circle + 3 check items + teal BUY NOW), red
  Golden Pack $70 (coral price circle + 3 check items + coral BUY NOW)) →
  Testimonials (`site-section bg-light`: centered cursive red "Testimonial" +
  black h2 "What Our Client Says About Us"; coral `#fd4d40` panel
  `.testimonial-3-wrap` padding 30px with 3 owl slides: 80px square photo,
  white h3 name "Jeff Woodland", white-50 role "Partner", white 20px quote)
  → Stats row (same section: 4 columns — 3423 Happy Client teal / 4398
  Members yellow / 50+ Staffs green / 2000+ Our Followers red) → CTA band
  (`site-section py-5 bg-warning` #ffc107: white h2 "Bring Fun Life To Your
  Kids" + red GET STARTED button) → Footer (`site-footer` bg #343a40 dark:
  "About Us" + blurb + Newsletter form (email input + red Send button); two
  "Navigation" link columns; copyright bar with heart + ColorLib credit
  replaced by original attribution).
- **Design tokens extracted from the preview CSS (computed values verified in
  a live browser):**
  - Brand coral: **#fd4d40** — `.text-red` eyebrows, `.block-2.red`, `.btn.btn-danger`
    override, `.pricing.danger .price`, `.testimonial-3-wrap` bg, nav
    links/active/hover, `.ul-check.danger` checks, form-control focus border.
  - Button red (re-skinned Bootstrap primary): **#dc3545** — `.btn-primary`
    (hero LEARN MORE, Indoor LEARN MORE, GET STARTED, newsletter Send) and
    `.text-primary` logo dot.
  - Teal: **#16c3b0** — `.text-teal`, `.btn.btn-teal`, `.block-2.teal`,
    `.pricing.teal .price`, `.ul-check.teal`, stats "3423".
  - Yellow: **#fdb62f** — `.text-yellow` (map pin, linkedin icon, stats
    "4398"), `.block-2.yellow`.
  - Green/success: **#71bc42** — `.text-success` (twitter icon, stats "50+"),
    `.btn-success` (Camping LEARN MORE).
  - Info teal-blue: **#17a2b8** — Packages section bg (`bg-info`).
  - Warning amber: **#ffc107** — CTA band bg (`bg-warning`), `.btn-warning`
    (MORE ABOUT US, Outdoor LEARN MORE).
  - Text red (danger, stats "2000+"): **#dc3545** (`.text-danger`).
  - Dark slate: **#364d59** — body copy (weight 300) + default heading color
    (h1–h5, overridden per element).
  - Light section bg: **#f6f5f5** (`.bg-light` override of Bootstrap #f8f9fa).
  - Footer dark: **#343a40**; package card text **#777**; black **#000**
    (About h3, pricing h2, `.text-black`).
  - Fonts: **"DM Sans"** (body + headings; body 1rem/300/1.7) and **"Indie
    Flower"** (cursive — `.text-cursive` eyebrows "Welcome To Our Website",
    "About Us", "Packages You Like", "Pricing Plan", "Testimonial"). Google
    Fonts `<link>` in `index.html`.
  - Buttons: `.btn` base — border-radius **30px**, uppercase, font-size
    .8rem, letter-spacing .2rem, padding 10px 20px; `.btn-custom-1` —
    border-radius 30px on top-left + bottom-right, **0 on top-right +
    bottom-left** (asymmetric "squircle"); hero button is tall (`py-4`);
    CTA band button `py-3 px-5`.
  - Feature blocks `.block-2`: padding **40px**, text-center; 80px white
    icon circle (border-radius 50%, bg = block color); h2 18px white; p
    rgba(255,255,255,.7).
  - Package cards `.package`: bg #fff, padding 40px, border-radius **7px**,
    h3 18px, 80px icon `img-wrap` centered.
  - Pricing `.pricing .price`: **90px circle** (radius 50%) with an inner
    3px white ring (`:before` inset 5px), price text 26px; h3 20px;
    `.ul-check li` padding-left 35px, check icon 20px in variant color.
  - Testimonials `.testimonial-3-wrap`: bg #fd4d40, padding 30px; vcard 80px
    square photo (radius 0), h3 20px white, `.position` rgba(255,255,255,.5)
    16px, quote p 20px white.
  - Stats: h2-sized numbers in per-stat color + small labels.
  - Navbar `.site-navbar`: absolute, top 0, width 100%, padding 1rem; logo
    2.7rem (white "Kiddy" + `text-primary` #dc3545 dot); nav row in a white
    floating pill `.menu-wrap` (bg #fff, border-radius 100px, padding 10px
    20px); nav links **#000** (margin 0 15px, padding 20px 0) with active
    (Home) and hover **coral #fd4d40**; sticky → white bg.
  - Cover: min-height 777px (`calc(100vh - 196px)`), `:before` overlay
    rgba(0,0,0,.3) → hero renders as light gray over white; h1 3rem (48px)
    white weight 700, line-height 1; p 18px white.
  - Form control (newsletter): height 55px, white bg; focus border #fd4d40.
  - Footer: bg #343a40, white headings/text, copyright border-top
    rgba(255,255,255,.1).
- **Recreation decisions:** hero superhero-kid photo → picsum person portrait
  (verified `id/823` — young woman with camera, outdoor; picsum has no child
  portraits, documented deviation) aligned to the bottom of the hero; About
  photo → picsum `id/64` (golden-hour woman with daisies in a meadow, warm
  outdoor scene); testimonial avatars → verified person photos `id/1027`
  (profile portrait), `id/996` (backlit profile), `id/1011` (person canoeing);
  package icons (jigsaw/target/mission) →
  lucide-react equivalents (Puzzle, Target, Compass — pick closest) in
  a white 80px circle; feature icons → lucide Home, User, Settings/Cog;
  social icons → inline SVG (Facebook, Twitter, Linkedin) since lucide
  removed brand icons; hero background → light gray
  (`#b3b3b3` = white + 30% black overlay per the computed math; visually a
  flat gray with white text) — see fidelity note; tokens #fd4d40 / #dc3545 /
  #16c3b0 / #fdb62f / #71bc42 / #17a2b8 / #ffc107 / #364d59 / #f6f5f5 /
  #343a40 / #777 / #000 in `@theme`; DM Sans + Indie Flower via Google Fonts
  `<link>` in `index.html`.

Frolic lives in `apps/frolic` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header quick-contact bar

The system SHALL render the top header row with the site logo on the left and
quick-contact info (address + opening hours) with icons on the right.

#### Scenario: Header content

- **GIVEN** the Frolic page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the logo "Frolic" on the left (2.7rem, white
  on the hero, with the final letter's dot in button red #dc3545)
- **AND** the header SHALL show the address "34 Street Name, City Name Here,
  United States" with a yellow (#fdb62f) map-pin icon on the right (hidden on
  narrow viewports)
- **AND** the header SHALL show the hours "Sunday - Friday 8:00AM - 4:00PM /
  Saturday CLOSED" with a clock icon next to it

#### Scenario: Mobile header

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the quick-contact row SHALL be hidden and only the logo SHALL
  remain in the top row

### Requirement: Navigation bar

The system SHALL render a navigation row with a hamburger toggle on mobile,
the menu links, and social icons on the right.

#### Scenario: Navbar content

- **GIVEN** the Frolic page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show menu links Home, About, Packages, Gallery,
  Pricing, and Contact
- **AND** "Home" SHALL be styled as active (coral #fd4d40)
- **AND** the navbar SHALL show three social icons (Facebook teal #16c3b0,
  Twitter green #71bc42, LinkedIn yellow #fdb62f) on the right

#### Scenario: Navbar styling

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is displayed
- **THEN** the link SHALL sit in a white floating pill (reference
  `.menu-wrap`: white background, fully rounded, ~10px/20px padding)
- **AND** the link SHALL be black (#000) with ~15px horizontal margins and
  20px vertical padding
- **AND** the link SHALL turn coral (#fd4d40) on hover
- **AND** the active link (Home) SHALL be coral (#fd4d40)

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user activates the hamburger toggle
- **THEN** the nav links SHALL be reachable via the collapsible menu
  (aria-expanded toggled)

### Requirement: Hero cover

The system SHALL render a full-height light-gray hero with a cursive eyebrow,
a bold white headline, subtext, a red button, and a kid photo on the right.

#### Scenario: Hero content

- **GIVEN** the Frolic page is rendered
- **WHEN** the hero is in view
- **THEN** the hero SHALL show the cursive (Indie Flower) red (#fd4d40)
  eyebrow "Welcome To Our Website"
- **AND** the hero SHALL show the headline "Bring Fun Life To Your Kids"
  (white, bold, 3rem/48px, line-height 1)
- **AND** the hero SHALL show the subtext "Amazing Playground for your kids"
  (white, 18px)
- **AND** the hero SHALL show a red (#dc3545) uppercase "LEARN MORE" button
  (border-radius 30px on top-left/bottom-right, square top-right/bottom-left,
  letter-spacing ~3px)

#### Scenario: Hero layout and photo

- **GIVEN** the hero is rendered
- **WHEN** the right column is in view
- **THEN** it SHALL show a portrait photo (seeded picsum) of a kid-like
  subject aligned to the bottom of the hero, over the light-gray background
- **AND** the hero section SHALL be at least 777px tall (or ~100vh minus the
  header) with the text column vertically centered

#### Scenario: Hero background

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero background SHALL be light gray (per the original's white
  base darkened by its 30% black overlay; a flat gray such as #b3b3b3
  approximates it) so the white headline stays readable

### Requirement: Feature blocks

The system SHALL render three colored feature cards in a 3-column row.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** the page loads
- **THEN** it SHALL render three cards (3-column grid, stacking on mobile),
  each with 40px padding, centered text, and a distinct background — red
  #fd4d40, yellow #fdb62f, teal #16c3b0
- **AND** each card SHALL show a white icon in an 80px circle (radius 50%)
  — house (Indoor Games), person (Outdoor Game And Event), cog (Camping for
  Kids)
- **AND** each card SHALL show a white 18px title and a white paragraph at
  70% opacity (rgba(255,255,255,.7))

### Requirement: About section

The system SHALL render a light-gray (#f6f5f5) split section with a photo on
the left and heading, paragraphs, and an amber button on the right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a photo (seeded picsum)
- **AND** the right column SHALL show the cursive red eyebrow "About Us"
- **AND** the right column SHALL show the black heading "Bring Fun Life To
  Your Kids"
- **AND** the right column SHALL show two supporting paragraphs
- **AND** the right column SHALL show an amber (#ffc107) uppercase "MORE
  ABOUT US" button with dark text

### Requirement: Packages section

The system SHALL render a teal-blue (#17a2b8) section with a centered heading
and three white package cards.

#### Scenario: Section title

- **GIVEN** the packages section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a #17a2b8 background
- **AND** it SHALL show the cursive red eyebrow "Packages You Like" and the
  white heading "Our Packages" centered

#### Scenario: Package cards

- **GIVEN** the packages section is rendered
- **WHEN** the cards are in view
- **THEN** it SHALL render three white cards (radius 7px, 40px padding) in a
  3-column row (stacking on mobile)
- **AND** each card SHALL show an icon (seeded picsum image or lucide icon in
  an 80px centered wrap): jigsaw (Indoor Games), target (Outdoor Game and
  Event), mission (Camping for Kids)
- **AND** each card SHALL show a colored 18px title — teal #16c3b0, green
  #71bc42, red #fd4d40 respectively
- **AND** each card SHALL show a short paragraph and an uppercase "LEARN
  MORE" button — red #dc3545, amber #ffc107, green #71bc42 respectively

### Requirement: Pricing section

The system SHALL render a pricing section with an intro column and two
colored pricing cards.

#### Scenario: Section content

- **GIVEN** the pricing section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the cursive red eyebrow "Pricing Plan",
  the black heading "Our Pricing", and an intro paragraph
- **AND** the section SHALL render two pricing cards side by side (stacking
  on mobile)

#### Scenario: Silver Pack card

- **GIVEN** the Silver Pack card is rendered
- **WHEN** the page loads
- **THEN** the card SHALL show a teal (#16c3b0) 90px price circle with a 3px
  white inner ring and the price "$30" (26px) centered in it
- **AND** the card SHALL show the heading "Silver Pack" (20px)
- **AND** the card SHALL show a 3-item check list (teal checks, items padded
  left ~35px)
- **AND** the card SHALL show a teal uppercase "BUY NOW" button

#### Scenario: Golden Pack card

- **GIVEN** the Golden Pack card is rendered
- **WHEN** the page loads
- **THEN** the card SHALL show a coral (#fd4d40) 90px price circle with a 3px
  white inner ring and the price "$70" (26px) centered in it
- **AND** the card SHALL show the heading "Golden Pack" (20px)
- **AND** the card SHALL show a 3-item check list (coral checks)
- **AND** the card SHALL show a coral uppercase "BUY NOW" button

### Requirement: Testimonials section

The system SHALL render a light-gray section with a centered heading, a coral
testimonial panel with three slides, and a stats row.

#### Scenario: Section title

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the centered cursive red eyebrow
  "Testimonial" and the black heading "What Our Client Says About Us"

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a coral (#fd4d40) panel (padding ~30px) containing a
  slide with an 80px square photo (seeded picsum), a white 20px name ("Jeff
  Woodland"), a role line at 50% white opacity ("Partner", 16px), and a white
  20px quote paragraph
- **AND** controls (prev/next or dots) SHALL cycle between the three slides,
  all showing the same name/role pattern with different photos

#### Scenario: Stats row

- **GIVEN** the stats row is rendered
- **WHEN** the page loads
- **THEN** it SHALL show four centered stat columns with large colored
  numbers and small labels: 3423 Happy Client (teal #16c3b0), 4398 Members
  (yellow #fdb62f), 50+ Staffs (green #71bc42), 2000+ Our Followers (red
  #dc3545)

### Requirement: Call-to-action band

The system SHALL render an amber (#ffc107) band with a white headline and a
red button.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** the page loads
- **THEN** the band SHALL have an amber (#ffc107) background
- **AND** it SHALL show the white heading "Bring Fun Life To Your Kids" on
  the left
- **AND** it SHALL show a red (#dc3545) uppercase "GET STARTED" button on the
  right (larger padding, ~py-3 px-5)

### Requirement: Footer

The system SHALL render a dark footer with an about blurb, a newsletter form,
navigation columns, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a dark (#343a40) background with white
  headings and text
- **AND** the first column SHALL show "About Us" with a short blurb and a
  "Newsletter" form (email input, 55px tall, plus a red "Send" button)
- **AND** the footer SHALL show two "Navigation" columns with the links About
  Us, Testimonials, Terms of Service, Privacy, and Contact Us
- **AND** the footer SHALL show a centered copyright line with an original
  attribution (the ColorLib credit is replaced) and a heart icon

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Frolic app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections (Hero, Features, About, Packages, Pricing, Testimonials + Stats,
  CTA) in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Frolic — Kids' Activity Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/frolic` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- frolic` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#fd4d40, #dc3545, #16c3b0, #fdb62f, #71bc42, #17a2b8, #ffc107, #364d59, #f6f5f5, #343a40, #777, #000, DM Sans/Indie Flower) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `frolic-<n>`, Google Fonts links, lucide icons + inline SVG brand icons only)

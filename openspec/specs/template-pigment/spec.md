# Template: Pigment (Creative Agency Template)

## Purpose

Pigment is a single-page creative-agency template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Creativex 3"
website template (see TEMPLATES.md, Astro section, line 138; duplicate lines
1459 under Creative and 2907 under Tailwind Css — mark EVERY copy), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a modern, minimal creative/digital agency site (demo brand in
the preview: "Pixel Studio"): a fixed translucent navbar (logo, Work · Services
· About · Contact links, a dark-mode toggle and a pill "Start a Project" CTA;
hamburger menu on mobile), a centered hero on a soft grey background with two
huge blurred fuchsia/orange glow circles, an "Award-Winning Creative Agency"
pill badge with a pulsing dot, the headline "We Create **Bold Digital**
Experiences" with a fuchsia→orange gradient span, two pill CTAs, a 4-stat row
(150+ Projects Delivered · 50+ Happy Clients · 12 Team Members · 8 Years
Experience) and a "SCROLL" mouse indicator; a thin awards band (Awwwards Site of
the Day 2024 · CSS Design Awards 2024 · FWA of the Month 2023 · Webby Awards
Honoree 2023); a "What We Do" grid of four service cards (gradient icon box,
title, blurb, four check-mark features, "Learn More" link); a "Selected Work"
grid of three project cards (photo, dark gradient caption overlay, corner
arrow); a "What Clients Say" testimonials grid (five yellow stars, quote,
avatar, name + role); a "Let's Work Together" contact section (Email / Call /
Visit / Follow info column + a project-intake form with two selects and a
budget range) and a footer (brand + socials, NAVIGATION / SERVICES / CONTACT
columns, copyright bar with Privacy Policy / Terms of Service links). The whole
design ships a light default with a class-based `.dark` mode toggle.

Brand colors: primary fuchsia `#d946ef` (CTA buttons, links, focus rings,
gradient stops), hover `#c026d3`; accent orange `#f97316` (second gradient
stop, glow circle); headline gradient `#d946ef → #f97316` (background-clip:
text); body text `#374151`/`#6b7280` on white or `#f9fafb`; headings
`#111827`; dark surfaces `#030712` (page dark bg) and `#111827` (dark section
bg); borders `#e5e7eb`/`#d1d5db`; testimonial stars yellow `#facc15`. Body font
Inter (400–800).

## Design reference (replication findings)

- **Original:** ColorLib "Creativex 3" — creative/digital agency template
  (source: https://colorlib.com/wp/template/creativex-3/). Listed in
  TEMPLATES.md line 138 (Astro); duplicates at lines 1459 (Creative) and 2907
  (Tailwind Css) — mark every copy `[x]` when done. Screenshot:
  `creativex-template-1770211073725.jpg` (2400×1892, reviewed visually in the
  browser).
- **Live preview URL:** https://preview.colorlib.com/theme/creativex-3/
  returns HTTP 404 (slug no longer hosted under `/theme/`). The live preview is
  reachable through the ColorLib preview shell:
  https://preview.colorlib.com/#creativex-3 — the shell embeds the real
  rendered site in an iframe at **https://creativex-colorlib.pages.dev/**
  (Cloudflare Pages, Astro build). Fetch and analyze THAT url. HTML saved to
  `/tmp/creativex3-prep/creativex.html` (58 KB); stylesheet
  `/_astro/Base.BjbRLE8f.css` (41 KB, Tailwind 4 utility build — tokens below).
  Screenshot and preview agree (light, minimal agency page, fuchsia/orange
  accents, pill buttons, gradient headline) — the preview DOM is authoritative.
- **Fonts:** `font-family: Inter, system-ui, sans-serif` loaded via Google
  Fonts `css2?family=Inter:wght@400;500;600;700;800` in `index.html`. No other
  font families used.
- **Buttons (from base.css):**
  - `.btn-primary` (hero "View Our Work", form "Send Message"): `background:
#d946ef; color: #fff; font-weight: 600; font-size: 14px (text-sm) or 16px
(text-base); padding: 12px 24px (px-6 py-3) up to 16px 32px (px-8 py-4);
border-radius: 9999px (fully rounded pill); box-shadow: 0 10px 15px -3px
rgba(217,70,239,0.25)`; hover → `background: #c026d3`. Small variant for
    header CTA: `px-5 py-2.5 text-sm`.
  - `.btn-secondary` ("Start a Project"): `background: #fff; color: #374151;
border: 2px solid #d1d5db; border-radius: 9999px; font-weight: 600`; hover
    → `border-color: #9ca3af; background: #f9fafb`.
  - "Learn More" service links: `text-sm font-semibold text-primary-500` with a
    right arrow icon, hover opacity/translate.
- **Section backgrounds / layout (from creativex.html):**
  - header `header.fixed.left-0.right-0.top-0.z-50`: `background: rgba(255,255,
255,0.95); backdrop-filter: blur(4px); box-shadow: 0 1px 2px rgba(0,0,0,
0.05)`; dark: `rgba(3,7,18,0.95)`. Inner `nav` = `mx-auto flex max-w-7xl
items-center justify-between px-4 py-4 lg:px-8`. Logo: 32px-tall wordmark
    (light + dark variants). Links: `text-sm font-medium`, hover
    `text-primary-500`. Theme toggle: `rounded-lg p-2 text-gray-500
hover:bg-gray-100`. CTA: `hidden rounded-full bg-primary-500 px-5 py-2.5
text-sm font-semibold text-white lg:inline-flex`. Mobile: hamburger button
    (`lg:hidden`) + slide panel with stacked links and a full-width CTA.
  - hero `section.relative.overflow-hidden.bg-gray-50 dark:bg-gray-900`:
    decorative layer `div.absolute.inset-0.opacity-30` containing two blurred
    circles: `absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary-500
blur-[128px]` and `absolute -right-4 bottom-0 h-72 w-72 rounded-full
bg-accent-500 blur-[128px]` (the lavender→peach glow seen in the
    screenshot). Content `div.relative.mx-auto.max-w-7xl.px-4.py-24.lg:px-8
.lg:py-32` → centered `max-w-4xl`:
    - badge: `inline-flex items-center gap-2 rounded-full border
border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium
text-primary-700` with a pulsing 8px dot (`animate-ping` + solid
      `bg-primary-500`) — text "Award-Winning Creative Agency".
    - h1: `text-4xl font-bold leading-tight tracking-tight text-gray-900
sm:text-5xl lg:text-6xl` — "We Create <span class="text-gradient">Bold
      Digital</span> Experiences".
    - `.text-gradient`: `background-image: linear-gradient(to right, #d946ef,
#f97316); -webkit-background-clip: text; color: transparent`.
    - subtitle: `mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl`.
    - CTAs row: `mt-10 flex flex-col items-center justify-center gap-4
sm:flex-row` — primary "View Our Work" + arrow icon, secondary "Start a
      Project".
    - stats: `mt-20 grid grid-cols-2 gap-8 border-t border-gray-200 pt-12
sm:grid-cols-4` — four cells, each `text-3xl font-bold text-gray-900
lg:text-4xl` number + `mt-1 text-sm text-gray-600` label (150+ Projects
      Delivered · 50+ Happy Clients · 12 Team Members · 8 Years Experience).
    - scroll indicator: `absolute bottom-8 left-1/2 -translate-x-1/2 flex
flex-col items-center gap-3 text-gray-400 hover:text-primary-500` —
      "SCROLL" text + mouse icon, href="#services".
  - awards band `section.border-y.border-gray-200.bg-white.py-8 dark:border-
gray-800.dark:bg-gray-950`: `flex flex-wrap items-center justify-center
gap-8 lg:gap-16`; four items, each `text-center`: `text-sm font-semibold
text-gray-900` award name + `text-xs text-gray-500` year.
  - services `section.bg-white.py-20.lg:py-28 dark:bg-gray-950`:
    section header (h2 `text-3xl font-bold tracking-tight sm:text-4xl lg:text-
5xl` + centered intro paragraph) then `grid gap-12 lg:grid-cols-4` of four
    cards. Card: white, `rounded-2xl` (1rem), `border border-gray-200`, hover
    `border-primary-500`; icon box `mb-6 inline-flex rounded-xl bg-gradient-to-
br from-primary-500 to-accent-500 p-3 text-white shadow-lg shadow-primary-
500/25` (lucide icon 24px); h3 `text-xl font-bold text-gray-900`; blurb
    `mt-3 text-gray-600`; features `ul.mt-6.space-y-2` — four `li` rows with a
    16px check icon `text-primary-500`; "Learn More" link with arrow.
  - work `section.bg-gray-50.py-20.lg:py-28 dark:bg-gray-900`: header + "View
    All Projects" link; `grid gap-8 sm:grid-cols-2 lg:grid-cols-3` of three
    project cards. Card = `a.group.relative.overflow-hidden.rounded-2xl.bg-
gray-900`: full-bleed photo (`h-full w-full object-cover transition-
transform duration-500 group-hover:scale-110`), always-visible bottom
    caption `absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90
to-transparent p-6` (uppercase 12px category + `mt-2 text-xl font-bold
text-white` title), corner icon `absolute right-8 top-8 h-12 w-12 text-
gray-100` (arrow icon in circle), and a hover overlay variant that fades in
    (duplicate category+title). Projects: Nova Fintech Rebrand (BRANDING),
    Mindful Wellness App (MOBILE APP), Urban Eats Platform (WEB DESIGN).
  - testimonials `section.bg-gray-50.py-20.lg:py-28 dark:bg-gray-900`: header;
    `mt-16 grid gap-8 lg:grid-cols-3` of three cards (class `card`: white,
    `rounded-2xl`, padding 24px, shadow `0 4px 16px -4px rgba(0,0,0,0.1)`):
    five 20px star icons `text-yellow-400` (`fill="currentColor"`), `blockquote
mt-6 text-gray-700`, author row `mt-8 flex items-center gap-4` (48px
    circular avatar + `font-semibold text-gray-900` name + `text-sm
text-gray-600` role). People: David Kim (CEO, Nova Financial), Lisa
    Thompson (Founder, Mindful Inc.), Michael Torres (Marketing Director, Urban
    Eats).
  - contact `section.bg-white.py-20.lg:py-28 dark:bg-gray-950`: h2 "Let's Work
    Together" + blurb; `grid gap-12 lg:grid-cols-2 lg:gap-16` — left info
    column: four blocks each with a `rounded-xl bg-gray-100 p-2.5 text-gray-600`
    icon + `font-semibold text-gray-900` heading: "Email Us"
    hello@pixelstudio.com · "Call Us" (555) 987-6543 · "Visit Us" 456 Creative
    Ave, Suite 200, Los Angeles, CA 90028 · "Follow Us" (4 social icon links,
    hover `bg-primary-50`); right column: `form.space-y-6` — Name (required),
    Email (required), Company (optional), "Service Interested In" select (Web
    Design / Mobile Apps / Brand Identity / Digital Marketing / Other),
    "Budget Range" select ($5,000–$10,000 / $10,000–$25,000 / $25,000–$50,000 /
    $50,000+), "Project Details" textarea (required), full-width "Send Message"
    submit. Inputs: `rounded-lg border border-gray-300 bg-white px-4 py-3
text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-
none focus:ring-2 focus:ring-primary-500/20`; labels `text-sm font-medium
text-gray-700`.
  - footer `footer.border-t.border-gray-200.bg-gray-50.py-12 dark:border-gray-
800.dark:bg-gray-900`: top row = brand column (logo, tagline "We craft bold
    digital experiences that captivate audiences and drive results.", 4 social
    icon links `rounded-lg bg-gray-200 p-2.5`) + three h4 columns
    ("NAVIGATION": Work/Services/About/Contact; "SERVICES": Web Design/Mobile
    Apps/Brand Identity/Digital Marketing; "CONTACT": email + phone links; h4 =
    `text-sm font-semibold uppercase tracking-wider`); bottom bar
    `mt-12 flex flex-col items-center justify-between gap-4 border-t border-
gray-200 pt-8 sm:flex-row`: "© 2026 Pixel Studio. All rights reserved."
    (→ "© 2026 Pigment. All rights reserved.") + Privacy Policy / Terms of
    Service links.
- **Dark mode:** class-based — `html.dark` toggles `dark:` variants; toggle
  button (moon/sun, `id="theme-toggle"`) flips the class and persists to
  `localStorage` (`theme` key). Default light. Recreate the toggle (moon/sun
  lucide icons), defaulting to light with localStorage persistence.
- **Inner pages:** /work, /services, /about, /contact, /work/* project detail
  pages, /privacy, /terms exist in the preview — NOT required; recreate the
  single index page only (nav links can be dead anchors `#` or scroll targets).

## Requirements

### Requirement: Fixed navbar with theme toggle and CTA

The system SHALL render a fixed translucent navbar with the brand, four nav
links, a dark-mode toggle, a pill CTA and a mobile menu.

#### Scenario: Desktop navbar content

- **GIVEN** the Pigment app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be fixed at the top with a translucent white
  background (`rgba(255,255,255,0.95)`), backdrop blur and subtle shadow
- **AND** it SHALL show the brand "Pigment" on the left and the links Work ·
  Services · About · Contact in that order
- **AND** the links SHALL be 14px medium-weight, grey, and turn fuchsia
  `#d946ef` on hover
- **AND** a dark-mode toggle button (moon/sun icon) SHALL sit before a pill
  "Start a Project" button (`bg-primary-500`, white text, fully rounded)

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the hamburger button is activated
- **THEN** a menu panel SHALL open with the four links stacked vertically and a
  full-width "Start a Project" button
- **AND** the toggle SHALL reflect the open state with `aria-expanded`

#### Scenario: Dark mode toggle

- **WHEN** the user activates the theme toggle
- **THEN** the `dark` class SHALL be added to the document root, switching
  sections/header/footer to their `#030712`/`#111827` dark variants
- **AND** the choice SHALL persist in localStorage so a reload keeps the mode
- **AND** activating again SHALL switch back to light mode

### Requirement: Hero with badge, gradient headline, stats and scroll cue

The system SHALL render the centered hero with glow decoration, badge,
gradient headline, two pill CTAs, a stats row and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL have a light grey `#f9fafb` background with two blurred
  glow circles (fuchsia `#d946ef` top-left, orange `#f97316` bottom-right,
  288px, blur 128px, ~30% opacity) behind the content
- **AND** a pill badge SHALL read "Award-Winning Creative Agency" with a
  small pulsing fuchsia dot
- **AND** the h1 SHALL read "We Create Bold Digital Experiences" with the
  words "Bold Digital" in a fuchsia→orange gradient (background-clip: text)
- **AND** the subtitle SHALL read "We craft bold digital experiences that
  captivate audiences and drive results."
- **AND** two pill CTAs SHALL be present: primary fuchsia "View Our Work" with
  an arrow icon, and secondary white/bordered "Start a Project"

#### Scenario: Stats row

- **WHEN** the hero's lower area loads
- **THEN** four stats SHALL be shown above a top border, 2-up on mobile and
  4-up on desktop: 150+ Projects Delivered · 50+ Happy Clients · 12 Team
  Members · 8 Years Experience (bold large number + small grey label)

#### Scenario: Scroll cue

- **WHEN** the hero renders
- **THEN** a "SCROLL" label with a mouse icon SHALL be centered below the stats
  and SHALL link to the services section

### Requirement: Awards band

The system SHALL render a thin band of four text awards between the hero and
services.

#### Scenario: Award items

- **GIVEN** the awards band is rendered
- **WHEN** it loads
- **THEN** it SHALL be bordered top and bottom and list, centered: Awwwards
  Site of the Day (2024) · CSS Design Awards (2024) · FWA of the Month (2023) ·
  Webby Awards Honoree (2023), each a semibold name with a small grey year

### Requirement: Services grid

The system SHALL render a four-column services grid with gradient icon boxes,
features lists and Learn More links.

#### Scenario: Service cards

- **GIVEN** the "What We Do" section is rendered
- **WHEN** it loads
- **THEN** a section heading "What We Do" and intro paragraph SHALL appear
- **AND** four cards SHALL be laid out in a 4-up grid (stacking on mobile):
  Web Design · Mobile Apps · Brand Identity · Digital Marketing
- **AND** each card SHALL contain a rounded-xl gradient icon box (fuchsia→
  orange, white icon, fuchsia shadow), a bold title, a blurb, a list of four
  features each with a fuchsia check icon, and a "Learn More" link with arrow
  icon in fuchsia

#### Scenario: Card hover

- **WHEN** a card is hovered
- **THEN** its border SHALL turn fuchsia `#d946ef`

### Requirement: Selected Work grid

The system SHALL render a three-card projects grid with photo, gradient caption
overlay and hover zoom.

#### Scenario: Project cards

- **GIVEN** the "Selected Work" section is rendered
- **WHEN** it loads
- **THEN** the heading "Selected Work" with intro and a "View All Projects"
  link SHALL appear
- **AND** three cards SHALL be laid out in a 3-up grid, each with: a photo that
  zooms on hover, an always-visible bottom gradient caption (uppercase category
  — BRANDING / MOBILE APP / WEB DESIGN — and a bold white title: Nova Fintech
  Rebrand · Mindful Wellness App · Urban Eats Platform), and a corner arrow
  icon

### Requirement: Testimonials

The system SHALL render three testimonial cards with five-star ratings.

#### Scenario: Testimonial card

- **GIVEN** the "What Clients Say" section is rendered
- **WHEN** it loads
- **THEN** three cards SHALL be laid out 3-up, each with five filled yellow
  `#facc15` star icons, a quote, and an author row (48px circular avatar,
  bold name, small grey role)
- **AND** the quotes/people SHALL be: David Kim (CEO, Nova Financial), Lisa
  Thompson (Founder, Mindful Inc.), Michael Torres (Marketing Director, Urban
  Eats) with quotes paraphrased from the preview

### Requirement: Contact section with intake form

The system SHALL render a contact section split into an info column and a
validated project-intake form.

#### Scenario: Contact info column

- **GIVEN** the "Let's Work Together" section is rendered
- **WHEN** it loads
- **THEN** the heading, blurb ("…we'll get back to you within 24 hours") and
  four info blocks SHALL appear, each with a grey rounded icon square:
  "Email Us" hello@pixelstudio.com · "Call Us" (555) 987-6543 · "Visit Us"
  456 Creative Ave, Suite 200, Los Angeles, CA 90028 · "Follow Us" with four
  social icon links

#### Scenario: Form fields

- **WHEN** the form renders
- **THEN** it SHALL contain: Name (required text), Email (required email),
  Company (optional), a "Service Interested In" select (Web Design / Mobile
  Apps / Brand Identity / Digital Marketing / Other), a "Budget Range" select
  ($5,000–$10,000 / $10,000–$25,000 / $25,000–$50,000 / $50,000+), a required
  "Project Details" textarea, and a full-width fuchsia "Send Message" button
- **AND** all inputs SHALL have rounded-lg styling with fuchsia focus ring

#### Scenario: Form validation

- **WHEN** the user submits with an empty required field or invalid email
- **THEN** the browser validation SHALL block submission and show an error
- **WHEN** the user submits a fully valid form
- **THEN** a success confirmation SHALL be shown and the form SHALL reset

### Requirement: Footer

The system SHALL render a footer with brand, three link columns and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL contain: a brand column (logo, tagline, four social icon
  buttons), and three columns headed NAVIGATION (Work · Services · About ·
  Contact), SERVICES (Web Design · Mobile Apps · Brand Identity · Digital
  Marketing) and CONTACT (email + phone links)
- **AND** the bottom bar SHALL read "© 2026 Pigment. All rights reserved."
  with Privacy Policy and Terms of Service links

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pigment app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar + hero in the banner landmark, the
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Pigment — Creative Agency Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (grids stack
  to 1–2 columns, mobile menu replaces the desktop nav)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/pigment`
      (`scripts/verify-app.sh pigment` in FAST_MODE; full `npm run gate` in CI).
- [ ] Visual fidelity: fixed translucent navbar (brand, 4 links, moon/sun
      toggle, pill CTA, mobile hamburger), hero (glow circles, pulsing badge,
      gradient headline, 2 pill CTAs, 4-stat row, SCROLL cue), awards band,
      services (4 cards, gradient icon boxes, check lists, Learn More), work
      (3 photo cards with gradient caption + hover zoom), testimonials (5
      stars, quote, author row), contact (info column + full form), footer (3
      columns + copyright) match the Creativex 3 preview 1:1.
- [ ] Design tokens in `@theme`: primary fuchsia `#d946ef` (hover `#c026d3`),
      accent orange `#f97316`, gradient text `#d946ef → #f97316`, headings
      `#111827`, body `#374151`/`#6b7280`, light bg `#f9fafb`, dark page
      `#030712`, dark section `#111827`, borders `#e5e7eb`/`#d1d5db`, stars
      `#facc15`; Inter 400–800 via Google Fonts.
- [ ] Buttons: fully-rounded pills — primary `bg-primary-500 text-white
    font-semibold shadow-lg shadow-primary-500/25 hover:bg-primary-600`,
      secondary white `border-2 border-gray-300 text-gray-700`; `dark:` variants
      for every section; dark-mode toggle persists to localStorage.
- [ ] Placeholder images use `picsum.photos/seed/pigment-<n>/<w>/<h>` (project
      photos, testimonial avatars); lucide-react icons (arrow-right, check,
      star, moon, sun, menu, x, mail, phone, map-pin, socials — Dribbble via
      inline SVG); no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Creativex 3"), preview
      URL (https://creativex-colorlib.pages.dev/ via
      https://preview.colorlib.com/#creativex-3), design tokens, and what
      differs (name, placeholders, paraphrased copy, inner pages not
      recreated).

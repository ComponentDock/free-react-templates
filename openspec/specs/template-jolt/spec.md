# Template: Jolt (Event Countdown / Startup Landing)

## Purpose

Jolt is a single-page event-countdown startup landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Action" design
(source: https://colorlib.com/wp/template/action/), built under a DIFFERENT
name (**Jolt** — "a sudden burst of energy", fitting the event-countdown +
startup theme; a single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-16), per
the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The page is a full-height hero (dark image +
overlay) → black event-countdown section with four counters → light-gray
services + overlapping white about box → black pricing section with three
purple cards → full-bleed image section with three dark feature cards →
black section with a white overlapping testimonial carousel + team → light
gray newsletter form → dark footer.

## Design reference (replication findings)

- **Original:** ColorLib "Action" — a free Bootstrap 5 one-page template.
  TEMPLATES.md has TWO copies (lines 549 and 881 — the SAME slug/URL in both;
  both are `- [ ]` unchecked). This prep: Action → **Jolt**. When the
  implementer finishes, BOTH rows get bookkept `[x]` with the same URL.
- **Preview DOM analyzed (LIVE, fetched via curl AND browser-verified):**
  `https://preview.colorlib.com/theme/action/` (HTTP 200, 23,478 bytes
  HTML, `<title>Action &mdash; Free Bootstrap 5 Website Template by
Colorlib</title>`). Stylesheets: `fonts/icomoon/style.css` (icon font),
  `css/tiny-slider.css`, `css/aos.css`, `css/style.css` (the template CSS —
  Bootstrap 5.0.0-beta1 base + custom rules, ~59 KB). Libs: `js/aos.js`,
  `js/bootstrap.bundle.min.js`, `js/custom.js`, `js/navbar.js`,
  `js/tiny-slider.js`. Google Fonts via inline cf-fonts `@font-face` blocks:
  **Jost (400/600/700)** — the ONLY font used in the template.
- **CURL QUIRK (documented for future preps):** fetching
  `css/style.css` with a plain curl UA returns the icomoon icon sheet
  (79,820 bytes — byte-identical to `fonts/icomoon/style.css`; a server/edge
  mis-serve). Fetching with a browser UA + `Accept: text/css` returns the
  real 59,342-byte Bootstrap+custom stylesheet. When token-hunting with curl,
  always send a browser UA and verify the file starts with the expected
  content (here: `/*! Bootstrap v5.0.0-beta1 ... */`).
- **SOURCE HEADING TYPO (documented, reproduce faithfully):** the hero `<h1>`
  reads **"New template Boostrap Five"** (misspelled "Boostrap" — the live
  DOM AND the TEMPLATES.md screenshot `action-free-template.jpg` both show
  it). The recreation SHALL render the text exactly as the reference —
  **"New template Boostrap Five"** — because fidelity mandates the original.
  Do NOT silently "fix" the spelling; mention the typo in the PR description.
- **Visual design (from live DOM + CSS tokens + screenshot + live browser
  geometry):** high-contrast dark/light alternation. Hero = full-width dark
  autumn-leaves photo with a `rgba(0,0,0,.4)` overlay, 90px bold white
  headline. Black sections (countdown, pricing, features-over-image,
  testimonials/team) alternate with light-gray `#efefef` sections (services,
  newsletter). Signature accent: a **purple→pink gradient `#743ad5` →
  `#d53a9d`** used on pill buttons (with a black 2px inset that fades on
  hover) and as the solid `#743ad5` background of the three pricing cards.
  Pill-shaped buttons everywhere (100px radius), uppercase 12px labels with
  wide letter-spacing. Headings are huge (90px hero h1, 80px section h2).
  Screenshot (`action-free-template.jpg`, viewed in browser) matches the
  live DOM: dark autumn-leaves hero, white "New template Boostrap Five" over
  it, "A FREE TEMPLATE BY COLORLIB" sub-line, pill "READ MORE" button; below,
  black countdown strip; light services; black pricing with 3 purple cards;
  dark desert-image "More Features"; white testimonial box; dark team; light
  newsletter; dark footer with social icons. NO variance between screenshot
  and live DOM.
- **Icons:** the services use inline Bootstrap Icons SVGs (`bi-camera`,
  `bi-gear`, `bi-image`, `bi-layers` — `fill="currentColor"`, 1em, purple via
  the `.feature .svg-wrap` color). Map to lucide: `Camera`, `Settings`,
  `Image`, `Layers`. Social icons in the footer use icomoon glyphs
  (`icon-facebook`, `icon-twitter`, `icon-linkedin`, `icon-dribbble`) →
  lucide `Facebook`, `Twitter`, `Linkedin`, `Dribbble`.
- **Images:** `images/bg_hero.jpg` (dark autumn leaves, hero),
  `images/bg_hero_2.jpg` (desert, section-5 background),
  `images/person_1.jpg` / `images/person_2.jpg` (team photos + testimonial
  bio pics). Recreation uses deterministic picsum placeholders
  (`https://picsum.photos/seed/jolt-<n>/<w>/<h>`).

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                              | Source                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| Font family     | **Jost** (400/600/700; body weight 400), stack `"Jost", sans-serif`                                                                                                                                                                                                                                                | cf-fonts @font-face block + `body` rule     |
| Brand gradient  | **`#743ad5` → `#d53a9d`** (purple → pink, linear-gradient to right) — the signature accent; used on `.btn-primary-gradient` (with a black 2px inset `:after` that fades to `opacity: 0` on hover, revealing the full gradient) and as the solid `#743ad5` bg of pricing cards                                      | `.btn-primary-gradient` rules, `.pricing`   |
| Black           | `#000` — hero `background-color`, section-2 (countdown), section-4 (pricing), section-6 (testimonials/team) backgrounds                                                                                                                                                                                            | `.hero`, `.section-2/4/6`                   |
| Near-black      | `#222` — `.feature.dark` box bg, `.btn-black` bg                                                                                                                                                                                                                                                                   | `.feature.dark:before`, `.btn-black`        |
| Light gray      | `#efefef` — section-3 (services/about) and `.section-contact` (newsletter) backgrounds                                                                                                                                                                                                                             | `.section-3`, `.section-contact`            |
| White           | `#fff` — `.box-white` cards, headings on dark sections                                                                                                                                                                                                                                                             | `.box-white`                                |
| Body text       | `#212529` (Bootstrap default) on light sections; white `#fff` headings on dark; **`rgba(255,255,255,.5)`** muted body text on dark; **`rgba(255,255,255,.3)`** counter labels + team `.position` text                                                                                                              | `body`, `.counter span`, `.team p.position` |
| Overlay         | `rgba(0,0,0,.4)` — full-bleed dark overlay over hero and section-5 background images (`.hero.overlay:before`, `.bg-image.overlay:before`)                                                                                                                                                                          | `.overlay:before`                           |
| Headings        | `.heading-2` (hero h1): **90px, 700, `line-height: 1`** (60px below 992px); section `h2.heading`: **80px, 700** (live computed); `.subheading`: **11px, uppercase, `letter-spacing: .1rem`, 700**                                                                                                                  | `.heading-2`, `.heading`, `.subheading`     |
| Primary button  | `.btn-primary-gradient`: **pill `border-radius: 100px`**, `padding: 17px 28px`, `font-size: 12px`, uppercase, `letter-spacing: .2rem`, bold, white text, no border; gradient bg + black 2px inset; hover → inset fades, full gradient shows                                                                        | `.btn-primary-gradient` rules               |
| Outline button  | `.btn-primary-outline`: `padding: 7px 30px`, `border-radius: 30px`, `border: 1px solid #000`; `.white` variant → white text + `border-color: rgba(255,255,255,.2)` (pricing "Buy"); hover → `background: #fff; color: #743ad5`                                                                                     | `.btn.btn-primary-outline` rules            |
| Black button    | `.btn-black`: `background: #222`, `border: 2px solid transparent`, `border-radius: 30px`, white text, `padding: 14px 30px`; hover → transparent bg, black border + text (newsletter "Subscribe", `btn-block`)                                                                                                      | `.btn.btn-black` rules                      |
| Counters        | `.counter .number`: **90px, white** (40px below 768px); `.counter span` label: **12px, uppercase, `letter-spacing: .2rem`, `rgba(255,255,255,.3)`**                                                                                                                                                                | `.section-2 .counter` rules                 |
| Pricing card    | bg **`#743ad5`**, `border-radius: 7px`, `padding: 40px`, centered; h3 **30px white**, `margin-bottom: 20px`; p `rgba(255,255,255,.5)`; `.line` divider `margin-top: 40px`; price `$49.99` / `$199.99` / `$975.99` (`.currency` `$` + `.price` int + `.cents` `.99`); "Buy" = `.btn.btn-primary-outline.white.px-5` | `.pricing` rules                            |
| Feature card    | `.feature`: `margin-bottom: 50px`, `padding: 30px`; `.feature.dark`: `#222` box, h3 `font-weight: 400` white, p `rgba(255,255,255,.5)`; services `.feature` (light): purple icons, `#212529` h3                                                                                                                    | `.feature`, `.feature.dark` rules           |
| Testimonial     | `.bio-pic img`: **80px, `border-radius: 50%`**; carousel = tiny-slider with pagination dots (3 slides); inside `.box-white` (white bg, `padding: 50px`, `margin-top: -200px` overlap over section-6 black)                                                                                                         | `.bio-pic`, `.box-white`, tiny-slider       |
| About overlap   | section-3 `.box-white`: `background: #fff`, `margin-bottom: -50px` (overlaps into section-4); `.img-overlap`: `margin-top: -100px`; `.text-wrap`: `margin-right: 200px` (auto below 1400px)                                                                                                                        | `.section-3` rules                          |
| Form            | `.form-contact .form-control`: **transparent bg, no border, `border-bottom: 1px solid #ccc`, `border-radius: 0`**; focus → `border-color: #ba9dea` + `rgba(116,58,213,.25)` ring; `.form-group { margin-bottom: 30px }`; 3 columns on md+ (name / email / Subscribe `btn-black btn-block`)                         | `.form-contact` rules                       |
| Section rhythm  | `v-h-full` full-height hero/sections; sections padded via container; section-3 `.features-wrap { margin-bottom: 12rem }`                                                                                                                                                                                           | HTML classes + CSS                          |
| Mobile behavior | responsive Bootstrap grid (`col-lg-*`, `col-md-6 col-lg-4 col-xl-3` services, `col-sm-4` newsletter fields); `.heading-2` 60px <992px; counters 40px <768px; box-white overlaps collapse (`.img-overlap { margin-top: auto }` <992px)                                                                              | media queries in `style.css`                |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page landing with a main landmark, a
document title, and the mandatory footer.

#### Scenario: Full page render

- **GIVEN** the Jolt app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the landing sections inside the main landmark
- **AND** the document title SHALL be "Jolt — Event Countdown / Startup
  Landing"

### Requirement: Navigation bar

The system SHALL render the top navigation with the brand, the reference
link set, and a mobile menu behavior on narrow viewports.

#### Scenario: Navbar renders with links

- **GIVEN** the page is rendered
- **WHEN** the top of the page loads
- **THEN** a navigation bar SHALL be visible with the brand **"Jolt"** on the
  left
- **AND** the link set SHALL be: **Home**, **Services**, **About**, **Contact
  Us** (the source also has a "Dropdown" nav item with submenus Menu One /
  Menu Two / Menu Three — the recreation may render it as a dropdown or
  simplify to the four top-level links; the four top-level items are the
  fidelity core)
- **AND** the navbar SHALL be dark/transparent over the hero with white
  links, and collapse into a mobile menu (hamburger → slide-in panel) below
  the lg breakpoint

### Requirement: Hero section

The system SHALL render the full-height hero with the background image,
dark overlay, the source's exact headline text (typo included), sub-line,
and CTA.

#### Scenario: Hero renders with headline and CTA

- **GIVEN** the page is rendered
- **WHEN** the hero section loads
- **THEN** the hero SHALL be full-height with a dark background image
  (picsum placeholder) and a `rgba(0,0,0,.4)` overlay
- **AND** a level-1 heading SHALL read **"New template Boostrap Five"** — the
  SOURCE'S typo, present in both the live DOM and the TEMPLATES.md
  screenshot; reproduce as-is, do NOT "fix" to "Bootstrap" (90px, 700,
  `line-height: 1`, white, Jost)
- **AND** a sub-line SHALL read **"A free template by Colorlib"** (11px,
  uppercase, letter-spacing .1rem, white)
- **AND** a primary CTA SHALL read **"Read More"** styled as a pill gradient
  button (17px 28px, 100px radius, uppercase 12px, letter-spacing .2rem,
  `#743ad5`→`#d53a9d` gradient with black 2px inset that fades on hover)

### Requirement: Event countdown section

The system SHALL render the black countdown section with the heading, four
counters, the hidden-ended alert, and a CTA.

#### Scenario: Countdown renders with four counters

- **GIVEN** the hero is rendered
- **WHEN** the user scrolls to the countdown section
- **THEN** a BLACK background section SHALL be visible with the subheading
  **"Don't wait"** (white) and a level-2 heading **"Event Countdown"**
  (80px, 700, white)
- **AND** four counters SHALL be visible side by side, each with a large
  number (90px, white) and a 12px uppercase label with
  `letter-spacing: .2rem` in `rgba(255,255,255,.3)`:
  1. **39** / Days
  2. **27** / Hours
  3. **51** / Minutes
  4. **51** / Seconds
- **AND** a pill gradient **"Get Started"** button SHALL be visible below the
  counters
- **AND** the ended-alert text **"We are sorry, Event ended!"** SHALL be
  hidden by default (the source sets `display: none` via `.custom-alert`)

### Requirement: Services section

The system SHALL render the light-gray services section with the heading and
four icon feature cards, then the overlapping white about block.

#### Scenario: Services renders with four features

- **GIVEN** the countdown section is rendered
- **WHEN** the user scrolls to the services section
- **THEN** a LIGHT-GRAY `#efefef` section SHALL be visible with the
  subheading **"Services"** and a level-2 heading **"Our Services"**
- **AND** four feature cards SHALL be visible in a responsive grid (1 col
  mobile → 4 cols on xl), each with a purple icon and a heading:
  1. **Photography** — lucide `Camera`
  2. **Settings** — lucide `Settings`
  3. **Images** — lucide `Image`
  4. **Layered** — lucide `Layers`
- **AND** each card SHALL show a short Lorem-ipsum-style paragraph (paraphrase
  the source copy, same length/kind)

#### Scenario: About block overlaps into pricing

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls past the feature cards
- **THEN** a WHITE box SHALL be visible overlapping the boundary between the
  light-gray section and the next (black) section (`.box-white`,
  `margin-bottom: -50px` in the source)
- **AND** the box SHALL contain an image (picsum placeholder, `margin-top:
-100px` overlap on desktop) beside a text column with:
  - subheading **"Who we are"**
  - level-2 heading **"About us"**
  - two Lorem-ipsum-style paragraphs
  - a pill gradient **"Get Started"** button

### Requirement: Pricing section

The system SHALL render the black pricing section with the heading and three
purple pricing cards.

#### Scenario: Pricing renders with three cards

- **GIVEN** the about block is rendered
- **WHEN** the user scrolls to the pricing section
- **THEN** a BLACK section SHALL be visible with the subheading **"Prices for
  everyone"** and a level-2 heading **"Pricing"**
- **AND** three pricing cards SHALL be visible, each with a solid
  `#743ad5` background, `border-radius: 7px`, `padding: 40px`, centered:
  1. **Starter** — **$49.99** (currency `$`+`49`+ cents`.99`)
  2. **Basic** — **$199.99**
  3. **Premium** — **$975.99**
- **AND** each card SHALL show: the plan name (30px white), a
  Lorem-ipsum-style description (white 50%), a hairline `.line` divider, the
  price, and a **"Buy"** outline button (`.btn-primary-outline.white`: white
  text, `rgba(255,255,255,.2)` border, 30px radius; hover → white bg,
  `#743ad5` text)

### Requirement: More features section

The system SHALL render the full-bleed image section with the dark overlay
and three dark feature cards.

#### Scenario: More features renders over image

- **GIVEN** the pricing section is rendered
- **WHEN** the user scrolls to the features section
- **THEN** a full-height section SHALL be visible with a background image
  (picsum placeholder, desert-like) and a `rgba(0,0,0,.4)` overlay
- **AND** the section SHALL show the subheading **"Features"** (white), a
  level-2 heading **"More Features"** (white), and a short white paragraph
- **AND** three dark feature cards (`#222` boxes) SHALL be visible with
  headings **Creative**, **Design**, **Development** (white, weight 400) and
  Lorem-ipsum-style paragraphs (white 50%)

### Requirement: Testimonials and team section

The system SHALL render the black section with the white overlapping
testimonial carousel and the two-member team.

#### Scenario: Testimonial carousel renders

- **GIVEN** the more-features section is rendered
- **WHEN** the user scrolls to the testimonials
- **THEN** a BLACK section SHALL be visible whose white box (`.box-white`,
  `margin-top: -200px` overlap, `padding: 50px`) contains:
  - subheading **"Testimonials"** and level-2 heading **"People Says..."**
  - a carousel of THREE testimonial slides (the source uses tiny-slider;
    recreate with a simple accessible carousel or tabbed slides):
    1. **Jessica Smith** — Product Marketer @Google
    2. **Craig Norton** — Product Marketer @Google
    3. **Jessica Smith** — Product Marketer @Google
  - each slide SHALL show a Lorem-ipsum-style quote, a **round 80px** bio
    photo (picsum placeholder), the name, and the role line
- **AND** carousel pagination dots SHALL be visible (3 dots, active state
  tracked)

#### Scenario: Team renders with two members

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the user scrolls within the same section
- **THEN** the subheading **"Team"** and a level-2 heading **"Meet our team"**
  SHALL be visible
- **AND** two team cards SHALL be visible, each with a photo (picsum
  placeholder), the name (30px white), the role line
  (`rgba(255,255,255,.3)`), a Lorem-ipsum-style bio (white 50%), and a pill
  **"Read bio"** gradient button:
  1. **Jessica Green** — CEO, Co-Founder
  2. **Jon Gold** — CTO, Co-Founder

### Requirement: Newsletter section

The system SHALL render the light-gray newsletter section with the
underline-style form and the black subscribe button.

#### Scenario: Newsletter form renders

- **GIVEN** the team section is rendered
- **WHEN** the user scrolls to the newsletter
- **THEN** a LIGHT-GRAY `#efefef` section SHALL be visible with a level-2
  heading **"Subscribe to Newsletter"** and a short paragraph
- **AND** a three-column form (stacked on mobile) SHALL be visible with:
  - a **"Your name"** text input and a **"Your email"** email input — both
    with transparent background, NO border, a `1px #ccc` bottom border, and
    `border-radius: 0` (underline style)
  - a **"Subscribe"** submit button (`.btn-black`: `#222` bg, white text,
    30px radius, block on mobile)

### Requirement: Footer

The system SHALL render the dark footer with the four social icons and the
mandatory monorepo Component Dock credit (the source credits ColorLib — the
Component Dock link is the monorepo addition per conventions.md; NO ColorLib
reference in app code).

#### Scenario: Footer with socials and Component Dock link

- **GIVEN** the newsletter section is rendered
- **WHEN** the footer area loads
- **THEN** the footer SHALL have a dark background and SHALL show four
  centered social icons (lucide `Facebook`, `Twitter`, `Linkedin`,
  `Dribbble`)
- **AND** a copyright line SHALL read
  "Copyright © <current year> All rights reserved"
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock"

### Requirement: Accessibility

The system SHALL expose semantic landmarks, keyboard-operable nav/links, an
accessible carousel, labeled form fields, and correct reduced-motion
behavior.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark, a labelled navigation, and
  labelled form fields (the source uses bare placeholders — the recreation
  SHALL add real `<label>` or `aria-label`)
- **AND** the carousel SHALL be keyboard-operable with an accessible
  slide-group pattern (or a simpler tabbed alternative)
- **AND** all interactive elements SHALL be focusable and activatable with
  Enter/Space

## Verification checklist

- [ ] `npm run verify:app jolt` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Jolt — Event Countdown / Startup Landing"
- [ ] Navbar: brand "Jolt" + links Home / Services / About / Contact Us;
      collapses to mobile menu below lg
- [ ] Hero: full-height dark image + `rgba(0,0,0,.4)` overlay; h1 EXACTLY
      "New template Boostrap Five" (SOURCE TYPO — reproduce as-is, do NOT
      fix; 90px/700/white); sub-line "A free template by Colorlib"; pill
      "Read More" gradient button (17px 28px, 100px radius, uppercase 12px,
      letter-spacing .2rem, `#743ad5`→`#d53a9d` + black 2px inset, hover →
      inset fades)
- [ ] Countdown (BLACK bg): subheading "Don't wait", h2 "Event Countdown"
      (80px/700 white), counters 39 Days / 27 Hours / 51 Minutes / 51
      Seconds (numbers 90px white; labels 12px uppercase `rgba(255,255,255,.3)`
      letter-spacing .2rem), "Get Started" pill; "We are sorry, Event
      ended!" hidden by default
- [ ] Services (`#efefef`): subheading "Services" + h2 "Our Services"; 4
      feature cards — Photography (lucide `Camera`) / Settings (`Settings`) /
      Images (`Image`) / Layered (`Layers`) — purple icons, responsive grid
      (4 cols xl)
- [ ] About: white `.box-white` overlapping the section boundary
      (`margin-bottom: -50px`); image overlap `-100px` (desktop); "Who we
      are" / "About us" / 2 paragraphs / "Get Started" pill
- [ ] Pricing (BLACK): "Prices for everyone" / "Pricing"; 3 cards —
      Starter $49.99, Basic $199.99, Premium $975.99 — `#743ad5` bg, radius
      7px, padding 40px, h3 30px white, hairline `.line` divider, "Buy"
      outline button (`.white`: white text, `rgba(255,255,255,.2)` border;
      hover → white bg + `#743ad5` text)
- [ ] More Features: full-height bg image + overlay; "Features" /
      "More Features" + white paragraph; 3 dark cards (`#222`) — Creative /
      Design / Development (white h3 weight 400, body white 50%)
- [ ] Testimonials (BLACK): white box overlap `-200px`, padding 50px;
      "Testimonials" / "People Says..."; carousel of 3 slides (Jessica Smith
      ×2, Craig Norton — "Product Marketer @Google") with round 80px bio
      photos + pagination dots
- [ ] Team: "Team" / "Meet our team"; Jessica Green (CEO, Co-Founder) and
      Jon Gold (CTO, Co-Founder) — photo, 30px white name,
      `rgba(255,255,255,.3)` role, bio (white 50%), "Read bio" pill
- [ ] Newsletter (`#efefef`): "Subscribe to Newsletter"; underline inputs
      "Your name" / "Your email" (transparent bg, no border, `1px #ccc`
      bottom border, radius 0, focus `#ba9dea`); "Subscribe" `btn-black`
      (30px radius, block on mobile)
- [ ] Footer: dark bg; 4 social icons (lucide Facebook / Twitter / Linkedin /
      Dribbble); copyright line; Component Dock link
      `https://www.componentdock.com/`; NO ColorLib reference anywhere in
      `apps/jolt` (provenance lives only here + TEMPLATES.md + PR)
- [ ] Jost (400/600/700) via Google Fonts `<link>` in `index.html`
- [ ] Placeholder images deterministic (`https://picsum.photos/seed/jolt-<n>/…`);
      no copied assets

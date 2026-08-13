# Template: Lotly (Real Estate / Property Landing)

## Purpose

Lotly is a single-page real-estate agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Props" website template
(source: https://colorlib.com/wp/template/props/ — "Props — Free Bootstrap
5 Real Estate Website Template"), built under a DIFFERENT name (Lotly —
"lot", the land/property parcel at the heart of real estate, plus the
friendly "-ly" suffix matching the family convention: Wingly, Drivly,
Nestly, Bookly, Coastly, Restly, Sleeply, Dozely, Soarly, Lodgely,
Sneakly; single lowercase word, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-14), per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWO times in TEMPLATES.md (dup-row trap): line 619
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one)
and line 2603 (also a `- [ ]` row of the SAME template). ONE implementation
covers both rows (mark all `[x]` with the same surge URL at bookkeeping
time). Source NOT shipped anywhere (no `[x]` row, no app folder).

## Design reference (replication findings)

- **Original:** ColorLib "Props" — real-estate agency one-pager, Bootstrap
  5 based (bootstrap.min.css + tiny-slider + aos + icomoon/flaticon icon
  fonts). The recreation brands itself **Lotly** but keeps the same section
  structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/props/` — HTTP 200, ~214 KB HTML
  (REACHABLE). Custom CSS in `css/style.css` (~63 KB) + `css/tiny-slider.css`
  - `css/aos.css` + icomoon/flaticon icon fonts. Screenshot
    `props-free-template.jpg` (1200×946, viewed in browser) matches the live
    DOM top half (floating white nav over the hero → 4 feature cards →
    Popular Properties).
- **Visual design (from screenshot, viewed 2026-08-14):** modern, clean,
  professional real-estate agency look. Cool-toned desaturated modern
  architecture photo in the hero with a white uppercase centered headline;
  a floating white navbar bar; white content area with 4 feature cards
  (teal line icons); "POPULAR PROPERTIES" teal heading with a magenta/pink
  gradient pill "View all properties" button on the right; property cards
  with overlapping white content blocks below. Flat design, lots of white
  space, high-quality photography + bold magenta accent.
- **Design tokens (extracted from `css/style.css`):**
  - Brand primary: `#1f6f8b` (teal/steel blue) — nav links, section
    headings (`text-primary`), feature icons, pagination.
  - CTA/button gradient: `linear-gradient(270deg, #f82a7e 0%, #752a90 100%)`
    (hot pink → deep purple), white text — used on ALL primary buttons AND
    the 2px price underline. Hover variants darker (`#1a5e76` for teal).
  - Font: `"Noto Sans JP", sans-serif` (body + headings).
  - Buttons (custom `.btn` override): pill shape `border-radius: 30px`,
    `border: 2px solid transparent` (border-width 2px, no visible border),
    padding `15px 30px`; hover: `top: -2px` lift + shadow
    `0 15px 30px rgba(0,0,0,0.2)`.
  - Hero: full-height (`100vh`, `min-height: 600px`), background image +
    dark overlay `rgba(0,0,0,0.2)`; heading white `38px` uppercase weight
    700; search form controls pill (`border-radius: 30px`, padding
    `18px 20px`, no border); lead text 14px white.
  - Navbar: floating white bar `.menu-bg-wrap` (bg `#fff`, padding
    `20px 30px`, shadow `0 15px 30px -15px rgba(0,0,0,0.3)`) overlaying the
    hero.
  - Feature boxes (`.box-feature`): white card, `border-radius: 4px`,
    padding 30px, shadow `0 15px 30px rgba(0,0,0,0.1)`; icon `#1f6f8b`
    60px; h3 16px. Section `.features-1` overlaps the hero
    (`margin-top: -50px`, `z-index: 8`).
  - Section headings: `.section .heading` — uppercase, bold,
    `#1f6f8b` (text-primary).
  - Property cards: photo; white content block overlapping the photo
    (`margin-top: -100px`, `width: 98%`, shadow
    `0 1px 4px rgba(0,0,0,0.05)`); price 20px bold `#000` with a 2px
    gradient underline (`#f82a7e` → `#752a90`); specs row 18px icons with
    13px captions.
  - Why-us rows (`.feature-h`): circular `80px` `#efefef` icon wrap
    (`border-radius: 50%`, 2px transparent border).
  - Counters: large bold numbers with `text-black-50` captions.
  - Agents section: `bg #f8f9fa` (`bg-light`); `.agent-box` — `2px solid
#efefef` border, `border-radius: 4px`, padding 20px, `80px` circular
    avatar.
  - Footer: `background: #efefef`, padding `70px 0`, font-size 14px, text
    `#888` / `#777`.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.site-nav` → `.menu-bg-wrap` white floating bar):
     brand logo "Props" (→ Lotly) left; links right: **Home** (active) ·
     **Buy Property** · **Sell Property** · **Services** · **About** ·
     **Contact Us**; phone `+1(123)-456-7890` on the far right. Mobile:
     `.site-mobile-menu` slide-in panel.
  2. **Hero slider** (`div.hero` → `.hero-slide`, TWO slides
     `images/hero_bg_1.jpg` / `images/hero_2.jpg`, full-height, dark
     overlay): centered — h1 **"Find a Perfect Dream House"** (white,
     uppercase, 700), search form (pill text input placeholder
     "Your ZIP code or City, e.g. New York" + gradient pill **Search**
     button), lorem lead paragraph, **View Properties** button.
  3. **Feature grid** (`div.features-1`, overlaps hero, 4 ×
     `.box-feature` in `col-6 col-lg-3`, centered): **New Properties** ·
     **Contact Agent** · **Building for Sale** · **House for Sale** — each
     a 60px teal icon + 16px h3 + lorem line.
  4. **Popular Properties** (`section`): row header — left `.heading`
     "Popular Properties" (uppercase, teal, bold) + right gradient pill
     **View all properties**; `.property-slider-wrap` → `.property-slider`
     with **8** `.property-item` cards (photo; overlapping white content:
     price `$3,298,000` w/ gradient underline, address
     "5232 North Carolina Ave. 21BC", city "Carolina, USA", specs row
     `2 beds` · `2 baths`); `.controls` slider arrows.
  5. **Testimonials** (`section.sec-testimonials.pt-0`): header row —
     left heading "Testimonials" + right "View all testimonials"-style
     control slot; `.testimonial-slider-wrap` → slider with **4** cards
     (quote + name + role): **James Smith** — Designer, Co-founder ·
     **Carol Houston** · **Synthia Cameron** · **Davin Smith**; Prev/Next
     controls + dot nav below (`tns-nav`).
  6. **About / "We Bring Dream Homes To Reality"**
     (`section.section-4.border-top`): `.img-about` photo with decorative
     dots; heading + lorem; 3 `.feature-h` rows (80px circular grey icon
     wraps): **Quality properties** · **Top rated agents** · **Easy and
     safe**; `.row.section-counter.mt-5` counters: **2917** # of Buy
     Properties · **3918** # of Sell Properties · **38928** # of All
     Properties.
  7. **Our Agents** (`section.section-5.bg-light`): heading "Our Agents" +
     lorem subheading; `.agent-box` cards (80px circular avatar + name +
     role "Real Estate Agent" + lorem), e.g. **James Doe**.
  8. **Footer** (`footer.site-footer`, bg `#efefef`): CTA row
     `.footer-cta` — "Be a part of our growing real state agents" +
     gradient pill **Apply for Real Estate agent**; three columns
     **Contact** · **Sources** · **Links**; copyright bar.

## Requirements

### Requirement: Navbar

The system SHALL render a floating white navbar over the hero with the
brand, the six navigation links, and a phone number.

#### Scenario: Desktop navigation

- **GIVEN** the Lotly page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** a white navbar bar SHALL overlay the top of the hero (white
  background, padding ~20px 30px, soft drop shadow)
- **AND** the brand "Lotly" SHALL be shown on the left
- **AND** the links SHALL be shown on the right in order: Home (active) ·
  Buy Property · Sell Property · Services · About · Contact Us
- **AND** a phone number (e.g. `+1(123)-456-7890`) SHALL be shown at the
  far right of the bar

#### Scenario: Mobile navigation

- **GIVEN** the Lotly page is rendered on a viewport narrower than 992px
- **WHEN** the page loads
- **THEN** the links SHALL collapse behind a mobile menu toggle
- **AND** opening the toggle SHALL reveal a slide-in menu panel listing
  the same links

### Requirement: Hero slider

The system SHALL render a full-height hero slider with two slides, each
with a background photo, dark overlay, headline, search form, lead text,
and a call-to-action button.

#### Scenario: Hero slide content

- **GIVEN** the Lotly page is rendered
- **WHEN** the hero slider is visible
- **THEN** the hero SHALL be full-height (`100vh`, min 600px) with a
  background photo and a dark overlay (`rgba(0,0,0,0.2)`)
- **AND** the headline "Find a Perfect Dream House" SHALL be shown in
  white, uppercase, bold, centered
- **AND** a search form SHALL be shown with a pill-shaped text input
  (placeholder "Your ZIP code or City, e.g. New York") and a gradient pill
  **Search** button
- **AND** a short white lead paragraph SHALL be shown below the form
- **AND** a **View Properties** button SHALL be shown

#### Scenario: Slide transitions

- **GIVEN** the hero slider has two slides
- **WHEN** the slider advances (auto or via controls)
- **THEN** the background photo SHALL swap between the two slide images
- **AND** exactly one slide SHALL be visible at a time (others
  `aria-hidden`)

### Requirement: Feature grid

The system SHALL render four feature cards overlapping the bottom of the
hero.

#### Scenario: Feature cards

- **GIVEN** the Lotly page is rendered
- **WHEN** the hero ends
- **THEN** a 4-column (2 on small screens) grid of white cards SHALL
  overlap the hero bottom (`margin-top: -50px`, white bg, radius 4px,
  shadow `0 15px 30px rgba(0,0,0,0.1)`)
- **AND** the cards SHALL show, in order: **New Properties** ·
  **Contact Agent** · **Building for Sale** · **House for Sale**
- **AND** each card SHALL show a large teal (`#1f6f8b`) icon above a 16px
  bold title and a short lorem line

### Requirement: Popular properties slider

The system SHALL render a "Popular Properties" section with a header row
and a slider of eight property listing cards.

#### Scenario: Section header

- **GIVEN** the Lotly page is rendered
- **WHEN** the properties section is visible
- **THEN** the heading "Popular Properties" SHALL be shown left, uppercase,
  bold, teal (`#1f6f8b`)
- **AND** a gradient pill **View all properties** button SHALL be shown
  right-aligned

#### Scenario: Property cards

- **GIVEN** the properties section is rendered
- **WHEN** the slider is displayed
- **THEN** eight property cards SHALL be shown (photo on top)
- **AND** each card SHALL show a white content block overlapping the photo
  (`margin-top: -100px`, width ~98%, light shadow)
- **AND** the price SHALL be bold 20px black with a 2px pink→purple
  gradient underline (e.g. `$3,298,000`)
- **AND** an address line (e.g. "5232 North Carolina Ave. 21BC") and a
  city line (e.g. "Carolina, USA") SHALL be shown
- **AND** a specs row SHALL show 18px icons with 13px captions (e.g.
  `2 beds` · `2 baths`)
- **AND** slider arrow controls SHALL be provided

### Requirement: Testimonials

The system SHALL render a testimonials section with a header row and a
slider of four testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the Lotly page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the heading "Testimonials" SHALL be shown (uppercase, bold,
  teal)
- **AND** four testimonial cards SHALL be shown in a slider
- **AND** each card SHALL show a quote paragraph, a bold name, and a role
  line (e.g. **James Smith** — Designer, Co-founder; Carol Houston;
  Synthia Cameron; Davin Smith)
- **AND** Prev/Next controls and dot navigation SHALL be shown

### Requirement: About section with counters

The system SHALL render an about section ("We Bring Dream Homes To
Reality") with a photo, three icon feature rows, and three stat counters.

#### Scenario: About content

- **GIVEN** the Lotly page is rendered
- **WHEN** the about section is visible
- **THEN** the heading "We Bring Dream Homes To Reality" SHALL be shown
  (uppercase, bold, teal) with a short paragraph
- **AND** a photo with decorative dots SHALL be shown beside the text
- **AND** three feature rows SHALL be shown, each with an 80px circular
  grey (`#efefef`) icon wrap: **Quality properties** · **Top rated
  agents** · **Easy and safe**

#### Scenario: Stat counters

- **GIVEN** the about section is rendered
- **WHEN** the counters row is visible
- **THEN** three counters SHALL be shown with bold large numbers and
  muted captions: **2917** # of Buy Properties · **3918** # of Sell
  Properties · **38928** # of All Properties

### Requirement: Agents section

The system SHALL render an "Our Agents" section on a light-grey background
with agent cards.

#### Scenario: Agent cards

- **GIVEN** the Lotly page is rendered
- **WHEN** the agents section is visible
- **THEN** the heading "Our Agents" SHALL be shown (uppercase, bold, teal)
  with a short lorem subheading
- **AND** agent cards SHALL be shown, each with an 80px circular avatar, a
  bold name (e.g. **James Doe**), the role "Real Estate Agent", and a
  lorem paragraph, inside a `2px #efefef` bordered box (radius 4px)

### Requirement: Footer

The system SHALL render a light-grey footer with a CTA row, three link
columns, and a copyright bar.

#### Scenario: Footer CTA and columns

- **GIVEN** the Lotly page is rendered
- **WHEN** the page is scrolled to the footer
- **THEN** a `#efefef` footer SHALL be shown (padding ~70px 0, 14px text
  in `#888`)
- **AND** the CTA row SHALL show "Be a part of our growing real state
  agents" with a gradient pill **Apply for Real Estate agent** button
- **AND** three columns SHALL be shown: **Contact** · **Sources** ·
  **Links**, each with the relevant links
- **AND** a centered copyright line SHALL be shown with a neutral credit
  (the source's Colorlib attribution SHALL be replaced; brand renamed to
  Lotly)

### Requirement: Responsive behavior

The system SHALL collapse the navbar to a mobile slide-in menu below 992px
and stack the multi-column sections to single columns on small screens.

#### Scenario: Stacked columns

- **GIVEN** the Lotly page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** the feature grid SHALL show two cards per row (2 × 2)
- **AND** the property cards, testimonial cards, agent cards, about
  columns, and footer columns SHALL stack vertically

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-lotly`
- [ ] `scripts/verify-app.sh lotly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): floating white navbar
      (Lotly brand · Home active / Buy Property / Sell Property / Services
      / About / Contact Us · phone) → hero slider (2 slides: "Find a
      Perfect Dream House", pill search form + Search button, View
      Properties) → feature grid (New Properties / Contact Agent /
      Building for Sale / House for Sale, overlapping hero) → Popular
      Properties (header + View all properties, 8 property cards with
      overlapping content, price + gradient underline, beds/baths specs,
      arrows) → testimonials (4 cards: James Smith / Carol Houston /
      Synthia Cameron / Davin Smith, quote + name + role, Prev/Next +
      dots) → about "We Bring Dream Homes To Reality" (photo + dots, 3
      icon rows: Quality properties / Top rated agents / Easy and safe,
      counters 2917/3918/38928) → Our Agents (bg-light, agent boxes:
      James Doe — Real Estate Agent) → footer (#efefef, CTA row "Be a
      part of our growing real state agents" + Apply for Real Estate
      agent, Contact / Sources / Links, copyright)
- [ ] Brand color `#1f6f8b` (teal) in `@theme`; CTA gradient
      `#f82a7e → #752a90` used for all primary buttons + price
      underlines; keep exact (unique in the family)
- [ ] Body font "Noto Sans JP" via Google Fonts `<link>` in `index.html`
- [ ] Buttons: pill (`border-radius: 30px`, padding 15px 30px, 2px
      transparent border), gradient bg, hover lift (-2px) + shadow
      `0 15px 30px rgba(0,0,0,0.2)`
- [ ] Hero full-height w/ dark overlay; navbar white floating bar
      (`#fff`, padding 20px 30px, shadow `0 15px 30px -15px
    rgba(0,0,0,0.3)`); feature cards overlap hero (-50px)
- [ ] Property content blocks overlap their photos (-100px, width ~98%);
      section headings uppercase bold teal
- [ ] Footer `#efefef`, text `#888`; agents section `bg #f8f9fa`;
      agent boxes 2px `#efefef` border, 80px circular avatars; counters
      with muted captions
- [ ] Placeholder images via `picsum.photos/seed/lotly-<n>/<w>/<h>`
      (subject-appropriate seeds: modern architecture/houses for hero +
      property cards, faces for testimonials/agents), icons from
      lucide-react (brand icons as inline SVG simple-icons paths), no
      copied assets
- [ ] Brand renamed "Props"/"Colorlib" → "Lotly" everywhere; copyright
      credit neutral
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows
      (line 619 Bootstrap 5, line 2603) `[x]` with the same surge URL +
      `npm run readme:status` (implementer)

# Template: Cargolane (Transportation)

## Purpose

Cargolane is a single-page logistics & freight-company marketing site in
the free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Logis" template (source slug `logis`; the preview's
own `<title>` is "Logistics — Colorlib Website Template") built under a
DIFFERENT name (Cargolane — a freight "lane"/route; single lowercase
word), per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `logis`
- **Source:** https://colorlib.com/wp/template/logis/
- **Preview — REACHABLE (verified 2026-10-01):**
  https://preview.colorlib.com/theme/logis/ — **HTTP 200, 31,165 bytes**
  (full live template page: navbar + slider hero + 10 content sections +
  4-column footer). All DOM structure, copy, and design tokens in this
  spec were captured directly from that preview and its stylesheets
  (`css/style.css`, 25,007 B, and `css/bootstrap.min.css`, 27,894 B with
  the primary overridden) — implementers do NOT need to re-fetch
  anything.
- **Preview screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/logis-free-template.jpg
  — ⚠️ served as a **REAL AVIF 1200×946** despite the `.jpg` extension
  (54,325 bytes; converted to PNG locally for vision analysis,
  2026-10-01). Shows the hero (parcel-scanner warehouse photo, white
  "WE MAKE SHIPPING" h1, orange GET STARTED! button) and the About Us
  section below. NOTE: the screenshot's navbar shows only 6 links
  (Home, About Us, Services, Industries, Blog, Contact) — the LIVE
  preview (canonical) has **8** (adds How It Works, Our Team). Use the
  live preview's structure.
- **Category:** `## Transportation (22)` — TEMPLATES.md item at line
  2963; slug `logis` appears exactly once.
- **Name collision check:** "cargolane" = 0 hits in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, TEMPLATES.md, and all spec/docs
  content (case-insensitive), 2026-10-01. Distinct from the existing
  logistics-family names on main (cargo, cargoly, cargomate, freight,
  freightflow, freightly, haulage, haulio, logistico, logistix, shiply,
  shipment, shipwise, drayage) and from the ColorLib source name "Logis".
- **Source tech:** Bootstrap 4 + jQuery (navbar scrollspy, owl.carousel
  ×2, magnific-popup video, AOS scroll animations, icomoon/flaticon
  icons). Recreation: React state + Tailwind; icons from `lucide-react`;
  carousels as lightweight React state components (no owl dependency);
  AOS-style reveals optional/subtle.
- **Signature look:** white/light page, single orange accent `#f16821`,
  Poppins 300 body, square uppercase buttons with 0.2em tracking, dark
  image-overlay sections (How It Works, Watch The Video), dark `#333`
  footer, green `#8bc34a` check bullets, section headings in orange with
  a short 80×3px orange underline.

## Design tokens

(Canonical values captured 2026-10-01 from the preview's stylesheets.
CSS values are canonical over the screenshot.)

### Global

| Token | Value | Notes |
| --- | --- | --- |
| Font family | **Poppins** (body + all headings) | Google Fonts link loads `Poppins:200,300,400,700,900` (also requests `Display+Playfair` but `style.css` never references it — load Poppins only, weights 300/400/700/900 at minimum) |
| Body text | color **`#4d4d4d`**, font-weight **300**, size **1rem**, line-height **1.7** | light corporate body |
| Brand primary | **`#f16821`** (orange) | `text-primary`, `btn-primary`, nav active link, heading underline, focus borders — the ONLY accent color |
| Primary button `.btn-primary` | background **`#f16821`**, color **`#fff`**, border `#f16821` | Bootstrap primary overridden to `#f16821` in bootstrap.min.css |
| Button shape `.btn` | border-radius **0** (square), `text-transform: uppercase`, `letter-spacing: .2em` | all buttons square + tracked |
| Hero/cover buttons | **2px solid transparent** border; hover: white text, transparent bg, **2px `#fff` border** | `.site-blocks-cover .btn` pattern |
| Headings h1/h2/h3/h5 | Poppins | `.heading-section`/section h2s render in **`text-primary` (`#f16821`)** |
| Section heading underline `.border-primary:after` | **80px × 3px**, background **`#f16821`**, centered, below heading | `.border-primary h2 { text-transform: uppercase; font-weight: 700 }` |
| Cover h1 | **4rem / 900 / `#fff`**, uppercase (class: `text-white font-weight-light text-uppercase font-weight-bold`) | hero headline treatment |
| Cover/overlay bg | image + **`rgba(0,0,0,0.4)`** overlay (`.site-blocks-cover.overlay:before`) | How It Works + Watch The Video sections |
| Light section bg | **`#edf0f5`** / **`#f4f5f9`** (light blue-gray) | `bg-light` sections (Services, Contact) |
| Check bullets `.ul-check.success li:before` | color **`#8bc34a`** (green), icomoon check glyph | About Us list (matches screenshot) — NOT orange |
| Footer bg | **`#333333`**, padding **4em 0** mobile / **8em 0** desktop | `.site-footer` |
| Footer text | **`#737373`**; footer headings (`h2/h3/h5`) **`#fff`**; divider `border-top: 1px solid rgba(255,255,255,0.1)` | dark footer |
| Blog meta | color **`#b3b3b3`**, **14px** | `.h-entry .meta` |
| Testimonial quote | **1.5rem italic**; author **1rem** non-italic; avatar **100px**, `border-radius: 50%` | `.testimonial` (max-w 800px, centered) |
| Inputs `.form-control` | height **43px**, border-radius **0**, focus border **`#f16821`** | square inputs matching square buttons |
| Section padding | `.site-section` **5em 0** desktop / 2.5em mobile | vertical rhythm |
| Navbar | absolute over hero; links white, uppercase, **14px**, `letter-spacing: .1em`; active link **`#f16821`**; `.scrolled` → fixed **`#fff`** bg, black links, shadow `0 4px 15px -5px rgba(0,0,0,0.1)` | transparent→solid scroll behavior |
| Industry card `.unit-1` | image `object-fit: cover` full card; white title text absolutely positioned over the image bottom | carousel tiles |
| Service icon `.unit-4-icon span` | **3rem** icon; item title **20px** | icon+text horizontal unit |
| Team name `.person h3` | **18px** | person card |
| Blog card title | **20px** | `.h-entry h2` |
| Icons (source) | icomoon/flaticon (NEVER copied) | recreation uses `lucide-react` |

### Section background map (top → bottom)

| # | Section | Background |
| --- | --- | --- |
| 1 | Navbar | transparent over hero → white when scrolled |
| 2 | Hero slider | full-viewport photo, `rgba(0,0,0,.4)` overlay |
| 3 | About Us | white |
| 4 | How It Works | photo (`hero_bg_4`-style) + `rgba(0,0,0,.4)` overlay |
| 5 | Our Team | white, `border-bottom` |
| 6 | Our Services | light `#edf0f5`/`#f4f5f9` |
| 7 | Industries | white (carousel) |
| 8 | Watch The Video | photo (`hero_bg_2`-style) + overlay, `background-attachment: fixed` |
| 9 | Testimonials | white, bordered section (owl carousel) |
| 10 | Our Blog | white |
| 11 | Contact Us | light |
| 12 | Footer | `#333333` |

## Requirements

### Requirement: App shell, design tokens, and fonts

The app SHALL be a single-page site at `apps/cargolane` (package
`@free-react-templates/cargolane`) implementing the section order above
1:1. Poppins SHALL be loaded via Google Fonts `<link>` in `index.html`
(weights 300/400/700/900 minimum — never ship font files). `src/index.css`
SHALL register the brand tokens in `@theme` (at minimum
`--color-primary: #f16821`, `--color-body: #4d4d4d`,
`--color-footer: #333333`, `--color-footertext: #737373`,
`--color-light: #edf0f5`, `--color-check: #8bc34a`,
`--color-meta: #b3b3b3`) and set the body default to Poppins 300 /
1rem / 1.7 / `#4d4d4d`. All buttons and form inputs SHALL be square
(radius 0), uppercase + `letter-spacing: 0.2em` on buttons; the primary
button SHALL be `#f16821` with white text.

#### Scenario: Tokens registered

- **GIVEN** the app renders
- **THEN** `@theme` defines the primary `#f16821` and the supporting
  tokens above
- **AND** the body renders Poppins at weight 300, color `#4d4d4d`,
  line-height 1.7

#### Scenario: Fonts loaded without shipping files

- **GIVEN** `index.html`
- **THEN** a Google Fonts `<link>` requests Poppins (300/400/700/900)
- **AND** no `.woff`/`.ttf`/font binary is shipped in the app

### Requirement: Navbar (transparent → scrolled)

The navbar SHALL overlay the hero transparently: white logo wordmark
("Cargolane" — NEW name, never "Logis") on the left; on the right,
uppercase 14px/`0.1em`-tracked links — Home, About Us, How It Works,
Our Team, Services, Industries, Blog, Contact — each scrolling to its
section anchor. The active link SHALL render orange `#f16821`. On
scroll past the hero threshold the navbar SHALL become fixed white with
black links and a soft shadow (`0 4px 15px -5px rgba(0,0,0,0.1)`).
Mobile SHALL collapse to a hamburger menu (white icon over hero, black
when scrolled).

#### Scenario: Overlays the hero

- **GIVEN** the page loads at the top
- **THEN** the navbar sits over the hero image with white logo and white
  links
- **AND** no solid background is painted behind it

#### Scenario: Solidifies on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar becomes fixed at the top with a white background,
  black links, and the soft shadow
- **AND** the active section's link is orange `#f16821`

#### Scenario: Anchor navigation

- **GIVEN** the user clicks "Services"
- **THEN** the page scrolls to the Our Services section
- **AND** all 8 nav links resolve to their matching section anchors

### Requirement: Hero slider

The hero SHALL be a full-viewport (`min-height: 100vh`) photographic
cover with the `rgba(0,0,0,0.4)` dark overlay and centered white
content: an uppercase bold h1 "We Make Shipping" (paraphrase allowed —
same kind: short shipping/logistics claim), a light subheadline
("A Logistics Company" kind), and a primary CTA button ("Get Started!"
kind) styled square/orange. If implemented as a slider, slides SHALL
rotate with simple crossfade/auto-advance; a single-slide hero is an
acceptable documented simplification. Imagery: logistics photo via
`https://picsum.photos/seed/cargolane-hero-<n>/<w>/<h>` placeholders
(asset rule — never copy ColorLib images).

#### Scenario: Hero renders

- **GIVEN** the page loads
- **THEN** a full-viewport photo cover with dark overlay renders
- **AND** white centered h1 + subheadline + orange square CTA render
- **AND** the h1 is uppercase, weight 900, 4rem (desktop)

### Requirement: About Us

A white two-column section: left — orange uppercase "About Us" heading
with the 80×3px orange underline, two body paragraphs, and a checklist
of 3 items with **green `#8bc34a`** check bullets (`.ul-check.success`
— NOT orange); right — a logistics photo (order reverses on mobile:
image stacks above/below per source `order-md-2`). Copy is
paraphrase-able but must keep the same kinds (2 paragraphs + 3 short
checklist claims).

#### Scenario: Section composition

- **GIVEN** the About Us section
- **THEN** the heading is orange with the 80px underline beneath it
- **AND** 3 checklist items render with green `#8bc34a` check marks
- **AND** a photo occupies the opposite column

### Requirement: How It Works

A dark image-overlay section (logistics photo + `rgba(0,0,0,0.4)`
overlay): centered white heading "How It Works" (light weight) and
**3 equal columns** — Make An Order, Make A Payment, Track Your Order —
each an icon + white title + short white blurb (the source's
`how-it-work-item` pattern). Copy paraphrase allowed per item (keep the
3-step order/pay/track flow).

#### Scenario: Three-step row

- **GIVEN** the How It Works section
- **THEN** 3 items render side by side (stacking on mobile)
- **AND** each has an icon, a title (Order → Payment → Track), and a
  blurb
- **AND** the section background is a photo with a 40% black overlay and
  white text

### Requirement: Our Team

A white section with bottom border: centered orange heading "Our Team"
+ underline, and **3 person cards** — photo (square-ish crop), name
(18px), role line, short blurb. Sample names/roles in the source:
Co-Founder President / Co-Founder COO / Marketing — paraphrase allowed
(same kinds: 2 founders + 1 marketing person). Photos: `picsum.photos`
seeds.

#### Scenario: Person cards

- **GIVEN** the Our Team section
- **THEN** 3 person cards render with photo, name, role, blurb
- **AND** the heading treatment matches the About/section-heading style

### Requirement: Our Services

A light (`#edf0f5`/`#f4f5f9`) section: centered orange heading "Our
Services" + short blurb, then **6 icon+text units** in a 3×2 grid
(source `unit-4`: large 3rem icon left, 20px title + blurb + "Learn
More" text link right): Air Freight, Ocean Freight, Land
Transportation, Warehousing, Storage, Worldwide Delivery. Titles are the
canonical service kinds — keep them (they define the logistics domain).

#### Scenario: Six services grid

- **GIVEN** the Our Services section
- **THEN** 6 units render in a 3-column grid (2 rows; 1 column on
  mobile)
- **AND** each unit has an icon, one of the six service titles, a
  blurb, and a Learn More link

### Requirement: Industries carousel

A white section with orange heading "Industries" + blurb and a
horizontally-rotating carousel of image tiles (`unit-1` pattern:
full-bleed photo, white title text over the image bottom): Storage, Air
Transports, Cargo Transports, Cargo Ship, Ware Housing (+ optional 6th
tile). React translation: simple state-based carousel (index + prev/next
arrows or auto-advance) — NO owl.carousel dependency. Tiles use
`picsum.photos` seeds.

#### Scenario: Carousel content + controls

- **GIVEN** the Industries section
- **THEN** ≥5 image tiles with white overlay titles render
- **AND** prev/next controls rotate the visible tiles
- **AND** no third-party carousel library is bundled

### Requirement: Watch The Video cover

A full-width photographic cover section (logistics photo + 40% black
overlay, desktop `background-attachment: fixed` where supported):
centered white uppercase heading "Watch The Video" and a large circular
play affordance (lucide Play icon). The play control MAY be a static
affordance (no real video — documented simplification) or open a modal;
it SHALL be a labeled button.

#### Scenario: Video cover renders

- **GIVEN** the Watch The Video section
- **THEN** a photo cover with 40% overlay renders with the white
  heading and a circular play button
- **AND** the play control has an accessible name (e.g. aria-label
  "Play video")

### Requirement: Testimonials

A white bordered section: centered orange heading "Testimonials" + a
rotating testimonial slider: each slide a centered blockquote (italic,
1.5rem quote, 1rem non-italic author line) with a 100px round avatar
above; ≥4 testimonials; prev/next controls (state-based carousel).
Content: paraphrase-allowed praise quotes about shipping/logistics
reliability.

#### Scenario: Testimonial slides

- **GIVEN** the Testimonials section
- **THEN** ≥4 slides render, each with round avatar, italic quote, and
  author line
- **AND** the controls advance between slides

### Requirement: Our Blog

A white section: orange heading "Our Blog" + blurb ("See Our Daily News
& Updates" kind), then **3 blog cards** — image on top (30px bottom
margin), meta line (date + category "News", 14px `#b3b3b3`), 20px
title, short excerpt — followed by a centered square "View All Blog
Posts" button (outline/primary per source `btn`). Canonical title kind:
"How Logistics Company Improve Spendings" (paraphrase allowed).

#### Scenario: Blog cards

- **GIVEN** the Our Blog section
- **THEN** 3 cards render with image, meta (date + category), title,
  excerpt
- **AND** a View All Blog Posts button renders below the grid

### Requirement: Contact Us

A light section, two columns: left — contact form with labeled fields
First Name, Last Name, Email, Subject, Message (textarea) and a
"Send Message" primary button (square, `#f16821`); inputs 43px tall,
radius 0, focus border `#f16821`; right — stacked white info cards
(`p-4 bg-white` pattern): Address, Phone, Email Address (source values:
"203 Fake St. Mountain View, San Francisco, California, USA" /
"+1 232 3235 324" / "youremail@domain.com" — paraphrase allowed, keep
the 3 kinds) plus a short "More Info" blurb with a Learn More link.
Form SHALL validate client-side (required + email format) and block
submit until valid; submission is local-only (no backend — show a
success state).

#### Scenario: Form fields and validation

- **GIVEN** the contact form renders
- **THEN** 5 labeled fields + submit render (labels associated via
  `htmlFor`)
- **WHEN** required fields are empty or email is malformed
- **THEN** submit is blocked and per-field errors show
- **WHEN** the form is valid and submitted
- **THEN** a success state replaces/acknowledges the form (no network
  call)

#### Scenario: Info cards

- **GIVEN** the contact right column
- **THEN** Address / Phone / Email Address cards render as white cards
  on the light background

### Requirement: Footer (4 columns + newsletter) and Component Dock attribution

A `#333333` footer (padding 8em 0 desktop): 4 columns — **About Us**
(blurb), **Quick Links** (About Us, Services, Testimonials, Contact
Us), **Follow Us** (social icon buttons, lucide icons, aria-labeled),
**Subscribe Newsletter** (email input + square "Send" button);
white headings, `#737373` body text, `rgba(255,255,255,0.1)` top
divider. The bottom bar SHALL carry the copyright line and a link to
https://www.componentdock.com/ branded "Component Dock" (monorepo rule
— replaces the source's attribution; documented divergence). Newsletter
form validates email format client-side with a success state. The app
SHALL NOT reference ColorLib anywhere (comments included — provenance
lives only in this spec, TEMPLATES.md, and the PR).

#### Scenario: Four-column footer

- **GIVEN** the footer renders
- **THEN** 4 columns render (About / Quick Links / Follow Us /
  Subscribe Newsletter) on the `#333333` background
- **AND** headings are white, body text `#737373`

#### Scenario: Component Dock attribution, no ColorLib

- **GIVEN** any page of the app
- **THEN** a footer link to https://www.componentdock.com/ exists
  ("Component Dock" branding)
- **AND** no file in the app contains "colorlib" (case-insensitive)

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form
- **WHEN** the email is invalid
- **THEN** submit is blocked with an error
- **WHEN** valid
- **THEN** a success state shows (no network call)

### Requirement: Placeholder assets and provenance rules

All imagery SHALL use deterministic placeholders
`https://picsum.photos/seed/cargolane-<section>-<n>/<w>/<h>` (hero,
about, team ×3, industries ≥5, video cover, blog ×3, testimonial
avatars — avatars may use a smaller square seed). Icons SHALL come from
`lucide-react`. No ColorLib image, icon font, CSS file, or JS library
SHALL be copied or shipped.

#### Scenario: Placeholder imagery

- **GIVEN** the rendered app
- **THEN** every `<img>`/background image resolves to a
  `picsum.photos/seed/cargolane-*` URL
- **AND** icons render from lucide-react (no icomoon/flaticon assets)

### Requirement: Accessibility (global semantics)

Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`,
`<footer>`); exactly one h1 (the hero headline); section headings h2;
nav toggle with `aria-expanded`; icon-only controls (social, carousel
arrows, play, mobile menu) SHALL have `aria-label`s; form labels
associated; all interactive elements keyboard-focusable with visible
focus; text contrast readable on static backgrounds (overlay sections
keep the 40% dark overlay under white text); carousels usable without
autoplay-only access (controls present).

#### Scenario: Landmarks and headings

- **GIVEN** the page renders
- **THEN** exactly one h1 exists (hero) and each section has an h2
- **AND** nav/main/footer landmarks exist

#### Scenario: Keyboard + labels

- **GIVEN** a keyboard user
- **THEN** nav toggle, carousel arrows, play button, social links, and
  both forms are reachable and operable
- **AND** icon-only controls expose accessible names

### Requirement: Responsive behavior

Navbar collapses to a hamburger below the xl breakpoint (source hides
the inline menu below `xl`); hero h1 scales (4rem → 2rem mobile per
source); 3-column grids (How It Works, Team, Services, Blog) stack to
1 column on mobile; contact columns stack; footer columns stack to 2/1;
carousels show 1 tile/slide on narrow viewports; no horizontal overflow
at 360px.

#### Scenario: Narrow viewport

- **GIVEN** a 360px viewport
- **THEN** the hamburger menu shows, grids stack to single column, and
  the page has no horizontal scroll
- **AND** the hero content remains readable (scaled h1)

## Verification checklist

- [ ] Poppins 300/400/700/900 via Google Fonts `<link>` (no font files
      shipped); `@theme` tokens: `--color-primary: #f16821`,
      `--color-body: #4d4d4d`, `--color-footer: #333333`,
      `--color-footertext: #737373`, `--color-light: #edf0f5`,
      `--color-check: #8bc34a`, `--color-meta: #b3b3b3`
- [ ] Buttons/inputs square (radius 0); buttons uppercase + 0.2em
      tracking; primary = `#f16821`/white; hero buttons 2px transparent
      border → white outline on hover; inputs 43px with `#f16821` focus
- [ ] Section order 1:1: Navbar → Hero → About Us → How It Works → Our
      Team → Our Services → Industries → Watch The Video → Testimonials
      → Our Blog → Contact Us → Footer
- [ ] Navbar: transparent over hero, white links, active `#f16821`,
      scrolled state = fixed white + black links + soft shadow; 8 links
      (Home, About Us, How It Works, Our Team, Services, Industries,
      Blog, Contact) with working anchors; mobile hamburger
- [ ] Hero: 100vh photo cover + 40% overlay; white uppercase 900-weight
      h1 + sub + orange CTA
- [ ] About: orange heading + 80×3px underline, 2 paragraphs, 3 green
      `#8bc34a` check items, photo column
- [ ] How It Works: dark photo-overlay section, 3 steps (Order → Payment
      → Track) with icons
- [ ] Team: 3 person cards (photo, 18px name, role, blurb)
- [ ] Services: light bg, 6 units (Air/Ocean Freight, Land
      Transportation, Warehousing, Storage, Worldwide Delivery) with
      3rem icons + Learn More links
- [ ] Industries: state-based carousel (NO owl dependency), ≥5 image
      tiles with white overlay titles + prev/next
- [ ] Video cover: photo + overlay + white heading + labeled circular
      play button
- [ ] Testimonials: state-based slider, ≥4 slides (1.5rem italic quote,
      1rem author, 100px round avatar)
- [ ] Blog: 3 cards (image, 14px `#b3b3b3` meta, 20px title, excerpt)
      + View All Blog Posts button
- [ ] Contact: 5-field validated form (blocked until valid, local
      success state) + Address/Phone/Email white info cards + More Info
      blurb
- [ ] Footer: `#333333`, 4 columns (About/Quick Links/Follow Us/
      Subscribe), white headings, `#737373` text, newsletter with email
      validation + success state, copyright bar
- [ ] Footer links https://www.componentdock.com/ ("Component Dock");
      zero ColorLib references anywhere in the app (comments included)
- [ ] All imagery = `picsum.photos/seed/cargolane-*`; icons =
      lucide-react; no copied assets
- [ ] A11y: one h1, h2 per section, landmarks, aria-labels on
      icon-only controls, labeled forms, keyboard-operable carousels +
      menu
- [ ] Responsive: hamburger < xl, stacked grids at mobile, no
      horizontal overflow at 360px
- [ ] 100% test coverage via `scripts/verify-app.sh cargolane`
      (carousels/menu/testimonial state fully testable with
      `fireEvent`/`userEvent`; jsdom cannot compute styles — assert
      classes/structure, not computed colors); PR `feat/template-cargolane`
      with source slug + preview/screenshot URLs + tokens in the
      description

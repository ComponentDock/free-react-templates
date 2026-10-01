# Template: Vitesse (Transportation)

## Purpose

Vitesse is a single-page logistics & freight marketing site in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Logisticexpress" template (source slug
`logisticexpress`; the preview's own `<title>` is "Transportation
HTML-5 Template") built under a DIFFERENT name (Vitesse — French for
"speed/velocity", single lowercase word), per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `logisticexpress`
- **Source:** https://colorlib.com/wp/template/logisticexpress/
- **Preview — REACHABLE (verified 2026-10-01):**
  https://preview.colorlib.com/theme/logisticexpress/ — **HTTP 200,
  39,236 bytes** (full live template page: dark utility+nav header,
  slider hero with tracking form, 8 content sections, dark footer).
  All DOM structure, copy, and design tokens in this spec were
  captured directly from that preview and its stylesheets
  (`assets/css/style.css`, 63,411 B — canonical theme tokens, and
  `assets/css/bootstrap.min.css`, 26,625 B — stock Bootstrap 4 colors,
  NOT overridden) — implementers do NOT need to re-fetch anything.
- **Preview screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/logisticexpress-free-template.jpg
  — real JPEG 1200×946 (124,991 bytes, verified 2026-10-01). Shows:
  dark navy top utility bar (phone/email + social icons), dark main
  nav (orange truck glyph + "LOGISTIC EXPRESS" wordmark, links
  Home/About/Services/Blog/Contact, orange "GET A QUOTE" button),
  hero photo (semi-truck at a depot, dark left overlay) with white
  condensed h1 "Safe & Reliable **Logistic** Solutions!" (orange
  accent word) + white tracking form (input "Your Tracking ID" +
  orange "TRACK & TRACE" button + small italic "FOR ORDER STATUS
  INQUIRY"), then a white info bar with 3 orange-icon items (phone /
  hours / address). The live preview (canonical) adds a Blog dropdown
  (Blog, Blog Details, Element) the screenshot does not show.
- **Category:** `## Transportation (22)` — TEMPLATES.md item at line
  2965; slug `logisticexpress` appears exactly once.
- **Name collision check:** "vitesse" = 0 hits (case-insensitive) in
  `ls apps/`, `openspec/specs/`, `docs/`, TEMPLATES.md, and all
  spec/docs content on origin/main (`git grep`), 2026-10-01. Distinct
  from the logistics-family names on main (swiftly, shiply, logistix,
  logistico, haulage, haulio, drayage, cargoly, cargomate, cargolane,
  freightly, freightflow, shipment, shipwise, convey, depot, fleetly,
  drively, drivego, packwell, consignly, highway) and from the
  ColorLib source name "Logisticexpress".
- **Source tech:** Bootstrap 4 + jQuery (slick slider, slicknav,
  nice-select, magnific-popup, animate.min.css,
  flaticon/themify/fontawesome icon fonts). Recreation: React state +
  Tailwind; icons from `lucide-react`; hero slider as a lightweight
  React state component (no slick dependency); AOS-style reveals
  optional/subtle.
- **Signature look:** solid dark navy `#000c20` header + `#121212`
  footer, white/light body, single orange accent family (`#f15f22`
  accents / `#ff5f13` buttons with `#e0581e` slide-in hover), deep
  indigo `#1f2b7b` secondary, condensed **Teko** headings (hero h1
  95px) + **Barlow** body, rounded-5px uppercase buttons, light
  `#f9f9f9`/`#f9f9ff`/`#f5f5f5` section tints, photographic
  backgrounds on the quote + testimonial sections, white rounded CTA
  cards.

## Design tokens

(Canonical values captured 2026-10-01 from the preview's stylesheets.
CSS values are canonical over the screenshot.)

### Global

| Token | Value | Notes |
| --- | --- | --- |
| Heading font | **Teko** (all h1–h6) | condensed display sans; Google Fonts via `<link>` |
| Body/button font | **Barlow** (body, buttons, nav) | `body{font-family:"Barlow",sans-serif;font-weight:normal}` |
| Hero h1 | Teko **95px / 600 / `#fff`**, capitalize, line-height 95px, mb 40px | scales 50px → 35px on smaller viewports |
| Accent word in headings | **`#f15f22`** | `.hero-cap span`, `.section-tittle span` |
| Brand accent | **`#f15f22`** (orange) | section eyebrow spans (18px/600 capitalize), info icons 44px, team-caption hover bg, slider-arrow hover |
| Button orange | **`#ff5f13`** (`.btn` + `.submit-btn` bg) | hover: slide-in `::before` overlay **`#e0581e`** (scaleX 0→1) |
| Button shape | border-radius **5px**, `text-transform: uppercase`, `letter-spacing: 1px`, Barlow **14px/400** | `.btn` padding **27px 44px**; `.submit-btn` padding **19px 44px**, width 100%; nav CTA `.header-btn` padding **25px 35px** |
| Secondary indigo | **`#1f2b7b`** | `genric-btn.primary`, emphasis tags, blockquote border, list bullets/numbers — register as `--color-indigo` (generic utilities; used sparsely on the home page) |
| Header bg | **`#000c20`** (solid, NOT transparent) | utility bar + main nav; scrolled shadow `0 10px 15px rgba(25,25,25,0.1)` |
| Footer bg | **`#121212`** | `.footer-area` |
| Footer divider | **`#1a2537`** | `.footer-heading` border-bottom (pb 51px, mb 82px) |
| Dark text | **`#2c234d`** | info caption labels 20px/600, team names 20px/700 (hover `#f15f22`), h6 (Teko 500) |
| Body text | **`#677294`** (16px) | info values, testimonial founder lines |
| Muted text | **`#717b9b`** | `.section-tittle p` blurbs |
| Quote text | **`#a4acc3`** | testimonial quote p, 16px/500, mb 50px |
| Footer text | **`#c4c4c4`** | `.footer-pera .info1` 14px, line-height 1.8 |
| Link color | **`#635c5c`** | default `a` color |
| Info bar bg | **`#f9f9f9`** | `.our-info-area` (pt 70 pb 40) |
| Lavender tint | **`#f9f9ff`** | generic blockquote bg (secondary) |
| Soft gray | **`#f5f5f5`** | `.contact-form-wrapper` + `.blog-date` badge |
| Card border | **`#e1ebf7`** | `.single-cat` 1px, radius **6px**, padding **85px 22px** (50px mobile) |
| Form card | **`#f5f5f5`**, padding **80px**, radius **8px** | `.contact-form-wrapper` |
| CTA card | **`#fff`**, padding **50px**, radius **10px** | `.testimonial-form` |
| Blog image | radius **6px**, mb 30px | `.blog-img` |
| Blog date badge | bg `#f5f5f5`, radius 6px, padding 14px 19px | day large + month small |
| Slider arrows | 50×50, radius **6px**, border 1px **`#616373`**, color `#616373`, bg none, right 90px bottom 0 | hover border+color `#f15f22` |
| Hero bg | photographic, min-height **1080px** desktop, cover center | `.slider-height` (source `h1_hero.jpg` — never copied) |
| Quote/testimonial bg | photographic (source `hero2.jpg`-style), `background-attachment: fixed` on desktop (`fix` class) | white heading text on testimonial; quote card `#f5f5f5` |
| Section rhythm | `.section-padding30` **195px/170px** desktop → 150/110 → 100/70 → **65px/30px** mobile | generous vertical rhythm |
| Testimonial padding | **190px/170px** desktop → 60px/40px mobile | `.testimonial-padding` |
| Footer padding | **105px/50px** desktop → 80px/0 mobile | `.footer-padding` |
| Team caption | absolute bottom **-36px**, bg **rgba(255,255,255,0.6)**, pt 20px pb 30px | hover: bg `#f15f22`, bottom 0, name white, social icons rise (staggered 0/0.1/0.2/0.3s) |
| Generic btn palette | primary `#1f2b7b`, success `#4cd3e3`, info `#38a4ff`, warning `#f4e700`, danger `#f44a40` | `genric-btn.*` hover = white bg + colored border/text (register as tokens; sparse use on home) |
| Icons (source) | flaticon/themify/fontawesome (NEVER copied) | recreation uses `lucide-react` |

### Section background map (top → bottom)

| # | Section | Background |
| --- | --- | --- |
| 1 | Header (utility bar + nav) | solid `#000c20` |
| 2 | Hero slider | photo + dark overlay, min-height 1080px desktop |
| 3 | Info bar | `#f9f9f9` |
| 4 | Services (3 transport cards) | white |
| 5 | About | white (layered offset images) |
| 6 | Request a Free Quote | photo bg (fixed attachment on desktop) + `#f5f5f5` rounded form card |
| 7 | Team | white |
| 8 | Testimonials | photo bg (white heading + light quote text) + white rounded CTA card |
| 9 | Blog | white |
| 10 | Footer | `#121212` |

## Requirements

### Requirement: App shell, design tokens, and fonts

The app SHALL be a single-page site at `apps/vitesse` (package
`@free-react-templates/vitesse`) implementing the section order above
1:1. Teko + Barlow SHALL be loaded via Google Fonts `<link>` in
`index.html` (Teko 500/600/700; Barlow 400/500/600/700 — never ship
font files). `src/index.css` SHALL register the brand tokens in
`@theme` (at minimum `--color-primary: #ff5f13`,
`--color-accent: #f15f22`, `--color-indigo: #1f2b7b`,
`--color-header: #000c20`, `--color-footer: #121212`,
`--color-dark: #2c234d`, `--color-body: #677294`,
`--color-muted: #717b9b`, `--color-quote: #a4acc3`,
`--color-footertext: #c4c4c4`, `--color-cardborder: #e1ebf7`,
`--color-infobg: #f9f9f9`, `--color-soft: #f5f5f5`,
`--color-arrow: #616373`) and set the body default to Barlow /
`#677294`-family grays. Buttons SHALL be radius 5px, uppercase, 1px
tracking, `#ff5f13` with white text; headings SHALL use Teko.

#### Scenario: Tokens registered

- **GIVEN** the app renders
- **THEN** `@theme` defines `--color-primary: #ff5f13` and the
  supporting tokens above
- **AND** the body renders Barlow and headings render Teko

#### Scenario: Fonts loaded without shipping files

- **GIVEN** `index.html`
- **THEN** a Google Fonts `<link>` requests Teko + Barlow
- **AND** no `.woff`/`.ttf`/font binary is shipped in the app

### Requirement: Header (utility bar + nav, solid dark)

A solid `#000c20` header (NOT transparent over the hero): top
utility bar with phone ("+99 (0) 101 0000 888" kind), email
("noreply@yourdomain.com" kind), and social icon buttons (lucide
Twitter/Facebook/LinkedIn/Globe kinds, aria-labeled); below, the main
nav — brand wordmark "Vitesse" (NEW name, never "Logistic Express")
with an orange truck glyph on the left; on the right uppercase Barlow
links Home, About, Services, Blog (with a dropdown: Blog, Blog
Details, Element — hover/focus reveal), Contact, each scrolling to
its section anchor, plus an orange `.btn` "Get A Quote" CTA
(header-btn padding 25px 35px). Scrolled state SHALL add the soft
shadow `0 10px 15px rgba(25,25,25,0.1)`. Mobile SHALL collapse to a
hamburger menu.

#### Scenario: Utility bar + nav render

- **GIVEN** the page loads
- **THEN** the dark `#000c20` header shows the utility bar (phone,
  email, 3+ social icons) above the nav row
- **AND** the nav shows the Vitesse wordmark, 5 links, and the orange
  Get A Quote button

#### Scenario: Blog dropdown

- **GIVEN** the user hovers or focuses the Blog link
- **THEN** a dropdown with Blog, Blog Details, and Element entries
  appears
- **AND** the dropdown is keyboard-reachable

#### Scenario: Anchor navigation + scrolled state

- **GIVEN** the user clicks "Services"
- **THEN** the page scrolls to the Services section
- **WHEN** the user scrolls down
- **THEN** the header keeps its dark background and gains the soft
  shadow
- **AND** mobile shows a hamburger toggle with `aria-expanded`

### Requirement: Hero slider with tracking form

A full-width photographic hero (logistics truck photo via
`https://picsum.photos/seed/vitesse-hero-<n>/<w>/<h>` placeholders —
asset rule, never copy ColorLib images) with a dark overlay and
min-height ~1080px desktop (scaled down on mobile): left-aligned
white Teko h1 "Safe & Reliable Logistic Solutions!" with the word
"Logistic" (or its paraphrase equivalent) in orange `#f15f22`; below
it a tracking form — white text input ("Your Tracking ID" placeholder
kind) + orange "Track & Trace" submit button (`.submit-btn` styling)
+ small italic note ("For order status inquiry" kind). Slider arrows
(50×50, radius 6px, `#616373` border, hover `#f15f22`) SHALL rotate
≥2 slides via simple React state (crossfade/auto-advance acceptable;
a single-slide hero is an acceptable documented simplification).

#### Scenario: Hero renders

- **GIVEN** the page loads
- **THEN** a photo cover with dark overlay renders with the white
  Teko h1 (orange accent word) and the tracking form
- **AND** the h1 is ~95px/600 on desktop, scaled down on mobile

#### Scenario: Tracking form behavior

- **GIVEN** the tracking form
- **THEN** the input + Track & Trace button + italic note render
- **WHEN** the user submits a tracking ID
- **THEN** a local-only status acknowledgment shows (no network call)

#### Scenario: Slider controls

- **GIVEN** ≥2 hero slides
- **THEN** prev/next arrows rotate the slides (state-based, no slick
  library bundled)
- **AND** arrows expose accessible names

### Requirement: Info bar

A `#f9f9f9` bar directly below the hero: **3 info items** in a row
(stack on mobile), each a large orange (`#f15f22`, 44px) lucide icon
left + two text lines right — label span (`#2c234d`, 20px/600) over
value p (`#677294`, 16px): phone ("Call Us Anytime" + number kind),
hours ("Sunday CLOSED" + "Mon - Sat 8.00 - 18.00" kind), address
("Columbia, SC 29201" + "USA, New York - 10820" kind — paraphrase
allowed, keep the 3 kinds).

#### Scenario: Three info items

- **GIVEN** the info bar renders
- **THEN** 3 items render with orange icons + label/value pairs
  (phone, hours, address)
- **AND** the bar background is `#f9f9f9`

### Requirement: Services (3 transport category cards)

A white section: centered section title — orange eyebrow span "Our
Services" (18px/600) + Teko h2 "What We Can Do For You" — then **3
category cards** (`single-cat`: 1px `#e1ebf7` border, radius 6px,
padding ~85px 22px): Land Transport, Ship Transport, Air Transport —
each an icon (lucide truck/ship/plane kinds) + h5 title + short
blurb (paraphrase allowed; keep the 3 transport modes) + text link.
Cards SHALL have a subtle hover transition (border/color lift per
source `transition: all .4s`).

#### Scenario: Three category cards

- **GIVEN** the Services section
- **THEN** 3 bordered cards render (Land / Ship / Air Transport) with
  icon, title, blurb, link
- **AND** the centered title shows the orange eyebrow + Teko h2

### Requirement: About

A white two-column section: left — orange eyebrow "About Our
Company", Teko h2 "Safe Logistic & Transport Solutions That Saves our
Valuable Time!" (paraphrase allowed — same kind: logistics value
claim), **2 body paragraphs** (paraphrase allowed), and a "More About
Us" `.btn` (orange, radius 5px); right — a **layered image
composition**: a main photo plus a decorative offset back image
(absolutely positioned, e.g. top -45px right 0) and a front accent
image (right 47px) — implement as 2–3 overlapping picsum images with
the same offsets. Columns reverse/stack on mobile.

#### Scenario: Section composition

- **GIVEN** the About section
- **THEN** the heading block + 2 paragraphs + More About Us button
  render on the left
- **AND** the layered offset image composition renders on the right

### Requirement: Request a Free Quote (form)

A photographic-background section (picsum seed; `background-attachment:
fixed` on desktop where supported) containing a `#f5f5f5` rounded
(radius 8px, padding 80px) form card: centered Teko h2 "Request a
Free Quote" + a quote form with labeled fields — Name, Email, Contact
Number, Freight Type (select, 4 options — source options are demo
"Catagories One–Four"; paraphrase to freight-kind options), City of
Departure, Incoterms, Weight, Height, Width, Length — plus **4 radio
buttons** (transport-mode kind: Air/Sea/Land/Rail paraphrase) and an
orange "Request a Quote" `.submit-btn`. Form SHALL validate
client-side (required + email format), block submit until valid, and
show a local-only success state.

#### Scenario: Quote form fields

- **GIVEN** the quote form renders
- **THEN** 10 labeled inputs + 1 select + 4 radios + submit render
  (labels associated via `htmlFor`)
- **WHEN** required fields are empty or email is malformed
- **THEN** submit is blocked and per-field errors show
- **WHEN** the form is valid and submitted
- **THEN** a success state acknowledges the request (no network call)

### Requirement: Team

A white section: centered title — orange eyebrow "Our Team Members"
(source typo "Mambers" corrected — paraphrase allowed) + Teko h2
"What We Can Do For You" (source reuses this heading — keep or
paraphrase to a team heading, documented divergence allowed) — then
**3 person cards** (`single-team`, centered): photo (overflow
hidden), a caption overlay (absolute, bg rgba(255,255,255,0.6))
holding h3 name (20px/700 `#2c234d`) + role line; **hover**: caption
slides to bg `#f15f22` with white text and 4 social icons rise with
staggered transition delays. Sample source names "Mancherwan Kolin" ×3
/ role "Health agent" — paraphrase allowed (same kinds). Photos:
picsum seeds.

#### Scenario: Person cards + hover

- **GIVEN** the Team section
- **THEN** 3 centered person cards render with photo, name, role
- **WHEN** the user hovers a card
- **THEN** the caption turns `#f15f22` with white text and the social
  icons rise into view
- **AND** social icons are aria-labeled links

### Requirement: Testimonials

A photographic-background section (white heading text on the dark
photo): centered title — Teko h2 "What Our Clients Say!" (white,
`.section-tittle2` treatment) — then a **testimonial slider**: each
slide a quote glyph + quote p (`#a4acc3`, 16px/500) + founder row
(round avatar + name + role/tagline — source tagline "Always
listening, always understanding." kind); ≥3 slides via state-based
carousel with prev/next controls. Below the slider, a **white
rounded CTA card** (radius 10px, padding 50px, text-center): centered
h3 tagline + orange "Request a Quote" button (scrolls to the quote
form).

#### Scenario: Slides + CTA card

- **GIVEN** the Testimonials section
- **THEN** ≥3 testimonial slides render (quote + founder avatar/name)
  with working prev/next controls
- **AND** the white rounded CTA card renders below with its
  Request a Quote button

### Requirement: Blog

A white section: centered title — orange eyebrow "Our Recent news" +
Teko h2 "Tourist Blog" (paraphrase allowed — travel/logistics blog
kind) — then **3 blog cards**: image on top (radius 6px, mb 30px),
a date badge (bg `#f5f5f5`, radius 6px: large day + small month, e.g.
27 / SEP), an author line (avatar-less text: author name + comment
count "12" kind — source author "Jessica Temphers" paraphrase
allowed), h3 title ("Here's what you should know before." kind ×3 —
paraphrase allowed, keep 3 cards), short excerpt, and a read-more
link. Cards are equal-height in a 3-column grid (stack on mobile).

#### Scenario: Blog cards

- **GIVEN** the Blog section
- **THEN** 3 cards render with image, date badge, author line, title,
  excerpt, read-more
- **AND** the centered title shows the eyebrow + Teko h2

### Requirement: Footer (statement + 4 columns) and Component Dock attribution

A `#121212` footer (padding ~105px/50px desktop): a **statement
strip** — large white Teko h2 "We Understand The Importance Approaching
Each Work!" (paraphrase allowed) + phone line ("+1 212-683-9756" kind)
— with a `#1a2537` border-bottom (pb 51px, mb 82px); then **4
columns**: **COMPANY** (About Us, Company, Press & Blog, Privacy
Policy), **Open hour** (Monday 11am-7pm, Tuesday-Friday 11am-8pm,
Saturday 10am-6pm, Sunday 11am-6pm), **RESOURCES** (Home Insurance,
Travel Insurance, Car Insurance, Business Insurance, Health Insurance),
and a brand block (wordmark + short blurb `#c4c4c4` 14px + social
icon buttons, lucide, aria-labeled). Column titles h4: white Barlow
18px/500 uppercase. The bottom bar SHALL carry the copyright line and
a link to https://www.componentdock.com/ branded "Component Dock"
(monorepo rule — replaces the source's attribution; documented
divergence). The app SHALL NOT reference ColorLib anywhere (comments
included — provenance lives only in this spec, TEMPLATES.md, and the
PR).

#### Scenario: Statement + four columns

- **GIVEN** the footer renders
- **THEN** the statement h2 + phone strip renders with the `#1a2537`
  divider below it
- **AND** 4 columns render (COMPANY / Open hour / RESOURCES / brand
  block) on `#121212` with white uppercase titles

#### Scenario: Component Dock attribution, no ColorLib

- **GIVEN** any page of the app
- **THEN** a footer link to https://www.componentdock.com/ exists
  ("Component Dock" branding)
- **AND** no file in the app contains "colorlib" (case-insensitive)

### Requirement: Placeholder assets and provenance rules

All imagery SHALL use deterministic placeholders
`https://picsum.photos/seed/vitesse-<section>-<n>/<w>/<h>` (hero ×2,
about ×3, team ×3, quote bg, testimonial bg + avatars ×3, blog ×3).
Icons SHALL come from `lucide-react`. No ColorLib image, icon font,
CSS file, or JS library SHALL be copied or shipped.

#### Scenario: Placeholder imagery

- **GIVEN** the rendered app
- **THEN** every `<img>`/background image resolves to a
  `picsum.photos/seed/vitesse-*` URL
- **AND** icons render from lucide-react (no flaticon/themify
  assets)

### Requirement: Accessibility (global semantics)

Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`,
`<footer>`); exactly one h1 (the hero headline); section headings h2;
nav toggle with `aria-expanded`; Blog dropdown keyboard-operable;
icon-only controls (social, slider arrows, mobile menu) SHALL have
`aria-label`s; form labels associated; all interactive elements
keyboard-focusable with visible focus; text contrast readable on
static backgrounds (hero/quote/testimonial photos keep their dark
overlays under white text); slider controls present (no autoplay-only
access).

#### Scenario: Landmarks and headings

- **GIVEN** the page renders
- **THEN** exactly one h1 exists (hero) and each section has an h2
- **AND** nav/main/footer landmarks exist

#### Scenario: Keyboard + labels

- **GIVEN** a keyboard user
- **THEN** nav toggle, Blog dropdown, slider arrows, social links,
  tracking form, and quote form are reachable and operable
- **AND** icon-only controls expose accessible names

### Requirement: Responsive behavior

Utility bar hides/collapses on mobile (nav keeps essentials); nav
links collapse to a hamburger below the lg/xl breakpoint; hero h1
scales 95px → 50px → 35px; info bar, category cards, team, blog stack
to 1 column; quote form fields stack; footer columns stack to 2/1;
testimonials show 1 slide on narrow viewports; no horizontal overflow
at 360px.

#### Scenario: Narrow viewport

- **GIVEN** a 360px viewport
- **THEN** the hamburger menu shows, grids stack to single column,
  and the page has no horizontal scroll
- **AND** the hero content remains readable (scaled h1)

## Verification checklist

- [ ] Teko (500/600/700) + Barlow (400/500/600/700) via Google Fonts
      `<link>` (no font files shipped); `@theme` tokens:
      `--color-primary: #ff5f13`, `--color-accent: #f15f22`,
      `--color-indigo: #1f2b7b`, `--color-header: #000c20`,
      `--color-footer: #121212`, `--color-dark: #2c234d`,
      `--color-body: #677294`, `--color-muted: #717b9b`,
      `--color-quote: #a4acc3`, `--color-footertext: #c4c4c4`,
      `--color-cardborder: #e1ebf7`, `--color-infobg: #f9f9f9`,
      `--color-soft: #f5f5f5`, `--color-arrow: #616373`
- [ ] Buttons radius 5px, uppercase, 1px tracking, `#ff5f13` with
      `#e0581e` slide-in hover; Teko headings; Barlow body
- [ ] Section order 1:1: Header → Hero (tracking form) → Info bar →
      Services → About → Request a Free Quote → Team → Testimonials →
      Blog → Footer
- [ ] Header: solid `#000c20` utility bar (phone/email/social) + nav
      (Vitesse wordmark + truck glyph, 5 links with Blog dropdown,
      orange Get A Quote); scrolled soft shadow; mobile hamburger
- [ ] Hero: photo cover + dark overlay, ~1080px desktop; white Teko
      h1 with orange accent word; tracking form (input + Track &
      Trace + italic note); state-based slider arrows (no slick)
- [ ] Info bar: `#f9f9f9`, 3 orange-icon items (phone/hours/address)
      with `#2c234d` labels + `#677294` values
- [ ] Services: 3 cards (Land/Ship/Air Transport), 1px `#e1ebf7`
      border, radius 6px, icon + title + blurb + link
- [ ] About: eyebrow + h2 + 2 paragraphs + More About Us btn; layered
      offset image composition (back image top -45px right 0)
- [ ] Quote form: photo bg (fixed attachment desktop), `#f5f5f5`
      radius-8px card, 10 labeled fields + freight select + 4 radios
      + Request a Quote submit; client-side validation + local success
      state
- [ ] Team: 3 cards with caption overlay hover (`rgba(255,255,255,0.6)`
      → `#f15f22`, white text, staggered rising social icons)
- [ ] Testimonials: photo bg, white h2, ≥3 slides (quote `#a4acc3` +
      founder avatar/name) + prev/next; white rounded CTA card with
      Request a Quote button
- [ ] Blog: 3 cards (image radius 6px, `#f5f5f5` date badge, author +
      count line, title, excerpt, read-more)
- [ ] Footer: `#121212`, statement h2 + phone + `#1a2537` divider,
      4 columns (COMPANY / Open hour / RESOURCES / brand block),
      `#c4c4c4` blurb, social icons, copyright bar
- [ ] Footer links https://www.componentdock.com/ ("Component Dock");
      zero ColorLib references anywhere in the app (comments included)
- [ ] All imagery = `picsum.photos/seed/vitesse-*`; icons =
      lucide-react; no copied assets
- [ ] A11y: one h1, h2 per section, landmarks, aria-labels on
      icon-only controls, labeled forms, keyboard-operable dropdown +
      menu + sliders
- [ ] Responsive: hamburger < lg, stacked grids at mobile, hero h1
      95→50→35px, no horizontal overflow at 360px
- [ ] 100% test coverage via `scripts/verify-app.sh vitesse`
      (slider/dropdown/menu/quote-form state fully testable with
      `fireEvent`/`userEvent`; jsdom cannot compute styles — assert
      classes/structure, not computed colors); PR
      `feat/template-vitesse` with source slug + preview/screenshot
      URLs + tokens in the description

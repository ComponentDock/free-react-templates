# Template: Magnet (Digital Marketing / SEO Agency)

> **SUPERSEDED** — this spec duplicates the ColorLib "Calvino" source
> (https://colorlib.com/wp/template/calvino/), which shipped as
> **Reachly** in PR #483 (merged 2026-08-16, live at
> https://reachly.free.componentdock.com). All three TEMPLATES.md
> Calvino rows are marked `[x]` with that URL. Do NOT implement —
> delete this spec + `docs/templates/magnet/` on next cleanup.

## Purpose

Magnet is a digital-marketing/SEO-agency landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Calvino"
design (source: https://colorlib.com/wp/template/calvino/), built under a
DIFFERENT name (**Magnet** — the hero promises "We bring you new customers",
i.e. a customer _magnet_; a single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/` or `origin/main` — verified
2026-08-16), per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript. It is a full one-page agency site:
transparent sticky header → full-bleed photo hero with a split-caption layout
(badge + headline + CTA left, photo + pink gradient shape + circular play
button right) → four white service cards with pink icon circles → about
section (text + image) → tabbed pricing (Yearly / Monthly) with three pink
pill-button plan cards per pane → "Why Choose Us" band with pink counters →
client brand logo strip → case-study image grid with hover overlays →
testimonial carousel → footer on a background image with four columns +
copyright bar. Brand: a vivid pink **`#ff4495`** → coral `#ff6d6d` → light-blue
`#7db9e8` vertical gradient used for all CTAs, the hero accent shape, pricing
buttons and the logo; dark navy `#192839` headings; white cards with soft
shadows; pastel accents (`#FFE1EE` icon circles, `#f9f9ff` / `#f0e9ff` light
section tints, dotted-grid background pattern). Typeface pairing: **Nunito**
for headings, **Jost** for body/nav. One interactive pattern beyond nav: a
video popup (the hero play button opens a YouTube embed — in the recreation a
modal or a no-op link with `aria-label`; keep the same _kind_ of affordance).

## Design reference (replication findings)

- **Original:** ColorLib "Calvino" — a free SEO / digital-marketing agency
  landing page (source page: https://colorlib.com/wp/template/calvino/).
  TEMPLATES.md has ONE copy (line 556, `- [ ]` unchecked). This prep: Calvino →
  **Magnet**. When the implementer finishes, that row gets bookkept `[x]`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/calvino/` (HTTP 200, 40,816 bytes,
  `<title>SEO | Template</title>`). Stylesheets: `assets/css/bootstrap.min.css`
  (Bootstrap 4), `owl.carousel.min.css` (testimonial/logo carousels),
  `slicknav.css` (mobile nav), `animate.min.css`, `magnific-popup.css` (video
  popup), `fontawesome-all.min.css` + `themify-icons.css` (icons),
  `slick.css`, `nice-select.css`, and the main sheet `assets/css/style.css`
  (76,943 bytes — a FULL shared "templete" sheet bundling rules for many
  themes; the pink/`#ff4495` gradient rules and the `.calvino`-specific
  classes (`.slider-bg1`, `.hero-btn`, `.single-cat`, `.section-tittle`,
  `.stups-area`, `.about-low-area`, `.footer-area`...) are the ones that apply
  here; ignore the orange `#E67118` `.btn` rules — they belong to OTHER
  themes in the shared sheet and are overridden on this page). Google Fonts
  `@import` loads **Jost** (300–800) + **Nunito** (300–900); body is Jost,
  headings are Nunito. JS: jquery + bootstrap + owl + slick + slicknav +
  magnific-popup (tabs, carousels, video popup, mobile nav) — the recreation
  re-implements tabs + carousel in React; no third-party libs needed.
- **Visual design (from live DOM + CSS tokens + TEMPLATES.md screenshot
  `calvino-free-template.jpg`, viewed in browser — screenshot MATCHES the live
  DOM, no variance):** a clean, modern white agency page. Header: pink swirl
  logo + "Calvino" wordmark, centered menu (Home, About, Services, Case Study,
  Blog, Contact), phone number + pink pill "Let's Talk" button top-right.
  Hero: split layout — left column has a small pink pill badge "Digital
  Marketing Expert", a huge dark heading "We bring you new customers", a gray
  paragraph, and a bright pink pill CTA "Explore Services"; the right side is
  a lifestyle office photo with a large soft pink semi-circle gradient shape
  curving from the bottom-right and a white circular play button (video
  popup). Below the hero text sits a pastel purple/blue blob. Services
  section: centered pink uppercase eyebrow "OUR SERVICES", heading "Provide
  Awesome Service With Our Tools", FOUR white cards (soft drop shadow, light
  pink circle icon, title "Discover, Explore the Product" + gray blurb), over
  a faint dotted-grid background; cards flip to dark navy `#192839` on hover
  (bottom-up fill) with the icon turning white. About section: "ABOUT US"
  eyebrow, heading "We Create a Steps to Build a Successful Digital Product",
  two paragraphs, an "Explore More" white/outline pill button, image on the
  opposite side. Pricing section: "PRICING PLAN" eyebrow + "Choose Your Best
  Pricing Plan", Yearly/Monthly pill tabs, per pane three white plan cards —
  white circular icon, pink rounded "Basic" label, "$ 05.00" price, four
  feature lines, pink gradient pill "Get Started" button. "WHY CHOOSE US"
  band: heading "We are an SEO company that specializes in developing", text,
  "Explore More" button, big pink counters ("450 +" successfully completed
  projects, "860" highly specialised employees), image beside. A row of client
  brand logos. "CASE STUDY" + "Some Of Our Awesome Stuffs": four image cards
  with a "Marketing" tag and a title, dark gradient hover overlay. Testimonial
  carousel: big quote ("Even the all-powerful Pointing has no control about
  the blind texts..."), avatar photo, name "Robert" + role. Footer (below the
  screenshot fold — tokens taken from CSS): sits on a background image
  (`assets/img/gallery/footer-bg.jpg`), four columns — about blurb ("Duis aute
  irure dolor inasfa reprehenderit in voluptate velit esse cillum"), a
  "Navigation" link list (Home, About, Services, Blog, Contact), a "Services"
  link list (Drone Mapping, Real State, Commercial Construction — the source
  repeats leftover copy; keep the same KIND of content), a "Support" list
  (same links) and a "Contact Us" column (address, `contact@carwash.com`
  — source artifact, use a generic email — and phone "10 (87) 738-3940");
  heading color `#1A1A1A`, body `#5E5E5E`; then a white copyright bar
  ("Copyright © All rights reserved | This template is made with ♥ by
  Colorlib" → the recreation uses the Component Dock link per convention).
- **Structure (DOM order, 1:1):**
  `header.header-area.header-transparent` (sticky: `.header-sticky.sticky-bar`
  → white `background:#fff`) →
  `div.slider-area.position-relative` → `div.single-sliders.slider-height.slider-bg1`
  (photo bg, `background-image:url(../img/hero/h1_hero1.png)`, cover) →
  `div.container` → `div.row.align-items-center` → `div.col-lg-6` →
  `div.hero-caption` (`position:relative; z-index:2`): `span` badge "Digital
  Marketing Expert" (Jost 14px `#FF4495`) + `h1` "We bring you new customers"
  (Nunito 58px/700/`#192839`, lh 1.2) + `p` "We build effective strategies to
  help you reach customers and prospects across the entire web." (Jost
  `#545454` 16px/30px) + `a.btn_0.hero-btn` "Explore Services" (pink gradient
  pill, `padding:15px 36px; border-radius:30px`, arrow icon, icon shifts right
  on hover) → right `div.col-lg-6` (photo + pink gradient semi-circle shape
  `width:300px;height:405px` `background:linear-gradient(to bottom, #ff4495,
#ff6d6d, #7db9e8)` + `a.popup-video.btn-icon` white circular play button;
  `.slider-area .video-icon a{background:#fff}`, hover → `#FF4495`) →
  `section.categories-area.bottom-padding.position-relative` (SERVICES —
  `div.container` → `div.row` → `div.col-xl-12` → `div.section-tittle.text-center.mb-50`:
  `span` eyebrow "Our Services" (13px uppercase `#FF4495` ls .1em mb 18px) +
  `h2` "Provide Awesome Service With Our Tools" (Nunito 36→40px/700, lh 1.4)
  - `p` (`#656565` 18px) → `div.row` → FOUR `div.col-lg-3.col-md-6` →
    `div.single-cat` (white, `border-radius:5px`, `padding:40px 21px`, soft
    `box-shadow`, `position:relative; z-index:1`; `::before` = bottom-up navy
    fill `background:#192839`, `height:0 → 100%` on hover, `.6s`, `z-index:-1`)
    → `span.cat-icon` (78×78px circle, `background:#FFE1EE`, `color:#FF4495`,
    `border-radius:50px`, `line-height:78px`, `margin-bottom:50px`; hover →
    icon `background:#fff`) + `h3` "Discover, Explore the Product" + `p`
    "Effective strategies to help you reach customers.") →
    `section.about-area1.about-area2` (ABOUT — eyebrow "About Us" + `h2` "We
    Create a Steps to Build a Successful Digital Product" + paragraphs "With
    over 50 years of combined experience, our mission is to design with your
    values and vision in mind..." + `a.boxed-btn` "Explore More" (white bg,
    pink text, `padding:18px 44px`) + image column) →
    `section.pricing-card-area.section-padding.fix` (PRICING — `div.section-tittle`
    eyebrow "Pricing Plan" + `h2` "Choose Your Best Pricing Plan" →
    `ul.nav.nav-tabs` role=tablist with TWO tabs **Yearly** / **Monthly** →
    `div.tab-content#nav-tabContent` → `div#nav-one.tab-pane` + `div#nav-two.tab-pane`,
    each with THREE `div.single-card` plan cards: `div.card-top` — `span.cat-icon`
    (78×78 white circle, pink icon, `box-shadow:0px 15px 25px rgba(0,4,74,.04)`)
  - `span` "Basic" (pink, 16px, `border-radius:20px` pill) + `div.card-mid` →
    `h4` "$ 05.00" (`#192839` 30px/700) + `p` "Increase traffic 50%" +
    `ul` features: "Social Media Marketing", "10 Free Optimization", "24/7
    support" + `div.card-bottom` → `a.get-btn` "Get Started" (pink gradient,
    `border-radius:40px`, `padding:11px 23px`, Nunito 18px)) →
    `section.about-low-area` (WHY CHOOSE US — eyebrow "Why Choose US" + `h2` "We
    are an SEO company that specializes in developing" + paragraph + `a.boxed-btn`
    "Explore More" + `div.single` counters — `div.single-counter` (`.counter`
    Nunito 36px/700 `#FF4495`): "450 +" / "Successfully completed projects",
    "860" / "Highly specialised employees" (`div.pera-count` `h5` Jost
    `#131933` 24px/400 + `p` `#545454`) + image column) →
    `div.brand-area` (logo carousel — row of client logos, images only) →
    `div.stups-area.pt-100.fix` (CASE STUDY — eyebrow "Case Study" + `h2` "Some
    Of Our Awesome Stuffs" + FOUR `div.single-sutps` image cards, each with a
    "Marketing" category tag + title "Discover, Explore the Product"; hover
    overlay `::before` `linear-gradient(rgba(41,38,33,0) 0%, #292621 100%)`) →
    `div.testimonial-area.section-padding` (owl carousel: per slide a quote
    "Even the all-powerful Pointing has no control about the blind texts it is
    an almost un real orthographic eaque ipsa quae elit small batch freegan
    sed. Craft beer elit seitan exercitation" + avatar image + name "Robert" +
    role "Creative Director at Colorlib" — the recreation drops the company or
    uses Component Dock, ColorLib must NOT appear in `apps/magnet`) →
    `footer` → `div.footer-wrapper.section-img-bg2` (`data-background="assets/
img/gallery/footer-bg.jpg"` — background IMAGE) → `div.footer-area.footer-padding`:
    FOUR columns — about blurb ("Duis aute irure dolor inasfa reprehenderit in
    voluptate velit esse cillum", `.footer-pera p` `#5E5E5E` 16px lh 1.8) +
    "Navigation" (Home, About, Services, Blog, Contact) + "Services" (Drone
    Mapping, Real State, Commercial Construction) + "Support" (same) +
    "Contact Us" (address + `contact@carwash.com` + "10 (87) 738-3940") with
    `.footer-tittle h4` (`#1A1A1A` 20px/600, `margin-bottom:40px`) → then
    `div.footer-bottom-area` (`background:#fff`): "Copyright © All rights
    reserved | This template is made with ♥ by Colorlib" — recreation:
    "© <current year> Magnet. All rights reserved. Made with ♥ by
    <a>Component Dock</a>").
- **Grid behavior (Bootstrap 4, reproduce responsively):** services cards
  `col-lg-3 col-md-6` (4-across lg, 2-across md, stacked below md); pricing
  panes hold three cards (`col-lg-4`-style thirds — the source uses a 3-col
  row; verify at implementation); case-study cards four-across lg. Header nav
  collapses to a slicknav hamburger below lg. Hero `slider-height` ~750px
  desktop, stacked single column on mobile (text over image). No horizontal
  scroll.
- **Icons (fontawesome + themify in the source → lucide-react):** service
  card icons (line-art glyphs — smiley, calendar, layout/grid, etc.), hero
  play button (Play), button arrows (ArrowRight), contact (MapPin, Phone,
  Mail), feature checks. lucide exports to use: `Play`, `ArrowRight`,
  `Smile`, `CalendarDays`, `LayoutGrid`, `MapPin`, `Phone`, `Mail`, `Check`,
  `Magnet` (perfect brand mark — the logo swirl). Probe every import with the
  `typeof` check per the skill guidance.

## Design tokens (from the reference — `assets/css/style.css` + DOM)

| Token            | Value                                                                                                                                                                                                                                                                                                                                                                                                          | Source                                                           |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Font — headings  | **Nunito** — `h1,h2,h3,h4,h5,h6 { font-family:"Nunito",sans-serif; color:#192839; font-weight:500 }`; hero `h1` 58px/700/lh 1.2; `.section-tittle h2` 36px (→40px)/700/lh 1.4; card `h4` 30px/700; footer `h4` 20px/600. Google Fonts loads 300–900 (recreation needs 400+700)                                                                                                                                 | `css/style.css` heading rules                                    |
| Font — body/nav  | **Jost** — `p { font-family:"Jost",sans-serif; color:#545454; font-size:16px; line-height:30px }`; nav links Jost `#192839` 400; hero badge span Jost 14px `#FF4495`; `.pera-count h5` Jost 24px `#131933`. Loads 300–800 (recreation needs 400+500)                                                                                                                                                           | `css/style.css` `p`, nav, badge rules                            |
| Brand gradient   | **`linear-gradient(to bottom, #ff4495 0%, #ff6d6d 100%, #7db9e8 100%)`** — pink → coral → light blue; the PRIMARY CTA treatment: `.btn_0`/`.hero-btn`, `.get-btn`, hero accent shape (300×405px semi-circle), counters hover. Put `--color-brand: #ff4495` + a `--gradient-brand` token in `@theme`                                                                                                            | `.btn_0,.btn_10,.pricing-card-area … .get-btn` + hero shape rule |
| Brand solid      | **`#FF4495`** (vivid pink) — badge, eyebrow labels, icons, `boxed-btn` text, counters, video-button hover, cat-icon color; light-pink tint **`#FFE1EE`** for icon circles                                                                                                                                                                                                                                      | various `#FF4495` / `#FFE1EE` rules                              |
| Dark navy        | **`#192839`** — headings, nav links, service-card hover fill (`::before` bottom-up `height:0→100%`, `.6s`, `border-radius:5px`)                                                                                                                                                                                                                                                                                | heading rules + `.single-cat::before`                            |
| Body text        | `#545454` (paragraphs, 16px/30px); section sub-copy `#656565` 18px/400/lh 1.5; counters caption `#131933`                                                                                                                                                                                                                                                                                                      | `p`, `.section-tittle p`, `.pera-count h5`                       |
| Eyebrow label    | `.section-tittle > span` — `color:#FF4495; font-size:13px; font-weight:400; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:18px` (source text "Our Services" / "About Us" / "Pricing Plan" / "Why Choose US" / "Case Study" — the recreation may rephrase, keep the same kind)                                                                                                                  | `.section-tittle > span`                                         |
| Section heading  | `.section-tittle h2` — Nunito, `font-size:36px` (40px on large), `font-weight:700`, `line-height:1.4`, `margin-bottom:12px`, color `#192839`; `.section-tittle` `margin-bottom:50px`, centered via `.text-center`                                                                                                                                                                                              | `.section-tittle h2`                                             |
| Primary CTA      | `.btn_0` — pink gradient bg, white Nunito 18px/500, `padding:11px 36px`; `.hero-btn` adds `padding:15px 36px; border-radius:30px` (PILL); ArrowRight icon with `padding-left:11px`, `left:26px` → `left:30px` on hover (`.5s ease-out`); text-transform capitalize                                                                                                                                             | `.btn_0`, `.hero-btn`                                            |
| Secondary CTA    | `.boxed-btn` — `background:#fff; color:#FF4495`, Nunito, `padding:18px 44px` (white/outline pill on light sections — "Explore More")                                                                                                                                                                                                                                                                           | `.boxed-btn`                                                     |
| Video button     | `.slider-area .video-icon a` — white circle (`background:#fff`), Play glyph, hover `background:#FF4495` (magnific-popup video trigger)                                                                                                                                                                                                                                                                         | `.slider-area .video-icon a`                                     |
| Service cards    | `.single-cat` — `background:#fff; border-radius:5px; padding:40px 21px; box-shadow:0 25px … rgba(0,4,74,.06)` (soft); `::before` navy `#192839` bottom-up fill on hover; `span.cat-icon` — 78×78px circle `background:#FFE1EE; color:#FF4495; border-radius:50px; line-height:78px; margin-bottom:50px`; hover: icon `background:#fff`                                                                         | `.categories-area .single-cat` (+ `::before`, `.cat-icon`)       |
| Dotted pattern   | faint dotted-grid background behind the services cards (visible in the screenshot; the source uses a background image — approximate with a CSS `radial-gradient(circle, …) 1px` dot grid or an inline SVG data-URI, NEVER a copied asset)                                                                                                                                                                      | screenshot + `categories-area` bg                                |
| Pricing tabs     | `ul.nav.nav-tabs` — two pill tabs **Yearly** / **Monthly**; `div.tab-pane#nav-one` / `#nav-two`, each with THREE `div.single-card` plan cards (six `.single-card` blocks in the source markup)                                                                                                                                                                                                                 | DOM                                                              |
| Pricing cards    | `.single-card` — `padding:35px 40px`, white; `.card-top .cat-icon` 78×78 white circle w/ `box-shadow:0px 15px 25px rgba(0,4,74,.04)` + pink icon; `.card-top span` "Basic" `color:#FF4495; font-size:16px; border-radius:20px; margin-bottom:19px`; `.card-mid h4` "$ 05.00" `#192839` 30px/700; `.get-btn` pink gradient, `border-radius:40px`, `padding:11px 23px`, Nunito 18px, `text-transform:capitalize` | `.pricing-card-area .single-card` rules                          |
| Counters         | `.about-low-area .single .single-counter .counter` — Nunito `font-size:36px; font-weight:700; color:#FF4495` ("450 +" / "860"); caption `.pera-count h5` Jost `#131933` 24px/400 + `p` `#545454` ("Successfully completed projects" / "Highly specialised employees")                                                                                                                                          | `.about-low-area` counter rules                                  |
| Case-study cards | `.stups-area .single-sutps` — image cards, `margin:0 12px`, hover overlay `::before` `linear-gradient(to bottom, rgba(41,38,33,0) 0%, #292621 100%)` (dark bottom-up gradient); "Marketing" category tag + title "Discover, Explore the Product"                                                                                                                                                               | `.stups-area .single-sutps` (+ `::before`)                       |
| Testimonials     | carousel slide — 16–18px quote, avatar photo (3 `<img>` in the DOM — slides), name + role line; dark text on white `section-padding` band                                                                                                                                                                                                                                                                      | DOM + screenshot                                                 |
| Footer           | `.footer-wrapper.section-img-bg2` — `data-background="assets/img/gallery/footer-bg.jpg"` (background IMAGE; approximate with a dark gradient + picsum or a plain dark band — NEVER copy the asset); `.footer-tittle h4` `#1A1A1A` 20px/600 `margin-bottom:40px`; `.footer-pera p` `#5E5E5E` 16px lh 1.8; `.footer-bottom-area` `background:#fff` copyright bar                                                 | `.footer-area` + `.footer-wrapper` rules + DOM                   |
| Header           | transparent over hero; `.header-sticky.sticky-bar` → `background:#fff` on scroll; nav links Jost `#192839` `padding:29px 7px`; phone "Call Us: +12 345 678 910" (icon + text, Jost white → dark on sticky); "Let's Talk" pink pill button `.header-btn2` (Jost 18px, `border-bottom:1px dotted #fff` underline style)                                                                                          | `.header-area` rules + screenshot                                |
| Images           | hero photo `h1_hero1.png` (cover), about + why-choose photos, 4 case-study images, 3 testimonial avatars, footer bg, client logos — ALL replaced with `https://picsum.photos/seed/magnet-<n>/<w>/<h>` (deterministic placeholders) or text wordmarks for logos                                                                                                                                                 | DOM `<img>`/`background-image`/`data-background`                 |
| Mobile behavior  | nav → slicknav hamburger below lg; hero stacks to one column (text over image); services `col-lg-3 col-md-6` → 2-across md, stacked below md; pricing/case-study cards stack; no horizontal scroll                                                                                                                                                                                                             | Bootstrap classes + slicknav                                     |

## Requirements

### Requirement: Page composition

The system SHALL render the agency landing page with a document title, a main
landmark, a header landmark, and a footer landmark, composing the sections in
the source order.

#### Scenario: Full page render

- **GIVEN** the Magnet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the header, hero, services, about, pricing,
  why-choose-us, brand strip, case-study, testimonials and footer sections in
  that order inside the main landmark
- **AND** the document title SHALL be "Magnet — Digital Marketing"

### Requirement: Header navigation

The system SHALL render the transparent sticky header with the brand, the menu,
the phone number and the "Let's Talk" CTA.

#### Scenario: Header renders with brand, menu, phone and CTA

- **GIVEN** the page is rendered
- **WHEN** the user inspects the top of the page
- **THEN** a semantic `<header>` SHALL render with the brand mark (pink
  `Magnet` icon from lucide + the wordmark "Magnet")
- **AND** the menu SHALL list the source's top-level links: Home, About,
  Services, Case Study, Blog, Contact
- **AND** a phone number SHALL render (icon + "Call Us: +12 345 678 910" —
  keep the same kind of content)
- **AND** a "Let's Talk" button SHALL render as a pink-styled pill CTA
- **AND** the header SHALL be transparent over the hero and turn white
  (`background:#fff`) when sticky/on scroll
- **AND** below the lg breakpoint the menu SHALL collapse behind a hamburger
  toggle with an accessible `aria-expanded` state

### Requirement: Hero section

The system SHALL render the full-bleed photo hero with the badge, headline,
subtext, primary CTA, and the play-button accent on the image side.

#### Scenario: Hero renders with split caption and accents

- **GIVEN** the header is rendered
- **WHEN** the user inspects the hero
- **THEN** a full-width hero SHALL render on a photo background (picsum
  placeholder `https://picsum.photos/seed/magnet-1/1600/800`, cover)
- **AND** a small pill badge SHALL read "Digital Marketing Expert" (Jost 14px,
  pink `#FF4495`)
- **AND** a level-1 heading SHALL read "We bring you new customers" (Nunito
  58px/700, `#192839`, line-height 1.2)
- **AND** a paragraph SHALL read "We build effective strategies to help you
  reach customers and prospects across the entire web." (`#545454` Jost)
- **AND** an "Explore Services" CTA SHALL render as the pink gradient pill
  (`border-radius:30px`, ArrowRight icon that shifts right on hover)
- **AND** a circular white play button with a Play glyph SHALL render over the
  image side (source opens a video popup; the recreation SHALL either open a
  modal video or be a decorative affordance with an `aria-label` such as
  "Play video")
- **AND** a soft pink gradient shape (the source's 300×405px semi-circle,
  `linear-gradient(#ff4495, #ff6d6d, #7db9e8)`) SHALL frame the image side —
  approximate with a rounded/curved gradient div, NEVER a copied asset
- **AND** the hero SHALL stack to a single column below the lg breakpoint

### Requirement: Services section

The system SHALL render the "Our Services" section with four white cards with
pink icon circles and the navy hover fill.

#### Scenario: Service cards render with hover treatment

- **GIVEN** the hero is rendered
- **WHEN** the user scrolls to the services section
- **THEN** a pink uppercase eyebrow SHALL read "Our Services" (13px,
  `letter-spacing:0.1em`) above a Nunito heading "Provide Awesome Service With
  Our Tools" (36px/700, `#192839`)
- **AND** FOUR cards SHALL render (white, `border-radius:5px`, soft shadow,
  `padding:40px 21px`) in a `col-lg-3`/`col-md-6` grid (4-across lg, 2-across
  md, stacked below md)
- **AND** each card SHALL contain a 78×78px circle icon (`background:#FFE1EE`,
  pink lucide glyph) with `margin-bottom:50px`, a card title ("Discover,
  Explore the Product" — same kind of content) and a gray blurb ("Effective
  strategies to help you reach customers.")
- **AND** on hover the card SHALL fill bottom-up with the dark navy `#192839`
  (`.6s` transition, `border-radius:5px`) and the icon circle SHALL turn white
- **AND** a faint dotted-grid pattern SHALL sit behind the cards (CSS
  radial-gradient dot grid or inline SVG data-URI — NOT a copied asset)

### Requirement: About section

The system SHALL render the about section with eyebrow, heading, paragraphs,
"Explore More" button and an image column.

#### Scenario: About renders text beside image

- **GIVEN** the services section is rendered
- **WHEN** the user inspects the about section
- **THEN** an eyebrow SHALL read "About Us" and the heading SHALL read "We
  Create a Steps to Build a Successful Digital Product"
- **AND** one or two paragraphs SHALL render ("With over 50 years of combined
  experience, our mission is to design with your values and vision in
  mind..." — same kind of content)
- **AND** an "Explore More" button SHALL render as the white pill with pink
  text (`.boxed-btn`: white bg, `color:#FF4495`, `padding:18px 44px`)
- **AND** an image SHALL render on the opposite side
  (`https://picsum.photos/seed/magnet-2/600/500`)

### Requirement: Pricing section

The system SHALL render the tabbed pricing section with Yearly/Monthly tabs and
three plan cards per pane with pink gradient "Get Started" buttons.

#### Scenario: Pricing tabs and plan cards render

- **GIVEN** the about section is rendered
- **WHEN** the user inspects the pricing section
- **THEN** an eyebrow SHALL read "Pricing Plan" and the heading SHALL read
  "Choose Your Best Pricing Plan"
- **AND** two tabs SHALL render — **Yearly** and **Monthly** — as a
  `role="tablist"` with `role="tab"` buttons, `aria-selected` state, and
  keyboard arrow navigation; the first tab SHALL be active by default
- **AND** each tab pane SHALL contain THREE plan cards (white, `padding:35px
40px`), each with: a 78×78 white circular icon (soft `rgba(0,4,74,.04)`
  shadow), a pink rounded plan label ("Basic"), a price heading "$ 05.00"
  (`#192839` 30px/700), the line "Increase traffic 50%", three feature lines
  ("Social Media Marketing", "10 Free Optimization", "24/7 support"), and a
  "Get Started" pink gradient pill (`border-radius:40px`, `padding:11px 23px`)
- **AND** switching tabs SHALL update the visible pane and the `aria-selected`
  state
- **AND** the plan cards SHALL stack on small screens

### Requirement: Why Choose Us band

The system SHALL render the "Why Choose Us" band with heading, text, "Explore
More" button, pink counters and an image.

#### Scenario: Counters render with the source values

- **GIVEN** the pricing section is rendered
- **WHEN** the user inspects the why-choose-us band
- **THEN** an eyebrow SHALL read "Why Choose US" and the heading SHALL read
  "We are an SEO company that specializes in developing"
- **AND** an "Explore More" boxed button SHALL render
- **AND** TWO counters SHALL render (Nunito 36px/700, pink `#FF4495`):
  "450 +" with caption "Successfully completed projects", and "860" with
  caption "Highly specialised employees" (caption h5 Jost `#131933` 24px +
  p `#545454`)
- **AND** an image SHALL render beside the counters
  (`https://picsum.photos/seed/magnet-3/600/500`)

### Requirement: Brand strip

The system SHALL render a row of client brand logos between the band and the
case-study section.

#### Scenario: Brand logos render in a row

- **GIVEN** the why-choose-us band is rendered
- **WHEN** the user inspects the brand strip
- **THEN** a row of client brand marks SHALL render (the source shows 5–6
  logo images; the recreation SHALL use muted text wordmarks or grayscale
  picsum images — NEVER copied assets)

### Requirement: Case-study section

The system SHALL render the case-study section with four image cards with
category tags, titles, and the dark hover overlay.

#### Scenario: Case-study cards render with hover overlay

- **GIVEN** the brand strip is rendered
- **WHEN** the user inspects the case-study section
- **THEN** an eyebrow SHALL read "Case Study" and the heading SHALL read "Some
  Of Our Awesome Stuffs"
- **AND** FOUR image cards SHALL render (four-across on lg, stacked below), each
  with a "Marketing" category tag, a title ("Discover, Explore the Product" —
  same kind of content), and a picsum image
  (`https://picsum.photos/seed/magnet-4..7/400/300`)
- **AND** on hover each card SHALL show a dark bottom-up gradient overlay
  (`linear-gradient(rgba(41,38,33,0), #292621)`) with the title/tag
  highlighted

### Requirement: Testimonial carousel

The system SHALL render the testimonial carousel with quote, avatar, name and
role.

#### Scenario: Testimonial slide renders

- **GIVEN** the case-study section is rendered
- **WHEN** the user inspects the testimonial band
- **THEN** a carousel SHALL render one testimonial slide at a time with
  previous/next or dot controls
- **AND** each slide SHALL contain a quote ("Even the all-powerful Pointing
  has no control about the blind texts..." — same kind of content), an avatar
  photo (`https://picsum.photos/seed/magnet-8..10/100/100`), a name ("Robert")
  and a role ("Creative Director" — the source says "at Colorlib"; the
  recreation MUST NOT reference ColorLib, use a generic role or Component
  Dock)
- **AND** the carousel SHALL be operable by keyboard and expose
  `aria-label`s on its controls

### Requirement: Footer

The system SHALL render the footer on the background-image wrapper with the
four content columns and the white copyright bar with the Component Dock link.

#### Scenario: Footer columns and copyright render

- **GIVEN** the testimonials are rendered
- **WHEN** the user inspects the footer
- **THEN** a semantic `<footer>` SHALL render on a dark background band (the
  source uses `assets/img/gallery/footer-bg.jpg` — approximate with a dark
  gradient or a picsum background, NEVER a copied asset)
- **AND** the footer SHALL contain an about blurb column ("Duis aute irure
  dolor inasfa reprehenderit in voluptate velit esse cillum" — same kind of
  content; `#5E5E5E` body text)
- **AND** a "Navigation" column SHALL list: Home, About, Services, Blog,
  Contact
- **AND** a "Services" column SHALL list: Drone Mapping, Real State,
  Commercial Construction (source leftover copy — keep the same kind of
  content)
- **AND** a "Contact Us" column SHALL render an address, an email
  (`contact@carwash.com` is a source artifact — use a generic address or a
  placeholder email) and a phone ("10 (87) 738-3940")
- **AND** a white copyright bar SHALL render below the columns reading
  **"© <current year> Magnet. All rights reserved. Made with ♥ by Component
  Dock"** (the source shows "Copyright © All rights reserved | This template
  is made with ♥ by Colorlib")
- **AND** the "Component Dock" text SHALL link to
  `https://www.componentdock.com/` (per convention — ColorLib must NOT appear
  anywhere in `apps/magnet`)

### Requirement: Responsive layout

The system SHALL reproduce the source's responsive behavior: collapsing nav,
stacking sections, and no horizontal overflow.

#### Scenario: Layout adapts across breakpoints

- **GIVEN** the page is rendered
- **WHEN** the viewport is at the lg breakpoint (≥992px)
- **THEN** the services SHALL render four cards across and the case-study
  SHALL render four cards across
- **AND** at the md breakpoint (≥768px) the services SHALL render two cards
  across
- **AND** below md all multi-column sections SHALL stack full-width
- **AND** the header menu SHALL collapse behind the hamburger toggle
- **AND** the page SHALL never overflow horizontally

### Requirement: Accessibility

The system SHALL expose semantic landmarks, accessible tabs/carousel controls,
and keyboard-operable interactivity.

#### Scenario: Screen reader exposure

- **GIVEN** the page is rendered
- **WHEN** assistive technology inspects the page
- **THEN** the page SHALL have a main landmark, a header landmark and a
  footer landmark
- **AND** the pricing tabs SHALL use `role="tablist"` / `role="tab"` /
  `role="tabpanel"` with `aria-selected` and `aria-controls`, keyboard arrow
  navigation, and visible focus states
- **AND** the carousel controls SHALL carry `aria-label`s
- **AND** icon-only elements (phone icon, play button, social/category icons)
  SHALL carry `aria-hidden` when decorative or an accessible name when
  interactive
- **AND** all interactive elements SHALL be focusable and SHALL show a
  focus-visible ring

## Verification checklist

- [ ] `npm run verify:app magnet` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Document title "Magnet — Digital Marketing"
- [ ] Header: transparent sticky header → white on scroll; brand (pink lucide
      Magnet icon + "Magnet" wordmark); menu Home, About, Services, Case
      Study, Blog, Contact; phone "Call Us: +12 345 678 910"; "Let's Talk"
      pink pill; hamburger + `aria-expanded` below lg
- [ ] Hero: full-bleed photo bg (picsum seed magnet-1), badge "Digital
      Marketing Expert" (Jost 14px `#FF4495`), h1 "We bring you new
      customers" (Nunito 58px/700 `#192839`), paragraph, "Explore Services"
      pink gradient pill (`radius:30px`, arrow shift hover), white circular
      play button (pink on hover), pink gradient accent shape (300×405
      semi-circle approx); stacks below lg
- [ ] Services: eyebrow "Our Services" (13px uppercase pink, ls .1em), heading
      "Provide Awesome Service With Our Tools" (Nunito 36px/700), 4 white
      cards (`radius:5px`, soft shadow, 78×78 `#FFE1EE` pink icon circles,
      `margin-bottom:50px`), navy `#192839` bottom-up hover fill + white icon;
      dotted-grid background; `col-lg-3 col-md-6` grid
- [ ] About: eyebrow "About Us" + heading "We Create a Steps to Build a
      Successful Digital Product" + paragraphs + white "Explore More" pill
      (pink text, `padding:18px 44px`) + image (seed magnet-2)
- [ ] Pricing: eyebrow "Pricing Plan" + heading "Choose Your Best Pricing
      Plan"; Yearly/Monthly `role=tablist` tabs (aria-selected, arrow keys);
      3 cards per pane — white circular icon, pink "Basic" pill, "$ 05.00"
      (30px/700 `#192839`), "Increase traffic 50%", 3 feature lines, "Get
      Started" pink gradient pill (`radius:40px`); stacking on mobile
- [ ] Why Choose Us: eyebrow "Why Choose US" + heading "We are an SEO company
      that specializes in developing" + boxed button + counters "450 +" /
      "860" (Nunito 36px/700 pink) with captions "Successfully completed
      projects" / "Highly specialised employees" (h5 `#131933` 24px) + image
      (seed magnet-3)
- [ ] Brand strip: row of client brand marks (text wordmarks or grayscale
      placeholders, no copied assets)
- [ ] Case Study: eyebrow "Case Study" + heading "Some Of Our Awesome Stuffs";
      4 image cards (seeds magnet-4..7) with "Marketing" tag + title; dark
      `rgba(41,38,33,0)→#292621` gradient hover overlay; 4-across lg
- [ ] Testimonials: carousel (1 slide visible, controls + dots), quote + avatar
      (seeds magnet-8..10) + name "Robert" + role "Creative Director" (NO
      ColorLib reference)
- [ ] Footer: dark bg band (approximation of footer-bg.jpg), blurb column,
      Navigation (Home, About, Services, Blog, Contact), Services (Drone
      Mapping, Real State, Commercial Construction), Contact Us (address,
      email, phone); white copyright bar "© <year> Magnet. All rights
      reserved. Made with ♥ by Component Dock" → link
      `https://www.componentdock.com/`; NO ColorLib string in `apps/magnet`
      (provenance lives only here + TEMPLATES.md + PR)
- [ ] Responsive: 4-across lg / 2-across md / stacked below md for services;
      case-study 4-across lg; hamburger nav below lg; no horizontal overflow
- [ ] Fonts: Nunito (400+700) + Jost (400+500) via Google Fonts `<link>` in
      `index.html`
- [ ] Icons: lucide only (Play, ArrowRight, Smile, CalendarDays, LayoutGrid,
      MapPin, Phone, Mail, Check, Magnet) — probe imports with `typeof`
- [ ] Images: picsum seeds magnet-1..10 only; no copied assets

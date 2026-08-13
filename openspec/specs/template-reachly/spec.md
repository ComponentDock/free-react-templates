# Template: Reachly (SEO / Digital Marketing Agency)

## Purpose

Reachly is a single-page digital-marketing / SEO agency website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calvino" website template design (source:
https://colorlib.com/wp/template/calvino/), built under a DIFFERENT name
(Reachly — evokes "reach customers", the core promise of an SEO agency, while
being a new, original word) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Calvino" — free responsive Bootstrap SEO / digital
  marketing agency website template (source:
  https://colorlib.com/wp/template/calvino/). TEMPLATES.md line 556 (single
  `- [ ]` row).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/calvino/`
  returns HTTP 200 (curl verified 2026-08-13, 40.8 KB HTML). Page title:
  "SEO | Template". This is a FULL-fidelity reference: section order, copy,
  buttons all taken from the live DOM. Token source: `assets/css/style.css`
  (76.9 KB, the page's own stylesheet; the many extra colors like `#f4e700`,
  `#38a4ff` belong to OTHER bundled page styles in the same file — the tokens
  below are the ones actually used by the index.html page).
- **Screenshot:** `calvino-free-template.jpg` (1200×946, browser vision
  verified) — matches the live DOM: digital-marketing agency landing page,
  hot pink `#FF4495` primary, white/light-grey surfaces, soft pink/blue
  pastel blobs behind the hero. Top to bottom: logo "Calvino" + pink icon +
  centered nav (Home, About, Services, Case Study, Blog, Contact) + "Call
  Us:" + pink pill "Let's Talk"; split hero ("Digital Marketing Expert" pill
  tag, bold dark h1 "We bring you new customers", pink pill "Explore
  Services", right side office photo with big white play button and a wavy
  bottom edge); "OUR SERVICES / Provide Awesome Service With Our Tools" with
  FOUR white cards (line icon in a light-pink circle, drop shadow, faint
  dotted grid pattern behind); the screenshot cuts off at the services
  cards — the rest of the page structure comes from the live DOM.
- **Visual design (from live preview + browser vision):** clean, modern
  marketing-agency aesthetic on white. Primary brand color is hot pink
  **`#FF4495`** (buttons, eyebrow labels, underlines, icon accents) over a
  pink→red gradient (**`#FF4495` → `#FF6D6D`**). Headings are dark navy
  **`#192839`** in **Nunito** (bold); body/nav is **Jost**. The hero shows a
  white pill eyebrow with pink text, a large dark h1, and a pink pill CTA;
  the right side is a photo with a floating play button. Services cards are
  white with soft shadow and fill **dark navy `#192839`** on hover (text
  flips white). The pricing section sits on a pale blue-grey `#F8FBFE`
  band with Yearly/Monthly pill tabs and cards whose "Get Started" buttons
  are ORANGE pills (`#E67118`) that turn pink-outline on hover. A full-width
  photo band holds a big pink-gradient rounded box ("Interested to Digging
  Dipper?" + white border pill button). The demo brands itself "Calvino";
  the recreation uses the NEW name **Reachly**.

- **Structure (1:1, section order — from the live DOM):**
  1. Header (`div.header-area.header-transparent` →
     `div.main-header.header-sticky`) — `div.container-fluid` flex
     justify-between: LEFT `div.left-side` logo (`assets/img/logo/logo.png`
     → recreated as a "Reachly" text wordmark with a pink icon mark),
     CENTER `div.main-menu` nav (Home / About / Services / Case Study /
     Blog / Contact; Blog is a `li.has-children` with dropdown Blog, Blog
     Details, Elements), RIGHT "Call Us: +10 (78) 378 3784" +
     "Let's Talk" `a.btn_0` (pink pill). Sticky state → white bg
     (`#fff`), padding 15px.
  2. Hero (`div.slider-area` → `div.single-sliders.slider-height.slider-bg1`,
     cover background image `assets/img/hero/h1_hero1.png`) — `div.row
align-items-center`: LEFT `div.hero-caption` (col-xxl-4/5/6): `span`
     white pill eyebrow "Digital Marketing Expert" (white bg, pink 14px Jost
     text, radius 20px, 1px border `rgba(255,68,149,0.2)`, padding 5px 18px),
     `h1` "We bring you new customers" (58px Nunito 700 `#192839`, lh 1.2),
     `p` "We build effective strategies to help you reach customers and
     prospects across the entire web." (`#192839` 20px, mb 48px),
     "Explore Services" `a.btn_0.hero-btn` (pink pill, padding 15px 36px,
     radius 30px). RIGHT (offset-xl-2 col-lg-5) `div.video-icon`: circular
     play button (`a.popup-video.btn-icon`, YouTube popup in the original →
     DECORATIVE play button in the recreation) floating over the hero photo.
  3. Services (`section.categories-area.bottom-padding`) — centered
     `div.section-tittle.text-center.mb-60`: `span` "Our Services" (pink
     13–14px uppercase, letter-spacing .1em, mb 18px) + `h2` "Provide
     Awesome Service With Our Tools" (36–40px Nunito 700). FOUR
     `div.single-cat.mb-50` (col-xl-3 col-lg-4 col-md-6): `div.cat-icon`
     (svg icon inside a light-pink circle; recreated with a lucide icon),
     `h5 a` "Discover, Explore the Product" (`#192839` 22px 700), `div.cat-cap
p` "Effective strategies to help you reach customers." Card: white bg,
     radius 5px, padding 40px 21px, soft box-shadow; HOVER → `::before`
     (`#192839`) fills from bottom (height 0→100%), title/copy turn white.
     Faint dotted-grid pattern in the section background.
  4. About (`section.about-area1.about-area2`) — `div.row align-items-center`:
     LEFT image column `div.about-img` (photo, radius 4px), RIGHT
     `div.about-caption` with `div.section-tittle.mb-25`: `span` "About Us"
     - `h2` "We Create a Steps to Build a Successful Digital Product" + one
       long paragraph "With over 50 years of combined experience, our mission
       is to design with your values and vision in mind. We're out to create
       purposeful spaces that balance art and creativity with science and
       strategy." + "Explore More" `a.btn_0`.
  5. Pricing (`section.pricing-card-area.section-padding.fix`) —
     `div.container.p-bg.pt-70` (band bg `#F8FBFE`): centered
     `div.section-tittle.text-center.mb-15`: `span` "Pricing Plan" + `h2`
     "Choose Your Best Pricing Plan"; `div.nav-tabs` pills "Yearly" (active)
     / "Monthly" (container border 1px `#000`, radius 20px; ACTIVE tab =
     `#192839` bg + white text); `div.tab-content` with TWO panes, each
     holding THREE `div.single-card` pricing cards (col-xl-4): `div.card-top`
     icon (78px circle, pink icon on white), `h5` plan name, price
     "$ 05.00", feature list (Increase traffic 50% / Social Media Marketing
     / 10 Free Optimization / 24/7 support), "Get Started"
     `a.btn_10.get-btn`. Cards padding 35px 40px; hover → white bg + shadow
     `rgba(255,87,0,0.12)`.
  6. Why Choose Us (`section.about-low-area`) — `div.row justify-content-between
align-items-center.mb-20.pb-25.border-bottom`: LEFT
     `div.section-tittle.section-tittle3`: `span` "Why Choose US" + `h2`
     "We are an SEO company that specializes in developing"; RIGHT
     "Explore More" `a.browse-btn` (`#192839` 16px/500 + 2px pink underline
     at bottom -11px; hover → pink + letter-spacing 1px). Row 2
     `div.about-caption`: stats row (col-xl-5 col-lg-5): `div.single-counter`
     (`span.counter` "450" + `p` "+") over `div.pera-count` `h5`
     "Successfully completed projects" (`#131933` 24px Jost) and the second
     stat "860" / "Highly specialised employees"; then a body paragraph and
     a staff quote with icon: "…" — "- Shonda Leer, Chief of Staff at
     Franclin Technologies".
  7. Brand strip (`div.brand-area`) — `div.brand-active.pt-50.pb-40`: SIX
     `div.single-brand` logo images (brand1–4 + repeats; slick carousel) →
     recreation: row of six neutral logo placeholders (styled text or
     grayscale picsum), scroll-snap/carousel optional.
  8. Case Study (`div.stups-area.pt-100.fix`) — centered
     `div.section-tittle.text-center.mb-60`: `span` "Case Study" + `h2`
     "Some Of Our Awesome Stuffs"; `div.sutps-active` (slick carousel,
     margin 0 12px): FOUR `div.single-sutps` (position relative): image
     (`assets/img/gallery/stuffs1..3.jpg` + repeat) + `div.guest-contents`
     (absolute, left 30px bottom 25px): `p` "Marketing" + `h3 a` "Discover,
     Explore the Product" — white text over a bottom gradient overlay
     (`::before` height 40%).
  9. Testimonials (`div.testimonial-area.section-padding`) —
     `div.h1-testimonial-active` carousel: THREE slides
     `div.testimonial-caption`: `div.testimonial-top-cap` (quote icon +
     quote "Even the all-powerful Pointing has no control about the blind
     texts …") + `div.testimonial-founder` (avatar img + author line
     "- Robert . Creative Director at Colorlib" — recreation MUST drop the
     Colorlib reference, e.g. "Robert — Creative Director").
  10. CTA banner (`div.emargency-care.section-img-bg2`,
      data-background `assets/img/gallery/contact-bg.jpg` — full-width
      background photo; offset-xl-6 right-half content) —
      `div.single-emargency` (490×505 box: bg shape image `bg-2.png` +
      PINK GRADIENT `#FF4495` → `#FF6D6D`): `div.emargency-cap`: `h5`
      "Interested to Digging Dipper?" (36px 700 WHITE) + `p` white +
      "Contact Us" `a.border-btn.loan-btn` (transparent, 1px solid `#fff`
      border, white 18px/500 text, radius 30px, padding 15px 34px,
      letter-spacing 1px).
  11. Footer (`div.footer-wrapper` → `div.footer-area.footer-padding`) —
      `div.row.justify-content-between` with FIVE columns: (1) col-xl-3
      `div.single-footer-caption.mb-50`: logo + `div.footer-pera p` "Duis
      aute irure dolor inasfa reprehenderit in voluptate velit esse cillum"
      (`#5E5E5E` 16px lh 1.8) + social icons; (2) col-xl-2 `div.footer-tittle`
      h4 "Navigation" — Home / About / Services / Blog / Contact; (3)
      col-xl-2 h4 "Services" — Drone Mapping / Real State / Commercial /
      Construction; (4) col-xl-2 h4 "Support" — Drone Mapping / Real State /
      Commercial / Construction; (5) col-xxl-2 h4 "Contact Us" — icon +
      `contact@carwash.com` (→ contact@reachly.example) + phone
      "10 (87) 738-3940". `div.footer-bottom-area` → `div.footer-copy-right.
text-center`: "Copyright © <year> All rights reserved | This template
      is made with ♥ by Colorlib" — recreation replaces the ColorLib credit
      with the mandatory **Component Dock** footer link
      (https://www.componentdock.com/) per repo conventions; tittle h4
      `#1A1A1A` 20px 600, links `#5E5E5E` 16px 300 with underline on hover.

- **Design tokens (extracted from `assets/css/style.css`):**
  - Brand pink **`#FF4495`** — eyebrow spans (`.section-tittle > span`,
    `.hero-caption span`), `.btn_0` gradient, `.browse-btn` underline,
    `.cat-icon`/pricing `.card-top` icon color, `.get-btn` hover border +
    text, `.border-btn i`, nav/footer hover accents. (52 uses in the sheet.)
  - Pink gradient **`#FF4495` → `#FF6D6D`** — `.btn_0` buttons and the
    `.single-emargency` CTA box (`.emargency-care` rules).
  - Dark navy **`#192839`** — h1 (58px), `.section-tittle h2` color,
    `.hero-caption p`, `.single-cat h5 a`, `.single-cat::before` hover fill,
    active `.nav-link` bg, `.browse-btn` text.
  - Deep blue **`#1F2B7B`** — secondary brand blue in the shared sheet.
  - Stats numbers **`#131933`** (`.pera-count h5`, 24px Jost); body copy
    **`#545454`** (Jost 16px, lh 1.4–1.8).
  - Footer text/links **`#5E5E5E`**, footer headings **`#1A1A1A`** (20px 600).
  - Pricing band **`#F8FBFE`** (`.p-bg`); white surfaces: cards `#fff`,
    sticky header `#fff`, hero eyebrow pill `#fff`, single-card hover `#fff`;
    soft shadows (card `0 25px …`, pricing hover `0 15px 30px
rgba(255,87,0,0.12)`).
  - Light tints in the shared sheet for other pages (NOT this page): `#f9f9ff`,
    `#f0e9ff`, `#fbf9ff`.
  - Fonts — body **"Jost"** 16px (sans-serif); headings **"Nunito"** 700
    (h1 58px, h2 36–40px, lh 1.4); eyebrow spans Jost 13–14px uppercase,
    letter-spacing .1em, mb 18px. Google Fonts `@import` in the original —
    use `<link>` in `index.html` (Jost 300–600 + Nunito 400–800).
  - Buttons (all PILL, radius 25–40px): `.btn_0` = pink gradient
    `#FF4495→#FF6D6D` bg, white 18px/500 text, padding 11px 36px, radius
    25px, trailing arrow icon (`i` at left 26px → 30px on hover); `.hero-btn`
    = same with padding 15px 36px, radius 30px; hover shifts gradient
    (`background-position: top`) + arrow slides right. `.get-btn` (pricing)
    = Nunito, ORANGE `#E67118` bg, white text, radius 40px, padding
    11px 23px (14px 27px responsive); hover → transparent + 1px `#FF4495`
    border + pink text. `.border-btn` (CTA) = transparent, 1px `#fff`
    border, white 18px/500, radius 30px, padding 15px 34px, ls 1px.
    `.browse-btn` = `#192839` 16px/500 + 2px pink underline (bottom -11px);
    hover → pink + letter-spacing 1px.
  - Section rhythm — `section-padding` 120px 0 (100/70 responsive);
    pricing band `p-bg` + `pt-70`; brand `pt-50 pb-40`; stups `pt-100`;
    footer-padding.
  - Hero — cover bg image (`h1_hero1.png`), h1 58px Nunito 700 `#192839`
    lh 1.2 mb 11px; p `#192839` 20px mb 48px; eyebrow = white pill (bg
    `#fff`, pink 14px text, radius 20px, 1px border `rgba(255,68,149,0.2)`,
    padding 5px 18px, mb 20px).
  - Tabs — `.nav-tabs` container border 1px `#000`, radius 20px; `.nav-link`
    Nunito 13px 600 uppercase padding 10px 19px, radius 20px 0 0 20px (last
    child mirrored); `.nav-link.active` = `#192839` bg + white text.
  - Service card hover — `::before` absolute bottom fill `#192839`
    (height 0 → 100%, radius 5px, transition .6s), text flips white.
  - Case-study cards — `.single-sutps::before` bottom gradient overlay
    (height 40%, z-index 1); `.guest-contents` absolute left 30px bottom
    25px (left 20px on smaller screens).

- **Recreation decisions:** all photos → picsum placeholders (seeds
  `reachly-hero`, `reachly-about`, `reachly-stuff-1..4`, `reachly-avatar`,
  `reachly-brand-1..6`); the YouTube popup → decorative circular play
  button; logo → "Reachly" text wordmark with a pink icon mark; fontawesome
  icons → lucide-react (Play, ArrowRight, TrendingUp/BarChart/Laptop/
  FileText for the four service icons, Quote, Instagram, Facebook, Twitter,
  MapPin, Phone, Mail); slick carousels (brand, stups, testimonials) →
  CSS scroll-snap or a small state-driven carousel, no new dependency;
  footer ColorLib credit → mandatory Component Dock link; brand copy
  "Calvino" → "Reachly", `contact@carwash.com` → `contact@reachly.example`,
  the testimonial author "… at Colorlib" paraphrased to "Robert — Creative
  Director"; the demo's repeated "Basic / $05.00" pricing cards kept the
  same kind (see fidelity notes).

Reachly lives in `apps/reachly` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Transparent header with nav and pink CTA

The system SHALL render a transparent sticky header with a logo, a centered
nav (one dropdown), a call-phone line, and a pink pill "Let's Talk" button;
the header SHALL turn solid white on scroll.

#### Scenario: Header layout

- **GIVEN** the Reachly page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the "Reachly" wordmark on the left
- **AND** the nav SHALL show the links Home, About, Services, Case Study,
  Blog, and Contact
- **AND** "Call Us:" with a phone number and a pink pill "Let's Talk"
  button SHALL be shown on the right
- **AND** when the page scrolls, the header SHALL become solid white

#### Scenario: Blog dropdown

- **GIVEN** the nav is displayed
- **WHEN** the user hovers or focuses the Blog link
- **THEN** a dropdown SHALL open with the items Blog, Blog Details, and
  Elements

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the nav SHALL collapse behind a hamburger toggle that reveals
  the same links in a mobile menu

### Requirement: Split hero with eyebrow pill and pink CTA

The system SHALL render a hero with a white pill eyebrow, a large dark
headline, subcopy, a pink pill "Explore Services" button, and a floating
circular play button.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "Digital Marketing Expert" in a white
  pill with pink text
- **AND** the headline "We bring you new customers" SHALL be shown in dark
  navy 58px bold Nunito
- **AND** the subcopy "We build effective strategies to help you reach
  customers and prospects across the entire web." SHALL be shown below
- **AND** a pink pill "Explore Services" button SHALL be shown
- **AND** a circular play button SHALL float over the hero photo on the
  right (decorative — it does not open a video)

### Requirement: Services section with four hover-fill cards

The system SHALL render a centered "Our Services" heading and four white
cards, each with a pink icon circle, a title, and copy, that fill dark navy
on hover.

#### Scenario: Services cards

- **GIVEN** the services section is displayed
- **WHEN** the page loads
- **THEN** the eyebrow "Our Services" and the heading "Provide Awesome
  Service With Our Tools" SHALL be shown centered
- **AND** four cards SHALL be shown in a row, each with an icon in a light
  pink circle, the title "Discover, Explore the Product", and the copy
  "Effective strategies to help you reach customers."
- **AND** hovering a card SHALL fill it `#192839` and turn its text white

### Requirement: About section with image and caption

The system SHALL render an About section with a photo on the left and a
caption (eyebrow, heading, paragraph, "Explore More" button) on the right.

#### Scenario: About content

- **GIVEN** the About section is displayed
- **WHEN** the page loads
- **THEN** a photo SHALL be shown on the left
- **AND** the caption SHALL show the eyebrow "About Us", the heading "We
  Create a Steps to Build a Successful Digital Product", a paragraph, and a
  pink pill "Explore More" button

### Requirement: Pricing plan with Yearly/Monthly tabs

The system SHALL render a pricing section on a pale `#F8FBFE` band with
Yearly/Monthly pill tabs and three pricing cards, each with an icon, plan
name, price, feature list, and an orange pill "Get Started" button.

#### Scenario: Pricing content

- **GIVEN** the pricing section is displayed
- **WHEN** the page loads
- **THEN** the eyebrow "Pricing Plan" and heading "Choose Your Best Pricing
  Plan" SHALL be shown centered
- **AND** a pill tab control SHALL show "Yearly" (active) and "Monthly"
- **AND** three pricing cards SHALL be shown, each with an icon, a plan
  name, a "$ 05.00"-style price, the features Increase traffic 50%, Social
  Media Marketing, 10 Free Optimization, and 24/7 support, and an orange
  pill "Get Started" button
- **AND** switching tabs SHALL swap the visible cards (both panes show the
  same kind of content as the demo)
- **AND** hovering a card SHALL lift it with a soft shadow and turn the
  "Get Started" button into a pink outline

### Requirement: Why Choose Us with stats and quote

The system SHALL render a "Why Choose Us" heading with an "Explore More"
underline link on the same row, two numbered stats, a paragraph, and a
staff quote.

#### Scenario: Why Choose Us content

- **GIVEN** the Why Choose Us section is displayed
- **WHEN** the page loads
- **THEN** the eyebrow "Why Choose US" and heading "We are an SEO company
  that specializes in developing" SHALL be shown with an "Explore More"
  link (dark text + pink underline) aligned right
- **AND** the stats "450+" "Successfully completed projects" and "860"
  "Highly specialised employees" SHALL be shown
- **AND** a paragraph and a quoted staff line ("- Shonda Leer, Chief of
  Staff at Franclin Technologies") SHALL be shown below

### Requirement: Client brand logo strip

The system SHALL render a strip of six client logo placeholders below the
Why Choose Us section.

#### Scenario: Brand strip

- **GIVEN** the brand strip is displayed
- **WHEN** the page loads
- **THEN** six logo placeholders SHALL be shown in a row

### Requirement: Case Study cards with overlay captions

The system SHALL render a centered "Case Study" heading and four photo
cards, each with a category tag and a title overlaid at the bottom.

#### Scenario: Case study content

- **GIVEN** the case study section is displayed
- **WHEN** the page loads
- **THEN** the eyebrow "Case Study" and heading "Some Of Our Awesome
  Stuffs" SHALL be shown centered
- **AND** four cards SHALL be shown, each with a photo, a "Marketing" tag,
  and the title "Discover, Explore the Product" overlaid at the bottom-left
  in white over a dark gradient

### Requirement: Testimonial carousel

The system SHALL render a testimonial carousel with three slides, each with
a quote, an avatar, and an author line that does not reference ColorLib.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** three testimonial slides SHALL be shown, each with a quote, an
  avatar, and an author line (e.g. "Robert — Creative Director")
- **AND** the slides SHALL be navigable (carousel controls or scroll)

### Requirement: Pink CTA banner with white border button

The system SHALL render a full-width background-photo band with a big
pink-gradient box on the right containing a white heading, copy, and a
white-bordered pill "Contact Us" button.

#### Scenario: CTA banner

- **GIVEN** the CTA banner is displayed
- **WHEN** the page loads
- **THEN** a large pink-gradient `#FF4495 → #FF6D6D` rounded box SHALL be
  shown over the right half of a background photo
- **AND** the box SHALL show the heading "Interested to Digging Dipper?",
  a white paragraph, and a "Contact Us" button with a white border and
  white text

### Requirement: Footer with five columns and Component Dock credit

The system SHALL render a light footer with an about column, three link
columns (Navigation, Services, Support), a Contact Us column, and a
copyright bar linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the about column SHALL show the wordmark, a blurb, and social
  icons
- **AND** the Navigation column SHALL list Home, About, Services, Blog,
  and Contact
- **AND** the Services and Support columns SHALL each list Drone Mapping,
  Real State, Commercial, and Construction
- **AND** the Contact Us column SHALL show an email address and a phone
  number
- **AND** the copyright bar SHALL credit Component Dock with a link to
  https://www.componentdock.com/

### Requirement: Pink pill button system

The system SHALL style primary buttons as pink-gradient pills with white
text and a trailing arrow icon, and secondary buttons as outlined pills.

#### Scenario: Button appearance and hover

- **GIVEN** a primary pink pill button is displayed
- **WHEN** the page loads
- **THEN** the button SHALL have a `#FF4495 → #FF6D6D` gradient background,
  white 18px text, padding 11px 36px, and a 25px border radius (hero size:
  padding 15px 36px, radius 30px)
- **AND** on hover the gradient SHALL shift and the trailing arrow SHALL
  slide right
- **AND** outlined variants (`.border-btn`) SHALL show a 1px white border
  with transparent background, and underline links (`.browse-btn`) SHALL
  show a 2px pink underline below the text

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Reachly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, services, About,
  pricing, Why Choose Us, brand strip, case study, testimonials, CTA
  banner, and footer in order
- **AND** the document title SHALL be "Reachly — SEO & Marketing Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/reachly`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/reachly`)
- [ ] Section order matches the reference 1:1 (header → hero → services → About → pricing → Why Choose Us → brand strip → case study → testimonials → CTA banner → footer)
- [ ] Design tokens in `@theme` (brand pink #FF4495, gradient #FF4495→#FF6D6D, navy #192839, band #F8FBFE, Nunito + Jost font stacks)
- [ ] Header: transparent, "Reachly" wordmark left, nav (Home/About/Services/Case Study/Blog/Contact) with Blog dropdown, "Call Us:" + pink pill "Let's Talk" right, white sticky bg
- [ ] Hero: white pill eyebrow "Digital Marketing Expert", 58px navy h1, 20px subcopy, pink pill "Explore Services" (hero padding 15px 36px, radius 30px), decorative circular play button over right-side photo
- [ ] Services: "Our Services / Provide Awesome Service With Our Tools" + 4 white cards (pink icon circle, 22px navy title, copy), hover → #192839 fill + white text
- [ ] About: photo left, caption right ("About Us" eyebrow, h2, paragraph, pink "Explore More")
- [ ] Pricing: #F8FBFE band, Yearly/Monthly pill tabs (active #192839), 3 cards (icon, plan, $05.00 price, 4 features, orange pill "Get Started"), hover shadow + pink-outline button
- [ ] Why Choose Us: heading + right-aligned "Explore More" underline link, stats 450+/860, paragraph + Shonda Leer quote
- [ ] Brand strip: 6 logo placeholders in a row
- [ ] Case Study: "Some Of Our Awesome Stuffs" + 4 photo cards with "Marketing" tag + white overlay title on dark gradient
- [ ] Testimonials: 3 slides (quote, avatar, author — NO Colorlib reference)
- [ ] CTA banner: full-width bg photo + pink-gradient rounded box ("Interested to Digging Dipper?" + white copy + white-bordered "Contact Us" pill)
- [ ] Footer: about column (wordmark + blurb + socials), Navigation/Services/Support link columns, Contact Us column (email + phone), copyright bar links Component Dock
- [ ] Buttons: `.btn_0` pink-gradient pill (radius 25px, arrow slides right on hover); `.get-btn` orange pill → pink outline on hover; `.border-btn` white outline; `.browse-btn` 2px pink underline
- [ ] Document title "Reachly — SEO & Marketing Template"

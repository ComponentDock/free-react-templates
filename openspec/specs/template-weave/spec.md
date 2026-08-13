# Template: Weave (Business / SaaS Startup)

## Purpose

Weave is a business/SaaS-startup landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Olla"
website template (source: https://colorlib.com/wp/template/olla/ — "Olla -
Free Bootstrap 5 Template by Colorlib", a SaaS product/site-builder landing
page; page title "Business | Template"), built under a DIFFERENT name (Weave —
the idea of combining/weaving sections from a component library into a
website, matching the source's core pitch; single lowercase word, no collision
with `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-13),
per the monorepo naming mandate (never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWO times in TEMPLATES.md (dup-row trap): line 611
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one)
and line 1115 (**Business (365)** category) — both `- [ ]` rows of the SAME
template. ONE implementation covers both rows (mark all `[x]` with the same
surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Olla" — page title "Business | Template". A
  SaaS/site-builder one-pager: dark announcement strip + sticky white header,
  split hero (headline + email CTA left, workspace photo right), three pastel
  feature cards, about/features list, dark navy brand-logos band, accordion
  (FAQ) + image, monthly/yearly pricing tabs with 2 cards, testimonial
  quotes, project gallery with hover overlays, dark CTA band, dark footer
  with newsletter form. The recreation brands itself **Weave** but keeps the
  same section structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-13):**
  `https://preview.colorlib.com/theme/olla/` — HTTP 200, ~36 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets:
  `assets/css/style.css` (custom, ~79 KB — the template-specific tokens live
  here), plus bootstrap.min.css, owl.carousel.min.css, slicknav.css,
  animate.min.css, magnific-popup.css, fontawesome-all.min.css,
  themify-icons.css, slick.css, nice-select.css. Screenshot
  `olla-colorlib-template.jpg` (1200×946, viewed in browser) matches the live
  DOM (announcement bar + white header + split hero + pastel cards visible
  in the shot).
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`div.header-area` → `div.main-header`): TOP `div.header-top.text-center` — dark navy `#041735` strip (padding 20px 0) with announcement copy "This handy little bar is great for informing visitors of various features." + "Learn More" link. BOTTOM `div.header-bottom.header-sticky` — white, `box-shadow: 0 3px 8px rgba(4,23,53,0.04)`, `border-bottom: 1px solid #DBDEE9`, padding 0 88px; `div.d-flex...` row: LEFT `img.logo.png` brand; CENTER nav links **Home · About · Services · Portfolio · Blog** (dropdown: Blog, Blog Details) **· Elements · Contact**; RIGHT `div.header-right-btn.f-right` — `a.btn` "Get Free Quote" (blue `#2845BA`, Cabin, padding 22px 32px, white text, search-form icon). Sticky state: `.header-sticky.sticky-bar` (add shadow on scroll).
  2. **Hero slider** (`div.slider-area.position-relative` → `div.slider-active` → single `div.single-slider` → `div.slider-cap-wrapper.slider-height` — height 800px desktop / 650 / 500 / 450 / mobile): split layout — LEFT `div.hero-caption` (width 35% desktop, 45-50% below 1600px; padding-right 50px): `h1` "Build your website in record time." (Cabin, 60px, 700, line-height 1.1, margin-bottom 20px) · `p` "Combine sections from Olla's vast component library and create beautiful." (22px, 500, `#041735`, line-height 1.4, margin-bottom 40px) · CTA `a.btn.search-form` "Get Free Quote" (blue, search icon). RIGHT `div.hero-img.position-relative` (width 50%): `img` h1_hero1.jpg (workspace photo) + `img.hero-shape.png` decorative shape (`d-none d-xl-block`). (Source ships ONE slide; hero-caption2 variants exist for alternate slides.)
  3. **Categories / features** (`section.categories-area.section-padding`): centered `div.section-tittle.text-center.mb-50` `h2` "Olla helps you to spruk your product's features." (Cabin 40px/700) + `p` "Combine sections from Olla's vast component library and..." Below: THREE `div.single-cat` cards (`.cat1/.cat2/.cat3` — pastel bgs `#F0F3FF` / `#F0E9FF` / `#E9FFFD`; radius 5px; padding 60px 60px desktop; hover `::before` fills `#E9FFFD` height 0→100%, radius 5px, z-index -1): each `div.cat-icon` (svg `services1/2/3.svg` — gear-brain / monitor / head-gear style icons) + `h5 a` title **Unlimited Compnents** (sic) · **Awesome Support** · **Responsive Design** (`#041735`, 25px, 600) + `p` "Combine sections from Olla's vast component library and create beautiful."
  4. **About / features list** (`section.about-area1.bottom-padding`): LEFT `div.about-caption` — `div.section-tittle.mb-30` `h2` "All the features you'd expect." + THREE feature rows (icon + `h4` + `p`): **Tons of pre-made sections** · **Complete CMS integration** · **Stellar after-sales support** (each: "Combine sections from Olla's vast component library and create beautiful." / "Facilisis ac eget mauris nulla enim a diam. Posuere vel eleifend augue laoreet non praesent ultrices."); RIGHT `div.about-img` `img.gallery/about1.jpg`.
  5. **Brand logos band** (`div.brand-area` — bg `#041735`, padding 60px 0): `div.section-tittle.section-tittle2.text-center.mb-60` `h2` "You'll be in good company." (white) + `p` "A powerful suite of features to help you build fast and functional layouts. Olla is perfect for building websites of almost any kind." + `a` "Meet Our Customers" (btn_0 style — pink gradient `#ff4495`→`#ff6d6d`, padding 11px 36px, 18px/500, radius 0); below `div.row.justify-content-center.align-items-end` of brand logo images `brand1.png`…`brand4.png` (repeated 2×3 grid).
  6. **Project / accordion** (`section.project-us.pb-padding.section-padding`): row — LEFT `div.section-tittle.mb-30` `h2` "Work fast, create beautifully." + paragraph; RIGHT `div.collapse-wrapper` accordion (`#accordionEx` Bootstrap collapse, ~20 `.card` items, e.g. "Complete CMS integration?", "What impacts my car insurance price?", "What does car insurance cover?" — the demo copy is generic/lorem + insurance filler; paraphrase to coherent product FAQs) — each item: `.card-header` button (plus/minus toggle) + `.card-body` "Facilisis ac eget mauris nulla enim a diam. Posuere vel eleifend augue laoreet non praesent ultrices." First item `show`.
  7. **Pricing** (`section.pricing-card-area.fix` — bg `#F1F2F6`, padding 80px 0): `div.section-tittle.mb-15` `h2` "Build beautiful, feature-complete websites." + `div.nav-button` `nav.nav-tabs` toggle: **Yearly** / **Monthly** (`.nav-link` — bg `rgba(74,168,198,0.1)`, Cabin, 14px/500, color `#4AA8C6`, padding 10px 19px, radius 4px; active = blue fill); `div.tab-content` with two `div.tab-pane` (fade; first `show active`) → `div.card-wrapper` (white, radius 6px, padding 45px 20px) containing TWO `div.single-card`: `div.card-mid` `h4` "**$ 20** /month" and "**$ 05** /month" (`#041735`, 40px, 700) + `p` "per user, per month" + feature list + CTA button. (Source markup is Bootstrap tab scaffolding; the visual is a 2-card monthly/yearly pricing grid.)
  8. **Testimonials** (`div.testimonial-area`): `div.section-tittle.mb-50` `h2` "They use Olla to create great websites." + `p` "A powerful suite of features to help you build fast and functi[onal layouts]."; TWO `div.testimonial-caption` quote cards: `div.testimonial-top-cap` (`img` + `h2` quote) — quote "Facilisis ac eget mauris nulla enim a diam. Posuere vel eleifend augue laoreet non praesent ultrices. Olla is perfect for building websites of almost any kind." + founder row (name/role).
  9. **Gallery / projects** (`div.gallery-area.section-padding`): centered `div.section-tittle.text-center.mb-60` `h2` "Projects we have done."; THREE `div.box` project tiles — `.gallery-img` (height 565px, bg cover) / `.small-img` (height 410px) + `div.overlay` (`rgba(0,0,0,0.3)` full-cover) with `div.overlay-content`: `h4` "Mobile App" + `p` "Facilisis ac eget mauris nulla." + link icon. (All three titled "Mobile App" in demo — vary with paraphrase.)
  10. **CTA band** (`section.wantToWork-area.w-padding2` — bg `#041735`, cover bg image): `div.wants-wrapper` row — LEFT `div.wantToWork-caption`: `h2` "Create your amazing website with Olla" (white, 40px, 400, line-height 1.5, margin-bottom 12px) + `p` "Facilisis ac eget mauris nulla enim a diam posuere vel eleifend augue."; RIGHT `a.btn` CTA (blue "Get Free Quote" style).
  11. **Footer** (`div.footer-wrapper` — bg `#041735` → `div.footer-area.footer-padding`): `div.row.justify-content-between` of FOUR `div.single-footer-caption`: (1) brand — `div.footer-logo.mb-35` `img.logo.png` + `div.footer-pera` about paragraph (white, 14px, line-height 1.8); (2) `div.footer-tittle` `h4` "Quick Links" + links **Work · Services · Services · Tips & Tricks**; (3) `div.footer-tittle` `h4` "Support" + links **FAQ · Submit Ticket · Contact Us**; (4) `div.footer-tittle.mb-10` `h4` "Newsletter" + `div.footer-form.mb-40` email form (white input, height 60px, radius 4px, placeholder "Enter your email" `#5C6168`; absolute `div.form-icon` submit button `#2845BA` with send/arrow icon) + `div.footer-social` icons. Bottom: `div.footer-bottom-area` → `div.footer-border` (border-top `rgba(255,255,255,0.09)`, padding-top 39px) → `div.footer-copy-right.text-center` copyright line (source credit "made with ❤ by Colorlib" — REPLACED per policy).
  12. **Scroll-up**: source has no explicit back-top in the static index HTML (nav/footer anchor to `#`); optional smooth-scroll top control may be added as polish (note deviation if added).
- **Visual design (TEMPLATES.md screenshot `olla-colorlib-template.jpg`, 1200×946, viewed in browser 2026-08-13):** SaaS landing one-pager on a stark white canvas. Thin light-grey notification strip on top ("This handy little bar is great for informing visitors of various features." + orange Learn More), white header ("olla." logo left, centered nav, blue "Free Quote" button right). SPLIT hero: left — small blue tag ("A sample business solution" — rendered from the eyebrow text), huge bold dark headline "Build your website in record time.", lighter grey sub-line, an email input ("Enter your email") + blue "Get Free Quote" button, faint dotted decorative grid behind the text; right — large photo of a bearded, tattooed man in a black tee typing on a laptop with a modern pendant lamp overhead. Below: centered heading + row of THREE pastel feature cards (lavender / soft salmon / pale mint) each with a centered icon, title, and blurb. Overall: modern, clean, startup-y; blue CTAs; dark navy bands for brand logos and CTA; white cards on light grey for pricing.
- **Design tokens extracted from the live CSS (`assets/css/style.css`, verified 2026-08-13):**
  - Brand blue: **`#2845BA`** (64 uses) — `.btn` bg (Cabin, padding 22px 32px, white text, radius 0 SHARP corners; hover `::before` sweeps coral `#ec583a` scaleX 0→1), `.btn.search-form` (hero/header CTA), footer form submit button bg, nav accent.
  - Dark navy: **`#041735`** (16 uses) — `.header-top` bg (announcement strip), `.brand-area` bg, `.wantToWork-area` bg, `.footer-wrapper` bg, hero `p` color, category `h5 a` color, `.card-mid h4` color, section h2 color.
  - Pastel card bgs: **`#F0F3FF`** (cat1 lavender) · **`#F0E9FF`** (cat2 soft pink) · **`#E9FFFD`** (cat3 pale mint + hover fill `::before`), `.single-cat` radius 5px, padding 60px 60px (40/20 responsive).
  - Pricing band: **`#F1F2F6`** bg; `.card-wrapper` white, radius 6px, padding 45px 20px.
  - Tab accent: **`#4AA8C6`** (`.nav-link` text + `rgba(74,168,198,0.1)` bg, radius 4px, padding 10px 19px, Cabin 14px/500).
  - Secondary CTA: **`#ff4495` → `#ff6d6d`** pink gradient (`.btn_0` — "Meet Our Customers", padding 11px 36px, 18px/500, white text, radius 0).
  - Button hover sweep: **`#ec583a`** (coral, `.btn::before` scaleX animation, radius 0).
  - Borders: **`#DBDEE9`** (header-bottom border), header shadow `rgba(4,23,53,0.04)`; footer border-top `rgba(255,255,255,0.09)`.
  - Text: `#041735` (headings/hero p), **`#5C6168`** (footer input text + placeholder), `#999999`/`#888888`/`#777` (body/muted), white on dark bands.
  - Fonts: **"Cabin", sans-serif** (display + buttons — hero h1 60px/700/lh 1.1, `.section-tittle h2` 40px/700/lh 1.3, category h5 25px/600, pricing h4 40px/700, CTA h2 40px/400) and **"Open Sans", sans-serif** (body — paragraphs 16px/400). Both Google Fonts — add `<link>`s in `index.html`.
  - Buttons: `.btn` blue rect, radius 0, padding 22px 32px, white Cabin text, coral hover sweep; `.btn_0` pink-gradient rect 11px 36px; tabs pill-ish radius 4px. No rounded corners anywhere except cards (5-6px).
  - Section rhythm: `.section-padding` = 120px 0 (100px tablet, 70px mobile); `.pricing-card-area` 80px 0; `.brand-area` 60px 0; `.slider-height` 800px (650/500/500/450/350 mobile); `.footer-form input` height 60px radius 4px; `.gallery-img` 565px / `.small-img` 410px.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap 5 layout (NO Bootstrap dependency); section order 1:1 as above; Cabin + Open Sans via Google Fonts `<link>`s in `index.html`; brand `#2845BA` + `#041735` in `@theme` used via Tailwind classes, with `#F0F3FF`, `#F0E9FF`, `#E9FFFD`, `#F1F2F6`, `#4AA8C6`, `#ff4495`/`#ff6d6d`, `#ec583a`, `#5C6168`, `#DBDEE9` tokens; images via seeded picsum placeholders (`picsum.photos/seed/weave-<n>/<w>/<h>` — workspace/desk subject for hero, screens for about, projects, testimonial avatars; screen the seeds per the skill's pixel-metric method for the hero), icons from lucide-react (search, plus/minus, send/arrow, check, menu, chevrons; brand icons as INLINE SVG — lucide-react removed brand icons); the source's Bootstrap collapse accordion + nav-tabs pricing toggle + carousels as client-side React state/components (accessible accordion + tab patterns); copy may be paraphrased but keep the same kinds (announcement strip; hero headline + subtext + CTA; feature card title + blurb; about feature rows; brand band heading + CTA; FAQ accordion items; pricing card title + price + per-user line; testimonial quote + founder; project tile title + blurb; CTA band heading + button; footer widgets + newsletter form); brand "Olla"/"Colorlib" → "Weave" everywhere including the footer credit; footer MUST link https://www.componentdock.com/ per policy; document title "Weave — Build Websites in Record Time". Nav/CTA links are dead anchors (single landing page; "Home", "About", etc. anchor to `#` harmlessly).

Weave lives in `apps/weave` (package `@free-react-templates/weave`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a dark announcement strip plus a sticky white header
with a logo, nav links and a Get Free Quote button.

#### Scenario: Announcement strip

- **GIVEN** the Weave page is rendered
- **WHEN** the page loads
- **THEN** a dark navy (`#041735`) strip SHALL be shown at the very top
- **AND** it SHALL contain the announcement copy and a "Learn More" link

#### Scenario: Header brand and actions

- **GIVEN** the header is rendered
- **WHEN** the header is inspected
- **THEN** the header SHALL show the brand logo on the left
- **AND** nav links Home, About, Services, Portfolio, Blog (with Blog
  Details submenu), Elements, Contact SHALL be shown (desktop)
- **AND** a blue "Get Free Quote" button SHALL be shown on the right

#### Scenario: Sticky header

- **GIVEN** the page is scrolled
- **WHEN** the header is observed after scrolling
- **THEN** it SHALL become sticky (fixed with the header's shadow/border)

### Requirement: Hero

The system SHALL render a split hero with a headline, subtext, a Get Free
Quote CTA on the left and a workspace photo on the right.

#### Scenario: Hero content

- **GIVEN** the Weave page is rendered
- **WHEN** the hero section is inspected
- **THEN** the hero SHALL be a two-column split (caption ~35-50% left, image
  ~50% right on desktop; stacked on mobile)
- **AND** the headline "Build your website in record time." SHALL be shown
  in large bold Cabin type (~60px desktop, `#041735`)
- **AND** the subtext "Combine sections from Weave's vast component library
  and create beautiful." SHALL be shown (22px/500)
- **AND** a blue "Get Free Quote" button with a search icon SHALL be shown

### Requirement: Feature cards

The system SHALL render a centered heading followed by three pastel feature
cards.

#### Scenario: Cards

- **GIVEN** the Feature cards section is rendered
- **WHEN** the section is inspected
- **THEN** the heading "Weave helps you to spruik your product's features."
  SHALL be shown (paraphrase allowed)
- **AND** THREE cards SHALL be shown, each with a pastel background
  (lavender `#F0F3FF`, soft pink `#F0E9FF`, pale mint `#E9FFFD`), a centered
  icon, a title (Unlimited Components / Awesome Support / Responsive
  Design) and a blurb
- **AND** hovering a card SHALL reveal a mint fill sweep

### Requirement: About features

The system SHALL render an About section with a heading, three feature rows
and a photo.

#### Scenario: Feature rows

- **GIVEN** the About section is rendered
- **WHEN** the section is inspected
- **THEN** the heading "All the features you'd expect." SHALL be shown
- **AND** THREE feature rows SHALL be shown (Tons of pre-made sections ·
  Complete CMS integration · Stellar after-sales support), each with an
  icon, title and short description
- **AND** a photo SHALL be shown on the opposite side

### Requirement: Brand logos band

The system SHALL render a dark navy band with a heading, a pink CTA and a
grid of brand logos.

#### Scenario: Brand band

- **GIVEN** the Brand logos band is rendered
- **WHEN** the band is inspected
- **THEN** it SHALL have the dark navy background (`#041735`)
- **AND** the heading "You'll be in good company." SHALL be shown in white
- **AND** a "Meet Our Customers" button SHALL be shown (pink gradient
  `#ff4495`→`#ff6d6d`)
- **AND** a grid of placeholder brand logos SHALL be shown below

### Requirement: FAQ accordion

The system SHALL render an accordion of collapsible FAQ items beside a
"Work fast, create beautifully." heading.

#### Scenario: Accordion items

- **GIVEN** the FAQ accordion is rendered
- **WHEN** the section is inspected
- **THEN** the heading "Work fast, create beautifully." SHALL be shown on
  the left
- **AND** a list of collapsible question items SHALL be shown on the right
- **AND** the first item SHALL be expanded by default
- **AND** activating an item's toggle SHALL expand it and collapse the
  previously expanded one (accordion behavior), with plus/minus indicator

### Requirement: Pricing

The system SHALL render a light-grey pricing section with a Yearly/Monthly
toggle and two price cards.

#### Scenario: Pricing toggle and cards

- **GIVEN** the Pricing section is rendered
- **WHEN** the section is inspected
- **THEN** the heading "Build beautiful, feature-complete websites." SHALL
  be shown
- **AND** a Yearly / Monthly toggle SHALL be shown (active tab blue)
- **AND** TWO white cards SHALL be shown, each with a price
  ("$ 20 /month", "$ 05 /month"), a "per user, per month" line, a feature
  list and a CTA button
- **AND** switching the toggle SHALL switch the active card set (tab
  behavior)

### Requirement: Testimonials

The system SHALL render a "They use Weave to create great websites." section
with two quote cards.

#### Scenario: Quote cards

- **GIVEN** the Testimonials section is rendered
- **WHEN** the section is inspected
- **THEN** the centered heading SHALL be shown
- **AND** TWO testimonial cards SHALL be shown, each with a quote and a
  founder row (avatar, name, role)

### Requirement: Project gallery

The system SHALL render a "Projects we have done." section with three image
tiles that reveal a dark overlay on hover.

#### Scenario: Gallery tiles

- **GIVEN** the Project gallery is rendered
- **WHEN** the section is inspected
- **THEN** the centered heading SHALL be shown
- **AND** THREE project tiles SHALL be shown (photo + overlay content with a
  title and blurb)
- **AND** hovering a tile SHALL reveal the dark overlay (`rgba(0,0,0,0.3)`)
  content

### Requirement: CTA band

The system SHALL render a dark navy CTA band with a heading and a Get Free
Quote button.

#### Scenario: CTA band content

- **GIVEN** the CTA band is rendered
- **WHEN** the band is inspected
- **THEN** it SHALL have the dark navy background (`#041735`)
- **AND** the heading "Create your amazing website with Weave" SHALL be
  shown in white
- **AND** a blue "Get Free Quote" button SHALL be shown

### Requirement: Footer

The system SHALL render a dark footer with a brand column, Quick Links,
Support links, a newsletter form and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Footer is rendered
- **WHEN** the footer is inspected
- **THEN** it SHALL have the dark navy background (`#041735`)
- **AND** it SHALL show: a brand column (logo + about paragraph); "Quick
  Links" with links Work, Services, Tips & Tricks; "Support" with links
  FAQ, Submit Ticket, Contact Us; a "Newsletter" column with an email input
  (white, rounded 4px) and a blue submit button

#### Scenario: Copyright bar

- **GIVEN** the Footer is rendered
- **WHEN** the bottom bar is inspected
- **THEN** a centered copyright line SHALL be shown with a neutral credit
  (no ColorLib attribution; per policy the footer MUST link
  https://www.componentdock.com/)

## Verification checklist

- [ ] App `apps/weave` (package `@free-react-templates/weave`), 100%
      vitest coverage, per-app gate green (`scripts/verify-app.sh weave`)
- [ ] Section order 1:1 with the source: dark announcement strip + sticky
      white header (logo, nav, Get Free Quote) → split hero (headline +
      subtext + CTA left, workspace photo right) → feature cards (3 pastel
      cards: Unlimited Components / Awesome Support / Responsive Design) →
      About features (3 rows + photo) → brand logos band (`#041735` +
      pink "Meet Our Customers" + logo grid) → FAQ accordion ("Work fast,
      create beautifully." + collapsible items) → Pricing (`#F1F2F6` +
      Yearly/Monthly toggle + 2 white cards) → Testimonials (2 quote
      cards) → Project gallery (3 tiles + hover overlay) → CTA band
      (`#041735` + heading + button) → dark footer (brand / Quick Links /
      Support / Newsletter + copyright bar)
- [ ] Brand tokens in `@theme`: `#2845BA` (brand blue), `#041735` (dark
      navy), `#F0F3FF` / `#F0E9FF` / `#E9FFFD` (pastel cards), `#F1F2F6`
      (pricing band), `#4AA8C6` (tab accent), `#ff4495`/`#ff6d6d` (pink
      gradient CTA), `#ec583a` (hover sweep), `#5C6168` (input text),
      `#DBDEE9` (borders) — all via Tailwind classes
- [ ] Display font Cabin + body font Open Sans via Google Fonts `<link>`s
      in `index.html`; hero h1 ~60px, section h2 ~40px desktop
- [ ] Buttons: blue `.btn` rect (radius 0, padding ~22px 32px, coral hover
      sweep), pink-gradient `.btn_0` ("Meet Our Customers"), tab toggle
      (radius 4px, `#4AA8C6`), footer form submit (blue, icon)
- [ ] Placeholder images via `picsum.photos/seed/weave-<n>/<w>/<h>`
      (screen seeds: hero must be a workspace/desk photo; about, projects,
      testimonial avatars subject-appropriate), icons from lucide-react
      (brand icons as inline SVG), no copied assets
- [ ] Brand renamed "Olla"/"Colorlib" → "Weave" everywhere; copyright
      credit neutral; footer MUST link https://www.componentdock.com/;
      dead links (nav, Get Free Quote, Learn More, footer links) anchor
      harmlessly
- [ ] Accordion + pricing tabs implemented as accessible React state
      (aria-expanded, aria-controls, tab roles) — no Bootstrap/jQuery
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] jsdom 30: copy the MemoryStorage polyfill from
      apps/cura/src/test/setup.ts into the new app's setup if any
      localStorage use is introduced
- [ ] TEMPLATES.md bookkeeping at ship time: mark BOTH `- [ ]` rows
      (line 611 Bootstrap 5, line 1115 Business) `[x]` with the same surge
      URL + `npm run readme:status` (implementer)

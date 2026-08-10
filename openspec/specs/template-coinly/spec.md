# Template: Coinly (Finance)

## Purpose

Coinly is a single-page cryptocurrency/fintech landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Crypto Currency" website template
(source: https://colorlib.com/wp/template/crypto-currency/), built under a
DIFFERENT name (Coinly — a coin-themed brand, re-branded) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-10): the preview URL with the TEMPLATES.md slug
> `https://preview.colorlib.com/theme/crypto-currency/` returns HTTP 404, but
> the product map (`preview.colorlib.com/assets/js/products.js`) lists the
> demo slug as `cryptocurrency` (no hyphen), and
> `https://preview.colorlib.com/theme/cryptocurrency/` returns HTTP 200 —
> that is the live demo analyzed below (23 KB HTML + `css/style.css`,
> 29 KB). The live page was also loaded in a browser (accessibility
> snapshot + screenshot) to confirm the visual render. The TEMPLATES.md
> screenshot (`cryptocurrency-free-template.jpg`, 1200×946) was viewed in a
> browser and matches the live render (header, hero split, gradient
> polygon, laptop mockup).

The reference is a clean white crypto landing page: a header (logo + white
nav Solution / Features / News / About / Contact + outline pill "Sign Up
Free") over the hero's dark-indigo top-right graphic; a 900px split hero
("Invest in Bitcoin Bitcoin Trading" 70px headline — dark blue with a teal
span — over `#f3f7f9` with a laptop trading-dashboard mockup right and a
purple→teal gradient polygon + dotted world-map graphic behind it, plus a
pill email input and a gradient "Get Started" pill); a white "What is
Bitcoin" about split (48px dark-blue h2 + copy + gradient button, image
right); a gradient "Our Features" band with 6 icon feature cards (Mobile
Apps, Safe & Secure, Wallet, Experts Support, Instant Exchange, Recuring
Buys) each with an underlined Readmore link; a white "Get Started With
Bitcoin" 3-step process; a gradient fact band with 4 big teal numbers (60
Support Countries, 12K Transactions per hour, 5B Largest Transactions, 240
Years of Experience); a "Meet Our Team" 4-member grid (photos, names,
roles, 3 social circles each); a testimonial carousel ("Bitcoin is exciting
because it shows how cheap it can be...") with quote icon, author avatar +
name and prev/next arrows; a gradient "Subscribe to our Newsletter" band
(pill email input + gradient button); a "Latest News" 3-card blog grid
(thumb, teal post date, dark-blue title, by Admin / Likes / comments
meta); and a light footer (logo, blurb, Resources / Quick Links / Follow Us
columns with colored social circles, and a `#ebebeb`-bordered bottom bar
with copyright + legal links). Coinly recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets — seeded picsum photos, Google Fonts,
lucide-react icons).

## Design reference (replication findings)

- **Original:** ColorLib "Crypto Currency" — free Finance landing page
  template (page title "Cryptocurrency - Landing Page Template";
  TEMPLATES.md category **Finance (89)**; also listed as dup rows under
  **Bootstrap (216)** line 371 and other categories, lines 967 + 1748 —
  same source, one item). The recreation brands itself **Coinly** but keeps
  the same section structure, copy kinds and interaction patterns.
- **Live preview DOM analyzed (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/cryptocurrency/` (HTTP 200, 23 KB).
  Bootstrap-based single landing page (nav links are empty `href=""` —
  render the one-page layout only).
- **Visual design (TEMPLATES.md screenshot `cryptocurrency-free-template.jpg`,
  1200×946, viewed in browser 2026-08-10 + live render):** white/`#f3f7f9`
  page with dark blue `#20509e` + teal `#16d0c5` accents and an indigo
  `#3e2bce` → teal-green `#2dd3aa` gradient used for section bands and
  buttons. Hero: white area, headline "Invest in Bitcoin / Bitcoin
  Trading", right side = laptop trading-dashboard mockup over a large
  gradient polygon (purple top-left → teal bottom-right) with a faint
  dotted world map; header sits over the dark top of that graphic (white
  nav links + outline pill Sign Up Free). Clean, modern flat fintech
  aesthetic.
- **Section order (1:1, verified from live DOM):**
  1. `header.header-section` (absolute, top, z-index 99, padding
     30px 50px 0) — `.logo` image left (dark-blue "Crypto" wordmark with a
     stylized B logo — asset, do not copy → text logo "Coinly"); right
     `.main-menu` ul.menu-list — 5 links (white, Futura 16px, padding
     10px 5px, margin-right 30px): Solution, Features, News, About,
     Contact; then `.site-btn` "Sign Up Free" (outline pill: 2px solid
     `#7ad4cc`, white text, float right, margin-left 60px).
  2. `section.hero-section` (height 900px, padding-top 260px, bg `#f3f7f9`
     - `img/hero-bg.png` right-top cover graphic — gradient polygon +
       dotted world map; overflow hidden): `.hero-text` (padding-top 60px,
       left column) — h2 70px "Invest in Bitcoin **Bitcoin Trading**" (dark
       blue `#20509e`; a span inside is teal `#16d0c5` — live render shows
       "Bitcoin" accented teal), h4 22px `#75849a` "Use modern progressive
       technologies of Bitcoin to earn money"; email pill input
       (placeholder "Enter your email") + `.site-btn.sb-gradients` "Get
       Started" (gradient bg, white); right column `.laptop-image` (685px
       wide, left 80px) — laptop mockup of a trading dashboard.
  3. `section.about-section.spad` (padding-top 100px / bottom 90px): left
     `.about-text` — h2 48px "What is Bitcoin" (dark blue) + h5 "Bitcoin
     is an innovative payment network and a new kind of money." + 2 body
     paragraphs (Bitcoin copy) + `.site-btn.sb-gradients` "Get Started";
     right `.about-img` — `img/about-img.png` illustration.
  4. `section.features-section.spad.gradient-bg` (indigo→teal gradient
     band, white text): `.section-title` h2 "Our Features" (white) + 6
     `.feature` items (icon + h4 + `.readmore` underlined link): Mobile
     Apps (`ti-mobile`), Safe & Secure (`ti-shield`), Wallet (`ti-wallet`),
     Experts Support (`ti-headphone-alt`), Instant Exchange (`ti-reload`),
     Recuring Buys (`ti-panel`). Feature content padding-left 70px, h4
     margin-bottom 15px; readmore underlined.
  5. `section.process-section.spad` (white): `.section-title` h2 "Get
     Started With Bitcoin" + 3 `.process-item` steps, each `.process-icon`
     (numbered icon image `process-icons/1.png`..`3.png`) + `.process-step`
     h4. SOURCE QUIRK: all three steps repeat the title "Create Your
     Wallet" in the demo (ColorLib leftover) — implementer should use
     three DISTINCT step titles of the same kind (e.g. Create Your Wallet
     / Fund Your Wallet / Start Trading).
  6. `section.fact-section.gradient-bg` (gradient band, padding 100px 0):
     4 `.fact` stats — h2 60px teal `#16d0c5` numbers (60, 12K, 5B, 240)
     - white labels (Support Countries, Transactions per hour, Largest
       Transactions, Years of Experience).
  7. `section.team-section.spad` (white): `.section-title` h2 "Meet Our
     Team" + p "Our experts in the field of crypto currency can always
     help you with any of your questions!" + 4 `.member` cards (photo +
     name + role + 3 social icon circles; hover reveals gradient bg on
     socials): Aaron Ballance (Ceo Bitcoin), Jackson Nash (Marketing
     Director), Melissa Barth (Product Manager), Katy Abrams (Head of
     Design).
  8. `section.review-section.spad` (white): `.quote` icon image +
     testimonial carousel (owl-style, prev/next arrow controls): review
     text "“Bitcoin is exciting because it shows how cheap it can be.
     Bitcoin is better than currency in that you don't have to be
     physically in the same place and, of course, for large transactions,
     currency can get pretty inconvenient.”" + author avatar + author name
     (h4 "Jackson Nash").
  9. `section.newsletter-section.gradient-bg` (gradient band, padding
     50px 0): `.newsletter-text` h2 36px "Subscribe to our Newsletter" + p
     "Sign up for our weekly industry updates, insider perspectives and
     in-depth market analysis." + `.newsletter-form` (padding-left 40px)
     pill email input (placeholder "Enter your email", full width, 12px
     30px, radius 50px, borderless) + `.site-btn.sb-gradients.sbg-line`
     "Get Started".
  10. `section.blog-section.spad` (white): `.section-title` h2 "Latest
      News" + 3 `.blog-item` cards (thumb image `blog/1..3.jpg` + `.blog-text`:
      `.post-date` teal `#16d0c5` Futura 14px ("03 jan 2018", "28 dec
      2018", "28 aug 2018") + `.blog-title` h4 dark blue + `.post-meta`
      links "by Admin" / "234 Likes" / "08 comments" with heart +
      comment glyphs).
  11. `footer.footer-section` (light/white): top row — logo + lorem blurb
      - 3 `.footer-widget` columns: "Resources" (How to Buy Coin, Coin
        Overview, Blog News, How to Sell Coin, Purchase Theme), "Quick
        Links" (Network Stats, Block Explorers, Governance, Exchange
        Markets, Get Theme), "Follow Us" (4 `.social` 40px circles,
        border-radius 50%, brand-colored: facebook `#4b6cd0`, google
        `#f03b3b`, pinterest `#bb8950`, twitter `#49a7f3`). Bottom row
        `.footer-bottom` (border-top 1px solid `#ebebeb`, padding 30px 0):
        copyright line "© 2026 All rights reserved | This template is made
        with by Coinly" + links DPA / Terms of Use / Privacy Policy /
        support@company.com / (123) 456-7890.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-10):**
  - Dark blue: **`#20509e`** — h2/h4 headings, logo wordmark, blog titles,
    readmore link color (`#20509e`).
  - Teal/cyan: **`#16d0c5`** — hero h2 span accent, fact numbers, blog
    post-date text.
  - Gradient (indigo → teal-green): **`#3e2bce` → `#2dd3aa`**
    (`linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%)`) — applied to
    `.gradient-bg` (features / fact / newsletter section bands),
    `.site-btn.sb-gradients` (gradient buttons), `.member-social a:hover`,
    social hover states.
  - Light background: **`#f3f7f9`** — hero-section bg, page base.
  - Muted grey-blues: **`#75849a`** (hero h4, secondary text),
    **`#acb9cc`** (footer widget meta text).
  - Outline teal: **`#7ad4cc`** — `.site-btn` border (2px).
  - Border: **`#ebebeb`** — footer-bottom border-top.
  - Social circle colors: **`#4b6cd0`** (facebook), **`#f03b3b`** (google),
    **`#bb8950`** (pinterest), **`#49a7f3`** (twitter).
  - Fonts: **Futura** (`font-family: "Futura", sans-serif` — headings,
    nav, buttons, post dates, inputs) + **Lato** (`"Lato", sans-serif` —
    body copy). Futura is a commercial font NOT on Google Fonts — use
    **Jost** (Google Fonts geometric sans, the standard open Futura
    stand-in) for display + **Lato** for body.
  - Buttons (`.site-btn`): inline-block, padding 15px 30px, 16px weight
    500, line-height 16px, **border-radius 50px** (pill), min-width
    170px, text-align center, Futura, 2px solid `#7ad4cc` border, white
    text (outline variant). `.sb-gradients` variant: padding 17px 32px,
    border none, gradient bg, white text.
  - Inputs: pill (border-radius 50px), border none, padding 12px 30px,
    font-size 16px, full width.
  - Section rhythm: `.spad` = padding-top 100px / padding-bottom 90px;
    `.fact-section` padding 100px 0; `.newsletter-section` padding 50px 0.
  - Typography scale: h2 48px (Futura, dark blue `#20509e`); h4 24px;
    hero h2 70px; hero h4 22px `#75849a`; fact h2 60px teal;
    newsletter h2 36px; widget titles 20px.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); testimonial carousel = a small stateful
  slider (useState index, prev/next round arrows, auto-advance optional —
  no owl.carousel dependency); themify icons → lucide equivalents
  (Smartphone, ShieldCheck, Wallet, Headphones, RefreshCw, Repeat);
  FontAwesome social/heart/comment glyphs → inline SVG brand icons
  (lucide-react has NO brand icons) + lucide Heart / MessageCircle;
  photos → seeded picsum placeholders
  (`picsum.photos/seed/coinly-<n>/<w>/<h>` — source images must not be
  copied); Google Fonts Jost + Lato via `<link>` in `index.html`;
  brand "Crypto"/"Crypto Currency" → "Coinly" (logo becomes a styled text
  logo — source logo.png is an asset that must not be copied); document
  title "Coinly — Crypto & Finance Template"; nav links Solution /
  Features / News / About / Contact may point to `#` anchors or the
  single page (demo has empty hrefs — render the one-page layout only);
  the process-step title repetition ("Create Your Wallet" ×3 in the demo)
  should become three distinct step titles of the same kind.

Coinly lives in `apps/coinly` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render an absolutely-positioned header over the hero with
a logo, the main navigation, and an outline Sign Up Free button.

#### Scenario: Header layout

- **GIVEN** the Coinly page is rendered
- **WHEN** the page loads
- **THEN** a header SHALL be shown at the top overlaying the hero
- **AND** the logo SHALL be shown on the left (dark blue "Coinly" text
  logo)
- **AND** the nav SHALL show links Solution, Features, News, About,
  Contact in white Futura 16px
- **AND** a pill "Sign Up Free" button (2px solid `#7ad4cc` outline,
  white text) SHALL be shown at the right of the header

### Requirement: Hero section

The system SHALL render a 900px-tall split hero with headline, sub-copy,
email capture, CTA button, and a laptop mockup on the right.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **THEN** the background SHALL be light `#f3f7f9` with a gradient
  polygon graphic (indigo `#3e2bce` → teal `#2dd3aa` with a dotted map
  pattern) on the top-right
- **AND** a 70px h2 SHALL read "Invest in Bitcoin Bitcoin Trading" in
  dark blue `#20509e` with one word accented in teal `#16d0c5`
- **AND** a 22px `#75849a` sub-heading SHALL read "Use modern progressive
  technologies of Bitcoin to earn money"
- **AND** a pill email input (placeholder "Enter your email") SHALL be
  shown next to a gradient pill "Get Started" button (white text)
- **AND** a laptop mockup image (trading dashboard) SHALL be shown on the
  right, ~685px wide

### Requirement: About section

The system SHALL render a two-column "What is Bitcoin" section with text
and a CTA on the left and an illustration on the right.

#### Scenario: About split

- **GIVEN** the about section is rendered
- **THEN** the left column SHALL show a 48px dark blue h2 "What is
  Bitcoin"
- **AND** a h5 summary "Bitcoin is an innovative payment network and a new
  kind of money." SHALL be shown
- **AND** two paragraphs of body copy SHALL be shown
- **AND** a gradient pill "Get Started" button SHALL be shown
- **AND** the right column SHALL show an illustration image

### Requirement: Features band

The system SHALL render a gradient "Our Features" band with six icon
feature cards.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **THEN** a gradient band (indigo `#3e2bce` → teal `#2dd3aa`) SHALL be
  shown with white text
- **AND** the section title "Our Features" SHALL be shown
- **AND** six feature cards SHALL be shown in a responsive grid (3-up
  desktop, stacking on mobile), each with a white icon, an h4 title, and
  an underlined "Readmore" link: Mobile Apps, Safe & Secure, Wallet,
  Experts Support, Instant Exchange, Recuring Buys

### Requirement: Process steps

The system SHALL render a "Get Started With Bitcoin" section with three
numbered process steps.

#### Scenario: Process steps

- **GIVEN** the process section is rendered
- **THEN** the section title "Get Started With Bitcoin" SHALL be shown
- **AND** three process steps SHALL be shown in a row (stacking on
  mobile), each with a numbered icon and an h4 step title
- **AND** the three step titles SHALL be distinct (e.g. Create Your
  Wallet / Fund Your Wallet / Start Trading — the source demo repeats
  "Create Your Wallet" three times, a ColorLib leftover to fix)

### Requirement: Fact band

The system SHALL render a gradient stats band with four large teal
numbers.

#### Scenario: Facts

- **GIVEN** the fact section is rendered
- **THEN** a gradient band SHALL be shown with four stats
- **AND** each stat SHALL show a 60px teal `#16d0c5` number and a white
  label: 60 Support Countries, 12K Transactions per hour, 5B Largest
  Transactions, 240 Years of Experience

### Requirement: Team section

The system SHALL render a "Meet Our Team" section with four member cards.

#### Scenario: Team grid

- **GIVEN** the team section is rendered
- **THEN** the section title "Meet Our Team" SHALL be shown with the
  supporting paragraph "Our experts in the field of crypto currency can
  always help you with any of your questions!"
- **AND** four member cards SHALL be shown (4-up desktop, 2-up tablet,
  stacked mobile), each with a photo, name, role, and three social icon
  circles: Aaron Ballance (Ceo Bitcoin), Jackson Nash (Marketing
  Director), Melissa Barth (Product Manager), Katy Abrams (Head of
  Design)
- **AND** hovering a social icon SHALL reveal the indigo→teal gradient
  background

### Requirement: Testimonial carousel

The system SHALL render a testimonial section with a quote icon, review
text, author info, and prev/next controls.

#### Scenario: Review slider

- **GIVEN** the review section is rendered
- **THEN** a quote icon SHALL be shown
- **AND** the review text SHALL read "Bitcoin is exciting because it
  shows how cheap it can be. Bitcoin is better than currency in that you
  don't have to be physically in the same place and, of course, for large
  transactions, currency can get pretty inconvenient."
- **AND** the author avatar and author name (h4) SHALL be shown
- **AND** prev/next arrow controls SHALL cycle through the testimonials

### Requirement: Newsletter band

The system SHALL render a gradient newsletter band with a headline, copy,
pill email input, and a gradient Get Started button.

#### Scenario: Newsletter

- **GIVEN** the newsletter section is rendered
- **THEN** a gradient band SHALL be shown with the 36px headline
  "Subscribe to our Newsletter"
- **AND** the copy "Sign up for our weekly industry updates, insider
  perspectives and in-depth market analysis." SHALL be shown
- **AND** a full-width pill email input (placeholder "Enter your email")
  SHALL be shown with a gradient pill "Get Started" button

### Requirement: Blog section

The system SHALL render a "Latest News" section with three blog cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **THEN** the section title "Latest News" SHALL be shown
- **AND** three blog cards SHALL be shown in a row (stacking on mobile),
  each with a thumbnail image, a teal `#16d0c5` post date (e.g. "03 jan
  2018"), a dark blue `#20509e` title, and a meta row with "by Admin",
  "234 Likes", and "08 comments" links

### Requirement: Footer

The system SHALL render a light footer with brand blurb, three link
columns, social circles, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **THEN** the logo and a short blurb paragraph SHALL be shown
- **AND** three widget columns SHALL be shown: Resources (How to Buy
  Coin, Coin Overview, Blog News, How to Sell Coin, Purchase Theme),
  Quick Links (Network Stats, Block Explorers, Governance, Exchange
  Markets, Get Theme), and Follow Us (4 colored 40px social circles:
  facebook `#4b6cd0`, google `#f03b3b`, pinterest `#bb8950`, twitter
  `#49a7f3`)
- **AND** a bottom bar with a `#ebebeb` top border SHALL show the
  copyright line "© 2026 All rights reserved | This template is made with
  by Coinly"
- **AND** the bottom bar SHALL also show links DPA, Terms of Use, Privacy
  Policy, support@company.com, and (123) 456-7890

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-coinly`
- [ ] `scripts/verify-app.sh coinly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: header → hero (900px split) → about → features
      (6 cards) → process (3 steps) → fact band (4 stats) → team (4
      members) → review carousel → newsletter band → blog (3 cards) →
      footer
- [ ] Brand colors in `@theme`: dark blue `#20509e`, teal `#16d0c5`,
      indigo `#3e2bce`, teal-green `#2dd3aa`, light `#f3f7f9`, muted
      `#75849a` / `#acb9cc`, outline `#7ad4cc`; used via Tailwind classes
- [ ] Gradient `linear-gradient(to right, #3e2bce, #2dd3aa)` for the
      features / fact / newsletter bands and the Get Started gradient
      buttons
- [ ] Jost (Futura stand-in) + Lato via Google Fonts `<link>` in
      `index.html`; document title "Coinly — Crypto & Finance Template"
- [ ] Pill buttons (radius 50px, min-width 170px): outline variant
      (2px `#7ad4cc` border, white text, padding 15px 30px) for Sign Up
      Free; gradient variant (borderless, padding 17px 32px) for Get
      Started buttons
- [ ] Header absolute over hero: "Coinly" text logo left; white nav
      Solution / Features / News / About / Contact; outline Sign Up Free
      pill right
- [ ] Hero: 900px, `#f3f7f9` bg + gradient polygon graphic top-right; 70px
      h2 (dark blue + teal span); 22px `#75849a` sub-heading; pill email
      input + gradient Get Started; laptop mockup right (~685px)
- [ ] About: 48px dark-blue h2 "What is Bitcoin" + h5 + 2 paragraphs +
      gradient button left; illustration right
- [ ] Features: gradient band, white "Our Features" title, 6 cards
      (lucide icon + h4 + underlined Readmore): Mobile Apps, Safe &
      Secure, Wallet, Experts Support, Instant Exchange, Recuring Buys
- [ ] Process: 3 steps with numbered icons and DISTINCT titles (source
      repeats "Create Your Wallet" ×3 — fix in recreation)
- [ ] Facts: gradient band, 60px teal numbers + white labels (60 / 12K /
      5B / 240)
- [ ] Team: 4 member cards (photo, name, role, 3 social circles with
      gradient hover) — Aaron Ballance, Jackson Nash, Melissa Barth,
      Katy Abrams
- [ ] Review: quote icon + testimonial slider with prev/next arrows,
      author avatar + name
- [ ] Newsletter: gradient band, 36px headline + copy + pill input +
      gradient Get Started
- [ ] Blog: 3 cards (thumb, teal post date, dark-blue title, meta:
      by Admin / Likes / comments)
- [ ] Footer: light; blurb + Resources / Quick Links / Follow Us columns
      (40px colored social circles `#4b6cd0`/`#f03b3b`/`#bb8950`/
      `#49a7f3`); bottom bar `#ebebeb` border-top + copyright + legal
      links
- [ ] Placeholder images via `picsum.photos/seed/coinly-<n>/<w>/<h>`,
      icons from lucide-react (themes/feature icons + Heart/MessageCircle)
      and inline SVG brand icons for socials — no copied assets; brand
      "Coinly"
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` on ALL three dup rows (lines 371, 967, 1748) + surge URL + `npm run readme:status` done by implementer at
      ship time

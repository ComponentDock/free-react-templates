# Template: Ascendly (Business Consulting Landing)

## Purpose

Ascendly is a single-page business/consulting landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Arcwork" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, professional business-growth page with an indigo
(`#3b4eda`) accent on cream (`#fff6da`) split backgrounds: a split hero with a
typed headline ("Grow Up Your Business."), three cream feature cards
(Financial Analysis / Marketing Plans / Optimize Solutions), an "Our
Solutions" image carousel on a left-half cream band, a two-slide testimonial,
a bordered blog row, a cream "Let's work together" CTA band, and a white
four-part footer. Ascendly recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Arcwork" — free business website template
  (source: https://colorlib.com/wp/template/arcwork/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/arcwork/`
  (HTTP 200, ~32KB) + stylesheet `css/style.css` (24KB, loaded after
  bootstrap + owl.carousel + aos + flaticon). The rendered DOM below is the
  reference; the TEMPLATES.md screenshot (`arcwork-free-template.jpg`) and a
  live browser check confirm the visual design (split white/cream hero, cream
  feature cards, royal-blue accents, Roboto sans typography, typed-word
  headline effect).
- **Section order (1:1):**
  1. Header (`site-navbar site-navbar-target`): logo "Arcwork" (uppercase,
     black → `#3b4eda` when sticky) + nav links Home / About / Services /
     Blog / Contact. Mobile burger menu (icon-menu) + slide-in panel.
  2. Hero (`site-section-cover half-bg`, id `home-section`): split
     background — right 50% painted `#fff6da` via `:before`, left white;
     centered column (col-lg-8): h1 "Grow Up Your **Business**." (typed-words
     span cycles words e.g. Business/Startups/Organization with a blinking
     cursor; h1 = 4rem / 2rem mobile, weight 900, brand-blue) + "View Our
     Services" CTA link.
  3. Features (`site-section` > row of 3 `feature-92912` cards, middle card
     has `.active`): "Financial Analysis" / "Marketing Plans" / "Optimize
     Solutions" — giant faint indigo icon (flaticon-debt / flaticon-growth /
     flaticon-business-plan, `rgba(59,78,218,0.2)` at 7rem, absolute left),
     h2 heading in `#3b4eda` (18px), lorem blurb, "View Our Services" link.
     Card default: bg `#fff6da`, padding 40px; `.active`/hover: border 2px
     solid `#3b4eda`, bg transparent, icon slides right.
  4. Our Solutions (`site-section bg-left-half` + owl carousel
     `block-13`): left 50% cream band (`:before` `#fff6da`, z-index -1); h2
     "Our Solutions"; carousel of 6 `media-29101` cards (3 unique images
     img_1/2/3.jpg repeated): image + h3 link (18px, weight 900) + 2px
     `#3b4eda` underline-on-hover. Dots: active = `#3b4eda`.
  5. Testimonial (`site-section` + owl carousel `slide-one-item`): h2
     "Testimonial"; 2 slides of `testimony-29101` — image (40% width, cover)
     - quote text + author "— Craig Stephen". Dots: active = `#3b4eda`.
  6. Blog (`site-section`): h2 "Blog" + "View All" link (float right); 3
     `post-entry-1` cards — image, h2 title "Lorem ipsum dolor sit amet",
     "July 17, 2019 by Admin", excerpt. Cards: border 2px solid `#3b4eda`,
     bg white, contents padding 20px.
  7. CTA band (`site-section bg-tertiary` = `#fff6da`): centered h2 "Let's
     work together to make your business growth dramatically." + "View Our
     Services" CTA link.
  8. Footer (`footer site-section`, white): logo "ArcWork" (uppercase 2rem
     weight 900) + row of 3 link columns — "Contact Us" (Contact Us /
     hello@mydomain.com / +1 829 2293 382 / Support) and TWO identical
     columns (Home / Blog / Services / About Us — keep the duplication).
     Below: centered row of 5 social icons (facebook, twitter, linkedin,
     instagram, skype — icomoon font in the original; use inline SVG brand
     icons) + copyright bar ("© <year> All rights reserved | This template
     is made with ♥ by Colorlib" → reword for Ascendly, keep attribution).
- **Design tokens extracted from `css/style.css` + live render:**
  - Brand color: **#3b4eda** (indigo/royal blue — headlines, logo, link
    hovers, active borders, carousel dots, underline bars).
  - Secondary: **#fff6da** (cream — hero right half, feature-card bg,
    `bg-left-half` band, `bg-tertiary` CTA band, testimonial box).
  - Neutrals: `#fff` page bg; `#f8f9fa`/`#f7f7f7` light section tints;
    `#6c7b95` muted blue-gray; dark text `#212529`/`#000`.
  - Font: **Roboto** (sans-serif) everywhere; headings weight 900 (h1 4rem,
    h2 via `.heading` 18px, media h3 18px weight 900). Google Fonts via
    `<link>` in index.html (400/500/700/900).
  - CTA link style (`.more-29291`): uppercase, 14px, weight 900, padding-
    bottom 7px, with a 2px solid `#3b4eda` bar under the full text width —
    this is the signature "View Our Services" treatment in hero, features
    and CTA band.
  - Buttons (base `.btn`): border-radius **30px** (pill), padding 10px 20px
    (used for any pill-style actions).
  - Feature card: bg `#fff6da`, padding 40px, border 2px transparent;
    `.active`/hover → border `#3b4eda`, bg transparent; icon
    `rgba(59,78,218,0.2)`, 7rem, absolute left of card, slides on hover.
  - Blog card: border 2px solid `#3b4eda`, bg `#fff`, contents padding 20px.
  - Sections: `.site-section` padding 7rem 0 (112px vertical rhythm).
  - Hero h1 4rem → 2rem below 992px; centered content over the split bg.
- **Recreation decisions:** repo-standard Navbar (site name "Ascendly", Home
  link, dark-mode toggle) + Footer chrome; hero = split white/cream section
  (cream band on the right half via an absolutely-positioned div), centered
  h1 "Grow Up Your Business." with a light word-cycling effect + "View Our
  Services" CTA (uppercase link with 2px indigo underline bar); 3 feature
  cards with big faint lucide icons (BarChart3 / TrendingUp / Briefcase or
  similar) and middle card active; Our Solutions carousel → a simple 6-card
  grid/scroll row with 3 seeded picsum images; testimonial = image + quote +
  author; blog = 3 bordered cards with picsum images; CTA band on `#fff6da`;
  footer = logo + Contact Us column + 2 duplicate link columns + 5 inline
  SVG brand icons + copyright. All images picsum-seeded
  (`picsum.photos/seed/ascendly-N/w/h`); Google Fonts Roboto via `<link>`.
- **TEMPLATES.md rows to mark at ship:** lines **341, 893, 2495** (THREE
  `Arcwork` duplicates — Bootstrap, Business and Portfolio categories; mark
  ALL of them).

Ascendly lives in `apps/ascendly` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Ascendly",
a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Ascendly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ascendly" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a split-background hero with a level-1 headline, a
call-to-action link, and a cream band covering the right half of the section.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Grow Up Your Business.")
- **AND** it SHALL show a "View Our Services" call-to-action link
- **AND** the right half of the hero SHALL have the cream background (`#fff6da`) while the left half stays white

#### Scenario: Typed headline effect

- **GIVEN** the hero headline is displayed
- **WHEN** the page loads
- **THEN** the headline word after "Grow Up Your" SHALL cycle through a word set (e.g. "Business", "Startups", "Organization")

### Requirement: Feature cards

The system SHALL render three feature cards (Financial Analysis, Marketing
Plans, Optimize Solutions), each with a large icon, a heading, a blurb, and
a link, with the middle card in the active state.

#### Scenario: Feature card content

- **GIVEN** the page is rendered
- **WHEN** the feature section is displayed
- **THEN** it SHALL render three cards titled "Financial Analysis", "Marketing Plans", and "Optimize Solutions"
- **AND** each card SHALL show an icon, a short blurb, and a "View Our Services" link

#### Scenario: Active feature card

- **GIVEN** the feature section is rendered
- **WHEN** the section is displayed
- **THEN** the middle card SHALL have the active treatment (2px indigo border on a white background) while the outer cards keep the cream background

### Requirement: Solutions carousel

The system SHALL render an "Our Solutions" section with a heading on a
left-half cream band and a row of image cards with titles.

#### Scenario: Solutions content

- **GIVEN** the page is rendered
- **WHEN** the solutions section is displayed
- **THEN** it SHALL show the heading "Our Solutions" on the cream left-half band
- **AND** it SHALL render at least six solution cards, each with an image and a title link (e.g. "Consectetur Adipisicing Elit", "Beatae Doloribu", "Accusantium Eius Soluta")

### Requirement: Testimonial

The system SHALL render a "Testimonial" section with at least one slide
showing a portrait image, a quote, and an author name.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show the heading "Testimonial"
- **AND** it SHALL show a quote with an author attribution (e.g. "— Craig Stephen") and a portrait image

### Requirement: Blog section

The system SHALL render a "Blog" section with a "View All" link and three
bordered post cards showing an image, a title, a date/author line, and an
excerpt.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Blog" and a "View All" link
- **AND** it SHALL render three post cards, each with an image, a title, a "July 17, 2019 by Admin" line, and an excerpt
- **AND** each post card SHALL have a 2px indigo border

### Requirement: CTA band

The system SHALL render a cream call-to-action band with a headline and a
"View Our Services" link.

#### Scenario: CTA band content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the headline "Let's work together to make your business growth dramatically."
- **AND** it SHALL show a "View Our Services" call-to-action link
- **AND** the band SHALL have the cream background (`#fff6da`)

### Requirement: Footer

The system SHALL render a footer with the site logo, a Contact Us column,
two link columns, social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Ascendly" (uppercase logo)
- **AND** it SHALL show a "Contact Us" column (e.g. "Contact Us", "hello@mydomain.com", "+1 829 2293 382", "Support")
- **AND** it SHALL show two link columns (Home, Blog, Services, About Us)
- **AND** it SHALL show social icons (Facebook, X, LinkedIn, Instagram, and one more)
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Ascendly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Ascendly — Business Template"

## Verification checklist

- [ ] `npm run verify:app ascendly` passes (typecheck + lint + 100% coverage + build)
- [ ] TEMPLATES.md rows 341, 893, 2495 marked `[x]` with surge URL at ship
- [ ] `npm run readme:status` regenerated after merge

# Template: Slate (Business Template)

## Purpose

Slate is a single-page business website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Wordpress
Business Themes" entry in TEMPLATES.md (Business Template category), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The reference entry is a ROUNDUP/listicle page ("19 Free WordPress Themes for
Business 2026"), not a single free template — all 19 picks are third-party
themes (Shapely, Illdy, Pixova Lite, Activello, Sparkling, Astra Business,
Hello Elementor, Kadence, Neve, Travelify, Dazzling, Smallbiz Startup,
Agencyup, BusinessFocus, Rynobiz, Businessbiz, Customizr, Vantage, Pet
Business). Its TEMPLATES.md screenshot (`wordpress-business-themes1.jpg`,
1100×739, AVIF) shows a full-bleed SPLIT HERO with a solid **slate blue-grey**
background, a bold white "Business Themes" headline with a lighter white
question sub-line ("Fed up with puzzling frameworks?"), a professional
portrait on the right, a thin lowercase wordmark in the bottom-left corner and
a hamburger trigger in the bottom-right corner — no top navbar and no CTA in
the capture. Slate recreates that hero section-for-section with matching
colors, typography, and content types (no ColorLib assets copied), and
reconstructs the below-the-fold business-landing sections per the category
conventions.

Slate appears FOUR times in TEMPLATES.md (all rows are the same source slug):
line 535, line 1232, line 1497, and line 2101 — implement ONE app and mark
ALL FOUR rows `[x]` at bookkeeping.

## Design reference (replication findings)

- **Original:** ColorLib "Wordpress Business Themes" — a business-themes
  ROUNDUP/listicle page, not a single free template
  (source: https://colorlib.com/wp/template/wordpress-business-themes/; the
  article is "19 Free WordPress Themes for Business 2026"; every demo link on
  the page is a third-party link — there is no ColorLib-hosted free template
  behind this slug).
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/wordpress-business-themes/`
  returned HTTP 404, and the slug is absent from
  `preview.colorlib.com/assets/js/products.js`. Per `docs/replication.md`,
  the design is reconstructed from the TEMPLATES.md screenshot
  (`wordpress-business-themes1.jpg`, 1100×739, AVIF — converted to PNG,
  viewed in the browser, and pixel-sampled for exact tokens) as the sole
  visual reference.
- **NOTE — the capture is a promo/hero frame, not a full page:** the
  screenshot shows ONLY the hero section of the roundup's promo visual (the
  "corpus" wordmark + "Business Themes" / "Fed up with puzzling frameworks?"
  copy is the article's own promo branding). Per the fidelity rules we do NOT
  copy that brand name or any assets — we recreate the VISUAL DESIGN shown in
  the capture (slate split hero, bottom-corner navigation anchors, white bold
  display type) under the new name "Slate". The below-the-fold sections are
  NOT visible in the capture and are reconstructed per the business-landing
  category conventions (features, about, stats, testimonials, contact,
  footer), reusing the same palette.
- **Visual design (from screenshot):**
  - Full-bleed split hero, NO letterboxing (pixel rows 0–40 across the full
    width are uniform slate — the capture is not a video frame).
  - Background: solid muted slate blue-grey ≈ `#6A6F82` (pixel-sampled
    `(106,111,130)` dominant across the whole canvas; edges `(105,110,129)`
    — effectively flat).
  - Left ~40% of the canvas: the text block, left-aligned, vertically placed
    around the lower-middle. Headline "Business Themes" — bold heavy white
    sans-serif, large display size; below it the sub-line "Fed up with
    puzzling frameworks?" — regular/light white sans-serif, notably thinner
    and smaller than the headline.
  - Right ~60% of the canvas: professional portrait of a man (reddish beard,
    black-rimmed glasses, navy-blue knit beanie, navy-blue blazer, white
    t-shirt) cropped chest-up, looking at the camera, right hand raised in an
    "OK" gesture (thumb + index touching, other fingers extended). Navy
    blazer tones pixel-sampled ≈ `#14263D`–`#293A4E` (e.g. `(20,36,60)`,
    `(27,46,76)`, `(41,65,93)`); skin tones warm `(169,124,131)`-ish region.
  - Bottom-left corner: thin/light lowercase rounded sans wordmark in white
    (reads "corpus" at 4× zoom — capture branding, replaced by "Slate").
  - Bottom-right corner: hamburger menu icon — three short horizontal white
    lines — the ONLY nav affordance in the capture (no top navbar, no desktop
    link row, no CTA button).
- **Design tokens (screenshot-sampled, no stylesheet exists):**
  - Primary/section background: slate blue-grey `#6A6F82` (the hero ground;
    reused for the footer and any dark bands).
  - Text on slate: pure white `#FFFFFF` (headline, sub-line, wordmark,
    hamburger lines).
  - Light surfaces (reconstructed sections): white `#FFFFFF`; soft gray
    `#F4F5F7` for alternating bands.
  - Accent (reconstructed sections): keep the slate as the brand accent on
    light backgrounds — buttons `#6A6F82` fill + white text, hover darkens to
    `#5A6270`. Optional navy `#14263D` for deep-footer text/bands.
  - Headline: bold geometric sans (Montserrat/Open Sans-like) — load one via
    Google Fonts `<link>` (Montserrat 300/400/700 recommended); sub-line
    weight 300–400.
  - Hamburger trigger: three ~22px white lines (visible at all widths — the
    reference shows no desktop link row, do NOT add one; see Requirements).
  - Radius: none visible in the capture; use repo-standard `rounded-lg`
    (~8px) for reconstructed buttons/cards.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/slate-<n>/<w>/<h>`; the hero portrait uses a
  professional-portrait-style seed — the exact subject of the reference is not
  reproduced, only the portrait composition); icons → lucide-react (menu,
  check, briefcase, trending-up, users, star, quote, mail, phone, map-pin);
  Montserrat via Google Fonts `<link>`; no assets copied. Copy paraphrased but
  same content kinds (headline + question sub-line, feature names, stat
  labels, testimonial quotes, contact info).

Slate lives in `apps/slate` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Hero

The system SHALL render the slate split hero exactly as captured: solid slate
background, left text block, right portrait, bottom-corner nav anchors.

#### Scenario: Hero content

- **GIVEN** the Slate page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL have a solid slate blue-grey background (`#6A6F82`)
- **AND** the hero SHALL show a left-aligned bold white headline in the left
  ~40% of the viewport (paraphrase of "Business Themes", e.g. "Business
  Websites, Simplified")
- **AND** the hero SHALL show a thinner white question sub-line directly
  below the headline (paraphrase of "Fed up with puzzling frameworks?", e.g.
  "Tired of puzzling frameworks?")
- **AND** the hero SHALL show a professional portrait image in the right ~60%
  of the viewport, cropped chest-up
- **AND** the hero SHALL show the brand wordmark "Slate" in a thin lowercase
  white sans at the bottom-left corner
- **AND** the hero SHALL show a hamburger menu icon (three white lines) at
  the bottom-right corner

#### Scenario: No top navbar or CTA

- **GIVEN** the Slate page is rendered
- **WHEN** the hero is displayed at any viewport width
- **THEN** there SHALL be no top navigation bar in the hero
- **AND** there SHALL be no call-to-action button in the hero
- **AND** the hamburger trigger SHALL be the only navigation control in the
  hero

### Requirement: Mobile menu

The system SHALL open a full-screen overlay menu when the hero hamburger is
activated.

#### Scenario: Menu opens and closes

- **GIVEN** the Slate page is rendered
- **WHEN** the hamburger icon is clicked
- **THEN** a full-screen overlay menu SHALL open, covering the viewport
- **AND** the menu SHALL list links Home, Features, About, Testimonials, and
  Contact
- **AND** the menu SHALL show a close (X) control
- **AND** clicking a menu link SHALL scroll to the corresponding section and
  close the menu
- **AND** the menu SHALL have `aria-expanded` state and an `aria-label` on
  the toggle

### Requirement: Features

The system SHALL render a features section on a light background (reconstructed
below the fold per business-landing conventions).

#### Scenario: Feature cards

- **GIVEN** the Slate page is rendered
- **WHEN** the features section is displayed
- **THEN** the section SHALL have a white background with a short section
  heading and sub-line
- **AND** the section SHALL show six feature cards in a 3-column grid (2 on
  tablet, 1 on mobile)
- **AND** each card SHALL show an icon, a title (e.g. Reliable
  Infrastructure, Lightning Performance, Modern Design), and a short
  description
- **AND** each card SHALL use the shared `Card` component with slate icon
  accents

### Requirement: About / stats band

The system SHALL render a dark slate band with company stats (reconstructed).

#### Scenario: Stats band

- **GIVEN** the Slate page is rendered
- **WHEN** the stats section is displayed
- **THEN** the section SHALL have the slate `#6A6F82` background with white
  text
- **AND** the section SHALL show four stats with large bold white numbers and
  lighter white labels (e.g. Projects Completed, Happy Clients, Team
  Members, Years of Experience)

### Requirement: Testimonials

The system SHALL render a testimonials section (reconstructed).

#### Scenario: Testimonial cards

- **GIVEN** the Slate page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL show a heading and three testimonial cards on a
  light gray (`#F4F5F7`) background
- **AND** each card SHALL show a quote, a client name, and a role

### Requirement: Contact

The system SHALL render a contact section (reconstructed).

#### Scenario: Contact content

- **GIVEN** the Slate page is rendered
- **WHEN** the contact section is displayed
- **THEN** the section SHALL show a heading and contact details (email,
  phone, address) with icons
- **AND** the section SHALL show a contact form with Name, Email, and Message
  fields and a slate "Send Message" submit button
- **AND** the form SHALL validate required fields and show per-field errors
  before submit

### Requirement: Footer

The system SHALL render the footer (reconstructed, repo standard).

#### Scenario: Footer content

- **GIVEN** the Slate page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a slate `#6A6F82` background with white text
- **AND** the footer SHALL show the brand, a short blurb, and link columns
- **AND** the footer SHALL show a copyright bar with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `scripts/verify-app.sh slate` passes (typecheck + lint + 100% coverage
      tests + build)
- [ ] All spec scenarios implemented (`openspec/specs/template-slate/spec.md`)
- [ ] Visual pass vs the TEMPLATES.md screenshot
      (`wordpress-business-themes1.jpg`) — split hero, slate `#6A6F82`,
      bottom-corner wordmark + hamburger, no top navbar
- [ ] TEMPLATES.md lines 535, 1232, 1497, AND 2101 all marked `[x]`
- [ ] `public/CNAME` = `slate.free.componentdock.com`; `homepage` =
      `https://slate.free.componentdock.com`

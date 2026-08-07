# Template: Nuptia (Wedding)

## Purpose

Nuptia is a single-page wedding website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Wordpress
Wedding Themes" entry in TEMPLATES.md (Beauty category; also duplicated in the
Wedding category), built under a different name with the monorepo stack: Vite
+ React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wordpress Wedding Themes" — a wedding-themed
  WordPress roundup/collection page, not a single free template
  (source: https://colorlib.com/wp/template/wordpress-wedding-themes/).
  All demo links on that page are ThemeForest affiliate links to third-party
  wedding themes; there is no ColorLib-hosted free template behind it.
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/wordpress-wedding-themes/`
  returned HTTP 404. Per `docs/replication.md`, the design is reconstructed
  from the TEMPLATES.md screenshot (`wedding-wordpress-themes.jpg`, 1200×892)
  as the sole visual reference.
- **WARNING — do NOT confuse with the separate "Wedding" entry:**
  `https://preview.colorlib.com/theme/wedding/` (HTTP 200) is the CodePixar
  "Wedding" free template ("James & Julie are Getting Married", purple→teal
  gradient accents, Poppins). That preview belongs to the *separate* "Wedding"
  TEMPLATES.md entry (line ~3103, screenshot
  `wedding-free-wedding-website-template.jpg`) and MUST NOT be used as the
  reference for this template. This template's screenshot shows a different
  (PixFlow-style) design.
- **Visual design (from screenshot):** full-viewport hero photograph — a
  bride (cream lace dress, blue heels) and groom (grey suit, pink peony
  bouquet) walking down stone steps while confetti falls (pink, blue, gold,
  purple specks), guests' backs visible at the bottom edge. Centered white
  overlay text: a large high-contrast serif headline (Playfair-Display-like,
  the template title) with a smaller cursive/script sub-line ("Getting
  married!") beneath it. Top-left: small white sans-serif nav links — "Our
  story", "Photos", "When & Where", "Events". Top-right: circular monogram
  logo mark. Aesthetic: modern-romantic, editorial documentary photography,
  cool airy tones; photo-driven with white text and almost no UI chrome in
  the hero (no hero CTA button in the reference).
- **Structure (1:1, section order — derived from the nav anchors + standard
  wedding-page flow):**
  1. Navbar: transparent over the hero, circular monogram logo, links Our
     Story / Photos / When & Where / Events (white, small sans), hamburger →
     slide-down mobile menu; repo-standard dark-mode toggle.
  2. Hero: full-viewport background photo (couple + confetti) with a soft
     overlay for readability — large serif h1 (couple names, e.g. "Sophie &
     Daniel are Getting Married") + script sub-line ("Getting married!").
     No CTA button (matches the reference).
  3. Our Story: centered serif heading + split photo/text block telling the
     couple's story (two halves: her story / his story with a photo each).
  4. Photos: centered "Our Photos" heading + gallery grid/carousel of ≥6
     wedding photos (each with alt text).
  5. When & Where: centered heading + two info cards — "Main Ceremony" and
     "Reception" — each with date, time and venue address.
  6. Events: centered heading + ≥3 event entries (time + title + blurb),
     e.g. Welcome Dinner, Main Ceremony, After Party.
  7. Footer: centered footer menu links (Our Story / Photos / When & Where /
     Events), circular social icons (Facebook, Twitter/X, Instagram,
     Dribbble), bottom bar with copyright line.
- **Design tokens (screenshot-derived; no stylesheet available):**
  - Fonts: serif display headings — **Playfair Display** (weights 700/900);
    script accent — **Great Vibes** (the cursive sub-line); body/nav —
    **Poppins** (light weights for elegance). All via Google Fonts `<link>`.
  - Colors: photo-driven. Hero text **white** `#fff`; light section
    backgrounds `#fafafa` / `#f8f6f3`; muted text `#777777`; dark text
    `#222222`. Accent palette drawn from the confetti in the reference
    photo: rose **`#e66686`** (suggested primary), periwinkle **`#8e96f8`**,
    gold **`#d4a95c`**, lavender **`#ca2fff`**. Put the primary in `@theme`.
  - Buttons: pill shape (rounded-full), white text, primary rose bg, hover
    darkened.
  - Cards: white bg, subtle border, rounded corners, generous padding.
  - Section rhythm: generous vertical padding (`py-16`/`py-20`), alternating
    white / light-gray section backgrounds.
- **Recreation decisions:** same kind of wedding landing page — hero photo
  with `https://picsum.photos/seed/nuptia-<n>/<w>/<h>` placeholders (hero,
  story pair, 6+ gallery, ceremony/reception cards), lucide-react icons
  (calendar, map-pin, clock, heart, camera, music, social icons), Playfair
  Display + Great Vibes + Poppins via Google Fonts `<link>`, rose `#e66686`
  primary in `@theme`, pill buttons, repo-standard Navbar (dark-mode toggle)
  + Footer chrome; no assets copied.

Nuptia lives in `apps/nuptia` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the site name
"Nuptia", the page navigation, and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Nuptia page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Nuptia" in a serif font
- **AND** the navbar SHALL show navigation links for Our Story, Photos, When
  & Where and Events
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Mobile menu

The system SHALL show a hamburger menu on small screens that opens an overlay
with the same navigation links.

#### Scenario: Open mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user clicks the hamburger icon
- **THEN** a menu overlay SHALL open listing Our Story, Photos, When & Where
  and Events

### Requirement: Hero section

The system SHALL render a full-height hero with a background photo, a soft
overlay, a serif headline and a script sub-line.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 heading with the couple's names (e.g.
  "Sophie & Daniel are Getting Married") in a serif font
- **AND** it SHALL show a script-style sub-line ("Getting married!")
- **AND** the hero SHALL use a full-viewport background image with an
  overlay so the white text stays readable
- **AND** the hero SHALL NOT render a call-to-action button (matches the
  reference screenshot)

### Requirement: Our Story section

The system SHALL render an "Our Story" section with a heading and split
photo/text content.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the Our Story section is displayed
- **THEN** it SHALL contain a level-2 heading ("Our Story")
- **AND** it SHALL show two story blocks (her story / his story), each with
  a photo and a paragraph of text

### Requirement: Photos gallery

The system SHALL render a photo gallery with a heading and at least six
images.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the Photos section is displayed
- **THEN** it SHALL contain a heading ("Our Photos")
- **AND** it SHALL show a grid of at least six gallery images
- **AND** each gallery image SHALL have descriptive alt text

### Requirement: When & Where section

The system SHALL render a "When & Where" section with ceremony and reception
info cards.

#### Scenario: Event info cards

- **GIVEN** the page is rendered
- **WHEN** the When & Where section is displayed
- **THEN** it SHALL contain a heading ("When & Where")
- **AND** it SHALL show a "Main Ceremony" card and a "Reception" card
- **AND** each card SHALL show a date, a time and a venue address

### Requirement: Events section

The system SHALL render an events schedule with at least three entries.

#### Scenario: Events content

- **GIVEN** the page is rendered
- **WHEN** the Events section is displayed
- **THEN** it SHALL contain a heading ("Events")
- **AND** it SHALL show at least three event entries, each with a time, a
  title and a short description

### Requirement: Footer

The system SHALL render a footer with menu links, social icons and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show footer links for Our Story, Photos, When & Where
  and Events
- **AND** it SHALL show circular social icons (Facebook, Twitter/X,
  Instagram, Dribbble)
- **AND** it SHALL show a copyright line in the bottom bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Nuptia app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Nuptia — Wedding Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App renders all sections 1:1 in the order above (navbar → hero → our
      story → photos → when & where → events → footer).
- [ ] Design tokens match the reference: Playfair Display serif headings,
      Great Vibes script accent, Poppins body, rose `#e66686` primary, pill
      buttons (rounded-full).
- [ ] 100% Vitest coverage on `apps/nuptia` (lines/functions/branches/
      statements).
- [ ] Per-app gate `scripts/verify-app.sh nuptia` passes.
- [ ] PR description includes: source template (ColorLib Wordpress Wedding
      Themes), preview URL (unreachable — screenshot-only reference, with the
      note that `/theme/wedding/` belongs to the separate "Wedding" entry),
      design tokens used, what differs (renames, placeholder images).

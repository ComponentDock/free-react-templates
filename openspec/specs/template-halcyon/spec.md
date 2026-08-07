# Template: Halcyon (Spa & Wellness)

## Purpose

Halcyon is a single-page spa & wellness template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Wellspa"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wellspa" — spa & wellness single-page template
  (source: https://colorlib.com/wp/template/wellspa/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/wellspa/
  (HTTP 200, full rendered DOM + `css/style.css` (23.6 KB) + custom
  `css/bootstrap.min.css` (34.4 KB, `$primary` overridden to `#ffa188`)
  extracted). The TEMPLATES.md screenshot
  (`wellspa-free-template.jpg`) confirms the design below: light/white
  body, dark warm hero, peach/coral accents, serif headings.
- **Section order (1:1):**
  1. Header: transparent navbar over the hero, serif wordmark "WellSpa"
     left, right nav (Home / About / Services / Gallery / Blog / Contact)
     in white, active link in peach. Mobile hamburger opens a slide-down
     menu overlay.
  2. Hero cover: full-height background image (hot-stone massage photo)
     with `rgba(0,0,0,0.3)` overlay — h1 "Spa Which You Love" (serif,
     white), supporting paragraph, pill "Learn More" button.
  3. About: left column "WellSpa Spa & Wellness" serif heading, bold
     sub-paragraph, plain paragraph, then 4 circular social icons
     (twitter, instagram, facebook, linkedin); right column: two
     overlapping photos (50% width each, 350px tall, second offset down).
  4. Services: centered "Our Services" heading with a peach underline bar
     (`heading-border-bottom`), 4 cards in a row (image + serif title +
     text): Body Shrub, Relax Massage, Facial Spa, Body Shrub.
  5. Discount CTA: section on `rgba(255,161,136,0.1)` background —
     centered peach serif "Get 20% discount" heading, lead paragraph,
     peach pill "Contact us" button.
  6. Features: parallax background image with dark overlay, white "Spa
     Features" heading + peach underline bar, 4 bordered cards (radius
     4px, `1px solid rgba(255,255,255,0.2)`, hover
     `rgba(255,255,255,0.1)`): peach icon + white title + muted text —
     Relaxing Massage (towel), Candle (candle), Bathrobe (bathrobe), Hot
     Stones (hot stones).
  7. Testimonials: centered "Testimonials" heading, carousel of 4+
     testimonial cards (circular author photo + name + quote), then
     centered "Prev" / "Next" pill buttons.
  8. Big quote: left column large serif quote with peach opening/closing
     quote marks, attribution "— Jean Doe, Spa Customer"; right column:
     the same two overlapping photos as the About section.
  9. Footer: background image with overlay, centered serif wordmark
     "WellSpa", centered footer links (Home / About / Services /
     Contact), circular social icons, bottom bar with border-top and
     copyright line.
- **Design tokens extracted from `css/style.css` + custom bootstrap:**
  - Brand peach **`#ffa188`** (primary; `$primary` in the vendored
    bootstrap) — button bg, active nav link, form-control focus border,
    owl-carousel active dot, heading underline bar, feature icons,
    big-quote marks. Button hover **`#ff8362`** / border hover
    **`#ff7955`**.
  - Dark **`#000`** (footer bg), **`#364d59`** (dark slate accents),
    **`#212529`** (body text); light grays **`#f8f9fa`**, **`#ced4da`**,
    **`#e6e6e6`**; muted **`rgba(255,255,255,0.5)`** on dark sections.
  - Fonts: **"Muli"** (body/nav sans-serif), **"Playfair Display"**
    (serif headings/wordmark, weights 400/900).
  - Buttons: **pill shape** `border-radius: 30px`, padding `10px 30px`,
    white text, bold; `.btn-primary` bg `#ffa188`, hover `#ff8362`.
  - Hero: `height: calc(100vh - 196px)`, `min-height: 677px`; overlay
    `rgba(0,0,0,0.3)`; heading serif white.
  - Cards: features card `padding: 30px`, `border-radius: 4px`,
    `border: 1px solid rgba(255,255,255,0.2)`, hover
    `background: rgba(255,255,255,0.1)`; icon `2.4rem` in peach.
  - Section rhythm: `.site-section` padding `2.5em 0`; footer padding
    `4em 0` (8em on md+).
  - Photos: `.bg-img-1` 50% width, 350px height, cover; the two about
    photos overlap with the second offset (`mt-md-5`, `mr-md-4`).
- **Recreation decisions:** same kind of spa page — hero cover with
  `https://picsum.photos/seed/halcyon-<n>/<w>/<h>` placeholder imagery,
  lucide icons for social/feature icons, Muli + Playfair Display via
  Google Fonts `<link>`, peach `#ffa188` primary in `@theme` (hover
  `#ff8362`), pill buttons, repo-standard Navbar (dark-mode toggle) +
  Footer chrome; no assets copied.

Halcyon lives in `apps/halcyon` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the site name
"Halcyon", the page navigation, and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Halcyon page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Halcyon" in a serif font
- **AND** the navbar SHALL show navigation links for Home, About, Services,
  Gallery, Blog and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Navbar active link

- **GIVEN** the page is rendered
- **WHEN** the user inspects the navigation
- **THEN** the current page link SHALL be highlighted in the brand peach
  color

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
- **THEN** a menu overlay SHALL open listing Home, About, Services, Gallery,
  Blog and Contact

### Requirement: Hero section

The system SHALL render a full-height hero with a background image, a dark
overlay, a headline, supporting copy and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 heading "Spa Which You Love" in a serif
  font
- **AND** it SHALL show a paragraph of supporting copy
- **AND** it SHALL show a "Learn More" pill button in the brand peach color

### Requirement: About section

The system SHALL render an about section with a serif heading, paragraphs,
social icons and two overlapping photos.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the serif heading "Halcyon Spa & Wellness"
- **AND** it SHALL show a bold sub-paragraph and a plain paragraph
- **AND** it SHALL show circular social icons (twitter, instagram,
  facebook, linkedin)
- **AND** it SHALL show two overlapping photos on the right

### Requirement: Services section

The system SHALL render a services section with a heading and four service
cards, each with an image, a title and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services" with a peach underline
  bar
- **AND** it SHALL list service cards for Body Shrub, Relax Massage,
  Facial Spa and Body Shrub
- **AND** each card SHALL show an image, a serif title and a description

### Requirement: Discount call-to-action

The system SHALL render a discount section on a light peach background with
a heading, copy and a contact button.

#### Scenario: Discount content

- **GIVEN** the page is rendered
- **WHEN** the discount section is displayed
- **THEN** it SHALL show the heading "Get 20% discount" in the brand peach
  color
- **AND** it SHALL show a lead paragraph
- **AND** it SHALL show a "Contact us" pill button

### Requirement: Features section

The system SHALL render a features section over a background image with four
bordered cards, each with an icon, a title and a description.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Spa Features" in white
- **AND** it SHALL list feature cards for Relaxing Massage, Candle,
  Bathrobe and Hot Stones
- **AND** each card SHALL show a peach icon, a white title and a muted
  description

#### Scenario: Feature card hover state

- **GIVEN** a feature card is displayed
- **WHEN** the user hovers over it
- **THEN** the card SHALL lighten its background

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a carousel of
testimonial cards (photo, name, quote) and prev/next controls.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Testimonials"
- **AND** it SHALL show at least one testimonial card with a circular
  author photo, a name and a quote
- **AND** it SHALL show "Prev" and "Next" buttons

### Requirement: Big quote section

The system SHALL render a section with a large serif quote, attribution and
two overlapping photos.

#### Scenario: Big quote content

- **GIVEN** the page is rendered
- **WHEN** the big quote section is displayed
- **THEN** it SHALL show a large serif quote with the opening and closing
  quote marks in the brand peach color
- **AND** it SHALL show the attribution "— Jean Doe, Spa Customer"
- **AND** it SHALL show two overlapping photos on the right

### Requirement: Footer

The system SHALL render a footer with a wordmark, navigation links, social
icons and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the serif wordmark "Halcyon"
- **AND** it SHALL show footer links for Home, About, Services and Contact
- **AND** it SHALL show circular social icons (twitter, instagram,
  facebook, linkedin)
- **AND** it SHALL show a copyright line in the bottom bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Halcyon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Halcyon — Spa & Wellness Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App renders all sections 1:1 in the order above (header → hero →
      about → services → discount → features → testimonials → big quote →
      footer).
- [ ] Design tokens match the reference: peach `#ffa188` primary (hover
      `#ff8362`), Muli body + Playfair Display serif headings, pill buttons
      (`border-radius: 30px`).
- [ ] 100% Vitest coverage on `apps/halcyon` (lines/functions/branches/
      statements).
- [ ] Per-app gate `scripts/verify-app.sh halcyon` passes.
- [ ] PR description includes: source template (ColorLib Wellspa), preview
      URL, design tokens used, what differs (renames, placeholder images).

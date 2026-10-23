# Template: Mocha (Astro Template)

## Purpose

Mocha is a single-page coffee shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Brewhouse" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Brewhouse" — coffee shop template
  (source: https://colorlib.com/wp/template/brewhouse/).
- **Demo DOM analyzed:** https://brewhouse-colorlib.pages.dev/
  (HTTP 200 at prep time; `https://preview.colorlib.com/theme/brewhouse/` returned 404 at prep time —
  demo was hosted on Cloudflare Pages per the ColorLib preview portal). The
  TEMPLATES.md screenshot (`brewhouse-template-1770211139958.jpg`) is the
  visual reference; the design below is reconstructed from the DOM
  structure and the `_astro/Base.*.css` stylesheet.

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/brewhouse/` answers **HTTP 200**, 53,735
B `text/html; charset=utf-8` (49,788 B, sha256 `8950f2bfb8e4…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/brewhouse/_astro/Base.umyEL11O.css` is
32,739 B sha256 `a44422f20817…`; 12 of the 14 hex tokens recorded below are
present in it (DM Sans, Playfair Display) and the remaining 2 are absent
from both the live sheet and the live page — re-check the token table before
reusing them. The Cloudflare Pages mirror
`https://brewhouse-colorlib.pages.dev` is still **NXDOMAIN** (re-checked
2026-10-13d). ⚠️ `apps/mocha` was built from the mirror's tokens before the
migration, so it follows the mirror, not today's preview host.
- **Section order (1:1):** Navbar (Menu, Our Story, Process, Locations,
  Shop, Order Online) → Hero ("Crafted with Passion & Precision") → Menu
  ("Our Menu": Espresso Drinks, Pour Overs, Cold Drinks) → Story
  ("From Portland, With Love" + stats) → Process ("From Origin to Cup":
  Sourcing, Roasting, Cupping, Serving) → Shop ("Take It Home": House
  Blend, Single Origin - Ethiopia, Decaf Blend) → Testimonials ("What
  People Are Saying") → Newsletter ("Join the Club") → Footer.
- **Design tokens extracted from the demo stylesheet:**
  - Warm coffee palette: primary brown `#846358` (buttons/accents, hover
    `#6f574d` / `#a18072`), cream surfaces `#fdf8f6` (hero, primary-50)
    and `#f2e8e5`/`#eaddd7`, deep brown `#4a3b34` (primary-900 dark
    sections: Shop, Footer), light mocha tints `#d2bab0`/`#e0cec7`,
    amber `#eab308`/`#facc15` (Popular/Bestseller badges, star ratings),
    dark-mode grays `#030712`/`#111827`/`#1f2937`.
  - Fonts: **"Playfair Display"** (display/serif headings) + **"DM Sans"**
    (body/sans) via Google Fonts.
  - Buttons: pill-shaped (rounded-full), solid brown primary + brown
    outline secondary.
  - Hero: split layout — eyebrow "Specialty Coffee Roasters", serif
    headline with the "Passion & Precision" part in brown, circular
    top-down latte-art image on a soft amber circle, "SCROLL" indicator.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/mocha-<n>/<w>/<h>`); icons → lucide-react (+ inline
  SVG brand icons for socials); no assets copied. "Locations" is a separate
  page in the demo; the single-page recreation keeps the four in-page
  anchors (Menu, Our Story, Process, Shop) in the navbar.

Mocha lives in `apps/mocha` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Mocha",
anchor links to the page's sections, an "Order Online" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Mocha page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Mocha"
- **AND** the navbar SHALL show links to Menu, Our Story, Process, and Shop
- **AND** the navbar SHALL show an "Order Online" link and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with an eyebrow, a level-1
headline, a blurb, and two call-to-action links.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the eyebrow "Specialty Coffee Roasters"
- **AND** it SHALL contain a level-1 heading whose text mentions "Crafted with Passion"
- **AND** it SHALL show a blurb paragraph
- **AND** it SHALL show "View Our Menu" and "Order Online" links

### Requirement: Menu section

The system SHALL render a menu section with a heading and at least three
drink categories, each with priced items.

#### Scenario: Menu content

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL contain a heading "Our Menu"
- **AND** it SHALL show the categories Espresso Drinks, Pour Overs, and Cold Drinks
- **AND** it SHALL show at least nine drink items with prices (e.g. Espresso $3.50, Ethiopian Yirgacheffe $6.00)

### Requirement: Story section

The system SHALL render a story section with a stats row, a heading, a
blurb, and a link.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** it SHALL contain a heading "From Portland, With Love"
- **AND** it SHALL show a stats row (e.g. "15+ Years Roasting")
- **AND** it SHALL show a blurb and a "Learn More About Us" link

### Requirement: Process section

The system SHALL render a process section with a heading and four numbered
steps.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "From Origin to Cup"
- **AND** it SHALL show the four steps Sourcing, Roasting, Cupping, and Serving

### Requirement: Shop section

The system SHALL render a shop section with a heading and three products,
each with a price and an "Add to Cart" button.

#### Scenario: Shop content

- **GIVEN** the page is rendered
- **WHEN** the shop section is displayed
- **THEN** it SHALL contain a heading "Take It Home"
- **AND** it SHALL show the products House Blend, Single Origin - Ethiopia, and Decaf Blend with prices
- **AND** each product SHALL have an "Add to Cart" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and three
quotes with attributed names.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What People Are Saying"
- **AND** it SHALL show at least three testimonials with names (Michael Chen, Sarah Williams, David Park)

### Requirement: Newsletter section

The system SHALL render a newsletter section with a heading, an email
input, and a subscribe button that confirms a successful subscription.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL contain a heading "Join the Club"
- **AND** it SHALL show an email input and a "Subscribe" button

#### Scenario: Newsletter submit

- **GIVEN** the newsletter section is displayed
- **WHEN** the user types an email and presses Subscribe
- **THEN** the form SHALL show a confirmation message
- **AND** the email input SHALL no longer be present

### Requirement: Footer

The system SHALL render a footer with link columns, hours, contact
details, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Menu, Shop, Company)
- **AND** it SHALL show Hours, Contact, and Flagship Location details
- **AND** it SHALL show social links (GitHub, X, LinkedIn)
- **AND** it SHALL show a copyright line mentioning "Mocha"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Mocha app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Mocha — Astro Template"

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/mocha/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/mocha/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

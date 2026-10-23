# Template: Anvil (Industrial & Technical Solutions Template)

## Purpose

Anvil is a single-page industrial landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Industrie" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Industrie" — industrial website template
  (source: https://colorlib.com/wp/template/industrie/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/industrie/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`industrie-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (topbar email/phone + Home, About,
  Services, Projects, News, Contact) → Hero ("Specialized Technical
  Solutions" + Download / Get In Touch) → Stats ("Let the number speaks for
  us." + 7000+, 90+, 2900+ counters) → Services ("Our Specialty" +
  Automative Manufacturing, Mechanical Engineering, Oil & Gas Energy,
  Industrial Construction) → Grow section ("Let's grow together" checklist
  - testimonial quote) → Projects ("See Our Video" gallery) → Promo
    ("Contact us for quotations") → Footer (Company / Navigations / Quick
    Menu / Europe / USA columns).
- **Design tokens extracted from `style.css`:**
  - Primary **red `#f23a2e`** (buttons, accents); dark `#25262a`,
    `#343a40`; light `#edf0f5`.
  - Fonts: **"Nunito Sans"** (body) + **"Roboto Mono"** / icomoon (icons).
  - Red buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/anvil-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Anvil lives in `apps/anvil` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Anvil",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Anvil page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Anvil" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get In
Touch" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Get In Touch" button

### Requirement: Stats section

The system SHALL render a stats section with a heading and at least three
stat counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL contain a heading "Let the number speaks for us."
- **AND** it SHALL show at least three stat counters with numbers and labels

### Requirement: Services section

The system SHALL render a services section with a heading and at least four
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Specialty"
- **AND** it SHALL show at least four service cards with titles (Automative Manufacturing, Mechanical Engineering, Oil & Gas Energy, Industrial Construction) and blurbs

### Requirement: Grow section with testimonial

The system SHALL render a "Let's grow together" section with a checklist
and a testimonial quote.

#### Scenario: Grow content

- **GIVEN** the page is rendered
- **WHEN** the grow section is displayed
- **THEN** it SHALL contain a heading "Let's grow together"
- **AND** it SHALL show a testimonial quote with an attribution

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project images with captions

### Requirement: Promo strip

The system SHALL render a promo strip inviting visitors to request a
quotation.

#### Scenario: Promo content

- **GIVEN** the page is rendered
- **WHEN** the promo strip is displayed
- **THEN** it SHALL show "Contact us for quotations" and a contact button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Anvil app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Anvil — Industrial & Technical Solutions Template"

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
`apps/anvil/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/anvil/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation bar — the navbar SHALL show the site name "Anvil" and links to Home, About, Services, and Contact
- [ ] Hero section — it SHALL contain a level-1 heading
- [ ] Stats section — it SHALL contain a heading "Let the number speaks for us."
- [ ] Services section — it SHALL contain a heading "Our Specialty"
- [ ] Grow section with testimonial — it SHALL contain a heading "Let's grow together"
- [ ] Projects section — it SHALL show at least three project images with captions
- [ ] Promo strip — it SHALL show "Contact us for quotations" and a contact button
- [ ] Footer — it SHALL show link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark

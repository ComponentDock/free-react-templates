# Template: Chroma (Creative Studio Landing Page)

## Purpose

Chroma is a single-page creative-studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free **"Transcend"** website template design
(https://colorlib.com/wp/template/transcend/), built under a DIFFERENT name
("Chroma" — the mandatory naming rule forbids reusing the ColorLib source
name) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Transcend" — creative studio / digital experiences
  landing page (source: https://colorlib.com/wp/template/transcend/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/transcend/
  (HTTP 200, 35 KB rendered DOM) + `css/main.css` (70 KB) extracted. The
  TEMPLATES.md screenshot (`transcend-free-template-1.jpg`) is the visual
  reference.
- **Section order (1:1, from the live DOM):**
  1. Navbar: "Chroma Studio" logo + Home, About, Services, Works, Contact
     links + dark-mode toggle.
  2. Hero (`#home`): "Hello folks, we are Chroma Studio." + blurb + quick
     links (About / Services / Contact) + social + Scroll Down.
  3. Who We Are: "Who We Are" + "We are a group of design driven
     individuals passionate about creating beautiful..." + 4 process steps
     — Define, Design, Build, Launch.
  4. What We Do: "What We Do" + "We have everything you need to launch and
     grow a successful digital business." + 6 service cards — Brand
     Identity, Illustration, Web Design, Product Strategy, UI/UX Design,
     Mobile Development.
  5. Works: "Featured Works" + project cards (title + category + Project
     Link).
  6. Stats (`#stats`): 4 counters — 129 Awards Received, 1507 Cups of
     Coffee, 108 Projects Completed, 103 Happy Clients.
  7. Contact (`#contact`): "Contact Us" + e-mail, phone, address ("Where To
     Find Us") + Follow Us social links.
  8. Footer: copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **magenta `#cc147f`** (accents, buttons); **teal `#26bfb5`**
    secondary accent; near-black `#000` / `#111`; muted `#626262`; white.
  - Fonts: **"Domine"** (serif display) + **"Metropolis"** (sans body) —
    recreated with Domine + Poppins via Google Fonts.
  - Buttons: solid magenta with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/chroma-<n>/<w>/<h>`); icons → lucide-react; Domine +
  Poppins via Google Fonts `<link>`; no assets copied.

Chroma lives in `apps/chroma` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Chroma
Studio", anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Chroma page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Chroma Studio" and links to Home, About, Services, Works, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and
quick links to About, Services, and Contact.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Hello folks, we are Chroma Studio."
- **AND** it SHALL show quick links for About, Services, and Contact

### Requirement: Who We Are section

The system SHALL render a "Who We Are" section with a heading, a blurb, and
four process steps: "Define", "Design", "Build", and "Launch".

#### Scenario: Who We Are content

- **GIVEN** the page is rendered
- **WHEN** the Who We Are section is displayed
- **THEN** it SHALL contain a heading "Who We Are"
- **AND** it SHALL show steps titled "Define", "Design", "Build", and "Launch" each with a blurb

### Requirement: What We Do section

The system SHALL render a "What We Do" section with a heading and six
service cards with titles and blurbs.

#### Scenario: What We Do content

- **GIVEN** the page is rendered
- **WHEN** the What We Do section is displayed
- **THEN** it SHALL contain a heading "What We Do"
- **AND** it SHALL show cards titled "Brand Identity", "Illustration", "Web Design", "Product Strategy", "UI/UX Design", and "Mobile Development"

### Requirement: Works section

The system SHALL render a works section with a heading and project cards,
each with a title and a category.

#### Scenario: Works content

- **GIVEN** the page is rendered
- **WHEN** the works section is displayed
- **THEN** it SHALL contain a heading "Featured Works"
- **AND** it SHALL show project cards with titles and categories

### Requirement: Stats section

The system SHALL render a stats section with four metrics.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show "129 Awards Received", "1507 Cups of Coffee", "108 Projects Completed", and "103 Happy Clients"

### Requirement: Contact section

The system SHALL render a contact section with a heading, contact details,
and social links.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Contact Us"
- **AND** it SHALL show an e-mail address and a phone number

### Requirement: Footer

The system SHALL render a footer with a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Chroma app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Chroma — Studio Landing Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] Per-app gate: typecheck · lint · vitest 100% coverage · build
- [ ] Lockfile registers `@free-react-templates/chroma` (`grep -c "free-react-templates/chroma" package-lock.json` >= 1)
- [ ] `injectUiSource()` present in `vite.config.ts`
- [ ] PR title/body records: recreation of ColorLib Transcend
      (https://colorlib.com/wp/template/transcend/), preview URL, tokens

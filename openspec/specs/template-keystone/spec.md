# Template: Keystone (Architecture Template)

## Purpose

Keystone is a single-page architecture studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Archi" website template design (see TEMPLATES.md), built under
a **different name** with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Archi" — architecture / design quality template
  (source: https://colorlib.com/wp/template/archi/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/archi/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (59KB) extracted).
  The TEMPLATES.md screenshot (`archi-free-template.jpg`) was also inspected
  visually (browser): dark hero photo with white uppercase headline, red
  sharp-corner CTA, navy about headline, red accent lines.
- **Section order (1:1):** Navbar (logo + Home, About, Services, Project,
  Blog, contact links) → Hero ("Focus on Design Quality" over building photo
  - Contact Us) → About ("52 Years Of Experience in this area" + two photos)
    → Services ("We provide best intorior solution for you" + Architecture,
    Interior Design, Urban Design) → Popular work ("Our best recent popular
    work here" + Downside Low House, Top Commercial Building, Big Building
    Concept — Melbourn, Australia) → Experience band (parallax blurb + About
    us button) → Team ("best team we have ever had right now" + Jhon Sunsa,
    Smith J White, Jayson Brouni) → Blog ("All recent articals from us." +
    "Footprints in Time is perfect House in Kurashiki") → Footer (Quick Links,
    New Products, Support columns + copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff1f1f`** (accents, underlines) with button red
    **`#ff1313`**; **navy `#1f2b7b`** (headlines, dark accents).
  - Section title ink `#1d2434`; light backgrounds `#f9f9ff`, `#f0e9ff`;
    muted text `#888888`, `#999999`.
  - Fonts: **"Rajdhani"** (display: uppercase, bold, condensed) +
    **"Poppins"** (body) — Google Fonts.
  - Buttons (`.btn`): `#ff1313` background, white uppercase Rajdhani text,
    letter-spacing 1px, **border-radius 0** (sharp corners), large padding.
  - Section headings: 50px, `#1d2434`, weight 800, uppercase.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/keystone-<n>/<w>/<h>`); icons → lucide-react + inline
  SVG brand icons; original typos corrected ("intorior" → "interior",
  "articals" → "articles", "Melbourn" → "Melbourne"); placeholder copy
  paraphrased ("Sorem spsum...", "Brook presents...", "Now | Physics" →
  real-sounding equivalents); no assets copied.

Keystone lives in `apps/keystone` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Keystone",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Keystone page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Keystone" and links to Home, About, Services, Work, Team, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero over a darkened building photo with
a kicker, a level-1 headline, a blurb, and a "Contact Us" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Focus on Design Quality"
- **AND** it SHALL show a kicker, a blurb, and a "Contact Us" button
- **AND** it SHALL show a slide indicator "01"

### Requirement: About section

The system SHALL render an about section with a heading "52 Years of
Experience in This Area", a blurb, an "About Us" button, and two photos.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain the heading "52 Years of Experience in This Area"
- **AND** it SHALL show a blurb, an "About Us" button, and two images

### Requirement: Services section

The system SHALL render a services section with a heading and three service
cards: "Architecture", "Interior Design", and "Urban Design".

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "We Provide the Best Interior Solution for You"
- **AND** it SHALL show cards titled "Architecture", "Interior Design", and "Urban Design", each with an icon and a blurb

### Requirement: Popular work section

The system SHALL render a portfolio section with a heading, a photo grid, and
three project cards with locations.

#### Scenario: Work content

- **GIVEN** the page is rendered
- **WHEN** the popular work section is displayed
- **THEN** it SHALL contain a heading "Our Best Recent Popular Work"
- **AND** it SHALL show the projects "Downside Low House", "Top Commercial Building", and "Big Building Concept", each with a location

### Requirement: Experience band

The system SHALL render an experience band with a blurb and an "About Us"
button.

#### Scenario: Band content

- **GIVEN** the page is rendered
- **WHEN** the experience band is displayed
- **THEN** it SHALL show a blurb and an "About Us" button

### Requirement: Team section

The system SHALL render a team section with a heading and three team member
cards (name + role + photo).

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "The Best Team We Have Ever Had"
- **AND** it SHALL show the members "Jhon Sunsa", "Smith J White", and "Jayson Brouni" with their roles

### Requirement: Blog section

The system SHALL render a blog section with a heading and two article cards,
each with a "Read More" link.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "All Recent Articles From Us"
- **AND** it SHALL show two article cards, each with a title and a "Read More" link

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Quick Links, New Products, Support) and a copyright line
- **AND** it SHALL show social links (Facebook, Twitter, LinkedIn, YouTube)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Keystone app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Keystone — Architecture Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh keystone` passes (typecheck, lint, 100% coverage, build)
- [ ] `npm run spec:validate` passes
- [ ] Screenshot comparison: hero, about, services, work, team, blog, footer match the ColorLib "archi" preview layout and tokens

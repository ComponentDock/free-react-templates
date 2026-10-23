# Template: Ledgerly (Cryptocurrency & Mining)

## Purpose

Ledgerly is a cryptocurrency and mining website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Cryptos"
cryptocurrency template (preview: https://preview.colorlib.com/theme/cryptos/),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand primary: `#0d104d` (deep navy), gradient to `#28408b` (medium blue)
- Accent: `#ffaf02` (golden yellow)
- Text dark: `#292929`, text muted: `#8e8e8e`
- Button base: `#eef3f6` (light gray-blue)
- Fonts: Montserrat (headings, 300/600), Open Sans (body, 400/500)
- Dark overlay backgrounds for hero, currency calculator, and footer

Ledgerly lives in `apps/ledgerly` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/cryptos/` | HTTP 200 · 38,482 B · title `Cryptos - Cryptocurrency &amp; Mining Template` |
| stylesheet | `https://preview.colorlib.com/theme/cryptos/style.css` | HTTP 200 · 39,435 B · sha256 `5e2c5ae14a3b` |

**Live palette** (hex × occurrences across the sheets): `#ffaf02`×41,
`#0d104d`×12, `#28408b`×8, `#68a85c`×2, `#ff0048`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#30415b`, `#4768b9`, `#a0722e`, `#b8823a`.

## Requirements

### Requirement: Top header bar

The system SHALL render a dark top header bar with "Welcome to Ledgerly" text
and navigation links (Login | Register, FAQ, Earn Money).

#### Scenario: Top header content

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the page loads
- **THEN** the top header SHALL display "Welcome to Ledgerly" with the brand name highlighted
- **AND** the top header SHALL show Login | Register, FAQ, and Earn Money links

### Requirement: Navigation bar

The system SHALL render a sticky navbar with the Ledgerly logo, navigation links
(Home, Currencies, About, Contact), a newsletter email input with Subscribe button,
and a mobile hamburger menu toggle.

#### Scenario: Navbar content

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL display the Ledgerly logo
- **AND** the navbar SHALL show navigation links for Home, Currencies, About, Contact
- **AND** the navbar SHALL show a newsletter input and Subscribe button

#### Scenario: Mobile menu toggle

- **GIVEN** the Ledgerly page is rendered on a small screen
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the mobile menu SHALL expand showing the navigation links and newsletter form
- **AND** clicking the toggle again SHALL collapse the menu

### Requirement: Hero section

The system SHALL render a hero section with a dark gradient background, a heading
"Take a step into the Crypto World", a subtitle, a "Read More" CTA button, and
a coin illustration.

#### Scenario: Hero content

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading mentioning "Crypto World"
- **AND** it SHALL show a descriptive subtitle
- **AND** it SHALL show a "Read More" button linking to the features section

### Requirement: Features section

The system SHALL render a features section with a centered heading "Let's change
the world together" and a 4-column grid of feature cards (Fast & Easy, No Strings
Attached, Small Commissions, 100% Secure), each with an icon, description, and
"Read More" button.

#### Scenario: Features grid

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show 4 feature cards with titles and descriptions
- **AND** each card SHALL have a "Read More" link

### Requirement: About section

The system SHALL render a two-column about section with an image on the left and
a heading, description, and "Read More" CTA on the right.

#### Scenario: About content

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show an image and descriptive text about the platform
- **AND** it SHALL include a "Read More" CTA button

### Requirement: Currency calculator

The system SHALL render a dark parallax section with a "Cryptocurrency Calculator"
heading and two currency conversion forms with amount inputs and currency selects.

#### Scenario: Calculator forms

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the currency calculator section is displayed
- **THEN** it SHALL show two conversion forms
- **AND** each form SHALL have amount inputs, currency selects, and an "=" separator

### Requirement: Blog and prices

The system SHALL render a two-column section with blog posts on the left (thumbnail,
title, category, date, excerpt) and a cryptocurrency price table on the right
showing 10 coins with rank, name, symbol, and price (with increase/decrease color).

#### Scenario: Blog posts

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 3 blog posts with titles, categories, dates, and excerpts

#### Scenario: Price table

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the price table is displayed
- **THEN** it SHALL show 10 cryptocurrency entries with names, symbols, and prices

### Requirement: Newsletter subscription

The system SHALL render a newsletter section with a heading, description, email
input, and Subscribe button.

#### Scenario: Newsletter form

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show a "Subscribe to Newsletter" heading
- **AND** it SHALL show an email input and Subscribe button

### Requirement: Footer

The system SHALL render a dark parallax footer with three columns (brand logo
with social icons, recent posts, quick links) and a bottom bar linking to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the Ledgerly brand name and social media links
- **AND** it SHALL show recent posts and quick links
- **AND** it SHALL link to https://www.componentdock.com/ with "Component Dock" text

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title set to "Ledgerly — Cryptocurrency Template".

#### Scenario: Page structure

- **GIVEN** the Ledgerly page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Ledgerly — Cryptocurrency Template"
- **AND** the page SHALL have banner, navigation, main, and contentinfo landmarks

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ledgerly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ledgerly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Top header bar — the top header SHALL display "Welcome to Ledgerly" with the brand name highlighted
- [ ] Navigation bar — the navbar SHALL display the Ledgerly logo
- [ ] Hero section — it SHALL contain a level-1 heading mentioning "Crypto World"
- [ ] Features section — it SHALL show 4 feature cards with titles and descriptions
- [ ] About section — it SHALL show an image and descriptive text about the platform
- [ ] Currency calculator — it SHALL show two conversion forms
- [ ] Blog and prices — it SHALL show 3 blog posts with titles, categories, dates, and excerpts
- [ ] Newsletter subscription — it SHALL show a "Subscribe to Newsletter" heading
- [ ] Page composition — the document title SHALL be "Ledgerly — Cryptocurrency Template"

# Template: Tillman (Agriculture Landing)

Recreation of ColorLib "Agrica" (https://colorlib.com/wp/template/agrica/).

## Purpose

Tillman is an agriculture/farm landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Agrica"
agriculture website template (see TEMPLATES.md, line 883), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> **Naming note:** the natural name "agrica" is the ColorLib source name —
> never reuse it. The NEW name is **Tillman** (evokes tilling/agriculture,
> single lowercase word, verified free in `apps/`, `openspec/specs/`, and
> `docs/templates/`). Semantically fits the farming feel of the source name
> while staying clearly original.

## Design Tokens (from preview CSS)

- **Brand green:** `#329D23` (primary), `#285D25` (dark accent), `#25771b` (hover)
- **Text:** `#222` (headings), `#777` / `#797979` (body)
- **Backgrounds:** `#F3FFF2` (light green sections), `#ECEBF0` (gray sections)
- **Font:** `"Josefin Sans", sans-serif` (Google Fonts)
- **Buttons:** rounded pill shape, green bg `#329D23`, white text; outline variant with green border

## Section Structure (from preview DOM)

1. **Navbar** — sticky header with logo, nav links (Home, About, Services, Blog dropdown, Contact), phone number CTA button
2. **Hero** — full-screen background image slider (2 slides), centered text: "Agricultural solution" heading, description, "Explore Our Services" CTA button
3. **About** — split layout: left image, right content with "20+ years agricultural cooperative" heading, description paragraphs, "More About Us" button
4. **Services** — two side-by-side service cards (Field Ready #01, Transportation #02), each with image + numbered heading + description + "Get the Service" button
5. **Stats** — four stat counters in a row (20+, 10K, 12+, 280+) with descriptions
6. **Why Choose Us** — split layout: left content with 3 feature items (green checkmark icons + text), right image with floating badges (Best Plants, Award Winning), phone CTA
7. **Video** — full-width background image with centered play button (YouTube popup)
8. **Tips from Experts** — two blog-style posts with horizontal layout (image left, title + description + "Read More" right), "More Tips" border button
9. **Contact** — "Need any help?" section with phone/email/address info, "Drop Your Message" border button
10. **Footer** — three columns: logo + description + social links, Quick Links, Company; bottom bar with Component Dock link

## Design reference (replication findings)

- **Source:** ColorLib "Agrica" — https://colorlib.com/wp/template/agrica/
- **Source slug:** `agrica`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/agrica/ — **HTTP 200**, 29,378 B, fetched 2026-10-23 (page `<title>`: "Agriculture | Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/agrica/assets/css/style.css`, fetched 2026-10-23): brand `#329d23`, `#1f2b7b`, `#285d25`, `#234821`; dominant neutrals `#f9f9ff`, `#999999`, `#f1f1f1`; type Josefin Sans. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/agrica-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/tillman` had no recorded reference (docs/replication.md requires one).

## Requirements

### Navbar

#### Scenario: Navbar

- **Sticky header:** Navbar sticks to top on scroll
- **Nav links:** Home, About, Services, Blog, Contact are visible
- **Phone CTA:** Phone number button is visible on desktop

### Hero

#### Scenario: Hero

- **Heading:** "Agricultural solution" heading is visible
- **Description:** Description text is visible
- **CTA:** "Explore Our Services" button is visible and clickable

### About

#### Scenario: About

- **Image:** About section image is visible
- **Heading:** "20+ years agricultural cooperative" heading is visible
- **Button:** "More About Us" button is visible

### Services

#### Scenario: Services

- **Cards:** Two service cards are rendered
- **Content:** Each card has a number, title, description, and button
- **CTA:** "Get the Service" buttons are visible

### Stats

#### Scenario: Stats

- **Counters:** Four stat items are displayed
- **Values:** Stats show values with suffixes (+, K)

### Why Choose Us

#### Scenario: Why Choose Us

- **Features:** Three feature items with checkmark icons are visible
- **Image:** Right-side image with floating badges is visible
- **CTA:** Phone number button is visible

### Video

#### Scenario: Video

- **Play button:** Video play button is visible and clickable

### Tips

#### Scenario: Tips

- **Posts:** Two blog posts are displayed
- **Content:** Each post has image, title, description, and "Read More" link
- **CTA:** "More Tips" border button is visible

### Contact

#### Scenario: Contact

- **Info:** Phone, email, and address are displayed
- **CTA:** "Drop Your Message" border button is visible

### Footer

#### Scenario: Footer

- **Logo:** Footer logo is visible
- **Columns:** Quick Links and Company columns are visible
- **Copyright:** Footer copyright with Component Dock link is visible

### Accessibility

#### Scenario: Accessibility

- **Semantic HTML:** Uses `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- **ARIA:** Interactive elements have appropriate labels
- **Responsive:** Layout adapts to mobile screens

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
`apps/tillman/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/tillman/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

# Template: Keynote (Astro Template)

## Purpose

Keynote is a single-page AI conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ai Summit" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ai Summit" — AI conference template
  (source: https://colorlib.com/wp/template/ai-summit/).
- **Demo DOM analyzed:** https://aisummit-colorlib.pages.dev/
  (HTTP 200 at prep time; `https://preview.colorlib.com/theme/ai-summit/` returned 404 at prep time —
  demo was hosted on Cloudflare Pages per the ColorLib preview portal). The
  TEMPLATES.md screenshot (`aisummit-template-1770211095695.jpg`) is the
  visual reference; the section-by-section structure below is taken from the
  live DOM + bundled CSS.

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/aisummit/` answers **HTTP 200**, 110,070
B `text/html; charset=utf-8` (110,070 B, sha256 `88ad882723a5…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/aisummit/_astro/index.Dbq_dtys.css` is
44,737 B sha256 `ea44ccd13c7c…` (Space Grotesk, JetBrains Mono, Outfit). The
Cloudflare Pages mirror `https://aisummit-colorlib.pages.dev` is still
**NXDOMAIN** (re-checked 2026-10-13d). ⚠️ `apps/keynote` was built from the
mirror's tokens before the migration, so it follows the mirror, not today's
preview host.
- **Section order (1:1, from the DOM):**
  1. Navbar: Speakers, Tracks, Schedule, Tickets, Venue + "Get Your Ticket"
     CTA.
  2. Hero: H1 "The Future of AI is Here", blurb ("Join 5,000+ researchers,
     engineers, and builders for three days of cutting-edge talks,
     hands-on workshops, and the largest gathering of LLM practitioners"),
     "Get Your Ticket" + "View Schedule" CTAs, event countdown
     (Days/Hours/Mins/Secs), stats (5,000+ Attendees, 80+ Speakers, 3 Days,
     30+ Workshops).
  3. Speakers: "Learn from the Best" + 80+ speaker blurb + eight speaker
     cards (Dr. Maya Patel, Andrej Kovalenko, Dr. Sophia Chen, Marcus
     Thompson, Dr. Yuki Tanaka, James Okonkwo, Dr. Elena Rossi, Kevin Park).
  4. Tracks: "Three Distinct Paths" — Research, Industry, Hands-on Labs.
  5. Schedule: "Three Days of Innovation" — per-day session lists.
  6. Tickets: "Secure Your Spot" — Early Access (sold out), Builder
     (popular), Researcher, Enterprise tiers.
  7. Sponsors: "Backed by Leaders" — Diamond / Platinum / Gold / Silver
     partner logos + "Become a Sponsor" CTA.
  8. Venue: "The Armory" — description, address, "Get Directions", venue
     features, nearby hotels.
  9. FAQ: "Got Questions?" — six accordion Q&As.
  10. Footer: "Join Us at Keynote" — dates/venue, stats, CTAs, attendee
      logos, Event / Resources / Connect columns, copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Dark hero/sections (`gray-950`/`gray-900`) with **green** accents
    (`green-300/400/500`; CSS primary `oklch(60% .2 195)` ≈ emerald green).
  - Light sections for speakers/tracks/tickets; dark for hero, schedule,
    sponsors, footer.
  - Fonts: **"Space Grotesk"** (display) + **"Outfit"** (body) via Google
    Fonts; JetBrains Mono in the original's code snippets.
  - Buttons: pill-shaped, solid green primary / bordered outline; rounded
    cards with subtle borders.
- **Recreation decisions:** speaker photos → seeded picsum placeholders
  (`picsum.photos/seed/keynote-<n>/<w>/<h>`); icons → lucide-react;
  sponsor/attendee names rendered as styled text logos (no assets copied);
  countdown implemented as a live ticking timer; copy paraphrased but
  same-kind; fonts via Google Fonts `<link>`; light-default + class-based
  dark mode matching the original's `dark:` classes.

Keynote lives in `apps/keynote` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/aisummit/ (HTTP 200, 110,070 B, fetched 2026-10-23) and its theme stylesheet `theme/aisummit/_astro/index.Dbq_dtys.css` (44,737 B, sha256 `ea44ccd13c7c…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Surface | `#ffffff` | 1 declarations — `.countdown-digit` |
| Ink / dark surface | `#030712e6` | 1 declarations — `[data-header].scrolled` |
| Typeface | `Outfit, sans-serif` (1 rule — .countdown-digit) | `font-family` declaration in the theme sheet |
| Radii | `50%`, `inherit` | `50%` (.gradient-orb); `inherit` (.glow-border:after) |

Palette in order of use: `#030712e6` ×1, `#ffffff` ×1, `#ffffffb3` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Keynote",
anchor links to the page's sections, a "Get Your Ticket" call-to-action,
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Keynote page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Keynote" and links to Speakers, Schedule, and Tickets
- **AND** the navbar SHALL show a "Get Your Ticket" CTA link
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero with a level-1 headline, a blurb, two CTA
buttons, a countdown timer, and a statistics row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "The Future of AI is Here"
- **AND** it SHALL show "Get Your Ticket" and "View Schedule" buttons
- **AND** it SHALL show countdown units for Days, Hours, Mins, and Secs
- **AND** it SHALL show statistics for attendees, speakers, days, and workshops

### Requirement: Speakers section

The system SHALL render a speakers section with a heading and at least eight
speaker cards.

#### Scenario: Speakers content

- **GIVEN** the page is rendered
- **WHEN** the speakers section is displayed
- **THEN** it SHALL contain a heading "Learn from the Best"
- **AND** it SHALL show at least eight speaker cards with names and roles

### Requirement: Tracks section

The system SHALL render a tracks section with a heading and three track
cards.

#### Scenario: Tracks content

- **GIVEN** the page is rendered
- **WHEN** the tracks section is displayed
- **THEN** it SHALL contain a heading "Three Distinct Paths"
- **AND** it SHALL show Research, Industry, and Hands-on Labs tracks

### Requirement: Schedule section

The system SHALL render a schedule section with a heading and sessions.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL contain a heading "Three Days of Innovation"
- **AND** it SHALL show sessions for at least two of the three days

### Requirement: Tickets section

The system SHALL render a tickets section with a heading and four pricing
tiers.

#### Scenario: Tickets content

- **GIVEN** the page is rendered
- **WHEN** the tickets section is displayed
- **THEN** it SHALL contain a heading "Secure Your Spot"
- **AND** it SHALL show Early Access, Builder, Researcher, and Enterprise tiers with prices and features

### Requirement: Sponsors section

The system SHALL render a sponsors section with a heading and partner tiers.

#### Scenario: Sponsors content

- **GIVEN** the page is rendered
- **WHEN** the sponsors section is displayed
- **THEN** it SHALL contain a heading "Backed by Leaders"
- **AND** it SHALL show at least four partner names and a "Become a Sponsor" link

### Requirement: Venue section

The system SHALL render a venue section with a heading, description, and
address.

#### Scenario: Venue content

- **GIVEN** the page is rendered
- **WHEN** the venue section is displayed
- **THEN** it SHALL contain a heading "The Armory"
- **AND** it SHALL show a description, an address, and a "Get Directions" link

### Requirement: FAQ section

The system SHALL render an FAQ section with a heading and an accordion of
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show a heading "Got Questions?"
- **AND** it SHALL show at least four questions

#### Scenario: Expand and collapse

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question
- **THEN** the answer SHALL be revealed
- **AND** activating it again SHALL hide the answer

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Event and Resources link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Keynote app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Keynote — AI Conference Template"

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
`apps/keynote/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/keynote/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL show the site name "Keynote" and links to Speakers, Schedule, and Tickets
- [x] Hero section — it SHALL contain a level-1 heading "The Future of AI is Here"
- [x] Speakers section — it SHALL contain a heading "Learn from the Best"
- [x] Tracks section — it SHALL contain a heading "Three Distinct Paths"
- [x] Schedule section — it SHALL contain a heading "Three Days of Innovation"
- [x] Tickets section — it SHALL contain a heading "Secure Your Spot"
- [x] Sponsors section — it SHALL contain a heading "Backed by Leaders"
- [x] Venue section — it SHALL contain a heading "The Armory"
- [x] FAQ section — it SHALL show a heading "Got Questions?"
- [ ] Footer — it SHALL show Event and Resources link columns and a copyright line
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark

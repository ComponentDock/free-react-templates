# Template: Postie (App Landing Page)

## Purpose

Postie is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
**"Standout"** website template design (https://colorlib.com/wp/template/standout/),
built under a DIFFERENT name ("Postie" — the mandatory naming rule forbids
reusing the ColorLib source name) with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Standout" — mail-app landing page template
  (source: https://colorlib.com/wp/template/standout/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/standout/
  (HTTP 200, 27 KB rendered DOM) + `css/main.css` (89 KB) extracted. The
  TEMPLATES.md screenshot (`standout-free-template.jpg`) is the visual
  reference.
- **Section order (1:1, from the live DOM):**
  1. Navbar: logo + Intro, About, Features, Pricing, Blog links + App
     Store / Play Store badges (multi-page link in the original — the
     one-page recreation uses the page's real sections).
  2. Hero (`#home`): "An Amazing App That Does It All." + blurb + "Get The
     App" button + Scroll Down.
  3. About (`#about`): "The Most Popular And Number 1 Mail App." + blurb +
     4 feature points — Smart., User-Friendly., Powerful., Secure.
  4. How The App Works? (`#process`): "How The App Works?" + 4 steps —
     Sign Up, Create, Compose, Send.
  5. Features (`#features`): "Loaded With Features You Would Surely Love." +
     5 cards — Cloud Based, Voice & Video, Always Secure, Play Games,
     Group Chat.
  6. Testimonials: "1 Million+ Users Can't Be Wrong." + 3 quotes (original
     names paraphrased).
  7. Pricing (`#pricing`): 3 plans — Basic (Free), Pro Plan ($10 / month),
     Ultimate Plan ($20 / month) + Get Started buttons.
  8. Footer: link columns + social + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **green `#00a650`**; dark green `#006933`; near-black `#121619`;
    white background.
  - Fonts: **"IBM Plex Sans"** (body) + **"IBM Plex Serif"** (headings) via
    Google Fonts.
  - Buttons: solid green with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/postie-<n>/<w>/<h>`); icons → lucide-react; IBM Plex
  Sans + IBM Plex Serif via Google Fonts `<link>`; testimonial names
  paraphrased; no assets copied.

Postie lives in `apps/postie` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Postie",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Postie page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Postie" and links to Intro, About, Features, and Pricing
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Get The App" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "An Amazing App That Does It All."
- **AND** it SHALL show a supporting blurb and a "Get The App" button

### Requirement: About section

The system SHALL render an about section with a heading, a blurb, and four
feature points: "Smart.", "User-Friendly.", "Powerful.", and "Secure.".

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "The Most Popular And Number 1 Mail App."
- **AND** it SHALL show the feature points "Smart.", "User-Friendly.", "Powerful.", and "Secure."

### Requirement: How-it-works section

The system SHALL render a how-it-works section with a heading and four
steps: "Sign Up", "Create", "Compose", and "Send".

#### Scenario: How-it-works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "How The App Works?"
- **AND** it SHALL show steps titled "Sign Up", "Create", "Compose", and "Send" each with a blurb

### Requirement: Features section

The system SHALL render a features section with a heading and five feature
cards with titles and blurbs.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Loaded With Features You Would Surely Love."
- **AND** it SHALL show cards titled "Cloud Based", "Voice & Video", "Always Secure", "Play Games", and "Group Chat"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and three
quotes with attributions.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "1 Million+ Users Can't Be Wrong."
- **AND** it SHALL show three testimonial quotes with attributed names

### Requirement: Pricing section

The system SHALL render a pricing section with three plans, each with a
price and a "Get Started" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show plans named "Basic", "Pro Plan", and "Ultimate Plan" with the prices Free, $10, and $20 per month
- **AND** each plan SHALL show a "Get Started" button

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

- **GIVEN** the Postie app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Postie — App Landing Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] Per-app gate: typecheck · lint · vitest 100% coverage · build
- [ ] Lockfile registers `@free-react-templates/postie` (`grep -c "free-react-templates/postie" package-lock.json` >= 1)
- [ ] `injectUiSource()` present in `vite.config.ts`
- [ ] PR title/body records: recreation of ColorLib Standout
      (https://colorlib.com/wp/template/standout/), preview URL, tokens

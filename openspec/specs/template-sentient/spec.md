# Template: Sentient (AI Platform Template)

## Purpose

Sentient is a single-page AI platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "NeuralFlow" website template design
(source: https://colorlib.com/wp/template/neuralflow/), built under a
DIFFERENT name (Sentient — sentient AI) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-neuralflow/` using the FORBIDDEN ColorLib source
> name; it was deleted and replaced by this fresh prep (new name Sentient),
> matching the Cloudnest→Stratos / Ironforge→Forgefit precedent.

## Design reference (replication findings)

- **Original:** ColorLib "NeuralFlow" — AI platform / ML API landing
  website template (source: https://colorlib.com/wp/template/neuralflow/,
  category "Tailwind CSS / Astro").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/neuralflow/`) returns 404; the
  ColorLib preview portal (`https://preview.colorlib.com/#neuralflow`)
  hosts the demo in an iframe at `https://neuralflow-colorlib.pages.dev/`
  (HTTP 200, ~89 KB HTML + `/_astro/Base.CBdnxI3u.css` ~70 KB parsed for
  tokens). The TEMPLATES.md screenshot
  (`neuralflow-template-1771943830583.jpg`) matches this live demo. Same
  Cloudflare-Pages hosting pattern as Logitrans→Freightly.
- **Section order (1:1, from live demo DOM):**
  1. Navbar: "NeuralFlow" logo (icon + wordmark), links About,
     Capabilities, How It Works, Use Cases, Pricing, Developers,
     Integrations, Blog, Changelog, Solutions, Contact; dark-mode toggle
     button; "Try Free" CTA button (violet).
  2. Hero (dark, gradient + animated glow orbs + faint grid): pill badge
     "Powered by GPT-5 Architecture" (violet border/bg, pulsing dot), H1
     "Build Intelligent Apps" + typewriter gradient span cycling
     ["in Half the Time", "at Any Scale", "with Full Control"], subtext,
     buttons "Start Building Free" (primary) + "View Documentation"
     (secondary) + "Watch Demo" (ghost), stats row (1M+ API Calls/Day,
     99.99% Uptime, 50ms Avg Latency, 10,000+ Developers), code window
     tab "api_example.py" with syntax-highlighted Python (client init +
     generate + print).
  3. Logo/stats strip: animated count-up counters (Active Users, Uptime
     SLA, API Calls Served, User Rating) over a logo row.
  4. Capabilities: "AI That Actually Works" — 6 cards (icon tile + title +
     blurb): Natural Language Processing, Computer Vision, Predictive
     Analytics, Voice AI, Code Generation, Custom Models.
  5. How It Works: "From Data to Intelligence in Minutes" — 3 numbered
     steps: 01 Connect Your Data, 02 Train & Fine-tune, 03 Deploy & Scale.
  6. Use Cases: "AI for Every Industry" — 4 cards (image + title + blurb +
     3 bullets): Healthcare, Finance, E-commerce, Manufacturing.
  7. Pricing: "Usage-based pricing that scales" — Monthly/Yearly billing
     toggle ("Save 20%" hint), 3 tiers: Free $0 ("Start Free"), Pro $49
     ("Most Popular" badge, "Start Pro Trial"), Enterprise $299 ("Contact
     Sales"); each with feature list.
  8. For Developers: "Built by Developers, for Developers" — code window
     tab "example.py" (model load + generate) + 4 feature cards: SDKs in
     8 Languages, OpenAPI Spec, Webhooks & Streaming, 99.99% Uptime SLA.
  9. Testimonials: "Trusted by AI-first teams" — carousel (prev/next
     arrows + slide dots) with 6 quotes (Dr. Sarah Chen, James Rodriguez,
     Priya Patel, Daniel Kim, Elena Vasquez, James O'Brien).
  10. FAQ: "Frequently Asked Questions" — accordion with 5 questions:
      free trial, data security, API rate limits, custom models,
      enterprise solutions.
  11. CTA banner: "The Future of AI is Here" — "Start Free" + "Talk to
      Sales" buttons.
  12. Footer: brand + blurb + social icons (Twitter, GitHub, LinkedIn,
      Discord), columns PRODUCT (Capabilities, Pricing, Documentation,
      API) / RESOURCES (Blog, Tutorials, Community, Status) / COMPANY
      (About, Careers, Press, Contact), STAY UPDATED newsletter form
      (email input + "Subscribe"), legal links (Privacy Policy, Terms of
      Service, Style Guide), copyright "© 2026 NeuralFlow".
  - Extras: skip-to-content link, cookie-consent dialog (Decline / Accept
    All), back-to-top button, scroll-reveal `fade-in-up` animations.
- **Design tokens extracted from `Base.CBdnxI3u.css` + DOM:**
  - Brand color: **#7c3aed** (violet-600; scale #ede9fe, #ddd6fe,
    #c4b5fd, #a78bfa, #8b5cf6, #6d28d9, #5b21b6, #4c1d95) — primary
    buttons, links, glows, hero grid lines (`#8b5cf60d` 1px grid).
  - Secondary accent: **#06b6d4** (cyan-500; #67e8f9, #22d3ee, #0891b2) —
    gradient text end, gradient buttons, glow orbs, footer gradient.
  - Neutrals: #fff, #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827, #030712; light body = white bg +
    #111827 text; dark = #030712 bg + #f3f4f6 text.
  - Fonts: **"Space Grotesk"** (display/headings, 300–700), **"Inter"**
    (body, 300–800), **"JetBrains Mono"** (code) — all via Google Fonts.
  - Shapes: buttons `border-radius: 0.5rem` (--radius-lg), px-5 py-2.5,
    text-sm font-medium; cards rounded-2xl (1rem) / rounded-xl (0.75rem);
    pills rounded-full (badges, toggles).
  - Buttons: `.btn-primary` bg #7c3aed, white text, violet glow shadow
    (`0 10px 15px -3px #7c3aed40`), stronger shadow + lifted on hover;
    secondary = outlined/ghost with border; focus ring 2px.
  - Dark mode: class-based `.dark` on the document root (`.dark *` →
    color #f3f4f6, bg #030712); toggle button in navbar.
  - Section backgrounds: dark hero (`from-primary-500/10` + `to-gray-950`
    vibe: violet glow orbs `bg-primary-600/20`, `bg-accent-500/15`,
    `bg-primary-500/10` with 100–120px blur + `animate-glow-pulse`),
    light white/gray-50 sections, dark footer with violet→cyan gradient.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sentient-<n>/<w>/<h>`); icons → lucide-react;
  fonts via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome; typewriter + count-up + carousel + accordion via small
  React hooks, no extra dependencies.

Sentient lives in `apps/sentient` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sentient",
anchor links to the page's sections, a "Try Free" CTA, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sentient page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sentient" and links to
  Capabilities, How It Works, Use Cases, Pricing, Developers, and Contact
- **AND** the navbar SHALL show a "Try Free" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a dark hero with a badge, a typewriter headline,
CTAs, a stats row, and a code window.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a pill badge with "Powered by GPT-5
  Architecture" and a level-1 heading "Build Intelligent Apps"
- **AND** it SHALL show buttons "Start Building Free", "View
  Documentation", and "Watch Demo"
- **AND** it SHALL show stats including 1M+ API Calls/Day and 99.99%
  Uptime
- **AND** it SHALL show a code window labelled "api_example.py" with
  code content

#### Scenario: Typewriter effect

- **GIVEN** the hero is displayed
- **WHEN** the page has loaded
- **THEN** the headline accent span SHALL cycle through the phrases "in
  Half the Time", "at Any Scale", and "with Full Control"

### Requirement: Stats counters

The system SHALL render a logo/stats strip with animated count-up
counters.

#### Scenario: Counter animation

- **GIVEN** the page is rendered
- **WHEN** the stats strip scrolls into view
- **THEN** counters for Active Users, Uptime SLA, API Calls Served, and
  User Rating SHALL count up to their target values

### Requirement: Capabilities section

The system SHALL render a capabilities section with at least six feature
cards.

#### Scenario: Capabilities content

- **GIVEN** the page is rendered
- **WHEN** the capabilities section is displayed
- **THEN** it SHALL contain a heading "AI That Actually Works"
- **AND** it SHALL show cards for Natural Language Processing, Computer
  Vision, Predictive Analytics, Voice AI, Code Generation, and Custom
  Models
- **AND** each card SHALL show an icon tile, a title, and a blurb

### Requirement: How It Works section

The system SHALL render a three-step "How It Works" section.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "From Data to Intelligence in
  Minutes"
- **AND** it SHALL show steps 01 Connect Your Data, 02 Train & Fine-tune,
  and 03 Deploy & Scale

### Requirement: Use Cases section

The system SHALL render a use-cases section with at least four industry
cards.

#### Scenario: Use cases content

- **GIVEN** the page is rendered
- **WHEN** the use-cases section is displayed
- **THEN** it SHALL contain a heading "AI for Every Industry"
- **AND** it SHALL show cards for Healthcare, Finance, E-commerce, and
  Manufacturing
- **AND** each card SHALL show an image, a title, a blurb, and at least
  three bullet points

### Requirement: Pricing section

The system SHALL render a pricing section with a billing toggle and three
tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Usage-based pricing that scales"
- **AND** it SHALL show a Monthly/Yearly billing toggle with a "Save 20%"
  hint
- **AND** it SHALL show Free, Pro (with a "Most Popular" badge), and
  Enterprise tiers, each with a price and a CTA

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches the billing toggle to Yearly
- **THEN** the displayed prices SHALL update to the annual amounts

### Requirement: Developers section

The system SHALL render a developers section with a code example and four
feature cards.

#### Scenario: Developers content

- **GIVEN** the page is rendered
- **WHEN** the developers section is displayed
- **THEN** it SHALL contain a heading "Built by Developers, for
  Developers"
- **AND** it SHALL show a code window labelled "example.py"
- **AND** it SHALL show cards for SDKs in 8 Languages, OpenAPI Spec,
  Webhooks & Streaming, and 99.99% Uptime SLA

### Requirement: Testimonials carousel

The system SHALL render a testimonials section as a carousel.

#### Scenario: Carousel content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by AI-first teams"
- **AND** it SHALL show at least one testimonial with a quote, name, and
  role
- **AND** it SHALL show previous/next controls and slide indicators

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user presses the next control
- **THEN** the carousel SHALL advance to the following testimonial

### Requirement: FAQ accordion

The system SHALL render an FAQ section with an accordion.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show questions including "How does the free trial
  work?" and "Is my data secure?"

#### Scenario: Accordion toggle

- **GIVEN** the FAQ section is displayed
- **WHEN** the user clicks a question
- **THEN** its answer SHALL expand, and clicking again SHALL collapse it

### Requirement: Call to action

The system SHALL render a closing CTA banner.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL contain a heading "The Future of AI is Here"
- **AND** it SHALL show "Start Free" and "Talk to Sales" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form, and
a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns PRODUCT, RESOURCES, and COMPANY
- **AND** it SHALL show a "Stay Updated" newsletter form with an email
  input and a "Subscribe" button
- **AND** it SHALL show a copyright line with Privacy Policy, Terms of
  Service, and Style Guide links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sentient app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Sentient — AI Platform Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh sentient` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero, stats strip,
      capabilities, how-it-works, use-cases, pricing, developers,
      testimonials, faq, cta, footer)
- [ ] Design tokens in `@theme`: brand violet `#7c3aed` (+ scale #ede9fe,
      #ddd6fe, #c4b5fd, #a78bfa, #8b5cf6, #6d28d9, #5b21b6, #4c1d95),
      accent cyan `#06b6d4` (+ #67e8f9, #22d3ee, #0891b2), gray neutrals
- [ ] Fonts: Space Grotesk (display) + Inter (body) + JetBrains Mono
      (code) via Google Fonts
- [ ] Buttons: rounded-lg (0.5rem), px-5 py-2.5, violet primary with
      white text + violet glow shadow; cards rounded-2xl; pills
      rounded-full
- [ ] Hero dark with violet/cyan glow orbs + faint violet grid; footer
      dark with violet→cyan gradient
- [ ] Dark mode: class-based `.dark` (bg #030712, text #f3f4f6), toggle
      in navbar
- [ ] Interactive behaviors: typewriter headline, count-up stats,
      testimonial carousel, FAQ accordion, billing toggle, scroll-reveal
      fade-in-up — no extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/sentient-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)

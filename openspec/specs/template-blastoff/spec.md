# Template: Blastoff (Startup Template)

## Purpose

Blastoff is a single-page startup/SaaS dev-platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Launchpad" website template design
(source: https://colorlib.com/wp/template/launchpad/), built under a
DIFFERENT name (Blastoff — launch/rocket imagery, like a rocket blast-off)
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-launchpad/` using the FORBIDDEN ColorLib source
> name; it was deleted and replaced by this fresh prep (new name Blastoff),
> matching the Cloudnest→Stratos and Ironforge→Forgefit precedents.

## Design reference (replication findings)

- **Original:** ColorLib "Launchpad" — startup / dev-platform (CI-CD, deploy,
  analytics) SaaS landing template (source:
  https://colorlib.com/wp/template/launchpad/). Category per the ColorLib
  preview portal: "Startup".
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/launchpad/`) returns 404; the
  ColorLib preview portal hosts the demo at
  `https://launchpad-colorlib.pages.dev/` (HTTP 200, ~91 KB HTML +
  `/_astro/Base.Dq6-tIhe.css` ~68 KB parsed for tokens). The TEMPLATES.md
  screenshot (`launchpad-template-1771943657968.jpg`) shows the ORIGINAL
  visual design (see "Visual design" below) and differs slightly from the
  live Astro demo (headline "Ship products 10x faster", rounded-lg buttons,
  dark-mode toggle) — the live demo DOM is the authoritative structure
  reference; the screenshot records the original aesthetic intent.
- **Section order (1:1, from live demo DOM):**
  1. Navbar: Blastoff logo (rocket icon), links About, Features, How It
     Works, Pricing, Testimonials, FAQ, Integrations, Blog, Changelog,
     Contact, dark-mode toggle, "Get Early Access" CTA button; mobile
     hamburger ("Open menu") with slide-down panel.
  2. Hero (soft gradient bg from-primary-50 → white): badge "Now in Beta —
     2,000+ on the waitlist", H1 "Ship products 10x faster", blurb ("The
     modern development platform that helps startups go from idea to
     production in minutes…"), buttons "Join the Waitlist" (primary → #waitlist)
     - "See it in action" (outline, play icon → #how-it-works), dashboard
       mockup image, stats row (2,000+ Beta Users / 99.9% Uptime / $2.5M
       Raised / 4.9 Rating).
  3. Stats band (border-y, bg-gray-50): 4 animated count-up counters
     (data-counter spans 0→target): 2000+ Active Users, 99.9% Uptime,
     $2.5M Funding Raised, 4.9 User Rating; fade-in-up scroll animation with
     staggered data-delay.
  4. Features (#features, bg-gray-50): eyebrow pill "Features", H2
     "Everything you need to ship", subcopy, 6 cards (icon + title + blurb):
     CI/CD Pipeline, Real-time Analytics, Team Collaboration, Auto-scaling,
     Security First, Developer API.
  5. How It Works (#how-it-works, bg-white): eyebrow pill "How It Works",
     H2 "From idea to production in minutes", subcopy, 3 numbered steps
     (01 Connect, 02 Build, 03 Deploy) with title + copy.
  6. Integrations (#integrations, bg-gray-50): eyebrow pill "Integrations",
     H2 "Works with your favorite tools", subcopy, grid of 8 items with
     "Connected" badge: GitHub, GitLab, Slack, AWS, Vercel, Docker, Jira,
     Figma.
  7. Pricing (#pricing, bg-white): eyebrow pill "Pricing", H2 "Simple,
     transparent pricing", subcopy ("Start free, scale as you grow. All
     plans include a 14-day free trial of Pro features."), monthly/yearly
     billing toggle (role=switch, "Save 20%"), 3 tiers — Hobby ($0/mo),
     Startup ($49/mo, "Most Popular"), Scale ($149/mo).
  8. Testimonials (#testimonials, bg-gray-50): eyebrow pill "Testimonials",
     H2 "Trusted by fast-moving startups", carousel with prev/next buttons
     (lg-only), 6 slides (quote, avatar initial, name, role, company): Alex
     Rivera CTO NexaFlow, Priya Sharma Head of Engineering DataPulse,
     Jordan Kim Lead Developer CloudSync, Chris Park CEO QuickShip, Rebecca
     Stone Founder MedConnect, Ahmed Hassan CTO GreenRoute.
  9. FAQ (#faq, bg-white): eyebrow pill "FAQ", H2 "Frequently Asked
     Questions", subcopy, 4 accordion items — platform differences, project
     migration, supported cloud providers, free tier.
  10. Waitlist CTA (#waitlist, gradient from-primary-600 to-primary-800):
      H2 "Ready to launch faster?", copy, "Get Early Access" button, note
      "Join 2,000+ developers already on the waitlist. No credit card
      required."
  11. Footer (bg-gray-900, text-gray-300): brand blurb, columns PRODUCT
      (Features, Pricing, Changelog, Roadmap), RESOURCES (Documentation,
      API Reference, Blog, Tutorials), COMPANY (About, Careers, Press,
      Contact), STAY UPDATED newsletter (email input + Subscribe button),
      copyright "© 2026 Blastoff. All rights reserved.", legal links
      (Privacy Policy, Terms of Service, Style Guide), social icons (GitHub,
      LinkedIn).
  12. Extras: cookie-consent dialog (Decline / Accept All), back-to-top
      button (fixed bottom-right, primary-600 circle).

- **Design tokens extracted from `Base.Dq6-tIhe.css` + DOM:**
  - Brand color: **#4f46e5** (primary-600; full indigo-derived scale:
    #eef2ff, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4f46e5, #4338ca,
    #3730a3) — primary CTAs, counters, accents, waitlist gradient
    (primary-600 → primary-800).
  - Neutrals (gray scale): #030712, #111827, #1f2937, #374151, #4b5563,
    #6b7280, #9ca3af, #d1d5db, #e5e7eb, #f3f4f6, #f9fafb, #fff. Dark
    surfaces: gray-900 (#111827) footer, gray-950 (#030712) sections,
    gray-800 (#1f2937) cards; dark:primary-400 accents.
  - Font: **"Manrope"** (300–800) via Google Fonts.
  - Shapes: **rounded-lg buttons** (px-6 py-3, text-base font-medium),
    primary filled `bg-primary-600 text-white shadow-lg` / secondary
    outlined `border border-gray-300 bg-white`; **rounded-full** eyebrow
    pills (`bg-primary-100 px-3 py-1 text-sm text-primary-700`), circular
    controls (carousel arrows, back-to-top h-12 w-12, billing switch
    h-7 w-14); cards **rounded-2xl** (`bg-white p-8 shadow-soft` feature
    cards, `ring-1 ring-gray-200` testimonial card).
  - Section backgrounds: hero gradient `from-primary-50 to-white`;
    alternating `bg-gray-50` / `bg-white`; waitlist gradient
    `from-primary-600 to-primary-800`; footer `bg-gray-900`.
  - Dark mode: class-based `dark:` variants everywhere + toggle button
    (`.dark` on document root, `window.localStorage` persistence — see
    Keyhaven pattern in the replication skill).
  - Scroll animations: `data-animate="fade-in-up"` + `data-delay` on
    section headers; count-up on stats band.
- **Visual design (screenshot `launchpad-template-1771943657968.jpg`):**
  original ColorLib design — sticky white nav with rocket logo, center links
  (About, Features, How it works, Pricing, Testimonials, FAQ, Integrations,
  Blog, Changelog, Contact), search + user icons, indigo "Get Early Access"
  button; hero "Ship products smarter than ever" with "smarter" in dark
  indigo and "than ever" in lime-green accent; dashboard analytics mockup
  framed in a soft light-purple rounded shape with drop shadow (floating
  effect); stats row below buttons (2,000+ Users / 99.9% Uptime / $2.5M
  Raised / 4.9 Rating); indigo primary + lime accent + pale periwinkle
  gradient background; pill-shaped buttons in the original (the live Astro
  demo uses rounded-lg — follow the live demo's rounded-lg, keep the
  indigo/lime two-tone headline spirit).
- **Recreation decisions:** dashboard image → seeded picsum placeholder
  (`picsum.photos/seed/blastoff-1/1200/675`); icons → lucide-react (no brand
  icons — use inline SVG simple-icons paths for GitHub/LinkedIn and the
  integration logos); Manrope via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome; count-up + carousel + accordion +
  billing toggle with no extra dependencies.

Blastoff lives in `apps/blastoff` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Blastoff",
anchor links to the page's sections, a "Get Early Access" CTA, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Blastoff page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Blastoff" and links to
  Features, How It Works, Pricing, and Testimonials
- **AND** the navbar SHALL show a "Get Early Access" button and a dark-mode
  toggle button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user presses the "Open menu" button
- **THEN** a slide-down panel SHALL appear with the same navigation links
- **AND** the button SHALL toggle `aria-expanded` and close the panel on a
  second press

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a gradient hero with a badge, a headline, a blurb,
two CTAs, a dashboard image, and a stats row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a badge "Now in Beta — 2,000+ on the waitlist"
  and a level-1 heading "Ship products 10x faster"
- **AND** it SHALL show "Join the Waitlist" and "See it in action" buttons
- **AND** it SHALL show a dashboard image and the stats 2,000+ Beta Users,
  99.9% Uptime, $2.5M Raised, and 4.9 Rating

### Requirement: Stats band

The system SHALL render an animated stats band with four counters.

#### Scenario: Counters content

- **GIVEN** the page is rendered
- **WHEN** the counters band is displayed
- **THEN** it SHALL show counters for Active Users, Uptime, Funding Raised,
  and User Rating
- **AND** the counters SHALL animate from zero to their target values
  (2000+, 99.9%, $2.5M, 4.9)

### Requirement: Features section

The system SHALL render a features section with six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything you need to ship"
- **AND** it SHALL show cards for CI/CD Pipeline, Real-time Analytics,
  Team Collaboration, Auto-scaling, Security First, and Developer API
- **AND** each card SHALL show an icon, a title, and a blurb

### Requirement: How It Works section

The system SHALL render a three-step process section.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "From idea to production in minutes"
- **AND** it SHALL show three numbered steps: 01 Connect, 02 Build, and
  03 Deploy, each with a title and description

### Requirement: Integrations section

The system SHALL render an integrations grid with at least six connected
tools.

#### Scenario: Integrations content

- **GIVEN** the page is rendered
- **WHEN** the integrations section is displayed
- **THEN** it SHALL contain a heading "Works with your favorite tools"
- **AND** it SHALL show GitHub, GitLab, Slack, AWS, Vercel, Docker, Jira,
  and Figma, each with a "Connected" badge

### Requirement: Pricing section

The system SHALL render a pricing section with a billing toggle and three
tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, transparent pricing"
- **AND** it SHALL show Hobby, Startup, and Scale tiers
- **AND** it SHALL show a monthly/yearly billing toggle with a "Save 20%"
  hint

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches the billing toggle to yearly
- **THEN** the prices SHALL update to annual amounts (e.g. Startup $468/year)
- **AND** the toggle SHALL reflect the selected billing period

### Requirement: Testimonials section

The system SHALL render a testimonial carousel with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by fast-moving startups"
- **AND** it SHALL show at least one testimonial quote with the author's
  name, role, and company
- **AND** the user SHALL be able to move between slides with previous/next
  controls

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three accordion
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

#### Scenario: Accordion expand

- **GIVEN** the FAQ section is displayed
- **WHEN** the user presses a question button
- **THEN** the answer SHALL expand below the question
- **AND** pressing the same question again SHALL collapse it

### Requirement: Waitlist call to action

The system SHALL render a closing CTA on a brand gradient with a headline
and a button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the waitlist section is displayed
- **THEN** it SHALL contain a heading "Ready to launch faster?"
- **AND** it SHALL show a "Get Early Access" button and the note "Join
  2,000+ developers already on the waitlist. No credit card required."

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter signup,
and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns PRODUCT, RESOURCES, and COMPANY
- **AND** it SHALL show a newsletter signup with a Subscribe button
- **AND** it SHALL show a copyright line and legal links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Blastoff app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Blastoff — Startup Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh blastoff` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero, stats band,
      features, how-it-works, integrations, pricing, testimonials, faq,
      waitlist, footer)
- [ ] Design tokens in `@theme`: brand indigo `#4f46e5` (+ scale #eef2ff,
      #e0e7ff, #c7d2fe, #a5b4fc, #818cf8, #6366f1, #4338ca, #3730a3), gray
      neutrals, dark surfaces #111827/#030712
- [ ] Font: Manrope (300–800) via Google Fonts
- [ ] Buttons: rounded-lg, primary indigo filled with white text + outline
      secondary; eyebrow pills rounded-full
- [ ] Cards rounded-2xl; waitlist CTA on primary-600→primary-800 gradient;
      footer dark gray-900
- [ ] Dark-mode toggle persists via `window.localStorage` (in-memory Storage
      polyfill in test setup)
- [ ] Count-up stats, testimonial carousel, FAQ accordion, billing toggle
      without extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/blastoff-<n>/<w>/<h>`);
      no copied assets; brand icons as inline SVG (lucide-react has none)
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)

# Template: Zenith (SaaS Product Template)

## Purpose

Zenith is a single-page SaaS product landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Saasify" website template design
(source: https://colorlib.com/wp/template/saasify/), built under a
DIFFERENT name (Zenith — the peak of SaaS productivity) per the monorepo
naming mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-saasify/` (plus `docs/templates/saasify/`) using
> the FORBIDDEN ColorLib source name; both were deleted and replaced by this
> fresh prep (new name Zenith), matching the Cloudnest→Stratos /
> Neuralflow→Sentient / Pipelineiq→Dealflow precedent.

## Design reference (replication findings)

- **Original:** ColorLib "Saasify" — SaaS / software product landing
  website template (source: https://colorlib.com/wp/template/saasify/,
  category "Tailwind CSS / Astro").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/saasify/`) returns 404; the
  ColorLib preview portal hosts the demo at `https://saasify-colorlib.pages.dev/`
  (HTTP 200, ~49 KB HTML + `/_astro/Base.xIhJ7-Et.css` ~47 KB parsed for
  tokens). The TEMPLATES.md screenshot
  (`saasify-template-1770211006733.jpg`) matches this live demo. Same
  Cloudflare-Pages hosting pattern as Logitrans→Freightly / Neuralflow→Sentient.
- **Section order (1:1, from live demo DOM):**
  1. Navbar: "Saasify" logo (icon + wordmark), links Features, Pricing,
     Testimonials, Resources, Documentation, Blog, Help Center, Contact;
     dark-mode toggle button; "Get Started" CTA button (violet).
  2. Hero (light, soft lavender→white gradient): pill badge "New with
     AI-powered automation" (violet), H1 "Build better products, faster
     than ever" ("faster than ever" highlighted in brand violet),
     subtext "The all-in-one platform that helps teams ship quality
     software. Automate workflows, collaborate seamlessly, and scale
     with confidence.", buttons "Start free trial" (primary violet) +
     "Watch demo" (secondary outlined), stats row (10k+ Active users,
     99.9% Uptime SLA, 50+ Integrations, 4.9★ User rating), dashboard
     preview image (dark navy sidebar + white cards: $24,563 Total
     Revenue, 1,234 Active Users, 98.5% Uptime).
  3. Features: "Everything you need to ship faster" — 6 cards (icon
     tile + title + blurb): Workflow Automation, Real-time
     Collaboration, Advanced Analytics, Enterprise Security, API &
     Integrations, 24/7 Support.
  4. Pricing: "Simple, transparent pricing" + subtext "Choose the plan
     that fits your needs. All plans include a 14-day free trial." —
     Monthly/Annual billing toggle ("Save 20%"), 3 tiers: Starter $29
     ("Perfect for small teams getting started", up to 5 team members,
     basic analytics, 10 GB storage, email support, API access, custom
     integrations, "Get started"), Pro $79 ("For growing teams that
     need more", "Most Popular" badge, up to 20 team members, advanced
     analytics, 100 GB storage, priority support, API access, custom
     integrations, "Get started"), Enterprise $199 ("For large
     organizations", billed annually $1908/year, "Contact sales").
     Annual amounts: $276/yr, $756/yr, $1908/yr.
  5. Testimonials: "Loved by teams worldwide" + subtext "See what our
     customers have to say about their experience." — 3 quote cards
     (5 yellow stars each + quote + name + role).
  6. CTA banner: "Ready to transform your workflow?" + subtext "Join
     thousands of teams already using SaaSify to build better products,
     faster." — "Start free trial" + "Contact sales" buttons.
  7. Footer: brand + blurb + social icons, columns PRODUCT (Features,
     Pricing, Integrations, Changelog) / COMPANY (About, Blog, Careers,
     Contact) / LEGAL (Privacy, Terms, Security), STAY UPDATED
     newsletter form (email input + "Subscribe"), copyright "© 2026
     Saasify. All rights reserved." + Privacy Policy / Terms of Service
     links.
  - Extras: skip-to-content link, mobile hamburger menu
    (`data-mobile-toggle` + aria-expanded), dark-mode toggle persisting
    to localStorage, scroll-reveal `fade-in-up` animations.
- **Design tokens extracted from `Base.xIhJ7-Et.css` + DOM:**
  - Brand color: **#7c3aed** (violet-600; scale #f5f3ff, #ede9fe,
    #ddd6fe, #c4b5fd, #a78bfa, #8b5cf6, #6d28d9, #5b21b6, #4c1d95) —
    primary buttons, links, headline accent, badge, feature icons.
  - Neutrals: #fff, #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af,
    #6b7280, #4b5563, #374151, #1f2937, #111827, #030712; light body =
    white bg + #111827 text; dark = #030712/#111827 bg + #f3f4f6 text.
  - Fonts: **"Inter"** (300–800) via Google Fonts; ui-monospace fallback
    for code.
  - Shapes: buttons `border-radius: 0.5rem` (--radius-lg) / pill CTAs,
    px-5 py-2.5 text-sm font-medium; cards rounded-2xl (1rem, `p-8
shadow-soft`); icon tiles rounded-xl (0.75rem, `h-14 w-14 bg-primary-100
text-primary-600`, group-hover flips to `bg-primary-600 text-white`);
    badge pills rounded-full; pricing cards rounded-2xl; star icons
    `h-5 w-5 text-yellow-400`.
  - Buttons: primary bg #7c3aed + white text; secondary = outlined/ghost
    with border + dark text; focus ring 2px.
  - Dark mode: class-based `.dark` on the document root (`.dark` → bg
    #030712, cards #111827/#1f2937, text #f3f4f6/#d1d5db), toggle in
    navbar, persisted to localStorage ("theme" key).
  - Section backgrounds: light hero with soft violet-tinted gradient +
    subtle violet glow, white/gray-50 sections, light CTA (violet tint),
    dark footer (#030712 bg, white/gray headings, gray-400 links).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/zenith-<n>/<w>/<h>`); icons → lucide-react;
  fonts via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome; dashboard preview = a static composed mock panel
  (sidebar + metric cards), no copied assets.

Zenith lives in `apps/zenith` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Zenith",
anchor links to the page's sections, a "Get Started" CTA, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Zenith page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Zenith" and links to
  Features, Pricing, Testimonials, and Contact
- **AND** the navbar SHALL show a "Get Started" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a light hero with a badge, a headline, CTAs, a
stats row, and a dashboard preview.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a pill badge with "New with AI-powered
  automation" and a level-1 heading "Build better products, faster than
  ever"
- **AND** it SHALL show buttons "Start free trial" and "Watch demo"
- **AND** it SHALL show stats including 10k+ Active users and 99.9%
  Uptime SLA
- **AND** it SHALL show a dashboard preview panel

### Requirement: Features section

The system SHALL render a features section with at least six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything you need to ship faster"
- **AND** it SHALL show cards for Workflow Automation, Real-time
  Collaboration, and Advanced Analytics
- **AND** each card SHALL show an icon tile, a title, and a blurb

### Requirement: Pricing section

The system SHALL render a pricing section with a billing toggle and three
tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, transparent pricing"
- **AND** it SHALL show a Monthly/Annual billing toggle with a "Save 20%"
  hint
- **AND** it SHALL show Starter, Pro (with a "Most Popular" badge), and
  Enterprise tiers, each with a price and a CTA

#### Scenario: Billing toggle

- **GIVEN** the pricing section is displayed
- **WHEN** the user switches the billing toggle to Annual
- **THEN** the displayed prices SHALL update to the annual amounts
- **AND** the per-month price SHALL reflect the 20% discount

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quote
cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Loved by teams worldwide"
- **AND** it SHALL show at least three testimonials, each with a 5-star
  rating, a quote, a name, and a role

### Requirement: Call to action

The system SHALL render a closing CTA banner with a headline and buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL contain a heading "Ready to transform your workflow?"
- **AND** it SHALL show "Start free trial" and "Contact sales" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form, and
a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns PRODUCT, COMPANY, and LEGAL
- **AND** it SHALL show a "Stay Updated" newsletter form with an email
  input and a "Subscribe" button
- **AND** it SHALL show a copyright line with Privacy Policy and Terms of
  Service links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Zenith app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Zenith — SaaS Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh zenith` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero, features, pricing,
      testimonials, cta, footer)
- [ ] Design tokens in `@theme`: brand violet `#7c3aed` (+ scale #f5f3ff,
      #ede9fe, #ddd6fe, #c4b5fd, #a78bfa, #8b5cf6, #6d28d9, #5b21b6,
      #4c1d95), gray neutrals
- [ ] Font: Inter via Google Fonts
- [ ] Buttons: rounded-lg (0.5rem), violet primary with white text,
      outlined secondary; cards rounded-2xl; icon tiles rounded-xl with
      primary-100 bg that flips to primary-600 on group-hover; badge pills
      rounded-full; yellow-400 stars
- [ ] Hero light with soft violet-tinted gradient; footer dark (#030712)
- [ ] Dark mode: class-based `.dark` (bg #030712, text #f3f4f6), toggle
      in navbar, persisted to localStorage
- [ ] Interactive behaviors: billing toggle (monthly ↔ annual with 20%
      savings), mobile menu (aria-expanded), scroll-reveal fade-in-up — no
      extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/zenith-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)

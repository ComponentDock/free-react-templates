# Template: Nimbus (Cloud Platform Landing Template)

## Purpose

Nimbus is a single-page cloud platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cloudnest" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cloudnest" — developer-focused cloud platform
  landing template (source: https://colorlib.com/wp/template/cloudnest/).
- **Preview URL:** `https://preview.colorlib.com/theme/cloudnest/` returns
  HTTP 404 (confirmed 2026-08-08). The live rendered demo is hosted by the
  ColorLib preview portal on Cloudflare Pages:
  `https://cloudnest-colorlib.pages.dev/` (HTTP 200, ~59 KB HTML + Astro
  stylesheet `/_astro/Base.CdYQQ8EO.css` ~65 KB parsed for tokens).
  TEMPLATES.md screenshot (`cloudnest-template-1771944017064.jpg`, 2400×1892)
  viewed in the browser as the visual reference; the pages.dev demo matches
  the screenshot 1:1.
- **Visual design (from screenshot + live demo):** modern developer-SaaS
  aesthetic (Vercel/Linear/Supabase vibe). Dark hero: deep navy/near-black
  gradient with a terminal window mock (macOS traffic-light dots, green
  `cloudnest deploy` success output). Electric indigo accents. White/light
  gray body sections. Bold indigo CTA gradient band before a dark footer
  with a faint grid pattern.
- **Section order (1:1):**
  1. Navbar (sticky): logo "CloudNest" left; links Products (→ #services),
     Pricing, About, Blog, Contact; dark-mode toggle button; primary pill
     "Get Started Free" right. Mobile hamburger menu with the same links.
  2. Hero (`section.relative.overflow-hidden.bg-gradient-to-br.from-gray-950
.via-primary-950.to-gray-950`): pill badge "Trusted by 10,000+
     developers worldwide"; H1 "Deploy at the <typewriter word>" where the
     word cycles Edge/Scale/Cloud with `bg-gradient-to-r from-primary-400
to-accent-400 bg-clip-text text-transparent`; sub-paragraph
     "The developer-first cloud platform for deploying, scaling, and
     managing modern applications. Push your code and let CloudNest handle
     the rest."; primary CTA "Start Deploying Free" (→ /pricing) + ghost
     CTA "View Documentation" (→ #services); right column terminal mock
     (`Authenticated as hello@cloudnest.dev`, `Running health checks...`,
     `Deployment successful!`, `URL: https://myapp.cloudnest.app`,
     `Latency: <50ms globally`); stats row: 500K+ Deployments, 40+ Global
     Regions, 99.99% Uptime SLA, <50ms Global Latency (animated counters).
  3. Features (`section.border-y.border-gray-200.bg-gray-50 py-16 lg:py-20
dark:border-gray-800 dark:bg-gray-900`): eyebrow badge "Products", H2
     "Everything You Need to Ship", 6 cards in a grid: App Hosting, Managed
     Databases, Edge Functions, Object Storage, Container Registry, Load
     Balancing (icon + title + blurb each).
  4. Testimonials (`section.bg-gray-50 py-20 lg:py-28 dark:bg-gray-900`):
     H2 "Loved by Developers" + sub "See what engineering teams around the
     world say about building on CloudNest."; carousel of 6 quotes (Sarah
     Chen / CTO DataStream, Marcus Rodriguez / Lead Engineer Fintech Labs,
     Aisha Patel / VP Engineering NovaTech, + 3 more), round prev/next
     arrow buttons + dot pagination.
  5. FAQ (`section.bg-gray-50 py-20 lg:py-28 dark:bg-gray-900`): H2
     "Frequently Asked Questions", 5 accordion items: What frameworks and
     languages does CloudNest support? / How does pricing work? / What is
     your uptime guarantee? / Can I migrate from my current provider? / How
     do you handle security and compliance? (expand/collapse chevron).
  6. CTA band (`section.relative.overflow-hidden.bg-gradient-to-br.from-
primary-600.to-primary-800 py-20 lg:py-28`): H2 "Ready to Ship
     Faster?" + primary "Get Started Free" + ghost "Talk to Sales".
  7. Footer (dark): brand blurb + contact (phone (555) 456-7890, email
     hello@cloudnest.dev, address 800 NW 6th Ave, Portland, OR 97209) +
     social icons (GitHub, Twitter, LinkedIn); 3 link columns — PRODUCTS
     (Hosting, Databases, Edge Functions, Object Storage), DEVELOPERS
     (Documentation, API Reference, CLI, Status), COMPANY (About, Blog,
     Careers, Contact); legal row (Privacy Policy, Terms of Service, Style
     Guide).
  8. Extras: cookie-consent dialog (Decline / Accept All), "Back to top"
     floating round button (bottom-right), dark-mode toggle.
- **Design tokens extracted from the demo CSS (`Base.CdYQQ8EO.css`, Tailwind
  v4 utilities):**
  - Brand primary (indigo scale, Tailwind `indigo`): **primary-400 #818cf8**,
    **primary-500 #6366f1**, **primary-600 #4f46e5** (main CTA/brand color —
    use in `@theme` as `--color-primary-*` or map to indigo),
    **primary-700 #4338ca**, **primary-100 #e0e7ff**, **primary-200 #c7d2fe**,
    **primary-300 #a5b4fc**, primary-800/900/950 (darker, used in hero
    gradient `via-primary-950` and CTA gradient `from-primary-600
to-primary-800`).
  - Accent (sky): **accent-400 #38bdf8** (hero gradient word end,
    `to-accent-400`), accent-500 #0ea5e9.
  - Grays: **gray-50 #f9fafb** (light section bg), **gray-100 #f3f4f6**,
    **gray-200 #e5e7eb** (section borders), **gray-300 #d1d5db** (ghost
    button borders), **gray-400 #9ca3af**, **gray-500 #6b7280** (muted
    text), **gray-600 #4b5563**, **gray-700 #374151**, **gray-800 #1f2937**,
    **gray-900 #111827** (dark section bg), **gray-950 #030712** (hero
    gradient end).
  - Font: **"DM Sans"** (Google Fonts, weights 300/400/500/600/700/800 —
    loaded via `<link>` in the demo; use the same Google Fonts link in
    `index.html`). Body text sizes: hero H1 `text-4xl sm:text-5xl lg:text-6xl
font-bold tracking-tight`, nav links `text-sm font-medium`, body `text-
base`, stats `text-3xl font-bold`.
  - Buttons: primary = `rounded-lg bg-primary-600 px-5 py-2.5 text-sm
font-medium text-white` with hover darkening (hover:bg-primary-700);
    ghost/secondary = `inline-flex items-center justify-center gap-2
rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium` (dark
    mode: `border-gray-700`). Nav CTA pill same primary style. Radius
    **rounded-lg (0.5rem)** for buttons/cards; **rounded-full** for carousel
    arrows, back-to-top, avatar initials.
  - Section backgrounds: hero dark gradient `from-gray-950 via-primary-950
to-gray-950`; light sections `bg-gray-50` / `bg-white` with `dark:bg-
gray-900` / `dark:bg-gray-950`; CTA band gradient `from-primary-600
to-primary-800`; footer dark gray/primary-950.
  - Cards: features cards white bg, `rounded-lg`/`rounded-xl`, border
    `border-gray-200`, icon in `bg-primary-600/5` or `bg-primary-500/10`
    rounded tile; testimonial cards white with quote + avatar initials circle
    (gradient `from-primary-500 to-accent-500`).
- **Recreation decisions:** the demo is a multi-page Astro site (/pricing,
  /about, /blog, /contact, /services exist) — the recreation is single-page,
  so non-home routes become anchor links: Products/View Documentation → the
  features section (`#services`), Pricing → the CTA/FAQ area or `#pricing`
  anchor, About/Blog/Contact → `#` placeholder links kept in the navbar and
  footer; the hero typewriter (Edge/Scale/Cloud) becomes a small
  state-driven word rotator or a static gradient word; animated stat counters
  (0 → value) via a simple IntersectionObserver/in-view hook; testimonial
  carousel = state-driven slider with prev/next + dots; FAQ accordion =
  state-driven expand/collapse with chevron rotation and `aria-expanded`;
  cookie-consent dialog = dismissible banner with Decline/Accept All; logo →
  text wordmark "Nimbus" with a lucide Cloud icon; photos/avatars → seeded
  picsum placeholders (`picsum.photos/seed/nimbus-<n>/<w>/<h>`) or initial
  letter circles; icons → lucide-react (Cloud, ArrowRight, BookOpen, Moon,
  Sun, Menu, X, Phone, Mail, MapPin, Github, Twitter, Linkedin, ChevronDown,
  ChevronLeft, ChevronRight, ArrowUp, Check, Sparkles, Database, Server,
  Boxes, Container, Scale, Shield); no assets copied; brand indigo #4f46e5 in
  `@theme`.

Nimbus lives in `apps/nimbus` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site
wordmark, anchor links, a dark-mode toggle, and a primary CTA button.

#### Scenario: Navbar content

- **GIVEN** the Nimbus page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Nimbus" on the left
- **AND** SHALL show links for Products, Pricing, About, Blog and Contact
- **AND** SHALL show a "Get Started Free" primary button on the right
- **AND** SHALL show a dark-mode toggle button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible menu SHALL show the same nav links
- **AND** the toggle SHALL expose the menu state via aria-expanded

#### Scenario: Accessible controls

- **GIVEN** the navbar is displayed
- **WHEN** the user tabs through the page
- **THEN** all nav links and controls SHALL be keyboard-focusable
- **AND** icon-only controls SHALL have aria-labels

### Requirement: Hero section

The system SHALL render a full-width dark-gradient hero with a badge, a
headline, a sub-paragraph, two CTAs, a terminal graphic and a stats row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the badge "Trusted by 10,000+ developers worldwide"
- **AND** SHALL show a level-1 heading starting with "Deploy at the"
- **AND** SHALL show the sub-paragraph about the developer-first cloud
  platform
- **AND** SHALL show a primary CTA "Start Deploying Free" and a secondary
  CTA "View Documentation"

#### Scenario: Terminal graphic

- **GIVEN** the hero is displayed
- **WHEN** the right column is inspected
- **THEN** a terminal-style graphic SHALL be shown with deployment output
  (authenticated line, health checks, "Deployment successful!", app URL,
  latency)

#### Scenario: Stats row

- **GIVEN** the hero is displayed
- **WHEN** the stats row is inspected
- **THEN** four statistics SHALL be shown: 500K+ Deployments, 40+ Global
  Regions, 99.99% Uptime SLA and <50ms Global Latency

### Requirement: Features section

The system SHALL render a "Products" eyebrow with the heading "Everything
You Need to Ship" and a grid of six feature cards.

#### Scenario: Feature grid

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a "Products" eyebrow badge and the heading
  "Everything You Need to Ship"
- **AND** SHALL show six cards titled App Hosting, Managed Databases, Edge
  Functions, Object Storage, Container Registry and Load Balancing
- **AND** each card SHALL show an icon and a short blurb

### Requirement: Testimonials section

The system SHALL render a "Loved by Developers" carousel with at least
four testimonial slides, navigation arrows and dot pagination.

#### Scenario: Testimonial carousel

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Loved by Developers"
- **AND** SHALL show a testimonial quote with an author name and role
- **AND** SHALL show previous/next controls and dot indicators

#### Scenario: Navigating slides

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates the next or previous control
- **THEN** the visible quote SHALL change to the adjacent slide
- **AND** the active dot SHALL reflect the current slide

### Requirement: FAQ section

The system SHALL render a "Frequently Asked Questions" accordion with five
expandable items.

#### Scenario: FAQ accordion

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Frequently Asked Questions"
- **AND** SHALL list five questions (frameworks support, pricing, uptime
  guarantee, migration, security and compliance)

#### Scenario: Expanding an item

- **GIVEN** the FAQ accordion is displayed
- **WHEN** the user activates a question button
- **THEN** the answer SHALL expand below it
- **AND** the button SHALL reflect the open state via aria-expanded

### Requirement: CTA band

The system SHALL render a gradient call-to-action band with a headline and
two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the heading "Ready to Ship Faster?"
- **AND** SHALL show a "Get Started Free" button and a "Talk to Sales"
  button

### Requirement: Footer

The system SHALL render a dark footer with brand info, contact details,
social links, three link columns and legal links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb, phone, email and address
- **AND** SHALL show social links (GitHub, Twitter, LinkedIn)
- **AND** SHALL show three columns: Products, Developers, Company
- **AND** SHALL show legal links (Privacy Policy, Terms of Service, Style
  Guide)

### Requirement: Dark mode

The system SHALL support a class-based dark mode that toggles `.dark` on
the document root and persists the choice.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** section backgrounds SHALL switch to the dark variants

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a
main landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Nimbus app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Nimbus — Cloud Platform Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/nimbus`
- [ ] `npm run lint` passes for `apps/nimbus`
- [ ] `scripts/verify-app.sh nimbus` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: wordmark, 5 links, dark-mode toggle, "Get Started Free"
      button, mobile menu
- [ ] Hero: badge, H1 with gradient word, sub-paragraph, 2 CTAs, terminal
      graphic, 4 stats
- [ ] Features: 6 cards with icon + title + blurb
- [ ] Testimonials: carousel with prev/next + dots, ≥4 quotes
- [ ] FAQ: 5 accordion items expand/collapse with aria-expanded
- [ ] CTA band: heading + 2 buttons
- [ ] Footer: brand, contact, socials, 3 columns, legal links
- [ ] Dark mode toggles `.dark` and persists
- [ ] Placeholder images via seeded picsum (`seed/nimbus-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; brand indigo #4f46e5 in `@theme`

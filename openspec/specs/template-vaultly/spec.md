# Template: Vaultly (AI Fintech Template)

## Purpose

Vaultly is a single-page AI financial advisor / fintech landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wealthwise" website template design
(source: https://colorlib.com/wp/template/wealthwise/, slug `wealthwise`), built
under a DIFFERENT name (Vaultly — evokes a wealth "vault", fitting a fintech
brand) per the monorepo naming mandate, with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript. The source demo's in-page product brand
("Finley", the fictional AI assistant) is kept as-is for fidelity.

## Design reference (replication findings)

- **Original:** ColorLib "Wealthwise" — free AI financial advisor / fintech
  app landing template (TEMPLATES.md category: Astro). The official preview
  page `https://preview.colorlib.com/theme/wealthwise/` returns **404 "Not
  Found"**, but the ColorLib preview hub
  (`preview.colorlib.com/assets/js/products.js`) maps the slug to a REACHABLE
  Cloudflare Pages demo: **`https://wealthwise-colorlib.pages.dev/`** — the
  current official Astro rebuild of the same design. All DOM structure, copy,
  and tokens below are extracted from that live demo (real values, not
  approximations; verified 2026-08-09: HTML 80,950 bytes + stylesheet
  `/_astro/Base.DLOtl97a.css`, 63,714 bytes), cross-checked against the
  TEMPLATES.md screenshot (`wealthwise-template-1770211049269.jpg`).
- **Visual design (screenshot + live demo):** modern, clean fintech landing
  on a **purple + teal** palette. Fixed navbar with backdrop blur; hero with
  a large bold headline, two CTAs, a stats row (Assets Advised, Happy Users,
  App Rating) and an **AI chat mockup** ("Finley — Online, Ready to help"
  with sample messages and a "Message Finley anything about your
  finances..." input); 6-card features grid; 4-step "How it works"; a mock
  **dashboard** panel (Total Net Worth `$127,450.32`, Portfolio Rebalanced,
  VTI Dividend, tabs Portfolio Allocation / Goals / Recent Activity); 3
  testimonials; 3-plan pricing; 6-item FAQ accordion; gradient CTA band;
  light footer. **Dark mode supported** (navbar toggle flips `dark:`
  variants).
- **Section order (1:1 from the live demo DOM):**
  1. **Navbar** (`fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur`
     container `h-16 lg:h-20`): logo wordmark **"Finley"** (bold, brand
     purple; chat-bot/logo mark); links **Features, How It Works, Pricing,
     About**; right actions: "Log In" (ghost) + "Get Started Free"
     (purple button) + dark-mode toggle + mobile menu button
     (`aria-label="Open menu"`, `aria-expanded`).
  2. **Hero** (`pt-32 pb-20 lg:pt-40`): H1 **"Your Personal AI Financial
     Advisor"** (large bold, tight tracking, brand-purple accent word),
     blurb (AI + human expertise; SEC-registered fintech), CTA row: solid
     purple **"Start Free Trial"** + secondary outline **"See How It
     Works"**; stats row (3): **Assets Advised, Happy Users, App Rating**
     (big numbers + labels); right/under: **AI chat mockup** card
     (`rounded-2xl border bg-white shadow-2xl`): header "Finley — Online,
     Ready to help" (avatar + status dot), message bubbles ("Finley analyzes
     thousands of scenarios to create...", "Finley combines AI intelligence
     with proven fi[nancial strategies]..."), suggestion chips, input row
     "Message Finley anything about your finances..." + send button.
  3. **Features** (`bg-gray-50 py-24`): eyebrow + heading **"Everything You
     Need to Build Wealth"** + sub; grid `sm:grid-cols-2 lg:grid-cols-3` of
     **6 cards** (icon + title + description): 24/7 AI Advisor, Smart
     Portfolio Management, Goal-Based Planning, Bank-Level Security, Tax
     Optimization, Proactive Alerts.
  4. **How it works** (`bg-white py-24`): heading **"Get Started in
     Minutes"** + sub; **4 steps** (numbered): Connect Your Accounts, Tell
     Finley Your Goals, Get Your Personalized Plan, Automate & Grow; CTA
     button "Start Your Free Trial".
  5. **Dashboard preview** (`bg-gray-50 py-24`): heading **"Your Complete
     Financial Picture"** + sub; mock dashboard panel: sidebar/tabs
     (Portfolio Allocation, Goals, Recent Activity), net-worth stat
     **Total Net Worth `$127,450.32`** (+24.5% badge), rows "Portfolio
     Rebalanced", "VTI Dividend" with amounts, mini chart/bars.
  6. **Testimonials** (`bg-white py-24`): heading **"Loved by 150,000+
     Users"**; **3 quote cards** (5 stars, quote, avatar initial, name, role):
     Sarah Chen, Marcus Johnson, Emily Rodriguez.
  7. **Pricing** (`bg-gray-50 py-24`): heading **"Simple, Transparent
     Pricing"**; **3 plans**: Free ("Free forever with limited AI chats and
     ..." — $0), Plus (popular/most-chosen, highlighted border/badge),
     Premium (everything + human advisor); each with feature list + CTA
     button.
  8. **FAQ** (`bg-white py-24`): heading **"Frequently Asked Questions"**;
     **6 accordion items** (button + chevron, expands answer): "How does the
     AI financial advisor work?", "Is my financial data secure?", "What's
     the difference between Finley and a robo-advisor?", "Can I talk to a
     human advisor?", "What happens to my existing investments?", "Can I
     cancel my free trial anytime?"; below: "Still have questions? Contact
     support" link.
  9. **CTA band** (`bg-gradient-to-br from-primary-600 to-primary-800
py-24 text-white`): heading **"Ready to Take Control of Your
     Finances?"** + sub; buttons: white "Start Free Trial" + outline "Talk
     to Sales"; reassurance line: "30-day free trial • No credit card
     required • Cancel anytime".
  10. **Footer** (`border-t bg-gray-50 py-16`): brand column ("Finley"
      wordmark + blurb + Finley Advisors LLC, an SEC-registered
      investment adviser note) + **4 link columns: Product, Company,
      Resources, Legal**; bottom bar copyright.

- **Design tokens (extracted from the live demo's CSS
  `/_astro/Base.DLOtl97a.css` — real values):**
  - Brand **primary = purple `#6d49f4`** (buttons, logo, links, gradient
    start) with dark shades **`#260c66`**, **`#11023a`** (deep navy-purple
    dark-mode backgrounds); alpha uses `#6d49f433` / `#6d49f41a` /
    `#6d49f440` (glows, soft bgs) and `#260c6680` (overlays).
  - Secondary **teal = `#00978a`** (accent text/icons, success states) with
    dark **`#00322d`**; alpha `#00978a33` / `#00978a1a`.
  - Neutrals: white `#fff`; gray scale `#f3f4f6` (gray-100 section bgs,
    borders), `#e5e7eb`, `#d1d5db`, `#9ca3af` (placeholder), `#6b7280`,
    `#4b5563`, `#374151`, `#1f2937`, `#111827`, `#030712` (dark bgs).
  - Fonts (Google Fonts `css2?family=Inter:wght@400;500;600;700&family=
JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700;
800`): **"Plus Jakarta Sans"** (display/headings, `--font-display`),
    **Inter** (body, `--font-sans`), **JetBrains Mono** (`--font-mono` —
    numeric/dashboard figures).
  - Buttons: primary purple, `rounded-lg`-ish pill (`border-radius:.25rem`
    - `var(--tw-radius)` family), padding `px-5 py-2.5` (nav) / `px-8
py-4` (hero, CTA); hover darkens (primary-700-ish `#5b3ee0`-family);
      shadow `shadow-lg shadow-primary-600/25`.
  - Cards/radii: chat mockup + dashboard `rounded-2xl border shadow-2xl`
    (or `rounded-xl`), feature cards `rounded-xl`, inputs `rounded-lg`,
    FAQ rows bordered, pricing featured plan with purple border + badge.
  - Rhythm: sections `py-24`, container `mx-auto max-w-7xl px-4 sm:px-6
lg:px-8`, section backgrounds alternate **gray-50 / white** (hero and
    CTA band on white; CTA band is a purple gradient), footer `bg-gray-50
border-t`.
  - Dark mode: navbar toggle flips `.dark` on `document.documentElement`,
    persisted in `localStorage` key `theme`; surfaces use `dark:bg-gray-900`
    / `dark:bg-gray-950` variants.
- **Recreation decisions:** photos/avatars → seeded picsum placeholders
  (`picsum.photos/seed/vaultly-<n>/<w>/<h>`; chat/dashboard mockups are
  pure CSS/JSX — no images needed); icons → lucide-react (Bot/MessageSquare
  for the logo mark, TrendingUp, Target, ShieldCheck, Receipt, Bell, Link2,
  LayoutDashboard, Star, ChevronDown, Sparkles, LineChart, Wallet, PiggyBank,
  Moon, Sun, Menu, X — VERIFY exports); Plus Jakarta Sans + Inter + JetBrains
  Mono via Google Fonts `<link>`; dark mode = `dark:` variants + toggle
  flipping `.dark`, persisted via `window.localStorage` (Keyhaven pattern —
  jsdom 30 has no localStorage, use the in-memory Storage polyfill in
  `src/test/setup.ts`); FAQ accordion = buttons with `aria-expanded` +
  chevron rotation; "Log In" / "See How It Works" / footer links anchor to
  `#`/inert placeholders (single-page landing per repo convention); chat
  mockup is static (no backend).

Vaultly lives in `apps/vaultly` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the site name
"Finley", anchor links to the page's sections, a "Get Started Free" button,
a "Log In" link, and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Vaultly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Finley" and links to
  Features, How It Works, Pricing, and About
- **AND** the navbar SHALL show a "Log In" link, a purple "Get Started Free"
  button, and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the choice SHALL persist across reloads (via `window.localStorage`)

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** a menu SHALL expand listing the nav links
- **AND** the button SHALL reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, two
call-to-action buttons, a stats row, and an AI chat mockup.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Your Personal AI Financial
  Advisor"
- **AND** it SHALL show a supporting blurb about AI + human financial
  expertise
- **AND** it SHALL show "Start Free Trial" (solid brand purple) and "See How
  It Works" (outline) buttons

#### Scenario: Hero stats

- **GIVEN** the hero is displayed
- **WHEN** the user views the stats row
- **THEN** three stats SHALL show: Assets Advised, Happy Users, and App
  Rating, each with a large number and a label

#### Scenario: Chat mockup

- **GIVEN** the hero is displayed
- **WHEN** the user reviews the hero
- **THEN** it SHALL show an AI chat mockup card with an "Online" status
  header naming the assistant (Finley)
- **AND** the mockup SHALL show at least two sample message bubbles and an
  input row placeholder "Message Finley anything about your finances..."

### Requirement: Features section

The system SHALL render a features section with six cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Build Wealth"
- **AND** it SHALL show cards for 24/7 AI Advisor, Smart Portfolio
  Management, Goal-Based Planning, Bank-Level Security, Tax Optimization,
  and Proactive Alerts
- **AND** each card SHALL show an icon, a title, and a description

### Requirement: How it works section

The system SHALL render a how-it-works section with four steps.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "Get Started in Minutes"
- **AND** it SHALL show the four steps: Connect Your Accounts, Tell Finley
  Your Goals, Get Your Personalized Plan, and Automate & Grow
- **AND** a "Start Your Free Trial" button SHALL appear below the steps

### Requirement: Dashboard preview

The system SHALL render a dashboard preview with tabs and a net worth figure.

#### Scenario: Dashboard content

- **GIVEN** the page is rendered
- **WHEN** the dashboard section is displayed
- **THEN** it SHALL contain a heading "Your Complete Financial Picture"
- **AND** it SHALL show tabs for Portfolio Allocation, Goals, and Recent
  Activity
- **AND** it SHALL show a Total Net Worth figure (e.g. `$127,450.32`) with
  an activity row such as "Portfolio Rebalanced" and "VTI Dividend"

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Loved by 150,000+ Users"
- **AND** it SHALL show at least three testimonial quotes (e.g. Sarah Chen,
  Marcus Johnson, Emily Rodriguez), each with stars, quote, name, and role

### Requirement: Pricing section

The system SHALL render a pricing section with three plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, Transparent Pricing"
- **AND** it SHALL show plans for Free, Plus, and Premium with feature lists
- **AND** the Plus plan SHALL be visually highlighted (badge/border) as the
  popular choice

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least six question items (e.g. "How does the AI
  financial advisor work?", "Is my financial data secure?", "Can I talk to
  a human advisor?")
- **AND** a "Still have questions? Contact support" link SHALL appear below
  the items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed
- **AND** the item SHALL reflect the expanded state via `aria-expanded`

### Requirement: Call to action

The system SHALL render a closing gradient CTA band with a headline and two
buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL use a purple gradient background with white text
- **AND** it SHALL contain a heading "Ready to Take Control of Your
  Finances?"
- **AND** it SHALL show "Start Free Trial" and "Talk to Sales" buttons
- **AND** a reassurance line SHALL read "30-day free trial • No credit card
  required • Cancel anytime"

### Requirement: Footer

The system SHALL render a footer with a brand column, link columns, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand column ("Finley" wordmark + blurb +
  SEC-registered note)
- **AND** it SHALL show link columns Product, Company, Resources, and Legal
- **AND** it SHALL show a copyright line in the bottom bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Vaultly app is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Vaultly — AI Financial Advisor"
- **AND** sections SHALL render in the exact order: Navbar → Hero →
  Features → How It Works → Dashboard Preview → Testimonials → Pricing →
  FAQ → CTA → Footer

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-vaultly`
- [ ] TDD: tests written before components, one `describe` per component,
      scenario `it` blocks mirroring the spec scenarios
- [ ] `scripts/verify-app.sh vaultly` passes (typecheck + lint + 100% coverage
      tests + build)
- [ ] Fidelity: section order 1:1 with the reference above (navbar → hero →
      features → how-it-works → dashboard → testimonials → pricing → FAQ →
      CTA → footer); brand tokens from this spec (purple `#6d49f4` primary
      with dark `#260c66`/`#11023a`, teal `#00978a` secondary, gray scale,
      Plus Jakarta Sans display + Inter body + JetBrains Mono, `rounded-lg`
      CTAs, `py-24` rhythm, alternating gray-50/white sections, purple
      gradient CTA band) in `@theme`
- [ ] Official `preview.colorlib.com/theme/wealthwise/` returns 404; reference
      used = the reachable official Cloudflare Pages demo
      `https://wealthwise-colorlib.pages.dev/` (same design; content matches
      the TEMPLATES.md screenshot) — PR description must state this per
      docs/replication.md
- [ ] Dark mode present (live demo has a toggle + `dark:` variants), persisted
      via `window.localStorage` with the in-memory Storage polyfill in
      `src/test/setup.ts` (jsdom 30)
- [ ] FAQ accordion expands/collapses with `aria-expanded`; chat mockup and
      dashboard are static CSS/JSX (no backend, no copied assets); images are
      picsum placeholders; icons from lucide-react (VERIFY exports); no new
      dependencies
- [ ] PR description states: source template (ColorLib "Wealthwise", slug
      `wealthwise`), preview URL, design tokens used, renames (Vaultly,
      placeholder images), and the pages.dev-reference note
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in TEMPLATES.md,
      `npm run readme:status`

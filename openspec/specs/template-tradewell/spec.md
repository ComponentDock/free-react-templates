# Template: Tradewell (Fintech / SaaS Landing)

## Purpose

Tradewell is a single-page investing/trading platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Investpro" website template design, built under a NEW name
(Tradewell — the ColorLib source name is never reused) with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict), 100% test
coverage.

- **Source:** https://colorlib.com/wp/template/investpro/
- **Preview URL:** https://investpro-colorlib.pages.dev/ (the ColorLib preview
  portal `https://preview.colorlib.com/theme/investpro/` returns 404; per
  `preview.colorlib.com/assets/js/products.js` this demo is hosted on
  Cloudflare Pages at `<slug>-colorlib.pages.dev`).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/investpro-template-1770211264537.jpg

## Design reference (replication findings)

- **Live demo DOM analyzed:** https://investpro-colorlib.pages.dev/ (HTTP 200).
  Full HTML + stylesheet fetched and parsed; all tokens and section content
  below are extracted from the real render, not inferred.
- **Stack of the original:** Astro + Tailwind (classes visible in the DOM);
  we recreate the design, never copy assets/CSS.

### Design tokens (extracted from demo stylesheet `/_astro/Base.eMwR1-en.css`)

- **Fonts** (Google Fonts, one `<link>` in index.html):
  - Display/headings: **"Plus Jakarta Sans"** (500–800)
  - Body: **"Inter"** (400–700)
  - Numbers/mono: **"JetBrains Mono"** (400–600)
- **Primary (brand blue)** — Tailwind-style `--color-primary-*` scale, hue 250
  in oklch: `primary-500: oklch(55% .15 250)`, `primary-600: oklch(48% .15 250)`,
  `primary-700: oklch(40% .12 250)`, `primary-950: oklch(18% .05 250)`.
  Approximate hex for the 500–600 range: a saturated medium blue (~#2f6af0
  family; treat the oklch values as authoritative).
- **Accent (green, gains/success)** — hue 155: `accent-500: oklch(65% .18 155)`,
  `accent-600: oklch(55% .16 155)`. Used for the "$0 Commission Trading" badge
  and positive market moves.
- **Danger (red, losses)** — `danger-500: oklch(58% .2 25)` (hue 25). Used for
  negative market moves in the ticker.
- **Neutrals** — Tailwind gray scale (hue 260 oklch): `gray-50: oklch(98% .004 260)`,
  `gray-100: oklch(96% .006 260)`, `gray-500: oklch(55% .008 260)`,
  `gray-900: oklch(16% .003 260)`, `gray-950: oklch(10% .002 260)`.
- **Buttons** (`.btn-primary`): `background: linear-gradient(135deg, primary-500,
primary-600)`, white text, `font-weight: 600`, `rounded-xl`, generous
  horizontal padding (px-8 on hero CTA), hover shifts gradient to 400→500 and
  adds `box-shadow: 0 4px 20px -4px primary-500`. A green variant
  (`.btn-accent`, accent-500→600) exists for success actions; hero secondary
  CTA is an outline/ghost "Watch Demo" button.
- **Cards:** `rounded-xl`/`rounded-lg` white cards on gray-50 sections, soft
  drop shadow for stat cards; `rounded-full` pills for badges.
- **Section backgrounds:** alternating `white` / `gray-50`; the Security
  section is a **dark navy block** (`bg-primary-950`); footer is gray-50 with a
  top border. Dark mode flips sections to `gray-900`/`gray-950`.
- **Ticker:** a scrolling marquee bar (`.ticker-animate`, `flex gap-8 py-2`)
  at the very top of the page with stock symbols + prices + green/red %
  changes, duplicated content for a seamless loop.

### Visual design (from TEMPLATES.md screenshot)

Light SaaS/fintech aesthetic: near-white background with a faint grid overlay,
vibrant blue primary, green for positive financial indicators. Hero is a
split layout: left = green pill badge ("$0 Commission Trading"), large bold
headline ("Invest Smarter, **Trade Better**" — second phrase in blue),
subheadline, primary "Start Investing" + outline "Watch Demo" buttons, avatar
stack + 5 stars + "4.9/5 from 50K+ reviews". Right = realistic phone mockup
showing portfolio $47,382.54, a line chart, and holdings (AAPL, BTC, NVDA,
SPY) with green gains, plus floating notification bubbles ("Order Filled:
Bought 5 TSLA", "Disbursed $42.39 AAPL"). Below the fold: a row of four white
stat cards (12M+ Active Investors, $180B+ Assets Under Custody, 5M+ Trades
Executed Daily, 50+ Countries Supported). Navbar has a live "Markets Open"
status dot.

### Section order (1:1, verified from the demo DOM)

1. **Ticker bar** — scrolling market quotes (SPY $587.42 +0.72%, QQQ $518.91
   +1.54%, BTC $104,892 +2.28%, ETH $3,342 −1.33%, AAPL $227.63 +1.39%, TSLA
   $424.07 −2.06%, NVDA $137.71 +4.11%, DIA $437.89 +0.36%, looping).
2. **Navbar** — logo, links (Invest, Markets, Pricing, Learn, About), "Markets
   Open" status, "Log in" link, "Get Started" primary button; dark-mode toggle
   (repo-standard).
3. **Hero** — "Invest Smarter, Trade Better" + "$0 Commission Trading" pill +
   subtext + "Start Investing" (primary) / "Watch Demo" (outline) + social
   proof (4.9/5 from 50K+ reviews) + phone mockup with portfolio widget +
   floating order notifications.
4. **Stats strip** — 4 stat cards: 12M+ Active Investors, $180B+ Assets Under
   Custody, 5M+ Trades Executed Daily, 50+ Countries Supported.
5. **Features** — "Everything You Need to Invest Confidently": 8 cards
   (Commission-Free Trading, Fractional Shares, Instant Deposits, Professional
   Research, Award-Winning App, Bank-Level Security, Developer API, Tax
   Optimization).
6. **Markets** — "Trade Multiple Asset Classes": 6 cards (Stocks, ETFs, Crypto,
   Options, Bonds, Futures).
7. **Security** — dark navy section "Your Assets Are Protected & Secure": 6
   cards (SIPC Protected, FDIC Insured Cash, 256-bit Encryption, Two-Factor
   Auth, SEC Registered, 24/7 Monitoring).
8. **Pricing** — "Simple, Transparent Pricing": 3 tiers (Basic, Pro, Premium)
   with feature lists + "Start Pro Trial" CTA.
9. **Testimonials** — "Loved by 12 Million+ Investors": 6 quote cards with
   metrics (Portfolio Growth +47%, Trades/Month 500+, Clients Referred 200+,
   Crypto Holdings $85K, Tax Savings $3,200, Win Rate 68%).
10. **FAQ** — "Frequently Asked Questions": 8 accordion questions (free?,
    money protection, portfolio transfer, fractional shares, retirement
    accounts, deposit speed, crypto, API).
11. **CTA** — "Ready to Start Building Wealth?" + "Get Started Free" button.
12. **Footer** — Products / Company / Resources columns + copyright.

### Recreation decisions

- Photos → seeded picsum placeholders (`picsum.photos/seed/tradewell-<n>/<w>/<h>`).
- Icons → lucide-react; brand icons (social) → inline SVG (simple-icons paths),
  never lucide brand icons (removed).
- Fonts → Google Fonts `<link>` in index.html (Plus Jakarta Sans, Inter,
  JetBrains Mono).
- Copy may be paraphrased but keeps the same kind of content (fintech copy,
  ticker symbols/prices as static demo data).
- Repo-standard Navbar (dark-mode toggle, `window.localStorage` persistence
  with in-memory Storage polyfill in test setup) + Footer chrome from
  `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Market ticker

The system SHALL render a scrolling ticker bar at the top of the page with
stock symbols, prices, and percentage changes.

#### Scenario: Ticker content

- **GIVEN** the Tradewell page is rendered
- **WHEN** the page loads
- **THEN** the ticker SHALL show at least four stock symbols with prices
- **AND** each quote SHALL show a percentage change styled green for gains and
  red for losses

#### Scenario: Ticker animation

- **GIVEN** the ticker is rendered
- **WHEN** the page is displayed
- **THEN** the ticker content SHALL be duplicated for a seamless marquee loop

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name, anchor
links, a status indicator, and a call-to-action.

#### Scenario: Navbar content

- **GIVEN** the Tradewell page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Tradewell" and links to
  Markets, Pricing, and About
- **AND** the navbar SHALL show a "Get Started" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode after a reload

### Requirement: Hero section

The system SHALL render a split hero with a headline, badge, call-to-action
buttons, social proof, and a phone mockup.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Invest Smarter, Trade Better"
- **AND** it SHALL show a "$0 Commission Trading" badge, a "Start Investing"
  button, and a "Watch Demo" button

#### Scenario: Hero social proof

- **GIVEN** the hero is displayed
- **WHEN** the user views the social proof row
- **THEN** it SHALL show a rating of "4.9/5" with review count

#### Scenario: Hero mockup

- **GIVEN** the hero is displayed
- **WHEN** the phone mockup is rendered
- **THEN** it SHALL show a portfolio value, a chart, and at least three
  holdings with percentage gains

### Requirement: Stats section

The system SHALL render a row of four stat cards beneath the hero.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show "12M+ Active Investors" and "$180B+ Assets Under
  Custody" cards
- **AND** it SHALL show "5M+ Trades Executed Daily" and "50+ Countries
  Supported" cards

### Requirement: Features section

The system SHALL render a features section with eight feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Invest
  Confidently"
- **AND** it SHALL show cards for Commission-Free Trading, Fractional Shares,
  and Instant Deposits

### Requirement: Markets section

The system SHALL render a markets section with six asset-class cards.

#### Scenario: Markets content

- **GIVEN** the page is rendered
- **WHEN** the markets section is displayed
- **THEN** it SHALL contain a heading "Trade Multiple Asset Classes"
- **AND** it SHALL show cards for Stocks, ETFs, and Crypto

### Requirement: Security section

The system SHALL render a dark navy security section with six protection cards.

#### Scenario: Security content

- **GIVEN** the page is rendered
- **WHEN** the security section is displayed
- **THEN** it SHALL contain a heading "Your Assets Are Protected & Secure"
- **AND** it SHALL show cards for SIPC Protected, FDIC Insured Cash, and
  256-bit Encryption

### Requirement: Pricing section

The system SHALL render a pricing section with three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, Transparent Pricing"
- **AND** it SHALL show Basic, Pro, and Premium tiers with feature lists

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Loved by 12 Million+ Investors"
- **AND** it SHALL show at least three testimonial quotes with metrics

### Requirement: FAQ section

The system SHALL render an FAQ accordion with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons that expand answers

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and pricing button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Start Building Wealth?"
- **AND** it SHALL show a "Get Started Free" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Products, Company, and Resources link columns
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Tradewell app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the ticker and Navbar, all sections in the
  main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Tradewell — Investing Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh tradewell` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (ticker, navbar, hero, stats,
      features, markets, security, pricing, testimonials, faq, cta, footer)
- [ ] Design tokens in `@theme`: primary blue (oklch hue 250), accent green
      (hue 155), danger red (hue 25), gray scale
- [ ] Fonts: Plus Jakarta Sans + Inter + JetBrains Mono via Google Fonts
- [ ] Buttons: gradient `linear-gradient(135deg, primary-500, primary-600)`,
      rounded-xl, hover glow shadow
- [ ] Security section on dark navy (`primary-950`) background
- [ ] Placeholder images seeded (`picsum.photos/seed/tradewell-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)

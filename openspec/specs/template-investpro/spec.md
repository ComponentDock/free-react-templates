# Template: Investpro (Astro Template)

## Purpose

Investpro is a single-page investing/trading platform landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Investpro" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Investpro" — fintech investing platform template
  (source: https://colorlib.com/wp/template/investpro/).
- **Demo DOM analyzed:** https://investpro-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/investpro/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`investpro-template-1770211264537.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Invest, Markets, Pricing, Learn, About + "Log in" / "Get
     Started" buttons.
  2. Hero: "Invest Smarter, Trade Better" + "Watch Demo" button + social
     proof (12M+ active investors, 4.9/5) + mock portfolio widget
     ("+$2,341.20 (5.19%) today", AAPL holdings, order activity feed).
  3. Features: "Everything You Need to Invest Confidently" — 8 cards
     (Commission-Free Trading, Fractional Shares, Instant Deposits,
     Professional Research, Award-Winning App, Bank-Level Security,
     Developer API, Tax Optimization).
  4. Markets: "Trade Multiple Asset Classes" — 6 cards (Stocks, ETFs,
     Crypto, Options, Bonds, Futures) with min-investment details.
  5. Security: "Your Assets Are Protected & Secure" — 6 cards (SIPC
     Protected, FDIC Insured Cash, 256-bit Encryption, Two-Factor Auth, SEC
     Registered, 24/7 Monitoring).
  6. Pricing: "Simple, Transparent Pricing" — 3 tiers (Basic free, Pro,
     Premium) with feature lists and "Billed monthly".
  7. Testimonials: "Loved by 12 Million+ Investors" — 6 quotes with
     metrics (Portfolio Growth +47%, Trades/Month 500+, Clients Referred
     200+, Crypto Holdings $85K, Tax Savings $3,200, Win Rate 68%).
  8. FAQ: 8 questions (free?, money protection, portfolio transfer,
     fractional shares, retirement accounts, deposit speed, crypto, API).
  9. CTA: "Ready to Start Building Wealth?" + "View Pricing" + app-store
     badges.
  10. Footer: Products / Company / Resources columns + "Important
      Disclosures" legal text + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **#0f74c5** (blue-600) primary, dark navy **#002244**
    surfaces, **#1c398e** deep blue; success green #22c55e / #00ac5f.
  - Neutrals: white / black / dark navy (#030304); dark, financial-style
    hero with grid overlay.
  - Fonts: **"Plus Jakarta Sans"** (display) + **"Inter"** (body) +
    **"JetBrains Mono"** (mono/numbers) via Google Fonts.
  - Shapes: rounded-sm/md/lg/xl/2xl cards, pill buttons, gradient primary
    buttons (`linear-gradient(135deg,var(--color-primary-400)...)`).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/investpro-<n>/<w>/<h>`); icons → lucide-react; Plus
  Jakarta Sans + Inter + JetBrains Mono via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.

Investpro lives in `apps/investpro` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Investpro", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Investpro page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Investpro" and links to
  Features and Pricing
- **AND** the navbar SHALL show a "Get Started" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a call-to-action
button, and social proof.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Invest Smarter, Trade Better"
- **AND** it SHALL show a "Watch Demo" button and investor count social
  proof

### Requirement: Features section

The system SHALL render a features section with at least six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Invest
  Confidently"
- **AND** it SHALL show cards for Commission-Free Trading, Fractional
  Shares, and Instant Deposits

### Requirement: Markets section

The system SHALL render a markets section with at least four asset-class
cards.

#### Scenario: Markets content

- **GIVEN** the page is rendered
- **WHEN** the markets section is displayed
- **THEN** it SHALL contain a heading "Trade Multiple Asset Classes"
- **AND** it SHALL show cards for Stocks, ETFs, and Crypto

### Requirement: Security section

The system SHALL render a security section with at least four protection
cards.

#### Scenario: Security content

- **GIVEN** the page is rendered
- **WHEN** the security section is displayed
- **THEN** it SHALL contain a heading "Your Assets Are Protected & Secure"
- **AND** it SHALL show cards for SIPC Protected, FDIC Insured Cash, and
  256-bit Encryption

### Requirement: Pricing section

The system SHALL render a pricing section with at least three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, Transparent Pricing"
- **AND** it SHALL show Basic, Pro, and Premium tiers

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Loved by 12 Million+ Investors"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and pricing button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Start Building Wealth?"
- **AND** it SHALL show a "View Pricing" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Investpro app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Investpro — Investing Template"

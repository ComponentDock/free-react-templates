# Template: Wealthwise (Astro Template)

## Purpose

Wealthwise is a single-page fintech / AI financial advisor landing template
in the free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Wealthwise" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wealthwise" — AI financial advisor / fintech app
  landing template (source: https://colorlib.com/wp/template/wealthwise/).
- **Demo DOM analyzed:** https://wealthwise-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (64KB) extracted;
  `https://preview.colorlib.com/theme/wealthwise/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`wealthwise-template-1770211049269.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Fixed navbar (blur): "Finley" logo + links Features, How It Works,
     Pricing, About + "Log In" + "Get Started Free" button.
  2. Hero (`pt-32 pb-20`): h1 "Your Personal AI Financial Advisor", blurb,
     buttons "Start Free Trial" + "See How It Works"; stats (Assets
     Advised, Happy Users, App Rating); AI chat mockup ("Finley — Online,
     Ready to help" + sample messages).
  3. Features: "Everything You Need to Build Wealth" — 6 cards (24/7 AI
     Advisor, Smart Portfolio Management, Goal-Based Planning, Bank-Level
     Security, Tax Optimization, Proactive Alerts).
  4. How it works: "Get Started in Minutes" — 4 steps (Connect Your
     Accounts, Tell Finley Your Goals, Get Your Personalized Plan,
     Automate & Grow) + "Start Your Free Trial".
  5. Dashboard preview: "Your Complete Financial Picture" — mock dashboard
     (Total Net Worth $127,450.32, Portfolio Rebalanced, VTI Dividend) +
     tabs (Portfolio Allocation, Goals, Recent Activity).
  6. Testimonials: "Loved by 150,000+ Users" — 3 quotes (Sarah Chen,
     Marcus Johnson, Emily Rodriguez).
  7. Pricing: "Simple, Transparent Pricing" — 3 plans (Free, Plus,
     Premium).
  8. FAQ: "Frequently Asked Questions" — 6 accordion items (AI advisor
     workings, data security, robo-advisor difference, human advisors,
     existing investments, free trial) + "Still have questions? Contact
     support".
  9. CTA (`bg-gradient-to-br from-primary-600 to-primary-800`): "Ready to
     Take Control of Your Finances?" + "Start Free Trial" / "Talk to
     Sales" + "30-day free trial • No credit card required • Cancel
     anytime".
  10. Footer (`border-t bg-gray-50`): "Finley" blurb + Product / Company /
      Resources / Legal columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **purple scale** — #6d49f4 (primary; dark #260c66,
    #11023a) + **teal** secondary #00978a (dark #00322d).
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827, #030712.
  - Fonts: **"Plus Jakarta Sans"** (display) + **"Inter"** (body) via
    Google Fonts.
  - Shapes: rounded cards, pill buttons; sections alternate `bg-gray-50` /
    white with `py-24`; dark mode via dark:bg-gray-900 / dark:bg-gray-950.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/wealthwise-<n>/<w>/<h>`); icons → lucide-react
  (Bot, TrendingUp, Target, ShieldCheck, Receipt, Bell, Link2, MessageSquare,
  LayoutDashboard, Star, ChevronDown, Sparkles, LineChart, Wallet, PiggyBank);
  Plus Jakarta Sans + Inter via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.

Wealthwise lives in `apps/wealthwise` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Finley",
anchor links to the page's sections, a "Get Started Free" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Wealthwise page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Finley" and links to
  Features and Pricing
- **AND** the navbar SHALL show a "Get Started Free" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, two
call-to-action buttons, and an AI chat mockup.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Your Personal AI Financial
  Advisor"
- **AND** it SHALL show "Start Free Trial" and "See How It Works" buttons

#### Scenario: Chat mockup

- **GIVEN** the hero is displayed
- **WHEN** the user reviews the hero
- **THEN** it SHALL show an AI chat mockup with sample messages

### Requirement: Features section

The system SHALL render a features section with six cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Build Wealth"
- **AND** it SHALL show cards for 24/7 AI Advisor, Smart Portfolio
  Management, and Bank-Level Security

### Requirement: How it works section

The system SHALL render a how-it-works section with four steps.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "Get Started in Minutes"
- **AND** it SHALL show the steps Connect Your Accounts, Tell Finley Your
  Goals, and Get Your Personalized Plan

### Requirement: Dashboard preview

The system SHALL render a dashboard preview with a net worth figure.

#### Scenario: Dashboard content

- **GIVEN** the page is rendered
- **WHEN** the dashboard section is displayed
- **THEN** it SHALL contain a heading "Your Complete Financial Picture"
- **AND** it SHALL show a total net worth figure

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Loved by 150,000+ Users"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Pricing section

The system SHALL render a pricing section with three plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, Transparent Pricing"
- **AND** it SHALL show plans for Free, Plus, and Premium

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least six question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Take Control of Your
  Finances?"
- **AND** it SHALL show "Start Free Trial" and "Talk to Sales" buttons

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Product, Company, Resources, Legal)
  and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Wealthwise app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Finley — AI Finance Template"

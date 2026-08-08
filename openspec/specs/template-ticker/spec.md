# Template: Ticker (Trading Education Template)

## Purpose

Ticker is a single-page trading education landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Financeflow" website template design (see TEMPLATES.md —
THREE copies: lines 143, 1751, 2912; mark ALL `[x]` when done), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Financeflow" — trading education template
  (source: https://colorlib.com/wp/template/financeflow/).
- **Preview URL:** `https://preview.colorlib.com/theme/financeflow/` returns
  HTTP 404 (confirmed 2026-08-08 — returns "Not Found", 9 bytes). The live
  rendered demo is hosted on Cloudflare Pages:
  `https://financeflow-colorlib.pages.dev/` (HTTP 200, ~155 KB HTML; Astro
  stylesheet `/_astro/Base.BbxbqmCU.css` ~56 KB parsed for tokens).
  TEMPLATES.md screenshot (`financeflow-template-1770211224122.jpg`,
  2400×1892) viewed in the browser; the pages.dev demo matches the
  screenshot 1:1 (same dark theme, amber/orange accents, green success
  highlights, top ticker bar, "Live Portfolio" glass card in the hero,
  "TradeMaster Pro"-style brand in the nav).
- **Visual design (from screenshot + live demo):** premium dark-mode trading
  education landing page. `<html lang="en" class="dark">` — **dark is the
  DEFAULT** (light mode available via a theme toggle that persists to
  `localStorage`). Base background near-black (`gray-950`/`gray-900`),
  **amber/orange primary** for the logo, gradient buttons and the
  gold-gradient headline accents ("Millionaire Mentors"), **green** for the
  "1,247 traders online now" badge, chart lines, win-rate numbers. Headings
  in a wide display font (Sora), body in Inter, numbers/ticker in JetBrains
  Mono. Signature look: gradient headline spans
  (`gold-gradient bg-clip-text text-transparent`), `rounded-lg` buttons
  with a 135° primary-500→primary-600 gradient, `rounded-xl` cards, glassy
  portfolio card, scrolling font-mono ticker of live prices, avatars +
  "4.9/5 from 2,847 traders" social proof.
- **Section order (1:1):**
  1. Ticker bar (`div.border-y.border-gray-200.bg-gray-100.dark:border-gray-800.dark:bg-gray-900`
     at the very top): `div.ticker-animate.flex.items-center.gap-8.py-2`
     inside `mx-auto max-w-7xl overflow-hidden px-4` — scrolling row of
     `font-mono text-sm` price items (e.g. `BTC $67,423` + green change,
     `ETH`, `SPY`, `EUR/USD`, `XAU/USD`, `TSLA` …) each
     `flex.shrink-0.items-center.gap-3` with a `font-mono text-sm font-medium
text-gray-600 dark:text-gray-400` symbol, a value in
     `text-gray-900 dark:text-white` and a green/red change span. Infinite
     loop via CSS keyframes (ticker-animate).
  2. Header (`header#header.sticky.top-0.z-50.transition-all.duration-300`):
     brand left (logo icon + wordmark, `flex items-center gap-2`), center
     links `rounded-lg px-4 py-2 text-sm font-medium text-gray-600
transition-colors hover:text-gray-900 dark:text-gray-300
dark:hover:text-white` — Courses, Mentors, Markets, Pricing, About
     (anchors to on-page sections); right: theme-toggle button (moon/sun
     icon, `rounded-lg`), "Sign in" text link (`hidden sm:block`), and
     "Start Trading" primary button (`btn-primary`). Mobile hamburger with
     drawer of the same links + CTAs.
  3. Hero (`section.relative.overflow-hidden.bg-gray-50.pb-24.pt-32.dark:bg-gray-950.lg:pb-32.lg:pt-40`):
     two-column on desktop (text left, portfolio card right). Left: live
     badge `span.text-sm.font-medium.text-success-600.dark:text-success-400`
     "1,247 traders online now"; H1 `font-display text-4xl font-bold
tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl`
     "Learn to Trade from" + `span.gold-gradient.bg-clip-text.text-transparent`
     "Millionaire Mentors"; sub-paragraph "Learn to trade stocks, crypto,
     forex, and options from professional traders. Join 50,000+ students
     building wealth through financial education."; CTAs — "Start Trading"
     (`btn-primary inline-flex items-center justify-center gap-2 rounded-lg
px-8 py-4 font-semibold`, text-lg variant in screenshot) + outline
     "Meet Our Mentors" (`inline-flex items-center justify-center gap-2
rounded-lg border border-gray-300 bg-white px-8 py-4 font-semibold
text-gray-900 transition-colors hover:border-gray-400 dark:border-gray-700
dark:bg-gray-900 dark:text-white`); social proof row — avatar stack +
     "4.9/5 from 2,847 traders". Right: glass "Live Portfolio" card —
     title, "Total Balance **$124,723.45**", green SVG line chart
     (upward), notification pill "BTC Long +12.4% just now", inner stats
     strip (`grid grid-cols-3 gap-2 rounded-lg bg-gray-100 p-3 dark:bg-gray-800/50`)
     with 156 Traders / 73% Win Rate / 2.4 Profit Factor.
  4. Stats strip (`section.relative.border-y.border-gray-200.bg-gray-100/50.py-16.dark:border-gray-800.dark:bg-gray-900/50`):
     `grid grid-cols-3` stat blocks with big `font-display` numbers
     (156 / 73% / 2.4 — same figures as the portfolio card) and captions
     "Combined profits from our trading community" / "Across all verified
     student trades" / "Learning and trading with us daily".
  5. Markets (`section.bg-gray-50.py-24.dark:bg-gray-950`): centered H2
     `font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl
lg:text-5xl` "Choose Your Market"; grid of 8 category cards
     (`rounded-lg`/`rounded-xl`, `group-hover:text-primary-600
dark:group-hover:text-primary-400` titles) — Cryptocurrency, Stock
     Trading, Forex, Options Trading, Prediction Markets, Technical
     Analysis, Risk Management, Algorithmic Trading; each with a
     description + "Learn more" text link `font-medium text-primary-600
hover:text-primary-500 dark:text-primary-400`.
  6. Courses (`section.bg-gray-50.py-24.dark:bg-gray-950`): H2 "Master the
     Markets" + sub; 5 course cards — **Crypto Trading Masterclass: From
     Zero to Hero**, **Day Trading Stocks: The Complete System**, **Options
     Trading: The Wheel Strategy**, **Algorithmic Trading with Python**,
     **Technical Analysis: Complete Price Action**; each card: thumbnail
     (picsum), title `font-display text-xl font-bold`, instructor/level,
     rating (e.g. 4.9/5), student count (e.g. 18,500 students), price
     (e.g. $67/$79/$99) and an "Enroll" / "View Course" link.
  7. Mentors (`section.relative.overflow-hidden.bg-gray-100.py-24.dark:bg-gray-900`):
     H2 "Learn from Millionaire Traders" + sub; 4 mentor cards with round
     avatar, name `font-display text-xl font-bold`, role (e.g. "Forex &
     Macro Analyst"), bio + track record (e.g. "Generated $2.4M+ in
     verified profits"), social icons — Alex Krieger, Sarah Chen, Marcus
     Williams, Elena Kowalski.
  8. Testimonials (`section.relative.overflow-hidden.bg-gray-100.py-24.dark:bg-gray-900`):
     H2 "Traders Who Changed Their Lives"; 3 testimonial cards (quote +
     name + role; avatars `h-12 w-12 rounded-full`), e.g. "Success Stories"
     vibe with 5-star ratings.
  9. Pricing (`section.bg-gray-50.py-24.dark:bg-gray-950`): H2 "Invest in
     Your Trading Future" + sub; 3 plan cards — **Free** ($0: "Access to
     free course previews", "Daily market analysis newsletter", "Community
     Discord access", "Basic trading tools"), **Trader** ($79:
     "All courses included", "Live trading room access", "Real-time trade
     alerts", "Weekly mentor Q&A sessions"; highlighted/"most popular"
     card), **Elite** (highest tier) — plus a 4th "Need a Custom
     Solution?" card (enterprise CTA). Plan buttons: `btn-primary` on the
     featured plan, outline/white on the others.
  10. FAQ (`section.bg-gray-50.py-24.dark:bg-gray-950`): eyebrow pill badge
      ("FAQ", `rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium
text-primary-600 dark:text-primary-400`), H2 "Common" +
      `span.gold-gradient` "Questions" + sub "Everything you need to know
      about our trading courses and membership."; accordion
      (`div.space-y-4` of `div.rounded-xl.border.border-gray-200.bg-white
transition-all.dark:border-gray-800.dark:bg-gray-900/50`
      `data-accordion-item`; trigger `button.flex.w-full.items-center.justify-between.p-6`
      with chevron icon in `rounded-full bg-gray-100 p-2`; content
      `div.hidden.px-6.pb-6` `data-accordion-content`) with 8 Q&As: "Do I
      need any prior trading experience?", "Are the trading results and
      profits verified?", "How much capital do I need to start trading?",
      "Do you guarantee profits or specific returns?", "What markets and
      assets do you cover?", "Do I get access to live trading sessions?",
      "What happens if I want a refund?", "Can I access the courses on
      mobile?".
  11. CTA (`section.relative.overflow-hidden.bg-gray-100.py-24.dark:bg-gray-900`):
      H2 `font-display text-4xl sm:text-5xl lg:text-6xl` "Ready to Start
      Your Trading Journey?" + sub + "Start Trading" `btn-primary
px-10 py-5 text-lg` button.
  12. Footer (`footer.border-t.border-gray-200.bg-gray-100.dark:border-gray-800.dark:bg-gray-900`):
      brand blurb + logo; link columns **Markets** (Cryptocurrency, Stock
      Trading, Forex, Options Trading, Prediction Markets), **Popular
      Courses** (Crypto Trading, Day Trading Stocks, Options Strategy, Algo
      Trading, Prediction Markets), **Company** (About, Mentors, Careers,
      Contact), **Legal** (Terms of Service, Privacy Policy, Disclaimer);
      bottom bar — "© 2026 …" + disclaimer line ("Trading involves risk…"
      kind of content) + social icons.
  13. Extras: dark-mode toggle (`theme-toggle` button toggling `.dark` on
      `<html>` + `localStorage.setItem("theme", …)`), sticky header, smooth
      scroll, ticker CSS animation (infinite marquee of the ticker items).
      The demo is a multi-page Astro site (courses/mentors/pricing/login/
      signup/categories are real routes); our recreation is single-page —
      keep nav links as anchors to on-page sections and map the rest to `#`
      placeholders.
- **Design tokens extracted from the demo CSS (`Base.BbxbqmCU.css`, Tailwind
  v4 utilities — `--color-primary-*` scale defined in **oklch**, converted
  to hex here):**
  - Brand primary (amber/orange — put in `@theme` as `--color-primary-*`):
    **primary-300 #EBB25F**, **primary-400 #DC932E**, **primary-500 #CC7800**
    (brand — logo, gradient start), **primary-600 #AB5900** (gradient end,
    link hover), **primary-700 #8F4700** (gold-gradient end), **primary-800
    #713408**. (`oklch(65% .15 65)` etc. — if you prefer the raw oklch
    values: 300 `oklch(80% .12 75)`, 400 `oklch(72% .14 70)`, 500 `oklch(65%
.15 65)`, 600 `oklch(55% .14 60)`, 700 `oklch(48% .12 55)`, 800
    `oklch(40% .1 50)`.)
  - Accent (green/success): **success-400 #2ECB84-ish** (`oklch(68% .14 150)`),
    **success-500 #1C985A** (`oklch(60% .14 155)`), **success-600**
    (`oklch(52% .14 155)` — live badge, win-rate numbers). Danger:
    **danger-500 #DE3B3D** (`oklch(60% .2 25)`) for negative changes.
  - Grays (blue-tinted, hue 250 — demo overrides `--color-gray-*`):
    **gray-50 #F6F9FC** (section bg), **gray-100 #EEF2F7** (ticker bar,
    mentors/testimonials/CTA sections, footer), **gray-200 #E0E5EB**,
    **gray-300 #CBD2D9**, **gray-400 #999FA6** (muted text), **gray-500
    #6D7277**, **gray-600 #52565A** (nav links), **gray-700 #383B3E**,
    **gray-800 #191B1D** (dark card borders), **gray-900 #08090A** (dark
    section bg), **gray-950 #030304** (dark hero bg). Tailwind default
    grays are visually close; overriding `--color-gray-*` is optional.
  - Fonts (Google Fonts `<link>` in `index.html`):
    `family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@500;600;700;800&display=swap` —
    **Sora** via `font-display` for all headings, **Inter** for body/nav/
    buttons, **JetBrains Mono** via `font-mono` for ticker prices, numbers
    and stat values.
  - Radii: **rounded-lg** (buttons, nav links, cards in markets/courses/
    pricing), **rounded-xl** (FAQ accordion items, portfolio card),
    **rounded-full** (badge pills, avatars, accordion icon).
  - Buttons: primary = `.btn-primary { background: linear-gradient(135deg,
var(--color-primary-500), var(--color-primary-600)); color: #fff;
font-weight: 600; }` + `rounded-lg` + padding (nav `px-5 py-2.5 text-sm`,
    hero `px-8 py-4`, CTA `px-10 py-5 text-lg`); secondary/outline =
    `rounded-lg border border-gray-300 bg-white px-8 py-4 font-semibold
text-gray-900 hover:border-gray-400` (dark: `dark:border-gray-700
dark:bg-gray-900 dark:text-white`); text links = `font-medium
text-primary-600 hover:text-primary-500 dark:text-primary-400`.
  - Gold gradient accent: `.gold-gradient { background: linear-gradient(135deg,
var(--color-primary-500), var(--color-primary-700)); }` used with
    `bg-clip-text text-transparent` on headline spans ("Millionaire
    Mentors", "Questions").
  - Section backgrounds: body alternates `bg-gray-50` (hero, markets,
    courses, pricing, FAQ) / `bg-gray-100` (mentors, testimonials, CTA,
    footer) with `py-24` (`py-16` for the stats strip, hero `pt-32 pb-24`);
    dark variants `dark:bg-gray-950` / `dark:bg-gray-900`; **dark is the
    default** (`<html class="dark">`).
  - Container: `mx-auto max-w-7xl px-4 lg:px-8`.
- **Recreation decisions:** brand wordmark "Ticker" (lucide `CandlestickChart`
  or `TrendingUp` icon) instead of "TradeMaster Pro"; copy keeps the same
  _kind_ of content (headline + sub + CTA, market categories, course cards,
  mentor cards, pricing tiers, FAQ). Photos → seeded picsum
  (`picsum.photos/seed/ticker-<n>/<w>/<h>`: hero 800×600, course cards
  800×450, mentor/testimonial avatars 200×200, chart → simple inline SVG
  polyline like the demo). Icons → lucide-react (CandlestickChart,
  TrendingUp, Menu, X, Moon, Sun, ChevronDown, Star, Users, ArrowRight,
  Check, Play); social icons → inline SVG (lucide has Twitter/Github/
  Linkedin, YouTube not included). The demo's multi-page routes collapse to
  single-page anchors. No assets copied; brand amber #CC7800 → #AB5900 in
  `@theme` and `.gold-gradient`/`.btn-primary` as plain Tailwind utilities
  (`bg-gradient-to-br from-primary-500 to-primary-600`, `bg-clip-text`).

Ticker lives in `apps/ticker` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Ticker bar

The system SHALL render a scrolling ticker strip above the header with live
market prices in monospace font.

#### Scenario: Ticker content

- **GIVEN** the Ticker page is rendered
- **WHEN** the page loads
- **THEN** a ticker bar SHALL be visible at the very top with at least six
  market items (e.g. BTC, ETH, SPY, EUR/USD)
- **AND** each item SHALL show a symbol, a price and a change percentage in
  JetBrains Mono
- **AND** positive changes SHALL be green and negative changes red

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the brand wordmark,
section links, a "Sign in" link, a "Start Trading" button, a dark-mode toggle
and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Ticker page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Ticker" on the left
- **AND** SHALL show links for Courses, Mentors, Markets, Pricing and About
- **AND** SHALL show a "Sign in" link and a gradient "Start Trading" button
  on the right

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible drawer SHALL show the same nav links and CTAs
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a two-column hero with a headline, sub-paragraph,
CTAs, social proof and a "Live Portfolio" glass card.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Learn to Trade from Millionaire
  Mentors" with "Millionaire Mentors" in the gold gradient text
- **AND** SHALL show the sub-paragraph about joining 50,000+ students
- **AND** SHALL show a "Start Trading" gradient button and an outline
  secondary button
- **AND** SHALL show the "1,247 traders online now" badge and "4.9/5 from
  2,847 traders" social proof

#### Scenario: Live Portfolio card

- **GIVEN** the hero is displayed
- **WHEN** the portfolio card is visible
- **THEN** it SHALL show the title "Live Portfolio" with a "Total Balance"
  amount
- **AND** SHALL show an upward green line chart and a "BTC Long +12.4%"
  notification
- **AND** SHALL show three stats: 156 Traders, 73% Win Rate, 2.4 Profit
  Factor

### Requirement: Stats strip

The system SHALL render a stats strip between the hero and markets section
with three statistics.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats strip is displayed
- **THEN** it SHALL show the three figures 156 / 73% / 2.4
- **AND** SHALL show the captions "Combined profits from our trading
  community", "Across all verified student trades" and "Learning and
  trading with us daily"

### Requirement: Markets section

The system SHALL render a "Choose Your Market" section with eight market
category cards.

#### Scenario: Markets content

- **GIVEN** the page is rendered
- **WHEN** the markets section is displayed
- **THEN** it SHALL show the heading "Choose Your Market"
- **AND** SHALL show eight cards: Cryptocurrency, Stock Trading, Forex,
  Options Trading, Prediction Markets, Technical Analysis, Risk Management
  and Algorithmic Trading
- **AND** each card SHALL show a description and a "Learn more" link

### Requirement: Courses section

The system SHALL render a "Master the Markets" section with five course
cards, each with a price, rating and student count.

#### Scenario: Courses content

- **GIVEN** the page is rendered
- **WHEN** the courses section is displayed
- **THEN** it SHALL show the heading "Master the Markets"
- **AND** SHALL show five courses: Crypto Trading Masterclass, Day Trading
  Stocks, Options Trading: The Wheel Strategy, Algorithmic Trading with
  Python and Technical Analysis: Complete Price Action
- **AND** each card SHALL show a price, rating and student count

### Requirement: Mentors section

The system SHALL render a "Learn from Millionaire Traders" section with four
mentor cards.

#### Scenario: Mentors content

- **GIVEN** the page is rendered
- **WHEN** the mentors section is displayed
- **THEN** it SHALL show the heading "Learn from Millionaire Traders"
- **AND** SHALL show four mentors: Alex Krieger, Sarah Chen, Marcus
  Williams and Elena Kowalski
- **AND** each card SHALL show a round avatar, role and track record

### Requirement: Testimonials section

The system SHALL render a "Traders Who Changed Their Lives" section with
testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Traders Who Changed Their Lives"
- **AND** SHALL show at least three testimonials with round avatar images

### Requirement: Pricing section

The system SHALL render an "Invest in Your Trading Future" section with
three plan cards and a custom-solution card.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Invest in Your Trading Future"
- **AND** SHALL show three plans: Free ($0), Trader ($79) and Elite
- **AND** the Trader plan SHALL be highlighted as the popular option
- **AND** SHALL show a "Need a Custom Solution?" enterprise card

### Requirement: FAQ section

The system SHALL render a "Common Questions" accordion with at least eight
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Common Questions" with "Questions" in
  the gold gradient text
- **AND** SHALL show at least eight questions including "Do I need any
  prior trading experience?" and "Do you guarantee profits or specific
  returns?"

#### Scenario: Accordion interaction

- **GIVEN** an FAQ item is closed
- **WHEN** the user clicks the question
- **THEN** the answer SHALL expand and the chevron SHALL rotate
- **AND** clicking again SHALL collapse the answer

### Requirement: CTA banner

The system SHALL render a final "Ready to Start Your Trading Journey?" CTA
section with a Start Trading button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the headline "Ready to Start Your Trading
  Journey?"
- **AND** SHALL show a large "Start Trading" gradient button

### Requirement: Footer

The system SHALL render a footer with a brand blurb, four link columns, a
disclaimer and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb and logo
- **AND** SHALL show Markets links (Cryptocurrency, Stock Trading, Forex,
  Options Trading, Prediction Markets)
- **AND** SHALL show Popular Courses links (Crypto Trading, Day Trading
  Stocks, Options Strategy, Algo Trading, Prediction Markets)
- **AND** SHALL show Company links (About, Mentors, Careers, Contact)
- **AND** SHALL show Legal links (Terms of Service, Privacy Policy,
  Disclaimer)
- **AND** SHALL show a copyright line and a trading-risk disclaimer

### Requirement: Dark mode

The system SHALL ship with dark mode as the DEFAULT (`.dark` on the document
root) and SHALL support a toggle that persists the choice.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the theme toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the choice SHALL persist via localStorage

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a main
landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Ticker app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the ticker bar and Navbar in the banner
  landmark, all sections in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Ticker — Trading Education Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/ticker`
- [ ] `npm run lint` passes for `apps/ticker`
- [ ] `scripts/verify-app.sh ticker` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Ticker bar: animated font-mono market prices with green/red changes
- [ ] Navbar: wordmark + 5 links, "Sign in" + gradient "Start Trading",
      dark toggle, mobile drawer with aria-expanded
- [ ] Hero: "Learn to Trade from Millionaire Mentors" (gold gradient span),
      sub, gradient CTA + outline CTA, live badge, avatar rating row; "Live
      Portfolio" glass card with balance, green chart, BTC notification,
      156/73%/2.4 stats
- [ ] Stats strip: 156 / 73% / 2.4 with the three captions
- [ ] Markets: "Choose Your Market" — 8 category cards with descriptions
- [ ] Courses: "Master the Markets" — 5 cards with price/rating/students
- [ ] Mentors: "Learn from Millionaire Traders" — 4 cards (Krieger, Chen,
      Williams, Kowalski) with roles
- [ ] Testimonials: "Traders Who Changed Their Lives" — 3+ cards with
      avatars
- [ ] Pricing: "Invest in Your Trading Future" — Free/Trader/Elite +
      "Need a Custom Solution?" card, Trader highlighted
- [ ] FAQ: "Common Questions" accordion — 8 Q&As, chevron rotation,
      expand/collapse
- [ ] CTA: "Ready to Start Your Trading Journey?" + large gradient button
- [ ] Footer: blurb, Markets/Popular Courses/Company/Legal columns,
      disclaimer, copyright
- [ ] Dark mode default ON, toggle persists via localStorage
- [ ] Placeholder images via seeded picsum (`seed/ticker-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; amber #CC7800 → #AB5900 gradient in
      `@theme`/utilities

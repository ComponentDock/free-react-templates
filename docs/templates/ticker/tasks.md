# Ticker (ColorLib Financeflow) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-ticker`.

## Source mapping

- **ColorLib item:** "Financeflow" (TEMPLATES.md — THREE copies, lines 143,
  1751, 2912; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/financeflow/
- **Preview URL:** https://financeflow-colorlib.pages.dev/
  (HTTP 200, ~155 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/financeflow/` returns 404 — the ColorLib
  preview portal maps this slug to `financeflow-colorlib.pages.dev/`.
  Do not redo this lookup.
- **Preview CSS:** `https://financeflow-colorlib.pages.dev/_astro/Base.BbxbqmCU.css`
  (Tailwind v4 output, ~56 KB; tokens extracted below, oklch → hex).

## Reference research (done — do not redo)

### Screenshot (`financeflow-template-1770211224122.jpg`, 2400×1892; verified via vision)

Premium DARK-mode trading education landing page. Top: scrolling stock
ticker (ETH, SPY, EUR/USD prices). Nav: "TradeMaster Pro" logo, links
(Courses/Mentors/Markets/Pricing/About), "Markets Open" status light,
"Sign In", orange pill "Start Trading". Hero split-screen: left — headline
"Learn to Trade from **Millionaire Mentors**" (orange accent), sub-paragraph,
stats ($47.2M+ Student Profits, 73% Avg Win Rate, 15K+ Active Traders), big
orange pill "Start Trading Today →", dark "Meet Our Mentors" secondary,
avatar stack + 4.9/5 from 2,847 traders; right — floating glass "Live
Portfolio" card: "Total Balance 23.45", green upward line chart, "BTC Long
+12.4% just now" notification, mini stats (156 Traders, 73% Win Rate, 2.4
Profit Factor). Palette: deep near-black background (#0f1115-ish), vibrant
amber/orange accents, neon green profit highlights. Clean sans typography,
bold heavy display headings. Dark footer below.

### Live DOM (primary reference — matches the screenshot)

`<html lang="en" class="dark">` — dark is the DEFAULT, light via toggle.
Section order: ticker bar (border-y, bg-gray-100 dark:bg-gray-900; `div.ticker-animate.flex.items-center.gap-8.py-2` — font-mono price items: BTC $67,423 +green, ETH, SPY, EUR/USD, XAU/USD, TSLA) → header (`header#header.sticky.top-0.z-50.transition-all.duration-300`: brand + 5 links Courses/Mentors/Markets/Pricing/About `rounded-lg px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300`, theme-toggle button, "Sign in" link `hidden sm:block`, "Start Trading" `.btn-primary`; mobile hamburger drawer) → hero (`relative overflow-hidden bg-gray-50 pb-24 pt-32 dark:bg-gray-950 lg:pb-32 lg:pt-40`: success-600 badge "1,247 traders online now", H1 `font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` "Learn to Trade from" + `span.gold-gradient.bg-clip-text.text-transparent` "Millionaire Mentors", sub "Learn to trade stocks, crypto, forex, and options from professional traders. Join 50,000+ students building wealth through financial education.", CTAs `.btn-primary px-8 py-4 font-semibold` "Start Trading" + outline `rounded-lg border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-900 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white` "Meet Our Mentors", avatar stack + "4.9/5 from 2,847 traders"; right "Live Portfolio" card: "Total Balance **$124,723.45**", green SVG line chart, "BTC Long +12.4% just now" pill, inner `grid grid-cols-3 gap-2 rounded-lg bg-gray-100 p-3 dark:bg-gray-800/50` — 156 Traders / 73% Win Rate / 2.4 Profit Factor) → stats strip (`relative border-y border-gray-200 bg-gray-100/50 py-16 dark:border-gray-800 dark:bg-gray-900/50`, `grid grid-cols-3`: 156 / 73% / 2.4 + captions "Combined profits from our trading community" / "Across all verified student trades" / "Learning and trading with us daily") → markets (`bg-gray-50 py-24 dark:bg-gray-950`; H2 `font-display text-3xl sm:text-4xl lg:text-5xl font-bold` "Choose Your Market"; 8 cards: Cryptocurrency, Stock Trading, Forex, Options Trading, Prediction Markets, Technical Analysis, Risk Management, Algorithmic Trading; title `font-display text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400` + desc + "Learn more" text link) → courses (`bg-gray-50 py-24 dark:bg-gray-950`; "Master the Markets"; 5 cards: Crypto Trading Masterclass: From Zero to Hero, Day Trading Stocks: The Complete System, Options Trading: The Wheel Strategy, Algorithmic Trading with Python, Technical Analysis: Complete Price Action — price/rating/students) → mentors (`relative overflow-hidden bg-gray-100 py-24 dark:bg-gray-900`; "Learn from Millionaire Traders"; 4 cards: Alex Krieger, Sarah Chen, Marcus Williams, Elena Kowalski — round avatar, role e.g. "Forex & Macro Analyst", track record) → testimonials (`relative overflow-hidden bg-gray-100 py-24 dark:bg-gray-900`; "Traders Who Changed Their Lives"; 3 cards, avatars `h-12 w-12 rounded-full`) → pricing (`bg-gray-50 py-24 dark:bg-gray-950`; "Invest in Your Trading Future"; Free $0 — 4 features, Trader $79 — "All courses included" etc. (featured), Elite, + "Need a Custom Solution?" card) → FAQ (`bg-gray-50 py-24 dark:bg-gray-950`; pill badge "FAQ" `rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-400`, H2 "Common" + gold-gradient "Questions", sub; 8 `data-accordion-item` rows `rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/50`, trigger `flex w-full items-center justify-between p-6`, chevron in `rounded-full bg-gray-100 p-2 dark:bg-gray-800`, content `hidden px-6 pb-6`) → CTA (`relative overflow-hidden bg-gray-100 py-24 dark:bg-gray-900`; H2 `font-display text-4xl sm:text-5xl lg:text-6xl` "Ready to Start Your Trading Journey?" + `.btn-primary px-10 py-5 text-lg`) → footer (`border-t border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900`: brand blurb + columns Markets / Popular Courses / Company / Legal + disclaimer + "© 2026" + socials).

## Design tokens (from `Base.BbxbqmCU.css` — oklch converted to hex)

- **Primary (amber/orange scale):** 300 #EBB25F · 400 #DC932E · 500 #CC7800
  (brand, gradient start) · 600 #AB5900 (gradient end, text-link hover) ·
  700 #8F4700 (gold-gradient end) · 800 #713408. → `@theme` as
  `--color-primary-*`. Raw oklch: 300 `oklch(80% .12 75)` · 400
  `oklch(72% .14 70)` · 500 `oklch(65% .15 65)` · 600 `oklch(55% .14 60)` ·
  700 `oklch(48% .12 55)` · 800 `oklch(40% .1 50)`.
- **Success green:** 400 `oklch(68% .14 150)` ≈ #2ECB84 · 500 #1C985A ·
  600 `oklch(52% .14 155)` (badge, win rates). **Danger red:** 500 #DE3B3D
  (`oklch(60% .2 25)`).
- **Grays (blue-tinted, hue 250):** 50 #F6F9FC · 100 #EEF2F7 (ticker,
  mentors/testimonials/CTA, footer) · 200 #E0E5EB · 300 #CBD2D9 · 400
  #999FA6 (muted) · 500 #6D7277 · 600 #52565A (nav links) · 700 #383B3E ·
  800 #191B1D · 900 #08090A (dark sections) · 950 #030304 (dark hero).
  Tailwind defaults are close enough if you don't override.
- **Fonts:** Sora (500–800) via `font-display` for headings; Inter
  (400–700) body/nav/buttons; JetBrains Mono (400–600) via `font-mono` for
  ticker + numbers. One Google Fonts `<link>`:
  `family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@500;600;700;800&display=swap`.
- **Gradients:** `.btn-primary { background: linear-gradient(135deg,
var(--color-primary-500), var(--color-primary-600)); color:#fff;
font-weight:600 }` → Tailwind `bg-gradient-to-br from-primary-500
to-primary-600`. `.gold-gradient { linear-gradient(135deg, primary-500,
primary-700) }` + `bg-clip-text text-transparent` for headline spans
  ("Millionaire Mentors", "Questions").
- **Radii:** rounded-lg (buttons, cards, nav links) · rounded-xl (FAQ,
  portfolio card) · rounded-full (badges, avatars, accordion icon).
- **Buttons:** primary `btn-primary rounded-lg` (nav px-5 py-2.5 text-sm /
  hero px-8 py-4 / CTA px-10 py-5 text-lg); secondary outline `rounded-lg
border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-900
hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white`;
  text link `font-medium text-primary-600 hover:text-primary-500
dark:text-primary-400`.
- **Sections:** alternate `bg-gray-50 py-24 dark:bg-gray-950` (hero — `pt-32
pb-24`; markets, courses, pricing, FAQ) / `bg-gray-100 py-24 dark:bg-gray-900`
  (mentors, testimonials, CTA, footer) + stats strip `bg-gray-100/50 py-16
border-y`. Container `mx-auto max-w-7xl px-4 lg:px-8`.
- **Dark mode:** `<html class="dark">` DEFAULT; toggle button
  (`theme-toggle`) flips `.dark` + `localStorage.setItem("theme", …)`.

## Implementation tasks (TDD order)

1. Scaffold `apps/ticker` (copy simplest app, rename package
   `@free-react-templates/ticker`, register `injectUiSource()` in
   `vite.config.ts`, run `npm install` at root so package-lock registers
   the workspace; `grep -c "free-react-templates/ticker" package-lock.json`
   ≥ 1).
2. `index.css`: `@theme` — `--color-primary-*` amber scale; font
   `--font-display` → Sora, `--font-mono` → JetBrains Mono; import Google
   Fonts in `index.html`; dark default (`document.documentElement.classList.add('dark')`
   in `main.tsx` or inline script before render).
3. Components: `TickerBar` (animated font-mono prices, CSS marquee),
   `Navbar` (sticky, links, Sign in, Start Trading gradient button, theme
   toggle, mobile drawer w/ aria-expanded), `Hero` (badge, gold-gradient
   headline, CTAs, avatar rating row, "Live Portfolio" glass card w/ SVG
   chart + 156/73%/2.4 stats), `StatsStrip`, `Markets` (8 cards),
   `Courses` (5 cards w/ price/rating/students), `Mentors` (4 cards),
   `Testimonials` (3 cards), `Pricing` (Free/Trader/Elite + custom card),
   `Faq` (accordion w/ chevron rotate, aria-expanded), `CtaBanner`, `Footer`
   (4 columns + disclaimer + legal). Compose in `App.tsx`.
4. Tests per component mirroring the spec scenarios (100% coverage; accordion
   open/close state, mobile nav duplicates → `getAllByRole` + index).
5. Icons: lucide-react `CandlestickChart`/`TrendingUp`, `Menu`, `X`, `Moon`,
   `Sun`, `ChevronDown`, `Star`, `Users`, `ArrowRight`, `Check`, `Play`;
   social (Twitter/Github/Linkedin) from lucide or inline SVG.
6. Images: `picsum.photos/seed/ticker-1/1600/900` (hero side), course cards
   `ticker-2..6` 800×450, avatars `ticker-7..` 200×200. Chart = inline SVG
   polyline, not an image.
7. Verify: `scripts/verify-app.sh ticker`; push PR, squash-merge
   immediately, then `[~]`→`[x]` on ALL THREE TEMPLATES.md lines (143,
   1751, 2912) + surge URL + `npm run readme:status`.

## Fidelity notes

- Section order + headings are the fidelity contract — keep 1:1.
- Dark mode is the DEFAULT (`<html class="dark">`) — do not ship light-only.
- The amber gradient (`from-primary-500 to-primary-600` buttons,
  `from-primary-500 to-primary-700` gold-gradient headline spans) is the
  signature look — do not replace with flat colors.
- font-display (Sora) headings vs Inter body vs JetBrains Mono numbers is
  essential to the look.
- Ticker bar animation is part of the design (infinite marquee).
- Multi-page routes (courses/mentors/pricing/login/signup/about) collapse to
  single-page anchors; keep the nav link LABELS unchanged.
- Screenshot vs demo agree (dark theme, same hero, ticker, portfolio card);
  the demo's stats wording (156/73%/2.4) is authoritative; the screenshot's
  $47.2M+/15K+ wording is an older variant — either is fine, keep numbers
  consistent within the page.
